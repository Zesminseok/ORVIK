# ORVIK Benutzerhandbuch (2.0)

Dieses Handbuch beschreibt die Bildschirme von ORVIK und ihre Teile. Die Nummern in den Bildern entsprechen denen in den Listen. Version 2.0 ist eine native App (C++ / JUCE); dieses Handbuch beschreibt die Bildschirme von 2.0.

## Inhalt

1. [Bevor Sie beginnen](#1-bevor-sie-beginnen)
2. [Bildschirmaufbau](#2-bildschirmaufbau)
3. [Kopfzeile](#3-kopfzeile)
4. [Seitenleiste](#4-seitenleiste)
5. [Statusleiste](#5-statusleiste)
6. [DECKS](#6-decks)
7. [SMPTE OUT](#7-smpte-out)
8. [MIXER](#8-mixer)
9. [HISTORY](#9-history)
10. [SET LIST](#10-set-list)
11. [CUE CALL](#11-cue-call)
12. [NETWORK](#12-network)
13. [OUTPUT](#13-output)
14. [SHORTCUT und MAP](#14-shortcut-und-map)
15. [Einstellungen](#15-einstellungen)
16. [Marken und Lizenzen](#16-marken-und-lizenzen)

---

## 1. Bevor Sie beginnen

### Was ORVIK ist

ORVIK empfängt die Wiedergabedaten von CDJ und DJM und gibt sie an Licht- und Videosoftware weiter: TCNet, SMPTE-Timecode (LTC, MTC, Art-Net), OSC, DMX (Art-Net, sACN) und MIDI. Es fragt die Geräte nur ab; es steuert sie nicht.

### Voraussetzungen

| Punkt | Details |
| --- | --- |
| Betriebssystem | macOS 13.3 oder neuer (Apple Silicon), Windows 10, 11 (x64) |
| Geprüfte Geräte | CDJ-3000X, CDJ-3000, CDJ-2000NXS2, DJM-V10, DJM-900NXS2 |

Welche Daten verfügbar sind, hängt von Gerät, Firmware und Verbindung ab.

### Installation und Start

- **macOS** — DMG öffnen und ORVIK in den Ordner Programme ziehen.
- **Windows** — die heruntergeladene `.exe` direkt starten. Es gibt keinen Installer. Die Datei ist nicht signiert; wenn SmartScreen beim ersten Start warnt, "Weitere Informationen" und dann "Trotzdem ausführen" wählen.

Beim Start und beim Beenden erscheint kurz ein Begrüßungsbild. Beim Beenden werden zuerst die TCNet- und PRO DJ LINK-Verbindungen geschlossen.

---

## 2. Bildschirmaufbau

![Bildschirmaufbau](images/01-overview.png)

1. **Kopfzeile** — Master-BPM, die Schalter PRO DJ LINK und TCNET, die Schaltfläche CUE CALL, Lautstärke und Fensterschaltflächen. [Kapitel 3](#3-kopfzeile)
2. **Seitenleiste** — wählt die Seite. [Kapitel 4](#4-seitenleiste)
3. **Seite** — der in der Seitenleiste gewählte Bildschirm. Das Bild zeigt DECKS.
4. **SMPTE OUT-Dock** — zeigt und stellt die Timecode-Ausgänge ein. Zum Ausklappen anklicken. [Kapitel 7](#7-smpte-out)
5. **Statusleiste** — Zustand von Übertragung und App. [Kapitel 5](#5-statusleiste)

Ist ein CUE CALL-Fenster angedockt, erscheint das Cue-Call-Panel rechts neben der Seite. [Kapitel 11](#11-cue-call)

---

## 3. Kopfzeile

![Kopfzeile](images/02-header.png)

1. **MASTER BPM** — das BPM des CDJ-Masters. Hat der Master kein BPM, wird das eines laufenden Decks gezeigt, zuerst eines, das on air ist. Das linke Feld ist die Player-Nummer des Masters.
2. **PRO DJ LINK** — schaltet die Verbindung zu CDJ und DJM ein und aus.
3. **TCNET** — schaltet die TCNet-Übertragung an die Licht- und Videosoftware ein und aus. Steht der TCNet-Modus in den Einstellungen auf Client, oder ist STANDBY aktiv, wird auch eingeschaltet nichts gesendet.
4. **CUE CALL** — öffnet das Cue-Call-Fenster. [Kapitel 11](#11-cue-call)
5. **Neu laden** — lädt den Bildschirm neu (Cmd/Strg+R). Die Wiedergabe der virtuellen Decks stoppt.
6. **M.VOL** — die Lautstärke des Tons der virtuellen Decks, den die App ausgibt. CDJ- und Mixer-Audio sind davon nicht betroffen.
7. **Fensterschaltflächen** — unter Windows: ORVIK minimieren, maximieren und schließen. Unter macOS dienen die üblichen Schaltflächen oben links. Gibt es eine ungespeicherte History oder Set List, fragt ORVIK beim Schließen, ob gespeichert werden soll.

### Zustand der Schalter

Ist PRO DJ LINK oder TCNET eingeschaltet, füllt sich das linke Feld mit der Statusfarbe: grün, wenn alles in Ordnung ist, ein blinkender Punkt während des Einschaltens. Gibt es etwas zu prüfen, erscheint eine dieser Beschriftungen im Schalter.

| Beschriftung | Bedeutung |
| --- | --- |
| NO H/W | PRO DJ LINK ist eingeschaltet, aber kein CDJ oder DJM ist zu sehen. |
| LOST | Es gibt Hardware-Decks, aber seit mehr als 1,5 s sendet kein CDJ einen Status. |
| STANDBY | Im selben Netz läuft bereits ein früher gestarteter TCNet-Server; die Übertragung wartet. |

Gibt es eine neue Version, erscheint das Abzeichen UPDATE in der Kopfzeile. Ein Klick öffnet die Download-Seite.

---

## 4. Seitenleiste

| Menü | Inhalt |
| --- | --- |
| DECKS | Wellenformen, Timecode und Wiedergabezustand je Deck |
| MIXER | Kanalfader, EQ und Pegelanzeigen des DJM |
| HISTORY | Protokoll der Titel, die on air waren |
| SET LIST | Set List, Timecode-Offsets je Titel und Cue-Bearbeitung |
| NETWORK | PRO DJ LINK-Geräte und TCNet-Knoten |
| OUTPUT | Node-Editor, der Deck- und Mixerwerte als OSC, DMX und MIDI sendet, sowie Art-Net-Einstellungen |
| MAP | Schaltet den Modus ein, der einem Bedienelement per Klick ein Kürzel zuweist. [Kapitel 14](#14-shortcut-und-map) |
| SHORTCUT | Steuerung von ORVIK über Tastatur, MIDI, OSC und DMX |
| SETTINGS | Öffnet das Einstellungsfenster. |

---

## 5. Statusleiste

![Statusleiste](images/05-status-bar.png)

1. **TCNET** — ob der TCNET-Schalter in der Kopfzeile eingeschaltet ist. Bei STANDBY wird trotz ON nichts gesendet.
2. **ARENA** — Anzahl der TCNet-Knoten, die in den letzten 10 s gesehen wurden.
3. **DECKS** — Hardware-Decks plus virtuelle Decks mit geladenem Titel.
4. **UP** — Zeit seit dem Start der Engine.
5. **CPU** — CPU-Auslastung von ORVIK.
6. **MEM** — Speicher, den ORVIK belegt.
7. **Deck-Punkte** — ein Punkt je Deck. Hardware-Decks zeigen ihre Farbe; virtuelle Decks wechseln die Farbe nach Wiedergabe, Cue, geladen oder leer.

Bei Problemen erscheinen LINK, OUT oder MIX in der Statusleiste: LINK bei doppelten Player-Nummern, OUT wenn die TCNet-Übertragung gestoppt ist oder die App spiegelt, MIX wenn die Mixerdaten abgerissen sind. Ein Klick führt zur betreffenden Seite. Solange alles in Ordnung ist, erscheinen sie nicht.

---

## 6. DECKS

### 6.1 Deck-Modus und verbundene Geräte

![Deck-Modus und verbundene Geräte](images/03-deck-top.png)

1. **Deck-Modus** — HARDWARE folgt den CDJ im PRO DJ LINK-Netz (Standard). VIRTUAL nutzt virtuelle Decks, die Audiodateien dieses Rechners abspielen. Ein Moduswechsel entfernt die aktuellen Decks; der Wechsel zu HARDWARE mit vorhandenen virtuellen Decks fragt nach. [6.4](#64-virtuelle-decks)
2. **CDJ** — Nummer und Modell jedes verbundenen Players. Mauszeiger darüber zeigt die IP; Rechtsklick wählt die Deckfarbe.
3. **DJM** — Modell des verbundenen Mixers. NO DATA wird angefügt, wenn länger als 1,5 s kein Steuerwert eintrifft.

### 6.2 Deck-Karte

![Deck-Karte](images/04-deck-card.png)

Das Bild zeigt eine Karte im Layout FLOW. Andere Layouts lassen einige Teile weg oder verschieben sie.

1. **Player-Nummer** — Rechtsklick wählt die Deckfarbe.
2. **Titel, Künstler**
3. **Tonart** — die Tonart des Titels in Camelot-Schreibweise wie 8A; nicht umrechenbare werden unverändert gezeigt.
4. **ON AIR** — leuchtet, wenn der Kanal dieses Decks am Mixer on air ist.
5. **MASTER** — leuchtet, wenn dieses Deck der CDJ-Master ist.
6. **SYNC** — leuchtet, wenn Beat Sync aktiv ist.
7. **Kanalfader, Pegelanzeige** — Faderstellung und Kanalpegel am DJM.
8. **Wiedergabezustand** — PLAY, PAUSE, CUE, LOOP usw.
9. **Modell, Medium** — CDJ-Modell und das Medium mit dem Titel (Player-Nummer und USB oder SD). Die Chipfarbe ist die in rekordbox gesetzte Medienfarbe; ohne Farbe grau. Ohne Farbinformation steht Text statt des Chips.
10. **Groß fixieren** — hält in FLOW dieses Deck groß. Erneut klicken oder einen anderen Titel laden löst es.
11. **Detail-Wellenform** — die Wellenform um die Wiedergabeposition. Die rote Linie ist die Position.
12. **Taktzähler** — Takte bis zum nächsten Memory-Cue. Ab 8 oder weniger rot; ohne Cue voraus zeigt er die vergangenen Takte. Klick wechselt auf Sekunden.
13. **Zoom** — − vergrößert die Ansicht (×2 je Klick), + verkleinert sie (mindestens 0,5 s). RST stellt die Standardansicht von 8 s wieder her.
14. **Gesamt-Wellenform** — der ganze Titel. Bei Hardware-Decks zeigt Gedrückthalten die Detail-Wellenform an dieser Stelle; Loslassen kehrt zurück. Während der Vorschau zeigt der Zähler den Abstand zur Wiedergabeposition in Sekunden oder Minuten:Sekunden.
15. **Timecode** — der Timecode der aktuellen Position.
16. **Zeit** — Klick wechselt zwischen vergangener und verbleibender Zeit. Rechts die Gesamtlänge.
17. **Beat-Position** — welcher Beat im Takt spielt.
18. **BPM** — oben links das Original-BPM, darunter die Tempoänderung (%), die große Zahl rechts das aktuelle BPM.
19. **SMPTE MASTER** — weist dieses Deck Layer A oder B zu und macht diesen Layer zur MASTER-Quelle. Erneut klicken löst nur die MASTER-Quelle; die A-, B-Zuweisung bleibt. Die Ausgänge LTC, MTC und Art-Net werden in SMPTE OUT getrennt eingeschaltet.
20. **SMPTE A, B** — macht dieses Deck zur Quelle von SMPTE-Layer A oder B.

Steht die Wellenformfarbe auf 3band und der Titel hat keine 3band-Daten, erscheint ! am Deck und die Wellenform wird in RGB gezeigt. Wellenformen werden auf der Grafikkarte (GPU) gezeichnet.

### 6.3 Layouts

Es gibt vier Deck-Layouts. Wählen Sie mit **Layout-Thema** in den [Einstellungen](#15-einstellungen).

<table>
<tr>
<td width="50%"><img src="images/layout-flow.png" alt="FLOW"><br><b>FLOW</b> — passt die Deckgröße nach CDJ-Master, On-Air und Wiedergabe an. In einem breiten Fenster werden bis zu vier geladene Decks groß gezeigt.</td>
<td width="50%"><img src="images/layout-stk.png" alt="STK"><br><b>STK</b> — stapelt alle Decks als gleich große Karten, je zwei nebeneinander.</td>
</tr>
<tr>
<td><img src="images/layout-strip.png" alt="STRIP"><br><b>STRIP</b> — eine schmale Zeile je Deck. Nur die Gesamt-Wellenform wird gezeigt.</td>
<td><img src="images/layout-row.png" alt="ROW"><br><b>ROW</b> — eine Reihe je Deck mit breiten Detail- und Gesamt-Wellenformen.</td>
</tr>
</table>

### 6.4 Virtuelle Decks

![Virtuelles Deck](images/07-virtual-deck.png)

Steht der Deck-Modus auf VIRTUAL, spielen virtuelle Decks Audiodateien dieses Rechners ab. Das Bild zeigt STK. Die Transportschaltflächen (⑧) gibt es in allen Layouts außer STRIP; in FLOW liegen sie zwischen Timecode und BPM.

1. **Deck-Nummer**
2. **VIRTUAL, LOCAL** — kennzeichnet ein virtuelles Deck, dessen Titel eine Datei dieses Rechners ist.
3. **×** — entfernt dieses virtuelle Deck.
4. **Kanalfader** — zum Einstellen ziehen.
5. **Cover** — Klick entlädt den Titel.
6. **Detail-Wellenform** — ziehen verschiebt die Position.
7. **Gesamt-Wellenform** — klicken oder ziehen verschiebt die Position.
8. **|◀, CUE, ▶** — CUE setzt in Pause den Cue-Punkt und spielt, solange es gehalten wird; bei Wiedergabe springt es zum Cue-Punkt zurück. ▶ spielt und pausiert; |◀ stoppt und springt an den Anfang.
9. **Öffnen** — Klick wählt eine Audiodatei, oder eine Datei hierher ziehen.
10. **Virtuelles Deck hinzufügen** — fügt ein weiteres virtuelles Deck hinzu, bis zu 6.

Unterstützte Dateien: MP3, WAV, AIFF, FLAC, AAC, M4A (AAC, ALAC), OGG, MP4 (Audio). Jedes Format, das ein CDJ öffnet, öffnet sich auch hier.

Der Ton der virtuellen Decks kommt aus dem unter **Audioausgang** in den [Einstellungen](#15-einstellungen) gewählten Gerät; die Lautstärke ist M.VOL in der Kopfzeile.

---

## 7. SMPTE OUT

![SMPTE OUT](images/06-smpte-dock.png)

Es gibt drei Timecode-Ausgangslayer: A, B und MASTER. Layer A und B senden die Position des gewählten Decks; MASTER sendet Layer A, Layer B, die Rechneruhr oder FREEWHEEL. Das Bild zeigt Layer A und MASTER; Layer B entspricht A.

1. **SMPTE OUT** — Klick klappt das Dock aus oder ein. Eingeklappt fasst es Quelle und aktive Ausgänge jedes Layers zusammen.
2. **Abtrennen** — öffnet SMPTE OUT in einem eigenen Fenster. Beim Schließen kehrt es ins Dock zurück.
3. **Layer A** — der Layer, der die Position des gewählten Decks als Timecode sendet. Layer B ist gleich.
4. **LTC, MTC, ART** — schaltet die Ausgänge LTC (Audio-Timecode), MTC (MIDI-Timecode) und ART (Art-Net-Timecode) dieses Layers ein und aus. LTC und ART können in jedem Layer aktiv sein; MTC nur in einem. LTC-Gerät und MTC-Port werden unter **SMPTE-Timecode-Ausgang** in den [Einstellungen](#15-einstellungen) gewählt; Art-Net-Netz und Framerate oben auf der Seite [OUTPUT](#13-output).
5. **Quell-Deck** — das Deck, dem dieser Layer folgt. Entspricht den Schaltflächen A, B auf der Karte.
6. **Timecode** — die Position der Quelle plus Offset. Auf die tatsächliche Ausgabe kommt noch der Latenzausgleich aus den Einstellungen.
7. **− / +** — ändert jedes Feld um 1; mit Strg (Cmd am Mac) um 10. Steht STEP von MASTER auf TIME, ändert es die FREEWHEEL-Zeit, sonst den Offset.
8. **SET** — zeigt, dass der Offset der Set List in diesen Layer geladen ist. Mauszeiger darüber zeigt den Titel. Beim Offset UNLISTED, weil der Titel nicht in der Liste steht, steht SET —.
9. **OFFSET ON** — nimmt den Offset in die Ausgabe auf oder lässt ihn weg. Der Wert bleibt erhalten.
10. **Zurücksetzen** — setzt den Offset auf 0.
11. **MASTER** — der MASTER-Layer.
12. **FREEWHEEL-Schaltflächen** — ▶ lässt den FREEWHEEL-Code laufen, ❚❚ pausiert ihn und behält den Wert, |◀ kehrt zu 00:00:00:00 zurück. READY (◉) hält FREEWHEEL beim aktuellen Wert und startet ihn, sobald ein Deck zu spielen beginnt. Mit Mixer zählen nur Decks, die in dem Moment on air sind; bereits laufende und CUE-Vorhören nicht.
13. **Quelle** — A und B senden den Code dieses Layers plus MASTER-Offset. CLOCK nutzt die Rechnerzeit; FREEWHEEL läuft eigenständig ab dem letzten MASTER-Wert weiter.
14. **STEP** — bei MASTER-Quelle FREEWHEEL, ob − / + den Offset (OFS) oder die FREEWHEEL-Zeit (TIME) ändert.

Bei gestopptem Deck sendet LTC weiter den Code der gestoppten Position, dasselbe Frame wiederholt, damit der Empfänger den Stopp erkennt.

---

## 8. MIXER

![MIXER](images/10-mixer.png)

Zeigt den Zustand, den der DJM sendet. ORVIK ändert keine Mixereinstellungen. Kanalzahl und einige Elemente hängen vom Modell ab.

1. **DJM-Verbindung** — ob der DJM zu sehen ist.
2. **DATA, METER** — DATA: Steuerwerte (Fader, EQ) kommen an; METER: Pegelwerte kommen an.
3. **HEADPHONES** — Kopfhörerbereich. [8.1](#81-kopfhörer-und-effekte)
4. **SOUND COLOR FX** — Sound-Color-FX-Bereich. [8.1](#81-kopfhörer-und-effekte)
5. **BEAT FX** — Beat-FX-Bereich. [8.1](#81-kopfhörer-und-effekte)
6. **Kanäle** — ein gleicher Bereich je Kanal. [8.2](#82-kanäle)
7. **Crossfader** — Crossfaderstellung und die Kurven CH FADER und CROSSFADER.
8. **MASTER** — Master-Bereich. [8.3](#83-master)

<table>
<tr>
<td align="center"><img src="images/11-mixer-fx.png" alt="Kopfhörer und Effekte" width="280"><br>8.1 Kopfhörer und Effekte</td>
<td align="center"><img src="images/12-mixer-ch.png" alt="Kanal" width="220"><br>8.2 Kanäle</td>
<td align="center"><img src="images/13-mixer-master.png" alt="MASTER" width="208"><br>8.3 MASTER</td>
</tr>
</table>

### 8.1 Kopfhörer und Effekte

1. **LEVEL, MIX** — Stellung von Kopfhörer-LEVEL und CUE/Master-Balance (MIX).
2. **CUE** — leuchtet, wenn der Master im Kopfhörer zu hören ist.
3. **Einklappen** — Klick auf den Bereichsnamen klappt ihn ein oder aus.
4. **PARAMETER** — Stellung des PARAMETER von SOUND COLOR FX.
5. **SOUND COLOR FX-Effekt** — der gewählte Effekt; OFF, wenn keiner.
6. **BEAT FX-Effekt** — der gewählte Effekt.
7. **CH SELECT** — Kanal, auf den BEAT FX wirkt.
8. **FX FREQUENCY** — Band (LOW, MID, HI), auf das BEAT FX wirkt.
9. **LEVEL/DEPTH** — Stellung von LEVEL/DEPTH des BEAT FX.
10. **ON** — leuchtet, wenn BEAT FX aktiv ist.

Bei DJM mit zwei Kopfhörerausgängen werden zusätzlich LEVEL, MIX und LINK CUE von Kopfhörer B gezeigt. LINK CUE leuchtet beim Vorhören des LINK MONITOR von rekordbox.

Bei DJM mit FILTER-Bereich werden der gewählte Filter (LPF, HPF) und die RESONANCE-Stellung gezeigt.

### 8.2 Kanäle

1. **ON AIR** — leuchtet, wenn dieser Kanal on air ist.
2. **CUE, A, B** — Kopfhörer-CUE-Zustand des Kanals. Mit zwei Kopfhörern erscheinen A und B getrennt.
3. **TRIM** — TRIM-Stellung.
4. **EQ** — Stellungen von HI, HI MID, LOW MID und LOW. Die Zahl der Bänder hängt vom Modell ab.
5. **COLOR** — SOUND COLOR FX-Stellung.
6. **Pegelanzeige** — Kanalpegel. CLIP oben leuchtet bei übersteuertem Eingang.
7. **Kanalfader** — Faderstellung.
8. **Crossfader-Zuweisung** — A, THRU oder B für diesen Kanal.

### 8.3 MASTER

1. **Master-Anzeige** — Masterpegel L, R. CLIP leuchtet bei übersteuertem Ausgang.
2. **LEVEL** — Stellung von MASTER LEVEL.
3. **BALANCE** — Stellung von MASTER BALANCE. C ist die Mitte.
4. **CUE** — leuchtet, wenn der Master im Kopfhörer zu hören ist.
5. **BPM** — BPM eines laufenden CDJ. Bei mehreren das des Decks mit der niedrigsten Nummer.
6. **EQ, ISO** — Zustand des Master-EQ. Wechselt zu ISO bei aktivem MASTER ISOLATOR.
7. **BOOTH LEVEL** — Stellung von BOOTH LEVEL.

---

## 9. HISTORY

![HISTORY](images/14-history.png)

Protokolliert die Titel, die on air waren, mit Uhrzeit und Deck-Nummer. Mit Mixer zählt die Zeit in Wiedergabe und on air; ohne Mixer die Wiedergabezeit. Ein Titel wird nach 10 s protokolliert. Wird Wiedergabe oder On-Air länger als 3 s unterbrochen und kommt zurück, bekommt derselbe Titel eine neue Zeile; unter 3 s läuft dieselbe weiter. Virtuelle Decks werden beim Laden des Titels protokolliert und die Wiedergabezeit gezählt. Der Titel on air zeigt LIVE unter END.

Das Protokoll beginnt bei jedem Start neu. Es wird automatisch gesichert, und nach einem abnormalen Ende fragt ORVIK beim nächsten Start, ob es fortgesetzt werden soll.

1. **Startzeit** — Datum und Uhrzeit, zu der dieses Protokoll begann.
2. **Titelanzahl** — protokollierte Titel.
3. **IMPORT** — lädt eine History-Datei (ORVIK-CSV, ShowKontrol-History-CSV oder -TXT) in das aktuelle Protokoll. Die Einträge werden unverändert angefügt.
4. **EXPORT** — speichert im gewählten Format: ORVIK-CSV (in ORVIK wieder ladbar), ShowKontrol-History, ShowKontrol-Set-List oder Titelliste als TXT.
5. **CLEAR** — leert das Protokoll. Zur Bestätigung innerhalb von 3 s erneut klicken.
6. **EVENT** — Name der Veranstaltung. Geht in die Dateinamen der Exporte (CSV, Set List, Titelliste) und in den Text der TXT.
7. **DJ** — Name des DJ. Geht in den Text der TXT.
8. **Suche** — sucht nach Titel oder Künstler.
9. **Tabellenkopf** — Rand ziehen ändert die Breite; Doppelklick stellt sie zurück. Spalten:
   - **DECK** — Player-Nummer und Modell.
   - **START, END** — wann der Titel on air ging und wann nicht mehr.
   - **IN, OUT** — Wiedergabepositionen beim Gehen on air und beim Verlassen.
   - **ON AIR** — Zeit on air.
10. **Summen** — gespielte Titel, Gesamtzeit ON AIR, mittleres BPM und Titel je Deck.

Beim Überfahren einer Zeile erscheinen rechts eine Schaltfläche zum Hinzufügen zur Set List und eine zum Löschen. Das Löschen des Titels on air beendet seine Protokollierung, solange er weiterläuft.

---

## 10. SET LIST

![SET LIST](images/15-setlist.png)

Eine Liste mit Timecode-Offset und Cues für jeden Titel. Bei eingeschaltetem APPLY TO SMPTE geht beim Laden eines Listentitels in ein Deck sein Offset in den SMPTE-Layer (A, B), mit dem dieses Deck verbunden ist. Wie die History ist die Set List bei jedem Start leer; automatische Sicherung und Wiederherstellung funktionieren gleich.

1. **Titelanzahl** — Titel in der Liste.
2. **APPLY TO SMPTE** — ein: der Offset des geladenen Titels geht in den Layer dieses Decks. Aus: die Layer-Offsets bleiben.
3. **UNLISTED** — Offset für Titel, die nicht in der Liste stehen. Die Schaltfläche daneben setzt ihn auf 00:00:00:00.
4. **AUTO FILL** — Startwert und Schritt (1H, 30M, 10M) setzen und FILL klicken, um die Offsets der Reihe nach zu füllen. Ohne Schritt erhalten alle denselben Wert.
5. **ADD** — + fügt einen von Hand eingegebenen Titel hinzu; eine Deck-Nummer fügt den in diesem Deck geladenen Titel hinzu.
6. **Suche** — sucht nach Titel oder Künstler.
7. **IMPORT** — lädt eine Set List: ORVIK-Datei, ShowKontrol-Set-List (.set) oder -History (.csv), eine aus rekordbox oder anderen exportierte Textliste, oder Audiodateien. Bei vorhandener Liste fragt es nach Ersetzen (REPLACE) oder Anhängen (ADD), und bittet um Spaltenwahl, wenn es die einer Textdatei nicht erkennt. ORVIK-Dateien enthalten die Cues.
8. **EXPORT** — speichert im gewählten Format: ORVIK-Datei oder ShowKontrol-Set-List (.set).
9. **CLEAR PLAYED** — löscht nur die Gespielt-Markierungen.
10. **CLEAR** — leert die Liste. Zur Bestätigung innerhalb von 3 s erneut klicken. Die Cues der Titel werden mit ihnen gelöscht.
11. **OFFSET** — Offset dieses Titels. Beim Laden in ein Deck geht dieser Wert in den Layer. Klick bearbeitet; die Schaltfläche daneben setzt ihn auf 00:00:00:00.
12. **STATUS (in einem Deck)** — Deck, in dem der Titel geladen ist, und Layer (A, B), der seinen Offset erhielt.
13. **STATUS (gespielt)** — eine Markierung erscheint, wenn der Titel bei eingeschaltetem APPLY TO SMPTE gespielt wurde und on air war. Ohne Mixer zählt nur die Wiedergabe. Steht derselbe Titel mehrmals in der Liste, wird der Offset einer unmarkierten Zeile genommen; steht er einmal, wird sein Offset wiederverwendet.
14. **Titel in einem Deck** — Zeilen geladener Titel sind hervorgehoben.

Klick auf Titel oder Künstler bearbeitet ihn. Die Schaltflächen rechts in der Zeile verschieben den Titel nach oben oder unten oder entfernen ihn. Rand im Tabellenkopf ziehen ändert die Breite; Doppelklick stellt sie zurück. Die Spalte **Wellenform** jeder Zeile ist die Herkunft der in der Cue-Bearbeitung genutzten Wellenform (Audiodatei, HISTORY, CDJ, keine) und die Spalte **Cues** die Zahl der Cues des Titels.

### 10.1 Cue-Bearbeitung

Der Cue-Editor öffnet sich rechts neben der Seite SET LIST. Beim Wählen eines Titels erscheinen seine Wellenform und seine Cue-Liste.

- **Wellenform** — der ganze Titel und ein vergrößerter Ausschnitt, mit Beatgrid, Taktnummern, Phrasenbändern und Cue-Markierungen. Die Wellenform stammt aus der Audiodatei, dem HISTORY-Protokoll oder vom CDJ, je nachdem, was vorhanden ist. CDJ-Wellenformen brauchen die eingeschaltete Titelbibliothek (der Editor bietet das Einschalten an). Ohne Wellenform werden Cues nur nach Zeit gesetzt.
- **Position bewegen** — Klick in die Wellenform bewegt die Bearbeitungsposition. **Einrasten** (aus, Beat, Takt, Frame) richtet sie am Raster aus. **Zoom** ändert den vergrößerten Bereich.
- **+ Cue (C)** — erzeugt einen Cue an der Bearbeitungsposition. Mit Audiodatei wird diese Stelle vorgehört.
- **Hot Cues importieren** — holt Hot Cues und Memory-Punkte aus rekordbox als Cue-Positionen.
- **Cue-Liste** — Zeit, Takt.Beat, Name, Gruppe und Aktionsübersicht.
- **Cue-Einstellungen** — Name, Zeit, Takt.Beat, Gruppe, Vorwarnung (Standard oder eine Anzahl Beats), Stimme (Gruppe folgen, ja, nein), Sprechtext (leer: der Cue-Name) und Aktionsliste.
- **Aktionsliste** — wird von oben nach unten ausgeführt: OSC (Ziel, Adresse, Typ i/f/s, Wert), Art-Net DMX (Universum, mehrere Kanal=Wert), MIDI (Gerät, Kanal, Note on/off, CC, Program) und Warten (ms, oder Beats und Takte). Die Zielliste ist dieselbe wie in OUTPUT.
- **Gruppe** — die Crew-Gruppe des Cues. Die Standardgruppen sind Licht, Video, SFX und Laser; **Gruppen bearbeiten…** im Gruppenmenü benennt sie um, färbt sie oder fügt welche hinzu. Die Gruppen bestimmen das Cue-Call-Fenster und die Sprachausgaben.
- **Cue-Ausgabe** — der Schalter über dem Editor schaltet das Senden der Aktionen ein und aus.

Cues reagieren nur auf den Titel, der im Master-Deck läuft. Steht dieser Titel nicht in der Set List, wird kein Cue gesendet. Der Beat des Cues wird aus Beatgrid und Wiedergabeposition berechnet. Cues gehören zum Set-List-Eintrag, derselbe Titel hat also in jeder Set List andere Cues.

---

## 11. CUE CALL

Die Schaltfläche CUE CALL in der Kopfzeile öffnet das Cue-Call-Fenster. Es zeigt je Gruppe die Cues des Titels im Master-Deck und zählt bis zum nächsten herunter. Mehrere Fenster können geöffnet sein (etwa eines für Licht, eines für SFX); Position, Größe und Anzeigeeinstellungen werden je Fenster gemerkt. Die Schaltfläche in der Titelleiste dockt es rechts an das Hauptfenster an und löst es wieder.

### Themen

- **Board** — eine Karte je Gruppe: Cue-Name, nächster Cue, große Rückwärtszählung und Fortschrittsbalken über die letzten 8 Takte. Nähert sich der Cue, füllt sich die Karte mit der Gruppenfarbe; beim Cue zeigt sie GO.
- **Layers** — eine laufende Zeitleiste: oben die Wellenform des Master-Decks mit ihren Cue-Markierungen, darunter eine Linie je Gruppe und die des nächsten Titels. Die NOW-Linie liegt bei 20 % der Breite; ein Cue löst aus, wenn er sie berührt.

### Verbleibende Zeit

Sekunden und Beats (Takt.Beat, wie der Beat-Countdown des CDJ) zusammen: `2.3` bedeutet 2 Takte und 3 Beats. In der großen Rückwärtszählung nehmen die Sekunden die Gruppenfarbe in 0,1-s-Schritten an, die letzten Beats zählen 3 2 1 (oder ab 5 oder 10) und GO erscheint. Klick auf die Zahl wechselt zwischen Sekunden zuerst, Beats zuerst und nur Sekunden.

### Einstellungsfenster (das Zahnrad)

| Bereich | Elemente |
| --- | --- |
| Anzeige | verbleibende Zeit (Sekunden zuerst, Beats zuerst, nur Sekunden), große Rückwärtszählung (5, 10, 15, 30 s), Beatzählung ab (3, 5, 10), Zeitleistenbereich, sichtbare Gruppen, Wellenformfarbe (Titel, Gruppe, grau) |
| Webansicht | die Adresse für Telefone und Tablets, **Adresse kopieren**, **Im Browser öffnen**. Der Web-Viewer muss in den Einstellungen eingeschaltet sein. |
| Stimme | Sprechen (Name + Zählung, nur Name, nur Zählung), Vorwarnung (8 Beats, 4 Beats), Rückwärtszählung (3, 2, 1 oder keine), letztes Wort (ja, nein), Stimme, Klick (keiner, während der Zählung, immer) und dessen Lautstärke, Ausgang (Gerät, Kanal, Lautstärke, Test), Stummschaltung je Gruppe |

### Gesprochene Ansagen

Der Lautsprecher in der Kopfzeile des Fensters schaltet die gesprochenen Ansagen ein und aus. Die Sätze werden vorab mit den Systemstimmen (macOS, Windows) erzeugt und während der Show im Beat abgespielt.

- 8 (oder 4) Beats vor dem Cue: "Gruppe, Cue-Name, Standby"; auf jedem Beat "drei, zwei, eins"; beim Cue "go".
- Die Liste **Stimme** zeigt nur Stimmen der Sprachen, die die App sprechen kann (Koreanisch, Englisch, Japanisch, Spanisch, Deutsch, Französisch, Chinesisch), nach Sprache gruppiert. Der erste Eintrag, "Systemstimme auf …", ist die Standardstimme der Oberflächensprache. Die Wahl einer Stimme in einer anderen Sprache stellt die Ansagen auf diese Sprache um (eine englische Stimme sagt "Lighting, standby", "three, two, one, go"). In der Set List eingegebene Gruppennamen werden unverändert vorgelesen.
- Gibt es keine Stimme für die Sprache, kommen die Ansagen auf Englisch, und der erste Eintrag weist darauf hin. Stimmen werden in den Spracheinstellungen des Betriebssystems hinzugefügt.
- Der **Ausgang** kann ein anderer Kanal des Geräts sein, das LTC nutzt, aber nicht der LTC-Kanal; die Wahl desselben Kanals zeigt einen Konflikthinweis.
- Der Lautsprecher neben einem Gruppennamen schaltet diese Gruppe stumm. Im Fenster ausgeblendete Gruppen werden nicht gesprochen.

### Webseite

Ist der Web-Viewer in den Einstellungen eingeschaltet, öffnen Telefone, Tablets und andere Rechner im selben Netz `http://<dieser Rechner>:<Port>/cuecall`. Sie fragt zuerst nach dem Zugangscode (derselbe wie beim Web-Viewer) und merkt ihn 12 Stunden. Die Themen Board und Layers und die Anzeigeeinstellungen werden auf diesem Gerät gewählt. Für Telefone im Hochformat gibt es ein eigenes Layout.

---

## 12. NETWORK

![NETWORK](images/16-network.png)

1. **PRO DJ LINK-Zustand** — ob ORVIK bereit ist, PRO DJ LINK zu empfangen. Ob CDJ zu sehen sind, zeigt die Geräteliste.
2. **Geräteliste** — Nummer, Typ, Modell und IP jedes gesehenen CDJ und DJM.
3. **TCNet-Zustand** — ob der TCNET-Schalter eingeschaltet ist, und der Knotenname von ORVIK.
4. **Knotenliste** — ORVIK und die in den letzten 10 s gesehenen TCNet-Knoten.
5. **TYPE** — die Rolle des Knotens: SERVER sendet, CLIENT empfängt; außerdem REPEATER und AUTO. Ist TCNet eingeschaltet und kein CLIENT vorhanden, erscheint ein Hinweis unter der Liste.

---

## 13. OUTPUT

Sendet Deck- und Mixerwerte als OSC, DMX (Art-Net, sACN) und MIDI an andere Programme und Geräte. Es ist ein Node-Editor, der die frühere OSC-Seite und den DMX-Patch von ART-NET vereint. OSC-Zeilen und DMX-Patches aus 1.6 werden beim ersten Start in Nodes umgewandelt und senden dieselben Werte.

### Oberer Bereich

- **IMPORT, EXPORT** — speichert den Node-Graphen in eine Datei oder lädt ihn.
- **OSC** — OSC-Ziel (Adresse:Port): dieser Rechner, eine IP oder Broadcast.
- **Art-Net-Netz** — Netzwerkschnittstelle für Art-Net und DMX-Rate (Hz).
- **Art-Net-Timecode** — Framerate des Art-Net-Timecodes. Jeder Layer wird mit der Schaltfläche ART in SMPTE OUT eingeschaltet.
- **MIDI** — MIDI-Ausgabegerät.
- **Suchen** — sucht erneut nach Art-Net-Geräten (ArtPoll) und MIDI-Geräten.

### Linke Liste

Klick auf ein Element erzeugt seinen Node auf der Fläche.

| Gruppe | Nodes |
| --- | --- |
| Ziele | OSC, DMX-Ausgang, MIDI CC, MIDI Note |
| Werte (Mixerkanäle 1–6) | Fader, VU, Hi, Mid, LoMid, Low, Color, OnAir |
| Werte (Mixer gesamt, Effekte) | Xf, MVU, MVUL, MVUR, BeatFX, BeatFXOn, BeatFXName, BeatFXCh, ColorFXName |
| Werte (Deck-Tempo) | BPM, BPMCoarse, BPMFine, Beat, Downbeat, Phase, BarBeat, BarPhase |
| Werte (Deck-Zeit, Phrasen) | Pos, Time, Length, Remain, Phrase, PhraseKind, PhrasePos, PhraseBeats |
| Werte (Deck-Zustand, Titel) | Loop, Sync, Master, CDJPlay, CDJCue, Deck, Title, Artist, Key |
| Werte (SMPTE-Ausgang) | SMPTEA, SMPTEB, SMPTEM, Clock |
| Transformationen | Bereich, Form (sin, tri, saw, sq), Invertieren, Freilauf, Zeitformat |
| Rechenoperationen | Addieren, Subtrahieren, Multiplizieren, Dividieren, Min, Max, Glätten, Zeilenumbruch |

### Fläche und Einstellungen rechts

Ziehen Sie den Ausgang eines Wert-Nodes auf den Eingang einer Transformation, Rechenoperation oder eines Ziels. Der fließende Wert ist über dem Kabel zu sehen. Ein Wert kann an mehrere Ziele gehen. Beim Auswählen eines Nodes erscheinen seine Einstellungen rechts (Deck, Bereich, Adresse, Kanal, Typ, aktueller Wert). Das Deck eines Wert-Nodes ist "Master folgen" oder Deck 1–6.

- **OSC** — Adresse und Typ (int, float, string). Gesendet wird nur bei Änderung, höchstens 60-mal je Sekunde. Ein fehlender `/` am Anfang wird ergänzt; Leerzeichen und `# * , ? [ ] { }` sind nicht erlaubt.
- **DMX-Ausgang** — Net, Subnet, Universe und Kanal. Werte 0–1 werden als 0–255 gesendet. Empfänger (Unicast-IP oder Broadcast) und sACN-Priorität werden im Node gesetzt.
- **MIDI CC, MIDI Note** — Kanal und CC- oder Notennummer. Werte 0–1 werden als 0–127 gesendet.
- **Bereich** — wandelt 0–1 in min–max. Ein min größer als max kehrt die Richtung um. BPM behandelt 20–500 BPM als 0–1.
- **Form** — wandelt 0–1 in eine sin-, tri-, saw- oder sq-Welle; **Invertieren** ist 1 − Wert. **Freilauf** läuft mit der gewählten Periode eigenständig, ohne Eingang.
- **Zeitformat** — wählt die Felder (hh, mm, ss, ff) eines Zeitwerts (Time, Length, Remain, SMPTE, Clock). Siehe "Zeitformat".
- **Zeilenumbruch** — verbindet Textwerte über mehrere Zeilen (etwa Titel / Künstler).

Die Werte werden in der Ausgabe-Engine berechnet, sie werden also weiter gesendet, während eine andere Seite angezeigt wird.

### Wertnamen und was sie senden

Werte, die ohne Bereich gesendet werden.

| Gruppe | Name | Wert |
| --- | --- | --- |
| Je Mixerkanal (1–6) | Fader, VU, Hi, Mid, LoMid, Low, Color | 0–1 |
| | OnAir | 1 wenn on air, sonst 0 |
| Mixer gesamt | Xf, MVU, MVUL, MVUR, BeatFX | 0–1 |
| | BeatFXOn | 1 bei Beat FX ON |
| | BeatFXName, BeatFXCh, ColorFXName | gewählter Beat FX, Kanal, auf den er wirkt, Name des Colour FX (String) |
| Je Deck und Master-Deck | BPM | das BPM unverändert (als String, eine Nachkommastelle: `128.0`). BPMCoarse ist der ganzzahlige Teil, BPMFine der Bruchteil |
| | Pos | Fortschritt 0–1 (als String `42%`) |
| | Beat, Downbeat | eine kurze 1 auf jedem Beat, eine kurze 1 auf dem ersten Beat des Takts |
| | Phase | Position im Beat 0–1 |
| | BarBeat | welcher Beat im Takt, 1–4 |
| | BarPhase | Position im Takt 0–1 (ein Durchlauf je vier Beats) |
| | Phrase | rekordbox-Phrasenname (String, z. B. `CHORUS`) |
| | PhraseKind | Phrasennummer: Intro 1, Verse 2, Bridge 3, Chorus 4, Up 5, Down 6, Outro 7 (0 ohne Phrase) |
| | PhrasePos, PhraseBeats | Position in der Phrase 0–1, Beats bis zur nächsten |
| | Loop, Sync | 1 im Loop, 1 bei aktivem Sync |
| | Title, Artist, Key | Titel, Künstler und Tonart (String) |
| | Time, Length, Remain | vergangene, gesamte und verbleibende Zeit (String, `MM:SS`, verbleibend als `-MM:SS`) |
| Nur je Deck | CDJPlay, CDJCue | 1 bei Wiedergabe, 1 solange CUE gehalten wird |
| | Master | 1 wenn dieses Deck der CDJ-Master ist |
| Nur Master-Deck | Deck | Player-Nummer des Masters 1–6 |
| SMPTE, Uhr | SMPTEA, SMPTEB, SMPTEM | Timecode der Layer A, B, MASTER von SMPTE OUT wie im Dock zu sehen (String, `HH:MM:SS:FF`, Drop Frame 29,97 `HH:MM:SS;FF`, mit Offset) |
| | Clock | Rechnerzeit (String, `HH:MM:SS`) |

- Das Master-Deck ist das des MASTER BPM in der Kopfzeile. Ohne CDJ-Master wird ein laufendes Deck genommen, zuerst eines, das on air ist.
- Das an die Tempo-Adresse von Resolume (`/composition/tempocontroller/tempo`) gesendete BPM geht als 0–1 (20–500 BPM), weil Resolume dort 0–1 erwartet.
- Ohne Mixer werden keine Mixerwerte gesendet, weil eine 0 einen an einen Fader gebundenen Layer abschalten würde. Ebenso wird das BPM eines Decks ohne BPM nicht gesendet.
- Ein/Aus-Werte (OnAir, BeatFXOn, Loop, Sync, CDJPlay, CDJCue, Master) und Deck können auch als String gesendet werden (`ON`, `OFF`, `2`).

### Zeitformat

Ein Zeitformat-Node auf einem Zeitwert sendet nur die gewählten Felder.

| Buchstaben | Feld |
| --- | --- |
| `hh`, `h` | Stunden |
| `mm`, `m` | Minuten |
| `ss`, `s` | Sekunden |
| `ff`, `f` | Frames (nur SMPTE) |

Zwei Buchstaben senden das Feld zweistellig mit führender Null; ein Buchstabe unverändert. Mehrere Felder werden mit `:` verbunden (z. B. `mmss` → `05:08`, `hmmss` → `0:05:08`). Titelzeiten ohne `h` zählen die Minuten über 60 hinaus weiter. Formatiertes Remain wird ohne `-` gesendet. 29,97-Drop-Frame-Code hat `;` vor den Frames.

---

## 14. SHORTCUT und MAP

Tastatur, MIDI, OSC und DMX (Art-Net) drücken die Schaltflächen von ORVIK und ändern seine Werte. Eingestellt wird nur der Empfang; der Zustand einer zugewiesenen Schaltfläche kann über MIDI OUT zurückgemeldet werden.

### Seite SHORTCUT

| Bereich | Inhalt |
| --- | --- |
| Tastatur | Tastenkombinationen, nur wenn das ORVIK-Fenster im Vordergrund ist. |
| MIDI-Eingang | das abgehörte MIDI-Gerät (alle oder eines). Mit eingeschaltetem OUT wird der Zustand der zugewiesenen Schaltflächen an dieses Gerät zurückgemeldet (Controller-LEDs). |
| OSC-Eingang | OSC-Empfangsport, wo abgehört wird (alle Schnittstellen oder nur dieser Rechner) und die Liste zugelassener IPs. Eine leere Liste lässt jeden im Netz steuern: tragen Sie am Veranstaltungsort die IPs ein. |
| DMX-Eingang (Art-Net) | Steuerung aus Kanälen eines Art-Net-Universums. Kann auf demselben Rechner neben Resolume empfangen. |
| Von einer Schaltfläche zuweisen | **MAP ein** wechselt in den Zuweisungsmodus. |

Die Zuweisungsliste zeigt für jede Aktion Taste, MIDI (Kanal, Note oder CC), OSC-Adresse und DMX-Kanal und erlaubt das Entfernen.

### MAP

MAP in der Seitenleiste (oder MAP ein in SHORTCUT) wechselt in den Zuweisungsmodus. Klicken Sie eine Schaltfläche auf dem Bildschirm an, um sie festzulegen; die nächste Taste, MIDI-Eingabe, OSC-Nachricht oder der nächste DMX-Kanal wird dieser Schaltfläche zugewiesen. Esc verlässt den Modus. Zuweisbare Schaltflächen sind im Modus mit einem Rahmen hervorgehoben.

---

## 15. Einstellungen

![Einstellungen](images/18-settings.png)

SETTINGS in der Seitenleiste öffnet das Einstellungsfenster.

1. **Bereichssymbole** — Klick springt zu diesem Bereich.
2. **Bereiche** — die Einstellungen sind wie folgt gruppiert.
3. **Einstellungen** — Name links, Wert rechts.

### Sprache

| Punkt | Beschreibung |
| --- | --- |
| Sprache | Sprache der Oberfläche. Systemsprache folgt dem Rechner. 한국어, English, 日本語, Español, Deutsch, Français, 繁體中文. |

### Deck-Layout

| Punkt | Beschreibung |
| --- | --- |
| Layout-Thema | Layout der Deck-Seite: FLOW, STK, STRIP oder ROW. [6.3](#63-layouts) |
| Bildschirmmodus | dunkel oder hell. |
| Bildschirm-FPS | wie oft je Sekunde der Bildschirm neu gezeichnet wird. Weniger spart CPU. Die Senderaten sind unabhängig davon. |
| Oberflächenskalierung | Größe des gesamten Bildschirms. |

### Wellenform

| Punkt | Beschreibung |
| --- | --- |
| Wellenformfarbe | 3band, RGB oder mono. Titel ohne 3band-Daten werden in RGB gezeigt. |
| Wiedergabeposition | wo die Positionslinie in der Detail-Wellenform liegt. |
| Beatgrid: gesamt | das auf die Gesamt-Wellenform gezeichnete Raster. |
| Beatgrid: Detail | das auf die Detail-Wellenform gezeichnete Beatgrid. |
| Phrasen | wie Phrasen (INTRO, CHORUS usw.) auf der Wellenform gezeigt werden. |
| Cue-Markierungsstil | Form der auf die Wellenform gezeichneten Cue-Markierungen. |

### PRO DJ LINK

| Punkt | Beschreibung |
| --- | --- |
| PRO DJ LINK-Schnittstelle | Netzwerkschnittstelle, an der CDJ und DJM hängen. Die automatische Erkennung wählt die Seite, auf der CDJ zu sehen sind. |
| Zustand | Verbindungszustand dieser Schnittstelle. |
| Schnittstellenliste | Aktualisieren liest die Liste neu; nach dem Anschließen eines Adapters klicken. Eine gewählte, aber fehlende Schnittstelle bleibt als "fehlt" stehen, und die Engine nutzt derweil die automatische Erkennung. |
| PRO DJ LINK automatisch starten | schaltet PRO DJ LINK beim Start von ORVIK ein. |
| Ports | die UDP-Ports, die PRO DJ LINK nutzt. ORVIK warnt, wenn ein anderes Programm sie belegt. |

### TCNet

| Punkt | Beschreibung |
| --- | --- |
| Node Name | Name dieses Rechners in TCNet. %% ist eine automatische Nummer; höchstens 8 Zeichen. |
| TCNet-Schnittstelle | Netzwerkschnittstelle, über die TCNet gesendet wird. |
| Zustand | Verbindungszustand dieser Schnittstelle. |
| Frame Rate | Framerate des über TCNet gesendeten Timecodes. |
| TCNet-Modus | Auto wartet, wenn es einen früheren Server gibt, Server sendet immer, Client sendet nie. |
| TCNET automatisch starten | schaltet die TCNET-Ausgabe beim Start von ORVIK ein. |
| Ports | die UDP-Ports, die TCNet nutzt. |

### Spiegelmodus

| Punkt | Beschreibung |
| --- | --- |
| Spiegel bereitstellen | erlaubt ORVIK auf einem anderen Rechner, diesen zu spiegeln. |
| Anderen PC spiegeln | zeigt den ORVIK-Bildschirm eines anderen Rechners. |
| Spiegelserver | der gespiegelte Server. Aktualisieren sucht erneut. |
| Ports | der TCP-Port, den der Spiegel nutzt. |

Beim Spiegeln ersetzen MIRROR und die Serveradresse die Schaltflächen PRO DJ LINK und TCNET in der Kopfzeile; CONNECTING erscheint vor dem Verbinden und beim erneuten Verbinden. Ein spiegelnder Rechner sendet kein TCNet. Klick auf MIRROR öffnet die Einstellungen.

### Web-Viewer

| Punkt | Beschreibung |
| --- | --- |
| Web-Viewer | erlaubt, die Deck-Seite und die Cue-Call-Seite aus Browsern im selben Netz zu sehen (nur lesen). |
| Port | Port des Web-Viewers. |
| Schnittstelle | Netzwerkschnittstelle, an der der Web-Viewer lauscht. |
| Zustand | Adresse und Zustand des Web-Viewers; eingeschaltet der Zugangscode und ein QR-Code. |

### Audioausgang

| Punkt | Beschreibung |
| --- | --- |
| Ausgabegerät | Audiogerät für die virtuellen Decks. |
| Ausgabekanäle | Ausgabekanäle für die virtuellen Decks. |

### SMPTE-Timecode-Ausgang

| Punkt | Beschreibung |
| --- | --- |
| Frame Rate | Framerate von LTC und MTC. |
| Latenzausgleich | ms, die auf den Timecode addiert werden; positiv läuft vor. Gemeinsam für LTC, MTC und Art-Net, zum Ausgleich der Verzögerung des Empfängers. |
| LTC: Layer A, Layer B, MASTER | Audiogerät und Kanal des LTC jedes Layers. |
| MASTER-Layer folgt dem Master-Deck | folgt MASTER A oder B und wechselt der CDJ-Master auf das Deck des anderen Layers, wechselt MASTER auf diesen Layer. |
| MIDI-Ausgang für MTC | MIDI-Port für MTC. |

### Einstellungsdatei

| Punkt | Beschreibung |
| --- | --- |
| Sicherung | speichert die Einstellungen in eine Datei (.orvikcfg) oder lädt eine. Beim Laden startet ORVIK neu. History, Set List und Fensterpositionen sind nicht in der Datei. Dateien aus 1.6 werden ebenfalls geladen; ihre OSC-Zeilen und DMX-Patches werden in OUTPUT-Nodes umgewandelt. |
| Zurücksetzen | setzt alle Einstellungen auf den Ausgangswert und startet neu. |

### Info

| Punkt | Beschreibung |
| --- | --- |
| Version | aktuelle Version von ORVIK. |
| Nach Updates suchen | eingeschaltet sucht es nach dem Start und alle 12 Stunden nach einer neuen Version. |
| Vorabversionen melden | meldet auch Vorabversionen. |
| Jetzt prüfen | prüft sofort; bei neuer Version erscheint die Schaltfläche zur Download-Seite. |
| Copyright | Copyright- und Lizenzhinweise zu ORVIK und JUCE sowie die Schaltfläche REPORT für Anfragen. |
| Open Source | öffnet den in der App enthaltenen Lizenzordner (unter Windows wird er in einen temporären Ordner entpackt) oder die Open-Source-Lizenzübersicht. |

---

## 16. Marken und Lizenzen

ORVIK ist ein unabhängiges Kompatibilitätswerkzeug. Es ist weder die offizielle PRO DJ LINK Bridge von AlphaTheta noch das ShowKontrol von TC Supply und bedeutet keine Verbindung, Förderung, Zertifizierung oder Billigung durch AlphaTheta, Pioneer DJ, TC Supply oder Resolume.

AlphaTheta, Pioneer DJ, CDJ, DJM, PRO DJ LINK, rekordbox, TC Supply, TCNet, ShowKontrol, Resolume, SMPTE und weitere Produkt-, Technologie- und Markennamen dienen der Beschreibung der Kompatibilität. Die Rechte an jeder Marke liegen bei ihrem Inhaber. Art-Net™ Designed by and Copyright Artistic Licence.

ORVIK nutzt das Framework JUCE 9, die damit gelieferten Open-Source-Komponenten und die Schriften. Liste und Lizenztexte stehen im Bereich **Info** des Einstellungsfensters und in THIRD_PARTY_NOTICES. Die Nutzungsbedingungen der App stehen in BINARY_LICENSE.
