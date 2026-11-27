> Machine translation (fr) of "Using MonoConc Pro to teach and learn lexical collocations in Xitsonga" by Respect Mlambo, Muzi Matfunjwa, https://upjournals.up.ac.za/index.php/dhasa/article/view/3821, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Utilisation de MonoConc Pro pour enseigner et apprendre les collocations lexicales en Xitsonga

Respect Mlambo, Muzi Matfunjwa

**Affiliations**  
Mlambo Respect & Matfunjwa Muzi  
South African Centre for Digital Language Resource  
(SADiLaR), North-West University, Potchefstroom,  
South Africa  
 &  


## Résumé

Peu de ressources linguistiques ont été mises au point pour les langues autochtones en Afrique du Sud. Surprenant, ce sont aussi des langues officielles qui, constitutionnellement, partagent le même statut linguistique que les autres langues. L'un des défis majeurs pour le développement de ressources linguistiques de base est le manque de corpus numériques pouvant être utilisés pour entraîner et développer les ressources. Un tel défi a entravé l'utilisation de la technologie pour la recherche, l'apprentissage et l'enseignement dans les domaines des langues autochtones. Dans cette étude, nous avons utilisé MonoConc Pro, un concordancier, pour démontrer comment les utilisateurs de langues peuvent utiliser le logiciel pour afficher la collocation lexicale à partir d'un corpus à des fins d'enseignement et d'apprentissage. Nous avons illustré comment le corpus peut être utilisé simultanément avec la technologie du langage pour enseigner et apprendre des aspects de la linguistique sous la forme de collocations lexicales en Xitsonga. Un corpus monolingue Autshumato Xitsonga (AXMC) qui a été extrait du référentiel du Centre sud-africain pour les ressources linguistiques numériques a été utilisé comme données pour l'analyse. L’AXMC est un corpus qui a été recueilli et aligné semi-automatiquement au niveau des phrases dans le cadre du projet Autshumato. Pour rechercher les collocations lexicales, nous avons interrogé le corpus AXMC en utilisant le programme MonoConc Pro. Une recherche semi-automatique de collocatifs des adjectifs xitsonga lavakulu, letikulu, lavantsongo et letinene a été menée. L'étude a révélé que les collocations lexicales ou les mots qui coexistent avec les adjectifs sont les noms, les adjectifs, les possessifs et les relatifs. Il a également été observé que chaque adjectif entre fréquemment en collocation avec certains noms appartenant à une classe spécifique. Les résultats obtenus suggèrent un moyen pratique d'utiliser les technologies langagières pour explorer les corpus et examiner les modèles linguistiques pour l'enseignement et l'apprentissage. Nous espérons que cette ligne d'étude conduira à l'utilisation des ressources linguistiques modernes pour examiner les traits linguistiques dans les langues autochtones.

## Mots-clés

MonoConc Pro, Collocations lexicales, Xitsonga, Concordancier, Ressources linguistiques

## 1 Introduction

Il existe une lacune importante dans le développement des langues autochtones officielles d’Afrique du Sud, en particulier dans l’utilisation des ressources linguistiques pour la recherche, l’enseignement et l’apprentissage. Certaines langues, comme l'anglais et l'afrikaans, ont reçu une attention préférentielle en termes de développement et d'utilisation de ressources linguistiques contemporaines, tandis que les langues indigènes avec moins de locuteurs, comme le siswati, l'isiNdebele, le tshivenda et le xitsonga, sont encore en cours de développement (Finlayson et Madiba 2002 tel que cité par Mlambo et al., 2021, p. 82). L'absence de ressources linguistiques contemporaines et de corpus appropriés nécessaires à la construction d'outils numériques pour les langues indigènes a entravé la recherche, l'apprentissage et l'enseignement dans ces langues à l'aide de technologies modernes. En outre, les questions politiques, culturelles et socio-économiques ont entravé le développement et l’intégration des ressources linguistiques contemporaines dans les langues autochtones (Unesco, 2019). Pendant ce temps, les langues disposant de telles ressources et de tels corpus ont bénéficié dans les domaines de la recherche, de l’apprentissage et de l’enseignement (Yunus, 2017, p. 297).

Il y a eu quelques développements en Afrique du Sud avec la mise en place d'une infrastructure de recherche linguistique, comme le Centre sud-africain pour les ressources linguistiques numériques (SADiLaR), qui fournit des corpus et construit des outils numériques pour les 11 langues officielles. Ce centre facilite la création, l'administration et la diffusion de ressources linguistiques contemporaines, ainsi que d'outils numériques pertinents, qui sont mis à la disposition du public pour des fins d'enseignement, d'apprentissage et de recherche (https://www.sadilar.org). Cependant, d'autres langues sont encore mal desservies dans certaines des ressources linguistiques contemporaines de SADiLaR.

Par conséquent, des efforts supplémentaires sont nécessaires pour développer et promouvoir les ressources linguistiques disponibles pour toutes les langues autochtones.

L'étude se concentre sur les combinaisons de mots lexicaux connues sous le nom de collocations en linguistique. Les collocations, ou la co-occurrence de mots, sont cruciales dans l'enseignement et l'apprentissage des langues (Jafarpour, 2013, p. 57). Nous employons le corpus Xitsonga, qui est une langue avec un système d'écriture disjonctif, pour démontrer comment un concordancier peut être utilisé pour enseigner ainsi que pour apprendre les collocations lexicales Xitsonga. Nous portons une attention particulière aux parties du discours qui collocent avec les adjectifs. MonoConc Pro de Barlow a été utilisé pour illustrer comment les collocations lexicales peuvent être visualisées et apprises à partir d'un corpus à l'aide d'un concordancier. Cette technique a été inventée par (John, 1991) en tant qu'apprentissage axé sur les données, dans lequel les apprenants ou les étudiants d'une langue utilisent des corpus électroniques pour étudier activement une langue et ses modèles grammaticaux tels que les collocations et les colligations prépositionnelles (Lewis, 2000).

Des concordanciers tels que WordSmith Tools, Multiconcord et ParaConc ont principalement été étudiés dans les langues sud-africaines par des chercheurs tels que Taljard et De Schryver (2002), Madiba (2004), Moropa (2007), Ndhlovu (2016), Shoba (2018) et Mlambo (et al., 2021) pour l'identification et l'extraction de listes de terminologie pour les compilations de dictionnaires. Malgré les avantages qui ont été observés, ces concordanceurs n'ont pas été employés dans l'enseignement et l'apprentissage des aspects grammaticaux de Xitsonga. Par conséquent, cette étude tente de combler l'écart dans l'utilisation des méthodes basées sur les corpus et les concordanciers pour enseigner et apprendre la collocation lexicale en Xitsonga.

## 2 Travaux connexes

Selon Moehkardi (2002), toutes les langues contiennent des mots qui coexistent fréquemment avec d'autres mots (s) dans les unités et leurs cooccurrences correspondent à des normes grammaticales particulières d'une langue spécifique, et de tels mots sont connus comme collocations. Benson et al. (1986) ont classé les collocations en deux types : les collocations grammaticales et les collocations lexicales. Les collocations grammaticales sont constituées d'un nom, d'un adjectif ou d'un verbe, plus une particule (une préposition, un adverbe, ou une structure grammaticale telle qu'un infinitif, un gérondif ou une proposition) (Bahns, 1993). Les collocations grammaticales sont parfois idiomatiques et lexicalisées en tant qu'unités uniques puisque leurs significations ne correspondent pas aux significations réelles des parties. Entre-temps, les collocations lexicales n'incluent pas les prépositions, les infinitifs, ou les propositions relatives, mais consistent plutôt en différentes combinaisons de noms, d'adjectifs, de verbes, et d'adverbes (Bahns, 1993). Cependant, dans cette étude, nous ne nous intéressons qu’aux collocations lexicales.

Pirmoradian et Tabatabaei (2013) ont mené des recherches sur des étudiants iraniens d'anglais langue maternelle (EFL). L'objectif de leur étude était d'examiner l'impact de l'utilisation du Collins Collocation Dictionary (CCD) comme outil de concordance sur l'acquisition des collocations lexicales anglaises par les étudiants iraniens de l'université EFL. Au total, 30 élèves ont été assignés au hasard à l’un des deux groupes : le groupe expérimental et le groupe témoin. Le groupe expérimental avait pour tâche d'identifier les collocations erronées dans 10 collocations lexicales. Pendant ce temps, le groupe de contrôle a été chargé d'identifier les collocations lexicales dans les textes qui leur ont été donnés. Pirmoradian et Tabatabaei (2013) ont découvert que l'utilisation du CCD comme concordancier avait un impact substantiel sur la performance globale des étudiants dans l'apprentissage des collocations lexicales anglaises. Comme le CCD a été utilisé comme outil de concordance, les résultats des élèves sur la collocation lexicale se sont considérablement améliorés par rapport à ceux sans l'outil de concordance.

Les résultats ont également démontré qu'il existe une différence substantielle entre les impacts des approches de concordance et des méthodes traditionnelles sur les étudiants lorsqu'il s'agit d'apprendre la collocation lexicale anglaise pour les apprenants iraniens EFL. Cela signifie que les élèves qui utilisent un concordancier pour apprendre les collocations lexicales sont plus susceptibles de surpasser les élèves qui apprennent les collocations par des méthodes traditionnelles.

L'étude actuelle s'inspire également des recherches de Jafarpour et al. (2013), qui ont comparé les effets de l'approche basée sur le corpus avec ceux de l'approche traditionnelle pour l'apprentissage des collocations.

L'étude a été menée sur deux groupes d'étudiants en anglais langue seconde (L2). Le groupe expérimental a mis en œuvre un concordancier, tandis que le groupe témoin a utilisé une technique traditionnelle. En termes de compétence et de compétence de collocation, les individus de chaque groupe étaient au même niveau lorsque l'expérimentation a commencé. Jafarpour et al. (2013) ont observé que l'utilisation d'une approche basée sur un corpus pour enseigner les collocations et leur utilisation dans l'écriture est plus bénéfique pour les apprenants de L2 que les techniques traditionnelles. En général, les résultats ont révélé que l'utilisation de concordanciers pour enseigner les collocations est plus fructueuse et efficace que l'utilisation de méthodes traditionnelles d'enseignement des collocations.

De la littérature consultée, aucune étude n’a étudié la collocation lexicale en Xitsonga, que ce soit à l’aide de ressources linguistiques ou en utilisant une approche basée sur un corpus. Cela révèle la nécessité critique d'utiliser des outils linguistiques modernes pour explorer les tendances grammaticales dans les langues indigènes en utilisant des corpus. En conséquence, nous pensons que notre étude ouvrira la voie à l'utilisation de concordanciers et de corpus pour aider respectivement à l'enseignement et à l'apprentissage des collocations lexicales du xitsonga et d'autres traits linguistiques.

## 3 Méthodologie

Il s'agit d'une recherche qualitative qui utilise un corpus monolingue Autshumato Xitsonga (AXMC) acquis auprès d'un dépôt en ligne SADiLaR comme données pour l'analyse. L’AXMC est un corpus qui a été recueilli et aligné semi-automatiquement au niveau des phrases dans le cadre du projet Autshumato. Ce projet a été financé par le Département des Arts et de la Culture et visait à créer des outils, des ressources et des corpus pour toutes les langues sud-africaines (Groenewald & Fourie, 2009, p. 191).

MonoConc Pro, un logiciel inventé par Michael Barlow, a été utilisé pour analyser les données. Le logiciel est utilisé comme un programme de recherche de texte avec une interface conviviale. Comme les autres concordanceurs, MonoConc Pro possède de nombreuses capacités telles que la construction de listes de mots (dans l'ordre alphabétique et de fréquence), la création de résultats de concordance, le traitement rapide d'énormes corpus, la fourniture d'informations de collocation et le fonctionnement avec des textes étiquetés ou non étiquetés (Reppen, 2001, p. 32). L'objectif principal de l'utilisation de MonoConc Pro dans notre étude est de démontrer son utilité sur la façon dont les collocations lexicales peuvent être vues à partir d'un corpus utilisant le concordancier à des fins de compétence lexicale en Xitsonga. Pour afficher les collocations, l'AXMC a été importé dans son format texte dans MonoConc Pro. Ensuite, la fonction 'moteur de recherche' du logiciel a été utilisée pour explorer les collocations d'un adjectif particulier. Lorsque le processus de recherche était terminé, tous les collocats des adjectifs saisis étaient affichés comme résultats.

## 4 Présentation et analyse des données

Cette section démontre comment MonoConc Pro peut être utilisé pour visualiser les collocations lexicales pour les résultats d'enseignement et d'apprentissage. MonoConc Pro a été choisi pour sa fonctionnalité et ses caractéristiques qui nous permettent de trouver et de visualiser les collocations lexicales dans une langue. La fonction de moteur de recherche de MonoConc Pro a été utilisée pour illustrer les façons dont les collocations lexicales pouvaient être examinées à partir des corpus. Une description du fonctionnement de MonoConc Pro et de sa fonction de moteur de recherche dans l'identification des collocations suit.

## 4.1 Moteur de recherche

Le moteur de recherche est la principale fonctionnalité de MonoConc Pro qui a été utilisée pour interroger le corpus afin de visualiser les collocations lexicales. Pour rechercher un adjectif spécifique, nous avons utilisé la fonction de recherche trouvée sur la barre d'interface MonoConc Pro. La recherche de l'adjectif dans Xitsonga a abouti à la récupération de toutes les occurrences de l'adjectif recherché avec ses collocats. L'adjectif cible était affiché en bleu avec les collocats corrects mis en évidence en rouge sur son côté gauche. L'utilisation du moteur de recherche est bénéfique pour trier les mots et visualiser la collocation immédiatement à gauche ou à droite du mot cible, car cela nous donne des informations vitales sur la manière dont le mot a été utilisé dans le contexte (Reppen, 2001, pp. 33-34).

Les résultats des adjectifs xitsonga recherchés lavakulu, letikulu, lavantsongo et letinene sont donnés sous forme de concordance dans les figures. Toutes les instances dans lesquelles les adjectifs recherchés ont été utilisés sont présentées, et ces occurrences sont utilisées pour voir tous les mots dans le corpus qui entrent en collocation avec les adjectifs recherchés. Un adjectif est une catégorie lexicale qui modifie un nom en fournissant des informations supplémentaires sur le référent (Radford et al., 2009, p. 130). Les adjectifs en Xitsonga sont construits par des accords adjectivaux et des radicaux adjectivaux. Les adjectifs présentés dans cette étude possèdent les accords adjectivaux lava- et leti-, qui sont dérivés de pronoms démonstratifs et des radicaux adjectivaux -kulu (grand), -ntsongo (petit) et -nene (bon). À titre d'illustration, les résultats des collocations lexicales pour les adjectifs Xitsonga recherchés lavakulu, letikulu, lavantsongo et letinene sont présentés consécutivement dans les figures 1, 2, 3 et 4.

p04-01.png

Figure 1 : Résultats de la recherche de l'adjectif 'lavakulu'

L'adjectif lavakulu est en collocation avec les noms vanhu (personnes) et vaofisiri (officiers) dans la Figure 1. Ces noms appartiennent à la classe 2, connue comme la classe humaine qui utilise le préfixe pluriel va-. L'adjectif interrogé est également en collocation avec les noms sujets vuleteri (orientation) et dyondzo (leçon) et leurs accords ya et bya. Le logiciel a pu afficher tous les collocats de l'adjectif recherché. Cependant, certains n'ont pas été mis en évidence.

p04-02.png

Figure 2 : Résultats de la recherche de l'adjectif 'letikulu'

Dans la Figure 2, l'adjectif recherché letikulu est également en collocation avec différents noms tels que tikhaphani (entreprises), tindhawu (lieux), tiphurhojeke (projets), timhaka (nouvelles) et tingana (honte) qui sont classés dans la classe nominale 10. Cette classe utilise le préfixe pluriel ti-. La figure montre également que l'adjectif letikulu peut être en collocation avec l'adjectif timbirhi (deux) qui donne une information numérique sur les noms timhaka (nouvelles). Il est intéressant d'observer que le logiciel a identifié avec précision timhaka (nouvelles) et timbirhi (deux) comme des collocats de letikulu.

p05-01.png

Figure 3 : Résultats de la recherche de l'adjectif 'lavantsongo'

Dans la Figure 3, les mots qui entrent en collocation avec l'adjectif recherché lavantsongo sont similaires à ceux de la Figure 1. Le nom vanhu (peuple) est le mot principal qui est en collocation avec l'adjectif lavantsongo. En plus d'entrer en collocation avec le nom vanhu (personnes), l'adjectif lavantsonga entre également en collocation avec le qualificatif possessif va hina (le nôtre). Ce qualificatif possessif a été formé en combinant l'accord possessif va (de) et le radical possessif hina (le nôtre) qui est dérivé du pronom absolu. De cette figure, nous avons observé que presque toutes les collocations lexicales qui impliquent l'adjectif recherché ont été mises en évidence.

p05-02.png

Figure 4 : Résultats de la recherche de l'adjectif 'letinene'

À partir de la figure 4, les occurrences montrent que tous les mots qui entrent en collocation avec l'adjectif letinene sont les mêmes que dans la figure 2. Les collocatifs tindlu (maisons) et timhaka (nouvelles) sont des noms classés dans la classe 10 du système de classes nominales du xitsonga. Le collocatif restant to hlaya (beaucoup) qui est mis en évidence dans la figure est un qualificatif relatif. Il a été formé par un accord relatif à et le radical relatif hlaya (compter) qui est dérivé d'un verbe.

## 5 Conclusion

Dans l'étude, nous avons utilisé MonoConc Pro pour explorer et visualiser des collocats d'adjectifs du corpus monolingue Xitsonga. Nous en déduisons que les collocations lexicales ou les mots qui coexistent avec des adjectifs, à savoir lavakulu, letikulu, lavantsongo et letinene, sont des noms, des adjectifs, des possessifs et des relatifs. Il a été découvert que chaque adjectif co-occurre souvent avec des noms particuliers qui appartiennent à un système de classe nominale spécifique. Les adjectifs étudiés entrent en collocation avec des noms des classes 2 et 10 du système de classes des noms en Xitsonga. L'utilisation du logiciel MonoConc Pro nous a permis de réaliser que les adjectifs ne co-occurrent pas seulement avec des noms mais aussi avec d'autres parties du discours. Les résultats globaux ont démontré l'utilité de concordanciers tels que MonoConc Pro pour analyser les modèles de langage Xitsonga tels que les collocations lexicales. L'étude montre également l'importance des concordanciers et des corpus dans l'augmentation de la compétence linguistique et de la conscience de la compétence collocative chez les locuteurs de la langue en question. L'utilisation de telles technologies du langage offre une approche pratique pour l'enseignement et l'apprentissage des collocations lexicales à l'aide de corpus, plutôt que de s'appuyer sur les méthodes traditionnelles d'enseignement et d'apprentissage des traits linguistiques des langues autochtones.

## Références

Bahns, J 1993, 'Lexical collocations: a contrastive view', ELT Journal, vol. 47, no 1, pp. 56-63.

Benson, M, Benson, E, & Ilson, R 1997, The BBI dictionary of English word combinations, John Benjamins Publishing Company, Amsterdam.

Finlayson, R & Madiba M 2002, 'The intellectualisation of the indigenous languages of South Africa: Challenges and prospects', Current Issues in Language Planning, vol. 3, no 1, pp. 40-61.

Groenewald, HJ & Fourie, W 2009, 'Introducing the Autshumato Integrated Translation Environment' 13th Annual Conference, EAMT Proceedings 2009, Barcelona, Spain, May 14-15, 2009, pp. 190-196.

Jafarpour, AA, Hashemian, M & Alipour, S 2013, 'A corpus-based Approach toward teaching collocation of synonyms', Theory and Practice in Language Studies, vol. 3, no 1, pp. 51-60.

Johns, T 1991, 'Should you be persuaded: Two examples of data-driven learning', in T. Johns & P. King (Eds.), Classroom Concordancing. English Language Research Journal, vol. 4, pp. 1-16.

Lewis, M 2000, 'Language in the lexical approach', in M Lewis, Teaching collocation: Further developments in the lexical approach, Language Teaching Publications, Hove, pp. 126-54.

Madiba, M 2004, 'Parallel corpora as tools for developing the indigenous languages of South Africa with special reference to Venda', Language Matters, vol. 35, no 1, pp. 133-147.

Mlambo, R, Skosana, N & Matfunjwa, M 2021, 'The extraction of terminology list using ParaConc for creating a Quadrilingual dictionary', Southern African Linguistics and Applied Language Studies, vol. 39, no 1, pp. 82-91.

Moehkardi, R 2002, 'Grammatical and lexical English collocations: Some possible problems to Indonesian learners of English', Humaniora, vol. 14, no 1, pp. 53-62.

Moropa, K 2007, 'Analysing the English-Xhosa parallel corpus of technical texts with ParaConc: A case study of term formation processes', Southern African Linguistics and Applied Language Studies, vol. 25, no 2, pp. 183-205.

Ndhlovu, K 2016, 'Using ParaConc to extract bilingual terminology from parallel corpora: A case of English and Ndebele', Journal of Literary Criticism, Comparative Linguistics and Literary Studies, vol. 37, no 2, pp. 1-12.

Pirmoradian, M & Tabatabaei, O 2012, 'The enhancement of lexical collocation learning through concordancing: A case of Iranian EFL learners', The Modern Journal of Applied Linguistics, vol. 4, no 4, pp. 185-200.

Radford, A, Martin, A, David, Herald, C, Andrew, S 2009. Linguistics: An Introduction, Cambridge University Press, Cambridge.

Reppen, R 2001, 'Review of MonoConc Pro and Wordsmith tools', Language Learning and Technology, vol. 5, no 3, pp. 32-36.

Shoba, FZ 2018, 'Exploring the use of parallel corpora in the compilation of specialized bilingual dictionaries of technical terms: A case study of English and isiXhosa', PhD thesis, University of South Africa.

Statistics South Africa 2012, Census 2011: Census in brief, Statistics South Africa, Pretoria.

Taljard, E & De Schryver GM 2002, 'Semiautomatic term extraction for the African languages, with special reference to Northern Sotho', Lexikos, vol. 12, pp. 44-74
