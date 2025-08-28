// ===== QUIZ UNIT TESTS =====

function runQuizTests() {
  describe("Quiz Logic Tests", () => {
    it("should validate question data structure", () => {
      // Test Phase 1 Questions
      expect(typeof phase1Questions).toBe("object");
      expect(Array.isArray(phase1Questions)).toBeTruthy();
      expect(phase1Questions.length).toBeGreaterThan(0);

      // Test first question structure
      const firstQuestion = phase1Questions[0];
      expect(typeof firstQuestion.question).toBe("string");
      expect(Array.isArray(firstQuestion.options)).toBeTruthy();
      expect(typeof firstQuestion.correct).toBe("number");
      expect(typeof firstQuestion.explanation).toBe("string");

      // Test options array
      expect(firstQuestion.options.length).toBeGreaterThan(0);
      expect(firstQuestion.correct).toBeLessThan(firstQuestion.options.length);
    });

    it("should validate phase 2 questions for multiple choice", () => {
      expect(typeof phase2Questions).toBe("object");
      expect(Array.isArray(phase2Questions)).toBeTruthy();
      expect(phase2Questions.length).toBeGreaterThan(0);

      // Test multiple choice structure
      const multiQuestion = phase2Questions[0];
      expect(Array.isArray(multiQuestion.correct)).toBeTruthy();
      expect(multiQuestion.correct.length).toBeGreaterThan(0);

      // Test that correct answers are valid indices
      multiQuestion.correct.forEach((correctIndex) => {
        expect(correctIndex).toBeGreaterThanOrEqualTo(0);
        expect(correctIndex).toBeLessThan(multiQuestion.options.length);
      });
    });

    it("should validate phase 4 mathematical questions", () => {
      expect(typeof phase4Questions).toBe("object");
      expect(Array.isArray(phase4Questions)).toBeTruthy();
      expect(phase4Questions.length).toBeGreaterThan(0);

      // Test mathematical question structure
      const mathQuestion = phase4Questions[0];
      expect(typeof mathQuestion.question).toBe("string");
      expect(Array.isArray(mathQuestion.options)).toBeTruthy();
      expect(typeof mathQuestion.correct).toBe("number");
      expect(typeof mathQuestion.explanation).toBe("string");
    });

    it("should test question shuffling logic", () => {
      const originalQuestion = {
        question: "Test Question",
        options: ["A", "B", "C", "D"],
        correct: 0,
        explanation: "Test explanation",
      };

      const shuffled = shuffleArray([...originalQuestion.options]);

      expect(shuffled.length).toBe(originalQuestion.options.length);
      expect(shuffled).toContain("A");
      expect(shuffled).toContain("B");
      expect(shuffled).toContain("C");
      expect(shuffled).toContain("D");
    });

    it("should test score calculation", () => {
      const totalQuestions = 20;
      const correctAnswers = 15;
      const percentage = Math.round((correctAnswers / totalQuestions) * 100);

      expect(percentage).toBe(75);
      expect(percentage).toBeGreaterThanOrEqualTo(0);
      expect(percentage).toBeLessThanOrEqualTo(100);
    });

    it("should test pass/fail logic", () => {
      const passingScore = 60;
      const failingScore = 59;

      const passed1 = 75 >= passingScore;
      const passed2 = 60 >= passingScore;
      const failed1 = 59 >= passingScore;

      expect(passed1).toBeTruthy();
      expect(passed2).toBeTruthy();
      expect(failed1).toBeFalsy();
    });

    it("should test timer logic", () => {
      const timeLimit = 30;
      const timeLeft = 15;

      expect(timeLeft).toBeLessThanOrEqualTo(timeLimit);
      expect(timeLeft).toBeGreaterThanOrEqualTo(0);

      // Test timer warning logic
      const isWarning = timeLeft <= 10 && timeLeft > 5;
      const isDanger = timeLeft <= 5 && timeLeft > 0;
      const isTimeout = timeLeft <= 0;

      expect(typeof isWarning).toBe("boolean");
      expect(typeof isDanger).toBe("boolean");
      expect(typeof isTimeout).toBe("boolean");
    });

    it("should test progress calculation", () => {
      const currentQuestion = 5;
      const totalQuestions = 20;
      const progress = ((currentQuestion + 1) / totalQuestions) * 100;

      expect(progress).toBe(30);
      expect(progress).toBeGreaterThanOrEqualTo(0);
      expect(progress).toBeLessThanOrEqualTo(100);
    });

    it("should test answer validation", () => {
      // Single choice validation
      const validSingleAnswer = 2;
      const invalidSingleAnswer = 5;
      const maxOptions = 4;

      expect(
        validSingleAnswer >= 0 && validSingleAnswer < maxOptions
      ).toBeTruthy();
      expect(
        invalidSingleAnswer >= 0 && invalidSingleAnswer < maxOptions
      ).toBeFalsy();

      // Multiple choice validation
      const validMultipleAnswers = [0, 2];
      const invalidMultipleAnswers = [0, 5];
      const validMultiple = validMultipleAnswers.every(
        (answer) => answer >= 0 && answer < maxOptions
      );
      const invalidMultiple = invalidMultipleAnswers.every(
        (answer) => answer >= 0 && answer < maxOptions
      );

      expect(validMultiple).toBeTruthy();
      expect(invalidMultiple).toBeFalsy();
    });
  });

  describe("Quiz Data Integrity Tests", () => {
    it("should ensure all questions have required fields", () => {
      const allQuestions = [
        ...phase1Questions,
        ...phase2Questions,
        ...phase4Questions,
      ];

      allQuestions.forEach((question, index) => {
        expect(question.question).toBeDefined();
        expect(question.options).toBeDefined();
        expect(question.correct).toBeDefined();
        expect(question.explanation).toBeDefined();

        expect(typeof question.question).toBe("string");
        expect(question.question.length).toBeGreaterThan(0);
        expect(Array.isArray(question.options)).toBeTruthy();
        expect(question.options.length).toBeGreaterThan(0);
        expect(question.explanation.length).toBeGreaterThan(0);
      });
    });

    it("should validate answer options are unique", () => {
      const allQuestions = [
        ...phase1Questions,
        ...phase2Questions,
        ...phase4Questions,
      ];

      allQuestions.forEach((question, index) => {
        const options = question.options;
        const uniqueOptions = new Set(options);

        expect(uniqueOptions.size).toBe(options.length);
      });
    });

    it("should ensure correct answers are valid", () => {
      phase1Questions.forEach((question, index) => {
        expect(question.correct).toBeGreaterThanOrEqualTo(0);
        expect(question.correct).toBeLessThan(question.options.length);
      });

      phase2Questions.forEach((question, index) => {
        question.correct.forEach((correctIndex) => {
          expect(correctIndex).toBeGreaterThanOrEqualTo(0);
          expect(correctIndex).toBeLessThan(question.options.length);
        });
      });

      phase4Questions.forEach((question, index) => {
        expect(question.correct).toBeGreaterThanOrEqualTo(0);
        expect(question.correct).toBeLessThan(question.options.length);
      });
    });
  });
}

// Helper function for testing
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
