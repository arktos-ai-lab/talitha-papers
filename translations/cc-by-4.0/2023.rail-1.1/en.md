> Source text of "Automatic Spell Checker and Correction for Under-represented Spoken Languages: Case Study on Wolof" by Thierno Ibrahima Cissé, Fatiha Sadat, https://aclanthology.org/2023.rail-1.1/, licensed https://creativecommons.org/licenses/by/4.0/. Segmented for translation; layout, figures and tables are not reproduced. The original PDF is the reference version.

## Automatic Spell Checker and Correction for Under-represented Spoken Languages: Case Study on Wolof

Thierno Ibrahima Cissé, Fatiha Sadat

**Affiliations**  
Thierno Ibrahima Cissé  
Fatiha Sadat  
Université du Québec à Montréal  
Université du Québec à Montréal  
  


## Abstract

This paper presents a spell checker and correction tool specifically designed for Wolof, an under-represented spoken language in Africa. The proposed spell checker leverages a combination of a trie data structure, dynamic programming, and the weighted Levenshtein distance to generate suggestions for misspelled words. We created novel linguistic resources for Wolof, such as a lexicon and a corpus of misspelled words, using a semi-automatic approach that combines manual and automatic annotation methods. Despite the limited data available for the Wolof language, the spell checker's performance showed a predictive accuracy of 98.31% and a suggestion accuracy of 93.33%.

Our primary focus remains the revitalization and preservation of Wolof as an Indigenous and spoken language in Africa, providing our efforts to develop novel linguistic resources. This work represents a valuable contribution to the growth of computational tools and resources for the Wolof language and provides a strong foundation for future studies in the automatic spell checking and correction field.

## 1 Introduction

Linguistic diversity in Natural Language Processing (NLP) is essential to enable communication between different users and thus the development of linguistic tools that will serve the inclusion of diverse communities. Several research studies for low-resource languages have emerged; however spoken Indigenous and Endangered languages in Africa have been neglected, even though the cultural and linguistic richness they contain is inestimable.

The Wolof language, a popular language in west Africa spoken by almost 10 million individuals worldwide, is an immensely popular lingua franca in countries on the African continent, such as Senegal, Gambia and Mauritania. It serves as the primary dialect of Senegal (Diouf et al., 2017), hailing from the Senegambian branch of Niger-Congo's expansive language family. Furthermore, the language has been officially acknowledged in West Africa (Eberhard et al., 2019). It is therefore not surprising that the intensive use of Wolof within the region has allowed it to be recognized as being of paramount importance.

Like several Indigenous and spoken languages of Africa, Wolof presents many challenges and issues, among which is the lack of linguistic resources and tools. Moreover, it is distinguished by its distinct tonal system which uses nasal vowels. The Wolof script is comprised of a total of 45 consonant phonemes, which are further subdivided into categories (Cissé, 2004). Table 1 illustrates the various Wolof consonants and their respective classifications.

p01-01.png

Table 1: Wolof Consonants and Classifications

Furthermore, the Wolof writing system integrates a set of 17 vowel phonemes (Cissé, 2004) complementing the already existing 45 consonant phonemes. Table 2 provides an overview of the Wolof vowels and their respective classifications.

As writing becomes increasingly important due to our digital age, automatic spell checking plays a vital role in making sure written communications are both efficient and accurate. Despite the lack of standardization in their orthography, there has been a surge of interest to develop spell checkers for African Indigenous languages due to their growing importance in education, commerce, and diplomacy. Consequently, the development of spell checkers for these languages is slowly increasing.

p02-01.png

Table 2: Wolof Vowels and Classifications

Our main contribution in this paper, is the development of new resources for the Wolof language. Specifically, we have created a spell checker for the autocorrection of Wolof text, as well as a corpus of misspelled words that will enable researchers to evaluate the performance of future autocorrection systems. Additionally, we have developed a Wolof lexicon that can be leveraged for a range of tasks beyond autocorrection, such as neural machine translation, automatic speech recognition, etc.

The resources that have been developed over the course of this study are made publicly accessible on GitHub, thereby enabling wider dissemination and facilitating the reproducibility of the research findings.

The remainder of our paper is structured as follows: in Section 2, we conduct a brief literature review and discuss some published studies. In Section 3, we describe our proposed methodology and the novel linguistic resources, we developped. In Section 4, we present results and evaluations of our study. In Section 5, we show the limitations of our system through an error analysis. Finally, section 6 concludes the paper and show some promising perspectives for the future.

## 2 Background

Spelling correction consists in suggesting valid words closer to a wrong one. In order to create an automatic spelling correction system, it is imperative to comprehend the root causes of spelling errors (Baba and Suzuki, 2012).

Several studies about spelling errors have been done, with a notable contribution from (Mitton, 1996) who thoroughly analyzed different types of spelling mistakes for English and described methods to construct an automatic spelling correction system. (Kukich, 1992), on the other hand, presented a survey on documented findings on spelling error patterns and categorized spelling errors into two groups:

Lexical errors: Result of mistakes applied to individual words, regardless of their context within a sentence (Ten Hacken and Tschichold, 2001).

Grammatical errors: Include both morphological and syntactical errors. Morphological errors involve deficiencies in linguistic elements such as derivation, inflection, prepositions, articles, personal pronouns, auxiliary verbs, and determiners. Syntactical errors result from issues in linguistic components, including passive voice, tense, noun phrases, auxiliary verbs, subject-verb agreement, and determiners (Gayo and Widodo, 2018).

The causes of spelling errors are diverse and can stem from both cognitive and typographical sources (Peterson, 1980). Cognitive errors arise when an individual lacks the proper understanding of the correct spelling of a word while typographical errors take place when incorrect keystrokes are made when typing. Literature in the field of spelling correction has typically approached these error types separately, with various techniques developed specifically to address each type (Kukich, 1992). Despite the significance of language processing, there has been a shortfall of focus on the creation of automatic spelling correction tools for low resource languages especially. While some attempts have been made to apply standard automatic spelling correction techniques to a few African indigenous languages (Boago Okgetheng et al., 2022; M'eric, 2014; Salifou and Naroua, 2014), no such efforts have been made for the Wolof language. As far as we are aware, the only research solely dedicated to the correction of Wolof is (Lo et al., 2016), which provides an overview of the state of the art and outlines potential solutions for developing a tailored orthographic corrector for Wolof. This research adopts commonly used approaches in the field and assesses the performance of our system using various known evaluation metrics.

## 3 Methodology

The system outlined in this study aims to identify and correct non-word errors in Wolof language.

To achieve this objective, we designed and implemented the flowchart in Figure 1.

p03-01.png

Figure 1: Flowchart of the spell checker

The flowchart in Figure 1 provides a visual representation of the various components and processes involved in the proposed spell checker system. The system includes input and output mechanisms, algorithms for error detection and correction, as well as data structures and models that aid in its functionality. The aim of the system is to accurately identify and rectify non-word errors in the Wolof language. Through the presentation of the system's overall architecture, the reader will be able to comprehend the workings of the system and its design principles aimed at detecting and correcting invalid words in the Wolof language.

## 3.1 Wolof Lexicon Generation

Our approach to generating a reliable Wolof lexicon involves the combination of manual annotation and automatic extraction methods.

First, manual annotation was performed on a corpus of Wolof text (James Cross et al., 2022) to identify unique words and extract them into a list. This methodology provides a thorough examination of the Wolof language and ensures the precision of the lexicon by enabling manual control over the inclusion of words.

Second, an automatic extraction was performed using Optical Character Recognition (OCR) methods and implemented in the form of Python scripts, applied to several Wolof-French dictionaries (Fal et al., 1990 and Diouf and Kenkyūjo, 2001). This methodology facilitates the expansion of the lexicon's coverage and enables the identification of additional words that may not have been captured through the manual annotation alone.

Finally, to ensure the lexicon's accuracy, the overall resulting data underwent proofreading. This step validated the correctness of the words and their spellings and allowed for any necessary revisions before the final lexicon was generated.

It is important to note that due to the limited availability of Wolof resources, the resulting lexicon only contains 1410 different words. Despite this constraint, the combination of manual annotation and automatic extraction methods allowed the generation of a reliable Wolof lexicon.

## 3.2 Preprocessing

Our spell checking system implements a preliminary stage, which entails the removal of inputs that contain numerical characters, punctuation marks, or borrowed words from foreign languages. The outcome of this step serves as the basis for the detection of non-word errors in the text.

The preprocessing phase consists of three primary operations: the elimination of punctuation marks, normalization of the input, and segmentation of the text into individual words.

## 3.2.1 Punctuation Removal

The goal of the punctuation removal in our preprocessing step is to eliminate any non-essential punctuation marks present in the input text. These marks can hinder the efficiency of the spell checking process and may cause confusion during the analysis of the text (Rahimi and Homayounpour, 2022). By removing these marks, we ensure that the subsequent stages of the spell checking system can process the text more effectively and efficiently. The algorithm employed in this stage scans the input text and removes all instances of punctuation marks, including commas, periods, exclamation marks, and question marks. The output of this step is a cleaned text that is free of the extraneous elements and ready for focused analysis in subsequent stages of the system.

## 3.2.2 Normalization

The normalization phase in our preprocessing step transforms the input text into a standardized form by converting all alphabetic characters to lowercase and removing any words outside of the Wolof language.

The conversion to lowercase is essential as many NLP techniques treat words in different cases as separate entities, and converting the text to lowercase eliminates this case sensitivity impact on the analysis (HaCohen-Kerner et al., 2020).

By removing words from foreign languages, we aim to ensure that the text being analyzed is only in the target language and minimize the effect of words that may not hold semantic significance in the context of the Wolof language. This enhances the accuracy of the analysis and reduces the likelihood of introducing errors into the results.

## 3.2.3 Word Tokenization

Tokenization is a critical step in the automatic spell checking process, as it segments the input text into smaller units referred to as tokens.

There is a range of techniques used for tokenization that vary depending on the language and task at hand. These may include splitting on whitespace and punctuation, using regular expressions, or utilizing dictionaries and morphological rules (Dalrymple et al., 2006).

The tokenization process results in units that can range from individual characters or words to phrases or even full sentences. However, word tokenization is the most commonly used form of segmentation in spell checking systems, as it separates the text into individual words and provides a solid foundation for the identification of spelling errors (Mosavi Miangah, 2013; Rahman et al., 2021; Abdulrahman and Hassani, 2022).

Word tokenization not only enhances the accuracy and efficiency of the spell checking process but also allows for an analysis of the context in which each word appears. This enables the spell checking system to make more informed suggestions for appropriate spelling corrections, ultimately improving the accuracy of the results.

In the current investigation, we are implementing the process of tokenization with a focus on word-level segmentation.

## 3.3 Error Detection

The error detection stage in our spell checking system is designed to identify non-word errors in the text. This is achieved through a two-step process, consisting of validation against Wolof writing rules and comparison with a constructed lexicon.

## 3.3.1 Rules Validator

The spelling of words in the Wolof language follows certain conventions, as described by the CVC and CVCV(C) forms for monosyllabic and disyllabic words, respectively (Merrill, 2021). These conventions specify that the final consonant and vowel of a syllable cannot both be long, and strong consonants cannot appear after a long vowel or at the beginning of a word, except for prenasalized consonants.

Our error detection stage includes a validation step that rigorously checks each word in the input text against these writing conventions. If a word is found to be in compliance with these rules, it will move on to the next stage of validation. Conversely, if the word is determined to be non-compliant, it will be flagged as invalid and require correction.

## 3.3.2 Lexicon Check

In the lexicon verification phase, the spell checking system assesses each word in the input text against the Wolof lexicon to determine its validity. The lexicon, being a large repository of words, can pose challenges for quick and efficient searches. To address this, various techniques such as hash tables (Kukich, 1992), binary search (Knuth, 1998), tries data structure (Bentley and Sedgewick, 1997), and bloom filter (Bloom, 1970) have been developed to enable fast dictionary lookups.

In the present spell checker, the system uses the trie data structure, which organizes the lexicon into nodes that represent individual characters and the root node that represents the empty string. In this structure, searching for a word in the lexicon involves following the path through the trie that corresponds to the characters of the target word (Feng et al., 2012). If the end of the path is a terminal node, the word is considered to be in the lexicon and deemed valid. Conversely, if the path ends before reaching a terminal node, the word is considered incorrect and corrections are initiated.

## 3.4 Error Correction

The last stage of the spell correction procedure is to produce potential replacements for the incorrectly spelled word. Our correction techniques, described below, focus exclusively on the word and do not consider the context in which it appears. The correction process is comprised of three distinct phases: Translation of French Compound Sounds, Generation of Candidate Suggestions, and Ranking of those Suggestions.

## 3.4.1 Translation of French compound sounds

Prior to implementing the module responsible for translating French compound sounds into Wolof, we collected a small amount of Wolof data from various sources. This data was sourced from news websites, social media platforms and religious websites. A thorough analysis of this data was carried out to determine the most common misspellings made by Wolof speakers when writing in the language. Our findings indicated that a significant number of these errors were due to the usage of the French alphabet instead of the Wolof alphabet. This often resulted in the presence of French compound sounds or letters that are not native to the Wolof language. Furthermore, it was observed that accents, which play a crucial role in ensuring proper pronunciation and meaning of words, were frequently neglected. To showcase these findings, Table 3 presents some of the misspellings observed and their correct Wolof equivalent.

p05-01.png

Table 3: Misspellings and correct wolof words

Taking into consideration the common errors observed in the analysis of Wolof language data, our system is designed to assess each word for the presence of French compound sounds or letters that are extraneous to the Wolof alphabet. Should such sounds be detected, the module will translate them into their corresponding Wolof counterparts. Letters not belonging to the Wolof alphabet will be systematically eliminated. Upon completing these transformations, the output will be directed to the next phase of the correction process and candidate suggestions module.

## 3.4.2 Generation of Candidate Suggestions

In the current system, to generate potential alternatives for misspelled words, we have implemented a lexicographical distance comparison method. This process involves determining the minimum number of edit operations, such as insertion, deletion, transposition, and substitution, necessary to change one word into another (Vienney, 2004). The more significant the disparities between two words, the greater the lexicographical distance between them. Out of various lexicographical distance metrics, the Levenshtein Distance (Levenshtein, 1965) is the most commonly utilized. It quantifies the difference between two strings based on the three fundamental string operations: substitution, insertion, and deletion.

Let Levα,β be the Levenshtein distance between the subsequence formed with the α first characters of a word W<sub>1</sub> and the subsequence formed with the β first characters of a word W. The Levenshtein distance between the two subsequences W<sub>1</sub> and W<sub>2</sub> (of length |W<sub>1</sub>| and |W<sub>2</sub>| respectively) can be recursively calculated using Formula 1 (Levenshtein, 1965).

p05-02.png

The Levenshtein distance, computed using its recursive equation, can be computationally expensive (Gusfield, 1997), especially for large distances as it has an exponential time complexity of O(3min(|W1|,|W2|) ). To address this issue, our approach combines two techniques: dynamic programming and the trie data structure.

Dynamic programming (Almudevar, 2001), as a technique for solving problems by decomposing them into more manageable subproblems and storing the solutions, helps reduce the number of redundant calculations by providing a more efficient storage of intermediate results. When applied to the Levenshtein distance, it allows for the intermediate results of partial computations to be stored in a matrix, leading to a more efficient calculation of the final result.

By combining dynamic programming and the trie data structure, our approach effectively prunes the search space and avoids redundant calculations. This provides a powerful combination for computing the Levenshtein distance in a fast and efficient manner, even for large inputs.

In the standard Levenshtein distance, all edit operations are assigned a uniform cost of 1. However, considering the findings discussed earlier, a cost matrix was introduced to allow for the assignment of varying costs to different edit operations. This allows for a more nuanced representation of the importance of each operation. The cost for insertions and deletions remains at 1 for all characters. Substitution operations between source and target characters are assigned a cost of 1 if the character couple is listed in Table 4, otherwise, a cost of 2 is assigned.

p06-01.png

Table 4: Substitution cost of specific couples

Our suggestion module generates potential candidate words for a given misspelled word through the computation of the edit distance between the misspelled word and each valid word in the Wolof lexicon. For each candidate word, the cost of transforming the misspelled word into the candidate word is provided.

## 3.4.3 Ranking of candidate suggestions

In the following phase of our methodology, the candidate words generated from the previous stage are subjected to evaluation. The ranking is performed based on the proximity of the candidate words to the misspelled word, with the candidate word having the smallest edit cost being assigned the highest rank. The candidate word with the lowest edit cost is determined to be the closest match and is therefore selected as the most likely substitution for the incorrect word.

## 4 Evaluations

In order to assess the performance of our spell checking system, we first constructed a corpus of misspelled words, then selected the appropriate evaluation metrics, and finally, we implemented the chosen metrics to assess the performance of the system.

## 4.1 Generation of a Misspelled Word Corpus

The creation of a Misspelled Word Corpus followed a similar method as the generation of the Wolof lexicon. We used a hybrid approach of manual and automatic annotation, followed by proofreading. The method involved the selection of commonly misspelled Wolof words discovered through social media, religious websites, and news websites. For each misspelling, we manually added its correction. This process resulted in the formation of a corpus consisting of 3070 words, with 1075 valid words and 1995 invalid words. The edit distance between the misspelled words and their corrected forms is presented in Table 5.

p06-02.png

Table 5: Edit distance of misspellings against their corrections

## 4.2 Selection of the Evaluation Metrics

There are various factors to consider in evaluating spelling checkers. Conventional metrics, including recall and precision, have been widely used for a considerable time to gauge the linguistic proficiency of such tools. nevertheless, from a usage-centered approach, these evaluation parameters have limitations due to the absence of certain variables intrinsic to the evaluation of spelling checkers in these metrics.

To determine the reliability of our spell checker, we employed the metrics proposed in (Starlander and Popescu-Belis, 2002), (Voorhees and Garofolo, 2000), (Paggio and Music, 1998), (Paggio and Underwood, 1998), (King, 1999) as well as the following measures:

True positive (TP): correct word which is recognized as correct by the spell checker.

False positive (FP): incorrect word which is recognized as correct by the spell checker.

False negative (FN): correct word which is recognized as incorrect by the spell checker.

True negative (TN): incorrect word which is recognized as incorrect by the spell checker.

Despite their age, these metrics remain widely used in the current state of the art for evaluating spell checkers, particularly those designed for low-resource languages such as (Abdulrahman and Hassani, 2022) and (Boago Okgetheng et al., 2022).

The other used metrics in these evlautions, are described as follows:

## 4.2.1 Lexical Recall or R<sub>c</sub>

It is determined by calculating the ratio of correctly recognized valid words in the text by the spell checker, to the total number of accurate words in the same text, as shown in Formula 2 (Starlander and Popescu-Belis, 2002).

p07-01.png

## 4.2.2 Error Recall or R<sub>i</sub>

It is expressed as the fraction of incorrect words in the text detected by the spell checker, compared to the overall number of incorrect words in the text, as shown in Formula 3 (Starlander and Popescu-Belis, 2002).

p07-02.png

## 4.2.3 Lexical Precision or P<sub>c</sub>

It is calculated by dividing the total number of valid words accurately recognized by the spelling checker by the sum of valid words recognized by the spell checker and the quantity of invalid words that were not identified by the spell checker as incorrect, as shown in Formula 4 (Starlander and Popescu-Belis, 2002).

p07-03.png

## 4.2.4 Error Precision or P<sub>i</sub>

It is determined by dividing the number of accurate flags made by the spell checker by the total number of flags issued by the system, as shown in Formula 5 (Starlander and Popescu-Belis, 2002).

p07-04.png

## 4.2.5 Lexical F-measure or F m<sub>c</sub>

It enables the calculation of the harmonic mean between lexical recall and lexical precision, as shown in Formula 6 (Starlander and Popescu-Belis, 2002).

p07-05.png

## 4.2.6 Error F-measure or F m<sub>i</sub>

The Error F-measure is calculated by computing the harmonic mean of lexical recall and lexical precision, as shown in Formula 7 (Starlander and Popescu-Belis, 2002).

p07-06.png

## 4.2.7 Predictive Accuracy or P A

It quantifies the probability of any word, whether correct or incorrect, being processed correctly by the spelling checker. It is calculated using Formula 8 (Starlander and Popescu-Belis, 2002).

p07-07.png

## 4.2.8 Suggestion Adequacy or SA

It measures the ability of our spell checker to suggest accurate spelling alternatives for a misspelled word. Let S denote a proper recommendation for an incorrect word and N represent the total number of misspelled words. The Suggestion Adequacy of our system is calculated using Formula 9 (Starlander and Popescu-Belis, 2002).

p07-08.png

## 4.2.9 Mean Reciprocal Rank or MRR

As previously stated, our spell checker systematically selects the first word in the list of recommendations as the most likely substitution for the misspelled word. However, as selecting the initial option in the recommended list may not always be the appropriate choice, we will utilize the MRR metric to assess the ranking methodology. Let N be the total number of incorrect words and Rank<sub>i,c</sub> be the position of the correct suggestion in the list of suggestion for the ith misspelled word in N. The MRR is computed using the Formula 10 (Voorhees and Garofolo, 2000).

p08-01.png

## 4.3 Experiments

## 4.3.1 Results

The results of our spell checker, as demonstrated in Table 6, exhibit a remarkable level of proficiency in various aspects of spelling correction.

p08-02.png

Table 6: Performance measures of the spell checker

The recall score of 95.16% (R<sub>c</sub>) and 100% (R<sub>i</sub>) depicts the comprehensive nature of the lexicon utilized by the spell checker, as well as its relatively unspoiled status.

The spell checker exhibits an exceptional level of precision, with a score of 100% (P<sub>c</sub>) and 97.46% (P<sub>i</sub>), indicating its reliability in accurately identifying spelling errors as well as valid words. The F-measure scores of 97.52% (F mc) and 98.71% (F mi) demonstrate the spell checker's avoidance of simplistic strategies, thereby ensuring its efficiency.

The spell checker's suggestion accuracy (SA) score of 93.33% attests to the suitability and veracity of the most probable alternative to the misspelled word presented to the end-user.

The mean reciprocal rank (MRR) score of 96.04% highlights the quality of the ranking of suggestions presented by the spell checker.

Finally, the overall linguistic performance of the spell checker, as indicated by its predictive accuracy (P A) score of 98.31%, is of a highly satisfactory nature.

## 4.3.2 Errors analysis

To fully understand and identify the linguistic limitations of our spell checker, we conducted an investigation into the edit distances of the misspelled words for which the system produced an incorrect suggestion. The outcome of this study is presented in Table 7.

p08-03.png

Table 7: Edit distance of misspellings with wrong suggestions

After a thorough examination of the results displayed, we surprisingly noted that there was no significant linear correlation between the edit distance of a misspelled word and the probability of the spell checker generating incorrect suggestions. These findings are in line with those displayed in Table 5. The majority of words in our misspelled word corpus had an edit distance of 3, which increased the likelihood of the spell checker producing a wrong suggestion for misspelled words with an edit distance of 3. Additionally, as misspelled words with edit distances of 11, 12, and 13 were under-represented in our corpus, the spell checker's suggestions for these words were all accurate. This reinforces our conclusion that the higher the frequency of misspelled words with a specific edit distance, the greater the chances of the spell checker generating inaccurate suggestions for misspelled words with that same edit distance.

## 5 Limitations

Despite the impressive performance and minimal processing time of our spell checker, it is important to acknowledge its limitations.

Firstly, the spell checker is restricted to the words included in the created Wolof lexicon and cannot recognize words outside of it. Secondly, the weighted Levenshtein distance algorithm used may not always accurately reflect the likelihood of different types of errors, leading to potential inaccuracies in the suggestions.

Thirdly, the dynamic programming and trie data structures utilized may result in false positive suggestions due to a lack of consideration for the semantic meaning of words. Additionally, the computational cost of our approach can be substantial, particularly for larger lexicons or words with numerous possible corrections. Finally, the lack of context awareness may result in missed errors or incorrect suggestions.

## 6 Conclusion

This paper presented a novel spell checker for the Wolof language, that has demonstrated its potential, owing to its effective combination of the trie data structure, dynamic programming, and weighted Levenshtein distance algorithms. The hybrid approach of manual and automatic annotation enabled the construction of a comprehensive lexicon and a robust Misspelled Word Corpus, allowing for a robust evaluation of the spell checker's potential despite the limited data available for the language. Through these efforts, we hope to advance the state of NLP research for the Wolof language and contribute to preserving the linguistic heritage of African nations, ensuring that their distinct cultural expressions are protected for future generations.

The findings of this research provide compelling evidence of the viability of the spell checker for the Wolof language, opening avenues for further improvement and exploration.

For future research, it would be of interest to study the effect of increasing the lexicon and Misspelled Word Corpus on the spell checker's performance. Furthermore, a comparison of the spell checker's performance with other spell-checking methods used in low-resource languages, such as the Indigenous African languages, could provide valuable insights into the strengths and weaknesses of the current approach. The integration of state-of-the-art techniques, taking into consideration the context, such as those based on machine learning and Deep Neural Networks, into the spell checker could also be explored to further enhance its capabilities.

## Acknowledgements

We thank the anonymous reviewers for their helpful comments and feedback.

We also thank the participants of the Wolof community for giving their time, wisdom, and expertise.

## Notes

1 https://github.com/TiDev00/Wolof_SpellChecker

2 https://www.wolof-online.com/

3 https://twitter.com/SaabalN

4 http://biblewolof.com/

## References

Roshna Omer Abdulrahman and Hossein Hassani. 2022. A language model for spell checking of educational texts in kurdish (sorani). 1st Annual Meeting of the ELRA/ISCA Special Interest Group on Under-Resourced Languages, SIGUL 2022 - Held in Conjunction with the International Conference on Language Resources and Evaluation, LREC 2022 - Proceedings, pages 189-198.

Anthony Almudevar. 2001. A dynamic programming algorithm for the optimal control of piecewise deterministic markov processes. SIAM Journal on Control and Optimization, 40(2):525-539.

Yukino Baba and Hisami Suzuki. 2012. How are spelling errors generated and corrected? A study of corrected and uncorrected spelling errors using keystroke logs. In Proceedings of the 50th Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers), pages 373-377, Jeju Island, Korea. Association for Computational Linguistics.

Jon L. Bentley and Robert Sedgewick. 1997. Fast algorithms for sorting and searching strings. Proceedings of the Annual ACM-SIAM Symposium on Discrete Algorithms, pages 360-369.

Burton H. Bloom. 1970. Space/Time trade-offs in hash coding with allowable errors. Communications of the ACM, 13(7):422-426.

Boago Okgetheng, G. Malema, Ariq Ahmer, Boemo Lenyibi, and Ontiretse Ishmael. 2022. Bantu Spell Checker and Corrector using Modified Edit Distance Algorithm (MEDA). Data Science and Machine Learning.

Mamadou Cissé. 2004. Dictionnaire Francais-Wolof, 2.éd. révisée et augmentée edition. Dictionnaires des Langues O. Langues et MOndes, L'Asiatheque, Paris.

Mary Dalrymple, Maria Liakata, and Lisa Mackie. 2006. Tokenization and morphological analysis for Malagasy. In International Journal of Computational Linguistics & Chinese Language Processing, Volume 11, Number 4, December 2006, pages 315-332.

Ibrahima Diouf, Cheikh Tidiane Ndiaye, and Ndèye Binta Dieme. 2017. Dynamique et transmission linguistique au Sénégal au cours des 25 dernières années. Cahiers québécois de démographie, 46(2):197-217.

Jean Léopold Diouf and Tōkyō Gaikokugo Daigaku. Ajia Afurika Gengo Bunka Kenkyūjo. 2001. Dictionnaire wolof : wolof-français, français-wolof. 39. Institute for the Study of Languages and Cultures of Asia and Africa (ILCAA), Tokyo University of Foreign Studies, Tokyo.

David Eberhard, Gary Simons, and Chuck Fennig. 2019. Ethnologue: Languages of the World, 22nd edition edition. SIL International, Dallas, Texas.

A. Fal, R. Santos, and J.L. Doneux. 1990. Dictionnaire Wolof-Français: Suivi d'un Index Français-Wolof. Karthala, 22-24, boulevard Arago, 75013 Paris.

Jianhua Feng, Jiannan Wang, and Guoliang Li. 2012. Trie-join: A trie-based method for efficient string similarity joins. The VLDB Journal, 21(4):437-461.

Hendri Gayo and Pratomo Widodo. 2018. An Analysis of Morphological and Syntactical Errors on the English Writing of Junior High School Indonesian Students. International Journal of Learning, Teaching and Educational Research, 17(4):58-70.

Dan Gusfield. 1997. Algorithms on strings, trees, and sequences: Computer science and computational biology. SIGACT News, 28(4):41-60.

Yaakov HaCohen-Kerner, Daniel Miller, and Yair Yigal. 2020. The influence of preprocessing on text classification using a bag-of-words representation. PloS one, 15(5):e0232525.

James Cross, Maha Elbayad, and Kenneth Heafield. 2022. No language left behind: Scaling human-centered machine translation.

M King. 1999. Evaluation design: The EAGLES framework. In Proceedings of the Konvens '98: Evaluation of the Linguistic Performance of Machine Translation Systems, Bonn, Germany. Rita Nübel, Uta Seewald-Heeg, Gardezi Verlag, St. Augustin.

Donald Knuth. 1998. Art of computer programming, the: Volume 3: Sorting and searching, 2nd edition. edition. Addison-Wesley Professional.

Karen Kukich. 1992. Techniques for automatically correcting words in text. Acm Computing Surveys, 24(4):377-439.

Vladimir I. Levenshtein. 1965. Binary codes capable of correcting deletions, insertions, and reversals. Soviet physics. Doklady, 10:707-710.

Alla Lo, Cheikh Bamba Dione, Mathieu Mangeot, Mouhamadou Khoule, Sokhna Bao-Diop, Mame-Thierno Cissé, et al. 2016. Correction orthographique pour la langue wolof: état de l'art et perspectives. In JEP-TALN-RECITAL 2016: Traitement Automatique Des Langues Africaines TALAF 2016.

Jean-Jacques M'eric. 2014. A spell-checker and thesaurus for Bambara (Bamanankan) (Un v'erificateur orthographique pour la langue bambara) [in French]. TALAf@TALN, pages 141-146.

John T. M. Merrill. 2021. The evolution of consonant mutation and noun class marking in Wolof. Diachronica, 38(1):64-110.

Roger Mitton. 1996. English Spelling and the Computer. Studies in Language and Linguistics. Longman, London; New York.

Tayebeh Mosavi Miangah. 2013. FarsiSpell: A spell-checking system for Persian using a large monolingual corpus. Literary and Linguistic Computing, 29(1):56-73.

Patrizia Paggio and Bradley Music. 1998. Evaluation in the SCARRIE project. International Conference on Language Resources and Evaluation, Granada, Spain, pages 277-282.

Patrizia Paggio and Nancy L. Underwood. 1998. Validating the TEMAA LE evaluation methodology: A case study on Danish spelling checkers. Natural Language Engineering, 4(3):211-228.

James L. Peterson. 1980. Computer programs for detecting and correcting spelling errors. Communications of The Acm, 23(12):676-687.

Zahra Rahimi and Mohammad Mehdi Homayounpour. 2022. The impact of preprocessing on word embedding quality: A comparative study. Language Resources and Evaluation.

Md. Mijanur Rahman, Hasan Mahmud, Razia Sultana Rupa, and Mahnuma Rahman Rinty. 2021. A robust bangla spell checker for search engine. In 2021 6th International Conference on Communication and Electronics Systems (ICCES), pages 1329-1334.

Lawaly Salifou and Harouna Naroua. 2014. Design and Implementation of a Spell Checker for Hausa Language ('Etude et conception d'un correcteur orthographique pour la langue haoussa) [in French]. TALAf@TALN, pages 147-158.

Marianne Starlander and Andrei Popescu-Belis. 2002. Corpus-based evaluation of a French spelling and grammar checker. Proceedings of the 3rd International Conference on Language Resources and Evaluation, LREC 2002, pages 268-274.

Pius Ten Hacken and Cornelia Tschichold. 2001. Word Manager and CALL: Structured access to the lexicon as a tool for enriching learners' vocabulary. ReCALL, 13(1):121-131.

S. Vienney. 2004. Correction Automatique : Bilan et Perspectives. Presses universitaires de Franche-Comté.

Ellen Voorhees and John Garofolo. 2000. The TREC Spoken Document Retrieval Track. Bulletin of the American Society for Information Science and Technology, 26(5):18-19.
