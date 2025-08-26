// ===== MAIN JAVASCRIPT FOR QUIZ WEBSITE =====

class QuizApp {
  constructor() {
    this.currentPhase = 1;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadUserProgress();
    this.updatePhaseStatus();
  }

  setupEventListeners() {
    // Start Phase 1 Button
    const startPhase1Btn = document.getElementById("startPhase1");
    if (startPhase1Btn) {
      startPhase1Btn.addEventListener("click", () => {
        this.startPhase(1);
      });
    }

    // Phase Card Click Events
    const phaseCards = document.querySelectorAll(".phase-card");
    phaseCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        const phase = parseInt(card.dataset.phase);
        // Allow click if card is active (not disabled)
        if (
          card.classList.contains("active") ||
          !card.classList.contains("disabled")
        ) {
          this.startPhase(phase);
        }
      });
    });

    // Keyboard Navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && document.activeElement.id === "startPhase1") {
        this.startPhase(1);
      }
    });
  }

  loadUserProgress() {
    try {
      const progress = localStorage.getItem("quizProgress");
      if (progress) {
        const userProgress = JSON.parse(progress);
        this.updateProgressDisplay(userProgress);
      }
    } catch (error) {
      console.error("Fehler beim Laden des Fortschritts:", error);
    }
  }

  updateProgressDisplay(progress) {
    // Update Phase 2 status if Phase 1 is completed
    if (progress.phase1 && progress.phase1.completed) {
      const phase2Card = document.querySelector('[data-phase="2"]');
      if (phase2Card) {
        phase2Card.classList.remove("disabled");
        phase2Card.classList.add("active");
        phase2Card.style.cursor = "pointer"; // Ensure pointer cursor

        const statusBadge = phase2Card.querySelector(".status-badge");
        if (statusBadge) {
          statusBadge.textContent = "Verfügbar";
          statusBadge.classList.remove("locked");
        }
      }
    }

    // Update Phase 3 status if Phase 1 and Phase 2 are completed
    if (
      progress.phase1 &&
      progress.phase1.completed &&
      progress.phase2 &&
      progress.phase2.completed
    ) {
      const phase3Card = document.querySelector('[data-phase="3"]');
      if (phase3Card) {
        phase3Card.classList.remove("disabled");
        phase3Card.classList.add("active");
        phase3Card.style.cursor = "pointer"; // Ensure pointer cursor

        const statusBadge = phase3Card.querySelector(".status-badge");
        if (statusBadge) {
          statusBadge.textContent = "Verfügbar";
          statusBadge.classList.remove("locked");
        }
      }
    }

    // Update Phase 4 status if Phase 1, 2 and 3 are completed
    if (
      progress.phase1 &&
      progress.phase1.completed &&
      progress.phase2 &&
      progress.phase2.completed &&
      progress.phase3 &&
      progress.phase3.completed
    ) {
      const phase4Card = document.querySelector('[data-phase="4"]');
      if (phase4Card) {
        phase4Card.classList.remove("disabled");
        phase4Card.classList.add("active");
        phase4Card.style.cursor = "pointer"; // Ensure pointer cursor

        const statusBadge = phase4Card.querySelector(".status-badge");
        if (statusBadge) {
          statusBadge.textContent = "Verfügbar";
          statusBadge.classList.remove("locked");
        }
      }
    }
  }

  updatePhaseStatus() {
    // Check if Phase 1 is available (always true for now)
    const phase1Card = document.querySelector('[data-phase="1"]');
    if (phase1Card) {
      phase1Card.classList.add("active");
    }

    // Phase 2 is locked by default
    const phase2Card = document.querySelector('[data-phase="2"]');
    if (phase2Card) {
      phase2Card.classList.add("disabled");
    }

    // Phase 3 is locked by default
    const phase3Card = document.querySelector('[data-phase="3"]');
    if (phase3Card) {
      phase3Card.classList.add("disabled");
    }

    // Phase 4 is locked by default
    const phase4Card = document.querySelector('[data-phase="4"]');
    if (phase4Card) {
      phase4Card.classList.add("disabled");
    }
  }

  startPhase(phaseNumber) {
    // Add loading animation
    this.showLoadingState();

    // Simulate loading time for better UX
    setTimeout(() => {
      this.navigateToPhase(phaseNumber);
    }, 500);
  }

  showLoadingState() {
    const startBtn = document.getElementById("startPhase1");
    if (startBtn) {
      const originalText = startBtn.innerHTML;
      startBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Lade...';
      startBtn.disabled = true;

      // Restore button after navigation
      setTimeout(() => {
        startBtn.innerHTML = originalText;
        startBtn.disabled = false;
      }, 1000);
    }
  }

  navigateToPhase(phaseNumber) {
    switch (phaseNumber) {
      case 1:
        window.location.href = "phase1.html";
        break;
      case 2:
        // Check if Phase 1 is completed before allowing Phase 2
        const progress = localStorage.getItem("quizProgress");
        if (progress) {
          const userProgress = JSON.parse(progress);
          if (userProgress.phase1 && userProgress.phase1.completed) {
            // Phase 2 is now implemented - navigate to it
            window.location.href = "phase2.html";
          } else {
            this.showPhase2ComingSoon();
          }
        } else {
          this.showPhase2ComingSoon();
        }
        break;
      case 3:
        // Check if Phase 1 and Phase 2 are completed before allowing Phase 3
        const progress3 = localStorage.getItem("quizProgress");
        if (progress3) {
          const userProgress3 = JSON.parse(progress3);
          if (
            userProgress3.phase1 &&
            userProgress3.phase1.completed &&
            userProgress3.phase2 &&
            userProgress3.phase2.completed
          ) {
            // Phase 3 is now implemented - navigate to it
            window.location.href = "phase3.html";
          } else {
            this.showPhase3ComingSoon();
          }
        } else {
          this.showPhase3ComingSoon();
        }
        break;
      case 4:
        // Check if Phase 1, 2 and 3 are completed before allowing Phase 4
        const progress4 = localStorage.getItem("quizProgress");
        if (progress4) {
          const userProgress4 = JSON.parse(progress4);
          if (
            userProgress4.phase1 &&
            userProgress4.phase1.completed &&
            userProgress4.phase2 &&
            userProgress4.phase2.completed &&
            userProgress4.phase3 &&
            userProgress4.phase3.completed
          ) {
            // Phase 4 is now implemented - navigate to it
            window.location.href = "phase4.html";
          } else {
            this.showPhase4ComingSoon();
          }
        } else {
          this.showPhase4ComingSoon();
        }
        break;
      default:
        console.error("Unbekannte Phase:", phaseNumber);
    }
  }

  showPhase2ComingSoon() {
    // Check if Phase 1 is completed
    const progress = localStorage.getItem("quizProgress");
    let message = "";
    let title = "";

    if (progress) {
      const userProgress = JSON.parse(progress);
      if (userProgress.phase1 && userProgress.phase1.completed) {
        title = "Phase 2 - In Entwicklung";
        message = `
          <p><strong>Glückwunsch! Du hast Phase 1 erfolgreich abgeschlossen!</strong></p>
          <p>Phase 2 (Multiple Choice Fragen) wird derzeit entwickelt und wird bald verfügbar sein.</p>
          <p>Dein Fortschritt wird gespeichert und Phase 2 wird automatisch freigeschaltet, sobald sie verfügbar ist.</p>
        `;
      } else {
        title = "Phase 2 - Gesperrt";
        message = `
          <p>Phase 2 ist noch nicht verfügbar.</p>
          <p>Bitte schließe zuerst Phase 1 erfolgreich ab (mindestens 60%).</p>
        `;
      }
    } else {
      title = "Phase 2 - Gesperrt";
      message = `
        <p>Phase 2 ist noch nicht verfügbar.</p>
        <p>Bitte schließe zuerst Phase 1 erfolgreich ab (mindestens 60%).</p>
      `;
    }

    this.showModal(title, message);
  }

  showPhase3ComingSoon() {
    // Check if Phase 1 and Phase 2 are completed
    const progress = localStorage.getItem("quizProgress");
    let message = "";
    let title = "";

    if (progress) {
      const userProgress = JSON.parse(progress);
      if (
        userProgress.phase1 &&
        userProgress.phase1.completed &&
        userProgress.phase2 &&
        userProgress.phase2.completed
      ) {
        title = "Phase 3 - In Entwicklung";
        message = `
          <p><strong>Glückwunsch! Du hast Phase 1 und Phase 2 erfolgreich abgeschlossen!</strong></p>
          <p>Phase 3 (WISO - Wirtschafts- und Sozialkunde) wird derzeit entwickelt und wird bald verfügbar sein.</p>
          <p>Dein Fortschritt wird gespeichert und Phase 3 wird automatisch freigeschaltet, sobald sie verfügbar ist.</p>
        `;
      } else if (userProgress.phase1 && userProgress.phase1.completed) {
        title = "Phase 3 - Gesperrt";
        message = `
          <p>Phase 3 ist noch nicht verfügbar.</p>
          <p>Bitte schließe zuerst Phase 2 erfolgreich ab (mindestens 60%).</p>
        `;
      } else {
        title = "Phase 3 - Gesperrt";
        message = `
          <p>Phase 3 ist noch nicht verfügbar.</p>
          <p>Bitte schließe zuerst Phase 1 und Phase 2 erfolgreich ab (mindestens 60%).</p>
        `;
      }
    } else {
      title = "Phase 3 - Gesperrt";
      message = `
        <p>Phase 3 ist noch nicht verfügbar.</p>
        <p>Bitte schließe zuerst Phase 1 und Phase 2 erfolgreich ab (mindestens 60%).</p>
      `;
    }

    this.showModal(title, message);
  }

  showPhase4ComingSoon() {
    // Check if Phase 1, 2 and 3 are completed
    const progress = localStorage.getItem("quizProgress");
    let message = "";
    let title = "";

    if (progress) {
      const userProgress = JSON.parse(progress);
      if (
        userProgress.phase1 &&
        userProgress.phase1.completed &&
        userProgress.phase2 &&
        userProgress.phase2.completed &&
        userProgress.phase3 &&
        userProgress.phase3.completed
      ) {
        title = "Phase 4 - In Entwicklung";
        message = `
          <p><strong>Glückwunsch! Du hast Phase 1, 2 und 3 erfolgreich abgeschlossen!</strong></p>
          <p>Phase 4 (Mathematische Umrechnungen) wird derzeit entwickelt und wird bald verfügbar sein.</p>
          <p>Dein Fortschritt wird gespeichert und Phase 4 wird automatisch freigeschaltet, sobald sie verfügbar ist.</p>
        `;
      } else if (
        userProgress.phase1 &&
        userProgress.phase1.completed &&
        userProgress.phase2 &&
        userProgress.phase2.completed
      ) {
        title = "Phase 4 - Gesperrt";
        message = `
          <p>Phase 4 ist noch nicht verfügbar.</p>
          <p>Bitte schließe zuerst Phase 3 erfolgreich ab (mindestens 60%).</p>
        `;
      } else if (userProgress.phase1 && userProgress.phase1.completed) {
        title = "Phase 4 - Gesperrt";
        message = `
          <p>Phase 4 ist noch nicht verfügbar.</p>
          <p>Bitte schließe zuerst Phase 2 und Phase 3 erfolgreich ab (mindestens 60%).</p>
        `;
      } else {
        title = "Phase 4 - Gesperrt";
        message = `
          <p>Phase 4 ist noch nicht verfügbar.</p>
          <p>Bitte schließe zuerst Phase 1, 2 und 3 erfolgreich ab (mindestens 60%).</p>
        `;
      }
    } else {
      title = "Phase 4 - Gesperrt";
      message = `
        <p>Phase 4 ist noch nicht verfügbar.</p>
        <p>Bitte schließe zuerst Phase 1, 2 und 3 erfolgreich ab (mindestens 60%).</p>
      `;
    }

    this.showModal(title, message);
  }

  showModal(title, message) {
    // Create modal for coming soon
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-clock"></i> ${title}</h3>
                    <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    ${message}
                </div>
                <div class="modal-footer">
                    <button class="btn-secondary" onclick="this.closest('.modal-overlay').remove()">
                        Verstanden
                    </button>
                </div>
            </div>
        `;

    // Add modal styles
    const style = document.createElement("style");
    style.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                background: white;
                border-radius: 15px;
                padding: 2rem;
                max-width: 400px;
                width: 90%;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                animation: slideIn 0.3s ease;
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid #eee;
            }
            
            .modal-header h3 {
                color: #2c3e50;
                font-size: 1.3rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 1.2rem;
                color: #7f8c8d;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                transition: all 0.3s ease;
            }
            
            .modal-close:hover {
                background: #f8f9fa;
                color: #e74c3c;
            }
            
            .modal-body {
                margin-bottom: 1.5rem;
            }
            
            .modal-body p {
                color: #7f8c8d;
                margin-bottom: 0.5rem;
                line-height: 1.6;
            }
            
            .modal-footer {
                text-align: right;
            }
            
            .btn-secondary {
                background: #95a5a6;
                color: white;
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 500;
                transition: all 0.3s ease;
            }
            
            .btn-secondary:hover {
                background: #7f8c8d;
                transform: translateY(-1px);
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideIn {
                from { transform: translateY(-20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;

    document.head.appendChild(style);
    document.body.appendChild(modal);
  }

  // Utility method to save progress
  saveProgress(phase, score, completed) {
    try {
      const progress = JSON.parse(localStorage.getItem("quizProgress") || "{}");
      progress[`phase${phase}`] = {
        score: score,
        completed: completed,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem("quizProgress", JSON.stringify(progress));
    } catch (error) {
      console.error("Fehler beim Speichern des Fortschritts:", error);
    }
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new QuizApp();
});

// Add some interactive effects
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effects to phase cards
  const phaseCards = document.querySelectorAll(".phase-card");
  phaseCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      if (!card.classList.contains("disabled")) {
        card.style.transform = "translateY(-3px)";
      }
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  // Add click ripple effect to start button
  const startBtn = document.getElementById("startPhase1");
  if (startBtn) {
    startBtn.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  }
});

// Add ripple effect styles
const rippleStyle = document.createElement("style");
rippleStyle.textContent = `
    .start-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);
