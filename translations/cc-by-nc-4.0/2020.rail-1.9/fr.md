> Machine translation (fr) of "Building Collaboration-based Resources in Endowed African Languages: Case of NTeALan Dictionaries Platform" by Elvis Mboning, Daniel Baleba, Jean Marc Bassahak, Ornella Wandji, https://aclanthology.org/2020.rail-1.9/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Construction de ressources collaboratives pour les langues africaines dotées : cas de la plateforme NTeALan Dictionaries

Elvis Mboning, Daniel Baleba, Jean Marc Bassahak, Ornella Wandji

**Affiliations**  
Elvis MBONING1 2, Daniel BALEBA1, Jean Marc BASSAHAK1,Ornella WANDJI1  
NTeALan1, ERTIM (INALCO)2  
Tradex Makepe - Douala (Cameroon), 2 rue de Lille - Paris (France)  
  


## Résumé

Dans un contexte où les ressources et outils open-source de traitement automatique des langues en langues africaines sont rares et dispersés, il est difficile pour les chercheurs d'intégrer véritablement les langues africaines dans les algorithmes actuels d'intelligence artificielle. Créée en 2017, dans le but de construire des communautés de contributeurs bénévoles autour des langues autochtones et/ou nationales africaines, des cultures, des technologies NLP et de l’intelligence artificielle, l’association NTeALan a mis en place une série de plateformes web collaboratives destinées à permettre aux communautés susmentionnées de créer et d’administrer leurs propres ressources lexicographiques. Dans cet article, nous présentons d'une part les premières versions des trois plateformes : l'API REST pour la sauvegarde des ressources lexicographiques, la plateforme de gestion des dictionnaires et la plateforme de dictionnaire collaboratif ; d'autre part, nous décrivons le format de données choisi et utilisé pour encapsuler nos ressources. Après avoir expérimenté quelques dictionnaires et quelques retours d’utilisateurs, nous sommes convaincus que seules les approches et plateformes collaboratives peuvent répondre efficacement à la production de bonnes ressources en langues africaines natives et/ou nationales.

## Mots-clés

Langues africaines, TAL, ressources, xmlisation, collaboration, dictionnaires, lexicographie, open-source

## 1. Introduction

La langue joue un rôle important dans la définition de l'identité et de l'humanité des individus. Comme l'a dit Tunde Opeibi (Tunde, 2012) "En Afrique, les preuves montrent que la langue est devenue un facteur très fort pour l'identité ethno-nationale, avec la loyauté ethnique primant sur l'intérêt national". À ce jour, le continent africain compte plus de 2000 langues, dont plus des deux tiers sont mal dotées. Parmi les raisons justifiant cette observation, nous pouvons énumérer:

Le manque d'une politique linguistique forte en faveur de ces langues

L’absence de la majorité de ces langues dans l’espace numérique (réseaux sociaux, plateforme en ligne ou mobile, etc.) et dans le système éducatif (principalement décrit par (Tadadjeu, 2004) et (Don, 2010))

Le manque de ressources linguistiques africaines open-source (textuelles et orales), d’outils de traitement du langage naturel (NLP) et/ou de compréhension du langage naturel (NLU) disponibles pour la plupart de ces langues

Le manque d'experts en TAL, en NLU et en Intelligence Artificielle (IA) entraînés sur le continent et qui sont spécialistes de ces langues

Le manque de ressources linguistiques africaines open source (textuelles et orales) et d'outils de TAL et/ou de NLU disponibles pour la plupart de ces langues

Depuis plusieurs années maintenant, les technologies d'intelligence artificielle, y compris celles du TAL, ont grandement contribué à l'émergence économique et scientifique des langues peu dotées des pays du Nord, grâce à la disponibilité de ressources de lexicographie et de terminographie en quantité suffisante. Les langues africaines bénéficient très peu de ces outils intelligents en raison de la rareté des données structurées et des plateformes collaboratives disponibles pour la construction de bases de connaissances linguistiques et culturelles. Afin de répondre à ce besoin et de compléter les initiatives déjà présentes sur le continent ((De Pauw et al., 2009), (Mboning, 2016), (Vydrin, Valentin and Rovenchak, Andrij and Maslinsky, Kirill, 2016), (Abate et al., 2018), (Mboning, Elvis and NTeALan contributors, 2017), (Mangeot and Enguehard, 2011), (De Schryver, 2010), l'association Afrilex (Ruthven, 2005)), ainsi que celles des centres de recherche africains, européens et américains, NTeALan (New Technologies for African Languages), spécialisé dans le développement d'outils de TAL et de NLU pour l'enseignement des langues et cultures africaines, a mis en place une plateforme collaborative et open source de construction de ressources lexicales pour les langues nationales africaines. Notre objectif principal est de traiter des langues parlées dans les pays africains francophones.

Ce document se concentre sur le développement de la linguistique africaine et des ressources culturelles, ce qui est un point de départ important pour le progrès technologique de chaque langue africaine. Nous décrivons notre plateforme collaborative de ressources linguistiques axée sur les données lexicographiques. Cette plateforme est divisée en trois composants : l'API de sauvegarde de dictionnaire open-source (back-end), la plateforme de gestion de dictionnaire et la plateforme de dictionnaire collaborative (front-end).

## 2. Contexte des travaux

## 2.1. Projet NTeALan

Créée en 2017 et gérée par des universitaires et la Société Savante Africaine, NTeALan est une Association qui œuvre pour la mise en œuvre d'outils technologiques intelligents, pour le développement, la promotion et l'enseignement des langues africaines natives et/ou nationales. Nos objectifs sont de numériser, sauvegarder et promouvoir ces langues peu dotées grâce aux outils numériques et à l'Intelligence Artificielle. En faisant cela, nous aimerions encourager et aider les jeunes Africains, qui sont prêts à apprendre et/ou enseigner leurs langues maternelles, et donc construire une nouvelle génération d'Africains conscients de l'importance et des défis de l'appropriation des langues et des cultures du continent. Un autre objectif du travail de NTeALan est de fournir aux chercheurs et entreprises locaux des données qui pourraient les aider à améliorer la qualité de leurs services et travaux, d'où la construction de ressources de langues africaines open-source est l'un de nos projets principaux.

## 2.2. Approche de NTeALan : modèle fondé sur la collaboration

Notre approche repose exclusivement sur le modèle de collaboration (Holtzblatt et Beyer, 2017). Nous aimerions permettre aux Africains de contribuer au développement de leurs propres langues maternelles, sous la supervision de spécialistes et d'universitaires des langues africaines. Notre modèle implique la mise en place de plusieurs communautés : une communauté de locuteurs de ces langues, une communauté de spécialistes autochtones (garants des connaissances traditionnelles, culturelles et linguistiques), une communauté d'universitaires spécialisés dans les technologies linguistiques africaines et une communauté de partenaires sociaux, institutionnels et publics. Regroupées par langues, ces communautés travaillent ensemble avec le même objectif : construire des ressources linguistiques et culturelles utiles à la recherche, aux besoins technologiques et éducatifs.

Cette approche s'applique à tous les projets internes de NTeALan, notamment aux plateformes de ressources linguistiques, ainsi qu'à leur représentation.

## 3. Les plateformes de ressources linguistiques de NTeALan

Nos plateformes de ressources linguistiques sont divisées en trois parties : une architecture indépendante et deux architectures dépendantes. L'architecture indépendante sert non seulement les deux autres mais aussi tous les projets de NTeALan comme l'illustre la figure 1.

p02-01.png

Figure 1 : API et infrastructures de service NTeALan

Les trois architectures sont le fruit de deux processus en amont dépendant du type d'entrée (fichiers PDF ou images). Le premier processus implique la numérisation et la deuxième sérialisation:

numérisation : les dictionnaires en format papier ou numérique comme PDF, TIFF, PNG par OCR (Optical Character Recognition) sont numérisés avec Deep learning (Breuel, 2008); nous les annotons pour améliorer l’OCR (voir figure 2); les constituants de chaque article (mot en vedette, traduction, contextualisation, conjugaison, variante dialectale, etc.) sont automatiquement détectés, extraits et xmlisés au format XND (XML NTeALan Dictionary) par la suite.

sérialisation : les dictionnaires dans un format externe (toolbox, XML, TEI, LMF) sont automatiquement sérialisés au format XND, en utilisant nos outils internes de NLP.

Dans les deux cas, on commence par un dictionnaire papier ou numérique et on finit par un dictionnaire XML au format XND. Ce dernier est le format de saisie de données unique pour nos trois architectures. Il convient de noter que les deux processus décrits ci-dessus sont contrôlés uniquement par les linguistes de NTeALan. Dans les travaux futurs, ils seront ouverts aux contributeurs non membres.

p02-02.png

Figure 2 : Plateforme d'annotation des dictionnaires de NTeALan basée sur l'outil Ocropy et utilisée pour entraîner un modèle d'apprentissage profond pour l'OCR. Cette plateforme est sous licence Creative Commons BY-NC-SA 3.0 : (http://dico-edit.ntealan.net)

La figure 2 montre un exemple d'annotation (issu du dictionnaire bilingue Duala-Français) réalisé par les membres de NTeALan.

## 3.1. Architecture indépendante

La plateforme indépendante est une plateforme REST API basée sur le Web. On peut aussi l'appeler base de données de gestion des ressources lexicographiques. Conçue pour être simple et accessible, cette application web stocke et distribue toutes les ressources lexicographiques issues du travail collaboratif réalisé par les membres des communautés de NTeALan et les contributeurs externes.

L’architecture indépendante utilise nos outils NLP internes pour gérer le format de fichier XND afin de donner aux utilisateurs un accès facile à leurs contributions (voir section 4). Les opérations énumérées dans le tableau 3.1. sont autorisés en libre accès pour chaque type d'utilisateur.

p03-01.png

Tableau 1: Privilèges des utilisateurs pour chaque opération dans l'API REST de NTeALan

Cette architecture est hébergée à l'adresse https://apis.ntealan.net/ntealan/dictionaries et est accessible sous la licence Creative Commons BY-NC-SA 3.0. Les droits d'accès, pour chaque type d'utilisateur, sont décrits dans le tableau 3.1.

## 3.2 Architectures dépendantes

Les architectures dépendantes sont des plateformes web qui utilisent les données stockées dans la base de données API REST commune (plateforme indépendante), ces dernières étant enrichies par les contributeurs. Elles peuvent également effectuer les opérations décrites dans le tableau 3.1. via leur interface web.

## 3.2.1. Plateforme de gestion des dictionnaires

En tant que plateforme web, la plateforme de gestion des dictionnaires est une version de gestion graphique de la plateforme REST API. Il permet aux membres NTeALan (utilisateurs) de gérer des dictionnaires, des articles, des utilisateurs, des commentaires d'utilisateurs, des demandes d'accès et des ressources culturelles.

p03-02.png

Figure 3 : Plate-forme de gestion des dictionnaires pour la gestion des ressources lexicographiques multimodales et multilingues en langues africaines. Cette plate-forme est sous licence NTeALan : (https://ntealan.net/dictionaries-platform)

Contrairement aux deux plateformes mentionnées ci-dessus, il ne s'agit pas d'une plateforme open-source. Elle peut être utilisée strictement par les communautés de NTeALan, dans une collaboration directe entre les membres de l'équipe de linguistique et les autres membres de l'association.

## 3.2.2. Plateforme collaborative de dictionnaire

Le dictionnaire collaboratif est également une plateforme web (voir figure 4) qui enrichit les ressources lexicographiques à partir de l'API REST. Il offre aux membres des communautés NTeALan (voir section 2.2), plus précisément aux locuteurs natifs et aux experts des langues africaines, l'opportunité de construire, selon une approche collaborative, des ressources telles que des lexiques, des illustrations de phénomènes culturels, des sons et des vidéos (processus d'enregistrement) basées sur les informations sémantiques fournies par des articles rédigés dans leurs langues maternelles. Ces ressources partagées sont stockées et librement accessibles pour tous les contributeurs via notre API REST.

p03-03.png

Figure 4: Dictionnaires collaboratifs pour le partage de ressources lexicographiques multimodales et multilingues en langues africaines. Cette plate-forme est sous licence Creative Commons BY-NC-SA 3.0: (https://ntealan.net)

## 4. Ressources linguistiques et représentation de NTeALan

La plupart de nos ressources de dictionnaires sont de vieux dictionnaires bilingues (issus du travail de linguistes) trouvés sur le web en open-source ou sous licence Creative Commons BY-NC-SA 3.0. Les références aux sources originales et aux versions de NTeALan sont fournies sur toutes nos plateformes, depuis lesquelles elles peuvent également être consultées.

## 4.1. Dictionnaires de ressources de langues africaines

Nous hébergeons et partageons actuellement 7 dictionnaires bilingues sur notre API REST. Bien que le nombre d'entrées à ce jour soit encore relativement limité (de 3 à 11 500 entrées), une communauté croissante participe quotidiennement à leur remplissage. Tableau 4.1. montre les statistiques actuelles sur les ressources gérées par notre API.

p04-01.png

Tableau 2 : État de l'art des ressources linguistiques NTeALan actuellement enregistrées dans l'API REST

Même si les ressources actuelles sont insuffisantes et ne couvrent que 7 langues sub-sahariennes, nous sommes néanmoins satisfaits de l’engouement qui commence à apparaître au sein des communautés d’utilisateurs derrière nos plateformes. Cependant, nous aimerions déterminer si nos différentes infrastructures correspondent aux ressources produites, à la charge des utilisateurs connectés et aux besoins des utilisateurs. Une fois que nous aurons terminé les tests sur la plateforme, les étapes suivantes consisteront à généraliser le modèle aux autres langues africaines incluses dans nos dictionnaires.

## 4.2. Description du format XML de NTeALan

Chaque plateforme de gestion de ressources lexicales possède son propre modèle pour structurer et présenter les données (exemple de (Mangeot, 2006) et (Benoit et Turcan, 2006)). Le format XML (principalement les normes TEI et LMF XML) est aujourd'hui un choix de référence pour structurer les données linguistiques, lexicographiques et terminographiques. Cependant, il s'avère que ces normes ne sont pas souvent adaptées pour représenter et décrire les langues africaines. En effet, plusieurs phénomènes linguistiques tels que le concept de classe nominale, la gestion, la traduction et la localisation des variantes dialectales, et la notion de clics ne sont pas explicitement traités, malgré tous les besoins exprimés en la matière.

Après avoir analysé la structure d’une langue bantoue du Cameroun (Yemba, parlée en région Ouest), nous avons décidé de définir un modèle propriétaire de structuration XML, dont la structure s’inspire des 4 grandes familles de langues africaines, à savoir la famille afro-asiatique, la famille nigéro-kordofan, la famille nilo-saharienne et la famille koisan. Trois principes ont guidé notre choix : représentation, simplification et extensibilité :

représentation : ce principe vise à décrire les données linguistiques au niveau morpho-syntaxique le plus petit, c'est-à-dire les composants de mots (préfixe+radical+suffixe) et les composants de phrases comme l'accord de classe (1/2, 2/4, 5/7).

simplification : nous essayons de choisir des noms de balises XML et des langues internationales facilement compréhensibles pour les communautés de recherche. De plus, nous avons décidé d'utiliser une représentation XML linéaire, avec moins de parents et plus d'enfants dans le même nœud parent.

extensibilité : nous aimerions donner aux contributeurs externes la possibilité d'étendre notre structure XML principale en ajoutant de nouveaux nœuds (nœuds enfants ou nœuds parents), selon l'élément à représenter.

Nous concevons nos données lexicographiques de base avec un nœud racine appelé <ntealan_dictionary>, qui est divisé en deux sous-nœuds: <ntealan_paratexte> et <ntealan_articles>. <ntealan_paratexte> décrit les métadonnées relatives à la ou aux versions du document (contexte de production des dictionnaires, description source des auteurs originaux et description cible de la VERSION XML). <ntealan_articles> décrit tous les articles de dictionnaire (<article>).

Chaque article possède ses propres sous-nœuds : <entry> (variante de dialecte actuellement traitée), <category> (catégorie(s) grammaticale(s) associée(s) à la/aux variante(s) de dialecte), <translations> (traductions associées au dialecte, <examples> (contextualisation des variantes de dialecte). La figure 5 illustre cette représentation des données.

p04-02.png

Figure 5 : Représentation XML des dictionnaires NTeALan

L'extension de la structure de l'article par les contributeurs n'est possible que dans les nœuds bas, comme le montrent les figures 5, 6 et 7, ce qui signifie que le modèle d'article peut être mis à jour à chaque niveau de nœud (désigné par un id).

Notre format XND n'est pas destiné à être standardisé pour servir de référence. Au contraire, il est utilisé comme format intermédiaire, requis par nos outils internes de NLP et par des formats standardisés bien connus. En effet, une fois que les formats externes sont sérialisés en XND, nous avons la possibilité de convertir les données en d'autres formats tels que ceux des dictionnaires TEI et LMF. Ces fonctionnalités seront bientôt disponibles au niveau de l'API.

p05-01.png

Figure 6: Exemple de Xmlisation des noms article mbā extrait du dictionnaire Yemba-Français

p05-02.png

Figure 7 : Exemple d'XMLisation des verbes de l'article lebaka extraits du dictionnaire Yemba-Français.

## 5. Problèmes rencontrés et défis futurs

La mise en œuvre de ces premières plateformes nous a permis de prendre note des principaux défis. Dans les années à venir, nous nous concentrerons sur ces questions, en enrichissant nos plateformes et en essayant de les améliorer pour les échéances futures.

## 5.1. Problèmes rencontrés

Nous sommes actuellement confrontés à deux problèmes principaux avec les plateformes NTeALan :

Le premier est le faible nombre de contributeurs et les ressources informatiques insuffisantes. Le personnel ne dispose pas de tous les spécialistes nécessaires (en NLP, NLU et langues africaines) pour les objectifs visés et les grandes ambitions. Les travaux actuels sont principalement réalisés par 4 membres actifs de l'association. En ce qui concerne les ressources informatiques, nous ne disposons pas d'infrastructures informatiques robustes suffisantes (serveurs, outils sur le terrain, etc.) telles que requises par un tel travail de recherche sur les langues africaines.

le second est le manque de financement pour mener nos activités de recherche concernant le développement d'outils de TAL et de NLU. Nos financements proviennent principalement des contributions des membres de l'association, ce qui n'est pas suffisant au regard de nos ambitions actuelles.

## 5.2 Autres défis

Nos ambitions sont grandes et nécessiteront plus de personnel (spécialistes linguistiques) et de ressources financières. Nous aimerions :

Surtout, encourager le plus grand nombre de spécialistes des langues et cultures africaines des différents pays africains et du monde entier, à rejoindre notre association car ensemble nous pouvons facilement relever des défis.

Trouver des financements auprès d’institutions privées et publiques, d’hommes d’affaires, d’entreprises, qui peuvent soutenir nos travaux de recherche et le développement continu de nos applications pour l’enseignement des langues africaines peu dotées.

Enrichir et améliorer toutes les plateformes existantes et les ouvrir davantage à la communauté scientifique et aux locuteurs des langues incluses. Nous nous concentrerons d'abord sur : la plateforme autonome pour l'enseignement des langues et des cultures, l'Agent Assistant conversationnel pour l'enseignement des langues et le Musée culturel virtuel pour la sauvegarde du patrimoine socioculturel africain.

Renforcer nos partenariats avec les institutions sociales et culturelles africaines, les universités, les laboratoires de recherche et les entreprises spécialisées dans nos domaines de recherche. L'objectif est de créer des communautés d'experts en linguistique, en technologies et en questions culturelles à travers tout le continent.

De Schryver (De Schryver, 2010, p.587) s'interrogeait déjà sur les spécificités de la lexicographie électronique dans le futur en ces termes : « L'avenir de la lexicographie est numérique, cela ne fait aucun doute. Pourtant, à quoi ressemblera cet avenir numérique, c'est beaucoup moins certain. ». Ce travail montre clairement que le modèle fondé sur la collaboration, associé à des plateformes robustes de TAL, pourrait donner un sens à la nature future de la lexicographie électronique en Afrique.

## 6. Conclusion

Dans cet article, nous avons décrit les plateformes NTeALan et sa représentation de données XND, et nous avons montré à quel point une association est essentielle de nos jours, pour la construction de bonnes ressources et outils linguistiques et lexicographiques pour les langues africaines dotées. Nous menons, en interne avec nos partenaires académiques (le département des langues et littératures africaines de l’Université de Douala et l’équipe ERTIM de l’INALCO (France), de nombreuses activités de recherche en Intelligence Artificielle, NLP, et NLU, afin de contribuer à l’industrialisation des langues africaines. Il est évident qu'il reste beaucoup à faire, cependant les premiers résultats de notre étude se sont avérés très utiles pour nos applications (l'agent conversationnel NTeABot, la plateforme d'apprentissage, la plateforme de traduction, etc.) et peuvent être utilisés par d'autres chercheurs : cela inclut les données (dans différents formats courants comme XML, TEI, LMF, XND) et les outils. Nous sommes convaincus, comme l'a déjà dit Tunde Opeibi (Tunde, 2012, p.289), que "la diversité linguistique en Afrique peut encore devenir le catalyseur qui favorisera le développement culturel, socio-économique, politique et technologique, ainsi que la croissance durable et la bonne gouvernance en Afrique."

## 7. Remerciements

Ces plateformes ont été développées par Elvis Mboning (REST API et plateforme de gestion des dictionnaires), Daniel Baleba (Dictionnaires collaboratifs) et Jean-Marc Bassahak (Web Design et interfaces). Les projets de NTeALan sont en fait soutenus par le Ministère des Postes et Télécommunications du Cameroun, le Département de linguistique et de littérature africaine de l’Université de Douala (Cameroun), l’équipe de recherche ERTIM de l’INALCO et le système Fractals (France). On peut aussi citer : Professeur Jules Assoumou, Merci à Christian Bonog Bilap, Marcel Tomi Banou, Ntomb David, Ntomb Nicolas, Théophile Kengne, Yves Bertrand Dissake, Juanita Fopa, Damien Nouvel et aux autres contributeurs.

## Notes

1 Notamment par Elvis Mboning (Ingénieur de recherche en TAL à l'INALCO) et Jean Marc Bassahak (Prestataire, Web designer et développeur), qui ont ensuite été rejoints par Jules Assoumou, Chef du Département de Linguistique et de Littérature Africaine à l'Université de Douala.

2 Cela inclut les tokeniseurs, les lemmatiseurs, les analyseurs syntaxiques et les outils de désambiguïsation lexicale utilisés pour le traitement de corpus lexicographiques bruités.

3 Ce projet est né à la suite des travaux de recherche d'Elvis Mboning à l'Université de Douala et à l'Université de Lille 3 (mémoire de master) : (Mboning, 2016) et (Mboning, 2017). Nous pouvons citer d'autres travaux connexes dans ce domaine comme (Assoumou, 2010), (Mangeot et Enguehard, 2011), (Vydrin et al., 2016), (Maslinsky, 2014), (Nouvel et al., 2016), etc.

4 À cette fin, nous avons construit une autre plate-forme pour gérer les ressources lexicographiques: [https://ntealan.net/dictionaries-platform].

5 Bien que les premières versions soient bilingues, ces dictionnaires sont destinés à être multilingues, la priorité étant donnée à la traduction dans toutes les langues étrangères parlées en Afrique.

6 Notez qu'il est néanmoins possible dans ces standards d'ajouter de nouveaux formalismes (balises et attributs) en plus des classes existantes.

## 8. Références bibliographiques

Abate, S. T., Melese, M., Tachbelie, M. Y., Meshesha, M., Atinafu, S., Mulugeta, W., Assabie, Y., Abera, H., Ephrem, B., Abebe, T., Tsegaye, W., Lemma, A., Andargie, T., and Shifaw, S. (2018). Parallel Corpora for bi-lingual English-Ethiopian Languages Statistical Machine Translation. In Proceedings of the 27th International Conference on Computational Linguistics, pages 3102-3111, Santa Fe, New Mexico, USA, August. Association for Computational Linguistics.

Assoumou, J. (2010). Enseignement oral des langues et cultures africaines à l'école primaire. Éditions Clé, Yaoundé, Cameroun, 1st edition.

Benoit, J.-L. and Turcan, I. (2006). La TEI au service de la transmission documentaire ou de la valorisation des richesses patrimoniales : le cas difficile des dictionnaires anciens.

Breuel, T. M. (2008). The OCRopus open source OCR system. Proc.SPIE, 6815.

De Schryver, G.-M. (2010). State-of-the-Art Software to Support Intelligent Lexicography. ResearchGate, page 16.

Don, O. (2010). African languages in digital space. HSRC Press, page 168.

Holtzblatt, K. and Beyer, H. (2017). 7 - Building Experience Models. pages 147-206, January.

Mangeot, M. and Enguehard, C. (2011). Informatisation de dictionnaires langues africaines-français. In journées LTT 2011, page 11.

Mangeot, M. (2006). Dictionary building with the jibiki platform. In Cristina Onesti Elisa Corino, Carla Marello, editor, Proceedings of the 12th EURALEX International Congress, pages 185-188, Torino, Italy, sep. Edizioni dell'Orso.

Maslinsky, K. (2014). Daba: a model and tools for Manding corpora.

Mboning, E. (2016). De l'analyse du dictionnaire yémbafrançais à la conception de sa DTD et de sa réédition sur support numérique. Mémoire Master 1, Université de Lille 3.

Mboning, E. (2017). Vers une métalexicographie outillée : conception d'un outil pour le métalexicographe et application aux dictionnaires Larousse de 1856 à 1966. Mémoire Master 2, Université de Lille 3.

Nouvel, D., Donandt, K., Auffret, D., Maslinsky, K., Chiarcos, C., and Vydrin, V. (2016). Resources and Experiments for a Bambara POS Tagger. Intra Speech, page 14.

Ruthven, R. (2005). The African Association for Lexicography: After Ten Years. Lexikos journal, page 9.

Tadadjeu, M. (2004). African Language Needs in Information and Communication Technology (ICT). page 9.

Tunde, O. (2012). Investigating the Language Situation in Africa. In Language and Law, Language rights, pages 272-293. Oxford Handbooks in Linguistics, Great Clarendon street.

Vydrin, V., Rovenchak, A., and Maslinsky, K. (2016). Maninka Reference Corpus: A Presentation. In TALAf 2016 : Traitement automatique des langues africaines (écrit et parole). Atelier JEP-TALN-RECITAL 2016 - Paris le, Paris, France, July.

## 9. Références des ressources linguistiques

De Pauw, Guy and Waiganjo Wagacha, Peter and de Schryver, Gilles-Maurice. (2009). The SAWA corpus: a parallel corpus English - Swahili.

Mboning, Elvis and NTeALan contributors. (2017). NTeALan lexicographic African language resources: an open-source REST API. NTeALan Project, distributed via NTeALan, Bantu resources, 1.0.

Vydrin, Valentin and Rovenchak, Andrij and Maslinsky, Kirill. (2016). Maninka Reference Corpus: A Presentation. Speecon Project, distributed via ELRA, Madingue resources, 1.0, ISLRN 613-489-674-355-0.
