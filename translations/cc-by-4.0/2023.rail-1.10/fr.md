> Machine translation (fr) of "Towards a Swahili Universal Dependency Treebank: Leveraging the Annotations of the Helsinki Corpus of Swahili" by Kenneth Steimel, Sandra Kübler, https://aclanthology.org/2023.rail-1.10/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## Vers une banque d’arbres de dépendance universelle pour le swahili : tirer parti des annotations du Corpus d’Helsinki du swahili

Kenneth Steimel, Sandra Kübler

**Affiliations**  
Kenneth Steimel  
Sandra Kübler  
Indiana University  
Indiana University  
  


## Résumé

L'annotation de dépendance peut être un processus laborieux pour les langues sous-dotées en ressources. Cependant, dans certains cas, d'autres ressources sont disponibles. Nous étudions si nous pouvons exploiter de telles ressources dans le cas du swahili : nous utilisons les annotations du Helsinki Corpus of Swahili pour créer un arbre-banc de dépendances universelles pour le swahili. Le Helsinki Corpus of Swahili fournit des annotations au niveau des mots pour les catégories grammaticales, les traits morphologiques et les étiquettes syntaxiques fonctionnelles. Nous entraînons des étiqueteurs neuronaux pour ces types d'annotations, puis nous utilisons ces modèles pour annoter notre corpus cible, la partie swahili du Global Voices Corpus. Sur la base des annotations au niveau du mot, nous créons ensuite manuellement des règles de grammaire de contrainte pour annoter le corpus cible pour les Dépendances Universelles. Dans cet article, nous décrivons le processus, discutons des décisions d'annotation que nous avons dû prendre, et nous évaluons l'approche.

## 1 Introduction

Le swahili est la langue bantoue la plus parlée avec environ 16 millions de locuteurs natifs (Simons et Fennig, 2018) et 50 à 100 millions de locuteurs L2. Le swahili sert de langue nationale de la Tanzanie, du Kenya, de l'Ouganda et de la RDC, est une langue de travail de l'Union africaine et sert de lingua franca pour la Communauté d'Afrique de l'Est.

Bien que ce ne soit pas une langue typiquement sous-dotée en général, il n'existe pas d'arborescences syntaxiques disponibles pour le swahili. Puisque l'annotation des dépendances est une entreprise coûteuse et nécessite des experts dans le cadre syntaxique ainsi que dans le langage, nous étudions si nous pouvons tirer parti des ressources existantes pour automatiser la création d'une banque d'arbres autant que possible. Nous étudions une approche où nous utilisons le Corpus Helsinki de Swahili (Hurskainen, 2004a) et ses annotations comme point de départ. Nous créons ensuite des étiqueteurs automatiques pour l'annotation au niveau des mots basés sur ce corpus. Après avoir appliqué ces étiqueteurs à notre corpus cible, la section swahili du Global Voices Corpus (Tiedemann, 2012), nous utilisons une approche à base de règles pour convertir l'annotation au niveau des mots en annotations Universal Dependency (UD) (de Marneffe et al., 2021). Les annotations au niveau des mots disponibles dans le Helsinki Corpus of Swahili se composent d'étiquettes de catégorie grammaticale (POS), fondées sur un jeu d'étiquettes POS qui contient des informations plus fines que le jeu d'étiquettes de catégorie grammaticale d'Universal Dependency. De plus, le corpus contient des caractéristiques morphologiques et des étiquettes syntaxiques fonctionnelles, qui sont basées sur un cadre de grammaire contrainte.

Lors de la conversion des informations morphologiques et syntaxiques dans le cadre des dépendances universelles, nous avons rencontré des défis basés sur le fait que peu de travaux ont été réalisés sur les annotations UD pour les langues bantoues. Nous discuterons de certains de ces cas ainsi que des décisions d'annotation que nous avons prises. Le treebank, toutes les règles et le code sont disponibles à https://git.steimel.info/ksteimel/SWH_UDT. La banque d'arbres sera incluse dans la prochaine version d'UD.

Le reste de cet article est structuré comme suit : la section 2 rend compte des travaux connexes, la section 3 donne un aperçu du système utilisé pour convertir les annotations et la section 4 décrit les corpus que nous utilisons. Dans la section 5, nous décrivons les annotations au niveau des mots, et dans la section 6, nous décrivons les règles pour l'annotation de dépendance. La section 7 examine la qualité de nos annotations, et la section 8 conclut.

## 2 Travaux connexes : Approches de TAL pour le swahili

L'importance politique et économique encourage la recherche sur le swahili, ce qui en fait l'une des langues bantoues les plus étudiées dans le traitement du langage naturel. Des systèmes basés sur des règles, des approches axées sur les données et des méthodes non supervisées ont été adoptés pour le swahili. Hurskainen (1992) présente la première recherche sur l'analyse morphologique du swahili. L'analyseur morphologique SWATWOL utilise une morphologie à deux niveaux à états finis (Koskenniemi, 1983) pour marquer les mots. Un système de grammaire à contraintes est utilisé pour désambiguïser lorsque plusieurs analyses sont fournies par le système à états finis (Hurskainen, 1996). Ces composants sont combinés ensemble dans le gestionnaire de langue swahilie (SALAMA) (Hurskainen, 2004b). Le système SALAMA est étendu pour inclure un analyseur syntaxique superficiel à grammaire de contraintes et un analyseur syntaxique en dépendance plus profond basé sur la grammaire. Bien que l'analyseur syntaxique à dépendances dans SALAMA semblerait inestimable pour le présent travail, l'analyseur n'est pas librement disponible et la structure de dépendance n'est pas fournie comme partie du Helsinki Corpus of Swahili (Hurskainen, 2004a). Littell et al. (2014) développent un analyseur morphologique à états finis similaire pour le swahili. Cependant, leur approche implique l'utilisation d'un dictionnaire en ligne participatif (kamusi.org) pour assurer une large couverture lexicale.

En utilisant des corpus développés par des méthodes fondées sur des règles, De Pauw et coll. (2006) adoptent plutôt une approche axée sur les données. Ils entraînent des étiqueteurs de catégories grammaticales sur le Helsinki Corpus of Swahili (Hurskainen, 2004a), qui a été construit en utilisant le système de gestionnaire de langue SALAMA décrit ci-dessus. Ils utilisent une variété d'étiqueteurs prêts à l'emploi, y compris un modèle de Markov caché (TnT), des SVM (SVMtool), des étiqueteurs basés sur la mémoire (MBT) et un étiqueteur à modèle d'entropie maximale (MXPOST). La meilleure performance est atteinte avec le modèle d'entropie maximale, bien que tous les modèles atteignent une précision de plus de 90 %. Le modèle d'entropie maximale se comporte particulièrement bien avec les mots hors vocabulaire.

Le swahili a également été au centre de recherches sur la découverte non supervisée de morphèmes. Hu et al. (2005) utilisent une heuristique string-edit-distance (SED) pour apprendre la morphologie du swahili. Cette heuristique passe en revue toutes les paires de mots d'un corpus et crée un alignement entre les paires en utilisant la distance d'édition avec des pénalités spécifiques pour la substitution, l'addition et la suppression. Ensuite, les automates à états finis décrivant des paires de chaînes liées sont réduits ensemble avec des séquences alignées de caractères mappant sur le même état. Ce processus itère ; les automates à états finis produits se combinent avec d'autres automates. À la fin, les endroits où l'AEF diverge sont les limites des morphèmes. Les auteurs font état de performances élevées par rapport à d'autres heuristiques de découverte de morphèmes non supervisées telles que la fréquence des successeurs (Harris, 1955).

p02-01.png

Figure 1: Diagramme des étapes impliquées dans la création de l'Universal Dependency Treebank pour le swahili.

Récemment, des chercheurs ont développé des corpus pour les systèmes de questions-réponses et la classification des émotions en swahili (Martin et al., 2022). De plus, un modèle transformeur pour le swahili a été développé (Martin et al., 2022).

## 3 Aperçu du système

Étant donné qu'aucune banque d'arbres de dépendance n'est disponible, nous créons automatiquement les arbres de dépendance en utilisant les annotations dans le Corpus d'Helsinki en Swahili. Ce corpus contient des informations syntaxiques sous la forme d'étiquettes de grammaire de contraintes au niveau des mots, qui doivent être converties en annotations de dépendance universelle. Pour cette conversion, nous utilisons un certain nombre de modèles de marquage neuronal, de règles de post-traitement et de règles de création d'arcs de dépendance.

La portion plus petite et de meilleure qualité, annotée manuellement, de la banque d'arbres subit une série d'étapes similaires, mais avant que les règles de création de dépendance ne soient appliquées, une portion de la banque d'arbres est échantillonnée. Cet échantillon est ensuite annoté manuellement. La figure 1 montre les différentes étapes et ressources impliquées dans le processus.

p03-01.png

Tableau 1 : Étiquettes pour une seule phrase dans le HCS.

p03-02.png

Tableau 2: Représentation CONLL-U de la phrase du tableau 1, en se concentrant uniquement sur les colonnes pertinentes.

## 4 Corpora

La situation du corpus en swahili est quelque peu difficile. Nous utilisons à la fois le Helsinki Corpus of Swahili (HCS) (Hurskainen, 2004a) et la section swahili du Global Voices corpus (GVC) (Tiedemann, 2012) dans ce travail. En raison des limitations de licence, nous ne sommes pas en mesure d'annoter le Corpus d'Helsinki du Swahili avec les dépendances et de le redistribuer. Pour cette raison, nous exploitons les annotations au niveau du mot de ce corpus pour créer un étiqueteur morphosyntaxique utilisant le jeu d'étiquettes POS du Helsinki Corpus of Swahili, un étiqueteur morphosyntaxique pour les étiquettes UD POS, un analyseur morphologique et un étiqueteur syntaxique de grammaire de contraintes au niveau du mot. Nous utilisons ensuite ces étiqueteurs pour annoter la partie swahili du Global Voices corpus au niveau des mots. Dans une dernière étape, nous créons des annotations de dépendance universelle basées sur toutes ces annotations via une approche basée sur des règles.

Les textes contenus dans le corpus d'Helsinki du swahili proviennent principalement d'assemblées législatives, d'un recueil d'histoires et d'articles de presse. En termes d'annotations, le Helsinki Corpus of Swahili est un corpus de norme argentée créé par le transducteur à états finis et désambiguïsateur SALAMA (Hurskainen, 1999). Dans le corpus, chaque mot est annoté avec son lemme, sa balise POS, une série de balises morphologiques et une balise syntaxique fonctionnelle (grammaire des contraintes) décrivant le rôle du mot dans la phrase sont incluses pour chaque mot. Le tableau 1 montre l'annotation au niveau du mot pour la phrase Afisa Elimu alisimama kwa amri ya Mwenyekiti (Eng. : The education officer stood for the Chairman's command) du HCS.

Le tableau 2 montre la conversion de cette phrase au format CONLL-U. Le HCS utilise plusieurs façons d'exprimer la classe nominale ou l'accord de classe nominale d'un mot. Par exemple, les noms (qui possèdent intrinsèquement une classe nominale) indiquent la classe nominale de la forme singulière, la classe nominale de la forme plurielle et si le nom donné est singulier ou pluriel (c.-à-d. 9/10-SG). Les préfixes d'accord de classe nominale sur un verbe suivent une convention différente où la classe nominale, le nombre et la personne sont indiqués (par exemple, 1-SG3). Les adpositions telles que ya, quant à elles, indiquent l'accord de classe de nom comme étant simplement une classe de nom suivie du nombre (i.e., 9-SG). En outre, pour certaines étiquettes POS, certaines caractéristiques morphologiques sont supposées par défaut par le HCS, et seules les caractéristiques qui divergent de cette valeur par défaut sont incluses. Par exemple, la voix active et la polarité positive ne sont souvent pas explicitement annotées dans les annotations HCS, mais la voix passive et la polarité négative le sont.

p04-01.png

Tableau 3: Exemples de tokenisation de démonymes swahilis.

Le Global Voices Corpus, en revanche, est un grand corpus massivement multilingue avec des textes parallèles dans 46 langues. Le GVC se compose d'articles d'actualité du monde entier. Parce que le corpus contient des articles de journalistes citoyens, le texte des médias sociaux est également inclus. Contrairement au HCS, le GVC se compose de texte brut sans aucune annotation au niveau des mots. Pour notre treebank, nous utilisons la section du GVC avec des textes parallèles en swahili et en anglais. Cette section du corpus se compose de 29 698 phrases en swahili, 546 000 mots.

## 5 Création d'annotations au niveau des mots

Notre objectif ultime est la création d'un Universal Dependency Treebank pour le swahili. En première étape, nous devons annoter le Global Voices Corpus (GVC) pour les informations au niveau des mots, sur la base desquelles nous pourrons ensuite appliquer les règles qui construiront les annotations de dépendance.

Nous avons entraîné des modèles d’étiquetage neuronal au niveau des mots en utilisant un échantillon de 789 691 mots, correspondant à 35 925 phrases, du Corpus d’Helsinki du swahili (HCS). Une architecture neuronale commune a été utilisée pour les modèles de marquage de mots suivants : étiquettes UD POS, étiquettes POS spécifiques à la langue du HCS, caractéristiques morphologiques et étiquettes syntaxiques fonctionnelles. Cette architecture se compose d'un GRU-LSTM bidirectionnel à deux couches utilisant des embeddings de caractères et de mots appris. En raison du grand nombre de balises morphologiques, nous avons développé une deuxième architecture qui modélise les caractéristiques morphologiques individuelles en tant que balises uniques. Ce modèle est très similaire dans sa conception à l'autre architecture de marquage neuronal. Cependant, au lieu d'utiliser argmax pour prédire une seule étiquette, ce modèle prédit toutes les étiquettes qui dépassent un seuil (0,5) après une activation sigmoïde.

Nous avons ensuite automatiquement tagué le Global Voices Corpus (GVC) avec ces modèles neuronaux. À partir des données GVC automatiquement étiquetées, 150 phrases courtes (longueur 8-30 mots) et 30 phrases plus longues (longueur 20-50 mots) ont été échantillonnées au hasard pour une annotation manuelle. Ensuite, le système de règles a été appliqué au reste de la GVC pour créer les annotations UD.

L'intégration du swahili dans le cadre des dépendances universelles nous a obligés à prendre des décisions d'annotation concernant la tokenisation, la conversion des étiquettes de catégorie grammaticale, le traitement de constructions particulières en swahili. Nous détaillons ces décisions ci-dessous.

Lors de la tokenisation, nous avons accordé une attention particulière pour nous assurer que les démonymes avec des traits d'union n'étaient pas séparés, mais que les composés étaient séparés. Les démonymes tels que ceux présentés dans le tableau 3 sont fréquemment présents dans le corpus de Global Voices. Les expressions régulières utilisées pour la tokenisation assuraient que les traits d'union après les préfixes de classe nominale n'étaient pas séparés du reste du mot.

Conformément aux directives de UD, les composés de conjonctions de coordination et de pronoms sont séparés en leurs tokens constitutifs. Par exemple, naye est séparé en na yeye (Eng.: et il / elle) et nasi est séparé en na sisi (Eng: et vous tous).

Conversion des étiquettes POS en UD Les étiquettes POS du Helsinki Corpus of Swahili sont relativement proches des étiquettes POS de Universal Dependency. En général, la conversion est un mapping multi-to-one : les balises Helsinki corpus annotent un certain nombre de distinctions qui ne figurent pas dans Universal Dependencies. De plus, toutes les balises POS réservées à la ponctuation dans le corpus de balises swahili d'Helsinki (c'est-à-dire COLON, HYPHEN, etc.) sont mappées dans PUNCT. Le tableau 4 montre la correspondance entre les deux annotations des étiquettes POS.

Dans certains cas, des informations supplémentaires étaient nécessaires pour déterminer la balise de dépendance universelle appropriée. Par exemple, dans HCS, EXCLAM est généralement utilisé pour les interjections telles que jamani (Eng. : hey there). Cependant, il est également utilisé pour les points d'exclamation. Pour ces cas, nous assignons PUNCT.

Les pronoms relatifs et les verbes avec marqueurs relatifs ont tous deux reçu les étiquettes POS Helsinki REL-LI ou REL-LI-VYO. Dans de tels cas, nous utilisons l'étiquette syntaxique fonctionnelle assignée au mot pour la désambiguïsation : si le mot a une étiquette fonctionnelle verbale, alors nous assignons l'étiquette UD V. Dans tous les autres cas, nous assignons PRON.

p05-01.png

Tableau 4 : Correspondance entre les étiquettes POS du Helsinki Corpus of Swahili et des Universal Dependencies.

Contrairement à la conversion des balises POS, qui est un processus relativement simple, l'extraction morphologique des balises est considérablement plus complexe.

Les caractéristiques morphologiques dans Universal Dependency consistent en des paires attribut-valeur. Ceux-ci sont représentés au format CONLL-U avec les attributs séparés de leurs valeurs associées par '=' et chaque paire est séparée par '|'. Les directives d'annotation Universal Dependency (Nivre et al., 2017) fournissent des caractéristiques morphologiques pour accommoder les classes nominales dans les langues bantoues. Ces caractéristiques sont indiquées en utilisant différentes valeurs pour l'attribut NounClass. Cependant, ces caractéristiques ne sont pas suffisantes puisque les verbes peuvent avoir plusieurs marqueurs de classe nominale indiquant la classe nominale du sujet, de l'objet et de la tête relative.

Par exemple, le mot a-li-yo-i-tum-ia possède des marqueurs indiquant la classe nominale, la personne et le nombre pour le sujet, l'objet et la tête relative, voir l'analyse dans l'exemple (1).

(1) a-li-yo-i-tum-ia 3SG-PST-4.REL-9.OBJ-use-APPL ceux qu'il/elle a utilisés pour cela

Pour résoudre ce problème, nous utilisons des caractéristiques morphologiques stratifiées. Pour Person, Number, et NounClass, des sous-types supplémentaires tels que rel, subj, et obj sont ajoutés. Jusqu'à récemment, cette possibilité n'était pas documentée dans Universal Dependencies, cependant d'autres treebanks ont établi ces caractéristiques en couches comme un précédent. Un exemple est le treebank Basque Universal Dependency (Aranzabe et al., 2015). Bien que les sous-types ne soient pas décrits dans la documentation du processus de conversion (Aranzabe et al., 2015), ce treebank inclut des verbes avec plusieurs caractéristiques de nombre utilisant des sous-types pour l'indiquer. Contrairement à l'arborescence de dépendance universelle basque, nous n'utilisons pas de sous-types avec le cas de l'élément concordant indiqué pour le swahili. Plutôt, les sous-types spécifient simplement la fonction de l'élément d'accord. Par exemple, là où le corpus basque utilise Number[nom], le corpus swahili utilise Number[subj]. L'option basque n'est pas utilisable pour le swahili car le swahili n'a pas de cas manifeste, et l'adoption d'une analyse de cas secrète pour toutes les langues comme le swahili ne suit pas les principes de la dépendance universelle.

## 6 Création d'annotations de dépendance

## 6.1 Lignes directrices sur la dépendance

Nous adhérons aux lignes directrices établies par Universal Dependency (Nivre et al., 2017). Cette section présente quelques détails sur la façon dont nous avons appliqué ces lignes directrices au swahili. Les directives de Universal Dependency indiquent que "[l]e copule be n'est pas traité comme le noyau d'une clause, mais plutôt comme le prédicat non verbal" (de Marneffe et al., 2020). Les directives conseillent également que "[l]a relation cop doit uniquement être utilisée pour les copules pures qui ajoutent au plus des catégories TAME au sens du prédicat".

Dans l'arborescence swahilie, nous distinguons la copule "verbale" kuwa et d'autres copules comme ni, la forme négative si, les formes emphatiques comme ndiyo et les copules locatives comme uko. Nous analysons kuwa comme un verbe tandis que les autres copules reçoivent l'étiquette POS COP et ne sont pas considérées comme le noyau de leur clause.

## 6.2 Application des règles

Pour créer des règles de correction des problèmes courants avec les étiqueteurs neuronaux et générer des arcs de dépendance, CG3 a été utilisé (Bick et Didriksen, 2015). CG3 est une variante étendue de la grammaire de contrainte avec des implémentations pour compiler et appliquer des règles de grammaire de contrainte, nous permettant de développer et d'appliquer des règles complexes.

Corrigeant les erreurs dans les étiquettes au niveau des mots
Initialement, des règles ont été écrites pour remédier aux erreurs des étiquettes au niveau des mots produites par les modèles POS neuronaux. Pour corriger les erreurs produites par l'étiqueteur automatique, les commandes SUBSTITUTE et ADD ont été utilisées pour changer une étiquette en une autre, ajouter une étiquette manquante ou supprimer une étiquette erronée. Ces règles de correction des balises au niveau des mots ont été appliquées avant toutes les règles créant des arcs de dépendance.

Dans de nombreux cas, les règles de réécriture des balises étaient utilisées pour réécrire une balise de niveau mot si trois ou plus des autres balises de niveau mot indiquaient qu'une erreur s'était produite. Le premier exemple du tableau 5 montre une règle qui remplace NOUN par VERB dans les cas où d'autres étiqueteurs indiquent que le mot en question est en réalité un verbe. Plus précisément, l'étiqueteur morphosyntaxique spécifique à la langue doit attribuer à ce mot une étiquette V, et il doit avoir la caractéristique morphologique spécifiant la polarité et l'une des nombreuses étiquettes syntaxiques fonctionnelles indiquant que ce mot sert de verbe dans la phrase pour que la règle s'applique.

Création d'arcs de dépendance Pour créer des arcs de dépendance à partir de phrases et des annotations au niveau du mot, nous avons créé des règles d'expressions régulières ordonnées, de sorte que les règles très spécifiques étaient suivies de versions plus génériques utilisant des restrictions plus souples ; et occasionnellement, nous avons utilisé des règles de repli. Certains phénomènes ont été abordés à l'aide d'une seule règle générique sans versions plus spécifiques ou laxistes. Par exemple, la phrase en gras dans la phrase de l'exemple (2) montre un exemple de plusieurs phrases nominales liées ensemble dans une chaîne de phrases nominales associative.

(2) Biti COP

p06-01.png

Biti est le secrétaire général du Mouvement pour le changement démocratique, dirigé par l'ancien Premier ministre Morgan Tsvangirai.

Sans prendre en compte l'accord de classe nominale, le syntagme nominal en gras est ambigu, c'est-à-dire que les deux analyses de dépendance de la Figure 2 seraient possibles.

Comme l'analyse interlinéaire dans l'exemple (2) l'indique, zamani est un nom de classe 9, la préposition associative wa est de classe 1, et Waziri est de classe 1. L'associatif s'accorde en classe nominale avec le nom que son nom parent modifie. Ainsi, l'analyse syntaxique dans l'analyse de dépendance à droite de la Figure 2 est la bonne. La version spécifique de la règle, présentée comme la deuxième règle dans le tableau 5, tire parti de cet accord.

Des règles plus génériques sont appliquées si aucune correspondance pour une règle spécifique n'est trouvée. Une règle générique peut s'appliquer en raison d'erreurs dans les étiquettes morphologiques produites par le modèle d'étiquetage ou en raison d'un accord manquant entre les deux tokens. Dans ce cas particulier, les adpositions associatives dans différentes classes de noms sont souvent polysémiques. Par exemple, wa peut indiquer que le nom modifié par son nom parent est de classe 1, comme dans l'exemple ci-dessus, ou de classe 2, 3 ou 11. Les étiqueteurs neuronaux peuvent tirer parti du contexte environnant ; cependant, des erreurs se produisent encore avec une certaine fréquence. Une règle générique est ainsi utilisée pour lutter contre les erreurs dans les annotations morphologiques. Cette règle, présentée comme la troisième règle dans le tableau 5, n'a pas de contraintes d'accord.

Les règles de repli sont appliquées dans les cas où les critères utilisant les étiquettes morphologiques et fonctionnelles échouent. Au lieu de cela, de simples schémas d'ordre linéaire conditionnés par les POS sont utilisés dans les règles de repli.

p07-01.png

p07-02.png

Figure 2 : Deux analyses de dépendance possibles pour la chaîne de syntagmes nominaux de l'exemple (2).

Tableau 5 : Exemple de règle pour la correction des erreurs dans les étiquettes au niveau des mots.

p07-03.png

Le tableau 6 montre la fréquence à laquelle des types de règles spécifiques, génériques et de repli sont utilisés pour traiter chaque type de phénomène. Bien que les règles très spécifiques soient capables de désambiguïser plus efficacement entre différents arcs possibles, ces règles spécifiques sont déclenchées moins fréquemment.

## 7 Qualité des annotations

## 7.1 Résultats de l'étiquetage au niveau des mots

Avant d'entraîner les modèles de balisage neuronal, nous avons mis de côté 2 000 phrases du Corpus d'Helsinki du swahili, 1 000 phrases pour la validation et 1 000 phrases pour tester les performances du modèle. Le tableau 7 présente les résultats de cette évaluation. Tous les modèles dépassent 94 % d'exactitude, et tous sauf l'étiqueteur morphologique multi-étiquettes atteignent une exactitude de 97 % et plus ; les F-scores correspondants pour l'étiquetage POS et le rôle fonctionnel sont dans la même fourchette. Comme discuté dans la section 5, l'étiqueteur multi-étiquettes produit une étiquette si elle dépasse un seuil de 0,5. Bien que cela permette à l'étiqueteur d'être plus flexible et de considérer des combinaisons de caractéristiques morphologiques qui n'étaient pas présentes dans les données d'entraînement, cela n'impose pas non plus de restrictions de cooccurrence entre les morphèmes. Le modèle multilabel peut prédire à la fois NounClass=9 et NounClass=7 pour le même nom, bien que cela ne devrait pas être permis. Ces restrictions sont automatiquement respectées lors de l'utilisation de l'étiqueteur morphologique monolithique.

Notez que les données de test sont dérivées du corpus source, le Helsinki Corpus of Swahili, et donc la performance exacte des modèles sur le corpus cible (GVC) ne peut être déterminée. Au cours du processus de création manuelle de corpus, nous avons corrigé les balises UD POS et ajouté des arcs de décence, mais nous n’avons pas corrigé les autres balises de niveau de mot. À l'avenir, d'autres balises de niveau de mot seront également corrigées.

## 7.2 Points forts et limites des arbres générés

Sur 29 698 phrases, les règles de création de dépendances génèrent des arbres de dépendance pour 4 994 phrases. 3 499 de ces arbres sont des arbres de dépendance projectifs. Lors de l'examen de phénomènes linguistiques particuliers, les règles fonctionnent bien pour certains et produisent des arbres incorrects ou incomplets lorsqu'elles sont confrontées à d'autres.

p08-01.png

Tableau 6 : Fréquence de type de règle pour les règles de création de dépendance sur Global Voices Corpus.

p08-02.png

Tableau 7 : Précision du modèle par rapport à la taille des tagsets pour les modèles bidirectionnels basés sur GRU.

Chaînes associatives En swahili, les phrases nominales complexes sont souvent construites en utilisant des chaînes d'adpositions associatives. Notre système de règles se comporte bien avec ces constructions. La figure 3 montre l'arbre généré pour la chaîne associative au début de la phrase dans l'exemple (3). Bien que la chaîne associative soit gérée correctement, la phrase nominale locative nchini Cambodia devrait modifier Wa-tumiaji (utilisateurs), au début du texte. Cependant, il n'y a pas de caractéristiques morphologiques qui peuvent aider les règles à désambiguïser l'attachement de cette phrase de nom locatif.

(3) Wa-tumiaji 1-users w-a 1-ASSOC mitandao network y-a 9-ASSOC jamii society nchini country Cambodia Cambodia pia alama wa-me-hamas-ish-wa 3PL-PERF-motivate-CAUS-PASS ku-weka 15-set picha images z-a 10-ASSOC signe alama y-a 9-ASSOC

Les utilisateurs de médias sociaux au Cambodge sont également encouragés à remplacer leurs photos de profil par des icônes de la campagne.

p09-01.png

Figure 3 : Chaîne associative initiale dans l'exemple 3

p09-02.png

Figure 4 : Un arbre pour une courte clause relative sans tête

Clauses relatives Les clauses relatives headless et headed sont souvent traitées correctement par le système de règles. Seules les clauses relatives sans tête sont montrées ici en raison de contraintes d'espace. L'exemple (4) affiche une phrase avec une clause relative sans tête. Le nom dakika (Eng.: minutes) est modifié par la clause relative zilizofuata (Eng.: following). L'adjectif intercalé chache n'interfère pas avec les règles et est également relié à dakika, comme il convient.

p09-03.png

Si cela se produit, sont partis les jours où les vœux de mariage doivent être pris au sérieux "Jusqu'à ce que la mort nous sépare"?

Identification de la racine L'identification de la racine de la proposition à l'aide de règles est difficile. Cela est particulièrement vrai dans les cas où une certaine forme de topicalisation s’est produite.

Dans l'exemple (4), la clause adverbiale frontale Ikiwa itatokea (Eng.: Si cela se produit) interfère avec les règles actuelles d'identification de la racine.

Au lieu d’assigner le statut de racine à kupewa, le verbe dans la proposition adverbiale itatokea est erronément étiqueté comme la racine. Bien que itatokea soit une forme verbale et donc une racine possible, il est le noyau de la proposition subordonnée.

## 8 Conclusion

Notre travail vise à créer un arbre de dépendances universelles pour le swahili en s'appuyant sur les annotations du Helsinki Corpus of Swahili. Nous montrons que nous pouvons entraîner des étiqueteurs neuronaux pour annoter les étiquettes UD POS, les étiquettes POS spécifiques à la langue, les étiquettes morphologiques, ainsi que les étiquettes syntaxiques fonctionnelles, et que nous pouvons utiliser ces annotations sur un nouveau corpus pour créer des règles d'expression régulière afin de dériver une annotation de dépendance. Les résultats ne sont pas parfaits : pour environ 30 % des phrases, nos méthodes ne créent pas d'arbres entièrement connectés. Mais nos annotations peuvent être améliorées à l'avenir. Il est, bien sûr, possible d'ajouter plus de règles à notre cadre pour couvrir plus de cas. Cependant, toute nouvelle règle sera très spécifique et n'améliorera donc qu'un très petit nombre de cas. Nous soutenons par conséquent que des améliorations supplémentaires devraient provenir de l'entraînement d'un analyseur syntaxique robuste et de la correction manuelle des arbres syntaxiques. Nous prévoyons d'étudier des méthodes d'analyse syntaxique robustes qui fourniront des analyses fiables lorsqu'elles sont entraînées sur les annotations disponibles.

## 9 Limites

Il est certain qu'il y a des erreurs dans les annotations automatiques et manuelles. Notre procédure de conversion est limitée par les informations disponibles dans le Corpus de Helsinki du Swahili. Et bien que le premier auteur, qui a annoté manuellement la partie du treebank swahili, ait un entraînement approfondi en syntaxe bantoue, il n'est pas un locuteur natif du swahili. Nous espérons que cette première étape inspire une expansion et/ou une correction future du corpus.

## 10 Déclaration éthique

Travailler sur une langue sous-dotée s'accompagne toujours du danger de désavantager la communauté linguistique. Cependant, les annotations de dépendance nécessitent un bagage syntaxique, et il n'y a souvent pas assez de locuteurs de la langue avec un tel entraînement. Nous espérons que la communauté swahili adoptera et améliorera notre banque d’arbres. Nous avons choisi consciemment un corpus qui peut être distribué librement, plutôt que de travailler avec le Helsinki Corpus of Swahili, qui est assorti d'exigences de licence restrictives.

## Notes

1 Pour plus de détails sur le format CONLL-U, voir https://universaldependencies.org/format.html

2 Les copules localisées comme uko pourraient peut-être être annotées comme adverbiales. Cependant, cela n'affecte que l'étiquette. Le prédicat non verbal suivant uko serait toujours le noyau de la proposition.

3 Par exemple, certaines adpositions comme wa s’accordent avec la classe nominale du nom précédent et correspondraient à une forme de règle spécifique. Cependant, d'autres adpositions comme katika n'indiquent pas la classe nominale du nom précédent de quelque façon que ce soit.

## Références

Maria Jesus Aranzabe, Aitziber Atutxa, Kepa Bengoetxea, Arantza Diaz de Ilarraza, Iakes Goenaga, Koldo Gojenola, and Larraitz Uria. 2015. Automatic conversion of the Basque Dependency Treebank to Universal Dependencies. In Proceedings of the Fourteenth International Workshop on Treebanks and Linguistic Theories (TLT14), pages 233-241.

Eckhard Bick and Tino Didriksen. 2015. CG-3 - Beyond classical constraint grammar. In Proceedings of the 20th Nordic Conference of Computational Linguistics (NODALIDA 2015), pages 305-308.

Marie-Catherine de Marneffe, Filip Ginter, Yoav Goldberg, Jan Hajič, Christopher Manning, Ryan McDonald, Joakim Nivre, Slav Petrov, Sampo Pyysalo, Sebastian Schuster, Natalia Silveira, Reut Tsarfaty, Francis Tyers, and Dan Zeman. 2020. Universal Dependencies.

Marie-Catherine de Marneffe, Christopher D. Manning, Joakim Nivre, and Daniel Zeman. 2021. Universal Dependencies. Computational Linguistics, 47(2):255-308.

Guy De Pauw, Gilles-Maurice De Schryver, and Peter W Wagacha. 2006. Data-driven part-of-speech tagging of Kiswahili. In International Conference on Text, Speech and Dialogue, pages 197-204. Springer.

Zellig S. Harris. 1955. From phoneme to morpheme. Language, 31(2):190-222.

Yu Hu, Irina Matveeva, John Goldsmith, and Colin Sprague. 2005. Refining the SED heuristic for morpheme discovery: Another look at Swahili. In Proceedings of the Workshop on Psychocomputational Models of Human Language Acquisition, pages 28-35, Ann Arbor, Michigan. Association for Computational Linguistics.

Arvi Hurskainen. 1992. A two-level computer formalism for the analysis of Bantu morphology. an application to Swahili. Nordic Journal of African Studies, 1(1).

Arvi Hurskainen. 1996. Disambiguation of morphological analysis in Bantu languages. In Proceedings of the 16th Conference on Computational Linguistics, pages 568-573.

Arvi Hurskainen. 1999. Salama: Swahili language manager. Nordic Journal of African Studies, 8:139-157.

Arvi Hurskainen. 2004a. Helsinki corpus of Swahili. Compilers: Institute for Asian and African Studies (University of Helsinki) and CSC.

Arvi Hurskainen. 2004b. Swahili language manager: A storehouse for developing multiple computational applications. Nordic Journal of African Studies, 13(3):363-397.

Kimmo Koskenniemi. 1983. Two-level model for morphological analysis. In IJCAI, volume 83, pages 683-685.

Patrick Littell, Kaitlyn Price, and Lori Levin. 2014. Morphological parsing of Swahili using crowd-sourced lexical resources. In Proceedings of the Ninth International Conference on Language Resources and Evaluation (LREC'14), pages 3333-3339, Reykjavik, Iceland. European Language Resources Association (ELRA).

Gati Martin, Medard Edmund Mswahili, Young-Seob Jeong, and Jiyoung Woo. 2022. SwahBERT: Language model of Swahili. In Proceedings of the 2022 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pages 303-313, Seattle, United States. Association for Computational Linguistics.

Joakim Nivre, Željko Agić, Lars Ahrenberg, Maria Jesus Aranzabe, Masayuki Asahara, Aitziber Atutxa, Miguel Ballesteros, John Bauer, Kepa Bengoetxea, Riyaz Ahmad Bhat, Eckhard Bick, Cristina Bosco, Gosse Bouma, Sam Bowman, Marie Candito, Gülşen Cebiroğlu Eryiğit, Giuseppe G. A. Celano, Fabricio Chalub, Jinho Choi, Çağrı Çöltekin, Miriam Connor, Elizabeth Davidson, Marie-Catherine de Marneffe, Valeria de Paiva, Arantza Diaz de Ilarraza, Kaja Dobrovoljc, Timothy Dozat, Kira Droganova, Puneet Dwivedi, Marhaba Eli, Tomaž Erjavec, Richárd Farkas, Jennifer Foster, Cláudia Freitas, Katarína Gajdošová, Daniel Galbraith, Marcos Garcia, Filip Ginter, Iakes Goenaga, Koldo Gojenola, Memduh Gökırmak, Yoav Goldberg, Xavier Gómez Guinovart, Berta Gonzáles Saavedra, Matias Grioni, Normunds Grūzītis, Bruno Guillaume, Nizar Habash, Jan Hajič, Linh Hà Mỹ, Dag Haug, Barbora Hladká, Petter Hohle, Radu Ion, Elena Irimia, Anders Johannsen, Fredrik Jørgensen, Hüner Kaşıkara, Hiroshi Kanayama, Jenna Kanerva, Natalia Kotsyba, Simon Krek, Veronika Laippala, Phng Lê Hồng, Alessandro Lenci, Nikola Ljubešić, Olga Lyashevskaya, Teresa Lynn, Aibek Makazhanov, Christopher Manning, Cătălina Mărănduc, David Mareček, Héctor Martínez Alonso, André Martins, Jan Mašek, Yuji Matsumoto, Ryan McDonald, Anna Missilä, Verginica Mititelu, Yusuke Miyao, Simonetta Montemagni, Amir More, Shunsuke Mori, Bohdan Moskalevskyi, Kadri Muischnek, Nina Mustafina, Kaili Müürisep, Lng Nguyễn Thị, Huyền Nguyễn Thị Minh, Vitaly Nikolaev, Hanna Nurmi, Stina Ojala, Petya Osenova, LiljaØvrelid, Elena Pascual, Marco Passarotti, Cenel-Augusto Perez, Guy Perrier, Slav Petrov, Jussi Piitulainen, Barbara Plank, Martin Popel, Lauma Pretkalnin, a, Prokopis Prokopidis, Tiina Puolakainen, Sampo Pyysalo, Alexandre Rademaker, Loganathan Ramasamy, Livy Real, Laura Rituma, Rudolf Rosa, Shadi Saleh, Manuela Sanguinetti, Baiba Saulīte, Sebastian Schuster, Djamé Seddah, Wolfgang Seeker, Mojgan Seraji, Lena Shakurova, Mo Shen, Dmitry Sichinava, Natalia Silveira, Maria Simi, Radu Simionescu, Katalin Simkó, Mária Šimková, Kiril Simov, Aaron Smith, Alane Suhr, Umut Sulubacak, Zsolt Szántó, Dima Taji, Takaaki Tanaka, Reut Tsarfaty, Francis Tyers, Sumire Uematsu, Larraitz Uria, Gertjan van Noord, Viktor Varga, Veronika Vincze, Jonathan North Washington, Zdeněk Žabokrtský, Amir Zeldes, Daniel Zeman, and Hanzhi Zhu. 2017. Universal dependencies 2.0. LINDAT/CLARIAH-CZ digital library at the Institute of Formal and Applied Linguistics (ÚFAL), Faculty of Mathematics and Physics, Charles University.

Gary F Simons and Charles D Fennig. 2018. Ethnologue: Languages of the world, twenty. Dallas: SIL International. Retrieved from www. ethnologue. com. Accessed, page 2018.

Jörg Tiedemann. 2012. Parallel data, tools and interfaces in OPUS. In Proceedings of the Eight International Conference on Language Resources and Evaluation (LREC'12), Istanbul, Turkey. European Language Resources Association (ELRA).
