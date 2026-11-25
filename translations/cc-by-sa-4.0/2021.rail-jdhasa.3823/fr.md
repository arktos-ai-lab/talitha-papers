> Machine translation (fr) of "An Open Source System for Crowd Sourcing an African Language Short Story Corpus" by Benson K. Muite, Kichakato Kizito, https://upjournals.up.ac.za/index.php/dhasa/article/view/3823, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Un système open source pour le crowdsourcing d'un corpus de nouvelles en langues africaines

Benson K. Muite, Kichakato Kizito

**Affiliations**  
Muite, Benson K.  
Kichakato Kizito  


## Résumé

De nombreuses langues africaines disposent de peu de corpus en libre accès pour le développement d'applications technologiques telles que les correcteurs grammaticaux, les correcteurs orthographiques, la transcription automatique de la parole, la synthèse vocale de texte et les outils de traduction automatique. Cela peut entraîner un déclin de tous les traits culturels associés aux peuples qui parlent ces langues. Pour permettre la collecte de corpus textuels et la préservation à long terme des caractéristiques culturelles positives, les considérations de conception et la mise en œuvre d'un système de collecte et d'évaluation de concours de nouvelles en ligne open source sont décrites. Le système est écrit en PHP et peut être déployé relativement économiquement sur des serveurs d'hébergement partagés disponibles auprès de nombreux fournisseurs d'hébergement africains. Cela permet la possibilité d'une collection décentralisée d'histoires, ainsi que l'adaptation et l'amélioration du logiciel à différents types de concours de nouvelles. Le logiciel a été utilisé pour deux concours de nouvelles à travers le continent africain dans le but de fournir des histoires adaptées aux enfants. L'organisation du concours en ligne a permis une participation provenant d'une grande variété de lieux, mais la plupart des soumissions proviennent de pays africains avec une infrastructure technologique relativement bonne. La préparation d’une troisième compétition est en cours.

## Mots-clés

Externalisation collective, Littérature africaine, Création de corpus

## 1 Introduction

L'Afrique possède une grande variété de langues et de dialectes linguistiques. Beaucoup d'entre eux ont de riches traditions orales et n'ont été utilisés que récemment pour la communication électronique écrite, comme les médias sociaux, le courrier électronique et les forums Internet. De nombreux pays africains ont choisi d'utiliser l'anglais ou le français comme langue d'éducation, cependant, l'internet a démocratisé l'accès aux espaces d'expression publique, et avec cette liberté, les gens ont commencé à s'exprimer dans leurs propres langues - le projet Indigenous Tweets (Scannell 2021) documente l'utilisation de langues qui ne sont pas largement répandues sur une plateforme de médias sociaux. En s'attendant à ce que cette tendance croisse pour au moins certaines langues africaines, il y aura un intérêt et un besoin pour des outils de traitement numérique des langues africaines. Pour développer de tels outils, des données linguistiques sont nécessaires. Une façon de collecter ces données est par le crowd sourcing. Les efforts complémentaires de collecte de nouvelles multilingues incluent StoryWeaver en Inde (Story Weaver 2021) et l'African Story Book en Afrique du Sud (Saide 2021). Aucun de ces projets n'a actuellement un logiciel ouvertement disponible pour que d'autres personnes puissent l'utiliser dans le crowdsourcing de nouvelles, et ils se concentrent uniquement sur la littératie, sans beaucoup d'efforts pour utiliser les matériaux collectés afin de permettre le développement d'outils de traitement du langage naturel.

## 2 Considérations sur la conception de la plateforme de crowdsourcing

Alors que la plupart des gens en Afrique utilisent des téléphones pour la communication plutôt que des ordinateurs, l'accès à Internet est en croissance. Les sites Web permettent une communication plus facile pour les écrits plus longs tels que les histoires courtes, et sont donc un bon premier choix de plate-forme. D'autres considérations pour une plateforme basée sur le web sont :

De nombreuses langues d'Afrique sont étroitement liées à l'identité ethnique. Cela peut être une source de tension et a provoqué des conflits. La plateforme doit permettre les soumissions anonymes et/ou les soumissions par un mandataire.

De nombreux pays africains mettent fortement l’accent sur l’anglais et le français comme langues d’enseignement. La traduction à partir des langues africaines s'est principalement concentrée sur la traduction vers l'anglais ou le français, pourtant de nombreuses langues africaines sont étroitement liées et peuvent avoir des concepts qui ne s'expriment pas bien en anglais et en français, il est donc important de développer des corpus qui permettent la création d'outils de traduction entre les langues africaines.

De nombreux auteurs et traducteurs effectuant une soumission peuvent ne pas connaître l'anglais, donc la plateforme de soumission devrait être disponible dans plusieurs langues, idéalement dans toutes les langues dans lesquelles les soumissions peuvent être faites.

Étant donné que de nombreuses langues africaines ne sont pas utilisées ou étudiées à l'école, les compétences linguistiques des personnes qui soumettent peuvent ne pas être très élevées, mais elles peuvent être intéressées à les améliorer. Des liens vers les ressources numériques disponibles devraient être mis à disposition et des efforts devraient être faits pour permettre la rétroaction sur les soumissions.

Le logiciel devrait être facile et peu coûteux à déployer en Afrique pour permettre l'organisation indépendante de concours de nouvelles.

Le logiciel devrait être facile pour les développeurs de logiciels basés en Afrique à contribuer.

Le logiciel devrait autant que possible respecter la vie privée des personnes qui soumettent des histoires et des traductions, et leur permettre de garder des informations personnellement identifiables privées si elles choisissent de le faire.

## 3 Mise en œuvre de la plateforme de crowdsourcing

La première considération est le langage de programmation à utiliser. Python (Python Software Foundation 2021), Ruby (Ruby Community 2021), PHP (PHP Community 2021) et Javascript (ECMA International 2021) ont été considérés. Python et Ruby ont une grande utilité dans le développement web, cependant ils ont un faible support pour l'hébergement partagé en Afrique et nécessitent généralement des serveurs de spécifications plus élevées que PHP - le support de l'hébergement partagé peut être amélioré, mais dans le cadre de ce projet, cela n'était pas faisable. Javascript est également utilisé pour développer le côté serveur d'une application web, en plus de rendre le côté client d'une application web interactive, cependant, il a encore beaucoup moins de soutien pour l'hébergement partagé en Afrique. Ainsi, PHP a été choisi comme langage de programmation pour la programmation serveur, avec une certaine quantité de Javascript, en particulier pour créer des claviers logiciels. De nombreux fournisseurs de services cloud en Afrique utilisent le logiciel cPanel (cPanel LLC 2021) pour l'hébergement partagé géré avec jusqu'à 10 GB de stockage pour des prix compris entre 1 et 5 dollars par mois. Cela prend en charge l'hébergement d'une application web PHP et d'une base de données.

Le logiciel se compose de :

Une base de données de récits originaux accompagnée des coordonnées de l'auteur ou de son représentant

Une base de données des histoires traduites, avec les coordonnées du traducteur ou de son mandataire

Une base de données des auteurs, des traducteurs ou de leurs mandataires et des langues dans lesquelles ils peuvent voter

Une base de données avec des votes et des commentaires sur chaque histoire originale ou traduite

Un programme PHP côté serveur pour permettre la soumission d'histoires et de traductions

Composantes HTML et Javascript côté client pour permettre la saisie de caractères spéciaux à l'aide d'un clavier logiciel et la traduction du site Web, la soumission d'histoires, la soumission de traductions, la visualisation d'histoires et le vote

Le site web peut être consulté à l'adresse https://tuvutepamoja.africa. Les figures 1 et 2 montrent la première page du site en anglais et en kiswahili. La figure 3 montre un clavier logiciel adapté à la saisie du Yorùbá qui comporte un certain nombre de caractères accentués que de nombreuses personnes qui ne sont pas des dactylographes formées doivent voir pour pouvoir les utiliser dans leur écriture.

Le logiciel a été développé ouvertement en utilisant le contrôle de version sur https://notabug.org/tuvutepamoja et est publié sous la licence publique générale GNU (Free Software Foundation 2021b). Le dépôt https://notabug.org héberge le développement de GnuSocial (GnuSocial Community 2021), un site de réseautage social open source également écrit en PHP qui peut être traduit en langues africaines. Une tentative a été faite d'utiliser GnuSocial pour permettre la communication entre les personnes intéressées à promouvoir la compétition dans les langues africaines qu'elles connaissent, mais l'engagement sur cette plate-forme était faible. Actuellement, un forum en ligne utilisant le logiciel open source FluxBB (FluxBB Community 2021), est utilisé pour permettre la communication publique par les personnes intéressées par le projet. Le forum est disponible sur https://ingxoxo.tuvutepamoja.africa/.

p03-patch01.png

Figure 1: Première page en anglais.

p03-01.png

Figure 2 : Page d'accueil en kiswahili.

Pour de nombreux contributeurs possibles, la traduction de logiciels n'est pas aussi excitante que la rédaction de leurs propres histoires courtes, donc cela n'a pas encore été couronné de succès. La traduction de tracts faisant la publicité du concours de nouvelles était une tâche moins ardue et de nombreuses personnes ont contribué à cet effort, permettant l'utilisation de plateformes de médias sociaux par des personnes souhaitant promouvoir leur langue.

p04-01.png

Figure 3 : Clavier virtuel - Yorùbá affiché.

## 4 Travaux ultérieurs

Des limites de mots ont été utilisées pour indiquer la longueur des soumissions acceptables. Cependant, un mot dans une langue peut correspondre à bien plus de mots dans une autre langue. Les travaux futurs consisteront à trouver une mesure raisonnable pour estimer le contenu équivalent entre les langues plutôt que d'utiliser les comptes de mots.

Le vote sur la pertinence des histoires par les participants peut être controversé. Pour certaines langues africaines, il est facile d'identifier un panel d'experts. Pour d'autres, le consensus sur la forme écrite de la langue, et sur les différents dialectes est encore en développement. Des modèles communautaires de participation sont nécessaires pour améliorer davantage cela. Dans de nombreux pays où une langue domine, comme au Rwanda, la standardisation linguistique a été plus facile à accomplir. De nombreux pays africains sont multilingues, et certaines langues sont utilisées à travers les frontières, ce qui rend la coopération intergouvernementale très utile dans les efforts de standardisation linguistique. La coopération avec les institutions poursuivant le travail de standardisation des langues africaines serait également utile, bien que de nombreuses institutions, lorsqu'elles existent, soient souvent mal financées. Pour les langues parlées par un petit nombre de locuteurs qui forment une minorité au sein de la population d'un pays, les organisations culturelles communautaires ou les groupes de médias sociaux sont la seule ressource disponible et facilement accessible.

Le vote s'effectue en fournissant aux auteurs et traducteurs d'histoires un identifiant qu'ils entrent sur le site web pour pouvoir émettre leur vote. Leurs votes sont ensuite stockés dans une base de données séparée de l'identifiant dans le but de permettre l'anonymat lorsqu'il y a plus de deux votants pour des récits dans une langue particulière. Il serait bon d'améliorer le système pour qu'il soit crypté et que l'administrateur ne puisse pas déterminer pour quoi chaque participant a voté. Ceci est techniquement difficile car on peut également utiliser des journaux de serveur et des horodatages de base de données pour corréler l'activité. Néanmoins, le vote électronique a été fait à d'autres fins qui ont des exigences plus élevées en matière de sécurité et de vérification de l'identité, de sorte qu'il devrait être possible d'intégrer cela dans le logiciel actuel.

Le logiciel a été partiellement traduit en Kiswahili. À l'heure actuelle, cela se fait en créant une liste de chaînes de caractères pour chaque composant du site Web destiné à l'utilisateur. De nombreux projets logiciels open source utilisent des fichiers formatés pour Gettext (Free Software Foundation 2021a) pour stocker les traductions. Il serait bon d'utiliser un tel système.

Des travaux supplémentaires sont également nécessaires pour rendre les claviers logiciels plus faciles à utiliser, en particulier pour les langues éthio-sémitiques telles que l'amharique. Des claviers souples ont été ajoutés au logiciel pour permettre l'utilisation de l'orthographe qui peut ne pas être disponible sur les claviers d'ordinateur anglais et français standard disponibles sur les ordinateurs dans de nombreux pays africains. Toutes les langues n'ont pas une orthographe standardisée, donc une adaptation et une collaboration avec des linguistes sont nécessaires pour bien faire cela. Un certain nombre de contributeurs ont indiqué utiliser des claviers sur leurs téléphones mobiles qui ont toutes les lettres dont ils ont besoin pour leurs langues. Permettre la création, la soumission et la consultation d'histoires via une application mobile en plus d'un site web peut également être une option à envisager.

Cette note s'est principalement concentrée sur les considérations techniques liées à la création d'un logiciel pour accueillir une compétition en ligne de nouvelles dans les langues africaines afin de collecter un corpus. Un article supplémentaire analysera les corpus recueillis et inclura les points de vue de ceux qui ont aidé à obtenir, écrire et traduire des nouvelles.

## 5 Conclusion

On s'attend à ce que de nombreuses langues d'Afrique deviennent éteintes, ou fusionnées et standardisées avec d'autres langues similaires utilisées dans la même région, par exemple comme cela s'est produit avec le Runyakitara. Documenter le riche héritage culturel est important pour une meilleure compréhension et les éventuelles leçons qui peuvent être tirées de la diversité linguistique actuelle. Documenter les cultures est également utile pour permettre la compréhension interculturelle. L'ère numérique nécessite des outils numériques, et bien que la plupart des développements technologiques permettant la numérisation aient eu lieu dans les pays anglophones, ceux-ci ont été adaptés aux conditions locales dans les pays ayant des contextes culturels différents. Des exemples notables d’outils numériques de traitement du langage naturel sont issus de la Russie, de la Chine et du Japon, certains de ces outils ayant été en partie développés par des entreprises commerciales de médias sociaux ayant une forte présence locale. En fournissant un logiciel open source pour permettre des concours de nouvelles pour les langues africaines, on espère stimuler la collecte de nouvelles à un coût relativement faible, améliorer les compétences en lecture et en écriture dans les langues africaines, et développer des outils de traitement du langage naturel pour les langues africaines.

## Remerciements

Ce travail a bénéficié d'une subvention de 4 000 $ accordée par le Centre de recherches pour le développement international, administrée par Knowledge for All (https://www.k4all.org) dans le cadre du programme de bourses d'innovation IndabaX-AI4D 2020. L’auteur remercie William Agbo, Liané Van Den Bergh, Audrey Mbogho, Cascious Mofokeng, Itaru Ohta, Kevin Scannell, Juan Steyn, Benito Trollip, Lilian Wanzare, et Constantine Yuka pour leurs nombreuses discussions utiles et leur aide dans la gestion des concours. L'auteur tient également à remercier toutes les personnes qui ont participé aux compétitions, soit en soumettant une histoire, en soumettant une traduction, en sollicitant des contributions auprès d'autres personnes, en traduisant un dépliant ou en vérifiant les histoires originales et traduites soumises.

## Références

cPanel LLC (2021), 'cpanel website'. URL: https://www.cpanel.net

ECMA International (2021), 'Javascript specification'. https://www.ecma-

URL: international.org/publications-andstandards/standards/ecma-262/

FluxBB Community (2021), 'Fluxbb website'. URL: https://fluxbb.org

Free Software Foundation (2021a), 'Gettext website'. URL: https://www.gnu.org/software/gettext/

Free Software Foundation (2021b), 'Gnu general public license'. URL: https://www.gnu.org/licenses/gpl-3.0.en.html

GnuSocial Community (2021), 'Gnusocial website'. URL: https://www.gnusocial.rocks/

PHP Community (2021), 'Php website'. URL: https://www.php.net/

Python Software Foundation (2021), 'Python website'. URL: https://www.python.org/

Ruby Community (2021), 'Ruby website'. URL: https://www.ruby-lang.org/

Saide (2021), 'African story book website'. URL: https://www.africanstorybook.org/

Scannell, K. (2021), 'Indigenous tweets'. URL: http://indigenoustweets.com/

Story Weaver (2021), 'Story weaver website'. URL: https://storyweaver.org.in/weave_a_story_campaign
