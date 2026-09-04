# Changelog

All notable changes to ORVIK are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/);
versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## 1.5.4 (2026-09-04)

**Fixes**

- Waveforms going blank.
- A VPN interface being picked for Pro DJ Link.
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

- Waveform preview works on a touchscreen. It was bound to mouse events, which touch only synthesizes for a tap, so a drag went to the page as a scroll.
- Long-pressing the waveform no longer opens the deck colour palette on top of the preview.
- The deck colour palette opens from the player number instead of anywhere on the card, so long-press reaches it on touch without competing with the waveform.

---

## 1.5.2 (2026-08-30)

- Resolume Arena 가 앨범아트 때문에 종료되던 문제 수정
- 남은 시간·진행바가 표시되지 않던 문제 수정
- 곡이 바뀌어도 이전 앨범아트가 남던 문제 수정
- 곡 정보가 없는 덱에 다른 덱의 곡이 표시되던 문제 수정
- 일부 구성에서 오버뷰 웨이브폼·비트그리드가 오지 않던 문제 수정
- 미러 모드에서 덱이 NO LINK 로 보이던 문제 수정
- 미러 모드에서 TCNet 경고가 계속 뜨던 문제 수정
- 하단 상태바 덱 수에서 곡을 로드하지 않은 덱이 빠지던 문제 수정

### 새 기능
- **웨이브폼 미리보기** — 오버뷰를 마우스 왼쪽 버튼으로 누르고 있으면 그 지점의
  디테일 웨이브폼을 봅니다. 재생은 그대로 흐르고, 버튼을 떼면 원래 자리로
  돌아옵니다 (하드웨어 덱).
- **FLOW 핀 버튼** — 모델명 옆 핀으로 원하는 덱을 크게 고정합니다.
- **웹 뷰어** — 화면에 뜬 4자리 코드로 접속합니다 (긴 주소를 보내지 않아도 됩니다).
  QR 은 그대로 바로 열리고, 뷰어를 열어둘 네트워크 인터페이스도 고를 수 있습니다.
  신호가 끊기면 화면 상단에 표시됩니다.

### 화면
- 덱 VU 미터 수정
- BAR 카운터: 더 굵게, 클릭하면 BAR ↔ 초 전환, 다음 큐까지 8 BAR 이하면 빨강
- FLOW 역할 전환에서 글자가 커졌다 줄어드는 확대감 제거
- 그림자·글로우 제거, 색 코드 통일
- 번체 중국어(대만) 추가
- 송출 중 STOP 을 누르면 확인을 받습니다
- Electron 44 로 업데이트

---

## 1.5.1 (2026-08-09)

### 개선/수정
- FLOW 테마 전환이 더 부드럽고 안정적으로.
- 트랙 교체 직후·미분석 트랙에서 위치가 튀던 문제 수정.
- 연결 끊긴 CDJ 는 10초 후 정리되고 재연결 시 자동 복귀.
- 네트워크 수정: VPN·가상 어댑터, 장소별 IP 대역, TCNet 포트 충돌.
- 정렬·웨이브폼 등 소소한 다듬기.

---

## 1.5.0 (2026-08-03)

### 미러 모드 (신규)
같은 네트워크의 다른 PC 에서 실행 중인 ORVIK 을 그대로 비추는 모드입니다.
CDJ 의 트랙 데이터베이스는 한 프로그램만 접속할 수 있어서 두 번째 PC 에서는
지금까지 컬러 웨이브폼·큐·트랙 정보를 볼 방법이 없었습니다 — 미러 모드가 그
연결을 대신합니다. 실기가 연결된 ORVIK 이 서버가 되고, 다른 PC 의 ORVIK 은
덱·믹서(페이더/EQ/VU)·웨이브폼·큐·아트워크를 자기 화면처럼 표시합니다.

- 서버 자동 탐색 — 같은 네트워크의 ORVIK 을 찾아 PC 이름으로 보여주고 선택만 하면 연결됩니다.
- 위치는 하드웨어 원본 값을 그대로 중계 — 미러 화면도 실기와 같은 시점을 가리킵니다.
- 미러 중에는 TCNet 송출과 장비 제어를 하지 않아 기존 셋업을 방해하지 않습니다.
- 서버 종료·재시작 시 자동 재연결, 재생 중에 켜도 현재 트랙 정보를 즉시 가져옵니다.

### 개선/수정
- 트랙 제목·아티스트 표기 안정화 (한글 제목 오표기, CDJ-3000 변종 패킷).
- 루프 인/아웃 포인트가 기기 표시와 정확히 일치하도록 수정.
- 정지 중 현재 시간 표시가 미세하게 떨리던 문제 수정.
- CDJ-2000NXS2 큐 포인트 갱신 규칙을 하드웨어 동작에 맞춤.
- 믹서 VU 를 DJM 실기 15-LED 에 맞춰 재보정, FLOW·STRIP 테마에 페이더/VU 미니 표시 추가.
- TCNet: 실기 없는 머신은 송출하지 않고, 미러 머신의 재시작이 서버에 영향을 주지 않습니다.
- 종료 시 포트·임시파일 정리 강화.

## 1.4.3 — 2026-07-24

### English

- Faster track loading — waveforms, cue points and beat grids appear right after loading.
- Detail waveform: native resolution, progressive drawing, and stability fixes.
- Fixed ghosting and blurry text on some Windows GPUs.
- Hover tooltips on main controls, REPORT (Instagram DM) button, UI Drawing FPS now applies everywhere, translation fixes.

### 한국어

- 곡 로드 속도 개선 — 웨이브폼·큐 포인트·비트 그리드가 로드 직후 표시됩니다.
- 디테일 웨이브폼: 네이티브 해상도, 점진 드로잉, 안정성 수정.
- 일부 Windows GPU 의 잔상·글씨 뭉개짐 수정.
- 주요 버튼 설명 툴팁, REPORT(Instagram DM) 버튼, UI Drawing FPS 전면 적용, 번역 수정.

## 1.4.2 — 2026-07-19

### English

- Mixer panel: channel fader curve, crossfader curve, and EQ/ISO mode are now shown from the DJM; fixed V10 6-channel EQ knobs showing shifted values.
- Channel and master VU meters redrawn as continuous bars for better level visibility.
- New UI Scale option (100 / 125 / 150%) for HiDPI monitors.
- All UI fonts are now bundled — the app renders fully offline.
- Fixed small text looking blurry on Windows.
- UI improvements.

### 한국어

- 믹서 패널: DJM 의 채널 페이더 커브·크로스페이더 커브·EQ/ISO 모드 표시, V10 6채널 EQ 노브 값이 밀려 보이던 문제 수정.
- 채널·마스터 VU 미터를 연속 바 형태로 변경해 레벨 가시성 개선.
- HiDPI 모니터용 UI 배율 옵션 추가 (100 / 125 / 150%).
- 모든 UI 폰트 내장 — 오프라인에서도 완전하게 표시됩니다.
- Windows 에서 작은 글씨가 뭉개져 보이던 문제 수정.
- UI 개선.

## 1.4.1 — 2026-07-17

### English

- Fixed the Settings window layout collapsing into narrow vertical columns on Windows.
- Fixed repeated deck paint errors during track loading (waveform transition).
- The sidebar Settings button now toggles the Settings window — click again to close it.
- Minor bug fixes and improvements.

### 한국어

- Windows 에서 설정 창이 좁은 세로 컬럼으로 깨지던 문제 수정.
- 트랙 로딩 중(웨이브폼 전환) 덱 페인트 오류가 반복되던 문제 수정.
- 사이드바 설정 버튼이 설정 창을 토글 — 다시 누르면 닫힙니다.
- 자잘한 버그 수정 및 개선.

## 1.4.0 — 2026-07-14

### English

- Fixed a startup crash on some Windows and macOS machines (app now launches reliably).
- Updated the app runtime for better performance and security (Chromium/Electron refresh).
- Security: hardened handling of track title/artist text from hardware.
- Fixed a brief color flash when the app starts.
- Header and controls now stay consistent when switching deck themes — only the deck area changes.
- Fixed a horizontal scrollbar in the STK theme with 3 or more decks.
- Added on-screen guidance when no decks or hardware are connected.
- Improved resilience to malformed network packets on the DJ Link network.
- Minor bug fixes and improvements.

### 한국어

- 일부 Windows·macOS 에서 앱이 실행되지 않던 시작 크래시 수정 (이제 정상 실행).
- 앱 런타임 갱신 — 성능·보안 향상 (Chromium/Electron 리프레시).
- 보안: 하드웨어에서 오는 곡 제목·아티스트 텍스트 처리 강화.
- 앱 시작 시 잠깐 보이던 색 플래시 수정.
- 덱 테마 전환 시 헤더·컨트롤이 그대로 유지 — 덱 영역만 바뀝니다.
- STK 테마에서 덱 3개 이상일 때 가로 스크롤바 생기던 문제 수정.
- 덱·하드웨어 미연결 시 화면 안내 추가.
- DJ Link 네트워크의 비정상 패킷에 대한 견고성 개선.
- 자잘한 버그 수정 및 개선.

## 1.3.9 — 2026-07-13

### English

- Completed translations for all six supported languages.
- Added a **GPU safe rendering** toggle in Settings (Windows) for machines with display glitches.
- Minor bug fixes and improvements.

### 한국어

- 지원 6개 언어 번역 완성.
- 설정에 **GPU 안전 렌더링** 토글 추가 (Windows) — 화면 글리치가 있는 머신용.
- 자잘한 버그 수정 및 개선.
