> Machine translation (fr) of "A Computational Grammar of Ga" by Lars Hellan, https://aclanthology.org/2020.rail-1.7/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Une grammaire computationnelle du Ga

Lars Hellan

**Affiliations**  
Lars Hellan  
Norwegian University of Science and Technology, Norway  


## Résumé

L'article décrit les aspects d'une grammaire computationnelle de style HPSG de la langue ouest-africaine Ga (une langue Kwa parlée dans la région d'Accra au Ghana). En tant que langue du Kwa du bassin de la Volta, le Ga présente de nombreux types d'expressions multiverbes et d'autres modèles de construction particuliers dans le domaine verbal et nominal. L'article met en lumière les caractéristiques théoriques et formelles de la grammaire motivées par ces phénomènes, certaines d'entre elles pouvant être innovantes pour le cadre formel. En tant que grammaire dite profonde de la langue, elle abrite une structure lexicale riche, et nous décrivons les moyens par lesquels la grammaire s'appuie sur les ressources lexicales disponibles auparavant. Nous esquissons un environnement de ressources actuelles dans lequel la grammaire fait partie, et les lignes de recherche et de développement dans lesquelles elle et son environnement peuvent être utilisés.

## Mots-clés

Ga, Kwa, grammaire computationnelle, structures de traits typées, analyse compositionnelle de niveau constructionnel, structures nominales, constructions multiverbales

## 1. Introduction

Le Ga est une langue Kwa parlée dans la région d'Accra au Ghana avec environ 745 000 locuteurs. Les descriptions linguistiques remontent au début des années 1800 (cf. Rask (1828)), et bien que les ressources textuelles numériques soient rares, elle est bien étudiée linguistiquement, et possède certaines ressources avancées telles que le dictionnaire ga-anglais (Dakubu 2009). Le présent article décrit les ressources numériques qui dérivent en grande partie de ce dictionnaire et de son lexique Toolbox sous-jacent. Nous nous concentrons principalement sur une grammaire computationnelle du ga, dont le développement a commencé en 2005, ainsi que sur un lexique de valence, dont le développement a commencé en 2008. Les développements ont été coordonnés, bien que chacun à son propre rythme, et menés conjointement par la professeure Mary Esther Kropp Dakubu et l'auteur jusqu'au décès de la professeure Dakubu en 2016.

Les grammaires computationnelles sont des programmes qui attribuent automatiquement divers types d'analyse aux phrases d'une langue - ils vont des analyseurs syntaxiques morphologiques, qui reconnaissent la catégorie grammaticale (POS) et la structure morphologique des mots, en passant par les analyseurs syntaxiques de dépendance qui reconnaissent les syntagmes syntaxiques et les relations de dépendance entre les mots à l'intérieur d'un syntagme et entre les syntagmes, jusqu'aux analyseurs syntaxiques dits « profonds » qui reconnaissent également les structures lexicales et les propriétés sémantiques des mots et de leurs combinaisons. Les analyseurs syntaxiques profonds reflètent des cadres de grammaire formelle tels que la Grammaire Lexicale Fonctionnelle (en abrégé « LFG », cf. Bresnan (2001)) et la grammaire de structure de phrase orientée tête (en abrégé « HPSG », cf. Pollard et Sag (1994), Copestake (2002)) ; la grammaire présentée suit principalement la HPSG mais avec certains éléments de la LFG ; elle est techniquement développée sur la plateforme LKB décrite dans Copestake (2002).

Les lexiques de valence des verbes sont des lexiques donnant des énumérations concises des cadres de valence de chaque verbe, c'est-à-dire des énumérations des environnements possibles d'un verbe décrits en termes d'éléments dits liés à la valence dans les environnements (suivant la terminologie de Tesnière (1959)). Un point de rencontre de principe entre les lexiques de valence et les grammaires profondes est que le lexique des verbes d'une grammaire profonde aura des informations de valence explicites. De chaque côté on peut ainsi dériver l'autre (et même à son tour effectuer des améliorations cycliques, en profitant des articulations du côté dérivé qui se révèlent utiles aussi de l'autre côté, et vice versa). Dans le cas présent, une fois le lexique de valence établi, il a été importé dans la grammaire.

Les deux types de ressources ont une base solide dans les langues indo-européennes, et on peut nommer divers types d'applications pratiques qu'ils servent. Cependant, il est tout aussi intéressant de voir ce que ces ressources pour le Ga peuvent nous apprendre sur les structures de base et nécessaires de la grammaire et de la valence. Par exemple, dans une grammaire basée sur HPSG, la distinction entre argument (c'est-à-dire lié à la valence) et adjoint (c'est-à-dire non lié à la valence) est de base comme dans les traditions linguistiques des langues indo-européennes, et une question est de savoir si elle peut être maintenue dans une grammaire d'une langue kwa. De même, l'articulation grammaticale de certaines structures sémantiques est assez différente en Ga de ce que l'on attend en langues indo-européennes.

Pour être plus concret, les langues Kwa comme le Ga et l'Akan sont connues pour faire peu usage de prépositions et d'adjectifs, de sorte que les constructions impliquant des noms et des verbes peuvent être considérées comme jouant un rôle plus important que, par exemple, dans les langues indo-européennes. Ainsi, les expressions multiverbes sont connues pour jouer un grand rôle dans ces langues, englobant les constructions de verbes en série (SVC), les complexes de verbes étendus (EVC), qui sont des séquences de préverbes précédant un verbe principal, et les constructions verbiques (ViD), où les syntagmes verbaux jouent un rôle similaire à celui des adverbiaux dans les langues indo-européennes (voir Dakubu 2004a, 2008, Dakubu et al. 2007, Dakubu 2013 pour une analyse de nombreux types de constructions). De telles constructions soulèvent la question de savoir s'il peut y avoir plus d'une tête verbale par phrase; et sinon, si la distinction argument-adjoint est du tout pertinente pour décrire les relations entre les verbes. Un autre reflet de l'absence de prépositions est que la spécification spatiale prend souvent la forme de constructions transitives. De plus, les spécificateurs prénominaux manifestent une complexité bien au-delà de ce que l'on trouve dans les langues indo-européennes. Ces derniers types de construction seront illustrés et analysés dans la section 2. Dans la section 3, nous exemplifions et montrons l'analyse des constructions multiverbales. La section 4 résume le développement du lexique de valence à partir de la source Toolbox, ainsi que les ressources accompagnantes. La section 5 discute des développements possibles ultérieurs des ressources décrites. Les exemples tout au long sont tirés des travaux de Dakubu cités ci-dessus, de l'« Annexe Ga » de Hellan et Dakubu 2010, et de Dakubu (Inédit a). Ce dernier est la présentation du lexique de valence auquel nous ferons référence, avec environ 2000 entrées, où chaque entrée représente un cadre d'un verbe donné. Ainsi, lorsqu'un verbe a n cadres, il sera représenté par n entrées. À chaque entrée est fourni un court exemple, ce qui constitue également un corpus de courtes phrases.

## 2. Complexes nominaux avec noms relationnels et constructions possessives

## 2.1 Exemples

Les complexes nominaux avec des noms relationnels et des constructions possessives sont illustrés dans (1):

p02-patch01.png

Dans chaque phrase, le syntagme nominal complet a pour tête un nom relationnel qui a un spécificateur possessif, et ce spécificateur est coréférentiel avec un pronom (comme préfixe ou indépendant). Sur les 2000 phrases du corpus mentionné, pas moins de 690 ont un objet dont la tête est un nom relationnel, et 100 ont un sujet dont la tête est un nom relationnel, souvent avec une interprétation de partie du corps ou d'identité. Cela témoigne de l'importance de représenter analytiquement les complexes nominaux avec des noms relationnels et des constructions possessives.

## 2.2 Analyse

Un premier volet de la grammaire suit la Matrice HPSG (Bender et al. 2010), illustrée dans Dakubu et al. 2007, tandis que dans une version plus récente, la grammaire est conçue selon l'architecture décrite dans Hellan 2019; les deux utilisent la plateforme LKB, dont le formalisme est un système de Structure de Caractéristiques Typées (TFS). L'information dans un tel système est généralement exposée par des matrices de valeurs d'attributs (AVM), où chaque AVM appartient à un type, et les attributs sont introduits (déclarés) selon les conventions suivantes:

[A] Un type donné introduit le même(s) attribut(s), quel que soit l'environnement dans lequel il est utilisé.

[B] Un attribut donné est déclaré par un seul type (mais se produit avec tous ses sous-types).

Dans un TFS représentant une grammaire, il existe de nombreuses hiérarchies de types, représentant le POS, les temps, les rôles sémantiques, etc. ; certaines de ces hiérarchies n'ont pas d'attributs, tandis que les suivantes en ont. Les types pour les fonctions grammaticales (valeurs de l'attribut "GF") et les actants (participants à la structure d'argument sémantique, représentés par les valeurs de l'attribut "ACTNT") incluent ceux indiqués ci-dessous : les sous-types gramfct déclarent les attributs GF ("SUBJ" et "OBJ") et les sous-types actnt déclarent les attributs de la structure d'argument sémantique ("ACT1" et "ACT2") :

p02-03.png

La manière dont ces attributs se combinent dans une AVM d'une structure transitive, comme dans une phrase telle que John ate the cake, est illustrée en (3) ; la co-numérotation "1" et "2" indique que l'index référentiel du sujet est l'ACT(ant)1 et l'index référentiel de l'objet est l'ACT(ant)2 :

p02-04.png

Alors qu'une structure comme (3) reflétera les caractéristiques constructionnelles d'une phrase comme John ate the cake, une représentation de ce qu'elle signifie reflétera également le contenu des divers mots. Une stratégie de « sémantique du premier tremplin » consiste à simplement placer une représentation du mot lui-même dans un emplacement désigné pour la structure argumentale sémantique, ce qui, pour la phrase en question, signifiera étendre (3) en (4) (modulo le marquage de définitude de l'objet) :

p03-01.png

Pour obtenir cela, chaque mot doit être spécifié lexicalement pour sa contribution sémantique, ainsi que pour une recette indiquant comment il s'intègre par rapport à la structure globale (4). L'utilisation de listes de valence dans la HPSG sert un tel objectif ; pour le cas en question, eat aura ainsi comme spécification lexicale une structure comme (5), où les attributs de liste de valence SPR et COMPS énumèrent les éléments avec lesquels le mot doit se combiner (où l'échec de l'obtention d'éléments appropriés dans la chaîne de mots à analyser signifie que cette structure lexicale n'est pas appropriée pour le processus d'analyse) :

p03-02.png

Un algorithme de parsing est en principe nécessaire si l'on veut considérer une grammaire comme compositionnelle, puisque la compositionnalité réside dans les relations combinatoires entre les constituants, ce qui signifie qu'une grammaire dans son ensemble est compositionnelle si tous les phénomènes à couvrir par celle-ci peuvent être interprétés exclusivement en termes d'opérations combinatoires impliquant toutes les parties des phrases analysées.

On peut noter que le HPSG standard est à cet égard exclusivement une approche d'analyse syntaxique, en ce qu'il n'inclut pas de notions de GF, de sorte qu'une représentation d'analyse sera sans GF et avec les deux listes de valence vides, étant ainsi moins informative que (4). L'ajout de telles notions au formalisme d'analyse syntaxique renforce le formalisme, ce qui peut être indésirable pour d'autres raisons, produisant une situation où l'on choisit entre des formats pour d'autres motifs que purement empiriques. Cependant, en nous tournant vers les domaines choisis de la grammaire du ga à considérer, nous verrons que même du point de vue de l'analyse syntaxique, il peut y avoir des raisons d'utiliser les GF dans le formalisme. Dans (1d), répété :

p03-03.png

nous voulons représenter le sujet comme un syntagme possessif, où le référent de l'ensemble du syntagme est une partie du corps du spécificateur « mi », et ce spécificateur est également identique à l'objet ; en termes de sémantique. La première de ces constellations peut être représentée comme en (6), étiquetée "le sujet est un BodyPart du spécificateur du sujet" (en parlant bien sûr de leurs référents), et la seconde comme en (7), de manière similaire étiquetée "le spécificateur du sujet est Identique à l'objet" :

p03-04.png

p03-05.png

Dans une représentation complète de la phrase, (6) et (7) devraient s'unifier avec la représentation du verbe comme en (8) :

p03-06.png

Cependant, bien que gba "split" soit un verbe transitif, le définir simplement sur le modèle de (5) ne parviendra pas à induire les relations entre le spécificateur du sujet et le sujet et l'objet. Ce qu'il faut, c'est une représentation lexicale capable de "regarder vers le bas" dans le sujet, "voyant" ainsi l'élément qui, par rapport à une liste de valence du nom principal, serait représentable comme la liste "<[SPR]>". Cela représente un modèle de "non-localité" pour lequel la notation de liste de valence n'est pas définie (c'est-à-dire, signifiant spécifier une liste à l'intérieur d'un élément à l'intérieur de la liste "SPR"). Une manière dont nous évitons de violer cette restriction est d'utiliser, au lieu d'une liste intégrée supplémentaire, des attributs GF reflétant la manière dont ils sont utilisés dans (8), de sorte que la spécification lexicale pour gba par rapport au type de cadre en question est (9) :

(9) Entrée lexicale de gba dans (1d):

p04-01.png

Avec un raisonnement similaire pour les autres cas dans (1) et les constructions apparentées, cela démontre l'utilité d'inclure les GF comme construction également dans l'algorithme d'analyse syntaxique. Des cas similaires n'ont pas été prépondérants dans la discussion sur la conception de la version standard de HPSG, et donc le phénomène des complexes nominaux avec des noms relationnels et des constructions possessives peut représenter une motivation pour cet élément de modification de la conception formelle générale, et ainsi une motivation provenant du ga. Il a été adopté dans la grammaire actuelle.

## 3. Expressions multiverbes

Les types d'expressions multiverbes sont bien illustrés dans la littérature, nous nous contenterons donc ici de mentionner deux types et de discuter certains aspects de leur analyse.

## 3.1 Construction de verbes en série (SVC)

Un SVC se présente comme une séquence de n'importe quel nombre de VPs, avec une uniformité pervasive entre les verbes, tant dans leur morphologie que concernant leurs arguments. Les interprétations vont de séquences temporelles d'événements reflétant le séquencement des VP à des combinaisons plus spéciales par paires. (10) est un exemple de ce dernier cas (tiré de Dakubu (non publié a)) :

p04-02.png

Cet SVC possède deux verbes, et comme c'est souvent le cas dans les SVC Ga, les deux avec le sujet exprimé par un clitique ; les sujets sont identiques, et de même les aspects des verbes.

En forme AVM, cela peut être provisoirement exposé comme suit, où les notions 'V1', 'V2' sont des étiquettes standard pour les VPs dans une séquence SVC:

p04-03.png

Nous sommes maintenant confrontés à la question de savoir si le SVC devrait être compté comme multi-tête, ou s'il y a des raisons linguistiques de compter un VP comme tête et l'autre comme autre chose. Les VPs dans les SVC sont généralement trop étroitement intégrés pour être considérés comme des structures de coordination - cf. Hellan et al. (2003) pour une discussion relative aux VPs séquencés temporellement dans les SVC en Akan (souvent appelés 'chaining SVCs), un argument qui peut également s'appliquer à Ga, et surtout pour un cas comme celui-ci où l'interprétation n'est pas celle d'une séquence temporelle. Si ce n'est pas une structure de coordination, une autre possibilité peut être une structure de complémentation: bien que gbele ('ouvert') n'ait pas une signification qui motiverait de compter le VP suivant comme un complément, on pourrait peut-être compter toute la construction comme une unité phraséologique et techniquement compter le premier verbe comme liant le second VP à lui comme une partie fixe. La troisième option est une analyse de la séquence des VPs comme une adjonction entre les VPs ; cela est en général plausible pour les cas de VPs séquencés temporellement où n'importe quel nombre de VPs peut librement se produire ; des structures comme (10) pourraient alors être traitées comme un cas limite de telles structures.

Étant donné que cela est le plus plausible pour les séquences VP 'libres', comment cela peut-il être mis en œuvre formellement, et comment les attributs V1 et V2 dans ce cas seraient-ils introduits ? L'adjonction à des VP, ou leur modification, est communément interprétée comme l'adjoint étant un prédicat de l'événement exprimé par le VP de tête. Ceci sera faux pour le séquençage des VP, puisque le VP adjacent est prédicat de la même entité que le VP principal. Pour exprimer cela, la grammaire doit contenir, en plus de la règle de 'modification d'événement', une règle de modification imposant la coréférence entre les sujets. (12) est une telle règle, égalant l'ACT1 de l'adjoint (« NON-HEAD-DTR ») non pas à l'index d'événement de la tête, mais à l'index de son sujet ; nous indiquons ici aussi l'introduction de « V1 » et « V2 ».

(12) Head-Modifier rule II (partial formlation)

p05-01.png

Ce schéma de règle s'appliquera récursivement lorsqu'il y aura plus de deux VPs.

Le statut motivé d'une telle règle de modification est à nouveau un aspect dans lequel le ga et les langues similaires peuvent être considérés comme ajoutant une possibilité formelle aux inventaires formels soutenus jusqu'à présent.

Le modèle de loin le plus courant de «partage d'argument» dans les SVC est l'un des sujets identiques. Dans la littérature, l'identité entre les objets a également été reconnue - comme « partage d'objets » - et même l'identité entre l'objet d'un VP et le sujet du VP suivant, appelée « partage de commutation ». Ceux-ci sont rares en Ga, mais exemplifiés en Akan par des exemples comme (13) :

(13)

« partage commuté » entre l'objet d'un verbe et le sujet du verbe suivant (akan)

p05-02.png

Contrairement au cas ci-dessus, où les deux listes COMPS sont vides au point où deux VP se combinent, il faut ici être en mesure d'indiquer que l'objet du premier VP est identique à l'ACT1 du second VP. Une telle identité est difficile à exprimer si tout ce à quoi on peut se référer dans le premier VP est une liste COMPS vide. Une fois que l'objet est également représenté dans la spécification des GF du premier SV, on dispose toutefois d'un point de référence. Un exemple de partage d'objet en Ga est donné en (16) ci-dessous. Bien que le statut de ces deux modèles impliquant des objets soit un peu controversé, les deux types de construction sont pris en compte dans la grammaire, et peuvent potentiellement fournir une motivation supplémentaire pour inclure les notions de GF dans le formalisme grammatical.

## 3.2 Complexe verbal étendu (EVC) et plus

Pour des descriptions de cette construction en Ga, voir Dakubu (2008), Dakubu et al. (2007), Dakubu (2004a), et en Dangme, voir Dakubu (1987). Le type de construction présente un intérêt particulier dans la mesure où les EVC agissent comme des verbes simples relatifs à l'environnement, mais sont divisibles en unités de type mot, à savoir un nombre limité de préverbes (jusqu'à trois d'affilée) avec le verbe principal. Un exemple simple est la phrase Ga (14), où kɛ est un préverbe :

p05-04.png

La valence du verbe principal détermine la valence de l'ensemble par rapport à la proposition qui le contient, son sujet est nécessairement le sujet de tous les préverbes ayant le même rôle, et son marquage d'Aspect, de Modalité et de Polarité est entièrement déterminé de gauche à droite. La plupart des préverbes sont intransitifs, seul kɛ est transitif.

Les CVE, qui sont peut-être elles-mêmes des CVS congelées, peuvent jouer le rôle de verbes aussi dans les CVS, ce qui donne une structure complexe d’enchâssements de verbes. Contrairement aux SVCs, dans les EVCs une analyse de complémentation est raisonnable, puisque un préverbe doit être suivi d'un verbe - un autre préverbe, ou le verbe principal. Ces analyses sont présentées dans Dakubu et al. (2007) et Hellan et Dakubu (2010), et incluses dans le formalisme de la grammaire.

Il faut également mentionner la construction en (15) :

p05-05.png

La phrase tsu mli dans nos ressources est comptée comme une phrase nominale, et agissant comme objet de ba ("viens", qui en plus a des usages intransitif et autres).

## 4. Développement des ressources

L'épine dorsale d'une grammaire computationnelle profonde est son lexique. Le point de départ pour ce lexique dans la grammaire Ga est un projet Toolbox contenant des données du dictionnaire publié à usage général (Dakubu 2009). Le fichier lexique de ce projet se compose de 80 000 lignes de code, avec 7080 entrées, dont 5014 pour les noms, et 935 pour les verbes, dont 722 ont été annotées pour la valence. À partir de ce référentiel Toolbox, un lexique de valence a été créé. Dans un premier temps, le lexique Toolbox a été enrichi d'informations de valence de sorte que chaque entrée reflète un cadre de valence unique ou un environnement multiverbale. Par exemple, pour le verbe su tel qu'utilisé dans la phrase (16), la conception d'une entrée lexicale dans la version modifiée de Toolbox est telle qu'illustrée dans la Figure 1 ; les codes de valence sont inscrits dans l'entrée lexicale selon le style général de « champ » de Toolbox, où les champs marqués \pdl-\pdv représentent l'information flexionnelle du lexème, et les champs \xe, \xg, \xv constituent ensemble une glose linguistique standard avec \xv comme découpage mot-et-morphème, \xg comme glose morphologique et anglaise, et \xe comme traduction libre en anglais ; la valence (ou, comme ici, l'environnement SVC) est encodée sous forme de champs commençant par \sl… ;.

p06-01.png

p06-02.png

Figure 1 Exemple d'entrée de la Ga Toolbox enrichie d'une annotation de valence/construction CL

Un verbe ayant plus d'un cadre de valence, avec une entrée spécifiée par cadre, le verbe ba, par exemple, est représenté par 15 entrées différentes dans cette édition du fichier Toolbox. 547 lexèmes verbaux ont reçu ici au total 2006 entrées annotées de cette manière. Dans la Figure 1, la spécification "\hm 3" indique qu'il s'agit de la troisième entrée avec la forme su.

Les spécifications de code dans les champs \sl sont rassemblées dans une seule chaîne comme dans (17) (en omettant \sl15 et \sl16), lue comme "un SVC où le sujet et l’aspect sont identiques dans tous les VP, le rôle du sujet est agent, la tête du second VP est transitive, l’objet du premier VP est identique à l’objet du second VP, et l’objet du second VP est thème": 12

(17) svSuAspIDALL_suAg-v2tr-v1obIDv2ob-v2obTh

Les étiquettes de ce style ont été développées de manière indépendante sous le nom de formalisme d'étiquetage de construction (CL) (cf. Hellan et Dakubu 2010, Dakubu et Hellan 2016), et l'une des langues auxquelles il a été appliqué était Ga, dans un inventaire de type de construction donné dans Hellan et Dakubu 2010.

La partie verbale de la ressource lexicale a été transformée en une structure de données lexicales du type utilisé dans les grammaires HPSG, composée de 1980 entrées numérotées séquentiellement, la spécification CL indiquant le type lexical/constructionnel auquel appartient l'entrée. La Figure 2 est la contrepartie directe de l'entrée Toolbox de la Figure 1, avec su_1448 comme identifiant d'entrée, et la partie formule

':= …' signifiant « appartient au type de construction '…' ; cette information est énoncée relativement au premier verbe, qui est ainsi, formellement, compté comme une tête :

p06-03.png

Figure 2 Style grammatical correspondant à l'entrée de la figure 1

Bien qu'il s'agisse d'une représentation constructionnelle, une représentation de valence peut être dérivée de manière similaire d'une entrée Toolbox ; ainsi, l'entrée de la Figure 3 ira directement dans le lexique de la grammaire comme entrée de valence de type « transitif avec sujet agentif et objet thème » :

p07-01.png

Figure 3 Entrée de valence en style grammaire Ga

La phrase en (16) est également analysée par la grammaire (en traitant formellement le second VP comme un adjoint, comme indiqué ci-dessus), mais seulement relativement à un cadre transitif pour su correspondant au sens « ensorceler ».

Pour une langue avec de nombreux types de constructions multiverbes, on pourrait essayer d'alimenter des expressions totales comme (5) dans le cadre verbal du premier verbe, et interpréter aussi l'adjunct formel comme "prévu" par le verbe principal, et ainsi séparer le cadre de combinaison technique de ce qui est intuitivement un cadre de valence. Cela, cependant, n'est pas une possibilité que la grammaire actuelle ose explorer.

Pour avoir une idée de la fréquence à laquelle une expression multiverbale peut être associée à un verbe donné, le tableau suivant indique combien de fois les types SVC (comme « sv »), EVC (comme « ev ») et construction Verbid (comme « trVid » ou « intrVid ») figurent parmi les environnements dans lesquels un verbe peut apparaître (par exemple, 14 lexèmes verbaux peuvent apparaître à la fois dans un environnement intransitif, transitif et SVC), selon la ressource construite sur Dakubu (non publié a) :

Tableau 1 Distribution des verbes sur les cadres de valence et les types de construction en Ga

p07-02.png

Calibrer ces types d'environnements multiverbaux dans un lexique ou une ressource grammaticale sera par ailleurs l'une des prochaines étapes intéressantes dans le traitement des ressources numériques pour les langues kwa du bassin de la Volta.

## 5. La grammaire et son environnement

Comme indiqué ci-dessus, une première version de la grammaire du ga suit l'architecture formelle de Pollard et Sag (1994), telle qu'utilisée dans de nombreuses grammaires adoptant la matrice grammaticale comme répertoire commun de structures de traits (Bender et al. (2010)). La version ultérieure, comme illustré ici, a une structure de caractéristiques plus simple, qui vise à accommoder plus directement la variation entre les langues. Un guide de sa structure de caractéristiques est donné dans le pdf 'Building Global Grammar', qui prend comme point de départ une grammaire introductive simple pour l'anglais utilisée comme illustration dans Copestake (2002), et construit progressivement ce qui y est appelé une structure de caractéristiques 'globale', à la fois avec des implémentations et une description. La description peut être consultée à https://typecraft.org/tc2wiki/TypeGram, avec un lien depuis l'Introduction, tandis que l'implémentation est liée depuis http://regdili.hf.ntnu.no:8081/typegramusers/menu, avec des instructions sur le site TypeGram. Les spécifications concernant le Ga se trouvent dans un dépôt commun de caractéristiques couvrant également le germanique (norvégien), le bantou (luganda) et l'éthio-sémitique (kistaninya), comme illustré dans la Figure 5, ici avec une mise en évidence de la grammaire Ga ("GaGram") :

p07-03.png

Figure 5 Architecture des ressources

Parmi les applications entourant le système de grammaire se trouve une procédure d’induction grammaticale à partir d’un texte interlinéaire glossé (IGT), décrite dans Hellan et Beermann (2011, 2014) et Bruland 2011, schématiquement indiquée avec un extrait IGT dans (18):

p07-04.png

p08-01.png

En outre, on peut également explorer les spécifications de la ligne GLOSS pour obtenir des versions « méta-chaînes » de phrases de la langue, dans le cas présent avec

verb-Perf_irule := %prefix (* PERF) word & [ TAM.T perf, Stem < v-lxm > ].

p08-02.png

comme information lexicale induite. Les deux cours sont décrits à https://typecraft.org/tc2wiki/TypeGram. Ce dernier cours instaure une procédure où les modules d'analyse syntaxique et sémantique peuvent être menés séparément de la morphologie. Ainsi, par rapport à une phrase comme (19),

p08-patch01.png

Une telle approche "méta" abordera la construction sous la forme (20a) plutôt que (20b):

p08-04.png

b. Amɛ-wo tsɔne lɛ mli yɛlɛ

Cette méthode maintient une utilisation de 145 phrases au format (20a) servant de suite de tests intermédiaire pour l'ensemble complet des types de valence et de construction décrits dans Hellan et Dakubu (2010).

## 6. Dictionnaire de valence et de construction verbale de Ga

Les ressources du dictionnaire de valence Ga sont représentées dans Dakubu (non publié a) sous forme de conversion à partir de la version enrichie Toolbox décrite dans la section 4, et dans Dakubu (non publié b) sous forme de monographie plus vaste. Le matériel dans Dakubu (non publié a) est également accessible en ligne dans le cadre de MultiVal, une ressource comparative de valence basée sur des lexiques issus de grammaires LKB pour quatre langues.

Le point où cette ressource s'inscrit dans la perspective de la Figure 5 est, par son utilisation de l'étiquetage CL, marquant sa place au sein d'une comparaison interlinguistique compacte des profils de valence des langues, qui sont des énumérations des cadres de valence et de construction réalisés dans une langue. Des comparaisons préliminaires des profils de valence pour le Ga et l'anglais suggèrent qu'ils ont moins de 20 % de leurs cadres de valence en commun (voir, par exemple, Dakubu et Hellan (2016, 2017)).

Une étude des types de valence en Ga peut être reliée à la recherche sur les classes de valence commencée avec Levin 1993, suivie, entre autres, dans VerbNet et dans le Leipzig Valency Classes (LVC) Project, qui sont des tentatives d'associer des points communs dans les modèles morpho-syntaxiques avec des facteurs sémantiques, à la fois internes à la langue (comme Levin et VerbNet) et interlinguistiques (LVC). Établir des classes de valence pour Ga a un lien avec VerbNet dans le but d'atteindre une couverture assez large des verbes de la langue, et avec LVC dans l'établissement d'un point de coordonnée supplémentaire dans la tentative d'atteindre une base typologiquement large pour des généralisations dans ce domaine.

Étant donné les grandes divergences dans les cadres de valence entre le ga et l'anglais, une bonne stratégie pourrait être d'explorer d'abord les points communs entre le ga et d'autres langues africaines de l'Ouest. Dans le cadre présent, une étape naturelle sera par exemple de construire une cartographie entre les informations lexicales Ga et Akan, en supposant que les étiquettes de valence utilisées pour Ga sont également adéquates pour Akan.

## 7. Conclusion

Le point de vue adopté sur la création d'une grammaire computationnelle 'profonde' est qu'elle permet de

(i) par l'exécution, créer une représentation formellement traitable des structures de la langue, où l'exécution contraint à la cohérence :

(ii) réfléchir sur quelles sont les structures essentielles de la grammaire étudiée, et leur relation avec les structures d'autres langues pour lesquelles des investigations formellement cohérentes similaires ont été réalisées;

(iii) transposer efficacement ses résultats dans, ou dans la création de, d'autres ressources.

Non des moindres dans le cadre des langues africaines, une préoccupation supplémentaire est d'identifier des moyens efficaces d'utiliser les ressources linguistiques existantes pour la langue en question, combinés à un cadre formel permettant une représentation adéquate des faits.

Pour les langues disposant de peu de moyens numériques, l’objectif est de pouvoir développer un certain nombre de ressources et d’applications en interaction, mais à une vitesse qui permet de digérer et d’explorer activement les connexions existantes et nouvelles. Voici l'objectif des ressources décrites ici, et nous avons mis en évidence le rôle des ressources lexicales du Prof. Dakubu, la manière dont l'organisation lexicale d'une grammaire peut conduire à d'autres ressources, et nous avons discuté des implications que les structures linguistiques du Ga, et présumément du Kwa du Bassin Volta en général, ont sur les structures formelles d'un cadre grammatical.

## Notes

1 Je suis reconnaissant envers les trois évaluateurs pour leurs commentaires utiles.

2 ISO-639-3 «gaa». Nombre de locuteurs en 2013. https://www.ethnologue.com/country/GH/languages

3 Voir Hellan (2019a) pour plus de détails sur l'introduction des types lexicaux.

4 Pour un aperçu récent concernant Akan et Ga, voir Beermann et Hellan (2018).

5 Par convention, dans la constellation (i), le chemin "V2.V2" peut être lu comme "V3", et de même pour des nombres plus élevés de VPs. (i)

p05-03.png

6 Le schéma sera également pertinent dans les langues indiques et d'autres langues avec des constructions dites co(n)-verbe, où la syntaxe elle-même est marquée comme modification - et donc contrairement au modèle SVC du bassin de la Volta - alors que les identités d'arguments qui peuvent être obtenues correspondent au cas présent.

7 Présenté par Clement Appah lors d'un séminaire à Legon, Ghana.

8 Voir Hellan 2019 pour plus de détails.

9 Cf. Beermann et Hellan (à paraître). Dans la ressource lexicale abordée dans la section 4, cette utilisation de ba a le code "ba_3: v-trobPostp-suAg_obLoc-MOTIONDIRECTED".

10 Avec de tels IGT illustrant les verbes et de plus petites phrases illustrant les noms et autres catégories grammaticales, ces spécifications dans le fichier Toolbox constituent un grand corpus qui, cependant, reste encore à implémenter sur un format de corpus standard ; cette situation peut également s'appliquer aux fichiers Toolbox pour d'autres langues.

11 Il s’agit d’une étiquette de type de situation, un aspect de l’analyse qui n’est pas jusqu’à présent pleinement intégré dans la grammaire ; en tant que ressource d’annotation, cf. Hellan (2020). Il est fréquent d'observer que de nombreux SVCs expriment une "situation unique", ainsi les sens des verbes ne constituent pas des événements séparés mais sont fusionnés en un seul événement. Hellan (2019b) est une tentative de donner une expression formelle à cette notion, en termes d'une couche de représentation sémantique appelée Structure de Situation, dont l'interaction avec la Structure Argumentative Sémantique est décrite dans Hellan (2019a), et dont le codage dans les étiquettes de Type de Situation est décrit dans Hellan (2020).

12 L'identité des objets n'est pas incluse ici dans la partie "IDALL", laissant ouverte la question de savoir s'il s'agit d'un partage d'arguments plutôt que d'une coréférence pronominale. Étant donné que Ga réalise souvent le partage de sujets à travers des pro-clitiques pronominales, une contrepartie à cette stratégie pour les objets pourrait être conçue.

13 Dirigé par Tore Bruland; cf. aussi Hirzel 2006.

14 La branche norvégienne de ce système est distincte de la grammaire matricielle à grande échelle Norsource (Hellan et Bruland 2015), qui est maintenue depuis 2001. Les fichiers de code sont téléchargeables depuis GitHub : https://github.com/Regdili-NTNU/NorSource/tree/master, et il dispose d'une démonstration web à l'adresse http://regdili.hf.ntnu.no:8081/linguisticAce/parse. De plus, cette grammaire utilise les fonctions GF, et ses types lexicaux appartiennent au même système que ce qui est actuellement décrit.

15 Voir Dakubu (2002) sur le système tonal, dont l'impact lexical et syntaxique n'est pas encore reflété dans la grammaire.

16 Cf. Hellan et al (2014). Site en ligne : http://regdili.hf.ntnu.no:8081/multilanguage_valence_demo/multivalence

17 Cf. pour LVC, Malchukov et Comrie (eds) 2015 et http://valpal.info/; pour VerbNet http://verbs.colorado.edu/~mpalmer/projects/verbnet.html.

18 Il est à noter que, bien que la ressource VerbNet soit essentiellement une simple base de connaissances, le système actuel est également utilisé comme partie intégrante d'un analyseur syntaxique.

19 Perspectives sont proposées dans Atoyebi (2015), Schaefer et Egbokhare. (2015), Creissels (2015), dans le cadre de LVC.

20 Cf. Beermann et Hellan (2018) et (à paraître).

## 8. Références bibliographiques

Atoyebi, Joseph Dele Valency classes in Yorùbá. In: Malchukov, A., and B. Comrie (eds), pages 299-326.

Beermann, Dorothee, and Lars Hellan. 2018. West African Serial verb constructions: the case of Akan and Ga. In: Agwuele, Augustine, and Adams Bodomo (eds) The Routledge Handbook of African Linguistics. London and New York: Routledge. Pg. 207-221.

Beermann, D. and L. Hellan. To appear. Enhancing grammar and valence resources for Akan and Ga

Bender, Emily.M., Drellishak, S., Fokkens, A., Poulson, L. and Saleem, S. 2010. Grammar Customization. In Research on Language & Computation, Volume 8, Number 1, 23-72.

Bruland, T. (2011). Creating TypeGram data from TypeCraft. Presentation at India 2011, NTNU.

Copestake, Ann. 2002. Implementing Typed Feature Structure Grammars. CSLI Publications.

Creissels, Denis. 2015. Valency properties of Mandinka verbs. In: Malchukov, A., and B. Comrie (eds) Pages 221-260

Dakubu, M.E. Kropp, 2002. Ga Phonology. Institute of African Studies, Legon, Ghana.

Dakubu, M.E. Kropp, 2004a. The Ga preverb kɛ revisited. In Dakubu and Osam, eds., Studies in the Languages of the Volta Basin 2: 113-134. Legon: Linguistics Dept.

Dakubu, M.E. Kropp, 2004b. Ga clauses without syntactic subjects. Journal of African Languages and Linguistics 25.1: 1-40.

Dakubu, M.E. Kropp, 2008 Ga verb features. In Ameka and Dakubu eds., Aspect and Modality in Kwa Languages. Amsterdam & Philadelphia: John Benjamins Publishing Co. p. 91-134.

Dakubu, M. E. Kropp, 2009. Ga-English Dictionary with English-Ga Index. Accra: Black Mask Publishers

Dakubu, Mary Esther Kropp. Unpublished a. "Ga_verb_dictionary_for_digital_processing". Accessed for download at: https://typecraft.org/tc2wiki/Ga_Valence_Profile

Dakubu, Mary Esther Kropp. Unpublished b. Ga Verbs and their constructions. Monograph ms, Univ. of Ghana.

Dakubu, M.E.K., L. Hellan and D. Beermann. 2007. Verb Sequencing Constraints in Ga: Serial Verb Constructions and the Extended Verb Complex. In St. Müller (ed) Proceedings of the 14 th International Conference on Head-Driven Phrase Structure Grammar. Stanford: CSLI Publications. (/http://cslipublications.stanford.edu/)

Dakubu, M.E. Kropp and Lars Hellan. 2016. Verb Classes and Valency classes in Ga. Paper read at Symposium on West African Languages (SyWAL) II, Vienna.

Dakubu, M.E. Kropp and Lars Hellan. 2017. A labeling system for valency: linguistic coverage and applications. In Hellan, L., Malchukov, A., and Cennamo, M (eds) Contrastive studies in Valency. Amsterdam & Philadelphia: John Benjamins Publ. Co.

Hellan, Lars. 2019a. Construction-Based Compositional Grammar. March 2019. Journal of Logic Language and Information. DOI: 10.1007/s10849-019-09284-5

Hellan, Lars and M.E. Kropp Dakubu. 2010. Identifying verb constructions cross-linguistically. In Studies in the Languages of the Volta Basin 6.3. Legon: Linguistics Department, University of Ghana.

Hellan, Lars, and Dorothee Beermann. 2014. Inducing grammars from IGT. In Z. Vetulani and J. Mariani (eds.) Human Language Technologies as a Challenge for Computer Science and Linguistics. Springer.

Hellan, L., D. Beermann, T. Bruland, M.E.K. Dakubu, and M. Marimon. 2014. MultiVal: Towards a multilingual valence lexicon. In Calzolari, Nicoletta et al. (eds.) Proceedings of the 9th International Conference on Language Resources and Evaluation (LREC 2014), pages 2785-2792, Reykjavík, Iceland. ELRA.

Hellan, Lars and Tore Bruland. 2015. A cluster of applications around a Deep Grammar. In: Vetulani et al. (eds) Proceedings from The Language & Technology Conference (LTC) 2015, Poznan.

Hirzel, Hannes. 2006. "Porting lexicon files from Toolbox into LKB-grammars: A case study for a grammar of Ga." https://typecraft.org/tc2wiki/File:Toolbox-LKB-Link-slides_-_version_4.pdf.

Levin, B. 1993. English Verb Classes and Alternations. Chicago IL: University of Chicago Press.

Malchukov, Andrej L. & Comrie, Bernard (eds.) (2015). Valency classes in the world's languages. Berlin: De Gruyter Mouton. 2015.

Pollard, Carl and Ivan Sag (1994) Head-driven Phrase Structure Grammar. Chicago Univ. Press.

Rask, R. 1828. Vejledning til Akra-Sproget på Kysten Ginea ("Introduction to the Accra language on the Guinea Coast").

Schaefer, R.B, and Francis O. Egbokhare. 2015. Emai valency classes and their alternations. In Malchukov, A. and B. Comrie (eds) 2015. Pp. 261-298.

## 9. Références des ressources linguistiques

https://typecraft.org/tc2wiki/TypeGramhttps://typecraft.org/tc2wiki/Ga_Valence_Profile
