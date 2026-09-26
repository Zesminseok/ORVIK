# ORVIK 서드파티 고지 / Third-Party Notices

[한국어](#한국어) · [English](#english)

## 한국어

이 문서는 상표, 프로토콜 참고 자료 및 번들 구성요소를 안내합니다. 각 구성요소의 원문 라이선스를 대체하거나 추가 권리를 부여하지 않습니다.

### 상표와 독립 제품 안내

ORVIK는 독립적인 호환성 도구입니다. AlphaTheta의 공식 PRO DJ LINK Bridge나 TC Supply의 ShowKontrol이 아니며 AlphaTheta·Pioneer DJ·TC Supply·Resolume과의 제휴·협찬·인증·승인을 의미하지 않습니다.

AlphaTheta, Pioneer DJ, CDJ, DJM, PRO DJ LINK, rekordbox, TC Supply, TCNet, ShowKontrol, Resolume, SMPTE 등 제품명·기술명·상표는 호환 대상을 설명하기 위해 사용합니다. 각 상표의 권리는 해당 권리자에게 있습니다. 프로토콜의 공개 여부가 별도 상표나 인증의 사용 허가를 의미하지는 않습니다.

### 프로토콜 참고 자료

PRO DJ LINK 호환성은 직접 캡처한 하드웨어 네트워크 패킷을 근거로 개발합니다. TCNet 출력은 [TC Supply가 공개한 TCNet LINK Specification V3.5.1B](https://www.tc-supply.com/support-documents)를 근거로 구현합니다.

[Art-Net 4 규격](https://art-net.org.uk/downloads/art-net.pdf)에 따른 고지: **Art-Net™ Designed by and Copyright Artistic Licence**.

### 런타임과 라이브러리

ORVIK는 Electron 기반 앱입니다. Electron 자체는 MIT 라이선스이며, 함께 배포되는 Chromium·Node.js·V8·ICU·FFmpeg 등의 구성요소에는 각각의 라이선스가 적용됩니다.

무료 베타와 자발적 후원이라는 제공 방식과 관계없이, 포함된 구성요소에는 각 라이선스가 적용됩니다.

| 구성요소 | 라이선스 및 고지 위치 |
| --- | --- |
| Electron | MIT. 배포 패키지의 Electron 라이선스 파일(`LICENSE.electron.txt` 또는 `LICENSE`) |
| Chromium 및 포함 구성요소 | 여러 라이선스. 배포 패키지의 `LICENSES.chromium.html` |
| Electron에 포함된 FFmpeg | LGPL-2.1-or-later 및 해당 파일별 고지. `LICENSES.chromium.html` 참조 |
| `qrcode` | MIT. 패키지의 `license` 파일 |
| `bytenode` | MIT. 패키지의 `LICENSE` 파일 |
| 위 패키지의 전이 의존성 | 각 패키지에 포함된 저작권 고지와 라이선스 |

패키지 파일은 앱 리소스 또는 `app.asar` 안에 포함될 수 있습니다. 위 표는 고지 위치 안내이며, 저작권 고지와 라이선스 전문을 생략해도 된다는 뜻이 아닙니다.

현재 준비된 Electron 44.4.5의 대응 FFmpeg 소스·패치·빌드 자료와 교체 절차는 [FFmpeg 안내](https://github.com/Zesminseok/ORVIK/blob/main/docs/third-party/FFMPEG.md)에 있습니다. 앱에는 `licenses/` 폴더로 라이선스 전문과 버전 목록을 별도로 포함합니다. 다른 Electron 버전에는 해당 버전의 자료가 필요합니다.

Electron의 버전별 소스와 의존성 참조는 [Electron 저장소](https://github.com/electron/electron)에서, Chromium의 FFmpeg 소스는 [Chromium FFmpeg 저장소](https://chromium.googlesource.com/chromium/third_party/ffmpeg/)에서 확인할 수 있습니다. 이는 업스트림 프로젝트 안내이며, 배포 바이너리와 정확히 대응하는 소스·빌드 자료 제공을 대체하지 않습니다.

ORVIK의 앱 이용 조건은 LGPL 등 서드파티 라이선스가 허용하거나 요구하는 수정·교체·재링크 권리와 수정 사항을 디버깅하기 위한 역공학 권리를 제한하지 않습니다. 세부 조건은 해당 라이선스를 따릅니다.

### 폰트와 아이콘

| 구성요소 | 라이선스 |
| --- | --- |
| DSEG7 Classic, Noto Sans KR, DM Mono, Space Grotesk, Inter, JetBrains Mono | SIL Open Font License 1.1 |
| Material Symbols | Apache License 2.0 |

폰트별 저작권 고지와 라이선스 전문은 앱의 `licenses/fonts/LICENSE.txt`와 앱 리소스의 `renderer/fonts/LICENSE.txt`에 있습니다. 이 파일은 폰트와 Material Symbols에 관한 고지이며 런타임 라이브러리의 라이선스 파일을 대체하지 않습니다.

ORVIK의 기본 앨범아트와 앱 심볼에는 [앱 이용 조건](BINARY_LICENSE.md)이 적용됩니다. 별도 라이선스가 있는 자료는 해당 라이선스를 따릅니다.

### 사용자 미디어

ORVIK의 사용권은 음원, 앨범아트, 메타데이터 또는 그 밖의 제3자 자료에 대한 권리를 부여하지 않습니다. 사용자는 자신의 작업에서 이를 사용·표시·전달·저장하는 데 필요한 권리를 확보해야 합니다.

---

## English

This document identifies trademarks, protocol references and bundled components. It does not replace each component's original license or grant additional rights.

### Trademarks and independent product notice

ORVIK is an independent interoperability tool. It is not AlphaTheta's official PRO DJ LINK Bridge or TC Supply's ShowKontrol, and does not imply affiliation with, sponsorship by, certification by or endorsement from AlphaTheta, Pioneer DJ, TC Supply or Resolume.

Product and technology names and trademarks, including AlphaTheta, Pioneer DJ, CDJ, DJM, PRO DJ LINK, rekordbox, TC Supply, TCNet, ShowKontrol, Resolume and SMPTE, identify compatibility targets. Each trademark remains with its respective owner. A publicly available protocol does not itself grant permission to use separate trademarks or certifications.

### Protocol references

PRO DJ LINK interoperability is developed from network packets captured directly from the hardware. TCNet output is implemented from the [TCNet LINK Specification V3.5.1B published by TC Supply](https://www.tc-supply.com/support-documents).

[Art-Net 4 specification](https://art-net.org.uk/downloads/art-net.pdf) credit: **Art-Net™ Designed by and Copyright Artistic Licence**.

### Runtime and libraries

ORVIK is built with Electron. Electron itself is MIT-licensed; bundled components such as Chromium, Node.js, V8, ICU and FFmpeg are subject to their respective licenses.

Each included component remains subject to its license regardless of the free-beta and voluntary-contribution distribution model.

| Component | License and notice location |
| --- | --- |
| Electron | MIT. The Electron license file in the distribution (`LICENSE.electron.txt` or `LICENSE`) |
| Chromium and included components | Multiple licenses. `LICENSES.chromium.html` in the distribution |
| FFmpeg included with Electron | LGPL-2.1-or-later and applicable file-specific notices. See `LICENSES.chromium.html` |
| `qrcode` | MIT. The package's `license` file |
| `bytenode` | MIT. The package's `LICENSE` file |
| Transitive dependencies of these packages | Copyright notices and licenses included with each package |

Package files may be inside the application resources or `app.asar`. This table identifies notice locations; it does not permit omission of copyright notices or full license texts.

Matching FFmpeg source, patches, build materials and replacement instructions prepared for Electron 44.4.5 are available in the [FFmpeg guide](https://github.com/Zesminseok/ORVIK/blob/main/docs/third-party/FFMPEG.md). Full licenses and a version manifest are included separately in the application’s `licenses/` directory. Other Electron versions require their own matching materials.

Version-specific Electron source and dependency references are available in the [Electron repository](https://github.com/electron/electron); Chromium's FFmpeg source is in the [Chromium FFmpeg repository](https://chromium.googlesource.com/chromium/third_party/ffmpeg/). These are upstream project references, not a substitute for providing source and build materials that correspond exactly to a distributed binary.

ORVIK's application license does not restrict modification, replacement, relinking or reverse engineering to debug modifications where permitted or required by third-party licenses such as the LGPL. The applicable license governs the details.

### Fonts and icons

| Component | License |
| --- | --- |
| DSEG7 Classic, Noto Sans KR, DM Mono, Space Grotesk, Inter, JetBrains Mono | SIL Open Font License 1.1 |
| Material Symbols | Apache License 2.0 |

Font copyright notices and full license texts are in the application's `licenses/fonts/LICENSE.txt` and in `renderer/fonts/LICENSE.txt` in the application resources. These files cover fonts and Material Symbols; they do not replace runtime library license files.

ORVIK's default artwork and application symbol are covered by the [application license](BINARY_LICENSE.md). Separately licensed materials remain subject to their own licenses.

### User media

An ORVIK license grants no rights to music, artwork, metadata or other third-party materials. Users must obtain the rights needed to use, display, forward or store them in their workflow.
