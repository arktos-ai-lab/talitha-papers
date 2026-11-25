> Machine translation (fr) of "Navigating Challenges of Multilingual Resource Development for Under-Resourced Languages: The Case of the African Wordnet Project" by Marissa Griesel, Sonja Bosch, https://aclanthology.org/2020.rail-1.8/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Naviguer les défis du développement de ressources multilingues pour les langues sous-dotées : le cas du projet African WordNet

Marissa Griesel, Sonja Bosch

**Affiliations**  
Marissa Griesel, Sonja Bosch  
University of South Africa (UNISA)  
Pretoria, South Africa  


## Résumé

La création d'un nouveau wordNet n'est en aucun cas une tâche triviale et lorsque la langue cible est sous-dotée, comme c'est le cas pour les langues actuellement incluses dans le wordNet africain multilingue (AfWN), les développeurs doivent s'appuyer fortement sur l'expertise humaine. Au cours des différentes phases de développement de l'AfWN, nous avons intégré diverses méthodes d'accélération du travail pour faciliter le travail fastidieux et chronophage. Certaines méthodes se sont avérées efficaces tandis que d'autres semblent avoir peu d'impact positif sur le taux de travail. Comme dans le cas de nombreuses autres langues sous-dotées, le modèle d'expansion a été mis en œuvre de bout en bout, dépendant ainsi de données sources anglaises telles que le Princeton WordNet (PWN) anglais, qui sont ensuite traduites dans la langue cible avec l'hypothèse que la nouvelle langue partage une structure sous-jacente avec le PWN. Le papier discute de certains problèmes rencontrés en cours de route et souligne diverses possibilités de mesures de contrôle de qualité (semi) automatisées et de raffinement ultérieur de l'AfWN pour assurer une croissance accélérée. Dans cet article, nous visons à mettre en lumière certaines des leçons apprises de l'expérience pratique afin de faciliter des projets similaires, en particulier pour les langues d'autres pays africains.

## Mots-clés

Réseau lexical multilingue ; langues sous-dotées ; langues africaines

## 1. Introduction

Le projet African Wordnet (AfWN) a pour objectif le développement de wordnets pour les langues indigènes, y compris le Setswana, l'isiXhosa, l'isiZulu, le Sesotho sa Leboa, le Tshivenḑa, le Sesotho, l'isiNdebele, le Xitsonga et le Siswati. La phase de développement la plus récente est financée par le South African Centre for Digital Language Resources (SADiLaR) et s'étend de 2018 à la fin février 2020, avec une prolongation jusqu'en 2022 actuellement à l'étude. Une prochaine version des ressources linguistiques de l'AfWN est actuellement préparée pour distribution et sera mise à disposition dans les mêmes conditions et sur la même plateforme que les premières versions pour les cinq premières langues (UNISA, 2017). Voir également Bosch et Griesel (2017) pour une description détaillée.

Alors que l'accent était mis par le passé sur les langues officielles sud-africaines, le projet s'efforce également d'établir un réseau de projets à travers l'Afrique, avec des équipes représentant d'autres langues africaines qui ajoutent leurs propres wordnets. Dans cette présentation, nous espérons partager certaines des défis et obstacles uniques rencontrés lors du développement d'une ressource techniquement complexe avec très peu ou pas d'outils supplémentaires de traitement automatique du langage naturel (NLP). Nous discutons des exemples d'idiosyncrasies linguistiques et suggérons des façons de représenter ces exemples dans une base de données formelle telle qu'un wordnet. En outre, nous examinons également certains pièges communs lors de l’utilisation de l’anglais (Royaume-Uni ou États-Unis) comme langue source pour le développement de ressources manuelles, ouvrant la voie à une discussion plus approfondie entre les experts linguistiques, les développeurs et les utilisateurs de ressources linguistiques africaines afin d’en assurer l’utilité dans les sphères en expansion rapide des technologies du langage humain (TLH) et des sciences humaines numériques (SHN) en Afrique.

## 2. Contexte

## 2.1 Le projet AfWN

Ordan et Wintner (2007) ainsi que Vossen et al. (2016) décrivent deux méthodes courantes utilisées pour développer des wordnets, en fonction du nombre et de la taille des ressources supplémentaires disponibles, de l'expérience de l'équipe et de la structure grammaticale sous-jacente de la langue modélisée. L'approche par fusion est populaire pour les nouveaux wordnets disposant de nombreuses ressources supplémentaires telles que des dictionnaires bilingues, des grammaires descriptives et des corpus textuels. Les Wordnets sont construits indépendamment de tout wordnet existant en tant que ressource autonome, après quoi un processus distinct est suivi pour aligner le wordnet nouvellement créé avec le Princeton WordNet (PWN) (Princeton University, 2020; et Fellbaum, 1998). PolNet, un wordnet polonais (Vetulani et al. 2010) qui est basé sur un lexique polonais monolingue de haute qualité, est un bon exemple de projet suivant cette approche. Dans le cas des langues moins dotées en ressources, le PWN peut être utilisé comme modèle pour développer un nouveau wordnet. C'est ce qu'on appelle le modèle d'expansion selon lequel le wordnet source, généralement le PWN anglais, est traduit dans la langue cible, avec l'hypothèse que la nouvelle langue partage une structure sous-jacente avec le PWN. Le Wordnet croate est un exemple de wordnet basé sur le modèle d'expansion en raison du manque de lexiques sémantiquement organisés (cf. Raffaelli et al., 2008:350).

Typiquement, les wordnets suivant cette approche n'ont pas accès à de nombreuses autres ressources numériques et s'appuient fortement sur les connaissances linguistiques de l'équipe de développement. Le projet AfWN a également suivi cette dernière approche pour construire des wordnets pour les langues indigènes de manière échelonnée mais parallèle. À l'origine, le projet ne comprenait que quatre langues - l'isiZulu, l'isiXhosa, le Setswana et le Sesotho sa Leboa - afin de permettre à l'équipe de gagner en expérience et de mettre en place l'infrastructure pour une expansion ultérieure. Une fois le projet établi et plus de financements obtenus, le Tshivenḑa et plus tard les langues restantes ont été ajoutés. L'équipe s'est également concentrée au départ uniquement sur la fourniture d'exemples d'utilisation pour les synsets de base (comprenant un lemme, une catégorie grammaticale et des étiquettes de domaine) et ce n'est qu'au cours d'une troisième étape de développement qu'elle a commencé à ajouter des définitions aux synsets existants. Certaines langues disposaient de plus de ressources que d'autres et la section suivante donnera un bref aperçu des différentes expériences menées pour utiliser autant de ressources disponibles que possible.

## 2.2 Ressources limitées disponibles pour certaines langues

Comme le rapporte Griesel & Bosch (2014), le développement manuel initial des wordnets était un processus long et fastidieux. Non seulement l'équipe apprenait encore les détails de ce type de développement de ressources linguistiques, mais les linguistes devaient choisir les synsets à traduire sans beaucoup d'aide de ressources électroniques et n'ajoutaient qu'environ 1000 synsets par langue par an. Il était clair que des moyens plus créatifs d'accélérer le développement devraient être mis en œuvre si le projet devait atteindre une taille utile dans un délai pratique. Il est également important de noter à nouveau que presque tous les linguistes et experts linguistiques composant l'équipe AfWN travaillaient sur ce projet à temps partiel. Tout degré d'accélération serait donc également bénéfique pour alléger leur charge de travail.

Une expérience consistait à utiliser des listes de mots bilingues très basiques trouvées sur Internet pour identifier des synsets dans le PWN qui pourraient être inclus dans l'AfWN de manière semi-automatique. Elle impliquait de faire correspondre un terme anglais avec le synset le plus probable du PWN, puis d'extraire les informations anglaises applicables telles qu'une définition, un exemple d'utilisation et des balises de classification de ce synset dans une feuille de calcul avec la traduction en langue africaine du lemme. Les linguistes pouvaient alors facilement traduire ces feuilles avant qu'elles ne soient à nouveau incluses dans la structure du wordnet à la même position que le synset PWN identifié. Griesel & Bosch (2014) donnent un aperçu complet des ressources utilisées pour le Setswana, le Sesotho sa Leboa, le Tshivenḑa, l'isiXhosa et l'isiZulu pour ajouter un peu plus de 8000 nouveaux synsets à l'AfWN.

Malheureusement, cette méthode n'a pas pu être suivie pour toutes les langues, car une ressource de base telle que des listes de mots bilingues numériques librement disponibles n'existe même pas pour toutes les langues sud-africaines. Les linguistes doivent compter uniquement sur leurs propres connaissances, soutenues par des dictionnaires commerciaux (papier) et des bases de données privées. Pour ces équipes linguistiques, travailler en groupes avec une communication constante entre les linguistes était essentiel car ils effectuaient la tâche de développement principalement manuelle.

## 3. La liste SILCAWL

## 3.1 Liste SILCAWL comme alternative aux autres listes de départ

Un autre défi majeur pour le projet AfWN était de décider quels concepts inclure à quel stade de développement. Il peut sembler logique de se déplacer alphabétiquement à travers les données sources anglaises et simplement traduire chaque synset, mais en tenant compte de la capacité disponible dans le projet, cette décision devient moins triviale. Comme mentionné précédemment, le projet dépend fortement des membres de l'équipe à temps partiel et également de la sécurisation de financements pour des périodes de temps limitées. Traduire les 250 000 synsets du PWN prendrait donc des années et l'AfWN ne serait pas très utile pour d'autres applications de TAL tant que la traduction complète de A à Z n'a pas été effectuée. Comme nous le discutons plus tard dans la section 5, de nombreux écarts lexicaux existent entre le PWN et les langues africaines et l'inclusion uniquement des synsets également trouvés dans l'anglais (américain) résulterait en une représentation de sens très plate dans l'AfWN, avec de nombreux concepts uniques au contexte africain étant omis.

Au début du projet AfWN, l'équipe a suivi l'exemple de nombreux autres projets de wordnets tels que le wordnet catalan (Benítez et al. 1998) et le projet IndoWordnet (Prabhu et al. 2012) et a commencé par la traduction des concepts de base communs dits "common base concepts" (CBC ; créés dans le projet BalkaNet). Cette liste est considérée comme le bloc de construction pour les relations sémantiques communes et est dérivée de la comparaison des listes de fréquence pour toutes les langues balkaniques incluses dans ce projet afin de trouver l'ensemble commun de 5 000 concepts à utiliser comme liste de départ (Weisscher, 2013). Cependant, comme discuté dans Griesel et al. (2019), il est rapidement devenu apparent que cette liste eurocentrique ne serait pas idéale pour une utilisation ultérieure dans le projet AfWN, car elle contenait de nombreux concepts qui n'étaient pas lexicalisés dans les langues africaines.

Après de plus amples recherches, l'équipe de développement a décidé d'utiliser le SIL Comparative African Wordlist (SILCAWL), qui a été compilé en 2006 par Keith Snider (SIL International et Institut canadien de linguistique) et James Roberts (SIL Tchad et Université de N'Djaména). Cette liste bilingue anglais-français comprend 1 700 mots compilés après des recherches linguistiques approfondies en Afrique. Une comparaison intéressante entre l'utilité de la CBC et des listes SILCAWL pour l'expansion du AfWN est tirée de Griesel et al. (2019) indiquant que la liste SILCAWL est beaucoup mieux adaptée aux besoins du AfWN. L'amélioration la plus significative est observée dans le contexte de la localisation, où le contenu (des entrées) est lexicalisé dans un environnement africain, évitant ainsi les jeux de données qui pourraient perpétuer des ressources linguistiques culturellement et cognitivement biaisées. Cette liste a donc été utilisée, non seulement pour étendre les cinq langues qui faisaient partie des deux premières phases de développement, mais aussi comme point de départ pour les quatre langues restantes ajoutées lors de la troisième phase la plus récente. Xitsonga, Sesotho, Siswati et isiNdebele incluraient donc comme leurs premiers synsets des entrées de cette liste plus localisée.

## 3.2 Procédure de traduction

Dans un effort pour accélérer le développement, il a été décidé d'ajouter d'abord des définitions et des exemples d'utilisation en anglais (d'Afrique du Sud) à la liste SILCAWL, puis de traduire les données dans les langues africaines. La première étape serait réalisée par un lexicographe anglais et des traducteurs experts plutôt que par notre équipe de projet principale, si possible, permettant aux différentes tâches de s'exécuter simultanément et ainsi de gagner du temps.

La liste SILCAWL ne contient qu'un lemme anglais et un lemme français avec très peu d'informations permettant de désambiguïser le sens impliqué. Afin de maintenir la cartographie du PWN autant que possible, la première étape a été de déterminer quels lemmes sont inclus dans le PWN et d'extraire tous les synsets possibles pour chaque lemme. Chaque synset candidat a ensuite été examiné manuellement par l'équipe de développement et la meilleure représentation possible du sens a été sélectionnée parmi les sens possibles. L'ID PWN, la définition et l'exemple d'utilisation (lorsqu'ils sont disponibles) ont également été ajoutés à la liste SILCAWL. 41 lemmes SILCAWL n'ont cependant pas été trouvés du tout dans le PWN et les définitions ou exemples d'utilisation de nombreux autres lemmes nécessitaient une révision afin de créer un jeu de données anglais standardisé et localisé qui pourrait être traduit dans les langues africaines.

L'équipe de projet, composée de développeurs expérimentés de wordnets après plus de 13 ans dans l'AfWN, a ensuite utilisé les traductions résultantes pour créer des synsets, complétés de relations sémantiques dans WordnetLoom (cf. Naskret et al., 2018), un éditeur de wordnets open source, avec une visualisation élaborée des structures de wordnets. L'équipe du projet continuerait également à travailler en équipes d'au moins deux experts linguistiques pour chaque langue afin d'effectuer une vérification manuelle et une assurance qualité du contenu de l'AfWN tout au long du processus de développement.

Un guide de style AfWN a été élaboré et envoyé à la fois au lexicographe anglais et aux traducteurs des langues africaines. Ce document comprenait des détails sur la traduction et la mise en forme des exemples d'utilisation et des définitions, y compris des lignes directrices sur les aspects suivants :

Aucune majuscule en début de phrase ni ponctuation en fin de phrase ne doit être incluse ;

Une étiquette spécifique devrait être utilisée pour référencer les définitions tirées de la Open Educational Resource Term Bank (OERTB) ;

Exemples de définitions bien formulées et d'exemples d'utilisation;

Un rappel de ne pas inclure d'exemples d'utilisation provenant de sources propriétaires telles que les dictionnaires ;

Le lemme ou le mot d'en-tête d'un synset doit également être inclus dans l'exemple d'utilisation, mais pas dans la définition;

etc.

## 4. Évaluation des traductions

Au cours des discussions avec les linguistes concernant les nouveaux synsets créés à partir de la liste SILCAWL élargie et traduite, de nombreuses préoccupations spécifiques à la langue ainsi que des préoccupations générales ont été soulevées. Les deux catégories de préoccupations les plus notables étaient celles de nature technique où le guide de style n'était pas respecté ou où les champs obligatoires n'étaient pas remplis correctement, ainsi que les questions liées aux différences entre la langue source anglaise et les neuf langues cibles africaines. Quelques exemples de chaque catégorie ainsi que les décisions importantes prises sont discutés ci-dessous.

## 4.1 Erreurs techniques

Smrz (2004) ainsi que Miháltz et al. (2008) décrivent plusieurs façons de réaliser une assurance qualité automatique et semi-automatique sur les wordnets. Ces heuristiques impliquent des contrôles structurels tels que s'assurer que seules les valeurs valides sont saisies dans des champs spécifiés (par exemple pour les domaines POS, SUMO et MILO et les relations sémantiques) qui doivent être renvoyés à un expert de la langue pour révision, ainsi que des contrôles de formatage (par exemple éliminer la majuscule initiale de la phrase ou la ponctuation de fin de phrase) qui pourraient être résolus automatiquement. L'équipe de développement a également commencé des expériences initiales pour incorporer de nombreuses de ces vérifications/corrections dans des requêtes ou scripts SQL simples qui aboutiront à une ressource plus cohésive et standardisée. La figure 1 montre certaines des erreurs de base trouvées dans le wordnet isiZulu, y compris des fautes de capitalisation et de ponctuation, des exemples d'utilisation en double et des exemples d'utilisation en anglais dans le champ de la langue africaine.

p03-01.png

Figure 1. Extraction automatique des erreurs dans le WordNet isiZulu.

Il est envisagé qu'un pipeline de contrôle de la qualité indépendant de la langue puisse être établi pour incorporer ces corrections automatiques et semi-automatiques. Une interface utilisateur simple construite au-dessus d'un tel pipeline pourrait présenter les synsets/champs problématiques à un expert linguistique un par un avec des options pour accepter une correction générée automatiquement ou la rejeter et corriger manuellement les erreurs possibles. La deuxième catégorie d'erreurs, à savoir les décisions spécifiques à la langue, serait plus compliquée à identifier automatiquement et nécessiterait presque toujours une intervention humaine pour être résolue.

## 4.2 Décisions spécifiques à la langue

## 4.2.1 Euphémismes

Les langues africaines utilisent souvent des euphémismes pour désigner les termes tabous, en particulier les termes liés au corps humain. Un tel exemple en xitsonga concerne le concept de « breaking wind/farting » où la traduction biologique serait tamba mais où l'euphémisme préféré est humesa moya - littéralement traduit par « to kill an insect ». Dans isiZulu, le terme biologique pour "clitoris" est umsunu, cependant, ubhontshisi, l'euphémisme signifiant littéralement "haricot", est préféré. Les discussions avec les traducteurs et les experts de wordnet ont clairement montré que, bien que le terme scientifique existe, il est très rarement utilisé et considéré comme un langage vulgaire et inapproprié dans la plupart des contextes. L'équipe a donc décidé d'inclure les deux termes - le tabou et l'euphémisme - avec une étiquette les marquant comme tels dans le wordnet.

## 4.2.2 Lacunes lexicales ou lexicalisations entre l'anglais et les langues africaines

Un exemple typique de lacunes lexicales existant dans le PWN est le système complexe des termes de parenté dans les langues africaines, pour lequel il faut prévoir des dispositions dans l'AfWN. Le tableau suivant fournit quelques exemples qui montrent comment les relations de parenté anglaises « uncle » et « aunt », ainsi que les « in-laws », doivent être étendues pour les langues cibles isiZulu et Sesotho sa Leboa dans l'AfWN (cf. également Griesel et al., 2019) :

p04-01.png

p04-patch01.png

p04-03.png

Tableau 1. Lacunes lexicales entre la langue source anglaise et les langues cibles isiZulu et Sesotho sa Leboa.

En ce qui concerne la lexicalisation dans les langues africaines, un exemple en isiZulu est le verbe finya « blowing the nose ». Cet exemple de lexicalisation empêche le nom ikhala « nez » d'apparaître dans l'exemple d'usage :

1. nose ENG20-05278188-n ikhala "blow your nose after you sneeze" finya emuva kokuthimula

Traduire de l'anglais vers l'isiZulu sans connaissance de la structure du wordnet et de la directive stipulant que l'exemple d'utilisation doit inclure le lemme, résulte en une phrase sémantiquement acceptable mais qui confondrait un utilisateur du wordnet. En d'autres mots, un exemple d'usage plus approprié devrait être suggéré par le linguiste, par exemple

2. "the boxer injured his nose" umlobi wesibhakela walimala ekhaleni lakhe

De nombreux exemples de concepts qui ne sont pas lexicalisés dans les langues africaines ont également été rencontrés. Les linguistes qui ne connaissaient pas bien le développement du wordNet et jugeaient nécessaire de respecter strictement la liste CBC ont alors inclus des descriptions de ces termes comprenant jusqu'à 7 mots comme lemme, plutôt que de choisir un sens PWN plus adapté ou d'omettre complètement le synset dans la langue africaine. Cela a pris un temps précieux et a conduit à la frustration du côté des linguistes car ils étaient constamment occupés à créer de nouvelles descriptions plutôt que d'ajouter des concepts plus fréquemment utilisés au wordnet. Le concept anglais de "complication" (ENG20-13271751-n ; toute maladie ou trouble qui survient au cours de (ou à cause de) une autre maladie) a par exemple été traduit par izinkinga zokugula ezidalwa ukuba khona kokunye ukugula, signifiant littéralement "problèmes de maladie causés par la présence d'une autre maladie".

## 5. Suggestions d'amélioration

Compte tenu des types d'obstacles et des particularités spécifiques à la langue observées tout au long du processus de développement, y compris l'assurance qualité, l'équipe du projet suggère les améliorations suivantes dans le protocole. Certains de ces aspects ont été immédiatement mis en œuvre tandis que d'autres nécessiteront des travaux futurs.

L'une des premières mesures pour améliorer les données traduites afin de mieux s'adapter à l'application wordnet, est de s'assurer que le lexicographe anglais ainsi que les traducteurs de langue africaine sont bien informés sur l'utilisation finale de leur travail. Le guide de style a été élargi pour inclure des instructions mises à jour et des exemples de définitions et d'exemples d'utilisation appropriés. Une section a également été ajoutée sur l'assurance qualité et les types d'erreurs auxquelles il faut prêter une attention particulière. Étant donné que les linguistes travaillent tous à temps partiel dans le projet AfWN, l’équipe s’agrandit constamment pour inclure plus de linguistes ou remplacer ceux qui n’ont plus de temps disponible. L'entraînement continu des nouveaux linguistes à l'aide du guide stylistique étendu est donc également plus efficace.

L'ajout d'une analyse morphologique ou d'une lemmatisation dans le pipeline à des fins d'assurance qualité, par exemple pour vérifier que le lemme ou le mot principal d'un synset est inclus dans l'exemple d'utilisation, nécessite des expérimentations supplémentaires mais réduira considérablement le nombre d'exemples d'utilisation confus. Dans les recherches directes, le lemme ou mot vedette peut facilement être masqué par la flexion et les alternances morphophonologiques, en particulier dans les langues à écriture conjonctive. Par exemple, dans les exemples suivants:

3. isiZulu thigh ENG20-05243922-n ithanga "she has a huge bruise on her thigh" unomhuzuko omkhulu ethangeni lakhe

Le nom ithanga « cuisse » est utilisé à la forme locative dans l'exemple d'usage, à savoir ethangeni.

4. isiXhosa perspire, sweat ENG20-00065374-v bila "exercise makes one sweat" ezemithambo ziyambilisa umntu

Le verbe ziyambilisa « cela fait transpirer » est utilisé avec le suffixe causatif ou l'extension verbale -is-.

En tant qu’objectif futur, l’équipe prévoit également d’inclure des mesures d’assurance qualité (semi) automatiques directement dans l’interface de développement. L'analyse morphologique mentionnée ci-dessus, la correction orthographique, la vérification des champs vides et des catégories autorisées peuvent toutes être effectuées en ligne. Des suggestions/invites avant l'enregistrement peuvent être ajoutées à l'interface en tant qu'étape finale avant qu'un linguiste ne signe sur un synset spécifique. Nous envisageons également d'améliorer l'interface avec une meilleure communication interne afin qu'un linguiste puisse envoyer des commentaires sur un synset directement à un membre de l'équipe pour vérification. Avoir un enregistrement complet des décisions (linguistiques) prises aidera également à améliorer le protocole pour le développement et offrira des informations précieuses aux nouveaux projets wordnet afin qu'il n'y ait pas besoin de "réinventer la roue".

## 6. Conclusion

Toutes les données développées dans le cadre du projet AfWN seront mises à disposition sous une licence Creative Commons via le dépôt de ressources linguistiques SADiLaR, dans l'espoir que cela puisse stimuler le développement du TAL, en particulier pour les langues africaines. Il est important que les utilisateurs des données soient conscients de certaines décisions linguistiques et techniques prises au cours du développement afin qu'ils puissent également prévoir certains aspects dans leurs systèmes.

Étant donné que de nombreux wordNets pour des langues sous-dotées et linguistiquement complexes suivent la méthode d'expansion pour le développement de wordNet et s'appuient fortement sur les données sources anglaises comme dans le PWN, il est en outre important de documenter les lacunes lexicales et les différences applicables entre les langues. Nous espérons qu'en le faisant dans la documentation du projet et dans les publications, nous pouvons faciliter la croissance accélérée de l'AfWN pour inclure des langues d'autres pays africains.

## 7. Remerciements

Le projet African Wordnet (AfWN) a été rendu possible grâce au soutien du South African Centre for Digital Language Resources (SADiLaR), une infrastructure de recherche établie par le Department of Science and Technology du gouvernement sud-africain dans le cadre de la South African Research Infrastructure Roadmap (SARIR).

Les auteurs aimeraient également reconnaître et remercier les linguistes et les membres techniques du projet impliqués dans le projet AfWN. Une liste des contributeurs significatifs est disponible sur la page web du projet (https://africanwordnet.wordpress.com/team/).

## Notes

1 https://www.sadilar.org/

2 Voir Bosch et Griesel (2017) ainsi que Griesel et al. (2019) pour une description détaillée du processus de développement suivi jusqu'à présent.

3 Voir http://www.dblab.upatras.gr/balkanet/

4 Voir http://oertb.tlterm.com/about/

5 Voir https://creativecommons.org/licenses/

## 8. Références bibliographiques

Benítez, L., Cervell, S., Escudero, G., López, M., Rigau, G. and Taulé, M. (1998). Methods and tools for building the Catalan Wordnet. In ELRA (ed.). Proceedings of the First International Conference on Language Resources and Evaluation (LREC'98), Granada, Spain, May 28-30. Available at http://www.cs.upc.edu/~escudero/wsd/98-lrec.pdf.

Bosch, S. and Griesel, M. (2017). Strategies for building wordnets for under-resourced languages: the case of African languages. Literator 38(1), a1351. Available at https://doi.org/10.4102/lit.v38i1.1351

Fellbaum, C. (ed). (1998). Wordnet: An electronic lexical database. The MIT Press, Cambridge, Mass.

Griesel, M. and Bosch, S. (2014). Taking stock of the African Wordnet project: 5 years of development. In Fellbaum, C. et al. (eds.) Proceedings of the Seventh Global WordNet Conference 2014 (GWC2014), pp. 148-153. Tartu, Estonia. Available at http://gwc2014.ut.ee/proceedings_of_GWC_2014.pdf

Miháltz, M., Hatvani, C., Kuti, J., Szarvas, G., Csirik, J., Prószéky, G. and Váradi, T. (2008). Methods and results of the hungarian wordnet project. In: Tanács, A., et al. (eds). Proceedings of the 4th Global WordNet Conference (GWC2008), pp. 311-320. Szeged, Hungary. Available at http://www.inf.u-szeged.hu/projectdirs/gwc2008/

Naskręt, T., Dziob, A., Maciej, P., Maciej, S., Chakaveh and Branco, A. (2018). WordnetLoom - a Multilingual Wordnet Editing System Focused on Graph-based Presentation. In: Fellbaum, C, et al. (eds). Proceedings of Ninth Global WordNet Conference 2018 (GWC2018). Nanyang Technological University (NTU), Singapore. Available at http://compling.hss.ntu.edu.sg/events/2018-gwc/pdfs/gwc-2018-proceedings.pdf

Ordan, N. and Wintner, S. (2007). Hebrew WordNet: A test case of aligning lexical databases across languages. International Journal of Translation, special issue on Lexical Resources for Machine Translation 19(1), 39-58.

Prabhu, V., Desai, S., Redkar, H., Prabhugaonkar, N., Nagvenkar, A. and Karmali, R. (2012). An efficient database design for IndoWordNet development using hybrid approach. Proceedings of the 3rd Workshop on South and Southeast Asian Natural Language Processing (SANLP) at COLING 2012, Mumbai, December, pp. 229-236.

Raffaelli, I., Tadić, M., Bekavac, B. and Agić, Z. (2008). Building Croatian WordNet. In: Tanács, Attila, et al. (eds). Proceedings of the 4th Global WordNet Conference (GWC2008), pp. 311-320. Szeged, Hungary. Available at http://www.inf.u-szeged.hu/projectdirs/gwc2008/

Smrz, P. (2004). Quality Control and Checking for Wordnets Development: A Case Study of BalkaNet. In Romanian Journal of Information Science and Technology Special Issue, volume 7, No. 1-2.

Snider, K. and Roberts, J. (2006). SIL Comparative African Wordlist (SILCAWL). Available at https://www.eva.mpg.de/lingua/tools-at-lingboard/pdf/Snider_silewp2006-005.pdf)

Vetulani, Z., Kubis, M. and Obrębski, T. (2010). PolNet - Polish WordNet: Data and tools. In N. Calzolari, K. Choukri, B. Maegaard, J. Mariani, J. Odijk, S. Piperidis, et al. (eds.), Proceedings of the Seventh International Conference on Language Resources and Evaluation (LREC'10), Valletta, Malta, May 17-23, pp. 3739-3797.

Vossen, P., Bond, F. and McCrae, J. (2016). Toward a truly multilingual GlobalWordnet Grid. In Mititelu, V. et al. (eds.). Proceedings of the Eighth Global WordNet Conference 2016 (GWC2016). Bucharest, Romania. Available at http://www.racai.ro/p/gwc2016/

Weisscher, A. (2013). Global Wordnet Association base concepts. Available at http://globalwordnet.org/gwa-base-concepts/

## 9. Références des ressources linguistiques

Princeton University. (2020). WordNet - A lexical database for English. Available at https://wordnet.princeton.edu/

University of South Africa (UNISA). 2017. Wordnets for isiXhosa (ISLRN 484-200-848-869-7), isiZulu (ISLRN 884-495-382-918-6), Setswana (ISLRN 609-257-955-359-4), Sesotho sa Leboa (ISLRN 639-836-685-202-8) and Tshivenḑa (ISLRN 193-390-599-634-9). African Wordnet Project, distributed via SADiLaR, 1.0. Available at https://repo.sadilar.org/handle/20.500.12185/7/browse?type=project&value=African+Wordnet+Project
