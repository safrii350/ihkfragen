// ===== QUIZ LOGIC FOR PHASE 1 =====

class Quiz {
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
    if (typeof phase1Questions !== "undefined") {
      this.questions = [...phase1Questions];
    } else {
      // Fallback: Lade Fragen aus der eingebetteten Datenbank
      this.questions = [
        {
          question: "Wofür steht die Abkürzung TCP?",
          options: [
            "Transmission Control Protocol",
            "Transfer Control Protocol",
            "Transport Control Protocol",
            "Transmission Connection Protocol",
          ],
          correct: 0,
          explanation:
            "TCP steht für Transmission Control Protocol und ist ein verbindungsorientiertes Protokoll.",
        },
        {
          question: "Was bedeutet die Abkürzung HTTP?",
          options: [
            "HyperText Transfer Protocol",
            "High Transfer Text Protocol",
            "Hyper Transfer Text Protocol",
            "High Text Transfer Protocol",
          ],
          correct: 0,
          explanation:
            "HTTP steht für HyperText Transfer Protocol und ist das Protokoll für die Übertragung von Webseiten.",
        },
        {
          question: "Wofür steht die Abkürzung DNS?",
          options: [
            "Domain Name System",
            "Data Network Service",
            "Digital Network System",
            "Domain Network Service",
          ],
          correct: 0,
          explanation:
            "DNS steht für Domain Name System und übersetzt Domainnamen in IP-Adressen.",
        },
        {
          question: "Was bedeutet die Abkürzung SSL?",
          options: [
            "Secure Sockets Layer",
            "Secure Socket Layer",
            "Security Socket Layer",
            "Secure System Layer",
          ],
          correct: 0,
          explanation:
            "SSL steht für Secure Sockets Layer und sorgt für verschlüsselte Kommunikation.",
        },
        {
          question: "Wofür steht die Abkürzung FTP?",
          options: [
            "File Transfer Protocol",
            "Fast Transfer Protocol",
            "File Transport Protocol",
            "Fast Transport Protocol",
          ],
          correct: 0,
          explanation:
            "FTP steht für File Transfer Protocol und dient der Übertragung von Dateien.",
        },
        {
          question: "Was bedeutet die Abkürzung IP?",
          options: [
            "Internet Protocol",
            "Internal Protocol",
            "Internet Packet",
            "Internal Packet",
          ],
          correct: 0,
          explanation:
            "IP steht für Internet Protocol und ist das grundlegende Protokoll für die Datenübertragung im Internet.",
        },
        {
          question: "Wofür steht die Abkürzung URL?",
          options: [
            "Uniform Resource Locator",
            "Universal Resource Locator",
            "Uniform Resource Link",
            "Universal Resource Link",
          ],
          correct: 0,
          explanation:
            "URL steht für Uniform Resource Locator und gibt die Adresse einer Webressource an.",
        },
        {
          question: "Was bedeutet die Abkürzung HTML?",
          options: [
            "HyperText Markup Language",
            "High Text Markup Language",
            "Hyper Transfer Markup Language",
            "High Transfer Markup Language",
          ],
          correct: 0,
          explanation:
            "HTML steht für HyperText Markup Language und ist die Standard-Auszeichnungssprache für Webseiten.",
        },
        {
          question: "Wofür steht die Abkürzung CSS?",
          options: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Cascading System Sheets",
            "Computer System Sheets",
          ],
          correct: 0,
          explanation:
            "CSS steht für Cascading Style Sheets und dient der Gestaltung von Webseiten.",
        },
        {
          question: "Was bedeutet die Abkürzung API?",
          options: [
            "Application Programming Interface",
            "Application Program Interface",
            "Advanced Programming Interface",
            "Advanced Program Interface",
          ],
          correct: 0,
          explanation:
            "API steht für Application Programming Interface und definiert Schnittstellen zwischen Programmen.",
        },
        {
          question: "Wofür steht die Abkürzung JSON?",
          options: [
            "JavaScript Object Notation",
            "Java Script Object Notation",
            "JavaScript Online Notation",
            "Java Script Online Notation",
          ],
          correct: 0,
          explanation:
            "JSON steht für JavaScript Object Notation und ist ein Datenaustauschformat.",
        },
        {
          question: "Was bedeutet die Abkürzung SQL?",
          options: [
            "Structured Query Language",
            "Standard Query Language",
            "Structured Question Language",
            "Standard Question Language",
          ],
          correct: 0,
          explanation:
            "SQL steht für Structured Query Language und ist die Standardsprache für Datenbankabfragen.",
        },
        {
          question: "Wofür steht die Abkürzung XML?",
          options: [
            "eXtensible Markup Language",
            "Extended Markup Language",
            "eXtensible Model Language",
            "Extended Model Language",
          ],
          correct: 0,
          explanation:
            "XML steht für eXtensible Markup Language und ist eine erweiterbare Auszeichnungssprache.",
        },
        {
          question: "Was bedeutet die Abkürzung PHP?",
          options: [
            "PHP: Hypertext Preprocessor",
            "Personal Home Page",
            "Professional Hypertext Processor",
            "Personal Hypertext Processor",
          ],
          correct: 0,
          explanation:
            "PHP steht für PHP: Hypertext Preprocessor und ist eine serverseitige Skriptsprache.",
        },
        {
          question: "Wofür steht die Abkürzung AJAX?",
          options: [
            "Asynchronous JavaScript and XML",
            "Advanced JavaScript and XML",
            "Asynchronous Java and XML",
            "Advanced Java and XML",
          ],
          correct: 0,
          explanation:
            "AJAX steht für Asynchronous JavaScript and XML und ermöglicht asynchrone Datenübertragung.",
        },
        {
          question: "Was bedeutet die Abkürzung REST?",
          options: [
            "Representational State Transfer",
            "Remote State Transfer",
            "Representational System Transfer",
            "Remote System Transfer",
          ],
          correct: 0,
          explanation:
            "REST steht für Representational State Transfer und ist ein Architekturstil für Webdienste.",
        },
        {
          question: "Wofür steht die Abkürzung MVC?",
          options: [
            "Model View Controller",
            "Model View Component",
            "Model Visual Controller",
            "Model Visual Component",
          ],
          correct: 0,
          explanation:
            "MVC steht für Model View Controller und ist ein Architekturmuster für Software.",
        },
        {
          question: "Was bedeutet die Abkürzung IDE?",
          options: [
            "Integrated Development Environment",
            "Internal Development Environment",
            "Integrated Design Environment",
            "Internal Design Environment",
          ],
          correct: 0,
          explanation:
            "IDE steht für Integrated Development Environment und ist eine integrierte Entwicklungsumgebung.",
        },
        {
          question: "Wofür steht die Abkürzung SDK?",
          options: [
            "Software Development Kit",
            "System Development Kit",
            "Software Design Kit",
            "System Design Kit",
          ],
          correct: 0,
          explanation:
            "SDK steht für Software Development Kit und enthält Werkzeuge für die Softwareentwicklung.",
        },
        {
          question: "Was bedeutet die Abkürzung DHCP?",
          options: [
            "Dynamic Host Configuration Protocol",
            "Dynamic Host Control Protocol",
            "Dynamic Host Connection Protocol",
            "Dynamic Host Communication Protocol",
          ],
          correct: 0,
          explanation:
            "DHCP steht für Dynamic Host Configuration Protocol und dient der automatischen IP-Adressvergabe in Netzwerken.",
        },
      ];
    }
  }

  setupEventListeners() {
    // Answer option clicks
    document.querySelectorAll(".answer-option").forEach((option) => {
      option.addEventListener("click", (e) => {
        if (!this.quizCompleted) {
          this.selectAnswer(parseInt(e.currentTarget.dataset.answer));
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

    // Back to home button
    const backToHomeBtn = document.getElementById("backToHome");
    if (backToHomeBtn) {
      backToHomeBtn.addEventListener("click", () => {
        this.confirmExit();
      });
    }

    // Back to home results button
    const backToHomeResultsBtn = document.getElementById("backToHomeResults");
    if (backToHomeResultsBtn) {
      backToHomeResultsBtn.addEventListener("click", () => {
        window.location.href = "index.html";
      });
    }

    // Restart quiz button
    const restartQuizBtn = document.getElementById("restartQuiz");
    if (restartQuizBtn) {
      restartQuizBtn.addEventListener("click", () => {
        this.restartQuiz();
      });
    }

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      this.handleKeyboard(e);
    });
  }

  startQuiz() {
    this.currentQuestion = 0;
    this.score = 0;
    this.userAnswers = [];
    this.quizCompleted = false;
    this.shuffleQuestions(); // Mische die Fragen und Antworten
    this.showQuestion();
    this.startTimer();
  }

  shuffleQuestions() {
    // Mische die Antwortoptionen für jede Frage
    this.questions.forEach((question) => {
      const originalOptions = [...question.options];
      const correctAnswer = originalOptions[question.correct];

      // Mische die Optionen
      const shuffledOptions = this.shuffleArray([...originalOptions]);

      // Finde den neuen Index der korrekten Antwort
      const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);

      // Aktualisiere die Frage
      question.options = shuffledOptions;
      question.correct = newCorrectIndex;
    });
  }

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  showQuestion() {
    const question = this.questions[this.currentQuestion];

    // Update question text
    document.getElementById("questionText").textContent = question.question;

    // Update answer options
    const answerOptions = document.getElementById("answerOptions");
    answerOptions.innerHTML = "";

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "answer-option";
      button.dataset.answer = index;
      button.innerHTML = `
                <span class="option-letter">${String.fromCharCode(
                  65 + index
                )}</span>
                <span class="option-text">${option}</span>
            `;
      button.addEventListener("click", () => this.selectAnswer(index));
      answerOptions.appendChild(button);
    });

    // Update progress
    this.updateProgress();

    // Show question container, hide others
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("feedbackContainer").style.display = "none";
    document.getElementById("resultsContainer").style.display = "none";
  }

  selectAnswer(answerIndex) {
    if (this.quizCompleted) return;

    this.quizCompleted = true;
    this.userAnswers[this.currentQuestion] = answerIndex;

    const question = this.questions[this.currentQuestion];
    const isCorrect = answerIndex === question.correct;

    if (isCorrect) {
      this.score++;
    }

    // Stop timer
    this.stopTimer();

    // Show feedback
    this.showFeedback(isCorrect, question);

    // Play audio feedback
    this.playAudioFeedback(isCorrect);
  }

  showFeedback(isCorrect, question) {
    const feedbackContainer = document.getElementById("feedbackContainer");
    const feedbackIcon = document.getElementById("feedbackIcon");
    const feedbackTitle = document.getElementById("feedbackTitle");
    const feedbackMessage = document.getElementById("feedbackMessage");

    // Update feedback content
    feedbackIcon.className = `feedback-icon ${
      isCorrect ? "correct" : "incorrect"
    }`;
    feedbackIcon.innerHTML = isCorrect
      ? '<i class="fas fa-check-circle"></i>'
      : '<i class="fas fa-times-circle"></i>';

    feedbackTitle.textContent = isCorrect ? "Korrekt!" : "Falsch!";
    feedbackTitle.className = `feedback-title ${
      isCorrect ? "correct" : "incorrect"
    }`;

    feedbackMessage.textContent = question.explanation;

    // Show feedback container
    document.getElementById("questionContainer").style.display = "none";
    feedbackContainer.style.display = "block";
  }

  nextQuestion() {
    this.currentQuestion++;

    if (this.currentQuestion >= this.totalQuestions) {
      this.showResults();
    } else {
      this.quizCompleted = false;
      this.timeLeft = this.timeLimit;
      this.showQuestion();
      this.startTimer();
    }
  }

  showResults() {
    const percentage = Math.round((this.score / this.totalQuestions) * 100);
    const passed = percentage >= 60;

    // Update results
    document.getElementById("finalScore").textContent = percentage;
    document.getElementById("correctAnswers").textContent = this.score;
    document.getElementById("totalAnswered").textContent = this.totalQuestions;

    // Update score circle
    const scoreCircle = document.querySelector(".score-circle");
    scoreCircle.className = `score-circle ${passed ? "passed" : "failed"}`;

    // Update status
    const statusIcon = document.querySelector(".status-icon");
    const statusTitle = document.querySelector(".status-title");
    const statusMessage = document.querySelector(".status-message");

    statusIcon.className = `status-icon ${passed ? "passed" : "failed"}`;
    statusIcon.innerHTML = passed
      ? '<i class="fas fa-trophy"></i>'
      : '<i class="fas fa-times-circle"></i>';

    statusTitle.textContent = passed ? "Bestanden!" : "Nicht bestanden";
    statusTitle.className = `status-title ${passed ? "passed" : "failed"}`;

    statusMessage.textContent = passed
      ? "Glückwunsch! Du hast die Phase 1 erfolgreich abgeschlossen."
      : "Du benötigst mindestens 60% zum Bestehen. Versuche es noch einmal!";

    // Show results container
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("feedbackContainer").style.display = "none";
    document.getElementById("resultsContainer").style.display = "block";

    // Save progress
    this.saveProgress(percentage, passed);

    // Play completion sound
    if (window.audioManager) {
      window.audioManager.playCompletionSound(passed);
    }
  }

  startTimer() {
    this.timeLeft = this.timeLimit;
    this.updateTimerDisplay();

    this.timer = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();

      if (this.timeLeft <= 0) {
        this.timeUp();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  updateTimerDisplay() {
    const timeLeftElement = document.getElementById("timeLeft");
    const timerElement = document.getElementById("timer");

    timeLeftElement.textContent = this.timeLeft;

    // Update timer styling based on time left
    timerElement.className = "timer";
    if (this.timeLeft <= 5) {
      timerElement.classList.add("danger");
      // Play danger sound
      if (window.audioManager) {
        window.audioManager.playTimerSound(this.timeLeft);
      }
    } else if (this.timeLeft <= 10) {
      timerElement.classList.add("warning");
      // Play warning sound
      if (window.audioManager) {
        window.audioManager.playTimerSound(this.timeLeft);
      }
    }
  }

  timeUp() {
    this.stopTimer();

    if (!this.quizCompleted) {
      // Auto-select first answer if no answer selected
      this.selectAnswer(0);
    }
  }

  updateProgress() {
    const progress = ((this.currentQuestion + 1) / this.totalQuestions) * 100;
    document.getElementById("progressFill").style.width = `${progress}%`;
    document.getElementById("currentQuestion").textContent =
      this.currentQuestion + 1;
    document.getElementById("totalQuestions").textContent = this.totalQuestions;
  }

  handleKeyboard(e) {
    if (this.quizCompleted) return;

    switch (e.key) {
      case "1":
      case "a":
      case "A":
        this.selectAnswer(0);
        break;
      case "2":
      case "b":
      case "B":
        this.selectAnswer(1);
        break;
      case "3":
      case "c":
      case "C":
        this.selectAnswer(2);
        break;
      case "4":
      case "d":
      case "D":
        this.selectAnswer(3);
        break;
      case "Enter":
        if (
          document.getElementById("feedbackContainer").style.display !== "none"
        ) {
          this.nextQuestion();
        }
        break;
    }
  }

  confirmExit() {
    window.location.href = "index.html";
  }

  restartQuiz() {
    this.stopTimer();
    this.startQuiz(); // startQuiz() ruft bereits shuffleQuestions() auf
  }

  saveProgress(percentage, passed) {
    try {
      const progress = JSON.parse(localStorage.getItem("quizProgress") || "{}");
      progress.phase1 = {
        score: percentage,
        completed: passed,
        timestamp: new Date().toISOString(),
        totalQuestions: this.totalQuestions,
        correctAnswers: this.score,
        timeSpent: this.calculateTimeSpent(),
        categoryStats: this.calculateCategoryStats(),
        difficultyStats: this.calculateDifficultyStats(),
      };
      localStorage.setItem("quizProgress", JSON.stringify(progress));

      // Erweiterte Statistiken speichern
      this.saveDetailedStats(percentage, passed);
    } catch (error) {
      console.error("Fehler beim Speichern des Fortschritts:", error);
    }
  }

  calculateTimeSpent() {
    // Berechne die tatsächlich verbrachte Zeit
    const totalTime = this.totalQuestions * this.timeLimit;
    const timeSpent = totalTime - (this.timeLeft || 0);
    return timeSpent;
  }

  calculateCategoryStats() {
    const stats = {};
    this.userAnswers.forEach((answer, index) => {
      const question = this.questions[index];
      const category = question.category || "Unbekannt";
      if (!stats[category]) {
        stats[category] = { correct: 0, total: 0 };
      }
      stats[category].total++;
      if (answer === question.correct) {
        stats[category].correct++;
      }
    });
    return stats;
  }

  calculateDifficultyStats() {
    const stats = {};
    this.userAnswers.forEach((answer, index) => {
      const question = this.questions[index];
      const difficulty = question.difficulty || "unbekannt";
      if (!stats[difficulty]) {
        stats[difficulty] = { correct: 0, total: 0 };
      }
      stats[difficulty].total++;
      if (answer === question.correct) {
        stats[difficulty].correct++;
      }
    });
    return stats;
  }

  saveDetailedStats(percentage, passed) {
    try {
      const stats = JSON.parse(localStorage.getItem("quizStats") || "{}");

      // Aktualisiere Gesamtstatistiken
      stats.totalAttempts = (stats.totalAttempts || 0) + 1;
      stats.totalCompletions = (stats.totalCompletions || 0) + (passed ? 1 : 0);
      stats.averageScore = this.calculateAverageScore(
        stats.averageScore,
        stats.totalAttempts,
        percentage
      );
      stats.bestScore = Math.max(stats.bestScore || 0, percentage);

      // Speichere detaillierte Statistiken
      const attemptStats = {
        date: new Date().toISOString(),
        score: percentage,
        passed: passed,
        timeSpent: this.calculateTimeSpent(),
        categoryStats: this.calculateCategoryStats(),
        difficultyStats: this.calculateDifficultyStats(),
        userAnswers: this.userAnswers,
      };

      if (!stats.attempts) stats.attempts = [];
      stats.attempts.push(attemptStats);

      // Behalte nur die letzten 10 Versuche
      if (stats.attempts.length > 10) {
        stats.attempts = stats.attempts.slice(-10);
      }

      localStorage.setItem("quizStats", JSON.stringify(stats));
    } catch (error) {
      console.error(
        "Fehler beim Speichern der detaillierten Statistiken:",
        error
      );
    }
  }

  calculateAverageScore(currentAverage, totalAttempts, newScore) {
    if (totalAttempts === 1) return newScore;
    return Math.round(
      (currentAverage * (totalAttempts - 1) + newScore) / totalAttempts
    );
  }

  playAudioFeedback(isCorrect) {
    // This will be implemented in audio.js
    if (window.audioManager) {
      window.audioManager.playFeedback(isCorrect);
    }
  }
}

// Initialize quiz when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.quiz = new Quiz();
});
