> Machine translation (fr) of "Kallaama: A Transcribed Speech Dataset about Agriculture in the Three Most Widely Spoken Languages in Senegal" by Elodie Gauthier, Aminata Ndiaye, Abdoulaye Guissé, https://aclanthology.org/2024.rail-1.2/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kallaama: Un ensemble de données de discours transcrits sur l'agriculture dans les trois langues les plus parlées au Sénégal

Elodie Gauthier, Aminata Ndiaye, Abdoulaye Guissé

**Affiliations**  
Elodie Gauthier, Aminata Ndiaye, Abdoulaye Guissé  
Orange Innovation, Jokalante SARL, École Polytechnique de Thiès  
Lannion, France, Dakar, Sénégal, Thiès, Sénégal  
, , 

## Résumé

Ce travail s'inscrit dans le cadre du projet Kallaama, dont l'objectif est de produire et de diffuser des corpus de langues nationales pour le développement de technologies de la parole, dans le domaine de l'agriculture. À l'exception du wolof, qui bénéficie de quelques données langagières pour le traitement automatique des langues, les langues nationales du Sénégal sont largement ignorées par les fournisseurs de technologies du langage. Cependant, de telles technologies sont essentielles à la protection, à la promotion et à l'enseignement de ces langues. Kallaama se concentre sur les 3 principales langues parlées par les Sénégalais : le wolof, le pulaar et le sereer. Ces langues sont largement parlées par la population, avec environ 10 millions de locuteurs sénégalais natifs, sans compter ceux à l'extérieur du pays. Cependant, elles restent sous-dotées en termes de données lisibles par machine qui peuvent être utilisées pour le traitement automatique et les technologies linguistiques, et ce d'autant plus dans le secteur agricole. Nous publions un jeu de données de discours transcrits contenant 125 heures d'enregistrements, sur l'agriculture, dans chacune des langues mentionnées ci-dessus. Ces ressources sont spécifiquement conçues pour des fins de reconnaissance automatique de la parole, y compris les approches traditionnelles. Pour construire de telles technologies, nous fournissons des corpus textuels en wolof et en pulaar, ainsi qu'un lexique de prononciation contenant 49 132 entrées issues du jeu de données wolof.

## Mots-clés

jeu de données de parole, langues sénégalaises, contexte peu doté, agriculture

## 1. Introduction

Alors que les technologies de l’information et de la communication sont essentielles pour que beaucoup prospèrent, 6 milliards de personnes n’ont toujours pas accès au haut débit, 4 milliards n’ont pas accès à Internet et 2 milliards n’ont pas accès à un téléphone mobile (Zelezny-Green et al., 2018). Les dernières estimations de l'Institut de la statistique de l'UNESCO (2023) indiquent environ 213 millions d'adultes (population de plus de 15 ans) qui ne savaient ni lire ni écrire en 2022, dans la région de l'Afrique subsaharienne, y compris près de 49 millions de jeunes (15-24 ans). Au Sénégal, l'ANSD (2021) rapporte un taux global d'analphabétisme de 48,2 %, atteignant 62,7 % dans les zones rurales.

Le taux d'alphabétisation est lié à la langue officielle d'un pays. Au Sénégal, la langue officielle est le français mais est rarement parlée par la population dans leur vie quotidienne. Les Sénégalais utilisent principalement leurs langues maternelles ou le wolof, comme langue véhiculaire, pour communiquer. La Banque mondiale (2021) rapporte que près de 65 % des Sénégalais qui n'utilisent pas Internet sont freinés par un manque d'alphabétisation numérique. Cela est en partie dû à la disponibilité limitée (voire inexistante) de contenus dans la langue qu'ils parlent. Actuellement, il y a un grave manque de contenu accessible pour ceux qui ne parlent pas les langues officielles en Afrique. Le développement de technologies et d'outils pour les langues les plus parlées permettrait à une plus grande partie de la population sénégalaise d'utiliser les smartphones et les applications, et d'accéder à des contenus encore indisponibles aujourd'hui.

Des travaux de recherche comme ceux de Medhi et al. (2011) et le succès de la communication vocale sur WhatsApp montrent que le développement de services vocaux conversationnels dans les langues locales est un moyen crédible et prometteur de rendre les services plus accessibles. Aker (2011) a également suggéré à cette époque que la combinaison d'une approche vocale avec des informations accessibles par le biais de réponses à des questions courantes des agriculteurs surmonterait les défis de l'alphabétisation dus aux modes de texting courants. Pour progresser dans ce domaine, des systèmes robustes de reconnaissance automatique de la parole doivent être conçus pour ces langues. Bien que les technologies de reconnaissance automatique de la parole (ASR) tendent à être matures dans les langues les plus couramment trouvées sur le Web, il existe encore très peu de solutions dédiées aux langues africaines.

Au Sénégal, les langues wolof, sereer, pulaar, joola, malinké et soninké sont reconnues comme langues nationales dans la Constitution, mais aucune de ces six langues ne bénéficie sérieusement des avancées technologiques majeures générées par l'IA. Des efforts ont été faits pour développer des ressources et technologies de la parole en wolof (voir section 4), mais aucune ressource n'est disponible pour la Reconnaissance Vocale Continue de Grand Vocabulaire (LVCSR) en pulaar ni en sereer. Pourtant, les langues wolof, pulaar et sereer sont parlées dans plus des deux tiers du pays sénégalais (Leclerc, 2023).

L’agriculture est la principale source de revenus de 2 milliards de personnes dans le monde (Zelezny-Green et al., 2018). Au Sénégal, 55 % de la population est impliquée dans la chaîne de valeur agricole, y compris l'agriculture familiale, l'élevage et la pêche.

Aujourd'hui, les technologies numériques aident les agriculteurs à développer leurs activités en leur permettant de se positionner sur les places de marché, en leur fournissant des informations sur les prix des matières premières et en leur donnant accès à des services financiers adaptés. Néanmoins, de telles solutions ne conviennent toujours pas aux agriculteurs, en particulier compte tenu de la prévalence de la communication écrite et de l'utilisation d'une langue qu'ils ne parlent pas, lors de l'interaction avec ces interfaces.

Avec l'intention de développer des solutions vocales, cet ensemble de données est destiné à combler le vide dans ce domaine.

Contribution de l'article. Cet article présente le jeu de données créé à partir de données de parole produites et annotées pendant le projet Kallaama, ainsi que des données textuelles collectées sur le web, dans le but de développer des solutions vocales dans les langues locales.

Plan de l'article. Après une introduction, nous présentons le projet dans la section 2. Les langues ciblées sont décrites à la section 3 et les ressources existantes dans ces langues sont énumérées à la section 4. La section 5 présente la méthodologie de collecte, tandis que la section 6 donne des détails sur l'ensemble de données. Ensuite, nous présentons quelques-unes des périodes difficiles que nous avons rencontrées pendant le projet dans la section 7 et nous mentionnons certaines des limites qui en ont résulté dans la section 8. Enfin, la section 9 conclut et donne quelques perspectives sur l'utilisation de Kallaama.

## 2. Le projet Kallaama

"Kallaama" signifie "parole" (du latin "verbum") en wolof.

## 2.1. Description

Comme mentionné dans la section 1, aucune ressource n'est disponible pour construire des systèmes LVCSR en Pulaar ni en Sereer. Seule une petite quantité existe en Wolof, mais aucune ne se concentre sur l'agriculture. Le projet Kallaama vise à combler cette lacune en produisant plusieurs dizaines d'heures de données audio localisées transcrites et annotées, pour entraîner des systèmes de reconnaissance automatique de la parole dans trois des principales langues nationales du Sénégal : le wolof, le sereer et le pulaar.

Le choix de ces 3 langues a été guidé par le nombre de locuteurs dans le pays. Il y a environ 5 millions de locuteurs natifs de wolof, 3,5 millions de locuteurs natifs de pulaar et 1,3 million de locuteurs natifs de sereer (Leclerc, 2023), qui représentent les trois quarts de la population totale. Ce sont les 3 langues les plus parlées au Sénégal, et elles sont également parlées à travers plusieurs frontières.

Les données produites sont des énoncés naturels et spontanés, avec un vocabulaire en contexte, conçues pour développer des modèles de reconnaissance automatique de la parole à grand vocabulaire, en particulier dans le domaine agricole. La reconnaissance automatique de la parole est la principale barrière technologique à surmonter pour développer des services vocaux destinés aux personnes peu ou pas alphabétisées. L'agriculture joue un rôle important dans les activités rurales au Sénégal. Elle est l'un des piliers de l'économie sénégalaise, estimée à contribuer à 15 % du PIB en 2022 comme mentionné dans l'Enquête Agricole Annuelle de la DAPSA (2023), et une grande proportion de la population en dépend directement.

## 2.2 Cas d'utilisation

Plusieurs entreprises et start-ups locales du secteur informatique se lancent de plus en plus dans la production de solutions d’IA qui prennent en compte les langues nationales. Il s'agit essentiellement de solutions de traduction automatique de texte ou de traduction de la parole, leur permettant d'élargir leur clientèle et d'offrir leurs services en français ou en anglais à des utilisateurs qui préfèrent le wolof, le pulaar, le sereer ou d'autres langues. Des initiatives sérieuses ont également été notées dans le développement de chatbots et de voicebots multilingues. Cependant, en raison de la rareté des données en langage naturel dans les langues locales, la plupart d'entre elles s'appuient sur des données synthétiques provenant de systèmes de traduction automatique. De plus, les modèles d'IA ne traitent encore que marginalement l'agriculture. Pourtant, les solutions numériques pour la vulgarisation agricole couvrent un éventail de besoins, notamment les services de diffusion d'informations, les outils de gestion de petite entreprise, l'entraînement et le renforcement des compétences, ainsi que les services financiers (Zelezny-Green et al., 2018).

Le jeu de données Kallaama contribue à la croissance du secteur agricole au Sénégal. Il peut renforcer la sécurité alimentaire en fournissant des informations vitales directement dans la langue maternelle des agriculteurs, grâce au développement de services vocaux tels que des conseils agricoles et financiers personnalisés aux petits exploitants. Par ailleurs, les transcriptions produites augmentent les jeux de données disponibles dans les langues sénégalaises et stimuleront les développements basés sur l'IA pour l'agriculture, comme la mise en place de bases de connaissances, d'assistants conversationnels, de systèmes de recommandation et de systèmes d'aide à la décision.

## 3. Se concentrer sur les langues ciblées

Les langues wolof, pulaar et sereer sont parlées par près de 80 % des locuteurs natifs au Sénégal. Cissé (2005) indique 43,7 % de locuteurs natifs du wolof, 23,2 % de locuteurs natifs du pulaar et 14,8 % de locuteurs natifs du sereer. Ces trois langues appartiennent au phylum Niger-Congo et font partie du groupe familial nord-atlantique. Elles sont sans tons, contrairement à la plupart des langues nigéro-congolaises. En ayant un statut national, les trois langues ont reçu un système d'orthographe officiel. Elle est basée sur les caractères latins.

p03-01.png

Figure 1: Carte des principales langues parlées au Sénégal (Leclerc, 2023)

## 3.1. Wolof

Le wolof est de loin la langue la plus parlée au Sénégal. C'est la langue maternelle d'environ 5 millions de locuteurs. Le wolof parlé au Sénégal est identifié par le nom de code de la langue ISO 639-3 "wol". En étant parlé par près de 90 % de la population, le wolof est la langue nationale de communication, dépassant largement le français en termes d'usage (Cissé, 2005). Sur les réseaux sociaux, les commentaires sont principalement rédigés en wolof en réponse à des articles rédigés en français. L'Assemblée nationale propose un service de traduction car 20 % des députés ne parlent pas français. De plus, des chaînes de télévision et de radio privées ont développé des programmes en wolof (OIF, 2022).

## 3.2. Pulaar

Le pulaar fait partie des langues Fulfulde. Le fulfuldé est parlé dans environ 20 pays d'Afrique subsaharienne, par près de 30 millions de personnes, de l'Afrique de l'Ouest à l'Afrique centrale. "Pulaar" désigne la variante parlée au Sénégal. Le pulaar est la langue maternelle d'environ 3,5 millions de Sénégalais, ce qui en fait la deuxième langue la plus parlée du pays. Les locuteurs du pulaar à travers le pays ne se comprennent pas toujours. Des différences claires dans les accents et les lexiques doivent être notées. Il peut y avoir des emprunts et des influences mutuelles entre les accents. Le Pulaar parlé au nord, considéré comme la référence au Sénégal, utilisé dans les zones de Fouta Toro et de Ferlo, est différent de celui parlé au sud, dans les zones de Fouta Djallon et de Boundou, et du centre (particulièrement dans Saloum). Les activités économiques pratiquées par les Peuls dans ces régions sont à l'origine de ces différences, sans oublier la mobilité des populations et les échanges interculturels.

## 3.3. Sereer

La langue sereer est parlée par environ 1 million de locuteurs, ce qui en fait la troisième langue parlée au Sénégal. Plusieurs dialectes sont parlés au Sénégal (Renaudier, 2012), et la compréhension mutuelle entre les locuteurs de sereer est parfois difficile. La majorité des enregistrements proposés dans ce jeu de données sont en variante Sereer-Siin (code ISO 639-3 "srr"), qui est parlée dans une région située entre la Petite Côte (au sud de Dakar) et la Gambie, et qui est considérée comme le Sereer "standard". Néanmoins, selon l'endroit où l'enregistrement a été fait, il peut être dans une autre variante. L'alphabet officiel est basé sur la variante standard Sereer-Siin mais est très peu utilisé pour l'écriture. La langue est fondamentalement parlée.

## 4. Ressources linguistiques existantes pour le wolof, le pulaar et le sereer

Plus de matériel (dans n'importe quel domaine d'application, de la description linguistique à l'apprentissage des langues) peut être trouvé en wolof, en tant que langue véhiculaire. La situation est très différente avec le pulaar et le sereer : en tant que langues vernaculaires, elles sont principalement parlées et rarement écrites. La présence de Wolof en ligne est prépondérante contre Pulaar et Sereer, reflétant sa place dans la société sénégalaise.

Pour construire des solutions basées sur la voix, très peu de jeux de données ont été publiés jusqu'à présent en wolof. Les ensembles de données sur la parole de Pulaar et de Sereer sont presque inexistants, exception faite des initiatives présentées ci-dessous. Avant ce travail, le plus grand ensemble de données de paroles transcrites en wolof était celui collecté par Gauthier et al (2016). Il consiste en 18 heures de phrases lues validées.

Wolof est également proposé dans FLEURS, un jeu de données multilingue constitué de traductions de phrases en anglais qui ont été lues par des locuteurs natifs (Conneau et al., 2023).

Nelson (2022) a mené un projet de grande collecte de discours en wolof consistant en 519 heures d'enregistrements audio, dont 6,45 heures ont été transcrites jusqu'à présent. Parmi les 2 018 transcriptions en wolof, nous avons compté 608 traductions en pulaar, 571 en sereer mais seulement 156 enregistrements audio traduits dans les deux langues.

Enfin, le dernier travail significatif que nous avons trouvé impliquant les trois langues sénégalaises abordées dans cet article, fait partie d'un projet de collecte de données de mots isolés pour la détection de mots-clés, mené par la communauté sénégalaise Galsen AI (Djiba, 2021).

## 5. Méthodologie de collecte

## 5.1 Enregistrements audio et transcriptions

Enregistrements audio. Les enregistrements portent sur l'agriculture. Les personnes enregistrées sont des agriculteurs, des conseillers agricoles et des gestionnaires d’entreprises agroalimentaires. Toutes les données sont produites par Jokalante, une entreprise sénégalaise spécialisée dans la diffusion d'informations sur l'agriculture dans les langues locales. Types d'enregistrements comprennent des programmes de radio interactifs, des groupes de discussion, des messages vocaux, des messages push et des interviews. Par conséquent, la parole spontanée prévaut. La qualité de l'audio peut varier en fonction du type de programme. Par exemple, les groupes de discussion sont faits à l'extérieur et des bruits peuvent donc surgir de l'extérieur (voitures, vent, oiseaux, voix supplémentaires). Dans les programmes radio, de la musique et des jingles apparaissent parfois également. Une sélection de ces enregistrements a été transcrite, résultant en plus d'une centaine d'heures de parole spontanée dans les trois langues ciblées (voir la section 6.1).

Transcriptions. Pour produire la forme écrite des enregistrements audio, nous avons demandé aux transcripteurs de suivre les règles éditées par le Centre de Linguistique Appliquée de Dakar (CLAD), qui coordonne la standardisation orthographique des langues nationales au Sénégal. Malgré cette précaution, il était très difficile d'obtenir une forme standard dans l'écriture des langues concernées par le présent travail. Comme le mentionne Robert (2022) pour le wolof, les règles officielles sont rarement utilisées par la population (par exemple, les annonces sont souvent écrites avec des formes alternatives), même si une orthographe officielle est établie depuis 1971. La même situation se présente pour le Pulaar et le Sereer, et cela est principalement dû au fait que les langues nationales sont très peu enseignées dans le système éducatif. De plus, le travail de transcription impliquait des enregistrements de parole spontanée, rendant le travail d'autant plus complexe et chronophage. La tâche de transcription a été réalisée par 3 étudiants en linguistique, dans la langue qu'ils parlent nativement. Ils ont utilisé l'outil dédié Transcriber pour accomplir la tâche. Le travail a pris 9 mois pour être achevé. Ensuite, 3 experts qualifiés, spécialisés dans les langues des transcriptions, ont passé en revue une sous-partie des transcriptions produites par les étudiants. Dans un premier temps, nous avions pour objectif de vérifier la moitié des transcriptions produites, pour chaque langue. Mais c'était un objectif ambitieux étant donné la complexité et la pénibilité de la tâche requise. Néanmoins, près de 13 heures de transcription de parole ont été vérifiées en wolof, 11 heures en pulaar et 11 heures en sereer dans le délai imparti.

## 5.2. Collecte de textes

Les langues sénégalaises sont peu dotées en ressources. Très peu de données dans les langues ciblées ont été exhumées. Tout d'abord, aucun document sur l'agriculture n'a été trouvé. Depuis les observations de Renaudier (2012) qui a mentionné que la presse locale est majoritairement écrite en français, avec seulement quelques journaux disponibles en wolof, et qu’aucune presse n’était disponible à Sereer à l’époque, la situation reste inchangée.

La plupart des sources écrites trouvées étaient en wolof. Le corpus wolof que nous distribuons est composé des livres, des articles Wikipédia (dump à partir de l’été 2023), du premier livre du Nouveau Testament, de deux blogs historiques sur Hubert Fichte (un romancier allemand) et Cheikh Ahmadou Bamba (un théologien), des articles en ligne accessibles au public dans les journaux. Des données open source issues du challenge du Programme Algorithme et Solution (PAS), organisé par l’Institution des Algorithmes du Sénégal (IAS), ont également été incluses. Les données écrites en wolof peuvent également être récupérées à partir de projets de recherche open source (en particulier, le projet ALFFA et Masakhane). Nous choisissons de ne pas les ajouter à notre version car ils sont déjà propres et faciles à obtenir.

Nous avons trouvé une quantité très faible d'écrits en Pulaar. Nous avons étendu nos recherches de données pour inclure les variétés parlées dans les régions frontalières du Sénégal, et avons finalement trouvé plus de sites web écrits dans cette langue, en particulier en Mauritanie.

À propos du sereer, bien qu'il s'agisse de la troisième langue la plus parlée au Sénégal, la collecte de données écrites pose un défi significatif. Malgré des recherches approfondies, aucun contenu textuel n'a été trouvé sur les sites web consultés. Nous sommes même allés dans les deux principales bibliothèques universitaires de linguistique et de langues de Dakar (l'Université Cheikh Anta Diop (UCAD) et l'Institut Fondamental d'Afrique Noire (IFAN)), et n'avons trouvé que deux livres écrits en Sereer. Nous avons tout de même essayé d'appliquer certains outils de reconnaissance optique des caractères (OCR) pour le convertir en textes numériques, mais les caractères spéciaux existant dans Sereer n'ont pas été reconnus.

Nous avons délibérément exclu tous les réseaux sociaux afin d’éviter les biais qui pourraient être induits dans les modèles futurs. Par exemple, Dione (2016) a observé, dans son étude sur l'utilisation en ligne des langues wolof et sereer, que la plupart des utilisateurs d'Internet utilisent le français et le wolof alternativement dans un seul message. De plus, le wolof et le pulaar sont les deux seules langues nationales présentes sur les sites web consultés par l'auteur, tandis que le sereer est également son sujet d'étude. De plus, l'auteur indique que les utilisateurs d'Internet utilisent le wolof pour critiquer, pour afficher des choix politiques et des complicités, et pour insulter. Pour toutes ces raisons, nous avons préféré ne pas collecter de données textuelles auprès des forums.

Ces corpus textuels peuvent être utilisés pour entraîner des modèles de langage monolingues et multilingues sur le thème de l'agriculture. Les modèles de langage sont impliqués dans diverses tâches de NLP, telles que le rescoring ASR ou la modélisation de la compréhension/génération du langage naturel (NLU/NLG).

## 5.3. Lexique

Nous n’avons pas trouvé de dictionnaire avec la prononciation des mots pour le pulaar et le sereer, donc nous n’avons pas pu entraîner un modèle graphème-phonème (G2P) pour ces langues. Pour le wolof, nous avons utilisé le lexique du projet ALFFA pour entraîner un modèle G2P, afin de générer une transcription phonétique de l'ensemble de discours en wolof. Le modèle G2P a été entraîné en utilisant Phonetisaurus. Les symboles phonétiques générés sont dans l'alphabet X-SAMPA. Nous fournissons le modèle G2P et le lexique dans un dépôt GitHub. Il peut être utile d'entraîner des modèles ASR basés sur HMM.

## 6. Détails de l'ensemble de données

Le jeu de données est publié sous la licence CC-BY 4.0. Toutes les données textuelles (transcriptions, corpus de textes, lexique) sont disponibles sur GitHub. Les enregistrements audio sont hébergés sur les plateformes OpenSLR et Zenodo.

## 6.1. Enregistrements audio et transcriptions

Les fichiers audio ont été convertis en 16 kHz, 16 bits, canal mono, pour s'adapter au format standard utilisé dans ASR. Les transcriptions sont fournies sous le format original Transcriber (.trs), ainsi que dans le format stm NIST (.stm), car celui-ci est plus souvent utilisé par les boîtes à outils ASR.

Les détails concernant les jeux de données de discours sont donnés dans le tableau 1.

p05-01.png

Tableau 1 : Aperçu du corpus de discours de Kallaama

Le grand nombre de changements de tour de parole que l'on peut observer dans le tableau 1 pour l'ensemble Wolof s'explique par une plus grande quantité d'entretiens et de groupes de discussion, impliquant plus de personnes dans la conversation.

La sous-représentation de la voix des femmes dans ce corpus est regrettable, mais elle reflète les entretiens menés et la présence des femmes dans l'agrobusiness.

Plus de détails sont donnés à l'annexe B, où nous décrivons également la sous-partie vérifiée de l'ensemble de données.

## 6.2. Collecte de textes

L'ensemble des textes collectés en wolof, avant l'application des méthodes de post-traitement, totalisait 3 244 642 mots. L'ensemble des textes recueillis à Pulaar, avant l'application des méthodes de post-traitement, totalisait 5 462 823 mots. Comme nous l'avons dit dans la sous-section 5.2, aucune donnée écrite n'a été trouvée à Sereer.

Au cours du post-traitement, les caractères non romains ont été supprimés des textes bruts. La ponctuation a été conservée pour donner aux utilisateurs une plus grande liberté, selon l'utilisation qui sera faite du corpus. Enfin, une nouvelle ligne a été ajoutée après chaque marque de ponctuation finale (le point, le point d'exclamation et le point d'interrogation) tandis que des espaces ont été ajoutés entre les autres types de marques typographiques (comme la virgule, les deux-points, le point-virgule, le tiret, la parenthèse, etc.

Après ces étapes de post-traitement, le corpus de texte en wolof contient 1 140 508 mots, tandis que le corpus de texte en pular contient 742 024 mots. Les détails sont donnés dans le tableau 2 et le tableau 3, pour le wolof et le pular respectivement. Cette réduction considérable du contenu reflète la présence significative d’autres langues dans les écrits, en particulier le français et l’arabe (nous n’avons pas appliqué d’algorithme d’identification de la langue, mais nous avons supprimé de nombreux caractères de l’alphabet arabe). Nous avons également trouvé un assez grand nombre de caractères cyrilliques dans les textes recueillis de Wikipédia.

Les données compilées amélioreront la compréhension de l'utilisation des langues et renforceront la capacité à développer des outils linguistiques plus robustes. Il servira également de référence d'entraînement pour les modèles de langage.

p06-01.png

Tableau 2: Détails sur les textes web scrapés en wolof, après nettoyage

p06-02.png

Tableau 3: Détails sur les textes web scrapés en Pulaar, après nettoyage

## 6.3. Lexique

Dans le but de construire des systèmes ASR, nous fournissons également un dictionnaire de prononciation pour le wolof. Il contient 49 132 entrées phonétisées issues de transcriptions de discours et de textes. Les entrées peuvent aussi être des emprunts, comme des mots français, car l'alternance codique est fréquente au Sénégal et apparaît donc dans le jeu de données de parole. Les entrées sont phonétiquement transcrites avec les caractères X-SAMPA.

## 7. Difficultés rencontrées

Les transcripteurs ont eu du mal à écrire certains des mots en raison de l'absence de certains caractères sur les claviers standards, tels que ɓ (b-hook), ƈ (c-hook), ɗ (d-hook), ƥ (p-hook), ƭ (t-hook) qui existent dans l'orthographe des langues africaines, en particulier en Pulaar et en Sereer. L'application de clavier visuel SenLangEdit, spécialement développée pour écrire les langues nationales du Sénégal, a encore facilité le processus de transcription.

## 7.1 Règles d'écriture

Il a été particulièrement difficile de trouver des experts qualifiés pour vérifier la qualité des transcriptions produites. Nous demandons à chaque expert de faire un rapport de ses évaluations. Pour Wolof, l'expert a déclaré que le travail était assez facile. Pour terminer le travail dans le temps imparti, il a réussi à vérifier près de 13 heures de transcriptions de discours et la conclusion était très encourageante. Il a noté une très bonne qualité de travail, avec très peu d'erreurs. En revanche, les deux experts qualifiés engagés pour examiner les transcriptions à Pulaar et Sereer ont déclaré un travail fastidieux. En dépit de cela, ils parviennent à vérifier environ 11 heures d'enregistrements audio chacun. Ils ont signalé de nombreuses erreurs et nous ont avertis que leur travail consisterait davantage à réécrire qu'à une simple vérification et correction. Nous détaillons les principales erreurs trouvées en annexe A.

En fait, cette évaluation de la qualité des transcriptions indique principalement un manque de compétences rédactionnelles plutôt qu'un manque d'attention à la qualité de la transcription. Il s'agit du résultat d'une tentative de transcrire une langue qui a traditionnellement été non écrite. Tant que ces langues ne seront pas enseignées pour être écrites, il n'y aura pas de bonnes productions écrites.

## 7.2. Dialectes parlés

Le fait que les enregistrements soient produits dans tout le Sénégal a rendu le travail de transcription beaucoup plus complexe, en raison des plusieurs variations dialectales du Pulaar et du Sereer qui sont parlées dans le pays (voir sections 3.2 et 3.3). Nous avons sélectionné les enregistrements audio au tout début du projet, avant l'embauche des transcripteurs. Mais les transcripteurs Pulaar ou Sereer ont parfois écouté des programmes enregistrés qu'ils ne comprenaient pas en raison d'une conversation dans un dialecte qu'ils ne parlent pas. Par conséquent, nous avons dû mener une deuxième campagne de collecte d'enregistrements qui a pris en compte les dialectes spécifiques parlés par les transcripteurs.

Ce processus met également en évidence la nécessité de prendre en compte les nuances sémantiques entre les variétés dialectales, en particulier lorsqu'on traite d'un sujet particulier (dans ce cas, l'agriculture, mais cela pourrait être la santé ou la finance) et illustre les défis inhérents à la préservation précise et exhaustive de la signification des mots dans ces langues.

## 8. Limites

Le travail de transcription est une tâche très difficile, et produire une transcription de la parole spontanée, lorsque des événements se chevauchent, parfois dans des environnements bruyants, est encore plus difficile. Ajoutez à cela l'utilisation de logiciels spécialisés qui ne sont pas familiers aux travailleurs, avec des claviers qui ne sont pas adaptés à l'écriture de la langue, et le début du travail devient encore plus fastidieux.

Malgré les soins de tous les travailleurs impliqués dans ce projet, cet ensemble de données contient des erreurs de transcription, et l'orthographe utilisée peut ne pas correspondre exactement aux normes attendues, comme indiqué dans la section 7. Un seul transcripteur a été sélectionné par langue pour effectuer le travail de transcription. Peut-être que certaines erreurs auraient pu être évitées si davantage de transcripteurs avaient fait le travail (à supposer que cela soit possible, car le nombre de personnes qualifiées est très limité). Mais, en raison des coûts de production, nous avons choisi de fournir à la communauté un ensemble plus important de données transcrites plutôt que d'augmenter le nombre de transcripteurs. De cette manière, nous avons pu augmenter le nombre de sujets couverts sur l'agriculture. Un ensemble de données de parole plus important est également plus adapté aux études à grande échelle, comme la recherche phonétique et phonologique sur les langues atlantiques, un domaine où les travaux font défaut.

## 9. Conclusion et opportunités

Dans cet article, nous présentons les travaux réalisés pour créer un jeu de données de discours transcrits en wolof, pulaar et sereer, les 3 langues les plus parlées au Sénégal. Ce jeu de données comprend 55h d'enregistrements audio en wolof, 32h en pulaar et 38h en sereer, tous accompagnés de leurs transcriptions correspondantes. Nous fournissons également des corpus de textes plus génériques en wolof et en pulaar, ainsi qu'un lexique phonétique wolof avec son modèle G2P. Ces ressources peuvent être utilisées pour la mise en place de systèmes ASR traditionnels.

Comme le soulignent de nombreuses études récentes (Joshi et al., 2020; van Esch et al., 2022; Ruder et al., 2022; Adebara et Abdul-Mageed, 2022), de nombreuses langues avec de grandes populations de locuteurs sont encore sous-représentées dans les études et applications de traitement automatique du langage naturel (NLP), renforçant ainsi des inégalités telles que l'accès aux connaissances. Nous espérons que ce travail stimulera l'intérêt pour le développement d'applications qui intègrent les langues vernaculaires du Sénégal, mais aussi qu'il servira de source d'inspiration et d'encouragement pour développer des ressources similaires afin de progresser vers l'inclusion des langues dans le monde de l'IA.

Les opportunités offertes par cet ensemble de données sont nombreuses. D'un point de vue scientifique, l'ensemble de données de discours publié peut être exploité, par exemple, pour étudier les phénomènes phonétiques se produisant dans un contexte spontané, pour étudier l'interaction verbale, ou pour étudier l'impact du discours spontané et bruyant sur les systèmes de reconnaissance. D'un point de vue technique, ce jeu de données peut être utilisé pour résoudre diverses tâches d'IA, notamment la modélisation de la parole (comme la transcription automatique de la parole ou la compréhension du langage parlé), la modélisation de réponses automatiques (comme les réponses QA) et la modélisation du langage (utilisée à partir de zéro ou utilisée pour affiner un modèle multilingue pré-entraîné). D'un point de vue technologique, il peut être utilisé pour développer des systèmes de reconnaissance automatique de la parole, génériques ou spécifiques au secteur agricole, ainsi que des agents conversationnels localisés pour répondre à des questions sur des sujets agricoles liés au contexte sénégalais et dans les langues nationales.

## 10. Remerciements

Le projet Kallaama a été rendu possible grâce au soutien financier du Fonds Lacuna, le premier effort de collaboration au monde visant à financer des données étiquetées pour un impact social. Le Fonds Lacuna favorise la création, l’expansion et la maintenance d’ensembles de données étiquetés dans trois domaines ayant des besoins clés : l’agriculture, la santé et les langues.

Les auteurs aimeraient également remercier et reconnaître les linguistes et les stagiaires en science des données impliqués dans le projet.

## Notes

1 Comme l'a mentionné Creissels (2019), les langues non tonales sont principalement parlées dans les langues atlantiques de l'ouest du Sénégal et les langues bantoues de l'est du Kenya et de la Tanzanie (comme le swahili).

2 Une autre variante du wolof est parlée en Gambie, pour laquelle le code ISO est « wof ».

3 Pour chaque ensemble de données, le nombre d'enregistrements par type de programme est détaillé en annexe C.

4 http://clad.ucad.sn/

5 http://trans.sourceforge.net/

6 https://www.ias.sn/pas/

7 https://github.com/getalp/ALFFA_PUBLIC/

8 https://github.com/masakhane-io/masakhane-ner/

9 Sans distinction des variantes dialectales parlées au Sénégal.

10 https://github.com/AdolfVonKleist/Phonetisaurus/

11 https://github.com/gauthelo/kallaama-speech-dataset/

12 https://www.openslr.org/151/

13 https://zenodo.org/records/10892569/

14 https://esp.sn/senlangedit-un-clavier-virtuel-pour-la-promotion-des-langues-nationales/

15 Diouroup, Fatick, Kaffrine, Kaolack, Kebemer, Kelle, Koungheul, Louga, Matam, Ndoundour, Niodior, Nioro, Podor, Saint-Louis, Tambacound.

16 https://lacunafund.org/

## 11. Références bibliographiques

Ife Adebara and Muhammad Abdul-Mageed. 2022. Towards afrocentric NLP for African languages: Where we are and where we can go. In Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 3814-3841, Dublin, Ireland. Association for Computational Linguistics.

Jenny C Aker. 2011. Dial "A" for agriculture: a review of information and communication technologies for agricultural extension in developing countries. Agricultural economics, 42(6):631-647.

ANSD. 2021. Enquête harmonisée sur les conditions de vie des ménages (EHCVM). Technical report, Agence Nationale de la Statistique et de la Démographie (ANSD).

Mamadou Cissé. 2005. Langues, état et société au Sénégal. SudLangues. Revue électronique internationale de Sciences du langage, 5(1):99-133.

Denis Creissels. 2019. Morphology in Niger-Congo languages. In Oxford Research Encyclopedia of Linguistics.

DAPSA. 2023. Rapport de l'Enquête Agricole Annuelle (EAA) 2022-2023. Technical report, Direction de l'Analyse, de la Prévision et des Statistiques Agricoles.

Amadou Dione. 2016. Contacts et valorisation du sérère et du wolof, langues nationales du Sénégal: Pratiques langagières et usages en ligne. Ph.D. thesis, Université Grenoble Alpes (ComUE).

Pratik Joshi, Sebastin Santy, Amar Budhiraja, Kalika Bali, and Monojit Choudhury. 2020. The state and fate of linguistic diversity and inclusion in the NLP world. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 6282-6293.

Jacques Leclerc. 2023. Sénégal. L'aménagement linguistique dans le monde.

Indrani Medhi, Somani Patnaik, Emma Brunskill, SN Nagasena Gautama, William Thies, and Kentaro Toyama. 2011. Designing mobile interfaces for novice and low-literacy users. ACM Transactions on Computer-Human Interaction (TOCHI), 18(1):1-28.

OIF. 2022. La langue française dans le monde. Technical report, Organisation International de la Francophonie.

Marie Renaudier. 2012. Dérivation et valence en sereer. Variété de Mar Lodj (Sénégal). Ph.D. thesis, Université Lumière Lyon 2.

Stéphane Robert. 2022. Wolof: a grammatical sketch. In Friederike Lüpke, editor, The Oxford guide to the Atlantic languages of West Africa. Oxford University Press, Oxford.

Sebastian Ruder, Ivan Vulić, and Anders Søgaard. 2022. Square one bias in NLP: Towards a multidimensional exploration of the research manifold. In Findings of the Association for Computational Linguistics: ACL 2022, pages 2340-2354, Dublin, Ireland. Association for Computational Linguistics.

UNESCO Institute for Statistics. 2023. Education: Number of illiterates. Last consulted on 13 Feb 2024 07:49 UTC (GMT).

Daan van Esch, Tamar Lucassen, Sebastian Ruder, Isaac Caswell, and Clara Rivera. 2022. Writing system and speaker metadata for 2,800+ language varieties. In Proceedings of the Thirteenth Language Resources and Evaluation Conference, pages 5035-5046.

World Bank. 2021. World development report 2021: Data for better lives.

Ronda Zelezny-Green, Steven Vosloo, Gráinne Conole, et al. 2018. Digital inclusion for low-skilled and low-literate people: a landscape review.

## 12. Références des ressources linguistiques

Conneau, Alexis and Ma, Min and Khanuja, Simran and Zhang, Yu and Axelrod, Vera and Dalmia, Siddharth and Riesa, Jason and Rivera, Clara and Bapna, Ankur. 2023. Fleurs: Fewshot learning evaluation of universal representations of speech. 2022 IEEE Spoken Language Technology Workshop (SLT). PID https://huggingface.co/datasets/google/fleurs.

Djiba, Daouda Tandiang. 2021. Keyword Spotting with African Languages. Zenodo. PID https://doi.org/10.5281/zenodo.7561858.

Gauthier, Elodie and Besacier, Laurent and Voisin, Sylvie and Melese, Michael and Elingui, Uriel Pascal. 2016. Collecting Resources in Sub-Saharan African Languages for Automatic Speech Recognition: a Case Study of Wolof. European Language Resources Association (ELRA). PID https://hal.science/hal-01350037.

Nelson, Perry. 2022. Waxal Speech Data Resources. PID https://github.com/Waxal-Multilingual.

## A. Détails sur les erreurs de transcription de la parole

## A.1. Transcriptions en wolof

Les principales erreurs mentionnées sont:

le non-respect de certains allongements de voyelles (p. ex., le mot « mbooleem » écrit à la place de « mboolem »);

défaut de respecter la gémination des consonnes en interne et dans la position finale pour un certain nombre de mots (par exemple: "loppaalëb" au lieu de "lopaalëp");

confusion entre les consonnes plosives en position finale de certains mots (/p/ versus /b/, /k/ versus /g/).

## A.2. Transcriptions pulaar

Les principales erreurs signalées dans les transcriptions en Pulaar sont les suivantes :

p08-01.png

utilisation d'une consonne simple au lieu d'une consonne prénasale (par exemple: "jiiya" au lieu de "njiyaa");

la concaténation d'un nom et de son article (ex.: "yimɓeɓe" au lieu de "yimɓe ɓee");

confusion dans l'allongement des voyelles (par exemple : "deemowo" au lieu de "demoowo" ; "reemoɓeɓe" au lieu de "remooɓe ɓee").

## A.3 Transcriptions de Sereer

Dans les transcriptions Sereer, des erreurs phonétiques, morphologiques et syntaxiques ont été trouvées. Notamment:

consonnes pré-nasalisées ("/nd/" , "/mb/" , "/nj/" , "/ng/") utilisées à la place de consonnes glottalisées ou nasales ("ɓ" , "ɗ" , "ŋ");

allongement vocalique non écrit (« refe » au lieu de « refee », « maga a mbag o njirña » au lieu de « maaga a mbaag o njirñaa » ;

le nom et le pronom de classe sont détachés comme dans « xa qol axe » écrit « xa qola xe ».

## B. Détails des ensembles de données sur la parole

Explication des rangées du tableau 4 et du tableau 5 :

"Min (sec.)" est la durée minimale d'un fichier audio dans le jeu de données donné.

"Max (sec.)" est la durée maximale d'un fichier audio dans le jeu de données donné.

"Moyenne (sec.)" est la durée moyenne de tous les fichiers audio dans l'ensemble de données donné.

"Total audio" est la durée totale de l'ensemble audio.

"Total speech" est la durée totale de la parole de l'ensemble audio.

"Female speech" correspond à la durée totale de parole des locutrices au sein de l'ensemble audio.

"Male speech" correspond à la durée totale de parole des locuteurs masculins au sein de l'ensemble audio.

"Female speech ratio" est le pourcentage de la durée de parole des locutrices au sein de l'ensemble audio.

"Male speech ratio" est le pourcentage de la durée de parole des locuteurs masculins au sein de l'ensemble audio.

"#Turn-taking" est le nombre de changements de locuteur dans l'ensemble audio complet.

"#Files" est le nombre total d'enregistrements et de transcriptions dans l'ensemble de données vocales.

Les durées « Total speech », « Female speech », « Male speech » et « #Turn-taking » ont été calculées à partir des fichiers Transcriber (.trs). Cette information doit être traitée avec prudence, car elle dépend de l'exactitude des annotations faites par les transcripteurs. Toutes les autres informations du tableau sont calculées à partir de fichiers audio (.wav).

## B.1. Ensemble complet

Le tableau 4 donne quelques statistiques sur l'ensemble des données vocales.

p09-01.png

* extrait des annotations

Tableau 4 : Détails de l'ensemble de données de discours de Kallaama

## B.2 Ensemble vérifié

Le tableau 5 donne quelques statistiques sur la sous-partie vérifiée de l'ensemble de données vocales.

p09-02.png

* extrait des annotations

Tableau 5 : Détails sur la partie vérifiée de l'ensemble de données vocales de Kallaama

## C. Types d'enregistrements

Les enregistrements proviennent de différents types de programmes et sont évalués sur une échelle de 1 à 5 en fonction de leur complexité potentielle pour le traitement de la parole. Cette notation est subjective et prend en compte des facteurs tels que la durée de l'enregistrement, le nombre de locuteurs parlants et les conditions d'enregistrement.

Une cote de 1 indique une complexité relativement faible, tandis qu'une cote de 5 indique une complexité relativement élevée. Cet ID est le premier numéro composant le nom des fichiers.

Le tableau 6 montre le nombre d'enregistrements par type de programme, pour chaque ensemble de langues.

p10-01.png

Tableau 6: Nombre d'enregistrements par type de programme, pour chaque jeu de données linguistiques
