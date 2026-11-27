> Machine translation (fr) of "Compiling a List of Frequently Used Setswana Words for Developing Readability Measures" by Johannes Sibeko, https://aclanthology.org/2024.rail-1.5/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Compilation d'une liste de mots Setswana fréquemment utilisés pour le développement de mesures de lisibilité

Johannes Sibeko

**Affiliations**  
Johannes Sibeko  
Nelson Mandela University  
University Way, Summerstrand, Port Elizabeth, 6019, South Africa  


## Résumé

Ce document répond au besoin urgent d'améliorer l'évaluation de la lisibilité en setswana par la création d'une liste de mots fréquemment utilisés en setswana. L'objectif final est d'intégrer cette liste dans l'adaptation des mesures de lisibilité traditionnelles dans Setswana, comme l'indice Dale-Chall, qui repose sur des mots fréquemment utilisés. Notre liste initiale est développée à l'aide de méthodes basées sur des corpus utilisant des listes de fréquences obtenues à partir de cinq ensembles de corpus. Elle est ensuite affinée à l'aide de méthodes manuelles. La section d’analyse aborde les défis rencontrés lors de l’élaboration de la liste finale, englobant des questions telles que l’inclusion de mots non-setswana, de noms propres, de termes inattendus et de variations d’orthographe. Le processus de prise de décision est clarifié, mettant en lumière des choix cruciaux tels que le maintien de termes contemporains et l'acceptation de diverses variations orthographiques. Ces décisions reflètent un équilibre nuancé entre authenticité linguistique et lisibilité. Cet article contribue au débat sur la lisibilité des textes dans les langues africaines autochtones d'Afrique australe. De plus, il établit une base pour des initiatives de littératie sur mesure et sert de point de départ pour l'adaptation des mesures traditionnelles de lisibilité basées sur des listes de fréquence au Setswana.

## Mots-clés

Setswana, Mots fréquemment utilisés, Langue autochtone, Lisibilité, Faibles ressources

## 1. Introduction

Il existe un consensus sur le fait que les mots fréquemment rencontrés en lecture deviennent plus faciles à lire (Chen et Meurers, 2016; Rello et al., 2013). Cette connexion entre l'exposition aux mots et la facilité de lecture s'étend à une amélioration de la familiarité avec les mots et des connaissances ultérieures (Chen et Meurers, 2016). À l’inverse, l’impact négatif sur la maîtrise de la lecture est évident lorsque les lecteurs sont confrontés à des mots ou à des structures grammaticales inconnus (Newbold et Gillam, 2010).

Par conséquent, il devient impératif de plonger dans les fréquences des mots pour le développement de mesures de lisibilité. Cette prise de conscience des fréquences des mots peut servir d'outil précieux pour évaluer et manipuler les niveaux de lisibilité du texte.

Comprendre la lisibilité des textes est important en Afrique du Sud, où les niveaux de littératie parmi les apprenants de langues sont constamment bas dans diverses langues, tant dans les cours de langue maternelle que dans les cours de langues additionnelles. Cette préoccupation concernant les faibles compétences en littératie est particulièrement soulignée parmi les apprenants de langues tels que ceux des cours de Setswana qui démontrent une plus grande maîtrise des compétences orales que de la lecture (Lekgoko et Winskel, 2008). Selon Mophosho et al. (2019), se concentrer sur l'amélioration de la maîtrise de la lecture, en particulier parmi les apprenants de Setswana, est crucial.

Bien que des recherches aient été menées sur la capacité de lecture en Setswana, comme le travail de Pule et Theledi (2023), qui explore les défis de la maîtrise de la lecture et souligne l'influence des caractéristiques prosodiques sur la compréhension du Setswana, et l'étude de Probert (2019), qui plaide pour des recherches ciblées sur les compétences en lecture dans les langues africaines, identifiant les syllabes comme unités cruciales pour la lecture continue en isiXhosa et en Setswana, il reste une lacune notable de connaissances concernant les stratégies d'acquisition de la maîtrise de la lecture dans les langues africaines par rapport aux langues bien dotées en ressources comme l'anglais.

Dans cet article, nous utilisons des corpus pour développer une liste de mots fréquemment utilisés en setswana. L'objectif principal de l'élaboration de cette liste est de faciliter l'adaptation de l'indice de lisibilité de Dale-Chall pour le setswana.

Le reste de cet article fournit le contexte des mesures de lisibilité fondées sur la fréquence dans la Section 2, puis discute de la nécessité de mesurer la lisibilité des textes dans le contexte sud-africain dans la Section 3, suivi de la méthode de collecte de données et d'analyse dans la Section 4, des résultats qui exposent les problèmes et les solutions dans la Section 5, d'une discussion des résultats et de l'implication de la liste des mots fréquemment utilisés dans la Section 6, et de la conclusion avec des recommandations.

## 2. Contexte

Setswana, également appelé 'Tswana,' 'Chuana,' ou 'Sechuana,' est une langue bantoue (Bennett et al., 2016). Il fait partie du groupe linguistique Sotho-Tswana avec Sesotho et Sepedi. En Afrique du Sud, le groupe linguistique Sotho-Tswana compte plus de 16 millions de locuteurs primaires (Fraser, 2023).

Le setswana représente 8,3 % (5,15 millions de locuteurs), aux côtés du sepédi (10 %, soit 6,2 millions de locuteurs) et du sesotho (7,8 %, soit 4,84 millions de locuteurs). Bien que la majorité des locuteurs du setswana soient originaires d'Afrique du Sud, le setswana est également une langue officielle au Botswana, une langue nationale reconnue au Zimbabwe et une langue parlée marginalisée en Namibie (Otlogetswe, 2001).

Malgré la prévalence de Setswana, nous ne sommes pas au courant des efforts antérieurs pour développer des mesures de lisibilité dans la langue.

Dans un examen des mesures de lisibilité, DuBay (2004) note que plus de 200 mesures ont été développées pour l'anglais, reflétant la vaste recherche sur la lisibilité des textes couvrant plus de deux siècles dans des langues à ressources élevées (Collins-Thompson, 2014; De Clercq et Hoste, 2016; DuBay, 2004).

Nous adhérons à la définition de lisibilité du texte proposée par Bailin et Grafstein (2001), qui la définissent comme la facilité avec laquelle un texte peut être lu. Notre attention sur la lisibilité ne s'étend pas à la compréhension du texte, à la compréhensibilité, aux propriétés extra-textuelles ou aux caractéristiques du lecteur.

Notre recherche de mesures de lisibilité pour les langues autochtones africaines a révélé au moins trois mesures de lisibilité pour l'afrikaans. Un examen complet des trois mesures de lisibilité en afrikaans est présenté dans (McDermid Heyns, 2007). Essentiellement, les trois mesures de lisibilité pour l'afrikaans se sont inspirées de la mesure anglaise FleschReading Ease.

Par ailleurs, les développements récents indiquent des initiatives visant à formuler neuf mesures de lisibilité pour le sesotho (Sibeko, 2023 ; Sibeko et Van Zaanen, 2022). Ces mesures englobent quatre métriques basées sur l'information des syllabes, quatre métriques basées sur la longueur des mots et une métrique basée sur une liste de fréquences. À cette fin, Sibeko et De Clercq (2023) ont élaboré une liste de mots fréquemment utilisés en Sesotho, destinée à être intégrée dans le développement de l'indice Dale-Chall pour le Sesotho. De même, les efforts présentés dans cet article visent à développer une liste de fréquences pour inclusion dans l'indice Dale-Chall pour le setswana.

Setswana remplit diverses fonctions, y compris l'éducation. Les textes écrits constituent une composante significative de la communication en setswana. Par conséquent, l'accès à l'information écrite en setswana revêt une importance primordiale. Malheureusement, en dépit de l'inclusion de Setswana dans les programmes d'enseignement des niveaux de base à supérieur en Afrique australe, une partie des utilisateurs de la langue manque d'éducation formelle, tandis que d'autres n'ont qu'un niveau d'éducation limité. En conséquence, l'absence de mesures de lisibilité pour ces langues pose un défi significatif, surtout lorsque les lecteurs rencontrent des difficultés à extraire des informations des communications écrites.

## 3. Mesures fondées sur des listes de fréquences

Une hypothèse largement acceptée parmi les chercheurs en lisibilité postule que la lisibilité d'un texte peut être quantifiée à l'aide de formules spécifiques. Une catégorie notable de ces formules comprend les mesures de lisibilité basées sur les listes de fréquence, qui fonctionnent sur le principe que les mots fréquemment rencontrés sont plus faciles à reconnaître, les rendant plus faciles à lire que les mots moins courants dans les textes (Brysbaert et al., 2011). Cette approche évalue la difficulté des mots en comptant les mots rarement utilisés ou difficiles (Gopal et al., 2021). Par conséquent, le fondement des mesures de lisibilité traditionnelles, qui mesurent la familiarité des mots, réside dans une liste complète de mots fréquemment utilisés.

Pour illustrer ce principe en pratique, George Spache a développé la formule de lisibilité de Spache (Spache, 1953). Cette formule repose sur une compilation de mots familiers adaptés aux apprenants de niveaux scolaires spécifiques. Les textes sont ensuite segmentés en sections de 100 mots pour déterminer le nombre de mots inconnus qui ne sont pas inclus dans la liste de mots propre à la classe (Spache, 1953; Smith, 2016). Une moyenne plus élevée de mots inconnus est en corrélation avec des textes plus difficiles à lire.

De même, Dale et Chall, dans leur Dale-Chall Index (Dale et Chall, 1948), emploient une liste de mots familiers et compréhensibles par les apprenants de 4e année. La moyenne de ces mots est calculée, et une plus grande prévalence de mots inconnus, absents de la liste désignée, correspond à des textes plus difficiles à lire.

Dans cet article, nous nous appuyons sur des corpus généraux et non sur des textes adaptés pour les apprenants en langue. Malgré cela, notre liste peut servir de base pour le développement d'une mesure de lisibilité basée sur une liste de fréquences spécialement conçue pour Setswana.

## 4. Méthodologie

Nous avons recueilli cinq corpus pour construire une liste de mots par fréquence, visant à englober divers genres en rassemblant des textes de différentes sources. La préparation de chaque corpus pour l'analyse a impliqué la mise en minuscules avec bash et la tokenisation avec ucto, y compris l'exigence spécifique de segmentation des phrases. Les informations relatives à la phrase correspondante sont détaillées dans le tableau 1. Vous trouverez ci-dessous un bref aperçu des cinq corpus.

## 4.1. Corpus 1 : NCHLT

L'objectif du projet du National Centre for Human Language Technology (NCHLT) était de générer des données de parole et de texte pour soutenir le développement des Technologies du Langage Humain (HLTs) pour les 11 langues écrites officielles d'Afrique du Sud (Eiselen et Puttkamer, 2014; Badenhorst et De Wet, 2022). La collection de textes se compose de données traduites acquises auprès du domaine du gouvernement sud-africain, avec de nombreux échantillons d'entraînement et de test pour les tâches d'identification de la langue dans chaque langue (Duvenhage, 2019).

p03-01.png

Tableau 1 : Résumé des propriétés du texte

L’ensemble de données d’origine comprend les textes sources, les lexiques et le corpus (Eiselen et Puttkamer, 2014). Nous avons utilisé les données nettoyées du corpus (environ 1 249 980 mots) et non les fichiers bruts ou sources.

## 4.2. Corpus 2 : Autshumato

Le projet de traduction automatique Autshumato a développé un corpus de textes de traduction pour les langues autochtones sud-africaines. Les textes ont été traduits manuellement et professionnellement de l'anglais vers les dix autres langues officielles écrites d'Afrique du Sud. Les textes anglais-setswana sont accessibles au public sur le dépôt en ligne du South African Centre for Digital Language Resources (SADiLaR) (Mckellar, 2023).

Les corpus parallèles Autshumato English-Setswana se composent de trois ensembles distincts. La collection Set 1 comprend des données qui ont été traduites de l'anglais vers le setswana par des traducteurs professionnels. Cet ensemble englobe un total de 324 342 mots en setswana. La collection Set 2 contient des données provenant de paires de fichiers traduits par des traducteurs fiables, avec un total de 1 099 509 mots en setswana. Enfin, la collection Set 3 comprend des données extraites de divers sites Web gouvernementaux, contenant un total de 1 172 172 mots Setswana.

En fin de compte, le corpus Autshumato comprenait environ 2 596 847 mots. McKellar (2022) décrit au moins quatre types de textes issus du jeu de données, notamment des magazines, des politiques, des bulletins d'information et des travaux de traduction, en plus des documents obtenus à partir du domaine gov.za.

## 4.3. Corpus 3 : PuoBERTa

Nous avons également collecté le corpus PuoBerta (Marivate et Wagner, 2023). Le corpus PuoBERTa fonctionne comme un ensemble de données de catégorisation des nouvelles (Marivate et al., 2023). Son objectif principal est de faciliter le développement de ressources monolingues pour le setswana, englobant des tâches telles que l'étiquetage en catégories grammaticales (POS), la reconnaissance d'entités nommées (NER) et, principalement, la catégorisation des actualités. L'ensemble de données a été dérivé d'articles de presse en ligne accessibles qui ont été fournis par le gouvernement du Botswana.

Le corpus Berta comprend trois fichiers de données : l’ensemble de développement (230 373 mots), l’ensemble d’entraînement (1 806 813 mots) et l’ensemble de test (226 614 mots). Nous amalgamons les textes pour compiler un corpus de 2 248 475 mots en pré-traitement.

## 4.4. Corpus 4 : Wikipédia

Notre corpus Wikipedia est issu de la Leipzig-Corpora-Collection (2020), offrant trois corpus téléchargeables. Le premier corpus, Leipzig-Corpora-Collection (2017), comprend des textes extraits de Wikipédia en général, totalisant 660 041 mots. Le second corpus, datant de 2018, comprend 232 210 mots collectés au Botswana. Le troisième corpus, de 2020, est constitué de 229 987 mots d'Afrique du Sud. Les fichiers de 2020 et de 2018 contiennent chacun 10 000 phrases. Au total, notre corpus Wikipedia englobe 1 063 236 mots.

## 4.5. Corpus 5 : Bible

Nous utilisons des textes bibliques issus du projet MyBible, une initiative religieuse à but non lucratif qui met ses ressources à disposition gratuitement à l'adresse https://mybible.zone/en/. Ce projet et ce site web proposent des traductions de la Bible dans diverses langues, y compris toutes les langues écrites d'Afrique du Sud. Le site propose deux versions de la Bible en Setswana, y compris Beibele e e boitshepo, la version de 1907 qui utilise l'orthographe initiale et fondatrice du Setswana, et Beibele, la version de 1970 qui emploie l'orthographe raffinée du Setswana. Pour notre article, nous utilisons la version de 1970.

Les textes bibliques ont été acquis au format SQL3lite depuis https://www.ph4.org/b4_index.php#google_vignette. Toutes les procédures d'extraction de texte ont été exécutées à l'aide de scripts bash. Les textes bibliques sont classés en trois sections : (i) Livres de la Bible avec 66 lignes de données, (ii) versets avec 31 170 lignes de données, et (iii) informations avec 10 lignes de données. Spécifiquement pour notre corpus, nous avons extrait des textes de versets, qui ont ensuite subi des processus de nettoyage impliquant la suppression des numéros de livres, des titres de chapitres et des informations sur les versets.

Les textes religieux ont été employés avec succès pour le développement de corpus dans des études antérieures. Par exemple, Agic et Vulic (2019) ont utilisé des articles parallèles du site web des Témoins de Jéhovah. De même, Marivate et al. (2020) utilisent des textes bibliques en Sepedi et en Setswana pour une tâche de classification de sujets d'actualité.

## 4.6. Une liste de fréquences commune

Nous avons généré des listes de fréquences différentes pour les cinq ensembles de corpus en calculant des fréquences pour chacun. Pour atteindre l'indépendance par rapport à la taille du corpus, nous avons utilisé des fréquences relatives (Brysbaert et al., 2011; Leech et al., 2014; Van Heuven et al., 2014), normalisant les listes de fréquences à des occurrences par million de jetons. Nous avions pour objectif d'extraire les 3 500 mots les plus fréquents de chaque ensemble de données. Certains ensembles de données contenaient plus de mots au même niveau de fréquence et ont donc donné lieu à des listes plus longues que les 3 500 mots prévus. La première étape a abouti à un total de 17 683 mots.

Notre objectif principal était de nous retrouver avec une liste de 3 000 mots uniques basés sur les cinq corpus. Pour ce faire, nous avons fusionné les cinq listes et vérifié les fréquences relatives moyennes des entrées en double. Par exemple, l'entrée 'go' apparaissait dans les cinq listes avec des fréquences relatives de 28 315,13, 52 336,45, 52 303,89, 61 184,58 et 58 209,73, respectivement. La fréquence moyenne résultante pour cette entrée est de 50 470,156 par million de mots. Nous avons ensuite identifié les 3 000 mots les plus fréquemment utilisés pour la liste finale.

## 5. Analyse de la liste

La liste initiale de 3 000 mots a été générée automatiquement à l'aide de mesures de fréquence basées sur le corpus et affinée ultérieurement par un traitement manuel. La compilation finale comprend 3 006 entrées, dont 2 992 entrées uniques et 14 cas d'orthographes variées. La section suivante fournit un compte rendu détaillé du processus de curation impliqué dans la finalisation de la liste.

## 5.1. Mots non setswanais

Nous avons identifié un total de 60 instances de mots non-setswana à partir de notre liste initiale. Les exemples comprenaient des termes tels que « superintendent », « of » et « society ». Ces instances ont été exclues en raison de leur absence d'origine Setswana et de l'absence d'orthographe Setswana normalisée ou naturalisée. Néanmoins, des termes contemporains tels que 'corona' et 'covid', qui s'écartent également de l'orthographe Setswana naturalisée, ont été conservés sur la liste. Cette décision est fondée sur la reconnaissance du fait que ces termes sont plus couramment utilisés dans les langues autochtones d'Afrique du Sud que leurs équivalents traduits.

De plus, en tenant compte des conventions linguistiques en Afrique du Sud, où certains termes comme les noms de mois, par exemple, « June », sont généralement écrits en anglais, nous avons conservé ces noms dans la liste. Cependant, il est important de noter que tous les mois ne sont pas inclus dans la liste, car nous visons à maintenir la fidélité au corpus sous analyse. Néanmoins, il existe également des exemples de mois à Setswana, tels que «Motsheganong».

Nous avons également choisi d'inclure l'entrée 'eish' dans notre liste actuelle. Tout en reconnaissant son association principale avec un magazine, nous avons choisi de la conserver en raison de son usage supplémentaire comme exclamation empruntée. Ce terme apparaît dans trois de nos corpus sources, où dans le corpus NCHLT, il se rapporte spécifiquement au magazine 'Eish', et dans les corpus Wikipedia et Autshumato, où il est employé à la fois comme exclamation et en référence au magazine.

## 5.2 Abréviations et acronymes

La liste initiale comprenait des mots abrégés. Par exemple, des mots tels que 'Mopofof' - représentant 'Mopofofesa' comme chez le professeur, 'Moh' - représentant 'Mohumagadi' comme chez Miss, et 'jj' - pour etc. ont été identifiés. Ces abréviations ont été conservées bien que les versions complètes de 'Moh' et 'jj' aient été exclues de la liste pour maintenir la fidélité à la liste.

Nous avons également noté qu'il y avait des cas d'abréviations inconnues, telles que l'ambiguë 'rbn.' Un examen plus approfondi a révélé que cette abréviation provenait de la collection Autshumato, où 'rbn' faisait référence à une entreprise spécifique. Par conséquent, nous avons décidé de supprimer cette entrée particulière de notre liste.

Deuxièmement, la liste initiale comprenait des acronymes, tels que «SARS» représentant le South African Revenue Service. Il est à noter que ces entrées étaient prévues puisque certains textes provenaient de sites Web gouvernementaux. Parmi les acronymes attendus figuraient « SAPS », désignant le South African Police Service, et « SASSA », un acronyme pour le South African Social Security Agency, le distributeur actuel des allocations sociales en Afrique du Sud. Malgré cette anticipation, nous avons pris la décision de supprimer ces entrées de la liste. La justification de ce choix est double. Premièrement, ces acronymes s'écartent des mots typiques en Setswana car ils ne sont pas normalisés en Setswana. De plus, ils démontrent une inclination spécifique vers un domaine, ce qui justifie davantage leur exclusion.

Néanmoins, nous avons choisi de conserver les acronymes mondialement reconnus tels que « VIH » (virus de l'immunodéficience humaine), car ils sont typiques dans les textes en tswana au-delà de notre corpus actuel. Il est intéressant de noter que la liste de mots fréquemment utilisés en sesotho (Sibeko et De Clercq, 2023) contient à la fois le VIH et le sida, alors que notre liste ne contient que le VIH.

## 5.3 Noms propres

Notre liste initiale contenait au moins 80 noms propres, dont la plupart étaient des noms bibliques tels que 'Gileate, Hesekia, Abesalomo, Jerobeame, Nebukatenesare' et autres. Ces noms bibliques ont été naturalisés en Setswana et utilisent l'orthographe attendue en Setswana.

La liste contenait également des noms d'icônes africaines telles que Mandela, ainsi que des noms de lieux tels que 'Francistown, Gauteng, Zimbabwe', et 'Vaal'. Comme Sibeko et De Clercq (2023), nous avons supprimé toutes les occurrences de noms propres. Selon Dale et Chall (1948), les noms propres sont automatiquement considérés comme familiers et n'ont pas besoin d'être inclus dans la liste de fréquence.

## 5.4. Significations à multiples facettes

Il y avait des cas de mots où le sens n'était pas clair et pas immédiatement discernable sans contexte. Par exemple, l'entrée 'time' pourrait être interprétée en anglais pour faire référence au passage du temps, à un moment précis ou à la planification. Dans les langues sotho-tswana, il peut également être utilisé pour signifier l'arrêt. De même, l'entrée 'rate' peut signifier évaluer ou estimer en anglais, mais elle porte généralement le sens d'amour en setswana.

Malgré le potentiel d'ambiguïté, ces mots sont conservés dans la liste finale. Cette décision reconnaît les diverses significations qu'ils portent dans différents contextes linguistiques. L'hypothèse est que les lecteurs interpréteront ces mots en Setswana plutôt qu'en anglais lors de la lecture de textes en Setswana. Il est important de noter, cependant, que cette ambiguïté peut poser des défis dans le contexte de textes multilingues où le lecteur devra s'appuyer sur le contexte pour aider à identifier la langue correcte et la prononciation attendue lors de la lecture.

## 5.5. Mots inattendus

La liste préliminaire incluait des entrées inattendues. Tout d'abord, il y avait des cas d'entrées non-mots, y compris des valeurs numériques. Tous ces cas ont été supprimés de la liste car nous ne nous intéressons qu'aux mots fréquemment utilisés.

Deuxièmement, nous avons observé la présence de lettres isolées telles que 'p', 'd', 'g', 's', 'f', 'i' et d'autres. Nous avons systématiquement supprimé tous les cas de consonnes isolées de la liste parce que les consonnes individuelles ne sont pas considérées comme des mots Setswana valides.

En outre, même si certaines voyelles setswana peuvent constituer des mots dans un contexte de voyelles seulement (par exemple, 'a', 'e' et 'o'), il a été noté que la voyelle 'i' ne sert pas comme un mot autonome. Par conséquent, nous avons exclu cette entrée particulière de notre liste. Néanmoins, une analyse plus approfondie a révélé que la lettre 'i' était principalement utilisée comme référence de numéro de page dans les documents sources.

## 5.6. Épellation et orthographe

Il existe un consensus général selon lequel les langues sotho-tswana manquent de règles spécifiques pour régir l'orthographe des mots empruntés (Chokoe, 2020). Cette absence de réglementations claires s'est manifestée dans notre liste préliminaire, entraînant des orthographes diverses pour le mot 'Afrika.' Nous avons identifié au moins quatre variations d'orthographe, incluant 'Africa,' 'Aferika,' 'Aforika,' et 'Afrika,' l'orthographe 'Afrika' présentant une fréquence plus élevée. Ces orthographes variées sont également associées à des termes connexes tels que 'Afrikaborwa,' 'Afrikan,' 'Pan-Afrikan,' 'MoAfrikan,' 'MaAfrikan,' et d'autres. De même, des variations d'orthographe supplémentaires donnent des mots similaires, comme on le voit avec 'MoAforikaborwa' et 'MaAforikaborwa', tous deux présents dans la liste. Comme Sibeko et De Clercq (2023), nous avons conservé toutes les variations d'orthographe tant qu'elles faisaient partie de la liste initiale de mots fréquemment utilisés.

Nous avons été surpris de rencontrer un mot mal orthographié, à savoir 'bosetphaba', qui, après analyse contextuelle, a été identifié comme provenant du corpus NCHLT. La forme correcte est 'bosetšhaba', qui signifie 'national'. En le reconnaissant comme une erreur typographique, nous avons exclu cette entrée de notre liste actuelle.

De plus, nous avons observé l'inclusion de mots composés de tirets comme 'ba-na-le' et 'bokonebophirima'. Pour maintenir un focus sur les mots individuels, nous avons choisi de retirer les entrées composées de notre liste.

## 6. Discussion et conclusion

Cet article contribue au développement de mesures de lisibilité pour les langues indigènes moins dotées en ressources d'Afrique australe en élaborant une liste de mots fréquemment utilisés pour le setswana. Comme détaillé dans l'introduction, l'accent scientifique mis sur les langues à ressources élevées a laissé les langues autochtones d'Afrique australe, y compris le setswana, sous-étudiées dans le domaine de la lisibilité du texte.

Notre recherche vise à améliorer l'applicabilité des mesures de lisibilité au groupe de langues Sotho-Tswana. Nous nous inspirons du projet de lisibilité du sesotho en cours (Sibeko, 2023), qui introduit des mesures de lisibilité basées sur la longueur des mots, les informations sur les syllabes et les listes de fréquences. Cependant, avant notre travail, le transfert des mesures basées sur des listes de fréquence au Setswana a rencontré des difficultés car il n'existait pas de liste soigneusement sélectionnée spécifiquement adaptée pour une intégration dans les mesures de lisibilité.

Inspirés par les mesures de lisibilité établies telles que l'indice de lisibilité Dale-Chall actuellement en développement pour le sesotho, notre objectif est d'adapter et d'étendre ces mesures pour répondre au contexte linguistique unique du setswana. L'indice Dale-Chall, connu pour s'appuyer sur une liste de mots familiers, s'aligne parfaitement avec notre objectif d'améliorer la lisibilité en privilégiant les mots fréquemment utilisés en setswana.

## 6.1. Défis et prise de décision

Le choix de préserver les variations orthographiques diverses s'aligne sur les recommandations de la littérature (Sibeko et De Clercq, 2023), soulignant l'importance de l'inclusivité dans la représentation des mots fréquemment utilisés. Cette stratégie se traduit par une liste de fréquences complète qui reconnaît la richesse linguistique et les variations présentes en setswana. Bien que cette approche puisse introduire un éventuel désaccord entre la fréquence d'utilisation des mots et leur inclusion dans notre liste, étant donné que les mots peuvent être orthographiés différemment dans divers corpus, elle néglige l'aspect de familiarité pour les lecteurs rencontrant différentes formes de mots. Par conséquent, nous avons choisi d'inclure les mots seulement s'ils faisaient partie de notre liste restreinte originale, en maintenant la fidélité aux apparitions réelles des mots dans la liste.

De plus, comme illustré dans la Section 5, le processus de nettoyage manuel a révélé des mots non-Setswana, des abréviations, des noms propres et des termes inattendus au sein du corpus Setswana. Ces occurrences ont présenté des défis lors de la compilation de la liste de fréquence. Par conséquent, des mesures spécifiques ont été mises en œuvre pour soit conserver, soit exclure ces mots de la liste.

## 6.2. Implications

Les défis de littératie auxquels sont confrontés les apprenants de langues scolaires, en particulier ceux du groupe linguistique Sotho-Tswana, soulignent la nécessité pressante de mesures de lisibilité adaptées. Malheureusement, le Setswana n’est pas bien exploré dans le traitement du langage naturel (Marivate et al., 2023). Notre objectif est d'aider à combler cette lacune en nous concentrant sur les études de lisibilité spécifiquement dans le contexte du Setswana.

La présence de notre liste de mots fréquemment utilisés offre non seulement des informations précieuses sur les compétences en lecture, mais sert également de base pour le développement de mesures de lisibilité adaptées au Setswana qui reposent sur des listes de mots fréquemment utilisés. Ces mesures permettront aux éducateurs et aux décideurs politiques de prendre des décisions éclairées, en offrant des stratégies ciblées pour améliorer la maîtrise de la lecture parmi les apprenants du setswana.

Les développeurs de programmes, les évaluateurs et les enseignants peuvent utiliser notre liste pour guider leurs décisions d'enseignement des langues et pour sélectionner des matériaux de lecture souhaitables à la fois pour l'instruction et l'évaluation.

## 6.3. Limites

Notez que les mesures traditionnelles de lisibilité sont critiquées pour de nombreux défauts. Par exemple, selon Crossley et al. (2021), ces mesures s'appuient couramment sur des estimations pour mesurer les caractéristiques lexicales et syntaxiques, tout en négligeant les caractéristiques sémantiques et les structures discursives, la cohésion textuelle et les éléments de style. En outre, ils sont limités dans les critères de lecture et sont sensibles au groupe d'âge et à la spécificité de domaine. Le présent document ne traite pas de ces lacunes. Au lieu de cela, il se concentre sur le développement d'une liste de fréquences qui peut être utilisée dans le développement d'une mesure de lisibilité basée sur la fréquence, basée sur l'indice Dale-Chall.

Les résultats présentés dans ce document présentent certaines limites. Notamment, contrairement aux exemples de la formule de lisibilité Spache (Spache, 1953) et aux exemples de l'indice Dale-Chall (Dale et Chall, 1948), notre approche consiste à compiler une liste de mots fréquemment utilisés dans la langue, tels qu'observés à partir de corpus limités, plutôt que de l'adapter à des lecteurs spécifiques d'un niveau scolaire particulier.

Bien que notre recherche ait été limitée par l'absence de textes originaux en Setswana conçus à des fins éducatives et par l'indisponibilité des corpus éducatifs qui en découle, nous recommandons que les recherches futures explorent le développement de listes par niveau scolaire. Cette amélioration pourrait améliorer l'applicabilité et la précision des mesures de lisibilité pour Setswana, en les alignant plus étroitement sur le contexte éducatif et les niveaux de lectorat ciblés dans les études linguistiques.

## 6.4 Orientations futures

En nous appuyant sur nos travaux actuels, nous envisageons plusieurs pistes de recherche future qui contribueront au développement continu des mesures de lisibilité en setswana et à des études linguistiques plus larges. Des études comparatives avec d'autres langues sotho-tswana, telles que le sepedi et le sesotho, permettront d'identifier des modèles linguistiques partagés et d'évaluer la généralisabilité des listes de mots communes et des mesures de lisibilité dans ces langues.

De plus, l'extension de l'analyse d'une liste de fréquences, telle que celle proposée dans cet article, pour inclure une diversité de types de textes, notamment des matériaux éducatifs, des articles de presse et des œuvres littéraires, permettra de capturer l'étendue de l'utilisation de la langue Setswana et d'assurer l'applicabilité des mesures de lisibilité dans différents contextes. Néanmoins, l'exploration des méthodologies de compétence en lecture dans les langues africaines, telle que préconisée par Probert (2019), reste impérative.

## Notes

1 Accédez au corpus NCHLT à https://repo.sadilar.org/handle/20.500.12185/343

2 Accéder au corpus Autshumato à https://repo.sadilar.org/handle/20.500.12185/404

## 7. Références bibliographiques

Željko Agic and Ivan Vulic. 2019. Jw300: A widecoverage parallel corpus for low-resource languages. In Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics, pages 3204-3210. Association for Computational Linguistics.

Jaco Badenhorst and Febe De Wet. 2022. NCHLT auxiliary speech data for ASR technology development in South Africa. Data in Brief, 41:107860.

Alan Bailin and Ann Grafstein. 2001. The linguistic assumptions underlying readability formulae: A critique. Language & Communication, 21(3):285-301.

William. G Bennett, Maxine Diemer, Justine Kerford, Tracy Probert, and Tsholofelo Wesi. 2016. Setswana (South African). Journal of the International Phonetic Association, 46:235-246.

Marc Brysbaert, Matthias Buchmeier, Markus Conrad, Arthur M Jacobs, Jens Bölte, and Andrea Böhl. 2011. The word frequency effect. Experimental psychology.

Xiaobin Chen and Detmar Meurers. 2016. Characterizing text difficulty with word frequencies. In Proceedings of the 11th workshop on innovative use of nlp for building educational applications, pages 84-94.

Sekgaila Chokoe. 2020. Spell it the way you like: The inconsistencies that prevail in the spelling of Northern Sotho loanwords. South African Journal of African Languages, 40(1):130-138.

Kevyn Collins-Thompson. 2014. Computational assessment of text readability: A survey of current and future research. ITL-International Journal of Applied Linguistics, 165(2):97-135.

Scott A Crossley, Aron Heintz, Joon Choi, Jordan Batchelor, Mehrnoush Karimi, and Agnes Malatinszky. 2021. The commonlit ease of readability (clear) corpus. In EDM.

Edgar Dale and Jeanne Sternlicht Chall. 1948. A formula for predicting readability: Instructions. Educational research bulletin, pages 37-54.

Orphée De Clercq and Véronique Hoste. 2016. All mixed up? Finding the optimal feature set for general readability prediction and its application to English and Dutch. Computational Linguistics, 42(3):457-490.

William H DuBay. 2004. The principles of readability. Technical report, Impact Information, Costa Mesa.

Bernardt Duvenhage. 2019. Short text language identification for under resourced languages. arXiv preprint arXiv:1911.07555.

Roald Eiselen and Martin Puttkamer. 2014. Developing text resources for ten South African languages. In Proceedings of the 9th International Conference on Language Resources and Evaluation, Reykjavik, Iceland, pages 3698-3703, Paris. European Language Resources Association (ELRA).

Luke Fraser. 2023. These are the most spoken languages in South Africa. Technical report, BusinessTech. Accessed: 11 Jan 2024.

Revathi Gopal, Mahendran Maniam, Noor Alhusna Madzlan, Siti Shuhaida binti Shukor, and Kanmani Neelamegam. 2021. Readability formulas: An analysis into reading index of prose forms. Studies in English Language and Education, 8(3):972-985.

Geoffrey Leech, Paul Rayson, et al. 2014. Word frequencies in written and spoken English: Based on the British National Corpus. Routledge.

Olemme Lekgoko and Heather Winskel. 2008. Learning to read Setswana and English: Crosslanguage transference of letter knowledge, phonological awareness and word reading skills. Perspectives in Education, 26(4):57-73.

Vukosi Marivate, Moseli Mots'Oehli, Valencia Wagner, Richard Lastrucci, and Isheanesu Dzingirai. 2023. Puoberta: Training and evaluation of a curated language model for setswana. In Artificial Intelligence Research. SACAIR 2023. Communications in Computer and Information Science.

Vukosi Marivate, Tshephisho Sefara, Vongani Chabalala, Keamogetswe Makhaya, Tumisho Mokgonyane, Rethabile Mokoena, Abiodun Modupe, and South Africa CSIR. 2020. Pedi. arXiv preprint arXiv:2004.13842.

Jacques McDermid Heyns. 2007. Readability statistics for Afrikaans. In LSSA/SAALT/SAALA Joint Annual Conference, North-West University, Potchefstroom, South Africa.

Cindy McKellar. 2022. Autshumato Monolingual Sesotho Corpus. ONLINE. South African Centre for Digital Language Resources. Available at: https://repo.sadilar.org/handle/20.500.12185/583 Accessed: 28 Jan 2023.

Cindy Mckellar. 2023. Autshumato English-Sesotho Parallel Corpora. Southern African Centre for Digital Language Resources. Available at: https://repo.sadilar.org/handle/20.500. 12185/577[Lastmodified:15Dec.2022].

Munyane Mophosho, Lesedi L Sebole, and Katijah Khoza-Shangase. 2019. The reading comprehension of grade 5 Setswana-speaking learners in rural schools in South Africa: Does home language matter? Per Linguam: a Journal of Language Learning= Per Linguam: Tydskrif vir Taalaanleer, 35(3):59-73.

Neil Newbold and Lee Gillam. 2010. Populating a framework for readability analysis: Word frequency = word difficulty.

Thapelo Otlogetswe. 2001. The BNC design as a model for a setswana language corpus. extraction, page 1.

Tracy N Probert. 2019. A comparison of the early reading strategies of isiXhosa and Setswana first language learners. South African Journal of Childhood Education, 9(1):1-12.

Violet Maphefo Sefolaro Pule and Kgomotso Theledi. 2023. The impact of the presence of prosodic features (tone markings) on comprehending Setswana words in reading. African Journal of Inter/Multidisciplinary Studies, 5(1):1-12.

Luz Rello, Ricardo Baeza-Yates, Laura DempereMarco, and Horacio Saggion. 2013. Frequent words improve readability and short words improve understandability for people with dyslexia. In Human-Computer Interaction–INTERACT 2013: 14th IFIP TC 13 International Conference, Cape Town, South Africa, September 2-6, 2013, Proceedings, Part IV 14, pages 203-219. Springer.

Johannes Sibeko. 2023. Using classical readability formulas to measure text readability in Sesotho. In Tomaž Erjavec and Maria Eskevich, editors, Selected papers from the CLARIN Annual Conference 2022, volume 198, pages 120--132. Linköping Electronic Conference Proceedings, Prague, Czechia.

Johannes Sibeko and Orphée De Clercq. 2023. A corpus-based list of frequently used words in Sesotho. In Proceedings of the Fourth workshop on Resources for African Indigenous Language (RAIL 2023), Dubrovnik, Croatia, pages 32-41, New Brunswick, New Jersey, USA. Association for Computational Linguistics.

Johannes Sibeko and Menno Van Zaanen. 2022. Developing a text readability system for Sesotho based on classical readability metrics. In Digital Humanities Conference: Responding to Asian diversity, Book of Abstracts, volume 2022, pages 571-572. Short Paper. Available at: https://dh-abstracts.library.virginia.edu/works?keywords=11133

Accessed: 15 Apr. 2023.

Terry Smith. 2016. The problems with current readability methods and formulas: missing that usability design. In 2016 IEEE International Professional Communication Conference (IPCC), pages 1-4. IEEE.

George Spache. 1953. A new readability formula for primary-grade reading materials. The Elementary School Journal, 53(7):410-413.

Walter JB Van Heuven, Pawel Mandera, Emmanuel Keuleers, and Marc Brysbaert. 2014. Subtlex-uk: A new and improved word frequency database for british english. Quarterly journal of experimental psychology, 67(6):1176-1190.

## 8. Références des ressources linguistiques

Leipzig-Corpora-Collection. 2017. Tswana community corpus based on material from 2017. University of Leipzig. PID https://corpora.uni-leipzig.de?corpusId=tsn_community_2017. Accessed: 2024-01-20.

Leipzig-Corpora-Collection. 2020. Download Corpora Tswana. University of Leipzig. PID https://wortschatz.uni-leipzig.de/en/download/Tswana#tsn_wikipedia_2021. Accessed: 2024-01-20.

Marivate, Vukosi and Wagner, Valencia. 2023. Daily News - Dikgang Categorised News Corpus. Data Science for Social Impact Group. PID https://github.com/dsfsi/PuoBERTa.
