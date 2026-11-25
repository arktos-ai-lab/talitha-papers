> Machine translation (sw) of "Textual Augmentation Techniques Applied to Low Resource Machine Translation: Case of Swahili" by Catherine Gitau, Vukosi Marivate, https://upjournals.up.ac.za/index.php/dhasa/article/view/4446, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## Mbinu za Uongezaji wa Maandishi Zinazotumika kwa Tafsiri ya Mashine ya Rasilimali Chache: Kisa cha Kiswahili

Catherine Gitau, Vukosi Marivate

**Taasisi**  
Gitau, Catherine  
African Institute for Mathematical Sciences Ghana  
  
Marivate, Vukosi  
Department of Computer Science, University of Pretoria, South Africa  


## Muhtasari

Katika kazi hii tunachunguza athari za kutumia kazi za ujalizaji data wa kimaandishi kwa tafsiri ya mashine ya rasilimali chache. Kumekuwa na hamu ya hivi karibuni katika kuchunguza mbinu za kufunza mifumo kwa lugha zenye rasilimali chache na mbinu moja maarufu ni matumizi ya mbinu za ujalizaji data. Ujalizaji data unalenga kuongeza wingi wa data inayopatikana kufunza mfumo. Katika tafsiri ya mashine, jozi nyingi za lugha duniani zinachukuliwa kuwa za rasilimali chache kwa sababu zina data sambamba kidogo inayopatikana na ubora wa mifumo ya tafsiri ya mashine ya neva (NMT) unategemea sana upatikanaji wa kumbukumbu sambamba za kutosha. Tunasoma na kutumia mbinu tatu rahisi za ujalizaji data zinazotumika sana katika kazi za uainishaji wa maandishi; ubadilishaji wa visawe, uingizaji nasibu na ujalizaji data wa kimuktadha na kulinganisha utendaji wake na tafsiri ya mashine ya neva ya msingi kwa seti za data za Kiingereza-Kiswahili (EnSw). Pia tunawasilisha matokeo katika alama za BLEU, ChrF na Meteor. Kwa ujumla, mbinu ya ujalizaji data wa kimuktadha inaonyesha maboresho fulani katika mielekeo yote ya EN → SW na SW → EN. Tunaona kwamba kuna uwezekano wa kutumia mbinu hizi katika tafsiri ya mashine ya neva wakati majaribio mapana zaidi yanapofanywa kwa seti mbalimbali za data.

## Maneno Muhimu

rasilimali chache, Ujalizaji data, tafsiri ya mashine

## 1 Utangulizi

Kumekuwa na maendeleo kadhaa katika tafsiri ya mashine na mifumo ya kisasa ya MT ambayo inaweza kufikia utendaji wa tafsiri karibu na kiwango cha binadamu kwenye jozi za lugha ambazo zina rasilimali kubwa sana za mafunzo sambamba. Kwa bahati mbaya, mifumo ya tafsiri ya mashine ya neva hufanya vibaya sana kwenye jozi za lugha yenye rasilimali chache ambapo data sambamba ya mafunzo ni adimu. Kuboresha utendaji wa tafsiri kwenye jozi za lugha yenye rasilimali chache kunaweza kuwa na athari kubwa ikizingatiwa kwamba lugha hizi zinazungumzwa na sehemu kubwa ya idadi ya watu duniani.

Kulingana na Lisanza (2021), ni takriban watu milioni 5-10 pekee wanaozungumza Kiswahili kama lugha yao ya asili, lakini inazungumzwa kama lugha ya pili na takriban watu milioni 80 katika lingua franca ya Kusini-mashariki mwa Afrika, na kuifanya kuwa lugha inayozungumzwa zaidi katika Afrika Kusini mwa Jangwa la Sahara.

Licha ya ukweli kwamba lugha hiyo inazungumzwa na mamilioni katika bara la Afrika, inachangia chini ya 0.1% ya mtandao ambapo 58.4% ya maudhui ya mtandao ni kwa Kiingereza kulingana na W3Techs (2020), na kuifanya kuwa lugha yenye rasilimali chache. Ingawa Kiswahili kinazungumzwa na watu wengi hivyo, kuna kazi ndogo pana ambayo imefanywa kuboresha mifano ya tafsiri iliyojengwa kwa lugha hiyo. Data inayohitajika kuzalisha mifumo ya tafsiri ya mashine ya neva ya ubora wa juu haipatikani na hivyo kusababisha ubora duni wa tafsiri.

Katika maono ya kompyuta, mbinu za Ujalizaji data hutumiwa sana ili kuongeza Uthabiti na kuboresha ujifunzaji wa vitu kwa mifano michache sana ya mafunzo. Katika uchakataji wa picha, data iliyofunzwa hujazwa kwa, kwa mfano, kugeuza picha kwa mlalo, kupunguza kwa nasibu, kuinamisha n.k. Ujalizaji data sasa umekuwa mbinu sanifu ya kufunza mitandao ya neva ya kina kwa ajili ya uchakataji wa picha na si jambo la kawaida sana katika kufunza mitandao kwa kazi za uchakataji wa lugha asilia (NLP) kama vile tafsiri ya mashine. Kutumia mbinu za Ujalizaji data katika maandishi si rahisi kama katika maono ya kompyuta kwa sababu katika maono ya kompyuta, lebo na maudhui ya picha asili huhifadhiwa ilhali kwa kazi za uchakataji wa lugha asilia (NLP), kuna haja ya kuhifadhi muktadha wa sentensi baada ya ujalizaji. Hata hivyo kuna mbinu kadhaa za Ujalizaji data ambazo zimethibitishwa kuboresha utendaji kwenye kazi mbalimbali za NLP kama vile uainishaji wa maandishi lakini si jambo la kawaida kutumia mbinu hizi za Ujalizaji data kwa kazi kama vile tafsiri ya mashine.

Tafsiri ya mashine ya neva (NMT) kama ilivyowasilishwa katika kazi ya Sutskever et al. (2014);Cho et al. (2014) ni kazi ya mfuatano hadi mfuatano inayotumia mtandao wa neva wa kawaida wenye mwelekeo mbili unaojulikana kama kisimbuzi kuchakata sentensi chanzi kuwa vekta zinazoitwa kisimbuaji ambacho kisha hutabiri maneno katika lugha lengwa. Ili kuweza kufunza mfano unaoweza kutoa tafsiri nzuri, mitandao hii inahitaji data sambamba nyingi au jozi za sentensi zenye maneno yanayotokea katika miktadha mbalimbali ambayo haipatikani katika jozi za lugha yenye rasilimali chache na hivyo kufanya utendaji wa mifano kuwa duni kabisa. Moja ya suluhisho la tatizo hili ni kufafanua kwa mikono data ya lugha moja inayopatikana jambo ambalo linachukua muda na ni ghali au kutekeleza mbinu za Ujalizaji data zisizosimamiwa.

Katika kazi hii tunachunguza baadhi ya mbinu za Ujalizaji data ambazo zinatumika sana kuboresha kazi za uainishaji wa maandishi na kuchunguza athari zake kwenye utendaji wa miundo ya tafsiri ya mashine ya neva ya rasilimali chache kwa Kiingereza-Kiswahili (EnSw). Mbinu maarufu zaidi za ujalizaji maandishi zinazotumika kwa kazi za uainishaji wa maandishi zinajumuisha operesheni nne zenye nguvu; ubadilishaji wa visawe, uingizaji nasibu, ubadilishanaji nasibu na ufutaji nasibu. Mbinu hizi zimeonyeshwa kuboresha utendaji katika kazi za uainishaji wa maandishi kama inavyoonyeshwa katika Wei & Zou (2019). Na ili kupima vyema athari za mbinu zetu za Ujalizaji data, tunalinganisha matokeo na muundo wa msingi uliofunzwa kwenye seti za data za En-Sw.

Kwa muhtasari, michango yetu inajumuisha:

Tunachunguza na kutathmini kwenye kazi ya NMT, mbinu tatu za Ujalizaji data ambazo kwa sasa zinatumika tu katika kazi za uainishaji wa maandishi; ujalizaji unaotegemea Word2Vec ambao hufanya ubadilishaji wa visawe katika sentensi, ujalizaji unaotegemea TF-IDF ili kuingiza maneno katika nafasi nasibu katika sentensi pamoja na matumizi ya ujalizaji unaotegemea Masked Language Model ambao hufanya Ujalizaji data wa kimuktadha kwenye maandishi.

2. Tunaonyesha jinsi mbinu hizi za Ujalizaji data zinavyoweza kutumika katika kazi za NMT.

3. Pia tulipanua maktaba ya textaugment Marivate & Sefara (2020) kutumia mifano iliyofunzwa mapema ya Fasttext.

4. Tunatoa matokeo ya msingi ya NMT katika alama za BLEU, Meteor na ChrF.

Karatasi hii imepangwa kama ifuatavyo; Tunaangalia kazi iliyofanywa na waandishi wa awali juu ya Ujalizaji data kwa lugha yenye rasilimali chache kwanza. Pia tunaangalia mbinu za Ujalizaji data na mikabala tuliyotumia katika utafiti wetu ambao umefafanuliwa katika Sehemu ya 3. Sehemu ya 4 inafafanua mipangilio ya modeli iliyozingatiwa kwa kila mkabala wa Ujalizaji data, Sehemu ya 5 inajadili matokeo ya majaribio na kisha tunahitimisha kwa kutaja vikwazo na kazi ya baadaye na pia kuhitimisha katika Sehemu za 6 na 7.

## 2 Mapitio ya Maandiko

Kazi ya kutafsiri kwa kutumia mashine ili kuboresha tafsiri katika lugha za hali ya chini ni tatizo lililochunguzwa sana. Katika uchakataji wa lugha asilia (NLP), Ujalizaji data ni mbinu maarufu inayotumika kuongeza ukubwa wa data ya mafunzo.

Mkabala mmoja wenye matumaini ni matumizi ya Ujifunzaji hamishi Zoph et al. (2016). Mbinu hii ilithibitisha kwamba kuwa na maarifa ya awali katika tafsiri ya jozi ya lugha tofauti yenye rasilimali nyingi kunaweza kuboresha kutafsiri lugha yenye rasilimali chache. Mfano wa NMT kwanza hufunzwa kwenye korasi kubwa sambamba ili kuunda mfano mzazi na kuendelea kuufunza mfano huu kwa kuulisha korasi ndogo zaidi sambamba ya lugha yenye rasilimali chache na kusababisha mfano mtoto ambao hurithi maarifa kutoka kwa mfano mzazi kwa kutumia tena vigezo vyake. Jozi za lugha za mzazi na mtoto zilishiriki lugha lengwa sawa (Kiingereza). Matumizi ya data kutoka lugha nyingine yanaweza kuonekana kama kazi ya Ujalizaji data yenyewe na maboresho makubwa yameonekana hasa wakati lugha yenye rasilimali nyingi inafanana kisintaksia na lugha yenye rasilimali chache Lin et al. (2019).

Kazi ya Sennrich et al. (2016) inachunguza mbinu ya Ujalizaji data kwa tafsiri ya mashine inayojulikana kama tafsiri ya kurudi nyuma ambapo tafsiri ya mashine hutumiwa kutafsiri kiotomatiki data ya lugha moja ya lugha lengwa kuwa data ya lugha chanzo ili kuunda data sambamba sintetiki kwa mafunzo na kwa sasa ndiyo mbinu ya Ujalizaji data inayotumiwa zaidi katika kazi za tafsiri ya mashine. Ubora wa mfumo wa kurudi nyuma ingawa unafaa, umeonyeshwa kuathiri vibaya utendaji wa Mfano wa mwisho wa NMT wakati data ya lugha moja ya upande wa lugha lengwa ni chache. Tafsiri ya kurudi nyuma kama mbinu ya kufanya Ujalizaji data katika tafsiri ya mashine inaweza kuharibu utendaji wa tafsiri ya Lugha yenye rasilimali chache - Kiingereza (LRL - ENG) kutokana na ukubwa mdogo wa data ya mafunzo kama inavyoonyeshwa katika Xia et al. (2019).

Xia et al. (2019) wanaongeza data sambamba kupitia mbinu mbili: kutafsiri kurudi nyuma kutoka ENG hadi lugha yenye rasilimali chache (LRL) au lugha yenye rasilimali nyingi (HRL) na kubadilisha seti ya data ya HRL-ENG kuwa seti ya data bandia ya LRL-ENG. Wanatumia kamusi ya lugha mbili iliyochochewa kuingiza maneno ya LRL ndani ya HRL kisha kurekebisha zaidi sentensi hizi kwa kutumia mfumo wa tafsiri ya mashine usiosimamiwa uliorekebishwa. Mbinu yao ilithibitisha kuboresha ubora wa tafsiri ikilinganishwa na misingi ya tafsiri-nyuma iliyosimamiwa hata hivyo, mbinu hiyo inahitaji ufikiaji wa HRL inayohusiana na LRL pamoja na LRL ya lugha moja.

Kuna mbinu nyingine za Ujalizaji data ambazo zimetumika katika kazi nyingine za NLP kama vile uainishaji wa maandishi ili kuboresha utendaji. Wei & Zou (2019) wanaonyesha kwamba ubadilishaji rahisi wa neno kwa kutumia misingi ya maarifa kama WordNet Miller (1995) unaweza kuboresha utendaji wa kazi za uainishaji. Marivate & Sefara (2020) pia wanaona kwamba ujalizaji unaotegemea Word2Vec pia ni suluhisho linalowezekana wakati mtu hana ufikiaji wa msingi wa maarifa wa visawe kama vile WordNet Miller (1995). Kumar et al. (2020) wanaonyesha kwamba mifano iliyofunzwa awali ya seq2seq inaweza kutumika kwa ufanisi kwa Ujalizaji data na hizi hutoa utendaji bora zaidi. Mbinu hizi za Ujalizaji data kwa sasa zinatumika tu kuboresha kazi za uainishaji na bado hazijatumika katika kazi yoyote ya tafsiri ya mashine ya neva ili kuboresha utendaji. Katika kazi hii tutakuwa tunaangalia jinsi baadhi ya mbinu hizi zinaweza kutumika pia kuboresha mifano ya tafsiri ya mashine ya neva ambapo data ni ya rasilimali chache. Hasa, tutachunguza mbinu tatu za ujalizaji data ambazo ni pamoja na: 1) Ujalizaji unaotegemea Word2Vec, 2) Tf-idf msingi augmentation, 3) Ujalizaji unaotegemea Masked Language Model na kutumia data ya ziada kufunza modeli ya NMT.

## 3 Mbinu

Lengo letu ni kulinganisha mbinu tofauti za ujalizaji data zinazotumika katika kazi za uainishaji wa maandishi kwa lengo la kutambua kama mbinu hizo zinaweza kutumika kuboresha alama ya msingi ya NMT. Matokeo yanalinganishwa katika seti mbili tofauti za data na hutumia seti za majaribio za kikoa husika kuonyesha uwezo wa ujumlishaji wa modeli. Majaribio haya ni muhimu kusaidia watafiti wengine kupata maarifa wanapofanya kazi ya kujenga modeli bora za tafsiri ya mashine ya neva kwa lugha zenye rasilimali chache. Kwanza, tunaelezea data iliyotumika kufunza modeli, kisha mbinu za ujalizaji data ambazo tutakuwa tunatumia na hatimaye tunatoa maelezo ya majaribio tuliyofanya ili kujaribu mbinu hizi pamoja na matokeo yaliyopatikana.

## 3.1 Data ya Mafunzo

Kiasi kidogo cha data sambamba kinapatikana kwa Kiswahili-Kiingereza. Data ilipokelewa kutoka kwa kazi ya Lakew et al. (2020) ambapo walitoa data sanifu za majaribio na seti za majaribio kwa lugha tano tofauti (Kiswahili, Kiamhara, Kitigirinya, Kioromo na Kisomali). Walikusanya kopa zote za sambamba zilizopo kwa lugha hizo tano kutoka kwa kopa ya Opus Tiedemann (2012) ambayo inajumuisha mkusanyiko wa maandishi yaliyotafsiriwa kutoka kwenye wavuti. Kwa kazi hii, tulitumia data inayojumuisha JW300 Agić & Vulić (2019) na Tanzil Tiedemann (2012) ambayo hutoa mkusanyiko wa tafsiri za Quran ili kulinganisha na matokeo ya msingi kutoka kwa kazi ya Lakew et al. (2020).

Jedwali la 1 linaonyesha kiasi cha data sambamba kilichokusanywa. Data iligawanywa katika seti za mafunzo, maendeleo na majaribio kama ilivyo katika Lakew et al. (2020). Kisha tukagawanya data katika vitengo vya subword kwa kutumia Byte Pair Encoding Sennrich et al. (2016) ambapo tulijifunza 20K byte pair encoding tokens.

## 3.2 Baseline

Katika mbinu hii, modeli ya NMT ya Transformer inafunzwa kwa kutumia data za Jw300 na Tanzil zikiwa zimeunganishwa kisha inajaribiwa kwenye seti tofauti za data kutoka vikoa viwili tofauti (Jw300 na Tanzil). Modeli inafunzwa bila marekebisho yoyote kote kwa hatua za kawaida za uchakataji wa awali kama vile uwekaji alama, ubadilishaji hadi herufi ndogo na usafishaji. Modeli hii katika mbinu hii inatumika kama msingi wa kulinganisha.

## 3.3 Mbinu za Ujalizaji data

Tulijaliza data kwa kutumia aina tatu za mbinu za ujalizaji: ujalizaji unaotegemea Word2Vec (ubadilishaji wa visawe), ujalizaji unaotegemea Tf-idf (uingizaji nasibu) na ujalizaji unaotegemea Masked Language Model (MLM) (ujalizaji unaotegemea muktadha). Tuliunganisha mbinu mbili za kwanza za ujalizaji na tukatumia ujalizaji unaotegemea Masked Language Model peke yake. Ujalizaji wa Word2Vec na Tf-idf ulifanywa kwenye lugha chanzo kiasi kwamba wakati wa kufunza modeli ya En-Sw, tunajaliza lugha ya Kiingereza na wakati wa kufunza modeli ya Sw-En tunajaliza lugha ya Kiswahili. Katika uundaji wa lugha kwa kuficha, ujalizaji ulifanywa kwenye lugha ya Kiingereza pekee.

## 3.3.1 Uongezaji unaotegemea word2vec

Word2vec ni mbinu ya uongezaji inayotumiwa zaidi katika kazi za uainishaji ambayo hutumia modeli ya upachikaji wa neno Mikolov et al. (2013) ambayo imefunzwa kwenye seti za data zinazopatikana hadharani ili kupata maneno yanayofanana zaidi kwa neno fulani la pembejeo. Tunatumia Vekta za Neno zilizofunzwa awali kwenye Common Crawl na Wikipedia kwenye data zote za Kiingereza na Kiswahili kwa kutumia fastText Joulin et al. (2017) maktaba ya uwakilishaji na uainishaji wa maandishi. Tunapakia modeli ya fastText iliyofunzwa awali kwa kila lugha kwenye algoriti yetu ili kuongeza maandishi kwa kuchagua kwa nasibu neno katika maandishi ili kubaini maneno yao yanayofanana kwa kutumia ufanano wa kosini kama uzani wa jamaa wa kuchagua neno linalofanana linalochukua nafasi ya neno la pembejeo kama ilivyofanywa katika Marivate & Sefara (2020). Algoriti yetu ni kama inavyoonyeshwa katika Algorithm 1. Inapokea mfuatano ambao ni data ya pembejeo na huongeza maandishi kuwa maandishi matano tofauti yaliyoongezwa kisha tunatumia ufanano wa kosini kuchagua sentensi bora ambayo iko karibu kwa angalau 0.85 na maandishi asilia. Sababu ya hili ni kwamba tungependa kuhifadhi maana ya kimuktadha ya sentensi hata baada ya uongezaji. Tunalinganisha sentensi tano tofauti zilizoongezwa na kuchagua sentensi ambayo ina alama ya ufanano wa kosini iliyo juu zaidi. Ili kuzuia uongezaji nakala rudufu, tunaondoa sentensi ambazo zinafanana kwa asilimia 100 na sentensi asilia. Uongezaji huu ulifanywa kwenye lugha chanzo ambapo sentensi za lugha lengwa zinazolingana zilibaki kuwa thabiti na bila kubadilika. Mifano ya sentensi zilizoongezwa inaweza kuonekana katika Jedwali la 2.

## 3.3.2 Uongezaji unaotegemea Tf-idf

Tuliunda seti nyingine ya data iliyoongezwa inayotumia Tf-idf Ramos (2003). Dhana ya Tf-idf ni kwamba maneno yenye marudio ya juu huenda yasiweze kutoa faida kubwa ya taarifa katika maandishi. Inamaanisha kwamba maneno adimu huchangia uzani zaidi kwa modeli. Katika hali hii, maneno ambayo yana alama za chini za Tf-idf yanasemekana kutokuwa na taarifa muhimu na hivyo yanaweza kubadilishwa au kuingizwa katika maandishi bila kuathiri lebo za ukweli msingi za sentensi. Hapa, maneno yanayochaguliwa kuingizwa katika nafasi nasibu katika sentensi huchaguliwa kwa kukokotoa alama za Tf-idf za maneno katika sentensi zote na kisha kuchukua zile za chini kabisa. Kwa hivyo, tunaingiza neno jipya katika nafasi nasibu kulingana na hesabu ya Tf-idf. Hili pia lilifanywa kwenye lugha chanzo pekee na sentensi za lugha lengwa zinazolingana hubaki bila kubadilika. Tf-idf ilitumika baada ya kutekeleza mbinu ya uongezaji inayotegemea Word2Vec. Hili linaonyeshwa katika Algorithm 1.

p05-01.png

Jedwali 1: Takwimu za data zinazoonyesha idadi ya mifano/sentensi zinazopatikana katika vikoa vinne

p05-02.png

Jedwali 2: Jedwali linaloonyesha mfano wa sentensi zilizoongezwa

## 3.3.3 Uongezaji wa Masked Language Model (MLM)

Kwa kuwa mbinu zilizo hapo juu hazizingatii muktadha wa sentensi, tuliamua kutumia Masked Language Modeling (MLM) ambapo tulitumia RoBERTa Liu et al. (2019) ambayo ni modeli ya Transformer iliyofunzwa awali kwenye mkusanyiko mkubwa wa data ya Kiingereza kwa njia ya kujifunza bila usimamizi. Inatumika kutabiri maneno yaliyofichwa kulingana na muktadha wa sentensi. Unaweza kupata algoriti iliyotumika katika Algorithm 2. Kwa kuchukua sentensi, modeli huficha kwa nasibu 15% ya maneno katika ingizo kisha hupitisha sentensi nzima iliyofichwa kupitia modeli na kutabiri maneno yaliyofichwa jambo ambalo husaidia modeli kujifunza uwakilishi wa pande mbili wa sentensi. Katika kazi hii, sentensi hupitishwa kupitia algoriti yetu ambayo kisha hutabiri neno lililofichwa na kuunda sentensi mpya iliyoongezwa. Kumbuka kuwa mbinu hii ya uongezaji ilifanywa tu kwa lugha ya Kiingereza kutokana na ukosefu wa rasilimali za kutosha za kufunza MLM nzuri kwa lugha ya Kiswahili.

Algorithm 1 Uongezaji wa data unaotegemea Word2Vec na Tf-idf

p05-03.png

Algorithm 2 Algoriti ya uongezaji wa Masked Language Model

p06-01.png

Kwa majaribio yetu tuliunganisha sentensi zilizoongezwa kwa ujalizaji unaotegemea Word2Vec na Ujalizaji data unaotegemea Tf-idf na kuzalisha karibu mara tatu ya sentensi asili. Mbinu za ujalizaji zinazotegemea MLM zilizalisha karibu mara mbili ya sentensi sambamba asili. Jumla ya data ya mafunzo iliyotumika ni kama inavyoonyeshwa katika Jedwali 2.

p06-02.png

Jedwali 3: Takwimu za data zinazoonyesha jumla ya data iliyotumika kwa mafunzo baada ya ujalizaji

## 4 Majaribio

Sehemu hii inaeleza kwa kina mipangilio ya kujifunza na ya modeli iliyozingatiwa kwa kila mbinu ya Ujalizaji data.

## 4.1 Mipangilio ya Modeli

Modeli zote zilifunzwa kwa kutumia usanifu wa Transformer wa Vaswani et al. (2017) kwa kutumia zana ya Programu huria ya tafsiri ya mashine joeyNMT na Kreutzer et al. (2019). Vigezo vya modeli viliwekwa kuwa vitengo 512 vya siri na mwelekeo wa upachikaji, tabaka 4 za kisimbuzi na kisimbuaji cha kujitazama chenye vichwa 8. Vipimo vya embedding vya byte pair encoding vilikuwa 256. Kiboreshaji cha Adam kinatumika katika majaribio yote kwa kiwango cha kujifunza kisichobadilika cha 0.0003 na dropout iliwekwa kuwa 0.3. Mifano yote ilizoezwa katika mihula 40.

## 4.2 Vipimo vya Tathmini

Miundo ilitathminiwa kwa kutumia seti za majaribio za ndani ya kikoa. Utendaji wa mbinu tofauti ulitathminiwa kwa kutumia vipimo tofauti vya tathmini ya tafsiri: BLEU Papineni et al. (2002), METEOR Banerjee & Lavie (2005) na chrF Popović (2015). BLEU(Bilingual Evaluation Understudy) ni kipimo cha tathmini ya kiotomatiki ambacho kinasemekana kuwa na uwiano wa juu na maamuzi ya binadamu na kinatumika sana kama kipimo cha tathmini kinachopendelewa. METEOR(Metric for Evaluation of Translation with Explicit Ordering) inategemea dhana ya jumla ya ulinganishaji wa unigram kati ya tafsiri za mashine na tafsiri rejea zinazozalishwa na binadamu tofauti na BLEU na inakokotolewa kwa kupata wastani wa harmoniki wa Ushabaha na Kumbuko tambuzi. ChrF ni kipimo cha n-gramu ya herufi, ambacho kimeonyesha uwiano mzuri sana na maamuzi ya binadamu hasa wakati wa kutafsiri kwa lugha zenye mofolojia tajiri. Kadiri alama za vipimo hivi zinavyokuwa juu, ndivyo inavyomaanisha kuwa mfumo unazalisha tafsiri nzuri kweli.

## 5 Matokeo na Mjadala

Sehemu hii inaelezea matokeo ya mbinu tatu; msingi (S-NMT), ujalizaji wa word2vec + tfidf (Word2Vec) na ujalizaji wa kielelezo cha lugha kilichofichwa (MLM). Jedwali la 4 linaonyesha utendaji wa mbinu tofauti za ujalizaji data zinazotumika katika tafsiri ya mashine. Alama za BLEU kwa EN ↔ SW, matokeo bora yanayofanya vizuri zaidi kwa kila kikoa yameangaziwa kwa kila mwelekeo huku alama zilizokozeshwa zikionyesha alama bora zaidi kwa jumla. Tunaona kwamba katika vikoa vyote vya majaribio, mifano iliyofunzwa kwa data iliyojazwa na MLM ilifanya vizuri zaidi kuliko msingi na Word2Vec katika hali nyingi. Matokeo haya yanahusiana sana na ukweli kwamba ujalizaji unaotegemea MLM unategemea upachikaji wa kimuktadha. Kushuka kwa utendaji katika baadhi ya hali kunaweza kusababishwa na ukweli kwamba muundo wa sentensi hauhifadhiwi kikamilifu wakati wa kufanya ubadilishaji wa neno au kisawe hivyo kufanya tafsiri isihifadhi maana yake ya asili. Tunaweza pia kuona kwamba kuna uharibifu wa utendaji wakati wa kutafsiri katika lugha yenye rasilimali chache kwa data ya majaribio ya JW300 lakini kwa mifano iliyojaribiwa kwenye Tanzil, uharibifu huo hutokea zaidi wakati wa kutafsiri katika Kiingereza. Data ya mafunzo ya Tanzil iliyotumika kufunza modeli ilikuwa ndogo kabisa ikilinganishwa na data ya JW300, jambo linaloelezea alama za chini za Tanzil ikilinganishwa na data ya JW300. Ujalizaji unaotegemea Word2Vec + Tf-idf hauleti maboresho makubwa ya modeli ya msingi, hata hivyo, matokeo yanaonyesha kuna uwezekano wa kutumia mbinu hizi katika NMT hasa Masked Language Model kwa ujalizaji ambao ulionyesha kufanya vizuri zaidi kuliko modeli ya Word2Vec+Tf-idf

## 6 Vikwazo na Kazi ya Baadaye

Mojawapo ya changamoto kubwa katika tafsiri ya mashine leo ni kujifunza kutafsiri jozi za lugha yenye rasilimali chache pamoja na changamoto za kiufundi kama vile kujifunza kwa data ndogo au kushughulikia lugha zilizo mbali kati yao.

Karatasi hii inaonyesha kwamba tunaweza kutumia mbinu rahisi za Ujalizaji data katika tafsiri ya mashine. Katika majaribio yetu, tunajaliza tu lugha chanzo kwa mbinu ya ujalizaji inayotegemea Word2Vec na tunajaliza tu sentensi za Kiingereza kwa ujalizaji unaotegemea MLM. Katika kazi ya baadaye, tunapanga kuchunguza ujalizaji wa upande lengwa wa data sambamba katika ujalizaji unaotegemea Word2Vec na kulinganisha utendaji na ujalizaji wa lugha chanzo pamoja na kupima uwezo wa modeli wa kujumlisha kwa kutumia seti za data zilizo nje ya kikoa. Jaribio lingine linaloweza kuchunguzwa ni matumizi ya mbinu ya Ujalizaji data ya Word2Vec pekee bila matumizi ya mbinu ya ubadilishaji wa neno ya Tf-idf kwani inaongeza kelele zaidi kwenye sentensi. Tunapanga kuendeleza utafiti huu na tutafanya algoriti zilizotumika katika karatasi hii zipatikane katika https://github.com/dsfsi/translate-augmentationhttps://github.com/dsfsi/translate-augmentation

## 6.0.1 Computational Mawazo

Muda wa mafunzo ulichukua takriban saa 1 kuendesha epoka moja kwa kutumia NVIDIA Tesla V100 GPU kwenye Google Cloud kwenye maandishi yaliyojazwa data. Kuendesha kwenye Colaboratory kulichukua takriban siku 5 kuendesha epoka 40 na kwa muda mdogo tulionao, kuna kiasi tu cha majaribio tunachoweza kufanya. Kuendesha majaribio haya kulikuwa kwa gharama kubwa na kuna haja ya kuzingatia bajeti pamoja na muda ili kuendesha majaribio haya ya MT.

## 7 Hitimisho

Katika kazi hii tulipendekeza matumizi ya kazi tofauti za Ujalizaji data wa kimaandishi katika tafsiri ya mashine ya neva kwa kutumia lugha ya Kiswahili yenye rasilimali chache. Pia tulionyesha jinsi mtu anavyoweza kufanya Ujalizaji data kwenye lugha yenye rasilimali chache kwa kutumia vekta za maneno zilizofunzwa awali na tukawasilisha matokeo ya msingi katika ChrF na METEOR ambayo hayajawahi kuwasilishwa hapo awali. Uchunguzi wetu unaonyesha kwamba ingawa modeli zilizofunzwa kwenye maandishi yaliyojazwa data hazikuboresha modeli ya msingi, bado kuna uwezekano wa kutumia mbinu hizi katika kazi za NMT kwa kukokotoa kwa kutosha na majaribio zaidi. Tunatumai kuwa kazi hii itaweka msingi kwa utafiti zaidi juu ya kutumia mbinu rahisi za uongezaji ambazo hazihitaji nguvu nyingi za kikokotoo katika uundaji wa NMT wenye rasilimali chache.

p08-01.png

Jedwali la 4: Alama za BLEU, ChrF, Meteor kwa mielekeo ya Kiswahili ↔ Kiingereza, matokeo bora yanayofanya vizuri zaidi kwa kikoa mahususi yameandikwa kwa herufi nzito.

## 8 Marejeo

## Marejeo

Agić, Ž. & Vulić, I. (2019), JW300: A wide-coverage parallel corpus for low-resource languages, in 'Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics', Association for Computational Linguistics. URL: https://www.aclweb.org/anthology/P19-1310

Banerjee, S. & Lavie, A. (2005), METEOR: An automatic metric for MT evaluation with improved correlation with human judgments, in 'Proceedings of the ACL Workshop on Intrinsic and Extrinsic Evaluation Measures for Machine Translation and/or Summarization', Association for Computational Linguistics, Ann Arbor, Michigan, pp. 65-72. URL: https://www.aclweb.org/anthology/W05-0909

Cho, K., van Merriënboer, B., Bahdanau, D. & Bengio, Y. (2014), On the properties of neural machine translation: Encoder-decoder approaches, in 'Proceedings of SSST-8, Eighth Workshop on Syntax, Semantics and Structure in Statistical Translation', Association for Computational Linguistics, Doha, Qatar, pp. 103-111. URL: https://aclanthology.org/W14-4012

Joulin, A., Grave, E., Bojanowski, P. & Mikolov, T. (2017), Bag of tricks for efficient text classification, in 'Proceedings of the 15th Conference of the European Chapter of the Association for Computational Linguistics: Volume 2, Short Papers', Association for Computational Linguistics, Valencia, Spain, pp. 427-431. URL: https://aclanthology.org/E17-2068

Kreutzer, J., Bastings, J. & Riezler, S. (2019), Joey NMT: A minimalist NMT toolkit for novices, in 'Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP): System Demonstrations'. URL: https://www.aclweb.org/anthology/D19-3019

Kumar, V., Choudhary, A. & Cho, E. (2020), Data augmentation using pre-trained transformer models, in 'Proceedings of the 2nd Workshop on Life-long Learning for Spoken Language Systems', Association for Computational Linguistics.

Lakew, S. M., Negri, M. & Turchi, M. (2020), 'Low Resource Neural Machine Translation: A Benchmark for Five African Languages', arXiv e-prints p. arXiv:2003.14402.

Lin, Y.-H., Chen, C.-Y., Lee, J., Li, Z., Zhang, Y., Xia, M., Rijhwani, S., He, J., Zhang, Z., Ma, X., Anastasopoulos, A., Littell, P. & Neubig, G. (2019), Choosing transfer languages for crosslingual learning, in 'Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics', Association for Computational Linguistics.

Lisanza, V. (2021), Swahili gaining popularity globally. Accessed: 2020-30.

Liu, Y., Ott, M., Goyal, N., Du, J., Joshi, M., Chen, D., Levy, O., Lewis, M., Zettlemoyer, L. & Stoyanov, V. (2019), 'RoBERTa: A Robustly Optimized BERT Pretraining Approach', arXiv e-prints p. arXiv:1907.11692.

Marivate, V. & Sefara, T. (2020), 'Improving short text classification through global augmentation methods', Machine Learning and Knowledge Extraction. URL: http://dx.doi.org/10.1007/978-3-030-57321-821

Mikolov, T., Sutskever, I., Chen, K., Corrado, G. S. & Dean, J. (2013), Distributed representations of words and phrases and their compositionality, in C. J. C. Burges, L. Bottou, M. Welling, Z. Ghahramani & K. Q. Weinberger, eds, 'Advances in Neural Information Processing Systems', Vol. 26, Curran Associates, Inc.

Miller, G. A. (1995), 'Wordnet: A lexical database for english', COMMUNICATIONS OF THE ACM 38, 39-41.

Papineni, K., Roukos, S., Ward, T. & Zhu, W.-J. (2002), Bleu: a method for automatic evaluation of machine translation, in 'Proceedings of the 40th Annual Meeting of the Association for Computational Linguistics', Philadelphia, Pennsylvania, USA. URL: https://www.aclweb.org/anthology/P02-1040

Popović, M. (2015), chrF: character n-gram F-score for automatic MT evaluation, in 'Proceedings of the Tenth Workshop on Statistical Machine Translation', Lisbon, Portugal. URL: https://www.aclweb.org/anthology/W15-3049

Ramos, J. (2003), Using tf-idf to determine word relevance in document queries.

Sennrich, R., Haddow, B. & Birch, A. (2016), Neural machine translation of rare words with sub-word units, in 'Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)'. URL: https://www.aclweb.org/anthology/P16-1162

Sutskever, I., Vinyals, O. & Le, Q. V. (2014), 'Sequence to sequence learning with neural networks', CoRR abs/1409.3215. URL: http://arxiv.org/abs/1409.3215

Tiedemann, J. (2012), Parallel data, tools and interfaces in OPUS, in 'Proceedings of the Eighth International Conference on Language Resources and Evaluation (LREC'12)', European Language Resources Association (ELRA). URL: http://www.lrec-conf.org/proceedings/lrec2012/pdf/463Paper.pdf

Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L. & Polosukhin, I. (2017), 'Attention Is All You Need', arXiv e-prints p. arXiv:1706.03762.

W3Techs (2020), W3Techs. Usage of content languages for websites. Accessed: 2020-30.

Wei, J. & Zou, K. (2019), EDA: Easy data augmentation techniques for boosting performance on text classification tasks, in 'Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)', Association for Computational Linguistics, Hong Kong, China, pp. 6382-6388. URL: https://www.aclweb.org/anthology/D19-1670

Xia, M., Kong, X., Anastasopoulos, A. & Neubig, G. (2019), Generalized data augmentation for low-resource translation, in 'Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics', Association for Computational Linguistics, Florence, Italy, pp. 5786-5796. URL: https://www.aclweb.org/anthology/P19-1579

Zoph, B., Yuret, D., May, J. & Knight, K. (2016), Transfer learning for low-resource neural machine translation, in 'Proceedings of the 2016 Conference on Empirical Methods in Natural Language Processing', Association for Computational Linguistics, Austin, Texas, pp. 1568-1575. URL: https://www.aclweb.org/anthology/D16-1163
