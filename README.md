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

Two Mac builds are published. `arm64` is for Apple Silicon, `x64` for Intel — the Apple menu, About This Mac, tells you which one you have. Windows is a single portable `.exe`, so there is nothing to install; put it wherever you keep your show tools.

### macOS

ORVIK is not signed with an Apple Developer certificate, so the first launch gets refused. Open the DMG, drag ORVIK into Applications, and launch it once — you will get a dialog saying macOS cannot verify it. Close that, open System Settings, go to Privacy & Security, and scroll to the bottom. There is a line about ORVIK being blocked with an **Open Anyway** button next to it. Click that, confirm, and launch again. You only do this once.

On Ventura and Sonoma you can skip System Settings: Control-click the app in Applications and choose Open. Sequoia removed that shortcut, which is why the instructions above go the long way round.

If you would rather not click through any of it:

```
xattr -dr com.apple.quarantine /Applications/ORVIK.app
```

The first time ORVIK looks for players, macOS asks whether it may find devices on your local network. Say yes. Deny it and the app still runs, but no CDJ ever shows up — which looks exactly like a bad network cable.

### Windows

Double-click the `.exe` and it runs. SmartScreen puts up a blue "Windows protected your PC" panel because the file is not signed; click **More info**, then **Run anyway**.

Windows Firewall asks next. Tick **Private networks** and allow it. PRO DJ LINK and TCNet are both UDP broadcast, and a firewall that keeps them out leaves you with an empty device list.

## Logs

If something goes wrong, a log is worth more than a description of it. Logging is off by default and there is no button for it on the main window. Open Settings, scroll down to Info, and press **Option-Shift-A** — **Alt+Shift+A** on Windows. Two more rows appear. Tick **Log capture**, then restart ORVIK: capture starts with the process, so a log taken without the restart is missing the part you need.

Files are named `Orvik-<timestamp>.log` and land in:

```
macOS     ~/Library/Application Support/orvik/logs
Windows   %APPDATA%\orvik\logs
```

Use **Choose** next to the folder path to send them somewhere else. Long sessions split at 200 MB, and each part names the previous one on its first line, so attach the whole set rather than the last file.

The log holds the PRO DJ LINK and TCNet packets ORVIK received, the track titles that came with them, and the names and addresses of everything on your link network. Have a look before you post it.


## 실행하기

맥은 빌드가 두 개다. Apple 실리콘이면 `arm64`, 인텔이면 `x64` 를 받으면 되고, 어느 쪽인지는 애플 메뉴의 '이 Mac에 관하여'에 나온다. 윈도우는 포터블 `.exe` 하나라 설치 과정이 없다. 쓰던 공연 폴더에 그냥 넣어 두면 된다.

### macOS

Apple 개발자 인증서로 서명하지 않은 앱이라 첫 실행은 막힌다. DMG 를 열어 ORVIK 을 응용 프로그램으로 옮기고 한 번 실행하면 확인할 수 없다는 경고가 뜬다. 그 창을 닫고 시스템 설정 → 개인정보 보호 및 보안으로 가서 아래로 내리면, ORVIK 이 차단됐다는 줄과 **그래도 열기**(Open Anyway) 버튼이 있다. 누르고 인증한 뒤 다시 실행하면 끝이다. 처음 한 번만 하면 된다.

Ventura·Sonoma 에서는 시스템 설정까지 갈 것 없이 응용 프로그램에서 ORVIK 을 Control-클릭하고 열기를 고르면 된다. Sequoia 부터 이 방법이 막혀서 위처럼 도는 것이다.

클릭이 번거로우면 터미널에서 한 줄로도 된다.

```
xattr -dr com.apple.quarantine /Applications/ORVIK.app
```

ORVIK 이 플레이어를 처음 찾을 때 macOS 가 로컬 네트워크 접근을 허용할지 묻는다. 허용해야 한다. 거부하면 앱은 켜지는데 CDJ 가 하나도 안 잡혀서, 랜선이 빠진 것과 똑같아 보인다.

### Windows

`.exe` 는 포터블이라 더블클릭하면 바로 뜬다. 서명이 없어서 SmartScreen 이 파란 창으로 막는데 **추가 정보**를 누르고 **실행**을 고르면 된다.

이어서 방화벽이 묻는다. **개인 네트워크**를 체크하고 허용해야 한다. PRO DJ LINK 도 TCNet 도 UDP 브로드캐스트라, 방화벽에 막히면 기기 목록이 빈 채로 뜬다.

## 로그

문제가 생겼을 때는 증상을 설명하는 것보다 로그 한 개가 낫다. 로그는 기본으로 꺼져 있고 메인 화면에 버튼도 없다. 설정을 열어 정보 섹션까지 내린 다음 **Option-Shift-A**, 윈도우는 **Alt+Shift+A** 를 누르면 두 줄이 더 나타난다. **로그 캡처**를 켜고 ORVIK 을 다시 시작한다. 캡처는 프로세스와 함께 시작하므로, 재시작하지 않고 뽑은 로그에는 정작 봐야 할 구간이 없다.

파일 이름은 `Orvik-<타임스탬프>.log` 이고 아래에 쌓인다.

```
macOS     ~/Library/Application Support/orvik/logs
Windows   %APPDATA%\orvik\logs
```

폴더 경로 옆 **선택**으로 다른 위치를 지정할 수 있다. 긴 세션은 200MB 에서 파트가 갈리고 파트마다 첫 줄에 이전 파일 이름이 적힌다. 마지막 파일 하나가 아니라 세트째 올리면 된다.

로그에는 ORVIK 이 받은 PRO DJ LINK·TCNet 패킷과 거기 실려 온 곡 제목, 링크 네트워크에 붙은 장비 이름과 주소가 들어간다. 올리기 전에 한 번 열어 보는 게 좋다.


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
