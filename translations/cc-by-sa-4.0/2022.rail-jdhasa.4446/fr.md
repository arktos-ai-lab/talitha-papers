> Machine translation (fr) of "Textual Augmentation Techniques Applied to Low Resource Machine Translation: Case of Swahili" by Catherine Gitau, Vukosi Marivate, https://upjournals.up.ac.za/index.php/dhasa/article/view/4446, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## Techniques d'Augmentation Textuelle Appliquées à la Traduction Automatique à Faibles Ressources : Cas du Swahili

Catherine Gitau, Vukosi Marivate

**Affiliations**  
Gitau, Catherine  
African Institute for Mathematical Sciences Ghana  
  
Marivate, Vukosi  
Department of Computer Science, University of Pretoria, South Africa  


## Résumé

Dans ce travail, nous étudions l'impact de l'application de tâches d'augmentation de données textuelles à la traduction automatique à faibles ressources. Il y a eu un intérêt récent pour l'étude des approches d'entraînement de systèmes pour les langues avec des ressources limitées et une approche populaire est l'utilisation de techniques d'augmentation de données. L'augmentation de données vise à augmenter la quantité de données disponibles pour entraîner le système. En traduction automatique, la majorité des paires de langues dans le monde sont considérées comme faibles en ressources car elles ont peu de données parallèles disponibles et la qualité des systèmes de traduction automatique neuronale (NMT) dépend beaucoup de la disponibilité de corpus parallèles importants. Nous étudions et appliquons trois techniques simples d'augmentation de données populaires utilisées dans les tâches de classification de texte ; le remplacement par des synonymes, l'insertion aléatoire et l'augmentation de données contextuelles et comparons leurs performances avec la traduction automatique neuronale de référence pour les jeux de données anglais-swahili (EnSw). Nous présentons également les résultats dans les scores BLEU, ChrF et Meteor. Globalement, la technique d'augmentation de données contextuelles montre quelques améliorations à la fois dans les directions EN → SW et SW → EN. Nous voyons qu'il y a un potentiel d'utilisation de ces méthodes dans la traduction automatique neuronale lorsque des expériences plus étendues sont faites avec divers ensembles de données.

## Mots-clés

low-resource, augmentation de données, traduction automatique

## 1 Introduction

Il y a eu plusieurs avancées en traduction automatique et les systèmes de TA modernes peuvent atteindre des performances de traduction presque humaines sur les paires de langues qui disposent de ressources parallèles d'entraînement significativement importantes. Malheureusement, les systèmes de traduction automatique neuronale fonctionnent très mal sur les paires de langues à faibles ressources où les données d’apprentissage parallèles sont rares. L'amélioration des performances de traduction sur les paires de langues à faibles ressources pourrait avoir un impact considérable étant donné que ces langues sont parlées par une grande partie de la population mondiale.

Selon Lisanza (2021), seulement environ 5 à 10 millions de personnes parlent le swahili comme langue maternelle, mais il est parlé comme langue seconde par environ 80 millions de personnes en Afrique du Sud-Est comme lingua franca, ce qui en fait le langage parlé le plus répandu d'Afrique subsaharienne.

Malgré le fait que la langue est parlée par des millions de personnes sur le continent africain, elle représente moins de 0,1% de l'Internet alors que 58,4% du contenu de l'Internet est en anglais selon W3Techs (2020), ce qui en fait une langue à faibles ressources. Même si le swahili est parlé par tant de personnes, peu de travail a été fait pour améliorer les modèles de traduction construits pour la langue. Les données nécessaires pour produire des systèmes de traduction automatique neuronale de haute qualité ne sont pas disponibles, ce qui entraîne une mauvaise qualité de traduction.

En vision par ordinateur, les techniques d'augmentation de données sont largement utilisées pour augmenter la robustesse et améliorer l'apprentissage des objets avec très peu d'exemples d'entraînement. En traitement d'image, les données entraînées sont augmentées par, par exemple, le retournement horizontal des images, le recadrage aléatoire, l'inclinaison, etc. L'augmentation de données est maintenant devenue une technique standard pour entraîner les réseaux de neurones profonds pour le traitement d'images et n'est pas une pratique très courante dans l'entraînement des réseaux pour les tâches de traitement du langage naturel (NLP) telles que la traduction automatique. L'application des techniques d'augmentation des données dans le texte n'est pas aussi simple que dans la vision par ordinateur, car dans la vision par ordinateur, l'étiquette et le contenu de l'image d'origine sont préservés, comme pour les tâches de traitement du langage naturel (NLP), il est nécessaire de conserver le contexte de la phrase après l'augmentation. Il existe cependant plusieurs méthodes d'augmentation de données qui ont été prouvées pour améliorer les performances sur diverses tâches de traitement automatique du langage naturel (TALN) telles que la classification de texte, mais il n'est pas courant d'appliquer ces méthodes d'augmentation de données pour des tâches telles que la traduction automatique.

La traduction automatique neuronale (NMT) telle que présentée dans les travaux de Sutskever et al. (2014) ; Cho et al. (2014) est une tâche de séquence à séquence qui utilise un réseau neuronal récurrent bidirectionnel connu sous le nom d'encodeur pour traiter une phrase source en vecteurs appelés décodeur qui prédit ensuite les mots dans la langue cible. Pour être en mesure d'entraîner un modèle capable de produire de bonnes traductions, ces réseaux nécessitent beaucoup de données parallèles ou de paires de phrases avec des mots qui se produisent dans divers contextes, ce qui n'est pas disponible dans les paires de langues à faibles ressources, ce qui rend les performances des modèles assez faibles. Une des solutions à ce problème est d'annoter manuellement les données monolingues disponibles, ce qui prend du temps et coûte cher, ou d'effectuer des techniques d'augmentation de données non supervisées.

Dans ce travail, nous explorons certaines techniques d'augmentation de données largement utilisées pour améliorer les tâches de classification de texte et étudions leur impact sur les performances des modèles de traduction automatique neuronale à faibles ressources pour l'anglais-swahili (EnSw). Les techniques d'augmentation de texte les plus populaires appliquées aux tâches de classification de texte consistent en quatre opérations puissantes : le remplacement par des synonymes, l'insertion aléatoire, l'échange aléatoire et la suppression aléatoire. Ces méthodes ont été montrées pour améliorer les performances dans les tâches de classification de texte comme indiqué dans Wei & Zou (2019). Et pour mieux évaluer l'effet de nos méthodes d'augmentation de données, nous comparons les résultats avec un modèle de référence entraîné sur des ensembles de données En-Sw.

En résumé, nos contributions comprennent :

Nous explorons et évaluons sur la tâche de NMT, trois techniques d'augmentation de données actuellement utilisées uniquement dans les tâches de classification de texte; l'augmentation basée sur Word2Vec qui remplace les synonymes dans les phrases, l'augmentation basée sur TF-IDF pour insérer des mots dans des positions aléatoires dans la phrase ainsi que l'utilisation de l'augmentation basée sur le modèle de langage masqué qui augmente les données contextuelles sur le texte.

2. Nous montrons comment ces techniques d'augmentation de données peuvent être utilisées dans les tâches NMT.

3. Nous avons également étendu la bibliothèque textaugment de Marivate & Sefara (2020) pour utiliser les modèles pré-entraînés de Fasttext.

4. Nous présentons les résultats NMT de base dans les scores BLEU, Meteor et ChrF.

Cet article est organisé comme suit; nous examinons d'abord le travail effectué par les auteurs précédents sur l'augmentation de données pour les langues peu dotées en ressources. Nous examinons également les techniques d'augmentation des données et les approches que nous avons utilisées dans notre étude, qui est décrite à la section 3. La Section 4 décrit les paramètres de modèle considérés pour chaque approche d'augmentation de données, la Section 5 discute des résultats expérimentaux, puis nous concluons en énonçant les limitations et les travaux futurs ainsi que la conclusion aux Sections 6 et 7.

## 2 Revue de la littérature

Les travaux sur la traduction automatique visant à améliorer la qualité de traduction automatique pour les langues peu dotées constituent un problème largement étudié. Dans le traitement du langage naturel (NLP), l'augmentation des données est une technique populaire qui est utilisée pour augmenter la taille des données d'entraînement.

Une approche prometteuse est l'utilisation de l'apprentissage par transfert Zoph et al. (2016). Cette méthode a prouvé qu'avoir des connaissances préalables en traduction d'une paire de langues différentes à ressources supérieures peut améliorer la traduction d'une langue à faibles ressources. Un modèle NMT est d'abord entraîné sur un grand corpus parallèle pour créer le modèle parent, puis on continue à entraîner ce modèle en l'alimentant avec un corpus parallèle considérablement plus petit d'une langue peu dotée, ce qui donne le modèle enfant qui hérite des connaissances du modèle parent en réutilisant ses paramètres. Les paires de langues parent et enfant partageaient la même langue cible (anglais). L'utilisation de données d'une autre langue peut être considérée comme une tâche d'augmentation de données en soi et des améliorations importantes ont été observées, surtout lorsque la langue à ressources élevées est syntaxiquement similaire à la langue à faibles ressources Lin et al. (2019).

Les travaux de Sennrich et coll. (2016) explorent une méthode d’augmentation de données pour la traduction automatique connue sous le nom de rétrotraduction, où la traduction automatique est utilisée pour traduire automatiquement des données monolingues de la langue cible en données de la langue source afin de créer des données parallèles synthétiques pour l’entraînement. C’est actuellement la technique d’augmentation de données la plus couramment utilisée dans les tâches de traduction automatique. Il a été démontré que la qualité du système arrière, bien qu'efficace, affecte négativement les performances du modèle NMT final lorsque les données monolingues du côté cible sont limitées. La traduction inverse comme méthode d'augmentation des données dans la traduction automatique pourrait détériorer les performances de traduction Langue à faible ressources - Anglais (LRL - ENG) en raison de la taille limitée des données d'entraînement, comme le montrent Xia et al (2019).

Xia et al. (2019) augmentent les données parallèles par deux méthodes : la rétrotraduction de l'anglais vers la langue peu dotée (LRL) ou la langue bien dotée (HRL) et la conversion du jeu de données HRL-ENG en un pseudo jeu de données LRL-ENG. Ils utilisent un dictionnaire bilingue induit pour injecter des mots de la LRL dans la HRL, puis modifient davantage ces phrases à l'aide d'un cadre de traduction automatique non supervisée modifié. Leur méthode s'est avérée améliorer la qualité de traduction par rapport aux références de rétrotraduction supervisée, cependant, la méthode nécessite l'accès à une HRL qui est liée à la LRL ainsi qu'à une LRL monolingue.

Il existe d'autres méthodes d'augmentation de données qui ont été utilisées dans d'autres tâches de TAL telles que la classification de textes pour améliorer les performances. Wei & Zou (2019) montrent que le remplacement simple de mots en utilisant des bases de connaissances comme WordNet Miller (1995) peut améliorer les performances des tâches de classification. Marivate & Sefara (2020) observent également que l'augmentation basée sur Word2Vec est également une solution viable lorsque l'on n'a pas accès à une base de connaissances de synonymes telle que WordNet Miller (1995). Kumar et al. (2020) montrent que les modèles pré-entraînés seq2seq peuvent être utilisés efficacement pour l'augmentation de données et qu'ils offrent les meilleures performances. Ces méthodes d'augmentation des données ne sont actuellement utilisées que pour améliorer les tâches de classification et n'ont pas encore été utilisées dans aucune tâche de traduction automatique neuronale pour améliorer les performances. Dans ce travail, nous examinerons comment certaines de ces méthodes peuvent également être utilisées pour améliorer les modèles de traduction automatique neuronale où les données sont à faibles ressources. En particulier, nous explorerons trois méthodes d'augmentation de données qui comprennent: 1) Word2Vec based-augmentation, 2) Augmentation basée sur Tf-idf, 3) Augmentation basée sur le modèle de langage masqué et utilisation des données supplémentaires pour entraîner le modèle NMT.

## 3 Méthodologie

Notre objectif est de comparer différentes méthodes d'augmentation de données utilisées dans les tâches de classification de texte dans le but d'identifier si les méthodes peuvent être utilisées pour améliorer le score de base de la NMT. Les résultats sont comparés sur deux ensembles de données différents et utilisent des ensembles de test intra-domaines pour démontrer la capacité de généralisation des modèles. Ces expériences sont utiles pour aider d'autres chercheurs à acquérir des connaissances alors qu'ils travaillent à la construction de meilleurs modèles de traduction automatique neuronale pour les langues à faibles ressources. Tout d'abord, nous décrivons les données qui ont été utilisées pour entraîner les modèles, puis les méthodes d'augmentation de données que nous allons utiliser et enfin nous donnons les détails des expériences que nous avons réalisées pour tester ces méthodes ainsi que les résultats obtenus.

## 3.1 Données d'entraînement

De petites quantités de données parallèles sont disponibles pour le swahili-anglais. Les données ont été reçues du travail de Lakew et al (2020) où ils ont publié des données expérimentales standardisées et des ensembles de tests pour cinq langues différentes (swahili, amharique, tigirinya, oromo et somali). Ils ont collecté tous les corpus parallèles disponibles pour ces cinq langues à partir du corpus Opus Tiedemann (2012), qui consiste en une collection de textes traduits provenant du web. Pour ce travail, nous avons utilisé des données qui incluent JW300 Agić & Vulić (2019) et Tanzil Tiedemann (2012) qui fournit une collection de traductions du Coran à comparer avec les résultats de base du travail de Lakew et al. (2020).

Le tableau 1 montre la quantité de données parallèles qui a été collectée. Les données ont été divisées en ensembles d'entraînement, de développement et de test comme dans Lakew et al. (2020). Nous avons ensuite segmenté les données en unités de sous-mots en utilisant l'encodage par paires d'octets Sennrich et al. (2016) où nous avons appris 20K tokens d'encodage par paires d'octets.

## 3.2 Ligne de base

Dans cette approche, le modèle Transformer NMT est entraîné en utilisant les données Jw300 et Tanzil combinées puis testées sur différents ensembles de données de deux domaines différents (Jw300 et Tanzil). Le modèle est entraîné sans modifications tout au long du processus avec des étapes de prétraitement standard telles que la tokenisation, la transformation en minuscules et le nettoyage. Ce modèle dans cette approche sert de référence pour la comparaison.

## 3.3 Méthodes d'augmentation de données

Nous avons augmenté les données en utilisant trois types de méthodes d'augmentation: augmentation basée sur Word2Vec (remplacement de synonymes), augmentation basée sur Tf-idf (insertion aléatoire) et augmentation basée sur Masked Language Model (MLM) (augmentation basée sur le contexte). Nous avons combiné les deux premières méthodes d'augmentation et utilisé l'augmentation basée sur le modèle de langage masqué. Les augmentations Word2Vec et Tf-idf ont été effectuées sur la langue source de telle sorte que lors de l'entraînement d'un modèle En-Sw, nous augmentons la langue anglaise et lors de l'entraînement d'un modèle Sw-En, nous augmentons la langue swahili. Dans la modélisation de la langue masquée, l'augmentation n'a été faite que sur la langue anglaise.

## 3.3.1 Augmentation basée sur word2vec

Word2vec est une technique d'augmentation principalement utilisée dans les tâches de classification qui utilise un modèle de plongement lexical Mikolov et al. (2013) entraîné sur des jeux de données accessibles au public pour trouver les mots les plus similaires pour un mot d'entrée donné. Nous utilisons des vecteurs de mots pré-entraînés sur Common Crawl et Wikipedia sur des données en anglais et en swahili en utilisant fastText Joulin et al (2017), une bibliothèque pour la représentation et la classification de textes. Nous chargeons le modèle fastText pré-entraîné pour chaque langue dans notre algorithme pour augmenter les textes en sélectionnant aléatoirement un mot dans le texte afin de déterminer leurs mots similaires en utilisant la similarité cosinus comme poids relatif pour sélectionner un mot similaire qui remplace le mot d'entrée comme le fait Marivate & Sefara (2020). Notre algorithme est tel qu'illustré dans l'algorithme 1. Il reçoit une chaîne de caractères qui est les données d'entrée et augmente le texte en cinq textes augmentés différents puis nous utilisons la similarité cosinus pour sélectionner la meilleure phrase qui est au moins 0,85 proche du texte original. La raison en est que nous aimerions conserver le sens contextuel d'une phrase même après l'augmentation. Nous comparons les cinq différentes phrases augmentées et choisissons la phrase qui a le score de similarité cosinus le plus élevé. Pour éviter les augmentations dupliquées, nous laissons tomber les phrases qui sont 100% similaires à la phrase originale. Cette augmentation a été faite sur la langue source où les phrases de langue cible correspondantes sont restées constantes et inchangées. Des exemples des phrases augmentées peuvent être vus dans le Tableau 2.

## 3.3.2 Augmentation basée sur Tf-idf

Nous avons créé un autre ensemble de données augmentées qui utilise Tf-idf Ramos (2003). Le concept de Tf-idf est que les mots à haute fréquence peuvent ne pas être en mesure de fournir beaucoup de gain d'information dans le texte. Cela signifie que les mots rares contribuent plus de poids au modèle. Dans ce cas, les mots qui ont des scores Tf-idf faibles sont considérés comme non informatifs et peuvent donc être remplacés ou insérés dans le texte sans affecter les étiquettes de vérité terrain de la phrase. Ici, les mots choisis pour être insérés à une position aléatoire dans la phrase sont choisis en calculant les scores Tf-idf des mots sur toutes les phrases, puis en prenant les plus faibles. Nous insérons donc un nouveau mot à une position aléatoire selon le calcul Tf-idf. Cela a également été fait sur la langue source seulement et les phrases de langue cible correspondantes restent inchangées. Tf-idf a été appliqué après avoir effectué la méthode d'augmentation basée sur Word2Vec. Cela est illustré dans l'Algorithme 1.

p05-01.png

Tableau 1 : Statistiques des données montrant le nombre d'exemples/de phrases disponibles dans quatre domaines

p05-02.png

Tableau 2: Tableau montrant des exemples de phrases augmentées

## 3.3.3 Augmentation du modèle de langage masqué (MLM)

Étant donné que les méthodes ci-dessus ne tiennent pas compte du contexte de la phrase, nous avons décidé d'utiliser la modélisation de langage masqué (MLM) où nous avons utilisé RoBERTa Liu et al. (2019), un modèle transformeur qui est pré-entraîné sur un grand corpus de données en anglais de manière auto-supervisée. Il est utilisé pour prédire les mots masqués en fonction du contexte de la phrase. Vous pouvez trouver l'algorithme utilisé dans Algorithme 2. Prenant la phrase, le modèle masque aléatoirement 15 % des mots dans l'entrée, puis fait passer la phrase masquée entière à travers le modèle et prédit les mots masqués, ce qui aide le modèle à apprendre une représentation bidirectionnelle de la phrase. Dans ce travail, une phrase est passée à travers notre algorithme qui prédit ensuite le mot masqué créant une nouvelle phrase augmentée. Notez que cette méthode d'augmentation a été effectuée uniquement sur la langue anglaise en raison du manque de ressources suffisantes pour entraîner un bon MLM pour la langue swahili.

Algorithme 1 Augmentation basée sur Word2Vec et Tf-idf

p05-03.png

Algorithme 2 Algorithme d'augmentation de modèle de langage masqué

p06-01.png

Pour nos expériences, nous avons combiné les phrases augmentées pour l'augmentation basée sur Word2Vec et l'augmentation de données basée sur Tf-idf produisant presque le triple des phrases originales. Les méthodes d'augmentation basées sur le MLM ont produit presque le double des phrases parallèles originales. Les données d'entraînement totales utilisées sont présentées dans le Tableau 2.

p06-02.png

Tableau 3 : Statistiques des données montrant le total des données utilisées pour l'entraînement après augmentation

## 4 Expériences

Cette section explique en détail l'apprentissage et les paramètres de modèle qui ont été considérés pour chaque approche d'augmentation de données.

## 4.1 Paramètres du modèle

Tous les modèles ont été entraînés en utilisant l'architecture transformer de Vaswani et al. (2017) avec le kit de traduction automatique open-source joeyNMT par Kreutzer et al. (2019). Les paramètres du modèle ont été fixés à 512 unités cachées et dimension de plongement, 4 couches d'encodeur-décodeur auto-attentionnel avec 8 têtes. La dimension de plongement de l'encodage par paires d'octets a été fixée à 256. L'optimiseur d'Adam est utilisé dans toutes les expériences avec un taux d'apprentissage constant de 0,0003 et le taux d'abandon a été fixé à 0,3. Tous les modèles ont été entraînés sur 40 époques.

## 4.2 Métriques d'évaluation

Les modèles ont été évalués en utilisant des ensembles de test du domaine. La performance des différentes approches a été évaluée à l'aide de différentes métriques d'évaluation de la traduction : BLEU Papineni et al. (2002), METEOR Banerjee & Lavie (2005) et chrF Popović (2015). BLEU (Bilingual Evaluation Understudy) est une métrique d'évaluation automatique qui est censée avoir une forte corrélation avec les jugements humains et est largement utilisée comme métrique d'évaluation préférée. METEOR (Metric for Evaluation of Translation with Explicit Ordering) est basé sur un concept généralisé de correspondance d'unigrammes entre les traductions automatiques et les traductions de référence produites par l'homme, contrairement à BLEU, et est calculé en obtenant la moyenne harmonique de la précision et du rappel. ChrF est une métrique de n-gramme de caractère, qui a montré de très bonnes corrélations avec les jugements humains, en particulier lors de la traduction vers des langues morphologiquement riches. Plus le score de ces métriques est élevé, cela signifie que le système produit de très bonnes traductions.

## 5 Résultats et discussion

Cette section décrit les résultats des trois méthodes ; la méthode de référence (S-NMT), l'augmentation basée sur word2vec + tfidf (Word2Vec) et l'augmentation par modèle de langage masqué (MLM). Le tableau 4 montre la performance des différentes méthodes d'augmentation de données appliquées dans la traduction automatique. Les scores BLEU pour les résultats les plus performants spécifiques au domaine EN ↔ SW sont mis en évidence pour chaque direction, les scores en gras affichant les meilleurs scores globaux. Nous observons que dans tous les domaines de test, les modèles entraînés avec les données augmentées par MLM ont obtenu de meilleurs résultats que les modèles de référence et Word2Vec dans la plupart des cas. Ces résultats sont fortement liés au fait que les augmentations basées sur MLM reposent sur des embeddings contextuels. La baisse des performances dans certains cas peut être due au fait que la structure de la phrase n'est pas nécessairement conservée lors du remplacement de mots ou de synonymes, ce qui fait que la traduction ne conserve pas sa signification originale. On peut également observer qu'il y a une dégradation des performances lors de la traduction dans la langue à faible ressource pour les données de test JW300, mais pour les modèles testés sur Tanzil, la dégradation se produit principalement lors de la traduction en anglais. Les données d'entraînement de Tanzil utilisées pour entraîner le modèle étaient assez faibles par rapport aux données JW300, ce qui explique les faibles scores de Tanzil par rapport aux données JW300. Les augmentations basées sur Word2Vec + Tf-idf ne conduisent pas à des améliorations significatives du modèle de base, cependant, les résultats montrent qu'il y a un potentiel dans l'utilisation de ces méthodes dans la NMT, en particulier le modèle de langage masqué pour l'augmentation qui s'est avéré plus performant que le modèle Word2Vec + Tf-idf

## 6 Limitations et travaux futurs

L'un des plus grands défis de la traduction automatique aujourd'hui est d'apprendre à traduire des paires de langues à faibles ressources avec des défis techniques tels que l'apprentissage avec des données limitées ou le traitement de langues éloignées les unes des autres.

Cet article montre que nous pourrions potentiellement utiliser des méthodes simples d'augmentation des données dans la traduction automatique. Dans nos expériences, nous n'augmentons que la langue source pour la méthode d'augmentation basée sur Word2Vec et n'augmentons que les phrases en anglais pour les augmentations basées sur MLM. Dans les travaux futurs, nous prévoyons d'explorer l'augmentation du côté cible des données parallèles dans l'augmentation basée sur Word2Vec et de comparer les performances à l'augmentation de la langue source, ainsi que de tester la capacité du modèle à généraliser en utilisant des jeux de données hors domaine. Une autre expérience qui pourrait être explorée est l'utilisation de la méthode d'augmentation de données Word2Vec uniquement sans l'utilisation de la méthode de remplacement de mots Tf-idf car elle ajoute plus de bruit aux phrases. Nous prévoyons de poursuivre cette recherche et mettrons à disposition les algorithmes utilisés dans cet article à l'adresse https://github.com/dsfsi/translate-augmentationhttps://github.com/dsfsi/translate-augmentation

## 6.0.1 Considérations computationnelles

L'entraînement a pris environ 1 heure pour une époque en utilisant un GPU NVIDIA Tesla V100 sur Google Cloud sur les textes augmentés. Courir sur Collaboratory a pris environ 5 jours pour courir 40 époques et avec un temps limité entre nos mains, il n’y a pas grand-chose que nous puissions expérimenter. L'exécution de ces expériences était assez coûteuse et il faut tenir compte des budgets ainsi que du temps afin de mener ces expériences de MT.

## 7 Conclusion

Dans ce travail, nous avons proposé l'utilisation de différentes tâches d'augmentation de données textuelles dans la traduction automatique neuronale en utilisant la langue à faible ressource Swahili. Nous avons également montré comment on peut effectuer une augmentation de données sur la langue à faible ressource en utilisant des vecteurs de mots pré-entraînés et avons présenté des résultats de référence en ChrF et METEOR qui n'ont jamais été présentés auparavant. Notre enquête montre que bien que les modèles entraînés sur les textes augmentés n'aient pas amélioré le modèle de base, il existe encore un potentiel d'utilisation de ces méthodes dans les tâches de NMT avec suffisamment de calcul et plus d'expériences. Nous espérons que ce travail préparera le terrain pour d'autres recherches sur l'application de méthodes d'augmentation simples qui ne nécessitent pas beaucoup de puissance de calcul dans la modélisation NMT à faible ressources.

p08-01.png

Tableau 4 : Scores BLEU, ChrF, Meteor pour les directions Swahili ↔ Anglais, les meilleurs résultats spécifiques au domaine sont en gras.

## 8 Références bibliographiques

## Références

Agić, Ž. & Vulić, I. (2019), JW300: A wide-coverage parallel corpus for low-resource languages, in 'Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics', Association for Computational Linguistics. URL: https://www.aclweb.org/anthology/P19-1310

Banerjee, S. & Lavie, A. (2005), METEOR: An automatic metric for MT evaluation with improved correlation with human judgments, in 'Proceedings of the ACL Workshop on Intrinsic and Extrinsic Evaluation Measures for Machine Translation and/or Summarization', Association for Computational Linguistics, Ann Arbor, Michigan, pp. 65-72. URL: https://www.aclweb.org/anthology/W05-0909

Cho, K., van Merriënboer, B., Bahdanau, D. & Bengio, Y. (2014), On the properties of neural machine translation: Encoder-decoder approaches, in 'Proceedings of SSST-8, Eighth Workshop on Syntax, Semantics and Structure in Statistical Translation', Association for Computational Linguistics, Doha, Qatar, pp. 103-111. URL: https://aclanthology.org/W14-4012

Joulin, A., Grave, E., Bojanowski, P. & Mikolov, T. (2017), Bag of tricks for efficient text classification, in 'Proceedings of the 15th Conference of the European Chapter of the Association for Computational Linguistics: Volume 2, Short Papers', Association for Computational Linguistics, Valencia, Spain, pp. 427-431. URL: https://aclanthology.org/E17-2068

Kreutzer, J., Bastings, J. & Riezler, S. (2019), Joey NMT: A minimalist NMT toolkit for novices, in 'Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP): System Demonstrations'. URL: https://www.aclweb.org/anthology/D19-3019

Kumar, V., Choudhary, A. & Cho, E. (2020), Data augmentation using pre-trained transformer models, in 'Proceedings of the 2nd Workshop on Life-long Learning for Spoken Language Systems', Association for Computational Linguistics.

Lakew, S. M., Negri, M. & Turchi, M. (2020), 'Low Resource Neural Machine Translation: A Benchmark for Five African Languages', arXiv e-prints p. arXiv:2003.14402.

Lin, Y.-H., Chen, C.-Y., Lee, J., Li, Z., Zhang, Y., Xia, M., Rijhwani, S., He, J., Zhang, Z., Ma, X., Anastasopoulos, A., Littell, P. & Neubig, G. (2019), Choosing transfer languages for crosslingual learning, in 'Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics', Association for Computational Linguistics.

Lisanza, V. (2021), Swahili gaining popularity globally. Accessed: 2020-30.

Liu, Y., Ott, M., Goyal, N., Du, J., Joshi, M., Chen, D., Levy, O., Lewis, M., Zettlemoyer, L. & Stoyanov, V. (2019), 'RoBERTa: A Robustly Optimized BERT Pretraining Approach', arXiv e-prints p. arXiv:1907.11692.

Marivate, V. & Sefara, T. (2020), 'Improving short text classification through global augmentation methods', Machine Learning and Knowledge Extraction. URL: http://dx.doi.org/10.1007/978-3-030-57321-821

Mikolov, T., Sutskever, I., Chen, K., Corrado, G. S. & Dean, J. (2013), Distributed representations of words and phrases and their compositionality, in C. J. C. Burges, L. Bottou, M. Welling, Z. Ghahramani & K. Q. Weinberger, eds, 'Advances in Neural Information Processing Systems', Vol. 26, Curran Associates, Inc.

Miller, G. A. (1995), 'Wordnet: A lexical database for english', COMMUNICATIONS OF THE ACM 38, 39-41.

Papineni, K., Roukos, S., Ward, T. & Zhu, W.-J. (2002), Bleu: a method for automatic evaluation of machine translation, in 'Proceedings of the 40th Annual Meeting of the Association for Computational Linguistics', Philadelphia, Pennsylvania, USA. URL: https://www.aclweb.org/anthology/P02-1040

Popović, M. (2015), chrF: character n-gram F-score for automatic MT evaluation, in 'Proceedings of the Tenth Workshop on Statistical Machine Translation', Lisbon, Portugal. URL: https://www.aclweb.org/anthology/W15-3049

Ramos, J. (2003), Using tf-idf to determine word relevance in document queries.

Sennrich, R., Haddow, B. & Birch, A. (2016), Neural machine translation of rare words with sub-word units, in 'Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)'. URL: https://www.aclweb.org/anthology/P16-1162

Sutskever, I., Vinyals, O. & Le, Q. V. (2014), 'Sequence to sequence learning with neural networks', CoRR abs/1409.3215. URL: http://arxiv.org/abs/1409.3215

Tiedemann, J. (2012), Parallel data, tools and interfaces in OPUS, in 'Proceedings of the Eighth International Conference on Language Resources and Evaluation (LREC'12)', European Language Resources Association (ELRA). URL: http://www.lrec-conf.org/proceedings/lrec2012/pdf/463Paper.pdf

Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L. & Polosukhin, I. (2017), 'Attention Is All You Need', arXiv e-prints p. arXiv:1706.03762.

W3Techs (2020), W3Techs. Usage of content languages for websites. Accessed: 2020-30.

Wei, J. & Zou, K. (2019), EDA: Easy data augmentation techniques for boosting performance on text classification tasks, in 'Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)', Association for Computational Linguistics, Hong Kong, China, pp. 6382-6388. URL: https://www.aclweb.org/anthology/D19-1670

Xia, M., Kong, X., Anastasopoulos, A. & Neubig, G. (2019), Generalized data augmentation for low-resource translation, in 'Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics', Association for Computational Linguistics, Florence, Italy, pp. 5786-5796. URL: https://www.aclweb.org/anthology/P19-1579

Zoph, B., Yuret, D., May, J. & Knight, K. (2016), Transfer learning for low-resource neural machine translation, in 'Proceedings of the 2016 Conference on Empirical Methods in Natural Language Processing', Association for Computational Linguistics, Austin, Texas, pp. 1568-1575. URL: https://www.aclweb.org/anthology/D16-1163
