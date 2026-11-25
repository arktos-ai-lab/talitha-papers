> Machine translation (fr) of "The Analysis of the Sepedi-English Code-switched Radio News Corpus" by Simon Ramalepe, Thipe I. Modipa, Marelie H. Davel, https://upjournals.up.ac.za/index.php/dhasa/article/view/4444, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## L'analyse du corpus d'informations radiophoniques en code-switching Sepedi-Anglais

Simon Ramalepe, Thipe I. Modipa, Marelie H. Davel

**Affiliations**  
Ramalepe, Simon  
Computer  
Science  
Department,  
University  
of  
Limpopo, Sovenga, 0727, South Africa.  
  
Modipa, Thipe I.  
Computer  
Science  
Department,  
University  
of  
Limpopo, Sovenga, 0727, South Africa.  
Centre for Artificial Intelligence Research (CAIR),  
South Africa.  
  
Davel, Marelie H.  
Faculty of Engineering, North-West University,  
Potchefstroom, South Africa  
Centre for Artificial Intelligence Research (CAIR),  
South Africa.

## Résumé

Le code-switching est un phénomène qui se produit principalement dans les pays multilingues où les locuteurs multilingues changent souvent de langue dans leurs conversations. L'absence de corpus de commutation de code à grande échelle entrave le développement et l'apprentissage de modèles de langage pour la génération de texte commuté de code. Dans cette étude, nous explorons la phase initiale de la collecte et de la création d’un corpus en commutation de code Sepedi-anglais pour générer des nouvelles synthétiques. Les journaux radiophoniques et la fréquence de l'alternance codique dans les journaux lus ont été pris en compte et analysés. Nous avons développé et entraîné un modèle de langage basé sur Transformer en utilisant le jeu de données alterné collecté. Nous avons observé que la fréquence des données à code commuté dans l'ensemble de données était très faible à 1,1 %. Nous avons complété notre ensemble de données avec l'ensemble de données des titres de nouvelles pour créer un nouvel ensemble de données. Bien que la fréquence soit encore faible, le modèle a obtenu le taux de perte optimal de 2,361 avec une précision de 66 %.

## Mots-clés

Code-switching, génération de texte, actualités radio, Transformers, Sepedi

## 1 Introduction

Le code-switching est l'utilisation de plus d'une langue au sein d'une phrase dans un discours. Il est généralement plus répandu dans les communautés multilingues par la parole que par le texte (Gupta et al. 2020). Cependant, la tendance actuelle de la communication par la technologie implique le texte, et il est plus éminent sur les médias sociaux. Comme dans la plupart des pays multilingues, les Sud-Africains, notamment les locuteurs de Sepedi, utilisent le code-switching dans leurs conversations. Le code-switching est généralement catégorisé en commutation inter-sententielle et intra-sententielle. L'alternance codique inter-phrastique se produit au niveau de la phrase lorsqu'un locuteur change de langue d'une phrase à l'autre, tandis que l'alternance intra-phrastique se produit au niveau du mot lorsque plus d'une langue est utilisée dans une phrase (Hamed et al. 2017). La langue principale dans un environnement de code-switching est communément appelée la langue matrice tandis que la langue secondaire est appelée la langue intégrée (Hamed et al. 2017).

Une autre forme de code-switching intra-phrastique utilise des mots empruntés ou des emprunts lexicaux (Chan et al. 2005). Les mots empruntés ou prêtés se produisent dans des situations où des voyelles ou des consonnes sont ajoutées ou remplacées pour reproduire des mots phonétiquement acceptés dans le langage matriciel. La distinction entre le code-switching, le code-mixing et l'emprunt est difficile, c'est pourquoi, dans cette étude, nous utiliserons le terme code-switching pour désigner à la fois le code-switching inter et intra-phrastique.

Des études ont montré qu’il existe une parcimonie ou un manque de données textuelles commutées par code (Chang et al. 2018, Gao et al. 2019, Gupta et al. 2020). Cela pourrait être dû à la nature informelle des données en commutation de code. En d'autres termes, le code-switching se produit normalement dans un environnement informel ou social, que ce soit dans la parole ou dans le texte. Par conséquent, il y a un manque d'ensembles de données documentés sur les données à commutation de code. Le développement d'un corpus d'alternance codique généré synthétiquement, pouvant être utilisé pour entraîner des modèles de langage pour la génération automatique de texte, a été proposé. Cependant, le texte généré n'est pas aut entic et doit être testé s'il ressemble à un véritable phénomène de commutation de code. L'absence de grands corpus d'alternance codique existants constitue un défi pour le développement de modèles de langage de génération automatique de texte en alternance codique, en particulier pour les langues sous-dotées telles que le Sepedi.

Le Sepedi est l'une des langues officielles d'Afrique du Sud et est classé comme une langue sous-dotée en ressources. Actuellement, les corpus disponibles de code-switching pour la paire de langues Sepedi-Anglais ne sont pas suffisants pour une utilisation avec les techniques d'apprentissage profond. Dans cette étude, nous discutons et analysons le processus initial de collecte de données textuelles en code-switching Sepedi-Anglais pour le développement de modèles de code-switching pour cette paire de langues. Le corpus collecté est ensuite appliqué à un modèle de langage de génération automatique de texte afin d'observer les performances du modèle utilisant des données textuelles d'alternance codique non générées synthétiquement.

Le document est structuré comme suit : la section 2 traite du contexte de l'étude. La section 3 présente les jeux de données utilisés pour l'entraînement du modèle de génération automatique de texte. Dans la section 4, nous discutons des expériences menées, tandis que dans la section 5, nous nous concentrons sur les résultats obtenus et l'évaluation du modèle qui en découle. Les remarques conclusives et les travaux futurs sont présentés dans la section 6.

## 2 Contexte

La langue Sepedi est principalement parlée dans la province du Limpopo en Afrique du Sud avec une population de 5,9 millions (Statistics South Africa 2022). C'est la langue matricielle dans la plupart des conversations spontanées dans la province tandis que l'anglais et d'autres langues sud-africaines deviennent intégrés dans les conversations. L'alternance codique n'est pas courante dans la parole lue ou le texte écrit, mais elle se produit assez souvent dans les conversations spontanées, ce qui rend difficile la collecte de données avec alternance codique pour l'entraînement et le test des modèles de langage. Lorsque cela se produit, c'est pour mettre l'accent dans un cadre multilingue. Des tentatives de collecte de corpus de discours à code commuté ont été faites. Hamed et al. (2018) ont collecté des données de discours spontané en arabe égyptien-anglais avec alternance de code en menant et enregistrant des conversations d'entretiens informels. L'analyse de leurs données a montré qu'il y avait une forte utilisation de code-mélange (intra-sentenciel). Sur les 1 234 phrases de leur ensemble de données, 985 (79,8 %) phrases étaient des mélanges de codes, 124 (10 %) phrases étaient du texte monolingue arabe et 125 (10,1 %) phrases étaient du texte monolingue anglais. Les mots déclencheurs les plus fréquents précédant le point d'alternance codique ont également été relevés, ainsi que les uni-grammes, bi-grammes et tri-grammes les plus fréquents. Le marquage des parties du discours (POS) a été effectué sur une partie des données et il a été noté que les noms sont principalement utilisés dans le langage intégré.

Dans une autre étude, Chan et al. (2005) ont développé un corpus oral de mélange codique cantonais-anglais pour étudier l'effet de l'accent cantonais en anglais. Une situation où la plupart des mots anglais contiennent un accent cantonais. Pour la collecte des données, des groupes de discussion et des méthodes de journal en ligne ont été utilisés. La fréquence des mots alternés, l'étiquetage morpho-syntaxique des mots mixtes et la longueur du texte alterné ont été notés. Comme dans Hamed et al. (2017), la fréquence d'occurrence des noms était élevée à 62,3 % et les mots de longueur 1 représentaient 74,96 % ; Lyu et al. (2015) ont également développé un corpus oral d'alternance codique mandarin-anglais. Leur corpus était dominé par le code-switching intra-sententiel du langage matriciel. L'approche de collecte de données comprenait également des entrevues et des conversations enregistrées. Les mots les plus fréquents ont également été identifiés.

Modipa et al. (2013) ont développé un corpus oral d'alternance codique sepedi-anglais pour analyser les facteurs d'implication de l'alternance codique lors du développement de systèmes de reconnaissance automatique de la parole (ASR) capables de traiter la parole avec alternance codique sepedi-anglais. Dans leur approche de collecte de données, les émissions radiophoniques ont été enregistrées et le nombre d’événements à commutation de code a été compté et transcrit pour créer le corpus à commutation de code en Sepedi (SPCS) (Modipa & Davel 2022).

Tableau 1 : Nombre de phrases, de mots et de jetons uniques dans les ensembles de données.

p03-01.png

Tableau 2 : Top 10 des mots anglais et des mots empruntés les plus fréquents dans l’ensemble de données.

p03-02.png

Bien que le SPCS soit petit (contient de courtes phrases à code commuté), il fournit une base de référence pour le corpus à code commuté pour la paire de langues Sepedi-anglais. Marivate et al. (2020) ont créé un corpus de titres de nouvelles en Sepedi à partir de la page Facebook d'une radio nationale. Les données ont été utilisées pour développer un modèle de classification de l'actualité.

Van Der Westhuizen & Niesler (2016) ont compilé le corpus oral spontané d'alternance codique anglais-isiZulu à partir de feuilletons télévisés sud-africains. Les données ont été transcrites manuellement et le texte monolingue en anglais dominait le corpus à 75%. Les données ont été annotées et les limites de l'alternance codique ont été identifiées. Des corpus multilingues à commutation de code pour l'anglais-isiZulu, l'anglais-isiXhosa, l'anglais-Setswana et l'anglais-Sesotho ont été développés (Van Der Westhuizen & Niesler 2018). La collecte de données pour ce corpus multilingue à code commuté a été obtenue à partir d'enregistrements vidéo numériques de 626 épisodes de feuilletons sud-africains. Les données ont été transcrites manuellement par les locuteurs bilingues des paires de langues. Les mots déclencheurs de code-switching les plus fréquents ont été identifiés dans chacune des paires de langues.

Dans une autre étude, Jansen van Vueren & Niesler (2021) ont utilisé l'augmentation de données pour entraîner et évaluer les performances de modèles de langage à commutation de code. La mémoire à court terme longue (LSTM) a été utilisée comme modèle génératif pour générer synthétiquement des données à commutation de code pour augmenter les petits ensembles de données à commutation de code. L'étude observe que les modèles optimisés pouvaient générer du texte avec une perplexité et un taux d'erreur de mots améliorés par rapport aux modèles sans optimisation des données qui ont été étudiés dans (Van Der Westhuizen & Niesler 2016).

## 3 Collecte des données

Les ensembles de données d'actualités et de titres d'actualités de la radio Sepedi sont utilisés dans cette étude pour le développement des modèles et de l'analisis. Le jeu de données d'actualités radiophoniques en Sepedi est le jeu de données principal de cette étude. Les données ont été recueillies auprès d'une station de radio communautaire basée à Limpopo pour créer un corpus à commutation de code. Plusieurs émissions sont présentées quotidiennement, et la collecte de données se concentre sur les nouvelles de la radio lues à différents moments de la journée entre juin et août 2022. Le nettoyage des données a été effectué pour standardiser les données. Nous avons utilisé le jeu de données pour entraîner le modèle de génération de texte basé sur Transformer développé et avons observé son exactitude lors de la génération d'actualités synthétiques.

Le tableau 1 montre la taille des ensembles de données avec une répartition de 70% pour l'entraînement, 20% pour la validation et 10% pour les tests". L'ensemble de données des titres de presse Marivate et al. (2020) a été utilisé pour la comparaison avec l'ensemble de données des nouvelles de la radio Sepedi. L’ensemble de données est relativement petit avec 1 182 phrases avec un code-switching minimal.

Le tableau 2 montre les 10 mots anglais et empruntés les plus fréquents dans l’ensemble de données sur les nouvelles de la radio Sepedi. Le nombre total de jetons uniques anglais est de 136, ce qui constitue seulement 8,8 % des jetons uniques totaux dans le jeu de données. Seuls 9% des jetons uniques anglais ont une fréquence de 10 et plus. Le nombre moyen de mots par phrase dans l'ensemble de données combiné est de 18,2. Nous avons échantillonné aléatoirement 30 phrases dans le jeu de données des nouvelles radiophoniques et avons observé que les noms et les noms propres en anglais dominaient la forme de l'alternance codique dans le jeu de données, ainsi que l'utilisation de mots empruntés comme on peut le voir dans le Tableau 2. Le nombre de mots anglais était de 31 sur 929 mots dans les données échantillonnées. Cela se traduit par une faible fréquence de code-switching de seulement 3,3% avec un ratio de seulement 1 mot anglais par phrase. Une analyse plus approfondie de l'ensemble de données ne montre pas de commutation de code inter-sententiel.

p04-01.png

Figure 1: Fréquence des mots dans l’ensemble de données d’entraînement

La visualisation des données dans tous les ensembles de données montre que les bi-grammes (niveau des caractères) ont une fréquence élevée. La Fig. 1 montre les 10 fréquences de mots les plus élevées dans l'ensemble de données des nouvelles radio en Sepedi. L'axe des y représente la fréquence de chaque mot dans l'ensemble de données tandis que l'axe des x montre les mots du vocabulaire triés du plus au moins fréquent.

## 4 Configuration expérimentale

Pour une comparaison avec l'étude précédente de Ramalepe et al. (2022) sur des données monolingues, nous avons adopté la même approche qu'ils ont utilisée pour développer le modèle basé sur Transformer. Le modèle développé possède un bloc Transformer avec un masquage causal sur les couches d'attention, deux couches d'embedding distinctes pour les tokens et un index de token avec une couche dense et 2 têtes d'attention. Nous avons utilisé une taille d'embedding de 64 pour la complexité du modèle avec le taux de dropout par défaut de 0,1. Adam a été utilisé comme optimiseur de modèle et l'unité linéaire rectifiée (ReLU) comme fonction d'activation. La taille du vocabulaire a été fixée à 3k (presque le nombre total de tokens uniques dans le jeu de données combiné). Les deux ensembles de données sont combinés pour observer s'il y a une amélioration de la performance du modèle à mesure que la taille des données augmente. Le modèle a été entraîné pour 50 époques en raison de la petite quantité de données dans l'ensemble de données.

p05-01.png

Figure 2 : Courbe de perte et d'exactitude pour le jeu de données Radio news

p05-02.png

Figure 3 : Courbe de perte et de précision pour le jeu de données des titres d'actualités

La précision du modèle a été mesurée en calculant le nombre total de prédictions correctes en pourcentage du nombre total de prédictions pendant l'entraînement en utilisant la métrique de fonction SparseCategoricalAccuracy qui est utilisée principalement lors de la réalisation de prédictions de texte pour des cibles éparses dans l'apprentissage profond. La métrique SparseCategoricalAccuracy vérifie si la valeur vraie maximale est égale à l'index de la valeur prédite maximale.

## 5 Résultats et analyse

La figure 2 montre la perte et la courbe d'exactitude à chaque époque du processus d'apprentissage pour l'ensemble de données des nouvelles radio en Sepedi, tandis que la figure 3 montre la perte et la courbe d'exactitude de l'ensemble de données des titres de nouvelles. La courbe de perte et de précision pour l’ensemble de données combiné est illustrée à la figure 4. Le taux de perte optimal du modèle était de 2,361 obtenu avec l'ensemble de données combiné avec une précision de 66%. Nous avons observé que bien que la précision optimale obtenue représentait une amélioration par rapport aux 50,3 % obtenus dans Moila & Modipa (2020) en utilisant la technique basée sur les LSTM sur des données monolingues, elle était encore inférieure à la précision de 75 % obtenue dans Ramalepe et al. (2022) en utilisant l'approche basée sur le Transformer. Le tableau 3 présente le résumé des résultats. Il est en outre observé que la taille de l'ensemble de données influence la précision du modèle. Lorsque le modèle a été entraîné avec l'ensemble de données des nouvelles radios Sepedi (le plus petit ensemble de données), la précision obtenue était faible, elle augmentait à mesure que nous augmentions les données dans l'ensemble de données.

Dans toutes les figures, Fig. 2, Fig. 3 et Fig. 4, l'ensemble de validation a eu du mal à généraliser, montrant une indication de surapprentissage. Cela est en grande partie dû à la quantité limitée de données que nous avions dans tous les ensembles de données. Pour générer du texte, nous commençons par alimenter le modèle avec l'invite de démarrage, le modèle génère ensuite la distribution de probabilité conditionnelle sur les mots d'entrée et échantillonne le mot suivant à partir des probabilités conditionnelles. Le nouvel ensemble de mots devient alors la nouvelle entrée du modèle, le processus continue jusqu'à ce que la longueur maximale de la séquence soit atteinte. Pour observer les performances du modèle sur les données à code commuté, nous avons fourni au modèle un texte d'entrée et le modèle a généré le texte dans le tableau 4. À partir du texte généré, on peut voir que bien que les phrases soient grammaticalement correctes, certaines ne sont pas sémantiquement correctes et n'ont pas une organisation de mot appropriée (formatée en italique dans le texte généré). Par exemple, l'expression « tsa selegae thekgo hlatlositse » (du soutien local augmenter) pourrait être corrigée en « hlatlositse thekgo ya tsa selegae » (soutien local augmenté). Le nombre de mots anglais dans tous les ensembles de données était très faible, donc ces mots n'ont pas influencé la précision du modèle et du texte généré. Cependant, la performance du modèle est inférieure de 12 % aux 75 % obtenus dans Ramalepe et al. (2022).

Tableau 3 : Taux de perte de validation et exactitude pour chaque ensemble de données

p06-01.png

Tableau 4 : Texte généré

p06-patch01.png

p06-02.png

Figure 4 : courbe de perte et de précision : ensemble de données combiné.

Bien que la fréquence des mots à commutation de code dans les ensembles de données soit très faible, le modèle a pu générer au moins un mot à commutation de code. Par exemple, "pharela ya dienywa tsa citrus go hlola dibaka tsa selegae" (L'impasse des agrumes pour créer des opportunités locales). Les résultats signifient un sentiment positif de succès envers la création d'un ensemble de données à grande échelle à commutation de code pour entraîner des modèles plus grands. Un défi majeur qui reste à relever est de trouver des moyens réalisables d'obtenir des données spontanées en commutation de code par rapport au texte lu. Cependant, de telles données sont souvent exigeantes en raison de la transcription d'une grande quantité de textes vocaux.

## 6 Conclusion

Dans cette étude, nous avons discuté de la phase initiale de collecte, de développement et d'analyse d'un corpus de commutation de code utilisant les informations radiophoniques en Sepedi. Le corpus d'informations radiophoniques en Sepedi développé a été utilisé pour entraîner un modèle de génération de texte basé sur Transformer afin d'observer ses performances sur des données de commutation de code. Le modèle a atteint la précision optimale de 66% avec un ensemble de données combiné. L'augmentation des données peut être envisagée à l'avenir pour augmenter le texte et créer un nouveau jeu de données à code commuté. D'autres moyens de collecter des données spontanées à code commuté par le biais d'enregistrements en direct et de transcription peuvent également être envisagés à l'avenir. Pour valider la qualité du texte généré, des évaluateurs humains peuvent également être envisagés dans le cadre des travaux futurs.

## Remerciements

Ce travail est soutenu par le Centre de recherche en intelligence artificielle et le Centre d'excellence Telkom à l'Université de Limpopo.

## Références

Chan, J. Y. C., Ching, P. C. & Lee, T. (2005), Development of a Cantonese-English Code-mixing Speech Corpus, in 'Ninth European conference on speech communication and technology.'.

Chang, C.-T., Chuang, S.-P. & Lee, H.-Y. (2018), Code-switching Sentence Generation by Generative Adversarial Networks and its Application to Data Augmentation, in 'arXiv preprint arXiv:1811.02356.'.

Gao, Y., Feng, J., Liu, Y., Hou, L., Pan, X. & Ma, Y. (2019), Code-switching sentence generation by BERT and generative adversarial networks, in 'In INTERSPEECH', Vol. 2019-September, International Speech Communication Association, pp. 3525-3529.

Gupta, D., Ekbal, A. & Bhattacharyya, P. (2020), Findings of the Association for Computational Linguistics A Semi-supervised Approach to Generate the Code-Mixed Text using Pre-trained Encoder and Transfer Learning, in 'In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing:', pp. 2267-2280.

Hamed, I., Elmahdy, M. & Abdennadher, S. (2017), Building a First Language Model for Code-switch Arabic-English, in 'Procedia Computer Science', Vol. 117, Elsevier B.V., pp. 208-216.

Hamed, I., Elmahdy, M., Abdennadher, S., Tagamoa, E. & Khames, E. (2018), Collection and Analysis of Code-switch Egyptian Arabic-English Speech Corpus, in 'Proceedings of the Eleventh International Conference on Language Resources and Evaluation (LREC 2018).', pp. 3805-3809.

Jansen van Vueren, J. & Niesler, T. (2021), Optimised Code-Switched Language Model Data Augmentation in Four Under-Resourced South African Languages, in 'Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics)', Vol. 12997 LNAI, Springer Science and Business Media Deutschland GmbH, pp. 303-316.

Lyu, D. C., Tan, T. P., Chng, E. S. & Li, H. (2015), 'Mandarin-English code-switching speech corpus in South-East Asia: SEAME', Language Resources and Evaluation 49(3), 581-600.

Marivate, V., Sefara, T., Chabalala, V., Makhaya, K., Mokgonyane, T., Mokoena, R. & Modupe, A. (2020), 'Investigating an approach for low resource language dataset creation, curation and classification: Setswana and Sepedi'.

Modipa, T. I. & Davel, M. H. (2022), 'Two sepedi-english code-switched speech corpora', Language Resources and Evaluation 56(3), 703-727.

Modipa, T. I., Davel, M. H. & de Wet, F. (2013), Implications of Sepedi/English code switching for ASR systems, in 'In Proceedings of the Twenty-Fourth Annual Symposium of the Pattern Recognition Association of South Africa (PRASA 2013)', Johannesburg, South Africa.

Moila, M. M. & Modipa, T. I. (2020), The development of a sepedi text generation model using long-short term memory, in 'Proceedings of the 2nd International Conference on Intelligent and Innovative Computing Applications', ACM, New York, NY, USA, pp. 1-5.

Ramalepe, P. S., Modipa, T. I. & Davel, H. M. (2022), The Development of a Sepedi Text Generation Model Using Transformers [Paper presentation], in 'SATNAC-2022', George, Western Cape, pp. 51-56. URL: https://www.satnac.org.za/proceedings

Statistics South Africa (2022), Mid-year population estimates 2022, Technical report. URL: www.statssa.gov.za,,Tel+27123108911

Van Der Westhuizen, E. & Niesler, T. (2016), Automatic Speech Recognition of English-isiZulu Code-switched Speech from South African Soap Operas, Technical report.

Van Der Westhuizen, E. & Niesler, T. (2018), A First South African Corpus of Multilingual Code-switched Soap Opera Speech, in 'Proceedings of the Eleventh International Conference on Language Resources and Evaluation (LREC 2018).'.
