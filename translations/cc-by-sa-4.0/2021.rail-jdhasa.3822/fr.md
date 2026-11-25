> Machine translation (fr) of "Training Cross-Lingual embeddings for Setswana and Sepedi" by Mack Makgatho, Vukosi Marivate, Tshephisho Sefara, Valencia Wagner, https://upjournals.up.ac.za/index.php/dhasa/article/view/3822, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Entraînement de plongements interlingues pour le setswana et le sepedi

Mack Makgatho, Vukosi Marivate, Tshephisho Sefara, Valencia Wagner

**Affiliations**  
Makgatho, Mack  
Dept. of Computer Science, University of Pretoria  
  
Marivate, Vukosi  
Dept. of Computer Science, University of Pretoria  
  
Sefara, Tshephisho  
Council for Scientific and Industrial Research  
  
Wagner, Valencia  
Sol Plaatje University  


## Résumé

Les langues africaines sont encore à la traîne dans les progrès des techniques de traitement du langage naturel, l'une des raisons étant le manque de données représentatives, avoir une technique qui peut transférer des informations entre les langues peut aider à atténuer le problème du manque de données. Cet article entraîne des vecteurs de mots monolingues pour le setswana et le sepedi et utilise VecMap pour créer des plongements interlingues setswana-sepedi afin d'effectuer un transfert interlingue.

Les plongements lexicaux sont des vecteurs de mots qui représentent les mots sous forme de nombres flottants continus où les mots sémantiquement similaires sont projetés vers des points proches dans un espace n-dimensionnel. L'idée des embeddings de mots est basée sur l'hypothèse de distribution qui stipule que les mots sémantiquement similaires sont distribués dans des contextes similaires (Harris, 1954).

Les plongements interlingues exploitent les plongements monolingues en apprenant un espace vectoriel partagé pour deux vecteurs monolingues entraînés séparément, de sorte que les mots ayant une signification similaire soient représentés par des vecteurs similaires. Dans cet article, nous étudions les plongements interlingues pour les vecteurs de mots monolingues setsuana-sepedi. Nous utilisons les plongements interlingues non supervisés de VecMap pour entraîner les plongements lexicaux interlangues setswana-sepedi. Nous évaluons la qualité de la représentation interlingue des mots setswana-sepedi à l'aide d'une tâche d'évaluation sémantique. Pour la tâche de similarité sémantique, nous avons traduit les tâches WordSim et SimLex en Setswana et Sepedi. Nous publions cet ensemble de données dans le cadre de ce travail pour d'autres chercheurs. Nous évaluons la qualité intrinsèque des embeddings pour déterminer s'il y a une amélioration de la représentation sémantique des embeddings de mots.

## Mots-clés

plongements interlingues, plongements lexicaux, évaluation intrinsèque

## 1 Introduction

De nombreuses langues africaines ont des ressources linguistiques insuffisantes (données, outils, personnes) (Abbott & Martinus 2019, Martinus & Abbott 2019, Nekoto et al. 2020, Sefara et al. 2021) et tombent dans la classification des langues à faible ressource (Ranathunga et al. 2021) dans le domaine du traitement du langage naturel (NLP). Ce manque de ressources rend plus difficile la capitalisation sur les récentes avancées dans de nombreuses tâches en aval du TAL telles que la Traduction Automatique Neuronale (Cho et al. 2014), les Grands Modèles de Langage (Devlin et al. 2018, Howard & Ruder 2018), les systèmes de Questions-Réponses (Kwiatkowski et al. 2019), etc. Il peut exister d'autres approches en aval pour traiter certains de ces défis, telles que l'apprentissage par transfert (Ruder et al. 2019), l'augmentation de données (Marivate & Sefara 2020a), les modèles multilingues (Hedderich et al. 2020), etc. De plus, le manque d'attention de la recherche sur les techniques existantes du TAL entraîne des difficultés à trouver un benchmark (Abbott & Martinus 2019). Dans ce travail, nous nous concentrons sur les représentations de mots par le biais des embeddings de mots et sur la manière dont nous pouvons utiliser une langue pour aider à la représentation d'une autre langue apparentée. Ces embeddings peuvent ensuite être utilisés pour développer des outils pour d'autres tâches en aval.

Les embeddings de mots sont une technique mathématique pour apprendre des représentations vectorielles générales de langage à partir d'une grande quantité de texte non étiqueté en utilisant des statistiques de co-occurrence. Ces dernières années, les techniques de plongements lexicaux monolingues deviennent une ressource de plus en plus importante en TAL. Les plongements lexicaux sont largement utilisés dans les problèmes de TAL tels que l'analyse de sentiments (Socher et al. 2013), la reconnaissance d'entités nommées (Guo et al. 2014), l'étiquetage des parties du discours et la recherche documentaire. Word2Vec est un modèle d'entraînement vectoriel proposé par Mikolov et al. (2013). Word2Vec produit un vecteur de faible dimension à valeur réelle représentant le sens d'un mot. Le vecteur de mots représente les propriétés grammaticales et sémantiques, ce qui fait que les mots ayant des relations sémantiques similaires sont proches les uns des autres. La méthode de représentation vectorielle des mots intègre la relation sémantique entre les mots, ce qui n'est pas possible avec des représentations telles que BagOf-Words de TFIDF. Les plongements lexicaux sont meilleurs que ces deux méthodes car ils projettent tous les mots d'une langue dans un espace vectoriel d'une dimension donnée, les mots sont convertis en vecteurs et permettent de multiples opérations linéaires et ont la propriété de préserver les analogies (Mikolov et al. 2013, Pennington et al. 2014).

Les plongements lexicaux interlingues ont reçu de plus en plus d'attention de la part de la communauté du TAL, principalement parce qu'ils ont fourni une voie pour aligner efficacement deux plongements monolingues disjoints sans dictionnaire bilingue pour les techniques non supervisées ou avec pas plus qu'un petit dictionnaire bilingue pour les techniques supervisées (Lample et al. 2018, Artetxe et al. 2020). Les techniques interlingues permettent également le transfert de connaissances entre les langues disposant de ressources riches et celles disposant de ressources limitées. Pour les langues ne disposant pas de corpus parallèle bilingue avec d'autres langues, les plongements interlingues peuvent être utilisés pour entraîner des plongements interlingues de haute qualité (Lample et al. 2018). Cela peut contribuer à accélérer les progrès de l'application du TAL aux langues à faibles ressources. Artetxe et al. (2018) ont créé l'approche de plongement lexical interlingue non supervisé ou supervisé (bibliothèque VecMap) pour l'entraînement de modèles de plongements lexicaux interlingues. Les approches peuvent être utilisées pour construire des vecteurs de mots interlingues avec ou sans dictionnaire bilingue.

La majorité des langues sud-africaines sont à la traîne par rapport aux autres langues en termes de corpus parallèles bilingues. Dans ce travail, nous cherchons à étudier comment les plongements interlingues pourraient être utilisés pour améliorer l'état d'une ou des deux langues. Nous avons utilisé des données (corpus) de différents domaines pour entraîner des embeddings monolingues Word2Vec et fastText (Bojanowski et al. 2016). Lorsque VecMap est utilisé, les deux embeddings sont alignés. VecMap nécessite deux vecteurs de mots monolingues de la source et de la cible (Artetxe et al. 2018). Pour évaluer l'efficacité du plongement interlingue pour le setswana et le sepedi, nous utilisons une évaluation intrinsèque (Bakarov 2018) via les versions setswana et sepedi de WordSim (Finkelstein et al. 2001) et Simlex (Hill et al. 2015). Cela fait suite à une approche qui a été utilisée pour Yoruba et Twi (Alabi et al. 2019). Nous publions également le jeu de données pour ce benchmark de la tâche de similarité sémantique humaine.

Cet article est structuré comme suit ; la section suivante est une revue des travaux connexes réalisés sur les vecteurs de mots interlingues. Suivie par la collecte de données dans la Section 3. La Section 4 discute de la méthodologie suivie pour entraîner des vecteurs de mots interlingues en utilisant VecMap. L'évaluation des vecteurs de mot est discutée dans la section 5. La Section 5.1 explique les résultats tandis que la Section 6 discute des conclusions et enfin, les conclusions et les travaux futurs peuvent être trouvés dans la Section 7.

## 2 Contexte et travaux connexes

Les plongements lexicaux interlingues (CLWEs) deviennent populaires en TAL pour deux raisons : les plongements lexicaux interlingues peuvent transférer des connaissances des langues riches en ressources vers les langues peu dotées ; cette technique peut également inférer la sémantique des mots dans un environnement multilingue. Conneau et al. (2018) montrent que les espaces de plongements lexicaux peuvent être alignés sans aucune supervision interlingue. L'alignement est basé uniquement sur des ensembles de données non alignés de chaque langue. En utilisant l’apprentissage adversatif, ils ont pu initialiser un mappage linéaire entre un espace source et un espace cible, qu’ils utilisent pour créer un dictionnaire parallèle synthétique. Tout d'abord, ils proposent un critère simple qui est utilisé comme métrique de validation non supervisée. Deuxièmement, ils proposent la mesure de similarité cross-domain similarity local scaling (CSLS), qui atténue le problème de hubness et augmente la précision de la traduction des mots. Le problème de hubness est défini par Dinu et al. (2015) comme :

"les voisinages des éléments mappés sont fortement pollués par des hubs, des vecteurs qui tendent à être proches d'une grande proportion d'éléments, poussant leurs étiquettes correctes vers le bas de la liste des voisins."

Dans le travail réalisé par Adams et al. (2017), la recherche a porté sur l'application des CLWEs au Yongning Na, une langue sino-tibétaine. La recherche s’est concentrée sur la détermination si la qualité des CLWE dépend de la présence de grandes quantités de données dans plusieurs langues et si l’initialisation des paramètres des modèles de langage de réseau neuronal (NMLM) peut améliorer la modélisation du langage dans un contexte à faibles ressources. La recherche a réduit les données monolingues disponibles de la langue cible à environ 1000 phrases. La qualité du plongement intrinsèque a été évaluée en prenant en compte la corrélation avec le jugement humain sur l'ensemble de test WordSim353 (Finkelstein et al. 2001). Ils sont allés plus loin pour effectuer des expériences de modélisation linguistique en initialisant les paramètres de la mémoire à long et court terme (LSTM) (Hochreiter & Schmidhuber 1997) en entraînant différentes paires de langues. La recherche a montré que les CLWE sont résilients même lorsque les données d'apprentissage de la langue cible sont réduites et que l'initialisation des paramètres NMLM conduit à de bonnes performances.

Artetxe & Schwenk (2019) ont présenté une architecture qui peut être utilisée pour apprendre des représentations de phrases multilingues pour plus de 90 langues. Les langues appartenaient à 30 familles différentes. La recherche a utilisé un seul encodeur BiLSTM avec un vocabulaire BPE (Byte Pair Encoding) partagé, couplé à un décodeur auxiliaire et entraîné sur des corpus parallèles. Ils apprennent un classificateur en utilisant uniquement des données annotées en anglais et le transfèrent à toute langue sans modification. La recherche s'est principalement concentrée sur les représentations vectorielles de phrases qui sont générales pour la langue d'entrée et la tâche de TAL.

Alabi et al. (2019) ont travaillé sur les embeddings massifs vs. curatés pour les langues sous-dotées : le cas du Yorùbá et du Twi. Les auteurs comparent deux types d'embeddings de mots obtenus à partir de corpus curatés et d'un traitement dépendant de la langue. Ils vont plus loin pour collecter des données de haute qualité et bruyantes pour les deux langues. Ils quantifient ces améliorations qui sont basées sur la qualité des données et pas seulement sur la quantité de données. Dans leurs expériences, ils utilisent différentes architectures pour apprendre les représentations de mots à partir de caractères et de formes de surface. Ils évaluent le BERT multilingue sur une tâche aval, spécifiquement la reconnaissance d'entités nommées et le jeu de données de paires de mots WordSim-353.

Feng et al. (2018) étudient une technique de transfert de connaissances interlingue pour améliorer la représentation sémantique des langues peu dotées et améliorer la reconnaissance d'entités nommées pour les langues peu dotées. Dans leurs recherches, des réseaux de neurones sont utilisés pour effectuer un transfert de connaissances à partir d'une langue riche en ressources en utilisant des lexiques bilingues pour améliorer la représentation des mots à faible ressource. Ils apprennent automatiquement des projections sémantiques en utilisant une stratégie d'extension de lexique conçue pour résoudre le problème de hors-lexique. Enfin, ils considèrent les caractéristiques de distribution des types d'entités au niveau des mots comme une connaissance externe indépendante de la langue et les intègrent dans leur architecture neuronale. L'expérience est réalisée sur deux langues à faibles ressources (le néerlandais et l'espagnol) pour démontrer l'efficacité de ces représentations sémantiques additionnelles.

Banerjee et al. (2021) montrent que l'initialisation de la couche de plongement des modèles de traduction automatique neuronale non supervisée (UNMT) avec des plongements interlingues montre des améliorations significatives du score BLEU. Les auteurs montrent que le gel des poids de la couche de plongement conduit à de meilleurs gains par rapport à la mise à jour des poids de la couche de plongement pendant l'entraînement. Ils ont expérimenté en utilisant un autoencodeur débruitant (DAE) et un modèle séquence à séquence masquée (MASS) pour trois paires de langues différentes non apparentées (anglais-hindi, anglais-bengali et anglais-gujarati). L'analyse montre l'importance d'utiliser un plongement interlingue par rapport à d'autres techniques.

La littérature montre qu'il existe une quantité substantielle de travaux sur le transfert interlingue et une preuve empirique que la méthode améliore les performances des modèles. La littérature ne se concentre pas uniquement sur l'évaluation intrinsèque, mais les solutions sont appliquées à certaines tâches en aval. Dans la section suivante, nous détaillons les données utilisées pour mener les expériences.

## 3 Collecte des données

Les données d'entraînement sont très importantes pour mettre en œuvre des modèles puissants et précis, et des données d'entraînement propres peuvent faire la différence entre un bon modèle et un excellent modèle. Les données doivent être très impératives car la qualité de l'alignement dépend de la qualité des embeddings monolingues, c'est-à-dire des données utilisées pour créer les embeddings monolingues initiaux avant le mappage.

Nous utilisons des données collectées dans différents domaines pour l'entraînement de vecteurs de mots :

JW300 bible (Agić & Vulić 2019): A biblical-domain data set containing parallel corpus for low-resourced languages.

Wikipedia

Centre national pour la technologie du langage humain (NCHLT) corpus de texte (Eiselen & Puttkammer 2014): L'ensemble de données contient des données textuelles propres en Sepedi et Setswana. L’ensemble de données a été construit en recueillant des données existantes telles que les publications en ligne, les nouvelles en ligne, le crawling web et le crowd-sourcing.

Données de SABC News en Setswana et Sepedi (Marivate et al. 2020, Marivate & Sefara 2020b): L’ensemble de données contient des titres d’actualités collectés sur les médias sociaux en ligne.

Les données du Centre national de technologie du langage humain (NCHLT) sont utilisées pour l'entraînement de vecteurs de mots monolingues. Pour le prétraitement, nous avons changé tous les mots en minuscules, en supprimant les crochets, les chiffres, la ponctuation et les espaces blancs.

Tableau 1: Taille du corpus pour les ensembles de données Setswana et Sepedi

p04-01.png

Dans cette section, nous avons traité de la manière dont nous avons collecté les données utilisées pour l'entraînement de nos embeddings monolingues pour les deux langues et de l'approche que nous avons adoptée pour prétraiter les données avant l'entraînement des modèles. Dans la section suivante, nous discutons de l'approche adoptée pour entraîner les plongements monolingues et de la manière dont VecMap a été utilisé pour entraîner les plongements interlingues.

## 4 Entraînement de plongements monolingues et interlingues (VecMap)

Dans cette section, nous présentons les méthodes (cadres) utilisées pour entraîner des plongements monolingues et interlingues. Nous décrivons les paramètres utilisés pour entraîner les embeddings word2Vec et fastText. Nous examinons également VecMap, le cadre que nous avons utilisé pour aligner les embeddings monolingues.

Les CLWE se sont révélés très performants pour les langues à faibles ressources. L'idée principale est d'effectuer un transfert interlingue de la langue source vers la cible, de sorte que nous ayons une représentation unique pour une paire de langues où les mots sémantiquement similaires sont plus proches les uns des autres. Pour utiliser VecMap, deux embeddings monolingues sont nécessaires, nous entraînons des vecteurs fastText et word2Vec. Nous utilisons les paramètres suivants pour fastText et word2Vec dans le tableau 2. La définition des paramètres est la suivante : skip-Gram - méthode d'entraînement, dim - taille des vecteurs de mots, minCount - nombre minimal d'occurrences de mots, ws - taille de la fenêtre de contexte, et epoch - nombre d'époques ou d'itérations.

## 4.1 Word2Vec

L'algorithme word2Vec (Mikolov et al. 2013) est un réseau neuronal à deux couches qui vectorise les mots pour traiter le texte. L'algorithme prend en entrée un corpus de texte et retourne des vecteurs de caractéristiques qui représentent les mots de ce corpus sous forme d'un ensemble de vecteurs. Word2Vec entraîne les mots contre les mots voisins en fonction d'un contexte de taille de fenêtre. Il entraîne les mots en utilisant deux méthodes : skip-gram ou sac de mots continu (CBOW), skip-gram utilise un mot pour prédire un contexte cible et CBOW utilise le contexte pour prédire un mot cible. L'expérience utilise skip-gram pour entraîner des embeddings monolingues. Nous utilisons des vecteurs de mots qui ont été entraînés avec Word2Vec. Ceux-ci correspondent à des embeddings monolingues de dimension 300 entraînés sur des corpus Sepedi et Setswana.

Tableau 2 : Paramètres pour FastText et Word2Vec

p05-01.png

## 4.2 FastText

FastText (Bojanowski et al. 2016) est une technique de prédiction supervisée basée sur la famille d'algorithmes word2Vec (Mikolov et al. 2013). Il prédit les étiquettes à travers le contexte et représente chaque mot comme un n-gramme de caractères, au lieu d'apprendre directement des vecteurs pour les mots. Le modèle fastText a trois couches: couche d'entrée, couche cachée et couche de sortie. L'entrée est un certain nombre de mots et leurs caractéristiques de n-grammes, ces caractéristiques sont utilisées pour représenter un seul document. La couche cachée est la moyenne superposée de plusieurs vecteurs de caractéristiques. La couche cachée résout la fonction de vraisemblance maximale, puis construit un arbre de Huffman selon les poids et les paramètres du modèle de chaque catégorie, et utilise l'arbre de Huffman comme sortie.

## 4.3 VecMap

VecMap (Artetxe et al. 2020) est un framework open-source pour l’apprentissage des CLWEs écrit en Python.

Il existe deux techniques pour réaliser des plongements interlingues avec VecMap, supervisée (recommandée si vous disposez d'un grand dictionnaire d'entraînement) et non supervisée (recommandée si vous n'avez pas de dictionnaire d'amorçage et ne souhaitez pas vous appuyer sur des mots identiques). Dans ce travail, nous alignons les embeddings de mots en utilisant VecMap[1]. L'approche est entièrement non supervisée. Les étapes que nous avons suivies pour construire notre modèle de plongements lexicaux interlingues sont motivées par les auteurs de VecMap Artetxe et al. (2020). L'hypothèse est que nous disposons d'un corpus monolingue pour les langues source et cible. Les représentations de mots sont apprises indépendamment pour chaque langue (embeddings monolingues pour chaque langue), puis mappées dans un espace vectoriel commun.

Dans cette section, nous avons présenté word2Vec, fastText et VecMap. Nous avons également décrit les paramètres utilisés pour entraîner les embeddings word2Vec et fastText. Dans la section suivante, nous présentons les résultats expérimentaux et effectuons quelques analyses.

## 5 Évaluation

Nous évaluons la qualité des représentations vectorielles de mots Setswana et Sepedi sur deux benchmarks différents Simlex et WordSim. Les ensembles de données (Simlex et WordSim) contiennent des paires de mots Setswana et Sepedi auxquels des humains ont attribué des cotes de similarité. Ils donnent un score de similitude entre une paire de mots correspondant à leur parenté. La similarité cosinus est utilisée pour collecter un score à partir du modèle afin de vérifier à quel point le score est proche du score humain, nous utilisons Spearman pour mesurer la corrélation. L'indice de Spearman mesure la dépendance de deux variables, la corrélation de deux variables statistiques est évaluée à l'aide d'une équation monotone. Nous traduisons manuellement l'ensemble de données des paires de mots WordSim et Simlex de l'anglais vers le Setswana et le Sepedi. Nous publions un ensemble de données de WordSim et Simlex traduits en Setswana et Sepedi dans le cadre de ce projet à l'adresse https://github.com/dsfsi/embedding-eval-data et archivé sur Zenodo à https://zenodo.org/record/5673974.

Tableau 3 : Résultats monolingues de FastText

p06-01.png

Tableau 4 : Résultats monolingues de Word2Vec

p06-02.png

## 5.1 Résultats

Cette section présente les résultats des expériences menées pour montrer l'efficacité de la technique proposée avec quelques expériences. Nous présentons d'abord la tâche d'évaluation monolingue pour word2Vec et fastText, puis la tâche d'évaluation interlingue pour le setswana et le sepedi. Les évaluations de la tâche d'évaluation interlingue reposent sur deux méthodes de plongement, fastText et word2Vec.

Dans le tableau 3 et le tableau 4, nous montrons la corrélation de Spearman pour les vecteurs de mots entraînés sur fastText et word2vec. Les scores de corrélation calculent la similitude entre les vecteurs de mots. Les scores des tableaux 5 et 6 sont obtenus en utilisant les vecteurs monolingues Setswana et Sepedi et en utilisant VecMap pour aligner les deux vecteurs sur le même espace vectoriel.

Les résultats du tableau 3 et du tableau 4 montrent la couverture et les résultats de Spearman. La couverture fait référence au nombre total de mots de vocabulaire (mots qui se trouvent à la fois dans le modèle et dans l'ensemble de données d'évaluation). On peut voir que la couverture est plus faible pour word2Vec mais un peu plus élevée pour fastText (nous nous attendions à ce que la couverture de fastText soit de 100 pour cent). Le score de similarité Simlex et WordSim pour les embeddings monolingues fastText dans le tableau 3 est plus élevé, ce qui est attendu en raison du pourcentage de couverture étant également très élevé comparé à la valeur de couverture dans le tableau 4.

Tableau 5 : Résultats interlingues Word2Vec

p06-03.png

Tableau 6 : Résultats interlingues FastText

p06-04.png

## 6 Discussion

L'objectif principal de cette recherche est de montrer qu'il est possible d'effectuer un transfert interlingue de la langue source vers la langue cible. Essentiellement, nous voulions vérifier si l'alignement interlingue peut améliorer la représentation des mots pour la langue cible. Les résultats du tableau 4 montrent que la valeur de corrélation de Spearman pour la langue cible lors de l'utilisation de word2Vec est faible, cela est également dû au pourcentage de couverture, mais les plongements basés sur fastText fonctionnent mieux sur le tableau 3 et ont un pourcentage de couverture plus élevé, comme indiqué plus haut, nous nous attendions à une couverture de 100 %. Le tableau 5 montre que nous avons amélioré la représentation des mots après l'alignement interlingue pour les plongements basés sur word2Vec. La valeur du Spearman a augmenté pour Simlex et Wordsim. Nous nous attendions à améliorer les résultats pour les embeddings fastText mais dans ce cas, word2Vec a donné de meilleurs résultats.

## 7 Conclusion

Dans cet article, VecMap a été utilisé pour aligner Setswana-Sepedi sur le même espace vectoriel. Grâce à ce travail, nous avons voulu utiliser la technique interlingue (VecMap) pour permettre le transfert de connaissances entre les langues disposant de ressources riches et celles disposant de ressources faibles. Les résultats montrent qu'il est possible d'aligner deux plongements monolingues pour obtenir des plongements interlingues. Nous avons aligné le setswana sur le sepedi et utilisé le coefficient de Spearman pour vérifier la corrélation. Fait intéressant, nous obtenons des résultats différents sur les plongements basés sur fastText et word2Vec bien que nous ayons utilisé les mêmes données pour entraîner les plongements.

Dans des travaux futurs, il serait intéressant d'utiliser le plongement interlingue sur une tâche en aval comme la traduction ou l'analyse de sentiments, spécifiquement pour les langues à faibles ressources.

## 8 Remerciements

Nous aimerions remercier ABSA pour le parrainage de la chaire industrielle et de ses activités liées au projet.

## Références

Abbott, J. & Martinus, L. (2019), Benchmarking neural machine translation for southern african languages, in 'Proceedings of the 2019 Workshop on Widening NLP', pp. 98-101.

Adams, O., Makarucha, A., Neubig, G., Bird, S. & Cohn, T. (2017), Cross-lingual word embeddings for low-resource language modeling, in 'Proceedings of the 15th Conference of the European Chapter of the Association for Computational Linguistics: Volume 1, Long Papers', pp. 937-947.

Agić, Ž. & Vulić, I. (2019), JW300: A wide-coverage parallel corpus for low-resource languages, in 'Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics', Association for Computational Linguistics, Florence, Italy, pp. 3204-3210. URL: https://aclanthology.org/P19-1310

Alabi, J. O., Amponsah-Kaakyire, K., Adelani, D. I. & España-Bonet, C. (2019), 'Massive vs. curated word embeddings for low-resourced languages. the case of yor\ub\'a and twi', arXiv preprint arXiv:1912.02481.

Artetxe, M., Labaka, G. & Agirre, E. (2018), A robust self-learning method for fully unsupervised cross-lingual mappings of word embeddings, in 'Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)', pp. 789-798.

Artetxe, M., Ruder, S. & Yogatama, D. (2020), On the cross-lingual transferability of monolingual representations, in 'Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics', pp. 4623-4637.

Artetxe, M. & Schwenk, H. (2019), 'Massively multilingual sentence embeddings for zero-shot cross-lingual transfer and beyond', Transactions of the Association for Computational Linguistics 7,597-610.

Bakarov, A. (2018), 'A survey of word embeddings evaluation methods', arXiv preprint arXiv:1801.09536.

Banerjee, T., au2, R. M. V. & Bhattacharyya, P. (2021), 'Cross-lingual embeddings are essential in unmt for distant languages: An english to indoaryan case study'.

Bojanowski, P., Grave, E., Joulin, A. & Mikolov, T. (2016), 'Enriching word vectors with subword information', arXiv preprint arXiv:1607.04606.

Cho, K., Van Merriënboer, B., Gulcehre, C., Bahdanau, D., Bougares, F., Schwenk, H. & Bengio, Y. (2014), 'Learning phrase representations using rnn encoder-decoder for statistical machine translation', arXiv preprint arXiv:1406.1078.

Conneau, A., Lample, G., Ranzato, M., Denoyer, L. & Jégou, H. (2018), 'Word translation without parallel data'.

Devlin, J., Chang, M.-W., Lee, K. & Toutanova, K. (2018), 'Bert: Pre-training of deep bidirectional transformers for language understanding', arXiv preprint arXiv:1810.04805.

Dinu, G., Lazaridou, A. & Baroni, M. (2015), 'Improving zero-shot learning by mitigating the hubness problem'.

Eiselen, R. & Puttkammer, M. J. (2014), Developing text resources for ten south african languages., in 'LREC', pp. 3698-3703.

Feng, X., Feng, X., Qin, B., Feng, Z. & Liu, T. (2018), Improving low resource named entity recognition using cross-lingual knowledge transfer, in 'Proceedings of the Twenty-Seventh International Joint Conference on Artificial Intelligence, IJCAI-18', International Joint Conferences on Artificial Intelligence Organization, pp. 4071-4077. URL: https://doi.org/10.24963/ijcai.2018/566

Finkelstein, L., Gabrilovich, E., Matias, Y., Rivlin, E., Solan, Z., Wolfman, G. & Ruppin, E. (2001), Placing search in context: The concept revisited, in 'Proceedings of the 10th international conference on World Wide Web', pp. 406-414.

Guo, J., Che, W., Wang, H. & Liu, T. (2014), Revisiting embedding features for simple semisupervised learning, in 'Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing (EMNLP)', pp. 110-120.

Hedderich, M. A., Adelani, D., Zhu, D., Alabi, J., Markus, U. & Klakow, D. (2020), Transfer learning and distant supervision for multilingual transformer models: A study on african languages, in 'Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)', pp. 2580-2591.

Hill, F., Reichart, R. & Korhonen, A. (2015), 'Simlex-999: Evaluating semantic models with (genuine) similarity estimation', Computational Linguistics 41(4), 665-695.

Hochreiter, S. & Schmidhuber, J. (1997), 'Long short-term memory', Neural Computation 9, 1735-1780.

Howard, J. & Ruder, S. (2018), Universal language model fine-tuning for text classification, in 'Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)', pp. 328-339.

Kwiatkowski, T., Palomaki, J., Redfield, O., Collins, M., Parikh, A., Alberti, C., Epstein, D., Polosukhin, I., Devlin, J., Lee, K. et al. (2019), 'Natural questions: a benchmark for question answering research', Transactions of the Association for Computational Linguistics 7,453-466.

Lample, G., Conneau, A., Ranzato, M., Denoyer, L. & Jégou, H. (2018), Word translation without parallel data, in 'International Conference on Learning Representations'.

Marivate, V. & Sefara, T. (2020a), Improving short text classification through global augmentation methods, in 'International Cross-Domain Conference for Machine Learning and Knowledge Extraction', Springer, pp. 385-399.

Marivate, V. & Sefara, T. (2020b), 'South african news data'. URL: https://doi.org/10.5281/zenodo.3668495

Marivate, V., Sefara, T., Chabalala, V., Makhaya, K., Mokgonyane, T., Mokoena, R. & Modupe, A. (2020), Investigating an approach for low resource language dataset creation, curation and classification: Setswana and sepedi, in 'Proceedings of the first workshop on Resources for African Indigenous Languages', pp. 15-20.

Martinus, L. & Abbott, J. Z. (2019), 'A focus on neural machine translation for african languages', arXiv preprint arXiv:1906.05685.

Mikolov, T., Sutskever, I., Chen, K., Corrado, G. S. & Dean, J. (2013), Distributed representations of words and phrases and their compositionality, in 'Advances in neural information processing systems', pp. 3111-3119.

Nekoto, W., Marivate, V., Matsila, T., Fasubaa, T., Fagbohungbe, T., Akinola, S. O., Muhammad, S., Kabenamualu, S. K., Osei, S., Sackey, F. et al. (2020), Participatory research for low-resourced machine translation: A case study in african languages, in 'Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing: Findings', pp. 2144-2160.

Pennington, J., Socher, R. & Manning, C. (2014), Glove: Global vectors for word representation, Vol. 14, pp. 1532-1543.

Ranathunga, S., Lee, E.-S. A., Skenduli, M. P., Shekhar, R., Alam, M. & Kaur, R. (2021), 'Neural machine translation for low-resource languages: A survey', arXiv preprint arXiv:2106.15115.

Ruder, S., Peters, M. E., Swayamdipta, S. & Wolf, T. (2019), Transfer learning in natural language processing, in 'Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Tutorials', pp. 15-18.

Sefara, T. J., Zwane, S. G., Gama, N., Sibisi, H., Senoamadi, P. N. & Marivate, V. (2021), Transformer-based machine translation for low-resourced languages embedded with language identification, in '2021 Conference on Information Communications Technology and Society (ICTAS)', IEEE, pp. 127-132.

Socher, R., Perelygin, A., Wu, J., Chuang, J., Manning, C. D., Ng, A. Y. & Potts, C. (2013), Recursive deep models for semantic compositionality over a sentiment treebank, in 'Proceedings of the 2013 conference on empirical methods in natural language processing', pp. 1631-1642.
