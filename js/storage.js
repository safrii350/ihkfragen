// ===== LOCALSTORAGE MANAGEMENT =====

class StorageManager {
  constructor() {
    this.storageKey = "quizProgress";
    this.settingsKey = "quizSettings";
    this.audioKey = "audioSettings";
    this.statsKey = "quizStats";
  }

  // ===== PROGRESS MANAGEMENT =====

  saveProgress(phase, data) {
    try {
      const progress = this.getProgress();
      progress[`phase${phase}`] = {
        ...data,
        timestamp: new Date().toISOString(),
      };

      localStorage.setItem(this.storageKey, JSON.stringify(progress));
      return true;
    } catch (error) {
      console.error("Fehler beim Speichern des Fortschritts:", error);
      return false;
    }
  }

  getProgress() {
    try {
      const progress = localStorage.getItem(this.storageKey);
      return progress ? JSON.parse(progress) : {};
    } catch (error) {
      console.error("Fehler beim Laden des Fortschritts:", error);
      return {};
    }
  }

  getPhaseProgress(phase) {
    const progress = this.getProgress();
    return progress[`phase${phase}`] || null;
  }

  isPhaseCompleted(phase) {
    const phaseProgress = this.getPhaseProgress(phase);
    return phaseProgress && phaseProgress.completed === true;
  }

  getPhaseScore(phase) {
    const phaseProgress = this.getPhaseProgress(phase);
    return phaseProgress ? phaseProgress.score : 0;
  }

  clearProgress() {
    try {
      localStorage.removeItem(this.storageKey);
      return true;
    } catch (error) {
      console.error("Fehler beim Löschen des Fortschritts:", error);
      return false;
    }
  }

  // ===== SETTINGS MANAGEMENT =====

  saveSettings(settings) {
    try {
      localStorage.setItem(this.settingsKey, JSON.stringify(settings));
      return true;
    } catch (error) {
      console.error("Fehler beim Speichern der Einstellungen:", error);
      return false;
    }
  }

  getSettings() {
    try {
      const settings = localStorage.getItem(this.settingsKey);
      return settings ? JSON.parse(settings) : this.getDefaultSettings();
    } catch (error) {
      console.error("Fehler beim Laden der Einstellungen:", error);
      return this.getDefaultSettings();
    }
  }

  getDefaultSettings() {
    return {
      audioEnabled: true,
      audioVolume: 0.3,
      showTimer: true,
      showProgress: true,
      theme: "light",
      language: "de",
    };
  }

  updateSetting(key, value) {
    try {
      const settings = this.getSettings();
      settings[key] = value;
      this.saveSettings(settings);
      return true;
    } catch (error) {
      console.error("Fehler beim Aktualisieren der Einstellung:", error);
      return false;
    }
  }

  // ===== AUDIO SETTINGS =====

  saveAudioSettings(audioSettings) {
    try {
      localStorage.setItem(this.audioKey, JSON.stringify(audioSettings));
      return true;
    } catch (error) {
      console.error("Fehler beim Speichern der Audio-Einstellungen:", error);
      return false;
    }
  }

  getAudioSettings() {
    try {
      const settings = localStorage.getItem(this.audioKey);
      return settings ? JSON.parse(settings) : this.getDefaultAudioSettings();
    } catch (error) {
      console.error("Fehler beim Laden der Audio-Einstellungen:", error);
      return this.getDefaultAudioSettings();
    }
  }

  getDefaultAudioSettings() {
    return {
      isMuted: false,
      volume: 0.3,
      feedbackEnabled: true,
      timerSounds: true,
    };
  }

  // ===== STATISTICS MANAGEMENT =====

  saveStats(stats) {
    try {
      const currentStats = this.getStats();
      const updatedStats = this.mergeStats(currentStats, stats);
      localStorage.setItem(this.statsKey, JSON.stringify(updatedStats));
      return true;
    } catch (error) {
      console.error("Fehler beim Speichern der Statistiken:", error);
      return false;
    }
  }

  getStats() {
    try {
      const stats = localStorage.getItem(this.statsKey);
      return stats ? JSON.parse(stats) : this.getDefaultStats();
    } catch (error) {
      console.error("Fehler beim Laden der Statistiken:", error);
      return this.getDefaultStats();
    }
  }

  getDefaultStats() {
    return {
      totalQuizzes: 0,
      totalQuestions: 0,
      correctAnswers: 0,
      averageScore: 0,
      bestScore: 0,
      totalTime: 0,
      phase1Attempts: 0,
      phase1Completions: 0,
      phase1BestScore: 0,
      lastQuizDate: null,
    };
  }

  mergeStats(currentStats, newStats) {
    return {
      totalQuizzes: currentStats.totalQuizzes + 1,
      totalQuestions:
        currentStats.totalQuestions + (newStats.totalQuestions || 0),
      correctAnswers:
        currentStats.correctAnswers + (newStats.correctAnswers || 0),
      averageScore: this.calculateAverageScore(currentStats, newStats),
      bestScore: Math.max(currentStats.bestScore, newStats.score || 0),
      totalTime: currentStats.totalTime + (newStats.timeSpent || 0),
      phase1Attempts:
        currentStats.phase1Attempts + (newStats.phase === 1 ? 1 : 0),
      phase1Completions:
        currentStats.phase1Completions +
        (newStats.phase === 1 && newStats.completed ? 1 : 0),
      phase1BestScore:
        newStats.phase === 1
          ? Math.max(currentStats.phase1BestScore, newStats.score || 0)
          : currentStats.phase1BestScore,
      lastQuizDate: new Date().toISOString(),
    };
  }

  calculateAverageScore(currentStats, newStats) {
    const totalQuizzes = currentStats.totalQuizzes + 1;
    const totalScore =
      currentStats.averageScore * currentStats.totalQuizzes +
      (newStats.score || 0);
    return Math.round(totalScore / totalQuizzes);
  }

  // ===== UTILITY METHODS =====

  exportData() {
    try {
      const data = {
        progress: this.getProgress(),
        settings: this.getSettings(),
        audioSettings: this.getAudioSettings(),
        stats: this.getStats(),
        exportDate: new Date().toISOString(),
        version: "1.0",
      };

      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `quiz-data-${new Date().toISOString().split("T")[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      return true;
    } catch (error) {
      console.error("Fehler beim Exportieren der Daten:", error);
      return false;
    }
  }

  importData(jsonData) {
    try {
      const data = JSON.parse(jsonData);

      if (data.progress) {
        localStorage.setItem(this.storageKey, JSON.stringify(data.progress));
      }

      if (data.settings) {
        localStorage.setItem(this.settingsKey, JSON.stringify(data.settings));
      }

      if (data.audioSettings) {
        localStorage.setItem(this.audioKey, JSON.stringify(data.audioSettings));
      }

      if (data.stats) {
        localStorage.setItem(this.statsKey, JSON.stringify(data.stats));
      }

      return true;
    } catch (error) {
      console.error("Fehler beim Importieren der Daten:", error);
      return false;
    }
  }

  clearAllData() {
    try {
      localStorage.removeItem(this.storageKey);
      localStorage.removeItem(this.settingsKey);
      localStorage.removeItem(this.audioKey);
      localStorage.removeItem(this.statsKey);
      return true;
    } catch (error) {
      console.error("Fehler beim Löschen aller Daten:", error);
      return false;
    }
  }

  getStorageUsage() {
    try {
      const total = 0;
      const used = 0;

      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          used += localStorage[key].length;
        }
      }

      return {
        used: used,
        total: 5242880, // 5MB typical localStorage limit
        percentage: (used / 5242880) * 100,
      };
    } catch (error) {
      console.error("Fehler beim Berechnen der Speichernutzung:", error);
      return { used: 0, total: 5242880, percentage: 0 };
    }
  }

  // ===== VALIDATION METHODS =====

  validateProgressData(data) {
    const requiredFields = ["score", "completed", "timestamp"];
    return requiredFields.every((field) => data.hasOwnProperty(field));
  }

  validateSettingsData(data) {
    const requiredFields = ["audioEnabled", "theme"];
    return requiredFields.every((field) => data.hasOwnProperty(field));
  }

  // ===== MIGRATION METHODS =====

  migrateData() {
    try {
      const version = localStorage.getItem("quizVersion");
      const currentVersion = "1.0";

      if (version !== currentVersion) {
        // Perform migration if needed
        this.performMigration(version, currentVersion);
        localStorage.setItem("quizVersion", currentVersion);
      }

      return true;
    } catch (error) {
      console.error("Fehler bei der Datenmigration:", error);
      return false;
    }
  }

  performMigration(oldVersion, newVersion) {
    // Add migration logic here when needed
    console.log(`Migrating from version ${oldVersion} to ${newVersion}`);
  }
}

// Initialize storage manager when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.storageManager = new StorageManager();

  // Perform data migration
  window.storageManager.migrateData();
});

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = StorageManager;
}
