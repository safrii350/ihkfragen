// ===== QUIZ LOGIC FOR PHASE 4 =====

class Quiz4 {
  constructor() {
    this.currentQuestion = 0;
    this.score = 0;
    this.totalQuestions = 20;
    this.timeLimit = 30; // seconds per question
    this.timeLeft = this.timeLimit;
    this.timer = null;
    this.questions = [];
    this.userAnswers = [];
    this.quizCompleted = false;

    this.init();
  }

  init() {
    this.loadQuestions();
    this.setupEventListeners();
    this.startQuiz();
  }

  loadQuestions() {
    // Lade Fragen aus der externen Datenbank
    if (typeof phase4Questions !== "undefined") {
      this.questions = [...phase4Questions];
    } else {
      // Fallback: Lade Fragen aus der eingebetteten Datenbank
      this.questions = [
        {
          question: "Wie viele Bits sind 64 Bytes?",
          options: ["256 Bits", "512 Bits", "1024 Bits", "4096 Bits"],
          correct: 1,
          explanation: "1 Byte = 8 Bit, daher 64 x 8 = 512 Bit.",
          category: "Rechnen/Umrechnung",
          difficulty: "leicht",
        },
        {
          question: "Wie viele Bits hat eine IPv6-Adresse?",
          options: ["32 Bits", "64 Bits", "128 Bits", "256 Bits"],
          correct: 2,
          explanation: "IPv6-Adressen bestehen aus 128 Bit.",
          category: "Netzwerke",
          difficulty: "leicht",
        },
        {
          question: "Was ist 22 (dezimal) in Hexadezimal?",
          options: ["0x22", "0x1A", "0x16", "0x15"],
          correct: 2,
          explanation:
            "22 (dezimal) = 16 (hexadezimal). 0x22 wäre 34 (dezimal), 0x1A ist 26 (dezimal), 0x15 ist 21 (dezimal).",
          category: "Zahlensysteme",
          difficulty: "leicht",
        },
        {
          question: "Was ist 1101 (binär) in Dezimal?",
          options: ["11", "12", "13", "14"],
          correct: 2,
          explanation: "1101 (binär) = 1x8 + 1x4 + 0x2 + 1x1 = 13.",
          category: "Zahlensysteme",
          difficulty: "leicht",
        },
        {
          question: "Wie viele Bits sind 1 KiB?",
          options: ["1000 Bits", "1024 Bits", "4096 Bits", "8192 Bits"],
          correct: 3,
          explanation: "1 KiB = 1024 Byte, 1024 x 8 = 8192 Bit.",
          category: "Rechnen/Umrechnung",
          difficulty: "leicht",
        },
        {
          question: "Wieviel MiB sind 2,5 GiB?",
          options: ["2048 MiB", "2400 MiB", "2560 MiB", "3072 MiB"],
          correct: 2,
          explanation: "1 GiB = 1024 MiB, daher 2,5 x 1024 = 2560 MiB.",
          category: "Rechnen/Umrechnung",
          difficulty: "mittel",
        },
        {
          question: "Welche Subnetzmaske entspricht /24?",
          options: [
            "255.255.255.0",
            "255.255.0.0",
            "255.255.255.128",
            "255.255.255.224",
          ],
          correct: 0,
          explanation: "/24 bedeutet 24 gesetzte Bits: 255.255.255.0.",
          category: "Netzwerke",
          difficulty: "leicht",
        },
        {
          question: "Wie viele nutzbare Host-Adressen hat ein /26-Netz?",
          options: ["62", "64", "30", "126"],
          correct: 0,
          explanation:
            "/26 hat 64 Adressen, davon 2 reserviert (Netz- und Broadcastadresse), daher 62 nutzbar.",
          category: "Netzwerke",
          difficulty: "mittel",
        },
        {
          question: "Welche Subnetzmaske entspricht /20?",
          options: [
            "255.255.255.240",
            "255.255.240.0",
            "255.240.0.0",
            "255.255.248.0",
          ],
          correct: 1,
          explanation: "/20 setzt 20 Bits: 255.255.240.0.",
          category: "Netzwerke",
          difficulty: "mittel",
        },
        {
          question:
            "Wie viele Subnetze entstehen, wenn aus einem /24 ein /28 gemacht wird?",
          options: ["4", "8", "16", "32"],
          correct: 2,
          explanation:
            "Von /24 auf /28 werden 4 Bits für Subnetze genutzt: 2^4 = 16 Subnetze.",
          category: "Netzwerke",
          difficulty: "mittel",
        },
        {
          question: "Wie viele nutzbare Hosts hat ein /30-Netz?",
          options: ["2", "4", "6", "14"],
          correct: 0,
          explanation:
            "/30 hat 4 Adressen, davon 2 reserviert, daher 2 nutzbar.",
          category: "Netzwerke",
          difficulty: "leicht",
        },
        {
          question: "Wieviel MB/s entsprechen 1 Gbit/s (dezimal, MB)?",
          options: ["100 MB/s", "112,5 MB/s", "125 MB/s", "128 MB/s"],
          correct: 2,
          explanation: "1 Gbit/s = 1000 Mbit/s, geteilt durch 8 = 125 MB/s.",
          category: "Rechnen/Umrechnung",
          difficulty: "mittel",
        },
        {
          question:
            "Wie lange dauert der Transfer von 50 MiB bei 10 Mbit/s (idealisierte Brutto-Rate)?",
          options: ["~21 s", "~35 s", "~42 s", "~60 s"],
          correct: 2,
          explanation:
            "50 MiB = 50x8 Mib = 400 Mib etwa 419,43 Mbit (binär). 419,43/10 etwa 41,94 s, daher ~42 s.",
          category: "Rechnen/Umrechnung",
          difficulty: "schwer",
        },
        {
          question:
            "Welche Darstellung ist die vollständige Expansion von fe80::1?",
          options: [
            "fe80:0000:0000:0000:0000:0000:0000:0001",
            "fe80:0000:0000:0000:0001:0000:0000:0000",
            "fe80:0000:0000:0001:0000:0000:0000:0000",
            "fe80:0000:0000:0000:0000:0000:0001:0000",
          ],
          correct: 0,
          explanation:
            ":: steht für fortlaufende Null-Gruppen. Voll ausgeschrieben ist fe80:0000:0000:0000:0000:0000:0000:0001.",
          category: "Netzwerke",
          difficulty: "mittel",
        },
        {
          question: "Wie viele Bits hat eine MAC-Adresse (IEEE 802)?",
          options: ["32 Bit", "48 Bit", "64 Bit", "128 Bit"],
          correct: 1,
          explanation:
            "Die klassische MAC-Adresse besteht aus 48 Bit (6 Byte).",
          category: "Netzwerke",
          difficulty: "leicht",
        },
        {
          question: "Was ist 255 (dezimal) in Hexadezimal?",
          options: ["0xEE", "0xF0", "0xFF", "0xFE"],
          correct: 2,
          explanation: "255 (dezimal) = 0xFF.",
          category: "Zahlensysteme",
          difficulty: "leicht",
        },
        {
          question: "Wieviele Bytes sind 3 MiB?",
          options: [
            "3.000.000 Bytes",
            "3.145.728 Bytes",
            "3.276.800 Bytes",
            "3.932.160 Bytes",
          ],
          correct: 1,
          explanation:
            "1 MiB = 1.048.576 Bytes, daher 3 x 1.048.576 = 3.145.728 Bytes.",
          category: "Rechnen/Umrechnung",
          difficulty: "mittel",
        },
        {
          question:
            "Welche CIDR-Notation entspricht der Maske 255.255.255.128?",
          options: ["/25", "/26", "/27", "/28"],
          correct: 0,
          explanation: "255.255.255.128 hat 25 gesetzte Bits, daher /25.",
          category: "Netzwerke",
          difficulty: "leicht",
        },
        {
          question: "Wie viele Bits sind 2,5 KB (dezimal, 1 KB = 1000 Byte)?",
          options: ["20.000 Bit", "19.200 Bit", "18.432 Bit", "16.000 Bit"],
          correct: 0,
          explanation: "2,5 KB = 2500 Byte, daher 2500 x 8 = 20.000 Bit.",
          category: "Rechnen/Umrechnung",
          difficulty: "mittel",
        },
        {
          question: "Welche Broadcast-Adresse hat das Netz 192.168.10.0/27?",
          options: [
            "192.168.10.31",
            "192.168.10.32",
            "192.168.10.63",
            "192.168.10.33",
          ],
          correct: 0,
          explanation:
            "/27 bedeutet Blockgroesse 32. Das erste Subnetz 192.168.10.0-31, Broadcast = .31.",
          category: "Netzwerke",
          difficulty: "schwer",
        },
        {
          question: "Was ist 0b101010 (binär) in Dezimal?",
          options: ["40", "42", "44", "46"],
          correct: 1,
          explanation: "101010 (binär) = 32 + 8 + 2 = 42.",
          category: "Zahlensysteme",
          difficulty: "leicht",
        },
      ];
    }

    // Mische die Fragen für zufällige Reihenfolge
    this.shuffleQuestions();
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
  }

  setupEventListeners() {
    // Answer option clicks - direkt wie in quiz.js
    document.querySelectorAll(".answer-option").forEach((option) => {
      option.addEventListener("click", (e) => {
        if (!this.quizCompleted) {
          this.handleAnswer(parseInt(e.currentTarget.dataset.answer));
        }
      });
    });

    // Next question button
    const nextQuestionBtn = document.getElementById("nextQuestion");
    if (nextQuestionBtn) {
      nextQuestionBtn.addEventListener("click", () => {
        this.nextQuestion();
      });
    }

    // Quiz wiederholen Button
    const restartQuizBtn = document.getElementById("restartQuiz");
    if (restartQuizBtn) {
      restartQuizBtn.addEventListener("click", () => {
        this.restartQuiz();
      });
    }

    // Zurück zur Startseite Buttons
    const backToHomeBtns = document.querySelectorAll(
      "#backToHome, #backToHomeResults"
    );
    backToHomeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        window.location.href = "index.html";
      });
    });

    // Keyboard Navigation
    document.addEventListener("keydown", (e) => {
      if (this.quizCompleted) return;

      switch (e.key) {
        case "1":
        case "a":
        case "A":
          this.handleAnswer(0);
          break;
        case "2":
        case "b":
        case "B":
          this.handleAnswer(1);
          break;
        case "3":
        case "c":
        case "C":
          this.handleAnswer(2);
          break;
        case "4":
        case "d":
        case "D":
          this.handleAnswer(3);
          break;
        case "Enter":
          if (
            document.getElementById("nextQuestion").style.display !== "none"
          ) {
            this.nextQuestion();
          }
          break;
      }
    });
  }

  startQuiz() {
    this.currentQuestion = 0;
    this.score = 0;
    this.userAnswers = [];
    this.quizCompleted = false;
    this.showQuestion();
  }

  showQuestion() {
    if (this.currentQuestion >= this.totalQuestions) {
      this.endQuiz();
      return;
    }

    const question = this.questions[this.currentQuestion];
    const questionText = document.getElementById("questionText");
    const answerOptions = document.querySelectorAll(".answer-option");
    const currentQuestionSpan = document.getElementById("currentQuestion");
    const progressFill = document.getElementById("progressFill");

    // Frage anzeigen
    questionText.textContent = question.question;

    // Antwort-Optionen anzeigen
    answerOptions.forEach((option, index) => {
      const optionText = option.querySelector(".option-text");
      optionText.textContent = question.options[index];
      option.classList.remove("correct", "incorrect", "selected");
      option.disabled = false;
    });

    // Fortschritt aktualisieren
    currentQuestionSpan.textContent = this.currentQuestion + 1;
    const progress = ((this.currentQuestion + 1) / this.totalQuestions) * 100;
    progressFill.style.width = progress + "%";

    // Container anzeigen
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("feedbackContainer").style.display = "none";
    document.getElementById("resultsContainer").style.display = "none";

    // Timer starten
    this.startTimer();
  }

  startTimer() {
    this.timeLeft = this.timeLimit;
    this.updateTimerDisplay();

    this.timer = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();

      // Audio-Warnung ab 10 Sekunden bis 0
      if (this.timeLeft <= 10 && this.timeLeft > 0) {
        if (window.audioManager) {
          window.audioManager.playTimerSound(this.timeLeft);
        }
      }

      if (this.timeLeft <= 0) {
        this.handleTimeout();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const timeLeftSpan = document.getElementById("timeLeft");
    const timerElement = document.getElementById("timer");

    if (timeLeftSpan) {
      timeLeftSpan.textContent = this.timeLeft;
    }

    // Timer-Farbe basierend auf verbleibender Zeit
    if (timerElement) {
      timerElement.className = "timer";
      if (this.timeLeft <= 5) {
        timerElement.classList.add("danger");
      } else if (this.timeLeft <= 10) {
        timerElement.classList.add("warning");
      }
    }
  }

  handleTimeout() {
    clearInterval(this.timer);
    this.handleAnswer(-1); // -1 für Timeout
  }

  handleAnswer(selectedAnswer) {
    if (this.quizCompleted) return;

    clearInterval(this.timer);

    const question = this.questions[this.currentQuestion];
    const answerOptions = document.querySelectorAll(".answer-option");
    const isCorrect = selectedAnswer === question.correct;

    // Antwort speichern
    this.userAnswers[this.currentQuestion] = selectedAnswer;

    // Punkte vergeben
    if (isCorrect) {
      this.score++;
    }

    // Audio-Feedback
    if (window.audioManager) {
      window.audioManager.playFeedback(isCorrect);
    }

    // Visuelles Feedback
    answerOptions.forEach((option, index) => {
      option.disabled = true;

      // Korrekte Antwort immer grün markieren
      if (index === question.correct) {
        option.classList.add("correct");
      }

      // Falsche Antwort rot markieren (nur wenn nicht korrekt)
      if (index === selectedAnswer && !isCorrect) {
        option.classList.add("incorrect");
      }
    });

    // Feedback anzeigen
    this.showFeedback(isCorrect, question.explanation);
  }

  showFeedback(isCorrect, explanation) {
    const feedbackContainer = document.getElementById("feedbackContainer");
    const feedbackIcon = document.getElementById("feedbackIcon");
    const feedbackTitle = document.getElementById("feedbackTitle");
    const feedbackMessage = document.getElementById("feedbackMessage");

    // Feedback-Icon und Titel setzen
    if (isCorrect) {
      feedbackIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
      feedbackIcon.className = "feedback-icon correct";
      feedbackTitle.textContent = "Korrekt!";
      feedbackTitle.className = "feedback-title correct";
    } else {
      feedbackIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
      feedbackIcon.className = "feedback-icon incorrect";
      feedbackTitle.textContent = "Falsch!";
      feedbackTitle.className = "feedback-title incorrect";
    }

    // Erklärung anzeigen
    feedbackMessage.textContent = explanation;

    // Container anzeigen
    document.getElementById("questionContainer").style.display = "none";
    feedbackContainer.style.display = "block";
  }

  nextQuestion() {
    this.currentQuestion++;
    this.showQuestion();
  }

  endQuiz() {
    this.quizCompleted = true;
    clearInterval(this.timer);

    const percentage = Math.round((this.score / this.totalQuestions) * 100);
    const passed = percentage >= 60;

    // Ergebnisse anzeigen
    this.showResults(percentage, passed);

    // Fortschritt speichern
    this.saveProgress(percentage, passed);

    // Audio-Feedback für Quiz-Ende
    if (window.audioManager) {
      window.audioManager.playCompletionSound(passed);
    }
  }

  showResults(percentage, passed) {
    const resultsContainer = document.getElementById("resultsContainer");
    const finalScore = document.getElementById("finalScore");
    const correctAnswers = document.getElementById("correctAnswers");
    const totalAnswered = document.getElementById("totalAnswered");
    const resultsStatus = document.getElementById("resultsStatus");
    const statusIcon = resultsStatus.querySelector(".status-icon");
    const statusTitle = resultsStatus.querySelector(".status-title");
    const statusMessage = resultsStatus.querySelector(".status-message");

    // Score anzeigen
    finalScore.textContent = percentage;
    correctAnswers.textContent = this.score;
    totalAnswered.textContent = this.totalQuestions;

    // Status basierend auf Bestehen
    if (passed) {
      statusIcon.innerHTML = '<i class="fas fa-trophy"></i>';
      statusTitle.textContent = "Bestanden!";
      statusMessage.textContent =
        "Glückwunsch! Du hast die Phase 4 erfolgreich abgeschlossen.";
      statusTitle.className = "status-title passed";
    } else {
      statusIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
      statusTitle.textContent = "Nicht bestanden";
      statusMessage.textContent = `Du benötigst mindestens 60% zum Bestehen. Du hast ${percentage}% erreicht.`;
      statusTitle.className = "status-title failed";
    }

    // Container anzeigen
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("feedbackContainer").style.display = "none";
    resultsContainer.style.display = "block";
  }

  saveProgress(percentage, passed) {
    try {
      // Lokalen Fortschritt speichern
      const progress = JSON.parse(localStorage.getItem("quizProgress") || "{}");
      progress.phase4 = {
        score: percentage,
        completed: passed,
        timestamp: new Date().toISOString(),
        correctAnswers: this.score,
        totalQuestions: this.totalQuestions,
      };
      localStorage.setItem("quizProgress", JSON.stringify(progress));

      // Statistiken speichern
      if (window.storageManager) {
        const stats = {
          phase: 4,
          score: percentage,
          completed: passed,
          totalQuestions: this.totalQuestions,
          correctAnswers: this.score,
          timeSpent:
            this.timeLimit * this.totalQuestions - (this.timeLeft || 0),
        };
        window.storageManager.saveStats(stats);
      }

      console.log("Fortschritt für Phase 4 gespeichert:", progress.phase4);
    } catch (error) {
      console.error("Fehler beim Speichern des Fortschritts:", error);
    }
  }

  restartQuiz() {
    this.startQuiz();
  }
}

// Initialize quiz when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new Quiz4();
});
