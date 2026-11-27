> Machine translation (fr) of "EthioMT: Parallel Corpus for Low-resource Ethiopian Languages" by Atnafu Lambebo Tonja, Olga Kolesnikova, Alexander Gelbukh, Jugal Kalita, https://aclanthology.org/2024.rail-1.12/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## EthioMT: Corpus parallèle pour les langues éthiopiennes à faibles ressources

Atnafu Lambebo Tonja, Olga Kolesnikova, Alexander Gelbukh, Jugal Kalita

**Affiliations**  
♣ University of Colorado Colorado Springs, USA

p01-01.png

p01-02.png

## Résumé

Les recherches récentes dans le traitement du langage naturel (NLP) ont atteint des performances impressionnantes dans des tâches telles que la traduction automatique (MT), la classification des nouvelles et la réponse aux questions dans les langues à ressources élevées. Cependant, les performances de la TA laissent beaucoup à désirer pour les langues peu dotées. Cela est dû à la plus petite taille des corpus parallèles disponibles dans ces langues, si de tels corpus sont disponibles. Le TAL dans les langues éthiopiennes souffre des mêmes problèmes en raison de l'indisponibilité de jeux de données publiquement accessibles pour les tâches de TAL, y compris la TA. Pour aider la communauté de recherche et favoriser la recherche sur les langues éthiopiennes, nous présentons EthioMT - un nouveau corpus parallèle pour 15 langues. Nous créons également un nouveau benchmark en collectant un jeu de données pour les langues mieux étudiées en Éthiopie. Nous évaluons le corpus nouvellement collecté et le jeu de données de banc d'essai pour 23 langues éthiopiennes en utilisant des approches de transformeur et d'ajustement fin.

## Mots-clés

Corpus parallèle, EthioMT, Traduction automatique, langue à faibles ressources, langues éthiopiennes

## 1. Introduction

Ces dernières années, grâce aux progrès des approches d'apprentissage profond, tels que le développement des transformeurs (Vaswani et al., 2017), la traduction automatique (TA), une tâche centrale dans le traitement automatique des langues (TAL), a montré des améliorations dramatiques en termes de couverture et de qualité de traduction (Wang et al., 2021). Il est bien connu qu'une condition essentielle pour faire progresser la MT est la disponibilité de corpus parallèles. La disponibilité de corpus parallèles est également nécessaire pour faciliter l'intégration de langues dans des applications de TA comme Google Traduction, Bing et DeepL (Van der Meer, 2019). La majorité des langues dans le monde n'ont pas accès à de tels outils de traduction, car seules quelques langues à ressources élevées ont reçu une attention significative (Tonja et al., 2023b).

La plupart des modèles et méthodes développés pour les langues bien dotées ne fonctionnent pas bien dans les contextes peu dotés (Costa-jussà et al., 2022; Tonja et al., 2023b; King, 2015). Les langues peu dotées ont également souffert des conceptions des technologies du langage (Joshi et al., 2019; Tonja et al., 2022). La création de nouvelles méthodes puissantes pour les applications linguistiques est difficile lorsque les ressources sont limitées et que seule une petite quantité de données, même non étiquetées, est disponible. Le problème est exacerbé lorsqu’il n’existe pas d’ensemble de données parallèle pour des langues spécifiques (Joshi et al., 2020; Ranathunga et al., 2023; Adebara et Abdul-Mageed, 2022).

L'Éthiopie est un pays qui se distingue par sa remarquable diversité culturelle et linguistique, avec plus de 85 langues parlées (Woldemariam, 2007). Seules quelques langues d'Éthiopie ont reçu de l'attention dans le domaine de la recherche en TAL et du développement d'applications. La plupart des langues ont été laissées pour compte en raison de la limitation des ressources (Costa-jussà et al., 2022; Tonja et al., 2023b). Il est difficile de trouver des jeux de données accessibles au public pour les langues éthiopiennes afin de mener des recherches en TAL, car de nombreux chercheurs ne rendent pas leurs jeux de données accessibles au public (Tonja et al., 2023b). L'absence d'ensembles de données et de résultats de référence pour les tâches de TALN, y compris la TA, rend la recherche très difficile pour les nouveaux venus et les parties intéressées. Ceci est évidemment plus difficile pour les langues avec des données limitées sous différentes formes numériques.

Cet article présente EthioMT : un corpus parallèle pour les langues éthiopiennes à faible ressource couplées à l'anglais, ainsi qu'un ensemble de données de référence et des résultats expérimentaux pour 23 langues éthiopiennes. Nos contributions sont les suivantes : (1) Nous créons un nouveau corpus parallèle pour 15 langues éthiopiennes couplées à l'anglais. (2) Nous présentons le premier jeu de données de banc d'essai et les premiers résultats pour les langues éthiopiennes relativement mieux dotées en ressources (amharique, afaan oromo, tigrigna et somali). (3) Nous évaluons la performance MT avec le nouveau corpus et présentons les résultats de référence. (4) Nous mettons à disposition en open-source le corpus parallèle pour favoriser la collaboration et faciliter la recherche et le développement dans les langues éthiopiennes à faible ressource.

## 2. Travaux connexes

Les langues éthiopiennes sont classées comme des langues à ressources limitées en raison de l'indisponibilité des ressources pour les tâches de TAL, y compris la TA (Tonja et al., 2023b). Bien que la TA soit un domaine mieux étudié pour les langues éthiopiennes par rapport à d'autres applications de TAL (Tonja et al., 2023b), seules quelques langues ont reçu une attention adéquate de la part des chercheurs.

Langues étudiées Comparées aux autres langues éthiopiennes, les langues suivantes ont reçu une attention significative de la part des chercheurs. Néanmoins, les corpus recueillis ne se trouvent pas à un seul endroit. Il est difficile de trouver des jeux de données de banc d'essai dans ces langues, ainsi que des jeux de données et des résultats associés pour reproduire et comparer les approches de TA.

Amharique - Des chercheurs ont collecté des jeux de données parallèles et proposé différentes approches de TA pour la traduction amharique-anglais (Kenny, 2018; Teshome et Besacier, 2012; Hadgu et al., 2020; Ashengo et al., 2021; Biadgligne et Smaïli, 2022; Belay et al., 2022; Gezmu et al., 2021b,a; Biadgligne et Smaïli, 2021).

Afaan Oromo - De même, des tentatives ont été faites pour créer des ensembles de données de TA Afaan Oromo-anglais (Meshesha et Solomon, 2018; Solomon et al., 2017; Adugna et Eisele, 2010; Chala et al., 2021; Gemechu et Kanagachidambaresan, 2021).

Tigrinya - Pour la traduction automatique Tigrinya-Anglais, des chercheurs ont tenté de créer des jeux de données parallèles (Tedla et Yamamoto, 2016, 2017 ; Berihu et al., 2020 ; Azath et Kiros, 2020 ; Kidane et al., 2021).

MT multilingue Certains chercheurs ont inclus les langues éthiopiennes avec d'autres langues dans les systèmes de MT multilingues. Lakew et al. (2020) ont collecté et créé des résultats de référence pour cinq langues africaines, y compris celles mentionnées ci-dessus en Éthiopie. Costa-jussà et al. (2022), Goyal et al. (2022) et Fan et al. (2021) ont inclus des langues éthiopiennes dans leurs modèles de TA multilingues et leurs ensembles de test de banc d'essai. Vegi et al. (2022) ont extrait un jeu de données parallèle multilingue pour les langues africaines, y compris l'amharique et l'afaan oromo d'Éthiopie.

D'autres langues Des efforts ont été déployés pour créer et collecter des ensembles de données de MT pour d'autres langues éthiopiennes. Par exemple, Tonja et al. (2021) ont présenté un corpus parallèle pour quatre langues éthiopiennes à faibles ressources (Wolaita, Gamo, Gofa et Dawuro).

## 3. EthioMT

## 3.1. Discussion des langues

Dans cette section, nous énumérons les langues incluses dans le corpus EthioMT. Les langues incluses dans le corpus EthioMT appartiennent aux familles de langues afro-asiatiques et nilo-sahariennes.

## 3.1.1. Famille des langues afro-asiatiques

La famille de langues afro-asiatiques comprend environ 250 langues parlées en Afrique du Nord, dans certaines parties de l'Afrique subsaharienne et au Moyen-Orient. Les langues appartenant à cette famille sont regroupées en six sous-groupes : Berbère, Tchadique, Couchitique, Égyptien, Omotique et Sémitique (Epstein et Kole, 1998). EthioMT contient des langues appartenant aux sous-groupes Omotique, Couchitique et Sémitique.

1) Les langues omotiques sont un groupe de langues parlées dans le sud-ouest de l'Éthiopie, dans la région de la rivière Omo. Le script Ge'ez est utilisé pour écrire certaines des langues omotiques et le script latin pour d'autres (Amha, 2017). Les langues appartenant à ce groupe que nous avons incluses dans EthioMT sont données ci-dessous.

Le basketo est parlé dans le woreda spécial de Basketo de l'État régional du Sud de l'Éthiopie. La langue basketo est aussi appelée Basketto, Baskatta, Mesketo, Misketto, et Basketo-Dokka. Les locuteurs appellent la langue "Masketo", tandis que leurs voisins l'appellent "Basketo". La langue a deux dialectes, Doko (Dokko) et Dollo (Dollo).

Le dawuro est une langue parlée par environ 1,09 million de personnes dans la zone de Dawro, dans la région des peuples du sud-ouest de l'Éthiopie. Il est également connu sous le nom de Dauro, Dawragna, Dawrogna, Ometay, Cullo ou Kullo. La langue a quatre dialectes: Konta, Kucha, Longkhai, et Yawngkon.

Le gamo est parlé par environ 1,63 million de personnes dans la zone Gamo de l'État régional du Sud de l'Éthiopie. Les locuteurs appellent la langue Gamotstso.

Gofa désigne la langue parlée dans la zone de Gofa de l'État régional du Sud de l'Éthiopie, avec environ 392 000 locuteurs.

Le Kafa, également connu sous le nom de Kefa ou Kafi noono, est une langue omotique du Nord parlée en Éthiopie. Il est parlé par environ 830 000 personnes dans la zone de Keffa, dans la région des peuples du sud-ouest de l'Éthiopie. La langue est principalement parlée dans et autour de la ville de Bonga.

Le male est parlé dans la région d'Omo en Éthiopie. Les Male maintiennent vigoureusement leur langue malgré l'exposition aux pressions et aux langues extérieures.

Le shakicho, également connu sous le nom de mocha, shakacho ou shekka, est parlé dans la zone de Sheka, dans le sud-ouest de l'Éthiopie. Il est étroitement lié à Kafa. Des mots empruntés au majang et à l'amharique influencent le vocabulaire de la langue.

La wolaytta est une langue omotique du nord parlée par le peuple welayta dans la zone wolayita en Ethiopie. On estime que 2 millions de personnes parlent le wolaytta.

2) Les langues couchitiques sont parlées principalement dans la Corne de l’Afrique, y compris Djibouti, l’Érythrée, l’Éthiopie, la Somalie et le Kenya (Comrie, 2002). Les langues couchitiques utilisent les scripts latin et guèze. Les langues appartenant à cette famille qui sont incluses dans le groupe EthioMT sont discutées ci-dessous.

L'afar est parlé par le peuple Afar en Éthiopie, en Érythrée et à Djibouti. Il est également connu sous le nom d'Afar Af, Afaraf et Qafar af. Environ 1,5 million de personnes parlent l'Afar, la langue la plus proche du Saho.

Afaan Oromo, également connu sous le nom d'Oromo, est parlé par environ 37 millions de personnes en Éthiopie, au Kenya, en Somalie et en Égypte. C'est la troisième langue la plus parlée en Afrique et la plus grande langue du groupe couchitique en termes de locuteurs. Les Oromos sont le plus grand groupe ethnique en Éthiopie et représentent plus de 40 pour cent de la population.

p03-01.png

Tableau 1 : Langues et détails du jeu de données pour le corpus EthioMT. Il indique les langues, les familles de langues, le nombre de locuteurs, le domaine et la taille du jeu de données collecté. Dans la colonne du domaine, Misc indique un corpus mixte collecté à partir de sources religieuses, d'actualités et d'autres sources. Une taille en gras et soulignée indique un jeu de données collecté à partir de différents dépôts et travaux publiés et fusionné en un seul jeu de données pour la langue afin de créer un banc d'essai.

Awngi est une langue couchitique centrale parlée par environ 400 000 personnes dans le nord-ouest de l'Éthiopie. Il est également connu comme Awiya, Awi, Agaw, Agau, Agew, Agow, Awawar et Damot. La plupart des locuteurs vivent dans la zone d'Agew Awi de la région d'Amhara. Awngi est une langue afro-asiatique parlée dans certaines parties de la zone Metekel de la région de Benishangul-Gumuz.

Dashenech est aussi connu comme Dasenech, Daasanech, ou Daasanach. Le peuple Daasanach le parle en Éthiopie, au Soudan du Sud et au Kenya. Les Daasanach vivent principalement dans la vallée de la Basse-Omo, dans le sud-ouest de l'Éthiopie, le long de la rive orientale du lac Turkana au Kenya, et dans certaines parties du Soudan du Sud.

Le hadiya est parlé par le peuple hadiya d'Éthiopie. La langue est également connue sous les noms de hadiyyisa, hadiyigna, adiya, adea, adiye, hadia, hadiya et hadya. Il s'agit d'une langue cushitique de l'Est des hauts plateaux. Le peuple hadiya est un groupe indigène ancien dans la partie sud de l'Éthiopie. Il y a 1,4 million de locuteurs de la langue hadiya, dont 1,25 million la parlent comme langue maternelle.

Le korate est une langue cuscitique orientale des basses terres parlée par le peuple Konso dans le sud-ouest de l'Éthiopie. Il compte environ 500 000 locuteurs natifs. La langue a cinq dialectes : Duuro, Fasha, Karatti, Kholme et Komso. Les deux dialectes principaux sont Fasha et Karatti. Konso est étroitement lié à Dirasha (également connu sous le nom de Gidole). Il est utilisé comme une «langue commerciale» ou lingua franca au-delà de la zone du peuple Konso. Les Konso sont un groupe ethnique couschitique qui vit dans de grandes villes du sud-central de l'Éthiopie.

Sidama, ou Sidaamu Afoo, est une langue couchitique parlée par le peuple Sidama dans le sud de l'Éthiopie. Elle utilise l'alphabet latin. Presque neuf millions de personnes parlent le sidama. C'est la langue officielle de l'État régional national de Sidama (SNRS) et est utilisé comme moyen d'enseignement dans les écoles primaires. Le sidama est une branche de la famille couchitique orientale des hauts plateaux.

Le somali est la langue officielle de la Somalie, parlée par 6,5 millions de personnes. Il est également parlé en Éthiopie, à Djibouti et au Kenya. Le nombre total de locuteurs dans le monde est estimé à près de 22 millions. Sa langue la plus proche est l'oromo, parlée dans certaines parties de l'Éthiopie et du Kenya. D'autres langues apparentées incluent Afar et Saho.

3) Les langues sémitiques appartiennent à une sous-famille de la famille des langues afro-asiatiques, y compris l'hébreu, l'araméen, l'arabe et l'éthiopien. La plupart des écritures utilisées pour écrire les langues sémitiques sont des abjads. Abjad fait référence à un script alphabétique qui omet certaines ou toutes les voyelles. Les langues appartenant à ce groupe que nous étudions sont données ci-dessous.

L'amharique est parlé par les Amhara et d'autres régions en Éthiopie. C'est la deuxième langue sémitique la plus parlée au monde, après l'arabe. L'amharique est la langue officielle de l'Éthiopie et l'a été depuis le 14ème siècle. Il est également parlé dans d'autres pays, dont l'Érythrée, le Canada, les États-Unis et la Suède. L'amharique s'écrit à l'aide de graphèmes appelés fidal, ce qui signifie "écriture", "alphabet", "lettre" ou "caractère".

Ge'ez est une ancienne langue sémitique originaire d'Érythrée et du nord de l'Éthiopie. On pense que Ge'ez a environ 5 000 ans, ce qui le rend plus vieux que l'hébreu et d'autres langues sémitiques du Nord. Les églises orthodoxes et catholiques en Érythrée et en Éthiopie l'utilisent encore comme langue liturgique. Ge'ez s'est éteint en tant que langue naturelle il y a plus de 1000 ans. Il a été écrit dans deux systèmes: un abjad et plus tard un abugida.

Le gurage est parlé par les Gurages dans le centre de l'Éthiopie. Les langues gurages sont écrites à l'aide de l'alphabet guèze, qui est également utilisé pour d'autres langues éthiopiennes. Les langues du Gurage ne sont pas toujours mutuellement intelligibles.

Le tigrinya est parlé par environ 9 millions de personnes, principalement en Érythrée et en Éthiopie. Il est écrit dans le script Ge'ez, qui est également utilisé pour l'amharique, mais la grammaire et l'utilisation de Tigrinya diffère considérablement de l'amharique.

## 3.1.2. Famille de langues nilo-sahariennes

Les langues nilo-sahariennes sont un groupe de langues qui forment l'une des quatre familles de langues sur le continent africain (Dimmendaal et al., 2019). La famille couvre de grandes zones à l'est et au nord du lac Victoria en Afrique de l'Est et s'étend vers l'ouest jusqu'à la vallée du Niger au Mali, en Afrique de l'Ouest (Comrie, 2002). Les langues nilo-sahariennes constituent dix familles linguistiques distinctes et séparées, dont le soudanais oriental.

Les langues soudaniques orientales sont un groupe de dix familles de langues qui constituent une branche de la famille des langues nilo-sahariennes. Les langues soudaniques orientales sont parlées du sud de l'Égypte au nord de la Tanzanie. Les langues utilisées dans notre étude par ce groupe sont données ci-dessous.

Le majang est parlé par le peuple majangir d'Ethiopie. C'est un membre du groupe linguistique surmique, mais c'est le plus isolé du groupe. Il est classé comme faisant partie de la branche soudanaise orientale de la famille des langues nilo-sahariennes. Le peuple Majang vit dans des colonies dispersées dans le sud-ouest de l'Éthiopie. Ils vivent autour des zones urbaines de Tepi et de Mett'i, au sud-ouest de Mizan Teferi et en direction de Gambela.

Murle est parlé par le peuple Murle au Soudan du Sud et en Éthiopie. La langue est également connue sous le nom d'Ajibba, Beir, Merule, Mourle et Murule. La langue murle fait partie de la famille des langues surmiques et comporte trois dialectes : le lotilla, le boma et l'olam. Le peuple Murle compte entre 300 000 et 400 000 personnes. Ils vivent dans le comté de Pibor dans le sud-est du Haut-Nil (Jonglei)

Le Nuer ou Thok Naath est une langue nilotique occidentale parlée par le peuple Nuer du Soudan du Sud et de l'ouest de l'Éthiopie. La langue s'écrit avec un alphabet basé sur le latin, similaire au dinka et à l'atuot. Plus de 900 000 personnes parlent la langue nuer dans les communautés de la diaspora en Afrique de l'Est, en Australie et aux États-Unis.

## 4. Jeu de données

## 4.1 Collecte d'ensembles de données

Nous avons recueilli des ensembles de données pour 16 langues de domaines religieux à partir d'un site Web. En plus de cela, pour l'amharique, l'afaan oromo, le somali et le tigrigna, nous avons collecté des jeux de données accessibles au public (Abate et al., 2019 ; Lakew et al., 2020 ; Vegi et al., 2022) provenant de différents domaines afin de créer un jeu de données de banc d'essai par langue. Pour les langues dawuro, gamo, gofa et wolaita, nous avons utilisé le jeu de données de Tonja et al. (2021) pour créer des résultats de référence pour les modèles affinés. Un robot d'exploration Web a été utilisé pour chaque article afin d'extraire les données bibliques des sites web après avoir identifié la structure des documents web. Des bibliothèques Python telles que requests, expression régulière (RE) et Beautiful Soup (BS) ont été utilisées pour analyser la structure du site web et extraire le contenu de l'article à partir d'une URL donnée.

## 4.2. Alignement des phrases

Après avoir collecté le corpus pour les langues, nous avons aligné chaque phrase des langues éthiopiennes sur une phrase en anglais pour préparer l’ensemble de données pour l’expérience MT. Nous avons suivi la même procédure que Tonja et al. (2023a) pour effectuer l'alignement des phrases.

## 4.3 Prétraitement des ensembles de données

Après avoir aligné les textes des langues éthiopiennes avec leurs traductions équivalentes en anglais, nous avons prétraité le corpus avant de le scinder pour nos expériences. Les étapes de pré-traitement comprenaient la suppression des symboles numériques et des caractères spéciaux, etc. Nous avons également supprimé les phrases parallèles qui contiennent moins de cinq mots. Pour les expériences de référence, nous avons divisé le corpus pré-traité en ensembles d'entraînement, de développement et de test dans le ratio de 70:10:20, respectivement. Le tableau 1 montre des informations détaillées sur les langues sélectionnées, les familles de langues, le domaine et la taille de leur ensemble de données.

## 5. Modèles de référence

Nous avons utilisé les deux approches suivantes pour évaluer l'utilisabilité du corpus nouvellement collecté et notre nouveau jeu de données de banc d'essai pour quatre langues éthiopiennes (amh, orm, som et tir).

Le transformeur de base est un type d'architecture de réseau de neurones introduit pour la première fois dans l'article Attention Is All You Need (Vaswani et al., 2017). L'innovation clé de l'architecture Transformer est le mécanisme d'attention, qui permet au réseau de se concentrer sélectivement sur différentes parties de la séquence d'entrée lors de la réalisation de prédictions. Cela contraste avec les réseaux de neurones récurrents (RNN) traditionnels, qui traitent les entrées séquentiellement et sont sujets au problème du gradient de disparition.

Dans l'architecture du transformeur, plusieurs couches d'auto-attention et des réseaux de neurones artificiels à action directe traitent les éléments de la séquence d'entrée en parallèle. Chaque couche peut être considérée comme un "bloc" qui prend en entrée la sortie de la couche précédente et lui applique ses transformations. Le mécanisme d'auto-attention permet au réseau de peser l'importance de chaque élément dans la séquence d'entrée lors de la réalisation de prédictions. En revanche, les réseaux feed-forward aident à capturer les relations non linéaires entre les composants.

Les transformeurs sont des approches état de l'art largement utilisées dans les tâches de TAL telles que la TA, le résumé automatique et l'analyse de sentiments. Le tableau 3 montre les paramètres configurés pour le modèle de transformeur.

p05-01.png

Tableau 2 : Paramètres utilisés pour l'entraînement du transformeur

L'ajustement fin est le processus consistant à utiliser un modèle de TA pré-entraîné et à l'adapter à une tâche de traduction spécifique, telle que la traduction entre une paire de langues particulière ou dans un domaine spécifique. Le processus de fine-tuning consiste à prendre le modèle pré-entraîné, qui a déjà appris des représentations de mots et de phrases à partir d'un grand corpus de texte, et à l'entraîner sur un jeu de données plus petit d'exemples de tâches spécifiques. Cela implique la mise à jour des paramètres du modèle pré-entraîné pour mieux capturer les modèles et les structures dans la tâche de traduction cible.

Le réglage fin peut être utile dans la traduction automatique (TA) car il permet au modèle pré-entraîné de s'adapter rapidement à une nouvelle tâche sans avoir à entraîner un nouveau modèle à partir de zéro. Cela est particulièrement bénéfique lorsque l'on travaille avec des données limitées ou lorsqu'il est nécessaire de s'adapter rapidement à des exigences de traduction changeantes. Nous avons utilisé M2M100-48, un modèle encodeur-décodeur (seq-to-seq) multilingue entraîné pour la traduction multilingue many-to-many (Fan et al., 2021). Nous avons utilisé un modèle avec 48M paramètres en raison des limitations des ressources informatiques. Nous avons utilisé les paramètres suivants pour ajuster finement le modèle m2m100.

p05-02.png

Tableau 3 : Paramètres utilisés pour le réglage fin de m2m100-48

## 6. Résultats et Discussions

Nous avons évalué les approches ci-dessus dans la traduction bidirectionnelle des langues éthiopiennes vers l'anglais et de l'anglais vers les langues éthiopiennes. Nous avons utilisé les métriques d'évaluation Sacrebleu (Post, 2018) pour évaluer les modèles de traduction. Les tableaux 4 et 5 montrent les résultats de traduction dans les deux sens.

## 6.1. Utilisation de l'anglais comme langue source

Le tableau 4 montre les résultats de traduction de l'anglais vers les langues éthiopiennes. En comparant les résultats des deux approches, nous observons une performance médiocre lors de l'utilisation d'un transformeur plutôt que de l'ajustement fin du modèle m2m100. Comme nous pouvons le constater dans le résultat, la performance du modèle transformer varie également dans les plages de 0,01 - 17,8 spBLEU d'une langue à l'autre avec différentes tailles de corpus. Cela montre qu'un modèle de traduction bilingue entraîné à partir de zéro est peu performant pour l'apprentissage de langues à faibles ressources par rapport à d'autres approches telles que le réglage fin des modèles de traduction multilingue. Le réglage fin du modèle multilingue montre de meilleurs résultats que le modèle construit à partir de zéro pour la traduction de l'anglais vers l'éthiopien. Dans l’approche fine-tuning, nous pouvons également observer une nette différence de score entre les langues avec de plus grands corpus (amh, orm, tir, som) et les autres (par exemple awn, aar, bst, etc.) Cela montre que l'ajustement fin du modèle multilingue fonctionnera bien pour les langues avec les plus grandes (par exemple, orm, amh) tailles de corpus que pour les langues avec de petites (par exemple, awn, bst, etc.) tailles de corpus. Nous pouvons également constater à partir des résultats que les deux approches fonctionnent bien pour les langues avec des textes de domaines mixtes par rapport à un seul domaine (religion).

p06-01.png

Figure 1 : Résultats de la traduction de référence pour les transformateurs et les approches affinées dans les deux sens (de et vers les langues anglaise/éthiopienne)

p06-02.png

Tableau 4 : Résultats de référence de la traduction de l'anglais vers les langues éthiopiennes

p06-03.png

Tableau 5 : Résultats de référence de la traduction des langues éthiopiennes vers l'anglais

## 6.2. Utilisation de l’anglais comme langue cible

Le tableau 5 montre le résultat de la traduction lors de l'utilisation de l'anglais comme langue cible. De même, comme nous pouvons le voir à partir des résultats, le modèle transformer performe mal comparé au modèle affiné lors de la traduction des langues éthiopiennes vers l'anglais. Par rapport au tableau 4, la traduction vers l'anglais montre des améliorations dans le modèle transformeur pour les langues similaires. Nous observons que le modèle affiné montre de meilleurs scores Bleu lors de la traduction vers l'anglais que lors de la traduction vers les langues éthiopiennes. Les résultats montrent que les langues avec de grands ensembles de données ont les performances les plus élevées. Cela montre que les deux modèles montrent des améliorations lors de la traduction de l'éthiopien vers l'anglais, tandis que lors de la traduction de l'anglais vers les langues éthiopiennes, le modèle a du mal avec la traduction.

## 7. Conclusion et travaux futurs

Cet article présente l’EthioMT, un nouveau corpus de MT pour les langues éthiopiennes à faibles ressources jumelées à l’anglais, et discute des expériences de MT avec des résultats.

Nous présentons également un nouvel ensemble de données de référence pour quatre langues éthiopiennes collectées à partir de référentiels publics. Nous avons obtenu des résultats de banc d'essai avec de nouvelles divisions entre un ensemble d'entraînement, un ensemble de validation et un ensemble de test, et évalué le nouveau corpus et le nouveau jeu de données de référence à l'aide d'un transformeur et de modèles de traduction multilingues affinés. Parmi les deux approches, l'ajustement fin du modèle multilingue a surpassé l'approche par transformeur dans les deux directions de traduction.

À l'avenir, nous travaillerons à augmenter les tailles des corpus des langues peu dotées en extrayant du texte à partir de documents scannés et de différentes sources. De plus, nous évaluerons différentes approches de TA pour les langues peu dotées afin d'améliorer les performances.

## Notes

∗ Travail effectué durant un stage à l'Université de Colorado Colorado Springs.

1 https://www.bible.com/

## 8. Références bibliographiques

Andargachew Mekonnen Gezmu, Andreas Nürnberger, and Tesfaye Bayu Bati. 2021a. Extended parallel corpus for amharic-english machine translation. arXiv preprint arXiv:2104.03543.

Andargachew Mekonnen Gezmu, Andreas Nürnberger, and Tesfaye Bayu Bati. 2021b. Neural machine translation for amharic-english translation. In ICAART (1), pages 526-532.

Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky, Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, et al. 2021. Beyond english-centric multilingual machine translation. The Journal of Machine Learning Research, 22(1):4839-4886.

Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz Kaiser, and Illia Polosukhin. 2017. Attention is all you need. Advances in neural information processing systems, 30.

Asmelash Teka Hadgu, Adam Beaudoin, and Abel Aregawi. 2020. Evaluating amharic machine translation. arXiv preprint arXiv:2003.14386.

Atnafu Lambebo Tonja, Christian MaldonadoSifuentes, David Alejandro Mendoza Castillo, Olga Kolesnikova, Noé Castro-Sánchez, Grigori Sidorov, and Alexander Gelbukh. 2023a. Parallel corpus for indigenous language translation: Spanishmazatec and spanish-mixtec. arXiv preprint arXiv:2305.17404.

Atnafu Lambebo Tonja, Michael Melese Woldeyohannis, and Mesay Gemeda Yigezu. 2021. A parallel corpora for bi-directional neural machine translation for low resourced ethiopian languages. In 2021 International Conference on Information and Communication Technology for Development for Africa (ICT4DA), pages 71-76. IEEE.

Atnafu Lambebo Tonja, Olga Kolesnikova, Muhammad Arif, Alexander Gelbukh, and Grigori Sidorov. 2022. Improving neural machine translation for low resource languages using mixed training: The case of ethiopian languages. In Mexican International Conference on Artificial Intelligence, pages 30-40. Springer.

Atnafu Lambebo Tonja, Tadesse Destaw Belay, Israel Abebe Azime, Abinew Ali Ayele, Moges Ahmed Mehamed, Olga Kolesnikova, and Seid Muhie Yimam. 2023b. Natural language processing in ethiopian languages: Current state, challenges, and opportunities. arXiv preprint arXiv:2303.14406.

Azeb Amha. 2017. The omotic language family. Cambridge University Press.

Benjamin Philip King. 2015. Practical Natural Language Processing for Low-Resource Languages. Ph.D. thesis.

Bernard Comrie. 2002. Languages of the world: who speaks what. In An encyclopedia of language, pages 529-543. Routledge.

Dorothy Kenny. 2018. Machine translation. In The Routledge handbook of translation and philosophy, pages 428-445. Routledge.

Ebisa A Gemechu and GR Kanagachidambaresan. 2021. Machine learning approach to english-afaan oromo text-text translation: Using attention based neural machine translation. In 2021 4th International Conference on Computing and Communications Technologies (ICCCT), pages 80-85. IEEE.

Edmund L Epstein and Robert Kole. 1998. The language of African literature. Africa World Press.

Gerrit J Dimmendaal, Colleen Ahland, Angelika Jakobi, and Constance Kutsch Lojenga. 2019. Linguistic features and typologies in languages commonly referred to as 'nilo-saharan'. Cambridge Handbook of African Languages, pages 326-381.

Haifeng Wang, Hua Wu, Zhongjun He, Liang Huang, and Kenneth Ward Church. 2021. Progress in machine translation. Engineering.

Hirut Woldemariam. 2007. The challenges of mothertongue education in ethiopia: The case of north omo area. Language Matters, 38(2):210-235.

Ife Adebara and Muhammad Abdul-Mageed. 2022. Towards afrocentric NLP for African languages: Where we are and where we can go. In Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 3814-3841, Dublin, Ireland. Association for Computational Linguistics.

Lidia Kidane, Sachin Kumar, and Yulia Tsvetkov. 2021. An exploration of data augmentation techniques for improving english to tigrinya translation. arXiv preprint arXiv:2103.16789.

M Azath and Tsegay Kiros. 2020. Statistical machine translator for english to tigrigna translation. Int. J. Sci. Technol. Res, 9(1):2095-2099.

Marta R Costa-jussà, James Cross, Onur Çelebi, Maha Elbayad, Kenneth Heafield, Kevin Heffernan, Elahe Kalbassi, Janice Lam, Daniel Licht, Jean Maillard, et al. 2022. No language left behind: Scaling human-centered machine translation. arXiv preprint arXiv:2207.04672.

Matt Post. 2018. A call for clarity in reporting BLEU scores. In Proceedings of the Third Conference on Machine Translation: Research Papers, pages 186-191, Belgium, Brussels. Association for Computational Linguistics.

Million Meshesha and Yitayew Solomon. 2018. English-afaan oromo statistical machine translation. International Journal of Computational Linguistic (IJCL), 9(1).

Mulu Gebreegziabher Teshome and Laurent Besacier. 2012. Preliminary experiments on english-amharic statistical machine translation. In Spoken Language Technologies for Under-Resourced Languages.

Naman Goyal, Cynthia Gao, Vishrav Chaudhary, Peng-Jen Chen, Guillaume Wenzek, Da Ju, Sanjana Krishnan, Marc'Aurelio Ranzato, Francisco Guzmán, and Angela Fan. 2022. The flores-101 evaluation benchmark for low-resource and multilingual machine translation. Transactions of the Association for Computational Linguistics, 10:522-538.

Pavanpankaj Vegi, J Sivabhavani, Biswajit Paul, Abhinav Mishra, Prashant Banjare, KR Prasanna, and Chitra Viswanathan. 2022. Webcrawl african: A multilingual parallel corpora for african languages. In Proceedings of the Seventh Conference on Machine Translation (WMT), pages 1076-1089.

Pratik Joshi, Christain Barnes, Sebastin Santy, Simran Khanuja, Sanket Shah, Anirudh Srinivasan, Satwik Bhattamishra, Sunayana Sitaram, Monojit Choudhury, and Kalika Bali. 2019. Unsung challenges of building and deploying language technologies for low resource language communities. arXiv preprint arXiv:1912.03457.

Pratik Joshi, Sebastin Santy, Amar Budhiraja, Kalika Bali, and Monojit Choudhury. 2020. The state and fate of linguistic diversity and inclusion in the nlp world. arXiv preprint arXiv:2004.09095.

Sisay Adugna and Andreas Eisele. 2010. English-oromo machine translation: An experiment using a statistical approach. In Proceedings of the Seventh International Conference on Language Resources and Evaluation (LREC'10).

Sisay Chala, Bekele Debisa, Amante Diriba, Silas Getachew, Chala Getu, and Solomon Shiferaw. 2021. Crowdsourcing parallel corpus for english-oromo neural machine translation using community engagement platform. arXiv preprint arXiv:2102.07539.

Solomon Teferra Abate, Michael Melese, Martha Yifiru Tachbelie, Million Meshesha, Solomon Atinafu, Wondwossen Mulugeta, Yaregal Assabie, Hafte Abera, Biniyam Ephrem, Tewodros Gebreselassie, et al. 2019. English-ethiopian languages statistical machine translation. In Proceedings of the 2019 Workshop on Widening NLP, pages 27-30.

Surafel M Lakew, Matteo Negri, and Marco Turchi. 2020. Low resource neural machine translation: A benchmark for five african languages. arXiv preprint arXiv:2003.14402.

Surangika Ranathunga, En-Shiun Annie Lee, Marjana Prifti Skenduli, Ravi Shekhar, Mehreen Alam, and Rishemjit Kaur. 2023. Neural machine translation for low-resource languages: A survey. ACM Computing Surveys, 55(11):1-37.

Tadesse Destaw Belay, Atnafu Lambebo Tonja, Olga Kolesnikova, Seid Muhie Yimam, Abinew Ali Ayele, Silesh Bogale Haile, Grigori Sidorov, and Alexander Gelbukh. 2022. The effect of normalization for bi-directional amharic-english neural machine translation. In 2022 International Conference on Information and Communication Technology for Development for Africa (ICT4DA), pages 84-89. IEEE.

Jaap Van der Meer. 2019. Translation technology–past, present and future. The Bloomsbury companion to language industry studies, pages 285-310.

Yeabsira Asefa Ashengo, Rosa Tsegaye Aga, and Surafel Lemma Abebe. 2021. Context based machine translation with recurrent neural network for english-amharic translation. Machine Translation, 35(1):19-36.

Yemane Tedla and Kazuhide Yamamoto. 2016. The effect of shallow segmentation on english-tigrinya statistical machine translation. In 2016 International Conference on Asian Language Processing (IALP), pages 79-82. IEEE.

Yemane Tedla and Kazuhide Yamamoto. 2017. Morphological segmentation for english-to-tigrinya statistical machinetranslation. Int. J. Asian Lang. Process, 27(2):95-110.

Yitayew Solomon, Million Meshesha, and Wendewesen Endale. 2017. Optimal alignment for bidirectional afaan oromo-english statistical machine translation. vol, 3:73-77.

Yohanens Biadgligne and Kamel Smaïli. 2021. Parallel corpora preparation for english-amharic machine translation. In Advances in Computational Intelligence: 16th International Work-Conference on Artificial Neural Networks, IWANN 2021, Virtual Event, June 16-18, 2021, Proceedings, Part I 16, pages 443-455. Springer.

Yohannes Biadgligne and Kamel Smaïli. 2022. Offline corpus augmentation for english-amharic machine translation. In 2022 5th International Conference on Information and Computer Technologies (ICICT), pages 128-135. IEEE.

Zemicheal Berihu, Gebremariam Mesfin Assres, Mulugeta Atsbaha, and Tor-Morten Grønli. 2020. Enhancing bi-directional english-tigrigna machine translation using hybrid approach. In Norsk IKT-konferanse for forskning og utdanning, 1.
