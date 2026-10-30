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

ORVIK receives playback information from CDJs and DJMs and sends it to lighting and video software: TCNet, SMPTE timecode (LTC, MTC, Art-Net), OSC, DMX (Art-Net, sACN) and MIDI. It only asks the gear for information; it does not control it.

### Requirements

| Item | Details |
| --- | --- |
| Operating system | macOS 13.3 or later (Apple Silicon), Windows 10, 11 (x64) |
| Gear checked | CDJ-3000X, CDJ-3000, CDJ-2000NXS2, DJM-V10, DJM-900NXS2 |

What can be received depends on the gear, its firmware and how it is connected.

### Install and run

- **macOS** — open the DMG and move ORVIK to the Applications folder.
- **Windows** — run the downloaded `.exe` as it is. There is no installer. The file is not code-signed, so if SmartScreen warns on the first run, choose "More info" and run.

A short splash shows when the app starts and when it quits. On quit it closes its TCNet and PRO DJ LINK connections first.

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
4. **CUE CALL** — opens the cue call window. [Chapter 11](#11-cue-call)
5. **Reload** — reloads the screen (Cmd/Ctrl+R). Virtual deck playback stops.
6. **M.VOL** — the volume of the virtual deck sound the app outputs. CDJ and mixer audio is not affected.
7. **Window buttons** — on Windows: minimise, maximise and quit ORVIK. On macOS the standard buttons at the top left of the window are used. With an unsaved history or set list, ORVIK asks whether to save when quitting.

### Switch states

When the PRO DJ LINK or TCNET switch is on, its left box fills with the state colour: green when all is well, a blinking dot while turning on. When something needs attention, one of these labels appears inside the switch.

| Label | Meaning |
| --- | --- |
| NO H/W | PRO DJ LINK is on but no CDJ or DJM is visible. |
| LOST | There are hardware decks but no CDJ has sent status for more than 1.5 s. |
| STANDBY | A TCNet server started earlier on the same network, so transmission is paused and waiting. |

When a new version is available, an UPDATE badge appears in the header. Click it to open the download page.

---

## 4. Sidebar

| Menu | Contents |
| --- | --- |
| DECKS | Waveforms, timecode and playback state per deck |
| MIXER | The DJM's channel faders, EQ and level indicators |
| HISTORY | The record of tracks that went on air |
| SET LIST | The set list, per-track timecode offsets and cue editing |
| NETWORK | PRO DJ LINK devices and TCNet nodes |
| OUTPUT | The node editor that sends deck and mixer values as OSC, DMX and MIDI, and the Art-Net settings |
| MAP | Turns on the mode that binds a shortcut by clicking a control. [Chapter 14](#14-shortcut-and-map) |
| SHORTCUT | Controlling ORVIK by keyboard, MIDI, OSC and DMX |
| SETTINGS | Opens the settings window. |

---

## 5. Status bar

![Status bar](images/05-status-bar.png)

1. **TCNET** — whether the header's TCNET switch is on. In STANDBY nothing is sent even when ON.
2. **ARENA** — the number of TCNet nodes seen in the last 10 s.
3. **DECKS** — hardware decks plus virtual decks with a track loaded.
4. **UP** — time since the engine started.
5. **CPU** — ORVIK's CPU use.
6. **MEM** — the memory ORVIK uses.
7. **Deck dots** — one dot per deck. Hardware decks show their hardware colour; virtual decks show different colours for playing, cue, loaded and empty.

When something is wrong, LINK, OUT or MIX appears in the status bar: LINK when player numbers clash, OUT when TCNet transmission has stopped or the app is mirroring, MIX when mixer data has stopped. Clicking one goes to the related page. They do not appear while all is well.

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

There are four deck layouts. Choose one with **Layout theme** in [Settings](#15-settings).

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

With the deck mode set to VIRTUAL, virtual decks play audio files on this computer. The picture shows the STK layout. The transport buttons (⑧) exist in every layout except STRIP; in FLOW they sit between the timecode and the BPM.

1. **Deck number**
2. **VIRTUAL, LOCAL** — marks a virtual deck whose track is a file on this computer.
3. **×** — removes this virtual deck.
4. **Channel fader** — drag to adjust.
5. **Artwork** — click to unload the track.
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

1. **SMPTE OUT** — click to expand or collapse the dock. Collapsed, it summarises each layer's source and enabled outputs.
2. **Detach** — opens SMPTE OUT in its own window. Closing the window returns it to the dock.
3. **Layer A** — the layer that sends the chosen deck's play position as timecode. Layer B is the same.
4. **LTC, MTC, ART** — turns this layer's LTC (audio timecode), MTC (MIDI timecode) and ART (Art-Net timecode) outputs on and off. LTC and ART can be on for every layer; MTC for one layer only. The LTC device and the MTC port are chosen under **SMPTE Timecode output** in [Settings](#15-settings); the Art-Net network and frame rate at the top of the [OUTPUT](#13-output) page.
5. **Source deck** — the deck this layer follows. The same as the A, B buttons on the deck card.
6. **Timecode** — the source position plus the offset. The latency compensation from Settings is added to what is actually sent.
7. **− / +** — changes each field by 1; with Ctrl (Cmd on Mac) by 10. When MASTER's STEP is TIME it changes the FREEWHEEL time, otherwise the offset.
8. **SET** — shows that the set list's offset is loaded in this layer. Hover to see the track name. When the UNLISTED offset is in use because the track is not in the list, it reads SET —.
9. **OFFSET ON** — includes the offset in the output or leaves it out. The value is kept.
10. **Reset** — sets the offset back to 0.
11. **MASTER** — the MASTER layer.
12. **FREEWHEEL buttons** — ▶ runs the FREEWHEEL timecode, ❚❚ pauses it keeping the value, |◀ returns to 00:00:00:00. READY (◉) holds FREEWHEEL at the current value and starts it when a deck starts playing. With a mixer, only decks that are on air at that moment count; decks already playing and CUE previews do not.
13. **Source** — A and B send that layer's timecode plus the MASTER offset. CLOCK uses the computer time; FREEWHEEL runs on its own from the last MASTER value.
14. **STEP** — with the MASTER source on FREEWHEEL, whether − / + changes the offset (OFS) or the FREEWHEEL time (TIME).

While a deck is stopped, LTC keeps sending the timecode of the stopped position, the same frame repeated so the receiver can tell it has stopped.

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
5. **CLEAR** — clears the record. Click again within 3 s to confirm.
6. **EVENT** — the event name. It goes into the exported file names (ORVIK CSV, set list, track list) and the track list TXT body.
7. **DJ** — the DJ name. It goes into the track list TXT body.
8. **Search** — finds by title or artist.
9. **Table header** — drag a boundary to resize a column; double-click to reset. The columns:
   - **DECK** — the player number and model the track played on.
   - **START, END** — when it went on air and off air.
   - **IN, OUT** — the play positions when it went on air and off air.
   - **ON AIR** — the time on air.
10. **Totals** — tracks played, total ON AIR time, average BPM and tracks per deck.

Hovering a row shows a button to add it to the set list and a delete button at the right end. Deleting the track on air now stops recording it while it keeps playing.

---

## 10. SET LIST

![SET LIST](images/15-setlist.png)

A list that holds a timecode offset and cues for each track. With APPLY TO SMPTE on, when a listed track is loaded on a deck, the track's offset goes into the SMPTE layer (A, B) that deck is connected to. Like the history, the set list is emptied at every start; autosave and the restore prompt work the same way.

1. **Track count** — the number of tracks in the list.
2. **APPLY TO SMPTE** — on: the offset of a track loaded on a deck goes into that deck's layer. Off: the layer offsets are left alone.
3. **UNLISTED** — the offset used for tracks not in the list. The button next to it resets it to 00:00:00:00.
4. **AUTO FILL** — set a start value and a step (1H, 30M, 10M) and click FILL to fill the offsets in list order. Without a step every track gets the same value.
5. **ADD** — + adds a track typed by hand; a deck number adds the track loaded on that deck.
6. **Search** — finds by title or artist.
7. **IMPORT** — loads a set list: an ORVIK file, a ShowKontrol set list (.set) or history (.csv), a text playlist exported from rekordbox and others, or audio files. With an existing list it asks whether to replace (REPLACE) or append (ADD), and asks which columns to use when a text file's columns are not recognised. ORVIK files carry the cues too.
8. **EXPORT** — saves in a chosen format: an ORVIK file or a ShowKontrol set list (.set).
9. **CLEAR PLAYED** — clears only the played marks.
10. **CLEAR** — clears the list. Click again within 3 s to confirm. The tracks' cues go with them.
11. **OFFSET** — this track's offset. When the track is loaded on a deck, this value goes into the layer. Click to edit; the button next to it resets to 00:00:00:00.
12. **STATUS (on a deck)** — the deck the track is loaded on and the layer (A, B) its offset went into.
13. **STATUS (played)** — a check appears when this track played and went on air while APPLY TO SMPTE was on. Without a mixer only playback counts. When the same track is listed several times, the offset of a line without a check is used; listed once, that line's offset is used again on replay.
14. **Track on a deck** — rows of tracks loaded on a deck are highlighted.

Click a title or artist to edit it. The buttons at the right of a row move the track up or down or remove it. Drag a header boundary to resize a column; double-click to reset. A row's **waveform** column is the source of the waveform used for cue editing (audio file, HISTORY, CDJ, none) and the **cues** column is the number of cues on the track.

### 10.1 Cue editing

The cue editor opens on the right of the SET LIST page. Choosing a track shows its waveform and cue list.

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

---

## 11. CUE CALL

The header's CUE CALL button opens the cue call window. It shows the cues of the track playing on the master deck by group and counts down to the next cue. Several windows can be open (for example one for lighting, one for SFX); position, size and display settings are remembered per window. The title bar button docks the window on the right of the main window and undocks it again.

### Themes

- **Board** — one tile per group: the cue name, the next cue, a big countdown and a progress bar for the last 8 bars. Nearing the cue, the tile fills with the group colour; at the cue it reads GO.
- **Layers** — a flowing timeline: the master deck's waveform with its cue marks above, one line per group and a next-track line below. The NOW line sits at 20 % of the width; a cue fires the moment it touches NOW.

### Time left

Seconds and beats (bar.beat, the CDJ beat countdown style) are shown together: `2.3` means 2 bars and 3 beats left. Inside the big countdown the seconds turn the group colour in 0.1 s steps, the last beats count 3 2 1 (or from 5 or 10) and GO appears. Clicking the number switches between seconds first, beats first and seconds only.

### Settings popup (the cog)

| Section | Items |
| --- | --- |
| Display | time-left display (seconds first, beats first, seconds only), big countdown (5, 10, 15, 30 s), beat count from (3, 5, 10), timeline range, shown groups, waveform colour (track, group, grey) |
| Web view | the address for phones and tablets, **Copy address**, **Open in browser**. The web viewer in Settings must be on. |
| Voice | speak (name + count, name only, count only), warn (8 beats, 4 beats), countdown (3, 2, 1 or none), last word (on, off), voice, click (none, during counts, always) and its volume, output (device, channel, volume, test), per-group mute |

### Spoken calls

The speaker in the cue call window's header turns the spoken calls on and off. Sentences are rendered ahead of time with the system voices (macOS, Windows) and played on the beat during the show.

- 8 (or 4) beats before a cue: "group, cue name, standby"; on each beat "three, two, one"; at the cue "go".
- The **voice** list shows only voices of the languages the app can speak (Korean, English, Japanese, Spanish, German, French, Chinese), grouped by language. The first entry, "System … voice", is the default voice of the display language. Choosing a voice of another language switches the calls to that language (an English voice says "Lighting, standby", "three, two, one, go"). Group names you typed in the set list are read as they are.
- Without a voice for the language, the calls are in English and the first entry says so. Voices are added in the operating system's speech settings.
- **Output** can be another channel of the device LTC uses, but not the channel LTC uses; choosing the same channel shows a conflict note in the settings.
- The speaker next to a group name mutes that group. Groups hidden in the window are not spoken.

### Web page

With the web viewer on in Settings, phones, tablets and other computers on the same network open `http://<this computer>:<port>/cuecall`. It asks for the access code first (the same code as the web viewer) and remembers it for 12 hours. The board and layers themes and the display settings are chosen on that device. There is a layout for a phone held upright.

---

## 12. NETWORK

![NETWORK](images/16-network.png)

1. **PRO DJ LINK state** — whether ORVIK is ready to receive PRO DJ LINK. Whether CDJs are actually visible is shown in the device list.
2. **Device list** — the number, type, model and IP address of each CDJ and DJM seen.
3. **TCNet state** — whether the TCNET switch is on, and ORVIK's node name.
4. **Node list** — ORVIK itself and the TCNet nodes seen in the last 10 s.
5. **TYPE** — the node role: SERVER sends, CLIENT receives; REPEATER and AUTO exist too. With TCNet on and no CLIENT at all, a note appears under the list.

---

## 13. OUTPUT

Sends deck and mixer values to other programs and gear as OSC, DMX (Art-Net, sACN) and MIDI. It is a node editor that merges the old OSC page and the ART-NET DMX patch. OSC rows and DMX patches from 1.6 are converted to nodes on the first start and send the same values.

### Top of the page

- **IMPORT, EXPORT** — saves the node graph to a file or loads one.
- **OSC** — where OSC goes (address:port): this computer, an IP address or broadcast.
- **Art-Net network** — the network interface for Art-Net and the DMX rate (Hz).
- **Art-Net timecode** — the frame rate of Art-Net timecode. Each layer is switched on with the ART button in SMPTE OUT.
- **MIDI** — the MIDI device to send to.
- **Scan** — finds Art-Net devices (ArtPoll) and MIDI devices again.

### Left list

Clicking an item creates its node on the canvas.

| Group | Nodes |
| --- | --- |
| Destinations | OSC, DMX output, MIDI CC, MIDI Note |
| Values (mixer channels 1–6) | Fader, VU, Hi, Mid, LoMid, Low, Color, OnAir |
| Values (whole mixer, effects) | Xf, MVU, MVUL, MVUR, BeatFX, BeatFXOn, BeatFXName, BeatFXCh, ColorFXName |
| Values (deck tempo) | BPM, BPMCoarse, BPMFine, Beat, Downbeat, Phase, BarBeat, BarPhase |
| Values (deck time, phrases) | Pos, Time, Length, Remain, Phrase, PhraseKind, PhrasePos, PhraseBeats |
| Values (deck state, track) | Loop, Sync, Master, CDJPlay, CDJCue, Deck, Title, Artist, Key |
| Values (SMPTE output) | SMPTEA, SMPTEB, SMPTEM, Clock |
| Transforms | Range, Shape (sin, tri, saw, sq), Invert, Free run, Time format |
| Maths | Add, Subtract, Multiply, Divide, Min, Max, Smooth, Line break |

### Canvas and the settings on the right

Drag a value node's output to the input of a transform, maths or destination node. The value flowing now is shown on the wire. One value can go to several places. Selecting a node shows its settings on the right (deck choice, range, address, channel, type, current value). A value node's deck is "follow master" or deck 1–6.

- **OSC** — the address and type (int, float, string). Sent only when the value changes, at most 60 Hz. A missing leading `/` is added; spaces and `# * , ? [ ] { }` are not allowed.
- **DMX output** — Net, Subnet, Universe and the channel. 0–1 values are sent as 0–255. The receiver (unicast IP or broadcast) and the sACN priority are set on the node.
- **MIDI CC, MIDI Note** — the channel and the CC or note number. 0–1 values are sent as 0–127.
- **Range** — maps a 0–1 value to min–max. A min larger than the max moves the other way. BPM treats 20–500 BPM as 0–1.
- **Shape** — turns a 0–1 value into a sin, tri, saw or sq wave; **Invert** is 1 − value. **Free run** runs on its own at the chosen period without an input.
- **Time format** — chooses the fields (hh, mm, ss, ff) of a time value (Time, Length, Remain, SMPTE, Clock). See "Time format" below.
- **Line break** — joins text values on several lines (for example title / artist).

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

Keyboard, MIDI, OSC and DMX (Art-Net) press ORVIK's buttons and change its values. Only the receiving side is set up; the on/off state of a bound button can be sent back over MIDI OUT.

### SHORTCUT page

| Section | Contents |
| --- | --- |
| Keyboard | key combinations, heard only while the ORVIK window is in front. |
| MIDI input | the MIDI device to listen to (all devices or one). With OUT on, the state of the bound buttons is sent back to that device (controller LEDs). |
| OSC input | the OSC receive port, where to listen (all interfaces or this computer only) and the list of IPs allowed to send. An empty list lets anyone on the network control ORVIK, so write the IPs down at a venue. |
| DMX input (Art-Net) | control from channels of an Art-Net universe. It can receive next to Resolume on the same computer. |
| Bind from a button | **MAP on** enters the binding mode. |

The binding list shows each action's key, MIDI (channel, note or CC), OSC address and DMX channel, and lets you remove them.

### MAP

MAP in the sidebar (or MAP on in the SHORTCUT page) enters the binding mode. Click a button on screen to hold it, then the next key, MIDI input, OSC message or DMX channel is bound to it. Esc leaves the mode. Buttons that can be bound are outlined while the mode is on.

---

## 15. Settings

![Settings](images/18-settings.png)

SETTINGS in the sidebar opens the settings window.

1. **Section icons** — click to jump to a section.
2. **Sections** — the settings are grouped as below.
3. **Settings** — the name on the left, the value on the right.

### Language

| Item | Description |
| --- | --- |
| Language | the display language. System language follows the computer. 한국어, English, 日本語, Español, Deutsch, Français, 繁體中文. |

### Deck layout

| Item | Description |
| --- | --- |
| Layout theme | the deck screen layout: FLOW, STK, STRIP or ROW. [6.3](#63-layouts) |
| Colour scheme | dark or light. |
| Screen FPS | how many times a second the screen is redrawn. Lower it to use less CPU. Transmission rates are separate. |
| UI scale | the size of the whole screen. |

### Waveform

| Item | Description |
| --- | --- |
| Waveform colour | 3band, RGB or mono. Tracks without 3band data are shown in RGB. |
| Play position | where the play position line sits in the detail waveform. |
| Beat grid: overview | the grid drawn on the overview waveform. |
| Beat grid: detail | the beat grid drawn on the detail waveform. |
| Phrases | how track phrases (INTRO, CHORUS and so on) are shown on the waveform. |
| Cue marker style | the shape of the cue marks drawn on the waveform. |

### PRO DJ LINK

| Item | Description |
| --- | --- |
| PRO DJ LINK interface | the network interface the CDJs and DJM are on. Auto-detect picks the side where CDJs are seen. |
| State | this interface's connection state. |
| Interface list | Refresh rereads the list; click it after plugging in an adapter. A chosen interface that is missing stays listed as "not present" and the engine runs on auto-detect meanwhile. |
| PRO DJ LINK auto start | turns PRO DJ LINK on when ORVIK starts. |
| Ports | the UDP ports PRO DJ LINK uses. ORVIK tells you when another program holds them. |

### TCNet

| Item | Description |
| --- | --- |
| Node Name | this computer's name on TCNet. %% is an automatic number; 8 characters at most. |
| TCNet interface | the network interface TCNet is sent on. |
| State | this interface's connection state. |
| Frame Rate | the frame rate of the timecode sent over TCNet. |
| TCNet mode | Auto waits when a server started earlier exists, Server always sends, Client never sends. |
| TCNET auto start | turns TCNET output on when ORVIK starts. |
| Ports | the UDP ports TCNet uses. |

### Mirror mode

| Item | Description |
| --- | --- |
| Serve mirror | lets ORVIK on another computer mirror this one. |
| Mirror another PC | shows the screen of ORVIK on another computer. |
| Mirror server | the server to mirror. Refresh searches again. |
| Ports | the TCP port mirroring uses. |

While mirroring, MIRROR and the server address replace the header's PRO DJ LINK and TCNET buttons; CONNECTING shows before and while reconnecting. A mirroring computer does not send TCNet. Clicking MIRROR opens the settings.

### Web viewer

| Item | Description |
| --- | --- |
| Web viewer | lets browsers on the same network see the deck screen and the cue call page (read only). |
| Port | the web viewer port. |
| Interface | the network interface the web viewer listens on. |
| State | the web viewer address and state; when on, the access code and a QR code. |

### Audio output

| Item | Description |
| --- | --- |
| Output device | the audio device for virtual deck sound. |
| Output channels | the output channels for virtual deck sound. |

### SMPTE Timecode output

| Item | Description |
| --- | --- |
| Frame Rate | the frame rate of LTC and MTC. |
| Latency compensation | ms added to the timecode; positive runs ahead. Shared by LTC, MTC and Art-Net, used to match a receiver's delay. |
| LTC: Layer A, Layer B, MASTER | the audio device and channel for each layer's LTC. |
| MASTER layer follows the master deck | with MASTER following A or B, when the CDJ master moves to the other layer's deck, MASTER moves to that layer too. |
| MTC MIDI output | the MIDI port for MTC. |

### Settings file

| Item | Description |
| --- | --- |
| Backup | saves the settings to a file (.orvikcfg) or loads one. Loading restarts ORVIK. History, set list and window positions are not in the file. 1.6 settings files load too; their OSC rows and DMX patch become OUTPUT nodes. |
| Reset | returns every setting to its default and restarts. |

### About

| Item | Description |
| --- | --- |
| Version | the current ORVIK version. |
| Check for updates | when on, checks for a new version after start and every 12 hours. |
| Pre-release notice | also announces pre-release versions. |
| Check now | checks right away; with a new version a download page button appears. |
| Copyright | the ORVIK and JUCE copyright and license notes, and a REPORT button for enquiries. |
| Open source | opens the folder of license files inside the app (on Windows it is unpacked to a temporary folder) or the open-source license guide. |

---

## 16. Trademarks and licenses

ORVIK is an independent compatibility tool. It is not AlphaTheta's official PRO DJ LINK Bridge nor TC Supply's ShowKontrol, and it implies no affiliation, sponsorship, certification or endorsement by AlphaTheta, Pioneer DJ, TC Supply or Resolume.

AlphaTheta, Pioneer DJ, CDJ, DJM, PRO DJ LINK, rekordbox, TC Supply, TCNet, ShowKontrol, Resolume, SMPTE and other product, technology and trademark names are used to describe compatibility. The rights to each mark belong to its owner. Art-Net™ Designed by and Copyright Artistic Licence.

ORVIK uses the JUCE 9 framework, the open-source components bundled with it and the fonts. The list and the license texts are in the **About** section of the settings window and in THIRD_PARTY_NOTICES. The app's terms of use are in BINARY_LICENSE.
