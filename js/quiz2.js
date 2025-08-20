// ===== QUIZ LOGIC FOR PHASE 2 (MULTIPLE CHOICE) =====

class Quiz2 {
  constructor() {
    this.currentQuestion = 0;
    this.score = 0;
    this.totalQuestions = 15;
    this.timeLimit = 45; // seconds per question (longer for multiple choice)
    this.timeLeft = this.timeLimit;
    this.timer = null;
    this.questions = [];
    this.userAnswers = [];
    this.quizCompleted = false;
    this.selectedAnswers = new Set();

    this.init();
  }

  init() {
    this.loadQuestions();
    this.setupEventListeners();
    this.startQuiz();
  }

  loadQuestions() {
    // Lade Fragen aus der externen Datenbank
    if (typeof phase2Questions !== "undefined") {
      this.questions = [...phase2Questions];
    } else {
      console.error("Phase 2 Fragen nicht gefunden!");
      this.questions = [];
    }
  }

  setupEventListeners() {
    // Checkbox change events
    document.addEventListener("change", (e) => {
      if (e.target.classList.contains("answer-checkbox")) {
        this.handleCheckboxChange(e);
      }
    });

    // Submit answer button
    document.getElementById("submitAnswer").addEventListener("click", () => {
      this.submitAnswer();
    });

    // Next question button
    document.getElementById("nextQuestion").addEventListener("click", () => {
      this.nextQuestion();
    });

    // Back to home buttons
    document.getElementById("backToHome").addEventListener("click", () => {
      this.confirmExit();
    });

    document
      .getElementById("backToHomeResults")
      .addEventListener("click", () => {
        window.location.href = "index.html";
      });

    // Restart quiz button
    document.getElementById("restartQuiz").addEventListener("click", () => {
      this.restartQuiz();
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      this.handleKeyboard(e);
    });
  }

  handleCheckboxChange(e) {
    const checkbox = e.target;
    const answerIndex = parseInt(
      checkbox.closest(".answer-option").dataset.answer
    );

    if (checkbox.checked) {
      this.selectedAnswers.add(answerIndex);
    } else {
      this.selectedAnswers.delete(answerIndex);
    }

    // Enable/disable submit button
    const submitBtn = document.getElementById("submitAnswer");
    submitBtn.disabled = this.selectedAnswers.size === 0;
  }

  startQuiz() {
    this.currentQuestion = 0;
    this.score = 0;
    this.userAnswers = [];
    this.quizCompleted = false;
    this.shuffleQuestions();
    this.showQuestion();
    this.startTimer();
  }

  shuffleQuestions() {
    // Mische die Antwortoptionen für jede Frage
    this.questions.forEach((question) => {
      const originalOptions = [...question.options];
      const correctAnswers = question.correct.map(
        (index) => originalOptions[index]
      );

      // Mische die Optionen
      const shuffledOptions = this.shuffleArray([...originalOptions]);

      // Finde die neuen Indizes der korrekten Antworten
      const newCorrectIndices = correctAnswers
        .map((answer) => shuffledOptions.indexOf(answer))
        .filter((index) => index !== -1);

      // Aktualisiere die Frage
      question.options = shuffledOptions;
      question.correct = newCorrectIndices;
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
    this.selectedAnswers.clear();

    // Update question text
    document.getElementById("questionText").textContent = question.question;

    // Update answer options
    const answerOptions = document.getElementById("answerOptions");
    answerOptions.innerHTML = "";

    question.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.className = "answer-option checkbox-option";
      label.dataset.answer = index;
      label.innerHTML = `
        <input type="checkbox" class="answer-checkbox">
        <span class="checkbox-custom"></span>
        <span class="option-text">${option}</span>
      `;
      answerOptions.appendChild(label);
    });

    // Reset submit button
    const submitBtn = document.getElementById("submitAnswer");
    submitBtn.disabled = true;

    // Update progress
    this.updateProgress();

    // Show question container, hide others
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("feedbackContainer").style.display = "none";
    document.getElementById("resultsContainer").style.display = "none";
  }

  submitAnswer() {
    if (this.quizCompleted) return;

    this.quizCompleted = true;
    const selectedArray = Array.from(this.selectedAnswers);
    this.userAnswers[this.currentQuestion] = selectedArray;

    const question = this.questions[this.currentQuestion];
    const isCorrect = this.checkAnswer(selectedArray, question.correct);

    if (isCorrect) {
      this.score++;
    }

    // Stop timer
    this.stopTimer();

    // Show feedback
    this.showFeedback(isCorrect, question, selectedArray);

    // Play audio feedback
    this.playAudioFeedback(isCorrect);
  }

  checkAnswer(selected, correct) {
    // Check if arrays have the same length and same elements
    if (selected.length !== correct.length) return false;

    const sortedSelected = [...selected].sort();
    const sortedCorrect = [...correct].sort();

    return sortedSelected.every(
      (value, index) => value === sortedCorrect[index]
    );
  }

  showFeedback(isCorrect, question, selectedAnswers) {
    const feedbackContainer = document.getElementById("feedbackContainer");
    const feedbackIcon = document.getElementById("feedbackIcon");
    const feedbackTitle = document.getElementById("feedbackTitle");
    const feedbackMessage = document.getElementById("feedbackMessage");
    const selectedAnswersDiv = document.getElementById("selectedAnswers");
    const correctAnswersDiv = document.getElementById("correctAnswers");

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

    // Show selected answers
    selectedAnswersDiv.innerHTML = `
      <h4>Deine Antworten:</h4>
      <ul>
        ${selectedAnswers
          .map(
            (index) =>
              `<li class="${
                question.correct.includes(index) ? "correct" : "incorrect"
              }">
            ${question.options[index]}
          </li>`
          )
          .join("")}
      </ul>
    `;

    // Show correct answers
    correctAnswersDiv.innerHTML = `
      <h4>Korrekte Antworten:</h4>
      <ul>
        ${question.correct
          .map((index) => `<li class="correct">${question.options[index]}</li>`)
          .join("")}
      </ul>
    `;

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
      ? "Glückwunsch! Du hast beide Phasen erfolgreich abgeschlossen."
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
      // Auto-submit current selection if any
      if (this.selectedAnswers.size > 0) {
        this.submitAnswer();
      } else {
        // Auto-select first answer if no answer selected
        this.selectedAnswers.add(0);
        this.submitAnswer();
      }
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
        this.toggleAnswer(0);
        break;
      case "2":
      case "b":
      case "B":
        this.toggleAnswer(1);
        break;
      case "3":
      case "c":
      case "C":
        this.toggleAnswer(2);
        break;
      case "4":
      case "d":
      case "D":
        this.toggleAnswer(3);
        break;
      case "Enter":
        if (document.getElementById("submitAnswer").disabled === false) {
          this.submitAnswer();
        } else if (
          document.getElementById("feedbackContainer").style.display !== "none"
        ) {
          this.nextQuestion();
        }
        break;
    }
  }

  toggleAnswer(index) {
    const checkbox = document.querySelector(
      `[data-answer="${index}"] .answer-checkbox`
    );
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
      checkbox.dispatchEvent(new Event("change"));
    }
  }

  confirmExit() {
    if (
      confirm(
        "Möchtest du das Quiz wirklich verlassen? Dein Fortschritt geht verloren."
      )
    ) {
      window.location.href = "index.html";
    }
  }

  restartQuiz() {
    this.stopTimer();
    this.startQuiz();
  }

  saveProgress(percentage, passed) {
    try {
      const progress = JSON.parse(localStorage.getItem("quizProgress") || "{}");
      progress.phase2 = {
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
      if (this.checkAnswer(answer, question.correct)) {
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
      if (this.checkAnswer(answer, question.correct)) {
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
        phase: 2,
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
    if (window.audioManager) {
      window.audioManager.playFeedback(isCorrect);
    }
  }
}

// Initialize quiz when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.quiz2 = new Quiz2();
});
