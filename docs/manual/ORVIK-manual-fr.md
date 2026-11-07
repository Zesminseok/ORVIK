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

ORVIK reçoit les informations de lecture des CDJ et DJM et les transmet aux logiciels de lumière et de vidéo : TCNet, timecode SMPTE (LTC, MTC, Art-Net), OSC, DMX (Art-Net, sACN), MIDI et MIDI Clock. Il peut aussi montrer les cues de la set list à l'équipe technique dans des fenêtres de cue call et les annoncer à voix haute. Il interroge seulement les appareils ; il ne les commande pas.

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

### Première connexion

1. Reliez cet ordinateur au réseau des lecteurs et du mixer : le même switch ou routeur. Le TCNet vers Arena peut sortir sur le même réseau ou sur un second adaptateur.
2. Lancez ORVIK. PRO DJ LINK et TCNET s'activent d'eux-mêmes (**Démarrer PRO DJ LINK automatiquement** et **Démarrer TCNet automatiquement** dans les [Réglages](#15-réglages)) ; sinon, activez-les dans l'en-tête.
3. Les lecteurs apparaissent dans DECKS et NETWORK. Avec **Détection automatique**, ORVIK utilise l'adaptateur où des CDJ sont visibles ; pour fixer un adaptateur, choisissez-le dans **Interface PRO DJ LINK** des réglages.
4. Si aucun appareil n'apparaît, NETWORK indique ce qui ne va pas dans la configuration et quoi faire. [12.1](#121-avertissements-de-configuration)

Sous macOS, autorisez ORVIK dans Réglages Système > Confidentialité et sécurité > Réseau local. Sous Windows, autorisez ORVIK quand le pare-feu le demande ; un adaptateur sans routeur compte comme réseau public, autorisez donc aussi les réseaux publics.

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
4. **CUE CALL** — ouvre un cue call ancré à droite de la fenêtre principale ; un second clic ferme tous les cue calls, et Alt+clic (Option+clic sur Mac) en ouvre un dans sa propre fenêtre. Le bouton reste plein tant qu'un cue call est ouvert. [Chapitre 11](#11-cue-call)
5. **Recharger** — recharge l'écran (Cmd/Ctrl+R). La lecture des decks virtuels s'arrête.
6. **M.VOL** — le volume du son des decks virtuels émis par l'application. N'affecte pas l'audio des CDJ ni du mixer.
7. **Boutons de fenêtre** — sous Windows : réduire, agrandir et fermer ORVIK. Sous macOS, ce sont les boutons habituels en haut à gauche, et le menu Fenêtre propose Placer dans le Dock (⌘M) et Fermer (⌘W). S'il y a une history ou une set list non enregistrée, ORVIK demande à la fermeture s'il faut enregistrer.

### État des interrupteurs

Quand PRO DJ LINK ou TCNET est activé, sa case de gauche se remplit de la couleur d'état : vert si tout va bien, un point clignotant pendant l'activation. S'il y a quelque chose à vérifier, l'une de ces étiquettes apparaît dans l'interrupteur.

| Étiquette | Signification |
| --- | --- |
| NO H/W | PRO DJ LINK est activé mais aucun CDJ ni DJM n'est visible. |
| LOST | Il y a des decks matériels, mais aucun CDJ n'envoie d'état depuis plus de 1,5 s. |
| STANDBY | Un serveur TCNet lancé plus tôt existe sur le même réseau ; l'émission attend. |

Quand la configuration réseau empêche les lecteurs et le mixer d'atteindre ORVIK, l'infobulle de l'interrupteur PRO DJ LINK indique ce qui ne va pas. [12.1](#121-avertissements-de-configuration)

Quand une nouvelle version existe, le badge UPDATE apparaît dans l'en-tête. Cliquez pour ouvrir la page de téléchargement.

---

## 4. Barre latérale

| Menu | Contenu |
| --- | --- |
| DECKS | Formes d'onde, timecode et état de lecture par deck |
| MIXER | Faders de voie, EQ et vumètres du DJM |
| HISTORY | Journal des morceaux passés à l'antenne |
| SET LIST | Set list, offsets de timecode par morceau et édition des cues |
| NETWORK | Appareils PRO DJ LINK, nœuds TCNet et avertissements de configuration réseau |
| OUTPUT | Éditeur de nœuds qui envoie les valeurs des decks et du mixer en OSC, DMX (Art-Net, sACN) et MIDI, avec les réglages du réseau et du timecode Art-Net. [Chapitre 13](#13-output) |
| MAP | Active et désactive MAP : cliquez une commande à l'écran, puis appuyez sur une touche ou envoyez du MIDI ou du DMX pour l'assigner. [Chapitre 14](#14-shortcut-et-map) |
| SHORTCUT | Les entrées clavier, MIDI, OSC et DMX et la liste des assignations. [Chapitre 14](#14-shortcut-et-map) |
| SETTINGS | Ouvre la fenêtre des réglages ; cliquez de nouveau pour la fermer. [Chapitre 15](#15-réglages) |

Les menus sont groupés depuis le haut : DECKS et MIXER, HISTORY et SET LIST, NETWORK et OUTPUT. MAP et SHORTCUT sont au-dessus de SETTINGS, tout en bas.

---

## 5. Barre d'état

![Barre d'état](images/05-status-bar.png)

1. **TCNET** — si l'interrupteur TCNET de l'en-tête est activé. En STANDBY, rien n'est envoyé même si ON est affiché.
2. **ARENA** — nombre de nœuds TCNet vus dans les 10 dernières secondes.
3. **DECKS** — decks matériels plus decks virtuels avec un morceau chargé.
4. **UP** — temps écoulé depuis le démarrage du moteur.
5. **CPU** — utilisation CPU d'ORVIK.
6. **GPU** — la part du temps de la carte graphique utilisée par ORVIK, quand le système la fournit.
7. **MEM** — mémoire utilisée par ORVIK.
8. **Points de deck** — un point par deck. Les decks matériels montrent leur couleur ; les decks virtuels changent de couleur selon lecture, cue, chargé ou vide.

En cas de problème, LINK, OUT ou MIX apparaît dans la barre d'état : LINK quand des numéros de lecteur sont en double ou que la configuration réseau demande attention (par exemple PDJL aucun appareil ou PDJL autre sous-réseau), OUT quand l'émission TCNet est arrêtée ou que l'application est en miroir, MIX quand les données du mixer sont coupées. Un clic mène à la page concernée. Tant que tout va bien, ils n'apparaissent pas.

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

Avec le mode de deck en VIRTUAL, les decks virtuels lisent des fichiers audio de cet ordinateur. Ils utilisent toujours la carte FLOW, quel que soit le thème de disposition, avec les boutons de transport (⑧) entre le timecode et le BPM. L'image montre un deck avec un morceau et un deck vide.

1. **Numéro de deck**
2. **VIRTUAL** — indique un deck virtuel, qui lit un fichier de cet ordinateur.
3. **×** — retire ce deck virtuel.
4. **Fader de voie** — glissez pour régler.
5. **Éjecter** — décharge le morceau.
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

1. **SMPTE OUT** — cliquez pour déplier ou replier le dock. Replié, il montre comment chaque couche est reliée, puis les sorties actives : A ← 1 signifie que la couche A suit le deck 1, MASTER ← A que MASTER envoie la couche A ; vient ensuite le timecode de MASTER.
2. **Détacher** — ouvre SMPTE OUT dans sa propre fenêtre. À sa fermeture, il revient dans le dock.
3. **Couche A** — la couche qui envoie en timecode la position du deck choisi. La couche B est identique.
4. **LTC, MTC, ART** — active et désactive les sorties LTC (timecode audio), MTC (timecode MIDI) et ART (timecode Art-Net) de cette couche. LTC peut être actif sur chaque couche ; MTC et ART sur une seule couche à la fois (l'activer sur une couche le désactive sur les autres). L'appareil LTC et le port MTC se choisissent dans **Sortie timecode SMPTE** des [Réglages](#15-réglages) ; le réseau Art-Net, en haut de la page [OUTPUT](#13-output). Le timecode Art-Net utilise la **Fréquence d'images** SMPTE.
5. **Deck source** — le deck que suit cette couche. Identique aux boutons A, B de la carte.
6. **Timecode** — la position de la source plus l'offset. La **Compensation de Latence** des réglages s'ajoute à la sortie réelle.
7. **− / +** — change chaque champ de 1 ; avec Ctrl (Cmd sur Mac), de 10. Si STEP de MASTER est sur TIME, change le temps de FREEWHEEL ; sinon l'offset.
8. **SET** — indique que l'offset de la set list est chargé dans cette couche. Survolez pour voir le morceau. Avec l'offset UNLISTED, parce que le morceau n'est pas dans la liste, on lit SET —.
9. **OFFSET ON** — inclut l'offset dans la sortie ou l'exclut. La valeur est conservée.
10. **Réinitialiser** — met l'offset à 0.
11. **MASTER** — la couche MASTER.
12. **Boutons FREEWHEEL** — ▶ fait courir le code FREEWHEEL, ❚❚ le met en pause en gardant la valeur, |◀ revient à 00:00:00:00. READY (◉) maintient FREEWHEEL à la valeur actuelle et le lance quand un deck commence à lire. Avec un mixer, seuls les decks à l'antenne à cet instant comptent ; ceux qui lisaient déjà et les pré-écoutes CUE non.
13. **Source** — A et B envoient le code de cette couche plus l'offset de MASTER. CLOCK utilise l'heure de l'ordinateur ; FREEWHEEL court seul à partir de la dernière valeur de MASTER.
14. **STEP** — avec la source MASTER en FREEWHEEL, si − / + change l'offset (OFS) ou le temps FREEWHEEL (TIME).

Avec **Maintenir le LTC à l'arrêt** activé dans les réglages (par défaut), le LTC d'un deck arrêté continue d'envoyer le code de la position arrêtée, la même image répétée, pour que le récepteur sache qu'il s'est arrêté. Désactivé, le LTC se tait tant que le deck est arrêté.

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
5. **⋯** — **Historique de sauvegarde auto…** rétablit une copie antérieure du journal ([sauvegarde auto](#historique-de-sauvegarde-auto)) ; **Vider tout l’historique…** le vide après confirmation.
6. **EVENT** — nom de l'événement. Va dans les noms des fichiers exportés (CSV, set list, liste de morceaux) et dans le corps du TXT.
7. **DJ** — nom du DJ. Va dans le corps du TXT.
8. **Recherche** — cherche par titre ou artiste.
9. **En-tête du tableau** — glissez un bord pour changer la largeur ; double-cliquez pour la rétablir. Colonnes :
   - **DECK** — numéro de lecteur et modèle.
   - **START, END** — quand le morceau est passé à l'antenne et quand il l'a quittée.
   - **IN, OUT** — positions de lecture à l'entrée et à la sortie de l'antenne.
   - **ON AIR** — temps à l'antenne.
10. **Totaux** — morceaux lus, temps ON AIR total, BPM moyen et morceaux par deck.

Le bouton au bout à droite d'une ligne ajoute le morceau à la set list ; il devient orange avec une coche une fois le morceau dans la liste (un nouveau clic l'ajoute encore une fois). Au survol d'une ligne, une × apparaît à côté et supprime la ligne. Les deux agissent au clic gauche. Supprimer le morceau à l'antenne arrête de le journaliser tant qu'il continue. Sur un écran tactile, faites glisser la liste du doigt pour la faire défiler.

### Historique de sauvegarde auto

ORVIK garde des copies de l'history, de la set list, des cues et des nœuds OUTPUT : une 5 minutes après un changement, une avant de vider, d'importer ou de charger un fichier, et une à la fermeture d'ORVIK. **⋯ > Historique de sauvegarde auto…** sur chaque page les liste, de la plus récente à la plus ancienne, avec l'heure, la raison et leur contenu (morceaux, cues, lignes, nœuds). **Rétablir** remet la copie choisie ; l'état actuel est d'abord copié, vous pouvez donc y revenir. **Ouvrir le dossier** montre les copies dans le gestionnaire de fichiers.

---

## 10. SET LIST

![SET LIST](images/15-setlist.png)

Une liste avec un offset de timecode et des cues pour chaque morceau. Avec APPLY TO SMPTE activé, au chargement d'un morceau de la liste dans un deck, son offset entre dans la couche SMPTE (A, B) à laquelle ce deck est connecté. Comme l'history, la set list est vide à chaque lancement ; elle est enregistrée automatiquement et garde des [copies de sauvegarde auto](#historique-de-sauvegarde-auto).

1. **Nombre de morceaux** — morceaux dans la liste.
2. **APPLY TO SMPTE** — activé : l'offset d'un morceau de la liste chargé dans un deck entre dans la couche de ce deck ; un deck en lecture change aussitôt. Désactivé : les offsets de couche gardent leurs valeurs.
3. **Annuler, rétablir** — annule et rétablit les changements de la liste : Ctrl+Z (Cmd+Z sur Mac), et Ctrl+Maj+Z ou Ctrl+Y (Cmd+Maj+Z sur Mac).
4. **IMPORT** — charge une set list : fichier ORVIK (.json), set list ShowKontrol (.set) ou history (.csv), liste texte exportée de rekordbox (.txt), ou fichiers audio. Avec une liste existante, demande s'il faut la remplacer (REPLACE) ou y ajouter (ADD), et demande de choisir les colonnes s'il ne reconnaît pas les noms de colonnes d'un fichier texte. Les fichiers ORVIK incluent les cues.
5. **EXPORT** — enregistre une set list ORVIK (avec l'offset hors liste et les cues) ou une set list ShowKontrol (.set : titre, artiste, offset, durée).
6. **⋯** — **Effacer les marques de lecture** ; **Historique de sauvegarde auto…** rétablit une copie antérieure de la liste ; **Vider toute la liste…** retire tous les morceaux après confirmation (Annuler les rétablit). Les cues des morceaux sont supprimés avec eux.
7. **Ajouter des titres** — **Saisir** ajoute un morceau que vous tapez : titre, artiste, puis offset ; Entrée passe au champ suivant. **Depuis le deck** avec un numéro de deck ajoute le morceau chargé dans ce deck.
8. **Hors liste** — offset pour les morceaux absents de la liste. Le bouton à côté le met à 00:00:00:00. Choisissez une plage sans cues, par exemple 23:00:00:00.
9. **Remplissage auto** — tapez une heure de départ et cliquez **FILL** pour donner à chaque morceau un offset dans l'ordre de la liste, à une heure d'intervalle. Chaque offset reste modifiable.
10. **Recherche** — cherche par titre ou artiste.
11. **OFFSET** — offset de ce morceau. Cliquez pour modifier (HH:MM:SS:FF, moins de 24 heures) ; le bouton à côté le met à 00:00:00:00.
12. **CUE** — le nombre de cues du morceau, ou **Éditer** s'il n'en a aucun. Cliquez dessus, ou double-cliquez le morceau, pour ouvrir l'éditeur de cues sous la liste. [10.1](#101-édition-des-cues)
13. **STATUS** — ▶ et le numéro de deck tant que le morceau est dans un deck, puis la couche (A, B) qui a reçu son offset ; un tiret si ce deck n'alimente aucune couche. Une fois le morceau lu et passé à l'antenne avec APPLY TO SMPTE activé, une coche apparaît et la ligne s'estompe. Sans mixer, seule la lecture compte. Si le même morceau apparaît plusieurs fois, l'offset d'une ligne sans marque est utilisé ; s'il apparaît une fois, son offset est réutilisé.
14. **Morceau dans un deck** — les lignes des morceaux chargés dans un deck sont marquées d'une barre à gauche.

Cliquez un titre, un artiste ou un offset pour le modifier. Glissez une ligne par sa poignée pour changer l'ordre ; la corbeille au bout à droite de la ligne retire le morceau. Glissez un bord de l'en-tête pour changer la largeur ; double-cliquez pour la rétablir. Sur un écran tactile, faites glisser la liste du doigt pour la faire défiler.

### 10.1 Édition des cues

L'éditeur de cues s'ouvre sous la liste de la page SET LIST, avec la liste des cues du morceau à côté de la fenêtre. En choisissant un morceau, son onde et ses cues s'affichent.

<table>
<tr>
<td width="72%"><img src="images/15b-cue-editor.png" alt="Éditeur de cues"><br>L'éditeur de cues : + CUE (C), IMPORTER LES HOT CUES, aimantation, zoom, pré-écoute, SORTIE CUES, le morceau entier et la partie agrandie.</td>
<td width="28%"><img src="images/15c-cue-list.png" alt="Liste des cues"><br>La liste des cues : temps, mesure.temps, cue et groupe.</td>
</tr>
</table>

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

Le cue call montre par groupe d'équipe les cues de la set list du morceau d'un deck et compte à rebours jusqu'au prochain cue de chaque groupe. Cliquez CUE CALL dans l'en-tête : un cue call s'ouvre, ancré à droite de la fenêtre principale. Cliquez de nouveau CUE CALL pour fermer tous les cue calls. Alt+clic (Option+clic sur Mac) en ouvre un autre dans sa propre fenêtre, par exemple un pour la lumière et un pour les SFX. Chacun garde sa position, sa taille et ses réglages d'affichage, et ceux ouverts à la fermeture d'ORVIK reviennent au lancement suivant.

### Ouverture et ancrage

- **Ancrer** — le bouton à gauche du haut-parleur dans l'en-tête du cue call ancre la vue à droite de la fenêtre principale ou la rouvre dans sa propre fenêtre. Un double-clic sur l'en-tête fait de même.
- **Glisser** — glissez l'en-tête (ou la barre de titre de la fenêtre) pour déplacer une fenêtre de cue call. Déposée sur le bord droit de la fenêtre principale, elle s'y ancre. Jusqu'à deux panneaux partagent le côté droit, l'un au-dessus de l'autre ; glissez le séparateur pour changer leur largeur.
- **Menu Fenêtre** — sous macOS, chaque fenêtre de cue call figure dans le menu Fenêtre et dans le menu du Dock. Fenêtre > Fermer (⌘W) ferme la fenêtre de cue call au premier plan.

Le titre de la fenêtre nomme les groupes qu'elle affiche : « Appel des cues (Tout) » ou les noms des groupes.

### Deck suivi

**Platine suivie** dans la fenêtre de l'engrenage choisit le deck pour toutes les fenêtres de cue call et pour les annonces vocales :

- **Maître SMPTE** — le deck derrière la couche MASTER de SMPTE OUT : MASTER ← A ou B, puis le deck de cette couche (par défaut). Tant que MASTER tourne sur CLOCK ou FREEWHEEL, le master de tempo CDJ.
- **Maître de tempo** — le master CDJ.
- **Platine ON AIR (auto)** — le deck qui part à l'antenne, choisi d'après la lecture, le fader et le temps restant, comme la disposition FLOW choisit son deck principal. Il peut changer avant que le DJ appuie sur MASTER.

Sans un tel deck, la vue affiche « Pas de platine master » ; si son morceau n'est pas dans la set list, « Absent de la set list » ; si le morceau n'a pas de cues, « Ce morceau n'a pas de cue. »

### En-tête

- **Timecode** — le timecode MASTER de SMPTE OUT.
- **Cases de temps** — quatre cases ; le temps de la mesure qui joue est allumé, le premier en orange.
- **BPM** — le BPM du deck suivi.
- **Titre, artiste** — le morceau suivi, quand la barre des couches ou les couloirs ne le montrent pas déjà.
- **Tableau, Couches** — change de thème. Dans une fenêtre de moins de 600 px, ce choix est dans la fenêtre de l'engrenage.
- **Ancrer, haut-parleur, engrenage** — ancrer ou détacher, annonces vocales oui ou non, la fenêtre de réglages.

### Thèmes

- **Tableau** — la barre des couches en haut montre les couches A et B avec leur numéro de deck, leur titre et leur temps de lecture ; M marque la couche que suit MASTER, et le deck de l'autre couche porte l'étiquette Morceau suivant. Dessous, il y a une carte par groupe : le nom du groupe, le nom du prochain cue, un grand compte à rebours, mesures.temps et une barre de progression, avec les cues suivants du groupe en bas à droite. À l'approche du cue, la carte se remplit de la couleur du groupe ; au cue, elle affiche GO. Un groupe sans cue dans le morceau actuel reçoit une carte courte, et les groupes avec cues se partagent l'espace. La bande du bas montre le morceau suivant (le deck de l'autre couche) et ses premiers cues, chronométrés depuis sa position.
- **Couches** — trois couloirs et une liste de compte à rebours. Le couloir MASTER montre l'onde du deck suivi qui défile vers la gauche, avec les marques et noms de cue des groupes affichés ; la ligne NOW est à 20 % de la largeur et un cue est atteint quand il touche NOW. Les couloirs A et B montrent le deck de chaque couche SMPTE ; le deck de l'autre couche est le morceau suivant, avec ses cues. La boucle d'un deck apparaît dans son couloir comme sur l'onde détaillée, plus pâle tant que la boucle est posée mais inactive. La grille de temps suit **Beatgrid: Détail** dans les [Réglages](#15-réglages). La liste du dessous a une ligne par cue à venir : sa couche, son nom, le temps restant, mesures.temps et une barre qui raccourcit pendant la dernière minute.

Dans le thème couches, − et + en bas à droite du couloir MASTER montrent plus ou moins du morceau, et RST revient à la plage automatique. La molette de la souris ou un pincement sur un couloir zooment aussi.


<table>
<tr>
<td width="50%"><img src="images/20-cuecall-board.png" alt="Tableau"><br><b>Tableau</b>, une carte par groupe avec le compte à rebours jusqu'à son prochain cue.</td>
<td width="50%"><img src="images/21-cuecall-layers.png" alt="Couches"><br><b>Couches</b>, les couloirs MASTER, A et B au-dessus de la liste de compte à rebours.</td>
</tr>
</table>

### Temps restant

Secondes et temps sont affichés ensemble. Sous 10 s, les secondes ont des dixièmes (`4.3 s`) ; à partir de 10 s, ce sont des minutes:secondes (`0:24`). Les mesures.temps décomptent comme sur le CDJ : `2.3 bar` signifie qu'il reste 2 mesures et 3 temps, et le temps dans la mesure va 4 3 2 1.

Dans le grand compte à rebours (les 5, 10, 15 ou 30 dernières secondes, choisies dans la fenêtre de l'engrenage), les quatre cases de temps remplacent mesures.temps. Les derniers temps comptent 3 2 1 (ou depuis 5 ou 10), puis GO ; chaque compte allume un instant sa carte ou sa ligne. Un cue long en cours montre son nom et le temps jusqu'à sa fin.

### Fenêtre de réglages (l'engrenage)

| Section | Éléments |
| --- | --- |
| Affichage | écran (Tableau, Couches), grand compte à rebours dès (5, 10, 15, 30 s), afficher mesures.temps et cases de temps, compte des temps à partir de (3, 5, 10), groupes affichés, couleur de la forme d'onde des couloirs (Piste (CDJ), Gris, Désactivé), platine suivie (Maître SMPTE, Maître de tempo, Platine ON AIR (auto)) |
| Vue web | l'adresse pour téléphones et tablettes, **Copier l'adresse**, **Ouvrir dans le navigateur**. Le visualiseur web doit être activé dans les réglages. |
| Annonces vocales | dire (Nom+décompte, Nom seul, Décompte seul), prévenir (8 temps, 4 temps), décompte (3 temps, Non), dernier mot (GO, Non), voix, sortie (appareil, canal, niveau, tester), clic (Non, Pendant le compte, Toujours) et volume du clic, un haut-parleur par groupe |

Les réglages d'affichage appartiennent à chaque fenêtre ; la platine suivie et les annonces vocales sont les mêmes pour toutes les fenêtres. Les niveaux montent jusqu'à 200 %.

### Annonces vocales

Le haut-parleur dans l'en-tête du cue call active et désactive les annonces vocales. Les phrases sont générées à l'avance avec les voix du système (macOS, Windows) et lues sur le temps pendant le spectacle. Les annonces suivent le deck choisi dans **Platine suivie**.

- 8 (ou 4) temps avant le cue : « groupe, nom du cue, attention » ; sur les trois derniers temps « trois, deux, un » ; au cue « top ». **Dire**, **Décompte** et **Dernier mot** omettent des parties.
- La liste **voix** montre seulement les voix des langues que l'application peut parler (coréen, anglais, japonais, espagnol, allemand, français, chinois), groupées par langue. La première entrée, « Voix système … », est la voix par défaut de la langue de l'interface. Choisir une voix d'une autre langue fait passer les annonces dans cette langue (une voix anglaise dit « Lighting, standby », « three, two, one, go »). Les noms de groupe saisis dans la set list sont lus tels quels.
- Sans voix pour la langue, les annonces sont en anglais et la première entrée l'indique. Les voix s'ajoutent dans les réglages de voix du système d'exploitation.
- La **sortie** est un seul appareil et un seul canal pour toutes les annonces. Ce peut être un autre canal de l'appareil utilisé par LTC, mais pas le canal du LTC ; ces canaux portent la mention « utilisé par LTC » et ne peuvent pas être choisis.
- **Clic** sonne à chaque temps pendant le compte ou toujours ; le premier temps de chaque groupe de 4 est plus aigu.
- Le haut-parleur à côté d'un nom de groupe met ce groupe en sourdine. Un groupe est annoncé tant qu'un cue call ouvert l'affiche ; sans cue call ouvert, tous le sont.

### Page web

Avec le visualiseur web activé dans les réglages, les téléphones, tablettes et autres ordinateurs du même réseau ouvrent `http://<cet ordinateur>:<port>/cuecall`. Elle demande d'abord le code d'accès (le même que le visualiseur web) et le mémorise 12 heures ; **Ouvrir dans le navigateur** sur cet ordinateur évite le code. L'engrenage de la page choisit le thème tableau ou couches, les groupes, le grand compte à rebours, le compte des temps et mesures.temps, et ces choix sont gardés dans ce navigateur. Si le navigateur le permet, **Garder l'écran allumé** empêche l'écran de se mettre en veille. Il y a une disposition pour téléphone en portrait. Quand ORVIK ne répond plus pendant 3 s, la page s'assombrit et affiche Hors ligne, et les comptes à rebours restent figés jusqu'à ce qu'il réponde de nouveau.

---

## 12. NETWORK

![NETWORK](images/16-network.png)

1. **État de PRO DJ LINK** — si ORVIK est prêt à recevoir PRO DJ LINK. La présence de CDJ se voit dans la liste des appareils.
2. **Liste des appareils** — numéro, type, modèle et IP de chaque CDJ et DJM vu.
3. **État de TCNet** — si l'interrupteur TCNET est activé et le nom de nœud d'ORVIK.
4. **Liste des nœuds** — ORVIK et les nœuds TCNet vus dans les 10 dernières secondes.
5. **TYPE** — le rôle du nœud : SERVER envoie, CLIENT reçoit ; aussi REPEATER et AUTO. Avec TCNet activé et aucun CLIENT, une note apparaît sous la liste.

### 12.1 Avertissements de configuration

![Avertissement de configuration](images/16b-network-warning.png)

Quand PRO DJ LINK est activé, ORVIK vérifie comment cet ordinateur est connecté. Quand un élément de la configuration empêche les lecteurs et le mixer de l'atteindre, un avertissement apparaît en haut de NETWORK avec la cause et quoi faire ; la barre d'état l'affiche en LINK et l'infobulle de l'interrupteur PRO DJ LINK le nomme. Le rouge signifie que rien ne peut fonctionner sur la liaison ; l'orange est un conseil. Les avertissements commencent 10 s après le démarrage de PRO DJ LINK et ne font que conseiller : ORVIK ne change aucun réglage réseau.

| Avertissement | Quand | Que faire |
| --- | --- | --- |
| Un autre programme utilise des ports PRO DJ LINK | un autre programme occupe les ports PRO DJ LINK (50000–50002) ; il est nommé quand ORVIK peut le savoir | Quittez-le, puis désactivez et réactivez PRO DJ LINK. Causes courantes : rekordbox, un autre ORVIK, AnyDesk, Microsoft Teams pendant un appel, les outils PRO DJ LINK comme Beat Link Trigger. |
| Appareils sur un autre réseau | les lecteurs ou le mixer envoient sur ce câble, mais leurs adresses sont hors du réseau de cet adaptateur (par exemple des appareils en 169.254.x.x auto-attribuées et un adaptateur avec une adresse de routeur) | Réglez l'adaptateur pour obtenir son adresse automatiquement (DHCP) ou donnez-lui une adresse dans la plage des appareils, ou reliez tout au même routeur. |
| Aucun appareil PRO DJ LINK détecté | rien n'est arrivé sur l'adaptateur choisi (sous Windows en détection automatique, sur aucun adaptateur), ou la liaison est muette depuis 15 s | Vérifiez que les lecteurs et le mixer sont allumés, le câble et le switch, et la plage d'adresses. macOS : autorisez ORVIK dans Réglages Système > Confidentialité et sécurité > Réseau local. Windows : un adaptateur sans routeur compte comme réseau public ; autorisez ORVIK aussi sur les réseaux publics. Les autres adaptateurs actifs sont listés, pour que vous puissiez choisir le bon dans les réglages. |
| Deux adaptateurs sur le même réseau | deux adaptateurs de cet ordinateur sont sur le même réseau, les données des morceaux et les demandes de forme d'onde peuvent donc partir par le mauvais | Éteignez ou débranchez l'autre adaptateur, ou placez-le sur un autre réseau. |

---

## 13. OUTPUT

Envoie les valeurs des decks et du mixer à d'autres programmes et appareils en OSC, DMX (Art-Net, sACN) et MIDI. C'est un éditeur de nœuds qui réunit l'ancienne page OSC et le patch DMX d'ART-NET. Les lignes OSC et patchs DMX de la 1.6 sont convertis en nœuds au premier lancement et envoient les mêmes valeurs.

![OUTPUT](images/17-output.png)

### Partie haute

- **Annuler, rétablir** — annule et rétablit les changements de la page : Ctrl+Z (Cmd+Z sur Mac), et Ctrl+Maj+Z ou Ctrl+Y (Cmd+Maj+Z sur Mac).
- **IMPORT, EXPORT** — EXPORT enregistre toute la page (nœuds, sorties DMX, lignes OSC, réglages réseau) dans un fichier ; IMPORT en charge un, et une seule annulation le défait. Quand un fichier activerait des envois, ORVIK liste les destinations et demande d'abord.
- **⋯** — **Historique de sauvegarde auto…** rétablit une copie antérieure des nœuds. [Sauvegarde auto](#historique-de-sauvegarde-auto)
- **OSC** — montre où va l'OSC (adresse:port) ou qu'il est désactivé. Cliquez pour régler la sortie OSC : activée ou non, **Cet ordinateur**, **Diffusion** ou **Adresse IP**, l'IP et le port (7000 par défaut). **Autres cibles OSC (actions de cue)** contient des adresses nommées pour les actions OSC de l'éditeur de cues ; + en ajoute une, × la retire.
- **Réseau Art-Net** — montre l'interface et la cadence DMX, ou qu'il est désactivé. Cliquez pour ce que partagent toutes les sorties DMX : **Art-Net activé (timecode et DMX)**, l'interface DMX (elle peut suivre l'interface du timecode), le port DMX (6454), la cadence DMX (10–60 Hz, 40 par défaut), l'adresse de diffusion utilisée, ArtSync et ArtPollReply. Le port de sortie OSC ne peut pas servir pour Art-Net.
- **Timecode Art-Net** — montre la cadence d'images, ou qu'il est désactivé. Cliquez pour **Envoyer le timecode**, la couche envoyée avec le timecode qui sort en ce moment, l'interface du timecode, la destination (diffusion ou une adresse IP) et le port du timecode. Il faut Art-Net activé dans **Réseau Art-Net**. La cadence d'images est la **Fréquence d'images** de Sortie timecode SMPTE dans les [Réglages](#15-réglages) ; chaque couche s'active avec le bouton ART dans SMPTE OUT.
- **MIDI** — la sortie MIDI des nœuds MIDI CC et MIDI Note. Cliquez pour choisir un appareil. C'est le même port que **Port de sortie MIDI** dans Sortie MIDI Clock des réglages.
- **SCAN** — cherche les appareils Art-Net (ArtPoll), les programmes OSC (mDNS) et les sorties MIDI, et les liste. + à côté d'un appareil Art-Net ajoute son IP aux récepteurs de la première sortie DMX ; + à côté d'un programme OSC l'ajoute aux autres cibles OSC.

### Liste de gauche

Cliquer un élément crée son nœud sur le canevas. Survolez la liste pour une courte explication.

| Groupe | Nœuds |
| --- | --- |
| Destinations | OSC, sortie DMX, MIDI CC, MIDI Note |
| Valeurs : Table canal 1-6 | Fader, VU, Hi, Mid, LoMid, Low, Color, OnAir |
| Valeurs : Table master / effets | Xf, MVU, MVUL, MVUR, BeatFX, BeatFXOn, BeatFXName, BeatFXCh, ColorFXName |
| Valeurs : Platine tempo | BPM, BPMCoarse, BPMFine, Beat, Downbeat, Phase, BarBeat, BarPhase |
| Valeurs : Platine temps / phrase | Pos, Time, Length, Remain, Phrase, PhraseKind, PhrasePos, PhraseBeats |
| Valeurs : Platine état / piste | Loop, Sync, Master, CDJPlay, CDJCue, Deck, Title, Artist, Key |
| Valeurs : Sortie SMPTE | SMPTEA, SMPTEB, SMPTEM, Clock |
| Transformations | Plage, Forme (sin, tri, saw, sq), Inverser, Libre, Format horaire |
| Calcul | Additionner, Soustraire, Multiplier, Diviser, Minimum, Maximum |
| Spécial | Limiter, Seuil, Lisser, Saut de ligne |
| Saisie | Entier, Décimal, Texte |

### Canevas et réglages de droite

Glissez du point de sortie d'un nœud au point d'entrée d'un autre pour les relier ; un câble déposé sur un nœud va à son entrée la plus proche. La valeur qui circule se voit sur le câble. Une valeur peut aller à plusieurs destinations. Un nœud de transformation ou de calcul sans câble, déposé sur un câble, s'y insère. Les valeurs texte (titre, artiste, tonalité) ne peuvent aller qu'en OSC ; un câble de l'une d'elles vers DMX ou MIDI est refusé et la raison est affichée.

- **Sélection** — cliquez un nœud ; glissez sur le canevas vide pour en choisir plusieurs ; Maj+clic ou Ctrl+clic (Cmd+clic sur Mac) en ajoute ou en retire un. Suppr supprime les nœuds sélectionnés.
- **Menu du clic droit** — Couper, Copier, Coller, Dupliquer, Supprimer, Retirer les liaisons, Tout sélectionner, Grouper, Dissocier. Ctrl+G (Cmd+G sur Mac) groupe les nœuds choisis ; avec Maj, il les dissocie. Glissez un groupe par sa bande de nom ; double-cliquez la bande pour le renommer.
- **Déplacement** — les nœuds s'aimantent aux bords et aux centres des autres nœuds ; maintenez Alt pour les placer librement. Maintenez Espace et glissez pour déplacer la vue. Sur un écran tactile, glissez le canevas vide du doigt pour déplacer la vue ; gardez le doigt immobile un instant, puis glissez, pour choisir des nœuds.
- **Problèmes** — un nœud qui ne peut pas envoyer dit pourquoi : non relié, ne peut pas être envoyé ainsi, canal utilisé deux fois, au-delà de la limite, boucle dans les câbles, ou univers utilisé par une autre sortie DMX.

En sélectionnant un nœud, ses réglages apparaissent à droite.

- **Nœuds de valeur** — la valeur et le deck : deck master ou deck 1–6. Beat et Phase peuvent tourner 1, 2, 4, 8 ou 16 fois par temps ; Downbeat, BarBeat et BarPhase plusieurs fois par mesure (avec une forme).
- **OSC** — adresse et type. Les valeurs texte sont envoyées en string ; les nombres en float ou int ; les nombres qui ont aussi une forme texte (Time, Length, BPM, etc.) en float, int ou string. Envoyé seulement au changement, à 60 Hz au plus. Le `/` initial est ajouté s'il manque ; les espaces et `# * , ? [ ] { }` ne sont pas acceptés.
- **Sortie DMX** — **Envoyer cet univers** active la sortie. **Adresse Art-Net** est Net (0–127), Subnet (0–15) et Universe (0–15) ; chaque sortie DMX a besoin de son propre univers. **IP des récepteurs** accepte des adresses séparées par des virgules ou des espaces ; laissé vide, la première sortie DMX envoie aux appareils trouvés par ArtPoll et les autres à l'adresse de diffusion du réseau Art-Net. La première sortie DMX peut aussi envoyer en sACN (**Envoyer aussi en sACN**) ; l'univers, la priorité et les autres réglages sACN sont dans **Sortie sACN** des [Réglages](#15-réglages). Reliez une valeur à **+ Canal** pour lui donner le canal suivant ; cliquez un numéro de canal sur le nœud pour le changer. Les valeurs 0–1 sont envoyées en 0–255.
- **MIDI CC, MIDI Note** — le canal MIDI (1–16) et le numéro de CC ou de note (0–127). Les valeurs 0–1 sont envoyées en 0–127.
- **Plage** — convertit 0–1 en De–À. Un De supérieur à À inverse le sens. BPM traite 20–500 BPM comme 0–1.
- **Forme** — convertit 0–1 en onde sin, tri, saw ou sq, avec un interrupteur Inverser ; **Inverser** est 1 − valeur.
- **Libre** — sur une valeur de temps musical (Beat, Downbeat, Phase, BarBeat, BarPhase), la fait courir seule au tempo du deck entre les signaux de temps du CDJ et sans eux.
- **Format horaire** — choisit les champs (hh, mm, ss, ff) d'une valeur de temps (Time, Length, Remain, SMPTE, Clock). Voir « Format horaire ».
- **Additionner, Soustraire, Multiplier, Diviser, Minimum, Maximum** — prennent autant d'entrées que vous en reliez ; avec une seule entrée, la **Seconde valeur** sert. Faders et niveaux valent 0 à 1, BPM et compteurs restent des nombres. **Additionner** joint aussi des textes : « A » + « B » = « AB ».
- **Limiter** — garde une valeur entre **Bas** et **Haut**. **Seuil** envoie 1 à partir de sa valeur, sinon 0.
- **Lisser** — ralentit une valeur. **Attaque (ms)** est la vitesse à laquelle il suit une montée, **Maintien (ms)** combien de temps il tient le pic quand l'entrée baisse, **Relâchement (ms)** la vitesse à laquelle il redescend ensuite. Plus grand est plus lent ; 0 suit aussitôt. Un nœud Lisser enregistré avant ces trois réglages garde son temps unique dans les deux sens.
- **Saut de ligne** — réunit des valeurs texte sur plusieurs lignes (par exemple titre / artiste).
- **Entier, Décimal, Texte** — une valeur que vous tapez. Un texte ne peut aller qu'en OSC.

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

### Format horaire

Un nœud de format horaire sur une valeur de temps envoie seulement les champs choisis.

| Lettres | Champ |
| --- | --- |
| `hh`, `h` | heures |
| `mm`, `m` | minutes |
| `ss`, `s` | secondes |
| `ff`, `f` | images (SMPTE seulement) |

Deux lettres envoient le champ sur deux chiffres avec zéro devant ; une lettre, tel quel. Plusieurs champs sont joints par `:` (p. ex. `mmss` → `05:08`, `hmmss` → `0:05:08`). Les temps de morceau sans `h` continuent de compter les minutes au-delà de 60. Remain formaté est envoyé sans le `-`. Le code 29,97 drop frame porte `;` avant les images.

---

## 14. SHORTCUT et MAP

Clavier, MIDI, OSC et DMX (Art-Net) pressent les boutons d'ORVIK et changent ses valeurs : les commandes SMPTE OUT des couches A, B et MASTER, et PRO DJ LINK, TCNET et M.VOL dans l'en-tête. Seule la réception se configure ; l'état marche/arrêt d'une commande assignée peut être renvoyé à un appareil MIDI.

![SHORTCUT](images/19-shortcut.png)

### Page SHORTCUT

Les entrées sont à gauche. Chacune a son propre interrupteur **Activé**.

| Section | Contenu |
| --- | --- |
| Clavier | combinaisons de touches, seulement quand la fenêtre d'ORVIK est au premier plan. Activé par défaut. |
| MIDI | chaque appareil MIDI connecté, avec **IN** (l'écouter) et **OUT** (lui renvoyer l'état des commandes assignées, pour les LED du contrôleur). Activé par défaut. |
| OSC | port de réception OSC (7700 par défaut), où écouter (toutes les interfaces, seulement cet ordinateur ou une interface) et les IP autorisées à envoyer. Une liste vide laisse n'importe qui sur le réseau piloter ORVIK : notez les IP sur place. Désactivé par défaut. |
| DMX (Art-Net) | pilotage depuis les canaux d'un univers Art-Net (Net / Subnet / Universe) envoyé par une console lumière. Utilise les mêmes IP autorisées que l'OSC. Pour le partager avec Resolume sur cet ordinateur, envoyez en broadcast depuis la console. Désactivé par défaut. |

**Activer MAP** en haut à droite de la page passe sur DECKS et active MAP.

Le tableau liste toutes les actions, groupées en LAYER A, LAYER B, MASTER et En-tête ; les lignes Source et Pas d’offset se déplient sur leurs actions et montrent combien sont assignées. **Tout** montre toutes les actions, **Assignés seulement** les actions assignées.

- **Touche, MIDI, DMX** — cliquez une cellule, puis appuyez sur une touche ou envoyez du MIDI ou du DMX pour l'assigner. La cellule affiche EN ATTENTE pendant ce temps.
- **Mode MIDI** — l'étiquette d'une cellule MIDI assignée ; cliquez-la pour la changer. Commandes marche/arrêt : **Toggle** bascule à chaque appui, **Piano** est actif seulement tant qu'on maintient (aussi pour les boutons à verrouillage qui envoient 127/0). Valeurs : **Absolute** prend la position du fader ou du bouton, **Relative** sert aux encodeurs sans fin, 1 % par cran.
- **OUT** — les valeurs MIDI renvoyées pour arrêt et marche (0 et 127 par défaut). Un APC mini mk2 a en plus une palette de couleurs et un choix de luminosité ou de clignotement.
- **OSC** — l'adresse OSC fixe de l'action, par exemple `/orvik/smpte/a/ltc`. Cliquez-la pour la copier.
- **×** — retire les assignations de la ligne.

Dans une fenêtre large, un panneau à droite montre **Entrées**, les dernières entrées reçues et leur effet, et, quand l'OSC est activé, les **Règles OSC** : marche/arrêt prend 1 marche, 0 arrêt, sans valeur bascule ; les boutons se déclenchent sans valeur ou avec une valeur non nulle (0 est ignoré) ; les valeurs prennent un float 0–1 (0–100 accepté) ; les sources acceptent aussi une valeur (`/orvik/smpte/a/src 3`).

### MAP

MAP dans la barre latérale (ou **Activer MAP** dans la page SHORTCUT) entre dans le mode d'assignation ; MAP de nouveau ou Échap le quitte. Les commandes assignables sont entourées d'un cadre : en pointillés si elles sont libres, plein avec des puces (K touche, M MIDI, D DMX) si elles sont assignées. Cliquez-en une : la barre du haut montre son nom et son adresse OSC (cliquez pour la copier). Puis appuyez sur une touche ou envoyez du MIDI ou du DMX pour l'assigner. **Effacer** retire ses assignations, **Annuler** arrête l'attente. Les adresses OSC sont fixes et n'ont donc pas besoin d'assignation.

### Touches toujours actives

| Touche | Action |
| --- | --- |
| Ctrl+R (Cmd+R sur Mac) | recharge l'écran. La lecture des decks virtuels s'arrête. |
| Ctrl+Z (Cmd+Z sur Mac) | annuler dans SET LIST et OUTPUT, hors des champs de texte |
| Ctrl+Maj+Z ou Ctrl+Y (Cmd+Maj+Z sur Mac) | rétablir |
| Échap | quitte MAP |
| ⌘M (macOS) | Fenêtre > Placer dans le Dock |
| ⌘W (macOS) | Fenêtre > Fermer : ferme une fenêtre de cue call ; sur la fenêtre principale, quitte ORVIK comme le bouton de fermeture |

---

## 15. Réglages

![Réglages](images/18-settings.png)

SETTINGS dans la barre latérale ouvre la fenêtre des réglages ; cliquez de nouveau pour fermer la fenêtre.

1. **Icônes de section** — cliquez pour aller à cette section.
2. **Sections** — les réglages sont groupés comme suit.
3. **Réglages** — nom à gauche, valeur à droite. Survolez une ligne pour voir sa description.

À chaque ouverture de la fenêtre, les listes d'appareils audio, LTC et MIDI sont relues. Les listes d'interfaces sont relues à chaque ouverture de la liste.

### Langue

| Élément | Description |
| --- | --- |
| Langue | langue de l'interface. Langue du système suit l'ordinateur. English, 한국어, 日本語, Español, Deutsch, Français, 繁體中文. |

### Disposition des decks

| Élément | Description |
| --- | --- |
| Thème de disposition | disposition de l'écran des decks : FLOW, STK, STRIP ou ROW. [6.3](#63-dispositions) |
| Thème de couleur | Sombre, ou Clair (extérieur) pour les endroits lumineux. |
| FPS de dessin UI | nombre de redessins de l'écran par seconde : 60, 30 ou 15. Le baisser utilise moins de CPU. Les cadences d'envoi sont indépendantes. |
| Échelle de l'UI | taille de tout l'écran : 100%, 125% ou 150%. |

### Forme d'onde

| Élément | Description |
| --- | --- |
| Couleur de la forme d’onde | 3 BANDES, RGB ou MONO. Les morceaux sans données 3band sont affichés en RGB. |
| Position de la tête de lecture | où se place la ligne de position dans l'onde détaillée : Centre (Center) ou Gauche (Left 25%). |
| Beatgrid: Aperçu | les repères dessinés sur l'onde globale : Repères de mesure, Repères 1 min, Lignes verticales. |
| Beatgrid: Détail | la grille dessinée sur l'onde détaillée : 1 mesure, Chaque beat, Sous-beats, Lignes verticales. Les couloirs du cue call l'utilisent aussi. |
| Affichage Phrase | comment les phrases (INTRO, CHORUS, etc.) sont affichées sur l'onde : Aucun, Repère de marge (minimal), Noms de phrase (INTRO/CHORUS/OUTRO) ou Cycle de couleur. |
| Style de Marqueur Cue | forme des marques de cue : Chip (carré), Flag (pentagone) ou Stripe (bande). |

### PRO DJ LINK

| Élément | Description |
| --- | --- |
| Interface PRO DJ LINK | interface réseau où sont les CDJ et DJM. Détection automatique choisit le côté où des CDJ sont visibles et montre l'adresse utilisée. Chaque interface est listée avec son nom et son adresse ; celles en 169.254.x.x portent la mention CDJ link-local. Une interface choisie mais absente reste listée comme « absente — fonctionne en auto » et le moteur utilise entre-temps la détection automatique. La changer pendant que des appareils envoient demande confirmation, car la nouvelle liaison interrompt brièvement la sortie ; Annuler garde l'ancienne. |
| État | état de connexion de cette interface. |
| Démarrer PRO DJ LINK automatiquement | se connecte aux CDJ et DJM à l'ouverture d'ORVIK. Activé par défaut. La description de la ligne liste les ports : UDP 50000–50002 et dbserver TCP. Si un autre programme les occupe, NETWORK l'indique. [12.1](#121-avertissements-de-configuration) |

### TCNet

| Élément | Description |
| --- | --- |
| Nom du nœud | nom de cet ordinateur dans TCNet. %% est un numéro automatique ; 8 caractères au plus. |
| Interface TCNet | interface réseau par laquelle TCNet est envoyé. La changer pendant que des nœuds TCNet sont visibles demande confirmation. |
| État | état de connexion de cette interface. |
| Fréquence d'images | cadence d'images du timecode envoyé par TCNet : 24, 25, 29.97 ou 30. |
| Mode TCNet | Auto attend s'il y a un serveur antérieur, Serveur envoie toujours, Client n'envoie jamais. |
| Démarrer TCNet automatiquement | lance la sortie vers Arena à l'ouverture d'ORVIK. Activé par défaut. La description de la ligne liste les ports : UDP 60000–60002. |

### Mode miroir

| Élément | Description |
| --- | --- |
| Fournir un serveur Mirror | permet à ORVIK sur un autre ordinateur de refléter celui-ci (TCP 8878). |
| Miroir d'un autre PC | se connecte automatiquement à un serveur miroir quand cet ordinateur n'a pas de decks. Activé par défaut. |
| Serveur Mirror | le serveur reflété. Actualiser cherche à nouveau ; l'état de la connexion s'affiche à côté. Sur l'ordinateur serveur, autorisez dans le pare-feu les connexions entrantes sur TCP 8878. |

En miroir, MIRROR et l'adresse du serveur remplacent les boutons PRO DJ LINK et TCNET de l'en-tête ; CONNECTING apparaît avant la connexion et à la reconnexion. Un ordinateur en miroir n'envoie pas de TCNet. Cliquer MIRROR ouvre les réglages.

### Visualiseur web

| Élément | Description |
| --- | --- |
| Web Viewer | permet de voir l'écran des decks et la page de cue call depuis des navigateurs du même réseau (lecture seule). |
| Port | port du visualiseur web (8877 par défaut). |
| Interface | interface réseau où le visualiseur web écoute. |
| État | Désactivé, ou En cours et le port. Activé, un code QR, le code d'accès et les adresses apparaissent dessous. |
| API REST | requêtes GET en lecture seule sur le serveur du visualiseur web, avec le même code d'accès et la même session. La description de la ligne liste les chemins sous `/api/v1/` (status, decks, layers, timecode, mixer, outputs ; JSON). Le visualiseur web doit être activé. |
| État de l'API | l'adresse de l'API et le nombre de requêtes, ou la raison pour laquelle elle ne répond pas. |

### Sortie audio

| Élément | Description |
| --- | --- |
| Périphérique de sortie | appareil audio pour les decks virtuels : Par défaut du système ou un appareil. |
| Canal de Sortie | paire de canaux de sortie pour les decks virtuels (1/2, 3/4, etc.). |

### Sortie timecode SMPTE

| Élément | Description |
| --- | --- |
| Fréquence d'images | cadence d'images du timecode LTC, MTC et Art-Net : 23.98, 24, 25, 29.97 ou 30 fps. |
| Compensation de Latence | ms ajoutées au timecode (−5000 à 5000) ; positif avance. Commune à LTC, MTC et Art-Net, pour compenser le retard du récepteur. |
| LTC: Layer A, LTC: Layer B, LTC: MASTER | appareil audio (Aucun ou un appareil), canal et niveau du LTC de chaque couche. Le niveau va de −40 à 0 dBFS, −12 par défaut ; double-cliquez le bouton pour le rétablir. Montez-le si le récepteur ne se cale pas, baissez-le s'il sature. |
| Maintenir le LTC à l'arrêt | quand un deck s'arrête, le LTC continue d'envoyer son image d'arrêt : le récepteur s'arrête aussitôt, et un deck revenu à 0 affiche 00:00:00:00. Désactivé : pas de LTC à l'arrêt. Activé par défaut. |
| MASTER suit la platine maître | avec MASTER sur A ou B, si le master CDJ passe au deck de l'autre couche, MASTER passe aussi à cette couche. Activé par défaut. |
| Garder la platine ON AIR, passer quand elle se tait | avec un DJM, MASTER garde le deck à l'antenne (en lecture, fader ouvert ou ON AIR). S'il s'arrête (0,5 s) ou si son fader descend (2 s), MASTER passe au deck master CDJ s'il est à l'antenne, sinon au deck à l'antenne de l'autre couche. Sans mixer, MASTER suit le bouton MASTER ; un deck MASTER arrêté cède après 0,5 s au deck qui joue sur l'autre couche. Désactivé : le bouton MASTER seul. Activé par défaut. |
| Choisir la platine ON AIR (avec le temps restant) | MASTER choisit le deck qui part à l'antenne d'après son fader, la lecture et le temps restant (comme la disposition FLOW choisit son deck principal), tenu 5 s. Il peut changer avant que le DJ appuie sur MASTER. Il faut un DJM sur le réseau ; sans DJM, MASTER suit le bouton MASTER. Désactivé par défaut. |
| Sortie MTC MIDI | port MIDI pour le MTC. |

### Sortie sACN

| Élément | Description |
| --- | --- |
| Sortie sACN | envoie du sACN (E1.31) avec les canaux de la première sortie DMX de la page OUTPUT. C'est le même interrupteur que **Envoyer aussi en sACN** sur ce nœud. |
| Transport | Multicast ou Unicast. |
| IP unicast | l'adresse du récepteur en Unicast. |
| Interface | interface réseau par laquelle le sACN est envoyé. |
| Univers | l'univers sACN, 1–63999. |
| Priorité | 0–200, 100 par défaut. |
| Nom de la source | le nom affiché par les récepteurs, ORVIK par défaut. |
| État | désactivé, en attente, ou la destination, l'univers, la priorité et les paquets envoyés. |

### Sortie MIDI Clock

| Élément | Description |
| --- | --- |
| Sortie MIDI Clock | envoie la MIDI Clock (24 PPQN) avec Start, Stop, Continue et Song Position Pointer. |
| Source | le tempo suivi : Platine maître, Layer A, Layer B, Couche MASTER ou DECK 1–6. |
| Port de sortie MIDI | le port MIDI de la MIDI Clock, choisi séparément de la Sortie MTC MIDI. Les nœuds MIDI CC et MIDI Note de la page OUTPUT utilisent le même port. |
| Horloge à l'arrêt | garde l'horloge de tempo quand le deck est arrêté. Activé par défaut. |
| État | le deck, le BPM, en marche ou arrêté et les horloges envoyées, ou ce qui manque. |

### Bibliothèque de morceaux

| Élément | Description |
| --- | --- |
| Bibliothèque de morceaux | pour l'édition des cues, garde la forme d'onde, la grille de temps, les phrases et les points de cue des morceaux CDJ joués, et les chemins des fichiers audio. Activé par défaut ; désactivé, rien n'est écrit et l'éditeur de cues n'a pas d'ondes du CDJ. |

### Fichier de réglages

| Élément | Description |
| --- | --- |
| Sauvegarde | **Enregistrer les réglages** écrit les réglages dans un fichier chiffré (.orvikcfg). **Charger des réglages** en charge un après confirmation et redémarre ORVIK. Le fichier ne contient ni les positions de fenêtre, ni l'history, ni la set list, et l'history et la set list de cette session restent. Les fichiers de la 1.6 se chargent aussi ; leurs lignes OSC et patchs DMX sont convertis en nœuds OUTPUT. |
| État initial | **Réinitialisation d'usine** remet tous les réglages à leur valeur par défaut et redémarre ORVIK, après confirmation. L'history et la set list de cette session restent. |

### Info

| Élément | Description |
| --- | --- |
| Version | version actuelle d'ORVIK, marquée Bêta gratuite. |
| Vérifier les mises à jour | activé, cherche une nouvelle version sur GitHub au lancement et toutes les 12 heures. **Vérifier** vérifie tout de suite ; avec une nouvelle version, son numéro et un bouton **Page de téléchargement** apparaissent dessous. |
| Copyright | mentions de copyright d'ORVIK et de JUCE, et le bouton REPORT pour les demandes. |
| Open source | **Fichiers de licence** ouvre le dossier des licences inclus dans l'application (sous Windows, il est extrait dans un dossier temporaire) ; **Licences et code source** ouvre les mentions open source sur la page GitHub d'ORVIK. |

---

## 16. Marques et licences

ORVIK est un outil de compatibilité indépendant. Ce n'est ni le PRO DJ LINK Bridge officiel d'AlphaTheta ni le ShowKontrol de TC Supply, et il n'implique aucune affiliation, parrainage, certification ni approbation d'AlphaTheta, Pioneer DJ, TC Supply ou Resolume.

AlphaTheta, Pioneer DJ, CDJ, DJM, PRO DJ LINK, rekordbox, TC Supply, TCNet, ShowKontrol, Resolume, SMPTE et les autres noms de produits, de technologies et de marques servent à décrire la compatibilité. Les droits sur chaque marque appartiennent à son titulaire. Art-Net™ Designed by and Copyright Artistic Licence.

ORVIK utilise le framework JUCE 9, les composants open source fournis avec lui et les polices. La liste et les textes de licence se trouvent dans la section **Info** de la fenêtre des réglages (**Fichiers de licence**, **Licences et code source**) et dans THIRD_PARTY_NOTICES. Les conditions d'utilisation de l'application se trouvent dans BINARY_LICENSE.

