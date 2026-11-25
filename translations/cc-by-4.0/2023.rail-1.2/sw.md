> Machine translation (sw) of "Unsupervised Cross-lingual Word Embedding Representation for English-isiZulu" by Derwin Ngomane, Rooweither Mabuya, Jade Abbott, Vukosi Marivate, https://aclanthology.org/2023.rail-1.2/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## Uwakilishi wa Upachikaji wa Neno Kati ya Lugha Bila Usimamiaji kwa Kiingereza-isiZulu

Derwin Ngomane, Rooweither Mabuya, Jade Abbott, Vukosi Marivate

**Taasisi**  
Derwin Ngomane1, Vukosi Marivate1,2,3, Jade Abbott2,3, Rooweither Mabuya3,4  
1Department of Computer Science, University of Pretoria;  
2Lelapa AI; 3Masakhane NLP;  
4South African Centre for Digital Language Resources, North-West University  
, ,  
, 

## Muhtasari

Katika utafiti huu, tunachunguza ufanisi wa kutumia upachikaji wa neno kati ya lugha kwa ajili ya Ujifunzaji hamishi wa zero-shot kati ya lugha yenye rasilimali nyingi, Kiingereza, na lugha yenye rasilimali chache, isiZulu. IsiZulu ni sehemu ya familia ya lugha ya Nguni ya Afrika Kusini, ambayo ina sifa ya mofolojia changamano ya kuambatanisha. Tunatumia VecMap, zana ya Programu huria, kupata upachikaji wa neno kati ya lugha. Ili kufanya tathmini ya nje ya ufanisi wa upachikaji, tunafunza kiainishi cha habari kwenye data ya Kiingereza iliyo na lebo ili kuainisha data ya isiZulu isiyo na lebo kwa kutumia Ujifunzaji hamishi wa zero-shot. Katika utafiti wetu, tuligundua kuwa modeli yetu ina wastani wa uzani wa alama ya F1 ya 0.34. Matokeo yetu yanaonyesha kuwa VecMap inazalisha upachikaji wa neno wa moduli katika nafasi ya kati ya lugha ambayo ina athari kwenye kiainishi cha mkondo wa chini kinachotumika kwa Ujifunzaji hamishi wa zero-shot.

## 1 Utangulizi

Katika uundaji wa mifumo ya uchakataji wa lugha asilia (NLP) yenye usawa, upachikaji wa neno kati ya lugha unazidi kupata umaarufu. Kulingana na nadharia ya usambazaji, maneno yanayotokea katika miktadha inayolingana yana mambo ya pamoja ya semantiki (Villegas et al., 2016). Kwa sababu hiyo, embeddings za maneno zimewezesha maendeleo ya teknolojia ya NLP.

Matumizi ya uwakilishi wa embedding ya neno yametoa utendaji wa kuridhisha kwa matumizi mengi ya NLP na matumizi yanayohusiana (Gutiérrez na Keith, 2018). Embeddings za maneno zimetumika kwa uhandisi wa sifa (Tang et al., 2014) na madhumuni ya Ujifunzaji hamishi (Bataa na Wu, 2019). Mifano ya tafsiri, kazi za uchambuzi wa hisia na kazi za uainishaji zote zimefaidika. Maboresho haya yamekuwa hasa katika lugha zenye rasilimali nyingi, kama vile Kiingereza, kutokana na wingi wa kumbukumbu zilizo na lebo katika lugha hizi. Ukosefu wa kumbukumbu zilizo na lebo katika lugha zenye rasilimali chache umekuwa hasara katika kuendeleza teknolojia za NLP ndani ya nafasi hii.

Machapisho mengi ya habari nchini Afrika Kusini yako kwa Kiingereza ingawa Afrika Kusini ina lugha rasmi kumi na moja (Marivate et al., 2020). Kulingana na matokeo ya Sensa ya 2011 ya Statistics South Africa (Stats SA), isiZulu kilikuwa lugha ya nyumbani iliyozungumzwa zaidi ikiwa na 22.7% ya idadi ya watu wakiitaja kama lugha ya nyumbani (Statistics South Africa (Stats SA), 2012). IsiZulu ni sehemu ya lugha nyingi za kiasili nchini Afrika Kusini, na ni ya familia ya lugha za Nguni (Dube na Suleman, 2019). Familia ya lugha ya Nguni ina sifa ya mofolojia yao ya kiambishi-aglutinati (Keet na Khumalo, 2016).

Afrika Kusini ni taifa la lugha nyingi ambapo idadi kubwa ya watu wana lugha ya pili wanayoitumia juu ya lugha zao za msingi. Katika miaka ya baada ya ubaguzi wa rangi, nchi imeona ongezeko la idadi ya watu wa raia wanaozungumza Kiingereza kama lugha ya pili. Tabia hii pia imeenea kwa isiZulu, ambapo raia wameongeza isiZulu kama lugha ya pili (Posel na Zeller, 2020). Hii inasisitiza umuhimu wa kuendeleza kazi ya NLP kwa lugha zenye rasilimali chache nchini Afrika Kusini.

Katika kazi hii tunajaribu kutumia fursa ya korasi yenye rasilimali nyingi na korasi yenye rasilimali chache ili kujifunza embeddings za maneno kati ya lugha kwa Kiingereza na isiZulu. Matumizi ya viambatanisho vya maneno kati ya lugha yangeturuhusu kufanya ujifunzaji hamishi wa modeli kutoka lugha yenye rasilimali nyingi hadi lugha yenye rasilimali chache. Jitihada kwa isiZulu ni ngumu hasa kutokana na uchangamano wa kimofolojia wa lugha hiyo. Kwa hiyo, tunapaswa kushughulikia maneno kwa namna inayoweza kuongeza uwakilishi wa kisintaksia na wa semantiki wa Kiingereza na isiZulu katika nafasi kati ya lugha.

Katika kazi hii, tunalenga kujibu maswali yafuatayo ya utafiti:

Je, tunaweza kutumia viambatanisho vya maneno vya lugha moja kwa Kiingereza na isiZulu kuunda vekta za uambatanishaji wa semantiki kati ya lugha kwa lugha zote mbili?

Je, tunaweza kutumia ujifunzaji hamishi wa zero-shot katika nafasi kati ya lugha kutumia kiainishaji cha makala ya habari za Kiingereza kuainisha makala za isiZulu?

Zaidi ya hayo, tunatanguliza seti mbili mpya za data:

seti ya data ya Umsuka ya Kiingereza-isiZulu (Mabuya et al., 2021) ambayo inatumika katika uundaji wa vekta kati ya lugha.

Seti ya data ya uainishaji wa habari za Afrika Kusini ya isiZulu iliyopatikana kutoka kwa data ya Shirika la Utangazaji la Afrika Kusini (SABC)

Sehemu iliyobaki ya kazi imepangwa kama ifuatavyo: Sehemu ya 2 itajadili usuli na kazi za awali. Sehemu ya 3 inaeleza mbinu iliyotumika kwa maktaba ya VecMap na kiainishaji cha kujifunza bila mifano (zero-shot learning). Sehemu ya 4 inajadili majaribio na matokeo. Hatimaye, maelezo ya kuhitimisha na hatua zinazowezekana za baadaye kwa utafiti wa siku zijazo zinajadiliwa katika Sehemu ya 5.

## 2 Historia na Kazi zinazohusiana

Mbinu maarufu ambazo zimetumika kuwakilisha tokeni kama vekta zimekuwa Mfuko wa Maneno (BoW), Marudio ya Neno-Marudio Kinyume ya Hati (TF-IDF) na Taarifa za Kuheshimiana kwa Pointi (PMI). Hata hivyo, mbinu hizi huunda matriki machache na makubwa na pia huunda vekta ambazo hazinasi semantiki (Villegas et al., 2016).

Maendeleo ya kibunifu yamesababisha kuibuka kwa mbinu mpya zinazotumia mitandao ya neva. Mbinu hizi zinajumuisha miundo maarufu ya Word2Vec (Mikolov et al., 2013) na miundo inayotegemea uangalifu (Vaswani et al., 2017). Miundo hii imepata utendaji wa hali ya juu kwenye kazi za urekebishaji na Ujifunzaji hamishi katika NLP (Devlin et al., 2018).

Hasara ya upachikaji wa maneno wa lugha moja ni kwamba wanatatizika kuhamisha kati ya lugha ambazo hazifanani (Ruder et al., 2019b). Upachikaji wa maneno wa lugha nyingi uliofunzwa kwa lugha nyingi pia umeonyesha kufanya vibaya kwa lugha zenye rasilimali chache (Wu and Dredze, 2020).

Mbinu za ujifunzaji wa uwakilishi kati ya lugha zimependekezwa kushughulikia suala hili (Ruder et al., 2019a). Kuna aina mbili za mbinu za upachikaji wa maneno kati ya lugha: mbinu za ramani na mbinu za baada ya ukweli (Ruder et al., 2019a). Mbinu za awali za ramani zilihitaji matumizi ya kamusi ya ramani ya lugha mbili kati ya lugha zinazochunguzwa, lakini maboresho ya hivi karibuni yameanzisha mbinu za kishindani. Mbinu za kishindani hudhania kwamba nafasi za lugha moja za pembejeo zina umbo sawa na hivyo kupunguza hitaji la kamusi ya uchoraji wa lugha mbili (Ruder et al., 2019a). Hata hivyo, imeonyeshwa kwamba mbinu za kishindani hufanya vibaya wakati viambatanisho vya lugha moja havina umbo sawa (Søgaard et al., 2018).

Kazi za NLP za mkondo wa chini zimethibitishwa kunufaika kutokana na viambatanisho vya maneno kati ya lugha. Kwa mfano, viambatanisho vya maneno kati ya lugha vimeongeza utendaji wa tafsiri ya mashine (Conneau and Lample, 2019) na kazi za kuweka lebo za aina za maneno (POS) (Kim et al., 2017) kama mkakati wa Ujifunzaji hamishi.

VecMap imetumika kuunda uchoraji kati ya Kiingereza na Kiwelshi na viambatanisho vilivyotokana vilitumika kufunza kiainishaji cha hisia cha Kiwelshi cha kujifunza bila mifano na kwa mifano michache (Espinosa-Anke et al., 2021). Katika muktadha wa Afrika Kusini, VecMap ilitumika kutengeneza kiambatanisho cha maneno kati ya lugha cha Sepedi-Setswana na kupitisha mbinu ya tathmini ya semantiki kuchanganua ufanano kati ya jozi za istilahi za Setswana na Sepedi (Makgatho et al., 2021) na kutumika katika changamoto ya kujibu maswali yenye kelele na ya lugha nyingi kufunza modeli ya uainishaji ya LSTM (Daniel et al., 2019).

Ujifunzaji hamishi bila mifano haujatumika sana kwa uainishaji wa habari za Afrika Kusini. Marivate et al. (2020) walitumia mkusanyiko wa maandishi wenye maelezo wa vipengee vya habari za ndani kuunda kiainishaji cha habari kwa Setswana na Sepedi. Badala ya kutumia upachikaji wa maneno tuli kama ule unaotumiwa na VecMap, kutumia upachikaji wa maneno wa kimuktadha kutoka kwa modeli ya BERT iliyorekebishwa vizuri kumepata matokeo ya kuvutia kwa kazi ya kujifunza bila mifano ya Utambuzi wa Vyombo Vilivyopewa Majina (NER) kwa isiZulu (Wang et al., 2020). Hata hivyo, kazi hii ingehitaji kompyuta kubwa na haijatumika kwa uainishaji wa habari. Kwa ufahamu wetu, hii ni kazi ya kwanza inayotumia upachikaji wa maneno kati ya lugha unaozalishwa kutoka VecMap kuunda kiainishaji cha makala ya habari kutoka Kiingereza hadi isiZulu.

## 3 Mbinu

Tunajadili mbinu ya ukuzaji wa upachikaji wa maneno kati ya lugha na kiainishaji cha mkondo wa chini kwa uainishaji wa habari.

## 3.1 Ukusanyaji wa data & Preprocessing

Data iliyotumiwa katika utafiti huu inatoka kwenye hazina ya Kituo cha Afrika Kusini cha Rasilimali za Lugha za Kidijitali. Tunatumia data hii kwa madhumuni ya kufunza modeli yetu ya upachikaji kati ya lugha. Data inajumuisha data ya maandishi pekee kwa Kiingereza na isiZulu. Kwa mujibu wa nyaraka za kiufundi, mkusanyiko wa maandishi wa Kiingereza wa lugha moja una tokeni 35 686 791 huku mkusanyiko wa maandishi wa Kizulu ukiwa na tokeni 451 154. Tutazingatia tu kategoria za chanzo ambazo ni sawa kati ya lugha hizo.

Pia tunatumia mkusanyiko wa maandishi sambamba wa Kiingereza-Kizulu wa Umsuka (Mabuya et al., 2021) ambao ni mkusanyiko wa maandishi sambamba wa Kizulu wa Programu huria, wenye ubora wa juu kutoka mchanganyiko wa vikoa, ukizingatia muktadha wa Kusini mwa Afrika na kimataifa. Nusu ya seti ya data ilikuwa sampuli nasibu ya seti ya data ya News Crawl ambayo kisha ilitafsiriwa katika Kizulu. Nusu nyingine ya seti ya data ilichukuliwa sampuli kutoka magazeti ya Kizulu (machapisho ya Isolezwe, Ilanga na Ezasegagasini Metro), kuanzia 2012 hadi 2016, pamoja na riwaya na hadithi fupi, ambazo kisha zilitafsiriwa katika Kiingereza. Watafsiri wa kitaalamu walitumiwa kuunda seti ya data. Utafiti wa awali wa majaribio wa sentensi 500 ulifanywa na uhakikisho wa ubora ukifanywa na mwanaisimu wa Kizulu ili kuhakikisha kwamba mahitaji ya ubora yanaeleweka.

Jedwali la 1 linawasilisha vyanzo vilivyotumika na idadi ya tokeni. Kwa jumla, tuna tokeni 1 320 393 na 2 121 127 kwa isiZulu na Kiingereza mtawalia.

p03-01.png

Jedwali la 1: Tokeni kwa Chanzo na Lugha

Tunaondoa maneno ya kusitisha na kuondoa alama ya uakifishaji katika kumbukumbu asili. Zaidi ya hayo, tunafanya ulemishaji kwenye kumbukumbu ya Kiingereza kwa kutumia kilemishaji cha WordNet (Miller, 1995). Tulifunza kiainishaji cha habari kwa data ya habari ya British Broadcasting Corporation (BBC) iliyopatikana kutoka Kaggle. Kuna makala 1 490 za Kiingereza kwa ajili ya mafunzo na makala 736 za Kiingereza kwa madhumuni ya tathmini. Tunatumia makala ya habari ya SABC kwa tathmini ya isiZulu. Wasemaji wawili wa isiZulu walichora alama kwenye makala 219 za habari za SABC, ambazo ziliangaliwa na mtaalamu wa lugha ya isiZulu. Jedwali la 2 linawasilisha usambazaji wa seti za data.

p03-02.png

Jedwali la 2: Marudio ya kategoria

## 3.2 Uwekaji wa Maneno wa Lugha Moja

Kopora zilizochakatwa ambazo tumezieleza katika Sehemu ya 3.1, zinatumika kutengeneza uwekaji wa lugha moja kwa kutumia moduli ya Python ya Gensim. Tunatumia usanifu wa FastText kushughulikia mofolojia ya kiambishi cha isiZulu (Bojanowski et al., 2017).

Tunazalisha vekta za vipimo 64 kwa kila tokeni katika kopora kwa ukubwa wa dirisha la muktadha wa 3. Parameta hizi juu zilichaguliwa kwa sababu ya ukubwa mdogo wa msamiati wa kopora zetu, na imeonyeshwa kuwa dirisha fupi la muktadha hunasa uwakilishi wa kisintaksia wa neno na dirisha kubwa la muktadha hunasa uwakilishi zaidi wa mada (Levy and Goldberg, 2014). Ili kuonyesha uwakilishi uliojifunza wa kopora tunatumia Uniform Manifold Approximation and Projection (UMAP) (McInnes et al., 2018) kuibua maneno 10 ya karibu zaidi kutoka kopora zote mbili za lugha moja. Tokeni zilizochaguliwa ni "government" kwa Kiingereza na tafsiri ya isiZulu "uhulumeni". Katika Kielelezo 1, tunaona kwamba tokeni zilizo karibu zaidi na "uhulumeni" ni visawe vya "uhulumeni". Vilevile, pia tunaona hali hiyo hiyo kwa "government".

p04-01.png

(a) Uwakilishi wa "government"

p04-02.png

Kielelezo 1: Uwakilishi wa UMAP wa embeddings za lugha moja (b) Uwakilishi wa "uhulumeni"

## 3.3 Habari Makala Classifier

Embeddings za maneno kati ya lugha zilizozalishwa zinatumika kufunza kiainishaji kwenye corpus ya Kiingereza. Tunalinganisha algoriti nne na kutathmini utendakazi wake kwa kutumia uthibitishaji mtambuka. Mifano tunayoifunza ni Naive Bayes, Support Vector Machines, Logistic Regression, na Gradient Boosted Machines. Mfano bora zaidi kisha hutumika kuainisha makala za habari za isiZulu zisizoonekana katika nafasi ya upachikaji kati ya lugha.

## 4 Majaribio na Matokeo

Katika sehemu hii ya karatasi tunaeleza majaribio na matokeo yaliyofanywa katika jitihada za kujibu maswali ya utafiti. Tunaeleza upachikaji wa maneno kati ya lugha ulioundwa na majaribio yaliyofanywa ili kuunda kiainishaji cha makala za habari.

## 4.1 Upachikaji wa Maneno Kati ya Lugha

Tunatumia maktaba ya VecMap iliyoundwa na Artetxe et al. (2018) kuzalisha upachikaji wa maneno kati ya lugha. Katika VecMap, tunatumia mbinu ya kujifunza kati ya lugha isiyo na usimamiaji. Uwakilishi wa UMAP uliotengenezwa na algoriti wa maneno 10 yaliyo karibu zaidi na "government" na "uhulumeni" umeonyeshwa katika Kielelezo 2. Baadhi ya maneno kutoka kwa uwakilishi wa lugha moja uliotolewa katika Kielelezo 1 yalihifadhiwa na VecMap. Hata hivyo, algoriti ilitengeneza mkusanyiko unaotegemea lugha isipokuwa kwa kutambua "powerfully" kuwa karibu zaidi na maneno ya Kizulu.

Modularity ni jambo ambalo mkusanyiko wa lugha hutokea katika nafasi ya kati ya lugha (Fujinuma et al., 2019), kama inavyoonyeshwa katika Kielelezo 2. Fujinuma et al. (2019) wanadai kwamba embeddings za kati ya lugha zinazoakisi modularity zina athari hasi kwenye kazi za mkondo wa chini.

p04-03.png

Kielelezo 2: Uwakilishi wa UMAP wa embeddings za kati ya lugha za VecMap

## 4.2 Ujifunzaji hamishi wa zero-shot

Sehemu hii inawasilisha kazi ya ujifunzaji hamishi wa zero-shot ya kutambua vichwa vya habari vya Kizulu kutoka kwa kiainishaji cha habari cha Kiingereza. Awali tunafunza modeli yetu kwenye makala ya habari ya Kiingereza yaliyo na lebo kwa kutumia viwakilishi vya maneno vya kati ya lugha vilivyozalishwa awali kutoka sehemu iliyotangulia.

## 4.2.1 Jaribio Setup

Data ya pembejeo inahitaji kubadilishwa kuwa uwakilishi wake wa vekta kulingana na viwakilishi vya maneno kutoka VecMap. Kwa kuwa kila tokeni ina vipimo 64, tunawakilisha sentensi kama wastani wa uwakilishi wote wa vekta za tokeni. Tunatumia vekta ya sifuri yenye vipimo 64 kuwakilisha tokeni ambazo hazipo katika msamiati.

Tunatumia 75% ya data kwa mafunzo na 25% kwa madhumuni ya tathmini katika data ya Kiingereza ya BBC. Ili kuchagua modeli bora, tunaendesha tathmini mtambuka iliyorudiwa ya mara 5 yenye matabaka kwenye data ya mafunzo. Kulingana na utaratibu wa uthibitishaji mtambuka, modeli ya LightGBM inazishinda modeli nyingine zote.

## 4.2.2 Matokeo

Mfano wa LightGBM unapata Usahihi wa 76.4% kwenye seti ya tathmini. Kiainishaji kilipata Usahihi wa zaidi ya 70% kwa madarasa mengi, isipokuwa burudani ambayo ilipata Usahihi wa 68%.

p05-01.png

Kielelezo 3: Matrix ya mkanganyiko ya seti ya tathmini

Tunatumia mfano wa LightGBM kuainisha makala ya habari ya isiZulu. Utendaji uliotokana wa mfano unawasilishwa katika Jedwali 3.

p05-02.png

Jedwali 3: Utendaji wa mfano kwenye habari za SABC isiZulu

Mfano ulifanya kazi kwa njia isiyoridhisha katika vichwa vyote. Hata hivyo, kama inavyoonyeshwa katika Jedwali 3 mfano unaonekana kufanya vizuri zaidi kwa vichwa vinavyohusiana na siasa na kupata alama ya F1 ya 0.51. Siasa ina ukubwa wa sampuli kubwa zaidi katika data yetu ya isiZulu. Vichwa vingine vilikuwa na utendaji wa chini, ambayo inaweza kuelezewa na moduli, ambapo viambatanisho vya kati ya lugha vinavyojikusanya kwa lugha huwa na utendaji duni kwa kazi za chini ya mkondo (Fujinuma et al., 2019).

## 5 Hitimisho

Katika kazi hii tunatumia VecMap kuunda viambatanisho vya maneno vya kati ya lugha kati ya Kiingereza na isiZulu. Tumeonyesha kuwa VecMap inazalisha viambatanisho vya maneno vya moduli katika nafasi ya kati ya lugha kutokana na viambatanisho vya maneno vya lugha moja vinavyozalishwa na FastText. Kwa hivyo, tunazalisha viambatanisho vya kati ya lugha vinavyotumika kufunza kiainishaji kinachofanya vizuri kwenye habari za Kiingereza. Hata hivyo, hatukuweza kuhamisha ujifunzaji kwenye makala ya habari ya isiZulu ambayo hayajaonekana.

Katika kazi ya baadaye, tungependa kuchunguza utendaji wa VecMap kwa kutumia mkusanyiko mkubwa zaidi wa isiZulu. Zaidi ya hayo, ingekuwa na faida pia kutumia kipimo cha moduli ili kuboresha Parameta juu za FastText ili kuzalisha viambatanisho vya lugha moja vinavyofaa kwa kazi hiyo.

## Mapungufu

Katika sehemu hii ya makala tunaelezea vikwazo vya makala hii. Tulifanya maamuzi ya kubuni kulingana na mkusanyiko wa maandishi na rasilimali zilizopo ili kufanya utafiti huu uwezekane.

Kazi hii inawasilisha mkusanyiko wa maandishi wenye ukubwa mdogo kwa isiZulu. Hii inatokana na ukosefu wa rasilimali kwa lugha hii. Kazi nyingine iliyojaribu kujenga viambatanisho vya maneno vya lugha moja kwa isiZulu ni ile ya Dlamini et al. (2021). Hata hivyo, matokeo hayakuchapishwa katika rasilimali inayopatikana kwa umma ambayo ingetuwezesha kulinganisha viambatanisho vilivyozalishwa na kazi yetu.

VecMap hailingani vizuri bila matumizi ya GPU, na hivyo utafutaji wa Parameta juu haukufanywa kwa kazi hii. Hata hivyo, kutumia vekta zenye vipimo 128 na ukubwa mkubwa wa dirisha wa 10 kama ilivyopendekezwa na Ri na Tsuruoka (2020) kulisababisha kupungua kwa utendaji, hata kwa makala ya habari ya Kiingereza.

Pia tunabainisha kuwa modeli ya chini ya mkondo ilifunzwa kwa kutumia vichwa vya habari vya makala ya habari za Ulaya na hilo linaweza kuwa na athari kwenye utendaji wa kutambua matukio ambayo ni ya kipekee kwa habari za Afrika Kusini.

## Mchango wa Mwandishi

Derwin Ngomane: Ukusanyaji wa data; uchambuzi rasmi; uchunguzi; mbinu; uandishi - rasimu ya awali; uandishi - mapitio na uhariri. Vukosi Marivate: Uwekaji dhana; ukusanyaji wa data; rasilimali; usimamizi; uthibitishaji; uandishi - mapitio na uhariri. Jade Abbott: Usimamizi; ukusanyaji wa data; uthibitishaji; uandishi - mapitio na uhariri. Rooweither Mabuya: Usimamizi; ukusanyaji wa data; uandishi - mapitio na uhariri.

## Shukrani

Tungependa kutambua ufadhili kutoka Facebook (Zawadi ya Tafsiri ya Mashine), Uenyekiti wa ABSA wa Sayansi ya Data na mpango wa wasomi wa utafiti wa Google.

## Maelezo

1 https://repo.sadilar.org/handle/20.500.12185/466

2 https://repo.sadilar.org/handle/20.500.12185/338

3 https://www.isolezwe.co.za

4 https://ilanganews.co.za/

5 https://www.durban.gov.za/pages/government/documents

6 Orodha ya maneno ya kusimamisha ya isiZulu: https://github.com/stopwords-iso/stopwords-zu

7 https://www.kaggle.com/c/learn-ai-bbc

8 Data zinapatikana katika https://github.com/dsfsi/izindaba-zesizulu na https://zenodo.org/record/5674236

9 https://radimrehurek.com/gensim/index.html

10 https://github.com/artetxem/vecmap

## Marejeo

Mikel Artetxe, Gorka Labaka, and Eneko Agirre. 2018. A robust self-learning method for fully unsupervised cross-lingual mappings of word embeddings. In Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 789-798, Melbourne, Australia. Association for Computational Linguistics.

Enkhbold Bataa and Joshua Wu. 2019. An investigation of transfer learning-based sentiment analysis in japanese. arXiv preprint arXiv:1905.09642.

Piotr Bojanowski, Edouard Grave, Armand Joulin, and Tomas Mikolov. 2017. Enriching word vectors with subword information. Transactions of the association for computational linguistics, 5:135-146.

Alexis Conneau and Guillaume Lample. 2019. Cross-lingual language model pre-training. Advances in Neural Information Processing Systems, 32:7059-7069.

Jeanne E Daniel, Willie Brink, Ryan Eloff, and Charles Copley. 2019. Towards automating healthcare question answering in a noisy multilingual low-resource setting. In Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics, pages 948-953.

Jacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. 2018. BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. arXiv.

Sibonelo Dlamini, Edgar Jembere, Anban Pillay, and Brett van Niekerk. 2021. isizulu word embeddings. In 2021 Conference on Information Communications Technology and Society (ICTAS), pages 121-126. IEEE.

Meluleki Dube and Hussein Suleman. 2019. Language identification for south african bantu languages using rank order statistics. In International Conference on Asian Digital Libraries, pages 283-289. Springer.

Luis Espinosa-Anke, Geraint Palmer, Padraig Corcoran, Maxim Filimonov, Irena Spasić, and Dawn Knight. 2021. English-welsh cross-lingual embeddings. Applied Sciences, 11(14):6541.

Yoshinari Fujinuma, Jordan Boyd-Graber, and Michael J. Paul. 2019. A resource-free evaluation metric for cross-lingual word embeddings based on graph modularity. arXiv.

Luis Gutiérrez and Brian Keith. 2018. A systematic literature review on word embeddings. In International Conference on Software Process Improvement, pages 132-141. Springer.

C. Maria Keet and Langa Khumalo. 2016. Grammar rules for the isiZulu complex verb. arXiv.

Joo-Kyung Kim, Young-Bum Kim, Ruhi Sarikaya, and Eric Fosler-Lussier. 2017. Cross-lingual transfer learning for pos tagging without cross-lingual resources. In Proceedings of the 2017 conference on empirical methods in natural language processing, pages 2832-2838.

Omer Levy and Yoav Goldberg. 2014. Dependencybased word embeddings. In Proceedings of the 52nd Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers), pages 302-308, Baltimore, Maryland. Association for Computational Linguistics.

Rooweither Mabuya, Jade Abbott, and Vukosi Marivate. 2021. Umsuka english - isizulu parallel corpus. Https://doi.org/10.5281/zenodo.5035171.

Mack Makgatho, Vukosi Marivate, Tshephisho Sefara, and Valencia Wagner. 2021. Training cross-lingual embeddings for setswana and sepedi. arXiv preprint arXiv:2111.06230.

Vukosi Marivate, Tshephisho Sefara, Vongani Chabalala, Keamogetswe Makhaya, Tumisho B. Mokgonyane, Rethabile Mokoena, and Abiodun Modupe. 2020. Investigating an approach for low resource language dataset creation, curation and classification: Setswana and sepedi. arXiv.

Leland McInnes, John Healy, Nathaniel Saul, and Lukas Grossberger. 2018. Umap: Uniform manifold approximation and projection. The Journal of Open Source Software, 3(29):861.

Tomas Mikolov, Ilya Sutskever, Kai Chen, Greg S Corrado, and Jeff Dean. 2013. Distributed representations of words and phrases and their compositionality. In Advances in Neural Information Processing Systems, volume 26. Curran Associates, Inc.

George A Miller. 1995. Wordnet: a lexical database for english. Communications of the ACM, 38(11):39-41.

Dorrit Posel and Jochen Zeller. 2020. Language use and language shift in post-apartheid South Africa, pages 288-309. Cambridge University Press Cambridge.

Ryokan Ri and Yoshimasa Tsuruoka. 2020. Revisiting the context window for cross-lingual word embeddings. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 995-1005, Online. Association for Computational Linguistics.

Sebastian Ruder, Anders Søgaard, and Ivan Vulić. 2019a. Unsupervised cross-lingual representation learning. In Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics: Tutorial Abstracts, pages 31-38, Florence, Italy. Association for Computational Linguistics.

Sebastian Ruder, Ivan Vulić, and Anders Søgaard. 2019b. A survey of cross-lingual word embedding models. Journal of Artificial Intelligence Research, 65:569-631.

Anders Søgaard, Sebastian Ruder, and Ivan Vulić. 2018. On the limitations of unsupervised bilingual dictionary induction. In Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 778-788, Melbourne, Australia. Association for Computational Linguistics.

Statistics South Africa (Stats SA). 2012. The South Africa I know, The Home I understand. https://www.statssa.gov.za/census/census_2011/census_products/NW_Municipal_Report.pdf.pdf.

Duyu Tang, Furu Wei, Nan Yang, Ming Zhou, Ting Liu, and Bing Qin. 2014. Learning sentiment-specific word embedding for Twitter sentiment classification. In Proceedings of the 52nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 1555-1565, Baltimore, Maryland. Association for Computational Linguistics.

Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz Kaiser, and Illia Polosukhin. 2017. Attention is all you need. Advances in neural information processing systems, 30.

María Paula Villegas, María José Garciarena Ucelay, Juan Pablo Fernández, Miguel A Álvarez Carmona, Marcelo Luis Errecalde, and Leticia Cagnina. 2016. Vector-based word representations for sentiment analysis: a comparative study. In XXII Congreso Argentino de Ciencias de la Computación (CACIC 2016).

Zihan Wang, Karthikeyan K, Stephen Mayhew, and Dan Roth. 2020. Extending multilingual BERT to low-resource languages. In Findings of the Association for Computational Linguistics: EMNLP 2020, pages 2649-2656, Online. Association for Computational Linguistics.

Shijie Wu and Mark Dredze. 2020. Are all languages created equal in multilingual BERT? arXiv preprint arXiv:2005.09093.
