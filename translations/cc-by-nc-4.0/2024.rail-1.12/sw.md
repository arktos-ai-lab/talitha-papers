> Machine translation (sw) of "EthioMT: Parallel Corpus for Low-resource Ethiopian Languages" by Atnafu Lambebo Tonja, Olga Kolesnikova, Alexander Gelbukh, Jugal Kalita, https://aclanthology.org/2024.rail-1.12/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## EthioMT: Korasi Sambamba kwa Lugha za Ethiopia zenye Rasilimali Chache

Atnafu Lambebo Tonja, Olga Kolesnikova, Alexander Gelbukh, Jugal Kalita

**Taasisi**  
♣ University of Colorado Colorado Springs, USA

p01-01.png

p01-02.png

## Muhtasari

Utafiti wa hivi karibuni katika uchakataji wa lugha asilia (NLP) umepata utendaji wa kuvutia katika kazi kama vile tafsiri ya mashine (MT), uainishaji wa habari, na kujibu maswali katika lugha zenye rasilimali nyingi. Hata hivyo, utendaji wa MT bado hauridhishi kwa lugha zenye rasilimali chache. Hii inatokana na ukubwa mdogo wa korasi sambamba zinazopatikana katika lugha hizi, ikiwa korasi hizo zinapatikana kabisa. NLP katika lugha za Ethiopia inakabiliwa na matatizo yale yale kutokana na kutopatikana kwa seti za data zinazopatikana kwa umma kwa kazi za NLP, ikiwemo MT. Ili kusaidia jumuiya ya watafiti na kukuza utafiti kwa lugha za Ethiopia, tunatanguliza EthioMT - korasi mpya sambamba kwa lugha 15. Pia tunaunda kigezo kipya kwa kukusanya seti ya data kwa lugha zilizofanyiwa utafiti zaidi nchini Ethiopia. Tunatathmini korasi mpya iliyokusanywa na seti ya data ya kigezo kwa lugha 23 za Ethiopia kwa kutumia mbinu za Transformer na uboreshaji modeli.

## Maneno Muhimu

Korasi sambamba, EthioMT, tafsiri ya mashine, lugha yenye rasilimali chache, lugha za Ethiopia

## 1. Utangulizi

Katika miaka ya hivi karibuni, kutokana na maendeleo katika mbinu za Ujifunzajikina kama vile utengenezaji wa Transformer (Vaswani et al., 2017), tafsiri ya mashine (MT), kazi ya msingi katika uchakataji wa lugha asilia (NLP), imeonyesha maboresho makubwa katika upanuzi na ubora wa tafsiri (Wang et al., 2021). Inajulikana vyema kwamba hitaji muhimu la kuendeleza MT ni upatikanaji wa korasi sambamba. Upatikanaji wa korasi sambamba pia ni muhimu ili kuwezesha ujumuishaji wa lugha katika programu za MT kama vile Google Translation, Bing, na DeepL (Van der Meer, 2019). Idadi kubwa ya lugha duniani hazina ufikiaji wa zana kama hizo za tafsiri kwa kuwa ni lugha chache tu zenye rasilimali nyingi zimepokea uangalizi mkubwa (Tonja et al., 2023b).

Miundo na mbinu nyingi zilizotengenezwa kwa ajili ya lugha zenye rasilimali nyingi hazifanyi kazi vizuri katika mazingira ya rasilimali chache (Costa-jussà et al., 2022; Tonja et al., 2023b; King, 2015). Lugha zenye rasilimali chache pia zimetaabika kutokana na miundo ya teknolojia ya lugha (Joshi et al., 2019; Tonja et al., 2022). Kuunda mbinu mpya zenye nguvu kwa ajili ya programu za lugha ni changamoto wakati rasilimali ni chache na kiasi kidogo tu cha hata data isiyo na lebo kinapatikana. Tatizo linazidishwa wakati hakuna seti ya data sambamba iliyopo kwa lugha maalum (Joshi et al., 2020; Ranathunga et al., 2023; Adebara na Abdul-Mageed, 2022).

Ethiopia ni nchi inayojitokeza kwa utofauti wake wa ajabu wa kitamaduni na wa lugha, ikiwa na zaidi ya lugha 85 zinazozungumzwa (Woldemariam, 2007). Ni lugha chache tu za Ethiopia zimepokea uangalizi katika eneo la utafiti wa NLP na uundaji wa matumizi. Lugha nyingi zimeachwa nyuma kutokana na ukomo wa rasilimali (Costa-jussà et al., 2022; Tonja et al., 2023b). Ni vigumu kupata seti za data zinazopatikana kwa umma kwa ajili ya lugha za Ethiopia ili kuendeleza utafiti wa NLP kwa sababu watafiti wengi hawafanyi seti zao za data kupatikana kwa umma (Tonja et al., 2023b). Kutopatikana kwa seti za data za kigezo na matokeo kwa kazi za NLP, ikiwa ni pamoja na MT, hufanya utafiti kwa wageni na pande zenye nia kuwa mgumu sana. Hili kwa wazi ni gumu zaidi kwa lugha zenye data chache katika aina mbalimbali za kidijitali.

Makala haya yanatanguliza EthioMT: korasi sambamba ya lugha za Ethiopia zenye rasilimali chache zilizooanishwa na Kiingereza, na seti ya data ya kigezo na matokeo ya majaribio kwa lugha 23 za Ethiopia. Michango yetu ni ifuatayo: (1) Tunaunda korasi mpya sambamba ya lugha 15 za Ethiopia zilizooanishwa na Kiingereza. (2) Tunawasilisha seti ya kwanza ya vigezo vya data na matokeo kwa lugha za Ethiopia (Amharic, Afaan Oromo, Tigrinya na Kisomali) zenye rasilimali za kutosha. (3) Tunatathmini utendaji wa MT kwa kutumia korasi mpya na kuwasilisha matokeo ya kigezo. (4) Tunafanya korasi sambamba kuwa Programu huria ili kukuza ushirikiano na kuwezesha utafiti na maendeleo katika lugha za Kiethiopia zenye rasilimali chache.

## 2. Kazi Zinazohusiana

Lugha za Kiethiopia zinaainishwa kama zenye rasilimali chache kutokana na kutopatikana kwa rasilimali kwa kazi za NLP, ikiwa ni pamoja na MT (Tonja et al., 2023b). Ingawa MT ni eneo lililotafitiwa vizuri zaidi kwa lugha za Kiethiopia ikilinganishwa na matumizi mengine ya NLP (Tonja et al., 2023b), ni lugha chache tu zimepokea umakini wa kutosha kutoka kwa watafiti.

Lugha Zilizotafitiwa Ikilinganishwa na lugha nyingine za Kiethiopia, lugha zifuatazo zimepokea umakini mkubwa kutoka kwa watafiti. Hata hivyo, korasi zilizokusanywa hazipatikani katika eneo moja. Ni vigumu kupata seti za data za kigezo katika lugha hizi na seti za data na matokeo yanayohusiana ili kuzalisha tena na kulinganisha mbinu za MT.

Kiamhara - Watafiti wamekusanya seti za data sambamba na kupendekeza mbinu tofauti za MT kwa tafsiri ya Kiamhara-Kiingereza (Kenny, 2018; Teshome na Besacier, 2012; Hadgu et al., 2020; Ashengo et al., 2021; Biadgligne na Smaïli, 2022; Belay et al., 2022; Gezmu et al., 2021b,a; Biadgligne na Smaïli, 2021).

Afaan Oromo - Vilevile, kumekuwa na majaribio ya kuunda seti za data za MT za Afaan Oromo-Kiingereza (Meshesha na Solomon, 2018; Solomon et al., 2017; Adugna na Eisele, 2010; Chala et al., 2021; Gemechu na Kanagachidambaresan, 2021).

Kitigrinya - Kwa MT ya Kitigrinya-Kiingereza, watafiti wamejaribu kuunda seti za data sambamba (Tedla na Yamamoto, 2016, 2017; Berihu et al., 2020; Azath na Kiros, 2020; Kidane et al., 2021).

MT ya lugha nyingi Baadhi ya watafiti wamejumuisha lugha za Ethiopia pamoja na lugha nyingine katika mifumo ya MT ya lugha nyingi. Lakew et al. (2020) walikusanya na kuunda matokeo ya vigezo kwa Lugha tano za Afrika, zikiwemo zile zilizotajwa hapo juu kutoka Ethiopia. Costa-jussà et al. (2022), Goyal et al. (2022) na Fan et al. (2021) walijumuisha lugha za Ethiopia katika mifano yao ya MT ya lugha nyingi na seti za majaribio za vigezo. Vegi et al. (2022) walikusanya seti ya data sambamba ya lugha nyingi kwa ajili ya Lugha za Afrika, ikiwemo Kiamhari na Afaan Oromo kutoka Ethiopia.

Lugha nyingine Kumekuwa na juhudi za kuunda na kukusanya seti za data za MT kwa lugha nyingine za Ethiopia. Kwa mfano, Tonja et al. (2021) waliwasilisha korasi sambamba kwa lugha nne za Kiethiopia zenye rasilimali chache (Wolaita, Gamo, Gofa, na Dawuro).

## 3. EthioMT

## 3.1. Mjadala wa Lugha

Katika sehemu hii, tunaorodhesha lugha zilizojumuishwa katika korasi ya EthioMT. Lugha zilizojumuishwa katika korasi ya EthioMT ni za familia za lugha za Afro-Asiatic na Nilo-Saharan.

## 3.1.1. Familia ya lugha ya Afro-Asiatic

Familia ya lugha ya Afro-Asiatic inajumuisha takriban lugha 250 zinazozungumzwa Afrika Kaskazini, sehemu za Afrika Kusini mwa Jangwa la Sahara, na Mashariki ya Kati. Lugha zinazohusika na familia hii zimepangwa katika vikundi vidogo sita: Berber, Chadic, Cushitic, Egyptian, Omotic, na Semitic (Epstein na Kole, 1998). EthioMT ina lugha zinazohusika na vikundi vidogo vya Omotic, Cushitic, na Semitic.

1) Lugha za Omotic ni kikundi cha lugha zinazozungumzwa kusini - magharibi mwa Ethiopia, katika eneo la Mto Omo. Hati ya Kige'ez hutumika kuandika baadhi ya lugha za Kiomoti na hati ya Kilatini kwa nyinginezo (Amha, 2017). Lugha zinazomilikiwa na kundi hili ambazo tulizijumuisha katika EthioMT zimetolewa hapa chini.

Kibasketo kinazungumzwa katika woreda maalum ya Basketo ya Jimbo la Kanda la Kusini mwa Ethiopia. Lugha ya Kibasketo pia inaitwa Basketto, Baskatta, Mesketo, Misketto, na Basketo-Dokka. Wazungumzaji wanaiita lugha hiyo "Masketo", huku majirani zao wakiita "Basketo". Lugha hiyo ina lahaja mbili, Doko (Dokko) na Dollo (Dollo).

Kidawuro ni lugha inayozungumzwa na takriban watu milioni 1.09 katika eneo la Dawro la Mkoa wa Watu wa Kusini-Magharibi mwa Ethiopia. Pia hujulikana kama Dauro, Dawragna, Dawrogna, Ometay, Cullo, au Kullo. Lugha hiyo ina lahaja nne: Konta, Kucha, Longkhai, na Yawngkon.

Lugha ya Gamo inazungumzwa na watu takriban milioni 1.63 katika Eneo la Gamo la Jimbo la Kusini mwa Ethiopia. Wazungumzaji huita lugha hiyo Gamotstso.

Gofa inarejelea lugha inayozungumzwa katika eneo la Gofa la Jimbo la Kanda la Ethiopia Kusini ikiwa na wazungumzaji takriban 392,000.

Kafa, pia inajulikana kama Kefa au Kafi noono, ni lugha ya Kiomoti ya Kaskazini inayozungumzwa nchini Ethiopia. Inazungumzwa na takriban watu 830,000 katika Eneo la Keffa katika Mkoa wa Watu wa Ethiopia Kusini Magharibi. Lugha hiyo inazungumzwa hasa ndani na karibu na mji wa Bonga.

Kimalé kinazungumzwa katika Mkoa wa Omo nchini Ethiopia. Watu wa Male wanadumisha lugha yao kwa nguvu licha ya kukabiliwa na shinikizo na lugha za nje.

Shakicho, inayojulikana pia kama Mocha, Shakacho, au Shekka, inazungumzwa katika Eneo la Sheka kusini-magharibi mwa Ethiopia. Inahusiana kwa karibu na Kafa. Maneno ya mkopo kutoka Majang na Kiamhara yanaathiri msamiati wa lugha hiyo.

Wolaytta ni lugha ya Kiomoti ya Kaskazini inayozungumzwa na watu wa Welayta katika Eneo la Wolayita nchini Ethiopia. Inakadiriwa kuwa watu milioni 2 wanazungumza Wolaytta.

2) Lugha za Kikushi zinazungumzwa hasa katika Pembe ya Afrika, ikijumuisha Djibouti, Eritrea, Ethiopia, Somalia, na Kenya (Comrie, 2002). Lugha za Kikushi hutumia hati ya Kilatini na Ge'ez. Lugha zinazomilikiwa na familia hii ambazo zimejumuishwa katika kundi la EthioMT zinajadiliwa hapa chini.

Kiafar kinazungumzwa na watu wa Kiafar nchini Ethiopia, Eritrea, na Djibouti. Pia inajulikana kama Afar Af, Afaraf, na Qafar af. Watu takriban milioni 1.5 wanazungumza Afar, ambayo ni lugha inayokaribia zaidi na lugha ya Saho.

Afaan Oromo, pia inajulikana kama Oromo, inazungumzwa na takriban watu milioni 37 nchini Ethiopia, Kenya, Somalia, na Misri. Ni lugha ya tatu kwa ukubwa barani Afrika na lugha kubwa zaidi katika kundi la Kikushi kwa upande wa wazungumzaji. Watu wa Oromo ni kabila kubwa zaidi nchini Ethiopia na wanachangia zaidi ya asilimia 40 ya idadi ya watu.

p03-01.png

Jedwali 1: Lugha na maelezo ya seti ya data kwa korasi ya EthioMT. Inaonyesha lugha, familia za lugha, idadi ya wazungumzaji, kikoa, na ukubwa wa seti ya data iliyokusanywa. Katika safu ya kikoa Misc inaashiria korasi mchanganyiko iliyokusanywa kutoka vyanzo vya kidini, habari, na vinginevyo. Ukubwa ulio katika herufi nzito na kupigiwa mstari unaashiria seti ya data iliyokusanywa kutoka hazina tofauti na kazi zilizochapishwa na kuunganishwa kuwa seti moja ya data kwa lugha hiyo ili kuunda seti ya data ya kigezo.

Kiawngi ni lugha ya Kikushi ya Kati inayozungumzwa na watu wapatao 400,000 kaskazini-magharibi mwa Ethiopia. Pia inajulikana kama Awiya, Awi, Agaw, Agau, Agew, Agow, Awawar, na Damot. Wazungumzaji wengi wanaishi katika Eneo la Agew Awi la Mkoa wa Amhara. Kiawngi ni lugha ya Kiafro-Asia inayozungumzwa katika sehemu za Eneo la Metekel la Mkoa wa Benishangul-Gumuz.

Dashenech pia huitwa Dasenech, Daasanech, au Daasanaki. Watu wa Daasanach wanakizungumza nchini Ethiopia, Sudan Kusini, na Kenya. Watu wa Daasanach kimsingi wanaishi katika Bonde la Chini la Omo kusini-magharibi mwa Ethiopia, kando ya ufuo wa mashariki wa Ziwa Turkana nchini Kenya, na katika baadhi ya sehemu za Sudan Kusini.

Kihadiya kinazungumzwa na watu wa Hadiya wa Ethiopia. Lugha hiyo pia inajulikana kama Hadiyyisa, Hadiyigna, Adiya, Adea, Adiye, Hadia, Hadiya, na Hadya. Ni lugha ya Kikushi ya Nyanda za Juu Mashariki. Watu wa Hadiya ni kundi la kale la wenyeji katika sehemu ya kusini mwa Ethiopia. Kuna wazungumzaji milioni 1.4 wa lugha ya Hadiya, huku milioni 1.25 kati yao wakiizungumza kama lugha yao ya kwanza.

Korate ni lugha ya Kikushi ya Nyanda za Chini Mashariki inayozungumzwa na watu wa Konso kusini magharibi mwa Ethiopia. Ina takriban wazungumzaji asilia 500,000. Lugha hiyo ina lahaja tano: Duuro, Fasha, Karatti, Kholme, na Komso. Lahaja kuu mbili ni Fasha na Karatti. Konso inahusiana kwa karibu na Dirasha (inayojulikana pia kama Gidole). Inatumika kama "lugha ya biashara" au lingua franca nje ya eneo la watu wa Konso. Watu wa Konso ni kabila la Kikushi wanaoishi katika miji mikubwa kusini-kati mwa Ethiopia.

Sidama, au Sidaamu Afoo, ni lugha ya Kikushi inayozungumzwa na watu wa Sidama kusini mwa Ethiopia. Inatumia alfabeti ya Kilatini. Karibu watu milioni tisa wanazungumza Sidama. Ni lugha rasmi ya Sidama National Regional State (SNRS) na inatumika kama lugha ya kufundishia katika shule za msingi. Sidama ni tawi la familia ya Kikushi cha Mashariki cha Nyanda za Juu.

Kisomali ni lugha rasmi ya Somalia, inayozungumzwa na watu milioni 6.5. Pia inazungumzwa nchini Ethiopia, Djibouti, na Kenya. Jumla ya idadi ya wazungumzaji duniani kote inakadiriwa kuwa karibu milioni 22. Lugha yake ya karibu zaidi ni ile ya Ki-Oromo, inayozungumzwa katika sehemu fulani za Ethiopia na Kenya. Lugha nyingine zinazohusiana ni Afar na Saho.

3) Lugha za Kisemiti ni za jamii ndogo ya familia ya lugha ya Kiafrika-Kiasia, ikijumuisha Kiebrania, Kiaramu, Kiarabu, na Kiethiopia. Maandishi mengi yanayotumika kuandika lugha za Kisemiti ni abjad. Abjad inarejelea hati ya kialfabeti inayoacha baadhi au vokali zote. Lugha zinazomilikiwa na kundi hili tunazozichunguza zimetolewa hapa chini.

Kiamhara kinazungumzwa na Waamhara na maeneo mengine nchini Ethiopia. Ni lugha ya pili inayozungumzwa zaidi ya Kisemiti duniani, baada ya Kiarabu. Kiamhara ni lugha rasmi ya Ethiopia na imekuwa hivyo tangu karne ya 14. Pia inazungumzwa katika nchi nyingine, zikiwemo Eritrea, Kanada, Marekani, na Uswidi. Kiamhara kinaandikwa kwa kutumia grafimu ziitwazo fidal, ambazo maana yake ni "hati", "alfabeti", "herufi", au "kibambo".

Ge'ez ni lugha ya kale ya Kisemiti iliyoanzia Eritrea na kaskazini mwa Ethiopia. Ge'ez inaaminika kuwa na umri wa takriban miaka 5,000, na kuifanya kuwa ya zamani zaidi kuliko Kiebrania na lugha nyingine za Kisemiti za Kaskazini. Makanisa ya Kiorthodoksi na Kikatoliki nchini Eritrea na Ethiopia bado yanaitumia kama lugha ya kiliturujia. Ge'ez ilitoweka kama lugha asilia zaidi ya miaka 1,000 iliyopita. Iliandikwa kwa mifumo miwili: abjadi na baadaye abugida.

Kigurage kinazungumzwa na watu wa Gurage katikati mwa Ethiopia. Lugha za Kigurage zinaandikwa kwa kutumia hati ya Ge'ez, ambayo pia hutumika kwa lugha nyingine za Ethiopia. Lugha za Kigurage si mara zote zinaelewekana kwa pande zote.

Kitigrinya kinazungumzwa na watu wapatao milioni 9, hasa nchini Eritrea na Ethiopia. Huandikwa kwa hati ya Ge'ez, ambayo pia hutumika kwa Kiamhariki, lakini sarufi na matumizi ya Kitigrinya hutofautiana kwa kiasi kikubwa na Kiamhariki.

## 3.1.2. Familia ya lugha za Nilo-Sahara

Lugha za Kinilo-Sahara ni kundi la lugha zinazounda mojawapo ya familia nne za lugha katika bara la Afrika (Dimmendaal et al., 2019). Familia hiyo inashughulikia maeneo makuu mashariki na kaskazini mwa Ziwa Viktoria katika Afrika Mashariki na inaenea kuelekea magharibi hadi Bonde la Niger huko Mali, Afrika Magharibi (Comrie, 2002). Kinilo-Sahara kinaunda familia kumi za lugha tofauti na zilizojitenga, zikiwemo za Kisudani cha Mashariki.

Lugha za Kisudani cha Mashariki ni kundi la familia kumi za lugha zinazounda tawi la familia ya lugha ya Kinilo-Sahara. Lugha za Sudani ya Mashariki zinazungumzwa kutoka kusini mwa Misri hadi kaskazini mwa Tanzania. Lugha zilizotumika katika utafiti wetu na kundi hili zimeorodheshwa hapa chini.

Kimajang huzungumzwa na watu wa Majangir wa Ethiopia. Ni mwanachama wa kundi la lugha za Kisurmic, lakini ndiyo iliyojitenga zaidi katika kundi hilo. Inaainishwa kama sehemu ya tawi la Mashariki mwa Sudan la familia ya lugha za Kinilo-Sahara. Watu wa Majang wanaishi katika makazi yaliyotawanyika kusini-magharibi mwa Ethiopia. Wanaishi karibu na maeneo ya mijini ya Tepi na Mett'i, kusini-magharibi mwa Mizan Teferi na kuelekea Gambela.

Kimurle kinazungumzwa na watu wa Murle katika Sudan Kusini na Ethiopia. Lugha hiyo pia inajulikana kama Ajibba, Beir, Merule, Mourle, na Murule. Lugha ya Kimurle ni sehemu ya familia ya lugha za Kisurmic na ina lahaja tatu: Lotilla, Boma, na Olam. Idadi ya watu wa Murle ni kati ya 300,000 na 400,000. Wanaishi katika Kaunti ya Pibor iliyoko kusini-mashariki mwa Upper Nile (Jonglei)

Nuer au Thok Naath ni lugha ya Kiniloti ya Magharibi inayozungumzwa na watu wa Nuer wa Sudan Kusini na magharibi mwa Ethiopia. Lugha hiyo imeandikwa kwa alfabeti yenye msingi wa Kilatini, sawa na Dinka na Atuot. Zaidi ya watu 900,000 wanazungumza lugha ya Nuer katika jamii za ughaibuni katika Afrika Mashariki, Australia, na Marekani.

## 4. Seti ya Data

## 4.1. Ukusanyaji wa Seti ya Data

Tulikusanya seti za data kwa lugha 16 kutoka vikoa vya kidini kutoka kwenye tovuti. Pamoja na hayo, kwa Kiamhariki, Afaan Oromo, Kisomali, na Kitigrinya, tulikusanya seti za data zilizopo hadharani (Abate et al., 2019; Lakew et al., 2020; Vegi et al., 2022) kutoka vikoa tofauti ili kuunda seti moja ya data ya kipimo kwa kila lugha. Kwa lugha za Dawuro, Gamo, Gofa, na Wolaita, tulitumia seti ya data ya Tonja et al. (2021) kuunda matokeo ya kipimo kwa miundo iliyoboreshwa. Kitambazaji cha wavuti kilitumika kwa kila makala kutoa data ya Biblia kutoka kwenye tovuti baada ya kutambua muundo wa nyaraka za wavuti. Maktaba za Python kama vile requests, regular expression (RE), na Beautiful Soup (BS) zilitumika kuchanganua muundo wa tovuti na kutoa maudhui ya makala kutoka kwa URL fulani.

## 4.2. Upangaji wa Sentensi

Baada ya kukusanya korasi kwa ajili ya lugha hizo, tulipanga kila sentensi ya lugha za Ethiopia kwa sentensi katika data ya Kiingereza ili kuandaa seti ya data kwa ajili ya jaribio la MT. Tulifuata utaratibu sawa na wa Tonja et al. (2023a) kufanya upangaji wa sentensi.

## 4.3. Uchakataji wa Awali wa Seti ya Data

Baada ya kupanga maandiko ya lugha za Ethiopia na tafsiri zake sawa katika Kiingereza, tulichakata korasi kabla ya kuigawanya kwa ajili ya majaribio yetu. Hatua za uchakataji wa awali zilijumuisha kuondoa alama za nambari na herufi maalum, n.k. Pia tuliondoa sentensi sambamba zenye maneno chini ya matano. Kwa majaribio ya msingi, tuligawanya korasi iliyochakatwa mapema katika seti za mafunzo, seti ya uthibitisho, na seti za majaribio kwa uwiano wa 70:10:20, mtawalia. Jedwali la 1 linaonyesha taarifa za kina kuhusu lugha zilizochaguliwa, familia za lugha, kikoa, na ukubwa wa seti yao ya data.

## 5. Miundo ya Msingi

Tulitumia mbinu mbili zifuatazo kutathmini utumikaji wa korasi mpya iliyokusanywa na seti yetu mpya ya data ya kigezo kwa lugha nne (amh, orm, som, na tir) za Ethiopia.

Transformer ya msingi ni aina ya usanifu wa mtandao wa neva ulioletwa kwa mara ya kwanza katika makala ya Attention Is All You Need (Vaswani et al., 2017). Ubunifu mkuu wa usanifu wa Transformer ni utaratibu wa umakini, unaoruhusu mtandao kuzingatia kwa kuchagua sehemu tofauti za mfuatano wa pembejeo wakati wa kufanya utabiri. Hii inatofautisha mitandao ya neva ya kawaida inayojirudia (RNNs), ambayo huchakata pembejeo kwa mfuatano na inakabiliwa na tatizo la upotevu wa mwinuko.

Katika usanifu wa Transformer, tabaka nyingi za uangalizi binafsi na mitandao ya neva ya mbele hushughulikia vipengele vya mlolongo wa ingizo kwa sambamba. Kila tabaka linaweza kuchukuliwa kuwa "block" ambacho hupokea pato la tabaka lililotangulia kama pembejeo na kutumia mabadiliko yake kwalo. Utaratibu wa uangalizi binafsi huwezesha mtandao kupima umuhimu wa kila kipengele katika mfuatano wa pembejeo wakati wa kufanya utabiri. Kinyume chake, mitandao ya kusambaza mbele husaidia kunasa uhusiano usio wa mstari kati ya vipengele.

Transformer ni mbinu za kisasa zaidi zinazotumika sana katika kazi za NLP kama vile MT, ufupisho wa maandishi, na uchambuzi wa hisia. Jedwali la 3 linaonyesha vigezo vilivyowekwa kwa ajili ya modeli ya Transformer.

p05-01.png

Jedwali la 2: Vigezo vilivyotumika kwa mafunzo ya Transformer

Uboreshaji modeli ni mchakato wa kutumia modeli ya MT iliyofunzwa awali na kuirekebisha kwa kazi maalum ya utafsiri, kama vile kutafsiri kati ya jozi fulani ya lugha au katika kikoa maalum. Mchakato wa Uboreshaji modeli unahusisha kuchukua modeli iliyofunzwa awali, ambayo tayari imejifunza uwakilishi wa maneno na vishazi kutoka kwenye korasi kubwa ya maandishi, na kuifunza kwenye seti ndogo ya data ya mifano mahususi ya kazi. Hii inahusisha kusasisha vigezo vya modeli iliyofunzwa awali ili kunasa vyema mifumo na miundo katika kazi lengwa ya tafsiri.

Uboreshaji modeli unaweza kusaidia katika MT kwa sababu unaruhusu modeli iliyofunzwa awali kuzoea kazi mpya haraka bila kulazimika kufunza modeli mpya kutoka mwanzo. Hii ni ya manufaa hasa wakati wa kufanya kazi na data chache au kunapokuwa na haja ya kuzoea haraka mahitaji yanayobadilika ya tafsiri. Tulitumia M2M100-48, modeli ya lugha nyingi ya kisimbuzi-kifumbuzi (seq-to-seq) iliyofunzwa kwa tafsiri ya lugha nyingi-kwa-nyingi (Fan et al., 2021). Tulitumia modeli yenye vigezo vya 48M kutokana na vikwazo vya rasilimali za kompyuta. Tulitumia vigezo vifuatavyo kuboresha modeli ya m2m100.

p05-02.png

Jedwali la 3: Vigezo vilivyotumika kwa Uboreshaji modeli wa m2m100-48

## 6. Matokeo na Majadiliano

Tulitathmini mbinu zilizo hapo juu katika tafsiri ya pande mbili kutoka lugha za Ethiopia kwenda Kiingereza na Kutoka Kiingereza kwenda lugha za Ethiopia. Tulitumia vipimo vya tathmini vya Sacrebleu (Post, 2018) kutathmini modeli za tafsiri. Jedwali la 4 na 5 linaonyesha matokeo ya tafsiri katika pande zote mbili.

## 6.1. Kutumia Kiingereza kama lugha chanzo

Jedwali la 4 linaonyesha matokeo ya tafsiri kutoka Kiingereza kwenda lugha za Ethiopia. Tunapolinganisha matokeo ya mbinu hizo mbili, tunaona utendakazi duni wakati wa kutumia Transformer badala ya Uboreshaji modeli wa m2m100. Kama tunavyoweza kuona kutoka kwenye matokeo, utendakazi wa modeli ya Transformer pia unatofautiana katika masafa ya 0.01 - 17.8 spBLEU kutoka lugha hadi lugha kwa ukubwa tofauti wa korasi. Hii inaonyesha kuwa modeli ya tafsiri ya lugha mbili iliyofunzwa kutoka mwanzo inafanya kazi vibaya kwa mafunzo ya lugha yenye rasilimali chache ikilinganishwa na mbinu nyingine kama Uboreshaji modeli ya modeli za tafsiri za lugha nyingi. Uboreshaji modeli ya modeli ya lugha nyingi unaonyesha matokeo bora kuliko modeli iliyojengwa kutoka mwanzo kwa tafsiri ya Kiingereza kwenda lugha za Ethiopia. Katika mbinu ya Uboreshaji modeli, tunaweza pia kuona tofauti ya wazi ya alama kati ya lugha zenye korasi kubwa (amh, orm, tir, som) na nyingine (k.m. awn, aar, bst, n.k.). Hii inaonyesha kuwa Uboreshaji modeli wa modeli ya lugha nyingi utafanya kazi vizuri kwa lugha zenye ukubwa mkubwa zaidi wa korasi (k.m. orm, amh) kuliko lugha zenye ukubwa mdogo wa korasi (k.m. awn, bst, n.k.). Tunaweza pia kuona kutoka kwa matokeo kuwa mbinu zote mbili zinafanya kazi vizuri kwa lugha zenye maandishi ya vikoa mchanganyiko ikilinganishwa na kikoa kimoja (dini).

p06-01.png

Kielelezo 1: Matokeo ya tafsiri ya kipimo kwa mbinu za Transformer na zilizoboreshwa katika mwelekeo wote (kutoka na kwenda Kiingereza/lugha za Ethiopia)

p06-02.png

Jedwali 4: Matokeo ya tafsiri ya kipimo kutoka Kiingereza kwenda lugha za Ethiopia

p06-03.png

Jedwali 5: Matokeo ya tafsiri ya kipimo kutoka lugha za Ethiopia kwenda Kiingereza

## 6.2. Kutumia Kiingereza kama lugha lengwa

Jedwali la 5 linaonyesha matokeo ya tafsiri wakati wa kutumia Kiingereza kama lugha lengwa. Vivyo hivyo, kama tunavyoweza kuona kutoka kwa matokeo, modeli ya Transformer inafanya vibaya ikilinganishwa na modeli iliyorekebishwa vizuri wakati wa kutafsiri kutoka lugha za Ethiopia kwenda Kiingereza. Ikilinganishwa na Jedwali la 4, kutafsiri kwenda Kiingereza kunaonyesha maboresho katika modeli ya Transformer kwa lugha zinazofanana. Tunaona kwamba modeli iliyorekebishwa vizuri inaonyesha alama bora za Bleu wakati wa kutafsiri kwenda Kiingereza kuliko wakati wa kutafsiri kwenda lugha za Ethiopia. Matokeo yanaonyesha kwamba lugha zilizo na seti kubwa za data zina utendaji wa juu zaidi. Hii inaonyesha kwamba modeli zote mbili zinaonyesha maboresho wakati wa kutafsiri kutoka Ethiopia kwenda Kiingereza, wakati wa kutafsiri kutoka Kiingereza kwenda lugha za Ethiopia, modeli inakabiliwa na ugumu wa tafsiri.

## 7. Hitimisho na Kazi za Baadaye

Makala hii inawasilisha EthioMT, korasi mpya ya MT kwa lugha za Ethiopia zenye rasilimali chache zilizooanishwa na Kiingereza, na inajadili majaribio ya MT pamoja na matokeo.

Pia tunawasilisha seti mpya ya data ya kigezo kwa lugha nne za Ethiopia zilizokusanywa kutoka hazina za umma. Tulipata matokeo ya kigezo kwa mgawanyo mpya wa seti za mafunzo, uthibitishaji, na majaribio na tukatathmini korasi mpya na seti mpya ya data ya kigezo kwa kutumia Transformer na Uboreshaji modeli wa mifano ya tafsiri ya lugha nyingi. Kutoka kwa mbinu hizo mbili, uboreshaji modeli wa mfano wa lugha nyingi ulifanya vizuri zaidi kuliko mbinu ya Transformer katika pande zote mbili za tafsiri.

Katika siku zijazo, tutafanya kazi ili kuongeza ukubwa wa korasi za lugha zenye rasilimali chache kwa kutoa maandishi kutoka nyaraka zilizochanganuliwa na vyanzo tofauti. Aidha, tutatathmini mbinu tofauti za MT kwa lugha zenye rasilimali chache ili kuboresha utendaji.

## Maelezo

∗ Kazi iliyofanywa wakati wa mafunzo ya kazi katika Chuo Kikuu cha Colorado Colorado Springs.

1 https://www.bible.com/

## 8. Marejeo

Andargachew Mekonnen Gezmu, Andreas Nürnberger, and Tesfaye Bayu Bati. 2021a. Extended parallel corpus for amharic-english machine translation. arXiv preprint arXiv:2104.03543.

Andargachew Mekonnen Gezmu, Andreas Nürnberger, and Tesfaye Bayu Bati. 2021b. Neural machine translation for amharic-english translation. In ICAART (1), pages 526-532.

Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky, Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, et al. 2021. Beyond english-centric multilingual machine translation. The Journal of Machine Learning Research, 22(1):4839-4886.

Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz Kaiser, and Illia Polosukhin. 2017. Attention is all you need. Advances in neural information processing systems, 30.

Asmelash Teka Hadgu, Adam Beaudoin, and Abel Aregawi. 2020. Evaluating amharic machine translation. arXiv preprint arXiv:2003.14386.

Atnafu Lambebo Tonja, Christian MaldonadoSifuentes, David Alejandro Mendoza Castillo, Olga Kolesnikova, Noé Castro-Sánchez, Grigori Sidorov, and Alexander Gelbukh. 2023a. Parallel corpus for indigenous language translation: Spanishmazatec and spanish-mixtec. arXiv preprint arXiv:2305.17404.

Atnafu Lambebo Tonja, Michael Melese Woldeyohannis, and Mesay Gemeda Yigezu. 2021. A parallel corpora for bi-directional neural machine translation for low resourced ethiopian languages. In 2021 International Conference on Information and Communication Technology for Development for Africa (ICT4DA), pages 71-76. IEEE.

Atnafu Lambebo Tonja, Olga Kolesnikova, Muhammad Arif, Alexander Gelbukh, and Grigori Sidorov. 2022. Improving neural machine translation for low resource languages using mixed training: The case of ethiopian languages. In Mexican International Conference on Artificial Intelligence, pages 30-40. Springer.

Atnafu Lambebo Tonja, Tadesse Destaw Belay, Israel Abebe Azime, Abinew Ali Ayele, Moges Ahmed Mehamed, Olga Kolesnikova, and Seid Muhie Yimam. 2023b. Natural language processing in ethiopian languages: Current state, challenges, and opportunities. arXiv preprint arXiv:2303.14406.

Azeb Amha. 2017. The omotic language family. Cambridge University Press.

Benjamin Philip King. 2015. Practical Natural Language Processing for Low-Resource Languages. Ph.D. thesis.

Bernard Comrie. 2002. Languages of the world: who speaks what. In An encyclopedia of language, pages 529-543. Routledge.

Dorothy Kenny. 2018. Machine translation. In The Routledge handbook of translation and philosophy, pages 428-445. Routledge.

Ebisa A Gemechu and GR Kanagachidambaresan. 2021. Machine learning approach to english-afaan oromo text-text translation: Using attention based neural machine translation. In 2021 4th International Conference on Computing and Communications Technologies (ICCCT), pages 80-85. IEEE.

Edmund L Epstein and Robert Kole. 1998. The language of African literature. Africa World Press.

Gerrit J Dimmendaal, Colleen Ahland, Angelika Jakobi, and Constance Kutsch Lojenga. 2019. Linguistic features and typologies in languages commonly referred to as 'nilo-saharan'. Cambridge Handbook of African Languages, pages 326-381.

Haifeng Wang, Hua Wu, Zhongjun He, Liang Huang, and Kenneth Ward Church. 2021. Progress in machine translation. Engineering.

Hirut Woldemariam. 2007. The challenges of mothertongue education in ethiopia: The case of north omo area. Language Matters, 38(2):210-235.

Ife Adebara and Muhammad Abdul-Mageed. 2022. Towards afrocentric NLP for African languages: Where we are and where we can go. In Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 3814-3841, Dublin, Ireland. Association for Computational Linguistics.

Lidia Kidane, Sachin Kumar, and Yulia Tsvetkov. 2021. An exploration of data augmentation techniques for improving english to tigrinya translation. arXiv preprint arXiv:2103.16789.

M Azath and Tsegay Kiros. 2020. Statistical machine translator for english to tigrigna translation. Int. J. Sci. Technol. Res, 9(1):2095-2099.

Marta R Costa-jussà, James Cross, Onur Çelebi, Maha Elbayad, Kenneth Heafield, Kevin Heffernan, Elahe Kalbassi, Janice Lam, Daniel Licht, Jean Maillard, et al. 2022. No language left behind: Scaling human-centered machine translation. arXiv preprint arXiv:2207.04672.

Matt Post. 2018. A call for clarity in reporting BLEU scores. In Proceedings of the Third Conference on Machine Translation: Research Papers, pages 186-191, Belgium, Brussels. Association for Computational Linguistics.

Million Meshesha and Yitayew Solomon. 2018. English-afaan oromo statistical machine translation. International Journal of Computational Linguistic (IJCL), 9(1).

Mulu Gebreegziabher Teshome and Laurent Besacier. 2012. Preliminary experiments on english-amharic statistical machine translation. In Spoken Language Technologies for Under-Resourced Languages.

Naman Goyal, Cynthia Gao, Vishrav Chaudhary, Peng-Jen Chen, Guillaume Wenzek, Da Ju, Sanjana Krishnan, Marc'Aurelio Ranzato, Francisco Guzmán, and Angela Fan. 2022. The flores-101 evaluation benchmark for low-resource and multilingual machine translation. Transactions of the Association for Computational Linguistics, 10:522-538.

Pavanpankaj Vegi, J Sivabhavani, Biswajit Paul, Abhinav Mishra, Prashant Banjare, KR Prasanna, and Chitra Viswanathan. 2022. Webcrawl african: A multilingual parallel corpora for african languages. In Proceedings of the Seventh Conference on Machine Translation (WMT), pages 1076-1089.

Pratik Joshi, Christain Barnes, Sebastin Santy, Simran Khanuja, Sanket Shah, Anirudh Srinivasan, Satwik Bhattamishra, Sunayana Sitaram, Monojit Choudhury, and Kalika Bali. 2019. Unsung challenges of building and deploying language technologies for low resource language communities. arXiv preprint arXiv:1912.03457.

Pratik Joshi, Sebastin Santy, Amar Budhiraja, Kalika Bali, and Monojit Choudhury. 2020. The state and fate of linguistic diversity and inclusion in the nlp world. arXiv preprint arXiv:2004.09095.

Sisay Adugna and Andreas Eisele. 2010. English-oromo machine translation: An experiment using a statistical approach. In Proceedings of the Seventh International Conference on Language Resources and Evaluation (LREC'10).

Sisay Chala, Bekele Debisa, Amante Diriba, Silas Getachew, Chala Getu, and Solomon Shiferaw. 2021. Crowdsourcing parallel corpus for english-oromo neural machine translation using community engagement platform. arXiv preprint arXiv:2102.07539.

Solomon Teferra Abate, Michael Melese, Martha Yifiru Tachbelie, Million Meshesha, Solomon Atinafu, Wondwossen Mulugeta, Yaregal Assabie, Hafte Abera, Biniyam Ephrem, Tewodros Gebreselassie, et al. 2019. English-ethiopian languages statistical machine translation. In Proceedings of the 2019 Workshop on Widening NLP, pages 27-30.

Surafel M Lakew, Matteo Negri, and Marco Turchi. 2020. Low resource neural machine translation: A benchmark for five african languages. arXiv preprint arXiv:2003.14402.

Surangika Ranathunga, En-Shiun Annie Lee, Marjana Prifti Skenduli, Ravi Shekhar, Mehreen Alam, and Rishemjit Kaur. 2023. Neural machine translation for low-resource languages: A survey. ACM Computing Surveys, 55(11):1-37.

Tadesse Destaw Belay, Atnafu Lambebo Tonja, Olga Kolesnikova, Seid Muhie Yimam, Abinew Ali Ayele, Silesh Bogale Haile, Grigori Sidorov, and Alexander Gelbukh. 2022. The effect of normalization for bi-directional amharic-english neural machine translation. In 2022 International Conference on Information and Communication Technology for Development for Africa (ICT4DA), pages 84-89. IEEE.

Jaap Van der Meer. 2019. Translation technology–past, present and future. The Bloomsbury companion to language industry studies, pages 285-310.

Yeabsira Asefa Ashengo, Rosa Tsegaye Aga, and Surafel Lemma Abebe. 2021. Context based machine translation with recurrent neural network for english-amharic translation. Machine Translation, 35(1):19-36.

Yemane Tedla and Kazuhide Yamamoto. 2016. The effect of shallow segmentation on english-tigrinya statistical machine translation. In 2016 International Conference on Asian Language Processing (IALP), pages 79-82. IEEE.

Yemane Tedla and Kazuhide Yamamoto. 2017. Morphological segmentation for english-to-tigrinya statistical machinetranslation. Int. J. Asian Lang. Process, 27(2):95-110.

Yitayew Solomon, Million Meshesha, and Wendewesen Endale. 2017. Optimal alignment for bidirectional afaan oromo-english statistical machine translation. vol, 3:73-77.

Yohanens Biadgligne and Kamel Smaïli. 2021. Parallel corpora preparation for english-amharic machine translation. In Advances in Computational Intelligence: 16th International Work-Conference on Artificial Neural Networks, IWANN 2021, Virtual Event, June 16-18, 2021, Proceedings, Part I 16, pages 443-455. Springer.

Yohannes Biadgligne and Kamel Smaïli. 2022. Offline corpus augmentation for english-amharic machine translation. In 2022 5th International Conference on Information and Computer Technologies (ICICT), pages 128-135. IEEE.

Zemicheal Berihu, Gebremariam Mesfin Assres, Mulugeta Atsbaha, and Tor-Morten Grønli. 2020. Enhancing bi-directional english-tigrigna machine translation using hybrid approach. In Norsk IKT-konferanse for forskning og utdanning, 1.
