# 🧪 Quiz Unit Tests

Dieses Verzeichnis enthält das vollständige Unit Test-System für das Quiz-Projekt.

## 📁 Dateistruktur

```
tests/
├── test-runner.html          # Test-Runner HTML Interface
├── test-runner.js            # Test-Framework und Runner
├── quiz-tests.js             # Quiz-Logik Tests
├── audio-tests.js            # Audio-System Tests
├── storage-tests.js          # Storage-System Tests
├── validation-tests.js       # Validierung und UI Tests
└── README.md                 # Diese Dokumentation
```

## 🚀 Verwendung

### Tests ausführen

1. **Browser öffnen**: Öffne `tests/test-runner.html` in deinem Browser
2. **Tests starten**: Klicke auf "Alle Tests ausführen"
3. **Ergebnisse anzeigen**: Die Ergebnisse werden sowohl in der Konsole als auch im UI angezeigt

### Tests entwickeln

```javascript
// Neuen Test hinzufügen
describe("Meine Test-Gruppe", () => {
  it("sollte eine bestimmte Funktion testen", () => {
    expect(meineFunktion()).toBe("erwarteter Wert");
  });
});
```

## 🧪 Test-Kategorien

### 1. Quiz Logic Tests (`quiz-tests.js`)

- **Fragendaten-Struktur**: Validiert die Struktur aller Quiz-Fragen
- **Multiple Choice**: Testet die Mehrfachauswahl-Logik
- **Mathematische Fragen**: Validiert Phase 4 Fragen
- **Fragen-Mischung**: Testet das Shuffling der Antwortoptionen
- **Punkteberechnung**: Validiert Score-Berechnung und Bestehenslogik
- **Timer-Logik**: Testet die Zeitanzeige und Warnungen

### 2. Audio System Tests (`audio-tests.js`)

- **AudioManager Initialisierung**: Testet die korrekte Initialisierung
- **Mute-Funktionalität**: Validiert Audio-Stummschaltung
- **Lautstärke-Einstellungen**: Testet Volume-Management
- **Audio-Feedback**: Validiert Korrekte/Falsche Antwort Sounds
- **Timer-Sounds**: Testet Warn- und Gefahren-Töne
- **Einstellungen-Persistierung**: Validiert das Speichern von Audio-Einstellungen

### 3. Storage System Tests (`storage-tests.js`)

- **localStorage Verfügbarkeit**: Testet Browser-Support
- **Quiz-Fortschritt**: Validiert das Speichern von Quiz-Daten
- **Audio-Einstellungen**: Testet Audio-Settings Persistierung
- **Quiz-Statistiken**: Validiert detaillierte Statistiken
- **Fehlerbehandlung**: Testet graceful Error Handling
- **Performance**: Testet Storage-Performance und Quota-Handling

### 4. Validation & UI Tests (`validation-tests.js`)

- **DOM-Elemente**: Validiert die Existenz wichtiger DOM-Elemente
- **Event Listener**: Testet Event-Handler-Funktionalität
- **Timer-Funktionalität**: Validiert Timer-Management
- **Tastatur-Navigation**: Testet Keyboard-Events
- **CSS-Klassen**: Validiert Class-Management
- **Fortschrittsbalken**: Testet Progress-Berechnungen
- **Zugänglichkeit**: Validiert Accessibility-Features

## 🛠️ Test-Framework Features

### Expect-Funktionen

```javascript
expect(actual).toBe(expected); // Strict equality
expect(actual).toEqual(expected); // Deep equality
expect(actual).toContain(expected); // Array/string contains
expect(actual).toBeGreaterThan(expected); // Numeric comparison
expect(actual).toBeLessThan(expected); // Numeric comparison
expect(actual).toBeTruthy(); // Boolean truthy
expect(actual).toBeFalsy(); // Boolean falsy
expect(actual).toBeDefined(); // Not undefined
expect(actual).toBeNull(); // Exactly null
```

### Test-Struktur

```javascript
describe("Test-Gruppe", () => {
  it("sollte einen spezifischen Test ausführen", () => {
    // Test-Logik hier
    expect(result).toBe(expected);
  });
});
```

## 📊 Test-Ausführung

### Ergebnisse interpretieren

- **✅ PASS**: Test erfolgreich
- **❌ FAIL**: Test fehlgeschlagen
- **Erfolgsrate**: Prozentsatz der erfolgreichen Tests
- **Ausführungszeit**: Zeit für alle Tests

### Debugging

1. **Browser-Konsole**: Detaillierte Logs in der Entwickler-Konsole
2. **Fehlermeldungen**: Spezifische Fehler-Informationen
3. **Test-Logs**: Einzelne Test-Ausführung Details

## 🔧 Test-Entwicklung

### Best Practices

1. **Isolierte Tests**: Jeder Test sollte unabhängig sein
2. **Klare Namen**: Beschreibende Test- und Gruppennamen
3. **Mock-Objekte**: Verwende Mocks für externe Abhängigkeiten
4. **Edge Cases**: Teste auch Grenzfälle und Fehler-Szenarien
5. **Performance**: Berücksichtige Performance in Tests

### Neue Tests hinzufügen

1. **Test-Datei wählen**: Wähle die passende Test-Datei
2. **Test-Gruppe erstellen**: Verwende `describe()`
3. **Einzelne Tests**: Verwende `it()`
4. **Assertions**: Verwende `expect()`
5. **Testen**: Führe die Tests aus

### Mock-Beispiele

```javascript
// AudioContext Mock
const mockAudioContext = {
  createOscillator: () => ({
    connect: () => {},
    start: () => {},
    stop: () => {},
  }),
  state: "running",
  resume: () => Promise.resolve(),
};

// DOM Element Mock
const mockElement = {
  addEventListener: () => {},
  removeEventListener: () => {},
  classList: { add: () => {}, remove: () => {} },
};
```

## 🚨 Fehlerbehebung

### Häufige Probleme

1. **AudioContext nicht verfügbar**: Verwende Mocks für Tests
2. **DOM-Elemente fehlen**: Teste nur in Browser-Umgebung
3. **LocalStorage nicht verfügbar**: Verwende Fallbacks
4. **Performance-Probleme**: Optimiere Test-Logik

### Debugging-Tipps

1. **Konsole prüfen**: Schaue in die Browser-Konsole
2. **Einzelne Tests**: Führe Tests einzeln aus
3. **Mock-Überprüfung**: Validiere Mock-Objekte
4. **Browser-Support**: Prüfe Browser-Kompatibilität

## 📈 Test-Metriken

### Erfolgsrate-Ziele

- **Minimum**: 90% erfolgreiche Tests
- **Ziel**: 95% erfolgreiche Tests
- **Optimal**: 100% erfolgreiche Tests

### Performance-Ziele

- **Test-Ausführung**: < 5 Sekunden
- **Einzelner Test**: < 100ms
- **Memory-Usage**: < 50MB

## 🔄 Continuous Integration

### Automatisierte Tests

Die Tests können in CI/CD-Pipelines integriert werden:

```bash
# Tests in Headless-Browser ausführen
npm test

# Tests mit Coverage
npm run test:coverage

# Tests in verschiedenen Browsern
npm run test:browsers
```

## 📝 Changelog

### Version 1.0.0

- Initiales Test-System erstellt
- Quiz-Logik Tests implementiert
- Audio-System Tests hinzugefügt
- Storage-System Tests implementiert
- Validation & UI Tests hinzugefügt

---

**Hinweis**: Dieses Test-System ist für die Qualitätssicherung des Quiz-Projekts entwickelt worden und sollte bei jeder größerer Änderung ausgeführt werden.
