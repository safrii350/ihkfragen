# Quiz-Website für Fachinformatiker Prüfungsvorbereitung

Eine interaktive Quiz-Website zur Vorbereitung auf die Zwischenprüfung als Fachinformatiker für Anwendungsentwicklung.

## 🎯 Projektbeschreibung

Diese Quiz-Website bietet eine strukturierte Lernumgebung mit zwei Phasen:

- **Phase 1**: Single Choice Fragen zu IT-Abkürzungen und Grundlagen (20 Fragen)
- **Phase 2**: Multiple Choice Fragen zu technischen Konzepten (später implementiert)

## ✨ Features

### Aktuelle Features

- ✅ Phasenbasierte Quiz-Struktur
- ✅ 30-Sekunden Timer pro Frage
- ✅ Audio-Feedback bei Antworten
- ✅ Fortschritts-Tracking
- ✅ 60% Bestehensgrenze pro Phase
- ✅ Responsive Design
- ✅ Moderne UI mit Poppins und Pixelify Fonts

### Geplante Features

- 🔄 Phase 2 (Multiple Choice)
- 🔄 Erweiterte Statistiken
- 🔄 Offline-Modus
- 🔄 Export-Funktionen

## 🛠️ Technologie-Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Poppins, Pixelify)
- **Icons**: FontAwesome
- **Storage**: LocalStorage (Browser)
- **Audio**: Web Audio API

## 📁 Projektstruktur

```
kwizz/
├── index.html              # Startseite
├── phase1.html            # Phase 1 Quiz
├── css/
│   ├── style.css          # Hauptstyles
│   ├── quiz.css           # Quiz-spezifische Styles
│   └── responsive.css     # Responsive Design
├── js/
│   ├── main.js            # Hauptlogik
│   ├── quiz.js            # Quiz-Funktionalität
│   ├── audio.js           # Audio-Feedback
│   └── storage.js         # LocalStorage Management
├── audio/
│   ├── correct.mp3        # Korrekte Antwort Sound
│   └── incorrect.mp3      # Falsche Antwort Sound
├── data/
│   └── questions.js       # Quiz-Fragen
└── README.md              # Diese Datei
```

## 🚀 Setup & Installation

1. **Repository klonen oder herunterladen**
2. **Dateien in einen lokalen Webserver laden** (wegen Audio-Files)
3. **index.html im Browser öffnen**

### Lokaler Webserver (empfohlen)

```bash
# Mit Python 3
python -m http.server 8000

# Mit Node.js (http-server)
npx http-server

# Mit PHP
php -S localhost:8000
```

Dann im Browser: `http://localhost:8000`

## 🎨 Design-Konzept

- **Light Mode Only**: Professionelles Prüfungsfeeling
- **Big Typography**: Große, klare Schriftarten
- **Minimalistisch**: Clean und fokussiert
- **Responsive**: Funktioniert auf allen Geräten

## 📊 Quiz-Struktur

### Phase 1 (Single Choice)

- **20 Fragen** zu IT-Abkürzungen und Grundlagen
- **30 Sekunden** pro Frage
- **60%** zum Bestehen erforderlich
- **1 Punkt** pro korrekte Antwort

### Phase 2 (Multiple Choice) - Geplant

- Multiple Choice Fragen
- Erweiterte Themen
- Höhere Komplexität

## 🔧 Entwicklung

### To-Do Liste

#### Phase 1 - Grundstruktur ✅

- [x] Projektstruktur erstellen
- [x] README.md erstellen
- [ ] HTML-Grundgerüst (Startseite)
- [ ] CSS-Grundstyles
- [ ] JavaScript-Grundlogik

#### Phase 2 - Quiz-Funktionalität

- [ ] Quiz-Interface erstellen
- [ ] Timer-Implementierung
- [ ] Audio-Feedback
- [ ] Fortschritts-Tracking
- [ ] Ergebnis-Berechnung

#### Phase 3 - Daten & Content

- [ ] Fragen-Datenbank erstellen
- [ ] Antworten-Validierung
- [ ] LocalStorage Integration

#### Phase 4 - Polish & Testing

- [ ] Responsive Design
- [ ] Browser-Testing
- [ ] Performance-Optimierung
- [ ] Bug-Fixes

## 📝 Lizenz

Dieses Projekt ist für Bildungszwecke erstellt.

## 👥 Mitwirkende

Entwickelt für die Prüfungsvorbereitung als Fachinformatiker für Anwendungsentwicklung.
