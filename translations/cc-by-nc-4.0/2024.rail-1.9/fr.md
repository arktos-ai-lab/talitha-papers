> Machine translation (fr) of "Bootstrapping Syntactic Resources from isiZulu to Siswati" by Laurette Marais, Laurette Pretorius, Lionel Clive Posthumus, https://aclanthology.org/2024.rail-1.9/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Bootstrapping ressources syntaxiques de isiZulu à Siswati

Laurette Marais, Laurette Pretorius, Lionel Clive Posthumus

**Affiliations**  
Laurette Marais1, Laurette Pretorius2, Lionel Posthumus3  
1Voice Computing Research group, CSIR  
2Division of Computer Science, Department of Mathematical Sciences, Stellenbosch University  
3CALT@UJ, University of Johannesburg  
, , 

## Résumé

L'isizulu et le siswati sont des langues mutuellement intelligibles qui sont considérées comme sous-dotées malgré leur statut de langues officielles. Néanmoins, les ressources linguistiques numériques et computationnelles disponibles pour l'isiZulu dépassent largement celles pour le siswati, ce qui justifie d'étudier dans quelle mesure les approches d'amorçage peuvent être utilisées pour développer des ressources pour le siswati. Dans cet article, nous présentons le développement d'une grammaire computationnelle et d'une banque d'arbres parallèle, basées sur des descriptions linguistiques parallèles des deux langues.

## Mots-clés

Grammatical Framework, treebanks parallèles, grammaire computationnelle

## 1. Introduction

IsiZulu et Siswati sont des langues bantoues du Sud qui appartiennent au groupe Nguni, et à ce titre sont des langues morphologiquement riches qui possèdent un système de classes nominales qui génère à son tour un accord concordanciel. Les langues Nguni ont une orthographe conjonctive et présentent également une affixation morphophonologique significative, conduisant à de longs tokens pour lesquels l'analyse morphologique est non triviale.

Les langues nguni sont mutuellement intelligibles (Ndhlovu, 2022), et cette caractéristique permet une exploitation dans un contexte de langues sous-dotées. Bien que l'isiZulu soit une langue officielle d'Afrique du Sud et que le siswati soit une langue officielle d'Afrique du Sud et du Royaume d'Eswatini, elles sont toutes deux sous-dotées en ressources, le siswati beaucoup plus que l'isiZulu (Moors et al., 2018).

Les travaux antérieurs de Bosch et coll. (2008) ont montré la faisabilité de l'amorçage d'analyseurs morphologiques à états finis suivant une approche systématique. Dans ce cas, l'isiZulu a servi de point de départ à partir duquel des ressources pour d'autres langues Nguni pouvaient être développées. L'une des principales conclusions de ce travail était que l'amorçage entre les langues Nguni réduit considérablement le temps de développement, ce qui peut être significatif dans le contexte des langues sous-dotées. Une approche de bootstrapping permet également de porter une attention particulière aux différences entre les langues : « En exploitant les correspondances et la parenté linguistique, plus d'efforts peuvent être consacrés aux aspects dans lesquels les langues diffèrent, garantissant des produits finaux de qualité supérieure, tant sur le plan linguistique que computationnel. » (Bosch et al., 2008, p. 85)

Une prochaine étape naturelle serait d'explorer l'application de l'approche bootstrapping au-delà de la morphologie à la syntaxe. Notre point de départ pour ce travail est la grammaire de ressource isiZulu du Grammatical Framework (GF), avec pour objectif principal de bootstraper une grammaire de ressource Siswati. Dans le processus, nous développons une banque d'arbres parallèles à la main, que nous augmentons ensuite en utilisant les grammaires de ressources parallèles pour obtenir une plus grande banque d'arbres semi-synthétique - une première pour Siswati. Nous évaluons les grammaires des ressources en évaluant manuellement un sous-ensemble des données augmentées pour nous assurer que les fonctions des grammaires se comportent comme prévu lorsqu'elles sont combinées de nouvelles manières.

Nous avons basé notre méthodologie de bootstrapping sur un ensemble de deux manuels, l'un en isiZulu et l'autre en Siswati, afin d'assurer une approche systématique et linguistiquement consciente. Même ici, le manuel Siswati (Taljaard et al., 1991) est "en grande partie basé" sur le manuel isiZulu (Taljaard et Bosch, 1988) et présente les deux auteurs du livre isiZulu aux côtés d'un linguiste spécialiste de Siswati. Dans un certain sens, nous nous appuyons sur le "bootstrapping" de descriptions linguistiques de haute qualité de la langue par les linguistes afin de guider une approche bootstrapping systématique et fiable des ressources computationnelles.

## 2. Contexte

Le bootstrapping de grammaires de ressources, en particulier de grammaires de ressources GF, a été réalisé pour diverses langues apparentées, les plus pertinentes étant les travaux sur le Runyankore et le Rukiga par Nabende et al. (2020), ainsi que les travaux sur les langues bantoues du Kenya (Ekegusii, Kikamba et Swahili) par Kituku et al. (2021). En raison du manque de ressources pour ces langues, il n'existe pas de corpus d'évaluation appropriés et ceux-ci doivent faire l'objet d'un développement particulier. Par conséquent, une évaluation complète des grammaires de ressources pour le runyankore et le rukiga n'a pas été rapportée. L'évaluation pour les langues bantoues du Kenya a été axée sur les aspects d'ingénierie logicielle du bootstrapping, sans mention spécifique de l'exactitude finale des grammaires. Les fragments de langue utilisés lors des tests itératifs pendant le développement ont été traduits à partir d'exemples en anglais illustrant le but de chaque fonction dans la grammaire. En termes de couverture, les grammaires de ressources linguistiques bantoues kenyanes ne sont pas aussi matures que la grammaire de ressources isiZulu. Par exemple, dans le dépôt Github de GF, le functor de la langue bantoue kényane ne contient qu'une seule fonction pour construire des phrases verbales, à savoir UseV, qui est utilisée pour les verbes intransitifs. Les grammaires des ressources isiZulu (et maintenant Siswati), en revanche, comprennent 21 fonctions pour construire des phrases verbales, couvrant également les verbes transitifs, la construction réflexive, les constructions copulatives, la modification adverbiale et les verbes avec des compléments de verbe et de phrase.

Par conséquent, bien que des travaux antérieurs de GF existent pour d'autres langues bantoues, il est difficile de fournir une comparaison directe de notre travail à ces autres efforts.

Notre objectif est d'exploiter les ressources linguistiques existantes pour isiZulu et Siswati afin de baser notre bootstrap de la grammaire des ressources Siswati sur une exposition systématique et parallèle des caractéristiques linguistiques des deux langues.

## 3. Comparaison de isiZulu et Siswati

Comme dans toutes les langues bantoues, la structure de l'isiZulu et du siSwati est basée sur deux principes, à savoir la classification nominale (le système des classes nominales) et l'accord entre différentes catégories de mots (le système des accords). (Ce ne sont là que deux caractéristiques remarquables des langues bantoues.)

De manière générale, le nom se compose de deux parties principales, à savoir un préfixe de classe nominale et une racine/radical nominal. De plus, chaque nom appartient à une soi-disant classe nominale en vertu de la forme de son préfixe, également appelée son genre de classe. Cette notion de genre de classe est significative car elle génère un accord grammatical au moyen de ces préfixes de classe, également appelés préfixes de nombre de genre. Ces classes nominales sont numérotées, le système de classes nominales de l'isiZulu et du Siswati étant très similaires.

Un accord est un élément structurel (marqueur d'accord / morphème) qui marque formellement la relation entre un nom et tous les autres mots dans une phrase qui ont une relation sémantico-syntaxique directe avec le nom. L'accord de genre mentionné ci-dessus doit être observé dans toutes les parties de l'énoncé qui sont directement liées au nom. Par conséquent, nous disons que les catégories de mots telles que les verbes, les pronoms, les adjectifs, les relatifs, les possessifs, etc., sont mises en accord (c'est-à-dire grammatical) au moyen de ces accords. Les exemples (1) et (2) montrent une phrase en isiZulu et une phrase en Siswati, respectivement.

p02-01.png

Avant de lister un certain nombre de différences systématiques entre l'isiZulu et le Siswati que nous exploitons dans notre processus de bootstrapping, nous examinons de plus près les exemples (1) et (2). L'unique racine nominale -bhubesi, le radical verbal, le démonstratif de classe 5, l'accord sujet de classe 5, l'accord objet de classe 9, l'accord possessif de classe 9 et le pronom possessif, première personne du singulier, sont identiques. De plus, dans les deux langues, la racine du nom de « vache » est -khomo. Cependant, en isiZulu, la forme de surface de classe 9 est soumise à une règle d'alternance morphophonologique et se réalise comme -komo. Enfin, le morphème futur est -zo en isiZulu et -to en Siswati.

Comme point de départ, d’importantes différences morphophonologiques régulières entre les deux langues peuvent être systématisées comme suit (Mordaunt et al., 2023; Bosch et al., 2008; Taljaard et Bosch, 1988; Taljaard et al., 1991):

1. L'alphabet et l'omission du clic : bien que les deux langues utilisent l'alphabet latin (A-Z), le siSwati omet les lettres Q et X, tandis que dans l'isiZulu /q/ et /x/ représentent des consonnes cliquées. En isiZulu les sons de clic /c/, /q/ et /x/ sont représentés par le son de clic /c/ en Siswati. par exemple, -qina (zul) et -cina (ssw) signifient tous deux 'être dur'.

2. Substitution ou addition de consonnes : Le /z/ qui apparaît souvent dans les racines/radicaux isiZulu et dans les préfixes et accords de classe 8 et 10, est généralement remplacé par /t/ en Siswati. par exemple, -zama (zul) et -tama (ssw) signifient tous deux 'essayer'.

Le /th/ et le /t/ en isiZulu sont généralement réalisés comme /tf/ lorsqu'ils sont suivis de /o/, /u/ et /w/, et comme /ts/ lorsqu'ils sont suivis de /a/, /e/ et /i/ en Siswati. Des exemples sont -thola (zul) et -tfola (ssw), qui signifient 'trouver', et -thatha (zul) et -tsatsa (ssw), qui signifient 'prendre'.

Le /d/ en isiZulu se transforme en /dv/ lorsqu'il est suivi de /o/, /u/ et /w/, et en /dz/ lorsqu'il est suivi de /a/, /e/ et /i/ en Siswati, par exemple -dubula (zul) et -dvubula (ssw), signifiant 'tirer', et -dabula (zul) et -dzabula (ssw), signifiant 'déchirer'.

D'autres différences sont les groupes de consonnes /mp/ et /nk/ en isiZulu qui deviennent /mph/ et /nkh/ en Siswati, par exemple impendulo (zul) et imphendulo (ssw), signifiant 'réponse'.

3. Suppression, ajout et substitution de la voyelle pré-préfixe : Le préfixe de classe nominale de l'isiZulu consiste en une séquence consonne-voyelle (également appelée préfixe de base), précédée d'un soi-disant augment (également appelé pré-préfixe de classe), une voyelle de copie précédente qui remplit différentes fonctions grammaticales, par exemple la définitude et la spécificité, et est sujette à des processus morphophonologiques tels que la suppression et la coalescence vocaliques. En siswati, cet augment n'est présent que dans les classes 1, 3, 4 et 6 et dans la classe 9 (où il précède une consonne nasale). De plus, en classe 6, ce pré-préfixe est /e/ et non /a/. Un exemple est amakati (zul) et emakati (ssw) pour 'chats'.

4. La construction relative et les accords : Alors que la construction relative en isiZulu possède a- comme soi-disant morphème relatif, le morphème relatif en Siswati est la-. Dans les deux langues, le a- et le la- respectivement s'assimilent avec la voyelle du préfixe de base et une coalescence vocaliques a lieu à travers la consonne pour former l'accord relatif. Un exemple est umfana omunye (zul) et umfana lomunye (ssw), issus de a+munye et la+munye, signifiant 'un autre garçon'.

5. Éléments lexicaux : Bien que les deux langues partagent de nombreuses racines/radicaux de noms et de verbes, lexicalement il existe des différences, par exemple -phuza (zul) et -natsa (ssw), signifiant « boire ».

6. Orthographe : En isiZulu, les démonstratifs sont écrits de manière disjonctive par rapport au nom qui suit, tandis qu'en Siswati, le démonstratif de première position (« ceci/ceux-ci ») est écrit de manière conjonctive avec le nom suivant, comme dans l'exemple (1) : leli bhubesi (zul) versus lelibhubesi (ssw), signifiant « ce lion ».

7. L'impératif : Dans les verbes monosyllabiques en isiZulu, les préfixes yi- ou i- sont ajoutés au radical ou le suffixe -na est utilisé pour l'impératif dirigé vers une seule personne. En Siswati -ni est suffixé à la racine du verbe, par exemple Yidla/Idla/Dlana! (zul) et Dlani! (ssw), signifiant « Mange ! », dirigé vers une seule personne.

En résumé, les différences 1 à 3 ci-dessus s'appliquent aux deux langues dans toutes les constructions et les éléments lexicaux. Complémentaire à cette exposition générale, se trouvent les expositions parallèles basées sur la catégorie de mots et la construction grammaticale de Taljaard et Bosch (1988) et de Taljaard et al. (1991), ces deux derniers fournissant des perspectives pratiques orientées vers la grammaire, idéalement adaptées pour une application et une mise en œuvre directes dans le bootstrapping de la grammaire du siswati à partir de la RG isiZulu.

## 4. Grammaire de ressources GF de l'isiZulu

La grammaire de ressources isiZulu (isiZulu RG) utilisée dans ce travail est implémentée dans Grammatical Framework (GF), un framework de grammaire computationnelle pour le développement de grammaires multilingues. Le framework utilise une architecture interlingua, de sorte qu'une grammaire GF se compose d'une syntaxe abstraite et d'une ou plusieurs syntaxes concrètes, une pour chaque langue. Les catégories et les fonctions abstraites sont définies dans la syntaxe abstraite, qui sont mises en œuvre dans les syntaxes concrètes sous forme de catégories de linéarisation et de fonctions de linéarisation. L'exécution de GF permet la linéarisation des arbres de syntaxe abstraite en chaînes de langage naturel, ainsi que l'analyse syntaxique des chaînes de langage naturel en arbres de syntaxe abstraite (Ranta, 2011).

Les grammaires de ressources GF font généralement partie de la Resource Grammar Library (RGL), qui partage une syntaxe abstraite commune et des extensions personnalisées entre plus de 40 langues (Ranta et al., 2020). Les catégories et les fonctions sont de nature syntaxique, avec des catégories pour les noms, les phrases de noms, les verbes, les phases verbales, les phrases adverbiales, les clauses, les phrases, etc., ainsi que des fonctions pour combiner ces catégories en structures arborescentes.

À l'origine, l'intention de la RGL était de servir de bibliothèque logicielle linguistique pour permettre le développement rapide de grammaires spécifiques aux applications (Ranta, 2009). La mise en œuvre des catégories syntaxiques et des fonctions capturerait la morphologie et la syntaxe générales de la langue, qui pourraient ensuite être réutilisées par les grammaires d'application pour des cas d'utilisation spécifiques. Plus récemment, cependant, des tentatives ont été faites pour employer les grammaires à usage général de la RGL en vue d'une analyse syntaxique à large couverture ainsi que pour l'amorçage de treebanks de dépendances universelles (Ranta et al., 2020).

Le modèle RG isiZulu modélise la morphologie et la syntaxe de l'isiZulu via la mise en œuvre de certaines fonctions de la syntaxe abstraite commune RGL, en plus d'un ensemble de fonctions abstraites spécifiques à la langue supplémentaires (Marais et Pretorius, 2023b).

Suivant une approche typique pour la mise en œuvre des langues bantoues, le RG isiZulu modélise la langue au niveau des sous-mots. En bref, cela signifie que les tokens de base de la grammaire ne correspondent pas à des mots orthographiques mais à des segments de sous-mots, qui sont collés ensemble à l'exécution en utilisant le support intégré de l'ingénierie orthographique dans le GF C-runtime (Angelov, 2015). Un exemple de ceci est donné dans la Figure 1, montrant comment les segments de surface de la phrase isiZulu dans l'exemple (1) dans la Section 3 sont produits par différentes fonctions dans le RG isiZulu. Nous en dirons plus sur la façon dont l'alternance morphophonologique est modélisée dans la Section 6.3.

p04-01.png

Figure 1 : Arbre de syntaxe GF pour l'exemple (1)

## 5. Méthodologie

Notre méthodologie est illustrée à la Figure 2. Nous avons commencé avec deux ressources (montrées en bleu) et à partir de celles-ci nous avons développé trois nouvelles ressources (montrées en orange). Le RG isiZulu forme la base computationnelle de ce travail, avec l'ensemble des manuels parallèles fournissant les informations linguistiques nécessaires pour développer et évaluer une nouvelle grammaire de ressource Siswati.

Le RG isiZulu a été utilisé jusqu'à présent pour étendre des entrées morphosyntaxiquement complexes dans le Wordnet isiZulu (Marais et Pretorius, 2023a), comme analyseur syntaxique général pour l'isiZulu (Marais et Pretorius, 2023b) et comme mécanisme pour générer des données annotées pour l'entraînement de modèles de segmentation morphologique pour l'isiZulu (Mkhwanazi et Marais, 2024). Nous considérons donc qu'il s'agit d'un modèle mature de l'isiZulu et d'une base appropriée sur laquelle développer des modèles similaires pour les langues apparentées.

Les textes parallèles nous fournissent deux types d'informations, à savoir une exposition linguistique parallèle des deux langues, ainsi que des exemples de phrases parallèles de haute qualité présentant les caractéristiques linguistiques décrites dans les livres. L'exposition linguistique parallèle a servi de base pour le développement du RG Siswati, tandis que les exemples parallèles ont été utilisés pour créer une banque d'arbres de développement parallèle. Ici, le isiZulu RG a été utilisé pour analyser les exemples afin d'accélérer le processus d'obtention d'une représentation arborescente pour chaque paire de phrases parallèles.

Le treebank lui-même a servi de test de régression pendant le développement pour s'assurer que les adaptations pour le siswati produisaient les bonnes linéarisations (chaînes de langage naturel) à partir des arbres, et il a également servi à s'assurer qu'aucune erreur n'était introduite dans le processus de certaines refactorisations superficielles du RG isiZulu afin de minimiser la divergence du code. Nous donnons plus de détails sur ce processus dans la Section 6.

L'évaluation finale a impliqué la création d'une banque d'arbres augmentée basée sur celle utilisée dans le développement. Il a été créé à l'aide de quelques règles de base définissant les modifications d'arbres et appliqué à la banque d'arbres de développement. À partir des arbres nouvellement créés, des linéarisations à la fois dans isiZulu et Siswati ont été générées, et celles-ci ont été évaluées manuellement. Cela garantirait que les adaptations apportées au Siswati sur la base de l'exposé linguistique et évaluées pendant le développement sur le treebank parallèle se généraliseraient à de nouveaux arbres.

p05-01.png

Figure 2 : Méthodologie

## 6. Adapter la grammaire isiZulu à Siswati

## 6.1. Logistique logicielle

La façon la plus naïve d'amorcer un nouveau GF RG à partir d'un GF existant est de faire une copie de tous les fichiers pertinents et de les modifier de manière spécifique. L'exigence GF est que les noms de modules concrets aient la forme 'XY.gf', où X est le nom du module abstrait en cours d'implémentation et Y est un code indiquant la langue spécifique, idéalement basé sur le code ISO à 3 lettres de la langue. Les en-têtes des modules concrets contiennent également ce code, et donc une première étape serait de changer systématiquement les noms des fichiers et des en-têtes. La nouvelle grammaire de ressources commence donc comme une copie exacte de l'original, qui peut être modifiée précisément aux endroits où les deux langues diffèrent.

Bien sûr, la grammaire de la ressource originale peut également être ajoutée ou modifiée pendant que le travail est en cours sur la nouvelle grammaire, ce qui pourrait bientôt entraîner une divergence de code inutile. GF encourage la conception modulaire des grammaires, ainsi que l'utilisation de foncteurs pour modéliser des langues étroitement apparentées selon des principes de génie logiciel solides (Ranta, 2009). Cependant, le bon moment pour functoriser une implémentation parallèle dépend d'une bonne compréhension de la manière dont les similitudes et les différences entre deux ou plusieurs langues doivent être modélisées. Notre intention est d'étendre cette approche d'amorçage aux autres langues nguni et au-delà, et nous avons donc choisi de ne pas implémenter de foncteur pour l'instant, car un foncteur implémenté prématurément pourrait s'avérer être plus un obstacle qu'une aide.

Afin de minimiser la divergence du code suivant une approche d'implémentation purement parallèle, le système de modules de GF a été exploité de sorte que toutes les chaînes dans la grammaire (à l'exception des racines et des radicaux inclus dans les modules de lexique) soient contenues dans les deux principaux modules de ressources, à savoir ResZul.gf et ResSsw.gf. Ces chaînes pouvaient alors être accessibles par d'autres modules exclusivement via des opérations définies dans les modules de ressources. Cela garantirait que les différences au niveau orthographique seraient définies entièrement dans les modules de ressources respectifs, tandis que les différences morphosyntaxiques seraient définies dans les fonctions de linéarisation pertinentes des modules concrets. Les différences peuvent donc être surveillées d'un coup d'œil en utilisant un logiciel qui indique les différences de lignes entre les fichiers, tel que diff.

Le RG isiZulu incluait un certain nombre de modules abstraits personnalisés, modélisant des aspects de l'isiZulu non présents dans la syntaxe abstraite commune. Ces fichiers ont été déplacés dans un dossier nommé 'nguni', afin qu'ils puissent être utilisés par les deux grammaires de ressources.

## 6.2. Adaptation guidée par la linguistique

L'exposition linguistique parallèle des deux manuels a fourni une base pratique et systématique pour adapter la RG Siswati à partir de l'isiZulu. Contrairement à la description des similitudes et des différences résumée à la section 3, les textes parallèles ont fourni une carte indiquant où ces différences se manifestent dans les langues respectives, ce qui a simplifié le processus d'identification des fonctions et des opérations dans les grammaires des ressources. Toutes les constructions du manuel ne sont pas implémentées dans la RG isiZulu : nous avons limité la portée de l'adaptation à ce qui est actuellement stable dans la RG isiZulu, ayant établi qu'elle a déjà été utilisée dans un certain nombre d'applications. Ainsi, nous avons exclu de cette adaptation le mode situationnel, certaines constructions interrogatives, les verbes auxiliaires et les relatifs indirects.

D'après la section 3, il est clair que la morphophonologie jouerait un rôle central dans tout effort d'amorçage. Nous fournissons ensuite une brève description de la manière dont l'alternance morphophonologique est modélisée dans les grammaires de ressources isiZulu et ensuite Siswati.

## 6.3. Alternance morphophonologique dans GF

Dans GF, l'alternance morphophonologique peut être modélisée en définissant des formes alternatives de certains morphèmes et en sélectionnant la forme correcte à utiliser dans un contexte spécifique sur la base d'un ou plusieurs paramètres fournis par le contexte. Ceci est rendu nécessaire par le fait que les chaînes d'une grammaire GF ne peuvent pas être inspectées au moment de l'exécution, seulement au moment de la compilation.

Par exemple, en raison de la fusion des morphèmes, la forme de l'accord possessif dépend du son initial du nom ou du pronom auquel il est préfixé. Un paramètre appelé RInit est utilisé pour suivre cela en temps d'exécution, défini pour distinguer entre les différentes voyelles (avec des valeurs RA à RU, comme le montre la Figure 3) et les consonnes dans leur ensemble (avec la valeur RC). Le tableau contenant l'accord possessif est essentiellement à 2 dimensions, la première dimension représentant les informations d'accord du possédé, tandis que la deuxième dimension représente le son initial du nom ou du pronom du possesseur. La Figure 3 montre comment cela est codé dans un tableau GF.

L'accord est codé comme un paramètre composé dans lequel la première valeur est un constructeur traitant de la personne grammaticale, et les valeurs suivantes traitent du nombre grammatical et du genre de classe le cas échéant. Par exemple, First Sg fait référence à l'accord avec le pronom singulier de la première personne, tandis que Third C3_4 Pl fait référence à l'accord avec les noms pluriels des classes 3 et 4.

Un nombre important d'adaptations à la grammaire de ressources Siswati a consisté à modifier systématiquement les chaînes de caractères contenues dans des tables telles que celles-ci.

## 6.4. Modifications apportées au module de ressources Siswati

Rappelons que les modules de ressources respectifs des grammaires de ressources ont été conçus pour contenir la majorité des différences entre les deux langues en contenant toutes les chaînes utilisées dans la grammaire (à l'exception d'un lexique). Dans cette section, nous discutons des modifications apportées au module ResSsw.gf, sauf indication contraire.

La centralité du système de classes nominales fait des noms un point de départ évident, ce qui est probablement la raison pour laquelle les deux manuels consacrent les premiers chapitres aux noms, à leurs classes et aux préfixes associés. Ceci est traité dans les modules de ressources des RGs en deux opérations principales, nomNoun et locNoun, pour les noms et les noms locativisés. Les opérations de support traitent l'alternance morphophonologique qui se produit lorsque les racines/radicaux des noms sont joints aux préfixes et suffixes pertinents. Ce sont les premières adaptations qui ont été apportées au RG Siswati.

L'attention s'est ensuite portée sur les verbes, en commençant par l'alternance qui se produit au sein de la racine/du radical du verbe, en particulier en ce qui concerne le morphème final du verbe. Ensuite, les divers morphèmes verbaux pré-racine ont été adaptés en modifiant les tables d'accord du sujet et de l'objet, ainsi que les opérations permettant de produire les formes appropriées des marqueurs de temps et du préfixe relatif. Les formes du préfixe réflexif et du suffixe relatif ont également été modifiées.

Ces changements étaient suffisants pour couvrir également la plupart des changements nécessaires pour modéliser correctement les constructions copulatives, bien que des changements supplémentaires aient également été nécessaires pour le marqueur copulatif identificateur et l'accord adjectival. En fait, le préfixe copulatif d'identification n'est pas requis dans la grammaire Siswati, ce qui équivalait à un changement syntaxique qui a été fait dans le module VerbExt. Par exemple, dans isiZulu, la phrase « Le lion est un animal » est exprimée en tant qu'Ibhubesi yisilwane, tandis que dans Siswati, elle est exprimée en tant que Libhubesi silwane (Taljaard et Bosch, 1988; Taljaard et al., 1991).

Les tableaux contenant les pronoms absolutifs, possessifs et les trois séries de pronoms démonstratifs ont également été modifiés, ainsi que les accords possessifs et quantitatifs.

Enfin, les divers préfixes adverbiaux ont été modifiés. Cela a été, peut-être de manière surprenante, l'une des modifications les plus substantielles requises. En isiZulu, l'alternance morphophonologique des préfixes adverbiaux comme nga- et njenga est basée sur le préfixe de classe du nom auquel il est préfixé, tandis qu'en Siswati, l'alternance est basée directement sur la classe à laquelle le nom appartient, indépendamment de la forme de son préfixe. Les changements de sons suivent également un schéma différent en ce qui concerne les classes par rapport à l'isiZulu. Par conséquent, au lieu de modifier les chaînes dans un tableau, la structure des tableaux dans lesquels les préfixes adverbiaux étaient logés a été modifiée, reflétant avec précision cette différence entre les langues.

Les autres modifications syntaxiquement significatives qui ont été mises en œuvre concernent l'impératif, puisque la structure morphosyntaxique des impératifs diffère entre les deux langues en ce qui concerne les radicaux verbaux monosyllabiques et les constructions copulatives. Ces modifications ont été mises en œuvre dans tous les modules contenant des fonctions pour construire des VPs (phrases verbales).

L’aperçu le plus important acquis au cours du processus de bootstrapping d’une langue Nguni à une autre est la centralité d’un modèle transparent et systématique de morphophonologie. Cela a permis de s'assurer que la majorité des changements requis se rapportaient aux chaînes des modules de ressources qui représentent des morphèmes parallèlement à leurs alternatives morphophonologiques, avec très peu de changements nécessitant un changement structurel plus substantiel.

p07-01.png

Figure 3 : Table pour l'accord possessif, paramétrée pour contenir des formes alternatives basées sur le son initial du possesseur

## 7. Création d'une banque d'arbres parallèle

Capturer manuellement des phrases parallèles à partir de manuels scolaires et obtenir des arbres pour les représenter est une tâche fastidieuse et donc coûteuse. Par conséquent, nous avons choisi de sélectionner environ quatre à cinq phrases structurellement dissemblables de chaque chapitre pertinent des manuels parallèles, bien que la capture de toutes les phrases des manuels se poursuive. Dans certains endroits, la même construction linguistique a été illustrée dans les manuels en utilisant plusieurs phrases avec des ordres de mots alternatifs, dont certains n'ont pas été inclus dans le RG isiZulu. Dans de tels cas, nous avons inclus les phrases dont l'ordre des mots est déjà implémenté dans la grammaire de la ressource. Bien qu'il soit en principe possible d'implémenter des fonctions pour des ordres de mots alternatifs, la décision de le faire doit également prendre en compte le coût computationnel associé à une grammaire plus grande et sera considérée à l'avenir, ainsi que la fréquence attendue à laquelle l'ordre de mots alternatif apparaît dans les corpus isiZulu et Siswati. De plus, le but de ce travail était de bootstrapper la grammaire isiZulu existante, que nous considérons comme étant mature. L'inclusion des phrases supplémentaires dans le treebank, ainsi que l'implémentation de fonctions pour les prendre en charge, est considérée comme un travail futur.

## 7.1. Obtention des arbres

Le processus de recherche d'arbres pour représenter les phrases a été quelque peu accéléré en employant l'environnement d'exécution GF comme analyseur syntaxique. Les phrases en isiZulu ont été analysées en utilisant la grammaire des ressources en isiZulu, ainsi qu'un grand lexique en isiZulu. Dans presque tous les cas, l'arbre correct a été sélectionné parmi ceux fournis par le runtime. Dans les cas où les ambiguïtés syntaxiques de la phrase rendaient difficile la sélection parmi un grand nombre d'analyses possibles, l'arbre correct a été développé à la main sur la base du contexte dans lequel il est fourni dans les manuels, ainsi que de sa glosse anglaise. Il a ensuite été linéarisé en isiZulu afin de confirmer son exactitude.

De cette manière, un arbre a été trouvé pour 125 paires de phrases, couvrant les chapitres sur les noms, l'accord concordial dans les verbes, les formes adverbiales, les différents temps du verbe, les pronoms absolus et démonstratifs, les formes copulatives, les relatifs directs, l'énumératif, les numéraux et la forme subjonctive. Bien que cela constituerait, à notre connaissance, le premier banc d'arbres pour Siswati, il est admis qu'il est assez petit. Cependant, contrairement à celle qui serait basée sur un corpus, la banque d'arbres a été conçue spécifiquement pour tester une grande variété de constructions linguistiques et peut donc être considérée comme très représentative des langues. Pour cette raison, il est idéal comme base pour l'évaluation continue d'une grammaire computationnelle pendant le développement.

## 7.2. Support du lexique

Les arbres tels qu'ils ont été développés via l'analyse syntaxique utilisant la RG isiZulu, qui était associée à un grand lexique isiZulu, incluaient des fonctions lexicales basées sur les racines et les radicaux isiZulu. Par exemple, l'arbre utiliserait la fonction theng_V2 pour les arbres dans lesquels le verbe -thenga (acheter) apparaissait. Comme il n'existe pas actuellement de lexique computationnel pour Siswati, les fonctions lexicales requises pour modéliser les phrases de Siswati n'avaient pas encore été développées.

Par conséquent, une base de données lexicale bilingue isiZulu-Siswati a été développée manuellement à partir des phrases de la banque d'arbres. Pour améliorer l'interopérabilité future avec les systèmes multilingues, des noms de fonctions basés sur l'anglais ont été attribués aux entrées. Les informations nécessaires pour dériver des modules lexicaux GF concrets parallèles ont été ajoutées pour l'isiZulu et le siswati, telles que la racine ou le radical pertinent et les informations de classe pour les noms. La taille du lexique est de 190 fonctions, dont 76 sont pour les noms (par ex. student_N) et 89 sont pour les verbes (par ex. come_V). Notre objectif était de développer et d'évaluer les fonctions morphosyntaxiques pour une grammaire de ressources du siswati à partir de l'isiZulu existant, pour laquelle un lexique limité mais représentatif est suffisant. Une ressource essentielle qui doit encore être développée est un grand lexique computationnel de Siswati.

## 8. Évaluation

Au cours du développement, l'évaluation continue s'est appuyée sur la banque d'arbres développée manuellement et a donc continué jusqu'à ce que les tests de régression pour isiZulu et Siswati réussissent. Maintenant, il était temps d'évaluer la capacité de la grammaire à généraliser à des combinaisons non vues de fonctions.

Bien qu'il soit possible d'utiliser la génération aléatoire d'arbres pour l'évaluation, les arbres générés de cette manière sont souvent dénués de sens. Cela limite la valeur de leur évaluation, et confronte également l'évaluateur à une tâche difficile, surtout en cas d'échec : la grammaire a-t-elle rendu incorrectement un arbre significatif ou l'a-t-elle rendu "correctement" de manière nonsensique ? Même la tâche de déterminer si un arbre représente une phrase significative peut être difficile, avec différents types et degrés de combinaisons problématiques de fonctions pouvant survenir. Les faux positifs peuvent également nuire au processus d'évaluation.

Au lieu de cela, afin de tester le RG Siswati, une stratégie d'augmentation a été définie selon laquelle chaque arbre de la banque d'arbres développée manuellement a été modifié en sélectionnant au hasard parmi une liste de modifications possibles. Ceux-ci comprenaient l'échange de temps, de polarité, de nombre, de noms sujets et de pronoms. De cette façon, les mêmes structures linguistiques de base ont été conservées dans le nouvel ensemble de tests, mais le contexte syntaxique dans lequel elles se produisaient a été modifié de manière guidée mais aléatoire.

Cela a conduit à un nouvel ensemble de 125 arbres, chacun avec ses linéarisations en isiZulu et en Siswati produites par les grammaires de ressources respectives. Les linéarisations ont ensuite été évaluées manuellement et les erreurs catégorisées. Le tableau 1 donne le résultat de l'évaluation. Notez que dans tous les cas, des erreurs se sont produites dans les deux langues ou dans aucune, ce qui indique que le bootstrapping lui-même a été entièrement réussi, c'est-à-dire que le faible pourcentage d'erreurs grammaticales a été transféré du RG isiZulu.

La première chose à noter sur les résultats est que l'augmentation inexacte s'est produite pour 14 arbres (environ 11%), souvent en raison de l'utilisation unidiomatique ou non grammaticale d'éléments lexicaux. Apporter de petites modifications aux arbres pouvait placer des mots dans un contexte syntaxique qui était en quelque sorte problématique. Cela souligne que bien que ce type d'augmentation puisse être très puissant, il faut faire attention lors de la conception des règles de modification des arbres pour limiter leur application aux contextes appropriés.

Dans trois cas, de petites inexactitudes dans le treebank parallèle original, provenant des manuels, ont été découvertes, que nous avons nommées erreurs initiales. Tant pour les erreurs d'augmentation que pour les erreurs de départ, la grammaire a tout de même réussi à produire des linéarisations raisonnables, et dans la plupart des cas morphologiquement acceptables, pour les arbres problématiques. Le nombre de véritables erreurs de grammaire s'élève à moins de 2 % du corpus arboré. Il s'agit d'un résultat très encourageant.

## 9. Conclusion

Nous avons présenté un processus d'amorçage pour développer une grammaire de ressources GF du Siswati à partir de la grammaire de ressources existante de l'isiZulu. Pour faciliter le développement et l'évaluation, un ensemble de manuels parallèles a été utilisé, qui avaient eux-mêmes été "bootstrapped" en raison de la similitude des langues. Les textes parallèles fournissaient une base pratique et systémique pour la mise en œuvre des différences connues entre les langues, ainsi qu'un ensemble de phrases parallèles de haute qualité. Ceux-ci ont été utilisés pour développer des banques d'arbres parallèles manuelles et augmentées, qui ont été utilisées pendant le développement et l'évaluation.

Notre travail confirme la faisabilité de telles approches de bootstrapping pour les langues étroitement apparentées. La grammaire-ressource isiZulu GF a été développée sur une période de trois ans, tandis que la grammaire-ressource Siswati a pu être développée et évaluée en moins d’un an. De telles réductions d'efforts et de coûts sont particulièrement importantes dans le développement de ressources pour les langues sous-dotées, puisque leur statut de sous-dotation relève souvent autant des ressources humaines et financières que des ressources linguistiques.

Nous avons l'intention d'explorer un certain nombre de pistes pour la poursuite des travaux. Un ensemble affiné de règles de modification d'arbres pourrait être utilisé pour augmenter davantage le corpus arboré parallèle développé manuellement, qui à son tour pourrait être converti en un corpus arboré parallèle Universal Dependencies (Kolachina et Ranta, 2019) et utilisé pour amorcer des analyseurs syntaxiques UD pour l'isiZulu et le Siswati. Cela nécessiterait le développement de ressources lexicales améliorées, surtout pour le Siswati. Nous pouvons chercher à explorer la possibilité d'exploiter les différences orthographiques et phonologiques connues, comme discuté dans la section 3, pour permettre ce développement à partir des ressources lexicales isiZulu existantes, en prenant soin de traiter avec précision les différences lexicales.

p09-01.png

Tableau 1 : Résumé des résultats de l’évaluation du banc d’arbres augmenté

Nous avons également l’intention de répéter le processus d’amorçage pour l’isiXhosa (une langue Nguni relativement importante avec environ 8 millions de locuteurs L1) et l’isiNdebele (une langue Nguni relativement petite avec environ 1 million de locuteurs L1), en intégrant les enseignements tirés du développement du RG Siswati. À partir de là, des grammaires de ressources pour d'autres langues bantoues du Sud au-delà du groupe Nguni pourraient être ciblées.

Nous espérons ainsi continuer à nous appuyer sur la recherche linguistique comparative pour développer des ressources linguistiques numériques pour les langues sous-dotées d'Afrique du Sud.

## Notes

1 Les codes de langue en trois lettres pour isiZulu et Siswati sont respectivement zul et ssw.

2 IsiZulu compte le plus grand nombre de locuteurs L1 de toutes les langues (nguni), soit environ 15 millions, tandis que Siswati en compte environ 3 millions.

3 Aussi connu sous son ancien nom officiel Swaziland.

4 Voir le README à l'adresse https://github.com/GrammaticalFramework/gf-rgl/blob/master/src/zulu/README.md

5 https://github.com/LauretteM/gf-bantu-resources

6 https://shorturl.at/pyUX3

7 https://github.com/GrammaticalFramework/gf-rgl

## 10. Références bibliographiques

Krasimir Angelov. 2015. Orthography engineering in Grammatical Framework. In Proceedings of the Grammar Engineering Across Frameworks (GEAF) 2015 Workshop, pages 33-40.

Sonja Bosch, Laurette Pretorius, and Axel Fleisch. 2008. Experimental Bootstrapping of Morphological Analysers for Nguni Languages. Nordic Journal of African Studies, 17(2):23.

Benson Kituku, Wanjiku Nganga, and Lawrence Muchemi. 2021. Leveraging on cross linguistic similarities to reduce grammar development effort for the under-resourced languages: a case of Kenyan Bantu languages. In 2021 International Conference on Information and Communication Technology for Development for Africa (ICT4DA), pages 83-88. IEEE.

Prasanth Kolachina and Aarne Ranta. 2019. Bootstrapping ud treebanks for delexicalized parsing. In Proceedings of the 22nd Nordic Conference on Computational Linguistics, pages 15-24.

Laurette Marais and Laurette Pretorius. 2023a. Extending the usage of adjectives in the Zulu AfWN. In Proceedings of the 12th Global Wordnet Conference, pages 303-314, Donostia, Spain.

Laurette Marais and Laurette Pretorius. 2023b. Parsing IsiZulu Text Using Grammatical Framework. In Distributed Computing and Artificial Intelligence, Special Sessions I, 20th International Conference, pages 167-177, Cham. Springer Nature Switzerland.

Sthembiso Mkhwanazi and Laurette Marais. 2024. Generation of segmented isiZulu text. Journal of the Digital Humanities Association of Southern Africa, 5(1).

Carmen Moors, Ilana Wilken, Karen Calteaux, and Tebogo Gumede. 2018. Human language technology audit 2018: analysing the development trends in resource availability in all South African languages. In Proceedings of the Annual Conference of the South African Institute of Computer Scientists and Information Technologists, SAICSIT '18, page 296-304.

Owen G. Mordaunt, Paul A. Williams, and Z.T. Motsa Madikane. 2023. What sets Siswati apart from isiZulu? American International Journal of Humanities and Social Science, 8(1):47-55.

Peter Nabende, David Bamutura, and Peter Ljunglöf. 2020. Towards Computational Resource Grammars for Runyankore and Rukiga. In Proceedings of the 12th Conference on Language Resources and Evaluation (LREC).

Finex Ndhlovu. 2022. Pan-African identities and literacies: The orthographic harmonisation debate revisited. South African Journal of African Languages, 42(2):207-215.

Aarne Ranta. 2009. The GF resource grammar library. Linguistic Issues in Language Technology, 2.

Aarne Ranta. 2011. Grammatical framework: Programming with multilingual grammars, volume 173. CSLI Publications.

Aarne Ranta, Krasimir Angelov, Normunds Gruzitis, and Prasanth Kolachina. 2020. Abstract Syntax as Interlingua: Scaling Up the Grammatical Framework from Controlled Languages to Robust Pipelines. Computational Linguistics, 46(2):425-486.

P.C. Taljaard and S.E. Bosch. 1988. Handbook of IsiZulu. J.L. Van Schaik.

P.C. Taljaard, J.N. Khumalo, and S.E. Bosch. 1991. Handbook of SiSwati. J.L. Van Schaik.
