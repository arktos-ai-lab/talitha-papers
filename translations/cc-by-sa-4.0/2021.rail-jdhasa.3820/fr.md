> Machine translation (fr) of "Investigating the feasibility of harvesting broadcast speech data to develop resources for South African languages" by Jaco Badenhorst, Febe de Wet, https://upjournals.up.ac.za/index.php/dhasa/article/view/3820, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Étude de la faisabilité de la collecte de données de parole diffusées pour développer des ressources pour les langues sud-africaines

Jaco Badenhorst, Febe de Wet

**Affiliations**  
Badenhorst, Jaco  
Voice Computing Research Group, CSIR Next Generation Enterprises and Institutions Cluster, Pretoria, South Africa  
  
de Wet, Febe  
Department of Electrical and Electronic Engineering, Stellenbosch University, South Africa  


## Résumé

Des données suffisantes dans la langue cible restent un facteur important dans le développement des systèmes de reconnaissance automatique de la parole (ASR). Par exemple, l'amélioration substantielle de la modélisation acoustique que les architectures profondes ont récemment réalisée pour les langues bien dotées nécessite de grandes quantités de données de parole. De plus, les modèles acoustiques dans les systèmes ASR de pointe qui généralisent bien dans différents domaines sont habituellement entraînés sur plusieurs corpus, et pas seulement sur un ou deux. Des corpus divers contenant des centaines d'heures de données de parole ne sont pas disponibles pour les langues à ressources limitées. Dans cet article, nous étudions la faisabilité de la création de ressources supplémentaires de parole pour les langues officielles d'Afrique du Sud en employant une procédure semi-automatique de collecte de données. Des modèles de réseaux de neurones artificiels à retard temporel factorisé ont été utilisés pour générer des transcriptions au niveau des phones de données de parole collectées à partir de différents domaines.

## Mots-clés

langages à faibles ressources, récolte de données, reconnaissance automatique de la parole, TDNN-F, adaptation de domaine

## 1 Introduction

Au moins 10 des langues officielles de l'Afrique du Sud sont actuellement considérées comme limitées en ressources. De nouvelles méthodes pour étendre rapidement les ressources nécessaires au développement de la reconnaissance automatique de la parole sont nécessaires pour débloquer tout le potentiel de l'application de techniques de modélisation de pointe à ces langues. Les émissions de radio représentent une telle source potentiellement illimitée de données de parole, qui en Afrique du Sud est encore largement inexploitée. Les émissions diffusées contiennent généralement divers types de données, y compris des discours produits par différents locuteurs dans divers styles de parole, mais aussi de nombreux événements non verbaux. Pour cette raison, un projet de collecte de données a récemment été initié en collaboration avec le Centre sud-africain pour les ressources linguistiques numériques[1] afin de collecter, curer et développer de nouveaux corpus de données de parole à partir de données de diffusion.

La collecte de données de parole pourrait être automatisée si des systèmes de transcription automatique existaient. Cependant, le niveau de développement de la technologie ASR en Afrique du Sud a encore un long chemin à parcourir avant que ce ne soit une option réalisable pour la collecte de données dans le pays. Comme première étape vers une annotation automatique, des modèles acoustiques initiaux pour amorcer le travail de collecte ont été dérivés du corpus oral NCHLT existant, bien que limité (Barnard et al. 2014). La viabilité de l'utilisation de cet ensemble de données pour entraîner des modèles acoustiques basés sur des réseaux de neurones profonds a été étudiée dans une étude précédente dans laquelle des systèmes de référence pour les 11 langues officielles ont été mis en œuvre à l'aide de réseaux de neurones à délai temporel factorisés (TDNN-F) (Badenhorst & de Wet 2019). Cet article rend ensuite compte de l'adaptation de ces modèles en utilisant des données de parole collectées pour améliorer la qualité du système de transcription. L'objectif est d'améliorer la capacité du système à transcrire automatiquement la parole provenant de divers domaines.

Dans une étude récente, Szaszáak & Pierucci (2019) ont examiné plusieurs approches pour adapter des modèles acoustiques basés sur des TDNN en anglais à l'anglais avec accent indien. Ils ont testé différentes stratégies, y compris des tentatives d'utilisation de l'apprentissage par transfert, un simple réentraînement de l'ensemble du réseau pendant quelques époques et l'application de l'adaptation i-vecteur dans Kaldi (Povey et al., 2011). Outre le style de parole, d'autres différences entre les données d'entraînement existantes et les exemples de discours nouvellement obtenus sont importantes à prendre en compte. Concernant l'adaptation par i-vecteur, par exemple, Vaněk et al. (2019) ont constaté qu'un nouveau modèle téléphonique tchèque entraîné sur de courts énoncés segmentés entraînait une mauvaise reconnaissance d'énoncés de centre d'appels réels beaucoup plus longs. Une analyse plus approfondie a révélé que l'estimation des statistiques i-vectorielles avec les modèles TDNN était incorrecte, ce qui a entraîné un échec de l'adaptation. À l’inverse, l’adaptation i-vecteur en conjonction avec des techniques de perturbation des données s’est révélée être une approche efficace pour améliorer les modèles acoustiques basés sur TDNN pour les langues à faibles ressources (Kumar & Aggarwal 2020).

La section 2 du présent document décrit le processus de collecte des données et les défis qui y sont associés. La section 2.1 explique comment les nouvelles données ont été sélectionnées, suivie d'une description des ensembles de données d'essai qui ont été définis pour l'évaluation du système à la section 3. Deux des 11 langues officielles ont été incluses dans notre investigation : l'afrikaans (Afr) et le tshivenda (Ven). La section 4 présente les configurations importantes des systèmes de transcription affinés, tandis que la section 5 décrit les procédures permettant d'extraire des segments de parole plus courts à partir de données brutes. La section 6 fournit des résultats pour différentes configurations du système. Une discussion sur les résultats (Section 7) et les conclusions ultérieures (Section 8) conclut le document.

## 2 Collecte des données

À l'origine, on s'attendait à ce que les données diffusées par diverses stations de radio soient transmises en continu à un serveur. Cependant, au cours du processus d'identification des sources de données possibles, d'autres options ont également émergé. Par exemple, certaines stations de radio ont offert de fournir des copies physiques de leur contenu tandis que d'autres étaient disposées à transférer des données via un lien dédié. Une autre possibilité identifiée était de transférer les données à partir d'un service d'hébergement de contenu. Une brève description de ces trois scénarios de capture de données est la suivante :

1. Transmission en continu des données du cloud vers le stockage local

2. Transfert de données depuis des sous-traitants individuels

3. Transfert de données depuis un service d'hébergement.

En outre, différents ensembles de données de diffusion pourraient être obtenus à partir de chaque scénario de capture de données. Par exemple, certaines émissions contiennent des bulletins d'information parfaitement scriptés avec un audio de haute qualité, mais seulement pour un nombre limité de lecteurs de nouvelles. Les émissions d'information scriptées n'étaient disponibles que dans le cadre du scénario 2 de capture de données. Il existe également des quantités beaucoup plus importantes de données audio non scriptées disponibles. Les services d'hébergement sud-africains fournissent de nombreux podcasts d'émissions de radio dans toutes les langues. La collecte d'émissions de la part de contractants individuels a été gravement affectée par la pandémie de Covid-19. Les opérations des petites stations de radio ont été réduites alors que les stations faisaient face à de nombreux nouveaux défis. Une station basée à l'université a même dû se retirer du projet. La conclusion d'accords de partage de données a également été un processus extrêmement lent et chronophage.

Heureusement, la collaboration avec Iono[2] a été couronnée de succès. Des accords pourraient être conclus avec quelques stations de radio produisant et distribuant des podcasts sur la plate-forme audio en ligne Iono. Par conséquent, les ressources recueillies pour les deux langues considérées dans la présente étude ne pourraient être obtenues que dans le cadre des scénarios 1 et 3.

## 2.1 Sélection de contenu

En termes de ressources de parole disponibles pour les langues d'Afrique du Sud, l'Afr est dans une légèrement meilleure position que certaines des autres langues. Il a été inclus dans l'étude pour développer la stratégie de récolte et fournir une perspective plus large sur les différentes possibilités, compte tenu de la grande variété de podcasts. Ven a été choisi comme exemple d'une langue sévèrement limitée en ressources. Les podcasts étaient beaucoup plus limités et aucune donnée d'actualités précédemment compilée n'était disponible, comme dans le cas d'Afr. Le matériel à partir duquel les données ont été sélectionnées pour la collecte incluait trois styles de parole : la parole lue (par exemple, les bulletins d'information), la parole conversationnelle (par exemple, les drames radiophoniques), et les discours en studio (messages délivrés par un seul locuteur dans un studio).

Les facteurs pris en compte pour sélectionner les émissions à récolter comprenaient la disponibilité, le style de parole et la présence ou l'absence d'événements non verbaux comme la musique, les publicités, etc. Nous avons également tenté de limiter le désaccord acoustique entre les données à récolter et les données NCHLT à partir desquelles les modèles acoustiques initiaux ont été dérivés. Les données NCHLT consistaient en des instructions de parole lue, claires, avec un bruit de fond minimal. Par conséquent, les données de parole lues telles que les nouvelles ou les discours en studio ont été considérées en premier.

Pour Afr, des données abondantes étaient disponibles pour des discours de qualité studio. Une émission de radio avait plus de 85 heures d'enregistrements clairs, un seul intervenant par épisode et un nombre suffisamment grand d'intervenants à travers tous les épisodes. Des méta-données des intervenants étaient également disponibles pour les épisodes. Il est important de noter que les podcasts de cette émission ne comprenaient aucun jingle de début ou de fin, et que la durée d'un épisode était inférieure à cinq minutes, ce qui réduit considérablement le besoin de pré-traitement et de segmentation. Les données représentaient un nouveau style de parole de discours clair, que le présentateur présentait de manière conversationnelle. Les données de cette émission de radio ont donc été jugées appropriées pour tester le bootstrapping NCHLT.

Malheureusement, aucune émission de qualité audio correspondante n'a pu être identifiée pour Ven. Un ensemble de 1 118 bulletins de nouvelles de Ven qui ont été enregistrés à partir de la radio en continu a donc été choisi comme la meilleure correspondance disponible pour les données du NCHLT. Chaque enregistrement comprenait un bulletin de nouvelles d'environ cinq minutes, ce qui se traduit par près de 90 heures de données. L'audio comprenait également des clips de journalistes et des carillons de nouvelles.

## 3 Données de test

Des données d'essai représentatives ont été nécessaires pour évaluer la performance des systèmes de transcription de base ainsi que l'impact de l'adaptation du modèle acoustique pour améliorer la collecte de données pour Afr et Ven. Les ensembles de test ont donc été sélectionnés à partir des données disponibles, en veillant à ce que les conditions acoustiques et les styles de parole présents dans les données sélectionnées pour l'extraction soient également représentés dans les données de test. En plus de l'ensemble de test Afr News existant, quatre ensembles de test ont été transcrits manuellement : Ven News, Afr Messages ainsi que Ven et Afr Drama. Les épisodes de drama ont été inclus car ils contiennent des discours produits par plusieurs locuteurs, principalement dans un style conversationnel et dans diverses conditions acoustiques. La durée en heures et la répartition des locuteurs pour chaque ensemble de données de test sont fournies dans le Tableau 1.

Tableau 1 : Durée et informations sur les locuteurs des données de test

p03-01.png

## 4 Raffinement du système

Des systèmes de transcription affinés ont été créés pour permettre la transcription automatique du contenu sélectionné présenté dans la section 2.1. Dans cet article, nous rapportons les résultats pour les trois types de systèmes suivants: 1) Référence, 2) Affiné par texte et 3) Systèmes adaptés acoustiquement. Les systèmes de référence ont utilisé les modèles initiaux NCHLT TDNN-F (Badenhorst & de Wet 2019) en combinaison avec un modèle de langage ARPA plat constitué de uni-grammes de phones équiprobables. Les systèmes affinés basés sur le texte ont employé la modélisation de langage étant donné les corpus textuels limités disponibles dans les langues et les systèmes adaptés acoustiquement ont été construits en mettant à jour les modèles acoustiques au sein des configurations ci-dessus en utilisant des données automatiquement transcrites. La boîte à outils Kaldi a été utilisée pour créer tous les modèles acoustiques utilisés dans cette étude. Il a également été utilisé pour effectuer la segmentation et l'adaptation du modèle acoustique.

## 4.1 Affinement basé sur le texte

Pour configurer les systèmes de transcription affinés par le texte, des modèles de langage ont été construits à partir d'un certain nombre de corpus textuels produits au cours de divers projets antérieurs pour les 11 langues. L'application de ces textes au développement de systèmes a permis de garantir que les systèmes développés pour différentes langues seraient comparables, puisque les mêmes types de textes sont disponibles dans chaque langue. Les invites TTS provenant des projets CSIR Lwazi se sont révélées très utiles pour configurer les systèmes de transcription de base. Les combinaisons ultérieures des invites TTS avec des textes des projets CSIR NCHLT Speech[3], CTexT NCHLT Text (Puttkammer et al. 2014a,b), et CTexT Autshumato (McKellar & Puttkammer 2020, Groenewald & du Plooy 2010) ont également été évaluées. Le tableau 2 présente le nombre de jetons de mots uniques (N=1) pour chaque texte en Afr et en Ven. De plus, les comptages de 2-grammes de mots (N=2) donnent une perspective sur les séquences de mots et le nombre total de tokens (T) dans chaque texte renseigne sur la taille des corpus.

Les valeurs du tableau 2 indiquent que le corpus de texte Afr Lwazi TTS contient plus de mots uniques (12 447) que les annotations des données de parole du NCHLT. Le tableau montre également que la taille du vocabulaire pour le corpus textuel NCHLT est presque quatre fois supérieure à celle du corpus textuel Lwazi TTS. Bien que la composante Afr du corpus de texte parallèle Autshumato se compose d'un nombre similaire de mots que le corpus de texte NCHLT, sa taille de vocabulaire est sensiblement plus petite (30 440 mots uniques).

En revanche, le corpus textuel Ven Lwazi TTS ne contenait que 3 488 mots uniques, soit moins de mots que les annotations des données de parole NCHLT. Bien que le corpus textuel NCHLT contienne plus de sept fois le vocabulaire du texte TTS Lwazi, comparé à la composante Afr, la taille du vocabulaire était d'environ la moitié du nombre de mots uniques dans Afr. Le nombre total de mots du corpus Ven NCHLT Text était d'environ 1 million. Cependant, les textes plus volumineux peuvent inclure plus de mots hors langue que les petites ressources textuelles TTS curatées. Les noms propres et la terminologie anglaise qui apparaissent dans le texte du NCHLT Ven pourraient contribuer à la taille plus grande du vocabulaire.

Les systèmes de reconnaissance automatique de la parole (ASR) dont le vocabulaire est dérivé de textes limités ne peuvent pas prédire les mots hors vocabulaire (OOV) dans les données de test. Pour mieux comprendre l'impact des mots OOV sur les résultats des systèmes affinés basés sur le texte, le tableau 3 résume les taux d'OOV pour les corpus TTS, NCHLT Speech, NCHLT Text ainsi que pour une combinaison des textes NCHLT Text et TTS (Txt Corp + TTS). Il est clair que la prédiction de données d'actualités en utilisant le texte TTS limité (surtout dans le cas de Ven) inclurait plus d'erreurs en raison du taux OOV plus élevé de ces ensembles de données. Les valeurs indiquent beaucoup moins de mots OOV pour le plus grand corpus NCHLT Text. De plus, le vocabulaire de ces textes produit des taux OOV similaires pour les ensembles de données de test d'actualités et de drame.

## 4.2 Raffinement acoustique

Les différents styles de parole dans les données de diffusion nécessitent le raffinement des modèles acoustiques. Dans ce travail, l'approche d'adaptation a été basée sur le réentraînement du modèle initial NCHLT, mais en gardant les i-vecteurs NCHLT intacts. Cela signifie que les i-vecteurs pour les données d'adaptation ont également été générés à l'aide de l'extracteur i-vecteur NCHLT.

L'approche comportait une recette d'adaptation du modèle TDNN-F en deux étapes. Pour les données d'adaptation, nous avons utilisé les transcriptions automatiques des systèmes affinés par le texte à 6-grammes générées pour les nouvelles données. La première étape de la recette d'adaptation a reproduit la configuration d'entraînement du modèle initial, mais au lieu de finaliser le processus, elle a laissé la configuration d'entraînement dans un état tel qu'une deuxième étape d'entraînement pouvait être appliquée. La deuxième étape est donc une étape d'adaptation, ré-entraînant le modèle standard (quatre époques) pour une époque supplémentaire, en utilisant maintenant les données d'adaptation. Pour permettre l'entraînement du modèle et l'extraction des caractéristiques standard, des alignements triphoniques et une perturbation des données ont été appliqués à la fois aux données NCHLT et aux données d'adaptation. Les modèles NCHLT initiaux ont été utilisés pour effectuer l'alignement des triphones.

Avec le ré-entraînement, l'intensité de l'entraînement adaptatif était contrôlée, en ajustant le taux d'apprentissage pour les itérations d'entraînement de la dernière époque et non le nombre d'itérations (ou l'entraînement sur plus d'époques). En substance, les seuils standards de début et de fin du taux d'apprentissage de la recette TDNN-F à travers les quatre époques initiales de l'entraînement ont été laissés au même réglage, restreignant l'algorithme d'entraînement à ces limites. Pour l'entraînement de la dernière époque, des seuils similaires au seuil inférieur d'entraînement (0,000020 et 0,000015 respectivement) ont été appliqués. Cela a restreint l'algorithme à appliquer un taux d'apprentissage proche du réglage inférieur pour les itérations restantes de l'entraînement.

Tableau 2 : Comparaison des tailles de vocabulaire pour les sources de données textuelles

p05-01.png

Tableau 3: Taux de mots hors vocabulaire (en pourcentage) de différents textes compte tenu des données de test

p05-02.png

## 5 Récolte de données

Comme indiqué dans la section 2.1, la collecte de données nécessite généralement une segmentation audio. Les systèmes ASR sont entraînés sur des segments de parole relativement courts, excluant les événements non-parole tels que les jingles et la musique. Dans cette étude, deux techniques de segmentation différentes ont été appliquées. La première, une approche basée sur la diarisation des locuteurs, a permis la détection automatique du début des nouvelles dans les enregistrements Ven de 10 minutes. Une deuxième méthode de détection de silence basée sur l'alignement Kaldi a ensuite été appliquée aux données de récolte Afr et Ven. Une segmentation suffisante était possible pour les étiquettes de silence détectées d'une durée de 0,1 seconde ou plus. Les segments produits avaient des durées comprises entre 5 et 15 secondes.

## 5.1 Segmentation

Pour détecter le début des actualités (après le jingle), nous avons appliqué un algorithme heuristique. L'heuristique a utilisé une implémentation non supervisée de la diarisation des locuteurs, telle qu'implémentée dans la bibliothèque Python open-source pour l'analyse des signaux audio (Giannakopoulos 2015). L'application de la diarisation des locuteurs à chaque enregistrement et la définition du nombre prédéfini de clusters à trois et quatre étiquettes de locuteurs, respectivement, a abouti à des classes séparables. Les autres valeurs de paramètres choisies pour l'heuristique ont été déterminées par une brève analyse préalablement menée sur les segments de l'ensemble de test de Ven news segmentés manuellement. Comme indiqué dans le tableau 1, les segments de lecteurs de Ven News avaient une durée totale de près de 33 minutes et la durée moyenne et médiane des segments était d'environ 38 secondes. Cela signifiait que le segment typique du lecteur de nouvelles pouvait durer environ 40 secondes ou plus. Par la suite, les étiquettes de clusters de locuteurs des nouveaux enregistrements ont été validées pour vérifier si de tels longs segments étaient détectés dans les 120 premières secondes de chaque enregistrement. Pour 44 % des enregistrements, aucune détection n'a été effectuée, de sorte que la durée minimale du segment a été réduite à 20 secondes. Cela a encore réduit le taux de non-détection à 12 % des enregistrements. Compte tenu de ces résultats, les étapes heuristiques suivantes ont été mises en œuvre pour sélectionner le premier segment de nouvelles au début de l'enregistrement :

1. Sélectionner uniquement les segments commençant au moins deux secondes après le début de l'enregistrement, car l'inspection a révélé que les segments plus longs débutant au temps zéro seconde contenaient généralement de la musique.

2. Sélectionnez uniquement les segments d'une durée minimale de 25 secondes.

3. Calculez le chevauchement temporel entre les segments créés par la diarisation avec les étiquettes à trois et quatre locuteurs pour les 180 premières secondes de l'audio.

4. Pour tout segment chevauchant détecté lors de l'étape 3, définir l'instant de début sur celui du premier segment présentant un chevauchement de 50 % ou plus.

5. Découper les fichiers audio de sorte que chaque fichier commence à l'heure de début mise à jour.

L'application des étapes ci-dessus a permis de détecter les heures de début des nouvelles pour 90 % des enregistrements. Des vérifications ponctuelles ont confirmé des débuts de nouvelles valides.

## 5.2 Sélection du segment

Les enregistrements complets du bulletin Ven incluaient des extraits d'actualités, certains contenant de l'anglais ou une autre langue. De plus, une partie ou la totalité des jingles du journal pouvait être incluse dans un segment, car le journal ne commençait pas seulement, mais se terminait également par le jingle et la musique. Outre ces facteurs, les premières transcriptions automatiques de segments comporteraient des erreurs d'étiquetage. En fait, l'étude précédente qui a conduit au développement du modèle acoustique Afr initial a souligné l'importance de la sélection acoustique pour les données d'entraînement de la parole imparfaites, en appliquant une évaluation par programmation dynamique basée sur les phones (PDP). Par conséquent, les expériences d'adaptation effectuées dans cette étude ont été menées en incluant d'abord les segments audio qui présentaient les meilleurs scores PDP compte tenu des nouveaux domaines de diffusion. Pour accomplir cela, des sélections de sous-ensembles des données d'adaptation ont été faites. La technique de notation PDP nécessite deux transcriptions du même segment audio. Une transcription est habituellement produite par reconnaissance de phones libre (employant un modèle de langage basé uniquement sur une chaîne d'étiquettes de phones). La deuxième transcription provient d'un système de reconnaissance meilleur et plus raffiné.

Pour créer de nouveaux corpus de parole à partir des données sélectionnées (section 2.1), les meilleurs systèmes de transcription automatique ont été appliqués pour transcrire chacun des segments audio à récolter. Pour chaque segment, un score PDP final a également été estimé. Dans cette étude, les systèmes finals affinés étaient parfois basés sur la reconnaissance de mots (voir la figure 2) chaque fois que des taux d'erreur plus faibles pouvaient être obtenus de cette façon.

Tableau 4 : PER des systèmes de texte affiné de référence et améliorés

p06-01.png

## 6 Résultats

Pour tester le rendement de la transcription, chacun des ensembles de données d'essai a été transcrit par les systèmes de transcription décrits à la section 4.1. Les taux d'erreur sur les phones (PER) subséquents ont été calculés en n'incluant que les étiquettes de phones vocaux lors de l'estimation. Le tableau 4 montre les performances obtenues pour deux types de systèmes: 1) transcription par modèle de langage ARPA à base de phones plat et 2) systèmes appliquant des modèles de langage ARPA à base de phones 6-grammes étant donné les données textuelles. Dans une stratégie itérative, différents systèmes basés sur ARPA ont été construits pour des combinaisons des données textuelles. Les valeurs PER dans le tableau 4 reflètent les meilleurs systèmes 6-grammes en combinaison avec les modèles acoustiques NCHLT. Seuls les meilleurs systèmes de raffinement de texte de 6 grammes dans chaque langue ont été choisis. Cela signifiait que le modèle de langage 6-grammes était dérivé du texte TTS pour les systèmes Afr et d'une combinaison du texte TTS et du corpus textuel NCHLT dans le cas de Ven.

En utilisant les modèles de langage 6-grammes, les systèmes ont produit des PER nettement inférieurs pour tous les jeux de données de test Afr et Ven. De même, les résultats pour une combinaison du corpus de textes TTS et NCHLT sont présentés pour Ven. Les résultats montrent des PER plus élevés (au-dessus de 40 %) pour les données Drama par rapport aux données News. Dans chaque cas, les systèmes ARPA 6-grammes offrent une amélioration par rapport à l'utilisation d'un simple système de transcription ARPA plat.

p07-01.png

Figure 1: PERs de Ven sur les données dramatiques pour divers textes et tailles de contexte

La taille de contexte de 6 grammes des modèles linguistiques a été choisie comme un point où des taux de PER plus faibles pourraient être atteints dans les deux langues pour TTS et des ensembles plus importants de données textuelles. La figure 1 présente un exemple d'une telle analyse. Des taux d'erreur plus faibles ont été mesurés à mesure que la taille de contexte des modèles de langage n-grammes augmentait jusqu'à un point d'environ 6 ou 7-grammes de contextes de phones. À l'exception du texte NCHLT Speech, cette conclusion s'est bien généralisée pour les différentes combinaisons de textes.

p07-02.png

Figure 2 : Comparaison des équivalents PER pour les systèmes de reconnaissance de téléphone et de mot

Il est intéressant de noter que des PER encore plus faibles ont pu être obtenus pour la plupart des ensembles de tests en appliquant d'abord la reconnaissance de mots. En utilisant des modèles de langage 3-grammes, les transcriptions automatiques au niveau des mots ont été converties en étiquettes de phonèmes à l'aide d'un dictionnaire de prononciation. D'après la disposition de la Figure 2, il semble que les transcriptions phonétiques pour les ensembles de test avec de meilleurs taux de transcription, comme celles des données News et Messages, aient le plus bénéficié de la reconnaissance au niveau du mot. Seulement pour les données du test Ven Drama avec un PER de plus de 40% la reconnaissance des mots n'a pas apporté d'avantage.

Tableau 5 : Comparaison des PER entre les modèles de référence et les modèles entraînés de manière adaptative de NCHLT sur les épisodes de messages Afr.

p07-03.png

Ensuite, une première itération de raffinement acoustique a été appliquée pour évaluer le bénéfice potentiel de l'adaptation du modèle acoustique. Le tableau 5 montre l'effet de l'utilisation des modèles acoustiques adaptés en conjonction avec les modèles de langage phonétiques sur la reconnaissance. Dans cette expérience, la quasi-totalité de l'ensemble de données Afr Messages (71 heures, à l'exclusion des données de test) a été appliquée comme données d'adaptation, en traitant chaque épisode de 3 minutes comme un seul segment audio. De toute évidence, les PER ont été plus réduits pour les données de test Afr Messages du même style de conversation. Ces résultats se comparaient bien à ce qui a également été produit en utilisant environ 18 heures de données d'adaptation, si la notation PDP était appliquée pour sélectionner d'abord des segments plus courts de données bien transcrites de l'ensemble plus large pour l'entraînement adaptatif.

## 7 Discussion

Les modèles de langage construits à partir du vocabulaire de grands corpus et de combinaisons de textes ont produit des taux OOV assez faibles. Les valeurs du tableau 3 ont montré que des taux OOV de moins de 10 % pouvaient être atteints sur l'ensemble des jeux de données de test représentant différents styles de parole provenant de différentes sources (actualités, messages studio et épisodes de drame). Bien que ce fait puisse sembler prometteur en termes de couverture du vocabulaire, les PER utilisant ces modèles de langage n'ont pas reflété de telles réductions significatives lors de l'emploi des textes plus volumineux. Au lieu de cela, des PER assez faibles pouvaient être obtenus en utilisant des modèles de langage de phones avec une couverture de phones adéquate, tels que les modèles basés uniquement sur des invites TTS équilibrées phonétiquement. Seules de petites améliorations ont été observées pour Ven où la taille du texte des invites TTS était beaucoup plus petite que celle de l'Afr. L'analyse de la Figure 1, où les transcriptions de Ven drama ont été analysées, en fournit un exemple. Elle enregistre moins de 1 % de différence PER pour l'utilisation de texte supplémentaire au-delà du texte TTS. Par conséquent, l'inclusion de plus de vocabulaire à partir de corpus de textes supplémentaires (autres que ceux déjà inclus) pourrait ne pas bénéficier autant qu'on le pensait au départ à la construction de systèmes au niveau des phones construits avec des modèles acoustiques de référence. La transcription des ensembles de test de style de parole conversationnel a généré significativement plus d'erreurs que les données de test de lecture de nouvelles. Pour la poursuite de la récolte de données, l'erreur assez élevée suggère que plus de développement acoustique est nécessaire pour réduire les PER, avant de construire des modèles de langage à vocabulaire plus large. Une autre perspective sur l'erreur de transcription provient de l'analyse de la taille du contexte des modèles de langage de phones. Des contextes phonétiques plus larges ont joué un rôle significatif pour abaisser le PER.

Il a également été démontré qu'avec des modèles de langage de phones contextuels plus grands, des réductions plus importantes du PER ont été obtenues pour les ensembles de test où des PER inférieurs avaient été obtenus en premier lieu. Cette découverte soutient l'idée que les systèmes de vocabulaire plus grands exigent de meilleurs modèles acoustiques (bien assortis). En substance, l'utilité d'inclure l'information des ressources textuelles à travers la modélisation linguistique dans les systèmes de transcription augmente à mesure que la modélisation acoustique s'améliore. Les premiers tests de reconnaissance de mots ont produit une erreur de transcription relativement élevée pour les données de test. Comme pour les langues bien dotées, où des modèles acoustiques peuvent être développés avec suffisamment de données audio, l'incorporation de textes plus importants devrait, à l'avenir, contribuer de manière significative à obtenir une reconnaissance plus précise.

La stratégie d'adaptation qui a été employée avec succès a produit des réductions significatives du PER, en s'adaptant au domaine du nouvel ensemble de données cibles des messages du studio Afr. Les intervenants de l'émission de radio sélectionnée parlaient de manière plus conversationnelle. Une observation similaire a été faite pour la langue Ven, où l'adaptation au domaine des nouvelles a également produit une certaine amélioration mais, comme prévu, cette adaptation n'a pas vraiment amélioré la reconnaissance des drames Ven. Ces résultats ont prouvé la capacité de la technique d'adaptation d'adapter et de développer des modèles acoustiques TDNN-F pour de nouveaux domaines acoustiques.

Plus surprenant encore, ces adaptations pouvaient également être réalisées en utilisant moins de 20 heures de données, en choisissant les segments audio les mieux classés selon le score PDP. Bien qu'il soit attendu que la technique produise un résultat similaire lorsqu'elle est appliquée à des données d'autres langues, les travaux futurs devraient encore se concentrer sur l'entraînement itératif en utilisant les transcriptions mises à jour qui sont produites. Étant donné le ratio déséquilibré des données d'entraînement NCHLT correctement transcrites par rapport aux échantillons de données d'adaptation transcrites automatiquement, il était également nécessaire de continuer à utiliser les i-vecteurs NCHLT créés par une transformation spécifique au locuteur qui est requise pour l'entraînement TDNN-F. De plus, cette stratégie a l'avantage d'être indépendante du locuteur et ne nécessite pas d'étiquettes de locuteur pour les données d'adaptation. À mesure que davantage d'échantillons de données d'adaptation correctement transcrites deviennent disponibles, elle devrait être ajustée pour inclure une adaptation appropriée des i-vecteurs.

## 8 Conclusion

Les résultats de cette étude indiquent que l'efficacité de l'inclusion de données textuelles en tant que ressource linguistique lors du développement du système de transcription automatique dépend de l'état des modèles acoustiques utilisés pour la récolte. Bien que l'inclusion d'un texte équilibré au sein de la langue (tel qu'un ensemble d'invites TTS) soit importante, des modèles acoustiques bien adaptés au domaine acoustique des données de parole à extraire sont également nécessaires. L'inclusion de plus grandes quantités de texte pour la modélisation du langage devient alors plus efficace. Bien que l'approche ci-dessus crée plus de données, la réduction de l'erreur de transcription augmenterait le rendement des données de parole correctement annotées. Il est recommandé de rechercher de nouveaux moyens d'améliorer le développement du modèle. Une meilleure adaptation acoustique devrait finalement être possible pour des ensembles de données d'adaptation avec des transcriptions suffisamment précises.

Le résultat de cette étude a prouvé que la technique actuelle de collecte de données serait applicable à toutes les langues officielles d'Afrique du Sud. Une bonne généralisation aux données de parole d'un nouveau domaine, intégrant un nouveau style de parole, a été obtenue pour l'Afr. Deuxièmement, la même approche pourrait être dupliquée avec succès dans la langue beaucoup plus contrainte en ressources Ven, produisant des PER sur des données d'informations diffusées qui étaient similaires aux PER obtenus pour les données Afr du nouveau style de parole.

## Notes

[1] https://www.sadilar.org/, SADiLaR est financé par le Département de la Science et de l'Innovation (DSI) du gouvernement sud-africain.

[2] https://https://iono.fm/ Iono maintient une plateforme audio en ligne offrant des podcasts et des services de diffusion audio en direct pour diverses sources.

[3] Le texte du NCHLT Speech comprenait les messages d’entraînement de l’ASR.

## Remerciements

Le travail de collecte de données a été rendu possible grâce au financement reçu du Département des Sciences et de l'Innovation par le biais du Centre sud-africain pour les ressources linguistiques numériques (SADiLaR).

## Références

Badenhorst, J. & de Wet, F. (2019), 'The usefulness of imperfect speech data for ASR development in low-resource languages', Information 10(9). URL: https://www.mdpi.com/2078-2489/10/9/268

Barnard, E., Davel, M. H., van Heerden, C., de Wet, F. & Badenhorst, J. (2014), The NCHLT speech corpus of the South African languages, in 'in Proc. SLTU', St Petersburg, Russia.

Giannakopoulos, T. (2015), 'pyaudioanalysis: An open-source python library for audio signal analysis', PloS one 10(12).

Groenewald, H. J. & du Plooy, L. (2010), 'Processing parallel text corpora for three South African language pairs in the Autshumato project', AfLaT 2010 p. 27.

Kumar, A. & Aggarwal, R. K. (2020), 'Hindi speech recognition using time delay neural network acoustic modeling with i-vector adaptation', International Journal of Speech Technology pp. 1-12.

McKellar, C. A. & Puttkammer, M. J. (2020), 'Dataset for comparable evaluation of machine translation between 11 south african languages', Data in brief 29, 105146.

Povey, D., Ghoshal, A., Boulianne, G., Burget, L., Glembek, O., Goel, N., Hannemann, M., Motlicek, P., Qian, Y., Schwarz, P. et al. (2011), The Kaldi speech recognition toolkit, in 'IEEE 2011 workshop on Automatic Speech Recognition and Understanding (ASRU)', number EPFL-CONF-192584, Hilton Waikoloa Village, Big Island, Hawaii.

Puttkammer, M., Schlemmer, M., Pienaar, W. & Bekker, R. (2014a), 'NCHLT Afrikaans text corpora'.

Puttkammer, M., Schlemmer, M., Pienaar, W. & Bekker, R. (2014b), 'NCHLT Tshivenda text corpora'.

Szaszáak, G. & Pierucci, P. (2019), A comparative analysis of domain adaptation techniques for recognition of accented speech, in '2019 10th IEEE International Conference on Cognitive Infocommunications (CogInfoCom)', IEEE, pp. 259-264.

Vaněk, J., Michálek, J. & Psutka, J. (2019), Tuning of acoustic modeling and adaptation technique for a real speech recognition task, in 'International Conference on Statistical Language and Speech Processing', Springer, pp. 235-245.
