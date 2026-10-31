# ORVIK 서드파티 고지 / Third-Party Notices

[한국어](#한국어), [English](#english)

## 한국어

이 문서는 C++/JUCE로 만든 ORVIK 앱(macOS, Windows)에 관해 상표, 프로토콜 참고 자료 및 포함된 구성요소를 안내합니다. 각 구성요소의 원문 라이선스를 대체하거나 추가 권리를 부여하지 않습니다. 원문은 macOS 앱 안의 `Contents/Resources/licenses/`에 있습니다. Windows에서는 exe 안에 들어 있으며 설정의 **라이선스 파일** 버튼을 누르면 임시 폴더에 풀어서 엽니다.

### 상표와 독립 제품 안내

ORVIK은 독립적인 호환성 도구입니다. AlphaTheta의 공식 PRO DJ LINK Bridge나 TC Supply의 ShowKontrol이 아니며 AlphaTheta, Pioneer DJ, TC Supply, Resolume과의 제휴, 협찬, 인증, 승인을 뜻하지도 않습니다.

AlphaTheta, Pioneer DJ, CDJ, DJM, PRO DJ LINK, rekordbox, TC Supply, TCNet, ShowKontrol, Resolume, SMPTE 등 제품명, 기술명, 상표는 호환 대상을 설명하는 데 사용합니다. 각 상표의 권리는 해당 권리자에게 있습니다. 프로토콜이 공개되어 있다고 해서 별도 상표나 인증의 사용이 허가된다는 뜻은 아닙니다.

### 프로토콜 참고 자료

PRO DJ LINK 호환성은 직접 캡처한 하드웨어 네트워크 패킷을 근거로 개발합니다. TCNet 출력은 [TC Supply가 공개한 TCNet LINK Specification V3.5.1B](https://www.tc-supply.com/support-documents)를 근거로 구현합니다.

[Art-Net 4 규격](https://art-net.org.uk/downloads/art-net.pdf)에 따른 고지: **Art-Net™ Designed by and Copyright Artistic Licence**.

### 포함된 라이브러리

무료 베타와 자발적 후원이라는 제공 방식과 관계없이, 포함된 구성요소에는 각 라이선스가 적용됩니다.

| 구성요소 | 라이선스 | 원문 (`licenses/`) |
| --- | --- | --- |
| JUCE 9.0.3 (Raw Material Software Limited) | [JUCE 9 라이선스](https://juce.com/legal/juce-9-licence/) Starter 등급으로 사용 (JUCE는 AGPL-3.0-only와 이중 라이선스) | `juce/LICENSE.md`, 구성요소 목록 `juce/JUCE.spdx.json` |
| zlib 1.3.2 (JUCE에 포함) | Zlib | `zlib/LICENSE` |
| HarfBuzz 14.2.1 (JUCE에 포함) | MIT-Modern-Variant, 해시 코드 일부는 MIT (Zilong Tan) | `harfbuzz/COPYING`, `harfbuzz/hb-algs-MIT.txt` |
| SheenBidi 2.9.0 (JUCE에 포함) | Apache License 2.0 | `sheenbidi/LICENSE` |
| LunaSVG 3.5.0, PlutoVG 1.3.2 (JUCE에 포함) | MIT | `lunasvg/LICENSE`, `plutovg/LICENSE` |
| libpng 1.6.58 (JUCE에 포함) | PNG Reference Library License v2 | `libpng/LICENSE` |
| IJG libjpeg 10.0 (JUCE에 포함) | IJG | `libjpeg/README` |
| libwebp 1.6.0 (JUCE에 포함) | BSD-3-Clause, 특허 허가 | `libwebp/COPYING`, `libwebp/PATENTS` |
| FLAC 1.5.0 (JUCE에 포함) | BSD-3-Clause | `flac/Flac Licence.txt` |
| libogg 1.3.6, libvorbis 1.3.7 (JUCE에 포함) | BSD-3-Clause | `ogg/COPYING`, `vorbis/COPYING` |
| Opus 1.6.1, opusfile, libopusenc 0.3 (JUCE에 포함) | BSD-3-Clause | `opus/`, `opusfile/COPYING`, `libopusenc/COPYING` |
| OpenGL 함수 로더 (JUCE에 포함, GLEW, Mesa, Khronos 기반) | BSD-3-Clause (GLEW), MIT (Mesa, Khronos) | `opengl/NOTICE.txt`, `khronos/juce_khrplatform.h` |
| Tracy Profiler 0.11.1 클라이언트 (테스트 빌드에만 포함) | BSD-3-Clause | `tracy/LICENSE` |
| Apple Lossless(ALAC) 디코더 (Apple 참조 디코더를 이식한 1.x의 `renderer/alac-decode.js`를 C++ `AlacDecode.h`로 옮김) | Apache License 2.0. Copyright (c) 2011 Apple Inc. | `alac/` |
| curl 8.10.1 (Windows만, 정적 링크) | curl 라이선스 | `curl/COPYING` |
| zlib 1.3.1 (Windows만, curl용 정적 링크) | Zlib | `zlib-1.3.1/LICENSE` |

This software is based in part on the work of the Independent JPEG Group.

macOS가 제공하는 시스템 라이브러리(libcurl, zlib, ICU, CommonCrypto, Apple 프레임워크)는 앱과 함께 배포하지 않으며 각 라이선스는 macOS에 따릅니다. Windows 빌드는 curl과 zlib을 실행 파일에 넣고, Microsoft C/C++ 런타임(MSVC CRT)과 Windows SDK 라이브러리를 Microsoft의 라이선스 조건에 따라 정적으로 링크합니다. 그 밖의 Windows 구성요소(Schannel, WASAPI, DirectSound, Media Foundation 등)는 운영체제가 제공합니다.

### 폰트와 아이콘

| 구성요소 | 라이선스 |
| --- | --- |
| DSEG7 Classic, Noto Sans KR, DM Mono, Space Grotesk, Inter, JetBrains Mono | SIL Open Font License 1.1 |
| Material Symbols | Apache License 2.0 |

폰트는 앱 실행 파일 안에 들어 있고 웹 뷰어용 사본은 `Contents/Resources/app/renderer/fonts/`에 있습니다. 폰트별 저작권 고지와 라이선스 전문은 `licenses/fonts/LICENSE.txt`에 있습니다.

ORVIK의 기본 앨범아트와 앱 심볼에는 [앱 이용 조건](BINARY_LICENSE.md)이 적용됩니다. 별도 라이선스가 있는 자료는 해당 라이선스를 따릅니다.

### 사용자 미디어

ORVIK의 사용권은 음원, 앨범아트, 메타데이터 또는 그 밖의 제3자 자료에 대한 권리를 부여하지 않습니다. 사용자는 자신의 작업에서 이를 사용, 표시, 전달, 저장하는 데 필요한 권리를 확보해야 합니다.

---

## English

This document identifies trademarks, protocol references and included components of the ORVIK app for macOS and Windows (C++/JUCE). It does not replace each component's original license or grant additional rights. The original texts are in `Contents/Resources/licenses/` inside the macOS app. The Windows exe carries them inside the executable; the **License files** button in Settings writes them to a temporary folder and opens it.

### Trademarks and independent product notice

ORVIK is an independent interoperability tool. It is not AlphaTheta's official PRO DJ LINK Bridge or TC Supply's ShowKontrol, and does not imply affiliation with, sponsorship by, certification by or endorsement from AlphaTheta, Pioneer DJ, TC Supply or Resolume.

Product and technology names and trademarks, including AlphaTheta, Pioneer DJ, CDJ, DJM, PRO DJ LINK, rekordbox, TC Supply, TCNet, ShowKontrol, Resolume and SMPTE, identify compatibility targets. Each trademark remains with its respective owner. A publicly available protocol does not itself grant permission to use separate trademarks or certifications.

### Protocol references

PRO DJ LINK interoperability is developed from network packets captured directly from the hardware. TCNet output is implemented from the [TCNet LINK Specification V3.5.1B published by TC Supply](https://www.tc-supply.com/support-documents).

[Art-Net 4 specification](https://art-net.org.uk/downloads/art-net.pdf) credit: **Art-Net™ Designed by and Copyright Artistic Licence**.

### Included libraries

Each included component remains subject to its license regardless of the free-beta and voluntary-contribution distribution model.

| Component | License | Text (`licenses/`) |
| --- | --- | --- |
| JUCE 9.0.3 (Raw Material Software Limited) | Used under the [JUCE 9 licence](https://juce.com/legal/juce-9-licence/), Starter tier (JUCE is dual-licensed with AGPL-3.0-only) | `juce/LICENSE.md`, inventory `juce/JUCE.spdx.json` |
| zlib 1.3.2 (in JUCE) | Zlib | `zlib/LICENSE` |
| HarfBuzz 14.2.1 (in JUCE) | MIT-Modern-Variant; part of the hash code MIT (Zilong Tan) | `harfbuzz/COPYING`, `harfbuzz/hb-algs-MIT.txt` |
| SheenBidi 2.9.0 (in JUCE) | Apache License 2.0 | `sheenbidi/LICENSE` |
| LunaSVG 3.5.0, PlutoVG 1.3.2 (in JUCE) | MIT | `lunasvg/LICENSE`, `plutovg/LICENSE` |
| libpng 1.6.58 (in JUCE) | PNG Reference Library License v2 | `libpng/LICENSE` |
| IJG libjpeg 10.0 (in JUCE) | IJG | `libjpeg/README` |
| libwebp 1.6.0 (in JUCE) | BSD-3-Clause, patent grant | `libwebp/COPYING`, `libwebp/PATENTS` |
| FLAC 1.5.0 (in JUCE) | BSD-3-Clause | `flac/Flac Licence.txt` |
| libogg 1.3.6, libvorbis 1.3.7 (in JUCE) | BSD-3-Clause | `ogg/COPYING`, `vorbis/COPYING` |
| Opus 1.6.1, opusfile, libopusenc 0.3 (in JUCE) | BSD-3-Clause | `opus/`, `opusfile/COPYING`, `libopusenc/COPYING` |
| OpenGL function loader (in JUCE, based on GLEW, Mesa and Khronos) | BSD-3-Clause (GLEW), MIT (Mesa, Khronos) | `opengl/NOTICE.txt`, `khronos/juce_khrplatform.h` |
| Tracy Profiler 0.11.1 client (test builds only) | BSD-3-Clause | `tracy/LICENSE` |
| Apple Lossless (ALAC) decoder (C++ `AlacDecode.h`, ported from 1.x's `renderer/alac-decode.js`, itself a port of Apple's reference decoder) | Apache License 2.0. Copyright (c) 2011 Apple Inc. | `alac/` |
| curl 8.10.1 (Windows only, statically linked) | curl license | `curl/COPYING` |
| zlib 1.3.1 (Windows only, statically linked for curl) | Zlib | `zlib-1.3.1/LICENSE` |

This software is based in part on the work of the Independent JPEG Group.

System libraries provided by macOS (libcurl, zlib, ICU, CommonCrypto, Apple frameworks) are not distributed with the app; their licenses are those of macOS. The Windows build links curl and zlib into the executable and statically links the Microsoft C/C++ runtime (MSVC CRT) and Windows SDK libraries under Microsoft's license terms; other Windows components (Schannel, WASAPI, DirectSound, Media Foundation and others) are provided by the operating system.

### Fonts and icons

| Component | License |
| --- | --- |
| DSEG7 Classic, Noto Sans KR, DM Mono, Space Grotesk, Inter, JetBrains Mono | SIL Open Font License 1.1 |
| Material Symbols | Apache License 2.0 |

The fonts are embedded in the app executable; copies for the web viewer are in `Contents/Resources/app/renderer/fonts/`. Font copyright notices and full license texts are in `licenses/fonts/LICENSE.txt`.

ORVIK's default artwork and application symbol are covered by the [application license](BINARY_LICENSE.md). Separately licensed materials remain subject to their own licenses.

### User media

An ORVIK license grants no rights to music, artwork, metadata or other third-party materials. Users must obtain the rights needed to use, display, forward or store them in their workflow.
