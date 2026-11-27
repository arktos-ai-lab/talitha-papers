> Machine translation (fr) of "GiellaLT: an infrastructure for rule-based language technology tool development" by Flammie A Pirinen, Trond Trosterud, Sjur N. Moshagen, Linda Wiechetek, https://upjournals.up.ac.za/index.php/dhasa/article/view/4451, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## GiellaLT : une infrastructure pour le développement d'outils de technologies du langage à base de règles

Flammie A Pirinen, Trond Trosterud, Sjur N. Moshagen, Linda Wiechetek

**Affiliations**  
Pirinen, Flammie A  
UiT Arctic University of Norway  
  
Trosterud, Trond  
UiT Arctic University of Norway  
  
Moshagen, Sjur N.  
UiT Arctic University of Norway  
  
Wiechetek, Linda  
UiT Arctic University of Norway  


## Résumé

Actuellement, l’apprentissage automatique est présenté comme la solution ultime pour la technologie du langage, indépendamment du cas d’utilisation et de l’application. Cependant, il nécessite comme point de départ une quantité massive de données linguistiques organisées sous forme électronique qui devraient être de haute qualité et représentatives du type d’utilisation du langage que les outils suivront. Pour les langues minoritaires et indigènes, cela peut être une tâche insurmontable, car les matériaux numériques des tailles nécessaires n'existent pas et ne peuvent pas facilement être produits. Dans cet article, nous présentons une approche que nous avons utilisée avec succès pour aider les langues autochtones à survivre et à se développer dans les contextes numériques depuis des années, et nous décrivons le potentiel de notre approche pour les contextes africains. Notre solution technologique est une infrastructure libre et open-source qui permet aux experts en langues et aux utilisateurs de coopérer pour créer des ressources linguistiques comme des dictionnaires et des descriptions grammaticales. En outre, nous fournissons des cadres indépendants du langage pour les intégrer dans des applications dont la communauté linguistique a besoin.

## Mots-clés

Technologies du langage à base de règles, claviers, outils de vérification, infrastructure de technologies du langage, technologies du langage à ressources extrêmement faibles

## Introduction

Les approches d'apprentissage automatique (ML) ont dominé le traitement automatique du langage naturel (NLP) au cours des deux dernières décennies. Ils nécessitent généralement une grande quantité de données sans bruit, ce qui n'existe pas pour 99% des 7 000 langues du monde, soit en raison du petit nombre d'écrivains, soit en raison d'une norme écrite jeune. Même si une petite communauté linguistique comme celle du same d'Inari en Finlande est exceptionnellement productive en écriture de textes (10 533 mots/locuteur contre 1 440 mots/locuteur pour le suédois), la quantité de texte recommandée pour les approches régulières d'apprentissage automatique (« Un corpus de 3,4 milliards de mots a été utilisé pour le BERT-Large original, il vaut donc la peine de s'entraîner avec un jeu de données de cette taille. » [1]) ne peut pas être atteinte. Il en va de même pour les communautés linguistiques comptant de nombreux locuteurs mais avec un faible degré d'alphabétisation dans cette langue ou simplement en l'absence de domaines linguistiques écrits ou dans un contexte bilingue où seule la langue majoritaire est utilisée comme langue écrite.

Dans cet article, nous présentons notre infrastructure — GiellaLT — qui héberge actuellement des modèles de langage pour plus de 130 langues et construit un certain nombre d'outils de technologies du langage utiles pour toute communauté linguistique. GiellaLT est basé sur une alternative aux technologies du langage fondées sur des corpus — les technologies du langage fondées sur les connaissances, également connues sous le nom de technologies du langage à base de règles. La technologie est choisie pour sa capacité à soutenir les langues sans présence numérique antérieure. Tant qu'un projet a accès à un locuteur natif et à un linguiste, peut-être même en une seule et même personne, des outils utiles peuvent être créés. Les ressources numériques sont toujours les bienvenues et aideront à accélérer le travail de développement, mais elles ne sont pas une exigence.

Une communauté linguistique avec peu ou pas de présence numérique a également besoin de différents types d’outils que les langues avec des corpus de milliards de mots. Chaque communauté linguistique est unique, mais pour celles qui ont ou visent une tradition écrite numérisée, le premier outil à développer est généralement un clavier, y compris des claviers mobiles de nos jours, pour pouvoir saisir du texte correctement et efficacement. Aucun apprentissage automatique ne peut créer une disposition de clavier ni discuter des besoins d'une communauté linguistique.

L'infrastructure GiellaLT fournit tous les blocs de construction pour commencer immédiatement le travail sur la langue, en s'appuyant sur des technologies et des solutions open-source. L'intégration avec la plupart des systèmes et plates-formes existants est prouvée, ce qui permet d'économiser énormément de temps, d'argent et de ressources pour les nouveaux arrivants. Cela est particulièrement important pour de nombreuses communautés de langues indigènes, qui n'auraient pas les ressources nécessaires pour développer des technologies sous-jacentes et des solutions d'intégration par elles-mêmes. En séparant les parties indépendantes de la langue des parties spécifiques à la langue, le coût du développement des parties indépendantes de la langue peut être partagé par tous, ou être supporté par des communautés disposant de suffisamment de ressources. En étant open source, nous maintenons également une approche qui donne aux communautés linguistiques un pouvoir qui leur permet de conserver la propriété de la langue et des données linguistiques sur lesquelles elles travaillent. Dans le modèle open source gratuit, il n'y a pas de grand danger que quelqu'un travaillant sur les modèles de langage acquière simplement les données linguistiques de la communauté gratuitement pour les lui revendre à un prix plus élevé.

Une dernière considération que notre approche basée sur des règles a sur les modèles appris par machine est celle de l'efficacité : un modèle de langage neuronal doit être entraîné sur un système avec au moins un GPU pendant une période de jours ou de semaines et devrait probablement également fonctionner sur un matériel similaire, ou être accessible via un internet haut débit. Les outils de langage basés sur des règles peuvent être compilés sur un ordinateur domestique bas de gamme et exécutés localement sur des téléphones mobiles même bas de gamme, ce qui est presque une nécessité pour de nombreux outils de rédaction. En prime, l'approche est économe en énergie, ce qui est quelque chose avec lequel les modèles neuronaux ont encore du mal à l'heure actuelle, cf. Treviso et coll. (s.d.).

## GiellaLT - Une infrastructure multilingue pour tous

Le fondement du travail présenté dans cet article est l'infrastructure multilingue GiellaLT, qui comprend de nombreuses langues disposant de peu ou pas de données, un cas rare dans le monde du TAL. Tout ce qui est produit dans l'infrastructure GiellaLT est sous licence libre et ouverte et disponible gratuitement. Les corpus sont disponibles avec une licence gratuite lorsque cela est possible. L'infrastructure est divisée en trois organisations GitHub : GiellaLT contenant les données linguistiques pour chaque langue, Divvun contenant le code indépendant de la langue pour l'infrastructure, et Giellatekno pour l'infrastructure des corpus. Les outils destinés aux utilisateurs finaux gérés par le groupe Divvun se trouvent sur divvun.no et divvun.org, et les outils gérés par le groupe Giellatekno sur giellatekno.uit.no, tous deux à l'Université de l'Arctique UiT-Norvège.

L'exigence de base pour le développement d'outils linguistiques dans GiellaLT est une orthographe qui est soit définie au préalable, soit définie lors de la création des outils linguistiques. L'accès à un dictionnaire imprimé est d'une grande aide, encore plus s'il est disponible électroniquement. Une description grammaticale existante est également d'une aide considérable, mais pas une exigence.

Nous construisons des systèmes qui incluent des données lexicales ainsi que des règles régissant la morphophonologie, la syntaxe et la sémantique, ainsi qu'un certain nombre d'informations spécifiques à l'application, par exemple des règles de grammaire pour la vérification de la grammaire, des règles phonétiques pour la synthèse vocale de texte (TTS), etc.

Le travail dépendant de la langue est effectué au sein de l'infrastructure dans des dépôts spécifiques à la langue, les fonctionnalités et les mises à jour indépendantes de la langue qui sont pertinentes pour toutes les langues sont fusionnées de manière semi-automatique au fur et à mesure de leur développement. Pour s'assurer que les fonctionnalités et mises à jour communes et indépendantes de la langue ne détruisent pas les données linguistiques existantes ou ne dégradent pas les outils linguistiques, nous appliquons un régime de test rigoureux basé sur l'intégration continue. Le système actuel de test est une combinaison de notre investissement à long terme dans les tests au sein de l'infrastructure locale pour les développeurs, combiné avec les tests automatiques modernes actuellement fournis par les actions GitHub.

Une autre partie de la philosophie de GiellaLT est celle des ressources réutilisables et polyvalentes, cf. Antonsen et al. (2010). C'est vrai pour l'ensemble de nos travaux, de la collecte de corpus à la coopération interlingue, et c'est crucial pour la durabilité des travaux dans les langues indigènes et moins dotées en ressources, où le temps de travail des experts en langues est rare et précieux.

Malgré le manque de données, il existe dans GiellaLT des outils de haut niveau tels que la traduction automatique (TA), la synthèse vocale de texte TTS, des correcteurs d'orthographe et de grammaire, et plus encore, qui ont été très bien accueillis dans les communautés linguistiques. Cela n'aurait pas été possible sans développer d'abord des outils de base tels que des claviers, des analyseurs morphologiques et des correcteurs d'orthographe.

## GiellaLT pour les langues africaines

Dans cette section, nous passons en revue les outils de TAL que l'infrastructure GiellaLT fournit pour les utilisateurs de langues. Nous énumérons ici un sous-ensemble des applications que nous avons trouvées les plus utiles pour les communautés linguistiques avec lesquelles nous travaillons, dans le soutien linguistique et le travail de revitalisation: Claviers et vérification et correction de l'orthographe et de la grammaire, dictionnaires et traduction automatique. Nous fournissons également des outils pour la technologie de la parole, cependant, cela n'est pas discuté en détail dans cet article, par exemple, c.f. Hiovain-Asikainen & Moshagen (2022). De plus, les ressources linguistiques qui sont utilisées comme base des outils pour utilisateurs finaux comme les analyseurs morphologiques, sont une ressource clé pour le travail en humanités numériques sur la langue : tokenisation, analyse morphosyntaxique et glossage par exemple.

Les langues pour lesquelles Microsoft et Google ne proposent pas de solutions de technologies du langage sont vulnérables aux changements technologiques. Les programmes à code source fermé pour de telles langues risquent de devenir inutilisables lorsque les traitements de texte ou les systèmes d'exploitation changent. Les entreprises qui développent ces programmes peuvent alors soit faire faillite, soit changer leur orientation pour d'autres domaines. Étant une source fermée, le travail derrière ces solutions est alors perdu. La solution GiellaTL consiste à maintenir à la fois le logiciel linguistique et le logiciel nécessaire pour l'intégrer dans diverses applications en open source. Cela signifie que les ressources rares peuvent être réutilisées, sans risque de perte de travail. Le libre accès à des logiciels indépendants de la langue facilite également la création de solutions pour les langues moins utilisées.

## Claviers

La plupart des langues africaines sont écrites avec l'alphabet latin. Beaucoup d'entre eux ont des lettres en dehors de la gamme A-Z et même plus, ont des systèmes étendus de symboles diacritiques. En plus de cela vient le défi de la façon dont les sons de clic sont traités dans les langues San, avec des symboles de lettres ressemblant à des signes de ponctuation.

Chacune de ces langues a besoin de sa propre configuration de clavier. Lorsque les outils de technologies du langage sont de plus en plus liés aux configurations de clavier, les langues n'utilisant que les lettres A-Z auront besoin de leur propre clavier pour invoquer les outils de technologies du langage de la langue appropriée.

Afin de relever ce défi, l'infrastructure GiellaLT est fournie avec un pipeline pour créer des claviers et les installer, ainsi que les outils de technologies du langage correspondants, sur différentes plateformes. Le cœur du pipeline est l'outil kbdgen, avec lequel on peut facilement spécifier une disposition de clavier dans un fichier YAML, imitant la disposition réelle du clavier. La liste ci-dessous montre la définition de la disposition du clavier pour les mobiles Android pour Lule Sámi. L'outil prend cette définition et un peu de métadonnées, les combine avec du code pour une application de clavier Android, compile tout, signe l'artefact construit et le télécharge sur le Google Play Store, prêt pour les tests.

modes:
    android:
        default: |
            á w e r t y u i o p å
            a s d f g h j k l ø æ
            z x c v b n m ŋ

kbdgen prend en charge la génération d'applications clavier ou de packages d'installation pour Android, iOS, macOS, Windows, Linux (X11 et m17n) et Chrome OS. Il existe un support expérimental pour la génération de fichiers XML du Common Language Data Repository (CLDR), de fichiers Scalable Vector Graphics (SVG) pour un débogage rapide des dispositions, et de transducteurs à états finis pour les modèles d'erreur de frappe sur touches voisines. L'installateur Windows inclut un outil pour enregistrer des langues inconnues, de sorte que même les langues jamais vues sur un ordinateur Windows seront correctement enregistrées, le rendant ainsi prêt à prendre en charge les outils de vérification et autres outils de traitement des langues.

p04-01.png

Figure 1 : Capture d'écran du clavier Lule Sámi pour Android, tel que défini dans la liste ci-dessus.

L'application clavier mobile inclut également la prise en charge des correcteurs orthographiques (voir plus loin), pour soutenir le processus d'écriture.

## Analyseurs morphologiques et dictionnaires

Sans compter le swahili et quelques autres langues, les langues africaines ont des ressources en corpus très limitées. Beaucoup de langues africaines ont aussi des structures morphologiques complexes. C'est le cas notamment des langues khoïsanes et (de la plupart des) langues bantoues dans le sud et l'est, ainsi que des langues afro-asiatiques dans le nord-est. De telles langues, ayant une morphologie complexe et peu ou pas de ressources textuelles, seront problématiques pour les technologies du langage dominantes.

Peu de technologies langagières ont été développées pour ces langues. Les principales exceptions sont les travaux d'Arvi Hurskainen sur le swahili (pour une vue d'ensemble et les références, voir Hurskainen (2018)) et les travaux de Laurette Pretorius, Sonja Bosch et d'autres sur le zoulou, le xhosa et d'autres langues d'Afrique du Sud (par exemple, Pretorius & Bosch (2009a), Pretorius & Bosch (2009b)).

L'infrastructure GiellaLT a été développée pour faire face à cette situation. Le défi de créer des technologies du langage pour des langues circumpolaires complexes et marginalisées a été résolu en représentant la structure morphologique sous forme de transducteurs à états finis. Les analyseurs morphologiques sont le cœur de nos outils de technologies du langage, ils sont écrits sous forme de morphologie à états finis Beesley & Karttunen (2003), Lindén et al. (2013). Cela signifie en pratique que la modélisation du langage est basée sur des dictionnaires et des règles manuscrites pour la morphotaxie ainsi que le traitement syntaxique et sémantique selon les besoins, par exemple avec Constraint Grammar Karlsson (1990), Didriksen (2010). Alors que l'écriture de modèles basés sur des règles pour le traitement du langage est actuellement considérée comme trop lente et exigeante en main-d'œuvre, dans notre expérience, un travail à temps plein sur le dictionnaire et les règles morphotactiques pendant trois mois suffit à créer des modèles de langage utilisables à haute couverture. Si l'on compare cela au travail nécessaire pour créer et organiser des corpus pour l'apprentissage automatique, trois mois ne permettent pas d'aller bien loin dans la création de corpus gigaword.

Les principales familles linguistiques traitées dans l'infrastructure GiellaLT sont l'oural, l'algonquin, l'esquimo-aléoute et diverses langues sibériennes. En ce qui concerne les langues africaines, nous n'avons expérimenté que huit d'entre elles jusqu'à présent[2]. Le modèle de langage somali est bien au-delà du niveau alpha, il contient près de 16000 radicaux et la morphologie de base. Les autres modèles de langage sont tous relativement petits, mais dans certains cas, ils donnent encore une impression de la façon dont les défis morphophonologiques centraux peuvent être résolus.

## Outils de vérification

Les outils de correction sont des logiciels essentiels pour soutenir l'écriture normative, c'est-à-dire les vérificateurs et correcteurs d'orthographe et de grammaire. Les analyseurs morphologiques décrits ci-dessus constituent la base de presque tous les autres outils que l'on peut construire en utilisant l'infrastructure GiellaLT, y compris les outils de relecture.

## Correcteurs orthographiques

Un correcteur orthographique se compose essentiellement de deux parties : un dictionnaire morphologique qui contient les informations permettant de déterminer si un mot donné fait partie de la langue ou non. Il est supposé par la vérification orthographique que les mots qui ne sont pas dans le dictionnaire collecté sont des fautes d'orthographe de mots réels. La deuxième partie est un modèle d'erreur qui prend le mot inconnu saisi par l'utilisateur et tente de trouver des mots similaires qui sont présents dans la langue.

Des technologies similaires à celles présentées ici ont également été appliquées aux langues africaines. Un exemple est Bosch & Eiselen (2012), pour le zoulou, un autre est le correcteur orthographique swahili distribué par l'entreprise finlandaise Lingsoft.

Dans l'infrastructure GiellaLT, les deux parties sont modélisées comme des transducteurs à états finis (FST). Le dictionnaire morphologiquement conscient est construit directement sur l'analyseur morphologique mentionné ci-dessus après avoir supprimé le contenu indésirable tel que la ponctuation et le langage non standard. Le modèle d'erreur est construit comme un modèle de distance d'édition de Levenshtein Levenshtein (1965) plus des règles de remplacement pondérées spécifiques à la langue Pirinen & Lindén (2010).

Le paquet du correcteur orthographique est distribué via notre propre système d'installation et de mise à jour de bureau Páhkat, et un client pahkat fait également partie des applications de clavier mobile. Cela signifie que les correcteurs orthographiques sur tous les systèmes pris en charge, à la fois mobiles et de bureau, sont automatiquement maintenus à jour.

Dans le cadre de l'application de clavier mobile, les correcteurs d'orthographe aident les utilisateurs lors du processus d'écriture avec leur clavier natif. Nous expérimentons actuellement diverses formes de modèles de complétion et de prédiction de mots, mais rien n'a encore été publié.

## Vérification de grammaire

L'infrastructure GiellaLT comprend un cadre avancé de vérificateur de grammaire. Elle utilise une combinaison d'analyseurs morphologiques et de composants de désambiguïsation et de détection d'erreurs de Constraint Grammar (Didriksen 2010). En outre, la logique de grammaire à contraintes est utilisée pour déterminer où se trouvent les erreurs de grammaire ; la logique est similaire à l'analyse syntaxique basée sur la grammaire Wiechetek (2012). Tout est basé sur des règles, ce qui signifie qu’il est possible de se développer sans corpus électroniques préexistants. Les fonctionnalités du vérificateur de grammaire sont assez nouvelles, mais sont déjà utilisées pour quatre langues différentes.

## Traduction automatique

L’infrastructure GiellaLT soutient le développement de systèmes de traduction automatique en coopération avec Apertium Khanna et al. (2021). Les modèles monolingues développés dans l'infra GiellaLT sont ensuite combinés avec les règles de transfert et les lexiques d'Apertium pour fournir un système de MT de bout en bout. Le système Apertium, dans son cœur, est également un outil de traduction automatique basé sur des règles. Cela signifie que l’on peut construire des systèmes de TA pour des langues n’ayant pratiquement aucune ressource existante dans des corpus bilingues, en élargissant le travail effectué dans les dictionnaires monolingues. Les composants nécessaires pour une traduction automatique basée sur des règles en plus de l'analyse morphologique basée sur des règles dans GiellaLT infra sont un dictionnaire bilingue, c'est-à-dire un dictionnaire de traduction de mot à mot régulier et un ensemble de règles grammaticales concernant la traduction des différences linguistiques entre les langues.

## Conclusion

Nous avons présenté l'infrastructure GiellaLT et sa philosophie et son objectif de soutenir les langues autochtones à travers le monde, en particulier les langues avec une morphologie ou une phonologie complexes - ou les deux. Nous avons montré qu'une large gamme d'outils utiles pour les communautés linguistiques peut être construite avec un minimum de ressources électroniques préexistantes, permettant ainsi la création d'outils de technologies du langage pour toute langue, et nous avons souligné l'importance de l'open source comme stratégie pour éviter de perdre des ressources linguistiques. Enfin, nous avons donné un aperçu des ressources existantes pour les langues africaines dans l'infrastructure GiellaLT.

Le statut actuel des langues africaines au sein de notre infrastructure est limité à plusieurs startups et langues expérimentales, l’un des objectifs de cet article est d’étudier plus en profondeur le potentiel de coopération et d’engagement futurs dans le développement du TALN africain au sein de notre infrastructure.

## Notes

[1] Hajdu Róbert 2021 : Entraîner BERT-Large dans votre propre langue. Towards Data Science.

[2] Il s’agit des langues akan, amharique, luo, ndolo, pedi, somali, tigrinya et zoulou. Le code source est disponible sur https://github.com/giellalt/lang-xxx, où xxx doit être remplacé par le code ISO 639-3 de la langue en question.

## Remerciements

Tous les travaux du groupe de développement de Divvun à l'UiT sont financés par le ministère norvégien des collectivités locales et du développement régional. Tous les travaux du groupe de recherche Giellatekno sont financés par l’UiT The Arctic University of Norway.

## Références

Antonsen, L., Trosterud, T. & Wiechetek, L. (2010), Reusing grammatical resources for new languages, in 'Proceedings of the Seventh International Conference on Language Resources and Evaluation (LREC'10)', European Language Resources Association (ELRA), Valletta, Malta. URL: http: // www. lrec-conf. org/ proceedings/ lrec2010/ pdf/ 254_ Paper. pdf

Beesley, K. R. & Karttunen, L. (2003), 'Finite-state morphology: Xerox tools and techniques', CSLI, Stanford.

Bosch, S. & Eiselen, R. (2012), 'The effectiveness of morphological rules for an isiZulu spelling checker', South African Journal of African Languages 25, 25-36.

Didriksen, T. (2010), Constraint Grammar Manual: 3rd version of the CG formalism variant, GrammarSoft ApS, Denmark. URL: http: // visl. sdu. dk/ cg3/ vislcg3. pdf (Accessed 2017-11-29)

Hiovain-Asikainen, K. & Moshagen, S. (2022), Building open-source speech technology for low-resource minority languages with sámi as an example - tools, methods and experiments, in 'Proceedings of the the 1st Annual Meeting of the ELRA/ISCA Special Interest Group on Under-Resourced Languages', European Language Resources Association, Marseille, France, pp. 169-175. URL: https: // aclanthology. org/ 2022. sigul-1. 22

Hurskainen, A. (2018), Sustainable language technology for african languages, in A. Agwuele & A. Bodomo, eds, 'The Routledge Handbook of African Linguistics', Routledge Handbooks, Routledge, Abingdon, pp. 359-375. URL: https: // doi. org/ 10. 4324/ 9781315392981-19

Karlsson, F. (1990), Constraint grammar as a framework for parsing unrestricted text, in H. Karlgren, ed., 'Proceedings of the 13th International Conference of Computational Linguistics', Vol. 3, Helsinki, pp. 168-173.

Khanna, T., Washington, J. N., Tyers, F. M., Bayatlı, S., Swanson, D. G., Pirinen, T. A., Tang, I. & Alòs i Font, H. (2021), 'Recent advances in apertium, a free/open-source rule-based machine translation platform for low-resource languages', Machine Translation pp. 1-28.

Levenshtein, V. I. (1965), 'Двоичные коды с исправлением выпадений, вставок и замещений символов', Доклады Академий Наук СCCP 163(4), 845-848.

Lindén, K., Axelson, E., Drobac, S., Hardwick, S., Kuokkala, J., Niemi, J., Pirinen, T. A. & Silfverberg, M. (2013), Hfst-a system for creating nlp tools, in 'International workshop on systems and frameworks for computational morphology', Springer, pp. 53-71.

Pirinen, T. & Lindén, K. (2010), 'Finite-state spell-checking with weighted language and error models: Building and evaluating spell-checkers with wikipedia as corpus', Proceedings of LREC 2010.

Pretorius, L. & Bosch, S. (2009a), 'Computational aids for Zulu natural language processing', Southern African Linguistics and Applied Language Studies 21,267-282.

Pretorius, L. & Bosch, S. (2009b), Exploiting cross-linguistic similarities in Zulu and Xhosa computational morphology, in 'Proceedings of the EACL 2009 Workshop on Language Technologies for African Languages', Association for Computational Linguistics, p. 96-103.

Treviso, M., Ji, T., Lee, J.-U., van Aken, B., Cao, Q., Ciosici, M. R., Hassid, M., Heafield, K., Hooker, S., Martins, P. H., Martins, A. F. T., Milder, P., Raffel, C., Simpson, E., Slonim, N., Balasubramanian, N., Derczynski, L. & Schwartz, R. (n.d.). URL: https: // arxiv. org/ abs/ 2209. 00099

Wiechetek, L. (2012), Constraint Grammar based correction of grammatical errors for North Sámi, in G. D. Pauw, G.-M. de Schryver, M. Forcada, K. Sarasola, F. Tyers & P. Wagacha, eds, 'Proceedings of the Workshop on Language Technology for Normalisation of Less-Resourced Languages (SALTMIL 8/AFLAT 2012)', European Language Resources Association (ELRA), Istanbul, Turkey, pp. 35-40.
