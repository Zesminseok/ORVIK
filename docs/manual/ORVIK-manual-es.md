# Manual de usuario de ORVIK (2.0)

Este manual describe las pantallas de ORVIK y sus partes. Los números de las imágenes coinciden con los de las listas. La versión 2.0 es una aplicación nativa (C++ / JUCE); este manual describe las pantallas de 2.0.

## Índice

1. [Antes de empezar](#1-antes-de-empezar)
2. [Disposición de la pantalla](#2-disposición-de-la-pantalla)
3. [Cabecera](#3-cabecera)
4. [Barra lateral](#4-barra-lateral)
5. [Barra de estado](#5-barra-de-estado)
6. [DECKS](#6-decks)
7. [SMPTE OUT](#7-smpte-out)
8. [MIXER](#8-mixer)
9. [HISTORY](#9-history)
10. [SET LIST](#10-set-list)
11. [CUE CALL](#11-cue-call)
12. [NETWORK](#12-network)
13. [OUTPUT](#13-output)
14. [SHORTCUT y MAP](#14-shortcut-y-map)
15. [Ajustes](#15-ajustes)
16. [Marcas y licencias](#16-marcas-y-licencias)

---

## 1. Antes de empezar

### Qué es ORVIK

ORVIK recibe la información de reproducción de los CDJ y DJM y la envía a programas de iluminación y vídeo: TCNet, código de tiempo SMPTE (LTC, MTC, Art-Net), OSC, DMX (Art-Net, sACN), MIDI y MIDI Clock. También puede mostrar los cues del set list al personal técnico en ventanas de cue call y anunciarlos en voz alta. Solo pide información a los equipos; no los controla.

### Requisitos

| Elemento | Detalle |
| --- | --- |
| Sistema operativo | macOS 13.3 o posterior (Apple Silicon), Windows 10, 11 (x64) |
| Equipos comprobados | CDJ-3000X, CDJ-3000, CDJ-2000NXS2, DJM-V10, DJM-900NXS2 |

La información disponible depende del equipo, su firmware y la conexión.

### Instalación y ejecución

- **macOS** — abra el DMG y mueva ORVIK a la carpeta Aplicaciones.
- **Windows** — ejecute el `.exe` descargado tal cual. No hay instalador. El archivo no está firmado; si SmartScreen avisa la primera vez, elija "Más información" y luego "Ejecutar de todas formas".

Al iniciar y al cerrar aparece una breve pantalla de bienvenida. Al cerrar, primero se cierran las conexiones TCNet y PRO DJ LINK.

### Primera conexión

1. Conecte este ordenador a la red de los reproductores y el mezclador: el mismo switch o router. TCNet hacia Arena puede salir por la misma red o por un segundo adaptador.
2. Inicie ORVIK. PRO DJ LINK y TCNET se activan solos (**Iniciar PRO DJ LINK automáticamente** e **Iniciar TCNet automáticamente** en [Ajustes](#15-ajustes)); si no, actívelos en la cabecera.
3. Los reproductores aparecen en DECKS y NETWORK. Con **Detección automática**, ORVIK usa el adaptador donde se ven CDJ; para fijar un adaptador, elíjalo en **Interfaz PRO DJ LINK** en los ajustes.
4. Si no aparece ningún equipo, NETWORK indica qué falla en la configuración y qué hacer. [12.1](#121-avisos-de-configuración)

En macOS, permita ORVIK en Ajustes del Sistema > Privacidad y seguridad > Red local. En Windows, permita ORVIK cuando lo pida el firewall; un adaptador sin router cuenta como red pública, así que permita también las redes públicas.

---

## 2. Disposición de la pantalla

![Disposición de la pantalla](images/01-overview.png)

1. **Cabecera** — BPM maestro, interruptores PRO DJ LINK y TCNET, botón CUE CALL, volumen y botones de ventana. [Capítulo 3](#3-cabecera)
2. **Barra lateral** — elige la página. [Capítulo 4](#4-barra-lateral)
3. **Página** — la pantalla elegida en la barra lateral. La imagen muestra DECKS.
4. **Dock SMPTE OUT** — muestra y ajusta las salidas de código de tiempo. Pulse para desplegar. [Capítulo 7](#7-smpte-out)
5. **Barra de estado** — estado de la transmisión y de la aplicación. [Capítulo 5](#5-barra-de-estado)

Con una ventana CUE CALL acoplada, el panel de cue call aparece a la derecha de la página. [Capítulo 11](#11-cue-call)

---

## 3. Cabecera

![Cabecera](images/02-header.png)

1. **MASTER BPM** — el BPM del maestro CDJ. Si el maestro no tiene BPM, se muestra el de un deck en reproducción, primero uno en el aire. La casilla izquierda es el número de reproductor del maestro.
2. **PRO DJ LINK** — activa y desactiva la conexión con CDJ y DJM.
3. **TCNET** — activa y desactiva la transmisión TCNet a los programas de iluminación y vídeo. Con el modo TCNet en Cliente en los ajustes, o en STANDBY, no se envía nada aunque esté activado.
4. **CUE CALL** — abre un cue call acoplado a la derecha de la ventana principal; un segundo clic cierra todos los cue call, y Alt+clic (Opción+clic en Mac) abre uno en su propia ventana. El botón queda relleno mientras haya un cue call abierto. [Capítulo 11](#11-cue-call)
5. **Recargar** — recarga la pantalla (Cmd/Ctrl+R). La reproducción de los decks virtuales se detiene.
6. **M.VOL** — el volumen del sonido de los decks virtuales que emite la aplicación. No afecta al audio de CDJ ni del mezclador.
7. **Botones de ventana** — en Windows: minimizar, maximizar y cerrar ORVIK. En macOS se usan los botones estándar de la esquina superior izquierda, y el menú Ventana tiene Minimizar (⌘M) y Cerrar (⌘W). Si hay un historial o un set list sin guardar, ORVIK pregunta si guardar al cerrar.

### Estado de los interruptores

Cuando PRO DJ LINK o TCNET está activado, su casilla izquierda se rellena con el color de estado: verde si todo va bien, un punto parpadeante mientras se activa. Si hay algo que revisar, aparece una de estas etiquetas dentro del interruptor.

| Etiqueta | Significado |
| --- | --- |
| NO H/W | PRO DJ LINK está activado pero no se ve ningún CDJ ni DJM. |
| LOST | Hay decks de hardware, pero ningún CDJ envía estado desde hace más de 1,5 s. |
| STANDBY | Hay un servidor TCNet iniciado antes en la misma red; la transmisión está en pausa, esperando. |

Cuando la configuración de red impide que los reproductores y el mezclador lleguen a ORVIK, la descripción emergente del interruptor PRO DJ LINK indica qué falla. [12.1](#121-avisos-de-configuración)

Cuando hay una versión nueva, aparece la insignia UPDATE en la cabecera. Pulse para abrir la página de descarga.

---

## 4. Barra lateral

| Menú | Contenido |
| --- | --- |
| DECKS | Formas de onda, código de tiempo y estado de reproducción por deck |
| MIXER | Faders de canal, EQ e indicadores de nivel del DJM |
| HISTORY | Registro de las pistas que salieron al aire |
| SET LIST | Set list, offsets de código de tiempo por pista y edición de cues |
| NETWORK | Equipos PRO DJ LINK, nodos TCNet y avisos de configuración de red |
| OUTPUT | Editor de nodos que envía valores de decks y mezclador como OSC, DMX (Art-Net, sACN) y MIDI, con los ajustes de red y de código de tiempo Art-Net. [Capítulo 13](#13-output) |
| MAP | Activa y desactiva MAP: pulse un control de la pantalla y luego una tecla, o envíe MIDI o DMX, para asignarlo. [Capítulo 14](#14-shortcut-y-map) |
| SHORTCUT | Las entradas de teclado, MIDI, OSC y DMX y la lista de asignaciones. [Capítulo 14](#14-shortcut-y-map) |
| SETTINGS | Abre la ventana de ajustes; pulse de nuevo para cerrarla. [Capítulo 15](#15-ajustes) |

Los menús se agrupan desde arriba: DECKS y MIXER, HISTORY y SET LIST, NETWORK y OUTPUT. MAP y SHORTCUT están encima de SETTINGS, abajo del todo.

---

## 5. Barra de estado

![Barra de estado](images/05-status-bar.png)

1. **TCNET** — si el interruptor TCNET de la cabecera está activado. En STANDBY no se envía nada aunque diga ON.
2. **ARENA** — número de nodos TCNet vistos en los últimos 10 s.
3. **DECKS** — decks de hardware más decks virtuales con pista cargada.
4. **UP** — tiempo desde que arrancó el motor.
5. **CPU** — uso de CPU de ORVIK.
6. **GPU** — la parte del tiempo de la tarjeta gráfica que usa ORVIK, cuando el sistema la indica.
7. **MEM** — memoria que usa ORVIK.
8. **Puntos de deck** — un punto por deck. Los decks de hardware muestran su color; los virtuales cambian de color según reproducción, cue, cargado o vacío.

Si algo falla, aparecen LINK, OUT o MIX en la barra de estado: LINK cuando hay números de reproductor repetidos o la configuración de red requiere atención (por ejemplo PDJL sin equipos o PDJL otra subred), OUT cuando la transmisión TCNet se detuvo o la aplicación está en espejo, MIX cuando se cortaron los datos del mezclador. Pulsar uno lleva a la página relacionada. No aparecen mientras todo va bien.

---

## 6. DECKS

### 6.1 Modo de deck y equipos conectados

![Modo de deck y equipos conectados](images/03-deck-top.png)

1. **Modo de deck** — HARDWARE sigue a los CDJ de la red PRO DJ LINK (predeterminado). VIRTUAL usa decks virtuales que reproducen archivos de audio de este ordenador. Cambiar de modo elimina los decks actuales; pasar a HARDWARE con decks virtuales pide confirmación. [6.4](#64-decks-virtuales)
2. **CDJ** — número y modelo de cada reproductor conectado. Pase el ratón para ver la IP; clic derecho para elegir el color del deck.
3. **DJM** — modelo del mezclador conectado. Se añade NO DATA si no llega ningún valor de control durante más de 1,5 s.

### 6.2 Tarjeta de deck

![Tarjeta de deck](images/04-deck-card.png)

La imagen muestra una tarjeta en la disposición FLOW. Otras disposiciones omiten o mueven algunas partes.

1. **Número de reproductor** — clic derecho para elegir el color del deck.
2. **Título, artista**
3. **Tonalidad** — la tonalidad de la pista, en notación Camelot como 8A; las que no se pueden convertir se muestran tal cual.
4. **ON AIR** — encendido cuando el canal de este deck está en el aire en el mezclador.
5. **MASTER** — encendido cuando este deck es el maestro CDJ.
6. **SYNC** — encendido cuando Beat Sync está activo.
7. **Fader de canal, indicador de nivel** — posición del fader y nivel del canal en el DJM.
8. **Estado de reproducción** — PLAY, PAUSE, CUE, LOOP, etc.
9. **Modelo, soporte** — modelo del CDJ y soporte que contiene la pista (número de reproductor y USB o SD). El color del chip es el color del soporte definido en rekordbox; sin color es gris. Sin información de color se muestra texto en lugar del chip.
10. **Fijar en grande** — en FLOW, mantiene este deck en grande. Pulse de nuevo o cargue otra pista para soltarlo.
11. **Forma de onda de detalle** — la onda alrededor de la posición de reproducción. La línea roja es la posición.
12. **Contador de compases** — compases hasta el siguiente cue de memoria. Se pone rojo con 8 o menos; sin cue por delante muestra los compases transcurridos. Pulse para pasar a segundos.
13. **Zoom** — − amplía la vista (×2 por pulsación), + la reduce (mínimo 0,5 s). RST vuelve a los 8 s predeterminados.
14. **Forma de onda general** — toda la pista. En decks de hardware, mantener pulsado previsualiza la onda de detalle en ese punto; al soltar vuelve. Durante la vista previa, el contador muestra la distancia a la posición de reproducción en segundos o minutos:segundos.
15. **Código de tiempo** — el código de tiempo de la posición actual.
16. **Tiempo** — pulse para alternar entre transcurrido y restante. A la derecha, la duración.
17. **Posición del beat** — qué beat del compás suena.
18. **BPM** — arriba a la izquierda el BPM original, debajo el cambio de tempo (%), el número grande a la derecha es el BPM actual.
19. **SMPTE MASTER** — asigna este deck a la capa A o B y hace esa capa fuente de MASTER. Pulse de nuevo para soltar solo la fuente MASTER; la asignación A, B se mantiene. Las salidas LTC, MTC y Art-Net se activan aparte en SMPTE OUT.
20. **SMPTE A, B** — hace este deck fuente de la capa SMPTE A o B.

Con el color de onda en 3band y una pista sin datos 3band, aparece ! en el deck y la onda se muestra en RGB. Las ondas se dibujan en la tarjeta gráfica (GPU).

### 6.3 Disposiciones

Hay cuatro disposiciones de decks. Elija con **Tema de Diseño** en [Ajustes](#15-ajustes).

<table>
<tr>
<td width="50%"><img src="images/layout-flow.png" alt="FLOW"><br><b>FLOW</b> — ajusta el tamaño de los decks según el maestro CDJ, el aire y la reproducción. En una ventana ancha, hasta cuatro decks cargados se muestran en grande.</td>
<td width="50%"><img src="images/layout-stk.png" alt="STK"><br><b>STK</b> — apila todos los decks como tarjetas iguales, de dos en dos.</td>
</tr>
<tr>
<td><img src="images/layout-strip.png" alt="STRIP"><br><b>STRIP</b> — una línea fina por deck. Solo se muestra la onda general.</td>
<td><img src="images/layout-row.png" alt="ROW"><br><b>ROW</b> — una fila por deck con ondas de detalle y general anchas.</td>
</tr>
</table>

### 6.4 Decks virtuales

![Deck virtual](images/07-virtual-deck.png)

Con el modo de deck en VIRTUAL, los decks virtuales reproducen archivos de audio de este ordenador. Siempre usan la tarjeta FLOW, sea cual sea el tema de disposición, con los botones de transporte (⑧) entre el código de tiempo y el BPM. La imagen muestra un deck con pista y un deck vacío.

1. **Número de deck**
2. **VIRTUAL** — indica un deck virtual, que reproduce un archivo de este ordenador.
3. **×** — elimina este deck virtual.
4. **Fader de canal** — arrastre para ajustar.
5. **Expulsar** — descarga la pista.
6. **Forma de onda de detalle** — arrastre para mover la posición.
7. **Forma de onda general** — pulse o arrastre para mover la posición.
8. **|◀, CUE, ▶** — CUE en pausa fija el punto de cue y reproduce mientras se mantiene; en reproducción vuelve al punto de cue. ▶ reproduce y pausa; |◀ detiene y vuelve al inicio.
9. **Abrir** — pulse para elegir un archivo de audio o suelte uno aquí.
10. **Añadir deck virtual** — añade otro deck virtual, hasta 6.

Archivos admitidos: MP3, WAV, AIFF, FLAC, AAC, M4A (AAC, ALAC), OGG, MP4 (audio). Todo formato que abre un CDJ se abre aquí.

El audio de los decks virtuales sale por el dispositivo elegido en **Salida de audio** en [Ajustes](#15-ajustes); el volumen es M.VOL en la cabecera.

---

## 7. SMPTE OUT

![SMPTE OUT](images/06-smpte-dock.png)

Hay tres capas de salida de código de tiempo: A, B y MASTER. Las capas A y B envían la posición del deck elegido; MASTER envía la capa A, la capa B, el reloj del ordenador o FREEWHEEL. La imagen muestra la capa A y MASTER; la capa B es igual que A.

1. **SMPTE OUT** — pulse para desplegar o plegar el dock. Plegado, muestra cómo está conectada cada capa y luego las salidas activas: A ← 1 significa que la capa A sigue al deck 1, MASTER ← A que MASTER envía la capa A; detrás va el código de tiempo de MASTER.
2. **Separar** — abre SMPTE OUT en su propia ventana. Al cerrarla vuelve al dock.
3. **Capa A** — la capa que envía como código de tiempo la posición del deck elegido. La capa B es igual.
4. **LTC, MTC, ART** — activa y desactiva las salidas LTC (código de tiempo de audio), MTC (código de tiempo MIDI) y ART (código de tiempo Art-Net) de esta capa. LTC puede estar activo en cada capa; MTC y ART, en una sola capa a la vez (activar uno lo desactiva en las demás capas). El dispositivo LTC y el puerto MTC se eligen en **Salida SMPTE Timecode** de [Ajustes](#15-ajustes); la red Art-Net, en la parte superior de la página [OUTPUT](#13-output). El código de tiempo Art-Net usa la **Tasa de Fotogramas** de SMPTE.
5. **Deck fuente** — el deck que sigue esta capa. Igual que los botones A, B de la tarjeta.
6. **Código de tiempo** — la posición de la fuente más el offset. A la salida real se suma la **Compensación de latencia** de los ajustes.
7. **− / +** — cambia cada campo en 1; con Ctrl (Cmd en Mac), en 10. Si STEP de MASTER es TIME, cambia el tiempo de FREEWHEEL; si no, el offset.
8. **SET** — indica que el offset del set list está cargado en esta capa. Pase el ratón para ver la pista. Con el offset UNLISTED, por no estar la pista en la lista, se lee SET —.
9. **OFFSET ON** — incluye el offset en la salida o lo excluye. El valor se conserva.
10. **Restablecer** — pone el offset a 0.
11. **MASTER** — la capa MASTER.
12. **Botones FREEWHEEL** — ▶ hace correr el código FREEWHEEL, ❚❚ lo pausa conservando el valor, |◀ vuelve a 00:00:00:00. READY (◉) mantiene FREEWHEEL en el valor actual y lo arranca cuando un deck empieza a reproducir. Con mezclador, solo cuentan los decks en el aire en ese instante; los que ya reproducían y las escuchas con CUE no.
13. **Fuente** — A y B envían el código de esa capa más el offset de MASTER. CLOCK usa la hora del ordenador; FREEWHEEL corre por su cuenta desde el último valor de MASTER.
14. **STEP** — con la fuente MASTER en FREEWHEEL, si − / + cambia el offset (OFS) o el tiempo FREEWHEEL (TIME).

Con **Mantener LTC en pausa** activado en los ajustes (predeterminado), el LTC de un deck detenido sigue enviando el código de la posición detenida, el mismo cuadro repetido, para que el receptor sepa que se detuvo. Desactivado, el LTC calla mientras el deck está detenido.

---

## 8. MIXER

![MIXER](images/10-mixer.png)

Muestra el estado que envía el DJM. ORVIK no cambia los ajustes del mezclador. El número de canales y algunos elementos dependen del modelo.

1. **Conexión DJM** — si el DJM está visible.
2. **DATA, METER** — DATA: llegan valores de control (faders, EQ); METER: llegan valores de los indicadores de nivel.
3. **HEADPHONES** — sección de auriculares. [8.1](#81-auriculares-y-efectos)
4. **SOUND COLOR FX** — sección de sound color FX. [8.1](#81-auriculares-y-efectos)
5. **BEAT FX** — sección de beat FX. [8.1](#81-auriculares-y-efectos)
6. **Canales** — una sección igual por canal. [8.2](#82-canales)
7. **Crossfader** — posición del crossfader y curvas CH FADER y CROSSFADER.
8. **MASTER** — sección master. [8.3](#83-master)

<table>
<tr>
<td align="center"><img src="images/11-mixer-fx.png" alt="Auriculares y efectos" width="280"><br>8.1 Auriculares y efectos</td>
<td align="center"><img src="images/12-mixer-ch.png" alt="Canal" width="220"><br>8.2 Canales</td>
<td align="center"><img src="images/13-mixer-master.png" alt="MASTER" width="208"><br>8.3 MASTER</td>
</tr>
</table>

### 8.1 Auriculares y efectos

1. **LEVEL, MIX** — posición del LEVEL de auriculares y balance CUE/master (MIX).
2. **CUE** — encendido cuando el master se escucha en los auriculares.
3. **Plegar** — pulse el nombre de la sección para plegarla o desplegarla.
4. **PARAMETER** — posición del PARAMETER de SOUND COLOR FX.
5. **Efecto SOUND COLOR FX** — el efecto elegido; OFF si ninguno.
6. **Efecto BEAT FX** — el efecto elegido.
7. **CH SELECT** — canal al que se aplica BEAT FX.
8. **FX FREQUENCY** — banda (LOW, MID, HI) a la que se aplica BEAT FX.
9. **LEVEL/DEPTH** — posición del LEVEL/DEPTH de BEAT FX.
10. **ON** — encendido cuando BEAT FX está activo.

En DJM con dos salidas de auriculares se muestran también LEVEL, MIX y LINK CUE de los auriculares B. LINK CUE se enciende al escuchar el LINK MONITOR de rekordbox.

En DJM con sección FILTER se muestran el filtro elegido (LPF, HPF) y la posición de RESONANCE.

### 8.2 Canales

1. **ON AIR** — encendido cuando este canal está en el aire.
2. **CUE, A, B** — estado CUE de auriculares del canal. Con dos auriculares, A y B aparecen por separado.
3. **TRIM** — posición de TRIM.
4. **EQ** — posiciones de HI, HI MID, LOW MID y LOW. El número de bandas depende del modelo.
5. **COLOR** — posición de SOUND COLOR FX.
6. **Indicador de nivel** — nivel del canal. CLIP arriba se enciende si la entrada satura.
7. **Fader de canal** — posición del fader.
8. **Asignación de crossfader** — A, THRU o B para este canal.

### 8.3 MASTER

1. **Indicador master** — nivel master L, R. CLIP se enciende si la salida satura.
2. **LEVEL** — posición de MASTER LEVEL.
3. **BALANCE** — posición de MASTER BALANCE. C es el centro.
4. **CUE** — encendido cuando el master se escucha en los auriculares.
5. **BPM** — BPM de un CDJ en reproducción. Con varios, el del deck de número más bajo.
6. **EQ, ISO** — estado del EQ master. Cambia a ISO con MASTER ISOLATOR activo.
7. **BOOTH LEVEL** — posición de BOOTH LEVEL.

---

## 9. HISTORY

![HISTORY](images/14-history.png)

Registra las pistas que salieron al aire con la hora real y el número de deck. Con mezclador se cuenta el tiempo en reproducción y en el aire; sin él, el tiempo en reproducción. Una pista se registra tras 10 s. Si la reproducción o el aire se interrumpe más de 3 s y vuelve, la misma pista ocupa una línea nueva; en menos de 3 s continúa la misma. Los decks virtuales se registran al cargar la pista y se cuenta el tiempo reproducido. La pista en el aire muestra LIVE en END.

El registro empieza de cero en cada arranque. Se guarda automáticamente y, tras un cierre anómalo, ORVIK pregunta en el siguiente arranque si continuarlo.

1. **Hora de inicio** — fecha y hora en que empezó este registro.
2. **Número de pistas** — pistas registradas.
3. **IMPORT** — carga un archivo de historial (CSV de ORVIK, CSV o TXT de historial ShowKontrol) en el registro actual. Las entradas se añaden tal cual.
4. **EXPORT** — guarda en el formato elegido: CSV de ORVIK (recargable en ORVIK), historial ShowKontrol, set list ShowKontrol o TXT de lista de pistas.
5. **⋯** — **Historial de autoguardado…** recupera una copia anterior del registro ([autoguardado](#historial-de-autoguardado)); **Vaciar todo el historial…** lo borra tras preguntar.
6. **EVENT** — nombre del evento. Va en los nombres de archivo exportados (CSV, set list, lista de pistas) y en el cuerpo del TXT.
7. **DJ** — nombre del DJ. Va en el cuerpo del TXT.
8. **Buscar** — busca por título o artista.
9. **Cabecera de la tabla** — arrastre un borde para cambiar el ancho; doble clic para restablecer. Columnas:
   - **DECK** — número de reproductor y modelo.
   - **START, END** — cuándo salió al aire y cuándo dejó de estarlo.
   - **IN, OUT** — posiciones de reproducción al entrar y salir del aire.
   - **ON AIR** — tiempo en el aire.
10. **Totales** — pistas reproducidas, tiempo ON AIR total, BPM medio y pistas por deck.

El botón del extremo derecho de una fila añade la pista al set list; se vuelve naranja con una marca cuando la pista ya está en la lista (pulsarlo de nuevo la añade otra vez). Al pasar el ratón por una fila aparece a su lado una × que borra la fila. Ambos actúan con el clic izquierdo. Borrar la pista en el aire deja de registrarla mientras siga sonando. En una pantalla táctil, arrastre la lista con el dedo para desplazarla.

### Historial de autoguardado

ORVIK guarda copias del historial, del set list, de los cues y de los nodos de OUTPUT: una 5 minutos después de un cambio, una antes de vaciar, importar o cargar un archivo, y una al cerrar ORVIK. **⋯ > Historial de autoguardado…** en cada página las enumera, de la más reciente a la más antigua, con la hora, el motivo y lo que contienen (pistas, cues, filas, nodos). **Restaurar** recupera la copia elegida; antes se copia el estado actual, así que puede volver a él. **Abrir carpeta** muestra las copias en el gestor de archivos.

---

## 10. SET LIST

![SET LIST](images/15-setlist.png)

Una lista con un offset de código de tiempo y cues para cada pista. Con APPLY TO SMPTE activado, al cargar una pista de la lista en un deck, su offset entra en la capa SMPTE (A, B) a la que está conectado ese deck. Como el historial, el set list se vacía en cada arranque; se guarda automáticamente y conserva [copias de autoguardado](#historial-de-autoguardado).

1. **Número de pistas** — pistas en la lista.
2. **APPLY TO SMPTE** — activado: el offset de una pista de la lista cargada en un deck entra en la capa de ese deck; un deck en reproducción cambia al momento. Desactivado: los offsets de capa conservan sus valores.
3. **Deshacer, rehacer** — deshace y rehace los cambios de la lista: Ctrl+Z (Cmd+Z en Mac), y Ctrl+Mayús+Z o Ctrl+Y (Cmd+Mayús+Z en Mac).
4. **IMPORT** — carga un set list: archivo de ORVIK (.json), set list ShowKontrol (.set) o historial (.csv), lista de texto exportada de rekordbox (.txt) o archivos de audio. Con una lista existente pregunta si reemplazarla (REPLACE) o añadir a ella (ADD), y pide elegir columnas si no reconoce los nombres de columna de un archivo de texto. Los archivos de ORVIK incluyen los cues.
5. **EXPORT** — guarda un set list de ORVIK (con el offset fuera de lista y los cues) o un set list ShowKontrol (.set: título, artista, offset, duración).
6. **⋯** — **Borrar marcas de reproducidas**; **Historial de autoguardado…** recupera una copia anterior de la lista; **Vaciar toda la lista…** quita todas las pistas tras preguntar (Deshacer las recupera). Los cues de las pistas se borran con ellas.
7. **Añadir pistas** — **Escribir** añade una pista que usted escribe: título, artista y luego offset; Intro pasa al campo siguiente. **Desde deck** con un número de deck añade la pista cargada en ese deck.
8. **Fuera de lista** — offset para las pistas que no están en la lista. El botón contiguo lo pone a 00:00:00:00. Elija un rango sin cues, por ejemplo 23:00:00:00.
9. **Autorrellenar** — escriba una hora de inicio y pulse **FILL** para dar a cada pista un offset en el orden de la lista, con una hora de diferencia. Cada offset sigue siendo editable.
10. **Buscar** — busca por título o artista.
11. **OFFSET** — offset de esta pista. Pulse para editar (HH:MM:SS:FF, menos de 24 horas); el botón contiguo lo pone a 00:00:00:00.
12. **CUE** — número de cues de la pista, o **Editar** si no tiene ninguno. Púlselo, o haga doble clic en la pista, para abrir el editor de cues bajo la lista. [10.1](#101-edición-de-cues)
13. **STATUS** — ▶ y el número de deck mientras la pista está en un deck, y luego la capa (A, B) que recibió su offset; un guion si ese deck no alimenta ninguna capa. Cuando la pista se ha reproducido y ha salido al aire con APPLY TO SMPTE activado, aparece una marca y la fila se atenúa. Sin mezclador solo cuenta la reproducción. Si la misma pista aparece varias veces, se usa el offset de una línea sin marca; si aparece una vez, se reutiliza su offset.
14. **Pista en un deck** — las filas de pistas cargadas en un deck se marcan con una barra a la izquierda.

Pulse un título, artista u offset para editarlo. Arrastre una fila por su asa para cambiar el orden; la papelera del extremo derecho de la fila quita la pista. Arrastre un borde de la cabecera para cambiar el ancho; doble clic para restablecer. En una pantalla táctil, arrastre la lista con el dedo para desplazarla.

### 10.1 Edición de cues

El editor de cues se abre bajo la lista en la página SET LIST, con la lista de cues de la pista junto a la ventana. Al elegir una pista se muestran su onda y sus cues.

<table>
<tr>
<td width="72%"><img src="images/15b-cue-editor.png" alt="Editor de cues"><br>El editor de cues: + CUE (C), IMPORTAR HOT CUES, ajuste, zoom, vista previa, SALIDA DE CUES, la pista completa y la parte ampliada.</td>
<td width="28%"><img src="images/15c-cue-list.png" alt="Lista de cues"><br>La lista de cues: tiempo, compás.beat, cue y grupo.</td>
</tr>
</table>

- **Forma de onda** — la pista completa y una parte ampliada, con la rejilla de beats, los números de compás, las bandas de frase y las marcas de cue. La onda procede del archivo de audio, del registro de HISTORY o de la recibida del CDJ, la que exista. Las ondas del CDJ requieren la biblioteca de pistas activada (el editor ofrece activarla). Sin onda, los cues se colocan solo por tiempo.
- **Mover la posición** — pulse la onda para mover la posición de edición. **Ajuste** (no, beat, compás, cuadro) la alinea a la rejilla. **Zoom** cambia el rango ampliado.
- **+ Cue (C)** — crea un cue en la posición de edición. Con archivo de audio, se previsualiza ese punto.
- **Importar hot cues** — trae los hot cues y puntos de memoria de rekordbox como posiciones de cue.
- **Lista de cues** — tiempo, compás.beat, nombre, grupo y resumen de acciones.
- **Ajustes del cue** — nombre, tiempo, compás.beat, grupo, aviso (predeterminado o un número de beats), voz (seguir al grupo, sí, no), qué decir (vacío: el nombre del cue) y lista de acciones.
- **Lista de acciones** — se ejecuta en orden desde arriba: OSC (destino, dirección, tipo i/f/s, valor), Art-Net DMX (universo, varios canal=valor), MIDI (dispositivo, canal, Note on/off, CC, Program) y espera (ms, o beats y compases). La lista de destinos es la misma que en OUTPUT.
- **Grupo** — el grupo de equipo del cue. Los grupos predeterminados son Luces, Vídeo, SFX y Láser; **Editar grupos…** en el menú de grupo los renombra, recolorea o añade. Los grupos rigen la ventana de cue call y las salidas de voz.
- **Salida de cues** — el interruptor sobre el editor activa y desactiva el envío de acciones.

Los cues reaccionan solo a la pista que suena en el deck maestro. Si esa pista no está en el set list, no se envía ningún cue. El beat del cue se calcula con la rejilla de beats y la posición de reproducción. Los cues pertenecen a la entrada del set list, así que la misma pista tiene cues distintos en cada set list.

---

## 11. CUE CALL

El cue call muestra por grupo de equipo los cues del set list de la pista de un deck y cuenta atrás hasta el siguiente cue de cada grupo. Pulse CUE CALL en la cabecera: se abre un cue call acoplado a la derecha de la ventana principal. Pulse CUE CALL de nuevo para cerrar todos los cue call. Alt+clic (Opción+clic en Mac) abre otro en su propia ventana, por ejemplo uno para luces y otro para SFX. Cada uno conserva su posición, tamaño y ajustes de visualización, y los que estén abiertos al cerrar ORVIK vuelven en el siguiente arranque.

### Abrir y acoplar

- **Acoplar** — el botón a la izquierda del altavoz en la cabecera del cue call acopla la vista a la derecha de la ventana principal o la vuelve a abrir en su propia ventana. Un doble clic en la cabecera hace lo mismo.
- **Arrastrar** — arrastre la cabecera (o la barra de título de la ventana) para mover una ventana de cue call. Si la suelta en el borde derecho de la ventana principal, se acopla ahí. Hasta dos paneles comparten el lado derecho, uno encima del otro; arrastre el divisor para cambiar su ancho.
- **Menú Ventana** — en macOS cada ventana de cue call aparece en el menú Ventana y en el menú del Dock. Ventana > Cerrar (⌘W) cierra la ventana de cue call que está delante.

El título de la ventana indica los grupos que muestra: "Avisos de cue (Todo)" o los nombres de los grupos.

### Qué deck sigue

**Deck a seguir** en la ventana de la rueda elige el deck para todas las ventanas de cue call y para las llamadas habladas:

- **Máster SMPTE** — el deck detrás de la capa MASTER de SMPTE OUT: MASTER ← A o B y luego el deck de esa capa (predeterminado). Mientras MASTER funciona con CLOCK o FREEWHEEL, el maestro de tempo CDJ.
- **Máster de tempo** — el maestro CDJ.
- **Deck en ON AIR (auto)** — el deck que está saliendo al aire, elegido por la reproducción, el fader y el tiempo restante, como la disposición FLOW elige su deck principal. Puede cambiar antes de que el DJ pulse MASTER.

Sin un deck así, la vista dice "Sin deck máster"; si su pista no está en el set list, "No está en el set list"; si la pista no tiene cues, "Esta pista no tiene cues."

### Cabecera

- **Código de tiempo** — el código de tiempo de MASTER de SMPTE OUT.
- **Casillas de beat** — cuatro casillas; se enciende el beat del compás que suena, el primero en naranja.
- **BPM** — el BPM del deck seguido.
- **Título, artista** — la pista seguida, cuando la barra de capas o los carriles no la muestran ya.
- **Tablero, Capas** — cambia el tema. En una ventana de menos de 600 px está en la ventana de la rueda.
- **Acoplar, altavoz, rueda** — acoplar o separar, llamadas habladas sí o no, la ventana de ajustes.

### Temas

- **Tablero** — la barra de capas de arriba muestra las capas A y B con su número de deck, título y tiempo de reproducción; M marca la capa que sigue MASTER, y el deck de la otra capa lleva la etiqueta Siguiente pista. Debajo hay una tarjeta por grupo: el nombre del grupo, el nombre del siguiente cue, una cuenta atrás grande, compases.beats y una barra de progreso, con los cues siguientes del grupo abajo a la derecha. Al acercarse el cue, la tarjeta se llena del color del grupo; en el cue muestra GO. Un grupo sin cues en la pista actual recibe una tarjeta corta, y los grupos con cues se reparten el espacio. La franja inferior muestra la siguiente pista (el deck de la otra capa) y sus primeros cues, con los tiempos contados desde su posición.
- **Capas** — tres carriles y una lista de cuenta atrás. El carril MASTER muestra la onda del deck seguido avanzando hacia la izquierda, con las marcas y nombres de cue de los grupos visibles; la línea NOW está al 20 % del ancho y un cue se alcanza cuando toca NOW. Los carriles A y B muestran el deck de cada capa SMPTE; el deck de la otra capa es la siguiente pista, con sus cues. El loop de un deck se ve en su carril como en la onda de detalle, más pálido mientras el loop está fijado pero inactivo. La rejilla de beats sigue **Beatgrid: Detalle** en [Ajustes](#15-ajustes). La lista de abajo tiene una fila por cue próximo: su capa, nombre, tiempo restante, compases.beats y una barra que se acorta durante el último minuto.

En el tema capas, − y + abajo a la derecha del carril MASTER muestran más o menos pista, y RST vuelve al rango automático. La rueda del ratón o un gesto de pellizco sobre un carril también hacen zoom.


<table>
<tr>
<td width="50%"><img src="images/20-cuecall-board.png" alt="Tablero"><br><b>Tablero</b>, una tarjeta por grupo con la cuenta atrás hasta su siguiente cue.</td>
<td width="50%"><img src="images/21-cuecall-layers.png" alt="Capas"><br><b>Capas</b>, los carriles MASTER, A y B sobre la lista de cuenta atrás.</td>
</tr>
</table>

### Tiempo restante

Segundos y beats se muestran juntos. Por debajo de 10 s los segundos llevan décimas (`4.3 s`); desde 10 s son minutos:segundos (`0:24`). Los compases.beats cuentan hacia atrás como en el CDJ: `2.3 bar` significa que quedan 2 compases y 3 beats, y el beat dentro del compás va 4 3 2 1.

En la cuenta atrás grande (los últimos 5, 10, 15 o 30 s, elegidos en la ventana de la rueda), las cuatro casillas de beat sustituyen a compases.beats. Los últimos beats cuentan 3 2 1 (o desde 5 o 10) y luego GO; cada número enciende un momento su tarjeta o su fila. Un cue largo en curso muestra su nombre y el tiempo hasta su final.

### Ventana de ajustes (la rueda)

| Sección | Elementos |
| --- | --- |
| Pantalla | pantalla (Tablero, Capas), cuenta atrás grande desde (5, 10, 15, 30 s), mostrar compases.tiempos y casillas de tiempo, contar tiempos desde (3, 5, 10), grupos visibles, color de la forma de onda de los carriles (Pista (CDJ), Gris, Apagado), deck a seguir (Máster SMPTE, Máster de tempo, Deck en ON AIR (auto)) |
| Vista web | la dirección para teléfonos y tabletas, **Copiar dirección**, **Abrir en el navegador**. El visor web debe estar activado en los ajustes. |
| Avisos de voz | decir (Nombre+cuenta, Solo nombre, Solo cuenta), aviso (8 pulsos, 4 pulsos), cuenta (3 pulsos, No), última palabra (GO, No), voz, salida (dispositivo, canal, nivel, probar), clic (No, En la cuenta, Siempre) y volumen del clic, un altavoz por grupo |

Los ajustes de pantalla pertenecen a cada ventana; el deck a seguir y los avisos de voz son los mismos en todas las ventanas. Los niveles llegan hasta el 200 %.

### Llamadas habladas

El altavoz de la cabecera del cue call activa y desactiva las llamadas habladas. Las frases se generan de antemano con las voces del sistema (macOS, Windows) y se reproducen al beat durante el show. Las llamadas siguen al deck elegido en **Deck a seguir**.

- 8 (o 4) beats antes del cue: "grupo, nombre del cue, preparados"; en los tres últimos beats "tres, dos, uno"; en el cue "ya". **Decir**, **Cuenta** y **Última palabra** omiten partes.
- La lista de **voz** muestra solo voces de los idiomas que la aplicación puede hablar (coreano, inglés, japonés, español, alemán, francés, chino), agrupadas por idioma. La primera entrada, "Voz del sistema en …", es la voz predeterminada del idioma de la interfaz. Elegir una voz de otro idioma cambia las llamadas a ese idioma (una voz inglesa dice "Lighting, standby", "three, two, one, go"). Los nombres de grupo escritos en el set list se leen tal cual.
- Sin voz para el idioma, las llamadas son en inglés y la primera entrada lo indica. Las voces se añaden en los ajustes de voz del sistema operativo.
- La **salida** es un único dispositivo y canal para todas las llamadas. Puede ser otro canal del dispositivo que usa LTC, pero no el canal de LTC; esos canales llevan la marca "en uso por LTC" y no se pueden elegir.
- **Clic** suena en cada beat durante la cuenta o siempre; el primer beat de cada 4 suena más agudo.
- El altavoz junto a un nombre de grupo silencia ese grupo. Un grupo se anuncia mientras un cue call abierto lo muestra; sin ningún cue call abierto, se anuncian todos.

### Página web

Con el visor web activado en los ajustes, los teléfonos, tabletas y otros ordenadores de la misma red abren `http://<este ordenador>:<puerto>/cuecall`. Pide primero el código de acceso (el mismo del visor web) y lo recuerda 12 horas; **Abrir en el navegador** en este ordenador omite el código. La rueda de la página elige el tema tablero o capas, los grupos, la cuenta atrás grande, la cuenta de beats y compases.beats, y esto se guarda en ese navegador. Si el navegador lo permite, **Mantener la pantalla encendida** impide que la pantalla entre en reposo. Hay una disposición para teléfono en vertical. Si ORVIK deja de responder durante 3 s, la página se atenúa y muestra Sin conexión, y las cuentas atrás se detienen hasta que vuelva a responder.

---

## 12. NETWORK

![NETWORK](images/16-network.png)

1. **Estado de PRO DJ LINK** — si ORVIK está listo para recibir PRO DJ LINK. Que haya CDJ visibles se ve en la lista de equipos.
2. **Lista de equipos** — número, tipo, modelo e IP de cada CDJ y DJM visto.
3. **Estado de TCNet** — si el interruptor TCNET está activado y el nombre de nodo de ORVIK.
4. **Lista de nodos** — ORVIK y los nodos TCNet vistos en los últimos 10 s.
5. **TYPE** — el rol del nodo: SERVER envía, CLIENT recibe; también REPEATER y AUTO. Con TCNet activado y ningún CLIENT, aparece una nota bajo la lista.

### 12.1 Avisos de configuración

![Aviso de configuración](images/16b-network-warning.png)

Con PRO DJ LINK activado, ORVIK comprueba cómo está conectado este ordenador. Cuando algo de la configuración impide que los reproductores y el mezclador lleguen a él, aparece un aviso arriba en NETWORK con la causa y qué hacer; la barra de estado lo muestra como LINK y la descripción emergente del interruptor PRO DJ LINK lo nombra. El rojo significa que nada en el enlace puede funcionar; el ámbar es un consejo. Los avisos empiezan 10 s después de iniciar PRO DJ LINK y solo aconsejan: ORVIK no cambia ningún ajuste de red.

| Aviso | Cuándo | Qué hacer |
| --- | --- | --- |
| Otro programa está usando los puertos PRO DJ LINK | otro programa ocupa los puertos PRO DJ LINK (50000–50002); se nombra cuando ORVIK puede saberlo | Ciérrelo y luego apague y encienda PRO DJ LINK. Causas habituales: rekordbox, otro ORVIK, AnyDesk, Microsoft Teams durante una llamada, herramientas PRO DJ LINK como Beat Link Trigger. |
| Equipos en otra red | los reproductores o el mezclador envían por este cable, pero sus direcciones están fuera de la red de este adaptador (por ejemplo, equipos con direcciones autoasignadas 169.254.x.x y un adaptador con una dirección del router) | Configure el adaptador para obtener la dirección automáticamente (DHCP) o dele una dirección del rango de los equipos, o conecte todo al mismo router. |
| No se detecta ningún equipo PRO DJ LINK | no ha llegado nada al adaptador elegido (en Windows con detección automática, a ningún adaptador), o el enlace lleva 15 s en silencio | Compruebe que los reproductores y el mezclador están encendidos, el cable y el switch, y el rango de direcciones. macOS: permita ORVIK en Ajustes del Sistema > Privacidad y seguridad > Red local. Windows: un adaptador sin router cuenta como red pública; permita ORVIK también en redes públicas. Se enumeran los demás adaptadores activos, para que pueda elegir el correcto en los ajustes. |
| Dos adaptadores en la misma red | dos adaptadores de este ordenador están en la misma red, así que los datos de pistas y las peticiones de forma de onda pueden salir por el equivocado | Apague o desconecte el otro adaptador, o páselo a otra red. |

---

## 13. OUTPUT

Envía valores de decks y mezclador a otros programas y equipos como OSC, DMX (Art-Net, sACN) y MIDI. Es un editor de nodos que une la antigua página OSC y el parche DMX de ART-NET. Las filas OSC y parches DMX de 1.6 se convierten en nodos en el primer arranque y envían los mismos valores.

![OUTPUT](images/17-output.png)

### Parte superior

- **Deshacer, rehacer** — deshace y rehace los cambios de la página: Ctrl+Z (Cmd+Z en Mac), y Ctrl+Mayús+Z o Ctrl+Y (Cmd+Mayús+Z en Mac).
- **IMPORT, EXPORT** — EXPORT guarda toda la página (nodos, salidas DMX, filas OSC, ajustes de red) en un archivo; IMPORT carga uno, y un solo deshacer lo revierte. Si un archivo fuera a activar envíos, ORVIK enumera adónde enviaría y pregunta antes.
- **⋯** — **Historial de autoguardado…** recupera una copia anterior de los nodos. [Autoguardado](#historial-de-autoguardado)
- **OSC** — muestra adónde va OSC (dirección:puerto) o que está apagado. Púlselo para configurar la salida OSC: activada o no, **Este equipo**, **Difusión** o **Dirección IP**, la IP y el puerto (7000 por defecto). **Otros destinos OSC (acciones de cue)** guarda direcciones con nombre para las acciones OSC del editor de cues; + añade una, × la quita.
- **Red Art-Net** — muestra la interfaz y la frecuencia DMX, o que está apagada. Púlsela para lo que comparten todas las salidas DMX: **Art-Net activado (timecode y DMX)**, la interfaz DMX (puede seguir a la interfaz de timecode), el puerto DMX (6454), la frecuencia DMX (10–60 Hz, 40 por defecto), la dirección de difusión en uso, ArtSync y ArtPollReply. El puerto de salida OSC no puede usarse para Art-Net.
- **Timecode Art-Net** — muestra la frecuencia de cuadros, o que está apagado. Púlselo para **Enviar timecode**, la capa que envía con el código de tiempo que sale ahora, la interfaz de timecode, el destino (difusión o una dirección IP) y el puerto de timecode. Requiere Art-Net activado en **Red Art-Net**. La frecuencia de cuadros es **Tasa de Fotogramas** en Salida SMPTE Timecode de [Ajustes](#15-ajustes); cada capa se activa con el botón ART en SMPTE OUT.
- **MIDI** — la salida MIDI de los nodos MIDI CC y MIDI Note. Púlselo para elegir un dispositivo. Es el mismo puerto que **Puerto de salida MIDI** en Salida MIDI Clock de los ajustes.
- **SCAN** — busca equipos Art-Net (ArtPoll), programas OSC (mDNS) y salidas MIDI, y los enumera. + junto a un equipo Art-Net añade su IP a los receptores de la primera salida DMX; + junto a un programa OSC lo añade a los otros destinos OSC.

### Lista izquierda

Pulsar un elemento crea su nodo en el lienzo. Pase el ratón por la lista para ver una breve explicación.

| Grupo | Nodos |
| --- | --- |
| Destinos | OSC, salida DMX, MIDI CC, MIDI Note |
| Valores: Mezclador canal 1-6 | Fader, VU, Hi, Mid, LoMid, Low, Color, OnAir |
| Valores: Mezclador general / efectos | Xf, MVU, MVUL, MVUR, BeatFX, BeatFXOn, BeatFXName, BeatFXCh, ColorFXName |
| Valores: Deck tempo | BPM, BPMCoarse, BPMFine, Beat, Downbeat, Phase, BarBeat, BarPhase |
| Valores: Deck tiempo / frase | Pos, Time, Length, Remain, Phrase, PhraseKind, PhrasePos, PhraseBeats |
| Valores: Deck estado / pista | Loop, Sync, Master, CDJPlay, CDJCue, Deck, Title, Artist, Key |
| Valores: Salida SMPTE | SMPTEA, SMPTEB, SMPTEM, Clock |
| Transformaciones | Rango, Forma (sin, tri, saw, sq), Invertir, Libre, Formato de tiempo |
| Matemáticas | Sumar, Restar, Multiplicar, Dividir, Mínimo, Máximo |
| Especiales | Limitar, Umbral, Suavizar, Salto de línea |
| Entrada | Entero, Decimal, Texto |

### Lienzo y ajustes de la derecha

Arrastre desde el punto de salida de un nodo hasta el punto de entrada de otro para conectarlos; un cable soltado sobre un nodo va a su entrada más cercana. El valor que fluye se ve sobre el cable. Un valor puede ir a varios destinos. Un nodo de transformación u operación sin cables, soltado sobre un cable, se inserta en él. Los valores de texto (título, artista, tonalidad) solo pueden ir a OSC; un cable desde uno de ellos a DMX o MIDI se rechaza y se muestra el motivo.

- **Seleccionar** — pulse un nodo; arrastre sobre el lienzo vacío para elegir varios; Mayús+clic o Ctrl+clic (Cmd+clic en Mac) añade o quita uno. Supr elimina los nodos seleccionados.
- **Menú contextual** — Cortar, Copiar, Pegar, Duplicar, Eliminar, Quitar cables, Seleccionar todo, Agrupar, Desagrupar. Ctrl+G (Cmd+G en Mac) agrupa los nodos elegidos; con Mayús, los desagrupa. Arrastre un grupo por su banda de nombre; haga doble clic en la banda para renombrarlo.
- **Mover** — los nodos se ajustan a los bordes y centros de otros nodos; mantenga Alt para colocarlos libremente. Mantenga Espacio y arrastre para mover la vista. En una pantalla táctil, arrastre el lienzo vacío con el dedo para mover la vista; mantenga el dedo quieto un momento y luego arrastre para elegir nodos.
- **Problemas** — un nodo que no puede enviar dice por qué: sin conectar, no se puede enviar así, canal usado dos veces, por encima del límite, bucle en los cables o universo usado por otra salida DMX.

Al seleccionar un nodo, sus ajustes aparecen a la derecha.

- **Nodos de valor** — el valor y el deck: deck maestro o deck 1–6. Beat y Phase pueden ir 1, 2, 4, 8 o 16 veces por beat; Downbeat, BarBeat y BarPhase, varias veces por compás (con una forma).
- **OSC** — dirección y tipo. Los valores de texto se envían como string; los números, como float o int; los números que también tienen forma de texto (Time, Length, BPM, etc.), como float, int o string. Se envía solo al cambiar, a 60 Hz como máximo. Se añade la `/` inicial si falta; no se admiten espacios ni `# * , ? [ ] { }`.
- **Salida DMX** — **Enviar este universo** activa la salida. **Dirección Art-Net** es Net (0–127), Subnet (0–15) y Universe (0–15); cada salida DMX necesita su propio universo. **IP de los receptores** admite direcciones separadas por comas o espacios; si se deja vacío, la primera salida DMX envía a los equipos encontrados por ArtPoll y las demás a la dirección de difusión de la red Art-Net. La primera salida DMX también puede enviar por sACN (**Enviar también por sACN**); el universo, la prioridad y los demás ajustes de sACN están en **Salida sACN** de [Ajustes](#15-ajustes). Conecte un valor a **+ Canal** para darle el siguiente canal; pulse un número de canal en el nodo para cambiarlo. Los valores 0–1 se envían como 0–255.
- **MIDI CC, MIDI Note** — el canal MIDI (1–16) y el número de CC o de nota (0–127). Los valores 0–1 se envían como 0–127.
- **Rango** — convierte 0–1 en Desde–Hasta. Un Desde mayor que Hasta invierte el sentido. BPM trata 20–500 BPM como 0–1.
- **Forma** — convierte 0–1 en una onda sin, tri, saw o sq, con un interruptor Invertir; **Invertir** es 1 − valor.
- **Libre** — sobre un valor de beat (Beat, Downbeat, Phase, BarBeat, BarPhase), lo mantiene corriendo por su cuenta al tempo del deck entre los avisos de beat del CDJ y sin ellos.
- **Formato de tiempo** — elige los campos (hh, mm, ss, ff) de un valor de tiempo (Time, Length, Remain, SMPTE, Clock). Véase "Formato de tiempo".
- **Sumar, Restar, Multiplicar, Dividir, Mínimo, Máximo** — admiten tantas entradas como conecte; con una sola entrada se usa el **Segundo valor**. Faders y niveles cuentan de 0 a 1; BPM y conteos, como números. **Sumar** también une textos: "A" + "B" = "AB".
- **Limitar** — mantiene un valor entre **Mínimo** y **Máximo**. **Umbral** envía 1 desde su valor hacia arriba; si no, 0.
- **Suavizar** — ralentiza un valor. **Ataque (ms)** es lo rápido que sigue una subida, **Sostenido (ms)** cuánto mantiene el pico cuando la entrada baja, **Liberación (ms)** lo rápido que baja después. Un valor mayor es más lento; 0 sigue al instante. Un nodo Suavizar guardado antes de estos tres ajustes conserva su tiempo único para ambos sentidos.
- **Salto de línea** — une valores de texto en varias líneas (por ejemplo título / artista).
- **Entero, Decimal, Texto** — un valor que usted escribe. Un texto solo puede ir a OSC.

Los valores se calculan en el motor de salida, así que siguen enviándose mientras se muestra otra página.

### Nombres de valor y qué envían

Valores enviados sin rango.

| Grupo | Nombre | Valor |
| --- | --- | --- |
| Por canal del mezclador (1–6) | Fader, VU, Hi, Mid, LoMid, Low, Color | 0–1 |
| | OnAir | 1 en el aire, si no 0 |
| Mezclador completo | Xf, MVU, MVUL, MVUR, BeatFX | 0–1 |
| | BeatFXOn | 1 con beat FX en ON |
| | BeatFXName, BeatFXCh, ColorFXName | beat FX elegido, canal al que se aplica, nombre del colour FX (string) |
| Por deck y deck maestro | BPM | el BPM tal cual (como string, un decimal: `128.0`). BPMCoarse es la parte entera, BPMFine la fracción |
| | Pos | progreso 0–1 (como string `42%`) |
| | Beat, Downbeat | un 1 breve en cada beat, un 1 breve en el primer beat del compás |
| | Phase | posición dentro del beat 0–1 |
| | BarBeat | qué beat del compás, 1–4 |
| | BarPhase | posición dentro del compás 0–1 (un ciclo por cuatro beats) |
| | Phrase | nombre de frase de rekordbox (string, p. ej. `CHORUS`) |
| | PhraseKind | número de frase: Intro 1, Verse 2, Bridge 3, Chorus 4, Up 5, Down 6, Outro 7 (0 sin frase) |
| | PhrasePos, PhraseBeats | posición dentro de la frase 0–1, beats hasta la siguiente |
| | Loop, Sync | 1 en loop, 1 con sync activo |
| | Title, Artist, Key | título, artista y tonalidad (string) |
| | Time, Length, Remain | tiempo transcurrido, total y restante (string, `MM:SS`, restante como `-MM:SS`) |
| Solo por deck | CDJPlay, CDJCue | 1 en reproducción, 1 mientras se mantiene CUE |
| | Master | 1 si ese deck es el maestro CDJ |
| Solo deck maestro | Deck | número de reproductor del maestro 1–6 |
| SMPTE, reloj | SMPTEA, SMPTEB, SMPTEM | código de tiempo de las capas A, B, MASTER de SMPTE OUT tal como se ve en el dock (string, `HH:MM:SS:FF`, drop frame 29,97 `HH:MM:SS;FF`, con offset) |
| | Clock | hora del ordenador (string, `HH:MM:SS`) |

- El deck maestro es el del MASTER BPM de la cabecera. Sin maestro CDJ se usa un deck en reproducción, primero uno en el aire.
- El BPM enviado a la dirección de tempo de Resolume (`/composition/tempocontroller/tempo`) va como 0–1 (20–500 BPM), porque Resolume espera 0–1 ahí.
- Sin mezclador no se envían valores del mezclador, porque un 0 apagaría una capa ligada a un fader. Tampoco se envía el BPM de un deck sin BPM.
- Los valores de encendido/apagado (OnAir, BeatFXOn, Loop, Sync, CDJPlay, CDJCue, Master) y Deck también pueden enviarse como string (`ON`, `OFF`, `2`).

### Formato de tiempo

Un nodo de formato de tiempo sobre un valor de tiempo envía solo los campos elegidos.

| Letras | Campo |
| --- | --- |
| `hh`, `h` | horas |
| `mm`, `m` | minutos |
| `ss`, `s` | segundos |
| `ff`, `f` | cuadros (solo SMPTE) |

Dos letras envían el campo con cero a la izquierda en dos dígitos; una letra, tal cual. Varios campos se unen con `:` (p. ej. `mmss` → `05:08`, `hmmss` → `0:05:08`). Los tiempos de pista sin `h` siguen contando minutos más allá de 60. Remain con formato se envía sin el `-`. El código 29,97 drop frame lleva `;` antes de los cuadros.

---

## 14. SHORTCUT y MAP

Teclado, MIDI, OSC y DMX (Art-Net) pulsan los botones de ORVIK y cambian sus valores: los controles de SMPTE OUT de las capas A, B y MASTER, y PRO DJ LINK, TCNET y M.VOL de la cabecera. Solo se configura la recepción; el estado de encendido/apagado de un control asignado puede devolverse a un dispositivo MIDI.

![SHORTCUT](images/19-shortcut.png)

### Página SHORTCUT

Las entradas están a la izquierda. Cada una tiene su propio interruptor **Activado**.

| Sección | Contenido |
| --- | --- |
| Teclado | combinaciones de teclas, solo cuando la ventana de ORVIK está delante. Activado por defecto. |
| MIDI | cada dispositivo MIDI conectado, con **IN** (escucharlo) y **OUT** (devolverle el estado de los controles asignados, para los LED del controlador). Activado por defecto. |
| OSC | puerto de recepción OSC (7700 por defecto), dónde escuchar (todas las interfaces, solo este ordenador o una interfaz) y las IP autorizadas a enviar. Una lista vacía deja controlar ORVIK a cualquiera de la red: anote las IP en el recinto. Desactivado por defecto. |
| DMX (Art-Net) | control desde los canales de un universo Art-Net (Net / Subnet / Universe) enviado por una consola de iluminación. Usa las mismas IP autorizadas que OSC. Para compartirlo con Resolume en este ordenador, envíe en broadcast desde la consola. Desactivado por defecto. |

**Activar MAP** arriba a la derecha de la página va a DECKS y activa MAP.

La tabla enumera todas las acciones, agrupadas en LAYER A, LAYER B, MASTER y Cabecera; las filas Fuente y Pasos de offset se despliegan en sus acciones y muestran cuántas están asignadas. **Todo** muestra todas las acciones; **Solo asignados**, solo las asignadas.

- **Tecla, MIDI, DMX** — pulse una celda y luego una tecla, o envíe MIDI o DMX, para asignarla. Mientras tanto la celda muestra ESPERANDO.
- **Modo MIDI** — la etiqueta de una celda MIDI asignada; púlsela para cambiarla. Controles de encendido/apagado: **Toggle** cambia en cada pulsación, **Piano** está activo solo mientras se mantiene (también para botones con enclavamiento que envían 127/0). Valores: **Absolute** toma la posición del fader o la perilla, **Relative** es para encoders sin fin, 1 % por paso.
- **OUT** — los valores MIDI devueltos para apagado y encendido (0 y 127 por defecto). Un APC mini mk2 tiene además una paleta de colores y la elección entre brillo o parpadeo.
- **OSC** — la dirección OSC fija de la acción, por ejemplo `/orvik/smpte/a/ltc`. Púlsela para copiarla.
- **×** — quita las asignaciones de la fila.

En una ventana ancha, un panel a la derecha muestra **Entradas**, las últimas entradas recibidas y lo que hicieron, y, con OSC activado, las **Reglas OSC**: encendido/apagado toma 1 encendido, 0 apagado, sin valor alterna; los botones se pulsan sin valor o con un valor distinto de 0 (0 se ignora); los valores toman float 0–1 (también vale 0–100); las fuentes también aceptan un valor (`/orvik/smpte/a/src 3`).

### MAP

MAP en la barra lateral (o **Activar MAP** en la página SHORTCUT) entra en el modo de asignación; MAP de nuevo o Esc sale de él. Los controles asignables tienen un borde: discontinuo si están libres, continuo con chips (K tecla, M MIDI, D DMX) si están asignados. Pulse uno: la barra de arriba muestra su nombre y su dirección OSC (pulse para copiarla). Luego pulse una tecla, o envíe MIDI o DMX, para asignarlo. **Borrar** quita sus asignaciones, **Cancelar** deja de esperar. Las direcciones OSC son fijas, así que no necesitan asignación.

### Teclas que siempre funcionan

| Tecla | Acción |
| --- | --- |
| Ctrl+R (Cmd+R en Mac) | recarga la pantalla. La reproducción de los decks virtuales se detiene. |
| Ctrl+Z (Cmd+Z en Mac) | deshacer en SET LIST y OUTPUT, fuera de los campos de texto |
| Ctrl+Mayús+Z o Ctrl+Y (Cmd+Mayús+Z en Mac) | rehacer |
| Esc | sale de MAP |
| ⌘M (macOS) | Ventana > Minimizar |
| ⌘W (macOS) | Ventana > Cerrar: cierra una ventana de cue call; en la ventana principal cierra ORVIK, como el botón de cierre |

---

## 15. Ajustes

![Ajustes](images/18-settings.png)

SETTINGS en la barra lateral abre la ventana de ajustes; púlselo de nuevo para cerrar la ventana.

1. **Iconos de sección** — pulse para ir a esa sección.
2. **Secciones** — los ajustes se agrupan como sigue.
3. **Ajustes** — nombre a la izquierda, valor a la derecha. Pase el ratón por una fila para ver su descripción.

Cada vez que se abre la ventana se vuelven a leer las listas de dispositivos de audio, LTC y MIDI. Las listas de interfaces se vuelven a leer cada vez que se despliegan.

### Idioma

| Elemento | Descripción |
| --- | --- |
| Idioma | idioma de la interfaz. Idioma del sistema sigue al ordenador. English, 한국어, 日本語, Español, Deutsch, Français, 繁體中文. |

### Disposición de decks

| Elemento | Descripción |
| --- | --- |
| Tema de Diseño | disposición de la pantalla de decks: FLOW, STK, STRIP o ROW. [6.3](#63-disposiciones) |
| Esquema de color | Oscuro, o Claro (exterior) para lugares con mucha luz. |
| FPS de dibujo UI | veces por segundo que se redibuja la pantalla: 60, 30 o 15. Bajarlo usa menos CPU. Las frecuencias de envío son independientes. |
| Escala de UI | tamaño de toda la pantalla: 100%, 125% o 150%. |

### Forma de onda

| Elemento | Descripción |
| --- | --- |
| Color de la forma de onda | 3 BANDAS, RGB o MONO. Las pistas sin datos 3band se muestran como RGB. |
| Posición del Playhead | dónde se sitúa la línea de posición en la onda de detalle: Centro (Center) o Izquierda (Left 25%). |
| Beatgrid: Resumen | las marcas dibujadas en la onda general: Marcas de compás, Marcas de 1 min, Líneas verticales. |
| Beatgrid: Detalle | la rejilla dibujada en la onda de detalle: 1 compás, Cada beat, Sub-beats, Líneas verticales. Los carriles del cue call también la usan. |
| Visualización de frase | cómo se muestran las frases (INTRO, CHORUS, etc.) en la onda: Ninguno, Marca de margen (mínima), Nombres de phrase (INTRO/CHORUS/OUTRO) o Ciclo de color. |
| Estilo de Marcador Cue | forma de las marcas de cue: Chip (cuadrado), Flag (pentágono) o Stripe (banda). |

### PRO DJ LINK

| Elemento | Descripción |
| --- | --- |
| Interfaz PRO DJ LINK | interfaz de red donde están CDJ y DJM. Detección automática elige el lado donde se ven CDJ y muestra la dirección en uso. Cada interfaz aparece con su nombre y dirección; las 169.254.x.x llevan la marca CDJ link-local. Una interfaz elegida que falta sigue en la lista como "no disponible — funciona en automático" y mientras tanto el motor usa la detección automática. Cambiarla mientras los equipos envían pide confirmación, porque volver a enlazar interrumpe brevemente la salida; Cancelar conserva la anterior. |
| Estado | estado de conexión de esta interfaz. |
| Iniciar PRO DJ LINK automáticamente | conecta con los CDJ y DJM al abrir ORVIK. Activado por defecto. La descripción de la fila enumera los puertos: UDP 50000–50002 y dbserver TCP. Si otro programa los ocupa, NETWORK lo indica. [12.1](#121-avisos-de-configuración) |

### TCNet

| Elemento | Descripción |
| --- | --- |
| Nombre de nodo | nombre de este ordenador en TCNet. %% es un número automático; 8 caracteres como máximo. |
| Interfaz TCNet | interfaz de red por la que se envía TCNet. Cambiarla mientras se ven nodos TCNet pide confirmación. |
| Estado | estado de conexión de esta interfaz. |
| Tasa de Fotogramas | frecuencia de cuadros del código de tiempo enviado por TCNet: 24, 25, 29.97 o 30. |
| Modo TCNet | Auto espera si hay un servidor anterior, Servidor siempre envía, Cliente nunca envía. |
| Iniciar TCNet automáticamente | inicia la salida hacia Arena al abrir ORVIK. Activado por defecto. La descripción de la fila enumera los puertos: UDP 60000–60002. |

### Modo espejo

| Elemento | Descripción |
| --- | --- |
| Ofrecer servidor Mirror | permite que ORVIK en otro ordenador refleje este (TCP 8878). |
| Reflejar otro PC | se conecta automáticamente a un servidor espejo cuando este ordenador no tiene decks. Activado por defecto. |
| Servidor Mirror | el servidor que se refleja. Actualizar vuelve a buscar; el estado de la conexión aparece al lado. En el ordenador servidor, permita en el firewall las conexiones entrantes en TCP 8878. |

En espejo, MIRROR y la dirección del servidor sustituyen a los botones PRO DJ LINK y TCNET de la cabecera; CONNECTING aparece antes de conectar y al reconectar. Un ordenador en espejo no envía TCNet. Pulsar MIRROR abre los ajustes.

### Visor web

| Elemento | Descripción |
| --- | --- |
| Visor web | permite ver la pantalla de decks y la página de cue call desde navegadores de la misma red (solo lectura). |
| Puerto | puerto del visor web (8877 por defecto). |
| Interfaz | interfaz de red donde escucha el visor web. |
| Estado | Apagado, o En ejecución y el puerto. Activado, debajo aparecen un código QR, el código de acceso y las direcciones. |
| API REST | solicitudes GET de solo lectura en el servidor del visor web, con el mismo código de acceso y la misma sesión. La descripción de la fila enumera las rutas bajo `/api/v1/` (status, decks, layers, timecode, mixer, outputs; JSON). El visor web debe estar activado. |
| Estado de la API | la dirección de la API y el número de solicitudes, o por qué no responde. |

### Salida de audio

| Elemento | Descripción |
| --- | --- |
| Dispositivo de Salida | dispositivo de audio para los decks virtuales: Predeterminado del sistema o un dispositivo. |
| Canal de Salida | par de canales de salida para los decks virtuales (1/2, 3/4, etc.). |

### Salida SMPTE Timecode

| Elemento | Descripción |
| --- | --- |
| Tasa de Fotogramas | frecuencia de cuadros del código de tiempo LTC, MTC y Art-Net: 23.98, 24, 25, 29.97 o 30 fps. |
| Compensación de latencia | ms que se suman al código de tiempo (−5000 a 5000); positivo adelanta. Común a LTC, MTC y Art-Net, para compensar el retardo del receptor. |
| LTC: Layer A, LTC: Layer B, LTC: MASTER | dispositivo de audio (Ninguno o un dispositivo), canal y nivel del LTC de cada capa. El nivel va de −40 a 0 dBFS, −12 por defecto; doble clic en el mando para restablecerlo. Súbalo si el receptor no se engancha, bájelo si distorsiona. |
| Mantener LTC en pausa | cuando un deck se detiene, LTC sigue enviando su cuadro detenido: el receptor se detiene al instante, y un deck que vuelve a 0 muestra 00:00:00:00. Desactivado: sin LTC mientras está detenido. Activado por defecto. |
| MASTER sigue al deck máster | con MASTER en A o B, si el maestro CDJ pasa al deck de la otra capa, MASTER pasa también a esa capa. Activado por defecto. |
| Mantener el deck en ON AIR y pasar cuando calla | con un DJM, MASTER mantiene el deck en el aire (en reproducción con el fader arriba u ON AIR). Si se para (0,5 s) o se baja su fader (2 s), MASTER pasa al deck maestro CDJ si está en el aire; si no, al deck en el aire de la otra capa. Sin mezclador, MASTER sigue al botón MASTER; un deck MASTER detenido cede al deck que suena en la otra capa tras 0,5 s. Desactivado: solo el botón MASTER. Activado por defecto. |
| Elegir el deck en ON AIR (con tiempo restante) | MASTER elige el deck que está saliendo al aire según su fader, la reproducción y el tiempo restante (como la disposición FLOW elige su deck principal), mantenido 5 s. Puede cambiar antes de que el DJ pulse MASTER. Necesita un DJM en la red; sin él, MASTER sigue al botón MASTER. Desactivado por defecto. |
| Salida MTC MIDI | puerto MIDI para MTC. |

### Salida sACN

| Elemento | Descripción |
| --- | --- |
| Salida sACN | envía sACN (E1.31) con los canales de la primera salida DMX de la página OUTPUT. Es el mismo interruptor que **Enviar también por sACN** en ese nodo. |
| Transporte | Multicast o Unicast. |
| IP unicast | la dirección del receptor para Unicast. |
| Interfaz | interfaz de red por la que se envía sACN. |
| Universo | el universo sACN, 1–63999. |
| Prioridad | 0–200, 100 por defecto. |
| Nombre de origen | el nombre que muestran los receptores, ORVIK por defecto. |
| Estado | apagado, esperando, o el destino, el universo, la prioridad y los paquetes enviados. |

### Salida MIDI Clock

| Elemento | Descripción |
| --- | --- |
| Salida MIDI Clock | envía MIDI Clock (24 PPQN) con Start, Stop, Continue y Song Position Pointer. |
| Origen | el tempo que sigue: Deck máster, Layer A, Layer B, Capa MASTER o DECK 1–6. |
| Puerto de salida MIDI | el puerto MIDI para MIDI Clock, elegido aparte de la Salida MTC MIDI. Los nodos MIDI CC y MIDI Note de la página OUTPUT usan el mismo puerto. |
| Reloj en pausa | mantiene el reloj de tempo con el deck detenido. Activado por defecto. |
| Estado | el deck, el BPM, en marcha o parado y los relojes enviados, o lo que falta. |

### Biblioteca de pistas

| Elemento | Descripción |
| --- | --- |
| Biblioteca de pistas | para la edición de cues, guarda la forma de onda, la rejilla de beats, las frases y los puntos de cue de las pistas CDJ reproducidas, y las rutas de los archivos de audio. Activado por defecto; desactivado, no se escribe nada y el editor de cues no tiene ondas del CDJ. |

### Archivo de ajustes

| Elemento | Descripción |
| --- | --- |
| Copia de seguridad | **Guardar ajustes** escribe los ajustes en un archivo cifrado (.orvikcfg). **Cargar ajustes** carga uno tras preguntar y reinicia ORVIK. El archivo no contiene las posiciones de ventana, el historial ni el set list, y el historial y el set list de esta sesión se conservan. También se cargan los archivos de 1.6; sus filas OSC y parche DMX se convierten en nodos de OUTPUT. |
| Valores iniciales | **Restablecer de fábrica** devuelve todos los ajustes a su valor inicial y reinicia ORVIK, tras preguntar. El historial y el set list de esta sesión se conservan. |

### Info

| Elemento | Descripción |
| --- | --- |
| Versión | versión actual de ORVIK, marcada como Beta gratuita. |
| Buscar actualizaciones | activado, busca una versión nueva en GitHub al iniciar y cada 12 horas. **Buscar ahora** comprueba al momento; con una versión nueva, debajo aparecen su número y el botón **Página de descarga**. |
| Copyright | notas de copyright de ORVIK y JUCE, y el botón REPORT para consultas. |
| Código abierto | **Archivos de licencia** abre la carpeta de licencias incluida en la aplicación (en Windows se extrae a una carpeta temporal); **Licencias y código fuente** abre los avisos de código abierto en la página de GitHub de ORVIK. |

---

## 16. Marcas y licencias

ORVIK es una herramienta de compatibilidad independiente. No es el PRO DJ LINK Bridge oficial de AlphaTheta ni el ShowKontrol de TC Supply, y no implica afiliación, patrocinio, certificación ni aprobación de AlphaTheta, Pioneer DJ, TC Supply o Resolume.

AlphaTheta, Pioneer DJ, CDJ, DJM, PRO DJ LINK, rekordbox, TC Supply, TCNet, ShowKontrol, Resolume, SMPTE y otros nombres de productos, tecnologías y marcas se usan para describir la compatibilidad. Los derechos de cada marca pertenecen a su titular. Art-Net™ Designed by and Copyright Artistic Licence.

ORVIK usa el framework JUCE 9, los componentes de código abierto incluidos con él y las fuentes. La lista y los textos de licencia están en la sección **Info** de la ventana de ajustes (**Archivos de licencia**, **Licencias y código fuente**) y en THIRD_PARTY_NOTICES. Las condiciones de uso de la aplicación están en BINARY_LICENSE.

