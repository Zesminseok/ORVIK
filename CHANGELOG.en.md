# Changelog

[한국어](CHANGELOG.md) | **English**

Changes in public releases. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).<br>
Downloads are on the [latest release](https://github.com/Zesminseok/ORVIK/releases/latest) page.

## [2.0.2] - 2026-10-31

### Fixed

- Art-Net DMX to a program on the same computer (for example Resolume) did not go out when the Art-Net interface was lo0 (127.0.0.1).

## [2.0.1] - 2026-10-30

### Fixed

- In release builds the SMPTE OUT ART (Art-Net timecode) button did not turn on, and a saved ART setting was switched off.
- The SHORTCUT page of release builds did not show the DMX (Art-Net) input section and column.
- The MAP view of release builds updated DMX bindings late.

### Changed

- Smaller capture logs: packets that repeat a device's previous one are written as the bytes that changed, so the same session writes about 60% less.

## [2.0.0] - 2026-10-30

ORVIK 2.0 is a native app (C++ / JUCE) that replaces the Electron app. It starts in under a second, uses far less memory and CPU, and keeps every feature of 1.6. macOS 13.3 or later (Apple Silicon), Windows 10/11 (x64). There is no Intel Mac build.

### Added

- OUTPUT node editor replacing the OSC page and the Art-Net DMX patch. Deck and mixer values go through transforms (range, shape, invert, free run, time format, maths) to OSC, Art-Net / sACN DMX, MIDI CC and MIDI Note. Existing OSC rows and DMX patches are converted on first start.
- SET LIST cue editor: cues on each track (name, time, bar.beat, group, actions: OSC, Art-Net DMX, MIDI, wait) with a waveform from the audio file, HISTORY or the CDJ, snap to beat, bar or frame, rekordbox hot cue import.
- CUE CALL window: each group's next cue, a timeline and the time left in seconds and bar.beat; board and layers themes; docked in the main window or separate; a web page (`/cuecall`) for phones and tablets.
- Spoken cue calls through the system voices (macOS, Windows): "group, cue name, standby", "three, two, one, go" on the beat, per-group output device, beat clicks. The calls follow the chosen voice's language.
- SHORTCUT page and MAP: keyboard, MIDI, OSC and DMX (Art-Net) control of ORVIK, with MIDI OUT feedback; MAP binds a control by clicking it.
- Art-Net timecode and DMX output with ORVIK's registered OEM code.
- Start and shutdown splash; HISTORY and SET LIST autosave with a restore prompt after an abnormal exit.
- Waveforms drawn on the GPU; CDJ-3000 3band waveforms as on the deck screen.

### Changed

- Rebuilt as a native app. 2.0 keeps its settings in a new folder, so 1.6 settings are not carried over.
- Windows text is drawn with DirectWrite (crisp small labels).
- Third-party components are those of the native app (JUCE 9 and its bundled libraries, curl, zlib, the fonts). The Electron, Chromium and FFmpeg notices do not apply to 2.0.

### Changes from the unreleased Electron builds after 1.6.3 (included in 2.0)

#### Fixed

- Previous track's title, waveform and SET LIST offset staying when a track with the same number was loaded from another CDJ's USB.
- Titles and waveforms showing late when tracks were loaded in quick succession.
- Hot cues deleted on the CDJ staying on screen.
- PRO DJ LINK joining late or dropping when devices were switched on later or a network adapter was reconnected.
- Timecode jumping when the computer clock was set automatically.
- False LINK LOST after a brief screen freeze.
- Web viewer and mirror screen stuttering on Wi-Fi or freezing when a track was loaded.
- Virtual deck track title and BPM changing to the previous file's values.

#### Changed

- PRO DJ LINK and TCNet can be switched on and off separately, each with its own auto-start setting.
- HISTORY and SET LIST start fresh at every launch. After an abnormal exit, ORVIK asks whether to restore them.
- HISTORY also records replayed tracks and virtual deck tracks.
- The BPM to OSC page became the OSC page, and in 2.0 the OUTPUT node editor. Existing settings carry over.
- CDJ-3000 3band waveforms look like the deck screen, and detail waveforms without colour data are coloured too.
- MASTER BPM follows the on-air deck when there is no CDJ master.
- Virtual decks no longer open MKV, DTS and AC3 files (the external FFmpeg conversion path was removed).
- UI and wording tidy-up (sidebar, mixer channel colours, loop display, MIRROR while mirroring).

#### Added

- SET LIST: per-track SMPTE offsets applied automatically, list import and export (including ShowKontrol files).
- Settings backup (`.orvikcfg`), restore and reset.
- Virtual decks: ALAC (.m4a) and .fla files, and a virtual mode screen with play, CUE and eject buttons.
- rekordbox cue comments.
- Web viewer: access code remembered for 12 hours, display zoom, overview strip.
- Undo for OSC and SET LIST edits.
- Notice when another program uses the PRO DJ LINK ports.
- Tooltips for every control (7 languages).

### Known limits

- Beta. LTC, MTC and Art-Net timecode have been checked against receivers in the studio, not on every console: test before a show.
- The macOS app is signed with a Developer ID and notarized by Apple. The Windows `.exe` is not code-signed.

## 1.x (Electron)

<details>
<summary>Show changes in 1.5.0 to 1.6.3</summary>

### 1.6.3 - 2026-09-25

#### Changed

- Terms of use: during the beta ORVIK may be used on several devices you own or control, and the Korean original prevails if the Korean and English versions differ in meaning.
- No first-run record is kept while there is no time limit; records left by earlier builds are removed.
- Settings > Info shows the FFmpeg notice, plus a button that opens the licence files bundled with the app.

### 1.6.2 - 2026-09-25

#### Fixed

- Detail waveform of a stopped deck showing blank past a point.
- Mixer VU levels and CLIP not matching the DJM.
- 60 FPS setting not drawing at 60 FPS.
- Clashing with a TCNet node that was switched on first.
- Previous track's phrases staying after loading a new track.
- SMPTE READY not starting when play was pressed with the fader already up.
- Track info showing late for tracks loaded before the app started.
- Web viewer showing pitch with a bpm unit.

#### Changed

- Hardware detail waveform draws every point in each pixel.
- Web viewer draws hardware waveforms the same as the app.
- UI and theme fixes (FLOW pin, checkboxes, SMPTE dock).
- CDJ and DJM controls named as in the manuals (PRO DJ LINK, SOUND COLOR FX, BALANCE and others).

#### Added

- Media chip: the USB or SD a track is on, in its rekordbox media colour with the player number.
- Per-channel CLIP on the mixer.
- CDJ-3000 phrase fill-ins on the waveform.
- SMPTE: M follows the CDJ sync master between A and B.
- SMPTE: READY starts the freewheel when the first track goes out.
- SMPTE dock reopens as it was left.
- Update notice: a new release shows in the header (checked every 12 hours, can be turned off in settings).

### 1.6.1 - 2026-09-21

#### Fixed

- LTC read a few frames late at the receiver.
- Next track showing late while waiting on a CDJ-2000NXS2 waveform.
- CDJ-2000NXS2 refusing requests made with a live deck's player number.
- PRO DJ LINK not joining with no mixer, or with a mixer switched on later.
- Track info, cues and waveform cutting out when requests overlapped on one deck.
- Settings window borders drawn twice.

#### Changed

- SMPTE output moved to a dock at the bottom of the window — on every tab, collapsible.
- Master output sources: A, B, system clock, freewheel.
- Offset set by hour, minute, second and frame buttons (hold Ctrl for ten), and can be switched off.

#### Added

- SMPTE output in its own window, with its own title bar on Windows.

### 1.6.0 - 2026-09-20

#### Fixed

- Korean, Chinese and Japanese track titles garbled in the app and in Resolume Arena.
- Last track loading late after skipping through tracks quickly.
- LTC and MTC timecode output behaviour.
- Hot cue during a loop; loop cue and memory cue display.
- UI and theme fixes (dark theme readability, FLOW, mixer, waveform, web viewer).

#### Added

- Light colour scheme for outdoor use (app and web viewer).
- Web viewer: Dark/Light switch and phrase band.
- STOP confirmation dialog.

### 1.5.8 - 2026-09-10

#### Fixed

- Mixer data stopping for good after a network interface change.
- Fader moves reaching Resolume at only 5 fps.
- White detail waveform right after a deck reconnects.
- Korean wording in settings, and the history tab tips in every language.
- Mixer tooltips showing in Korean whatever the language setting.

#### Changed

- The BPM page is now BPM to OSC: matching icon, uppercase source, beat number instead of decimals.
- With no master set, OSC tempo follows a deck that is playing and on air first.
- Electron 44.3.0.

#### Added

- History tab: real clock times, deck numbers, live rows and CSV export.

### 1.5.7 - 2026-09-07

#### Fixed

- Slow waveforms when a CDJ-3000X plays from another deck's USB.
- Detail waveform stuck in the 2D fallback after a deck rebuild.
- DJM-V10 on-air flags.
- Titles cut short at an en dash.

#### Added

- Phrase bars from CDJ-3000X.

### 1.5.6 - 2026-09-06

#### Fixed

- Waveform missing after a track reload or USB swap.
- Broken-image icon on the overview after a theme change.
- White waveform while resizing the window.
- Hangul titles cut short.
- Deck clearing when a CDJ-3000X renumbers its slot.

#### Changed

- Faster waveform loading.
- Artist names in the title colour.
- One placeholder dash for a missing title or artist.

#### Added

- FLOW: up to four hero decks in two columns above 1280 px.

### 1.5.5 - 2026-09-04

#### Changed

- Log capture can be turned on in release builds from the hidden menu (Alt+Shift+A).

#### Added

- FLOW: play-state icon on dock decks.

### 1.5.4 - 2026-09-04

#### Fixed

- Waveforms going blank.
- A VPN interface being picked for PRO DJ LINK.
- Phrase data from rekordbox.
- Status icons misaligned on Windows.

#### Changed

- SYNC shows BPM sync on CDJ-3000.
- FLOW theme layout.
- Badge styling.
- Decks fade in.
- Korean wording.

### 1.5.3 - 2026-08-30

#### Fixed

- Waveform preview on touchscreens.
- Long-press opening the colour palette over the preview.

#### Changed

- Deck colour palette opens from the player number.

### 1.5.2 - 2026-08-30

#### Fixed

- Resolume Arena quitting on album art.
- Remaining time and progress bar not showing.
- Old album art staying after a track change.
- A deck with no track showing another deck's track.
- Overview waveform and beat grid missing in some setups.
- Mirror mode showing NO LINK.
- Mirror mode repeating the TCNet warning.
- Deck count in the status bar.
- Deck VU meters.

#### Changed

- BAR counter: bolder, click for seconds, red within 8 bars of the next cue.
- No zoom on FLOW role changes.
- No shadows or glows.
- Traditional Chinese (Taiwan).
- STOP asks first while transmitting.
- Electron 44.

#### Added

- Waveform preview: hold the overview to look at that part of the track.
- FLOW pin button.
- Web viewer: 4-character code, network interface choice, signal-loss indicator.

### 1.5.1 - 2026-08-09

#### Fixed

- Position jumping after a track change and on unanalysed tracks.
- Network: VPN and virtual adapters, venue IP ranges, TCNet port conflicts.

#### Changed

- Smoother FLOW theme transitions.
- Disconnected CDJs clear after 10 seconds and return on reconnect.
- Alignment and waveform polish.

### 1.5.0 - 2026-08-03

#### Fixed

- Track title and artist display (Korean titles, CDJ-3000 packet variants).
- Loop in/out points match the hardware.
- Time display jitter while stopped.
- CDJ-2000NXS2 cue point updates.

#### Changed

- Mixer VU recalibrated to the DJM's 15 LEDs; fader/VU mini display in FLOW and STRIP.
- TCNet: no transmit without hardware; a mirror machine restarting does not affect the server.
- Port and temp file cleanup on exit.

#### Added

- Mirror mode: show another ORVIK on the network — decks, mixer, waveforms, cues, artwork — with server discovery and auto-reconnect.

</details>

[2.0.2]: https://github.com/Zesminseok/ORVIK/releases/tag/v2.0.2
[2.0.1]: https://github.com/Zesminseok/ORVIK/releases/tag/v2.0.1
[2.0.0]: https://github.com/Zesminseok/ORVIK/releases/tag/v2.0.0
