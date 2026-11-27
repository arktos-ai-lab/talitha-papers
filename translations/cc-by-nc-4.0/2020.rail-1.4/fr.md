> Machine translation (fr) of "Complex Setswana Parts of Speech Tagging" by Gabofetswe Malema, Boago Okgetheng, Bopaki Tebalo, Moffat Motlhanka, Goaletsa Rammidi, https://aclanthology.org/2020.rail-1.4/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Étiquetage complexe des parties du discours en Setswana

Gabofetswe Malema, Boago Okgetheng, Bopaki Tebalo, Moffat Motlhanka, Goaletsa Rammidi

**Affiliations**  
Malema, G. Tebalo, B. Okgetheng, B. Motlhanka, M. Rammidi G.  
University of Botswana  
P/Bag 704, Gaborone, Botswana  
, 

## Résumé

La langue setswana est l'une des langues bantoues écrites de manière disjonctive. Certaines de ses parties de discours telles que les qualificatifs et certains adverbes sont constitués de plusieurs mots. C'est-à-dire que la partie du discours est composée d'un groupe de mots. Le style d'écriture disjonctif pose un défi lors de la tokenisation d'une phrase ou lors de l'étiquetage. Quelques études ont été faites sur l'identification des parties du discours multi-mots. Dans cette étude, nous allons plus loin pour tokeniser des parties du discours complexes qui sont formées en étendant des formes de base de parties du discours multi-mots. Les parties du discours sont étendues en concaténant récursivement plus de parties du discours à une forme de base des parties du discours. Nous avons développé des règles pour construire des parties du discours relatives complexes. Un analyseur morphologique et Python NLTK sont utilisés pour marquer les mots individuels et les formes de base des parties du discours multi-mots respectivement. Les règles élaborées sont ensuite utilisées pour identifier les parties complexes du discours. Les résultats de fichiers de texte de 300 phrases donnent une performance de 74 %. L'étiqueteur échoue lorsqu'il rencontre des règles d'expansion non implémentées et lorsque l'étiquetage par l'analyseur morphologique est incorrect.

## Mots-clés

étiquetage des parties du discours, Setswana, qualificatifs

## 1. Introduction

Le setswana est une langue bantoue parlée par environ 4,4 millions de personnes en Afrique australe couvrant le Botswana, où il est la langue nationale et majoritaire, la Namibie, le Zimbabwe et l'Afrique du Sud. La majorité des locuteurs, environ 3,6 millions, vivent en Afrique du Sud, où la langue est officiellement reconnue. Le setswana est étroitement lié aux langues sotho du sud et du nord parlées en Afrique du Sud. Il y a eu peu de tentatives de développement d'outils de traitement de la langue setswana tels que les étiqueteurs de catégories grammaticales, les correcteurs orthographiques, les correcteurs grammaticaux et la traduction automatique.

Le setswana, comme d'autres langues, est confronté à des problèmes d'ambiguïté en ce qui concerne l'usage des mots, ce qui a un impact considérable sur l'étiquetage des catégories grammaticales (POS). Le texte dans la ressource disponible du corpus Setswana n’est pas annoté et, par conséquent, un traitement significatif limité peut être exécuté sur les données sous leur forme actuelle. Le setswana, en tant que langue à faibles ressources, limite la recherche sur corpus portant sur la quantité significative d'informations, pourtant très nécessaire, concernant un mot et ses voisins, utile au développement ultérieur d'autres applications telles que la recherche d'information, l'analyse de collocations et de fréquences, la traduction automatique et la synthèse vocale, parmi d'autres applications de TAL. Par conséquent, il est nécessaire de développer des outils de traitement de base du Setswana qui sont précis et utilisables par d'autres systèmes.

L'étiquetage des parties du discours identifie les parties du discours pour une langue donnée dans une phrase. La sortie d'un étiqueteur morphosyntaxique est utilisée pour d'autres applications telles que l'apprentissage automatique, la vérification de la grammaire et aussi pour l'analyse du langage. La complexité de l'étiquetage POS varie d'une langue à l'autre. Il existe différentes approches de l'étiquetage morpho-syntaxique, les plus importantes étant les approches statistiques et à base de règles (Brants 2000, Brill 1992,1995 et Charniak 1997). Les approches statistiques nécessitent des données de test pour apprendre les formations et l'ordre des mots dans une langue. Elles fonctionnent bien lorsque des données d'entraînement adéquates sont facilement disponibles. Nous n'avons pas trouvé de corpus étiqueté facilement disponible à utiliser. Nous avons donc développé une approche basée sur des règles. Les techniques basées sur des règles nécessitent le développement de règles basées sur la structure de la langue.

Le setswana, comme certaines langues bantoues, est écrit de manière disjonctive. C'est-à-dire que les mots qui jouent ensemble une fonction particulière dans une phrase sont écrits séparément. Pour que la phrase soit correctement analysée, ces mots doivent être regroupés pour donner le sens voulu. Il existe plusieurs mots orthographiques en setswana, tels que les accords, qui, seuls, n'ont pas de sens, mais avec d'autres mots, ils donnent à la phrase son sens voulu. Certains de ces mots jouent également plusieurs rôles dans les phrases et sont fréquemment utilisés. De tels « mots » incluent a, le, ba, se, lo, mo, ga, fa, ka. Sans grouper les mots, certains mots pourraient être classés en plusieurs catégories. Ce problème a été considéré comme un problème de tokenisation dans certaines études (Faaß et al 2009, Pretorius et al 2009 et Talajard et Bosch 2006).

Les parties de discours setswana comprennent des verbes, des noms, des qualificatifs, des adverbes et des pronoms. Les verbes et les noms sont des classes ouvertes et peuvent prendre plusieurs formes. Les études sur le marquage des parties du discours se sont concentrées sur les verbes copulatifs et auxiliaires et les noms pour cette raison (Faaß et al 2009 et Pretorius et al 2009). La plupart des taggers POS se sont concentrés sur le marquage des mots individuels. Cependant, Setswana a POS en particulier qualificatifs et certains adverbes qui sont constitués de plusieurs mots et dans certains cas d'une douzaine de mots (Cole 1955, Mogapi 1998 et Malema et al 2017). Les qualificatifs setswana comprennent les possessifs, les adjectifs, les relatifs, les énumératifs et les quantitatifs. Les adverbes sont de temps, de manière et de lieu.

Quelques études ont été réalisées sur la tokenisation et l'étiquetage des parties du discours pour le Setswana et le Sotho du Nord, qui est étroitement lié au Setswana (Faaß et al 2009 et Malema et al 2017). Ces études n'ont pas couvert la tokenisation des parties complexes du discours. Les adverbes, les possessifs et les relatifs ont une structure récursive qui leur permet de s'étendre, résultant en des structures complexes contenant plusieurs POS. Par complexe, dans ce cas, nous entendons en termes de longueur et d'utilisation de plusieurs POS pour construire une partie du discours.

Cet article examine l'identification des qualificatifs et adverbes complexes du setswana à l'aide d'un étiqueteur de catégories grammaticales. Nous présentons des règles de base sur la façon d'identifier les POS complexes tels que les adverbes, les possessifs et les relatifs. La méthode proposée étiquette les mots individuels puis construit des étiquettes complexes basées sur des règles d'expansion développées. Les règles ont été testées pour les relatifs et les résultats préliminaires montrent que la plupart des règles sont cohérentes et fonctionnent la plupart du temps.

## 2. POS complexe en Setswana

Comme indiqué ci-dessus, les adverbes, les possessifs et les relatifs ont une structure récursive qui permet à un simple POS d'être étendu en un POS complexe. Nous avons noté que dans les structures de phrases en Setswana, le verbe peut être suivi d'un nom (objet) ou d'un adverbe, comme également indiqué dans la structure des phrases nominales et verbales en Setswana (Letsholo et Matlhaku 2014). Nous avons également noté que les noms peuvent être suivis de qualificatifs. Ainsi, une phrase simple peut être étendue en indiquant l'objet sur lequel le verbe agit et comment, où et quand l'action verbale est effectuée. L'objet pourrait être décrit en utilisant des qualificatifs et des démonstratifs.

## Exemples :

mosimane o a kgweetsa (le garçon conduit) mosimane o kgweetsa koloi (le garçon conduit une voiture) mosimane o kgweetsa koloi ya rraagwe (le garçon conduit la voiture de son père) mosimane o kgweetsa koloi ya rraagwe kwa tirong ( le garçon conduit la voiture de son père au travail)

La première phrase n'a pas d'objet. Dans la deuxième phrase, un objet (koloi/voiture) est fourni pour le verbe kgweetsa (conduire). Dans la troisième phrase, l'objet koloi est distingué ou modifié en utilisant le possessif 'ya rraagwe' (de son père). Dans la quatrième phrase, un adverbe de lieu (kwa tirong / au travail) est ajouté pour identifier où l'action (kgweetsa / drive) de la conduite se passe.

Nous avons observé que les possessifs, les relatifs et les adverbes ont une structure récursive et pourraient donc être étendus en utilisant d'autres POS pour créer un POS complexe.

## 2.1 Les possessifs

Les possessifs simples sont constitués d'un accord suivi d'un nom, d'un pronom ou d'un démonstratif.

## Exemples :

kgomo ya kgosi (chief's cow) kgomo ya bone (their cow)

Dans le premier exemple ci-dessus, « ya kgosi » est le possessif, où ya est l'accord possessif correspondant à la classe nominale (classe 9) de kgomo(vache) et kgosi(chef) est la racine (nom dans ce cas).

Il s'agit de la forme la plus simple du possessif. Cependant, la racine peut être étendue pour former un possessif complexe. La racine peut être d'autres POS composés tels que les relatifs, les possessifs, les adjectifs et les adverbes. Ces racines composées pourraient également être élargies en utilisant les règles d'expansion de phrase comme expliqué ci-dessus. C'est-à-dire que si POS se termine par un verbe, le verbe peut avoir un objet et/ou un adverbe devant lui et si le POS se termine par un nom, le nom peut être modifié par un qualificatif et/ou un démonstratif. Le POS ajouté pourrait également être étendu de la même manière récursivement. Exemples :

koloi ya monna (la voiture de l'homme) koloi ya ntate yo o thudileng ( la voiture qui appartient à l'homme qui a eu un accident) koloi ya ntate yo o thudileng tonki (la voiture qui appartient à l'homme qui a heurté un âne) koloi ya ntate yo o thudileng tonki ya kgosi (la voiture qui appartient à l'homme qui a heurté l'âne du chef) koloi ya ntate yo o thudileng tonki ya kgosi kwa morakeng (the car that belongs to the man who hit the chief's donkey at the cattle post)

Dans la première phrase ya monna, n'est que l'accord possessif et une racine simple (monna/nom). La deuxième phrase étend le possessif en distinguant le monna(homme) avec le relatif, yo o thudileng. Puisque ce relatif se termine par un verbe, nous pourrions lui donner un objet, tonki (âne) comme fait dans la troisième phrase. La quatrième phrase distingue l'âne (tonki) en utilisant un autre possessif, ya kgosi. La cinquième phrase ajoute un adverbe de lieu, kwa morakeng (au poste à bétail), pour le verbe thudileng (heurté). Une expansion supplémentaire du possessif pourrait être faite en fournissant des objets et ou des adverbes pour de nouveaux verbes et en modifiant de nouveaux noms avec des qualificatifs ou des démonstratifs. Dans la dernière phrase « ya ntate yo o thudileng tonki ya kgosi kwa morakeng » est un possessif décrivant le nom koloi. Ce possessif est composé d'un relatif (yo o thudileng), d'un nom (tonki), d'un possessif (ya kgosi) et d'un adverbe (kwa morakeng). L'objectif principal de cette étude est de développer des moyens de reconnaître de telles parties du discours longues/complexes.

## 2.2 Relatifs

Les relatifs sont constitués d'un accord et d'une racine. Exemple :

koloi e e thudileng (the car that had an accident)

e e thudileng est un relatif, où e e est un accord relatif pour les noms de classes 4 et 9 et thudileng est la racine. En utilisant la même approche pour l'expansion des verbes et des noms, nous pourrions développer ce relatif comme suit.

koloi e e thudileng tonki (la voiture qui a heurté un âne) koloi e e thudielng tonki ya kgosi (la voiture qui a heurté l'âne du chef) koloi e e thudileng tonki ya kgosi kwa morakeng (la voiture qui a heurté la voiture du chef au poste à bétail)

Dans le troisième exemple, "e e thudileng tonki ya kgosi kwa morakeng" est une relative composée d'une relative de base (e e thudileng), d'un nom (tonki), d'un possessif (ya kgosi) et d'un adverbe (kwa morakeng). La structure des exemples ci-dessus est appelée relatives directes. Une autre catégorie de relatives est connue sous le nom de relatives indirectes. Exemples :

koloi e ba e ratang (la voiture qu'ils/elles aiment) koloi e a tla e rekang (la voiture qu'il/elle achètera) ngwana yo Modimo a mo segofaditseng ( l'enfant que Dieu a béni) koloi

Dans cette étude, nous n'avons examiné que les relatifs directs, qui ont une structure plus simple par rapport aux relatifs indirects. Les structures de base des qualificatifs et des adverbes en Setswana peuvent être trouvées dans (Cole 1955 et Mogapi 1998).

## 2.3 Adverbes

Les adverbes pourraient également être étendus lorsqu'ils utilisent des verbes et des noms. Exemples :

kwa morakeng (au poste à bétail) kwa morakeng wa monna (au poste à bétail de l'homme) kwa morakeng wa monna yo o berekang (au poste à bétail de l'homme qui travaille) kwa morakeng wa monna yo o berekang kwa sepateleng (au poste à bétail de l'homme qui travaille à l'hôpital) kwa morakeng wa monna yo o berekang kwa sepateleng sa Gaborone (au poste à bétail de l'homme qui travaille à l'hôpital de Gaborone)

Le dernier exemple est un adverbe composé d'un adverbe de base (kwa morakeng), possessif (wa monna), relatif (yo o berekang), adverbe (kwa sepateleng), possessif (sa Gaborone)

## 3. Mise en œuvre

La figure 1 ci-dessous montre un diagramme en blocs de l'étiqueteur proposé. Les mots individuels sont d'abord étiquetés à l'aide d'analyseurs morphologiques et nominaux développés dans Malema et al (2016 et 2018). Les POS composés simples sont ensuite étiquetés à l'aide de la bibliothèque Python d'expressions régulières (RE) de Python NLTK. Les expressions régulières pour les POS composés simples sont utilisées ici. Nous avons développé des expressions régulières pour les adjectifs, les énumératifs et pour les formes de base des possessifs, des relatifs et des adverbes. Dans Malema (2017), une approche à états finis a été utilisée pour étiqueter les POS multi-mots de base. Dans cette étude, nous avons utilisé la bibliothèque d'expressions régulières Python NLTK car elle est plus rapide et beaucoup plus facile à utiliser. Après avoir identifié les POS composés dans une phrase, des règles d'expansion sont appliquées à chaque POS composé pour une expansion possible. Ces règles testent essentiellement si le(s) mot(s) suivant(s) pourrait(ent) faire partie du POS actuel.

p03-01.png

Figure 1 : Schéma fonctionnel de l'étiqueteur morphosyntaxique

## 4. Résultats de performance

L'étiqueteur de parties du discours proposé s'est concentré sur les relatifs directs complexes se terminant par un verbe. Les extensions de règles développées ajoutent un nom, un pronom, un qualificatif, un démonstratif ou un adverbe.

## Exemples :

ngwana yo o ratang (un enfant qui aime …) ngwana yo o ratang go lela (un enfant qui aime pleurer) ngwana yo o ratang dijo (un enfant qui aime la nourriture) ngwana yo o ratang dijo tse di sukiri (un enfant qui aime la nourriture sucrée) ngwana yo o ratang dijo tsele (un enfant qui aime cette nourriture)

Et ainsi de suite.

Comme le montrent les exemples, nous nous sommes concentrés sur la structure de base des relatives directes qui est Relative concord + Verb-ng. Cette structure pourrait être étendue de diverses manières

Concord + Verbe-ng + N

Concord + verbe-ng + T

Concord + verbe-ng + P

Concord + verbe-ng + D

Concord + verbe-ng + Q

Concord + verbe-ng + L

Où N est un nom, T est un qualificatif, P est un pronom, D est un démonstratif, Q est un quantitatif et L est un adverbe. L'étiqueteur prototype a reçu un fichier texte de 300 phrases provenant du Botswana Daily News (2019) et de Mmegi (2019). Le fichier de texte contient 123 relatives, dont 37 sont de la forme de base et les autres sont plus complexes. L'étiqueteur proposé a identifié toutes les 123 relatives de base et a réussi à étendre 64 des relatives complexes, aboutissant à un taux de réussite de 74 %. Les deux principaux facteurs qui conduisent à l'échec de l'étiqueteur sont :

## Formes relatives non exhaustives :

Nous avons noté qu'il existe d'autres formes que nous n'avons pas incluses dans cette structure. Par exemple, nous avons noté qu'il existe des formes dans lesquelles le verbe est suivi de 'ke' et 'le' qui ne figurent pas dans nos règles. Exemples :

yo o salang le ngwana ( the one who is baby sitting) yo o rutwang ke mmaagwe (the one taught by his/her mother)

## Échec de l'étiquetage des mots de base:

Dans certains cas, l'analyseur morphologique n'a pas réussi à étiqueter correctement les verbes, les noms et les adverbes (mot unique), ce qui a affecté l'étiqueteur à expressions régulières et l'application de la règle d'expansion. De plus, dans certains cas, les noms n'ont pas été placés dans leurs classes correctes. Le(s) accord(s) d'un qualificatif modifiant un nom particulier doit correspondre à sa classe nominale.

## 5. Conclusions

Dans cet article, nous avons présenté une approche basée sur des règles pour identifier les parties complexes du discours de Setswana. L'idée est de mettre en œuvre la structure récursive des parties complexes du discours. La structure récursive est exprimée sous la forme de règles qui sont basées sur des structures simples de phrases de verbes et de noms. Un prototype de tagger a été développé avec l'aide des expressions régulières Python NLTK. Les résultats préliminaires montrent que la technique proposée fonctionne bien. Cependant, pour qu'elle soit efficace, toutes les règles et structures des POS complexes doivent être documentées. Dans cette étude, nous n'avons pas épuisé toutes les structures relatives. Nous prévoyons de développer davantage l'idée en élaborant plus de règles et en incluant d'autres parties du discours.

## 6. Références bibliographiques

Botswana Daily News (online), www.dailynews.gov.bw

Brants T (2000). A statistical part of speech tagger. PANCL'00 Proceedings of the sixth conference on applied natural language processing Association for Computational Linguistics

Brill E (1992). A simple rule based part of speech tagger. In Proceedings of the third conference on Applied Natural Language processing, ACL, Trento, Italy

Brill E (1995). Transformation Based Error-Driven Learning and Natural language Processing: A case study in Part of Speech Tagging. Computational Linguistics

Charniak E (1997).Statistical techniques for Natural Language parsin. AI Magazine, 18(4), pp.33-44

Cole, D.T. (1955). An Introduction to Tswana grammar. Longmans and Green, Cape Town.

Faaß G, Heid U, Taljard E & Prinsloo D (2009). Part-of_Speech tagging of Northern Sotho: Disambiguating polysemous function words",Proceedings of the EACL, 2009 Workshop on Language Technologies for African Languages - Aflat 2009, pages 38-45, Athens Greece, 31 March 2009

Lombard, D.P (1985). Introduction to the Grammar of Northern Sotho. J.L. van Schaik, Pretoria, South Africa, 1985.

Louwrens, L. J.(1991). Aspects of the Northern Sotho Grammar. Via Afrika, Pretoria, South Africa.

Mmegi Publishing News paper (online: www.mmegi.co.bw

Malema, G, Okgetheng, B and Motlhanka, M. (2017) Setswana Part of Speech Tagging, International Journal of Natural Language Computing (IJNLC), Vol.6, No.6, pp. 15 - 20, December 2017

Malema, G. Motlogelwa, N. Okgetheng, B. Mogotlhwane O. (2016). Setswana Verb Analyzer and Generator. International Journal of Computational Linguistics (IJCL), Vol 7, issue 1, 2016.

Malema, G. Motlhanka, M. Okgetheng, O and Motlogelwa, N. (2018). Setswana Noun Analyzer and Generator. International Journal of Computational Linguistics (IJCL), Volume (9), Issue (2) pp 32-40, 2018

Mogapi, K.(1998). Thuto Puo ya Setswana, Longman Botswana, 184, ISBN:0582 61903 3.

Pretorius L, Viljoen B, Pretorius R and Berg A.(2009). A finite state approach to Setswana verb morphology, International Workshop on finite state methods and natural Language Processing FSMNLP 2009: Finite State Methods and Natural language Processing, pp. 131 - 138

Taljard, E. & Bosch, S. E. (2006). A comparison of approaches towards word class tagging: Disjunctively versus conjunctively written Bantu languages. Nordic Journal of African Studies, 15(4), 428-442.
