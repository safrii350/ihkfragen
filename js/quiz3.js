// ===== PHASE 3 QUIZ LOGIC =====

class Quiz3 {
  constructor() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.totalQuestions = 20;
    this.timeLimit = 45; // 45 Sekunden pro Frage
    this.timeLeft = this.timeLimit;
    this.timer = null;
    this.questions = [];
    this.selectedAnswers = [];
    this.quizCompleted = false;
    this.questionAnswers = []; // Track answers for each question

    this.init();
  }

  init() {
    this.loadQuestions();
    this.setupEventListeners();
    this.startQuiz();
  }

  loadQuestions() {
    // Lade Fragen aus der Datenbank
    this.questions = [...phase3Questions];
    this.shuffleQuestions();
  }

  shuffleQuestions() {
    // Fisher-Yates Shuffle Algorithm
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
  }

  shuffleArray(array) {
    // Fisher-Yates Shuffle Algorithm for arrays
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  setupEventListeners() {
    // Submit Button
    const submitBtn = document.getElementById("submitAnswer");
    submitBtn.addEventListener("click", () => {
      this.checkAnswer();
    });

    // Next Question Button
    const nextBtn = document.getElementById("nextQuestion");
    nextBtn.addEventListener("click", () => {
      this.nextQuestion();
    });

    // Restart Quiz Button
    const restartBtn = document.getElementById("restartQuiz");
    restartBtn.addEventListener("click", () => {
      this.restartQuiz();
    });

    // Back to Home Buttons
    const backToHomeBtn = document.getElementById("backToHome");
    if (backToHomeBtn) {
      backToHomeBtn.addEventListener("click", () => {
        window.location.href = "index.html";
      });
    }

    const backToHomeResultsBtn = document.getElementById("backToHomeResults");
    if (backToHomeResultsBtn) {
      backToHomeResultsBtn.addEventListener("click", () => {
        window.location.href = "index.html";
      });
    }

    // Audio Toggle
    const audioToggle = document.getElementById("audioToggle");
    audioToggle.addEventListener("click", () => {
      this.toggleAudio();
    });
  }

  startQuiz() {
    this.displayQuestion();
    this.startTimer();
  }

  displayQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    const questionText = document.getElementById("questionText");
    const answerOptions = document.getElementById("answerOptions");
    const currentQuestionSpan = document.getElementById("currentQuestion");
    const progressFill = document.getElementById("progressFill");

    // Update question text
    questionText.textContent = question.question;

    // Update question counter
    currentQuestionSpan.textContent = this.currentQuestionIndex + 1;

    // Update progress bar
    const progress =
      ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
    progressFill.style.width = progress + "%";

    // Clear previous selections
    this.selectedAnswers = [];
    this.updateSubmitButton();

    // Store original options and correct answer
    const originalOptions = [...question.options];
    const originalCorrectIndex = Array.isArray(question.correct)
      ? question.correct[0]
      : question.correct;
    const correctAnswerText = originalOptions[originalCorrectIndex];

    // Shuffle answer options for this question
    const shuffledOptions = this.shuffleArray([...originalOptions]);

    // Find the new index of the correct answer after shuffling
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswerText);
    question.correct = [newCorrectIndex];

    // Store shuffled options for this question
    question.shuffledOptions = shuffledOptions;

    // Generate answer options (all single choice with radio buttons)
    answerOptions.innerHTML = "";
    shuffledOptions.forEach((option, index) => {
      const label = document.createElement("label");
      label.className = "answer-option radio-option";
      label.setAttribute("data-answer", index);

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "answer";
      radio.className = "answer-radio";

      const customRadio = document.createElement("span");
      customRadio.className = "radio-custom";

      const optionText = document.createElement("span");
      optionText.className = "option-text";
      optionText.textContent = option;

      label.appendChild(radio);
      label.appendChild(customRadio);
      label.appendChild(optionText);

      // Add event listener
      radio.addEventListener("change", () => {
        this.handleRadioChange();
      });

      answerOptions.appendChild(label);
    });
  }

  handleRadioChange() {
    const radios = document.querySelectorAll(".answer-radio");
    this.selectedAnswers = [];

    radios.forEach((radio, index) => {
      if (radio.checked) {
        this.selectedAnswers.push(index);
      }
    });

    this.updateSubmitButton();
  }

  updateSubmitButton() {
    const submitBtn = document.getElementById("submitAnswer");
    submitBtn.disabled = this.selectedAnswers.length === 0;
  }

  startTimer() {
    this.timeLeft = this.timeLimit;
    this.updateTimerDisplay();

    this.timer = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();

      // Timer warnings
      if (this.timeLeft === 10) {
        this.showTimerWarning();
        if (window.audioManager) {
          window.audioManager.playTimerSound(this.timeLeft);
        }
      }

      if (this.timeLeft <= 0) {
        this.timeUp();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const timeLeftSpan = document.getElementById("timeLeft");
    const timerElement = document.getElementById("timer");

    timeLeftSpan.textContent = this.timeLeft;

    // Update timer styling based on time left
    timerElement.className = "timer";
    if (this.timeLeft <= 10) {
      timerElement.classList.add("danger");
    } else if (this.timeLeft <= 20) {
      timerElement.classList.add("warning");
    }
  }

  showTimerWarning() {
    const timerElement = document.getElementById("timer");
    timerElement.style.animation = "pulse 0.5s infinite";
  }

  timeUp() {
    clearInterval(this.timer);
    this.checkAnswer();
  }

  checkAnswer() {
    clearInterval(this.timer);

    const question = this.questions[this.currentQuestionIndex];
    const isCorrect = this.isAnswerCorrect(question, this.selectedAnswers);

    // Store the answer for this question
    this.questionAnswers[this.currentQuestionIndex] = {
      selected: [...this.selectedAnswers],
      correct: isCorrect,
    };

    if (isCorrect) {
      this.score++;
      if (window.audioManager) {
        window.audioManager.playCorrectSound();
      }
    } else {
      if (window.audioManager) {
        window.audioManager.playIncorrectSound();
      }
    }

    this.showFeedback(question, isCorrect);
  }

  isAnswerCorrect(question, selectedAnswers) {
    // Check if all correct answers are selected and no incorrect ones
    const correctAnswers = question.correct;

    if (selectedAnswers.length !== correctAnswers.length) {
      return false;
    }

    return correctAnswers.every((answer) => selectedAnswers.includes(answer));
  }

  showFeedback(question, isCorrect) {
    const questionContainer = document.getElementById("questionContainer");
    const feedbackContainer = document.getElementById("feedbackContainer");
    const feedbackIcon = document.getElementById("feedbackIcon");
    const feedbackTitle = document.getElementById("feedbackTitle");
    const feedbackMessage = document.getElementById("feedbackMessage");
    const selectedAnswersDiv = document.getElementById("selectedAnswers");
    const correctAnswersDiv = document.getElementById("correctAnswers");

    // Hide question container
    questionContainer.style.display = "none";

    // Update feedback content
    if (isCorrect) {
      feedbackIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
      feedbackIcon.className = "feedback-icon correct";
      feedbackTitle.textContent = "Korrekt!";
      feedbackTitle.style.color = "#27ae60";
    } else {
      feedbackIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
      feedbackIcon.className = "feedback-icon incorrect";
      feedbackTitle.textContent = "Falsch!";
      feedbackTitle.style.color = "#e74c3c";
    }

    feedbackMessage.textContent = question.explanation;

    // Show selected answers
    selectedAnswersDiv.innerHTML = "<h4>Deine Antworten:</h4><ul></ul>";
    const selectedList = selectedAnswersDiv.querySelector("ul");
    this.selectedAnswers.forEach((answerIndex) => {
      const li = document.createElement("li");
      li.textContent = question.shuffledOptions[answerIndex];
      li.className = question.correct.includes(answerIndex)
        ? "correct"
        : "incorrect";
      selectedList.appendChild(li);
    });

    // Show correct answers
    correctAnswersDiv.innerHTML = "<h4>Richtige Antworten:</h4><ul></ul>";
    const correctList = correctAnswersDiv.querySelector("ul");
    question.correct.forEach((answerIndex) => {
      const li = document.createElement("li");
      li.textContent = question.shuffledOptions[answerIndex];
      li.className = "correct";
      correctList.appendChild(li);
    });

    // Show feedback container
    feedbackContainer.style.display = "block";
  }

  nextQuestion() {
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.totalQuestions) {
      this.showResults();
    } else {
      // Reset for next question
      const questionContainer = document.getElementById("questionContainer");
      const feedbackContainer = document.getElementById("feedbackContainer");

      questionContainer.style.display = "block";
      feedbackContainer.style.display = "none";

      this.displayQuestion();
      this.startTimer();
    }
  }

  showResults() {
    const percentage = Math.round((this.score / this.totalQuestions) * 100);
    const passed = percentage >= 60;

    // Hide all containers
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("feedbackContainer").style.display = "none";

    // Update results
    document.getElementById("finalScore").textContent = percentage;
    document.getElementById("correctAnswers").textContent = this.score;
    document.getElementById("totalAnswered").textContent = this.totalQuestions;

    // Update status
    const resultsStatus = document.getElementById("resultsStatus");
    const statusIcon = resultsStatus.querySelector(".status-icon");
    const statusTitle = resultsStatus.querySelector(".status-title");
    const statusMessage = resultsStatus.querySelector(".status-message");
    const scoreCircle = document.querySelector(".score-circle");

    if (passed) {
      statusIcon.innerHTML = '<i class="fas fa-trophy"></i>';
      statusIcon.className = "status-icon passed";
      statusTitle.textContent = "Bestanden!";
      statusTitle.style.color = "#27ae60";
      statusMessage.textContent =
        "Glückwunsch! Du hast alle drei Phasen erfolgreich abgeschlossen.";
      scoreCircle.classList.add("passed");
    } else {
      statusIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
      statusIcon.className = "status-icon failed";
      statusTitle.textContent = "Nicht bestanden";
      statusTitle.style.color = "#e74c3c";
      statusMessage.textContent =
        "Du hast weniger als 60% erreicht. Versuche es noch einmal!";
      scoreCircle.classList.add("failed");
    }

    // Show results
    document.getElementById("resultsContainer").style.display = "block";

    // Save progress
    this.saveProgress(percentage, passed);

    // Play completion sound
    if (window.audioManager) {
      window.audioManager.playCompletionSound(passed);
    }
  }

  saveProgress(percentage, passed) {
    try {
      const progress = JSON.parse(localStorage.getItem("quizProgress") || "{}");

      progress.phase3 = {
        score: percentage,
        completed: passed,
        timestamp: new Date().toISOString(),
        correctAnswers: this.score,
        totalQuestions: this.totalQuestions,
        details: {
          arbeitsrecht: this.getCategoryScore("Arbeitsrecht"),
          bwl: this.getCategoryScore("BWL"),
          datenschutz: this.getCategoryScore("Datenschutz"),
          projektmanagement: this.getCategoryScore("Projektmanagement"),
        },
      };

      localStorage.setItem("quizProgress", JSON.stringify(progress));
    } catch (error) {
      console.error("Fehler beim Speichern des Fortschritts:", error);
    }
  }

  getCategoryScore(category) {
    let correct = 0;
    let total = 0;

    this.questions.forEach((question, index) => {
      if (question.category === category) {
        total++;
        // Check if this question was answered correctly
        if (
          this.questionAnswers[index] &&
          this.questionAnswers[index].correct
        ) {
          correct++;
        }
      }
    });

    return total > 0 ? Math.round((correct / total) * 100) : 0;
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswers = [];
    this.quizCompleted = false;
    this.questionAnswers = []; // Reset question answers

    // Hide results
    document.getElementById("resultsContainer").style.display = "none";

    // Shuffle questions again
    this.shuffleQuestions();

    // Start fresh
    this.startQuiz();
  }

  toggleAudio() {
    if (window.audioManager) {
      window.audioManager.toggleMute();
      this.updateAudioIcon();
    }
  }

  updateAudioIcon() {
    const audioToggle = document.getElementById("audioToggle");
    const icon = audioToggle.querySelector("i");

    if (window.audioManager && window.audioManager.isMuted) {
      icon.className = "fas fa-volume-mute";
      audioToggle.classList.add("muted");
    } else {
      icon.className = "fas fa-volume-up";
      audioToggle.classList.remove("muted");
    }
  }
}

// Initialize Quiz when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new Quiz3();
});
