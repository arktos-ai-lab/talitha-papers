> Machine translation (sw) of "Izindaba-Tindzaba: Machine learning news categorisation for Long and Short Text for isiZulu and Siswati" by Andani Madodonga, Vukosi Marivate, Matthew Adendorff, https://upjournals.up.ac.za/index.php/dhasa/article/view/4449, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## Izindaba-Tindzaba: Uainishaji wa habari kwa kutumia ujifunzaji wa mashine kwa Maandishi Marefu na Mafupi kwa isiZulu na Siswati

Andani Madodonga, Vukosi Marivate, Matthew Adendorff

**Taasisi**  
Madodonga, Andani  
Department of Computer Science, University of Pretoria, South Africa  
  
Marivate, Vukosi  
Department of Computer Science, University of Pretoria, South Africa  
  
Adendorff, Matthew  
Open Cities Lab  


## Muhtasari

Lugha za Asili za Afrika Kusini zinaainishwa kama lugha zenye rasilimali chache. Kwa hivyo, ni muhimu kujenga rasilimali za lugha hizi ili ziweze kunufaika na maendeleo katika uwanja wa uchakataji wa lugha asilia. Katika kazi hii, lengo lilikuwa kuunda seti za data za habari zilizofafanuliwa kwa lugha asilia za isiZulu na Siswati kulingana na kazi za uainishaji wa mada za habari na kuwasilisha matokeo kutoka kwa mifano hii ya msingi ya uainishaji. Kutokana na uhaba wa data kwa lugha hizi asilia za Afrika Kusini, seti za data zilizoundwa ziliongezwa na kusampuliwa kupita kiasi ili kuongeza ukubwa wa data na kushinda usawa wa uainishaji wa darasa. Kwa jumla, mifano minne tofauti ya uainishaji ilitumika ambayo ni Logistic regression, Naive bayes, XGBoost na LSTM. Mifano hii ilifunzwa kwa viambatanisho vitatu tofauti vya maneno ambavyo ni mfuko wa maneno, TFIDF na word2vec. Matokeo ya utafiti huu yalionyesha kuwa XGBoost, Logistic Regression na LSTM, zilizofunzwa kutoka word2vec zilifanya vizuri zaidi kuliko michanganyiko mingine.

## Maneno Muhimu

Lugha za Asili za Afrika Kusini, Lugha zenye Rasilimali Chache, Ujalizaji data, Uainishaji wa Mada, Uainishaji wa Habari

## 1 Utangulizi

Uchakataji wa Lugha Asilia (NLP) ni tawi dogo la akili bandia, isimu na sayansi ya kompyuta linalozingatia kuwezesha kompyuta kuchakata lugha asilia (Dialani 2020). Mojawapo ya visa ambapo NLP imekuwa na manufaa kwa watu ni pale inapotumika kwa tafsiri ya mashine, ikitekeleza kazi ya kutafsiri kutoka lugha moja hadi nyingine. Katika kisa hiki, NLP husaidia kompyuta au mashine kujaribu ubadilishaji kutoka lugha moja hadi nyingine. NLP pia inaweza kusaidia katika kujifunza na kutabiri hisia/maoni kutoka kwa sentensi au maandishi. Uwezo huu wa NLP unatumiwa na makampuni kuelewa jinsi wateja wanavyohisi na maoni yao kuhusu bidhaa na huduma za kampuni kupitia uchambuzi wa machapisho na maoni yao kwenye mitandao ya kijamii. Zaidi ya hayo, chatbots zinazotumika katika eneo la huduma za wateja ni moja ya mifano ya matumizi ya NLP (Dialani 2020). Chatbots za muktadha na Msaidizi wa Maandishi ya Virtual sasa hutumiwa sana lakini kwa ujumla wanaelewa idadi ndogo ya lugha, kama vile Kiingereza. Lugha za asili za Afrika Kusini hazina rasilimali za kutosha kutumika kutengeneza Chatbots na Virtual Text Assistant. Kwa hiyo, rasilimali za lugha za asili zinahitaji kuundwa ili ziweze kutumika kujenga mawakala wa programu wanaoelewa lugha za asili za Afrika Kusini (Duvenhage et al. 2017).

Afrika Kusini ni nchi yenye lugha nyingi ikiwa na lugha kumi na moja (mbili kati ya hizo ni za Kizungu na tisa ni Lugha za Afrika); Lugha za Afrika ni Sepedi, Sesotho, Setswana, Siswati, Tshivenda, Xitsonga, isiZulu, isiNdebele na isiXhosa na kwa upande mwingine, lugha za Kizungu ni Kiingereza na Kiafrikana. Ni muhimu kutambua kwamba lugha hizi ni rasmi nchini Afrika Kusini (Alexander 2021). Nchini Afrika Kusini, tuna changamoto na Lugha za Afrika tisa kwa sababu zina uhaba wa rasilimali. Kuna upungufu wa kumbukumbu zilizoratibiwa na zilizofafanuliwa ili kuziwezesha kufaidika na uchakataji wa lugha asilia. Kwa hiyo, madhumuni ya utafiti huu ni kulenga hasa uundaji na ufafanuzi wa kumbukumbu kwa isiZulu na Siswati na kutekeleza kazi za uainishaji wa mada kwenye data.

## 2 Vipengele Muhimu vya Uchakataji wa Lugha Asilia

Utandawazi na ongezeko la mawasiliano ya kidijitali vimezua hitaji la mifumo ya NLP inayowezesha mawasiliano ya haraka kati ya watu wanaozungumza lugha tofauti. Hata hivyo, baadhi ya lugha hazipo katika mifumo hii. Kwa mfano, kuna takriban lugha 7000 zinazozungumzwa duniani na nyingi kati yazo bado hazijajumuishwa katika mifumo ya NLP, hasa kwa sababu hazina kumbukumbu zilizotambulishwa ili kujenga mifumo hiyo ya NLP (Baumann & Pierrehumbert 2014). Lugha hizi zenye rasilimali chache au zisizo nazo kabisa ni lugha zenye rasilimali chache (Whyatt & Pavlović 2019). Rasilimali za lugha zinajumuisha (lakini hazikomei kwa) kumbukumbu zilizotambulishwa na teknolojia za msingi. Mifano ya teknolojia za msingi ni pamoja na vifaa vya kurejesha maneno kwenye umbo la msingi, kitambulishi cha aina za maneno na vitenganishi vya mofolojia (Eiselen & Puttkammer 2014). Kwa upande mwingine, lugha zenye rasilimali nyingi ni zile zenye rasilimali nyingi zinazohitajika kujenga teknolojia ya NLP (Xu & Fung 2013).

Lugha zenye rasilimali nyingi zinajumuisha Kiingereza, Kifaransa, Kifini, Kiitaliano, Kijerumani, Kimandarini, Kijapani, n.k. (Bonab et al. 2019, Xu & Fung 2013) na lugha zenye rasilimali chache zinajumuisha lugha kama vile isiZulu, isiXhosa, Siswati n.k. (Bosch et al. 2008). Utafiti, wa Eiselen & Puttkammer (2014), ulilenga lugha zenye rasilimali chache, yaani, isiZulu na Siswati; ulisema kwamba kopa zilizo na maelezo ni mojawapo ya vitu ambavyo lugha zenye rasilimali chache hazina. Kwa hivyo, seti za data za isiZulu na Siswati zinahitaji kuwekewa maelezo, kama sehemu ya mchakato wa kuzifanya lugha hizi zipatikane kwa NLP na kwa kuzitajirisha lugha hizi mbili. Hsueh et al. (2009) anafafanua uwekaji maelezo wa data kama mchakato wa kuweka lebo kwenye seti ya data, hatua muhimu wakati wa kujenga mifano ya ujifunzaji wa mashine. Stenetorp et al. (2012) walisema kwamba uwekaji maelezo wa data kwa mikono ni kazi muhimu zaidi, inayotumia muda mwingi, ya gharama kubwa, na yenye kuchosha kwa watafiti wa NLP. Kwa hivyo, zana za kiotomatiki zinatengenezwa ili kufanya uwekaji maelezo huu.

Ukosefu wa data iliyoratibiwa na iliyo na maelezo unazuia mchakato wa kupambana na uhaba wa rasilimali kwa lugha zenye rasilimali chache katika nafasi ya NLP (Niyongabo et al. 2020). Isitoshe, mbinu za NLP mara nyingi haziwezi kuhamishwa au kutafsiriwa katika lugha hizo bila kutumia mfumo huo wa kompyuta (Niyonga et al. 2020). Niyongabo et al. (2020) walikusanya seti za data za Lugha mbili za Afrika zinazohusiana kwa karibu - Kirundi na Kinyarwanda kutoka vyanzo viwili tofauti. Jumla ya makala 21,268 na 4,612 ziliorodheshwa kwa lugha ya Kinyarwanda na lugha ya Kirundi. Seti hizo mbili za data zilipitia mchakato wa usafishaji uliohusisha uondoaji wa herufi maalum za lugha na maneno ya kusimamisha. Vyanzo vilikuwa magazeti na tovuti. Seti hizi za data zilifafanuliwa, kwa kuzingatia kichwa na maudhui ya makala zilizomo, katika kategoria zifuatazo: Siasa; Michezo; Uchumi; Afya, Burudani; Historia; Teknolojia; Utalii; Utamaduni; Mitindo; Dini, Mazingira; Elimu; na Mahusiano (Rakholia & Saini 2016). Kwa hiyo, kazi inayofanana sana ilitekelezwa katika kazi hii kama sehemu ya uundaji wa rasilimali za lugha.

## 2.1 Mbinu za uzalishaji wa data kwa lugha zenye rasilimali chache

Mbinu iliyopo inayotumika kupunguza changamoto za data za lugha zenye rasilimali chache, ni mbinu ya tafsiri ya lugha. Yaani lugha yenye rasilimali chache hutafsiriwa katika lugha yenye rasilimali nyingi (Tang et al. 2018). Hata hivyo, katika hali nyingi, mbinu hii inakumbwa na upendeleo wa lugha na inaweza isiwezekane kutekelezwa katika maisha halisi (Tang et al. 2018). Wakati mwingine tafsiri ya moja kwa moja inaweza isiwezekane au isiwe sahihi kutokana na tofauti za lugha. Kwa hivyo, data iliyotafsiriwa itahitaji usindikaji wa mikono baadaye, jambo ambalo ni la kuchosha na linalotumia muda mwingi. Kuunda data kwa mikono kwa lugha zenye rasilimali chache kunatumia muda mwingi lakini ni mbinu nzuri, zaidi ya hayo, kunaleta upendeleo mdogo wa lugha na ni sahihi zaidi kuliko seti za data zilizotafsiriwa (Shamsfard n.d.).

Ujifunzaji kati ya lugha na ujifunzaji hamishi ni mojawapo ya michanganyiko ya mbinu zinazotumiwa mara kwa mara au kupendelewa katika NLP kutokana na kasi na ufanisi wake (Shamsfard n.d.). Hii inasisitiza zaidi kwa nini lugha zote lazima ziwe na rasilimali za NLP kama vile data iliyo na maelezo ili kuepuka uigaji wa data ambao una athari zisizofaa.

Ujalizaji data ni mbinu inayozalisha nakala (au data ya kipekee) ya data kwa kubadilisha kidogo data iliyopo (Duong & Nguyen-Thi 2021). Inaongeza ukubwa wa data ndogo ya mafunzo kwa njia zinazoboresha utendaji wa modeli (Abonizio & Junior 2020). Utendaji wa modeli unategemea sana ubora na ukubwa wa data ya mafunzo. Ujalizaji data hushughulikia suala la data ndogo ya mafunzo inayosababisha modeli kupoteza uwezo wake wa kujumlisha (Kobayashi 2018).

Kazi ya Marivate et al. (2020) ilikuwa na ukubwa mdogo wa data ya lugha asilia za Sepedi na Setswana, na ilijumuisha ujalizaji wa muktadha unaotegemea upachikaji wa maneno ili kuongeza seti ya data iliyotumika kufunza modeli za uainishaji. Kila seti ya data ya mafunzo ilijazwa mara 20 huku seti ya data ya majaribio ikibaki bila kubadilishwa. Katika utafiti wao, data mpya iliyoundwa ilibadilisha maneno (kulingana na muktadha) katika sentensi. Hivyo basi sentensi mpya iliundwa kama matokeo ya kutumia Ujalizaji Data wa Kimuktadha. Zaidi ya hayo, Ujalizaji data uliboresha utendaji wa viainishaji (Marivate et al. 2020). Katika utafiti huu wa sasa, Ujalizaji data uleule (ujalizaji unaotegemea upachikaji wa maneno) ulifanywa kwenye seti ya data ya Siswati na isiZulu ili kuongeza ukubwa wa data.

## 2.2 Kukabiliana na usawa wa data

Mbinu ya Uongezaji Nafasi wa Wachache Sanisi (SMOTE) ni mbinu nyingine inayoweza kupitishwa wakati ujifunzaji unafanywa kwenye seti ya data isiyo na usawa, kwa kuwa inatatua tatizo la usawa wa darasa (Fernández et al. 2018). SMOTE hufanya kazi kwa kuzalisha mifano sanisi kupitia kuingiza thamani tofauti (maneno) katika darasa la wachache, thamani hizo huchaguliwa kwa nasibu kutoka kwa ujirani uliobainishwa ndani ya nafasi ya vipengele. Darasa la wachache huchaguliwa, kisha hupata majirani wa karibu wa k wa darasa hilohilo la wachache na kwa hiyo hutumia majirani hao wa k kuunda mifano mipya sanisi (Fernández et al. 2018).

## 2.3 Kazi Zinazohusiana

Miundo ya Ujifunzaji elekezwa hufanya vizuri zaidi kwenye seti kubwa za data zilizo na lebo, jambo ambalo huleta changamoto kwa lugha zenye rasilimali chache kwani hazina data ya kutosha na kuweka lebo kwenye data kunaweza kuwa ghali (Fang & Cohn 2017). Tafiti nyingi za awali zililenga kuunda kopora sambamba kati ya lugha zenye rasilimali chache na zile zenye rasilimali nyingi, lakini kopora sambamba mara nyingi hazipatikani kwa baadhi ya lugha zenye rasilimali chache (Fang & Cohn 2017). Kazi ya Zoph et al. (2016) ilibainisha lugha zenye rasilimali chache na kuchunguza wazo la ujifunzaji wa mbali kwenye tafsiri ya mashine. Kwa kuwa Kiingereza na Kifaransa ni lugha zenye rasilimali nyingi, lugha hizo mbili zilifunza tafsiri ya mashine ya neva (NMT) (Zoph et al. 2016). Mfano wa tafsiri ya mashine ya neva (NMT) wa Kiingereza-Kifaransa ulifunzwa awali. Baadaye, mfano wa NMT ulianzisha mfano mwingine wa NMT utakaotumika kwa jozi ya lugha yenye rasilimali chache na yenye rasilimali nyingi (k.m. Kiuzbeki-Kiingereza) (Zoph et al. 2016), hivyo kutumia Ujifunzaji hamishi. Katika kisa hiki, lugha zenye rasilimali chache zilizochunguzwa kwa ajili ya uhamishaji zilikuwa Kiuzbeki, Kihausa, Kituruki na Kiurdu. Ujifunzaji hamishi ulionyeshwa kuboresha BLEU (bilingual evaluation understudy) kwa tafsiri ya mashine ya neva yenye rasilimali chache (Zoph et al. 2016).

Kazi ya Nguyen & Chiang (2017) ilichunguza Ujifunzaji hamishi kati ya lugha mbili zenye rasilimali chache, Uturuki na Kiuzbeki, kwa kwanza kuoanisha kila lugha na Kiingereza na kisha kuzalisha data sambamba. Kisha, gawanya maneno kwa kutumia Bytes Pair Encoding (BPE) ili kuongeza hadi kiwango cha juu vyanzo vinavyoingiliana (Nguyen & Chiang 2017). Mfano na upachikaji wa neno hufunzwa kwenye jozi ya lugha ya kwanza (Uturuki-Kiingereza) na kisha vigezo sawa vya mfano na upachikaji wa maneno vilihamishwa hadi kwenye mfano mwingine uliofunza jozi ya lugha ya pili (Kiuzbeki-Kiingereza). Mbinu hii iliboresha BLEU kwa 4.3% (Nguyen & Chiang 2017).

Seti za data za lugha za Afrika Kusini zenye rasilimali chache, isiZulu iliyokusanywa kutoka isolezwe na Kituo cha Kitaifa cha Teknolojia ya Lugha ya Kibinadamu (www.sadilar.org); na Sepedi iliyokusanywa kutoka Kituo cha Kitaifa cha Teknolojia ya Lugha ya Kibinadamu zilitumika kutathmini utendaji wa miundo ya msamiati wazi kwenye seti ndogo za data, miundo iliyotathminiwa inajumuisha n-gramu, LSTM, RNN, FFNN, na Transformer. Utendaji wa mifano ilitathminiwa kwa kutumia byte pair encoding (BPE). RNN ilifanya vizuri zaidi kuliko miundo mingine kwenye seti zote za data za isiZulu na Sepedi (Mesham et al. 2021). Nyoni & Bassett (2021) walichunguza uwezo wa tafsiri ya mashine kutoka kwa ujifunzaji wa zero-shot, Ujifunzaji hamishi na ujifunzaji wa lugha nyingi kwenye lugha mbili za Afrika Kusini, ambazo ni isiZulu na isiXhosa; na lugha moja ya Zimbabwe, yaani Shona. Seti za data zilikuwa katika jozi ya lugha (matini sambamba), yaani, Kiingereza-hadi-Shona, Kiingereza-hadi-Zulu, Kiingereza-hadi-Xhosa na Zulu-hadi-Xhosa, huku jozi ya Kiingereza-hadi-Zulu ikiwa jozi lengwa kwa kuwa ina seti ndogo zaidi za data (jozi ya sentensi). Ujifunzaji hamishi na ujifunzaji wa zero-shot haukufanya vizuri kuliko muundo wa lugha nyingi ambao ulitoa alama ya Bleu ya 18.6 kwa jozi ya Kiingereza-hadi-Zulu. Aidha, matokeo haya yanatoa njia ya kuendeleza na kuboresha mbinu za tafsiri za rasilimali chache (Nyoni & Bassett 2021).

Kazi ya Marivate et al. (2020) ilijaribu kushughulikia suala la ukosefu wa miongozo wazi kwa lugha zenye rasilimali chache katika suala la kukusanya na kuhifadhi data kwa matumizi maalum katika kikoa cha uchakataji wa lugha asilia. Katika uchunguzi wao, seti mbili za data za vichwa vya habari zilizoandikwa kwa Sepedi na Setswana zilikusanywa, zikahifadhiwa, zikawekwa maelezo, na kuingizwa kwenye mifano ya uainishaji ya ujifunzaji wa mashine ili kufanya uainishaji wa maandishi. Seti za data ziliwekwa maelezo kwa njia ya kuainisha makala katika kategoria zifuatazo kulingana na muktadha: Kisheria; Habari za Jumla; Michezo; Siasa; Habari za Trafiki; Shughuli za Jamii; Uhalifu; Biashara; Mambo ya Nje (Marivate et al. 2020). Kipimo cha tathmini kilikuwa F1-score, ambacho ni kipimo cha utendaji wa mfano. Mojawapo ya mifano, Xgboost, ilifanya vizuri ikilinganishwa na mifano mingine (Marivate et al. 2020).

## 3 Kutengeneza mifano ya uainishaji wa habari kwa lugha za isiZulu na Siswati

Katika sehemu hii tunajadili michakato ya ukusanyaji wa data na usafishaji pamoja na mbinu ya kujenga mifano ya uainishaji.

## 3.1 Ukusanyaji wa Data, Usafishaji na Uwekaji wa Maelezo

Tunajadili mchakato wa awali wa ukusanyaji wa data ya habari na uwekaji wa maelezo. Tunajadili zaidi mchakato wa ukusanyaji wa data wa seti kubwa ya data iliyotumika kujenga uwakilishi wetu wa maneno.

## 3.1.1 Ukusanyaji wa data za habari na ufafanuzi

Data za habari za isiZulu zilikusanywa kutoka Isolezwe, ambalo ni gazeti la ndani la lugha ya Kizulu. Makala ya habari yaliyochapishwa mtandaoni kwenye tovuti ya Isolezwe (http://www.isolezwe.co.za) yalichambuliwa na kuhifadhiwa katika faili ya csv kwa ajili ya uchakataji zaidi. Seti ya data ya Siswati (vichwa vya habari) ilikusanywa kutoka kwa mtangazaji wa umma wa Afrika Kusini, yaani, ukurasa wa Facebook wa SABC news LigwalagwalaFM (https://www.facebook.com/ligwalagwalafm/). Data za Siswati pia zilichambuliwa na kuhifadhiwa kwenye faili ya csv. Mwisho, ili kujenga uwakilishi wa maneno, seti nyingine za data za isiZulu na Siswati zilikusanywa kutoka SADILAR (www.sadilar.org) na LeipzigCorpus (https://wortschatz.uni-leipzig.de) kwa madhumuni ya kujumlisha vyema uwakilishi wa maneno. Tulikusanya 752 (makala kamili na vichwa) katika isiZulu na kukusanya vichwa 80 vya habari vya Siswati.

Baada ya mchakato wa ukusanyaji wa data, tulifanya kazi ya kuainisha habari kwa kutumia Kategoria za Habari za Baraza la Kimataifa la Mawasiliano ya Vyombo vya Habari (IPTC) (au misimbo)[1]. Kategoria zilizotumika zilikuwa: 1. maafa, ajali na tukio la dharura, 2. uchumi, biashara na fedha, 3. elimu, 4. mazingira, 5. afya, 6. maslahi ya binadamu, 7. kazi, 8. mtindo wa maisha na burudani, 9. siasa, 10. dini na imani, 11. sayansi na teknolojia, 12. jamii, 13. michezo, 14. hali ya hewa, 15. sanaa, utamaduni, burudani na vyombo vya habari, 16. uhalifu, sheria na haki, 17. migogoro, vita na amani. Tunatoa data, na maelezo ya data na taarifa ya data[2] [3]. Mfano wa makala ya isiZulu iliyofafanuliwa umeonyeshwa hapa chini:

## Siasa

UMENGAMELI we-ANC uMnuz Cyril Ramaphosa ugqugquzele abantu basePort Shepstone nezindawo ezakhele leli dolobha ukuthi bagcwalise iMoses Mabhida Stadium lapho ezothula khona umyalezo wakhe weJanuary 8 ngoMgqibelo aphinde athule nomhlahlandela weqembu wokuheha abavoti njengoba kuyiwa okhethweni. URamaphosa ehambisana nabanye abaholi be-ANC esifundazweni uhambele kule ndawo izolo enxenxa abantu ukuthi batheleke ngobuningi kulo mgubho weqembu. Uphinde wathembisa ukuthi uzothula uhlelo lwakhe lokuthuthukisa izwe.

Mgawanyo wa kategoria za habari za isiZulu (makala na vichwa) na vichwa vya habari vya Siswati umeonyeshwa hapa chini, ilibainika kuwa seti za data zinakabiliwa na tatizo la ukosefu wa usawa wa kategoria, ukubwa mdogo wa data na maandishi mafupi (vichwa vya habari vya isiZulu na Siswati pekee). Kwa hiyo, mbinu za kuongeza sampuli kupita kiasi, SMOTE na Ujalizaji data zilitumika ili kupunguza tatizo la ukosefu wa usawa wa kategoria na pia kuongeza ukubwa wa data.

p05-01.png

Kielelezo 1: Mgawanyo wa Awali wa Kategoria za isiZulu

p05-02.png

Kielelezo 2: Mgawanyo wa Awali wa Ngeli za Kiswati

Kwa uigaji bora, kategoria za ngeli zenye uchunguzi mdogo tuliziondoa, zikabaki kategoria zifuatazo: 1. uhalifu, sheria na haki, 2. uchumi, biashara na fedha, 3. elimu, 4. siasa, 5. jamii kwa isiZulu na 1. uhalifu, sheria na haki, 2. sanaa, utamaduni, burudani na vyombo vya habari, 3. elimu, 4. maslahi ya binadamu, 5. jamii ya Siswati. Kwa kuwa idadi ya kategoria za darasa imeshuka hadi kategoria 5, saizi ya seti ya data ya habari pia ilishuka hadi 563 (makala ya habari na vichwa) kwa isiZulu na 68 (vichwa vya habari) kwa Kiswati. Seti za data za mwisho zilisafishwa na kisha kutumika kujenga mifano ya uainishaji, hata hivyo, kabla ya ujenzi wa mfano, uwakilishi wa maneno uliundwa kwa kutumia seti kubwa zaidi za data.

## 3.2 Maandalizi/Usafishaji wa Data

Seti zote za data zilizokusanywa katika kazi hii zilikuwa na kelele kama vile herufi moja, nafasi tupu, herufi zilizosimbwa, maneno yasiyo na maana, na herufi maalum. Kelele ilibidi iondolewe kabla seti za data hazijalishwa kwenye mifano. Kelele hizi zote kwenye seti za data ziliondolewa. Hapa chini tunaelezea kila sehemu ya hatua ya usafishaji iliyofuatwa:

Herufi moja hubeba maana ndogo, kwa hivyo ziliondolewa kutoka kwenye seti za data.

Kulikuwa na matukio ambapo kuna nafasi nyingi kati ya maneno mawili, hivyo nafasi hizo zilibadilishwa na nafasi moja.

Kulikuwa na baadhi ya herufi/maneno ambayo hayakuwa yamesimbwa kwa ASCII kisha herufi hizo zilisimbuliwa kurudi kwenye ASCII.

Herufi maalum hurejelea herufi kama vile &%$ na hazikubaliwi na mifano. Hivyo pia ziliondolewa.

Data ilikuwa na mchanganyiko wa herufi ambao haufanyi neno lolote lililopo la isiZulu/Siswati. Maneno kama vile 'udkt','unksz','unkk'

. Kulingana na vigezo hivi, pia yaliondolewa ili kurahisisha mkusanyiko, na matokeo yake, kuboresha uchambuzi.

Kwa kuwa seti za data hazina kelele, kila herufi katika seti za data iliwekwa kuwa herufi ndogo, na kusababisha seti za data safi zitakazotumika katika ujenzi wa mifano ya ujifunzaji wa mashine.

## 3.2.1 Uwakilishi wa Maneno

Ilielezwa hapo juu kwamba seti kubwa zaidi za data zilizokusanywa kutoka SADILAR na Leipzig Corpus kwa kila lugha zilitumika kwa ajili ya uundaji wa uwakilishi wa maneno (vektaiza na embeddings). Vektaiza zilizofunzwa awali ziliundwa, na hivyo kuwezesha fursa ya kujenga waainishaji wenye uwezo mzuri wa kujumlisha katika siku zijazo. Kwa hiyo, kutoka kwenye kopa zilizokusanywa kwa kila lugha, tuliunda vektaiza zifuatazo: Mfuko wa Maneno, TFIDF na Word2vec (Mikolov et al. 2013).

Jedwali 1: Ukubwa wa Kopa za Vektaiza kwa idadi ya tokeni

p06-01.png

## 3.3 Miundo ya Uainishaji wa Habari

Tulichagua kiholela algoriti chache za uainishaji ili kufunza miundo ya kufanya uainishaji wa mada za habari kwa seti za data za isiZulu na Siswati. Algoriti zilizochaguliwa ni Logistic Regression, XGBoost, Naive Bayes na LSTM.

Tulifanya uainishaji kwenye seti za data asili, kisha tukatumia mbinu za sampuli za ziada, yaani, Ujalizaji data na SMOTE, ili kutatua tatizo la ukosefu wa usawa wa madarasa na kuongeza ukubwa wa data. Mifano ya uainishaji ilitekelezwa tena kwenye seti za data zilizoimarishwa na za SMOTE.

## 4 Majaribio na Matokeo

Katika sehemu hii tunajadili matokeo yaliyopatikana kutoka kwa majaribio yaliyofanywa, yaani, matokeo kutoka kwa mchanganyiko mbalimbali wa uwakilishi wa maneno na mifano ya uainishaji kwenye seti za data za isiZulu na Siswati. Hata hivyo, matokeo yaliyowasilishwa hapa ni ya msingi, kwani kazi hii inatoa tu miongozo ya uundaji wa rasilimali za lugha zenye rasilimali chache.

## 4.1 Mpangilio wa Majaribio

Upeo wa ukubwa wa tokeni wa 20 000 ulitumika kwa vektaiza vyote viwili vya mfuko wa maneno na TFIDF, ambapo kwa Word2vec tulitumia ukubwa 300. Kwa kila moja ya mifano 4 ya uainishaji, uthibitishaji mtambuka wa mikunjo 5 ulitumika wakati wa mafunzo ya mfano. Kwa kuwa tunaunda mifano ya msingi na kufanya kazi kwenye seti ndogo za data (hazitoshi kugawanywa katika seti za mafunzo, uthibitishaji na majaribio), basi uboreshaji wa vigezo haukufanywa katika kazi hii.

## 4.1.1 Majaribio ya Msingi

Katika majaribio ya msingi, tunafunza mifano ya uainishaji kwa kutumia uthibitishaji mtambuka wa mara 5 kwenye seti za data asili za isiZulu na Siswati na kuwasilisha utendaji wa mifano kwa kila seti ya data. Matokeo yanaonyesha kuwa mfano wa word2vec na LSTM ulifanya vizuri sana katika seti zote za data ikilinganishwa na mifano mingine. Majedwali hapa chini yanaonyesha matokeo ya mifano ya uainishaji yaliyopatikana kutoka kwa seti za data asili.

Jedwali la 2: Utendaji wa Mfano wa Seti ya Data Asili ya Makala za isiZulu

p06-02.png

Jedwali 3: IsiZulu Titles Asili Dataset Model Utendaji

p07-01.png

Jedwali 4: Utendaji wa Mfano wa Seti ya Data ya Asili ya Majina ya Kiswati

p07-02.png

## 4.1.2 Ongezeko

Ujalizaji data ni mbinu inayotumika kuongeza ukubwa wa data ili kuboresha utendaji wa viainishaji vya ujifunzaji wa mashine Oh et al. (2020). Njia ya kawaida zaidi ya kujaliza data ni kwa kubadilisha maneno au vishazi katika sentensi na visawe vyake ambapo kisawe hupatikana kwa kupata maneno yaliyo karibu kimaana (Zhang et al. 2015).

Seti za data za Siswati na isiZulu zilijazwa kwa kutumia mbinu ileile ambapo maneno asilia kwenye sentensi yanabadilishwa kulingana na maana yake ya kimuktadha. Ujazaji ulifanywa kwa kurejelea ufanano wa maneno kutoka kwa upachikaji wa neno wa Word2vec kama ilivyo kwa Marivate et al. (2020). Ujalizaji data uliboresha utendaji wa kila modeli kwenye seti zote za data ikilinganishwa na seti za data asilia, kwa hivyo, inabaki kuwa kazi kuchunguza ufanisi na Uthabiti wa algoriti hii ya Ujalizaji data, ambayo inaweza kufikiwa kwa kulinganisha matokeo ya algoriti kwenye seti za data zenye rasilimali na zisizo na rasilimali za kutosha.

Modeli za uainishaji zilizofunzwa kwa Word2vec zilifanya vizuri zaidi kuliko modeli zote za uainishaji zilizofunzwa kwa TFIDF na mfuko wa maneno. Kwa makala za isiZulu, mchanganyiko wa modeli ya Word2vec na XGBoost ulifanya vizuri zaidi kuliko modeli zote, ukipata alama ya f1 ya 95.21%, kwa upande mwingine, mchanganyiko wa modeli ya Word2vec na Logistic Regression ulifanya vizuri kwenye seti ya data ya vichwa vya isiZulu ukipata alama ya f1 ya 86.42%. Mwisho, mchanganyiko wa modeli ya Word2vec na LSTM ulifanya vizuri kwenye seti ya data ya vichwa vya Siswati ukipata alama ya f1 ya 93.15%. Ilionekana kuwa seti ya data ya makala za isiZulu ilipata alama ya juu ya f1 ikilinganishwa na vichwa vya isiZulu, jambo linaloeleza kuwa maandishi marefu huboresha Usahihi wa uainishaji, na pia inaangazia kuwa Logistic Regression inafanya vizuri zaidi kuliko XGBoost kwenye seti ya data ya maandishi mafupi. Inabaki kuwa kazi kuendesha ulinganisho uleule kwenye seti ya data ya Siswati, kwani haikushughulikiwa katika kazi hii kwa sababu ya ukosefu wa seti kamili ya data ya makala ya habari ya Siswati.

Jedwali 5: Utendaji wa Muundo wa Seti ya Data Iliyoongezwa ya Makala za isiZulu

p07-03.png

Jedwali 6: Utendaji wa Muundo wa Seti ya Data Iliyoongezwa ya Vichwa vya isiZulu

p07-04.png

Jedwali 7: Utendaji wa Muundo wa Seti ya Data Iliyoongezwa ya Vichwa vya Siswati

p07-05.png

## 4.1.3 SMOTE

SMOTE ni mbinu ya sampuli zaidi inayotumika kusawazisha upya seti ya mafunzo asilia kupitia uundaji wa sampuli sintetiki za darasa la wachache Fernández et al. (2018). Mbinu hii hufanya kazi kwa kuchagua darasa la wachache na jumla ya kiasi cha sampuli zaidi ili kusawazisha madarasa, kisha majirani wa k-karibu zaidi kwa darasa hilo hupatikana, kwa hivyo, kwa kurudia majirani wa k karibu zaidi huchaguliwa kwa nasibu ili kuunda vielelezo vipya Fernández et al. (2018). Mbinu hii ya sampuli zaidi ilitumika kusawazisha madarasa na kuongeza seti ya data. Kumbuka kwamba SMOTE hutumia mbinu tofauti na mbinu ya Data Augmentation iliyotolewa hapo awali.

Tulitumia SMOTE kwenye seti zetu tatu za data na kuendesha muundo wa uainishaji kwa kutumia uthibitishaji mtambuka wa sehemu 5, matokeo kutoka kwa kila seti ya data yanawasilishwa hapa chini. Kutoka kwenye majedwali hapa chini, ilionekana kuwa Word2vec ilizalisha modeli bora zaidi za uainishaji kutoka kwa seti zote tatu za data. XGBoost ilifanya vizuri katika matukio yote ikipata alama ya f1 ya 93.35%, 91.26%, 87.46% kwa seti za data za makala za isiZulu, vichwa vya isiZulu na vichwa vya Siswati mtawalia. Tuliona modeli ya XGBoost kwenye makala za isiZulu ilitatizika kutenganisha jamii na siasa kutoka kwa uhalifu, sheria na haki kwa kuwa uainishaji mwingi usio sahihi ulitokea katika kisa ambapo jamii na siasa ziliainishwa kama uhalifu, sheria na haki.

Jedwali la 8: Utendaji wa Modeli ya Seti ya Data ya SMOTE ya Makala za isiZulu

p08-01.png

## 5 Muhtasari

Tuliona kuwa Ujalizaji data ulifanya vizuri zaidi kuliko SMOTE katika matukio mawili, yaani, seti za data za makala za isiZulu na vichwa vya Siswati, ambapo SMOTE ilifanya vizuri zaidi kuliko Ujalizaji data tu katika kisa cha seti ya data ya vichwa vya isiZulu, hata hivyo, tunatumai kuchunguza tofauti ya utendaji kutoka kwa mbinu hizi za kuchukua sampuli upya na kuwa na bomba la uthibitisho ili kutoa mwongozo kuhusu mbinu gani ya kuchukua chini ya hali gani. Hata hivyo, tunawasilisha bomba la jumla lililopatikana kutoka kwa kazi hii kama msingi.

Jedwali la 9: Utendaji wa Modeli ya Seti ya Data ya SMOTE ya Vichwa vya isiZulu

p08-02.png

Jedwali la 10: Utendaji wa Modeli ya Seti ya Data ya SMOTE ya Vichwa vya Siswati

p08-03.png

Bomba lililopatikana kutokana na kazi hii lilifupishwa na kuwasilishwa katika kielelezo 3 hapa chini pamoja na mifano bora ya uainishaji inayolingana iliyowasilishwa katika jedwali 3, kielelezo 3 kinaonyesha chaguo zilizozalisha matokeo bora chini ya hali tofauti kwa seti tatu tofauti za data. Ilionekana kuwa seti za data zilizotumika zilifanana na sifa tatu tofauti, yaani, ukubwa mkubwa na maandishi marefu (Makala za isiZulu), ukubwa mkubwa na maandishi mafupi (Vichwa vya isiZulu), na ukubwa mdogo na maandishi mafupi (Siswati), aina hizi zilizalisha matokeo tofauti kutoka kwa mifano chini ya hali ileile na zinaweza kujumlishwa kama ifuatavyo:

Ikiwa ukubwa wa data ni mkubwa na una maandishi marefu basi Ujalizaji data wa Kimuktadha unapendekezwa badala ya SMOTE, na LSTM ina uwezekano wa kufanya vizuri zaidi.

p09-01.png

Ujumlishaji wa hapo juu unahusu tu uwekaji wa maneno wa Word2vec kwa kuwa ndio uliozalisha matokeo bora kutoka kwa seti zote za data ikilinganishwa na TFIDF na Mfuko wa Maneno. Inabaki kuwa kazi ya kuchunguza zaidi utendaji duni kutoka kwa TFIDF na Mfuko wa Maneno, ikiwezekana mabadiliko ya kigezo katika uainishaji yanaweza kusababisha matokeo mazuri.

Jedwali 11: Mifano Bora ya Uainishaji

p09-02.png

## 6 Hitimisho na Kazi za Baadaye

Kazi hii ilianzisha ukusanyaji na ufafanuzi wa seti za data za habari za isiZulu na Siswati. Bado kuna uhaba wa data (hasa data iliyofafanuliwa) wa lugha hizi mbili za asili, hasa Siswati. Hata hivyo, kazi hii ilifungua njia kwa watafiti wengine ambao wangependa kutumia data iliyo na maelezo kwa isiZulu na/au Siswati katika kazi za chini za mkondo za NLP.

Matokeo ya majaribio kutoka kwa mifano ya uainishaji na michanganyiko tofauti ya upachikaji wa maneno na misingi ya mfano yaliwasilishwa. Ingawa tulikuwa na kikwazo cha upatikanaji wa data, hata hivyo, hii inatoa muhtasari wa kile kinachoweza kufikiwa kwa seti ndogo za data. Seti za data za isiZulu na Siswati zilizo na maelezo zitafanywa kupatikana kwa watafiti wengine, vektaishaji zilizofunzwa awali zitafunguliwa kwa watafiti wengine na matokeo ya uainishaji ambayo yanaweza kutumika kama viwango vya kulinganisha.

p09-03.png

Kielelezo 3: Inapendekezwa Pipeline

Ukusanyaji na ufafanuzi wa seti za data za lugha asilia unabaki kuwa kazi ya siku zijazo. Ili hili lifanikiwe, kunahitajika utambuzi wa vyanzo vingine vya lugha ambapo seti ya data inaweza kutolewa kwa mifano zaidi kufunzwa. Zaidi ya hayo, watafiti wa NLP wanahitaji kuzingatia zaidi njia bora za kuongeza seti za data. Zinapaswa kulinganishwa na sampuli za SMOTE, kwa sababu ya ukosefu wa usawa katika seti ya data. Ni manufaa kuwa na njia bora za kuongeza seti za data za lugha asilia.

Aidha, inafaa pia kuchunguza utendakazi duni wa TFIDF na mfuko wa maneno ikilinganishwa na Word2vec, maeneo yanayowezekana ya uchunguzi yanaweza kuwa asili ya upachikaji wa neno na uboreshaji wa Parameta juu za modeli za uainishaji ambazo zinaweza kuboresha utendakazi wa uainishaji. Upanuzi mwingine wa kazi hii ni kuhamisha kujifunza kutoka isiZulu hadi Siswati. Seti ya data ya isiZulu ni kubwa ikilinganishwa na seti ya data ya Siswati na kuifanya kuwa njia inayowezekana ya utafiti kuchunguza ikiwa Ujifunzaji hamishi unaboresha utendakazi wa uainishaji kwa Siswati katika muktadha huu.

## Maelezo

[1] https://iptc.org/standards/newscodes/

[2] https://github.com/dsfsi/za-isizulu-siswati-news-2022

[3] https://doi.org/10.5281/zenodo. 7193346

## Marejeo

Abonizio, H. Q. & Junior, S. B. (2020), Pre-trained data augmentation for text classification, in 'Brazilian Conference on Intelligent Systems', Springer, pp. 551-565.

Alexander, M. (2021), 'The 11 languages of south africa'. URL: https://southafrica-info.com/arts-culture/11-languages-south-africa/

Baumann, P. & Pierrehumbert, J. (2014), Using resource-rich languages to improve morphological analysis of under-resourced languages, in 'Proceedings of the Ninth International Conference on Language Resources and Evaluation (LREC'14)', pp. 3355-3359.

Bonab, H., Allan, J. & Sitaraman, R. (2019), Simulating clir translation resource scarcity using high-resource languages, in 'Proceedings of the 2019 ACM SIGIR International Conference on Theory of Information Retrieval', pp. 129-136.

Bosch, S., Pretorius, L. & Fleisch, A. (2008), 'Experimental bootstrapping of morphological analysers for nguni languages', Nordic Journal of African Studies 17(2), 23-23.

Dialani, P. (2020), 'What is nlp and why is it important?'. URL: https://www.analyticsinsight.net/what-is-nlp-and-why-is-it-important/#:∼:text=Natural language%2

Duong, H.-T. & Nguyen-Thi, T.-A. (2021), 'A review: preprocessing techniques and data augmentation for sentiment analysis', Computational Social Networks 8(1), 1-16.

Duvenhage, B., Ntini, M. & Ramonyai, P. (2017), Improved text language identification for the south african languages, in '2017 Pattern Recognition Association of South Africa and Robotics and Mechatronics (PRASA-RobMech)', IEEE, pp. 214-218.

Eiselen, R. & Puttkammer, M. J. (2014), Developing text resources for ten south african languages., in 'LREC', pp. 3698-3703.

Fang, M. & Cohn, T. (2017), 'Model transfer for tagging low-resource languages using a bilingual dictionary', arXiv preprint arXiv:1705.00424.

Fernández, A., Garcia, S., Herrera, F. & Chawla, N. V. (2018), 'Smote for learning from imbalanced data: progress and challenges, marking the 15-year anniversary', Journal of artificial intelligence research 61,863-905.

Hsueh, P.-Y., Melville, P. & Sindhwani, V. (2009), Data quality from crowdsourcing: a study of annotation selection criteria, in 'Proceedings of the NAACL HLT 2009 workshop on active learning for natural language processing', pp. 27-35.

Kobayashi, S. (2018), 'Contextual augmentation: Data augmentation by words with paradigmatic relations', arXiv preprint arXiv:1805.06201.

Marivate, V., Sefara, T., Chabalala, V., Makhaya, K., Mokgonyane, T., Mokoena, R. & Modupe, A. (2020), 'Investigating an approach for low resource language dataset creation, curation and classification: Setswana and sepedi', arXiv preprint arXiv:2003.04986.

Mesham, S., Hayward, L., Shapiro, J. & Buys, J. (2021), 'Low-resource language modelling of south african languages', arXiv preprint arXiv:2104.00772.

Mikolov, T., Sutskever, I., Chen, K., Corrado, G. S. & Dean, J. (2013), Distributed representations of words and phrases and their compositionality, in C.

Burges, L. Bottou, M. Welling, Z. Ghahramani & K. Weinberger, eds, 'Advances in Neural Information Processing Systems', Vol. 26, Curran Associates, Inc. URL: https://proceedings.neurips.cc/paper/2013/file/9aa42b31882ec039965f3c4923ce901b-Paper.pdf

Nguyen, T. Q. & Chiang, D. (2017), 'Transfer learning across low-resource, related languages for neural machine translation', arXiv preprint arXiv:1708.09803.

Niyongabo, R. A., Qu, H., Kreutzer, J. & Huang, L. (2020), 'Kinnews and kirnews: Benchmarking cross-lingual text classification for kinyarwanda and kirundi', arXiv preprint arXiv:2010.12174.

Nyoni, E. & Bassett, B. A. (2021), 'Low-resource neural machine translation for southern african languages', arXiv preprint arXiv:2104.00366.

Oh, C., Han, S. & Jeong, J. (2020), 'Time-series data augmentation based on interpolation', Procedia Computer Science 175, 64-71.

Rakholia, R. M. & Saini, J. R. (2016), Lexical classes based stop words categorization for gujarati language, in '2016 2nd international conference on advances in computing, communication, & automation (ICACCA)(Fall)', IEEE, pp. 1-5.

Shamsfard, M. (n.d.), 'Challenges and opportunities in processing low resource languages: A study on persian'.

Stenetorp, P., Pyysalo, S., Topić, G., Ohta, T., Ananiadou, S. & Tsujii, J. (2012), Brat: a web-based tool for nlp-assisted text annotation, in 'Proceedings of the Demonstrations at the 13th Conference of the European Chapter of the Association for Computational Linguistics', pp. 102-107.

Tang, X., Cheng, S., Do, L., Min, Z., Ji, F., Yu, H., Zhang, J. & Chen, H. (2018), 'Improving multilingual semantic textual similarity with shared sentence encoder for low-resource languages', arXiv preprint arXiv:1810.08740.

Whyatt, B. & Pavlović, N. (2019), 'Languages of low diffusion and low resources: translation research and training challenges: Special issue proposal itt-15 (1), march 2021'.

Xu, P. & Fung, P. (2013), 'Cross-lingual language modeling for low-resource speech recognition', IEEE transactions on audio, speech, and language processing 21(6), 1134-1144.

Zhang, X., Zhao, J. & LeCun, Y. (2015), 'Characterlevel convolutional networks for text classification', Advances in neural information processing systems 28,649-657.

Zoph, B., Yuret, D., May, J. & Knight, K. (2016), 'Transfer learning for low-resource neural machine translation', arXiv preprint arXiv:1604.02201.
