> Machine translation (fr) of "Investigating Sentiment-Bearing Words- and Emoji-based Distant Supervision Approaches for Sentiment Analysis" by Koena Ronny Mabokela, Mpho Raborife, Turgay Celik, https://aclanthology.org/2023.rail-1.13/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Étude des approches de supervision à distance basées sur des mots et des emojis pour l'analyse des sentiments

Koena Ronny Mabokela, Mpho Raborife, Turgay Celik

**Affiliations**  
Koena Ronny Mabokela1,3  
Mpho Raborife2  
Turgay Celik3  
1University of Johannesburg, Applied Information Systems  
2University of Johannesburg, Institute for Intelligent Systems  
3University of the Witwatersrand, School of Electrical and Information Engineering  
{}

## Résumé

L'analyse des sentiments se concentre sur la détection et la classification automatiques des opinions exprimées dans les textes. Les emojis peuvent être utilisés pour déterminer les polarités de sentiment des textes (c'est-à-dire positives, négatives ou neutres). Plusieurs études ont démontré comment l'analyse des sentiments est précise lorsque les emojis sont utilisés (Kaity et Balakrishnan, 2020). Alors qu'ils ont utilisé les emojis comme caractéristiques pour améliorer les performances des systèmes d'analyse de sentiment, dans cet article, nous analysons l'utilisation des emojis pour réduire l'effort manuel dans l'étiquetage du texte pour l'entraînement de ces systèmes. De plus, nous étudions la réduction de l'effort manuel dans le processus d'étiquetage des sentiments à l'aide de mots porteurs de sentiments ainsi que de la combinaison de mots porteurs de sentiments et d'emojis. En plus de l'anglais, nous avons évalué les approches avec les langues africaines à ressources limitées Sepedi, Setswana et Sesotho. La combinaison des emojis et des mots dans le lexique des sentiments montre de meilleures performances par rapport aux lexiques basés uniquement sur les emojis et les lexiques basés sur les mots. Nos résultats montrent que notre approche de lexique du sentiment emoji est efficace, avec une précision de 75% de plus que les autres approches de lexique du sentiment, qui ont une précision moyenne de 69,1%. De plus, notre méthode de supervision à distance a obtenu une précision de 77,0 %. Nous anticipons que seulement 23 % des tweets devront être modifiés en conséquence de nos stratégies d'annotation.

## 1 Introduction

La population sud-africaine est largement diversifiée et très multilingue (c'est-à-dire origines, cultures, langues et religions) avec des groupes linguistiques distincts incluant l'anglais et l'afrikaans (Statista, 2022). Le groupe Nguni est le plus grand groupe qui comprend Seswati, isiNdebele, isiXhosa, et isiZulu. Dans ce cas, notre étude se concentre sur le deuxième plus grand groupe, le groupe Sotho-Tswana comprenant le Sepedi (Sotho du Nord) (Mabokela et Manamela, 2013), le Sesotho (Sotho du Sud) et le Setswana (Statista, 2022).

L'analyse des sentiments est une branche du traitement automatique du langage naturel (TALN) qui étudie l'émotion (opinions ou attitudes) d'un texte. Ce domaine a reçu beaucoup d'attention, ce qui a conduit à de nombreuses technologies TAL réussies dans divers domaines (Aguero-Torales et al., 2021 ; Mabokela et al., 2022a). Par exemple, son application populaire a été dans la surveillance des médias sociaux, la gestion du support, les retours clients (Wankhade et al., 2022) et l'IA pour le bien social (Mabokela et Schlippe, 2022a).

Les emojis utilisés aux côtés des messages texte sur les médias sociaux sont devenus de plus en plus populaires (Jindal et Aron, 2021; Grover, 2021). Ces dernières années, davantage de travaux ont été réalisés sur l'analyse de sentiment avec l'utilisation d'emojis ou d'emoticônes (Grover, 2021; Hakami et al., 2021; Haak, 2021). Les emojis sont récemment devenus une alternative aux emoticônes, mais ils diffèrent des emoticônes en ce que ces dernières sont des représentations faciales typographiques (Gavilanes et al., 2018). Les emojis sont utilisés pour exprimer des sentiments, des humeurs et des émotions dans un message écrit avec des éléments non verbaux (Kralj Novak et al., 2015; Gavilanes et al., 2018).

L’utilisation d’emojis comme une collection standardisée de minuscules pictogrammes visuels dépeint tout, des sourires heureux aux drapeaux du monde entier (Grover, 2021; Gavilanes et al., 2018). Les emojis modernes remontent aux salons de discussion des années 1990. Ils étaient utilisés dans les conversations pour signaler un sourire, une colère ou pour dépeindre une blague ou une déclaration sarcastique (kwan Yoo et Rayz, 2021). Selon Emoji Statistics, il y avait 3 633 emojis au total dans le standard Unicode en septembre 2021. Cela signifie que le lexique de sentiments doit être enrichi avec de nouveaux émojis fréquemment présents sur les médias sociaux (Kralj Novak et al., 2015). Il est donc nécessaire d'étendre les lexiques d'emojis existants pour le marquage du sentiment.

De nombreux systèmes de traitement automatique du langage naturel nécessitent un ensemble de données étiquetées pour que les algorithmes d'apprentissage automatique produisent de bons résultats. À cette fin, une méthode d'annotation qui ne nécessite pas beaucoup de main-d'œuvre et de temps est nécessaire. Les emojis ont reçu beaucoup d’attention en raison de leur utilisation généralisée et de leur popularité dans le traitement du langage naturel (NLP) (Kejriwal et al., 2021). Les lexiques de sentiment par emojis pour d'autres langues ont été explorés comme une méthode alternative qui a alors donné lieu à une amélioration significative de la classification de sentiment (Gavilanes et al., 2018; Haak, 2021; Kralj Novak et al., 2015). Cependant, l’annotation des sentiments et l’étude des sentiments via les emojis ont reçu peu d’attention pour les langues à faibles ressources (Hakami et al., 2021).

Plusieurs lexiques de sentiments d'emojis ont été produits par construction manuelle impliquant des annotateurs humains, automatiquement et de manière semi-automatique avec peu d'intervention humaine (Grover, 2021). À notre connaissance, il n’existe aucun travail publié sur l’analyse du sentiment des emojis dans les langues bantoues. De plus, étant donné que les emojis sont perçus comme une partie importante des communications sur les médias sociaux, leur intégration est susceptible de donner une classification des sentiments de meilleure qualité (Kejriwal et al., 2021).

Fait intéressant, les emojis ont été en mesure de fournir plus d’informations pour un sentiment précis des textes (Ayvaz et Shiha, 2017). Les travaux connexes ont montré que les emojis aident à détecter et à déterminer l'étiquette de sentiment des tweets (Go et al., 2009; Wang et Castanon, 2015; Ayvaz et Shiha, 2017; Singh et al., 2019). Pour cette raison, il est intéressant que nous adoptions une approche automatique qui utilise des informations emoji pour réduire l’effort manuel.

L'objectif principal est d'étudier l'impact des emojis dans le contexte de l'analyse des sentiments. Cela comprend deux tâches : (i) l'utilisation des emojis pour réduire l'effort manuel de création de données d'entraînement pour les systèmes d'analyse de sentiments et (ii) l'impact des emojis sur l'exactitude finale des systèmes d'analyse de sentiments. Pour le pré-étiquetage, nous étudions même une nouvelle approche de supervision à distance pour utiliser les tweets basés sur les emojis afin de construire un lexique de sentiments à partir de zéro, complètement indépendant de la langue. Nous évaluons et comparons nos stratégies de pré-étiquetage avec les lexiques du sentiment emoji fréquemment utilisés fournis par (Kralj Novak et al., 2015; Haak, 2021; Hakami et al., 2021). Nous contribuons ce qui suit grâce à notre étude :

Nous avons collecté un nouveau corpus d'analyse de sentiments pour le sesotho (c'est-à-dire 6 314 tweets et 3 168 tweets sotho-anglais) et l'avons ajouté au corpus SAfriSenti.

Nous étudions l'utilisation des lexiques de sentiment emoji dans les stratégies d'étiquetage de sentiment pour réduire l'effort d'annotation manuelle.

Nous nous appuyons sur les lexiques de sentiment d'emoji existants (Kralj Novak et al., 2015; Hakami et al., 2021; Haak, 2021) pour générer un lexique de sentiment adapté à nos langues cibles et fournir une solution pour les emojis plus récents qui ne figurent pas encore dans le lexique de sentiment d'emoji.

Pour couvrir les tweets sans émojis, nous exploitons les lexiques de sentiments de manière interlingue.

Puisque des morphèmes spécifiques indiquent une tonalité affective dans nos langues cibles, nous avons également construit et analysé des étiqueteurs de sentiment spécifiques à la langue basés sur les morphèmes.

La structure du présent document est la suivante : Les travaux connexes seront examinés dans la section 2. Dans la section 3, nous décrirons notre corpus de sentiments SAfriSenti et nos stratégies de collecte de données, ainsi que l'assurance qualité. Dans la section 4, nous décrivons les différentes stratégies d'annotation du sentiment. Dans la Section 5, nous présenterons les expériences et l'évaluation. La section 6 présente la conclusion et les travaux futurs.

## 2 Études connexes

Des efforts récents ont été faits pour aborder les défis de l'analyse de sentiment pour les langues sous-dotées en ressources (Mabokela et al., 2022a ; Abdullah et Rusli, 2021). Par exemple, un petit nombre de langues africaines, y compris quelques langues nigérianes (c.-à-d. NaijaSenti Corpus) (Muhammad et al., 2022; Alabi et al., 2022) Swahili (Martin et al., 2021), dialectes tunisiens (Medhaffar et al., 2017) et Bambara (Diallo et al., 2021) ont été étudiés pour l’analyse des sentiments. Récemment, le corpus SAfriSenti (Mabokela et Schlippe, 2022b ; Mabokela et al., 2022b) a été créé — il s'agit d'un corpus de sentiments multilingue pour les langues sous-dotées d'Afrique du Sud. Le corpus SAfriSenti est le plus grand corpus de sentiment Twitter à ce jour, avec pour objectif de relever les défis de 11 langues sud-africaines.

De nombreuses applications TAL actuelles sont employées pour les données des médias sociaux, qui reposent uniquement sur le jeu de données étiqueté, de préférence par annotation manuelle (Chakravarthi et al., 2022). Cependant, aucun travail n'a été fait pour ces langues à faibles ressources dans l'aspect de l'utilisation d'émoticônes ou d'emojis pour l'étiquetage des sentiments. De plus, des langues riches en ressources comme l’anglais, l’espagnol et l’arabe ont exploré l’analyse des sentiments basée sur les emoji ou les émoticônes avec des progrès prometteurs (Gavilanes et al., 2018; Hakami et al., 2021).

De nombreuses études ont étudié les emojis et les lexiques de sentiments basés sur des mots pour l’analyse des sentiments (Cortis et Davis, 2020; Grover, 2021). De plus, certains chercheurs ont utilisé des emojis porteurs de sentiments pour collecter des tweets sur Twitter (Go et al., 2009; Pak et Paroubek, 2010). Cependant, les emojis pour l’analyse des sentiments des langues à faibles ressources ont reçu peu d’attention de la recherche (kwan Yoo et Rayz, 2021) et une combinaison d’emojis avec le lexique des sentiments pour l’étiquetage des sentiments est encore un domaine d’investigation. De plus, seules quelques études ont exploré les lexiques de sentiments d'emoji pour l'analyse de sentiments multilingue (Kralj Novak et al., 2015 ; Gavilanes et al., 2018). Une étude précédente de (Kralj Novak et al., 2015) a créé des lexiques du sentiment en impliquant 83 annotateurs pour évaluer chacun des 840 emoji comme positif, neutre et négatif.

De même, (Wang et Castanon, 2015) ont analysé davantage l'impact des émoticônes dans la construction de lexiques de sentiments et également dans l'entraînement du classificateur de sentiments. Bien qu'il ait été observé que la performance du modèle de sentiment a augmenté de 15%, les résultats appuient leur affirmation selon laquelle un petit nombre d'émoticônes sont des indicateurs puissants et précis de la polarité du sentiment. Mais selon (Guibon et al., 2016), l’utilisation des emojis peut être étendue à de nombreuses voies supplémentaires telles que l’amélioration du sentiment et la modification du sentiment et ne se limite pas à l’expression du sentiment. De même, (Ayvaz et Shiha, 2017) ont exploré l’impact des emojis dans l’analyse des sentiments, mais ne se sont concentrés que sur la polarité des sentiments positifs et négatifs pour la langue anglaise. (Kimura et Katsurai, 2017) ont enquêté sur une construction automatique d’un lexique du sentiment emoji. Cette technique prend les mots de sentiment de WordNet-Affect et détermine à quelle fréquence ils se produisent aux côtés de chaque emoji.

Par conséquent, (Gavilanes et al., 2018) ont créé un lexique de sentiments d'emoji en utilisant une méthode non supervisée basée sur les descriptions des emojis. Sur la base des analyses du sentiment de textes informels en anglais et en espagnol, ils ont créé automatiquement des lexiques de sentiment avec 840 emojis en utilisant l'approche USSPAD (unsupervised system with sentiment propagation across dependencies).

Récemment, (Haak, 2021) a démontré une technique qui identifie avec précision et rapidité les émotions transmises par les emojis sans annotation manuelle. Cependant, une étude de (kwan Yoo et Rayz, 2021) a examiné comment les emojis sont utilisés dans les tweets et comment ils peuvent affecter le ton et le sentiment d'une phrase dans les tweets et a amélioré la précision de l'analyse des sentiments en utilisant des techniques d'apprentissage automatique. (Hakami et al., 2021) ont examiné la cohérence de l'analyse des sentiments contextuels des emojis dans les langues arabes et européennes. Ils ont créé le lexique du sentiment emoji arabe, puis comparé le sentiment exprimé dans chacune des deux familles linguistiques et cultures.

Certaines études ont tenté d'apprendre des embeddings d'emojis pour compléter les embeddings de mots textuels dans des tâches de classification de sentiment (Grover, 2021). Tout d'abord, (Eisner et al., 2016) ont employé une stratégie d'embedding d'emojis pré-entraînés en utilisant des descriptions d'emojis Unicode positives et négatives, sélectionnées aléatoirement. (Chen et al., 2018) ont appris des embeddings d'emojis bi-sens et entraîné un LSTM basé sur l'attention pour la classification de sentiment. En considérant uniquement les descriptions positives et négatives pour chaque emoji Unicode, le réglage fin des embeddings d'emojis peut être accéléré. Cependant, (Singh et al., 2019) ont proposé une méthode simple pour traiter les emojis en remplaçant les emojis par leurs descriptions dans les tweets et en utilisant une stratégie d'embedding de mots pré-entraînés similaire à celle des mots standards. De plus, (Liu et al., 2021) ont examiné et évalué l'impact de l'ajout d'emojis comme caractéristiques supplémentaires pour améliorer les performances de l'analyse de sentiment. Ils ont développé un modèle de plongement d'emojis amélioré basé sur Bi-LSTM, qui a à son tour atteint la meilleure exactitude d'analyse de sentiments sur des textes chinois en ligne.

Notre étude est similaire à (Gavilanes et al., 2018) et (Hakami et al., 2021) dans le sens où elles ont utilisé des lexiques de sentiments d'emojis pour effectuer une analyse de sentiments sur des tweets contenant des emojis. Dans cette recherche, nous adoptons leur approche, mais nous fournissons quelques étapes supplémentaires pour construire notre lexique du sentiment emoji. En comparant les études susmentionnées à notre étude, nous avons utilisé les lexiques de sentiment emoji existants (Kralj Novak et al., 2015; Haak, 2021) pour construire le lexique de sentiment emoji initial. En termes simples, nous traduisons les emojis trouvés dans les tweets dans leurs descriptions textuelles et tirons parti des lexiques de sentiments emoji existants pour créer une nouvelle méthode d'annotation efficace des sentiments des tweets.

## 3 Langues et ensembles de données

Cette section comprend des statistiques concernant notre corpus SAfriSenti, de la collecte initiale des données brutes aux tweets finaux en utilisant l'API Twitter pour la recherche académique. Le corpus SAfriSenti (Mabokela et al., 2022b; Mabokela et Schlippe, 2022b) a été annoté manuellement par 3 locuteurs natifs par langue cible en suivant des directives d'annotation strictes. Les annotateurs ont étiqueté les tweets en 3 classes : positives, négatives et neutres. Le corpus contient plus de 50 000 tweets. Environ 4% des tweets ont été supprimés pour diverses bonnes raisons, tandis que 2% ont été conservés après examen. Les tweets positifs dominent les tweets négatifs dans les tweets monolingues en Sepedi, Setswana et Sesotho par une marge plus élevée. De plus, nous avons évalué notre corpus de sentiments annoté en utilisant la métrique d'accord inter-annotation (c'est-à-dire la valeur moyenne de Krippendorff α=0.7695) qui est considérée comme acceptable.

Avec un total d'environ 36% de tweets alternant entre le Sepedi et l'anglais et 6% entre le Setswana et l'anglais, le code-switching entre les langues maternelles et l'anglais est fréquent.

Le tableau 2 montre un extrait de l'ensemble de données avec des exemples de tweets en Sepedi, Setswana, Sesotho et en anglais avec des emojis. Nous fournissons également un exemple de tweets en Sepedi et anglais avec alternance de code et leurs sentiments associés. La figure 1 montre des exemples de tweets avec emojis.

p04-patch01.png

Figure 1: Exemples de tweets avec des emojis

Le tableau 2 présente un résumé de la distribution des tweets de ce sous-ensemble annoté qui sont monolingues et à code commuté. Le total des tweets monolingues couvre 64,4 % (32 261) et 35,6 % (18 223) des tweets en commutation de code. Comme le montre le tableau 2, notre corpus comprend un grand nombre de tweets à code commuté pour Sepedi-anglais, Setswana-anglais et Sesotho-anglais. Le code-switching est fréquent entre l'anglais et les langues bantoues d'Afrique du Sud. 23,6 % de ces tweets contiennent des alternances codiques de Sepedi et d'Anglais. 5,7% de ces tweets contiennent des changements de code entre le Setswana et l’anglais. 6,3% de ces tweets contiennent des changements de code entre le sesotho et l’anglais. Sepedi, Setswana et Sesotho partagent quelques mots communs puisque les langues sont étroitement liées. Dans notre cas, un tweet est considéré comme un tweet à alternance codique s'il contient plus de 3 mots anglais dans les tweets en Sepedi, Setswana et Sesotho.

p04-01.png

Tableau 1 : Résumé statistique des tweets monolingues pour les langues Sepedi, Setswana, Sesotho et Anglais.

p04-02.png

Tableau 2 : Résumé statistique des tweets à code commuté pour les langues Sepedi-anglais (Pedi-Eng), Setswana-anglais (Tswa-Eng) et Sesotho-anglais (Sotho-Eng).

## 4 Méthodologie

Dans cette section, nous présenterons les différentes stratégies d'annotation des sentiments que nous utiliserons pour cette étude. Pour cela, nous décrivons comment nous employons nos lexiques de sentiment et nos étiqueteurs morphologiques de sentiment pour les langues cibles, puis nous expliquons également comment nous générons nos nouveaux lexiques de sentiment par emojis à partir du corpus SAfriSenti.

## 4.1 Lexique de sentiment basé sur les mots

De nombreux lexiques de sentiments ont été produits de diverses manières, y compris la création manuelle — qui est considérée comme un processus long et coûteux —, et les créations automatique et semi-automatique. Les lexiques de sentiment sont typiquement des listes de mots avec des valeurs qui leur sont assignées et qui indiquent le sentiment du mot. Typiquement, ce sont des valeurs entières qui expriment la polarité et l'intensité de la polarité comme des valeurs absolues croissantes ou décroissantes. Par exemple, les valeurs vont généralement de -5: (très négatif) à -1: (faiblement négatif) et de +5: (très positif) à +1: (faiblement positif). Les lexiques de sentiment ont été utilisés dans de nombreux systèmes de sentiment pour aider à déterminer l'orientation sémantique des textes (Nielsen, 2011 ; Hutto et Gilbert, 2015).

Ces lexiques de sentiments ont démontré qu'il est possible de combiner les valeurs de polarité d'une phrase et de calculer le sentiment sur une échelle continue (Kaity et Balakrishnan, 2020). Pour générer le lexique des mots, les entrées sont choisies comme une unité pour associer les mots d'opinion plus précisément. Nous avons utilisé une approche interlingue en traduisant les lexiques de sentiment anglais existants tels que NRC (Mohammad and Turney, 2013), VADER (Hutto and Gilbert, 2015) et AFFIN (Nielsen, 2011) vers le sepedi, le setswana et le sesotho. Nos lexiques de sentiment pour ces langues ciblées ont été construits et vérifiés par des experts en langues. Nous avons gardé le lexique anglais car nos tweets contiennent des mots anglais. De plus, certains des mots porteurs de sentiment ont été étiquetés par les annotateurs lors du processus d'annotation du sentiment. Le tableau 3 montre la distribution de nos lexiques de sentiments avec des mots marqués de scores de polarité de sentiment. Le nombre total de mots dans le lexique des sentiments est de 17 715.

p05-01.png

Tableau 3 : Distribution des mots traduits dans le lexique de sentiment pour le Sepedi, le Setswana et le Sesotho.

De plus, nous avons utilisé des étiqueteurs de sentiment morphologiques pour étiqueter les tweets positifs et négatifs en utilisant des morphèmes avec des modes négatifs ou positifs. Ceci est ajouté à notre lexique de sentiment. Par exemple, le mot rata, qui signifie /aimer ou apprécier/, se termine souvent par /-a/ mais la terminaison /-e/ peut signifier une négation lorsqu'elle est utilisée avec les morphèmes négatifs comme /ga se/ et /rate/ qui signifie /ga se rate/. Cependant, la terminaison verbale avec une voyelle /-e/ peut être la dernière composante des formes du temps passé ainsi que l'un des marqueurs d'un mode négatif (Prinsloo, 2020). Dans les cas où les tweets contiennent /ha se/ (par exemple, bona ha se wena fela motho waka /tu n'es pas ma seule personne/) du sesotho (c'est-à-dire le sotho du sud) plutôt que /ga se/, nos étiqueteurs de sentiment ont présenté des limitations. Nous avons amélioré cela en incorporant des règles grammaticales supplémentaires pour compenser ce scénario de groupe linguistique Sotho-Tswana.

## 4.2 Lexiques du sentiment emoji

La figure 2 montre la méthode d'obtention des emojis à partir des tweets. Pour créer les lexiques du sentiment emoji, nous tirons parti des informations du lexique du sentiment emoji existant créé par (Kralj Novak et al., 2015), (Hakami et al., 2021) et (Haak, 2021). À ce stade, notre approche d'emoji exécute des algorithmes sur les tweets, les emojis et la description pour déterminer automatiquement si un emoji exprime un sentiment positif, négatif ou neutre. Pour extraire les tweets contenant des emojis du corpus SAfriSenti, nous avons sélectionné uniquement un sous-ensemble de tweets avec des emojis en recherchant tous les tweets avec des emojis. Pour créer notre lexique de sentiments emoji non étiquetés, nous suivons les étapes résumées ci-dessous:

Nous extrayons automatiquement les caractères emoji du corpus SAfriSenti à l'aide d'expressions régulières, puis convertissons les emojis en une représentation Unicode. Un Unicode est un schéma d'encodage de chaîne qui traduit des caractères en octets.

Nous créons une liste d'emojis uniques pour éviter la répétition dans les lexiques du sentiment emoji. Cela signifie qu'un emoji qui se répète n'apparaît qu'une seule fois dans le lexique.

Ensuite, nous récupérons les descriptions des emojis à partir de la traduction des emojis Python et de la plateforme Emojipedia - un dictionnaire d'emojis en anglais avec des images d'emojis provenant de différentes plateformes. Cela se fait en recherchant le Unicode correspondant pour faire correspondre sa description.

Pour prédire si un emoji exprime un sentiment positif, négatif ou neutre, nous suivons l'approche de (Gavilanes et al., 2018) et effectuons également une recherche dans le lexique de sentiment des emojis existant et utilisons les lexiques de sentiment des mots pour rechercher les polarités des mots à partir de leur description sans intervention humaine.

p06-01.png

Figure 2 : Un processus pour obtenir des emojis et leur description

En outre, nous employons des lexiques de sentiment emoji qui ont été obtenus comme suit:

Les premières méthodes sont décrites dans (Kralj Novak et al., 2015; Hakami et al., 2021). Ce lexique de sentiments d'emoji a été obtenu à partir de 4% des 1,6 million de tweets qui ont été annotés (c'est-à-dire négatifs, neutres, positifs) par 83 annotateurs natifs différents pour 13 langues européennes. Il contient 751 emojis les plus fréquemment utilisés sur Twitter. Les lexiques de sentiments emoji ont été proposés comme des ressources indépendantes de la langue de type *emoji sentiment rank* pour l'analyse de sentiments automatique.

La deuxième méthode se trouve dans (Haak, 2021). Cette méthode repose sur les intentions d'utilisation des emojis pour exprimer le sentiment, ainsi que sur les méthodes utilisées dans (Kralj Novak et al., 2015). Les emojis sont dérivés statistiquement par des occurrences dans des textes porteurs de sentiments. Dans ce cas, le sentiment des emojis est dérivé des textes les contenant et les sentiments sont déterminés en utilisant le lexique VADER en anglais.

## 4.3 Supervision à distance

En plus de notre investigation, nous avons examiné un processus simple et peu coûteux de développement d'un lexique d'emojis et de sentiments indépendant de la langue. Comme l’illustrent les Figures 3, 4, 5 et 6, nous proposons l’algorithme suivant pour l’étiquetage des sentiments qui exploite les informations du classement des sentiments emoji avec des emojis et des mots porteurs de sentiments (Kranjc et al., 2015) :

Étape 1<sub>emojitweets</sub> : Utilisez l'Unicode des emojis pour identifier et extraire un sous-ensemble de tweets contenant des emojis (voir Figure 3).

Étape 2<sub>emojis</sub> : classer les tweets avec des emojis porteurs de sentiments dans les classes négative, neutre et positive (Figure 3).

Étape 3<sub>lists</sub> : créer des listes avec des mots porteurs de sentiment et attribuer un score à partir du lexique de mots traduits (Figure 4) :

1. collecter tous les mots des tweets négatifs, neutres et positifs.

2. Ensuite, retirez les mots qui apparaissent dans une ou les deux autres listes (Figure 5).

Étape 4<sub>words</sub> : classer les tweets restants sans emojis porteurs de sentiments (par exemple, les tweets sans emojis porteurs de sentiments) dans les classes négatif, neutre et positif en fonction de la couverture de mots la plus élevée avec les listes de mots porteurs de sentiments.

Étape 5<sub>words+emojis</sub> : classer tous les tweets avec et sans emojis porteurs de sentiments dans les classes négative, neutre et positive en fonction de la couverture de mots la plus élevée avec les listes de mots porteurs de sentiments et en utilisant les scores du lexique de sentiments emoji (c'est-à-dire le score de sentiment [-1...+1]) du lexique de sentiments emoji (Kralj Novak et al., 2015; Hakami et al., 2021).

## 5 Expériences et Évaluations

Dans cette section, nous allons décrire notre configuration expérimentale, nos métriques d'évaluation et les résultats. Nous montrons également que, en acquérant le lexique de sentiment des emojis à partir de leurs descriptions, nous évaluons ensuite le cadre de marquage de sentiment proposé dans cette section.

p07-01.png

Figure 3 : Utiliser Unicode pour générer un sous-ensemble de tweets emoji (step1<sub>emojisttweets</sub>).

p07-02.png

Figure 4 : Classer les tweets avec des emojis porteurs de sentiments dans les 3 classes (step2<sub>emojis</sub>).

p07-03.png

Figure 5 : créer des listes avec des mots porteurs de sentiment (step3<sub>words</sub>).

Notre objectif est de réduire l'effort d'annotation manuelle dans la création de jeux de données d'entraînement pour l'entraînement des systèmes de TAL. De plus, nous avons étudié comment créer automatiquement un lexique de sentiment en utilisant les scores d'emoji provenant du lexique de sentiment d'emoji existant.

p07-04.png

Figure 6 : Mots porteurs de sentiment comme indicateurs pour les classes de sentiment des tweets restants (step3<sub>lists</sub>).

## 5.1 Configuration et métriques expérimentales

Nous avons extrait les tweets avec des emojis porteurs de sentiments pour l'expérimentation comme dans la Figure 3. Pour l'assurance qualité, tous les tweets ont subi une étape de pré-traitement rigoureuse afin de supprimer le bruit, les ponctuations et les caractères superflus sans aucune information vitale (Mabokela et Schlippe, 2022b). Au total, les tweets avec emojis sont au nombre de 34 269 qui constituent alors 72% des tweets du corpus SAfriSenti. Seulement un petit ensemble d'environ 2,9% et 5,43% a été trouvé dans les tweets à code commuté Setswana-anglais et Sesotho-anglais tandis que le reste des tweets monolingues contiennent environ 10%-24% des tweets avec des emojis. Le tableau 4 démontre les distributions des tweets avec des emojis. Au total, 686 emojis uniques sont identifiés à partir de SAfriSenti Corpus dans toutes les langues cibles. Nous avons également extrait des emojis de tweets en code-switching. Nous avons évalué nos tweets emoji avec les méthodes d'annotation des sentiments définies dans la Section 4. De plus, nous utilisons un lexique de sentiments avec des étiqueteurs de sentiments basés sur les morphèmes pour étiqueter avec précision les humeurs positive et négative.

p07-05.png

Tableau 4 : Distribution des emojis uniques et des tweets avec emojis par langue.

p08-01.png

Tableau 5 : Exactitude, rappel, précision et score macro-F<sub>1</sub> des méthodes d'annotation des sentiments.

Nous nous conformons aux métriques utilisées dans les travaux antérieurs (Gavilanes et al., 2018). Nous avons évalué notre approche d'étiquetage du sentiment avec l'exactitude, la précision, le rappel et la macro-F<sub>1</sub>. Nous évaluons nos stratégies d'étiquetage de sentiment par rapport aux annotations manuelles. Nous avons évalué nos approches en utilisant l'exactitude, la précision, le rappel et le score macro-F<sub>1</sub> en considérant toutes les étiquettes comme une tâche multi-classe, c'est-à-dire positive, neutre et négative.

Pour obtenir le score de sentiment des tweets associé à l’étiquette de sentiment (c.-à-d. négatif, neutre ou positif), nous avons utilisé la formule de distribution discrète des emoji utilisée dans (Kralj Novak et coll., 2015; Hakami et coll., 2021). n emoji peuvent apparaître dans plusieurs tweets, chacun ayant été étiqueté avec un sentiment. Cela crée une distribution discrète:

Les composantes de la distribution (c'est-à-dire P-, P0, P+) désignent la classe de sentiment (négative, neutre ou positive) de l'emoji identifié. Ensuite, nous avons estimé les probabilités à partir des fréquences relatives :

∑N(c)= N, c ∈ {-1, 0, +1} qui enregistre la distribution de sentiment pour l'ensemble pertinent de tweets. Le N désigne le nombre de toutes les occurrences des emojis dans les tweets, et N(c) sont les occurrences dans les tweets avec l'étiquette de sentiment c. Nous avons considéré les occurrences multiples d’un emoji dans un seul tweet. De ce qui précède, nous avons formé une distribution de probabilité discrète: (P-, P0, P+), ∑P(c) = 1.

p08-02.png

Ensuite, le score de sentiment S de l'emoji a été calculé comme la moyenne de la distribution :

p08-03.png

En outre, les étiquettes des emojis sont également déterminées à partir des lexiques d'emojis existants, et leur accord est ensuite testé.

## 5.2 Résultats

Le tableau 5 présente les pourcentages des mesures d'exactitude, de rappel, de précision et de score F<sub>1</sub> pour les 4 méthodes. Nos résultats indiquent que le lexique emoji fourni par (Hakami et al., 2021) se comporte légèrement mieux que le lexique emoji développé par (Kralj Novak et al., 2015). En outre, cela est dû au fait que le lexique des sentiments emoji de (Kralj Novak et al., 2015) contient moins d’emojis que celui présenté par (Hakami et al., 2021). L'exactitude de 68,7 % et le score F<sub>1</sub> de 66,2 % sont considérés comme comparables aux travaux précédents (Gavilanes et al., 2018). Nous avons utilisé le lexique de sentiments (SentiLexicon<sub>words+morph</sub>) pour classer les sentiments contenus dans les tweets en fonction des mots. Notre approche SentiLexicon<sub>words+morph</sub> a atteint une exactitude de 69,1 % avec un score macro-F<sub>1</sub> de 68,4 %. Ainsi, le SentiLexicon<sub>words+morph</sub> se comporte légèrement mieux avec une marge accrue de (+0,4%) par rapport au lexique d'emojis fourni par (Kralj Novak et al., 2015).

Selon les travaux précédents (Hakami et al., 2021), les emojis sont classés en catégories à savoir; expressions faciales, langage corporel, activité humaine, cœur, nature, nourriture, objet et symboles, et drapeaux. 50% de nos emojis entrent dans la catégorie des expressions faciales ayant de forts indicateurs d’émotions. Comme le montre le Tableau 5, les méthodes de supervision distante (DistSuper<sub>emojis+words</sub>) fonctionnent significativement mieux que les deux lexiques emoji existants et le lexique de sentiment basé sur les mots. En comparant notre lexique de sentiment emoji (SentiEmojiLex<sub>emojis</sub>) avec les deux lexiques emoji existants (Kralj Novak et al., 2015; Hakami et al., 2021), SentiEmojiLex<sub>emojis</sub> fonctionne bien mieux avec une exactitude de 75%. Cela signifie que notre approche SentiEmojiLex<sub>emojis</sub> est plus efficace pour déterminer les sentiments des tweets. En outre, nous avons testé avec l'approche DistSuper<sub>emojis+words</sub> — la combinaison de sentiments portés par des emoji et de sentiments portés par des mots. L'approche DistSuper<sub>emojis+words</sub> a atteint une exactitude de 77,4 % ainsi qu'un score F de 76,3 %. Nos résultats montrent en outre que notre approche SentiEmojiLex<sub>emojis</sub> avec DistSuper<sub>emojis+words</sub> peut être utilisée pour effectuer un étiquetage de sentiments indépendant de la langue des tweets avec et sans emojis. En comparant DistSuper<sub>emojis+words</sub> avec DistSuper<sub>emojis+words</sub>, nous avons obtenu une marge accrue de plus de (+1,4%).

De plus, une combinaison de lexique de sentiment basé sur les mots et d'étiqueteur de sentiment morphologique (SentiLexicon<sub>words+morph</sub>) a permis d'augmenter l'exactitude. Notre approche DistSuper<sub>emojis+words</sub> surpasse toutes les approches de lexique de sentiments utilisées dans les expériences. Nos résultats montrent que l'obtention des étiquettes de sentiment en utilisant des définitions d'emoji a mieux fonctionné. Cependant, l'approche SentiEmojiLex<sub>emojis</sub> a obtenu un bon score F<sub>1</sub> de 73,9 %. Il convient de noter que la combinaison d'emojis et de mots (c'est-à-dire CombSentiLex<sub>emojis+words</sub>) améliore également l'exactitude de 1,3 % par rapport à SentiEmojiLex<sub>emojis</sub>. En outre, nous avons pu obtenir des résultats supérieurs en utilisant CombSentiLex<sub>emojis+words</sub> par rapport à l'utilisation de l'approche SentiLexicon<sub>words+morph</sub>. De plus, il n'y a pas de différence significative dans les résultats obtenus pour le score F<sub>1</sub>, la précision et le rappel dans ce corpus. Cela confirme la qualité du corpus SAfriSenti.

## 6 Conclusion

Dans cet article, nous décrivons les différentes stratégies d'étiquetage des sentiments qui impliquent l'utilisation d'emojis et de mots pour pré-étiqueter automatiquement les tweets pour les langues à faibles ressources. De plus, nous avons utilisé SentiLexicon<sub>words+morph</sub> ainsi que les étiqueteurs de sentiment pour effectuer l'étiquetage de sentiment. Nous créons notre SentiEmojiLex<sub>emojis</sub> à partir des tweets annotés manuellement existants dans le corpus SAfriSenti — un corpus de sentiment Twitter multilingue pour les langues sud-africaines (c'est-à-dire le sepedi, le setswana, le sesotho et l'anglais) qui sera étendu ultérieurement à d'autres langues sud-africaines. Nous avons créé notre SentiEmojiLex<sub>emojis</sub> en extrayant uniquement les tweets qui contiennent des emojis et en convertissant les emojis en leurs descriptions textuelles correspondantes. En outre, nous tirons parti de l’approche de (Gavilanes et al., 2018) pour développer notre lexique du sentiment emoji. Nous avons obtenu une meilleure exactitude et un meilleur score F<sub>1</sub> avec notre DistSuper<sub>emojis+words</sub>. En comparant notre SentiLexicon<sub>words+morph</sub> avec le lexique des mots porteurs de sentiments, nos résultats montrent que la stratégie SentiEmojiLex<sub>emojis</sub> est plus efficace et fiable. De plus, en comparant nos stratégies d'étiquetage aux lexiques de sentiment existants par emojis, nous avons obtenu des résultats comparables avec une exactitude de 75 % pour SentiEmojiLex<sub>emojis</sub> et une exactitude de 77 % pour l'approche DistSuper<sub>emojis+words</sub>. De plus, nous avons utilisé les approches CombSentiLex<sub>emojis+words</sub> et DistSuper<sub>emojis+words</sub> pour étiqueter les tweets restants dans le corpus SAfriSenti (c'est-à-dire 32 % (16 215 tweets)). Par conséquent, le développement d’une stratégie d’annotation automatique des sentiments pour les tweets avec des emojis est plus susceptible de réduire l’effort d’annotation humaine. De plus, ces méthodologies peuvent être facilement adaptées à d'autres langues africaines sous-dotées, à condition que les données recueillies contiennent des emojis. Nos travaux futurs incluent l'exploitation du plongement d'emojis pour formuler des techniques d'étiquetage de sentiment sensibles au contexte pour des systèmes spécialisés. De plus, nous visons à améliorer la classification des sentiments en intégrant diverses approches d'apprentissage actif qui intègrent des emojis.

## 7 Remerciements

Ce travail de recherche est soutenu par la National Research Foundation (NRF). Tout d'abord, nous reconnaissons la NRF pour l'attribution du Black Academics Advancement Programme (BAAP) (No: BAAP200225506825). Nous tenons également à exprimer notre plus profonde gratitude aux annotateurs qui ont consacré leur temps et leurs efforts, aux experts linguistiques et aux animateurs de sessions. Enfin, nous remercions les précieux retours fournis par les évaluateurs.

## Notes

1 https://emojipedia.org/stats/

2 http://emojipedia.org/

3 Notre ensemble de données sera disponible ici: https://github.com/Mabokela/SAfriSenti-Corpus

4 https://saifmohammad.com/WebPages/lexicons.html

5 https://github.com/cjhutto/vaderSentiment.git

6 https://github.com/fnielsen/afinn.git

7 https://kt.ijs.si/data/Emoji_sentiment_ranking/

## Références

Nur Atiqah Sia Abdullah and Nur Ida Aniza Rusli. 2021. Multilingual sentiment analysis: A systematic literature review. pertanika journal of science and technology, 29.

Marvin M. Aguero-Torales, Jose I. Abreu Salas, and Antonio G. Lopez-Herrera. 2021. Deep learning and multilingual sentiment analysis on social media data: An overview. Applied Soft Computing, 107:107373.

Jesujoba O. Alabi, David Ifeoluwa Adelani, Marius Mosbach, and Dietrich Klakow. 2022. Multilingual Language Model Adaptive Fine-Tuning: A Study on African Languages. arXiv e-prints, page arXiv:2204.06487.

Serkan Ayvaz and Mohammed Shiha. 2017. The effects of emoji in sentiment analysis. International Journal of Computer and Electrical Engineering, 9:360-369.

Bharathi Raja Chakravarthi, Ruba Priyadharshini, Vigneshwaran Muralidaran, Navya Jose, Shardul Suryawanshi, Elizabeth Sherly, and John P. McCrae. 2022. Dravidiancodemix: sentiment analysis and offensive language identification dataset for dravidian languages in code-mixed text. Language Resources and Evaluation, 56:765 - 806.

Yuxiao Chen, Jianbo Yuan, Quanzeng You, and Jiebo Luo. 2018. Twitter sentiment analysis via bi-sense emoji embedding and attention-based lstm. Proceedings of the 26th ACM international conference on Multimedia.

Keith Cortis and Brian Davis. 2020. Over a decade of social opinion mining. Artificial Intelligence Review, abs/2012.03091:4873-4965.

Mountaga Diallo, Chayma Fourati, and Hatem Haddad. 2021. Bambara language dataset for sentiment analysis. In Practical ML for Developing Countries Workshop. ICLR 2021, Virtual Event.

Ben Eisner, Tim Rocktäschel, Isabelle Augenstein, Matko Bosnjak, and Sebastian Riedel. 2016. emoji2vec: Learning emoji representations from their description. In SocialNLP@EMNLP.

Milagros Fernández Gavilanes, Jonathan Juncal-Martínez, Silvia García-Méndez, Enrique Costa-Montenegro, and Francisco Javier González-Castaño. 2018. Creating emoji lexica from unsupervised sentiment analysis of their descriptions. Expert Syst. Appl., 103:74-91.

Alec Go, Richa Bhayani, and Lei Huang. 2009. Twitter sentiment classification using distant supervision. Processing, 150.

Vandita Grover. 2021. Exploiting emojis in sentiment analysis: A survey. Journal of The Institution of Engineers : Series B, pages 1-14.

Gaël Guibon, Magalie Ochs, and Patrice Bellot. 2016. From Emojis to Sentiment Analysis. In WACAI 2016, Brest, France. Lab-STICC and ENIB and LITIS.

Fabian Haak. 2021. Emojis in lexicon-based sentiment analysis: Creating emoji sentiment lexicons from unlabeled corpora. In Proceedings of the LWDA 2021 Workshops: FGWM, KDML, FGWI-BIA, and FGIR, pages 279-286. CEUR-WS.

Shatha Ali A. Hakami, Robert Hendley, and Phillip Smith. 2021. Arabic emoji sentiment lexicon (ArabESL): A comparison between Arabic and European emoji sentiment lexicons. In Proceedings of the Sixth Arabic Natural Language Processing Workshop, pages 60-71, Kyiv, Ukraine (Virtual). Association for Computational Linguistics.

C.J. Hutto and Eric Gilbert. 2015. Vader: A parsimonious rule-based model for sentiment analysis of social media text. In Proceedings of the 8th International Conference on Weblogs and Social Media, ICWSM 2014, pages 218-225.

Kanika Jindal and Rajni Aron. 2021. A systematic study of sentiment analysis for social media data. Materials Today: Proceedings.

Mohammed Kaity and Vimala Balakrishnan. 2020. Sentiment lexicons and non-English languages: A survey. Knowledge and Information Systems, 62:4445-4480.

Mayank Kejriwal, Qile Wang, Hongyu Li, and Lu Wang. 2021. An empirical study of emoji usage on twitter in linguistic and national contexts. Online Social Networks and Media, 24:100149.

Mayu Kimura and Marie Katsurai. 2017. Automatic construction of an emoji sentiment lexicon. Proceedings of the 2017 IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining 2017, page 1033-1036.

Petra Kralj Novak, Jasmina Smailovic, Borut Sluban, and Igor Mozetic. 2015. Sentiment of emojis. PloS one, 10.

Janez Kranjc, Jasmina Smailovic, Vid Podpecan, Miha Grcar, Martin Znidari, and Nada Lavrac. 2015. Active learning for sentiment analysis on data streams: Methodology and workflow implementation in the clowdflows platform. Inf. Process. Manag., 51:187-203.

Byung kwan Yoo and Julia Taylor Rayz. 2021. Understanding emojis for sentiment analysis. In FLAIRS Conference.

Chuchu Liu, Fan Fang, Xu Lin, Tie Cai, Xu Tan, Jianguo Liu, and Xin Lu. 2021. Improving sentiment analysis accuracy with emoji embedding. Journal of Safety Science and Resilience, 2:246-252.

Koena Ronny Mabokela, Turgay Celik, and Mpho Raborife. 2022a. Multilingual Sentiment Analysis for Under-Resourced Languages: A Systematic Review of the Landscape. IEEE Access, 11:15996 - 16020.

Koena Ronny Mabokela and Madimetja Jonas Manamela. 2013. An integrated language identification for code-switched speech using decoded-phonemes and support vector machine. In 2013 7th Conference on Speech Technology and Human - Computer Dialogue (SpeD), pages 1-6.

Koena Ronny Mabokela, Mpho Raborife, and Turgay Celik. 2022b. Safrisenti: Towards a creation of multilingual sentiment corpus for south african under-resourced languages. ACM Trans. Asian Low-Resour. Lang. Inf. Process.

Koena Ronny Mabokela and Tim Schlippe. 2022a. AI for Social Good: Sentiment Analysis to Detect Social Challenges in South Africa. In The South African Conference for Artificial Intelligence Research (SACAIR 2022).

Koena Ronny Mabokela and Tim Schlippe. 2022b. A Sentiment Corpus for South African Under-Resourced Languages in a Multilingual Context. In The 1st Annual Meeting of the ELRA/ISCA Special Interest Group on Under-Resourced Languages (SIGUL 2022), page 70-77.

Gati Lother Martin, Medard Edmund Mswahili, and Young-Seob Jeong. 2021. Sentiment Classification in Swahili Language Using Multilingual BERT. African NLP Workshop, EACL 2021, abs/2104.09006.

Salima Medhaffar, Fethi Bougares, Y. Estève, and Lamia Hadrich Belguith. 2017. Sentiment analysis of tunisian dialects: Linguistic ressources and experiments. In WANLP@EACL.

Saif M. Mohammad and Peter D. Turney. 2013. Crowdsourcing a word-emotion association lexicon. Computational Intelligence, 29(3):436-465.

Shamsuddeen Hassan Muhammad, David Ifeoluwa Adelani, Sebastian Ruder, Ibrahim Said Ahmad, Idris Abdulmumin, Bello Shehu Bello, Monojit Choudhury, Chris Chinenye Emezue, Saheed Salahudeen Abdullahi, Anuoluwapo Aremu, Alipio Jeorge, and Pavel Brazdil. 2022. NaijaSenti: A Nigerian Sentiment Corpus for Multilingual Sentiment Analysis.

Finn Årup Nielsen. 2011. A new ANEW: evaluation of a word list for sentiment analysis in microblogs. CoRR, abs/1103.2903.

Alexander Pak and Patrick Paroubek. 2010. Twitter as a corpus for sentiment analysis and opinion mining. In LREc, pages 1320-1326.

D.J. Prinsloo. 2020. Lexicographic treatment of negation in sepedi paper dictionaries. Lexikos, 30:1-25.

Abhishek Singh, Eduardo Blanco, and Wei Jin. 2019. Incorporating emoji descriptions improves tweet classification. In Proceedings of NAACL-HLT, page 2096-2101.

Statista. 2022. African countries with the largest population as of 2020.

Hao Wang and Jorge A. Castanon. 2015. Sentiment expression via emoticons on social media. In 2015 IEEE International Conference on Big Data (Big Data), pages 2404-2408.

Mayur Wankhade, Annavarapu Rao, and Chaitanya Kulkarni. 2022. A Survey on Sentiment Analysis Methods, Applications, and Challenges. Artificial Intelligence Review, pages 1-50.

## A Annexe : Informations linguistiques

Le sotho du Nord, également connu sous le nom de sesotho sa Leboa, est une langue sotho-tswana principalement parlée dans les régions du nord-est de l'Afrique du Sud. Il est aussi communément appelé Sepedi ou Pedi. Le recensement national sud-africain de 2011 indique qu'il s'agit de la langue maternelle de plus de 4,6 millions de personnes, représentant 9,1 % de la population, ce qui en fait le 5e langage parlé le plus répandu en Afrique du Sud. La langue Sepedi est la plus fréquemment utilisée dans les provinces du Mpumalanga, du Gauteng et du Limpopo.

Le tswana, connu sous son nom indigène Setswana, est une langue bantoue parlée en Afrique australe par environ 8,2 millions d'individus. Il appartient à la famille des langues bantoues au sein de la branche sotho-tswana de la zone S, et partage des liens étroits avec les langues sotho du nord, sotho du sud, kgalagadi et lozi. Le setswana est une langue officielle au Botswana et en Afrique du Sud et sert de lingua franca au Botswana et dans certaines parties de l'Afrique du Sud, en particulier dans la province du Nord-Ouest. Les groupes ethniques parlant le tswana se trouvent dans plus de deux provinces en Afrique du Sud, principalement dans le Nord-Ouest, où environ quatre millions de personnes parlent la langue.

Le sesotho, également appelé sotho du sud, est une langue bantoue du sud appartenant au groupe sotho-tswana ("S.30"). Il est principalement parlé au Lesotho, où il sert à la fois de langue nationale et officielle, ainsi qu'en Afrique du Sud (en particulier dans le Vaal et l'État libre), où il est l'une des 11 langues officielles. Elle est également reconnue comme l'une des 16 langues officielles du Zimbabwe. Comme toutes les langues bantoues, le sesotho est une langue agglutinante qui utilise de nombreux affixes ainsi que des règles dérivationnelles et flexionnelles pour construire des mots complets.
