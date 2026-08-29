<p align="left">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/media/orvik-wordmark-dark.png">
    <img src="docs/media/orvik-wordmark-light.png" alt="ORVIK" width="340">
  </picture>
</p>

Reads tempo, beat position and track info from Pioneer DJ gear on a PRO DJ LINK network and sends it to Resolume over TCNet.

CDJ·DJM이 PRO DJ LINK로 보내는 템포와 비트 위치, 트랙 정보를 읽어 TCNet으로 Resolume과 동기화합니다.

[![License: Proprietary](https://img.shields.io/badge/license-proprietary-red.svg)](BINARY_LICENSE.md)
[![Version](docs/media/badge-version.svg)](CHANGELOG.md)
[![Status: Beta](https://img.shields.io/badge/status-beta-yellow.svg)]()
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgrey.svg)]()
[![Issues · DM @zes_minseok](docs/media/badge-dm.svg)](https://instagram.com/zes_minseok)


## Download

[Releases](../../releases) — run it, nothing else to install.

macOS 13+ (Apple Silicon / Intel) · Windows 10·11 (x64)

[Releases](../../releases)에서 받아 실행하면 됩니다. 따로 설치할 것은 없습니다.

macOS 13 이상 (Apple Silicon / Intel) · Windows 10·11 (x64)


## Security / 보안

> [!IMPORTANT]
> ORVIK reads metadata, not audio. It never opens, copies or moves your music files, and it has no copy of your rekordbox library. It picks up what the players and the mixer already send on the LINK network — tempo, beat, position, track info — and passes the timing on. It sends nothing to the players and does not control them.
>
> That is also why AlphaTheta's PRO DJ LINK security advisory (August 2026), which is about access to files on a PC/Mac or on USB/SD cards, does not apply to what ORVIK does. Follow AlphaTheta's own guidance for your gear and rekordbox.
>
> ORVIK은 메타데이터만 읽습니다. 음원 파일을 열지도, 복사하지도, 옮기지도 않고 rekordbox 라이브러리 사본도 없습니다. 플레이어와 믹서가 이미 LINK 네트워크에 내보내는 값(템포·비트·위치·트랙 정보)을 받아 넘길 뿐이고, 플레이어로는 아무것도 보내지 않으며 장비를 조작하지도 않습니다.
>
> AlphaTheta의 PRO DJ LINK 보안 권고(2026년 8월)는 PC·Mac이나 USB·SD에 있는 파일 접근에 관한 내용이라 ORVIK이 하는 일과는 무관합니다. 장비와 rekordbox는 제조사 안내대로 조치하시면 됩니다.

> [!WARNING]
> The LTC and MIDI timecode outputs have never been tested against a real receiver. They are in the app, but do not plan a show around them yet.
>
> LTC와 MIDI 타임코드 출력은 실제 수신 장비로 확인한 적이 없습니다. 기능은 들어 있지만 공연을 여기에 걸지는 마세요.


## Docs

[Binary license](BINARY_LICENSE.md) · [Third-party notices](THIRD_PARTY_NOTICES.md) · [Changelog](CHANGELOG.md)


## Contact

GitHub Issues or an Instagram DM, whichever is easier.

GitHub 이슈나 인스타그램 DM, 편한 쪽으로 주세요.


---

ORVIK is an independent product, not affiliated with, endorsed by or sponsored by AlphaTheta Corporation, Pioneer DJ or TC Supply. Product names and trademarks belong to their owners and are used here only to describe compatibility.

ORVIK은 독립 제품이며 AlphaTheta Corporation, Pioneer DJ, TC Supply와 제휴·보증·후원 관계가 없습니다. 제품명과 상표는 각 소유자의 것이고, 호환성을 설명할 때만 씁니다.
