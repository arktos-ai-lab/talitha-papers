> Machine translation (fr) of "A Lexical database of Malagasy adjectives" by Joro Ranaivoarison, https://upjournals.up.ac.za/index.php/dhasa/article/view/4439, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## Une base de données lexicale des adjectifs malgaches

Joro Ranaivoarison

**Affiliations**  
Joro Ranaivoarison  
Department of Malagasy, University of Antananarivo  


## Résumé

Cet article traite d'une ressource électronique en construction. L'objectif est de construire une base de données lexicale des adjectifs malgaches. Le malgache est une langue agglutinante d'origine austronésienne, parlée sur l'île africaine de Madagascar. La méthode utilisée pour construire la ressource est adaptée de l'approche de Gross (1989) pour les dictionnaires électroniques. Le contenu de la ressource est basé sur une analyse linguistique et encodé pour être utilisé par des logiciels de traitement du langage. Cependant, il a été veillé à ce que toutes les informations linguistiques soient facilement lisibles et mises à jour. La ressource permet l'analyse morphologique et la génération d'adjectifs, en supprimant les obstacles à la construction d'applications informatiques pour traiter le langage malgache. L'originalité de cet article réside également dans notre proposition d'une distinction entre les adjectifs au sens habituel et les formes adjectivales d'autres parties du discours.

## Mots-clés

base de données lexicale, malgache, adjectif, flexion, dérivation

## 1 Introduction

Cette recherche s'inscrit dans le cadre de la construction d'une ressource générale pour la langue malgache, et se concentre sur les adjectifs. Cette ressource est en construction et doit être révisée et enrichie.

La base de données est conçue pour être utilisée par des programmes de traitement de langue. Cet objectif nécessite un haut niveau de précision et de formalisation. Nous avons emprunté des principes méthodologiques à des projets similaires réussis et nous avons utilisé Unitex/GramLab (Paumier, 2003), une plateforme de traitement du langage open-source et librement disponible qui offre également des fonctionnalités pour la construction de ressources linguistiques.

Par rapport à la grammaire traditionnelle et aux travaux antérieurs des linguistes sur les adjectifs, nous distinguons les adjectifs au sens habituel des formes adjectivales des autres parties du discours (dans ce cas, les noms).

La section suivante fournit des informations générales sur les adjectifs en malgache. La section 3 résume l'approche de Gross (1989) aux dictionnaires électroniques. Dans la section 4, nous décrivons comment l'allomorphie (interne aux morphèmes) est représentée dans la base de données. La section 5 traite du dictionnaire des lemmes adjectivaux au sens habituel, et la section 6 traite des ressources qui rendent compte des formes adjectivales des noms. Nous rapportons les expériences réalisées pour tester les ressources dans la section 7. La dernière section contient des remarques conclusives.

## 2 Adjectifs en malgache

Les définitions indépendantes de la langue des adjectifs, par exemple "un terme utilisé dans la classification grammaticale des mots pour désigner l'ensemble principal des éléments qui spécifient les attributs des noms" (Crystal, 2008: 11), conviennent au malgache, mais ne sont pas assez précises, par exemple, pour distinguer les adjectifs des verbes avec le préfixe m-. À cet égard, nous suivons Rajaona (1972 : 404) et Ralalaoherivony (1995) qui tracent la ligne en utilisant le critère suivant : les verbes ont des formes à la voix circumstantielle, tandis que les adjectifs n'en ont pas. Voir Rajaona (1972 : 521), Keenan & Polinski (1998 : 609), Dalrymple et al. (2005) sur la voix circumstantielle. Ainsi, mandèha « marcher », mandrày « prendre » sont des verbes parce que les formes circonstancielles andehánana, andráisana sont en usage ; et des éléments comme m-a-kòtroka, màtotra sont des adjectifs parce que les formes circonstancielles *akotróhana, *atórana ne sont pas attestées. (Les accents graphiques en malgache sont facultatifs et indiquent le stress.)

Cette section rend compte de l'inflexion des adjectifs et de la distinction entre les adjectifs dérivés et infléchis qui découlent des noms.

## 2.1 Inflection des adjectifs

Comme les verbes, certains adjectifs reçoivent des marqueurs d'inflection de temps grammatical en malgache (cf. Rajaonarimanana, 1995 : 64).

La plupart des adjectifs se combinent avec ho pour exprimer le temps futur, d'où màro « est/était nombreux » / ho màro « sera nombreux », mànta « est/était cru » / ho mànta « sera cru », etc. Ce marqueur du temps futur n'est pas un morphème flexionnel parce qu'il peut être séparé de l'adjectif par d'autres mots.

Cependant, d'autres adjectifs montrent une alternance morphologique associée au temps, par exemple m-a-fàna (PRS-ADJZ-chaleur) « il fait chaud », n-a-fàna (PAST-ADJZ-chaleur) « il faisait chaud » et h-a-fàna (FUT-ADJZ-chaleur) « il fera chaud ». Parmi les quelque 2 115 adjectifs étudiés pour cet article, environ 365 prennent l’alternance m:n:h.

Les grammairiens traditionnels comme Malzac (1950), Rajemisa (1969), et les linguistes comme Rajaona (1972), Rajaonarimanana (1995) considèrent que m-, ma, mi, man-, -ina, -ana sont des affixes formant des adjectifs. Parmi ceux-ci, nous choisissons de segmenter davantage ma-, mi, man- en marqueurs de temps m-, n-, h- et en affixes de formation d'adjectifs a-, i-, an-, chaque fois que l'alternance morphologique mi, ma-, man-/ni, na, nan-/hi, ha, han- est corrélée à la différence de temps.

Certains adjectifs en malgache prennent des suffixes impératifs (cf. Rajaona, 1972 ; Catz & Catz, 2017) tels que -a dans m-a-heréz-a (PRS-ADJZ-power-IMP) « be powerful » vs. m-à-hery (PRS-ADJZ-power) « powerful », m-a-zoto-a (PRS-ADJZ-diligence-IMP) « be industrious » vs. m-a-zòto (PRS-ADJZ-diligence) « industrious ». Pour l'instant, le mode impératif n'est pas pris en compte dans la ressource.

## 2.2 Adjectifs dérivés ou infléchis

Beaucoup d'adjectifs malgaches sont dérivés de noms. Comme c'est habituel en morphologie dérivationnelle, le sens ou la syntaxe de l'adjectif dérivé n'est pas entièrement prévisible. Dans le tableau 1, par exemple, les noms de base kòtroka, hìdy, jèmby ont les dérivations suivantes : m-a-kòtroka, m-a-hìdy, jembé-na.

Tableau 1: Formes dérivées ayant une signification ou une syntaxe imprévisible

p02-01.png

D'autres affixes formant des adjectifs ont été décrits dans Malzac (1950), Rajemisa (1969) et Rajaona (1972) [cf. sous-section 5.5 ci-dessous].

En malgache, cependant, la relation grammaticale entre les noms et les adjectifs peut également tomber sous la morphologie flexionnelle. Pour environ 5% des adjectifs que nous avons étudiés dans cette recherche, le sens et la syntaxe de l'adjectif dénominal sont entièrement prévisibles en fonction de la racine du nom et du processus morphologique impliqué, comme dans le tableau 2.

Tableau 2 : Formes infléchies avec signification et syntaxe prévisibles

p02-02.png

De telles paires sont si régulières que le processus peut être considéré comme flexionnel, même si la forme de base et la forme dérivée appartiennent à des parties distinctes de la parole. En d'autres termes, ces adjectifs peuvent être considérés comme des formes adjectives fléchies des noms correspondants, tout comme les participes sont des formes adjectives fléchies des verbes en anglais : d'une part, ils peuvent se comporter comme des adjectifs (cf. le terme 'participial adjective' utilisé par exemple par Kennedy & McNally (1999)), mais d'autre part ils appartiennent à la conjugaison des verbes.

La ressource inclut des adjectifs dérivés tels que m-a-kòtroka (PRS-ADJZ-thunder) « warm », des formes adjectivales fléchies de noms comme m-ànitra (ADJZ-fragrance) « fragrant », et des adjectifs de base comme àvo (ADJ) « high ».

La distinction entre adjectifs dérivés et fléchis est une réalité incontournable du malgache, mais les principaux affixes servent à la fois de dérivationnels et de flexionnels :

i-, dans m-i-kodiadìa « gros et gras (d'un enfant) », de kodìa « roue », est dérivationnel, mais dans m-i-kitoantòana « rugueux, inégal, escarpé », de kitoantòana « terrain inégal, endroit accidenté », i- est flexionnel ;

quant à a- dans m-a-tètika « fréquent », de tètika « scarification ornementale ; découpage en petits morceaux », il est dérivationnel, mais dans m-a-fàna « chaud », de fàna « chaleur », a- est flexionnel ;

quant à m- dans m-èndrika « convenable, approprié, digne », de èndrika « visage, ressemblance, image », m- est dérivationnel, mais dans m-ànitra « parfumé », de hànitra « parfum », m- est flexionnel.

Par conséquent, lors de la construction de la ressource, nous sommes confrontés à des décisions difficiles dans la classification des adjectifs dénominaux comme dérivés ou infléchis, surtout lorsque le préfixe formant l'adjectif est m-. Dans de tels cas, nous analysons l'adjectif comme une forme fléchie d'un nom uniquement lorsque nous identifions une paire de constructions syntaxiques telles que Misy hànitra N0 "N0 a une fragrance" = M-ànitra N0 "N0 est parfumé", où mìsy "il y a" ou mànana "avoir" est un verbe support (Ranaivoson, 1996; Lakoarisoa et al., 2011; Jaozandry, 2014; Hamitramalala, 2017), et N0 est un nom sujet accepté. Dans le cas de m-ày "en feu", m-àfy "dur", respectivement de hày "brûlant", hàfy "dureté", il n'y a pas de telles paires de constructions syntaxiques, puisque la construction nominale n'est pas utilisée:

p03-patch01.png

Ainsi, nous les avons codés comme des adjectifs dérivés dans la ressource. De telles décisions lexicologiques frôlent l'arbitraire, mais les critères formels sont le meilleur moyen que nous connaissons pour les rendre reproductibles.

Les verbes avec un préfixe résultatif, par exemple mahatalànjona « étonnant », mahavàriana « stupéfiant » sont considérés comme des formes verbales de talanjona « étonné », varìana « stupéfait » (cf. Rajaona, 2004:58) et encodés dans notre base de données dans le cadre de la conjugaison (Ranaivoraison et al., 2013).

## 3 Dictionnaires électroniques

La méthode utilisée pour construire la ressource des adjectifs du malgache est adaptée de l'approche de Gross (1989) pour les dictionnaires électroniques. Cette approche recommande plusieurs garanties méthodologiques.

Tout d'abord, pour que les bases de données lexicales soient utilisables par les programmes, toutes les données doivent être explicites. Cette situation contraste avec celle des dictionnaires pour lecteurs humains, où certaines informations peuvent rester implicites, puisque les lecteurs comptent sur leur compétence linguistique pour le déduire.

Ensuite, les décisions lexicologiques et lexicographiques sont basées sur l'observation d'un nombre suffisamment grand d'entrées lexicales. Les entrées sont systématiquement inventoriées et les décisions sont fondées sur cet inventaire, et non sur des observations sporadiques sur un échantillon limité d'entrées, une pratique qui serait plus susceptible de nécessiter des révisions de ces décisions.

Les ressources doivent être lisibles, afin qu'elles puissent être mises à jour.

Enfin, les modes de flexion sont définis explicitement, de sorte que les formes fléchies d'un radical puissent être générées automatiquement. Un mode de flexion est l'ensemble des modifications morphologiques subies par un radical pour générer ses formes fléchies. Plusieurs entrées lexicales peuvent partager le même mode flexionnel, comme ring et sing en anglais. La méthode exige que les modes flexionnels soient définis indépendamment les uns des autres, afin d'éviter de construire une hiérarchie de règles générales et de règles exceptionnelles, car de telles hiérarchies sont généralement complexes à maintenir par la suite, à mesure que la base de données subit des mises à jour. Comme chaque mode flexionnel est indépendant, la mise à jour d’un mode ne nécessite pas la mise à jour des autres. En conséquence, nous attribuons un identifiant à chaque mode flexionnel et nous indiquons dans chaque entrée du dictionnaire l'identifiant du type de flexion applicable. Ainsi, savoir si une règle est applicable à une entrée lexicale ne nécessite pas de l'appliquer. Cela contraste avec la morphologie à deux niveaux (Koskenniemi, 1983), où la portée de la règle est codée dans les règles, de sorte que savoir si une entrée lexicale est affectée par un changement de règle nécessite d'appliquer les deux versions de la règle. De plus, des règles à deux niveaux sont ordonnées, de sorte que savoir si une entrée lexicale est affectée par un changement d'ordre de règle nécessite d'appliquer les deux versions de toutes les règles. Ces caractéristiques sont des obstacles pratiques aux mises à jour, corrections et extensions des bases de données à deux niveaux.

Notre approche encode ainsi la génération de formes fléchies à partir de leurs radicaux, établissant un lien formel entre eux, par exemple entre sing et singing en anglais. Cependant, l'approche ne fait pas de même entre les dérivés et leurs bases, comme speak et speech, car les irrégularités sémantiques et syntaxiques réduisent les applications potentielles d'une telle génération. Ainsi, les mots dérivés tels que m-èndrika « convenable, correct, digne », m-i-kodiadìa « gros et gras (d'un enfant) » sont encodés comme des radicaux.

L'approche de Gross, conçue pour les langues flexionnelles, a été étendue aux langues agglutinantes (Berlocher et al., 2006 ; Ranaivoarison et al., 2013) en distinguant deux niveaux de changements morphologiques :

l'allomorphie interne au morphème, par exemple le nom sómotra « barbe » devient somór immédiatement avant certains suffixes,

les affixations, par exemple -ina, un morphème de formation de formes adjectivales, peuvent être suffixées à somór, donnant somórina « barbu ».

Par les deux étapes correspondant à ces deux niveaux, la forme fléchie somòrina peut être générée à partir du lemme sómotra, ou inversement, le lemme peut être reconnu à partir de la forme fléchie.

La plate-forme open source de traitement du langage Unitex (Paumier, 2003) est compatible avec les ressources conçues selon cette approche et codées au format DELA (Gross 1989 : 8). Unitex effectue une flexion, une compression et une consultation de très haute qualité (Neme, Paumier, 2019) des bases de données lexicales encodées dans ce format. En revanche, les formats d'encodage de dictionnaires de l'Initiative de codage textuel sont principalement conçus pour les dictionnaires orientés humain (TEI Consortium, 2022) et n'abordent pas le traitement des bases de données lexicales.

Dans l'approche du dictionnaire électronique, les bases lexicales couvrent principalement les parties du discours et les inflexions. Cela contraste avec l'approche lexique-grammaire, également proposée par Gross (Elia, 1978), qui étudie également l'applicabilité des opérations syntaxiques. En raison de cette différence, les distinctions de sens sont plus fines dans cette dernière approche (Laporte, 1991).

## 4 Allomorphie

Cette section fournit des informations sur l'allomorphie interne aux morphèmes et sur la manière dont elle est encodée afin que les variantes lexicales des radicaux puissent être produites automatiquement. Nous listons les phénomènes qui affectent les stems et nous décrivons des graphes qui encodent l'allomorphie.

## 4.1 Phénomènes d'allomorphie

Immédiatement avant ou après les affixes, certains radicaux ne varient pas, comme dans èrika « crachin » / m-èrika « bruineux, brumeux », dìo « propreté, pureté » / m-a-dìo « propre, clair, pur », mais la plupart varient. Elles peuvent subir 5 types de variation :

alternations prosodiques comme dans sòmotra/somór (l'accent passe de la première ò à la seconde ó)

insertion d'une lettre comme dans safòfoka/tsafòfoka (insertion de t avant la racine dans la forme fléchie mantsafòfoka)

substitution d'une lettre hàtsiaka/gàtsiaka (substitution de g dans la forme fléchie mangàtsiaka au h du radical)

extension comme dans nòfo/nofós (insertion de s dans la forme fléchie nofósana)

suppression d'une lettre comme dans vorètra/orètra (suppression de la lettre v du radical dans la forme fléchie mamorètra) ou dans sòmotra / somór (suppression du t et du a de sòmotra dans la forme fléchie somórina)

Toutes les racines allomorphes des adjectifs subissent un ou plusieurs des phénomènes ci-dessus dans leurs variantes lexicales.

Pour une étude approfondie des phénomènes affectant les radicaux en malgache, se référer à Rajaona (2004).

## 4.2 Encodage de l'allomorphie avec des graphes

Pour encoder les variantes lexicales des stems, nous joignons à chaque entrée un code qui identifie avec précision les variations applicables. Ces variations sont encodées sous la forme d'un graphique comme celui de la figure 1, qui produit automatiquement les variantes lexicales de racines comme pànda "taches de rousseur", kilèma "déformation", kìbo "ventre".

p05-01.png

Figure 1 : Graphe d'allomorphie '0v'

Chemin 1 encode pànda > pandá en pandáina « freckled, sunburned » ; chemin 2, kilèma > kilemá en kilemáina « maimed » ; et chemin 3, kìbo > kibó en kibóina « bigbellied ». Cette technique de marquage lexical facilite les mises à jour. L'identifiant '0v' est le nom du graphe et est attaché à ces mots pour encoder ces alternances prosodiques. Ainsi, plusieurs entrées lexicales comme tràtra « poitrine », tsikòko « croûtes » partagent le même mode flexionnel '0v' (identifiant) pour produire automatiquement des variantes lexicales comme tratrá, tsikokó.

D'autres lemma ont des terminaisons -ka, -tra, -na, et leur -a final est absent dans la plupart de leurs allomorphes : les graphes correspondants spécifient la suppression de cette voyelle.

p05-02.png

Figure 2 : Graphie de l'allomorphie '1v' pour les lemmes en -ka.

Par exemple, le graphe '1v' de la Fig. 2 supprime la terminaison -ka et insère une lettre h, en plus des alternances prosodiques et/ou vocaliques, encodant des variations telles que dònika > donéh dans donéhina « souffrant des oreillons », fàsika > faséh dans faséhina « sablonneux », tsèroka > tseróh dans tseróhina « sale, squameux ».

Si le lemme contient des préfixes flexionnels, les graphes les suppriment également.

Ainsi, les graphes d'allomorphie pour les radicaux en malgache sont divisés en 4 types : pour ceux avec des terminaisons ka, tra ou na, et pour ceux sans aucune de ces terminaisons. De plus, ils spécifient certains des cinq phénomènes identifiés dans la sous-section 4.1. Trente graphes d'allomorphie sont utilisés pour environ 2115 adjectifs.

Nous décrirons maintenant les autres ressources pour les entrées lexicales des adjectifs, puis celles pour les formes adjectives des noms.

## 5 Encodage des entrées lexicales des adjectifs

Les adjectifs de base tels que àntitra « vieux », àvo « haut », et les adjectifs dérivés tels que makìkitra « déterminé », m-a-kòtroka « chaud » sont tous codés dans la base de données lexicale comme des entrées adjectives sans distinction.

Nous rendons compte des différentes composantes de cette ressource : les entrées lexicales et les graphes d'affixation, et nous mentionnons les principaux morphèmes flexionnels et dérivationnels des entrées adjectivales.

## 5.1 Entrées lexicales

Notre ressource contient environ 2 000 lemmes adjectifs (Fig. 3). Les entrées et les codes morphologiques sont séparés par une virgule. La lettre "A" est le code morphologique des adjectifs. Le code entre parenthèses indique le graphe d'allomorphie applicable à l'entrée, et le nom "ad1" indique le graphe d'affixation pour les mots qui prennent l'alternance morphologique m-:n-:h-, comme dans malàdy "est prompt à entendre" : nalády "était prompt à entendre" : halády "sera prompt à entendre".

p06-01.png

Figure 3 : Ressource des entrées adjectivales.

## 5.2 Graphes d'affixation

Les graphes d'affixation spécifient quelles combinaisons de morphèmes grammaticaux et lexicaux constituent les formes fléchies des adjectifs. Dans l'état actuel de la base de données lexicale, les graphes d'affixation prennent en compte les préfixes de temps m-:n-:h-, mais pas encore les affixes de l'impératif.

Prenons par exemple les lemmes m-arènina "sourd" et makàka "spacieux". Le m- au début est le préfixe du temps présent, donc les radicaux sont arènina, akàka, qui sont générés par le graphe d'allomorphie identifié dans leurs entrées. Le graphe d'affixation « ad1 » (Fig. 4) spécifie que ce radical prend les trois préfixes de temps.

p06-02.png

Figure 4 : Graphe d'affixation « ad1 ».

Dans ce graphique, la case 't1' est un appel à un sous-graphe qui représente l'alternance morphologique m-:n-:h-. La boîte <A+0+ad1> représente la variante pertinente du radical, c'est-à-dire arènina, akàka, entre autres.

Parmi les environ 2 000 entrées d'adjectifs, environ 505 commencent par m, dont environ 300 présentent l'alternance m:n:h. Les adjectifs sans l'alternance m-:n-:h-, tels que mòana « muet » (*nòana et *hòana ne sont pas en usage), forment un futur syntaxique avec ho, comme dans ho mòana « sera muet ».

## 5.3 Codes phonétiques et grammaticaux

Les codes des parties de discours utilisées dans cette partie de la base de données sont :

A pour adjectif

T pour marqueur de tension

Les codes d'inflexion sont :

r, p, f respectivement pour les temps présent, passé, futur

n pour l'humeur indicative.

## 5.4 Principaux morphèmes flexionnels des entrées adjectivales

Le tableau 3 contient les principaux morphèmes flexionnels utilisés dans cette partie de la base de données.

Tableau 3 : Principaux morphèmes flexionnels des adjectifs

p06-03.png

## 5.5 Affixes dérivationnels des adjectifs

Le tableau 4 montre différentes affixes d'adjectifs généralement considérés comme dérivationnels. Les mots contenant ces affixes ne sont pas nombreux. Dans la ressource, nous les analysons en tant que dérivés et les encodons en tant que lemmes adjectifs. Comme notre base de données ne tente pas de les lier à leurs bases (cf. Section 3), ces affixes n'ont pas d'existence formelle en tant que tels dans la base de données : la segmentation affixe/base n'est pas encodée.

Dans certains lemmes adjectivaux dénominaux en m-, le m- initial n'est pas présent dans le nom de base, comme dans màmy "doux" à partir de hàmy "douceur", màty "mort" à partir de fàty "mort", mais il ne prend pas l'alternance de temps m:n:h. Dans ces entrées, nous analysons m- comme un préfixe dérivationnel adjectivant, tout comme ceux du Tableau 4, et nous n'encodons pas la segmentation affixe/base.

Tableau 4 : Affixes dérivationnels des adjectifs

p07-01.png

## 6 Formes adjectives des noms

Dans notre base de données lexicale, les formes fléchies adjectivales des noms comme vintánina "qui a un destin", à partir de vìntana "destin", ou mazòto "diligente, industrieux", à partir de zòto "diligence", sont encodées dans un dictionnaire de noms, sous la forme de ressources qui permettent de segmenter et de générer ces formes adjectivales. Par exemple, le nom lòto « saleté, malpropreté » reçoit le préfixe flexionnel formant des adjectifs a-, et les préfixes de temps m-, n- ou h-, d'où malòto « est sale, malpropre », nalòto « était sale, malpropre », halòto « sera sale, malpropre ».

Nous rapportons dans cette section les ressources pour ces formes : les entrées lexicales et les graphes d'affixation, et nous listons les morphèmes flexionnels pertinents.

## 6.1 Entrées lexicales

La ressource contient environ 400 entrées de noms (figure 5), dont 115 ont des formes adjectives infléchies. Le code "N" est pour 'nom' et les codes entre parenthèses identifient les graphes d'allomorphie. Les graphes d'allomorphie sont ceux décrits dans la sous-section 4.2. Les codes "A6", "A2" ou "A3" sont destinés aux graphiques d'affixation. Par exemple, les noms avec le code A3, tels que lòto, reçoivent l'alternance morphologique de temps m-: n-: h- et le préfixe de formation d'adjectifs a-, d'où malòto, qui est ainsi segmenté comme m-a-lòto, où le lemme est représenté par le radical nominal lòto. Le graphe 'A3' encode cette segmentation en trois morphèmes et représente formellement a- comme un préfixe flexionnel.

p07-02.png

Figure 5 : Ressource pour les formes fléchies adjectivales des noms.

Cela contraste avec m-arènina « sourd », analysé comme m-arènina dans la Sous-section 5.2 : comme m-arènina est un lemme adjectival, il ne contient aucun préfixe flexionnel de formation d'adjectifs, et le premier a fait partie du radical. Ainsi, les graphes d'affixation pour les formes adjectivales des noms sont différents de ceux pour les entrées adjectivales.

## 6.2 Graphes d'affixation

Nous répertorions treize graphes pour les formes adjectivales des noms.

p07-03.png

Figure 6 : Graphe d'affixation 'A3'.

Le graphique 'A3' (Fig.6) décrit les combinaisons d'affixes qui composent des formes adjectives telles que m-a-dìty "gommage, résineux", m-a-sìra "salé" et leurs propres formes infléchies. La boîte 't1' représente l'alternance morphologique m-:n-:h-, la boîte '333' contient les adjectifs formés par le préfixe a- (PAdj) et la boîte <N+A3> indique à quels noms le graphe s'applique, ici dìty "gomme, résine", sìra "sel", entre autres.

## 6.3 Codes grammaticaux

Les codes supplémentaires des parties du discours utilisés dans cette partie de la base de données sont :

N pour « nom »

PAdj pour 'préfixe formant des adjectifs'

SAdj pour « suffixe formant des adjectifs ».

## 6.4 Morphèmes flexionnels des adjectifs

Environ 65 des entrées nominales que nous avons étudiées produisent des formes adjectivales qui prennent l'alternance m-:n-:h. Le tableau 5 contient les morphèmes flexionnels supplémentaires utilisés dans cette partie de la base de données.

Tableau 5 : Morphèmes flexionnels des adjectifs

p08-01.png

Le préfixe adjectivisant d'inflection m- se rencontre dans des mots comme màizina "sombre" à partir de àizina "obscurité", m-ànitra "parfumé" à partir de hànitra "parfum" : dans ces formes, il ne joue pas le rôle de préfixe de temps. Ils forment un avenir syntaxique avec ho.

## 7 Tests

Dans un roman de Clarisse Ratsifandrihamanana, écrivain malgache bien connu, qui compte 2 400 phrases et environ 55 600 jetons, nous reconnaissons avec notre base de données environ 380 formes uniques d'adjectifs. La représentation du résultat avec Unitex est différente pour les adjectifs de base ou dérivés et pour les formes adjectives des noms.

Deux expériences sont présentées dans cette section: la segmentation et la génération.

## 7.1 Segmentation

Dans cette expérience, la plateforme Unitex a utilisé la base de données lexicale et les graphes pour segmenter le texte. La segmentation de l'adjectif dérivé mareforèfo "un peu fragile", qui accepte l'alternation morphologique m-:n-:h-, est présentée dans la Fig. 7.

p08-02.png

Figure 7: Représentation d'un adjectif dérivé avec un marqueur de temps.

Les deux boîtes reliées par une ligne pointillée représentent 1) m-, reconnu comme un marqueur de temps (T) du présent (r), et 2) areforefo, étiqueté A+ad1+0, ce qui signifie qu'il s'agit d'un adjectif et qu'il énumère deux caractéristiques; cette forme est attachée au lemme mareforèfo.

Une forme adjective fléchie d'un nom est segmentée comme le montre la figure 8.

p08-03.png

Figure 8: Représentation d'une forme adjective d'un nom.

Dans mpianatra mazòto « étudiant travailleur », mazòto « diligent, travailleur » est une forme adjectivale fléchie de zòto « diligence ». Unitex montre le morphème de temps m- (présent), le morphème formant des adjectifs a- (Padj) et le radical nominal (N+A3).

## 7.2 Génération d'adjectifs

Unitex a un générateur de mots qui répertorie les formes fléchies adjectivales spécifiées par la base de données (Fig. 9). Chaque point-virgule commence un nouveau paquet de caractéristiques flexionnelles. Les codes de temps :r, :p et :f sont mutuellement exclusifs car un mot ne peut pas être dans la même interprétation à deux temps grammaticaux différents, mais l'autre code n qualifie la même interprétation que le temps qui les précède. Ainsi, A+A8+na:rn:pn signifie que le bikna « bien formé » peut être dans le présent ou dans le passé, mais dans les deux cas, c'est dans l'indicatif.

p09-01.png

Figure 9 : Génération d'adjectifs

## 8 Conclusion

Nous avons décrit une base de données lexicale des adjectifs malgaches en cours de construction. Le contenu de la ressource est basé sur une analyse linguistique, en tenant compte des garanties méthodologiques pertinentes. Nous faisons une distinction entre les adjectifs au sens habituel et les formes adjectivales de noms. La base de données peut être utilisée par des logiciels de traitement du langage. La ressource permet l'analyse morphologique et la génération d'adjectifs. Il ne se limite pas aux formes adjectivales se produisant dans un corpus de textes, mais tient compte de notre compétence en tant que locuteur natif et de la tradition grammaticale.

Cette recherche a plusieurs applications potentielles. Ses résultats peuvent être utilisés dans les manuels de grammaire pour décrire la flexion des adjectifs malgaches. Les linguistes peuvent les utiliser pour lancer des requêtes pour des configurations grammaticales contenant des adjectifs, par exemple des phrases substantives. Enfin, les bases lexicales éliminent les obstacles à la construction d'applications informatiques pour le traitement des langues.

## Remerciements

Nous adressons nos remerciements particuliers aux examinateurs pour leurs commentaires pertinents et leurs suggestions pour la clarté de notre document.

## Références

Andriamise, L, Ranaivoson, JF, Rakotoalison, SF 2011, "Les locutions support en malgache. Le cas de misy azy, " Lexis and Grammar, University of Cyprus, pp. 21-28.

Berlocher, I, Huh, HG, Laporte, E, Nam, JS 2006, "Morphological annotation of Korean with directly maintainable resources" , Proceedings of the Fifth International Conference on Language Resources and Evaluation (LREC'06), Genoa (Italy).

Catz, I & Catz, S 2017, Standard Malagasy Grammar & List of 410+ Common Verb Conjugation, edited by Kimmerling Razafindrina, Fetra Marc Humbert Rahajason and Vololona Fenohaja.

Crystal, D 2008, A dictionary of linguistics and phonetics, UK, Blackwell.

Dalrymple, M, Liakata, M & Mackie, L 2005, "A Two-level Morphology of Malagasy " , Proceedings of the 19th Pacific Asia Conference on Language, Information and Computation, pages 83-94, Taipei, Taiwan, R.O.C, Institute of Linguistics, Academia Sinica.

Elia, A 1978 "Pour un lexique-grammaire de la langue italienne : les complétives objet" , Lingvisticae Investigationes 2 ( 2), pp. 233-276.

Gross, M 1989, "La construction de dictionnaires électroniques" , Annales des Télécommunications, vol. 44 (1-2), pp. 4-19.

Hamitramalala, R 2017, Vers une typologie des collocations à verbe support en malgache, PhD, Université de Montréal.

Jaozandry, M 2014, Les prédicats nominaux du Malgache. Étude comparative avec le français, PhD, Université Paris-Nord.

Keenan, E & Polinski, M 1998, "Malagasy (Austronesian)" , The handbook of Morphology, ed. Andrew Spencer and Arnold M. Zwicky, New Jersey, John Wiley & Sons.

Kennedy, Ch & McNally, L 1999, "From Event Structure to Scale Structure : Degree Modification in Deverbal Adjectives" , Tanya Matthews and Devon Strolovitch (eds), 9th Semantics and Linguistic Theory Conference, pp. 163-180.

Koskenniemi, K 1983, Two-level Morphology: A General Computational Model for Word-Form Recognition and Production. PhD, University of Helsinki.

Laporte, E 1991, "Separating Entries in Electronic Dictionaries of French" , Sprache - Kommunikation - Informatik. Akten des 26. Linguistischen Kolloquiums, Poznan 1991, J. Darski and Z. Vetulani eds., Tübingen: Max Niemeyer, pp.173-179.

Malzac, RP 1950, Grammaire malgache, Paris, Société d'éditions géographiques, maritimes et coloniales.

Neme, A & Paumier, S 2019, "Restoring Arabic vowels through omission-tolerant dictionary lookup" , Language Resources and Evaluation 54, pp. 487-551.

Paumier, S 2003, Unitex manual, University of Marne-la-Vallée, Paris.

Rajaona, S 1972, Structure du malgache¸Fianarantsoa, Ambozontany.

Rajaonarimanana, N 1995, Grammaire moderne de la langue malgache, Paris, L'Asiathèque.

Rajemisa-Raolison, R 1969, Grammaire malgache, Fianarantsoa, Ambozontany.

Ralalaoherivony, BS 1995, Lexique-grammaire du malgache. Constructions adjectivales, Thèse de doctorat, Université Paris 7.

Ranaivoarison, J, Laporte, E & Ralalaoherivony, BS 2013, "Formalization of Malagasy conjugation" , Language and Technology Conference, Poznań (Poland).

Ranaivoson, JF 1996, La nominalisation en malgache. Étude des formes manao N, PhD, Université d'Antananarivo.

Richardson, J 1885, A new Malagasy-English Dictionary, Antananarivo, The London Missionary Society.

TEI Consortium, eds. (2022) TEI P5: Guidelines for Electronic Text Encoding and Interchange. 4.4.
