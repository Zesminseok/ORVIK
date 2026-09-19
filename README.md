<p align="left">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/media/orvik-wordmark-dark.png">
    <img src="docs/media/orvik-wordmark-light.png" alt="ORVIK" width="340">
  </picture>
</p>

[한국어](#한국어) · [English](#english)

[![License: Proprietary](https://img.shields.io/badge/license-proprietary-red.svg)](BINARY_LICENSE.md)
[![Version](docs/media/badge-version.svg)](CHANGELOG.md)
![Status: Demo](https://img.shields.io/badge/status-demo-yellow.svg)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgrey.svg)

## 한국어

ORVIK는 PRO DJ LINK 네트워크의 CDJ·DJM에서 템포, 비트, 재생 위치, 트랙 정보를 받아 TCNet으로 Resolume 등 호환 소프트웨어에 전달하는 앱입니다. 장비에 데이터 요청을 보내지만 재생·큐·템포를 제어하지 않습니다.

현재 개발 중인 **무료 데모**로 공개하고 있습니다. 후원은 개발을 돕기 위한 자발적인 선택입니다. **후원으로 기능이 열리거나 사용 제한이 해제되지 않으며**, 후원 여부와 관계없이 같은 데모 기능을 사용할 수 있습니다. 현재 데모에는 기간 제한이 없습니다. 후원은 정식 제품의 구매나 예약 구매가 아니며, 정식 버전의 제공 또는 완성 시점을 보장하지 않습니다.

### 다운로드 및 실행

[최신 릴리스](https://github.com/Zesminseok/ORVIK/releases/latest)에서 운영체제에 맞는 파일을 받으세요.

ORVIK는 LGPL-2.1-or-later의 FFmpeg 라이브러리를 사용합니다. [FFmpeg 소스·라이선스·교체 안내](docs/third-party/FFMPEG.md)에서 해당 Electron 버전의 자료를 확인하세요.

| 환경 | 파일 |
| --- | --- |
| macOS 13 이상 · Apple Silicon | `mac-arm64.dmg` |
| macOS 13 이상 · Intel | `mac-x64.dmg` |
| Windows 10·11 · x64 | `win-x64.exe` · 설치 없이 실행 |

**macOS:** DMG를 열어 ORVIK를 응용 프로그램으로 옮기세요. 현재 배포본은 Apple Developer ID 서명·공증이 없어 첫 실행이 차단될 수 있습니다. 위 릴리스에서 받은 앱인지 확인한 뒤, 한 번 실행하고 **시스템 설정 → 개인정보 보호 및 보안 → 그래도 열기**를 선택하세요. 자세한 절차는 [Apple 안내](https://support.apple.com/ko-kr/102445)를 참고하세요.

**Windows:** 내려받은 `.exe`를 실행하세요. SmartScreen 경고가 표시되면 출처를 확인한 뒤 **추가 정보 → 실행**을 선택할 수 있습니다. 조직에서 관리하는 PC에서는 관리자 정책이 적용될 수 있습니다.

컴퓨터와 DJ 장비를 같은 로컬 네트워크에 연결하고 ORVIK에서 해당 네트워크 인터페이스를 선택하세요. macOS의 로컬 네트워크 접근 요청은 허용하고, Windows 방화벽에서는 신뢰하는 공연용 개인 네트워크에 한해 ORVIK 통신을 허용하세요.

### 주요 기능

- 장비의 덱·믹서 상태, 트랙 정보, 큐, 웨이브폼, 앨범아트 표시
- TCNet 출력과 BPM to OSC
- 로컬 오디오 파일을 재생하는 가상 덱
- 같은 네트워크에서 확인하는 웹 뷰어와 다른 ORVIK 화면을 표시하는 미러 모드
- HISTORY 재생 기록과 CSV 내보내기

장비·펌웨어·연결 구성에 따라 수신 가능한 정보가 다릅니다. LTC·MIDI Clock·MTC 출력은 실제 수신 장비에서의 검증이 완료되지 않았으므로 공연에 사용하기 전에 전체 연결을 확인하세요.

### 데이터와 로그

ORVIK는 장비 발견과 메타데이터·웨이브폼·믹서 상태 수신에 필요한 네트워크 통신을 합니다. TCNet·OSC 출력이나 웹 뷰어·미러 모드를 사용하면 관련 정보가 설정된 수신 대상이나 연결된 클라이언트에 전달됩니다.

HISTORY 기록은 컴퓨터에 저장되며 CSV로 내보낼 수 있습니다. 가상 덱은 사용자가 선택한 로컬 파일을 읽고, 재생 방식에 따라 임시 WAV를 만들 수 있습니다. 임시 파일은 정상 종료 시 정리되지만 비정상 종료 시 남을 수 있습니다.

로그는 기본으로 꺼져 있습니다. 문제를 기록하려면 다음 순서로 진행하세요.

1. 설정의 정보(Info) 섹션에서 **Option+Shift+A**(macOS) 또는 **Alt+Shift+A**(Windows)를 누릅니다.
2. **로그 캡처(Log capture)**를 켜고 표시된 저장 폴더를 확인합니다. **선택(Choose)**으로 위치를 바꿀 수 있습니다.
3. 시작 과정까지 기록하려면 ORVIK를 다시 실행한 뒤 문제를 재현합니다.
4. 로그가 여러 파일로 나뉘었다면 해당 시간대의 파일을 함께 보관합니다.

로그에는 곡 제목, 장비 이름, 네트워크 주소 등이 포함될 수 있습니다. 공개 이슈에 첨부하기 전에 내용을 확인하고 공유할 필요가 없는 정보는 가려 주세요.

### 문서와 문의

[변경 내역](CHANGELOG.md) · [앱 이용 조건](BINARY_LICENSE.md) · [문서 이용 조건](LICENSE) · [서드파티 고지](THIRD_PARTY_NOTICES.md)

문의: [GitHub Issues](https://github.com/Zesminseok/ORVIK/issues) · [Instagram @zes_minseok](https://instagram.com/zes_minseok)

이 저장소는 문서와 배포 파일을 제공하며 앱 소스 코드는 공개하지 않습니다. ORVIK는 AlphaTheta·Pioneer DJ·TC Supply와 제휴하거나 해당 업체의 인증을 받은 제품이 아닙니다. 제품명과 상표는 호환 대상을 설명하기 위해 사용합니다.

---

## English

ORVIK receives tempo, beats, playback position and track information from CDJs and DJMs on a PRO DJ LINK network, then sends it to compatible software such as Resolume over TCNet. It sends data requests to the hardware but does not control playback, cues or tempo.

ORVIK is currently available as a **free demo under development**. Contributions are voluntary support for development. **Contributing does not unlock features or remove usage restrictions**; everyone has access to the same demo features whether or not they contribute. The current demo has no time limit. A contribution is not a purchase or preorder of a finished product and does not guarantee a final release or a completion date.

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
- Virtual decks for local audio files
- A web viewer on the same network and mirror mode for displaying another ORVIK instance
- HISTORY playback records and CSV export

Available data depends on the hardware, firmware and network setup. LTC, MIDI Clock and MTC output validation with physical receivers is not complete; check the full signal path before using them in a show.

### Data and logs

ORVIK communicates over the network to discover hardware and receive metadata, waveforms and mixer state. When you use TCNet or OSC output, the web viewer or mirror mode, relevant information is sent to the configured recipients or connected clients.

HISTORY records are stored on the computer and can be exported to CSV. Virtual decks read local files selected by the user and may create temporary WAV files depending on the playback path. Temporary files are cleaned up on normal exit but may remain after an abnormal exit.

Logging is off by default. To record a problem:

1. Open the Info section in Settings and press **Option+Shift+A** on macOS or **Alt+Shift+A** on Windows.
2. Enable **Log capture** and check the displayed folder. Use **Choose** to change it.
3. Restart ORVIK before reproducing the problem if you need to capture startup as well.
4. If the log spans several files, keep the files covering the relevant period together.

Logs may contain track titles, device names and network addresses. Review them and redact information that does not need to be shared before attaching them to a public issue.

### Documentation and contact

[Changelog](CHANGELOG.md) · [Application license](BINARY_LICENSE.md) · [Documentation license](LICENSE) · [Third-party notices](THIRD_PARTY_NOTICES.md)

Contact: [GitHub Issues](https://github.com/Zesminseok/ORVIK/issues) · [Instagram @zes_minseok](https://instagram.com/zes_minseok)

This repository provides documentation and release downloads; the application source code is not public. ORVIK is not affiliated with or certified by AlphaTheta, Pioneer DJ or TC Supply. Product names and trademarks identify compatibility targets.
