> Machine translation (fr) of "Exploring Afrikaans word embeddings with analogies and nearest neighbours" by Tanja Gaustad, Roald Eiselen, https://upjournals.up.ac.za/index.php/dhasa/article/view/4443, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## Explorant les embeddings de mots en afrikaans avec des analogies et des voisins les plus proches

Tanja Gaustad, Roald Eiselen

**Affiliations**  
Gaustad, Tanja  
Eiselen, Roald  
Centre for Text Technology (CTexT), North-West  
University, South Africa  
  


## Résumé

Cet article présente une exploration des embeddings de mots pour l'afrikaans en utilisant les méthodologies des analogies et des voisins les plus proches. Nous comparons les résultats sur trois types d'embeddings (fastText, FLAIR et GloVe) sur un nouveau jeu de données d'analogies pour l'afrikaans, inspiré du Bigger Analogy Test Set: BATS (Gladkova et al. 2016). Notre analyse montre que pour l'afrikaans, de manière similaire à l'anglais, les types d'embeddings influencent la qualité des analogies trouvées pour différentes tâches linguistiques. Notre investigation démontre également, cependant, que ces embeddings de l'afrikaans n'encodent pas une représentation linguistique aussi claire que celle des embeddings de l'anglais. La raison exacte de cela est sujette à des travaux futurs, mais la complexité morphologique ajoutée et le manque de données jouent probablement un rôle.

## Mots-clés

Embeddings de texte, Afrikaans, Analogies, Évaluation, Langues à ressources limitées

## 1 Introduction et contexte

Au cours de la dernière décennie, il y a eu un changement fondamental dans le domaine du traitement du langage naturel (NLP) avec l'adoption généralisée des réseaux de neurones profonds (DNN), conduisant à des avancées majeures dans le domaine. À la base de ce changement, il y a eu l'introduction de méthodes plus sophistiquées pour représenter les données linguistiques sous forme numérique, spécifiquement des représentations vectorielles à valeurs réelles connues sous le nom d'embeddings de mots. Ces représentations sont un prérequis pour appliquer les techniques d'apprentissage profond à diverses technologies de TAL. En même temps, ces embeddings ont éliminé une partie importante de la linguistique qui faisait partie du cycle de développement du TAL (même avec les techniques traditionnelles d'apprentissage automatique) et ont abouti à une poursuite désormais presque entièrement axée sur l'ingénierie et les performances de pointe.

L'une des caractéristiques de ces représentations plus complexes est qu'il n'y a pas de lien clair interprétable par l'homme entre les représentations vectorisées et les connaissances linguistiques existantes. Cela rend à son tour les composants d'apprentissage automatique, qui sont déjà très complexes et difficiles à interpréter, presque impossibles à comprendre pleinement. Néanmoins, les développeurs ont formulé de vastes affirmations sur l'information linguistique représentée dans ces plongements, tant aux niveaux morphologique, syntaxique que sémantique (Mikolov et al. 2013a, Pennington et al. 2014). Pour soutenir ces affirmations, différents tests ont été conçus dans le but d'expliquer indirectement les informations qui sont contenues dans les représentations vectorielles, principalement pour l'anglais. Plus récemment, il y a également eu des investigations plus motivées linguistiquement pour tenter de mieux comprendre l'information codée dans ces embeddings et s'il existe des corrélations avec des concepts et des connaissances linguistiques existants (Allen & Hospedales 2019, Miaschi & Dell'Orletta 2020, Warstadt et al. 2019).

Pour l'afrikaans, il y a eu un nombre limité d'études sur l'utilisation de l'apprentissage profond et des plongements lexicaux (Hanslo 2021, Heyns & Barnard 2020, Loubser & Puttkammer 2020, Ralethe 2020, Van Heerden & Bas 2021), se concentrant principalement sur l'application de l'apprentissage profond à diverses tâches de TAL. Jusqu'à récemment, il n'y avait que trois modèles d'embedding de mots afrikaans librement disponibles (Conneau et al. 2020, Grave et al. 2018), tous sans aucune évaluation directe de leur qualité. Plus récemment, Eiselen (2022) a publié cinq nouveaux modèles d'embedding pour l'afrikaans (librement disponibles à partir de [1]), entraînés sur un ensemble de données plus grand et curaté, dont trois seront utilisés dans cette étude.

À notre connaissance, il n'y a pas eu d'étude approfondie de la nature des plongements lexicaux pour l'afrikaans, ni de vérification que les tests et les affirmations faits pour les plongements anglais valent pour une langue comme l'afrikaans, qui est morphologiquement plus complexe à la fois en termes de dérivation et de flexion, mais aussi très productive en termes de composition, contrairement à l'anglais. L'afrikaans dispose également de nettement moins de données pour entraîner ces modèles de plongement.

Avec ce contexte à l'esprit, notre étude vise une investigation exploratoire des embeddings de mots en afrikaans pour trois architectures différentes (GloVe, fastText et FLAIR), en appliquant des techniques d'évaluation existantes pour répondre aux questions suivantes :

Différents modèles de plongement encodent-ils différents types d'informations pour des langues morphologiquement plus complexes et moins dotées en ressources, comme l'afrikaans ?

Les méthodes d'évaluation intrinsèque pour l'anglais sont-elles applicables à des langues plus complexes sur le plan morphologique, telles que l'afrikaans?

La section suivante fournit un bref aperçu des embeddings de mots, des trois architectures envisagées et des données d'entraînement utilisées. La section 3 donne un aperçu des techniques d'analyse des embeddings de mots et de la conception expérimentale pour l'afrikaans, suivie d'une analyse des résultats des différentes expériences dans la section 4. Nous concluons l'enquête à la section 5 avec une discussion plus approfondie de nos conclusions et des domaines de travail futur possibles.

## 2 Architectures de plongement et procédures d'entraînement

Trouver des représentations numériques significatives pour le texte, et en particulier pour les mots, a une longue histoire en TAL (Pennington et al. 2014). C'est particulièrement vrai dans le contexte de l'apprentissage automatique où ces représentations sont une condition préalable pour que les modèles puissent être entraînés. Bien que les travaux sur l'apprentissage de ces types de représentations aient été en cours depuis Bengio et al. (2003), l'approche prédominante pour représenter les mots dans les modèles d'apprentissage automatique était les soi-disant vecteurs one hot, où chaque mot d'un vocabulaire est représenté par un vecteur creux contenant des zéros pour toutes les positions sauf celle du mot particulier, qui est définie à 1. Cette méthode était utilisable, mais n'incluait que des informations indiquant si le mot est un membre du vocabulaire ou non. Cela a changé en 2013 avec l'introduction de word2vec (Mikolov et al. 2013a, Mikolov et al. 2013b, Mikolov et al. 2013c), où les vecteurs à valeur réelle sont appris par une combinaison de cooccurrences au niveau de la phrase et d'un classificateur log-linéaire pour générer un vecteur de sortie de longueur prédéfinie. Cela a été suivi peu après par une autre technique de plongement, Global Vectors (GloVe) (Pennington et al. 2014). Les deux méthodes ont permis un apprentissage efficace sur de grandes quantités de données et les représentations vectorielles apprises ont entraîné des améliorations dans de nombreuses technologies NLP en aval lorsqu'elles étaient combinées avec diverses techniques d'apprentissage profond.

L'une des principales lacunes de ces modèles d'incorporation "classiques" est que chaque mot a une seule incorporation, quel que soit le contexte dans lequel le mot apparaît. Ce problème a été résolu par des modèles de plongement et de langage plus récents qui exploitent différentes architectures de DNN, telles que les réseaux de neurones artificiels convolutionnels, récurrents et transformeurs. Ces modèles apprennent un modèle pour générer une sortie vectorielle, qui peut adapter la représentation vectorielle pour un mot en prenant en compte le contexte dans lequel le mot apparaît. Cela a permis des gains majeurs dans les tâches de traitement automatique du langage naturel en aval, au détriment d'au moins un aspect très important, à savoir l'explicabilité.

Dès le début du développement des embeddings, il était clair que bien que les représentations vectorielles soient en corrélation avec plusieurs attributs sémantiques et morpho-syntaxiques de l'anglais, il était difficile de déterminer ce que le modèle apprend. La nature des embeddings - de grands vecteurs de nombres à valeurs réelles - et leurs procédures d'entraînement obscurcissent la signification d'une valeur particulière dans une position particulière du vecteur et la manière dont les valeurs corrèlent avec les attributs linguistiques. Cela est devenu encore pire avec l'utilisation des DNN pour générer les représentations, car il y a tellement de variables dans le processus, qu'il devient presque impossible de déterminer s'il existe des attributs linguistiques spécifiques associés à des positions ou des régions vectorielles spécifiques. Bien qu'il y ait eu plusieurs efforts pour proposer des méthodes d'investigation des embeddings, il n'existe toujours pas de méthodologie claire pour investiguer la qualité des embeddings et expliquer les valeurs associées aux modèles. De plus, la plupart de ces investigations se sont concentrées exclusivement sur l'anglais, et peu de travaux ont été réalisés pour déterminer comment les représentations se comportent dans des environnements linguistiquement différents et/ou moins dotés en ressources. Pour cette étude, nous nous concentrons sur trois architectures de plongement, deux des plongements classiques les plus courants et un réseau de neurones artificiels récurrent, à savoir les plongements fastText, GloVe et FLAIR.

fastText (Bojanowski et coll., 2017) est une extension de word2vec (Mikolov et coll., 2013a) qui inclut des n-grammes de caractères dans les calculs d’incorporation pour s’assurer que les mots non vus auparavant génèrent également des incorporations. Les plongements GloVe (Pennington et al. 2014) diffèrent légèrement de fastText en ce qu'ils utilisent les cooccurrences globales des mots pour entraîner un modèle de régression log-bilinéaire destiné à générer les plongements, et ne considèrent que les mots. Ces deux modèles génèrent un seul embedding pour un mot, indépendamment du contexte du mot. Les embeddings FLAIR, quant à eux, entraînent un réseau de neurones récurrents à mémoire longue et courte pour générer une représentation basée sur une séquence de caractères. Cela présente deux avantages : i) le même mot dans différents contextes peut avoir différentes représentations reflétant le contexte ; et ii) parce que le modèle considère les caractères, et non les mots, comme unités de base, toute séquence de caractères obtiendra un plongement, qu'elle ait été vue ou non pendant l'entraînement. Cette dernière caractéristique est particulièrement utile dans les environnements moins dotés en ressources, où la parcimonie des données demeure un problème majeur. fastText et FLAIR ont chacun deux variantes, mais en raison de contraintes d'espace, nous nous concentrerons uniquement sur les modèles fastText à sac de mots continu (CBoW) et FLAIR rétrograde dans notre analyse.

La principale condition préalable à l'apprentissage de tout type d'incorporation est une grande collection de données textuelles, généralement de l'ordre de milliards de mots. Malheureusement, aucune telle grande collection de données n'existe pour l'afrikaans. Aux fins de cette étude, nous avons utilisé une combinaison de données librement disponibles, y compris les corpus de textes en afrikaans du NCHLT (Eiselen & Puttkammer 2014), les données de textes monolingues en afrikaans d’Autshumato (Snyman et al., 2013) et Wikipédia [2], ainsi que des ensembles de données internes dont l’accès est restreint en raison des droits d’auteur. Au total, les modèles ont été entraînés sur environ 250 millions de mots, ce qui est bien moins de données que ce qui est généralement utilisé pour l'apprentissage de plongements pour la plupart des langues bien dotées du monde.

Puisque l'étude actuelle s'intéresse principalement à l'exploration des caractéristiques des représentations vectorielles, les paramètres par défaut ont été utilisés pour l'entraînement de chacune des embeddings.

## 3 Techniques d'analyse pour les embeddings de mots : Conception expérimentale pour l'afrikaans

Comme mentionné ci-dessus, une évaluation purement intrinsèque des embeddings de mots reste insaisissable car les vecteurs contiennent de grandes quantités de valeurs numériques qui ne correspondent pas clairement à des caractéristiques linguistiques spécifiques et sont donc difficilement interprétables par les humains. Les embeddings de mots sont généralement évalués lorsqu'ils sont utilisés comme entrée d'un système plus large qui montre alors une performance améliorée. Avec ce type d'évaluation extrinsèque, il est cependant difficile d'évaluer la contribution des embeddings à la performance globale par rapport à, par exemple, l'architecture du système (Schnabel et al. 2015). Nous allons maintenant discuter de la manière dont nous avons utilisé des techniques d'analyse existantes pour évaluer et explorer les embeddings de l'afrikaans.

## 3.1 Analogies

Diverses tentatives ont été faites pour étudier comment les embeddings de différents mots sont corrélés et pour montrer qu'ils représentent un certain attribut linguistique (Allen & Hospedales 2019, Miaschi & Dell'Orletta 2020, Tulkens et al. 2016, Warstadt et al. 2019). Une telle technique consiste à utiliser des données basées sur des analogies pour tester l'identification des relations linguistiques à l'aide des embeddings de mots (Mikolov et al. 2013a, Turney 2012). L'analogie la plus citée est sans aucun doute « Quel mot est à roi ce que femme est à homme ? » avec la réponse attendue « reine ».

Mikolov et coll. (2013a) ont présenté l’ensemble de tests d’analogie de Google pour l’anglais, qui contient neuf catégories morphosyntaxiques et cinq catégories sémantiques. Les tâches sémantiques sont toutes encyclopédiques tandis que les catégories morpho-syntaxiques incluent deux tâches sur la morphologie dérivationnelle, six sur la morphologie flexionnelle et une tâche encyclopédique, avec entre 20 et 70 paires de mots uniques chacune. Comme l'ont souligné Gladkova et al. (2016), il existe deux problèmes avec les ensembles de tests existants : premièrement, la plupart d'entre eux ne sont pas équilibrés pour les différents types de relations linguistiques et deuxièmement, les résultats sont généralement rapportés comme une moyenne sur l'ensemble du test et non par type de relation. Pour remédier au premier défaut, ils ont introduit le Bigger Analogy Test Set (BATS) couvrant quatre types principaux de relations linguistiques : la morphologie flexionnelle et dérivationnelle ainsi que la sémantique lexicographique et encyclopédique. Chaque type principal contient à son tour 10 relations différentes avec 50 paires de mots uniques chacune.

À ce jour, il y a eu peu d'études sur les embeddings pour les langues d'Afrique du Sud (Dlamini et al. 2021), et aucun ensemble de tests d'analogies de ce type n'existe pour l'afrikaans spécifiquement. Pour cette première exploration des embeddings de mots en afrikaans, BATS a servi d'inspiration pour créer un petit ensemble d'analogies. Nous n'avons pas inclus de tâches sémantiques lexicographiques à ce stade, mais nous avons décidé de nous concentrer sur la morphologie flexionnelle et dérivationnelle ainsi que sur deux tâches sémantiques encyclopédiques pour la comparaison avec l'anglais.

La première étape a été une analyse minutieuse des catégories utilisées : étant basées sur l’anglais, elles ne sont pas toutes applicables à une langue différente. Par exemple, l'une des tâches de morphologie flexionnelle dans BATS, la formation du pluriel des verbes, n'est pas présente en afrikaans. De plus, pour les catégories applicables, une simple traduction n'est généralement pas une option viable en raison des différences d'utilisation, de fréquences et de formations des mots en afrikaans. Pour chaque catégorie couverte dans notre étude, nous avons tenté d'obtenir un échantillon représentatif de autant d'aspects de la catégorie que possible. Pour les noms pluriels par exemple, un nombre substantiel de différentes classes de pluriels réguliers et irréguliers trouvés dans les manuels et les grammaires ont été inclus. Il en va de même pour les adjectifs comparatifs et superlatifs. Un aspect linguistique qui a eu une investigation limitée dans ce type de tests, mais qui est très répandu en afrikaans, est la composition. Par conséquent, un ensemble très petit de composés nominaux a été inclus pour déterminer comment ils sont représentés dans les embeddings.

Notre ensemble de tests pour l'afrikaans comprend deux tâches sémantiques, toutes deux encyclopédiques, et 11 tâches morpho-syntaxiques, trois dérivationnelles, sept flexionnelles ainsi que composées. Au total, il y a 16 313 "questions" d'analogie. Le tableau 1 donne un aperçu des catégories choisies, y compris le nombre de paires de mots par tâche et un exemple pour chacune.

Les réponses aux questions d'analogie sont calculées en prenant la représentation vectorielle du mot 1 (Vw1), en soustrayant le vecteur du mot 2 (Vw2), lié soit sémantiquement soit morpho-syntaxiquement, puis en ajoutant le vecteur d'un troisième mot (Vw3). Le vecteur résultant (Vresult) est ensuite comparé aux vecteurs de tous les mots du modèle pour trouver le(s) vecteur(s) avec la plus petite distance euclidienne. L'attente est que le vecteur le plus proche du vecteur résultat exprimera la même relation avec W3 que la relation entre W1 et W2. L'exemple prototypique, Vking - Vman + Vwoman devrait résulter en un vecteur qui a la plus petite distance à Vqueen. De même, Vstronger - Vstrong + Vclear devrait donner un vecteur le plus proche de Vclearer. La visualisation vectorielle dans la Figure 1 donne une intuition de la raison pour laquelle cela devrait fonctionner. Les décalages entre homme et femme, et roi et reine, bien que non exactement les mêmes, sont similaires. Par conséquent, en supprimant les caractéristiques masculines du roi et en ajoutant les caractéristiques féminines, on devrait obtenir un vecteur proche de la reine.

Tableau 1: Ensemble de données d'analogie pour l'afrikaans: Types de relations linguistiques, nombre de paires de mots uniques et exemples.

p04-01.png

## 3.2 Voisins les plus proches

Une deuxième méthode décrite par Collobert & Weston (2008) et également référencée par Mikolov et al. (2013a) est l'analyse des voisins les plus proches pour un ensemble de mots spécifique. Le voisin le plus proche d'un mot est à nouveau déterminé en trouvant les vecteurs de mots qui présentent la plus petite distance euclidienne entre le vecteur de la requête et les vecteurs de tous les autres mots pour lesquels des plongements existent dans le modèle. L'hypothèse est qu'une revue qualitative des voisins fournit des informations supplémentaires sur les types de relations que les embeddings apprennent. À titre d'exemple, le plongement anglais fastText pour le mot « run » inclut « runs, running, ran », ce qui indique l'encodage de certaines propriétés morpho-syntaxiques. Bien qu'il ne soit pas possible de créer une seule métrique à des fins d'évaluation, il s'agit d'une procédure utile pour comprendre les informations sous-jacentes qui sont encodées dans les embeddings, telles que l'hyperonymie, l'hyponymie, la synonymie ou les relations morpho-syntaxiques.

L'une des mises en garde à garder à l'esprit avec l'analyse du plus proche voisin est que différents types de relations peuvent être trouvés au sein d'une même architecture de plongement, et il n'est pas toujours immédiatement évident de savoir quelle information est encodée dans les plongements. Des modèles cohérents peuvent être trouvés, mais ne devraient être utilisés que pour tirer des conclusions très larges et générales sur l'information codée.

p05-01.png

Figure 1 : Représentation vectorielle liée au genre (d'après Pennington et al. (2014))

Pour étudier l'information encodée dans les différentes architectures de plongement pour l'afrikaans, nous avons sélectionné deux mots de chaque catégorie listée dans le Tableau 1, soit 26 au total, et généré les cinq voisins les plus proches pour chaque mot dans chacune des différentes architectures. Celles-ci ont ensuite été examinées manuellement pour déterminer la qualité et la nature des incrustations.

## 3.3 Évaluation des tâches en aval

La méthode la plus courante pour valider la qualité des plongements lexicaux est leur application dans le cadre d'une tâche en aval, telle que l'étiquetage POS, la reconnaissance d'entités nommées ou les systèmes de questions-réponses. L'utilisation d'embeddings plutôt que d'un encodage one hot a été l'une des premières étapes permettant la tendance actuelle de l'apprentissage profond en TALN, et il a été constamment démontré que l'utilisation d'embeddings dans des tâches en aval améliore la qualité de la technologie. Il a également été démontré que cela est le cas pour l'afrikaans où une combinaison d'embeddings FLAIR améliore à la fois les résultats d'étiquetage morpho-syntaxique et de reconnaissance d'entités nommées par rapport aux modèles précédents (Eiselen 2022). En raison des contraintes d'espace, nous n'incluons pas ces résultats dans l'analyse actuelle.

## 4 Analyse des embeddings de mots en afrikaans : Résultats

L'une de nos motivations initiales pour cette recherche était d'examiner si le type d'information encodé dans différents modèles de plongement est similaire pour des langues linguistiquement différentes et si les méthodes utilisées pour évaluer les plongements anglais sont également applicables à des langues morphologiquement plus complexes. Nous présenterons d'abord les résultats de la tâche d'analogie par (sous) tâche linguistique, y compris une discussion approfondie de nos observations. Cette évaluation quantitative intrinsèque des plongements lexicaux pour l'afrikaans est suivie d'une analyse qualitative intrinsèque examinant les plus proches voisins, comme décrit dans la section 3.2.

## 4.1 Analogies : Évaluation quantitative

En utilisant l'ensemble de données d'analogies pour l'afrikaans décrit précédemment, la précision pour chaque type de tâche est calculée séparément. Les études précédentes ne rapportent pour la plupart que l'exactitude du mot ayant la plus petite distance euclidienne. Notre évaluation, cependant, comprend deux scores de précision: un pour les correspondances à partir du mot le plus proche (position 1) et un pour les correspondances à partir des mots dans les quatre positions suivantes (position 2-5). Inclure plus que les seuls correspondants les plus proches nous donne davantage d'aperçus sur les différentes représentations par plongement pour les diverses tâches d'analogie. De plus, lors du calcul des précisions, tous les mots interrogatifs d'entrée ont été exclus des résultats. L'omission de cette adaptation a entraîné des résultats beaucoup plus mauvais (un effet également noté dans Linzen (2016)). Le tableau 2 montre les résultats pour les différentes catégories linguistiques (agrégées au niveau des sous-catégories) et types d'embeddings.

Dans nos expériences pour l'afrikaans, la tâche et le type de plongement globalement les plus performants sont GloVe sur les tâches sémantiques avec 51,11% d'exactitude, tandis que les pires résultats sont également obtenus avec GloVe, mais sur les tâches de morphologie dérivationnelle (1,11%). Comparés aux résultats pour l'anglais sur le jeu de données Google (allant de près de 60% (Mikolov et al. 2013a) à un peu plus de 60% (Levy & Goldberg 2014)), il est remarquable de constater à quel point tous les types de plongement performent mal sur toutes les tâches pour l'afrikaans. En comparant nos résultats GloVe avec ceux de Gladkova et al. (2016) des résultats plus détaillés sur BATS, la performance sur Afrikaans est encore une fois un peu plus faible.

En se concentrant sur le type de tâches, FLAIR se comporte le mieux pour les tâches dérivationnelles et GloVe le moins bien. Les embeddings GloVe et fastText ont tous deux un très haut pourcentage de mots non trouvés dans les dix premiers (87 % et 68 % respectivement), ce qui explique leur performance plus faible. La raison probable de la mauvaise performance sur les dérivations est le fait que, par définition, les mots appariés appartiennent à des catégories syntaxiques différentes et n'apparaissent généralement pas dans des positions similaires, n'ont donc pas de cooccurrences similaires au mot de requête et auront donc des représentations vectorielles sensiblement différentes.

Pour la morphologie flexionnelle, fastText a le plus haut pourcentage d'analogies correctes pour la première position, tandis que GloVe a le plus bas, bien que la différence de précision soit assez faible par rapport aux autres tâches. Intéressamment, il y a des différences marquées dans les mots corrects trouvés aux positions 2-5 : FLAIR trouve l'analogie recherchée dans plus de 40 % des cas, tandis que les autres types d'embedding ne la trouvent que légèrement plus de 20 %. Les embeddings FLAIR trouvent également le plus d'analogies tandis que GloVe en trouve le moins. Cela peut s'expliquer par le fait que les embeddings FLAIR encodent des séquences de caractères et que la morphologie flexionnelle se produit généralement au niveau des caractères. En ce qui concerne les sous-tâches de flexion, les formes plurielles et diminutives sont les plus difficiles à détecter.

Les résultats pour les analogies composées indiquent que les embeddings de mots n'apprennent pas une représentation des constituants du composé. Effectuer un test d'analogie qui isole la tête du composé aboutit à une représentation qui se trouve dans un espace vectoriel complètement sans rapport, sans corrélation ni avec le composé ni avec sa tête. Bien que les mots composés soient généralement moins fréquents que la tête du mot composé, cela ne semble pas être le principal facteur contribuant à la faible performance. Comme nous le verrons dans la section suivante, les voisins les plus proches de la tête contiennent de nombreux composés, même des composés de fréquence relativement faible, ce qui indique que le composé complet est perçu comme semblable à la tête, mais pas nécessairement au niveau des constituants. Cet aspect des embeddings n'a pas été étudié de manière approfondie et nécessitera une investigation plus poussée à l'avenir.

Tableau 2 : Précision pour l'ensemble de tests d'analogies en afrikaans sur différentes tâches linguistiques (agrégées au niveau des sous-catégories) pour trois types d'embeddings de mots (meilleure performance en position 1 par type de tâche en gras).

p06-01.png

Les résultats des tâches d'analogies sémantiques sont l'inverse de ceux des tâches morpho-syntaxiques (à l'exclusion de la composition) : GloVe surpasse très clairement tous les autres types d'embeddings sur toutes les mesures. Ici, les embeddings FLAIR donnent les pires résultats, également sur tous les comptes. La seule réserve à ces résultats est que les embeddings FLAIR sont par nature contextuels, et différentes représentations vectorielles seront générées lorsque les mots seront considérés dans des contextes de phrases, ce qui n'était pas le cas dans nos tests. Il se pourrait bien que les embeddings FLAIR fonctionnent mieux sur les tâches d'analogie sémantique si des vecteurs sont générés pour les mots dans un contexte de phrase. Malheureusement, il n'existe pas actuellement de méthodologie bien définie pour générer des plongements pour ce type de tâche et c'est un point qui devra être pris en compte dans les travaux futurs, surtout si ce type d'analyse est entrepris avec d'autres types de représentations, comme les modèles transformeurs.

Pour résumer, nos résultats corroborent des travaux antérieurs sur l'anglais selon lesquels différents types d'embeddings fonctionnent le mieux pour différentes tâches d'analogies linguistiques. De plus, nos résultats sur cet ensemble de tests d'analogie indiquent que la morphologie flexionnelle est plus facile à modéliser que la morphologie dérivationnelle, alors que la composition, une caractéristique typique de l'afrikaans, est très difficile à modéliser. Dans l'ensemble, la performance sur l'afrikaans, un langage plus morphologiquement complexe et productif, est plus faible que prévu.

## 4.2 Voisins les plus proches : Évaluation qualitative

Après l'analyse plus quantitative utilisant des analogies, nous examinons maintenant les plus proches voisins pour l'afrikaans, s'ils diffèrent de nos attentes, et ce que nous pouvons apprendre de cet examen.

## fastText embeddings

Le principal résultat concernant les embeddings fastText est qu'il y a peu, voire pas du tout, d'exemples de relations sémantiques parmi les voisins pour aucun des mots sélectionnés, et dans presque tous les cas, la requête est un sous-chaîne au sein de l'ensemble des voisins les plus proches, voir par exemple pour verdeel (diviser) et Berlyn (Berlin) :

p07-01.png

p07-02.png

Cela peut être principalement attribué au fait que l'inclusion d'informations sur les sous-mots dans les incrustations a un fort effet sur les représentations vectorielles et coïncide avec le fait que la morphologie de l'afrikaans est plus productive que l'anglais, à la fois en termes de paradigmes flexionnels et dérivationnels. La conséquence en est que toute forme flexionnelle ou dérivationnelle présentant une forme de changement typographique, par exemple le raccourcissement des voyelles doubles dans les formes plurielles, n'est généralement pas associée au mot requête et n'est donc pas renvoyée comme plus proche voisin. En outre, le fait que l'afrikaans soit une langue à composition signifie qu'un grand nombre de mots étroitement associés à une requête tendent à être soit des flexions de la requête, soit un composé incluant la requête, plutôt que des mots sémantiquement apparentés comme c'est souvent le cas en anglais.

## FLAIR embeddings

Comme cela a été montré précédemment dans la section 4.1, et comme on pouvait s'y attendre étant donné les paramètres d'évaluation, il n'y a essentiellement aucune relation sémantique entre les mots de la requête et les voisins les plus proches pour les embeddings FLAIR. Contrairement aux plongements fastText, les plongements FLAIR n'incluent pas le terme de la requête comme sous-chaîne des voisins, mais il existe de fortes corrélations avec les schémas flexionnels. A titre d'exemple, les voisins les plus proches pour le mot leesbaar (lisible) sont les suivants:

p08-01.png

À partir de cet ensemble, nous voyons que le modèle est soit en accord avec la sous-chaîne 'lee' au début du mot, soit avec le morphème -baar (-able) à la fin. C'est une indication que le modèle est plus susceptible de modéliser la structure des affixes.

## GloVe embeddings

Les embeddings pour GloVe sont sensiblement différents des autres types, avec une combinaison d'instances morpho-syntaxiques, sémantiques et de cooccurrence apparaissant dans la liste des voisins les plus proches, par exemple :

p08-02.png

p08-03.png

Dans les exemples pour hoog (haut), on trouve des flexions - hoë (haut), hoogte (hauteur), hoër (plus haut) ; des mots sémantiquement liés - laag (bas), bo (au-dessus), bokant (au-dessus, sommet) ; ainsi que des mots qui cooccurrent fréquemment avec hoog - meter hoog (mètre de haut), so hoog (si haut). Ces cooccurrences ne sont pas nécessairement les plus fréquentes, car te (trop), is (est) et baie (très) apparaissent toutes plus fréquemment avec hoog que meter (VivA 2022). Le même modèle se produit également pour ironie (ironie) avec les trois types de relations trouvées dans les voisins les plus proches.

## 5 Discussion et travaux futurs

Nos explorations des embeddings en afrikaans ont montré que, de manière similaire à d'autres langues, différents types d'embeddings fonctionnent le mieux pour différentes tâches d'analogies linguistiques. Cependant, une analyse minutieuse des analogies et des résultats des plus proches voisins démontre également que ces embeddings n'encodent pas une représentation linguistique aussi claire que pour l'anglais. Il existe deux raisons possibles à ces différences : l'afrikaans est linguistiquement différent à un degré pertinent ou davantage de données sont nécessaires pour entraîner des embeddings plus représentatifs. Actuellement, nous ne savons pas quelle est la principale source des lacunes des embeddings en afrikaans, mais nous supposons que très probablement, à la fois la complexité morphologique ajoutée et le manque de données ont une influence.

En cas de diversité/complexité linguistique, cela signifierait que plus une langue diffère de l'anglais, par exemple d'autres langues sud-africaines comme l'isiZulu ou le Setswana, plus les embeddings de mots doivent être entraînés avec soin et plus ils doivent être évalués de manière critique. Si la rareté des données est en cause (même si 250 millions représente un niveau intermédiaire en termes de ressources), cela n'augure rien de bon pour les langues à ressources limitées lors de la construction puis de l'utilisation de plongements pour des tâches de TAL et/ou pour tenter de comprendre ce qu'ils représentent.

Dans l'ensemble, comme les embeddings pour les langues composées morphologiquement complexes sont substantiellement différents de l'anglais, la façon d'entraîner ces embeddings ainsi que la façon dont nous les analysons doivent être repensées, en particulier pour les langues sous-ressources.

Les travaux futurs incluent la construction d'un ensemble complet d'analogies couvrant plus de catégories linguistiques pertinentes pour l'afrikaans. Étendre ces explorations aux autres langues sud-africaines est également un défi intéressant, surtout compte tenu de leur productivité morphologique élevée en conjonction avec très peu de données.

## Notes

[1] https://repo.sadilar.org

[2] https://dumps.wikimedia.org/

## Remerciements

Ce travail a été rendu possible grâce au soutien financier du National Centre for Human Language Technology, une initiative du Département sud-africain des sports, des arts et de la culture.

## Références

Allen, C & Hospedales, T 2019, 'Analogies explained: Towards understanding word embeddings' , In: Proceedings of the 36th International Conference on Machine Learning, Long Beach, CA, PMLR, pp. 223-231.

Bengio, Y, Ducharme, R, Vincent, P & Jauvin, C 2003, 'A neural probabilistic language model' , Journal of Machine Learning Research, vol. 3, pp. 1137-1155.

Bojanowski, P, Grave, E, Joulin, A & Mikolov, T 2017, 'Enriching word vectors with subword information' , Transactions of the Association for Computational Linguistics, vol. 5, pp. 135-146.

Collobert, R & Weston, J 2008, 'A unified architecture for natural language processing: Deep neural networks with multitask learning' , In: Proceedings of the 25th International Conference on Machine learning, Valencia, Spain, pp. 160-167.

Conneau, A, Khandelwal, K, Goyal, N, Chaudhary, V, Wenzek, G, Guzmán, F, Grave, É, Ott, M, Zettlemoyer, L & Stoyanov, V 2020, 'Unsupervised Cross-lingual Representation Learning at Scale' , In: Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, Seattle, WA, ACL, pp. 8440-8451.

Dlamini, S, Jembere, E, Pillay, A & van Niekerk, B 2021, 'isiZulu Word Embeddings' , In: Proceedings of the 2021 Conference on Information Communications Technology and Society, Durban, South Africa, IEEE, pp. 121-126.

Eiselen, R 2022, 'Afrikaans Text Embeddings for Sequence Labelling with Deep Neural Networks' , In: Proceedings of the Southern African Conference for Artificial Intelligence Research 2022, Stellenbosch, South Africa, SACAIR.

Eiselen, R & Puttkammer, MJ 2014, 'Developing Text Resources for Ten South African Languages' , In: Proceedings of the 9th International Conference on Language Resources and Evaluation, Reykjavik, Iceland, ELRA, pp. 3698-3703.

Gladkova, A, Drozd, A & Matsuoka, S 2016, 'Analogy-based detection of morphological and semantic relations with word embeddings: what works and what doesn't' , In: Proceedings of the NAACL Student Research Workshop, San Diego, CA, ACL, pp. 8-15.

Grave, É, Bojanowski, P, Gupta, P, Joulin, A & Mikolov, T 2018, 'Learning Word Vectors for 157 Languages' , In: Proceedings of the 11th International Conference on Language Resources and Evaluation, Miyazaki, Japan, ELRA, pp 3483-3487.

Hanslo, R 2021, 'Evaluation of Neural Network Transformer Models for Named-Entity Recognition on Low-Resourced Languages' , In: Proceedings of the 16th Conference on Computer Science and Intelligence Systems (FedCSIS), Virtual, IEEE, pp. 115-119.

Heyns, N & Barnard, E 2020, 'Optimising word embeddings for recognised multilingual speech' , In: Proceedings of the Southern African Conference for Artificial Intelligence Research Conference 2020, Online, Virtual, SACAIR, pp. 102-116.

Levy, O & Goldberg, Y 2014, 'Linguistic Regularities in Sparse and Explicit Word Representations' , In: Proceedings of the 18th Conference on Computational Language Learning, Baltimore, MD, ACL, pp. 171-180.

Linzen, T 2016, 'Issues in evaluating semantic spaces using word analogies' , In: Proceedings of the 1st Workshop on Evaluating Vector Space Representations for NLP, Berlin, Germany, ACL, pp. 13-18.

Loubser, M & Puttkammer, MJ 2020, 'Viability of Neural Networks for Core Technologies for Resource-Scarce Languages' , Information, vol. 11, pp. 41-57.

Miaschi, A & Dell'Orletta, F 2020, 'Contextual and non-contextual word embeddings: an in-depth linguistic investigation' , In: Proceedings of the 5th Workshop on Representation Learning for NLP, Seattle, WA, ACL, pp. 110-119.

Mikolov, T, Chen, K, Corrado, G & Dean, J 2013a, 'Efficient estimation of word representations in vector space' , In: Proceedings of the International Conference on Learning Representations 2013, Scottsdale, AZ.

Mikolov, T, Sutskever, I, Chen, K, Corrado, GS & Dean, J 2013b, 'Distributed representations of words and phrases and their compositionality ' , Advances in Neural Information Processing Systems, vol. 26, pp. 3111-3119.

Mikolov, T, Yih, W & Zweig, G 2013c, 'Linguistic regularities in continuous space word representations' , In: Proceedings of the 2013 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Atlanta, GA, ACL, pp. 746-751.

Pennington, J, Socher, R & Manning, CD 2014, 'Glove: Global vectors for word representation' , In: Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing (EMNLP), Doha, Qatar, ACL, pp. 1532-1543.

Puttkammer, MJ, Eiselen, R, Hocking, J & Koen, F 2018, 'NLP Web Services for Resource-Scarce Languages' , In: Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics: System Demonstrations, Melbourne, Australia, ACL, pp. 43-49.

Ralethe, S 2020, 'Adaptation of deep bidirectional transformers for Afrikaans language' , In: Proceedings of the 12th Language Resources and Evaluation Conference, Marseille, France, ELRA, pp. 2475-2478.

Schnabel, T, Labutov, I, Mimno, D & Joachims, T 2015, 'Evaluation methods for unsupervised word embeddings' , In: Proceedings of the 2015 Conference on Empirical Methods in Natural Language Processing, Lisbon, Portugal, ACL, pp. 298-307.

Snyman, DP, McKellar, CA & Groenewald, H 2013, 'Autshumato English-Afrikaans Parallel Corpora' , Data set, v1.0, South African Centre for Digital Language Resources (SADiLaR), https://hdl.handle.net/20.500.12185/397.

Tulkens, S, Emmery, C & Daelemans, W 2016, 'Evaluating Unsupervised Dutch Word Embeddings as a Linguistic Resource' , In: Proceedings of the 10th International Conference on Language Resources and Evaluation, Portorož, Slovenia, ELRA, pp. 4130-4136

Turney, PD 2012, 'Domain and function: A dual-space model of semantic relations and compositions' , Journal of Artificial Intelligence Research, vol. 44, pp. 533-585.

Van Heerden, I & Bas, A 2021, 'AfriKI: Machine-in-the-Loop Afrikaans Poetry Generation' , In: Proceedings of the 1st Workshop on Bridging Human-Computer Interaction and Natural Language Processing, Virtual, ACL, pp. 74-80.

VivA 2022, 'Korpusportaal: Omvattend 1.11' , Virtuele Instituut vir Afrikaans (VivA), viewed 1 September 2022, <https://viva-afrikaans.org>.

Warstadt, A, Cao, Y, Grosu, I, Peng, W, Blix, H, Nie, Y, Alsop, A, Bordia, S, Liu, H & Parrish, A 2019, 'Investigating BERT's Knowledge of Language: Five Analysis Methods with NPIs' , In: Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing, Hong Kong, China, ACL, pp. 2877-2887.
