> Machine translation (fr) of "Preparing the Vuk’uzenzele and ZA-gov-multilingual South African multilingual corpora" by Richard Lastrucci, Isheanesu Dzingirai, Jenalea Rajab, Andani Madodonga, Matimba Shingange, Daniel Njini, Vukosi Marivate, https://aclanthology.org/2023.rail-1.3/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Préparation des corpus multilingues sud-africains Vuk'uzenzele et ZA-gov-multilingual

Richard Lastrucci, Isheanesu Dzingirai, Jenalea Rajab, Andani Madodonga, Matimba Shingange, Daniel Njini, Vukosi Marivate

**Affiliations**  
Richard Lastrucci1, Isheanesu Dzingirai1, Jenalea Rajab2, Andani Madodonga1,  
Matimba Shingange1, Daniel Njini1, Vukosi Marivate1,3  
1Department of Computer Science, University of Pretoria  
2School of Computer Science and Applied Mathematics, University of the Witwatersrand  
3Lelapa AI  
, , ,  
, , 

## Résumé

Cet article présente deux corpus multilingues à thème gouvernemental dans diverses langues sud-africaines. Les corpus ont été collectés en rassemblant le journal gouvernemental sud-africain (Vuk'uzenzele), ainsi que les discours du gouvernement sud-africain (ZA-gov-multilingual), qui sont traduits dans les 11 langues officielles sud-africaines. Les corpus peuvent être utilisés pour une myriade de tâches de TAL en aval. Les corpus ont été créés pour permettre aux chercheurs d'étudier le langage utilisé dans les publications du gouvernement sud-africain, en mettant l'accent sur la compréhension de la façon dont les fonctionnaires sud-africains communiquent avec leurs électeurs.

Dans cet article, nous mettons en avant le processus de collecte, de nettoyage et de mise à disposition des corpus. Nous créons des corpus de phrases parallèles pour des tâches de traduction automatique neuronale (NMT) en utilisant des embeddings LASER (Language-Agnostic Sentence Representations). Avec ces phrases alignées, nous fournissons ensuite des benchmarks de NMT pour 9 langues indigènes en ajustant finement un modèle de langage pré-entraîné massivement multilingue.

## 1 Introduction

L'avancement de la recherche en traitement automatique du langage naturel (TALN) en Afrique est entravé en raison de la rareté des données pour l'entraînement de modèles pour diverses tâches de TALN (Nekoto et al., 2020) ainsi que de la disponibilité de benchmarks et des moyens de les reproduire (Martinus et Abbott, 2019). Pour de nombreuses langues sud-africaines, il existe encore des défis pour trouver des jeux de données textuels facilement disponibles (Marivate et al., 2020) même s'il y a de nombreux locuteurs pour ces langues (Ranathunga et de Silva, 2022). Il est nécessaire de se concentrer sur le développement de ressources de TAL en langues locales (Joshi et al., 2020).

Cet article s'appuie sur les travaux d'Autshumato (Groenewald et Fourie, 2009 ; Groenewald et du Plooy, 2010) en créant des corpus parallèles automatiquement alignés à partir de données textuelles gouvernementales dans les 11 langues officielles d'Afrique du Sud. Alors que le projet Autshumato s'est concentré sur la création d'outils de traduction automatique pour cinq langues autochtones, les corpus qui en ont résulté manquaient d'informations sur leur origine ou leur contexte, ce qui limitait leur utilité pour d'autres tâches de TAL telles que la catégorisation, la modélisation thématique dans le temps et d'autres tâches nécessitant des informations contextuelles sur le contenu. Notre approche fournit des données plus complètes qui peuvent prendre en charge un éventail plus large d'applications de TAL.

Notre conviction est qu'il existe une opportunité significative de créer un processus de collecte de données plus convivial, facilement maintenable et offrant des outils d'extraction pour les autres. Il est essentiel de préserver la source des données et de la structurer de manière à permettre des extensions. Notre objectif est d'améliorer les ressources de Traduction Automatique Neuronale (NMT) dans le domaine des données gouvernementales en incluant toutes les langues indigènes et en élargissant les directions de traduction au-delà de l'anglais comme langue source. De plus, nous reconnaissons l'importance de fournir des données alignées pour toutes les langues sud-africaines au-delà de l'anglais.

En outre, cet article présente des ensembles de données de corpus parallèles dans les 11 langues officielles de l'Afrique du Sud, créés à partir de données textuelles obtenues du gouvernement. Ces ensembles de données sont conçus pour faciliter le développement de modèles NMT. Les corpus sont alignés automatiquement, et devraient servir de ressource précieuse pour les chercheurs et les praticiens travaillant dans le domaine de l'apprentissage automatique.

Les corpus parallèles ont été générés à l'aide des encodeurs LASER (Schwenk et Douze, 2017), facilitant l'alignement un-à-un des données de phrases tokenisées. Les données provenaient de sources fiables telles que les journaux et les revues académiques et couvraient divers sujets, notamment la santé, la finance et la politique.

Nous fournissons également des benchmarks de NMT pour les corpus parallèles en ajustant finement un modèle massivement multilingue (M2M100 (Fan et al., 2021)) en nous appuyant sur les travaux de Adelani et al. (2022).

Le présent document est structuré comme suit. Dans la section suivante, nous détaillons les ensembles de données que nous avons compilés, y compris leur méthodologie de compilation et les informations qu'ils contiennent. Nous décrivons ensuite comment nous avons aligné et créé des corpus parallèles en utilisant ces ensembles de données. La section suivante présente nos expériences de NMT et fournit une analyse des résultats obtenus. Enfin, nous concluons le document avec nos conclusions et formulons des recommandations pour de futures recherches.

## 2 jeux de données principaux

## 2.1 Le Corpus multilingue sud-africain Vuk'uzenzele

L'ensemble de données Vuk'uzenzele a été construit à partir des éditions du magazine gouvernemental sud-africain Vuk'uzenzele. Étant un magazine, le texte se concentre principalement sur les événements actuels, la politique, le divertissement et d'autres sujets liés à une publication de magazine. Le jeu de données Vuk'uzenzele offre une vue d'ensemble de la langue et des sujets de discussion en Afrique du Sud durant la période respective, donnant aux chercheurs un aperçu de l'histoire et de la culture de l'Afrique du Sud. L'ensemble de données Vuk'uzenzele est donc une riche ressource pour tout chercheur souhaitant analyser la politique sud-africaine, les événements actuels et la culture populaire.

## 2.1.1 Création de Vuk'uzenzele

Les données brutes de Vuk'uzenzele sont extraites des éditions PDF du magazine. L'édition principale de Vuk'uzenzele est en langue anglaise. Seuls quelques-uns de ces articles en anglais sont traduits dans les 10 autres langues officielles sud-africaines (Afrikaans, isiNdebele, isiXhosa, IsiZulu, Sepedi, Sesotho, siSwati, Tshivenda, Xitsonga et Setswana). Ainsi, nous avons créé un pipeline pour identifier quels articles devaient être extraits de chaque PDF linguistique d’une édition spécifique. Les articles individuels ont été extraits et placés dans des fichiers texte. Les fichiers texte extraits présentent encore quelques défis dus à l’extraction PDF. Pour le nettoyer, un membre de l'équipe parcourt chaque fichier texte extrait et le formate comme suit :

Ligne 1 : Titre de l'article (dans la langue)

Ligne 2: ligne vide

Ligne 3 : Auteur de l'article (si disponible. Sinon, la valeur par défaut est Vukuzenzele Unnamed)

Ligne 4: ligne vide

Ligne 5-fin : corps de l'article

Les données sont plus faciles à analyser et à visualiser après avoir été revues manuellement. L'effort intensif en main-d'œuvre était nécessaire pour fournir une analyse complète et significative du contenu du magazine. Le processus long et fastidieux de revue et d'extraction manuelle en valait finalement la peine, car il offre l'opportunité de créer une compréhension plus approfondie du contenu de Vuk'uzenzele. Au moment de la rédaction, nous avons 53 éditions du journal couvrant la période allant de janvier 2020 à juillet 2022. D'autres ajouts seront ajoutés dans le temps par l'équipe. Des automatisations ont été mises en place pour télécharger et archiver les PDF, mais un effort manuel est encore nécessaire pour extraire et identifier les articles traduits. Le jeu de données, le code et les outils d'extraction automatisés sont disponibles à l'adresse https://github.com/dsfsi/vukuzenzele-nlp et sur Zenodo (Marivate et al., 2023a). Nous le mettons à disposition dans un format qui permet à d'autres chercheurs de l'étendre, de le remixer et d'y ajouter des éléments (licence CC-4.0-BY-SA pour les données et licence MIT pour le code).

## 2.2 Le corpus sud-africain multilingue ZA-Gov

Le jeu de données du corpus multilingue ZA-Gov a été construit à partir des discours suivant les réunions du cabinet du gouvernement sud-africain. Ainsi, le jeu de données couvre une variété de sujets, notamment l'énergie, le travail, la prestation de services, la criminalité, la COVID, les relations internationales, l'environnement, ainsi que les affaires gouvernementales telles que les nominations gouvernementales, les décisions du cabinet, etc. Cela offre un aperçu du fonctionnement du gouvernement sud-africain et de la manière dont il a traité divers défis, tant internes qu'externes.

## 2.2.1 Création de ZA-Gov-multilingue

Les données brutes ZA-Gov Multilingual sont extraites du site web du gouvernement sud-africain (https://www.gov.za/), où toutes les déclarations du cabinet et leurs traductions sont publiées. Les données ont été extraites et structurées dans un format JSON. La charge utile JSON de chaque discours enregistre :

Date,

Datetime,

Titre (en anglais),

Url (url principale du discours),

Charge utile linguistique pour chaque langue (eng, afr, nbl, xho, zul, nso, sep, tsn, ssw, ven, tso).

Titre (en langue),

Texte (en langue),

Url (pour la traduction).

Cette structure permet aux chercheurs et analystes d'effectuer facilement diverses tâches de traitement automatique des langues, d'exploration de données et d'apprentissage automatique telles que l'analyse de sentiments, la modélisation thématique, la catégorisation, la modélisation du langage et plus encore. Par exemple, grâce à l'analyse des sentiments et à l'exploration de texte, les analystes peuvent étudier les opinions sur les déclarations des membres du cabinet et suivre l'évolution de ces sujets au fil du temps. Au moment de la rédaction, l’ensemble de données contient 162 déclarations du Cabinet couvrant la période du 2 mai 2013 au 1er décembre 2022. Le jeu de données se mettra à jour automatiquement lorsque de nouvelles déclarations traduites seront disponibles sur le site gov.za. Le jeu de données, le code et les robots d'extraction automatisés sont disponibles à l'adresse https://github.com/dsfsi/gov-za-multilingual et Zenodo (Marivate et al., 2023b). Nous le mettons à disposition de manière à ce que d'autres chercheurs puissent l'étendre, le remixer et y ajouter des éléments (licence CC-4.0-BY-SA pour les données et licence MIT pour le code).

## 3 Les corpus comme fondement pour d'autres tâches de TAL et pour des études ultérieures

En plus de soutenir la création de modèles NMT (abordés dans la section précédente), nos jeux de données ont le potentiel de servir de base à de nombreuses autres tâches de TAL au-delà de la traduction. Nous croyons que ces jeux de données seront une ressource précieuse pour l'étude de la communication gouvernementale sud-africaine, et qu'ils peuvent être utilisés pour la création directe de catégorisation/classification de documents multilingues (Schwenk et Li, 2018), de simplification (Lu et al., 2021; Siddharthan, 2014; Martin et al., 2022), d'extraction d'entités (Tedeschi et al., 2021; Chen et al., 2018; Pappu et al., 2017; Emelyanov et Artemova, 2019), et d'autres tâches de TAL. Pour étendre davantage l'utilité du jeu de données, nous recommandons d'examiner des travaux tels que le Parallel Meaning Bank (Abzianidze et al., 2017), qui peut servir d'inspiration pour transférer des connaissances d'une langue à une autre et fournir de nouveaux benchmarks qui pourraient être utiles pour les langues d'Afrique australe au-delà de l'Afrique du Sud. Nous envisageons ces jeux de données comme un point de départ pour des recherches supplémentaires dans le domaine du TAL multilingue pour les langues sud-africaines et africaines.

## 4 Méthodes de traitement et de compilation

Les ensembles de données sont un corpus parallèle bidirectionnel des 11 langues officielles de l'Afrique du Sud, qui sont énumérées dans le tableau 1 avec leur code ISO 639-2 correspondant. Les ensembles de données contiennent des textes rédigés dans les langues officielles d'Afrique du Sud, y compris l'afrikaans, l'anglais, l'isiNdebele, l'isiXhosa, l'isiZulu, le siSwati, le Sepedi, le Xitsonga, le siSwati, le Tshivenda, et le Setswana. Ainsi, il existe 55 façons de combiner ces langues en paires, produisant 55 corpus distincts dans chacun des ensembles de données. Le jeu de données utilise les codes de langue ISO 639-2 dans sa convention de nommage, c'est-à-dire 'aligned-afr-zul.csv'. Par nature de compilation, certains ensembles de données ont plus d'observations que d'autres, ce qui pourrait conduire à des résultats variables, c'est-à-dire, si utilisé pour NMT, alors un meilleur modèle peut être produit pour deux langues à partir d'un ensemble de données avec plus d'observations par opposition à un avec moins d'observations. Cette compilation de données permet une exploration plus approfondie des complexités de la langue et du discours sud-africains, créant une représentation multidimensionnelle de l'utilisation et de l'interprétation de la langue en Afrique du Sud. Grâce à ces ensembles de données, la gamme d'utilisation des langues en Afrique du Sud peut être explorée, fournissant des informations sur la manière dont les différentes langues interagissent.

Tableau 1 : Liste des langues avec codes ISO 639-2

p03-01.png

## 4.1 Prétraitement

Un prétraitement était nécessaire pour affiner les données brutes extraites avant le codage et l'alignement LASER. Les étapes de prétraitement sont listées ci-dessous et diffèrent légèrement car les données sources et la méthode de moissonnage ont un impact sur les données obtenues. Par exemple, ZA-Gov-Multilinguals implique beaucoup de points imbriqués, c'est-à-dire 2.1.2, qui devaient être supprimés, alors qu'en revanche les données de Vuk'uzenzele utilisent des puces pour la liste.

## 4.1.1 Vuk'uzenzele

Le texte brut issu des données collectées a été pré-traité de la manière suivante :

Le texte a été mis en minuscules.

Les traits d'union et les puces ont été supprimés.

Les espaces doubles, les tabulations et les sauts de ligne ont été remplacés par un espace simple.

L'apostrophe standard, c'est-à-dire ", a pris la place des apostrophes Unicode.

## 4.1.2 ZA-Gov-multilingue

Le texte brut issu des données collectées a été pré-traité de la manière suivante :

Supprimer les points (ou les nombres à un ou plusieurs chiffres) qui commençaient une ligne

Insérer un point après une série de nombres au format x · y.

Ajouter un point après une chaîne de nombres au format x.

Remplacer une séquence de signes de ponctuation, tels qu'un point, deux-points, point-virgule ou une combinaison de ceux-ci, suivie d'une lettre avec un seul point.

## 4.2 Alignement de corpus

Une fois pré-traité, le texte a été transmis au tokeniseur "punkt" de NLTK qui retourne un vecteur de jetons de phrase. Les n phrases tokenisées ont été envoyées à l'encodeur LASER qui les encode en n vecteurs de phrases, chacun de longueur 1024. Les vecteurs de phrase sont comparés et un algorithme de similarité cosinus a été effectué pour produire un score de 0 à 1 sur la similarité des deux vecteurs comme décrit dans la section 4.2.1.

## 4.2.1 Encodages LASER

Afin de comparer le texte pour la similitude, des encodeurs LASER ont été utilisés. LASER, qui signifie Language-Agnostic Sentence Representations, est un projet de recherche de Facebook AI Research. LASER génère des représentations de phrases en codant les phrases dans un vecteur. Les vecteurs servent de représentation machine de la phrase. Les vecteurs peuvent être comparés à l'aide de la similarité cosinus qui produit un score compris entre zéro et un. Les scores cosinus plus proches d'un indiquent une forte similarité. Ce score est enregistré dans les jeux de données LASER (disponibles dans le dépôt de jeux de données). Les observations présentes dans chaque ensemble de données avec un score supérieur à 0,65, ou une similitude de 65 %, sont énumérées dans les tableaux 2 et 3 suivants. Des tableaux complets présentant le nombre d'observations présentes dans tous les ensembles de données sont présentés dans les fichiers README des dépôts d'ensembles de données, https://github.com/dsfsi/gov-za-multilingual pour ZA-Gov-Multilingual et https://github.com/dsfsi/vukuzenzele-nlp pour Vuk'uzenzele.

Tableau 2 : Les dix ensembles de données comptant le plus grand nombre d'observations avec un score de cosinus supérieur ou égal à 0,65 à Vuk'uzenzele.

p04-01.png

Tableau 3 : Les dix ensembles de données ayant le plus d’observations avec un score de cosinus supérieur ou égal à 0,65

p04-02.png

## 4.3 Post-traitement

Pour les jeux de données LASER, la phrase source, la phrase cible et le score cosinus des données alignées ont été écrits dans un fichier csv avec la convention de nommage « aligned-{src_lang_code}-{tgt_lang_code}.csv », c.-à-d. « aligned-afr-zul.csv ». Reportez-vous à la liste des langues dans 1 pour connaître les codes linguistiques utilisés pour nommer les ensembles de données.

Pour les ensembles de données alignés simples, la phrase source et la phrase cible ont été écrites dans un fichier csv avec la même structure de nommage que les ensembles de données LASER.

## 5 Bancs d'essai NMT

Les corpus de phrases alignés minimaux, pour les langues africaines à faibles ressources, entravent la qualité des modèles de NMT entraînés à partir de zéro (Martinus et Abbott, 2019; Nekoto et al., 2020; Adelani et al., 2022). Récemment, Adelani et al. (2022) ont abordé ce problème en ajustant finement des modèles massivement multilingues, y compris le modèle M2M100 (Fan et al., 2021), sur un petit nombre de phrases alignées. Le modèle M2M100 est un modèle de langage plusieurs-à-plusieurs non centré sur l'anglais, entraîné pour traduire directement entre 100 langues, dont cinq langues officielles sud-africaines (Fan et al., 2021). Adelani et al. (2022) ont démontré comment tirer efficacement parti de ce modèle pour de petites quantités de données, afin de créer des systèmes de NMT pour les langues et les domaines non inclus dans le pré-entraînement.

En nous appuyant sur leurs travaux, nous créons des bancs d'essai de traduction de référence pour les jeux de données Vuk'uzenzele et ZA-gov-multilingual, dans le domaine des publications gouvernementales, en procédant à l'ajustement fin du modèle M2M100. Pour fournir nos résultats dans le contexte et à des fins de comparaison, nous avons également affiné le modèle M2M100 sur des sous-ensembles du corpus parallèle Autshumato existant obtenu du Centre sud-africain pour les ressources linguistiques numériques (McKellar, (2021,2,2,2,0,2) (https://sadilar.org). Nous concentrons nos efforts sur la fourniture de repères NMT pour les langues africaines à faible ressource dans les ensembles de données, car ces traductions en afrikaans ne sont pas incluses en raison de la disponibilité relativement élevée des ensembles de données numériques dans cette langue, et nous laissons cela pour des travaux futurs.

## 5.1 Prétraitement

Les ensembles de données alignés ont été traités pour supprimer les doublons et les traductions contradictoires (dans les phrases source et cible), puis mélangés pour éliminer tout biais d'ordre avant la création des ensembles d'entraînement, de test et de développement. La répartition des données est définie comme suit : 70 % pour l'entraînement, 20 % pour les tests et 10 % pour les ensembles de développement. À titre de comparaison, tous les modèles sont ajustés en utilisant la direction de traduction 'xxx-eng' où 'xxx' représente la langue source africaine indigène et 'eng' est la cible de traduction en anglais.

Les corpus parallèles Aushumato disponibles (extraits de diverses ressources gouvernementales et de web-crawls (Groenewald et Fourie, 2009)) sont comparables en domaine aux corpus parallèles ZA-gov-multilingual créés, cependant les tailles des jeux de données sont actuellement beaucoup plus grandes. Nous extrayons donc le même nombre pour les phrases alignées pré-traitées que les corpus ZA-gov-multilingual dans la direction de traduction 'xxx-eng', pour la comparaison directe des résultats NMT. Les comptages de phrases et de jetons des corpus utilisés pour le benchmarking de la NMT sont fournis dans les tableaux 5, 6 et 7 de l'annexe A.1.

## 5.2 Résultats

Les résultats du benchmark de réglage fin M2M100 pour le Vuk'uzenzele, ZA-gov-multilingual et les sous-ensembles des corpus parallèles Autshumato disponibles sont présentés dans le tableau 4. Les directions de traduction d'ajustement fin sont fournies, et les langues sources qui n'étaient pas incluses dans le pré-entraînement original de M2M100 sont mises en évidence à des fins de référence. De plus, le score BLEU le plus élevé obtenu sur l'ensemble des ensembles de données est affiché en caractères gras. Les cas où les corpus parallèles Autshumato n'étaient pas accessibles ou n'existaient pas pour une langue particulière sont indiqués par un symbole '-'.

Tableau 4 : Scores BLEU pour le transfert massivement multilingue sur les traductions xxx-eng en utilisant Vuk'uzenzele (Vuk.), ZA-gov-multilingual (Gov.) et des sous-ensembles des jeux de données Autshumato disponibles (Aut.)

p05-01.png

Le réglage fin sur les ensembles de données Vuk'uzenzele a donné les scores BLEU globaux les plus faibles, ce qui est attendu en raison de la petite taille des ensembles de données alignés en comparaison de ceux des ensembles de données ZA-gov-multilingual et Autshumato. Les scores BLEU les plus élevés sont répartis de manière incohérente entre les modèles ZA-gov-multilingual et Autshumato NMT, les modèles ZA-gov-multilingual atteignant un score plus élevé pour Setswana, Xitsonga et isiZulu. Cela pourrait être dû aux sélections aléatoires de sous-ensembles des jeux de données Autshumato, ainsi qu'à une conséquence des variations dans les combinaisons de sources et les méthodes de nettoyage utilisées par le projet Autshumato lors de la création des corpus alignés. Il est noté que des variations dans les sélections de sous-ensembles donneront des résultats différents et une analyse approfondie est laissée pour les travaux futurs.

Nous obtenons le résultat de référence le plus élevé pour le Xitsonga ('tso-eng') dans tous les ensembles de données, qui est une langue sur laquelle le modèle M2M100 n'a pas été pré-entraîné, démontrant l'efficacité de l'apprentissage par transfert pour les nouveaux ensembles de données linguistiques à faibles ressources.

Il est également noté que les ressources NMT actuelles pour les ensembles de données Autshumato n'existent que dans la direction de traduction 'eng-xxx' pour Xitsonga, Setswana, Sepedi, Sesotho et isiZulu (Skosana et Mlambo, 2021). Nos contributions étendent donc les ressources de référence de traduction (dans le domaine des données gouvernementales) à l'isiNdebele, l'isiXhosa, le siSwati et le Tshivenda ; et élargissent la direction de traduction au-delà de l'anglais comme langue source.

## 6 Conclusion

Enfin, ce document a présenté deux corpus multilingues qui sont automatiquement alignés pour faciliter la traduction des textes entre les langues. Ces jeux de données contribuent à une collection croissante de corpus pour l'entraînement de modèles NMT de langues africaines qui sont laissés de côté ou sous-dotés dans la recherche contemporaine en TAL. Les auteurs espèrent que ces ensembles de données aideront à créer des modèles NMT pour les langues africaines à faibles ressources et que ces modèles pourront être utilisés pour faciliter l’accès aux services de traduction, permettant ainsi aux locuteurs et aux écrivains africains de communiquer plus efficacement dans leur langue maternelle. Il est également espéré que les jeux de données feront progresser la recherche en TAL sur le multilinguisme des langues africaines et contribueront à une compréhension des divers dialectes présents en Afrique.

## 7 Limites

Les modèles de NMT discutés ont été créés pour comparer les ensembles de données décrits et n'ont pas été exhaustivement testés en termes de qualité à des fins de production. Nous n’avons également testé l’efficacité de l’ajustement du modèle M2M100 qu’avec l’anglais comme langue cible et n’avons pas étendu les systèmes NMT aux traductions entre les langues indigènes sud-africaines. Par conséquent, d’autres tests comparatifs doivent encore être mis en œuvre. Nous aimerions étendre les tests pour inclure l'ensemble d'évaluation créé par (McKellar et Puttkammer, 2020), qui contient des données (exclues des corpus Autshumato) pour les 11 langues officielles sud-africaines et pourrait fournir une comparaison plus précise des modèles NMT. Il est noté que bien que les résultats des scores BLEU soient prometteurs, une analyse linguistique qualitative doit encore être effectuée sur les modèles de traduction pour déterminer si les scores BLEU pour certaines traductions de langues (c'est-à-dire 'tso-eng') correspondent à des traductions précises dans notre domaine. Dans le cadre de nos travaux futurs, nous espérons collaborer avec des linguistes respectifs pour améliorer la qualité et l’efficacité de ces systèmes NMT pour les langues sud-africaines (Skosana et Mlambo, 2021).

## 8 Déclaration éthique

Les jeux de données créés et utilisés pour les benchmarks des modèles de traduction proviennent exclusivement de ressources gouvernementales sud-africaines. Par conséquent, il est souligné que si ces modèles sont utilisés dans la production, ils pourraient ignorer certaines structures sociales / sociétales et seront représentatifs du parti politique dominant au moment de la source des ensembles de données (Bender et al., 2021). Nous notons également que les modèles et jeux de données de référence n'ont pas été curatés pour déterminer les biais éventuellement présents. Ainsi, les biais existants dans le système pourraient avoir le potentiel de nuire à des groupes spécifiques, lorsqu'ils sont utilisés dans des tâches de production en aval de traitement automatique du langage naturel (Bender et al., 2021).

## 9 Remerciements

Nous aimerions reconnaître le financement de la Chaire ABSA de Data Science, le programme de bourses de recherche Google, la subvention TensorFlow pour le Machine Learning Grant et la subvention matérielle de la NVIDIA Corporation. Nos sincères remerciements à tous les évaluateurs anonymes de RAIL pour leurs précieux retours.

## Notes

1 https://www.vukuzenzele.gov.za/

2 https://doi.org/10.5281/zenodo.7598539

3 https://doi.org/10.5281/zenodo.7635167

## Références

Lasha Abzianidze, Johannes Bjerva, Kilian Evang, Hessel Haagsma, Rik van Noord, Pierre Ludmann, DucDuy Nguyen, and Johan Bos. 2017. The parallel meaning bank: Towards a multilingual corpus of translations annotated with compositional meaning representations. In Proceedings of the 15th Conference of the European Chapter of the Association for Computational Linguistics: Volume 2, Short Papers, pages 242-247.

David Adelani, Jesujoba Alabi, Angela Fan, Julia Kreutzer, Xiaoyu Shen, Machel Reid, Dana Ruiter, Dietrich Klakow, Peter Nabende, Ernie Chang, Tajuddeen Gwadabe, Freshia Sackey, Bonaventure F. P. Dossou, Chris Emezue, Colin Leong, Michael Beukman, Shamsuddeen Muhammad, Guyo Jarso, Oreen Yousuf, Andre Niyongabo Rubungo, Gilles Hacheme, Eric Peter Wairagala, Muhammad Umair Nasir, Benjamin Ajibade, Tunde Ajayi, Yvonne Gitau, Jade Abbott, Mohamed Ahmed, Millicent Ochieng, Anuoluwapo Aremu, Perez Ogayo, Jonathan Mukiibi, Fatoumata Ouoba Kabore, Godson Kalipe, Derguene Mbaye, Allahsera Auguste Tapo, Victoire Memdjokam Koagne, Edwin Munkoh-Buabeng, Valencia Wagner, Idris Abdulmumin, Ayodele Awokoya, Happy Buzaaba, Blessing Sibanda, Andiswa Bukula, and Sam Manthalu. 2022. A few thousand translations go a long way! leveraging pre-trained models for African news translation. In Proceedings of the 2022 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pages 3053-3070, Seattle, United States. Association for Computational Linguistics.

Emily M. Bender, Timnit Gebru, Angelina McMillanMajor, and Shmargaret Shmitchell. 2021. On the dangers of stochastic parrots: Can language models be too big? In Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency, FAccT '21, pages 610-623, New York, NY, USA. Association for Computing Machinery.

Muhao Chen, Yingtao Tian, Kai-Wei Chang, Steven Skiena, and Carlo Zaniolo. 2018. Co-training embeddings of knowledge graphs and entity descriptions for cross-lingual entity alignment. arXiv preprint arXiv: Arxiv-1806.06478.

Anton A. Emelyanov and E. Artemova. 2019. Multilingual named entity recognition using pre-trained embeddings, attention mechanism and ncrf. BSNLP@ACL.

Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky, Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, et al. 2021. Beyond english-centric multilingual machine translation. Journal of Machine Learning Research, 22(107):1-48.

Hendrik J Groenewald and Liza du Plooy. 2010. Processing parallel text corpora for three south african language pairs in the autshumato project. AfLaT 2010, page 27.

Hendrik Johannes Groenewald and Wildrich Fourie. 2009. Introducing the autshumato integrated translation environment. In Proceedings of the 13th Annual conference of the European Association for Machine Translation.

Pratik Joshi, Sebastin Santy, Amar Budhiraja, Kalika Bali, and Monojit Choudhury. 2020. The state and fate of linguistic diversity and inclusion in the NLP world. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 6282-6293, Online. Association for Computational Linguistics.

Xinyu Lu, Jipeng Qiang, Yun Li, Yunhao Yuan, and Yi Zhu. 2021. An unsupervised method for building sentence simplification corpora in multiple languages. Conference On Empirical Methods In Natural Language Processing.

Vukosi Marivate, Daniel Njini, Andani Madodonga, Richard Lastrucci, Isheanesu Dzingirai, and Jenalea Rajab. 2023a. The Vuk'uzenzele South African multilingual corpus.

Vukosi Marivate, Tshephisho Sefara, Vongani Chabalala, Keamogetswe Makhaya, Tumisho Mokgonyane, Rethabile Mokoena, and Abiodun Modupe. 2020. Investigating an approach for low resource language dataset creation, curation and classification: Setswana and sepedi. In Proceedings of the first workshop on Resources for African Indigenous Languages, pages 15-20.

Vukosi Marivate, Matimba Shingange, Richard Lastrucci, Isheanesu Dzingirai, and Jenalea Rajab. 2023b. The South African Gov-za multilingual corpus.

Louis Martin, Angela Fan, Eric Villemonte de la Clergerie, Antoine Bordes, and Benoît Sagot. 2022. Muss: Multilingual unsupervised sentence simplification by mining paraphrases. International Conference On Language Resources And Evaluation.

Laura Martinus and Jade Z Abbott. 2019. A focus on neural machine translation for african languages. arXiv preprint arXiv:1906.05685.

Cindy McKellar. (2020). Autshumato english-tshivenda parallel corpora, version 1.0, [multilingual text corpora: Aligned]. Retrieved From https://hdl.handle.net/20.500.12185/569.

Cindy McKellar. (2021). Autshumato englishisindebele parallel corpora, version 1.0, [multilingual text corpora: Aligned]. Retrieved From https://hdl.handle.net/20.500.12185/572.

Cindy McKellar. (2022)a. Autshumato english-isizulu parallel corpora, version 2.0, [multilingual text corpora: Aligned]. Retrieved From https://hdl.handle.net/20.500.12185/575.

Cindy McKellar. (2022)b. Autshumato english-sesotho parallel corpora, version 1.0, [multilingual text corpora: Aligned]. Retrieved From https://hdl.handle.net/20.500.12185/577.

Cindy McKellar. (2022)c. Autshumato englishsetswana parallel corpora, version 2.0, [multilingual text corpora: Aligned]. Retrieved From https://hdl.handle.net/20.500.12185/578.

Cindy McKellar. (2022)d. Autshumato english-xitsonga parallel corpora, version 2.0, [multilingual text corpora: Aligned]. Retrieved From https://hdl.handle.net/20.500.12185/579.

Cindy A McKellar and Martin J Puttkammer. 2020. Dataset for comparable evaluation of machine translation between 11 south african languages. Data Brief, 29:105146.

Wilhelmina Nekoto, Vukosi Marivate, Tshinondiwa Matsila, Timi Fasubaa, Taiwo Fagbohungbe, Solomon Oluwole Akinola, Shamsuddeen Muhammad, Salomon Kabongo Kabenamualu, Salomey Osei, Freshia Sackey, et al. 2020. Participatory research for low-resourced machine translation: A case study in african languages. In Findings of the Association for Computational Linguistics: EMNLP 2020, pages 2144-2160.

Aasish Pappu, Roi Blanco, Yashar Mehdad, Amanda Stent, and Kapil Thadani. 2017. Lightweight multilingual entity extraction and linking. In Proceedings of the Tenth ACM International Conference on Web Search and Data Mining, pages 365-374.

Surangika Ranathunga and Nisansa de Silva. 2022. Some languages are more equal than others: Probing deeper into the linguistic disparity in the NLP world. In Proceedings of the 2nd Conference of the Asia-Pacific Chapter of the Association for Computational Linguistics and the 12th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), pages 823-848, Online only. Association for Computational Linguistics.

Holger Schwenk and Matthijs Douze. 2017. Learning joint multilingual sentence representations with neural machine translation. ACL 2017, page 157.

Holger Schwenk and Xian Li. 2018. A corpus for multilingual document classification in eight languages. International Conference On Language Resources And Evaluation.

Advaith Siddharthan. 2014. A survey of research on text simplification. ITL-International Journal of Applied Linguistics, 165(2):259-298.

Nomsa Skosana and Respect Mlambo. 2021. A brief study of the autshumato machine translation web service for south african languages. Literator, 42(1):7.

Simone Tedeschi, Valentino Maiorca, Niccolò Campolungo, Francesco Cecconi, and Roberto Navigli. 2021. WikiNEuRal: Combined neural and knowledge-based silver data creation for multilingual NER. In Findings of the Association for Computational Linguistics: EMNLP 2021, pages 2521-2533, Punta Cana, Dominican Republic. Association for Computational Linguistics.

## A Annexe

## A.1 Statistiques des données

Les statistiques sur les ensembles de données utilisés pour l'étalonnage des TMN sont présentées dans les tableaux 5, 6 et 7.

Tableau 5 : Caractéristiques des données de traduction pour les ensembles de données Vuk'uzenzele (Vuk.)

p08-01.png

Tableau 6 : Caractéristiques des données de traduction pour les ensembles de données ZA-gov-multilingual (Gov.)

p08-02.png

Tableau 7: Caractéristiques des données de traduction pour les sous-ensembles des ensembles de données Autshumato disponibles (Aut.)

p08-03.png
