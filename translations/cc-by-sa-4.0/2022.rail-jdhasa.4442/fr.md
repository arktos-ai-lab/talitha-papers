> Machine translation (fr) of "Deriving lexical statistics for psycholinguistic research on isiXhosa" by Robyn Berghoff, https://upjournals.up.ac.za/index.php/dhasa/article/view/4442, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Dériver des statistiques lexicales pour la recherche psycholinguistique sur l’isiXhosa

Robyn Berghoff

**Affiliations**  
Berghoff, Robyn  
Stellenbosch University  


## Résumé

Les recherches psycholinguistiques sur l'isiXhosa et les langues bantoues apparentées sont rares. Pour la recherche sur le traitement lexical en particulier, un prérequis est la disponibilité de données sur les propriétés lexicales qui impactent la reconnaissance des mots, telles que la fréquence des mots et la densité de voisinage. Cet article décrit la dérivation de ces statistiques et des statistiques lexicales connexes à partir d'un corpus isiXhosa nouvellement créé de 4,8 millions de mots. Il passe ensuite en revue les applications potentielles d'une telle base de données lexicale pour la recherche sur l'acquisition du langage, le développement du langage et le traitement du langage. Le document se termine par des recommandations pour la poursuite des travaux dans ce domaine.

## Mots-clés

isiXhosa, psycholinguistique, statistiques lexicales, traitement lexical, corpus

## Introduction

La grande majorité de la recherche sur l'acquisition et le traitement du langage se concentre sur un petit sous-ensemble des langues du monde, en particulier celles des branches germanique et romane de la famille des langues indo-européennes (Bylund, Khafif et Berghoff 2022; Norcliffe, Harris et Jaeger 2015). Parmi les groupes linguistiques négligés, les langues bantoues sont particulièrement peu étudiées. Cette focalisation étroite en termes de typologie linguistique limite sévèrement la généralisabilité des théories du traitement du langage.

L'isiXhosa est une langue agglutinante, ce qui signifie que ses mots sont généralement constitués de plusieurs morphèmes qui sont concaténés d'une manière relativement transparente. Elle présente deux caractéristiques particulières qui la distinguent des langues agglutinantes plus couramment étudiées comme le turc, le basque et le hongrois (voir van de Velde et al. 2019 pour une discussion). Tout d’abord, à côté de la suffixation, il fait un usage généralisé de la préfixation pour produire des mots morphologiquement complexes. Ensuite, il possède un système de genre grammatical ou de classe nominale riche, selon lequel les noms sont divisés en 15 groupes, l'accord de classe nominale étant marqué sur plusieurs constituants syntaxiques (par exemple, les verbes, les adjectifs/relatifs, les déterminants). Comme les propriétés spécifiques à la langue de l'affixation (par ex., Boudelaa & Marslen-Wilson 2011) et du genre grammatical (par ex., Colé, Pynte & Andriamamonjy 2003) sont connues pour affecter le traitement du langage, les examens psycholinguistiques de l'isiXhosa et des langues apparentées ont beaucoup à apporter aux théories du traitement lexical et morphologique. De plus, en termes d'applications pratiques, la compréhension de la manière dont le développement du langage et de la littératie se déroule dans des langues de ce type est indispensable pour concevoir des matériaux d'enseignement et d'intervention pour les jeunes apprenants (Pretorius 2019).

Une condition sine qua non de la recherche psycholinguistique robuste sur le traitement lexical sont les statistiques sur certaines propriétés lexicales connues pour influencer la reconnaissance des mots, telles que la fréquence des mots et la densité de voisinage. Des bases de données de telles statistiques sont de plus en plus développées et mises à disposition pour faciliter la recherche sur les langues plus couramment étudiées. Parmi les exemples, on trouve GreekLex, pour le grec (Ktori, van Heuven & Pitchford 2008) ; EsPal, pour l'espagnol (Duchon et al. 2013) ; Aralex, pour l'arabe moderne standard (Boudelaa & Marslen-Wilson 2010) ; StimulStat, pour le russe (Alexeeva, Slioussar & Chernova 2018) ; la Chinese Lexical Database, pour le mandarin (Sun et al. 2018) ; P-PAL, pour le portugais (Soares et al. 2018) ; et E-Hitz, pour le basque (Perea et al. 2006) ; ainsi que CLEARPOND (Cross-Linguistic Easy Access Resource for Phonological and Orthographic Neighbourhood Densities ; Marian et al. 2012), qui fournit des données lexicales pour cinq langues européennes largement examinées.

Les ressources sur les langues autochtones africaines sont rares. Il n’est donc pas surprenant que les types de données nécessaires à une recherche psycholinguistique robuste sur le traitement et l’acquisition de l’isiXhosa fassent défaut. Cet article décrit la génération de statistiques lexicales pour isiXhosa. Il identifie et définit les types de statistiques lexicales nécessaires à la recherche sur le traitement lexical de l'isiXhosa et illustre leur calcul sur la base d'un corpus isiXhosa de 4,8 millions de mots nouvellement créé. L'article se conclut par une revue des applications potentielles d'une telle base de données et par l'esquisse des étapes pour les travaux futurs.

## Caractéristiques à inclure dans une base de données de statistiques lexicales pour isiXhosa

Cette section passe en revue les caractéristiques qui devraient, au minimum, être incluses dans une base de données de statistiques lexicales pour isiXhosa. Cette vue d'ensemble se concentre sur les caractéristiques qui sont pertinentes spécifiquement à la reconnaissance visuelle des mots.

## Fréquence

La fréquence est sans doute la variable la plus importante dans les études sur le traitement lexical (van Heuven et al. 2014), où les mots plus fréquents sont traités plus rapidement que les mots moins fréquents. Cet effet peut être expliqué sur la base de l'activation lexicale, selon laquelle les mots rencontrés plus fréquemment ont des niveaux d'activation au repos plus élevés et sont donc accessibles plus rapidement que leurs homologues à faible fréquence. La fréquence d'un mot est calculée en fonction du nombre de ses occurrences dans un corpus. Elle peut être exprimée sur l'échelle de fréquence Zipf standardisée, où la moitié inférieure de l'échelle (1-3) représente les mots de basse fréquence et la moitié supérieure de l'échelle (4-6) représente les mots de haute fréquence (les mots avec une fréquence Zipf supérieure à 7 ont tendance à être des mots de fonction). La fréquence Zipf est calculée en log10 (fréquence par million de mots) + 3 (van Heuven et al. 2014).

## Longueur du mot

La longueur du mot est calculée simplement comme le nombre de lettres dans un mot donné. Au moins en anglais, il a été démontré qu'elle a des effets non linéaires sur la reconnaissance des mots, indépendamment d'autres variables telles que le nombre de syllabes (New et al. 2006).

## Statistiques de voisinage

Un voisin d'un mot donné est tout mot qui peut être créé en substituant, en ajoutant ou en supprimant une seule lettre (par exemple, le isiXhosa ubisi «lait» a comme voisins ubusi «miel» et usisi «soeur», entre autres). La densité de voisinage d'un mot est égale au nombre de ses voisins. Les effets de densité de voisinage sur le traitement lexical se manifestent généralement par des ralentissements de traitement pour les mots avec plus de voisins (Andrews 1997), ce qui est attribué au fait que lors de la reconnaissance d'un mot avec de nombreux voisins, de nombreux éléments lexicaux candidats deviennent activés et doivent par conséquent être inhibés pour que l'élément correct soit sélectionné. Une variable connexe qui est également importante est la fréquence de voisinage, qui est la fréquence moyenne des voisins d'un mot donné. Ici, un mot avec des voisins de haute fréquence prend plus de temps à reconnaître qu'un mot avec des voisins de faible fréquence (par exemple, Brysbaert, Mandera & Keuleers 2018).

## Méthode

## Le corpus

Le calcul des statistiques lexicales nécessite un corpus important de matériaux linguistiques contemporains. Le corpus utilisé dans cet article a été créé en combinant les corpus isiXhosa fournis dans la Leipzig Corpora Collection (Goldhahn, Eckart & Quasthoff 2012) avec un nouveau corpus créé par l'auteur à partir du site d'actualités isiXhosa en ligne Isolezwe lesiXhosa. Les corpus isiXhosa de Leipzig sont constitués de textes collectés aléatoirement sur le web et sur Wikipedia et couvrent donc une multitude de sujets (voir Goldhahn, Eckart & Quasthoff 2012 pour discussion). Le corpus Isolezwe, quant à lui, contient des reportages sur l'actualité générale, le sport, le divertissement, les opinions et l'agriculture. Ce corpus a été créé via le moissonnage de données en utilisant le package rvest (version 1.0.2 ; Wickham 2021) dans l'environnement R pour le calcul statistique (version 4.2.1 ; R Core Team 2022). L'ensemble de l'historique des articles disponible depuis la création du site (26 juin 2015) jusqu'au 24 juin 2022 a été extrait.

Pour créer le corpus final, chaque sous-corpus a été lu dans R et soumis à un nettoyage de base (par exemple, suppression des chiffres) à l'aide du package stringr (version 1.4 ; Wickham 2019). La tokenisation de chaque sous-corpus a ensuite été réalisée à l'aide de la fonction "unnest_tokens" du package tidytext (version 0.3.3 ; Silge & Robinson 2016).

Les détails de chaque composante du corpus final sont présentés dans le tableau 1.

Tableau 1: Composantes du corpus final

p03-01.png

Tous les sous-corpus ont été combinés avant tout traitement ultérieur. Le corpus final contenait 466 957 tokens distincts. Cette taille est comparable à celle utilisée dans le calcul des statistiques lexicales pour d'autres langues (par exemple, le basque ; Perea et al. 2006).

## Calcul des statistiques

Les nombres de fréquence ont été obtenus à l'aide du package tidytext dans R. Ces nombres bruts ont ensuite été convertis en fréquences de Zipf. Les autres statistiques lexicales ont été calculées à l'aide du programme LexiCAL (Chee et al. 2021). Cette application Windows permet à l'utilisateur de saisir un fichier de corpus, qui spécifie les tokens et leur fréquence dans le corpus, pour toute langue alphabétique. Elle calcule ensuite les métriques sélectionnées et sort les résultats dans un fichier séparé. Pour les statistiques de voisinage, il fournit également les voisins des mots qui sont inclus dans le corpus.

## Extraits de la base de données

Cette section présente des extraits de la base de données. Pour commencer, le Tableau 2 liste les 20 mots les plus fréquents dans le corpus avec leurs fréquences brutes et de Zipf.

Tableau 2: Vingt mots les plus fréquents dans le corpus

p03-02.png

Sans surprise, la majorité des 20 mots les plus fréquents sont des mots grammaticaux, à l'exception de uthi « tu dis/il ou elle dit », (i)nto « chose », abantu « gens », kakhulu « très, beaucoup », afrika « Afrique » et utshilo « tu as dit/il ou elle a dit ».

Le facteur crucial dans la conception d'expériences psycholinguistiques n'est toutefois pas la fréquence brute des items, mais l'appariement de la fréquence et des autres propriétés lexicales entre les items. Le tableau 3 présente des exemples d'entrées de base de données pour dix items sélectionnés aléatoirement dans le corpus. En créant une expérience, l'objectif serait de sélectionner des éléments lexicaux qui correspondent aussi étroitement que possible aux valeurs numériques du tableau 3.

## Applications

Une base de données de statistiques lexicales telle que celle décrite dans cet article a de nombreuses applications pour la recherche sur le traitement lexical, qui nécessite un contrôle minutieux des propriétés au niveau des mots telles que la fréquence et la densité de voisinage. Il y a, par exemple, un intérêt significatif à savoir si la reconnaissance des mots morphologiquement complexes a lieu au niveau du mot entier ou si elle implique de décomposer un mot en ses morphèmes constitutifs. À la connaissance de l'auteur, une seule étude a étudié cette question en relation avec une langue bantoue (Setswana; Ciaccio, Kgolo & Clahsen 2020). La mesure dans laquelle le traitement morphosyntaxique diffère entre les locuteurs de langue maternelle et les locuteurs de langue seconde d’une langue est également théoriquement importante et sous-étudiée de façon critique en ce qui concerne les langues bantoues (Spinner 2011).

Un autre ensemble d'applications se situe dans le domaine du développement du langage. Les bases de données lexicales du type décrit dans cet article ont été développées spécifiquement pour être utilisées dans les études psycholinguistiques sur le traitement du langage chez les enfants et pour évaluer les matériels d'alphabétisation visant à développer les lecteurs (p. ex., Corral, Ferrero et Goikoetxea 2009; Masterson et coll. 2010; Schroeder et coll. 2015; Terzopoulos et coll. 2017). Pour de telles applications, les corpus sont généralement compilés en utilisant une grande sélection de matériel créé spécifiquement pour les enfants afin d'augmenter la probabilité que les enfants aient été exposés au langage qu'il contient.

Tableau 3 : Exemples d'entrées de base de données

p04-01.png

p05-01.png

## Limites et suggestions pour la suite des travaux

Il existe plusieurs étapes supplémentaires qui peuvent être prises pour améliorer et étendre la base de données présentée dans cet article. D'une part, après avoir compilé le corpus et avant de le traiter pour dériver des statistiques lexicales, il serait souhaitable de croiser la liste de mots du corpus avec une liste de mots provenant d'un dictionnaire officiel isiXhosa. Ce processus de croisement permettrait de filtrer les fautes d'orthographe du corpus, réduisant ainsi le nombre de voisins erronés identifiés, et faciliterait également l'élimination des mots non isiXhosa. Au moment de la rédaction, aucune telle liste de mots de dictionnaire n'a pu être obtenue au format numérique, et donc cette étape n'a pas encore été prise.

Une autre considération notable est que tous les calculs ci-dessus étaient basés sur les formes de mots plutôt que sur les racines ou les lemmes. Cela signifie qu'au lieu, par exemple, de traiter -lala comme un lemme qui apparaît dans ukulala, uyalala, siyalala, et ainsi de suite, chacune de ces formes de mots est traitée comme un élément individuel. Cela peut également conduire à une inflation de la densité de voisinage (cependant, les mots affectés par ce problème - plus particulièrement les verbes - auront tendance à avoir leur densité de voisinage gonflée dans la même mesure). Il reste une question empirique de savoir si ce sont les propriétés de la forme du mot ou du lemme qui sont de meilleurs prédicteurs, par exemple, de la latence de reconnaissance des mots dans des langues telles que l'isiXhosa. Pour répondre à cette question, les lemmes pourraient être obtenus à partir de données de corpus à l’aide d’un analyseur morphologique (p. ex., du Toit & Puttkammer 2021).

Enfin, le travail présenté ici pourrait également être étendu en dérivant des statistiques phonologiques pour isiXhosa, telles que le nombre de syllabes et la densité phonologique de voisinage. De telles statistiques peuvent être obtenues via LexiCAL si chaque entrée de mot est associée à une transcription phonétique et permettraient de mener des recherches sur le traitement des mots parlés dans la langue.

## Conclusion

Les techniques psycholinguistiques qui peuvent capturer le traitement du langage à mesure qu'il se déroule en temps réel n'ont pas encore été exploitées pour examiner le traitement de l'isiXhosa et des langues connexes. Cet article a discuté d'un type de ressource - une base de données de statistiques lexicales sur la langue, compilée à partir d'un corpus à grande échelle - qui est nécessaire pour combler cette lacune de recherche et réaliser les avantages théoriques et pratiques considérables qui en découlent. La collaboration future entre linguistes (informatiques) et spécialistes des langues permettra d’affiner cette ressource et d’en créer d’autres.

## Remerciements

Ce travail a été rendu possible grâce à une subvention NRF Thuthuka (subvention n ° 138180) décernée à R. Berghoff.

## Références

Alexeeva, S, Slioussar, N & Chernova, D 2018, 'StimulStat: A lexical database for Russian' , Behavior Research Methods, vol. 50, no. 6, pp. 2305-15.

Andrews, S 1997, 'The effect of orthographic similarity on lexical retrieval: Resolving neighborhood conflicts' , Psychonomic Bulletin & Review, vol. 4, no. 4, pp. 439-61.

Boudelaa, S & Marslen-Wilson, WD 2010, 'Aralex: A lexical database for Modern Standard Arabic' , Behavior Research Methods, vol. 42, no. 2, pp. 481-7.

Boudelaa, S & Marslen-Wilson, WD 2011, 'Productivity and priming: Morphemic decomposition in Arabic' , Language and Cognitive Processes, vol. 26, 4-6, pp. 624-52.

Brysbaert, M, Mandera, P & Keuleers, E 2018, 'The word frequency effect in word processing: An updated review ' , Current Directions in Psychological Science, vol. 27, no. 1, pp. 45-50.

Bylund, E, Khafif, Z & Berghoff, R 2022, 'Linguistic and geographic diversity (or lack thereof) in research on second language acquisition and multilingualism' , Applied Linguistics. Manuscript submitted for publication.

Chee, QW, Chow, KJ, Goh, WD, Yap, MJ & Miwa, K 2021, 'LexiCAL: A calculator for lexical variables' , PloS one, vol. 16, no. 4, pp. e0250891.

Ciaccio, LA, Kgolo, N & Clahsen, H 2020, 'Morphological decomposition in Bantu: a masked priming study on Setswana prefixation' , Language, Cognition and Neuroscience, vol. 35, no. 10, pp. 1257-71.

Colé, P, Pynte, J & Andriamamonjy, P 2003, 'Effect of grammatical gender on visual word recognition: Evidence from lexical decision and eye movement experiments' , Perception & Psychophysics, vol. 65, no. 3, pp. 407-19.

Corral, S, Ferrero, M & Goikoetxea, E 2009, 'LEXIN: A lexical database from Spanish kindergarten and first-grade readers' , Behavior research methods, vol. 41, no. 4, pp. 1009-17.

du Toit, Jakobus S. & Puttkammer, MJ 2021, 'Developing core technologies for resource-scarce Nguni languages' , Information, vol. 12, no. 12, p. 520.

Duchon, A, Perea, M, Sebastián-Gallés, N, Martí, A & Carreiras, M 2013, 'EsPal: One-stop shopping for Spanish word properties' , Behavior Research Methods, vol. 45, no. 4, pp. 1246-58.

Goldhahn, D, Eckart, T & Quasthoff, U 2012, 'Building large monolingual dictionaries at the Leipzig Corpora Collection: From 100 to 200 languages' , Proceedings of the 8th International Language Resources and Evaluation.

Ktori, M, van Heuven, W & Pitchford, NJ 2008, 'GreekLex: A lexical database of Modern Greek' , Behavior Research Methods, vol. 40, no. 3, pp. 773-83.

Marian, V, Bartolotti, J, Chabal, S, Shook, A & White, SA 2012, 'CLEARPOND: Cross-Linguistic Easy-Access Resource for Phonological and Orthographic Neighborhood Densities' , PloS one, vol. 7, no. 8, pp. e43230.

Masterson, J, Stuart, M, Dixon, M & Lovejoy, S 2010, 'Children's printed word database: Continuities and changes over time in children's early reading vocabulary ' , British Journal of Psychology, vol. 101, no. 2, pp. 221-42.

New, B, Ferrand, L, Pallier, C & Brysbaert, M 2006, 'Reexamining the word length effect in visual word recognition: New evidence from the English Lexicon Project' , Psychonomic Bulletin & Review, vol. 13, no. 1, pp. 45-52.

Norcliffe, E, Harris, AC & Jaeger, TF 2015, 'Cross-linguistic psycholinguistics and its critical role in theory development: early beginnings and recent advances' , Language, Cognition and Neuroscience, vol. 30, no. 9, pp. 1009-32.

Perea, M, Urkia, M, Davis, CJ, Agirre, A, Laseka, E & Carreiras, M 2006, 'E-Hitz: A word frequency list and a program for deriving psycholinguistic statistics in an agglutinative language (Basque)' , Behavior Research Methods, vol. 38, no. 4, pp. 610-5.

Pretorius, E 2019, 'Getting it right from the start' , in N Spaull & J Comings (eds), Improving Early Literacy Outcomes, BRILL, pp. 63-80.

R Core Team 2022, R: A language and environment for statistical computing, <https://www.R-project.org/>.

Schroeder, S, Würzner, K, Heister, J, Geyken, A & Kliegl, R 2015, 'childLex: a lexical database of German read by children' , Behavior Research Methods, vol. 47, no. 4, pp. 1085-94.

Silge, J & Robinson, D 2016, 'tidytext: Text Mining and Analysis Using Tidy Data Principles in R' , JOSS, vol. 1, no. 3, <http:// dx.doi.org/10.21105/joss.00037>.

Soares, AP, Iriarte, Á, de Almeida, José João, Simões, A, Costa, A, Machado, J, França, P, Comesaña, M, Rauber, A, Rato, A & Perea, M 2018, 'Procura-PALavras (P-PAL): A Web-based interface for a new European Portuguese lexical database' , Behavior Research Methods, vol. 50, no. 4, pp. 1461-81.

Spinner, P 2011, 'Review article: Second language acquisition of Bantu languages: A (mostly) untapped research opportunity ' , Second Language Research, vol. 27, no. 3, pp. 418-30.

Sun, CC, Hendrix, P, Ma, J & Baayen, RH 2018, 'Chinese lexical database (CLD)' , Behavior Research Methods, vol. 50, no. 6, pp. 2606-29.

Terzopoulos, AR, Duncan, LG, Wilson, Mark A. J., Niolaki, GZ & Masterson, J 2017, 'HelexKids: A word frequency database for Greek and Cypriot primary school children' , Behavior Research Methods, vol. 49, no. 1, pp. 83-96.

van de Velde, M, Bostoen, K, Nurse, D & Philippson, G (eds) 2019, The Bantu Languages, Routledge, New York.

van Heuven, W, Mandera, P, Keuleers, E & Brysbaert, M 2014, 'Subtlex-UK: A new and improved word frequency database for British English' , Quarterly Journal of Experimental Psychology, vol. 67, no. 6, pp. 1176-90.

Wickham, H 2019, stringr: Simple, Consistent Wrappers for Common String Operations, <https://CRAN.R-project.org/package=stringr>.

Wickham, H 2021, rvest: Easily Harvest (Scrape) Web Pages, <https://CRAN.R-project.org/package=rvest>.
