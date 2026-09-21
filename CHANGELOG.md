# 변경 내역 / Changelog

[한국어](#한국어) · [English](#english)

## 한국어

공개 릴리스의 변경 내역입니다.

## 1.6.1 (2026-09-21)

**수정**

- LTC가 수신기에서 몇 프레임 늦게 읽히던 문제.
- CDJ-2000NXS2 웨이브폼을 기다리느라 다음 곡 표시가 늦던 문제.
- 이미 쓰고 있는 덱 번호로 CDJ-2000NXS2에 요청해 거부당하던 문제.
- 믹서가 없거나 나중에 켜지면 Pro DJ Link에 연결되지 않던 문제.
- 한 덱에 요청이 겹칠 때 곡 정보·큐·웨이브폼이 끊기던 문제.
- 설정 창 테두리가 두 줄로 보이던 문제.

**변경**

- SMPTE 출력을 창 아래 도크로 옮겼습니다. 어느 탭에서나 보이고 접을 수 있습니다.
- 마스터 출력 소스: A, B, 시스템 시계, 프리휠.
- 오프셋을 시·분·초·프레임 버튼으로(Ctrl을 누르면 10씩) 맞추고, 켜고 끌 수 있습니다.
- 채널별 Art-Net 버튼을 없앴습니다.

**추가**

- SMPTE 출력 별도 창. Windows에서는 자체 타이틀바를 씁니다.

---

## 1.6.0 (2026-09-20)

**수정**

- 한국어·중국어·일본어 트랙 제목이 앱과 Resolume Arena에서 깨져 보이던 문제.
- 곡을 빠르게 넘긴 뒤 마지막 곡 로딩이 늦던 문제.
- LTC·MTC·Art-Net 타임코드 출력 동작.
- 루프 중 핫큐 동작, 루프 큐와 메모리 큐 표시.
- UI·테마 수정(다크 테마 가독성, FLOW, 믹서, 웨이브폼, 웹 뷰어).

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
- FLOW 역할 변경 시 확대·축소 효과 제거.
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
- 네트워크: VPN·가상 어댑터, 공연장 IP 대역, TCNet 포트 충돌.

**변경**

- FLOW 테마 전환을 더 부드럽게 조정.
- 연결이 끊긴 CDJ는 10초 후 제거하고 재연결 시 복원.
- 정렬과 웨이브폼 표시 개선.

---

## 1.5.0 (2026-08-03)

**수정**

- 트랙 제목·아티스트 표시: 한글 제목, CDJ-3000 패킷 변형 대응.
- 루프 시작·종료 지점을 장비 값과 일치하도록 수정.
- 정지 중 시간 표시가 흔들리던 문제.
- CDJ-2000NXS2 큐 위치 갱신.

**변경**

- 믹서 VU를 DJM의 15개 LED 기준으로 보정하고 FLOW·STRIP에 소형 페이더/VU 표시 추가.
- TCNet: 하드웨어가 없으면 전송하지 않고 미러 컴퓨터 재시작이 서버에 영향을 주지 않도록 변경.
- 종료 시 포트와 임시 파일 정리.

**추가**

- 미러 모드: 네트워크의 다른 ORVIK에서 덱·믹서·웨이브폼·큐·앨범아트를 표시하고 서버 자동 검색·재접속 지원.

---

## English

Changes in public releases.

## 1.6.1 (2026-09-21)

**Fixes**

- LTC read a few frames late at the receiver.
- Next track showing late while waiting on a CDJ-2000NXS2 waveform.
- CDJ-2000NXS2 refusing requests made with a live deck's player number.
- Pro DJ Link not joining with no mixer, or with a mixer switched on later.
- Track info, cues and waveform cutting out when requests overlapped on one deck.
- Settings window borders drawn twice.

**Changes**

- SMPTE output moved to a dock at the bottom of the window — on every tab, collapsible.
- Master output sources: A, B, system clock, freewheel.
- Offset set by hour, minute, second and frame buttons (hold Ctrl for ten), and can be switched off.
- Per-channel Art-Net button removed.

**New**

- SMPTE output in its own window, with its own title bar on Windows.

---

## 1.6.0 (2026-09-20)

**Fixes**

- Korean, Chinese and Japanese track titles garbled in the app and in Resolume Arena.
- Last track loading late after skipping through tracks quickly.
- LTC, MTC and Art-Net timecode output behaviour.
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
