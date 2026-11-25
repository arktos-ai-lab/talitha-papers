> Machine translation (fr) of "Wordsmith Tools as an Enabler for Text Analysis" by Rooweither Mabuya, https://upjournals.up.ac.za/index.php/dhasa/article/view/3824, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Les outils Wordsmith comme catalyseur de l’analyse textuelle

Rooweither Mabuya

**Affiliations**  
Rooweither Mabuya  
South African Centre for Digital Language Resources  
North West University  


## Résumé

Le processus d'intellectualisation a été caractérisé comme un processus planifié visant à accélérer la croissance et le développement des langues indigènes d'Afrique du Sud afin d'en améliorer l'interface efficace avec les développements, théories et concepts modernes (Finlayson & Madiba, 2002). Les corpus sont utilisés pour développer des connaissances empiriques sur la langue. Un corpus est une collection de textes naturels dérivés de l'utilisation du langage de la vie réelle sous forme écrite ou orale (cf. Sinclair, 1991). Ces textes sont ensuite traités, stockés et accessibles par ordinateur pour être utilisés dans le développement de ressources électroniques d'une langue. Il s'agit donc d'une ressource importante dans le développement des technologies linguistiques humaines en isiZulu. Ainsi, des corpus spécialisés ont été créés pour cette étude et ont servi de base pour enquêter sur l'utilisation sensible de l'isiZulu en référence au phénomène linguistique isiHlonipho. La linguistique de corpus offre une vision plus objective de la langue que l'introspection, l'intuition et les anecdotes. Cette étude a bénéficié de l'utilisation de la suite logicielle WordSmith Tools version 6, qui a permis au chercheur d'utiliser simultanément différents programmes pour analyser les données.

## Mots-clés

Construction de corpus, Wordsmith Tools, Langue à des fins spécifiques, isiHlonipho

## 1 Introduction

Il convient de noter que cette étude est basée sur le corpus et présente donc une discussion détaillée sur la composition des corpus, c'est-à-dire le corpus de référence (RC) et le corpus d'analyse (AC) qui ont été développés pour cette étude. Il traite également du logiciel de calcul utilisé pour interroger les corpus. Les méthodes d'extraction semi-automatiques et les requêtes de concordance sont également expliquées. La méthode de la linguistique de corpus (CL) a été utilisée pour analyser la sensibilité au genre en isiZulu.

L'isiZoulou est la langue maternelle la plus largement parlée en Afrique du Sud, avec 9 millions de locuteurs (Recensement, 2011) et est utilisée dans les médias, ainsi que dans les parlements nationaux et provinciaux. L’IsiHlonipho est généralement définie comme une pratique qui implique l’utilisation d’un vocabulaire et d’une manière de parler spécifiques à un genre particulier (Makoni, 2014).

Quatre corpus LSP ont été créés pour cette étude et ont été utilisés comme base pour enquêter sur l'utilisation du langage sensible de isiZulu. Ceux-ci ont été créés à partir des titres de livres suivants : Insila kaShaka, Bafa Baphela, Umdonsiswano et Amandl' Esambane, WordSmith Tools est une suite intégrée de programmes utilisée pour examiner comment les mots se comportent dans un corpus.

## 2 Construction de corpus

La linguistique de corpus est une méthode linguistique qui repose sur la création d'un corpus. Franz (1996 : 7) note que. "La linguistique basée sur le corpus se concentre sur le langage parlé ou écrit naturellement, par opposition aux phrases d'exemple individuelles qui sont conçues pour illustrer la théorie grammaticale". Un corpus est donc une collection de textes naturels dérivés de l'usage de la langue dans la vie réelle sous forme écrite ou orale. Il est ensuite traité, stocké et accessible au moyen d'ordinateurs. Le corpus devient une forme précise de données linguistiques qui reflète la langue étudiée.

Ngcobo et Nomdebevana (2010:187) indiquent que « l'une des exigences pour le développement d'une langue est la planification de son corpus ». Une langue est préservée pour la postérité et se développe également grâce à la constitution de corpus, ce qui facilite son accessibilité au public et permet le développement de technologies linguistiques humaines. Un corpus est une donnée linguistique authentique qui est conçue et collectée selon un protocole ou une procédure d’échantillonnage spécifique.

Il est important de noter que de nombreux corpus de différentes tailles et typologies ont été développés pour différentes langues parlées dans le monde. Certains de ces éléments sont disponibles via une plateforme appelée Sketch Engine. Sketch Engine est une plate-forme de gestion et d'analyse des corpus et de création de corpus accessible via le paiement d'un abonnement. Il a des corpus dans quatre-vingt-dix (90) langues, avec certains comme l'anglais ayant plusieurs corpus. Les langues africaines sur Sketch Engine sont l'afrikaans, l'arabe, l'igbo, le setswana, le swahili et le yoruba.

Il y a très peu de corpus dans les langues africaines. Certains corpus qui ont été développés pour les langues africaines n'apparaissent pas sur Sketch Engine et certains nécessitent une autorisation pour y accéder. Cela est aggravé par le fait que la plupart de ces corpus ne résident pas sur le continent mais sont hébergés et conservés dans des institutions européennes (Khumalo, 2015:24).

Dans le contexte sud-africain, l'Université de Pretoria (UP) a mené un effort massif pour développer des corpus locaux. Depuis le début de ces travaux au début des années 1990, l'UP a développé des corpus dans toutes les langues officielles du pays. Le tableau 1 présente ces corpus et leur taille.

p02-01.png

Tableau 1: Corpus dans les langues sud-africaines (De Schryver et Prinsloo, 2000)

Le Bureau de planification et de développement linguistique de l'Université du KwaZulu-Natal (UKZN) s'est lancé dans un vaste exercice de construction du Corpus national isiZulu (INC) comme l'une des principales initiatives de l'université pour développer l'isiZulu en tant que langue de recherche, d'enseignement et d'apprentissage. L'INC a été lancé en 2014 avec un nombre impressionnant de 1,3 million de tokens. À la fin de 2017, il a atteint le cap de plus de 20 millions de tokens. Cela dépasse le Corpus Zulu de Pretoria (PZC) avec 5,7 millions de tokens et le Corpus Ukwabelana avec 100 000 tokens. Le PZC est un corpus LGP et le Ukwabelana est un LSP annoté qui est utilisé comme une ressource d'apprentissage. L’INC est un corpus de monitoring LGP équilibré en termes de texte et de contenu thématique.

Les corpus sont caractérisés selon le support, la conception, la taille, les variables linguistiques, ainsi que le balisage et l'annotation (McEnery et al., 2012). Chacun de ces composants sera discuté plus en détail comme suit :

## 2.1 Support

Cela fait référence au fait que le texte peut être imprimé ou manuscrit et que le texte qui constitue le corpus peut être un discours électronique ou numérisé.

## 2.2 Méthode de conception

La conception fait référence à la manière dont le plan de collecte du corpus est exécuté. La méthode utilisée pour collecter le corpus peut être soit équilibrée, soit opportuniste. L'équilibre fait référence à la représentativité des textes sélectionnés pour constituer le corpus. La méthode opportuniste s'appuie sur tous les textes mis à la disposition des compilateurs pour ajout au corpus.

## 2.3 Taille

La taille peut être fixe ou ouverte, ce qui signifie qu'il s'agit d'un corpus moniteur. La première se réfère à une typologie où la taille du corpus est planifiée, et une fois que la collection atteint l'objectif fixé, la construction du corpus s'arrête. Ce dernier fait référence à un corpus important et en constante croissance. Un corpus plus grand est considéré comme meilleur et a été utilisé dans cette étude comme un RC. Cette étude a donc utilisé à la fois le petit (AC) et le grand (RC).

## 2.4 Variables linguistiques

Cela fait référence à la langue dans laquelle les fichiers texte du corpus sont écrits. Un constructeur de corpus qui construit un corpus monolingue aura une langue à partir de laquelle tirer ses textes, et peut choisir de marquer toutes les références à d'autres langues dans les textes comme étrangères. Les variables linguistiques diffèrent à bien des égards parce que le chercheur doit choisir entre un corpus monolingue et un corpus multilingue. D'autres décisions à cet égard comprennent si le corpus sera synchronique ou diachronique, un corpus de langue générale ou une langue à usage spécial, et une langue écrite ou parlée.

## 2.5 Marquage et annotation

Dans un corpus brut, les textes qui le composent sont collectés et stockés sous forme de texte brut pour une utilisation sous leur forme originale. Le marquage ou l'annotation d'un corpus est le processus d'ajout de texte interprétatif ou d'une analyse supplémentaire au moyen de balises sur les données pour en améliorer la réutilisabilité. Un corpus peut donc être brut (plain), balisé ou annoté.

L'une des principales caractéristiques d'un corpus est la représentativité. Ceci est caractérisé comme "le degré auquel un échantillon inclut la gamme complète de variabilité dans une langue ou une variation linguistique" (Biber, 1993). Le corpus doit donc s'efforcer de refléter la langue telle qu'elle existe.

La linguistique de corpus peut être utilisée pour étudier de nombreux types de questions linguistiques. Elle a le potentiel de produire de nouvelles connaissances très intéressantes, fondamentales et souvent surprenantes sur le langage et est devenue l'une des méthodes les plus courantes dans l'investigation linguistique. La représentativité du corpus dépend de deux facteurs. Le premier est l'équilibre qui implique la gamme de genres et de registres inclus dans l'échantillonnage du corpus, tandis que le second est les techniques utilisées pour sélectionner les extraits de texte pour chaque genre.

Les textes dans un corpus doivent être convertis en format électronique pour que le corpus soit compatible avec le logiciel de traitement des données. Les documents papier doivent être numérisés pour permettre un accès électronique au corpus. Dans cette étude, les données constituant le corpus ont été sélectionnées, analysées, nettoyées, puis stockées électroniquement à l'aide de la suite logicielle Wordsmith Tools version 6. Il est important de se rappeler que tout document préparé pour une analyse de corpus n'est qu'une représentation de l'original. Selon Römer et Wulff (2010), « la linguistique des corpus peut aider le chercheur à évaluer et à décrire un phénomène linguistique d'une manière maximalement objective et donc largement neutre vis-à-vis de la théorie ».

L'avantage d'une approche CL est qu'elle étudie les mots dans leur contexte. Elle aide à comparer l'utilisation des mots dans différents documents et à déterminer comment les mots fonctionnent ensemble. Il est utilisé pour analyser et étudier un certain nombre de questions linguistiques et offre un aperçu de la dynamique du langage, ce qui en a fait l'une des méthodologies linguistiques les plus largement utilisées. La linguistique de corpus s'appuie sur les ordinateurs pour la vitesse, l'exactitude, la fiabilité et la vérification par d'autres.

## 3 Outils Wordsmith

Cette section présente une discussion détaillée sur le programme logiciel utilisé pour interroger le corpus LSP. Une variété d'outils d'analyse de corpus sont disponibles. Au fur et à mesure que le domaine de la CL progresse, plusieurs outils logiciels standards ont été développés et empaquetés avec des interfaces utilisateur graphiques comme des logiciels de tous les jours. Ceux-ci sont populairement connus comme des gestionnaires de corpus, des navigateurs de corpus ou des systèmes de requête de corpus. Ils fournissent des facilités pour rechercher des formes et séquences linguistiques, et analyser des morceaux de corpus.

Les gestionnaires de corpus peuvent être basés sur le web ou sur ordinateur de bureau, commercialisés ou open-source, et conçus pour des corpus spécifiques ou génériques.

Les solutions logicielles de bureau incluent WordSmith (Scott, 1996), Antconc (Anthony, 2011), MonoConc Pro (Barlow, 2000), CasualConc (Imao, 2013), Concapp (Greaves, 2007) et aConCorde (Roberts, Al-Sulaiti et Atwell, 2006). Cette étude a utilisé la solution logicielle WS Tools.

Wilkinson (2011) affirme que « la plupart des programmes d'analyse de corpus comprennent une concordance qui trouve toutes les occurrences d'un mot recherché, ou d'un motif de recherche, et les affiche au centre de votre écran sous la forme d'un affichage de mot clé dans le contexte (KWIC), avec une plage de co-texte à gauche et à droite ».

WordSmith Tools est une suite intégrée de programmes pour examiner comment les mots se comportent dans un corpus. Il a été développé par Mike Scott avec la première version sortie en 1996. En tant que suite de programmes, WordSmith Tools contient trois programmes utilisés pour interroger un corpus, à savoir, les suites de concordance, de mots-clés et de liste de mots. WordSmith Tools version 6 est une suite de programmes qui permet la manipulation de données de corpus en fonction de la fréquence, de la liste de mots, de la concordance, des collocations et du KWIC. Otlogestwe décrit ces outils comme suit ; un outil de liste de mots peut être utilisé pour produire des listes de mots ou des listes de groupes de mots à partir d'un texte. Une concordance peut donner tout mot ou phrase en contexte afin de voir quels autres mots apparaissent à proximité. Les mots-clés calculent les mots qui sont utilisés beaucoup plus fréquemment dans un texte (Otlogestwe, 2014 : 270). La figure 1 ci-dessous montre l'interface de WS Tools et les trois fonctions principales.

Figure 1 : Interface des fonctions Concordance, Mot-clé et Liste de mots

p05-01.png

La création d'une liste de mots est utile car c'est là et comment l'enquête est provoquée et générée avec des ratios de fréquence élevés et faibles. Selon Römer et Wulff (2010), "[…] une première étape utile dans l'approche d'un corpus ou d'un texte est de générer une liste de tous les mots qui y apparaissent avec leurs fréquences". Une liste de fréquence fournit une gamme diversifiée de types de mots, de jetons ou de formes qui composent un corpus. La liste de mots dans Wordsmith Tools version 6 est capable de créer des listes triées par ordre alphabétique et par ratio élevé à faible.

Alors qu'une liste de mots met en évidence ce qui est fréquent dans un corpus ou un texte, elle ne nous indique pas ce qui est significatif ou inhabituellement fréquent. La liste de mots-clés permet au chercheur d'identifier les mots les plus saillants ou d'une fréquence inattendue dans un corpus. Elle compare une liste de fréquences de mots basée sur le corpus à analyser (AC) avec une autre liste de fréquences de mots basée sur un RC.

Le tableau 2 liste les acronymes utilisés dans le programme Wordsmith Tools qui sont utilisés lors du test de la pertinence des mots lorsque l'AC est comparée au RC.

p05-02.png

Tableau 2: Acronymes utilisés dans le programme Wordsmith Tools

Une concordance est une liste alphabétique des mots principaux utilisés dans un livre ou un ensemble d'œuvres. Elle répertorie chaque occurrence de chaque mot avec son contexte immédiat. Barnbrook (1996) note qu'une liste de concordance « fournit un moyen simple de replacer chaque mot dans son contexte original, afin que les détails de son utilisation et de son comportement puissent être examinés correctement ». Les concordances sont généralement affichées au format KWIC, avec le mot de recherche (ou phrase) affiché au milieu de l'écran et un certain contexte à gauche et à droite de celui-ci. Une concordance met en évidence une liste de mots particuliers ou une séquence de mots en contexte et se trouve au centre de la CL, car elle permet d'accéder à de nombreux schémas linguistiques importants dans les textes. Dans une observation désormais célèbre, Firth (1957:179) a déclaré que "vous connaîtrez un mot par la compagnie qu'il garde". Cela signifie que les collocatifs apparaîtront dans une relation lexicale entre deux ou plusieurs mots qui ont tendance à co-occurrer à quelques mots de distance l'un de l'autre dans un texte continu.

Selon Wodak et Meyer (2016), la méthodologie CL fournit des vues analytiques statistiques, cohérentes et concises sur l’information écrite, en calculant les fréquences et les mesures de signification statistique, ainsi qu’en présentant des extraits de données afin que le chercheur puisse accéder à des occurrences uniques de mots de recherche, examiner qualitativement leurs environnements collocationnels, décrire les modèles saillants et les fonctions du discours identitaire.

## 4 Collections

La présente étude comprenait un petit corpus LSP ciblé collecté à partir de quatre manuels de littérature isiZulu, à savoir Insila KaShaka de JL Dube (deuxième auteur masculin de l'histoire de l'écriture isiZulu), Bafa Baphela de Joyce Jessie Gwayi (première auteure féminine de l'histoire de l'écriture isiZulu), Umdonsiswano de Condy Nxaba (auteur masculin contemporain) et Amandl' Esambane de Babhekile Ngcobo (auteure féminine contemporaine). UZulu kaMalandela de P Lamula a été la première œuvre de fiction écrite par une personne zouloue en 1924 et Insila kaShaka de JL Dube a été la deuxième en 1930. Le premier livre d'un auteur zoulou fut Abantu abamnyama lapho abavela khona de Magema Fuze en 1922 qui n'était pas une œuvre littéraire. Cela a exigé que le chercheur utilise le livre de JL Dube pour cette étude car il était facile d'accès. Chacun de ces livres a été utilisé comme un AC. Un corpus LSP est un corpus spécifique à la langue, qui examine une langue restreinte à un domaine particulier (Bowker et Pearson, 2002). L'avantage d'utiliser des corpus de LSP est qu'il est plus facile d'identifier les termes spécialisés, fournissant ainsi une grande quantité d'informations concernant les mots, la fréquence, la structure et le style dans la langue spécialisée. La langue à des fins spécifiques est également utile pour détecter la différence entre la langue standard et les registres spécifiques ainsi que les néologismes (nouveaux termes) qui émergent dans la langue (Weisser, 2016). L'AC est un corpus technique, ce qui signifie qu'il est spécifique au domaine. La motivation pour choisir ces textes était de baser l'analyse sur le zoulou traditionnel/ancien et le zoulou contemporain. Insila kaShaka avec 19 425 jetons et Bafa Baphela avec 22 103 jetons tombent sous l'ère traditionnelle de l'écriture tandis que Umdonsiswano avec 49 341 jetons et Amandl' Esambane à 31 251 jetons suivent la manière contemporaine d'écrire. Les corpus LSP ont été utilisés pour comparer la sensibilité au genre dans la littérature traditionnelle à celle de la littérature contemporaine afin d'étudier tout changement de langage et d'assurer un équilibre lors de l'étude du corpus. Un RC est un corpus non technique conçu selon Oostdijk et al., (2021) pour fournir des informations complètes sur une langue. Il vise à être suffisamment large pour représenter toutes les variétés pertinentes de la langue, et le vocabulaire caractéristique, afin qu'il puisse être utilisé comme base pour des grammaires fiables, des dictionnaires, des thésaurus et d'autres matériels de référence linguistique. Le modèle de sélection définit généralement un certain nombre de paramètres qui prévoient l'inclusion de autant de variables sociolinguistiques que possible et prescrit les proportions de chaque type de texte qui est sélectionné (Oostdijk et al., 2013).

Les textes collectés pour l'AC et le RC ont été numérisés et convertis en format texte brut pour la compatibilité avec WordSmith Tools. L'analyse des données est améliorée par la mesure dans laquelle les données du corpus ont été traitées et annotées pour faciliter la réutilisation. Selon John Sinclair, un corpus peut être soit annoté, ce qui signifie qu'une analyse linguistique a été effectuée sur le texte, soit orthographique, ce qui signifie que les textes n'ont pas été analysés linguistiquement. Il qualifie ce dernier de corpus brut (Sinclair, 1991). Le corpus utilisé dans cette étude est brut et donc non annoté.

Quatre textes en zoulou ont été analysés pour tester la sensibilité au genre en utilisant un ensemble de mots qui co-occurrent, appelés collocatifs. Les analyses linguistiques qui utilisent des méthodes et des outils CL ne représentent donc pas la langue entière, mais des exemples de textes qui reflètent la langue qui doit être analysée. Les matériaux du corpus ont été recueillis à partir des corps soigneusement sélectionnés de la littérature publiée décrite ci-dessus. Les données ont été recueillies en rassemblant les textes de chaque roman/œuvre littéraire. Le corpus a été collecté et analysé à l'aide du programme logiciel Wordsmith Tools (WS Tools). L'étude a bénéficié des principales fonctionnalités de traitement des données de WS Tools, comme l'outil Liste de fréquences et l'outil Concordance. Pour permettre un examen plus approfondi des données du corpus, une Liste de Mots et une Liste de Fréquence ont été créées à partir de l'ensemble du corpus en utilisant WS Tools. L'analyse de Concordance a ensuite été menée sur des mots de contenu sélectionnés considérés comme instructifs et informatifs pour l'étude.

Le corpus a été analysé et interrogé en relation avec la sensibilité de genre. L’un des avantages de la LC et de l’analyse critique du discours est qu’elles permettent une analyse qualitative et quantitative. L'analyse quantitative vise à mesurer et qualifier les données afin de représenter numériquement une réalité donnée et examine les types et les tokens globaux, la liste de mots et la fréquence d'un mot clé de contenu. Selon Weisser (2016), le type est un mot représentatif dans la liste de fréquence d'un corpus et le token fait référence à l'occurrence individuelle d'un type particulier, c'est-à-dire le nombre de mots dans un corpus. Une liste de mots répertorie les mots qui apparaissent dans le corpus, soit par ordre alphabétique, soit par ordre de fréquence. Une liste de fréquence enregistre les mots du corpus selon le nombre de fois où ils sont utilisés. L’analyse qualitative cherche à développer l’analyse quantitative en identifiant les mots les plus fréquents et les moins fréquents. Les caractéristiques saillantes qui ont émergé du corpus étaient liées à la façon dont les textes ont relayé leur discours sur la sensibilité au genre. Cela a été fait en regardant les mots qui se produisent avant et après le mot de contexte et est connu comme le KWIC. L'étude a ainsi tiré profit d'un mélange judicieux d'approches quantitatives et qualitatives.

## 5 Interrogation

L'AC est un corpus LSP comptant 122 121 mots courants et le RC est un corpus LGP comptant 2 039 691 jetons. Chaque livre a été analysé pour sa pertinence en isolation et par rapport aux mots-clés de genre. Keyness se réfère à la mesure dans laquelle les textes montrent un profil stylistique spécifique par rapport à un autre ensemble de textes. Il est quantifié en mesurant les différences positives ou négatives dans le lexique de l'auteur (s) en juxtaposition au lexique des textes dans un corpus de référence avec lequel le premier est comparé. Le chercheur a assemblé et analysé cinq corpus différents. Ils sont étiquetés Insila kaShaka (AC1), Bafa Baphela (AC2), Umdonsiswano (AC3), Amandl' Esambane (AC4), et enfin le IsiZulu National Corpus, étiqueté RC.

Pour déterminer l'importance des mots, les ratios de fréquence des mots dans le AC ont été comparés aux ratios de fréquence de ces mots tels qu'ils apparaissent dans un corpus général (le RC). Selon Mason et Platt (2006:159) "nous comptons combien de fois un item lexical particulier apparaît dans le texte. Ensuite, nous calculons combien de fois nous nous attendrions à ce que l'item apparaisse dans un texte de cette longueur, en utilisant la fréquence de l'item dans un grand corpus comme indication. Le ratio entre la fréquence observée et la fréquence attendue nous indique alors si un mot est significatif ou non".

Les mots qui apparaissent plus fréquemment dans le AC que dans le RC ont une valeur de keyness positive, tandis que ceux qui apparaissent moins fréquemment ont une valeur négative. Cela a révélé les mots qui sont sensibles au genre en isiZulu. L'analyse de keyness a fourni des preuves claires de la distinction entre la parole masculine et la parole féminine (ou sa représentation) en isiZulu. Dans la langue anglaise, il est entendu que les collocatifs qui accompagnent masculin/garçon sont généralement des mots positifs comme fort, grand, courageux, etc. Ceux qui accompagnent la femme/fille sont associés à des caractéristiques négatives telles que faible, mince, effrayée, etc. En utilisant l'approche CL, des modèles paradigmatiques similaires ont été analysés dans cette étude puisque la culture zouloue est connue pour être patriarcale. Selon Atanga et al. (2013), l'utilisation de l'isiHlonipho est liée au contrôle et à la régulation patriarcale du comportement des femmes. La coutume linguistique de l'isiHlonipho est liée à un code de comportement strict (ukuhlonipha). Mathonsi et Gumede (2006) notent que, Ukuhlonipha exige d'une femme zouloue de s'abstenir d'exprimer directement et publiquement son opinion comme un signe de sa féminité. On sait que les femmes sont marginalisées dans leur discours en langue zouloue et que leur discours diffère de celui des hommes en raison de l'utilisation de l'isiHlonipho. Cependant, ce phénomène n'est plus largement pratiqué dans le discours de la plupart des femmes zouloues modernes et elles utilisent pratiquement le même registre de discours que les hommes en raison de l'évolution progressive des hiérarchies, du statut et du pouvoir.

## 6 Discussion

Dans l'analyse des données, nous avons d'abord examiné les mots qui caractérisent la masculinité pour vérifier tout détail intéressant en créant une liste de mots. Il est intéressant de noter que les mots suivants ont des ratios de fréquence élevés : uJeqe, inkosi, uShaka et izinkomo, et il est évident que leur fonction est étroitement liée à celle de la masculinité et du pouvoir.

Une liste de concordance a été créée pour l'analyse du mot izinkomo. Dans la culture zouloue traditionnelle, le bétail est associé au pouvoir et à la richesse. Dans cette analyse, la notion d'izinkomo appartenant aux membres masculins de la société est évidente; la richesse est héritée par les hommes de génération en génération.

p08-patch01.png

Tableau 3: Liste de concordance de AC 2

Les relations de pouvoir sont évidentes dans les lignes de concordance sélectionnées ci-dessus (voir tableau 3) où izinkomo est montré comme appartenant à la nation et comme une forme de richesse dans "[...]useziqoqe zonke izinkomo zesizwe" (il a recueilli tous les bovins qui appartiennent à la nation).

Les relations de pouvoir sont discursives, et le discours en lui-même constitue la société et la culture, sont évidentes dans cet extrait, où le bétail est représenté comme un signe de pouvoir et de richesse dans la société zouloue traditionnelle. Il est également évident dans les concordances de la ligne 16 que le bétail a une valeur transactionnelle semblable à la valeur monétaire contemporaine.

Il ressort clairement des collocatifs du tableau 3 que les izinkomo (bovins) sont associés au pouvoir brutal et impérial de saisir le bétail (cf. ligne 3). Izinkomo est également associé à un genre spécifique, mis en évidence par les collocatifs amabutho (guerriers), abafana (garçons), inkosi (roi) et -ntshontsh- (vol). Il ressort clairement de la signification associée que l'izinkomo représente la masculinité et le pouvoir dans la culture et la société zouloues. En utilisant l'analyse CL, les collocatifs mettent ainsi en évidence la représentation des relations de pouvoir. Le bétail est une forme de richesse et une telle richesse est associée à la masculinité et au pouvoir.

p08-patch02.png

Tableau 4: Liste de concordance de l'AC 3

Le tableau 4 présente la liste de concordance du mot ndodana (fils) extraite de AC 3. Les collocatifs qui accompagnent ndodana dans la ligne 1 montrent clairement que le père encourage le fils à ne pas perdre espoir/foi. La positivité est soulignée. Dans la ligne 3, le fils reçoit des éloges et est célébré pour sa virilité. L'accent est mis sur le fait que «bien faire» est la marque de la virilité ou de la masculinité «muhle impela umsebenzi wakho, ndodana. Isebenza kanjena-ke indoda» (votre travail est en effet impressionnant, c'est précisément ainsi que fonctionne un homme). On observe donc que dans la culture et la société zouloues, le succès et une impression positive sont associés à un homme.

L'avantage de l'analyse des concordances est qu'elle permet d'étudier de près les textes. C'est parce que l'élément recherché est isolé et mis en évidence. Il est également accompagné de contexte de chaque côté pour comprendre le sens d'un mot inconnu et pour désambiguïser les sens problématiques des mots. Il est un fait avéré en linguistique que nous en savons plus sur un mot à travers la compagnie qu'il tient.

Les concordances énumèrent toutes les occurrences d'un mot trouvé dans le corpus sélectionné, ce qui permet de gagner du temps car il n'est pas nécessaire de parcourir chaque fichier texte séparément et d'en extraire les exemples pertinents.

Il est important de noter qu'il semble n'y avoir aucune distinction dans l'utilisation du langage sensible au genre entre les deux auteurs écrivant à la même période, c'est-à-dire l'écriture traditionnelle ancienne. Il est instructif que les données du corpus AC 2 de l'auteure féminine montrent le mot le plus fréquent amabutho 4 (guerriers) comme numéro 4 dans la liste de mots. Bien que indlovukazi, 5 (Mère du Roi/Épouse du Roi) soit au numéro 5 dans la liste de fréquence des mots, des références intéressantes comme l'instrument de guerre traditionnel, ngemikhonto, 134 (avec des lances) et des noms comme Bhekimpi, 150 (Veillant sur l'armée/Prêt pour l'attaque) sont des mots associés à la masculinité.

Ces exemples montrent clairement que les récits ou les discours des auteurs masculins et féminins sont encadrés dans les influences socioculturelles plus larges qui reflètent le monde dominé par le pouvoir et l'influence des hommes. Même le mot indlovukazi est défini par son association avec la masculinité, soit comme la "mère du Roi" ou "épouse du Roi". Les corpus AC 2 et AC 3 montrent donc clairement que l'utilisation de l'isiZulu est genrée dans le sens où les images de pouvoir, de richesse, de précision, de succès, de force, de guerre, de conquête, etc. sont toutes associées au genre masculin.

Compte tenu de l'histoire du patriarcat et d'une culture qui considère les femmes comme plus faibles, il est clair que l'isiZulu est une langue préjudiciable où les femmes sont décrites comme plus faibles que le sexe opposé. Le registre isiHlonipho a été présenté comme un bon exemple des relations asymétriques entre les sexes dans l’usage de la langue en isiZulu.

L'existence de l'isiHlonipho en tant que registre spécifique au genre pose la question de savoir si l'isiZulu, en tant que langue, a un moyen de se référer aux deux sexes sans offenser l'un ou l'autre. Il est évident à partir des corpus que les hommes ou la masculinité sont perçus positivement et sont associés au progrès, tandis que les femmes ou la féminité sont soit absentes du discours, soit perçues à travers les lentilles de la masculinité, telles que des références comme indlovukazi. Il est clair que les femmes resteront inférieures aux hommes en raison des normes patriarcales profondément ancrées dans la culture zouloue. Le corpus montre clairement dans les collocatifs que les mots qui se réfèrent aux femmes sont la plupart du temps accompagnés d'un diminutif, contrairement à ceux qui se réfèrent aux hommes.

Il est également remarquable qu'il n'y ait aucune preuve de corpus dans la littérature contemporaine, tant des auteurs masculins que féminins, suggérant un écart marqué par rapport à un langage genré historique biaisé en faveur de la célébration de la masculinité vers une utilisation plus neutre et sensible au genre.

## 7 Conclusion

Afin de documenter et d'expliciter les attitudes envers les femmes, une approche multi-méthodes intégrant principalement des méthodes qualitatives et soutenue par des méthodes quantitatives a été utilisée pour analyser les données. L'avantage d'une telle approche est que la richesse et la précision de l'analyse qualitative sont combinées avec des résultats statistiquement fiables et généralisables (Schmied, 1993). En général, la recherche qualitative est utilisée pour décrire et répondre aux questions du point de vue d'un participant. Les données sont utilisées pour identifier des éléments, expliquer des aspects de l'utilisation et fournir des exemples concrets de ceux-ci. Le processus inductif des études qualitatives procède par des questions générales, la collecte de grandes quantités de données, l'observation minutieuse des données, puis la présentation des résultats, qui peuvent produire des réponses provisoires sur ce qui a été observé (Glesne et Peshkins, 1992).

Cette recherche a donc incorporé une collecte et une organisation de l'information textuelle dans un corpus, ainsi qu'une enquête et une interrogation du corpus afin de discerner les relations et les pratiques sociales liées à une communauté ou à une société de langue isiZulu. Il est à noter que l'ADC s'intéresse à une enquête minutieuse et longue sur les causes majeures des événements et les résultats des questions qui s'y rapportent. Par conséquent, il nécessite un enregistrement point par point des connexions entre le contenu, le discours, la société et la culture.

## 8 Références

Adolphs, S. 2000. Introducing electronic text analysis. New York: Routledge.

Anthony, L. 2011. AntConc (Version 3.2. 2) [Computer Software]. Tokyo, Japan: Waseda University.

Baker, P. and McEnery, T. 2005. A corpus-based approach to discourses of refugees and asylum seekers in UN and newspaper texts, Journal of Language & Politics, 4:2,197-226.

Barlow, M. 2000. Monoconc Pro 2.0: Athelstan.

Barnbrook, G. 1996. Language and Computers: A Practical Introduction to the Computer Analysis of Language. Edinburgh: Edinburgh University Press.

Biber, D., Conrad, S. and Reppen, R. 1998. Corpus linguistics: Investigating language structure and use. Cambridge University Press.

Bower, L. and Pearson, J. 2002. Working with Specialized Language: A practical guide to using copora. London: Routledge.

Chitauro-Mawema, M. 2006. Gender Sensitivity in Shona Language Use: A lexicographic and corpus-based study of words in context.

Dowling, T. 1988. IsiHlonipho Sabafazi: The Xhosa women's language of respect. A sociolinguistic exploration. MA Thesis, University of Cape Town, South Africa.

Finlayson, R. 1982. Hlonipha - the women's language of avoidance among the Xhosa. South African Journal of African Languages, 1:1, 35-60.

Franz, A. 1996. Automatic Ambiguity Resolution in Natural Language Processing: An Empirical Approach. Tokyo: Springer.

Glesne, C. and Peshkins, A. 1992. Becoming Qualitative Researchers: An introduction. White Plains, NY: Longman.

Hammer, A. and Damascelli, A. T. 2002. Corpus Linguistics and Computational Linguistics: An overview with Special Reference to English. Torino: Celid.

Khumalo, L. 2015a. Advances in Developing corpora in African languages. Kuwala, 1:2, 21-30.

Khumalo, L. 2015b. Semi-automatic Term Extraction for an isiZulu Linguistic Terms Dictionary. Lexikos, 25 (AFRILEX-reeks/series 25:2015), 495-506.

Khumalo, L. n.d. Corpora as agency in the intellectualization of African languages.

Krishnamurthy, R. 2011. Accessing all areas: Corpus Analysis methods in inter-disciplinary applications.

Luthuli, T. 2007. Assessing Politeness, Language and Gender in Hlonipha. MA Thesis, University of KwaZulu-Natal, South Africa.

Mabuya, R. 2018. A corpus linguistic analysis of gender sensitive language in isiZulu. MA Thesis, University of KwaZulu-Natal, South Africa.

Makoni, B. 2014. Feminizing linguistic human rights: use of isihlonipho sabafazi in the courtroom and intra-group linguistic differences, Journal of Multicultural Discourses, 9:1, 27-43.

Mason, O. and Platt, R. 2006. Embracing a new creed: Lexical patterning and the encoding od ideology. College Literature 33:1,155-170.

Mathonsi, N. and Gumede, S.H. 2006. Communication through performance: Izigiyo Zawomame as Gendered Protests. Journal of Southern African Linguistics and Applied Language Studies, 24:4,483-494.

McEnery, T. and Wilson, A. 1996. Corpus Linguistics. Edinburgh: Edinburgh University Press.

Ngcobo, M.N. and Nomdebevana, N. 2010. The Role of Spoken Language Corpora in the Intellectualisation of Indigenous Languages in South Africa. Alternation: Interdisciplinary Journal for the Study of the Arts and Humanities in Southern Africa. 17:1,186-206.

Oostdijk, N., Reynaert, M., Hoste, V. and Schuurman, I. 2013. The construction of a 500 million word reference corpus of contemporary written Dutch: Essential Speech and Language Technology for Dutch. (eds) Spyns, P and Odijk, J. Springer: Heidelberg.

Otlogetswe, T.J. 2014. Extracting business terms for dictionary subject label. In African Languages and Linguistic Theory. CASAS Book Series 109. Cape Town: CASAS.

Scott, M. 1996. WordSmith tools: Oxford: Oxford University Press.

Sinclair, J.M. 1991. Corpus concordance collocation. Oxford: Oxford University Press.

Sinclair, J. M. 2004. How to use corpora in language teaching (Vol. 12). John Benjamins Publishing.

Spiegler, S., Van Der Spuy, A., and Flach, P. A. 2010. Ukwabelana: An open-source morphological Zulu corpus. Paper presented at the Proceedings of the 23rd International Conference on Computational Linguistics.

Spiegler, S. 2011. Machine learning for the analysis of morphologically complex languages. University of Bristol.

Swales, J. 2000. Languages for Special Purposes. Annual Review of Applied Linguistics, 20, 59-76. Cambridge: Cambridge University Press.

Weisser, M. 2016. Practical Corpus Linguistics: An Introduction to Corpus-Based Language Analysis. United Kingdom: Wiley Blackwell.

Wilkinson, S. 2011. Analysing focus group data. In D. Silverman (Ed.), Qualitative research (3rd ed., pp. 168-184). London, UK: Sage.
