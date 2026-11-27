> Machine translation (sw) of "Comparing methods of orthographic conversion for Bàsàá, a language of Cameroon" by Alexandra O’neil, Daniel Swanson, Robert Pugh, Francis Tyers, Emmanuel Ngue Um, https://aclanthology.org/2023.rail-1.11/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, fix-qwen3.5-397b, glossary, madlad-7b, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kulinganisha mbinu za ubadilishaji wa tahajia kwa Kibàsàá, lugha ya Kamerun

Alexandra O’neil, Daniel Swanson, Robert Pugh, Francis Tyers, Emmanuel Ngue Um

**Taasisi**  
Alexandra O’Neil, Daniel Swanson  
Emmanuel Ngué Um  
Robert Pugh, Francis Tyers  
University of Yaoundé  
Indiana University  
Yaoundé, Cameroon  
Bloomington, IN USA

## Muhtasari

Usanifishaji wa tahajia ni hatua muhimu katika uhifadhi wa kumbukumbu za lugha na uendelezaji wa rasilimali zake. Hata hivyo, maandishi yaliyoandikwa kwa tahajia za zamani bado yana umuhimu kwa historia na maendeleo ya lugha na kwa hiyo lazima yabadilishwe kuwa tahajia sanifu. Kuhakikisha lugha inapata toleo la tahajia sanifu la maandishi yake yote yaliyorekodiwa ni muhimu katika uendelezaji wa rasilimali kwani hutoa rasilimali za ziada za kimaandishi kwa mafunzo, inasaidia mchango wa waandishi wanaotumia mifumo ya zamani ya uandishi, na hutoa taarifa kuhusu maendeleo ya lugha. Karatasi hii inatathmini utendaji wa mbinu za uchakataji wa lugha asilia, hasa Finite State Transducers (FST) na mitandao ya Long Short-term Memory (LSTM), kwa ubadilishaji wa tahajia wa maandishi ya Kibàsàá kutoka tahajia ya kimisionari ya Kiprotestanti hadi tahajia sanifu ya sasa ya AGLC, kwa hitimisho kwamba LSTM zina ufanisi zaidi kwa kiasi fulani pale ambapo hakuna taarifa dhahiri za kileksika.

## 1 Utangulizi

Usanifishaji wa tahajia ni mchakato ambao lugha nyingi za dunia zimepitia katika historia na nyingi bado zinaendelea kuupitia. Ingawa kuna faida nyingi za usanifishaji wa mfumo wa uandishi wa lugha, unaweza pia kuleta changamoto kwa jamii za lugha. Changamoto hizi ni pamoja na mabishano kati ya wazungumzaji ambao wamezoea kutumia uwakilishi tofauti, usumbufu kutoka kwa wazungumzaji wanaohusisha lugha yao kama lugha ya mazungumzo pekee, kushughulikia na kupunguza athari za ukoloni kwa lugha na jamii, mjadala kuhusu jinsi bora ya kuwakilisha sauti katika lugha, na kusitasita katika kupitishwa kwa mfumo wa uandishi na wazungumzaji wote (Limerick, 2018).

Kama inavyorejelewa katika seti ya changamoto zinazowezekana hapo juu, jamii mara nyingi huwa na njia tofauti za kuwakilisha lugha yao kabla ya juhudi zilizoratibiwa za kutekeleza mfumo mmoja (Mosel, 2004). Ingawa moja ya malengo ya usanifishaji wa tahajia ni kuunda njia thabiti ambayo wazungumzaji wanaweza kutumia kuelewana na kuwasilisha mawazo yao wenyewe, maandiko na data yaliyoandikwa kwa tahajia zilizotumika awali yanabaki kuwa muhimu katika historia na maendeleo ya lugha. Ili kuhifadhi taarifa hii ni muhimu kubadilisha tahajia za zamani kuwa kiwango kipya. Zaidi ya hayo, ni vyema kuanza mchakato huu muda mfupi baada ya usanifishaji wa mfumo, kwani hii huongeza fursa ya kufanya kazi na wazungumzaji ambao wana ujuzi wa mifumo iliyotumika awali.

Vilevile, ubadilishaji wa tahajia za zamani kuwa kiwango cha sasa ni wa manufaa kwani baadhi ya wazungumzaji wanaweza kuwa hawako tayari kubadili kutumia kiwango kipya. Kwa kipindi fulani cha muda kufuatia kupitishwa kwa tahajia mpya, wazungumzaji wanaweza kuendelea kutumia aina mbalimbali za tahajia katika uandishi wao wenyewe, wakifuata tahajia yoyote waliyojifunza awali (Jahani, 1989). Baadhi ya wazungumzaji wanaweza kulazimika kuendelea kutumia mfumo usio wa kiwango kutokana na uhusiano wa kihisia na mfumo wa tahajia. Kwa mfano, sababu za kudumisha upendeleo wa tahajia huanzia uzoefu mzuri, kama vile kuhusisha mfumo na jinsi babu na nyanya walivyowafundisha, hadi mwitikio wa uzoefu wa kiwewe, kama vile mazingira ya shule yenye unyanyasaji wa kisaikolojia na kimwili ambapo mfumo mmoja wa uandishi ulisisitizwa (Arndt, 2019). Bila kujali sababu ya mzungumzaji kuendelea kutumia tahajia tofauti, ni jambo la kujenga kwa jamii kuhakikisha kwamba watumiaji wa tahajia mpya bado wanaweza kuelewa maandishi katika tahajia nyingine na kuendeleza mbinu ya kubadilisha maandiko haya kwa urahisi (Person, 2009).

Katika makala haya, tunachunguza na kulinganisha umuhimu wa finite-state transducers (FSTs) na mitandao ya neva ya long short-term memory (LSTMs) kwa kazi ya kubadilisha tahajia ya awali ya lugha ya Bàsàá kuwa kiwango cha sasa, kwa hitimisho kwamba LSTMs hufanya vizuri kidogo kuliko FSTs pasipo taarifa za kileksika.

## 2 Bàsàá

Bàsàá ni lugha ya Kibantu inayozungumzwa na takriban wazungumzaji 300,000 nchini Kamerun (Eberhard et al., 2022). Ingawa ina sifa nyingi bainifu za lugha ya Kibantu, kwa kawaida inachukuliwa kuwa na tofauti zaidi ya muundo wa silabi na unyumbufu katika ngeli ikilinganishwa na Lugha za Kibantu nyingine, kama inavyojadiliwa katika Sehemu ya 2.1. Historia ya Bàsàá pia inaelezea aina mbalimbali za mifumo ya uandishi kutoka kwa wamisionari tofauti na juhudi tofauti za usanifishaji, kama inavyoelezwa katika Sehemu ya 2.2.

p02-01.png

Kielelezo 1: Ramani inayoonyesha maeneo ya msingi ambako Bàsàá inazungumzwa: kusini, kati na pwani ya Kamerun. (Njock, 2019)

## 2.1 Maelezo ya lugha

Orodha ya kifonetiki ya Bàsàá imewekwa wazi katika Makasso na Lee (2015), ambayo inajumuisha vokali 7 za kifonemiki (tazama Kielelezo 2) zenye utofautishaji wa kifupi-kirefu na konsonanti 30 (tazama Kielelezo 3). Zaidi ya hayo, Bàsàá hutumia mfumo wa toni ya juu-chini. Ingawa ni lugha ya Kibantu, inaruhusu kwa njia isiyo ya kawaida muundo wa silabi funge pamoja na muundo wa silabi wazi. Ingawa ina mfumo wa ngeli, tofauti za juu-juu kati ya ngeli hizo wakati mwingine hubatilishwa. Majina hayahitajiki kuanza na mwanzo wa konsonanti na vitenzi havihitajiki kuishia kwa vokali. Sababu hizi husababisha uanuwai mkubwa zaidi wa miundo ya silabi inayoruhusiwa katika Bàsàá ikilinganishwa na Lugha za Kibantu nyingine (Hyman, 2003).

p02-02.png

Kielelezo 2: Orodha ya vokali katika Bàsàá (Makasso na Lee, 2015). [ɛ] na [ɔ] hutofautishwa na [o] na [e] kwa alama za matamshi katika maandishi ya kimisionari.

## 2.2 Historia ya Tahajia

Historia ya tahajia ya Bàsàá ina mifumo mingi ya uandishi kwani wakoloni wa Kiingereza, Kijerumani, na Kifaransa walioandika lugha hiyo walichagua mbinu tofauti za uwasilishaji. Alfabeti zilizoundwa kwa ajili ya Bàsàá, na kwa lugha nyingi za Kameruni, ziliathiriwa kimsingi na lugha za kwanza za waandishi, kwa kawaida Kifaransa, Kiingereza, au Kijerumani, na mara nyingi zilishindwa kuashiria ipasavyo tofauti muhimu katika lugha (Bird, 2001). Tahajia mbili mashuhuri zaidi zilizoanzishwa kabla ya ile ya sasa zinahusishwa na wamisionari wa Kiprotestanti na wamisionari wa Kikatoliki na zinarejelewa katika karatasi hii kama tahajia za Kiprotestanti na Kikatoliki, ambazo hakuna hata moja iliyoashiria toni.

Ingawa jaribio la kwanza la kutekeleza mfumo sanifu wa uandishi, kwa kutumia tahajia iliyotengenezwa kwa lugha ya Afrika Magharibi huko Bamako (United Nations Educational and Organization, 1966), halikufanikiwa, kamati ya kitaifa ilianzishwa ili kuunda mfumo wa uandishi ambao ungewezesha ujuzi wa kusoma na kuandika wa pan-Kameruni katika lugha zote za nchi. Kiini cha juhudi hii kilikuwa uanzishwaji wa mfumo ambao ungeweza kunasa sauti zote zenye kutofautisha katika lugha za Kameruni. Ujumuishaji wa tofauti zote ungemwezesha mzungumzaji yeyote mwenye ujuzi wa kusoma na kuandika wa lugha ya Kameruni kusoma na kutamka maneno ya maandishi katika lugha yoyote ya Kameruni, bila kujali ufahamu (Hartell, 1993).

Juhudi ya kitaifa ilifikia kilele chake katika uanzishwaji wa Alfabeti Kuu ya Lugha za Kameruni (AGLC) na Kamati ya Kitaifa ya Kuunganisha na Kuoanisha Alfabeti za Lugha za Kameruni mwaka 1979 (Maurice Tadadjeu, 1979). Herufi za alfabeti hii kwa kiasi kikubwa ni za Kilatini, na hivyo zinafanana na alfabeti za Kiingereza, Kijerumani, na Kifaransa, hata hivyo alfabeti hiyo inajumuisha alama kutoka Alfabeti ya Kifonetiki ya Kimataifa ili kuwakilisha kikamilifu orodha ya kifonetiki ya lugha za Kameruni. Alama katika AGLC kamili zimeorodheshwa katika Jedwali 1.

p03-01.png

Kielelezo 3: Orodha ya konsonanti katika Kibàsàá (Makasso na Lee, 2015).

p03-02.png

Jedwali 1: Alfabeti ya Lugha za Kameruni. Alfabeti ya AGLC iliundwa kufanya kazi kama alfabeti inayounganisha na inayoeleweka kwa wazungumzaji wa lugha zote za Kameruni.

Kibàsàá kinatumia kikundi kidogo cha mfumo huu kwa mujibu wa tofauti za kifonetiki za lugha hiyo. Herufi za Kilatini zinatumika pamoja na ɓ, ŋ, ɛ, na ɔ zenye akuti, gravu, na sirkumfleksi ili kuashiria toni. Ingawa tahajia hii inaungwa mkono na Chuo cha Lugha za Kameruni, tahajia za awali za kimisionari bado zinatumiwa na baadhi ya wazungumzaji na kwa ujumla zinatumika katika maandiko ya awali yaliyoandikwa katika Kibàsàá, jambo linalohitaji mbinu ya kubadilisha tahajia za kimisionari kuwa kiwango cha AGLC.

Kwa kulinganisha mifumo hiyo mitatu ya uandishi, tofauti kuu ya kwanza inapatikana katika uwekaji alama wa toni na vokali. Mifumo ya uandishi ya Kiprotestanti na Kikatoliki haiweki alama ya toni, bali hutumia alama za akuti, gravu, na sirkumfleksi kuashiria vokali tofauti. Mfumo wa Kiprotestanti unawakilisha [e] kwa kutumia alama ya akuti, é, huku [ɛ] ikiwakilishwa na e ya kawaida. Vile vile, mfumo wa Kiprotestanti hutumia ô lenye sirkumfleksi, kuashiria [o], lakini o ya kawaida katika tahajia inawakilisha [ɔ]. Kwa upande mwingine, tahajia ya Kikatoliki inaashiria [ɛ] na [ɔ] kwa è na ò, huku e na o za kawaida zikiwakilisha [e] na [o]. Hata hivyo, katika tahajia ya AGLC, alama za akuti, gravu, na sirkumfleksi hutumiwa kuwakilisha toni na ɛ na ɔ tayari zimetofautishwa katika tahajia kwa kuongezwa kwa alama ɛ na ɔ. Toni pia huwekwa alama kwenye konsonanti za nazali zenye silabi katika mfumo wa AGLC.

Konsonanti katika tahajia pia zinahitaji kuzingatiwa katika mchakato wa ubadilishaji. Sauti za [ɓ] na [ŋ] zinawakilishwa na b na ñ katika tahajia za kimisionari, huku tahajia ya AGLC ikitofautisha [b] na [ɓ] kwa herufi b na ɓ. Badala ya ñ, [ŋ] inawakilishwa na ŋ katika tahajia ya AGLC. Pamoja na konsonanti hizi, tahajia za kimisionari hunakili sauti tʃ kama tj, mfumo wa AGLC hutumia c. Sentensi moja imewasilishwa katika tahajia tatu hapa chini ili kutoa mfano wa baadhi ya tofauti katika tahajia.

AGLC: Mɛ̀ yè lɛ mɛ ɓɔl nyɔɔ̄ nì màkòò.

Protestant: Me yé le me bol nyoo ni makôô.

Catholic: Mè ye lè mè bòl nyòò ni makoo.

## 3 Kazi za Awali

Mazungumzo kati ya tahajia ni suala la kawaida katika lugha nyingi, na kwa hivyo idadi kadhaa ya tafiti za awali zimechunguza mbinu za kusaidia katika ubadilishaji na/au usawazishaji wa tahajia. Kazi hii inajenga juu ya utafiti uliopo unaoelezea lugha ya Bàsàá na matumizi ya uchakataji wa lugha asilia kwa lugha yenye rasilimali chache. Sehemu hii inaelezea kazi iliyopo kuhusu Bàsàá katika Sehemu ya 3.1, Finite State Transducers (FST) katika Sehemu ya 3.2, na mitandao ya Long Short-term Memory (LSTM) katika Sehemu ya 3.3. Ingawa utafiti unaohusu FST na mitandao ya LSTM katika mazingira yenye rasilimali chache ni mkubwa, sehemu hii inazingatia mifano inayoakisi kwa karibu malengo ya karatasi hii.

## 3.1 Utafiti kuhusu Bàsàá

Kazi iliyopo kuhusu Bàsàá imeelezea orodha ya kiisimu ya lugha (Makasso and Lee, 2015; Hyman, 2003), imetengeneza kamusi (Lemb and de Gastines, 1973), imebuni vifaa vya kujifunzia (Moreton et al., 1968), na, hivi karibuni zaidi, imewezesha ukuzaji wa rasilimali zinazounganisha mbinu za kikompyuta na NLP na Bàsàá ili kuongeza rasilimali zinazopatikana kwa ajili ya uhifadhi, kama vile korasi ya usemi ya lugha mbili iliyotengenezwa kusaidia katika unukuzi wa kifonetiki otomatiki (Hamlaoui et al., 2018).

Nikitin et al. (2022) wanashughulikia kazi ya ubadilishaji wa tahajia katika Kibàsàá kwa kutumia Bidirectional Encoder Representations from Transformers (BERT), ambayo mara nyingi hufanya vizuri kutokana na kiasi kikubwa cha rasilimali na mafunzo yaliyowekwa kwenye modeli. Hata hivyo, kwa kazi hii, BERT iliweza tu kushinda msingi baada ya uchakataji wa awali wa kina wa maandishi. Umuhimu wa uchakataji wa awali wa kina wa maandishi na utendaji bora kidogo tu kuliko msingi unapendekeza kuwa BERT haifai vizuri kwa kazi hii.

## 3.2 Transducers za Hali ya Kikomo

Finite State Transducers (FST) hufanya kazi kama mtafsiri kati ya seti ya mifuatano ya pembejeo na seti ya mifuatano ya matokeo. Katika kesi ya lugha, mfuatano wa pembejeo unaweza kutumia kanuni za kiisimu na kutoa matokeo yanayozingatia kanuni hizo. Kwa vile pembejeo ya FST inategemea kanuni za kiisimu, modeli mara nyingi hufanya vizuri katika mazingira yenye rasilimali chache, kwani modeli hazitegemei kiasi kikubwa cha data ya mafunzo au rasilimali za kikompyuta. Ingawa modeli za FST zinahitaji kiasi fulani cha juhudi za kiisimu au kikompyuta kujenga, zana mbalimbali zimeundwa ambazo huendesha kiotomatiki sehemu mbalimbali za mchakato ili kusaidia kupunguza mipaka hii (Khanna et al., 2021), ingawa utendaji wa modeli za FST hunufaika sana kutokana na uzalishaji wa kanuni za kina, mahususi kwa lugha.

Kwa ujumla, FST hazibainishi lazima uwiano wa kipekee kati ya mifuatano ya pembejeo na pato, jambo ambalo linaweza kusababisha matatizo kwa kazi kama vile ubadilishaji wa tahajia ambazo kwa kawaida zinahitaji pato moja. Hili linaweza kushughulikiwa kwa kuongeza sheria za ziada ili kuzuia transducer. Hata hivyo, ikiwa kubainisha sheria zinazofaa ni vigumu na korasi inapatikana, linaweza pia kushughulikiwa kwa kuongeza uzani, ambao ni alama zinazoweza kutumika ama kwa jozi ya neno zima la pembejeo na pato au kwa uwiano wa sehemu ndogo ya neno. Kisha, kwa pembejeo fulani, kila pato lina uzani sawa na jumla ya uzani wote unaotumika unaotokana na korasi, huku umbo lenye jumla ya chini kabisa likitolewa.

FST zimetekelezwa katika mazingira mengi yenye rasilimali chache, na pia kwa matumizi ya ubadilishaji wa tahajia, transliteresheni, na usawazishaji wa maandishi. Washington et al. (2021) walitengeneza transducer kusaidia katika ubadilishaji wa tahajia na uchanganuzi wa kimofolojia wa Kizapotec na wakagundua kwamba hata transducer isiyokamilika inaweza kutoa matokeo chanya. Juhudi zinazofanana zinatumia FST kutengeneza jenereta na kichanganuzi cha kimofolojia huku zikishughulikia wakati huo huo suala la alama za matamshi zinazokosekana (Alkhairy et al., 2020), zikionyesha upanuzi rahisi wa FST kuunda rasilimali zaidi kwa lugha. Manohar et al. (2022) wanapanua matumizi ya FST kwa programu za ubadilishaji wa maandishi kuwa usemi (TTS) katika mazingira yenye rasilimali chache, wakitengeneza modeli inayobadilisha kati ya fonimu za Kimalayalam na grafimu.

Ingawa matumizi ya FST katika mazingira yenye rasilimali chache yamethibitishwa vizuri, ujumuishaji wa toni umeonekana kuwa mgumu. Ngué Um et al. (2022) walijenga FST kwa Ewondo, lugha ya Kameruni. Katika utafiti huu, hali ya utata ya alama za toni zilizounganishwa dhidi ya zinazounganisha inaleta ugumu kwa kichanganuzi. Ingawa alama zote zilizounganishwa na zinazochanganya zinaweza kuchambuliwa na FST, hii inasababisha makosa katika uundaji wa kimorfolojia. Upanuzi wa FST kwa Bàsàá pia ungehitaji kushughulikia suala hili.

## 3.3 Mitandao ya Kumbukumbu ya Muda Mrefu na Muda Mfupi (Long Short-Term Memory Networks)

LSTM ni usanifu wa mtandao wa neva unaojirudia unaoruhusu taarifa kuhusu utegemezi wa muda mrefu kujumuishwa, ukitoa muktadha wa ziada kwa uzalishaji wa matokeo. Mitandao ya LSTM imetumika kwa kazi nyingi za ujifunzaji wa kina, kama vile tafsiri ya mashine, utambuzi wa herufi kwa njia ya kiopitiki (OCR), na utambuzi wa usemi.

LSTM zimeunganishwa na kazi za OCR kusaidia lugha katika uwekaji kidijitali na usawazishaji wa tahajia wa maandishi ya kihistoria. Azawi et al. (2013) waligundua kuwa LSTM zinafanya vizuri kwa ubadilishaji wa maandishi ya kihistoria ya Kijerumani kwani zinaweza kushughulikia mifano isiyoonekana. Vivyo hivyo, Simistira et al. (2015) waligundua kutumia LSTM kwa OCR kunatoa kiwango cha makosa ya herufi cha chini kuliko mbinu zinazoongoza za OCR kwa hati ya Kigiriki ya polytonic.

Zaidi ya hayo, LSTM zimepata umaarufu hivi karibuni kwa manufaa yake katika kazi za TTS, kama vile ubadilishaji wa grafimu-hadi-fonimu. Adriana (2019), Liu et al. (2018), na Behbahani et al. (2016) walitekeleza kwa mafanikio mifano ya LSTM kwa ubadilishaji wa grafimu-hadi-fonimu katika Kiromania, Kimongolia, na Kiajemi.

## 4 Mbinu

Karatasi hii inalinganisha Usahihi wa Finite State Transducer (FST), FST yenye uzito, na mfano wa Long Short-term Memory (LSTM) kwa kazi ya ubadilishaji wa tahajia wa Bàsàá. Sehemu ya 4.1 inaelezea data ambayo mifano ilifunzwa, Sehemu ya 4.2 inaelezea kipimo rahisi cha msingi kilichotumika kwa ulinganisho, Sehemu ya 4.3 inaelezea matumizi ya FST isiyo na uzito, Sehemu ya 4.4 inaelezea kwa kina utekelezaji wa FST yenye uzito, na Sehemu ya 4.5 inatoa muhtasari wa mfano wa LSTM.

## 4.1 Data

Mbinu katika utafiti huu zinatumia korasi ya maandishi inayojumuisha sentensi 12,000 katika tahajia ya Kiprotestanti pamoja na transliteresheni katika tahajia ya AGLC. Kati ya sentensi hizi, 10,000 zinatumika kwa mafunzo, 1,000 kwa uthibitishaji, na 1,000 kwa upimaji. Uchakataji wa awali wa maandishi ulihusisha kubadilisha herufi kuwa ndogo.

## 4.2 Msingi

Msingi hutafuta sentensi lengwa kwa tafsiri inayotokea mara nyingi zaidi ya neno chanzi na kubadilisha neno chanzi na tokeni hiyo. Iwapo neno chanzi halionekani katika data, neno chanzi linatolewa katika umbo lake la asili bila ubadilishaji. Msingi hapa ni mkabala rahisi kwa tatizo, lakini unawakilisha ukosefu wa sasa wa kazi iliyopo kuhusu ubadilishaji wa tahajia katika lugha.

## 4.3 FST Isiyo na Uzani

FST isiyo na uzito inajumuisha seti ya ramani za herufi zilizokusanywa kwa kutumia mkusanyaji wa leksimu Lexd (Swanson and Howell, 2021) ambayo inajumuisha kila jozi ya herufi chanzi na lengwa zilizopatikana katika data ya mafunzo. Kuweka ramani kila herufi kivyake na bila muktadha huunda idadi kubwa ya maumbo ya matokeo, ambayo tunayatatua kwa kuchagua umbo moja la matokeo kwa nasibu. Zaidi ya hayo, tuliongeza kanuni nne zinazozuia matokeo katika hali ambapo muktadha wa kifonolojia hauna utata. Hasa, kwamba nazali hazitawahi kuwa na alama ya toni katika tahajia ya AGLC ikiwa zinapotangulia vokali (hizi ni kanuni 3, moja kwa kila m, n, na ŋ), na kwamba pale ambapo tahajia ya kimisionari ina tj, tahajia ya AGLC daima itakuwa na c (tofauti na kubadilisha t na j kando kama tj).

## 4.4 FST yenye Uzani

Ambapo FST isiyo na uzani inachukulia kila ramani kuwa na uwezekano sawa, FST yenye uzani huweka uzani kwa kila njia ambayo imeonekana katika data ya mafunzo, huku jozi za chanzo-lengo zinazojitokeza mara nyingi zaidi zikipokea uzani wa chini (bora). Kisha, badala ya kuchagua kwa nasibu, matokeo yenye uzani wa chini kabisa hutumika.

## 4.5 Mfano wa neva wa seq2seq

Kufuatia kazi za awali ambazo zimeonyesha kwamba usanifu wa neva wa seq2seq unaotegemea herufi hufanya vizuri kwa usawazishaji na ubadilishaji wa tahajia (Rosca na Breuel, 2016; Orife, 2018), tulifunza mfano wa encoder-decoder wenye umakini wa jumla (Luong et al., 2015) ili kubadilisha tahajia za kimisionari kuwa tahajia ya AGLC. Encoder na decoder zote ni mitandao ya kumbukumbu ya muda mfupi mrefu yenye mwelekeo mmoja (Hochreiter na Schmidhuber, 1997) inayojumuisha tabaka 2 za vitengo 1,000 vya siri kila moja. Tulitumia maktaba ya OpenNMT-py (Klein et al., 2020) kufunza modeli na kuzalisha utabiri kwenye seti za data zilizotengwa.

## 5 Matokeo

Tunalinganisha mifumo minne kwa kutumia viwango vya makosa ya maneno na herufi (WER na CER). WER na CER hukokotolewa kiotomatiki kwa kulinganisha matokeo ya kila mfumo na matokeo ya faili lengwa. Kufuatia uwasilishaji wa WER na CER kwa kila mfumo, tunatoa mifano ya matokeo kutoka kwa kila modeli. Maelezo kuhusu tofauti za uwakilishi wa tahajia kwa maandishi ya chanzo na lengwa yanaweza kupatikana katika Sehemu ya 2.2.

## 5.1 Viwango vya Makosa ya Maneno na Herufi

Matokeo ya mifumo yote isipokuwa FST isiyo na uzani yalikuwa yanafanana kiasi, huku modeli ya msingi ikifanya vizuri zaidi kuliko mifumo yote miwili ya FST na sawa na modeli ya seq2seq. Modeli ya seq2seq ilipata kiwango bora cha makosa ya herufi, wakati msingi unaonyesha kiwango bora kidogo cha makosa ya maneno. Hili linaweza kuelezewa na ukweli kwamba msingi hufanya kazi katika kiwango cha neno. Kwa hivyo, kosa husababisha kuchagua umbo lisilo sahihi la neno, ambalo huenda likawa na herufi nyingi ambazo ni tofauti na umbo sahihi la neno. Mfano wa seq2seq, kwa upande mwingine, unatabiri katika kiwango cha herufi, na unaweza kufanya kosa la herufi moja tu katika neno, kama vile alama ya toni iliyokosekana.

p06-01.png

Jedwali la 2: Ulinganisho kati ya mifano 4.

## 5.2 Uchambuzi wa Makosa

Ili kuelewa vizuri utendaji wa mifano hii, tunawasilisha mifano ya matokeo ya mifano kwa sentensi tatu tofauti na kujadili ni makosa gani ni ya kawaida kwa kila moja ya mifano. Mifano hiyo imechukuliwa kutoka kwa matokeo ya seti ya maendeleo kwa kila moja ya mifano.

p06-02.png

Jedwali 3

Katika sentensi katika Jedwali la 3, tunaona kwamba FST zina mwelekeo wa kuzalisha kupita kiasi herufi ŋ wakati tahajia ya chanzo ina n. Zaidi ya hayo, inaonyesha kwamba mtandao wa LSTM unafanikiwa katika kuzalisha toni ya nazali ya silabi. Ingawa msingi mara nyingi unaweza kutabiri toni kwenye nazali ya silabi, tokeni hii haipo katika data ya mafunzo, kwa hivyo msingi unatoa tu tokeni asilia.

Sentensi katika Jedwali la 4 zinaonyesha kwamba mifumo mingi inaweza kuelewa kwamba akuti katika tahajia ya chanzo haionyeshi akuti kwenye tahajia lengwa. Hata hivyo, FST isiyo na uzani inaelekea kuongeza alama za akuti hata kukiwa hakuna alama za akuti katika umbo lengwa. Kwa ujumla, tunaona LSTM ikifanya vizuri katika ugawaji wa toni na herufi katika mfano huu, huku msingi ukiwa karibu mkamilifu isipokuwa toni kwenye tokeni ya pili.

p06-03.png

Jedwali 4

p06-04.png

Jedwali 5

Katika sentensi za Jedwali la 5, ingawa LSTM inakaribia, haiwezi kutambua toni inayopanda katika tokeni ya kwanza na inaashiria toni ya tokeni ya pili kama ya kati. FST zenye uzani na zisizo na uzani zinatabiri herufi kwa usahihi, lakini kwa njia nyingine hazilingani kabisa na alama za toni, ingawa ni dhahiri kwamba FST yenye uzani inazidi FST isiyo na uzani.

## 6 Hitimisho

Matokeo ya karatasi hii yanachangia mjadala kuhusu faida linganishi za mbinu za NLP dhidi ya misingi rahisi zaidi katika mazingira yenye rasilimali chache. Msingi unazidi FST zisizo na uzani na zenye uzani na mtandao wa LSTM kuhusiana na WER. Kwa kuwa Kibàsàá ni lugha ya toni, mabadiliko katika toni ya herufi moja yanaweza kuunda jozi ndogo na hivyo WER ni kipimo halisi zaidi cha kutathmini manufaa ya modeli. Hata hivyo, msingi huo unatoa tu neno asilia kwa tokeni zozote zisizo za msamiati (OOV), ikimaanisha kuwa utendaji wa msingi huo unaathiriwa sana na tokeni za OOV. Ingawa hii ina athari ndogo kwenye seti hii ya data, seti ya data yenye tokeni zaidi za OOV ingefanya vibaya zaidi.

Ingawa msingi huo unafanya vizuri kwenye tahajia ya Kiprotestanti, huenda ungefanya vizuri zaidi kwenye tahajia ya Kikatoliki kwani hutumia alama za lafudhi gravu badala ya alama za lafudhi akuti. Ingawa tahajia ya Kikatoliki na AGLC hutumia alama za grave kuashiria vitu tofauti, uwepo wa alama za grave katika lengwa una uwezekano mkubwa zaidi kuliko alama za acute, ambazo huonekana tu wakati wa kuchanganua toni za kupanda na kushuka kwenye vokali ndefu. Mbinu ya kushughulikia tokeni za OOV kwa hivyo ingefanya vizuri zaidi kwa maandishi chanzi yaliyoandikwa katika tahajia ya Kikatoliki, kwani uwezekano wa kwa bahati kuwa na matokeo yanayolingana na umbo la ingizo ni mkubwa zaidi wakati tahajia chanzi inapotumia alama za gravu.

Katika karatasi hii, FST zisizo na uzani na zenye uzani ziliandikwa kwa kutumia kanuni ndogo sana za kiisimu, jambo linalothibitishwa na utendaji wao duni kiasi. FST yenye uzani ilipunguza sana athari ya ukosefu wa kanuni za kina, lakini ingeweza bado kufaidika wazi kutokana na nyongeza yake.

Karatasi hii inawasilisha uchunguzi wa awali wa matumizi ya FST na mitandao ya LSTM kwenye mada ya ubadilishaji wa tahajia. Ingawa msingi rahisi unafanya vizuri kwa kushangaza kwa seti hii ya data, tunaamini kwamba utendaji unaolinganishwa wa FST yenye uzani na mtandao wa LSTM unatia matumaini na unahitaji maendeleo zaidi ya modeli hizi, hasa ujumuishaji wa sheria zaidi za kiisimu kwa FST yenye uzani na uongezaji wa data ya mafunzo kwa mtandao wa LSTM.

## Mapungufu

Karatasi hii inajaribu kutoa kauli pana zaidi kuhusu utumikaji wa mbinu za sasa za NLP kwa ubadilishaji wa maandishi kwa kujadili matokeo ya modeli hizi kwenye Bàsàá. Kesi ya Bàsàá ni changamoto kwani uwakilishaji wa toni ni mgumu kwa modeli nyingi. Hata hivyo, utafiti huu bado unanufaika kutokana na tahajia ya lugha yenye msingi wa kialfabeti wa Kirumi na rasilimali zinazopatikana kwa lugha zenye tahajia ya kialfabeti yenye msingi wa Kilatini. Zaidi ya hayo, Bàsàá hutumia tahajia wazi ambayo pia hurahisisha mbinu za kiotomatiki za ubadilishaji. Matokeo na changamoto nyingine huenda yakajitokeza wakati wa kutumia modeli hizi kwa lugha inayotumia tahajia isiyo na msingi wa Kilatini, isiyo ya kialfabeti, na/au isiyo wazi.

Kwa kuwa mradi huu unakusudiwa kuwasilisha hatua ya kuanzia kwa utafiti uliopanuliwa kuhusu ubadilishaji wa tahajia, tumeanza kwa kutoa ulinganisho wa jumla na uchambuzi mfupi wa makosa. Hata hivyo, tunapanga kutekeleza uchanganuzi wa makosa wenye utaratibu zaidi ili kuongoza kazi ya baadaye. Uchanganuzi wa sasa wa makosa unaangazia baadhi ya mifumo inayozingatiwa katika data, lakini mapitio ya kina zaidi ya matokeo yatasaidia katika uundaji wa mfumo wa sasa wa Bàsàá.

## Taarifa ya Maadili

Motisha ya kazi hii ni kulinganisha mbinu za sasa za NLP katika mazingira ya rasilimali chache na kujadili jinsi mifumo tofauti inavyoweza kutumika katika miktadha tofauti kulingana na matokeo, ikichangia kwa ujumla katika mjadala kuhusu jinsi mbinu za NLP zinavyoweza kutumika kunufaisha jamii za lugha na kusaidia uundaji wa rasilimali zaidi za kiisimu. Ingawa matumaini ni kuunga mkono jamii ya lugha, ujumuishaji wa mbinu za kikompyuta pia unaleta hatari ya ugeuzwaji lugha kuwa bidhaa na kunyang'anywa mali miliki ya jamii. Utafiti huu unawasilishwa kwa imani kwamba manufaa ya sasa yanayohusiana na matumizi ya utafiti huu yanazidi hatari hii.

## Shukrani

Utafiti huu uliungwa mkono kwa sehemu na Lilly Endowment, Inc., kupitia msaada wake kwa Indiana University Pervasive Technology Institute.

## Marejeo

STAN Adriana. 2019. Input encoding for sequence-to-sequence learning of romanian grapheme-to-phoneme conversion. In 2019 International Conference on Speech Technology and Human-Computer Dialogue (SpeD), pages 1-6. IEEE.

Maha Alkhairy, Afshan Jafri, and David A Smith. 2020. Finite state machine pattern-root arabic morphological generator, analyzer and diacritizer. In Proceedings of the Twelfth Language Resources and Evaluation Conference, pages 3834-3841.

Jochen S Arndt. 2019. Engineered zuluness: Language, education, and ethnic identity in south africa, 1835-1990. The Journal of the Middle East and Africa, 10(3):211-235.

Mayce Al Azawi, Muhammad Zeshan Afzal, and Thomas M Breuel. 2013. Normalizing historical orthography for ocr historical documents using lstm. In Proceedings of the 2nd International Workshop on Historical Document Imaging and Processing, pages 80-85.

Yasser Mohseni Behbahani, Bagher Babaali, and Mussa Turdalyuly. 2016. Persian sentences to phoneme sequences conversion based on recurrent neural networks. Open Computer Science, 6(1):219-225.

Steven Bird. 2001. Orthography and identity in cameroon. Written Language & Literacy, 4(2):131-162.

David M. Eberhard, Gary F. Simons, and Charles D. Fennig. 2022. Ethnologue: Languages of the World, twenty-fifth edition. SIL International.

Fatima Hamlaoui, Emmanuel-Moselly Makasso, Markus Müller, Jonas Engelmann, Gilles Adda, Alex Waibel, and Sebastian Stüker. 2018. BUL-Basaa: A bilingual basaa-French speech corpus for the evaluation of language documentation tools. In Proceedings of the Eleventh International Conference on Language Resources and Evaluation (LREC 2018), Miyazaki, Japan. European Language Resources Association (ELRA).

Rhonda L. Hartell. 1993. Alphabets of africa. SIL International.

Sepp Hochreiter and Jürgen Schmidhuber. 1997. Long short-term memory. Neural computation, 9(8):1735-1780.

Larry M Hyman. 2003. Basaá (a43). The Bantu languages, pages 257-282.

Carina Jahani. 1989. Standardization and orthography in the Balochi language. Ph.D. thesis, Acta Universitatis Upsaliensis.

Tanmai Khanna, Jonathan N Washington, Francis M Tyers, Sevilay Bayatlı, Daniel G Swanson, Tommi A Pirinen, Irene Tang, and Hèctor Alòs i Font. 2021. Recent advances in apertium, a free/open-source rule-based machine translation platform for low-resource languages. Machine Translation, 35(4):475-502.

Guillaume Klein, François Hernandez, Vincent Nguyen, and Jean Senellart. 2020. The opennmt neural machine translation toolkit: 2020 edition. In Proceedings of the 14th Conference of the Association for Machine Translation in the Americas (Volume 1: Research Track), pages 102-109.

Pierre Lemb and François de Gastines. 1973. Dictionnaire basaá-français, avec un préface par meinrad hebga edition. Collège Libermann, Douala.

Nicholas Limerick. 2018. Kichwa or quichua? competing alphabets, political histories, and complicated reading in indigenous languages. Comparative Education Review, 62(1):103-124.

Zhinan Liu, Feilong Bao, and Guanglai Gao. 2018. Mongolian grapheme to phoneme conversion by using hybrid approach. In Natural Language Processing and Chinese Computing: 7th CCF International Conference, NLPCC 2018, Hohhot, China, August 26-30, 2018, Proceedings, Part I 7, pages 40-50. Springer.

Minh-Thang Luong, Hieu Pham, and Christopher D Manning. 2015. Effective approaches to attention-based neural machine translation. arXiv preprint arXiv:1508.04025.

Emmanuel-Moselly Makasso and Seunghun J. Lee. 2015. Basaá. Journal of the International Phonetic Association, 45(1):7179.

Kavya Manohar, AR Jayan, and Rajeev Rajan. 2022. Mlphon: A multifunctional grapheme-phoneme conversion tool using finite state transducers. IEEE Access, 10:97555-97575.

Etienne Sadembouo Maurice Tadadjeu. 1979. Alphabet général des langues camerounaises / General Alphabet of Cameroon Languages. Université de Yaoundé, SIL Internationale, University of Yaoundé, SIL International.

Rebecca L Moreton et al. 1968. Cameroon basaa. Inspection copy available from Foreign Languages Program, Center for Applied Linguistics.

Ulrike Mosel. 2004. Dictionary making in endangered speech communities. Language documentation and description, 2:39-54.

Emmanuel Ngué Um, Émilie Eliette, Caroline Ngo Tjomb Assembe, and Francis Morton Tyers. 2022. Developing a rule-based machine-translation system, ewondo-french-ewondo. International Journal of Humanities and Arts Computing, 16(2):166-181.

Ilya Nikitin, Brian O'Connor, and Anastasia Safonova. 2022. Tone prediction and orthographic conversion for basaa. arXiv preprint arXiv:2210.06986.

Pierre Emmanuel. Njock. 2019. àsàa - French - English - German Dictionary. Dallas: Webonary.org.

Iroro Orife. 2018. Attentive sequence-to-sequence learning for diacritic restoration of yorùbá language text. In Interspeech.

Kirk R Person. 2009. Heritage scripts, technical transcriptions, and practical orthographies: a middle path towards educational excellence and cultural preservation for thailands ethnic minority languages. In Proceedings from the international conference on national language policy: Language diversity for national unity.

Mihaela Rosca and Thomas Breuel. 2016. Sequence-to-sequence neural network models for transliteration. arXiv preprint arXiv:1610.09565.

Fotini Simistira, Adnan Ul-Hassan, Vassilis Papavassiliou, Basilis Gatos, Vassilis Katsouros, and Marcus Liwicki. 2015. Recognition of historical greek polytonic scripts using lstm networks. In 2015 13th International Conference on Document Analysis and Recognition (ICDAR), pages 766-770. IEEE.

Daniel Swanson and Nick Howell. 2021. Lexd: A finite-state lexicon compiler for non-suffixational morphologies. In Mika Hämäläinen, Niko Partanen, and Khalid Alnajjar, editors, Multilingual Facilitation. University of Helsinki Library.

Scientific United Nations Educational and Cultural Organization. 1966. Meeting of a group of experts for the unification of alphabets of national languages. Bamako, Mali, 28 February 5 March 1966. Final report. United Nations Educational, Scientific and Cultural Organization, UNESCO.

Jonathan Washington, Felipe Lopez, and Brook Lillehaugen. 2021. Towards a morphological transducer and orthography converter for western tlacolula valley zapotec. In Proceedings of the First Workshop on Natural Language Processing for Indigenous Languages of the Americas, pages 185-193.
