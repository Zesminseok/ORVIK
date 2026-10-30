# Manuel d'utilisation ORVIK (2.0)

Ce manuel décrit les écrans d'ORVIK et leurs éléments. Les numéros des images correspondent à ceux des listes. La version 2.0 est une application native (C++ / JUCE) ; ce manuel décrit les écrans de la 2.0.

## Sommaire

1. [Avant de commencer](#1-avant-de-commencer)
2. [Organisation de l'écran](#2-organisation-de-lécran)
3. [En-tête](#3-en-tête)
4. [Barre latérale](#4-barre-latérale)
5. [Barre d'état](#5-barre-détat)
6. [DECKS](#6-decks)
7. [SMPTE OUT](#7-smpte-out)
8. [MIXER](#8-mixer)
9. [HISTORY](#9-history)
10. [SET LIST](#10-set-list)
11. [CUE CALL](#11-cue-call)
12. [NETWORK](#12-network)
13. [OUTPUT](#13-output)
14. [SHORTCUT et MAP](#14-shortcut-et-map)
15. [Réglages](#15-réglages)
16. [Marques et licences](#16-marques-et-licences)

---

## 1. Avant de commencer

### Ce qu'est ORVIK

ORVIK reçoit les informations de lecture des CDJ et DJM et les transmet aux logiciels de lumière et de vidéo : TCNet, timecode SMPTE (LTC, MTC, Art-Net), OSC, DMX (Art-Net, sACN) et MIDI. Il interroge seulement les appareils ; il ne les commande pas.

### Prérequis

| Élément | Détail |
| --- | --- |
| Système | macOS 13.3 ou plus récent (Apple Silicon), Windows 10, 11 (x64) |
| Matériel vérifié | CDJ-3000X, CDJ-3000, CDJ-2000NXS2, DJM-V10, DJM-900NXS2 |

Les informations disponibles dépendent de l'appareil, de son firmware et de la connexion.

### Installation et lancement

- **macOS** — ouvrez le DMG et glissez ORVIK dans le dossier Applications.
- **Windows** — lancez le `.exe` téléchargé tel quel. Il n'y a pas d'installateur. Le fichier n'est pas signé ; si SmartScreen avertit au premier lancement, choisissez « Informations complémentaires » puis « Exécuter quand même ».

Au lancement et à la fermeture, un écran d'accueil apparaît brièvement. À la fermeture, les connexions TCNet et PRO DJ LINK sont fermées en premier.

---

## 2. Organisation de l'écran

![Organisation de l'écran](images/01-overview.png)

1. **En-tête** — BPM master, interrupteurs PRO DJ LINK et TCNET, bouton CUE CALL, volume et boutons de fenêtre. [Chapitre 3](#3-en-tête)
2. **Barre latérale** — choisit la page. [Chapitre 4](#4-barre-latérale)
3. **Page** — l'écran choisi dans la barre latérale. L'image montre DECKS.
4. **Dock SMPTE OUT** — affiche et règle les sorties timecode. Cliquez pour déplier. [Chapitre 7](#7-smpte-out)
5. **Barre d'état** — état de l'émission et de l'application. [Chapitre 5](#5-barre-détat)

Avec une fenêtre CUE CALL ancrée, le panneau de cue call apparaît à droite de la page. [Chapitre 11](#11-cue-call)

---

## 3. En-tête

![En-tête](images/02-header.png)

1. **MASTER BPM** — le BPM du master CDJ. Si le master n'a pas de BPM, c'est celui d'un deck en lecture, d'abord un deck à l'antenne. La case de gauche est le numéro de lecteur du master.
2. **PRO DJ LINK** — active et désactive la connexion aux CDJ et DJM.
3. **TCNET** — active et désactive l'émission TCNet vers les logiciels de lumière et de vidéo. Avec le mode TCNet sur Client dans les réglages, ou en STANDBY, rien n'est envoyé même activé.
4. **CUE CALL** — ouvre la fenêtre de cue call. [Chapitre 11](#11-cue-call)
5. **Recharger** — recharge l'écran (Cmd/Ctrl+R). La lecture des decks virtuels s'arrête.
6. **M.VOL** — le volume du son des decks virtuels émis par l'application. N'affecte pas l'audio des CDJ ni du mixer.
7. **Boutons de fenêtre** — sous Windows : réduire, agrandir et fermer ORVIK. Sous macOS, ce sont les boutons habituels en haut à gauche. S'il y a une history ou une set list non enregistrée, ORVIK demande à la fermeture s'il faut enregistrer.

### État des interrupteurs

Quand PRO DJ LINK ou TCNET est activé, sa case de gauche se remplit de la couleur d'état : vert si tout va bien, un point clignotant pendant l'activation. S'il y a quelque chose à vérifier, l'une de ces étiquettes apparaît dans l'interrupteur.

| Étiquette | Signification |
| --- | --- |
| NO H/W | PRO DJ LINK est activé mais aucun CDJ ni DJM n'est visible. |
| LOST | Il y a des decks matériels, mais aucun CDJ n'envoie d'état depuis plus de 1,5 s. |
| STANDBY | Un serveur TCNet lancé plus tôt existe sur le même réseau ; l'émission attend. |

Quand une nouvelle version existe, le badge UPDATE apparaît dans l'en-tête. Cliquez pour ouvrir la page de téléchargement.

---

## 4. Barre latérale

| Menu | Contenu |
| --- | --- |
| DECKS | Formes d'onde, timecode et état de lecture par deck |
| MIXER | Faders de voie, EQ et vumètres du DJM |
| HISTORY | Journal des morceaux passés à l'antenne |
| SET LIST | Set list, offsets de timecode par morceau et édition des cues |
| NETWORK | Appareils PRO DJ LINK et nœuds TCNet |
| OUTPUT | Éditeur de nœuds qui envoie les valeurs des decks et du mixer en OSC, DMX et MIDI, et réglages Art-Net |
| MAP | Active le mode qui assigne un raccourci en cliquant une commande. [Chapitre 14](#14-shortcut-et-map) |
| SHORTCUT | Pilotage d'ORVIK au clavier, en MIDI, OSC et DMX |
| SETTINGS | Ouvre la fenêtre des réglages. |

---

## 5. Barre d'état

![Barre d'état](images/05-status-bar.png)

1. **TCNET** — si l'interrupteur TCNET de l'en-tête est activé. En STANDBY, rien n'est envoyé même si ON est affiché.
2. **ARENA** — nombre de nœuds TCNet vus dans les 10 dernières secondes.
3. **DECKS** — decks matériels plus decks virtuels avec un morceau chargé.
4. **UP** — temps écoulé depuis le démarrage du moteur.
5. **CPU** — utilisation CPU d'ORVIK.
6. **MEM** — mémoire utilisée par ORVIK.
7. **Points de deck** — un point par deck. Les decks matériels montrent leur couleur ; les decks virtuels changent de couleur selon lecture, cue, chargé ou vide.

En cas de problème, LINK, OUT ou MIX apparaît dans la barre d'état : LINK quand des numéros de lecteur sont en double, OUT quand l'émission TCNet est arrêtée ou que l'application est en miroir, MIX quand les données du mixer sont coupées. Un clic mène à la page concernée. Tant que tout va bien, ils n'apparaissent pas.

---

## 6. DECKS

### 6.1 Mode de deck et appareils connectés

![Mode de deck et appareils connectés](images/03-deck-top.png)

1. **Mode de deck** — HARDWARE suit les CDJ du réseau PRO DJ LINK (par défaut). VIRTUAL utilise des decks virtuels qui lisent des fichiers audio de cet ordinateur. Changer de mode retire les decks actuels ; passer en HARDWARE avec des decks virtuels demande confirmation. [6.4](#64-decks-virtuels)
2. **CDJ** — numéro et modèle de chaque lecteur connecté. Survolez pour voir l'IP ; clic droit pour choisir la couleur du deck.
3. **DJM** — modèle du mixer connecté. NO DATA s'ajoute si aucune valeur de commande n'arrive pendant plus de 1,5 s.

### 6.2 Carte de deck

![Carte de deck](images/04-deck-card.png)

L'image montre une carte dans la disposition FLOW. Les autres dispositions omettent ou déplacent certains éléments.

1. **Numéro de lecteur** — clic droit pour choisir la couleur du deck.
2. **Titre, artiste**
3. **Tonalité** — la tonalité du morceau en notation Camelot comme 8A ; celles qui ne peuvent pas être converties sont affichées telles quelles.
4. **ON AIR** — allumé quand la voie de ce deck est à l'antenne sur le mixer.
5. **MASTER** — allumé quand ce deck est le master CDJ.
6. **SYNC** — allumé quand Beat Sync est actif.
7. **Fader de voie, vumètre** — position du fader et niveau de la voie sur le DJM.
8. **État de lecture** — PLAY, PAUSE, CUE, LOOP, etc.
9. **Modèle, support** — modèle du CDJ et support contenant le morceau (numéro de lecteur et USB ou SD). La couleur de la puce est la couleur de support définie dans rekordbox ; sans couleur, gris. Sans information de couleur, du texte remplace la puce.
10. **Garder en grand** — en FLOW, garde ce deck en grand. Cliquez de nouveau ou chargez un autre morceau pour relâcher.
11. **Forme d'onde détaillée** — l'onde autour de la position de lecture. La ligne rouge est la position.
12. **Compteur de mesures** — mesures jusqu'au prochain cue mémoire. Rouge à 8 ou moins ; sans cue devant, il montre les mesures écoulées. Cliquez pour passer en secondes.
13. **Zoom** — − agrandit la vue (×2 par clic), + la réduit (minimum 0,5 s). RST revient aux 8 s par défaut.
14. **Forme d'onde globale** — tout le morceau. Sur les decks matériels, maintenir enfoncé prévisualise l'onde détaillée à cet endroit ; relâcher revient. Pendant la prévisualisation, le compteur montre la distance à la position de lecture en secondes ou minutes:secondes.
15. **Timecode** — le timecode de la position actuelle.
16. **Temps** — cliquez pour alterner entre temps écoulé et restant. À droite, la durée.
17. **Position du temps** — quel temps de la mesure joue.
18. **BPM** — en haut à gauche le BPM d'origine, dessous le changement de tempo (%), le grand nombre à droite est le BPM actuel.
19. **SMPTE MASTER** — assigne ce deck à la couche A ou B et fait de cette couche la source de MASTER. Cliquez de nouveau pour relâcher seulement la source MASTER ; l'assignation A, B reste. Les sorties LTC, MTC et Art-Net s'activent séparément dans SMPTE OUT.
20. **SMPTE A, B** — fait de ce deck la source de la couche SMPTE A ou B.

Avec la couleur d'onde en 3band et un morceau sans données 3band, ! apparaît sur le deck et l'onde est affichée en RGB. Les ondes sont dessinées par la carte graphique (GPU).

### 6.3 Dispositions

Il y a quatre dispositions de decks. Choisissez avec **Thème de disposition** dans les [Réglages](#15-réglages).

<table>
<tr>
<td width="50%"><img src="images/layout-flow.png" alt="FLOW"><br><b>FLOW</b> — ajuste la taille des decks selon le master CDJ, l'antenne et la lecture. Dans une fenêtre large, jusqu'à quatre decks chargés sont affichés en grand.</td>
<td width="50%"><img src="images/layout-stk.png" alt="STK"><br><b>STK</b> — empile tous les decks en cartes égales, deux par deux.</td>
</tr>
<tr>
<td><img src="images/layout-strip.png" alt="STRIP"><br><b>STRIP</b> — une ligne fine par deck. Seule l'onde globale est affichée.</td>
<td><img src="images/layout-row.png" alt="ROW"><br><b>ROW</b> — une rangée par deck avec des ondes détaillée et globale larges.</td>
</tr>
</table>

### 6.4 Decks virtuels

![Deck virtuel](images/07-virtual-deck.png)

Avec le mode de deck en VIRTUAL, les decks virtuels lisent des fichiers audio de cet ordinateur. L'image montre STK. Les boutons de transport (⑧) existent dans toutes les dispositions sauf STRIP ; en FLOW ils sont entre le timecode et le BPM.

1. **Numéro de deck**
2. **VIRTUAL, LOCAL** — indique un deck virtuel dont le morceau est un fichier de cet ordinateur.
3. **×** — retire ce deck virtuel.
4. **Fader de voie** — glissez pour régler.
5. **Pochette** — cliquez pour décharger le morceau.
6. **Forme d'onde détaillée** — glissez pour déplacer la position.
7. **Forme d'onde globale** — cliquez ou glissez pour déplacer la position.
8. **|◀, CUE, ▶** — CUE en pause fixe le point de cue et lit tant qu'il est maintenu ; en lecture, il revient au point de cue. ▶ lit et met en pause ; |◀ arrête et revient au début.
9. **Ouvrir** — cliquez pour choisir un fichier audio, ou déposez-en un ici.
10. **Ajouter un deck virtuel** — ajoute un autre deck virtuel, jusqu'à 6.

Fichiers pris en charge : MP3, WAV, AIFF, FLAC, AAC, M4A (AAC, ALAC), OGG, MP4 (audio). Tout format qu'un CDJ ouvre s'ouvre ici.

Le son des decks virtuels sort par l'appareil choisi dans **Sortie audio** des [Réglages](#15-réglages) ; le volume est M.VOL dans l'en-tête.

---

## 7. SMPTE OUT

![SMPTE OUT](images/06-smpte-dock.png)

Il y a trois couches de sortie timecode : A, B et MASTER. Les couches A et B envoient la position du deck choisi ; MASTER envoie la couche A, la couche B, l'horloge de l'ordinateur ou FREEWHEEL. L'image montre la couche A et MASTER ; la couche B est identique à A.

1. **SMPTE OUT** — cliquez pour déplier ou replier le dock. Replié, il résume la source et les sorties actives de chaque couche.
2. **Détacher** — ouvre SMPTE OUT dans sa propre fenêtre. À sa fermeture, il revient dans le dock.
3. **Couche A** — la couche qui envoie en timecode la position du deck choisi. La couche B est identique.
4. **LTC, MTC, ART** — active et désactive les sorties LTC (timecode audio), MTC (timecode MIDI) et ART (timecode Art-Net) de cette couche. LTC et ART peuvent être actifs sur chaque couche ; MTC sur une seule. L'appareil LTC et le port MTC se choisissent dans **Sortie timecode SMPTE** des [Réglages](#15-réglages) ; le réseau et la cadence Art-Net, en haut de la page [OUTPUT](#13-output).
5. **Deck source** — le deck que suit cette couche. Identique aux boutons A, B de la carte.
6. **Timecode** — la position de la source plus l'offset. La compensation de latence des réglages s'ajoute à la sortie réelle.
7. **− / +** — change chaque champ de 1 ; avec Ctrl (Cmd sur Mac), de 10. Si STEP de MASTER est sur TIME, change le temps de FREEWHEEL ; sinon l'offset.
8. **SET** — indique que l'offset de la set list est chargé dans cette couche. Survolez pour voir le morceau. Avec l'offset UNLISTED, parce que le morceau n'est pas dans la liste, on lit SET —.
9. **OFFSET ON** — inclut l'offset dans la sortie ou l'exclut. La valeur est conservée.
10. **Réinitialiser** — met l'offset à 0.
11. **MASTER** — la couche MASTER.
12. **Boutons FREEWHEEL** — ▶ fait courir le code FREEWHEEL, ❚❚ le met en pause en gardant la valeur, |◀ revient à 00:00:00:00. READY (◉) maintient FREEWHEEL à la valeur actuelle et le lance quand un deck commence à lire. Avec un mixer, seuls les decks à l'antenne à cet instant comptent ; ceux qui lisaient déjà et les pré-écoutes CUE non.
13. **Source** — A et B envoient le code de cette couche plus l'offset de MASTER. CLOCK utilise l'heure de l'ordinateur ; FREEWHEEL court seul à partir de la dernière valeur de MASTER.
14. **STEP** — avec la source MASTER en FREEWHEEL, si − / + change l'offset (OFS) ou le temps FREEWHEEL (TIME).

Avec un deck arrêté, LTC continue d'envoyer le code de la position arrêtée, la même image répétée, pour que le récepteur sache qu'il s'est arrêté.

---

## 8. MIXER

![MIXER](images/10-mixer.png)

Affiche l'état envoyé par le DJM. ORVIK ne change pas les réglages du mixer. Le nombre de voies et certains éléments dépendent du modèle.

1. **Connexion DJM** — si le DJM est visible.
2. **DATA, METER** — DATA : des valeurs de commande (faders, EQ) arrivent ; METER : des valeurs de vumètres arrivent.
3. **HEADPHONES** — section casque. [8.1](#81-casque-et-effets)
4. **SOUND COLOR FX** — section sound color FX. [8.1](#81-casque-et-effets)
5. **BEAT FX** — section beat FX. [8.1](#81-casque-et-effets)
6. **Voies** — une section identique par voie. [8.2](#82-voies)
7. **Crossfader** — position du crossfader et courbes CH FADER et CROSSFADER.
8. **MASTER** — section master. [8.3](#83-master)

<table>
<tr>
<td align="center"><img src="images/11-mixer-fx.png" alt="Casque et effets" width="280"><br>8.1 Casque et effets</td>
<td align="center"><img src="images/12-mixer-ch.png" alt="Voie" width="220"><br>8.2 Voies</td>
<td align="center"><img src="images/13-mixer-master.png" alt="MASTER" width="208"><br>8.3 MASTER</td>
</tr>
</table>

### 8.1 Casque et effets

1. **LEVEL, MIX** — position du LEVEL casque et de la balance CUE/master (MIX).
2. **CUE** — allumé quand le master est écouté au casque.
3. **Replier** — cliquez le nom de la section pour la replier ou la déplier.
4. **PARAMETER** — position du PARAMETER de SOUND COLOR FX.
5. **Effet SOUND COLOR FX** — l'effet choisi ; OFF si aucun.
6. **Effet BEAT FX** — l'effet choisi.
7. **CH SELECT** — voie à laquelle s'applique BEAT FX.
8. **FX FREQUENCY** — bande (LOW, MID, HI) à laquelle s'applique BEAT FX.
9. **LEVEL/DEPTH** — position du LEVEL/DEPTH de BEAT FX.
10. **ON** — allumé quand BEAT FX est actif.

Sur les DJM à deux sorties casque, LEVEL, MIX et LINK CUE du casque B sont aussi affichés. LINK CUE s'allume à l'écoute du LINK MONITOR de rekordbox.

Sur les DJM avec section FILTER, le filtre choisi (LPF, HPF) et la position de RESONANCE sont affichés.

### 8.2 Voies

1. **ON AIR** — allumé quand cette voie est à l'antenne.
2. **CUE, A, B** — état CUE casque de la voie. Avec deux casques, A et B apparaissent séparément.
3. **TRIM** — position de TRIM.
4. **EQ** — positions de HI, HI MID, LOW MID et LOW. Le nombre de bandes dépend du modèle.
5. **COLOR** — position de SOUND COLOR FX.
6. **Vumètre** — niveau de la voie. CLIP en haut s'allume si l'entrée sature.
7. **Fader de voie** — position du fader.
8. **Assignation crossfader** — A, THRU ou B pour cette voie.

### 8.3 MASTER

1. **Vumètre master** — niveau master L, R. CLIP s'allume si la sortie sature.
2. **LEVEL** — position de MASTER LEVEL.
3. **BALANCE** — position de MASTER BALANCE. C est le centre.
4. **CUE** — allumé quand le master est écouté au casque.
5. **BPM** — BPM d'un CDJ en lecture. S'il y en a plusieurs, celui du deck au numéro le plus bas.
6. **EQ, ISO** — état de l'EQ master. Passe à ISO avec MASTER ISOLATOR actif.
7. **BOOTH LEVEL** — position de BOOTH LEVEL.

---

## 9. HISTORY

![HISTORY](images/14-history.png)

Journalise les morceaux passés à l'antenne avec l'heure réelle et le numéro de deck. Avec un mixer, le temps en lecture et à l'antenne est compté ; sans, le temps en lecture. Un morceau est journalisé après 10 s. Si la lecture ou l'antenne est interrompue plus de 3 s puis revient, le même morceau prend une nouvelle ligne ; en moins de 3 s, la même continue. Les decks virtuels sont journalisés au chargement du morceau et le temps lu est compté. Le morceau à l'antenne affiche LIVE dans END.

Le journal repart de zéro à chaque lancement. Il est enregistré automatiquement et, après une fermeture anormale, ORVIK demande au lancement suivant s'il faut le reprendre.

1. **Heure de début** — date et heure du début de ce journal.
2. **Nombre de morceaux** — morceaux journalisés.
3. **IMPORT** — charge un fichier d'history (CSV ORVIK, CSV ou TXT d'history ShowKontrol) dans le journal actuel. Les entrées sont ajoutées telles quelles.
4. **EXPORT** — enregistre au format choisi : CSV ORVIK (rechargeable dans ORVIK), history ShowKontrol, set list ShowKontrol ou TXT de liste de morceaux.
5. **CLEAR** — vide le journal. Cliquez de nouveau dans les 3 s pour confirmer.
6. **EVENT** — nom de l'événement. Va dans les noms des fichiers exportés (CSV, set list, liste de morceaux) et dans le corps du TXT.
7. **DJ** — nom du DJ. Va dans le corps du TXT.
8. **Recherche** — cherche par titre ou artiste.
9. **En-tête du tableau** — glissez un bord pour changer la largeur ; double-cliquez pour la rétablir. Colonnes :
   - **DECK** — numéro de lecteur et modèle.
   - **START, END** — quand le morceau est passé à l'antenne et quand il l'a quittée.
   - **IN, OUT** — positions de lecture à l'entrée et à la sortie de l'antenne.
   - **ON AIR** — temps à l'antenne.
10. **Totaux** — morceaux lus, temps ON AIR total, BPM moyen et morceaux par deck.

Au survol d'une ligne, un bouton pour l'ajouter à la set list et un pour la supprimer apparaissent à droite. Supprimer le morceau à l'antenne arrête de le journaliser tant qu'il continue.

---

## 10. SET LIST

![SET LIST](images/15-setlist.png)

Une liste avec un offset de timecode et des cues pour chaque morceau. Avec APPLY TO SMPTE activé, au chargement d'un morceau de la liste dans un deck, son offset entre dans la couche SMPTE (A, B) à laquelle ce deck est connecté. Comme l'history, la set list est vide à chaque lancement ; l'enregistrement automatique et la récupération fonctionnent de la même façon.

1. **Nombre de morceaux** — morceaux dans la liste.
2. **APPLY TO SMPTE** — activé : l'offset du morceau chargé entre dans la couche de ce deck. Désactivé : les offsets de couche restent.
3. **UNLISTED** — offset pour les morceaux absents de la liste. Le bouton à côté le met à 00:00:00:00.
4. **AUTO FILL** — fixez une valeur de départ et un pas (1H, 30M, 10M) et cliquez FILL pour remplir les offsets dans l'ordre. Sans pas, tous reçoivent la même valeur.
5. **ADD** — + ajoute un morceau saisi à la main ; un numéro de deck ajoute le morceau chargé dans ce deck.
6. **Recherche** — cherche par titre ou artiste.
7. **IMPORT** — charge une set list : fichier ORVIK, set list ShowKontrol (.set) ou history (.csv), liste texte exportée de rekordbox ou d'autres, ou fichiers audio. Avec une liste existante, demande s'il faut remplacer (REPLACE) ou ajouter (ADD), et demande de choisir les colonnes s'il ne reconnaît pas celles d'un fichier texte. Les fichiers ORVIK incluent les cues.
8. **EXPORT** — enregistre au format choisi : fichier ORVIK ou set list ShowKontrol (.set).
9. **CLEAR PLAYED** — efface seulement les marques de lecture.
10. **CLEAR** — vide la liste. Cliquez de nouveau dans les 3 s pour confirmer. Les cues des morceaux sont supprimés avec eux.
11. **OFFSET** — offset de ce morceau. Au chargement dans un deck, cette valeur entre dans la couche. Cliquez pour modifier ; le bouton à côté le met à 00:00:00:00.
12. **STATUS (dans un deck)** — deck où le morceau est chargé et couche (A, B) qui a reçu son offset.
13. **STATUS (lu)** — une marque apparaît quand le morceau a été lu et est passé à l'antenne avec APPLY TO SMPTE activé. Sans mixer, seule la lecture compte. Si le même morceau apparaît plusieurs fois, l'offset d'une ligne sans marque est utilisé ; s'il apparaît une fois, son offset est réutilisé.
14. **Morceau dans un deck** — les lignes des morceaux chargés sont surlignées.

Cliquez un titre ou un artiste pour le modifier. Les boutons à droite de la ligne déplacent le morceau vers le haut ou le bas ou le retirent. Glissez un bord de l'en-tête pour changer la largeur ; double-cliquez pour la rétablir. La colonne **forme d'onde** de chaque ligne est l'origine de l'onde utilisée dans l'édition des cues (fichier audio, HISTORY, CDJ, aucune) et la colonne **cues** le nombre de cues du morceau.

### 10.1 Édition des cues

L'éditeur de cues s'ouvre à droite de la page SET LIST. En choisissant un morceau, son onde et sa liste de cues s'affichent.

- **Forme d'onde** — le morceau entier et une partie agrandie, avec la grille de temps, les numéros de mesure, les bandes de phrase et les marques de cue. L'onde vient du fichier audio, du journal HISTORY ou de celle reçue du CDJ, selon ce qui existe. Les ondes du CDJ exigent la bibliothèque de morceaux activée (l'éditeur propose de l'activer). Sans onde, les cues sont placés seulement par le temps.
- **Déplacer la position** — cliquez l'onde pour déplacer la position d'édition. **Aimantation** (non, temps, mesure, image) l'aligne sur la grille. **Zoom** change la plage agrandie.
- **+ Cue (C)** — crée un cue à la position d'édition. Avec un fichier audio, cet endroit est pré-écouté.
- **Importer les hot cues** — rapporte les hot cues et points mémoire de rekordbox comme positions de cue.
- **Liste des cues** — temps, mesure.temps, nom, groupe et résumé des actions.
- **Réglages du cue** — nom, temps, mesure.temps, groupe, préavis (par défaut ou un nombre de temps), voix (suivre le groupe, oui, non), texte à dire (vide : le nom du cue) et liste d'actions.
- **Liste d'actions** — exécutée dans l'ordre depuis le haut : OSC (destination, adresse, type i/f/s, valeur), Art-Net DMX (univers, plusieurs canal=valeur), MIDI (appareil, canal, Note on/off, CC, Program) et attente (ms, ou temps et mesures). La liste des destinations est la même que dans OUTPUT.
- **Groupe** — le groupe d'équipe du cue. Les groupes par défaut sont Lumière, Vidéo, SFX et Laser ; **Modifier les groupes…** dans le menu de groupe les renomme, recolore ou en ajoute. Les groupes régissent la fenêtre de cue call et les sorties vocales.
- **Sortie des cues** — l'interrupteur au-dessus de l'éditeur active et désactive l'envoi des actions.

Les cues réagissent seulement au morceau qui joue sur le deck master. Si ce morceau n'est pas dans la set list, aucun cue n'est envoyé. Le temps du cue est calculé avec la grille de temps et la position de lecture. Les cues appartiennent à l'entrée de set list ; le même morceau a donc des cues différents dans chaque set list.

---

## 11. CUE CALL

Le bouton CUE CALL de l'en-tête ouvre la fenêtre de cue call. Elle montre par groupe les cues du morceau du deck master et compte à rebours jusqu'au suivant. Plusieurs fenêtres peuvent être ouvertes (par exemple une pour la lumière, une pour les SFX) ; position, taille et réglages d'affichage sont mémorisés par fenêtre. Le bouton de la barre de titre l'ancre à droite de la fenêtre principale et la détache.

### Thèmes

- **Tableau** — une carte par groupe : nom du cue, cue suivant, grand compte à rebours et barre de progression des 8 dernières mesures. À l'approche du cue, la carte se remplit de la couleur du groupe ; au cue, elle affiche GO.
- **Couches** — une ligne de temps qui défile : en haut l'onde du deck master avec ses marques de cue, dessous une ligne par groupe et celle du morceau suivant. La ligne NOW est à 20 % de la largeur ; un cue se déclenche quand il la touche.

### Temps restant

Secondes et temps (mesure.temps, à la manière du compte à rebours de temps du CDJ) ensemble : `2.3` signifie 2 mesures et 3 temps. Dans le grand compte à rebours, les secondes prennent la couleur du groupe par pas de 0,1 s, les derniers temps comptent 3 2 1 (ou depuis 5 ou 10) et GO apparaît. Cliquer le nombre alterne entre secondes d'abord, temps d'abord et secondes seules.

### Fenêtre de réglages (l'engrenage)

| Section | Éléments |
| --- | --- |
| Affichage | temps restant (secondes d'abord, temps d'abord, secondes seules), grand compte à rebours (5, 10, 15, 30 s), compte des temps depuis (3, 5, 10), plage de la ligne de temps, groupes visibles, couleur de l'onde (morceau, groupe, gris) |
| Vue web | l'adresse pour téléphones et tablettes, **Copier l'adresse**, **Ouvrir dans le navigateur**. Le visualiseur web doit être activé dans les réglages. |
| Voix | parler (nom + compte, nom seul, compte seul), préavis (8 temps, 4 temps), compte à rebours (3, 2, 1 ou aucun), dernier mot (oui, non), voix, clic (aucun, pendant le compte, toujours) et son volume, sortie (appareil, canal, volume, test), sourdine par groupe |

### Annonces vocales

Le haut-parleur dans l'en-tête de la fenêtre active et désactive les annonces vocales. Les phrases sont générées à l'avance avec les voix du système (macOS, Windows) et lues sur le temps pendant le spectacle.

- 8 (ou 4) temps avant le cue : « groupe, nom du cue, standby » ; à chaque temps « trois, deux, un » ; au cue « go ».
- La liste **voix** montre seulement les voix des langues que l'application peut parler (coréen, anglais, japonais, espagnol, allemand, français, chinois), groupées par langue. La première entrée, « Voix système en … », est la voix par défaut de la langue de l'interface. Choisir une voix d'une autre langue fait passer les annonces dans cette langue (une voix anglaise dit « Lighting, standby », « three, two, one, go »). Les noms de groupe saisis dans la set list sont lus tels quels.
- Sans voix pour la langue, les annonces sont en anglais et la première entrée l'indique. Les voix s'ajoutent dans les réglages de voix du système d'exploitation.
- La **sortie** peut être un autre canal de l'appareil utilisé par LTC, mais pas le canal du LTC ; choisir le même canal affiche un avertissement de conflit.
- Le haut-parleur à côté d'un nom de groupe met ce groupe en sourdine. Les groupes masqués dans la fenêtre ne sont pas parlés.

### Page web

Avec le visualiseur web activé dans les réglages, les téléphones, tablettes et autres ordinateurs du même réseau ouvrent `http://<cet ordinateur>:<port>/cuecall`. Elle demande d'abord le code d'accès (le même que le visualiseur web) et le mémorise 12 heures. Les thèmes tableau et couches et les réglages d'affichage se choisissent sur cet appareil. Il y a une disposition pour téléphone en portrait.

---

## 12. NETWORK

![NETWORK](images/16-network.png)

1. **État de PRO DJ LINK** — si ORVIK est prêt à recevoir PRO DJ LINK. La présence de CDJ se voit dans la liste des appareils.
2. **Liste des appareils** — numéro, type, modèle et IP de chaque CDJ et DJM vu.
3. **État de TCNet** — si l'interrupteur TCNET est activé et le nom de nœud d'ORVIK.
4. **Liste des nœuds** — ORVIK et les nœuds TCNet vus dans les 10 dernières secondes.
5. **TYPE** — le rôle du nœud : SERVER envoie, CLIENT reçoit ; aussi REPEATER et AUTO. Avec TCNet activé et aucun CLIENT, une note apparaît sous la liste.

---

## 13. OUTPUT

Envoie les valeurs des decks et du mixer à d'autres programmes et appareils en OSC, DMX (Art-Net, sACN) et MIDI. C'est un éditeur de nœuds qui réunit l'ancienne page OSC et le patch DMX d'ART-NET. Les lignes OSC et patchs DMX de la 1.6 sont convertis en nœuds au premier lancement et envoient les mêmes valeurs.

### Partie haute

- **IMPORT, EXPORT** — enregistre le graphe de nœuds dans un fichier ou le charge.
- **OSC** — destination OSC (adresse:port) : cet ordinateur, une IP ou diffusion.
- **Réseau Art-Net** — interface réseau pour Art-Net et cadence DMX (Hz).
- **Timecode Art-Net** — cadence d'images du timecode Art-Net. Chaque couche s'active avec le bouton ART dans SMPTE OUT.
- **MIDI** — appareil MIDI de sortie.
- **Scanner** — recherche à nouveau les appareils Art-Net (ArtPoll) et les appareils MIDI.

### Liste de gauche

Cliquer un élément crée son nœud sur le canevas.

| Groupe | Nœuds |
| --- | --- |
| Destinations | OSC, sortie DMX, MIDI CC, MIDI Note |
| Valeurs (voies 1–6 du mixer) | Fader, VU, Hi, Mid, LoMid, Low, Color, OnAir |
| Valeurs (mixer entier, effets) | Xf, MVU, MVUL, MVUR, BeatFX, BeatFXOn, BeatFXName, BeatFXCh, ColorFXName |
| Valeurs (tempo du deck) | BPM, BPMCoarse, BPMFine, Beat, Downbeat, Phase, BarBeat, BarPhase |
| Valeurs (temps du deck, phrases) | Pos, Time, Length, Remain, Phrase, PhraseKind, PhrasePos, PhraseBeats |
| Valeurs (état du deck, morceau) | Loop, Sync, Master, CDJPlay, CDJCue, Deck, Title, Artist, Key |
| Valeurs (sortie SMPTE) | SMPTEA, SMPTEB, SMPTEM, Clock |
| Transformations | Plage, Forme (sin, tri, saw, sq), Inverser, Libre, Format de temps |
| Opérations | Additionner, Soustraire, Multiplier, Diviser, Min, Max, Lisser, Saut de ligne |

### Canevas et réglages de droite

Glissez la sortie d'un nœud de valeur vers l'entrée d'une transformation, d'une opération ou d'une destination. La valeur qui circule se voit sur le câble. Une valeur peut aller à plusieurs destinations. En sélectionnant un nœud, ses réglages apparaissent à droite (deck, plage, adresse, canal, type, valeur actuelle). Le deck d'un nœud de valeur est « suivre le master » ou deck 1–6.

- **OSC** — adresse et type (int, float, string). Envoyé seulement au changement, à 60 Hz au plus. Le `/` initial est ajouté s'il manque ; les espaces et `# * , ? [ ] { }` ne sont pas acceptés.
- **Sortie DMX** — Net, Subnet, Universe et canal. Les valeurs 0–1 sont envoyées en 0–255. Le récepteur (IP unicast ou diffusion) et la priorité sACN se fixent dans le nœud.
- **MIDI CC, MIDI Note** — canal et numéro de CC ou de note. Les valeurs 0–1 sont envoyées en 0–127.
- **Plage** — convertit 0–1 en min–max. Un min supérieur au max inverse le sens. BPM traite 20–500 BPM comme 0–1.
- **Forme** — convertit 0–1 en onde sin, tri, saw ou sq ; **Inverser** est 1 − valeur. **Libre** court seul avec la période choisie, sans entrée.
- **Format de temps** — choisit les champs (hh, mm, ss, ff) d'une valeur de temps (Time, Length, Remain, SMPTE, Clock). Voir « Format de temps ».
- **Saut de ligne** — réunit des valeurs texte sur plusieurs lignes (par exemple titre / artiste).

Les valeurs sont calculées dans le moteur de sortie, elles continuent donc d'être envoyées pendant qu'une autre page est affichée.

### Noms de valeur et ce qu'ils envoient

Valeurs envoyées sans plage.

| Groupe | Nom | Valeur |
| --- | --- | --- |
| Par voie du mixer (1–6) | Fader, VU, Hi, Mid, LoMid, Low, Color | 0–1 |
| | OnAir | 1 à l'antenne, sinon 0 |
| Mixer entier | Xf, MVU, MVUL, MVUR, BeatFX | 0–1 |
| | BeatFXOn | 1 avec beat FX sur ON |
| | BeatFXName, BeatFXCh, ColorFXName | beat FX choisi, voie à laquelle il s'applique, nom du colour FX (string) |
| Par deck et deck master | BPM | le BPM tel quel (en string, une décimale : `128.0`). BPMCoarse est la partie entière, BPMFine la fraction |
| | Pos | progression 0–1 (en string `42%`) |
| | Beat, Downbeat | un bref 1 à chaque temps, un bref 1 au premier temps de la mesure |
| | Phase | position dans le temps 0–1 |
| | BarBeat | quel temps de la mesure, 1–4 |
| | BarPhase | position dans la mesure 0–1 (un cycle par quatre temps) |
| | Phrase | nom de phrase rekordbox (string, p. ex. `CHORUS`) |
| | PhraseKind | numéro de phrase : Intro 1, Verse 2, Bridge 3, Chorus 4, Up 5, Down 6, Outro 7 (0 sans phrase) |
| | PhrasePos, PhraseBeats | position dans la phrase 0–1, temps jusqu'à la suivante |
| | Loop, Sync | 1 en boucle, 1 avec sync actif |
| | Title, Artist, Key | titre, artiste et tonalité (string) |
| | Time, Length, Remain | temps écoulé, total et restant (string, `MM:SS`, restant en `-MM:SS`) |
| Par deck seulement | CDJPlay, CDJCue | 1 en lecture, 1 tant que CUE est maintenu |
| | Master | 1 si ce deck est le master CDJ |
| Deck master seulement | Deck | numéro de lecteur du master 1–6 |
| SMPTE, horloge | SMPTEA, SMPTEB, SMPTEM | timecode des couches A, B, MASTER de SMPTE OUT tel qu'affiché dans le dock (string, `HH:MM:SS:FF`, drop frame 29,97 `HH:MM:SS;FF`, avec offset) |
| | Clock | heure de l'ordinateur (string, `HH:MM:SS`) |

- Le deck master est celui du MASTER BPM de l'en-tête. Sans master CDJ, un deck en lecture est utilisé, d'abord un deck à l'antenne.
- Le BPM envoyé à l'adresse de tempo de Resolume (`/composition/tempocontroller/tempo`) part en 0–1 (20–500 BPM), parce que Resolume attend 0–1 à cet endroit.
- Sans mixer, aucune valeur de mixer n'est envoyée, car un 0 éteindrait une couche liée à un fader. Le BPM d'un deck sans BPM n'est pas envoyé non plus.
- Les valeurs marche/arrêt (OnAir, BeatFXOn, Loop, Sync, CDJPlay, CDJCue, Master) et Deck peuvent aussi être envoyées en string (`ON`, `OFF`, `2`).

### Format de temps

Un nœud de format de temps sur une valeur de temps envoie seulement les champs choisis.

| Lettres | Champ |
| --- | --- |
| `hh`, `h` | heures |
| `mm`, `m` | minutes |
| `ss`, `s` | secondes |
| `ff`, `f` | images (SMPTE seulement) |

Deux lettres envoient le champ sur deux chiffres avec zéro devant ; une lettre, tel quel. Plusieurs champs sont joints par `:` (p. ex. `mmss` → `05:08`, `hmmss` → `0:05:08`). Les temps de morceau sans `h` continuent de compter les minutes au-delà de 60. Remain formaté est envoyé sans le `-`. Le code 29,97 drop frame porte `;` avant les images.

---

## 14. SHORTCUT et MAP

Clavier, MIDI, OSC et DMX (Art-Net) pressent les boutons d'ORVIK et changent ses valeurs. Seule la réception se configure ; l'état d'un bouton assigné peut être renvoyé par MIDI OUT.

### Page SHORTCUT

| Section | Contenu |
| --- | --- |
| Clavier | combinaisons de touches, seulement quand la fenêtre d'ORVIK est au premier plan. |
| Entrée MIDI | l'appareil MIDI écouté (tous ou un seul). Avec OUT activé, l'état des boutons assignés est renvoyé à cet appareil (LED du contrôleur). |
| Entrée OSC | port de réception OSC, où écouter (toutes les interfaces ou seulement cet ordinateur) et la liste des IP autorisées. Une liste vide laisse n'importe qui sur le réseau piloter : notez les IP sur place. |
| Entrée DMX (Art-Net) | pilotage depuis les canaux d'un univers Art-Net. Peut recevoir à côté de Resolume sur le même ordinateur. |
| Assigner depuis un bouton | **MAP activé** entre dans le mode d'assignation. |

La liste des assignations montre pour chaque action la touche, le MIDI (canal, note ou CC), l'adresse OSC et le canal DMX, et permet de les retirer.

### MAP

MAP dans la barre latérale (ou MAP activé dans SHORTCUT) entre dans le mode d'assignation. Cliquez un bouton de l'écran pour le fixer ; la touche, l'entrée MIDI, le message OSC ou le canal DMX suivant est assigné à ce bouton. Échap quitte le mode. Les boutons assignables sont entourés d'un cadre tant que le mode est actif.

---

## 15. Réglages

![Réglages](images/18-settings.png)

SETTINGS dans la barre latérale ouvre la fenêtre des réglages.

1. **Icônes de section** — cliquez pour aller à cette section.
2. **Sections** — les réglages sont groupés comme suit.
3. **Réglages** — nom à gauche, valeur à droite.

### Langue

| Élément | Description |
| --- | --- |
| Langue | langue de l'interface. Langue du système suit l'ordinateur. 한국어, English, 日本語, Español, Deutsch, Français, 繁體中文. |

### Disposition des decks

| Élément | Description |
| --- | --- |
| Thème de disposition | disposition de l'écran des decks : FLOW, STK, STRIP ou ROW. [6.3](#63-dispositions) |
| Mode d'écran | sombre ou clair. |
| FPS de l'écran | nombre de redessins de l'écran par seconde. Le baisser utilise moins de CPU. Les cadences d'envoi sont indépendantes. |
| Échelle de l'interface | taille de tout l'écran. |

### Forme d'onde

| Élément | Description |
| --- | --- |
| Couleur de l'onde | 3band, RGB ou mono. Les morceaux sans données 3band sont affichés en RGB. |
| Position de lecture | où se place la ligne de position dans l'onde détaillée. |
| Grille de temps : globale | la grille dessinée sur l'onde globale. |
| Grille de temps : détail | la grille de temps dessinée sur l'onde détaillée. |
| Phrases | comment les phrases (INTRO, CHORUS, etc.) sont affichées sur l'onde. |
| Style des marques de cue | forme des marques de cue dessinées sur l'onde. |

### PRO DJ LINK

| Élément | Description |
| --- | --- |
| Interface PRO DJ LINK | interface réseau où sont les CDJ et DJM. La détection automatique choisit le côté où des CDJ sont visibles. |
| État | état de connexion de cette interface. |
| Liste des interfaces | Actualiser relit la liste ; cliquez après avoir branché un adaptateur. Une interface choisie mais absente reste « absente » et le moteur utilise entre-temps la détection automatique. |
| Démarrage automatique de PRO DJ LINK | active PRO DJ LINK au lancement d'ORVIK. |
| Ports | les ports UDP utilisés par PRO DJ LINK. ORVIK avertit si un autre programme les occupe. |

### TCNet

| Élément | Description |
| --- | --- |
| Node Name | nom de cet ordinateur dans TCNet. %% est un numéro automatique ; 8 caractères au plus. |
| Interface TCNet | interface réseau par laquelle TCNet est envoyé. |
| État | état de connexion de cette interface. |
| Frame Rate | cadence d'images du timecode envoyé par TCNet. |
| Mode TCNet | Auto attend s'il y a un serveur antérieur, Server envoie toujours, Client n'envoie jamais. |
| Démarrage automatique de TCNET | active la sortie TCNET au lancement d'ORVIK. |
| Ports | les ports UDP utilisés par TCNet. |

### Mode miroir

| Élément | Description |
| --- | --- |
| Servir le miroir | permet à ORVIK sur un autre ordinateur de refléter celui-ci. |
| Refléter un autre PC | affiche l'écran d'ORVIK d'un autre ordinateur. |
| Serveur miroir | le serveur reflété. Actualiser cherche à nouveau. |
| Ports | le port TCP utilisé par le miroir. |

En miroir, MIRROR et l'adresse du serveur remplacent les boutons PRO DJ LINK et TCNET de l'en-tête ; CONNECTING apparaît avant la connexion et à la reconnexion. Un ordinateur en miroir n'envoie pas de TCNet. Cliquer MIRROR ouvre les réglages.

### Visualiseur web

| Élément | Description |
| --- | --- |
| Visualiseur web | permet de voir l'écran des decks et la page de cue call depuis des navigateurs du même réseau (lecture seule). |
| Port | port du visualiseur web. |
| Interface | interface réseau où le visualiseur web écoute. |
| État | adresse et état du visualiseur web ; activé, le code d'accès et un code QR. |

### Sortie audio

| Élément | Description |
| --- | --- |
| Appareil de sortie | appareil audio pour les decks virtuels. |
| Canaux de sortie | canaux de sortie pour les decks virtuels. |

### Sortie timecode SMPTE

| Élément | Description |
| --- | --- |
| Frame Rate | cadence d'images de LTC et MTC. |
| Compensation de latence | ms ajoutées au timecode ; positif avance. Commune à LTC, MTC et Art-Net, pour compenser le retard du récepteur. |
| LTC : Layer A, Layer B, MASTER | appareil audio et canal du LTC de chaque couche. |
| La couche MASTER suit le deck master | avec MASTER suivant A ou B, si le master CDJ passe au deck de l'autre couche, MASTER passe à cette couche. |
| Sortie MIDI du MTC | port MIDI pour le MTC. |

### Fichier de réglages

| Élément | Description |
| --- | --- |
| Sauvegarde | enregistre les réglages dans un fichier (.orvikcfg) ou en charge un. Au chargement, ORVIK redémarre. History, set list et positions de fenêtre ne vont pas dans le fichier. Les fichiers de la 1.6 se chargent aussi ; leurs lignes OSC et patchs DMX sont convertis en nœuds OUTPUT. |
| Réinitialiser | remet tous les réglages à leur valeur initiale et redémarre. |

### À propos

| Élément | Description |
| --- | --- |
| Version | version actuelle d'ORVIK. |
| Rechercher les mises à jour | activé, cherche une nouvelle version après le lancement et toutes les 12 heures. |
| Vérifier maintenant | vérifie tout de suite ; avec une nouvelle version, le bouton de la page de téléchargement apparaît. |
| Copyright | mentions de copyright et de licence d'ORVIK et de JUCE, et le bouton REPORT pour les demandes. |
| Open source | ouvre le dossier des licences inclus dans l'application (sous Windows, il est extrait dans un dossier temporaire) ou le guide des licences open source. |

---

## 16. Marques et licences

ORVIK est un outil de compatibilité indépendant. Ce n'est ni le PRO DJ LINK Bridge officiel d'AlphaTheta ni le ShowKontrol de TC Supply, et il n'implique aucune affiliation, parrainage, certification ni approbation d'AlphaTheta, Pioneer DJ, TC Supply ou Resolume.

AlphaTheta, Pioneer DJ, CDJ, DJM, PRO DJ LINK, rekordbox, TC Supply, TCNet, ShowKontrol, Resolume, SMPTE et les autres noms de produits, de technologies et de marques servent à décrire la compatibilité. Les droits sur chaque marque appartiennent à son titulaire. Art-Net™ Designed by and Copyright Artistic Licence.

ORVIK utilise le framework JUCE 9, les composants open source fournis avec lui et les polices. La liste et les textes de licence se trouvent dans la section **À propos** de la fenêtre des réglages et dans THIRD_PARTY_NOTICES. Les conditions d'utilisation de l'application se trouvent dans BINARY_LICENSE.
