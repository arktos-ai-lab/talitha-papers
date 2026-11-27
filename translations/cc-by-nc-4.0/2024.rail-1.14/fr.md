> Machine translation (fr) of "Low Resource Question Answering: An Amharic Benchmarking Dataset" by Tilahun Abedissa Taffa, Yaregal Assabie, Ricardo Usbeck, https://aclanthology.org/2024.rail-1.14/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Systèmes de questions-réponses à faibles ressources : un jeu de données de référence pour l'amharique

Tilahun Abedissa Taffa, Yaregal Assabie, Ricardo Usbeck

**Affiliations**  
Tilahun Abedissa Taffa1,2,3, Yaregal Assabie2, and Ricardo Usbeck3  
1Semantic Systems, Universität Hamburg, Hamburg, Germany  
2Department of Computer Science, Addis Ababa University, Addis Ababa, Ethiopia  
3Leuphana Universität Lüneburg, Lüneburg, Germany  
, , 

## Résumé

Les systèmes de questions-réponses (QA) renvoient des réponses concises ou des listes de réponses à partir d'un texte en langage naturel, en utilisant un document contextuel donné. De nombreuses ressources sont consacrées à la création de jeux de données QA pour faire progresser le développement de modèles QA robustes. Il y a une augmentation des ensembles de données QA pour les langues telles que l'anglais; c'est différent pour les langues à faibles ressources comme l'amharique. En effet, il n'existe pas de jeu de données QA amharique publié ou disponible publiquement. Ainsi, pour encourager la recherche en QA à faibles ressources, nous présentons le premier jeu de données de référence public de questions-réponses en amharique (Amh-QuAD). Nous recueillons par crowdsourcing 2 628 paires question-réponse à partir de plus de 378 articles de Wikipédia en amharique. En utilisant l'ensemble d'entraînement, nous effectuons un réglage fin d'un modèle de langage basé sur XLM-R et introduisons un nouveau modèle de lecteur. En tirant parti de notre lecteur nouvellement affiné, nous exécutons un modèle de référence pour susciter l'intérêt de la recherche en QA amharique en domaine ouvert. Le modèle de référence QA le plus performant atteint un score F de 80,3 et 81,34 dans les configurations de récupérateur-lecteur et de compréhension de lecture.

## Mots-clés

Systèmes de questions-réponses à faibles ressources, jeu de données de questions-réponses en amharique, compréhension de lecture en amharique, Amh-QuAD

## 1. Introduction

La tâche de Question Answering (QA) consiste à récupérer avec précision une réponse à une question en langage naturel à partir d'une certaine source de données sous-jacente (Chen et Yih, 2020). La création d'ensembles de données QA standard train & test est appliquée pour évaluer la capacité de synthèse des questions et la précision des réponses des modèles. Le crowdsourcing ou la génération automatique sont des approches courantes dans la création de jeux de données QA (Dzendzik et al., 2021). Dans l’approche crowdsourcing, les crowd-workers formulent des paires question-réponse dans un contexte donné. Le crowdsourcing permet la création de paires question-réponse de haute qualité, mais il est coûteux. En revanche, les approches de génération automatique tirent parti de modèles de génération de langage, de modèles ou de traduction automatique pour formuler des paires question-réponse. Cependant, obtenir un modèle fiable capable de générer des paires question-réponse aussi précises que celles d'un humain pose un défi. Par conséquent, les études introduisent des humains dans la boucle pour minimiser la génération de paires question-réponse triviales, non grammaticales et incorrectes (Cambazoglu et al., 2020; Fabbri et al., 2020).

La distinction entre les jeux de données QA existants réside dans 1) la réponse attendue à la question : factuelle vs. non factuelle, 2) le domaine de la source de données : fermé vs. ouvert, et 3) la sous-tâche de formulation de la réponse : extractive vs. générative. Les questions factuelles comme "Qui est le fondateur de la capitale de l'Éthiopie, Addis-Abeba ?" (Réponse : "L'empereur Ménélik II") nécessitent une entité nommée telle qu'un nom propre, une date, un nombre ou une courte phrase comme réponse (Abedissa et Libsie, 2019).

p01-01.png

Figure 1 : Triplets de contexte, question et réponse Amh-QuAD.

Contrairement à cela, les questions comment, pourquoi, opinion, définition et recommandation entrent dans la catégorie des questions non factoïdes. Par exemple, une question comme « Pourquoi l'eau apparaît-elle incolore et insipide ? » oblige à rassembler des informations pertinentes, à raisonner et à synthétiser plusieurs éléments d'information provenant de différentes sources (Yang et al., 2019). Par conséquent, en fonction des types de questions, un modèle de QA et son jeu de données de référence sont de type factoïde ou non factoïde (Dzendzik et al., 2021). De plus, la source de données utilisée pour répondre à une question contient des informations génériques sur de nombreuses choses ou des informations spécifiques à un domaine particulier, comme le sport, la géographie ou la médecine. Ainsi, en fonction du domaine de la source de données et de la question, les systèmes de QA dépendants du domaine sont appelés fermés et les systèmes indépendants du domaine sont appelés QA ouverts (Chen et Yih, 2020). Par ailleurs, les jeux de données et les modèles de QA diffèrent selon la manière dont la réponse est récupérée - extractive ou générative. Les jeux de données de QA extractive comme SQuAD (Rajpurkar et al., 2016) mesurent la compétence d'un modèle de QA à prédire les jetons de début et de fin correspondants de la plage de réponse à partir d'un contexte. Contrairement à cela, les jeux de données de QA générative contiennent des questions dont la réponse est une compréhension du contexte, et non une copie directe (Raffel et al., 2020).

L'architecture des systèmes de QA comprend généralement des modules d'analyse de questions pour comprendre les questions, des systèmes de recherche d'information (IR) pour localiser les documents ou données pertinents et des mécanismes d'extraction de réponses pour extraire des réponses précises de l'information récupérée (Abedissa et Libsie, 2019). Dans lequel une question en langage naturel entre dans le module d'analyse de questions, et une réponse sort du module de traitement des réponses (Chen et Yih, 2020). Le composant d'analyse de questions analyse la question d'entrée de plusieurs manières. L'une d'elles est une analyse morphosyntaxique, qui attribue la catégorie grammaticale à chaque mot de la question, en indiquant si un mot est un verbe, un nom ou un adjectif. Ensuite, classifiez les questions pour identifier le type sémantique de la question (Utomo et al., 2017). La méthode la plus simple de classification des questions consiste à utiliser un ensemble de règles qui cartographient les modèles de questions en types de questions en analysant les termes interrogatifs de la question (wh-terms). Cependant, le développement de telles règles prend du temps, et l'adaptation à un nouveau domaine est un défi. Une approche alternative à la classification des questions est l'utilisation de techniques d'apprentissage automatique. Cette approche traite l'identification du type de question en utilisant des packages de classification statistique comme une machine à vecteurs de support (Abedissa et Libsie, 2019). Enfin, le composant d'analyse des questions génère des requêtes à partir de la question donnée en sélectionnant des mots-clés et en supprimant les termes interrogatifs. En outre, élargissez l’ensemble des mots-clés en utilisant des synonymes (Utomo et al., 2017).

Le composant de récupération de documents est un système de récupération de documents standard qui identifie un sous-ensemble de documents contenant des termes d'une requête donnée à partir de la collection totale de documents jugés les plus susceptibles de contenir une réponse à la question (Utomo et al., 2017). Tout en essayant d'identifier les informations pertinentes plus précisément, il divise les documents en plusieurs passages et traite les passages comme des documents. L’utilisation d’une approche de récupération basée sur les passages au lieu d’une approche de récupération de documents complets présente l’avantage de renvoyer de courts extraits de texte au lieu de documents entiers, qui sont plus faciles à traiter par les composants ultérieurs du système de questions-réponses (Chen et al., 2017).

Le composant de traitement des réponses prend les documents récupérés susceptibles de contenir une réponse à la question et spécifie quels types de phrases doivent compter comme des réponses correctes. Ensuite, il extrait plusieurs réponses candidates, les classe dans leur correction probable, et renvoie une réponse à partir de ces phrases les mieux classées. L'extraction et la sélection des réponses sont traitées comme un problème de classification ou de classement et résolues à l'aide de méthodes heuristiques et d'apprentissage automatique. Puisque les réseaux de neurones profonds apprennent à sélectionner des caractéristiques par un entraînement de bout en bout, la plupart des modèles récents de QA utilisent une architecture neuronale pour encoder les contextes et les questions dans un espace vectoriel et raisonner à leur sujet (Mozannar et al., 2019).

À l'ère de l'apprentissage profond, en particulier les modèles de langage pré-entraînés comme BERT (Kenton et Toutanova, 2019) permettent un développement robuste de modèles de QA (Laskar et al., 2020). En outre, l'introduction de modèles de langage multilingues comme Cross Language Multilingual-Roberta (XLM-R) (Conneau et al., 2020) et mBERT (Wu et Dredze, 2020) contribue aux avancées de la QA translingue et multilingue. Les systèmes de QA existants fondés sur l'apprentissage profond se répartissent en approches de type retriever-reader, retriever dense avec entraînement de bout en bout, et approches sans retriever (Chen et Yih, 2020).

Les modèles QA basés sur retriever-reader récupèrent d'abord les passages pertinents, puis lisent les passages les mieux classés et prédisent les positions de début et de fin du texte de réponse à partir d'un contexte. DrQA (Chen et al., 2017) est un exemple typique de cette approche. Dans le modèle DrQA, le récupérateur utilise des méthodes traditionnelles d'espace vectoriel éparse, représentant chaque question et document comme des vecteurs de sacs de mots pondérés par TF-IDF (fréquence des termes-fréquence inverse du document). Ensuite, le récupérateur transmet les cinq documents les mieux classés au composant lecteur. Le reader utilise une mémoire bidirectionnelle à long court terme (LSTM) à 3 couches (), qui encode la question et les paragraphes les mieux classés comme une séquence de vecteurs de caractéristiques. Ensuite, il prédit la probabilité des positions de début et de fin de la plage de réponses (Cui et al., 2019).

Les modèles QA de l'approche retriever-generator suivent le changement de paradigme majeur vers l'IR basée sur le neural. Pour répondre à une question, générez la réponse en utilisant un contexte récupéré au lieu de prédire les positions de début et de fin (Lewis et al., 2020b).

Contrairement aux approches récupérateur-lecteur et récupérateur-générateur, l’approche générative génère du texte libre comme réponse pour répondre à des questions en utilisant les connaissances dans ses paramètres (Roberts et al., 2020). Pour tester la capacité de mémorisation des connaissances factuelles des modèles de langage pré-entraînés, Roberts (Roberts et al., 2020) a adapté le modèle de langage T5 (Text-to-Text Transfer Transformer) (Raffel et al., 2020) pour répondre à des questions sans lui fournir d'informations ou de contexte supplémentaires.

Spécifiquement pour l'amharique, il existe très peu de modèles de QA (Abedissa et Libsie, 2019 ; Elema, 2022 ; Yimam et Libsie, 2009) ; cependant, aucun ne fournit de jeu de données public. Par conséquent, cet article présente le premier jeu de données de questions-réponses amharique extractif factuel à domaine ouvert (Amh-QuAD), le jeu de données est disponible en ligne à l'adresse https://github.com/semantic-systems/amharic-qa.

Comme le montre la Figure 1, le jeu de données Amh-QuAD comprend des triplets de contexte, question et réponse. Les contextes sont constitués d’articles recueillis sur Wikipédia en amharique, tandis que nous avons collecté 2628 paires question-réponse provenant de 378 contextes. Par exemple, pour la question donnée dans la Figure 1, « ከላሊበላ አስራ አንድ ውቅር አብያተ ክርስቲያናት የመስቀል ቅርጽ ያለው የትኛው ነው ? » (Parmi les 11 églises monolithiques de Lalibela, laquelle a la forme d'une croix ?), la réponse « ቤተ ጊዮርጊስ » (betə giorgis 'Maison de Saint-Georges') est l'extrait du contexte. Dans notre travail, en plus des paires question-réponse crowdsourcées, nous avons défini des valeurs de score F1 de référence en mettant en œuvre un modèle QA avec les composants récupérateur et lecteur. Nous avons affiné le modèle XLMR pour le composant lecteur en utilisant l'ensemble d'entraînement Amh-QuAD et avons obtenu une valeur de F-score de 81.34.

## 2. Phrases interrogatives en amharique

L'amharique, une langue africaine autochtone d'Éthiopie, a son propre système d'écriture utilisant l'écriture ge'ez connue sous le nom de ፊደል (Fidel). Comme le montre la Figure 2, une phrase interrogative en amharique est formulée à l'aide de pronoms interrogatifs de recherche d'information comme "ምን" (quoi), "መቼ" (quand), "ማን" (qui), "የት" (où), "የትኛው" (lequel), etc. ou des phrases interrogatives prépositionnelles comme "ለምን" [ለ-ምን] (pourquoi), "በምን" [በ-ምን] (par quoi), etc. De plus, des verbes comme ግለጽ (expliquer), ዘርዝር|ሪ (lister), አንፃፅር|ሪ|ሩ (comparer), etc. sont utilisés pour poser des questions (Yimam, 2009; Amare, 2013).

## 3. Travaux connexes

Parmi les ensembles de données QA anglais existants, SQuAD (Rajpurkar et al., 2016) a ouvert la voie en créant des paires de questions-réponses à partir d’articles de Wikipedia en utilisant des crowd workers, où chaque réponse à une question est une étendue de texte dans les articles. Le MRC chinois (Cui et coll., 2019), le QA vietnamien (Do et coll., 2021) et d’autres ensembles de données énumérés dans (Dzendzik et coll., 2021; Rogers et coll., 2023) suivent également la même étape de curation que SQuAD. Suivant le crowdsourcing, TigQuAD (Gaim et al., 2023) introduit un ensemble de données QA pour la langue sémitique à faibles ressources Tigrinya à partir de journaux. L'amharique et le tigrigna sont tous deux des langues sémitiques. Cependant, les différences linguistiques dans les systèmes d'écriture des deux langues (Feleke, 2017) empêchent TigQuAD d'être utilisé pour tester et entraîner des modèles de QA amhariques.

p03-01.png

Figure 2 : Termes interrogatifs en amharique.

D'autre part, en traduisant automatiquement SQuAD dans leurs langues respectives, des versions allemande (Möller et al., 2021) et française (d'Hoffschmidt et al., 2020) ont été créées. L’ensemble de données QA arabe (Mozannar et al., 2019) est créé en partie par traduction à partir de SQuAD et en partie par crowdsourcing. Traduire des ensembles de données QA existants dans d’autres langues est une solution pour créer un ensemble de données volumineux. Cependant, nous optons pour l'approche de crowdsourcing en raison de l'absence d'un outil de traduction automatique open-source bien testé de l'anglais à l'amharique.

En amharique, il existe très peu de modèles de QA ; TETEYEQ (Yimam et Libsie, 2009) répond aux questions de type factuel en extrayant des noms d'entités à l'aide d'une approche d'extraction de réponses basée sur des règles. Abedissa et Libsie (2019) introduisent un modèle de QA non factoide qui répond aux questions de biographie, de description et de définition. L'extraction de réponses de type définition-description utilise des heuristiques ; en revanche, il répond aux questions de biographie à l'aide d'un résumeur et valide le résumé avec un classificateur. Le travail de (Elema, 2022) classifie les questions à l'aide d'un modèle de réseau de neurones artificiels, sélectionne les réponses candidates par un modèle hybride Bi-LSTM et CNN, et extrait les réponses en tant qu'entités nommées en utilisant un reconnaisseur d'entités nommées. Contrairement aux systèmes de QA amhariques existants, cette étude propose un système de QA amharique (AmhQA) basé sur un retriever-reader qui exploite un modèle de langage multilingue (Conneau et al., 2020). Au-delà de la tentative de répondre aux questions amhariques, les travaux n'ont pas encore produit de jeu de données publié adapté à l'entraînement et au test des performances des modèles de QA amhariques. Par conséquent, nous présentons Amh-QuAD comme un benchmark d'entraînement et de test pour les modèles de QA en amharique.

p04-01.png

Figure 3 : La structure Amh-QuAD.

## 4. Le Amh-QuAD

L'ensemble de données Amh-QuAD est créé en trois phases: collecte d'articles, paires de questions-réponses de crowdsourcing et annotation.

## 4.1. Collecte et nettoyage

Nous collectons les articles amhariques utilisés comme contextes à partir du dump de l'Amharic Wikipedia. Nous ne conservons que les articles de plus de 2 KB et dont la catégorie n'est pas "proverbe" et "préparation alimentaire". Les articles de type proverbe sont avantageux pour générer des questions de raisonnement. De plus, les articles de 'préparation des aliments' consistent principalement en des étapes de préparation des aliments, ce qui les rend adaptés pour générer des questions telles que 'Comment est l'étape pour cuire...' et 'Listez les étapes ou les ingrédients ajoutés lors de la cuisson...'. De plus, dans les deux scénarios, la réponse n'est pas limitée à une séquence de texte continue dans l'article mais se répand plutôt parmi des phrases non consécutives. Nous pré-traitons ensuite les articles restants après filtration en utilisant l'outil wiki-dump-reader pour obtenir des textes propres. Par la suite, comme les longs articles ne stimulent pas de manière exhaustive la création de questions, chaque article est segmenté en fonction de ses sous-thèmes. Enfin, nous avons sélectionné aléatoirement 378 articles nettoyés.

## 4.2. Crowdsourcing de paires de questions-réponses

Nous fournissons un entraînement sur la formulation de questions auxquelles un contexte donné peut répondre, en suivant la directive Haystack. Puisque nous sélectionnons au hasard des articles de Wikipédia, nous informons les annoteurs de signaler tout article contenant un contenu offensant. De plus, nous encourageons les annotateurs à générer autant de questions que possible à partir d'un contexte donné.

## 4.3 Validation et annotation des paires question-réponse

La validation des paires de questions-réponses formulées concerne leur exactitude. Nous disons qu'une question est correcte si la question posée est répondable par le contexte donné, grammaticalement correcte, et définit clairement le sujet ou l'objet à l'étude. Par exemple, une question comme « Combien de parcs notre (le) pays a-t-il? » est ambiguë en raison de l'adjectif possessif « notre » ou de l'article défini « le » ; il est difficile de savoir à quel pays elle se réfère. Nous paraphrasons de telles questions selon le contexte, en plus de réécrire les questions qui ne mentionnent pas explicitement le sujet ou l'objet. De plus, nous excluons de l'annotation les questions trop longues et dont les réponses sont des chaînes de caractères non consécutives. Ensuite, annotez les paires question-réponse à l'aide de l'outil d'annotation Haystack. Comme le montre la figure 3 L'outil d'annotation fournit les paires questions-réponses annotées sous forme de fichiers JSON au format SQuAD.

p04-02.png

Figure 4 : Distribution des termes interrogatifs.

## 4.4. Analyse des données

Comme le montre le Tableau 1, Amh-QuAD contient 378 articles et 2628 paires question-réponse. Les contextes, en moyenne, ont 172 mots. La longueur moyenne des mots de la plupart des questions est de 9,22, alors que les réponses sont courtes, et leur longueur moyenne est de 2,66. De plus, nous avons divisé l'ensemble de données en train, dev et test avec une taille de 1728, 600 et 300, respectivement. En outre, pour voir la distribution des termes interrogatifs sur l'ensemble de test, nous identifions manuellement le terme interrogatif et examinons les deux ou trois jetons adjacents. La Figure 4 illustre la distribution des termes interrogatifs, mettant en évidence la variété des termes de question au sein d'Amh-QuAD.

p05-01.png

Tableau 1 : Taille et longueur moyenne des mots des articles, des questions et des réponses.

## 4.5. Type de réponse attendu

En examinant les termes interrogatifs des questions et les réponses, nous classons les 300 questions de test en catégories personne, lieu, temps, organisation, nombre, description et autres. Ensuite, calculez le pourcentage de couverture des types de réponses attendus dans l'ensemble de tests. Comme le montre la Figure 5, nous avons constaté que la plupart des questions concernent le Lieu, le Nombre et le Temps, chaque type ayant une couverture de plus de 18 %. Les questions de description prennent 13% de la part et les questions qui cherchent le nom d'une personne comme réponse sont 14%. 10% des questions comme "Quelle est la langue de travail de l'Éthiopie?" dont les types de réponses attendues sont des entités qui ne peuvent pas être incluses dans les catégories existantes et tombent dans le groupe 'AUTRE'. La liste (3 %) et l'organisation (3 %) sont les plus petites parmi les questions.

p05-02.png

Figure 5 : Répartition des types de questions en %.

## 5. Modèle de QA en amharique

Définition du problème : Étant donnés une question Q et un ensemble de contextes C, l'objectif du modèle de QA amharique (AmhQA) est de récupérer les k contextes C<sub>i</sub> les plus pertinents de C et de prédire, à partir des C<sub>i</sub> récupérés, un segment de texte qui répond à Q.

1. Récupérer top-k contextes pertinents à l'aide d'un retriever:

p05-03.png

2. Prédire une étendue de texte à partir du contexte récupéré via un lecteur :

p05-04.png

p05-05.png

Figure 6 : Le modèle de QA amharique.

Comme le montre la figure 6, le modèle AmhQA a trois composants: indexeur hors ligne, retriever et lecteur.

## 5.1. Indexation

L'indexation hors ligne commence par l'obtention de contextes à partir du jeu de données de test. Ensuite, un préprocesseur basé sur NLTK tokenise les contextes au niveau du mot et divise les contextes en segments plus petits en fonction d'une longueur maximale de 200 mots sans chevauchement de mots. Enfin, indexez les contextes segmentés à l'aide de l'indexeur Elasticsearch. Ce processus d'indexation crée un index inversé, permettant une récupération rapide et efficace des informations pertinentes lors des requêtes ultérieures.

## 5.2. Retriever

Le composant AmhQA retriever utilise l'algorithme BM25 (Best Match 25) pour renvoyer les contextes les plus pertinents. L'algorithme BM25 est un TF-IDF modifié (Term Frequency - Inverse Document Frequency) qui note et ordonne les contextes en fonction de leur pertinence par rapport à la question donnée (Robertson et Zaragoza, 2009). Le récupérateur calcule un score de pertinence pour chaque document en tenant compte des fréquences de termes au sein des documents, de la normalisation de la longueur des documents et de la saturation des termes. La saturation des termes est le concept selon lequel la pertinence d'un terme dans un document diminue à mesure qu'il apparaît plus fréquemment dans le document. La fonction de saturation des termes modifie la fréquence des termes lors du calcul du score de pertinence.

Pour une question Q et un contexte C<sub>i</sub>, la formule de score BM25 est :

p06-01.png

Où :

n est le nombre de termes dans la question et qi est le i-ème terme dans la question.

idf(q<sub>i</sub>) est la fréquence inverse de document du terme q<sub>i</sub>.

f(q<sub>i</sub>, Ci) est la fréquence du terme q<sub>i</sub> dans le contexte C<sub>i</sub>.

|C<sub>i</sub>| est la longueur du contexte C<sub>i</sub>.

avgcl est la longueur moyenne des contextes dans la collection ; k<sub>1</sub> et b sont des paramètres de réglage.

Les paramètres k<sub>1</sub> et b contrôlent la composante de fréquence du terme dans la notation. k<sub>1</sub> est un paramètre de réglage positif qui régule l'effet de saturation de la fréquence des termes. Une valeur plus élevée de k<sub>1</sub> augmente l'impact de la fréquence des termes sur le score, rendant l'algorithme plus sensible à la fréquence des termes dans le document. Inversement, une valeur plus faible de k<sub>1</sub> réduit l'impact de la fréquence des termes, ce qui entraîne un effet moindre sur le score. Le paramètre b est une valeur comprise entre 0 et 1 qui contrôle l'influence de la normalisation de la longueur du document. Lorsque b est plus proche de 0, la normalisation de la longueur du document a un effet plus faible, entraînant une atténuation moindre de la composante de fréquence de terme pour les documents plus longs. En revanche, lorsque b est plus proche de 1, la normalisation de la longueur du document a un effet plus substantiel, faisant en sorte que la composante de fréquence de terme favorise les documents plus longs.

Les documents récupérés sont ensuite classés en fonction de la valeur de score(Q, C<sub>i</sub>).

## 5.3. Lecteur

Le composant lecteur d'AmhQA est créé par ajustement fin d'une instance du modèle de langage pré-entraîné XLM-R de Hugging Face en utilisant le framework open source Haystack sur notre ensemble d'entraînement. Le XLM-R (Cross-lingual Language Model - RoBERTa) (Conneau et al., 2020) est un modèle de langage basé sur un transformeur, entraîné sur diverses langues, dont l'amharique. Lors du réglage fin, nous utilisons les paramètres par défaut du framework Haystack. Le modèle de lecture généralise pour des exemples non vus malgré un ajustement fin sur un petit ensemble de données comprenant 1728 échantillons. Au cours de la récupération de la réponse, le lecteur tokenise la question Q et le contexte Ci, encode la question et le contexte tokenisés, et produit des distributions de probabilité des indices de début et de fin de l'étendue de réponse. Enfin, il décode les indices de la plage de réponses en un texte lisible par l'homme basé sur la plage de probabilité la plus élevée.

p06-02.png

Figure 7 : Interface prototype d'AmhQA.

## 6. Expérimentation

## 6.1 Modèle de référence

Étant donné que l'ensemble de données Amh-QuAD contient un ensemble de contextes et de paires question-réponse, sa tâche inhérente est la compréhension en lecture (RC) (Rajpurkar et al., 2016). C'est-à-dire, étant donné une question Q et un contexte C, l'objectif du modèle est d'identifier un mot ou un groupe de mots consécutifs de C qui répond à Q. Par conséquent, sur la base de cette hypothèse, nous avons fixé une valeur de référence pour Amh-QuAD en utilisant un RC basé sur XLM-R et avec notre modèle de lecteur affiné. La figure 7 montre le réglage RC de l'interface prototype du modèle AmhQA.

D'autre part, notre modèle AmhQA basé sur le récupérant-lecteur (RR) récupère d'abord les passages pertinents, puis lit les passages les mieux classés pour prédire les positions de début et de fin de la réponse. La partie récupérateur est basée sur BM25, et le lecteur est implémenté en utilisant notre modèle de lecteur finement ajusté.

p07-01.png

Tableau 2 : Performance d'AhmQA dans les configurations RC et RR.

## 6.2. Évaluation et discussion

L'objectif de l'évaluation d'un modèle de QA est de mesurer l'exactitude du modèle et de ses composants. Pour les jeux de données de QA où la réponse est un segment de texte, une correspondance exacte (EM) avec la réponse de référence est largement utilisée (Rajpurkar et al., 2016). Les métriques EM présentent l'inconvénient du tout ou rien. Pour surmonter cela, la précision, le rappel et leur moyenne harmonique, la valeur F-Score, sont également utilisés (Chen et al., 2017). Le rappel (R) donne la fraction des mots que le système a choisis parmi la totalité des mots trouvés dans la réponse réelle, et la précision (P) mesure la fraction des réponses du système qui sont correctement choisies. De plus, les métriques Mean Reciprocal Recall (MRR) et Mean Average Precision (MAP) évaluent la performance du récupérateur.

Comme le montre le Tableau 2, dans le paramètre RC, le score F1 de XLM-RLarge est de 74,35, tandis que le score F1 de XLM-R<sub>Base</sub> est de 64,69. Le score F1 du XLM-R<sub>Large</sub> sur l'ensemble de test Amh-QuAD était comparable à son score F1 moyen (70,7) sur le jeu de données MLQA pour sept autres langues (Lewis et al., 2020a). Notre lecteur affiné a également conduit à des améliorations substantielles, donnant un score EM de 67,89 et un score F1 de 81,34. Bien que la différence entre les scores F1 obtenus par les configurations RC (81,34) et RR (80,3) soit minime, une des raisons est la segmentation des contextes sans chevauchement lors de l'indexation dans la configuration RR. La segmentation peut diviser les chaînes de réponse en segments non chevauchants, rendant difficile pour le RR l'extraction de réponses précises. Contrairement à cela, le modèle RC utilise le plongement du contexte entier pour extraire les réponses des passages, ce qui lui permet d'obtenir de meilleurs résultats. En outre, le RR comprend les composants de récupération et de lecture, introduisant des complexités dans l'intégration et le traitement des contextes récupérés qui affectent les performances.

## 6.3 Étude sur les ablations

Comme le montre le Tableau 3, lorsque le nombre de récupérateurs de la configuration de récupération de contexte est top-1, MRR et MAP sont élevés à 82,9, indiquant leur efficacité à classer et récupérer correctement les informations pertinentes. De plus, en étendant la récupération aux trois premiers résultats, les scores augmentent encore davantage. Le MRR et le MAP atteignent respectivement 88,4 et 88,2, ce qui indique que la prise en compte de plusieurs options de récupération améliore la capacité du récupérateur à capturer une gamme plus large de documents pertinents, ce qui se traduit par un meilleur classement et une meilleure précision. L'amélioration significative de la performance des paramètres top-1 à top-3 souligne la nécessité de considérer plusieurs options de récupération pour optimiser l'efficacité du récupérateur dans les modèles QA.

p07-02.png

Tableau 3 : Ablation du composant récupérateur d'AhmQA. **(Avec lecteur affiné)

p07-03.png

Tableau 4 : Ablation de la composante AhmQA Reader. **(Avec le lecteur finement ajusté)**

Le tableau 4 montre la performance de la composante de lecture à travers diverses métriques et paramètres de récupération. Lorsque l’on considère uniquement le premier contexte extrait, les scores de correspondance exacte (CE) et de F1 sont de 48,0 et 60,7, respectivement. L'élargissement du contexte récupéré aux trois premiers résultats fait passer les scores EM et F1 au top-1 à 53,0 et 66,6, respectivement. En outre, lors de l'évaluation basée sur les trois principaux contextes récupérés, les scores EM et F1 connaissent des améliorations significatives, atteignant respectivement 58,72 et 73,22. Met en évidence l'importance de prendre en compte plusieurs contextes récupérés pour optimiser la performance du lecteur, car cela permet une synthèse plus complète des contextes.

Le composant lecteur affiné a démontré une amélioration significative des performances par rapport à l'évaluation précédente. Plus précisément, le score de correspondance exacte (EM) a augmenté à 67,4, indiquant une plus grande précision dans la fourniture de réponses précises. Le score F1 s'est également amélioré, atteignant 80,3, ce qui reflète une efficacité accrue dans la génération de réponses correctes. Les métriques d'évaluation top-1 montrent également des améliorations, avec les scores de correspondance exacte top-1 et F1 top-1 augmentant à 50,7 et 60,9, respectivement. Ces résultats soulignent la performance améliorée du lecteur affiné dans différents paramètres d'évaluation. Dans l'ensemble, les résultats mettent en évidence les améliorations réalisées grâce à l'ajustement fin, indiquant une composante de lecteur plus fiable pour le QA en amharique.

## 7. Synthèse

L'ensemble de données Amh-QuAD est un effort d'inclusion et d'accessibilité dans le traitement du langage naturel (NLP). Le développement de ce jeu de données permettra de remédier en partie au déséquilibre des ressources linguistiques, en particulier pour les langues sous-représentées au sein de la communauté du TAL. Amh-QuAD est le premier jeu de données QA extractif en amharique, factuel et en domaine ouvert, accessible au public, contenant des triplets de contexte, question et réponse extraits de Wikipédia en amharique, utilisable dans des contextes de RC et de QA avec récupérateur-lecteur. De plus, nous présentons un nouveau lecteur AmhQA en procédant à l'ajustement fin d'un modèle de langage pré-entraîné multilingue. Également, établir des valeurs de référence en compréhension de lecture et dans des contextes de QA avec récupérateur-lecteur.

## Notes

1 https://am.wikipedia.org/

2 https://dumps.wikimedia.org/amwiki/20210801/ last accessed 18 August 2021

3 https://pypi.org/project/wiki-dump-reader/

4 https://drive.google.com/file/d/1Wv3OIC0Z7ibHIzOm9Xw_r0gjTFmpl-33/view

5 https://docs.haystack.deepset.ai/docs/annotation

6 https://www.elastic.co/blog/what-is-an-elasticsearch-index

7 https://huggingface.co/deepset/xlm-roberta-large-squad2

8 https://github.com/deepset-ai/haystack/

9 https://huggingface.co/deepset/xlm-roberta-large-squad2

## 8. Références bibliographiques

Tilahun Abedissa and Mulugeta Libsie. 2019. Amharic Question Answering for Biography, Definition, and Description Questions. In Fisseha Mekuria, Ethiopia Nigussie, and Tesfa Tegegne, editors, Information and Communication Technology for Development for Africa, volume 1026, pages 301-310. Springer International Publishing, Cham. Series Title: Communications in Computer and Information Science.

Getahun Amare. 2013. Amharic Grammar in Simple Way. Addis Ababa, Addis Ababa University Press.

B Barla Cambazoglu, Mark Sanderson, Falk Scholer, and Bruce Croft. 2020. A Review of Public Datasets in Question Answering Research. ACM SIGIR Forum, 54(2):23.

Danqi Chen, Adam Fisch, Jason Weston, and Antoine Bordes. 2017. Reading Wikipedia to answer open-domain questions. In Proceedings of the 55th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 1870-1879, Vancouver, Canada. Association for Computational Linguistics.

Danqi Chen and Wen-tau Yih. 2020. Open-Domain Question Answering. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics: Tutorial Abstracts, pages 34-37, Online. Association for Computational Linguistics.

Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume Wenzek, Francisco Guzmán, Edouard Grave, Myle Ott, Luke Zettlemoyer, and Veselin Stoyanov. 2020. Unsupervised Cross-lingual Representation Learning at Scale. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 8440-8451, Online. Association for Computational Linguistics.

Yiming Cui, Ting Liu, Wanxiang Che, Li Xiao, Zhipeng Chen, Wentao Ma, Shijin Wang, and Guoping Hu. 2019. "a span-extraction dataset for Chinese machine reading comprehension". In Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP), pages 5883-5889, Hong Kong, China. Association for Computational Linguistics.

Martin d'Hoffschmidt, Wacim Belblidia, Quentin Heinrich, Tom Brendlé, and Maxime Vidal. 2020. FQuAD: French question answering dataset. In Findings of the Association for Computational Linguistics: EMNLP 2020, pages 1193-1208, Online. Association for Computational Linguistics.

Phong Nguyen-Thuan Do, Nhat Duy Nguyen, Tin Van Huynh, Kiet Van Nguyen, Anh Gia-Tuan Nguyen, and Ngan Luu-Thuy Nguyen. 2021. Sentence Extraction-Based Machine Reading Comprehension for Vietnamese. In Knowledge Science, Engineering and Management: 14th International Conference, KSEM 2021, Tokyo, Japan, August 14-16, 2021, Proceedings, Part II, page 511-523, Berlin, Heidelberg. Springer-Verlag.

Daria Dzendzik, Jennifer Foster, and Carl Vogel. 2021. English Machine Reading Comprehension Datasets: A Survey. In Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing, pages 8784-8804, Online and Punta Cana, Dominican Republic. Association for Computational Linguistics.

Abenezer Mengistu Elema. 2022. Developing Amharic Question Answering Model Over Unstructured Data Source Using Deep Learning Approach. In 2022 International Conference on Information and Communication Technology for Development for Africa (ICT4DA), pages 108-113.

Alexander Fabbri, Patrick Ng, Zhiguo Wang, Ramesh Nallapati, and Bing Xiang. 2020. Template-Based Question Generation from Retrieved Sentences for Improved Unsupervised Question Answering. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 4508-4513, Online. Association for Computational Linguistics.

Tekabe Legesse Feleke. 2017. The similarity and mutual intelligibility between Amharic and Tigrigna varieties. In Proceedings of the Fourth Workshop on NLP for Similar Languages, Varieties and Dialects (VarDial), pages 47-54, Valencia, Spain. Association for Computational Linguistics.

Fitsum Gaim, Wonsuk Yang, Hancheol Park, and Jong Park. 2023. Question-answering in a low-resourced language: Benchmark dataset and models for Tigrinya. In Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 11857-11870, Toronto, Canada. Association for Computational Linguistics.

Jacob Devlin Ming-Wei Chang Kenton and Lee Kristina Toutanova. 2019. Bert: Pre-training of deep bidirectional transformers for language understanding. In Proceedings of naacL-HLT, volume 1, page 2.

Md Tahmid Rahman Laskar, Jimmy Xiangji Huang, and Enamul Hoque. 2020. Contextualized embeddings based transformer encoder for sentence similarity modeling in answer selection task. In Proceedings of the Twelfth Language Resources and Evaluation Conference, pages 5505-5514, Marseille, France. European Language Resources Association.

Patrick Lewis, Barlas Oguz, Ruty Rinott, Sebastian Riedel, and Holger Schwenk. 2020a. MLQA: Evaluating Cross-lingual Extractive Question Answering. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 7315-7330, Online. Association for Computational Linguistics.

Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau Yih, Tim Rocktäschel, Sebastian Riedel, and Douwe Kiela. 2020b. Retrieval-augmented generation for knowledge-intensive NLP tasks. In Proceedings of the 34th International Conference on Neural Information Processing Systems, NIPS'20, Red Hook, NY, USA. Curran Associates Inc.

Timo Möller, Julian Risch, and Malte Pietsch. 2021. GermanQuAD and GermanDPR: Improving nonEnglish question answering and passage retrieval. In Proceedings of the 3rd Workshop on Machine Reading for Question Answering, pages 42-50, Punta Cana, Dominican Republic. Association for Computational Linguistics.

Hussein Mozannar, Elie Maamary, Karl El Hajal, and Hazem Hajj. 2019. Neural Arabic question answering. In Proceedings of the Fourth Arabic Natural Language Processing Workshop, pages 108-118, Florence, Italy. Association for Computational Linguistics.

Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang, Michael Matena, Yanqi Zhou, Wei Li, and Peter J. Liu. 2020. Exploring the limits of transfer learning with a unified text-to-text transformer. J. Mach. Learn. Res., 21(1).

Pranav Rajpurkar, Jian Zhang, Konstantin Lopyrev, and Percy Liang. 2016. SQuAD: 100,000+ Questions for Machine Comprehension of Text. arXiv:1606.05250 [cs]. ArXiv: 1606.05250.

Adam Roberts, Colin Raffel, and Noam Shazeer. 2020. How Much Knowledge Can You Pack Into the Parameters of a Language Model? In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), pages 5418-5426, Online. Association for Computational Linguistics.

Stephen Robertson and Hugo Zaragoza. 2009. The probabilistic relevance framework: Bm25 and beyond. Found. Trends Inf. Retr., 3(4):333-389.

Anna Rogers, Matt Gardner, and Isabelle Augenstein. 2023. QA Dataset Explosion: A Taxonomy of NLP Resources for Question Answering and Reading Comprehension. ACM Comput. Surv., 55(10).

Fandy Setyo Utomo, Nanna Suryana, and Mohd Sanusi Aami. 2017. Question Answering System: A Review on Question Analysis, Document Processing, and Answer Extraction Techniques. Journal of Theoretical & Applied Information Technology, 95(14).

Shijie Wu and Mark Dredze. 2020. Are all languages created equal in multilingual BERT? In Proceedings of the 5th Workshop on Representation Learning for NLP, pages 120-130, Online. Association for Computational Linguistics.

Wei Yang, Yuqing Xie, Aileen Lin, Xingyu Li, Luchen Tan, Kun Xiong, Ming Li, and Jimmy Lin. 2019. End-to-end open-domain question answering with BERTserini. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics (Demonstrations), pages 72-77, Minneapolis, Minnesota. Association for Computational Linguistics.

Baye Yimam. 2009. Amharic Grammar. Addis Ababa, Addis Ababa University Press.

Seid Muhie Yimam and Mulugeta Libsie. 2009. TETEYEQ: Amharic question answering for factoid questions. IE-IR-LRL, 3(4):17.
