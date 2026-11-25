> Machine translation (sw) of "Deep learning and low-resource languages: How much data is enough? A case study of three linguistically distinct South African languages" by Roald Eiselen, Tanja Gaustad, https://aclanthology.org/2023.rail-1.6/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Ujifunzajikina na lugha zenye rasilimali chache: Data kiasi gani inatosha? Uchunguzi kifani wa lugha tatu za Afrika Kusini zilizo tofauti kisarufi

Roald Eiselen, Tanja Gaustad

**Taasisi**  
Roald Eiselen and Tanja Gaustad  
Centre for Text Technology (CTexT)  
North-West University  
Potchefstroom, South Africa  
, 

## Muhtasari

Katika makala haya tunawasilisha uchunguzi kifani wa lugha tatu za Afrika Kusini zenye rasilimali duni na zilizo tofauti kisarufi (Kiafrikana, isiZulu, na Sesotho sa Leboa) ili kuchunguza ushawishi wa ukubwa wa data na asili ya kiisimu ya lugha kwenye utendaji wa aina tofauti za upachikaji. Mpangilio wetu wa majaribio unajumuisha kufunza upachikaji kwenye viwango vinavyoongezeka vya data na kisha kutathmini athari ya ukubwa wa data kwa kazi inayofuata ya kuweka tagi za aina za maneno. Tunagundua kuwa data ndogo inaweza kuzalisha maelezo yanayofaa kwa kazi hii maalum kwa lugha zote tatu. Uchambuzi wetu pia unaonyesha kuwa ushawishi wa tofauti za kiisimu na kiothografia kati ya lugha haupaswi kupuuzwa: lugha zenye mofolojia changamano, zilizoandikwa kwa namna ya kuunganisha (isiZulu katika kisa chetu) zinahitaji data zaidi kwa kiasi kikubwa ili kufikia matokeo mazuri, huku lugha zilizoandikwa kwa namna ya kutenganisha zikihitaji data kidogo zaidi kwa kiasi kikubwa. Hii si tu suala la data ya kufunza modeli ya embedding, bali pia nyenzo za mafunzo zilizochorwa kwa kazi inayohusika. Kwa hivyo ni muhimu kujua sifa za lugha unayofanyia kazi ili kufanya maamuzi yenye ufahamu wa kiisimu kuhusu kiasi cha data na aina ya upachikaji wa kutumia.

## 1 Utangulizi

Katika muongo uliopita, uwakilishi wa maneno uliowekwa kwenye vekta na matumizi ya Ujifunzajikina yamekuwa viwango vya kimsingi katika uchakataji wa lugha asilia (NLP) (Alzubaidi et al., 2021; Khurana et al., 2023). Kumekuwepo pia na msukumo wa kupanua utofauti wa lugha katika utafiti wa NLP (Joshi et al., 2020). Zote mbili, kujifunza mawakilishi yaliyowekwa kwenye vekta, yaani embeddings, na kujifunza kina ni mchakato unaotegemea data ambapo mifano hujiendeleza kutoka kwa kiasi kikubwa cha data ili kuwakilisha lugha kwa nambari au kujifunza kazi fulani ya mbele. Kujumuisha aina kubwa zaidi ya lugha kuliko lugha kuu, kama vile Kiingereza, Kihispania, Kijerumani, Kijapani, n.k., ili kufikia utofauti zaidi wa lugha kwa kawaida kunamaanisha kuchunguza lugha zenye rasilimali chache au zisizo na rasilimali za kutosha.

Hii, hata hivyo, inaleta mgawanyiko: Miundo ya ujifunzaji wa kina yenye utendaji wa juu, kama BERT, imefunzwa kwa mabilioni ya maneno. Wakati wa kuendeleza mifano kwa lugha nyingine isipokuwa Kiingereza, lugha zenye rasilimali chache (kama vile lugha za Afrika Kusini) huachwa nyuma kwa sababu kuna takwimu chache sana zinazopatikana. Pia, ukadiriaji wa mbinu zilizopo umetumika kwa sehemu tu kwa lugha zisizo na vifaa vya kutosha na watafiti kwa kawaida hudhania kwamba ubunifu wa umma utakaofanywa kwa mafunzo ya data nyingi utathibitika kuwa wa kweli hasa kwa kutumia data chache.

Hivi karibuni zaidi kumekuwepo na jitihada za kupanua umuhimu wa upachikaji uliofunzwa kwa lugha zenye rasilimali nyingi kwa lugha zenye data ndogo sana katika kile kinachoitwa modeli za lugha nyingi, kama vile XLM-R (Conneau et al., 2020) na mBERT (Devlin et al., 2019). Modeli hizi huzalisha viwakilishi ambavyo ni mchanganyiko wa taarifa mahususi za lugha pamoja na taarifa iliyojifunzwa katika lugha zote zilizojumuishwa kwenye modeli. Kwa kawaida hufunzwa kwa kutumia data ya mtandaoni pekee kama vile Common Crawl au Wikipedia, ambazo zina vikwazo fulani vya asili (kama itakavyojadiliwa baadaye katika makala haya), lakini pia zina upatikanaji mdogo kwa Lugha za Afrika Kusini. Kwa mfano, isiNdebele haina data ya Wikipedia na kwa hiyo hata haijapatikana katika Common Crawl. Kwa hiyo, lugha nyingi za Afrika Kusini hazijajumuishwa katika mifano hii ya kielu.

Kufanya utafiti wa NLP kuhusu lugha za Afrika Kusini katika zama hizi basi kunaleta swali la nini athari za kufanya kazi na data ndogo sana kwenye mbinu za sasa za kawaida kama vile upachikaji na miundo ya lugha ya neva. Au kwa maneno mengine: data ngapi inahitajika kwa kujifunza maelezo ya vekta yenye faida? Dhana ya msingi ni kwamba kujifunza kutoka kwa data ndogo kutatoa miundo isiyowakilisha vizuri na hivyo isiyo na manufaa. Hata hivyo, bado inabakia kuonekana ikiwa hili ni kweli kweli. Kwa mtazamo wa utofauti wa lugha, ni muhimu pia kujua jinsi miundo ya upachikaji inavyotofautiana kwa lugha zenye miundo tofauti na jinsi kiasi cha data kinachopatikana kinavyoathiri uwakilishi uliojifunza kwa lugha zenye tofauti za kimaandishi.

Katika makala haya, tunawasilisha uchunguzi kifani unaojaribu kujibu maswali haya. Mpangilio wetu unajumuisha kufunza upachikaji kwa lugha tatu za Afrika Kusini zilizo tofauti kisarufi (Kiafrikana, isiZulu, na Sesotho sa Leboa) ili kutathmini athari za upachikaji uliofunzwa kwa viwango vinavyoongezeka vya data kwa kazi ya mtiririko wa chini ya kuweka tagi za aina za maneno (POS). Lengo ni kubainisha ushawishi wa ukubwa wa data kwenye utendaji wa aina tofauti za upachikaji na kuelezea athari zinazozingatiwa kwa lugha tofauti. Matokeo ya majaribio yetu yanaonyesha kwamba hata data ndogo kiasi inaweza kuwa na manufaa katika baadhi ya mazingira na kwamba lugha zenye mofolojia changamano na zinazoandikwa kwa unganishi zinahitaji data nyingi zaidi, kwa kufunza upachikaji na kazi ya mtiririko wa chini, hasa wakati wa kutumia uwakilishi wa neno kamili/kisehemu cha neno.

## 2 Usuli

## 2.1 Muktadha wa lugha wa Afrika Kusini

Lugha rasmi kumi na moja za Afrika Kusini zinajumuisha lugha tisa za Niger-Kongo-B (NCB) na lugha mbili za Kijerumaniki. Lugha za NCB (van der Velde et al., 2022) zina idadi ya sifa za kiisimu zinazozifanya ziwe tofauti kwa kiasi kikubwa na lugha nyingi za Kihindi-Kiulaya: zote ni lugha za toni; zinatumia mfumo tata wa ngeli zenye hadi ngeli 21; na mofolojia yao ya nomino na vitenzi ina uambishaji mkubwa na uzalishaji mkubwa, jambo ambalo linaweza kusababisha msamiati mkubwa kwa lugha zile zinazofuata mfumo wa uandishi wa kiunganishi.

Kwa sababu za kihistoria, lugha za NCB za Afrika Kusini zilipitisha mifumo miwili tofauti ya uandishi, ama ya kiunganishi au ya kitenganishi, ambapo kwa kawaida tofauti hufanywa kati ya maneno ya kiisimu na maneno ya kiothografia. Kwa lugha zinazoandikwa kwa namna ya kuunganisha, neno moja la kiothografia (tokeni) hulingana na neno moja au zaidi za kiisimu, ilhali kwa lugha zinazoandikwa kwa namna ya kutenganisha, maneno kadhaa ya kiothografia yanaweza kulingana na neno moja la kiisimu (Louwrens na Poulos, 2006). Lugha nne za Kinguni, isiNdebele, isiXhosa, isiZulu, na Siswati, huandikwa kwa namna ya kuunganisha, ilhali lugha tatu za Kisotho, Sesotho, Sesotho sa Leboa (inayojulikana pia kama Sepedi), na Setswana, Tshivenḓa, lugha ya Kivenda, pamoja na Xitsonga, lugha ya Tswa-Ronga, huandikwa kwa namna ya kutenganisha. Hii ni tofauti kubwa kutoka kwa lugha mbili za Kijerumaniki zilizopo Afrika Kusini, Kiafrikana na Kiingereza, ambapo mara nyingi neno la kiisimu na neno la kiothografia hulingana.

Maana ya mifumo hii tofauti ya uandishi ni kwamba tokeni nyingi katika lugha zinazoandikwa kwa namna ya kutenganisha zinaweza kulingana na tokeni moja katika lugha zinazoandikwa kwa namna ya kuunganisha. Hii husababisha ufinyu wa marudio ya tokeni kwa lugha zinazoandikwa kwa namna ya kuunganisha, ilhali kinyume chake ni kweli kwa lugha za kutenganisha. Kama kielelezo, vilinganifu sambamba vya korasi ya Kiingereza yenye maneno 50,000 vitakuwa na takriban maneno 43,000 kwa lugha zinazoandikwa kwa namna ya kuunganisha, ilhali lugha za kutenganisha zitakuwa na takriban tokeni 60,000. Tofauti hii na athari zake zimejadiliwa kwa undani zaidi katika Sehemu ya 3.

Moja ya malengo ya makala hii ni kuchunguza ushawishi wa tofauti za kiisimu na kiothografia katika lugha za Afrika Kusini juu ya kutumia miundo ya upachikaji katika kazi za NLP, hasa uwekaji tagi za POS. Kwa lengo hilo tumechagua lugha moja kutoka kila familia kwa majaribio yetu: Afrikaans (Kijerumaniki), isiZulu (Nguni iliyoandikwa kwa muunganiko) na Sesotho sa Leboa (Sotho iliyoandikwa kwa kutengana).

## 2.2 Miundo ya upachikaji

Tangu kuanzishwa kwa uwakilishi wa maneno wa vekta wa word2vec (Mikolov et al., 2013) na GloVe (Pennington et al., 2014), kazi nyingi (kama si zote) za NLP hutumia uwakilishi wa vekta uliojifunza, unaojulikana kama upachikaji, ili kuiga matukio ya maneno na muktadha wake. Kwa algoriti hizi, miundo ya upachikaji hufunzwa kwa ufanisi kwenye kiasi kikubwa cha data na uwakilishi uliojifunza, pamoja na mbinu za Ujifunzajikina, kwa ujumla huboresha matokeo ya kazi za NLP za mkondo wa chini. Katika makala hii tunatumia usanifu tatu wa upachikaji, yaani fastText (kiendelezi cha word2vec) na GloVe, upachikaji wa kawaida, na upachikaji wa FLAIR, mtandao wa neva unaojirudia unaotegemea herufi.

Upachikaji wa GloVe (Pennington et al., 2014) hujifunza uwakilishi wa maneno kwa kutumia utokeaji-pamoja wa jumla kufunza muundo wa urejeleaji wa log-bilinear. Kwa kila neno katika msamiati wa muundo wa GloVe vekta moja ya n-dimensional hujifunzwa, wakati maneno yote ambayo hayajaonekana huzalisha uwakilishi sawa wa vekta. Viingizo vya fastText (Bojanowski et al., 2017), upanuzi wa word2vec (Mikolov et al., 2013), vinategemea matukio ya pamoja ya maneno. Mbali na neno kamili, uzalishaji wa viwakilishi vya vekta hujumuisha n-gramu za herufi, au "maneno madogo", kuruhusu upachikaji huu pia kuzalisha viwakilishi tofauti kwa maneno ambayo hayajaonekana hapo awali kwa kuchanganya n-gramu kutoka kwa neno lisiloonekana. Upachikaji wa fastText unakuja katika vibadala viwili, mifuko ya maneno endelevu (CBoW) na mifano ya Skipgram. GloVe na fastText zote hujifunza kiwakilishi kimoja cha vekta kwa kila neno katika msamiati. Wakati wa kurejesha vekta hii, neno litapokea vekta ileile kila wakati, bila kujali muktadha ambamo neno hilo linatokea.

Kinyume chake, upachikaji wa FLAIR (Akbik et al., 2018, 2019) hujifunza viwakilishi kwa mfuatano wa herufi kwa kufunza mtandao wa neva wa kumbukumbu ya muda mfupi-ndefu (LSTM) unaojirudia. Hii inamaanisha kuwa neno tofauti linalotokea katika miktadha tofauti linaweza kuwa na kiwakilishi tofauti cha vekta kulingana na mfuatano wa herufi (muktadha) unaolizunguka neno hilo. Zaidi ya hayo, milolongo yote ya herufi hupokea uwakilishi iwe mlolongo umeshuhudiwa wakati wa mafunzo au la. Hii inaweza kusaidia katika uwakilishi wa maneno nadra au yaliyoandikwa vibaya pamoja na morfemi binafsi au maneno yenye utata wa kimorfolojia. FLAIR inaruhusu tofauti mbili, yaani Forward na Backward, kulingana na mwelekeo ambao maandishi huchakatawa – au kutoka mwanzo (forward) au kutoka mwisho (backward).

Kwa kupatikana kwa mifumo hii iliyoboreshwa ya Ujifunzajikina na kuongezeka kwa mkazo katika utofauti wa lugha katika jamii ya Ujifunzajikina, kumekuwa na ongezeko kubwa la utafiti kuhusu Lugha za Afrika. Lengo la kazi hii limekuwa pana: Kutoka kwa matumizi ya upachikaji na Ujifunzajikina kwa lugha binafsi na matumizi binafsi (Dlamini et al., 2021; Heyns and Barnard, 2020; Loubser and Puttkammer, 2020; Marivate et al., 2020; Ralethe, 2020), hadi uchunguzi wa usanifu wa upachikaji wa lugha nyingi kwa Lugha za Afrika (Alabi et al., 2022; Hanslo, 2021; Moeng et al., 2022) na Ujifunzaji hamishi kutoka lugha zenye rasilimali nyingi (Hedderich et al., 2020). Matokeo ya uchunguzi huu yamekuwa na matokeo mchanganyiko, katika baadhi ya matukio yakiboresha kwa kiasi kikubwa teknolojia kuliko matokeo bora ya awali, huku mbinu nyingine zikionyesha jinsi asili na ubora wa data unavyoathiri kwa kiasi kikubwa ubora wa modeli zilizofunzwa. Kadiri tunavyofahamu, hakuna kati ya tafiti hizi zilizochunguza kwa uwazi ubora na asili ya upachikaji wakati wa kuzingatia ukubwa wa data na sifa za kimofolojia-sintaksia za Lugha za Afrika.

## 3 Data

Sharti kuu la kufunza upachikaji na modeli za lugha kwa lugha yoyote ni kupatikana kwa kiasi kikubwa cha data ya maandishi. Ingawa kumekuwa na juhudi kadhaa za kuunda korasi kama hizo kwa Lugha za Afrika Kusini (Eiselen and Puttkammer, 2014; Goldhahn et al., 2012; Marivate et al., 2020), bado kuna data kidogo kiasi inayopatikana kwa nyingi kati yazo. Data iliyokusanywa kwa ajili ya utafiti huu ni mchanganyiko wa seti mbalimbali za data za wazi (zaidi leseni za CC-BY na CC-NC), pamoja na baadhi ya data inayopatikana kwa waandishi pekee yenye vizuizi vya hakimiliki vinavyokataza usambazaji wa korasi kamili. Data iliyojumuishwa katika korasi za mafunzo kwa ajili ya upachikaji wa isiZulu na Sesotho sa Leboa kimsingi inatoka kwenye Korasi za Maandishi za NCHLT (Eiselen na Puttkammer, 2014; Puttkammer et al., 2014c,d,e), Korasi za Autshumato (McKellar, 2022a,b,c), Mkusanyiko wa Korasi wa Leipzig (Goldhahn et al., 2012), na korasi ya Common Crawl. Vyanzo hivi vyote vinatumika pia katika korasi ya mafunzo ya Kiafrikana, pamoja na data ya ziada kutoka kwa wachapishaji na vyanzo vya kibinafsi, yaani NWU/Lapa Corpus, NWU/Protea Boekhuis Corpus, na NWU/ATKV-Taalgenoot Corpus.

Ijapokuwa data katika korasi zote mbili za Leipzig na Common Crawl zimetambulishwa lugha, uchunguzi wa awali ulionyesha kuwa kiasi kikubwa cha data kimehusishwa kimakosa na mojawapo ya lugha hizo. Hii inatokana hasa na ukweli kwamba lugha zote tatu katika utafiti huu zina lugha zinazohusiana ambazo zinashiriki vipengele sawa vya othografia jambo ambalo husababisha uainishaji mbaya wa data ya lugha, haswa:

Afrikaans ⇔ Kiholanzi;

isiZulu ⇔ isiNdebele, isiXhosa, na Siswati;

Sesotho sa Leboa ⇔ Setswana na Sesotho.

Kwa hiyo, data yote kutoka korasi za Leipzig na Common Crawl ilisafishwa zaidi kwa kutumia Kitambulishi cha Lugha cha NCHLT (Hocking, 2014; Puttkammer et al., 2018) kwa kiwango cha uhakika cha 80%. Kwa kuwa data nyingi katika korasi husika zinatoka kwenye wavuti, nakala zote zinazojirudia katika kiwango cha aya katika data iliyounganishwa huondolewa kabla ya mafunzo.

p04-01.png

Jedwali la 1: Muhtasari wa data inayopatikana kwa ajili ya mafunzo ya upachikaji na uwekaji tagi wa POS

Muhtasari wa data inayopatikana kwa ajili ya mafunzo ya upachikaji umewasilishwa katika Jedwali la 1. Kama ilivyojadiliwa katika Sehemu ya 2.1, kuna tofauti kubwa katika idadi ya tokeni katika msamiati kwa kila moja ya lugha tatu kwa ukubwa sawa wa korasi. Njia moja ya kuwakilisha athari za pamoja za tofauti hizi za kimofosintaksia na mfumo wa uandishi ni kwa kuongeza uwiano wa tokeni na msamiati kwenye hesabu za tokeni zilizoripotiwa: maandishi katika lugha ya isiZulu iliyoandikwa kwa kuunganisha na yenye mofolojia changamano kwa kawaida huonyesha uwiano wa juu wa tokeni na msamiati kuliko maandishi katika Sesotho sa Leboa, ambapo idadi fulani ya mofimu huandikwa kando na kwa hiyo huhesabiwa kama tokeni nyingi. Katika Kiafrikana, ambapo tokeni moja kwa kawaida inalingana na neno moja la kiothografia, uwiano wa tokeni na msamiati uko katikati ya mipaka miwili ya lugha zenye uandishi wa kutenganisha na wa kuunganisha. Msamiati wa Kiafrikana bado ni mchache zaidi kuliko ilivyo kawaida katika Kiingereza kwa kuwa maneno ambatani ni ya kawaida sana katika Kiafrikana na husababisha idadi kubwa zaidi ya tokeni za kipekee, ingawa sio wenye tija kama isiZulu iliyoandikwa kwa kuunganisha.

Data ya POS iliyotumika katika utafiti huu ni NCHLT Annotated Corpora kwa Afrikaans na Sesotho sa Leboa (Puttkammer et al., 2014a,b), na Linguistically enriched corpora kwa lugha za Afrika Kusini zilizoundwa kwa pamoja kwa isiZulu (Gaustad and Puttkammer, 2022; Puttkammer and Gaustad, 2021). Kila korasi iliyo na maelezo ina takriban tokeni 50,000 kwa seti ya mafunzo, na seti tofauti ya majaribio ya takriban tokeni 5,000. Ingawa data imechorwa kwenye seti za tagi za POS zenye maelezo ya kina sana (kawaida zikiwa na tagi 90+), kwa utafiti huu tulipunguza seti za tagi hadi kati ya 12 na 17 kwa mfano kwa kutojumlisha habari ya daraja na kutumia tu daraja kuu za POS. Hii inafanya matokeo kati ya lugha yaweze kulinganishwa zaidi, lakini haifichi tofauti za kiutendaji ambazo ubadilishaji hadi UPOS ungefanya. Muhtasari wa data na lebo za POS umetolewa kwenye Jedwali 1.

## 4 Muundo wa Majaribio

Ili kubaini athari za usanifu tofauti wa upachikaji na sifa za kimofosintaksia kwenye umuhimu wa upachikaji katika mazingira yenye rasilimali chache, tunafanya seti ya majaribio ili kubaini jinsi sifa hizi pamoja na ukubwa wa data zinavyoathiri ubora wa kazi moja ya mkondo wa chini, yaani uwekaji lebo za POS.

Hatua ya kwanza katika mchakato ni kuzalisha upachikaji katika kila usanifu uliochaguliwa - fastText, GloVe, na FLAIR - kwa ukubwa tofauti wa seti ya data. Kwa kila lugha uteuzi nasibu wa aya kutoka korasi inayopatikana unafanywa kwa ukubwa unaoongezeka kwa kurudia, ukianza na aya 10,000 na kuongeza maradufu kiwango cha data kwa nasibu kwa kila rudio. Kwa isiZulu na Sesotho sa Leboa mchakato huu unarudiwa hadi kufikia korasi nzima inayopatikana (vifungu 292,600 na 838,000 mtawalia), wakati kwa Kiafrikana tunachagua data hadi nyongeza moja juu ya lugha kubwa zaidi kati ya hizo mbili (vifungu 1,280,000). Kulingana na kila marudio ya data, upachikaji wa usanifu wote watatu, zikiwemo aina zao tofauti, unafunzwa.

Ili kufanya ulinganisho wa modeli uwe thabiti iwezekanavyo, Parameta juu kwa kila usanifu zinawekwa sawa (kwa kawaida mipangilio chaguomsingi, angalia Jedwali 2) na hakuna urekebishaji wa Parameta juu unaofanywa. Kwa hiyo, kunaweza kuwa na uteuzi fulani wa Parameta juu kwa ukubwa tofauti wa seti ya data na lugha, ambao unaweza kusababisha maboresho madogo katika matokeo yaliyowasilishwa katika kazi hii, lakini Parameta juu tofauti zingefanya ulinganisho na hitimisho linalotokana lisiwe na utumikaji wa jumla. Zaidi ya hayo, hii pia ingeongeza kwa kiasi kikubwa idadi ya majaribio yanayohitaji kufunzwa (pengine hadi maelfu) na haiwezi kuhalalishwa kimaadili na kimazingira kutokana na matumizi ya ziada ya nishati. Kwa jumla modeli 110 za upachikaji zinafunzwa kwenye Intel i79700 CPU na NVIDIA GeForce RTX 2060 6Gb GPU nne, zikijumlisha saa 30 za CPU na saa 252 za GPU.

p05-01.png

Jedwali 2: Mipangilio ya Parameta juu kwa mafunzo ya upachikaji

Ubora wa upachikaji uliofunzwa kwenye ukubwa tofauti wa korasi kwa lugha hizo tatu unatathminiwa kwa kutumia kitambulishi cha POS cha LSTM-CRF cha pande mbili cha kawaida kilichotekelezwa kama sehemu ya mfumo wa FLAIR (Akbik et al., 2019). Kifaa cha POS tofauti hufundishwa kwa kila moja ya mifano ya kuingizwa, kwenye vifaa sawa vya GPU vinavyotumiwa kufundisha kuingizwa. Sababu kuu ya kutumia mfumo wa FLAIR ni ukweli kwamba una usaidizi wa kujengwa ndani kwa usanifu wote tofauti wa upachikaji, hivyo kuhakikisha kwamba matokeo ya vitambulishi husika yanaweza kulinganishwa kwa njia inayofaa. Kama ilivyo kwa miundo ya upachikaji, parameta juu zinahifadhiwa kwenye mipangilio chaguomsingi (ukubwa uliofichwa: 256, kiwango cha ujifunzaji: 0.1, dropout: 0.05, epoka: 40). Inapaswa pia kubainishwa kwamba kwa sababu seti za mafunzo za POS ni ndogo kiasi, uboreshaji modeli wa upachikaji wakati wa mafunzo ya kitambulishi cha POS haufanywi. Tagari zote zinathibitishwa kwa kutumia kipimo cha Usahihi, na kulinganishwa na tagari za POS za Huduma za Mtandao za NCHLT (Puttkammer et al., 2018) kama msingi kwa kila lugha.

Kutokana na idadi kubwa ya wapiga alama (24 kwa jumla), wapiga alama wa POS hawakufundishwa mara nyingi na alama za wastani. Kufanya hivyo kungeongeza tena kwa kiasi kikubwa saa za GPU zinazohitajika (kwa sasa 82) kwa jaribio, na haiwezi kuhalalishwa, kwa kuwa lengo la makala si kuunda kitambulishi bora zaidi iwezekanavyo, bali kubaini jinsi upachikaji tofauti unavyoathiri matokeo ya mkondo wa chini.

## 5 Matokeo na Mjadala

Sasa tutazungumzia ufanisi wa mifano mbalimbali ya embedding kwa ukubwa tofauti wa data kwa Afrikaans, isiZulu na Sesotho sa Leboa. Uwakilishi wa kielelezo wa utendaji kwenye kazi ya kuweka lebo za POS unaweza kupatikana katika Kielelezo 1 (kwa Kiafrikana), 2 (kwa isiZulu) na 3 (kwa Sesotho sa Leboa), huku matokeo kamili ya nambari yakipatikana katika Jedwali 3 katika kiambatisho.

Hitimisho la kwanza mashuhuri linaloweza kutolewa kutokana na kukagua matokeo ni kwamba hata upachikaji uliofunzwa kwenye korasi ndogo sana unaweza kuinua ubora wa kazi za mkondo wa chini ambazo ni rahisi kiasi, kama vile kuweka lebo za POS, ikilinganishwa na mifumo ya msingi. Hasa, upachikaji wa kimuktadha wa herufi wa FLAIR unatoa matokeo ya mkondo wa chini ambayo ni mazuri kwa kushangaza, hata kwa isiZulu inayoandikwa kwa kuunganisha. Ilitarajiwa kwamba miundo inayotegemea herufi ingefanya vizuri zaidi kwa kiasi kidogo sana cha data, lakini miundo iliyofunzwa kwenye seti ndogo zaidi za data kwa kweli inafanya kazi kwa kulinganishwa na matokeo bora kwa upachikaji mwingine wowote. Kinyume chake, ingawa modeli za FLAIR zinafanya kazi vizuri zaidi zinapofundishwa na data sets kubwa zaidi, hakuna kiwango sawa cha uboreshaji kama ilivyo kwa miundo miwili mingine. Moja ya maana ya uchunguzi huu ni kwamba modeli ndogo na haraka zaidi zinaweza kufanya kazi vizuri kwa matumizi fulani, ingawa si lazima zifikie matokeo ya hali ya sasa. Hii inawaruhusu watafiti na wasanidi programu wenye uwezo mdogo wa vifaa pia kunufaika kwa kutumia aina hizi za upachikaji.

Kama ilivyotarajiwa, upachikaji wa GloVe mara kwa mara unafanya vibaya zaidi kati ya aina zote za upachikaji, hasa zaidi kwa marudio mawili ya kwanza ya korasi ndogo sana, kwa sababu kuu mbili. Kwanza, kwa vile upachikaji huu unazalisha tu viwakilishi vya maneno yaliyo katika msamiati, maneno yote katika kazi ya kuweka lebo ambayo si sehemu ya msamiati yanawakilishwa na vekta ileile, na kwa hiyo hayana viwakilishi vyovyote vya kutofautisha. Pili, kwa kuwa maneno mengi hutokea mara chache tu katika data ya mafunzo, kujifunza maelezo magumu ni changamoto wakati neno linapoonekana katika muktadha chache tu. Matatizo haya yanaongezeka kwa lugha ya Kizulu ambapo mtindo wa kuandika kwa kuunganisha husababisha idadi kubwa ya matukio tofauti kwa maneno yote, hasa maneno yasiyo ya mara kwa mara, na kujifunza kuwakilisha maana ni karibu haiwezekani. Kwa Sesotho sa Leboa iliyoandikwa kwa mtengano, hata hivyo, msamiati unawakilisha kiasi hata kwa korasi ndogo, na upachikaji wa GloVe unafanya vibaya kidogo tu kuliko aina nyingine za upachikaji.

Mifano ya fastText inafanya vizuri zaidi kwa kiasi kikubwa kuliko mifano ya GloVe kwa seti ndogo sana za data, huku bado ikifanya vibaya zaidi kuliko upachikaji wa FLAIR. Kwa seti kubwa zaidi za data, hata hivyo, mifano ya fastText CBoW inafanya ama sawa sana au vizuri zaidi kuliko mifano ya FLAIR. Kwa kuvutia, kwa seti ndogo sana za data mifano ya Skipgram inashinda mifano ya CBoW kwa marudio mawili au matatu ya kwanza ya data, baada ya hapo mifano ya CBoW inafanya vizuri zaidi mara kwa mara katika lugha zote. Si dhahiri mara moja kwa nini hii ingekuwa hivyo, lakini ukweli kwamba hii inatokea katika lugha zote tatu unaonyesha kwa uthabiti kwamba kwa seti ndogo sana za data Skipgram zinapendekezwa kuliko CBoW, ilhali kwa seti yoyote ya data yenye zaidi ya tokeni 500,000 au milioni moja (zinazolingana na takriban aya 40,000 katika data yetu), mifano ya CBoW inazalisha viwakilishi bora zaidi vinavyopimwa kwenye kazi ya kuweka lebo ya POS. Hili linapingana na matokeo ya awali ya Mikolov et al. (2013), lakini linapatana na matoleo ya hivi karibuni ya modeli za fastText ambazo pia zimebadilisha hadi modeli za CBoW kwa chaguo-msingi, tofauti na modeli zilizotolewa awali (Bojanowski et al., 2017).

Matokeo yetu pia yanaonyesha wazi kwamba mfumo wa uandishi wa lugha una sehemu kubwa katika kiasi cha data kinachohitajika kufunza upachikaji ambao ni muhimu kwa kiwango chochote. Kwa lugha zilizoandikwa kwa kuunganisha, kadri ugumu wa kimofolojia katika kiwango cha tokeni unavyoongezeka, ndivyo kiasi cha data kinachohitajika kuunda uwakilishi wenye maana kinavyoongezeka. Katika hali mbili kali za isiZulu na Sesotho sa Leboa, hata upachikaji kutoka kwenye korasi kubwa zaidi inayopatikana ya isiZulu unafanya vibaya zaidi kuliko upachikaji unaotokana na korasi ndogo zaidi ya Sesotho sa Leboa, kwa usahihi ulio chini kati ya 4.28% na 15.19% kutegemea na modeli. Kiafrikana, ambacho ni kigumu zaidi kidogo kimofolojia katika kiwango cha tokeni kuliko Sesotho sa Leboa, lakini si kigumu karibu kama isiZulu, pia kinafanya kazi mahali fulani kati ya lugha hizo mbili wakati wa kuzingatia ukubwa tofauti wa data na upachikaji.

p06-01.png

Kielelezo 1: Usahihi wa utambulishaji wa POS wa Kiafrikana kwa kutumia modeli tofauti za upachikaji na ukubwa unaoongezeka wa data

Mbali na matokeo ya jumla yaliyotolewa katika aya zilizotangulia, kuna pia vipengele fulani vya lugha maalumu vya matokeo ambayo yanastahili kujadiliwa. Tunajumuisha uchambuzi mpana wa makosa ya kilugha kwa kila lugha ili kubaini lengo kuu la makosa liko wapi kwa modeli bora zaidi kwa kila lugha.

Kwa Kiafrikana, modeli ya fastText CBoW inafanya vibaya zaidi kuliko modeli zote kwenye seti ndogo zaidi ya data, lakini inaonyesha kiwango kikubwa zaidi cha uboreshaji kadri ukubwa wa data unavyoongezeka, hadi kufikia hatua ambapo inafanya vizuri zaidi kuliko modeli zote kwenye seti kubwa zaidi ya data. Pia, modeli ya Kiafrikana ya FLAIR Forward inafanya kazi kwa kiwango kinachokaribia kufanana kabisa na modeli ya fastText CBoW, wakati modeli ya FLAIR Backward ni mbaya kidogo. Wakati wa kuzingatia tofauti za makosa ya tagi kati ya upachikaji uliofunzwa kwenye korasi ndogo na kubwa zaidi, inakuwa wazi kwamba chanzo kikuu cha maboresho kwa upachikaji wote wa fastText na GloVe ni ukubwa wa data. Kadri maneno zaidi yanavyojumuishwa katika msamiati, viwango vya makosa vya kulinganisha kwa nomino, vitenzi, vivumishi, na vielezi hupunguzwa kwa kati ya 35% na 45%. Upunguzaji wa kiwango cha makosa vya kulinganisha kwa modeli za FLAIR sio sawa katika madarasa yote ya maneno wazi. Kama mfano, modeli ya FLAIR Forward inapunguza asilimia ya makosa kwa kivumishi na vitenzi kwa 43% na 72% mtawalia, huku ikiongeza idadi ya makosa kwa nomino au vielezi. Modeli ya FLAIR Backward inaonyesha maboresho kwa vivumishi (25%) na vitenzi (61%) pia, lakini pia maboresho makubwa kwa nomino (64%) na vielezi (48%).

p07-01.png

Kielelezo 2: Usahihi wa utambulishaji wa POS wa isiZulu kwa kutumia modeli tofauti za upachikaji na ukubwa wa data unaoongezeka

Kwa upande wa isiZulu, modeli ya FLAIR Backward inafanya vizuri zaidi kwa jumla, ingawa FLAIR Forward inafanya vizuri kwa kulinganishwa. Tofauti hii na Kiafrikana inawezekana kutokana na ukweli kwamba Kizulu hutumia kiambishi awali kwa ufanisi zaidi kuliko kiambishi tamati, na kuchakata data kutoka mwisho wa maandishi hadi mwanzo kunapelekea mfano wenye taarifa kidogo zaidi. Modeli ya GloVe kwa isiZulu ni mbaya zaidi kwa kiasi kikubwa kuliko modeli nyingine zozote zilizofunzwa katika uchunguzi huu na kwa hakika ni matokeo ya uchache wa data wakati wa mafunzo pamoja na maneno ambayo hayajaonekana hapo awali katika kazi ya kuweka tagi. Tatizo hili halipo sana kwa modeli za fastText: Kwa kuwa n-gramu za maneno ambayo hayajaonekana hapo awali bado zinaweza kuzalisha uwakilishi, na ingawa sio na taarifa nyingi kwa kazi hiyo, uwakilishi huu wa 'sehemu ndogo za neno' kwa wazi una athari kubwa kwa ubora wa matokeo. Modeli za CBoW na GloVe zinaonyesha upunguzaji mkubwa zaidi wa kiwango cha makosa katika madaraja makuu ya POS ya kati ya 17% na 77%, hasa kwa Vimilikishi na Vielezi. Modeli za FLAIR kwa upande mwingine hazionyeshi maboresho makubwa kwa kategoria zozote, na maboresho hayo yanapingwa na kurudi nyuma katika madaraja mengine, na hivyo matokeo yanabaki thabiti kiasi kati ya modeli zilizofunzwa kwenye korasi ndogo na kubwa zaidi.

Ingawa upachikaji wa FLAIR unafanya vizuri zaidi kwa isiZulu, kuna uboreshaji mdogo sana kwa modeli hizi kadri ukubwa wa data unavyoongezeka. Kuna sababu mbili zinazowezekana, na zinazohusiana, kwa nini hii inaweza kuwa hivyo. Kwanza, kwa kuwa uambishaji mwingi katika isiZulu ni wa kawaida, muundo mwingi wa kimofolojia wa lugha hiyo unaweza kusimbwa vizuri kwa kiasi kidogo cha data. Hili linathibitishwa na ukweli kwamba ngeli za maneno zenye tija zaidi (yaani, nomino, vitenzi, vielezi, vimilikishi, na virejeshi) zinatambulishwa kwa usahihi zaidi kwa modeli ya FLAIR iliyofunzwa kwa kiasi kidogo zaidi cha data, kuliko modeli nyingine zozote za upachikaji. Modeli ya fastText CBoW inafanya kazi vivyo hivyo kwenye ngeli hizi kwa seti ya mafunzo kubwa zaidi, na inaweza kuzishinda modeli za FLAIR ikiwa data zaidi itapatikana. Sababu nyingine inayowezekana ni kwamba data za mafunzo za POS zilizochorwa ni ndogo sana kwa kiasi cha kufanya uboreshaji zaidi uwezekane, na seti kubwa zaidi inahitajika ili kupata matoano yanayolingana na hayo ya Afrikaans au Sesotho sa Leboa.

p07-02.png

Kielelezo 3: Usahihi wa utambulishaji wa POS wa Sesotho sa Leboa kwa kutumia modeli tofauti za upachikaji na ukubwa wa data unaoongezeka

Modeli zote za upachikaji za Sesotho sa Leboa, pamoja na mtindo wake wa uandishi wa kutenganisha, tayari zinafanya kazi vizuri kwa seti ndogo sana za data. Maboresho kwenye kazi ya utambulishaji wa POS kwa seti kubwa za data pia si makubwa karibu kama kwa lugha zile nyingine mbili. Kama ilivyo kwa lugha nyingine, modeli za FLAIR zinafanya kazi vizuri zaidi kwa data kidogo sana, wakati modeli za fastText CBoW zinazalisha matokeo bora zaidi kwa jumla kwa data zaidi. Kwa kushangaza, mifano ya fastText Skipgram haionyeshi uboreshaji mwingi kati ya seti ndogo na kubwa za data, na haionekani kuwa sababu inayotambulika kwa urahisi kwa matokeo haya. Kama ilivyo kwa lugha nyingine zote mbili, upachikaji wa GloVe kwa ujumla unaonyesha uboreshaji kwa kila marudio ya data kubwa zaidi, na una uwezekano wa kuendelea kuboreshwa ikiwa data zaidi ingepatikana kujumuishwa. Kwa miundo ya GloVe na FLAIR, maboresho katika madarasa ya tagi ni ya wastani zaidi, kati ya 8% na 46% kwa madarasa ya nomino, kitenzi, upatanisho, na kivumishi. Miundo yote miwili ya FLAIR pia inarudi nyuma kwenye darasa la kielezi. Miundo ya fastText inaonyesha maboresho makubwa zaidi kwa baadhi ya madarasa, lakini kwa muundo wa Skipgram kupungua kwa makosa katika darasa moja kunapingwa na ongezeko la makosa katika darasa lingine. Kwa mfano, makosa ya ngeli ya nomino yanapunguzwa kwa 40%, lakini madarasa ya kivumishi na upatanisho yanaongeza makosa yao kwa zaidi ya 40%, na kusababisha Usahihi ambao unafanana sana na muundo uliofunzwa kwenye seti ndogo zaidi za data.

Kujumlisha matokeo yetu kwa aina ya upachikaji wa kutumia na data kidogo, hitimisho ni kwamba miundo ya FLAIR itatoa matokeo mazuri, hasa kwa data kidogo sana. Kwa data kidogo zaidi, upachikaji wa fastText CBoW pia utafanya kazi kwa kutosha. GloVe, hata hivyo, inahitaji kiasi kikubwa cha data ili kufikia uwezo wa kutosha wa kujumlisha ili itumike kwa mafanikio kwenye kazi ya mkondo wa chini ya kimofolojia-kisintaksia.

Uchambuzi wetu pia unaonyesha kwamba ushawishi wa tofauti za kiisimu na kimaandishi kati ya lugha haupaswi kupuuzwa. Lugha kama isiZulu yenye umbo la neno changamano na istilahi kubwa (na kwa hiyo upungufu mkubwa wa data) itahitaji data zaidi ili kufundisha mifano ya lugha inayowakilisha. Lakini mfano bora wa lugha peke yake si wa kutosha. Data zaidi iliyo na maelezo yanayohusiana na kazi pia inahitajika ili kuongeza kwa kiasi kikubwa Usahihi wa POS - tena athari ya kujaribu kujifunza kutoka kwa data chache. Ni muhimu kutambua athari ya upungufu wa data katika uwakilishi uliojifunza na kazi halisi inayojifunza kwenye matokeo ya mwisho ya lebo.

## 6 Hitimisho na Kazi za Baadaye

Katika makala hii, tulichunguza jinsi kiasi cha data ya mafunzo inayopatikana na sifa za kiisimu za lugha zinavyoathiri ubora wa upachikaji uliojifunzwa. Uchunguzi wetu kifani ulihusisha kufunza usanifu tatu tofauti wa upachikaji kwenye viwango tofauti vya data, na kutathmini upachikaji huo kwa nje kwenye kazi ya chini ya mkondo ya kuweka lebo za POS kwa lugha tatu za Afrika Kusini zilizo tofauti kiisimu (Afrikaans, isiZulu na Sesotho sa Leboa).

Matokeo yetu yanaonyesha kuwa chini ya hali fulani hata data ndogo kidogo inaweza kuzalisha maelezo yanayofaa kwa kazi maalum. Tunaonyesha waziwazi kwamba kwa data ndogo sana (takriban tokeni 300,000) upachikaji wa FLAIR huzalisha uwakilishi unaofanya kazi kwa kulinganishwa na usanifu mwingine wowote uliofunzwa kwenye seti kubwa zaidi za data, bila kujali uchangamano wa kimofolojia wa lugha. Miundo ya FLAIR kwa ujumla haionyeshi kiwango sawa cha maboresho kama aina nyingine za upachikaji wakati seti kubwa zaidi za data zinapatikana, na katika baadhi ya matukio inashindwa na upachikaji wa fastText CBoW wenye seti kubwa zaidi za mafunzo zinazopatikana.

Matokeo yanaimarisha zaidi ujuzi kwamba kwa lugha zenye uchangamano wa kimofolojia, zilizoandikwa kwa kuunganisha, data nyingi zaidi inahitajika ili kupata matokeo mazuri, si tu maandishi yasiyo na maelezo kwa ajili ya kufunza modeli ya lugha, bali pia nyenzo za mafunzo zilizo na maelezo kwa kazi inayohusika. Kwa ujumla tunahitimisha kwamba ni muhimu kujua sifa za lugha unayofanyia kazi ili kufanya maamuzi yenye taarifa za kilugha kuhusu kiasi cha data na aina ya upachikaji wa kutumia.

Ingawa matokeo haya yanatia moyo kwa kazi rahisi kiasi ya kuweka tagi za POS, huenda isiwe hivyo kwa kazi nyingine, ngumu zaidi, hasa pale ambapo sifa za semantiki zinavutia. Hata hivyo, tunatarajia kuwa mapungufu yanayoonekana katika mifano ya fastText Skipgram na GloVe yataendelea kuwepo katika mazingira yenye rasilimali chini bila kujali kazi gani yanatumika. Kwa kuzingatia hili kuna maeneo mawili ya uchunguzi wa baadaye. Kwanza, mifano hii ya kuingizwa inapaswa kutumika kwa kazi tofauti ambazo zinaweza kuhitaji sifa tofauti za lugha. Pili, muundo wa majaribio sawa unapaswa kutumika kwa mifano ya transformer, kama vile RoBERTa, na kwa kurekebisha mifano ya lugha ya kielimu (k.m. mBERT, XLM-R) ili kubaini kama matokeo yanayotishia matumaini yanayofanana yanawezekana na miundo hii ngumu zaidi.

## 7 Mapungufu

Kuna vikwazo kadhaa vya utafiti ulioripotiwa katika uwasilishaji huu, baadhi yake yameelezwa wazi katika makala, na mengine yameelezwa katika sehemu hii kwani hayatoshei vizuri ndani ya mijadala ya makala.

Upungufu mkubwa wa kwanza wa kazi unahusiana na ukweli kwamba matokeo yaliyoripotiwa kwa ajili ya kazi ya chini ya mkondo si wastani wa mbio nyingi, na kwamba hakukuwa na hyperparameter tuning uliofanywa. Kutokana na asili ya uchunguzi, yaani kutojaribu kufikia matokeo ya hali ya juu, na idadi ya marudio tofauti yanayohitajika kushughulikia kikwazo hiki, waandishi hawatarajii matokeo kubadilika kiasi kwamba hitimisho litaathiriwa kwa kiasi kikubwa. Kwa sababu hizi na athari za kimaadili za kufanya majaribio yasiyohitajika waandishi waliamua kutofanya majaribio haya ya ziada.

Pili, ingawa uwasilishaji unaripoti kuhusu lugha tatu tofauti za kiisimu, tahadhari inapaswa kuchukuliwa wakati wa kutafsiri na kutumia matokeo haya kwa lugha nyingine, hasa pale ambapo lugha hizo zinatofautiana kwa kiasi kikubwa na zile zilizoelezwa katika makala, kama vile kwa mfano lugha za Dravidian na Sino-Tibetan.

Mwisho, matokeo ya uwasilishaji huu yanalenga hasa kazi rahisi ya kuweka tagi za POS, na uchunguzi zaidi juu ya matokeo ya makala hii katika kazi changamano zaidi za NLP ni muhimu ili kuunga mkono matokeo haya.

## Shukrani

Kazi hii iliwezekana kwa msaada wa kifedha wa Kituo cha Kitaifa cha Teknolojia ya Lugha ya Binadamu, mpango wa Wizara ya Michezo, Sanaa na Utamaduni ya Afrika Kusini. Waandishi pia wangependa kumshukuru Martin Puttkammer kwa maoni wakati wa uandishi na marekebisho ya kazi hii.

## Maelezo

1 https://corpora.uni-leipzig.de/en

2 https://commoncrawl.org

a Tafadhali kumbuka kuwa data hii ilichukuliwa sampuli kutoka kwa korasi kubwa zaidi ya tokeni milioni 430.

3 https://universaldependencies.org/u/pos/

4 Angalia Jedwali 3 katika nyongeza kwa maelezo zaidi.

5 https://github.com/flairNLP/flair

6 https://hlt.nwu.ac.za/

7 https://fasttext.cc/docs/en/crawl-vectors.html

8 Maelezo ya kina juu ya uchambuzi wa makosa ya lugha yanaweza kupatikana katika meza 4, 5 na 6 katika nyongeza.

## Marejeo

Alan Akbik, Tanja Bergmann, Duncan Blythe, Kashif Rasul, Stefan Schweter, and Roland Vollgraf. 2019. FLAIR: An easy-to-use framework for state-of-the-art NLP. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics (Demonstrations), pages 54-59, Minneapolis, Minnesota. Association for Computational Linguistics.

Alan Akbik, Duncan Blythe, and Roland Vollgraf. 2018. Contextual string embeddings for sequence labeling. In Proceedings of the 27th International Conference on Computational Linguistics, pages 1638-1649, Santa Fe, New Mexico, USA. Association for Computational Linguistics.

Jesujoba O. Alabi, David I. Adelani, Marius Mosbach, and Dietrich Klakow. 2022. Adapting pre-trained language models to African languages via multilingual adaptive fine-tuning. In Proceedings of the 29th International Conference on Computational Linguistics, pages 4336-4349, Gyeongju, Republic of Korea. International Committee on Computational Linguistics.

Laith Alzubaidi, Jinglan Zhang, Amjad J. Humaidi, Ayad Al-Dujaili, Ye Duan, Omran Al-Shamma, J. Santamaría, Mohammed A. Fadhel, Muthana Al-Amidie, and Laith Farhan. 2021. Review of deep learning: concepts, CNN architectures, challenges, applications, future directions. Journal of Big Data, 8(53).

Piotr Bojanowski, Edouard Grave, Armand Joulin, and Tomas Mikolov. 2017. Enriching word vectors with subword information. Transactions of the Association for Computational Linguistics, 5:135-146.

Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume Wenzek, Francisco Guzmán, Edouard Grave, Myle Ott, Luke Zettlemoyer, and Veselin Stoyanov. 2020. Unsupervised cross-lingual representation learning at scale. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 8440-8451, Online. Association for Computational Linguistics.

Jacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. 2019. BERT: Pre-training of deep bidirectional transformers for language understanding. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers), pages 4171-4186, Minneapolis, Minnesota. Association for Computational Linguistics.

Sibonelo Dlamini, Edgar Jembere, Anban Pillay, and Brett van Niekerk. 2021. isiZulu word embeddings. In 2021 Conference on Information Communications Technology and Society (ICTAS), pages 121-126. IEEE.

Roald Eiselen and Martin Puttkammer. 2014. Developing text resources for ten South African languages. In Proceedings of the Ninth International Conference on Language Resources and Evaluation (LREC'14), pages 3698-3703, Reykjavik, Iceland. European Language Resources Association (ELRA).

Tanja Gaustad and Martin Puttkammer. 2022. Linguistically annotated dataset for four official South African languages with a conjunctive orthography: isiNdebele, isiXhosa, isiZulu, and Siswati. Data in Brief, 41.

Dirk Goldhahn, Thomas Eckart, and Uwe Quasthoff. 2012. Building large monolingual dictionaries at the Leipzig corpora collection: From 100 to 200 languages. In Proceedings of the Eighth International Conference on Language Resources and Evaluation (LREC'12), pages 759-765, Istanbul, Turkey. European Language Resources Association (ELRA).

Ridewaan Hanslo. 2021. Evaluation of neural network transformer models for named-entity recognition on low-resourced languages. In 16th Conference on Computer Science and Intelligence Systems (FedCSIS), pages 115-119. IEEE.

Michael A. Hedderich, David Adelani, Dawei Zhu, Jesujoba Alabi, Udia Markus, and Dietrich Klakow. 2020. Transfer learning and distant supervision for multilingual transformer models: A study on African languages. In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), pages 2580-2591, Online. Association for Computational Linguistics.

Nuette Heyns and Etienne Barnard. 2020. Optimising word embeddings for recognised multilingual speech. In 1st Southern African Conference for Artificial Intelligence Research, pages 102-116. Southern African Conference for Artificial Intelligence Research.

Justin Hocking. 2014. Language identification for South African languages. In Annual Pattern Recognition Association of South Africa and Robotics and Mechatronics International Conference (PRASA-RobMech). PRASA.

Pratik Joshi, Sebastin Santy, Amar Budhiraja, Kalika Bali, and Monojit Choudhury. 2020. The state and fate of linguistic diversity and inclusion in the NLP world. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 6282-6293, Online. Association for Computational Linguistics.

Diksha Khurana, Aditya Koli, Kiran Khatter, and Sukhdev Singh. 2023. Natural language processing: state of the art, current trends and challenges. Multimedia Tools and Applications, 82:3713-3744.

Melinda Loubser and Martin Puttkammer. 2020. Viability of neural networks for core technologies for resource-scarce languages. Information, 11(1):41.

Louis Jacobus Louwrens and George Poulos. 2006. The status of the word in selected conventional writing systems - the case of disjunctive writing. Southern African Linguistics and Applied Language Studies, 24(3):389-401.

Vukosi Marivate, Tshephisho Sefara, Vongani Chabalala, Keamogetswe Makhaya, Tumisho Mokgonyane, Rethabile Mokoena, and Abiodun Modupe. 2020. Investigating an approach for low resource language dataset creation, curation and classification: Setswana and Sepedi. In Proceedings of the first workshop on Resources for African Indigenous Languages (RAIL), pages 15-20, Marseille, France. European Language Resources Association (ELRA).

Cindy McKellar. 2022a. Autshumato monolingual Afrikaans corpus. https://hdl.handle.net/20.500.12185/580. South African Centre for Digital Language Resources (SADiLaR).

Cindy McKellar. 2022b. Autshumato monolingual isiZulu corpus. https://hdl.handle.net/20.500.12185/581. South African Centre for Digital Language Resources (SADiLaR).

Cindy McKellar. 2022c. Autshumato monolingual Sepedi corpus. https://hdl.handle.net/20.500.12185/582. South African Centre for Digital Language Resources (SADiLaR).

Tomas Mikolov, Ken Chen, Greg Corrado, and Jeffrey Dean. 2013. Efficient estimation of word representations in vector space. In 1st International Conference on Learning Representations ICLR 2013, Workshop Track Proceedings, Scottsdale, Arizona, USA.

Tumi Moeng, Sheldon Reay, Aaron Daniels, and Jan Buys. 2022. Canonical and surface morphological segmentation for Nguni languages. In Artificial Intelligence Research. Second Southern African Conference, SACAIR 2021, pages 125-139, Durban, South Africa. Springer.

Jeffrey Pennington, Richard Socher, and Christopher Manning. 2014. GloVe: Global vectors for word representation. In Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing (EMNLP), pages 1532-1543, Doha, Qatar. Association for Computational Linguistics.

Martin Puttkammer, Roald Eiselen, Justin Hocking, and Frederik Koen. 2018. NLP web services for resource-scarce languages. In Proceedings of ACL 2018, System Demonstrations, pages 43-49, Melbourne, Australia. Association for Computational Linguistics.

Martin Puttkammer and Tanja Gaustad. 2021. Linguistically enriched corpora for conjunctively written South African languages. https://hdl.handle.net/20.500.12185/546. South African Centre for Digital Language Resources (SADiLaR).

Martin Puttkammer, Martin Schlemmer, and Ruan Bekker. 2014a. NCHLT Afrikaans annotated text corpora. https://hdl.handle.net/20.500.12185/296. South African Centre for Digital Language Resources (SADiLaR).

Martin Puttkammer, Martin Schlemmer, and Ruan Bekker. 2014b. NCHLT Sepedi annotated text corpora. https://hdl.handle.net/20.500.12185/325. South African Centre for Digital Language Resources (SADiLaR).

Martin Puttkammer, Martin Schlemmer, Wikus Pienaar, and Ruan Bekker. 2014c. NCHLT Afrikaans text corpora. https://hdl.handle.net/20.500.12185/293. South African Centre for Digital Language Resources (SADiLaR).

Martin Puttkammer, Martin Schlemmer, Wikus Pienaar, and Ruan Bekker. 2014d. NCHLT isiZulu text corpora. https://hdl.handle.net/20.500.12185/321. South African Centre for Digital Language Resources (SADiLaR).

Martin Puttkammer, Martin Schlemmer, Wikus Pienaar, and Ruan Bekker. 2014e. NCHLT Sepedi text corpora. https://hdl.handle.net/20.500.12185/330. South African Centre for Digital Language Resources (SADiLaR).

Sello Ralethe. 2020. Adaptation of deep bidirectional transformers for Afrikaans language. In Proceedings of the 12th Language Resources and Evaluation Conference, pages 2475-2478, Marseille, France. European Language Resources Association.

Mark van der Velde, Koen Bostoen, Derek Nurse, and Gérard Philippson, editors. 2022. The Bantu Languages, 2nd edition. Routledge.

## A Kiambatisho

p11-01.png

Jedwali la 3: Matokeo kamili kwa Kiafrikana, Sesotho sa Leboa na isiZulu kwa aina zote za embeddings zenye ukubwa tofauti wa data ya pembejeo kwa kutumia seti iliyopunguzwa ya tagi za POS

## A.2 Majedwali ya Uchambuzi wa Lugha wa POS

p11-02.png

Jedwali 4: Uchambuzi wa makosa ya lugha kwa POS ya Afrikaans

p12-01.png

Jedwali 5: Uchambuzi wa makosa ya lugha kwa POS ya isiZulu

p12-02.png

Jedwali 6: Uchambuzi wa makosa ya lugha kwa POS ya Sesotho sa Leboa
