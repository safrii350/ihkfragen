// ===== AUDIO FEEDBACK SYSTEM =====

class AudioManager {
  constructor() {
    this.audioContext = null;
    this.isMuted = false;
    this.volume = 0.3;
    this.hasPlayedTestSound = false;

    this.init();
  }

  init() {
    this.setupAudioContext();
    this.setupEventListeners();
    this.loadAudioSettings();
  }

  setupAudioContext() {
    try {
      // Create audio context for modern browsers
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioContext();

      // Resume audio context on user interaction
      document.addEventListener(
        "click",
        () => {
          if (this.audioContext.state === "suspended") {
            this.audioContext.resume();
          }
        },
        { once: true }
      );
    } catch (error) {
      console.warn("Web Audio API nicht unterstützt:", error);
    }
  }

  setupEventListeners() {
    const audioToggle = document.getElementById("audioToggle");
    if (audioToggle) {
      audioToggle.addEventListener("click", () => {
        this.toggleMute();
      });
    }

    // Add test sound on first click anywhere
    document.addEventListener(
      "click",
      () => {
        if (!this.hasPlayedTestSound && !this.isMuted) {
          this.playTestSound();
          this.hasPlayedTestSound = true;
        }
      },
      { once: true }
    );
  }

  loadAudioSettings() {
    try {
      const settings = localStorage.getItem("audioSettings");
      if (settings) {
        const parsed = JSON.parse(settings);
        this.isMuted = parsed.isMuted || false;
        this.volume = parsed.volume || 0.3;
        this.updateAudioIcon();
      }
    } catch (error) {
      console.error("Fehler beim Laden der Audio-Einstellungen:", error);
    }
  }

  saveAudioSettings() {
    try {
      const settings = {
        isMuted: this.isMuted,
        volume: this.volume,
      };
      localStorage.setItem("audioSettings", JSON.stringify(settings));
    } catch (error) {
      console.error("Fehler beim Speichern der Audio-Einstellungen:", error);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.updateAudioIcon();
    this.saveAudioSettings();

    // Play a test sound if unmuting
    if (!this.isMuted) {
      this.playTestSound();
    }
  }

  updateAudioIcon() {
    const audioIcon = document.getElementById("audioIcon");
    const audioToggle = document.getElementById("audioToggle");

    if (audioIcon && audioToggle) {
      if (this.isMuted) {
        audioIcon.className = "fas fa-volume-mute";
        audioToggle.classList.add("muted");
      } else {
        audioIcon.className = "fas fa-volume-up";
        audioToggle.classList.remove("muted");
      }
    }
  }

  playFeedback(isCorrect) {
    if (this.isMuted) return;

    // Ensure audio context is running
    if (this.audioContext && this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }

    if (isCorrect) {
      this.playCorrectSound();
    } else {
      this.playIncorrectSound();
    }
  }

  playCorrectSound() {
    if (!this.audioContext) return;

    try {
      this.playTone(800, 0.2, "sine"); // High pitch, short duration
      setTimeout(() => {
        this.playTone(1000, 0.3, "sine"); // Higher pitch, longer duration
      }, 100);
    } catch (error) {
      console.warn("Fehler beim Abspielen des korrekten Sounds:", error);
    }
  }

  playIncorrectSound() {
    if (!this.audioContext) return;

    try {
      this.playTone(200, 0.3, "sawtooth"); // Low pitch, harsh sound
      setTimeout(() => {
        this.playTone(150, 0.2, "sawtooth"); // Even lower pitch
      }, 150);
    } catch (error) {
      console.warn("Fehler beim Abspielen des falschen Sounds:", error);
    }
  }

  playTimerWarning() {
    if (this.isMuted || !this.audioContext) return;

    this.playTone(400, 0.1, "square"); // Warning tone
  }

  playTimerDanger() {
    if (this.isMuted || !this.audioContext) return;

    this.playTone(300, 0.15, "sawtooth"); // Danger tone
    setTimeout(() => {
      this.playTone(250, 0.15, "sawtooth"); // Lower danger tone
    }, 100);
  }

  playTestSound() {
    this.playTone(600, 0.1, "sine"); // Test tone
  }

  playTone(frequency, duration, type = "sine") {
    if (!this.audioContext) return;

    // Ensure audio context is running
    if (this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }

    try {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.setValueAtTime(
        frequency,
        this.audioContext.currentTime
      );
      oscillator.type = type;

      // Set volume
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(
        this.volume,
        this.audioContext.currentTime + 0.01
      );
      gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        this.audioContext.currentTime + duration
      );

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);
    } catch (error) {
      console.warn("Fehler beim Abspielen des Tons:", error);
    }
  }

  // Alternative method using Web Audio API with pre-generated sounds
  generateCorrectSound() {
    if (!this.audioContext) return;

    const sampleRate = this.audioContext.sampleRate;
    const duration = 0.3;
    const buffer = this.audioContext.createBuffer(
      1,
      sampleRate * duration,
      sampleRate
    );
    const data = buffer.getChannelData(0);

    // Generate a pleasant two-tone sound
    for (let i = 0; i < buffer.length; i++) {
      const t = i / sampleRate;
      const freq1 = 800;
      const freq2 = 1000;

      data[i] =
        Math.sin(2 * Math.PI * freq1 * t) * 0.3 +
        Math.sin(2 * Math.PI * freq2 * t) * 0.2;

      // Apply fade out
      if (t > duration * 0.7) {
        data[i] *= (duration - t) / (duration * 0.3);
      }
    }

    return buffer;
  }

  generateIncorrectSound() {
    if (!this.audioContext) return;

    const sampleRate = this.audioContext.sampleRate;
    const duration = 0.4;
    const buffer = this.audioContext.createBuffer(
      1,
      sampleRate * duration,
      sampleRate
    );
    const data = buffer.getChannelData(0);

    // Generate a harsh error sound
    for (let i = 0; i < buffer.length; i++) {
      const t = i / sampleRate;
      const freq = 200 + 50 * Math.sin(2 * Math.PI * 5 * t); // Frequency modulation

      data[i] = Math.sin(2 * Math.PI * freq * t) * 0.4;

      // Apply harsh envelope
      if (t < 0.1) {
        data[i] *= t / 0.1; // Attack
      } else if (t > duration * 0.8) {
        data[i] *= (duration - t) / (duration * 0.2); // Release
      }
    }

    return buffer;
  }

  playBuffer(buffer) {
    if (!this.audioContext || this.isMuted) return;

    try {
      const source = this.audioContext.createBufferSource();
      const gainNode = this.audioContext.createGain();

      source.buffer = buffer;
      source.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      gainNode.gain.setValueAtTime(this.volume, this.audioContext.currentTime);
      source.start();
    } catch (error) {
      console.error("Fehler beim Abspielen des Audio-Buffers:", error);
    }
  }

  // Method to play timer sounds based on time left
  playTimerSound(timeLeft) {
    if (this.isMuted) return;

    if (timeLeft <= 5) {
      this.playTimerDanger();
    } else if (timeLeft <= 10) {
      this.playTimerWarning();
    }
  }

  // Method to play completion sound
  playCompletionSound(passed) {
    if (this.isMuted || !this.audioContext) return;

    if (passed) {
      // Play success melody
      this.playTone(523, 0.2, "sine"); // C
      setTimeout(() => this.playTone(659, 0.2, "sine"), 200); // E
      setTimeout(() => this.playTone(784, 0.3, "sine"), 400); // G
    } else {
      // Play failure sound
      this.playTone(200, 0.5, "sawtooth");
    }
  }

  // Method to set volume
  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    this.saveAudioSettings();
  }

  // Method to get current volume
  getVolume() {
    return this.volume;
  }

  // Method to check if audio is muted
  isAudioMuted() {
    return this.isMuted;
  }

  // Method to enable/disable audio
  enableAudio() {
    this.isMuted = false;
    this.updateAudioIcon();
    this.saveAudioSettings();
  }

  disableAudio() {
    this.isMuted = true;
    this.updateAudioIcon();
    this.saveAudioSettings();
  }
}

// Initialize audio manager when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  try {
    window.audioManager = new AudioManager();

    // Test audio functionality after user interaction
    document.addEventListener(
      "click",
      () => {
        if (
          window.audioManager &&
          window.audioManager.audioContext &&
          window.audioManager.audioContext.state === "suspended"
        ) {
          window.audioManager.audioContext.resume();
        }
      },
      { once: true }
    );

    console.log("Audio Manager erfolgreich initialisiert");
  } catch (error) {
    console.error("Fehler bei der Audio Manager Initialisierung:", error);
  }
});

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = AudioManager;
}
