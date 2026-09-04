# Changelog

All notable changes to ORVIK are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/);
versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## 1.5.5 (2026-09-04)

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
