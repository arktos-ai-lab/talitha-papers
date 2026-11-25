> Machine translation (fr) of "Endangered African Languages Featured in a Digital Collection: The Case of the ǂKhomani San, Hugh Brody Collection" by Kerry Jones, Sanjin Muftic, https://aclanthology.org/2020.rail-1.1/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Langues africaines en danger présentées dans une collection numérique : le cas des ǂKhomani San | Collection Hugh Brody

Kerry Jones, Sanjin Muftic

**Affiliations**  
Kerry Jones, Sanjin Muftic  
Director, African Tongue, Linguistics Consultancy, Cape Town, South Africa  
Postdoctoral Research Fellow, English Language and Linguistics, Rhodes University, Makhanda, South Africa  
Research Associate, Department of General Linguistics, Stellenbosch University, Stellenbosch, South Africa;  
Digital Scholarship Specialist, Digital Library Services, University of Cape Town, South Africa  
, 

## Résumé

La collection ǂKhomani San | Hugh Brody présente les voix et l’histoire des descendants de chasseurs-cueilleurs autochtones dans trois langues en voie de disparition, à savoir N|uu, Kora et Khoekhoe, ainsi que dans un dialecte régional de l’afrikaans. Une grande partie de cette collection est constituée d'enregistrements audiovisuels (médias patrimoniaux) d'entretiens réalisés avec des membres de la communauté par Hugh Brody et ses collègues entre 1997 et 2012, remontant jusqu'aux années 1800. L'équipe Digital Library Services de l'Université de Cape Town vise à présenter numériquement la collection sur la plateforme de collections numériques de l'UCT, Ibali, qui fonctionne sur Omeka-S. Dans cet article, nous mettons en avant l'importance d'une telle collection dans le contexte de l'Afrique du Sud, ainsi que les étapes éthiques qui ont été prises pour assurer le respect des ǂKhomani San alors que leurs histoires sont mises en ligne sur un dépôt et deviennent accessibles à tous. Nous présenterons également une partie de la collection terminée sur Ibali et guiderons le lecteur à travers l'organisation de la collection sur le backend d'Omeka-S. Enfin, nous détaillerons notre processus de développement, de la numérisation à la publication dans le dépôt, ainsi que certaines des difficultés rencontrées dans le nettoyage des données, la curation des médias patrimoniaux, le support multilingue et l'organisation du site.

## Mots-clés

langues africaines en voie de disparition, N|uu, Kora, Khoekhoe, conservation numérique, mise en valeur en ligne, savoir patrimonial, éthique des dépôts

## 1. Introduction

La mise en danger et la perte de la langue sont un phénomène mondial et le contexte africain ne fait pas exception à cette perte de diversité linguistique. Par conséquent, la course pour identifier, documenter et préserver les langues indigènes à l'aide de la technologie numérique a pris de l'ampleur. Malgré de vastes recherches dans le domaine de la vitalité linguistique, « on sait relativement peu de choses sur les langues en voie de disparition d'Afrique » (Kandybowicz & Torrence, 2017). En Afrique australe, l'identification et la documentation des langues en voie de disparition en collaboration avec les communautés autochtones n'ont commencé que très récemment. Les enregistrements de ces efforts sont dispersés dans divers endroits à travers le monde. Dans le cas de la collection ǂKhomani San | Hugh Brody, l'Afrique du Sud a la chance d'avoir pu récupérer cette précieuse collection. À son retour, nous avons été confrontés au défi de rendre le contenu de la collection librement disponible et non réservé à quelques privilégiés.

La solution potentielle à ce problème consistait à héberger la collection sur une plateforme numérique. Les Services de bibliothèque numérique (DLS) de l’Université du Cap (UCT) ont suggéré l’utilisation de leur plateforme de collections numériques, Ibali, qui fonctionne sur Omeka-S et pourrait accueillir le libre accès. Le processus de curation numérique nécessitait un certain nombre d'étapes différentes, allant de la mise en place d'un flux de travail à l'organisation des données de la collection au sein de schémas particuliers. Une fois les données organisées dans les schémas prédéterminés, les données pouvaient alors être hébergées sur la plateforme de manière structurée. Dans cet article, nous discutons des différentes phases du développement de collections, en nous concentrant particulièrement sur les processus mis en œuvre pour publier la collection via un dépôt institutionnel. Tout au long de ces processus, nous avons rencontré de nombreuses questions, défis, débats et solutions potentielles autour de la meilleure façon de gérer numériquement cette collection de manière éthique et conviviale. Cette collection sert d'exemple important de la représentation des connaissances autochtones via une plateforme numérique. De plus, elle décrit une méthodologie pour décoloniser l'archive tout en maintenant les normes internationales.

En organisant une production accessible aux locuteurs de langues en voie de disparition, au public sud-africain et aux universitaires, nous avons créé un environnement en ligne plus inclusif pour comprendre notre contexte sud-africain historique et contemporain. Il faut cependant noter que le manque d'accès à une connexion internet fiable et à l'électricité empêche de nombreux Sud-Africains d'accéder facilement au contenu en ligne. Les ménages sud-africains ayant le moins accès aux médias de communication se trouvent dans le Cap-Nord (10,3 %), qui est également la province où vivent la majorité des locuteurs de N|uu, de Kora et de Khoekhoe (Statistics South Africa, 2018, 36). De tels défis sont surmontés grâce à l'accès aux ressources via les bibliothèques et centres informatiques financés par l'État et le secteur privé.

## 2. Considérations éthiques et collaboration communautaire

Le choix d'abriter et de gérer la collection en Afrique du Sud était une décision éthique prise par Hugh Brody en collaboration avec Open Channels, une organisation caritative basée au Royaume-Uni, la communauté ǂKhomani San et le South African San Institute (SASI), une organisation non gouvernementale locale. En hébergeant physiquement la collection localement, cela rend son contenu plus accessible aux Sud-Africains par opposition à l'hébergement de la collection dans une institution étrangère. Les voyages internationaux sont financièrement hors de portée de la majorité de la population sud-africaine, en particulier des groupes minoritaires tels que les descendants des ǂKhomani San. La collaboration entre toutes les parties intéressées et l'UCT a été exprimée dans un accord de don décrivant le contenu de la collection. Dans le cadre de cet accord, UCT s'est engagé à traiter, cataloguer et assurer que la collection était librement accessible. Cette collaboration et cet accord contractuel sont devenus le tremplin de futures collaborations et de travaux à venir.

## 3. Contexte linguistique des langues mises en avant en Afrique du Sud

En Afrique australe, il existe trois familles de langues qui étaient auparavant regroupées et connues sous le nom de langues Khoesan (Heine & Honken, 2010). Aujourd'hui, les langues Khoesan sont plus précisément décrites comme les langues Ju, Khoe et Tuu, ce qui est conforme à la méthode comparative en linguistique (Güldemann, 2008, 123). Ces trois familles linguistiques sont en danger et sont associées aux chasseurs-cueilleurs traditionnels et aux pasteurs, également connus sous le nom de San et Khoe respectivement. Au moment de leur première documentation, il y avait environ 35 langues connues de la science parmi les familles de langues Ju, Khoe et Tuu (Voβen, 2013). Depuis lors, plusieurs de ces langues ont disparu, avec seulement 13 langues restantes, dont 6 sont parlées en Afrique du Sud (Jones, 2019).

Les langues Ju, Khoe et Tuu ainsi que leurs sons cliquants sont une caractéristique emblématique du patrimoine linguistique et culturel de l'Afrique australe. Pourtant, les efforts déployés dans la recherche, le développement et la préservation du patrimoine Khoe et San sont souvent insuffisants lorsqu’il s’agit d’une collaboration communautaire significative et de l’accessibilité au contenu produit. La responsabilité et l'accessibilité aux recherches historiques et contemporaines concernant les peuples Khoe et San sont primordiales pour l'équité et la démocratisation de la diffusion des connaissances en Afrique australe. Les peuples Khoe et San ont une histoire documentée marquée par des conflits, des spoliations, ainsi que des pertes d'identité et de langue, ce qui a abouti au contexte actuel de groupes minoritaires marginalisés dispersés à travers l'Afrique australe.

La collection ǂKhomani San | Hugh Brody documente les histoires du peuple ǂKhomani au cours des 100 dernières années, avec des récits détaillés du génocide linguistique et culturel. Par un processus d'audit culturel mené par Nigel Crawhall en collaboration avec l'Organisation des Nations Unies pour l'éducation, la science et la culture (UNESCO) et le SASI (Crawhall, 2001), 24 locuteurs restants de N|uu se sont fait connaître. N|uu était auparavant considéré comme éteint et appartient au groupe Tuu ou plus spécifiquement au ! Famille des langues Ui-Taa, notre plus fragile des trois familles. Aujourd'hui, il ne reste que trois locuteurs de langue maternelle N|uu et cette langue est donc classée comme une langue en voie de disparition sévère.

Lors de discussions plus approfondies avec des membres de la communauté des ǂKhomani San, il a été révélé que certains pouvaient parler le kora, également connu sous le nom de! Ora comme langue seconde. Des enregistrements et des transcriptions de ces exemples se trouvent dans la collection ǂKhomani San | Hugh Brody. Aujourd’hui, Kora est considéré comme moribond (du Plessis, 2018). Il était également évident que les locuteurs de N|uu avaient subi des changements linguistiques vers l'afrikaans et le Khoekhoe. L'afrikaans est la langue historiquement dominante pendant l'ère de l'apartheid en Afrique du Sud et en Namibie. Alors que le Khoekhoe, également connu sous le nom de Khoekhoegowab, est la lingua franca du Kalahari avec environ seulement 2000 locuteurs restants en Afrique du Sud (Witzlack-Makarevich, 2006, 12).

L'utilisation des données de la ǂKhomani San | Hugh Brody Collection a été déterminante dans plusieurs revendications foncières réussies dans le Northern Cape, en Afrique du Sud. Il s'agit donc non seulement d'un témoignage historique et linguistique de l'histoire sud-africaine, mais aussi d'une collection unique de preuves qui a abouti à une restitution pour les ǂKhomani San.

## 4. Échantillons de la collection

Ce qui rend unique la collection ǂKhomani San | Hugh Brody, c'est qu'elle est basée dans le sud de l'Afrique et a été activement créée avec les membres de la communauté ǂKhomani San et les chercheurs non seulement pendant la création des données, mais aussi pendant leur traitement. La collection ǂKhomani San | Hugh Brody se compose principalement d'enregistrements audio-visuels (médias patrimoniaux) d'entretiens réalisés avec des membres de la communauté par Hugh Brody et son équipe entre 1997 et 2012. Le projet initial a été motivé par le sort de la communauté qui avait été dépossédée de ses terres ancestrales. Grâce à la cartographie généalogique et à des entretiens détaillés, l'équipe a pu soutenir une revendication foncière réussie au nom de la communauté en 1999, lorsque le président Mbeki s'est personnellement rendu sur place pour rendre les terres à leurs propriétaires légitimes. D'autres revendications foncières réussies dans la région ont suivi. Le travail sur le terrain s'est poursuivi jusqu'en 2012, après quoi la collection a été déposée en fiducie à UCT à Special Collections, UCT Libraries en 2013 (plan de projet BVF-41). La collection se compose de divers types de données telles que des transcriptions, des vidéos, des clips audio, des cartes et des images. Ci-dessous, vous trouverez quelques exemples de fichiers de transcriptions, de photographies et de cartes qui illustrent ce processus de production de données hautement collaboratif.

## 4.1 Fichiers de transcription

Les fichiers de transcription de la collection sont basés sur plus de 128 heures de séquences de films dont plus de 30 heures comprennent des discours qui ont été transcrits à ce jour. Les transcriptions sont littérales, et codées par couleur en N|uu (vert), Kora (orange), Khoekhoe (rouge) ou Afrikaans (bleu) et traduites en anglais (noir), y compris les notations de timing. Les fichiers de transcription sont codés en couleur pour aider le lecteur à identifier facilement les différentes langues transcrites et traduites dans chaque fichier de transcription. Le processus de création des fichiers de transcription a été très collaboratif, y compris des linguistes spécialisés dans chacune des langues de la collection et une vérification pratique avec des locuteurs de langue maternelle tout au long du processus de transcription et de traduction. Le défi de travailler avec une orthographe nouvellement développée pour le N|uu dans le domaine de la linguistique a abouti au développement d'un dictionnaire multilingue présentant le N|uu avec des traductions accompagnantes en Afrikaans, Khoekhoe et anglais pour plus de 1400 entrées lexicales (Sands et al., 2006).

Le tableau 1 est un exemple du transcript 1998_01-01 tel que prononcé par Katriena |Una Kassie Rooi où elle mélange l'afrikaans et le N|uu lorsqu'elle explique qui elle est et d'où elle vient. Aux fins d'une publication en noir et blanc, l'afrikaans dans la colonne de transcription est en caractères romains et le N|uu en italique.

p03-01.png

Tableau 1 : Extrait du fichier de transcription 1998_01-01 en Afrikaans et N|uu traduit en anglais

Le tableau 2 est un exemple extrait de la transcription 2001_01-04, tel que parlé par Anna Swarts alors qu'elle raconte une histoire traditionnelle en khoekhoe sur le chacal et la hyène. Elle raconte une époque avant qu'il n'y ait de l'ordre dans l'univers et que les animaux soient des humains.

p03-02.png

p03-03.png

Tableau 2 : Extrait du fichier de transcription 2001_01-04, folklore traditionnel raconté en khoekhoe et traduit en anglais

## 4.2 Photographies

Les photographies de la collection vont du début des années 1900 à 1999. Ceux du début du 20e siècle ont été sélectionnés par les chercheurs dans les années 1990 dans les archives de l'UCT, copiés et emportés dans le sud du Kalahari. Lors de l'interview des membres de la communauté, les chercheurs montraient les anciennes photographies de l'UCT et expliquaient qu'ils essayaient d'en apprendre davantage sur les habitants d'origine de la région. Au cours de ce processus, Elsie Vaalbooi a reconnu une photo d'elle-même (Figure 1) et une autre de sa mère (Figure 2) prise vers 1911. C'était la première fois qu'elle voyait ces photographies depuis qu'elles avaient été prises. Elsie était l'une des dernières locutrices du N|uu et aujourd'hui, son fils, Petrus Vaalbooi (Figure 3), est le chef traditionnel des ǂKhomani San.

La collection de photographies englobe de nombreux thèmes tels que : les portraits individuels et familiaux ; la faune et la flore indigènes utilisées par les ǂKhomani San ; les lieux culturellement ou historiquement importants ; les travaux linguistiques (comme on peut le voir sur la Figure 4) ; et les preuves physiques d'occupation dans le parc transfrontalier du Kalahari par les ǂKhomani San avant leur expulsion.

p03-04.png

Figure 1 & 2: Photographie d’Elsie Vaalbooi (debout) et de sa mère Marie ||Qoesi (assise) vers 1911.

p03-05.png

p04-01.png

Figure 3 : Photographie d’Elsie Vaalbooi et de son fils Petrus Vaalbooi prise peu avant la mort d’Elsie en 1997.

p04-02.png

Figure 4: Le linguiste Nigel Crawhall (lunettes de soleil autour du cou), travaillant avec Dawid Kruiper (main pointant sur la page) et sa famille sur des listes de mots trilingues

## 4.3 Cartes

Plusieurs cartes détaillées ont été créées en collaboration avec les membres de la communauté, les linguistes et les cartographes pour représenter visuellement la généalogie des ǂKhomani San et les déplacements des différents membres de la famille au fil du temps. Les données SIG collectées ont fourni les entrées nécessaires pour produire des cartes précises représentant les noms de lieux en Khoekhoe, en Afrikaans et en anglais, comme le montre la Figure 5. La variété de l’afrikaans parlée par les membres de la communauté ǂKhomani San est unique à la région et a permis de mieux comprendre les noms de lieux originaux du sud du Kalahari.

p04-03.png

Figure 5 : Carte des noms traditionnels de lieux en khoekhoe, afrikaans et anglais à l'intérieur et autour du parc transfrontalier Kgalagadi

## 5. Organisation de la collection sur le backend Omeka-S

La collection a traversé plusieurs phases de développement, y compris l'ajout en cours de transcriptions détaillées des médias historiques par la société de linguistique spécialisée African Tongue (Directrice, Kerry Jones). Certains éléments de la collection ont été publiés précédemment en ligne via un site web Islandora (Fedora Commons) qui fournissait une description archivistique de base des médias sélectionnés. Toutefois, le site Web ne permettait pas de naviguer dans la collection au-delà de ces descriptions et devait donc être révisé. Par conséquent, la décision a été prise de publier la collection via le dépôt de collection institutionnel de l'UCT, Ibali, alimenté par Omeka-S.

L'outil d'exposition en ligne Omeka-S, en conjonction avec le serveur IIIF, est largement utilisé à l'international par les bibliothèques universitaires, ainsi que par la majorité du secteur des Galleries, Libraries, Archives, and Museums (GLAM). Omeka-S permet une organisation et une exposition des matériaux numériques guidées par les normes. Contrairement à la plupart des autres applications Web, ce n'est pas seulement un front-end pour rendre le contenu attrayant. Il est également soutenu par des processus de back-end pilotés par des métadonnées archivistiques, permettant la réutilisation des matériaux via de nombreuses autres plateformes de découverte (Omeka-S Proposal Project Plan). Par conséquent, il s'agit d'un dépôt et non d'un site Web, car le backend des dépôts permet la création de métadonnées et la création de schémas robustes qui capturent des métadonnées cohérentes pour chacun des éléments téléchargés.

## 5.1 Curation des données : de la numérisation à la publication dans un dépôt

Étant donné que le matériel de la collection a plus de 20 ans et que l'UCT a connu une phase de changements dans le personnel chargé du processus de numérisation, ainsi que des changements dans les technologies utilisées pour la numérisation, une réévaluation du contexte global était nécessaire. Tout type de flux de travail qui conduirait à un dépôt publié nécessite donc une consolidation, ou une période de conservation du contenu de la collection en fonction des nouvelles avancées technologiques.

Les médias traditionnels sont divisés entre les bandes utilisant les formats Digital Video (DV) et DVCAM (la version de Sony du Digital Video), dont un sous-ensemble a subi le processus de transcription (la collection complète comprend également des bandes audio ainsi que des VHS). Auparavant, il y avait aussi un processus de numérisation qui a conduit à la capture de dérivés de ces bandes sur des disques optiques et durs. Tout le matériel médiatique existant sur les différentes formes de stockage devait être réconcilié, organisé et catalogué. Il devait également être analysé, en identifiant et organisant le contenu qui mènerait à l'objectif central du dépôt - préserver les histoires et les langues des ǂKhomani San.

En tenant cela à l'esprit, la composante de curation du processus de numérisation impliquait non seulement l'examen des médias d'un point de vue archivistique, mais aussi d'une perspective plus conceptuelle en termes de ce qui allait être présenté et pour qui. Comment les visiteurs du site allaient-ils interagir avec les différents médias? Qui seraient les visiteurs et que rechercheraient-ils ? Les visiteurs seront-ils des membres de la communauté ǂKhomani San, et si oui, comment le dépôt pourrait-il être organisé pour le rendre accessible à leur navigation. En tenant compte de ces exigences, ainsi que de l'organisation des données multimédias, une étape supplémentaire a été franchie pour organiser le contenu des données. Par exemple, le développement de tableaux pour capturer des informations telles que : les noms complets des membres de la communauté ǂKhomani San, les noms de lieux et leurs données GIS associées, les cérémonies culturelles spécifiquement mentionnées, et les plantes indigènes pour leurs propriétés comestibles ou médicinales. Toutes ces variables devaient être identifiées et décrites afin d’organiser les médias sur un site Web et de permettre de multiples points d’exploration de la collection. Cette organisation des données a conduit au regroupement de thèmes distincts au sein de la collection:

PeopleCommunity

p05-patch01.png

Et au sein de chaque thème, les métadonnées utilisées pour le décrire seraient uniques. Par exemple :

PeopleCommunity

p05-patch02.png

## 5.2 Défis liés au nettoyage des données

Le point de départ pour la création de données liées reposait sur les 200+ transcriptions qui avaient été développées jusqu'alors (couvrant seulement une fraction de l'ensemble de l'archive audiovisuelle). Les transcriptions suivaient une disposition similaire dans un document Microsoft Word, et incluaient une cellule utilisée pour identifier les mots-clés liés aux médias (bande vidéo). Les mots-clés pouvaient se rapporter aux individus sur la vidéo, à d'autres personnes, à des cérémonies culturelles, à des lieux, etc.

La première étape consistait à extraire la cellule mots-clés de chacun des 200 documents et à les placer dans un tableau structuré. Ce tableau de mots-clés a fourni des métadonnées pour la création d'enregistrements dans le référentiel. De cette façon, lorsqu'un extrait multimédia, c'est-à-dire 1998-05_12, était téléchargé, il était possible de l'« étiqueter » avec les mots-clés appropriés qui avaient été identifiés dans la transcription. Avoir ces mots-clés comme tags permettrait l'exploration de la collection.

Le processus d'extraction automatique des mots-clés à partir des 200 documents a été rendu possible grâce à l'utilisation du langage de programmation Python qui possède des bibliothèques intégrées pour accéder aux composants d'un document Word. Le code a créé une table avec une colonne pour le "nom du clip" et une autre colonne pour les "mots-clés". Avec certains outils de données via le langage de programmation R, il était possible de recadrer les données dans le format tel que le tableau 3. Dans ce cas, chaque mot-clé unique est dans une nouvelle ligne et les colonnes à côté, liste les noms des clips où ces mots-clés sont trouvés.

Cependant, avec plusieurs personnes travaillant sur cette collection au fil des ans tout au long de plusieurs phases du projet pour découvrir les données, les mots clés sont devenus inévitablement incohérents. Bien que les mots-clés aient été saisis pour chaque bande, ils ont été établis par un certain nombre de personnes différentes sans la construction d'un vocabulaire contrôlé nécessaire. Par conséquent, de multiples variations orthographiques sont apparues, ainsi que de plus en plus de langues et leurs traductions associées, ce qui a conduit à ce qu'un concept singulier soit saisi de nombreuses manières différentes (voir Tableau 3 - bat-earred fox). Pour tout type de machine ou de programme informatique, chacune de ces différentes orthographes est un concept différent. Un site Web construit sur une telle liste de mots-clés ne serait pas en mesure de fournir des chemins vers des personnes, des lieux ou des concepts distincts.

Le défi consistait alors à consolider ces différentes orthographes en une seule entrée, afin que lorsque chacune des séquences était téléchargée sur le site de l'exposition, elles pointent vers une liste unique de concepts ou d'entrées. Cela a nécessité l'utilisation d'un outil numérique appelé OpenRefine, qui se spécialise dans le nettoyage des données "désordonnées". Dans l'exemple du Tableau 3 ci-dessous, OpenRefine a pu identifier que les cinq orthographes différentes de « bat-eared fox » font toutes référence à la même chose et consolider les entrées en combinant les colonnes avec les bandes référencées en un seul élément de ligne. Cela permettrait d'associer le mot-clé "bat-eared fox" à des éléments multimédias distincts, permettant à l'utilisateur de parcourir toutes les séquences qui le mentionnent.

p06-01.png

Tableau 3 : Exemple de nettoyage des données à l'aide d'OpenRefine pour identifier et regrouper les entrées similaires en vue de leur consolidation

Ce processus de nettoyage des données par rapport aux mots-clés trouvés dans les fichiers de transcription s'est déplacé vers l'établissement d'un vocabulaire contrôlé qui pourrait être utilisé à l'avenir à mesure que d'autres transcriptions sont ajoutées. Ce processus contrôlé garantit la construction continue de la collection en se connectant au jeu de données existant et en formant des liens immédiats. En d'autres termes, lorsqu'une nouvelle bande est ajoutée, le mot-clé faisant référence à un certain individu de cette bande, par exemple "|Una", serait lié au vocabulaire existant et relierait donc le nouveau clip multimédia et son fichier de transcription associé, aux données existantes contenant la même entrée.

## 5.3 Soutien multilingue

Il était impératif de capturer la fluidité multilingue et culturelle de la communauté dans le dépôt. Cela offre l'option de lier des objets de données et est crucial pour la création de la collection numérique et pour les objectifs du projet. Les capacités de données liées d'Omeka-S permettent de cartographier des concepts singuliers vers différentes versions ou expressions, permettant un support multilingue. Par exemple, une recherche d'un mot (par exemple un nom de lieu) dans l'une des langues de la collection renverrait au même concept, objet ou personne auquel il se réfère, indépendamment de la langue utilisée dans la recherche.

## 5.4 Navigation sur le site Web

En ce qui concerne l'organisation des médias et du contenu sur le site Web des collections, le site nécessitait un certain nombre de points d'entrée différents. Omeka-S se prête à des présentations multiples, en raison, en grande partie, de la nature de la base de données de liens qui se forment au fur et à mesure que les éléments sont téléchargés. Cela signifie que des pages web complexes peuplées d'éléments divers peuvent être mises en place grâce à une simple requête, plutôt qu'à un codage fastidieux ou à un travail de conception et d'arrangement laborieux. Par exemple, en mettant en place un modèle simple et une requête pour lister tous les éléments qui font référence à un individu spécifique, le logiciel Omeka-S peut générer une page qui présente tous les différents éléments multimédias, ainsi que les métadonnées capturées, ainsi que certains textes personnalisés. Il devient donc facile de naviguer dans la collection en passant du temps sur une page dédiée à chaque membre de la communauté et en accédant aux transcriptions, photos et vidéos dans lesquelles ils sont présents. Cette façon de naviguer peut être répétée avec n'importe lequel des éléments conceptuels au sein de la collection (lieux, cérémonies culturelles, plantes, etc), grâce au vocabulaire de mots-clés établi qui permet à plusieurs expressions de se rattacher à un seul élément, c'est-à-dire une relation de plusieurs à un. Cette flexibilité permet, par exemple, d’explorer une cérémonie culturelle à partir de nombreux récits personnels différents, ou un lieu particulier à être mentionné par plus d’un orateur, ou une plante spécifique à avoir des utilisations multiples.

De plus, le site web peut également être exploré chronologiquement à travers les parcours des chercheurs qui ont constitué la collection originale, en consultant les médias dans l'ordre séquentiel. Dans une optique de méta-curation, le site dispose également de pages personnalisées qui s’appuient sur quelques éléments clés pour livrer une histoire plus pointue. Un exemple de ceci s'appuie sur les mots-clés qui avaient été extraits des feuilles de transcription, consolidés puis utilisés comme mots-clés dans le téléchargement de chacun des éléments de métadonnées. En s'appuyant sur la description du paragraphe précédent, il serait possible de permettre aux visiteurs du site web de rechercher des individus spécifiques parlant de cérémonies culturelles spécifiques, ou d'écouter et de visionner tous ceux qui parlent d'un lieu physique spécifique. Ces pages personnalisées peuvent ensuite être construites par l'équipe de la collection et s'échafauder sur de telles requêtes issues de la collection pour mettre en évidence des problèmes ou des thèmes spécifiques. Ces pages personnalisées peuvent continuer à être construites à mesure que plus d'individus interagissent avec la collection et expriment leurs intérêts ou préoccupations. De tels individus pourraient être des chercheurs ou des membres de la communauté ou du grand public. Ces pages personnalisées peuvent être composées de texte écrit spécifiquement pour cette page, puis placées à côté de certains éléments médiatiques, qui peuvent être liés à des personnes, des lieux, des cérémonies culturelles ou des plantes. Une culmination de pages conçues sur mesure basées sur l'engagement des utilisateurs avec le contenu de la collection aboutit à une ressource unique et évolutive en continu.

## 6. L'importance de la collaboration

Des chercheurs issus de divers domaines ont été essentiels pour rassembler toutes les données pertinentes nécessaires à une revendication foncière réussie grâce à un audit du patrimoine culturel. De tels domaines comprenaient : l'anthropologie visuelle, le droit, la linguistique, la cartographie, la conservation et le développement social (comme l'illustre la Figure 6). Une telle entreprise n'aurait pas été possible sans la collaboration des membres de la communauté ǂKhomani San, des chercheurs issus de divers domaines, des organisations caritatives, des ONG et des universités. Une telle unité dans la diversité des expertises témoigne d'une méthodologie potentiellement nouvelle qui embrasse une éthique décoloniale pour l'une des narratives les plus uniques d'Afrique du Sud.

p07-01.png

Figure 6: Le cartographe Bill Kemp, travaillant aux côtés du linguiste Levi Namaseb et de l’ancien chef des ǂKhomani San, Dawid Kruiper, pour créer des cartes détaillées des lieux importants en khoekhoe, afrikaans et anglais

## 7. Synthèse

Ce document met en lumière le contexte social, historique et linguistique de la collection ǂKhomani San | Hugh Brody, avec un accent particulier sur le processus de numérisation appliqué par les services de la bibliothèque numérique de l'Université de Cape Town pour fournir un produit final accessible.

Jusqu'à ce que l'URL finale soit disponible, veuillez contacter Michal Singer, Special Collections, UCT Libraries,  pour les détails d'accès actuels à la collection ou à l'un des auteurs de cet article.

## 8. Remerciements

Cette collection numérique a été rendue possible grâce aux contributions de la communauté ǂKhomani San, Hugh Brody, Open Channels, l'Institut sud-africain des San, African Tongue, l'Université Fraser et les bibliothèques de l'Université de Cape Town.

## 9. Références bibliographiques

Adamo, J. (2011). Omeka and the NLM Digital Repository: A New way of Creating HMD-Curated Websites. National Library of Medicine. (Online) Available: https://www.nlm.nih.gov/about/training/associate/associate_projects/AdamoOmekaReport2011.pdf

Crawhall, N. (2001). Written in the Sand: Auditing and managing cultural resources with displaced indigenous peoples: A South African case study. Mowbray: SASI.

Gruber, E. Building Omeka Exhibits with Fedora Repository Content. Published December 15, 2010. (Online) Available: https://scholarslab.lib.virginia.edu/blog/building-omeka-exhibits-with-fedora-repository-content/

Güldemann, T. (2008). Greenberg's "case" for Khoisan: the morphological evidence. In D. Ibriszimow (Ed.), Sprache und Geschichte in Afrika, 19 (pp. 123-153). Köln: Rüdiger Köppe

Hardesty, J.L. (2014). Exhibiting library collections online: Omeka in context. (Online) Available: https://scholarworks.iu.edu/dspace/bitstream/handle/2022/17627/HardestyJulietL_ExhibitingLibraryCollectionsOnlineOmekaInContext.pdf;sequence=1

Heine, B and Honken, H (2010). The Kx'a Family: A new Khoisan genealogy. Journal of Asian and African Studies, 79: 5-36.

Jing, J. (2015). Digital asset management (dam) systems used in Libraries. Queen's University Library. (Online) Available: https://www.slideshare.net/happyrainb/digital-asset-management-dam-systems-used

Jing, J. (2016). The workflows for the ingest of digital objects into a repository/digital library. (Online) Available: https://www.slideshare.net/happyrainb/the-workflows-for-the-ingest-of-digital-objects-into-a-repositorydigital-library

Jones (2019). Contemporary Khoesan languages of South Africa. Critical Arts. DOI: 10.1080/02560046.2019.1688849

Kandybowicz, J., and Torrence, H., (2017). Africa's endangered languages: Documentary and theoretical approaches. New York: Oxford University Press.

Omeka-S. (Online) Available: https://omeka.org/s/

Penn Libraries Guides: Omeka. (Online) Available: https://guides.library.upenn.edu/omeka

Sands, B., Miller, A., Burgman, J., Namaseb, L., Collins, C., Exter, M., (2006). 1400 item N|uu Dictionary. Manuscript.

Statistics South Africa (2018). General Household Survey 2018. Statistical Release, P03182018, Available at: http://www.statssa.gov.za/publications/P0318/P03182018.pdf

du Plessis, M. (2018). Kora: A lost Khoisan language of the early Cape and the Gariep. Pretoria: Unisa Press.

Voβen, R. (2013). The Khoesan Languages. Routledge Language Family Series. London: Routledge.

Witzlack-Makarevich, Al. (2006). Aspects of Information Structure in Richtersveld Nama. MA thesis, Institut für Linguistik der Universität Leipzig.
