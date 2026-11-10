# ORVIK 使用手冊 (2.0)

本手冊說明 ORVIK 的各個畫面與其組成。圖片中的編號與清單編號一致。2.0 版是原生應用程式 (C++ / JUCE)，本手冊以 2.0 的畫面為準。

## 目錄

1. [開始之前](#1-開始之前)
2. [畫面配置](#2-畫面配置)
3. [頂欄](#3-頂欄)
4. [側欄](#4-側欄)
5. [狀態列](#5-狀態列)
6. [DECKS](#6-decks)
7. [SMPTE OUT](#7-smpte-out)
8. [MIXER](#8-mixer)
9. [HISTORY](#9-history)
10. [SET LIST](#10-set-list)
11. [CUE CALL](#11-cue-call)
12. [NETWORK](#12-network)
13. [OUTPUT](#13-output)
14. [SHORTCUT 與 MAP](#14-shortcut-與-map)
15. [設定](#15-設定)
16. [商標與授權](#16-商標與授權)

---

## 1. 開始之前

### ORVIK 是什麼

ORVIK 接收 CDJ 與 DJM 的播放資訊，並轉送給燈光與影像軟體：TCNet, SMPTE 時間碼 (LTC, MTC, Art-Net), OSC, DMX (Art-Net, sACN), MIDI 與 MIDI Clock。它也能在 cue call 視窗中向工作人員顯示 set list 的 cue 並唸出來。它只向器材詢問資訊，不控制器材。

**安全。** ORVIK 不是安全裝置。網路、電腦或唱盤發生問題時，其輸出（時間碼、OSC、DMX、MIDI 與 Cue 動作）可能延遲、中斷或重複。請勿只靠 ORVIK 觸發或維持任何可能造成人員受傷或財物損壞的裝置，例如火焰、煙火、CO2 噴射、雷射或會移動的機械。這類效果需要自己的安全系統：由受過訓練的操作人員按住的許可（Dead-man）開關、緊急停止，以及設備製造商與當地法規規定的限制。演出前請以實際的接收裝置測試每一個 Cue。

### 系統需求

| 項目 | 內容 |
| --- | --- |
| 作業系統 | macOS 13.3 以上 (Apple Silicon), Windows 10, 11 (x64) |
| 已驗證器材 | CDJ-3000X, CDJ-3000, CDJ-2000NXS2, DJM-V10, DJM-900NXS2 |

可取得的資訊依器材, 韌體與連線方式而異。

### 安裝與執行

- **macOS** — 開啟 DMG，將 ORVIK 拖到「應用程式」資料夾。
- **Windows** — 直接執行下載的 `.exe`。沒有安裝程式。檔案未簽章；第一次執行若 SmartScreen 出現警告，選「其他資訊」再「仍要執行」。

啟動與結束時會短暫顯示歡迎畫面。結束時會先關閉 TCNet 與 PRO DJ LINK 連線。

### 第一次連線

1. 把這台電腦接到播放器與混音器所在的網路：同一台交換器或路由器。送往 Arena 的 TCNet 可以走同一個網路，也可以走第二張網路卡。
2. 啟動 ORVIK。PRO DJ LINK 與 TCNET 會自動開啟 ([設定](#15-設定)中的**自動開始 PRO DJ LINK** 與**自動開始 TCNet**)；否則在頂欄開啟。
3. 播放器會出現在 DECKS 與 NETWORK。選擇**自動偵測**時，ORVIK 使用看得到 CDJ 的網路卡；要固定使用某張網路卡，請在設定的 **PRO DJ LINK 介面**中選擇。
4. 若沒有出現任何器材，NETWORK 會說明網路設定哪裡有問題以及如何處理。[12.1](#121-網路設定警告)

macOS 上，請在「系統設定 > 隱私權與安全性 > 區域網路」中允許 ORVIK。Windows 上，防火牆詢問時請允許 ORVIK；沒有路由器的網路卡會被視為公用網路，因此也要允許公用網路。

---

## 2. 畫面配置

![畫面配置](images/01-overview.png)

1. **頂欄** — 主 BPM, PRO DJ LINK 與 TCNET 開關, CUE CALL 按鈕, 音量與視窗按鈕。[第 3 章](#3-頂欄)
2. **側欄** — 選擇頁面。[第 4 章](#4-側欄)
3. **頁面** — 側欄所選的畫面。圖中為 DECKS。
4. **SMPTE OUT 面板** — 顯示並設定時間碼輸出。點一下展開。[第 7 章](#7-smpte-out)
5. **狀態列** — 傳送與應用程式的狀態。[第 5 章](#5-狀態列)

CUE CALL 視窗停靠時，cue call 面板會顯示在頁面右側。[第 11 章](#11-cue-call)

---

## 3. 頂欄

![頂欄](images/02-header.png)

1. **MASTER BPM** — CDJ master 的 BPM。master 沒有 BPM 時，顯示播放中 deck 的 BPM，優先顯示 on air 的 deck。左側方格是 master 的播放器編號。
2. **PRO DJ LINK** — 開關與 CDJ, DJM 的連線。
3. **TCNET** — 開關傳給燈光與影像軟體的 TCNet 傳送。設定中的 TCNet 模式為 Client，或處於 STANDBY 時，即使開啟也不會傳送。
4. **CUE CALL** — 在主視窗右側停靠開啟 cue call。再按一次關閉所有 cue call，Alt+點擊（Mac 為 Option+點擊）則開成獨立視窗。有 cue call 開著時，按鈕保持填滿。[第 11 章](#11-cue-call)
5. **重新載入** — 重新載入畫面 (Cmd/Ctrl+R)。虛擬 deck 的播放會停止。
6. **M.VOL** — 應用程式輸出的虛擬 deck 聲音音量。不影響 CDJ 與混音器的音訊。
7. **視窗按鈕** — Windows 上為最小化, 最大化與關閉 ORVIK。macOS 使用左上角的標準按鈕，「視窗」選單中有「縮到最小」(⌘M) 與「關閉」(⌘W)。若有未儲存的 history 或 set list，ORVIK 會在關閉時詢問是否儲存。

### 開關的狀態

PRO DJ LINK 或 TCNET 開啟時，其左側方格會填上狀態色：一切正常為綠色，開啟中為閃爍的點。有需要確認的事項時，開關內會出現以下標籤之一。

| 標籤 | 意義 |
| --- | --- |
| NO H/W | PRO DJ LINK 已開啟，但看不到任何 CDJ 或 DJM。 |
| LOST | 有硬體 deck，但超過 1.5 秒沒有任何 CDJ 送出狀態。 |
| STANDBY | 同一網路上有更早啟動的 TCNet 伺服器；傳送暫停等待中。 |

網路設定使播放器與混音器無法連到 ORVIK 時，PRO DJ LINK 開關的提示會說明問題所在。[12.1](#121-網路設定警告)

有新版本時，頂欄會出現 UPDATE 標記。點一下開啟下載頁面。

---

## 4. 側欄

| 選單 | 內容 |
| --- | --- |
| DECKS | 各 deck 的波形, 時間碼與播放狀態 |
| MIXER | DJM 的聲道推桿, EQ 與電平表 |
| HISTORY | 曾經 on air 的曲目記錄 |
| SET LIST | Set list, 每首曲目的時間碼偏移與 cue 編輯 |
| NETWORK | PRO DJ LINK 器材, TCNet 節點與網路設定警告 |
| OUTPUT | 把 deck 與混音器的值以 OSC, DMX (Art-Net, sACN), MIDI 送出的節點編輯器，以及 Art-Net 網路與時間碼設定。[第 13 章](#13-output) |
| MAP | 開關 MAP：點畫面上的控制項，再按鍵或送出 MIDI 或 DMX 來指定。[第 14 章](#14-shortcut-與-map) |
| SHORTCUT | 鍵盤, MIDI, OSC, DMX 輸入與已指定項目的清單。[第 14 章](#14-shortcut-與-map) |
| SETTINGS | 開啟設定視窗；再點一次關閉。[第 15 章](#15-設定) |

選單由上而下分組：DECKS 與 MIXER, HISTORY 與 SET LIST, NETWORK 與 OUTPUT。MAP 與 SHORTCUT 位於底部 SETTINGS 的上方。

---

## 5. 狀態列

![狀態列](images/05-status-bar.png)

1. **TCNET** — 頂欄的 TCNET 開關是否開啟。STANDBY 時即使顯示 ON 也不會傳送。
2. **ARENA** — 最近 10 秒內看到的 TCNet 節點數。
3. **DECKS** — 硬體 deck 加上已載入曲目的虛擬 deck。
4. **UP** — 引擎啟動以來的時間。
5. **CPU** — ORVIK 的 CPU 使用率。
6. **GPU** — ORVIK 使用顯示卡時間的比例，系統有回報時才顯示。
7. **MEM** — ORVIK 使用的記憶體。
8. **Deck 圓點** — 每個 deck 一個點。硬體 deck 顯示其顏色；虛擬 deck 依播放, cue, 已載入或空白改變顏色。

有問題時，狀態列會出現 LINK, OUT 或 MIX：LINK 表示播放器編號重複或網路設定需要注意 (例如 PDJL 無裝置訊號或 PDJL 不同子網路)，OUT 表示 TCNet 傳送已停止或應用程式處於鏡像模式，MIX 表示混音器資料中斷。點一下會前往相關頁面。一切正常時不會出現。

---

## 6. DECKS

### 6.1 Deck 模式與已連線器材

![Deck 模式與已連線器材](images/03-deck-top.png)

1. **Deck 模式** — HARDWARE 跟隨 PRO DJ LINK 網路上的 CDJ (預設)。VIRTUAL 使用播放本機音訊檔的虛擬 deck。切換模式會移除目前的 deck；有虛擬 deck 時切到 HARDWARE 會先確認。[6.4](#64-虛擬-deck)
2. **CDJ** — 每台已連線播放器的編號與型號。滑鼠移上去顯示 IP；按右鍵選擇 deck 顏色。
3. **DJM** — 已連線混音器的型號。超過 1.5 秒沒有收到任何控制值時加上 NO DATA。

### 6.2 Deck 卡片

![Deck 卡片](images/04-deck-card.png)

圖中為 FLOW 版面的卡片。其他版面會省略或移動部分項目。

1. **播放器編號** — 按右鍵選擇 deck 顏色。
2. **曲名, 藝人**
3. **調性** — 曲目的調性，以 Camelot 表記如 8A；無法換算的照原樣顯示。
4. **ON AIR** — 此 deck 的聲道在混音器上 on air 時亮起。
5. **MASTER** — 此 deck 為 CDJ master 時亮起。
6. **SYNC** — Beat Sync 啟用時亮起。
7. **聲道推桿, 電平表** — DJM 上的推桿位置與聲道電平。
8. **播放狀態** — PLAY, PAUSE, CUE, LOOP 等。
9. **型號, 媒體** — CDJ 型號與曲目所在的媒體 (播放器編號與 USB 或 SD)。標籤顏色是 rekordbox 中設定的媒體顏色；沒有顏色時為灰色。沒有顏色資訊時以文字取代標籤。
10. **固定放大** — 在 FLOW 中讓此 deck 保持放大。再點一次或載入其他曲目即解除。
11. **細部波形** — 播放位置附近的波形。紅線是播放位置。
12. **小節計數** — 到下一個記憶 cue 的小節數。8 以下變紅；前方沒有 cue 時顯示已經過的小節數。點一下改為秒數。
13. **縮放** — − 放大檢視 (每按一次 ×2)，+ 縮小 (最小 0.5 秒)。RST 回到預設的 8 秒。
14. **整體波形** — 整首曲目。硬體 deck 上按住不放可預覽該處的細部波形；放開即回復。預覽時計數器顯示與播放位置的距離，單位為秒或分:秒。
15. **時間碼** — 目前位置的時間碼。
16. **時間** — 點一下在已播放與剩餘之間切換。右側為總長度。
17. **拍位置** — 小節中的第幾拍正在播放。
18. **BPM** — 左上為原始 BPM，下方為速度變化 (%)，右側大數字是目前 BPM。
19. **SMPTE MASTER** — 把此 deck 指定到 layer A 或 B，並把該 layer 設為 MASTER 的來源。再點一次只解除 MASTER 來源；A, B 的指定維持。LTC, MTC 與 Art-Net 輸出在 SMPTE OUT 中另外開啟。
20. **SMPTE A, B** — 把此 deck 設為 SMPTE layer A 或 B 的來源。

波形顏色為 3band 而曲目沒有 3band 資料時，deck 上會顯示 !，波形改以 RGB 顯示。波形由顯示卡 (GPU) 繪製。

### 6.3 版面

Deck 有四種版面。在[設定](#15-設定)的**版面主題**中選擇。

<table>
<tr>
<td width="50%"><img src="images/layout-flow.png" alt="FLOW"><br><b>FLOW</b> — 依 CDJ master, on air 與播放狀態調整 deck 大小。視窗夠寬時最多四個已載入的 deck 放大顯示。</td>
<td width="50%"><img src="images/layout-stk.png" alt="STK"><br><b>STK</b> — 把所有 deck 以相同大小的卡片兩兩並排堆疊。</td>
</tr>
<tr>
<td><img src="images/layout-strip.png" alt="STRIP"><br><b>STRIP</b> — 每個 deck 一條細列。只顯示整體波形。</td>
<td><img src="images/layout-row.png" alt="ROW"><br><b>ROW</b> — 每個 deck 一列，細部與整體波形都很寬。</td>
</tr>
</table>

### 6.4 虛擬 deck

![虛擬 deck](images/07-virtual-deck.png)

Deck 模式為 VIRTUAL 時，虛擬 deck 會播放本機的音訊檔。不論版面主題為何，虛擬 deck 一律使用 FLOW 卡片，傳輸按鈕 (⑧) 位於時間碼與 BPM 之間。圖中為一個已載入曲目的 deck 與一個空的 deck。

1. **Deck 編號**
2. **VIRTUAL** — 表示虛擬 deck，播放本機的檔案。
3. **×** — 移除此虛擬 deck。
4. **聲道推桿** — 拖曳調整。
5. **退出** — 卸載曲目。
6. **細部波形** — 拖曳移動位置。
7. **整體波形** — 點或拖曳移動位置。
8. **|◀, CUE, ▶** — CUE 在暫停時設定 cue 點並在按住期間播放；播放中則回到 cue 點。▶ 播放與暫停；|◀ 停止並回到開頭。
9. **開啟** — 點一下選擇音訊檔，或把檔案拖放到這裡。
10. **新增虛擬 deck** — 再新增一個虛擬 deck，最多 6 個。

支援的檔案：MP3, WAV, AIFF, FLAC, AAC, M4A (AAC, ALAC), OGG, MP4 (音訊)。CDJ 能開的格式這裡都能開。

虛擬 deck 的聲音從[設定](#15-設定)的**音訊輸出**所選裝置輸出；音量為頂欄的 M.VOL。

---

## 7. SMPTE OUT

![SMPTE OUT](images/06-smpte-dock.png)

時間碼輸出有三個 layer：A, B 與 MASTER。Layer A 與 B 送出所選 deck 的位置；MASTER 送出 layer A, layer B, 電腦時鐘或 FREEWHEEL。圖中為 layer A 與 MASTER；layer B 與 A 相同。

1. **SMPTE OUT** — 點一下展開或收合面板。收合時依接線顯示各 layer，再列出開啟中的輸出：A ← 1 表示 layer A 跟隨 deck 1，MASTER ← A 表示 MASTER 送出 layer A，後面接著 MASTER 的時間碼。
2. **分離** — 把 SMPTE OUT 開成獨立視窗。關閉後回到面板。
3. **Layer A** — 把所選 deck 的位置以時間碼送出的 layer。Layer B 相同。
4. **LTC, MTC, ART** — 開關此 layer 的 LTC (音訊時間碼), MTC (MIDI 時間碼) 與 ART (Art-Net 時間碼) 輸出。LTC 每個 layer 都可啟用；MTC 與 ART 一次只能用於一個 layer (開啟其中一個會關閉其他 layer 上的同一輸出)。LTC 裝置與 MTC 連接埠在[設定](#15-設定)的 **SMPTE 時間碼輸出**中選擇；Art-Net 的網路在 [OUTPUT](#13-output) 頁面上方。Art-Net 時間碼使用 SMPTE 的**影格速率**。
5. **來源 deck** — 此 layer 跟隨的 deck。與卡片上的 A, B 按鈕相同。
6. **時間碼** — 來源的位置加上偏移。實際輸出再加上設定中的**延遲補償**。
7. **− / +** — 每個欄位改變 1；按住 Ctrl (Mac 為 Cmd) 改變 10。MASTER 的 STEP 為 TIME 時改變 FREEWHEEL 時間，否則改變偏移。
8. **SET** — 表示 set list 的偏移已載入此 layer。滑鼠移上去顯示曲目。曲目不在清單中而使用 UNLISTED 偏移時，顯示 SET —。
9. **OFFSET ON** — 把偏移納入輸出或排除。數值會保留。
10. **重設** — 把偏移設為 0。
11. **MASTER** — MASTER layer。
12. **FREEWHEEL 按鈕** — ▶ 讓 FREEWHEEL 碼開始走，❚❚ 暫停並保留數值，|◀ 回到 00:00:00:00。READY (◉) 讓 FREEWHEEL 停在目前數值，並在任一 deck 開始播放時啟動。有混音器時只算當下 on air 的 deck；已在播放的與 CUE 試聽不算。
13. **來源** — A 與 B 送出該 layer 的碼加上 MASTER 的偏移。CLOCK 使用電腦時間；FREEWHEEL 從 MASTER 的最後數值自行繼續走。
14. **STEP** — MASTER 來源為 FREEWHEEL 時，− / + 改變偏移 (OFS) 還是 FREEWHEEL 時間 (TIME)。

設定中的**停止時保持 LTC** 開啟時 (預設)，停止的 deck 的 LTC 仍持續送出停止位置的碼，同一幀重複，讓接收端知道已停止。關閉時，deck 停止期間 LTC 不發出聲音。

---

## 8. MIXER

![MIXER](images/10-mixer.png)

顯示 DJM 送出的狀態。ORVIK 不會更改混音器的設定。聲道數與部分項目依型號而異。

1. **DJM 連線** — DJM 是否可見。
2. **DATA, METER** — DATA：有收到控制值 (推桿, EQ)；METER：有收到電平表的值。
3. **HEADPHONES** — 耳機區。[8.1](#81-耳機與效果)
4. **SOUND COLOR FX** — sound color FX 區。[8.1](#81-耳機與效果)
5. **BEAT FX** — beat FX 區。[8.1](#81-耳機與效果)
6. **聲道** — 每個聲道一個相同的區塊。[8.2](#82-聲道)
7. **Crossfader** — crossfader 位置與 CH FADER, CROSSFADER 曲線。
8. **MASTER** — master 區。[8.3](#83-master)

<table>
<tr>
<td align="center"><img src="images/11-mixer-fx.png" alt="耳機與效果" width="280"><br>8.1 耳機與效果</td>
<td align="center"><img src="images/12-mixer-ch.png" alt="聲道" width="220"><br>8.2 聲道</td>
<td align="center"><img src="images/13-mixer-master.png" alt="MASTER" width="208"><br>8.3 MASTER</td>
</tr>
</table>

### 8.1 耳機與效果

1. **LEVEL, MIX** — 耳機 LEVEL 與 CUE/master 平衡 (MIX) 的位置。
2. **CUE** — 耳機監聽 master 時亮起。
3. **收合** — 點區塊名稱收合或展開。
4. **PARAMETER** — SOUND COLOR FX 的 PARAMETER 位置。
5. **SOUND COLOR FX 效果** — 所選效果；無則為 OFF。
6. **BEAT FX 效果** — 所選效果。
7. **CH SELECT** — BEAT FX 套用的聲道。
8. **FX FREQUENCY** — BEAT FX 套用的頻段 (LOW, MID, HI)。
9. **LEVEL/DEPTH** — BEAT FX 的 LEVEL/DEPTH 位置。
10. **ON** — BEAT FX 啟用時亮起。

有兩組耳機輸出的 DJM 會另外顯示耳機 B 的 LEVEL, MIX 與 LINK CUE。監聽 rekordbox 的 LINK MONITOR 時 LINK CUE 亮起。

有 FILTER 區的 DJM 會顯示所選濾波器 (LPF, HPF) 與 RESONANCE 位置。

### 8.2 聲道

1. **ON AIR** — 此聲道 on air 時亮起。
2. **CUE, A, B** — 聲道的耳機 CUE 狀態。有兩組耳機時分別顯示 A 與 B。
3. **TRIM** — TRIM 位置。
4. **EQ** — HI, HI MID, LOW MID 與 LOW 的位置。頻段數依型號而異。
5. **COLOR** — SOUND COLOR FX 位置。
6. **電平表** — 聲道電平。輸入過載時上方的 CLIP 亮起。
7. **聲道推桿** — 推桿位置。
8. **Crossfader 指定** — 此聲道為 A, THRU 或 B。

### 8.3 MASTER

1. **Master 電平表** — master 的 L, R 電平。輸出過載時 CLIP 亮起。
2. **LEVEL** — MASTER LEVEL 位置。
3. **BALANCE** — MASTER BALANCE 位置。C 為中央。
4. **CUE** — 耳機監聽 master 時亮起。
5. **BPM** — 播放中 CDJ 的 BPM。有多台時為編號最小的 deck。
6. **EQ, ISO** — master EQ 的狀態。MASTER ISOLATOR 啟用時變為 ISO。
7. **BOOTH LEVEL** — BOOTH LEVEL 位置。

---

## 9. HISTORY

![HISTORY](images/14-history.png)

以實際時間與 deck 編號記錄曾經 on air 的曲目。有混音器時計算播放且 on air 的時間；沒有時計算播放時間。曲目在 10 秒後記錄。播放或 on air 中斷超過 3 秒後恢復時，同一曲目會另起一列；3 秒內則延續同一列。虛擬 deck 在載入曲目時記錄，並計算播放時間。On air 中的曲目在 END 顯示 LIVE。

記錄每次啟動時重新開始。會自動儲存，異常結束後 ORVIK 會在下次啟動時詢問是否接續。

1. **開始時間** — 此記錄開始的日期與時間。
2. **曲目數** — 已記錄的曲目數。
3. **IMPORT** — 把 history 檔 (ORVIK CSV, ShowKontrol history CSV 或 TXT) 載入目前的記錄。項目照原樣加入。
4. **EXPORT** — 以所選格式儲存：ORVIK CSV (可再載入 ORVIK), ShowKontrol history, ShowKontrol set list 或曲目清單 TXT。
5. **⋯** — **自動儲存紀錄…** 帶回記錄的較早副本 ([自動儲存](#自動儲存紀錄))；**清除整個紀錄…** 詢問後清除記錄。
6. **EVENT** — 活動名稱。會放進匯出檔名 (CSV, set list, 曲目清單) 與 TXT 內文。
7. **DJ** — DJ 名稱。會放進 TXT 內文。
8. **搜尋** — 以曲名或藝人搜尋。
9. **表頭** — 拖曳邊界改變寬度；連點兩下恢復。欄位：
   - **DECK** — 播放器編號與型號。
   - **START, END** — 何時 on air 與何時結束。
   - **IN, OUT** — 進入與離開 on air 時的播放位置。
   - **ON AIR** — On air 的時間。
10. **合計** — 已播放曲目數, ON AIR 總時間, 平均 BPM 與各 deck 的曲目數。

列右端的按鈕把曲目加入 set list；曲目已在清單中時按鈕變成橘色並打勾 (再點一次會再加入一次)。滑鼠移到某列時旁邊出現 ×，可刪除該列。兩者都以左鍵點擊動作。刪除 on air 中的曲目後，該曲目在繼續播放期間不再記錄。觸控螢幕上用手指拖曳清單即可捲動。

### 自動儲存紀錄

ORVIK 會保留 history, set list, cue 與 OUTPUT 節點的副本：變更後 5 分鐘一份，清除, 匯入或載入檔案前一份，ORVIK 結束時一份。各頁面的 **⋯ > 自動儲存紀錄…** 由新到舊列出副本，附時間, 原因與內容 (曲目, cue, 列, 節點)。**還原**帶回所選副本；會先複製目前狀態，之後仍可回來。**開啟資料夾**在檔案管理器中顯示副本。

---

## 10. SET LIST

![SET LIST](images/15-setlist.png)

為每首曲目設定時間碼偏移與 cue 的清單。APPLY TO SMPTE 開啟時，把清單中的曲目載入 deck，其偏移會進入該 deck 所連接的 SMPTE layer (A, B)。與 history 一樣，set list 每次啟動時清空；它會自動儲存，並保留[自動儲存副本](#自動儲存紀錄)。

1. **曲目數** — 清單中的曲目數。
2. **APPLY TO SMPTE** — 開啟：清單中的曲目載入 deck 時，其偏移進入該 deck 的 layer；播放中的 deck 會立即改變。關閉：layer 的偏移維持目前的值。
3. **復原, 重做** — 復原與重做清單的變更：Ctrl+Z (Mac 為 Cmd+Z)，以及 Ctrl+Shift+Z 或 Ctrl+Y (Mac 為 Cmd+Shift+Z)。
4. **IMPORT** — 載入 set list：ORVIK 檔 (.json), ShowKontrol set list (.set) 或 history (.csv), 從 rekordbox 匯出的文字清單 (.txt), 或音訊檔。已有清單時詢問要**取代**或**新增**；無法辨識文字檔的欄位名稱時會要求選擇欄位。ORVIK 檔包含 cue。
5. **EXPORT** — 儲存為 ORVIK set list (含歌單外曲目的偏移與 cue) 或 ShowKontrol set list (.set：曲名, 藝人, 偏移, 長度)。
6. **⋯** — **清除已播放標記**；**自動儲存紀錄…** 帶回清單的較早副本；**清除整個清單…** 詢問後移除所有曲目 (可用復原還原)。曲目的 cue 會一併刪除。
7. **新增歌曲** — **手動輸入**新增自行輸入的曲目：依序輸入曲名, 藝人與偏移，按 Enter 前往下一格。**從 Deck** 旁的 deck 編號新增該 deck 已載入的曲目。
8. **歌單外** — 不在清單中的曲目所用的偏移。旁邊的按鈕重設為 00:00:00:00。請設在沒有 cue 的區段，例如 23:00:00:00。
9. **自動填入** — 輸入起始時間並按 **FILL**，依清單順序為每首曲目填入偏移，每首間隔一小時。每個偏移之後仍可編輯。
10. **搜尋** — 以曲名或藝人搜尋。
11. **OFFSET** — 此曲目的偏移。點一下編輯 (HH:MM:SS:FF，小於 24 小時)；旁邊的按鈕重設為 00:00:00:00。
12. **Cue** — 曲目的 cue 數；沒有 cue 時顯示**編輯 Cue**。點它或連點兩下曲目，即在清單下方開啟 cue 編輯器。[10.1](#101-cue-編輯)
13. **STATUS** — 曲目在 deck 上時顯示 ▶ 與 deck 編號，接著是收到其偏移的 layer (A, B)；該 deck 沒有接到任何 layer 時顯示破折號。在 APPLY TO SMPTE 開啟的狀態下曲目播放並 on air 後出現勾號，該列變暗。沒有混音器時只計算播放。同一曲目出現多次時使用沒有勾號的那一列的偏移；只出現一次時重複使用其偏移。
14. **在 deck 中的曲目** — 已載入曲目的列左側會有一條標示。

點曲名, 藝人或偏移可編輯。拖曳列的把手改變順序；列右端的垃圾桶移除曲目。拖曳表頭邊界改變寬度；連點兩下恢復。觸控螢幕上用手指拖曳清單即可捲動。

### 10.1 Cue 編輯

Cue 編輯器在 SET LIST 頁面的清單下方開啟，曲目的 cue 清單在視窗旁邊。選擇曲目後顯示其波形與 cue。

<table>
<tr>
<td width="72%"><img src="images/15b-cue-editor.png" alt="Cue 編輯器"><br>Cue 編輯器：+ Cue (C), 匯入 Hot Cue, 對齊, 縮放, 試聽, Cue 輸出, 整首曲目與放大的區段。</td>
<td width="28%"><img src="images/15c-cue-list.png" alt="Cue 列表"><br>Cue 列表：時間, 小節.拍, Cue 名稱與群組。</td>
</tr>
</table>

- **波形** — 整首曲目與放大的區段，附拍格, 小節編號, 樂句帶與 cue 標記。波形來自音訊檔, HISTORY 記錄或 CDJ 傳來的波形，有哪個用哪個。CDJ 波形需要開啟曲目庫 (編輯器會提議開啟)。沒有波形時 cue 只依時間放置。
- **移動位置** — 點波形移動編輯位置。**對齊** (關, 拍, 小節, 影格) 把位置對齊格線。**縮放**改變放大的範圍。
- **+ Cue (C)** — 在編輯位置建立 cue。有音訊檔時會試聽該處。
- **匯入 Hot Cue** — 把 rekordbox 的 hot cue 與記憶點帶入作為 cue 位置。
- **Cue 列表** — 時間, 小節.拍, 名稱, 群組與動作摘要。
- **Cue 設定** — 名稱, 時間, 小節.拍, 群組, 預告 (預設或拍數), 語音 (跟隨群組, 是, 否), 要唸的內容 (空白則唸 cue 名稱) 與動作清單。
- **動作清單** — 由上而下依序執行：OSC (目的地, 位址, 型別 i/f/s, 值), Art-Net DMX (universe, 多個 通道=值), MIDI (裝置, 通道, Note on/off, CC, Program) 與等待 (毫秒，或拍與小節)。目的地清單與 OUTPUT 相同。
- **群組** — Cue 所屬的工作群組。預設群組為燈光, 影像, SFX 與雷射；群組選單中的**編輯群組…**可改名, 改色或新增。群組決定 cue call 視窗與語音輸出。
- **Cue 輸出** — 編輯器上方的開關控制是否送出動作。

Cue 只對 master deck 上播放的曲目反應。該曲目不在 set list 中時不會送出任何 cue。Cue 的拍由拍格與播放位置計算。Cue 屬於 set list 的項目，因此同一曲目在不同 set list 中有不同的 cue。

會送到可能傷人的效果（火焰、CO2、煙火、雷射）的 Cue 動作，務必經過該效果本身的安全系統。請參閱第 1 章的**安全**。

---

## 11. CUE CALL

Cue call 依工作群組顯示某個 deck 曲目的 set list cue，並倒數到每個下一個 cue。點頂欄的 CUE CALL：cue call 會停靠在主視窗右側開啟。再點一次 CUE CALL 關閉所有 cue call。Alt+點擊 (Mac 為 Option+點擊) 另外以獨立視窗開啟一個，例如一個給燈光, 一個給 SFX。每個 cue call 各自記住位置, 大小與顯示設定，ORVIK 結束時開著的 cue call 會在下次啟動時恢復。

### 開啟與停靠

- **停靠** — cue call 頂部喇叭左側的按鈕把畫面停靠到主視窗右側，或再次開成獨立視窗。在頂部連點兩下效果相同。
- **拖曳** — 拖曳頂部 (或視窗標題列) 移動 cue call 視窗。放到主視窗右緣即停靠在那裡。右側最多可上下並排兩個面板；拖曳分隔線改變寬度。
- **視窗選單** — macOS 上每個 cue call 視窗都列在「視窗」選單與 Dock 選單中。「視窗 > 關閉」(⌘W) 關閉最前面的 cue call 視窗。

視窗標題顯示其所顯示的群組：「Cue 提示 (全部)」或群組名稱。

### 跟隨哪個 deck

設定視窗中的**跟隨的播放器**選擇所有 cue call 視窗與語音播報所跟隨的 deck：

- **SMPTE 主控** — SMPTE OUT MASTER layer 背後的 deck：先看 MASTER ← A 或 B，再找該 layer 的 deck (預設)。MASTER 以 CLOCK 或 FREEWHEEL 運作時，為 CDJ 的速度 master。
- **速度主控** — CDJ master。
- **ON AIR 播放器 (自動)** — 正在送出的 deck，依播放, 推桿與剩餘時間挑選，方式與 FLOW 版面挑選主 deck 相同。可能在 DJ 按下 MASTER 之前就移動。

沒有這樣的 deck 時畫面顯示「沒有主控 Deck」；其曲目不在 set list 中時顯示「不在歌單中」；曲目沒有 cue 時顯示「這首曲目沒有 Cue。」

### 頂部

- **時間碼** — SMPTE OUT MASTER 的時間碼。
- **拍格** — 四個方格；小節中正在播放的拍亮起，第一拍為橘色。
- **BPM** — 所跟隨 deck 的 BPM。
- **曲名, 藝人** — 所跟隨的曲目，在 layer 列或軌道上尚未顯示時才出現。
- **看板, 圖層** — 切換主題。視窗寬度小於 600 px 時改放在設定視窗中。
- **停靠, 喇叭, 齒輪** — 停靠或彈出, 開關語音播報, 開啟設定視窗。

### 主題

- **看板** — 上方的 layer 列顯示 layer A 與 B 的 deck 編號, 曲名與播放時間；M 標示 MASTER 跟隨的 layer，另一個 layer 的 deck 標上「下一首」。下方每個群組一張卡片：群組名稱, 下一個 cue 的名稱, 大型倒數, 小節.拍與進度條，右下角是該群組後續的 cue。接近 cue 時卡片填滿群組色；到 cue 時顯示 GO。目前曲目中沒有 cue 的群組只佔一張短卡片，有 cue 的群組分享其餘空間。底部的帶狀區顯示下一首曲目 (另一個 layer 的 deck) 與其最初的幾個 cue，時間從該曲目目前的位置算起。
- **圖層** — 三條軌道與一個倒數清單。MASTER 軌道顯示所跟隨 deck 的波形向左流動，附上所顯示群組的 cue 標記與名稱；NOW 線在寬度的 20 % 處，cue 碰到 NOW 即到達。A 與 B 軌道顯示各 SMPTE layer 的 deck；另一個 layer 的 deck 是下一首曲目，並顯示其 cue。Deck 的 loop 與細部波形一樣顯示在其軌道上，loop 已設定但未啟用時顏色較淡。拍格依[設定](#15-設定)的**節拍格線: 細節**。下方清單每個即將到來的 cue 一列：其 layer, 名稱, 剩餘時間, 小節.拍，以及在最後一分鐘內逐漸縮短的條。

在圖層主題中，MASTER 軌道右下角的 − 與 + 顯示更長或更短的曲目範圍，RST 回到自動範圍。在軌道上用滑鼠滾輪或雙指縮放也能縮放。


<table>
<tr>
<td width="50%"><img src="images/20-cuecall-board.png" alt="看板"><br><b>看板</b>，每個群組一張卡片，倒數到其下一個 cue。</td>
<td width="50%"><img src="images/21-cuecall-layers.png" alt="圖層"><br><b>圖層</b>，MASTER, A 與 B 軌道位於倒數清單上方。</td>
</tr>
</table>

### 剩餘時間

秒數與拍數一起顯示。未滿 10 秒時秒數帶一位小數 (`4.3 s`)；10 秒以上為分:秒 (`0:24`)。小節.拍與 CDJ 一樣倒數：`2.3 bar` 表示剩 2 小節 3 拍，小節內的拍依 4 3 2 1 進行。

在大型倒數中 (最後 5, 10, 15 或 30 秒，在設定視窗中選擇)，四個拍格取代小節.拍。最後幾拍數 3 2 1 (或從 5 或 10 開始)，然後出現 GO；每次計數時其卡片或列會短暫亮起。正在進行中的長 cue 會顯示其名稱與到結束的時間。

### 設定視窗 (齒輪)

| 區塊 | 項目 |
| --- | --- |
| 顯示 | 畫面 (看板, 圖層), 大倒數開始 (5, 10, 15, 30 秒), 顯示小節.拍與拍格, 拍數倒數起點 (3, 5, 10), 顯示的組, 軌道的波形顏色 (曲目色 (CDJ), 灰色, 關閉), 跟隨的播放器 (SMPTE 主控, 速度主控, ON AIR 播放器 (自動)) |
| 網頁檢視 | 手機與平板用的網址, **複製位址**, **在瀏覽器開啟**。需在設定中開啟網頁檢視器。 |
| 語音提示 | 說法 (名稱+倒數, 只說名稱, 只倒數), 預告 (8 拍前, 4 拍前), 倒數 (3 拍, 關閉), 最後一句 (GO, 關閉), 聲音, 輸出 (裝置, 聲道, 音量, 試聽), 節拍音 (關閉, 倒數時, 一直) 與節拍音量, 各群組的喇叭 |

顯示設定屬於各個視窗；跟隨的播放器與語音提示由所有視窗共用。音量最高 200 %。

### 語音播報

Cue call 頂部的喇叭開關語音播報。語句事先以系統語音 (macOS, Windows) 產生，演出時依拍播放。播報跟隨**跟隨的播放器**所選的 deck。

- Cue 前 8 (或 4) 拍：「群組, cue 名稱, standby」；最後三拍「三, 二, 一」；到 cue 時「go」。**說法**, **倒數**與**最後一句**可省略部分內容。
- **聲音**清單只列出應用程式能說的語言 (韓文, 英文, 日文, 西班牙文, 德文, 法文, 中文) 的語音，依語言分組。第一項「系統…聲音」是介面語言的預設語音。選擇其他語言的語音後，播報改用該語言 (英文語音會說「Lighting, standby」「three, two, one, go」)。Set list 中輸入的群組名稱照原樣唸出。
- 該語言沒有語音時，播報改為英文，第一項會註明。語音在作業系統的語音設定中新增。
- **輸出**是所有播報共用的一個裝置與聲道。可以是 LTC 所用裝置的其他聲道，但不能是 LTC 的聲道；這些聲道標示為「LTC 使用中」且無法選擇。
- **節拍音**在倒數期間或一直依拍發聲；每 4 拍的第 1 拍音較高。
- 群組名稱旁的喇叭可將該群組靜音。開著的 cue call 有顯示的群組才會播報；沒有開啟任何 cue call 時，所有群組都會播報。

### 網頁

設定中開啟網頁檢視器後，同一網路上的手機, 平板與其他電腦可開啟 `http://<此電腦>:<連接埠>/cuecall`。會先要求存取碼 (與網頁檢視器相同)，並記住 12 小時；在這台電腦上用**在瀏覽器開啟**則不需要存取碼。頁面上的齒輪選擇看板或圖層主題, 群組, 大型倒數, 拍倒數與小節.拍，這些設定保存在該瀏覽器中。瀏覽器支援時，**保持螢幕開啟**可防止螢幕休眠。手機直向有專用版面。ORVIK 3 秒沒有回應時，頁面變暗並顯示「離線」，倒數停住直到再次回應。

---

## 12. NETWORK

![NETWORK](images/16-network.png)

1. **PRO DJ LINK 狀態** — ORVIK 是否準備好接收 PRO DJ LINK。是否看到 CDJ 請看器材清單。
2. **器材清單** — 看到的每台 CDJ 與 DJM 的編號, 類型, 型號與 IP。
3. **TCNet 狀態** — TCNET 開關是否開啟，以及 ORVIK 的節點名稱。
4. **節點清單** — ORVIK 與最近 10 秒內看到的 TCNet 節點。
5. **TYPE** — 節點的角色：SERVER 傳送，CLIENT 接收；另有 REPEATER 與 AUTO。TCNet 開啟而沒有任何 CLIENT 時，清單下方會出現提示。

### 12.1 網路設定警告

![網路設定警告](images/16b-network-warning.png)

PRO DJ LINK 開啟期間，ORVIK 會檢查這台電腦的連線方式。網路設定使播放器與混音器無法連到 ORVIK 時，NETWORK 上方會出現警告，說明原因與處理方式；狀態列以 LINK 顯示，PRO DJ LINK 開關的提示也會指出問題。紅色表示連線上的一切都無法運作；琥珀色是建議。警告在 PRO DJ LINK 啟動 10 秒後才開始，而且只提供建議：ORVIK 不會更改任何網路設定。

| 警告 | 情況 | 處理方式 |
| --- | --- | --- |
| 其他程式正在使用 PRO DJ LINK 連接埠 | 其他程式佔用 PRO DJ LINK 連接埠 (50000–50002)；ORVIK 能判斷時會顯示程式名稱 | 關閉該程式，再將 PRO DJ LINK 關閉後重新開啟。常見原因：rekordbox, 另一個 ORVIK, AnyDesk, 通話中的 Microsoft Teams, Beat Link Trigger 等 PRO DJ LINK 工具。 |
| 裝置位於其他網路 | 播放器或混音器在這條網路線上傳送，但位址在這張網路卡的網路之外 (例如自行指派 169.254.x.x 位址的裝置，搭配有路由器位址的網路卡) | 把網路卡設為自動取得位址 (DHCP) 或給它裝置範圍內的位址，或把所有器材接到同一台路由器。 |
| 沒有偵測到 PRO DJ LINK 裝置 | 所選網路卡上沒有收到任何資料 (Windows 自動偵測時為所有網路卡)，或連線已安靜 15 秒 | 確認播放器與混音器已開機，並檢查網路線, 交換器與位址範圍。macOS：請在「系統設定 > 隱私權與安全性 > 區域網路」中允許 ORVIK。Windows：沒有路由器的網路卡會被視為公用網路；請也在公用網路上允許 ORVIK。其他使用中的網路卡會列出，方便在設定中選擇正確的那一張。 |
| 兩張網路卡位於同一個網路 | 這台電腦的兩張網路卡在同一個網路上，曲目資料與波形要求可能從錯誤的那一張送出 | 關閉或拔除另一張網路卡，或將它移到其他網路。 |

---

## 13. OUTPUT

把 deck 與混音器的值以 OSC, DMX (Art-Net, sACN) 與 MIDI 送給其他程式與器材。這是合併了舊的 OSC 頁面與 ART-NET 的 DMX patch 的節點編輯器。1.6 的 OSC 列與 DMX patch 會在第一次啟動時轉換為節點，並送出相同的值。

![OUTPUT](images/17-output.png)

### 上方

- **復原, 重做** — 復原與重做此頁面的變更：Ctrl+Z (Mac 為 Cmd+Z)，以及 Ctrl+Shift+Z 或 Ctrl+Y (Mac 為 Cmd+Shift+Z)。
- **IMPORT, EXPORT** — EXPORT 把整個頁面 (節點, DMX 輸出, OSC 列, 網路設定) 儲存為檔案；IMPORT 載入檔案，一次復原即可撤回。檔案會開啟傳送時，ORVIK 會先列出傳送目的地並詢問。
- **⋯** — **自動儲存紀錄…** 帶回節點的較早副本。[自動儲存](#自動儲存紀錄)
- **OSC** — 顯示 OSC 目的地 (位址:連接埠) 或關閉。點一下設定 OSC 輸出：開或關, **這台電腦**, **廣播**或 **IP 位址**, IP 與連接埠 (預設 7000)。**其他 OSC 目標（Cue 動作）**存放 cue 編輯器 OSC 動作所用的具名位址；+ 新增，× 移除。
- **Art-Net 網路** — 顯示介面與 DMX 頻率，或關閉。點一下設定所有 DMX 輸出共用的項目：**開啟 Art-Net（時間碼與 DMX 共用）**, DMX 介面 (可跟隨時間碼介面), DMX 連接埠 (6454), DMX 頻率 (10–60 Hz，預設 40), 使用中的廣播位址, ArtSync 與 ArtPollReply。OSC 輸出連接埠不能用於 Art-Net。
- **Art-Net 時間碼** — 顯示幀率，或關閉。點一下設定**傳送時間碼**, 所送的 layer 與目前送出的時間碼, 時間碼介面, 目的地 (廣播或一個 IP 位址) 與時間碼連接埠。需在 **Art-Net 網路**中開啟 Art-Net。幀率為[設定](#15-設定)中 SMPTE 時間碼輸出的**影格速率**；各 layer 以 SMPTE OUT 的 ART 按鈕開啟。
- **MIDI** — MIDI CC 與 MIDI Note 節點的 MIDI 輸出。點一下選擇裝置。與設定中 MIDI Clock 輸出的 **MIDI 輸出埠**為同一個連接埠。
- **SCAN** — 搜尋 Art-Net 器材 (ArtPoll), OSC 程式 (mDNS) 與 MIDI 輸出並列出。Art-Net 器材旁的 + 把其 IP 加入第一個 DMX 輸出的接收端；OSC 程式旁的 + 把它加入其他 OSC 目標。

### 左側清單

點項目即可在畫布上建立該節點。滑鼠移到清單上會顯示簡短說明。

| 群組 | 節點 |
| --- | --- |
| 傳送目的地 | OSC, DMX 輸出, MIDI CC, MIDI Note |
| 值：混音器 聲道 1~6 | Fader, VU, Hi, Mid, LoMid, Low, Color, OnAir |
| 值：混音器 整體 / 效果 | Xf, MVU, MVUL, MVUR, BeatFX, BeatFXOn, BeatFXName, BeatFXCh, ColorFXName |
| 值：Deck 節拍 | BPM, BPMCoarse, BPMFine, Beat, Downbeat, Phase, BarBeat, BarPhase |
| 值：Deck 時間 / 樂句 | Pos, Time, Length, Remain, Phrase, PhraseKind, PhrasePos, PhraseBeats |
| 值：Deck 狀態 / 曲目 | Loop, Sync, Master, CDJPlay, CDJCue, Deck, Title, Artist, Key |
| 值：SMPTE 輸出 | SMPTEA, SMPTEB, SMPTEM, Clock |
| 轉換 | 範圍, 波形 (sin, tri, saw, sq), 反轉, 自由進行, 時間格式 |
| 數學 | 加, 減, 乘, 除, 最小, 最大 |
| 特殊 | 範圍限制, 門檻, 平滑, 換行 |
| 輸入 | 整數, 小數, 文字 |

### 畫布與右側設定

從節點的輸出點拖到另一個節點的輸入點即可連接；放在節點上的連線會接到最近的輸入。流動的值會顯示在連線上。一個值可以送到多個目的地。沒有連線的轉換或運算節點放到連線上時，會插入該連線中。文字值 (曲名, 藝人, 調性) 只能送到 OSC；從文字值連到 DMX 或 MIDI 的連線會被拒絕並顯示原因。

- **選取** — 點節點；在空白畫布上拖曳可選取多個；Shift+點擊或 Ctrl+點擊 (Mac 為 Cmd+點擊) 加入或移除一個。Delete 刪除所選節點。
- **右鍵選單** — 剪下, 複製, 貼上, 再製, 刪除, 移除連線, 全選, 建立群組, 解散群組。Ctrl+G (Mac 為 Cmd+G) 把選取的節點建立群組，加上 Shift 則解散。拖曳群組的名稱帶移動群組；連點兩下名稱帶可改名。
- **移動** — 節點會吸附到其他節點的邊緣與中心；按住 Alt 可自由放置。按住空白鍵拖曳可移動畫面。觸控螢幕上，用手指拖曳空白畫布移動畫面；手指先停住一下再拖曳，即可選取節點。
- **問題** — 無法傳送的節點會說明原因：未連線, 此連線無法傳送, 聲道重複, 超出上限, 線路迴圈, 或 Universe 已被其他 DMX 輸出使用。

選取節點時其設定顯示在右側。

- **值節點** — 值與 deck：master deck 或 deck 1–6。Beat 與 Phase 可每拍 1, 2, 4, 8 或 16 次；Downbeat, BarBeat 與 BarPhase 可每小節多次 (搭配波形)。
- **OSC** — 位址與型別。文字值以 string 送出；數字以 float 或 int；也有文字形式的數字 (Time, Length, BPM 等) 以 float, int 或 string。只在改變時送出，最多 60 Hz。開頭缺少 `/` 時自動補上；不接受空白與 `# * , ? [ ] { }`。
- **DMX 輸出** — **傳送此 Universe** 開啟輸出。**Art-Net 位址**為 Net (0–127), Subnet (0–15) 與 Universe (0–15)；每個 DMX 輸出需要各自的 universe。**接收設備 IP** 可輸入以逗號或空白分隔的位址；留空時，第一個 DMX 輸出送到 ArtPoll 找到的器材，其他送到 Art-Net 網路的廣播位址。第一個 DMX 輸出也可以 sACN 送出 (**同時以 sACN 傳送**)；universe, 優先順序與其他 sACN 設定在[設定](#15-設定)的 **sACN 輸出**中。把值接到 **+ 通道**即分配下一個通道；點節點上的通道編號可變更。0–1 的值以 0–255 送出。
- **MIDI CC, MIDI Note** — MIDI 通道 (1–16) 與 CC 或音符編號 (0–127)。0–1 的值以 0–127 送出。
- **範圍** — 把 0–1 換算為**起點**–**終點**。**起點**大於**終點**時方向反轉。BPM 把 20–500 BPM 視為 0–1。
- **波形** — 把 0–1 換成 sin, tri, saw 或 sq 波，附反轉開關；**反轉**為 1 − 值。
- **自由進行** — 用於拍的值 (Beat, Downbeat, Phase, BarBeat, BarPhase)，在 CDJ 的拍回報之間或沒有回報時，依 deck 的速度自行繼續走。
- **時間格式** — 選擇時間值 (Time, Length, Remain, SMPTE, Clock) 的欄位 (hh, mm, ss, ff)。見「時間格式」。
- **加, 減, 乘, 除, 最小, 最大** — 接多少輸入就用多少；只有一個輸入時使用**第二個值**。推桿與電平以 0 到 1 計算，BPM 與計數以數字計算。**加**也能串接文字："A" + "B" = "AB"。
- **範圍限制** — 把值限制在**下限**與**上限**之間。**門檻**在其值以上送出 1，否則送出 0。
- **平滑** — 讓值變化變慢。**起音 (ms)** 是跟隨上升的速度，**延持 (ms)** 是輸入下降後維持峰值的時間，**釋放 (ms)** 是之後下降的速度。數值越大越慢；0 則立即跟隨。在這三個設定出現之前儲存的平滑節點，上升與下降仍共用原本的單一時間。
- **換行** — 把文字值合併成多行 (例如曲名 / 藝人)。
- **整數, 小數, 文字** — 自行輸入的值。文字只能送到 OSC。

值在輸出引擎中計算，因此顯示其他頁面時仍會持續送出。

### 值的名稱與送出的內容

未經範圍轉換時送出的值。

| 群組 | 名稱 | 值 |
| --- | --- | --- |
| 各混音器聲道 (1–6) | Fader, VU, Hi, Mid, LoMid, Low, Color | 0–1 |
| | OnAir | on air 為 1，否則 0 |
| 混音器整體 | Xf, MVU, MVUL, MVUR, BeatFX | 0–1 |
| | BeatFXOn | beat FX 為 ON 時 1 |
| | BeatFXName, BeatFXCh, ColorFXName | 所選 beat FX, 套用的聲道, colour FX 名稱 (string) |
| 各 deck 與 master deck | BPM | BPM 原值 (string，一位小數：`128.0`)。BPMCoarse 為整數部分，BPMFine 為小數部分 |
| | Pos | 進度 0–1 (string `42%`) |
| | Beat, Downbeat | 每拍短暫的 1，每小節第一拍短暫的 1 |
| | Phase | 拍內位置 0–1 |
| | BarBeat | 小節中的第幾拍，1–4 |
| | BarPhase | 小節內位置 0–1 (每四拍一個循環) |
| | Phrase | rekordbox 樂句名稱 (string，例如 `CHORUS`) |
| | PhraseKind | 樂句編號：Intro 1, Verse 2, Bridge 3, Chorus 4, Up 5, Down 6, Outro 7 (無樂句為 0) |
| | PhrasePos, PhraseBeats | 樂句內位置 0–1，到下一樂句的拍數 |
| | Loop, Sync | loop 中為 1，sync 啟用時 1 |
| | Title, Artist, Key | 曲名, 藝人與調性 (string) |
| | Time, Length, Remain | 已播放, 總長與剩餘時間 (string, `MM:SS`，剩餘為 `-MM:SS`) |
| 只有各 deck | CDJPlay, CDJCue | 播放中 1，按住 CUE 期間 1 |
| | Master | 該 deck 為 CDJ master 時 1 |
| 只有 master deck | Deck | master 的播放器編號 1–6 |
| SMPTE, 時鐘 | SMPTEA, SMPTEB, SMPTEM | SMPTE OUT 的 layer A, B, MASTER 的時間碼，與面板顯示相同 (string, `HH:MM:SS:FF`，29.97 drop frame 為 `HH:MM:SS;FF`，含偏移) |
| | Clock | 電腦時間 (string, `HH:MM:SS`) |

- Master deck 是頂欄 MASTER BPM 的 deck。沒有 CDJ master 時使用播放中的 deck，優先 on air 的 deck。
- 送到 Resolume 速度位址 (`/composition/tempocontroller/tempo`) 的 BPM 以 0–1 (20–500 BPM) 送出，因為 Resolume 在那裡期望 0–1。
- 沒有混音器時不送出混音器的值，因為 0 會把綁到推桿的圖層關掉。沒有 BPM 的 deck 也不送出 BPM。
- 開關值 (OnAir, BeatFXOn, Loop, Sync, CDJPlay, CDJCue, Master) 與 Deck 也可以用 string 送出 (`ON`, `OFF`, `2`)。

### 時間格式

在時間值上接時間格式節點，只送出所選的欄位。

| 字母 | 欄位 |
| --- | --- |
| `hh`, `h` | 小時 |
| `mm`, `m` | 分 |
| `ss`, `s` | 秒 |
| `ff`, `f` | 幀 (只有 SMPTE) |

兩個字母以兩位數補零送出；一個字母照原值。多個欄位以 `:` 連接 (例如 `mmss` → `05:08`，`hmmss` → `0:05:08`)。沒有 `h` 的曲目時間在超過 60 分後繼續累計分鐘。格式化後的 Remain 不帶 `-`。29.97 drop frame 的碼在幀前面用 `;`。

---

## 14. SHORTCUT 與 MAP

鍵盤, MIDI, OSC 與 DMX (Art-Net) 可按下 ORVIK 的按鈕並改變其數值：layer A, B 與 MASTER 的 SMPTE OUT 控制項，以及頂欄的 PRO DJ LINK, TCNET 與 M.VOL。只設定接收端；已指定控制項的開關狀態可回傳到 MIDI 裝置。

![SHORTCUT](images/19-shortcut.png)

### SHORTCUT 頁面

輸入位於左側。每個都有自己的**啟用**開關。

| 區塊 | 內容 |
| --- | --- |
| 鍵盤 | 組合鍵，只在 ORVIK 視窗在最前面時有效。預設開啟。 |
| MIDI | 每台已連接的 MIDI 裝置都有 **IN** (監聽該裝置) 與 **OUT** (把已指定控制項的狀態回傳給它，用於控制器 LED)。預設開啟。 |
| OSC | OSC 接收連接埠 (預設 7700), 監聽位置 (所有介面, 只有此電腦或某個介面) 與允許傳送的 IP。清單為空時網路上任何人都能控制：到現場請填入 IP。預設關閉。 |
| DMX (Art-Net) | 以燈光控台送出的某個 Art-Net universe (Net / Subnet / Universe) 的通道控制。與 OSC 使用相同的允許 IP。要與這台電腦上的 Resolume 共用，請由控台以廣播送出。預設關閉。 |

頁面右上角的**開啟 MAP** 會前往 DECKS 並開啟 MAP。

表格依 LAYER A, LAYER B, MASTER 與標頭分組列出所有動作；「來源」與「偏移步進」列可展開其動作，並顯示已指定的數量。**全部**顯示所有動作，**僅已指定**只顯示已指定的動作。

- **按鍵, MIDI, DMX** — 點一下儲存格，再按鍵或送出 MIDI 或 DMX 即可指定。期間儲存格顯示「等待輸入」。
- **MIDI 模式** — 已指定 MIDI 儲存格上的標籤；點一下切換。開關類控制項：**Toggle** 每按一次切換，**Piano** 只在按住時開啟 (也用於送出 127/0 的自鎖按鈕)。數值類：**Absolute** 取推桿或旋鈕的位置，**Relative** 用於無限旋轉編碼器，每格 1 %。
- **OUT** — 關與開時回傳的 MIDI 值 (預設 0 與 127)。APC mini mk2 另有色盤與亮度或閃爍的選擇。
- **OSC** — 該動作固定的 OSC 位址，例如 `/orvik/smpte/a/ltc`。點一下即複製。
- **×** — 移除該列的指定。

視窗夠寬時，右側面板顯示**收到的訊號**，即最近收到的輸入與其結果；OSC 開啟期間還顯示 **OSC 接收規則**：開關類以 1 開, 0 關, 無值切換；按鈕在無值或非 0 值時按下 (0 忽略)；數值接受 0–1 的 float (0–100 亦可)；來源也接受數值 (`/orvik/smpte/a/src 3`)。

### MAP

側欄的 MAP (或 SHORTCUT 頁面的**開啟 MAP**) 進入指定模式；再點 MAP 或按 Esc 離開。可指定的控制項會加上框線：未指定為虛線，已指定為實線並附標籤 (K 按鍵, M MIDI, D DMX)。點一個控制項：上方的列顯示其名稱與 OSC 位址 (點一下複製)。接著按鍵或送出 MIDI 或 DMX 即可指定。**清除**移除其指定，**取消**停止等待。OSC 位址是固定的，不需要指定。

### 永遠有效的按鍵

| 按鍵 | 動作 |
| --- | --- |
| Ctrl+R (Mac 為 Cmd+R) | 重新載入畫面。虛擬 deck 的播放會停止。 |
| Ctrl+Z (Mac 為 Cmd+Z) | 在 SET LIST 與 OUTPUT 中復原 (文字欄位外) |
| Ctrl+Shift+Z 或 Ctrl+Y (Mac 為 Cmd+Shift+Z) | 重做 |
| Esc | 離開 MAP |
| ⌘M (macOS) | 視窗 > 縮到最小 |
| ⌘W (macOS) | 視窗 > 關閉：關閉 cue call 視窗；在主視窗上則與關閉按鈕一樣結束 ORVIK |

---

## 15. 設定

![設定](images/18-settings.png)

側欄的 SETTINGS 開啟設定視窗；再點一次關閉視窗。

1. **區塊圖示** — 點一下跳到該區塊。
2. **區塊** — 設定依下列方式分組。
3. **設定** — 左側為名稱，右側為值。滑鼠移到某列上會顯示說明。

每次開啟視窗時，都會重新讀取音訊, LTC 與 MIDI 裝置清單。介面清單在每次展開時重新讀取。

### 語言

| 項目 | 說明 |
| --- | --- |
| 語言 | 介面語言。系統語言跟隨電腦。English, 한국어, 日本語, Español, Deutsch, Français, 繁體中文。 |

### 唱盤版面

| 項目 | 說明 |
| --- | --- |
| 版面主題 | Deck 畫面的版面：FLOW, STK, STRIP 或 ROW。[6.3](#63-版面) |
| 配色 | 深色，或適合明亮場所的淺色（戶外）。 |
| UI 繪製 FPS | 每秒重繪畫面的次數：60, 30 或 15。降低可減少 CPU 使用。傳送頻率不受影響。 |
| UI 縮放 | 整個畫面的大小：100%, 125% 或 150%。 |

### 波形

| 項目 | 說明 |
| --- | --- |
| 波形顏色 | 3 BAND, RGB 或 MONO。沒有 3band 資料的曲目以 RGB 顯示。 |
| 播放頭位置 | 細部波形中位置線的位置：置中或靠左（25%）。 |
| 節拍格線: 總覽 | 繪在整體波形上的標記：小節刻度, 1 分鐘刻度, 垂直線。 |
| 節拍格線: 細節 | 繪在細部波形上的格線：1 小節, 每拍, 子拍, 垂直線。Cue call 的軌道也使用此設定。 |
| 樂句顯示 | 波形上樂句 (INTRO, CHORUS 等) 的顯示方式：無, 邊界刻度（最小）, 樂句名稱（INTRO/CHORUS/OUTRO）或顏色循環。 |
| Cue 標記樣式 | cue 標記的形狀：Chip (方形), Flag (五角形) 或 Stripe (帶)。 |

### PRO DJ LINK

| 項目 | 說明 |
| --- | --- |
| PRO DJ LINK 介面 | CDJ 與 DJM 所在的網路介面。自動偵測會選擇看得到 CDJ 的那一側，並顯示使用中的位址。每個介面以名稱與位址列出；169.254.x.x 的介面標示為 link-local CDJ。所選介面不存在時仍會列為「目前不存在 — 自動運作」，期間引擎使用自動偵測。器材正在傳送時變更會先詢問，因為重新綁定會短暫中斷輸出；按取消則保留原本的介面。 |
| 狀態 | 此介面的連線狀態。 |
| 自動開始 PRO DJ LINK | ORVIK 開啟時連線到 CDJ 與 DJM。預設開啟。此列的說明列出連接埠：UDP 50000–50002 與 dbserver TCP。其他程式佔用時，NETWORK 會顯示。[12.1](#121-網路設定警告) |

### TCNet

| 項目 | 說明 |
| --- | --- |
| 節點名稱 | 此電腦在 TCNet 中的名稱。%% 為自動編號；最多 8 個字元。 |
| TCNet 介面 | 送出 TCNet 的網路介面。看得到 TCNet 節點時變更會先詢問。 |
| 狀態 | 此介面的連線狀態。 |
| 影格速率 | 經 TCNet 送出的時間碼幀率：24, 25, 29.97 或 30。 |
| TCNet 模式 | Auto 在有更早的伺服器時等待，Server 一律送出，Client 一律不送出。 |
| 自動開始 TCNet | ORVIK 開啟時開始送往 Arena 的輸出。預設開啟。此列的說明列出連接埠：UDP 60000–60002。 |

### Mirror 模式

| 項目 | 說明 |
| --- | --- |
| 提供 Mirror 伺服器 | 允許其他電腦上的 ORVIK 鏡像此電腦 (TCP 8878)。 |
| 鏡像其他 PC | 此電腦沒有 deck 時，自動連線到鏡像伺服器。預設開啟。 |
| Mirror 伺服器 | 被鏡像的伺服器。重新整理會重新搜尋；連線狀態顯示在旁邊。請在伺服器電腦的防火牆中允許 TCP 8878 的連入連線。 |

鏡像時，頂欄的 PRO DJ LINK 與 TCNET 按鈕改為 MIRROR 與伺服器位址；連線前與重新連線時顯示 CONNECTING。鏡像中的電腦不送出 TCNet。點 MIRROR 開啟設定。

### 網頁檢視器

| 項目 | 說明 |
| --- | --- |
| 網頁檢視器 | 允許同一網路上的瀏覽器查看 deck 畫面與 cue call 頁面 (唯讀)。 |
| 連接埠 | 網頁檢視器的連接埠 (預設 8877)。 |
| 網路介面 | 網頁檢視器監聽的網路介面。 |
| 狀態 | 關閉，或執行中與連接埠。開啟時下方會顯示 QR code, 存取碼與網址。 |
| REST API | 網頁檢視器伺服器上的唯讀 GET 要求，使用相同的存取碼與工作階段。此列的說明列出 `/api/v1/` 下的路徑 (status, decks, layers, timecode, mixer, outputs；JSON)。需開啟網頁檢視器。 |
| API 狀態 | API 位址與要求次數，或無法回應的原因。 |

### 音訊輸出

| 項目 | 說明 |
| --- | --- |
| 輸出裝置 | 虛擬 deck 用的音訊裝置：系統預設或某個裝置。 |
| 輸出聲道 | 虛擬 deck 用的輸出聲道組 (1/2, 3/4 等)。 |

### SMPTE 時間碼輸出

| 項目 | 說明 |
| --- | --- |
| 影格速率 | LTC, MTC 與 Art-Net 時間碼的幀率：23.98, 24, 25, 29.97 或 30 fps。 |
| 延遲補償 | 加到時間碼上的毫秒數 (−5000 到 5000)；正值提前。LTC, MTC 與 Art-Net 共用，用來補償接收端的延遲。 |
| LTC: Layer A, LTC: Layer B, LTC: MASTER | 各 layer 的 LTC 音訊裝置 (無或某個裝置), 聲道與電平。電平為 −40 到 0 dBFS，預設 −12；連點兩下旋鈕可重設。接收端無法鎖定時調高，失真時調低。 |
| 停止時保持 LTC | deck 停止時，LTC 持續送出停止的那一幀：接收端立即停止，回到 0 的 deck 顯示 00:00:00:00。關閉：停止期間不送 LTC。預設開啟。 |
| MASTER 跟隨主控唱盤 | MASTER 在 A 或 B 時，若 CDJ master 換到另一 layer 的 deck，MASTER 也換到該 layer。預設開啟。 |
| 保持 ON AIR 播放器, 停止時交接 | 有 DJM 時，MASTER 保持 on air 的 deck (推桿推起且播放中，或 ON AIR)。該 deck 停止 (0.5 秒) 或推桿拉下 (2 秒) 時，若 CDJ master deck 為 on air，MASTER 移到它，否則移到另一個 layer 的 on air deck。沒有混音器時 MASTER 跟隨 MASTER 按鈕；停止的 MASTER deck 在 0.5 秒後交給另一個 layer 播放中的 deck。關閉：只跟隨 MASTER 按鈕。預設開啟。 |
| 選擇 ON AIR 播放器 (含剩餘時間) | MASTER 依推桿, 播放與剩餘時間挑選正在送出的 deck (與 FLOW 版面挑選主 deck 的方式相同)，並保持 5 秒。可能在 DJ 按下 MASTER 之前就移動。網路上需要 DJM；沒有時 MASTER 跟隨 MASTER 按鈕。預設關閉。 |
| MTC MIDI 輸出 | MTC 用的 MIDI 連接埠。 |

### sACN 輸出

| 項目 | 說明 |
| --- | --- |
| sACN 輸出 | 以 sACN (E1.31) 送出 OUTPUT 頁面第一個 DMX 輸出的通道。與該節點上的**同時以 sACN 傳送**是同一個開關。 |
| 傳送方式 | 多播或單播。 |
| 單播 IP | 單播時接收端的位址。 |
| 介面 | 送出 sACN 的網路介面。 |
| Universe | sACN 的 universe，1–63999。 |
| 優先順序 | 0–200，預設 100。 |
| 來源名稱 | 接收端顯示的名稱，預設為 ORVIK。 |
| 狀態 | 關閉, 等待中，或目的地, universe, 優先順序與已送出的封包數。 |

### MIDI Clock 輸出

| 項目 | 說明 |
| --- | --- |
| MIDI Clock 輸出 | 送出 MIDI Clock (24 PPQN)，並附 Start, Stop, Continue 與 Song Position Pointer。 |
| 來源 | 跟隨的速度：主控 Deck, Layer A, Layer B, MASTER 圖層或 DECK 1–6。 |
| MIDI 輸出埠 | MIDI Clock 用的 MIDI 連接埠，與 MTC MIDI 輸出分開選擇。OUTPUT 頁面的 MIDI CC 與 MIDI Note 節點使用同一個連接埠。 |
| 停止時仍送時鐘 | deck 停止期間仍持續送出速度時鐘。預設開啟。 |
| 狀態 | deck, BPM, 播放中或停止與已送出的時鐘數，或缺少什麼。 |

### 曲目資料庫

| 項目 | 說明 |
| --- | --- |
| 曲目資料庫 | 為了 cue 編輯，保存播放過的 CDJ 曲目的波形, 拍格, 樂句與 cue 點，以及音訊檔的路徑。預設開啟；關閉時不寫入任何資料，cue 編輯器也沒有 CDJ 波形。 |

### 設定檔

| 項目 | 說明 |
| --- | --- |
| 備份 | **儲存設定**把設定寫入加密的檔案 (.orvikcfg)。**載入設定**詢問後載入並重新啟動 ORVIK。檔案不包含視窗位置, history 與 set list，本次工作階段的 history 與 set list 會保留。1.6 的檔案也能載入；其 OSC 列與 DMX patch 會轉換為 OUTPUT 節點。 |
| 初始狀態 | **恢復原廠設定**詢問後把所有設定恢復為初始值並重新啟動 ORVIK。本次工作階段的 history 與 set list 會保留。 |

### 資訊

| 項目 | 說明 |
| --- | --- |
| 版本 | ORVIK 目前的版本，標示為免費測試版。 |
| 檢查更新 | 開啟時在啟動時與每 12 小時到 GitHub 檢查新版本。**立即檢查**立刻檢查；有新版本時下方會出現版本號與**下載頁面**按鈕。 |
| 著作權 | ORVIK 與 JUCE 的版權聲明，以及用於詢問的 REPORT 按鈕。 |
| 開放原始碼 | **授權檔案**開啟應用程式內附的授權資料夾 (Windows 上會解壓到暫存資料夾)；**授權與原始碼**開啟 ORVIK GitHub 頁面上的開放原始碼聲明。 |

---

## 16. 商標與授權

ORVIK 是獨立的相容性工具。它不是 AlphaTheta 的官方 PRO DJ LINK Bridge，也不是 TC Supply 的 ShowKontrol，且不代表與 AlphaTheta, Pioneer DJ, TC Supply 或 Resolume 有任何關聯, 贊助, 認證或背書。

AlphaTheta, Pioneer DJ, CDJ, DJM, PRO DJ LINK, rekordbox, TC Supply, TCNet, ShowKontrol, Resolume, SMPTE 及其他產品, 技術與品牌名稱僅用於說明相容性。各商標的權利屬於其所有者。Art-Net™ Designed by and Copyright Artistic Licence.

ORVIK 使用 JUCE 9 框架, 隨附的開放原始碼元件與字型。清單與授權全文見設定視窗的**資訊**區塊 (**授權檔案**, **授權與原始碼**) 與 THIRD_PARTY_NOTICES。應用程式的使用條款見 BINARY_LICENSE。

