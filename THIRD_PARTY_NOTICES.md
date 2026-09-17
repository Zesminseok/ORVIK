# ORVIK Third-Party Notices

This file summarizes third-party trademark, protocol, and component notices for
ORVIK. It is informational and does not grant additional rights.

## AlphaTheta / Pioneer DJ / PRO DJ LINK

ORVIK is an independent third-party interoperability application. It is not
AlphaTheta's official PRO DJ LINK Bridge application and is not affiliated with,
endorsed by, sponsored by, approved by, licensed by, certified by, or otherwise
officially connected to AlphaTheta Corporation, Pioneer Corporation, Pioneer DJ,
or any related party.

References to Pioneer DJ, Pioneer, CDJ, DJM, PRO DJ LINK, rekordbox, or related
product and technology names are used only to describe compatibility targets.

Public AlphaTheta/Pioneer DJ materials identify Pioneer DJ and Pioneer as
trademarks of Pioneer Corporation used under license, and identify PRO DJ LINK
and rekordbox as trademarks or registered trademarks of AlphaTheta Corporation.
Public AlphaTheta/Pioneer DJ materials also describe PRO DJ LINK Bridge access
in the context of licensed companies and certified products. ORVIK makes no
claim to that status.

## TC Supply / ShowKontrol / TCNet

TC Supply describes TCNet as an open network protocol for exchanging
show-control information between lighting, video, and other entertainment
systems. The published TCNet LINK Specification (V3.5.1B, © 2016–2022 Event
Imagineering Group) states that "the protocol is open and free to be used and
everyone can contribute". ORVIK's TCNet output is written from that published
specification; it is not derived from any TCNet implementation.

ORVIK is not ShowKontrol or BeatKontrol, does not include ShowKontrol or
BeatKontrol code, does not use TC Supply logos, and is not affiliated with,
endorsed by, sponsored by, approved by, licensed by, certified by, or supported
by TC Supply, Event Imagineering Group, ShowKontrol, or any related party.

References to TCNet, ShowKontrol, TC Supply, or Event Imagineering Group are
used only to describe protocol compatibility and interoperability.

## Implementation

ORVIK is an independent implementation built for interoperability between compatible DJ
hardware and visual or lighting software. It works from the behavior observed on the network
between devices the developer owns or lawfully operates. No manufacturer's proprietary source
code, firmware, confidential material, licensed SDK, or non-public documentation has been
used, and none is contained in or distributed with ORVIK.

Some identifier strings and protocol-level values appear in network communication for
compatibility with existing systems. They are not branding and are not a representation of
origin, affiliation, or endorsement.

Compatibility comes from observing network traffic between devices the developer owns or
lawfully operates, and from publicly available information. This follows the interoperability
principles recognized in major jurisdictions, including 17 U.S.C. § 1201(f), Directive
2009/24/EC, and Article 101-4 of the Korean Copyright Act.

The publicly available information referred to above includes independent community research
into the Pro DJ Link protocol, in particular Deep Symmetry's DJ Link Ecosystem Analysis
(https://djl-analysis.deepsymmetry.org/). ORVIK contains no code from that project or from
any other third-party implementation.

ORVIK does not copy audio content, decrypt protected media, or bypass access controls.

## Bundled Assets

The default placeholder artwork (`default-album-artwork.png`,
`renderer/assets/default-art.png`, `renderer/assets/default-art.jpg`) is the ORVIK
application symbol, created for ORVIK and covered by the ORVIK Binary License.

## Runtime Components

ORVIK is built as an Electron desktop application (Electron 44.x). Electron
(MIT) bundles Chromium, Node.js, V8, ICU, and the FFmpeg library, among other
components; their license texts are distributed with the application as
`LICENSE.electron.txt` and `LICENSES.chromium.html`.

The bundled FFmpeg library is licensed under the GNU Lesser General Public
License and is distributed as an unmodified, dynamically linked library from
the official Electron distribution. Its corresponding source code is available
from the Electron and Chromium open-source projects
(https://github.com/electron/electron/releases). The ORVIK binary license
does not restrict rights granted by the LGPL for this component.

Runtime dependencies:

- `qrcode` (MIT), together with its own dependency tree, which ships with it:
  `dijkstrajs`, `pngjs`, `yargs`, `yargs-parser`, `cliui`, `wrap-ansi`, `string-width`,
  `strip-ansi`, `ansi-regex`, `ansi-styles`, `color-convert`, `color-name`,
  `emoji-regex`, `is-fullwidth-code-point`, `camelcase`, `decamelize`, `find-up`,
  `locate-path`, `p-locate`, `p-limit`, `p-try`, `path-exists`, `get-caller-file`,
  `require-directory`, `require-main-filename`, `set-blocking`, `which-module`,
  `y18n` — all MIT or ISC.
- `bytenode` (MIT): used to compile parts of the application to V8 bytecode during the
  release build.

Bundled fonts:

- DSEG7 Classic, Noto Sans KR, DM Mono, Space Grotesk, Inter, and
  JetBrains Mono: SIL Open Font License Version 1.1.
- Material Symbols: Apache License Version 2.0 (Google LLC), not the OFL.

Copyright notices and full license texts for all of the above are in
`renderer/fonts/LICENSE.txt`, which ships with the application.

## User Media

ORVIK does not grant rights to any music, metadata, album artwork, device
firmware, or third-party media. Users are responsible for ensuring that they
have the rights required to use, display, forward, or store any metadata,
artwork, or media-related information in their own workflow.

---

# ORVIK 서드파티 고지 요약

이 한국어 요약은 이해를 돕기 위한 것입니다. 법적 해석이 충돌할 경우 위의 영문
조항이 우선합니다.

이 문서는 ORVIK 의 서드파티 상표·프로토콜·구성요소 고지를 정리한 것입니다.
정보 제공이 목적이며 추가 권리를 부여하지 않습니다.

## AlphaTheta / Pioneer DJ / PRO DJ LINK

ORVIK 는 독립적인 서드파티 상호운용성 애플리케이션입니다. AlphaTheta 의 공식
PRO DJ LINK Bridge 애플리케이션이 아니며, AlphaTheta Corporation, Pioneer
Corporation, Pioneer DJ 또는 관련 당사자와 제휴, 보증, 후원, 승인, 라이선스,
인증 관계가 없고 그 밖의 공식 연결 관계도 없습니다.

Pioneer DJ, Pioneer, CDJ, DJM, PRO DJ LINK, rekordbox 를 비롯한 제품명·기술명에
대한 언급은 호환 대상을 설명하기 위해서만 이루어집니다.

AlphaTheta·Pioneer DJ 의 공개 자료는 Pioneer DJ 와 Pioneer 를 Pioneer
Corporation 의 상표로, 라이선스를 받아 사용하는 것으로 밝히고 있으며, PRO DJ
LINK 와 rekordbox 를 AlphaTheta Corporation 의 상표 또는 등록상표로 밝히고
있습니다. 같은 자료는 PRO DJ LINK Bridge 접근을 라이선스 회사와 인증 제품의
맥락에서 설명합니다. ORVIK 는 그러한 지위를 주장하지 않습니다.

## TC Supply / ShowKontrol / TCNet

TC Supply 는 TCNet 을 조명, 영상, 그 밖의 엔터테인먼트 시스템 사이에서 쇼 컨트롤
정보를 주고받기 위한 개방형 네트워크 프로토콜로 설명합니다. 공개된 TCNet LINK
Specification(V3.5.1B, © 2016–2022 Event Imagineering Group)은 "the protocol is
open and free to be used and everyone can contribute" 라고 밝히고 있습니다. ORVIK
의 TCNet 출력은 그 공개 규격서를 보고 구현한 것이며, 다른 TCNet 구현물에서 가져온
것이 아닙니다.

ORVIK 는 ShowKontrol 도 BeatKontrol 도 아니고, 두 제품의 코드를 포함하지 않으며,
TC Supply 의 로고를 사용하지 않습니다. 또한 TC Supply, Event Imagineering Group,
ShowKontrol 또는 관련 당사자와 제휴, 보증, 후원, 승인, 라이선스, 인증, 지원
관계가 없습니다.

TCNet, ShowKontrol, TC Supply, Event Imagineering Group 에 대한 언급은 프로토콜
호환성과 상호운용성을 설명하기 위해서만 이루어집니다.

## 구현

ORVIK는 **관찰된 네트워크 동작 및 공개된 정보**를 기반으로 외부 시스템과 통신합니다.

본 소프트웨어는 서로 다른 시스템 간의 상호운용성을 위해 네트워크 이벤트를 해석하고 변환하는 기능을 제공합니다. 개발 과정에서 어떠한 제조사의 독점적 소스 코드, 펌웨어, 기밀 자료, 라이선스 SDK 또는 비공개 PRO DJ LINK 네트워크 문서도 사용되지 않았습니다. 호환성은 개발자가 소유하거나 적법하게 운용하는 장비 사이의 네트워크 트래픽 관찰과 공개된 정보에서 확보되었습니다. 이는 주요 관할권이 인정하는 상호운용성 원칙과 부합하는 방식입니다(미국 17 U.S.C. § 1201(f), EU 지침 2009/24/EC, 대한민국 저작권법 제101조의4).

ORVIK는 Pro DJ Link 장비가 자신을 발견하고 수용하도록, 해당 프로토콜이 그 용도로 정의한 장치 식별 필드를 전송합니다. 이 값들은 기존 장비와의 상호운용을 위해 네트워크 패킷 안에만 존재하며 사용자 인터페이스에 표시되지 않고 ORVIK의 브랜딩으로 사용되지 않습니다.

위에서 말하는 공개된 정보에는 Pro DJ Link 프로토콜에 대한 독립적인 커뮤니티 연구, 특히 Deep Symmetry 의 DJ Link Ecosystem Analysis (https://djl-analysis.deepsymmetry.org/) 가 포함됩니다. ORVIK는 해당 프로젝트를 비롯한 어떤 제3자 구현의 코드도 포함하지 않습니다.

네트워크 통신에 나타나는 일부 식별 문자열과 프로토콜 값은 기존 시스템과의 호환을 위한
것이며, 브랜딩이 아니고 출처·제휴·보증의 표시도 아닙니다.

ORVIK는 오디오 콘텐츠를 복사하거나 보호된 미디어를 복호화하거나 접근 제어를 우회하지 않습니다. 트랙 메타데이터와 앨범아트는 사용자가 관리하는 라이브러리 또는 연결된 장치에서 전달되는 범위에서만 표시/전송되며, 해당 미디어와 이미지 사용 권한은 사용자 책임입니다.

## 번들 자산

기본 앨범아트(`default-album-artwork.png`, `renderer/assets/default-art.png`,
`renderer/assets/default-art.jpg`)는 ORVIK 애플리케이션 심볼로, ORVIK 를 위해 자체
제작했으며 ORVIK 바이너리 라이선스의 적용을 받습니다.

## 런타임 구성요소

ORVIK 는 Electron 데스크톱 애플리케이션으로 빌드됩니다(Electron 44.x).
Electron(MIT)은 Chromium, Node.js, V8, ICU, FFmpeg 라이브러리를 비롯한 구성요소를
번들하며, 각 라이선스 전문은 `LICENSE.electron.txt` 와 `LICENSES.chromium.html`
로 앱과 함께 배포됩니다.

번들된 FFmpeg 라이브러리는 GNU Lesser General Public License 를 따르며, 공식
Electron 배포본의 수정되지 않은 동적 링크 라이브러리로 배포됩니다. 대응 소스
코드는 Electron 및 Chromium 오픈소스 프로젝트에서 구할 수 있습니다
(https://github.com/electron/electron/releases). ORVIK 바이너리 라이선스는 이
구성요소에 대해 LGPL 이 부여하는 권리를 제한하지 않습니다.

런타임 의존성:

- `qrcode` npm 패키지: MIT License.
- `bytenode` npm 패키지(MIT): 릴리스 빌드에서 앱의 일부를 V8 바이트코드로 컴파일하는
  데 사용합니다.

번들 폰트:

- DSEG7 Classic, Noto Sans KR, DM Mono, Space Grotesk, Inter, JetBrains Mono:
  SIL Open Font License Version 1.1.
- Material Symbols: Apache License Version 2.0 (Google LLC). OFL 이 아닙니다.

위 항목의 저작권 고지와 라이선스 전문은 앱과 함께 배포되는
`renderer/fonts/LICENSE.txt` 에 있습니다.

## 사용자 미디어

ORVIK 는 음원, 메타데이터, 앨범아트, 장치 펌웨어, 서드파티 미디어에 대한 어떠한
권리도 부여하지 않습니다. 사용자는 자신의 작업 흐름에서 메타데이터, 아트워크,
미디어 관련 정보를 사용·표시·전달·저장하는 데 필요한 권리를 확보할 책임이
있습니다.
