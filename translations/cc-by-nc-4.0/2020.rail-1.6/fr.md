> Machine translation (fr) of "Mobilizing Metadata: Open Data Kit (ODK) for Language Resource Development in East Africa" by Richard Griscom, https://aclanthology.org/2020.rail-1.6/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Mobiliser les métadonnées : Open Data Kit (ODK) pour le développement de ressources linguistiques en Afrique de l'Est

Richard Griscom

**Affiliations**  
Richard T. Griscom  
Leiden University  
Van Wijkplaats 4, 2311 BX Leiden, Netherlands  


## Résumé

Les linguistes de terrain collectent et archivent des métadonnées dans le cadre des ressources linguistiques (RL) qu'ils créent, mais ils travaillent souvent dans des environnements à ressources limitées qui les empêchent d'utiliser des ordinateurs pour la saisie des données. Dans de telles situations, les linguistes doivent accomplir des tâches de numérisation longues et sujettes aux erreurs qui limitent la quantité et la qualité des ressources et des métadonnées qu'ils produisent (Thieberger & Berez 2012; Margetts & Margetts 2012). Cet article décrit une méthode d'entrée de métadonnées linguistiques dans les appareils mobiles à l'aide de la plate-forme Open Data Kit (ODK), une suite d'outils open source conçus pour la collecte de données mobiles. La méthode a été intégrée dans deux projets de documentation linguistique communautaire en Tanzanie, impliquant douze chercheurs collectant simultanément des données dans quatre régions administratives (Griscom & Harvey 2019). Grâce à l'identification des dépendances et des redondances de données propres au projet, un certain nombre d'efficacités ont été intégrées au système de saisie des métadonnées. Celles-ci incluent l'utilisation de vocabulaires fermés, des formulaires de saisie de données uniques pour les différentes catégories de collecteurs de données, et des formulaires séparés pour la saisie des métadonnées des participants et des ressources. Le système qui en résulte sert de base au développement continu d'outils bilingues d'entrée de métadonnées anglais-swahili à usage général, qui seront mis à la disposition d'autres chercheurs travaillant en Afrique de l'Est.

## Mots-clés

métadonnées, ressources linguistiques, Afrique

## 1. Introduction

La collecte de données linguistiques pour soutenir la création de ressources linguistiques (RL) pour les langues africaines indigènes implique souvent de travailler avec des communautés dans des zones où l'accès régulier à l'électricité et à Internet peut être limité. Ces restrictions de ressources amènent souvent les collecteurs de données à utiliser des méthodes basées sur le papier qui produisent des données non numériques devant ensuite être numérisées. La numérisation prend du temps et peut introduire des erreurs supplémentaires dans les données, de sorte qu’une méthode qui supprime la numérisation du flux de travail présente des avantages distincts (Thieberger & Berez 2012: 92; Margetts & Margetts 2012: 16). Les méthodes et outils décrits dans cet article permettent aux collecteurs de données, travaillant individuellement ou en équipe, de créer des métadonnées numériques riches dans des régions éloignées sans avoir besoin d'un ordinateur ou d'une connexion Internet au moment de la création des métadonnées.

## 1.1 Mobilisation des métadonnées de ressources linguistiques

Des métadonnées de haute qualité sont cruciales pour la découverte de ressources (Good 2002), mais aussi pour répondre à des questions de recherche impliquant des informations extra-linguistiques (Kendall 2008; Kendall 2011). Diverses normes de métadonnées existent pour les LR, y compris Text Encoding Initiative (TEI), ISLE Meta Data Initiative (IMDI), et Component MetaData Infrastructure (CMDI), parmi d'autres. Il existe également plusieurs outils de création de métadonnées linguistiques actuellement disponibles, tels que ProFormA2, Arbil, COMEDI, et CMDI-Maker (Fallucchi, Steffen & De Luca 2019). Tous les outils de création de métadonnées actuellement disponibles nécessitent soit un ordinateur, soit une connexion internet stable pour fonctionner correctement.

Le besoin d'un nouveau système de saisie de métadonnées numériques qui ne dépend pas d'un ordinateur ou d'une connexion internet stable est exacerbé lorsque la collecte de données est à grande échelle et menée par plusieurs chercheurs travaillant simultanément dans différentes régions. Ce sont les conditions exactes de deux projets coordonnés et communautaires de documentation linguistique dans le nord de la Tanzanie, financés par le Endangered Languages Documentation Programme (ELDP) : « Gorwaa, Hadza, et Ihanzu : Enquêtes grammaticales dans le Rift tanzanien » (IFP0285) et « Documenting Hadza : contact des langues et variation » (IPF0304). Ensemble, ces projets de deux ans impliquent la participation de 10 chercheurs locaux issus des communautés autochtones Ihanzu et Hadza, répartis dans cinq stations du bassin du lac Eyasi, ainsi que deux chercheurs principaux (PI). La figure 1 montre une carte de la Tanzanie avec l'emplacement de chacune des cinq stations de recherche marqué par un point (Google 2020a).

p01-01.png

Figure 1 : Carte des stations de recherche à l’échelle nationale

Avec chacun des 12 chercheurs devant produire de nouvelles métadonnées chaque semaine pendant une période dépassant un an, la collecte et la numérisation des métadonnées sur support papier n'était pas une option raisonnable. La majorité de la collecte de données pour les deux projets a lieu dans des zones sans électricité ni internet, donc les outils numériques classiques de création de métadonnées ne pouvaient pas être utilisés non plus. Une nouvelle méthode de saisie des métadonnées mobiles était nécessaire.

## 2. Open Data Kit

ODK est une plate-forme logicielle gratuite et open-source pour la collecte et la gestion des données dans des environnements limités en ressources, et il comprend trois applications principales pertinentes pour la collecte de métadonnées linguistiques: ODK Build, une application Web pour la création de formulaires personnalisés pour la saisie de données basée sur la norme XForm, ODK Aggregate, une application serveur Java pour stocker, analyser et exporter des données de formulaire, et ODK Collect, une application Android qui permet la saisie de données directement dans les appareils mobiles. Avec ces trois composants fonctionnant ensemble, les équipes de chercheurs peuvent collecter des données rapidement et simultanément dans des zones éloignées, et toutes leurs données peuvent être compilées ensemble sur un seul serveur. La figure 2 montre un schéma du flux de travail pendant la collecte de données : les collecteurs de données téléchargent leurs données sur un serveur ODK Aggregate depuis leurs appareils mobiles, puis un réviseur de données compile les données et les exporte du serveur pour analyse.

p02-01.png

Figure 2 : Schéma du flux de travail de collecte de données ODK

Les critères suivants ont été jugés cruciaux pour un système de saisie de métadonnées réussi : le retrait de la numérisation du flux de travail de création de métadonnées, la scalabilité afin que le système puisse être utilisé par des équipes de collecteurs de données travaillant indépendamment et simultanément, l'utilisation de la technologie mobile pour permettre la création de métadonnées dans des zones sans électricité, et une plateforme logicielle open source qui rend la méthode accessible à la communauté de recherche.

La suite Open Data Kit (ODK) a été choisie comme plate-forme principale pour la collecte de métadonnées car elle répond à tous les critères ci-dessus. Elle présente également des avantages supplémentaires, notamment un historique établi en tant que plateforme de collecte de données parmi les ONG et les organisations à but non lucratif travaillant en Afrique, le support des formulaires de saisie de données multilingues et la collecte de données géospatiales.

## 3. La méthode de métadonnées linguistiques ODK

Le système de saisie des métadonnées ODK créé pour les projets de documentation linguistique de la communauté Hadza et Ihanzu a été conçu et testé sur une période de quelques mois avant sa mise en œuvre. La méthode a été conçue pour être aussi précise et efficace que possible compte tenu des besoins spécifiques des projets de recherche, et plus tard, les spécificités du système ont servi de base au développement d'outils à usage général.

## 3.1 Identification des besoins en métadonnées

Une première étape dans le développement d'un nouvel outil ou d'une nouvelle méthode est l'identification des valeurs et des desiderata de la recherche (Good 2010). Pour les projets de documentation linguistique en Tanzanie, nos desiderata étaient des métadonnées qui satisfont les exigences de format et de contenu de l'Endangered Languages Archive (ELAR), le dépôt dans lequel les données du projet seront déposées, et des métadonnées qui permettent l'analyse de la variation linguistique et du contact, un axe de recherche du programme.

Les dépôts d'archives pour les projets ELDP hébergés sur ELAR utilisent un profil de métadonnées qui comprend des composantes pour les métadonnées de dépôt, de bundle, de ressource et de participant (Duin et al. 2019). Au total, trois dépôts ont été préparés pour les deux projets ELDP: un pour Ihanzu et deux pour Hadza. Une méthode était donc nécessaire pour spécifier le dépôt approprié pour chaque bundle. Les bundles dans ELAR sont utilisés pour regrouper différents types de ressources et de participants, nous avions donc également besoin d'une méthode qui faciliterait ce regroupement et catégoriserait correctement les ressources et les participants. Les différents types de ressources comprennent des enregistrements audio et vidéo, ainsi que des données textuelles telles que des transcriptions et des traductions. Les deux catégories de participants comprennent les chercheurs et les locuteurs.

Les métadonnées nécessaires pour étudier la variation et le contact linguistiques incluent les métadonnées des ressources telles que le genre de discours, l'interactivité et le lieu de l'acte de parole, ainsi que les métadonnées des participants telles que l'âge, le genre, le parcours éducatif, le lieu et l'historique des lieux, et le parcours linguistique. Tous les formulaires de saisie de données créés pour les projets Hadza et Ihanzu devraient donc incorporer des champs pour la saisie de ces types de métadonnées, et les informations devraient être traitées de manière à pouvoir être facilement récupérées.

## 3.2 Création de formulaires de saisie de métadonnées

Une fois les métadonnées souhaitées identifiées, des formulaires de saisie de métadonnées ont été créés à l'aide d'ODK Build. Un certain nombre d'efficacités ont été intégrées au système de saisie des métadonnées grâce à l'identification des dépendances et des redondances de données propres au projet. Ces efficacités comprenaient l'utilisation de vocabulaires fermés, des ensembles uniques de formulaires pour différentes catégories de collecteurs de données, et la division des formulaires de ressources et de participants.

## 3.2.1 Vocabulaires fermés et ensembles de formulaires

Bien que de nombreux composants du profil de métadonnées ELAR ne soient pas restreints à un ensemble fermé de valeurs possibles, dans le cadre d'un projet de recherche, la valeur de nombreux composants est soit constante (par exemple, langue cible, projet), soit restreinte à un ensemble fermé (par exemple, chercheur, équipement utilisé). Un système de création de métadonnées adapté à un projet spécifique peut donc intégrer ces constantes et ces vocabulaires fermés pour augmenter la vitesse et la précision. Plutôt que de créer un formulaire de saisie de métadonnées unique pour tous les collecteurs de données, qui comprendrait des ensembles de vocabulaire fermés avec des entrées qui n’étaient pas pertinentes pour certains collecteurs de données, nous avons créé trois ensembles de formulaires : un ensemble chacun pour les chercheurs principaux, les chercheurs locaux Hadza et les chercheurs locaux Ihanzu.

En créant trois ensembles distincts de formulaires de saisie de métadonnées, nous avons pu restreindre les ensembles fermés uniquement aux valeurs qui étaient des options viables pour chaque catégorie de collecteur de données. Cela a réduit la probabilité d'erreurs de saisie de données catégorielles et a rendu les formulaires plus faciles à naviguer avec moins d'options à choisir.

## 3.2.2 Métadonnées de session et de locuteur

Les locuteurs participent souvent à la création de plusieurs enregistrements, mais les métadonnées des participants ne sont collectées qu'une seule fois. Pour cette raison, deux formulaires distincts ont été créés pour les métadonnées sur les ressources et les métadonnées sur les participants. Cela a réduit la redondance des données lors de la phase de collecte des données, mais a également introduit la nécessité d'un traitement des données post-collection (voir Section 3.4).

## 3.2.3 Types de champs et organisation

Une variété de différents widgets d'entrée ont été intégrés dans les formulaires ODK, en fonction du type de métadonnées à collecter. Les widgets de texte ouvert ont été utilisés pour les métadonnées qui ne se limitent pas aux vocabulaires fermés, tels que les noms des participants et les emplacements. Des widgets à choix unique ont été utilisés pour les catégories de métadonnées qui constituent des ensembles fermés de valeurs mutuellement exclusives, comme le sexe d'un participant ou le nom du chercheur qui recueille les données. Des widgets de choix multiples ont été utilisés pour les catégories de métadonnées constituées d'ensembles fermés de valeurs non mutuellement exclusives, comme les langues parlées par un participant. Des widgets de date ont été utilisés pour les métadonnées telles que la date d'enregistrement et l'année de naissance du participant, un widget GPS a été utilisé pour récupérer les données géo-spatiales de l'emplacement de l'enregistrement, et un widget photo a été utilisé pour créer des photos des participants à des fins d'identification.

p03-01.png

Figure 3 : Un formulaire pour saisir les métadonnées d'une session d'enregistrement

La figure 3 montre une capture d'écran d'un des formulaires ODK utilisés par les chercheurs locaux. Le widget "Tarehe ya Rekodi" est un widget de date utilisé pour choisir la date d'un enregistrement, les widgets "Jina la Rekodi" et "Jina la Faili" sont des widgets de texte ouvert pour saisir les noms des enregistrements et des fichiers, et le widget "Wilaya Palipoganyika Rekodi" est un widget à choix unique pour choisir le district où un enregistrement a été réalisé. L'astérisque rouge par le nom de chaque widget indique qu'il est nécessaire, et les utilisateurs doivent remplir ces widgets avant de continuer avec le reste du formulaire.

## 3.3 Mise en place du système ODK

L'installation des composants de l'appareil mobile et du serveur du système ODK était simple et ne nécessitait pas d'expertise technique importante. Un serveur ODK Aggregate a été préparé en suivant les instructions étape par étape sur le site web d'ODK (ODK 2017). FreeDNS a été utilisé pour héberger le serveur gratuitement, et Google Cloud Platform a été utilisé pour créer un serveur virtuel (Google 2020b). En raison du faible volume de données, un petit serveur virtuel et un petit disque ont été jugés suffisants (machine virtuelle g1-small et disque persistant standard de 30 Go).

ODK Collect a été installé sur cinq téléphones mobiles Android, achetés localement en Tanzanie. Chaque téléphone a reçu un nom d'utilisateur unique qui identifie l'équipe utilisant l'appareil pour collecter les métadonnées. Les informations d'accès pour le serveur ODK Aggregate ont été stockées dans les paramètres de chaque téléphone et l'ensemble approprié de formulaires de saisie de métadonnées pour chaque téléphone a été téléchargé. Un mot de passe administrateur a été mis en place sur chaque téléphone afin que certaines options, comme la suppression et le téléchargement de nouveaux formulaires, ne soient pas accessibles aux chercheurs locaux.

ODK est préinstallé avec un support pour plusieurs langues d'interface. Pour les chercheurs locaux en Tanzanie, nous avons défini l'interface pour qu'elle s'affiche en swahili, la lingua franca de l'Afrique de l'Est. Nous avons également conçu les formulaires pour qu'ils soient visibles en anglais ou en swahili, et défini le langage par défaut des formulaires en swahili pour les appareils des chercheurs locaux.

p03-02.png

Figure 4 : Des chercheurs locaux s'exercent à utiliser ODK (Crédit photo : Nadia Jassim)

Lors d'un atelier de formation de cinq jours sur la documentation linguistique, tous les chercheurs locaux ont reçu des instructions sur l'utilisation d'ODK pour la création de métadonnées. Les chercheurs locaux se sont entraînés à saisir des données, à enregistrer des formulaires et à les télécharger sur le serveur Aggregate. Au cours de l'entraînement lui-même, certaines modifications mineures ont été apportées aux formulaires, y compris le réordonnancement et la reformulation des questions, sur la base des retours des chercheurs locaux. Après l'entraînement, et une fois la collecte de données lancée, quelques modifications supplémentaires ont été apportées aux formulaires. Par exemple, une question supplémentaire a été ajoutée aux formulaires de métadonnées de la session d'enregistrement pour que les chercheurs locaux et les PIs puissent créer un nom de fichier unique pour chaque enregistrement, qui inclut la date de l'enregistrement au format ISO (AAAAMMJJ), un code de deux lettres pour le chercheur qui a créé l'enregistrement, et un système alphabétique pour organiser les enregistrements en fonction de l'ordre dans lequel ils ont été créés. Ces noms de fichiers sont utilisés pour tous les fichiers de ressources associés à un enregistrement donné. Après que les chercheurs locaux aient éprouvé des difficultés répétées avec la gestion des données, il a été déterminé que l'ajout de la question sur le nom du fichier leur permettrait de regrouper plus facilement les fichiers de ressources après la collecte des données. Les visites de suivi aux stations de recherche ont permis de fournir une rétroaction continue sur la collecte des métadonnées. Les problèmes communs comprenaient des incohérences dans l'orthographe des noms des participants et des malentendus sur les descriptions méta-linguistiques telles que l'interactivité et le genre de la parole. L'erreur la plus fréquente au début était simplement d'oublier de saisir les métadonnées, soit pour une ressource, soit pour un participant.

## 3.4 Traitement des métadonnées

Grâce à la méthode décrite ici, les métadonnées sont entrées dans les appareils mobiles, puis téléchargées sur un serveur ODK Aggregate. Les données de ce serveur peuvent ensuite être exportées sous forme de fichier à valeurs séparées par des virgules (.CSV), ou diffusées en direct vers Google Sheets. Toutes les soumissions pour chaque formulaire peuvent être exportées ensemble. Afin de produire des fichiers de métadonnées dans le format approprié pour l'archivage avec ELAR, les données des fichiers CSV pour les formulaires de métadonnées des participants et des ressources doivent être liées entre elles. Un script Python a été créé pour produire les fichiers de métadonnées finales pour chaque lot à déposer dans ELAR. Un bundle est un groupe de ressources et de participants associés. Le script compile les informations des métadonnées des ressources et des participants et identifie les types de fichiers de ressources associés à chaque session d'enregistrement pour créer un ensemble qui peut être déposé dans ELAR. Par exemple, si une entrée donnée dans les métadonnées de la ressource spécifie que deux participants locuteurs étaient impliqués dans la création de l'enregistrement, alors le script utilise les noms des participants dans les métadonnées de la ressource pour extraire des métadonnées supplémentaires pour ces deux participants locuteurs de leurs entrées correspondantes dans les métadonnées des participants, et le script crée ensuite un fichier de métadonnées regroupées en utilisant les informations extraites.

## 4. Évaluation de la méthode

Les objectifs concurrents d'atteindre un volume de données représentatives et l'accessibilité des données, collectivement décrits par certains comme la «crise de reproductibilité» (Gezelter 2015), peuvent être abordés dans le domaine du travail linguistique sur le terrain d'au moins deux façons: la participation active de la communauté de la parole dans la collecte de données («crowd-sourcing») et l'utilisation stratégique des technologies informatiques («automatisation»). La méthode des métadonnées linguistiques ODK tente d'utiliser les deux solutions et présente un certain nombre d'avantages notables par rapport aux méthodes d'entrée non numériques. La méthode a le potentiel d'augmenter la qualité, la quantité et la cohérence des données linguistiques et des métadonnées déposées dans les archives linguistiques. Elle le fait non seulement en réduisant les goulots d'étranglement de traitement, ce qui permet aux linguistes de passer plus de temps à analyser ou à collecter des données lorsqu'ils seraient autrement en train de numériser manuellement les données, mais aussi en ouvrant la porte à une implication accrue des communautés de locuteurs dans le processus de documentation linguistique, ce qui a été démontré comme bénéfique pour les résultats de la recherche en produisant des ensembles de données linguistiques plus diversifiés et représentatifs (Czaykowska-Higgins 2009). Le système n'est pas sans ses limites, cependant. Comme pour tout système de saisie de métadonnées, les champs de texte libre contiendront encore des erreurs qui doivent être vérifiées soit manuellement, soit par un système automatisé de quelque sorte. Un entraînement supplémentaire et des retours d'information peuvent réduire le taux d'erreur, mais il n'est pas raisonnable de s'attendre à des métadonnées exemptes d'erreurs avec un système qui utilise des champs de texte libres. Les soumissions pour les versions mises à jour des formulaires doivent être compilées manuellement avec les soumissions pour les versions précédentes, au moins dans la version actuelle du logiciel ODK Aggregate. L'importance de cette tâche dépend du volume et du moment des mises à jour apportées aux formulaires. Si les formulaires sont soumis via ODK Collect en utilisant une version précédente qui a depuis été supprimée de l'appareil, alors ces formulaires ne peuvent plus être consultés localement sur l'appareil. Encore une fois, l'importance de cette limitation dépend du volume et du moment des mises à jour. Peut-être la plus grande limitation, cependant, est que la sortie de la suite ODK doit être formatée selon le profil de métadonnées de l'archive linguistique correspondante. Cela nécessite un certain codage et limite donc le bassin de chercheurs capables de concevoir une mise en œuvre spécifique au projet à ceux qui ont des connaissances en codage ou l'accès à quelqu'un ayant ces connaissances.

## 5. Vers un système standardisé

Une manière de réduire la courbe d'apprentissage du système de métadonnées ODK est de développer un ensemble de formulaires à usage général standardisés, basés sur un ou plusieurs profils de métadonnées courants, ainsi qu'un script de traitement accompagnant. Les projets de documentation linguistique de la communauté Hadza et Ihanzu en Tanzanie servent maintenant de base à la création d’un tel ensemble d’outils. Dans un premier temps, ces outils seront basés sur le profil de métadonnées ELAR et limités à des interfaces en anglais et en swahili, ce qui devrait être utile aux chercheurs travaillant avec des communautés de langues en voie de disparition en Afrique de l'Est. À l'avenir, il est prévu d'étendre les outils pour inclure une interface en français et des profils de métadonnées pour d'autres archives linguistiques et dépôts de données courants.

## 6. Conclusion

Le système de métadonnées linguistiques ODK mis à l'essai offre un certain nombre d'avantages par rapport aux méthodes de saisie manuelle des données. La suppression de la numérisation et l'utilisation de vocabulaires fermés augmentent la précision et la rapidité de la saisie des métadonnées. Cela est significatif car cela permet la création de grands ensembles de données représentatifs, qui sont un objectif principal de la documentation linguistique (Himmelmann 1998; Himmelmann 2006; Woodbury 2003). La scalabilité du système ODK permet également aux équipes de collecteurs de données de travailler ensemble, ce qui peut favoriser une plus grande implication de la communauté et la collaboration.

Le système spécialement développé pour les projets de documentation linguistique de la communauté Hadza et Ihanzu s'appuie sur des vocabulaires fermés et des valeurs constantes spécifiques au projet et au dépôt, mais ces spécificités éclairent la conception d'outils de saisie de métadonnées à usage général. On espère que ces outils rendront la possibilité de création de métadonnées numériques une réalité pour les chercheurs travaillant dans les régions reculées de l'Afrique.

## Remerciements

La recherche rapportée dans cet article est soutenue par le Endangered Languages Documentation Programme (ELDP, IPF0304) et le Leiden University Centre for Digital Humanities (LUCDH).

## 7. Références bibliographiques

Czaykowska-Higgins, Ewa. 2009. Research Models, Community Engagement, and Linguistic Fieldwork: Reflections on Working within Canadian Indigenous Communities. Language Documentation and Conservation 3(1). 15-50.

Duin, Patrick, Twan Goosen, Mitchell Seaton, Olha Shkaravska, George Georgovassilis & Jean-Charles Ferrieres. 2019. CMDI Component Registry. CLARIN. https://catalog.clarin.eu/ds/ComponentRegistry/#/.

Fallucchi, Francesca, Hennicke Steffen & Ernesto William De Luca. 2019. Creating CMDI-Profiles for Textbook Resources. In Emmanouel Garoufallou, Fabio Sartori, Rania Siatri & Marios Zervas (eds.), Metadata and Semantic Research, vol. 846,302-314. Cham: Springer International Publishing. doi:10.1007/978-3-030-14401-2_28. http://link.springer.com/10.1007/978-3-030-14401-2_28 (13 February, 2020).

Gezelter, Daniel J. 2015. Open Source and Open Data Should Be Standard Practices. The journal of physical chemistry letters 6(7). 1168-1169.

Good, Jeff. 2002. A Gentle Introduction to Metadata. http://www.language-archives.org/documents/gentle-intro.html.

Good, Jeff. 2010. Valuing technology: Finding the linguist's place in a new technological universe. Language Documentation, Practice and values. Amsterdam: John Benjamins.

Google. 2020. Google Cloud Platform. https://cloud.google.com.

Griscom, Richard T. & Andrew Harvey. 2019. Gorwaa, Hadza, and Ihanzu: Language contact, variation, and grammatical inquiries in the Tanzanian Rift. Presented at the East Africa Day Leiden, Leiden. https://doi.org/10.5281/zenodo.3509475.

Himmelmann, Nikolaus P. 1998. Documentary and descriptive linguistics. Linguistics 36. 161-195.

Himmelmann, Nikolaus P. 2006. Language documentation: What is it and what is it good for? In Jost Gippert, Nikolaus P. Himmelmann & Ulrike Mosel (eds.), Essentials of Language Documentation. Berlin: Mouton de Gruyter.

Kendall, Tyler. 2008. On the History and Future of Sociolinguistic Data. Language and Linguistics Compass 2(2). 332-351. doi:10.1111/j.1749-818X.2008.00051.x.

Kendall, Tyler. 2011. Corpora from a sociolinguistic perspective. Revista Brasileira de Linguística Aplicada 11(2). 361-389. doi:10.1590/S1984-63982011000200005.

Margetts, Anna & Andrew Margetts. 2012. Audio and video recording techniques for linguistic research. The Oxford Handbook of Linguistic Fieldwork. Oxford University Press.

ODK. 2017. Getting Started With ODK. https://docs.opendatakit.org/getting-started/#install-aggregate-optional.

Thieberger, Nicholas & Andrea L. Berez. 2012. Linguistic Data Management. The Oxford Handbook of Linguistic Fieldwork. Oxford University Press.

Woodbury, Anthony C. 2003. Defining Documentary Linguistics. Language Documentation and Description, vol. 1. London: Hans Rausing Endangered Languages Project.
