> Machine translation (sw) of "Topic modelling to support English text selection for translation into South Africa's other official languages" by Jocelyn Mazarura, Febe de Wet, https://upjournals.up.ac.za/index.php/dhasa/article/view/4447, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## Uundaji wa mada ili kusaidia uteuzi wa maandishi ya Kiingereza kwa ajili ya tafsiri katika lugha nyingine rasmi za Afrika Kusini

Jocelyn Mazarura, Febe de Wet

**Taasisi**  
Mazarura, Jocelyn  
Department of Statistics, University of Pretoria  
  
de Wet, Febe  
Department of Electrical and Electronic Engineering, Stellenbosch University & School of Electrical,  
Electronic and Computer Engineering, North-West  
University  


## Muhtasari

Data ya mafunzo ifaayo ni sharti la awali kwa ajili ya ukuzaji wa mbinu za uchakataji wa lugha asilia (NLP). Kiasi kikubwa cha data za lugha kwa kawaida kinahitajika ili kuunda zana za NLP zinazofanya kazi katika kiwango cha kisasa. Rasilimali nyingi kama hizo kwa sasa zinapatikana tu katika lugha chache. Lugha zilizobaki zinapaswa kutafuta njia mbadala ili kuwezeshwa kwa "NLP". Lengo la utafiti unaoripotiwa hapa ni kufanya data zaidi ya lugha ipatikane ili kusaidia maendeleo ya NLP katika lugha rasmi za Afrika Kusini. Katika makala hii tunawasilisha wazo la kuzalisha data za maandishi kwa njia ya tafsiri. Tunapendekeza pia matumizi ya uundaji mada ili kutambua maandishi katika lugha chanzo yenye rasilimali nyingi ambayo yatatoa tafsiri zenye maana katika lugha lengwa zenye rasilimali chache. Kwa undani zaidi, makala hii inaeleza jinsi uigaji wa mada ulivyotumika kutambua makala za Wikipedia ya Kiingereza ambazo zinafaa kutafsiriwa katika lugha nyingine 10 rasmi za Afrika Kusini.

## Maneno Muhimu

DHASA, uigaji wa mada, uteuzi wa maandishi, tafsiri, lugha zenye rasilimali chache

## 1 Utangulizi

Rasilimali zinazohitajika kutekeleza utendaji wa hali ya juu katika programu za uchakataji wa lugha asilia (NLP) kama vile uzalishaji wa maandishi, kujibu maswali, utambuzi longo otomatiki, n.k. kwa sasa zinapatikana tu katika lugha chache zenye rasilimali nyingi. Zile lugha nyingine 6 000 ambazo zinazungumzwa duniani leo ni lazima kutafuta njia za badala za kujiandaa kwa jamii ya kidijitali ya wakati ujao ambayo katika hizo uwezo wa kutayarisha lugha na usemi kwa njia ya moja kwa moja utakuwa wa lazima kwa ajili ya ushiriki. Programu kama vile injini za utafutaji na roboti za mazungumzo hutengenezwa kwa kutumia data ya maandishi huku nyingine, kama mifumo ya kiotomatiki ya kuamrisha, zikihitaji data ya maandishi na ya longo ili kutekelezwa. Utafiti huu wa sasa unalenga hasa kutengeneza rasilimali za maandishi zinazofaa kwa uigaji wa lugha katika lugha rasmi za Afrika Kusini.

Idadi kadhaa ya rasilimali za maandishi zimetengenezwa wakati wa miradi iliyopita na zinapatikana katika katalogi ya rasilimali za lugha ya Kituo cha Afrika Kusini cha Rasilimali za Lugha za Kidijitali (SADiLaR[1]). Hata hivyo, ukubwa wa mkusanyiko wa maandishi uliopo hautoshi kutekeleza utambuzi longo otomatiki (ASR) wa msamiati mkubwa. Aidha, rasilimali pana zaidi ya maandishi inayopatikana katika lugha zote rasmi, NCHLT Text Corpora (Eiselen & Puttkammer 2014), ilitokana na nyaraka zilizochapishwa kwenye kikoa cha tovuti ya serikali ya Afrika Kusini (*.gov.za). Kwa sababu hiyo, msamiati na matumizi ya lugha ni mahususi kwa kikoa. Lengo la kazi ya sasa ni kuunda rasilimali mpya za maandishi zinazoweza kutumika pamoja na au kwa kuchanganywa na kopa zilizopo. Data mpya inapaswa kwa hakika kuwakilisha utofauti wa vikoa na inapaswa kuchangia katika kupanua leksika zilizopo.

Chanzo kimoja kilicho wazi na chenye uwezekano wa kuwa na utajiri wa data ya maandishi ni wavuti ya ulimwengu. Ingawa lugha nyingi zina angalau uwepo fulani kwenye wavuti, pia kuna nyingi ambazo hazijawakilishwa kwenye intaneti kabisa. Hata hivyo, ukweli kwamba lugha ipo kwenye wavuti hauhakikishii kwamba data inayopatikana inafaa kwa utafiti wa NLP. Maandishi ya wavuti pia si ya ubora mzuri kwa kawaida. Aidha, baadhi ya maandishi ya mtandaoni yanahusu kikoa maalum sana. Hasa kwa lugha zenye rasilimali chache, maandishi ya mtandaoni huwa yanajikita kwenye machapisho ya kidini au nyaraka za serikali.

Mkakati ambao umependekezwa ili kuimarisha uwepo wa mtandaoni wa lugha zisizowakilishwa vya kutosha ni kuunda maandishi kwa, kwa mfano, kuhimiza wazungumzaji wa lugha ya kwanza kuandika makala za Wikipedia (Pretorius & Wolff 2020). Mbinu hiyo imefanikiwa katika baadhi ya matukio na imesababisha michango ya kwanza kabisa kwa Wikipedia katika lugha nyingi. Licha ya faida ya kuzalisha maandishi "asilia", huu ni mchakato wa polepole na, hadi sasa, haujatoa kiasi cha data ya maandishi kinachohitajika na mbinu za Ujifunzajikina zinazotamani data ambazo kwa sasa zinatumika sana katika uwanja wa NLP.

Karatasi hii inapendekeza tafsiri kwa kiwango kikubwa kama mbadala wa uzalishaji wa maandishi[2]. Licha ya tofauti kati ya maandishi halisi na yaliyotafsiriwa, tafsiri zinaweza kuziba pengo kati ya kutokuwa na data yoyote inayopatikana kabisa na kuwa na data ya kutosha tu kuanzisha mifumo ya nusu-simamiwa ambayo inaweza kuchangia katika kuendeleza rasilimali zaidi. Kupendekeza tafsiri kama njia ya kuzalisha maandishi katika lugha yenye rasilimali chache pia inamaanisha kuamua ni nini kinachopaswa kutafsiriwa. Majibu mengi ya dhahiri kwa swali hili, kwa mfano makala 100 maarufu zaidi za Wikipedia ya Mandarin, si lazima yatoe maandishi yenye maana katika lugha nyingine. Utafiti unaoripotiwa katika makala hii unawakilisha jaribio la kutafuta njia ya kimfumo ya kutambua maandishi yanayofaa kutafsiriwa na ambayo yangetoa maandishi yenye maana katika lugha lengwa. Kwa undani zaidi, tunaeleza jinsi makala za Wikipedia ya Kiingereza ambazo zinafaa kutafsiriwa katika lugha rasmi nyingine 10 za Afrika Kusini zilivyotambuliwa.

## 2 Usuli

Majaribio ya awali ya kutafsiri kazi za NLP na seti za data kutoka lugha zenye rasilimali nyingi kwenda lugha zenye rasilimali chache yamekumbana na changamoto mbalimbali zinazohusiana na tofauti kati ya lugha chanzi na lugha lengwa. Kwa mfano, wakati wa uundaji wa WordNet ya Afrika, iligundulika kuwa dhana nyingi katika WordNet zilizopo hazikuwa zimewekwa katika msamiati wa Lugha za Afrika Kusini (Griesel & Bosch 2020). Tofauti hii ilitatuliwa kwa kutumia SIL Comparative African Wordlist (SILCAWL) iliyoanzishwa na Snider & Roberts (2004) kama mwongozo wa kuongeza synseti mpya kwenye WordNet ya Afrika. Orodha hii ina uteuzi mkubwa wa maneno yanayohusiana na mambo mbalimbali, kama vile sehemu za mwili, hisia na hatua za maisha katika Kiingereza na Kifaransa. Maudhui ya viingizo katika orodha hii - kwa kiasi kikubwa - yamewekwa katika msamiati wa lugha rasmi za Afrika Kusini. Kutumia SILCAWL kama hatua ya mwanzo kuna faida ya ziada kwamba hakuendelezi rasilimali za lugha zenye upendeleo wa kitamaduni na kiakili.

Mfano mwingine wa rasilimali ya NLP iliyoundwa kwa tafsiri ni seti ya data ya FLORES, rasilimali ya lugha nyingi iliyokusanywa ili kuwezesha upimaji katika tafsiri ya mashine ya lugha zenye rasilimali chache na lugha nyingi (Goyal et al. 2022). Seti ya data ina sentensi 3001 zilizotafsiriwa katika - wakati wa kuandika - lugha 200, lakini idadi hii inaendelea kupanuka. Afikaans, Sepedi, SiSwati, Xitsonga, Setswana, isiXhosa na isiZulu tayari zimejumuishwa katika seti ya FLORES. Tafsiri katika Sesotho itatolewa hivi karibuni, ikifuatiwa na isiNdebele na Tshivenda.

Sentensi za FLORES zilichaguliwa kutoka makala 842 za Wikipedia ya Kiingereza. Makala yalichaguliwa kuwakilisha mada mbalimbali ikiwemo uhalifu, majanga, burudani, jiografia, afya, asili, siasa, sayansi, michezo, na usafiri. Mtu anaweza kusema kwamba tafsiri zaidi zinapaswa kuzalishwa kwa kupanua orodha iliyopo ya makala kwa makala zaidi juu ya mada sawa au zinazofanana. Hata hivyo, mada ziliwekwa kwa mikono kwa sentensi katika mkusanyiko wa FLORES jambo ambalo linamaanisha kwamba kupanua au kurudia mchakato huo haiwezekani. Aidha, ukaguzi zaidi wa seti ya data ya FLORES ulifichua kwamba vikoa vya chanzo, Wikinews, Wikijunior na WikiVoyage, vina makala nyingi ambazo huenda zisiwe muhimu kila wakati katika muktadha wa Kiafrika na ambazo pengine zingesababisha masuala yale yale ya uwekaji wa kileksika yaliyojitokeza wakati wa mradi wa African Wordnet.

Data ya Mbegu ya No Language Left Behind (NLLB-Seed) iliundwa kwa namna sawa na data ya FLORES na inajumuisha seti ya sentensi za Wikipedia zilizotafsiriwa kitaalamu (NLLB Team et al. 2022). Hata hivyo, tofauti na data ya FLORES, sentensi za NLLB-Seed zilichukuliwa kutoka kwa kile kinachoitwa na Wikimedia "orodha ya makala ambazo kila Wikipedia inapaswa kuwa nazo". Orodha hiyo inajumuisha mada katika nyanja tofauti za maarifa na shughuli za binadamu, sawa na zile zilizo katika SILCAWL. Data ya NLLB-Seed kwa sasa inajumuisha takriban sentensi elfu sita katika lugha 39. Ingawa orodha hiyo inaweza kuwa hatua nzuri ya kuanzia kwa juhudi pana za utafsiri, haitarajiwi kwa sasa kwamba orodha hiyo itapanuka kadri muda unavyopita. Kinyume chake, mbinu ya uundaji wa mada inayopendekezwa hapa inaweza kuzalisha idadi yoyote ya sentensi na inaweza hata kurudiwa ikihitajika.

Sehemu iliyobaki ya karatasi hii imeundwa kama ifuatavyo. Sehemu ya 3 inatoa muhtasari wa uundaji wa mada na Sehemu ya 4 inaeleza jinsi modeli zinavyotathminiwa. Sehemu ya 5 inaeleza jinsi data ilivyochaguliwa ili kuunda modeli ya mada ya Wikipedia inayohusiana na SILCAWL. Matokeo ya uchunguzi yanawasilishwa katika Sehemu ya 6, yakifuatiwa na mjadala katika Sehemu ya 7.

## 3 Uundaji wa mada

Uundaji wa mada ni mbinu ya uchimbaji wa maandishi inayotumika kufichua mada fiche katika mkusanyiko mkubwa wa nyaraka. Modeli nyingi za mada hazina usimamiaji, hivyo kuzifanya kuwa zana zenye nguvu katika kushughulikia matatizo ya ulimwengu halisi kwani data kwa kawaida haina lebo katika mazoezi. Modeli za mada zimepata matumizi katika matumizi mengi, ikiwa ni pamoja na uchambuzi wa hisia (Rana et al. 2016), uainishaji wa maandishi, uainishaji wa nyaraka, ufupisho, n.k. (Boyd-Graber et al. 2017).

Ugawaji wa Dirichlet Fichika (LDA) ni mojawapo ya miundo ya mada maarufu zaidi (Blei et al. 2003). Ni mfano wa Bayesian wa ngazi tatu wenye daraja, ambapo kila hati inaigwa kama mchanganyiko wenye kikomo juu ya seti ya mada fiche, ambapo mada inafafanuliwa kama usambazaji juu ya maneno ya msamiati. LDA ni mfano wa kizalishaji wa kitakwimu kwani inaiga dhana kwamba kila hati huundwa kupitia mchakato ufuatao wa kizalishaji:

Tukidhani kuwa korpusi ina mada K, chagua kwa nasibu usambazaji wa mada K, ϕk.

2. Kwa kila moja ya hati M katika mkusanyiko, chagua kwa nasibu usambazaji juu ya mada, θm.

3. Tuseme kwamba kila hati ina maneno machafu. Kwa kila neno, wmn, katika hati ya m.

a. Chagua kwa nasibu mada, kutoka kwa usambazaji juu ya mada kutoka Hatua ya 2, ambapo zmn inaashiria kiashirio cha mada iliyochaguliwa.

b. Chagua neno bila mpangilio kutoka kwa mada iliyochaguliwa kulingana na usambazaji wake kutoka Hatua ya 1.

Mchakato huu wa kizalishaji unaweza kufupishwa kwa michoro kama ilivyo kwenye Kielelezo 1.

LDA inaweza kutumika kwa urahisi kwa seti yoyote ya data kwa kutumia kifurushi cha gensim[3] katika Python. Matokeo makuu ya kuvutia kwa kawaida ni mada na usambazaji wa mada wa kila hati. Gensim pia ina uwezo wa kutambua usambazaji wa mada katika hati ambazo hazijaonekana, ambayo ni kipengele muhimu kwa kuainisha hati mpya.

## 4 Tathmini ya modeli

Kwa sababu ya kutokuwa na usimamizi, kutathmini modeli za mada ni kazi yenye changamoto. Ingawa baadhi ya waandishi hutumia perplexity[4] au uwezekano wa kushikiliwa nje kama vipimo vya utendaji wa modeli ya mada, imeonyeshwa kuwa vipimo hivyo vya ndani vya utendaji wa modeli havihusiani na uelewa wa binadamu wa mada (Chang et al. 2009). Kwa maneno mengine, modeli zenye alama bora za perplexity mara nyingi hutoa mada zisizoweza kufasiriwa na binadamu, jambo ambalo linashinda malengo ya uchunguzi ya uundaji wa mada. Kwa kuzingatia hili, vipimo vya uwiano vimekuwa maarufu zaidi. Katika utafiti huu, tunatumia kipimo cha uwiano cha UMass kinachojulikana sana kwani kimeonyeshwa kupatana vizuri na tathmini za kibinadamu za uwiano (Mimno et al. 2011). Kwa kuzingatia maneno N ya juu katika mada, uwiano wa UMass kwa mada huhesabiwa katika gensim kama ilivyo katika Mlinganyo 1.

p04-01.png

Kielelezo 1: Mfano wa kielelezo kwa LDA. Miduara yenye kivuli hutumika kuwakilisha vigeu vinavyoonekana, huku miduara isiyo na kivuli ikiwakilisha vigeu visivyoonekana. Mishale inawakilisha utegemezi kati ya vigeu na mistatili inaonyesha miundo iliyorudiwa. α na β zinaashiria parameta juu.

p04-02.png

P (wj) inaashiria uwezekano wa neno wj kutokea katika seti ya mafunzo ya nyaraka. P (wi, wj) inaashiria uwezekano wa maneno wi na wj kutokea pamoja katika seti ya mafunzo na ε inaashiria kigezo cha kulainisha. Uwiano wa jumla kwa modeli ya mada basi huchukuliwa kama wastani wa uwiano wote wa mada. Kwa ujumla, alama ya juu ya uwiano inahitajika kwani inaonyesha uwiano bora wa mada.

## 5 Mchakato wa uteuzi wa hati

Lengo la utafiti huu ni kuunda mkusanyiko wa sentensi ambao unaweza kutumika kwa utafiti wa NLP katika lugha zenye rasilimali chache, kwa namna ambayo ni ya kimbinu na ya utaratibu. Kwa lengo hili, tunapendekeza kutumia uigaji wa mada kama njia ya uteuzi. Sehemu hii inatoa maelezo ya mchakato wa uteuzi.

## 5.1 Mafunzo ya mfano wa mada

Kwa kuzingatia lengo la utafiti wetu, tulijitahidi kuunda seti ya data ambayo kwa ujumla inafaa na si mahususi kwa kikoa fulani kwa kuchagua sentensi kutoka makala za Wikipedia. Kwa lengo hili, kwanza tuliunda seti ya mafunzo, kulingana na makala kutoka mada mbalimbali za jumla. Mada hizi za jumla zilichukuliwa kutoka kwa orodha ya maneno linganishi ya SILCAWL iliyoletwa katika Sehemu ya 2. Maneno ya Kiingereza katika orodha yalitumiwa kama istilahi za utafutaji katika Wikipedia na makala zinazohusiana zilipatikana kutoka kwenye wavuti. Baada ya kusafisha data na kuondoa maneno yoyote yanayoweza kukera, mkusanyiko uliotokana ulikuwa na nyaraka 1 698 zenye wastani wa maneno 1 132 kwa kila nyaraka.

Kielelezo cha mada kisha kilifunzwa kwenye data hii kwa kutumia gensim. Parameta juu zilijifunzwa kutoka kwa data, lakini kielelezo kiliendeshwa kwa idadi tofauti za mada, K = {100,200, ..., 1000}. Alama ya wastani ya mshikamano kwa kila kielelezo imeonyeshwa katika Kielelezo 2. Inaweza kuonekana kwamba mshikamano hauongezeki kwa kiasi kikubwa zaidi ya K = 800, hivyo K = 800 ilichaguliwa kuwa idadi bora ya mada kwa data ya mafunzo.

Jedwali 1 linaonyesha mada 25 za juu kutoka K = 800 zilizopangwa kwa mpangilio wa mshikamano unaopungua. Ni dhahiri kutoka kwenye jedwali kwamba modeli ya mada iliweza kubaini mada mbalimbali zikiwemo, kwa mfano, umaskini (mada 98), afya (mada 224) na wakati (mada 551). Kumbuka kuwa uchaguzi wa majina ya mada kwa jumla huamuliwa na mtumiaji na hivyo ni wa kibinafsi. Seti kamili ya mada inaweza kupatikana kwenye https://github.com/jrmazarura/wikipedia-sentence-selection.

Jedwali 1: Mada 25 bora kutoka seti ya mafunzo.

p05-01.png

p06-01.png

Kielelezo 2: Wastani wa alama ya upatanisho kwa K = {100,200, ..., 1000}.

## 5.2 Uchaguzi wa hati kwa kutumia modeli ya mada iliyofunzwa

Hatua iliyofuata katika mchakato wa uchaguzi wa hati ilikuwa kutumia modeli ya mada iliyofunzwa kuchagua makala kutoka Wikipedia na kisha kuchagua sentensi kutoka humo. Kwa kila makala katika Wikipedia, modeli ilitumika kubainisha usambazaji wa mada na ni makala yale tu yaliyokidhi masharti yafuatayo yalihifadhiwa:

1. Mada kuu ya makala ilipaswa kuwa kati ya mada 500 zilizo na alama za uwiano wa juu zaidi kutoka kwa mfano uliofanywa mafunzo.

2. Mada inayotawala inahitajika kuunda angalau robo ya usambazaji wa mada ya makala.

Kikomo cha mada 500 kilichotumika katika #1 kilichaguliwa kwa kutathmini alama za upatanishi. Kulingana na ukaguzi, ufasirikaji wa mada ulionekana kuzorota kwa dhahiri kadiri alama za upatanishi zilivyopungua chini ya -2. Mada 500 za kwanza zilikuwa na alama za upatanishi juu ya thamani hii. Aidha, kikomo cha mada 500 pia kilihakikisha kwamba aina mbalimbali za mada zilishughulikiwa. Kuchagua kikomo cha 25% kilichotumika katika #2 hakukuhakikisha tu kwamba mada ilifanyiza sehemu muhimu ya mada ya makala, bali pia ilikuwa muhimu kuhakikisha kwamba ni baadhi tu ya makala kutoka Wikipedia zilichaguliwa.

Baada ya hatua hii, mkusanyiko wa mwisho wa sentensi ulikusanywa kwa kuchagua kwa nasibu idadi sawa ya makala kutoka kila mada na kisha kuchagua kwa nasibu sentensi moja kutoka kila makala. Kwa mfano, ili kuunda mkusanyiko wa sentensi 5 000, makala 10 zinazohusiana na kila moja ya mada 500 zilichaguliwa kwa nasibu na sentensi moja ilichaguliwa kwa nasibu kutoka kwa kila moja ya makala hizo. Sentensi zenye angalau maneno 15 yanayoundwa na herufi 3 au zaidi pekee ndizo zilizochaguliwa. Hii ilifanyika ili kuepuka kurejesha sentensi ambazo zilikuwa fupi sana na hazikuwa na taarifa nyingi.

## 6 Matokeo

Uchaguzi wa mwisho wa sentensi unaweza kupatikana katika https://github.com/jrmazarura/wikipedia-sentence-selection. Jedwali la 2 linaonyesha kipande cha sentensi zilizochaguliwa kwa njia iliyopendekezwa. Kutoka kwenye jedwali, ni dhahiri kwamba mada nyingi hazionekani kuhusiana na muktadha wa Afrika Kusini au hata wa Kiafrika kama inavyotarajiwa. Katika kuchagua makala zenye mada kuu zinazohusiana na mada zetu 500 za juu, inaweza kuonekana kwamba sentensi nyingi zinahusu mada zinazoonekana kutohusiana.

Kwa mfano, zingatia Mada ya 218 katika Jedwali la 1. Mada hii inaonekana kuhusiana na mapango ya baharini. Mfano wa mada uliofunzwa ulitumika kurejesha makala yanayohusiana kutoka Wikipedia na vichwa vya makala vilirekodiwa (orodha ya vichwa pia inapatikana kwenye GitHub). Baadhi ya makala za Wikipedia zilizorejeshwa zina vichwa kama vile Pango, Stalaktiti na Stalagmiti. Hata hivyo, kuna mengi zaidi ambayo yanaonekana kuwa muhimu kidogo katika muktadha wetu, kama vile mapango ya Velebit (mapango nchini Kroatia), Pango la Abrakurrie (mapango nchini Australia) na Ogof Agen Allwedd (mapango nchini Wales) miongoni mwa mengine mengi. Mfano wa mada uliweza kuchagua makala 482 zinazohusiana na mapango, lakini kwa bahati mbaya, nyingi kati yake zinahusu mapango mahususi kutoka duniani kote. Hatimaye, hii inamaanisha kuwa kuchukua sampuli za sentensi nasibu kutoka kwa makala hizi zilizochaguliwa kwa nasibu kuna uwezekano mkubwa wa kutoa sentensi ambazo hazihusiani na Afrika Kusini. Zifuatazo ni mifano ya baadhi ya sentensi zinazohusiana na mapango zilizochaguliwa:

"Eneo la Kiakiolojia la Pango la Bull Thistle ni eneo la kiakiolojia kwenye Rejesta ya Kitaifa ya Maeneo ya Kihistoria, lililoko katika Kaunti ya Tazewell, Virginia."

Mapango ya Hotton ni mapango ya speleothem yaliyoko Wallonia karibu na Hotton nchini Ubelgiji, ambayo yaligunduliwa mwaka 1958 na yana urefu wa takriban kilomita 5 au 6 na kina cha mita 70.

Uchunguzi huu huenda unatokana na muundo wa mada kujaribu kutafuta mgawanyo wa mada kwa zaidi ya makala milioni tano kwa mada 800 pekee. Ni jambo la busara kudhani kwamba mkusanyiko mkubwa kama huo huenda ukawa na mada zaidi ya 800. Aidha, mada kama vile mada ya pango iliyozingatiwa kama mfano, huenda zikawa na mada ndogo nyingi zinazohusiana, k.m. mapango ya Afrika au mapango ya barafu, n.k. Ikiwa kuna mada moja tu inayohusiana na mapango, basi makala zote zitawekwa katika mada moja na hivyo kuunda mkusanyiko wa makala nyingi zinazohusiana na mapango zinazoshughulikia wigo mpana.

## 7 Majadiliano & kazi ya baadaye

Jaribio letu la kwanza la kutumia uigaji wa mada kutambua makala za Wikipedia ambazo zingefaa kutafsiriwa kutoka Kiingereza hadi Lugha za Afrika nyingine 10 za Kusini lilileta seti mbalimbali sana za sentensi, nyingi zikiwa na maneno ambayo huenda hayajawekwa katika leksika katika lugha lengwa yoyote. Mafunzo ya mifano ya mada juu ya SILCAWL ilikuwa wazi haitoshi ili kuepuka changamoto hii.

Katika awamu inayofuata ya utafiti tutalenga kupata vigezo vya upogoaji ambavyo vinaweza kutumika "kulenga" mifano ya mada kwenye maudhui ambayo yanafaa zaidi kwa muktadha wa Afrika Kusini. Tungependa pia kuanzisha uhusiano kati ya maandishi yaliyochaguliwa na tafsiri inayotokana katika lugha lengwa ili kuhakikisha kwamba maandishi yanayofaa na yanayoweza kutafsirika yamechaguliwa. Kipimo kama hicho pia kitaruhusu ulinganisho kati ya mbinu iliyopendekezwa ya mfano wa mada kwa uteuzi wa maandishi na msingi wa nasibu kabisa.

## Maelezo

[1] https://repo.sadilar.org/

[2] Katika makala hii, uzalishaji wa maandishi unarejelea tu maandishi yaliyotengenezwa na binadamu. Uzalishaji wa maandishi wa kiotomatiki hautazingatiwa kwa sababu mbinu yenyewe inategemea upatikanaji wa data ya maandishi, rasilimali ambayo haipatikani katika mazingira yanayohusiana na utafiti huu.

[3] https://radimrehurek.com/gensim/auto_examples/index.html

[4] Perplexity hupima uwezo wa mfano wa kutabiri data mpya. Alama ya chini ya perplexity inachukuliwa kuashiria utendaji mzuri wa mfano.

Jedwali la 2: Sentensi zilizochaguliwa kutoka Wikipedia

p08-01.png

## Shukrani

Ujanibishaji wa jukwaa la Mozilla Common Voice nchini Afrika Kusini unasaidiwa na Wizara ya Shirikisho ya Ushirikiano wa Kiuchumi na Maendeleo ya Ujerumani (BMZ), ikiwakilishwa na mradi wa GIZ wa FAIR Forward - Artificial Intelligence for All.

## Marejeo

Blei, D. M., Ng, A. Y. & Jordan, M. I. (2003), 'Latent dirichlet allocation', Journal of machine Learning research 3(Jan), 993-1022.

Boyd-Graber, J., Hu, Y., Mimno, D. et al. (2017), 'Applications of topic models', Foundations and Trends® in Information Retrieval 11(2-3), 143-296.

Chang, J., Gerrish, S., Wang, C., Boyd-Graber, J. & Blei, D. (2009), 'Reading tea leaves: How humans interpret topic models', Advances in neural information processing systems 22.

Eiselen, R. & Puttkammer, M. (2014), Developing text resources for ten South African languages, in 'Proceedings of the Ninth International Conference on Language Resources and Evaluation (LREC'14)', European Language Resources Association (ELRA), Reykjavik, Iceland, pp. 3698-3703. URL: http://www.lrec-conf.org/proceedings/lrec2014/pdf/1151 Paper.pdf

Goyal, N., Gao, C., Chaudhary, V., Chen, P.-J., Wenzek, G., Ju, D., Krishnan, S., Ranzato, M., Guzman, F. & Fan, A. (2022), 'The FLORES-101 evaluation benchmark for low-resource and multilingual machine translation', Transactions of the Association for Computational Linguistics 10,522-538.

Griesel, M. & Bosch, S. (2020), Navigating challenges of multilingual resource development for under-resourced languages: The case of the African wordnet project, in 'Proceedings of the first workshop on Resources for African Indigenous Languages', pp. 45-50.

Mimno, D., Wallach, H., Talley, E., Leenders, M. & McCallum, A. (2011), Optimizing semantic coherence in topic models, in 'Proceedings of the 2011 conference on empirical methods in natural language processing', pp. 262-272.

NLLB Team, Costa-jussà, M. R., Cross, J., Çelebi, O., Elbayad, M., Heafield, K., Heffernan, K., Kalbassi, E., Lam, J., Licht, D., Maillard, J., Sun, A., Wang, S., Wenzek, G., Youngblood, A., Akula, B., Barrault, L., Gonzalez, G. M., Hansanti, P., Hoffman, J., Jarrett, S., Sadagopan, K. R., Rowe, D., Spruit, S., Tran, C., Andrews, P., Ayan, N. F., Bhosale, S., Edunov, S., Fan, A., Gao, C., Goswami, V., Guzmán, F., Koehn, P., Mourachko, A., Ropers, C., Saleem, S., Schwenk, H. & Wang, J. (2022), 'No language left behind: Scaling human-centered machine translation'.

Pretorius, L. & Wolff, F. (2020), Wikipedia as a Transformative Multilingual Knowledge Resource, Cambridge University Press, p. 232-246.

Rana, T. A., Cheah, Y.-N. & Letchmunan, S. (2016), 'Topic modeling in sentiment analysis: A systematic review.', Journal of ICT Research & Applications 10(1).

Snider, K. & Roberts, J. (2004), 'SIL comparative African wordlist (SILCAWL)', Journal of West African Languages 31(2), 73-122.
