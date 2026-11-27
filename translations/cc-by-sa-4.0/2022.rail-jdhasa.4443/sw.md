> Machine translation (sw) of "Exploring Afrikaans word embeddings with analogies and nearest neighbours" by Tanja Gaustad, Roald Eiselen, https://upjournals.up.ac.za/index.php/dhasa/article/view/4443, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kuchunguza upachikaji wa maneno wa Kiafrikana kwa kutumia mlinganisho na majirani wa karibu

Tanja Gaustad, Roald Eiselen

**Taasisi**  
Gaustad, Tanja  
Eiselen, Roald  
Centre for Text Technology (CTexT), North-West  
University, South Africa  
  


## Muhtasari

Makala haya yanawasilisha uchunguzi wa upachikaji wa maneno kwa Kiafrikana kwa kutumia mbinu za mlinganisho na majirani wa karibu. Tunalinganisha matokeo kwenye aina tatu za upachikaji (fastText, FLAIR na GloVe) kwenye seti mpya ya data ya mlinganisho kwa Kiafrikana, iliyochochewa na Bigger Analogy Test Set: BATS (Gladkova et al. 2016). Uchambuzi wetu unaonyesha kwamba kwa Kiafrikana, sawa na Kiingereza, aina za upachikaji huathiri ubora wa mlinganisho unaopatikana kwa kazi tofauti za kiisimu. Uchunguzi wetu pia unaonyesha, hata hivyo, kwamba upachikaji huu wa Kiafrikana hausimbi uwakilishi wa kiisimu ulio wazi kama ule wa upachikaji wa Kiingereza. Sababu kamili ya hili ni mada ya kazi ya baadaye, lakini ongezeko la uchangamano wa kimofolojia na ukosefu wa data kwa uwezekano mkubwa vina mchango.

## Maneno Muhimu

Upachikaji wa maandishi, Kiafrikana, Mlinganisho, Tathmini, Lugha zenye rasilimali chache

## 1 Utangulizi na usuli

Katika muongo uliopita kumekuwa na mabadiliko ya kimsingi katika uwanja wa uchakataji wa lugha asilia (NLP) pamoja na kupitishwa kwa upana kwa mitandao ya neva ya kina (DNNs), na kusababisha maendeleo makubwa katika uwanja mzima. Kinachotegemeza mabadiliko haya ni kuanzishwa kwa mbinu za kisasa zaidi za kuwakilisha data ya lugha katika umbo la namba, hasa uwakilishi wa thamani halisi ulio na vekta unaojulikana kama upachikaji wa maneno. Uwakilishi huu ni sharti la awali la kutumia mbinu za Ujifunzajikina kwa teknolojia mbalimbali za NLP. Wakati huo huo upachikaji huu umeondoa sehemu kubwa ya isimu iliyokuwa sehemu ya mzunguko wa maendeleo wa NLP (hata kwa mbinu za jadi za ujifunzaji wa mashine) na kusababisha jitihada ambayo sasa inaendeshwa karibu kabisa na uhandisi na hali ya kisasa zaidi.

Moja ya sifa za uwakilishi huu tata zaidi ni kwamba hakuna uhusiano wa wazi unaoweza kufasiriwa na binadamu kati ya uwakilishi wenye vekta na maarifa yaliyopo ya kiisimu. Hii nayo inafanya vipengele vya ujifunzaji wa mashine, ambavyo tayari ni tata sana na vigumu kufasiriwa, kuwa karibu haiwezekani kueleweka kikamilifu. Hata hivyo, watengenezaji wametoa madai mapana kuhusu taarifa za kiisimu zinazowakilishwa katika upachikaji huu katika viwango vya kimofolojia, kisintaksia, na semantiki (Mikolov et al. 2013a, Pennington et al. 2014). Ili kuunga mkono madai haya, majaribio tofauti yameundwa kwa lengo la kueleza kwa njia isiyo ya moja kwa moja taarifa iliyomo katika uwakilishi wa vekta, hasa kwa Kiingereza. Hivi karibuni zaidi, kumekuwa pia na uchunguzi wenye mwelekeo zaidi wa kiisimu kujaribu kupata uelewa bora wa taarifa zilizosimbwa katika upachikaji huu na kama kuna uhusiano na dhana na maarifa yaliyopo ya kiisimu (Allen & Hospedales 2019, Miaschi & Dell'Orletta 2020, Warstadt et al. 2019).

Kwa Kiafrikana, kumekuwa na idadi ndogo ya uchunguzi kuhusu matumizi ya Ujifunzajikina na upachikaji wa maneno (Hanslo 2021, Heyns & Barnard 2020, Loubser & Puttkammer 2020, Ralethe 2020, Van Heerden & Bas 2021), mengi yakilenga matumizi ya Ujifunzajikina kwa kazi mbalimbali za NLP. Hadi hivi karibuni kulikuwa na mifano mitatu tu ya upachikaji wa maneno ya Kiafrikana inayopatikana kwa uhuru (Conneau et al. 2020, Grave et al. 2018), yote bila tathmini yoyote ya moja kwa moja ya ubora wake. Hivi karibuni zaidi, Eiselen (2022) alitoa mifano mitano mipya ya upachikaji kwa Kiafrikana (inayopatikana kwa uhuru kutoka [1]), iliyofunzwa kwenye seti kubwa zaidi ya data iliyoratibiwa, ambayo mitatu kati yake itatumika katika utafiti huu.

Kwa ufahamu wetu hakuna uchunguzi wa kina kuhusu asili ya upachikaji wa maneno katika lugha ya Kiafrikana, na iwapo vipimo na madai yaliyofanywa kwa upachikaji wa maneno katika lugha ya Kiingereza yanafaa kwa lugha kama vile Kiafrikana, ambayo kimofolojia ni ngumu zaidi katika suala la utokanaji na ubadilishaji, lakini pia ni yenye tija sana katika suala la kuchanganya maneno, kinyume na Kiingereza. Kiafrikana pia kina data chache sana zinazopatikana ili kufundisha mifano hii ya upachikaji.

Kwa kuzingatia usuli huu, utafiti wetu unalenga uchunguzi wa kiudadisi wa upachikaji wa maneno wa Kiafrikana kwa usanifu tatu tofauti (GloVe, fastText, na FLAIR), kwa kutumia mbinu zilizopo za tathmini kujibu maswali yafuatayo:

Je, mifano tofauti ya upachikaji inasimba aina tofauti za taarifa kwa lugha zenye uchangamano zaidi wa kimofolojia na zenye rasilimali chache, kama vile Kiafrikana?

Je, mbinu za tathmini ya ndani kwa Kiingereza zinatumika kwa lugha zenye mofolojia changamano zaidi, kama vile Kiafrikana?

Sehemu ifuatayo inatoa muhtasari mfupi wa upachikaji wa maneno, usanifu tatu unaozingatiwa na data ya mafunzo iliyotumika. Sehemu ya 3 inatoa muhtasari wa mbinu za uchambuzi wa upachikaji wa maneno na muundo wa majaribio kwa Kiafrikana, ikifuatiwa na uchambuzi wa matokeo ya majaribio tofauti katika Sehemu ya 4. Tunahitimisha uchunguzi katika Sehemu ya 5 kwa majadiliano zaidi ya matokeo yetu na maeneo ya kazi inayowezekana ya baadaye.

## 2 Usanifu wa upachikaji na taratibu za mafunzo

Kupata uwakilishi wa namba wenye maana kwa maandishi, na hasa maneno, kuna historia ndefu katika NLP (Pennington et al. 2014). Hii ni kweli hasa katika muktadha wa ujifunzaji wa mashine ambapo uwakilishi huu ni hitaji kwa mifano ili kufunzwa. Ingawa kazi ya kujifunza aina hizi za uwakilishi imekuwa ikiendelea tangu Bengio et al. (2003), mbinu kuu ya kuwakilisha maneno katika mifano ya ujifunzaji wa mashine ilikuwa ile inayoitwa vekta moja moto, ambapo kila neno katika msamiati linawakilishwa na vekta chache iliyo na sufuri kwa nafasi zote isipokuwa ile ya neno husika, ambayo inawekwa kuwa 1. Njia hii ilikuwa inaweza kutumika, lakini ilijumuisha tu taarifa kuhusu kama neno ni mwanachama wa msamiati au la. Hii ilibadilika mwaka 2013 kwa kuanzishwa kwa word2vec (Mikolov et al. 2013a, Mikolov et al. 2013b, Mikolov et al. 2013c), ambapo vekta zenye thamani halisi hujifunzwa kwa mchanganyiko wa matukio-shirikishi ya kiwango cha sentensi na kiainishi cha log-linear ili kuzalisha vekta ya pato yenye urefu uliofafanuliwa awali. Hii ilifuatiwa muda mfupi baadaye na mbinu nyingine ya upachikaji, Global Vectors (GloVe) (Pennington et al. 2014). Njia zote mbili ziliruhusu mafunzo kwenye kiasi kikubwa cha data kwa ufanisi na uwakilishi wa vekta uliojifunza ulisababisha uboreshaji katika teknolojia nyingi za NLP zinazofuata wakati zikiunganishwa na mbinu mbalimbali za kujifunza kina.

Moja ya mapungufu makubwa ya mifano hii ya upachikaji ya "classic" ni kwamba kila neno lina upachikaji mmoja, bila kujali muktadha ambamo neno hilo linatokea. Hili limeshughulikiwa na mifano ya hivi karibuni zaidi ya upachikaji na lugha ambayo hutumia usanifu tofauti wa DNN, kama vile mitandao ya neva ya kikonvolisheni, ya kirejeshi, na Transformer. Mifano hii hujifunza modeli ya kuzalisha pato la vekta, ambayo inaweza kurekebisha uwakilishi wa vekta kwa neno kwa kuzingatia muktadha ambamo neno hilo linatokea. Hii imeruhusu zaidi mafanikio makubwa katika kazi za chini za NLP, kwa gharama ya angalau kipengele kimoja muhimu sana, yaani uwezo wa kuelezeka.

Tangu mwanzo wa kutengeneza upachikaji, ilikuwa wazi kwamba ingawa uwakilishi wa vekta ulihusiana na sifa kadhaa za semantiki na mofo-sintaksia za Kiingereza, ilikuwa vigumu kubainisha kile ambacho modeli inajifunza. Asili ya upachikaji - vekta kubwa za nambari halisi - na taratibu zake za mafunzo huficha maana ya thamani fulani katika nafasi fulani ya vekta na jinsi thamani hizo zinavyohusiana na sifa za kiisimu. Hii imekuwa mbaya zaidi kwa matumizi ya DNN kuzalisha uwakilishi, kwa kuwa kuna vigezo vingi sana katika mchakato huo, hivi kwamba inakuwa karibu haiwezekani kubainisha ikiwa kuna sifa maalum za kiisimu zinazohusishwa na nafasi au maeneo maalum ya vekta. Ijapokuwa kumekuwa na juhudi kadhaa za kupendekeza mbinu za kuchunguza upachikaji, bado hakuna mbinu iliyo wazi ya kuchunguza ubora wa upachikaji na kueleza thamani zinazohusishwa na modeli. Zaidi ya hayo, tafiti nyingi hizi zimelenga Kiingereza pekee, na kazi ndogo imefanywa kubainisha jinsi uwakilishi unavyofanya kazi katika mazingira tofauti kiisimu na/au yenye rasilimali chache. Kwa utafiti huu tunazingatia usanifu tatu wa upachikaji, upachikaji mbili za kawaida zaidi za kiklasiki, na mtandao mmoja wa neva wa kurudiwa, yaani upachikaji wa fastText, GloVe, na FLAIR.

fastText (Bojanowski et al. 2017) ni upanuzi wa word2vec asili (Mikolov et al. 2013a) unaojumuisha n-gramu za herufi katika hesabu za upachikaji ili kuhakikisha kwamba maneno ambayo hayajaonekana hapo awali pia yanazalisha upachikaji. Upachikaji wa GloVe (Pennington et al. 2014) unatofautiana kidogo na fastText kwa kuwa unatumia utokeaji pamoja wa jumla wa maneno kufunza modeli ya urejeshaji wa log-bilinear kwa ajili ya kuzalisha upachikaji, na unazingatia maneno pekee. Miundo yote miwili hii inazalisha upachikaji mmoja kwa neno, bila kujali muktadha wa neno hilo. Upachikaji wa FLAIR kwa upande mwingine hufunza mtandao wa neva wa kumbukumbu ya muda mfupi-mrefu unaojirudia ili kuzalisha uwakilishi kulingana na mfuatano wa herufi. Hii ina faida mbili: i) neno lilelile katika miktadha tofauti linaweza kuwa na uwakilishi tofauti unaoakisi muktadha; na ii) kwa sababu modeli huchukulia herufi, na si maneno, kama vipashio vya msingi, mfuatano wowote wa herufi utapata upachikaji, bila kujali kama umeonekana wakati wa mafunzo. Sifa hii ya mwisho ni muhimu hasa katika mazingira yenye rasilimali chache ambapo uhaba wa data bado ni tatizo kubwa. fastText na FLAIR kila moja ina matoleo mawili, lakini kutokana na vikwazo vya nafasi tutazingatia tu miundo ya mfuko wa maneno endelevu ya fastText (CBoW) na ya nyuma ya FLAIR katika uchambuzi wetu.

Sharti la msingi la kufunza aina yoyote ya upachikaji ni mkusanyiko mkubwa wa data za maandishi, kwa kawaida katika mpangilio wa mabilioni ya maneno. Kwa bahati mbaya, hakuna ukusanyaji wa data mkubwa kama huo uliopo kwa Kiafrikana. Kwa madhumuni ya utafiti huu, tulitumia mchanganyiko wa data zinazopatikana kwa uhuru, zikiwemo NCHLT Afrikaans Text Corpora (Eiselen & Puttkammer 2014), data ya maandishi ya lugha moja ya Kiafrikana ya Autshumato (Snyman et al. 2013), na Wikipedia [2], pamoja na seti za data za ndani zenye ufikiaji wenye vikwazo kutokana na hakimiliki. Kwa jumla, modeli zilifunzwa kwa takriban maneno milioni 250, ambayo ni data ndogo sana kuliko ile inayotumiwa kwa kawaida katika kujifunza upachikaji kwa lugha nyingi zenye rasilimali nyingi duniani.

Kwa kuwa utafiti wa sasa unavutiwa hasa na kuchunguza sifa za uwakilishi wa vekta, mipangilio chaguomsingi ilitumika kufunza kila moja ya upachikaji.

## 3 Mbinu za uchambuzi wa upachikaji wa maneno: Muundo wa majaribio kwa Kiafrikana

Kama ilivyotajwa hapo juu, tathmini ya ndani kabisa ya upachikaji wa maneno bado haipatikani kwa urahisi kwa sababu vekta zina idadi kubwa ya thamani za nambari ambazo hazilingani wazi na sifa maalum za kiisimu na kwa hiyo si rahisi kufasiriwa na binadamu. Upachikaji wa maneno kwa kawaida hutathminiwa unapotumiwa kama ingizo kwa mfumo mkubwa zaidi ambao kisha unaonyesha utendaji ulioboreshwa. Kwa aina hii ya tathmini ya nje ni vigumu, hata hivyo, kutathmini mchango wa upachikaji kwa utendaji wa jumla ikilinganishwa na kwa mfano usanifu wa mfumo (Schnabel et al. 2015). Sasa tutajadili jinsi tulivyotumia mbinu zilizopo za uchanganuzi kutathmini na kuchunguza upachikaji wa Kiafrikana.

## 3.1 Analogi

Kumekuwa na majaribio mbalimbali ya kuchunguza jinsi upachikaji wa maneno tofauti unavyohusiana na kuonyesha kwamba unawakilisha baadhi ya sifa za kiisimu (aina fulani) (Allen & Hospedales 2019, Miaschi & Dell'Orletta 2020, Tulkens et al. 2016, Warstadt et al. 2019). Mojawapo ya mbinu hizo ni kutumia data inayotegemea mlinganisho ili kupima utambuzi wa mahusiano ya kiisimu kwa kutumia upachikaji wa maneno (Mikolov et al. 2013a, Turney 2012). Mlinganisho uliotajwa zaidi bila shaka ni "Neno lipi liko kwa mfalme kama mwanamke alivyo kwa mwanamume?" likiwa na jibu linalotarajiwa "malkia".

Mikolov et al. (2013a) walianzisha seti ya majaribio ya mlinganisho ya Google kwa Kiingereza ambayo ina kategoria tisa za kimofosintaksia na tano za semantiki. Kazi za semantiki zote ni za kienciklopedia ilhali kategoria za kimofosintaksia zinajumuisha kazi mbili za mofolojia ya kiunzi, sita za mofolojia ya kinyambuliko na kazi moja ya kienciklopedia, kila moja ikiwa na kati ya jozi 20 na 70 za maneno ya kipekee. Kama ilivyobainishwa na Gladkova et al. (2016), kuna masuala mawili na seti za majaribio zilizopo: kwanza, nyingi kati yake hazijasawazishwa kwa aina tofauti za mahusiano ya kiisimu na pili, matokeo kwa kawaida huripotiwa kama wastani wa seti nzima ya majaribio na si kwa kila aina ya uhusiano. Ili kurekebisha upungufu wa kwanza, walianzisha Seti Kubwa ya Majaribio ya Mlinganisho (BATS) inayoshughulikia aina kuu nne za mahusiano ya kiisimu: mofolojia ya kinyambuliko na ya kiunzi pamoja na semantiki za kileksikografia na kienciklopedia. Kila aina kuu kwa upande wake ina mahusiano 10 tofauti yenye jozi 50 za maneno za kipekee kila moja.

Hadi sasa, kumekuwa na uchunguzi mdogo wa upachikaji kwa Lugha za Afrika Kusini (Dlamini et al. 2021), na hakuna seti za majaribio za mlinganisho kama hizo zilizopo kwa Kiafrikana hasa. Kwa uchunguzi huu wa awali wa upachikaji wa maneno wa Kiafrikana, BATS ilitumika kama msukumo wa kuunda seti ndogo ya mlinganisho. Hatukujumuisha kazi zozote za semantiki za kileksikografia katika hatua hii lakini tuliamua kulenga mofolojia ya unyambulishaji na uyambishaji pamoja na kazi mbili za semantiki za kienciklopedia kwa kulinganisha na Kiingereza.

Hatua ya kwanza ilikuwa uchambuzi makini wa kategoria zilizotumika: kwa kuwa zimeegemezwa kwenye Kiingereza, si zote zinazoweza kutumika kwa lugha tofauti. Kwa mfano, mojawapo ya kazi za mofolojia ya unyambulishaji katika BATS, uundaji wa wingi wa kitenzi, haupo katika Kiafrikana. Zaidi ya hayo, kwa kategoria zinazoweza kutumika, tafsiri rahisi kwa kawaida si chaguo linalowezekana kutokana na tofauti za matumizi, marudio, na uundaji wa maneno katika Kiafrikana. Kwa kila kategoria iliyoshughulikiwa katika utafiti wetu, tulijaribu kupata sampuli wakilishi ya vipengele vingi vya kategoria hiyo iwezekanavyo. Kwa nomino za wingi kwa mfano, idadi kubwa ya aina tofauti za wingi wa kawaida na usio wa kawaida zinazopatikana katika vitabu vya kiada na sarufi zilijumuishwa. Vivyo hivyo kwa vivumishi vya ulinganishi na vya kupitiliza. Kipengele kimoja cha kiisimu ambacho kimekuwa na uchunguzi mdogo katika aina hii ya upimaji, lakini kimeenea sana katika Kiafrikana, ni uundaji wa maneno ambatani. Kwa hiyo, seti ndogo sana ya maneno ambatani ya nomino ilijumuishwa ili kubaini jinsi yanavyowakilishwa katika upachikaji.

Seti yetu ya majaribio kwa Kiafrikana inajumuisha kazi mbili za semantiki, zote za kiensaiklopidia, na kazi 11 za kimofosintaksia, tatu za kiunzi, saba za kinyambuliko pamoja na uundaji wa maneno ambatani. Kwa jumla, kuna "maswali" 16,313 ya mlinganisho. Jedwali la 1 linaonyesha muhtasari wa kategoria zilizochaguliwa, ikijumuisha ni jozi ngapi za maneno kwa kila kazi na mfano kwa kila moja.

Majibu ya maswali ya mlinganisho hukokotolewa kwa kuchukua uwakilishi wa vekta wa neno la 1 (V<sub>w1</sub>), kutoa vekta ya neno la 2 (V<sub>w2</sub>), linalohusiana kisemantiki au kimofosintaksia, kisha kuongeza vekta ya neno la tatu (V<sub>w3</sub>). Vekta inayotokana (V<sub>result</sub>) kisha inalinganishwa na vekta za maneno yote katika modeli ili kupata vekta yenye (zenye) umbali mdogo zaidi wa Euclidean. Matarajio ni kwamba vekta iliyo karibu zaidi na vekta ya matokeo itaonyesha uhusiano uleule kwa W3 kama uhusiano kati ya W1 na W2. Mfano wa kielelezo, V<sub>king</sub> - V<sub>man</sub> + V<sub>woman</sub> unapaswa kutoa vekta ambayo ina umbali mdogo zaidi kwa V<sub>queen</sub>. Vivyo hivyo, V<sub>stronger</sub> - V<sub>strong</sub> + V<sub>clear</sub> inapaswa kutoa vekta iliyo karibu zaidi na V<sub>clearer</sub>. Taswira ya vekta katika Kielelezo 1 inatoa dhana ya kwa nini hii inapaswa kufanya kazi. Mipambanuko kati ya man na woman, na king na queen, ingawa si sawa kabisa, inafanana. Kwa hiyo, kuondoa sifa za man kutoka kwa king, na kuongeza sifa za woman, kunapaswa kutoa vekta iliyo karibu na queen.

Jedwali 1: Seti ya data ya mlinganisho kwa Kiafrikana: Aina za mahusiano ya kiisimu, idadi ya jozi za maneno za kipekee na mifano.

p04-01.png

## 3.2 Majirani wa karibu

Njia ya pili iliyoelezwa na Collobert & Weston (2008) na pia kurejelewa na Mikolov et al. (2013a) ni uchanganuzi wa majirani wa karibu kwa seti maalum ya maneno. Jirani wa karibu wa neno huamuliwa tena kwa kutafuta vekta za maneno ambazo zina umbali mdogo zaidi wa Euclidean kati ya vekta ya swali na vekta za maneno mengine yoyote ambayo upachikaji wake upo katika modeli. Dhana ni kwamba mapitio ya kimaelezo ya majirani hutoa ufahamu wa ziada kuhusu aina za mahusiano ambayo upachikaji unajifunza. Kama mfano, upachikaji wa Kiingereza wa fastText kwa neno "run" unajumuisha "runs, running, ran" ambayo inaonyesha usimbaji wa baadhi ya sifa za kimofolojia-sintaksia. Ingawa haiwezekani kuunda kipimo kimoja kwa madhumuni ya tathmini, ni utaratibu muhimu wa kupata uelewa wa taarifa za msingi ambazo zimesimbwa katika upachikaji, kama vile uhyperimia, uhiponimia, usinonimia, au mahusiano ya kimofolojia-sintaksia.

Moja ya tahadhari za kukumbuka katika uchanganuzi wa jirani wa karibu ni kwamba aina tofauti za mahusiano zinaweza kupatikana ndani ya usanifu mmoja wa upachikaji, na huenda isiwe wazi mara moja ni taarifa gani zimesimbwa katika upachikaji. Mifumo thabiti inaweza kupatikana lakini inapaswa kutumika tu kufikia hitimisho pana na la jumla kuhusu taarifa zilizosimbwa.

p05-01.png

Kielelezo 1: Uwakilishi wa vekta unaohusiana na jinsia (kutoka Pennington et al. (2014))

Ili kuchunguza taarifa zilizosimbwa katika usanifu tofauti wa upachikaji kwa Kiafrikana, tulichagua maneno mawili kutoka kila kategoria iliyoorodheshwa katika Jedwali 1, jumla ya 26, na tukazalisha majirani watano wa karibu kwa kila neno katika kila usanifu tofauti. Haya yalikaguliwa kwa mikono ili kubaini ubora na asili ya upachikaji.

## 3.3 Tathmini ya kazi za mkondo wa chini

Njia ya kawaida zaidi ya kuthibitisha ubora wa upachikaji wa maneno ni matumizi yake kama sehemu ya kazi ya mkondo wa chini, kama vile uwekaji tagi wa POS, utambuzi wa huluki zilizotajwa au kujibu maswali. Matumizi ya upachikaji badala ya usimbaji moto mmoja yalikuwa moja ya hatua za kwanza kuwezesha mwelekeo wa sasa wa Ujifunzajikina katika NLP, na imeonyeshwa mara kwa mara kuwa kutumia upachikaji katika kazi za mkondo wa chini huboresha ubora wa teknolojia. Hii pia imeonyeshwa kuwa kesi kwa Kiafrikana ambapo mchanganyiko wa upachikaji wa FLAIR unaboresha matokeo ya uwekaji tagi wa POS na NER juu ya mifano ya awali (Eiselen 2022). Kutokana na vikwazo vya nafasi hatujumuishi matokeo haya katika uchambuzi wa sasa.

## 4 Kuchanganua upachikaji wa maneno wa Kiafrikana: Matokeo

Mojawapo ya motisha zetu za awali za utafiti huu ilikuwa kuchunguza ikiwa aina ya taarifa iliyosimbwa katika miundo tofauti ya upachikaji inafanana kwa lugha tofauti za kiisimu na ikiwa mbinu zinazotumiwa kutathmini upachikaji wa Kiingereza pia zinatumika kwa lugha zenye mofolojia changamano zaidi. Kwanza tutawasilisha matokeo ya kazi ya mlinganisho kwa kila kazi ndogo ya kiisimu, ikijumuisha mjadala wa kina wa uchunguzi wetu. Tathmini hii ya ndani ya kiasi ya upachikaji wa maneno kwa Kiafrikana inafuatwa na uchanganuzi wa ndani wa kimaelezo unaochunguza majirani wa karibu kama ilivyoelezwa katika sehemu ya 3.2.

## 4.1 Milinganisho: Tathmini ya kiasi

Kwa kutumia seti ya data ya mlinganisho kwa Kiafrikana iliyoelezwa awali, Usahihi kwa kila aina ya kazi unahesabiwa kando. Tafiti za awali mara nyingi huripoti tu Usahihi wa neno lenye umbali mdogo zaidi wa Euclidean. Tathmini yetu, hata hivyo, inajumuisha alama mbili za Usahihi: moja kwa mechi kutoka kwa neno la karibu zaidi (nafasi ya 1) na moja kwa mechi kutoka kwa maneno katika nafasi nne zinazofuata (nafasi ya 2-5). Kujumuisha zaidi ya ulinganifu wa karibu zaidi kunatupa ufahamu zaidi kuhusu uwakilishi tofauti wa upachikaji kwa kazi mbalimbali za mlinganisho. Zaidi ya hayo, wakati wa kuhesabu usahihi, maneno yote ya maswali ya ingizo yaliondolewa kutoka kwa matokeo. Kuacha marekebisho haya kulisababisha matokeo mabaya zaidi (athari iliyobainishwa pia katika Linzen (2016)). Jedwali la 2 linaonyesha matokeo kwa kategoria tofauti za kiisimu (zilizojumlishwa katika kiwango cha kategoria ndogo) na aina za upachikaji.

Katika majaribio yetu kwa Kiafrikana, kazi na aina ya upachikaji iliyofanya vizuri zaidi kwa ujumla ni GloVe kwenye kazi za semantiki kwa Usahihi wa 51,11%, ilhali matokeo mabaya zaidi pia yanapatikana kwa GloVe, lakini kwenye kazi za mofolojia ya kiambishi (1,11%). Ikilinganishwa na matokeo ya Kiingereza kwenye seti ya data ya Google (yakianzia karibu 60% (Mikolov et al. 2013a) hadi 60% ya juu (Levy & Goldberg 2014)), inashangaza jinsi aina zote za upachikaji zinavyofanya vibaya kwenye kazi zote kwa Kiafrikana. Tukilinganisha matokeo yetu ya GloVe na yale ya Gladkova et al. matokeo ya kina zaidi ya (2016) kuhusu BATS, utendaji kwa Kiafrikana tena uko chini kidogo.

Tukizingatia aina ya kazi, kwa kazi za kiunzi FLAIR hufanya vizuri zaidi na GloVe vibaya zaidi. Upachikaji wa GloVe na fastText una asilimia kubwa sana ya maneno ambayo hayakupatikana katika kumi bora (87% na 68% mtawalia) jambo linaloelezea utendaji wao duni. Sababu inayowezekana ya utendaji duni kwenye viunzi ni ukweli kwamba kwa ufafanuzi maneno yaliyooanishwa ni ya kategoria tofauti za kisintaksia na kwa kawaida hayatokei katika nafasi zinazofanana, hivyo hayana utokeaji-shirikishi unaofanana na neno la hoja na kwa hiyo yatakuwa na uwakilishi wa vekta tofauti kabisa.

Kwa mofolojia ya unyambulishaji, fastText ina asilimia kubwa zaidi ya mlinganisho sahihi kwa nafasi ya kwanza, huku GloVe ikiwa na ya chini zaidi, ingawa tofauti katika Usahihi ni ndogo ikilinganishwa na kazi nyingine. Kinachovutia ni kwamba, kuna tofauti kubwa katika maneno sahihi yanayopatikana katika nafasi 2-5: FLAIR hupata mlinganisho unaotafutwa katika zaidi ya 40% ya visa, ilhali aina nyingine za upachikaji hupata tu katika zaidi kidogo ya 20%. Upachikaji wa FLAIR pia hupata mlinganisho mingi zaidi ilhali GloVe hupata michache zaidi. Hili linaweza kuelezewa na ukweli kwamba upachikaji wa FLAIR husimba mfuatano wa herufi na kwa kawaida mofolojia ya unyambulishaji hutokea katika kiwango cha herufi. Kuhusiana na kazi ndogo za unyambulishaji, maumbo ya wingi na ya udogo ni magumu zaidi kutambua.

Matokeo ya mlinganisho wa maneno ambatani yanaonyesha kuwa upachikaji wa maneno haujifunzi uwakilishi wa viambajengo vya neno ambatani. Kufanya jaribio la mlinganisho linalotenga kichwa cha neno ambatani husababisha uwakilishi ulio katika nafasi ya vekta isiyohusiana kabisa, bila uwiano wowote na neno ambatani au kichwa chake. Ijapokuwa maneno ambatani ni ya kawaida kidogo kuliko kichwa cha neno ambatani kwa ujumla, hii haionekani kuwa sababu kuu inayochangia utendaji duni. Kama inavyojadiliwa katika sehemu inayofuata, majirani wa karibu wa kichwa wana maneno ambatani mengi, hata maneno ambatani yenye marudio ya chini kiasi, ikionyesha kuwa neno ambatani kamili linaonekana kama sawa na kichwa, lakini si lazima katika kiwango cha kiambajengo. Kipengele hiki cha upachikaji hakijachunguzwa kwa kina na kitahitaji uchunguzi zaidi katika siku zijazo.

Jedwali la 2: Usahihi kwa seti ya majaribio ya mlinganisho ya Kiafrikana kwenye kazi tofauti za kiisimu (zilizounganishwa katika kiwango cha kategoria ndogo) kwa aina tatu za upachikaji wa maneno (utendaji bora katika nafasi ya 1 kwa kila aina ya kazi kwa herufi nzito).

p06-01.png

Matokeo ya kazi za mlinganisho wa semantiki ni kinyume cha zile za mofosintaksia (bila kujumuisha uambishaji): GloVe inazidi kwa uwazi sana aina nyingine zote za upachikaji kwenye vipimo vyote. Hapa, upachikaji wa FLAIR unafanya vibaya zaidi, pia kwa misingi yote. Tahadhari moja kwa matokeo haya ni kwamba upachikaji wa FLAIR kwa asili ni wa kimuktadha, na uwakilishi tofauti wa vekta utazalishwa wakati wa kuzingatia maneno katika miktadha ya sentensi, jambo ambalo halikuwa hivyo katika majaribio yetu. Inawezekana kabisa kwamba upachikaji wa FLAIR unafanya vizuri zaidi kwenye kazi za mlinganisho wa semantiki ikiwa vekta zinazalishwa kwa maneno katika muktadha wa sentensi. Kwa bahati mbaya, kwa sasa hakuna mbinu iliyobainishwa vizuri ya kuzalisha upachikaji kwa aina hii ya kazi na ni jambo ambalo litahitaji kuzingatiwa katika kazi ya baadaye, hasa ikiwa aina hii ya uchambuzi itafanywa kwa aina nyingine za uwakilishi, kama vile mifano ya Transformer.

Kwa muhtasari, matokeo yetu yanathibitisha matokeo ya awali kuhusu Kiingereza kwamba aina tofauti za upachikaji zinafanya vizuri zaidi kwa kazi tofauti za mlinganisho wa kiisimu. Aidha, matokeo yetu kwenye seti hii ya majaribio ya mlinganisho yanaonyesha kwamba mofolojia ya unyambulishaji ni rahisi kuigwa kuliko mofolojia ya uundaji, ilhali utungaji wa maneno, sifa ya kawaida ya Kiafrikana, ni vigumu sana kuigwa. Kwa ujumla, utendaji kwenye Kiafrikana, lugha yenye mofolojia changamano zaidi na yenye uzalishaji zaidi, ni duni kuliko ilivyotarajiwa.

## 4.2 Majirani wa karibu zaidi: Tathmini ya kimaelezo

Baada ya uchambuzi wa kiasi zaidi kwa kutumia mlinganisho, sasa tunachunguza majirani wa karibu zaidi kwa Kiafrikana, ikiwa wanatofautiana na matarajio yetu, na nini tunaweza kujifunza kutokana na uchunguzi huu.

## upachikaji wa fastText

Matokeo makuu kwa upachikaji wa fastText ni kwamba kuna mifano michache sana au hakuna kabisa ya mahusiano ya semantiki katika majirani kwa maneno yoyote yaliyochaguliwa, na katika takriban visa vyote swali ni tungo ndogo ndani ya seti ya majirani wa karibu zaidi, tazama k.m. kwa verdeel (gawanya) na Berlyn (Berlin):

p07-01.png

p07-02.png

Hili linaweza kimsingi kuhusishwa na ukweli kwamba ujumuishaji wa taarifa za sehemu ndogo za maneno katika upachikaji una athari kubwa kwa uwakilishi wa vekta na unalingana na ukweli kwamba mofolojia ya Kiafrikana ina tija zaidi kuliko Kiingereza, katika vipengele vyote vya mifumo ya unyambulishaji na uundaji wa maneno. Matokeo ya hili ni kwamba umbo lolote la unyambulishaji au uundaji linaloonyesha aina fulani ya mabadiliko ya kichapaji, k.m. ufupishaji wa vokali mbili katika maumbo ya wingi, kwa kawaida halihusishwi na neno la swali na kwa hiyo halirudishwi kama jirani wa karibu zaidi. Zaidi ya hayo, kuwa Kiafrikana ni lugha ya utungaji wa maneno kunamaanisha kwamba idadi kubwa ya maneno yanayohusishwa kwa karibu na swali huwa ni ama unyambulishaji wa swali au tungo linalojumuisha swali, badala ya maneno yanayohusiana kisemantiki kama ilivyo mara nyingi katika Kiingereza.

## upachikaji wa FLAIR

Kama ilivyoonyeshwa hapo awali katika Sehemu ya 4.1, na kama inavyotarajiwa kutokana na vigezo vya tathmini, kimsingi hakuna mahusiano ya semantiki kati ya maneno ya swali na majirani wa karibu zaidi kwa upachikaji wa FLAIR. Tofauti na upachikaji wa fastText, upachikaji wa FLAIR haujumuishi neno la swali kama tungo ndogo la majirani, lakini kuna uwiano mkubwa na mifumo ya unyambulishaji. Kama mfano, majirani wa karibu zaidi wa neno leesbaar (inayosomeka) ni kama ifuatavyo:

p08-01.png

Kutoka kwa seti hii tunaona kwamba modeli aidha inakubaliana na kifungu kidogo cha 'lee' mwanzoni mwa neno au mofimu -baar (-able) mwishoni. Hii ni dalili kwamba modeli ina uwezekano mkubwa wa kuiga muundo wa viambishi.

## Upachikaji wa GloVe

Upachikaji wa GloVe ni tofauti kwa kiasi kikubwa na aina nyingine, kukiwa na mchanganyiko wa mifano ya kimofosintaksia, semantiki, na utokeaji-pamoja ukionekana katika orodha ya majirani wa karibu zaidi, kwa mfano:

p08-02.png

p08-03.png

Katika mifano ya hoog (juu), kuna mnyambuliko - hoë (juu), hoogte (urefu), hoër (juu zaidi); maneno yanayohusiana kisemantiki - laag (chini), bo (juu), bokant (juu, kilele); pamoja na maneno ambayo mara nyingi hutokea pamoja na hoog - meter hoog (juu kwa mita), so hoog (juu sana). Utokeaji-pamoja huu si lazima uwe wa mara kwa mara zaidi kwani te (pia), is (ni) na baie (sana) zote hutokea mara nyingi zaidi pamoja na hoog kuliko meter (VivA 2022). Mchoro uleule pia hutokea kwa ironie (kejeli) huku aina zote tatu za mahusiano zikipatikana katika majirani wa karibu zaidi.

## 5 Majadiliano na kazi ya baadaye

Uchunguzi wetu wa upachikaji wa Kiafrikana umeonyesha kuwa, sawa na lugha nyingine, aina tofauti za upachikaji hufanya kazi vizuri zaidi kwa kazi tofauti za mlinganisho wa kiisimu. Hata hivyo, uchambuzi makini wa mlinganisho na matokeo ya majirani wa karibu pia unaonyesha kuwa upachikaji huu hausimbui uwakilishi wa kiisimu ulio wazi kama kwa Kiingereza. Kuna sababu mbili zinazowezekana za tofauti hizi: Kiafrikana ni tofauti kiisimu kwa kiwango muhimu au data zaidi inahitajika ili kufunza upachikaji wenye uwakilishi zaidi. Kwa sasa, hatujui chanzo kikuu cha mapungufu ya upachikaji wa Kiafrikana ni nini, lakini tunakisia kuwa kuna uwezekano mkubwa kwamba ugumu ulioongezeka wa kimofolojia na ukosefu wa data vina ushawishi.

Katika kesi ya utofauti/ugumu wa kiisimu, hii ingemaanisha kuwa kadiri lugha inavyokuwa tofauti zaidi ikilinganishwa na Kiingereza, k.m. lugha nyingine za Afrika Kusini kama vile isiZulu au Setswana, ndivyo upachikaji wa neno unavyopaswa kufunzwa kwa uangalifu zaidi na ndivyo unavyopaswa kutathminiwa kwa umakinifu zaidi. Ikiwa uchache wa data ndio chanzo (ingawa milioni 250 ni kiwango cha kati katika suala la rasilimali), hii haileti matumaini mazuri kwa lugha zenye uhaba wa rasilimali wakati wa kujenga na baadaye kutumia upachikaji kwa kazi za NLP na/au kujaribu kuelewa kile wanachowakilisha.

Kwa ujumla, kwa kuwa upachikaji kwa lugha zenye ugumu wa kimofolojia, na ambazo hutengeneza maneno kwa kuunganisha, ni tofauti kwa kiasi kikubwa na Kiingereza, jinsi ya kufunza upachikaji huu na vile vile jinsi tunavyouchambua inahitaji kufikiriwa upya, hasa kwa lugha zenye rasilimali chache.

Kazi ya baadaye inajumuisha kujenga seti kamili ya mlinganisho inayoshughulikia kategoria zaidi za kiisimu zinazohusiana na Kiafrikana. Kupanua uchunguzi huu kwa lugha nyingine za Afrika Kusini pia ni changamoto ya kuvutia, hasa kutokana na uzalishaji wao mkubwa wa kimofolojia sanjari na data ndogo sana.

## Maelezo

[1] https://repo.sadilar.org

[2] https://dumps.wikimedia.org/

## Shukrani

Kazi hii iliwezekana kwa msaada wa kifedha wa Kituo cha Kitaifa cha teknolojia ya lugha ya Binadamu, mpango wa Idara ya Michezo, Sanaa na Utamaduni ya Afrika Kusini.

## Marejeo

Allen, C & Hospedales, T 2019, 'Analogies explained: Towards understanding word embeddings' , In: Proceedings of the 36th International Conference on Machine Learning, Long Beach, CA, PMLR, pp. 223-231.

Bengio, Y, Ducharme, R, Vincent, P & Jauvin, C 2003, 'A neural probabilistic language model' , Journal of Machine Learning Research, vol. 3, pp. 1137-1155.

Bojanowski, P, Grave, E, Joulin, A & Mikolov, T 2017, 'Enriching word vectors with subword information' , Transactions of the Association for Computational Linguistics, vol. 5, pp. 135-146.

Collobert, R & Weston, J 2008, 'A unified architecture for natural language processing: Deep neural networks with multitask learning' , In: Proceedings of the 25th International Conference on Machine learning, Valencia, Spain, pp. 160-167.

Conneau, A, Khandelwal, K, Goyal, N, Chaudhary, V, Wenzek, G, Guzmán, F, Grave, É, Ott, M, Zettlemoyer, L & Stoyanov, V 2020, 'Unsupervised Cross-lingual Representation Learning at Scale' , In: Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, Seattle, WA, ACL, pp. 8440-8451.

Dlamini, S, Jembere, E, Pillay, A & van Niekerk, B 2021, 'isiZulu Word Embeddings' , In: Proceedings of the 2021 Conference on Information Communications Technology and Society, Durban, South Africa, IEEE, pp. 121-126.

Eiselen, R 2022, 'Afrikaans Text Embeddings for Sequence Labelling with Deep Neural Networks' , In: Proceedings of the Southern African Conference for Artificial Intelligence Research 2022, Stellenbosch, South Africa, SACAIR.

Eiselen, R & Puttkammer, MJ 2014, 'Developing Text Resources for Ten South African Languages' , In: Proceedings of the 9th International Conference on Language Resources and Evaluation, Reykjavik, Iceland, ELRA, pp. 3698-3703.

Gladkova, A, Drozd, A & Matsuoka, S 2016, 'Analogy-based detection of morphological and semantic relations with word embeddings: what works and what doesn't' , In: Proceedings of the NAACL Student Research Workshop, San Diego, CA, ACL, pp. 8-15.

Grave, É, Bojanowski, P, Gupta, P, Joulin, A & Mikolov, T 2018, 'Learning Word Vectors for 157 Languages' , In: Proceedings of the 11th International Conference on Language Resources and Evaluation, Miyazaki, Japan, ELRA, pp 3483-3487.

Hanslo, R 2021, 'Evaluation of Neural Network Transformer Models for Named-Entity Recognition on Low-Resourced Languages' , In: Proceedings of the 16th Conference on Computer Science and Intelligence Systems (FedCSIS), Virtual, IEEE, pp. 115-119.

Heyns, N & Barnard, E 2020, 'Optimising word embeddings for recognised multilingual speech' , In: Proceedings of the Southern African Conference for Artificial Intelligence Research Conference 2020, Online, Virtual, SACAIR, pp. 102-116.

Levy, O & Goldberg, Y 2014, 'Linguistic Regularities in Sparse and Explicit Word Representations' , In: Proceedings of the 18th Conference on Computational Language Learning, Baltimore, MD, ACL, pp. 171-180.

Linzen, T 2016, 'Issues in evaluating semantic spaces using word analogies' , In: Proceedings of the 1st Workshop on Evaluating Vector Space Representations for NLP, Berlin, Germany, ACL, pp. 13-18.

Loubser, M & Puttkammer, MJ 2020, 'Viability of Neural Networks for Core Technologies for Resource-Scarce Languages' , Information, vol. 11, pp. 41-57.

Miaschi, A & Dell'Orletta, F 2020, 'Contextual and non-contextual word embeddings: an in-depth linguistic investigation' , In: Proceedings of the 5th Workshop on Representation Learning for NLP, Seattle, WA, ACL, pp. 110-119.

Mikolov, T, Chen, K, Corrado, G & Dean, J 2013a, 'Efficient estimation of word representations in vector space' , In: Proceedings of the International Conference on Learning Representations 2013, Scottsdale, AZ.

Mikolov, T, Sutskever, I, Chen, K, Corrado, GS & Dean, J 2013b, 'Distributed representations of words and phrases and their compositionality ' , Advances in Neural Information Processing Systems, vol. 26, pp. 3111-3119.

Mikolov, T, Yih, W & Zweig, G 2013c, 'Linguistic regularities in continuous space word representations' , In: Proceedings of the 2013 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Atlanta, GA, ACL, pp. 746-751.

Pennington, J, Socher, R & Manning, CD 2014, 'Glove: Global vectors for word representation' , In: Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing (EMNLP), Doha, Qatar, ACL, pp. 1532-1543.

Puttkammer, MJ, Eiselen, R, Hocking, J & Koen, F 2018, 'NLP Web Services for Resource-Scarce Languages' , In: Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics: System Demonstrations, Melbourne, Australia, ACL, pp. 43-49.

Ralethe, S 2020, 'Adaptation of deep bidirectional transformers for Afrikaans language' , In: Proceedings of the 12th Language Resources and Evaluation Conference, Marseille, France, ELRA, pp. 2475-2478.

Schnabel, T, Labutov, I, Mimno, D & Joachims, T 2015, 'Evaluation methods for unsupervised word embeddings' , In: Proceedings of the 2015 Conference on Empirical Methods in Natural Language Processing, Lisbon, Portugal, ACL, pp. 298-307.

Snyman, DP, McKellar, CA & Groenewald, H 2013, 'Autshumato English-Afrikaans Parallel Corpora' , Data set, v1.0, South African Centre for Digital Language Resources (SADiLaR), https://hdl.handle.net/20.500.12185/397.

Tulkens, S, Emmery, C & Daelemans, W 2016, 'Evaluating Unsupervised Dutch Word Embeddings as a Linguistic Resource' , In: Proceedings of the 10th International Conference on Language Resources and Evaluation, Portorož, Slovenia, ELRA, pp. 4130-4136

Turney, PD 2012, 'Domain and function: A dual-space model of semantic relations and compositions' , Journal of Artificial Intelligence Research, vol. 44, pp. 533-585.

Van Heerden, I & Bas, A 2021, 'AfriKI: Machine-in-the-Loop Afrikaans Poetry Generation' , In: Proceedings of the 1st Workshop on Bridging Human-Computer Interaction and Natural Language Processing, Virtual, ACL, pp. 74-80.

VivA 2022, 'Korpusportaal: Omvattend 1.11' , Virtuele Instituut vir Afrikaans (VivA), viewed 1 September 2022, <https://viva-afrikaans.org>.

Warstadt, A, Cao, Y, Grosu, I, Peng, W, Blix, H, Nie, Y, Alsop, A, Bordia, S, Liu, H & Parrish, A 2019, 'Investigating BERT's Knowledge of Language: Five Analysis Methods with NPIs' , In: Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing, Hong Kong, China, ACL, pp. 2877-2887.
