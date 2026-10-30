<p align="left">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/media/orvik-wordmark-dark.png">
    <img src="docs/media/orvik-wordmark-light.png" alt="ORVIK" width="340">
  </picture>
</p>

[한국어](#한국어), [English](#english)

[![License: Proprietary](https://img.shields.io/badge/license-proprietary-red.svg)](BINARY_LICENSE.md)
[![Version](docs/media/badge-version.svg)](CHANGELOG.md)
![Status: Beta](https://img.shields.io/badge/status-beta-yellow.svg)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgrey.svg)

## 한국어

CDJ와 DJM의 재생 정보를 조명, 영상 소프트웨어로 보내는 앱입니다.

- **받는 정보**: 템포, 비트, 재생 위치, 곡 정보, 큐, 웨이브폼, 믹서 상태 (PRO DJ LINK)
- **보내는 곳**: TCNet, SMPTE 타임코드(LTC, MTC, Art-Net), OSC, Art-Net / sACN DMX, MIDI

장비를 제어하지 않고 읽기만 합니다.

### 다운로드

[최신 릴리스](https://github.com/Zesminseok/ORVIK/releases/latest)에서 받으세요.

| 환경 | 파일 |
| --- | --- |
| macOS 13.3 이상 (Apple Silicon) | `mac-arm64.dmg` |
| Windows 10, 11 (x64) | `win-x64.exe` (설치 없이 실행) |

- Intel Mac에서는 [1.6.3](https://github.com/Zesminseok/ORVIK/releases/tag/v1.6.3)을 쓰세요.
- macOS에서 첫 실행이 막히면 **시스템 설정 → 개인정보 보호 및 보안 → 그래도 열기**를 누르세요.
- Windows에서 SmartScreen 경고가 뜨면 **추가 정보 → 실행**을 누르세요.
- 컴퓨터와 DJ 장비를 같은 네트워크에 연결하고, ORVIK에서 그 네트워크 인터페이스를 고르세요.
- 1.6의 설정은 2.0으로 옮겨지지 않습니다.

### 주요 기능

- **DECKS**: 덱과 믹서 상태, 웨이브폼, 큐
- **SMPTE OUT**: 레이어 A, B, MASTER의 LTC, MTC, Art-Net 타임코드
- **OUTPUT**: 덱과 믹서 값을 OSC, DMX, MIDI로 보내는 노드 편집기
- **SET LIST**: 곡별 타임코드 오프셋과 큐 편집
- **CUE CALL**: 그룹별 다음 큐 카운트다운, 음성 안내, 폰용 웹 페이지
- **SHORTCUT, MAP**: 키보드, MIDI, OSC, DMX로 ORVIK 조작
- 가상 덱, 웹 뷰어, 미러 모드, HISTORY, 7개 언어

### 베타와 후원

- 무료 베타이며 기간 제한이 없습니다.
- 후원은 자발적인 지원입니다. 후원해도 기능이 더 열리지 않습니다.
- 후원은 정식 제품의 구매나 예약이 아니며, 정식 버전이나 완성 시점을 보장하지 않습니다.

### 개인정보와 네트워크

인터넷으로 사용 기록을 보내지 않습니다. 로컬 네트워크에서는 다음을 주고받습니다.

| 기능 | 기본값 | 내용 |
| --- | --- | --- |
| PRO DJ LINK | 켜짐 | 'ORVIK' 장치로 참여해 곡 정보, 웨이브폼, 큐, 믹서 상태를 요청 |
| TCNet | 켜짐 | 곡 정보, 앨범아트, 재생 위치, BPM, 믹서 값을 보냄 |
| OUTPUT, SMPTE OUT | 꺼짐 | 정한 곳으로 OSC, DMX, MIDI, 타임코드를 보냄 |
| SHORTCUT 입력 | 꺼짐 | OSC(UDP 7700), Art-Net DMX(UDP 6454)를 받음 |
| 웹 뷰어 | 꺼짐 | TCP 8877, 4글자 코드, 암호화 없는 HTTP |
| 미러 | 켜짐 | CDJ가 없으면 같은 네트워크의 미러 서버에 자동 연결 (서버 제공은 꺼짐, TCP 8878) |
| 업데이트 확인 | 켜짐 | 12시간마다 GitHub에 최신 버전을 물음 (앱 버전만 보냄) |

- 음성 안내는 컴퓨터의 시스템 목소리로 만들며 밖으로 보내지 않습니다.
- 설정 폴더: macOS `~/Library/Application Support/com.zesminseok.orvik`, Windows `%APPDATA%\Zesminseok\ORVIK`
- HISTORY와 SET LIST는 앱을 새로 켜면 비워집니다. 남기려면 종료 전에 내보내세요.

### 로그

- 기본으로 꺼져 있습니다.
- 켜는 법: 설정의 정보 섹션에서 **Option+Shift+A** (Windows **Alt+Shift+A**), **로그 캡처** 켜기
- 로그에는 곡 제목, 장비 이름, IP, MAC이 들어갈 수 있습니다. 이슈에 올리기 전에 확인하세요.
- 시간당 1GB 가까이 쌓일 수 있으니 다 쓰면 끄세요.

### 문서

- 사용 설명서: [한국어](docs/manual/ORVIK-manual-ko.md), [English](docs/manual/ORVIK-manual-en.md), [日本語](docs/manual/ORVIK-manual-ja.md), [Español](docs/manual/ORVIK-manual-es.md), [Deutsch](docs/manual/ORVIK-manual-de.md), [Français](docs/manual/ORVIK-manual-fr.md), [繁體中文](docs/manual/ORVIK-manual-zh-TW.md)
- [변경 내역](CHANGELOG.md), [앱 이용 조건](BINARY_LICENSE.md), [문서 이용 조건](LICENSE), [서드파티 고지](THIRD_PARTY_NOTICES.md)
- 1.6.x의 FFmpeg 자료: [FFmpeg 안내](docs/third-party/FFMPEG.md) (2.0은 FFmpeg를 쓰지 않습니다)

### 문의

[GitHub Issues](https://github.com/Zesminseok/ORVIK/issues), [Instagram @zes_minseok](https://instagram.com/zes_minseok)

<sub>ORVIK는 AlphaTheta, Pioneer DJ, TC Supply, Resolume과 관계없는 독립 호환 도구입니다. 제품명과 상표는 호환 대상을 설명하기 위해서만 씁니다. 이 저장소는 문서와 배포 파일만 제공합니다. Art-Net™ Designed by and Copyright Artistic Licence.</sub>

---

## English

An app that sends playback information from CDJs and DJMs to lighting and video software.

- **Reads**: tempo, beat, playback position, track info, cues, waveforms, mixer state (PRO DJ LINK)
- **Sends to**: TCNet, SMPTE timecode (LTC, MTC, Art-Net), OSC, Art-Net / sACN DMX, MIDI

It only reads the hardware; it never controls it.

### Download

Get it from the [latest release](https://github.com/Zesminseok/ORVIK/releases/latest).

| System | File |
| --- | --- |
| macOS 13.3 or later (Apple Silicon) | `mac-arm64.dmg` |
| Windows 10/11 (x64) | `win-x64.exe` (portable, no installation) |

- On an Intel Mac, use [1.6.3](https://github.com/Zesminseok/ORVIK/releases/tag/v1.6.3).
- If macOS blocks the first launch, choose **System Settings → Privacy & Security → Open Anyway**.
- If Windows SmartScreen warns, choose **More info → Run anyway**.
- Connect the computer and the DJ hardware to the same network, then pick that network interface in ORVIK.
- 1.6 settings are not carried over to 2.0.

### Features

- **DECKS**: deck and mixer state, waveforms, cues
- **SMPTE OUT**: LTC, MTC and Art-Net timecode for layers A, B and MASTER
- **OUTPUT**: a node editor that sends deck and mixer values as OSC, DMX and MIDI
- **SET LIST**: per-track timecode offsets and a cue editor
- **CUE CALL**: next-cue countdown per group, spoken calls, a phone web page
- **SHORTCUT, MAP**: control ORVIK by keyboard, MIDI, OSC and DMX
- Virtual decks, web viewer, mirror mode, HISTORY, 7 languages

### Beta and contributions

- Free beta, no time limit.
- Contributions are voluntary support. Contributing does not unlock features.
- A contribution is not a purchase or preorder and does not guarantee a final version or a date.

### Privacy and network

No usage data is sent to the internet. On the local network ORVIK exchanges:

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

### Logs

- Off by default.
- To turn on: in the Info section of Settings press **Option+Shift+A** (Windows **Alt+Shift+A**), then enable **Log capture**.
- Logs can contain track titles, device names, IP and MAC addresses. Check them before attaching to an issue.
- They can grow to nearly 1 GB per hour; turn capture off when done.

### Documentation

- Manual: [English](docs/manual/ORVIK-manual-en.md), [한국어](docs/manual/ORVIK-manual-ko.md), [日本語](docs/manual/ORVIK-manual-ja.md), [Español](docs/manual/ORVIK-manual-es.md), [Deutsch](docs/manual/ORVIK-manual-de.md), [Français](docs/manual/ORVIK-manual-fr.md), [繁體中文](docs/manual/ORVIK-manual-zh-TW.md)
- [Changelog](CHANGELOG.md), [Application license](BINARY_LICENSE.md), [Documentation license](LICENSE), [Third-party notices](THIRD_PARTY_NOTICES.md)
- FFmpeg materials for 1.6.x: [FFmpeg notes](docs/third-party/FFMPEG.md) (2.0 does not use FFmpeg)

### Contact

[GitHub Issues](https://github.com/Zesminseok/ORVIK/issues), [Instagram @zes_minseok](https://instagram.com/zes_minseok)

<sub>ORVIK is an independent compatibility tool, not affiliated with AlphaTheta, Pioneer DJ, TC Supply or Resolume. Product names and trademarks are used only to describe compatibility. This repository provides documentation and release files only. Art-Net™ Designed by and Copyright Artistic Licence.</sub>
