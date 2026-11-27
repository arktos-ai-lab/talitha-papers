> Machine translation (fr) of "Advancing Language Diversity and Inclusion: Towards a Neural Network-based Spell Checker and Correction for Wolof" by Thierno Ibrahima Cissé, Fatiha Sadat, https://aclanthology.org/2024.rail-1.16/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Faire progresser la diversité et l'inclusion linguistiques : vers un correcteur orthographique et une correction à base de réseaux de neurones artificiels pour le wolof

Thierno Ibrahima Cissé, Fatiha Sadat

**Affiliations**  
Thierno Ibrahima Cissé, Fatiha Sadat  
Université du Québec à Montréal  
Montréal, Canada  
, 

## Résumé

Cet article présente une approche novatrice de vérification et de correction orthographique pour les langues peu dotées en ressources et sous-représentées, avec un focus spécifique sur une langue africaine, le wolof. En exploitant les capacités des modèles transformeurs et des réseaux de neurones artificiels, nous proposons un système efficace et pratique capable de corriger les fautes de frappe et d'améliorer la qualité du texte. Notre technique proposée consiste à entraîner un modèle transformeur sur un corpus parallèle composé de phrases mal orthographiées et de leurs équivalents correctement orthographiés, généré à l'aide d'une méthode semi-automatique. Alors que nous affinons le modèle pour transformer le texte mal orthographié en phrases précises, nous démontrons le potentiel immense de cette approche pour surmonter les défis rencontrés par les langues en manque de ressources et sous-représentées dans le domaine de la vérification et de la correction orthographique. Nos résultats expérimentaux et évaluations exhibent des issues prometteuses, offrant des perspectives précieuses qui contribuent aux efforts en cours visant à enrichir la diversité linguistique et l'inclusion et ainsi améliorer l'accessibilité de la communication numérique pour les langues luttant avec la rareté des ressources et la sous-représentation dans le paysage numérique.

## Mots-clés

Vérification orthographique et correction, langue à ressources limitées, wolof, en danger, autochtone, corpus parallèle, Transformer

## 1. Introduction

Au cours des dernières années, le traitement du langage naturel (NLP) a fait des progrès impressionnants dans la compréhension, l'analyse et la génération du langage humain. Pourtant, la plupart de ces progrès concernent des langues bien dotées en ressources comme l'anglais, le français et l'espagnol, laissant les langues peu dotées en ressources et sous-représentées avec des outils et ressources limités pour des applications efficaces de traitement automatique du langage naturel. Cet article vise à combler cette lacune en introduisant une approche novatrice pour la vérification et la correction orthographique dans les langues pauvres en ressources. Plus précisément, nous nous concentrons sur le wolof, un langage parlé africain qui a récemment suscité un intérêt dans la recherche en TAL. Nous présentons également un nouvel ensemble de données qui peut être utilisé pour la correction de mots en wolof. Cette étude contribue à l'objectif global de développer des outils et des ressources de traitement automatique des langues (TAL) inclusifs et efficaces, en alignement avec l'éthique de « ne laisser aucune langue de côté ».

Le wolof, une langue sénégambienne principalement parlée au Sénégal, en Gambie et en Mauritanie (Diouf et al., 2017), sert d'exemple de langue peu dotée qui pourrait grandement bénéficier des avancées du TAL. Malgré le fait d'avoir plus de 10 millions de locuteurs natifs (Eberhard et al., 2019), il existe un manque significatif de ressources numériques et d'outils informatiques pour la plupart des (sinon toutes) langues africaines, dont la langue wolof. Alors que le monde se connecte de plus en plus via les plateformes numériques, il est essentiel de garantir la disponibilité d'outils de TAL robustes pour les langues peu dotées comme le wolof. Fournir aux locuteurs de la langue des systèmes de vérification et de correction orthographique précis et efficaces peut améliorer l'accessibilité linguistique et promouvoir la communication numérique au sein de diverses communautés linguistiques.

Le développement de correcteurs orthographiques et de systèmes de correction pour les langues à faibles ressources est difficile en raison de la disponibilité limitée de données annotées, de la complexité morphologique et de l'absence de ressources informatiques bien établies. Les méthodes traditionnelles comme les systèmes basés sur des règles ou des dictionnaires peuvent ne pas répondre adéquatement à ces défis, nécessitant des approches alternatives. Les techniques d'apprentissage profond, en particulier les modèles transformeurs, ont récemment démontré un immense potentiel dans diverses tâches de TAL. Ces techniques peuvent apprendre des modèles de langage complexes et générer des représentations contextuelles, ce qui les rend idéales pour relever les défis associés à la vérification et à la correction orthographiques de langues à faibles ressources.

Cet article présente un modèle basé sur des transformateurs pour la correction de mots et l'orthographe en wolof. Notre modèle est entraîné sur un corpus parallèle composé de phrases mal orthographiées et de leurs homologues sans erreur, optimisant le modèle pour traduire le texte sujet aux erreurs en phrases précises. De plus, nous contribuons à l'avancement du TAL pour la langue wolof en créant un nouveau corpus de phrases mal orthographiées et de leurs équivalents sans erreur. Ce corpus sert de banc d'essai et d'état de l'art en correction de mots et en orthographe pour le wolof, fournissant une ressource précieuse pour la recherche future. Cette ressource facilitera le développement d'outils et d'applications de TAL plus avancés pour le wolof.

Le reste de cet article est organisé comme suit : la section 2 passe en revue les travaux connexes sur la langue wolof et offre un aperçu de la correction orthographique des langues peu dotées, ainsi que des réseaux de neurones artificiels et des modèles transformeurs en TAL. La section 3 détaille la méthodologie employée dans le développement de notre système de vérification et de correction orthographique basé sur les transformateurs. Section 4 présente nos résultats d'évaluation, y compris une discussion sur les performances du système. Dans la section 5, nous examinons les limitations de notre système et discutons des domaines potentiels d'amélioration. Enfin, la section 6 conclut le document, souligne les implications de nos conclusions et suggère des orientations de recherche futures.

## 2. Contexte

## 2.1. Langue wolof

Le wolof est une langue appartenant au groupe sénégambien de la branche nord de la famille des langues atlantiques, qui fait partie de la famille plus large des langues nigéro-congolaises. Il partage de fortes connexions linguistiques avec les langues Pulaar et Serer (Sapir, 1971; Doneux, 1978; Wilson, 1989). La famille des langues de l'Atlantique comprend environ 40 langues, le pulaar (un dialecte de Fula) étant l'exception, et la plupart sont parlées dans les régions proches de la côte atlantique de l'Afrique. Bien que le wolof soit fondamentalement une langue orale, son orthographe a été standardisée en 1972 (Robert, 2011).

Les études linguistiques descriptives du wolof remontent à la période coloniale (Boilat, 1858), tandis que d'autres recherches sur la morphologie et la syntaxe du wolof ont été menées par Diagne (1971), Mangold (1977), Church (1981), Dialo (1981), et Ka (1981). Les études analytiques approfondies de la syntaxe wolof se trouvent principalement dans les travaux de Njie (1982) et Dunigan (1994).

Le wolof est principalement une langue aspectuelle, se concentrant sur l'aspect d'une action plutôt que sur son temps. Cette caractéristique permet au marqueur imperfectif de se combiner avec divers marqueurs de temps. La langue dispose d'un système de verbes riches, qui comprend un large éventail de formes et de paradigmes verbaux de base. Notamment, Mangold (1977) et Church (1981) fournissent des présentations systématiques des paradigmes verbaux wolofs.

En termes de littérature et de ressources, Wolof apparaît sous diverses formes, telles que des romans, des recueils de nouvelles et de la poésie. Cependant, même au Sénégal, il est difficile de trouver des documents écrits en wolof. Des efforts récents ont été faits pour améliorer la disponibilité des ressources pour les locuteurs wolofs. Dans une étude réalisée par Gauthier et al. (2016), les chercheurs ont rassemblé un ensemble de données de reconnaissance automatique de la parole (ASR) pour quatre langues africaines, dont le wolof. Cet ensemble de données a ensuite été utilisé pour créer le premier système ASR pour Wolof. Une autre initiative a été proposée par Nguer et al. (2015), qui ont décrit le processus de création du premier dictionnaire wolof collaboratif en ligne. Ce projet faisait partie du projet plus large Dictionnaires Langues Africaines - Français (DiLAF), qui a produit des dictionnaires pour sept langues africaines, dont le wolof. Cependant, au moment de la rédaction, tous les dictionnaires sont accessibles en ligne à l'exception de celui du wolof. Plus récemment, Cissé et Sadat (2023) ont présenté une gamme de ressources pour la langue wolof, y compris un outil de correction orthographique principalement fondé sur les règles d'écriture de la langue.

## 2.2. Vérification et correction orthographiques pour les langues à ressources limitées

La vérification et la correction orthographiques pour les langues à faibles ressources ont été d'un grand intérêt pour de nombreux chercheurs. Les premières approches dépendaient souvent de systèmes basés sur des règles (Armstrong et al., 1995) ou de méthodes statistiques, telles que les modèles de canaux bruyants (Kernighan et al., 1990), les modèles n-grammes (Stolcke, 2000), et les modèles de Markov cachés (Viterbi, 1967). Cependant, ces méthodes nécessitent souvent des connaissances linguistiques substantielles et des données annotées, qui peuvent être rares ou inexistantes pour les langues à faibles ressources.

Au cours des dernières années, les chercheurs ont étudié des approches axées sur les données pour les langues à faibles ressources, telles que l’apprentissage non supervisé (Soricut et Och, 2015) et les techniques de bootstrap (Yarowsky et al., 2001). Certaines études ont également exploré l'utilisation de l'apprentissage par transfert interlingue (Täckström et al., 2012) ou l'exploitation de corpus comparables (Madnani et al., 2012) pour améliorer les performances de correction orthographique dans les langues peu dotées. Néanmoins, ces approches peuvent encore être limitées par la disponibilité et la qualité des corpus parallèles et comparables.

## 2.3. Réseaux de neurones dans la vérification et la correction orthographique

L'émergence des techniques d'apprentissage profond, en particulier les modèles transformeurs (Vaswani et al., 2017) et les réseaux de neurones artificiels, a eu un impact significatif sur le domaine du TAL. Ces techniques ont montré un immense potentiel dans une large gamme de tâches, y compris la traduction automatique (Bahdanau et al., 2015), la recherche d'information, les agents conversationnels, l'analyse de sentiment (Socher et al., 2013), et le résumé automatique (See et al., 2017).

Dans le contexte de la vérification et de la correction orthographique, les modèles séquence-à-séquence (Sutskever et al., 2014) ont été employés avec des résultats prometteurs, utilisant une architecture encodeur-décodeur pour mapper les séquences mal orthographiées à leurs équivalents corrects (Hládek et al., 2019). Les mécanismes d'attention (Bahdanau et al., 2015) ont également été intégrés dans ces modèles pour améliorer l'alignement entre les séquences d'entrée et de sortie (Garg et al., 2019).

Le développement des modèles transformeurs a encore renforcé les capacités des réseaux de neurones artificiels en matière de correction orthographique. Les modèles transformeurs, qui reposent sur des mécanismes d'auto-attention, se sont avérés efficaces pour capturer les dépendances à longue distance et fournir des représentations contextuelles plus précises (Devlin et al., 2019). Des études récentes ont appliqué des modèles transformeurs, tels que BERT et GPT (Radford and Narasimhan, 2018), à la détection et à la correction des erreurs d'orthographe (Sorokin et al., 2016), ou les ont affinés pour des langues peu dotées spécifiques (Al-Ghamdi et al., 2023).

## 3. Méthodologie

Notre approche se compose de trois étapes principales, à savoir la préparation des données, la construction de l'architecture du modèle et la configuration de l'entraînement du modèle.

Dans un premier temps, nous discutons le processus d'acquisition de données et d'annotation de corpus, qui est crucial pour l'entraînement d'un modèle efficace, en particulier dans le contexte des langues à faibles ressources. Ensuite, nous examinons en détail l'architecture du modèle transformeur, en décrivant ses composants et ses choix de conception. Enfin, nous décrivons les configurations d'entraînement, y compris les paramètres et les réglages utilisés pour entraîner le modèle.

## 3.1. Processus de sélection et d'annotation des données

Le processus d'acquisition des données et d'annotation du corpus comprend deux phases principales. Initialement, nous avons identifié des sources adaptées pour les données du corpus, disponibles dans divers formats (par exemple, PDF, texte, HTML), puis nous avons effectué l'extraction du contenu. Par la suite, nous avons utilisé une approche hybride, combinant des techniques d'annotation manuelles et automatiques, et avons réalisé une relecture approfondie pour générer un corpus de phrases corrigées avec précision.

## 3.1.1. Sélection des données

Le processus de collecte de données pour notre étude de correction orthographique en wolof a impliqué la collecte de données à partir de diverses sources telles que des sites web d'actualités, des plateformes de médias sociaux 3 4, des sites web religieux, des fichiers PDF religieux (Diagne, 1997), des dictionnaires bilingues wolof-français (Diouf et Kenkyūjo, 2001; Cissé, 2004) et des corpus bilingues wolof-français publiés (Adelani et al., 2022; Costa-jussà et al., 2022).

Au total, nous avons recueilli 78 384 phrases pour notre corpus. Au cours du processus de collecte, nous avons mis l'accent sur la qualité et la diversité du contenu, en veillant à ce que notre corpus comprenne des phrases issues de divers domaines et genres.

## 3.1.2. Annotation du corpus

Tout d'abord, nous avons utilisé des scripts Python pour extraire des données de sites d'actualités, de plateformes de médias sociaux et de sites religieux. Ce processus a produit 25 860 phrases provenant de sites web religieux, 21 341 phrases provenant de plateformes de médias sociaux et 13 245 phrases provenant de sites web d'actualités. Ensuite, nous avons extrait 10 087 phrases de fichiers PDF religieux et de dictionnaires bilingues wolof-français. De plus, nous avons utilisé les données en wolof des corpus bilingues wolof-français publiés par Masakhane (Adelani et al., 2022) et Facebook (Costa-jussà et al., 2022; Goyal et al., 2022). Les statistiques détaillées de chaque corpus, y compris le nombre de phrases, sont présentées au tableau 1.

p03-01.png

Tableau 1 : Statistiques des corpus

Toutes les phrases collectées ont été enregistrées dans des fichiers texte bruts en utilisant le codage UTF-8. Nous avons observé que de nombreuses phrases collectées contenaient des erreurs lexicales ou grammaticales. Pour créer un corpus parallèle de phrases mal orthographiées et de leurs homologues sans erreur, nous avons utilisé un outil de correction orthographique basé sur des règles wolof (Cissé et Sadat, 2023) pour générer un fichier contenant les formes corrigées des phrases. Nous avons ensuite relu manuellement le fichier généré pour corriger toute erreur grammaticale et lexicale restante.

Pour les phrases initialement exemptes d'erreurs, nous avons introduit diverses erreurs typographiques. La plupart des erreurs introduites impliquent la duplication, l'omission, la transposition ou la substitution de caractères. Le tableau 2 donne un aperçu des fautes de frappe introduites.

Une fois notre corpus parallèle synthétique achevé, nous avons été confrontés à une décision cruciale avant de nous lancer dans la phase de prétraitement des données et d'entraînement du modèle, car nous devions déterminer l'unité linguistique atomique sur laquelle le modèle opérera. Un nombre substantiel de modèles de TAL ont traditionnellement utilisé les tokens comme leur plus petite unité. Cependant, une tendance émergente a été notée vers l’utilisation d’unités de sous-mots (Sennrich et al., 2016b) comme blocs de construction fondamentaux.

p04-01.png

Tableau 2 : Types d'erreurs

L'idée d'utiliser des mots comme entrées de notre modèle apparaît initialement comme une stratégie par défaut logique, reflétant l'approche observée dans de nombreux modèles de TAL. Cependant, lorsqu'elle est appliquée à la correction orthographique, l'approche par token peut devenir excessivement compliquée, en raison d'inexactitudes potentielles découlant de l'utilisation de la ponctuation. De plus, la nécessité pour les modèles de TAL de fonctionner sur un vocabulaire fixe implique que le vocabulaire de notre outil de correction orthographique devrait être suffisamment complet pour inclure chaque faute d'orthographe possible de chaque mot rencontré pendant le processus d'entraînement. Les implications de cette exigence entraîneraient un modèle coûteux, tant en termes d'apprentissage que de maintenance.

En considération de ces facteurs, nous avons décidé d'utiliser le caractère comme bloc de construction fondamental pour notre correcteur orthographique. Cette approche s'est révélée très efficace dans les tâches de traduction par Lee et al. (2017). L'adoption de la segmentation au niveau des caractères nous permet également de préserver une taille de vocabulaire gérable.

À des fins expérimentales, l'ensemble des données est divisé en trois sous-ensembles : un ensemble d'entraînement, un ensemble de validation et un ensemble de test. Nous avons sélectionné au hasard 10% du corpus généré pour former les ensembles de validation et de test. Cela a été fait pour s'assurer que ces ensembles représentent avec précision l'ensemble des données. Les 90 % restants des données ont ensuite été utilisés pour créer notre ensemble d'entraînement.

## 3.2. Architecture du modèle

Dans cette étude, nous avons utilisé une architecture de modèle Transformer personnalisée (Vaswani et al., 2017) pour la tâche de correction orthographique du wolof. Le modèle Transformer a démontré un succès remarquable dans diverses tâches de traitement du langage naturel en tirant parti des mécanismes d'auto-attention, qui lui permettent de traiter efficacement les séquences d'entrée sans avoir besoin de couches récurrentes ou convolutionnelles.

Notre modèle se compose de deux composantes : un encodeur et un décodeur, chacun comprenant cinq couches identiques (Biljon et al., 2020). La tâche principale de l'encodeur est de gérer les séquences d'entrée contenant des fautes d'orthographe, tandis que le décodeur se concentre sur la production de séquences de sortie sans fautes d'orthographe, comme illustré à la figure 1.

p04-02.png

Figure 1 : Modèle transformeur (Vaswani et al., 2017)

Au cours de la phase d'encodage, chaque mot d'entrée est converti en une représentation vectorielle à l'aide d'une couche de plongement. Pour incorporer l'information positionnelle dans les plongements d'entrée, un encodage positionnel est appliqué. Dans les composants encodeur et décodeur du modèle, chaque couche comprend un mécanisme d'auto-attention multi-têtes avec deux têtes d'attention. Ceci est suivi de réseaux à propagation avant positionnels (FFN) avec une taille cachée de 256 et une taille de propagation avant de 1024.

Le processus d'auto-attention implique la génération de vecteurs de requête (Q), de clé (K) et de valeur (V) à partir de l'entrée. Ces vecteurs sont ensuite utilisés pour calculer une matrice de scores en effectuant une multiplication matricielle entre la requête et le vecteur clé. La matrice résultante est mise à l'échelle par la racine carrée de la dimension du vecteur clé (d<sub>k</sub>). Pour obtenir des pondérations d'attention, la matrice de scores est normalisée en utilisant softmax, représentant l'importance attribuée aux différentes parties de la séquence d'entrée. Ces poids d'attention sont utilisés pour dériver un vecteur de sortie, comme démontré dans l'équation 1 (Vaswani et al., 2017). Pour permettre un entraînement efficace et des gradients stables, des connexions résiduelles et une normalisation de couche sont mises en œuvre dans tout le réseau.

p05-01.png

Le décodeur comprend deux blocs d'attention multi-têtes au sein d'une seule couche : un pour les séquences cibles et un autre pour la sortie de l'encodeur. L'attention multi-tête précédente est masquée pour empêcher le calcul des scores d'attention pour les mots suivants. Cette dernière couche d'attention multi-têtes utilise les sorties de l'encodeur comme requêtes et clés, tandis que les sorties de la première couche d'attention multi-têtes servent de valeurs. Ce mécanisme permet au décodeur de déterminer les entrées de l'encodeur qui sont les plus pertinentes pour son processus de génération, produisant ainsi une séquence de sortie sans fautes d'orthographe. La sortie de la couche de feed-forward pointwise finale est ensuite transmise à une couche linéaire, servant de classificateur, suivie d'une couche softmax pour générer le texte corrigé.

Pour l'initialisation, nous employons l'initialisation Xavier avec un gain de 1.0 (Glorot et Bengio, 2010) pour tous les poids entraînables, tandis que les termes de biais sont initialisés avec des zéros. Les plongements subissent une initialisation Xavier avec un gain distinct de 1,0. Pour minimiser le nombre de paramètres entraînables, une pratique courante consiste à lier les plongements source et cible, ainsi que la couche softmax (Press et Wolf, 2017). Puisque notre modèle fonctionne au niveau des caractères, la taille du vocabulaire par défaut est relativement petite. Nous fixons la dimension de plongement à 256 à la fois dans l'encodeur et le décodeur, ce qui correspond à la taille cachée du Réseau de Transfert Direct (FFN) pour compatibilité. De plus, nous mettons à l'échelle les plongements par la racine carrée de leur taille.

Pour remédier au problème de surapprentissage, nous utilisons des techniques de dropout sur divers composants Transformer. Initialement, nous appliquons un taux de dropout de plongement de 10<sup>-1</sup> à l'encodeur et au décodeur, ce qui aide à éliminer des mots de la matrice de plongement (Gal et Ghahramani, 2016). De plus, nous appliquons le dropout uniquement au sein des couches du décodeur à un taux de 3 × 10^-1 (Srivastava et al., 2014).

## 3.3. Entraînement du modèle

La procédure d'entraînement du modèle a été soigneusement conçue, en tenant compte de divers paramètres pour garantir des résultats rigoureux et reproductibles.

Nous avons utilisé un entraînement déterministe en utilisant une graine aléatoire fixe de 42. Pour optimiser le modèle, nous avons choisi l'optimiseur largement utilisé Adam (Kingma et Ba, 2015), qui comporte des taux d'apprentissage adaptatifs et des mises à jour de paramètres basées sur le momentum. Pour les moments du premier et du second ordre, nous avons attribué des valeurs bêta de [9×10^-1, 999×10^-3], respectivement. Le taux d'apprentissage a été initialisé à 10^-4, et un seuil minimum de 10^-8 a été défini pour terminer l'entraînement en cas de convergence ou de quasi-convergence.

Pour optimiser le processus d'apprentissage, nous avons adopté une stratégie de planification basée sur les plateaux (Smith, 2017). Avec une valeur de patience de 5, le taux d'apprentissage était réduit d'un facteur de 7 × 10^-1 si le score de validation ne s'améliorait pas au cours de cinq cycles de validation consécutifs. Cette adaptation dynamique du taux d'apprentissage, basée sur le retour de performance, a conduit à une convergence et une optimisation améliorées.

Nous avons facilité un calcul parallèle efficace pendant l'entraînement en utilisant une taille de lot de 4096 tokens (Ott et al., 2018). L'approche de traitement par lots basée sur les jetons a optimisé les ressources de calcul en formant des lots basés sur le nombre total de jetons plutôt que sur le nombre de phrases.

Tout au long du processus d'entraînement, nous avons accordé une importance significative à la capacité du modèle à généraliser et à bien performer en effectuant des évaluations régulières. Pour assurer une évaluation approfondie, nous avons établi des intervalles de validation de 2000 mises à jour, couvrant 50 époques. Nous avons soigneusement sélectionné cet intervalle, en tenant compte du fait qu'une fréquence de validation trop élevée pourrait ne pas offrir suffisamment d'opportunités au modèle d'apprendre et de s'améliorer pendant la validation. En outre, une validation trop fréquente pourrait entraîner des temps d'entraînement prolongés et potentiellement mettre fin prématurément à l'entraînement si la valeur de patience de validation n'est pas fixée suffisamment haut. Ainsi, nous avons décidé sur l'intervalle mentionné pour trouver un équilibre.

De plus, afin d'améliorer notre capacité à suivre de près le processus d'entraînement et à obtenir des informations complètes sur le développement du modèle, nous avons mis en œuvre une fréquence de journalisation de 200 mises à jour.

Nous avons mis en œuvre l'arrêt précoce en minimisant notre fonction de perte d'entropie croisée, une approche courante dans l'entraînement des modèles. La surveillance continue de la fonction de perte nous a permis de mettre fin à l'entraînement lorsqu'un nouveau score bas était atteint, empêchant ainsi efficacement le surapprentissage.

Pour favoriser des prédictions diverses et atténuer le surapprentissage, nous avons intégré deux techniques de régularisation : le lissage des étiquettes et la décroissance des poids. Plus précisément, nous avons utilisé le lissage d'étiquettes avec un coefficient de 10<sup>-1</sup> (Szegedy et al., 2016), et la décroissance des poids à un taux de 10<sup>-4</sup> (Srivastava et al., 2014). Le lissage d'étiquettes est une méthode de régularisation qui redistribue le poids de probabilité des tokens de référence vers d'autres tokens du vocabulaire. En réduisant l'accent excessif sur les jetons de référence spécifiques, le lissage des étiquettes favorise la diversité dans la production du modèle et aide à prévenir l'excès de confiance dans les prédictions. La décroissance des poids, également connue sous le nom de régularisation L2, est une technique utilisée pour contrôler la complexité du modèle. Pendant l'entraînement, elle réduit l'ampleur des poids du modèle en ajoutant à la fonction de perte un terme de pénalité proportionnel aux valeurs des poids. Ce terme de régularisation encourage des valeurs de poids plus petites, empêchant le modèle de surapprendre les données d'entraînement et améliorant les performances de généralisation.

Pendant l'entraînement, notre métrique d'évaluation principale était le score BLEU bien établi (Papineni et al., 2002), qui mesure la similarité entre les séquences prédites et de référence. Pour une évaluation efficace, nous avons utilisé une stratégie de regroupement basée sur les tokens avec une taille de lot de 1024 tokens.

Pour gérer la longueur des séquences générées lors du décodage, nous avons fixé une longueur maximale de sortie de 175 jetons. De plus, nous avons maintenu le suivi de l'avancement et l'intégrité de la validation en imprimant systématiquement trois phrases de validation lors de chaque exécution de validation.

## 4. Évaluations

Évaluer les systèmes de vérification et de correction orthographique est une tâche cruciale qui aidera à comprendre leur efficacité et leur applicabilité générale. Bien qu'il n'existe pas de norme universellement acceptée pour évaluer les systèmes de vérification et de correction orthographique, trois principales méthodologies ont émergé. Ces méthodologies impliquent des métriques de classification, des métriques de traduction automatique et des métriques de recherche d'information.

Les mesures de classification, telles que la précision, le rappel et le score F, sont utilisées pour évaluer la performance des systèmes de correction orthographique automatique (Starlander et Popescu-Belis, 2002). Les métriques de traduction automatique, y compris le score BLEU (Papineni et al., 2002), le CER ou le WER (Popović et Ney, 2007), et le ChrF++ (Popović, 2015, 2017), sont également utilisées dans l'évaluation. De plus, des métriques de recherche d'information comme le MRR (Mangu et al., 2000) peuvent être utilisées.

Considérant que notre correcteur orthographique fonctionne en traduisant un texte source contenant des erreurs vers sa forme la plus probablement correcte, les métriques de traduction automatique sont les plus adaptées pour mesurer les performances de notre système. Par exemple, la métrique BLEU a été largement utilisée pour évaluer les outils de correction orthographique dans diverses études, y compris celles menées par des chercheurs comme Gerdjikov et al. (2013) ; Mitankin et al. (2014) ; Sariev et al. (2014). La métrique WER a également été utilisée dans une étude menée par Evershed et Fitch (2014).

Après l'entraînement et l'évaluation de notre modèle sur l'ensemble de tests, notre correcteur orthographique a démontré une grande compétence dans divers aspects de la correction orthographique, comme le montre le tableau 3.

Le score BLEU, une mesure de la qualité de la correspondance entre le texte corrigé et le texte de référence en termes de chevauchement de n-grammes, est de 83 %. Ce score élevé indique que le modèle est capable de produire un texte qui s'aligne étroitement avec le texte de référence à la fois dans le choix lexical et la structure grammaticale.

p06-01.png

Tableau 3 : Mesures de performance du correcteur orthographique

Le WER de 0,08 signifie que, en moyenne, seulement 8% des mots dans les phrases corrigées diffèrent des phrases de référence. De même, la CER de 0,03 indique que les phrases corrigées ne présentent, en moyenne, que 3% de différences de niveau de caractère par rapport aux phrases de référence. Ces métriques soulignent l'efficacité du correcteur orthographique pour identifier et corriger avec précision les erreurs aux niveaux des mots et des caractères.

En outre, le score ChrF++ de 94% démontre un haut niveau de similitude entre les phrases corrigées et les phrases de référence, en tenant compte de divers facteurs tels que la précision, le rappel et le score F au niveau des caractères.

## 4.1. Analyse des erreurs

En plus des métriques de performance mentionnées ci-dessus, il est crucial de réaliser une analyse d'erreur complète pour obtenir des informations plus approfondies sur le comportement de notre correcteur orthographique. Nous fournissons une évaluation qualitative de notre modèle sur une sélection de phrases mal orthographiées en wolof dans le Tableau 4. Ce tableau présente les phrases corrigées ainsi que leurs références correspondantes.

p06-02.png

Tableau 4 : Évaluation qualitative

Un examen des erreurs sur un sous-ensemble des données de test a révélé trois catégories principales d'erreurs récurrentes produites par notre modèle.

Le premier groupe d'erreurs tourne autour de la correction des voyelles longues dans les mots. Dans la langue wolof, la distinction entre les voyelles longues et courtes a un impact significatif sur les significations des mots. Cependant, notre modèle a constamment du mal à déterminer avec précision quand remplacer une voyelle courte par une voyelle longue, ce qui entraîne des corrections incorrectes.

Le deuxième groupe d'erreurs est lié aux entités nommées. Les entités nommées, qui s'écartent souvent des conventions d'écriture standard du wolof, introduisent une confusion considérable pour le modèle. Dans certains cas, le modèle suppose à tort que ces entités nommées sont erronées et tente de les corriger. Dans d'autres cas, lorsque des entités nommées spécifiques sont en effet mal orthographiées et ne font pas partie du vocabulaire, le modèle suggère des corrections incorrectes.

Le troisième groupe d'erreurs est associé à la gestion des accents. Les accents jouent un rôle crucial dans la distinction et la prononciation des mots en wolof. Notre modèle rencontre systématiquement des défis lorsqu'il s'agit d'identifier avec précision et de rétablir les accents manquants dans les mots.

Ces résultats soulignent la nécessité d'un affinement supplémentaire de notre correcteur orthographique, en particulier pour traiter les complexités de la longueur des voyelles, gérer les entités nommées et préserver les accents dans la langue wolof. De plus, il est essentiel d'explorer des solutions potentielles pour atténuer ces erreurs récurrentes, telles que l'incorporation de la compréhension contextuelle du langage et l'amélioration de la capacité du modèle à discerner les nuances linguistiques.

## 4.2. Test de signification

Pour établir la signification statistique des résultats issus de notre évaluation du correcteur orthographique, nous avons effectué un test de signification, comparant notre modèle au seul correcteur orthographique wolof existant accessible en ligne. L'objectif de ce test est de déterminer la robustesse des métriques de performance observées, garantissant qu'elles ne sont pas simplement le fruit du hasard.

Notre première étape a consisté en la sélection aléatoire de 100 phrases en wolof à partir de notre corpus construit. Suite à cette phase préliminaire, chaque phrase choisie a été entrée dans les deux systèmes de correction afin d'observer et d'analyser les corrections proposées.

Par la suite, les propositions de correction générées par les deux systèmes ont été évaluées par un locuteur natif du wolof. L'évaluateur n'a pas été tenu au courant de la source de chaque correction afin de maintenir l'impartialité. Le système de notation appliqué était le suivant : un score de « 3 » était attribué aux phrases parfaitement corrigées et alignées sur la phrase de référence. Une note de "2" était réservée aux corrections qui, malgré des erreurs mineures, préservaient le sens voulu de la phrase originale. Enfin, une note de « 1 » a été attribuée aux corrections qui étaient tout à fait incorrectes ou inadéquates.

Afin de résumer les évaluations réalisées sur toutes les phrases, nous avons compilé les résultats dans le Tableau 5, qui offre une vue d'ensemble de la distribution des scores attribués à chaque système.

Compte tenu de la nature ordinale des évaluations, nous avons opté pour le test de classement signé Wilcoxon comme l'outil statistique le plus approprié pour discerner s'il existe une différence statistiquement significative entre les deux systèmes.

p07-01.png

Tableau 5: Grades des systèmes

Pour ce test, nous avons formulé les hypothèses nulles et alternatives suivantes:

H0 : Il n'y a pas de différence significative entre les deux systèmes.

Ha : Le modèle neuronal est nettement supérieur.

Le test de Wilcoxon, initialement introduit par Wilcoxon (1945), représente une approche non paramétrique largement utilisée pour comparer deux échantillons appariés. Cette méthode est particulièrement utile lorsque les hypothèses concernant la distribution des données ne sont pas remplies ou lorsqu'on traite des données ordinales. Nous avons adopté un niveau de signification standard (α = 0,05) pour ce test, considérant qu'un résultat est statistiquement significatif si la valeur de p est inférieure à α. Conformément à cette méthodologie, les résultats obtenus pour la statistique W et la valeur p sont documentés dans le tableau 6.

p07-02.png

Tableau 6 : W-Statistique et p-Valeur

La statistique W sert d'indicateur des rangs cumulatifs attribués aux différences entre les observations appariées, favorisant notre modèle neuronal. Une valeur de la statistique W de 0,0 signifie que, dans la majorité des instances comparées, notre système neuronal proposé a démontré une performance supérieure lorsqu'il est contrasté avec le système existant basé sur des règles.

La valeur de p reflète la probabilité d'obtenir une différence aussi prononcée entre les deux systèmes par pur hasard, en supposant que l'hypothèse nulle soit valide. Dans le contexte de notre test de Wilcoxon signé, l'hypothèse nulle postule qu'il n'y a pas de différence significative dans la performance des deux systèmes. Une valeur p extrêmement faible, comme celle qui a été calculée (4,92 × 10^-17 ), fournit une preuve convaincante contre cette hypothèse nulle (H<sub>0</sub>), renforçant ainsi la validité de notre hypothèse alternative (H<sub>a</sub>).

## 5. Limites

Notre système de correction orthographique a démontré de bonnes performances, comme l'indiquent ses scores élevés BLEU et ChrF++, ainsi que les scores relativement faibles WER et CER. Cependant, il existe encore des limitations qui nécessitent des investigations et des améliorations supplémentaires.

Tout d'abord, les modèles de niveau de caractère, tels que celui utilisé dans cette étude, sont intrinsèquement complexes et peuvent être longs à entraîner. Cela est dû à la plus grande séquence de données dont ils ont besoin pour apprendre, comparé aux modèles de niveau de mot. Le coût de calcul de l'entraînement de tels modèles peut être particulièrement élevé lorsqu'on travaille avec de grands jeux de données ou des langues ayant des ensembles de caractères étendus.

Deuxièmement, notre modèle peut avoir du mal à capturer les dépendances à longue portée dans le texte. Les dépendances entre les mots d'une phrase, qui s'étendent souvent sur plusieurs caractères, peuvent être difficiles à comprendre pour les modèles de niveau caractère. Cela pourrait potentiellement affecter les performances du modèle dans les cas qui nécessitent une compréhension approfondie de la sémantique au niveau de la phrase.

Troisièmement, notre modèle ne bénéficie pas de l'avantage de tirer parti des plongements lexicaux pré-entraînés, qui capturent les relations sémantiques et syntaxiques entre les mots. En conséquence, la compréhension sémantique du modèle peut être moins nuancée par rapport aux modèles qui fonctionnent au niveau du mot.

Quatrièmement, les modèles au niveau des caractères peuvent être plus sensibles au bruit dans les données d'entrée. Les fautes d'orthographe, l'utilisation incohérente de la ponctuation et d'autres formes de bruit peuvent avoir un impact plus important sur ces modèles, ce qui pourrait entraîner une baisse des performances dans certaines situations.

De plus, bien que notre modèle soit conçu pour gérer toute langue utilisant un alphabet similaire à celui de la langue wolofe, il pourrait avoir des difficultés avec les langues qui dépendent fortement de l'ordre des mots. Cela est dû au manque de compréhension du modèle au niveau des mots, ce qui pourrait aider dans ces situations.

Enfin, notre modèle peut rencontrer des difficultés avec la désambiguïsation. Par exemple, les mots orthographiés de la même manière mais ayant des significations différentes peuvent poser un défi pour les modèles de niveau caractère, car ces modèles n'ont pas accès aux informations sémantiques de niveau mot.

Compte tenu de ces considérations, il existe plusieurs domaines qui pourraient être ciblés pour une amélioration. Tout d'abord, le modèle pourrait être davantage entraîné sur une plus grande variété de données textuelles afin d'améliorer sa capacité à gérer des erreurs moins courantes ou plus complexes. Étant donné que nous nous concentrons actuellement sur une langue dont les ressources disponibles sont limitées, l’utilisation de la technique de rétrotraduction apparaît comme une stratégie prometteuse. Cette approche a constamment démontré son efficacité dans divers domaines, tels que la traduction automatique statistique (SMT) (Bojar et Tamchyna, 2011), la traduction automatique neuronale supervisée (Sennrich et al., 2016a) et la traduction automatique non supervisée (Lample et al., 2017).

Dans le contexte de la vérification orthographique et de la correction, l'adoption de cette approche impliquerait l'entraînement d'un modèle pour introduire intentionnellement un nombre important d'erreurs d'orthographe réalistes dans le texte propre. Par la suite, le corpus résultant de texte corrompu peut être utilisé pour affiner notre modèle de correction orthographique.

De plus, nous suggérons d'explorer davantage les modèles hybrides qui combinent les avantages du traitement au niveau des caractères et au niveau des mots. De tels modèles pourraient potentiellement tirer parti de la granularité des modèles au niveau des caractères tout en maintenant une compréhension de plus haut niveau de la sémantique des mots et des phrases.

Enfin, en tenant compte des coûts computationnels associés aux modèles de niveau caractère, il serait bénéfique de mener des recherches sur des méthodes d'entraînement plus efficaces. En procédant ainsi, nous pouvons atténuer la charge computationnelle et améliorer l'efficacité globale du processus d'entraînement.

## 6. Conclusion

La présente étude représente une avancée significative dans le domaine de la correction automatique de l'orthographe, en particulier pour les langues parlées sous-dotées et sous-représentées. Notre modèle, qui utilise une architecture basée sur les transformateurs, a produit des résultats encourageants selon plusieurs métriques d'évaluation, y compris BLEU, WER, CER et ChrF++. Ces résultats mettent en évidence le potentiel des techniques avancées d'apprentissage profond pour surmonter le défi des fautes d'orthographe, même dans les langues avec des données disponibles limitées.

Malgré ces résultats prometteurs, notre travail a également mis en évidence certains domaines d'amélioration qui pourraient affiner davantage la performance du système proposé. Notre modèle, étant au niveau des caractères, présente certaines limites telles que la complexité computationnelle, la difficulté à capturer les dépendances à long terme et la sensibilité au bruit dans les données d'entrée. De plus, l'absence de compréhension au niveau du mot pourrait entraîner des difficultés potentielles avec les langues qui dépendent fortement de l'ordre des mots ou rencontrent des défis de désambiguïsation. En outre, l'investigation de modèles hybrides, combinant les avantages du traitement de niveau caractère et de niveau mot, pourrait être une direction prometteuse pour les travaux futurs.

Nous espérons que nos résultats encourageront des recherches supplémentaires dans cette direction, contribuant ainsi, en fin de compte, à l'objectif plus large de construction d'outils de traitement automatique des langues naturelles inclusifs et efficaces pour toutes les langues.

## Notes

1 http://pagesperso.ls2n.fr/~enguehard-c/DiLAF/index.php

2 https://www.wolof-online.com

3 https://twitter.com/SaabalN

4 https://www.facebook.com/wolofakxamle

5 http://biblewolof.com

6 https://github.com/TiDev00/Wolof_SpellChecker

## 7. Références bibliographiques

David Adelani, Jesujoba Alabi, Angela Fan, Julia Kreutzer, Xiaoyu Shen, Machel Reid, Dana Ruiter, Dietrich Klakow, Peter Nabende, Ernie Chang, Tajuddeen Gwadabe, Freshia Sackey, Bonaventure F. P. Dossou, Chris Emezue, Colin Leong, Michael Beukman, Shamsuddeen Muhammad, Guyo Jarso, Oreen Yousuf, Andre Niyongabo Rubungo, Gilles Hacheme, Eric Peter Wairagala, Muhammad Umair Nasir, Benjamin Ajibade, Tunde Ajayi, Yvonne Gitau, Jade Abbott, Mohamed Ahmed, Millicent Ochieng, Anuoluwapo Aremu, Perez Ogayo, Jonathan Mukiibi, Fatoumata Ouoba Kabore, Godson Kalipe, Derguene Mbaye, Allahsera Auguste Tapo, Victoire Memdjokam Koagne, Edwin MunkohBuabeng, Valencia Wagner, Idris Abdulmumin, Ayodele Awokoya, Happy Buzaaba, Blessing Sibanda, Andiswa Bukula, and Sam Manthalu. 2022. A few thousand translations go a long way! Leveraging pre-trained models for African news translation. In Proceedings of the 2022 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pages 3053-3070, Seattle, United States. Association for Computational Linguistics.

Sharefah Al-Ghamdi, Hend Al-Khalifa, and Abdulmalik Al-Salman. 2023. Fine-tuning BERT-Based pre-trained models for arabic dependency parsing. Applied Sciences, 13(7).

Susan Armstrong, Graham Russell, Dominique Petitpierre, and Gilbert Robert. 1995. An open architecture for multilingual text processing. In From Texts to Tags: Issues in Multilingual Language Analysis. Proceedings of the ACL Sigdat Workshop., pages 30-34, Dublin.

Dzmitry Bahdanau, Kyunghyun Cho, and Yoshua Bengio. 2015. Neural machine translation by jointly learning to align and translate. In 3rd International Conference on Learning Representations, ICLR 2015, San Diego, CA, USA, May 7-9, 2015, Conference Track Proceedings.

Elan Van Biljon, Arnu Pretorius, and Julia Kreutzer. 2020. On optimal transformer depth for low-resource language translation. CoRR, abs/2004.04418.

David Boilat. 1858. Grammaire de La Langue Woloffe. Imprimerie impériale, Paris.

Ondřej Bojar and Aleš Tamchyna. 2011. Improving translation model by monolingual data. In Proceedings of the Sixth Workshop on Statistical Machine Translation, pages 330-336, Edinburgh, Scotland. Association for Computational Linguistics.

Eric Church. 1981. Le Système Verbal du Wolof. Technical report, Université de Dakar, Dakar.

Mamadou Cissé. 2004. Dictionnaire FrancaisWolof, 2.éd. révisée et augmentée edition. Dictionnaires des Langues O. Langues et MOndes, L'Asiatheque, Paris.

Thierno Ibrahima Cissé and Fatiha Sadat. 2023. Automatic spell checker and correction for under-represented spoken languages: Case study on Wolof. In Proceedings of the Fourth Workshop on Resources for African Indigenous Languages (RAIL 2023), pages 1-10, Dubrovnik, Croatia. Association for Computational Linguistics.

Marta R. Costa-jussà, James Cross, OnurÇelebi, Maha Elbayad, Kenneth Heafield, Kevin Heffernan, Elahe Kalbassi, Janice Lam, Daniel Licht, Jean Maillard, Anna Sun, Skyler Wang, Guillaume Wenzek, Al Youngblood, Bapi Akula, Loic Barrault, Gabriel Mejia Gonzalez, Prangthip Hansanti, John Hoffman, Semarley Jarrett, Kaushik Ram Sadagopan, Dirk Rowe, Shannon Spruit, Chau Tran, Pierre Andrews, Necip Fazil Ayan, Shruti Bhosale, Sergey Edunov, Angela Fan, Cynthia Gao, Vedanuj Goswami, Francisco Guzmán, Philipp Koehn, Alexandre Mourachko, Christophe Ropers, Safiyyah Saleem, Holger Schwenk, and Jeff Wang. 2022. No Language Left Behind: Scaling Human-Centered Machine Translation.

Jacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. 2019. BERT: Pre-training of deep bidirectional transformers for language understanding. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers), pages 4171-4186, Minneapolis, Minnesota. Association for Computational Linguistics.

Pathé Diagne. 1971. Grammaire de Wolof Moderne. Presence Africaine, Paris.

Pathé Diagne. 1997. Al Xuraan ci Wolof. Harmattan; Sankoré, Paris : [Dakar].

Amadou Dialo. 1981. Structures Verbales Du Wolof Contemporain. Centre de Linguistique Appliquée de Dakar, Dakar.

Ibrahima Diouf, Cheikh Tidiane Ndiaye, and Ndèye Binta Dieme. 2017. Dynamique et transmission linguistique au Sénégal au cours des 25 dernières années. Cahiers québécois de démographie, 46(2):197-217.

Jean Léopold Diouf and Tōkyō Gaikokugo Daigaku. Ajia Afurika Gengo Bunka Kenkyūjo. 2001. Dictionnaire wolof : wolof-français, français-wolof. Institute for the Study of Languages and Cultures of Asia and Africa (ILCAA), Tokyo University of Foreign Studies, Tokyo.

Jean Léonce Doneux. 1978. Les liens historiques entre les langues du Sénégal. Réalités africaines et langues française: Bulletin du Centre de la Linguistique Appliquée de Dakar, 7:6-55.

Melynda B. Dunigan. 1994. On the Clausal Architecture of Wolof. Ph.D. thesis, University of North Carolina, Chapel Hill.

David Eberhard, Gary Simons, and Chuck Fennig. 2019. Ethnologue: Languages of the World, 22nd edition edition. SIL International, Dallas, Texas.

John Evershed and Kent Fitch. 2014. Correcting Noisy OCR: Context Beats Confusion. In Proceedings of the First International Conference on Digital Access to Textual Cultural Heritage, DATeCH '14, pages 45-51, New York, NY, USA. Association for Computing Machinery.

Yarin Gal and Zoubin Ghahramani. 2016. A theoretically grounded application of dropout in recurrent neural networks. In Proceedings of the 30th International Conference on Neural Information Processing Systems, NIPS'16, pages 1027-1035, Red Hook, NY, USA. Curran Associates Inc.

Sarthak Garg, Stephan Peitz, Udhyakumar Nallasamy, and Matthias Paulik. 2019. Jointly learning to align and translate with transformer models. In Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP), pages 4453-4462, Hong Kong, China. Association for Computational Linguistics.

Elodie Gauthier, Laurent Besacier, Sylvie Voisin, Michael Melese, and Uriel Pascal Elingui. 2016. Collecting Resources in Sub-Saharan African Languages for Automatic Speech Recognition: A Case Study of Wolof. International Conference on Language Resources and Evaluation, pages 3863-3867.

Stefan Gerdjikov, Petar Mitankin, and Vladislav Nenchev. 2013. Realization of common statistical methods in computational linguistics with functional automata. In Proceedings of the International Conference Recent Advances in Natural Language Processing RANLP 2013, pages 294-301, Hissar, Bulgaria. INCOMA Ltd. Shoumen, BULGARIA.

Xavier Glorot and Yoshua Bengio. 2010. Understanding the difficulty of training deep feed-forward neural networks. In AISTATS, volume 9 of JMLR Proceedings, pages 249-256. JMLR.org.

Naman Goyal, Cynthia Gao, Vishrav Chaudhary, Peng-Jen Chen, Guillaume Wenzek, Da Ju, Sanjana Krishnan, Marc'Aurelio Ranzato, Francisco Guzmán, and Angela Fan. 2022. The Flores-101 evaluation benchmark for low-resource and multilingual machine translation. Transactions of the Association for Computational Linguistics, 10:522-538.

Daniel Hládek, Matúš Pleva, Ján Staš, and YuanFu Liao. 2019. Sequence to sequence convolutional neural network for automatic spelling correction. In Proceedings of the 31st Conference on Computational Linguistics and Speech Processing (ROCLING 2019), pages 102-111, New Taipei City, Taiwan. The Association for Computational Linguistics and Chinese Language Processing (ACLCLP).

Omar Ka. 1981. La Derivation et La Composition En Wolof, volume 77 of Les Langues Nationales Au Senegal. Centre de Linguistique Appliquée de Dakar, Dakar.

Mark D. Kernighan, Kenneth W. Church, and William A. Gale. 1990. A spelling correction program based on a noisy channel model. In Proceedings of the 13th Conference on Computational Linguistics - Volume 2, COLING '90, pages 205-210, USA. Association for Computational Linguistics.

Diederik P. Kingma and Jimmy Ba. 2015. Adam: A method for stochastic optimization. In 3rd International Conference on Learning Representations (ICLR), San Diego, CA, USA.

Guillaume Lample, Ludovic Denoyer, and Marc'Aurelio Ranzato. 2017. Unsupervised machine translation using monolingual corpora only. CoRR, abs/1711.00043.

Jason Lee, Kyunghyun Cho, and Thomas Hofmann. 2017. Fully Character-Level Neural Machine Translation without Explicit Segmentation. Transactions of the Association for Computational Linguistics, 5:365-378.

Nitin Madnani, Michael Heilman, Joel Tetreault, and Martin Chodorow. 2012. Identifying high-level organizational elements in argumentative discourse. In Proceedings of the 2012 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pages 20-28, Montréal, Canada. Association for Computational Linguistics.

Max Mangold. 1977. Wolof Pronoun Verb Patterns and Paradigms. Number Bd. 3 in Forschungen Zur Anthropologie Und Religionsgeschichte. Homo et Religio, Saarbrücken.

Lidia Mangu, Eric Brill, and Andreas Stolcke. 2000. Finding consensus in speech recognition: Word error minimization and other applications of confusion networks. CoRR, cs.CL/0010012.

Petar Mitankin, Stefan Gerdjikov, and Stoyan Mihov. 2014. An Approach to Unsupervised Historical Text Normalisation. In Proceedings of the First International Conference on Digital Access to Textual Cultural Heritage, DATeCH '14, pages 29-34, New York, NY, USA. Association for Computing Machinery.

El Hadji Mamadou Nguer, Mouhamadou Khoule, Mouhamad Ndiankho Thiam, Mbaye Baba Thiam, Ousmane Thiare, Mame-Thierno Cissé, and Mathieu Mangeot. 2015. Dictionnaires wolof en ligne : état de l'art et perspectives. In Colloque National Sur La Recherche En Informatique et Ses Applications, Thiès, Senegal.

Codu Mbassy Njie. 1982. Description Syntaxique Du Wolof de Gambie. Les Nouvelles Editions Africaines, Dakar.

Myle Ott, Sergey Edunov, David Grangier, and Michael Auli. 2018. Scaling neural machine translation. In Proceedings of the Third Conference on Machine Translation: Research Papers, pages 1-9, Brussels, Belgium. Association for Computational Linguistics.

Kishore Papineni, Salim Roukos, Todd Ward, and Wei-Jing Zhu. 2002. Bleu: A method for automatic evaluation of machine translation. In Proceedings of the 40th Annual Meeting of the Association for Computational Linguistics, pages 311-318, Philadelphia, Pennsylvania, USA. Association for Computational Linguistics.

Maja Popović. 2015. chrF: Character n-gram F-score for automatic MT evaluation. In Proceedings of the Tenth Workshop on Statistical Machine Translation, pages 392-395, Lisbon, Portugal. Association for Computational Linguistics.

Maja Popović. 2017. chrF++: Words helping character n-grams. In Proceedings of the Second Conference on Machine Translation, pages 612-618, Copenhagen, Denmark. Association for Computational Linguistics.

Maja Popović and Hermann Ney. 2007. Word error rates: Decomposition over POS classes and applications for error analysis. In Proceedings of the Second Workshop on Statistical Machine Translation, pages 48-55, Prague, Czech Republic. Association for Computational Linguistics.

Ofir Press and Lior Wolf. 2017. Using the output embedding to improve language models. In Proceedings of the 15th Conference of the European Chapter of the Association for Computational Linguistics: Volume 2, Short Papers, pages 157-163, Valencia, Spain. Association for Computational Linguistics.

Alec Radford and Karthik Narasimhan. 2018. Improving language understanding by generative pre-training.

Stéphane Robert. 2011. Le wolof. Bulletin de la Société de Linguistique de Paris, 81.

J. David Sapir. 1971. West Atlantic: An inventory of the languages, their noun class systems and consonant alternation. In Thomas Albert Sebeok, editor, Current Trends in Linguistics, 7: Linguistics in Sub-Saharan Africa, number 7 in Current Trends in Linguistics 7 (Ed. by T. Sebeok), pages 45-112. Mouton & Co., The Hague & Paris.

Andrey Sariev, Vladislav Nenchev, Stefan Gerdjikov, Petar Mitankin, Hristo Ganchev, Stoyan Mihov, and Tinko Tinchev. 2014. Flexible Noisy Text Correction. In 2014 11th IAPR International Workshop on Document Analysis Systems, pages 31-35, Tours, France. IEEE.

Abigail See, Peter J. Liu, and Christopher D. Manning. 2017. Get to the point: Summarization with pointer-generator networks. CoRR, abs/1704.04368.

Rico Sennrich, Barry Haddow, and Alexandra Birch. 2016a. Improving Neural Machine Translation Models with Monolingual Data. In Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 86-96, Berlin, Germany. Association for Computational Linguistics.

Rico Sennrich, Barry Haddow, and Alexandra Birch. 2016b. Neural machine translation of rare words with subword units. In Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 1715-1725, Berlin, Germany. Association for Computational Linguistics.

Leslie N. Smith. 2017. Cyclical learning rates for training neural networks. In 2017 IEEE Winter Conference on Applications of Computer Vision, WACV 2017, Santa Rosa, CA, USA, March 24-31, 2017, pages 464-472. IEEE Computer Society.

Richard Socher, Alex Perelygin, Jean Wu, Jason Chuang, Christopher D. Manning, Andrew Ng, and Christopher Potts. 2013. Recursive deep models for semantic compositionality over a sentiment treebank. In Proceedings of the 2013 Conference on Empirical Methods in Natural Language Processing, pages 1631-1642, Seattle, Washington, USA. Association for Computational Linguistics.

Radu Soricut and Franz Och. 2015. Unsupervised morphology induction using word embeddings. In Proceedings of the 2015 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pages 1627-1637, Denver, Colorado. Association for Computational Linguistics.

Alexey Sorokin, A. Baytin, I. Galinskaya, E. Rykunova, and T. Shavrina. 2016. SpellRuEval: The first competition on automatic spelling correction for Russian. In Proceedings of the Annual International Conference "Dialogue", volume 15, Moscow, Russia.

Nitish Srivastava, Geoffrey Hinton, Alex Krizhevsky, Ilya Sutskever, and Ruslan Salakhutdinov. 2014. Dropout: A simple way to prevent neural networks from overfitting. Journal of Machine Learning Research, 15(1):1929-1958.

Marianne Starlander and Andrei Popescu-Belis. 2002. Corpus-based evaluation of a French spelling and grammar checker. In Proceedings of the Third International Conference on Language Resources and Evaluation (LREC'02), Las Palmas, Canary Islands - Spain. European Language Resources Association (ELRA).

Andreas Stolcke. 2000. Entropy-based pruning of backoff language models. CoRR, cs.CL/0006025.

Ilya Sutskever, Oriol Vinyals, and Quoc V. Le. 2014. Sequence to sequence learning with neural networks. In Proceedings of the 27th International Conference on Neural Information Processing Systems - Volume 2, NIPS'14, pages 3104-3112, Cambridge, MA, USA. MIT Press.

Christian Szegedy, Vincent Vanhoucke, Sergey Ioffe, Jon Shlens, and Zbigniew Wojna. 2016. Rethinking the Inception Architecture for Computer Vision. In 2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pages 2818-2826, Las Vegas, NV, USA. IEEE.

Oscar Täckström, Ryan McDonald, and Jakob Uszkoreit. 2012. Cross-lingual word clusters for direct transfer of linguistic structure. In Proceedings of the 2012 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pages 477-487, Montréal, Canada. Association for Computational Linguistics.

Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Lukasz Kaiser, and Illia Polosukhin. 2017. Attention is all you need. In Advances in Neural Information Processing Systems, volume 30. Curran Associates, Inc.

A. Viterbi. 1967. Error bounds for convolutional codes and an asymptotically optimum decoding algorithm. IEEE Transactions on Information Theory, 13(2):260-269.

Frank Wilcoxon. 1945. Individual Comparisons by Ranking Methods. Biometrics Bulletin, 1(6):80.

William André Auquier Wilson. 1989. Atlantic. In John Bendor-Samuel, editor, The Niger-Congo Languages: A Classification and Description of Africa's Largest Language Family, pages 81-104. University Press of America, Lanham, MD.

David Yarowsky, Grace Ngai, and Richard Wicentowski. 2001. Inducing multilingual text analysis tools via robust projection across aligned corpora. In Proceedings of the First International Conference on Human Language Technology Research, HLT '01, pages 1-8, USA. Association for Computational Linguistics.
