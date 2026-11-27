> Machine translation (fr) of "Adapting Nine Traditional Text Readability Measures into Sesotho" by Johannes Sibeko, Menno van Zaanen, https://aclanthology.org/2024.rail-1.8/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Adaptation de neuf mesures traditionnelles de lisibilité de texte en Sesotho

Johannes Sibeko, Menno van Zaanen

**Affiliations**  
Johannes Sibeko, Menno van Zaanen  
Nelson Mandela University, South African Centre for Digital Language Resources  
University way, Summerstrand, Port Elizabeth, Internal Box 340, Private bag X6001, Potchefstroom  
, 

## Résumé

Cet article traite de l'adaptation des mesures de lisibilité anglaises traditionnelles à Sesotho, une langue autochtone d'Afrique australe à faibles ressources. Nous utilisons un corpus de lisibilité traduit pour extraire les caractéristiques textuelles des textes sesotho et les niveaux de lisibilité des traductions anglaises. Nous examinons la corrélation entre les différentes caractéristiques pour nous assurer que les caractéristiques non concurrentes sont utilisées dans les métriques de lisibilité. Ensuite, par des analyses de régression linéaire, nous examinons l'impact des caractéristiques textuelles des textes en sesotho sur les niveaux globaux de lisibilité (qui sont évalués à partir des traductions en anglais). En partant de la structure des mesures traditionnelles de lisibilité en anglais, les modèles de régression linéaire identifient les coefficients et les ordonnées à l'origine pour les différentes variables considérées dans les formules de lisibilité pour le sesotho. En fin de compte, nous proposons dix formules de lisibilité pour le sesotho (une de plus que les neuf initiales ; nous fournissons deux formules basées sur la structure de l'indice de brouillard de Gunning). Nous introduisons également des ordonnées à l'origine pour l'indice de brouillard de Gunning, l'indice de Läsbarhets et l'indice de lisibilité (qui n'ont pas d'ordonnées à l'origine dans les variantes anglaises) dans les formules en sesotho.

## Mots-clés

Lisibilité du texte, Sesotho, Langue à faibles ressources

## 1. Introduction

Les rapports de la Progress in International Reading Literacy Study (PIRLS) montrent des performances inférieures constantes chez les apprenants lisant dans les langues autochtones sud-africaines (Roux et al., 2021). Selon les normes de la PIRLS, les apprenants qui obtiennent moins de 400 points sur le benchmark ont du mal à extraire des informations fondamentales du texte, ce qui rend difficile pour eux de répondre même aux questions les plus simples. Malheureusement, au moins 81 % des apprenants dans les langues indigènes sud-africaines ont obtenu des résultats inférieurs au benchmark de 400 points (Roux et al., 2021). En conséquence, une telle performance entrave la réalisation d'une éducation de qualité inclusive et équitable dans essentiellement toutes les matières du lycée, car les apprenants ne peuvent pas accéder à l'information provenant de sources écrites. Des mesures doivent être prises pour relever ce défi de l'alphabétisation, comme le souligne le quatrième des dix-sept objectifs de développement durable des Nations Unies (ONU), qui met l'accent sur l'importance d'assurer une éducation de qualité inclusive et équitable et de promouvoir les possibilités d'apprentissage tout au long de la vie pour tous.

Une solution possible aux faibles niveaux d'alphabétisation est de s'assurer que les enfants apprennent à lire correctement, ce qui ne peut être atteint qu'en pratiquant la lecture (van Bergen et al., 2018). En d'autres mots, les apprenants doivent lire pour que leurs compétences en lecture s'améliorent. Une façon d'éveiller l'envie de lire est de fournir aux apprenants à la fois des opportunités de choisir des textes et du temps de lecture (Rasheed, 2023). Selon Rasheed (2023), les apprenants qui ont l'autonomie de choisir leurs supports de lecture ont tendance à mieux performer que ceux à qui on assigne des textes. Cependant, il est essentiel de noter qu'un mauvais choix de supports de lecture peut entraver le développement des compétences en lecture lorsque les textes ne sont pas bien adaptés au niveau de compétence du lecteur (Mohammed et al., 2023). En gardant cela à l'esprit, il devient évident que les parties prenantes de l'éducation ont besoin d'un outil pour évaluer la lisibilité des textes afin d'identifier les textes qui correspondent au niveau de compétence en lecture du lecteur. L'élaboration de mesures de lisibilité pour les différentes langues autochtones d'Afrique du Sud permettra de mesurer objectivement la lisibilité des textes.

Il convient de noter que les langues autochtones d’Afrique du Sud disposent de peu de ressources. En tant que tel, le choix des approches pour l'exploration de la lisibilité du texte est quelque peu limité. Ici, nous proposons l'utilisation de mesures traditionnelles de lisibilité qui se concentrent sur les propriétés superficielles du texte (Van Oosten et al., 2010; Zamanian et Heydari, 2012).

Malgré un intérêt de recherche de longue date pour l'évaluation de la lisibilité, les mesures traditionnelles de lisibilité n'ont pas été adaptées aux langues indigènes d'Afrique du Sud (Leopeng, 2019). Le manque de mesures de lisibilité du texte pour les langues autochtones sud-africaines jusqu’à présent a conduit à l’utilisation de mesures de lisibilité en anglais (non modifiées) pour les analyses de lisibilité dans les langues autochtones sud-africaines telles que isiZulu (Land, 2015), isiXhosa (Carel, 2019; Leopeng, 2019) et Sesotho (Krige et Reid, 2017; Reid et al., 2019). Récemment, Sibeko (2023) rapporte des tentatives pour développer des mesures de lisibilité du texte pour Sesotho. Leur article se concentre sur les ressources linguistiques de base pour le sesotho requises pour développer les mesures de lisibilité. Cependant, ils ne s'attaquent pas au développement réel de mesures de lisibilité.

Dans cet article, nous nous concentrons sur le développement de mesures de lisibilité pour Sesotho et pas toutes les douze langues officielles de l'Afrique du Sud. Bien qu'une approche similaire puisse être appliquée aux autres langues, la langue des signes, l'une des douze langues officielles, peut nécessiter une approche différente. Dans l'ensemble, nous abordons la question de recherche suivante :

Comment les mesures traditionnelles de lisibilité peuvent-elles être efficacement modifiées et adaptées aux caractéristiques spécifiques du sesotho?

Pour répondre à cette question, nous adaptons les mesures traditionnelles de lisibilité au sesotho en utilisant l'anglais comme langue ressource élevée pour le sesotho, langue à faible ressource. L'hypothèse sous-jacente est que les textes qui sont faciles à lire en sesotho seront également faciles à lire lorsqu'ils sont traduits en anglais et que les textes sesotho difficiles seront traduits en textes anglais difficiles. Tout d'abord, le contexte de cette investigation est présenté dans la section 2, puis la méthodologie est décrite dans la section 3, suivie de l'évaluation dans la section 4. Enfin, nous présentons notre discussion et nos conclusions dans la section 5.

## 2. Contexte

## 2.1. Un aperçu de Sesotho

Le sesotho est une langue parlée en Afrique australe. C'est l'une des deux langues officielles au Lesotho (Gouvernement du Lesotho, 1993), l'une des douze langues officielles en Afrique du Sud (République d'Afrique du Sud, 2023), et l'une des langues officielles marginalisées au Zimbabwe (Parlement du Zimbabwe, 2021). De plus, le sesotho est parlé en Zambie, en Namibie et au Botswana. Au moins plus de dix millions de personnes utilisent le sesotho au quotidien. Il est utilisé et enseigné dans les secteurs de l'enseignement de base et supérieur.

Le sesotho a au moins six dialectes reconnus, à savoir le Sekwena, le Sekgolokwe, le Serotse, le Setlokwa, le Sephuthi et le Setaung (Kula et Marten, 2008; Mohasi et Mashao, 2005; Nhlapo, 2021). Parmi ces dialectes, Sekwena a été promu et est ainsi devenu le standard d'écriture en Sesotho (Nakin, 2009; Sekere, 2004). De plus, il existe au moins deux orthographes officiellement reconnues pour le sesotho, à savoir, l'orthographe sud-africaine et l'orthographe lesothane (Makutoane, 2022; Setaka, 2018; Setaka et Prinsloo, 2020; Sibeko, 2022). La recherche décrite dans cet article est basée sur des textes qui sont écrits en utilisant l'orthographe sud-africaine du sesotho.

## 2.2 Mesures de lisibilité traditionnelles

Dans cet article, nous explorons neuf mesures traditionnelles de lisibilité en anglais pour une adaptation au sesotho. Ces mesures comprennent le Flesch-Kincaid Grade Level (FKGL) (Kincaid et al., 1975), le Flesch-Reading Ease (FRE) (Flesch, 1948, 1974), le Simple Measure of Gobbledygook (SMOG) (Mc Laughlin, 1969; Zhou et al., 2017) et le Gunning Fog Index (GFI) (Gunning, 1952, 1969), qui reposent sur des informations liées aux syllabes, ainsi que les mesures du Coleman-Liau index (CLI) (Coleman and Liau, 1975), de l'Automatic Readability index (ARI) (Kaur et al., 2018; Smith and Senter, 1967), du Readability index (RIX) et du Läsbarhets index (LIX) (Björnsson, 1968; Björnsson, 1983) qui sont basées sur des informations de longueur de mot. Enfin, nous explorons également l'index Dale-Chall (Dale et Chall, 1948) qui s'inspire d'une liste de mots couramment utilisés. Les formules de chacune de ces mesures, ainsi que le type de sortie, sont présentées dans le tableau 1.

L'approche générale des mesures basées sur les syllabes consiste à considérer le nombre de syllabes dans chaque mot et à traiter les résultats de manière spécifique à la mesure. Le FKGL et le FRE traitent les informations sur les syllabes en évaluant le nombre de syllabes par mot, tandis que les mesures SMOG et GFI excluent les mots "simples" de deux syllabes ou moins, se concentrant ainsi uniquement sur les mots de trois syllabes ou plus.

Étant donné que le nombre de syllabes dans les mots longs dépend de la langue, nous avons soupçonné que l'exigence anglaise de 3+ syllabes pourrait ne pas être indicative de mots longs mesurés par le nombre de syllabes par mot en sesotho. Par exemple, dans une étude similaire, Kusec et al. (2002) ont ajusté le nombre minimum de syllabes comptées de la langue d'aide anglaise à la langue à faible ressource, le croate. Ils ont comparé les 100 mots les plus fréquemment utilisés en anglais et en croate pour déterminer les différences entre les nombres de syllabes dans les deux langues afin de déterminer le nombre de syllabes typiques dans les mots longs en croate. En fin de compte, ils ont ajusté l'exigence pour les mots polysyllabiques à 4+ syllabes. Nous considérons à la fois les mots de 3+ et 4+ syllabes dans nos expériences.

En plus des informations sur les syllabes, la longueur des mots et la longueur des phrases sont également des caractéristiques communes utilisées dans les mesures, comme le montre le tableau 1. La longueur des mots orthographiques, c'est-à-dire la longueur des mots mesurée par le nombre de lettres par mot (Ziegler et al., 2001), a été un sujet d'intérêt dans les études langagières, les recherches indiquant des variations entre les langues et au fil du temps. Par exemple, Bochkarev et al. (2015) étudient l'évolution des longueurs de mots en anglais et en russe telles qu'observées à travers les bibliothèques électroniques, Google Books et Google Ngram Viewer. Leurs résultats indiquent une augmentation de la longueur moyenne des mots dans les deux langues, l'anglais passant de 4,4 lettres par mot en l'an 1700 à 4,6 en l'an 2000. De plus, ils notent que ces chiffres ont été rapportés différemment dans d'autres études où la longueur moyenne des mots en anglais était de 5,1 lettres par mot tandis que celle du russe était légèrement plus élevée à 5,28 lettres par mot (Bochkarev et al., 2015). Selon Hefer (2013), les mots en Sesotho sont en moyenne presque un caractère complet plus court qu'en anglais. Inversement, Loukatou (2019) indique une longueur moyenne de mot de 4,24 pour le sesotho et une moyenne plus basse de 3,02 lettres par mot pour l'anglais dans leur corpus de sur-segmentation.

p03-01.png

Tableau 1 : Mesures de lisibilité classiques sélectionnées (Flesch-Kincaid Grade Level (FKGL), Flesch-Reading Ease (FRE), Simple Measure of Gobbledygook (SMOG), Gunning Fog Index (GFI), Coleman-Liau index (CLI), Automatic Readability index (ARI), Readability index (RIX), Läsbarhets index (LIX), Dale-Chall index (DCI)), formules correspondantes et type de résultat.

## 3. Méthodologie

Selon De Clercq et al. (2014), il y a au moins trois étapes à décrire lors du développement de mesures de lisibilité. Ce sont (i) le développement d'un corpus de lisibilité, (ii) la description d'une méthodologie, et (iii) la réalisation des tâches de prédiction (François et Fairon, 2012; Collins-Thompson, 2014). Nous structurons la discussion de notre méthodologie pour adapter les mesures de lisibilité traditionnelles en sesotho en utilisant ces trois étapes ci-dessous.

## 3.1. Étape 1 : Un corpus de lisibilité

Dans le contexte des langues autochtones d'Afrique du Sud, y compris le sesotho, l'indisponibilité de corpus annotés avec des niveaux de lisibilité souligne la nécessité de développer de nouveaux corpus ou de réutiliser des corpus existants pour entraîner des mesures de lisibilité. Dans ce contexte, Sibeko et Van Zaanen (2021) suggèrent l'utilisation de textes d'examen pour la création de corpus de lisibilité pour les langues indigènes d'Afrique du Sud.

Pour notre étude, nous utilisons le corpus de lisibilité des traductions sesotho-anglais de Sibeko (2024). Ce corpus comprend des traductions parallèles au niveau du document de 80 textes de compréhension de lecture et de rédaction de résumés en sesotho, issus du corpus d'examen de niveau 12 (Sibeko et Van Zaanen, 2023). Pour les textes produits après 2011, les traductions anglaises sont essentiellement des rétrotraductions, car les textes ont été initialement traduits de l'anglais vers le sesotho à des fins d'examen. Notons que les textes d'examen en sesotho indiquent que la source originale est en anglais, mais ils n'indiquent pas exactement où les textes anglais peuvent être trouvés (d'où l'application du processus de rétrotraduction).

Le corpus comprend 13 793 mots, composé de 6 040 types, avec une longueur de phrase moyenne de 17,73 mots en sesotho. De plus, les traductions en anglais incluent 12 005 mots avec 6 130 types, présentant une longueur moyenne de phrase de 15,75 mots. Les textes d’examen couvrent la période allant de 2009 à 2019.

## 3.2 Étape 2: Une méthodologie

La méthodologie globale consiste en trois étapes. Tout d'abord, nous extrayons des caractéristiques de texte pertinentes à partir de textes Sesotho. Deuxièmement, nous utilisons les traductions anglaises qui correspondent aux textes sesotho pour déterminer les niveaux de lisibilité des textes en utilisant les mesures de lisibilité traditionnelles. Avec cette approche, nous suivons El-Haj et Rayson (2016) qui montrent que la lisibilité des textes dans une langue mieux dotée peut être utilisée comme banc d'essai pour l'estimation de la lisibilité des textes dans une langue peu dotée. De même, nous alignons la distribution des niveaux de lisibilité en sesotho avec ceux observés dans les traductions anglaises. Troisièmement, nous utilisons des modèles de régression linéaire pour déterminer l'impact des caractéristiques textuelles des textes en Sesotho sur les scores globaux des différentes mesures de lisibilité calculées sur les traductions en anglais.

Pour fournir un aperçu supplémentaire de l'impact des différentes caractéristiques du texte, nous examinons les caractéristiques du texte utilisées dans les mesures de lisibilité traditionnelles. La brève discussion qui suit présente certaines des caractéristiques textuelles considérées dans cet article.

## 3.2.1. Longueur des mots par lettres

Il y a deux principales préoccupations concernant les longueurs moyennes des mots en sesotho. D'une part, en tant que langue agglutinante, on peut s'attendre à ce que les mots soient relativement longs en sesotho (Blanchard, 2011). D'autre part, les mots monosyllabiques qui peuvent comprendre entre une et quatre lettres (et surtout les mots d'une seule lettre) peuvent entraîner des moyennes plus courtes pour les textes en sesotho (Messerschmidt et al., 2003). De plus, la longueur globale des mots dans le texte, en nombre de lettres, peut être affectée par l'utilisation des accords du sujet en sesotho. Dans notre ensemble de données, les mots anglais présentent une moyenne de 4,34 lettres par mot, tandis que les mots sesotho démontrent une moyenne de 4,07 lettres par mot. Néanmoins, étant donné que la longueur moyenne des mots en sesotho est relativement similaire à celle de l'anglais, nous suivons la directive anglaise pour les mesures LIX et RIX et considérons donc les mots de plus de six lettres comme des mots longs.

## 3.2.2. Longueur des mots en syllabes

Les mots polysyllabiques se réfèrent à des mots avec plus d'une syllabe. Cependant, les mesures traditionnelles utilisées dans cette recherche, en particulier les mesures SMOG et GFI, ne considèrent que les mots avec trois syllabes ou plus comme polysyllabiques, brumeux et complexes. Dans notre ensemble de données, les mots anglais présentent une moyenne de 1,26 syllabes par mot, tandis que les textes sesotho démontrent 2,0 syllabes par mot. Les mots sesotho tendent à avoir plus de syllabes que les mots anglais. Ainsi, bien que nous définissions les mots polysyllabiques (tels qu'utilisés dans les différentes métriques) comme des mots avec trois syllabes ou plus, nous étudions également la possibilité d'augmenter le nombre minimum de syllabes dans les mots polysyllabiques à des mots avec quatre syllabes.

## 3.2.3. Mots communs

La mesure DCI repose sur l'hypothèse qu'il existe des mots couramment utilisés et qui devraient donc être faciles à lire. Selon cette méthode, les mots qui n'apparaissent pas sur la liste des mots fréquemment utilisés sont considérés comme difficiles. Pour notre expérience, nous utilisons la liste des mots courants en sesotho compilée par Sibeko et De Clercq (2023). Nous devons utiliser cette liste avec prudence, cependant, puisqu'elle n'a pas été dérivée de textes éducatifs. Malheureusement, nous ne connaissons pas d'autres listes de mots disponibles pour une utilisation dans ce contexte.

## 3.2.4. Échantillons

Certaines formules, comme les mesures DCI et CLI, nécessitent l'échantillonnage de petites quantités de texte. Comme les textes dans ces expériences sont relativement courts, nous renonçons aux étapes d'échantillonnage. De cette façon, par exemple, le nombre de phrases dans la formule CLI se réfère à toutes les phrases du texte au lieu d'un petit ensemble de phrases échantillonnées. Comme on peut l'observer dans le Tableau 1, la formule CLI se concentre uniquement sur les longueurs de mots comptées en lettres, et les phrases dans l'ensemble du texte (pour les formules en anglais et en sesotho).

## 3.3. Étape 3 : Tâches de prédiction

## 3.3.1. Corrélations

Avant de développer des mesures de lisibilité de texte pour le sesotho, nous étudions d'abord les interrelations entre les différentes caractéristiques textuelles qui sous-tendent les mesures de lisibilité. Cette exploration donne un aperçu de la nature des caractéristiques du texte Sesotho.

L'exploration des interrelations entre les caractéristiques textuelles utilisées dans les formules traditionnelles de lisibilité a été calculée à l'aide de la mesure de corrélation de Pearson. Les résultats de ces corrélations sont présentés dans le tableau 2. Notez que les étiquettes V1-16 sont utilisées pour représenter les caractéristiques dans les colonnes 1 à 16. Notamment, toutes les corrélations sont significatives avec p < .05.

L'examen des caractéristiques du texte de Sesotho par l'analyse de corrélation révèle des résultats intéressants. Par exemple, des alignements parfaits sont découverts entre les comptes de mots et de syllabes, ainsi qu'entre les comptes de syllabes et de lettres. Cela suggère une relation cohérente et prévisible entre ces caractéristiques en ce sens que plus de syllabes se traduiront par des mots plus longs. En outre, de fortes corrélations positives émergent, mettant en évidence l'association entre les syllabes par mot et la fréquence des mots polysyllabiques, tandis que les corrélations négatives indiquent qu'une augmentation du nombre de lettres par mot peut entraîner moins de phrases, de mots et de mots longs.

Nous avons également étudié les corrélations entre les formules basées sur les syllabes et les caractéristiques textuelles liées aux syllabes. Les résultats du tableau 3 révèlent de faibles corrélations négatives entre le nombre de syllabes et les scores de l'indice FKGL, du GFI et de l'indice SMOG. Cette observation suggère que les nombres de syllabes en Sesotho s'alignent avec ceux en anglais, ce qui indique que les textes avec des nombres de syllabes plus élevés sont susceptibles d'être plus difficiles à lire.

Comme mentionné précédemment, nous avons également envisagé de modifier les critères de définition des mots polysyllabiques en explorant une augmentation potentielle de trois à un minimum de quatre syllabes (4+ syllabes). Nos résultats révèlent que le maintien d'un minimum de trois syllabes démontre systématiquement des corrélations plus fortes avec les scores de lisibilité par rapport à un minimum de quatre syllabes. Par conséquent, pour le sesotho, nous considérons également uniquement les 3+ syllabes comme dans les formules anglaises originales.

p05-01.png

Tableau 2 : La corrélation des caractéristiques textuelles utilisées dans les mesures de lisibilité calculées à partir des textes en Sesotho.

## 3.3.2. Modèles de régression linéaire

Enfin, nous créons des modèles de régression linéaire en utilisant la fonction de modèle de régression linéaire 'lm' dans R pour déterminer les coefficients des différentes caractéristiques textuelles en utilisant nos données d'apprentissage Sesotho et les niveaux de lisibilité calculés sur les textes anglais. Les structures des modèles de régression linéaire en Sesotho imitent celles des mesures de lisibilité en anglais. De cette façon, nous essayons de nous assurer que les valeurs de lisibilité calculées à l'aide d'une mesure de lisibilité particulière sont utilisées pour créer une mesure de lisibilité Sesotho qui utilise une structure similaire et les mêmes caractéristiques textuelles que la mesure anglaise.

Nous avons ensuite créé des modèles de régression linéaire pour les différentes mesures. Les formules sont présentées dans le tableau 4. Nos formules de lisibilité proposées pour le sesotho maintiennent un degré de préservation structurelle pour les formules DCI, CLI, SMOG, FRE et FKGL. Notez qu'une version plus simplifiée de la formule CLI utiliserait les comptes réels et non les pourcentages et donnerait CLI<sub>Sesotho</sub> = -3.683470 + 3.8782( #lettres #mots ) - 72.7569( #phrases #mots ).

Lors de la comparaison des poids des formules Sesotho avec ceux des formules anglaises, nous observons plusieurs choses. Tout d'abord, il y a une réduction des coefficients de syllabes par mot dans les formules Sesotho par rapport aux formules anglaises. Par exemple, cela se manifeste par une pondération accrue et négative des syllabes par mot dans la formule FRE du sesotho.

Deuxièmement, nous proposons deux structures pour la formule GFI. Les deux versions introduisent une ordonnée à l'origine pour la formule, impliquant une déduction de 0,177916, ce qui est différent de la formulation originale. La première formule proposée, GF I(1)Sesotho, suit plus étroitement la structure de la formule originale anglaise, bien qu'une ordonnée à l'origine soit ajoutée. La deuxième formule, GF I(1)Sesotho, introduit un coefficient au pourcentage de mots complexes, s'écartant ainsi de la structure originale.

Les formules anglaises LIX et RIX n'incluent pas de pondérations. Pour aligner les valeurs de lisibilité acquises par l'application de mesures de lisibilité en anglais sur les textes d'examen traduits, avec les caractéristiques du texte observées dans les textes Sesotho, il était nécessaire d'introduire des facteurs de pondération. Cet ajustement a assuré une correspondance plus précise entre les valeurs de lisibilité et les formules adaptées. Pour le LIX, l’impact des mots par phrase est pris en compte, tandis que le pourcentage de mots longs reste inchangé. Cependant, dans la formule du RIX, nous attribuons un poids à la fraction de mots longs par phrase. Notez que nous introduisons également des ordonnées à l'origine pour le LIX<sub>Sesotho</sub> et le RIX<sub>Sesotho</sub>.

p06-01.png

Tableau 3 : La corrélation des mesures basées sur les syllabes et des informations sur les syllabes calculées sur les textes en Sesotho.

p06-02.png

Tableau 4 : Mesures de lisibilité et formules Sesotho adaptées correspondantes.

En outre, une diminution notable du poids attribué aux phrases par mot est évidente dans la version Sesotho de la CLI, en contraste avec son homologue anglais. De même, l'ordonnée à l'origine du CLI<sub>Sesotho</sub> est sensiblement plus basse que celle de la variante anglaise. De même, un contraste est perceptible dans l'ordonnée à l'origine de la formule ARI<sub>Sesotho</sub>. Malgré le coefficient cohérent des mots par phrase, l'ARI Sesotho implique une pondération réduite des lettres par mot.

Enfin, le coefficient des mots difficiles apparaît un peu plus faible dans la formule CLI sesotho, par opposition à la formule anglaise. Inversement, la formule CLI du sesotho attribue un coefficient plus élevé pour les mots par phrase.

## 4. Évaluation

La sortie du résumé de la régression linéaire fournit cinq statistiques pour évaluer les performances de chaque modèle et la signification de leurs coefficients. Nous considérons le R-carré ajusté, la statistique F et l'erreur type résiduelle. Le résultat des évaluations est présenté dans le Tableau 5.

p07-01.png

Tableau 5 : Évaluations des modèles de régression linéaire adaptés pour le Sesotho. Notez que les valeurs p sont toutes significatives à p < .001.

Tout d'abord, la statistique F est un indicateur de la validité globale des modèles. Elle met en évidence sa signification statistique dans tous les modèles, comme le montrent les valeurs p observées (p < .001). Cette affirmation témoigne de la contribution composite des attributs prédicteurs dans l'élucidation de la variation de la lisibilité du texte, prouvant ainsi que les résultats sont très peu susceptibles d'être le fruit du hasard.

Deuxièmement, la métrique R-carré ajusté indique dans quelle mesure les variables indépendantes décrivent la variance des données. Notre analyse révèle des valeurs plus élevées particulièrement pour l'ARI<sub>Sesotho</sub>, signifiant que les variables des lettres par mot et des phrases par mot représentent environ 91 % de la capacité prédictive associée aux scores ARI. Cependant, des résultats contrastés sont observés pour la formule SMOG, où le nombre de mots polysyllabiques ne représente que 59,16% de l'influence prédictive globale. Cette variation met en lumière les différents degrés de contribution des caractéristiques prédictives à travers les modèles formulés.

Enfin, les erreurs-types résiduelles inférieures décrivent l'écart-type des valeurs résiduelles, où des valeurs inférieures indiquent de meilleurs résultats.

## 5. Discussion et conclusions

Le raisonnement sous-jacent de cette recherche est l'absence d'une méthode objective pour identifier les niveaux de lisibilité des textes dans Sesotho. Nous postulons que les niveaux de littératie déjà faibles dans les langues indigènes d'Afrique du Sud, y compris le sesotho, pourraient potentiellement être aggravés par la sélection inappropriée de matériaux textuels, surtout compte tenu du faible nombre de textes disponibles dans les langues indigènes. Nous prévoyons que la capacité à évaluer le degré de lisibilité des textes dans la langue aidera à la fois les apprenants et les enseignants à identifier des supports de lecture de niveau approprié. À son tour, l'utilisation d'un cadre objectif d'évaluation de la lisibilité améliorera l'accès à un enseignement de qualité (lecture et donc général) à Sesotho. Cependant, nous reconnaissons que les limitations précédemment attribuées aux mesures de lisibilité traditionnelles restent applicables, même dans le contexte de nos adaptations proposées.

Étant donné que le sesotho, comme la plupart des autres langues indigènes d'Afrique australe, est une langue peu dotée en ressources, aucun corpus étiqueté de manière appropriée en termes de lisibilité n'existe. Pour résoudre ce problème, les textes éducatifs écrits à l'origine en Sesotho ont été traduits en anglais. Les traductions anglaises ont ensuite constitué la source de l'évaluation de la lisibilité, car des mesures traditionnelles de lisibilité anglaise peuvent être appliquées. Compte tenu des caractéristiques textuelles extraites du texte Sesotho, combinées avec les valeurs de lisibilité en anglais, des modèles de régression linéaire peuvent être créés. La structure des modèles de régression linéaire (p. ex., les caractéristiques textuelles et la façon dont elles s'intègrent dans la formule) est tirée des mesures correspondantes en anglais qui ont été utilisées pour calculer les valeurs de lisibilité.

Parmi les formules de lisibilité adaptées dans cet article, six dépendent de la variable longueur de phrase. Les formules Sesotho adaptées attribuent systématiquement un poids plus important à la longueur de phrase en comparaison avec les formules anglaises originales que nous avons adaptées au Sesotho. Notez que, malgré cette emphase, aucune forte corrélation n'émerge entre la longueur de phrase et les autres variables considérées dans les formules axées sur la longueur de phrase. Néanmoins, l'analyse des coefficients de la formule CLI met en évidence l'impact d'une forte corrélation négative entre les phrases par mot et les mots par phrase. Cette observation accentue le fait que, bien que la longueur de phrase se voie attribuer des coefficients plus élevés dans de nombreuses formules sesotho, la variable phrases par mot reçoit un poids sensiblement plus faible dans la formule CLI<sub>Sesotho</sub>, soulignant ainsi la prépondérance de la caractéristique longueur de phrase dans la détermination de la lisibilité des textes sesotho. Il est cependant également important de noter que ces caractéristiques sont inverses les unes des autres. Par conséquent, on s’attend à ce qu’ils affectent les niveaux de lisibilité de façons contrastées.

De plus, un examen de la corrélation entre la longueur des phrases et la longueur des mots en termes de comptage de syllabes révèle une association négative modeste. Cela suggère qu'à mesure que la longueur de la phrase s'étend, les syllabes par mot présentent une légère réduction. En substance, une augmentation de la longueur de la phrase correspond à une diminution marginale des syllabes et des lettres par mot, en raison de la corrélation négative prédominante avec les lettres par mot. Cette observation accentue la longueur des phrases comme un prédicteur dominant de la lisibilité du texte en sesotho.

Au mieux de nos connaissances, les résultats de cet article présentent les premières formules pour une langue indigène d’Afrique du Sud et les premières pour le groupe linguistique Sotho-Tswana en Afrique australe.

Bien que nos modèles soient entraînés sur des textes éducatifs, spécifiquement des textes de compréhension de lecture et de rédaction de résumés, la disponibilité de formules de lisibilité standardisées et objectives offre un point de départ solide pour employer des approches d'apprentissage automatique afin de mesurer la lisibilité des textes en Sesotho. En outre, les méthodes décrites dans cet article peuvent être utilisées dans le développement de mesures de lisibilité pour d'autres langues à faibles ressources.

## 5.1. Limites

Notre approche dans cet article est limitée par la dépendance aux textes écrits et aux mesures de lisibilité existantes qui n'ont pas été initialement développées pour le sesotho. Tout d'abord, nous faisons l'hypothèse que les textes traduits ont une lisibilité similaire. Les textes sont traduits automatiquement et corrigés manuellement pour garantir des textes en anglais aussi similaires que possible par rapport aux textes en sesotho. Une solution possible serait de développer une collection de textes spécifiquement ciblée sur les mesures de lisibilité basées sur les textes en sesotho (uniquement). Étant donné que peu de textes sont disponibles publiquement en sesotho, cela restera un défi.

Deuxièmement, pour assurer l'utilisabilité pratique des mesures, un examen empirique impliquant des participants humains devrait être entrepris. Une telle évaluation consisterait à sélectionner et à classer des textes en utilisant nos formules proposées, puis à administrer ces textes aux apprenants des niveaux de classe indiqués par nos formules. Cette approche est cruciale pour évaluer l'impact sociétal de nos formules. Cependant, il présente également un défi dans la nécessité de critères bien définis pour distinguer le succès ou l'échec des tests de lecture qui seraient administrés aux participants pour l'évaluation des niveaux de lisibilité suggérés par nos formules pour Sesotho.

Enfin, pour mesurer correctement l'impact des métriques de lisibilité par l'efficacité de la sélection de textes appropriés, des critères pour identifier le "succès" dans la lecture de textes en sesotho devront être développés. Cette étape est importante dans le contexte du sesotho (et des autres langues indigènes d'Afrique du Sud), en particulier compte tenu des défis prévalents que les apprenants sud-africains rencontrent généralement en lecture.

## 5.2. Études futures

Les résultats discutés dans cette section révèlent un certain nombre de pistes pour des études futures possibles. Tout d'abord, une investigation plus approfondie des caractéristiques utilisées peut fournir des métriques plus adaptées pour le Sesotho. Par exemple, le nombre optimal de lettres par mot qui correspondent aux longs mots Sesotho reste une piste intrigante. Cela implique d'examiner les corrélations entre différents nombres de lettres par mot et les scores résultants afin de déterminer le nombre de lettres le plus fortement corrélé positivement aux niveaux de lisibilité pour définir les mots longs en sesotho. Dans cet article, nous utilisons la définition anglaise pour les mots longs.

Deuxièmement, l'utilisation des niveaux scolaires existants, bien que non testée dans le contexte de l'éducation sud-africaine, souligne une voie pour la recherche future. Les recherches futures devraient examiner l'applicabilité de l'indice FRE, CLI, LIX et d'autres indicateurs aux niveaux de classe sud-africains afin d'affiner la pertinence contextuelle de ces mesures. Actuellement, nous nous appuyons sur l'adaptation existante des scores de lisibilité pour les mesures FRE, LIX et RIX dans le contexte sud-africain, basée sur les travaux de Bargate (2012) et de Leopeng (2019). Peut-être que les travaux futurs peuvent envisager de recalibrer ces scores aux grades sud-africains grâce à des méthodes d'évaluation basées sur l'homme.

Enfin, les métriques ne sont pas développées isolément. L'utilisation pratique des métriques devra être étudiée dans un contexte éducatif approprié. Les métriques permettent-elles réellement d'identifier des textes adaptés pour un apprenant ? Peut-on compter sur les enseignants pour évaluer cela ou avons-nous besoin d'autres méthodologies d'évaluation ? Bien sûr, en outre, nous devrons étudier comment les lecteurs perçoivent les résultats des métriques de lisibilité. En fin de compte, nous espérons que cette recherche aide à améliorer les compétences en lecture des apprenants en Afrique du Sud, ce que nous espérons voir dans les futurs résultats de PIRLS.

## Notes

1 Le ratio du nombre de phrases au nombre de mots

## 6. Références bibliographiques

Karen Bargate. 2012. The readability of managerial accounting and financial management textbooks. Meditari Accountancy Research, 20(1):4-20.

Carl-Hugo Björnsson. 1968. Läsbarhet. Bokförlaget Liber, Stockholm, Sweden.

Carl-Hugo Björnsson. 1983. Readability of newspapers in 11 languages. Reading Research Quarterly, pages 480-497.

Daniel Blanchard. 2011. Unsupervised word segmentation: An investigation of sub-word features. Online on github. https://dan-blanchard.github.io/papers/proposal.pdf.

Vladimir V Bochkarev, Anna V Shevlyakova, and Valery D Solovyev. 2015. The average word length dynamics as an indicator of cultural changes in society. Social Evolution and History, 14(2):153-175.

David Carel. 2019. 4 ways to stay safe online-developing a text difficulty indicator for isiXhosa early grades. In Policy Commons. Research on Socio-Economic Policy. Available at: https://policycommons.net/artifacts/2105074/ 4-ways-to-stay-safe-online/ 2860372/.

Meri Coleman and Ta Lin Liau. 1975. A computer readability formula designed for machine scoring. Journal of Applied Psychology, 60(2):283.

Kevyn Collins-Thompson. 2014. Computational assessment of text readability: A survey of current and future research. ITL-International Journal of Applied Linguistics, 165(2):97-135.

Edward Dale and J S Chall. 1948. A formula for predicting readability: Instructions. Educational research bulletin, pages 37-54.

Orphée De Clercq, Véronique Hoste, Bart Desmet, Philip Van Oosten, Martine De Cock, and Lieve Macken. 2014. Using the crowd for readability prediction. Natural Language Engineering, 20(3):293-325.

Mahmoud El-Haj and Paul Rayson. 2016. Osman: A novel Arabic readability metric. Procedia Computer Science, 142:38-49.

Rudolph Flesch. 1948. A new readability yardstick. Journal of applied psychology, 32(3):221-233.

Rudolph Flesch. 1974. The art of readable writing, 2nd edition. Harper, New York.

Thomas François and Cedrick Fairon. 2012. An "AI readability" formula for French as a foreign language. In Proceedings of the 2012 Joint Conference on Empirical Methods in Natural Language Processing and Computational Natural Language Learning, pages 466-477, New Brunswick, New Jersey, USA. Association for Computational Linguistics.

Government of Lesotho. 1993. The Constitution of Lesotho. Government Printer, Maseru.

Robert Gunning. 1952. The technique of clear writing. McGraw-Hill: New York.

Robert Gunning. 1969. The fog index after twenty years. Journal of Business Communication, 6(2):3-13.

Esté Hefer. 2013. Reading first and second language subtitles: Sesotho viewers reading in Sesotho and English. Southern African Linguistics and Applied Language Studies, 31(3):359-373.

Sukhpuneet Kaur, Kulwant Kaur, and Parminder Kaur. 2018. The influence of text statistics and readability indices on measuring university websites. International Journal of Advanced Research in Computer Science, 9(1):403-414.

Peter Kincaid, Robert P Fishburne Jr, Richard L Rogers, and Brad S Chissom. 1975. Derivation of new readability formulas (automated readability index, fog count and Flesch Reading Ease formula) for navy enlisted personnel. Report, Defense Technical Information Center.

Daleen Krige and Marianne Reid. 2017. A pilot investigation into the readability of Sesotho health information pamphlets. Communitas, 22:113-123.

Nancy C Kula and Lutz Marten. 2008. Central, east and southern african languages. In Peter Austin, editor, One Thousand Languages, pages 86-111. Ivy Press/University of California Press.

Sanja Kusec, Miroslav Mastilica, Gordana Pavlekovic, and Luka Kovacic. 2002. Readability of patient information on diabetes on the Croatian Web sites. In Health Data in the Information Society, Netherlands, pages 128-132. IOS Press, Amsterdam.

Sandra Land. 2015. Reading and the orthography of isiZulu. South African Journal of African Languages, 35(2):163-175.

Makiti Thelma Leopeng. 2019. Translations of informed consent documents for clinical trials in South Africa: Are they readable? Thesis, University of Cape Town.

Georgia Loukatou. 2019. From phonemes to morphemes: Relating linguistic complexity to unsupervised word over-segmentation. In Proceedings of TyP-NLP: The First Workshop on Typology for Polyglot NLP, Florence, Italy, New Jersey, USA. Association of Computational Linguistics.

Tshokolo J Makutoane. 2022. 'The people divided by a common language': The orthography of Sesotho in Lesotho, South Africa, and the implications for Bible translation. HTS Teologiese Studies/Theological Studies, 78(1):9.

Harry Mc Laughlin. 1969. SMOG grading-a new readability formula. Journal of reading, 12(8):639-646.

Hans Messerschmidt, JJE Messerschmidt, and DP Thulo. 2003. A human-assisted computer generated LA-grammar for simple sentences in Southern Sotho. Southern African Linguistics and Applied Language Studies, 21(1-2):41-47.

Lubna Ali Mohammed, Musheer Abdulwahid Aljaberi, Antony Sheela Anmary, and Mohammed Abdulkhaleq. 2023. Analysing English for science and technology reading texts using Flesch Reading Ease online formula: the preparation for academic reading. In International Conference on Emerging Technologies and Intelligent Systems, pages 546-561, New York. Springer.

Lehlohonolo Mohasi and Daniel Mashao. 2005. Phonetization for text-to-speech synthesis in Sesotho. In The sixteenth annual symposium of the Pattern Recognition Association of South Africa, pages 121-122, Langebaan, South Africa. Citeseer.

Rosalia Moroesi Nakin. 2009. An examination of language planning and policy in the Eastern Cape with specific reference to Sesotho: A socioliguistic study. Ph.D. thesis, Nelson Mandela Metropolitan University, South Africa.

Moselane Andrew Nhlapo. 2021. Historical perspectives on the development of Sesotho linguistics with reference to syntactic categories. Ph.D. thesis, University of the Free State, South Africa.

Parliament of Zimbabwe. 2021. The Constitution of Zimbabwe. Veritas, Harare.

Michelle Rasheed. 2023. Kindling a desire to read: A review of three young adult novels. South Carolina Association for Middle Level Education Journal, 2(1):109-113.

Marianne Reid, Mariette Nel, and Ega Janse Van Rensburg-Bonthuyzen. 2019. Development of a Sesotho health literacy test in a South African context. African journal of primary health care & family medicine, 11(1):1-13.

Republic of South Africa. 2023. Constitution eighteenth amendment bill. Department of Justice and Correctional Services, Pretoria.

Karen Roux, S van Staden, and M Tshele. 2021. Progress in International Reading Literacy Study 2021: South African Preliminary Highlights Report. Department of Basic Education, Pretoria, South Africa.

Ntaoleng Belina Sekere. 2004. Sociolinguistic variation in spoken and written Sesotho: A case study of speech varieties in Qwaqwa. Thesis, University of South Africa.

Mmasibidi Setaka. 2018. Corpus-based Lexicography for Sesotho. Ph.D. thesis, University of Pretoria, South Africa.

Mmasibidi Setaka and Danie J Prinsloo. 2020. A critical evaluation of three sesotho dictionaries. Lexikos, 30:445-469.

Johannes Sibeko. 2022. Tshebediso ya melao kabong ya dinoko tsa Sesotho. Southern African Linguistics and Applied Language Studies, 40(4):494-506.

Johannes Sibeko. 2023. Using classical readability formulas to measure text readability in Sesotho. In Tomaž Erjavec and Maria Eskevich, editors, Selected papers from the CLARIN Annual Conference 2022, volume 198, pages 120--132. Linköping Electronic Conference Proceedings, Prague, Czechia.

Johannes Sibeko. 2024. Harnessing google translations to develop a readability corpus for sesotho: An exploratory study. Journal of the Digital Humanities Association of Southern Africa, 5:1-12.

Johannes Sibeko and Orphée De Clercq. 2023. A corpus-based list of frequently used words in Sesotho. In Proceedings of the Fourth workshop on Resources for African Indigenous Language (RAIL 2023), Dubrovnik, Croatia, pages 32-41, New Brunswick, New Jersey, USA. Association for Computational Linguistics.

Johannes Sibeko and Menno Van Zaanen. 2021. An analysis of readability metrics on English exam texts. Journal of the Digital Humanities Association of Southern Africa, 3(1):1-11.

Johannes Sibeko and Menno Van Zaanen. 2023. A data set of final year high school examination texts of South African home and first additional language subjects. Journal of Open Humanities Data, 9(9):1-6.

Edgar A Smith and R.J Senter. 1967. Automated readability index. Clearing house for Federal Scientific and Technical information, Cincinnati, Ohio.

Elsje van Bergen, Margaret J Snowling, Eveline L de Zeeuw, Catharina EM van Beijsterveldt, Conor V Dolan, and Dorret I Boomsma. 2018. Why do children read more? the influence of reading ability on voluntary reading practices. Journal of Child Psychology and Psychiatry, 59(11):1205-1214.

Phillip Van Oosten, Dries Tanghe, and Véronique Hoste. 2010. Towards an improved methodology for automated readability prediction. In Proceedings of the 7th Conference on International Language Resources and Evaluation (LREC 2010), Valletta, Malta, pages 775-782, Paris. European Language Resources Association (ELRA).

Mostafa Zamanian and Pooneh Heydari. 2012. Readability of texts: State of the art. Theory and Practice in Language Studies, 2(1):43-53.

Shixiang Zhou, Heejin Jeong, and Paul A Green. 2017. How consistent are the best-known readability equations in estimating the readability of design standards? IEEE Transactions on Professional Communication, 6:97-111.

Johannes C Ziegler, Conrad Perry, Arthur M Jacobs, and Mario Braun. 2001. Identical words are read differently in different languages. Psychological science, 12(5):379-384.
