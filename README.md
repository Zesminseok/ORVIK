<p align="left">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/media/orvik-wordmark-dark.png">
    <img src="docs/media/orvik-wordmark-light.png" alt="ORVIK" width="340">
  </picture>
</p>

[한국어](#한국어) · [English](#english)

[![License: Proprietary](https://img.shields.io/badge/license-proprietary-red.svg)](BINARY_LICENSE.md)
[![Version](docs/media/badge-version.svg)](CHANGELOG.md)
![Status: Beta](https://img.shields.io/badge/status-beta-yellow.svg)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgrey.svg)

## 한국어

ORVIK는 DJ 장비의 재생 정보를 Resolume 같은 VJ 소프트웨어로 보내 주는 앱입니다. PRO DJ LINK로 연결된 CDJ·DJM에서 정보를 받아 TCNet으로 전달하므로 DJ가 트는 음악에 영상을 맞출 수 있습니다. 장비의 재생·믹서 설정을 바꾸는 제어 명령은 보내지 않습니다.

현재 개발 중인 **무료 베타**로 공개하고 있습니다. 후원은 개발을 돕기 위한 자발적인 선택입니다. **후원으로 기능이 열리거나 사용 제한이 해제되지 않으며**, 후원 여부와 관계없이 같은 베타 기능을 사용할 수 있습니다. 현재 베타에는 기간 제한이 없습니다. 후원은 정식 제품의 구매나 예약 구매가 아니며, 정식 버전의 제공 또는 완성 시점을 보장하지 않습니다.

아래 기능과 동작 설명은 현재 개발 소스 기준입니다. 새 바이너리를 배포하기 전에는 최신 릴리스와 일부 차이가 있을 수 있습니다.

### 다운로드 및 실행

[최신 릴리스](https://github.com/Zesminseok/ORVIK/releases/latest)에서 운영체제에 맞는 파일을 받으세요.

ORVIK는 LGPL-2.1-or-later로 배포되는 FFmpeg 라이브러리를 사용합니다. 받은 릴리스의 Electron 버전에 맞는 자료는 [FFmpeg 소스·라이선스·교체 안내](docs/third-party/FFMPEG.md)에 있습니다.

| 환경 | 파일 |
| --- | --- |
| macOS 13 이상 · Apple Silicon | `mac-arm64.dmg` |
| macOS 13 이상 · Intel | `mac-x64.dmg` |
| Windows 10·11 · x64 | `win-x64.exe` · 설치 없이 실행 |

**macOS:** DMG를 열어 ORVIK를 응용 프로그램으로 옮기세요. 현재 배포본은 Apple Developer ID 서명·공증이 없어 첫 실행이 차단될 수 있습니다. 위 릴리스에서 받은 앱인지 확인한 뒤, 한 번 실행하고 **시스템 설정 → 개인정보 보호 및 보안 → 그래도 열기**를 선택하세요. 자세한 절차는 [Apple 안내](https://support.apple.com/ko-kr/102445)를 참고하세요.

**Windows:** 내려받은 `.exe`를 실행하세요. SmartScreen 경고가 표시되면 출처를 확인한 뒤 **추가 정보 → 실행**을 선택할 수 있습니다. 조직에서 관리하는 PC에서는 관리자 정책이 적용될 수 있습니다.

컴퓨터와 DJ 장비를 같은 로컬 네트워크에 연결하고 ORVIK에서 그 네트워크에 연결된 인터페이스를 선택하세요. macOS가 로컬 네트워크 접근을 물으면 허용하고, Windows 방화벽에서는 신뢰하는 공연용 개인 네트워크에 한해 ORVIK 통신을 허용하세요.

### 주요 기능

- 장비의 덱·믹서 상태, 트랙 정보, 큐, 웨이브폼, 앨범아트 표시
- TCNet 출력과 BPM to OSC
- PRO DJ LINK·TCNet 개별 실행과 자동 시작 설정
- SMPTE 타임코드 출력(LTC·MTC)
- 로컬 오디오 파일을 재생하는 가상 덱
- 같은 네트워크의 다른 기기에서 보는 웹 뷰어, 다른 PC의 ORVIK 덱·믹서 정보를 보여 주는 미러 모드
- HISTORY 재생 기록·내보내기, SET LIST와 곡별 SMPTE 오프셋
- 새 버전 알림(자동 설치 없음)
- 7개 언어 화면과 야외용 라이트 모드

장비·펌웨어·연결 구성에 따라 받을 수 있는 정보가 다릅니다. LTC·MTC 출력은 실제 수신 장비에서 검증을 마치지 않았으므로 공연에 쓰기 전에 전체 연결을 확인하세요.

### 데이터와 로그

ORVIK는 인터넷 서버에 사용 기록을 보내지 않습니다. 네트워크로는 다음 정보를 주고받습니다.

- **PRO DJ LINK**: 실행하면 로컬 네트워크에 'ORVIK'라는 장치로 참여해 장비를 찾고 곡 정보·웨이브폼·큐·믹서 상태를 요청합니다. 재생이나 믹서 설정을 바꾸는 명령은 보내지 않습니다.
- **TCNet 출력**(기본 켜짐): 같은 네트워크의 TCNet 수신 프로그램에 곡 제목·아티스트·앨범아트·재생 위치·BPM·믹서 값을 보냅니다. **BPM to OSC**(기본 꺼짐)는 BPM만 보냅니다.
- **가상 덱 곡 정보**(PRO DJ LINK가 실행 중일 때 TCP 12523·12524): 같은 네트워크의 장비가 가상 덱 곡의 정보와 앨범아트를 요청하면 답합니다.
- **웹 뷰어**(기본 꺼짐, TCP 8877): 같은 네트워크에서 영문자·숫자 4글자 코드나 QR로 여는 읽기 전용 화면입니다. 암호화하지 않은 HTTP이므로 신뢰하는 네트워크에서만 켜세요.
- **미러 모드**(기본 켜짐): 이 PC에 CDJ가 없으면 앱을 켤 때와 설정을 열 때 같은 네트워크 대역에서 미러 서버를 찾아 자동으로 연결합니다. 설정에서 **미러 서버 제공**(기본 꺼짐, TCP 8878)을 켜면 같은 네트워크의 다른 ORVIK가 접속 코드 없이 이 PC의 덱·믹서 정보를 볼 수 있습니다. 웹 뷰어나 미러 서버가 켜져 있으면 같은 네트워크에서 코드 없이 이 컴퓨터의 이름을 확인할 수 있습니다.
- **업데이트 확인**(기본 켜짐): 앱을 켤 때와 그 뒤 12시간마다 GitHub에 최신 릴리스 번호를 묻습니다. 요청에는 앱 버전만 담기고 GitHub에는 일반 웹 요청처럼 IP 주소가 전달됩니다. 설정의 정보 섹션에서 끌 수 있습니다.

설정과 창 위치는 이 컴퓨터의 ORVIK 데이터 폴더(macOS `~/Library/Application Support/ORVIK`, Windows `%APPDATA%\ORVIK`)에 저장됩니다. 설치 없이 실행하는 Windows 버전도 같은 폴더를 씁니다. HISTORY는 10초 넘게 온에어된 곡(덱, 제목, 아티스트, BPM, 키, 시각)을 이번 실행에서 최근 1,000곡까지 자동으로 기록합니다. HISTORY와 SET LIST는 정상적으로 앱을 새로 켜면 비워지고, 비정상 종료 뒤에는 복구 여부를 묻습니다. 기록을 계속 보관하려면 종료 전에 파일로 내보내세요. 앱을 완전히 지우려면 앱과 기본 데이터 폴더를 삭제하고, 따로 저장한 설정·기록 파일과 사용자 지정 로그 폴더도 필요에 따라 삭제하세요.

가상 덱은 사용자가 고른 로컬 오디오 파일을 읽습니다.

로그는 기본으로 꺼져 있습니다. 문제를 기록하려면 다음 순서로 진행하세요.

1. 설정의 정보(Info) 섹션에서 **Option+Shift+A**(macOS) 또는 **Alt+Shift+A**(Windows)를 누릅니다.
2. **로그 캡처**(Log capture)를 켜고 표시된 저장 폴더를 봐 둡니다. 위치를 바꾸려면 **선택**(Choose)을 누릅니다.
3. 시작 과정까지 기록하려면 ORVIK를 다시 실행한 뒤 문제를 재현합니다.
4. 로그가 여러 파일로 나뉘었다면 문제가 생긴 시간대의 파일을 함께 보관합니다.

로그 캡처는 끌 때까지 앱을 다시 켜도 계속 기록됩니다. 장비 구성에 따라 시간당 1GB 가까이 쌓일 수 있고 자동으로 지워지지 않으니, 필요한 기록을 남긴 뒤에는 꺼 두세요.

로그에는 곡 제목, 장비 이름, 네트워크 주소(IP·MAC), 받은 패킷의 원본 데이터가 포함될 수 있습니다. 공개 이슈에 첨부하기 전에 내용을 확인하고 공유할 필요가 없는 정보는 가려 주세요.

### 문서와 문의

[변경 내역](CHANGELOG.md) · [앱 이용 조건](BINARY_LICENSE.md) · [문서 이용 조건](LICENSE) · [서드파티 고지](THIRD_PARTY_NOTICES.md)

문의: [GitHub Issues](https://github.com/Zesminseok/ORVIK/issues) · [Instagram @zes_minseok](https://instagram.com/zes_minseok)

이 저장소는 문서와 배포 파일을 제공하며 앱 소스 코드는 공개하지 않습니다. ORVIK는 AlphaTheta·Pioneer DJ·TC Supply·Resolume과 제휴하거나 해당 업체의 인증을 받은 제품이 아닙니다. 제품명과 상표는 호환 대상을 설명하기 위해 사용합니다.

---

## English

ORVIK sends playback information from DJ equipment to VJ software such as Resolume. It receives information from CDJs and DJMs connected over PRO DJ LINK and passes it on over TCNet, so visuals can follow the music the DJ is playing. It does not send commands that change the equipment's playback or mixer settings.

ORVIK is currently available as a **free beta under development**. Contributions are voluntary support for development. **Contributing does not unlock features or remove usage restrictions**; everyone has access to the same beta features whether or not they contribute. The current beta has no time limit. A contribution is not a purchase or preorder of a finished product and does not guarantee a final release or a completion date.

The features and behavior below describe the current development source. Some details may differ from the latest release until a new binary is published.

### Download and run

Choose the file for your system from the [latest release](https://github.com/Zesminseok/ORVIK/releases/latest).

ORVIK uses FFmpeg libraries under LGPL-2.1-or-later. See [FFmpeg source, licenses and replacement instructions](docs/third-party/FFMPEG.md) for the matching Electron version.

| System | File |
| --- | --- |
| macOS 13 or later · Apple Silicon | `mac-arm64.dmg` |
| macOS 13 or later · Intel | `mac-x64.dmg` |
| Windows 10/11 · x64 | `win-x64.exe` · portable, no installation |

**macOS:** Open the DMG and move ORVIK to Applications. Current builds lack an Apple Developer ID signature and notarization, so macOS may block the first launch. Confirm that the app came from the release linked above, try opening it once, then select **System Settings → Privacy & Security → Open Anyway**. See [Apple's instructions](https://support.apple.com/en-us/102445) for details.

**Windows:** Run the downloaded `.exe`. If SmartScreen displays a warning, verify the source before choosing **More info → Run anyway**. Administrator policies may apply on managed computers.

Connect the computer and DJ hardware to the same local network and select that network interface in ORVIK. Allow local network access when macOS requests it. In Windows Firewall, allow ORVIK communication on your trusted private show network.

### Features

- Deck and mixer status, track information, cues, waveforms and artwork
- TCNet output and BPM to OSC
- Separate PRO DJ LINK and TCNet controls with auto-start settings
- SMPTE timecode output (LTC, MTC)
- Virtual decks for local audio files
- A web viewer for other devices on the same network, and mirror mode that shows another PC's ORVIK deck and mixer information
- HISTORY playback records and export, SET LIST and track-specific SMPTE offsets
- New-version notice (no automatic install)
- Seven UI languages and a light mode for outdoor use

Available data depends on the hardware, firmware and network setup. LTC and MTC output has not been fully verified with physical receivers; check the full signal path before using it in a show.

### Data and logs

ORVIK does not send usage data to any internet server. It exchanges the following over the network:

- **PRO DJ LINK**: when started, it joins the local network as a device named "ORVIK", finds the hardware and requests track information, waveforms, cues and mixer state. It never sends commands that change playback or mixer settings.
- **TCNet output** (on by default): sends track title, artist, artwork, playback position, BPM and mixer values to TCNet receivers on the same network. **BPM to OSC** (off by default) sends only the BPM.
- **Virtual deck track information** (TCP 12523 and 12524 while PRO DJ LINK is running): answers when hardware on the same network asks for a virtual deck track's information and artwork.
- **Web viewer** (off by default, TCP 8877): a read-only page on the same network, opened with a 4-character letter-and-digit code or a QR code. It uses unencrypted HTTP, so turn it on only on networks you trust.
- **Mirror mode** (on by default): if this PC has no CDJ, ORVIK looks for a mirror server on the same network range at launch and whenever Settings opens, and connects to it automatically. Turning on **Serve mirror** (off by default, TCP 8878) lets other ORVIK instances on the same network see this PC's deck and mixer data without an access code. While the web viewer or mirror server is on, this computer's name can be seen on the same network without a code.
- **Update check** (on by default): at launch and every 12 hours after that, ORVIK asks GitHub for the latest release number. The request carries only the app version, and GitHub sees your IP address as with any web request. You can turn it off in the Info section of Settings.

Settings and window positions are stored in ORVIK's data folder on this computer (macOS `~/Library/Application Support/ORVIK`, Windows `%APPDATA%\ORVIK`). The Windows version that runs without installation uses the same folder. HISTORY automatically records tracks that were on air for more than 10 seconds (deck, title, artist, BPM, key and time), up to the latest 1,000 in the current run. HISTORY and SET LIST start empty after a normal relaunch; after an abnormal exit, ORVIK asks whether to restore them. Export records before quitting if you want to keep them. To remove ORVIK completely, delete the app and its default data folder and, if needed, separately saved settings and records and any custom log folder.

Virtual decks read local audio files you choose.

Logging is off by default. To record a problem:

1. Open the Info section in Settings and press **Option+Shift+A** on macOS or **Alt+Shift+A** on Windows.
2. Enable **Log capture** and check the displayed folder. Use **Choose** to change it.
3. Restart ORVIK before reproducing the problem if you need to capture startup as well.
4. If the log spans several files, keep the files covering the relevant period together.

Log capture keeps recording across restarts until you turn it off. Depending on the setup it can grow to nearly 1 GB per hour and is never deleted automatically, so turn it off once you have what you need.

Logs may contain track titles, device names, network addresses (IP and MAC) and raw data from received packets. Review them and redact information that does not need to be shared before attaching them to a public issue.

### Documentation and contact

[Changelog](CHANGELOG.md) · [Application license](BINARY_LICENSE.md) · [Documentation license](LICENSE) · [Third-party notices](THIRD_PARTY_NOTICES.md)

Contact: [GitHub Issues](https://github.com/Zesminseok/ORVIK/issues) · [Instagram @zes_minseok](https://instagram.com/zes_minseok)

This repository provides documentation and release downloads; the application source code is not public. ORVIK is not affiliated with or certified by AlphaTheta, Pioneer DJ, TC Supply or Resolume. Product names and trademarks identify compatibility targets.
