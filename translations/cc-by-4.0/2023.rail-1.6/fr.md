> Machine translation (fr) of "Deep learning and low-resource languages: How much data is enough? A case study of three linguistically distinct South African languages" by Roald Eiselen, Tanja Gaustad, https://aclanthology.org/2023.rail-1.6/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Apprentissage profond et langues peu dotées : Quelle quantité de données est suffisante ? Une étude de cas de trois langues sud-africaines linguistiquement distinctes

Roald Eiselen, Tanja Gaustad

**Affiliations**  
Roald Eiselen and Tanja Gaustad  
Centre for Text Technology (CTexT)  
North-West University  
Potchefstroom, South Africa  
, 

## Résumé

Dans cet article, nous présentons une étude de cas pour trois langues sud-africaines distinctes et sous-dotées en ressources (afrikaans, isiZulu et Sesotho sa Leboa) afin d'étudier l'influence de la taille des données et de la nature linguistique d'une langue sur les performances de différents types d'embeddings. Notre configuration expérimentale consiste à entraîner des plongements sur des quantités croissantes de données, puis à évaluer l'impact de la taille des données pour la tâche en aval d'étiquetage morpho-syntaxique. Nous constatons que relativement peu de données peuvent produire des représentations utiles pour cette tâche spécifique pour les trois langues. Notre analyse montre également que l'influence des différences linguistiques et orthographiques entre les langues ne doit pas être sous-estimée : les langues morphologiquement complexes, écrites de manière conjonctive (isiZulu dans notre cas) nécessitent sensiblement plus de données pour obtenir de bons résultats, tandis que les langues écrites de manière disjonctive nécessitent sensiblement moins de données. Ce n'est pas seulement le cas en ce qui concerne les données pour l'entraînement du modèle d'embedding, mais aussi les matériaux d'entraînement annotés pour la tâche en question. Il est donc impératif de connaître les caractéristiques de la langue sur laquelle vous travaillez pour faire des choix éclairés sur la quantité de données et le type d'embeddings à utiliser.

## 1 Introduction

Au cours de la dernière décennie, les représentations vectorielles de mots et l’utilisation de l’apprentissage profond sont devenues des normes de facto dans le traitement du langage naturel (Alzubaidi et al., 2021; Khurana et al., 2023). Il y a également eu une volonté d'élargir la diversité linguistique dans la recherche en TAL (Joshi et al., 2020). L'apprentissage de représentations vectorielles, également appelées embeddings, et l'apprentissage profond sont des procédures intrinsèquement basées sur les données, où les modèles sont entraînés à partir de vastes quantités de données pour représenter numériquement le langage ou apprendre une tâche en aval. Inclure une plus grande variété de langues que les langues dominantes, telles que l'anglais, l'espagnol, l'allemand, le japonais, etc., pour atteindre une plus grande diversité linguistique signifie généralement étudier des langues peu dotées en ressources ou sous-dotées en ressources.

Cela conduit cependant à une dichotomie : les modèles d'apprentissage profond performants, comme BERT, ont été entraînés sur des milliards de mots. Lors de l'élaboration de modèles pour des langues autres que l'anglais, les langues moins dotées en ressources (telles que les langues sud-africaines) sont laissées pour compte parce qu'il y a très peu de données disponibles. De plus, l'évaluation des techniques existantes n'est que partiellement appliquée aux langues sous-dotées et les chercheurs supposent généralement que les généralisations obtenues avec un entraînement sur beaucoup de données seront pour la plupart vraies avec moins de données.

Plus récemment, il y a eu des efforts pour étendre l'utilité des embeddings entraînés sur des langues bien dotées à des langues disposant de beaucoup moins de données, dans ce qu'on appelle des modèles multilingues, tels que XLM-R (Conneau et al., 2020) et mBERT (Devlin et al., 2019). Ces modèles génèrent des représentations qui sont une combinaison d'informations spécifiques à la langue ainsi que d'informations apprises dans toutes les langues incluses dans le modèle. Typiquement, ils sont entraînés exclusivement sur des données web comme Common Crawl ou Wikipedia, qui présentent certaines limitations inhérentes (comme discuté plus loin dans cet article), mais ont également une disponibilité limitée pour les langues sud-africaines. Par exemple, isiNdebele n'a pas de données Wikipédia et n'est donc même pas présent dans Common Crawl. Par conséquent, la plupart des langues sud-africaines ne sont pas incluses dans ces modèles multilingues.

Faire des recherches en TALN sur les langues sud-africaines de nos jours amène alors à la question des implications de travailler avec très peu de données sur les techniques standards actuelles comme les embeddings et les modèles de langage neuronaux. Ou en d'autres mots : quelle quantité de données est nécessaire pour apprendre des représentations vectorielles utiles ? L'hypothèse sous-jacente est que l'apprentissage à partir de moins de données donnera des modèles moins représentatifs et donc moins utiles. Il reste toutefois à voir si tel est véritablement le cas. Du point de vue de la diversité linguistique, il est également pertinent de savoir comment les modèles de plongement varient les uns des autres pour des langues structurellement différentes et comment la quantité de données disponibles influence les représentations apprises pour des langues typographiquement différentes.

Dans cet article, nous présentons une étude de cas tentant de répondre à ces questions. Notre configuration consiste à entraîner des plongements pour trois langues sud-africaines linguistiquement distinctes (l'afrikaans, l'isiZulu et le sesotho sa Leboa) afin d'évaluer l'impact de plongements entraînés sur des quantités croissantes de données pour une tâche en aval d'étiquetage de catégorie grammaticale (POS). L'objectif est de déterminer l'influence de la taille des données sur les performances des différents types d'embeddings et de décrire les effets observés pour différentes langues. Les résultats de nos expériences montrent que même relativement peu de données peuvent être utiles dans certains scénarios et que les langues morphologiquement complexes et écrites de manière conjointe nécessitent sensiblement plus de données, tant pour l'entraînement des embeddings que pour la tâche en aval, surtout lorsqu'on utilise des représentations de mots entiers/sous-mots.

## 2 Contexte

## 2.1 Contexte linguistique sud-africain

Les onze langues officielles de l'Afrique du Sud comprennent neuf langues Niger-Congo-B (NCB) et deux langues germaniques. Les langues NCB (van der Velde et al., 2022) présentent un certain nombre de caractéristiques linguistiques qui les distinguent sensiblement des langues indo-européennes : ce sont toutes des langues à tons ; elles utilisent un système élaboré de classes nominales pouvant comporter jusqu'à 21 classes ; et leur morphologie nominale et verbale est très agglutinante et très productive, ce qui peut entraîner un vocabulaire étendu pour les langues qui suivent le système d'écriture conjonctif.

Pour des raisons historiques, les langues NCB d'Afrique du Sud ont adopté deux systèmes d'écriture différents, soit conjoint, soit disjoint, où une distinction est généralement faite entre les mots linguistiques et les mots orthographiques. Pour les langues écrites de manière conjointe, un mot orthographique (token) correspond à un ou plusieurs mots linguistiques, tandis que pour les langues écrites de manière disjointe, plusieurs mots orthographiques peuvent correspondre à un mot linguistique (Louwrens et Poulos, 2006). Les quatre langues nguni, isiNdebele, isiXhosa, isiZulu et Siswati, sont écrites de manière conjonctive, tandis que les trois langues sotho, Sesotho, Sesotho sa Leboa (également connu sous le nom de Sepedi) et Setswana, le Tshivenḓa, une langue venda, ainsi que le Xitsonga, une langue tswa-ronga, sont écrits de manière disjonctive. C'est une différence marquée par rapport aux deux langues germaniques présentes en Afrique du Sud, l'afrikaans et l'anglais, où la plupart du temps un mot linguistique et un mot orthographique coïncident.

La conséquence de ces différents systèmes d'écriture est que plusieurs jetons dans les langues écrites de manière disjonctive peuvent correspondre à un seul jeton dans les langues écrites de manière conjonctive. Cela entraîne une fréquence de jetons peu dense pour les langues écrites de manière conjonctive, tandis que l'inverse est vrai pour les langues disjonctives. À titre d'illustration, les équivalents parallèles d'un corpus de 50 000 mots en anglais comporteront environ 43 000 mots pour les langues écrites de manière conjonctive, tandis que les langues disjonctives comporteront environ 60 000 jetons. Cette différence et ses implications sont discutées plus en détail dans la Section 3.

L'un des objectifs de cet article est d'étudier l'influence des différences linguistiques et orthographiques dans les langues sud-africaines sur l'utilisation de modèles de plongement dans les tâches de TAL, en particulier l'étiquetage POS. À cette fin, nous avons choisi une langue de chaque famille pour nos expériences : l'afrikaans (germanique), l'isiZulu (Nguni écrit de manière conjointe) et le Sesotho sa Leboa (Sotho écrit de manière disjointe).

## 2.2 Modèles de plongement

Depuis l'introduction des représentations vectorisées de mots word2vec (Mikolov et al., 2013) et GloVe (Pennington et al., 2014), la plupart (sinon toutes) des tâches de TAL utilisent des représentations vectorielles apprises, appelées plongements, pour modéliser les occurrences des mots et leur contexte. Avec ces algorithmes, les modèles de plongement sont entraînés efficacement sur de grandes quantités de données et les représentations apprises, combinées aux techniques d'apprentissage profond, améliorent généralement les résultats des tâches de TAL en aval. Dans cet article, nous appliquons trois architectures de plongement, à savoir fastText (une extension de word2vec) et GloVe, deux plongements classiques, et les plongements FLAIR, un réseau de neurones artificiels récurrent basé sur les caractères.

Les embeddings GloVe (Pennington et al., 2014) apprennent des représentations de mots en utilisant des co-occurrences globales pour entraîner un modèle de régression log-bilinéaire. Pour chaque mot dans le vocabulaire du modèle GloVe, un seul vecteur n-dimensionnel est appris, tandis que tous les mots invisibles génèrent la même représentation vectorielle. Les embeddings fastText (Bojanowski et al., 2017), une extension de word2vec (Mikolov et al., 2013), sont basés sur les co-occurrences locales de mots. En plus du mot complet, la génération des représentations vectorielles inclut des n-grammes de caractères, ou « sous-mots », permettant à ces plongements de générer également des représentations distinctes pour des mots jamais vus auparavant en combinant les n-grammes du mot inconnu. Les embeddings fastText existent en deux variantes, les modèles continuous bag-of-words (CBoW) et Skipgram. GloVe et fastText apprennent tous deux une seule représentation vectorielle pour chaque mot du vocabulaire. Lors de la récupération de ce vecteur, le mot recevra toujours le même vecteur, indépendamment du contexte dans lequel le mot apparaît.

En revanche, les embeddings FLAIR (Akbik et al., 2018, 2019) apprennent des représentations pour des séquences de caractères en entraînant un réseau de neurones récurrents à mémoire à long terme (LSTM). Cela signifie qu'un mot distinct se produisant dans des contextes différents peut avoir une représentation vectorielle différente en fonction des séquences de caractères (contexte) autour du mot. De plus, toutes les séquences de caractères reçoivent une représentation, qu'une séquence ait été vue pendant l'entraînement ou non. Cela peut aider avec la représentation de mots rares ou mal orthographiés ainsi qu'avec des morphèmes individuels ou des mots morphologiquement complexes. FLAIR permet deux variantes, à savoir en avant et en arrière en fonction de la direction dans laquelle le texte est traité - soit à partir du début (en avant) ou à partir de la fin (en arrière).

Avec la disponibilité de ces cadres d'apprentissage profond améliorés et une attention accrue portée à la diversité linguistique dans la communauté de l'apprentissage profond, il y a eu une augmentation substantielle de la recherche sur les langues africaines. Le focus de ce travail a été large : des applications des embeddings et de l'apprentissage profond sur des langues individuelles et des applications individuelles (Dlamini et al., 2021 ; Heyns et Barnard, 2020 ; Loubser et Puttkammer, 2020 ; Marivate et al., 2020 ; Ralethe, 2020), aux investigations des architectures d'embedding multilingues pour les langues africaines (Alabi et al., 2022 ; Hanslo, 2021 ; Moeng et al., 2022) et de l'apprentissage par transfert à partir de langues bien dotées (Hedderich et al., 2020). Les résultats de ces investigations ont été mitigés, améliorant dans certains cas les technologies par rapport aux meilleurs résultats précédents, tandis que d'autres approches montrent comment la nature et la qualité des données ont un impact significatif sur la qualité des modèles entraînés. À notre connaissance, aucune de ces études n'a explicitement examiné la qualité et la nature des embeddings en considérant la taille des données et les attributs morpho-syntaxiques des langues africaines.

## 3 Données

Le prérequis majeur pour l'entraînement d'embeddings et de modèles linguistiques pour une langue donnée est la disponibilité de grandes quantités de données textuelles. Bien qu'il y ait eu plusieurs efforts pour créer de tels corpus pour les langues sud-africaines (Eiselen et Puttkammer, 2014 ; Goldhahn et al., 2012 ; Marivate et al., 2020), il y a encore relativement peu de données disponibles pour la plupart d'entre elles. Les données collectées pour cette étude sont une combinaison de divers ensembles de données ouvertes (principalement des licences CC-BY et CC-NC), ainsi que certaines données uniquement disponibles pour les auteurs avec des restrictions de copyright interdisant la distribution des corpus complets. Les données incluses dans les corpus d'entraînement pour les embeddings isiZulu et Sesotho sa Leboa proviennent principalement des NCHLT Text Corpora (Eiselen et Puttkammer, 2014 ; Puttkammer et al., 2014c,d,e), des Autshumato Corpora (McKellar, 2022a,b,c), de la Leipzig Corpus Collection (Goldhahn et al., 2012), et du Common Crawl corpus. Toutes ces sources sont également utilisées dans le corpus d'entraînement Afrikaans, ainsi que des données supplémentaires provenant de maisons d'édition et de sources privées, c'est-à-dire le NWU/Lapa Corpus, le NWU/Protea Boekhuis Corpus, et le NWU/ATKV-Taalgenoot Corpus.

Bien que les données des corpus Leipzig et Common Crawl soient identifiées par langue, une première investigation a montré qu'une quantité substantielle de ces données est incorrectement attribuée à l'une des langues. Cela est principalement dû au fait que les trois langues de cette étude ont des langues apparentées partageant des caractéristiques orthographiques similaires, ce qui conduit à une mauvaise classification des données linguistiques, spécifiquement :

Afrikaans ⇔ néerlandais;

isiZulu ⇔ isiNdebele, isiXhosa et Siswati;

Sesotho sa Leboa ⇔ Setswana et Sesotho.

Par conséquent, toutes les données des corpus Leipzig et Common Crawl ont été nettoyées avec l’identifiant de langue NCHLT (Hocking, 2014; Puttkammer et al., 2018) à un niveau de confiance de 80%. Étant donné que la plupart des données dans les corpus respectifs proviennent du Web, tous les doublons au niveau des paragraphes dans les données combinées sont supprimés avant l'entraînement.

p04-01.png

Tableau 1 : Résumé des données disponibles pour l'entraînement des plongements et l'étiquetage POS

Un résumé des données disponibles pour l'entraînement des plongements est présenté dans le Tableau 1. Comme cela a été discuté dans la Section 2.1, il existe une différence marquée dans le nombre de tokens dans le vocabulaire pour chacune des trois langues pour les mêmes tailles de corpus. Une manière de représenter les effets combinés de ces différences morphosyntaxiques et de système d'écriture consiste à ajouter le rapport token-vocabulaire aux comptages de tokens rapportés : un texte en isiZulu, langue à écriture conjonctive et morphologiquement complexe, présente généralement un rapport token-vocabulaire plus élevé qu'un texte en Sesotho sa Leboa, où un certain nombre de morphèmes sont écrits séparément et comptent donc comme plusieurs tokens. En Afrikaans, où un token correspond typiquement à un mot orthographique, le ratio token-vocabulaire se situe quelque part entre les deux extrêmes des langues disjonctives et conjonctives. Le vocabulaire de l'afrikaans est encore plus clairsemé que ce qui est typique en anglais, car la composition est très courante en afrikaans et conduit à un plus grand nombre de tokens uniques, bien qu'elle ne soit pas aussi productive que l'isiZulu à écriture conjonctive.

Les données d'étiquetage morpho-syntaxique (POS) utilisées dans cette étude proviennent des corpus annotés NCHLT pour l'afrikaans et le sesotho sa Leboa (Puttkammer et al., 2014a,b), ainsi que des corpus enrichis linguistiquement pour les langues sud-africaines écrites de manière conjointe pour l'isiZulu (Gaustad et Puttkammer, 2022; Puttkammer et Gaustad, 2021). Chaque corpus annoté se compose d'environ 50 000 tokens pour l'ensemble d'entraînement, et d'un ensemble de test séparé d'environ 5 000 tokens. Bien que les données soient annotées sur des ensembles de balises POS à grain très fin (généralement composés de plus de 90 balises), pour cette enquête, nous avons réduit les ensembles de balises à entre 12 et 17 balises, par exemple en excluant les informations de classe et en utilisant uniquement les classes POS principales. Cela rend les résultats entre les langues plus comparables, mais n'obscurcit pas les différences fonctionnelles qu'une conversion vers UPOS ferait. Un aperçu des données POS et des étiquettes est présenté dans le Tableau 1.

## 4 Conception expérimentale

Afin de déterminer l'impact des différentes architectures de plongement et des attributs morpho-syntaxiques sur l'utilité des plongements dans des environnements à faibles ressources, nous effectuons un ensemble d'expériences pour établir comment ces attributs, en combinaison avec la taille des données, affectent la qualité d'une seule tâche en aval, à savoir l'étiquetage POS.

La première étape du processus consiste à générer des embeddings dans chacune des architectures choisies - fastText, GloVe et FLAIR - avec différentes tailles de jeux de données. Pour chaque langue, une sélection aléatoire de paragraphes du corpus disponible est effectuée en tailles itérativement plus grandes, en commençant par 10 000 paragraphes et en doublant la quantité de données de manière aléatoire à chaque itération. Pour l'isiZulu et le Sesotho sa Leboa, ce processus est répété jusqu'au corpus complet disponible (292 600 et 838 000 paragraphes respectivement), tandis que pour l'afrikaans, nous ne sélectionnons des données que jusqu'à un incrément au-dessus de la plus grande des deux autres langues (1 280 000 paragraphes). Sur la base de chaque itération de données, des embeddings pour les trois architectures, y compris leurs différentes variantes, sont entraînés.

Pour rendre la comparaison des modèles aussi cohérente que possible, les hyperparamètres de chacune des architectures sont conservés identiques (généralement les paramètres par défaut, voir le tableau 2) et aucun réglage des hyperparamètres n'est effectué. Par conséquent, il peut y avoir certaines sélections d'hyperparamètres pour les différentes tailles et langues des ensembles de données, qui pourraient conduire à de légères améliorations dans les résultats présentés dans ce travail, mais des hyperparamètres différents rendraient la comparaison et les conclusions résultantes moins généralement applicables. En outre, cela augmenterait également substantiellement le nombre d'expériences qui doivent être entraînées (probablement des milliers) et ne peut pas être justifié sur le plan éthique et environnemental en raison de la consommation d'énergie supplémentaire. Au total, 110 modèles de plongement sont entraînés sur un processeur Intel i79700 et quatre GPU NVIDIA GeForce RTX 2060 6 Go, totalisant 30 heures de processeur et 252 heures de GPU.

p05-01.png

Tableau 2 : Réglages des hyperparamètres pour l'entraînement des plongements

La qualité des plongements entraînés sur les différentes tailles de corpus pour les trois langues est évaluée à l'aide d'un étiqueteur morphosyntaxique bidirectionnel LSTM-CRF vanilla implémenté dans le cadre du framework FLAIR (Akbik et al., 2019). Un étiqueteur POS distinct est entraîné pour chacun des modèles d'embedding, sur le même matériel GPU utilisé pour entraîner les embeddings. La raison principale d'utiliser le framework FLAIR est le fait qu'il prend en charge toutes les différentes architectures d'embedding, assurant ainsi que les résultats des étiqueteurs respectifs peuvent être raisonnablement comparés. Comme pour les modèles d'embedding, les hyperparamètres sont maintenus aux paramètres par défaut (taille cachée : 256, taux d'apprentissage : 0,1, drop out : 0,05, époques : 40). Il convient également de noter que, parce que les ensembles d'entraînement POS sont relativement petits, l'ajustement fin des embeddings pendant l'entraînement de l'étiqueteur POS n'est pas effectué. Tous les étiqueteurs sont évalués à l'aide de la métrique d'exactitude et comparés aux étiqueteurs morphosyntaxiques des services Web NCHLT (Puttkammer et al., 2018) comme référence pour chaque langue.

Avec un si grand ensemble d'étiqueteurs (24 au total), les étiqueteurs POS n'ont pas été entraînés plusieurs fois avec des scores moyens. Faire cela augmenterait une fois de plus de manière substantielle les heures d'utilisation de GPU (actuellement 82) nécessaires pour l'expérience, et ne peut être justifié, puisque l'objectif de l'article n'est pas de créer le meilleur étiqueteur possible, mais plutôt d'établir comment les différents embeddings influencent les résultats en aval.

## 5 Résultats et discussion

Nous allons maintenant discuter de la performance des différents modèles de plongement avec différentes tailles de données pour l'afrikaans, l'isiZulu et le Sesotho sa Leboa. Une représentation graphique des performances sur la tâche d'étiquetage POS peut être trouvée dans les figures 1 (pour l'afrikaans), 2 (pour isiZulu) et 3 (pour Sesotho sa Leboa), avec les résultats numériques complets disponibles dans le tableau 3 en annexe.

La première conclusion notable qui peut être tirée de l'inspection des résultats est que même les embeddings entraînés sur des corpus très petits peuvent améliorer la qualité de tâches en aval relativement simples, telles que l'étiquetage POS, lorsqu'ils sont comparés aux systèmes de base. Plus précisément, les plongements contextuels de caractères FLAIR produisent des résultats en aval étonnamment bons, même pour l'isiZulu écrit de manière conjonctive. Il était attendu que les modèles basés sur les caractères fonctionnent le mieux avec de très petites quantités de données, mais les modèles entraînés sur les plus petits ensembles de données ont en réalité des performances comparables aux meilleurs résultats pour l'un des autres embeddings. À l'inverse, bien que les modèles FLAIR soient plus performants lorsqu'ils sont entraînés avec les plus grands ensembles de données, il n'y a pas le même niveau d'amélioration que pour les deux autres architectures. Une implication de ces résultats est que des modèles beaucoup plus petits et plus rapides peuvent fonctionner suffisamment bien pour certains usages, même s'ils n'atteignent pas nécessairement les résultats de l'état de l'art. Cela permet aux chercheurs et aux développeurs disposant de capacités matérielles limitées de bénéficier également de l'utilisation de ces types de plongements.

Comme prévu, les embeddings GloVe réalisent systématiquement les pires performances parmi tous les types d'embeddings, surtout lors des premières itérations de très petits corpus, pour deux raisons principales. Premièrement, comme ces embeddings ne génèrent des représentations que pour les mots du vocabulaire, tous les mots de la tâche d'étiquetage qui ne font pas partie du vocabulaire sont représentés par le même vecteur, et n'ont donc aucune représentation distinctive. Deuxièmement, étant donné que de nombreux mots n'apparaissent qu'un petit nombre de fois dans les données d'entraînement, l'apprentissage de représentations complexes est difficile lorsqu'un mot n'est vu que dans un petit nombre de contextes. Ces problèmes sont exacerbés pour isiZulu où le style d'écriture conjonctive provoque un grand nombre de co-occurrences distinctives pour tous les mots, en particulier les mots moins fréquents, et l'apprentissage des représentations significatives est presque impossible. Pour le Sesotho sa Leboa écrit de manière disjonctive, cependant, le vocabulaire est relativement représentatif même avec un petit corpus, et les embeddings GloVe ne fonctionnent que légèrement moins bien que les autres types d'embeddings.

Les modèles fastText sont nettement plus performants que les modèles GloVe avec de très petits jeux de données, tout en restant moins performants que les plongements FLAIR. Avec les plus grands ensembles de données, cependant, les modèles fastText CBoW fonctionnent soit de manière très similaire, soit mieux que les modèles FLAIR. Fait intéressant, avec de très petits ensembles de données, les modèles Skipgram surpassent les modèles CBoW pour les deux ou trois premières itérations de données, après quoi les modèles CBoW fonctionnent toujours mieux dans toutes les langues. Il n'est pas immédiatement évident pourquoi ce serait le cas, mais le fait que cela se produise dans les trois langues montre définitivement qu'avec de très petits ensembles de données, les skipgrams sont préférables aux CBoW, alors que pour tout ensemble de données avec plus de 500 000 ou un million de jetons (correspondant à environ 40 000 paragraphes dans nos données), les modèles CBoW génèrent de meilleures représentations mesurées sur la tâche d'étiquetage POS. Cela contredit les conclusions initiales de Mikolov et al. (2013), mais est conforme aux derniers modèles fastText publiés qui sont également passés aux modèles CBoW par défaut, par opposition aux modèles précédemment publiés (Bojanowski et al., 2017).

Nos résultats montrent également clairement que le système d'écriture de la langue joue un rôle majeur dans la quantité de données nécessaires pour entraîner des embeddings utiles à quelque degré que ce soit. Pour les langues écrites de manière conjointe, à mesure que la complexité morphologique au niveau du token de la langue augmente, la quantité de données nécessaires pour créer des représentations significatives augmente également. Dans les deux cas extrêmes de l'isiZulu et du Sesotho sa Leboa, même les embeddings des plus grands corpus disponibles pour l'isiZulu fonctionnent sensiblement moins bien que les embeddings basés sur le plus petit corpus de Sesotho sa Leboa, avec des précisions comprises entre 4,28 % et 15,19 % inférieures selon le modèle. Afrikaans, qui est légèrement plus complexe sur le plan morphologique au niveau du token que le Sesotho sa Leboa, mais pas aussi complexe que l'isiZulu, se situe également quelque part entre les deux langues lorsqu'on considère les différentes tailles de données et les embeddings.

p06-01.png

Figure 1 : Exactitude de l'étiquetage POS en afrikaans en utilisant différents modèles de plongement avec des tailles de données croissantes

Outre les conclusions générales présentées dans les paragraphes précédents, certains aspects des résultats spécifiques à la langue méritent également d'être discutés. Nous incluons une analyse large des erreurs linguistiques pour chacune des langues afin de déterminer où se situent les principales erreurs pour les meilleurs modèles de chaque langue.

Pour l'afrikaans, le modèle fastText CBoW est le moins performant de tous les modèles sur le plus petit ensemble de données, mais montre le plus grand degré d'amélioration à mesure que la taille des données augmente, au point où il est le plus performant de tous les modèles sur le plus grand ensemble de données. En outre, le modèle afrikaans FLAIR Forward fonctionne presque au même niveau que le modèle fastText CBoW, tandis que le modèle FLAIR Backward est légèrement pire. En considérant les différences d'erreurs de balisage entre les embeddings entraînés sur les plus petits et les plus grands corpus, il devient clair que la principale source d'améliorations pour les embeddings fastText et GloVe est la taille des données. Comme plus de mots sont inclus dans le vocabulaire, les taux d'erreur relatifs pour les noms, les verbes, les adjectifs et les adverbes sont réduits entre 35% et 45%. Les réductions des taux d'erreur relatifs pour les modèles FLAIR ne sont pas aussi uniformes à travers toutes les classes de mots ouverts. À titre d'exemple, le modèle FLAIR Forward réduit le pourcentage d'erreurs pour les adjectifs et les verbes de 43% et 72% respectivement, tout en augmentant le nombre d'erreurs pour les noms ou les adverbes. Le modèle FLAIR Backward montre des améliorations pour les adjectifs (25%) et les verbes (61%) également, mais aussi des améliorations substantielles pour les noms (64%) et les adverbes (48%).

p07-01.png

Figure 2 : Exactitude de l'étiquetage POS en isiZulu en utilisant différents modèles de plongement avec des tailles de données croissantes

Dans le cas de l'isiZulu, le modèle FLAIR Backward est globalement le plus performant, bien que le FLAIR Forward obtienne des résultats comparables. Cette différenciation avec l'Afrikaans est probablement due au fait que l'isiZulu utilise la préfixation de manière plus productive que la suffixation, et le traitement des données de la fin du texte vers le début conduit à un modèle légèrement plus informatif. Le modèle GloVe pour l'isiZulu est nettement moins bon que tous les autres modèles entraînés dans cette étude et est certainement une conséquence de la rareté des données pendant l'entraînement ainsi que des mots jamais vus auparavant dans la tâche d'étiquetage. Ce problème est moins répandu pour les modèles fastText : puisque les n-grammes de mots non vus auparavant peuvent encore générer une représentation, et bien que moins informatifs pour la tâche, ces représentations de "sous-mots" ont évidemment un impact substantiel sur la qualité des résultats. Les modèles CBoW et GloVe montrent les plus grandes réductions des taux d'erreur parmi les principales classes POS, soit entre 17 % et 77 %, particulièrement pour les Possessifs et les Adverbes. Les modèles FLAIR, en revanche, ne montrent pas de grandes améliorations pour aucune des catégories, et les améliorations sont contrebalancées par des régressions dans d'autres classes, à la fin desquelles les résultats restent relativement stables entre les modèles entraînés sur les plus petits et les plus grands corpus.

Même si les embeddings FLAIR donnent les meilleurs résultats pour l'isiZulu, il y a très peu d'amélioration pour ces modèles lorsque la taille des données augmente. Il y a deux raisons possibles, et liées, pour lesquelles cela peut être le cas. Tout d'abord, puisque la plupart des affixations en isiZulu sont assez régulières, la plupart de la structure morphologique de la langue peut être bien encodée avec de petites quantités de données. Ceci est étayé par le fait que les classes de mots les plus productives (c'est-à-dire les noms, les verbes, les adverbes, les possessifs et les relatifs) sont étiquetées plus précisément avec un modèle FLAIR entraîné sur la plus petite quantité de données, qu'avec n'importe lequel des autres modèles de plongement. Le modèle fastText CBoW fonctionne de manière similaire sur ces classes avec le plus grand ensemble d'entraînement, et pourrait éventuellement surpasser les modèles FLAIR si plus de données sont disponibles. La deuxième raison possible est que les données d'entraînement annotées en POS sont tout simplement trop petites pour que d'autres améliorations soient possibles, et qu'un ensemble nettement plus grand est nécessaire pour atteindre des résultats comparables à ceux de l'afrikaans ou du sesotho sa Leboa.

p07-02.png

Figure 3 : Exactitude de l'étiquetage POS du sesotho sa Leboa en utilisant différents modèles de plongement avec des tailles de données croissantes

Tous les modèles de plongement pour le sesotho sa Leboa, avec son style d'écriture disjonctif, fonctionnent clairement déjà bien avec de très petits jeux de données. Les améliorations apportées à la tâche de balisage POS avec de plus grands ensembles de données ne sont pas non plus aussi importantes que pour les deux autres langues. Comme pour les autres langues, les modèles FLAIR fonctionnent le mieux avec très peu de données, tandis que les modèles fastText CBoW génèrent les meilleurs résultats globaux avec plus de données. De manière surprenante, les modèles fastText Skipgram ne montrent pas beaucoup d'amélioration entre les ensembles de données les plus petits et les plus grands, et il ne semble pas y avoir une raison facilement identifiable pour ce résultat. Comme pour les deux autres langues, les plongements GloVe montrent généralement des améliorations à chaque itération de données plus importantes, et sont susceptibles de continuer à s'améliorer si davantage de données étaient disponibles pour être incluses. Pour les modèles GloVe et FLAIR, les améliorations dans les classes d'étiquettes sont beaucoup plus modérées, entre 8 % et 46 % pour les classes nom, verbe, accord et adjectif. Les deux modèles FLAIR régressent également sur la classe des adverbes. Les modèles fastText montrent des améliorations plus substantielles pour certaines des classes, mais pour le modèle Skipgram, la réduction des erreurs dans une classe est contrebalancée par une augmentation des erreurs dans une autre classe. Par exemple, les erreurs de classes nominales sont réduites de 40%, mais les classes adjectifs et concordiales augmentent leurs erreurs de plus de 40%, ce qui donne des performances très similaires au modèle entraîné sur les plus petits ensembles de données.

En généralisant nos résultats pour le type d'embeddings à utiliser avec peu de données, la conclusion est que les modèles FLAIR produiront des résultats décents, surtout avec très peu de données. Avec un peu plus de données, les embeddings fastText CBoW fonctionneront également de manière adéquate. GloVe, cependant, a besoin de grandes quantités de données pour atteindre une puissance de généralisation suffisante pour être appliqué avec succès à une tâche en aval morpho-syntaxique.

Notre analyse montre également que l'influence des différences linguistiques et orthographiques entre les langues ne doit pas être sous-estimée. Une langue comme l'isiZulu, avec une morphologie complexe et un vocabulaire étendu (et par conséquent une plus grande rareté des données) nécessitera plus de données pour entraîner des modèles de langage représentatifs. Mais un meilleur modèle de langage seul n'est pas suffisant. Plus de données annotées liées à la tâche sont également nécessaires pour augmenter considérablement la précision du POS - encore une fois un effet d'essayer d'apprendre à partir de données éparses. Il est important de reconnaître l'influence de la rareté des données à la fois dans les représentations apprises et dans la tâche réelle à apprendre sur les résultats finaux d'étiquetage.

## 6 Conclusion et travaux futurs

Dans cet article, nous avons étudié comment la quantité de données d'entraînement disponibles et les attributs linguistiques d'une langue influencent la qualité des embeddings appris. Notre étude de cas a consisté à entraîner trois architectures d'embedding différentes sur des quantités variables de données, et à évaluer les embeddings de manière extrinsèque sur la tâche en aval d'étiquetage POS pour trois langues sud-africaines linguistiquement distinctes (afrikaans, isiZulu et Sesotho sa Leboa).

Nos résultats indiquent que dans certaines conditions, même relativement peu de données peuvent produire des représentations utiles pour une tâche spécifique. Nous montrons explicitement qu'avec très peu de données (environ 300 000 tokens), les plongements FLAIR génèrent des représentations qui se comportent de manière comparable à n'importe laquelle des autres architectures entraînées sur les plus grands jeux de données, indépendamment de la complexité morphologique de la langue. Les modèles FLAIR ne montrent généralement pas le même niveau d'améliorations que les autres types d'embeddings lorsque des ensembles de données plus importants sont disponibles, et dans certains cas, sont dépassés par les embeddings fastText CBoW avec les ensembles d'entraînement les plus importants.

Les résultats renforcent en outre le constat que, pour les langues morphologiquement complexes et à écriture conjonctive, il faut nettement plus de données pour obtenir de bons résultats, non seulement du texte non annoté pour l'entraînement du modèle de langage, mais aussi du matériel d'entraînement annoté pour la tâche considérée. Dans l'ensemble, nous concluons qu'il est impératif de connaître les caractéristiques de la langue sur laquelle on travaille pour faire des choix linguistiquement informés concernant la quantité de données et le type d'embeddings à utiliser.

Bien que ces résultats soient encourageants pour la tâche relativement simple d'étiquetage morphosyntaxique (POS tagging), il n'en va peut-être pas de même pour d'autres tâches plus complexes, en particulier lorsque des attributs sémantiques sont concernés. Nous nous attendons cependant à ce que les lacunes apparentes des modèles fastText Skipgram et GloVe subsistent dans les contextes sous-dotés en ressources, quelle que soit la tâche à laquelle ils sont appliqués. En gardant cela à l'esprit, il y a deux domaines à explorer pour les recherches futures. Premièrement, ces modèles de plongement devraient être appliqués à différentes tâches pouvant nécessiter différents attributs linguistiques. Deuxièmement, un plan expérimental comparable devrait être appliqué aux modèles transformeurs, tels que RoBERTa, et à l'ajustement fin de modèles de langage multilingues (par exemple mBERT, XLM-R) afin de déterminer si des résultats encourageants similaires sont possibles avec ces architectures plus complexes.

## 7 Limites

Il existe plusieurs limitations de la recherche rapportée dans cette soumission, dont certaines sont explicitement mentionnées dans l'article, et d'autres qui sont exprimées dans cette section car elles ne s'intègrent pas bien dans les discussions de l'article.

La première limitation majeure de ce travail est liée au fait que les résultats rapportés pour la tâche en aval ne sont pas des moyennes de plusieurs exécutions, et qu'aucun réglage des hyperparamètres n'a été effectué. En raison de la nature de l'enquête, c'est-à-dire ne pas tenter d'obtenir des résultats de pointe, et du nombre d'essais distincts requis pour remédier à cette limitation, les auteurs ne s'attendent pas à ce que les résultats changent de sorte que les conclusions seraient considérablement affectées. Pour ces raisons et les implications éthiques de la réalisation d'exécutions inutiles, les auteurs ont décidé de ne pas effectuer ces expériences supplémentaires.

Deuxièmement, même si la soumission rapporte des résultats pour trois langues linguistiquement distinctes, il convient néanmoins de faire preuve de prudence lors de l'interprétation et de l'application de ces résultats à d'autres langues, en particulier lorsque ces langues diffèrent significativement de celles décrites dans l'article, comme par exemple les langues dravidiennes et les langues sino-tibétaines.

Enfin, les résultats de cette soumission visent spécifiquement la tâche relativement simple d'étiquetage morpho-syntaxique (POS), et des investigations supplémentaires sur les résultats de cet article dans des tâches de TAL plus complexes sont nécessaires pour soutenir ces résultats.

## Remerciements

Ce travail a été rendu possible grâce au soutien financier du National Centre for Human Language Technology, une initiative du Département sud-africain des sports, des arts et de la culture. Les auteurs tiennent également à remercier Martin Puttkammer pour ses commentaires lors de la rédaction et de la révision de ce travail.

## Notes

1 https://corpora.uni-leipzig.de/en

2 https://commoncrawl.org

a Veuillez noter que ces données ont été échantillonnées à partir d’un corpus plus important de 430 millions de jetons.

3 https://universaldependencies.org/u/pos/

4 Voir le tableau 3 en annexe pour plus de détails.

5 https://github.com/flairNLP/flair

6 https://hlt.nwu.ac.za/

7 https://fasttext.cc/docs/en/crawl-vectors.html

8 Des renseignements détaillés sur l'analyse des erreurs linguistiques se trouvent aux tableaux 4, 5 et 6 de l'annexe.

## Références

Alan Akbik, Tanja Bergmann, Duncan Blythe, Kashif Rasul, Stefan Schweter, and Roland Vollgraf. 2019. FLAIR: An easy-to-use framework for state-of-the-art NLP. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics (Demonstrations), pages 54-59, Minneapolis, Minnesota. Association for Computational Linguistics.

Alan Akbik, Duncan Blythe, and Roland Vollgraf. 2018. Contextual string embeddings for sequence labeling. In Proceedings of the 27th International Conference on Computational Linguistics, pages 1638-1649, Santa Fe, New Mexico, USA. Association for Computational Linguistics.

Jesujoba O. Alabi, David I. Adelani, Marius Mosbach, and Dietrich Klakow. 2022. Adapting pre-trained language models to African languages via multilingual adaptive fine-tuning. In Proceedings of the 29th International Conference on Computational Linguistics, pages 4336-4349, Gyeongju, Republic of Korea. International Committee on Computational Linguistics.

Laith Alzubaidi, Jinglan Zhang, Amjad J. Humaidi, Ayad Al-Dujaili, Ye Duan, Omran Al-Shamma, J. Santamaría, Mohammed A. Fadhel, Muthana Al-Amidie, and Laith Farhan. 2021. Review of deep learning: concepts, CNN architectures, challenges, applications, future directions. Journal of Big Data, 8(53).

Piotr Bojanowski, Edouard Grave, Armand Joulin, and Tomas Mikolov. 2017. Enriching word vectors with subword information. Transactions of the Association for Computational Linguistics, 5:135-146.

Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume Wenzek, Francisco Guzmán, Edouard Grave, Myle Ott, Luke Zettlemoyer, and Veselin Stoyanov. 2020. Unsupervised cross-lingual representation learning at scale. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 8440-8451, Online. Association for Computational Linguistics.

Jacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. 2019. BERT: Pre-training of deep bidirectional transformers for language understanding. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers), pages 4171-4186, Minneapolis, Minnesota. Association for Computational Linguistics.

Sibonelo Dlamini, Edgar Jembere, Anban Pillay, and Brett van Niekerk. 2021. isiZulu word embeddings. In 2021 Conference on Information Communications Technology and Society (ICTAS), pages 121-126. IEEE.

Roald Eiselen and Martin Puttkammer. 2014. Developing text resources for ten South African languages. In Proceedings of the Ninth International Conference on Language Resources and Evaluation (LREC'14), pages 3698-3703, Reykjavik, Iceland. European Language Resources Association (ELRA).

Tanja Gaustad and Martin Puttkammer. 2022. Linguistically annotated dataset for four official South African languages with a conjunctive orthography: isiNdebele, isiXhosa, isiZulu, and Siswati. Data in Brief, 41.

Dirk Goldhahn, Thomas Eckart, and Uwe Quasthoff. 2012. Building large monolingual dictionaries at the Leipzig corpora collection: From 100 to 200 languages. In Proceedings of the Eighth International Conference on Language Resources and Evaluation (LREC'12), pages 759-765, Istanbul, Turkey. European Language Resources Association (ELRA).

Ridewaan Hanslo. 2021. Evaluation of neural network transformer models for named-entity recognition on low-resourced languages. In 16th Conference on Computer Science and Intelligence Systems (FedCSIS), pages 115-119. IEEE.

Michael A. Hedderich, David Adelani, Dawei Zhu, Jesujoba Alabi, Udia Markus, and Dietrich Klakow. 2020. Transfer learning and distant supervision for multilingual transformer models: A study on African languages. In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), pages 2580-2591, Online. Association for Computational Linguistics.

Nuette Heyns and Etienne Barnard. 2020. Optimising word embeddings for recognised multilingual speech. In 1st Southern African Conference for Artificial Intelligence Research, pages 102-116. Southern African Conference for Artificial Intelligence Research.

Justin Hocking. 2014. Language identification for South African languages. In Annual Pattern Recognition Association of South Africa and Robotics and Mechatronics International Conference (PRASA-RobMech). PRASA.

Pratik Joshi, Sebastin Santy, Amar Budhiraja, Kalika Bali, and Monojit Choudhury. 2020. The state and fate of linguistic diversity and inclusion in the NLP world. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 6282-6293, Online. Association for Computational Linguistics.

Diksha Khurana, Aditya Koli, Kiran Khatter, and Sukhdev Singh. 2023. Natural language processing: state of the art, current trends and challenges. Multimedia Tools and Applications, 82:3713-3744.

Melinda Loubser and Martin Puttkammer. 2020. Viability of neural networks for core technologies for resource-scarce languages. Information, 11(1):41.

Louis Jacobus Louwrens and George Poulos. 2006. The status of the word in selected conventional writing systems - the case of disjunctive writing. Southern African Linguistics and Applied Language Studies, 24(3):389-401.

Vukosi Marivate, Tshephisho Sefara, Vongani Chabalala, Keamogetswe Makhaya, Tumisho Mokgonyane, Rethabile Mokoena, and Abiodun Modupe. 2020. Investigating an approach for low resource language dataset creation, curation and classification: Setswana and Sepedi. In Proceedings of the first workshop on Resources for African Indigenous Languages (RAIL), pages 15-20, Marseille, France. European Language Resources Association (ELRA).

Cindy McKellar. 2022a. Autshumato monolingual Afrikaans corpus. https://hdl.handle.net/20.500.12185/580. South African Centre for Digital Language Resources (SADiLaR).

Cindy McKellar. 2022b. Autshumato monolingual isiZulu corpus. https://hdl.handle.net/20.500.12185/581. South African Centre for Digital Language Resources (SADiLaR).

Cindy McKellar. 2022c. Autshumato monolingual Sepedi corpus. https://hdl.handle.net/20.500.12185/582. South African Centre for Digital Language Resources (SADiLaR).

Tomas Mikolov, Ken Chen, Greg Corrado, and Jeffrey Dean. 2013. Efficient estimation of word representations in vector space. In 1st International Conference on Learning Representations ICLR 2013, Workshop Track Proceedings, Scottsdale, Arizona, USA.

Tumi Moeng, Sheldon Reay, Aaron Daniels, and Jan Buys. 2022. Canonical and surface morphological segmentation for Nguni languages. In Artificial Intelligence Research. Second Southern African Conference, SACAIR 2021, pages 125-139, Durban, South Africa. Springer.

Jeffrey Pennington, Richard Socher, and Christopher Manning. 2014. GloVe: Global vectors for word representation. In Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing (EMNLP), pages 1532-1543, Doha, Qatar. Association for Computational Linguistics.

Martin Puttkammer, Roald Eiselen, Justin Hocking, and Frederik Koen. 2018. NLP web services for resource-scarce languages. In Proceedings of ACL 2018, System Demonstrations, pages 43-49, Melbourne, Australia. Association for Computational Linguistics.

Martin Puttkammer and Tanja Gaustad. 2021. Linguistically enriched corpora for conjunctively written South African languages. https://hdl.handle.net/20.500.12185/546. South African Centre for Digital Language Resources (SADiLaR).

Martin Puttkammer, Martin Schlemmer, and Ruan Bekker. 2014a. NCHLT Afrikaans annotated text corpora. https://hdl.handle.net/20.500.12185/296. South African Centre for Digital Language Resources (SADiLaR).

Martin Puttkammer, Martin Schlemmer, and Ruan Bekker. 2014b. NCHLT Sepedi annotated text corpora. https://hdl.handle.net/20.500.12185/325. South African Centre for Digital Language Resources (SADiLaR).

Martin Puttkammer, Martin Schlemmer, Wikus Pienaar, and Ruan Bekker. 2014c. NCHLT Afrikaans text corpora. https://hdl.handle.net/20.500.12185/293. South African Centre for Digital Language Resources (SADiLaR).

Martin Puttkammer, Martin Schlemmer, Wikus Pienaar, and Ruan Bekker. 2014d. NCHLT isiZulu text corpora. https://hdl.handle.net/20.500.12185/321. South African Centre for Digital Language Resources (SADiLaR).

Martin Puttkammer, Martin Schlemmer, Wikus Pienaar, and Ruan Bekker. 2014e. NCHLT Sepedi text corpora. https://hdl.handle.net/20.500.12185/330. South African Centre for Digital Language Resources (SADiLaR).

Sello Ralethe. 2020. Adaptation of deep bidirectional transformers for Afrikaans language. In Proceedings of the 12th Language Resources and Evaluation Conference, pages 2475-2478, Marseille, France. European Language Resources Association.

Mark van der Velde, Koen Bostoen, Derek Nurse, and Gérard Philippson, editors. 2022. The Bantu Languages, 2nd edition. Routledge.

## A Annexe

p11-01.png

Tableau 3 : Résultats complets pour l'afrikaans, le Sesotho sa Leboa et l'isiZulu sur tous les types de plongements avec différentes tailles de données d'entrée en utilisant un jeu d'étiquettes POS réduit

## A.2 Tableaux d'analyse linguistique POS

p11-02.png

Tableau 4 : Analyse des erreurs linguistiques pour les POS en afrikaans

p12-01.png

Tableau 5 : Analyse des erreurs linguistiques pour isiZulu POS

p12-02.png

Tableau 6 : Analyse des erreurs linguistiques pour Sesotho sa Leboa POS
