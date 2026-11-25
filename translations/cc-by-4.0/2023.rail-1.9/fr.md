> Machine translation (fr) of "Evaluating the Sesotho rule-based syllabification system on Sepedi and Setswana words" by Johannes Sibeko, Mmasibidi Setaka, https://aclanthology.org/2023.rail-1.9/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Évaluation du système de syllabification à base de règles du sesotho sur des mots sepedi et setswana

Johannes Sibeko, Mmasibidi Setaka

**Affiliations**  
Johannes Sibeko  
Nelson Mandela University  
Linguistics and Applied Linguistics  
Port Elizabeth, South Africa  
Mmasibidi Setaka  
South African Centre  
for Digital Language Resources  
Potchefstroom, South Africa  
  


## Résumé

Le but de cet article est de démontrer que le système de syllabification automatique basé sur des règles récemment développé pour le sesotho peut être largement utilisé dans le groupe linguistique sotho-tswana officiellement reconnu en Afrique du Sud, comprenant le sepedi, le sesotho et le setswana. Nous évaluons le système de syllabification automatique sur 400 mots comprenant les 100 mots les plus fréquemment utilisés et les 100 mots les moins utilisés en sepédi et en setswana, comme le montre le corpus Autshumato disponible publiquement en ligne. Il est constaté que le système de syllabification basé sur des règles pour le sesotho peut être utilisé pour identifier correctement les syllabes uniquement vocaliques, les syllabes consonantiques-vocaliques et les syllabes uniquement consonantiques en sepédi et en setswana. Entre autres découvertes, il a été démontré que les mots avec des signes diacritiques comme dans le cas de Sepedi sont correctement décomposés en syllabes. Nous formulons deux recommandations principales. Premièrement, les règles de syllabification devraient être mises à jour pour tenir compte des signes diacritiques du Sepedi. Deuxièmement, le système de syllabification doit être mis à jour afin de refléter le groupe de langues sotho-tswana plus large au lieu de se limiter au sesotho. D'autres recherches sont nécessaires pour déterminer si la consonne complexe [ɲ] se comporte de manière similaire dans les trois langues sotho-tswana officiellement reconnues et évaluer la nécessité d'une règle spécifique pour la consonne nasale [ɲ].

## 1 Introduction

Cet article présente une évaluation du système de syllabification à base de règles Sesotho pour une utilisation dans les textes écrits en Sepedi et en Setswana. La République d'Afrique du Sud reconnaît onze langues officielles, à savoir l'afrikaans, l'anglais, l'isiNdebele, l'isiXhosa, l'isiZulu, le SiSwati, le Sepedi, le Sesotho, le Setswana, le Tshivenda et le Xitsonga (République d'Afrique du Sud, 1996). Parmi ces onze langues, l'afrikaans et l'anglais sont souvent identifiés comme des langues germaniques (Zulu et al., 2008). Malgré cela, certains affirment que l’afrikaans est une langue africaine telle qu’elle est parlée en Afrique, même s’il s’agit d’une variante du néerlandais (Willemse, 2018; Staphorst, 2022). L'isiNdebele, l'isiXhosa, l'isiZulu et l'isiSwati sont classés dans le groupe linguistique Nguni. Le sepédi [également appelé sotho du Nord (Rakgogo et Zungu, 2021)], le sesotho [également appelé sotho du Sud (Demuth, 2007)], et le setswana [parfois appelé sotho de l'Ouest (Mojela, 2016)] sont regroupés sous le groupe de langues sotho-tswana. Ces langues Sotho-Tswana présentent de nombreuses variations en leur sein. Malgré cela, elles sont mutuellement intelligibles en ce sens que les locuteurs de ces langues peuvent se comprendre sans difficulté (Makalela, 2009). Les organismes linguistiques nationaux, sous les auspices du Pan South African Language Board (PanSALB) ont dicté trois orthographes différentes pour ces langues. La PanSALB développe des règles et des normes pour l'orthographe et l'orthotypographie afin d'assurer le bon fonctionnement de toutes les langues officielles.

Selon le recensement de 2011, il y avait au moins 4 618 577 locuteurs de langue maternelle sepedi, 3 849 562 locuteurs de langue maternelle sesotho et 4 067 248 locuteurs de langue maternelle setswana en Afrique du Sud seulement (Lehohla, 2011). Le sesotho est également une langue officielle au Lesotho et au Zimbabwe. Le setswana est également l'une des langues officielles du Botswana. Les enquêtes sur les technologies du langage humain en Afrique du Sud indiquent qu’il existe une pénurie de recherches sur les systèmes de syllabification pour les langues autochtones d’Afrique du Sud (Grover et al., 2010, 2011; Barnard et al., 2014; Moors et al., 2018a,b). À notre connaissance, le sesotho est actuellement la seule langue autochtone sud-africaine à avoir un système de syllabification basé sur des règles accessible au public. Néanmoins, selon Sibeko et Setaka (2022), il existe deux systèmes de syllabification en sesotho. Le système de motifs basé sur l'apprentissage automatique et sur TEX repose sur des corpus de référence avec des annotations de syllabes exemplifiées. Le système de syllabification basé sur TEX pour le Sesotho a utilisé une liste de référence de mots et de leurs syllabes. Malheureusement, nous ne connaissons pas de listes similaires pour Sepedi et Setswana. En tant que tel, nous ne pouvons pas évaluer ce système d'apprentissage automatique dans cet article.

Cet article vise à démontrer l'applicabilité du système à base de règles Sesotho dans l'identification des syllabes dans le groupe de langues plus large Sotho-Tswana d'Afrique du Sud. Nous fournissons un très bref aperçu des orthographes des langues sud-africaines et des types de syllabes attendus en Sepedi et Setswana dans la section 2. Nous décrivons ensuite notre méthode de collecte de données dans la section 3. Enfin, nous discutons de nos conclusions à la section 4 et nous concluons par une discussion à la section 5.

## 2 Contexte

## 2.1 Orthographies

Les langues écrites ont des règles systématiques pour l'orthographe des mots (Matlosa, 2017). Les règles d'écriture dans les langues africaines ont été introduites par les missionnaires religieux. Par conséquent, la plupart des orthographes des langues africaines sont modélisées d'après les orthographes européennes (Mahlangu, 2015). Deux principaux systèmes d'écriture sont utilisés dans les langues sud-africaines. Premièrement, le groupe de langues Sotho-Tswana ainsi que le Tshivenda et le Xitsonga utilisent des systèmes d'écriture disjonctifs, tandis que le groupe de langues Nguni composé de l'isiZulu, de l'isiXhosa, de l'isiNdebele et du SiSwati, utilisent un système d'écriture conjoint (Prinsloo, 2011). Les systèmes d'écriture sont illustrés ci-dessous :

(a) Bana ba ya matha. - Sesotho

Les enfants, ils courent. - Anglais

(b) Abantwana bayagijima. - Isizulu

Les+enfants ils+courent. - Anglais

Comme illustré ci-dessus, les langues telles que les langues sotho-tswana dotées de systèmes d'écriture disjonctifs isolent les mots, tandis que les langues dotées de systèmes d'écriture conjonctifs [par exemple, l'isizulu] combinent certaines parties du discours telles que le temps présent et le marqueur de sujet pluriel dans le mot bayagijima. Néanmoins, les langues sotho-tswana sont faciles à comparer car elles suivent la même orthographe phonémique où sept représentations phonémiques sont mutuellement communes [ɑ, e, i, o, u, ɛ et ɔ] (Dickens, 1978; Matlosa, 2017).

Le sesotho possède deux orthographes reconnues, à savoir, (i) l’orthographe sud-africaine Sesotho (SAS) et (ii) l'orthographe du sesotho du Lesotho (LS). L'une des principales différences entre les orthographes SAS et LS est l'utilisation de diacritiques dans l'orthographe LS. Par exemple, voir les exemples (c) et (d) ci-dessous :

(c) Tshepiso. - SAS orthography

Promesse. - Anglais

(d) Tšepiso. - LS orthography

Promesse. - Anglais

Dans l'exemple ci-dessus, l'orthographe LS utilise la lettre accentuée š tandis que l'orthographe SAS utilise le digramme 'sh'. Les différences entre les orthographes SAS et LS sont discutées en détail dans des études telles que Demuth (2007) et Matlosa (2017). Le système de syllabification basé sur des règles évalué dans cet article utilise l’orthographe SAS (Sibeko et van Zaanen, 2022a).

Selon Suyanto et al. (2021), les systèmes basés sur des règles fonctionnent mieux pour les langues à faibles ressources avec un corpus standard limité ou inexistant. Cela a également été démontré dans le cas du sesotho où le système à base de règles a surpassé le système de motifs basé sur TEX (Sibeko et van Zaanen, 2022a). Les systèmes basés sur des règles reposent sur des ensembles de règles soigneusement conçues par des experts en linguistique. Selon Sibeko (2022), lorsque la liste de règles conçue est correctement mise en œuvre, les limites des syllabes peuvent être identifiées dans n'importe quel mot sesotho.

Le système à base de règles pour la syllabification en Sesotho utilise des règles pour les syllabes ne contenant que des voyelles (v-syllabes), les syllabes ne contenant que des consonnes (c-syllabes), et les syllabes consonne-voyelle (cv-syllabes). Selon Sibeko (2022) et Guma (1982), ce sont les seuls types de syllabes en Sesotho. Le système de syllabification à base de règles de Sibeko et Van Zaanen (2022b) prend un mot par ligne en entrée et produit ensuite la version syllabifiée. Les limites des syllabes sont indiquées par des espaces.

Le système de syllabification basé sur des règles ne reconnaît que 26 lettres de l'alphabet [abcdefghijklmnopqrstuvwxyz]. Les règles de syllabification identifient trois types de syllabes principales ainsi que seize sous-types. Ces types, sous-types et exemples sont présentés dans le tableau 1. Fait intéressant, le système de syllabification à base de règles du sesotho utilisé dans cet article a démontré une exactitude exceptionnelle en atteignant un taux de 99,6 % (Sibeko et van Zaanen, 2022a,b).

Les sons w et y sont considérés comme des semi-voyelles lorsqu'ils se produisent à l'attaque d'une syllabe. Cependant, certaines études, telles que l'analyse des syllabes de Setswana et Sesotho par Nkolola-Wakumelo et al. (2012), utilisent plutôt le terme "glides".

p03-01.png

Tableau 1 : Règles de syllabification et exemples.

## 2.2 Syllabes de Sepedi

Selon Wilsenach (2019), les langues sotho-tswana ont des structures de syllabes similaires. C'est-à-dire que les mots en sepédi peuvent également être décomposés en v-syllabes, cv-syllabes et c-syllabes. Les v-syllabes sont formées en utilisant une seule voyelle soit au début, au milieu ou à la fin d'un mot, ou par des mots monosyllabiques formés uniquement d'une voyelle. La structure cv-syllable peut contenir entre un et quatre onsets. Les quatre attaques peuvent être composées de trois consonnes (ccc) comme dans des mots comme tlhekišo [tlhe-ki-šo], et d'une semi-voyelle (w) résultant en les quatre attaques et une syllabe vocalique (cccwv) comme dans des mots comme tlhwekišo [tlhwe-ki-šo].

Les c-syllabes peuvent être formées par les consonnes syllabiques m, n, l, r, ɲ, et ŋ (Chokoe, 2020). Tout d’abord, les c-syllabes sont formées lorsque deux consonnes syllabiques identiques se succèdent dans un même mot, par exemple dans des mots comme ba-l-li « crieurs » et wa-r-ra « frère » (Chokoe, 2020). Deuxièmement, quand les consonnes nasales précèdent toute autre consonne, par exemple dans des mots comme n-tšha 'dessiner', et m-phsa 'nouveau'. Troisièmement, la c-syllabe ŋ est formée lorsque la nasale complexe ŋ occupe la position finale du mot, comme dans des mots tels que n-tlo-ng- (Makaure, 2021 ; Chokoe, 2020).

## 2.3 Syllabes de Setswana

Il existe également trois structures de syllabes dans Setswana Otlogetswe (2017). Tout d’abord, le setswana utilise la structure syllabique cv ouverte où les syllabes cv peuvent contenir entre une (cv) et quatre (cccwv) consonnes initiales (Sebina, 2014). Deuxièmement, les v-syllabes peuvent être formées en utilisant une voyelle soit à la position initiale, médiale ou finale du mot, comme dans des mots comme a-lo-la, lo-e-to, bo-e- 'faire, voyager, retourner'. Les mots monosyllabiques à voyelle seule sont aussi utilisés en setswana, par exemple dans des mots comme ao 'à/de'. Troisièmement, comme le Sepedi, les syllabes c peuvent être formées par les consonnes syllabiques m, n, l, r, et ŋ. Les consonnes syllabiques simples peuvent apparaître à la position initiale du mot, comme dans des mots comme m-ma 'maman', et à la position médiane du mot, comme dans des mots comme bo-r-re 'pères' (Otlogetswe et Ramaeba, 2022). La consonne nasale ŋ peut également apparaître en position finale de mot comme dans les mots fi-sa-ng- 'chaud'. Bien que les autres consonnes syllabiques se comportent de manière similaire à celles du Sesotho, le système actuel de syllabification du Sesotho ne tient pas compte de la représentation de la syllabe c r dans ses règles.

## 3 Méthodologie

Le Centre sud-africain des ressources linguistiques numériques héberge un dépôt en ligne accessible au public à l'adresse repo.sadilar.org. Pour cet article, nous avons collecté deux corpus Autshumato 6, à savoir les corpus monolingues Autshumato Sepedi (McKellar, 2022a) et Setswana (McKellar, 2022b). Le corpus Sepedi contenait un total de 3 458 067 mots tandis que le corpus Setswana contenait un total de 5 219 070 mots.

p04-01.png

Tableau 2: Listes de mots fréquemment utilisés et leurs équivalents syllabisés en Sepedi

Nous avons utilisé bash pour extraire quatre listes de fréquences. Un, une liste de cent mots les plus fréquemment utilisés en Sepedi. Deux, les cent mots les plus fréquemment utilisés en setswana. Trois, les cent mots les moins fréquemment utilisés en Sepedi. Quatre, les cent mots les moins fréquemment utilisés dans le corpus setswana.

Nous avons ensuite extrait les informations de syllabification de toutes les listes en utilisant le système de syllabification basé sur des règles de Sibeko et Van Zaanen (2022b) que nous avons également téléchargé depuis le dépôt de SADiLaR.

## 4 Résultats

Cette section présente les résultats du processus de syllabification. Les 100 mots les plus utilisés et les 100 mots les moins utilisés des corpus Autshumato pour le Sepedi et le Setswana sont présentés. Les mots vides n'ont été pris en compte pour aucune des quatre listes.

## 4.1 Sepedi

## 4.1.1 Mots fréquemment utilisés

Les cent mots Sepedi les plus fréquemment utilisés variaient entre 229 028 fois [pour le mot go] et 3 387 fois [pour le mot šoma]. La liste des mots originaux et leurs syllabes sont présentées dans le tableau 2. Les types v-syllable, cv-syllable et c-syllable peuvent être observés dans la liste. Notez que nous utilisons le tiret (-) pour indiquer les limites des syllabes tandis que le système de syllabification n'utilise que des espaces.

La structure des v-syllabes a été observée pour des mots monosyllabiques ne contenant que des voyelles tels que a, e, ɛ, ɔ et o. De plus, nous avons observé des v-syllabes en position initiale de mot dans des mots tels que ile [i-le-] 'alla', en position médiane de mot dans des mots tels que taolo [ta-o-lo-] 'contrôle', et en position finale de mot dans des mots tels que tee [te-e-] 'seulement'. Nous n'avons pas observé d'identification erronée des v-syllabes.

Au moins quatre types de cv-syllabes sont présents sur la liste. Tout d'abord, la structure consonne-voyelle a été observée dans des mots tels que kudu [ku-du-] 'beaucoup' qui a été correctement divisé en deux syllabes. Deuxièmement, la structure syllabique cwv était évidente dans des mots tels que bohlokwa [bo-hlo-kwa-] « important » qui était divisé en trois syllabes. Troisièmement, la structure ccv était évidente dans des mots tels que tšeo [tše-o-] « ceux-là ». Quatrièmement, la structure ccwv était évidente dans des mots tels que ngwaga [ngwa-ga-] 'année' qui était divisé en deux syllabes. Cinquièmement, la structure cccv a été observée dans des mots tels que setšhaba [se-tšha-ba-] « nation » qui a été divisé en trois syllabes. Malheureusement, il n'y avait aucune instance de structures syllabiques cccwv sur la liste.

p05-01.png

Tableau 3: Listes des mots les moins utilisés et leurs équivalents syllabisés en Sepedi

De plus, notre liste de mots fréquemment utilisés était limitée en ce sens qu’elle ne reflétait pas tous les types de syllabes consonantiques possibles. Malgré cela, nous avons pu étudier le comportement des consonnes nasales syllabiques m et n. Par exemple, nous trouvons des mots tels que mmušo [m-mu-šo-] 'gouvernement' et nngwe [n-ngwe-] 'un' qui étaient correctement divisés en syllabes.

## 4.1.2 Mots les moins utilisés

Nous avons également étudié les cent mots les moins utilisés du corpus Sepedi. Chacun des mots n'apparaissait pas plus d'une fois dans le corpus. Les mots originaux et les syllabes dérivées sont répertoriés dans le tableau 3.

Notre liste de mots les moins fréquemment utilisés en Sepedi contenait des exemples de mots anglais non traduits. Certains des mots anglais ont été laissés comme références pour les mots Sepedi nouvellement inventés. Nous n'avons pas nettoyé la liste, au lieu de cela, nous l'avons introduite dans le système de syllabification pour voir comment le système gérerait tous les différents mots inattendus.

Heureusement, les systèmes de syllabification basés sur des règles sont les meilleurs pour les mots non vus (Adsett et al., 2009). Être capable de gérer des mots non vus permet au système de syllabification d'identifier les limites des syllabes dans des mots inattendus tels que des concaténations comme abelwagokelenaneoedirwemenyetlayagoyagoile et dans des mots d'une langue différente comme le mot anglais 'Abrahams' [a-bra-ha-ms].

Trois structures v-syllabiques ont été observées. Tout d'abord, la structure v-syllabique initiale du mot a été observée dans des mots tels que abjwe [a-bjwe-] 'partagé' qui a été décomposé en deux syllabes. Deuxièmement, la structure v-syllabique en fin de mot a été observée dans le mot aaohegnoboae qui a été divisé en huit syllabes [a-a-o-he-gno-bo-a-e-]. Enfin, la structure v-syllabique mot-médial a été observée dans des mots tels que aemiše [a-e-mi-še-] 'il s'arrête' qui a été divisé en quatre syllabes.

p06-01.png

Tableau 4 : Listes de mots fréquemment utilisés et leurs équivalents syllabifiés en setswana

Cinq structures cv-syllabiques ont été identifiées à partir de la liste de mots. Tout d'abord, la structure une-consonne-une-voyelle a été observée dans des mots tels que abulela « il a ouvert » qui a été divisé en quatre syllabes [a-bu-le-la-]. Deuxièmement, la structure cwv était évidente dans des mots tels que adimišwe « prêter » qui a été décomposé en quatre syllabes [a-di-mi-šwe-]. Troisièmement, la structure ccv a été observée dans des mots tels que abagantše « divisé » qui a été décomposé en cinq syllabes [a-ba-ga-n-tše-]. Quatrièmement, nous avons observé la structure ccwv dans des mots comme adumeletšwego [a-du-me-le-tšwe-go-] « approuvé » qui a été divisé en six syllabes. Enfin, nous avons observé la structure cccv dans des mots tels que abagantšhe [a-ba-ga-n-tšhe-] « séparé » qui était divisé en cinq syllabes. Il n'y avait aucune instance de la structure cccwv dans la liste de mots actuelle.

Seules deux structures de syllabe c ont été observées à partir de la liste des cent mots les moins fréquemment utilisés. Premièrement, la structure nasale syllabique n a été observée dans des mots tels que abagantše discutés ci-dessus. Deuxièmement, la structure nasale syllabique complexe ŋ a été observée dans des mots tels que abaganeng [a-ba-ga-ne-ng-] où elle est en position finale de mot.

Bien qu'il n'y ait eu aucune occurrence de la nasale syllabique m, on observe un comportement intéressant de la consonne m dans des mots tels que adminiša [a-dmi-ni-ša-] « administrer » et admirale [a-dmi-ra-le-] « amiral », qui sont respectivement décomposés en quatre syllabes. Cette structure de la syllabe dmi est inattendue dans la langue sepedi et elle n'est rendue possible que par des mots d'emprunt naturalisés. On s'attendrait à une voyelle entre les lettres d et m comme dans adiminiša [a-di-mi-ni-ša-] et adimirale [a-di-mi-ra-le-].

Néanmoins, les langues sotho-tswana n'ont pas de règles strictes pour l'orthographe des mots empruntés. Par conséquent, la syllabe 'dmi' n'enfreint pas les règles d'orthographe puisqu'il s'agit d'une syllabe ccv qui relève de la structure syllabique cv généralement préférée dans les langues bantoues (Ditsele, 2014). Ce qui est important ici, c'est que les limites des syllabes soient correctement identifiées.

## 4.2 Setswana

## 4.2.1 Mots fréquemment utilisés

Les cent mots Setswana les plus fréquemment utilisés variaient entre 334 188 fois [pour le mot go] et 4 688 fois [pour le mot yona].

Les mots monosyllabiques composés uniquement de voyelles, tels que a, e et o, étaient fréquemment utilisés dans le corpus. De plus, nous avons observé des structures de syllabe v en position initiale de mot dans des mots tels que eno [e-no-] « celui-là », en position finale de mot comme dans des mots tels que puo [pu-o-] « parole », et en position médiane de mot dans des mots tels que « jaaka » [ja-a-ka-] « comme ». Dans l'ensemble, aucune erreur n'a été observée pour les structures syllabiques v.

p07-01.png

Tableau 5: Liste des mots les moins utilisés et leurs équivalents syllabisés en setswana

Au moins six structures cv-syllabiques ont été observées. Premièrement, la structure du CV était évidente dans des mots tels que pele [pe-le-] 'suivant'. Deuxièmement, la structure cwv a été observée dans des mots comme kwala [kwa-la-] 'écrire'. Troisièmement, la structure syllabique ccv a été observée dans des mots tels que tlase [tla-se-] « bas ». Quatrièmement, la structure de la syllabe ccwv a été observée dans des mots tels que sengwe [se-ngwe-]'quelque chose'. Cinquièmement, nous avons observé la structure syllabique cccv dans des mots comme botlhokwa [bo-tlho-kwa-] « important ». Sixièmement, nous avons observé la structure cccwv dans des mots tels que tshwanetse [tshwa-ne-tse-] « doit ».

Nous avons également observé trois types de syllabes C. Premièrement, la syllabe m était évidente dans des mots tels que mmogo « ensemble » où elle apparaissait en position initiale du mot [m-mo-go-]. Deuxièmement, la syllabe n a été observée en position médiane du mot dans des mots comme dintlha [di-n-tlha-] 'détails'. Troisièmement, la syllabe ŋ apparaissait en position finale du mot dans des mots comme neng [ne-ng-] « quand ».

## 4.2.2 Mots les moins utilisés

Les mots les plus rares du corpus setswana n’apparaissent pas plus d’une fois dans le corpus. Les mots originaux ainsi que les syllabes sont présentés dans le tableau 5. Similaire à la liste Sepedi, la liste Setswana contient quelques cas d'orthographe incorrecte comme adiminsanang [a-di-mi-n-sa-na-ng-]. Malgré cela, le système de syllabification a été capable d'insérer des limites de syllabes justifiables aux espaces attendus. Par exemple, le n supplémentaire dans adimi-n-sanang est suivi d'une frontière de syllabe correcte. En outre, comme la liste Sepedi, il existe de nombreux cas de mots non setswana sur la liste.

Trois structures v-syllabiques ont été observées. C'est-à-dire, en position initiale du mot dans des mots comme adileng [a-di-le-ng-] « disposé », en position médiane du mot dans des mots tels que abiotiki [a-bi-o-ti-ki-] « abiotique », et en position finale du mot dans l'acronyme anglais non traduit pour Autism Centers of Excellence, c'est-à-dire acae [a-ca-e-].

Cinq structures cv-syllabiques ont également été observées. C'est-à-dire, la syllabe cv dans des mots comme adikarabo [a-di-ka-ra-bo-] 'des réponses', la syllabe cwv dans des mots comme abelwaneng [a-be-lwa-ne-ng-] 'partagé', la syllabe ccv dans des mots comme adimanwe [a-di-ma-nwe-] 'emprunté l'un à l'autre', et la syllabe ccwv dans des mots comme adimetsweng [a-di-me-tswe-ng-] 'emprunté pour'.

Enfin, trois types de c-syllabiques ont été observés. Premièrement, la syllabe m a été observée dans des mots comme adimlweng [a-di-m-lwe-ng-]. Bien que le mot soit mal orthographié, les frontières syllabiques se trouvent aux endroits attendus. Deuxièmement, la position médiane dans le mot de la syllabe l est évidente dans des mots comme abillweng [a-bi-l-lwe-ng]. La deuxième latérale dans le mot est malheureusement une faute de frappe. Même ainsi, le système de syllabification a réussi à insérer des limites justifiables suivant l'ordre des lettres dans le mot. Enfin, la syllabe ŋ a été observée en position finale de mot dans des mots comme adimeng [a-di-me-ng-] et en position médiale de mot dans des mots comme abengditirelo [a-be-ng-di-ti-re-lo-].

Comme nous nous y attendions, le 'r' syllabique du Setswana n'est pas couvert par les règles de syllabification du Sesotho telles que décrites dans Sibeko (2022) et Sibeko et van Zaanen (2022a). Malheureusement, un mot Setswana approprié contenant la 'r' c-syllabe n'est pas présent dans les deux listes de mots Setswana. Même ainsi, le mot abderrahmane [a-bde-rra-hma-ne-] contient des lettres « r » consécutives. Dans cette occurrence, la limite syllabique attendue entre la syllabe 'rra', c'est-à-dire [r-ra-] est manquante.

## 5 Discussion

Comme indiqué précédemment dans cet article, les langues sotho-tswana sont mutuellement intelligibles dans une large mesure. Bien que certains choix de vocabulaire puissent être ambigus, l'ambiguïté n'affecte pas les coupures de syllabes. Cet article visait à évaluer le système de syllabification à base de règles du sesotho sur des mots en sepedi et en setswana. Nous avons utilisé les corpus de traduction automatique Autshumato pour le sepédi et le setswana. Les textes ont été traduits à partir de textes anglais servant de langue pivot. En conséquence, ils contiennent des informations quelque peu similaires.

Les structures syllabiques en v ont montré un placement correct des syllabes en Sepedi et en Setswana. Toutes les structures de syllabes en V argumentées par Sibeko (2022) ont été identifiées à la fois pour Sepedi et Setswana. Toutes les structures v-syllabiques initiales, médiales et finales ont été correctement identifiées. Cette cohérence dans l'exactitude des ruptures de syllabes indique que le système actuel de syllabification du sesotho est idéal pour identifier les syllabes en v dans le sepedi et le setswana. Malheureusement, les mots d'une seule lettre ne peuvent pas être décomposés en syllabes. Malgré cela, aucune sortie inattendue n'a été observée pour les mots à voyelle unique.

Le système de syllabification insère systématiquement des ruptures de syllabes correctes dans les mots contenant les consonnes syllabiques m et n sur les textes Sepedi et Setswana. Malheureusement, le ŋ n'a pu être identifié qu'en position finale de mot en Sepedi. De ce fait, nous n'avons pas pu observer son comportement lorsqu'il apparaît en position initiale et médiane de mot. Malgré cela, la syllabe ŋ médiale du mot a été correctement identifiée dans la liste du setswana. De plus, la liste du Sepedi ne contenait aucune occurrence de la syllabe l. Cependant, il a été observé dans la liste Setswana. En conséquence, nous pouvons supposer en toute sécurité que le système de syllabification actuel peut insérer des limites de syllabes correctes pour la consonne l, même en Sepedi, car la syllabe l se comporte de la même manière dans les trois langues Sotho-Tswana.

La structure inattendue de la syllabe dmi met en évidence un besoin de règles claires régissant le comportement des consonnes nasales qui suivent d'autres consonnes. À ce stade, les règles ne sont descriptives que lorsque la consonne nasale vient avant les autres consonnes. Il pourrait être intéressant d'étudier également cela dans de futures études.

Bien que le système ait tenté d'identifier les limites des syllabes dans les mots non-sotho-tswana, c'est-à-dire les mots anglais, la discordance entre les règles mises en œuvre dans le système de syllabification et la structure de l'orthographe des mots anglais ne pouvait pas être ignorée.

Toutes les limites de syllabes attendues dans les mots correctement orthographiés en Setswana ont été identifiées avec succès par le système de syllabification. Nous avons cependant manqué une occurrence de syllabe avec 'r' consécutif à la fois dans les listes en sepedi et en setswana. Il aurait été intéressant d'analyser des mots setswana réels avec de tels exemples. Néanmoins, nous avons remarqué l'absence d'une rupture de syllabe entre les lettres r consécutives dans les exemples non-Setswana. Cette découverte confirme notre hypothèse initiale selon laquelle le système de syllabification Sesotho actuel n'identifie pas les consonnes syllabiques r.

Nous avons également remarqué des incohérences dans l'orthographe de mots comme aaforika et aaferika 'Afrique' dans la liste des cent mots les plus rares utilisés en Setswana. Les deux mots ont été à juste titre divisés en syllabes selon l'orthographe incorrecte donnée, voir tableau 5. Bien que cela soit sans importance pour l'identification des syllabes, cela affecte le décompte des syllabes, car cela peut exagérer le nombre de syllabes et les types identifiés dans un texte.

L'incapacité du système de syllabification à reconnaître les diacritiques tels que ceux utilisés dans Sepedi s'est avérée sans problème pour nos mots sélectionnés. C'est-à-dire que les mots Sepedi avec des diacritiques ont été correctement décomposés en syllabes. Même ainsi, nous ne connaissons pas tous les placements possibles des lettres avec des accents dans les mots écrits Sepedi. Par mesure de précaution, nous recommandons que la mise à jour du système de syllabification inclue les lettres avec des signes diacritiques.

Dans l'ensemble, nous recommandons que la syllabification à base de règles du sesotho soit mise à jour pour couvrir les trois langues standardisées sotho-tswana. Nous recommandons également que les diacritiques soient inclus et spécifiquement traités dans le système de syllabification recommandé sotho-tswana. Tout aussi important, nous recommandons que les règles mises à jour devraient également couvrir des règles spécifiques pour le traitement de la syllabe r du sepedi et du setswana.

## Limites

Les résultats de cet article sont limités par notre méthode d'échantillonnage qui comprenait l'utilisation des cent mots les plus utilisés et des cent mots les moins utilisés dans chacune des langues comme en témoignent les corpus Autshumato. Les études futures pourraient envisager de développer des corpus annotés d'information syllabique de référence pour le Sepedi et le Setswana. Les corpus pourraient ensuite être utilisés pour évaluer l'utilisabilité du système de syllabification Sesotho basé sur TEX sur les textes Sepedi et Setswana. Dans cet article, nous avons été limités par l'absence de tels corpus et nous nous sommes donc limités à l'évaluation du système de syllabification fondé sur des règles. Les listes utilisées ne contenaient pas d'exemples corrects en Sepedi de mots contenant des consonnes r consécutives. Par conséquent, nous ne sommes pas en mesure de tirer des conclusions concrètes sur les performances du système de syllabification basé sur des règles sur de tels mots.

## Déclaration éthique

Cet article utilise des ressources publiquement disponibles. Les auteurs ont pris des mesures pour s'assurer que les données utilisées sont correctement citées et attribuées aux sources originales et que tout biais ou limitation potentiel dans les données sont reconnus.

## Notes

1 voir les mandats pour les conseils linguistiques sud-africains accessibles à https://static.pmg.org.za/PanSALB_APP_2122_compressed_reviewed_08032021_final.pdf

2 Les résultats du recensement de 2022 en Afrique du Sud n'ont pas été publiés

3 La liste de mots annotée avec les informations sur les syllabes en sesotho peut être librement consultée à l'adresse suivante : https://repo.sadilar.org/handle/20.500.12185/556

4 voir https://repo.sadilar.org/handle/20.500.12185/556 pour les systèmes de syllabification du sesotho

5 notez qu'il s'agit d'un autre exemple de mot non Sepedi. Il a été utilisé ici en raison de l'absence d'un mot Sepedi approprié avec le mot final v-syllable

## Références

Connie R Adsett, Yannick Marchand, Vlado Kes, et al. 2009. Syllabification rules versus data-driven methods in a language with low syllabic complexity: The case of italian. Computer Speech & Language, 23(4):444-463.

Etienne Barnard, Marelie H Davel, Charl Van Heerden, Febe De Wet, and Jaco Badenhorst. 2014. The NCHLT corpus of the South African languages. In Proceedings of the 4th International Workshop Spoken Language Technologies for Under-resourced Languages, pages 194-200.

Sekgaila Chokoe. 2020. Spell it the way you like: The inconsistencies that prevail in the spelling of Northern Sotho loanwords. South African Journal of African Languages, 40(1):130-138.

Katherine Demuth. 2007. Sesotho speech acquisition. The international guide to speech acquisition, pages 526-538.

Patrick Dickens. 1978. A preliminary report on Kgalagadi vowels. African Studies, 37(1):99-106.

Thabo Ditsele. 2014. Why not use Sepitori to enrich the vocabularies of Setswana and Sepedi? Southern African Linguistics and Applied Language Studies, 32(2):215-228.

Aditi Sharma Grover, Gerhard B van Huyssteen, and Marthinus W Pretorius. 2010. The South African Human Language Technologies audit. In Proceedings of the Seventh International Conference on Language Resources and Evaluation (LREC'10), pages 2847-2850.

Aditi Sharma Grover, Gerhard Beukes. van Huyssteen, and Marthinus W. Pretorius. 2011. The South African Human Language Technology audit. Language resources and evaluation, 45:271-288.

Samson Mbizo Guma. 1982. An outline structure of Southern Sotho, 2nd edition. Shooter and Shuter Publishers, Pietermaritzburg, South Africa.

Pali Lehohla. 2011. Census in brief. Statistics South Africa. government printing works: Pretoria.

Katjie Sponono Mahlangu. 2015. The growth and development of isiNdebele orthography and spelling (1921-2010). Ph.D. thesis, University of Pretoria.

Leketi Makalela. 2009. Harmonizing South African Sotho language varieties: Lessons from reading proficiency assessment. International Multilingual Research Journal, 3(2):120-133.

Zvinaiye Patricia Makaure. 2021. The contribution of phonological processing skills to early literacy development in Northern Sotho-English bilingual children: A longitudinal investigation. Ph.D. thesis, The University of South Africa, Pretoria.

Litsépiso Matlosa. 2017. Sesotho orthography called into question: The case of some Sesotho personal names. Nomina Africana: Journal of African Onomastics, 31(1):51-58.

Cindy McKellar. 2022a. Autshumato Monolingual Sepedi Corpus. ONLINE. South African Centre for Digital Language Resources. Available at: https://repo.sadilar.org/handle/20.500.12185/582 Accessed: 28 Jan 2023.

Cindy McKellar. 2022b. Autshumato Monolingual Setswana Corpus. ONLINE. South African Centre for Digital Language Resources. Available at: https://repo.sadilar.org/handle/20.500.12185/584 Accessed: 28 Jan 2023.

Victor Mojela. 2016. Etymology & figurative: The role of etymology in the lemmatization of Sotho terminology. In The 10th International Conference of the Asian Association for Lexicography (AsiaLex2016) 1-3 June 2016 Manila, The Philippines, page 93.

Carmen Moors, Illana Wilken, Karen Calteaux, and Tebogo Gumede. 2018a. Human Language Technology audit 2018: Analysing the development trends in resource availability in all South African languages. In Proceedings of the Annual Conference of the South African Institute of Computer Scientists and Information Technologists, pages 296-304.

Carmen Moors, Illana Wilken, Tebogo Gumede, and Karen Calteaux. 2018b. Human Language Technology audit 2017/18. Technical report, CSIR Meraka Institute.

Mildred Nkolola-Wakumelol, Liketso Rantsoz, and Keneilwe Matlhaku. 2012. Syllabification of consonants in Sesotho and Setswana. In H S NgingaKoumba-Binza and S Bosch, editors, Language Science and Language technology in Africa: Festschrift for Justus C. Roux, pages 10-13. Sun Express, Stellenbosch, South Africa.

Thapelo J Otlogetswe. 2017. Setswana syllable structure and distribution. Nordic Journal of African Studies, 26(4):28-28.

Thapelo J Otlogetswe and Goabilwe N Ramaeba. 2022. Nickname creation through shortening Setswana personal names. South African Journal of African Languages, 42(2):200-206.

Danie Prinsloo. 2011. Tribute to Professor Louis Jacobus Louwrens: This issue of the south african journal of african languages is dedicated to Professor Louis Jacobus Louwrens. South African Journal of African Languages, 31(1):1-5.

Tebogo Rakgogo and Evangeline Zungu. 2021. The onomastic possibility of renaming the Sepedi and Sesotho sa Leboa (Northern Sotho) language names to restore peace, dignity and solidarity. Literator (Potchefstroom. Online), 42(1):1-14.

Republic of South Africa. 1996. Constitution of the Republic of South Africa. Department of Justice, Pretoria.

Boikanyego Sebina. 2014. First language attrition in the native environment. LANGUAGE, 6:53-60.

Johannes Sibeko. 2022. Tshebediso ya melao kabong ya dinoko tsa Sesotho. Southern African Linguistics and Applied Language Studies, 40(4):494-506.

Johannes Sibeko and Mmasibidi Setaka. 2022. An overview of Sesotho blark content. Journal of the Digital Humanities Association of Southern Africa, 4(01).

Johannes Sibeko and Menno van Zaanen. 2022a. Developing a text readability system for Sesotho based on classical readability metrics. In Responding to Asian diversity, pages 571-572.

Johannes Sibeko and Menno van Zaanen. 2022b. Sesotho syllabification systems. Southern African Centre for Digital Language Resources. Available at: https://repo.sadilar.org/handle/20.500.12185/555 [accessed: 3 jan 2023].

Luan Staphorst. 2022. Ongehoord: Voices unaccented; voices unharmonized. Afrikaans and South Africa's first peoples in discourses of higher education transformation. Unpublished MA dissertation, Nelson Mandela University.

Suyanto Suyanto, Ade Romadhony, Febryanti Sthevanie, and Rezza Nafi Ismail. 2021. Augmented words to improve a deep learning-based indonesian syllabification. Heliyon, 7(10):e08115.

Hein Willemse. 2018. The hidden histories of Afrikaans. Whiteness Afrikaans Afrikaners: Addressing PostApartheid Legacies, Privileges and Burdens, page 115.

Carien Wilsenach. 2019. Phonological awareness and reading in Northern Sotho-understanding the contribution of phonemes and syllables in grade 3 reading attainment. South African Journal of Childhood Education, 9(1):1-10.

Philimon Nhlanhla Zulu, Gerrit Botha, and Etienne Barnard. 2008. Orthographic measures of language distances between the official South African languages. Literator: Journal of literary criticism, comparative linguistics and literary studies, 29(1):185-204.
