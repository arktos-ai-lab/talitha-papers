> Machine translation (fr) of "Developing Bilingual English-Setswana Datasets for Space Domain" by Tebatso G. Moape, Sunday Olusegun Ojo, Oludayo O. Olugbara, https://aclanthology.org/2024.rail-1.4/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Développer des ensembles de données bilingues anglais-setswana pour le domaine spatial

Tebatso G. Moape, Sunday Olusegun Ojo, Oludayo O. Olugbara

**Affiliations**  
Tebatso G. Moape1, Sunday O. Ojo2, Oludayo O. Olugbara3  
University of South Africa1, Durban University of Technology2,3  
28 Pioneer Ave, Florida Park, 1704, South Africa1,  
43 M L Sultan Rd, Greyville, Durban, 4001, South Africa2,3  
, , 

## Résumé

À l’ère numérique actuelle, les langues dépourvues de présence numérique font face à un risque imminent d’extinction. En outre, l'absence de ressources numériques constitue un obstacle important au développement d'applications de traitement du langage naturel (NLP) pour ces langues. Par conséquent, le développement de ressources linguistiques numériques contribue à la préservation de ces langues et permet le développement d'applications. Cet article contribue aux efforts en cours de développement de ressources linguistiques pour les langues sud-africaines, avec un accent particulier sur le setswana, et présente un nouveau jeu de données bilingue anglais-setswana axé sur le domaine spatial. L'ensemble de données a été construit en utilisant la méthode d'expansion. Un sous-ensemble de synsets du domaine spatial en anglais de Princeton WordNet a été professionnellement traduit en Setswana. La soumission initiale des traductions a démontré un taux d'exactitude de 99 % avant la validation. Après validation, des révisions et discussions continues entre traducteurs et validateurs ont abouti à un accord unanime, atteignant finalement un taux de précision de 100 %. La version finale de la ressource a été convertie en un format XML en raison de son cadre lisible par machine, fournissant une hiérarchie structurée pour l'organisation des données linguistiques.

## Mots-clés

Ressources linguistiques numériques, Jeu de données bilingue Setswana, Traduction de domaine spatial

## 1. Introduction

Le Princeton Wordnet (PWN) est une base de données lexicale en anglais formellement introduite par Miller (1995) et développée à l'Université de Princeton. Il a servi de ressource sémantique lexicale primaire pour de nombreux chercheurs dans le domaine du traitement du langage naturel (NLP) et de la linguistique computationnelle (Batsuren et al., 2019). La présence de cette ressource a facilité le développement de diverses applications de TAL telles que la traduction automatique, la recherche d'information et les outils de désambiguïsation du sens des mots. De plus, la disponibilité du PWN a permis aux chercheurs d'évaluer et de comparer l'efficacité de divers modèles de langage et applications.

Cependant, des langues comme le Setswana font face à une pénurie de ressources (Sebolela, 2009, Marivate et al., 2020), entraînant une disponibilité limitée d'outils et d'applications linguistiques. De plus, les outils actuels sont fréquemment créés dans des projets isolés, chacun avec des données curatées adaptées à leur portée particulière. Cette fragmentation pose un défi aux chercheurs qui doivent collaborer efficacement et comparer leurs travaux.

En dehors des corpus parallèles non annotés et des dictionnaires de listes de mots extraits de sites web gouvernementaux, la seule ressource disponible comparable au PWN est l'African Wordnet (AWN). Le projet AWN a été initié dans le but de promouvoir le multilinguisme et de faciliter le développement d'outils et de ressources linguistiques pour les langues sud-africaines (SA) (Bosch et Griesel, 2017). Actuellement, des wordnets ont été développés pour le Setswana, l'isiXhosa, l'isiZulu, le Sesotho sa Leboa et le Tshivenda. L'AWN revêt une importance particulière en raison de la rareté des données dans les langues sud-africaines. Cela fait de l'AFW une ressource cruciale.

Dans le but de contribuer au développement de ressources pour les langues SA en général et le setswana en particulier, cet article présente un lexique setswana. Le lexique a été développé en traduisant un sous-ensemble du PWN par des méthodes expertes de traduction, d'expansion et d'adaptation de domaine. Le domaine choisi pour la traduction s'est concentré sur des concepts liés à l'espace. Le résultat de ce projet est un lexique Setswana comprenant 6016 synsets, avec des lemmas, des gloses et des exemples d'utilisation. L'utilisation de la traduction assistée par des experts visait à assurer la production de traductions de haute qualité, et la décision de se concentrer sur un domaine spécifique a été prise pour permettre la pertinence et l'applicabilité du lexique de Setswana dans le contexte ciblé.

Le reste du document est structuré comme suit: la section 2 présente la littérature pertinente liée au développement des ressources sémantiques à travers les langues et l'état de l'art des ressources linguistiques disponibles pour Setswana. La section 3 décrit les techniques et méthodologies utilisées pour le développement de la ressource. L'évaluation des ressources et les résultats sont présentés à la section 4. La section 5 conclut le document.

## 2. Travaux connexes

Cette section est divisée en deux sous-sections. La première sous-section se concentre sur la littérature pertinente liée au développement des ressources sémantiques à travers les langues. Cette littérature fournit une base et un contexte pour la méthodologie employée dans le développement de la ressource présentée dans cet article. La deuxième sous-section fournit une vue d'ensemble à haut niveau des ressources disponibles pour le Setswana.

## 2.1 Développement de ressources linguistiques

Les lexiques monolingues sont construits en utilisant deux méthodes, à savoir, la méthode d'expansion et la méthode de fusion (Bosch et Griesel, 2018). Dans la méthode d'expansion, les développeurs traduisent un sous-ensemble de synsets anglais à partir de PWN. La méthode de fusion implique la création de synsets pour les langues cibles, qui sont ensuite fusionnés avec les synsets de PWN. La principale distinction entre les deux méthodes est que la méthode d'expansion aboutit à ce que la langue cible hérite de la structure sémantique de PWN, tandis que la méthode de fusion implique la création d'une nouvelle structure sémantique pour la langue cible, qui est ensuite fusionnée avec le réseau sémantique de PWN. Les ressources réalisées en utilisant ces méthodes incluent (Batsuren et al., 2019, Bella et al., 2020).

En se concentrant sur le domaine spatial, cette étude a utilisé la méthode d'expansion pour le Setswana. La raison de ce choix découle de l'existence de concepts de domaine similaires à la fois dans les domaines spatiaux anglais et setswana. Pour s'assurer que tous les concepts spatiaux setswana étaient inclus, les concepts présents en setswana mais absents de l'ensemble traduit ont été ajoutés au jeu de données et ensuite lexicalisés en anglais. Cela garantit une couverture complète des concepts liés à l'espace en setswana.

## 2.2 État des connaissances sur les ressources en setswana

L'importance de la disponibilité des ressources linguistiques ne saurait être surestimée, car elles jouent un rôle crucial dans la préservation des langues et servent de catalyseur pour l'avancement et le développement des outils de TAL. Dans le but de créer, de consolider et de diffuser des ressources linguistiques pour diverses langues SA, le South African Centre for Digital Language Resources (SADiLaR), en collaboration avec diverses universités, a été créé à cette fin. Soutenu par le Department of Science and Innovation (DSI), le SADiLaR joue un rôle significatif dans la facilitation de la centralisation de ces ressources linguistiques, contribuant à leur accessibilité et à leur utilisation. Cette section décrit les ressources textuelles accessibles pour le setswana sur SADiLaR, fournissant un aperçu des ressources actuellement disponibles accessibles aux chercheurs.

En résumé, actuellement, y compris l'AFW (Bosch et Griesel, 2017), il existe un total de 24 types différents de corpus textuels. Cela inclut des traductions multilingues de mots et de phrases, un corpus annoté en segments de phrases, des corpus monolingues, une suite de tests, un corpus arboré, un corpus annoté en entités nommées, des corpus de textes annotés, et des corpus parallèles anglais-setswana (Lastrucci et al., 2023, McKellar et Puttkammer, 2020). Il existe également des données basées sur des domaines où les données en anglais de domaines spécifiques ont été traduites dans plusieurs langues SA, y compris Setswana. Cela englobe des données provenant de domaines tels que le football, les mathématiques, la technologie, la santé, les sciences naturelles, les arts et la culture, le gouvernement, les élections et les procédures parlementaires. L'ensemble de données présenté dans ce document relève spécifiquement du domaine spatial, élargissant encore la portée des ressources de données disponibles pour la langue setswana.

## 3. Méthodologie

Cet article a adopté l'approche d'expansion fondée sur des experts pour développer la ressource présentée. Un sous-ensemble de mots, de gloses et d’exemples tirés du PWN ont été traduits et validés par des experts linguistiques de Setswana. La méthodologie comprend quatre phases, à savoir la génération de données de traduction, la traduction, le reformatage et la validation. Les traductions ont été réalisées sur une feuille de calcul Microsoft Excel. Les sous-sections suivantes développent la structure de la feuille de calcul, la génération de données, la traduction, la validation et les phases de reformatage.

## 3.1 Traduction via des feuilles de calcul Microsoft Excel

La feuille de calcul Microsoft Excel contient les lemmes source et cible, les synsets, les gloses et les exemples. Ceux-ci sont définis comme :

## 3.1.1 Lemme

Un lemme est la forme canonique (forme de dictionnaire, forme de citation) d'un ensemble de mots (formes de mots). Par exemple, tsamaya (aller) est le lemme des mots tsamaya (aller), wa tsamaya (va), et o tsamaile (est allé).

## 3.1.2 Synsets

Un synset est un ensemble de synonymes qui représentent un seul concept ou idée en linguistique et qui est constitué de lemmes. Chaque synset représente un concept unique, et les mots au sein du même synset sont considérés comme synonymes les uns des autres. Les synsets fournissent un moyen d'organiser et de comprendre les relations entre les mots et leurs significations dans un format structuré.

## 3.1.3 Glose

Un texte ou une phrase qui décrit le concept, c'est-à-dire un lemme.

## 3.1.4 Exemple

Un texte ou une phrase(s) qui clarifie(nt) le sens exact du concept décrit. Des exemples sont également utilisés pour clarifier et démontrer comment le lemme / concept est utilisé dans une phrase.

## 3.2 Génération de données de traduction

Pour la phase de génération des données de traduction, une méthode d'adaptation spécifique au domaine a été utilisée.

Cette méthode se concentre sur la création de ressources linguistiques basées sur un domaine ou un sujet spécifique. Les critères suivants ont été utilisés lors de la sélection du sous-ensemble de synsets anglais à traduire.

## 3.2.1 Identification de domaine

L'ensemble de données du domaine spatial a été sélectionné.

## 3.2.2 Extraction des données

Les lemmes, les glosses et les exemples ont été extraits et transférés dans un fichier Excel.

Les données de WordNet sont normalement divisées en quatre catégories de parties du discours : les noms, les verbes, les adjectifs et les adverbes. Pour restreindre le champ d'étude, cette étude s'est concentrée sur les données de ces quatre catégories qui sont dans le domaine spatial.

## 3.3 Traduction

Les traductions ont été réalisées sur un fichier Microsoft Excel. La feuille Excel contient un certain nombre de synsets dans la langue source à traduire dans la langue cible. Dans ce cas, l'anglais était la langue source, et le setswana était la langue cible. Le fichier est organisé dans un format par paires (colonne de la langue source - colonne de la langue cible). Les champs de traducteur se composent de ce qui suit:

## 3.3.1 Colonnes de lemme Synset

Colonne C : Contient une liste de lemma de la langue source, séparés par des virgules.

Colonne D : Le traducteur fournit une liste, séparée par des virgules, des lemmes du synset de la langue cible.

## 3.3.2 Colonnes de glose du synset

Colonne F: Contient le synset gloss dans la langue source.

Colonne G : Le traducteur fournit la glose du synset dans la langue cible.

## 3.3.3 Colonnes d'exemples de synsets

Colonne I : Contient les exemples du synset dans la langue source.

Colonne J : Le traducteur fournit les exemples de synset dans la langue cible.

## 3.3.4 Colonnes de notes du traducteur

Colonne L : Le traducteur peut fournir des notes relatives à la traduction du synset s'il y en a.

## 3.4 Validation

La même feuille Excel utilisée pour la traduction a été utilisée pour la validation. Les champs du validateur se composent de ce qui suit :

## 3.4.1 Validation des lemme de Synset

Le validateur fournit sa validation sur les lemma dans la langue cible dans la colonne E. Le validateur peut choisir entre:

Accepté : Si le validateur constate que les lemmes sont complets et ne contiennent pas d'erreurs telles que des fautes d'orthographe, il/elle écrit A (pour accepté).

Rejeté : Si le validateur constate que les lemmes ne sont pas corrects, ou qu'il manque des lemmes, ou que des lemmes n'appartiennent pas au synset, il/elle écrit R (pour rejeté) et fournit une justification de la décision dans la colonne des notes du validateur.

## 3.4.2 Validation des définitions de synsets

Le validateur fournit sa validation sur la colonne synset gloss H. Le validateur peut choisir entre :

Accepté : Si le validateur trouve que la glose du synset décrit correctement le synset et ne contient pas d'erreurs telles que des fautes d'orthographe, il/elle écrit A.

Rejeté : Si le validateur constate que la définition du synset ne décrit pas le synset ou qu'elle contient des erreurs, il/elle écrit R et fournit une justification.

## 3.4.3 Validation des exemples de Synset

Le validateur donne sa décision sur les exemples de synsets dans la colonne K. Le validateur peut choisir entre :

Accepté: Si le validateur trouve que les exemples de synset sont corrects et qu'ils ne contiennent pas d'erreurs, et s'il n'y a pas d'exemples de synset qui peuvent être nécessaires pour décrire comment utiliser les lemmes, il écrit ici A. Il est possible d'accepter des synsets sans exemples si le traducteur ne les a pas fournis et que le validateur accepte la décision du traducteur.

Rejeté : Si le validateur n'a pas fourni d'exemples et que le validateur n'accepte pas la décision du traducteur, ou s'il trouve des erreurs dans les exemples, il/elle écrit ici R et fournit une justification.

## 3.4.4 Validation des notes du validateur

Le validateur fournit une justification pour son rejet de l'une des traductions de synset précédentes dans cette colonne. Les commentaires du validateur sont facultatifs en cas d'acceptation, mais ils sont obligatoires en cas de rejet.

Dans les cas où les traductions ont été rejetées par le validateur, la feuille Excel a été retournée au traducteur avec les notes du validateur pour clarification. Les erreurs identifiées étaient corrigées, ou les traducteurs fournissaient des raisons pour les traductions choisies. Ce processus s'est poursuivi jusqu'à ce que les traducteurs et les validateurs parviennent à un accord, et que toutes les traductions soient acceptées, faisant de ce dernier une ressource de haute qualité.

## 3.5 Reformatage

La ressource développée peut être utilisée pour le développement d'applications de traitement automatique du langage naturel (TALN). Cependant, les données en format Excel ne sont pas adaptées à la programmation des environnements de développement intégrés (EDI) et aux domaines de la linguistique computationnelle où ces applications sont développées (Suárez et al., 2007). Cela est dû à sa nature de mémoire intensive qui se traduit par l'inefficacité. L'utilisation de ces données dans les IDE pourrait entraîner une augmentation de la consommation de mémoire, un temps d'exécution plus long et une réduction des performances, ce qui en fait un outil loin d'être idéal pour le développement d'applications.

Pour répondre à ces limitations, la ressource développée a été reformatée au format XML (Extensible Markup Language). Le format XML est une norme largement acceptée pour représenter des données structurées (Bourret, 1999). Sa standardisation assure la cohérence et la compatibilité entre différentes applications et plateformes logicielles de développement. De plus, XML fournit un cadre lisible par machine qui permet la représentation des données linguistiques dans un ordre hiérarchique et l'inclusion de métadonnées et d'annotations sémantiques (Kroeze et al., 2010). Les données ont été regroupées selon les parties du discours et converties en fichiers XML.

## 4. Évaluation et résultats

Notre méthode de validation a évalué explicitement et formellement les traductions individuelles de lemmes, d'exemples et de définitions, ainsi que leur qualité. L'évaluation a été réalisée par un groupe de locuteurs natifs de Setswana qui maîtrisent l'anglais. Ils ont déterminé la validité des traductions en les marquant comme "accept" si elles étaient précises et "reject" si elles étaient incorrectes ou manquaient d'équivalents de traduction. Pour calculer la précision des traductions, la métrique suivante a été utilisée pour mesurer la précision (A). Cela se calcule en divisant le nombre de traductions correctes, c'est-à-dire "accept", par le nombre total de traductions en utilisant l'équation suivante :

A= (correct translations)/(total number of translations) * 100 A= 5981/6016 A=0.99

Il y avait 5981 synsets correctement traduits sur un total de 6016 synsets traduits, substituant ainsi ces valeurs dans l'équation ci-dessus. La soumission initiale a atteint un taux d'exactitude de 99 % avant d'être soumise à la validation. Après validation, des révisions et discussions continues entre traducteurs et validateurs ont abouti à un accord unanime, atteignant finalement un taux de précision de 100 %. La ressource présentée dans cette étude consiste en le lexique traduit suivant dans le Tableau 1.

p04-01.png

Tableau 1: Statistiques du lexique traduit.

Le nombre de lemmes, de gloses et d'exemples est le même pour le setswana et l'anglais, car toutes les données sources de toutes les lignes de tous les fichiers ont été traduites.

## 5. Conclusion

## 5.1 Références bibliographiques

Cet article a présenté un nouvel ensemble de données bilingues anglais-setswana qui a été traduit professionnellement avec un accent particulier sur le domaine spatial. L'ensemble de données a été développé en utilisant l'approche d'expansion, impliquant la traduction d'un sous-ensemble de synsets de PWN en Setswana. Le processus de traduction a été entrepris par des traducteurs professionnels de Setswana spécialement engagés pour cette tâche. Suite au processus de traduction, des locuteurs natifs du setswana, qui possédaient également une maîtrise de l'anglais, ont validé le contenu traduit.

Pour la validation, les évaluations itératives et les discussions entre les traducteurs et les validateurs ont confirmé l'exactitude de toutes les traductions, atteignant un taux de précision de 100%. Le financement actuel a couvert la traduction des fichiers spécifiés présentés dans cet article dans ce domaine, il reste encore des fichiers en attente à traduire. Nos efforts futurs impliquent d'obtenir un financement supplémentaire pour améliorer considérablement l'ensemble de données. De plus, comme le processus de traduction actuel était manuel, nous visons à semi-automatiser les procédures de traduction et de validation en tirant parti des logiciels de traduction assistée par ordinateur. Une fois terminé, le jeu de données sera librement accessible aux chercheurs pour des applications dans la recherche linguistique et en TAL.

## 6. Références bibliographiques

Batsuren, K., Ganbold, A., Chagnaa, A. & Giunchiglia, F. Building the mongolian wordnet. Proceedings of the 10th global WordNet conference, 2019. 238-244.

Bella, G., Mcneill, F., Gorman, R., Donnaíle, C. Ó., Macdonald, K., Chandrashekar, Y., Freihat, A. A. & Giunchiglia, F. A major wordnet for a minority language: Scottish gaelic. 12th Language Resources and Evaluation Conference, 2020. European Language Resources Association (ELRA), 2812-2818.

Bosch, S. & Griesel, M. African Wordnet: facilitating language learning in African languages. Proceedings of the 9th Global Wordnet Conference, 2018. 306-313.

Bosch, S. E. & Griesel, M. 2017. Strategies for building wordnets for under-resourced languages: The case of African languages. Literator (Potchefstroom. Online), 38, 1-12.

Bourret, R. 1999. Xml And Databases.

Kroeze, J. H., Bothma, T. J. D. & Matthee, M. C. 2010. Constructing An Xml Database Of Linguistics Data. Td: The Journal For Transdisciplinary Research In Southern Africa, 6,139-174.

Lastrucci, R., Dzingirai, I., Rajab, J., Madodonga, A., Shingange, M., Njini, D. & Marivate, V. 2023. Preparing The Vuk'uzenzele And Za-GovMultilingual South African Multilingual Corpora. Arxiv Preprint Arxiv:2303.03750.

Marivate, V., Sefara, T., Chabalala, V., Makhaya, K., Mokgonyane, T., Mokoena, R. & Modupe, A. 2020. Low Resource Language Dataset Creation, Curation And Classification: Setswana And Sepedi. Arxiv Preprint Arxiv:2004.13842.

Mckellar, C. A. & Puttkammer, M. J. 2020. Dataset For Comparable Evaluation Of Machine Translation Between 11 South African Languages. Data In Brief, 29, 105146.

Miller, G. A. 1995. Wordnet: A Lexical Database For English. Communications Of The Acm, 38, 39-41.

Sebolela, F. 2009. The Compilation Of CorpusBased Setswana Dictionaries. University Of Pretoria.

Suárez, O. S., Riudavets, F. J. C., Figueroa, Z. H. & Cabrera, A. C. G. 2007. Integration Of An Xml Electronic Dictionary With Linguistic Tools For Natural Language Processing. Information Processing & Management, 43,946-957.

Superman, S., Batman, B., Catwoman, C., and Spiderman, S. (2000). Superheroes experiences with books. The Phantom Editors Associates, Gotham City, 20th edition.

## 7. Références des ressources linguistiques

Bosch, Sonja and Griesel, Marissa. 2017. Strategies for building wordnets for under-resourced languages: the case of African languages
