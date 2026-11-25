> Machine translation (sw) of "Investigating an Approach for Low Resource Language Dataset Creation, Curation and Classification: Setswana and Sepedi" by Vukosi Marivate, Tshephisho Sefara, Vongani Chabalala, Keamogetswe Makhaya, Tumisho Mokgonyane, Rethabile Mokoena, Abiodun Modupe, https://aclanthology.org/2020.rail-1.3/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kuchunguza mbinu ya uundaji, uratibu na uainishaji wa seti ya data ya lugha yenye rasilimali chache: Setswana na Sepedi

Vukosi Marivate, Tshephisho Sefara, Vongani Chabalala, Keamogetswe Makhaya, Tumisho Mokgonyane, Rethabile Mokoena, Abiodun Modupe

**Taasisi**  
Vukosi Marivate1,2, Tshephisho Sefara2, Vongani Chabalala3, Keamogetswe Makhaya4,  
Tumisho Mokgonyane5, Rethabile Mokoena6, Abiodun Modupe7,1  
University of Pretoria1, CSIR2, University of Zululand3, University of Cape Town4,  
University of Limpopo5, North-West University6, University of the Witwatersrand7  
, 

## Muhtasari

Maendeleo ya hivi karibuni katika Uchakataji wa Lugha Asilia yamekuwa neema tu kwa lugha zinazowakilishwa vizuri, ikipuuza utafiti katika lugha za kimataifa zisizojulikana sana. Hii ni kwa sehemu kutokana na upatikanaji wa data iliyohifadhiwa na rasilimali za utafiti. Moja ya changamoto za sasa kuhusu lugha zenye rasilimali chache ni miongozo iliyo wazi juu ya ukusanyaji, uratibu na utayarishaji wa seti za data kwa matumizi tofauti. Katika kazi hii, tunachukua jukumu la kuunda seti mbili za data ambazo zinalenga kwenye vichwa vya habari (yaani maandishi mafupi) kwa Setswana na Sepedi na uundaji wa kazi ya uainishaji wa mada za habari kutoka kwa seti hizi za data. Katika utafiti huu, tunaandika kazi yetu, tunapendekeza misingi ya uainishaji, na kuchunguza mbinu ya Ujalizaji data inayofaa zaidi kwa lugha zenye rasilimali chache ili kuboresha utendaji wa viainishaji.

## 1. Utangulizi

Masuala yanayosumbua zaidi kuhusu lugha zenye rasilimali chache ni ukosefu wa rasilimali za lugha za kutosha, kama vile vipengele vinavyohusiana na otomatiki. Katika utafiti huu, tunatanguliza uchunguzi wa lugha yenye rasilimali chache ambao hutoa uundaji otomatiki na ubinafsishaji wa uwezo mpya kutoka kwa zilizopo. Ingawa kuna zaidi ya lugha elfu sita zinazozungumzwa duniani kote, upatikanaji wa rasilimali kati ya kila moja ya hizo hauna usawa wa kushangaza (Nettle, 1998). Kwa mfano, ikiwa tutazingatia rasilimali za lugha zilizofafanuliwa kwenye kikoa cha umma, kufikia Novemba 2019, AG corpus ilitoa takriban makala ya habari 496,835 yanayohusiana na lugha ya Kiingereza kutoka vyanzo zaidi ya 200. Zaidi ya hayo, Reuters News Dataset (Lewis, 1997) inajumuisha takriban maandishi 10,788 yaliyofafanuliwa kutoka kwa wakala wa habari wa kifedha wa Reuters. Aidha, New York Times Annotated Corpus ina zaidi ya makala milioni 1.8 (Sandhaus, 2008). Mwishowe, Google Translate inasaidia takriban lugha 100 pekee (Johnson et al., 2017). kiasi kikubwa cha maarifa kipo kwa idadi ndogo tu ya lugha, ikipuuza 17% ya kategoria za lugha za dunia zilizotambulishwa kama lugha yenye rasilimali chache, na kwa sasa hakuna tokeni sanifu zilizofafanuliwa katika lugha yenye rasilimali chache (Strassel and Tracey, 2016). Hii kwa upande wake, inafanya iwe changamoto kuendeleza mbinu na zana mbalimbali zinazotumika kwa Uchakataji wa Lugha Asilia (NLP).

Nchini Afrika Kusini, tovuti nyingi za habari (za kibinafsi na za umma) huchapishwa kwa Kiingereza, licha ya kuwa kuna lugha rasmi 11 (ikiwemo Kiingereza). Katika makala haya, tunaorodhesha magazeti ya kwanza kulingana na mzunguko wa usambazaji kufikia Robo ya kwanza ya 2019 (Bureau of Circulations, 2019) (Jedwali la 1). Kwa sasa, kuna ukosefu wa taarifa kuhusu lugha 8 kati ya 11 rasmi za Afrika Kusini, isipokuwa Kiingereza, Kiafrikana na Kizulu ambazo zina seti nyingi za data zilizoripotiwa. Katika kazi hii, tunalenga kutoa mfumo wa jumla kwa lugha mbili kati ya 11 za Afrika Kusini, ili kuunda rasilimali ya kiisimu iliyo na maelezo kwa vichwa vya habari vya Setswana na Sepedi. Katika utafiti huu, tulitumia vyanzo vya data vya vichwa vya habari kutoka Shirika la Utangazaji la Afrika Kusini (SABC), mitiririko yao ya mitandao ya kijamii na habari chache za sauti. Kwa bahati mbaya, wakati wa utafiti huu, hatukuwa na ufikiaji wa moja kwa moja wa ripoti za habari, na tunatumaini utafiti huu unaweza kukuza ushirikiano kati ya mtangazaji wa kitaifa na watafiti wa NLP.

Jedwali 1: Gazeti kubwa zaidi nchini Afrika Kusini na lugha zao

p01-01.png

Kazi iliyobaki imepangwa kama ifuatavyo. Sehemu 2. inajadili kazi za awali ambazo zimefanyika katika kujenga korasi za ndani nchini Afrika Kusini na jinsi zilivyotumika. Sehemu 3. inawasilisha mbinu iliyopendekezwa ya kujenga korasi za habari za ndani na kuweka ufafanuzi kwenye korasi hizo kwa makundi. Kutoka hapa, tunazingatia njia za kukusanya data kwa ajili ya uvektaishaji na kujenga upachikaji wa maneno (ikihitaji korasi iliyopanuliwa). Pia tunatoa na kutengeneza upachikaji wa maneno vilivyofunzwa awali kwa lugha 2 za kienyeji kama sehemu ya kazi hii (Marivate na Sefara, 2020a). Sehemu 4. kuchunguza ujenzi wa mifano ya uainishaji wa habari kwa lugha ya Setswana na Sepedi na kuboresha mifano hiyo kwa kutumia mbinu ya kuongeza hatua 2 iliyotokana na kazi ya mifano ya lugha ya ngazi (Yu et al., 2019). Hatimaye, Sehemu ya 5. huhitimisha na kupendekeza njia ya mbele kwa kazi hii.

## 2. Kazi za Awali

Kuunda rasilimali za lugha zenye ukubwa wa kutosha kwa lugha zenye rasilimali chache ni muhimu katika kuboresha data inayopatikana kwa ajili ya utafiti (Zoph et al., 2016) na uhifadhi wa kitamaduni. Tukilenga bara la Afrika, tunabaini kwamba kuna seti chache za data zilizo na maelezo ambazo zinapatikana wazi kwa kazi za uchakataji wa lugha asilia kama vile uainishaji. Nchini Afrika Kusini, Kituo cha Afrika Kusini cha Rasilimali za Lugha za Kidijitali (SADiLaR) kimefanya kazi ya kuratibu seti za data za lugha za ndani za Afrika Kusini. Bado kuna mapungufu kama vile kupata korasi kubwa na data kutoka vyanzo kama vile watangazaji na mashirika ya habari kwa kuwa vina katalogi kubwa ambazo bado hazijaingia katika uwanja wa umma. Katika kazi hii, tunafanya kazi ya kuziba pengo kama hilo kwa kukusanya, kufafanua na kufunza mifano ya waainishaji kwa vichwa vya habari katika Setswana na Sepedi. Kwa kuwa data tunayoipata hadharani bado ni ndogo, pia tunapaswa kukabiliana na changamoto za Ujifunzaji wa Mashine kwenye data ndogo. Mifumo ya ujifunzaji wa mashine hufanya vibaya mbele ya seti ndogo za mafunzo kutokana na Ujifunzaji banifu. Ili kuepuka tatizo hili, Ujalizaji data unaweza kutumika. Mbinu hii inajulikana vizuri katika uwanja wa usindikaji wa picha (Cubuk et al., 2019). Ujalizaji data unarejelea ujalizaji wa seti ya mafunzo kwa mifano ya mafunzo bandia, iliyozalishwa. Mbinu hii hutumiwa mara chache zaidi katika NLP lakini idadi fulani ya tafiti chache zilitumia ujalizaji data.

Silfverberg et al. (2017) hutumia ujalizaji data kupinga ujifunzaji banifu ambapo mtandao wa neva unaojirudia (RNN) Encoder-Decoder unatekelezwa mahsusi ukiwa umeundwa kwa ajili ya mazingira yenye rasilimali chache. Waandishi wanatumia ujalizaji data kwa kutafuta maneno yanayoshiriki shina la neno kwa mfano fizzle na fizzling zinashiriki fizzl. Kisha waandishi wanabadilisha mzizi na mnyororo mwingine.

Zhang et al. (2015) wanatumia ujalizaji data kwa kutumia visawe kama maneno mbadala wa maneno asilia. Hata hivyo, Kobayashi (2018) anasema kwamba visawe ni vichache sana na ujalizaji unaotegemea visawe hauwezi kutoa mifumo mingi tofauti kutoka kwa maandishi asilia. Kwa hiyo, Kobayashi (2018) anapendekeza ujalizaji data wa kimuktadha kwa kubadilisha maneno ambayo yanatabiriwa na modeli ya lugha kutokana na muktadha unaozunguka maneno asilia yanayopaswa kujalizwa.

Kama Wei na Zou (2019) wanavyosema kwamba mbinu hizi ni halali, hazitumiwi mara nyingi katika vitendo kwa sababu zina gharama kubwa ya utekelezaji ikilinganishwa na faida ya utendaji. Wanapendekeza ujalizaji data rahisi kama mbinu za kuongeza utendaji kwenye kazi za uainishaji wa maandishi. Mbinu hizi zinajumuisha kubadilisha sinonimu, kuweka kwa nasibu, kubadilishana kwa nasibu, na kufuta neno kwa nasibu. Waandishi waliona utendaji mzuri walipotumia sehemu ya seti ya data (%):1, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90,100, kadri ukubwa wa data unavyoongezeka, Usahihi pia huongezeka kwa data iliyojazwa na ile ya awali. Data asilia ilipata usahihi wa juu wa 88.3% kwa ukubwa wa data wa 100% wakati data iliyoboreshwa ilipata usahihi wa 88.6% kwa ukubwa wa data wa 50%.

## 3. Kuunda mifano ya uainishaji wa habari kwa Setswana na Sepedi

Katika kazi hii, tunachunguza maendeleo ya mbinu ya kuongeza maandishi ya hatua 2 ili kuboresha mifano ya uainishaji kwa Setswana na Sepedi. Ili kufanya hivyo ilitubidi kwanza kutambua chanzo cha data kinachofaa. Kusanya data, na kisha fafanua seti za data kwa kategoria za habari. Baada ya data kukusanywa na kufafanuliwa, kisha tulifanya kazi kuunda vielelezo vya uainishaji kutoka kwa data jinsi ilivyo na kisha tukatumia mbinu ya uongezaji wa upachikaji wa neno na upachikaji wa hati. Katika sehemu hii tunajadili jinsi data ilivyokusanywa pamoja na mbinu tunayotumia kujenga mifano ya uainishaji.

## 3.1. Ukusanyaji wa Data, Usafishaji na Ufafanuzi

Kabla hatujaweza kufunza vielelezo vya uainishaji, kwanza tunapaswa kukusanya data kwa michakato 2 tofauti. Kwanza, tunawasilisha seti yetu ya data ya habari iliyokusanywa pamoja na ufafanuzi wake. Kisha tunajadili jinsi tulivyokusanya seti za data kubwa zaidi kwa uvektaishaji bora.

## 3.1.1. Ukusanyaji wa data ya habari na ufafanuzi

Data ya habari tuliyokusanya ni kutoka kwa kurasa za Facebook za SABC. SABC ni mtangazaji wa umma wa Afrika Kusini. Hasa, takwimu zilikusanywa kutoka Motsweding FM (kituo cha redio cha SABC Setswana) na Thobela FM (kituo cha redio cha SABC Sepedi). Tulikusanya kiotomatiki vichwa vya habari vilivyochapishwa kama machapisho kwenye kurasa zote mbili za Facebook. Hatudai hakimiliki kwa maudhui lakini tulitumia data kwa madhumuni ya utafiti. Tunafupisha seti za data kwenye Jedwali 2. Tunaonyesha usambazaji wa tokeni katika Setswana na Sepedi katika Kielelezo 1 na 2 mtawalia.

Jedwali 2: Seti za Data za Habari

p02-01.png

p02-02.png

Kielelezo 1: Wingu la Maneno la Setswana

p03-01.png

Kielelezo 2: Wingu la Maneno la Sepedi

Kama inavyoonekana, seti za data ni ndogo kiasi na kwa hivyo, tunapaswa kutafuta njia nyingine za kujenga vektaiza ambazo zinaweza kujumlisha vizuri zaidi kwa sababu utofauti wa tokeni za maneno ungekuwa mdogo sana.

Sisi tuliorodhesha makundi ya data kwa kugawanya vichwa vya habari katika: Sheria, Habari za Jumla, Michezo, Nyingine, Siasa, Habari za Usafiri, Shughuli za Jamii, Uhalifu, Biashara na Mambo ya Nje. Uwekaji wa maelezo ulifanyika baada ya kusoma vichwa vya habari na kubuni kategoria zinazolingana na seti zote mbili za data. Tunaonyesha usambazaji wa lebo katika seti za data za Setswana na Sepedi katika Kielelezo 3 na 4 mtawalia. Kwa kazi hii, tunachunguza tu uainishaji wa lebo moja kwa kila makala. Inabaki kuwa kazi ya baadaye kuangalia kisa cha lebo nyingi. Kwa hivyo, kunaweza kuwa na kelele fulani katika lebo. Mifano kutoka kwa kopusu ya habari ya Sepedi iliyo na vidokezo imeonyeshwa hapa chini:

Tsela ya N1 ka Borwa kgauswi le Mantsole Weighbridge ka mo Limpopo ebe e tswaletswe lebakanyana ka morago ga kotsi yeo e hlagilego. Traffic

Tona ya toka Michael Masutha,ore bahlankedi ba kgoro ya ditirelo tsa tshokollo ya bagolegwa bao ba tateditswego dithieeletsong tsa khomisene ya go nyakisisa mabarebare a go gogwa ga mmuso ka nko,ba swanetse go hlalosa gore ke ka lebaka la eng ba sa swanelwa go fegwa mesomong Legal

Seti kamili ya data imewekwa wazi mtandaoni (Marivate na Sefara, 2020b) kwa matumizi zaidi ya utafiti na uboreshaji wa ufafanuzi. Kama ilivyojadiliwa hapo awali, tulitumia korasi kubwa zaidi kuunda vektaishaji za lugha kwa kazi za NLP zinazofuata. Tutajadili hili ifuatayo.

## 3.1.2. Vectorizers

Kabla ya kuingia kwenye seti ya data iliyofafanuliwa, tulihitaji kuunda vektaishaji vilivyofunzwa awali ili tuweze kujenga waainishaji zaidi ambao wanajumlisha vizuri zaidi baadaye. Kwa sababu hii tulikusanya korpus tofauti kwa kila lugha kwa namna ambayo tunaweza kuunda Bag of Words, TFIDF, Word2vec (Mikolov et al., 2013) na FastText (Bojanowski et al., 2017) vectorizers (Jedwali 3). Pia tunawapa watafiti wengine vectorizers hizi ili waweze kuzitumia.

p03-02.png

Kielelezo 3: Usambazaji wa kategoria ya vichwa vya habari vya Setswana

p03-03.png

Kielelezo 4: Usambazaji wa kategoria za vichwa vya habari vya Sepedi

Jedwali 3: Ukubwa wa Korpora za Vektaiza kwa idadi ya mistari (idadi ya tokeni)

p03-04.png

## 3.2. Miundo ya Uainishaji wa Habari

Tunachunguza matumizi ya algoriti chache za uainishaji kufunza miundo ya uainishaji wa habari. Hasa tunafunza Logistic Regression, Support Vector Classification, XGBoost, na MLP Neural Network.

Ili kukabiliana na changamoto ya kuwa na kiasi kidogo cha data kwenye maandishi mafupi, tunatumia mbinu za Ujalizaji data, hasa ujalizaji unaotegemea upachikaji wa neno (Wang and Yang, 2015), mbinu ambayo imeonyeshwa kufanya kazi vizuri kwenye maandishi mafupi (Marivate and Sefara, 2019). Tunatumia mbinu hii kwa sababu hatuwezi kutumia mbinu zingine za ujalizaji data kama vile zile zinazotumia visawe (zinahitaji Wordnet Synsets zilizoendelezwa (Kobayashi, 2018)), mifano ya lugha (korasi kubwa zinahitajika kwa mafunzo) na tafsiri ya nyuma (haipatikani kwa urahisi kwa lugha za Afrika Kusini). Tunatengeneza na kuwasilisha matumizi ya upachikaji wa neno na wa hati (kama ukaguzi wa ubora wa ujalizaji) yakichochewa na mbinu ya kihierarkia ya ujalizaji (Yu et al., 2019).

## 4. Majaribio na Matokeo

Sehemu hii inawasilisha majaribio na matokeo. Kwa kuwa hii bado ni kazi inayoendelea, tunawasilisha baadhi ya njia zilizochunguzwa katika kufunza waainishaji na kuwatathmini kwa kazi ya uainishaji wa vichwa vya habari kwa Setswana na Sepedi.

## 4.1. Mpangilio wa Majaribio

Kwa kila tatizo la uainishaji, tunafanya uthibitishaji mtambuka wa mikunjo 5. Kwa vektaishaji wa mfuko wa maneno na TFIDF, tunatumia ukubwa wa juu wa tokeni wa 20,000. Kwa upachikaji wa maneno na upachikaji wa lugha tunatumia ukubwa 50. Vektaishaji wote walifunzwa kwenye kumbukumbu kubwa zilizowasilishwa awali.

## 4.1.1. Majaribio ya Msingi

Tunaendesha majaribio ya msingi na data asili kwa kutumia uthibitishaji mtambuka wa mikunjo 5. Tunaonyesha utendaji (kwa mujibu wa alama ya F1 iliyopimwa) katika Kielelezo 5 na 6. Tunaonyesha matokeo ya msingi kama orig. Kwa Mfuko wa Maneno (TF) na TFIDF zote mbili, MLP inafanya vizuri sana ikilinganishwa na mbinu nyingine. Kwa ujumla, TFIDF inafanya vizuri zaidi.

p04-01.png

Kielelezo 5: Utendaji wa modeli ya uainishaji wa msingi kwa uainishaji wa vichwa vya habari vya Setswana

p04-02.png

Kielelezo 6: Utendaji wa modeli ya uainishaji wa msingi kwa uainishaji wa vichwa vya habari vya Sepedi

## 4.1.2. Ongezeko

Tulitumia uongezaji kwa njia tofauti. Kwanza kwa upachikaji wa maneno wa Sepedi na Setswana (word2vec), tunatumia ujalizaji unaotegemea upachikaji wa maneno. Tunaongeza kila seti ya data mara 20 kwenye data ya mafunzo huku data ya uthibitishaji ikiachwa bila kubadilishwa ili iweze kulinganishwa na misingi ya awali. Tunaonyesha athari ya ongezeko katika Kielelezo 5 na 6 (utendaji uliotiwa alama kwa aug).

Ongezeko la neno la kimuktadha, lenye msingi wa word2vec, linaboresha utendaji wa waainishaji wengi. Ikiwa sasa tutaanzisha ukaguzi wa ubora kwa kutumia doc2vec (Algorithm 1) pia tunaona athari kwenye utendaji kwa Sepedi (Kielelezo 6 aug qual). Hatukuweza kukamilisha majaribio na Setswana kwa ongezeko la kimuktadha lenye ukaguzi wa ubora, lakini tutaendelea kufanya kazi ili kuelewa vyema athari za algoriti kama hiyo kwa ujumla. Kwa mfano, bado kuna kazi ya kuchunguza athari za viwango tofauti vya ufanano kwa algoriti kwenye utendaji wa jumla, jinsi algoriti kama hiyo inavyofanya kazi kwenye lugha zenye rasilimali nyingi dhidi ya lugha zenye rasilimali chache, jinsi tunavyoweza kufanya algoriti iwe na ufanisi n.k.

Inavutia pia kuangalia jinsi utendaji wa waainishaji ambao walifunzwa tu kwa vipengele vya word2vec ungekuwa. Mitandao ya neva ya kina haitumiki katika kazi hii ya sasa na kwa hivyo hatukutumia mitandao ya neva inayojirudia, lakini tunaweza kuunda vipengele vya sentensi kutoka - word2vec kwa kutumia ama: wastani wa vekta zote za maneno katika sentensi, kati ya vekta zote za maneno katika sentensi au wastani wa nguvu uliounganishwa (Rücklé et al., 2018). Tunaonyesha utendaji wa kutumia mbinu hii pamoja na waainishaji waliotumika kwa mfuko wa maneno na TFIDF awali katika Kielelezo 7.

Utendaji wa mbinu hii ni duni kidogo huku matokeo bora ya uainishaji wa vichwa vya habari vya Sepedi yakiwa na XGBoost kwenye data iliyoongezwa. Tunatumai kuboresha utendaji huu kwa kutumia vekta za vipengele vya word2vec kwa kutumia mitandao ya neva inayojirudia lakini kwa sasa tuna maoni kwamba kuongeza ukubwa wa korasi na utofauti wa korasi kwa upachikaji wa maneno uliofunzwa awali kunaweza kutoa matokeo bora zaidi.

p05-01.png

p05-02.png

Kielelezo 7: Utendaji unaotegemea vipengele vya Word2Vec kwa uainishaji wa vichwa vya habari

Hatimaye, tunaonyesha matriki ya mkanganyiko ya modeli bora katika Sepedi kwenye seti ya majaribio katika Kielelezo 8. Kiainishaji kinaainisha vichwa vya habari vya Habari za Jumla, Siasa na Sheria vizuri zaidi. Kwa vingine kuna makosa zaidi. Seti kubwa zaidi ya data ya vichwa vya habari inahitajika na utendaji wa uainishaji pia utahitaji kulinganishwa na modeli zilizofunzwa kwenye data kamili ya habari (pamoja na mwili wa makala). Kwa viainishaji vya Setswana, matrix ya mkanganyiko inaonyesha kwamba mkengeuko wa data husababisha miundo ambayo kwa kiasi kikubwa inaweza kuainisha kati ya kategoria za Habari za Jumla na Nyingine. Tunahitaji kuangalia mbinu za kuchukua sampuli upya ili kuboresha utendaji huu pamoja na kuongeza ukubwa wa awali wa seti ya data.

p05-03.png

Kielelezo 8: Matrix ya Mkanganyiko ya miundo ya uainishaji wa vichwa vya habari

## 5. Hitimisho na Kazi za Baadaye

Kazi hii ilianzisha ukusanyaji na ufafanuzi wa data ya vichwa vya habari vya Setswana na Sepedi. Inabaki kuwa changamoto kwamba nchini Afrika Kusini, lugha 9 kati ya 11 rasmi zina data ndogo kama hii inayopatikana kwa watafiti ili kujenga mifano ya kazi zinazofuata inayoweza kutumika katika matumizi tofauti. Kupitia kazi hii tunatumai kutoa mfano wa kile kinachoweza kuwezekana hata tunapokuwa na seti ya data yenye ufafanuzi mdogo. Tunatumia upatikanaji wa data nyingine za maandishi ya bure kwa lugha ya Setswana na Sepedi ili kujenga vectorizers zilizofunzwa kwa lugha hizo (ambazo zimetolewa kama sehemu ya kazi hii) na kisha kufundisha mifano ya uainishaji kwa makundi ya habari.

Inabakia kuwa kazi ya baadaye kukusanya vichwa vya habari na maandishi zaidi ya lugha za kienyeji ili kufunza miundo zaidi. Tumebaini vyanzo vingine vya habari vya serikali vinavyoweza kutumika. Kuhusu kufunza miundo ya kupachika kwa data tuliyokusanya, tafiti zaidi zinahitajika ili kuangalia jinsi uongezaji kwa kutumia miundo ya kupachika unaboresha ubora wa uongezaji.

## Maelezo

1 http://groups.di.unipi.it/˜gulli

2 http://www.sabc.co.za/

3 www.sadilar.org

4 http://www.sabc.co.za/

5 https://www.facebook.com/MotswedingFM/

6 https://www.facebook.com/thobelafmyaka/

7 https://zenodo.org/record/3668495

## 6. Marejeo

Bojanowski, P., Grave, E., Joulin, A., and Mikolov, T. (2017). Enriching word vectors with subword information. Transactions of the Association for Computational Linguistics, 5:135-146.

Bureau of Circulations, A. (2019). Newspaper circulation statistics for the period January-March 2019 (ABC Q1 2019).

Cubuk, E. D., Zoph, B., Mane, D., Vasudevan, V., and Le, Q. V. (2019). Autoaugment: Learning augmentation strategies from data. In Proceedings of the IEEE conference on computer vision and pattern recognition, pages 113-123.

Johnson, M., Schuster, M., Le, Q. V., Krikun, M., Wu, Y., Chen, Z., Thorat, N., Viégas, F., Wattenberg, M., Corrado, G., et al. (2017). Google's multilingual neural machine translation system: Enabling zero-shot translation. Transactions of the Association for Computational Linguistics, 5:339-351.

Kobayashi, S. (2018). Contextual augmentation: Data augmentation by words with paradigmatic relations. In Proceedings of the 2018 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 2 (Short Papers), volume 2, pages 452-457.

Lewis, D. D. (1997). Reuters-21578 text categorization collection data set.

Marivate, V. and Sefara, T. (2019). Improving short text classification through global augmentation methods. arXiv preprint arXiv:1907.03752.

Marivate, V. and Sefara, T. (2020a). African embeddings [nlp]. https://doi.org/10.5281/zenodo.3668481, February.

Marivate, V. and Sefara, T. (2020b). South African news data dataset. https://doi.org/10.5281/zenodo.3668489.

Mikolov, T., Sutskever, I., Chen, K., Corrado, G. S., and Dean, J. (2013). Distributed representations of words and phrases and their compositionality. In Advances in neural information processing systems, pages 3111-3119.

Nettle, D. (1998). Explaining global patterns of language diversity. Journal of anthropological archaeology, 17(4):354-374.

Rücklé, A., Eger, S., Peyrard, M., and Gurevych, I. (2018). Concatenated power mean word embeddings as universal cross-lingual sentence representations. arXiv preprint arXiv:1803.01400.

Sandhaus, E. (2008). The new york times annotated corpus. Linguistic Data Consortium, Philadelphia, 6(12):e26752.

Silfverberg, M., Wiemerslage, A., Liu, L., and Mao, L. J. (2017). Data augmentation for morphological reinflection. In Proceedings of the CoNLL SIGMORPHON 2017 Shared Task: Universal Morphological Reinflection, pages 90-99.

Strassel, S. and Tracey, J. (2016). Lorelei language packs: Data, tools, and resources for technology development in low resource languages. In Proceedings of the Tenth International Conference on Language Resources and Evaluation (LREC'16), pages 3273-3280.

Wang, W. Y. and Yang, D. (2015). That's so annoying!!!: A lexical and frame-semantic embedding based data augmentation approach to automatic categorization of annoying behaviors using# petpeeve tweets. In Proceedings of the 2015 Conference on Empirical Methods in Natural Language Processing, pages 2557-2563.

Wei, J. and Zou, K. (2019). Eda: Easy data augmentation techniques for boosting performance on text classification tasks. In Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP), pages 6383-6389.

Yu, S., Yang, J., Liu, D., Li, R., Zhang, Y., and Zhao, S. (2019). Hierarchical data augmentation and the application in text classification. IEEE Access, 7:185476-185485.

Zhang, X., Zhao, J., and LeCun, Y. (2015). Character-level convolutional networks for text classification. In Advances in neural information processing systems, pages 649-657.

Zoph, B., Yuret, D., May, J., and Knight, K. (2016). Transfer learning for low-resource neural machine translation. arXiv preprint arXiv:1604.02201.
