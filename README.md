<p align="left">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/media/orvik-wordmark-dark.png">
    <img src="docs/media/orvik-wordmark-light.png" alt="ORVIK" width="340">
  </picture>
</p>

Reads tempo, beat position and track info from Pioneer DJ gear on a
PRO DJ LINK network and sends it to Resolume over TCNet.

[![License: Proprietary](https://img.shields.io/badge/license-proprietary-red.svg)](BINARY_LICENSE.md)
[![Version](docs/media/badge-version.svg)](CHANGELOG.md)
[![Status: Beta](https://img.shields.io/badge/status-beta-yellow.svg)]()
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgrey.svg)]()
[![Issues · DM @zes_minseok](docs/media/badge-dm.svg)](https://instagram.com/zes_minseok)


## Downloads

> [!IMPORTANT]
> The builds are down while AlphaTheta's PRO DJ LINK security advisory
> is in effect:
> [Important Notice: Security Vulnerability in PRO DJ LINK](https://rekordbox.com/en/2026/08/important-notice-security-vulnerability-in-pro-dj-link/)
> (AlphaTheta, August 2026).

The advisory says the problem "could allow a third party who gains
unauthorized access to a PRO DJ LINK network to view data stored on a
Windows PC/Mac, or on USB/SD cards". It covers rekordbox and some CDJ
and XDJ models, and says nothing about third-party software.

Follow AlphaTheta's instructions: update rekordbox, keep private files
off the USB and SD cards you use on the LINK network, and keep that
network on a password-protected Wi-Fi or off Wi-Fi altogether.

Nothing here works around or explains that problem. The downloads come
back with the next build.


## What it does on the network

ORVIK only reads. It picks up what the players and the mixer already
send on the LINK network and passes the timing on to Resolume over
TCNet. It never sends anything to the players, never puts files on the
network, and has no copy of your rekordbox library.

> [!WARNING]
> The LTC and MIDI timecode outputs have never been tested against a
> real receiver. They are in the app, but do not plan a show around
> them yet.


## Next build

A connectivity and reliability build is in progress. It goes up once a
session with real gear confirms it.


## Contact

GitHub Issues or an Instagram DM, whichever is easier.


---

# 한국어

Pioneer DJ 기기가 PRO DJ LINK 로 보내는 템포와 비트 위치, 트랙 정보를
읽어 TCNet 으로 Resolume 에 보냅니다.


## 다운로드

> [!IMPORTANT]
> AlphaTheta 의 PRO DJ LINK 보안 권고가 유효한 동안 빌드를 내려두었습니다:
> [Important Notice: Security Vulnerability in PRO DJ LINK](https://rekordbox.com/en/2026/08/important-notice-security-vulnerability-in-pro-dj-link/)
> (AlphaTheta, 2026년 8월).

권고문에 따르면 PRO DJ LINK 네트워크에 무단으로 접근한 제3자가 Windows PC
나 Mac, USB·SD 카드에 저장된 데이터를 열람할 수 있는 문제입니다. rekordbox
와 일부 CDJ·XDJ 기종이 대상이고, 서드파티 소프트웨어에 대한 언급은
없습니다.

조치는 AlphaTheta 안내를 따라 주세요. rekordbox 를 최신 버전으로
업데이트하고, LINK 네트워크에서 쓰는 USB·SD 에 개인 파일을 두지 않고,
그 네트워크는 비밀번호가 걸린 Wi-Fi 로 두거나 아예 Wi-Fi 를 쓰지 않는
편이 낫습니다.

이 저장소는 해당 문제를 우회하지도, 설명하지도 않습니다. 다음 빌드와 함께
다운로드를 다시 올립니다.


## 네트워크에서 하는 일

ORVIK 은 읽기만 합니다. 플레이어와 믹서가 LINK 네트워크로 이미 보내고 있는
값을 받아 타이밍을 TCNet 으로 Resolume 에 넘깁니다. 플레이어로는 아무것도
보내지 않고, 네트워크에 파일을 올리지 않으며, rekordbox 라이브러리를 갖고
있지 않습니다.

> [!WARNING]
> LTC 와 MIDI 타임코드 출력은 실제 수신 장비로 한 번도 테스트하지
> 못했습니다. 앱에는 들어 있지만 아직 이걸 믿고 공연을 짜지는 마세요.


## 다음 빌드

연결성과 안정성 위주의 빌드를 만들고 있습니다. 실기로 확인이 끝나면
올립니다.


## 문의

GitHub 이슈나 인스타그램 DM 중 편한 쪽으로 보내주세요.


---

ORVIK is an independent product. It is not affiliated with, endorsed by
or sponsored by AlphaTheta Corporation, Pioneer DJ or TC Supply.
Product names and trademarks belong to their owners and are used here
only to describe compatibility.

ORVIK 은 독립 제품입니다. AlphaTheta Corporation, Pioneer DJ, TC Supply
와 제휴·보증·후원 관계가 없습니다. 제품명과 상표는 각 소유자의 것이며,
호환성을 설명하기 위해서만 씁니다.
