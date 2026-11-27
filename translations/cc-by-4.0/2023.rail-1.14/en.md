> Source text of "Natural Language Processing in Ethiopian Languages: Current State, Challenges, and Opportunities" by Atnafu Lambebo Tonja, Tadesse Destaw Belay, Israel Abebe Azime, Abinew Ali Ayele, Moges Ahmed Mehamed, Olga Kolesnikova, Seid Muhie Yimam, https://aclanthology.org/2023.rail-1.14/, licensed https://creativecommons.org/licenses/by/4.0/. Segmented for translation; layout, figures and tables are not reproduced. The original PDF is the reference version.

## Natural Language Processing in Ethiopian Languages: Current State, Challenges, and Opportunities

Atnafu Lambebo Tonja, Tadesse Destaw Belay, Israel Abebe Azime, Abinew Ali Ayele, Moges Ahmed Mehamed, Olga Kolesnikova, Seid Muhie Yimam

**Affiliations**  
Atnafu Lambebo Tonja 1,∗, Tadesse Destaw Belay2,∗, Israel Abebe Azime3,∗,  
Abinew Ali Ayele4,5,∗, Moges Ahmed Mehamed6,∗, Olga Kolesnikova1, Seid Muhie Yimam5,∗,  
∗EthioNLP, 1Instituto Politécnico Nacional, Mexico, 2Wollo University, Ethiopia,3 Saarland University, Germany,  
4Bahir Dar University, Ethiopia,5Universität Hamburg, Germany, 6Wuhan University of Technology, China.

## Abstract

This survey delves into the current state of natural language processing (NLP) for four Ethiopian languages: Amharic, Afaan Oromo, Tigrinya, and Wolaytta. Through this paper, we identify key challenges and opportunities for NLP research in Ethiopia. Furthermore, we provide a centralized repository on GitHub that contains publicly available resources for various NLP tasks in these languages. This repository can be updated periodically with contributions from other researchers. Our objective is to identify research gaps and disseminate the information to NLP researchers interested in Ethiopian languages and encourage future research in this domain.

## 1 Introduction

Due to the rise of its applications in many fields, Natural Language Processing (NLP), a sub-field of Artificial Intelligence (AI), is receiving a lot of attention in terms of research and development (Kalyanathaya et al., 2019). NLP tasks such as Machine Translation (MT), Sentiment or Opinion Analysis, Parts of Speech (POS) Tagging, Question Classification (QC) and Answering (QA), Chunking, Named Entity Recognition (NER), Emotion Detection, and Semantic Role Labeling is currently highly researched areas in different high-resource languages.

Because of the advancement of deep learning and transformer approaches, modern NLP systems rely largely on the availability of vast volumes of annotated and unannotated data to function well. The majority of the languages in the world do not have access to such enormous information tools, despite the fact that a few high-resource languages have received more attention. Ethiopia is a country with more than 85 spoken languages, but only a few are presented in NLP progress. Figure 1 shows a search result for articles found in the ACL anthology for high and low-resource languages. As we can see from Figure 1, the search result for low-resource languages shows a very insignificant number of research works, while high-resource languages like English dominate in the ACL anthology paper repository. This might be a reflection of the unavailability of resources in the digital world, like in other high-resource languages, which affected the NLP progress in low-resource languages in general and Ethiopian languages in particular.

p01-01.png

Figure 1: ACL paper search results for high and low-resource languages.

In this paper, we overview research works done in the area of selected NLP tasks for four Ethiopian languages. We cover mainly the following 4 languages, namely Amharic (Amh), Afaan Oromo (Orm), Tigrinya (Tir), and Wolaytta (Wal). We also reviewed works on a small set of local languages including Awigna (Awn) and Kistane(Gru), specially for the machine translation tasks. The contributions of this paper are as follows: (1) Reporting the current state-of-the-art NLP research for Ethiopian languages. (2) Discussing NLP progress in Ethiopian languages and the main challenges and opportunities for Ethiopian NLP research. (3) Collecting and presenting publicly available resources for different NLP tasks in Ethiopian languages in one GitHub repository that can be extended periodically in collaboration with other researchers. The collected publicly available datasets and models for Ethiopian languages are in our GitHub repository.

## 2 Language Details

This paper assesses the progress of NLP research for four Ethiopian languages: Amharic, Afaan Oromo, Tigrinya, and Wolaytta. As Ethiopia is a multilingual, multicultural, and multi-ethnic country, those selected languages have more speakers and native speakers in the country. Additionally, we have searched papers in the major eight Ethiopian languages and taken the top four based on frequency from the ACL anthology. This section gives some descriptions of those four targeted languages.

Amharic: is an Ethio-Semitic and Afro-Asiatic language. It is the official working language of the Federal Democratic Republic of Ethiopia (FDRE). It has about 57 million speakers, which makes it the second most spoken Semitic language in the world, where 32 million of them are native speakers (Eberhard et al., 2022). Other known names for this language are Amarigna and Amarinya.

Afaan Oromo: is a Cushitic language family. The language name may be written in different alternatives: (Afan, Afaan, affan) Oromo, or simply Oromo. There are over 50 million native Oromo speakers (Eberhard et al., 2022).

Tigrinya: (alternatively: Tigregna, Tigrinya or Tigrigna) is a Semitic language family spoken in the Tigray region of Ethiopia and in Eritrea. The language uses Ge'ez script with some additional alphabets that have been created for the Tigrinya language and are closely related to Ge'ez and Amharic. The language has around 9.9 million native speakers (Eberhard et al., 2022).

Wolaytta: (alternatively: Wolayita, Wolaytegna, Wolaytigna, Welaitta, and Welayita) is an Omotic language family spoken in the Wolaytta zone of Ethiopia. Both Afan Oromo and Wolaytta are written in the Latin alphabet.

## 3 Low-resource Languages

Researchers concerned with NLP have used data availability (either in the form of labeled, unlabeled, or auxiliary data) and NLP tools and resources as criteria for defining low-resource languages (Ranathunga et al., 2021). According to the work by Gereme et al. (2021), low-resource languages lack the tools and resources important for NLP and other techno-linguistic solutions. In addition, low-resource languages lack new language technology designs. Due to all these limitations, it is very difficult to develop new powerful methods for language applications (Tonja et al., 2023). For resource-rich languages such as English, Germany, French, Spanish and etc, the size of the dataset is not a problem because researchers have created a large set of corpora and tools for many NLP tasks. However, many other languages are deemed to be low-resource languages (Fesseha et al., 2021a). With this intuition, Ethiopian languages such as Amharic (Gereme et al., 2021), Afaan Oromo (Abate et al., 2019), Tigrinya (Osman and Mikami, 2012), Wolayitta (Tonja et al., 2023) are "low-resource" languages due to lack of data resources, linguistic materials, and tools. This affected the development of different NLP tasks and tools.

## 4 Possible Resource Sources and Tools

Data is one of the crucial building blocks for any NLP application. The availability of data is one of the criteria to categorize one language as a high or low-resource language (Ranathunga et al., 2021). As discussed in Section 3 Ethiopian languages belong to low-resource languages due to the unavailability of data. Table 1 shows some possible digital data sources for different NLP tasks.

Like data, NLP tools are also one of the building blocks for NLP applications, and the unavailability of these tools for a certain language also directly affects the development of NLP applications for that language. Table 2 shows available NLP tools for Ethiopian languages. As it can be seen from Tables 1 and 2, there are still very few sources to gather digital data and tools, available for Ethiopian languages.

## 5 NLP Tasks and Their Progress

In this section, we discuss what work has been done, what datasets of what sizes were used, what methods or approaches the authors proposed, and the availability of their dataset and models for NLP tasks and their progress in selected Ethiopian languages. We focused on Machine Translation (MT), Part-of-speech (POS) tagging, Named Entity Recognition (NER), Question Classification (QC), Question Answering (QA), text classification, and text summarization tasks due to the large number of works done for the targeted low-resource languages. The available models, the datasets for the tasks, and their links are found in Table 7.

## 5.1 POS Tagging

POS tagging is one of the popular NLP tasks that refer to categorizing words in a text (corpus) in correspondence with a particular part of speech, depending on the definition of the word and its context (Pailai et al., 2013).

p03-01.png

Table 1: Possible data sources

p03-02.png

Table 2: Available language tools that are developed for low-resource Ethiopian languages.

Table 3 summarizes the current state of POS tagging research for selected Ethiopian languages. The table shows the name(s) of the author(s), the size of the dataset, the method used, the accuracy score of the models, and the availability of datasets and models in public repositories.

For Amharic, seven studies are listed, which used different approaches such as Conditional Random Fields (CRF), Maximum Entropy (MaxEnt), Support Vector Machines (SVM), CRFSuit, and Memory-Based Tagger (MBT). The highest accuracy score was achieved using the CRFSuit approach by Gashaw and Shashirekha (2020). For Afaan Oromo, two studies are listed that used the Hidden Markov Model (HMM) and Brill's tagger. The highest accuracy score was achieved using Bill's tagger by Ayana (2015). For Tigrinya, two studies are listed that used CRF and Long Short-Term Memory (LSTM). The highest accuracy score was achieved by the LSTM approach in Tesfagergish and Kapociute-Dzikiene (2020) and for Wolayitta, one study is listed, that used HMM and achieved an accuracy score of 92.96.

From Table 3, we can conclude that POS tagging is less researched for Ethiopian languages, the majority of the works were found for Amharic than for the other languages. From the works discussed in Table 3 only the work by Yimam et al. (2021) made their models and datasets available for public use.

## 5.2 Named Entity Recognition (NER)

In this section, we present works related to Named Entity Recognition (NER) for Ethiopian languages.

For Amharic, Mehamed (2019) conducted the NER experiment on a corpus of 10,405 tokens using the CRF classifier. Alemu (2013) conducted the experiments on a manually developed corpus of 13,538 words with the Stanford tagging scheme. Tadele (2014) used a hybrid of machine learning (decision trees and support vector machines) and rule-based methods. The datasets for these works are not available. The work done by the Masakhane NLP group (Adelani et al., 2021) analyzed a 10 African languages dataset and conducted an extensive empirical evaluation of state-of-the-art methods across both supervised and transfer learning settings, including Amharic. The data and models are available on GitHub. Gambäck and Sikdar (2017); Yimam et al. (2021); Sikdar and Gambäck (2018) built a deep learning-based NER system for Amharic using the available SAY project NER dataset. Jibril and Tantğ (2022) proposed a transformer-based NER recognizer for Amharic using a new annotated 182,691 word dataset. All available NER datasets for Ethiopian languages are shown in Table 7.

p04-01.png

Table 3: Summary of related works for selected Ethiopian languages in POS tag tasks, Size shows the number of tokens used during the experiment, Score shows the outperformed model results evaluated using accuracy score, Dataset and Model shows the availability of dataset and models in publicly accessible repositories.

For Afan Oromo, the work by Legesse (2012) implemented the first NER system using a hybrid approach (rule-based and statistical) which contains 23k words. Abdi (2015) deals with NER in a hybrid (machine learning and rule-based) approach using the data from the work of Legesse (2012). Abafogi (2021) adopted boosting NER by combinations of such approaches as, machine learning, stored rules, and pattern matching using 44k words out of which around 7.8k were named entities. Gardie and Solomon (2022) developed a NER system using 12,479 data instances and BiLSTM, word embedding, and CNN approaches. However, none of the datasets in the above Afan Oromo works are publicly available.

For Tigrinya, the research by Yohannes and Amagasa (2022b) proposed a method for NER using a pre-trained language model, TigRoBERTa. The dataset contains 69,309 manually annotated words. Later Yohannes and Amagasa (2022a) employed Tigrinya NER with an addition of 40,627 words.

The only NER work attempted Wolaytta Language was conducted by Biruk (2021) using a machine learning approach. Figures 2 and 3 show NER publication types and dataset availability for targeted Ethiopian languages, respectively. We can summarize that NER is a little more developed than the POS tagging for Afan Oromo, Tigriyna, and Wolaytta languages. However, like POS tagging, only small Amharic NER datasets shown in Figure 3 are available.

p04-02.png

Figure 2: NER publication types for Ethiopian languages: the figure description is the same as in Figure 4. Wolaytta has no published works in conferences/journals.

p04-03.png

Figure 3: NER dataset availability per language: as it can be seen relatively more NER datasets are available only for the Amharic language.

## 5.3 Machine Translation (MT)

With the increasing popularity of computational tasks and the Internet's expanding reach to diverse, multilingual communities, the field of MT is rapidly progressing (Kenny, 2018). While impressive translation results have been achieved for language pairs with abundant resources, such as English-Spanish, English-French, English-Russian, and English-Portuguese, MT systems struggle in environments with limited resources, where insufficient training data for certain languages is the main obstacle. In this section, we discuss the MT progress for Ethiopian languages in three categories: (i) English Centeric- works done for the above target Ethiopian languages with English pair, (ii) Ethiopian - Ethiopian - works done for Ethiopian language pairs without involving other languages, and (iii) Multilingual MT - works done for Ethiopian languages with other languages in a multilingual setting.

Table 4 summarizes several studies on MT in selected Ethiopian languages, focusing on the three categories. The studies vary in size of the parallel dataset, approach, score, availability of dataset, and model for public use. For English-centric language pairs, five studies used Amh-Eng language pairs. Biadgligne and Smaïli (2021) used NMT, and the size of their dataset was 231,898, while Gezmu et al. (2021) used NMT and had a dataset size of 145,364. Ashengo et al. (2021) used RNNMT, and their dataset size was 8,603. The study by Biadgligne and Smaïli (2022) used NMT, and their dataset size was the same as that of Biadgligne and Smaïli (2021). Belay et al. (2022a) used NMT with a dataset size of 1,140,130. Finally, four studies used language pairs: Orm-Eng, Tir-Eng, and Wol-Eng. These studies applied different approaches such as SMT, NMT, and hybrid, with dataset sizes ranging from 6,400 to 336,000.

Three studies used Amharic (Amh) and other local language pairs, with different approaches and parallel dataset sizes. The study by Mekonnen (2019) used Amh-Awn language pairs, with a parallel dataset size of 5,000 and an SMT approach, while the study by Woldeyohannis and Meshesha (2018) worked on Amh-Tir language pairs with a parallel dataset size of 27,000 and an SMT approach. Finally, the study by Ashengo et al. (2021) used Amh-Gur language pairs with a parallel dataset size of 9,225 and an NMT approach. The performance in these studies ranged from 7.73 to 17.26 in BLEU scores. For multilingual MT, we found two studies by Lakew et al. (2020) and Vegi et al. (2022) that included Ethiopian languages with other African languages.

In Table 4, we can see some of the notable findings of the studies, for example, Solomon et al. (2017) achieved a high BLEU score of 47.00 with their SMT approach, although their parallel dataset size was small (6,400). The study by Berihu et al. (2020) used a hybrid approach and achieved a high BLEU score of 67.57 with a parallel dataset size of 32,000. Kidane et al. (2021) used NMT with a large parallel dataset size (336,000), but their BLEU score was relatively low (15.52). Tonja et al. (2021) and Tonja et al. (2023) used NMT for Wal-Eng language pairs, with parallel dataset sizes of 26,943, but their scores were relatively low (13.8 and 16.1, respectively). Lastly, in multilingual MT studies, the work by Lakew et al. (2020) made the datasets and models available for public use. More analysis of MT studies for the selected languages are discussed in Appendix A.

## 5.4 Question Answering and Classification

Even though question classification (QC) and question answering (QA) have been largely studied for various languages, they have barely been studied for Amharic, Afaan Oromo, Tigrinya, and Wolaytta. Some of the QC and QA work conducted for these languages are discussed below.

For Amharic, the work by Habtamu (2021) implemented a Convolutional Neural Network (CNN) based Amharic QC model using around 8k generic Amharic questions from different websites and labeled into 6 classes, similar to the question classes proposed by Li and Roth (2006). The work done by Taffa and Libsie (2019) developed Amharic non-factoid QA for biography, definition, and description questions. Yimam and Libsie (2009) developed an Amharic QA system for factoid questions. However, the datasets of the aforementioned works are still not available for further investigation. Nega et al. (2016) presented machine learning (SVM) based Amharic QC using a total of 180 questions collected from the Agriculture domain. Lastly, the work done by Belay et al. (2022b) built a QC dataset from a Telegram public channel called Ask Anything Ethiopia (https://t.me/askAnythingEthiopia) and developed deep learning-based Amharic question classifiers. Nega et al. (2016) and Belay et al. (2022b) datasets are released in a GitHub repository (see Table 7).

For Afaan Oromo, the work by Chaltu (2016) proposed the Afaan Oromo list, definition, and description QA system. Daba (2021) improved the result of Chaltu (2016) work for Afaan Oromo non-factoid questions. AMARE (2016) conducted the Tigrinya factoid QA system using 1200 questions. No QC or QA works have been done previously for Wolaytta language. Figures 4 and 5 show QC/QA publication types and dataset availability for Ethiopian languages, respectively.

p06-01.png

Table 4: Summary of related works for selected Ethiopian languages in MT task, Lang. pairs is language pairs used for translation, Size shows the number of parallel sentences used in each paper, Score shows the outperformed model results evaluated using BLEU score, Dataset and Model shows the availability of dataset and models in publicly accessible repositories, respectively.

p06-02.png

Figure 4: QC/QA publication type: MSc/Ph.D. is an unpublished master or Ph.D. thesis uploaded in local universities repositories and archives. A Conference/Journal label is a work that is published in a conference or journal.

From Table 4 and 5, we can conclude that QC and QA are less researched for Ethiopian languages, compared to the other NLP tasks. Most of the conducted works are unpublished MSc or Ph.D. theses. Relatively, Amharic has received more attention for QA and QC tasks.

p06-03.png

Figure 5: QA dataset availability per language: as it can be seen some QC datasets are available for Amharic but not for the other languages.

## 5.5 Text Classification

## 5.5.1 Hate Speech

Despite many works conducted on hate speech detection for resource-rich languages, low-resource languages such as Amharic, Afan Oromo, Tigrinya, and Wolaytta, are less researched. Table 5 presents a summary of the related works in hate speech detection for selected Ethiopian languages. The table includes the name of the language, the author(s) of the paper, the size of the dataset used, the algorithm used, the score obtained, and the availability of the dataset and model in publicly accessible repositories.

p07-01.png

Table 5: Summary of related works for selected Ethiopian languages in hate speech tasks, Size shows the number of sentences used during the experiment, Score shows the outperformed model results evaluated using F1 score, Dataset and Model shows the availability of dataset and models in publicly accessible repositories, respectively.

For Amharic, five studies were conducted with different approaches. Mossie and Wang (2018) used Word2Vec to detect hate speech in a dataset of 6,120 sentences and achieved an F1 score of 85.34. In another study, Mossie and Wang (2019) used CNN-GRU in a dataset of 14,266 sentences and achieved an F1 score of 97.85. Abebaw et al. (2022) used MC-CNN in a dataset of 2,000 sentences, achieving an F1 score of 74.50. Bawoke (2020) used BILSTM on a dataset of 30,000 sentences, achieving an F1 score of 90.00. Lastly, Ayele et al. (2022) used RoBERTa on a dataset of 5,267 sentences, achieving an F1 score of 50.00.

For Afaan Oromo, three studies were conducted, and none of them made their dataset or model publicly accessible. Ababu and Woldeyohannis (2022) used BiLSTM on a dataset of 12,812 sentences, achieving an F1 score of 88.00. Defersha and Tune (2021) used L-SVM on a dataset of 13,600 sentences, achieving an F1 score of 63.00. Kanessa and Tulu (2021) used SVM+TFIDF on a dataset of 2,780 sentences, achieving an F1 score of 96.00. Bahre (2022) used NB+TF-IDF on a dataset of 7,793 sentences in the Tigrinya language and achieved an F1 score of 79.00. The dataset and model used in this study were not publicly accessible. In summary, Table 5 shows that hate speech detection in Ethiopian languages is one of the topics of research interest. However, similar to other tasks there is still a lack of publicly accessible datasets and models, which could hinder the development and evaluation of future research. It is worth noting that only two of the nine studies made their dataset and model publicly accessible. We can also see from Table 5 that for the Wolayitta language, there is no literature found for the hate speech task. Additionally, the F1 scores obtained vary greatly among the different studies, indicating that for all tasks the results are not comparable since the datasets are different.

## 5.5.2 Sentiment Analysis

Table 6 summarizes recent studies on sentiment analysis tasks for selected Ethiopian languages, including Amharic, Afaan Oromo, and Tigrinya. The studies utilize various algorithms such as Role2Vec, Naïve Bayes, LSTM, SVM, hybrid, and XLNet. For Amharic, Yimam et al. (2020) achieved the highest F1 score of 58.48% using Role2Vec with a dataset and a model publicly available, while Abeje et al. (2022) achieved the highest accuracy of 90.10% using LSTM. For Afaan Oromo, the highest accuracy of 93.00% was achieved by Oljira (2020) using Naïve Bayes, while Rase (2020) achieved 87.70% accuracy using LSTM. In contrast, Wayessa and Abas (2020) achieved 90.00% accuracy using SVM. For Tigrinya, Tela (2020) achieved an F1 score of 81.62% using XLNet with a 4000 manually labeled dataset. For Wolaita, similar to the hate speech task, there is no literature found for the sentiment analysis task. None of the datasets and models for Afaan Oromo, Tigrinya, and most of the works for Amharic are publicly accessible, hence results are not also comparable. This suggests that more work needs to be done in creating publicly accessible datasets and models for sentiment analysis tasks in Ethiopian languages. In conclusion, the studies in Table 6 indicate the potential for sentiment analysis in Ethiopian languages. The results show that the models' performance varies depending on the algorithm, dataset, and model availability. Still, there is a need for further research to create publicly accessible datasets and models to improve the models' performance and make them available for use in different applications.

p08-01.png

Table 6: Summary of related works for selected Ethiopian languages in sentiment analysis tasks, Size shows the annotated dataset used during the experiment, Score shows the outperformed model results evaluated using F1 score, Dataset and Model shows the availability of dataset and models in publicly accessible repositories, respectively.

## 5.5.3 News Classification and Text Summarization

The development of an Amharic news text classification dataset is described in a publication by Azime and Mohammed (2021). The dataset consists of 50,000 sentences and is classified into six categories, including local news, sports, politics, international news, business, and entertainment. Fesseha et al. (2021b) created a Tigrigna text classification dataset with manual annotation, consisting of 30k news sentences categorized into six classes, including sport, agriculture, politics, religion, education, and health. To enhance their analysis, the authors investigated the use of various word embedding techniques such as CNN, bag of words, skip-gram, and fastText. The dataset used for these experiments was made publicly available, as shown in Table 7. The work by Megersa (2020) utilized a dataset collected from the Ethiopian News Agency to experiment with 8 and 20 classes, but unfortunately, both the model and datasets are not publicly available.

Hasan et al. (2021) created an abstractive summarization dataset for 44 different languages using BBC articles collected via crawling. The resulting dataset comprises 5461 Amharic, 4827 Tigrinya, and 5,738 Afaan Oromo samples, which can potentially be employed for various Ethiopian language-related tasks. The authors fine-tuned mt5 models using this dataset and subsequently reported the outcomes. All publicly available data and code are listed in Table 7 for exploration. In general, news classification and text summarization has not yet been properly researched for Ethiopian languages.

## 6 Summary of Challenges, Opportunities and Future Directions

Challenges: Based on the findings of the above studies, we identified the following challenges: (i) A scarcity of publicly available data for Ethiopian languages. As the data and resources are not mostly publicly available, researchers are going to "reinventing the wheel" by trying to address the problem. This leaves the low-resource language research usually 'in limbo', as it is not clear if the problem is addressed or not. This further makes it difficult to train different NLP tasks for Ethiopian languages and limits the scope of NLP applications. Moreover, it is very difficult to reproduce results since the benchmark datasets are not maintained. (ii) A lack of resources, tools, and infrastructure for NLP research in low-resource Ethiopian languages, can make it difficult to attract funding and talented researchers to work on the problem. (iii) Few people are interested in NLP for low-resource Ethiopian languages. This can make it difficult to attract resources and support for NLP research in these languages.

Opportunities: Here are some suggestions and ideas for the future that will help get more Ethiopian languages into NLP research: (i) There needs to be more work done to collect and label data in Ethiopian languages. This will require collaboration between linguists, NLP experts, and native speakers of the languages. (ii) As the results of the addressed NLP tasks are not comparable since the datasets are different, one big issue to address in the future is the release of benchmark datasets on which researchers can work on improving performance and developing new approaches. This will require sustained funding and collaboration among researchers. (iii) The development of machine translation systems for low-resource Ethiopian languages can help bridge the language gap and enable communication across different languages. (iv) Transfer learning techniques can be used to leverage pre-trained models in high-resource languages to improve the performance of models in low-resource languages. (v) The involvement of local communities and stakeholders is critical for the success of NLP research in low-resource Ethiopian languages. People in the community can give researchers and developers important information about the language and culture.

p09-01.png

Table 7: Available datasets for Ethiopian languages.

Impact of this work and future directions: The results of this survey could be used to support future research initiatives in the field of NLP in Ethiopian Languages. Researchers can use the findings of the survey to identify areas that require further investigation and to develop research proposals that address the challenges and opportunities identified in the survey. This work also helps to conduct more surveys and develop a low-resource language demarcation. The demarcation helps to identify languages that need more NLP research attention. Adding more Ethiopian languages to NLP research will require researchers, linguists, and native speakers of the languages to work together, hence, at some point, these languages will be not considered low-resource languages anymore. Moreover, we point out with caution that not all the gaps and challenging problems can be instantly and readily fixed by researchers and research teams alone. Some of these problems call for sustained community cooperation as well as significant research funding from academic funding organizations. The difficulties we discussed in this paper are based on what we have learned from published research work and a quick scan of available corpora. Further studies with more comprehensive analysis, such as questionnaires directed to resource authors and users, or a more systematic inspection of the available data, can provide a deeper understanding of the causes of these problems and suggest effective solutions.

## 7 Conclusion

In this work, we investigated the most common NLP tasks and research works carried out in four Ethiopian languages. We explored the main NLP research directions, progress, challenges, and opportunities for Ethiopian languages. Our findings revealed that a significant amount of research has been centered on English or Amharic-centric machine translation tasks. Despite there being a plethora of written languages in Ethiopia, only a few of them have been explored in common research studies. Additionally, we observed a low prevalence of valuable resource publications in international conference venues. The majority of works are master's theses. The publicly available datasets, models, and tools are released in a centralized GitHub repository. In the future, we plan to conduct a survey on more African languages and try to come up with an NLP resource demarcation line that could help funders to prioritize research topics and languages.

## Notes

1 Link to the survey GitHub repository https://github.com/EthioNLP/Ethiopian-Language-Survey

2 Link to the survey GitHub repository https://github.com/EthioNLP/Ethiopian-Language-Survey

## References

Teshome Mulugeta Ababu and Michael Melese Woldeyohannis. 2022. Afaan oromo hate speech detection and classification on social media. In Proceedings of the Thirteenth Language Resources and Evaluation Conference, pages 6612-6619.

Abdo Ababor Abafogi. 2021. Boosting afaan oromo named entity recognition with multiple methods. International Journal of Information Engineering and Electronic Business (IJIEEB), 13(5):51-59.

Solomon Teferra Abate, Michael Melese, Martha Yifiru Tachbelie, Million Meshesha, Solomon Atinafu, Wondwossen Mulugeta, Yaregal Assabie, Hafte Abera, Biniyam Ephrem, Tewodros Gebreselassie, et al. 2019. English-ethiopian languages statistical machine translation. In Proceedings of the 2019 Workshop on Widening NLP, pages 27-30.

Sani Genemo Abdi. 2015. Afaan Oromo Named Entity Recognition Using Hybrid Approach. Unpublished master thesis, Addis Ababa University.

Zeleke Abebaw, Andreas Rauber, and Solomon Atnafu. 2022. Multi-channel convolutional neural network for hate speech detection in social media. In Advances of Science and Technology: 9th EAI International Conference, ICAST 2021, Hybrid Event, Bahir Dar, Ethiopia, August 27-29, 2021, Proceedings, Part I, pages 603-618. Springer.

Bekalu Tadele Abeje, Ayodeji Olalekan Salau, Habtamu Abate Ebabu, and Aleka Melese Ayalew. 2022. Comparative analysis of deep learning models for aspect level amharic news sentiment analysis. In 2022 International Conference on Decision Aid Sciences and Applications (DASA), pages 1628-1633. IEEE.

Sisay Fissaha Adafre. 2005. Part of speech tagging for amharic using conditional random fields. In Proceedings of the ACL workshop on computational approaches to semitic languages, pages 47-54.

David Ifeoluwa Adelani, Jade Abbott, Graham Neubig, Daniel D'souza, Julia Kreutzer, Constantine Lignos, Chester Palen-Michel, Happy Buzaaba, Shruti Rijhwani, Sebastian Ruder, Stephen Mayhew, Israel Abebe Azime, Shamsuddeen H. Muhammad, Chris Chinenye Emezue, Joyce Nakatumba-Nabende, Perez Ogayo, Aremu Anuoluwapo, Catherine Gitau, Derguene Mbaye, Jesujoba Alabi, Seid Muhie Yimam, Tajuddeen Rabiu Gwadabe, Ignatius Ezeani, Rubungo Andre Niyongabo, Jonathan Mukiibi, Verrah Otiende, Iroro Orife, Davis David, Samba Ngom, Tosin Adewumi, Paul Rayson, Mofetoluwa Adeyemi, Gerald Muriuki, Emmanuel Anebi, Chiamaka Chukwuneke, Nkiruka Odu, Eric Peter Wairagala, Samuel Oyerinde, Clemencia Siro, Tobius Saul Bateesa, Temilola Oloyede, Yvonne Wambui, Victor Akinode, Deborah Nabagereka, Maurice Katusiime, Ayodele Awokoya, Mouhamadane MBOUP, Dibora Gebreyohannes, Henok Tilaye, Kelechi Nwaike, Degaga Wolde, Abdoulaye Faye, Blessing Sibanda, Orevaoghene Ahia, Bonaventure F. P. Dossou, Kelechi Ogueji, Thierno Ibrahima DIOP, Abdoulaye Diallo, Adewale Akinfaderin, Tendai Marengereke, and Salomey Osei. 2021. MasakhaNER: Named Entity Recognition for African Languages. Transactions of the Association for Computational Linguistics, 9:1116-1131.

Sisay Adugna and Andreas Eisele. 2010. English-oromo machine translation: An experiment using a statistical approach. In Proceedings of the Seventh International Conference on Language Resources and Evaluation (LREC'10).

Girma Neshir Alemneh, Andreas Rauber, and Solomon Atnafu. 2020. Negation handling for amharic sentiment classification. In Proceedings of the The Fourth Widening Natural Language Processing Workshop, pages 4-6.

Besufikad Alemu. 2013. A named entity recognition for Amharic. Unpublished master thesis, Addis Ababa University.

KIBROM HAFTU AMARE. 2016. TIGRIGNA QUESTION ANSWERING SYSTEM FOR FACTOID QUESTIONS. Unpublished master thesis, Addis Ababa University.

Yeabsira Asefa Ashengo, Rosa Tsegaye Aga, and Surafel Lemma Abebe. 2021. Context based machine translation with recurrent neural network for english-amharic translation. Machine Translation, 35(1):19-36.

Abraham Gizaw Ayana. 2015. Towards improving brill's tagger lexical and transformation rule for afaan oromo language. Department of Geographic Information Science, Hawassa Universty, Hawassa.

Abinew Ali Ayele, Skadi Dinter, Tadesse Destaw Belay, Tesfa Tegegne Asfaw, Seid Muhie Yimam, and Chris Biemann. 2022. The 5js in ethiopia: Amharic hate speech data annotation using toloka crowdsourcing platform. In 2022 International Conference on Information and Communication Technology for Development for Africa (ICT4DA), pages 114-120. IEEE.

M Azath and Tsegay Kiros. 2020. Statistical machine translator for english to tigrigna translation. Int. J. Sci. Technol. Res, 9(1):2095-2099.

Israel Abebe Azime and Nebil Mohammed. 2021. An amharic news text classification dataset. CoRR, abs/2103.05639.

Weldemariam Bahre. 2022. Hate Speech Detection from Facebook Social Media Posts and Comments in Tigrigna language. Ph.D. thesis, St. Mary's University.

Emuye Bawoke. 2020. Amharic text hate speech detection in social media using deep learning approach. Ph.D. thesis.

Tadesse Destaw Belay, Atnafu Lambebo Tonja, Olga Kolesnikova, Seid Muhie Yimam, Abinew Ali Ayele, Silesh Bogale Haile, Grigori Sidorov, and Alexander Gelbukh. 2022a. The effect of normalization for bi-directional amharic-english neural machine translation. In 2022 International Conference on Information and Communication Technology for Development for Africa (ICT4DA), pages 84-89. IEEE.

Tadesse Destaw Belay, Seid Muhie Yimam, Abinew Ayele, and Chris Biemann. 2022b. Question answering classification for Amharic social media community based questions. In Proceedings of the 1st Annual Meeting of the ELRA/ISCA Special Interest Group on Under-Resourced Languages, pages 137-145, Marseille, France. European Language Resources Association.

Zemicheal Berihu, Gebremariam Mesfin Assres, Mulugeta Atsbaha, and Tor-Morten Grønli. 2020. Enhancing bi-directional english-tigrigna machine translation using hybrid approach. In Norsk IKT-konferanse for forskning og utdanning, 1.

Yohanens Biadgligne and Kamel Smaïli. 2021. Parallel corpora preparation for english-amharic machine translation. In Advances in Computational Intelligence: 16th International Work-Conference on Artificial Neural Networks, IWANN 2021, Virtual Event, June 16-18, 2021, Proceedings, Part I 16, pages 443-455. Springer.

Yohannes Biadgligne and Kamel Smaïli. 2022. Offline corpus augmentation for english-amharic machine translation. In 2022 5th International Conference on Information and Computer Technologies (ICICT), pages 128-135. IEEE.

Sidamo Biruk. 2021. Named Entity Recognition for Wolaytta Language Using Machine Learning Approach. Unpublished master thesis, Adama Science and Technology University.

Sisay Chala, Bekele Debisa, Amante Diriba, Silas Getachew, Chala Getu, and Solomon Shiferaw. 2021. Crowdsourcing parallel corpus for english-oromo neural machine translation using community engagement platform. arXiv preprint arXiv:2102.07539.

Fita Elanso Chaltu. 2016. Afaan Oromo List, Definition and Description Question Answering System. Unpublished master thesis, Addis Ababa University.

Endale Daba. 2021. Improving Afaan Oromo question answering system: definition, list and description question types for non-factoid questions. Unpublished master thesis, St. Mary's University.

NB Defersha and KK Tune. 2021. Detection of hate speech text in afan oromo social media using machine learning approach. Indian J Sci Technol, 14(31):2567-78.

David M. Eberhard, Gary F. Simons, and Charles D. Fennig. 2022. Ethnologue: Languages of the World. Twenty-fifth edition. Dallas, Texas: SIL International. Url: http://www.ethnologue.com.

Awet Fesseha, Shengwu Xiong, Eshete Derb Emiru, Moussa Diallo, and Abdelghani Dahou. 2021a. Text classification based on convolutional neural networks and word embedding for low-resource languages: Tigrinya. Information, 12(2):52.

Awet Fesseha, Shengwu Xiong, Eshete Derb Emiru, Moussa Diallo, and Abdelghani Dahou. 2021b. Text classification based on convolutional neural networks and word embedding for low-resource languages: Tigrinya. Information, 12(2).

Björn Gambäck, Fredrik Olsson, Atelach Alemu Argaw, and Lars Asker. 2009. Methods for amharic part-of-speech tagging. In First Workshop on Language Technologies for African Languages, March 2009, Athens, Greece.

Björn Gambäck and Utpal Kumar Sikdar. 2017. Named entity recognition for amharic using deep learning. In 2017 IST-Africa Week Conference (IST-Africa), pages 1-8. IEEE.

B Gardie and Z Solomon. 2022. Afan-oromo named entity recognition using bidirectional rnn. Indian Journal of Science and Technology, 15(16):736-741.

Ibrahim Gashaw and H L Shashirekha. 2020. Machine learning approaches for amharic parts-of-speech tagging. arXiv preprint arXiv:2001.03324.

Michael Gasser. 2011. Hornmorpho: a system for morphological processing of amharic, oromo, and tigrinya. In Conference on Human Language Technology for Development, Alexandria, Egypt, pages 94-99.

Binyam Gebrekidan Gebre. 2010. Part of speech tagging for Amharic. Ph.D. thesis, University of Wolverhampton Wolverhampton.

Ebisa A Gemechu and GR Kanagachidambaresan. 2021. Machine learning approach to english-afaan oromo text-text translation: Using attention based neural machine translation. In 2021 4th International Conference on Computing and Communications Technologies (ICCCT), pages 80-85. IEEE.

Fantahun Gereme, William Zhu, Tewodros Ayall, and Dagmawi Alemu. 2021. Combating fake news in "low-resource" languages: Amharic fake news detection accompanied by resource crafting. Information, 12(1):20.

Andargachew Mekonnen Gezmu, Andreas Nürnberger, and Tesfaye Bayu Bati. 2021. Extended parallel corpus for amharic-english machine translation. arXiv preprint arXiv:2104.03543.

Saron Habtamu. 2021. Amharic Question Classification System Using Deep Learning Approach. Unpublished master thesis, Addis Ababa University.

Tahmid Hasan, Abhik Bhattacharjee, Md Saiful Islam, Kazi Samin, Yuan-Fang Li, Yong-Bin Kang, M. Sohel Rahman, and Rifat Shahriyar. 2021. Xl-sum: Large-scale multilingual abstractive summarization for 44 languages. CoRR, abs/2106.13822.

SINTAYEHU HIRPSSA and GS Lehal. 2020. Pos tagging for amharic text: A machine learning approach. INFOCOMP: Journal of Computer Science, 19(1).

Ebrahim Chekol Jibril and A Cüneyd Tantğ. 2022. Anec: An amharic named entity corpus and transformer based recognizer. arXiv preprint arXiv:2207.00785.

Krishna Prakash Kalyanathaya, D Akila, and P Rajesh. 2019. Advances in natural language processing-a survey of current research trends, development tools and industry applications. International Journal of Recent Technology and Engineering, 7(5C):199-202.

Lata Guta Kanessa and Solomon Gizaw Tulu. 2021. Automatic hate and offensive speech detection framework from social media: the case of afaan oromoo language. In 2021 International Conference on Information and Communication Technology for Development for Africa (ICT4DA), pages 42-47. IEEE.

Dorothy Kenny. 2018. Machine translation. In The Routledge handbook of translation and philosophy, pages 428-445. Routledge.

Lidia Kidane, Sachin Kumar, and Yulia Tsvetkov. 2021. An exploration of data augmentation techniques for improving english to tigrinya translation. arXiv preprint arXiv:2103.16789.

Surafel M Lakew, Matteo Negri, and Marco Turchi. 2020. Low resource neural machine translation: A benchmark for five african languages. arXiv preprint arXiv:2003.14402.

Mandefro Legesse. 2012. Named Entity Recognition for Afan Oromo. Unpublished master thesis, Addis Ababa University.

Xin Li and Dan Roth. 2006. Learning question classifiers: the role of semantic information. Natural Language Engineering, 12(3):229-249.

Fanta Teferi Megersa. 2020. Hierarchical afaan oromoo news text classification.

Moges Ahmed Mehamed. 2019. Named entity recognition for Amharic language. LAP LAMBERT Academic Publishing.

Habtamu Mekonnen. 2019. Amharic-awngi machine translation: An experiment using statistical approach. International Journal of Computer Sciences and Engineering, 7:6-10.

Million Meshesha and Yitayew Solomon. 2018. English-afaan oromo statistical machine translation. International Journal of Computational Linguistic (IJCL), 9(1).

Samuel Minale. 2022. Amharic social media dataset for hate speech detection and classification in amharic text with deep learning.

Zewdie Mossie and Jenq-Haur Wang. 2018. Social network hate speech detection for amharic language. Computer Science & Information Technology, page 41.

Zewdie Mossie and Jenq-Haur Wang. 2019. Vulnerable community identification using hate speech detection on social media. Information Processing & Management, page 102087.

Adane Nega, Workneh Chekol, and Alemu Kumlachew. 2016. Question classification in amharic question answering system: Machine learning approach. International Journal of Advanced Studies in Computers, Science and Engineering, 5(10):14-21.

Megersa Oljira. 2020. Sentiment analysis of afaan oromo using machine learning approach. International Journal of Research Studies in Science, Engineering and Technology, 7(9):7-15.

Omer Osman and Yoshiki Mikami. 2012. Stemming tigrinya words for information retrieval. In Proceedings of COLING 2012: Demonstration Papers, pages 345-352.

Jaruwat Pailai, Rachada Kongkachandra, Thepchai Supnithi, and Prachya Boonkwan. 2013. A comparative study on different techniques for thai part-of-speech tagging. In 2013 10th International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Technology, pages 1-5. IEEE.

Wondwossen Philemon and Wondwossen Mulugeta. 2014. A machine learning approach to multi-scale sentiment analysis of amharic online posts. HiLCoE Journal of Computer Science and Technology, 2(2):8.

Surangika Ranathunga, En-Shiun Annie Lee, Marjana Prifti Skenduli, Ravi Shekhar, Mehreen Alam, and Rishemjit Kaur. 2021. Neural machine translation for low-resource languages: A survey. ACM Computing Surveys.

Megersa Oljira Rase. 2020. Sentiment analysis of afaan oromoo facebook media using deep learning approach. New Media and Mass Communication, 90(2020):2224-3267.

Binyam Ephrem Seyoum, Yusuke Miyao, and Baye Yimam Mekonnen. 2018. Universal dependencies for amharic. In Proceedings of the Eleventh International Conference on Language Resources and Evaluation (LREC 2018).

Birhanesh Fikre Shirko. 2020. Part of speech tagging for wolaita language using transformation based learning (tbl) approach.

Utpal Kumar Sikdar and Björn Gambäck. 2018. Named entity recognition for amharic using stack-based deep learning. In Computational Linguistics and Intelligent Text Processing: 18th International Conference, CICLing 2017, Budapest, Hungary, April 17-23, 2017, Revised Selected Papers, Part I 18, pages 276-287. Springer.

Yitayew Solomon, Million Meshesha, and Wendewesen Endale. 2017. Optimal alignment for bi-directional afaan oromo-english statistical machine translation. vol, 3:73-77.

Martha Yifiru Tachbelie, Solomon Teferra Abate, and Laurent Besacier. 2011. Part-of-speech tagging for under-resourced and morphologically rich languages-the case of amharic. HLTD (2011), pages 50-55.

Martha Yifiru Tachbelie and Wolfgang Menzel. 2009. Amharic part-of-speech tagger for factored language modeling. In Proceedings of the International Conference RANLP-2009, pages 428-433.

Mikiyas Tadele. 2014. Amharic named entity recognition using a hybrid approach.

Tilahun Abedissa Taffa and Mulugeta Libsie. 2019. Amharic question answering for biography, definition, and description questions. In Proceedings of the 2019 Workshop on Widening NLP, pages 110-113, Florence, Italy. Association for Computational Linguistics.

Yemane Tedla and Kazuhide Yamamoto. 2016. The effect of shallow segmentation on english-tigrinya statistical machine translation. In 2016 International Conference on Asian Language Processing (IALP), pages 79-82. IEEE.

Yemane Tedla and Kazuhide Yamamoto. 2017. Morphological segmentation for english-to-tigrinya statistical machinetranslation. Int. J. Asian Lang. Process, 27(2):95-110.

Yemane Keleta Tedla, Kazuhide Yamamoto, and Ashuboda Marasinghe. 2016. Tigrinya part-of-speech tagging with morphological patterns and the new nagaoka tigrinya corpus. International Journal of Computer Applications, 146(14).

Abrhalei Frezghi Tela. 2020. Sentiment analysis for low-resource language: The case of tigrinya. Master's thesis, Itä-Suomen yliopisto.

Senait Gebremichael Tesfagergish and Jurgita Kapociute-Dzikiene. 2020. Deep learning-based part-of-speech tagging of the tigrinya language. In Information and Software Technologies: 26th International Conference, ICIST 2020, Kaunas, Lithuania, October 15-17, 2020, Proceedings 26, pages 357-367. Springer.

Atnafu Lambebo Tonja, Olga Kolesnikova, Alexander Gelbukh, and Grigori Sidorov. 2023. Low-resource neural machine translation improvement using source-side monolingual data. Applied Sciences, 13(2):1201.

Atnafu Lambebo Tonja, Michael Melese Woldeyohannis, and Mesay Gemeda Yigezu. 2021. A parallel corpora for bi-directional neural machine translation for low resourced ethiopian languages. In 2021 International Conference on Information and Communication Technology for Development for Africa (ICT4DA), pages 71-76. IEEE.

Pavanpankaj Vegi, Sivabhavani J, Biswajit Paul, Abhinav Mishra, Prashant Banjare, Prasanna K R, and Chitra Viswanathan. 2022. WebCrawl African : A multilingual parallel corpora for African languages. In Proceedings of the Seventh Conference on Machine Translation (WMT), pages 1076-1089, Abu Dhabi, United Arab Emirates (Hybrid). Association for Computational Linguistics.

Negessa Wayessa and Sadik Abas. 2020. Multi-class sentiment analysis from afaan oromo text based on supervised machine learning approaches. International Journal of Research Studies in Science, Engineering and Technology, 7(7):10-18.

Getachew Mamo Wegari and M Meshesha. 2011. Parts of speech tagging for afaan oromo. International Journal of Advanced Computer Science and Applications, 1(3):1-5.

Michael Melese Woldeyohannis and Million Meshesha. 2018. Experimenting statistical machine translation for ethiopic semitic languages: The case of amharictigrigna. In Information and Communication Technology for Development for Africa, pages 140-149, Cham. Springer International Publishing.

Tariku Birhanu Yadesa, Syed Umar, and Tagay Takele Fikadu. 2020. Sentiment mining model for opinionated afaan oromo texts.

Seid Muhie Yimam, Hizkiel Mitiku Alemayehu, Abinew Ayele, and Chris Biemann. 2020. Exploring amharic sentiment analysis from social media texts: Building annotation tools and classification models. In Proceedings of the 28th International Conference on Computational Linguistics, pages 1048-1060.

Seid Muhie Yimam, Abinew Ali Ayele, Gopalakrishnan Venkatesh, Ibrahim Gashaw, and Chris Biemann. 2021. Introducing various semantic models for amharic: Experimentation and evaluation with multiple tasks and datasets. Future Internet, 13(11):275.

Seid Muhie Yimam and Mulugeta Libsie. 2009. TETEYEQ: Amharic question answering for factoid questions. IE-IR-LRL, 3(4):17-25.

Hailemariam Mehari Yohannes and Toshiyuki Amagasa. 2022a. A method of named entity recognition for tigrinya. ACM SIGAPP Applied Computing Review, 22(3):56-68.

Hailemariam Mehari Yohannes and Toshiyuki Amagasa. 2022b. Named-entity recognition for a low-resource language using pre-trained language model. In Proceedings of the 37th ACM/SIGAPP Symposium on Applied Computing, pages 837-844.

## A MT Summary

Figure 6 shows the MT progress per year. As it can be seen from the figure in recent years MT research for Ethiopian languages getting attention.

p14-01.png

Figure 6: MT progress per year

Figure 7 shows the dataset availability per publication year. It can be noted from the table that in recent works there are attempts to make datasets available for Ethiopian languages but this still needs more effort.

p14-02.png

Figure 7: (MT=>English centeric) Dataset availability per publication year

Figure 8 shows the publications and methodologies used. It can be seen from the figure that before 2021 the dominant methodology used by different researchers was SMT, but in recent years different researchers have applied a neural network-based approach even if its performance depends on the availability of parallel datasets.

p14-03.png

Figure 8: (MT=>English centeric) Methodology per publication year
