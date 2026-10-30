<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/media/orvik-wordmark-dark.png">
  <img src="docs/media/orvik-wordmark-light.png" alt="ORVIK" width="300">
</picture>

[![Version](docs/media/badge-version.svg)](CHANGELOG.md)
![Status: Beta](https://img.shields.io/badge/status-beta-yellow.svg)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgrey.svg)
[![License: Proprietary](https://img.shields.io/badge/license-proprietary-red.svg)](BINARY_LICENSE.md)

[한국어](README.md) | **English**

[Download](https://github.com/Zesminseok/ORVIK/releases/latest) | [Manual](docs/manual/ORVIK-manual-en.md) | [Changelog](CHANGELOG.md#english) | [Issues](https://github.com/Zesminseok/ORVIK/issues)

<img src="docs/media/orvik-2.0-decks.png" alt="ORVIK deck screen" width="900">

</div>

## What it does

ORVIK reads tempo, beat, playback position, track info, cues, waveforms and mixer state from CDJs and DJMs on a
PRO DJ LINK network and sends them out as TCNet, SMPTE timecode, OSC, DMX and MIDI. It only reads the hardware; 
it never controls it.

2.0 is a new native app (C++ / JUCE). It starts in under a second and is far lighter than 1.6.

## Features

| Feature | What |
| --- | --- |
| **DECKS** | deck and mixer state, waveforms and cues at a glance |
| **SMPTE OUT** | LTC, MTC and Art-Net timecode for layers A, B and MASTER |
| **OUTPUT** | a node editor that sends deck and mixer values as OSC, Art-Net / sACN DMX and MIDI |
| **SET LIST** | per-track timecode offsets and a cue editor |
| **CUE CALL** | next-cue countdown per group, spoken calls, a phone web page |
| **SHORTCUT, MAP** | control ORVIK by keyboard, MIDI, OSC and DMX |

Also: virtual decks, web viewer, mirror mode, HISTORY and 7 languages.

## Install

Get the file for your system from the [latest release](https://github.com/Zesminseok/ORVIK/releases/latest).

| System | File |
| --- | --- |
| macOS 13.3 or later (Apple Silicon) | `mac-arm64.dmg` |
| Windows 10/11 (x64) | `win-x64.exe` (portable, no installation) |

1. On macOS, open the DMG and move ORVIK to Applications. On Windows, run the `.exe`.
2. Connect the computer and the DJ hardware to the same network.
3. In ORVIK's settings, pick that network interface.

> [!NOTE]
> On an Intel Mac, use [1.6.3](https://github.com/Zesminseok/ORVIK/releases/tag/v1.6.3). 1.6 settings are not carried over to 2.0.

> [!TIP]
> The macOS app is notarized by Apple. If Windows SmartScreen warns, choose **More info → Run anyway**.

> [!IMPORTANT]
> Beta. Check timecode and outputs with your actual receivers before a show.

## Privacy and network

ORVIK sends no usage data to the internet.

<details>
<summary>What ORVIK exchanges on the local network</summary>

<br>

| Feature | Default | What |
| --- | --- | --- |
| PRO DJ LINK | on | joins as a device named "ORVIK" and requests track info, waveforms, cues, mixer state |
| TCNet | on | sends track info, artwork, position, BPM, mixer values |
| OUTPUT, SMPTE OUT | off | sends OSC, DMX, MIDI and timecode where you set |
| SHORTCUT input | off | receives OSC (UDP 7700) and Art-Net DMX (UDP 6454) |
| Web viewer | off | TCP 8877, 4-character code, unencrypted HTTP |
| Mirror | on | connects to a mirror server on the same network when this PC has no CDJ (serving is off, TCP 8878) |
| Update check | on | asks GitHub for the latest version every 12 hours (sends only the app version) |

- Spoken calls are made with the system voices; no text leaves the computer.
- Settings folder: macOS `~/Library/Application Support/com.zesminseok.orvik`, Windows `%APPDATA%\Zesminseok\ORVIK`
- HISTORY and SET LIST start empty at each launch. Export them before quitting to keep them.

</details>

<details>
<summary>Recording a log</summary>

<br>

1. In the Info section of Settings, press **Option+Shift+A** (Windows **Alt+Shift+A**).
2. Turn on **Log capture** and reproduce the problem.
3. Turn it off when done. It can grow to nearly 1 GB per hour.

Logs can contain track titles, device names, IP and MAC addresses. Check them before attaching to an issue.

</details>

## Documentation

- Manual: [English](docs/manual/ORVIK-manual-en.md), [한국어](docs/manual/ORVIK-manual-ko.md), [日本語](docs/manual/ORVIK-manual-ja.md), [Español](docs/manual/ORVIK-manual-es.md), [Deutsch](docs/manual/ORVIK-manual-de.md), [Français](docs/manual/ORVIK-manual-fr.md), [繁體中文](docs/manual/ORVIK-manual-zh-TW.md)
- [Changelog](CHANGELOG.md#english)
- FFmpeg materials for 1.6.x: [FFmpeg notes](docs/third-party/FFMPEG.md) (2.0 does not use FFmpeg)

## Support

ORVIK is a free beta with no time limit. Contributions are voluntary support for development and do not unlock
features. A contribution is not a purchase or preorder and does not guarantee a final version or a date.

## Contact

- Bugs and requests: [GitHub Issues](https://github.com/Zesminseok/ORVIK/issues)
- Instagram: [@zes_minseok](https://instagram.com/zes_minseok)

## License

[Application license](BINARY_LICENSE.md), [Documentation license](LICENSE), [Third-party notices](THIRD_PARTY_NOTICES.md)

This repository provides documentation and release files only; the application source code is not public.

<sub>ORVIK is an independent compatibility tool, not affiliated with AlphaTheta, Pioneer DJ, TC Supply or Resolume. Product names and trademarks are used only to describe compatibility. Art-Net™ Designed by and Copyright Artistic Licence.</sub>
