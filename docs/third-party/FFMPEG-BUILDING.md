# FFmpeg 빌드 자료 / FFmpeg build materials

## 한국어

이 자료는 Electron 44.4.5의 일반 런타임에 들어 있는 FFmpeg에 대응합니다. ORVIK가 직접 FFmpeg를 컴파일한 것이 아니라 공식 Electron 배포본을 사용합니다. 공식 ZIP의 해시와 그 안의 라이브러리 해시는 압축 파일의 `manifest.json`(이 저장소에서는 [런타임 대응 목록](ffmpeg-electron-44.4.5.json))에 있습니다. 앱에 임시 서명하면 macOS 라이브러리의 서명 바이트는 달라질 수 있습니다.

### 구성

- `ffmpeg/`: Chromium FFmpeg 커밋 `2b68d2babae73714846961fb0ee47e3b3d2e39a9`의 전체 소스. 아직 Electron 패치를 적용하지 않은 트리입니다.
- `electron/`: Electron 커밋 `694f45852a0f1726cd23bfd379854de489cccb65`의 전체 소스, 라이선스, 플랫폼별 빌드 설명, 의존성 기록, 릴리스 빌드 설정 및 패치.
- `changes.diff`: Electron의 `patches/ffmpeg/.patches`에 지정된 유일한 FFmpeg 패치 `link_with_loader_path.patch`. 패치 원문에 작성자·날짜가 있습니다. ORVIK의 추가 소스 수정은 없습니다.
- `chromium/DEPS`, `chromium/build/`: Chromium `2c592105bbcd9490a9894df48d0fe59b2c512651`의 의존성 기록과 빌드 스크립트.
- `chromium/third_party/opus/`: 위 Chromium 트리에 들어 있는 Opus 소스·헤더·빌드 스크립트·라이선스. Opus 업스트림 리비전은 `55513e81d8f606bd75d0ff773d2144e5f2a732f5`입니다.
- `chromium/third_party/nasm/`: Chromium이 지정한 NASM 리비전 `525a09a813be0f75b646ee93fc2a31c27b87d722`의 소스와 빌드 규칙.
- `downloads.json`: 다운로드한 원본 압축 파일의 공식 주소와 해시. `SHASUMS256.txt`는 Electron 공식 배포의 해시 목록입니다.

각 소스 트리의 저작권·라이선스 고지를 유지했습니다. FFmpeg 트리 전체에는 선택적으로 빌드할 수 있는 GPL 코드도 있지만, 제공 대상 런타임의 위 세 플랫폼 설정에서는 GPL·nonfree·version3·x264·x265가 비활성화되어 있습니다. 모든 파일이 LGPL이라는 뜻은 아닙니다.

### 빌드 경로

플랫폼별 준비 사항은 `electron/docs/development/build-instructions-macos.md` 또는 `build-instructions-windows.md`, 전체 절차는 `build-instructions-gn.md`를 따르십시오. `depot_tools`, 플랫폼 SDK와 컴파일러가 필요합니다. 다음은 macOS 셸 표기의 고정 버전 체크아웃 예입니다. Windows에서는 해당 문서의 인용부호와 도구 설정을 사용하십시오.

```sh
mkdir electron-44.4.5-build
cd electron-44.4.5-build
gclient config --name "src/electron" --unmanaged https://github.com/electron/electron
gclient sync --with_branch_heads --with_tags --revision src/electron@694f45852a0f1726cd23bfd379854de489cccb65
cd src
gn gen out/Release --args='import("//electron/build/args/release.gn") target_cpu="arm64"'
autoninja -C out/Release ffmpeg
```

Intel macOS와 Windows x64는 `target_cpu="x64"`를 사용합니다. gclient는 Electron DEPS에 지정된 Chromium과 FFmpeg 및 도구를 받아 Electron의 패치를 적용합니다. 이미 패치된 트리에 `changes.diff`를 중복 적용하지 마십시오. 제공된 원본 FFmpeg 트리를 따로 사용하는 경우 그 트리에서 `git apply ../changes.diff`로 Electron 패치를 적용할 수 있습니다. 헤더와 `.gni`·`config.h` 파일도 소스에 포함됩니다.

이것은 독립 FFmpeg CLI용 `./configure` 빌드가 아닙니다. Electron의 `build/args/release.gn`이 `all.gn`을 읽고 공유 라이브러리로 구성합니다. `ffmpeg_branding="Chrome"`, `proprietary_codecs=true`, `is_component_ffmpeg=true` 설정을 유지하십시오. `ffmpeg/chromium/config/Chrome/` 아래에 해당 운영체제·CPU의 생성된 코덱 설정이 있습니다. PGO 프로필·툴체인 취득은 Electron 문서 및 `electron/build/pgo_profiles/README.md`를 따릅니다.

압축 파일은 전체 Chromium 작업 공간이나 운영체제 SDK를 담지 않습니다. 나머지 빌드 환경은 고정된 DEPS에 따라 동기화해야 합니다. 위 빌드 경로는 업스트림 문서·설정에서 정리했으며 여기서 전체 컴파일하거나 수정 라이브러리로 앱을 실행해 검증하지는 않았습니다. 비트 단위 재현을 보장하지 않습니다. 라이브러리 교체 방법과 허용 범위는 압축 파일의 `README.md`(이 저장소에서는 [FFmpeg 안내](FFMPEG.md))를 참조하십시오.

## English

These materials correspond to FFmpeg in the standard Electron 44.4.5 runtime. ORVIK uses the official Electron distribution rather than compiling FFmpeg itself. The archive's `manifest.json` (in this repository: the [runtime manifest](ffmpeg-electron-44.4.5.json)) records hashes of the official ZIPs and their libraries. Ad-hoc application signing may change macOS library signature bytes.

### Contents

- `ffmpeg/`: complete Chromium FFmpeg source at `2b68d2babae73714846961fb0ee47e3b3d2e39a9`, before Electron's patch.
- `electron/`: complete Electron source at `694f45852a0f1726cd23bfd379854de489cccb65`, including licenses, platform build instructions, dependency records, release build configuration and patches.
- `changes.diff`: the single FFmpeg patch listed in Electron's `patches/ffmpeg/.patches`, `link_with_loader_path.patch`, retaining its author and date. ORVIK makes no additional source changes.
- `chromium/DEPS`, `chromium/build/`: dependency records and build scripts at Chromium `2c592105bbcd9490a9894df48d0fe59b2c512651`.
- `chromium/third_party/opus/`: Opus source, headers, build scripts and licenses from that Chromium tree; upstream Opus revision `55513e81d8f606bd75d0ff773d2144e5f2a732f5`.
- `chromium/third_party/nasm/`: source and build rules for Chromium's NASM revision `525a09a813be0f75b646ee93fc2a31c27b87d722`.
- `downloads.json`: official download URLs and hashes for the original source archives. `SHASUMS256.txt` is Electron's official release checksum list.

Copyright and license notices remain in each source tree. The complete FFmpeg tree includes optional GPL code; GPL, nonfree, version3, x264 and x265 are disabled in the three target-platform configurations. Not every source file is LGPL-licensed.

### Build route

Follow `electron/docs/development/build-instructions-macos.md` or `build-instructions-windows.md` for prerequisites and `build-instructions-gn.md` for the full procedure. You need `depot_tools`, platform SDKs and compilers. The shell example in the Korean section checks out the exact Electron commit and builds the FFmpeg target. On Windows, use the quoting and tool setup in its platform documentation. Use `target_cpu="x64"` for Intel macOS and Windows x64.

Gclient retrieves Chromium, FFmpeg and tools pinned by Electron's DEPS and applies Electron's patches. Do not apply `changes.diff` twice to an already patched checkout. To apply the Electron patch separately to the included original FFmpeg tree, run `git apply ../changes.diff` inside that tree. Source headers, `.gni` files and generated `config.h` files are included.

This is not a standalone FFmpeg CLI `./configure` build. Electron's `build/args/release.gn` imports `all.gn` and configures a shared library. Retain `ffmpeg_branding="Chrome"`, `proprietary_codecs=true` and `is_component_ffmpeg=true`. Generated platform/CPU codec configurations are under `ffmpeg/chromium/config/Chrome/`. Follow Electron's documentation and `electron/build/pgo_profiles/README.md` for PGO profiles and toolchains.

The archive does not contain an entire Chromium workspace or operating-system SDKs. Synchronize the remaining build environment using the pinned DEPS. This build route was compiled from upstream documentation and settings; a full compile and application startup with a modified library have not been performed here. Bit-for-bit reproducibility is not guaranteed. See `README.md` for replacement instructions and rights.
