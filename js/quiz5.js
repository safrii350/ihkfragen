// Phase 5 - KI-gestützte Freitextfragen
// OpenRouter API Integration mit DeepSeek AI

class Quiz5 {
  constructor() {
    this.questions = phase5Questions || phase5FallbackQuestions;
    this.currentQuestionIndex = 0;
    this.answers = [];
    this.scores = [];
    this.timeLeft = 180; // 3 Minuten pro Frage
    this.timer = null;
    this.isLoading = false;

    // OpenRouter API Configuration
    this.apiKey =
      "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"; // OpenRouter API Key
    this.apiUrl = "https://openrouter.ai/api/v1/chat/completions";
    this.model = "deepseek/deepseek-r1-0528:free";

    // UI Elements
    this.elements = {
      loadingScreen: document.getElementById("loadingScreen"),
      quizInterface: document.getElementById("quizInterface"),
      feedbackContainer: document.getElementById("feedbackContainer"),
      resultsContainer: document.getElementById("resultsContainer"),
      questionCounter: document.getElementById("currentQuestion"),
      totalQuestions: document.getElementById("totalQuestions"),
      questionText: document.getElementById("questionText"),
      questionCategory: document.getElementById("questionCategory"),
      questionDifficulty: document.getElementById("questionDifficulty"),
      answerInput: document.getElementById("answerInput"),
      charCounter: document.getElementById("charCounter"),
      minChars: document.getElementById("minChars"),
      submitBtn: document.getElementById("submitBtn"),
      timer: document.getElementById("timeLeft"),
      progressFill: document.getElementById("progressFill"),
      nextBtn: document.getElementById("nextBtn"),
      scoreCircle: document.getElementById("scoreCircle"),
      scoreValue: document.getElementById("scoreValue"),
      correctnessScore: document.getElementById("correctnessScore"),
      completenessScore: document.getElementById("completenessScore"),
      feedbackText: document.getElementById("feedbackText"),
      totalScore: document.getElementById("totalScore"),
      correctAnswers: document.getElementById("correctAnswers"),
      avgScore: document.getElementById("avgScore"),
    };

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.showLoadingScreen();
    this.loadQuiz();
  }

  setupEventListeners() {
    // Answer input validation
    if (this.elements.answerInput) {
      this.elements.answerInput.addEventListener("input", (e) => {
        this.validateInput(e.target.value);
      });
    }

    // Submit button
    if (this.elements.submitBtn) {
      this.elements.submitBtn.addEventListener("click", () => {
        this.submitAnswer();
      });
    }

    // Next button
    if (this.elements.nextBtn) {
      this.elements.nextBtn.addEventListener("click", () => {
        this.nextQuestion();
      });
    }

    // Back to home buttons
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

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        if (!this.elements.submitBtn.disabled) {
          this.submitAnswer();
        }
      }
    });
  }

  showLoadingScreen() {
    if (this.elements.loadingScreen && this.elements.quizInterface) {
      this.elements.loadingScreen.style.display = "flex";
      this.elements.quizInterface.style.display = "none";
      this.elements.feedbackContainer.style.display = "none";
      this.elements.resultsContainer.style.display = "none";
    }
  }

  loadQuiz() {
    // Simulate loading time
    setTimeout(() => {
      this.hideLoadingScreen();
      this.startQuiz();
    }, 2000);
  }

  hideLoadingScreen() {
    if (this.elements.loadingScreen && this.elements.quizInterface) {
      this.elements.loadingScreen.style.display = "none";
      this.elements.quizInterface.style.display = "block";
    }
  }

  startQuiz() {
    this.currentQuestionIndex = 0;
    this.answers = [];
    this.scores = [];
    this.loadQuestion();
    this.startTimer();
  }

  loadQuestion() {
    const question = this.questions[this.currentQuestionIndex];

    if (this.elements.questionCounter) {
      this.elements.questionCounter.textContent = this.currentQuestionIndex + 1;
    }

    if (this.elements.totalQuestions) {
      this.elements.totalQuestions.textContent = this.questions.length;
    }

    if (this.elements.questionText) {
      this.elements.questionText.textContent = question.question;
    }

    if (this.elements.questionCategory) {
      this.elements.questionCategory.textContent = question.category;
    }

    if (this.elements.questionDifficulty) {
      this.elements.questionDifficulty.textContent = question.difficulty;
    }

    if (this.elements.answerInput) {
      this.elements.answerInput.value = "";
      this.elements.answerInput.focus();
    }

    this.validateInput("");
    this.updateProgress();
  }

  validateInput(value) {
    const charCount = value.length;
    const minChars = 50;
    const maxChars = 1000;

    if (this.elements.charCounter) {
      this.elements.charCounter.textContent = `${charCount}/${maxChars} Zeichen`;
    }

    if (this.elements.minChars) {
      if (charCount >= minChars) {
        this.elements.minChars.textContent = "Mindestlänge erreicht";
        this.elements.minChars.className = "min-chars valid";
      } else {
        this.elements.minChars.textContent = `Mindestens ${minChars} Zeichen erforderlich`;
        this.elements.minChars.className = "min-chars";
      }
    }

    if (this.elements.submitBtn) {
      this.elements.submitBtn.disabled =
        charCount < minChars || charCount > maxChars || this.isLoading;
    }
  }

  async submitAnswer() {
    if (this.isLoading) return;

    const answer = this.elements.answerInput.value.trim();
    if (answer.length < 50) {
      alert("Bitte schreibe mindestens 50 Zeichen.");
      return;
    }

    this.isLoading = true;
    this.setSubmitButtonLoading(true);
    this.stopTimer();

    try {
      const evaluation = await this.evaluateWithAI(answer);
      this.showFeedback(evaluation);
    } catch (error) {
      console.error("Fehler bei der KI-Bewertung:", error);
      this.showFallbackFeedback(answer);
    } finally {
      this.isLoading = false;
      this.setSubmitButtonLoading(false);
    }
  }

  async evaluateWithAI(userAnswer) {
    const question = this.questions[this.currentQuestionIndex];

    const prompt = this.buildEvaluationPrompt(question, userAnswer);

    const response = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: this.model,
        messages: [
          {
            role: "system",
            content:
              "Du bist ein IT-Prüfungsexperte. Bewerte Schülerantworten fair und konstruktiv. Antworte nur im JSON-Format.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.3,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("API Response:", errorData);
      throw new Error(`API Error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    try {
      return JSON.parse(aiResponse);
    } catch (error) {
      // Fallback wenn JSON-Parsing fehlschlägt
      return this.parseFallbackResponse(aiResponse, userAnswer, question);
    }
  }

  buildEvaluationPrompt(question, userAnswer) {
    return `Bewerte diese IT-Prüfungsantwort:

Frage: ${question.question}
Kategorie: ${question.category}
Schwierigkeit: ${question.difficulty}

Schlüsselwörter: ${
      question.keywords ? question.keywords.join(", ") : "Nicht angegeben"
    }
Erwartete Punkte: ${
      question.expectedPoints
        ? question.expectedPoints.join(", ")
        : "Nicht angegeben"
    }
Beispielantwort: ${question.sampleAnswer || "Nicht angegeben"}

Schülerantwort: ${userAnswer}

Bewerte die Antwort und antworte im folgenden JSON-Format:
{
  "score": <Gesamtpunktzahl 0-100>,
  "correctness": <Korrektheit 0-100>,
  "completeness": <Vollständigkeit 0-100>,
  "feedback": "<Detailliertes Feedback auf Deutsch>",
  "keywords_found": <Anzahl gefundener Schlüsselwörter>,
  "suggestions": "<Verbesserungsvorschläge>"
}`;
  }

  parseFallbackResponse(aiResponse, userAnswer, question) {
    // Einfache Keyword-basierte Bewertung als Fallback
    const keywords = question.keywords || [];
    const sampleAnswer = question.sampleAnswer || "";

    let score = 0;
    let correctness = 0;
    let completeness = 0;
    let keywordsFound = 0;

    // Keyword-Check
    const userAnswerLower = userAnswer.toLowerCase();
    keywords.forEach((keyword) => {
      if (userAnswerLower.includes(keyword.toLowerCase())) {
        keywordsFound++;
      }
    });

    // Score-Berechnung - nur basierend auf gefundenen Schlüsselwörtern
    correctness = Math.round(
      (keywordsFound / Math.max(1, keywords.length)) * 100
    );

    // Vollständigkeit nur bewerten wenn mindestens ein Schlüsselwort gefunden wurde
    if (keywordsFound > 0) {
      completeness = Math.min(100, Math.round((userAnswer.length / 200) * 100));
    } else {
      completeness = 0;
    }

    // Gesamtbewertung - wenn keine Schlüsselwörter gefunden, dann 0%
    if (keywordsFound === 0) {
      score = 0;
    } else {
      score = Math.round((correctness + completeness) / 2);
    }

    return {
      score: score,
      correctness: correctness,
      completeness: completeness,
      feedback: `Fallback-Bewertung: ${keywordsFound} von ${keywords.length} Schlüsselwörtern gefunden. Antwortlänge: ${userAnswer.length} Zeichen.`,
      keywords_found: keywordsFound,
      suggestions:
        keywordsFound === 0
          ? "Deine Antwort enthält keine relevanten Fachbegriffe. Verwende die erwarteten Schlüsselwörter in deiner Antwort."
          : "Verbessere deine Antwort mit mehr Fachbegriffen und Details.",
    };
  }

  showFallbackFeedback(userAnswer) {
    const question = this.questions[this.currentQuestionIndex];
    const evaluation = this.parseFallbackResponse("", userAnswer, question);
    this.showFeedback(evaluation);
  }

  showFeedback(evaluation) {
    console.log("showFeedback called with:", evaluation);

    // Speichere Bewertung
    this.answers.push(this.elements.answerInput.value);
    this.scores.push(evaluation.score);

    // Update UI
    if (this.elements.scoreCircle) {
      this.elements.scoreCircle.style.setProperty(
        "--score-degree",
        `${evaluation.score * 3.6}deg`
      );
    }

    if (this.elements.scoreValue) {
      this.elements.scoreValue.textContent = `${evaluation.score}%`;
    }

    if (this.elements.correctnessScore) {
      this.elements.correctnessScore.textContent = `${evaluation.correctness}%`;
    }

    if (this.elements.completenessScore) {
      this.elements.completenessScore.textContent = `${evaluation.completeness}%`;
    }

    if (this.elements.feedbackText) {
      this.elements.feedbackText.innerHTML = evaluation.feedback.replace(
        /\n/g,
        "<br>"
      );
    }

    // Show feedback container
    if (this.elements.quizInterface && this.elements.feedbackContainer) {
      this.elements.quizInterface.style.display = "none";
      this.elements.feedbackContainer.style.display = "block";

      // Force visibility
      this.elements.feedbackContainer.style.visibility = "visible";
      this.elements.feedbackContainer.style.opacity = "1";
    }

    // Debug: Log the display states
    console.log(
      "Quiz Interface display:",
      this.elements.quizInterface?.style.display
    );
    console.log(
      "Feedback Container display:",
      this.elements.feedbackContainer?.style.display
    );
    console.log(
      "Feedback Container visibility:",
      this.elements.feedbackContainer?.style.visibility
    );

    // Play audio feedback
    if (window.audioManager) {
      if (evaluation.score >= 60) {
        window.audioManager.playCorrectSound();
      } else {
        window.audioManager.playIncorrectSound();
      }
    }
  }

  nextQuestion() {
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.showResults();
    } else {
      this.loadQuestion();
      this.startTimer();

      if (this.elements.feedbackContainer && this.elements.quizInterface) {
        this.elements.feedbackContainer.style.display = "none";
        this.elements.quizInterface.style.display = "block";
      }
    }
  }

  showResults() {
    const totalScore = Math.round(
      this.scores.reduce((sum, score) => sum + score, 0) / this.scores.length
    );
    const passedQuestions = this.scores.filter((score) => score >= 60).length;
    const avgScore = Math.round(totalScore);

    if (this.elements.totalScore) {
      this.elements.totalScore.textContent = `${totalScore}%`;
    }

    if (this.elements.correctAnswers) {
      this.elements.correctAnswers.textContent = `${passedQuestions}/${this.questions.length}`;
    }

    if (this.elements.avgScore) {
      this.elements.avgScore.textContent = `${avgScore}%`;
    }

    // Hide other containers and show results
    if (this.elements.feedbackContainer && this.elements.resultsContainer) {
      this.elements.feedbackContainer.style.display = "none";
      this.elements.resultsContainer.style.display = "block";
    }

    // Save results
    this.saveResults(totalScore, passedQuestions);

    // Play completion sound
    if (window.audioManager) {
      if (totalScore >= 60) {
        window.audioManager.playCorrectSound();
      } else {
        window.audioManager.playIncorrectSound();
      }
    }
  }

  saveResults(totalScore, passedQuestions) {
    const results = {
      phase: 5,
      date: new Date().toISOString(),
      totalScore: totalScore,
      passed: totalScore >= 60,
      passedQuestions: passedQuestions,
      totalQuestions: this.questions.length,
      answers: this.answers,
      scores: this.scores,
    };

    // Save to localStorage
    if (window.storageManager) {
      window.storageManager.savePhaseResults(5, results);
    } else {
      localStorage.setItem(
        `phase5_results_${Date.now()}`,
        JSON.stringify(results)
      );
    }
  }

  startTimer() {
    this.timeLeft = 180; // 3 Minuten
    this.updateTimerDisplay();

    this.timer = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();

      if (this.timeLeft <= 30) {
        this.playTimerWarning();
      }

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
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;

    if (this.elements.timer) {
      this.elements.timer.textContent = `${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    // Update progress bar
    if (this.elements.progressFill) {
      const progress = (this.timeLeft / 180) * 100;
      this.elements.progressFill.style.width = `${progress}%`;
    }
  }

  timeUp() {
    this.stopTimer();
    alert("Zeit ist abgelaufen! Deine Antwort wird automatisch eingereicht.");

    const answer = this.elements.answerInput.value.trim();
    if (answer.length > 0) {
      this.submitAnswer();
    } else {
      this.showFallbackFeedback("Keine Antwort gegeben.");
    }
  }

  updateProgress() {
    const progress =
      ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
    if (this.elements.progressFill) {
      this.elements.progressFill.style.width = `${progress}%`;
    }
  }

  setSubmitButtonLoading(loading) {
    if (this.elements.submitBtn) {
      if (loading) {
        this.elements.submitBtn.classList.add("loading");
        this.elements.submitBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Bewerte Antwort...';
      } else {
        this.elements.submitBtn.classList.remove("loading");
        this.elements.submitBtn.innerHTML =
          '<i class="fas fa-paper-plane"></i> Antwort einreichen';
      }
    }
  }

  playTimerWarning() {
    if (window.audioManager) {
      window.audioManager.playTimerWarning();
    }
  }

  // API Key Setter
  setApiKey(apiKey) {
    this.apiKey = apiKey;
  }

  // Test API Connection
  async testApiConnection() {
    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            {
              role: "system",
              content:
                'Du bist ein IT-Prüfungsexperte. Antworte nur mit "API-Verbindung erfolgreich".',
            },
            {
              role: "user",
              content: "Teste die Verbindung.",
            },
          ],
          temperature: 0.1,
          max_tokens: 10,
        }),
      });

      if (response.ok) {
        console.log("✅ API-Verbindung erfolgreich!");
        return true;
      } else {
        const errorData = await response.text();
        console.error("❌ API-Fehler:", response.status, errorData);
        return false;
      }
    } catch (error) {
      console.error("❌ API-Verbindungsfehler:", error);
      return false;
    }
  }
}

// Initialize Quiz when DOM is loaded
document.addEventListener("DOMContentLoaded", async () => {
  window.quiz5 = new Quiz5();

  // API Key is already set in constructor, but save it to localStorage for consistency
  if (!localStorage.getItem("openrouter_api_key")) {
    localStorage.setItem("openrouter_api_key", window.quiz5.apiKey);
  }

  // Test API connection
  const apiConnected = await window.quiz5.testApiConnection();

  if (!apiConnected) {
    console.warn(
      "⚠️ API-Verbindung fehlgeschlagen. Fallback-Modus wird verwendet."
    );
  }
});
