> Machine translation (fr) of "A Corpus-Based List of Frequently Used Words in Sesotho" by Johannes Sibeko, Orphée De Clercq, https://aclanthology.org/2023.rail-1.5/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Une liste de mots fréquemment utilisés en sesotho basée sur un corpus

Johannes Sibeko, Orphée De Clercq

**Affiliations**  
Johannes Sibeko  
Orphée de Clercq  
Nelson Mandela University  
LT3, Ghent University  
Port Elizabeth, South Africa  
Ghent, Belgium  
  


## Résumé

Cet article décrit le développement d'une liste de mots fréquemment utilisés en sesotho écrit. La liste a été créée dans le but de l'intégrer dans des métriques de lisibilité de texte basées sur la fréquence. La liste a été établie à l'aide d'une approche fondée sur le corpus. En exploitant trois corpus existants de sesotho, des listes de fréquence ont pu être dérivées, qui ont ensuite été fusionnées et analysées qualitativement et affinées par un locuteur expérimenté de sesotho. Les principaux défis dans la compilation de la liste comprenaient la conciliation des variations d'orthographe, le traitement des abréviations et la présence de mots inattendus dans les listes préliminaires. La liste finale comprend 3037 entrées et est rendue publiquement accessible à la communauté de la recherche.

## 1 Introduction

Les apprenants sud-africains ont des difficultés en compréhension de lecture même lorsqu'ils lisent dans leurs langues maternelles (Pretorius et al., 2020). Par conséquent, ils obtiennent de piètres résultats sur les problèmes impliquant le langage (Van der Walt et coll., 2008). Cela est particulièrement prononcé chez les apprenants bilingues et multilingues puisqu'ils développent la littératie simultanément dans deux langues (Cockcroft, 2016; Wilsenach et Schaefer, 2022). De tels apprenants obtiennent de moins bons résultats que les apprenants monolingues qui reçoivent une exposition approfondie à une seule langue (Cockcroft, 2016). Ce défi lié aux exigences de vocabulaire et de langue s'accroît lorsque les apprenants sud-africains ayant une langue autochtone comme langue maternelle passent de la troisième à la quatrième année d'éducation et que la langue d'enseignement passe des langues autochtones à l'anglais ou à l'afrikaans (Sibanda et Baxen, 2016).

Selon Stoffelsma (2019b,a), 78 % des élèves de quatrième année sud-africains n'ont pas réussi à extraire le sens des textes. Malheureusement, le fait de ne pas pouvoir extraire du sens des textes expose les apprenants au risque de ne pas pouvoir lire, car leur manque de vocabulaire affecte leur capacité à lire des textes avec une fluidité souhaitable (Pretorius et Stoffelsma, 2017; Stoffelsma, 2019a).

Malheureusement, l'incapacité des apprenants à lire avec le niveau de fluidité attendu et leur incapacité à extraire le sens des textes rend difficile pour les enseignants et les évaluateurs de choisir des passages à lire. Des interventions en lecture pour aider les apprenants ayant des capacités de lecture moins que souhaitées sont nécessaires dans la plupart des cours de langue. Malheureusement, les enseignants ne sont pas toujours bien formés pour enseigner la lecture et surveiller les interventions en lecture (Pretorius et al., 2020). De plus, le niveau de maîtrise des enseignants ne permet pas toujours des interventions réussies (Batinić et al., 2016). Pour obtenir des taux de réussite plus élevés, il pourrait être nécessaire d'utiliser des textes destinés à des apprenants ayant moins d'années de scolarité. Cela est particulièrement défavorable pour la recherche sur le développement de métriques de lecture pour les langues indigènes d'Afrique du Sud.

Des estimations cohérentes des niveaux de lisibilité sont essentielles dans les contextes éducatifs où les instructeurs et les examinateurs doivent identifier et assigner des textes à des lecteurs ayant des niveaux de scolarité spécifiques. Une telle cohérence dans l'attribution des estimations de lisibilité empêche les cas où les apprenants dans les classes supérieures sont assignés des textes qui sont plus faciles à lire que ceux qui sont assignés aux apprenants dans les classes inférieures. Sans mesures de lisibilité, les auteurs, les éditeurs et les lecteurs ne peuvent pas toujours estimer les niveaux de lisibilité avec précision ou de manière cohérente (Humphreys et Humphreys, 2013).

Malheureusement, autant que nous le sachions, il n'existe pas de métriques de lisibilité pour le sesotho. Une solution à cela peut être le développement de formules de lisibilité classiques. Les métriques de lisibilité classiques utilisent des formules mathématiques pour estimer le niveau d'éducation ou le niveau scolaire qu'un lecteur doit avoir pour lire un texte spécifique avec aisance (Gopal et al., 2021). Ces formules de régression linéaire sont normalement basées sur des propriétés de texte superficielles telles que la longueur des mots, des phrases, des syllabes et des listes de fréquences. Heureusement, les longueurs de phrases et de mots peuvent être facilement déterminées à l'aide d'outils de prétraitement universels, car elles sont indépendantes de la langue. Cependant, la détermination des syllabes et des mots fréquemment utilisés nécessite des outils spécifiques à la langue. Autant que l'on puisse le déterminer pour cet article, il existe deux systèmes de syllabification pour le sesotho, voir Sibeko et Van Zaanen (2022b). Ainsi, les informations sur les syllabes sesotho peuvent être extraites des textes. Malheureusement, il n'existe pas de liste basée sur la fréquence des mots les plus utilisés à utiliser dans les études de lisibilité. En examinant les formules de lisibilité existantes, l'une des listes de fréquences les plus connues est celle développée par Dale et Chall (1948). La stratégie pour compiler cette liste était de présenter directement ces mots en lecture à des élèves de 4e année, un mot figurait sur la liste lorsqu'il était connu par au moins 80 pour cent des enfants (Dale et Chall, 1948 ; Piu et al., 2020 ; Glazkova et al., 2021). Idéalement, lors de la conception d'une liste de mots pour Sesotho (ou d'autres langues autochtones) une technique similaire devrait être utilisée. Malheureusement, une telle approche basée sur l’utilisateur peut donner des résultats régressifs puisque la majorité des apprenants dans les classes de langue africaine autochtone ont de faibles capacités de lecture et de connaissances du vocabulaire (Stoffelsma, 2019a, b). En d'autres termes, le résultat d'une approche basée sur l'utilisateur serait une liste de mots de niveau d'entrée en lecture.

Cet article présente nos efforts pour créer une liste des 3000 mots les plus fréquemment utilisés en sesotho écrit en utilisant une approche d'analyse de corpus. Nous positionnons notre travail dans le cadre de la recherche sur l'adaptation des métriques de lisibilité (Section 2). Nous présentons ensuite notre méthodologie pour la création de la liste (section 3) et discutons ensuite des résultats (section 4). Nous concluons notre article en mettant en avant les forces de la liste et en formulant un ensemble de suggestions pour des améliorations ultérieures (Section 5).

## 2 Travaux connexes

Les audits des ressources linguistiques numériques et des technologies de la langue humaine pour les langues sud-africaines indiquent que toutes les langues autochtones d'Afrique du Sud sont sous-dotées en ressources (Grover et al., 2010, 2011; Barnard et al., 2014; Moors et al., 2018a,b). Plus précisément, Sibeko et Setaka (2022) ont examiné le kit de ressources linguistiques de base pour le sesotho et ont conclu que de nombreuses ressources linguistiques numériques nécessaires font encore défaut.

Quelques études ont évalué la lisibilité des textes Sesotho en utilisant des mesures de lisibilité en anglais. Par exemple, Krige et Reid (2017) ont extrait manuellement les propriétés textuelles utilisées dans les mesures de lisibilité classiques pour étudier la lisibilité des brochures de santé Sesotho. Dans une autre étude, Reid et al. (2019) ont développé un test de littératie en santé en sesotho. Malheureusement, les études ont utilisé des métriques anglaises sans tenir compte des différences entre les propriétés textuelles du sesotho et de l'anglais. Par conséquent, les résultats de ces études peuvent avoir mal représenté le contexte des textes écrits en sesotho. En outre, en raison du manque de ressources, des méthodes manuelles d'extraction des propriétés textuelles ont été utilisées, ce qui est très peu pratique à utiliser à grande échelle et sujet aux erreurs.

Plusieurs études ont exploré l'adaptation des métriques classiques de lisibilité aux langues moins dotées en ressources. Pour le norvégien, Jakobsen et Skardal (2007) ont exploré l'adaptation de huit métriques classiques de lisibilité, à savoir, l'Automated Readability Index (ARI) (Smith et Senter, 1967), l'indice Coleman-Liau (CLI) (Coleman et Liau, 1975), la lisibilité Flesch (FRE) (Flesch, 1974), le niveau de lecture Flesch-Kincaid (FKGL) (Kincaid et al., 1975), l'indice de brouillard de Gunning (GFI) (Gunning, 1969), le Lasbarhetsindex (LIX) (Anderson, 1983), l'indice Rate (RIX) (Anderson, 1983), et la Simple Measure of Gobbledygook (SMOG) (Mc Laughlin, 1969). Presque toutes ces métriques ont été initialement développées pour l'anglais, à l'exception de LIX et RIX qui ont été développées pour le suédois. L'une de leurs conclusions les plus importantes a été que les comptages de syllabes et les mots complexes n'avaient pas le même effet sur les niveaux de lisibilité en norvégien qu'ils n'en avaient dans les métriques anglaises. En fin de compte, seules les métriques LIX et RIX suédoises ont pu être adaptées avec succès au norvégien à faibles ressources.

Les formules anglaises FRE et FKGL ont également été adaptées au russe (Oborneva, 2006). Dans ce processus, les deux caractéristiques du texte incluses dans les formules, à savoir la longueur moyenne des phrases et des mots, ont été comparées et les poids correspondants adaptés (Glazkova et al., 2021). De même, le FRE anglais a été adapté au néerlandais, à la fois par Douma (Douma, 1960) et Brouwer (Brouwer, 1963), qui ont chacun attribué des poids légèrement différents afin de tenir compte des différences de mots et de longueur de phrase entre l'anglais et le néerlandais. La formule populaire FRE a également été adaptée au français (Kandel et Moles, 1958 ; Henry, 1975), au tchèque (Bendová, 2021 ; Bendová et Cinková, 2021) et à l'italien (Franchina et Vacca, 1986).

Une étude de Van Oosten et al. (2010) a révélé que les résultats des formules classiques développées pour l'anglais, le néerlandais et le suédois sur des données néerlandaises donnent de fortes corrélations, ce qui s'explique par la forte dépendance des formules à certaines propriétés indépendantes de la langue, telles que la longueur moyenne des mots ou des phrases. Cependant, des tentatives infructueuses d'adaptation des métriques classiques de lisibilité utilisant des langues mieux dotées en ressources ont également été rapportées. Par exemple, Sinha et al. (2012) rapporte une tentative infructueuse d'adaptation des métriques anglaises FRE, GFI, FKGL et SMOG en hindi et bengali. Ils ont conclu que de nouvelles métriques basées sur les propriétés structurelles du bengali et de l'hindi devraient être développées car les métriques existantes donnent des résultats hors limites. De nouvelles propriétés textuelles telles que les Juktaakshars ont ensuite été introduites dans les métriques hindi résultantes. Cela implique que les métriques de lisibilité peuvent être adaptées lorsqu'il y a comparabilité, comme dans les cas de l'anglais, du néerlandais et du suédois, qui sont tous des langues germaniques. Cependant, de nouvelles formules peuvent devoir être développées lorsque les structures linguistiques sont incomparables, comme dans le cas du hindi et de l'anglais.

De plus, certaines formules classiques populaires comprennent également des variables basées sur des listes de fréquences. La formule la plus connue à cet égard est le Dale-Chall Reading Grade Score (Dale et Chall, 1948). En plus de se baser sur la longueur moyenne des phrases, cette formule compte également combien de mots apparaissent dans la liste de mots de Dale-Chall. Cette liste comprend 3 000 mots qui sont connus en lecture par au moins 80 pour cent des enfants de quatrième année. Une version mise à jour de la liste a été publiée en 1995 (Chall et Dale, 1995).

La formule ou l'indice de Dale-Chall est l'une des métriques les plus utilisées dans l'information de santé (Palotti et al., 2016). Étant donné que la formule a été développée à l’origine pour évaluer le matériel de lecture destiné aux enfants, il est recommandé d’ajuster la formule, et en particulier la liste des mots fréquemment utilisés lors de son utilisation pour mesurer la lisibilité pour des publics cibles spécifiques (Gauthier et Johnson, 2019). D'autre part, la liste des mots communs a été critiquée pour ne pas tenir compte des significations spécialisées (Yan et al., 2006).

Dans ce travail, nous souhaitons explorer si une liste similaire peut être créée pour le sesotho. Idéalement, nous aimerions également évaluer la liste de mots avec des utilisateurs tels que des élèves scolaires. Néanmoins, avant que les tests puissent commencer, nous avons besoin d'une liste initiale. Nous nous inquiétons également du fait que le test de la liste sur les apprenants scolaires pourrait être difficile en raison des procédures de filtrage récemment mises en place pour protéger les participants vulnérables dans l'ère post-pandémique. Néanmoins, nous explorons d'autres tests utilisateurs qui pourraient rendre notre liste applicable à d'autres publics cibles, tels que les lecteurs adultes, les auteurs et les éditeurs.

Actuellement, il existe au moins deux listes de mots fréquemment utilisés en sesotho, à savoir MostCommonWords et la liste de Waston Chen. Cependant, quelques questions se posent lors de la consultation de ces listes. Tout d'abord, les deux listes ont été (machine) traduites de l'anglais en sesotho, ce qui signifie qu'elles sont moins représentatives de la langue sesotho. De plus, pour certaines des traductions de la liste Waston Chen, le sepedi est utilisé (comme kgauswi au lieu du sesotho haufi 'près'). En raison de cette traduction de l'anglais vers le sesotho, les deux listes contiennent également diverses entrées qui ne sont pas des mots simples mais des phrases. Par exemple, la liste de Waston Chen mentionne yuniti eno ya thuto 'cette unité de la leçon' pour l'entrée anglaise 'unit'. De même, la liste MostCommonWords mentionne également a sebetsang a 'qui travaille' pour l'entrée anglaise 'active'. Les listes utilisent également de manière incohérente deux orthographes différentes, à la fois l'orthographe du sesotho du Lesotho et l'orthographe du sesotho d'Afrique du Sud. Enfin, pour les deux listes, il est difficile de trouver des informations de fond sur la manière dont les listes originales ont été créées.

Nous pensons donc qu'un développement plus structuré et ciblé d'une liste de fréquences est nécessaire et optons pour une approche basée sur un corpus dans cet article.

## 3 Méthodologie

Nous avons recueilli un total de trois corpus qui comprennent des textes originaux en sesotho, voir le tableau 1 pour quelques statistiques du corpus.

## 3.1 Corpus 1 : Bible

Nous avons extrait le texte de la Bible version Sesotho (Southern Sotho) SSO89 Bibele 'Bible'. Les textes bibliques ont été téléchargés au format SQL3lite depuis https://www.ph4.org/b4_index.php#google_vignette. Tous les textes ont été extraits à l'aide de scripts bash. Les textes bibliques sont divisés en trois sections, à savoir, (i) les livres de la Bible contenant 66 lignes de données, (ii) les versets contenant 31 171 lignes de données et (iii) info contenant 10 lignes de données. Pour notre corpus, nous avons extrait des textes de versets, qui ont ensuite été nettoyés en supprimant les numéros de livres, les titres de chapitres et les informations sur les versets. Les textes ont été tokenisés à l'aide de ucto avec les paramètres par défaut, à l'exception de paramètres spécifiques pour afficher chaque phrase sur une nouvelle ligne. En fin de compte, le corpus de la Bible contient environ 1 million de tokens.

p04-01.png

Tableau 1 : Nombre de jetons et de phrases présents dans les trois corpus Sesotho utilisés pour cette étude.

## 3.2 Corpus 2 : Autshumato

Le projet de traduction automatique Autshumato a développé un corpus de textes traduits pour les langues autochtones sud-africaines. Ces textes ont été traduits manuellement par des traducteurs professionnels de l'anglais vers les dix autres langues officielles de l'Afrique du Sud, à savoir, l'afrikaans, l'isiZulu, l'isiXhosa, l'isiNdebele, le siswati, le sesotho, le sepedi, le setswana, le xitsonga, et le tshivenḓa, sans ordre d'importance particulier. Les textes anglais-sesotho sont accessibles au public sur le dépôt en ligne du Centre sud-africain pour les ressources linguistiques numériques (SADiLaR) (Mckellar, 2023). Le fichier readme indique que ce corpus peut nécessiter un nettoyage supplémentaire pour des utilisations futures car il a été spécifiquement formaté pour l'apprentissage des systèmes de traduction automatique. Cependant, comme nous n’étions intéressés que par les mots utilisés dans le corpus, aucun autre nettoyage n’était nécessaire. Pour cet article, le corpus a été tokenisé et segmenté en phrases en utilisant ucto.

En fin de compte, le corpus Autshumato contenait environ 4,6 millions de tokens. Malheureusement, le corpus original contenait des textes brouillés, de ce fait, nous n'avons pas pu déterminer de manière incontestable tous les types de textes présents dans le corpus Sesotho. Néanmoins, McKellar (2022) liste au moins quatre types de textes, à savoir des magazines, des politiques, des bulletins d'information, des travaux de traduction et des documents récupérés à partir du domaine gouvernemental (gov.za). Nous sommes donc confiants que le corpus comprend différents genres.

## 3.3 Corpus 3 : NCHLT

Le projet du National Centre for Human Language Technology (NCHLT) visait à développer des données vocales et textuelles pour permettre le développement de HLT pour les 11 langues officielles de l’Afrique du Sud (Eiselen et Puttkamer, 2014; Badenhorst et De Wet, 2022). La collection de textes contient des données extraites du domaine sud-africain gov.za. Les données pour chaque langue contiennent suffisamment d'échantillons d'entraînement et de test pour des tâches telles que l'identification de la langue (Duvenhage, 2019).

Le corpus de textes contient trois ensembles de données, à savoir les textes sources, le lexique et le corpus (Eiselen et Puttkamer, 2014). Au lieu de s'appuyer sur les lexiques, nous avons décidé d'utiliser les données réelles du corpus pour avoir plus de contrôle. Les versions brutes et nettoyées du corpus sont présentes, nous avons utilisé la version nettoyée et à nouveau tokenisé tout le matériel textuel avec ucto. Les paramètres de base ont été utilisés avec l'option de segmentation des phrases. En fin de compte, le corpus NCHLT comprend environ 2 millions de tokens.

## 3.4 Vers une liste commune de fréquence des mots

Pour obtenir la liste de fréquences, tous les mots ont d'abord été mis en minuscules. Ensuite, toutes les fréquences ont été calculées par corpus. Afin d'avoir des fréquences de mots indépendantes de la taille du corpus, celles-ci ont été normalisées en fréquences par million de mots, qui est la mesure standard préférée également appelée fréquence relative.

Notre objectif principal était de nous retrouver avec une liste de 3000 mots uniques basés sur les trois corpus. À cette fin, nous avons fusionné les trois listes et veillé à moyenner les fréquences relatives des entrées en double. Par exemple, l'entrée 'a' est apparue dans les trois listes, avec une fréquence relative de 54 073,57, 24 853,12 et 27 740,49, respectivement. La fréquence relative moyenne résultante pour cette entrée est 35 555,73.

Après que la liste ait été dérivée automatiquement à l'aide de mesures de fréquence basées sur des corpus, elle a également été traitée manuellement par un locuteur natif du sesotho ayant beaucoup d'expérience dans l'enseignement de la langue sesotho et la recherche en rédaction afin d'aboutir à une liste propre.

## 4 Résultats et discussion

Comme mentionné ci-dessus, les trois listes de fréquences ont été fusionnées et les fréquences relatives ont été calculées pour les entrées en double. Ensuite, une analyse qualitative a été réalisée sur toutes les entrées, ce qui est présenté ci-dessous.

## 4.1 Noms propres

L'indice Dale-Chall considère les noms de personnes et d'organisations comme familiers (Barry et Stevenson, 1975). Par conséquent, ils n'ont pas besoin d'être inclus dans la liste des mots fréquemment utilisés. En conséquence, nous avons supprimé les noms des personnes et des organisations. Les noms des personnes comprenaient des noms bibliques comme Judase 'Judas', des noms typiques du Sesotho comme Mmalerato 'Mère de l'amour', et des noms de personnalités publiques comme Madiba 'l'emblématique Nelson Mandela'. Les noms d'organisations tels que les Services de revenus d'Afrique du Sud abrégés en SARS ont également été supprimés.

## 4.2 Orthographe

Selon Chokoe (2020), le Sepedi et le Setswana n'ont pas de règles régissant l'orthographe des mots empruntés. De même, les mots de prêt en Sesotho varient également dans la façon dont ils sont épelés. Par exemple, le mot anglais 'provinces' est écrit en utilisant quatre orthographes différentes dans les corpus, à savoir diporofense, diporofensi, diporovense, et diprovense. Des incohérences comme celle-ci peuvent être attendues lorsqu'il y a flexibilité dans la formation des mots empruntés (Kosch, 2013). Bien que les mots Sesotho ne contiennent généralement pas la lettre 'v', celle-ci est utilisée dans les mots empruntés qui contiennent à l'origine des lettres 'v' telles que thelevishene 'télévision'.

Taljard (2008) aborde trois enjeux lorsqu’il s’agit de décider de l’orthographe correcte. Tout d'abord, il serait facile de prendre le mot qui apparaît le plus, cependant, un corpus suffisamment grand représentant des textes dans ce domaine serait nécessaire. Deuxièmement, le mot candidat correct pourrait être choisi en fonction de sa meilleure conformité avec l'orthographe standard de la langue cible. Dans notre exemple précédent, cela impliquerait d'éliminer les options avec la lettre inhabituelle 'v'. Malheureusement, lorsque les règles linguistiques gouvernant l'orthographe sont superficielles, cette méthode de choix basée sur la conformité n'est pas nécessairement la meilleure solution (Taljard, 2008). En fin de compte, les quatre variations d'orthographe se conforment à la structure de syllabe CV généralement préférée dans les langues bantoues (Ditsele, 2014).

Entre autres, nous avons remarqué une tendance à la discorde dans l'orthographe (i) ne et ni, comme dans le cas de metjhini et metjhine, (ii) re et ri, comme dans l'exemple de rephaboliki et riphaboliki, (iii) pro et poro, comme dans porofense et profense, et (iv) ka et kha comme dans le cas de kabinete et khabinete. Nous avons identifié manuellement les cas où l'orthographe variait pour un mot et avons décidé de conserver différentes variantes d'orthographe si elles étaient incluses dans les 3000 mots les plus utilisés. Toutefois, celles-ci sont considérées comme des variations et sont donc conservées dans la liste en tant que deux variantes ou plus de la même entrée. En fin de compte, seules 30 entrées avaient des orthographes aussi variées.

## 4.3 Formes pluriels

Nous avons traité le singulier et le pluriel comme des entrées différentes dans la liste des mots fréquemment utilisés. Par exemple, le mot dikhemikhale « produits chimiques » apparaît dans les listes de mots fréquemment utilisés tandis que la forme singulière khemikhale « produit chimique » n'y figure pas. La plupart des mots commençant par la lettre b et la lettre m dans les listes sont au pluriel. Étant donné que nous voulons utiliser notre liste pour identifier les mots qui sont fréquemment utilisés, nous avons supposé que l'ajout des préfixes aux mots a changé la façon dont le mot se comporte et devrait donc être reconnu. Cependant, nous reconnaissons que la liste Dale-Chall compte les pluriels avec les formes singulières (Barry et Stevenson, 1975). Identifier toutes les formes singulières et plurielles aboutirait à une très longue liste où certains mots rarement utilisés sont faussement identifiés comme fréquemment utilisés. De plus, de telles analyses nécessiteraient un lemmatiseur fiable. Bien que des lemmatiseurs aient été développés pour les langues d'Afrique du Sud (Eiselen et Puttkamer, 2014), les lemmatiseurs ont été évalués sur des textes gouvernementaux et non sur différents types de textes sesotho. Par conséquent, nous ne pouvons pas vérifier leur fiabilité et leur exactitude dans d'autres genres de textes.

## 4.4 Abréviations

Quelques abréviations et acronymes ont également été identifiés après la fusion des listes. Au cours de l'analyse qualitative, il a été décidé de supprimer toutes les abréviations telles que jj pour jwalojwalo 'etcetera', mohl pour mohla 'date', et autres. Les abréviations ainsi que leurs formes complètes étaient présentes dans nos listes initiales de mots fréquemment utilisés. En fin de compte, seules les formes complètes de jj et mohl ont été conservées dans la liste finale. Néanmoins, nous avons conservé à la fois l'abréviation de tv et le mot complet thelevishene « télévision ». Nous avons décidé de conserver cette abréviation car elle est courante en sesotho. En fait, l'abréviation et le mot complet sont fréquemment utilisés. Malgré cela, ils sont conservés comme une seule entrée avec des orthographes variées (voir la section 4.2 pour notre traitement des orthographes variées).

Les acronymes concaténent des mots en un seul. Par exemple, World Health Organisation est compté comme un seul mot lorsqu'il est abrégé en WHO (Funk, 1968). Pour assurer la cohérence, nous avons supprimé toutes les occurrences d'abréviations et d'acronymes conformément à la liste de Dale-Chall qui considère les abréviations comme des termes peu familiers. Toutefois, nous avons conservé deux acronymes, à savoir VIH et SIDA, qui sont des abréviations utilisées dans le monde entier. La traduction de ce dernier terme 'eitsi a également été conservée dans la liste finale, car il apparaissait également parmi les 3000 mots les plus fréquemment utilisés avant l'édition manuelle. AIDS et eitsi sont tous deux comptés comme une seule entrée avec des orthographes variées.

## 4.5 Mots inattendus

Quelques cas de mots inattendus ont également été identifiés dans la liste fusionnée. Par exemple, les lettres telles que n, d, l, c, r et b ont été supprimées car elles n'ont pas de signification. Des exemples de termes non sesotho étaient également présents sur la liste. Par exemple, des mots tels que « services » et « language » ont été identifiés et retirés de la liste. Contrairement aux autres mots inattendus, le mot anglais'sister' n'a pas été retiré de la liste. Bien qu'il existe des mots équivalents en sesotho pour une sœur, une matrone, une jeune fille et une infirmière, le mot anglais emprunté « sister » est plus courant. En fait, l’équivalent sesotho, mooki, n’apparaît dans aucune des trois listes de fréquences.

## 4.6 Variations spécifiques

Nous espérons adapter la métrique Dale-Chall anglaise en Sesotho. En conséquence, nous considérons également la composition de la liste Dale-Chall utilisée dans la métrique anglaise. L'indice de Dale-Chall utilise la formule ci-dessous pour calculer les niveaux scolaires estimés pour l'indice de Dale-Chall :

p06-01.png

Les mots difficiles utilisés dans la formule sont ceux qui ne figurent pas dans la liste des mots fréquemment utilisés (Stocker, 1971). Comme il ressort de la formule, l'identification des mots difficiles n'est qu'une propriété textuelle utilisée pour déterminer la lisibilité des textes. Tous les mots et leurs variations ne sont pas répertoriés dans la liste des mots fréquemment utilisés. Cependant, lors du calcul des scores, des variations spécifiques sont exclues de cette liste de mots difficiles. Nous nous concentrons sur deux de ces variations, à savoir les verbes et les adverbes.

Selon Barry et Stevenson (1975), les verbes qui se terminent en -s, -ed, -ing, et -ied ne sont pas comptés comme des mots difficiles car ils sont simplement des variétés de verbes de base. Les structures verbales du sesotho n'ont pas de structure en -ing. À la place, les temps continus sont indiqués par des marqueurs progressifs tels que 'a, ya, et ntse' qui sont des mots autonomes et non des suffixes ajoutés aux verbes. Les structures -ed et -ied sont indiquées par l'utilisation de -wa et -uwa qui sont suffixées au verbe. Par exemple, le mot qetwa/qetuwa « terminé » est dérivé de qeta « finir ». Pour les besoins de notre liste, nous ne tenons pas compte de ces différences et comptons plutôt toutes les formes verbales comme des éléments distincts.

Enfin, les adverbes anglais qui se terminent en -ly ne sont pas comptés comme des mots difficiles dans la liste de Dale-Chall (Barry et Stevenson, 1975). Les adverbes sesotho prennent un type de structure différent. Par exemple, l'adverbe de manière 'lovingly', serait exprimé comme ka lerato comme dans 'avec amour'. En conséquence, les distinctions entre les différents adverbes sont sans importance dans Sesotho et donc pour notre liste.

## 4.7 Liste finale

Après toutes ces étapes manuelles, nous obtenons une liste de 3000 entrées uniques. Environ un tiers de cette liste, 993 entrées, sont des mots qui étaient fréquents dans les trois corpus. Un autre tiers sont des mots apparaissant fréquemment dans les deux corpus 2 et 3, à savoir 975 entrées. Le dernier tiers est constitué de 723 mots uniques du corpus 1, 125 mots uniques du corpus 2, 109 mots uniques du corpus 3, 49 mots uniques des corpus 1 et 2 et 63 mots uniques des corpus 1 et 3. Sur la base de ces chiffres, nous remarquons une différence entre le corpus 1 (la Bible) et les deux autres corpus (Autshumato et NCHLT). D'autres recherches intégrant cette liste dans des mesures de lisibilité basées sur la fréquence réelle et avec l'utilisateur final envisagé devront corroborer si la liste peut être utilisée à des fins de lisibilité.

Veuillez noter que pour permettre la variation orthographique de certains mots (veuillez vous référer à la section 4.2 pour plus d'informations à ce sujet), de telles variations ont été ajoutées à la liste pour 30 mots. En conséquence, le nombre total de mots inclus dans la liste s'élève à 3037. La liste est mise à la disposition de la communauté de recherche dans le dépôt de l'Agence de gestion des ressources linguistiques de SADiLaR https://repo.sadilar.gov.

## 5 Discussion et conclusion

Cet article a discuté du développement d'une liste de mots fréquemment utilisés en sesotho en utilisant une approche basée sur un corpus. Trois corpus différents ont été employés à cette fin. Bien que cela puisse paraître non conventionnel, le corpus de la Bible a également été inclus dans cette investigation et les résultats semblent confirmer que ce corpus se comporte quelque peu différemment. Néanmoins, nous croyons que l'inclusion de ce corpus est appropriée pour le Sesotho, car de nouvelles orthographes ont été introduites en utilisant des traductions de la Bible (Makutoane, 2022). Par exemple, l'orthographe sesotho sud-africaine a été introduite par la traduction de la Bible de 1960. Initialement, nous souhaitions également incorporer des textes de la Wikipédia sesotho. Cependant, après un examen plus approfondi, il a été constaté que l'orthographe utilisée dans les pages Wiki représente à la fois Sesotho d'Afrique du Sud et Sesotho du Lesotho en fonction de qui a fait la traduction et / ou l'édition initiale de l'entrée Wikipedia. De telles inconsistances dans l'orthographe peuvent entraîner des fréquences mal représentées. Bien que certaines inconsistances entre les orthographes puissent être corrigées de manière semi-automatique, d'autres nécessitent une analyse au cas par cas.

L'objectif de la conception de méthodes objectives pour mesurer la lisibilité des textes en sesotho est de permettre aux enseignants et aux évaluateurs, en général, de pouvoir choisir des textes éducatifs de manière cohérente et équitable. En réalité, il est difficile de trouver des textes dans une langue sous-étudiée comme le sesotho. Trouver de nouveaux textes pour les apprenants n'est pas toujours facile pour les enseignants. En fin de compte, les textes sont réutilisés sans être réajustés aux capacités de lecture des apprenants. Néanmoins, les textes préparés par les examinateurs et les compilateurs de manuels aux niveaux national et provincial réutilisent des textes littéraires tels que des romans et des drames ainsi que des articles de magazines et de journaux. Certains des textes sont même traduits à partir de textes en ligne en anglais. La mesure dans laquelle ces textes sont adaptés à des apprenants spécifiques n'a pas été étudiée.

La présence d'une liste de fréquences développée empiriquement, telle que celle présentée dans cet article, permet de faire des pas supplémentaires vers le développement de métriques de lisibilité classiques qui utilisent des listes de fréquences. Bien que les textes utilisés pour notre analyse de corpus contiennent une grande quantité de textes gouvernementaux, nous croyons que la liste finale ne représente pas nécessairement uniquement les textes gouvernementaux, car les significations des mots sont prises hors contexte. Par exemple, des mots tels que leleme « langue/langage/commère », et moputso « salaire/salaire/paiement/récompense/gain », qui apparaissent tous deux sur notre liste, ne sont pas uniquement utilisés dans les textes gouvernementaux. En outre, la liste de fréquences du corpus biblique chevauchait plus d'un tiers des listes de fréquences des deux autres corpus. C'est une indication que les mots ne sont pas nécessairement limités aux textes gouvernementaux et que la liste peut être pertinente pour une utilisation même dans d'autres contextes tels que les textes éducatifs.

Dans les travaux futurs, la liste de fréquences sera davantage validée sur un corpus de textes éducatifs (Sibeko et Van Zaanen, 2022a), et sera intégrée dans des adaptations de plusieurs formules de lisibilité nécessitant des listes de mots fréquents de l'anglais au sesotho. De plus, la liste sera testée sur les utilisateurs finaux envisagés tels que les apprenants, les enseignants et les éditeurs pour une validation supplémentaire.

## Limites

Cette création d'une liste de mots fréquemment utilisés en Sesotho est limitée par les corpus utilisés dans cet article. En tant que tel, la variété des genres de texte représentés dans les corpus est limitée.

De plus, bien que la liste originale du Dale-Chall anglais ait été conçue avec la participation de véritables élèves de quatrième année, nous nous sommes appuyés uniquement sur les ressources existantes. Malheureusement, le confinement national dû à la pandémie de COVID-19 en Afrique du Sud a entraîné la mise en place de restrictions plus strictes, rendant plus difficile l'accès aux participants vulnérables tels que les élèves des écoles. Par conséquent, l'obtention de l'autorisation d'interagir avec ces participants est devenue une démarche longue et fastidieuse. Par conséquent, nous avons été limités aux ressources textuelles. Nous espérons pouvoir effectuer des expériences de validation supplémentaires avec les utilisateurs finaux envisagés dans de futurs travaux.

## Déclaration éthique

Toutes les données utilisées dans cette étude ont été obtenues à partir de sources accessibles au public. Aucune information confidentielle ou sensible n'a été utilisée. L'étude a été approuvée sur le plan éthique par l'Université du Nord-Ouest avec le numéro d'approbation éthique : NWU-00729-21-A7.

## Remerciements

Cet article fait partie d'un projet doctoral achevé à l'Université du Nord-Ouest. Cet article a été réalisé sous la supervision du Professeur Orphée De Clercq lors d'un séjour de recherche à l'Université de Gand. Il est partiellement financé par le Global Minds Fund à l'Université de Gand.

## Notes

1 https://3000mostcommonwords.com

2 https://wastonchen.com/6417.html

3 Le corpus est disponible sur https://hdl.handle.net/20.500.12185/336

4 Voir https://github.com/words/dale-chall

## Références

Jonathan Anderson. 1983. Lix and Rix: Variations on a little-known readability index. Journal of Reading, 26(6):490-496.

Jaco Badenhorst and Febe De Wet. 2022. NCHLT auxiliary speech data for ASR technology development in South Africa. Data in Brief, 41:107860.

Etienne Barnard, Marelie H Davel, Charl Van Heerden, Febe De Wet, and Jaco Badenhorst. 2014. The NCHLT corpus of the South African languages. In Proceedings of the 4th International Workshop Spoken Language Technologies for Under-resourced Languages, pages 194-200.

Jeanne Gardner Barry and Timothy E Stevenson. 1975. Using a computer to calculate the Dale-Chall formula. Journal of Reading, 19:218-222.

Dolores Batinić, Sandra Birzer, and Heike Zinsmeister. 2016. Creating an extensible, levelled study corpus of Russian. In Proceedings of the 13th Conference on Natural Language Processing (KONVENS 2016), pages 37-43. Universität Bochum.

Kiára Bendová. 2021. Using a parallel corpus to adapt the Flesch Reading Ease formula to Czech. Journal of linguistics, 72(2):477-487.

Kiára Bendová and Silvie Cinková. 2021. Adaptation of classic readability metrics to Czech. In Proceedings of the International Conference on Text, Speech, and Dialogue: 24th International Conference, pages 159-171. Springer.

RHM Brouwer. 1963. Onderzoek naar de leesmoeilijkheden van nederlands proza (Research into reading difficulty in Dutch prose). Pedagogische studiën, 40:454-464.

Jeanne Sternlicht Chall and Edgar Dale. 1995. Readability revisited: The new Dale-Chall readability formula. Brookline Books.

Sekgaila Chokoe. 2020. Spell it the way you like: The inconsistencies that prevail in the spelling of Northern Sotho loanwords. South African Journal of African Languages, 40(1):130-138.

Kate Cockcroft. 2016. A comparison between verbal working memory and vocabulary in bilingual and monolingual South African school beginners: Implications for bilingual language assessment. International Journal of Bilingual Education and Bilingualism, 19(1):74-88.

Meri Coleman and Ta Lin Liau. 1975. A computer readability formula designed for machine scoring. Journal of Applied Psychology, 60(2):283.

Edgar Dale and Jeanne Sternlicht Chall. 1948. A formula for predicting readability: Instructions. Educational research bulletin, pages 37-54.

Thabo Ditsele. 2014. Why not use Sepitori to enrich the vocabularies of Setswana and Sepedi? Southern African Linguistics and Applied Language Studies, 32(2):215-228.

Hessel Douma. 1960. Readability of Dutch farm papers: a discussion and application of readability-formulas. Wageningen: Afdeling Sociologie en Sociografie van de Landbouwhogeschool, 17:433-470.

Bernardt Duvenhage. 2019. Short text language identification for under resourced languages. arXiv preprint arXiv:1911.07555.

Roald Eiselen and Martin J Puttkamer. 2014. Developing text resources for ten South African languages. In Proceedings of the 9th International Conference on Language Resources and Evaluation, pages 3698-3703.

Rudolph Flesch. 1974. The art of readable writing, 2nd edition. Harper, New York.

Valerio Franchina and Roberto Vacca. 1986. Adaptation of flesh readability index on a bilingual text written by the same author both in Italian and English languages. Linguaggi, 3:47-49.

Laverne Carl Funk. 1968. The reading level of selected magazines as determined by the Dale-Chall readability formula. Ph.D. thesis, University of Minnesota: Minnesota.

Martha Gauthier and Nathan Johnson. 2019. Identification and recommendations of readability tests for the evaluation of clinical outcome assessments. Value in Health, 22:s828.

Anna Glazkova, Yury Egorov, and Maksim Glazkov. 2021. A comparative study of feature types for age-based text classification. In Analysis of Images, Social Networks and Texts: 9th International Conference, AIST 2020, Skolkovo, Moscow, Russia, October 15-16, 2020, Revised Selected Papers 9, pages 120-134. Springer.

Revathi Gopal, Mahendran Maniam, Noor Alhusna Madzlan, Siti Shuhaida binti Shukor, and Kanmani Neelamegam. 2021. Readability formulas: An analysis into reading index of prose forms. Studies in English Language and Education, 8(3):972-985.

Aditi Sharma Grover, Gerhard B van Huyssteen, and Marthinus W Pretorius. 2010. The South African Human Language Technologies audit. In Proceedings of the Seventh International Conference on Language Resources and Evaluation (LREC'10), pages 2847-2850.

Aditi Sharma Grover, Gerhard Beukes. van Huyssteen, and Marthinus W. Pretorius. 2011. The South African Human Language Technology audit. Language resources and evaluation, 45:271-288.

Robert Gunning. 1969. The fog index after twenty years. Journal of Business Communication, 6(2):3-13.

Georges Henry. 1975. Comment Mesurer La Lisibilite (How to Measure Readability). Labor, Brussels, Belgium.

Alexandra H Humphreys and Jere Thomas Humphreys. 2013. Reading difficulty levels of selected articles in the Journal of Research in Music Education and Journal of Historical Research in Music Education. Music Education Research International, 6.

Thomas Jakobsen and Thomas Skardal. 2007. Readability index. Report, Agder University.

Liliane Kandel and Abraham Moles. 1958. Application de l'indice de Flesch à la langue française (Application of Flesch index to the French language). Cahiers Etudes De Radio-Télévision, 19(1958):253-274.

Peter J Kincaid, Robert P Fishburne Jr, Richard L Rogers, and Brad S Chissom. 1975. Derivation of new readability formulas (Automated Readability index, Fog count and Flesch Reading Ease formula) for navy enlisted personnel. Report, Defense Technical Information Center.

Inge Kosch. 2013. An analysis of the oxford bilingual school dictionary: Northern Sotho and English (de schryver 2007). Lexikos, 23:611-627.

Daleen Krige and Marianne Reid. 2017. A pilot investigation into the readability of Sesotho health information pamphlets. Communitas, 22:113-123.

Tshokolo J Makutoane. 2022. 'The people divided by a common language': The orthography of Sesotho in Lesotho, South Africa, and the implications for bible translation. HTS Teologiese Studies/Theological Studies, 78(1):9.

Harry G Mc Laughlin. 1969. Smog grading-a new readability formula. Journal of reading, 12(8):639-646.

Cindy McKellar. 2022. Autshumato Monolingual Sesotho Corpus. South African Centre for Digital Language Resources. Available at: https://repo.sadilar.org/handle/20.500.12185/583 Accessed: 28 Jan 2023.

Cindy Mckellar. 2023. Autshumato English-Sesotho Parallel Corpora. Southern African Centre for Digital Language Resources. Available at: https://repo.sadilar.org/handle/20.500.12185/577 [Accessed: 6 Feb. 2023].

Carmen Moors, Illana Wilken, Karen Calteaux, and Tebogo Gumede. 2018a. Human Language Technology audit 2018: Analysing the development trends in resource availability in all South African languages. In Proceedings of the Annual Conference of the South African Institute of Computer Scientists and Information Technologists, pages 296-304.

Carmen Moors, Illana Wilken, Tebogo Gumede, and Karen Calteaux. 2018b. Human Language Technology audit 2017/18. Technical report, CSIR Meraka Institute.

Irina Vladimirovna Oborneva. 2006. Avtomatizirovannaya otsenka slozhnosti uchebnykh tekstov na osnove statisticheskikh parametrov (Automated estimation of complexity of educational texts on the basis of statistical parameters). Thesis, RAS Institut soderzhaniya i metodov obucheniya [RAS Institute of Content and Teaching Methods].

Joao Palotti, Lorraine Goeuriot, Guido Zuccon, and Allan Hanbury. 2016. Ranking health web pages with relevance and understandability. In Proceedings of the 39th International ACM SIGIR conference on Research and Development in Information Retrieval, pages 965-968.

Romana Kabir Piu, Kazi Rayed Hossain, Noor Hossain Sabab, and Rakib Bin Mannan Ar Rafi. 2020. Hatred Message Identification using DistilBERT. Ph.D. thesis, United International University.

Elizabeth Pretorius, Nompumelelo Mohohlwane, and Nicholas Spaull. 2020. Investigating the comprehension iceberg: Developing empirical benchmarks for early-grade reading in agglutinating African languages. South African Journal of Childhood Education, 10(1):1-14.

Elizabeth J Pretorius and Lieke Stoffelsma. 2017. How is their word knowledge growing? Exploring grade 3 vocabulary in South African township schools. South African Journal of Childhood Education, 7(1):1-13.

Marianne Reid, Mariatte Neil, and Edgar Janse Van Rensburg-Bonthuyzen. 2019. Development of a Sesotho health literacy test in a South African context. African Journal of Primary Health Care and Family Medicine, 11(1):1-13.

Jabulani Sibanda and Jean Baxen. 2016. Determining ESL learners' vocabulary needs from a textbook corpus: Challenges and prospects. Southern African Linguistics and Applied Language Studies, 34(1):57-70.

Johannes Sibeko and Mmasibidi Setaka. 2022. An overview of Sesotho BLARK content. Journal of Digital Humanities Association of South Africa, 4(2):1-11.

Johannes Sibeko and Menno Van Zaanen. 2022a. Final year high school examination texts of South African home and first additional language subjects. Southern African Centre for Digital Language Resources. Available at: https://repo.sadilar.org/handle/20.500.12185/568 [accessed: 29 dec. 2022].

Johannes Sibeko and Menno Van Zaanen. 2022b. Sesotho syllabification systems. Southern African Centre for Digital Language Resources. Available at: https://repo.sadilar.org/handle/20.500.12185/555 [accessed: 3 jan 2023].

Manjira Sinha, Sakshi Sharma, Tirthankar Dasgupta, and Anupam Basu. 2012. New readability measures for Bangla and Hindi texts. In Proceedings of COLING 2012, pages 1141-1151. Association for Computational Linguistics.

Edgar A Smith and R.J Senter. 1967. Automated readability index. University of Cincinnati, Ohio.

Leonard P Stocker. 1971. Increasing the precision of the Dale-Chall readability formula. Reading Improvement, 8(3):87.

Lieke Stoffelsma. 2019a. English vocabulary exposure in South African township schools: Pitfalls and opportunities. Reading & Writing-Journal of the Reading Association of South Africa, 10(1):1-10.

Lieke Stoffelsma. 2019b. From 'sheep' to 'amphibian': English vocabulary teaching strategies in South African township schools. South African Journal of Childhood Education, 9(1):1-10.

Elsabe Taljard. 2008. Terminology practice in a non-standardized environment: A case study. In Proceedings of the XIII EURALEX International Congress (Barcelona, 15-19 July 2008), pages 1073-1080.

Marthie Van der Walt, Kobus Maree, and Suria Ellis. 2008. A mathematics vocabulary questionnaire for use in the intermediate phase. South African Journal of Education, 28(4):489-504.

Phillip Van Oosten, Dries Tanghe, and Véronique Hoste. 2010. Towards an improved methodology for automated readability prediction. In Proceedings of the 7th Conference on International Language Resources and Evaluation (LREC 2010), pages 775-782. European Language Resources Association (ELRA).

Carien Wilsenach and Maxine Schaefer. 2022. Development and initial validation of productive vocabulary tests for isiZulu, Siswati and English in South Africa. Language Testing, pages 567--592.

Xin Yan, Dawei Song, and Xue Li. 2006. Concept-based document readability in domain specific information retrieval. In Proceedings of the 15th ACM international conference on Information and knowledge management, pages 540-549.
