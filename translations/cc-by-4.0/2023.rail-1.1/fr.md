> Machine translation (fr) of "Automatic Spell Checker and Correction for Under-represented Spoken Languages: Case Study on Wolof" by Thierno Ibrahima Cissé, Fatiha Sadat, https://aclanthology.org/2023.rail-1.1/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## Vérification orthographique et correction automatiques pour les langues parlées sous-représentées : étude de cas sur le wolof

Thierno Ibrahima Cissé, Fatiha Sadat

**Affiliations**  
Thierno Ibrahima Cissé  
Fatiha Sadat  
Université du Québec à Montréal  
Université du Québec à Montréal  
  


## Résumé

Cet article présente un correcteur orthographique et un outil de correction spécialement conçus pour le wolof, un langage parlé sous-représenté en Afrique. Le correcteur orthographique proposé tire parti d'une combinaison d'une structure de données trie, de la programmation dynamique et de la distance de Levenshtein pondérée pour générer des suggestions pour les mots mal orthographiés. Nous avons créé de nouvelles ressources linguistiques pour le wolof, telles qu'un lexique et un corpus de mots mal orthographiés, en utilisant une approche semi-automatique qui combine des méthodes d'annotation manuelle et automatique. Malgré les données limitées disponibles pour la langue wolof, les performances du correcteur orthographique ont montré une précision prédictive de 98,31 % et une précision de suggestion de 93,33 %.

Notre objectif principal reste la revitalisation et la préservation du wolof en tant que langue autochtone et langage parlé en Afrique, en soutenant nos efforts pour développer de nouvelles ressources linguistiques. Ce travail représente une contribution précieuse à la croissance des outils et ressources informatiques pour la langue wolof et fournit une base solide pour les futures études dans le domaine de la vérification et de la correction orthographique automatique.

## 1 Introduction

La diversité linguistique dans le traitement du langage naturel (TLN) est essentielle pour permettre la communication entre différents utilisateurs et donc le développement d’outils linguistiques qui serviront l’inclusion de communautés diverses. Plusieurs travaux de recherche sur les langues peu dotées ont vu le jour ; cependant, les langues autochtones parlées et les langues en voie de disparition en Afrique ont été négligées, même si la richesse culturelle et linguistique qu'elles contiennent est inestimable.

Le wolof, une langue populaire en Afrique de l'Ouest parlée par près de 10 millions de personnes dans le monde, est une lingua franca immensément populaire dans les pays du continent africain, tels que le Sénégal, la Gambie et la Mauritanie. Il est le principal dialecte du Sénégal (Diouf et al., 2017), issu de la branche sénégambienne de la grande famille des langues nigero-congolaises. De plus, la langue a été officiellement reconnue en Afrique de l'Ouest (Eberhard et al., 2019). Il n'est donc pas surprenant que l'utilisation intensive du wolof dans la région ait permis de le reconnaître comme étant d'une importance capitale.

Comme plusieurs langues indigènes et parlées d'Afrique, le wolof présente de nombreux défis et enjeux, parmi lesquels le manque de ressources et d'outils linguistiques. De plus, il se distingue par son système tonal distinct qui utilise des voyelles nasales. Le script wolof est composé d'un total de 45 phonèmes consonnes, qui sont subdivisés en catégories (Cissé, 2004). Le tableau 1 illustre les différentes consonnes wolofs et leurs classifications respectives.

p01-01.png

Tableau 1: Consonnes Wolof et Classifications

En outre, le système d'écriture wolof intègre un ensemble de 17 phonèmes voyelles (Cissé, 2004) complétant les 45 phonèmes consonnes déjà existants. Le tableau 2 donne un aperçu des voyelles wolof et de leurs classifications respectives.

À mesure que l'écrit gagne en importance à l'ère du numérique, la correction orthographique automatique joue un rôle essentiel pour garantir que les communications écrites soient à la fois efficaces et exactes. Malgré le manque de standardisation dans leur orthographe, il y a eu une vague d'intérêt pour développer des correcteurs orthographiques pour les langues autochtones africaines en raison de leur importance croissante dans l'éducation, le commerce et la diplomatie. Par conséquent, le développement des correcteurs orthographiques pour ces langues augmente lentement.

p02-01.png

Tableau 2 : Voyelles et classifications du wolof

Notre contribution principale dans cet article est le développement de nouvelles ressources pour la langue wolof. Plus précisément, nous avons créé un correcteur orthographique pour l'autocorrection du texte wolof, ainsi qu'un corpus de mots mal orthographiés qui permettront aux chercheurs d'évaluer les performances des futurs systèmes d'autocorrection. De plus, nous avons développé un lexique wolof qui peut être utilisé pour une gamme de tâches au-delà de l'autocorrection, telles que la traduction automatique neuronale, la reconnaissance automatique de la parole, etc.

Les ressources qui ont été développées au cours de cette étude sont mises à disposition du public sur GitHub, permettant ainsi une diffusion plus large et facilitant la reproductibilité des résultats de la recherche.

Le reste de notre article est structuré comme suit : dans la section 2, nous réalisons une brève revue de la littérature et discutons de certaines études publiées. Dans la section 3, nous décrivons notre méthodologie proposée et les nouvelles ressources linguistiques que nous avons développées. Dans la section 4, nous présentons les résultats et les évaluations de notre étude. Dans la section 5, nous montrons les limites de notre système grâce à une analyse des erreurs. Enfin, la section 6 conclut le document et présente quelques perspectives prometteuses pour l'avenir.

## 2 Contexte

La correction orthographique consiste à suggérer des mots valides plus proches d'un mot incorrect. Afin de créer un système de correction orthographique automatique, il est impératif de comprendre les causes profondes des erreurs d'orthographe (Baba and Suzuki, 2012).

Plusieurs études sur les fautes d'orthographe ont été faites, avec une contribution notable de (Mitton, 1996) qui a analysé en profondeur différents types de fautes d'orthographe pour l'anglais et décrit des méthodes pour construire un système de correction orthographique automatique. (Kukich, 1992), d'autre part, a présenté une enquête sur les résultats documentés sur les modèles d'erreurs d'orthographe et catégorisé les erreurs d'orthographe en deux groupes:

Erreurs lexicales : Résultat de fautes appliquées à des mots individuels, indépendamment de leur contexte au sein d'une phrase (Ten Hacken and Tschichold, 2001).

Erreurs grammaticales : inclure à la fois les erreurs morphologiques et syntaxiques. Les erreurs morphologiques impliquent des déficiences dans des éléments linguistiques tels que la dérivation, la flexion, les prépositions, les articles, les pronoms personnels, les verbes auxiliaires et les déterminants. Les erreurs syntaxiques résultent de problèmes dans les composantes linguistiques, notamment la voix passive, le temps, les syntagmes nominaux, les verbes auxiliaires, l'accord sujet-verbe et les déterminants (Gayo and Widodo, 2018).

Les causes des fautes d'orthographe sont diverses et peuvent provenir de sources cognitives et typographiques (Peterson, 1980). Les erreurs cognitives surviennent lorsqu'une personne ne maîtrise pas l'orthographe correcte d'un mot, tandis que les erreurs typographiques se produisent lorsque des touches incorrectes sont frappées lors de la saisie. La littérature dans le domaine de la correction orthographique a généralement abordé ces types d'erreurs séparément, avec diverses techniques développées spécifiquement pour répondre à chaque type (Kukich, 1992). Malgré l'importance du traitement du langage, il y a eu un manque d'attention à la création d'outils de correction orthographique automatique pour les langues à faibles ressources en particulier. Bien que certaines tentatives aient été faites pour appliquer des techniques de correction orthographique automatique standard à quelques langues autochtones africaines (Boago Okgetheng et al., 2022; M'eric, 2014; Salifou et Naroua, 2014), aucun effort de ce type n'a été fait pour la langue wolof. À notre connaissance, la seule recherche exclusivement dédiée à la correction du wolof est (Lo et al., 2016), qui fournit un aperçu de l'état de l'art et esquisse des solutions potentielles pour développer un correcteur orthographique adapté au wolof. Cette recherche adopte des approches couramment utilisées dans le domaine et évalue les performances de notre système à l'aide de diverses métriques d'évaluation connues.

## 3 Méthodologie

Le système décrit dans cette étude vise à identifier et à corriger les erreurs non verbales en langue wolof.

Pour atteindre cet objectif, nous avons conçu et mis en œuvre le diagramme de flux présenté à la Figure 1.

p03-01.png

Figure 1 : Diagramme du correcteur orthographique

L'organigramme de la Figure 1 fournit une représentation visuelle des différents composants et processus impliqués dans le système de correcteur orthographique proposé. Le système comprend des mécanismes d'entrée et de sortie, des algorithmes pour la détection et la correction des erreurs, ainsi que des structures de données et des modèles qui aident à sa fonctionnalité. Le but du système est d'identifier et de corriger avec précision les erreurs non verbales dans la langue wolof. Par la présentation de l'architecture globale du système, le lecteur pourra comprendre le fonctionnement du système et ses principes de conception visant à détecter et corriger les mots invalides dans la langue wolof.

## 3.1 Génération de lexique wolof

Notre approche pour générer un lexique Wolof fiable implique la combinaison de méthodes d'annotation manuelle et d'extraction automatique.

Tout d'abord, une annotation manuelle a été réalisée sur un corpus de texte wolof (James Cross et al., 2022) pour identifier les mots uniques et les extraire dans une liste. Cette méthodologie permet un examen approfondi de la langue wolof et garantit la précision du lexique en permettant un contrôle manuel de l'inclusion des mots.

Deuxièmement, une extraction automatique a été réalisée à l'aide de méthodes de reconnaissance optique de caractères (OCR) et implémentée sous la forme de scripts Python, appliqués à plusieurs dictionnaires wolof-français (Fal et al., 1990 et Diouf et Kenkyjo, 2001). Cette méthodologie facilite l'expansion de la couverture du lexique et permet l'identification de mots supplémentaires qui pourraient ne pas avoir été capturés par l'annotation manuelle seule.

Enfin, pour assurer l'exactitude du lexique, les données globales résultantes ont fait l'objet d'une relecture. Cette étape a validé la justesse des mots et de leur orthographe et a permis d'apporter les révisions nécessaires avant la génération du lexique final.

Il est important de noter que, en raison de la disponibilité limitée des ressources en wolof, le lexique résultant ne contient que 1410 mots différents. Malgré cette contrainte, la combinaison de l'annotation manuelle et des méthodes d'extraction automatique a permis la génération d'un lexique wolof fiable.

## 3.2 Prétraitement

Notre système de correction orthographique met en œuvre une étape préliminaire, qui implique la suppression des entrées contenant des caractères numériques, des signes de ponctuation ou des mots empruntés à des langues étrangères. Le résultat de cette étape sert de base à la détection des erreurs non verbales dans le texte.

La phase de prétraitement consiste en trois opérations principales : l'élimination des signes de ponctuation, la normalisation de l'entrée et la segmentation du texte en mots individuels.

## 3.2.1 Retrait de la ponctuation

L'objectif de la suppression de la ponctuation dans notre étape de prétraitement est d'éliminer les signes de ponctuation non essentiels présents dans le texte d'entrée. Ces signes peuvent entraver l'efficacité du processus de correction orthographique et peuvent causer de la confusion lors de l'analyse du texte (Rahimi et Homayounpour, 2022). En supprimant ces signes, nous garantissons que les étapes ultérieures du système de correction orthographique peuvent traiter le texte de manière plus efficace et efficiente. L'algorithme utilisé dans cette étape scanne le texte d'entrée et supprime toutes les instances de points de ponctuation, y compris les virgules, les périodes, les points d'exclamation et les points d'interrogation. La sortie de cette étape est un texte nettoyé qui est libre des éléments étrangers et prêt pour l'analyse ciblée dans les étapes suivantes du système.

## 3.2.2 Normalisation

La phase de normalisation dans notre étape de prétraitement transforme le texte d'entrée en une forme standardisée en convertissant tous les caractères alphabétiques en minuscules et en supprimant tout mot en dehors de la langue wolof.

La conversion en minuscules est essentielle car de nombreuses techniques de TAL traitent les mots dans des casses différentes comme des entités distinctes, et la conversion du texte en minuscules élimine cet impact de la sensibilité à la casse sur l'analyse (HaCohen-Kerner et al., 2020).

En supprimant les mots des langues étrangères, nous visons à garantir que le texte analysé est uniquement dans la langue cible et à minimiser l'effet des mots qui peuvent ne pas avoir de signification sémantique dans le contexte de la langue wolof. Cela améliore la précision de l'analyse et réduit la probabilité d'introduire des erreurs dans les résultats.

## 3.2.3 Tokenisation des mots

La tokenisation est une étape critique dans le processus de correction orthographique automatique, car elle segmente le texte d'entrée en unités plus petites appelées tokens.

Il existe une gamme de techniques utilisées pour la tokenisation qui varient en fonction de la langue et de la tâche à accomplir. Celles-ci peuvent inclure le découpage sur les espaces et la ponctuation, l'utilisation d'expressions régulières, ou le recours à des dictionnaires et à des règles morphologiques (Dalrymple et al., 2006).

Le processus de tokenisation aboutit à des unités qui peuvent aller de caractères individuels ou de mots à des phrases ou même des phrases complètes. Cependant, la tokenisation de mots est la forme de segmentation la plus couramment utilisée dans les systèmes de correction orthographique, car elle sépare le texte en mots individuels et fournit une base solide pour l'identification des erreurs d'orthographe (Mosavi Miangah, 2013 ; Rahman et al., 2021 ; Abdulrahman et Hassani, 2022).

La tokenisation des mots améliore non seulement l'exactitude et l'efficacité du processus de correction orthographique, mais permet également une analyse du contexte dans lequel chaque mot apparaît. Cela permet au système de vérification orthographique de faire des suggestions plus éclairées pour les corrections orthographiques appropriées, améliorant ainsi la précision des résultats.

Dans l'investigation actuelle, nous mettons en œuvre le processus de tokenization en nous concentrant sur la segmentation au niveau des mots.

## 3.3 Détection des erreurs

L'étape de détection d'erreurs dans notre système de correction orthographique est conçue pour identifier les erreurs de mots inexistants dans le texte. Cela est réalisé grâce à un processus en deux étapes, consistant en une validation par rapport aux règles d'écriture du wolof et une comparaison avec un lexique construit.

## 3.3.1 Validateur de règles

L'orthographe des mots dans la langue wolof suit certaines conventions, telles que décrites par les formes CVC et CVCV(C) pour les mots monosyllabiques et dissyllabiques, respectivement (Merrill, 2021). Ces conventions spécifient que la consonne et la voyelle finales d'une syllabe ne peuvent pas être toutes deux longues, et les consonnes fortes ne peuvent pas apparaître après une voyelle longue ou au début d'un mot, sauf pour les consonnes prénasalisées.

Notre étape de détection des erreurs comprend une étape de validation qui vérifie rigoureusement chaque mot dans le texte d'entrée par rapport à ces conventions d'écriture. Si un mot est jugé conforme à ces règles, il passera à l'étape suivante de la validation. À l'inverse, si le mot est déterminé comme non conforme, il sera marqué comme invalide et nécessitera une correction.

## 3.3.2 Vérification du lexique

Dans la phase de vérification du lexique, le système de correction orthographique évalue chaque mot du texte d'entrée par rapport au lexique wolof pour déterminer sa validité. Le lexique, étant un grand référentiel de mots, peut poser des défis pour des recherches rapides et efficaces. Pour remédier à cela, diverses techniques telles que les tables de hachage (Kukich, 1992), la recherche binaire (Knuth, 1998), la structure de données tries (Bentley et Sedgewick, 1997) et le filtre bloom (Bloom, 1970) ont été développées pour permettre des recherches rapides dans les dictionnaires.

Dans le présent correcteur orthographique, le système utilise la structure de données trie, qui organise le lexique en nœuds qui représentent des caractères individuels et le nœud racine qui représente la chaîne vide. Dans cette structure, la recherche d'un mot dans le lexique implique de suivre le chemin à travers le trie qui correspond aux caractères du mot cible (Feng et al., 2012). Si la fin du chemin est un nœud terminal, le mot est considéré comme étant dans le lexique et jugé valide. Inversement, si le chemin se termine avant d'atteindre un nœud terminal, le mot est considéré comme incorrect et des corrections sont initiées.

## 3.4 Correction des erreurs

La dernière étape de la procédure de correction orthographique consiste à produire des remplacements potentiels pour le mot mal orthographié. Nos techniques de correction, décrites ci-dessous, se concentrent exclusivement sur le mot et ne tiennent pas compte du contexte dans lequel il apparaît. Le processus de correction comprend trois phases distinctes : la traduction des sons composés français, la génération de suggestions de candidats et le classement de ces suggestions.

## 3.4.1 Traduction des sons composés français

Avant de mettre en œuvre le module responsable de la traduction des sons composés français en wolof, nous avons collecté une petite quantité de données en wolof provenant de diverses sources. Ces données proviennent de sites d’information, de plateformes de médias sociaux et de sites religieux. Une analyse approfondie de ces données a été réalisée pour déterminer les fautes d'orthographe les plus courantes commises par les locuteurs wolof lorsqu'ils écrivent dans la langue. Nos résultats ont indiqué qu'un nombre important de ces erreurs étaient dues à l'utilisation de l'alphabet français au lieu de l'alphabet wolof. Cela a souvent entraîné la présence de sons composés français ou de lettres qui ne sont pas natives de la langue wolof. De plus, il a été observé que les accents, qui jouent un rôle crucial pour assurer une prononciation et une signification correctes des mots, étaient fréquemment négligés. Pour illustrer ces résultats, le tableau 3 présente certaines des fautes d'orthographe observées et leur équivalent correct en wolof.

p05-01.png

Tableau 3: Mots mal orthographiés et mots corrects en wolof

Prenant en compte les erreurs courantes observées dans l'analyse des données de langue wolof, notre système est conçu pour évaluer chaque mot pour la présence de sons composés français ou de lettres qui sont étrangères à l'alphabet wolof. Si de tels sons sont détectés, le module les traduira dans leurs équivalents wolof correspondants. Les lettres n'appartenant pas à l'alphabet wolof seront systématiquement éliminées. Une fois ces transformations terminées, le résultat sera dirigé vers la phase suivante du processus de correction et du module de suggestions de candidats.

## 3.4.2 Génération de suggestions candidates

Dans le système actuel, pour générer des alternatives potentielles pour les mots mal orthographiés, nous avons mis en œuvre une méthode de comparaison de distance lexicographique. Ce processus consiste à déterminer le nombre minimum d'opérations d'édition, telles que l'insertion, la suppression, la transposition et la substitution, nécessaires pour changer un mot en un autre (Vienney, 2004). Plus les disparités entre deux mots sont importantes, plus la distance lexicographique entre eux est grande. Parmi les différentes métriques de distance lexicographique, la Distance de Levenshtein (Levenshtein, 1965) est la plus couramment utilisée. Il quantifie la différence entre deux chaînes en fonction des trois opérations de chaîne fondamentales: substitution, insertion et suppression.

Soit Levα,β la distance de Levenshtein entre la sous-séquence formée avec les α premiers caractères d'un mot W1 et la sous-séquence formée avec les β premiers caractères d'un mot W. La distance de Levenshtein entre les deux sous-séquences W1 et W2 (de longueur |W1| et |W2| respectivement) peut être calculée récursivement en utilisant la formule 1 (Levenshtein, 1965).

p05-02.png

La distance de Levenshtein, calculée en utilisant son équation récursive, peut être coûteuse en termes de calcul (Gusfield, 1997), surtout pour les grandes distances, car elle a une complexité temporelle exponentielle de O(3min(|W1|,|W2|)). Pour résoudre ce problème, notre approche combine deux techniques: la programmation dynamique et la structure de données trie.

La programmation dynamique (Almudevar, 2001), en tant que technique pour résoudre des problèmes en les décomposant en sous-problèmes plus gérables et en stockant les solutions, permet de réduire le nombre de calculs redondants en offrant un stockage plus efficace des résultats intermédiaires. Lorsqu'elle est appliquée à la distance de Levenshtein, elle permet de stocker les résultats intermédiaires des calculs partiels dans une matrice, ce qui conduit à un calcul plus efficace du résultat final.

En combinant la programmation dynamique et la structure de données trie, notre approche élague efficacement l'espace de recherche et évite les calculs redondants. Cela offre une combinaison puissante pour calculer la distance de Levenshtein de manière rapide et efficace, même pour de grandes entrées.

Dans la distance standard de Levenshtein, toutes les opérations d'édition sont affectées d'un coût uniforme de 1. Cependant, en tenant compte des résultats discutés précédemment, une matrice de coûts a été introduite pour permettre l'assignation de coûts variables à différentes opérations d'édition. Cela permet une représentation plus nuancée de l'importance de chaque opération. Le coût des insertions et des suppressions reste à 1 pour tous les caractères. Les opérations de substitution entre les caractères source et cible sont assignées un coût de 1 si le couple de caractères est listé dans le Tableau 4, sinon, un coût de 2 est assigné.

p06-01.png

Tableau 4 : Coût de substitution de couples spécifiques

Notre module de suggestion génère des mots candidats potentiels pour un mot mal orthographié donné grâce au calcul de la distance d'édition entre le mot mal orthographié et chaque mot valide dans le lexique wolof. Pour chaque mot candidat, le coût de transformation du mot mal orthographié en mot candidat est fourni.

## 3.4.3 Classement des suggestions candidates

Dans la phase suivante de notre méthodologie, les mots candidats générés à partir de l'étape précédente sont soumis à évaluation. Le classement est effectué en fonction de la proximité des mots candidats par rapport au mot mal orthographié, le mot candidat ayant le coût d'édition le plus faible se voyant attribuer le rang le plus élevé. Le mot candidat avec le coût d'édition le plus faible est déterminé comme étant la correspondance la plus proche et est donc sélectionné comme la substitution la plus probable pour le mot incorrect.

## 4 Évaluations

Afin d'évaluer la performance de notre système de correction orthographique, nous avons d'abord construit un corpus de mots mal orthographiés, puis sélectionné les métriques d'évaluation appropriées, et enfin, nous avons mis en œuvre les métriques choisies pour évaluer la performance du système.

## 4.1 Génération d'un Corpus de mots mal orthographiés

La création d'un Corpus de Mots Mal Orthographiés a suivi une méthode similaire à la génération du lexique wolof. Nous avons utilisé une approche hybride d'annotation manuelle et automatique, suivie d'une relecture. La méthode impliquait la sélection de mots wolof couramment mal orthographiés découverts via les médias sociaux, les sites web religieux et les sites web d'actualités. Pour chaque faute d'orthographe, nous avons ajouté manuellement sa correction. Ce processus a abouti à la formation d'un corpus composé de 3070 mots, avec 1075 mots valides et 1995 mots invalides. La distance d'édition entre les mots mal orthographiés et leurs formes corrigées est présentée dans le Tableau 5.

p06-02.png

Tableau 5 : Distance d'édition des fautes d'orthographe par rapport à leurs corrections

## 4.2 Sélection des métriques d'évaluation

Il y a divers facteurs à prendre en compte dans l'évaluation des correcteurs orthographiques. Les mesures conventionnelles, y compris le rappel et la précision, ont été largement utilisées pendant un temps considérable pour évaluer la compétence linguistique de tels outils. néanmoins, d'un point de vue centré sur l'usage, ces paramètres d'évaluation présentent des limites en raison de l'absence de certaines variables intrinsèques à l'évaluation des correcteurs orthographiques dans ces métriques.

Pour déterminer la fiabilité de notre correcteur orthographique, nous avons utilisé les mesures proposées dans (Starlander et Popescu-Belis, 2002), (Voorhees et Garofolo, 2000), (Paggio et Music, 1998), (Paggio et Underwood, 1998), (King, 1999), ainsi que les mesures suivantes:

Vrai positif (TP): mot correct qui est reconnu comme correct par le correcteur orthographique.

Faux positif (FP): mot incorrect qui est reconnu comme correct par le correcteur orthographique.

Faux négatif (FN): mot correct qui est reconnu comme incorrect par le correcteur orthographique.

Vrai négatif (TN): mot incorrect qui est reconnu comme incorrect par le correcteur orthographique.

Malgré leur ancienneté, ces métriques restent largement utilisées dans l'état de l'art actuel pour évaluer les correcteurs orthographiques, en particulier ceux conçus pour les langues à ressources limitées telles que (Abdulrahman et Hassani, 2022) et (Boago Okgetheng et al., 2022).

Les autres métriques utilisées dans ces évaluations sont décrites comme suit :

## 4.2.1 Récall lexical ou Rc

Il est déterminé en calculant le rapport des mots valides correctement reconnus dans le texte par le correcteur orthographique, au nombre total de mots exacts dans le même texte, comme indiqué dans la formule 2 (Starlander et Popescu-Belis, 2002).

p07-01.png

## 4.2.2 Erreur de rappel ou Ri

Il est exprimé comme la fraction de mots incorrects dans le texte détecté par le correcteur orthographique, comparé au nombre total de mots incorrects dans le texte, comme indiqué dans la formule 3 (Starlander et Popescu-Belis, 2002).

p07-02.png

## 4.2.3 Précision lexicale ou Pc

Il est calculé en divisant le nombre total de mots valides reconnus avec précision par le correcteur orthographique par la somme des mots valides reconnus par le correcteur orthographique et la quantité de mots invalides qui n'ont pas été identifiés comme incorrects par le correcteur orthographique, comme le montre la formule 4 (Starlander et Popescu-Belis, 2002).

p07-03.png

## 4.2.4 Erreur de précision ou Pi

Il est déterminé en divisant le nombre de marqueurs exacts établis par le correcteur orthographique par le nombre total de marqueurs émis par le système, comme le montre la formule 5 (Starlander et Popescu-Belis, 2002).

p07-04.png

## 4.2.5 F-mesure lexicale ou F mc

Il permet de calculer la moyenne harmonique entre le rappel lexical et la précision lexicale, comme le montre la formule 6 (Starlander et Popescu-Belis, 2002).

p07-05.png

## 4.2.6 Erreur F-measure ou F mi

La mesure F de l'erreur est calculée en calculant la moyenne harmonique du rappel lexical et de la précision lexicale, comme le montre la formule 7 (Starlander et Popescu-Belis, 2002).

p07-06.png

## 4.2.7 Exactitude prédictive ou P A

Elle quantifie la probabilité qu'un mot quelconque, qu'il soit correct ou incorrect, soit traité correctement par le correcteur orthographique. Il est calculé à l'aide de la formule 8 (Starlander et Popescu-Belis, 2002).

p07-07.png

## 4.2.8 Pertinence de la suggestion ou SA

Elle mesure la capacité de notre correcteur orthographique à suggérer des alternatives d'orthographe précises pour un mot mal orthographié. Soit S une recommandation appropriée pour un mot incorrect et N représente le nombre total de mots mal orthographiés. L'adéquation des suggestions de notre système est calculée à l'aide de la formule 9 (Starlander et Popescu-Belis, 2002).

p07-08.png

## 4.2.9 Classement réciproque moyen ou MRR

Comme indiqué précédemment, notre correcteur orthographique sélectionne systématiquement le premier mot de la liste de recommandations comme étant la substitution la plus probable pour le mot mal orthographié. Cependant, comme le choix de la première option dans la liste recommandée peut ne pas toujours être le choix approprié, nous utiliserons la métrique MRR pour évaluer la méthodologie de classement. Soit N le nombre total de mots incorrects et Ranki,c la position de la suggestion correcte dans la liste de suggestion pour le ie mot mal orthographié dans N. Le MRR est calculé en utilisant la Formule 10 (Voorhees et Garofolo, 2000).

p08-01.png

## 4.3 Expériences

## 4.3.1 Résultats

Les résultats de notre correcteur orthographique, comme le montre le tableau 6, montrent un niveau de compétence remarquable dans divers aspects de la correction orthographique.

p08-02.png

Tableau 6 : Mesures de performance du correcteur orthographique

Le score de rappel de 95,16% (Rc) et 100% (Ri) illustre la nature exhaustive du lexique utilisé par le correcteur orthographique, ainsi que son statut relativement intact.

Le correcteur orthographique affiche un niveau de précision exceptionnel, avec un score de 100% (Pc) et 97,46% (Pi), ce qui indique sa fiabilité dans l'identification précise des fautes d'orthographe ainsi que des mots valides. Les scores de la mesure F de 97,52 % (F mc) et 98,71 % (F mi) démontrent l'évitement par le correcteur orthographique des stratégies simplistes, assurant ainsi son efficacité.

Le score de précision des suggestions du correcteur orthographique (SA) de 93,33% atteste de la pertinence et de la véracité de l'alternative la plus probable au mot mal orthographié présenté à l'utilisateur final.

Le score de rang réciproque moyen (MRR) de 96,04% souligne la qualité du classement des suggestions présentées par le correcteur orthographique.

Enfin, la performance linguistique globale du correcteur orthographique, comme indiqué par son score de précision prédictive (P A) de 98,31%, est de nature très satisfaisante.

## 4.3.2 Analyse des erreurs

Pour comprendre pleinement et identifier les limites linguistiques de notre correcteur orthographique, nous avons mené une enquête sur les distances d'édition des mots mal orthographiés pour lesquels le système a produit une suggestion incorrecte. Le résultat de cette étude est présenté dans le Tableau 7.

p08-03.png

Tableau 7: Modifier la distance des fautes d'orthographe avec des suggestions incorrectes

Après un examen approfondi des résultats affichés, nous avons surpris de constater qu'il n'y avait pas de corrélation linéaire significative entre la distance d'édition d'un mot mal orthographié et la probabilité que le correcteur orthographique génère des suggestions incorrectes. Ces constatations concordent avec celles présentées au tableau 5. La majorité des mots dans notre corpus de mots mal orthographiés avaient une distance d'édition de 3, ce qui augmentait la probabilité que le correcteur orthographique produise une suggestion erronée pour les mots mal orthographiés avec une distance d'édition de 3. De plus, comme les mots mal orthographiés avec des distances d'édition de 11, 12 et 13 étaient sous-représentés dans notre corpus, les suggestions du correcteur orthographique pour ces mots étaient toutes exactes. Cela renforce notre conclusion que plus la fréquence des mots mal orthographiés avec une distance d'édition spécifique est élevée, plus les chances que le correcteur orthographique génère des suggestions inexactes de mots mal orthographiés avec cette même distance d'édition sont grandes.

## 5 Limites

Malgré les performances impressionnantes et le temps de traitement minimal de notre correcteur orthographique, il est important de reconnaître ses limites.

Premièrement, le correcteur orthographique est limité aux mots inclus dans le lexique wolof créé et ne peut pas reconnaître les mots en dehors de celui-ci. Deuxièmement, l'algorithme de distance pondérée de Levenshtein utilisé peut ne pas toujours refléter avec précision la probabilité de différents types d'erreurs, ce qui entraîne des inexactitudes potentielles dans les suggestions.

Troisièmement, les structures de données de programmation dynamique et de trie utilisées peuvent entraîner des suggestions faussement positives en raison d'un manque de considération pour la signification sémantique des mots. De plus, le coût computationnel de notre approche peut être substantiel, en particulier pour les lexiques plus volumineux ou les mots avec de nombreuses corrections possibles. Enfin, le manque de connaissance du contexte peut entraîner des erreurs manquées ou des suggestions incorrectes.

## 6 Conclusion

Cet article présente un correcteur orthographique novateur pour la langue wolof, qui a démontré son potentiel, grâce à sa combinaison efficace de la structure de données trie, de la programmation dynamique et des algorithmes de distance de Levenshtein pondérée. L'approche hybride de l'annotation manuelle et automatique a permis la construction d'un lexique complet et d'un corpus robuste de mots mal orthographiés, permettant une évaluation robuste du potentiel du correcteur orthographique malgré les données limitées disponibles pour la langue. Grâce à ces efforts, nous espérons faire progresser l'état de la recherche en TAL pour la langue wolof et contribuer à la préservation du patrimoine linguistique des nations africaines, garantissant que leurs expressions culturelles distinctes soient protégées pour les générations futures.

Les résultats de cette recherche fournissent des preuves convaincantes de la viabilité du correcteur orthographique pour la langue wolofe, ouvrant des voies pour une amélioration et une exploration ultérieures.

Pour les recherches futures, il serait intéressant d'étudier l'effet de l'augmentation du lexique et du corpus de mots mal orthographiés sur la performance du correcteur orthographique. De plus, une comparaison de la performance du correcteur orthographique avec d'autres méthodes de correction orthographique utilisées dans les langues à ressources limitées, telles que les langues africaines indigènes, pourrait fournir des informations précieuses sur les forces et les faiblesses de l'approche actuelle. L'intégration de techniques de pointe, tenant compte du contexte, telles que celles basées sur l'apprentissage automatique et les réseaux de neurones profonds, dans le correcteur orthographique pourrait également être explorée pour améliorer davantage ses capacités.

## Remerciements

Nous remercions les évaluateurs anonymes pour leurs commentaires et leurs retours utiles.

Nous remercions également les participants de la communauté wolofe pour avoir donné leur temps, leur sagesse et leur expertise.

## Notes

1 https://github.com/TiDev00/Wolof_SpellChecker

2 https://www.wolof-online.com/

3 https://twitter.com/SaabalN

4 http://biblewolof.com/

## Références

Roshna Omer Abdulrahman and Hossein Hassani. 2022. A language model for spell checking of educational texts in kurdish (sorani). 1st Annual Meeting of the ELRA/ISCA Special Interest Group on UnderResourced Languages, SIGUL 2022 - Held in Conjunction with the International Conference on Language Resources and Evaluation, LREC 2022 - Proceedings, pages 189-198.

Anthony Almudevar. 2001. A dynamic programming algorithm for the optimal control of piecewise deterministic markov processes. SIAM Journal on Control and Optimization, 40(2):525-539.

Yukino Baba and Hisami Suzuki. 2012. How are spelling errors generated and corrected? A study of corrected and uncorrected spelling errors using keystroke logs. In Proceedings of the 50th Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers), pages 373-377, Jeju Island, Korea. Association for Computational Linguistics.

Jon L. Bentley and Robert Sedgewick. 1997. Fast algorithms for sorting and searching strings. Proceedings of the Annual ACM-SIAM Symposium on Discrete Algorithms, pages 360-369.

Burton H. Bloom. 1970. Space/Time trade-offs in hash coding with allowable errors. Communications of the ACM, 13(7):422-426.

Boago Okgetheng, G. Malema, Ariq Ahmer, Boemo Lenyibi, and Ontiretse Ishmael. 2022. Bantu Spell Checker and Corrector using Modified Edit Distance Algorithm (MEDA). Data Science and Machine Learning.

Mamadou Cissé. 2004. Dictionnaire Francais-Wolof, 2.éd. révisée et augmentée edition. Dictionnaires des Langues O. Langues et MOndes, L'Asiatheque, Paris.

Mary Dalrymple, Maria Liakata, and Lisa Mackie. 2006. Tokenization and morphological analysis for Malagasy. In International Journal of Computational Linguistics & Chinese Language Processing, Volume 11, Number 4, December 2006, pages 315-332.

Ibrahima Diouf, Cheikh Tidiane Ndiaye, and Ndèye Binta Dieme. 2017. Dynamique et transmission linguistique au Sénégal au cours des 25 dernières années. Cahiers québécois de démographie, 46(2):197-217.

Jean Léopold Diouf and Tōkyō Gaikokugo Daigaku. Ajia Afurika Gengo Bunka Kenkyūjo. 2001. Dictionnaire wolof : wolof-français, français-wolof. 39. Institute for the Study of Languages and Cultures of Asia and Africa (ILCAA), Tokyo University of Foreign Studies, Tokyo.

David Eberhard, Gary Simons, and Chuck Fennig. 2019. Ethnologue: Languages of the World, 22nd edition edition. SIL International, Dallas, Texas.

A. Fal, R. Santos, and J.L. Doneux. 1990. Dictionnaire Wolof-Français: Suivi d'un Index Français-Wolof. Karthala, 22-24, boulevard Arago, 75013 Paris.

Jianhua Feng, Jiannan Wang, and Guoliang Li. 2012. Trie-join: A trie-based method for efficient string similarity joins. The VLDB Journal, 21(4):437-461.

Hendri Gayo and Pratomo Widodo. 2018. An Analysis of Morphological and Syntactical Errors on the English Writing of Junior High School Indonesian Students. International Journal of Learning, Teaching and Educational Research, 17(4):58-70.

Dan Gusfield. 1997. Algorithms on strings, trees, and sequences: Computer science and computational biology. SIGACT News, 28(4):41-60.

Yaakov HaCohen-Kerner, Daniel Miller, and Yair Yigal. 2020. The influence of preprocessing on text classification using a bag-of-words representation. PloS one, 15(5):e0232525.

James Cross, Maha Elbayad, and Kenneth Heafield. 2022. No language left behind: Scaling human-centered machine translation.

M King. 1999. Evaluation design: The EAGLES framework. In Proceedings of the Konvens '98: Evaluation of the Linguistic Performance of Machine Translation Systems, Bonn, Germany. Rita Nübel, Uta SeewaldHeeg, Gardezi Verlag, St. Augustin.

Donald Knuth. 1998. Art of computer programming, the: Volume 3: Sorting and searching, 2nd edition. edition. Addison-Wesley Professional.

Karen Kukich. 1992. Techniques for automatically correcting words in text. Acm Computing Surveys, 24(4):377-439.

Vladimir I. Levenshtein. 1965. Binary codes capable of correcting deletions, insertions, and reversals. Soviet physics. Doklady, 10:707-710.

Alla Lo, Cheikh Bamba Dione, Mathieu Mangeot, Mouhamadou Khoule, Sokhna Bao-Diop, MameThierno Cissé, et al. 2016. Correction orthographique pour la langue wolof: état de l'art et perspectives. In JEP-TALN-RECITAL 2016: Traitement Automatique Des Langues Africaines TALAF 2016.

Jean-Jacques M'eric. 2014. A spell-checker and thesaurus for Bambara (Bamanankan) (Un v'erificateur orthographique pour la langue bambara) [in French]. TALAf@TALN, pages 141-146.

John T. M. Merrill. 2021. The evolution of consonant mutation and noun class marking in Wolof. Diachronica, 38(1):64-110.

Roger Mitton. 1996. English Spelling and the Computer. Studies in Language and Linguistics. Longman, London; New York.

Tayebeh Mosavi Miangah. 2013. FarsiSpell: A spell-checking system for Persian using a large monolingual corpus. Literary and Linguistic Computing, 29(1):56-73.

Patrizia Paggio and Bradley Music. 1998. Evaluation in the SCARRIE project. International Conference on Language Resources and Evaluation, Granada, Spain, pages 277-282.

Patrizia Paggio and Nancy L. Underwood. 1998. Validating the TEMAA LE evaluation methodology: A case study on Danish spelling checkers. Natural Language Engineering, 4(3):211-228.

James L. Peterson. 1980. Computer programs for detecting and correcting spelling errors. Communications of The Acm, 23(12):676-687.

Zahra Rahimi and Mohammad Mehdi Homayounpour. 2022. The impact of preprocessing on word embedding quality: A comparative study. Language Resources and Evaluation.

Md. Mijanur Rahman, Hasan Mahmud, Razia Sultana Rupa, and Mahnuma Rahman Rinty. 2021. A robust bangla spell checker for search engine. In 2021 6th International Conference on Communication and Electronics Systems (ICCES), pages 1329-1334.

Lawaly Salifou and Harouna Naroua. 2014. Design and Implementation of a Spell Checker for Hausa Language ('Etude et conception d'un correcteur orthographique pour la langue haoussa) [in French]. TALAf@TALN, pages 147-158.

Marianne Starlander and Andrei Popescu-Belis. 2002. Corpus-based evaluation of a French spelling and grammar checker. Proceedings of the 3rd International Conference on Language Resources and Evaluation, LREC 2002, pages 268-274.

Pius Ten Hacken and Cornelia Tschichold. 2001. Word Manager and CALL: Structured access to the lexicon as a tool for enriching learners' vocabulary. ReCALL, 13(1):121-131.

S. Vienney. 2004. Correction Automatique : Bilan et Perspectives. Presses universitaires de FrancheComté.

Ellen Voorhees and John Garofolo. 2000. The TREC Spoken Document Retrieval Track. Bulletin of the American Society for Information Science and Technology, 26(5):18-19.
