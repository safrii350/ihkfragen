// ===== STORAGE UNIT TESTS =====

function runStorageTests() {
  describe("Storage System Tests", () => {
    beforeEach(() => {
      // Clear localStorage before each test
      if (typeof localStorage !== "undefined") {
        localStorage.clear();
      }
    });

    it("should test localStorage availability", () => {
      expect(typeof localStorage).toBe("object");
      expect(typeof localStorage.setItem).toBe("function");
      expect(typeof localStorage.getItem).toBe("function");
      expect(typeof localStorage.removeItem).toBe("function");
      expect(typeof localStorage.clear).toBe("function");
    });

    it("should test quiz progress storage", () => {
      const testProgress = {
        phase1: {
          score: 85,
          completed: true,
          timestamp: new Date().toISOString(),
          totalQuestions: 20,
          correctAnswers: 17,
          timeSpent: 450,
        },
        phase2: {
          score: 73,
          completed: true,
          timestamp: new Date().toISOString(),
          totalQuestions: 15,
          correctAnswers: 11,
          timeSpent: 600,
        },
      };

      // Test storage
      localStorage.setItem("quizProgress", JSON.stringify(testProgress));
      const retrieved = JSON.parse(localStorage.getItem("quizProgress"));

      expect(retrieved).toEqual(testProgress);
      expect(retrieved.phase1.score).toBe(85);
      expect(retrieved.phase1.completed).toBeTruthy();
      expect(retrieved.phase2.score).toBe(73);
      expect(retrieved.phase2.completed).toBeTruthy();
    });

    it("should test audio settings storage", () => {
      const audioSettings = {
        isMuted: false,
        volume: 0.7,
      };

      // Test storage
      localStorage.setItem("audioSettings", JSON.stringify(audioSettings));
      const retrieved = JSON.parse(localStorage.getItem("audioSettings"));

      expect(retrieved).toEqual(audioSettings);
      expect(retrieved.isMuted).toBeFalsy();
      expect(retrieved.volume).toBe(0.7);
    });

    it("should test quiz statistics storage", () => {
      const quizStats = {
        totalAttempts: 5,
        totalCompletions: 4,
        averageScore: 78,
        bestScore: 95,
        attempts: [
          {
            date: new Date().toISOString(),
            score: 85,
            passed: true,
            timeSpent: 450,
            phase: 1,
          },
        ],
      };

      // Test storage
      localStorage.setItem("quizStats", JSON.stringify(quizStats));
      const retrieved = JSON.parse(localStorage.getItem("quizStats"));

      expect(retrieved).toEqual(quizStats);
      expect(retrieved.totalAttempts).toBe(5);
      expect(retrieved.bestScore).toBe(95);
      expect(Array.isArray(retrieved.attempts)).toBeTruthy();
    });

    it("should handle storage errors gracefully", () => {
      // Test with invalid JSON
      localStorage.setItem("testKey", "invalid json");

      const safeParse = (key) => {
        try {
          return JSON.parse(localStorage.getItem(key));
        } catch (error) {
          return null;
        }
      };

      expect(safeParse("testKey")).toBeNull();

      // Test with null/undefined values
      const handleNullValue = (value) => {
        return value || {};
      };

      expect(handleNullValue(null)).toEqual({});
      expect(handleNullValue(undefined)).toEqual({});
      expect(handleNullValue({ test: true })).toEqual({ test: true });
    });

    it("should test progress validation", () => {
      const validProgress = {
        score: 75,
        completed: true,
        timestamp: new Date().toISOString(),
        totalQuestions: 20,
        correctAnswers: 15,
      };

      const invalidProgress = {
        score: 150, // Invalid: > 100
        completed: true,
        totalQuestions: 20,
        correctAnswers: 25, // Invalid: > totalQuestions
      };

      // Test validation function
      const validateProgress = (progress) => {
        return (
          progress.score >= 0 &&
          progress.score <= 100 &&
          progress.correctAnswers >= 0 &&
          progress.correctAnswers <= progress.totalQuestions &&
          typeof progress.completed === "boolean"
        );
      };

      expect(validateProgress(validProgress)).toBeTruthy();
      expect(validateProgress(invalidProgress)).toBeFalsy();
    });

    it("should test data persistence across sessions", () => {
      // Simulate data that should persist
      const sessionData = {
        lastPhase: 2,
        totalPlayTime: 1800,
        preferences: {
          showTimer: true,
          autoAdvance: false,
        },
      };

      // Store data
      localStorage.setItem("sessionData", JSON.stringify(sessionData));

      // Simulate page reload (clear and reload)
      const storedData = localStorage.getItem("sessionData");
      const parsedData = JSON.parse(storedData);

      expect(parsedData).toEqual(sessionData);
      expect(parsedData.lastPhase).toBe(2);
      expect(parsedData.preferences.showTimer).toBeTruthy();
    });

    it("should test storage cleanup", () => {
      // Add test data
      localStorage.setItem("quizProgress", "test");
      localStorage.setItem("audioSettings", "test");
      localStorage.setItem("tempData", "test");

      // Test cleanup function
      const cleanupStorage = () => {
        const keysToKeep = ["quizProgress", "audioSettings"];
        const allKeys = Object.keys(localStorage);

        allKeys.forEach((key) => {
          if (!keysToKeep.includes(key)) {
            localStorage.removeItem(key);
          }
        });
      };

      cleanupStorage();

      expect(localStorage.getItem("quizProgress")).toBe("test");
      expect(localStorage.getItem("audioSettings")).toBe("test");
      expect(localStorage.getItem("tempData")).toBeNull();
    });

    it("should test storage quota handling", () => {
      // Test storage size calculation
      const calculateStorageSize = (data) => {
        return new Blob([JSON.stringify(data)]).size;
      };

      const testData = {
        phase1: { score: 85, completed: true },
        phase2: { score: 73, completed: true },
      };

      const size = calculateStorageSize(testData);
      expect(size).toBeGreaterThan(0);

      // Test if data fits in localStorage limit (usually 5-10MB)
      const localStorageLimit = 5 * 1024 * 1024; // 5MB
      expect(size).toBeLessThan(localStorageLimit);
    });
  });

  describe("Storage Performance Tests", () => {
    it("should test storage read/write performance", () => {
      const testData = {
        timestamp: new Date().toISOString(),
        score: Math.random() * 100,
        answers: Array.from({ length: 20 }, () =>
          Math.floor(Math.random() * 4)
        ),
      };

      const iterations = 100;
      const startTime = performance.now();

      for (let i = 0; i < iterations; i++) {
        localStorage.setItem(`test_${i}`, JSON.stringify(testData));
        JSON.parse(localStorage.getItem(`test_${i}`));
      }

      const endTime = performance.now();
      const avgTime = (endTime - startTime) / (iterations * 2); // Read + Write

      // Cleanup
      for (let i = 0; i < iterations; i++) {
        localStorage.removeItem(`test_${i}`);
      }

      expect(avgTime).toBeLessThan(1); // Should be less than 1ms per operation
    });

    it("should test large data storage", () => {
      // Create large test data
      const largeData = {
        attempts: Array.from({ length: 100 }, () => ({
          date: new Date().toISOString(),
          score: Math.random() * 100,
          answers: Array.from({ length: 20 }, () =>
            Math.floor(Math.random() * 4)
          ),
          timeSpent: Math.random() * 1000,
        })),
      };

      try {
        localStorage.setItem("largeData", JSON.stringify(largeData));
        const retrieved = JSON.parse(localStorage.getItem("largeData"));

        expect(retrieved.attempts.length).toBe(100);
        expect(retrieved.attempts[0].answers.length).toBe(20);

        localStorage.removeItem("largeData");
      } catch (error) {
        // If storage fails due to quota, that's also a valid test result
        expect(error.name).toBe("QuotaExceededError");
      }
    });
  });
}
