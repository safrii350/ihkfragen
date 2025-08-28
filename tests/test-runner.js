// ===== TEST RUNNER =====

class TestRunner {
  constructor() {
    this.testResults = [];
    this.totalTests = 0;
    this.passedTests = 0;
    this.failedTests = 0;
  }

  // Test-Framework Funktionen
  describe(description, testFunction) {
    console.group(`📋 ${description}`);
    this.addTestSection(description);

    try {
      testFunction();
    } catch (error) {
      console.error("Test Suite Error:", error);
      this.addTestResult(
        `Test Suite Error: ${error.message}`,
        false,
        error.stack
      );
    }

    console.groupEnd();
  }

  it(description, testFunction) {
    this.totalTests++;

    try {
      testFunction();
      this.passedTests++;
      console.log(`✅ ${description}`);
      this.addTestResult(description, true);
    } catch (error) {
      this.failedTests++;
      console.error(`❌ ${description}: ${error.message}`);
      this.addTestResult(description, false, error.message);
    }
  }

  expect(actual) {
    return {
      toBe: (expected) => {
        if (actual !== expected) {
          throw new Error(`Expected ${expected}, but got ${actual}`);
        }
      },
      toEqual: (expected) => {
        if (JSON.stringify(actual) !== JSON.stringify(expected)) {
          throw new Error(
            `Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(
              actual
            )}`
          );
        }
      },
      toContain: (expected) => {
        if (!actual.includes(expected)) {
          throw new Error(`Expected ${actual} to contain ${expected}`);
        }
      },
      toBeGreaterThan: (expected) => {
        if (actual <= expected) {
          throw new Error(`Expected ${actual} to be greater than ${expected}`);
        }
      },
      toBeLessThan: (expected) => {
        if (actual >= expected) {
          throw new Error(`Expected ${actual} to be less than ${expected}`);
        }
      },
      toBeTruthy: () => {
        if (!actual) {
          throw new Error(`Expected truthy value, but got ${actual}`);
        }
      },
      toBeFalsy: () => {
        if (actual) {
          throw new Error(`Expected falsy value, but got ${actual}`);
        }
      },
      toBeDefined: () => {
        if (actual === undefined) {
          throw new Error(`Expected defined value, but got undefined`);
        }
      },
      toBeNull: () => {
        if (actual !== null) {
          throw new Error(`Expected null, but got ${actual}`);
        }
      },
    };
  }

  // UI Funktionen
  addTestSection(description) {
    const resultsContainer = document.getElementById("testResults");
    const section = document.createElement("div");
    section.className = "test-section";
    section.innerHTML = `<h3>${description}</h3><div class="section-results"></div>`;
    section.id = `section-${description.replace(/\s+/g, "-").toLowerCase()}`;
    resultsContainer.appendChild(section);
  }

  addTestResult(description, passed, errorMessage = "") {
    const testResult = {
      description,
      passed,
      errorMessage,
      timestamp: new Date().toISOString(),
    };

    this.testResults.push(testResult);

    // UI Update
    const sections = document.querySelectorAll(".section-results");
    const lastSection = sections[sections.length - 1];

    if (lastSection) {
      const resultElement = document.createElement("div");
      resultElement.className = `test-result ${
        passed ? "test-pass" : "test-fail"
      }`;

      const icon = passed ? "✅" : "❌";
      const status = passed ? "PASS" : "FAIL";

      resultElement.innerHTML = `
                <strong>${icon} ${status}:</strong> ${description}
                ${
                  errorMessage
                    ? `<br><small>Error: ${errorMessage}</small>`
                    : ""
                }
            `;

      lastSection.appendChild(resultElement);
    }
  }

  // Zusammenfassung anzeigen
  showSummary() {
    const resultsContainer = document.getElementById("testResults");
    const summary = document.createElement("div");
    summary.className = "test-summary";

    const successRate =
      this.totalTests > 0
        ? Math.round((this.passedTests / this.totalTests) * 100)
        : 0;

    summary.innerHTML = `
            <h3>🧪 Test Zusammenfassung</h3>
            <p><strong>Gesamt Tests:</strong> ${this.totalTests}</p>
            <p><strong>Erfolgreich:</strong> <span style="color: #27ae60">${
              this.passedTests
            }</span></p>
            <p><strong>Fehlgeschlagen:</strong> <span style="color: #e74c3c">${
              this.failedTests
            }</span></p>
            <p><strong>Erfolgsrate:</strong> <span style="color: #3498db">${successRate}%</span></p>
            <p><strong>Ausführungszeit:</strong> ${new Date().toISOString()}</p>
        `;

    resultsContainer.insertBefore(summary, resultsContainer.firstChild);

    console.log(`\n🧪 TEST SUMMARY:`);
    console.log(
      `Total: ${this.totalTests}, Passed: ${this.passedTests}, Failed: ${this.failedTests}, Success Rate: ${successRate}%`
    );
  }

  // Alle Tests zurücksetzen
  reset() {
    this.testResults = [];
    this.totalTests = 0;
    this.passedTests = 0;
    this.failedTests = 0;

    const resultsContainer = document.getElementById("testResults");
    resultsContainer.innerHTML = "";
  }
}

// Globale Test-Runner Instanz
window.testRunner = new TestRunner();

// Globale Test-Funktionen
window.describe = (description, testFunction) =>
  window.testRunner.describe(description, testFunction);
window.it = (description, testFunction) =>
  window.testRunner.it(description, testFunction);
window.expect = (actual) => window.testRunner.expect(actual);

// Test-Ausführung
function runAllTests() {
  console.clear();
  console.log("🚀 Starting all tests...");

  window.testRunner.reset();

  const startTime = performance.now();

  try {
    // Quiz Tests
    if (typeof runQuizTests === "function") {
      runQuizTests();
    }

    // Audio Tests
    if (typeof runAudioTests === "function") {
      runAudioTests();
    }

    // Storage Tests
    if (typeof runStorageTests === "function") {
      runStorageTests();
    }

    // Validation Tests
    if (typeof runValidationTests === "function") {
      runValidationTests();
    }
  } catch (error) {
    console.error("Test execution error:", error);
  }

  const endTime = performance.now();
  const executionTime = Math.round(endTime - startTime);

  console.log(`\n⏱️ Test execution completed in ${executionTime}ms`);

  window.testRunner.showSummary();
}

// Tests automatisch ausführen wenn Seite geladen ist
document.addEventListener("DOMContentLoaded", () => {
  console.log('🧪 Test Runner ready! Click "Alle Tests ausführen" to start.');
});
