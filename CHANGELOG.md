# Changelog

All notable changes to ORVIK are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/);
versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## 1.5.8 (2026-09-11)

**Fixes**

- Mixer data stopping for good after a network interface change.
- Fader moves reaching Resolume at only 5 fps.
- White detail waveform right after a deck reconnects.
- Korean wording in settings, mixer tooltips and the history tab.

**Changes**

- BPM to OSC panel: matching icon, uppercase source, beat number instead of decimals.
- OSC tempo follows a deck that is on air when no master is set.
- Electron 44.3.0.

**New**

- History tab: real clock times, deck numbers, live rows and CSV export.

---

## 1.5.7 (2026-09-07)

**Fixes**

- Slow waveforms when a CDJ-3000X plays from another deck's USB.
- Detail waveform stuck in the 2D fallback after a deck rebuild.
- DJM-V10 on-air flags.
- Titles cut short at an en dash.

**New**

- Phrase bars from CDJ-3000X.

---

## 1.5.6 (2026-09-06)

**Fixes**

- Waveform missing after a track reload or USB swap.
- Broken-image icon on the overview after a theme change.
- White waveform while resizing the window.
- Hangul titles cut short.
- Deck clearing when a CDJ-3000X renumbers its slot.

**Changes**

- Faster waveform loading.
- Artist names in the title colour.
- One placeholder dash for a missing title or artist.

**New**

- FLOW: up to four hero decks in two columns above 1280 px.

---

## 1.5.5 (2026-09-04)

**Changes**

- Log capture can be turned on in release builds from the hidden menu (Alt+Shift+A).

**New**

- FLOW: play-state icon on dock decks.

---

## 1.5.4 (2026-09-04)

**Fixes**

- Waveforms going blank.
- A VPN interface being picked for Pro DJ Link.
- Phrase data from rekordbox.
- Status icons misaligned on Windows.

**Changes**

- SYNC shows BPM sync on CDJ-3000.
- FLOW theme layout.
- Badge styling.
- Decks fade in.
- Korean wording.

---

## 1.5.3 (2026-08-30)

**Fixes**

- Waveform preview on touchscreens.
- Long-press opening the colour palette over the preview.

**Changes**

- Deck colour palette opens from the player number.

---

## 1.5.2 (2026-08-30)

**Fixes**

- Resolume Arena quitting on album art.
- Remaining time and progress bar not showing.
- Old album art staying after a track change.
- A deck with no track showing another deck's track.
- Overview waveform and beat grid missing in some setups.
- Mirror mode showing NO LINK.
- Mirror mode repeating the TCNet warning.
- Deck count in the status bar.
- Deck VU meters.

**Changes**

- BAR counter: bolder, click for seconds, red within 8 bars of the next cue.
- No zoom on FLOW role changes.
- No shadows or glows.
- Traditional Chinese (Taiwan).
- STOP asks first while transmitting.
- Electron 44.

**New**

- Waveform preview: hold the overview to look at that part of the track.
- FLOW pin button.
- Web viewer: 4-character code, network interface choice, signal-loss indicator.

---

## 1.5.1 (2026-08-09)

**Fixes**

- Position jumping after a track change and on unanalysed tracks.
- Network: VPN and virtual adapters, venue IP ranges, TCNet port conflicts.

**Changes**

- Smoother FLOW theme transitions.
- Disconnected CDJs clear after 10 seconds and return on reconnect.
- Alignment and waveform polish.

---

## 1.5.0 (2026-08-03)

**Fixes**

- Track title and artist display (Korean titles, CDJ-3000 packet variants).
- Loop in/out points match the hardware.
- Time display jitter while stopped.
- CDJ-2000NXS2 cue point updates.

**Changes**

- Mixer VU recalibrated to the DJM's 15 LEDs; fader/VU mini display in FLOW and STRIP.
- TCNet: no transmit without hardware; a mirror machine restarting does not affect the server.
- Port and temp file cleanup on exit.

**New**

- Mirror mode: show another ORVIK on the network — decks, mixer, waveforms, cues, artwork — with server discovery and auto-reconnect.
