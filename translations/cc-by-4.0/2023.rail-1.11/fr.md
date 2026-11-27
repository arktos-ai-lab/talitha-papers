> Machine translation (fr) of "Comparing methods of orthographic conversion for Bàsàá, a language of Cameroon" by Alexandra O’neil, Daniel Swanson, Robert Pugh, Francis Tyers, Emmanuel Ngue Um, https://aclanthology.org/2023.rail-1.11/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Comparaison des méthodes de conversion orthographique pour le Bàsàá, une langue du Cameroun

Alexandra O’neil, Daniel Swanson, Robert Pugh, Francis Tyers, Emmanuel Ngue Um

**Affiliations**  
Alexandra O’Neil, Daniel Swanson  
Emmanuel Ngué Um  
Robert Pugh, Francis Tyers  
University of Yaoundé  
Indiana University  
Yaoundé, Cameroon  
Bloomington, IN USA

## Résumé

La standardisation orthographique est une étape importante dans la documentation d'une langue et le développement de ses ressources. Cependant, les textes écrits dans les anciennes orthographes restent pertinents pour l'histoire et le développement de la langue et doivent donc être convertis à l'orthographe standardisée. S'assurer qu'une langue a accès à la version orthographiquement standardisée de tous ses textes enregistrés est important pour le développement des ressources, car cela fournit des ressources textuelles supplémentaires pour l'entraînement, soutient la contribution des auteurs utilisant d'anciens systèmes d'écriture, et fournit des informations sur le développement de la langue. Cet article évalue la performance des méthodes de traitement automatique des langues, en particulier les transducteurs à états finis et les réseaux Long Short-term Memory, pour la conversion orthographique de textes en bàsàá de l'orthographe missionnaire protestante vers l'orthographe AGLC désormais standard, avec la conclusion que les LSTM sont quelque peu plus efficaces en l'absence d'informations lexicales explicites.

## 1 Introduction

La standardisation orthographique est un processus que de nombreuses langues du monde ont subi au cours de l'histoire et beaucoup sont encore en cours. Bien qu'il y ait de nombreux avantages à la standardisation du système d'écriture d'une langue, elle peut aussi présenter des défis pour les communautés linguistiques. Ces défis incluent la contestation entre les locuteurs qui sont habitués à utiliser différentes représentations, l’inconfort des locuteurs qui se rapportent à leur langue uniquement comme une langue orale, la prise en compte et l’atténuation de l’impact du colonialisme sur la langue et la communauté, le débat sur la meilleure façon de représenter les sons dans la langue et l’hésitation à adopter le système d’écriture par tous les locuteurs (Limerick, 2018).

Comme référencé dans l'ensemble de défis potentiels ci-dessus, les communautés ont souvent des moyens différents de représenter leur langue avant l'effort coordonné pour mettre en œuvre un système uniforme (Mosel, 2004). Alors que l'un des objectifs de la normalisation orthographique est de créer un support cohérent que les locuteurs peuvent utiliser pour se comprendre les uns les autres et communiquer leurs propres pensées, les textes et les données écrites dans les orthographes anciennement utilisées restent pertinentes à la fois dans l'histoire et le développement de la langue. Pour préserver cette information, il est nécessaire de convertir les anciennes orthographes au nouveau standard. En outre, il est préférable de commencer ce processus peu de temps après la normalisation du système, car cela augmente les possibilités de travailler avec des locuteurs qui connaissent bien les systèmes précédemment utilisés.

De plus, la conversion des anciennes orthographes dans la norme actuelle est bénéfique puisque certains locuteurs peuvent ne pas vouloir passer à la nouvelle norme. Pendant un certain temps après l'adoption de la nouvelle orthographe, les locuteurs peuvent continuer d'utiliser une variété d'orthographes dans leur propre écriture, suivant l'orthographe qu'ils ont précédemment apprise (Jahani, 1989). Certains locuteurs peuvent être obligés de continuer à utiliser un système non standard en raison d'un attachement émotionnel à un système orthographique. Par exemple, les raisons de maintenir une préférence orthographique vont d'une expérience positive, comme associer un système à la manière dont ses grands-parents lui ont appris, à une réaction à une expérience traumatisante, comme des environnements scolaires psychologiquement et physiquement abusifs où un système d'écriture était mis en avant (Arndt, 2019). Peu importe la raison pour laquelle un locuteur continue d'utiliser une orthographe différente, il est constructif pour la communauté de s'assurer que les utilisateurs de la nouvelle orthographe sont encore capables de comprendre les écrits dans d'autres orthographies et de développer une méthode pour convertir facilement ces textes (Person, 2009).

Dans cet article, nous étudions et comparons l'utilité des transducteurs à états finis (FSTs) et des réseaux de neurones à mémoire à long terme (LSTMs) pour la tâche de conversion d'une orthographe antérieure de la langue Bàsàá à la norme actuelle, avec la conclusion que les LSTMs surpassent légèrement les FSTs en l'absence d'informations lexicales.

## 2 Bàsàá

Le bàsàá est une langue bantoue parlée par environ 300 000 locuteurs au Cameroun (Eberhard et al., 2022). Bien qu'elle présente de nombreuses caractéristiques typiques d'une langue bantoue, elle est généralement perçue comme ayant une plus grande variation et flexibilité dans la structure des syllabes et les classes nominales par rapport aux autres langues bantoues, comme discuté dans la section 2.1. L'histoire du Bàsàá rend également compte d'une variété de systèmes d'écriture provenant de différents missionnaires et de différents efforts de standardisation, comme décrit dans la section 2.2.

p02-01.png

Figure 1 : Carte représentant les principales régions où le Bàsàá est parlé : le sud, le centre et le littoral du Cameroun. (Njock, 2019)

## 2.1 Profil linguistique

Un inventaire phonétique du bàsàá est présenté dans Makasso et Lee (2015), qui comprend 7 voyelles phonémiques (voir Figure 2) avec des contrastes courts-longs et 30 consonnes (voir Figure 3). De plus, le Bàsàá utilise un système de tons haut-bas. Bien qu'il s'agisse d'une langue bantoue, elle autorise de manière atypique une structure de syllabe fermée en plus de la structure de syllabe ouverte. Bien qu'elle possède un système de classes nominales, les distinctions de surface entre les classes sont parfois neutralisées. Les noms ne sont pas obligés de commencer par une attaque consonantique et les verbes ne sont pas obligés de se terminer par une voyelle. Ces facteurs entraînent une plus grande diversité de structures syllabiques permises en Bàsàá par rapport aux autres langues bantoues (Hyman, 2003).

p02-02.png

Figure 2: Inventaire des voyelles en Bàsàá (Makasso et Lee, 2015) [ɛ] et [ɔ] sont contrastées avec [o] et [e] par des signes diacritiques dans les orthographes missionnaires

## 2.2 Histoire orthographique

L'histoire orthographique du Bàsàá contient plusieurs systèmes d'écriture, car les coloniaux anglais, allemands et français qui ont transcrit la langue ont choisi différentes méthodes de représentation. Les alphabets créés pour le bàsàá, et pour de nombreuses langues du Cameroun, ont été principalement influencés par les langues maternelles des transcripteurs, généralement le français, l'anglais ou l'allemand, et ont souvent omis de marquer correctement des contrastes importants dans la langue (Bird, 2001). Les deux orthographes les plus importantes établies avant l'actuelle sont attribuées à des missionnaires protestants et catholiques et sont appelées dans cet article orthographes protestante et catholique, aucune d'entre elles n'ayant de ton marqué.

Alors que la première tentative de mise en œuvre d'un système d'écriture standard, utilisant une orthographe développée pour les langues ouest-africaines à Bamako (Organisation des Nations Unies pour l'éducation, la science et la culture, 1966), n'a pas été couronnée de succès, un comité national a été mis en place pour développer un système d'écriture qui faciliterait une alphabétisation pan-camerounaise dans toutes les langues du pays. Au centre de cette entreprise était la mise en place d'un système qui pourrait capturer tous les sons contrastés à travers les langues camerounaises. L'inclusion de tous les contrastes permettrait à tout locuteur alphabétisé d'une langue camerounaise de lire et de prononcer les mots d'un texte dans n'importe laquelle des langues du Cameroun, indépendamment de la compréhension (Hartell, 1993).

L'effort national a abouti à l'établissement de l'Alphabet Général des Langues du Cameroun (AGLC) par le Comité National pour l'Unification et l'Harmonisation des Alphabets des Langues du Cameroun en 1979 (Maurice Tadadjeu, 1979). Les caractères de cet alphabet sont principalement latins, et donc similaires aux alphabets anglais, allemand et français, cependant l'alphabet intègre des symboles de l'Alphabet Phonétique International pour représenter pleinement l'inventaire phonétique des langues camerounaises. Les symboles de l'AGLC complet sont listés dans le Tableau 1.

p03-01.png

Figure 3 : Inventaire des consonnes en Bàsàá (Makasso et Lee, 2015).

p03-02.png

Tableau 1: Alphabet des langues camerounaises. L'alphabet AGLC a été conçu pour fonctionner comme un alphabet unificateur et intelligible pour les locuteurs de toutes les langues camerounaises.

Bàsàá utilise un sous-ensemble de ce système en accord avec les contrastes phonétiques de la langue. Les lettres latines sont utilisées aux côtés de ɓ, ŋ, ɛ et ɔ avec des accents aigus, graves et circonflexes pour indiquer le ton. Bien que cette orthographe soit soutenue par l'Académie des langues du Cameroun, les anciennes orthographes missionnaires sont encore utilisées par certains locuteurs et sont généralement utilisées dans les textes antérieurs écrits en Bàsàá, nécessitant une méthode de conversion des orthographes missionnaires au standard AGLC.

En comparant les trois systèmes d'écriture, la première différence majeure se trouve dans le marquage des tons et des voyelles. Les systèmes d'écriture protestants et catholiques ne marquent pas les tons, mais utilisent plutôt des accents aigus, graves et circonflexes pour marquer différentes voyelles. Le système protestant représente [e] en utilisant un accent aigu, é, tandis qu'un [ɛ] est représenté par un e simple. De même, le système protestant utilise le ô circonflexe, pour marquer [o], mais un o simple dans l'orthographe représente [ɔ]. D'autre part, l'orthographe catholique marque [ɛ] et [ɔ] par è et ò, tandis que les simples e et o représentent [e] et [o]. Cependant, dans l'orthographe AGLC, les accents aigu, grave et circonflexe sont utilisés pour représenter le ton et les ɛ et ɔ sont déjà contrastés dans l'orthographe par l'ajout des symboles ɛ et ɔ. Le ton est également marqué sur les consonnes nasales syllabiques dans le système AGLC.

Les consonnes dans l'orthographe nécessitent également une considération dans le processus de conversion. Les sons [ɓ] et [ŋ] sont représentés par b et ñ dans les orthographes missionnaires, tandis que l'orthographe AGLC distingue [b] de [ɓ] avec les caractères b et ɓ. Au lieu de ñ, le [ŋ] est représenté par ŋ dans l'orthographe AGLC. En plus de ces consonnes, les orthographes missionnaires transcrivent le son tʃ par tj, le système AGLC utilise c. Une phrase est présentée dans les trois orthographes ci-dessous pour illustrer certaines des différences entre les orthographes.

AGLC: Mɛ̀ yè lɛ mɛ ɓɔl nyɔɔ̄ nì màkòò.

Protestant: Me yé le me bol nyoo ni makôô.

Catholic: Mè ye lè mè bòl nyòò ni makoo.

## 3 Travaux antérieurs

La négociation entre les orthographes est un problème courant dans de nombreuses langues, et à ce titre, un certain nombre d'études précédentes ont exploré des techniques pour aider à la conversion et/ou à la normalisation orthographique. Ce travail s'appuie sur des recherches existantes décrivant la langue Bàsàá et l'utilisation du traitement du langage naturel pour les langues à faibles ressources. Cette section présente les travaux existants sur le Bàsàá dans la section 3.1, les transducteurs à états finis (FST) dans la section 3.2, et les réseaux Long Short-term Memory (LSTM) dans la section 3.3. Bien que la recherche concernant les FST et les réseaux LSTM en contexte peu doté soit vaste, cette section se concentre sur des exemples qui reflètent étroitement les objectifs de cet article.

## 3.1 Recherche sur le Bàsàá

Les travaux existants sur le Bàsàá ont profilé l'inventaire linguistique de la langue (Makasso et Lee, 2015; Hyman, 2003), généré des dictionnaires (Lemb et de Gastines, 1973), conçu du matériel d'apprentissage (Moreton et al., 1968) et, plus récemment, facilité le développement de ressources qui intègrent des méthodes computationnelles et de TAL avec le Bàsàá pour améliorer les ressources disponibles pour la documentation, comme le corpus oral bilingue développé pour aider à la transcription phonétique automatique (Hamlaoui et al., 2018).

Nikitin et al. (2022) aborde la tâche de conversion d'orthographe en Bàsàá en utilisant Bidirectional Encoder Representations from Transformers (BERT), qui fonctionne souvent bien en raison de la grande quantité de ressources et d'entraînement qui a été consacrée au modèle. Cependant, pour cette tâche, BERT n'a pu surpasser le modèle de base qu'après un prétraitement approfondi du texte. L'importance du pré-traitement extensif du texte et les performances légèrement meilleures que la ligne de base suggèrent que BERT n'est pas bien adapté à cette tâche.

## 3.2 Transducteurs à états finis

Les transducteurs à états finis (FST) fonctionnent comme un traducteur entre un ensemble de chaînes d'entrée et un ensemble de chaînes de sortie. Dans le cas des langues, la chaîne d'entrée peut utiliser des règles linguistiques et produire une sortie qui respecte ces règles. Comme l'entrée du FST repose sur des règles linguistiques, le modèle fonctionne souvent bien dans des environnements à faibles ressources, car les modèles ne reposent pas sur de grandes quantités de données d'entraînement ou de ressources de calcul. Alors que les modèles FST nécessitent un certain nombre d'efforts linguistiques ou informatiques à construire, divers outils ont été créés qui automatisent diverses parties du processus pour aider à atténuer ces limites (Khanna et al., 2021), bien que les performances des modèles FST bénéficient grandement de la génération de règles détaillées et spécifiques à la langue.

En général, les FST ne spécifient pas nécessairement un mappage unique entre les chaînes d'entrée et de sortie, ce qui peut causer des problèmes pour des tâches comme la conversion orthographique qui nécessitent généralement une seule sortie. Cela peut être résolu en ajoutant des règles supplémentaires pour contraindre le transducteur. Cependant, si la détermination de règles appropriées est difficile et qu'un corpus est disponible, cela peut également être abordé en ajoutant des poids, qui sont des scores pouvant être appliqués soit à une paire d'entrée-sortie de mot entier, soit à un mappage de sous-mots. Ensuite, pour une entrée donnée, chaque sortie a un poids égal à la somme de tous les poids applicables dérivés du corpus, seule la forme avec le total le plus bas étant sortie.

Les FST ont été implémentés dans de nombreux contextes peu dotés, ainsi que pour l'application de conversion orthographique, de translittération et de normalisation de texte. Washington et al. (2021) ont développé un transducteur pour aider à la conversion orthographique et à l'analyse morphologique de Zapotec et ont constaté que même un transducteur incomplet pouvait donner des résultats positifs. Des efforts similaires utilisent un FST pour développer un générateur et un analyseur morphologiques tout en abordant simultanément le problème des diacritiques manquants (Alkhairy et al., 2020), démontrant la facilité d'expansion d'un FST pour créer plus de ressources pour une langue. Manohar et al. (2022) étendent l'utilisation des FST aux applications de synthèse vocale de texte (TTS) en contexte peu doté, en générant un modèle qui convertit entre les phonèmes et les graphèmes du malayalam.

Bien que l'utilisation des FST dans les contextes peu dotés soit bien attestée, l'inclusion des tons s'est avérée difficile. Ngué Um et al. (2022) ont construit un FST pour l’ewondo, une langue camerounaise. Dans cette étude, la nature ambiguë des marques de tons combinées par rapport aux tons combinants pose des difficultés pour l'analyseur. Bien que les accents combinés et combinants puissent être analysés par le FST, cela entraîne des erreurs dans la génération morphologique. Une extension du FST pour le bàsàá devrait également traiter ce problème.

## 3.3 Réseaux de Mémoire à Long Terme et à Court Terme

La LSTM est une architecture de réseau neuronal récurrent qui permet d'incorporer des informations sur les dépendances à long terme, fournissant un contexte supplémentaire pour la génération de la sortie. Les réseaux LSTM ont été appliqués à de nombreuses tâches d'apprentissage profond, telles que la traduction automatique, la reconnaissance optique de caractères (OCR) et la reconnaissance automatique de la parole.

Les LSTM ont été combinés avec des tâches OCR pour aider les langues à la numérisation et à la normalisation orthographique des textes historiques. Azawi et al. (2013) ont constaté que les LSTMs fonctionnent bien pour la conversion de textes historiques allemands, car elles sont capables de gérer des exemples non vus. De même, Simistira et al. (2015) ont constaté que l'utilisation de LSTM pour l'OCR produit un taux d'erreur de caractère inférieur aux principales méthodes d'OCR pour l'écriture polytonique grecque.

En outre, les LSTM ont récemment gagné en popularité pour leur utilité dans les tâches TTS, telles que la conversion graphème-phonème. Adriana (2019), Liu et al. (2018) et Behbahani et al. (2016) ont mis en œuvre avec succès des modèles LSTM pour la conversion grapheme-à-phonème en roumain, mongol et persan.

## 4 Méthodologie

Cet article compare l'exactitude d'un transducteur à états finis (FST), d'un FST pondéré et d'un modèle de mémoire à long terme et à court terme (LSTM) pour la tâche de conversion orthographique du Bàsàá. La section 4.1 décrit les données sur lesquelles les modèles ont été entraînés, la section 4.2 décrit la mesure de référence simple utilisée pour la comparaison, la section 4.3 explique l'utilisation d'un FST non pondéré, la section 4.4 détaille l'implémentation du FST pondéré et la section 4.5 décrit le modèle LSTM.

## 4.1 Données

Les méthodes de cette étude utilisent un corpus de textes composé de 12 000 phrases dans l'orthographe protestante ainsi que des translittérations dans l'orthographe AGLC. Parmi ces phrases, 10 000 sont utilisées pour l'entraînement, 1 000 pour la validation et 1 000 pour le test. Le prétraitement du texte consistait à mettre les caractères en minuscules.

## 4.2 Ligne de base

La baseline recherche dans les phrases cibles la traduction la plus fréquente d'un mot source et remplace le mot source par ce jeton. Dans le cas où le mot source n'apparaît pas dans les données, le mot source est sorti sous sa forme originale sans conversion. La ligne de base ici est une approche naïve du problème, mais est représentative du manque actuel de travaux existants sur la conversion orthographique dans la langue.

## 4.3 FST non pondéré

Le FST non pondéré consiste en un ensemble de mappages de caractères compilés à l'aide du compilateur de lexique Lexd (Swanson et Howell, 2021) qui inclut chaque paire de caractères source et cible trouvés dans les données d'entraînement. Le mappage de chaque caractère individuellement et sans contexte crée un grand nombre de formes de sortie, que nous résolvons en sélectionnant une seule forme de sortie au hasard. De plus, nous avons ajouté quatre règles qui restreignent la sortie dans les cas où le contexte phonologique est non ambigu. Plus précisément, que les nasales n'auront jamais de diacritique de ton dans l'orthographe AGLC si elles précèdent une voyelle (ce sont 3 règles, une pour m, n et ŋ), et que là où l'orthographe missionnaire a tj, l'orthographe AGLC aura toujours c (par opposition à la conversion séparée du t et du j en tj).

## 4.4 FST pondéré

Là où le FST non pondéré traite chaque correspondance comme également probable, le FST pondéré attribue un poids à chaque chemin qui a été observé dans les données d'entraînement, les paires source-cible plus fréquentes recevant des poids plus faibles (meilleurs). Ensuite, plutôt que de sélectionner au hasard, la sortie avec le poids le plus bas est utilisée.

## 4.5 Modèle neural seq2seq

Suite à des travaux antérieurs qui ont montré que les architectures neuronales seq2seq basées sur les caractères fonctionnent bien pour la normalisation et la conversion orthographiques (Rosca et Breuel, 2016; Orife, 2018), nous avons entraîné un modèle encodeur-décodeur avec attention globale (Luong et al., 2015) pour convertir les orthographes missionnaires en orthographe AGLC. L'encodeur et le décodeur sont tous deux des réseaux unidirectionnels à mémoire à long et court terme (Hochreiter et Schmidhuber, 1997) composés de 2 couches de 1 000 unités cachées chacune. Nous avons utilisé la bibliothèque OpenNMT-py (Klein et al., 2020) pour entraîner le modèle et générer des prédictions sur les jeux de données réservés.

## 5 Résultats

Nous comparons les quatre systèmes en utilisant les taux d'erreur de mot et de caractère (WER et CER). WER et CER sont calculés automatiquement en comparant les sorties de chacun des systèmes à la sortie du fichier cible. Suite à la présentation de WER et CER pour chacun des systèmes, nous fournissons des exemples des résultats de chaque modèle. Des informations sur les différences de représentation orthographique des textes source et cible se trouvent dans la section 2.2.

## 5.1 Taux d'erreur de mots et de caractères

Les résultats de tous les systèmes, à l'exception du FST non pondéré, étaient relativement similaires, le modèle de référence étant plus performant que les deux systèmes FST et égal au modèle seq2seq. Le modèle seq2seq a obtenu le meilleur taux d'erreur de caractères, tandis que la référence affiche un taux d'erreur de mots légèrement meilleur. Cela peut s'expliquer par le fait que la ligne de base fonctionne au niveau du mot. Ainsi, une erreur entraîne la sélection de la mauvaise forme de mot, qui a probablement plusieurs caractères différents de la forme de mot correcte. Le modèle seq2seq, en revanche, prédit au niveau des caractères et peut ne commettre qu'une seule erreur de caractère dans un mot, comme un diacritique tonal manqué.

p06-01.png

Tableau 2: Comparaison entre les 4 modèles.

## 5.2 Analyse des erreurs

Pour mieux comprendre les performances de ces modèles, nous présentons des exemples de résultats des modèles pour trois phrases différentes et discutons des erreurs communes à chacun des modèles. Les exemples sont tirés de la sortie de l'ensemble de développement pour chacun des modèles.

p06-02.png

Tableau 3

Dans les phrases du tableau 3, on observe que les FST ont tendance à surgénérer la lettre ŋ lorsque l'orthographe source contient un n. De plus, il montre que le réseau LSTM réussit à générer le ton d'une nasale syllabique. Bien que la référence puisse souvent prédire le ton sur une nasale syllabique, ce token n'est pas dans les données d'entraînement, donc la référence produit simplement le token d'origine.

Les phrases du tableau 4 montrent que la plupart des systèmes sont capables de comprendre que les accents dans l'orthographe source ne sont pas indicatifs d'un accent sur l'orthographe cible. Cependant, le FST non pondéré tend à ajouter des accents même en l'absence d'accents dans la forme cible. Dans l'ensemble, nous voyons le LSTM bien performer sur l'assignation de ton et de caractères dans cet exemple, la référence étant presque parfaite en dehors du ton sur le deuxième token.

p06-03.png

Tableau 4

p06-04.png

Tableau 5

Dans les phrases du tableau 5, bien que le LSTM se rapproche, il n'est pas capable d'identifier le ton ascendant dans le premier jeton et marque le ton du deuxième jeton comme étant au milieu. La FST pondérée et la FST non pondérée prédisent correctement les caractères, mais sont très incohérentes avec les diacritiques tonales, bien qu'il soit évident que la FST pondérée surpasse la FST non pondérée.

## 6 Conclusion

Les résultats de cet article contribuent à la discussion concernant les avantages relatifs des méthodes NLP par rapport à des lignes de base plus simplistes dans des contextes à faibles ressources. Le baseline surpasse les FST non pondérés et pondérés ainsi que le réseau LSTM en ce qui concerne le WER. Comme le Bàsàá est une langue tonale, les changements de ton d'un caractère peuvent créer des paires minimales et ainsi le WER est une métrique plus réaliste pour évaluer l'utilité d'un modèle. Cependant, le baseline se contente de sortir le mot original pour tout token hors vocabulaire (OOV), ce qui signifie que la performance du baseline est fortement impactée par les tokens OOV. Bien que cela ait un impact minimal sur cet ensemble de données, un ensemble de données avec plus de jetons OOV serait moins performant.

Bien que la ligne de base fonctionne bien sur l'orthographe protestante, elle fonctionnerait probablement encore mieux sur l'orthographe catholique car elle utilise des marques d'accent grave au lieu de marques d'accent aigu. Bien que l'orthographe catholique et AGLC utilisent les accents graves pour marquer différentes choses, la présence de marques graves dans la cible est beaucoup plus probable que les marques d'accent aigu, qui n'apparaissent que lors de la déconstruction des tons ascendants et descendants sur les longues voyelles. La méthode de gestion des tokens OOV fonctionnerait donc mieux pour un texte source écrit dans l'orthographe catholique, car la probabilité d'avoir par coïncidence une sortie qui correspond à la forme d'entrée est beaucoup plus élevée lorsque l'orthographe source utilise des accents graves.

Dans cet article, les FST non pondérées et pondérées ont été écrites en utilisant des règles linguistiques très minimales, ce qui se traduit par leurs performances relativement médiocres. Le FST pondéré a grandement réduit l'impact du manque de règles détaillées, mais bénéficierait clairement encore de leur ajout.

Cet article présente une étude préliminaire de l'application des réseaux FST et LSTM au thème de la conversion orthographique. Bien que la ligne de base simpliste fonctionne étonnamment bien pour cet ensemble de données, nous croyons que la performance comparable du réseau FST pondéré et du réseau LSTM est prometteuse et nécessite un développement ultérieur de ces modèles, en particulier l'inclusion de règles linguistiques supplémentaires pour le FST pondéré et l'augmentation des données d'entraînement pour le réseau LSTM.

## Limites

Cet article tente de faire des déclarations plus larges sur l'applicabilité des méthodes actuelles de TAL pour la conversion de texte en discutant des résultats de ces modèles sur le Bàsàá. Le cas de Bàsàá est problématique car la représentation des tons est difficile pour de nombreux modèles. Cependant, cette étude bénéficie toujours de l'orthographe alphabétique romaine de la langue et des ressources disponibles pour les langues à orthographe alphabétique latine. De plus, Bàsàá utilise une orthographe transparente qui facilite également les méthodes automatiques de conversion. D'autres résultats et défis sont susceptibles d'apparaître lors de l'application de ces modèles à une langue qui utilise une orthographe non basée sur l'alphabet latin, non alphabétique et/ou opaque.

Comme ce projet vise à présenter un point de départ pour des recherches approfondies sur la conversion orthographique, nous avons commencé par fournir une comparaison globale et une brève analyse des erreurs. Toutefois, nous prévoyons mettre en œuvre une analyse plus systématique des erreurs pour orienter les travaux futurs. L'analyse actuelle des erreurs met en évidence certains modèles observés dans les données, mais un examen plus approfondi des résultats aidera à l'élaboration du système actuel pour Bàsàá.

## Déclaration éthique

La motivation de ce travail est de comparer les méthodes actuelles de TAL dans un contexte peu doté et de discuter de la manière dont les différents systèmes pourraient s'appliquer dans différents contextes en fonction des résultats, contribuant globalement à la discussion sur la manière dont les méthodes de TAL peuvent être utilisées pour bénéficier aux communautés linguistiques et soutenir la création de davantage de ressources linguistiques. Bien que l'objectif soit de soutenir la communauté linguistique, l'intégration de méthodes computationnelles pose également le risque de marchandisation de la langue et d'une dépossession de la propriété intellectuelle d'une communauté. Cette étude est soumise avec la conviction que les avantages actuels associés à l'application de cette recherche l'emportent sur ce risque.

## Remerciements

Cette recherche a été soutenue en partie par Lilly Endowment, Inc., grâce à son soutien pour l'Indiana University Pervasive Technology Institute.

## Références

STAN Adriana. 2019. Input encoding for sequence-to-sequence learning of romanian grapheme-to-phoneme conversion. In 2019 International Conference on Speech Technology and Human-Computer Dialogue (SpeD), pages 1-6. IEEE.

Maha Alkhairy, Afshan Jafri, and David A Smith. 2020. Finite state machine pattern-root arabic morphological generator, analyzer and diacritizer. In Proceedings of the Twelfth Language Resources and Evaluation Conference, pages 3834-3841.

Jochen S Arndt. 2019. Engineered zuluness: Language, education, and ethnic identity in south africa, 1835-1990. The Journal of the Middle East and Africa, 10(3):211-235.

Mayce Al Azawi, Muhammad Zeshan Afzal, and Thomas M Breuel. 2013. Normalizing historical orthography for ocr historical documents using lstm. In Proceedings of the 2nd International Workshop on Historical Document Imaging and Processing, pages 80-85.

Yasser Mohseni Behbahani, Bagher Babaali, and Mussa Turdalyuly. 2016. Persian sentences to phoneme sequences conversion based on recurrent neural networks. Open Computer Science, 6(1):219-225.

Steven Bird. 2001. Orthography and identity in cameroon. Written Language & Literacy, 4(2):131-162.

David M. Eberhard, Gary F. Simons, and Charles D. Fennig. 2022. Ethnologue: Languages of the World, twenty-fifth edition. SIL International.

Fatima Hamlaoui, Emmanuel-Moselly Makasso, Markus Müller, Jonas Engelmann, Gilles Adda, Alex Waibel, and Sebastian Stüker. 2018. BUL-Basaa: A bilingual basaa-French speech corpus for the evaluation of language documentation tools. In Proceedings of the Eleventh International Conference on Language Resources and Evaluation (LREC 2018), Miyazaki, Japan. European Language Resources Association (ELRA).

Rhonda L. Hartell. 1993. Alphabets of africa. SIL International.

Sepp Hochreiter and Jürgen Schmidhuber. 1997. Long short-term memory. Neural computation, 9(8):1735-1780.

Larry M Hyman. 2003. Basaá (a43). The Bantu languages, pages 257-282.

Carina Jahani. 1989. Standardization and orthography in the Balochi language. Ph.D. thesis, Acta Universitatis Upsaliensis.

Tanmai Khanna, Jonathan N Washington, Francis M Tyers, Sevilay Bayatlı, Daniel G Swanson, Tommi A Pirinen, Irene Tang, and Hèctor Alòs i Font. 2021. Recent advances in apertium, a free/open-source rule-based machine translation platform for low-resource languages. Machine Translation, 35(4):475-502.

Guillaume Klein, François Hernandez, Vincent Nguyen, and Jean Senellart. 2020. The opennmt neural machine translation toolkit: 2020 edition. In Proceedings of the 14th Conference of the Association for Machine Translation in the Americas (Volume 1: Research Track), pages 102-109.

Pierre Lemb and François de Gastines. 1973. Dictionnaire basaá-français, avec un préface par meinrad hebga edition. Collège Libermann, Douala.

Nicholas Limerick. 2018. Kichwa or quichua? competing alphabets, political histories, and complicated reading in indigenous languages. Comparative Education Review, 62(1):103-124.

Zhinan Liu, Feilong Bao, and Guanglai Gao. 2018. Mongolian grapheme to phoneme conversion by using hybrid approach. In Natural Language Processing and Chinese Computing: 7th CCF International Conference, NLPCC 2018, Hohhot, China, August 26-30, 2018, Proceedings, Part I 7, pages 40-50. Springer.

Minh-Thang Luong, Hieu Pham, and Christopher D Manning. 2015. Effective approaches to attention-based neural machine translation. arXiv preprint arXiv:1508.04025.

Emmanuel-Moselly Makasso and Seunghun J. Lee. 2015. Basaá. Journal of the International Phonetic Association, 45(1):7179.

Kavya Manohar, AR Jayan, and Rajeev Rajan. 2022. Mlphon: A multifunctional grapheme-phoneme conversion tool using finite state transducers. IEEE Access, 10:97555-97575.

Etienne Sadembouo Maurice Tadadjeu. 1979. Alphabet général des langues camerounaises / General Alphabet of Cameroon Languages. Université de Yaoundé, SIL Internationale, University of Yaoundé, SIL International.

Rebecca L Moreton et al. 1968. Cameroon basaa. Inspection copy available from Foreign Languages Program, Center for Applied Linguistics.

Ulrike Mosel. 2004. Dictionary making in endangered speech communities. Language documentation and description, 2:39-54.

Emmanuel Ngué Um, Émilie Eliette, Caroline Ngo Tjomb Assembe, and Francis Morton Tyers. 2022. Developing a rule-based machine-translation system, ewondo-french-ewondo. International Journal of Humanities and Arts Computing, 16(2):166-181.

Ilya Nikitin, Brian O'Connor, and Anastasia Safonova. 2022. Tone prediction and orthographic conversion for basaa. arXiv preprint arXiv:2210.06986.

Pierre Emmanuel. Njock. 2019. àsàa - French - English - German Dictionary. Dallas: Webonary.org.

Iroro Orife. 2018. Attentive sequence-to-sequence learning for diacritic restoration of yorùbá language text. In Interspeech.

Kirk R Person. 2009. Heritage scripts, technical transcriptions, and practical orthographies: a middle path towards educational excellence and cultural preservation for thailands ethnic minority languages. In Proceedings from the international conference on national language policy: Language diversity for national unity.

Mihaela Rosca and Thomas Breuel. 2016. Sequence-to-sequence neural network models for transliteration. arXiv preprint arXiv:1610.09565.

Fotini Simistira, Adnan Ul-Hassan, Vassilis Papavassiliou, Basilis Gatos, Vassilis Katsouros, and Marcus Liwicki. 2015. Recognition of historical greek polytonic scripts using lstm networks. In 2015 13th International Conference on Document Analysis and Recognition (ICDAR), pages 766-770. IEEE.

Daniel Swanson and Nick Howell. 2021. Lexd: A finite-state lexicon compiler for non-suffixational morphologies. In Mika Hämäläinen, Niko Partanen, and Khalid Alnajjar, editors, Multilingual Facilitation. University of Helsinki Library.

Scientific United Nations Educational and Cultural Organization. 1966. Meeting of a group of experts for the unification of alphabets of national languages. Bamako, Mali, 28 February 5 March 1966. Final report. United Nations Educational, Scientific and Cultural Organization, UNESCO.

Jonathan Washington, Felipe Lopez, and Brook Lillehaugen. 2021. Towards a morphological transducer and orthography converter for western tlacolula valley zapotec. In Proceedings of the First Workshop on Natural Language Processing for Indigenous Languages of the Americas, pages 185-193.
