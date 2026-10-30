<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/media/orvik-wordmark-dark.png">
  <img src="docs/media/orvik-wordmark-light.png" alt="ORVIK" width="300">
</picture>

[![Release](https://img.shields.io/github/v/release/Zesminseok/ORVIK?label=release&color=2ea44f)](https://github.com/Zesminseok/ORVIK/releases/latest)
![Status: Beta](https://img.shields.io/badge/status-beta-yellow.svg)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgrey.svg)
[![License: Proprietary](https://img.shields.io/badge/license-proprietary-red.svg)](BINARY_LICENSE.md)

[English](README.md) | **한국어**

[다운로드](https://github.com/Zesminseok/ORVIK/releases/latest) | [사용 설명서](docs/manual/ORVIK-manual-ko.md) | [변경 내역](CHANGELOG.ko.md) | [문의](https://github.com/Zesminseok/ORVIK/issues)

<img src="docs/media/shot-decks.png" alt="ORVIK 덱 화면" width="900">

</div>

## 소개

PRO DJ LINK로 연결된 CDJ와 DJM에서<br>
템포, 비트, 재생 위치, 곡 정보, 큐, 웨이브폼, 믹서 상태를 받아<br>
TCNet, SMPTE 타임코드, OSC, DMX, MIDI로 내보냅니다.

장비를 제어하지 않고 읽기만 합니다.

## 주요 기능

- **DECKS**: 덱과 믹서 상태, 웨이브폼, 큐를 한눈에
- **SMPTE OUT**: 레이어 A, B, MASTER의 LTC, MTC, Art-Net 타임코드
- **OUTPUT**: 덱과 믹서 값을 OSC, Art-Net / sACN DMX, MIDI로 보내는 노드 편집기
- **SET LIST**: 곡별 타임코드 오프셋과 큐 편집
- **CUE CALL**: 그룹별 다음 큐 카운트다운, 음성 안내, 휴대폰용 웹 페이지
- **SHORTCUT, MAP**: 키보드, MIDI, OSC, DMX로 ORVIK 조작

그 밖에 가상 덱, 웹 뷰어, 미러 모드, HISTORY, 7개 언어를 지원합니다.

## 스크린샷

<table>
<tr>
<td width="50%"><img src="docs/media/shot-cuecall-board.png" alt="CUE CALL 보드"><br><sub><b>CUE CALL 보드</b>: 그룹별 다음 큐와 남은 시간</sub></td>
<td width="50%"><img src="docs/media/shot-cuecall-layers.png" alt="CUE CALL 레이어"><br><sub><b>CUE CALL 레이어</b>: 마스터 덱 웨이브폼과 큐 타임라인</sub></td>
</tr>
<tr>
<td width="50%"><img src="docs/media/shot-smpte.png" alt="SMPTE OUT"><br><sub><b>SMPTE OUT</b>: 레이어 A, B, MASTER 타임코드</sub></td>
<td width="50%"><img src="docs/media/shot-output.png" alt="OUTPUT"><br><sub><b>OUTPUT</b>: OSC, DMX, MIDI 노드 편집기</sub></td>
</tr>
<tr>
<td width="50%"><img src="docs/media/shot-setlist.png" alt="SET LIST"><br><sub><b>SET LIST</b>: 타임코드 오프셋과 큐 편집</sub></td>
<td width="50%"><img src="docs/media/shot-mixer.png" alt="MIXER"><br><sub><b>MIXER</b>: DJM 상태 (DJM-900NXS2)</sub></td>
</tr>
</table>

## 설치

[최신 릴리스](https://github.com/Zesminseok/ORVIK/releases/latest)에서 운영체제에 맞는 파일을 받으세요.

| 운영체제 | 파일 |
| --- | --- |
| macOS 13.3 이상 (Apple Silicon) | `mac-arm64.dmg` |
| Windows 10, 11 (x64) | `win-x64.exe` (설치 없이 실행) |

1. macOS는 DMG를 열어 ORVIK를 응용 프로그램 폴더로 옮깁니다 (Apple 공증 완료).<br>
   Windows는 `.exe`를 바로 실행합니다.
2. 컴퓨터와 DJ 장비를 같은 네트워크에 연결합니다.
3. ORVIK 설정에서 그 네트워크 인터페이스를 선택합니다.

> [!NOTE]
> - Intel Mac 빌드는 없습니다.
> - 1.6 설정은 2.0으로 이전되지 않습니다.
> - Windows용 파일은 코드 서명이 없습니다.<br>SmartScreen 경고가 뜨면 **추가 정보 → 실행**을 누르세요.

> [!IMPORTANT]
> 베타 버전입니다.<br>
> 공연에 쓰기 전에 타임코드와 출력을 실제 수신 장비에서 꼭 확인하세요.

## 호환 장비

| 구분 | 내용 |
| --- | --- |
| 확인한 장비 | CDJ-3000X, CDJ-3000, CDJ-2000NXS2, DJM-V10, DJM-900NXS2 |
| 받는 쪽 | TCNet, SMPTE 타임코드(LTC, MTC, Art-Net), OSC, DMX(Art-Net, sACN), MIDI를 받는 프로그램과 장비 |

> [!TIP]
> 목록에 없는 장비는 아직 확인하지 않았습니다. 받을 수 있는 정보는 기종과 펌웨어에 따라 다릅니다.<br>
> 써 본 결과를 [Issues](https://github.com/Zesminseok/ORVIK/issues)에 남겨 주시면 반영하겠습니다.

## 문제 해결

| 증상 | 확인할 것 |
| --- | --- |
| 덱이 보이지 않고 NO LINK가 뜸 | 설정의 PRO DJ LINK 인터페이스가 CDJ와 같은 네트워크인지 확인하고 새로고침을 누릅니다. |
| Windows에서 장비가 보이지 않음 | Windows 방화벽이 ORVIK의 네트워크 접근을 막고 있지 않은지 확인합니다. |
| 다른 프로그램을 같이 켜면 연결되지 않음 | PRO DJ LINK 포트를 쓰는 프로그램이 있으면 ORVIK이 알려 줍니다. 그 프로그램을 끄고 PRO DJ LINK를 다시 켭니다. |
| 받는 쪽 타임코드가 맞지 않음 | ORVIK과 받는 장비의 프레임 레이트를 같게 맞춥니다. |

해결되지 않으면 아래 **문제를 로그로 남기기** 순서로 로그를 캡처해 [Issues](https://github.com/Zesminseok/ORVIK/issues)에 올려 주세요.

## 개인정보와 네트워크

ORVIK는 인터넷으로 사용 기록을 보내지 않습니다.

<details>
<summary>로컬 네트워크에서 주고받는 데이터</summary>

| 기능 | 기본값 | 내용 |
| --- | --- | --- |
| PRO DJ LINK | 켜짐 | 'ORVIK' 장치로 참여해<br>곡 정보, 웨이브폼, 큐, 믹서 상태를 요청 |
| TCNet | 켜짐 | 곡 정보, 앨범아트, 재생 위치, BPM, 믹서 값을 보냄 |
| OUTPUT, SMPTE OUT | 꺼짐 | 지정한 대상으로 OSC, DMX, MIDI, 타임코드를 보냄 |
| SHORTCUT 입력 | 꺼짐 | OSC(UDP 7700), Art-Net DMX(UDP 6454)를 받음 |
| 웹 뷰어 | 꺼짐 | TCP 8877, 4글자 코드, 암호화되지 않은 HTTP |
| 미러 | 켜짐 | CDJ가 없으면 같은 네트워크의 미러 서버에 자동 연결<br>(서버 기능은 꺼짐, TCP 8878) |
| 업데이트 확인 | 켜짐 | 12시간마다 GitHub에서 최신 버전을 확인<br>(앱 버전만 보냄) |

- 음성 안내는 컴퓨터의 시스템 음성으로 만들며 외부로 보내지 않습니다.
- 설정 폴더
  - macOS: `~/Library/Application Support/com.zesminseok.orvik`
  - Windows: `%APPDATA%\Zesminseok\ORVIK`
- HISTORY와 SET LIST는 앱을 다시 실행하면 비워집니다.<br>남기려면 종료 전에 내보내세요.

</details>

<details>
<summary>문제를 로그로 남기기</summary>

1. 설정의 정보 섹션에서 **Option+Shift+A** (Windows **Alt+Shift+A**)를 누릅니다.
2. **로그 캡처**를 켜고 문제를 재현합니다.
3. 사용이 끝나면 끕니다. 시간당 1GB 가까이 쌓일 수 있습니다.

로그에는 곡 제목, 장비 이름, IP, MAC이 들어갈 수 있습니다.<br>
이슈에 올리기 전에 내용을 확인하세요.

</details>

## 문서

- 사용 설명서: [한국어](docs/manual/ORVIK-manual-ko.md), [English](docs/manual/ORVIK-manual-en.md), [日本語](docs/manual/ORVIK-manual-ja.md), [Español](docs/manual/ORVIK-manual-es.md), [Deutsch](docs/manual/ORVIK-manual-de.md), [Français](docs/manual/ORVIK-manual-fr.md), [繁體中文](docs/manual/ORVIK-manual-zh-TW.md)
- [변경 내역](CHANGELOG.ko.md)
- 1.6.x의 FFmpeg 자료: [FFmpeg 안내](docs/third-party/FFMPEG.md) (2.0은 FFmpeg를 쓰지 않습니다)

## 후원

ORVIK는 무료 베타이며 기간 제한이 없습니다.<br>
개발을 돕고 싶다면 [GitHub Sponsors](https://github.com/sponsors/zesminseok)로 후원할 수 있습니다.

후원해도 기능이 더 열리지 않습니다.<br>
후원은 정식 제품의 구매나 예약이 아니며 정식 버전이나 완성 시점을 보장하지 않습니다.

## 문의

- 버그, 요청: [GitHub Issues](https://github.com/Zesminseok/ORVIK/issues)
- Instagram: [@zes_minseok](https://instagram.com/zes_minseok)

## 라이선스

[앱 이용 조건](BINARY_LICENSE.md), [문서 이용 조건](LICENSE), [서드파티 고지](THIRD_PARTY_NOTICES.md)

이 저장소는 문서와 배포 파일만 제공하며 앱 소스 코드는 공개하지 않습니다.

<sub>ORVIK는 AlphaTheta, Pioneer DJ, TC Supply, Resolume과 관계없는 독립 호환 도구입니다.<br>
제품명과 상표는 호환 대상을 설명하기 위해서만 씁니다.<br>
Art-Net™ Designed by and Copyright Artistic Licence.</sub>
