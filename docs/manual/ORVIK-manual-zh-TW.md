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

ORVIK 接收 CDJ 與 DJM 的播放資訊，並轉送給燈光與影像軟體：TCNet, SMPTE 時間碼 (LTC, MTC, Art-Net), OSC, DMX (Art-Net, sACN) 與 MIDI。它只向器材詢問資訊，不控制器材。

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
4. **CUE CALL** — 開啟 cue call 視窗。[第 11 章](#11-cue-call)
5. **重新載入** — 重新載入畫面 (Cmd/Ctrl+R)。虛擬 deck 的播放會停止。
6. **M.VOL** — 應用程式輸出的虛擬 deck 聲音音量。不影響 CDJ 與混音器的音訊。
7. **視窗按鈕** — Windows 上為最小化, 最大化與關閉 ORVIK。macOS 使用左上角的標準按鈕。若有未儲存的 history 或 set list，ORVIK 會在關閉時詢問是否儲存。

### 開關的狀態

PRO DJ LINK 或 TCNET 開啟時，其左側方格會填上狀態色：一切正常為綠色，開啟中為閃爍的點。有需要確認的事項時，開關內會出現以下標籤之一。

| 標籤 | 意義 |
| --- | --- |
| NO H/W | PRO DJ LINK 已開啟，但看不到任何 CDJ 或 DJM。 |
| LOST | 有硬體 deck，但超過 1.5 秒沒有任何 CDJ 送出狀態。 |
| STANDBY | 同一網路上有更早啟動的 TCNet 伺服器；傳送暫停等待中。 |

有新版本時，頂欄會出現 UPDATE 標記。點一下開啟下載頁面。

---

## 4. 側欄

| 選單 | 內容 |
| --- | --- |
| DECKS | 各 deck 的波形, 時間碼與播放狀態 |
| MIXER | DJM 的聲道推桿, EQ 與電平表 |
| HISTORY | 曾經 on air 的曲目記錄 |
| SET LIST | Set list, 每首曲目的時間碼偏移與 cue 編輯 |
| NETWORK | PRO DJ LINK 器材與 TCNet 節點 |
| OUTPUT | 把 deck 與混音器的值以 OSC, DMX, MIDI 送出的節點編輯器，以及 Art-Net 設定 |
| MAP | 開啟「點選控制項即可指定快捷鍵」的模式。[第 14 章](#14-shortcut-與-map) |
| SHORTCUT | 以鍵盤, MIDI, OSC, DMX 操作 ORVIK |
| SETTINGS | 開啟設定視窗。 |

---

## 5. 狀態列

![狀態列](images/05-status-bar.png)

1. **TCNET** — 頂欄的 TCNET 開關是否開啟。STANDBY 時即使顯示 ON 也不會傳送。
2. **ARENA** — 最近 10 秒內看到的 TCNet 節點數。
3. **DECKS** — 硬體 deck 加上已載入曲目的虛擬 deck。
4. **UP** — 引擎啟動以來的時間。
5. **CPU** — ORVIK 的 CPU 使用率。
6. **MEM** — ORVIK 使用的記憶體。
7. **Deck 圓點** — 每個 deck 一個點。硬體 deck 顯示其顏色；虛擬 deck 依播放, cue, 已載入或空白改變顏色。

有問題時，狀態列會出現 LINK, OUT 或 MIX：LINK 表示播放器編號重複，OUT 表示 TCNet 傳送已停止或應用程式處於鏡像模式，MIX 表示混音器資料中斷。點一下會前往相關頁面。一切正常時不會出現。

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

Deck 模式為 VIRTUAL 時，虛擬 deck 會播放本機的音訊檔。圖中為 STK。傳輸按鈕 (⑧) 在 STRIP 以外的所有版面都有；在 FLOW 中位於時間碼與 BPM 之間。

1. **Deck 編號**
2. **VIRTUAL, LOCAL** — 表示曲目為本機檔案的虛擬 deck。
3. **×** — 移除此虛擬 deck。
4. **聲道推桿** — 拖曳調整。
5. **封面** — 點一下卸載曲目。
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

1. **SMPTE OUT** — 點一下展開或收合面板。收合時摘要顯示各 layer 的來源與啟用中的輸出。
2. **分離** — 把 SMPTE OUT 開成獨立視窗。關閉後回到面板。
3. **Layer A** — 把所選 deck 的位置以時間碼送出的 layer。Layer B 相同。
4. **LTC, MTC, ART** — 開關此 layer 的 LTC (音訊時間碼), MTC (MIDI 時間碼) 與 ART (Art-Net 時間碼) 輸出。LTC 與 ART 每個 layer 都可啟用；MTC 只能一個。LTC 裝置與 MTC 連接埠在[設定](#15-設定)的 **SMPTE 時間碼輸出**中選擇；Art-Net 的網路與幀率在 [OUTPUT](#13-output) 頁面上方。
5. **來源 deck** — 此 layer 跟隨的 deck。與卡片上的 A, B 按鈕相同。
6. **時間碼** — 來源的位置加上偏移。實際輸出再加上設定中的延遲補償。
7. **− / +** — 每個欄位改變 1；按住 Ctrl (Mac 為 Cmd) 改變 10。MASTER 的 STEP 為 TIME 時改變 FREEWHEEL 時間，否則改變偏移。
8. **SET** — 表示 set list 的偏移已載入此 layer。滑鼠移上去顯示曲目。曲目不在清單中而使用 UNLISTED 偏移時，顯示 SET —。
9. **OFFSET ON** — 把偏移納入輸出或排除。數值會保留。
10. **重設** — 把偏移設為 0。
11. **MASTER** — MASTER layer。
12. **FREEWHEEL 按鈕** — ▶ 讓 FREEWHEEL 碼開始走，❚❚ 暫停並保留數值，|◀ 回到 00:00:00:00。READY (◉) 讓 FREEWHEEL 停在目前數值，並在任一 deck 開始播放時啟動。有混音器時只算當下 on air 的 deck；已在播放的與 CUE 試聽不算。
13. **來源** — A 與 B 送出該 layer 的碼加上 MASTER 的偏移。CLOCK 使用電腦時間；FREEWHEEL 從 MASTER 的最後數值自行繼續走。
14. **STEP** — MASTER 來源為 FREEWHEEL 時，− / + 改變偏移 (OFS) 還是 FREEWHEEL 時間 (TIME)。

Deck 停止時，LTC 仍持續送出停止位置的碼，同一幀重複，讓接收端知道已停止。

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
5. **CLEAR** — 清除記錄。3 秒內再點一次確認。
6. **EVENT** — 活動名稱。會放進匯出檔名 (CSV, set list, 曲目清單) 與 TXT 內文。
7. **DJ** — DJ 名稱。會放進 TXT 內文。
8. **搜尋** — 以曲名或藝人搜尋。
9. **表頭** — 拖曳邊界改變寬度；連點兩下恢復。欄位：
   - **DECK** — 播放器編號與型號。
   - **START, END** — 何時 on air 與何時結束。
   - **IN, OUT** — 進入與離開 on air 時的播放位置。
   - **ON AIR** — On air 的時間。
10. **合計** — 已播放曲目數, ON AIR 總時間, 平均 BPM 與各 deck 的曲目數。

滑鼠移到某列時，右側會出現加入 set list 的按鈕與刪除按鈕。刪除 on air 中的曲目後，該曲目在繼續播放期間不再記錄。

---

## 10. SET LIST

![SET LIST](images/15-setlist.png)

為每首曲目設定時間碼偏移與 cue 的清單。APPLY TO SMPTE 開啟時，把清單中的曲目載入 deck，其偏移會進入該 deck 所連接的 SMPTE layer (A, B)。與 history 一樣，set list 每次啟動時清空；自動儲存與復原的方式相同。

1. **曲目數** — 清單中的曲目數。
2. **APPLY TO SMPTE** — 開啟：已載入曲目的偏移進入該 deck 的 layer。關閉：layer 的偏移維持不變。
3. **UNLISTED** — 不在清單中的曲目所用的偏移。旁邊的按鈕設為 00:00:00:00。
4. **AUTO FILL** — 設定起始值與間隔 (1H, 30M, 10M) 後按 FILL，依序填入偏移。沒有間隔時全部填入相同的值。
5. **ADD** — + 新增手動輸入的曲目；deck 編號則新增該 deck 已載入的曲目。
6. **搜尋** — 以曲名或藝人搜尋。
7. **IMPORT** — 載入 set list：ORVIK 檔, ShowKontrol set list (.set) 或 history (.csv), 從 rekordbox 等匯出的文字清單, 或音訊檔。已有清單時詢問取代 (REPLACE) 或加入 (ADD)；無法辨識文字檔的欄位時會要求選擇欄位。ORVIK 檔包含 cue。
8. **EXPORT** — 以所選格式儲存：ORVIK 檔或 ShowKontrol set list (.set)。
9. **CLEAR PLAYED** — 只清除已播放標記。
10. **CLEAR** — 清除清單。3 秒內再點一次確認。曲目的 cue 會一併刪除。
11. **OFFSET** — 此曲目的偏移。載入 deck 時此值進入 layer。點一下編輯；旁邊的按鈕設為 00:00:00:00。
12. **STATUS (在 deck 中)** — 曲目所在的 deck 與收到其偏移的 layer (A, B)。
13. **STATUS (已播放)** — 在 APPLY TO SMPTE 開啟的狀態下曲目播放並 on air 後出現標記。沒有混音器時只計算播放。同一曲目出現多次時使用沒有標記的那一列的偏移；只出現一次時重複使用其偏移。
14. **在 deck 中的曲目** — 已載入曲目的列會標示。

點曲名或藝人可編輯。列右側的按鈕可把曲目上移, 下移或移除。拖曳表頭邊界改變寬度；連點兩下恢復。每列的**波形**欄是 cue 編輯所用波形的來源 (音訊檔, HISTORY, CDJ, 無)，**cue** 欄是該曲目的 cue 數。

### 10.1 Cue 編輯

Cue 編輯器在 SET LIST 頁面右側開啟。選擇曲目後顯示其波形與 cue 清單。

- **波形** — 整首曲目與放大的區段，附拍格, 小節編號, 樂句帶與 cue 標記。波形來自音訊檔, HISTORY 記錄或 CDJ 傳來的波形，有哪個用哪個。CDJ 波形需要開啟曲目庫 (編輯器會提議開啟)。沒有波形時 cue 只依時間放置。
- **移動位置** — 點波形移動編輯位置。**吸附** (無, 拍, 小節, 幀) 把位置對齊格線。**縮放**改變放大的範圍。
- **+ Cue (C)** — 在編輯位置建立 cue。有音訊檔時會試聽該處。
- **匯入 hot cue** — 把 rekordbox 的 hot cue 與記憶點帶入作為 cue 位置。
- **Cue 清單** — 時間, 小節.拍, 名稱, 群組與動作摘要。
- **Cue 設定** — 名稱, 時間, 小節.拍, 群組, 預告 (預設或拍數), 語音 (跟隨群組, 是, 否), 要唸的內容 (空白則唸 cue 名稱) 與動作清單。
- **動作清單** — 由上而下依序執行：OSC (目的地, 位址, 型別 i/f/s, 值), Art-Net DMX (universe, 多個 通道=值), MIDI (裝置, 通道, Note on/off, CC, Program) 與等待 (毫秒，或拍與小節)。目的地清單與 OUTPUT 相同。
- **群組** — Cue 所屬的工作群組。預設群組為燈光, 影像, SFX 與雷射；群組選單中的**編輯群組…**可改名, 改色或新增。群組決定 cue call 視窗與語音輸出。
- **Cue 輸出** — 編輯器上方的開關控制是否送出動作。

Cue 只對 master deck 上播放的曲目反應。該曲目不在 set list 中時不會送出任何 cue。Cue 的拍由拍格與播放位置計算。Cue 屬於 set list 的項目，因此同一曲目在不同 set list 中有不同的 cue。

---

## 11. CUE CALL

頂欄的 CUE CALL 按鈕開啟 cue call 視窗。它依群組顯示 master deck 曲目的 cue，並倒數到下一個 cue。可以開啟多個視窗 (例如一個給燈光, 一個給 SFX)；位置, 大小與顯示設定依視窗各自記住。標題列的按鈕可把視窗停靠在主視窗右側或分離。

### 主題

- **看板** — 每個群組一張卡片：cue 名稱, 下一個 cue, 大型倒數與最後 8 小節的進度條。接近 cue 時卡片填滿群組色；到 cue 時顯示 GO。
- **圖層** — 流動的時間軸：上方是 master deck 的波形與其 cue 標記，下方每個群組一條線，再加上下一首曲目的線。NOW 線在寬度的 20 % 處；cue 碰到它時觸發。

### 剩餘時間

秒數與拍數 (小節.拍，類似 CDJ 的拍倒數) 一起顯示：`2.3` 表示 2 小節 3 拍。在大型倒數中，秒數以 0.1 秒為單位染上群組色，最後幾拍數 3 2 1 (或從 5 或 10 開始)，然後出現 GO。點數字可在秒優先, 拍優先與只顯示秒之間切換。

### 設定視窗 (齒輪)

| 區塊 | 項目 |
| --- | --- |
| 顯示 | 剩餘時間 (秒優先, 拍優先, 只顯示秒), 大型倒數 (5, 10, 15, 30 秒), 拍倒數起點 (3, 5, 10), 時間軸範圍, 顯示的群組, 波形顏色 (曲目, 群組, 灰色) |
| 網頁檢視 | 手機與平板用的網址, **複製網址**, **在瀏覽器開啟**。需在設定中開啟網頁檢視器。 |
| 語音 | 唸什麼 (名稱 + 倒數, 只唸名稱, 只唸倒數), 預告 (8 拍, 4 拍), 倒數 (3, 2, 1 或無), 最後一個字 (是, 否), 語音, 節拍聲 (無, 倒數期間, 總是) 與其音量, 輸出 (裝置, 聲道, 音量, 測試), 各群組靜音 |

### 語音播報

視窗頂部的喇叭圖示開關語音播報。語句事先以系統語音 (macOS, Windows) 產生，演出時依拍播放。

- Cue 前 8 (或 4) 拍：「群組, cue 名稱, standby」；每拍「三, 二, 一」；到 cue 時「go」。
- **語音**清單只列出應用程式能說的語言 (韓文, 英文, 日文, 西班牙文, 德文, 法文, 中文) 的語音，依語言分組。第一項「…的系統語音」是介面語言的預設語音。選擇其他語言的語音後，播報改用該語言 (英文語音會說「Lighting, standby」「three, two, one, go」)。Set list 中輸入的群組名稱照原樣唸出。
- 該語言沒有語音時，播報改為英文，第一項會註明。語音在作業系統的語音設定中新增。
- **輸出**可以是 LTC 所用裝置的其他聲道，但不能是 LTC 的聲道；選到同一聲道會顯示衝突警告。
- 群組名稱旁的喇叭可將該群組靜音。視窗中隱藏的群組不會播報。

### 網頁

設定中開啟網頁檢視器後，同一網路上的手機, 平板與其他電腦可開啟 `http://<此電腦>:<連接埠>/cuecall`。會先要求存取碼 (與網頁檢視器相同)，並記住 12 小時。看板與圖層主題以及顯示設定在該裝置上選擇。手機直向有專用版面。

---

## 12. NETWORK

![NETWORK](images/16-network.png)

1. **PRO DJ LINK 狀態** — ORVIK 是否準備好接收 PRO DJ LINK。是否看到 CDJ 請看器材清單。
2. **器材清單** — 看到的每台 CDJ 與 DJM 的編號, 類型, 型號與 IP。
3. **TCNet 狀態** — TCNET 開關是否開啟，以及 ORVIK 的節點名稱。
4. **節點清單** — ORVIK 與最近 10 秒內看到的 TCNet 節點。
5. **TYPE** — 節點的角色：SERVER 傳送，CLIENT 接收；另有 REPEATER 與 AUTO。TCNet 開啟而沒有任何 CLIENT 時，清單下方會出現提示。

---

## 13. OUTPUT

把 deck 與混音器的值以 OSC, DMX (Art-Net, sACN) 與 MIDI 送給其他程式與器材。這是合併了舊的 OSC 頁面與 ART-NET 的 DMX patch 的節點編輯器。1.6 的 OSC 列與 DMX patch 會在第一次啟動時轉換為節點，並送出相同的值。

### 上方

- **IMPORT, EXPORT** — 把節點圖儲存為檔案或載入。
- **OSC** — OSC 目的地 (位址:連接埠)：此電腦, 某個 IP 或廣播。
- **Art-Net 網路** — Art-Net 用的網路介面與 DMX 頻率 (Hz)。
- **Art-Net 時間碼** — Art-Net 時間碼的幀率。各 layer 以 SMPTE OUT 的 ART 按鈕開啟。
- **MIDI** — MIDI 輸出裝置。
- **掃描** — 重新搜尋 Art-Net 器材 (ArtPoll) 與 MIDI 裝置。

### 左側清單

點項目即可在畫布上建立該節點。

| 群組 | 節點 |
| --- | --- |
| 目的地 | OSC, DMX 輸出, MIDI CC, MIDI Note |
| 值 (混音器聲道 1–6) | Fader, VU, Hi, Mid, LoMid, Low, Color, OnAir |
| 值 (混音器整體, 效果) | Xf, MVU, MVUL, MVUR, BeatFX, BeatFXOn, BeatFXName, BeatFXCh, ColorFXName |
| 值 (deck 速度) | BPM, BPMCoarse, BPMFine, Beat, Downbeat, Phase, BarBeat, BarPhase |
| 值 (deck 時間, 樂句) | Pos, Time, Length, Remain, Phrase, PhraseKind, PhrasePos, PhraseBeats |
| 值 (deck 狀態, 曲目) | Loop, Sync, Master, CDJPlay, CDJCue, Deck, Title, Artist, Key |
| 值 (SMPTE 輸出) | SMPTEA, SMPTEB, SMPTEM, Clock |
| 轉換 | 範圍, 波形 (sin, tri, saw, sq), 反轉, 自走, 時間格式 |
| 運算 | 加, 減, 乘, 除, 最小, 最大, 平滑, 換行 |

### 畫布與右側設定

把值節點的輸出拖到轉換, 運算或目的地的輸入。流動的值會顯示在連線上。一個值可以送到多個目的地。選取節點時其設定顯示在右側 (deck, 範圍, 位址, 通道, 型別, 目前值)。值節點的 deck 為「跟隨 master」或 deck 1–6。

- **OSC** — 位址與型別 (int, float, string)。只在改變時送出，最多 60 Hz。開頭缺少 `/` 時自動補上；不接受空白與 `# * , ? [ ] { }`。
- **DMX 輸出** — Net, Subnet, Universe 與通道。0–1 的值以 0–255 送出。接收端 (unicast IP 或廣播) 與 sACN 優先度在節點中設定。
- **MIDI CC, MIDI Note** — 通道與 CC 或音符編號。0–1 的值以 0–127 送出。
- **範圍** — 把 0–1 換算為 min–max。min 大於 max 時方向反轉。BPM 把 20–500 BPM 視為 0–1。
- **波形** — 把 0–1 換成 sin, tri, saw 或 sq 波；**反轉**為 1 − 值。**自走**以所選週期自行運作，不需輸入。
- **時間格式** — 選擇時間值 (Time, Length, Remain, SMPTE, Clock) 的欄位 (hh, mm, ss, ff)。見「時間格式」。
- **換行** — 把文字值合併成多行 (例如曲名 / 藝人)。

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

鍵盤, MIDI, OSC 與 DMX (Art-Net) 可按下 ORVIK 的按鈕並改變其數值。只設定接收端；已指定按鈕的狀態可經由 MIDI OUT 回傳。

### SHORTCUT 頁面

| 區塊 | 內容 |
| --- | --- |
| 鍵盤 | 組合鍵，只在 ORVIK 視窗在最前面時有效。 |
| MIDI 輸入 | 監聽的 MIDI 裝置 (全部或一個)。OUT 開啟時，已指定按鈕的狀態會回傳到該裝置 (控制器 LED)。 |
| OSC 輸入 | OSC 接收連接埠, 監聽位置 (所有介面或只有此電腦) 與允許的 IP 清單。清單為空時網路上任何人都能控制：到現場請填入 IP。 |
| DMX 輸入 (Art-Net) | 以 Art-Net universe 的通道控制。可與 Resolume 在同一台電腦上同時接收。 |
| 從按鈕指定 | **MAP 開啟**進入指定模式。 |

指定清單顯示每個動作的按鍵, MIDI (通道, 音符或 CC), OSC 位址與 DMX 通道，並可移除。

### MAP

側欄的 MAP (或 SHORTCUT 中的 MAP 開啟) 進入指定模式。點畫面上的按鈕固定目標；接下來的按鍵, MIDI 輸入, OSC 訊息或 DMX 通道會指定給該按鈕。Esc 離開模式。模式啟用期間可指定的按鈕會以框線標示。

---

## 15. 設定

![設定](images/18-settings.png)

側欄的 SETTINGS 開啟設定視窗。

1. **區塊圖示** — 點一下跳到該區塊。
2. **區塊** — 設定依下列方式分組。
3. **設定** — 左側為名稱，右側為值。

### 語言

| 項目 | 說明 |
| --- | --- |
| 語言 | 介面語言。系統語言跟隨電腦。한국어, English, 日本語, Español, Deutsch, Français, 繁體中文。 |

### Deck 版面

| 項目 | 說明 |
| --- | --- |
| 版面主題 | Deck 畫面的版面：FLOW, STK, STRIP 或 ROW。[6.3](#63-版面) |
| 畫面模式 | 深色或淺色。 |
| 畫面 FPS | 每秒重繪畫面的次數。降低可減少 CPU 使用。傳送頻率不受影響。 |
| 介面縮放 | 整個畫面的大小。 |

### 波形

| 項目 | 說明 |
| --- | --- |
| 波形顏色 | 3band, RGB 或 mono。沒有 3band 資料的曲目以 RGB 顯示。 |
| 播放位置 | 細部波形中位置線的位置。 |
| 拍格：整體 | 繪在整體波形上的格線。 |
| 拍格：細部 | 繪在細部波形上的拍格。 |
| 樂句 | 波形上樂句 (INTRO, CHORUS 等) 的顯示方式。 |
| Cue 標記樣式 | 繪在波形上的 cue 標記形狀。 |

### PRO DJ LINK

| 項目 | 說明 |
| --- | --- |
| PRO DJ LINK 介面 | CDJ 與 DJM 所在的網路介面。自動偵測會選擇看得到 CDJ 的那一側。 |
| 狀態 | 此介面的連線狀態。 |
| 介面清單 | 重新整理會重新讀取清單；接上轉接器後請按一下。所選介面不存在時顯示為「不存在」，期間引擎使用自動偵測。 |
| PRO DJ LINK 自動啟動 | ORVIK 啟動時開啟 PRO DJ LINK。 |
| 連接埠 | PRO DJ LINK 使用的 UDP 連接埠。其他程式佔用時 ORVIK 會警告。 |

### TCNet

| 項目 | 說明 |
| --- | --- |
| Node Name | 此電腦在 TCNet 中的名稱。%% 為自動編號；最多 8 個字元。 |
| TCNet 介面 | 送出 TCNet 的網路介面。 |
| 狀態 | 此介面的連線狀態。 |
| Frame Rate | 經 TCNet 送出的時間碼幀率。 |
| TCNet 模式 | Auto 在有更早的伺服器時等待，Server 一律送出，Client 一律不送出。 |
| TCNET 自動啟動 | ORVIK 啟動時開啟 TCNET 輸出。 |
| 連接埠 | TCNet 使用的 UDP 連接埠。 |

### 鏡像模式

| 項目 | 說明 |
| --- | --- |
| 提供鏡像 | 允許其他電腦上的 ORVIK 鏡像此電腦。 |
| 鏡像其他 PC | 顯示其他電腦的 ORVIK 畫面。 |
| 鏡像伺服器 | 被鏡像的伺服器。重新整理會重新搜尋。 |
| 連接埠 | 鏡像使用的 TCP 連接埠。 |

鏡像時，頂欄的 PRO DJ LINK 與 TCNET 按鈕改為 MIRROR 與伺服器位址；連線前與重新連線時顯示 CONNECTING。鏡像中的電腦不送出 TCNet。點 MIRROR 開啟設定。

### 網頁檢視器

| 項目 | 說明 |
| --- | --- |
| 網頁檢視器 | 允許同一網路上的瀏覽器查看 deck 畫面與 cue call 頁面 (唯讀)。 |
| 連接埠 | 網頁檢視器的連接埠。 |
| 介面 | 網頁檢視器監聽的網路介面。 |
| 狀態 | 網頁檢視器的網址與狀態；開啟時顯示存取碼與 QR code。 |

### 音訊輸出

| 項目 | 說明 |
| --- | --- |
| 輸出裝置 | 虛擬 deck 用的音訊裝置。 |
| 輸出聲道 | 虛擬 deck 用的輸出聲道。 |

### SMPTE 時間碼輸出

| 項目 | 說明 |
| --- | --- |
| Frame Rate | LTC 與 MTC 的幀率。 |
| 延遲補償 | 加到時間碼上的毫秒數；正值提前。LTC, MTC 與 Art-Net 共用，用來補償接收端的延遲。 |
| LTC: Layer A, Layer B, MASTER | 各 layer 的 LTC 音訊裝置與聲道。 |
| MASTER layer 跟隨 master deck | MASTER 跟隨 A 或 B 時，若 CDJ master 換到另一 layer 的 deck，MASTER 就換到該 layer。 |
| MTC 的 MIDI 輸出 | MTC 用的 MIDI 連接埠。 |

### 設定檔

| 項目 | 說明 |
| --- | --- |
| 備份 | 把設定儲存為檔案 (.orvikcfg) 或載入。載入後 ORVIK 會重新啟動。History, set list 與視窗位置不包含在檔案中。1.6 的檔案也能載入；其 OSC 列與 DMX patch 會轉換為 OUTPUT 節點。 |
| 重設 | 把所有設定恢復為初始值並重新啟動。 |

### 關於

| 項目 | 說明 |
| --- | --- |
| 版本 | ORVIK 目前的版本。 |
| 檢查更新 | 開啟時在啟動後與每 12 小時檢查新版本。 |
| 通知預覽版 | 也通知預覽版本。 |
| 立即檢查 | 立刻檢查；有新版本時出現前往下載頁面的按鈕。 |
| 版權 | ORVIK 與 JUCE 的版權與授權聲明，以及用於詢問的 REPORT 按鈕。 |
| 開放原始碼 | 開啟應用程式內附的授權資料夾 (Windows 上會解壓到暫存資料夾)，或開放原始碼授權說明。 |

---

## 16. 商標與授權

ORVIK 是獨立的相容性工具。它不是 AlphaTheta 的官方 PRO DJ LINK Bridge，也不是 TC Supply 的 ShowKontrol，且不代表與 AlphaTheta, Pioneer DJ, TC Supply 或 Resolume 有任何關聯, 贊助, 認證或背書。

AlphaTheta, Pioneer DJ, CDJ, DJM, PRO DJ LINK, rekordbox, TC Supply, TCNet, ShowKontrol, Resolume, SMPTE 及其他產品, 技術與品牌名稱僅用於說明相容性。各商標的權利屬於其所有者。Art-Net™ Designed by and Copyright Artistic Licence.

ORVIK 使用 JUCE 9 框架, 隨附的開放原始碼元件與字型。清單與授權全文見設定視窗的**關於**區塊與 THIRD_PARTY_NOTICES。應用程式的使用條款見 BINARY_LICENSE。
