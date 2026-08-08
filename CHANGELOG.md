# Changelog

All notable changes to ORVIK are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/);
versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## 1.5.1 — 2026-08-09

### English

- FLOW theme refined — tier changes glide with a 0.5s morph, settle on a 2s promote / 5s demote grace, and short samples or parked decks no longer crowd the big tiers.
- Position accuracy — fixed a brief stale position right after a track change (CDJ-2000NXS2), and a jumping playhead on unanalyzed tracks whose length kept flip-flopping.
- A disconnected CDJ leaves the deck after 10 seconds and returns automatically on reconnect.
- Network portability — broadcasts no longer leak into VPN/virtual adapters, several venue-network address cases fixed, and a taken TCNet port now recovers automatically.
- Visibility polish: overview waveform headroom, a clearer start-cue arrow, header and status-badge alignment.
- Logs are unified into one file per session, saved only to the folder chosen in settings.

### 한국어

- FLOW 테마 다듬기 — 역할 전환이 0.5초 몰프로 부드러워지고 승격 2초·강등 5초 유예로 안정화. 짧은 샘플·정지 중 덱이 큰 자리를 차지하지 않습니다.
- 트랙 위치 정확도 — 트랙 교체 직후 이전 위치가 잠깐 표시되던 문제(CDJ-2000NXS2), 분석 안 된 트랙에서 길이가 흔들리며 플레이헤드가 튀던 문제 수정.
- 연결이 끊긴 CDJ 는 10초 후 덱에서 정리되고, 다시 연결되면 자동으로 돌아옵니다.
- 네트워크 이식성 — VPN·가상 어댑터로 새던 브로드캐스트 차단, 장소별 IP 대역 접속 실패 수정, TCNet 포트 충돌 자동 복구.
- 시인성 개선 — 오버뷰 웨이브폼 여백, 시작 큐 화살표, 헤더·상태 뱃지 정렬.
- 로그는 세션당 한 파일로, 설정에서 지정한 폴더에만 저장됩니다.

## 1.5.0 — 2026-08-06

### English

**Mirror Mode (new)** — view an ORVIK running on another PC as if it were local. A CDJ's track database only accepts one client, so a second PC could never show color waveforms, cues or track info — Mirror Mode relays that link: automatic server discovery, hardware-true positions, auto-reconnect, and zero TCNet/gear interference from the mirroring machine.

- Track title/artist decoding hardened (Korean titles, CDJ-3000 packet variants).
- Loop in/out points now match the deck display exactly.
- Fixed a subtle time-readout flicker while a deck sits parked.
- CDJ-2000NXS2 cue-point updates now follow hardware behavior.
- Mixer VU recalibrated to the DJM's 15-LED ladder; fader/VU mini badges in FLOW & STRIP themes.
- TCNet: deckless machines stay silent; restarting a mirror can no longer drop the hardware server from Arena.
- More thorough port/temp-file cleanup on exit.

### 한국어

**미러 모드 (신규)** — 같은 네트워크의 다른 PC 에서 실행 중인 ORVIK 을 그대로 비춥니다. CDJ 의 트랙 데이터베이스는 한 프로그램만 접속할 수 있어 두 번째 PC 에서는 컬러 웨이브폼·큐·트랙 정보를 볼 수 없었는데, 미러 모드가 그 연결을 대신합니다 — 서버 자동 탐색, 하드웨어 원본 위치 그대로, 자동 재연결, 미러 머신은 TCNet·장비에 일절 간섭하지 않습니다.

- 트랙 제목·아티스트 표기 안정화 (한글 제목, CDJ-3000 변종 패킷).
- 루프 인/아웃 포인트가 기기 표시와 정확히 일치.
- 정지 중 현재 시간 표시가 미세하게 떨리던 문제 수정.
- CDJ-2000NXS2 큐 포인트 갱신 규칙을 하드웨어 동작에 맞춤.
- 믹서 VU 를 DJM 15-LED 에 맞춰 재보정, FLOW·STRIP 테마에 페이더/VU 미니 표시.
- TCNet: 실기 없는 머신은 송출하지 않고, 미러 재시작이 서버에 영향을 주지 않습니다.
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
