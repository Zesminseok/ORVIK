# FFmpeg — Electron 44.4.5

## 한국어

ORVIK는 Electron에 포함된 FFmpeg 라이브러리를 사용합니다. FFmpeg에는 LGPL-2.1-or-later와 파일별 고지가 적용됩니다. FFmpeg의 저작권은 해당 기여자에게 있으며 ORVIK가 소유하지 않습니다. `COPYING.LGPLv2.1`, `FFmpeg-LICENSE.md`, 앱의 `licenses/LICENSES.chromium.html`에 전문과 고지가 있습니다. 함께 연결되는 Opus의 고지는 `OPUS-COPYING`에 있습니다.

[FFmpeg 소스·빌드 자료 다운로드](https://github.com/Zesminseok/ORVIK/releases/download/third-party-electron-v44.4.5/ffmpeg-electron-44.4.5-source.tar.gz) · [버전별 안내](https://github.com/Zesminseok/ORVIK/blob/main/docs/third-party/FFMPEG.md)

자료에는 FFmpeg 원본 소스, Electron의 FFmpeg 패치, Electron 소스 및 빌드 설정, Chromium의 빌드 스크립트·Opus·NASM, 버전·해시 목록이 포함됩니다. ORVIK 자체 소스는 포함하지 않습니다. ORVIK는 FFmpeg 소스를 별도로 수정하지 않으며 공식 Electron 런타임의 라이브러리를 사용합니다. macOS 앱 서명 과정은 라이브러리의 서명 바이트를 바꿀 수 있습니다.

### 버전과 빌드

| 항목 | 버전 / 커밋 |
| --- | --- |
| Electron | 44.4.5 / `694f45852a0f1726cd23bfd379854de489cccb65` |
| Chromium | 152.0.7977.130 / `2c592105bbcd9490a9894df48d0fe59b2c512651` |
| Chromium FFmpeg | `2b68d2babae73714846961fb0ee47e3b3d2e39a9` |

일반 Electron 런타임은 `ffmpeg_branding="Chrome"`, `proprietary_codecs=true`, `is_component_ffmpeg=true`로 빌드됩니다. 위 소스의 Chrome/mac/arm64, Chrome/mac/x64, Chrome/win/x64 설정에서 `CONFIG_GPL`, `CONFIG_NONFREE`, `CONFIG_VERSION3`, `CONFIG_LIBX264`, `CONFIG_LIBX265`는 모두 0입니다. Electron이 별도로 제공하는 `ffmpeg-*.zip`은 코덱 구성이 다른 대체 라이브러리이므로 일반 런타임의 소스 대응 자료로 혼동하지 마십시오.

빌드 환경과 명령은 자료의 `BUILDING.md`와 Electron의 `docs/development/build-instructions-gn.md`, 플랫폼별 빌드 문서에 있습니다. 전체 Chromium 작업 공간과 운영체제 SDK·컴파일러 등 외부 도구가 필요합니다. 자료의 버전 대응은 공식 런타임의 SHA256과 업스트림 의존성 기록을 대조하여 확인했습니다. 이 자료를 이용한 전체 재빌드와 바이트 단위 동일성은 검증하지 않았습니다.

### 호환 라이브러리 교체

LGPL이 허용하거나 요구하는 수정·교체·재링크와 수정 디버깅을 위한 역공학에는 ORVIK의 사전 허가가 필요하지 않습니다. 같은 플랫폼·CPU·인터페이스에 맞는 라이브러리를 사용하십시오. 원본 앱을 백업하고 별도 복사본에서 작업하십시오.

- **macOS:** 앱을 종료하고 `ORVIK.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Libraries/libffmpeg.dylib`를 교체합니다. 서명이 무효화되면 본인이 수정한 앱 복사본에 `codesign --force --deep --sign - --timestamp=none /path/to/ORVIK.app`을 실행하여 임시 서명할 수 있습니다. 관리자·운영체제 보안 정책은 별도로 적용됩니다.
- **Windows portable:** 기본 런처는 실행할 때 `%TEMP%\Orvik`을 다시 풀고 종료 시 정리합니다. 실행 중 이 폴더 전체를 별도 쓰기 가능한 폴더로 복사한 뒤 원래 앱을 종료합니다. 복사본의 `ffmpeg.dll`을 교체하고 **복사본 안의 `ORVIK.exe`를 직접 실행**합니다. 원래 portable 런처를 다시 실행하면 교체본이 사용되지 않습니다. 작업 관리자에서 실제 실행 위치를 확인할 수 있습니다.

ORVIK의 패키지 생성 검사는 배포 직전 라이브러리와 고지의 대응만 확인합니다. 앱은 실행 중 FFmpeg 해시를 검사하지 않으므로 사용자 교체를 막지 않습니다. 수정된 라이브러리의 동작과 Windows 교체 절차의 실제 기동은 별도 검증이 필요합니다.

## English

ORVIK uses the FFmpeg libraries included with Electron. FFmpeg is licensed under LGPL-2.1-or-later and applicable file-specific notices. Copyright belongs to its contributors, not ORVIK. Full terms and notices are provided in `COPYING.LGPLv2.1`, `FFmpeg-LICENSE.md` and the application's `licenses/LICENSES.chromium.html`. Notices for the linked Opus library are in `OPUS-COPYING`.

[Download FFmpeg source and build materials](https://github.com/Zesminseok/ORVIK/releases/download/third-party-electron-v44.4.5/ffmpeg-electron-44.4.5-source.tar.gz) · [Version information](https://github.com/Zesminseok/ORVIK/blob/main/docs/third-party/FFMPEG.md)

The materials include upstream FFmpeg source, Electron's FFmpeg patch, Electron source and build settings, Chromium build scripts, Opus, NASM, and version/hash records. They contain no ORVIK application source. ORVIK does not separately modify FFmpeg source and uses the library from the official Electron runtime. macOS application signing may change library signature bytes.

### Versions and building

| Component | Version / commit |
| --- | --- |
| Electron | 44.4.5 / `694f45852a0f1726cd23bfd379854de489cccb65` |
| Chromium | 152.0.7977.130 / `2c592105bbcd9490a9894df48d0fe59b2c512651` |
| Chromium FFmpeg | `2b68d2babae73714846961fb0ee47e3b3d2e39a9` |

The standard Electron runtime is built with `ffmpeg_branding="Chrome"`, `proprietary_codecs=true` and `is_component_ffmpeg=true`. In the source's Chrome/mac/arm64, Chrome/mac/x64 and Chrome/win/x64 configurations, `CONFIG_GPL`, `CONFIG_NONFREE`, `CONFIG_VERSION3`, `CONFIG_LIBX264` and `CONFIG_LIBX265` are all 0. Electron's separate `ffmpeg-*.zip` assets have a different codec configuration and must not be confused with the library in the standard runtime.

Build requirements and commands are in the archive's `BUILDING.md` and Electron's `docs/development/build-instructions-gn.md` and platform-specific build documents. A full Chromium workspace and external tools, including OS SDKs and compilers, are required. Version correspondence was checked against official runtime SHA256 hashes and upstream dependency records. A full rebuild and byte-for-byte reproducibility have not been verified.

### Replacing a compatible library

No prior ORVIK permission is required for modification, replacement, relinking or reverse engineering to debug modifications as permitted or required by the LGPL. Use a library matching the platform, CPU and interface. Back up the original application and work on a separate copy.

- **macOS:** Quit the app and replace `ORVIK.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Libraries/libffmpeg.dylib`. If its signature becomes invalid, you can ad-hoc sign your modified copy with `codesign --force --deep --sign - --timestamp=none /path/to/ORVIK.app`. Administrator and operating-system security policies still apply.
- **Windows portable:** The default launcher extracts to `%TEMP%\Orvik` on each launch and cleans up on exit. While it runs, copy that entire folder to a separate writable location, then quit the original app. Replace `ffmpeg.dll` in the copy and **run the copied `ORVIK.exe` directly**. Running the original portable launcher again will not use your replacement. Task Manager can show the actual running location.

ORVIK's packaging check only verifies that the library and notices match before distribution. It does not enforce a runtime FFmpeg hash that would prevent user replacement. Behavior with a modified library and actual startup using the Windows replacement procedure require separate validation.

## 소스 압축 파일 SHA256 / Source archive SHA256

```text
c44cc183ad0eab3e8e9a354baf19212a4faedeb87e8277c1fdbbba5bf6c1ca8d  ffmpeg-electron-44.4.5-source.tar.gz
```

[빌드 절차 / Build instructions](FFMPEG-BUILDING.md) · [런타임 대응 목록 / Runtime manifest](ffmpeg-electron-44.4.5.json)

## 이전 버전 / Previous versions

이전 ORVIK 릴리스에 들어 있는 Electron 런타임의 자료입니다. 빌드와 교체 절차는 같고 버전·커밋·해시 값은 각 압축 파일의 `README.md`, `BUILDING.md`, `manifest.json`에 있습니다.

Materials for the Electron runtime shipped with earlier ORVIK releases. The build and replacement procedures are the same; version, commit and hash values are in each archive's `README.md`, `BUILDING.md` and `manifest.json`.

| Electron | Chromium | Chromium FFmpeg | 자료 / Materials |
| --- | --- | --- | --- |
| 44.3.0 / `07e460719c75b2ec5ee4893f7d2192ef31c7b8c2` | 152.0.7977.78 / `170c2c9ffb4da86532459d72d9eda6b4944d1670` | `2b68d2babae73714846961fb0ee47e3b3d2e39a9` | [소스·빌드 자료 / Source and build materials](https://github.com/Zesminseok/ORVIK/releases/download/third-party-electron-v44.3.0/ffmpeg-electron-44.3.0-source.tar.gz) · [런타임 대응 목록 / Runtime manifest](ffmpeg-electron-44.3.0.json) |

```text
f70b1f701aac9f80190facc29ecbd423c87a399306e6fbe71a4ff2d778eca411  ffmpeg-electron-44.3.0-source.tar.gz
```
