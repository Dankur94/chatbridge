# ChatBridge Website — Umbau-Briefing

## Kontext-Dateien

Zwei Dateien steuern den Kontext:

1. **LESEN** — Service-Strategie (Single Source of Truth):
   `C:\Users\User\OneDrive - Alpha Coms\AI-Automation-Software\Docs\problems.md`
   → Lies diese Datei IMMER zuerst. Abschnitte ab "Service-Definition" = Grundlage für alle Website-Texte.

2. **SCHREIBEN** — Website-Ideen, Notizen, Feedback:
   `C:\Users\User\OneDrive - Alpha Coms\AI-Automation-Software\Docs\chatbridge.md`
   → Wenn der User neue Ideen hat oder Entscheidungen getroffen werden: hier unter "Ideen & Notizen" speichern + Änderungs-Log aktualisieren.

## Aufgabe: Website-Umbau

Aktuell: Tech-Demo Seite ("Turn Any Chat Into a Platform", Code-Beispiele, "Built for builders").
Neu: Service-Website die KUNDEN anspricht, nicht nur Entwickler.

### Struktur: Hauptseite + Unterseiten

Die Hauptseite (index.html) bleibt die allgemeine Hub-Seite.
Zusätzlich werden 5 Unterseiten erstellt — je eine pro Kundengruppe (siehe problems.md → "Kundengruppen").
Jede Unterseite spricht die SPRACHE des Kunden (seine Probleme, sein Vokabular).

### Hauptseite (index.html) — Änderungen

1. **Hero**: Kann bleiben ("Turn Any Chat Into a Platform"), ABER darunter:
   - "Or we build it for you" — Service klar kommunizieren
   - "Free consultation" Button → Kontakt (E-Mail/WhatsApp)
2. **Problem-Section**: Bleibt
3. **Architecture**: Bleibt, aber nach unten verschieben (erst Problem → Lösung → dann Technik)
4. **Use Cases**: Werden zu Links auf die Unterseiten (nicht mehr nur kleine Karten)
5. **NEU: Service-Section**:
   - Phase 1 kostenlos / Phase 2 Festpreis erklären (siehe problems.md → Service-Modell)
   - "AI-powered = schneller + günstiger"
   - Persönliches Profil (siehe problems.md → "Was ich mitbringe")
6. **NEU: Kontakt-Section**:
   - E-Mail, WhatsApp, Calendly (oder Platzhalter)
   - "Erstgespräch kostenlos"
7. **Code-Beispiel**: Nach unten oder eigene Seite — nicht prominent
8. **Footer**: "Open Source" bleibt, aber Service-Kontakt hinzufügen

### 5 Unterseiten (neue HTML-Dateien)

Inhalt für jede Unterseite kommt aus problems.md → "Kundengruppen (je eine eigene Unterseite)".
Dateinamen: maschinenbau.html, importeure.html, fertigung.html, kmu.html, prototypen.html

### Jede Unterseite hat:
- Hero mit dem spezifischen Problem als Headline
- 2-3 konkrete Beispiel-Szenarien
- "So läuft es ab" (Phase 1 kostenlos → Phase 2 Festpreis)
- Kontakt-CTA ("Erstgespräch kostenlos")
- Link zurück zur Hauptseite

### Design-Regeln
- Tesla-inspiriert, Full-Screen Sections, dark/light, Inter Font (bestehendes Design beibehalten)
- Bestehende style.css und script.js so weit wie möglich wiederverwenden
- Responsive (Mobile-First)
- Deutsche Sprache für die Unterseiten (Zielgruppe: DACH)
- Hauptseite bleibt Englisch

### Kontakt-Platzhalter
- E-Mail: contact@chatbridge.io (Platzhalter)
- WhatsApp: +852-XXXX-XXXX (Platzhalter)
- Calendly: calendly.com/chatbridge (Platzhalter)
