> Machine translation (fr) of "Lateral Inversions, Word Form/Order, Unnamed Grammatical Entities and Ambiguities in the Constituency Parsing and Annotation of the Igala Syntax through the English Language" by Mahmud Mohammed Momoh, https://aclanthology.org/2024.rail-1.17/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

Mahmud Mohammed Momoh

**Affiliations**  
Lateral Inversions, Word Form/Order, Unnamed Grammatical Entities and  
Ambiguities in the Constituency Parsing and Annotation of the Igala  
Syntax through the English Language  
Mahmud Mohammed Momoh  
Prince Abubakar Audu University  
Anyigba, Kogi state, Nigeria  


## Résumé

L'objectif de cet article est d'exposer la forme structurelle de la langue igala et la complexité inhérente liée à la traduction de cette langue vers une langue seconde, en l'occurrence la langue anglaise, à travers une exploration configurationnelle de son ordre des mots, de ses inversions latérales et de ses entités grammaticales non nommées en relation avec l'analyse syntaxique et l'annotation en informatique. Bien que cette étude révèle qu'il existe une prépondérance d'une typologie linguistique à ordre des mots sujet-verbe-objet et une quasi-absence de préposition dans la composition de la parole de la langue Igala, ce fait n'a pas été pris au sérieux comme sujet de considération intellectuelle. Dans cette étude, l'abstraction ou l'incongruité associée à l'interprétation de la syntaxe igala par l'étiquetage en catégories grammaticales (POS) en relation avec son ordre des mots, l'inversion latérale de certaines phrases et les entités grammaticales non nommées (c'est-à-dire la préposition) dans son traitement de la parole vers l'anglais sera exposée. Ainsi, la génération d'un modèle de compréhension pour l'identification automobile, l'application et / ou la conversion de ces formes structurelles à la langue anglaise sera au centre de cet article.

## Mots-clés

inversion latérale, ordre des mots, entités grammaticales non nommées, analyse syntaxique, annotation, Igala, anglais

## 1. Introduction

Les travaux antérieurs sur la traduction de la langue igala vers une langue seconde se sont concentrés sur l'efficacité de l'utilisation de la langue anglaise combinée à l'igala dans l'enseignement dans les écoles primaires (Achor et Akor, 2015), l'évolution d'un processeur de langage modélisé capable d'accepter en entrée des syntagmes nominaux en langue anglaise et de les traduire en igala (Ayegba, Osuagwu et Okechukwu, 2014), l'acquisition d'exemples (alignement), l'appariement et la recombinaison (Joshua, Ayegba et Ojochegbe, 2020), l'interférence syntaxique (Attabor, 2019) et l'analyse contrastive sur l'utilisation de la conjonction (Abraham, 2017). Il est à noter que, aucune attention particulière n'a été portée sur les entités grammaticales non nommées, l'ordre des mots, et le parsing et l'annotation des structures syntaxiques inhérentes. Ceci est sans préjudice du fait que les variations dans les règles grammaticales, les formes de mots et les séquences syntaxiques pourraient être une source d'ambiguïté et de difficulté dans la traduction et la compréhension de l'igala vers la langue anglaise, tant par les machines que par les apprenants physiques. Ce type d'ambiguïté a été prouvé de manière plus typique en ce qui concerne la traduction d'une langue pro-drop comme le japonais ou le coréen vers un équivalent non pro-drop comme l'anglais (Wang, Tu, Zhang, 2017). Bien que j'ai constaté que, malgré le fait que la langue Igala, comme la langue anglaise (voir Dryer), le français (Bonami, Godard et Marandin, 1999), l'italien (Brunato et Dell-Orletta, 2017), (Namboodiripad, Kim et Kim, 2017), s'appuie principalement sur un seul ordre des mots (c'est-à-dire sujet-verbe-objet (SVO)), il y avait encore une ambiguïté de traduction dans la mise en œuvre d'un parsing et d'une annotation syntaxiques précis pour les deux langues. Outre l'ambiguïté de traduction de l'igala vers la langue anglaise, ce type de discordance dans l'analyse syntaxique et l'annotation pourrait être plus grave lors de la réalisation d'une traduction automatique (TA) entre l'igala et les autres langues à l'ordre des mots contrastif ou différentiel, comme le coréen (Minhui, and Emily, 2015) qui utilise la forme de parole postpositionnelle (Mun and Desagulier, 2022), ou comme en afaan oromo (Meshesha, and Solomon, 2018), l'ordre verbe-objet-sujet (VOS) comme en malgache (Ileana, and Postdam, 2024), l'ordre verbe-sujet-objet (VSO) comme en gallois (Borsley, Tallerman, and Willis, 2007) ou en vieil irlandais (McCone, 1997), ou l'ordre objet-verbe-sujet (OVS) comme avec la langue caribe peu connue, le hixkaryana (Kalin, 2014), au Brésil.

Contrairement à l'observation de Minhui et Emily (2015) et de Namboodiripad, Kim et Kim (2017) pour la langue coréenne ainsi qu'à une autre observation de Fransen (2020) pour le vieil irlandais concernant l'inhérence de multiples formats d'ordre des mots, j'ai constaté que la langue igala repose principalement sur un ordre des mots unique, c'est-à-dire sujet-verbe-objet, comme dans la phrase ; ū l'ōpā ≡ « I chewed groundnut » qui a la même approximation grammaticale en termes de sens et de séquence de mots que l'anglais. Cependant, un défi notable qui entrave l'analyse syntaxique et l'annotation de la syntaxe igala, tout particulièrement lors de sa conversion vers l'anglais, est celui de l'inversion latérale de certaines formes et expressions syntaxiques, comme je l'ai observé à ce sujet ; « ȯkwō wē wā », ce qui donne séquentiellement ou littéralement ; « grandparent your came », mais en réalité ; « your grandparent came » en anglais.

De plus, malgré la complexité de traduction qui découle de la traduction et de l'enseignement des langues lorsqu'une catégorie grammaticale donnée existant dans une langue n'existe pas dans une langue correspondante, d'après mes constatations, il n'existe pas de prépositions clairement définies (lesquelles, avec les postpositions, étaient parfois désignées comme les têtes non lexicales des syntagmes) (Frazier, 1980) en igala, ce qui entraîne des agencements séquentiels de mots incomplets, un flou ou une obscuration de la typologie de l'ordre de base des langues naturelles et une compréhension peu claire en raison de ce manque d'alternatives de mots lors de l'analyse syntaxique, de l'annotation et de la traduction générale, comme Boquist (2009) l'a également observé. Dans cet article, les formes syntaxiques Igala manquant ou ne contenant pas de prépositions seraient analysées à travers des arbres d'analyse et les annotations correspondantes seraient converties en langue anglaise comme un moyen d'exposer les lacunes dans la correspondance et de déterminer l'exactitude de la traduction.

Suite aux succès de Warren Weaver dans les années 1950 et aux succès enregistrés en traduction automatique par la suite — en particulier dans le domaine de l'étiquetage morpho-syntaxique en traduction automatique, comme l'ont justement observé Guidivada et Arbabifard (2018), j'ai pu analyser syntaxiquement et annoter la structure syntaxique de l'igala par le biais de la langue anglaise. Agissant sur la suggestion de Guidivada et Arbabifard (2018) ainsi que Jurafsky et Martins (2009), une approche basée sur le transfert, utilisant un processus en trois étapes, a été adoptée pour la structuration segmentale de cet article. Tout d'abord, une analyse syntaxique (par exemple, la construction d'un arbre d'analyse) est effectuée sur le texte source. Deuxièmement, la structure syntaxique est convertie (c'est-à-dire transférée) en une structure correspondante dans la langue cible. Enfin, une sortie est générée à partir de la structure syntaxique de la langue cible. Le cadre orthographique utilisé dans ce travail ainsi que la règle d'élision exprimée dans la sous-section 2.2 est conforme à la forme adoptée dans Momoh (2023) et la vidéo sur. De plus, le symbole de la triple barre a été utilisé pour représenter l'équivalence dans la traduction de l'anglais vers l'igala, tandis que le symbole approximativement égal à ≅ a été utilisé pour exprimer l'isomorphisme syntaxique dans la traduction de la forme syntaxique présentant des différences dans la séquence latérale des mots entre l'igala et l'anglais, mais le même sens après traduction en langue anglaise. À l'aide de banques d'arbres segmentées, six graphiques arborés ont été conçus, où les figures I, II et III contiennent des expressions en langue igala, tandis que les figures IV, V et VI traitent de la langue anglaise. Par la suite, le résultat de l'analyse syntaxique et de l'annotation effectuées a été utilisé pour démontrer la forme structurelle du traducteur automatique proposé dans cet article.

## 2. Analyse syntaxique, parsing et annotation en Igala

Dans un sens holistique, la langue igala utilise principalement l'ordre des mots sujet-verbe-objet.

## 2.1 Analyse syntaxique et annotation des déterminants possessifs inverses d'Igala utilisant l'anglais

Avant de concevoir un arbre syntaxique pour démontrer cette forme de séquencement des mots dans la syntaxe Igala, les trois pronoms ; mā (leur), mī (mon/mes), et nwū (son/sa/son/ses) sont considérés en ce qui concerne leurs applications syntaxiques aux phrases Igala démontrées dans les trois formes.

p02-01.png

J'ai ensuite effectué l'analyse syntaxique en utilisant le premier des trois possessifs (c.-à-d. mā). La première phrase — « Ōmā mā kwū ōrōkā ōnālē » — a été représentée par l'arbre syntaxique de la Figure I ;

p02-02.png

Figure I : Analyse syntaxique des déterminants syntaxiques inverses en Igala.

L'étape suivante, conforme au modèle proposé dans (un système utilisé par le projet Penn Treebank) (Marcus, Kim, et Marcinkiewicz et al 1994 ; Santorini, 1990), consistait à fournir une annotation morphosyntaxique à base de crochets utilisant le caractère de soulignement (_) sous forme d'étiquettes de catégorie grammaticale et l'emploi de crochets annotés au début et à la fin avec le type de syntagme [s……] comme suit :

[S [NP Ōmā_NP1 NP] [PPROP mā_PPROP [VP kwū_VVD [NP ōrōkā_NN1 NP] ADVP_ōnālē] S]

Cela a également été écrit alternativement comme ;

p03-01.png

## 2.2 Analyse syntaxique et annotation de l'ordre des mots sujet-verbe-objet en igala

La forme de l'ordre des mots utilisée dans cette sous-section suit le même modèle que dans la langue anglaise. Certaines expressions et phrases utilisent les pronoms personnels subjectifs 'I', 'you' (au singulier et au pluriel), he/she/it, we, they, et who. Alors que j'ai fourni des phrases comportant ces formes de pronoms personnels subjectifs en tant qu'objets de phrases, tant le Treebank que l'annotation concernant cet ordre des mots ont été réalisés en utilisant la forme subjective des noms propres et des noms communs, pour lesquels je n'ai fourni qu'un seul exemple.

Pronoms personnels subjectifs comme sujet des exemples de phrase:

ȯmī k'ōmāgȯlȯ (j'ai cueilli une mangue) qui est simplifié bien que 🛇 (interdit de manière non conventionnelle dans les écrits) en ȯmī kā ōmāgȯlȯ (ȯmī + kā + ōmāgȯlȯ) = (moi + cueilli + mangue) ;

ē/me wė ālū (you (singular)/you (plural) + shut + mouth), translated literarily as (ē/me + wė + ālū) = (you/you + shut + mouth);

ī w'ūnyī (elle/il/elle est rentré(e) chez elle/lui/elle) qui est simplifié bien que 🛇 comme ī wā ūnyī (ī + wā + ūnyī) = (elle/il/elle + est venu(e) + chez elle/lui/elle);

āwā d'ūnyi (nous sommes à la maison) qui est simplifié quoique 🛇 en āwā + dē + ūnyi (nous + être + maison) ;

āmā d'ōbē (ils ont pris le couteau) qui est simplifié bien que 🛇 comme āmā + dū + ōbē (ils + ont pris + couteau) ; et, ēnē k'āfē ? (Qui a pris la serviette ?) Laquelle est simplifiée bien que 🛇 comme ēnē + kȯ + āfē ? (Qui + a pris + le tissu ?).

L'étape suivante que j'ai entreprise a consisté à construire une phrase avec un nom propre comme sujet de la phrase et un nom commun comme objet de la phrase, comme cela a été fait dans https://www.lancaster.ac.uk/fss/courses/.This a été fait parce que la forme d'ordre des mots considérée dans cette sous-section suit le même ordre des mots que l'anglais, qui était la langue annotée dans https://www.lancaster.ac.uk/fss/courses/.The phrase « Ūgbėdė gw'ȯjī ȯdė kā », qui se traduit par (Ugbede s'est assis sur un tabouret), est l'exemple utilisé. J'ai découvert que si la règle prétendument dominante sur la 'conventionnalité' qui adopte l'apostrophe (comme dans le mot gw'ȯjī ci-dessus) pour fusionner deux mots en un seul devait l'emporter ou rester consolidée par rapport à la traduction automatique (TA), l'annotation morphosyntaxique des textes deviendrait compliquée. Comme dans le cas du soi-disant « syntagme » gw'ȯjī qui peut être scindé en deux mots distincts, gwu qui signifie « sit » en anglais et ȯjī qui signifie également « head » en anglais mais est aussi utilisé pour signifier « on », « above » ou « over » par rapport à la double fusion « l'ȯjī » (pass head) dans un sens plus figuré (ou « went over » dans un sens concret) en raison d'un manque de mot alternatif pour exprimer le mot « on ».

Ainsi, conformément à l'appel à l'« expansion des formes contractées de plusieurs mots, afin que tous les mots aient des catégories grammaticales bien définies », en annotant la phrase « Ugbede s'est assis sur un tabouret », j'ai utilisé la forme dite « non conventionnelle » d'écriture de la phrase « Ūgbėdė gwū ȯjī ȯdė kā' » plutôt que « Ūgbėdė gw'ȯjī ȯdė ». La raison étant que la première (c.-à-d. Ūgbėdė gwū ȯjī ȯdė kā') se prête à l'analyse syntaxique et à l'annotation car elle est conforme au Penn Treebank Project, tandis que la seconde (c.-à-d. « Ūgbėdė gw'ȯjī ȯdė kā' ») ne l'est pas. Ici aussi, l'article indéfini « a » a été remplacé par le pronom indéfini « kā » qui se traduit en anglais par « one ». Bien que j'aie découvert que les articles sont classés comme une catégorie grammaticale distincte à part entière, mais puisqu'ils sont également considérés comme une sorte de déterminants et que le mot « one » peut être utilisé comme déterminant, la référence au mot « one » tel qu'il est employé dans la phrase est classée comme un article et traitée comme tel dans le corpus arboré présenté dans la Figure II.

p04-01.png

Figure II : Arbre d’analyse de l’ordre des mots sujet-verbe-objet dans Igala.

Ensuite, une seconde annotation morphosyntaxique basée sur des crochets utilisant le caractère de soulignement (_) sous forme d'étiquettes de catégorie grammaticale et l'utilisation de crochets annotés au début et à la fin avec le type de phrase [s……] a été fournie pour la Figure II comme suit ;

[S [NP Ūgbėdė_NP1 NP] [VP gwū_VVD [NP ȯjī_ II [NP ȯdė_NN1 kā_AT1 NP] NP] VP] S]

p04-02.png

## 2.3 Entités prépositionnelles non nommées et analyse et annotation syntaxique en Igala

Dans cette sous-section, j'ai fait référence à la 9e édition de l'Oxford Advanced Learner's Dictionary of English dans laquelle le mot préposition était défini comme – « un mot ou un groupe de mots tels que in, from, to, out of et on behalf of, utilisé avant un nom ou un pronom pour indiquer le lieu, la position, le temps ou la méthode » (Hornby, 2015). À ces cinq exemples de prépositions ci-dessus (in, from, to, out of, et on behalf of) se sont ajoutés onze autres exemples tirés de, qui comprenaient : « beneath », « beside », « between », « in front of », « inside », « near », « off », « through », « toward », « under » et « within ». Bien qu'il existe l'argument avancé par Ilori (2015) pour étayer son affirmation selon laquelle il existerait des prépositions nommées comme catégorie grammaticale en igala, allant jusqu'à contredire les arguments avancés par d'autres auteurs comme Atadoga (2011) et Ikani (2011) concernant l'emploi de parties du corps comme prépositions, une évaluation minutieuse des formes prépositionnelles en anglais relevées chez Hornby (2015) ci‑dessus m'a permis de constater qu'en réalité, la forme syntaxique de la langue igala ne contient pas de préposition au sens le plus précis du mot. Dans cette sous-section, je citerai un exemple tiré du résumé d'Ilori (2015) où il considère le mot « tū » comme contenu dans la locution « tú unyí un », dans laquelle il voulait probablement dire que le mot « tū » correspond spécifiquement au mot anglais « to », alors qu'en réalité « tū » signifie « déballer » ou « défaire », tandis que « tū » par rapport à la préposition n'a aucune base syntaxique et n'existe que lorsque sa « racine » (le « t ») est liée au mot « ūnyī » (maison ou foyer en anglais) sous la forme « tūnyī », comme je l'ai souligné dans la sous-section 2.2 à propos du ou des mot(s) « gw'ȯjī » ou « gwū ȯjī » et de la manière dont cette forme de contraction de deux mots par élision ou par commodité pourrait être une source d'ambiguïté ou d'entrave à l'encodage des mots dans la conception des arbres d'analyse et de l'annotation.

Dans les lignes qui suivent, je tenterai de démontrer comment les prépositions sont des entités non nommées dans le cadrage syntaxique des phrases en igala, en utilisant les cinq exemples de prépositions fournis par (Hornby, 2015) ci-dessus.

En ce qui concerne « in » ; « ȯdūdū à wa » (matin + nous + venir) qui se traduit en réalité par « in the morning we shall come » ou « we come in the morning » ;

En ce qui concerne « from » ; « ōmō ī kwȯ' » (là + il/elle/cela + a quitté), qui signifie en réalité (« il/elle/cela est venu(e) de là » en anglais). Dans un sens, le verbe « left » est utilisé à la place de « from » dans la grammaire igala ;

Il a déjà été fait référence au mot 'to' ci-dessus, il n'y a donc pas lieu d'ajouter une expression supplémentaire à cela ici;

En ce qui concerne 'out of '; "ėfū mā ī kwȯ" (ventre + eux + il + est venu) qui signifiait en fait ("out of them it came") en anglais;

En ce qui concerne « on behalf » ; « t'ȯdū mī » (t + nom + moi) qui signifie en réalité (« because of me » en anglais).

Ainsi, en utilisant la première phrase en ce qui concerne le mot « in », un arbre syntaxique simple avec son annotation a été fourni pour apporter plus de lumière sur ce point. La figure III contient l'arbre de syntaxe.

p05-01.png

Figure III : Arbre de syntaxe exprimant une préposition non nommée en Igala.

p05-02.png

Figure IV : Arbre syntaxique montrant la conversion des déterminants possessifs de l'igala vers l'anglais.

J'ai ensuite formulé une annotation pour la forme syntaxique de l'arbre de parse de la Figure III comme suit ;

p05-03.png

## 3. Conversion de la forme syntaxique Igala en anglais

Dans cette section, j'ai converti l'arbre d'analyse/annotation de la section précédente en anglais sous la forme d'une traduction.

## 3.1 Conversion des déterminants possessifs Igala en anglais

J'ai constaté qu'en raison de l'inversion latérale des syntaxes, il existe une incongruité disproportionnée lors de la conversion des formes syntaxiques de l'igala vers l'anglais au sens figuré, comme illustré ci‑dessous. Ce que j'ai fait était d'inverser les phrases utilisées dans la deuxième section ci-dessus de l'anglais à l'igala.

Ainsi, les trois formes de pronoms ; leur (mā), mon (mī), et son/sa (nwū) sont considérées en ce qui concerne leurs applications syntaxiques dans les phrases anglaises données dans l'exemple ci-dessous.

p05-04.png

J'ai ensuite créé un arbre d'analyse représentant cet ordre des mots en anglais comme ceci;

Figure IV a été annotée ainsi : [S [NP Child_NP1 NP] [PPROP their_PPROP [VP died_VVD [NP afternoon_NN1 NP] ADVP_yesterday] S] Ceci a également été écrit alternativement comme : [NP afternoon NP]

p05-05.png

## 3.2 Conversion de l'ordre des mots sujet-verbe-objet d'Igala à l'anglais

Nonobstant le fait que l'ordre des mots sujet-verbe-objet en anglais existe également en Igala, obtenir une traduction précise de l'anglais à l'Igala s'est avéré un peu problématique comme le montre la Figure V.

p05-06.png

Figure V : Arbre syntaxique montrant la conversion de l'ordre des mots sujet-verbe-objet de l'igala vers l'anglais.

Une annotation syntaxique basée sur des crochets pour la Figure V est donnée ci-dessous ;

[S [NP Ugbede_NP1 NP] [VP sat_VVD [PP on_ II [NP stool_NN1 a_AT1 NP] PP] VP] S]

Cela a également été écrit alternativement comme ;

p06-01.png

## 3.3 Conversion des formes syntaxiques Igala avec des entités prépositionnelles non nommées par analyse syntaxique et annotation en anglais

Ici, ce que j'ai fait a été de copier la phrase utilisée pour l'analyse syntaxique et l'annotation de la phrase portant la préposition sans nom dans la sous-section 2.3 (c'est-à-dire « ȯdūdū à wa » - (matin + nous + venir)) qui a été utilisée pour construire une analyse syntaxique et une annotation correspondantes en anglais. Cela a été représenté dans l'analyse syntaxique en constituants sur la figure VI et l'annotation qui vient en dessous.

p06-02.png

Figure VI : Arbre de syntaxe montrant la conversion des entités prépositionnelles non nommées de l'Igala à l'anglais.

La forme syntaxique de la phrase sur la Figure VI a été annotée comme suit ;

p06-03.png

## 4. Résultats générés à partir de la structure grammaticale de la langue igala

D'après les résultats de ce travail, il devient évident que l'annotation de la forme syntaxique de la langue igala resterait une tâche herculéenne. Le fait que certains mots soient arbitrairement joints en un seul par l'utilisation de l'apostrophe rend difficile pour les mots de conserver leur forme originale lors de la composition de la phrase, rendant difficile leur annotation et leur traduction vers une langue seconde. La conséquence en est la présence d'un signal mixte lorsqu'on tente de convertir la forme syntaxique de la langue igala vers l'anglais dans un sens plus spécifique.

Ainsi, en utilisant l'apostrophe pour joindre deux mots en un seul, comme c'est actuellement le cas chez la plupart des scripteurs de la langue igala, la locution « leave there » devient « kw'ōmō » /kwomo/ plutôt que « kwȯ ōmō » /kweu omo/ et « put there » devient « t'ōmō » plutôt que « tō ōmō » – une pratique adoptée pour favoriser la fluidité dans la conversation (Momoh 2023). Étant une langue isolante agglutinant des morphèmes flexionnels comportant plus d'une unité de sens dénotée par des catégories grammaticales distinctes, la manière d'encoder le mot spécifique et ces unités selon leur unité grammaticale individuelle lors de l'analyse syntaxique et de l'annotation pour une traduction automatique fonctionnelle devient difficile. Alors que la plupart des mots sont classés comme ayant un rapport de 1:1 morphème par mot, d'autres comme 'k'ōmō' /komo/ (frapper là), 'g'ōmō' /gomo/ (regarde là), ont un rapport de 2:1 morphème par mot qui est similaire à l'explication fournie en ce qui concerne le russe par Comer (2021). Partant de ce constat, l'auteur a constaté que les codes syntaxiques pour l'analyse syntaxique et l'annotation des catégories grammaticales (POS) proposés dans le Penn Treebank Project sont insuffisants pour l'analyse syntaxique et l'annotation de la langue igala. Faut-il utiliser des identifiants spéciaux tels que le signe plus (+) ou la barre oblique (/) pour exprimer l'agglutination, c'est-à-dire pour représenter la forme analysée de gomo (regarde là-bas) comme VP+ADVP ou V+ADV et VP/ADVP ou V/ADV sur les tirets verticaux, ou faut-il écrire des mots comme 'k'ōmō' /komo/ (frappe là-bas), 'g'ōmō' /gomo/ (regarde là-bas) sans recourir à la marque d'élicitation que constitue l'apostrophe, cela reste une question préoccupante. Bien que l'utilisation du + (signe plus) telle que suggérée ici s'accompagne d'un mode d'application différent, cela se rapproche du même indicateur utilisé pour analyser la contraction sous la forme PPSM+BEM dans le corpus pionnier Brown Corpus (Marcus, Santorini, and Marcinkiewicz, 1993).

En ce qui concerne l'arbre syntaxique et l'annotation des déterminants possessifs inversés, je n'ai trouvé qu'une corrélation moyenne de 20 pour cent dans la séquence de l'ordre des mots lors de la traduction syntaxique de l'igala vers l'anglais et vice versa, avec pour résultat que, sur les cinq mots utilisés dans chaque cas, seul le mot médian « kwū » et « died » a conservé une cohérence dans la séquence de l'agencement des mots, comme le montrent les troisièmes tirets verticaux sur les deux figures (I et IV) représentant les arbres syntaxiques ainsi que sur leurs annotations individuelles. Il y avait également un déplacement concomitant de quatre (Ōmā, mā, ōrōkā et ōnālē) des cinq mots igala et de quatre (child, their, afternoon et yesterday) des cinq mots anglais lors de la conversion de l'igala vers l'anglais. Suite à ce fait, j'ai trouvé un écart de 80 points de pourcentage à cet égard. De plus, en raison de l'absence de préposition dans les formes de mots Igala, le mot 'ȯjī' (tête) - mais pourrait tout aussi bien être traduit par 'voleur' en anglais et qui était représenté comme un nom sur le troisième tiret vertical de l'arbre syntaxique de la Figure II - a été remplacé par le mot 'on' - une préposition, lors de la conversion en anglais sur la Figure V. L'implication de ceci est une séquence nom + nom dans l'ordre syntaxique de la phrase 'ȯjī ȯdė' comme l'a également fait Ilori (2015) à la page 146 de son article.

Il s'ensuit donc que le mot « ȯjī », dans un sens plus figuré, devrait être reconnu comme « on » lors de la conversion des mots par analyse syntaxique et annotation en anglais, auquel cas l'arbre syntaxique et l'annotation de la phrase « Ūgbėdė gwȯjī ȯdė kā » devraient être redessinés conformément au format du Brown Corpus comme suit :

p07-01.png

Figure VII : Arbre syntaxique montrant la division de gwȯjī en gwū et ȯjī.

p07-02.png

ȯdė_NN1 kā_AT1 NP] VP+PP] S]

p07-03.png

De plus, le Treebank et l'annotation syntaxique concernant les tableaux II et IV montrent une corrélation de 80 pour cent dans la séquence des mots, avec pour résultat que, bien qu'il n'y ait pas d'élision de mot comme c'est le cas pour les figures I et IV, les mots 'a' et 'stool' ont cependant été inversés latéralement par rapport à la séquence d'ordre dans laquelle ils existent dans la structure syntaxique igala, de sorte que la forme syntaxique ou phraséologique de 'a stool' en anglais est devenue inversée en 'stool a' ou 'stool one' ⟺ ȯdė kā. Partant de ce fait qu'aucun des cinq indicateurs représentés dans les figures I à VI n'est resté sans nom dans les deux langues, une exactitude de traduction de 60 pour cent utilisant la structure sujet-verbe-objet pour l'igala et l'anglais a été obtenue. J'ai constaté qu'à partir des cinq variables syntaxiques illustrées par les cinq tirets verticaux sur les arbres d'analyse des figures IV et V, il y avait une exactitude de fréquence de mot de 3 > 2 et une erreur de 2 < 3. Cela implique qu'il y a eu une erreur de 40 % à cette fin.

À travers les figures III et VI, nous avons également remarqué deux types d'erreurs ou d'inexactitudes dans la traduction à partir de la séquence de mots sur les figures, comme cela était également apparent dans le schéma de flux de l'annotation du contenu des arbres syntaxiques sur les deux figures. Il y avait des cas d'inversion latérale dans la traduction de l'Igala à l'anglais.

La Figure VIII est un traducteur bidirectionnel à exploration qui peut également servir de chercheur mot-à-signification grâce aux canaux reliant A1 et A2 et B1 et B2. L'entrée est reçue via l'un ou l'autre côté du traducteur, la couleur bleue représentant les canaux pour le flux et la transmission des mots en igala, tandis que les boîtes de couleur orange représentent l'équivalent anglais. Le rectangle vertical dans chaque partie des trois cases codées I (entrée) est le transformeur qui est connecté à huit banques de mots représentant les huit parties du discours dans lesquelles les corpus seraient introduits. A1 et B1 sont des récepteurs de mots tandis que A2 et B2 sont des analyseurs syntaxiques mais peuvent également fonctionner alternativement comme processeur d'entrée et de sortie si la machine reçoit l'ordre de trouver le mot et le sens dans la langue donnée.

A1 et B1 sont des analyseurs syntaxiques et/ou annotateurs basés sur machine qui décodent les questions transmises depuis les boîtes I concernées de la/des langue(s) source tandis que A2 et B2 sont des convertisseurs d'analyse syntaxique et/ou d'annotation vers la langue cible. Une fois la syntaxe déplacée à travers les différentes boîtes I, celles-ci sont envoyées dans le transformeur.

Depuis les huit (8) boîtes alimentées en lemmes ou en mots selon la catégorie grammaticale donnée de chaque lemme, c'est-à-dire les boîtes attachées à C1 et D1, ces lemmes et leurs significations telles que stockées dans chacune des huit boîtes sont connectés directement par les huit tuyaux reliant les huit boîtes aux récepteurs de mots attachés au transformeur individuel.

p08-01.png

Figure VIII: Modèle bidirectionnel pour la conception d'un traducteur automatique de l'anglais vers l'Igala et de l'Igala vers l'anglais.

Lorsque la syntaxe reçue par A2 et B2 est analysée/annotée par le convertisseur à intégrer dans A2 et B2, elle est déplacée par le canal I suivant du pipeline vers les transformeurs de chaque côté du modèle. Plutôt que de traduire la syntaxe directement, le transformeur, à l'aide des scanneurs qui lui sont connectés, trouve des mots équivalents dans les boîtes de catégories grammaticales, en utilisant les scanneurs et les récepteurs de mots rattachés au transformeur individuel. Par le biais du récepteur de mots, les mots individuels de la séquence de phrases/syntaxe sont déplacés dans le scanner, puis envoyés dans le transformeur pour examen. Pour traiter les cas d'ambiguïté, d'inversion latérale et d'entités grammaticales non nommées, le transformeur doit être entraîné par étiquetage morpho-syntaxique, auquel cas, tout en reconnaissant plusieurs significations d'un lemme donné telles qu'elles seront tirées directement de C1 et D1. Des applications contextuelles telles que l'ȯjī ou lȯjī (tête passée) dans un sens plus littéraire, mais en réalité « passé par-dessus », ou gw'ȯjī ou gwȯjī (tête assise) dans un sens plus littéraire, mais en réalité « s'asseoir dessus », lors de la conversion vers l'anglais seraient alors représentées dans le transformeur comme l'ȯjī ou lȯjī => « went over », tandis que la forme syntaxique gw'ȯjī ou gwȯjī => « sit on ». Ce faisant, le transformeur, même s'il recevrait de multiples significations pour les mots qui lui sont fournis, serait capable de prédire le contexte réel dans lequel la traduction devrait apparaître, de sorte qu'au lieu d'interpréter une expression comme gwȯjī ėbījė par 'sit head iron', cela devient gwȯjī => {sit on} + {iron} => {sit on iron} => {sit on the iron}. Vous remarquerez l'encrage de l'article défini « the » avec un fond teinté de beige. La raison est que, lors de l'analyse syntaxique/annotation de l'igala vers l'anglais en A2 sur la figure VIII, l'analyseur syntaxique/annotateur n'a pas pu identifier le mot « the », mais comme la forme syntaxique « sit on chair » n'avait pas un sens parfait en anglais, le mot a reçu une couleur distincte pour exprimer une insertion explicite qui n'est pas intrinsèque à la séquence de mots de la langue source, lors de la traduction.

En sondant les entités grammaticales non nommées, un format d'annotation similaire — le BIO, qui est utilisé pour sonder les entités nommées dans la prédiction de mots, est employé, bien qu'avec un objectif différent. Le format d'annotation BIO - (inside, outside, beginning) a été utilisé de manière parallèle pour détecter les mots et leurs significations dans les deux langues. Grâce à la fourniture des formes de syntaxe annotées en BIO dans le transformeur, le transformeur serait capable d'identifier la séquence de mots qui se rapproche le plus de la signification d'une autre séquence de mots dans la langue correspondante, c'est-à-dire, en ce qui concerne l'expression ; kā kū gbō (say + that I + hear) 'say it let me hear', cette expression serait annotée en utilisant le format BIO comme ; say (B), it (O), let (O), me (O), hear (I). Grâce à l'application d'un scanner capable de détecter à la fois les entités connues et inconnues lors de la traduction, il devient possible pour la machine de traduction de percevoir les mots qui ne sont pas dans la séquence de mots telle que traduite, qu'elle marque alors en utilisant la couleur tan mentionnée ci-dessus.

Les deux scanneurs attachés aux transformeurs (les deux boîtes de couleur havane attachées au transformeur (la boîte de forme rectangulaire verticale liée à C1, les deux boîtes I bleues et le T bleu à gauche, et D1, les deux boîtes I de couleur orange et la boîte T jaune à droite)), sont des détecteurs de mots. Selon l'application, l'une ou l'autre de ces boîtes beiges envoie les mots en séquence, tels que reçus du transformeur depuis A2 ou B2, via l'un des deux I de chaque côté de la figure VIII, après analyse syntaxique et annotation. Il détecte ensuite ces mots et leurs significations via un mécanisme d'exploration, un peu à la manière du moteur de recherche Google, à partir de l'une des huit boîtes de catégories grammaticales situées sur les deux flancs éloignés du modèle, en vue de leur étiquetage et de leur transformation en sens. Les deuxièmes cases beiges à l'intérieur du transformeur ; les deux en haut, collectent et renvoient les mots et significations non sélectionnés du transformeur vers les cases de catégorie grammaticale dont ils proviennent en C1 et D1. Lorsque les mots sont traités dans le transformeur, les équivalents traduits sont envoyés via un tuyau aux deux boîtes T de chaque côté, pour transmission ultérieure à l'écran en tant que sortie.

## 5. Conclusion

L'objectif de cet article est donc né de la nécessité de créer des arbres d'analyse syntaxique et une annotation syntaxique pouvant servir de socle aux matériaux d'entrée utilisables pour le développement d'un corpus linguistique pour l'igala, une ressource indispensable qui n'existe pas « réellement » car les travaux antérieurs d'Ayegba et al. (2017) sont insuffisants faute de la modélisation extensive requise, tandis que l'article de Joshua et al. (2020) contient bien des corpus construits sur des interfaces de programme, mais ceux-ci ne sont pas exclusivement centrés sur les corpus et ne sont donc pas assez complets pour répondre à l'essence de ce sujet — le corpus.

## 6. Remerciements

Cela a été réalisé grâce à l'encouragement et au soutien technique que j'ai reçus de la part du professeur Menno van Zaanen de l'Université du Nord-Ouest en Afrique du Sud et du reste de son équipe du Centre sud-africain pour les langues numériques (SADiLaR). De plus, ma gratitude va à la direction du Département d'histoire et d'études de sécurité de l'Université Umaru Musa Yar'adua (UMYU) à Katsina où je suis actuellement étudiant diplômé et la direction de l'Université Prince Abubakar Audu (PAAU), Anyigba, État de Kogi, Nigéria, où je travaille actuellement pour leur patience et encouragement tout au long de la période de cette recherche - avec un mot spécial de «merci» pour le vice-chancelier de PAAU, le professeur Marietu Ohunene Tenuche et l'actuel chef du Département d'histoire et d'études de sécurité à UMYU, Dr Waisu Safana. Il convient également de mentionner l'effort de mon cher oncle, feu Alhaji Ibrahim Sule, qui fut la main qui m'a tenu à travers l'école après que j'ai perdu mon père à l'âge de six ans seulement. L'effort collectif des personnes/groupes susmentionnés, que ce soit de manière immédiate ou lointaine, envers cet article restera toujours vivace dans mon cœur.

## 7. Déclaration éthique

Lors de la conception d'un travail de cette nature, de nombreux problèmes doivent être traités, comme la valeur des jeux de données de référence à partir desquels les données sont extraites, ou la question de savoir si les entrées disponibles pouvant servir à modéliser un traducteur automatique — telles que les tokens, les lemmes et les corpus pour une langue sous-dotée comme l'igala, où la plupart des données existantes nécessitent une vérification supplémentaire avant d'être intégrées dans d'autres formes de ressources — restent une question cruciale. Bien que l'exactitude de la présentation et l'approche adoptée pour la modélisation par cet auteur ne fassent pas de doute dans un sens plus littéraire, le fait qu'il n'y avait pas de disposition pour l'analyse syntaxique des formes de mots contractées ou agglutinantes par les étiquettes P.O.S du Penn Treebank a conduit au mélange de ces étiquettes avec une approche distincte qui a été élaborée par ce même auteur - une approche qui se rapproche des jeux d'étiquettes et de l'approche utilisés par le Brown Corpus. Ainsi, en utilisant le contenu de ce document, les consommateurs devraient prendre des précautions supplémentaires en raison de certaines étapes et approches qui pourraient ne pas être aussi précises.

## Notes

1 https://www.acsu.buffalo.edu/~dryer/DryerWalsSOVNoMap.pdf

2 https://digitalcommons.liberty.edu/cgi/viewcontent.cgi?article=1106&context=honors

3 https://doi.org/10.48448/e0np-e385

4 https://www.lancaster.ac.uk/fss/courses/ling/corpus/Corpus2/2PARSE.HTM#:~:text=This%20term%20alludes%20to%20the,article%2C%20P%3Dpreposition

5 https://www.cs.rochester.edu/u/brown/242/assts/termprojs/micha/docs/parser.html

6 https://academicguides.waldenu.edu/writingcenter/grammar/prepositions%23:~:text=%22beneath%2C%22%20%22beside%2C,street%20from%20the%20grocery%20store

## 8. Références

Abraham Sunday Unubi. (2017). "The use of conjunctions in English and Igala: A contrastive analysis". International Journal of Advanced Multidisciplinary Research, 4(8), Pages 34-64.

Atadoga, F. T. (2011). 'Igala Morphology'. In Omachonu G. S (ed.) Igala language Studies. Saarbrucken: LAP Lambert Academic Publishing, Pages 76-102.

Attabor Theophilus Ocheja. (2019). "Syntactic Interference: A Study of Ígálá and English Noun Phrases in Malachai 1:6 and Mathew 2:1". Journal of Literature, Languages and Linguistics, 60, Pages 40-46.

Ayegba Sani Felix, Osuagwu O.E, and Njoku Dominic Okechukwu. (2014). "Machine Translation of Noun Phrases from English to Igala using the Rule-Based Approach". West African Journal of Industrial and Academic Research, 2(1): 18-28.

Ayegba Sani Felix, Abu Onoja, and Musa Ugbedeojo. (2017). "English - Igala Parallel Corpora for Natural Language Processing Applications". International Journal of Computer Applications, 171(9): 1-6.

Bonami Olivier, Godard Danièlle, and Marandin Jean-Marie. (1999). "Constituency and word order in French subject inversion". In Gosse Bouma, Erhard Hinrichs, Geert-Jan M. Kriujff, and Richard Oehrle (eds.) Constraints and Resources in Natural Language Syntax and Semantics. CSLI Publications, Stanford, USA, Pages 1-20.

Borsley D. Robert, Tallerman Maggie, and Willis David. (2007). The Syntax of Welsh. Cambridge University Press, Cambridge, UK, Pages 1-102.

Brunato Dominique, and Dell-Orletta Felice. (2017). "On the order of words in Italian: a study on genre vs complexity". In Proceedings of the Fourth International Conference on Dependency Linguistics, Pisa, Italy, September 18-20, Pages 25-31.

Comer J. William. (2021). "Russian's Most Frequent Words and Implications for Vocabulary Instruction," Russian Language Journal, 71(1), Emmanuel Edoja Achor, and Christiana Akor. (2015). "Exploring the Use of Igala Language in Teaching Statistics to Samples of Selected Primary Six Learners". In Proceedings of ISTE International Conference on "Towards Effective Teaching and Meaningful Learning in Mathematics, Science and Technology", University of South Africa, Pages 55-66.

Fransen Theodorus. (2020). "Automatic Morphological Parsing of Old Irish Verbs Using Finite-State Transducers". Leeds Working Papers, 1: 15-28.

Frazier Lyn. (1980). "Parsing and Constraints on Word Order". University of Massachusetts Occasional Papers, 6(5): 177-198.

Gudivada N. Venkat, and Arbabifard Kamyar. (2018). "Computational Analysis and Understanding of Natural Languages: Principles, Methods and Applications". In Gudivada N. Venkat, and Rao, C.R. Handbook of Statistic 38. https://www.sciencedirect.com/topics/computer-science/translation-model#:~:text=The%20language%20model%2 0can%20be,using%20the%20notion%20of%2 0alignments.

Hornby S. Albert. (2015). Oxford Advanced Learner's Dictionary of English, (Ninth Edition). Oxford University Press, Oxford, UK, Page 1210.

Ikani, F. E. (2011). 'Sense and Meaning Relations in Igala'. Omachonu G. S (ed.) Igala Language Studies. Saarbrucken: LAP Lambert Academic Publishing, Pages152-176.

Ileana Paul, and Postdam Eric. (2024). "Malagasy Framing Demonstratives and the Syntax of Doubling". Glossa: A Journal of General Linguistics, 9: 1-37.

Ilori, Folorunso. (2015). "Prepositions in Igala". Ihafa: A Journal of African Studies, 7(1): 139-160.

Joshua Attah, Ayegba Sani Felix, and Orah Richard Ojochegbe. (2020). "Example Based Machine Translation of English to Igala Language". International Journal of Trend in Research and Development, 7(1): Pages 32-35.

Jurafsky Daniel, and Martin H. James. (2009). Speech and Language Processing. https://en.wikipedia.org/wiki/Transfer-based_machine_translation#cite_note-slp-1

Kalin Laura. (2014). "The syntax of OVS word order in Hixkaryana". Natural Language and Linguistic Theory, 32: 1089-1104.

Mahmud Mohammed Momoh. (2023). "Vowels and the Igala Language Resources". In Proceedings of the Fourth workshop on Resources for African Indigenous Languages, pages 106-114.

Marcus Mitchell, Beatrice Santorini, and Marcinkiewicz Mary Ann. (1993). "Building a Large Annotated Corpus of English: The Penn Treebank". Association for Computational Linguistics, 19(2), pages 113-330.

Marcus Mitchell, Kim Grace, and Marcinkiewicz Mary Ann., et al. (1994). "The Penn Treebank: Annotating Predicate Argument Structure". https://aclanthology.org/H94-1020.pdf

McCone K. (1997). The Early Irish verb. Revised edition with index verborum. An Sagart, Maynooth, Ireland, Page 17.

Million Meshesha, and Yitayew Solomon. (2018). "English-Afaan Oromo Statistical Machine Translation". International Journal of Computational Linguistic, 9(1): 26-31.

Minhui Choi, and Emily Schmidt. (2015). "Postpositions and Word Order Variation in Korean". Linguistic Portfolios, 4(10): 108-115.

Mun Seongmin, and Desagulier Guillaume. (2022). "How do Transformer-Architecture Models Address Polysemy of Korean Adverbial Postpositions?". In Proceedings of Deep Learning Inside Out (DEELIO 2022): The Third Workshop on Knowledge Extraction and Integration for Deep Learning Architectures, Dublin, Ireland, Pages 11-21.

Namboodiripad Savithry, Kim Dayoung, and Kim Gyeongnam. (2017). "English-dominant Korean-speakers show reduced flexibility in constituent order". Chicago Linguistic Society, 53:

Philpot, W.T.A. (1935). "Notes on the Igala Language". Bulletin of the School of Oriental Studies, 7(4): Pages 897-912.

Santorini Beatrice. (1990). Part of Speech Tagging Guidelines for the Penn Treebank Project. https://www.cis.upenn.edu/~bies/manuals/tagguide.pdf

Wang, L., Tu, Z., and Zhang, X., et al. (2017). "A Novel and Robust Approach for Pro-drop Language Translation". Machine Translation, 31: 65-87.
