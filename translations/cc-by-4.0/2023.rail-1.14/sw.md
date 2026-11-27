> Machine translation (sw) of "Natural Language Processing in Ethiopian Languages: Current State, Challenges, and Opportunities" by Atnafu Lambebo Tonja, Tadesse Destaw Belay, Israel Abebe Azime, Abinew Ali Ayele, Moges Ahmed Mehamed, Olga Kolesnikova, Seid Muhie Yimam, https://aclanthology.org/2023.rail-1.14/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Uchakataji wa Lugha Asilia katika Lugha za Ethiopia: Hali ya Sasa, Changamoto, na Fursa

Atnafu Lambebo Tonja, Tadesse Destaw Belay, Israel Abebe Azime, Abinew Ali Ayele, Moges Ahmed Mehamed, Olga Kolesnikova, Seid Muhie Yimam

**Taasisi**  
Atnafu Lambebo Tonja 1,∗, Tadesse Destaw Belay2,∗, Israel Abebe Azime3,∗,  
Abinew Ali Ayele4,5,∗, Moges Ahmed Mehamed6,∗, Olga Kolesnikova1, Seid Muhie Yimam5,∗,  
∗EthioNLP, 1Instituto Politécnico Nacional, Mexico, 2Wollo University, Ethiopia,3 Saarland University, Germany,  
4Bahir Dar University, Ethiopia,5Universität Hamburg, Germany, 6Wuhan University of Technology, China.

## Muhtasari

Utafiti huu unachunguza kwa kina hali ya sasa ya uchakataji wa lugha asilia (NLP) kwa lugha nne za Ethiopia: Kiamhariki, Kiafaan Oromo, Kitigrinya, na Kiwolaytta. Kupitia makala hii, tunabainisha changamoto na fursa muhimu kwa utafiti wa NLP nchini Ethiopia. Zaidi ya hayo, tunatoa hifadhi kuu kwenye GitHub ambayo ina rasilimali zinazopatikana kwa umma kwa kazi mbalimbali za NLP katika lugha hizi. Hifadhi hii inaweza kusasishwa mara kwa mara kwa michango kutoka kwa watafiti wengine. Lengo letu ni kutambua mapengo ya utafiti na kusambaza taarifa kwa watafiti wa NLP wanaopendezwa na lugha za Ethiopia na kuhimiza utafiti wa siku zijazo katika kikoa hiki.

## 1 Utangulizi

Kutokana na kuongezeka kwa matumizi yake katika nyanja nyingi, Uchakataji wa Lugha Asilia (NLP), tawi dogo la Akili Bandia (AI), unapokea umakini mkubwa katika suala la utafiti na maendeleo (Kalyanathaya et al., 2019). Kazi za NLP kama vile Tafsiri ya Mashine (MT), Uchambuzi wa Hisia au Maoni, Uwekaji Tagi wa Aina za Maneno (POS), Uainishaji wa Maswali (QC) na Ujibuji (QA), Uchanganuaji, Utambuzi wa Jina la Huluki (NER), Utambuzi wa Hisia, na Uwekaji Lebo wa Dhima za Semantiki kwa sasa ni maeneo yanayofanyiwa utafiti sana katika lugha mbalimbali zenye rasilimali nyingi.

Kwa sababu ya maendeleo ya mbinu za ujifunzaji wa kina na Transformer, mifumo ya kisasa ya NLP inategemea kwa kiasi kikubwa upatikanaji wa kiasi kikubwa cha data zilizofafanuliwa na zisizofafanuliwa ili kufanya kazi vizuri. Lugha nyingi duniani hazina ufikiaji wa zana hizo kubwa za taarifa, licha ya ukweli kwamba lugha chache zenye rasilimali nyingi zimepokea umakini zaidi. Ethiopia ni nchi yenye zaidi ya lugha 85 zinazozungumzwa, lakini ni chache tu zinazowasilishwa katika maendeleo ya NLP. Kielelezo cha 1 kinaonyesha matokeo ya utafutaji wa makala zilizopatikana katika mkusanyiko wa ACL kwa lugha zenye rasilimali nyingi na zenye rasilimali chache. Kama tunavyoweza kuona kutoka Kielelezo cha 1, matokeo ya utafutaji kwa lugha zenye rasilimali chache yanaonyesha idadi ndogo sana ya kazi za utafiti, wakati lugha zenye rasilimali nyingi kama Kiingereza zinatawala katika hifadhi ya makala ya ACL. Hii inaweza kuwa kielelezo cha kutopatikana kwa rasilimali katika ulimwengu wa kidijitali, kama ilivyo katika lugha nyingine zenye rasilimali nyingi, jambo ambalo liliathiri maendeleo ya NLP katika lugha zenye rasilimali chache kwa ujumla na lugha za Ethiopia hasa.

p01-01.png

Kielelezo cha 1: Matokeo ya utafutaji wa makala za ACL kwa lugha zenye rasilimali nyingi na zenye rasilimali chache.

Katika makala hii, tunapitia kwa muhtasari kazi za utafiti zilizofanywa katika eneo la kazi zilizochaguliwa za NLP kwa lugha nne za Ethiopia. Tunashughulikia hasa lugha 4 zifuatazo, ambazo ni Kiamhara (Amh), Kiafaan Oromo (Orm), Kitigrinya (Tir), na Kiwolaytta (Wal). Pia tulipitia kazi kuhusu seti ndogo ya lugha za kienyeji ikijumuisha Kiawigna (Awn) na Kikistane (Gru), hasa kwa kazi za tafsiri ya mashine. Michango ya makala haya ni kama ifuatavyo: (1) Kuripoti hali ya sasa ya utafiti wa kisasa wa NLP kwa lugha za Ethiopia. (2) Kujadili maendeleo ya NLP katika lugha za Ethiopia na changamoto kuu na fursa kwa utafiti wa NLP wa Ethiopia. (3) Kukusanya na kuwasilisha rasilimali zinazopatikana kwa umma kwa kazi mbalimbali za NLP katika lugha za Ethiopia katika hazina moja ya GitHub inayoweza kupanuliwa mara kwa mara kwa ushirikiano na watafiti wengine. Seti za data na mifano iliyokusanywa inayopatikana kwa umma kwa lugha za Ethiopia ziko katika hazina yetu ya GitHub.

## 2 Maelezo ya Lugha

Makala haya yanatathmini maendeleo ya utafiti wa NLP kwa lugha nne za Ethiopia: Kiamhara, Kiafaan Oromo, Kitigrinya, na Kiwolaytta. Kwa kuwa Ethiopia ni nchi yenye lugha nyingi, tamaduni nyingi, na makabila mengi, lugha hizo zilizochaguliwa zina wazungumzaji wengi na wazungumzaji asilia wengi nchini humo. Zaidi ya hayo, tumetafuta makala katika lugha nane kuu za Ethiopia na kuchukua nne za juu kulingana na marudio kutoka kwenye anthology ya ACL. Sehemu hii inatoa baadhi ya maelezo ya lugha hizo nne zilizolengwa.

Kiamhara: ni lugha ya Ethio-Semitic na Afro-Asiatic. Ni lugha rasmi ya kazi ya Jamhuri ya Kidemokrasia ya Shirikisho la Ethiopia (FDRE). Ina takriban wazungumzaji milioni 57, jambo linaloifanya kuwa lugha ya pili ya Kisemiti inayozungumzwa zaidi duniani, ambapo milioni 32 kati yao ni wazungumzaji asilia (Eberhard et al., 2022). Majina mengine yanayojulikana kwa lugha hii ni Amarigna na Amarinya.

Afaan Oromo: ni familia ya lugha za Kikushi. Jina la lugha linaweza kuandikwa kwa njia mbadala tofauti: (Afan, Afaan, affan) Oromo, au kwa urahisi Oromo. Kuna zaidi ya wazungumzaji asilia milioni 50 wa Kioromo (Eberhard et al., 2022).

Kitigrinya: (kwa njia mbadala: Kitigregna, Kitigrinya au Kitigrigna) ni familia ya lugha ya Kisemiti inayozungumzwa katika mkoa wa Tigray nchini Ethiopia na nchini Eritrea. Lugha hiyo hutumia hati ya Kige'ez pamoja na baadhi ya alfabeti za ziada ambazo zimeundwa kwa ajili ya lugha ya Kitigrinya na zinahusiana kwa karibu na Kige'ez na Kiamhara. Lugha hiyo ina takriban wazungumzaji asilia milioni 9.9 (Eberhard et al., 2022).

Kiwolaytta: (kwa njia mbadala: Kiwolayita, Kiwolaytegna, Kiwolaytigna, Kiwelaitta, na Kiwelayita) ni familia ya lugha ya Kiomoti inayozungumzwa katika eneo la Wolaytta nchini Ethiopia. Afan Oromo na Kiwolaytta zote zimeandikwa kwa alfabeti ya Kilatini.

## 3 Lugha zenye rasilimali chache

Watafiti wanaojishughulisha na NLP wametumia upatikanaji wa data (ama kwa namna ya data iliyo na lebo, isiyo na lebo, au data saidizi) na zana na rasilimali za NLP kama vigezo vya kufafanua lugha zenye rasilimali chache (Ranathunga et al., 2021). Kulingana na kazi ya Gereme et al. (2021), lugha zenye rasilimali chache hazina zana na rasilimali muhimu kwa NLP na suluhu nyingine za kiteknolojia-lugha. Aidha, lugha zenye rasilimali chache hazina miundo mipya ya teknolojia ya lugha. Kutokana na vikwazo hivi vyote, ni vigumu sana kuunda mbinu mpya zenye nguvu za matumizi ya lugha (Tonja et al., 2023). Kwa lugha zenye rasilimali nyingi kama vile Kiingereza, Kijerumani, Kifaransa, Kihispania na kadhalika, ukubwa wa seti ya data si tatizo kwa sababu watafiti wameunda seti kubwa ya korasi na zana kwa kazi nyingi za NLP. Hata hivyo, lugha nyingine nyingi zinachukuliwa kuwa lugha zenye rasilimali chache (Fesseha et al., 2021a). Kwa dhana hii, lugha za Ethiopia kama vile Kiamhara (Gereme et al., 2021), Kiafaan Oromo (Abate et al., 2019), Kitigrinya (Osman and Mikami, 2012), Kiwolayitta (Tonja et al., 2023) ni lugha "zenye rasilimali chache" kutokana na ukosefu wa rasilimali za data, nyenzo za kiisimu, na zana. Hii iliathiri uundaji wa kazi na zana mbalimbali za NLP.

## 4 Vyanzo vya Rasilimali na Zana zinazowezekana

Data ni mojawapo ya vijenzi muhimu kwa programu yoyote ya NLP. Upatikanaji wa data ni mojawapo ya vigezo vya kuainisha lugha kama lugha yenye rasilimali nyingi au lugha yenye rasilimali chache (Ranathunga et al., 2021). Kama ilivyojadiliwa katika Sehemu ya 3, lugha za Ethiopia ni miongoni mwa lugha zenye rasilimali chache kutokana na kutopatikana kwa data. Jedwali la 1 linaonyesha baadhi ya vyanzo vya data vya kidijitali vinavyowezekana kwa kazi mbalimbali za NLP.

Kama data, zana za NLP pia ni mojawapo ya vijenzi kwa programu za NLP, na kutopatikana kwa zana hizi kwa lugha fulani pia huathiri moja kwa moja uundaji wa programu za NLP kwa lugha hiyo. Jedwali la 2 linaonyesha zana za NLP zinazopatikana kwa lugha za Ethiopia. Kama inavyoonekana kutoka kwenye Jedwali la 1 na 2, bado kuna vyanzo vichache sana vya kukusanya data na zana za kidijitali, zinazopatikana kwa lugha za Ethiopia.

## Kazi 5 za NLP na Maendeleo Yake

Katika sehemu hii, tunajadili kazi gani imefanywa, seti za data za ukubwa gani zilitumika, mbinu au mikabala gani waandishi walipendekeza, na upatikanaji wa seti zao za data na miundo kwa kazi za NLP na maendeleo yao katika lugha zilizochaguliwa za Ethiopia. Tulilenga kazi za Tafsiri ya Mashine (MT), uwekaji tagi wa Aina za Maneno (POS), Utambuzi wa Huluki Zilizopewa Majina (NER), Uainishaji wa Maswali (QC), Kujibu Maswali (QA), uainishaji wa maandishi, na ufupisho wa maandishi kwa sababu ya idadi kubwa ya kazi zilizofanywa kwa lugha lengwa zenye rasilimali chache. Miundo inayopatikana, seti za data za kazi hizo, na viungo vyake vinapatikana katika Jedwali la 7.

## 5.1 Uwekaji Tagi wa POS

Uwekaji tagi wa POS ni mojawapo ya kazi maarufu za NLP zinazorejelea kuainisha maneno katika maandishi (korasi) kwa kufuata aina fulani ya neno, kulingana na fasili ya neno na muktadha wake (Pailai et al., 2013).

p03-01.png

Jedwali la 1: Vyanzo vinavyowezekana vya data

p03-02.png

Jedwali la 2: Zana za lugha zinazopatikana ambazo zimetengenezwa kwa lugha za Ethiopia zenye rasilimali chache.

Jedwali la 3 linafupisha hali ya sasa ya utafiti wa uwekaji tagi wa POS kwa lugha zilizochaguliwa za Ethiopia. Jedwali linaonyesha jina/majina ya mwandishi/waandishi, ukubwa wa seti ya data, mbinu iliyotumika, alama ya Usahihi ya modeli, na upatikanaji wa seti za data na modeli katika hazina za umma.

Kwa Kiamhara, tafiti saba zimeorodheshwa, ambazo zilitumia mbinu tofauti kama vile Conditional Random Fields (CRF), Maximum Entropy (MaxEnt), Support Vector Machines (SVM), CRFSuit, na Memory-Based Tagger (MBT). Alama ya juu zaidi ya Usahihi ilipatikana kwa kutumia mbinu ya CRFSuit na Gashaw na Shashirekha (2020). Kwa Afaan Oromo, tafiti mbili zimeorodheshwa ambazo zilitumia Hidden Markov Model (HMM) na Brill's tagger. Kiwango cha juu cha usahihi kilipatikana kwa kutumia Bill's tagger na Ayana (2015). Kwa Kitigrinya, tafiti mbili zimeorodheshwa ambazo zilitumia CRF na Long Short-Term Memory (LSTM). Alama ya juu zaidi ya Usahihi ilipatikana kwa mbinu ya LSTM katika Tesfagergish na Kapociute-Dzikiene (2020) na kwa Kiwolayitta, utafiti mmoja umeorodheshwa, ambao ulitumia HMM na kupata alama ya Usahihi ya 92.96.

Kutoka kwenye Jedwali la 3, tunaweza kuhitimisha kwamba uwekaji tagi wa POS umefanyiwa utafiti mdogo kwa lugha za Ethiopia, kazi nyingi zilipatikana kwa Kiamhara kuliko kwa lugha nyingine. Kutoka kwenye kazi zilizojadiliwa katika Jedwali la 3, ni kazi ya Yimam et al. (2021) pekee iliyoweka modeli zao na seti za data zao wazi kwa matumizi ya umma.

## 5.2 Utambuzi wa Huluki Zilizotajwa (NER)

Katika sehemu hii, tunawasilisha kazi zinazohusiana na Utambuzi wa Huluki Zilizotajwa (NER) kwa lugha za Ethiopia.

Kwa Kiamhara, Mehamed (2019) alifanya jaribio la NER kwenye korasi ya tokeni 10,405 kwa kutumia kiainishaji cha CRF. Alemu (2013) alifanya majaribio kwenye korasi iliyotengenezwa kwa mikono ya maneno 13,538 kwa kutumia mpango wa kuweka tagi wa Stanford. Tadele (2014) alitumia mchanganyiko wa ujifunzaji wa mashine (miti ya maamuzi na mashine za vekta saidizi) na mbinu zinazotegemea sheria. Seti za data za kazi hizi hazipatikani. Kazi iliyofanywa na kikundi cha Masakhane NLP (Adelani et al., 2021) ilichambua seti ya data ya Lugha za Afrika 10 na kufanya tathmini pana ya kijarabati ya mbinu za kisasa katika mazingira ya usimamiaji na Ujifunzaji hamishi, ikijumuisha Kiamhari. Data na mifano zinapatikana kwenye GitHub. Gambäck na Sikdar (2017); Yimam et al. (2021); Sikdar na Gambäck (2018) walijenga mfumo wa NER unaotegemea ujifunzaji wa kina kwa Kiamhari kwa kutumia seti ya data ya NER ya mradi wa SAY iliyopo. Jibril na Tantğ (2022) walipendekeza kitambuzi cha NER kinachotegemea transfoma kwa Kiamhari kwa kutumia seti ya data mpya yenye maneno 182,691 yaliyoandikwa maelezo. Seti zote za data za NER zinazopatikana kwa lugha za Ethiopia zinaonyeshwa katika Jedwali la 7.

p04-01.png

Jedwali la 3: Muhtasari wa kazi zinazohusiana kwa lugha teule za Ethiopia katika kazi za tagi za POS, Ukubwa unaonyesha idadi ya tokeni zilizotumika wakati wa jaribio, Alama inaonyesha matokeo ya mfano bora yaliyotathminiwa kwa kutumia alama ya Usahihi, Seti ya Data na Mfano vinaonyesha upatikanaji wa seti ya data na mifano katika hazina zinazopatikana kwa umma.

Kwa Afan Oromo, kazi ya Legesse (2012) ilitekeleza mfumo wa kwanza wa NER kwa kutumia mbinu mseto (inayotegemea kanuni na takwimu) ambayo ina maneno 23k. Abdi (2015) anashughulikia NER kwa mbinu mseto (ujifunzaji wa mashine na inayotegemea kanuni) kwa kutumia data kutoka kazi ya Legesse (2012). Abafogi (2021) alitumia mbinu ya kuongeza NER kwa mchanganyiko wa mbinu kama vile, ujifunzaji wa mashine, sheria zilizohifadhiwa, na ulinganishaji wa ruwaza kwa kutumia maneno 44k ambapo karibu 7.8k yalikuwa ni entiti zilizotajwa. Gardie na Solomon (2022) walitengeneza mfumo wa NER kwa kutumia vielelezo vya data 12,479 na mbinu za BiLSTM, upachikaji wa neno, na CNN. Hata hivyo, hakuna hata seti moja ya data katika kazi za Kiafaan Oromo hapo juu inayopatikana kwa umma.

Kwa Kitigrinya, utafiti wa Yohannes na Amagasa (2022b) ulipendekeza mbinu ya NER kwa kutumia modeli ya lugha iliyofunzwa awali, TigRoBERTa. Seti ya data ina maneno 69,309 yaliyofafanuliwa kwa mikono. Baadaye Yohannes na Amagasa (2022a) walitumia NER ya Kitigrinya kwa kuongeza maneno 40,627.

Kazi pekee ya NER iliyojaribu Lugha ya Kiwolaytta ilifanywa na Biruk (2021) kwa kutumia mbinu ya ujifunzaji wa mashine. Kielelezo 2 na 3 vinaonyesha aina za machapisho ya NER na upatikanaji wa seti ya data kwa lugha za Kiethiopia zilizolengwa, kwa mtiririko huo. Tunaweza kufupisha kwamba NER imeendelezwa kidogo zaidi kuliko uwekaji tagi wa POS kwa lugha za Afan Oromo, Tigriyna, na Wolaytta. Hata hivyo, kama uwekaji tagi wa POS, ni seti ndogo tu za data za NER za Kiamhara zilizoonyeshwa kwenye Mchoro 3 zinazopatikana.

p04-02.png

Mchoro 2: Aina za machapisho ya NER kwa lugha za Ethiopia: maelezo ya mchoro ni sawa na yale ya Mchoro 4. Wolaytta haina kazi zilizochapishwa katika makongamano/majarida.

p04-03.png

Mchoro 3: Upatikanaji wa seti ya data ya NER kwa kila lugha: kama inavyoonekana, seti nyingi zaidi za data za NER zinapatikana kwa lugha ya Kiamhara pekee.

## 5.3 Utafsiri wa Mashine (MT)

Kadiri umaarufu wa kazi za kikompyuta unavyoongezeka na ufikiaji wa Intaneti unavyopanuka kwa jamii mbalimbali, za lugha nyingi, uwanja wa MT unaendelea kwa kasi (Kenny, 2018). Ingawa matokeo ya kuvutia ya tafsiri yamepatikana kwa jozi za lugha zenye rasilimali nyingi, kama vile Kiingereza-Kihispania, Kiingereza-Kifaransa, Kiingereza-Kirusi, na Kiingereza-Kireno, mifumo ya MT inakabiliwa na changamoto katika mazingira yenye rasilimali chache, ambapo data isiyotosha ya mafunzo kwa lugha fulani ndio kikwazo kikuu. Katika sehemu hii, tunajadili maendeleo ya MT kwa lugha za Ethiopia katika makundi matatu: (i) Kiingereza kama Kitovu - kazi zilizofanywa kwa lugha lengwa za Ethiopia zilizotajwa hapo juu zikiwa na jozi ya Kiingereza, (ii) Ethiopia - Ethiopia - kazi zilizofanywa kwa jozi za lugha za Ethiopia bila kuhusisha lugha nyingine, na (iii) MT ya Lugha Nyingi - kazi zilizofanywa kwa lugha za Ethiopia pamoja na lugha nyingine katika mazingira ya lugha nyingi.

Jedwali la 4 linafupisha tafiti kadhaa kuhusu MT katika lugha teule za Ethiopia, likilenga makundi matatu. Tafiti hizo zinatofautiana katika ukubwa wa seti ya data sambamba, mbinu, alama, upatikanaji wa seti ya data, na modeli kwa matumizi ya umma. Kwa jozi za lugha zenye Kiingereza katikati, tafiti tano zilitumia jozi za lugha za Amh-Eng. Biadgligne na Smaïli (2021) walitumia NMT, na ukubwa wa seti yao ya data ulikuwa 231,898, wakati Gezmu et al. (2021) walitumia NMT na walikuwa na ukubwa wa seti ya data wa 145,364. Ashengo et al. (2021) walitumia RNNMT, na ukubwa wa seti yao ya data ulikuwa 8,603. Utafiti wa Biadgligne na Smaïli (2022) ulitumia NMT, na ukubwa wa seti yao ya data ulikuwa sawa na ule wa Biadgligne na Smaïli (2021). Belay et al. (2022a) walitumia NMT ikiwa na ukubwa wa seti ya data wa 1,140,130. Hatimaye, tafiti nne zilitumia jozi za lugha: Orm-Eng, Tir-Eng, na Wol-Eng. Tafiti hizi zilitumia mbinu tofauti kama vile SMT, NMT, na mseto, huku ukubwa wa seti za data ukianzia 6,400 hadi 336,000.

Tafiti tatu zilitumia Kiamhara (Amh) na jozi nyingine za lugha za kienyeji, kwa mbinu tofauti na ukubwa wa seti za data sambamba. Utafiti wa Mekonnen (2019) ulitumia jozi za lugha za Amh-Awn, ukiwa na ukubwa wa seti ya data sambamba wa 5,000 na mbinu ya SMT, huku utafiti wa Woldeyohannis na Meshesha (2018) ulifanyia kazi jozi za lugha za Amh-Tir ukiwa na ukubwa wa seti ya data sambamba wa 27,000 na mbinu ya SMT. Hatimaye, utafiti wa Ashengo et al. (2021) ulitumia jozi za lugha za Amh-Gur ukiwa na ukubwa wa seti ya data sambamba wa 9,225 na mbinu ya NMT. Utendaji katika tafiti hizi ulianzia 7.73 hadi 17.26 katika alama za BLEU. Kwa MT ya lugha nyingi, tulipata tafiti mbili za Lakew et al. (2020) na Vegi et al. (2022) zilizojumuisha lugha za Ethiopia pamoja na Lugha za Afrika nyingine.

Katika Jedwali la 4, tunaweza kuona baadhi ya matokeo mashuhuri ya tafiti hizo, kwa mfano, Solomon et al. (2017) walipata alama ya juu ya BLEU ya 47.00 kwa mbinu yao ya SMT, ingawa ukubwa wa seti yao ya data sambamba ulikuwa mdogo (6,400). Utafiti wa Berihu et al. (2020) ulitumia mbinu mseto na kupata alama ya juu ya BLEU ya 67.57 kwa ukubwa wa seti ya data sambamba wa 32,000. Kidane et al. (2021) walitumia NMT kwa ukubwa mkubwa wa seti ya data sambamba (336,000), lakini alama yao ya BLEU ilikuwa ya chini kiasi (15.52). Tonja et al. (2021) na Tonja et al. (2023) walitumia NMT kwa jozi za lugha za Wal-Eng, kwa ukubwa wa seti ya data sambamba wa 26,943, lakini alama zao zilikuwa za chini kiasi (13.8 na 16.1, mtawalia). Mwisho, katika tafiti za MT za lugha nyingi, kazi ya Lakew et al. (2020) ilifanya seti za data na mifano kupatikana kwa matumizi ya umma. Uchambuzi zaidi wa tafiti za MT kwa lugha zilizochaguliwa unajadiliwa katika Kiambatisho A.

## 5.4 Kujibu Maswali na Uainishaji

Ingawa uainishaji wa maswali (QC) na kujibu maswali (QA) vimesomwa kwa kiasi kikubwa kwa lugha mbalimbali, vimesomwa kwa uchache sana kwa Kiamhariki, Kiafaan Oromo, Kitigrinya, na Kiwolaytta. Baadhi ya kazi za QC na QA zilizofanywa kwa lugha hizi zinajadiliwa hapa chini.

Kwa Kiamhari, kazi ya Habtamu (2021) ilitekeleza modeli ya QC ya Kiamhari inayotegemea Convolutional Neural Network (CNN) kwa kutumia takriban maswali 8k ya jumla ya Kiamhari kutoka tovuti tofauti na kuyaweka katika madaraja 6, sawa na madaraja ya maswali yaliyopendekezwa na Li na Roth (2006). Kazi iliyofanywa na Taffa na Libsie (2019) ilitengeneza QA ya Kiamhariki ya aina ya non-factoid kwa maswali ya wasifu, ufafanuzi, na maelezo. Yimam na Libsie (2009) walitengeneza mfumo wa QA wa Kiamhariki kwa maswali ya ukweli. Hata hivyo, seti za data za kazi zilizotajwa bado hazipatikani kwa uchunguzi zaidi. Nega et al. (2016) waliwasilisha QC ya Kiamhariki yenye msingi wa ujifunzaji wa mashine (SVM) kwa kutumia jumla ya maswali 180 yaliyokusanywa kutoka kikoa cha Kilimo. Mwishowe, kazi iliyofanywa na Belay et al. (2022b) ilijenga seti ya data ya QC kutoka kituo cha umma cha Telegram kiitwacho Ask Anything Ethiopia (https://t.me/askAnythingEthiopia) na kutengeneza viainishaji vya maswali ya Kiamhariki vyenye msingi wa ujifunzaji wa kina. Seti za data za Nega et al. (2016) na Belay et al. (2022b) zimetolewa katika hazina ya GitHub (tazama Jedwali 7).

Kwa Afaan Oromo, kazi ya Chaltu (2016) ilipendekeza mfumo wa QA wa orodha, ufafanuzi, na maelezo ya Afaan Oromo. Daba (2021) aliboresha matokeo ya kazi ya Chaltu (2016) kwa maswali yasiyo ya ukweli fupi ya Afaan Oromo. AMARE (2016) aliendesha mfumo wa QA wa ukweli wa Kitigrinya kwa kutumia maswali 1200. Hakuna kazi za QC au QA zilizowahi kufanywa hapo awali kwa lugha ya Wolaytta. Kielelezo 4 na 5 vinaonyesha aina za machapisho ya QC/QA na upatikanaji wa seti ya data kwa lugha za Ethiopia, mtawalia.

p06-01.png

Jedwali 4: Muhtasari wa kazi zinazohusiana kwa lugha teule za Ethiopia katika kazi ya MT, Jozi za lugha ni jozi za lugha zilizotumika kwa tafsiri, Ukubwa unaonyesha idadi ya sentensi sambamba zilizotumika katika kila makala, Alama inaonyesha matokeo ya modeli iliyoshinda yaliyotathminiwa kwa kutumia alama ya BLEU, Seti ya data na Modeli vinaonyesha upatikanaji wa seti ya data na modeli katika hazina zinazopatikana kwa umma, mtawalia.

p06-02.png

Kielelezo 4: Aina ya uchapishaji wa QC/QA: MSc/Ph.D. ni tasnifu ya uzamili au uzamifu isiyochapishwa iliyopakiwa katika hazina na kumbukumbu za vyuo vikuu vya ndani. Lebo ya Kongamano/Jarida ni kazi iliyochapishwa katika kongamano au jarida.

Kutoka Jedwali la 4 na 5, tunaweza kuhitimisha kwamba QC na QA hazijafanyiwa utafiti wa kutosha kwa lugha za Ethiopia, ikilinganishwa na kazi nyingine za NLP. Kazi nyingi zilizofanywa ni tasnifu za MSc au Ph.D. ambazo hazijachapishwa. Kwa kulinganisha, Kiamhariki imepokea umakini zaidi kwa kazi za QA na QC.

p06-03.png

Kielelezo cha 5: Upatikanaji wa seti ya data ya QA kwa kila lugha: kama inavyoonekana baadhi ya seti za data za QC zinapatikana kwa Kiamhariki lakini si kwa lugha nyingine.

## 5.5 Uainishaji wa Maandishi

## 5.5.1 Matamshi ya Chuki

Licha ya kazi nyingi zilizofanywa kuhusu utambuzi wa matamshi ya chuki kwa lugha zenye rasilimali nyingi, lugha zenye rasilimali chache kama vile Kiamhariki, Kiafaan Oromo, Kitigrinya, na Kiwolaytta, hazijafanyiwa utafiti wa kutosha. Jedwali la 5 linawasilisha muhtasari wa kazi zinazohusiana katika utambuzi wa matamshi ya chuki kwa lugha zilizochaguliwa za Ethiopia. Jedwali linajumuisha jina la lugha, mwandishi (waandishi) wa makala, ukubwa wa seti ya data iliyotumika, algoriti iliyotumika, alama iliyopatikana, na upatikanaji wa seti ya data na modeli katika hazina zinazoweza kufikiwa na umma.

p07-01.png

Jedwali la 5: Muhtasari wa kazi zinazohusiana kwa lugha zilizochaguliwa za Ethiopia katika kazi za matamshi ya chuki, Ukubwa unaonyesha idadi ya sentensi zilizotumika wakati wa jaribio, Alama inaonyesha matokeo ya modeli iliyofanya vizuri zaidi yaliyotathminiwa kwa kutumia alama ya F1, Seti ya Data na Modeli vinaonyesha upatikanaji wa seti ya data na modeli katika hazina zinazoweza kufikiwa na umma, mtawalia.

Kwa Kiamhariki, tafiti tano zilifanywa kwa mbinu tofauti. Mossie na Wang (2018) walitumia Word2Vec kugundua matamshi ya chuki katika seti ya data ya sentensi 6,120 na walipata alama ya F1 ya 85.34. Katika utafiti mwingine, Mossie na Wang (2019) walitumia CNN-GRU katika seti ya data ya sentensi 14,266 na walipata alama ya F1 ya 97.85. Abebaw na wenzake (2022) walitumia MC-CNN katika seti ya data ya sentensi 2,000, wakipata alama ya F1 ya 74.50. Bawoke (2020) alitumia BiLSTM kwenye seti ya data ya sentensi 30,000, akipata alama ya F1 ya 90.00. Mwishowe, Ayele na wenzake (2022) walitumia RoBERTa kwenye seti ya data ya sentensi 5,267, wakipata alama ya F1 ya 50.00.

Kwa Afaan Oromo, tafiti tatu zilifanyika, na hakuna hata moja iliyoweka seti yao ya data au modeli kupatikana kwa umma. Ababu na Woldeyohannis (2022) walitumia BiLSTM kwenye seti ya data ya sentensi 12,812, wakipata alama ya F1 ya 88.00. Defersha na Tune (2021) walitumia L-SVM kwenye seti ya data ya sentensi 13,600, wakipata alama ya F1 ya 63.00. Kanessa na Tulu (2021) walitumia SVM+TFIDF kwenye seti ya data ya sentensi 2,780, wakipata alama ya F1 ya 96.00. Bahre (2022) alitumia NB+TF-IDF kwenye seti ya data ya sentensi 7,793 katika lugha ya Kitigrinya na akapata alama ya F1 ya 79.00. Seti ya data na modeli zilizotumika katika utafiti huu hazikuwa zinapatikana kwa umma. Kwa muhtasari, Jedwali la 5 linaonyesha kwamba utambuzi wa matamshi ya chuki katika lugha za Ethiopia ni mojawapo ya mada za maslahi ya utafiti. Hata hivyo, sawa na kazi nyingine bado kuna upungufu wa seti za data na modeli zinazopatikana kwa umma, jambo ambalo linaweza kuzuia maendeleo na tathmini ya utafiti wa baadaye. Inafaa kubainisha kuwa ni tafiti mbili tu kati ya tisa zilizoweka seti yao ya data na modeli zao wazi kwa umma. Tunaweza pia kuona kutoka kwenye Jedwali 5 kwamba kwa lugha ya Wolayitta, hakuna maandiko yaliyopatikana kwa kazi ya matamshi ya chuki. Zaidi ya hayo, alama za F1 zilizopatikana zinatofautiana sana kati ya tafiti mbalimbali, ikionyesha kwamba kwa kazi zote matokeo hayawezi kulinganishwa kwa kuwa seti za data ni tofauti.

## 5.5.2 Uchambuzi wa Hisia

Jedwali 6 linafupisha tafiti za hivi karibuni kuhusu kazi za uchambuzi wa hisia kwa lugha zilizochaguliwa za Ethiopia, zikiwemo Kiamhariki, Afaan Oromo, na Kitigrinya. Tafiti hizo zinatumia algoriti mbalimbali kama vile Role2Vec, Naïve Bayes, LSTM, SVM, mseto, na XLNet. Kwa Kiamhariki, Yimam et al. (2020) walipata alama ya juu zaidi ya F1 ya 58.48% kwa kutumia Role2Vec wakiwa na seti ya data na modeli iliyopo wazi kwa umma, huku Abeje et al. (2022) wakipata Usahihi wa juu zaidi wa 90.10% kwa kutumia LSTM. Kwa Afaan Oromo, Usahihi wa juu zaidi wa 93.00% ulipatikana na Oljira (2020) kwa kutumia Naïve Bayes, huku Rase (2020) akipata Usahihi wa 87.70% kwa kutumia LSTM. Kinyume chake, Wayessa na Abas (2020) walifikia Usahihi wa 90.00% kwa kutumia SVM. Kwa Kitigrinya, Tela (2020) alifikia alama ya F1 ya 81.62% kwa kutumia XLNet na seti ya data iliyotambulishwa kwa mikono ya 4000. Kwa Kiwolaita, sawa na kazi ya matamshi ya chuki, hakuna maandiko yaliyopatikana kwa kazi ya uchambuzi wa hisia. Hakuna seti za data na mifano ya Afaan Oromo, Tigrinya, na kazi nyingi za Amharic zinazopatikana kwa umma, hivyo matokeo hayawezi pia kulinganishwa. Hii inapendekeza kuwa kazi zaidi inahitajika kufanywa katika kuunda seti za data na mifano inayopatikana kwa umma kwa kazi za uchambuzi wa hisia katika lugha za Ethiopia. Kwa kumalizia, tafiti katika Jedwali 6 zinaonyesha uwezekano wa uchambuzi wa hisia katika lugha za Ethiopia. Matokeo yanaonyesha kuwa utendaji wa mifano unatofautiana kulingana na algoriti, seti ya data, na upatikanaji wa mfano. Bado, kuna haja ya utafiti zaidi kuunda seti za data na mifano inayopatikana kwa umma ili kuboresha utendaji wa mifano na kuzifanya zipatikane kwa matumizi katika matumizi tofauti.

p08-01.png

Jedwali la 6: Muhtasari wa kazi zinazohusiana kwa lugha teule za Ethiopia katika kazi za uchambuzi wa hisia, Ukubwa unaonyesha seti ya data iliyofafanuliwa iliyotumika wakati wa jaribio, Alama inaonyesha matokeo ya mfano uliofaulu zaidi yaliyotathminiwa kwa kutumia alama ya F1, Seti ya Data na Mfano vinaonyesha upatikanaji wa seti ya data na mifano katika hazina zinazopatikana kwa umma, mtawalia.

## 5.5.3 Uainishaji wa Habari na Ufupisho wa Maandishi

Uundaji wa seti ya data ya uainishaji wa maandishi ya habari ya Kiamhara umefafanuliwa katika chapisho la Azime na Mohammed (2021). Seti ya data ina sentensi 50,000 na imeainishwa katika kategoria sita, zikiwemo habari za ndani, michezo, siasa, habari za kimataifa, biashara, na burudani. Fesseha na wenzake (2021b) waliunda seti ya data ya uainishaji wa maandishi ya Kitigrinya kwa ufafanuzi wa mkono, ikijumuisha sentensi 30k za habari zilizoainishwa katika madarasa sita, yakiwemo michezo, kilimo, siasa, dini, elimu, na afya. Ili kuboresha uchambuzi wao, waandishi walichunguza matumizi ya mbinu mbalimbali za upachikaji wa maneno kama vile CNN, mfuko wa maneno, skip-gram, na fastText. Seti ya data iliyotumika kwa majaribio haya iliwekwa wazi kwa umma, kama inavyoonyeshwa katika Jedwali la 7. Kazi ya Megersa (2020) ilitumia seti ya data iliyokusanywa kutoka Shirika la Habari la Ethiopia kufanya majaribio na madarasa 8 na 20, lakini kwa bahati mbaya, mfano na seti za data zote hazipatikani kwa umma.

Hasan et al. (2021) waliunda seti ya data ya ufupishaji dhahania kwa lugha 44 tofauti kwa kutumia makala za BBC zilizokusanywa kupitia utambazaji. Seti ya data inayotokana inajumuisha sampuli 5461 za Kiamhara, 4827 za Kitigrinya, na 5,738 za Kiafaan Oromo, ambazo zinaweza kutumika kwa kazi mbalimbali zinazohusiana na lugha za Ethiopia. Waandishi waliboresha mifano ya mt5 kwa kutumia seti hii ya data na baadaye wakaripoti matokeo. Data na msimbo wote unaopatikana kwa umma umeorodheshwa katika Jedwali la 7 kwa uchunguzi. Kwa ujumla, uainishaji wa habari na ufupishaji wa maandishi bado haujafanyiwa utafiti ipasavyo kwa lugha za Ethiopia.

## 6 Muhtasari wa Changamoto, Fursa na Mielekeo ya Baadaye

Changamoto: Kulingana na matokeo ya tafiti zilizotajwa hapo juu, tulibaini changamoto zifuatazo: (i) Uhaba wa data inayopatikana kwa umma kwa lugha za Ethiopia. Kwa kuwa data na rasilimali mara nyingi hazipatikani kwa umma, watafiti wanaishia "kuvumbua gurudumu upya" kwa kujaribu kutatua tatizo. Hii inaacha utafiti wa lugha yenye rasilimali chache kwa kawaida 'katika hali ya sintofahamu', kwani haiko wazi kama tatizo limeshughulikiwa au la. Hii inafanya iwe vigumu zaidi kufunza kazi tofauti za NLP kwa lugha za Ethiopia na inapunguza wigo wa matumizi ya NLP. Aidha, ni vigumu sana kuzalisha tena matokeo kwa kuwa seti za data za kigezo hazitunzwi. (ii) Ukosefu wa rasilimali, zana, na miundombinu kwa ajili ya utafiti wa NLP katika lugha za Ethiopia zenye rasilimali chache, unaweza kufanya iwe vigumu kuvutia ufadhili na watafiti wenye vipaji kufanya kazi katika tatizo hilo. (iii) Watu wachache wanavutiwa na NLP kwa lugha za Ethiopia zenye rasilimali chache. Hii inaweza kufanya iwe vigumu kuvutia rasilimali na msaada kwa ajili ya utafiti wa NLP katika lugha hizi.

Fursa: Hapa kuna baadhi ya mapendekezo na mawazo kwa ajili ya siku zijazo ambayo yatasaidia kuingiza lugha zaidi za Ethiopia katika utafiti wa NLP: (i) Kuna haja ya kufanyika kazi zaidi ya kukusanya na kuweka lebo kwenye data katika lugha za Ethiopia. Hili litahitaji ushirikiano kati ya wanaisimu, wataalamu wa NLP, na wazungumzaji asilia wa lugha hizo. (ii) Kwa kuwa matokeo ya kazi za NLP zilizoshughulikiwa hayawezi kulinganishwa kwa sababu seti za data ni tofauti, suala moja kubwa la kushughulikia baadaye ni utoaji wa seti za data za kigezo ambazo watafiti wanaweza kuzitumia kuboresha utendaji na kuunda mbinu mpya. Hili litahitaji ufadhili endelevu na ushirikiano miongoni mwa watafiti. (iii) Uundaji wa mifumo ya tafsiri ya mashine kwa lugha za Ethiopia zenye rasilimali chache unaweza kusaidia kuziba pengo la lugha na kuwezesha mawasiliano kati ya lugha tofauti. (iv) Mbinu za Ujifunzaji hamishi zinaweza kutumika kutumia modeli zilizofunzwa awali katika lugha zenye rasilimali nyingi ili kuboresha utendaji wa modeli katika lugha zenye rasilimali chache. (v) Ushirikishwaji wa jamii za ndani na wadau ni muhimu kwa mafanikio ya utafiti wa NLP katika lugha za Ethiopia zenye rasilimali chache. Watu katika jamii wanaweza kuwapa watafiti na watengenezaji taarifa muhimu kuhusu lugha na utamaduni.

p09-01.png

Jedwali la 7: Seti za data zinazopatikana kwa lugha za Ethiopia.

Athari za kazi hii na mwelekeo wa baadaye: Matokeo ya uchunguzi huu yanaweza kutumika kusaidia mipango ya utafiti wa baadaye katika uwanja wa NLP katika Lugha za Ethiopia. Watafiti wanaweza kutumia matokeo ya uchunguzi huu kutambua maeneo yanayohitaji uchunguzi zaidi na kuandaa mapendekezo ya utafiti yanayoshughulikia changamoto na fursa zilizotambuliwa katika uchunguzi huu. Kazi hii pia inasaidia kufanya uchunguzi zaidi na kuendeleza uwekaji mipaka wa lugha yenye rasilimali chache. Uwekaji mipaka huu unasaidia kutambua lugha zinazohitaji umakini zaidi wa utafiti wa NLP. Kuongeza lugha zaidi za Ethiopia kwenye utafiti wa NLP kutahitaji watafiti, wanaisimu, na wazungumzaji asilia wa lugha hizo kufanya kazi pamoja, kwa hiyo, wakati fulani, lugha hizi hazitazingatiwa tena kama lugha zenye rasilimali chache. Zaidi ya hayo, tunasisitiza kwa tahadhari kwamba si mapengo yote na matatizo yenye changamoto yanaweza kurekebishwa mara moja na kwa urahisi na watafiti na timu za utafiti pekee. Baadhi ya matatizo haya yanahitaji ushirikiano endelevu wa jamii pamoja na ufadhili mkubwa wa utafiti kutoka kwa mashirika ya kitaaluma ya ufadhili. Ugumu tuliojadili katika makala hii unatokana na yale tuliyojifunza kutoka kazi za utafiti zilizochapishwa na uchunguzi wa haraka wa korasi zilizopo. Tafiti zaidi zenye uchambuzi wa kina zaidi, kama vile dodoso zinazoelekezwa kwa waandishi na watumiaji wa rasilimali, au ukaguzi wa kimfumo zaidi wa data zilizopo, zinaweza kutoa uelewa wa kina wa sababu za matatizo haya na kupendekeza suluhisho madhubuti.

## 7 Hitimisho

Katika kazi hii, tulichunguza kazi za kawaida zaidi za NLP na kazi za utafiti zilizofanywa katika lugha nne za Ethiopia. Tulichunguza mielekeo mikuu ya utafiti wa NLP, maendeleo, changamoto, na fursa kwa lugha za Ethiopia. Matokeo yetu yalifichua kwamba kiasi kikubwa cha utafiti kimejikita kwenye kazi za tafsiri ya mashine zinazozingatia Kiingereza au Kiamhariki. Licha ya kuwepo kwa wingi wa lugha zilizoandikwa nchini Ethiopia, ni chache tu kati yazo zimechunguzwa katika tafiti za kawaida za utafiti. Zaidi ya hayo, tuliona kiwango kidogo cha machapisho ya rasilimali zenye thamani katika mikutano ya kimataifa ya makongamano. Kazi nyingi ni tasnifu za shahada ya uzamili. Seti za data, miundo, na zana zinazopatikana kwa umma zimetolewa katika hazina kuu ya GitHub. Katika siku zijazo, tunapanga kufanya uchunguzi kuhusu Lugha za Afrika zaidi na kujaribu kupata mstari wa mpaka wa rasilimali za NLP ambao unaweza kuwasaidia wafadhili kuweka vipaumbele vya mada za utafiti na lugha.

## Maelezo

1 Kiungo cha hazina ya GitHub ya uchunguzi https://github.com/EthioNLP/Ethiopian-Language-Survey

2 Kiungo cha hazina ya GitHub ya uchunguzi https://github.com/EthioNLP/Ethiopian-Language-Survey

## Marejeo

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

## Muhtasari wa MT

Kielelezo cha 6 kinaonyesha maendeleo ya MT kwa mwaka. Kama inavyoonekana kutoka kwenye kielelezo, katika miaka ya hivi karibuni utafiti wa MT kwa lugha za Ethiopia unapata umakini.

p14-01.png

Kielelezo cha 6: Maendeleo ya MT kwa mwaka

Kielelezo cha 7 kinaonyesha upatikanaji wa seti ya data kwa kila mwaka wa uchapishaji. Inaweza kubainika kutoka kwenye jedwali kwamba katika kazi za hivi karibuni kuna jitihada za kufanya seti za data zipatikane kwa lugha za Ethiopia lakini hii bado inahitaji jitihada zaidi.

p14-02.png

Kielelezo cha 7: (MT inayozingatia Kiingereza) Upatikanaji wa seti ya data kwa kila mwaka wa uchapishaji

Kielelezo cha 8 kinaonyesha machapisho na mbinu zilizotumika. Inaweza kuonekana kutoka kwenye kielelezo kwamba kabla ya 2021 mbinu kuu iliyotumiwa na watafiti mbalimbali ilikuwa SMT, lakini katika miaka ya hivi karibuni watafiti mbalimbali wametumia mbinu inayotegemea mtandao wa neva hata kama utendakazi wake unategemea upatikanaji wa seti za data sambamba.

p14-03.png

Kielelezo cha 8: (MT inayozingatia Kiingereza) Mbinu kwa kila mwaka wa uchapishaji
