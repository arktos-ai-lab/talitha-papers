> Machine translation (fr) of "Resources for Annotating Hate Speech in Social Media Platforms Used in Ethiopia: A Novel Lexicon and Labelling Scheme" by Nuhu Ibrahim, Felicity Mulford, Matt Lawrence, Riza Batista-Navarro, https://aclanthology.org/2024.rail-1.13/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Ressources pour l'annotation des discours de haine sur les plateformes de médias sociaux utilisées en Éthiopie : un lexique novateur et un schéma d'étiquetage

Nuhu Ibrahim, Felicity Mulford, Matt Lawrence, Riza Batista-Navarro

**Affiliations**  
Nuhu Ibrahim†, Felicity Mulford†, Matt Lawrence† and Riza Batista-Navarro†,‡  
†Centre for Information Resilience, London, UK  
‡Department of Computer Science, The University of Manchester, UK  
, , 

## Résumé

Le discours de haine sur les médias sociaux a proliféré en Éthiopie. Pour soutenir les études visant à examiner les cibles et les types de discours de haine circulant dans le contexte éthiopien, nous avons développé un nouveau schéma d'annotation détaillé qui capture trois éléments du discours de haine : la cible (c'est-à-dire tout groupe ayant des caractéristiques protégées), le type (c'est-à-dire la méthode d'abus) et la nature (c'est-à-dire le style du langage utilisé). Nous avons également développé un nouveau lexique de mots-clés liés au discours de haine dans les quatre langues les plus en vue des médias sociaux éthiopiens: amharique, afaan oromo, anglais et tigrigna. Ces mots-clés nous ont permis de récupérer des publications de médias sociaux (également dans les quatre mêmes langues) sur trois plateformes (à savoir X, Telegram et Facebook), susceptibles de contenir des discours de haine. Des experts du contexte éthiopien ont ensuite annoté manuellement un échantillon de ces publications récupérées, obtenant une concordance inter-juges allant de passable à modérée. Les annotations résultantes ont servi de base à une étude de cas sur les groupes qui tendent à être ciblés par des types particuliers de discours de haine ou par des styles particuliers de langage de haine.

## Mots-clés

Discours de haine, langues éthiopiennes, médias sociaux, schéma d'annotation, développement du lexique

## 1. Introduction

Les plateformes de médias sociaux sont devenues de puissants outils de communication, permettant aux individus d'exprimer leurs opinions, d'échanger des informations et de participer à des discussions diverses (Poell and Van Dijck, 2015). Néanmoins, l’environnement sans restriction de ces plateformes a également favorisé la propagation du discours de haine, présentant des obstacles notables à la cohésion sociale, en particulier dans des contextes culturellement divers comme l’Éthiopie. Avec l'essor de la communication numérique qui a encouragé l'entremêlement de la vie personnelle et publique en ligne, les discours de haine ont découvert de nouveaux canaux de propagation, ciblant fréquemment les communautés marginalisées ou les groupes minoritaires (Kovács et al., 2021) et intensifiant les divisions sociales (Targema et Lucas, 2018).

L'Éthiopie, un pays connu pour sa riche diversité linguistique et culturelle, a été témoin de la rapide propagation des discours de haine sur les plateformes de médias sociaux telles que Twitter, Telegram et Facebook (Delelegn, 2021). Les événements récents, y compris la violence interethnique et l'instabilité politique, ont souligné l'impact destructeur des discours de haine en ligne sur la société éthiopienne. Par exemple, l'escalade des tensions entre les groupes ethniques dans diverses régions a été alimentée, en partie, par la diffusion des discours de haine et des discours incendiaires sur les plateformes de médias sociaux (Delelegn, 2021).

Les langues minoritaires continuent de faire face à une pénurie de ressources informatiques pour recueillir et analyser de vastes ensembles de données textuelles, ce qui se traduit par des ressources minimales ou inexistantes pour détecter automatiquement les discours de haine sur les médias sociaux (El-Haj et al., 2015; Kovács et al., 2021). Cette recherche vise à développer un système d'étiquetage à grains fins pour annoter les discours de haine. Le schéma d'étiquetage aide à produire un ensemble de données de discours de haine richement annoté qui n'identifie pas seulement la haine mais aussi les groupes ciblés avec des caractéristiques protégées, ainsi que le type et la nature du discours de haine. En outre, cette recherche vise à développer un lexique dans quatre langues (amharique, Afaan Oromo, anglais et Tigrigna) qui sont indicatifs du discours de haine selon des lignes de genre, ethniques et religieuses, qui, à notre connaissance, est actuellement le plus complet pour le contexte éthiopien.

Cette recherche s'appuie sur une étude antérieure menée par le Centre for Information Resilience (CIR) qui a examiné les expériences vécues et les impacts durables des abus en ligne par le biais d'une revue de la littérature existante et d'entretiens avec 14 femmes occupant des positions importantes dans les médias, la société civile et d'autres rôles publics en Éthiopie (Centre for Information Resilience, 2023). Leurs conclusions mettent en évidence la toxicité des environnements en ligne, et les personnes interrogées ont révélé que les abus et le harcèlement en ligne dont elles ont été victimes ont eu des répercussions dans le monde réel, notamment des dommages psychologiques, une réputation professionnelle endommagée, une vie familiale perturbée et le silence des femmes en ligne et hors ligne. Compte tenu de la gravité du discours de haine qui prolifère sur Internet dans les langues minoritaires et de son impact sur les événements en Éthiopie, nous soutenons qu’il est urgent de développer des ressources qui permettront le développement de méthodes de traitement du langage naturel (TALN) qui peuvent aider à détecter automatiquement de tels discours de haine. À cette fin, nous présentons : (1) un schéma d'annotation à grain fin pour étiqueter les discours de haine circulant sur les plateformes de médias sociaux utilisées en Éthiopie ; (2) un nouveau lexique de mots-clés liés aux discours de haine, couvrant les termes inflammatoires utilisés en amharique, en afaan oromo, en anglais et en tigrigna ; et (3) un corpus de publications sur les médias sociaux annotées sur la base du schéma d'annotation à grain fin.

## 2. Le contexte éthiopien

Cette recherche a utilisé la définition du discours de haine du gouvernement éthiopien, telle qu'énoncée dans la Proclamation sur la prévention et la répression du discours de haine et de la désinformation (no 1185/2020) (République démocratique fédérale d'Éthiopie, 2020), qui le définit comme « un discours qui encourage délibérément la haine, la discrimination ou les attaques contre une personne ou un groupe d'identité discernable, fondé sur l'appartenance ethnique, la religion, la race, le genre ou le handicap ».

Dans notre étude, nous avons exploré le discours de haine sur les plateformes de médias sociaux couramment utilisées en Éthiopie. Nous avons méticuleusement adhéré à la définition du discours de haine donnée par le Gouvernement éthiopien, comme indiqué ci-dessus. L'Éthiopie est extrêmement diversifiée en termes de langues utilisées, avec plus de 80 langues parlées (Leyew, 2020). Pour des raisons de faisabilité et de contraintes de ressources, nous avons décidé de nous concentrer sur l'analyse du contenu dans seulement quatre langues prédominantes : l'amharique, l'afaan oromo, l'anglais et le tigrigna. La sélection de ces langues a été guidée par leur importance sur les plateformes de médias sociaux dans le pays (Zelalem, 2010).

Pendant ce temps, trois plates-formes en ligne différentes ont été choisies comme source du contenu pour l'analyse, à savoir X (anciennement Twitter), Telegram et Facebook. Ces plateformes ont été sélectionnées en raison de leur usage répandu en Éthiopie (Daracho, 2020; Asale, 2020), ainsi que des possibilités offertes par leurs politiques en matière de collecte de données et de traitement (Sosa and Sharoff, 2022; Giglietto et al., 2012). En outre, il s’agissait de trois sites qui ont été signalés par les personnes interrogées (dans les recherches antérieures du CIR) comme étant les environnements dans lesquels elles étaient confrontées à des abus en ligne (Centre for Information Resilience, 2023).

## 3. Travaux connexes

Le développement de schémas d'étiquetage et de lexiques du discours de haine pour les langues éthiopiennes dans le domaine du TAL a suscité une attention croissante ces dernières années, motivé par la reconnaissance grandissante de la diversité linguistique et de la richesse culturelle de l'Éthiopie. Bien qu’il y ait peu de littérature spécifiquement consacrée à ce sujet, plusieurs efforts connexes ont fourni des informations précieuses sur les défis, les méthodologies et les approches pertinentes aux systèmes d’étiquetage des discours de haine et au développement de lexiques pour les langues éthiopiennes.

Peace Tech Lab (2023) a rapporté environ 21 termes inflammatoires, leurs orthographes associées et termes connexes, leurs significations et les raisons pour lesquelles ces termes sont inflammatoires. Ils ont également fourni 16 termes supplémentaires qui sont offensants et qui devraient être surveillés. Minale (2022) a compilé des mots-clés haineux en amharique et leur traduction en anglais, puis a regroupé les mots-clés en catégories, à savoir, les mots-clés liés à la 'nation éthiopienne', au 'genre', aux 'haineux', aux 'offensants' et aux 'religieux'. Ils ont utilisé ces mots-clés pour collecter automatiquement des données amhariques à partir de trois sites de médias sociaux: Facebook, Twitter et YouTube. Ces ensembles de données ont ensuite été classés par des annotateurs humains en quatre catégories : « discours normal », « discours de haine raciale », « discours de haine religieuse », « discours de discrimination sexuelle » et « discours de haine du handicap ».

Pendant ce temps, Jha et Mamidi (2017) ont recueilli des messages sexistes en anglais sur Twitter en faisant correspondre des termes ou des hashtags qui sont généralement utilisés lorsqu'ils affichent ce qu'ils appellent le « sexisme bienveillant ». Certains de ces termes et hashtags étaient: "aussi bon qu'un homme", "comme un homme", "pour une fille", "intelligent pour une fille", "amour d'une femme", "#adaywithoutwomen", "#womensday", "#everydaysexism" et "#weareequal". Les publications collectées ont été annotées manuellement et ont été utilisées pour entraîner un modèle basé sur l'apprentissage automatique afin de classer les publications en trois catégories ('Hostile', 'Benevolent', 'Others') en fonction du type de sexisme qu'elles exhibent. Similaire à Minale (2022), le travail de Jha et Mamidi (2017) a créé des mots-clés sexistes en amharique et les a utilisés pour collecter des publications sur Twitter ; ils ont également construit divers modèles de classification.

Certains travaux antérieurs se sont concentrés sur l'analyse des discours de haine pour les langues éthiopiennes. Par exemple, Getachew (2020) et Ayele et al. (2022) ont enquêté sur le discours de haine amharique. Kanessa et Tulu (2021) et Defersha et Tune (2021) se sont concentrés sur le discours de haine en Afaan Oromo tandis que Bahre (2022) a étudié le discours de haine en Tigrigna.

Nous avons constaté que la plupart des chercheurs dans le contexte éthiopien se sont concentrés sur le traitement des lexiques du discours de haine pour l’amharique, et que seuls des efforts limités ont tenté de traiter les lexiques du discours de haine pour d’autres langues éthiopiennes, par exemple, l’afaan oromo, le tigrigna et l’anglais (comme utilisé dans le contexte éthiopien). En revanche, notre travail a organisé des lexiques de discours de haine pour plusieurs langues éthiopiennes: amharique, Afaan Oromo, anglais et Tigrigna. Ces langues sont les plus utilisées sur les plateformes de médias sociaux dans le pays (Zelalem, 2010).

De plus, la plupart des schémas d'étiquetage développés pour les langues éthiopiennes ne classaient les discours de haine que comme 'haine' ou 'pas de haine'. Certaines études, comme celle de Minale (2022), sont allées plus loin en définissant des catégories de discours de haine : « discours normal », « discours de haine raciale », « discours de haine religieuse », « discours de discrimination fondée sur le genre » et « discours de haine fondé sur le handicap ». Jha et Mamidi (2017) ont également catégorisé les messages haineux/sexistes en « hostiles », « bienveillants » ou « autres », mais ils se sont concentrés uniquement sur l'identification du sexisme. Notre recherche va au-delà des travaux existants dans le développement d'un système d'étiquetage à grains fins qui identifie trois éléments dans les messages haineux: la cible, le type et la nature du discours de haine.

## 4. Schéma d'annotation

Les schémas d'annotation contiennent généralement un ensemble de directives ou de règles utilisées pour annoter ou étiqueter des données avec des informations ou des attributs spécifiques (Bird et al., 2009). Cette section traite du développement d'un schéma d'étiquetage à grain fin pour l'étiquetage des discours de haine sur les plateformes de médias sociaux dans le contexte éthiopien.

Conformément à la définition du discours de haine dans le contexte éthiopien, énoncée à la section 2, pour qu’un message soit considéré comme contenant un discours de haine, il doit être ciblé sur un individu ou un groupe ayant une caractéristique protégée. Lorsqu'un message contient un discours de haine, notre système d'étiquetage exige que les annotateurs étiquetent trois éléments dans le message: la cible, le type et la nature du discours de haine. Nous renvoyons le lecteur à la figure 1) pour un diagramme qui fournit un aperçu des étiquettes dans notre schéma d'annotation. Dans notre travail, le type de discours de haine fait référence à la méthode d'abus (comme les menaces), tandis que la nature fait référence au style utilisé dans le langage qui exprime l'abus (comme l'ironie ou les stéréotypes).

Pour capturer les informations sur la cible des discours de haine, les mots qui indiquent quel individu/groupe est visé doivent être assignés à l'une des étiquettes suivantes :

Genre : une personne ou un groupe de personnes d'un genre particulier.

Ethnicité: Un individu ou un groupe de personnes qui viennent d'un lieu particulier d'origine et de culture.

Religion : Un individu ou un groupe de personnes appartenant à un groupe religieux particulier.

Race: Un individu ou un groupe de personnes possédant des traits physiques distinctifs associés à une race particulière.

Handicap: Un individu ou un groupe de personnes possédant un handicap particulier.

p03-01.png

Figure 1: Vue d'ensemble des catégories dans notre schéma d'annotation.

En outre, pour recueillir des renseignements sur le type de discours, les mots qui décrivent la méthode d’abus devraient se voir attribuer l’une des étiquettes suivantes :

Insulte: Insultes ou expressions dénigrantes contre un individu/groupe en raison de caractéristiques protégées.

Menace : Intimidation, menaces ou incitation à la haine, à la violence ou à la violation des droits des individus, en raison de caractéristiques protégées.

Association présumée: Association présumée de caractéristiques protégées avec des connotations négatives.

Infériorité présumée: références à l'infériorité (ou la supériorité) présumée d'un individu / groupe avec une caractéristique protégée.

Enfin, la nature ou le style du discours de haine varie souvent d’un post à l’autre. Bien qu'elle ne soit pas essentielle pour la classification du discours de haine, la collecte d'informations sur le style permet de saisir les nuances du langage utilisé pour exprimer la haine. Pour capturer ces informations, le langage contenant de la haine doit être étiqueté comme l'un des suivants :

Agressif: Comprend un langage fort qui cherche à intimider physiquement, menacer ou inciter à la violence physique contre le destinataire, ou qui demande, suggère ou favorise une violation des droits du destinataire.

Offensant : Plusieurs formes différentes de discours, allant du langage insultant, méprisant ou dénigrant, à l'association de la cible (individu ou groupe) avec des traits personnels nuisibles ou faux, ou suggérant l'infériorité de la cible.

Ironique: Comprend des blagues, des satires ou des messages sarcastiques qui ciblent une caractéristique protégée du destinataire et pourraient être nocifs. Le contenu haineux est parfois transmis à l'aide de nuances dans le langage, telles que le sarcasme, l'humour ou la satire.

Stéréotypé : Correspond à des références implicites ou explicites à des croyances ou préjugés stéréotypés à l'égard d'un individu/groupe ayant des caractéristiques protégées.

Le schéma d'étiquetage garantit qu'une équipe d'annotateurs multilingues ait une compréhension partagée de ce que les étiquettes constituent comme discours de haine. De plus, lorsqu'il est utilisé, le schéma d'étiquetage produit un riche jeu de données de discours de haine qui indiquera non seulement si une publication contient de la haine, mais aussi la catégorie cible des caractéristiques protégées recevant la haine, ainsi que le type et la nature de la haine reçue. Cela aidera à répondre à des questions substantielles comme :

Dans quelle mesure les groupes ayant des caractéristiques protégées particulières, par exemple, le genre, la religion, l'origine ethnique, la race, etc., reçoivent-ils de la haine sur les médias sociaux ?

Quels types et natures de discours de haine sont prévalents ?

Certaines caractéristiques protégées reçoivent-elles plus de haine sur les médias sociaux que d’autres?

Comment le discours de haine varie-t-il entre les sous-groupes cibles, c’est-à-dire les femmes, les hommes et les homosexuels pour la catégorie de genre?

Comment le discours de haine varie-t-il lorsque plusieurs caractéristiques protégées sont ciblées (c'est-à-dire le discours de haine qui cible des individus/groupes selon plusieurs axes identitaires) ?

## 5. Étude de cas

Notre schéma d'annotation a été appliqué à une étude de cas visant à examiner quels groupes ayant des caractéristiques protégées ont souvent été ciblés par des discours de haine dans le contexte éthiopien, ainsi que le type et la nature du langage qui leur est adressé. Cette section décrit les étapes que nous avons suivies pour collecter et annoter des données provenant de diverses plateformes de médias sociaux en soutien à l'étude de cas.

## 5.1. Collecte des données

Nous avons collecté deux types de données : des mots-clés qui forment un nouveau lexique du discours de haine éthiopien, et des publications de médias sociaux formant un nouveau corpus de discours de haine.

## 5.1.1. Développement du lexique

Compte tenu du volume énorme de publications sur les médias sociaux publiées quotidiennement, nous avons développé un lexique de mots-clés pour faciliter la collecte de publications susceptibles de contenir du discours de haine. Plus précisément, nous avons recueilli des mots-clés dans quatre langues - amharique, afaan oromo, anglais et tigrigna - qui sont indicatifs de discours de haine le long de lignes genrées, ethniques et religieuses.

Le lexique a été développé grâce à des recherches en bureau qui ont employé à la fois l'identification et l'affinement de lexiques existants de discours de haine (Minale, 2022; Degu, 2022; Getachew, 2020; James, 1998; Jha et Mamidi, 2017; Gashe, 2022; Gao et al., 2017; Peace Tech Lab, 2023; Hatebase.org, 2023; Thalikir, 2016; Centre, 2021; Shariatmadari, 2016; Center for the Advancement of Rights and Democracy, 2023), l'identification d'autres mots-clés et récits lors d'entretiens semi-structurés en personne réalisés lors de l'étude antérieure du CIR (Centre for Information Resilience, 2023) et une table ronde qui a rassemblé 21 individus issus d'une variété d'organisations de la société civile, d'agences des Nations Unies et de groupes de défense des droits des femmes et des filles.

Une première version du lexique a été partagée avec les partenaires, les parties prenantes et les participants à la table ronde en Éthiopie pour recueillir leurs commentaires. Il est devenu évident à ce stade qu'il y avait confusion quant à savoir pourquoi certains termes avaient été inclus dans le lexique, car ils ne peuvent pas, à eux seuls, constituer un discours de haine. Il a été précisé aux parties prenantes que les mots-clés seront utilisés uniquement pour collecter le plus de messages possible (une approche à rappel élevé mais à faible précision), et l’inspection manuelle est toujours nécessaire, car nous reconnaissons que, comme avec tout dictionnaire, de nombreux mots-clés sont ambigus et donc leur présence dans un message ne signifie pas nécessairement que le message contient un discours de haine. Par conséquent, les annotateurs humains analyseront si le contenu contient effectivement des discours de haine, selon le schéma d'étiquetage développé.

Le lexique résultant se compose de 2 058 mots-clés inflammatoires dans les quatre langues relevant du champ de cette étude. Nous pensons qu'il s'agit, à ce jour, du lexique le plus complet pour le contexte éthiopien. Les figures 2 et 3 montrent respectivement le nombre et la distribution des mots-clés organisés pour chaque caractéristique protégée.

p04-01.png

Figure 2 : Nombre de mots-clés sélectionnés pour chaque caractéristique protégée

p05-01.png

Figure 3 : Distribution des mots-clés sélectionnés pour chaque caractéristique protégée

## 5.1.2. Collecte des données

Les publications sur les médias sociaux ont été recueillies sur les plateformes d’intérêt, à savoir X (anciennement Twitter), Telegram et Facebook. Pour collecter des données à partir de X, l'outil d'analyse des médias sociaux Meltwater a été utilisé. Meltwater prend en charge l'utilisation de la recherche par mots-clés pour les tweets publiés il y a moins de 18 mois à partir de la date de recherche. Afin de garantir l'obtention d'un échantillon pertinent, seuls les posts en anglais ont été récupérés s'ils provenaient d'Éthiopie.

En collectant des données depuis Telegram, les API officielles de Telegram ont été utilisées. Comme Telegram ne prend en charge que les recherches au sein des chaînes Telegram auxquelles un utilisateur appartient, des experts des médias sociaux d'Éthiopie ont été engagés pour méticuleusement dresser une liste des chaînes Telegram publiques largement populaires et influentes en Éthiopie. Par la suite, nous avons rejoint un total de 285 chaînes Telegram; les messages Telegram de ces chaînes contenant des mots-clés dans notre lexique ont été collectés.

Pour extraire des données de Facebook, des experts des médias sociaux d'Éthiopie ont été de nouveau sollicités pour sélectionner une liste de groupes et de profils Facebook éthiopiens publics et influents. À la suite de cet engagement, une liste de 300 profils ou groupes Facebook a été organisée et des messages de ces groupes contenant des mots-clés dans notre lexique ont été collectés.

## 5.1.3. Prétraitement des données

Le prétraitement des données est une étape cruciale qui consiste à nettoyer, transformer et organiser les données textuelles brutes pour les rendre adaptées à l'analyse (Tabassum et Patil, 2020).

Les données textuelles recueillies à partir des médias sociaux contiennent souvent des informations non pertinentes ou erronées qui compliquent l’analyse ou l’interprétation. Pour atténuer ce problème, nous avons effectué les tâches suivantes sur les ensembles de données de X, Telegram et Facebook :

Suppression des balises HTML et des caractères spéciaux.

Mise en minuscules du texte (c'est-à-dire rendre tous les caractères en minuscules) pour garantir l'insensibilité à la casse.

Suppression ou remplacement de la ponctuation.

Suppression des messages en double.

Les tâches de nettoyage suivantes ont été effectuées uniquement sur les ensembles de données en langue anglaise:

Suppression des valeurs numériques, des dates et d'autres informations non textuelles.

Suppression des mots vides qui ne portent pas de sens significatif (par exemple, "and", "the", "in").

Normalisation des abréviations et acronymes.

## 5.1.4. Anonymisation des données

Tous les noms d'utilisateur dans les messages ont été anonymisés conformément aux exigences éthiques, afin de protéger la vie privée et la confidentialité des personnes dont les données sont utilisées à des fins de recherche et d'analyse. Cela a été fait en remplaçant tous les noms d'utilisateur, c'est-à-dire tout mot apparaissant après le symbole '@' par le mot "USERNAME".

## 5.1.5 Échantillonnage en vue d'analyses complémentaires

Le processus de collecte de données a permis de recueillir des dizaines de millions de messages, comme l'illustre le tableau 1. Même après un prétraitement approfondi des données, qui a consisté à supprimer les doublons et les messages excessivement courts, il restait plus de 5 millions de messages.

En raison des contraintes posées par les ressources humaines limitées disponibles pour l'annotation manuelle afin de déterminer le contenu haineux, nous avons sélectionné un échantillon aléatoire pour obtenir des ensembles de données plus gérables. Le tableau 1 montre le nombre de publications résultant de chaque étape du processus de préparation des données et le nombre de publications choisies pour l'analyse ultérieure.

## 5.2 Tâche d'annotation

La tâche d'annotation implique de recruter des annotateurs humains compétents, familiers avec le domaine d'intérêt, pour utiliser le schéma d'étiquetage développé afin de déterminer si les publications du jeu de données collecté contiennent du discours de haine. Les annotateurs ont utilisé Doccano (Nakayama et al., 2018), un outil d'annotation open-source que nous avons employé pour étiqueter les publications dans nos jeux de données selon notre schéma d'annotation, c'est-à-dire pour annoter les cibles de discours de haine (caractéristiques protégées), le type et la nature du discours de haine.

p06-01.png

Tableau 1 : Le nombre de publications obtenues à chaque étape du processus de préparation des données.

## 6. Résultats des annotations

Pour garantir la cohérence dans l'application du schéma d'étiquetage fin, il était essentiel de calculer les scores de concordance inter-juges (IAA).

Deux annotateurs humains ont été recrutés pour annoter les messages en anglais choisis au hasard. L'annotateur principal, qui a participé au développement du schéma d'étiquetage fin et qui est connaisseur du contexte éthiopien, était responsable de l'annotation de l'ensemble des publications en anglais sélectionnées. Pour permettre l'estimation de l'IAA, un annoteur secondaire a été assigné pour annoter 10% de l'ensemble de données annotées par l'annoteur primaire.

Pour l'amharique, l'annotateur principal, un locuteur natif de l'amharique avec une expérience en analyse des médias sociaux, a réalisé l'annotation de l'ensemble du jeu de données amhariques, tandis que les deux autres annotateurs (qui se sont vu confier les jeux de données tigrigna et afaan oromo) ont été chargés d'annoter environ 10 % du jeu de données annoté par l'annotateur principal. L'IAA a ensuite été estimé à l'aide des publications annotées par les trois annotateurs afin d'évaluer le niveau d'accord et de cohérence.

Pour l'Afaan Oromo et le Tigrigna, un annotateur a été recruté par langue. L'IAA a été jugée inutile pour les annotateurs, car ces mêmes annotateurs avaient déjà travaillé sur l'annotation du jeu de données amharique, et les résultats de l'accord IAA sur le jeu de données amharique indiquaient leur compétence dans l'identification du discours de haine, l'étiquetage de sa cible, la catégorisation des types de discours et l'évaluation du sentiment de haine.

L'IAA a été calculée à l'aide des métriques de Cohen's Kappa (k) et de Fleiss' Kappa. Les scores d'IAA, présentés dans le Tableau 2, ont montré un accord faible à modéré entre les annotateurs (Landis et Koch, 1977).

p06-02.png

Tableau 2 : Résultat et interprétation de l'estimation de la concordance inter-juges entre annotateurs en termes de scores Kappa.

## 7. Discussion

Le lexique obtenu couvre un pourcentage plus élevé de mots-clés liés au genre (49,4 %) par rapport à ceux liés à l'ethnicité (9,1 %) ou à la religion (10,5 %) ; voir les figures 2 et 3. Malgré ce déséquilibre, il convient de noter que le corpus de publications de médias sociaux construit à partir de notre lexique a néanmoins révélé une plus grande prévalence de discours de haine ciblant d'autres groupes identitaires, comme l'illustre la Figure 4. Par exemple, sur l'ensemble des publications du jeu de données complet, les discours de haine ethnique représentaient 44,5 %, tandis que les discours de haine fondés sur le genre et les discours de haine religieuse représentaient respectivement 30,2 % et 17,5 %. La haine raciale et le discours de haine ciblant les personnes handicapées représentaient une plus petite proportion du jeu de données (4,6 % et 0,3 %, respectivement).

p06-03.png

Figure 4 : Distribution des publications contenant de la haine selon la cible de la haine.

Comme on peut le voir dans la Figure 5, lorsque les groupes de caractéristiques protégées sont décomposés en cibles de haine individuelles, d'autres tendances intéressantes deviennent visibles. Les groupes les plus ciblés sont les femmes et les filles (21 % de l’ensemble des données), suivies de près par les Oromos (19,1 %) et les Amharans (16,7 %). Comme le lexique comprenait plus de mots-clés liés au genre, cela n'est pas surprenant. D'autres cibles de discours de haine dans le jeu de données, bien que dans des proportions plus faibles, incluent les chrétiens orthodoxes (8,7 %), les hommes (5,9 %) et les Tigréens (5,5 %).

La catégorie « autres cibles de haine » (dans la Figure 5) est composée de tous les autres groupes cibles en dehors des 7 cibles les plus prévalentes ; cela inclut les protestants, les personnes blanches, les personnes transgenres, les athées, les Arabes, les personnes multiraciales et les Juifs. La catégorie « autre cible » a été sélectionnée dans les cas où un discours de haine ciblant une caractéristique protégée était présent, mais ne relevait d'aucune des catégories.

p07-01.png

Figure 5 : Distribution des publications contenant de la haine selon la cible de haine spécifique.

Le tableau 3 montre que les femmes et les filles reçoivent proportionnellement plus de discours de haine insultants (36,55 %) que les Amharas (28,31 %), les musulmans (29,51 %) et les Oromos (22,51 %). Elles reçoivent moins de discours de haine insultants comparé aux personnes homosexuelles (38,96 %) et aux Tigréens (45,21 %). De plus, les femmes et les filles reçoivent proportionnellement plus de haine contenant une prétendue infériorité (22,2 %), suivies des musulmans (16,39 %), des Amharas (11,90 %), des homosexuels et des Tigréens (12,99 % et 13,01, respectivement), et des Oromos (9,98 %). Inversement, les femmes et les filles reçoivent (proportionnellement) le moins de menaces (13,51 %) par rapport aux Oromos (26,11 %), aux Amhariens (22,22 %), aux Tigréens (22,6 %), aux homosexuels (20,78 %) et aux musulmans (18,03 %). Les femmes et les filles sont également parmi les sous-groupes cibles de la haine qui reçoivent proportionnellement moins de haine contenant une association présumée (27,74%), par rapport aux Amhares (37,57%), aux Musulmans et aux Oromos (36,07% et 41,4%, respectivement).

Intéressamment, il a été identifié que le langage offensant est la nature ou le style de discours de haine le plus répandu parmi toutes les cibles de haine analysées (voir Tableau 4). Contrairement à la tendance observée dans le langage offensant, les femmes et les filles reçoivent la plus forte proportion de langage stéréotypé (26,17%), suivies de près par les homosexuels (22,81%), puis les musulmans (12,5%), les amhariens (9,27%), les oromos (4,98%) et les tigrayans (2,65%). Seuls les musulmans reçoivent une proportion plus élevée de langage ironique (21,25 %) que les femmes et les filles (20,37 %). Néanmoins, les femmes et les filles sont considérablement plus ciblées par le langage ironique que les Tigrayens (11,5 %), les homosexuels (8,77 %), les Amharas (6,85 %) et les Oromos (5,32 %).

p07-02.png

Tableau 3 : Nombre de publications contenant de la haine selon la cible (top 7) et le type de discours de haine.

## 8. Conclusion

Dans notre recherche, nous avons développé un schéma d'annotation à grain fin pour étiqueter les discours de haine dans les publications sur les plateformes de médias sociaux utilisées en Éthiopie. Le schéma d'annotation a servi de base à la production d'un corpus de discours de haine richement annoté qui n'identifie pas seulement les publications contenant de la haine mais aussi les caractéristiques protégées ciblées, le type de haine, et la nature du langage utilisé dans les discours de haine.

De plus, cette recherche a produit un lexique couvrant quatre langues utilisées en Éthiopie, à savoir l'amharique, l'afaan oromo, l'anglais et le tigrigna, qui contient des mots-clés indicatifs de discours de haine selon des lignes genrées, ethniques et religieuses. À notre connaissance, ce lexique est actuellement le plus complet pour le contexte éthiopien. Nos travaux futurs seront axés sur l’étude de la manière dont le corpus annoté résultant de cette étude peut permettre le développement de modèles basés sur l’apprentissage automatique capables de détecter et de catégoriser automatiquement les discours de haine, ainsi que d’identifier automatiquement les cibles spécifiques des discours de haine.

p08-01.png

Tableau 4 : Nombre de publications contenant de la haine selon la cible (7 premières) et la nature du discours de haine.

## Déclaration éthique

Le Centre for Information Resilience (CIR) suit le Berkeley Protocol on Digital Open-Source Investigations. Pour cette étude, le soin a été pris d’anonymiser les données et de respecter les conditions générales des plateformes. Pour atténuer l'impact du traumatisme vicariant, les annotateurs ont bénéficié d'un soutien individuel de la part de la coordinatrice de recherche du CIR (la deuxième auteure de cet article). Cela visait à garantir que les annotateurs ne soient pas directement affectés par l'exposition aux discours de haine. Les annoteurs ont également été informés qu’ils ont accès à des ressources appropriées au cas où une aide professionnelle serait nécessaire.

## Remerciements

Nous tenons à remercier Adyam Solomon Tesfay, Alemu Teshome Baki et Fasika Tadesse pour leur travail acharné en tant qu’annotateurs de nos ensembles de données.

Ce matériel a été financé par le développement international du Royaume-Uni, issu du gouvernement britannique ; cependant, les opinions exprimées ne reflètent pas nécessairement les politiques officielles du gouvernement britannique.

## Notes

1 https://github.com/Centre-for-Information-Resilience/ethiopia-hate-speech-lexicon

2 Bien que la définition du discours de haine du gouvernement éthiopien (République fédérale démocratique d'Éthiopie, 2020) ne fasse pas explicitement référence à l'identité sexuelle, nous avons intégré l'identité sexuelle dans cette catégorie pour capturer la haine fondée sur l'orientation sexuelle.

3 https://explore.meltwater.com/meltwater-media-monitoring

4 https://core.telegram.org/

## Références bibliographiques

Moges Ayele Asale. 2020. The Tributes and Perils of Social Media Use Practices in Ethiopian Sociopolitical Landscape. In Proceedings of the 22nd HCI International Conference, volume 12427, page 199, Copenhagen, Denmark. Springer Nature.

Abinew Ali Ayele, Skadi Dinter, Tadesse Destaw Belay, Tesfa Tegegne Asfaw, Seid Muhie Yimam, and Chris Biemann. 2022. The 5Js in Ethiopia: Amharic Hate Speech Data Annotation using Toloka Crowdsourcing Platform. In Proceedings of the 2022 International Conference on Information and Communication Technology for Development for Africa, pages 114-120. IEEE.

Weldemariam Bahre. 2022. Hate speech detection from Facebook social media posts and comments in Tigrigna language. Ph.D. thesis, St. Mary's University.

Steven Bird, Ewan Klein, and Edward Loper. 2009. Natural Language Processing with Python: Analyzing Text with the Natural Language Toolkit. O'Reilly Media, Inc.

Center for the Advancement of Rights and Democracy. 2023. CARD's Bi-weekly Social Media Conversation Sensitivity Report.

The Wilson Centre. 2021. Malign Creativity: How Gender, Sex, and Lies are Weaponized Against Women and girls Online.

Centre for Information Resilience. 2023. Silenced, shamed, and threatened: The online abuse of women who participate in Ethiopian public life.

Lisanu Damene Daracho. 2020. Social Media Impact on Social Life of Public Servant in Mari Mansa District, Dawuro Zone, Southern Region, Ethiopia. New Media and Mass Communication, 93:1-7.

NB Defersha and KK Tune. 2021. Detection of Hate Speech Text in Afan Oromo Social Media Using Machine Learning Approach. Indian J Sci Technol, 14(31):2567-78.

Mekuanent Degu. 2022. Amharic dataset for hate speech detection. Mendeley Data.

Misganaw Delelegn. 2021. Hate Speech Regulation in Ethiopia: Lessons to Be Learned From Other Jurisdictions. Ph.D. thesis, Bahir Dar University.

Mahmoud El-Haj, Udo Kruschwitz, and Chris Fox. 2015. Creating language resources for underresourced languages: methodologies, and experiments with Arabic. Language Resources and Evaluation, 49:549-580.

Federal Democratic Republic of Ethiopia. 2020. Hate Speech and Disinformation Prevention and Suppression Proclamation (No. 1185/2020).

Lei Gao, Alexis Kuppersmith, and Ruihong Huang. 2017. Recognizing Explicit and Implicit Hate Speech Using a Weakly Supervised Two-path Bootstrapping Approach. In Proceedings of the 8th International Joint Conference on Natural Language Processing, pages 774-782, Taipei, Taiwan. Asian Federation of Natural Language Processing.

S. M. Gashe. 2022. Hate Speech Detection and Classification System in Amharic Text with Deep Learning. List of Amharic Hate Speech Keywords (Lexicons).

Surafel Getachew. 2020. Amharic Facebook Dataset for Hate Speech detection. Mendeley Data.

Fabio Giglietto, Luca Rossi, and Davide Bennato. 2012. The Open Laboratory: Limits and Possibilities of Using Facebook, Twitter, and YouTube as a Research Data Source. Journal of Technology in Human Services, 30(3-4):145-159.

Hatebase.org. 2023. Hatebase.org.

Deborah James. 1998. Gender-linked derogatory terms and their use by women and men. American Speech, 73(4):399-420.

Akshita Jha and Radhika Mamidi. 2017. When does a compliment become sexist? Analysis and classification of ambivalent sexism using twitter data. In Proceedings of the 2nd Workshop on NLP and Computational Social Science, pages 7-16.

Lata Guta Kanessa and Solomon Gizaw Tulu. 2021. Automatic Hate and Offensive speech detection framework from social media: the case of Afaan Oromoo language. In Proceedings of the 2021 International Conference on Information and Communication Technology for Development for Africa, pages 42-47. IEEE.

György Kovács, Pedro Alonso, and Rajkumar Saini. 2021. Challenges of hate speech detection in social media: Data scarcity, and leveraging external resources. SN Computer Science, 2:1-15.

J. Richard Landis and Gary G. Koch. 1977. The measurement of observer agreement for categorical data. Biometrics, 33(1):159-174.

Zelealem Leyew. 2020. Language and society in Ethiopia. Bulletin of the Department of Linguistics and Philology 40 years, page 64.

Samuel Minale. 2022. Amharic Social Media Dataset for Hate Speech Detection and Classification in Amharic Text with Deep Learning. Mendeley Data.

Hiroki Nakayama, Takahiro Kubo, Junya Kamura, Yasufumi Taniguchi, and Xu Liang. 2018. doccano: Text Annotation Tool for Human.

Peace Tech Lab. 2023. Hateful Speech and Conflict in the Federal Democratic Republic of Ethiopia: A lexicon of hateful of inflammatory words and Phrases.

Thomas Poell and José Van Dijck. 2015. Social media and activist communication. The Routledge companion to alternative and community media, pages 527-537.

David Shariatmadari. 2016. Eight words that reveal the sexism at the heart of the English language.

Jose Sosa and Serge Sharoff. 2022. Multimodal Pipeline for Collection of Misinformation Data from Telegram. In Proceedings of the 13th Language Resources and Evaluation Conference, pages 1480-1489, Marseille, France. European Language Resources Association.

Ayisha Tabassum and Rajendra R Patil. 2020. A Survey on Text Pre-Processing & Feature Extraction Techniques in Natural Language Processing. International Research Journal of Engineering and Technology, 7(06):4864-4867.

Tordue Simon Targema and Joseph M Lucas. 2018. Hate speech in readers' comments and the challenge of democratic consolidation in Nigeria: A critical analysis. Jurnal Pengajian Media Malaysia, 20(2):23-38.

Thalikir. 2016. Everyday misogyny: 122 subtly sexist words about women and girls (and what to do about them).

Amsale Zelalem. 2010. Design and Implementation of Multilanguage Electronic Dictionary for Smart Phones: A Dictionary of Amharic, Afaan Oromo, English and Tigrigna Languages. Ph.D. thesis, Addis Ababa University.
