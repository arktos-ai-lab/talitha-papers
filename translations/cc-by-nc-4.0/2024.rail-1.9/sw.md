> Machine translation (sw) of "Bootstrapping Syntactic Resources from isiZulu to Siswati" by Laurette Marais, Laurette Pretorius, Lionel Clive Posthumus, https://aclanthology.org/2024.rail-1.9/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kuanzisha rasilimali za kisintaksia kutoka isiZulu hadi Siswati

Laurette Marais, Laurette Pretorius, Lionel Clive Posthumus

**Taasisi**  
Laurette Marais1, Laurette Pretorius2, Lionel Posthumus3  
1Voice Computing Research group, CSIR  
2Division of Computer Science, Department of Mathematical Sciences, Stellenbosch University  
3CALT@UJ, University of Johannesburg  
, , 

## Muhtasari

IsiZulu na Siswati ni lugha zinazoeleweka kwa pande zote ambazo zinachukuliwa kuwa na rasilimali chache licha ya hadhi yao kama lugha rasmi. Hata hivyo, rasilimali za lugha za kidijitali na kikompyuta zinazopatikana kwa isiZulu zinazidi kwa kiasi kikubwa zile za Siswati, kiasi kwamba inafaa kuchunguza ni kwa kiwango gani mbinu za uanzishaji zinaweza kutumiwa kuunda rasilimali za Siswati. Katika makala hii, tunawasilisha uundaji wa sarufi ya kikompyuta na treebank sambamba, kulingana na maelezo ya kiisimu sambamba ya lugha hizo mbili.

## Maneno Muhimu

Grammatical Framework, treebank sambamba, sarufi ya kikompyuta

## 1. Utangulizi

IsiZulu na Siswati ni Lugha za Kibantu za Kusini ambazo ni za kundi la Nguni, na kwa hivyo ni lugha zenye mofolojia tajiri ambazo zina mfumo wa ngeli ambao kwa upande wake huzalisha upatanisho wa viambishi. Lugha za Nguni zina tahajia unganishi na pia zinaonyesha uambishaji mkubwa wa kimofofonolojia, na kusababisha tokeni ndefu ambazo uchanganuzi wa kimofolojia wake si rahisi.

Lugha za Nguni zinaeleweka kwa pande zote (Ndhlovu, 2022), na sifa hii inaruhusu kunufaika katika muktadha wenye rasilimali chache. Ingawa isiZulu ni lugha rasmi ya Afrika Kusini, na Siswati ni lugha rasmi ya Afrika Kusini na Ufalme wa Eswatini, zote mbili hazina rasilimali za kutosha, Siswati kwa kiwango kikubwa zaidi kuliko isiZulu (Moors et al., 2018).

Kazi ya awali ya Bosch et al. (2008) ilionyesha uwezekano wa kuanzisha vichanganuzi vya kimofolojia vya hali ya mwisho kwa kufuata mbinu ya kimfumo. Katika hali hii, isiZulu ilitumika kama kianzio ambacho rasilimali za lugha nyingine za Kinguni zingeweza kutengenezwa. Baadhi ya matokeo muhimu ya kazi hii yalikuwa kwamba uanzishaji kati ya lugha za Kinguni unapunguza kwa kiasi kikubwa muda wa utengenezaji, jambo ambalo linaweza kuwa muhimu katika muktadha wa lugha zisizo na rasilimali za kutosha. Mbinu ya uanzishaji pia husababisha umakini maalum kupewa tofauti kati ya lugha hizo: "Kwa kutumia mawasiliano na uhusiano wa kilugha, juhudi zaidi zinaweza kutumika kwa vipengele ambavyo lugha hizo hutofautiana, kuhakikisha bidhaa za mwisho za ubora wa juu, kilugha na kikompyuta." (Bosch et al., 2008, uk. 85)

Hatua inayofuata ya asili itakuwa kuchunguza matumizi ya mbinu ya uanzishaji zaidi ya mofolojia hadi sintaksi. Kianzio chetu cha kazi hii ni sarufi ya rasilimali ya isiZulu ya Grammatical Framework (GF), kwa lengo kuu la kuanzisha sarufi ya rasilimali ya Siswati. Katika mchakato huo, tunatengeneza treebank sambamba kwa mkono, ambayo kisha tunaiimarisha kwa kutumia sarufi za rasilimali sambamba ili kupata treebank kubwa zaidi ya nusu-sintetiki - ya kwanza kwa Siswati. Tunatathmini sarufi za rasilimali kwa kutathmini kwa mikono kikundi kidogo cha data iliyoongezwa ili kuhakikisha kwamba kazi za sarufi zinafanya kazi kama inavyotarajiwa zinapounganishwa kwa njia mpya.

Tuliegemeza mbinu yetu ya uanzishaji kwenye seti ya vitabu viwili vya kiada, kimoja cha isiZulu na kingine cha Siswati, ili kuhakikisha mbinu ya kimfumo na inayozingatia lugha. Hata hapa, kitabu cha kiada cha Siswati (Taljaard et al., 1991) "kimeegemezwa kwa kiasi kikubwa" kwenye kitabu cha kiada cha isiZulu (Taljaard and Bosch, 1988) na kinawashirikisha waandishi wawili wa kitabu cha isiZulu pamoja na mwanaisimu mtaalamu wa Siswati. Kwa maana fulani, tunategemea "uanzishaji" wa maelezo ya lugha ya ubora wa juu na wanaisimu ili kuongoza mbinu ya uanzishaji ya kimfumo na ya kuaminika kwa rasilimali za kikompyuta.

## 2. Usuli

Uanzishaji wa sarufi za rasilimali, hasa sarufi za rasilimali za GF, umefanywa kwa lugha mbalimbali zinazohusiana, huku kazi muhimu zaidi ikiwa ni ile ya Runyankore na Rukiga na Nabende et al. (2020), pamoja na kazi ya Lugha za Kibantu za Kenya (Ekegusii, Kikamba na Swahili) na Kituku et al. (2021). Kutokana na hali ya lugha hizi kuwa na rasilimali chache, korasi za tathmini zinazofaa hazipo na zinahitaji utayarishaji maalum. Kwa hiyo, tathmini kamili ya sarufi za rasilimali za Runyankore na Rukiga haijaripotiwa. Tathmini ya Lugha za Kibantu za Kenya ililenga vipengele vya uhandisi wa programu vya uanzishaji, bila kutajwa mahususi usahihi wa mwisho wa sarufi. Vipande vya lugha vilivyotumika katika upimaji wa kurudia wakati wa uundaji vilitafsiriwa kutoka kwa mifano ya Kiingereza inayoonyesha kusudi la kila kazi katika sarufi. Kwa upande wa ufunikaji, basi sarufi za rasilimali za Lugha za Kibantu za Kenya hazijakomaa kama sarufi ya rasilimali ya isiZulu. Kwa mfano, katika hazina ya GF Github, functor ya Lugha za Kibantu za Kenya ina kazi moja tu ya kuunda vishazi vya vitenzi, yaani UseV, ambayo hutumika kwa vitenzi visivyochukua yambwa. Sarufi za rasilimali za isiZulu (na sasa Siswati), kinyume chake, zinajumuisha kazi 21 za kuunda vishazi vya vitenzi, zikifunika pia vitenzi vichukuavyo yambwa, muundo wa kirejeshi, miundo ya kikopulati, urekebishaji wa kielezi na vitenzi vyenye vijalizo vya kitenzi na sentensi.

Kwa hiyo, ingawa kazi za awali za GF zipo kwa Lugha nyingine za Kibantu, ni vigumu kutoa ulinganisho wa moja kwa moja wa kazi yetu na juhudi hizo nyingine.

Lengo letu ni kutumia rasilimali zilizopo za kiisimu za isiZulu na Siswati ili kuweka msingi wa uanzishaji wetu wa sarufi ya rasilimali ya Siswati kwenye ufafanuzi wa kimfumo na sambamba wa sifa za kiisimu za lugha hizo mbili.

## 3. Ulinganisho wa isiZulu na Siswati

Kama ilivyo katika Lugha zote za Kibantu, muundo wa isiZulu na Siswati umejikita kwenye kanuni mbili, yaani uainishaji wa nomino (mfumo wa ngeli) na upatanisho wa viambishi vya upatanisho katika kategoria mbalimbali za maneno (mfumo wa viambishi vya upatanisho). Hizi ni sifa 2 tu bora za Lugha za Kibantu.

Kwa ujumla, nomino ina sehemu kuu mbili, yaani kiambishi awali cha ngeli na shina la nomino. Zaidi ya hayo, kila nomino ni ya kile kinachoitwa ngeli kwa sababu ya umbo la kiambishi awali chake, pia hujulikana kama jinsia ya ngeli yake. Dhana hii ya jinsia ya ngeli ni muhimu kwa kuwa inazalisha upatanisho wa kisarufi kwa njia ya viambishi awali hivi vya ngeli, pia huitwa viambishi awali vya nambari ya jinsia. Ngeli hizi zina nambari, na mfumo wa ngeli wa isiZulu na Siswati unafanana sana.

Kipatanishi ni kipengele cha kimuundo (alama ya upatanisho/mofimu) ambacho kinaashiria rasmi uhusiano kati ya nomino na maneno mengine yote katika sentensi ambayo yana uhusiano wa moja kwa moja wa kisemantiki-kisintaksia na nomino. Upatanisho wa jinsia uliotajwa hapo juu lazima uzingatiwe katika sehemu zote za usemi ambazo zimeunganishwa moja kwa moja na nomino. Kwa hiyo, tunasema kwamba kategoria za maneno kama vile vitenzi, viwakilishi, vivumishi, virejeshi, vimilikishi n.k. huletwa katika upatanisho wa viambishi vya upatanisho (yaani kisarufi) kwa njia ya viambishi hivi vya upatanisho. Mifano (1) na (2) inaonyesha sentensi ya isiZulu na ya Siswati, mtawalia.

p02-01.png

Kabla ya kuorodhesha idadi ya tofauti za kimfumo kati ya isiZulu na Siswati ambazo tunazitumia katika mchakato wetu wa kujianzishia, tunachunguza kwa makini mifano (1) na (2). Shina moja la nomino -bhubesi, shina la kitenzi, kionyeshi cha ngeli ya 5, kiambishi upatanishi cha kiima cha ngeli ya 5, kiambishi upatanishi cha yambwa cha ngeli ya 9, kiambishi upatanishi cha kimilikishi cha ngeli ya 9 na kiwakilishi cha kimilikishi, nafsi ya kwanza umoja, vinafanana. Zaidi ya hayo, katika lugha zote mbili shina la nomino la 'ng'ombe' ni -khomo. Hata hivyo, katika isiZulu umbo la uso la ngeli ya 9 linategemea kanuni ya mbadala wa kimofofonolojia na linatamkwa kama -komo. Mwishowe, mofimu ya wakati ujao ni -zo katika isiZulu na -to katika Siswati.

Kama hatua ya kwanza, tofauti muhimu za kawaida za kimofofonolojia kati ya lugha hizo mbili zinaweza kupangwa kwa utaratibu kama ifuatavyo (Mordaunt et al., 2023; Bosch et al., 2008; Taljaard and Bosch, 1988; Taljaard et al., 1991):

1. Alfabeti na kuachwa kwa midoko: Ingawa lugha zote mbili hutumia alfabeti ya Kilatini (A-Z), Siswati huacha Q na X, wakati katika isiZulu /q/ na /x/ huwakilisha konsonanti za midoko. Katika isiZulu sauti za midoko /c/, /q/ na /x/ huwakilishwa na sauti ya mdoko /c/ katika Siswati. kwa mfano, -qina (zul) na -cina (ssw) zote mbili zinamaanisha 'kuwa mgumu'.

2. Ubadilishaji au uongezaji wa konsonanti: /z/ ambayo mara nyingi hutokea katika mizizi/mashina ya isiZulu na katika viambishi awali na vipatanishi vya ngeli ya 8 na 10, kwa kawaida hubadilishwa na /t/ katika Siswati. kwa mfano, -zama (zul) na -tama (ssw) zote mbili zinamaanisha 'jaribu'.

/th/ na /t/ katika isiZulu kwa kawaida hutamkwa kama /tf/ zinapofuatwa na /o/, /u/ na /w/, na kama /ts/ zinapofuatwa na /a/, /e/ na /i/ katika Siswati. Mifano ni -thola (zul) na -tfola (ssw), zinazomaanisha 'tafuta', na -thatha (zul) na -tsatsa (ssw), zinazomaanisha 'chukua'.

/d/ katika isiZulu hubadilika kuwa /dv/ inapofuatwa na /o/, /u/ na /w/, na kuwa /dz/ inapofuatwa na /a/, /e/ na /i/ katika Siswati, kwa mfano -dubula (zul) na -dvubula (ssw), kumaanisha 'piga risasi', na -dabula (zul) na -dzabula (ssw), kumaanisha 'rarua'.

Tofauti nyingine ni vikundi vya konsonanti /mp/ na /nk/ katika isiZulu ambavyo huwa /mph/ na /nkh/ katika Siswati, kwa mfano impendulo (zul) na imphendulo (ssw), kumaanisha 'jibu'.

3. Ufutaji, uongezaji na ubadilishaji wa irabu kabla ya kiambishi awali: Kiambishi awali cha ngeli ya isiZulu kinajumuisha mfuatano wa konsonanti-irabu (pia hujulikana kama kiambishi awali cha msingi), kikitanguliwa na kile kiitwacho augment (pia hujulikana kama kiambishi awali kabla ya ngeli), irabu nakala inayotangulia inayotekeleza kazi tofauti za kisarufi, k.m. uhakika na ubainifu, na inakabiliwa na michakato ya mofofonolojia kama vile ufutaji wa irabu na muunganiko wa irabu. Katika Siswati augment hii ipo tu katika ngeli za 1, 3, 4 na 6 na katika ngeli ya 9 (ambapo inatangulia konsonanti ya nazali). Zaidi ya hayo, katika ngeli ya 6 kiambishi awali hiki kabla ya ngeli ni /e/ na si /a/. Mfano ni amakati (zul) na emakati (ssw) kwa 'paka'.

4. Muundo wa uhusishi na viambishi vya upatanisho: Ingawa muundo wa uhusishi katika isiZulu una a- kama kile kiitwacho mofimu ya uhusishi, mofimu ya uhusishi katika Siswati ni la-. Katika lugha zote mbili a- na la- mtawalia huambatana na irabu ya kiambishi awali cha msingi na muunganiko wa irabu hufanyika kuvuka konsonanti kuunda kiambishi cha upatanisho cha uhusishi. Mfano ni umfana omunye (zul) na umfana lomunye (ssw), kutoka a+munye na la+munye, kumaanisha 'mvulana mwingine'.

5. Vipengele vya kileksika: Ingawa lugha hizo mbili zinashiriki mizizi/mashina mengi ya nomino na vitenzi, kileksika kuna tofauti, kwa mfano -phuza (zul) na -natsa (ssw), kumaanisha 'kunywa'.

6. Tahajia: Katika isiZulu, viashiria vyaonyesho huandikwa kwa mtengano na nomino inayofuata, huku katika Siswati kiashiria chaonyesho cha nafasi ya kwanza ('huyu/hawa') kikiandikwa kwa muungano na nomino inayofuata, kama ilivyo katika mfano (1): leli bhubesi (zul) dhidi ya lelibhubesi (ssw), kumaanisha 'simba huyu'.

7. Amri: Katika mashina ya vitenzi yenye silabi moja ya isiZulu, yi- au i- huambishwa mbele au -na huambishwa nyuma kwenye shina kwa amri inayoelekezwa kwa mtu mmoja. Katika Siswati -ni huambishwa nyuma kwenye shina la kitenzi, kwa mfano Yidla/Idla/Dlana! (zul) na Dlani! (ssw), kumaanisha 'Kula!', ikielekezwa kwa mtu mmoja.

Kwa muhtasari, tofauti 1-3 hapo juu zinatumika kwa lugha hizo mbili katika miundo yote na vipengele vyote vya kileksika. Sambamba na ufafanuzi huu wa jumla, kuna ufafanuzi sambamba unaozingatia kategoria za neno na miundo ya kisarufi wa Taljaard na Bosch (1988) na Taljaard et al. (1991), wawili hawa wa mwisho wakitoa mitazamo ya kivitendo inayolenga sarufi, inayofaa kabisa kwa matumizi ya moja kwa moja na utekelezaji katika uanzishaji wa sarufi ya Siswati kutoka isiZulu RG.

## 4. Sarufi rasilimali ya GF ya isiZulu

Sarufi rasilimali ya isiZulu (isiZulu RG) iliyotumika katika kazi hii imetekelezwa katika Mfumo wa Sarufi (GF), mfumo wa sarufi wa kikompyuta kwa ajili ya uundaji wa sarufi za lugha nyingi. Mfumo huu unatumia usanifu wa lugha ya kati, kiasi kwamba sarufi ya GF inajumuisha sintaksi dhahania na sintaksi halisi moja au zaidi, moja kwa kila lugha. Kategoria dhahania na kazi zinafafanuliwa katika sintaksi dhahania, ambazo zinatekelezwa katika sintaksi halisi kama kategoria za upangaji mfuatano na kazi za upangaji mfuatano. Mazingira ya utekelezaji ya GF huwezesha upangaji mfuatano wa miti ya sintaksi dhahania kuwa mifuatano ya lugha asilia, pamoja na uchanganuzi wa mifuatano ya lugha asilia kuwa miti ya sintaksi dhahania (Ranta, 2011).

Sarufi rasilimali za GF kwa kawaida ni sehemu ya Maktaba ya Sarufi Rasilimali (RGL), ambayo inashiriki sintaksi dhahania ya pamoja na viendelezi maalum kati ya lugha zaidi ya 40 (Ranta et al., 2020). Kategoria na kazi ni za kisintaksia kwa asili, zikiwa na kategoria za nomino, vishazi vya nomino, vitenzi, vipindi vya vitenzi, vishazi vya vielezi, vishazi, sentensi, n.k., pamoja na kazi za kuunganisha kategoria hizi kuwa miundo ya miti.

Hapo awali, dhamira ya RGL ilikuwa kutumika kama maktaba ya programu ya kilugha ili kuwezesha uundaji wa haraka wa sarufi mahususi za matumizi (Ranta, 2009). Utekelezaji wa kategoria za kisintaksia na kazi ungenasa mofolojia na sintaksi ya jumla ya lugha, ambayo inaweza kisha kutumika tena na sarufi za matumizi kwa kesi mahususi za matumizi. Hivi karibuni zaidi, hata hivyo, jitihada zimefanywa kutumia sarufi za matumizi ya jumla za RGL kuelekea uchanganuzi wa wigo mpana na pia kwa kuunda treebank za Universal Dependencies (Ranta et al., 2020).

isiZulu RG inaiga mofolojia na sintaksi ya isiZulu kupitia utekelezaji wa baadhi ya kazi kutoka sintaksi dhahania ya kawaida ya RGL, pamoja na seti ya kazi dhahania za ziada mahususi za lugha (Marais and Pretorius, 2023b).

Kufuatia mkabala wa kawaida kwa utekelezaji wa Lugha za Kibantu, isiZulu RG inaiga lugha katika kiwango cha neno ndogo. Kwa ufupi, hii inamaanisha kwamba tokeni za msingi za sarufi hazilingani na maneno ya kitahajia bali na sehemu za neno ndogo, ambazo huunganishwa pamoja wakati wa utekelezaji kwa kutumia usaidizi wa uhandisi wa tahajia uliojengwa ndani katika GF C-runtime (Angelov, 2015). Mfano wa hili umetolewa katika Kielelezo 1, ukionyesha jinsi sehemu za uso za sentensi ya isiZulu katika mfano (1) katika Sehemu ya 3 zinavyotolewa na kazi tofauti katika isiZulu RG. Tutasema zaidi kuhusu jinsi ubadilishaji wa mofofonolojia unavyoigwa katika Sehemu ya 6.3.

p04-01.png

Kielelezo 1: Mti wa uchanganuzi wa GF kwa mfano (1)

## 5. Mbinu

Mbinu yetu imeonyeshwa katika Kielelezo 2. Tulianza na rasilimali mbili (zilizoonyeshwa kwa bluu) na kutoka kwazo tukaunda rasilimali tatu mpya (zilizoonyeshwa kwa machungwa). RG ya isiZulu inaunda msingi wa kikokotozi wa kazi hii, huku seti ya vitabu vya kiada sambamba ikitoa taarifa za kiisimu zinazohitajika kuunda na kutathmini sarufi mpya ya rasilimali ya Siswati.

RG ya isiZulu hadi sasa imetumika kupanua viingizo vyenye uchangamano wa kimofosintaksia katika WordNet ya isiZulu (Marais and Pretorius, 2023a), kama kichanganuzi cha kisintaksia cha madhumuni ya jumla kwa isiZulu (Marais and Pretorius, 2023b) na kama utaratibu wa kuzalisha data iliyo na maelezo kwa ajili ya kufunza mifano ya ugawaji wa kimofolojia kwa isiZulu (Mkhwanazi and Marais, 2024). Kwa hiyo tunaichukulia kama mfano uliokomaa wa isiZulu na msingi unaofaa wa kuunda mifano sawia kwa lugha zinazohusiana.

Matini sambamba zinatupatia aina mbili za taarifa, yaani maelezo sambamba ya kiisimu ya lugha hizo mbili, pamoja na sentensi za mfano sambamba za ubora wa juu zinazoonyesha vipengele vya kiisimu vilivyoelezwa katika vitabu. Maelezo sambamba ya kiisimu yalitumika kama msingi wa uundaji wa RG ya Siswati, huku mifano sambamba ilitumika kuunda treebank sambamba ya maendeleo. Hapa, RG ya isiZulu ilitumika kuchanganua mifano ili kuharakisha mchakato wa kupata uwakilishi wa mti kwa kila jozi ya sentensi sambamba.

Treebank yenyewe ilitumika kama jaribio la rejeshi wakati wa utengenezaji ili kuhakikisha kwamba marekebisho ya Siswati yalitoa upangaji mfuatano sahihi (mifuatano ya lugha asilia) kutoka kwenye miti, na pia ilitumika kuhakikisha kwamba hakuna makosa yaliyoletwa katika mchakato wa urekebishaji wa juu juu wa RG ya isiZulu ili kupunguza tofauti za msimbo. Tunatoa maelezo zaidi kuhusu mchakato huu katika Sehemu ya 6.

Tathmini ya mwisho ilihusisha uundaji wa benki ya miti iliyoboreshwa kulingana na ile iliyotumika katika maendeleo. Iliundwa kwa kutumia sheria chache za msingi zinazofafanua marekebisho ya miti na kutumika kwenye treebank ya utengenezaji. Kutoka kwenye miti mipya iliyoundwa, upangaji mfuatano katika isiZulu na Siswati ulizalishwa, na hizi zilitathminiwa kwa mikono. Hii ingehakikisha kuwa marekebisho yaliyofanywa kwenye Siswati kwa msingi wa maelezo ya lugha na yaliyotathminiwa wakati wa maendeleo kwenye treebank sambamba, yangejumlishwa kwenye miti mipya.

p05-01.png

Kielelezo cha 2: Mbinu

## 6. Kurekebisha sarufi ya isiZulu kwa Siswati

## 6.1. Mpangilio wa faili za programu

Njia ya msingi zaidi ya kuanzisha GF RG mpya kutoka kwa ile iliyopo ni kufanya nakala ya faili zote zinazohusika na kubadilisha kwa njia maalum. Sharti la GF ni kwamba majina ya moduli halisi yawe na muundo 'XY.gf', ambapo X ni jina la moduli dhahania inayotekelezwa na Y ni msimbo unaoonyesha lugha husika, hasa ukiegemea kwenye msimbo wa lugha wa ISO wa herufi 3. Vichwa vya moduli halisi pia vina msimbo huu, na hivyo hatua ya kwanza itakuwa ni kubadilisha kwa utaratibu majina ya faili na vichwa. Sarufi mpya ya rasilimali kwa hiyo huanza kama nakala halisi ya ile ya awali, ambayo inaweza kubadilishwa hasa katika sehemu zile ambapo lugha hizo mbili zinatofautiana.

Bila shaka, sarufi ya awali ya rasilimali inaweza pia kuongezwa au kubadilishwa wakati kazi inaendelea kwenye sarufi mpya, jambo ambalo linaweza kusababisha tofauti za msimbo zisizo za lazima hivi karibuni. GF inahimiza muundo wa moduli wa sarufi, pamoja na matumizi ya functors ili kuiga lugha zinazohusiana kwa karibu kulingana na kanuni thabiti za uhandisi wa programu (Ranta, 2009). Hata hivyo, wakati muafaka wa kufanya utekelezaji sambamba kuwa functor unategemea kuwa na uelewa mzuri wa jinsi ufanano na tofauti kati ya lugha mbili au zaidi zinavyopaswa kuigwa. Dhamira yetu ni kupanua mkabala huu wa uanzishaji kwa lugha nyingine za Kinguni na kwingineko, na kwa hivyo tumeamua kutotekeleza functor bado, kwa kuwa functor iliyotekelezwa mapema inaweza kuwa kikwazo zaidi kuliko msaada.

Ili kupunguza mkengeuko wa msimbo kufuatia mkabala wa utekelezaji sambamba kabisa, mfumo wa moduli wa GF ulitumika ili tungo zote katika sarufi (mbali na mizizi na mashina yaliyojumuishwa katika moduli za leksimu) ziwe ndani ya moduli mbili kuu za rasilimali, yaani ResZul.gf na ResSsw.gf. Tungo hizi zingeweza kufikiwa na moduli nyinginezo kwa njia ya operesheni zilizofafanuliwa katika moduli za rasilimali pekee. Hii ingehakikisha kwamba tofauti katika kiwango cha othografia zingefafanuliwa kabisa katika moduli husika za rasilimali, huku tofauti za kimofosintaksi zingefafanuliwa katika kazi husika za ulinearisaji wa moduli halisi. Tofauti hizo kwa hivyo zinaweza kufuatiliwa kwa haraka kwa kutumia programu inayoonyesha tofauti za mstari kati ya faili, kama vile diff.

RG ya isiZulu ilijumuisha idadi ya moduli dhahania maalum, zikiiga vipengele vya isiZulu ambavyo havipatikani katika sintaksi dhahania ya kawaida. Faili hizi zilihamishwa hadi kwenye folda iliyoitwa 'nguni', ili ziweze kutumiwa na sarufi zote mbili za rasilimali.

## 6.2. Urekebishaji unaoendeshwa kiisimu

Ufafanuzi sambamba wa kiisimu wa vitabu viwili vya kiada ulitoa msingi wa kivitendo na wa kimfumo wa kurekebisha Sarufi Rasilimali ya Siswati kutoka isiZulu. Tofauti na maelezo ya kufanana na kutofautiana kama yalivyofupishwa katika Sehemu ya 3, matini sambamba zilitoa ramani ya mahali ambapo tofauti hizi zinajitokeza katika lugha husika, jambo ambalo lilirahisisha mchakato wa kutambua ni kazi na utendakazi zipi katika sarufi rasilimali zingekuwa tofauti. Sio miundo yote katika kitabu cha kiada inayotekelezwa katika Sarufi Rasilimali ya isiZulu: tulipunguza wigo wa urekebishaji kwa kile ambacho kwa sasa ni thabiti katika Sarufi Rasilimali ya isiZulu, baada ya kuthibitisha kwamba tayari imetumika katika idadi ya matumizi. Kwa hiyo, tuliondoa kutoka kwenye marekebisho haya hali ya situative, miundo fulani ya maswali, vitenzi visaidizi na viwakilishi vya jamaa visivyo vya moja kwa moja.

Kutoka Sehemu ya 3 ni wazi kwamba mofofonolojia ingechukua nafasi kuu katika juhudi yoyote ya uanzishaji. Ifuatayo tunatoa maelezo mafupi ya jinsi ubadilishaji wa mofofonolojia unavyoigwa katika sarufi rasilimali za isiZulu na baadaye za Siswati.

## 6.3. Ubadilishaji wa mofofonolojia katika GF

Katika GF, mbadala wa mofofonolojia unaweza kuigwa kwa kufafanua maumbo mbadala ya mofimu fulani na kuchagua umbo sahihi la kutumia katika muktadha maalum kulingana na kigezo kimoja au zaidi kinachotolewa na muktadha. Hili linalazimishwa na ukweli kwamba mifuatano ya sarufi ya GF haiwezi kukaguliwa wakati wa utekelezaji, bali wakati wa utungaji tu.

Kwa mfano, kutokana na muunganiko wa mofimu, umbo la upatanisho wa kimilikishi hutegemea sauti ya mwanzo ya nomino au kiwakilishi ambacho kimeambishwa kwacho. Kigezo kinachoitwa RInit kinatumika kufuatilia hili wakati wa utekelezaji, kikifafanuliwa kutofautisha kati ya vokali tofauti (zenye thamani RA hadi RU, kama inavyoonyeshwa katika Kielelezo 3) na konsonanti kwa ujumla (zenye thamani RC). Jedwali lenye upatanisho wa kimilikishi kimsingi lina vipimo 2, ambapo kipimo cha kwanza kinawakilisha habari za upatanisho wa kinachomilikiwa, wakati kipimo cha pili kinawakilisha sauti ya awali ya nomino au kiwakilishi cha mmiliki. Kielelezo 3 kinaonyesha jinsi hili linavyosimbwa katika jedwali la GF.

Upatanisho unasimbwa kama kigezo kiwanja ambapo thamani ya kwanza ni kijenzi kinachoshughulikia nafsi ya kisarufi, na thamani zinazofuata zinashughulikia nambari ya kisarufi na jinsia ya ngeli inapohitajika. Kwa mfano, First Sg inarejelea upatanisho na kiwakilishi cha nafsi ya kwanza umoja, huku Third C3_4 Pl inarejelea upatanisho na nomino za wingi za ngeli za 3 na 4.

Idadi kubwa ya marekebisho kwa sarufi ya rasilimali ya Siswati ilihusisha kubadilisha kwa utaratibu mifuatano iliyomo katika majedwali kama haya.

## 6.4. Mabadiliko kwenye moduli ya rasilimali ya Siswati

Kumbuka kwamba moduli za rasilimali husika za sarufi za rasilimali ziliundwa ili kuwa na tofauti nyingi kati ya lugha hizo mbili kwa kuwa na mifuatano yote inayotumika katika sarufi (mbali na leksimu). Katika sehemu hii tunajadili mabadiliko yaliyofanywa kwenye moduli ya ResSsw.gf, isipokuwa ikiwa imeonyeshwa vinginevyo.

Umuhimu wa mfumo wa ngeli hufanya nomino kuwa mahali dhahiri pa kuanzia, jambo ambalo linaelekea kuwa sababu kwa nini vitabu viwili vya kiada pia vinatoa sura za kwanza chache kwa nomino, ngeli zake na viambishi awali vinavyohusiana. Hili linashughulikiwa katika moduli za rasilimali za RG katika operesheni kuu mbili, nomNoun na locNoun, kwa nomino na nomino zilizowekwa katika hali ya mahali. Operesheni saidizi zinahusika na mpishano wa kimofofonolojia unaotokea wakati mizizi/mashina ya nomino yanapounganishwa na viambishi awali na viambishi tamati husika. Haya yalikuwa marekebisho ya kwanza kufanywa kwa RG ya Siswati.

Lengo kisha likahamia kwenye vitenzi, kuanzia na mpishano unaotokea ndani ya mzizi/shina la kitenzi, hasa kuhusiana na mofimu ya mwisho wa kitenzi. Baada ya hapo, mofimu mbalimbali za kitenzi kabla ya mzizi zilirekebishwa kwa kufanya mabadiliko kwenye majedwali ya upatanisho wa kiima na yambwa, pamoja na kwenye utendakazi wa kuzalisha maumbo sahihi ya viashiria vya wakati na kiambishi awali cha uhusiano. Maumbo ya kiambishi awali cha urejeshi na kiambishi tamati cha uhusiano pia yalibadilishwa.

Mabadiliko haya yalitosha pia kufidia mabadiliko mengi yaliyohitajika kwa ajili ya kuiga kwa usahihi miundo ya kikopulati, ingawa mabadiliko ya ziada kwenye kiashirio cha utambulisho cha kikopulati na upatanisho wa kivumishi pia yalihitajika. Kwa hakika, kiambishi awali cha utambulisho cha kikopulati hakihitajiki katika sarufi ya Siswati, jambo ambalo lilikuwa ni mabadiliko ya kisintaksia yaliyofanywa katika moduli ya VerbExt. Kwa mfano, katika isiZulu sentensi 'Simba ni mnyama' inaonyeshwa kama Ibhubesi yisilwane, wakati katika Siswati inaonyeshwa kama Libhubesi silwane (Taljaard and Bosch, 1988; Taljaard et al., 1991).

Majedwali yaliyokuwa na viwakilishi kamili, vimilikishi na seti zote tatu za viwakilishi vya kuonyesha pia yalibadilishwa, pamoja na upatanisho wa kimilikishi na wa kiasi.

Hatimaye, viambishi awali mbalimbali vya vielezi vilibadilishwa. Hili lilikuwa, labda kwa kushangaza, mojawapo ya mabadiliko makubwa zaidi yaliyohitajika. Katika isiZulu, ubadilishanaji wa kimofofonolojia wa viambishi awali vya vielezi kama vile nga- na njengais unategemea kiambishi awali cha ngeli ya nomino ambayo kiambishi hicho kimeambatishwa, ilhali katika Siswati, ubadilishanaji huo unategemea moja kwa moja ngeli ambayo nomino hiyo inamo, bila kujali umbo la kiambishi awali chake. Mabadiliko ya sauti pia yanafuata muundo tofauti kuhusiana na ngeli ikilinganishwa na isiZulu. Kwa hiyo, badala ya kubadilisha mifuatano katika jedwali, muundo wa majedwali ambamo viambishi awali vya vielezi vilihifadhiwa ulibadilishwa, ukiakisi kwa usahihi tofauti hii kati ya lugha hizo.

Mabadiliko mengine muhimu kisintaksia yaliyotekelezwa yanahusiana na kauli ya amri, kwa kuwa muundo wa kimofosintaksia wa kauli za amri unatofautiana kati ya lugha hizo mbili inapokuja kwenye mashina ya vitenzi yenye silabi moja na miundo ya kikopulati. Mabadiliko haya yalitekelezwa katika moduli zote zenye kazi za kuunda VPs (vishazi vya vitenzi).

Ufahamu muhimu zaidi uliopatikana wakati wa mchakato wa kuanzisha kutoka lugha moja ya Kinguni hadi nyingine ni umuhimu mkuu wa muundo wa kimofofonolojia ulio wazi na wenye utaratibu. Hili lilihakikisha kwamba mabadiliko mengi yaliyohitajika yalihusiana na mifuatano katika moduli za rasilimali zinazowakilisha mofimu pamoja na mibadala yake ya kimofofonolojia, huku mabadiliko machache sana yakihitaji mabadiliko makubwa zaidi ya kimuundo.

p07-01.png

Kielelezo 3: Jedwali la upatanisho wa kimilikishi, lililowekwa vigezo ili kuwa na maumbo mbadala kulingana na sauti ya mwanzo ya mmiliki

## 7. Kuendeleza benki ya miti sambamba

Kunasa kwa mikono sentensi sambamba kutoka vitabu vya kiada na kupata miti ili kuziwakilisha ni kazi inayotumia muda mwingi na kwa hiyo ni ghali. Kwa hiyo, tuliamua kuchagua takriban sentensi nne hadi tano zisizofanana kimuundo kutoka kila sura husika ya vitabu vya kiada sambamba, ingawa unasaji wa sentensi zote katika vitabu vya kiada unaendelea. Katika sehemu fulani, muundo uleule wa kiisimu ulionyeshwa katika vitabu vya kiada kwa kutumia sentensi nyingi zenye mpangilio mbadala wa maneno, ambazo baadhi yake hazikujumuishwa katika isiZulu RG. Katika hali kama hizo, tulijumuisha sentensi ambazo mpangilio wake wa maneno tayari umetekelezwa katika sarufi ya rasilimali. Ingawa kimsingi inawezekana kutekeleza kazi kwa ajili ya mipangilio mbadala ya maneno, uamuzi wa kufanya hivyo lazima pia upime gharama ya kikompyuta inayohusishwa na sarufi kubwa zaidi na utazingatiwa baadaye, pamoja na marudio yanayotarajiwa ambayo mpangilio mbadala wa maneno unaonekana katika korasi za isiZulu na Siswati. Aidha, madhumuni ya kazi hii yalikuwa ni kuanzisha sarufi iliyopo ya isiZulu, ambayo tunaiona kuwa imekomaa. Kujumuishwa kwa sentensi za ziada katika treebank, pamoja na utekelezaji wa kazi za kuziunga mkono, kunachukuliwa kuwa kazi ya baadaye.

## 7.1. Kupata miti

Mchakato wa kutafuta miti ya kuwakilisha sentensi uliharakishwa kwa kiasi fulani kwa kutumia mazingira ya utekelezaji ya GF kama kichanganuzi. Sentensi za IsiZulu zilichanganuliwa kwa kutumia sarufi ya rasilimali ya IsiZulu, pamoja na leksimu kubwa ya IsiZulu. Katika karibu visa vyote, mti sahihi ulichaguliwa kutoka miongoni mwa yale yaliyotolewa na mazingira ya utekelezaji. Katika visa ambapo utata wa kisintaksia wa sentensi ulifanya uteuzi kutoka kwa idadi kubwa ya uchanganuzi unaowezekana kuwa mgumu, mti sahihi ulitengenezwa kwa mkono kwa msingi wa muktadha ambao umetolewa katika vitabu vya kiada, pamoja na fafanuzi yake ya Kiingereza. Kisha uligeuzwa kuwa mfuatano wa maneno kwa IsiZulu ili kuthibitisha usahihi wake.

Kwa njia hii, mti ulipatikana kwa jozi 125 za sentensi, ukishughulikia sura za nomino, upatanisho wa kiambishi katika vitenzi, maumbo ya vielezi, wakati mbalimbali wa kitenzi, viwakilishi kamili na vya kuonyesha, maumbo ya kikopulati, viambishi vya uhusiano vya moja kwa moja, kihesabishi, nambari, na umbo la subjunctive. Ingawa hili lingekuwa, kwa ufahamu wetu, treebank ya kwanza kwa Kiswati, ni lazima tukubali kwamba ni ndogo sana. Hata hivyo, kinyume kabisa na ile ambayo ingejengwa kwa kutumia korasi, treebank ilibuniwa mahsusi kujaribu aina mbalimbali za miundo ya lugha na kwa hiyo inaweza kusemwa kuwa inawakilisha lugha hizo kwa kiwango cha juu. Kwa sababu hiyo, ni bora kama msingi wa tathmini endelevu ya sarufi ya kikompyuta wakati wa uundaji.

## 7.2. Usaidizi wa leksika

Miti hiyo ilivyoundwa kupitia uchanganuzi kwa kutumia RG ya Kizulu, ambayo iliunganishwa na leksika kubwa ya Kizulu, ilijumuisha kazi za kileksika zilizojikita kwenye mizizi na mashina ya Kizulu. Kwa mfano, mti ungetumia kazi theng_V2 kwa miti ambamo kitenzi -thenga (kununua) kilionekana. Kwa kuwa hakuna leksika ya kikompyuta iliyopo kwa Kiswati kwa sasa, kazi za kileksika zinazohitajika kwa ajili ya kuunda sentensi za Kiswati zilikuwa bado hazijatengenezwa.

Kwa hiyo, hifadhidata ya kileksika ya lugha mbili ya Kizulu-Kiswati ilitengenezwa kwa mikono kutoka kwa sentensi zilizo katika treebank. Ili kuboresha ushirikiano wa baadaye na mifumo ya lugha nyingi, viingizo vilipewa majina ya utendaji yenye msingi wa Kiingereza. Taarifa muhimu ili kupata moduli za leksika halisi za GF sambamba ziliongezwa kwa isiZulu na Siswati, kama vile shina husika au taarifa za ngeli za nomino. Ukubwa wa leksimu ni kazi 190, ambapo 76 ni za nomino (mf. student_N) na 89 ni za vitenzi (mf. come_V). Lengo letu lilikuwa ni kuendeleza na kutathmini kazi za mofosintaksia kwa sarufi rasilimali ya Siswati kutoka kwa isiZulu iliyopo, ambapo leksimu ndogo lakini yenye uwakilishi inatosha. Rasilimali muhimu ambayo bado inapaswa kuundwa ni leksimu kubwa ya kikompyuta ya Siswati.

## 8. Tathmini

Wakati wa uundaji, tathmini endelevu ilitegemea treebank iliyoundwa kwa mikono na hivyo ikaendelea hadi majaribio ya regression kwa isiZulu na Siswati yalipofanikiwa. Sasa, ulikuwa wakati wa kutathmini uwezo wa sarufi kujumlisha kwa michanganyiko ya utendakazi isiyoonekana.

Ingawa inawezekana kutumia uzalishaji nasibu wa miti kwa tathmini, miti inayozalishwa kwa njia hiyo mara nyingi haina maana. Hii inapunguza thamani ya kuitathmini, na pia inamkabili mtathmini kwa kazi ngumu, hasa katika kesi ya kushindwa: je, sarufi ilitoa mti wenye maana kimakosa au 'ilitoa kwa usahihi' ule usio na maana? Hata kazi ya kuamua kama mti unawakilisha sentensi yenye maana inaweza kuwa ngumu, huku aina na viwango tofauti vya michanganyiko yenye matatizo ya utendakazi vikiweza kutokea. Chanya za uwongo zinaweza pia kudhoofisha mchakato wa tathmini.

Badala yake, ili kujaribu RG ya Siswati, mkakati wa ongezeko ulifafanuliwa kulingana na ambao kila mti katika treebank iliyotengenezwa kwa mikono ulirekebishwa kwa kuchagua kwa nasibu kutoka kwenye orodha ya marekebisho yanayowezekana. Haya yalijumuisha kubadilishana wakati, ukanushi, nambari, nomino za kiima na viwakilishi. Kwa njia hii, miundo ile ile ya msingi ya kiisimu ilihifadhiwa katika seti mpya ya majaribio, lakini muktadha wa kisintaksia ambamo ilitokea ulibadilishwa kwa njia iliyoongozwa lakini ya nasibu.

Hii ilisababisha seti mpya ya miti 125, kila moja ikiwa na upangaji mfuatano wake wa isiZulu na Siswati uliotolewa na sarufi rasilimali husika. Uwekaji katika mstari kisha ulitathminiwa kwa mikono na makosa kuwekwa katika kategoria. Jedwali la 1 linatoa matokeo ya tathmini. Kumbuka kwamba katika visa vyote, makosa yalitokea ama katika lugha zote mbili au katika hakuna, ikionyesha kwamba uanzishaji wenyewe ulifanikiwa kabisa, yaani asilimia ndogo ya makosa ya kisarufi ilichukuliwa kutoka kwa RG ya isiZulu.

Jambo la kwanza la kuzingatia kuhusu matokeo ni kwamba ongezeko lisilo sahihi lilitokea kwa miti 14 (takriban 11%), mara nyingi kutokana na matumizi yasiyo ya kiidiomu au yasiyo ya kisarufi ya vipashio vya kileksika. Kufanya mabadiliko madogo kwenye miti kunaweza kuweka maneno katika muktadha wa kisintaksia ambao kwa namna fulani ulikuwa na tatizo. Hili linaonyesha kwamba ingawa aina hii ya ongezeko inaweza kuwa na nguvu sana, uangalifu unapaswa kuchukuliwa wakati wa kubuni sheria za kurekebisha miti ili kupunguza matumizi yake kwa miktadha inayofaa.

Katika visa vitatu, makosa madogo katika treebank asilia sambamba, yaliyotokana na vitabu vya kiada, yaligunduliwa, ambayo tuliyaita makosa ya mbegu. Kwa makosa yote ya ongezeko na ya mbegu, sarufi bado ilifaulu kutoa ulinganifu wa kimstari unaofaa, na katika visa vingi unaokubalika kimofolojia, kwa miti yenye matatizo. Idadi ya makosa halisi ya sarufi ni chini ya 2% ya treebank. Hii ni matokeo ya kutia moyo sana.

## 9. Hitimisho

Tumewasilisha mchakato wa kujianzisha ili kuunda Siswati GF RG kutoka kwa isiZulu RG iliyopo. Ili kusaidia katika utayarishaji na tathmini, seti ya vitabu vya kiada sambamba ilitumika, ambavyo vyenyewe vilikuwa vimeundwa kwa njia ya "bootstrapped" kutokana na ufanano wa lugha hizo. Maandishi sambamba yalitoa msingi wa kivitendo na wa kimfumo wa kutekeleza tofauti zinazojulikana kati ya lugha hizo, pamoja na seti ya sentensi sambamba za ubora wa juu. Hizi zilitumika kutayarisha treebank sambamba za mwongozo na zilizoongezwa, ambazo zilitumika wakati wa utayarishaji na tathmini.

Kazi yetu inathibitisha uwezekano wa mbinu kama hizi za uanzishaji kwa lugha zinazohusiana kwa karibu. Sarufi ya rasilimali ya GF ya Kizulu ilitayarishwa katika kipindi cha miaka mitatu, wakati sarufi ya rasilimali ya Kiswati ingeweza kutayarishwa na kutathminiwa kwa chini ya mwaka mmoja. Upunguzaji huo wa juhudi na gharama ni muhimu hasa katika utayarishaji wa rasilimali kwa lugha zenye rasilimali chache, kwa kuwa hali yao ya kuwa na rasilimali chache mara nyingi inahusiana kwa kiwango kikubwa na rasilimali watu na kifedha kama ilivyo kwa rasilimali za lugha.

Tunakusudia kuchunguza njia kadhaa za kuendelea na kazi. Seti iliyoboreshwa ya kanuni za kurekebisha mti inaweza kutumika ili kuongeza zaidi treebank sambamba iliyotayarishwa kwa mwongozo, ambayo nayo inaweza kubadilishwa kuwa treebank sambamba ya Universal Dependencies (Kolachina na Ranta, 2019) na kutumika kuanzisha vichanganuzi vya UD kwa Kizulu na Kiswati. Hili lingehitaji uundaji wa rasilimali bora za kileksika, hasa kwa Siswati. Tunaweza kuchunguza uwezekano wa kutumia tofauti zinazojulikana za kiothografia na kifonolojia, kama zilivyojadiliwa katika Sehemu ya 3, ili kuwezesha maendeleo haya kutoka kwa rasilimali zilizopo za kileksika za isiZulu, kwa kuwa makini kushughulikia tofauti za kileksika kwa usahihi.

p09-01.png

Jedwali la 1: Muhtasari wa matokeo ya tathmini kwenye treebank iliyoongezwa

Pia tunakusudia kurudia mchakato wa uanzishaji kwa isiXhosa (lugha ya Nguni kubwa kiasi yenye takriban wazungumzaji milioni 8 wa L1) na isiNdebele (lugha ya Nguni ndogo kiasi yenye takriban wazungumzaji milioni 1 wa L1), tukijumuisha maarifa yaliyopatikana kutokana na kuunda RG ya Siswati. Kutoka hapo, sarufi za rasilimali kwa Lugha nyingine za Kibantu za Kusini zaidi ya kundi la Nguni zinaweza kulengwa.

Tunatumaini kwa njia hii kuendelea kujenga juu ya utafiti wa isimu linganishi ili kuunda rasilimali za lugha za kidijitali kwa lugha zenye rasilimali chache za Afrika Kusini.

## Maelezo

1 Misimbo ya lugha ya herufi tatu kwa isiZulu na Siswati ni zul na ssw mtawalia.

2 IsiZulu ina idadi kubwa zaidi ya wazungumzaji wa L1 kati ya lugha zote za (Nguni), yaani takriban milioni 15, wakati Siswati ina takriban milioni 3.

3 Pia inajulikana kwa jina lake rasmi la zamani la Swaziland.

4 Angalia README kwenye https://github.com/GrammaticalFramework/gf-rgl/blob/master/src/zulu/README.md

5 https://github.com/LauretteM/gf-bantu-resources

6 https://shorturl.at/pyUX3

7 https://github.com/GrammaticalFramework/gf-rgl

## 10. Marejeo

Krasimir Angelov. 2015. Orthography engineering in Grammatical Framework. In Proceedings of the Grammar Engineering Across Frameworks (GEAF) 2015 Workshop, pages 33-40.

Sonja Bosch, Laurette Pretorius, and Axel Fleisch. 2008. Experimental Bootstrapping of Morphological Analysers for Nguni Languages. Nordic Journal of African Studies, 17(2):23.

Benson Kituku, Wanjiku Nganga, and Lawrence Muchemi. 2021. Leveraging on cross linguistic similarities to reduce grammar development effort for the under-resourced languages: a case of Kenyan Bantu languages. In 2021 International Conference on Information and Communication Technology for Development for Africa (ICT4DA), pages 83-88. IEEE.

Prasanth Kolachina and Aarne Ranta. 2019. Bootstrapping ud treebanks for delexicalized parsing. In Proceedings of the 22nd Nordic Conference on Computational Linguistics, pages 15-24.

Laurette Marais and Laurette Pretorius. 2023a. Extending the usage of adjectives in the Zulu AfWN. In Proceedings of the 12th Global Wordnet Conference, pages 303-314, Donostia, Spain.

Laurette Marais and Laurette Pretorius. 2023b. Parsing IsiZulu Text Using Grammatical Framework. In Distributed Computing and Artificial Intelligence, Special Sessions I, 20th International Conference, pages 167-177, Cham. Springer Nature Switzerland.

Sthembiso Mkhwanazi and Laurette Marais. 2024. Generation of segmented isiZulu text. Journal of the Digital Humanities Association of Southern Africa, 5(1).

Carmen Moors, Ilana Wilken, Karen Calteaux, and Tebogo Gumede. 2018. Human language technology audit 2018: analysing the development trends in resource availability in all South African languages. In Proceedings of the Annual Conference of the South African Institute of Computer Scientists and Information Technologists, SAICSIT '18, page 296-304.

Owen G. Mordaunt, Paul A. Williams, and Z.T. Motsa Madikane. 2023. What sets Siswati apart from isiZulu? American International Journal of Humanities and Social Science, 8(1):47-55.

Peter Nabende, David Bamutura, and Peter Ljunglöf. 2020. Towards Computational Resource Grammars for Runyankore and Rukiga. In Proceedings of the 12th Conference on Language Resources and Evaluation (LREC).

Finex Ndhlovu. 2022. Pan-African identities and literacies: The orthographic harmonisation debate revisited. South African Journal of African Languages, 42(2):207-215.

Aarne Ranta. 2009. The GF resource grammar library. Linguistic Issues in Language Technology, 2.

Aarne Ranta. 2011. Grammatical framework: Programming with multilingual grammars, volume 173. CSLI Publications.

Aarne Ranta, Krasimir Angelov, Normunds Gruzitis, and Prasanth Kolachina. 2020. Abstract Syntax as Interlingua: Scaling Up the Grammatical Framework from Controlled Languages to Robust Pipelines. Computational Linguistics, 46(2):425-486.

P.C. Taljaard and S.E. Bosch. 1988. Handbook of IsiZulu. J.L. Van Schaik.

P.C. Taljaard, J.N. Khumalo, and S.E. Bosch. 1991. Handbook of SiSwati. J.L. Van Schaik.
