> Machine translation (fr) of "The First Universal Dependency Treebank for Tswana: Tswana-Popapolelo" by Tanja Gaustad, Ansu Berg, Rigardt Pretorius, Roald Eiselen, https://aclanthology.org/2024.rail-1.7/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, mistral-small3.2-24b, opus-mt, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Le premier arbre de dépendances universel pour le Tswana : Tswana-Popapolelo

Tanja Gaustad, Ansu Berg, Rigardt Pretorius, Roald Eiselen

**Affiliations**  
Tanja Gaustad†, Ansu Berg‡, Rigardt Pretorius‡, Roald Eiselen†  
†Centre for Text Technology (CTexT), ‡Setswana  
North-West University, Potchefstroom, South Africa  


## Résumé

Cet article présente la première banque d'arbres UD accessible au public pour le Tswana, Tswana-Popapolelo. Les données utilisées consistent en 20 phrases du Cairo CICLing traduites en tswana. Après le prétraitement de ces phrases avec des POS détaillés (XPOS) et leur conversion en POS universels (UPOS), nous avons procédé à l'annotation des données avec des relations de dépendance, en documentant les décisions pour les constructions spécifiques à la langue. Les problèmes linguistiques rencontrés sont décrits en détail, car il s'agit de la première application du cadre UD pour produire un arbre-banc de dépendances pour la famille de langues bantoues en général et pour le tswana en particulier.

## Mots-clés

Banque d'arbres de dépendance, annotation, langues bantoues, Tswana

## 1. Introduction

Avec une récente volonté d'élargir la diversité linguistique dans la recherche en traitement automatique du langage naturel (TALN) (Joshi et al., 2020), il y a eu un intérêt accru pour les annotations syntaxiques des langues sous-dotées d'Afrique subsaharienne, ce qui a abouti à des treebanks pour le bambara (Aplonova et Tyers, 2017 ; Dione, 2021), le beja (Kahane et al., 2021), le wolof et le yoruba (Dione, 2021). La seule ressource de ce type actuellement disponible pour le tswana est un treebank fondé sur la grammaire lexicale fonctionnelle (Berg, 2018) composé de syntagmes et de phrases simples (LR Berg, 2018).

Cet article décrit la première banque d’arbres Tswana-Popapolelo disponible publiquement et annotée dans le cadre de la dépendance universelle (de Marneffe et al., 2021). À titre de preuve de concept, nous avons choisi d'annoter un petit ensemble de données dans UD ainsi que de documenter les problèmes et décisions d'annotation linguistique lors de l'application de UD au tswana afin que, à l'avenir, plus de données puissent être annotées plus facilement.

Dans cet article, nous nous concentrerons sur la construction d'une banque d'arbres UD pour le tswana (voir la section 2 pour les informations de base nécessaires), en décrivant les données (section 3) et le prétraitement (section 4), le processus d'annotation (section 5) et, surtout, les problèmes que nous avons rencontrés (section 6) en essayant d'appliquer le cadre UD à une nouvelle langue (famille de langues).

## 2. Contexte

## 2.1. Contexte linguistique

Le tswana (ISO-639-3 tsn) est une langue bantoue parlée dans les parties nord-ouest de l'Afrique du Sud, les parties orientales de la Namibie qui bordent le Botswana et au Botswana, où c'est la langue nationale et la plupart des gens sont des locuteurs de langue maternelle. C'est l'une des 12 langues officielles d'Afrique du Sud et est parlée par 8,3 % de la population (Statistics South Africa, 2023), ce qui en fait la 6e langue maternelle la plus fréquente. Outre la langue des signes et deux langues germaniques (afrikaans et anglais), les langues officielles comprennent neuf langues bantoues: quatre langues nguni (ndebele, xhosa, zoulou et swazi), trois langues sotho (sotho du nord, sotho du sud, tswana), ainsi que le venḓa et le tsonga. Le tswana est classé dans la zone sud-est des langues bantoues. Ces langues bantoues sont divisées en groupes linguistiques et le tswana est inclus dans le groupe des langues sotho (groupe S31) (Maho, 2003).

Les langues bantoues présentent un certain nombre de caractéristiques linguistiques qui les distinguent sensiblement des langues indo-européennes les plus courantes (van der Velde et al., 2022) : ce sont toutes des langues à tons ; elles utilisent un système élaboré de classes nominales (Katamba, 2003) et leur morphologie nominale et verbale est hautement agglutinante et très productive (Katamba, 1993). Surtout les deux dernières caractéristiques sont importantes dans le contexte de l'annotation syntaxique.

Le choix du style d'écriture orthographique adopté pour le tswana a été influencé par des raisons historiques et phonologiques (Taljard et Bosch, 2006, 433). Phonologiquement, le fort caractère homographique des préfixes verbaux des langues sotho (y compris tswana) a conduit à l'adoption d'une orthographe disjonctive concernant les préfixes verbaux. Les langues nguni, en revanche, ont adopté un système d'écriture conjoint (Louwrens et Poulos, 2006). Dans ce contexte, une distinction est faite entre les mots linguistiques et les mots orthographiques. Pour des langues comme l'anglais ou l'afrikaans, un mot linguistique et un mot orthographique coïncident largement. Pour les langues écrites conjonctivement, un mot orthographique correspond à un ou plusieurs mots linguistiques. Pour les langues écrites de manière disjonctive comme le tswana, cependant, plusieurs mots orthographiques peuvent correspondre à un mot linguistique. L'exemple suivant illustre les styles d'écriture disjonctif (Tswana) versus conjonctif (Zulu) :

p02-01.png

Les implications des préfixes verbaux écrits de manière disjonctive dans la description syntaxique du tswana seront discutées plus en détail dans la section 6.

## 2.2 Dépendances universelles (UD)

Universal dependencies (UD) est un projet international et collaboratif ayant deux objectifs principaux : développer un cadre commun décrivant la structure grammaticale des langues du monde (de Marneffe et al., 2021) et créer des treebanks pour diverses langues en appliquant ce cadre (Nivre et al., 2020). Le projet s'efforce de produire des treebanks cohérents d'un point de vue interlinguistique (avec des extensions spécifiques à la langue lorsque cela est nécessaire) décrivant les structures syntaxiques ainsi que les traits morphologiques. Ce cadre permet des comparaisons entre les langues (y compris les langues à ordre des mots libre), des recherches dans une perspective de typologie linguistique ainsi que le développement d'analyseurs syntaxiques multilingues. Comme indiqué dans l'introduction du projet UD : « Le schéma d'annotation est basé sur une évolution des dépendances (universelles) de Stanford (de Marneffe et al., 2021), des étiquettes universelles de catégorie grammaticale de Google (Petrov et al., 2012) et de l'interlingua Interset pour les jeux d'étiquettes morphosyntaxiques (Zeman, 2008). » Les relations syntaxiques dans UD sont représentées sous forme d'arbres de dépendance plutôt que d'arbres de structure syntagmatique, ce qui rend les données annotées plus faciles à utiliser et à interpréter dans les tâches en aval. Actuellement, il existe plus de 250 treebanks dans plus de 140 langues différentes disponibles.

Notre choix d'utiliser UD découle de l'utilisation prévue des banques d'arbres UD qui bénéficie à la fois aux communautés de recherche computationnelle et linguistique. Comme le soulignent de Marneffe et al. (2021), l'UD doit respecter un certain nombre de critères (concurrents) qui incluent a) des exigences linguistiques, comme atteindre un niveau d'annotation satisfaisant pour l'analyse linguistique de langues individuelles et être efficace pour mettre en évidence les similarités structurelles entre langues apparentées, b) des besoins computationnels, c'est-à-dire se prêter à une analyse syntaxique avec une exactitude élevée et soutenir les tâches aval en traitement automatique des langues, et, enfin et surtout, c) des impératifs pragmatiques, à savoir se prêter à une annotation rapide et cohérente par un annotateur humain et être facilement compréhensible par des utilisateurs non linguistes.

Un avantage supplémentaire de rejoindre une initiative comme UD est l'infrastructure disponible en termes de guides sur la manière de contribuer, de scripts de validation, de soutien de la communauté UD et de la visibilité, de la disponibilité et de la réutilisabilité des données annotées via des versions officielles.

## 3. Données : Corpus CICLing du Caire

Pour qu'une banque d'arbres UD soit incluse dans une publication officielle, elle doit contenir au moins 20 phrases et 100 mots. Cela peut très facilement être réalisé en traduisant les 20 exemples de phrases dans le Corpus CICLing du Caire dans la langue souhaitée, dans notre cas Tswana. L'utilisation de ces phrases a l'avantage supplémentaire qu'elles contiennent différentes constructions linguistiques, ce qui en fait un bon premier cas de test pour discuter de la façon d'annoter ces constructions dans la langue cible.

Après avoir obtenu les 20 phrases du Cairo CICLing, trois locuteurs natifs de tswana ont traduit toutes les données sans se consulter les uns les autres. Dans une deuxième étape, l'équipe tswana a décidé d'une traduction par consensus où un consensus sur les phrases traduites finales a été atteint après avoir considéré les traductions libres et mot à mot. Cela a ensuite servi d'entrée au prétraitement décrit ensuite.

## 4. Prétraitement : tokenisation, XPOS et UPOS

La tokenisation des 20 phrases traduites correspond aux mots orthographiques tels qu’ils sont utilisés dans l’orthographe officielle du tswana (Cole, 1955 ; Krüger, 2006). Nous discuterons plus en détail des ramifications et des différents choix potentiels dans la section 6.

p03-01.png

Tableau 1: Aperçu des balises UPOS assignées dans les 20 phrases en tswana.

Un prérequis important lors de l'annotation des dépendances universelles est la présence des parties du discours (POS), plus spécifiquement des POS universelles (UPOS) (Petrov et al., 2012). L'ensemble d'étiquettes UPOS contient 17 étiquettes : 6 pour les classes ouvertes (noms, verbes, etc.), 8 pour les classes fermées (par exemple, pronoms, conjonctions) et 3 pour les éléments divers (tels que la ponctuation et les symboles).

Dans le travail très limité effectué sur Tswana, il n'y a pas encore de consensus sur la façon d'accommoder Tswana POS traditionnel dans UPOS et l'application des balises UPOS n'est pas toujours simple (Dione et al., 2023). Cependant, il existe des étiqueteurs morphosyntaxiques du tswana avec des jeux d'étiquettes plus étendus (Eiselen et Puttkammer, 2014 ; Puttkammer et al., 2018 ; Malema et al., 2020 ; Dibitso et al., 2022). Aux fins des annotations UD en tswana, le tokeniser NCHLT et le POS tagger ont été utilisés pour annoter les données avec des POS détaillés (généralement appelés XPOS en UD). Cet étiqueteur comprend 26 étiquettes principales et 188 étiquettes lorsqu'on inclut les informations de classe. Les étiquettes POS détaillées ont ensuite été converties en étiquettes UPOS sur la base d'un tableau de conversion. Le tableau 1 donne un aperçu de la répartition des étiquettes UPOS attribuées dans les données.

Même avec la tâche apparemment simple de réduire l'ensemble d'étiquettes XPOS à UPOS, il y a eu quelques décisions difficiles lors de la conversion, surtout pour ne pas surcharger une étiquette UPOS particulière (surtout PART particule) avec trop de catégories XPOS distinctes.

Le problème principal concernait les préfixes verbaux en Tswana. Comme mentionné précédemment, en raison du style d'écriture disjonctif, plusieurs classes de morphèmes verbaux sont écrites comme des mots séparés. Ces morphèmes sont également marqués séparément dans le schéma XPOS et comprennent les morphèmes concordants (morphèmes de sujet et d'objet), les morphèmes possessifs, négatifs, aspectuels et de temps. Les morphèmes de sujet et d'objet étaient traités respectivement comme des accords de sujet et d'objet dans XPOS. En l'absence d'équivalents directs disponibles dans les UPOS, ils ont été étiquetés comme PRON (pronom), tandis que les accords possessifs sont étiquetés comme PART (particule). Les morphèmes de temps et d'aspect (auxquels est attribuée l'étiquette MORPH dans le schéma XPOS) ont également été convertis en PART (particule) dans les UPOS, tandis que les marqueurs négatifs ont été convertis en ADV.

p03-02.png

Tableau 2: Aperçu des relations de dépendance assignées dans les 20 phrases en tswana.

De plus, dans notre ensemble de balises XPOS détaillées, les idéophones ont reçu leur propre balise IDEO car ils sont considérés comme une classe de mots distincte exprimant une action, une manière ou une propriété par imitation sonore, mais n'exerçant pas toujours la même fonction syntaxique dans une phrase. Cependant, il n'y a pas de tel tag dans UPOS et aucune équivalence dans d'autres familles linguistiques dans le catalogue UD n'a été trouvée. Comme il n'y avait pas d'idéophones dans les phrases de CICLing du Caire en tswana, l'étiquette n'était pas nécessaire, mais dans les annotations ultérieures, nous considérerions l'étiquette ADV (adverbe) pour les idéophones en tswana.

L'avantage d'avoir à la fois les étiquettes XPOS et UPOS à notre disposition lors de l'annotation syntaxique est que les jetons hautement ambigus (homophones et morphosyntaxiquement ambigus, par exemple ka 'avec, sur, à travers', go 'verbe copulatif dans différents modes, à, vers+verbe, vers+lieu') peuvent être liés correctement plus facilement et que les étiquettes XPOS attribuées automatiquement ainsi que les étiquettes UPOS converties pourraient être corrigées si nécessaire.

## 5. Processus d'annotation

L'annotation syntaxique ainsi que les corrections des étiquettes UPOS ont été réalisées dans Arborator Grew (Guibon et al., 2020). Dans une première étape, les annoteurs ont vérifié les balises UPOS et XPOS et les ont corrigées le cas échéant. Ensuite, la structure syntaxique a été ajoutée progressivement: commencez par identifier la racine de chaque phrase, liez le sujet et l'objet (s), puis continuez à lier et à étiqueter les dépendances restantes. Lors de l'annotation, diverses options pour certaines constructions syntaxiques ont été discutées et documentées jusqu'à ce que les annotateurs s'accordent sur le lien préféré et les étiquettes de dépendance associées. Le tableau 2 donne un aperçu des relations de dépendance assignées.

p04-01.png

Figure 1 : Phrase 1 avec un sujet ouvert.

p04-02.png

Figure 2 : Phrase 2 avec un sujet caché.

La banque d'arbres Tswana-Popapolelo sera disponible dans la prochaine version UD, ainsi que toute la documentation spécifique à la langue.

## 6. Problèmes rencontrés

Certaines des annotations étaient simples pour le petit ensemble de données actuel, mais les particularités linguistiques spécifiques du tswana en tant qu'exemple d'une langue bantoue disjonctivement écrite nécessitaient des discussions plus approfondies sur la façon d'utiliser les relations UD existantes. Celles-ci sont détaillées ci-dessous.

## 6.1. Orthographe disjonctive et constructions verbales en tswana

Comme cela a été décrit dans la section 2.1, un style d'écriture disjonctif a été adopté pour Tswana. Surtout pour les préfixes verbaux, cela signifie qu'un grand nombre de jetons orthographiques précédant le verbe seraient, dans la linguistique traditionnelle, considérés davantage comme des morphèmes que comme des "vrais" mots. L'identification correcte des mots est généralement considérée comme une étape de prétraitement impérative pour la description syntaxique. À cet égard, les préfixes verbaux écrits de manière disjonctive du tswana entraînent des jetons orthographiques qui font partie de mots linguistiques (Taljard et Bosch, 2006) et compromettent donc l'intégrité lexicale des verbes. Les préfixes verbaux du tswana portent une information flexionnelle tandis que les suffixes portent une information à la fois flexionnelle et dérivationnelle (Krüger, 2006, 268). Ces préfixes verbaux portent également des informations à la fois morphologiques et syntaxiques, ce qui rend difficile l'attribution de tags UPOS et de relations syntaxiques à ceux-ci.

Une solution évidente à ce problème est d'ajuster la tokenisation pour refléter les mots linguistiques, plutôt que les mots orthographiques. Bien que cela simplifierait certainement et alignerait davantage les données avec le cadre UD, cela réduirait également la granularité et l'informativité du treebank. En tenant compte de cela, nous avons choisi d'annoter les relations entre tous les mots orthographiques. Plus de détails sur les implications de la tokenisation sont fournis dans la section 6.5.

Dans l'annotation UD de Tswana, les préfixes verbaux écrits de manière disjonctive sont liés à la racine verbale via des arcs. Nous allons maintenant décrire comment les différentes parties des constructions verbales ont été traitées.

## 6.1.1 Concordances de sujets

Dans les cas où un sujet explicite est réalisé dans une phrase, le marqueur d'accord sujet est un indicateur d'accord qui marque la relation entre le sujet explicite et le verbe. Dans ces cas, nous avons opté pour la relation expl. Cette relation est utilisée en UD pour des phénomènes tels que le doublement clitique (par exemple dans les langues romanes) ou le doublement d'un clitique lexical nominal et d'un clitique pronominal (par exemple en grec et en bulgare). Bien que les accords de sujet ne soient pas les mêmes que les clitiques, ils se comportent de manière similaire en ce sens qu'ils sont une sorte de "copie" pronominale sans rôle sémantique propre. Un exemple pour le tswana peut être vu dans la figure 1 de la phrase 1.

p04-03.png

Dans les cas où le sujet explicite n'est pas réalisé, le marqueur d'accord sujet (covert) acquiert un statut pronominal (comme il le serait en tant que pronom dans la traduction) et devient le sujet réel, il est donc annoté avec la relation nsubj comme montré dans la figure 2 de la phrase 2.

p05-01.png

Figure 3 : Phrase 3 illustrant l'utilisation de la relation aux.

p05-02.png

Figure 4 : Phrase 4 illustrant l'utilisation de la relation compound pour certains morphèmes TAME.

p05-03.png

## 6.1.2. Verbes auxiliaires

Un verbe auxiliaire enrichit la signification du verbe principal complémentaire, du verbe copulatif ou d'une autre phrase verbale auxiliaire et peut ajouter des informations sémantiques concernant le mode, le temps, l'aspect et / ou la polarité d'un verbe. Il ajoute également des informations sur la progression ou l'achèvement d'une action: Il exprime un certain type de durée de l'action ou il exprime le temps logique auquel l'action est exécutée. Par exemple, le verbe auxiliaire ne exprime un temps passé relatif indiquant que l'action était en train de se dérouler ou s'était déroulée à un moment donné dans le passé. Si le verbe complémentaire est au temps présent, cela indique alors une action incomplète et se poursuivant à un certain moment dans le passé. Si le verbe complémentaire est au parfait, cela indique que l'action avait été achevée au point de référence (Pretorius, 1997; Krüger, 2013a).

En UD, les verbes auxiliaires sont une classe fermée qui ne peut pas avoir d'enfants. La relation aux est utilisée en tswana pour indiquer la relation entre un verbe et le verbe auxiliaire précédent, comme avec les autres langues. Cependant, nous avons rencontré le problème des auxiliaires prenant un accord de sujet (doublé) comme dépendant. Dans la phrase 3, l'accord sujet apparaît deux fois : une fois (réalisé comme o) avec l'auxiliaire ne et une fois (réalisé comme a) avec le verbe dira, mais tous deux renvoient au sujet « she » et tous deux sont nécessaires pour que la phrase soit grammaticale.

p05-04.png

Elle a fait laver la voiture par son mari. '

À ce stade, nous avons choisi d'annoter l'accord sujet avec le verbe auxiliaire par une relation expl, tandis que l'accord sujet avec le verbe principal devient le nsubj et la relation entre l'auxiliaire et le verbe principal est étiquetée aux, comme on peut le voir dans la figure 3.

## 6.1.3. Morphèmes TAME

Les morphèmes de Temps-Aspect-Mode-Évidentialité (TAME) écrits de manière disjonctive dans la structure morphologique d'un verbe apparaissent toujours dans un ordre fixe et ne sont pas morphosyntaxiquement flexibles. Pour les morphèmes TAME incluant le morphème du temps présent a, le morphème progressif sa « encore », le morphème potentiel ka « peut, pourrait » et le morphème du temps futur tla « sera, devra », la relation compound est appliquée pour exprimer qu'il s'agit d'une combinaison de lexèmes qui se comportent morphosyntaxiquement comme des mots uniques. Voir l'exemple dans la phrase 4 et la figure 4.

p05-05.png

Pour les morphèmes négatifs ga, sa, se, nous avons choisi d'utiliser la combinaison de ADV et advmod, parallèlement à l'anglais, comme illustré dans la phrase 5 et la figure 5.

p06-01.png

Figure 5: Phrase 5 montrant l'utilisation de la relation advmod pour les morphèmes de négation TAME.

p06-02.png

Figure 6 : Phrase 6 avec un verbe copulatif descriptif.

p06-03.png

## 6.2 Copulatifs

Une copule est la relation d'un mot-fonction utilisé pour lier un sujet à un prédicat non verbal. En tswana, on distingue trois types de verbes copulatifs :

copulative identificatrice : identifie un sujet en ce qui concerne le type, le statut ou la profession, ou prédique l'existence ou la présence d'une chose, par ex. Lekwalo lê ke la gago 'Cette lettre est la tienne' ;

copulatif décrivant: établit une qualité, une caractéristique ou un état d'un sujet, ou sa situation ou sa localité, par exemple Ditlhako tsa me di dintšha 'Mes chaussures sont neuves';

copulative associative : exprime l'idée du 'have' ou 'be with' anglais et indique la possession ou l'association, par ex. Sediba sê se na le metsi 'Ce puits a de l'eau'.

La structure morphologique de ces verbes peut inclure des informations sur le temps, l'aspect, le mode et la polarité.

Lorsque le verbe en tswana est un verbe copulatif d'identification ou de description, la racine de la proposition est le complément du verbe copulatif. Ces deux types de verbes copulatifs sont étiquetés en POS comme AUX, et la relation cop est utilisée entre la racine et le verbe copulatif qui précède. Voir la phrase 6 et la figure 6 pour un exemple de copulatif décrivant.

p06-patch01.png

« Mon père est plus cool que le tien. »

Dans le cas d'un verbe copulatif associatif, la racine de la clause est le verbe copulatif. Les verbes copulatifs associatifs en tswana sont étiquetés en POS comme VERB, et la relation obj est utilisée entre la racine et le complément qui le suit, comme illustré dans la phrase 7 et la figure 7. Cette analyse diffère des descriptions linguistiques traditionnelles du Tswana (Cole, 1955; Krüger, 2006, 2013b).

p06-04.png

## 6.3. Utilisation de la relation mark

Les conjonctions qui marquent une clause comme subordonnée à une autre clause sont annotées comme marque en UD. En tswana, le marqueur est un élément introducteur d'une proposition qui inclut une action au subjonctif ou au mode participial. Pour le subjonctif, la conjonction gore « que, afin que » est utilisée, comme indiqué dans la phrase 8 et la figure 8. Pour le participe, des conjonctions telles que fa « alors que, tandis que, lorsque, si », le fa « même si, bien que, tandis que » et ka « puisque » sont utilisées.

p07-01.png

Figure 7 : Phrase 7 avec un verbe associatif copulatif.

p07-02.png

Figure 8: Phrase 8 montrant l'utilisation de la relation de marque pour une clause subordonnée.

p07-03.png

La relation de marque est également utilisée en tswana pour les verbes à l'infinitif, de manière analogue à l'anglais et à l'allemand, par exemple go tlogela 'arrêter' où le marqueur est go 'à'. Voir la phrase 9 et la figure 9 pour une illustration.

p07-04.png

De plus, mark est utilisé dans une proposition relative où la particule qualificative est le marqueur, comme on le voit dans la phrase 10 et la figure 10 : la particule qualificative s'accorde toujours avec une classe nominale spécifique en tswana, par exemple dans e kgolo « [part] grand » le marqueur est la particule qualificative e qui indique l'accord de classe nominale 9.

p07-05.png

## 6.4 Particules d'interrogation a

Dans Tswana il y a une particule interrogative a ajoutée au début d'une phrase pour changer une phrase indicative en une phrase interrogative. Après consultation avec la communauté UD, nous avons décidé d'attribuer l'étiquette UPOS PART (particule) à a ainsi que de la lier directement à la racine de la phrase avec une relation de discours (en suivant l'exemple latin de ne). Comme cette particule opère à un niveau plus pragmatique, la relation discourse « utilisée pour les interjections et autres particules et éléments de discours (qui ne sont pas clairement liés à la structure de la phrase, sauf de manière expressive) » telle que décrite dans l'aperçu des relations d'UD a semblé le meilleur choix. La phrase 11 et la figure 11 en donnent un exemple pour Tswana.

p07-06.png

## 6.5 Tokenisation en tswana

Un problème que nous n’avons certainement pas encore résolu et qui est lié à la section précédente 6.1 est la tokenisation du tswana. Traditionnellement, les analyses informatiques pour les langues bantoues sud-africaines à écriture disjonctive, c'est-à-dire le sotho du nord, le sotho du sud, le tswana, le venḓa et le tsonga, ont été faites sur des mots orthographiques car aucune conversion n'est alors nécessaire à partir du texte original. Les implications de choisir d'utiliser des mots orthographiques plutôt que des mots linguistiques, cependant, seront ressenties à différents niveaux lors du travail sur l'analyse syntaxique de Tswana appliquant des dépendances UD:

Lors de l'annotation : travailler sur le mot orthographique signifie que plus de temps et d'efforts seront consacrés à obtenir correctement les UPOS ainsi que les relations de dépendance (toutes deux relevant davantage du niveau syntaxique). Avec des mots linguistiques, la structure syntaxique devient plus directe (plus simple ?), mais en même temps, il faut accorder plus d'attention à l'ajout d'informations morphologiques pour conserver les détails nécessaires pour pouvoir désambiguïser.

p08-01.png

Figure 9 : Phrase 9 illustrant l'utilisation de la relation de marque dans les infinitifs.

p08-02.png

Figure 10 : Phrase 10 illustrant l'utilisation de la relation mark pour les particules qualificatives.

D'un point de vue de la linguistique computationnelle: Spécifiquement dans le cadre de l'UD, si le texte tswana est analysé en utilisant des mots orthographiques, les annotations résultantes le rendent plus directement comparable aux langues européennes et les annotations syntaxiques seront plus diverses et informatives. D'autre part, l'utilisation de mots linguistiques mettra davantage l'accent sur les similitudes avec d'autres langues bantoues, en particulier écrites conjonctivement, mais la structure syntaxique sera plus simple car beaucoup d'informations ne seront contenues qu'au niveau morphologique (sous-mot).

En relation avec les analyses linguistiques : dans les descriptions grammaticales traditionnelles (structurales), la frontière gauche des verbes tswana est considérée comme étant le premier préfixe d'un tel verbe, même s'il est écrit de manière disjonctive. Cela implique que des verbes tels que ke a mo rata en 2.1 seraient tokenisés comme un seul mot, à savoir un verbe. Ce verbe constituerait une phrase en soi et serait le prédicat de la phrase. L'analyse syntaxique de la phrase n'indiquerait donc pas la valeur pronominale des accords sujet et objet afin d'indiquer que la phrase contient un sujet et un objet (Taljard et Bosch, 2006 ; Louwrens et Poulos, 2006 ; Krüger, 2006 ; Cole, 1955 ; Pretorius et al., 2015). Dans les descriptions ultérieures (Berg, 2018), l'intégrité lexicale du verbe est maintenue mais le statut d'argument de ces accords est indiqué au niveau fonctionnel.

Donc, si nous devions décider d'"attacher" des préfixes verbaux au verbe, la structure originale en 12 basée sur des mots orthographiques changerait à la représentation en 13.

p08-03.png

p08-patch01.png

Je n'ai pas pu suivre, car il courait trop vite. '

Nous pensons qu'il est nécessaire de faire plus de travail pour explorer où tracer les limites lors de l'"attachement" des préfixes verbaux ainsi que pour comprendre pleinement les conséquences d'une telle approche.

## 7. Conclusion et travaux futurs

Cet article contient la description de la première banque d'arbres UD disponible publiquement pour le Tswana, basée sur les 20 phrases traduites du Cairo CICLing. La banque d'arbres qui en résulte montre qu'il s'agissait d'une première tentative réussie d'appliquer l'UD à une langue bantoue et constitue la base d'une annotation ultérieure du tswana à un ensemble plus étendu. Le principal avantage de commencer avec un ensemble de données aussi restreint est que bon nombre des annotations les plus problématiques peuvent être discutées en détail et que les résultats correspondants peuvent être documentés sans qu’il soit nécessaire de procéder à une réannotation substantielle des données à un stade ultérieur. Comme on pouvait s'y attendre, tous les problèmes n'ont pas encore été résolus et certaines décisions ont dû être prises sur la manière d'appliquer au mieux le cadre existant à une nouvelle langue aux caractéristiques linguistiques uniques. Nous espérons que le rapport détaillé sur les problèmes rencontrés aidera également les autres lors de l'annotation de nouvelles langues sotho et bantoues en UD.

p09-01.png

Figure 11 : Phrase 11 avec une particule interrogative.

Avec la banque d'arbres Tswana-Popapolelo maintenant disponible, nous prévoyons d'annoter des données supplémentaires avec l'aide d'assistants étudiants. Les annotations actuelles sont basées sur notre compréhension de la littérature et des commentaires que nous avons reçus de la communauté UD, mais les choix effectués jusqu'à présent seront certainement affinés et les données annotées disponibles pour Tswana seront élargies en les ajoutant à Tswana-Popapolelo. Cela comprend l'expérimentation de différentes stratégies de tokenisation pour les mêmes données afin d'étudier les répercussions sur les analyses de dépendance.

Une fois qu'un plus grand ensemble de données de treebank sera disponible, nous entraînerons également des analyseurs syntaxiques automatiques pour pré-annoter les données afin d'assister et de simplifier le processus d'annotation. À terme, nous visons à disposer de suffisamment de données pour entraîner des analyseurs syntaxiques en dépendances complets et précis, y compris des étiqueteurs XPOS, UPOS, de lemmes et morphologiques, tout en tirant parti des travaux d'autres personnes qui utilisent les treebanks UD pour entraîner divers outils de TAL.

## 8. Remerciements

Nous aimerions remercier Kevin Mavalela et Kaboentle Maibi pour leur contribution aux traductions et aux discussions et annotations initiales. De plus, nous sommes reconnaissants envers la communauté UD pour leurs réponses à nos questions.

## Notes

1 Nous utiliserons le terme Tswana, car c'est le terme préféré dans un cadre international plutôt que Setswana, qui est généralement utilisé en Afrique du Sud (comme le stipule la Constitution sud-africaine de 1996 et la loi sur l'utilisation des langues officielles 12 de 2012). La même décision de ne pas utiliser de préfixes s'applique aux noms des autres langues officielles d'Afrique du Sud dans cet article.

2 https://universaldependencies.org/introduction.html, retrieved 12-02-2024.

3 Voir https://universaldependencies.org/ pour un aperçu.

4 https://github.com/UniversalDependencies/cairo/blob/master/translations.txt

5 Ceux-ci étaient des étudiants diplômés payés pour leur temps.

6 Le tswana a été inclus dans l'étiqueteur UDMorph https://lindat.mff.cuni.cz/services/teitok-live/udmorph/index.php?action=tag, mais la conversion du jeu d'étiquettes POS détaillées vers les UPOS n'a pas (encore) été vérifiée par des linguistes.

7 https://arboratorgrew.elizia.net/

8 https://github.com/UniversalDependencies/UD_Tswana-Popapolelo

9 Toutes les figures ont été produites avec http://www.let.rug.nl/kleiweg/conllu/.

10 Le sens du verbe auxiliaire ne exige la forme consécutive du morphème d'accord sujet qui le suit.

11 https://universaldependencies.org/u/dep/all.html#al-u-dep/discourse.

## 9. Références bibliographiques

Ekaterina Aplonova and Francis M. Tyers. 2017. Towards a dependency-annotated treebank for Bambara. In Proceedings of the 16th International Workshop on Treebanks and Linguistic Theories, pages 138-145, Prague, Czech Republic.

Ansu Berg. 2018. A computational syntactic analysis of Setswana. Ph.D. thesis, North-West University, Potchefstroom, South Africa.

Desmond T. Cole. 1955. An introduction to Tswana grammar. Longman, Cape Town.

Marie-Catherine de Marneffe, Christopher D. Manning, Joakim Nivre, and Daniel Zeman. 2021. Universal Dependencies. Computational Linguistics, 47(2):255-308.

Mary Dibitso, Pius A. Owolawi, and Sunday O. Ojo. 2022. An hybrid part of speech tagger for Setswana language using a voting method. In International Conference on Intelligent and Innovative Computing Applications, pages 245-253.

Cheikh M. Bamba Dione. 2021. Multilingual dependency parsing for low-resource African languages: Case studies on Bambara, Wolof, and Yoruba. In Proceedings of the 17th International Conference on Parsing Technologies and the IWPT 2021 Shared Task on Parsing into Enhanced Universal Dependencies (IWPT 2021), pages 84-92, Online. Association for Computational Linguistics.

Cheikh M. Bamba Dione, David Ifeoluwa Adelani, Peter Nabende, Jesujoba O. Alabi, Thapelo Sindane, Happy Buzaaba, Shamsuddeen Hassan Muhammad, Chris Chinenye Emezue, Perez Ogayo, Anuoluwapo Aremu, Catherine Gitau, Derguene Mbaye, Jonathan Mukiibi, Blessing Sibanda, Bonaventure F. P. Dossou, Andiswa Bukula, Rooweither Mabuya, Allahsera Auguste Tapo, Edwin Munkoh-Buabeng, Victoire Memdjokam Koagne, Fatoumata Ouoba Kabore, Amelia Taylor, Godson Kalipe, Tebogo Macucwa, Vukosi Marivate, Tajuddeen Gwadabe, Mboning Tchiaze Elvis, Ikechukwu Onyenwe, Gratien Atindogbe, Tolulope Adelani, Idris Akinade, Olanrewaju Samuel, Marien Nahimana, Théogène Musabeyezu, Emile Niyomutabazi, Ester Chimhenga, Kudzai Gotosa, Patrick Mizha, Apelete Agbolo, Seydou Traore, Chinedu Uchechukwu, Aliyu Yusuf, Muhammad Abdullahi, and Dietrich Klakow. 2023. MasakhaPOS: Part-of-speech tagging for typologically diverse African languages. In Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics Volume 1: Long Papers, pages 10883-10900.

Roald Eiselen and Martin J. Puttkammer. 2014. Developing text resources for ten South African languages. In Proceedings of the Ninth International Conference on Language Resources and Evaluation (LREC 2014), pages 3698-3703.

Gaël Guibon, Marine Courtin, Kim Gerdes, and Bruno Guillaume. 2020. When collaborative treebank curation meets graph grammars. In Proceedings of the 12th Language Resources and Evaluation Conference, pages 5291-5300, Marseille, France. European Language Resources Association.

Pratik Joshi, Sebastin Santy, Amar Budhiraja, Kalika Bali, and Monojit Choudhury. 2020. The state and fate of linguistic diversity and inclusion in the NLP world. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 6282-6293, Online. Association for Computational Linguistics.

Sylvain Kahane, Martine Vanhove, Rayan Ziane, and Bruno Guillaume. 2021. A morph-based and a word-based treebank for Beja. In Proceedings of the 20th International Workshop on Treebanks and Linguistic Theories (TLT, SyntaxFest 2021), pages 48-60, Sofia, Bulgaria. Association for Computational Linguistics.

Francis Katamba. 1993. Morphology. Springer, New York.

Francis Katamba. 2003. Bantu nominal morphology. In Derek Nurse and Gérard Philippson, editors, The Bantu Languages, pages 103-120. Routledge, London & New York.

Caspar J.H. Krüger. 2006. Introduction to the morphology of Setswana. Lincom Europe, München.

Caspar J.H. Krüger. 2013a. Setswana syntax: a survey of word group structures: Volume 1. Lincom Europe, München.

Caspar J.H. Krüger. 2013b. Setswana syntax: a survey of word group structures: Volume 2. Lincom Europe, München.

Louis J. Louwrens and George Poulos. 2006. The status of the word in selected conventional writing systems - the case of disjunctive writing. Southern African Linguistics and Applied Language Studies, 24(3):389-401.

Jouni Maho. 2003. A classification of the Bantu languages: an update of Guthrie's referential system. In Derek Nurse and Gérard Philippson, editors, The Bantu Languages, pages 639-651. Routledge, London & New York.

Gabofetswe Malema, Boago Okgetheng, Bopaki Tebalo, Moffat Motlhanka, and Goaletsa Rammidi. 2020. Complex Setswana parts of speech tagging. In Proceedings of the first workshop on Resources for African Indigenous Languages (RAIL), pages 21-24.

Joakim Nivre, Marie-Catherine de Marneffe, Filip Ginter, Jan Hajič, Christopher D. Manning, Sampo Pyysalo, Sebastian Schuster, Francis Tyers, and Daniel Zeman. 2020. Universal Dependencies v2: An evergrowing multilingual treebank collection. In Proceedings of the 12th Language Resources and Evaluation Conference, pages 4034-4043, Marseille, France. European Language Resources Association.

Slav Petrov, Dipanjan Das, and Ryan McDonald. 2012. A universal part-of-speech tagset. In Proceedings of the Eighth International Conference on Language Resources and Evaluation (LREC'12), pages 2089-2096, Istanbul, Turkey. European Language Resources Association (ELRA).

Laurette Pretorius, Biffie Viljoen, Ansu Berg, and Rigardt Pretorius. 2015. Tswana finite state tokenisation. Language Resources and Evaluation, 49(4):831-856.

Rigardt Pretorius. 1997. Auxiliary Verbs as a Subcategory of the Verb in Tswana. Ph.D. thesis, PU for CHE, Potchefstroom, South Africa.

Martin Puttkammer, Roald Eiselen, Justin Hocking, and Frederik Koen. 2018. NLP web services for resource-scarce languages. In Proceedings of ACL 2018, System Demonstrations, pages 43-49, Melbourne, Australia. Association for Computational Linguistics.

Department of Statistics South Africa. 2023. Census 2022: Statistical release. Technical report, Department of Statistics, Republic of South Africa.

Elsabé Taljard and Sonja E. Bosch. 2006. A comparison of approaches to word classtagging: Disjunctively vs. conjunctively written Bantu languages. Nordic Journal of African Studies, 15(4):428-442.

Mark van der Velde, Koen Bostoen, Derek Nurse, and Gérard Philippson, editors. 2022. The Bantu Languages, 2nd edition. Routledge, London & New York.

Daniel Zeman. 2008. Reusable tagset conversion using tagset drivers. In Proceedings of the Sixth International Conference on Language Resources and Evaluation (LREC'08), Marrakech, Morocco. European Language Resources Association (ELRA).

## 10. Références des ressources linguistiques

LR Berg, Ansu. 2018. Setswana Test suite and Treebank. South African Centre for Digital Language Resources (SADiLaR). PID https://hdl.handle.net/20.500.12185/478.
