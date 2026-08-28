<p align="left">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/media/orvik-wordmark-dark.png">
    <img src="docs/media/orvik-wordmark-light.png" alt="ORVIK" width="340">
  </picture>
</p>

> DJ hardware → Resolume sync (TCNet · Art-Net · LTC · MIDI)

[![License: Proprietary](https://img.shields.io/badge/license-proprietary-red.svg)](BINARY_LICENSE.md)
[![Version](docs/media/badge-version.svg)](CHANGELOG.md)
[![Status: Beta](https://img.shields.io/badge/status-beta-yellow.svg)]()
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgrey.svg)]()
[![Issues · DM @zes_minseok](docs/media/badge-dm.svg)](https://instagram.com/zes_minseok)

---

## Downloads are paused

Builds have been withdrawn while AlphaTheta's PRO DJ LINK security advisory is in effect.

**[Important Notice: Security Vulnerability in PRO DJ LINK](https://rekordbox.com/en/2026/08/important-notice-security-vulnerability-in-pro-dj-link/)** — AlphaTheta, August 2026

In AlphaTheta's own words, the flaw "could allow a third party who gains unauthorized access
to a PRO DJ LINK network to view data stored on a Windows PC/Mac, or on USB/SD cards."
It concerns rekordbox and certain CDJ/XDJ models. The advisory does not mention third-party
PRO DJ LINK software. Follow the vendor's guidance there — update rekordbox, keep sensitive
files off the USB/SD media you use on the LINK network, and keep that network on secure,
password-protected Wi-Fi or, better, off Wi-Fi entirely.

Nothing here works around, discloses, or exploits that issue. Downloads stay down until the
next build is finished and checked against the advisory.

### What ORVIK does on the network

ORVIK listens. It reads what CDJs and the mixer already broadcast and converts it to
TCNet, Art-Net, LTC, MIDI and OSC for visual and lighting software. It does not control
hardware, does not serve files to the LINK network, and holds no rekordbox library.
That is a design constraint the project has kept from the start — not a claim about anyone
else's security.

### Next build

A connectivity and reliability build is in progress. It ships when a hardware session
confirms it — no date yet.

---

## 다운로드 중단 안내

AlphaTheta 의 PRO DJ LINK 보안 권고가 유효한 동안 빌드를 내려두었습니다.

**[Important Notice: Security Vulnerability in PRO DJ LINK](https://rekordbox.com/en/2026/08/important-notice-security-vulnerability-in-pro-dj-link/)** — AlphaTheta, 2026년 8월

AlphaTheta 의 설명에 따르면, PRO DJ LINK 네트워크에 무단으로 접근한 제3자가 Windows PC·Mac
또는 USB·SD 카드에 저장된 데이터를 열람할 수 있는 문제입니다. rekordbox 와 일부 CDJ·XDJ
기종이 대상이며, 해당 공지에 서드파티 PRO DJ LINK 소프트웨어에 대한 언급은 없습니다.
조치는 제조사 안내를 따라 주세요 — rekordbox 최신 버전 업데이트, LINK 네트워크에서 쓰는
USB·SD 에 민감한 파일을 두지 않기, 그리고 그 네트워크를 비밀번호로 보호된 Wi-Fi 로 두거나
아예 Wi-Fi 를 쓰지 않기.

이 저장소는 해당 문제를 우회하거나 공개하거나 악용하지 않습니다. 다음 빌드가 완성되고
권고 내용에 비추어 확인될 때까지 다운로드는 내려둡니다.

### ORVIK 이 네트워크에서 하는 일

ORVIK 은 듣기만 합니다. CDJ 와 믹서가 이미 방송하는 값을 읽어 TCNet·Art-Net·LTC·MIDI·OSC
로 변환해 영상·조명 소프트웨어에 넘깁니다. 하드웨어를 제어하지 않고, LINK 네트워크에
파일을 제공하지 않으며, rekordbox 라이브러리를 갖지 않습니다. 처음부터 지켜 온 설계
제약이며, 다른 제품의 보안에 대한 주장이 아닙니다.

### 다음 빌드

연결성·안정성 빌드를 제작 중입니다. 실기 검증이 끝나면 올립니다 — 날짜는 아직 없습니다.

---

> Found a bug or have a question? GitHub Issues or an Instagram DM — both are fine.
>
> 버그·문의는 GitHub 이슈 또는 인스타그램 DM 으로 보내주셔도 됩니다.

ORVIK is an independent product. It is not affiliated with, endorsed by, or sponsored by
AlphaTheta Corporation, Pioneer DJ, or TC Supply. Product names and trademarks belong to
their respective owners; they are used only to describe compatibility.

ORVIK 은 독립 제품입니다. AlphaTheta Corporation, Pioneer DJ, TC Supply 와 제휴·보증·후원
관계가 없습니다. 제품명과 상표는 각 소유자의 것이며, 호환성을 설명하기 위해서만 사용합니다.
