> Machine translation (fr) of "Localising the Mozilla Common Voice platform for South Africa’s official languages" by Febe de Wet, Andiswa Bukula, Willem Karsten, Martin Puttkammer, Erwin Schillack, Roné Wierenga, Roald Eiselen, https://upjournals.up.ac.za/index.php/dhasa/article/view/4437, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## Localiser la plateforme Mozilla Common Voice pour les langues officielles d'Afrique du Sud

Febe de Wet, Andiswa Bukula, Willem Karsten, Martin Puttkammer, Erwin Schillack, Roné Wierenga, Roald Eiselen

**Affiliations**  
de Wet, Febe  
Department of Electrical and Electronic Engineering, Stellenbosch University & School of Electrical,  
Electronic and Computer Engineering, North-West  
University  
  
Bukula, Andiswa  
South African Centre for Digital Language Resources, North-West University  
  
Karsten, Willem  
School of Electrical, Electronic and Computer Engineering, North-West University  
  
Puttkammer, Martin  
Centre for Text Technology, North-West University  
  
Schillack, Erwin  
School of Electrical, Electronic and Computer Engineering, North-West University  
  
Wierenga, René  
Virtuele Instituut vir Afrikaans  
  
Eiselen, Roald  
Centre for Text Technology, North-West University  


## Résumé

Malgré de nombreuses tentatives pour remédier à la situation, les langues officielles d'Afrique du Sud restent sous-équipées en termes de données textuelles et vocales nécessaires à la mise en œuvre de technologies linguistiques de pointe. Pour garantir qu'aucune langue ne soit laissée de côté[1], le développement des ressources devrait rester une priorité jusqu'à ce qu'une forte présence numérique ait été établie pour toutes les langues indigènes. Ce document donne un aperçu des projets précédents qui visaient spécifiquement le développement de ressources vocales et présente une initiative en cours pour lancer les langues d'Afrique du Sud sur la plate-forme Mozilla Common Voice.

## Mots-clés

DHASA, langues sous-dotées, ressources vocales, Mozilla Common Voice

## 1 Introduction

La constitution sud-africaine reconnaît onze langues officielles: l'afrikaans (Afr), l'anglais sud-africain (Eng), l'isiNdebele (Nbl), l'isiXhosa (Xho), l'isiZulu (Zul), le Sepedi (Nso), le Sesotho (Sot), le Setswana (Tsn), le Siswati (Ssw), le Tshivenda (Ven) et le Xitsonga (Tso). À l'exception de l'anglais et de l'afrikaans, toutes les langues officielles appartiennent à la famille des langues bantoues du Sud-Est. L'isiNdebele, le Siswati, l'isiXhosa et l'isiZulu font partie du groupe linguistique Nguni et le Sepedi, le Sesotho et le Setswana font partie du groupe linguistique Sotho. Les langues au sein de chaque famille sont étroitement liées, avec des attributs orthographiques et morphosyntaxiques similaires.

La plupart des gens en Afrique du Sud parlent plus d'une langue bantoue et l'anglais. En conséquence, l'anglais sert de lingua franca et est le plus fréquemment utilisé dans le commerce et le droit. Certains des citoyens du pays ont accès à la technologie linguistique et vocale par l'intermédiaire de l'anglais. Pour les dix langues restantes, il reste beaucoup à faire pour atteindre le niveau de développement technologique déjà atteint pour des langues comme l'anglais. À cet égard, les langues autochtones d'Afrique du Sud sont dans la même position que la majorité des près de 7 000 langues parlées dans le monde aujourd'hui: la technologie du langage et de la parole utilisable n'est pas encore disponible (Adda et al. 2019, Joshi et al. 2020).

Malgré divers projets visant à remédier à cette situation, le rythme de développement des ressources dans les langues d'Afrique du Sud n'a pas suivi le rythme auquel la technologie et les exigences en matière de données associées aux techniques de pointe ont progressé. En conséquence, bon nombre des dernières technologies, en particulier les techniques d'apprentissage profond, ne peuvent pas être mises en œuvre efficacement pour les langues locales d'Afrique du Sud en raison d'un manque de données appropriées.

Cet article décrit une initiative récente visant à lancer les langues officielles de l'Afrique du Sud sur la plateforme Common Voice[2] de Mozilla. Le projet Common Voice vise à rendre la technologie de reconnaissance automatique de la parole ouverte et accessible en créant des jeux de données ouverts, de haute qualité et accessibles au public dans autant de langues que possible. Pour qu’une langue atteigne le statut de langue officielle, le site Web de Common Voice doit être localisé et au moins 5 000 phrases dans la langue cible doivent être collectées et disponibles dans le domaine ouvert sous licence CC0 [3]. Une fois le statut de lancement atteint, les phrases sont utilisées comme invites pour la collecte de données de parole via la plateforme Mozilla Common Voice. Bien que Mozilla mette la plateforme Common Voice à disposition gratuitement, ils ne sont pas impliqués dans la localisation et la collecte de données et ne fournissent aucun soutien financier aux participants. La présence d'une langue sur la plateforme est déterminée par les communautés linguistiques elles-mêmes.

## 2 Contexte

Un certain nombre de projets ont déjà contribué à la mise en place de ressources linguistiques de base ainsi que de technologies de la parole et du texte dans les langues officielles de l'Afrique du Sud. Beaucoup d'entre eux ont été soutenus par le gouvernement sud-africain[4].

L'une des premières tentatives de développement de la technologie dans les langues autochtones du pays, le projet African Speech Technology (AST), a été financé par le Fonds d'innovation du Département de la science et de la technologie (Roux et al. 2004). L'un des objectifs du projet était de préparer les langues d'Afrique du Sud à un avenir numérique. Il était également envisagé que les technologies du langage faciliteraient l'accès multilingue à l'information pour les citoyens d'Afrique du Sud. Cinq bases de données de discours téléphoniques en isiXhosa, Sesotho, isiZulu, anglais sud-africain et afrikaans ont été développées au cours du projet. Les données ont été transcrites de manière orthographique ainsi que phonétique et utilisées pour développer une version prototype d'un système de réservation d'hôtel multilingue, basé sur le téléphone. Une voix de synthèse vocale de texte à domaine limité a également été construite pour chacune des cinq langues, permettant au système de fournir un retour vocal dynamique bien que limité au domaine.

À la suite du projet AST, trois projets Lwazi[5] ont été financés par le Département sud-africain des arts et de la culture dans le but d'étendre les jeux de données de parole téléphonique disponibles pour inclure les 11 langues officielles et d'accroître l'impact des technologies vocales en Afrique du Sud (Barnard et al. 2010, Kuun 2012, Calteaux et al. 2013, Titmus et al. 2016). Dans le cadre de ce dernier objectif, des systèmes de synthèse vocale de texte et de transcription automatique de la parole ont été développés dans les 11 langues et évalués dans des applications comprenant un service téléphonique à commande vocale pour les vétérinaires ruraux et un système de réponse vocale interactive multilingue par téléphone pour le Programme national de nutrition scolaire du Département de l'éducation de base.

L'isiZulu a été inclus dans les ensembles de données qui ont été collectées pour soutenir les programmes Babel et LORELEI (Low Resource Languages for Emergent Incidents) de l'IARPA/DARPA[6] (Harper 2011, Strassel & Tracey 2016). Ces programmes ont donné lieu à de nombreuses recherches sur le développement de capacités de reconnaissance automatique de la parole et de détection de termes parlés dans les langues à faibles ressources, dont beaucoup incluaient l'isiZulu comme exemple de langue.

Le National Centre for Human Language Technology (NCHLT) a ensuite financé deux projets pour collecter des ensembles de données de parole et de texte substantiellement plus grands que ceux compilés lors des projets précédents. Les efforts de collecte de données ont donc dépassé la portée téléphonique et limitée du domaine des projets AST et Lwazi. Cet effort a abouti à 11 corpus de discours contenant 50 à 60 heures de parole à large bande transcrite orthographiquement par langue et 11 corpus de texte de 1,15 à 3,27 millions de mots par langue (Barnard et al. 2014, Eiselen & Puttkammer 2014). À l'exception de quelques efforts de collecte de données spécifiques au domaine (Davel et al. 2011, de Wet et al. 2011, de Wet et al. 2016), celles-ci demeurent les ressources les plus étendues disponibles pour le développement des technologies vocales dans le pays.

La majorité des projets mentionnés dans les paragraphes précédents étaient associés à une institution spécifique en Afrique du Sud, tandis que toute personne issue de n'importe quelle communauté linguistique (qui adhère au code de conduite de Mozilla) peut participer au projet Common Voice. Toute personne qui le souhaite peut donc contribuer à l'effort de collecte de données et s'impliquer dans la communauté locale des technologies du langage. Le projet Common Voice a également une portée internationale, ce qui signifie que la communauté sud-africaine peut bénéficier des « leçons apprises » lors de la localisation et de la collecte de données dans d'autres pays, ainsi que du soutien technique fourni sur les groupes d'utilisateurs de la communauté Common Voice. Le reste de l'article décrit comment le site web de Common Voice a été localisé et présente les résultats d'une première tentative de récolte de phrases à partir de données textuelles sur le web.

## 3 plateforme Mozilla Common Voice

Comme mentionné dans la Section 1, une langue doit répondre à deux exigences pour être lancée sur la plateforme Common Voice : 1) le site web doit être traduit dans la langue cible et 2) 5 000 phrases qui sont dans le domaine ouvert doivent être collectées. Mozilla fournit des outils (via des sites web et des groupes d'utilisateurs de la communauté) et des directives pour aider à ces deux processus. Leur mise en œuvre dans le projet actuel est brièvement décrite dans les deux sections suivantes du document.

## 3.1 Traduction

Plusieurs prestataires de services ont été invités à soumettre des devis pour la traduction du site web Common Voice de l'anglais vers les 10 autres langues officielles. Une entreprise ayant une expérience antérieure en localisation a été identifiée comme le meilleur candidat pour effectuer les traductions. Toutes les traductions ont été réalisées par la même société afin qu'elle puisse gérer des aspects tels que la standardisation de la terminologie entre les langues de la même manière pour toutes les langues.

Les mots et les énoncés ont été traduits à l'aide de l'outil de traduction de Mozilla, Pontoon[7], avant d'être utilisés pour générer automatiquement des pages Web spécifiques à la langue. Les pages web résultantes ont ensuite été relues par une deuxième équipe de linguistes. Les retours qu'ils ont fournis allaient des remarques sur le choix lexical basé sur les différences de variation géographique intra-linguistique entre les dialectes des traducteurs et des correcteurs (malgré le fait que les deux parties soient des locuteurs natifs de la langue) à la manière dont la technologie de Mozilla utilisait les mots pour créer des traductions automatiques sans tenir compte de la composition morphologique d'un mot. Entre autres choses, leurs commentaires indiquaient que les outils de Mozilla ne prévoyaient pas le système d'accord de classe nominal dans les langues nguni, ce qui entraînait que les mots traduits isolément n'apparaissaient pas correctement dans les phrases. Dans certains cas, les outils ne tenaient pas compte de la longueur des mots dans des phrases plus descriptives où les mots sont plus complexes morphologiquement.

Les traducteurs et les relecteurs ont également trouvé difficile d'effectuer la localisation car de nombreuses langues n'ont actuellement pas de mots pour la terminologie technologique telle que étiqueteur de catégorie grammaticale ou constructeur de phrase, ce qui conduit au choix entre créer ou établir une terminologie qui pourrait aliéner les utilisateurs potentiels du site web, ou utiliser la terminologie anglaise existante qui pourrait donner l'impression que l'ensemble du site web n'a pas été localisé.

## 3.2 Collecte de texte

Bien qu'un certain nombre de collections de corpus textuels organisés existent déjà pour toutes les langues africaines du Sud, il existe plusieurs complications à l'utilisation de ces corpus comme phrases d'exemple pour le projet Mozilla Common Voice. Premièrement, presque tous ces corpus sont distribués sous des licences CC-BY, similaires à celles utilisées par des initiatives open source telles que Wikipedia. Cela implique que seules des sous-sections de ces ensembles de données (généralement moins de 10 % de l'article original) qualifient comme CC0. Deuxièmement, bon nombre de ces ensembles de données proviennent soit de documents gouvernementaux, de discours et de sites web, soit de matériel religieux, comme la Bible. Ces textes représentent des domaines très spécifiques, des sujets, ainsi que le style d'écriture.

Pour atténuer ces problèmes, nous avons étudié la possibilité de sourcer des données textuelles à partir d'autres sources web couramment utilisées dans le développement des technologies du langage. Par exemple, Mozilla propose un ensemble d'outils de traitement de texte pour récolter des données depuis Wikipedia. Les outils n'ont pas pu être utilisés "tels quels" dans ce projet, car l'ensemble de règles par défaut en anglais n'autorise que les phrases avec des caractères ASCII. Cependant, la plupart des langues africaines du Sud incluent des signes diacritiques encodés par des caractères UTF-8. Le jeu de règles a donc dû être adapté pour accepter les caractères UTF-8 intra-langue mais rejeter les caractères non pertinents.

Une des règles de sélection de Mozilla spécifie que seulement trois phrases peuvent être copiées d'une page Wikipédia, mais seulement si l'article contient 10 phrases ou plus. De nombreux articles dans les langues africaines du Sud ne respectaient pas la limite de 10 phrases et, par conséquent, aucune phrase n'a pu en être extraite. Une autre limitation qui est devenue évidente est l'absence de listes de "mots interdits" dans la plupart des langues. Ces listes sont utilisées pour empêcher des mots éventuellement offensants d'apparaître dans les phrases. Le texte collecté à partir de Wikipédia a également été vérifié à l'aide d'une identification automatique de la langue (LID) (Puttkammer et al. 2018, Hocking 2014)[8]. La vérification a révélé que de nombreux articles contiennent du texte dans des langues autres que la langue cible. Ces sentences ont été abandonnées.

Bien que les outils de Mozilla et Wikipédia puissent être utilisés pour obtenir des données dans quelques langues, la présence actuelle de la majorité des langues sur Wikipédia donne moins de mille phrases par langue. De plus, la collecte de textes n'a pas produit de phrases en isiNdebele car, au moment de la rédaction, cette langue n'avait pas de présence sur Wikipédia.

D'autres sources de texte basées sur le web ont ensuite été explorées dans une tentative de collecter des phrases en isiNdebele ainsi que des données supplémentaires pour les autres langues. Celles-ci incluaient la Leipzig Corpora Collection (LCC) (Goldhahn et al. 2012), OPUS (Tiedemann & Nygaard 2004) et les ensembles de données FLORES-200 (Goyal et al. 2022). Les outils Mozilla ont également été utilisés pour collecter des phrases à partir de ces sources, mais avec la restriction qu'au plus 9,5 % de toute source particulière n'était autorisé à être récolté. Les sélections résultantes ont également été vérifiées à l'aide de LID et les mêmes règles pour écarter les caractères non désirés ont été appliquées.

En plus de ces étapes de pré-traitement, le texte a été séparé en phrases et des listes de fréquence ont été générées à l'aide de CTexTools 2 (Puttkammer et al. 2018)[9]. Les phrases ou les segments qui ne contenaient pas de données utiles (par exemple, les lignes contenant uniquement des numéros de téléphone ou des signes de ponctuation) ainsi que les lignes qui ne constituaient pas une phrase bien formée (commençant par une ponctuation ou une numérotation facultative, puis une lettre majuscule et se terminant par une ponctuation de fin de phrase) ont été retirées des données séparées par des phrases. Les phrases ont également été filtrées pour contenir entre trois et quatorze mots mais avec une limite absolue de caractères de 99 [10]. Les phrases comprenant des chiffres ont également été supprimées conformément aux lignes directrices [11].

Les listes de fréquences ont ensuite été vérifiées à l'aide de vérificateurs d'orthographe disponibles dans le commerce [12] développés par le Centre pour la technologie du texte à l'Université du Nord-Ouest en Afrique du Sud [13]. En utilisant les listes d'orthographe vérifiée, toutes les phrases restantes ont été classées en fonction du pourcentage de mots correctement orthographiés qu'elles contiennent et seules les phrases avec plus de 80% de mots correctement orthographiés ont été conservées. Pour assurer une meilleure couverture des langues, ces phrases ont ensuite été comparées à l'aide de la distance d'édition de Levenshtein [14]. Seules les phrases présentant moins de 70 % de chevauchement ont été incluses dans l'ensemble final pour chaque langue.

Après avoir complété les étapes mentionnées ci-dessus, seuls les textes en afrikaans et en setswana contenaient encore plus de 5 000 phrases. Cela était partiellement dû au fait que les corpus initiaux étaient relativement petits. Un autre facteur contributif est un chevauchement allant jusqu'à 80 % entre les corpus basés sur le web comme LCC et OPUS. Cette observation semble suggérer que les recueils de textes ont probablement été obtenus à partir des mêmes sources.

La recherche de certains termes dans la liste des mots interdits en afrikaans a révélé que l'ajout de ce type de filtrage est essentiel pour empêcher les mots et les phrases offensants d'apparaître dans les phrases. Un processus similaire a également indiqué qu'il y a une forte présence de textes religieux dans les données récoltées, malgré un effort concerté pour éviter les publications religieuses et gouvernementales. Des filtres appropriés pour ces types de textes devront donc également être conçus pour chacune des 10 langues concernées avant d'ajouter tout texte récolté sur le web à la plateforme Common Voice.

## 4 Travaux futurs

Les prochaines étapes immédiates du projet consisteront à aborder les questions abordées dans la section précédente afin d'atteindre l'objectif de 5 000 phrases CC0 par langue. Les sites web gouvernementaux sud-africains (*.gov.za) apparaissent dans toutes les langues officielles et la possibilité d'obtenir du texte supplémentaire à partir de cette source sera étudiée. Une fois que le nombre requis de phrases aura été collecté, les sites web Common Voice seront prêts pour le début de la collecte de données de parole. Le projet sera promu aussi largement que possible dans le but d'encourager les communautés linguistiques à travers le pays à s'impliquer. Espérons que ces efforts seront couronnés de succès dans la mesure où la collecte de données peut être suivie par des ateliers dédiés au développement de la technologie de la parole.

## Notes

[1] https://www.undp.org/sustainable-development-goals, https://odi.org/en/publications/leave-no-one-behind-index-2019/

[2] https://commonvoice.mozilla.org/en

[3] https://creativecommons.org/share-your-work/public-domain/cc0/

[4] Toutes les ressources générées avec des subventions gouvernementales sont mises librement à disposition et accessibles via le catalogue de ressources du Centre sud-africain pour les ressources linguistiques numériques : https://repo.sadilar.org/.

[5] Dans les langues Nguni parlées en Afrique du Sud, lwazi signifie connaissance ou information.

[6] Projets de recherche avancée du renseignement/Agence des projets de recherche avancée de la défense

[7] https://pontoon.mozilla.org/projects/common-voice/

[8] https://hdl.handle.net/20.500.12185/350

[9] https://hdl.handle.net/20.500.12185/480

[10] https://discourse.mozilla.org/t/using-the-europarl-dataset-with-sentences-from-speeches-from-the-european-parliament/50184

[11] https://commonvoice.mozilla.org/sentence-collector/##/en/how-to

[12] https://spel.co.za/en/product/african

[13] https://humanities.nwu.ac.za/ctext

[14] https://metacpan.org/pod/Text::LevenshteinXS

## Remerciements

La localisation de la plateforme Mozilla Common Voice en Afrique du Sud est soutenue par le ministère fédéral allemand de la Coopération économique et du Développement (BMZ), représenté par le projet de la GIZ FAIR Forward - Intelligence artificielle pour tous.

## Références

Adda, G., Choukri, K., Kasinskaite, I., Mariani, J., Mazo, H. & Sakriani, S., eds (2019), Proceedings of the 1st International Conference on Language Technologies for All, European Language Resources Association (ELRA), Paris, France.

Barnard, E., Davel, M. H., van Heerden, C., de Wet, F. & Badenhorst, J. (2014), The NCHLT Speech Corpus of the South African languages, in 'Proceedings of the 4 th Workshop on Spoken Language Technologies for Under-resourced Languages', St Petersburg, Russia, pp. 194-200.

Barnard, E., Davel, M. H. & Van Huyssteen, G. B. (2010), Speech Technology for Information Access: A South African Case Study, in 'AAAI Spring Symposium Series', pp. 8-13.

Calteaux, K., de Wet, F., Moors, C., van Niekerk, D., McAlister, B., Sharma-Grover, A., Reid, T., Davel, M., Barnard, E. & van Heerden, C. (2013), Lwazi II Final Report: Increasing the impact of speech technologies in South Africa, Technical report, CSIR.

Davel, M. H., van Heerden, C., Kleynhans, N. & Barnard, E. (2011), Efficient harvesting of Internet audio for resource-scarce ASR, in 'Proceedings of Interspeech', International Speech Communication Association (ISCA), Florence, Italy, pp. 3153-3156.

de Wet, F., Badenhorst, J. & Modipa, T. (2016), 'Developing Speech Resources from Parliamentary Data for South African English', Procedia Computer Science 81, 45-52.

de Wet, F., de Waal, A. & van Huyssteen, G. B. (2011), Developing a broadband automatic speech recognition system for Afrikaans, in 'Proceedings of Interspeech', International Speech Communication Association (ISCA), Florence, Italy, pp. 3185-3188.

Eiselen, R. & Puttkammer, M. J. (2014), Developing Text Resources for Ten South African Languages, in 'Proceedings of Language Resource and Evaluation (LREC)', Reykjavik, Iceland, pp. 3698-3703.

Goldhahn, D., Eckart, T. & Quasthoff, U. (2012), Building Large Monolingual Dictionaries at the Leipzig Corpora Collection: From 100 to 200 Languages, in 'Proceedings of the Eighth International Conference on Language Resources and Evaluation (LREC)'.

Goyal, N., Gao, C., Chaudhary, V., Chen, P.-J., Wenzek, G., Ju, D., Krishnan, S., Ranzato, M., Guzman, F. & Fan, A. (2022), 'The FLORES-101 evaluation benchmark for low-resource and multilingual machine translation', Transactions of the Association for Computational Linguistics 10,522-538.

Harper, M. P. (2011), 'Data Resources to Support the Babel Program Intelligence Advanced Research Projects Activity (IARPA)'.

Hocking, J. (2014), Language identification for South African languages., in 'Proceedings of the Annual Pattern Recognition Association of South Africa and Robotics and Mechatronics International Conference (PRASA-RobMech)', PRASA.

Joshi, P., Santy, S., Budhiraja, A., Bali, K. & Choudhury, M. (2020), The State and Fate of Linguistic Diversity and Inclusion in the NLP World, in 'Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics', Association for Computational Linguistics, pp. 6282-6293.

Kuun, C. (2012), Development of a telephone-based speech-driven information service for the South African Government, Technical report, CSIR.

Puttkammer, M., Eiselen, R., Hocking, J. & Koen, F. (2018), NLP Web Services for Resource-Scarce Languages, in 'Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (ACL)', Association for Computational Linguistics, pp. 43-49.

Roux, J. C., Louw, P. H. & Niesler, T. (2004), The African Speech Technology Project: An Assessment, in 'Proceedings of the Fourth International Conference on Language Resources and Evaluation (LREC)', European Language Resources Association (ELRA), Lisbon, Portugal, pp. 93-96.

Strassel, S. & Tracey, J. (2016), LORELEI Language Packs: Data, Tools, and Resources for Technology Development in Low Resource Languages, in 'Proceedings of the Tenth International Conference on Language Resources and Evaluation (LREC'16)', European Language Resources Association (ELRA), Portorož, Slovenia, pp. 3273-3280.

Tiedemann, J. & Nygaard, L. (2004), The OPUS corpus - parallel and free: http://logos.uio.no/opus, in 'Proceedings of the Fourth International Conference on Language Resources and Evaluation (LREC'04)', European Language Resources Association (ELRA), Lisbon, Portugal.

Titmus, N., Schlünz, G. I., Louw, J. A., Moodley, A., Reid, T. & Calteaux, K. (2016), Lwazi III Project Final Report: Operational Deployment of Indigenous Text-to-Speech Systems, Technical report, CSIR.
