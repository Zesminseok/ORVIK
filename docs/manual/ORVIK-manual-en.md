# ORVIK User Manual (2.0)

This manual describes ORVIK's screens and their parts. The numbers in the pictures match the numbered lists below. 2.0 is a native app (C++ / JUCE); this manual describes the 2.0 screens.

## Contents

1. [Before you start](#1-before-you-start)
2. [Screen layout](#2-screen-layout)
3. [Header](#3-header)
4. [Sidebar](#4-sidebar)
5. [Status bar](#5-status-bar)
6. [DECKS](#6-decks)
7. [SMPTE OUT](#7-smpte-out)
8. [MIXER](#8-mixer)
9. [HISTORY](#9-history)
10. [SET LIST](#10-set-list)
11. [CUE CALL](#11-cue-call)
12. [NETWORK](#12-network)
13. [OUTPUT](#13-output)
14. [SHORTCUT and MAP](#14-shortcut-and-map)
15. [Settings](#15-settings)
16. [Trademarks and licenses](#16-trademarks-and-licenses)

---

## 1. Before you start

### What ORVIK is

ORVIK receives playback information from CDJs and DJMs and sends it to lighting and video software: TCNet, SMPTE timecode (LTC, MTC, Art-Net), OSC, DMX (Art-Net, sACN), MIDI and MIDI Clock. It can also show the set list's cues to the crew in cue call windows and speak them. It only asks the gear for information; it does not control it.

**Safety.** ORVIK is not a safety device. Its outputs (timecode, OSC, DMX, MIDI and cue actions) can arrive late, stop or repeat if a network, a computer or a deck fails. Do not let ORVIK alone fire or hold anything that can hurt people or damage property, such as flames, pyrotechnics, CO2 jets, lasers or moving machinery. Such effects need their own safety systems: an enable or dead-man switch held by a trained operator, an emergency stop, and the limits set by the device maker and by local rules. Test every cue with the real receivers before the show.

### Requirements

| Item | Details |
| --- | --- |
| Operating system | macOS 13.3 or later (Apple Silicon), Windows 10, 11 (x64) |
| Gear checked | CDJ-3000X, CDJ-3000, CDJ-2000NXS2, DJM-V10, DJM-900NXS2 |

What can be received depends on the gear, its firmware and how it is connected.

### Install and run

- **macOS** — open the DMG and move ORVIK to the Applications folder.
- **Windows** — run the downloaded `.exe` as it is. There is no installer. The file is not code-signed, so if SmartScreen warns on the first run, choose "More info", then "Run anyway".

A short splash shows when the app starts and when it quits. On quit it closes its TCNet and PRO DJ LINK connections first.

### First connection

1. Connect this computer to the network of the players and mixer: the same switch or router. TCNet to Arena can go out on the same network or on a second adapter.
2. Start ORVIK. PRO DJ LINK and TCNET turn on by themselves (**Start PRO DJ LINK automatically** and **Start TCNet automatically** in [Settings](#15-settings)); otherwise turn them on in the header.
3. The players appear in DECKS and NETWORK. With **Auto-detect**, ORVIK uses the adapter where CDJs are seen; to fix one adapter, choose it under **PRO DJ LINK Interface** in Settings.
4. If no device appears, NETWORK says what is wrong with the set-up and what to do. [12.1](#121-set-up-warnings)

On macOS, allow ORVIK under System Settings > Privacy & Security > Local Network. On Windows, allow ORVIK when the firewall asks; an adapter without a router counts as a public network, so allow public networks too.

---

## 2. Screen layout

![Screen layout](images/01-overview.png)

1. **Header** — master BPM, the PRO DJ LINK and TCNET switches, the CUE CALL button, volume and window buttons. [Chapter 3](#3-header)
2. **Sidebar** — picks the page. [Chapter 4](#4-sidebar)
3. **Page** — the screen chosen in the sidebar. The picture shows DECKS.
4. **SMPTE OUT dock** — shows and adjusts the timecode outputs. Click to expand. [Chapter 7](#7-smpte-out)
5. **Status bar** — transmission and app status. [Chapter 5](#5-status-bar)

When a CUE CALL window is docked, the cue call panel appears on the right of the page. [Chapter 11](#11-cue-call)

---

## 3. Header

![Header](images/02-header.png)

1. **MASTER BPM** — the CDJ master's BPM. When the CDJ master has no BPM, the BPM of a playing deck is shown, an on-air deck first. The box on the left is the CDJ master's player number.
2. **PRO DJ LINK** — turns the CDJ and DJM connection on and off.
3. **TCNET** — turns TCNet transmission to lighting and video software on and off. With TCNet mode set to Client in Settings, or in STANDBY, nothing is sent even when it is on.
4. **CUE CALL** — opens a cue call docked on the right of the main window; a second click closes every cue call, and Alt+click (Option+click on Mac) opens one as its own window. The button stays filled while a cue call is open. [Chapter 11](#11-cue-call)
5. **Reload** — reloads the screen (Cmd/Ctrl+R). Virtual deck playback stops.
6. **M.VOL** — the volume of the virtual deck sound the app outputs. CDJ and mixer audio is not affected.
7. **Window buttons** — on Windows: minimise, maximise and quit ORVIK. On macOS the standard buttons at the top left of the window are used, and the Window menu has Minimize (⌘M) and Close (⌘W). With an unsaved history or set list, ORVIK asks whether to save when quitting.

### Switch states

When the PRO DJ LINK or TCNET switch is on, its left box fills with the state colour: green when all is well, a blinking dot while turning on. When something needs attention, one of these labels appears inside the switch.

| Label | Meaning |
| --- | --- |
| NO H/W | PRO DJ LINK is on but no CDJ or DJM is visible. |
| LOST | There are hardware decks but no CDJ has sent status for more than 1.5 s. |
| STANDBY | A TCNet server started earlier on the same network, so transmission is paused and waiting. |

When the network set-up keeps the players and mixer from reaching ORVIK, the PRO DJ LINK switch's tip says what is wrong. [12.1](#121-set-up-warnings)

When a new version is available, an UPDATE badge appears in the header. Click it to open the download page.

---

## 4. Sidebar

| Menu | Contents |
| --- | --- |
| DECKS | Waveforms, timecode and playback state per deck |
| MIXER | The DJM's channel faders, EQ and level indicators |
| HISTORY | The record of tracks that went on air |
| SET LIST | The set list, per-track timecode offsets and cue editing |
| NETWORK | PRO DJ LINK devices, TCNet nodes and network set-up warnings |
| OUTPUT | The node editor that sends deck and mixer values as OSC, DMX (Art-Net, sACN) and MIDI, with the Art-Net network and timecode settings. [Chapter 13](#13-output) |
| MAP | Turns MAP on and off: click a control on screen, then press a key or send MIDI or DMX to bind it. [Chapter 14](#14-shortcut-and-map) |
| SHORTCUT | The keyboard, MIDI, OSC and DMX inputs and the list of what is bound. [Chapter 14](#14-shortcut-and-map) |
| SETTINGS | Opens the settings window; click again to close it. [Chapter 15](#15-settings) |

The menus are grouped from the top: DECKS and MIXER, HISTORY and SET LIST, NETWORK and OUTPUT. MAP and SHORTCUT sit above SETTINGS at the bottom.

---

## 5. Status bar

![Status bar](images/05-status-bar.png)

1. **TCNET** — whether the header's TCNET switch is on. In STANDBY nothing is sent even when ON.
2. **ARENA** — the number of TCNet nodes seen in the last 10 s.
3. **DECKS** — hardware decks plus virtual decks with a track loaded.
4. **UP** — time since the engine started.
5. **CPU** — ORVIK's CPU use.
6. **GPU** — the share of the graphics card's time ORVIK uses, when the system reports it.
7. **MEM** — the memory ORVIK uses.
8. **Deck dots** — one dot per deck. Hardware decks show their hardware colour; virtual decks show different colours for playing, cue, loaded and empty.

When something is wrong, LINK, OUT or MIX appears in the status bar: LINK when player numbers clash or the network set-up needs attention (for example PDJL no devices heard or PDJL other subnet), OUT when TCNet transmission has stopped or the app is mirroring, MIX when mixer data has stopped. Clicking one goes to the related page. They do not appear while all is well.

---

## 6. DECKS

### 6.1 Deck mode and connected gear

![Deck mode and connected gear](images/03-deck-top.png)

1. **Deck mode** — HARDWARE follows the CDJs on the PRO DJ LINK network (default). VIRTUAL uses virtual decks that play audio files on this computer. Changing the mode removes the current decks; switching to HARDWARE while virtual decks exist asks first. [6.4](#64-virtual-decks)
2. **CDJ** — the number and model of each connected player. Hover to see the IP address; right-click to choose the deck colour.
3. **DJM** — the model of the connected mixer. NO DATA is added when no mixer control value has arrived for more than 1.5 s.

### 6.2 Deck card

![Deck card](images/04-deck-card.png)

The picture shows a deck card in the FLOW layout. Other layouts drop or move some parts.

1. **Player number** — right-click to choose the deck colour.
2. **Track title, artist**
3. **Key** — the track's key, shown in Camelot notation such as 8A; keys that cannot be converted are shown as they are.
4. **ON AIR** — lit when this deck's mixer channel is on air.
5. **MASTER** — lit when this deck is the CDJ master.
6. **SYNC** — lit when Beat Sync is on.
7. **Channel fader, level indicator** — the DJM channel fader position and channel level.
8. **Playback state** — PLAY, PAUSE, CUE, LOOP and so on.
9. **Model, media** — the CDJ model and the media holding the track (player number and USB or SD). The media chip's colour is the media colour set in rekordbox; media without a colour is grey. Without colour information, text is shown instead of a chip.
10. **Pin large** — in the FLOW layout, keeps this deck large. Click again or load another track to release.
11. **Detail waveform** — the waveform around the play position. The red line is the play position.
12. **Bar counter** — bars left to the next memory cue. It turns red at 8 bars or fewer; with no memory cue ahead it shows the bars elapsed. Click to switch to seconds.
13. **Zoom** — − widens the waveform (2× per click), + narrows it (0.5 s minimum). RST returns to the default 8 s.
14. **Overview waveform** — the whole track. On hardware decks, holding it previews the detail waveform at that position; releasing returns. While previewing, the bar counter shows the distance from the play position in seconds or minutes:seconds.
15. **Timecode** — the timecode of the current play position.
16. **Time** — click to switch between elapsed and remaining. The right value is the track length.
17. **Beat position** — which beat of the bar is playing.
18. **BPM** — top left is the track's original BPM, below it the tempo change (%), the large number on the right is the current BPM.
19. **SMPTE MASTER** — assigns this deck to layer A or B and makes that layer the MASTER source. Click again to release only the MASTER source; the A, B assignment stays. LTC, MTC and Art-Net outputs are switched on separately in SMPTE OUT.
20. **SMPTE A, B** — makes this deck the source of SMPTE layer A or B.

When the waveform colour is 3band but the track has no 3band data, a ! mark appears on the deck and the waveform is shown in RGB. Waveforms are drawn by the graphics card (GPU).

### 6.3 Layouts

There are four deck layouts. Choose one with **Layout Theme** in [Settings](#15-settings).

<table>
<tr>
<td width="50%"><img src="images/layout-flow.png" alt="FLOW"><br><b>FLOW</b> — sizes the decks automatically from the CDJ master, on-air and playback state. In a wide window up to four loaded decks are shown large.</td>
<td width="50%"><img src="images/layout-stk.png" alt="STK"><br><b>STK</b> — stacks all decks as same-sized cards, two side by side.</td>
</tr>
<tr>
<td><img src="images/layout-strip.png" alt="STRIP"><br><b>STRIP</b> — one thin line per deck. Only the overview waveform is shown.</td>
<td><img src="images/layout-row.png" alt="ROW"><br><b>ROW</b> — one row per deck with wide detail and overview waveforms.</td>
</tr>
</table>

### 6.4 Virtual decks

![Virtual deck](images/07-virtual-deck.png)

With the deck mode set to VIRTUAL, virtual decks play audio files on this computer. They always use the FLOW card, whatever the layout theme, with the transport buttons (⑧) between the timecode and the BPM. The picture shows one deck with a track and one empty deck.

1. **Deck number**
2. **VIRTUAL** — marks a virtual deck, which plays a file on this computer.
3. **×** — removes this virtual deck.
4. **Channel fader** — drag to adjust.
5. **Eject** — unloads the track.
6. **Detail waveform** — drag to move the play position.
7. **Overview waveform** — click or drag to move the play position.
8. **|◀, CUE, ▶** — CUE while stopped sets the cue point there and plays while held; while playing it returns to the cue point. ▶ plays and pauses; |◀ stops and returns to the start of the track.
9. **Open** — click to choose an audio file, or drop a file here.
10. **Add virtual deck** — adds another virtual deck, up to 6.

Files that can be opened: MP3, WAV, AIFF, FLAC, AAC, M4A (AAC, ALAC), OGG, MP4 (audio). Every format a CDJ opens can be opened here.

Virtual deck audio goes to the device chosen under **Audio output** in [Settings](#15-settings); the volume is the header's M.VOL.

---

## 7. SMPTE OUT

![SMPTE OUT](images/06-smpte-dock.png)

There are three timecode output layers: A, B and MASTER. Layers A and B send the play position of their chosen deck; MASTER sends one of layer A, layer B, the computer clock or FREEWHEEL. The picture shows layer A and MASTER; layer B is the same as A.

1. **SMPTE OUT** — click to expand or collapse the dock. Collapsed, it shows each layer as it is wired, then the outputs that are on: A ← 1 means layer A follows deck 1, MASTER ← A means MASTER sends layer A, followed by the MASTER timecode.
2. **Detach** — opens SMPTE OUT in its own window. Closing the window returns it to the dock.
3. **Layer A** — the layer that sends the chosen deck's play position as timecode. Layer B is the same.
4. **LTC, MTC, ART** — turns this layer's LTC (audio timecode), MTC (MIDI timecode) and ART (Art-Net timecode) outputs on and off. LTC can be on for every layer; MTC and ART for one layer at a time (turning one on turns it off on the other layers). The LTC device and the MTC port are chosen under **SMPTE Timecode output** in [Settings](#15-settings); the Art-Net network at the top of the [OUTPUT](#13-output) page. Art-Net timecode uses the SMPTE **Frame Rate**.
5. **Source deck** — the deck this layer follows. The same as the A, B buttons on the deck card.
6. **Timecode** — the source position plus the offset. The **Latency Offset** from Settings is added to what is actually sent.
7. **− / +** — changes each field by 1; with Ctrl (Cmd on Mac) by 10. When MASTER's STEP is TIME it changes the FREEWHEEL time, otherwise the offset.
8. **SET** — shows that the set list's offset is loaded in this layer. Hover to see the track name. When the UNLISTED offset is in use because the track is not in the list, it reads SET —.
9. **OFFSET ON** — includes the offset in the output or leaves it out. The value is kept.
10. **Reset** — sets the offset back to 0.
11. **MASTER** — the MASTER layer.
12. **FREEWHEEL buttons** — ▶ runs the FREEWHEEL timecode, ❚❚ pauses it keeping the value, |◀ returns to 00:00:00:00. READY (◉) holds FREEWHEEL at the current value and starts it when a deck starts playing. With a mixer, only decks that are on air at that moment count; decks already playing and CUE previews do not.
13. **Source** — A and B send that layer's timecode plus the MASTER offset. CLOCK uses the computer time; FREEWHEEL runs on its own from the last MASTER value.
14. **STEP** — with the MASTER source on FREEWHEEL, whether − / + changes the offset (OFS) or the FREEWHEEL time (TIME).

With **Hold LTC while stopped** on in Settings (the default), a stopped deck's LTC keeps sending the timecode of the stopped position, the same frame repeated so the receiver can tell it has stopped. Off, LTC goes silent while the deck is stopped.

---

## 8. MIXER

![MIXER](images/10-mixer.png)

Shows the mixer state the DJM sends. ORVIK does not change mixer settings. The channel count and some items depend on the DJM model.

1. **DJM connection** — whether the DJM is visible.
2. **DATA, METER** — DATA: control values such as faders and EQ are arriving; METER: level indicator values are arriving.
3. **HEADPHONES** — the headphone section. [8.1](#81-headphones-and-effects)
4. **SOUND COLOR FX** — the sound colour FX section. [8.1](#81-headphones-and-effects)
5. **BEAT FX** — the beat FX section. [8.1](#81-headphones-and-effects)
6. **Channels** — one identical section per channel. [8.2](#82-channels)
7. **Crossfader** — the crossfader position and the CH FADER and CROSSFADER curves.
8. **MASTER** — the master section. [8.3](#83-master)

<table>
<tr>
<td align="center"><img src="images/11-mixer-fx.png" alt="Headphones and effects" width="280"><br>8.1 Headphones and effects</td>
<td align="center"><img src="images/12-mixer-ch.png" alt="Channel" width="220"><br>8.2 Channels</td>
<td align="center"><img src="images/13-mixer-master.png" alt="MASTER" width="208"><br>8.3 MASTER</td>
</tr>
</table>

### 8.1 Headphones and effects

1. **LEVEL, MIX** — the headphone LEVEL knob and the CUE-to-master balance (MIX).
2. **CUE** — lit when the master is monitored in the headphones.
3. **Collapse** — click a section name to collapse or expand it.
4. **PARAMETER** — the SOUND COLOR FX PARAMETER knob.
5. **SOUND COLOR FX effect** — the chosen effect, OFF when none.
6. **BEAT FX effect** — the chosen effect.
7. **CH SELECT** — the channel BEAT FX is applied to.
8. **FX FREQUENCY** — the band (LOW, MID, HI) BEAT FX is applied to.
9. **LEVEL/DEPTH** — the BEAT FX LEVEL/DEPTH knob.
10. **ON** — lit when BEAT FX is on.

On DJMs with two headphone outputs, headphone B's LEVEL, MIX and LINK CUE are shown too. LINK CUE is lit when the rekordbox LINK MONITOR is monitored.

On DJMs with a FILTER section, the chosen filter (LPF, HPF) and the RESONANCE knob are shown too.

### 8.2 Channels

1. **ON AIR** — lit when this channel is on air.
2. **CUE, A, B** — this channel's headphone CUE state. Models with two headphones show A and B separately.
3. **TRIM** — the TRIM knob.
4. **EQ** — the HI, HI MID, LOW MID and LOW knobs. The number of bands depends on the model.
5. **COLOR** — the SOUND COLOR FX knob.
6. **Level indicator** — the channel level. CLIP at the top lights when the input clips.
7. **Channel fader** — the channel fader position.
8. **Crossfader assign** — A, THRU or B for this channel.

### 8.3 MASTER

1. **Master level indicator** — the L, R master level. CLIP lights when the output clips.
2. **LEVEL** — the MASTER LEVEL knob.
3. **BALANCE** — the MASTER BALANCE knob. C is centre.
4. **CUE** — lit when the master is monitored in the headphones.
5. **BPM** — the BPM of a playing CDJ. With several playing, the lowest-numbered deck's BPM.
6. **EQ, ISO** — the master EQ state. It changes to ISO when MASTER ISOLATOR is on.
7. **BOOTH LEVEL** — the BOOTH LEVEL knob.

---

## 9. HISTORY

![HISTORY](images/14-history.png)

Records the tracks that went on air with the real time and the deck number. With a mixer, the time a track is playing and on air is counted; without one, the playing time. A track is recorded after 10 s. When playback or on air stops for more than 3 s and resumes, the same track gets a new line; within 3 s the line continues. Virtual decks are recorded as soon as a track is loaded and the playing time is counted. The track on air now shows LIVE in the END column.

The record starts fresh every time ORVIK starts. It is saved automatically, and after an abnormal exit ORVIK asks at the next start whether to continue it.

1. **Start time** — the date and time this record started.
2. **Track count** — the number of recorded tracks.
3. **IMPORT** — loads a history file (ORVIK CSV, ShowKontrol history CSV or TXT) into the current record. The file's entries are added as they are.
4. **EXPORT** — saves in a chosen format: ORVIK CSV (can be loaded back into ORVIK), ShowKontrol history, ShowKontrol set list or a track list TXT.
5. **⋯** — **Autosave history…** brings back an earlier copy of the record ([autosave](#autosave-history)); **Clear the whole history…** clears it after asking.
6. **EVENT** — the event name. It goes into the exported file names (ORVIK CSV, set list, track list) and the track list TXT body.
7. **DJ** — the DJ name. It goes into the track list TXT body.
8. **Search** — finds by title or artist.
9. **Table header** — drag a boundary to resize a column; double-click to reset. The columns:
   - **DECK** — the player number and model the track played on.
   - **START, END** — when it went on air and off air.
   - **IN, OUT** — the play positions when it went on air and off air.
   - **ON AIR** — the time on air.
10. **Totals** — tracks played, total ON AIR time, average BPM and tracks per deck.

The button at the right end of a row adds the track to the set list; it turns orange with a check once the track is on the list (clicking again adds it once more). Hovering a row shows a × next to it that deletes the row. Both act on a left click. Deleting the track on air now stops recording it while it keeps playing. On a touchscreen, drag the list with a finger to scroll.

### Autosave history

ORVIK keeps copies of the history, the set list, the cues and the OUTPUT nodes: one 5 minutes after a change, one before clearing, importing or loading a file, and one when ORVIK quits. **⋯ > Autosave history…** on each page lists them, newest first, with the time, the reason and what they hold (tracks, cues, rows, nodes). **Restore** brings the chosen copy back; the current state is copied first, so you can return to it. **Open folder** shows the copies in the file manager.

---

## 10. SET LIST

![SET LIST](images/15-setlist.png)

A list that holds a timecode offset and cues for each track. With APPLY TO SMPTE on, when a listed track is loaded on a deck, the track's offset goes into the SMPTE layer (A, B) that deck is connected to. Like the history, the set list is emptied at every start; it is saved automatically and keeps [autosave copies](#autosave-history).

1. **Track count** — the number of tracks in the list.
2. **APPLY TO SMPTE** — on: the offset of a listed track loaded on a deck goes into that deck's layer; a playing deck changes right away. Off: the layer offsets keep their values.
3. **Undo, redo** — undoes and redoes changes to the list: Ctrl+Z (Cmd+Z on Mac), and Ctrl+Shift+Z or Ctrl+Y (Cmd+Shift+Z on Mac).
4. **IMPORT** — loads a set list: an ORVIK file (.json), a ShowKontrol set list (.set) or history (.csv), a text playlist exported from rekordbox (.txt), or audio files. With an existing list it asks whether to replace it (REPLACE) or add to it (ADD), and asks which columns to use when a text file's column names are not recognised. ORVIK files carry the cues too.
5. **EXPORT** — saves an ORVIK set list (with the unlisted offset and the cues) or a ShowKontrol set list (.set: title, artist, offset, length).
6. **⋯** — **Clear played marks**; **Autosave history…** brings back an earlier copy of the list; **Clear the whole list…** removes every track after asking (Undo restores them). The tracks' cues go with them.
7. **Add tracks** — **Type in** adds a track you type: title, artist, then offset; Enter moves to the next field. **From deck** with a deck number adds the track loaded on that deck.
8. **Unlisted** — the offset used for tracks that are not on the list. The button next to it resets it to 00:00:00:00. Pick a range with no cues, for example 23:00:00:00.
9. **Auto fill** — type a start time and click **FILL** to give every track an offset in list order, one hour apart. Each offset stays editable.
10. **Search** — finds by title or artist.
11. **OFFSET** — this track's offset. Click to edit (HH:MM:SS:FF, under 24 hours); the button next to it resets it to 00:00:00:00.
12. **CUE** — the number of cues on the track, or **Edit cues** when it has none. Click it, or double-click the track, to open the cue editor below the list. [10.1](#101-cue-editing)
13. **STATUS** — ▶ and the deck number while the track is on a deck, then the layer (A, B) its offset went into; a dash when that deck feeds no layer. After the track has played and gone on air with APPLY TO SMPTE on, a check appears and the row dims. Without a mixer only playback counts. When the same track is listed several times, the offset of a line without a check is used; listed once, that line's offset is used again on replay.
14. **Track on a deck** — rows of tracks loaded on a deck are marked with a bar on the left.

Click a title, artist or offset to edit it. Drag a row by its handle to change the order; the bin at the right end of a row removes the track. Drag a header boundary to resize a column; double-click to reset. On a touchscreen, drag the list with a finger to scroll.

### 10.1 Cue editing

The cue editor opens under the list on the SET LIST page, with the track's cue list beside the window. Choosing a track shows its waveform and cues.

<table>
<tr>
<td width="72%"><img src="images/15b-cue-editor.png" alt="Cue editor"><br>The cue editor: + CUE (C), IMPORT HOT CUES, snap, zoom, preview, CUE OUTPUT, the whole track and the zoomed part.</td>
<td width="28%"><img src="images/15c-cue-list.png" alt="Cue list"><br>The cue list: time, bar.beat, cue and group.</td>
</tr>
</table>

- **Waveform** — the whole track and a zoomed part, with the beat grid, bar numbers, phrase bands and cue marks. The waveform comes from the audio file, the HISTORY record or the waveform received from the CDJ, whichever exists. CDJ waveforms need the track library switched on (the editor offers the switch). Cues can be placed by time alone without a waveform.
- **Moving the position** — click the waveform to move the edit position. **Snap** (off, beat, bar, frame) aligns it to the grid. **Zoom** changes the zoomed range.
- **+ Cue (C)** — creates a cue at the edit position. With an audio file, that spot is previewed.
- **Import hot cues** — brings rekordbox hot cues and memory points in as cue positions.
- **Cue list** — time, bar.beat, name, group and a summary of the actions.
- **Cue settings** — the chosen cue's name, time, bar.beat, group, warn (default or a number of beats), voice (follow the group, on, off), what to say (empty: the cue name) and the action list.
- **Action list** — runs in order from the top: OSC (destination, address, type i/f/s, value), Art-Net DMX (universe, several channel=value pairs), MIDI (device, channel, Note on/off, CC, Program) and wait (ms, or beats and bars). The destination list is the same as on the OUTPUT page.
- **Group** — the crew group of the cue. The default groups are Lighting, Video, SFX and Laser; **Edit groups…** in the group menu renames, recolours or adds groups. Groups drive the cue call window and the voice outputs.
- **Cue output** — the switch above the editor turns cue action transmission on and off.

Cues react only to the track playing on the master deck. When the master deck's track is not in the set list, no cue is sent. The beat of a cue is computed from the track's beat grid and play position. Cues belong to the set list entry, so the same track has separate cues in each set list.

Cue actions that reach effects able to hurt people (flames, CO2, pyrotechnics, lasers) must go through that effect's own safety system. See **Safety** in section 1.

---

## 11. CUE CALL

The cue call shows the set list cues of one deck's track by crew group and counts down to each next cue. Click CUE CALL in the header: a cue call opens docked on the right of the main window. Click CUE CALL again to close every cue call. Alt+click (Option+click on Mac) opens another one as its own window, for example one for lighting and one for SFX. Each keeps its own position, size and display settings, and the ones open when ORVIK quits come back at the next start.

### Opening and docking

- **Dock** — the button left of the speaker in the cue call's header docks the view on the right of the main window or opens it as its own window again. A double-click on the header does the same.
- **Drag** — drag the header (or the window's title bar) to move a cue call window. Dropped on the right edge of the main window, it docks there. Up to two panels share the right side, one above the other; drag the divider to change their width.
- **Window menu** — on macOS each cue call window is listed in the Window menu and in the Dock menu. Window > Close (⌘W) closes the cue call window in front.

The window title names the groups it shows: "Cue call (all)" or the group names.

### Which deck it follows

**Deck to follow** in the settings popup chooses the deck for every cue call window and for the spoken calls:

- **SMPTE master** — the deck behind the SMPTE OUT MASTER layer: MASTER ← A or B, then that layer's deck (default). While MASTER runs on CLOCK or FREEWHEEL, the CDJ tempo master.
- **Tempo master** — the CDJ master.
- **On-air deck (auto)** — the deck that is going out, picked from playback, fader and time left the way the FLOW layout picks its main deck. It can move before the DJ presses MASTER.

Without such a deck the view says "No master deck"; when its track is not in the set list, "Not in the set list"; when the track has no cues, "No cues in this track."

### Header

- **Timecode** — the SMPTE OUT MASTER timecode.
- **Beat boxes** — four boxes; the playing beat of the bar is lit, the first beat in orange.
- **BPM** — the followed deck's BPM.
- **Title, artist** — the followed track, when the layer bar or the lanes do not already show it.
- **Board, Layers** — switches the theme. In a window narrower than 600 px it is in the settings popup instead.
- **Dock, speaker, cog** — dock or pop out, spoken calls on and off, the settings popup.

### Themes

- **Board** — the layer bar at the top shows layers A and B with their deck number, title and play time; M marks the layer MASTER follows, and the other layer's deck is tagged Next track. Below it there is one tile per group: the group name, the next cue's name, a big countdown, bars.beats and a progress bar, with the group's following cues at the bottom right. Nearing the cue, the tile fills with the group colour; at the cue it reads GO. A group with no cue in the current track gets a short card, and the groups with cues share the space. The strip at the bottom shows the next track (the deck on the other layer) and its first cues, timed from its position.
- **Layers** — three lanes and a countdown list. The MASTER lane shows the followed deck's waveform moving left, with the cue marks and names of the shown groups; the NOW line sits at 20 % of the width and a cue is reached when it touches NOW. The A and B lanes show each SMPTE layer's deck; the other layer's deck is the next track, with its cues. A deck's loop is shown on its lane as on the detail waveform, paler while the loop is set but off. The beat grid follows **Beatgrid: Detail** in [Settings](#15-settings). The list below has one row per coming cue: its layer, name, time left, bars.beats and a bar that shrinks over the last minute.

In the layers theme, − and + at the bottom right of the MASTER lane show more or less of the track, and RST returns to the automatic range. The mouse wheel or a pinch over a lane zooms too.


<table>
<tr>
<td width="50%"><img src="images/20-cuecall-board.png" alt="Board"><br><b>Board</b>, one tile per group with the countdown to its next cue.</td>
<td width="50%"><img src="images/21-cuecall-layers.png" alt="Layers"><br><b>Layers</b>, the MASTER, A and B lanes over the countdown list.</td>
</tr>
</table>

### Time left

Seconds and beats are shown together. Under 10 s the seconds have tenths (`4.3 s`); from 10 s up they are minutes:seconds (`0:24`). Bars.beats count down as the CDJ does: `2.3 bar` means 2 bars and 3 beats left, and the beat within the bar runs 4 3 2 1.

In the big countdown (the last 5, 10, 15 or 30 s, chosen in the settings popup), the four beat boxes take the place of bars.beats. The last beats count 3 2 1 (or from 5 or 10), then GO; each count lights its tile or row for a moment. A long cue that is running shows its name and the time to its end.

### Settings popup (the cog)

| Section | Items |
| --- | --- |
| Display | screen (Board, Layers), big countdown from (5, 10, 15, 30 s), show bars.beats and beat boxes, beat count from (3, 5, 10), groups shown, waveform colour of the lanes (Track (CDJ), Grey, Off), deck to follow (SMPTE master, Tempo master, On-air deck (auto)) |
| Web view | the address for phones and tablets, **Copy address**, **Open in browser**. The web viewer in Settings must be on. |
| Voice calls | speak (Name+count, Name only, Count only), warn (8 beats, 4 beats), count (3 beats, Off), last word (GO, Off), voice, output (device, channel, level, test), click (Off, During counts, Always) and click volume, a speaker per group |

The display settings belong to the window; deck to follow and the voice calls are the same for every window. The levels go up to 200 %.

### Spoken calls

The speaker in the cue call's header turns the spoken calls on and off. Sentences are rendered ahead of time with the system voices (macOS, Windows) and played on the beat during the show. The calls follow the deck chosen in **Deck to follow**.

- 8 (or 4) beats before a cue: "group, cue name, standby"; on the last three beats "three, two, one"; at the cue "go". **Speak**, **Count** and **Last word** leave parts out.
- The **voice** list shows only voices of the languages the app can speak (Korean, English, Japanese, Spanish, German, French, Chinese), grouped by language. The first entry, "System … voice", is the default voice of the display language. Choosing a voice of another language switches the calls to that language (an English voice says "Lighting, standby", "three, two, one, go"). Group names you typed in the set list are read as they are.
- Without a voice for the language, the calls are in English and the first entry says so. Voices are added in the operating system's speech settings.
- **Output** is one device and channel for all calls. It can be another channel of the device LTC uses, but not the channel LTC uses; those channels are marked "used by LTC" and cannot be chosen.
- **Click** sounds each beat during the counts or always; the first beat of each 4 sounds higher.
- The speaker next to a group name mutes that group. A group is spoken while an open cue call shows it; with no cue call open, every group is.

### Web page

With the web viewer on in Settings, phones, tablets and other computers on the same network open `http://<this computer>:<port>/cuecall`. It asks for the access code first (the same code as the web viewer) and remembers it for 12 hours; **Open in browser** on this computer skips the code. The cog on the page chooses the board or layers theme, the groups, the big countdown, the beat count and bars.beats, and these are kept in that browser. Where the browser allows it, **Keep the screen on** stops the screen from sleeping. There is a layout for a phone held upright. When ORVIK stops answering for 3 s, the page dims and shows Offline, and the countdowns hold until it answers again.

---

## 12. NETWORK

![NETWORK](images/16-network.png)

1. **PRO DJ LINK state** — whether ORVIK is ready to receive PRO DJ LINK. Whether CDJs are actually visible is shown in the device list.
2. **Device list** — the number, type, model and IP address of each CDJ and DJM seen.
3. **TCNet state** — whether the TCNET switch is on, and ORVIK's node name.
4. **Node list** — ORVIK itself and the TCNet nodes seen in the last 10 s.
5. **TYPE** — the node role: SERVER sends, CLIENT receives; REPEATER and AUTO exist too. With TCNet on and no CLIENT at all, a note appears under the list.

### 12.1 Set-up warnings

![Set-up warning](images/16b-network-warning.png)

While PRO DJ LINK is on, ORVIK checks how this computer is connected. When something in the set-up keeps the players and mixer from reaching it, a warning appears at the top of NETWORK with the cause and what to do; the status bar shows it as LINK and the PRO DJ LINK switch's tip names it. Red means nothing on the link can work; amber is advice. The warnings start 10 s after PRO DJ LINK starts and only advise: ORVIK changes no network setting.

| Warning | When | What to do |
| --- | --- | --- |
| PRO DJ LINK ports in use by another program | another program holds the PRO DJ LINK ports (50000–50002); it is named when ORVIK can tell | Quit it, then turn PRO DJ LINK off and on. Usual causes: rekordbox, another ORVIK, AnyDesk, Microsoft Teams during a call, PRO DJ LINK tools such as Beat Link Trigger. |
| Devices on another network | players or the mixer send on this cable, but their addresses are outside this adapter's network (for example self-assigned 169.254.x.x devices and an adapter with a router address) | Set the adapter to obtain its address automatically (DHCP) or give it an address in the devices' range, or connect everything to the same router. |
| No PRO DJ LINK device heard | nothing has arrived on the chosen adapter (on Windows auto-detect, on any adapter), or the link has been silent for 15 s | Check that the players and mixer are on, the cable and the switch, and the address range. macOS: allow ORVIK under System Settings > Privacy & Security > Local Network. Windows: an adapter without a router counts as a public network; allow ORVIK on public networks too. Other active adapters are listed, so you can choose the right one in Settings. |
| Two adapters on the same network | two adapters of this computer are on the same network, so track data and waveform requests may leave by the wrong one | Turn off or unplug the other adapter, or move it to another network. |

---

## 13. OUTPUT

Sends deck and mixer values to other programs and gear as OSC, DMX (Art-Net, sACN) and MIDI. It is a node editor that merges the old OSC page and the ART-NET DMX patch. OSC rows and DMX patches from 1.6 are converted to nodes on the first start and send the same values.

![OUTPUT](images/17-output.png)

### Top of the page

- **Undo, redo** — undoes and redoes changes on the page: Ctrl+Z (Cmd+Z on Mac), and Ctrl+Shift+Z or Ctrl+Y (Cmd+Shift+Z on Mac).
- **IMPORT, EXPORT** — EXPORT saves the whole page (nodes, DMX outputs, OSC rows, network settings) to a file; IMPORT loads one, and one undo takes it back. When a file would switch on sending, ORVIK lists where it would send and asks first.
- **⋯** — **Autosave history…** brings back an earlier copy of the nodes. [Autosave](#autosave-history)
- **OSC** — shows where OSC goes (address:port) or off. Click it to set the OSC output: on or off, **This computer**, **Broadcast** or **IP address**, the IP and the port (7000 by default). **Other OSC targets (cue actions)** holds named addresses for the cue editor's OSC actions; + adds one, × removes it.
- **Art-Net network** — shows the interface and DMX rate, or off. Click it for what every DMX output shares: **Art-Net on (timecode and DMX)**, the DMX interface (it can follow the timecode interface), the DMX port (6454), the DMX rate (10–60 Hz, 40 by default), the broadcast address in use, ArtSync and ArtPollReply. The OSC output port cannot be used for Art-Net.
- **Art-Net timecode** — shows the frame rate, or off. Click it for **Send timecode**, the layer it sends with the timecode going out now, the timecode interface, where it goes (broadcast or one IP address) and the timecode port. It needs Art-Net on in **Art-Net network**. The frame rate is **Frame Rate** under SMPTE Timecode output in [Settings](#15-settings); each layer is switched on with the ART button in SMPTE OUT.
- **MIDI** — the MIDI output for the MIDI CC and MIDI Note nodes. Click it to choose a device. It is the same port as **MIDI output port** under MIDI Clock output in Settings.
- **SCAN** — looks for Art-Net devices (ArtPoll), OSC programs (mDNS) and MIDI outputs, and lists them. + next to an Art-Net device adds its IP to the receivers of the first DMX output; + next to an OSC program adds it to the other OSC targets.

### Left list

Clicking an item creates its node on the canvas. Hover the list for a short how-to.

| Group | Nodes |
| --- | --- |
| Destinations | OSC, DMX output, MIDI CC, MIDI Note |
| Values: Mixer channels 1-6 | Fader, VU, Hi, Mid, LoMid, Low, Color, OnAir |
| Values: Mixer master / effects | Xf, MVU, MVUL, MVUR, BeatFX, BeatFXOn, BeatFXName, BeatFXCh, ColorFXName |
| Values: Deck tempo | BPM, BPMCoarse, BPMFine, Beat, Downbeat, Phase, BarBeat, BarPhase |
| Values: Deck time / phrase | Pos, Time, Length, Remain, Phrase, PhraseKind, PhrasePos, PhraseBeats |
| Values: Deck state / track | Loop, Sync, Master, CDJPlay, CDJCue, Deck, Title, Artist, Key |
| Values: SMPTE output | SMPTEA, SMPTEB, SMPTEM, Clock |
| Transforms | Range, Shape (sin, tri, saw, sq), Invert, Free run, Time format |
| Math | Add, Subtract, Multiply, Divide, Min, Max |
| Special | Clamp, Threshold, Smooth, Line break |
| Input | Int, Float, Text |

### Canvas and the settings on the right

Drag from a node's output dot to another node's input dot to connect them; a wire dropped on a node goes to its nearest input. The value flowing now is shown on the wire. One value can go to several places. A transform or math node without wires, dropped on a wire, goes into it. Text values (title, artist, key) can go only to OSC; a wire from one to DMX or MIDI is refused and the reason is shown.

- **Select** — click a node; drag on the empty canvas to pick several; Shift+click or Ctrl+click (Cmd+click on Mac) adds or removes one. Delete removes the selected nodes.
- **Right-click menu** — Cut, Copy, Paste, Duplicate, Delete, Remove wires, Select all, Group, Ungroup. Ctrl+G (Cmd+G on Mac) groups the picked nodes, with Shift it ungroups. Drag a group by its name band; double-click the band to rename it.
- **Move** — nodes snap to the edges and centres of other nodes; hold Alt to place them freely. Hold Space and drag to move the view. On a touchscreen, drag the empty canvas with a finger to move the view; hold the finger still for a moment, then drag, to pick nodes.
- **Problems** — a node that cannot send says why: not connected, cannot be sent this way, channel used twice, over the limit, loop in the wires, or universe used by another DMX output.

Selecting a node shows its settings on the right.

- **Value nodes** — the value and the deck: master deck or deck 1–6. Beat and Phase can run 1, 2, 4, 8 or 16 times per beat; Downbeat, BarBeat and BarPhase several times per bar (with a shape).
- **OSC** — the address and type. Text values are sent as string; numbers as float or int; numbers that also have a text form (Time, Length, BPM and so on) as float, int or string. Sent only when the value changes, at most 60 Hz. A missing leading `/` is added; spaces and `# * , ? [ ] { }` are not allowed.
- **DMX output** — **Send this universe** switches the output on. **Art-Net address** is Net (0–127), Subnet (0–15) and Universe (0–15); each DMX output needs its own universe. **Receiver IPs** take addresses separated by commas or spaces; left empty, the first DMX output sends to the devices found by ArtPoll and the others to the broadcast address of the Art-Net network. The first DMX output can also send as sACN (**Also send as sACN**); the universe, priority and other sACN settings are under **sACN output** in [Settings](#15-settings). Connect a value to **+ Channel** to give it the next channel; click a channel number on the node to change it. 0–1 values are sent as 0–255.
- **MIDI CC, MIDI Note** — the MIDI channel (1–16) and the CC or note number (0–127). 0–1 values are sent as 0–127.
- **Range** — maps a 0–1 value to From–To. A From larger than To moves the other way. BPM treats 20–500 BPM as 0–1.
- **Shape** — turns a 0–1 value into a sin, tri, saw or sq wave, with an Invert switch; **Invert** is 1 − value.
- **Free run** — on a beat value (Beat, Downbeat, Phase, BarBeat, BarPhase), keeps it running on its own at the deck's tempo between and without the CDJ's beat reports.
- **Time format** — chooses the fields (hh, mm, ss, ff) of a time value (Time, Length, Remain, SMPTE, Clock). See "Time format" below.
- **Add, Subtract, Multiply, Divide, Min, Max** — take as many inputs as you connect; with one input, the **Second value** is used. Faders and levels count as 0 to 1, BPM and counts as numbers. **Add** also joins texts: "A" + "B" = "AB".
- **Clamp** — keeps a value between **Lowest** and **Highest**. **Threshold** sends 1 from its value up, else 0.
- **Smooth** — slows a value down. **Attack (ms)** is how fast it follows a rise, **Sustain (ms)** how long it holds the peak once the input falls, **Release (ms)** how fast it then falls. Larger is slower; 0 follows at once. A Smooth node saved before these three settings keeps its single time for both ways.
- **Line break** — joins text values on several lines (for example title / artist).
- **Int, Float, Text** — a value you type. A text can go to OSC only.

The values are computed in the output engine, so they keep going while another page is shown.

### Value names and what they send

The values sent when no range is set.

| Group | Name | Value |
| --- | --- | --- |
| Per mixer channel (1–6) | Fader, VU, Hi, Mid, LoMid, Low, Color | 0–1 |
| | OnAir | 1 on air, otherwise 0 |
| Whole mixer | Xf, MVU, MVUL, MVUR, BeatFX | 0–1 |
| | BeatFXOn | 1 when beat FX is ON |
| | BeatFXName, BeatFXCh, ColorFXName | the chosen beat FX, the channel it is on, the colour FX name (string) |
| Per deck and master deck | BPM | the BPM as is (as a string, one decimal such as `128.0`). BPMCoarse is the integer part, BPMFine the fraction |
| | Pos | track progress 0–1 (as a string `42%`) |
| | Beat, Downbeat | a short 1 on every beat, a short 1 on the first beat of a bar |
| | Phase | position within the beat 0–1 |
| | BarBeat | which beat of the bar, 1–4 |
| | BarPhase | position within the bar 0–1 (one cycle per four beats) |
| | Phrase | the rekordbox phrase name (string, for example `CHORUS`) |
| | PhraseKind | the phrase number: Intro 1, Verse 2, Bridge 3, Chorus 4, Up 5, Down 6, Outro 7 (0 without a phrase) |
| | PhrasePos, PhraseBeats | position within the phrase 0–1, beats left to the next phrase |
| | Loop, Sync | 1 while looping, 1 while sync is on |
| | Title, Artist, Key | the track title, artist and key (string) |
| | Time, Length, Remain | elapsed, total and remaining time (string, `MM:SS`, remaining as `-MM:SS`) |
| Per deck only | CDJPlay, CDJCue | 1 while playing, 1 while CUE is held |
| | Master | 1 when that deck is the CDJ master |
| Master deck only | Deck | the master deck's player number 1–6 |
| SMPTE, clock | SMPTEA, SMPTEB, SMPTEM | the SMPTE OUT layer A, B, MASTER timecode as shown in the dock (string, `HH:MM:SS:FF`, 29.97 drop frame `HH:MM:SS;FF`, offset included) |
| | Clock | the computer time (string, `HH:MM:SS`) |

- The master deck is the deck of the header's MASTER BPM. Without a CDJ master, a playing deck is used, an on-air deck first.
- BPM sent to the Resolume tempo address (`/composition/tempocontroller/tempo`) goes as 0–1 (20–500 BPM), because Resolume takes 0–1 there.
- Without a mixer, mixer values are not sent, since a 0 would switch off a layer bound to a fader. The BPM of a deck without a BPM is not sent either.
- On/off values (OnAir, BeatFXOn, Loop, Sync, CDJPlay, CDJCue, Master) and Deck can also be sent as strings (`ON`, `OFF`, `2`).

### Time format

A time format node on a time value sends only the chosen fields.

| Letters | Field |
| --- | --- |
| `hh`, `h` | hours |
| `mm`, `m` | minutes |
| `ss`, `s` | seconds |
| `ff`, `f` | frames (SMPTE only) |

Two letters send the field zero-padded to two digits, one letter sends it as is. Several fields are joined with `:` (for example `mmss` → `05:08`, `hmmss` → `0:05:08`). Track times without `h` keep counting minutes past 60. Remain with a format is sent without the `-`. 29.97 drop-frame timecode puts a `;` before the frames.

---

## 14. SHORTCUT and MAP

Keyboard, MIDI, OSC and DMX (Art-Net) press ORVIK's buttons and change its values: the SMPTE OUT controls of layers A, B and MASTER, and the header's PRO DJ LINK, TCNET and M.VOL. Only the receiving side is set up; the on/off state of a bound control can be sent back to a MIDI device.

![SHORTCUT](images/19-shortcut.png)

### SHORTCUT page

The inputs are on the left. Each has its own **Enabled** switch.

| Section | Contents |
| --- | --- |
| Keyboard | key combinations, heard only while the ORVIK window is in front. On by default. |
| MIDI | every connected MIDI device with **IN** (listen to it) and **OUT** (send the state of the bound controls back to it, for controller LEDs). On by default. |
| OSC | the OSC receive port (7700 by default), where to listen (all interfaces, this computer only or one interface) and the IPs allowed to send. An empty list lets anyone on the network control ORVIK, so write the IPs down at a venue. Off by default. |
| DMX (Art-Net) | control from the channels of one Art-Net universe (Net / Subnet / Universe) sent by a lighting console. It uses the same allowed IPs as OSC. To share it with Resolume on this computer, send broadcast from the console. Off by default. |

**Turn on MAP** at the top right of the page goes to DECKS and turns MAP on.

The table lists every action, grouped as LAYER A, LAYER B, MASTER and Header; the Source and Offset steps rows open to their actions and show how many are bound. **All** shows every action, **Mapped only** the bound ones.

- **Key, MIDI, DMX** — click a cell, then press a key, or send MIDI or DMX, to bind it. The cell shows WAITING meanwhile.
- **MIDI mode** — the tag on a bound MIDI cell; click it to change. On/off controls: **Toggle** switches at each press, **Piano** is on only while held (also for latching buttons that send 127/0). Values: **Absolute** takes the fader or knob position, **Relative** is for endless encoders, 1 % per step.
- **OUT** — the MIDI values sent back for off and on (0 and 127 by default). An APC mini mk2 also gets a colour palette and a brightness or blink choice.
- **OSC** — the action's fixed OSC address, for example `/orvik/smpte/a/ltc`. Click it to copy.
- **×** — removes the row's bindings.

In a wide window a panel on the right shows **Incoming**, the last inputs received and what they did, and, while OSC is on, the **OSC rules**: on/off takes 1 on, 0 off, no value toggles; buttons press on no value or a non-zero value (0 is ignored); values take float 0–1 (0–100 also works); sources also take a value (`/orvik/smpte/a/src 3`).

### MAP

MAP in the sidebar (or **Turn on MAP** on the SHORTCUT page) enters the binding mode; MAP again or Esc leaves it. Controls that can be bound are outlined: dashed when free, solid with chips (K key, M MIDI, D DMX) when bound. Click one: the bar at the top shows its name and its OSC address (click to copy). Then press a key, or send MIDI or DMX, to bind it. **Clear** removes its bindings, **Cancel** stops waiting. OSC addresses are fixed, so they need no binding.

### Keys that always work

| Key | Action |
| --- | --- |
| Ctrl+R (Cmd+R on Mac) | reloads the screen. Virtual deck playback stops. |
| Ctrl+Z (Cmd+Z on Mac) | undo on SET LIST and OUTPUT, outside text fields |
| Ctrl+Shift+Z or Ctrl+Y (Cmd+Shift+Z on Mac) | redo |
| Esc | leaves MAP |
| ⌘M (macOS) | Window > Minimize |
| ⌘W (macOS) | Window > Close: closes a cue call window; on the main window it quits ORVIK as the close button does |

---

## 15. Settings

![Settings](images/18-settings.png)

SETTINGS in the sidebar opens the settings window; click it again to close the window.

1. **Section icons** — click to jump to a section.
2. **Sections** — the settings are grouped as below.
3. **Settings** — the name on the left, the value on the right. Hover a row to see its description.

Each time the window opens, the audio, LTC and MIDI device lists are read again. The interface lists are read again each time they open.

### Language

| Item | Description |
| --- | --- |
| Language | the display language. System language follows the computer. English, 한국어, 日本語, Español, Deutsch, Français, 繁體中文. |

### Deck layout

| Item | Description |
| --- | --- |
| Layout Theme | the deck screen layout: FLOW, STK, STRIP or ROW. [6.3](#63-layouts) |
| Color scheme | Dark, or Light (outdoor) for bright places. |
| UI Drawing FPS | how many times a second the screen is redrawn: 60, 30 or 15. Lower it to use less CPU. Transmission rates are separate. |
| UI Scale | the size of the whole screen: 100%, 125% or 150%. |

### Waveform

| Item | Description |
| --- | --- |
| Waveform Color | 3 BAND, RGB or MONO. Tracks without 3band data are shown as RGB. |
| Waveform Current Position | where the play position line sits in the detail waveform: Center or Left (25%). |
| Beatgrid: Overview | the marks drawn on the overview waveform: Bar ticks, 1-min ticks, Vertical lines. |
| Beatgrid: Detail | the grid drawn on the detail waveform: 1 Bar, Every beat, Sub-beats, Vertical lines. The cue call's lanes use it too. |
| Phrase Display | how track phrases (INTRO, CHORUS and so on) are shown on the waveform: None, Margin Tick (minimal), Phrase names (INTRO/CHORUS/OUTRO) or Color Cycling. |
| Cue Marker Style | the shape of the cue marks: Chip (square), Flag (pentagon) or Stripe (band). |

### PRO DJ LINK

| Item | Description |
| --- | --- |
| PRO DJ LINK Interface | the network interface the CDJs and DJM are on. Auto-detect picks the side where CDJs are seen and shows the address in use. Each interface is listed with its name and address; 169.254.x.x ones are marked link-local CDJ. A chosen interface that is missing stays listed as "not present — running on auto" and the engine runs on auto-detect meanwhile. Changing it while devices are sending asks first, because rebinding briefly interrupts output; Cancel keeps the old one. |
| Status | this interface's connection state. |
| Start PRO DJ LINK automatically | connects to the CDJs and DJMs when ORVIK opens. On by default. The row's description lists the ports: UDP 50000–50002 and dbserver TCP. When another program holds them, NETWORK says so. [12.1](#121-set-up-warnings) |

### TCNet

| Item | Description |
| --- | --- |
| Node Name | this computer's name on TCNet. %% is an automatic number; 8 characters at most. |
| TCNet Interface | the network interface TCNet is sent on. Changing it while TCNet nodes are seen asks first. |
| Status | this interface's connection state. |
| Frame Rate | the frame rate of the timecode sent over TCNet: 24, 25, 29.97 or 30. |
| TCNet Mode | Auto waits when a server started earlier exists, Server always sends, Client never sends. |
| Start TCNet automatically | starts the output to Arena when ORVIK opens. On by default. The row's description lists the ports: UDP 60000–60002. |

### Mirror mode

| Item | Description |
| --- | --- |
| Serve mirror | lets ORVIK on another computer mirror this one (TCP 8878). |
| Mirror another PC | connects to a mirror server automatically when this computer has no decks. On by default. |
| Mirror Server | the server to mirror. Refresh searches again; the connection state shows next to it. On the server computer, allow incoming connections on TCP 8878 in the firewall. |

While mirroring, MIRROR and the server address replace the header's PRO DJ LINK and TCNET buttons; CONNECTING shows before and while reconnecting. A mirroring computer does not send TCNet. Clicking MIRROR opens the settings.

### Web viewer

| Item | Description |
| --- | --- |
| Web Viewer | lets browsers on the same network see the deck screen and the cue call page (read only). |
| Port | the web viewer port (8877 by default). |
| Interface | the network interface the web viewer listens on. |
| Status | Off, or Running and the port. When on, a QR code, the access code and the addresses appear below. |
| REST API | read-only GET requests on the web viewer's server, with the same access code and session. The row's description lists the paths under `/api/v1/` (status, decks, layers, timecode, mixer, outputs; JSON). The web viewer must be on. |
| API status | the API address and the number of requests, or why it does not answer. |

### Audio output

| Item | Description |
| --- | --- |
| Output Device | the audio device for virtual deck sound: System default or a device. |
| Output Channel | the output channel pair for virtual deck sound (1/2, 3/4 and so on). |

### SMPTE Timecode output

| Item | Description |
| --- | --- |
| Frame Rate | the frame rate of LTC, MTC and Art-Net timecode: 23.98, 24, 25, 29.97 or 30 fps. |
| Latency Offset | ms added to the timecode (−5000 to 5000); positive runs ahead. Shared by LTC, MTC and Art-Net, used to match a receiver's delay. |
| LTC: Layer A, LTC: Layer B, LTC: MASTER | the audio device (None or a device), channel and level for each layer's LTC. The level is −40 to 0 dBFS, −12 by default; double-click the knob to reset it. Raise it if the receiver does not lock, lower it if it distorts. |
| Hold LTC while stopped | when a deck stops, LTC keeps sending its stopped frame: the receiver stops at once, and a deck back at 0 shows 00:00:00:00. Off: no LTC while stopped. On by default. |
| MASTER follows the sync master | with MASTER on A or B, when the CDJ master moves to the other layer's deck, MASTER moves to that layer too. On by default. |
| Keep the on-air deck, hand over when it goes quiet | with a DJM, MASTER keeps the on-air deck (playing with its fader up or ON AIR). When it stops (0.5 s) or is faded down (2 s), MASTER moves to the CDJ master deck if it is on air, else to the other layer's on-air deck. Without a mixer MASTER follows the MASTER button; a stopped MASTER deck hands over to the other layer's playing deck after 0.5 s. Off: the MASTER button only. On by default. |
| Pick the on-air deck (time left too) | MASTER picks the deck that is going out from its fader, playback and time left (as the FLOW layout picks its main deck), held 5 s. It can move before the DJ presses MASTER. Needs a DJM on the network; without one MASTER follows the MASTER button. Off by default. |
| MTC MIDI Output | the MIDI port for MTC. |

### sACN output

| Item | Description |
| --- | --- |
| sACN output | sends sACN (E1.31) with the channels of the first DMX output on the OUTPUT page. It is the same switch as **Also send as sACN** on that node. |
| Transport | Multicast or Unicast. |
| Unicast IP | the receiver's address for Unicast. |
| Interface | the network interface sACN is sent on. |
| Universe | the sACN universe, 1–63999. |
| Priority | 0–200, 100 by default. |
| Source name | the name receivers show, ORVIK by default. |
| Status | off, waiting, or the destination, universe, priority and packets sent. |

### MIDI Clock output

| Item | Description |
| --- | --- |
| MIDI Clock output | sends MIDI Clock (24 PPQN) with Start, Stop, Continue and Song Position Pointer. |
| Source | the tempo it follows: Master deck, Layer A, Layer B, MASTER layer or DECK 1–6. |
| MIDI output port | the MIDI port for MIDI Clock, chosen apart from the MTC MIDI Output. The MIDI CC and MIDI Note nodes on the OUTPUT page use the same port. |
| Clock while stopped | keeps the tempo clock running while the deck is stopped. On by default. |
| Status | the deck, BPM, playing or stopped and the clocks sent, or what is missing. |

### Track library

| Item | Description |
| --- | --- |
| Track library | for cue editing, keeps the waveform, beat grid, phrases and cue points of the CDJ tracks that played, and the paths of audio files. On by default; off, nothing is written and the cue editor has no CDJ waveforms. |

### Settings file

| Item | Description |
| --- | --- |
| Backup | **Save settings** writes the settings to an encrypted file (.orvikcfg). **Load settings** loads one after asking and restarts ORVIK. The file does not hold window positions, the history or the set list, and this session's history and set list stay. 1.6 settings files load too; their OSC rows and DMX patch become OUTPUT nodes. |
| Defaults | **Factory reset** returns every setting to its default and restarts ORVIK, after asking. This session's history and set list stay. |

### Info

| Item | Description |
| --- | --- |
| Version | the current ORVIK version, marked Free beta. |
| Update check | when on, looks for a new version on GitHub at launch and every 12 hours. **Check now** checks right away; with a new version, its number and a **Download page** button appear below. |
| Copyright | the ORVIK and JUCE copyright notes, and a REPORT button for enquiries. |
| Open source | **License files** opens the folder of license files inside the app (on Windows it is unpacked to a temporary folder); **Licenses and source** opens the open-source notices on the ORVIK GitHub page. |

---

## 16. Trademarks and licenses

ORVIK is an independent compatibility tool. It is not AlphaTheta's official PRO DJ LINK Bridge nor TC Supply's ShowKontrol, and it implies no affiliation, sponsorship, certification or endorsement by AlphaTheta, Pioneer DJ, TC Supply or Resolume.

AlphaTheta, Pioneer DJ, CDJ, DJM, PRO DJ LINK, rekordbox, TC Supply, TCNet, ShowKontrol, Resolume, SMPTE and other product, technology and trademark names are used to describe compatibility. The rights to each mark belong to its owner. Art-Net™ Designed by and Copyright Artistic Licence.

ORVIK uses the JUCE 9 framework, the open-source components bundled with it and the fonts. The list and the license texts are in the **Info** section of the settings window (**License files**, **Licenses and source**) and in THIRD_PARTY_NOTICES. The app's terms of use are in BINARY_LICENSE.

