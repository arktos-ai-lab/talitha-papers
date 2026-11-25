> Machine translation (fr) of "Usability and Accessibility of Bantu Language Dictionaries in the Digital Age: Mobile Access in an Open Environment" by Thomas Eckart, Sonja Bosch, Uwe Quasthoff, Erik Körner, Dirk Goldhahn, Simon Kaleschke, https://aclanthology.org/2020.rail-1.2/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Utilisabilité et accessibilité des dictionnaires de langues bantoues à l'ère numérique : accès mobile dans un environnement ouvert

Thomas Eckart, Sonja Bosch, Uwe Quasthoff, Erik Körner, Dirk Goldhahn, Simon Kaleschke

**Affiliations**  
Thomas Eckart, Sonja Bosch, Uwe Quasthoff, Erik Körner, Dirk Goldhahn, Simon Kaleschke  
Natural Language Processing Group, University of Leipzig, Germany  
Department of African Languages, University of South Africa, Pretoria, South Africa  
  


## Résumé

Cette contribution décrit une application de dictionnaire mobile gratuite et ouverte basée sur des données de dictionnaire ouvertes. Un accent particulier est mis sur la convivialité et la présentation des données adaptée à l'utilisateur. Cela inclut, en plus de l'ordre alphabétique des lemmes, d'autres critères de sélection, de regroupement et d'accès du vocabulaire. Au-delà de la fonctionnalité de recherche pour les radicaux ou les racines - nécessaire en raison de la complexité morphologique des langues bantoues - le regroupement des lemmes par domaine de sujet de difficulté variable permet une personnalisation. Un profil de dictionnaire définit les options de présentation disponibles des données du dictionnaire dans l'application et peut être spécifié en fonction des besoins du groupe d'utilisateurs respectif. Des embeddings de mots et des approches similaires sont utilisés pour lier des mots sémantiquement similaires ou apparentés. La structure de données sous-jacente est ouverte pour les dictionnaires monolingues, bilingues ou multilingues et supporte également la connexion à des ressources externes complexes comme les Wordnets. L'application dans son état actuel se concentre sur les données de dictionnaire xhosa et zoulou, mais plus de ressources seront intégrées bientôt.

## Mots-clés

données de dictionnaire, application mobile, utilisabilité

## 1. Introduction

Les ensembles de données lexicales sont une ressource indispensable pour divers groupes d'utilisateurs, allant des écoliers aux créateurs de texte professionnels. Cependant, les méthodes traditionnelles de présentation et de diffusion de ces connaissances précieuses au moyen de livres imprimés n'atteignent plus tous les utilisateurs potentiels. De nouvelles méthodes d'accès aux données et de participation doivent être identifiées et mises en œuvre dans le cadre de leur développement ultérieur. Bien que de nombreuses ressources pertinentes soient déjà disponibles via des pages Web, les tendances récentes à l'utilisation étendue d'applications mobiles dédiées (applications) notamment par un public plus jeune ne sont prises en compte que dans une faible mesure et ont conduit - le cas échéant - à une variété d'applications incompatibles, propriétaires et donc - après un certain temps - abandonnées avec des stocks de données non maintenues. La communauté de la téléphonie mobile en Afrique connaît une croissance rapide. Dans le cas de l'Afrique du Sud, il a été rapporté par Statistics South Africa que la proportion de ménages possédant des téléphones mobiles a significativement augmenté, passant de 31,9 % en 2001 à 88,9 % en 2011, tandis qu'une enquête communautaire en 2016 (Statistics South Africa, 2016) a indiqué une nouvelle augmentation à 93,8 % de ménages. Les téléphones mobiles relèvent de la catégorie « biens ménagers » et, chose intéressante, ont obtenu le pourcentage le plus élevé après les cuisinières électriques, les téléviseurs et les réfrigérateurs. Des versions mobiles de dictionnaires de langues bantoues pourraient donc faciliter l'accessibilité à un grand pourcentage de la population en contraste avec les dictionnaires traditionnels qui sont chers, souvent épuisés et même obsolètes. De tels dictionnaires électroniques économisent également du temps aux utilisateurs par rapport aux dictionnaires papier. De plus, ils « économisent de la mémoire de travail pour le traitement de la compréhension plutôt que d’être perturbés en prenant beaucoup de temps pour trouver des mots dans des dictionnaires traditionnels » (Deng et Trainin, 2015:58). En tenant compte de cet environnement général, cette contribution se concentre sur une application de dictionnaire Android conçue comme un projet open source pour améliorer la visibilité des ressources disponibles et comme une tentative d'atteindre et d'activer de nouveaux groupes d'utilisateurs. Il sera démontré comment les ressources disponibles - en partie compilées ou préparées par les auteurs eux-mêmes - peuvent être rendues accessibles et comment l'ouverture peut aider à obtenir des résultats similaires pour d'autres ressources également. Sur la base de l'analyse des applications mobiles existantes et de leurs lacunes, certaines approches pour améliorer la présentation et l'accessibilité des données sur un écran limité seront décrites, en mettant l'accent sur les approches (semi-)automatiques pour les langues moins dotées en ressources.

## 2. Ouverture comme prérequis pour la collaboration et la participation

Les principes de données FAIR (trouvabilité, accessibilité, interopérabilité et réutilisabilité; voir Wilkinson et al., 2016) ont une influence croissante sur le travail quotidien des chercheurs et des scientifiques. Cependant, cette orientation - généralement acceptée - vers un ensemble minimal d'exigences pour permettre une recherche moderne et ouverte n'est toujours pas mise en œuvre dans tous les domaines. Les conséquences sont graves et problématiques, surtout pour les disciplines où la disponibilité de ressources fiables est elle-même problématique. Entre autres, c'est spécifiquement le cas pour de nombreuses langues indigènes africaines dont la plupart peuvent être considérées comme pauvres en ressources. Pour parvenir à un environnement ouvert où les chercheurs et les utilisateurs intéressés peuvent collaborer et développer des ressources en permanence, le niveau d'« ouverture » requis ne comprend pas seulement la capacité de trouver, d'accéder, d'interopérer et de réutiliser des données. Dans le contexte de cette contribution, l’accent est mis sur un scénario plus complet lorsqu’il s’agit de fournir un accès aux ressources lexicales pour les langues bantoues. Les points de vue suivants sur l’ouverture sont particulièrement pertinents ici :

Données ouvertes : La disponibilité des données pour la recherche, l'agrégation et la réutilisation dans d'autres contextes est un prérequis évident pour une communauté active et le développement continu du paysage des ressources linguistiques. Dans cette contribution, un ensemble de données du dictionnaire Xhosa précédemment mis à disposition par les auteurs sous une licence ouverte (Bosch et al., 2018) est utilisé. Cependant, cela ne sert qu'à titre d'exemple concret; une limitation à cet ensemble de données spécifique ou à la langue bantoue n'est pas prévue. L'ouverture des données et le respect des normes générales de leur représentation formelle permettent également l'intégration d'autres ressources, comme cela a déjà été testé en utilisant des ressources du projet Comparative Bantu Online Dictionary (CBOLD).

Application ouverte : En plus de l'accent mis sur les données respectant les principes FAIR, la réutilisabilité des applications est un autre aspect important. Les logiciels ouverts ou libres permettent de réutiliser des applications à de nouvelles fins ou à de nouveaux ensembles de données, ainsi que de les développer et de les améliorer en collaboration. Par conséquent, l'application présentée ici est mise à disposition gratuitement sous une licence open source et peut être réutilisée par d'autres parties intéressées.

Application conviviale : la disponibilité ouverte des données via des interfaces utilisateur ouvertes n'est qu'une condition préalable pour attirer les utilisateurs et les collaborateurs potentiels. L'expérience utilisateur fournie par une application et son adéquation aux tâches utilisateur pertinentes est une autre condition préalable importante. Malheureusement, la plupart des applications actuelles - y compris les applications commerciales - tentent seulement de transférer les paradigmes établis de la structuration et de l'accès aux données du dictionnaire à l'ère numérique. Les sections suivantes se concentreront sur les nouvelles approches qui sont encore faisables pour le domaine problématique des langues moins dotées en ressources.

Importation de données conviviale: Pour simplifier la réutilisation de l'application, l'effort nécessaire pour importer d'autres ensembles de données doit être maintenu aussi bas que possible. Cela peut être réalisé de différentes manières: en s'appuyant sur des formats standard établis et / ou en fournissant un mécanisme simple pour introduire des données dans l'application qui est applicable même pour les utilisateurs inexpérimentés. Les auteurs ont décidé de sélectionner une double approche dans laquelle les données lexicales sont fournies sous forme de fichiers de valeurs séparées par des colonnes (CSV) qui peuvent être créés, maintenus et édités à l'aide de logiciels de bureautique standard (comme LibreOffice ou Microsoft Excel). Pour des formats plus élaborés et établis, des procédures de transformation sont fournies. Cela inclut actuellement des scripts de transformation pour des données structurées selon le Bantu Language Model (BLM) qui repose sur l'ontologie MMoOn (Klimek, 2017). Le support de formats supplémentaires est prévu pour l'avenir.

Ressources externes ouvertes: Aucune application ne peut fournir toutes les informations disponibles pour une langue ou intégrer toutes les ressources externes établies et souvent très étendues. Cependant, les liens directs sont une fonctionnalité utile et exploitent le paysage distribué des ressources linguistiques. Dans ce contexte, la référence aux données de l'African Wordnet (AfWN) (Bosch et Griesel, 2017) et l'incorporation dynamique de matériel textuel complet extrait en tant qu'exemples d'utilisation (Goldhahn et al., 2019) via des services Web RESTful (Büchler et al., 2017) est considérée comme étant d'une grande pertinence.

Les efforts actuels en faveur d'infrastructures de recherche intégrées et ouvertes, telles que la SADiLaR sud-africaine, les européennes CLARIN/CLARIAH (Hinrichs & Krauwer, 2014) et autres, peuvent être considérés comme le contexte naturel de tous ces développements.

## 3. Groupes d'utilisateurs et profils

Cette complexité générale de l'accès aux données, lorsqu'elle est basée sur un format de données relativement simple, ne devrait pas restreindre les exigences d'utilisabilité. Il existe une variété de groupes d’utilisateurs potentiels tels que les apprenants de langues de différents âges (élèves de différents âges, adultes), différents niveaux de compétence (débutants, apprenants de L1 et L2, professionnels), différentes tâches à accomplir (réception de texte vs création de texte), et différents types de dictionnaires (monolingue, bilingue ou multilingue avec une quantité différente de détails). Un seul dictionnaire peut s'adresser à un seul groupe d'utilisateurs ou à plusieurs groupes d'utilisateurs. La combinaison du groupe d'utilisateurs ciblé et des données disponibles dans le dictionnaire détermine les détails du dictionnaire présentés à l'utilisateur. Pour un dictionnaire donné, la présentation pour les différents groupes d'utilisateurs est définie par le fournisseur de données du dictionnaire au sein du dictionnaire, idéalement en collaboration avec l'auteur du dictionnaire. Le résultat est soit une seule option d'interface pour un dictionnaire donné ou une sélection de deux ou trois interfaces différentes (par exemple, pour les débutants ou les professionnels), où l'utilisateur peut sélectionner l'option appropriée. La définition de l'interface s'applique aussi bien à la macrostructure qu'à la microstructure. La macrostructure doit être accessible pour pré-sélectionner les lemmes présentés à l'utilisateur. Dans un dictionnaire ordinaire, tous les lemmes sont présentés par ordre alphabétique. À ce niveau, nous avons la possibilité de restreindre l'ensemble des lemmes (par exemple, pour les débutants ou pour se concentrer sur des domaines spécifiques) et de changer leur ordre. Pour la microstructure, nous pouvons restreindre le dictionnaire en ignorant certaines informations supposées connues (ou sans importance) pour l'utilisateur cible du dictionnaire. Cela peut inclure des informations dans des dictionnaires bilingues qui sont dans la langue maternelle de l'utilisateur ou des informations non pertinentes pour la tâche spécifique que l'utilisateur tente d'accomplir.

Par conséquent, les groupes d'utilisateurs définis doivent être alignés sur les profils d'utilisateurs pris en charge, ce qui a des conséquences directes sur la sélection et la présentation des données lexicales. Cet alignement peut être structuré selon les exemples suivants:

Pour les apprenants de langues, il est très pertinent d'accéder aux mots appartenant au même champ sémantique dans une présentation combinée. Cela peut inclure le vocabulaire qui fait partie du même champ sémantique ou - en particulier dans le contexte de l'enseignement primaire - une partie de la même leçon. La sélection des lemmes présentés est également définie par les capacités des utilisateurs et peut inclure la restriction aux termes très fréquents, au vocabulaire de base ou aux termes connus des leçons précédentes. Au niveau de la microstructure, cela pourrait comprendre un accent sur les traductions et des exemples concrets d'utilisation, tout en réduisant au minimum la quantité d'informations morphosyntaxiques.

Pour les rédacteurs professionnels, un profil utilisateur approprié peut être construit en conséquence. Cela pourrait également inclure une concentration exclusive sur le vocabulaire spécifique au domaine (en omettant complètement le vocabulaire de base), les informations taxonomiques (comme les synonymes ou les antonymes), et les références à des sources externes supplémentaires pour les informations non lexicales.

Cette concentration sur les profils utilisateurs pourrait être perçue comme une restriction inutile en comparaison avec la flexibilité absolue d'une configuration pilotée par l'utilisateur. Cependant, la volonté des utilisateurs d'adapter une interface à leurs besoins spécifiques est souvent faible, ce qui contraste clairement avec les coûts techniques liés à la fourniture de cette flexibilité dans une application. La réduction des options à un sous-ensemble raisonnable est considérée par les auteurs comme un compromis viable.

## 3.1 Approches pour la sélection de lemmes

En règle générale, sur un écran de smartphone, un maximum de dix lemmes peut être présenté en plus d'une entrée de dictionnaire sélectionnée. La sélection de ces lemmes est cruciale pour une utilisation facile du dictionnaire. La solution standard est la sélection des mots alphabétiquement voisins dans la liste de lemme. Dans de nombreux cas, il existe des alternatives plus attrayantes:

Sous-sélection alphabétique par fréquence: Dans une grande liste de lemmes, de nombreux mots peu fréquents sont contenus. Surtout un apprenant de langue pourrait s'intéresser uniquement aux mots de fréquence moyenne ou élevée.

Sous-sélection alphabétique par les compilateurs du dictionnaire: Les mots peuvent être marqués par difficulté (comme le vocabulaire des débutants, par exemple), ou par domaine (médecine, par exemple). Chaque sous-ensemble peut être sélectionné, et tous les autres mots sont ignorés dans la liste de lemmes.

Des mots sémantiquement similaires ou apparentés au lieu de l'ordre alphabétique : Les mots sémantiquement apparentés peuvent être fournis par le dictionnaire (comme Wordnet, par exemple) ou générés automatiquement par des embeddings de mots comme Word2Vec ou des approches similaires. Voir la section suivante pour plus de détails.

## 4. Approches de sélection de lemmes pour les langues moins dotées en ressources

Les approches identifiées pour améliorer l'accès et la présentation des données lexicales s'appuieraient généralement sur des ressources étendues, principalement créées manuellement. Cela inclut des listes de vocabulaire pour des domaines spécifiques (comme le vocabulaire pertinent pour différentes leçons scolaires ou champs de travail) ou des données taxonomiques étendues. Malheureusement, pour les langues moins dotées en ressources, celles-ci ne sont pas toujours disponibles.

L'un des développements positifs est l'effort récent sur la création de Wordnets africains. Le fait de se connecter à un Wordnet fournit des suggestions supplémentaires telles que des synonymes ou des concepts apparentés, des définitions et des exemples d'utilisation afin de fournir plus d'opportunités d'apprentissage. Le projet African Wordnets est actuellement en cours de développement pour neuf langues bantoues parlées en Afrique du Sud. Actuellement, le prototypique Wordnet africain (AfWN) contient des données open source de différentes tailles pour les neuf langues africaines officielles de l'Afrique du Sud. L’AfWN est étroitement aligné sur le Princeton WordNet (PWN) anglais, qui constitue la structure de base pour l’expansion continue et manuelle de l’AfWN (Bosch et Griesel, 2017). Cette méthode dite d'expansion offre une structure établie pour la construction d'une nouvelle ressource et est donc généralement préférée pour les langues moins dotées en ressources (Ordan et Wintner, 2007:5). Cette méthode nécessite la traduction du PWN dans la langue africaine cible.

Il existe également une variété d'approches basées sur les statistiques pour améliorer la facilité d'utilisation des dictionnaires aux fins identifiées ci-dessus. La plupart d'entre elles peuvent être considérées comme des procédures semi-automatiques capables de générer des candidats, mais nécessitant toujours une inspection et une approbation manuelles. Actuellement, les approches suivantes sont évaluées en ce qui concerne le problème de la rareté des données qui s'applique à toutes les langues moins dotées en ressources.

## 4.1 Analyse différentielle de listes de mots

L’analyse et la comparaison de listes de mots (Kilgarriff, 2001) se sont avérées utiles pour diverses applications, y compris l’extraction par corpus de vocabulaire spécifique au domaine ou à l’auteur (Goldhahn et al., 2015). Cela peut également être utilisé aux fins esquissées dans cette contribution.

À titre d'exemple spécifique, un vocabulaire adapté aux enfants de l'école primaire a été identifié. L'approche utilisée repose sur la comparaison des fréquences relatives des mots dans des textes spécifiques au domaine par rapport à la fréquence dans un corpus de référence plus général. Comme matériel spécifique au domaine, des textes du projet Nal'ibali ont été utilisés. Nal'ibali est une campagne visant à promouvoir une culture de la lecture en Afrique du Sud et propose des histoires multilingues en 11 langues. Une liste de mots a été générée à l'aide des textes en zoulou (environ 34 000 jetons) et comparée avec un corpus de référence d'environ 15 millions de jetons fourni par la Leipzig Corpora Collection (Goldhahn et al., 2012) qui agrège du matériel textuel en utilisant le Web crawling pour des centaines de langues.

La liste de formes de mots qui en résulte contient à la fois des mots de fonction et du vocabulaire quotidien qui peut être utilisé pour la sélection de vocabulaire. Comme exemples concrets, les termes fléchis suivants ont été extraits: kakhulu (très), umuntu (personne), kusho (dire/signifier), ukudla (nourriture), umama (mère), ubaba (père), izilwane (animaux), unogwaja (lapin). La figure 1 et 2 comparent la présentation de ilanga (soleil, journée) dans un ordre alphabétique utilisant un dictionnaire zoulou complet (incluant ainsi des lemmes non apparentés ayant le même préfixe) avec sa présentation parmi un sous-ensemble de vocabulaire, extrait de la même source.

p04-01.png

Figure 1 : Zulu ilanga dans une liste alphabétique de lemmes

L'approche esquissée est bien sûr non seulement utilisable pour ce type de matériel spécifique, mais peut également être appliquée à d'autres genres. La base dans chaque cas est une liste de mots extraite de textes spécifiques au domaine. Cela peut inclure des manuels scolaires, des manuels techniques, des sélections de pages Web ou tout autre type de matériel textuel.

## 4.2 Embeddings de mots

L'utilisation d'embeddings de mots comme Word2Vec (Mikolov et al., 2013) et Fasttext (Bojanowski et al., 2017) permet une variété d'améliorations lors de l'utilisation de lexiques numériques. Leur fonction principale de calcul de similarité sémantique et/ou syntaxique entre deux mots peut être utilisée pour fournir différentes options de regroupement (regroupement basé sur le sujet ou la similarité), des suggestions de mots sémantiquement liés et permet la recherche même avec des mots d'entrée mal orthographiés (Piktus et al., 2019). Les embeddings de mots sont comparables aux co-occurrences de mots, car ce sont deux méthodes qui exploitent les contextes des mots pour "apprendre" la signification d'un mot et des mots associés. Ils sont légèrement plus efficaces à calculer par rapport aux co-occurrences traditionnelles et peuvent être stockés de manière plus compacte, ce qui est utile compte tenu de la capacité de stockage limitée des appareils mobiles.

p04-02.png

Figure 2 : Zulu ilanga dans une sélection de lemmes spécifiques au domaine basés sur les textes Nal'ibali (incluant head, man, king, thing, soup)

Différentes techniques et modèles de plongement permettent un choix entre types de similarité, word2vec se concentrant davantage sur une sorte de similarité sémantique basée sur des contextes partagés, tandis que les résultats de fastText sont plus morphologiquement similaires car leur calcul inclut des n-grammes de caractères, ce qui est avantageux lorsqu'on travaille avec des mots inconnus et peu fréquents. Le choix du modèle peut dépendre des caractéristiques linguistiques et des profils des utilisateurs. Si possible, les modèles doivent être entraînés sur toutes les données textuelles disponibles pour la langue donnée. Mais même de petites collections de textes d'environ un million de phrases permettent d'obtenir de bons résultats, comme indiqué ci-dessous pour le zoulou. Un entraînement avec encore moins de données est possible, mais la qualité augmente avec plus d'exemples d'apprentissage.

Un aspect négatif pour l'utilisation hors ligne de l'application est que la taille du modèle, même pour des corpus plutôt petits, est comprise entre 100 Mo et 1 Go et augmente avec la taille du vocabulaire (liée à la taille du corpus de texte). Pour minimiser la taille initiale de l'application, des améliorations telles que le pré-calcul d'un nombre fixe de mots similaires pour chaque entrée du vocabulaire, le téléchargement à la demande de modèles (plus grands) ou de listes de mots, ou même la compression des vecteurs de plongement (Joulin et al., 2016 ; Shu et al., 2017) peuvent aider à atténuer ce problème.

À titre d'exemples concrets, les deux éléments lexicaux suivants et leurs formes les plus similaires dans le dictionnaire en fonction de la similarité des mots (sous-) en utilisant Fasttext sont fournis. Les résultats sont basés sur un corpus de 1,1 million de phrases en zoulou; les traductions en anglais sont fournies entre parenthèses.

ukulangazela (désirer ardemment): nokulangazelela (et le désir ardent), nokukulangazelela (désir ardent pour toi), ukulangazela (désir ardent), unokulangazelela (tu peux attendre avec impatience), kunokulangazelela (plus de désir ardent), enokulangazelela (désir ardent), Ukulangazelela (Désir ardent), ukulangazelela (désir ardent), yikulangazelela (attends-le avec impatience), Ukulangazelele (Tu l'as désiré ardemment), wokulangazela (de désir ardent), njengokulangazela (comme désir ardent), okulangazelele (ce désiré ardemment), kulangazela (désir ardent), akulangazelelayo (qui le/te désire ardemment), ukulangazelele (tu le désires ardemment), ikulangazelela (il/elle le désire ardemment), ezokulangazelela (qui te/le désirera ardemment), engakulangazelela (qui peut le/te désirer ardemment)

Les exemples ci-dessus représentent la flexion du même radical verbal de base au moyen d'une variété d'affixes. Le sens du radical verbal intransitif -langaza (have a longing) est étendu par les extensions verbales dites -el- et -elel- pour changer le sens en un sens transitif, c'est-à-dire -langazela (long for). Différents préfixes apparaissent dans ces exemples, allant du préfixe de classe nominale infinitive uku- dans le mot ukulangazela (longing/to long for) aux morphèmes d'accord sujet et objet i- et -ku- dans le mot ikulangazelela (he/she/it longs for it) et aux morphèmes possessifs comme dans wokulangazela (of longing), pour n'en citer que quelques-uns.

ibhayoloji (biologie): ibhayotheknoloji (biotechnologie), ibhayografi (biographie), iMayikhrobhayoloji (Microbiologie), ezebhayoloji (de biologique), yibhayotheknoloji (c'est de la biotechnologie), Ibhayotheknoloji (Biotechnologie), bhayotheknoloji (biotechnologie), ngeradiyoloji (avec la radiologie), ifonoloji (phonologie), ithayithili (titre), nakwibhayoloji (et en biologie), kwebhayoloji (de biologie), nethayithili (et un titre), kwemayikhrobhayoloji (de microbiologie), zebhayoloji (de biologique), ngokwebhayoloji (c'est celui de la biologie), ibhaysikili (bicyclette), zebhayotheknoloji (de biotechnologie), ibayoloji (biologie)

Les résultats incluent avant tout des noms qui présentent au moins des préfixes de classe nominale. Dans certains cas, ceux-ci sont précédés par d'autres préfixes tels que le morphème copulatif yi- comme dans yibhayotheknoloji (c'est la biotechnologie), et un morphème possessif comme dans zebhayoloji (de biologique). La majorité des noms identifiés appartiennent au même contexte sémantique que le mot d'entrée.

Pour une illustration supplémentaire, le nom imibuzo (questions) apparaissant dans la Figure 3 est une entrée d'exemple qui est partiellement enrichie avec les mots ukubuza (interrogation/demander) et ukuphendula (répondre), qui sont tous deux des éléments lexicalement apparentés sémantiquement et ont également été extraits sur la base de plongements lexicaux.

## 4.3 Gestion des entrées erronées

Les mots d'entrée défectueux ou mal orthographiés, ou même les mots hors vocabulaire, sont un problème majeur d'utilisabilité. Les utilisateurs s'attendent à ce que même une entrée "invalide" renvoie un résultat significatif, donc des méthodes pour gérer ces cas d'utilisation sont nécessaires.

p05-01.png

Figure 3 : Entrées du dictionnaire xhosa partiellement enrichies avec des références à des termes sémantiquement apparentés (basés sur les plongements lexicaux)

Des méthodes simples basées sur le n-gramme peuvent être utilisées pour rechercher des mots candidats probables et les suggérer. Une méthode plus complète est Fasttext (ou des plongements lexicaux plus résilients par Piktus et al., 2019), car il gère assez bien les entrées défectueuses en utilisant des « sous-mots » pour inférer des plongements pour les mots d'entrée mal orthographiés ou inconnus afin de récupérer ensuite des mots connus similaires. Les embeddings de mots uniques dans Fasttext sont composés d'embeddings de n-grammes de mots de longueur variable et sont robustes face à de légères modifications de lettres et fonctionnent le mieux avec des langues morphologiquement riches. Les préfixes et les suffixes sont plus généraux dans leur signification en raison de leur occurrence dans de nombreux mots dans différents contextes, les radicaux cependant sont plus intégrés pour la signification comme on peut le voir dans l'exemple ci-dessus. Cela n'exclut pas les mots sémantiquement liés avec des n-grammes complètement différents mais ceux-ci sont classés plus bas et un post-traitement supplémentaire peut être nécessaire pour ne récupérer que ces mots.

## 5. Conclusion

L'application esquissée est encore en développement intensif et donc sujette à des modifications. Son état actuel peut déjà être examiné dans son dépôt de code public ; une documentation plus complète sur le déploiement ou l'importation de données sera fournie prochainement. Une première version complète des fonctionnalités est attendue pour mai 2020 et intégrera les ensembles de données susmentionnés. En parallèle, plus d'approches pour un accès et une présentation améliorés des données lexicales, avec un accent sur les langues moins dotées en ressources, seront évaluées ; les candidats appropriés seront mis en œuvre à une date ultérieure.

## Notes

1 http://www.statssa.gov.za

2 http://www.cbold.ish-lyon.cnrs.fr

3 Pour la définition suivante de "logiciel libre" : https://fsfe.org/about/basics/freesoftware.en.html

4 Disponible sur https://github.com/cheapmon/balalaika

5 https://www.sadilar.org

6 https://africanwordnet.wordpress.com

7 https://wordnet.princeton.edu

8 https://nalibali.org

9 https://corpora.uni-leipzig.de/en?corpusId=zul_mixed_2019

10 https://fasttext.cc/docs/en/unsupervised-tutorial.html#importance-of-character-n-grams

11 https://fasttext.cc/blog/2016/08/18/blog-post.html#works-on-many-languages

## 6. Références bibliographiques

Bojanowski, P., Grave, E., Joulin, A., and Mikolov, T. (2017). Enriching word vectors with subword information. Transactions of the Association for Computational Linguistics, vol. 5, pp. 135-146, Dec. 2017. Available: https://www.aclweb.org/anthology/Q17-1010, https://arxiv.org/abs/1607.04606

Bosch, S., Eckart, T., Klimek, T., Goldhahn, D., and Quasthoff, U. (2018). Preparation and Usage of Xhosa Lexicographical Data for a Multilingual, Federated Environment. In: Proceedings of the 11th International Conference on Language Resources and Evaluation (LREC 2018), Miyazaki, Japan.

Bosch, S. and Griesel, M. (2017). Strategies for building wordnets for under-resourced languages: the case of African languages. Literator 38(1). http://www.literator.org.za/index.php/literator/article/view/1351

Büchler, M., Eckart, T., Franzini, G., and Franzini, E. (2017). Mining and Analysing One Billion Requests to Linguistic Services. In: Proceedings of The IEEE International Conference on Big Data 2016 (IEEE BigData 2016), Washington DC, 2016, 5-8. DOI: 10.1109/BigData.2016.7840979

Deng, Q. and Trainin, G. (2015). Learning Vocabulary with Apps: From Theory to Practice. The Nebraska Educator: A Student-Led Journal. 29. https://digitalcommons.unl.edu/nebeducator/29

Goldhahn, D., Eckart, T., Gloning, T., Dreßler, K., and Heyer, G. (2015). Operationalisation of Research Questions of the Humanities within the CLARIN Infrastructure - An Ernst Jünger Use Case. In: Proceedings of CLARIN Annual Conference 2015, Wrocław, Poland.

Goldhahn, D., Eckart, T., and Bosch, S. (2019). Enriching Lexicographical Data for Lesser Resourced Languages: A Use Case. In: Proceedings of CLARIN Annual Conference 2019. Eds. K. Simov and M. Eskevich. Leipzig, Germany.

Goldhahn, D., Eckart, T., and Quasthoff, U. (2012). Building Large Monolingual Dictionaries at the Leipzig Corpora Collection: From 100 to 200 Languages. In: Proceedings of the Eighth International Conference on Language Resources and Evaluation (LREC 2012), Istanbul, Turkey.

Hinrichs, E. and Krauwer, S. (2014): The CLARIN Research Infrastructure: Resources and Tools for E-Humanities Scholars. In: Proceedings of the Ninth International Conference on Language Resources and Evaluation (LREC 2014), Reykjavik, Iceland.

Kilgarriff, A. (2001). Comparing corpora. International journal of corpus linguistics, 6(1), 97-133.

Joulin, A., Grave, E., Bojanowski, P., Douze, M., Jégou, H., and Mikolov, T. (2016). FastText.zip: Compressing text classification models. arXiv:1612.0365

Klimek, B. (2017). Proposing an OntoLex-MMoOn Alignment: Towards an Interconnection of two Linguistic Domain Models. Proceedings of the LDK workshops: OntoLex, TIAD and Challenges for Wordnets.

Ordan, N. and Wintner, S. (2007). Hebrew WordNet: a test case of aligning lexical databases across languages. International Journal of Translation, special issue on Lexical Resources for Machine Translation, 19(1):39-58. http://cs.haifa.ac.il/~shuly/publications/wordnet.pdf

Piktus, A., Edizel, N.B., Bojanowski, P., Grave, E., Ferreira, R., and Silvestri, F. (2019). Misspelling Oblivious Word Embeddings. Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1, pp. 3226-3234. https://www.aclweb.org/anthology/N19-1326/

Mikolov, T., Chen, K., Corrado, G., and Dean, J. (2013). Efficient Estimation of Word Representations in Vector Space. Proceedings of Workshop at ICLR, 2013.

Shu, R. and Nakayama, H. (2017). Compressing Word Embeddings via Deep Compositional Code Learning. http://arxiv.org/abs/1711.01068

Statistics South Africa. (2016). Community Survey. Pretoria: Statistics South Africa. http://cs2016.statssa.gov.za/wp-content/uploads/2016/07/NT-30-06-2016-RELEASE-for-CS-2016-_Statistical-releas_1-July-2016.pdf

Wilkinson M.D., Dumontier M., Aalbersberg, I.J., et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific data, 3, 160018.http://dx.doi.org/10.1038/sdata.2016.18, https://dash.harvard.edu/bitstream/handle/1/26860037/4792175.pdf
