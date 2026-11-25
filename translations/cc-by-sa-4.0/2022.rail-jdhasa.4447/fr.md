> Machine translation (fr) of "Topic modelling to support English text selection for translation into South Africa's other official languages" by Jocelyn Mazarura, Febe de Wet, https://upjournals.up.ac.za/index.php/dhasa/article/view/4447, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## Modélisation thématique pour soutenir la sélection du texte anglais pour la traduction dans les autres langues officielles de l'Afrique du Sud

Jocelyn Mazarura, Febe de Wet

**Affiliations**  
Mazarura, Jocelyn  
Department of Statistics, University of Pretoria  
  
de Wet, Febe  
Department of Electrical and Electronic Engineering, Stellenbosch University & School of Electrical,  
Electronic and Computer Engineering, North-West  
University  


## Résumé

Des données d'entraînement appropriées sont une condition préalable au développement de techniques de traitement du langage naturel (TLN). De vastes quantités de données langagières sont généralement nécessaires pour développer des outils de TAL qui atteignent un niveau de performance à l'état de l'art. De telles ressources abondantes ne sont actuellement disponibles que dans quelques langues. Les langues restantes doivent trouver des moyens alternatifs pour devenir "NLP-enabled". L'objectif de l'étude présentée ici est de rendre davantage de données langagières disponibles pour soutenir le développement du TAL dans les langues officielles d'Afrique du Sud. Dans cet article, nous présentons l'idée de générer des données textuelles au moyen de la traduction. Nous proposons également l'utilisation de la modélisation thématique pour identifier le texte dans une langue source riche en ressources qui produira des traductions significatives dans des langues cibles sous-ressources. Plus précisément, le document décrit comment la modélisation thématique a été utilisée pour identifier les articles de Wikipédia en anglais qui devraient être traduits dans les 10 autres langues officielles de l'Afrique du Sud.

## Mots-clés

DHASA, modélisation thématique, sélection de textes, traduction, langues sous-dotées

## 1 Introduction

Les ressources nécessaires pour atteindre des performances à l'état de l'art dans les applications de traitement automatique des langues (TAL) comme la génération automatique de texte, les systèmes de questions-réponses, la reconnaissance automatique de la parole, etc. ne sont actuellement disponibles que dans quelques langues bien dotées. Les quelque 6 000 autres langues parlées dans le monde aujourd'hui doivent trouver des moyens alternatifs pour se préparer à une société future numérique dans laquelle la capacité à traiter automatiquement le langage et la parole sera un prérequis pour la participation. Des applications comme les moteurs de recherche et les robots conversationnels sont développées à partir de données textuelles, tandis que d'autres, comme les systèmes de dictée automatique, nécessitent à la fois des données textuelles et des données de parole pour être mises en œuvre. L'étude actuelle vise spécifiquement à développer des ressources textuelles adaptées à la modélisation linguistique dans les langues officielles d'Afrique du Sud.

Un certain nombre de ressources textuelles ont été développées au cours de projets précédents et sont disponibles dans le catalogue de ressources du Centre sud-africain des ressources linguistiques numériques (SADiLaR[1]). Cependant, l'ampleur des corpus textuels existants n'est pas suffisante pour mettre en œuvre une reconnaissance automatique de la parole (ASR) à grand vocabulaire. De plus, la ressource textuelle la plus étendue disponible dans toutes les langues officielles, les NCHLT Text Corpora (Eiselen & Puttkammer 2014), a été dérivée de documents publiés sur le domaine du site web du gouvernement sud-africain (*.gov.za). En conséquence, le vocabulaire et l'utilisation de la langue sont spécifiques au domaine. L'objectif du travail actuel est de développer de nouvelles ressources textuelles qui peuvent être utilisées en plus ou en combinaison avec les corpus existants. Les nouvelles données devraient idéalement représenter une diversité de domaines et contribuer à l'expansion de la lexica existante.

Une source évidente et potentiellement riche de données textuelles est le World Wide Web. Alors que de nombreuses langues ont au moins une certaine présence sur le Web, il y en a aussi beaucoup qui ne sont pas du tout représentées sur Internet. Cependant, le fait qu'une langue soit présente sur le web ne garantit pas que les données disponibles soient adaptées à la recherche en TAL. Le web-texte n'est pas non plus par défaut de bonne qualité. En outre, certains textes sur Internet sont extrêmement spécifiques à un domaine. Surtout pour les langues sous-dotées, les textes en ligne tendent à être limités aux publications religieuses ou aux documents gouvernementaux.

Une stratégie qui a été proposée pour renforcer la présence sur Internet des langues sous-représentées consiste à créer du texte en encourageant, par exemple, les locuteurs de langue maternelle à écrire des articles sur Wikipédia (Pretorius & Wolff 2020). L'approche a été couronnée de succès dans certains cas et a abouti aux premières contributions à Wikipedia dans de nombreuses langues. Malgré l'avantage de produire un texte « natif », il s'agit d'un processus lent qui, à ce jour, n'a pas produit la quantité de données textuelles requise par les méthodes d'apprentissage profond, gourmandes en données, actuellement largement utilisées dans le domaine du TAL.

Cet article propose la traduction à grande échelle comme alternative à la génération automatique de texte[2]. Malgré les différences entre les textes réels et traduits, les traductions pourraient combler l'écart entre le fait d'avoir presque aucune donnée disponible et le fait d'avoir juste assez de données pour amorcer des systèmes semi-supervisés qui peuvent contribuer au développement de ressources supplémentaires. Proposer la traduction comme moyen de générer du texte dans une langue sous-dotée implique aussi de décider ce qui doit être traduit. Beaucoup de réponses évidentes à cette question, par exemple les 100 articles les plus populaires de Wikipédia en mandarin, ne donneraient pas nécessairement un texte significatif dans d'autres langues. La recherche présentée dans cet article représente une tentative de trouver une façon systématique d'identifier le texte qui convient à la traduction et qui produirait un texte significatif dans les langues cibles. Plus spécifiquement, nous décrivons comment les articles de l'encyclopédie Wikipédia en anglais qui devraient être adaptés à la traduction dans les 10 autres langues officielles d'Afrique du Sud ont été identifiés.

## 2 Contexte

Les tentatives précédentes de traduire des tâches de TAL et des jeux de données de langues fortement dotées vers des langues sous-dotées ont rencontré divers défis liés aux différences entre la langue source et la langue cible. Par exemple, lors du développement du WordNet africain, il a été constaté que de nombreux concepts présents dans les WordNets existants n'étaient pas lexicalisés dans les langues sud-africaines (Griesel & Bosch 2020). Cette différence a été surmontée en utilisant la liste de mots africains comparatifs SIL (SILCAWL) introduite par Snider & Roberts (2004) comme guide pour ajouter de nouveaux synsets à l'African Wordnet. Cette liste se compose d'une vaste sélection de mots relatifs à diverses choses, telles que les parties du corps, les émotions et les étapes de la vie en anglais et en français. Le contenu des entrées de la liste est - dans une large mesure - lexicalisé dans les langues officielles de l'Afrique du Sud. Utiliser le SILCAWL comme point de départ présente l'avantage supplémentaire de ne pas perpétuer des ressources linguistiques biaisées culturellement et cognitivement.

Un autre exemple de ressource en TAL créée par traduction est le jeu de données FLORES, une ressource multilingue qui a été compilée pour permettre le bench-marking dans la traduction automatique en langues peu dotées et multilingue (Goyal et al. 2022). L'ensemble de données se compose de 3001 phrases traduites en - au moment de l'écriture - 200 langues, mais ce nombre ne cesse de croître. Afikaans, Sepedi, SiSwati, Xitsonga, Setswana, isiXhosa et isiZulu sont déjà inclus dans le set FLORES. Une traduction en sesotho sera bientôt publiée, suivie de l'isiNdebele et du tshivenda.

Les phrases FLORES ont été sélectionnées à partir de 842 articles de l'encyclopédie Wikipedia en anglais. Les articles ont été choisis pour représenter une large gamme de sujets, notamment le crime, les catastrophes, les divertissements, la géographie, la santé, la nature, la politique, la science, les sports et les voyages. On pourrait faire valoir que plus de traductions devraient être générées en élargissant la liste existante d'articles avec plus d'articles sur les mêmes sujets ou des sujets similaires. Cependant, les sujets ont été attribués manuellement aux phrases de la collection FLORES, ce qui signifie que l'élargissement ou la répétition du processus n'est pas possible. En outre, une inspection plus poussée de l'ensemble de données FLORES a révélé que les domaines sources, Wikinews, Wikijunior et WikiVoyage, contiennent de nombreux articles qui ne sont peut-être pas toujours pertinents dans le contexte africain et qui donneraient probablement lieu aux mêmes problèmes de lexicalisation que ceux rencontrés lors du projet African Wordnet.

Le jeu de données No Language Left Behind Seed Data (NLLB-Seed) a été créé de manière similaire aux données FLORES et comprend un ensemble de phrases de Wikipédia traduites professionnellement (NLLB Team et al. 2022). Cependant, contrairement aux données FLORES, les phrases NLLB-Seed ont été tirées de la soi-disant « liste d'articles que chaque Wikipédia devrait avoir » de Wikimedia. La liste comprend des sujets dans différents domaines de la connaissance et de l'activité humaine, similaires à ceux du SILCAWL. Les données de la NLLB-Seed se composent actuellement d'environ six mille phrases dans 39 langues. Bien que la liste puisse constituer un bon point de départ pour un vaste effort de traduction, il n'est pas prévu à l'heure actuelle qu'elle s'élargisse au fil du temps. En revanche, la méthode de modélisation thématique proposée ici pourrait générer n'importe quel nombre de phrases et pourrait même être répétée si nécessaire.

Le reste du présent document est structuré comme suit. La section 3 donne un aperçu de la modélisation thématique et la section 4 explique comment les modèles sont évalués. La section 5 décrit comment les données ont été sélectionnées pour créer un modèle de sujet Wikipédia lié au SILCAWL. Les résultats de l'enquête sont présentés dans la section 6, suivis d'une discussion dans la section 7.

## 3 Modélisation thématique

La modélisation thématique est une technique d'exploration de texte utilisée pour découvrir des thèmes latents dans de grandes collections de documents. La plupart des modèles de sujets sont non supervisés, ce qui en fait des outils puissants pour traiter des problèmes du monde réel, car les données sont généralement non étiquetées en pratique. Les modèles de sujets ont trouvé des applications dans de nombreux domaines, notamment l'analyse des sentiments (Rana et al. 2016), la classification de texte, la catégorisation de documents, la synthèse, etc. (Boyd-Graber et al. 2017).

L'allocation de Dirichlet latente (LDA) est l'un des modèles de sujets les plus populaires (Blei et al. 2003). Il s'agit d'un modèle bayésien hiérarchique à trois niveaux, dans lequel chaque document est modélisé comme un mélange fini sur un ensemble de sujets latents, où un sujet est défini comme une distribution sur les mots du vocabulaire. LDA est un modèle probabiliste génératif car il modélise l'hypothèse que chaque document est formé par le processus génératif suivant:

En supposant que le corpus contient K sujets, choisissez aléatoirement K distributions de sujets, ϕk.

2. Pour chacun des M documents du corpus, sélectionnez aléatoirement une distribution sur les sujets, θm.

3. Supposons que chaque document contient nm mots. Pour chaque mot, wmn, dans le m ème document.

a. Choisissez au hasard un sujet, à partir de la distribution sur les sujets de l'étape 2, où zmn désigne un indicateur du sujet sélectionné.

b. Choisissez au hasard un mot du sujet sélectionné en fonction de sa distribution à partir de l'étape 1.

Ce processus génératif peut être résumé graphiquement comme dans la figure 1.

LDA peut être facilement appliquée à tout ensemble de données en utilisant le package gensim[3] en Python. Les principaux extrants d'intérêt sont généralement les sujets et les distributions de sujets de chaque document. Gensim dispose également de la capacité d'identifier les distributions de sujets dans des documents non vus, une fonctionnalité utile pour classer de nouveaux documents.

## 4 Évaluation du modèle

En raison de leur caractère non supervisé, l'évaluation des modèles de sujets est une tâche difficile. Bien que certains auteurs utilisent la perplexité[4] ou la vraisemblance de retenue comme mesures de la performance des modèles de sujets, il a été démontré que de telles mesures intrinsèques de la performance du modèle ne corrèlent pas avec la compréhension humaine des sujets (Chang et al. 2009). En d'autres termes, les modèles avec de meilleurs scores de perplexité produisent souvent des thèmes moins interprétables humainement, ce qui va à l'encontre des objectifs exploratoires de la modélisation thématique. À la lumière de cela, les mesures de cohérence sont devenues plus populaires. Dans cette recherche, nous utilisons la mesure de cohérence bien connue de UMass, car elle s'est avérée bien alignée avec les évaluations humaines de la cohérence (Mimno et al. 2011). En considérant les N premiers mots d'un sujet, la cohérence UMass d'un sujet est calculée en général comme dans l'équation 1.

p04-01.png

Figure 1 : Modèle graphique pour LDA. Les cercles ombrés sont utilisés pour représenter les variables observées, tandis que les cercles non ombrés représentent les variables non observées. Les flèches représentent les dépendances entre les variables et les rectangles indiquent les structures répliquées. α et β désignent les hyperparamètres.

p04-02.png

P (wj ) désigne la probabilité que le mot wj se produise dans l'ensemble des documents d'apprentissage. P (wi, wj ) désigne la probabilité que les mots wi et wj apparaissent ensemble dans l'ensemble d'entraînement et ε désigne un paramètre de lissage. La cohérence globale pour un modèle de sujet est ensuite prise comme la moyenne de toutes les cohérences de sujet. En général, une note de cohérence plus élevée est souhaitée car elle indique une meilleure cohérence des sujets.

## 5 Processus de sélection de documents

L'objectif de cette recherche est de créer une collection de phrases pouvant être utilisées pour la recherche en TAL pour les langues sous-dotées, de manière à la fois méthodique et systématique. À cette fin, nous proposons d'utiliser la modélisation thématique comme méthode de sélection. Cette section fournit les détails du processus de sélection.

## 5.1 Entraînement au modèle thématique

Compte tenu de l'objectif de notre recherche, nous avons cherché à créer un ensemble de données qui est généralement pertinent et non spécifique au domaine en sélectionnant des phrases d'articles de Wikipédia. À cette fin, nous avons d’abord créé un ensemble de formation, basé sur des articles de divers sujets généraux. Ces thèmes généraux ont été tirés de la liste de mots comparatifs du SILCAWL présentée à la section 2. Les mots anglais de la liste ont été utilisés comme termes de recherche dans Wikipedia et les articles associés ont été récupérés sur le web. Après avoir nettoyé les données et supprimé les mots potentiellement offensants, le corpus obtenu contenait 1 698 documents avec une moyenne de 1 132 mots par document.

Un modèle thématique a ensuite été entraîné sur ces données à l'aide de gensim. Les hyperparamètres ont été appris à partir des données, mais le modèle a été exécuté pour différents nombres de sujets, K = {100,200, ..., 1000}. La moyenne des scores de cohérence pour chaque modèle est présentée dans la Figure 2. On peut voir que la cohérence n'augmente pas significativement au-delà de K = 800, ainsi K = 800 a été choisi comme le nombre idéal de sujets pour les données d'entraînement.

Le tableau 1 montre les 25 sujets principaux issus de K = 800 classés par ordre de cohérence décroissante. Il ressort clairement du tableau que le modèle thématique a permis d'aborder divers sujets, notamment la pauvreté (thème 98), la santé (thème 224) et le temps (thème 551). Notez que le choix des noms de sujets globaux est déterminé par l'utilisateur et est donc subjectif. L'ensemble complet des sujets peut être trouvé à l'adresse https://github.com/jrmazarura/wikipedia-sentence-selection.

Tableau 1 : Top 25 des sujets de la formation.

p05-01.png

p06-01.png

Figure 2: Score moyen de cohérence pour K = {100,200,..., 1000}.

## 5.2 Sélection de documents à l'aide du modèle thématique entraîné

L'étape suivante dans le processus de sélection de documents consistait à utiliser le modèle de sujet entraîné pour sélectionner des articles de Wikipédia, puis sélectionner des phrases à partir de ceux-ci. Pour chaque article de Wikipédia, le modèle a été utilisé pour déterminer la distribution des sujets et seuls les articles satisfaisant les conditions suivantes ont été conservés :

1. Le thème dominant de l'article devait figurer parmi les 500 thèmes ayant obtenu les scores de cohérence les plus élevés dans le modèle entraîné.

2. Le sujet dominant devait représenter au moins un quart de la distribution des sujets de l'article.

Le seuil de 500 sujets utilisé dans le numéro 1 a été choisi en évaluant les scores de cohérence. Selon l'inspection, l'interprétabilité des sujets semblait se détériorer sensiblement à mesure que les scores de cohérence diminuaient en dessous de -2. Les 500 premiers sujets avaient des scores de cohérence supérieurs à cette valeur. En outre, le seuil de 500 sujets a également permis de couvrir une grande variété de sujets. Choisir le seuil de 25 % utilisé dans #2 n'a pas seulement permis de garantir que le sujet constituait une part significative du sujet de l'article, mais cela était également nécessaire pour s'assurer que seuls certains des articles de Wikipédia étaient sélectionnés.

Après cette étape, la collection finale de phrases a été compilée en sélectionnant au hasard un nombre égal d'articles de chaque sujet, puis en sélectionnant au hasard une phrase de chaque article. Par exemple, pour créer une collection de 5 000 phrases, 10 articles appartenant à chacun des 500 sujets ont été sélectionnés au hasard et une phrase a été sélectionnée au hasard dans chacun des articles. Seules les phrases avec au moins 15 mots composés de 3 caractères ou plus ont été sélectionnées. Cela a été fait pour éviter de récupérer des phrases qui étaient très courtes et ne contenaient pas beaucoup d'informations.

## 6 Résultats

La sélection finale des phrases peut être trouvée à https://github.com/jrmazarura/wikipedia-sentence-selection. Le tableau 2 montre un extrait des phrases sélectionnées par la méthode proposée. D'après le tableau, il est évident que de nombreux sujets ne semblent pas être liés au contexte sud-africain ou même africain comme souhaité. Dans la sélection des articles dont les sujets dominants appartiennent à nos 500 sujets principaux, on peut constater que de nombreuses phrases traitent de sujets apparemment sans rapport.

Par exemple, considérez le sujet 218 dans le tableau 1. Ce sujet semble être lié aux grottes océaniques. Le modèle de sujet entraîné a été utilisé pour récupérer des articles connexes de Wikipédia et les titres des articles ont été enregistrés (la liste des titres est également disponible sur GitHub). Certains des articles de Wikipédia récupérés ont des titres tels que Cave, Stalactite et Stalagmite. Cependant, il y en a beaucoup plus qui semblent moins importants dans notre contexte, comme les grottes de Velebit (grottes en Croatie), Abrakurrie Cave (grottes en Australie) et Ogof Agen Allwedd (grottes au Pays de Galles) parmi beaucoup d'autres. Le modèle thématique a pu sélectionner 482 articles liés aux grottes, mais malheureusement, la plupart d'entre eux concernent des grottes spécifiques du monde entier. En fin de compte, cela signifie que l'échantillonnage de phrases aléatoires à partir de ces articles sélectionnés aléatoirement produira très probablement des phrases qui ne sont pas liées à l'Afrique du Sud. Les suivants sont des exemples de certaines des phrases liées aux grottes qui ont été sélectionnées :

"Le site archéologique de la grotte Bull Thistle est un site archéologique inscrit au Registre national des lieux historiques, situé dans le comté de Tazewell, en Virginie."

"Les Grottes de Hotton sont des grottes à spéléothèmes situées en Wallonie près de Hotton en Belgique, qui ont été découvertes en 1958 et mesurent environ 5 ou 6 km de long et 70 mètres de profondeur."

Cette observation est probablement due au fait que le modèle de sujets tente de trouver des distributions de sujets pour plus de cinq millions d'articles sur seulement 800 sujets. Il est raisonnable de supposer qu'un corpus aussi vaste est susceptible de contenir bien plus de 800 sujets. De plus, des sujets tels que le sujet de la grotte qui a été considéré comme un exemple, sont susceptibles d'avoir de nombreux sous-sujets connexes, par exemple les grottes africaines ou les grottes de glace, etc. S'il n'y a qu'un seul sujet lié aux grottes, alors tous les articles seront regroupés en un seul sujet créant une collection de nombreux articles liés aux grottes couvrant un large éventail.

## 7 Discussion & travaux futurs

Notre première tentative d’utiliser la modélisation thématique pour identifier les articles de Wikipédia qui seraient adaptés à la traduction de l’anglais vers les 10 autres langues sud-africaines a donné un ensemble extrêmement diversifié de phrases, dont beaucoup contiennent des mots qui ne sont probablement lexicalisés dans aucune des langues cibles. L'entraînement des modèles de sujets sur le SILCAWL n'était clairement pas adéquat pour éviter ce défi.

Dans la prochaine phase de la recherche, nous chercherons à trouver des critères d'élagage qui pourraient être utilisés pour "concentrer" les modèles thématiques sur un contenu plus pertinent pour le contexte sud-africain. Nous aimerions également établir une relation entre le texte sélectionné et la traduction résultante dans la langue cible afin de nous assurer que le texte pertinent et traduisible a été choisi. Une telle mesure permettra également une comparaison entre l'approche proposée du modèle thématique pour la sélection du texte et une ligne de base entièrement aléatoire.

## Notes

[1] https://repo.sadilar.org/

[2] Dans cet article, la génération automatique de texte fait uniquement référence au texte produit par des humains. La génération automatique de texte ne sera pas envisagée parce que la technique elle-même repose sur la disponibilité de données textuelles, une ressource qui n’est pas disponible dans les circonstances pertinentes à cette étude.

[3] https://radimrehurek.com/gensim/auto_examples/index.html

[4] La perplexité mesure la capacité d'un modèle à prédire de nouvelles données. Un score de perplexité faible est supposé indiquer une bonne performance du modèle.

Tableau 2 : Phrases sélectionnées de Wikipédia

p08-01.png

## Remerciements

La localisation de la plateforme Mozilla Common Voice en Afrique du Sud est soutenue par le ministère fédéral allemand de la Coopération économique et du Développement (BMZ), représenté par le projet de la GIZ FAIR Forward - Intelligence artificielle pour tous.

## Références

Blei, D. M., Ng, A. Y. & Jordan, M. I. (2003), 'Latent dirichlet allocation', Journal of machine Learning research 3(Jan), 993-1022.

Boyd-Graber, J., Hu, Y., Mimno, D. et al. (2017), 'Applications of topic models', Foundations and Trends® in Information Retrieval 11(2-3), 143-296.

Chang, J., Gerrish, S., Wang, C., Boyd-Graber, J. & Blei, D. (2009), 'Reading tea leaves: How humans interpret topic models', Advances in neural information processing systems 22.

Eiselen, R. & Puttkammer, M. (2014), Developing text resources for ten South African languages, in 'Proceedings of the Ninth International Conference on Language Resources and Evaluation (LREC'14)', European Language Resources Association (ELRA), Reykjavik, Iceland, pp. 3698-3703. URL: http://www.lrec-conf.org/proceedings/lrec2014/pdf/1151 Paper.pdf

Goyal, N., Gao, C., Chaudhary, V., Chen, P.-J., Wenzek, G., Ju, D., Krishnan, S., Ranzato, M., Guzman, F. & Fan, A. (2022), 'The FLORES-101 evaluation benchmark for low-resource and multilingual machine translation', Transactions of the Association for Computational Linguistics 10,522-538.

Griesel, M. & Bosch, S. (2020), Navigating challenges of multilingual resource development for under-resourced languages: The case of the African wordnet project, in 'Proceedings of the first workshop on Resources for African Indigenous Languages', pp. 45-50.

Mimno, D., Wallach, H., Talley, E., Leenders, M. & McCallum, A. (2011), Optimizing semantic coherence in topic models, in 'Proceedings of the 2011 conference on empirical methods in natural language processing', pp. 262-272.

NLLB Team, Costa-jussà, M. R., Cross, J., Çelebi, O., Elbayad, M., Heafield, K., Heffernan, K., Kalbassi, E., Lam, J., Licht, D., Maillard, J., Sun, A., Wang, S., Wenzek, G., Youngblood, A., Akula, B., Barrault, L., Gonzalez, G. M., Hansanti, P., Hoffman, J., Jarrett, S., Sadagopan, K. R., Rowe, D., Spruit, S., Tran, C., Andrews, P., Ayan, N. F., Bhosale, S., Edunov, S., Fan, A., Gao, C., Goswami, V., Guzmán, F., Koehn, P., Mourachko, A., Ropers, C., Saleem, S., Schwenk, H. & Wang, J. (2022), 'No language left behind: Scaling human-centered machine translation'.

Pretorius, L. & Wolff, F. (2020), Wikipedia as a Transformative Multilingual Knowledge Resource, Cambridge University Press, p. 232-246.

Rana, T. A., Cheah, Y.-N. & Letchmunan, S. (2016), 'Topic modeling in sentiment analysis: A systematic review.', Journal of ICT Research & Applications 10(1).

Snider, K. & Roberts, J. (2004), 'SIL comparative African wordlist (SILCAWL)', Journal of West African Languages 31(2), 73-122.
