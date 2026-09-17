<p align="left">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/media/orvik-wordmark-dark.png">
    <img src="docs/media/orvik-wordmark-light.png" alt="ORVIK" width="340">
  </picture>
</p>

ORVIK reads the tempo, beat and track info your CDJs and DJM are already putting on the PRO DJ LINK network, and keeps Resolume in sync with it over TCNet.

[![License: Proprietary](https://img.shields.io/badge/license-proprietary-red.svg)](BINARY_LICENSE.md)
[![Version](docs/media/badge-version.svg)](CHANGELOG.md)
[![Status: Beta](https://img.shields.io/badge/status-beta-yellow.svg)]()
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgrey.svg)]()
[![Issues · DM @zes_minseok](docs/media/badge-dm.svg)](https://instagram.com/zes_minseok)


## Download

[Releases](../../releases)

macOS 13 or later (Apple Silicon or Intel), Windows 10 and 11 (x64).


## Running it

Two Mac builds. `arm64` for Apple Silicon, `x64` for Intel; the Apple menu, About This Mac, says which one you have. Windows is one portable `.exe` with no install step — drop it in whatever folder your show tools live in.

### macOS

The app is not signed with an Apple Developer certificate, so the first launch is blocked. Open the DMG, drag ORVIK into Applications, and launch it once: you get a warning that macOS cannot verify it. Close that, go to System Settings → Privacy & Security, scroll down, and there is a line saying ORVIK was blocked with an **Open Anyway** button. Click it, authenticate, and launch again — done. Once only.

On Ventura and Sonoma you can skip System Settings: Control-click ORVIK in Applications and choose Open. Sequoia closed that route, which is why the long way is above.

If clicking through it is a nuisance, one line in Terminal:

```
xattr -dr com.apple.quarantine /Applications/ORVIK.app
```

The first time ORVIK looks for players, macOS asks whether to allow local network access. Allow it. Deny it and the app opens but not a single CDJ turns up — indistinguishable from an unplugged cable.

### Windows

The `.exe` is portable, so a double-click brings it straight up. Unsigned, so SmartScreen stops it with a blue panel: **More info**, then **Run anyway**.

The firewall asks next. Tick **Private networks** and allow it. PRO DJ LINK and TCNet are both UDP broadcast, so a firewall that blocks them leaves the device list empty.


## Logs

When something breaks, one log beats a description of the symptom. Logging is off by default and there is no button for it on the main window. Open Settings, scroll to the Info section, and press **Option-Shift-A** — **Alt+Shift+A** on Windows — and two more rows appear. Tick **Log capture** and restart ORVIK. Capture starts with the process, so a log taken without the restart is missing the part you need to see.

Files are named `Orvik-<timestamp>.log`, and they collect here:

```
macOS     ~/Library/Application Support/orvik/logs
Windows   %APPDATA%\orvik\logs
```

**Choose**, next to the folder path, puts them somewhere else. Long sessions split into parts at 200 MB, and each part names the previous file on its first line. Send the set, not just the last file.

The log holds the PRO DJ LINK and TCNet packets ORVIK received, the track titles that came with them, and the names and addresses of everything on your link network. Worth opening once before you post it.


## 실행하기

맥은 빌드가 두 개. Apple 실리콘이면 `arm64`, 인텔이면 `x64` 를 받으면 되고, 어느 쪽인지는 애플 메뉴의 '이 Mac에 관하여'에 나온다. 윈도우는 포터블 `.exe` 하나라 설치 과정이 없다. 쓰던 공연 폴더에 그냥 넣어 두면 그만.

### macOS

Apple 개발자 인증서로 서명하지 않은 앱이라 첫 실행은 막힌다. DMG 를 열어 ORVIK 을 응용 프로그램으로 옮기고 한 번 실행하면 확인할 수 없다는 경고가 뜬다. 그 창을 닫고 시스템 설정 → 개인정보 보호 및 보안으로 가서 아래로 내리면, ORVIK 이 차단됐다는 줄과 **그래도 열기**(Open Anyway) 버튼이 있다. 누르고 인증한 뒤 다시 실행하면 끝. 처음 한 번만 하면 된다.

Ventura·Sonoma 에서는 시스템 설정까지 갈 것 없이 응용 프로그램에서 ORVIK 을 Control-클릭하고 열기를 고르면 된다. Sequoia 부터 이 방법이 막혀서 위처럼 도는 것이다.

클릭이 번거로우면 터미널에서 한 줄.

```
xattr -dr com.apple.quarantine /Applications/ORVIK.app
```

ORVIK 이 플레이어를 처음 찾을 때 macOS 가 로컬 네트워크 접근을 허용할지 묻는다. 허용해야 한다. 거부하면 앱은 켜지는데 CDJ 가 하나도 안 잡혀서, 랜선이 빠진 것과 똑같아 보인다.

### Windows

`.exe` 는 포터블이라 더블클릭하면 바로 뜬다. 서명이 없어서 SmartScreen 이 파란 창으로 막는데 **추가 정보**를 누르고 **실행**을 고르면 통과.

이어서 방화벽이 묻는다. **개인 네트워크**를 체크하고 허용해야 한다. PRO DJ LINK 도 TCNet 도 UDP 브로드캐스트라, 방화벽에 막히면 기기 목록이 빈 채로 뜬다.


## 로그

문제가 생겼을 때는 증상 설명보다 로그 한 개. 로그는 기본으로 꺼져 있고 메인 화면에 버튼도 없다. 설정을 열어 정보 섹션까지 내린 다음 **Option-Shift-A**, 윈도우는 **Alt+Shift+A** 를 누르면 두 줄이 더 나타난다. **로그 캡처**를 켜고 ORVIK 을 다시 시작. 캡처는 프로세스와 함께 시작하므로, 재시작하지 않고 뽑은 로그에는 정작 봐야 할 구간이 없다.

파일 이름은 `Orvik-<타임스탬프>.log`, 쌓이는 곳은 아래.

```
macOS     ~/Library/Application Support/orvik/logs
Windows   %APPDATA%\orvik\logs
```

폴더 경로 옆 **선택**으로 다른 위치를 지정할 수 있다. 긴 세션은 200MB 에서 파트가 갈리고 파트마다 첫 줄에 이전 파일 이름이 적힌다. 올릴 때는 마지막 파일 하나가 아니라 세트째.

로그에는 ORVIK 이 받은 PRO DJ LINK·TCNet 패킷과 거기 실려 온 곡 제목, 링크 네트워크에 붙은 장비 이름과 주소가 들어간다. 올리기 전에 한 번 열어 보는 게 좋다.

<!-- HUMANIZE-SUMMARY v1.6.1
run_id: 2026-09-18-001
route: light (risk_band=low, lexical_tell_count=0) / 강도: 보수 / 겨냥 축: da_streak_rate only
metrics:
  char_in: 1149
  char_out: 1132
  change_rate: 3.1%
  self_check: 6/6
  grade: A
categories:  # before -> after
  E-2 '-다' 평서 종결 문장: 31/31 -> 22/31 (71%)
  da_streak 최대 연속: 31 -> 4
  비'-다' 종결(체언 종결) 수: 0 -> 9 (29%)
  C-11 연결어미 뒤 쉼표: 증가 0 (원문 그대로)
  A / B / C / D / F / G / H / I / J: 탐지 0건 -> 무수정
self_check:
  - 고유명사·수치·인용·내용 앵커 100% 보존: OK (34개 앵커 자동 대조 통과)
  - 변경률 30% 이하: OK (3.1% — light 경로 보수 강도라 의도적 하한)
  - 장르 이탈 없음: OK (개발자 README 실행 안내 그대로)
  - register 보존: OK (해라체 문어 평서 유지, 존대 상향·'-하였-' 없음)
  - S1 잔존 0건: OK (원래 0건, 신규 발생 0)
  - 인공 표현 추가 없음: OK (은유·상투구·반문 신규 삽입 0)
untouched (자동 assert 통과):
  - 헤딩 5개 + 코드 펜스 2블록 내부: byte-identical
  - 볼드 UI 라벨 8곳: byte-identical
  - 문장 수 31 -> 31, 산문 문단 11 -> 11, 빈 줄 배치 동일
highlights:
  - id: E-2
    before: "맥은 빌드가 두 개다."
    after: "맥은 빌드가 두 개."
  - id: E-2
    before: "누르고 인증한 뒤 다시 실행하면 끝이다."
    after: "누르고 인증한 뒤 다시 실행하면 끝."
  - id: E-2
    before: "클릭이 번거로우면 터미널에서 한 줄로도 된다."
    after: "클릭이 번거로우면 터미널에서 한 줄."
  - id: E-2
    before: "문제가 생겼을 때는 증상을 설명하는 것보다 로그 한 개가 낫다."
    after: "문제가 생겼을 때는 증상 설명보다 로그 한 개."
  - id: E-2
    before: "마지막 파일 하나가 아니라 세트째 올리면 된다."
    after: "올릴 때는 마지막 파일 하나가 아니라 세트째."
residual_findings: >
  E-2 잔존 1건 — '-다' 4연속 구간 1곳(로컬 네트워크 허용 문단 ~ Windows 첫 문단).
  해당 구간의 '허용해야 한다'는 당위 서법이라, 종결 변주보다 서법 보존(quick-rules v2.4)을 우선해 그대로 둠.
grade_reason: "A — S1 잔존 0, S2 잔존 1, 자체검증 6항 통과. 지시된 da_streak 축만 손대고 구조·코드·라벨·사실관계는 전량 보존."
-->


## Security

ORVIK only reads metadata. It never opens, copies or moves your music files, and it keeps no copy of your rekordbox library. It listens to what the players and the mixer are already sending (tempo, beat, position, track info) and syncs that with your visuals and lights. Nothing goes back to the players, and it cannot control them.

AlphaTheta PRO DJ LINK advisory from August 2026 is about someone reaching files on a PC or Mac, or on a USB or SD card. That is not what ORVIK touches. For your gear and rekordbox, follow AlphaTheta's own instructions.


## Before a show

The LTC and MIDI timecode outputs have never been checked against a real receiver. They are in the app, but do not build a show on them yet.


## Docs

[Binary license](BINARY_LICENSE.md) · [Third-party notices](THIRD_PARTY_NOTICES.md) · [Changelog](CHANGELOG.md)


## Contact

Open an issue, or send an Instagram DM


---

ORVIK is an independent product. It is not affiliated with, endorsed by or sponsored by AlphaTheta Corporation, Pioneer DJ or TC Supply. Their product names and trademarks appear here only to say what ORVIK works with.
