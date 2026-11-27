> Machine translation (fr) of "A Qualitative Inquiry into the South African Language Identifier’s Performance on YouTube Comments." by Nkazimlo N. Ngcungca, Johannes Sibeko, Sharon Rudman, https://aclanthology.org/2024.rail-1.6/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Une enquête qualitative sur la performance de l'identificateur de langues sud-africaines sur les commentaires YouTube

Nkazimlo N. Ngcungca, Johannes Sibeko, Sharon Rudman

**Affiliations**  
Nkazimlo Ngcungca, Johannes Sibeko, Sharon Rudman  
Nelson Mandela University  
University Way, Summerstrand, 6019, South Africa  
, 

## Résumé

L'Identificateur de Langues Sud-Africain (SA-LID) s'est révélé être un outil précieux pour l'analyse de données dans le contexte multilingue de l'Afrique du Sud, en particulier dans les textes gouvernementaux. Cependant, son adéquation à des projets plus larges n'a pas encore été déterminée. Cet article vise à évaluer les performances du SA-LID dans l'identification de l'isiXhosa dans les commentaires YouTube dans le cadre de la méthodologie de recherche sur l'expression de l'identité culturelle à travers des stratégies linguistiques. Nous avons sélectionné 10 vidéos qui se concentraient sur la culture isiXhosa en termes de théâtre, poésie, apprentissage de la langue, culture ou musique. Les vidéos étaient principalement en anglais, comme la plupart des commentaires, mais ces derniers ont été entrecoupés d'éléments d'isiXhosa, identifiant les commentateurs comme des locuteurs d'isiXhosa. Le SA-LID a été utilisé pour identifier tous les cas d'utilisation d'isiXhosa afin de faciliter l'analyse des éléments pertinents. Suite à l'application du SA-LID à ces données, une évaluation manuelle a été réalisée pour évaluer l'efficacité de cet outil dans la sélection de tous les éléments en isiXhosa. Nos résultats révèlent des limitations significatives dans l'utilisation du SA-LID, incluant l'omission des orthographes non conventionnelles dans les langues indigènes et la mauvaise classification des langues étroitement apparentées au sein du groupe Nguni. Bien que compétent dans l'identification de l'utilisation des langues Nguni, la différenciation au sein de ce groupe linguistique s'est avérée difficile pour le SA-LID. Ces résultats soulignent la nécessité de contrôles manuels pour compléter l'utilisation du SA-LID lorsque d'autres langues Nguni peuvent être présentes dans les textes des commentaires.

## Mots-clés

Identité linguistique, isiXhosa, identification de la langue, SA-LID

## 1. Introduction

Le paysage linguistique mondial, comprenant environ 7168 langues, est dynamique et exige une exploration continue (Aitchison, 2005; Trask, 2003). Cela est particulièrement vrai à la lumière du rôle central joué par la langue en termes de vitalité sociale, culturelle, intellectuelle et politique dans toute société (Lo Bianco, 2010). Il est donc nécessaire de poursuivre les recherches afin de comprendre les caractéristiques de chaque langue ainsi que les cultures et les identités qui sont liées aux communautés linguistiques concernées.

Compte tenu de la diversité linguistique mondiale, il est compréhensible que la capacité de distinguer les langues utilisées dans un contexte particulier soit importante (Jaspers, 2015). Une telle capacité facilite le décodage du contenu du message et favorise ainsi une communication et une compréhension efficaces (Hardan, 2013). Cela est particulièrement significatif dans un pays linguistiquement diversifié comme l'Afrique du Sud (Fishman et al., 2008), où la plupart des citoyens sont multilingues (Evans, 2015; Sithole, 2015; Adelani et al., 2021).

À travers le langage, les individus non seulement communiquent, mais aussi articulent leurs origines, ce qui en fait une dimension fondamentale de l’identité culturelle. En cela, et de bien d'autres manières, le langage et l'identité sont intimement liés (Bucholtz et Hall, 2004). Cet aspect de l'usage de la langue dépasse l'expression orale pour englober également les interactions écrites, et ce de manière spécifique dans les contextes familiers qui permettent un usage plus spontané et libre de la langue – par exemple, les plateformes de médias sociaux. Un outil capable d'identifier avec précision les langues utilisées dans un texte multilingue pourrait apporter de nombreux avantages et jouer un rôle important dans une société linguistiquement diverse. Cela serait particulièrement vrai en ce qui concerne les recherches axées sur l'utilisation réelle de la langue par ceux qui sont fluides dans plus d'une langue et la manière dont leur utilisation de la langue exprime leur identité culturelle.

L'identité, dans sa forme la plus simple, est une expression de l'individualité et reflète l'unicité de chaque être humain (Buckingham, 2008). Cependant, l'identité est également influencée dans une large mesure par les groupes sociaux auxquels un individu appartient (Baxter, 2016). C'est particulièrement vrai en ce qui concerne le contexte culturel et linguistique dans lequel on naît, car c'est dans ce cadre que l'on apprend d'abord à connaître - et à exprimer - des aspects du monde (Praeg, 2014). L'identité linguistique et culturelle sont généralement confondues et l'utilisation de la langue reflète souvent ces aspects - ainsi que d'autres 'indices' sur l'identité d'un locuteur (Bucholtz et Hall, 2005). Pour cette raison, la relation entre l'utilisation de la langue et l'identité culturelle/linguistique regorge de possibilités.

La recherche sur le lien entre l'utilisation de la langue et l'identité culturelle ou linguistique dans un contexte multilingue suppose la capacité de discerner entre les langues employées par les utilisateurs de la langue dans cette communauté. C’est en effet le cas du projet de recherche dont ce document fait partie. L'étude plus large vise à étudier les stratégies linguistiques employées par les utilisateurs de la langue isiXhosa pour exprimer leur identité linguistique sur YouTube à travers l'utilisation de commentaires.

La portée de cette étude, par conséquent, souligne la nécessité d'un identifiant de langue fiable pour détecter avec précision la (les) langue(s) utilisée(s) dans un texte particulier. L'utilisation d'un tel outil devient indispensable lors de la navigation dans le vaste bassin de commentaires afin d'extraire des commentaires écrits en isiXhosa ou à code commuté entre isiXhosa et d'autres langues. L'identification des cas d'utilisation d'isiXhosa à partir de notre corpus de commentaires YouTube est donc nécessaire afin de délimiter les données sur lesquelles notre étude se concentrera.

Cet article vise à évaluer la fiabilité de l'identificateur de langues sud-africaines (Puttkammer et al., 2016) lorsqu'il est appliqué à un corpus de commentaires YouTube pour déterminer les langues utilisées. Les sections suivantes de cet article fournissent une brève revue de la littérature en termes de concepts clés dans la Section 2, un aperçu de notre méthodologie pour la collecte de données dans la Section 3 et l'analyse ainsi qu'un résumé de nos résultats dans la Section 4. Le document se termine par une discussion de nos conclusions et recommandations dans la section 5.

## 2. Contexte

## 2.1. La langue isiXhosa

Bien qu'il y ait entre 24 et 30 langues parlées en Afrique du Sud (Finlayson et Madiba, 2002), la constitution de la République d'Afrique du Sud en reconnaît 12 comme langues officielles (République d'Afrique du Sud, 1996, 2023). Ces langues officielles sont généralement regroupées en six groupes linguistiques, notamment : (i) la langue des signes sud-africaine, (ii) le groupe sotho-tswana, qui comprend le sesotho, le setswana et le sepedi, (iii) le groupe sotho-makua-venda, qui comprend le tshivenḓa, (iv) le groupe germanique occidental, qui comprend l'afrikaans et l'anglais, (v) le groupe nguni-tsonga, qui comprend le xitsonga, et (vi) le groupe nguni, qui comprend l'isiZulu, le siswati, le siNdebele et l'isiXhosa.

Le groupe linguistique Nguni occupe une position importante en tant que plus grand groupe linguistique en Afrique du Sud. IsiXhosa, la deuxième langue Nguni la plus importante en Afrique du Sud (Wheeler, 2018), est principalement parlée dans les provinces du Cap oriental et du Cap occidental. Notamment, il est également officiellement reconnu au Zimbabwe (République du Zimbabwe, 2021). Selon Wheeler (2018), l'isiXhosa a beaucoup en commun avec l'isiZulu en termes de leurs racines linguistiques. En fait, comme discuté plus loin dans la section 4.3, isiXhosa démontre des liens linguistiques étroits et une intelligibilité mutuelle avec d'autres langues du groupe Nguni (Dyers, 2000). De plus, isiXhosa se distingue par son utilisation des clics, une fonctionnalité présente dans seulement 0,5% des langues du monde (Brenzinger et Shah, 2023), y compris quelques langues bantoues. Ces clics sont représentés par l'utilisation de trois consonnes : /c, q, et x/ (Nogwina et al., 2013 ; Gxowa-Dlayedwa, 2015, 2018 ; Wheeler, 2018).

## 2.2. Identification des langues

La première étape de la compréhension du texte écrit consiste à déterminer la langue dans laquelle il est écrit (Babhulgaonkar et Sonavane, 2020). Divers outils d'identification de la langue sont développés à cette fin, dans le but de discerner la ou les langues présentes dans le texte (Jauhiainen et al., 2024). Notez que ces identificateurs de langue sont conçus pour englober à la fois la parole et les textes écrits. Cependant, en raison des différences inhérentes entre le texte écrit, composé de caractères discrets, et la parole, qui implique un signal continu reposant sur des caractéristiques acoustiques, différentes méthodes de traitement du langage naturel sont traditionnellement utilisées pour le texte et la parole, ce qui entraîne un chevauchement méthodologique limité entre les deux (Murthy et Kumar, 2006; Ambikairajah et al., 2011).

Aux fins de cette discussion, nous nous concentrons spécifiquement sur les identifiants de langue pour les textes écrits. L'identification de la langue du texte consiste à analyser les caractéristiques linguistiques écrites, y compris les n-grammes de caractères et les modèles de fréquence des mots. Ce processus analytique utilise souvent des modèles statistiques et des algorithmes d’apprentissage automatique (Nezhadi et al., 2017).

Traditionnellement, les êtres humains sont considérés comme les identificateurs de langue les plus précis (Deshwal et al., 2020). Malheureusement, leur capacité à détecter les langues est limitée par leur répertoire linguistique. Ainsi, les limites de la dépendance aux humains pour l'identification de la langue deviennent évidentes lorsque l'on considère les quelque 7168 langues estimées dans le monde (Al-Jarf et al., 2022), ou les douze langues officielles en Afrique du Sud. En termes simples, les humains sont incapables de détecter les langues qui sont en dehors de leurs répertoires linguistiques actuels.

Par conséquent, davantage d'approches indépendantes des humains sont nécessaires pour la tâche d'identification des langues. Au fil du temps, des approches informatiques employant des algorithmes sur mesure et des structures d'indexation ont été développées pour distinguer l'utilisation des langues sans intervention humaine (Calvo et al., 2017). Cette évolution inclut l'utilisation de techniques avancées telles que les réseaux de neurones artificiels (Talpur et O'Sullivan, 2020) et les approches de traitement automatique des langues (TAL) (Saji et al., 2022), qui sont intégrées dans les outils d'identification de la langue.

p03-01.png

Figure 1: Une capture d'écran du SA-LID.

## 2.3. Outils d'identification de la langue

L'introduction des identifiants linguistiques automatiques constitue une avancée précieuse en détection de langue. La tâche principale d’un outil d’identification de la langue est d’analyser un texte parlé ou écrit donné et de générer une prédiction de la langue dans laquelle le texte est parlé ou écrit (Navrátil, 2006; Bergsma et al., 2012; Solorio et al., 2014). Ce processus comprend l'évaluation de la probabilité que chaque mot du texte fourni appartienne à une ou plusieurs des langues de la bibliothèque de l'outil (Lui et Baldwin, 2012). La langue identifiée est déterminée par la probabilité la plus élevée, initiant une compétition entre les modèles de langage pour déterminer la correspondance la plus probable pour l'échantillon entier. Comme les humains, les identifiants linguistiques automatiques s'appuient également sur des bibliothèques (Agarwal et al., 2023). De cette manière, les outils automatiques doivent être entraînés en utilisant différentes langues et ne pourront pas détecter de nouvelles langues qui ne figurent pas dans leurs bibliothèques existantes.

Dans cet article, comme indiqué dans la section 1, nous procédons à une évaluation qualitative de l’identifiant linguistique sud-africain (ci-après SA-LID). Le SA-LID a été conçu pour classer un texte dans l'une des 11 langues écrites officielles d'Afrique du Sud, soit au niveau du document, soit au niveau de la ligne (Puttkammer et al., 2018). Le SA-LID a été entraîné à l’aide de corpus de textes gouvernementaux obtenus dans le cadre du projet Text du National Centre for Human Language Technology (NCHLT) et recueillis dans le cadre d’une collaboration entre le ministère sud-africain des Arts et de la Culture et le Centre for Text Technology (Puttkammer et al., 2018).

Le SA-LID utilise l'extraction de caractéristiques, identifiant des modèles spécifiques à la langue grâce à l'analyse des n-grammes de caractères, allant de bigrams à 6-grammes. Le modèle a été entraîné en utilisant le classificateur Multinomial Naive Bayes, intégrant des échantillons d'entraînement étiquetés et l'extracteur de caractéristiques sélectionné. Ces composants permettent collectivement au modèle de distinguer les langues efficacement en se basant sur les caractéristiques extraites. Lors de l'étape suivante de classification de texte, le classificateur entraîné est appliqué aux entrées de texte, résultant en une liste de langues probables classées par leurs probabilités respectives. La détermination finale de la langue est réalisée en sélectionnant la langue avec la probabilité la plus élevée, basée sur la considération par le modèle des motifs et caractéristiques appris lors du processus d'apprentissage, garantissant une identification précise de la langue dans le texte donné.

p04-01.png

Tableau 1 : Statistiques vidéo (classées par année de sortie) avec totaux

## 2.4. Recherches connexes

Des recherches antérieures ont exploré l'application de l'identification de la langue spécifiquement aux textes isiXhosa (Kyeyune, 2015). Dans leur étude, Kyeyune (2015) a utilisé des corpus de l'Agence de gestion des ressources linguistiques et a employé la bibliothèque Java de catégorisation de texte pour extraire des n-grammes afin d'identifier l'isiXhosa à l'aide d'un modèle de langage à n-grammes. L'étude menée par Duvenhage et al. (2017) a examiné l'utilisation d'un classificateur naive Bayes pour une identification précise des groupes de langues. De plus, ils ont intégré un classificateur basé sur un lexique pour différencier la langue sud-africaine spécifique dans laquelle le texte est composé. En outre, dans son travail, Duvenhage (2019) introduit un classificateur hiérarchique qui combine des approches bayésiennes naïves et des approches lexicales pour l’identification linguistique en texte court (LID). Cette approche s'avère particulièrement bénéfique pour les langues sous-dotées.

Dans cet article, nous examinons la fiabilité du SA-LID pour évaluer son utilisabilité dans la détection de l'isiXhosa à partir des commentaires YouTube, en employant une approche qualitative pour notre discussion.

## 3. Méthodologie

Un total de dix vidéos ont été sélectionnées sur YouTube en utilisant une variété de termes de recherche prédéterminés tels que: (i) amaXhosa ase South Africa, (ii) Introduction to the Xhosa culture (iii) The History of isiXhosa language, (iv) The history of isiXhosa culture, (v) Clicks used in isiXhosa music, and (vi) isiXhosa language-use in South Africa. Le processus de sélection des vidéos était basé sur la pertinence par rapport au titre de l'étude plus large, ainsi que sur des preuves de l'utilisation d'éléments linguistiques qui identifiaient les commentateurs comme isiXhosa.

Nous avons utilisé l'API YouTube pour extraire les commentaires des 10 vidéos sélectionnées pour notre étude. Ce processus impliquait de spécifier les identifiants vidéo du contenu choisi et d'extraire les commentaires associés. L'API a facilité l'extraction de commentaires textuels et d'emojis. Nous avons exclu des informations telles que les détails de l'utilisateur, les horodatages et d'autres informations.

La collecte des données a été réalisée le 19 janvier 2024. Nous avons identifié des vidéos qui avaient été téléchargées plus d'un an avant notre enquête. En conséquence, nous ne nous attendions pas à une augmentation des nouveaux commentaires sur les vidéos.

## 3.1. Nettoyage des données

Au cours du processus de nettoyage des données, nous avons abordé la présence de caractères inattendus en les remplaçant par une ponctuation pertinente. Par exemple, nous avons transformé (' ) en apostrophe (′ ), ce qui a entraîné des modifications pour un total de 2371 + 83 instances. De plus, les occurrences de (") ont été remplacées par (“) et (”), avec un total de 730 erreurs identifiées et rectifiées. En outre, les instances de (< 3) ont été corrigées en <3, avec douze occurrences traitées. Enfin, nous avons supprimé les sauts de ligne qui étaient indiqués par (< br >) car nous avions besoin que les commentaires soient comptés comme un seul et ne soient pas séparés.

Cette étude a utilisé l'API YouTube Data pour extraire systématiquement les commentaires et les réponses des vidéos YouTube spécifiées à l'aide des identifiants de vidéo associés. Les identifiants de vidéo sont fournis dans le Tableau 1. Une clé API a été configurée pour l'authentification, et une approche systématique a été adoptée pour récupérer les commentaires et les réponses pour chaque vidéo. Le script a parcouru la liste des identifiants vidéo, en utilisant l'API YouTube Data pour récupérer les commentaires par lots de 100, avec une prise en charge de la pagination pour gérer des ensembles de données plus importants. Les commentaires et réponses récupérés ont été traités et organisés dans un DataFrame de pandas pour chaque vidéo, facilitant ainsi l'analyse ultérieure.

L'ensemble de données comprenait initialement 6885 lignes. Cependant, ce chiffre a été réduit après l'élimination des lignes en double. les lignes composées uniquement de signes de ponctuation (comme les points d'interrogation), les guillemets fermants (indiquant la fin de citations des lignes précédentes) et les cas impliquant des points, des nombres et d'autres doublons. En fin de compte, notre analyse est fondée sur un ensemble de données englobant 6573 lignes, y compris les commentaires texte et emoji. L'aperçu des vidéos et des comptes de commentaires est fourni dans le Tableau 1.

p05-01.png

Tableau 2 : Résultats tenant compte de différents niveaux de confiance.

L'étude a priorisé la confidentialité des utilisateurs et a respecté les conditions d'utilisation de la plateforme YouTube. Aucune information personnellement identifiable n'a été collectée et les données ont été utilisées exclusivement à des fins de recherche.

## 3.2. Analyse des données

Nous avons considéré sept niveaux de confiance disponibles via l'Identificateur de Langue (à savoir 40 %, 50 %, 60 %, 70 %, 80 %, 90 % et 99 %) afin d'évaluer la cohérence des résultats. En fin de compte, notre discussion est basée sur les résultats du paramètre de confiance par défaut pour l'identification de la langue, c'est-à-dire une confiance de 50%. Les résultats des analyses aux différents niveaux de confiance sont présentés au tableau 2.

Le SA-LID utilise un fichier ou un dossier d'entrée, et les types de fichiers acceptés sont les fichiers .txt. Il sort ensuite dans un fichier journal ou dans un dossier. Les niveaux d'identité comprennent le niveau de document et le niveau de ligne. Il est important de noter que lorsque l'option de niveau de ligne est sélectionnée, le paramètre de sortie est défini par défaut sur l'option "Copier/Écrire dans le dossier". Une capture d'écran de l'interface est illustrée à la Figure 1. Les fichiers de sortie classent les phrases, de sorte que chaque fichier de sortie inclut uniquement les phrases identifiées comme étant dans la langue spécifiée. Les noms des fichiers de sortie ajoutent le code de langue comme préfixe au nom de fichier original. Par exemple, lorsque vous utilisez le nom de fichier d'origine pour un ensemble de données bilingue pour l'anglais et l'isiZulu, dataset.txt, le SA-LID affichera zu.dataset.txt et en.dataset.txt.

## 4. Analyse qualitative des erreurs

En évaluant les performances de SA-LID sur notre corpus YouTube (identifié pour notre projet plus large sur les identités linguistiques des amaXhosa), nous avons utilisé une analyse qualitative des erreurs. Notre analyse était basée sur le réglage de confiance par défaut, spécifiquement le niveau de confiance de 50 % (voir le Tableau 2 pour les résultats de SA-LID qui reflète les différents niveaux de confiance de 40 % à 99 %).

## 4.1. La catégorie incertaine

Le SA-LID a rencontré 339 commentaires qu'il a trouvés incertains. Après examen, nous avons identifié quelques raisons de l'incertitude. L'incertitude provenait principalement de l'identification des emojis et du jargon peu familier, comme 'wow' et 'yeah', ainsi que des acronymes tels que 'lol' et 'omg'. Nous supposons que de tels mots n'étaient pas inclus dans les données de développement du SA-LID.

Ensuite, un défi notable est apparu lorsque nous avons réalisé que le SA-LID rencontrait des difficultés à catégoriser avec précision la langue en présence de fautes d'orthographe. Par conséquent, un nombre important de commentaires se sont retrouvés dans la catégorie incertaine. Par exemple, un commentaire sous la catégorie incertaine présentait le mot mal orthographié 'qween,' qui s'écrit correctement 'queen.' Ces exemples illustrent que lorsque les mots sont mal orthographiés, il devient plus difficile pour le SA-LID d'identifier avec précision les langues. Cela souligne l'importance critique d'une orthographe précise pour que le SA-LID fonctionne efficacement dans la catégorisation des langues.

Troisièmement, des cas notables de systèmes d'écriture inattendus ont été observés. Par exemple, les données contenaient des commentaires en japonais, en russe et en arabe. De tels systèmes d'écriture ne sont pas officiels en Afrique du Sud et, par conséquent, ils ne sont pas censés être identifiés à l'aide du SA-LID.

Nous avons également noté que certains commentaires en anglais ont également été classés comme incertains. Par exemple, considérez le commentaire :

p06-01.png

Nous ne sommes pas en mesure de rendre compte de ces résultats. Cependant, de telles occurrences soulèvent des questions quant à savoir si la majorité des mots dans de tels commentaires étaient absents de la bibliothèque de langues utilisée par l'identificateur.

## 4.2. Commentaires multilingues

Idéalement, le SA-LID, tel que décrit précédemment, assignera la langue en fonction de la probabilité la plus élevée. Comme exemple, considérez la phrase ci-dessous:

(b) Awume kancane wena. uShaka uhlanganaphi nokubaleka kwamaXhosa. Ehamba nabelungu. Babuya Kuphi? Asibafuni iningi lethu Kwazulu KwaZulu. Loyalt to nothing asibafuni.

Le SA-LID a classé cette phrase sous isiZulu car elle contient 15 mots isiZulu bien qu'elle contienne également trois mots anglais, dont l'un est mal orthographié.

De plus, nous avons observé que le SA-LID montre une préférence pour les langues sud-africaines autochtones lorsqu'un nombre égal de mots issus de plusieurs langues est présent dans le même commentaire. Pour illustrer, considérez le commentaire suivant classé sous les commentaires isiXhosa:

(c) This woman is talking sh\%t... lo othi xa ungenamgidi awuyndoda... mxfm.... The only part I like is lena athi yimisebenzi yakho ebonakalisa ubudoda.

Dans cet exemple, le terme 'sh%t' n'est pas reconnu comme anglais en raison de l'inclusion de la ponctuation. Lors de la tokenisation, le mot est divisé en trois jetons, ce qui le rend moins susceptible d'être identifié comme un mot anglais valide. De plus, le terme 'mxfm' est un mot mal orthographié. Par conséquent, il n'y a que dix mots anglais dans le commentaire. De même, le mot isiXhosa 'awuyndoda' est mal orthographié, en tant que tel, il y a aussi dix mots isiXhosa. Ainsi, le commentaire contient un nombre égal de mots en anglais et en isiXhosa, mais malgré cela, le SA-LID a identifié le commentaire comme étant en isiXhosa, ce qui illustre une préférence pour l’isiXhosa.

Dans des circonstances plus extrêmes, le SA-LID a identifié des commentaires à code commuté qui sont principalement en anglais sous des langues autochtones telles que isiXhosa. Pour illustrer, considérez l'exemple ci-dessous :

(d) Singabantu abanye. Xhosas from Zim moved to Zim from the Eastern Cape with Cecil John Rhodes, Ndicelumenywa.

Ce commentaire à code commuté montre une utilisation prédominante de l'anglais, entrecoupée de trois mots isiXhosa. La classification de cette phrase comme isiXhosa renforce notre inférence que le SA-LID tend à favoriser les langues autochtones lors de la catégorisation des textes à code commuté.

Notez que le SA-LID n'a pas de catégorie pour les phrases qui sont multilingues. Cela est particulièrement problématique dans le contexte des médias sociaux multilingues sud-africains. C'est-à-dire qu'il y a besoin d'une catégorie supplémentaire en termes de ces phrases considérées comme "multilingues" (plutôt que de les assigner à l'un des deux groupes linguistiques présents dans la phrase). La capacité d'identifier l'utilisation de plus d'une langue dans un seul texte assure efficacement un alignement avec l'utilisation réelle de la langue. Cependant, le SA-LID identifie actuellement au moins une langue à partir du commentaire et attribue ensuite une étiquette linguistique plutôt que de noter la phrase comme 'multilingue'. Néanmoins, cette capacité à classifier les textes à code commuté est un atout important pour notre étude qui se concentre sur la façon dont amaXhosa articule leur identité linguistique.

Notre objectif dans cet article était d'étudier la capacité du SA-LID à identifier les commentaires en isiXhosa. Dans l'ensemble, le SA-LID a pu identifier des cas d'utilisation de l'isiXhosa, y compris des phrases qui sont purement en isiXhosa et celles qui sont en alternance codique.

Dans l'étude plus large sur les identités linguistiques, nous espérons également identifier et analyser les stratégies utilisées par les commentateurs multilingues dans leurs interactions sur YouTube en tant que plateforme de médias sociaux. Par conséquent, l'identification précise de l'isiXhosa grâce au SA-LID revêt une importance particulière pour nos objectifs de recherche, facilitant l'exclusion des commentaires ne contenant pas de contenu en isiXhosa.

## 4.3. Intelligibilité mutuelle

Dans notre analyse, nous avons observé des défis pour le SA-LID dans la distinction entre les langues similaires du même groupe linguistique. Par exemple, l'isiZulu et l'isiXhosa partagent certaines caractéristiques, permettant aux locuteurs d'une langue de comprendre l'autre en raison de leurs dialectes apparentés.

Bien qu'il existe des similitudes dans le vocabulaire découlant de leur origine bantoue commune, les mots spécifiques diffèrent entre isiXhosa et isiZulu. Le tableau ci-dessous fournit un exemple illustratif :

Malgré ces distinctions, le SA-LID a rencontré des difficultés et a mal identifié certains textes écrits en isiZulu comme isiXhosa. Par exemple, considérez l'exemple suivant:

p07-01.png

(e) Ngiyalithanda isiko lamaXhosa, thanks for this content bhudi''

Dans cet exemple, le terme 'ngiyalithanda' est d'origine isiZulu, tandis que l'équivalent en isiXhosa serait 'ndiyalithanda'. Nous soupçonnons que la confusion a pu survenir en raison de l'inclusion du terme 'lamaXhosa' dans la phrase. Néanmoins, le terme 'isiko' peut être identifié dans l'une ou l'autre des deux langues. De plus, des exemples tels que :

p07-02.png

Le premier exemple a été identifié comme étant du isiNdebele, tandis que le deuxième exemple a été identifié comme étant du Siswati. Bien que ces identifications puissent être correctes, les mêmes phrases pourraient être identifiées comme d'autres langues du groupe Nguni. Par exemple, bien que l'utilisation du mot 'ezakuthi' dans le premier exemple exclut l'isiZulu, qui serait 'ezakithi', il peut être identifié comme étant l'isiXhosa. Cependant, le deuxième exemple pourrait être isiZulu à cause du mot 'phansi', dont l'équivalent en isiXhosa est orthographié 'phantsi'. Notez que les dialectes locaux peuvent en réalité identifier ces langues comme l'une ou l'autre du groupe en fonction des influences du contact linguistique. Néanmoins, ces exemples démontrent l'intelligibilité mutuelle des langues. De plus, cela illustre qu'un contrôle manuel approfondi est nécessaire pour distinguer entre les langues Nguni avant de commencer une analyse officielle, car le SA-LID peut être trompé par les similitudes linguistiques.

## 4.4. Identités linguistiques et culturelles supposées

En analysant les commentaires, nous avons observé un large éventail de langues employées par les commentateurs, y compris l'alternance codique entre les langues sud-africaines autochtones ainsi que des occurrences inattendues de japonais, de russe et d'arabe. Nous en avons déduit que les personnes qui utilisent à la fois des phrases monolingues et multilingues exprimaient simultanément leurs pensées et leurs identités culturelles. En nous appuyant sur les travaux de chercheurs comme Bucholtz et Hall (2004) et d'autres qui explorent la relation complexe entre la langue et l'identité, nos résultats ont suggéré que les commentateurs situaient stratégiquement leurs identités linguistiques et culturelles par leur utilisation de la langue.

Néanmoins, nous reconnaissons la nature intrinsèquement multilingue du monde, où les individus peuvent apprendre des langues au-delà de celles parlées à la maison. Selon Kinginger (2004), lorsque des individus parlent et apprennent une nouvelle langue, ils adoptent simultanément une nouvelle identité ou s'engagent dans la reconstruction de celle existante. Ce concept est illustré par l'exemple de Johanson Botha (2009) d'un homme anglais apprenant isiXhosa. Lorsqu'il parle isiXhosa, il devient bruyant, ce qui cause de l'embarras à sa femme. Cette intensité vocale, qui n'est pas communément associée à la culture occidentale, est stéréotypiquement liée à la culture isiXhosa, dépeignant la construction des amaXhosa comme assertifs ou bruyants. Par conséquent, nous comprenons que pour déterminer de manière définitive si quelqu'un s'identifie comme isiXhosa ou toute autre langue, une enquête plus approfondie (par exemple la réalisation d'entretiens) serait impérative.

Dans ce contexte, l'investigation principale de notre étude plus large portera sur la réalisation d'entretiens pour confirmer les identités linguistiques. Cela n'était cependant pas nécessaire pour cet article, car l'objectif était uniquement d'évaluer la précision de SA-LID lorsqu'il est appliqué à un corpus de commentaires YouTube.

## 5. Conclusion

Dans cet article, nous explorons l'utilisation de l'identification automatique de la langue à l'aide du South African Language Identifier (SA-LID) pour discerner les langues au sein d'un corpus de commentaires YouTube. Cette étude fait partie d'un projet plus large visant à découvrir les stratégies linguistiques employées par les locuteurs isiXhosa pour exprimer leur langue et leurs identités culturelles dans les commentaires YouTube. À mesure que les plateformes numériques continuent de façonner les schémas de communication, la compréhension des identités linguistiques devient cruciale pour favoriser une représentation inclusive et précise. Pour faciliter cela, il est nécessaire de disposer d'une identification précise de la langue dans les textes multilingues. Ainsi, le contexte de notre étude plus large nous a conduits à évaluer la fiabilité du SA-LID pour identifier toute utilisation d'éléments de la langue isiXhosa dans les commentaires pertinents que nous avons extraits de YouTube. La question qui sous-tendait notre recherche, telle que reflétée dans la section 1, portait sur la question de savoir si nous pouvions nous fier aux résultats d'identification de la langue générés par l'utilisation du SA-LID pour identifier avec précision toutes les instances d'utilisation d'isiXhosa.

Notre analyse de la SA-LID révèle à la fois des forces et des défis. L'outil démontre sa compétence dans l'identification des langues utilisées dans les commentaires multilingues, démontrant sa polyvalence dans la capture de l'utilisation dynamique du langage au sein de la communauté amaXhosa sur YouTube. Cet aspect nous amène à conclure que la SA-LID peut effectivement être employée de manière efficace dans des situations où deux langues coexistent ou où il y a alternance codique, mettant en avant ses capacités robustes en catégorisation des langues.

Cependant, des défis surgissent, particulièrement dans les cas d'intelligibilité mutuelle entre des langues étroitement apparentées comme l'isiXhosa et les autres langues nguni. Cela met en évidence la nature complexe de l'identification de la langue et, par conséquent, demande une exploration plus approfondie.

D'autres défis rencontrés avec cet outil comprennent les incertitudes liées aux emojis, à l'argot, à l'orthographe non conventionnelle et aux erreurs d'orthographe. Cela souligne la nécessité d'un perfectionnement continu des outils d'identification de la langue pour prendre en compte des expressions linguistiques diverses. Dans le contexte de notre corpus, les écritures non latines dans l'ensemble de données ont compliqué davantage l'identification de la langue car elles sont inattendues dans le contexte sud-africain.

Nos résultats contribuent au discours en cours sur l'utilisation de la langue et l'identité dans les espaces numériques, offrant un aperçu des méthodologies qui peuvent être utilisées dans d'autres recherches. La mauvaise identification des langues, telle que notée dans cette étude, ouvre la voie à de futures études pour explorer comment le choix des mots ou de la structure des phrases dans un texte peut potentiellement confondre un identificateur de langue. Dans cette étude, nous n'avons pas approfondi les complexités grammaticales ou les structures de phrases; notre objectif principal était de déterminer la capacité du SA-LID à identifier avec précision l'utilisation de isiXhosa à partir de commentaires écrits sur YouTube. Nous reconnaissons que des problèmes potentiels peuvent avoir été causés par des variations dans les étapes de prétraitement. Plus précisément, des processus différents peuvent avoir été utilisés pour la tokenisation, la normalisation du texte et le traitement des caractères spéciaux par rapport à ceux utilisés dans l'entraînement du SA-LID.

## 6. Références bibliographiques

Ife Adebara, AbdelRahim Elmadany, Muhammad Abdul-Mageed, and Alcides Alcoba Inciarte. 2022. Afrolid: A neural language identification tool for african languages. arXiv preprint arXiv:2210.11744.

David Ifeoluwa Adelani, Jade Abbott, Graham Neubig, Daniel D'souza, Julia Kreutzer, Constantine Lignos, Chester Palen-Michel, Happy Buzaaba, Shruti Rijhwani, Sebastian Ruder, et al. 2021. Masakhaner: Named entity recognition for african languages. Transactions of the Association for Computational Linguistics, 9:1116-1131.

DOSULÁFRICA. 2020. Constitution of the republic of south africa, 1996. As adopted, 704:705.

Milind Agarwal, Md Mahfuz Ibn Alam, and Antonios Anastasopoulos. 2023. Limit: Language identification, misidentification, and translation using hierarchical models in 350+ languages. arXiv preprint arXiv:2305.14263.

Jean Aitchison. 2005. Language change. In The Routledge Companion to Semiotics and Linguistics, pages 111-120. Routledge.

Reima Al-Jarf et al. 2022. Text-to-speech software for promoting efl freshman students' decoding skills and pronunciation accuracy. Journal of Computer Science and Technology Studies, 4(2):19-30.

Eliathamby Ambikairajah, Haizhou Li, Liang Wang, Bo Yin, and Vidhyasaharan Sethu. 2011. Language identification: A tutorial. IEEE Circuits and Systems Magazine, 11(2):82-108.

Arun Babhulgaonkar and Shefali Sonavane. 2020. Language identification for multilingual machine translation. In 2020 International Conference on Communication and Signal Processing (ICCSP), pages 401-405. IEEE.

Judith Baxter. 2016. Positioning language and identity: Poststructuralist perspectives. The Routledge handbook of language and identity, pages 34-49.

Kenneth R Beesley. 1988. Language identifier: A computer program for automatic natural-language identification of on-line text. In Proceedings of the 29th annual conference of the American Translators Association, volume 47, page 54.

Shane Bergsma, Paul McNamee, Mossaab Bagdouri, Clayton Fink, and Theresa Wilson. 2012. Language identification for creating language-specific twitter collections. In Proceedings of the second workshop on language in social media, pages 65-74.

Matthias Brenzinger and Sheena Shah. 2023. A typology of the use of clicks. Stellenbosch Papers in Linguistics Plus, 67(1):59-77.

Mary Bucholtz and Kira Hall. 2004. Language and identity. A companion to linguistic anthropology, 1:369-394.

Mary Bucholtz and Kira Hall. 2005. Identity and interaction: A sociocultural linguistic approach. Discourse studies, 7(4-5):585-614.

David Buckingham. 2008. Introducing identity. MacArthur Foundation Digital Media and Learning Initiative.

Rafael A Calvo, David N Milne, M Sazzad Hussain, and Helen Christensen. 2017. Natural language processing in mental health applications using non-clinical texts. Natural Language Engineering, 23(5):649-685.

Deepti Deshwal, Pardeep Sangwan, and Divya Kumar. 2020. A language identification system using hybrid features and back-propagation neural network. Applied Acoustics, 164:107289.

Bernardt Duvenhage. 2019. Short text language identification for under resourced languages. arXiv preprint arXiv:1911.07555.

Bernardt Duvenhage, Mfundo Ntini, and Phala Ramonyai. 2017. Improved text language identification for the south african languages. In 2017 Pattern Recognition Association of South Africa and Robotics and Mechatronics (PRASA-RobMech), pages 214-218.

Charlyn Dyers. 2000. Language, identity and nationhood: Language use and attitudes among Xhosa students at the University of the Western Cape, South Africa. Ph.D. thesis, University of the Western Cape.

John Edwards. 2009. Language and identity: An introduction. Cambridge University Press, New York.

Moyra Sweetnam Evans. 2015. Language use and language attitudes in multilingual and multicultural south africa. Heritage and exchanges: Multilingual and intercultural approaches in training context, pages 43-62.

Rosalie Finlayson and Mbulungeni Madiba. 2002. The intellectualisation of the indigenous languages of South Africa: Challenges and prospects. Current issues in language planning, 3(1):40-61.

Joshua A Fishman, Monica Barni, and Guus Extra. 2008. Mapping linguistic diversity in multicultural contexts. Mouton de Gruyter.

Ntombizodwa Gxowa-Dlayedwa. 2018. Investigating click clusters in isixhosa syllables. South African Journal of African Languages, 38(3):317-325.

Ntombizodwa Cynthia Gxowa-Dlayedwa. 2015. Ukufundisa izicuku zeziqhakancu emagameni. Per Linguam: a Journal of Language Learning= Per Linguam: Tydskrif vir Taalaanleer, 31(3):32-48.

Abdalmaujod A Hardan. 2013. Language learning strategies: A general overview. Procedia-Social and Behavioral Sciences, 106:1712-1726.

Jürgen Jaspers. 2015. Modelling linguistic diversity at school: the excluding impact of inclusive multilingualism. Language Policy, 14:109-129.

Tommi Jauhiainen, Marco Lui, Marcos Zampieri, Timothy Baldwin, and Krister Lindén. 2019. Automatic language identification in texts: A survey. Journal of Artificial Intelligence Research, 65:675-782.

Tommi Jauhiainen, Marcos Zampieri, Timothy Baldwin, and Krister LindÚn. 2024. Introduction to language identification. In Automatic Language Identification in Texts, pages 1-17. Springer.

Otto Jespersen. 1922. Language: Its Nature, Development, and Origin. Allen and Unwin.

Liz Johanson Botha. 2009. 'them and us': Constructions of identity in the life history of a trilingual white south african. African Identities, 7(4):463-476.

Celeste Kinginger. 2004. Alice doesn't live here anymore: Foreign language learning and identity reconstruction. Negotiation of identities in multilingual contexts, 21(2):219-242.

Michael J Kyeyune. 2015. Isixhosa search engine development report. Technical report, University of Cape Town.

Joseph Lo Bianco. 2010. The importance of language policies and multilingualism for cultural diversity. International Social Science Journal, 61(199):37-67.

Marco Lui and Timothy Baldwin. 2012. langid. py: An off-the-shelf language identification tool. In Proceedings of the ACL 2012 system demonstrations, pages 25-30.

Marco Lui and Timothy Baldwin. 2014. Accurate language identification of Twitter messages. In Proceedings of the 5th workshop on language analysis for social media (LASM), pages 17-25.

Thembinkosi Mtonjeni. 2013. An investigation of discriminatory language used in communicating with South Africans born in Tanzania and Zambia. Ph.D. thesis, Stellenbosch: Stellenbosch University.

Kavi Narayana Murthy and G Bharadwaja Kumar. 2006. Language identification from small text samples. Journal of Quantitative Linguistics, 13(01):57-80.

Jirı Navrátil. 2006. Automatic language identification. Multilingual speech processing, pages 233-272.

Mohammad M Alyan Nezhadi, Majid Forghani, and Hamid Hassanpour. 2017. Text language identification using signal processing techniques. In 2017 3rd Iranian Conference on Intelligent Systems and Signal Processing (ICSPIS), pages 147-151. IEEE.

Mnoneleli Nogwina, Zelalem Shibeshi, and Zoliswa Mali. 2013. Towards developing a stemmer for the isixhosa. In WIP. SATNAC Conference.

Bonny Norton. 2010. Language and identity. Sociolinguistics and language education, 23(3):349-369.

Jacobus Christiaan Oosthuysen. 2016. The grammar of isiXhosa. African Sun Media.

Leonhard Praeg. 2014. A report on Ubuntu. University of KwaZulu-Natal Press Pietermaritzburg.

Martin Puttkammer, Roald Eiselen, Justin Hocking, and Frederik Koen. 2018. Nlp web services for resource-scarce languages. In Proceedings of ACL 2018, System Demonstrations, pages 43-49.

Republic of South Africa. 1996. Constitution of the Republic of South Africa. Department of Justice, Pretoria.

Republic of South Africa. 2023. Constitution Eighteenth Amendment Bill. Department of Justice and Correctional Services, Pretoria.

Republic of Zimbabwe. 2021. The Constitution of Zimbabwe. Veritas, Harare.

Lourdes C Rovira. 2008. The relationship between language and identity. the use of the home language as a human right of the immigrant. REMHU-Revista Interdisciplinar da Mobilidade Humana, 16(31):63-81.

Ami Katherine Saji, Laura Morales, and Meredith Winn. 2022. Feasibility report on setting up a collection on questionnaires realting to Ethnic and Migrant Minorities in the European Question Bank (Version 1.0). Ph.D. thesis, Sciences Po, CEE.

NE Sithole. 2015. The functional viability of Indigenous African Languages in South Africa: challenges and prospects of their survival. Ph.D. thesis, University of Zululand.

Thamar Solorio, Elizabeth Blair, Suraj Maharjan, Steven Bethard, Mona Diab, Mahmoud Ghoneim, Abdelati Hawwari, Fahad AlGhamdi, Julia Hirschberg, Alison Chang, et al. 2014. Overview for the first shared task on language identification in code-switched data. In Proceedings of the First Workshop on Computational Approaches to Code Switching, pages 62-72.

Bandeh Ali Talpur and Declan O'Sullivan. 2020. Multi-class imbalance in text classification: A feature engineering approach to detect cyberbullying in Twitter. Informatics, 7(4):52-74.

Robert Lawrence Trask. 2003. Language: the basics. Routledge.

Mihoko Wheeler. 2018. Phonetic analysis of clicks, plosives and implosives of isixhosa: A preliminary report. Florida Linguistics Papers, 5(2).

Marcos Zampieri. 2016. Pluricentric languages: automatic identification and linguistic variation. Ph.D. thesis, Universität des Saarlandes, Sao Paulo.

## 7. Références des ressources linguistiques

Martin Puttkammer and Justin Hocking and Roald Eiselen. 2016. NCHLT South African Language Identifier. South African Centre for Digital Language Resources. PID https://repo.sadilar.org/handle/20.500.12185/350.
