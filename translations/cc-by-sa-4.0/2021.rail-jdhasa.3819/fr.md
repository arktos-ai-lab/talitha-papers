> Machine translation (fr) of "New uses for old books: Description of digitised corpora-based on the Setswana language collection in the WITS Cullen Africana Collection" by Malebogo Thabong, Nina Lewin, Taariq Surtee, https://upjournals.up.ac.za/index.php/dhasa/article/view/3819, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Nouveaux usages pour les livres anciens : Description de corpus numérisés basés sur la collection en langue setswana de la WITS Cullen Africana Collection

Malebogo Thabong, Nina Lewin, Taariq Surtee

**Affiliations**  
Rahlao, Malebogo  
The University of the Witwatersrand, Johannesburg  
  
Lewin, Nina  
The University of the Witwatersrand, Johannesburg  
  
Surtee, Taariq  
The University of the Witwatersrand, Johannesburg  


## Résumé

Cet article décrit un corpus de 104 livres. Les livres ont été catalogués dans une bibliothèque standard et une métadonnée d'archivage : Dublin Core. Un sous-ensemble a été numérisé et nettoyé. Les livres ont ensuite été divisés en cinq sous-ensembles et comparés entre eux ainsi qu'avec l'ensemble du Corpus. Nous avons spéculé que le Corpus dans son ensemble pourrait être utilisé comme un registre linguistique général. Quelques exemples sont également donnés des caractéristiques des sous-ensembles de genres. Le document vise à présenter le Corpus aux chercheurs en traitement du langage naturel (NLP) et à le proposer pour des recherches ultérieures.

## 1 Introduction

"L'incapacité de communiquer avec les êtres humains dans leur propre langue peut être l'un des obstacles les plus importants à l'adoption des technologies de l'information et de la communication dans le tiers monde et à la réduction de la fracture numérique" (Getao & Evans, 2000: 128).

Dans le même temps, le TAL est l'un des problèmes computationnels les plus complexes auxquels les informaticiens aient été confrontés. Les appels à des actions pour développer des ressources pour ces langues, de préférence de manière coordonnée et systématique, ont été répondus dans ce document. Les chercheurs en TALN en anglais ont eu l'avantage de disposer de nombreux corpus pour la recherche et les tests. Dans cet article, nous présentons la collecte de la sous-collection de la langue africaine : Setswana, à l'attention des chercheurs en Traitement Automatique des Langues Africaines lors du 2ème Atelier sur les Ressources pour les Langues Indigènes Africaines.

## 1.1 Contexte

Ce projet a une longue histoire, de la préservation de livres qui auraient été jetés comme obsolètes à la création d'un Corpus. Nous le voyons comme une libération des ressources que de nombreuses générations d'archivistes, de bibliothécaires, de chercheurs, d'auteurs et de traducteurs ont préservées en croyant que les livres avaient une valeur. Bien que, les individus impliqués ne pouvaient pas avoir imaginé les utilisations computationnelles en 1980. La bibliothèque William Cullen : Collection Africana possède une sous-collection de livres rares en langues africaines datant des années 1800 dans une zone verrouillée sans accès aux chercheurs. Ces livres étaient à l'origine les collections privées de professeurs du département. Ils ont été ajoutés et soigneusement sélectionnés par le département des langues africaines en tant que bibliothèque interne qui a ensuite reçu le nom de Bibliothèque Africana). Ces ouvrages fournissent une histoire du développement de diverses langues et d'orthographes variées.

## 2 Préparations de la collection

La première étape a consisté à cataloguer la collection. Il y avait un catalogue existant, mais il était sur des cartes physiques et, nous avons découvert, incomplet. Nous avons retiré les livres des étagères et effectué un catalogue de base. Nous nous sommes concentrés sur la création d'un catalogue complet des livres en langues d'Afrique australe. Il y a encore une vaste collection dans une variété d'autres langues africaines en attente de recherches supplémentaires. La collection complète en langues d'Afrique australe est décrite ailleurs. Nous avons ensuite compilé des métadonnées en Dublin Core (et inclus certains éléments d'archives) des livres en tswana contenant des variétés linguistiques du Botswana et de l'Afrique du Sud. Le catalogue original désignait ces livres comme des livres de lecture courante. Cet article décrit la sous-collection de 104 livres Setswana. Ceux-ci incluent des Bibles, des Nouveaux et Anciens Testaments, des livres de hymnes, des livres de prières, des histoires pour enfants, des livres de grammaire, des livres scolaires et des romans.

## 3 Méthodologie de numérisation

Le scanner de bordure de livre Avision du Centre de numérisation de la bibliothèque de l'Université Wits a converti tous les documents en tiffs à haute résolution. Nous avons utilisé les techniques et les flux de travail des normes internationales adaptés par le centre pour la numérisation du contenu local. Après cela, tous les tiffs collectés ont été recadrés dans des documents Microsoft Office 2010. Tous les tiffs scannés et recadrés ont ensuite été transférés dans le logiciel Abbyy FineReader 12. Ce logiciel a réussi à séparer les tiff combinés, les tiff inclinés ont été redressés, les pages blanches ont été supprimées, le prétraitement a été appliqué, et enfin, ils ont été enregistrés au format PDF. L'étape suivante a consisté à utiliser la reconnaissance de langue intégrée dans le logiciel Abbyy FineReader 12 pour tous les PDF non reconnus en appliquant la reconnaissance optique de caractères (OCR). Cet outil a permis à l'ordinateur de reconnaître les textes en Setswana, passant des documents physiques à du texte interprété comme des données. Cela prouve que le travail novateur d’Otlogetswe à Setswana pendant de nombreuses années (Otlogetswe, 2020, 2016, 2015, 2013, 2011a, 2011b, 2010, 2009a, 2009b, 2008; Otlogetswe et Chebanne, 2018; Otlogetswe et Ramaeba, 2014) qui a alimenté ces fonctionnalités de reconnaissance est considérablement efficace. La reconnaissance était difficile car le texte était, comme tous les imprimés plus anciens, difficile, contenant des polices non standard. Après le processus OCR, nous avons édité les textes des documents numérisés car l'OCR était approximativement efficace à 80 % en Setswana, avec certains mots non reconnus. De tels mots ont été transformés en différents signes ou symboles. Certaines lettres ont été mal reconnues comme d'autres lettres. Nous avons ensuite nettoyé les données en éliminant ces signes et lettres, en les remplaçant manuellement par les lettres Setswana correctes. Les images, les lignes de texte et les artefacts du processus de numérisation ont également dû être éliminés. Le produit final a ensuite été mis dans des documents Word standard.

## 4 Description des corpus

Le Corpus a été créé dans Voyant (Sinclair & Rockwell, 2016). Des tableaux descriptifs de base ainsi qu'un nuage de mots Cirrus (voir les annexes) ont été créés. Nous avons créé des tableaux de tendances, de collocations et de corrélations de l'ensemble du Corpus. Pour explorer les variétés linguistiques du Corpus, nous créons cinq sous-ensembles : Bibles, Contes de fées, Grammaire, Romans et Poésie basés sur le Genre.

Le Corpus entier a 367149 mots au total et 23686 jetons. Les annexes montrent un échantillon (10 lignes) de chacune.

Tableau 1 : Exemple de Fréquences de Corpus

p02-01.png

Le nombre moyen de mots par phrase dans ces sous-ensembles montre la Poésie comme la plus élevée (24,7), suivie des Romans (19,4), des Bibles (18,0) et des Contes de fées (16,6), avec la Grammaire (10,0) comme la plus basse. Il y a un argument à faire valoir que la moyenne du Corpus de 19,3 pourrait potentiellement être utilisée comme moyenne linguistique, mais cela nécessiterait des recherches supplémentaires.

Nous avons également examiné les principaux termes

Tableau 2 : Exemple de termes majeurs

p02-02.png

p03-01.png

## 4.1 Quelques caractéristiques du Corpus

Le Corpus est en mesure de soutenir de multiples types de recherche. Voici quelques caractéristiques initiales d'intérêt que nous avons trouvées lors d'un examen initial. Le Corpus est encore en cours d'annotation.

## Orthographie

Ce sous-ensemble nous donne des informations sur la façon dont les sons de la parole forment des modèles. Nous avons pu suivre les changements grâce à la plage de dates que couvrent nos corpus. Toutes nos Bibles ont été écrites dans une orthographe plus ancienne du dialecte serolong et setlhaping au niveau phonologique. Nos données montrent également que la plupart de nos Bibles des années 1800 ont été écrites dans le dialecte Serolong & Setlhaping, connu sous le nom des orthographes anciennes du Setswana. Ainsi, les premières orthographes étaient basées sur le Serolong et le Setlhaping lorsque les missionnaires ont créé les premiers stellements parmi les Barolong et les Batlhaping à Kudumane en 1821. Dans l'orthographe plus ancienne, la lettre [y] a été utilisée avec la même prononciation que la lettre [j] utilisée dans l'orthographe actuelle. Par exemple, les mots Yosefe (Joseph), Yehofa (Jehova) et Yoshue (Joshua) sont actuellement écrits Josefa, Jehofa et Jošua.

Dans le dialecte Serolong & Setlhaping, les gens prononcent les phonèmes / f / comme [ h ] et / tsh / comme [ tšh ]. Par exemple, ils prononcent les mots « monde » et « ressemblance » comme lehatshe et tšhobotsi, au lieu de lefatshe et tshobotsi.

## Contes de fées

Les contes de fées sont souvent destinés aux enfants, mettant en vedette des personnages fantaisistes et merveilleux tels que les elfes, les gobelins, les sorciers et les fées. Le terme « conte de fées » fait davantage référence au cadre fantastique et magique ou aux influences magiques au sein d'une histoire qu'à la présence du personnage d'une fée dans cette histoire. Le registre de langue est simple car l'auteur s'adresse à des enfants en les avertissant sur un ton décontracté et détendu à propos d'un cannibale qui mange des enfants, par exemple. Le vocabulaire de l'histoire est également facile à comprendre pour les enfants. Les personnages des contes de fées peuvent être des créatures féeriques ou même des animaux parlants, des personnages crédibles auxquels les enfants s'attacheront, comme un héros bienveillant, un méchant rusé (un cannibale, comme dans notre exemple ci-dessus), un aide sage, et ainsi de suite.

Le mot dimo (cannibale) est l'une des fréquences les plus élevées (88) dans le genre. Les cannibales sont souvent utilisés dans les histoires des enfants Setswana pour les effrayer et les avertir du méchant qui mange les enfants. De nombreux animaux apparaissent souvent dans le genre. Les histoires pour enfants de Setswana consistent souvent en des animaux parlants qui vivent avec des gens. Dans la plupart des cas, un animal comme nonyane (oiseau) est là pour protéger les enfants du danger en les gardant sous leurs ailes pendant le vol. D'autres exemples d'animaux parlants sont phuduhudu (cerf), phokojwe (chacal), et phiri (loup). Il y a aussi des protagonistes ou participants humains dans les histoires pour enfants comme Ntswakae, Ntitiagatsana, et Tsetsenyane. Le mot ja (manger) apparaît 43 fois dans le genre car les enfants sont souvent mangés dans ces histoires. Il est clair que le registre du Corpus est surtout formel. En particulier, le registre utilisé dans le genre grammatical. Il est académique dans le sens où le manuel grammatical montre le style d'écriture de la langue Setswana.

Nous souhaitions travailler sur ce corpus, en particulier parce que de nombreuses autres collections de langues dépendent de la parole écrite, comme les journaux, la radio ou les tweets qui sont relativement informels. Il serait intéressant de comparer cela au corpus de journaux (Marivate et al., 2020).

## 5 Conclusion

Cette collection reposait, à partir du milieu des années 1970 environ, sur des étagères poussiéreuses dans une pièce fermée. Il n'a pas été utilisé parce que la bibliothèque n'avait pas les compétences linguistiques pour le cataloguer, et il s'agissait d'une collection fragile. Cette collection a néanmoins été choisie par les linguistes en raison de sa grande valeur à travers une gamme de langues africaines. Les ressources linguistiques souvent à la disposition des chercheurs en TAL sont les journaux et les formes de média social qui contiennent du discours informel. Cette collection possède des genres bien décrits d'écriture formelle. Il est souvent affirmé qu'il n'y a pas assez de textes en langue africaine disponibles pour la recherche. Cependant, comme le montre ce travail, les ressources existent mais nécessitent un travail de conversion en format numérique.

Les tableaux joints sont des échantillons destinés à encourager un chercheur en TAL à explorer le Corpus. Nous croyons que nos données (comparaisons, colocations et tendances) peuvent servir de ressource pour choisir des tons. Il reste encore du travail à faire car beaucoup des livres du Corpus sont des traductions. Cela signifie que la collection peut également, avec un peu de travail, fournir des traductions ligne par ligne pour les ensembles de données de test.

## Remerciements

Katlego Khoetha, membre du comité eResearch

L'Université du Witwatersrand, Johannesburg



Katlego a aidé à résoudre les problèmes de la traduction originale et a aidé d'un point de vue informatique.

Stéfan Sinclair

Nous tenons à souligner la mémoire de Stéfan Sinclair, de l’Université McGill, qui a imaginé, conçu et programmé une grande partie de Voyant Tools jusqu’en 2020, date à laquelle il est décédé. Voir l'avis de décès.

Peter Duncan

Bibliothécaire des collections spéciales

Bibliothèque William Cullen (retraitée)

L'Université du Witwatersrand, Johannesburg

Peter a organisé et plaidé pour que la collection soit cataloguée et utilisée tout au long de sa carrière. La collection est arrivée à la bibliothèque à partir des collections privées des enseignants et des collections départementales des Langues Africaines à WITS.

## Notes

1 Margaret Atsango correspondance privée 29-30/09/2021

## Références et Bibliographie

Aitchison, J., 1992. Teach yourself linguistics. Hodder & Stoughton., London.

Alexander, N., 1999. English Unassailable but Unattainable: The Dilemma of Language Policy in South African Education. Individual papers available online at http://www.

Atkins, S., 1991. Corpus design criteria. ICAME Journal 1-31.

Berg, A.S., 2018. Computational syntactic analysis of Setswana (Thesis). North-West University (South Africa), Potchefstroom Campus.

Bock, Z., Mheta, G., 2014. Language, society and communication an introduction.

Brits, K., Pretorius, R., Van Huyssteen, G.B., 2005. Automatic lemmatization in Setswana: towards a prototype. South African Journal of African Languages 25, 37-47.

Butt, M., King, T.H., 2003. Grammar writing, testing, and evaluation, in: Farghaly, A. (Ed.), Handbook for Language Engineers. CSLI, Stanford, California., pp. 129-180.

Evert, S., 2005. The statistics of word cooccurrences : word pairs and collocations (PhD Thesis). Universität Stuttgart, Stuttgart.

Getao, K.W., Miriti, E.K., 2006. Computational Modelling in Bantu Language.

Kubler, S., 2004. Memory-based parsing. J. Benjamins, Amsterdam.

Linguist, n.d. Setswana Scrabble | Sunday Standard [WWW Document]. URL http://www.sundaystandard.info/setswana-scrabble (accessed 7.29.19).

Louwrens, L.J., 1991. Aspects of Northern Sotho grammar. VIA Afrika, Pretoria.

Marivate, V., Sefara, T., Chabalala, V., Makhaya, K., Mokgonyane, T., Mokoena, R., Modupe, A., 2020a. Low resource language dataset creation, curation and classification: Setswana and Sepedi - - Extended Abstract. arXiv e-prints arXiv:2004.13842.

Marivate, V., Sefara, T., Chabalala, V., Makhaya, K., Mokgonyane, T., Mokoena, R., Modupe, A., 2020b. Low resource language dataset creation, curation and classification: Setswana and Sepedi - - Extended Abstract. arXiv:2004.13842 [cs].

Masoke-Kadenge, E., Kadenge, M., 2013. 'Declaration without implementation': An investigation into the progress made and challenges faced in implementing the Wits language policy. Language Matters 44, 33-50. https://doi.org/10.1080/10228195.2013.837949

Mogapi, K., 1998. The teaching of Setswana. Gaborone.

Molosiwa, A., Ratsoma, N., Tsonope, J., 1996. A comprehensive report on the use of Setswana at all levels of Botswana's education system, in: Cross-Border Languages. Reports and Studies. Regional Workshop on Cross-Border Languages, NIED, Okahandja, Namibia. pp. 99-134.

Nfila, B.I., 2006. Standard in Setswana in Botswana (Dissertation). University of Pretoria.

Nordlinger, R., Bresnan, J., 2011. LexicalFunctional Grammar: Interactions Between Morphology and Syntax 112-140.

Otlogetswe, T., 2020. Beef cuts amongst the Bangwaketse: the case of motlhakanelwa. Anthropology Southern Africa 43,233-245. https://doi.org/10.1080/23323256.2020.1836667

Otlogetswe, T., 2016. The design of Setswana Scrabble. South African Journal of African Languages 36,153-161-161.

Otlogetswe, T., 2015. Treatment of Spelling Variants in Setswana Monolingual Dictionaries. LEXI 25. https://doi.org/10.5788/25-1-1299

Otlogetswe, T., 2013. Introducing Tlhalosi ya Medi ya Setswana: The Design and Compilation of a Monolingual Setswana Dictionary. Lex 23. https://doi.org/10.5788/23-1-1228

Otlogetswe, T., 2011a. Challenges to Issues of Balance and Representativeness in African Lexicography. Lex 16. https://doi.org/10.5788/16-0-653

Otlogetswe, T., 2011b. Populating Sub-entries in Dictionaries with Multi-word Unitsfrom Concordance Lines. Lex 19. https://doi.org/10.5788/19-0-449

Otlogetswe, T., 2010. Challenges to issues of balance and representativeness in African lexicography. lex 16. https://doi.org/10.4314/lex.v16i1.51493

Otlogetswe, T., 2009a. Setswana Sports Terms: A Genre Analysis. Marang: Journal of Language and Literature 19. https://doi.org/10.4314/marang.v19i1.42819

Otlogetswe, T., 2009b. Populating sub-entries in dictionaries with multi-word units from concordance lines. lex 19. https://doi.org/10.4314/lex.v19i1.49140

Otlogetswe, T., 2008. Corpus design for Setswana lexicography (Thesis). University of Pretoria.

Otlogetswe, T., Chebanne, A., 2018. Setswana, in: Kamusella, T., Ndhlovu, F. (Eds.), The Social and Political History of Southern Africa's Languages. Palgrave Macmillan UK, London, pp. 187-221. https://doi.org/10.1057/978-1-137-01593-8_12

Otlogetswe, T., Ramaeba, G., 2014. Developing a Campus Slang Dictionary for the University of Botswana. Lex 24. https://doi.org/10.5788/24-1-1267

Pollard, C., Sag, I.A., 1994. Head-Driven Phrase Structure Grammar. University of Chicago Press.

Pravec, N.A., 2002. Survey of learner corpora. ICAME journal 26, 8-14.

Pretorius, R., 2014. The sequence and productivity of Setswana verbal suffixes. Stellenbosch Papers in Linguistics Plus 44, 49-70. https://doi.org/10.5842/44-0-644

Pretorius, R.S., Posthumus, L.C., Kr??ger, C.J.H., Potchefstroom University for Christian Higher Education, 1997. Auxiliary verbs as a subcategory of the verb in Tswana.

Pretorius, R.S., Potchefstroom University for Christian Higher Education, 1997. Auxiliary verbs as a subcategory of the verb in Tswana.

Publications - Namibia Statistics Agency [WWW Document], n.d. URL https://nsa.org.na/page/publications (accessed 11.9.21a).

Publications - Namibia Statistics Agency [WWW Document], n.d. URL https://nsa.org.na/page/publications/ (accessed 11.9.21b).

Speech and Language Processing, 2nd Edition [WWW Document], n.d. URL https://www.pearson.com/content/one-dot-com/one-dot-com/us/en/higher-education/program.html (accessed 11.9.21).

UNIVERSITY OF THE WITWATERSRAND, JOHANNESBURG, 2003. LANGUAGE POLICY.

Viljoen, B., Pretorius, L., Berg, A., Pretorius, R., 2008. Towards a computational morphological analysis of Setswana compounds. Literator : Journal of Literary Criticism, Comparative Linguistics and Literary Studies 29, 1-20.

Annexes - Il s'agit d'exemples de tableaux destinés à présenter les types de données créées à partir du Corpus.

p07-01.png

L'annexe 1 est un échantillon des tendances bibliques. Il y a dix points de distribution. Trois sont présentés ici.

p07-02.png

## Annexe 3 - Corrélation (exemple issu de la poésie)

p08-01.png

Annexe 4 - Nuage de mots Cirrus - incluant les 105 mots les plus fréquents

p08-02.png

Le tableau 2 a été dérivé de cette liste. Nous avons trouvé les mots-clés les plus fréquents.
