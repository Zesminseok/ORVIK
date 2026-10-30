# 변경 내역 / Changelog

[한국어](#한국어), [English](#english)

## 한국어

공개 릴리스의 변경 내역입니다.

## 2.0.0 (2026-10-30)

ORVIK 2.0은 Electron 앱을 대체하는 네이티브 앱(C++ / JUCE)입니다. 1초 안에 켜지고 메모리와 CPU를 훨씬 덜 쓰며 1.6의 기능을 모두 갖추고 있습니다. macOS 13.3 이상(Apple Silicon), Windows 10, 11(x64). Intel Mac 빌드는 없습니다.

**추가**

- OUTPUT 노드 편집기: OSC 페이지와 Art-Net DMX 패치를 대신합니다. 덱과 믹서 값을 변환(범위, 모양, 반전, 프리런, 시간 형식, 연산)해서 OSC, Art-Net / sACN DMX, MIDI CC, MIDI Note로 보냅니다. 기존 OSC 줄과 DMX 패치는 처음 켤 때 노드로 옮겨집니다.
- SET LIST 큐 편집: 곡마다 큐(이름, 시간, 마디.박, 그룹, 동작: OSC, Art-Net DMX, MIDI, 대기)를 둡니다. 웨이브폼은 음원, HISTORY, CDJ에서 가져옵니다. 박, 마디, 프레임 스냅과 rekordbox 핫큐 가져오기가 있습니다.
- CUE CALL 창: 그룹별 다음 큐, 타임라인, 남은 시간(초와 마디.박). 보드와 레이어 테마, 메인 창에 붙이거나 따로 띄우기, 폰과 태블릿용 웹 페이지(`/cuecall`).
- 음성 안내: 시스템 목소리(macOS, Windows)로 "그룹, 큐 이름, 스탠바이", 박에 맞춰 "셋, 둘, 하나, 고". 그룹별 출력 장치, 박 클릭. 안내 언어는 고른 목소리의 언어를 따릅니다.
- SHORTCUT 페이지와 MAP: 키보드, MIDI, OSC, DMX(Art-Net)로 ORVIK를 조작하고 MIDI OUT으로 상태를 돌려보냅니다. MAP은 화면의 버튼을 눌러 바로 지정합니다.
- 등록된 OEM 코드로 내보내는 Art-Net 타임코드와 DMX 출력.
- 시작과 종료 스플래시. HISTORY, SET LIST 자동 저장과 비정상 종료 뒤 복구 안내.
- GPU로 그리는 웨이브폼, 덱 화면처럼 보이는 CDJ-3000 3band 웨이브폼.

**변경**

- 네이티브 앱으로 다시 만들었습니다. 2.0은 설정을 새 폴더에 저장하므로 1.6의 설정은 옮겨지지 않습니다.
- Windows에서는 글자를 DirectWrite로 그립니다(작은 글씨가 선명).
- 서드파티 구성 요소가 네이티브 앱 기준으로 바뀌었습니다(JUCE 9와 포함 라이브러리, curl, zlib, 폰트). Electron, Chromium, FFmpeg 고지는 2.0에 해당하지 않습니다.

**1.6.3 이후 공개하지 않았던 Electron 빌드의 변경 (2.0에 포함)**

수정

- 다른 CDJ의 USB에서 같은 번호의 곡을 올리면 이전 곡의 제목, 웨이브폼, SET LIST 오프셋이 남던 문제.
- 곡을 빠르게 연달아 올리면 제목과 웨이브폼이 늦게 나오던 문제.
- CDJ에서 지운 핫큐가 화면에 남던 문제.
- 장비를 나중에 켜거나 네트워크 어댑터를 다시 연결하면 PRO DJ LINK 참여가 늦거나 끊기던 문제.
- 컴퓨터 시계가 자동으로 맞춰질 때 타임코드가 튀던 문제.
- 화면이 잠깐 멈춘 뒤 LINK LOST가 잘못 뜨던 문제.
- Wi-Fi에서 웹 뷰어와 미러 화면이 끊기거나 곡을 올릴 때 멈추던 문제.
- 가상 덱 곡 제목과 BPM이 이전 파일 값으로 바뀌던 문제.

변경

- PRO DJ LINK와 TCNet을 따로 켜고 끄며 각각 자동 시작을 설정합니다.
- HISTORY와 SET LIST는 켤 때마다 새로 시작합니다. 비정상 종료 뒤에는 복구 여부를 묻습니다.
- HISTORY에 다시 튼 곡과 가상 덱 곡도 기록합니다.
- BPM to OSC 페이지는 OSC 페이지를 거쳐 2.0에서 OUTPUT 노드 편집기가 되었습니다. 기존 설정은 유지됩니다.
- CDJ-3000 3band 웨이브폼이 덱 화면처럼 보이고 색 정보가 없는 디테일 웨이브폼에도 색이 입혀집니다.
- CDJ 마스터가 없으면 MASTER BPM이 온에어 덱을 따릅니다.
- 가상 덱에서 MKV, DTS, AC3 파일은 열지 않습니다(외부 FFmpeg 변환 경로 제거).
- 화면과 문구 정리(사이드바, 믹서 채널 색, 루프 표시, 미러링 중 MIRROR 표시).

추가

- SET LIST: 곡별 SMPTE 오프셋 자동 적용, 목록 가져오기와 내보내기(ShowKontrol 파일 포함).
- 설정 백업(`.orvikcfg`), 복원, 초기화.
- 가상 덱: ALAC(.m4a)와 .fla 파일, 재생, CUE, 꺼내기 버튼이 있는 가상 모드 화면.
- rekordbox 큐 코멘트.
- 웹 뷰어: 접속 코드 12시간 기억, 화면 확대, 오버뷰 띠.
- OSC, SET LIST 편집 되돌리기.
- 다른 프로그램이 PRO DJ LINK 포트를 쓰면 알림.
- 모든 컨트롤에 툴팁(7개 언어).

**알려진 한계**

- 베타입니다. LTC, MTC, Art-Net 타임코드는 스튜디오의 수신기로 확인했지만 모든 콘솔에서 확인한 것은 아닙니다. 공연 전에 확인하세요.
- macOS 앱은 Developer ID로 서명하고 Apple 공증을 받았습니다. Windows `.exe`는 코드 서명이 없습니다.

---

## 1.6.3 (2026-09-25)

**변경**

- 앱 이용 조건: 소유하거나 관리하는 여러 기기에서 쓸 수 있고(베타 기간) 한국어판과 영어판의 뜻이 다르면 한국어 원문이 우선합니다.
- 기간 제한이 없는 동안 첫 실행 시각을 기록하지 않고 예전 빌드가 남긴 기록을 지웁니다.
- 설정 정보에 FFmpeg 고지를 표시하고 앱에 들어 있는 라이선스 파일을 여는 버튼을 추가했습니다.

---

## 1.6.2 (2026-09-25)

**수정**

- 멈춘 덱의 디테일 웨이브폼 뒷부분이 비어 보이던 문제.
- 믹서 VU 칸 수와 CLIP 표시가 DJM과 다르던 문제.
- 60 FPS로 설정해도 화면이 60 FPS로 그려지지 않던 문제.
- 먼저 켜진 TCNet 노드와 서버 역할이 겹치던 문제.
- 새 곡을 올려도 이전 곡의 프레이즈가 남던 문제.
- 페이더를 올려 둔 채 재생을 누르면 SMPTE READY가 시작되지 않던 문제.
- 앱을 켜기 전에 올린 곡의 정보가 늦게 뜨던 문제.
- 웹 뷰어에서 피치가 bpm 단위로 표시되던 문제.

**변경**

- 하드웨어 디테일 웨이브폼을 픽셀마다 빠짐없이 그립니다.
- 웹 뷰어가 하드웨어 웨이브폼을 앱과 똑같이 그립니다.
- UI, 테마 수정(FLOW 핀, 체크박스, SMPTE 도크).
- CDJ, DJM 기능 이름을 매뉴얼 표기에 맞췄습니다(PRO DJ LINK, SOUND COLOR FX, BALANCE 등).

**추가**

- 미디어 칩: 곡이 든 USB, SD를 rekordbox 미디어 색과 플레이어 번호로 표시.
- 믹서 채널별 CLIP 표시.
- CDJ-3000 프레이즈의 필인 구간 표시.
- SMPTE: M이 A, B 중 CDJ 마스터를 따라갑니다.
- SMPTE: 첫 곡이 나가면 READY가 프리휠을 시작합니다.
- SMPTE 도크가 마지막 상태 그대로 다시 열립니다.
- 새 버전 알림: 새 릴리스가 나오면 헤더에 표시합니다(12시간마다 확인, 설정에서 끌 수 있음).

---

## 1.6.1 (2026-09-21)

**수정**

- LTC가 수신기에서 몇 프레임 늦게 읽히던 문제.
- CDJ-2000NXS2 웨이브폼을 기다리느라 다음 곡 표시가 늦던 문제.
- 이미 쓰고 있는 덱 번호로 CDJ-2000NXS2에 요청해 거부당하던 문제.
- 믹서가 없거나 나중에 켜지면 PRO DJ LINK에 연결되지 않던 문제.
- 한 덱에 요청이 겹칠 때 곡 정보, 큐, 웨이브폼이 끊기던 문제.
- 설정 창 테두리가 두 줄로 보이던 문제.

**변경**

- SMPTE 출력을 창 아래 도크로 옮겼습니다. 어느 탭에서나 보이고 접을 수 있습니다.
- 마스터 출력 소스: A, B, 시스템 시계, 프리휠.
- 오프셋을 시, 분, 초, 프레임 버튼으로(Ctrl을 누르면 10씩) 맞추고, 켜고 끌 수 있습니다.

**추가**

- SMPTE 출력 별도 창. Windows에서는 자체 타이틀바를 씁니다.

---

## 1.6.0 (2026-09-20)

**수정**

- 한국어, 중국어, 일본어 트랙 제목이 앱과 Resolume Arena에서 깨져 보이던 문제.
- 곡을 빠르게 넘긴 뒤 마지막 곡 로딩이 늦던 문제.
- LTC, MTC 타임코드 출력 동작.
- 루프 중 핫큐 동작, 루프 큐와 메모리 큐 표시.
- UI, 테마 수정(다크 테마 가독성, FLOW, 믹서, 웨이브폼, 웹 뷰어).

**추가**

- 야외용 라이트 색상 모드(앱, 웹 뷰어).
- 웹 뷰어: 다크/라이트 전환, 프레이즈 구간 표시.
- STOP 확인 대화상자.

---

## 1.5.8 (2026-09-10)

**수정**

- 네트워크 인터페이스 변경 후 믹서 데이터 수신이 끊기던 문제.
- 페이더 움직임이 Resolume에 5fps로만 전달되던 문제.
- 덱 재접속 직후 디테일 웨이브폼이 흰색으로 표시되던 문제.
- 설정의 한국어 표현과 모든 언어의 히스토리 탭 도움말.
- 언어 설정과 관계없이 한국어로 표시되던 믹서 툴팁.

**변경**

- BPM 페이지를 BPM to OSC로 변경: 아이콘 통일, 소스 대문자 표기, 소수점 대신 비트 번호 표시.
- 마스터가 없으면 OSC 템포가 재생 중이면서 온에어인 덱을 우선 선택.
- Electron 44.3.0.

**추가**

- 히스토리 탭: 실제 시각, 덱 번호, 실시간 갱신 행, CSV 내보내기.

---

## 1.5.7 (2026-09-07)

**수정**

- 다른 덱의 USB로 재생하는 CDJ-3000X의 웨이브폼 로딩 지연.
- 덱 UI 재생성 후 디테일 웨이브폼이 2D 대체 표시로 고정되던 문제.
- DJM-V10 온에어 상태 표시.
- en dash(–)에서 트랙 제목이 잘리던 문제.

**추가**

- CDJ-3000X의 프레이즈 구간 표시.

---

## 1.5.6 (2026-09-06)

**수정**

- 트랙 재로드 또는 USB 교체 후 웨이브폼이 사라지던 문제.
- 테마 변경 후 오버뷰에 깨진 이미지 아이콘이 표시되던 문제.
- 창 크기 변경 중 웨이브폼이 흰색으로 표시되던 문제.
- 한글 제목이 잘리던 문제.
- CDJ-3000X의 덱 번호 변경 시 덱 표시가 초기화되던 문제.

**변경**

- 웨이브폼 로딩 속도 개선.
- 아티스트 이름에 제목과 같은 색상 적용.
- 제목이나 아티스트가 없으면 대시 하나로 표시.

**추가**

- FLOW: 1280px보다 넓은 화면에서 큰 덱 최대 4개를 2열로 표시.

---

## 1.5.5 (2026-09-04)

**변경**

- 정식 빌드에서도 숨겨진 메뉴(Alt+Shift+A)로 로그 캡처 활성화 가능.

**추가**

- FLOW: 도크 덱에 재생 상태 아이콘 표시.

---

## 1.5.4 (2026-09-04)

**수정**

- 웨이브폼이 비어 보이던 문제.
- PRO DJ LINK에 VPN 인터페이스가 선택되던 문제.
- rekordbox 프레이즈 데이터 처리.
- Windows에서 상태 아이콘 정렬.

**변경**

- CDJ-3000의 BPM 동기화 상태를 SYNC에 표시.
- FLOW 테마 배치.
- 배지 스타일.
- 덱이 서서히 나타나는 효과.
- 한국어 표현.

---

## 1.5.3 (2026-08-30)

**수정**

- 터치스크린의 웨이브폼 미리보기.
- 길게 누르면 미리보기 위로 색상 팔레트가 열리던 문제.

**변경**

- 플레이어 번호를 눌러 덱 색상 팔레트 열기.

---

## 1.5.2 (2026-08-30)

**수정**

- 앨범아트 수신 시 Resolume Arena가 종료되던 문제.
- 남은 시간과 진행 막대가 표시되지 않던 문제.
- 트랙 변경 후 이전 앨범아트가 남던 문제.
- 트랙이 없는 덱에 다른 덱의 트랙이 표시되던 문제.
- 일부 구성에서 오버뷰 웨이브폼과 비트그리드가 누락되던 문제.
- 미러 모드의 NO LINK 표시.
- 미러 모드에서 TCNet 경고가 반복되던 문제.
- 상태 표시줄의 덱 수.
- 덱 VU 미터.

**변경**

- BAR 카운터: 굵은 글씨, 클릭 시 초 단위 전환, 다음 큐까지 8마디 이내이면 빨간색 표시.
- FLOW 역할 변경 시 확대, 축소 효과 제거.
- 그림자와 발광 효과 제거.
- 중국어 번체(대만).
- 전송 중 STOP을 누르면 확인 요청.
- Electron 44.

**추가**

- 웨이브폼 미리보기: 오버뷰를 길게 눌러 해당 구간 확인.
- FLOW 고정 버튼.
- 웹 뷰어: 4자리 코드, 네트워크 인터페이스 선택, 신호 끊김 표시.

---

## 1.5.1 (2026-08-09)

**수정**

- 트랙 변경 후 또는 분석되지 않은 트랙에서 재생 위치가 튀던 문제.
- 네트워크: VPN, 가상 어댑터, 공연장 IP 대역, TCNet 포트 충돌.

**변경**

- FLOW 테마 전환을 더 부드럽게 조정.
- 연결이 끊긴 CDJ는 10초 후 제거하고 재연결 시 복원.
- 정렬과 웨이브폼 표시 개선.

---

## 1.5.0 (2026-08-03)

**수정**

- 트랙 제목, 아티스트 표시: 한글 제목, CDJ-3000 패킷 변형 대응.
- 루프 시작, 종료 지점을 장비 값과 일치하도록 수정.
- 정지 중 시간 표시가 흔들리던 문제.
- CDJ-2000NXS2 큐 위치 갱신.

**변경**

- 믹서 VU를 DJM의 15개 LED 기준으로 보정하고 FLOW, STRIP에 소형 페이더/VU 표시 추가.
- TCNet: 하드웨어가 없으면 전송하지 않고 미러 컴퓨터 재시작이 서버에 영향을 주지 않도록 변경.
- 종료 시 포트와 임시 파일 정리.

**추가**

- 미러 모드: 네트워크의 다른 ORVIK에서 덱, 믹서, 웨이브폼, 큐, 앨범아트를 표시하고 서버 자동 검색, 재접속 지원.

---

## English

Changes in public releases.

## 2.0.0 (2026-10-30)

ORVIK 2.0 is a native app (C++ / JUCE) that replaces the Electron app. It starts in under a second, uses far less memory and CPU, and keeps every feature of 1.6. macOS 13.3 or later (Apple Silicon), Windows 10/11 (x64). There is no Intel Mac build.

**New**

- OUTPUT node editor replacing the OSC page and the Art-Net DMX patch. Deck and mixer values go through transforms (range, shape, invert, free run, time format, maths) to OSC, Art-Net / sACN DMX, MIDI CC and MIDI Note. Existing OSC rows and DMX patches are converted on first start.
- SET LIST cue editor: cues on each track (name, time, bar.beat, group, actions: OSC, Art-Net DMX, MIDI, wait) with a waveform from the audio file, HISTORY or the CDJ, snap to beat, bar or frame, rekordbox hot cue import.
- CUE CALL window: each group's next cue, a timeline and the time left in seconds and bar.beat; board and layers themes; docked in the main window or separate; a web page (`/cuecall`) for phones and tablets.
- Spoken cue calls through the system voices (macOS, Windows): "group, cue name, standby", "three, two, one, go" on the beat, per-group output device, beat clicks. The calls follow the chosen voice's language.
- SHORTCUT page and MAP: keyboard, MIDI, OSC and DMX (Art-Net) control of ORVIK, with MIDI OUT feedback; MAP binds a control by clicking it.
- Art-Net timecode and DMX output with ORVIK's registered OEM code.
- Start and shutdown splash; HISTORY and SET LIST autosave with a restore prompt after an abnormal exit.
- Waveforms drawn on the GPU; CDJ-3000 3band waveforms as on the deck screen.

**Changes**

- Rebuilt as a native app. 2.0 keeps its settings in a new folder, so 1.6 settings are not carried over.
- Windows text is drawn with DirectWrite (crisp small labels).
- Third-party components are those of the native app (JUCE 9 and its bundled libraries, curl, zlib, the fonts). The Electron, Chromium and FFmpeg notices do not apply to 2.0.

**Changes from the unreleased Electron builds after 1.6.3 (included in 2.0)**

Fixes

- Previous track's title, waveform and SET LIST offset staying when a track with the same number was loaded from another CDJ's USB.
- Titles and waveforms showing late when tracks were loaded in quick succession.
- Hot cues deleted on the CDJ staying on screen.
- PRO DJ LINK joining late or dropping when devices were switched on later or a network adapter was reconnected.
- Timecode jumping when the computer clock was set automatically.
- False LINK LOST after a brief screen freeze.
- Web viewer and mirror screen stuttering on Wi-Fi or freezing when a track was loaded.
- Virtual deck track title and BPM changing to the previous file's values.

Changes

- PRO DJ LINK and TCNet can be switched on and off separately, each with its own auto-start setting.
- HISTORY and SET LIST start fresh at every launch. After an abnormal exit, ORVIK asks whether to restore them.
- HISTORY also records replayed tracks and virtual deck tracks.
- The BPM to OSC page became the OSC page, and in 2.0 the OUTPUT node editor. Existing settings carry over.
- CDJ-3000 3band waveforms look like the deck screen, and detail waveforms without colour data are coloured too.
- MASTER BPM follows the on-air deck when there is no CDJ master.
- Virtual decks no longer open MKV, DTS and AC3 files (the external FFmpeg conversion path was removed).
- UI and wording tidy-up (sidebar, mixer channel colours, loop display, MIRROR while mirroring).

New

- SET LIST: per-track SMPTE offsets applied automatically, list import and export (including ShowKontrol files).
- Settings backup (`.orvikcfg`), restore and reset.
- Virtual decks: ALAC (.m4a) and .fla files, and a virtual mode screen with play, CUE and eject buttons.
- rekordbox cue comments.
- Web viewer: access code remembered for 12 hours, display zoom, overview strip.
- Undo for OSC and SET LIST edits.
- Notice when another program uses the PRO DJ LINK ports.
- Tooltips for every control (7 languages).

**Known limits**

- Beta. LTC, MTC and Art-Net timecode have been checked against receivers in the studio, not on every console: test before a show.
- The macOS app is signed with a Developer ID and notarized by Apple. The Windows `.exe` is not code-signed.

---

## 1.6.3 (2026-09-25)

**Changes**

- Terms of use: during the beta ORVIK may be used on several devices you own or control, and the Korean original prevails if the Korean and English versions differ in meaning.
- No first-run record is kept while there is no time limit; records left by earlier builds are removed.
- Settings > Info shows the FFmpeg notice, plus a button that opens the licence files bundled with the app.

---

## 1.6.2 (2026-09-25)

**Fixes**

- Detail waveform of a stopped deck showing blank past a point.
- Mixer VU levels and CLIP not matching the DJM.
- 60 FPS setting not drawing at 60 FPS.
- Clashing with a TCNet node that was switched on first.
- Previous track's phrases staying after loading a new track.
- SMPTE READY not starting when play was pressed with the fader already up.
- Track info showing late for tracks loaded before the app started.
- Web viewer showing pitch with a bpm unit.

**Changes**

- Hardware detail waveform draws every point in each pixel.
- Web viewer draws hardware waveforms the same as the app.
- UI and theme fixes (FLOW pin, checkboxes, SMPTE dock).
- CDJ and DJM controls named as in the manuals (PRO DJ LINK, SOUND COLOR FX, BALANCE and others).

**New**

- Media chip: the USB or SD a track is on, in its rekordbox media colour with the player number.
- Per-channel CLIP on the mixer.
- CDJ-3000 phrase fill-ins on the waveform.
- SMPTE: M follows the CDJ sync master between A and B.
- SMPTE: READY starts the freewheel when the first track goes out.
- SMPTE dock reopens as it was left.
- Update notice: a new release shows in the header (checked every 12 hours, can be turned off in settings).

---

## 1.6.1 (2026-09-21)

**Fixes**

- LTC read a few frames late at the receiver.
- Next track showing late while waiting on a CDJ-2000NXS2 waveform.
- CDJ-2000NXS2 refusing requests made with a live deck's player number.
- PRO DJ LINK not joining with no mixer, or with a mixer switched on later.
- Track info, cues and waveform cutting out when requests overlapped on one deck.
- Settings window borders drawn twice.

**Changes**

- SMPTE output moved to a dock at the bottom of the window — on every tab, collapsible.
- Master output sources: A, B, system clock, freewheel.
- Offset set by hour, minute, second and frame buttons (hold Ctrl for ten), and can be switched off.

**New**

- SMPTE output in its own window, with its own title bar on Windows.

---

## 1.6.0 (2026-09-20)

**Fixes**

- Korean, Chinese and Japanese track titles garbled in the app and in Resolume Arena.
- Last track loading late after skipping through tracks quickly.
- LTC and MTC timecode output behaviour.
- Hot cue during a loop; loop cue and memory cue display.
- UI and theme fixes (dark theme readability, FLOW, mixer, waveform, web viewer).

**New**

- Light colour scheme for outdoor use (app and web viewer).
- Web viewer: Dark/Light switch and phrase band.
- STOP confirmation dialog.

---

## 1.5.8 (2026-09-10)

**Fixes**

- Mixer data stopping for good after a network interface change.
- Fader moves reaching Resolume at only 5 fps.
- White detail waveform right after a deck reconnects.
- Korean wording in settings, and the history tab tips in every language.
- Mixer tooltips showing in Korean whatever the language setting.

**Changes**

- The BPM page is now BPM to OSC: matching icon, uppercase source, beat number instead of decimals.
- With no master set, OSC tempo follows a deck that is playing and on air first.
- Electron 44.3.0.

**New**

- History tab: real clock times, deck numbers, live rows and CSV export.

---

## 1.5.7 (2026-09-07)

**Fixes**

- Slow waveforms when a CDJ-3000X plays from another deck's USB.
- Detail waveform stuck in the 2D fallback after a deck rebuild.
- DJM-V10 on-air flags.
- Titles cut short at an en dash.

**New**

- Phrase bars from CDJ-3000X.

---

## 1.5.6 (2026-09-06)

**Fixes**

- Waveform missing after a track reload or USB swap.
- Broken-image icon on the overview after a theme change.
- White waveform while resizing the window.
- Hangul titles cut short.
- Deck clearing when a CDJ-3000X renumbers its slot.

**Changes**

- Faster waveform loading.
- Artist names in the title colour.
- One placeholder dash for a missing title or artist.

**New**

- FLOW: up to four hero decks in two columns above 1280 px.

---

## 1.5.5 (2026-09-04)

**Changes**

- Log capture can be turned on in release builds from the hidden menu (Alt+Shift+A).

**New**

- FLOW: play-state icon on dock decks.

---

## 1.5.4 (2026-09-04)

**Fixes**

- Waveforms going blank.
- A VPN interface being picked for PRO DJ LINK.
- Phrase data from rekordbox.
- Status icons misaligned on Windows.

**Changes**

- SYNC shows BPM sync on CDJ-3000.
- FLOW theme layout.
- Badge styling.
- Decks fade in.
- Korean wording.

---

## 1.5.3 (2026-08-30)

**Fixes**

- Waveform preview on touchscreens.
- Long-press opening the colour palette over the preview.

**Changes**

- Deck colour palette opens from the player number.

---

## 1.5.2 (2026-08-30)

**Fixes**

- Resolume Arena quitting on album art.
- Remaining time and progress bar not showing.
- Old album art staying after a track change.
- A deck with no track showing another deck's track.
- Overview waveform and beat grid missing in some setups.
- Mirror mode showing NO LINK.
- Mirror mode repeating the TCNet warning.
- Deck count in the status bar.
- Deck VU meters.

**Changes**

- BAR counter: bolder, click for seconds, red within 8 bars of the next cue.
- No zoom on FLOW role changes.
- No shadows or glows.
- Traditional Chinese (Taiwan).
- STOP asks first while transmitting.
- Electron 44.

**New**

- Waveform preview: hold the overview to look at that part of the track.
- FLOW pin button.
- Web viewer: 4-character code, network interface choice, signal-loss indicator.

---

## 1.5.1 (2026-08-09)

**Fixes**

- Position jumping after a track change and on unanalysed tracks.
- Network: VPN and virtual adapters, venue IP ranges, TCNet port conflicts.

**Changes**

- Smoother FLOW theme transitions.
- Disconnected CDJs clear after 10 seconds and return on reconnect.
- Alignment and waveform polish.

---

## 1.5.0 (2026-08-03)

**Fixes**

- Track title and artist display (Korean titles, CDJ-3000 packet variants).
- Loop in/out points match the hardware.
- Time display jitter while stopped.
- CDJ-2000NXS2 cue point updates.

**Changes**

- Mixer VU recalibrated to the DJM's 15 LEDs; fader/VU mini display in FLOW and STRIP.
- TCNet: no transmit without hardware; a mirror machine restarting does not affect the server.
- Port and temp file cleanup on exit.

**New**

- Mirror mode: show another ORVIK on the network — decks, mixer, waveforms, cues, artwork — with server discovery and auto-reconnect.
