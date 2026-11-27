> Machine translation (fr) of "The Annotators Agree to Not Agree on the Fine-grained Annotation of Hate-speech against Women in Algerian Dialect Comments" by Imane Guellil, Yousra Houichi, Sara Chennoufi, Mohamed Boubred, Anfal Yousra Boucetta, Faical Azouaou, https://aclanthology.org/2024.rail-1.15/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Les annotateurs conviennent de ne pas se mettre d'accord sur l'annotation fine de discours de haine contre les femmes dans les commentaires de dialecte algérien

Imane Guellil, Yousra Houichi, Sara Chennoufi, Mohamed Boubred, Anfal Yousra Boucetta, Faical Azouaou

**Affiliations**  
Imane Guellil1, Yousra Houichi2, Sara Chennoufi3,  
Mohamed Boubred4, Anfal Yousra Boucetta5, Faical Azouaou6  
1University of Edinburgh, Edinburgh, United Kingdom  
2EZUS, France,  
3LIRIS, France,  
4Capgemini, France  
5Ecole Superieure d’Informatique D’Alger (ESI), Algeria,  
6Ecole supérieure en Sciences et Technologies  
de l’Informatique et du Numérique (ESTIN), Algeria

## Résumé

Un nombre important d’études de recherche ont été présentées pour détecter les discours de haine dans les médias sociaux au cours des dernières années. Cependant, la majorité de ces études sont en anglais. Seules quelques études se concentrent sur l'arabe et ses dialectes (surtout le dialecte algérien) avec un plus petit nombre d'entre elles ciblant la détection du sexisme (ou discours de haine contre les femmes). Même les travaux qui ont été proposés sur la détection du sexisme en arabe considèrent deux classes seulement (haineux et non haineux), et trois classes (en ajoutant la classe neutre) dans le meilleur des cas. Cet article vise à proposer le premier corpus finement granulaire se concentrant sur 13 classes. Cependant, étant donné les défis liés au discours de haine et à l'annotation finement granulaire, la métrique Kappa est relativement faible parmi les annotateurs (c'est-à-dire 35 %). Ce travail en cours propose trois contributions principales : 1) Annotation de différentes catégories liées aux discours de haine tels que les insultes, les mots vulgaires ou la haine en général. 2) Annotation de 10 000 commentaires, en arabe et en dialectes algériens, extraits automatiquement de Youtube. 3) Mettre en évidence les défis liés à l'annotation manuelle tels que la subjectivité, le risque de biais, l'absence de directives d'annotation, etc.

## Mots-clés

Détection du sexisme, détection du discours de haine, construction de corpus, annotation manuelle

## 1. Introduction

Le discours de haine est généralement défini comme un langage pour exprimer la haine contre une personne ou un groupe spécifique en fonction de certaines caractéristiques clés telles que la religion, le genre, la race, l'orientation sexuelle et diverses formes de handicap (Shannaq et al., 2022). L’utilisation excessive des médias sociaux conduit à la montée des comportements antisociaux illustrés par la propagation du discours de haine en ligne, du langage offensant et de la cyberintimidation (Shannaq et al., 2022). Les autorités de nombreux pays reconnaissent le discours de haine comme un problème grave, car il peut conduire à la dépression, ce qui nuit à la santé et aux relations des gens. Elle peut aussi mener au suicide dans des scénarios plus graves (Boucherit et Abainia, 2022).

Avec la prolifération en ligne des discours de haine, un nombre significatif d'études de recherche axées sur la manière de classer et de détecter ce type de discours a été présenté au cours des dernières années. La majorité de ces études détectent le discours de haine en général (Caiani et al., 2021; Pamungkas et al., 2018; Almatarneh et al., 2019; Kalaivani et Thenmozhi, 2021) et seules quelques études (de Paula et al., 2021) se sont concentrées sur la détection du discours de haine contre les femmes (uniquement en distinguant entre les commentaires haineux et non haineux). Cependant, presque toutes les études sont consacrées à l'anglais. Cela est principalement dû au manque de ressources (lexiques et corpus qui sont construits pour d'autres langues comme l'arabe). Pour combler cette lacune, le rôle de cet article est de proposer un corpus annoté manuellement à grain fin comprenant 10 000 commentaires YouTube et 13 classes : 0 (pas de haine), i (insulte), v (vulgaire), h (haine), s (sans relations avec les femmes), b (positif), p (un problème dans l'annotation), e (émoticônes uniquement), c (passage du Coran, livre des musulmans), iv (insultes et vulgaire en même temps), ih (insulte et haine en même temps), vh (vulgaire et haine en même temps), ivh (insulte, vulgaire et haine en même temps). Ce corpus sera librement accessible à la recherche après sa publication. La conclusion principale de ce travail était que les annotateurs ont tendance à être en désaccord plus fréquemment lorsqu'ils doivent traiter de différentes classes d'annotation.

## 2. Discours de haine en arabe dans les médias sociaux : les défis

L'arabe est une langue parlée par plus de 330 millions de personnes comme langue maternelle. C'est la cinquième langue la plus parlée au monde. L'arabe standard moderne (MSA) est généralement la langue officielle utilisée à l'école alors que le classique est utilisé dans le Saint Coran (livre musulman) (ESI, 2016; Guellil et al., 2020b). Une autre forme d'arabe est les dialectes arabes qui sont utilisés dans les conversations de la vie quotidienne. En outre, l’arabe dans les médias sociaux peut être écrit soit en utilisant des lettres arabes, soit en Arabizi (lettres latines) (Guellil et al., 2021). 55% du texte dans les médias sociaux a été écrit en arabe (2017) (Haddad et al., 2020). Les applications de traitement du langage naturel arabe (NLP) doivent faire face à plusieurs défis complexes en plus des défis communs liés aux problèmes de NLP (Guellil et Faical, 2017; Guellil et al., 2018).

L'arabe est connu pour ses défis, la rareté des ressources et sa complexité. La détection des discours de haine pour le contenu arabe est une tâche complexe (Husain, 2020). Différents défis peuvent être soulevés lors de la détection du discours de haine dans le texte arabe: 1) Le langage informel utilisant des formes courtes et de l'argot. 2) L'utilisation des dialectes (Boucherit et Abainia, 2022). 3) La diversité des dialectes de langue arabe (Husain, 2020). 4) L’utilisation d’Arabizi (Guellil et al., 2020a)

## 3. Travaux connexes sur la création de corpus de discours de haine en arabe

Certains articles se sont concentrés sur les constructions de ressources dédiées à la détection du discours de haine (Albadi et al., 2018; Mubarak et al., 2022; Alsafari et al., 2020; Mubarak et al., 2020; Chowdhury et al., 2020; Almanea et Poesio; El Abboubi et al., 2020; Boucherit et Abainia, 2022; Guellil et al., 2022). (Albadi et al., 2018) vise à détecter les discours de haine religieuse en langue arabe sur les médias sociaux. Les auteurs ont commencé par construire leur ensemble de données en collectant des tweets et en les annotant manuellement. À cette fin, ils ont d'abord collecté 6 000 tweets arabes faisant référence à différents groupes religieux et les ont étiquetés à l'aide de travailleurs de crowdsourcing. Après cela, ils ont analysé l’ensemble de données étiquetées et ont signalé les principales cibles de la haine religieuse dans l’espace Twitter arabe.

Dans l'article de Mubarak et al. (2022), les auteurs présentent une approche automatisée basée sur les emojis pour collecter des tweets contenant un pourcentage beaucoup plus élevé de contenu malveillant, sans aucune dépendance linguistique. À partir d'une collection de 4,4 millions de tweets en arabe entre juin 2016 et novembre 2017, ils ont extrait tous les tweets contenant l'un des emojis utilisés. Un travail d'annotation a été créé sur la plateforme de crowdsourcing Appen pour juger si un tweet est offensant ou non. Des annotateurs de tous les pays arabes ont été invités.

Le rôle de l'article décrit par Alsafari et al. (2020) était de créer un corpus textuel arabe fiable. Les données ont été extraites de Twitter sur la base d'une liste de mots-clés arabes liés à chacune des quatre catégories étudiées : religion, ethnicité, nationalité et genre. Les auteurs ont sélectionné aléatoirement 200 000 publications pour chaque catégorie, pour un total de 800 000 échantillons. L'annotation a été réalisée par trois locuteurs natifs du Golfe, deux femmes et un homme.

L'article de Mubarak et al. (2020) ajoute une classe supplémentaire à celles généralement étudiées, où ces auteurs identifient également les commentaires vulgaires en plus des commentaires incluant de la haine. Les API Twitter ont été utilisées pour collecter 660k tweets arabes entre le 15 avril et le 6 mai 2019. Les tweets ont été annotés, aboutissant à 1,915 tweets offensants. Chaque tweet a été étiqueté comme offensant, pouvant en outre être étiqueté comme vulgaire et/ou discours de haine, ou propre.

L’idée principale de Chowdhury et al. (2020) était d’introduire un nouvel ensemble de données de commentaires d’actualités en arabe dialectal, collecté à partir de plusieurs plateformes de médias sociaux, notamment Twitter, Facebook et YouTube. De 2011 à 2019, plus de 100k commentaires provenant de différentes plateformes de médias sociaux ont été collectés. Le contenu de chaque plate-forme a été collecté via sa propre API (YouTube, Facebook et Twitter). Annotation des données (Amazon Mechanical Turk (AMT), une plateforme de crowdsourcing, a été utilisée pour obtenir des annotations manuelles. Les commentaires ont été annotés pour les discours de haine et les catégories vulgaires (mais pas haineuses). Les auteurs ont analysé le contenu lexical distinctif ainsi que l'utilisation des emojis dans les commentaires offensants.

L'objectif d'Almanea et Poesio était d'introduire un jeu de données sur la misogynie et le sexisme en arabe (ArMIS) caractérisé par la fourniture d'annotations de la part d'annotateurs ayant des degrés de croyances religieuses différents et par la fourniture de preuves que de telles différences entraînent effectivement des désaccords. Les auteurs ont discuté d'expériences de preuve de concept montrant qu'un jeu de données dans lequel les désaccords n'ont pas été réconciliés peut être utilisé pour entraîner des modèles de l'état de l'art pour la détection de la misogynie et du sexisme ; et ont examiné différentes manières dont ces modèles pourraient être évalués.

L'objectif d'El Abboubi et al. (2020) était de discuter à la fois de l'impact des différences possibles liées au sexe et de la prise de conscience et de la reconnaissance des attitudes sexistes dans l'arabe marocain. Les résultats de cette étude sont fondés sur des données quantitatives. Les modèles analysés sont les suivants: attitudes sexistes, auto-évaluation, sources de pression pour utiliser ou changer le langage sexiste, et reconnaissance du langage sexiste. Un questionnaire a été conçu pour mesurer les attitudes. Le questionnaire est divisé en deux parties : l'une dans laquelle cinq questions sont posées pour refléter les attitudes des répondants à l'égard de l'arabe marocain en tant que langue sexiste ; et une deuxième partie dans laquelle des énoncés sont présentés aux répondants qui les évaluent en fonction du degré de sexisme qu'ils contiennent, et si ces mêmes énoncés sont appropriés ou non.

L'article de Boucherit et Abainia (2022) aborde le problème de la détection de contenu offensant et abusif dans les commentaires Facebook, où l'accent est mis sur l'arabe dialectal algérien. Les auteurs ont construit un nouveau corpus regroupant plus de 8,7k textes annotés manuellement comme normaux, abusifs et offensants (où 10 258 commentaires ont été initialement collectés à partir de pages et groupes publics liés à des sujets sensibles).

Dans l'article de Mulki et al. (2019), les auteurs ont présenté le jeu de données Twitter Levantine Hate Speech and Abusive (L-HSAB) comme un jeu de données de banc d'essai pour la détection automatique des contenus toxiques levantins en ligne. Trois annoteurs ont classé manuellement les tweets suivants en 3 catégories : Normal, Abusif et Haine. Waseem et al. (Waseem et Hovy, 2016) ont annoté manuellement un jeu de données contenant 16 914 tweets dont 3 383 tweets pour du contenu sexiste, 1 972 pour du contenu raciste, et 11 559 pour ni sexiste ni raciste. Pour la génération du jeu de données, les auteurs ont utilisé l'API Twitter pour extraire des tweets contenant certains mots-clés liés aux femmes. Le travail de Waseem et al. (Waseem and Hovy, 2016) est considéré comme un banc d'essai par de nombreux chercheurs (Al-Hassan and Al-Dossari, 2019 ; Pitsilis et al., 2018 ; Kshirsagar et al., 2018).

Enfin, notre récent travail Guellil et al. (2022), a également considéré YouTube pour la construction d'un corpus de 5000 commentaires dédiés à la détection du sexisme. Cependant, nous n’avons considéré que deux étiquettes pour annoter leur ensemble de données : les commentaires haineux et les commentaires non haineux.

## 4. Collecte de données et annotation

## 4.1. Collecte des données

p03-01.png

commentaires extraits, nous appelons ce corpus Corpus_Youtube_women_10000.

## 4.2. Annotation des données

Pour l'annotation, nous sélectionnons aléatoirement 10 000 commentaires contenant du MSA et des dialectes algériens écrits en arabe et en arabizi. Ce corpus contient également des commentaires en français et d'autres en anglais (comme la plupart des Arabes sont bilingues). L’annotation a été réalisée par trois annoteurs, locuteurs natifs de l’arabe et de ses dialectes (2 femmes et un homme). Les annoteurs ont été séparés et ont eu 3 semaines pour annoter manuellement les commentaires sélectionnés en utilisant différentes étiquettes. Un guide d'annotation a été préparé à cette fin et il a été partagé avec les annotateurs. Les principaux points de cette ligne directrice sont les suivants:

La valeur de la colonne hate peut prendre plusieurs valeurs : 0 (commentaire ne contenant ni haine, ni insulte, ni mot vulgaire), i (si le commentaire contient des insultes, par exemple, ya kalba signifiant chien, ya hmara signifiant âne, etc.), v (si le commentaire contient des mots vulgaires), h (si le commentaire contient de la haine, par exemple allah ya3tik elmoutI want signifiant que tu meures, ou nous danserons sur ta tombe, etc.).

S'il a un commentaire qui contient plusieurs caractéristiques en même temps, ils devaient le mentionner. Par exemple, si un commentaire contient de la haine et des vulgarités, vous devez mettre vh (et non hv), dans le même ordre i, v alors h- doit être conservé.

Les auteurs ont été priés d'être aussi objectifs que possible pour cette annotation et de ne pas incorporer leurs sentiments personnels.

Comme les commentaires ont été extraits automatiquement, il est également possible de trouver certains commentaires sans rapport avec les femmes. Par exemple four lghounia hadi kho signifiant cette chanson est géniale frère, il leur a été demandé de mettre la lettre s (sans intérêt).

On leur a demandé de mettre la lettre p (problème) lorsqu'ils étaient confrontés à une situation où ils ne pouvaient pas décider quoi mettre. Toutefois, on leur a demandé de ne recourir à cette option que lorsque cela est nécessaire.

Comme nous prévoyons d'utiliser ce corpus à des fins d'analyse des sentiments, les annotateurs ont également été invités à mettre un b pour les commentaires positifs.

Les commentaires incluant uniquement les emojis sans texte doivent être annotés avec l'étiquette e

Les commentaires incluant la ponctuation seulement doivent être annotés avec le mot "po"

Tableau 1 : Accord des trois annotateurs sur les différentes étiquettes

p04-01.png

Les commentaires incluant uniquement certains textes du Coran doivent être annotés comme c

## 4.3. Le corpus construit

Le tableau illustre le nombre d'étiquettes attribuées par chaque annoteur. Rater1 et Rater2 sont des femmes. Rater3 est un homme.

Le tableau 1 illustre l'accord des trois annotateurs sur les différentes étiquettes. À partir de ce tableau, nous observons que les annotateurs ont tendance à être plus d'accord sur la référence positive ou les références non haineuses qu'ils ne le sont sur les commentaires haineux. Nous observons également que le désaccord est plus élevé pour les commentaires comprenant plus d'une classe haineuse (comme les commentaires incluant des insultes et des mots vulgaires simultanément). Enfin, nous pouvons également observer que trois tendances d'annotation sont présentes parmi nos annotateurs. Nous avons l’annotation prudente (Rater1) lorsque l’annotateur n’attribue un label que lorsqu’il en est sûr. Nous avons l'annotation extrême (Rater2) lorsque les annotateurs ont assigné la majorité des étiquettes et nous avons l'annotateur modéré (Rater3) qui tend à se situer entre les deux annotateurs précédents.

Afin de mettre en évidence l'inter-accord entre les annotateurs, nous présentons également la Figure 1 illustrant l'accord Kappa entre chacun des deux annotateurs. Nous observons que ce taux est particulièrement faible entre rater1 et rater3 (19 %). Le meilleur accord est entre Rater2 et Rater3. Nous observons que l'annotation à grain fin avec de nombreuses classes renvoie un kappa faible (illustré dans la Figure 1). L'une des raisons derrière cela est les erreurs de frappe liées à certaines étiquettes. Cela est également causé par la non-application de la directive. Par exemple, l'un des annoteurs a créé une autre étiquette ("autre") alors qu'il aurait dû utiliser l'étiquette p pour les problèmes. Une autre cause de conflits est lorsque les auteurs doivent attribuer des étiquettes différentes aux mêmes commentaires. Nous observons un manque de cohérence où certains annotateurs ont mal placé les étiquettes.

p04-02.png

Figure 1 : Accord interne entre les annotateurs

## 5. Discussion

Au total, 10 000 commentaires sélectionnés au hasard ont été annotés par trois annoteurs. Cependant, nous pouvons observer que l'accord entre les annotateurs (Kappa) était vraiment faible. Cela met en évidence à quel point l'annotation est compliquée avec de nombreuses étiquettes. Au total, les 3 annotateurs sont d'accord sur 2 157 (22 %) commentaires parmi les 10 000 qu'ils ont initialement examinés.

L’objectif principal de cet article est de proposer une ressource pour la détection fine du discours de haine. Cependant, cette ressource peut également être utilisée pour la classification binaire (lorsque la recherche vise uniquement à détecter les discours de haine contre les femmes). Pour ce faire, nous devons d’abord séparer les étiquettes en deux catégories pour faire la distinction entre les commentaires haineux et non haineux. Nous décidons de reconnaître les étiquettes 0, s, b, p, e, c comme non haineuses et les autres (i, v, h, iv, ih, vh, ivh) comme haineuses. Nous résolvons également certaines erreurs d'annotation évidentes telles que celle liée à l'étiquette "autre" que nous reconnaissons comme non haineuse. Dans ce cas, nous observons que les trois annotateurs s'accordent sur 1165 commentaires haineux et sur 6219 commentaires non haineux (un total de 7384 commentaires). L'accord interne entre les annoteurs est illustré à la figure 2. Nous observons dans cette figure que Kappa s'améliore significativement, surtout entre le deuxième et le troisième annotateur où Kappa avec deux classes atteint 0,68 (considéré comme un bon degré d'accord (Salkind, 2010)). Par conséquent, dans tous les cas, nous observons que Rater2 fournit le plus haut degré d'accord.

Le principal défi lors de l'annotation d'un corpus avec de nombreuses étiquettes est la cohérence des directives d'annotation. Les annotateurs ont différentes questions au début de la phase d'annotation. La meilleure façon de procéder serait de réaliser un pilote d'annotation en sélectionnant seulement quelques documents (environ 20), en les faisant annoter par les trois annotateurs et en ayant une discussion pour résoudre les désaccords avant de commencer l'annotation. Un autre problème est le manque de cohérence parmi les annotateurs. Certains annoteurs ont créé de nouvelles classes lorsque d'autres n'ont pas respecté le format d'annotation. Une façon de résoudre ce problème serait de détecter automatiquement cette incohérence et de la faire réexaminer manuellement par les annoteurs.

Ce corpus peut être utilisé de différentes manières. La première consisterait à entraîner un classificateur binaire pour détecter les commentaires haineux et non haineux. Nous pouvons observer que l'accord pour la classification binaire est assez bon. Cependant, l'objectif principal de ce corpus est d'entraîner un classifieur multi-classes afin de distinguer automatiquement les commentaires haineux, insultants et vulgaires utilisés contre les femmes dans les médias sociaux. Le principal défi derrière cela serait le déséquilibre des différentes classes. On peut envisager l'augmentation de certaines classes. On peut aussi envisager des algorithmes dédiés à la gestion des corpus déséquilibrés tels que la Synthetic Minority Oversampling Technique (SMOTE).

p05-01.png

Figure 2 : Accord interne entre les annotateurs

## 6. Conclusion

Nous avons construit dans cet article le premier corpus finement granulé pour la détection du discours de haine contre les femmes en dialecte arabe/algérien. Nous nous concentrons sur le dialecte arabe/algérien, mais nous prévoyons d'étendre cette construction à d'autres dialectes tels que le marocain ou le tunisien. Nous prévoyons également d'étendre cette construction à d'autres langues africaines. Ce corpus comprend 14 étiquettes et se distingue parmi la haine générale, les insultes et les commentaires vulgaires. Notre avenir serait d'examiner automatiquement certains désaccords liés à l'inadéquation des étiquettes, des majuscules, etc. Nous prévoyons également de faire examiner cette annotation par un quatrième annotateur qui aura accès aux différentes étiquettes attribuées en plus des commentaires. Nous prévoyons également d'utiliser le corpus construit afin d'entraîner des algorithmes de ML pour une classification fine.

## Remerciements

Nous aimerions remercier l'Edinburgh Futures Institute (EFI) pour son soutien concernant les frais liés aux présentations de papiers et aux voyages de recherche ayant conduit à des articles de cette qualité. L'objectif de l'Edinburgh Futures Institute (EFI) est de poursuivre la connaissance et la compréhension qui soutiennent la navigation des futurs complexes.

## Notes

1 https://github.com/nuhaalbadi/Arabic_hatespeech

2 https://developers.google.com/youtube/v3/

3 https://efi.ed.ac.uk/

## Références

Areej Al-Hassan and Hmood Al-Dossari. 2019. Detection of hate speech in social networks: A survey on multilingual corpus. Computer Science & Information Technology (CS & IT), 9(2):83.

Albadi, Nuha and Kurdi, Maram and Mishra, Shivakant. 2018. Are they our brothers? analysis and detection of religious hate speech in the arabic twittersphere. IEEE.

Dina Almanea and Massimo Poesio. Armis-the arabic misogyny and sexism corpus with annotator subjective disagreements.

Sattam Almatarneh, Pablo Gamallo, Francisco J Ribadas Pena, and Alexey Alexeev. 2019. Supervised classifiers to identify hate speech on english and spanish tweets. In International Conference on Asian Digital Libraries, pages 23-30. Springer.

Safa Alsafari, Samira Sadaoui, and Malek Mouhoub. 2020. Hate and offensive speech detection on arabic social media. Online Social Networks and Media, 19:100096.

Oussama Boucherit and Kheireddine Abainia. 2022. Offensive language detection in underresourced algerian dialectal arabic language. arXiv preprint arXiv:2203.10024.

Manuela Caiani, Benedetta Carlotti, and Enrico Padoan. 2021. Online hate speech and the radical right in times of pandemic: The italian and english cases. Javnost-The Public, 28(2):202-218.

Shammur Absar Chowdhury, Hamdy Mubarak, Ahmed Abdelali, Soon-gyo Jung, Bernard J Jansen, and Joni Salminen. 2020. A multiplatform arabic news comment dataset for offensive language detection. In Proceedings of the 12th language resources and evaluation conference, pages 6203-6212.

Angel Felipe Magnossão de Paula, Roberto Fray da Silva, and Ipek Baris Schlicht. 2021. Sexism prediction in spanish and english tweets using monolingual and multilingual bert and ensemble models. arXiv preprint arXiv:2111.04551.

Zineb El Abboubi, Ahmadou Bouylmani, and Mohammed Derdar. 2020. Sexism in moroccan arabic: Gender differences in perceptions and use of language. Journal of Applied Language and Culture Studies, 3:215-230.

Karima Benatchba Prof President ESI. 2016. A Sentiment analysis approach for Arabic dialects texts analysis based on automatic translation: Application to the Algerian dialect. Ph.D. thesis, ESI Algeria.

Imane Guellil, Ahsan Adeel, Faical Azouaou, Mohamed Boubred, Yousra Houichi, and Akram Abdelhaq Moumna. 2022. Ara-women-hate: An annotated corpus dedicated to hate speech detection against women in the arabic community. page 68-75.

Imane Guellil, Faical Azouaou, Fodil Benali, Ala Eddine Hachani, and Marcelo Mendoza. 2020a. The role of transliteration in the process of arabizi translation/sentiment analysis. Recent Advances in NLP: The Case of Arabic Language, pages 101-128.

Imane Guellil, Faical Azouaou, Fodil Benali, alaeddine Hachani, and Houda Saadane. 2018. Approche hybride pour la translitération de l'arabizi algérien : une étude préliminaire. In Conference: 25e conférence sur le Traitement Automatique des Langues Naturelles (TALN), May 2018, Rennes, FranceAt: Rennes, France. https://www.researchgate.net/publication. . . .

Imane Guellil, Faical Azouaou, and Francisco Chiclana. 2020b. Arautosenti: automatic annotation and new tendencies for sentiment classification of arabic messages. Social Network Analysis and Mining, 10:1-20.

Imane Guellil and Azouaou Faical. 2017. Bilingual lexicon for algerian arabic dialect treatment in social media. In WiNLP: Women & Underrepresented Minorities in Natural Language Processing (co-located with ACL 2017).

Imane Guellil, Houda Saâdane, Faical Azouaou, Billel Gueni, and Damien Nouvel. 2021. Arabic natural language processing: An overview.

Journal of King Saud University-Computer and Information Sciences, 33(5):497-507.

Bushr Haddad, Zoher Orabe, Anas Al-Abood, and Nada Ghneim. 2020. Arabic offensive language detection with attention-based deep neural networks. In Proceedings of the 4th workshop on open-source Arabic corpora and processing tools, with a shared task on offensive language detection, pages 76-81.

Fatemah Husain. 2020. Arabic offensive language detection using machine learning and ensemble machine learning approaches. arXiv preprint arXiv:2005.08946.

Adaikkan Kalaivani and Durairaj Thenmozhi. 2021. Multilingual hate speech and offensive language detection in english, hindi, and marathi languages.

Rohan Kshirsagar, Tyus Cukuvac, Kathleen McKeown, and Susan McGregor. 2018. Predictive embeddings for hate speech detection on twitter. arXiv preprint arXiv:1809.10644.

Hamdy Mubarak, Sabit Hassan, and Shammur Absar Chowdhury. 2022. Emojis as anchors to detect arabic offensive language and hate speech. arXiv preprint arXiv:2201.06723.

Hamdy Mubarak, Ammar Rashed, Kareem Darwish, Younes Samih, and Ahmed Abdelali. 2020. Arabic offensive language on twitter: Analysis and experiments. arXiv preprint arXiv:2004.02192.

Hala Mulki, Hatem Haddad, Chedi Bechikh Ali, and Halima Alshabani. 2019. L-hsab: A levantine twitter dataset for hate speech and abusive language. In Proceedings of the third workshop on abusive language online, pages 111-118.

Endang Wahyu Pamungkas, Alessandra Teresa Cignarella, Valerio Basile, Viviana Patti, et al. 2018. Automatic identification of misogyny in english and italian tweets at evalita 2018 with a multilingual hate lexicon. In Sixth Evaluation Campaign of Natural Language Processing and Speech Tools for Italian (EVALITA 2018), volume 2263, pages 1-6. CEUR-WS.

Georgios K Pitsilis, Heri Ramampiaro, and Helge Langseth. 2018. Detecting offensive language in tweets using deep learning. arXiv preprint arXiv:1801.04433.

Neil Salkind. 2010. Cohen's kappa. pages 188-189.

Fatima Shannaq, Bassam Hammo, Hossam Faris, and Pedro A Castillo-Valdivieso. 2022. Offensive language detection in arabic social networks using evolutionary-based classifiers learned from fine-tuned embeddings. IEEE Access, 10:75018-75039.

Zeerak Waseem and Dirk Hovy. 2016. Hateful symbols or hateful people? predictive features for hate speech detection on twitter. In Proceedings of the NAACL student research workshop, pages 88-93.
