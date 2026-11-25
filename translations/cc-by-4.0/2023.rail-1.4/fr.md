> Machine translation (fr) of "SpeechReporting Corpus: annotated corpora of West African traditional narratives" by Katya Aplonova, Izabela Jordanoska, Timofey Arkhangelsky, Tatiana Nikitina, https://aclanthology.org/2023.rail-1.4/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## SpeechReporting Corpus: corpus annotés de récits traditionnels ouest-africains

Katya Aplonova, Izabela Jordanoska, Timofey Arkhangelsky, Tatiana Nikitina

**Affiliations**  
Katya Aplonova  
Izabela Jordanoska  
Timofey Arkhangelsky  
Tatiana Nikitina  
LLACAN, CNRS  
LACITO, CNRS  
Universität Hamburg  
LACITO, CNRS  
  
  
  


## Résumé

Cet article décrit le SpeechReporting Corpus, une collection en ligne de corpus annotés pour une gamme de phénomènes de discours. Les corpus contiennent des contes populaires de 7 langues ouest-africaines moins étudiées. Outre sa valeur pour la linguistique théorique, en particulier pour l'étude du discours rapporté, la base de données est une ressource importante pour la préservation du patrimoine culturel immatériel des langues minoritaires et le développement et la mise à l'essai d'outils informatiques applicables à plusieurs langues.

## 1 Introduction

Les dernières décennies ont vu un regain d'intérêt pour les questions d'extinction des langues, conduisant à des efforts accrus pour décrire et documenter les langues en voie de disparition dans le monde. Les principaux effets néfastes de la mise en péril des langues sont également associés à la perte de différentes formes de connaissances traditionnelles (Hale, 1992).

Le corpus SpeechReporting (Nikitina et al., 2022) explore la relation entre des pratiques discursives spécifiques qui représentent le noyau de la transmission des connaissances traditionnelles et les stratégies linguistiques qui lui sont associées, en se centrant sur un problème particulier : le rapport de discours dans les récits traditionnels oraux en Afrique de l'Ouest, le "continent oral par excellence" et le berceau d'une tradition orale riche et vibrante (Scheub, 1985; Finnegan, 2007, inter alia).

L'article est structuré comme suit: dans la section 2, nous discutons des raisons pour lesquelles la base de données SpeechReporting est particulièrement pertinente pour l'Afrique de l'Ouest. La section 3 est consacrée à la composition de la base de données. Notre flux de travail et nos outils sont décrits à la section 4, tandis que la section 5 montre quelques principes de base de l'annotation du discours rapporté. Dans la section 6, nous montrons comment fonctionne l'interface en ligne du corpus. Dans la section 7, nous illustrons comment le corpus peut être utilisé pour la diffusion parmi les communautés linguistiques afin d'archiver et d'aider à préserver le patrimoine culturel immatériel. La section 8 conclut le document.

## 2 Les traditions de narration ouest-africaines

Dans les sociétés rurales traditionnelles d'Afrique de l'Ouest, le sentiment aigu de perte est lié au rôle décroissant joué par les pratiques de discours culturellement significatives: même dans les communautés qui conservent l'organisation sociale et l'économie traditionnelles, les pratiques culturelles occidentales modernes s'infiltrent dans la vie quotidienne avec de nouvelles formes de divertissement (télévision, émissions de radio) et d'éducation (école obligatoire de style occidental). Sous la pression de ces nouvelles pratiques, les formes traditionnelles de transmission des connaissances - y compris les techniques de narration et d'instruction - deviennent insignifiantes, et peuvent éventuellement tomber en désuétude.

Dans de nombreuses communautés locales à travers l'Afrique, la narration d'histoires est bien plus qu'un passe-temps favori. Considéré comme un élément essentiel du patrimoine culturel, il sert de moyen central pour la transmission du savoir culturel. Les traditions de narration ont accumulé des techniques linguistiques particulières qui répondent aux besoins de pratiques spécifiques de production et de performance textuelles. Au fur et à mesure que les traditions de narration disparaissent avec les générations plus âgées de locuteurs, elles emportent avec elles une gamme d’outils linguistiques sur lesquels reposaient ces techniques spécialisées (Nikitina, 2018).

Bien que les traditions orales de l'Afrique de l'Ouest aient reçu une attention considérable de la part des anthropologues (Finnegan, 1970, 2012), leurs aspects linguistiques n'ont pas fait l'objet d'une investigation systématique. Nos connaissances sur les façons particulières dont la langue est utilisée dans les genres traditionnels sont largement limitées à des observations de l'utilisation fréquente de vocabulaire spécial et de formules d'ouverture/fermeture (Cosentino, 1980), de chant (Innes, 1965; Burnim, 1976; Azuonye, 1999), et de diverses formes de répétition (Finnegan, 1967, 1977). L'objectif de notre base de données est de commencer à combler cette lacune en utilisant une approche interdisciplinaire combinant une analyse rigoureuse des données primaires avec une attention méticuleuse aux caractéristiques de genre et aux contextes culturels spécifiques de la production textuelle.

## 3 Composition de la base de données

Le SpeechReporting Corpus contient plusieurs sous-corpus d'histoires traditionnelles, annotés pour un certain nombre de phénomènes discursifs à l'aide du logiciel et des outils ELAN-CorpA (Chanard, 2015; Nikitina et al., 2019). Il est mis à jour régulièrement avec les nouvelles données disponibles, y compris les données provenant de nouvelles langues. Le projet implique actuellement 11 langues différentes, dont 7 sont parlées en Afrique de l'Ouest. Tous les textes sont transcrits, glossés, traduits et annotés. Le tableau 1 répertorie les langues ouest-africaines dans la base de données, leur affiliation génétique et le pays où elles sont parlées.

p02-01.png

Tableau 1: Langues ouest-africaines dans la base de données SpeechReporting

Dans le cadre du projet, nous travaillons avec des textes (oraux et écrits) et non avec des données recueillies par élicitation. Cela permet d'éviter l'influence de la langue de travail, et le jugement potentiel des locuteurs sur « l'usage approprié de la langue ». Par exemple, les pronoms logophoriques, les répétitions et certaines interjections et idéophones sont très difficiles à éliciter, bien qu'ils apparaissent fréquemment dans les récits.

Nous avons également restreint le genre des textes avec lesquels nous travaillons. Le corpus est annoté pour le discours rapporté (voir Section 6), et ainsi, nous avons choisi les contes de fées comme source de données principale, puisque dans la plupart des contes de fées la force motrice de la narration est la communication entre les personnages.

Malgré les efforts pour maintenir la cohérence du genre entre les langues, les données restent très diverses. Par exemple, il comprend des transcriptions archivées, des données du terrain, des enregistrements de conteurs professionnels ainsi que de personnes ordinaires, un ou plusieurs participants. Le tableau 2 contient des informations sur la composition du corpus.

p02-02.png

Tableau 2 : Composition de la base de données Discourse Reporting (langues ouest-africaines uniquement)

Dans le tableau, le « format de données » fait référence à la modalité des données. Pour certaines langues, nous avons des fichiers audio, des fichiers vidéo et des transcriptions écrites correspondantes, tandis que pour d'autres, nous n'avons que les transcriptions écrites. Alors que 'Tokens' se réfère au nombre de jetons, 'Phrases' se réfère au nombre total d'unités intonatives dans lesquelles les textes de cette langue sont segmentés. 'Textes' fait référence au nombre de fichiers ELAN distincts par langue, chacun correspondant à un récit.

Nous transcrivons les textes en utilisant des orthographes basées sur l'alphabet phonétique international. Les langues africaines dans la base de données n'ont pas une orthographe standardisée qui est largement utilisée par les locuteurs natifs. Les matériaux publiés sont rares et, dans la majorité des cas, ont été développés par les auteurs des corpus et reposent sur une orthographe identique ou similaire.

## 4 Flux de travail et outils

Le projet unit plusieurs collaborateurs qui travaillent dans différents cadres et utilisent différents outils pour la documentation et l'analyse des données. En conséquence, nous avions deux flux de travail de base. Dans l'un, la segmentation et la transcription sont réalisées dans SayMore (Hatton, 2013) ou ELAN (n.a., 2022; Sloetjes et Wittenburg, 2008). Les textes segmentés et transcrits sont glossés dans Toolbox ou Flex, puis importés dans ELAN afin d'ajouter des annotations de discours rapporté. L'autre flux de travail permet aux chercheurs d'utiliser un seul produit logiciel, ELAN-CorpA pour la segmentation, la transcription, le glossing et l'annotation du discours rapporté.

Les fichiers annotés sont vérifiés manuellement et à l'aide des ELAN Tools (Chanard, 2019), une collection de scripts qui vérifie la cohérence des étiquettes et la structure des fichiers ELAN. La vérification manuelle consiste, entre autres, à relire les traductions libres et à rechercher les irrégularités dans les glosses et l'analyse morphémique. Les fichiers doublement vérifiés sont téléchargés sur Tsakorpus.

Les collaborateurs pouvaient contribuer au projet de diverses manières. Depuis 2019, nous avons eu 4 postdoctorants, 2 doctorants, 6 assistants de recherche et 8 visiteurs académiques non contractuels travaillant sur le corpus.

## 5 Annotation du discours rapporté

L'annotation du discours rapporté se compose de quatre niveaux: la fonction des éléments de la construction; le type syntaxique de la construction; le type sémantique du rapport de discours; et l'encodage des participants dans le rapport de discours. Ils correspondent à quatre niveaux ELAN supplémentaires (dans notre modèle, qt, rp, typ et par, respectivement). La figure 1 est un exemple de notre annotation d'une phrase de Gizey dans un fichier ELAN.

Nous expliquons ci-dessous les principes de base de l'annotation qui sont pertinents pour la recherche dans l'interface du corpus.

Une construction de discours rapporté est composée de différents éléments ; par exemple, dans John said: Hello! l'énoncé rapporté (Hello!) est introduit par une proposition décrivant l'événement de parole (John said). Dans l'exemple de Gizey dans la Figure 1, "elle dit" est exprimé par un Quotatif, tandis que "donne du millet; cette jument rouge de la mienne..." est un rapport de Discours. Le type sémantique du rapport Discours est Commande.

Les différents types syntaxiques de constructions de discours rapporté sont représentés visuellement par différents cadres. Les types sont définis par les éléments dont la construction est composée. Le type syntaxique dans l'exemple de Gizey est Quotatif + Rapport de discours.

Les éléments se référant aux participants de l'événement de parole actuel ou rapporté sont annotés dans le niveau Participant. L'exemple de Gizey contient une référence au Locuteur Rapporté (LR).

Dans l'interface Tsakorpus, ces annotations sont reflétées par les couleurs d'arrière-plan, les cadres et les fenêtres contextuelles. Cela est illustré dans la Figure 2 pour une phrase en Bandial (également connu sous le nom de Jóola Eegima), où le segment rapporté est en vert et l'événement de parole est en rouge.

## 6 Recherche dans Tsakorpus

Équiper les corpus annotés d'une interface de recherche basée sur le web les rend plus accessibles aux linguistes ainsi qu'aux communautés linguistiques. Nous avons mis nos corpus en ligne grâce à la plateforme Tsakorpus. La plateforme a été principalement développée indépendamment du projet. Cependant, un certain nombre de fonctionnalités ont été ajoutées spécifiquement pour répondre aux besoins de la base de données SpeechReporting.

Les requêtes de recherche dans l'interface en ligne sont formées en cliquant sur les boutons et en remplissant les champs de texte. Une requête à mot unique peut inclure des contraintes sur le mot, son lemme, sa partie du discours et/ou ses glosses. Tous les champs peuvent gérer des fonctions booléennes (, pour AND, | pour OR, ~ pour NOT). La recherche de mots et de lemmes peut inclure des expressions régulières et fournir des suggestions instantanées lorsque l'utilisateur commence à taper. Les requêtes multi-mots se composent de plusieurs requêtes mono-mots avec des contraintes de distance supplémentaires.

Lors du clic sur "Rechercher des phrases", l'utilisateur obtient des résultats de recherche classés aléatoirement, divisés en pages. Le son associé à un résultat de recherche particulier, s'il y en a un, peut être joué en cliquant sur ce résultat.

Une limitation de Tsakorpus est que son unité de recherche de base est une phrase (ou tout segment de texte ressemblant à une phrase). Il n'est pas possible de rechercher des unités qui sont soit plus grandes qu'une "phrase", soit plus petites qu'une "phrase" mais plus grandes qu'un mot. Les segments ELAN (qui représentent normalement des unités intonationnelles) ont été réinterprétés comme des "phrases" dans Tsakorpus. Cependant, notre annotation de discours consiste souvent en des segments de plusieurs mots qui sont soit plus petits qu'une phrase, soit transcendent la phrase segmentée. Afin de les rendre recherchables, nous ajoutons les valeurs de toutes les annotations de discours qui apparaissent n'importe où dans une phrase en tant que métadonnées au niveau de la phrase. De cette façon, une requête comme "Quotative AND un mot glossé comme say" retournera toutes les phrases qui contiennent à la fois une étendue Quotative et un mot glossé comme "say", mais elles ne se chevaucheront pas nécessairement. Cette option a été ajoutée à Tsakorpus au cours du projet. Néanmoins, les portées exactes à l'intérieur des phrases qui ont des annotations de discours sont mises en évidence avec différentes couleurs dans les résultats de recherche.

Figure 1 : Exemple d’une phrase annotée de Gizey dans ELAN

p04-01.png

Figure 2: Exemple de recherche dans Tsakorpus, une phrase en Bandial (Jóola Eegima)

p04-02.png

Le corpus en ligne contient toutes les langues présentes dans la base de données Discourse reporting. Lors de la recherche dans les corpus, l'utilisateur peut choisir entre sélectionner une langue spécifique et rechercher dans tous les sous-corpus linguistiques en même temps. Dans ce dernier cas, la requête de recherche doit inclure une annotation uniforme dans les sous-corpus. Cela inclut l'annotation du discours rapporté (voir Section 5) et les étiquettes de partie du discours au format UD (de Marneffe et al., 2021).

Actuellement, l'interface du corpus est disponible en anglais et en russe. L'interface française est en cours de construction.

## 7 Diffusion

Les utilisateurs cibles du SpeechReporting Corpus sont les linguistes et les anthropologues qui s'intéressent aux récits traditionnels.

Outre les usages académiques, ce corpus est une source précieuse de matériaux pour les communautés linguistiques afin de maintenir leurs langues et leurs traditions linguistiques vivantes ; d'abord, en ayant simplement un accès en ligne aux sessions d'enregistrement de narration de certains de leurs contes populaires. De plus, nous produisons des matériaux, tels que des livres d'histoires, que les communautés peuvent utiliser à des fins éducatives. De plus, notre projet a reçu un financement supplémentaire du programme Humanités Numériques et Science Ouverte de la Sorbonne Nouvelle à Paris pour produire des vidéos YouTube animées des contes folkloriques enregistrés et les diffuser parmi les communautés linguistiques et un public plus large.

En outre, la disponibilité de données linguistiques annotées en libre accès des langues africaines minoritaires est importante pour le développement de technologies basées sur l'apprentissage automatique, qui sous-représentent actuellement ces langues.

## 8 Remarques conclusives

Le SpeechReporting Corpus fournit des corpus méticuleusement annotés de langues indigènes peu dotées en ressources et parlées en Afrique de l'Ouest. Il propose également une représentation numérique des constructions de discours rapporté à différents niveaux d'analyse (morphologie, syntaxe et sémantique), ce qui ouvre un potentiel de nouvelle compréhension d'une gamme de phénomènes discursifs. Le SpeechReporting Corpus offre des outils en libre accès pour une annotation comparable des données de différentes langues. Il contribue à l'accessibilité de récits traditionnels auparavant non publiés dans des langues indigènes parlées en Afrique de l'Ouest.

## Limites

Une limite de ce corpus est la difficulté de comparer entre les différentes langues. Il est difficile d'identifier les catégories typologiquement applicables sur la base de quantités limitées de données. Par exemple, en décidant quelles catégories de discours annoter, nous devions nous assurer que nous pouvions utiliser le même vocabulaire pour toutes les langues de notre échantillon.

Une limitation supplémentaire est le manque possible de cohérence entre les différents sous-corpus. La vérification croisée des données est effectuée manuellement. Il s'agit d'une tâche fastidieuse susceptible d'erreurs humaines, mais elle est nécessaire pour améliorer la qualité des ensembles de données individuels.

Par ailleurs, nous avons découvert qu'il est difficile de réunir une équipe parfaite pour un projet à la fois linguistique et technologique.

Une autre limitation possible est liée à la transparence. En considérant les utilisations futures possibles de nos corpus, nous avons essayé de rendre les annotations aussi transparentes que possible et les avons toutes documentées sur notre site web.

L’interdisciplinarité est un autre défi : le type de données qui convient à la diffusion dans les communautés est légèrement différent du type de données qui présente un intérêt primordial du point de vue de la théorie linguistique.

## Notes

1 En plus de décrire les stratégies de rapport de discours employées dans les traditions orales de certaines cultures d'Afrique de l'Ouest, le projet vise à les comparer à leurs équivalents fonctionnels issus d'une zone géographiquement et historiquement non apparentée. Par conséquent, la base de données contient certaines langues parlées en Eurasie qui ne seront pas discutées dans cet article.

2 ELAN-CorpA est une version dérivée de ELAN, développée par Christian Chanard, consultez ce lien https://llacan.cnrs.fr/res_ELAN-CorpA_en.php pour plus d'informations.

3 Une description détaillée des principes d'annotation peut être trouvée sur le site web du projet http://discoursereporting.huma-num.fr/annotation.pdf

4 La terminologie utilisée dans l'annotation des éléments syntaxiques et sémantiques dans la parole rapportée provient de Spronck et Nikitina (2019).

5 http://discoursereporting.huma-num.fr/corpus/search

## Références

Chukwuma Azuonye. 1999. Igbo stories and storytelling. Traditional Storytelling Today: An International Sourcebook, pages 33-40.

Mellonee Victoria Burnim. 1976. Songs in Mende Folktales. Madison: University of Wisconsin.

Christian Chanard. 2015. ELAN-CorpA: Lexicon-aided annotation in ELAN. In Corpus-based Studies of Lesser-described Languages, pages 311-332. John Benjamins.

Christian Chanard. 2019. ELAN Tools: Python tools for ELAN. Online access: https://llacan.cnrs.fr/res_manuels_en.php, last accessed 13/02/2023.

Donald J Cosentino. 1980. Lele Gbomba and the style of Mende baroque. African Arts, 13(3):54-55.

Marie-Catherine de Marneffe, Christopher D. Manning, Joakim Nivre, and Daniel Zeman. 2021. Universal Dependencies. Computational Linguistics, 47(2):255-308.

Ruth Finnegan. 1967. Limba stories and story-telling. Oxford: Clarendon Press.

Ruth Finnegan. 1970. A note on oral tradition and historical evidence. History and Theory, 9(2):195-201.

Ruth Finnegan. 1977. Oral poetry: Its nature, significance and social context.

Ruth Finnegan. 2007. The oral and beyond: doing things with words in Africa. James Currey/University of Chicago Press.

Ruth Finnegan. 2012. Oral literature in Africa. Open Book Publishers.

Ken Hale. 1992. Endangered languages: On endangered languages and the safeguarding of diversity. language, 68(1):1-42.

John Hatton. 2013. Saymore: Language documentation productivity [Computer software].

Gordon Innes. 1965. The function of the song in Mende folktales. Sierra Leone Language Review, 4:54-63.

n.a. 2022. ELAN (Version 6.4) [Computer software].

Tatiana Nikitina. 2018. When linguists and speakers do not agree: The endangered grammar of verbal art in West Africa. Journal of Linguistic Anthropology, pages 197-220.

Tatiana Nikitina, Ekaterina Aplonova, Abbie Jordanoska, Izabela andHantgan-Sonko, Guillaume Guitang, Olga Kuznetsova, Elena Perekhvalskaya, and Lacina Silué. 2022. The speechreporting corpus: Discourse reporting in storytelling.

Tatiana Nikitina, Abbie Hantgan, and Christian Chanard. 2019. Reported speech annotation template for ELAN. (The SpeechReporting Corpus). Online access: http://discoursereporting.huma-num.fr/annotation.pdf, last accesed 16/03/2023.

Harold Scheub. 1985. A review of African oral traditions and literature. African Studies Review, 28(2-3):1-72.

Han Sloetjes and Peter Wittenburg. 2008. Annotation by category-ELAN and ISO DCR. In 6th international Conference on Language Resources and Evaluation (LREC 2008).

Stef Spronck and Tatiana Nikitina. 2019. Reported speech forms a dedicated syntactic domain. Linguistic Typology, 23:119-159.
