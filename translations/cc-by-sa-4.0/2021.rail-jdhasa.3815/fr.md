> Machine translation (fr) of "Development of linguistically annotated parallel language resources for four South African languages" by Tanja Gaustad, Martin Puttkammer, https://upjournals.up.ac.za/index.php/dhasa/article/view/3815, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Développement de ressources linguistiques parallèles annotées linguistiquement pour quatre langues sud-africaines

Tanja Gaustad, Martin Puttkammer

**Affiliations**  
Tanja Gaustad  
Martin J. Puttkammer  
Centre for Text Technology (CTexT®)  
North-West University, South Africa  
  


## Résumé

Pour ce projet, nous avons collecté et annoté des données pour développer des ressources linguistiques pour les quatre langues Nguni officielles d'Afrique du Sud écrites avec une orthographe conjonctive. Les données pour ces quatre langues sont parallèles pour permettre des études linguistiques comparatives (computationnelles). Les corpus ont été annotés pour trois types d'informations linguistiques (morphologie, catégorie grammaticale et lemme). L'article se concentre sur la procédure d'annotation, les choix de conception qui ont été faits en cours de route ainsi que les étapes de contrôle de qualité utilisées. Espérons que cette description donnera quelques orientations pour des projets similaires sur des langues sous-dotées à l'avenir.

## Mots-clés

Développement de ressources, langues Nguni, corpus linguistiquement annotés, corpus parallèles, procédure d'annotation

## 1 Introduction

L'objectif du projet décrit ici était double : premièrement, construire des corpus annotés pour quatre langues sud-africaines et, deuxièmement, développer des technologies de base fondées sur les données annotées, à savoir des analyseurs morphologiques autonomes, des étiqueteurs de catégories grammaticales et des lemmatiseurs. Nous nous concentrerons uniquement sur le développement du corpus dans cet article. Pour plus de détails sur le développement et l'évaluation des technologies de base, voir (du Toit & Puttkammer 2021).

Nous allons d'abord brièvement décrire le contexte linguistique dans la section 2, suivi d'un aperçu des composants nécessaires au développement réussi des ressources proposées (section 3). Chacune de ces composantes sera ensuite présentée plus en détail : les données (section 4), les prérequis d’annotation linguistique (section 5) ainsi que le processus d’annotation lui-même (section 6). La section 7 présente un exemple des données finales. Les conclusions et les travaux futurs sont discutés dans la section 8.

## 2 Contexte

L'Afrique du Sud compte onze langues officielles comprenant neuf langues bantoues et deux langues germaniques (l'anglais et l'afrikaans). Les langues bantoues d'Afrique du Sud peuvent généralement être catégorisées en trois groupes de familles de langues : quatre langues nguni écrites de manière conjointe (isiNdebele, isiXhosa, isiZulu et Siswati) ; cinq langues écrites de manière disjointe, dont quatre langues sotho (Sepedi, Sesotho, Setswana et Tshivenḓa) et une langue tswa-ronga (Xitsonga). Au moins neuf de ces onze langues sont considérées comme des langues peu dotées en ressources.

Les langues bantoues ont quelques caractéristiques linguistiques intéressantes qui les rendent complexes à traiter de manière computationnelle: elles sont des langues tonales, ont un système élaboré de classification des noms (jusqu'à 21 classes), et la morphologie verbale est complexe et très agglutinante. C'est surtout la nature agglutinante des langues bantoues qui explique leur complexité (Doke 1950) : les mots sont formés en combinant des morphèmes (des unités distinctes porteuses de sens), généralement une racine (pour les verbes) ou un radical (pour les autres classes de mots), avec un ou plusieurs affixes. Ces affixes sont des morphèmes liés avec une fonction singulière dans le mot. Les verbes sont particulièrement productifs grâce à la morphologie dérivationnelle, ce qui entraîne un vocabulaire étendu.

Un autre facteur à noter est le système d'écriture utilisé pour les différentes langues bantoues. Une distinction est faite entre les mots linguistiques et les mots orthographiques, car ces deux entités ne coïncident pas toujours. Pour les langues bantoues écrites de manière disjonctive, plusieurs mots orthographiques peuvent correspondre à un seul mot linguistique (Louwrens & Poulos 2006), tandis que pour les langues bantoues écrites de manière conjonctive (que nous étudions ici) généralement un mot orthographique correspond à un ou plusieurs mots linguistiques.

Voici un exemple tiré de (Prinsloo & de Schryver 2002) pour une illustration de l'écriture disjonctive (Sepedi) versus conjonctive (isiZulu) :

p02-01.png

Dans cet article, nous discuterons des travaux réalisés sur les quatre langues Nguni écrites de manière conjointe, à savoir l'isiNdebele, l'isiXhosa, l'isiZulu et le Siswati.

## 3 Composants pour la construction de ressources linguistiques annotées

La construction de ressources linguistiques annotées nécessite une préparation assez importante, surtout si elles doivent être utilisables pour des tâches de linguistique informatique ou d'apprentissage automatique (Pustejovsky & Stubbs 2012). Nous avons identifié les composants suivants nécessaires pour compiler avec succès des ressources linguistiques annotées :

Données: sans données pas de ressources;

Prérequis pour l'annotation linguistique : ensembles d'étiquettes et protocoles, experts linguistiques, outil(s) d'annotation ;

Processus d'annotation: description des étapes de traitement, incl. contrôle de qualité.

Chaque composant sera maintenant décrit plus en détail, y compris les choix de conception que nous devions faire.

Tableau 1 : Tokens par langue

p02-02.png

## 4 Données

L’ensemble de données utilisé pour ce projet a été constitué à partir de documents sélectionnés au hasard sur les sites Web du domaine gouvernemental sud-africain (*.gov.za) et comprend des textes sur différents sujets, tels que des discours, des communiqués de presse, des informations sur la santé ainsi que d’autres informations sur les ministères et les services gouvernementaux. Le mode de fonctionnement habituel dans les départements de traduction est de traduire à partir d'un document source anglais vers l'une des autres langues. Nous avons donc recueilli des documents et des sites Web qui étaient disponibles en anglais ainsi que les quatre langues Nguni, résultant en un ensemble de données parallèle avec l'anglais comme langue source. La raison de l'utilisation de matériel gouvernemental était la disponibilité relativement facile de données en général et de données parallèles en particulier. La nature parallèle des données permet des études linguistiques comparatives (computationnelles) de ces quatre langues Nguni.

Nous visions environ 50 000 tokens pour chaque langue. Ce choix s’est appuyé sur l’expérience acquise dans le cadre de projets antérieurs portant sur le développement d’outils de linguistique computationnelle. Surtout pour les langues écrites de manière conjointe avec un grand vocabulaire, suffisamment de données pour entraîner et tester de tels outils est essentiel. En même temps, le projet devait également respecter les contraintes de temps et de budget.

Après la sélection finale et le nettoyage, les données ont été séparées en phrases et tokenisées. Chaque paragraphe est conservé en tant qu'unité à afficher comme contexte pendant l'annotation. Le nombre final de jetons peut être trouvé dans le tableau 1, avec et sans les 1 431 marqueurs de paragraphe. Pour plus de détails sur l’ensemble de données, voir (Gaustad & Puttkammer 2021).

## 5 Prérequis pour l'annotation linguistique

À côté de la collecte de données, un autre objectif du projet était d'annoter chaque corpus linguistique pour trois types différents d'informations linguistiques : la morphologie, la catégorie grammaticale (POS) et les lemmes.

Les données annotées pour la morphologie permettent aux chercheurs d'étudier les phénomènes morphologiques dans des corpus de langues réelles. L'étude des processus de création de mots peut conduire à une meilleure compréhension de ces processus ou même à de nouvelles perspectives linguistiques.

L'attribution de catégories à des mots selon leur fonction syntaxique dans une phrase s'appelle l'étiquetage morpho-syntaxique (POS tagging). Il est souvent utilisé comme une première étape dans l'analyse syntaxique et peut également être utilisé avec succès pour, par exemple, l'analyse de la paternité ou la détection du style d'écriture.

Le troisième type d'annotation linguistique, la lemmatisation, est généralement considéré comme une source indispensable d'informations linguistiques pour les correcteurs orthographiques, les dictionnaires, les systèmes de recherche d'informations, etc.

## 5.1 Ensembles d'étiquettes et protocoles

Avant de commencer l'annotation effective des données, nous devions développer des protocoles et des ensembles d'étiquettes pour chaque type d'annotation. Les protocoles expliquent comment annoter les données et quelles normes internationales existantes s'appliquent (EAGLES 1996). Les ensembles de balises contiennent une liste de balises autorisées ainsi qu'une description et des exemples pour chaque balise. Les ensembles d'étiquettes actuels sont des versions affinées de ceux développés pour le projet du National Centre for Human Language Technology (NCHLT) décrit dans (Eiselen & Puttkammer 2014).

Pour la couche d'annotation morphologique, l'objectif était de fournir des annotations morphologiques complètes étiquetant chaque morphème. Pour ce faire, un total de 380 balises de morphologie linguistiquement permises ont été définies, c'est-à-dire que [VRoot] était utilisé pour indiquer la racine verbale ou [SC15] pour un accord du sujet de classe 15. Ceux-ci ont été combinés au cours de l'annotation pour donner des analyses morphologiques complètes des jetons présents dans les données. Par exemple, le mot isiXhosa izinto (« choses ») a été analysé comme i[NPrePre10]-zin[BPre10]-to[NStem].

L'ensemble d'étiquettes POS se compose de 20 classes de mots principales pour les quatre langues, par exemple ADJ pour les adjectifs ou CONJ pour les conjonctions. Certaines étiquettes incluent des informations supplémentaires sur les numéros de classe, par exemple N09 (classe nominale 9) ou POSS06 (classe possessive 6), ce qui donne un total de 107 étiquettes POS uniques disponibles lors de l'annotation.

Pour la lemmatisation, l'objectif était d'identifier le lemme du radical pour chaque token (Prinsloo 2009). Le nom izinto en isiXhosa sera annoté avec le lemme radical to. Ce lemme de radical en combinaison avec l'étiquette POS N10 (classe nominale 10) encode l'information syntaxique essentielle pour le mot izinto.

## 5.2 Experts linguistiques

Une fois les ensembles d'étiquettes et les protocoles établis, nos corpus devaient être annotés avec les informations linguistiques pertinentes. Nous avons examiné les deux possibilités suivantes sur la façon d'accomplir l'annotation des données: les experts linguistiques ou les étudiants pourraient être recrutés et formés ou le crowdsourcing pourrait être utilisé (Zaidan 2012).

Surtout pour l'annotation morphologique, des connaissances linguistiques approfondies sont nécessaires pour annoter correctement les langues couvertes dans ce projet. Pour le crowdsourcing, nous ne nous attendions pas à ce que le grand public ait suffisamment de connaissances de base ni à trouver suffisamment de personnes parlant les quatre langues Nguni. L'utilisation d'étudiants (en linguistique) aurait été une possibilité, mais encore une fois, les connaissances de base étaient une source de préoccupation ainsi que le volume de données à annoter dans le délai imparti. C'était la principale raison pour laquelle nous avons décidé de faire appel à des experts linguistiques pour l'annotation des corpus.

## 5.3 Outils

Les experts linguistiques ont travaillé dans l'outil d'annotation Lara II[1] pour les trois niveaux d'annotation linguistique. Lara II, développé par le Centre for Text Technology (CTexT®), est un logiciel spécifique au domaine pour l'annotation de tokens, de lemmes, d'étiquettes POS et de la morphologie. L'objectif de cet outil est de permettre aux utilisateurs ayant des compétences informatiques limitées ou de base de développer des corpus annotés, lisibles par machine. L'outil a montré qu'il augmentait la précision de l'annotation tout en diminuant le temps d'annotation (Puttkammer 2014).

p04-01.png

Figure 1 : Capture d'écran de l'annotation de Lara II

L'interface contient le token à annoter (surligné), le contexte, un champ d'annotation ainsi qu'un champ de commentaires. Lara II s'adapte facilement aux différentes tâches d'annotation via un fichier de configuration. Dans notre cas, cela était idéal car chaque niveau d'annotation linguistique avait des exigences différentes, des balises autorisées à la manière dont l'information est présentée en passant par les actions possibles. Voir la figure 1 pour un exemple de capture d'écran.

## 6 Processus d'annotation

Une partie essentielle de chaque projet d'annotation, en particulier lorsqu'il implique plusieurs couches d'annotation qui s'appuient les unes sur les autres, est de cartographier le processus à suivre. Dans notre cas, les étapes d'annotation suivantes ont été appliquées:

1. Morphologie

(a) Pré-annoter les données pour la morphologie

(b) Les experts linguistiques corrigent la morphologie pré-annotée

c) Contrôle de la qualité de la morphologie

2. POS

(a) Pré-annoter les données pour POS

(b) Des experts linguistiques corrigent les étiquettes POS pré-annotées et, si nécessaire, la morphologie

(c) Contrôle de la qualité pour POS

3. Lemmes

(a) Pré-annoter les données pour les lemmes

(b) Des experts linguistiques corrigent les lemmes pré-annotés

(c) Contrôle qualité pour les lemmes

4. Contrôle de qualité pour toutes les annotations

Pour l'annotation morphologique et l'annotation POS, les données ont été présentées séquentiellement dans Lara II. Au cours de l'annotation POS, les experts linguistiques ont également eu la possibilité de corriger l'analyse morphologique si nécessaire.

Pour la tâche de lemmatisation, les experts linguistiques ont reçu une liste alphabétique dans laquelle chaque combinaison lemme-morphologique unique était présentée séparément avec un exemple de paragraphe contextuel.

## 6.1 Pré-annotation

Comme décrit dans les étapes de traitement des annotations ci-dessus, les données ont été automatiquement préannotées pour chaque tâche d'annotation. Il a été démontré que la pré-annotation accélère l’annotation (Lingren et al. 2014) et améliore la qualité globale de l’annotation (Rehbein et al. 2012). Avec des langues morphologiquement complexes comme celles avec lesquelles nous travaillons ici, il est impératif de soutenir le processus d'annotation manuelle autant que possible (Puttkammer 2014).

La pré-annotation pour la morphologie a consisté à appliquer les décomposeurs morphologiques NCHLT (Eiselen & Puttkammer 2014) disponibles pour nos quatre langues afin de générer toutes les analyses morphologiques possibles des jetons identifiés. Les experts linguistiques pouvaient alors choisir l'analyse suggérée la plus précise et apporter des modifications plutôt que d'annoter chaque jeton à partir de zéro.

Les statistiques concernant le nombre d'analyses morphologiques générées ainsi que le nombre moyen et maximal d'analyses morphologiques par token peuvent être trouvées dans le tableau 2. Ces chiffres illustrent bien la complexité morphologique des langues bantoues annotées dans ce projet. Généralement, les verbes auront le plus grand nombre d'analyses générées possibles et les mots de classe fermée comme les conjonctions n'auront qu'une seule analyse. Dans l'ensemble, le nombre moyen d'analyses morphologiques est assez élevé.

Pour la pré-annotation POS, un script basé sur des règles a produit une étiquette POS détaillée par jeton en utilisant l'annotation morphologique comme entrée. Lorsque des erreurs possibles dans l'analyse morphologique étaient trouvées, le jeton était soit marqué comme NERR (erreur de nom), VERR (erreur de verbe), ou ERR (erreur générale). Dans ces cas, les experts linguistiques étaient invités à corriger d'abord l'analyse morphologique défectueuse, puis à ajouter l'étiquette POS correcte.

Le tableau 3 donne un aperçu des étiquettes d'erreur POS générées dans nos données. Les statistiques montrent qu'il y avait peu d'analyses morphologiques qui ont déclenché des balises d'erreur. Cela, cependant, ne signifie pas que le reste des balises POS générées étaient correctes.

Pour la lemmatisation, nous avons également utilisé un script à base de règles prenant l'annotation morphologique comme entrée, en combinaison avec des tables de correspondance pour les tokens de classe fermée tels que les conjonctions, afin de produire le lemme radical le plus probable par token. Comme indiqué ci-dessus, pour l'annotation des lemmes, seules les combinaisons uniques d'un lemme et d'une analyse morphologique ont été présentées aux experts linguistiques sous format alphabétique. Le tableau 4 contient le nombre de lemmes à vérifier par langue. Il montre également la réduction des jetons à annoter qui a été réalisée en appliquant cette stratégie.

## 6.2 Contrôle de qualité

Un contrôle qualité rigoureux (CQ) a été réalisé à différentes étapes du projet. Pendant l'annotation d'un type d'information linguistique, le QC a été effectué pour fournir un retour d'information aux experts linguistiques, recueillir les annotations ainsi que les questions linguistiques et résoudre ces problèmes de manière structurée, partagée et documentée, pour une langue et également entre les langues. Ce processus a amélioré la qualité de chaque type d'annotation linguistique et a permis de s'assurer que tous les experts linguistiques appliquaient les mêmes règles et normes.

Tableau 2: Statistiques sur la pré-annotation morphologique

p06-01.png

Tableau 3: Statistiques sur la pré-annotation POS

p06-02.png

Tableau 4: Statistiques sur la pré-annotation de lemme

p06-03.png

Une fois chaque type d'annotation terminé, nous avons vérifié l'adhésion aux protocoles ainsi que les annotations différentes pour des jetons identiques / similaires. Comme expliqué dans l'aperçu de la section 6, chaque annotation alimente la suivante. Pour s'assurer que le moins d'erreurs possibles ont été utilisées comme entrée pour la pré-annotation de l'étape suivante, le CQ après l'achèvement de chaque niveau d'annotation était crucial.

Une fois l'annotation des données terminée pour tous les niveaux linguistiques, un contrôle qualité a été effectué pour s'assurer qu'il y a un accord de 99% entre les annotations de morphologie, de POS et de lemme. Afin de pouvoir quantifier les résultats, un générateur à base de règles a extrait automatiquement le POS et le lemme de l'analyse morphologique. Ce POS et ce lemme générés ont ensuite été comparés aux annotations dans nos données vérifiées manuellement. Toutes les différences entre les deux ont été vérifiées et corrigées par les experts linguistiques. Ce processus a été répété jusqu'à ce que les critères d'évaluation soient atteints.

Malheureusement, nous n'avons pas pu utiliser la concordance inter-juges pour mesurer l'exactitude des annotations (Artstein & Poesio 2008) car un seul expert linguistique pour chaque langue incluse dans ce projet était disponible. Toutefois, nous avons appliqué la comparaison à trois voies décrite ci-dessus dans le but de produire des données de la meilleure qualité possible avec les ressources humaines disponibles.

## 7 Ensemble de données final

Après la finalisation des étapes d'annotation et de QC, les nouvelles ressources pour quatre langues nguni ont été complétées. Les données peuvent être consultées via le dépôt du South African Centre for Digital Language Resources (SADiLaR)[2] et sont distribuées sous la licence Creative Commons Attribution 4.0 International[3].

Le tableau 5 contient un exemple des données finales pour isiXhosa. Les données sont dans un format texte à quatre colonnes, chaque colonne correspondant à un certain type d'information : token, analyse morphologique, lemme ou POS. Chaque ligne contient une combinaison token-annotation. Les marqueurs de ligne avec un compteur montrent le début de chaque paragraphe original et peuvent être utilisés pour aligner le contenu des fichiers.

Tableau 5 : Exemple de ressource annotée finale pour isiXhosa

p07-01.png

## 8 Conclusions et travaux futurs

À l'avenir, il serait intéressant de collecter des données provenant de sources plus diverses et pas seulement de textes gouvernementaux. Linguistiquement, une plus grande diversité de genres représentera plus de types d'utilisation réelle de la langue. En outre, les technologies de base développées sur la base de ces données seraient plus génériques.

Nous avons également appris qu'il est important d'avoir des boucles de rétroaction rapides entre les corrections effectuées sur une couche d'annotation et le QC effectué sur les données. Cela aide à atteindre un bon niveau de qualité dès le début de la phase d'annotation et minimise la nécessité de réannotation et/ou de correction supplémentaire des données déjà annotées.

Une chose à souligner est qu'il est très difficile de trouver des experts linguistiques pour les langues d'Afrique du Sud qui sont disponibles et qualifiés pour faire des annotations pour un projet comme le nôtre. À l'avenir, nous pourrions avoir besoin d'entraîner de nouveaux experts linguistiques, ce qui influencera certainement le calendrier ainsi que les budgets globaux des projets d'annotation. Une conclusion à tirer de ceci est que les langues bantoues d'Afrique du Sud ne sont pas seulement sous-équipées en termes de données, mais que le développement du capital humain est également un aspect important du développement des ressources pour ces langues.

Nous espérons que ces corpus parallèles linguistiquement annotés s’avéreront intéressants pour les chercheurs de différents horizons et aideront à mieux comprendre le fonctionnement de ces quatre langues Nguni, qu’il s’agisse de processus morphologiques, de questions de lemmatisation ou de structures syntaxiques.

## Notes

[1] https://repo.sadilar.org/handle/20.500.12185/432

[2] https://repo.sadilar.org/handle/20.500.12185/546

[3] http://creativecommons.org/licenses/by/4.0/

## Remerciements

Cette recherche a été rendue possible grâce au soutien du South African Centre for Digital Language Resources (SADiLaR). Le SADiLaR est une infrastructure de recherche établie par le Department of Science and Innovation (DSI) du gouvernement sud-africain dans le cadre de la South African Research Infrastructure Roadmap (SARIR).

## Références

Artstein, R. & Poesio, M. (2008), 'Survey article: Inter-coder agreement for computational linguistics', Computational Linguistics 34(4), 555-596.

Doke, C. (1950), 'Bantu languages, inflexional with a tendency towards agglutination', African Studies 9(1), 1-19.

du Toit, J. S. & Puttkammer, M. J. (2021), 'Developing core technologies for resource-scarce Nguni languages', Manuscript under review for publication.

EAGLES (1996), Expert advisory group on languages engineering standards: recommendations for the morphosyntactic annotation of corpora, Technical report, EAGLES, Document EAGTCWG-MAC/R.

Eiselen, R. & Puttkammer, M. J. (2014), Developing text resources for ten South African languages, in 'Proceedings of the Ninth International Conference on Language Resources and Evaluation (LREC 2014)'.

Gaustad, T. & Puttkammer, M. J. (2021), 'Linguistically annotated dataset for four official South African languages with a conjunctive orthography: isiNdebele, isiXhosa, isiZulu, and Siswati', Manuscript under review for publication.

Lingren, T., Deleger, L., Molnar, K., Zhai, H., Meinzen-Derr, J., Kaiser, M., Stoutenborough, L., Li, Q. & Solti, I. (2014), 'Evaluating the impact of pre-annotation on annotation speed and potential bias: natural language processing gold standard development for clinical named entity recognition in clinical trial announcements', Journal of the American Medical Informatics Association 21:3,406-413.

Louwrens, L. J. & Poulos, G. (2006), 'The status of the word in selected conventional writing systems - the case of disjunctive writing', Southern African Linguistics and Applied Language Studies 24(3), 389-401.

Prinsloo, D. (2009), 'Current lexicography practice in Bantu with specific reference to the Oxford Northern Sotho school dictionary', International Journal of Lexicography 22(2), 151-178.

Prinsloo, D. J. & de Schryver, G.-M. (2002), 'Towards an 11x11 array for the degree of conjunctivism / disjunctivism of the South African languages', Nordic Journal of African Studies 11(2), 249-265.

Pustejovsky, J. & Stubbs, A. (2012), Natural Language Annotation for Machine Learning, O'Reilly Media, Inc.

Puttkammer, M. J. (2014), Efficient development of human language technology resources for resource-scarce languages, PhD thesis, North-West University.

Rehbein, I., Ruppenhofer, J. & Sporleder, C. (2012), 'Is it worth the effort? assessing the benefits of partial automatic pre-labeling for frame-semantic annotation', Language Resources and Evaluation 46:1, 1-23.

Zaidan, O. F. (2012), Crowdsourcing annotation for Machine Learning in Natural Language Processing tasks, PhD thesis, Johns Hopkins University.
