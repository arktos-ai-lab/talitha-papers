> Machine translation (sw) of "Morphological Synthesizer for Ge’ez Language: Addressing Morphological Complexity and Resource Limitations" by Gebrearegawi Gebremariam, Hailay Teklehaymanot, Gebregewergs Mezgebe, https://aclanthology.org/2024.rail-1.11/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kisanisi cha Kimofolojia kwa Lugha ya Ge'ez: Kushughulikia Utata wa Kimofolojia na Ukomo wa Rasilimali

Gebrearegawi Gebremariam, Hailay Teklehaymanot, Gebregewergs Mezgebe

**Taasisi**  
Gebrearegawi Gebremariam †, Hailay Teklehaymanot ∗,  
Gebregewergs Mezgebe†  
†Axum University, Institute of Technology, Department of IT, Ethiopia  
∗L3S Research Center, Leibniz University Hannover,Germany  
,teklehaymanot @l3s.de

## Muhtasari

Ge'ez ni lugha ya kale ya Kisemiti inayojulikana kwa alfabeti yake ya kipekee. Inatumika kama maandishi kwa lugha nyingi, zikiwemo Tigrinya na Amharic, na ilichukua nafasi muhimu katika maendeleo ya kitamaduni na kidini ya Ethiopia wakati wa enzi ya ufalme wa Aksumite. Ge'ez inabakia kuwa muhimu kama lugha ya kiliturujia nchini Ethiopia na Eritrea, huku nyaraka nyingi za utambulisho wa kitaifa zikiwa zimerekodiwa kwa Ge'ez. Nyenzo hizi zilizoandikwa ni vyanzo vya msingi visivyothaminika kwa kusoma falsafa, ubunifu, maarifa, na ustaarabu wa Ethiopia na Eritrea. Ge'ez ni lugha yenye mofolojia tata na mofolojia tajiri ya unyambuaji na uundaji, na hakuna NLP inayoweza kutumika ambayo imetengenezwa na kuchapishwa hadi sasa kutokana na uhaba wa data za lugha zilizofafanuliwa, korasi, seti za data zilizowekewa lebo, na leksika. Kwa hiyo, tulipendekeza usanisi wa kimofolojia wa Ge'ez unaotegemea kanuni ili kuzalisha maneno ya uso kutoka kwa maneno ya mzizi kulingana na miundo ya kimofolojia ya lugha. Kwa hiyo, tulipendekeza kisanisi otomatiki cha kimofolojia cha Ge'ez kwa kutumia TLM. Tulitumia vitenzi vya sampuli 1,102, vinavyowakilisha miundo yote ya kimofolojia ya vitenzi, ili kujaribu na kutathmini mfumo. Hatimaye, tunapata utendaji wa 97.4%. Matokeo haya yanazidi muundo wa msingi, ikipendekeza kwamba wasomi wengine wajenge mfumo mpana ukizingatia tofauti za kimofolojia za lugha.

## Maneno Muhimu

Ge'ez, NLP, mofolojia, kisanisi kimofolojia, msingi wa kanuni

## 1. Utangulizi

Lugha ni mojawapo ya vipengele muhimu zaidi vya maisha yetu, kwani inatuwezesha kuhifadhi habari na kuipitisha kwa mdomo au kwa maandishi kutoka kizazi hadi kizazi (Allen, 1995).

Ge'ez ni lugha ya kale ya Kisemiti yenye alfabeti ya kipekee ("ኣ፣ በ፣ ገ፣ ደ") (Adege and Mannie, 2017; Siferew, 2013). Lugha hii ilichukua nafasi muhimu katika maendeleo ya kitamaduni na kidini ya Ethiopia na Eritrea wakati wa enzi ya Ufalme wa Aksumite. Mapokeo yake tajiri ya kifasihi na ushawishi wake katika kueneza Ukristo kote katika eneo hilo ni dhahiri. Ingawa haizungumzwi tena kwa mazungumzo baada ya karne ya kumi na tatu, Kige'ez bado ni muhimu kama lugha ya kiliturujia kwa makundi mbalimbali ya kidini. Wanazuoni na wanaisimu wanavutiwa na Kige'ez kwa ufahamu wake kuhusu mageuzi ya kihistoria ya lugha za Kisemiti na uhusiano wake na lugha kama vile Kiebrania, Kiarabu, na lugha ya kisasa ya Ethiopia na Eritrea (Dillmann na Bezold, 2003; Desta, 2010; Abate, 2014).

Mbali na kuwa lugha ya kiliturujia kwa makundi mbalimbali ya kidini nchini Ethiopia na Eritrea, Kige'ez bado ni lugha muhimu ya uandishi kwa vitabu vya kidini, kihistoria, na fasihi katika historia ya Ethiopia (Belcher, 2012; Scelta na Quezzaire-Belle, 2001). Rasilimali hizi zilizoandikwa zinaweza kuwa vyanzo vya msingi kwa ajili ya kusoma falsafa, ubunifu, maarifa, na ustaarabu wa Ethiopia na Eritrea. (Abate, 2014).

Kwa hiyo, kuhifadhi lugha ya Kige'ez inakuwa jambo la lazima ili kulinda urithi wa kitamaduni na kihistoria wa Ethiopia na Eritrea. Kwa kuwa lugha hiyo imefungamana kwa kina na desturi za kidini na fasihi, uhifadhi wake unahakikisha mwendelezo wa mila na utambulisho katika vizazi vyote. Mbali na hayo, kuhifadhi lugha ya Kige'ez ni muhimu kwa kudumisha desturi za kidini na mila za fasihi, kuheshimu utofauti wa lugha na utambulisho, kuchangia uelewa wa mageuzi ya lugha za Kisemiti, na kukuza fahari ya kitamaduni na mwendelezo katika vizazi vyote nchini Ethiopia na Eritrea (Desta, 2010).

Hata hivyo, utafiti wa lugha hii umeanza hivi karibuni tu, na hakuna teknolojia inayoweza kutumika iliyotengenezwa na kuchapishwa hadi sasa kwa Kige'ez kwa sababu umakini mdogo umetolewa kwa lugha hiyo, ingawa ni muhimu hivyo. Kutokana na hili, Ge'ez bado ni lugha yenye rasilimali chache na iliyo hatarini kutoweka (Eiselen na Gaustad, 2023; Haroutunian, 2022). Katika kunakili lugha zilizo hatarini kutoweka au kujenga upya lugha za kihistoria, kuelewa muundo wao wa kimofolojia ni muhimu kwa kuwakilisha na kuhifadhi kwa usahihi mifumo ya kiisimu (Bisang et al., 2006). Kwa lugha zenye utajiri wa kimofolojia kama vile Ge'ez, ni muhimu kuunda mfumo unaoweza kuzalisha maumbo yote ya maneno ya uso kutoka kwa maneno ya mizizi kwa sababu hii inaweza kutumika kama pembejeo kwa mifumo mingine mingi ya NLP, ikiwa ni pamoja na mifumo ya IR, ukaguzi wa tahajia na sarufi, utabiri wa maandishi, uundaji wa kamusi, uwekaji tagi za POS, tafsiri ya mashine, akili bandia ya mazungumzo, na mifumo mingine inayotegemea AI. Lakini, ni vigumu kuunda mifumo inayotegemea AI hasa kwa lugha zenye rasilimali chache kama vile Ge'ez, n.k. (Eiselen na Gaustad, 2023; Haroutunian, 2022; Gasser, 2012; Saranya, 2008; Scelta na Quezzaire-Belle, 2001; Sunil et al., 2012; Wintner, 2014).

Kwa mfano, zingatia matokeo ya utafutaji katika Jedwali 1 ili kutathmini kikomo cha mfumo wa IR katika utofauti wa maneno ya Ge'ez.

p02-01.png

Jedwali 1: Maswali ya Ge'ez na matokeo yake kutoka kwa injini ya utafutaji ya Google

Kama inavyoonyeshwa katika Jedwali 1, matokeo yaliyopatikana katika kila swali ni tofauti, ingawa maswali yanahusiana na yametokana na kitenzi 'ረጠነ/reTene/'. Katika hali hii, hoja inapaswa kutolewa katika vibadala vyote vya maumbo ya maneno; kama sivyo, mfumo utashindwa kurejesha taarifa husika. Hata hivyo, si rahisi kutafuta maneno yote ya vibadala (Hailay, 2013). Ili kuboresha ufanisi wa mifumo ya IR, ni muhimu kuunda uhusiano imara kati ya mashina na maumbo yao ya maneno ya vibadala. Hivyo, ni muhimu kuunda kisanisi cha kimofolojia cha Ge'ez na kukiunganisha na mifumo ya IR ili kupata mfumo bora wa IR.

Kwa hiyo, tulipendekeza kisanisi cha kimofolojia cha Ge'ez kinachotegemea kanuni ambacho kinaweza kuchukua nafasi muhimu katika kuzalisha maneno ya uso kutoka kwa maneno ya mizizi kulingana na miundo ya kimofolojia ya lugha. Utafiti huu ni jaribio la kwanza la kuunda visanisi vya kimofolojia kwa lugha ya Ge'ez, ingawa visanisi vya kimofolojia kwa lugha nyingine vimeundwa na vinapatikana kwa matumizi mapana, kama ilivyoelezwa hapa chini katika sehemu ya kazi zinazohusiana. Kwa matokeo, kazi yetu imetoa michango muhimu ifuatayo kwa jamii ya kisayansi:

i. Tulibuni algoriti kulingana na kanuni za kimofolojia za lugha ili kuonyesha uzalishaji wa vipengele vya TAM na PNG. Tulijaribu kuunda maneno ya uso kutoka kwa leksika. Jenereta hutumia alfabeti za Ge'ez Unicode bila kutafsiri kwa alfabeti za Kilatini. Hii inafanya iwe rahisi kutumia, hasa kwa wanafunzi na watafiti wa Ge'ez.

ii. Tuliandaa seti za data za kwanza zinazopatikana kwa umma kwa ajili ya visanisi vya kimofolojia vya Ge'ez. Mtafiti mwingine anaweza kuitumia.

iii. Mfumo wetu unatoa maana za Kiamhariki na Kiingereza kwa umbo kamili la kitenzi. Kwa hiyo, hii inaweza kuanzisha maendeleo ya miradi ifuatayo ya juu ya kamusi za Ge'ez-Kiamhariki, Ge'ez-Kitigrinya au Ge'ez-lugha nyingine.

## 2. Kazi Zinazohusiana

Moja ya maeneo maarufu zaidi ya utafiti katika NLP ni uchunguzi wa visanisi vya kimofolojia. Miradi kadhaa ya utafiti imefanywa katika eneo hili kwa lugha mbalimbali za kimataifa kwa kutumia mbinu tofauti (Abeshu, 2013; Koskenniemi, 1983). Hebu tuangalie baadhi ya kazi zinazohusiana.

ENGLEX ilitengenezwa ili kuzalisha na kutambua maneno ya Kiingereza kwa kutumia TLM katika PC-KIMMO. Ina vipengele vitatu muhimu, vikiwemo seti ya kanuni za kifonolojia (au kiothografia), leksika (mashina na viambishi), na vipengele vya sarufi vya neno. Jenereta hupokea maumbo ya kileksika kama vile spy + s kama ingizo na kurejesha neno la uso spies. Msimbo wa chanzo mtandaoni unapatikana hapa.

Jabalín ilitengenezwa kwa ajili ya kuchanganua na kuzalisha maumbo ya vitenzi vya Kiarabu kwa kutumia Python. Waliunda leksika ya viingizo 15,453. Hii iliundwa kwa kutumia mbinu inayotegemea sheria inayoitwa mofolojia ya mzizi-muundo. Jenereta ya kimofolojia inapokea lemma za vitenzi ili kutoa maumbo ya maneno yaliyonyambulishwa na ilipata Usahihi wa 99.52% kwa maneno sahihi (González Martínez et al., 2013).

Kwa kutumia mbinu inayotegemea dhana-mfano, Kichambuzi na Kisanisi cha Kimofolojia kwa Vitenzi vya Kimalayalam pia kiliendelezwa na (Saranya, 2008). Hii inasaidia katika kuunda mfumo wa tafsiri ya mashine wa Kiingereza-Kimalayalam.

Pymorphy2 ilitengenezwa kwa ajili ya uchanganuzi wa kimofolojia na uzalishaji wa lugha za Kirusi na Kiukreni (Korobov, 2015). Mfumo huo ulitumia leksika kubwa na zilizosimbwa kwa ufanisi zilizojengwa kutoka kwa data za Open-Corpora na LanguageTool. Seti ya sheria zenye msingi wa kilugha ilitengenezwa ili kuwezesha uchanganuzi wa kimofolojia na uzalishaji wa maneno yaliyo nje ya msamiati yanayoonekana katika nyaraka za ulimwengu halisi.

TelMore ilitengenezwa na (Ganapathiraju na Levin, 2006) ili kushughulikia uzalishaji wa kimofolojia wa nomino na vitenzi katika Kitelugu. Prototipu iliundwa kulingana na otomata ya hali finyu. TelMore inakubali umbo la kikitenzi lisilokamilika kwa aina za vitenzi na kuzalisha nyakati za sasa, zilizopita, na zijazo, maumbo ya kukubali, kukanusha, amri, na makatazo kwa jinsia na nambari zote. Zaidi ya hayo, (Dokkara et al., 2017) pia walitengeneza jenereta ya kimofolojia kwa lugha hii. Mfano wake wa kikompyuta ulitengenezwa kwa kuzingatia mbinu za hali finyu. Mfumo huo ulitathminiwa kwa jumla ya vitenzi 503. Kati ya vitenzi hivyo, maneno 418 yalikuwa sahihi, na maneno 85 hayakuwa sahihi.

(Goyal na Lehal, 2008) walitengeneza kichanganuzi na jenereta ya kimofolojia kwa Kihindi kwa kutumia mkabala wa dhana-mfano. Mfumo huu umetengenezwa kama sehemu ya mfumo wa tafsiri ya mashine kutoka Kihindi hadi Kipunjabi. (Gasser, 2012) alitengeneza mfumo unaozalisha maneno kwa maneno ya Kiamhara, Kioromo, na Kitigrinya kutoka kwenye mzizi na viambishi vilivyotolewa. Huu umetengenezwa kwa kuzingatia dhana ya teknolojia ya hali finyu. Mfumo huo ulitoa matokeo sahihi kwa asilimia 96 (Gasser, 2012).

Kisanisi cha kimofolojia kwa Kiamhara kilitengenezwa na (Lisanu, 2002) kwa kutumia mchanganyiko wa mbinu za msingi wa kanuni na za mtandao wa neva bandia. Hata hivyo, utafiti wake ulikuwa umejikita tu kwenye maumbo ya vitenzi timilifu vya Kiamhara. Baadhi ya maumbo ya maneno yaliyozalishwa yangeweza kuwa na maana zaidi. Pia, modeli hii ilitumia transliteresheni ya maandishi ya Kiamhara kwenda Kilatini kabla ya usanisi wowote kufanywa. Mfumo huo hauruhusu uzalishaji kwa mizizi mingine ambayo haijasajiliwa katika hifadhidata yake. Kwa upande mwingine, maneno yanazalishwa kama matokeo kwa kutoa mzizi na kiambishi tamati kama pembejeo. Hili linaweza kupunguza idadi ya maneno ambayo modeli inaweza kuzalisha ikilinganishwa na maneno yaliyotengenezwa na wataalamu wa lugha. (Lisanu, 2002).

(Abeshu, 2013) alitengeneza kisanisi kiotomatiki cha kimofolojia kwa Afan Oromoo kwa kutumia mchanganyiko wa mbinu zenye msingi wa CV na zenye msingi wa TLM na akapata utendaji wa 96.28 % kwa vitenzi na 97.46% kwa nomino. Utafiti ulionyesha kwamba kutengeneza kisanisi kiotomatiki kamili kwa Afan Oromoo kwa kutumia mbinu zenye msingi wa kanuni kunaweza kutoa matokeo bora. Na ni rahisi kupanua mfumo hadi aina nyingine za maneno kwa juhudi ndogo.

Visanisi vya kimofolojia vilivyopitiwa hapo juu ni mahususi kwa lugha yao husika na haviwezi kushughulikia sifa za kimofolojia za Ge'ez kwa sababu Ge'ez inatofautiana na lugha hizi. Kwa ufahamu wetu, hakuna utafiti uliofanywa wa kutengeneza jenereta kiotomatiki ya kimofolojia kwa lugha ya Ge'ez. Hivyo, tulipanga kuunda modeli ya kisanisi cha kimofolojia inayoweza kuzalisha mofolojia ya unyambulishaji na uambishaji wa vitenzi vya lugha ya Ge'ez.

## 3. Mofolojia ya Ge'ez

Lugha ya Ge'ez ina muundo tata wa kimofolojia kwa sababu neno moja linaweza kuonekana katika maumbo mengi tofauti na kuwasilisha maana tofauti kwa kuongeza viambishi au kubadilisha mifumo ya kifonolojia ya neno (Adege and Mannie, 2017). Hasa, vitenzi vina muundo tata zaidi kuliko POS nyingine katika Ge'ez. Hivyo, vitenzi vya Ge'ez vimegawanywa katika makundi sita makuu katika maumbo yake yanayoitwa maumbo ya vitenzi vya timilifu, dhihirishi, isiyokoma, tegemezi, amrisho, na kielezi cha hali. Kila umbo la kitenzi lina madarasa matano ya mashina, na kila shina la kitenzi litanyambulika kwa kuongeza viambishi ili kuunda maumbo tofauti ya maneno (Desta, 2010). Kwa ujumla, kuna awamu tatu za kuunda maumbo mbalimbali ya maneno katika Ge'ez, kama inavyofafanuliwa katika (Dillmann and Bezold, 2003). Haya yametolewa hapa chini, kama yanavyoonyeshwa katika Kielelezo 1:

Awamu ya I: Uundaji wa shina

Awamu ya II: Uundaji wa TAM

Awamu ya III: Uundaji wa PNG

Katika Awamu ya I, utangazaji wa maumbo ya maneno kwa kutumia Tense-Mood kama safu mlalo na mashina matano kama safu wima unafanywa.

Katika Awamu ya II, kila umbo la kitenzi la juu lililopatikana kutoka Awamu ya I linatangazwa zaidi kwa kutumia viwakilishi kumi vya nafsi kwa kuambatisha kiambishi tamati cha alama ya kiima.

Katika Awamu ya III, utangazaji wa maumbo ya maneno kwa kutumia Viambishi Tamati Kumi vya Mtengenezaji wa Yambwa kwa kila neno lililopatikana katika Awamu ya II utatokea.

Kwa hiyo, kanuni mbili za kuambisha viambishi tamati kwa vitenzi zinatawala mchakato wa uunganishaji wa mofimu ili kutoa maumbo ya vitenzi vya uso:

Stem + subject-marker suffix = surface word (only with SMS)

Stem + subject-marker suffix + object-indicator suffix = surface word (with both SMS and OMS)

Kwa hivyo, tunaweza kuwa na maumbo mawili ya vitenzi, moja likiwa na alama ya kiima ya moja kwa moja pekee na lingine likiwa na viambishi tamati vya alama ya kiima na alama ya yambwa, kama inavyoonyeshwa hapa chini:

ቀተል (stem) + ክሙ (subject marker suffix) = ቀተልክሙ - you killed. (Surface Form).

ቀተል (stem) + ክሙ (object marker suffix) = ቀተለክሙ - he killed you (Surface Form).

ቀተል (stem) + ክሙ (SMS) + ኒ (OMS) = ቀተልክሙኒ - you killed me (Surface Form).

Katika hali hii, kiambishi tamati cha alama ya kiima /-ክሙ/ kinaonyesha kwamba kiima ni "wewe (2 ppm)," ilhali alama ya yambwa /-ኒ/ inaonyesha yambwa "mimi.". Kwa hiyo, kitenzi /ቀተልክሙኒ/ kinaonyesha kiima na yambwa ya kitenzi. Kwa hiyo, kitenzi kimoja kinaweza kuwa sentensi katika Ge'ez kwa sababu kina viambishi tamati vya kuonyesha kiima na yambwa.

## 4. Mbinu ya utafiti

Tumepitia vitabu kadhaa, ripoti za utafiti, majarida, makala, na miongozo ya watumiaji ili kuelewa muundo wa kimofolojia wa vitenzi vya Ge'ez na kujua mbinu mbalimbali za kubuni visanisi vya kimofolojia. Aidha, mijadala endelevu ilifanyika na wataalamu wa Ge'ez ili kuelewa vyema muundo wa kimofolojia wa lugha hiyo na kupata mawazo muhimu kwa ajili ya utafiti.

p04-01.png

Kielelezo 1: Awamu za uundaji wa neno la kimofolojia la Ge'ez

## 4.1. Ukusanyaji wa Data

Data zilizofafanuliwa kwa mikono katika leksika husaidia kujaribu kisanisi cha kimofolojia. Kwa kuwa kamusi zinazosomeka kwa mashine na orodha za maneno au korasi ya mtandaoni ya Ge'ez hazikuwepo, kazi ya kukusanya leksika ilianza kutoka mwanzo kabisa. Hivyo, tumekusanya sampuli za vitenzi wakilishi vinavyobainisha tofauti zote za vitenzi kwa ajili ya kupima na kutathmini utendaji wa mfumo kwa kushauriana na wataalamu wa lugha. Vitenzi hivi vimekusanywa kutoka vitabu mbalimbali, kama vile Biblia Takatifu, መጽሐፈ ግስ/Ge'ez Grammar Book/, na kutoka lsanate siem (ልሳናተ ሴም) (Zeradawit, 2017). Kwa hiyo, leksimu ya lugha iliyoandaliwa kwa ajili ya utafiti huu ina jumla ya vitenzi 1102 vya kawaida na visivyo vya kawaida. Viambishi vinavyoweza kuambatanishwa na vitenzi pia vimekusanywa katika leksimu.

## 4.2. Ubunifu

Kama ilivyofafanuliwa na (Pulman et al., 1988), ni lazima kuzingatia angalau mahitaji yafuatayo ya msingi ya usanifu ili kuunda kisanisi cha kimofolojia cha lugha:

1. Leksimu:

Leksimu inaelezea orodha ya lemma zote na maumbo yake yote. Ni kiini cha mfumo wowote wa uchakataji wa lugha asilia, ingawa muundo wake hutofautiana kulingana na mahitaji yao. Kwa hiyo, leksimu zinazohitajika kwa utafiti wetu zinajumuisha mashina, viambishi, na alfabeti za Ge'ez. Hebu tuyaone kila mojawapo ya leksika hizi kwa undani. i. Mashina: Katika utafiti wetu, pembejeo za shina ni maumbo ya vitenzi visivyokamilika kama vile ቀቲል/kuua/, ሐዊር/kutembea/, ሰጊድ/kusujudu/, ፈቂድ/kuruhusu/, ሐዪው/kutokwa mate/, n.k. Kutokana na pembejeo hizi za kileksika, mfumo huzalisha maneno yaliyonyambulika kwa jinsia na namba zote kwa kuyaunganisha na viambishi vinavyolingana kulingana na seti ya kanuni za lugha. Sababu ya sisi kutaka kutumia umbo la kitenzi kisichokamilika kama pembejeo badala ya neno la mzizi/ጥሬ ዘር/ ni kuondoa utata unaoweza kujitokeza wakati mfano unapotofautisha kategoria ya kitenzi cha pembejeo.

ii. Viambishi: Kama inavyofafanuliwa na (Abebe, 2010), viambishi hubeba aina tofauti za taarifa za kisintaksia na kisemantiki, zikisaidia kuunda maneno mbalimbali. Viambishi huungana na mashina ya maneno ili kuzalisha maneno mbalimbali kulingana na seti ya kanuni. Hapa, Viambishi Awali vya Kiashiria Shina la Kitenzi na Viambishi Awali vya Kiashiria Nafsi huunganishwa kwanza na shina la pembejeo ili kuzalisha mashina mbalimbali ya maneno (Abebe, 2010). Kisha, viambishi tamati vya SMS na OMS hufuata kwa mfuatano. Kwa mfano, zingatia uundaji wa ይቀትለከ /Atakuua/ kwa kutumia TLM katika Jedwali 2.

Kama inavyoonyeshwa katika Jedwali 2, kwa kila shina kuungana na viambishi, mchanganuzi anapaswa kuchunguza aina ya shina na viambishi vinavyoweza kuambatana ipasavyo ili kuunda maneno halali ya uso. Kwa hiyo, seti ya kanuni ilianzishwa ili kushughulikia mahitaji hayo.

iii. Alfabeti za Ge'ez: Kama ilivyoelezwa na (Koskenniemi, 1983), maneno ya kiwango cha kileksika na ya usoni katika modeli ya ngazi mbili ni mifuatano iliyotolewa kutoka kwa alfabeti za lugha. Mifuatano ya kiwango cha kileksika inaweza kuwa na baadhi ya herufi ambazo huenda zisitokee kwenye mifuatano ya kiwango cha usoni. Kwa mujibu wa hayo, maneno ya Ge'ez hujengwa kwa muunganisho wenye maana wa alfabeti za Ge'ez. Alfabeti katika lugha ya Ge'ez zinajumuisha herufi zote kuanzia ሀ/he/ hadi ፈ/fe/ na alfabeti nne nyingine za mchanganyiko tata. Mabadilishano yote ya herufi katika mifuatano ya kileksika wakati wa uundaji wa maneno ya usoni huchukuliwa kutoka kwa alfabeti hizi. Utekelezaji wa mabadiliko haya unashughulikiwa kulingana na kanuni katika prototaiti ya mfumo. Sheria za ngazi-mbili zinatumika hapa kubainisha tofauti zinazoruhusiwa kati ya uwakilishi wa neno wa kileksika na wa usoni.

2. Morfotaktiki:

Mofotaktiki ni kielelezo au sheria ya mpangilio wa mofimu inayoeleza ni aina zipi za mofimu zinaweza kufuata aina nyingine za mofimu ndani ya neno. Vitenzi vya Ge'ez vina sheria zao wenyewe za kupanga mofimu. Mpangilio wa mofimu katika uundaji wa neno wa vitenzi vya Ge'ez ni kama ifuatavyo:

[Kiambishi awali] + [Viambishi awali vya mzingo] + [shina] + [Viambishi tamati vya mzingo] + [SMS] + [OMS]

3. Kanuni za Tahajia:

p05-01.png

Kwa kuzingatia mahitaji ya muundo hapo juu, tulibuni chati ya mtiririko wa jumla ya mfumo kama inavyoonyeshwa katika Kielelezo 2: Kama tunavyoona katika chati ya mtiririko katika Kielelezo 2, muundo wa kisanisi cha kimofolojia una vipengele vifuatavyo:

A.Kiainishi cha Shina: hutambua kategoria ya kitenzi ya shina. Uainishaji unafanywa kwa kuzingatia idadi ya vichwa na makundi ya vitenzi. Kipengele hiki pia huangalia kama shina la kitenzi ni la kawaida au la. Hapa, ikiwa kitenzi cha pembejeo kina mojawapo ya alfabeti za kooni (yaani ሀ/he/, ሐ/He/, ኀ/H/, አ/a/ na ዐ/A/ ama mwanzoni au katikati mwao) au alfabeti za nusu-irabu (yaani የ/ye/ na ወ/we/) katika nafasi yoyote ya kitenzi, ni kisicho cha kawaida, la sivyo ni kitenzi cha kawaida.

B.Uundaji wa Mashina: Kipengele hiki kidogo huzalisha mashina mbalimbali yaliyotoholewa kwa ajili ya pembejeo ya kileksika.

C.Kijenzi cha Sahihi: huorodhesha seti ya viambishi tamati halali kwa kila shina lililozalishwa kwa sababu kila shina lililoundwa lina viambishi maalum vinavyolingana na shina wakati wa uundaji halali wa neno la uso. Ili kuanzisha muunganisho halali wa mashina na viambishi, utaratibu wa kulinganisha muundo unatumika, ambao unategemea dhana ya kulinganisha mashina na viambishi vyake halali. Kwa mfano, neno 'ይቀትል'/yqetl/ lina kiambishi halali 'ዎ'/wo/ ili kuunda umbo halali la neno. Lakini, neno hili haliwezi kuunganishwa na kiambishi 'ክዎ'/kwo/ kwa sababu muunganiko wa neno na kiambishi hauwezi kuunda maumbo halali ya neno.

D. Kidhibiti Mabadiliko ya Mipaka: Kipengele hiki kidogo kinashughulikia mifumo ya mipaka inayotokea wakati wa muunganiko wa mashina na viambishi kulingana na kanuni zilizowekwa kwenye hifadhi ya maarifa. Mabadiliko haya yanaweza kuwa mahususi kwa kila muunganiko wa mofimu, hata kama mofimu hizi ziko katika namna ileile. Athari za kiassimilesheni hutokea hasa kwenye mpaka wa mofimu wakati viambishi tamati ከ /ke/, ኩ /ku/, ኪ /ki/, ክን /kn/ au ክሙ /kmu/ vinapoongezwa mwishoni mwa kitenzi kinachoishia na mojawapo ya alfabeti za glotali, yaani ቀ /QE/, ከ /ke/, au ገ /Ge/ (Lambdin, 1978). Kwa mfano, angalia muunganiko wa mofimu ሐደገ na ክሙ:

ሐደገ + ክሙ -> ሐደግሙ (herufi ገ katika ሐደገ inabadilika kuwa ግ na herufi ክ inaachwa kutoka kwenye mofimu ክሙ)

E. Kisanisi: Kipengele hiki kidogo huzalisha maumbo yote ya neno ya uso yanayowezekana kwa kuunganisha shina na orodha iliyochaguliwa ya viambishi kwa kutumia mbinu ya TLM ya uzalishaji wa maneno. Kwa mfano, zingatia uzalishaji wa neno la Kige'ez ufuatao kwa TLM kutoka Jedwali 2:

p05-02.png

Jedwali la 2: Uzalishaji wa maneno ya uso kwa kutumia TLM

Safu katika Jedwali la 2 zinaonyesha upangaji wa viwango viwili unaofanywa wakati wa mchakato wa uundaji wa neno.

F. Kiwango cha Uso: Mwishowe, matokeo ya kisanisi yanazalishwa.

Hapa chini ni algoriti yetu fupi ya kuzalisha maumbo ya maneno kulingana na leksimu za pembejeo:

p05-patch01.png

## 5. Majaribio na Tathmini

## 5.1. Mbinu ya Kimaendeleo

Mbinu kadhaa zingeweza kutumika katika kutengeneza mifumo ya uzalishaji wa kimofolojia kwa lugha tofauti. Kama ilivyojadiliwa na (Kazakov na Manandhar, 2001), mbinu hizi zinaweza kuainishwa kama mbinu za kikanuni na mbinu za kikorasi. Utafiti huu ulitumia mbinu ya kikanuni iitwayo Mfano wa Ngazi Mbili (TLM) wa mofolojia kutengeneza mfano wa awali. TLM inatumika kushughulikia michakato ya kifonolojia na kimofofonolojia (ikijumuisha mabadiliko ya uimilishaji) inayohusika katika uundaji wa neno (Gasser, 2011; Koskenniemi, 1984). Kimsingi, tulichagua mbinu ya TLM ili kuoanisha viingizi vya kileksika na maumbo ya vitenzi vya uso. Tulitumia mbinu ya kikanuni kutengeneza kisanisi cha kimofolojia cha lugha kwa sababu mbinu hii ina mchakato wa kimaendeleo wa haraka wenye Usahihi bora, ni rahisi zaidi kurekebishwa, na inafikika zaidi kwa kuunda kanuni kulingana na kanuni za lugha (Beesley na Karttunen; Shaalan et al., 2007). Zaidi ya hayo, njia inayotegemea kanuni ni ya vitendo kwa lugha zenye rasilimali chache, kama vile Ge'ez, ambayo inakumbwa na upatikanaji wa korasi na ukosefu wa data (Shaalan et al., 2010). Hivyo, tulipendelea mbinu inayotegemea kanuni, ambapo neno fulani hutolewa kama ingizo kwa kisanisi cha kimofolojia, na ikiwa mofimu au neno la mzizi linalolingana ni halali, basi mfumo utazalisha maumbo ya neno la uso.

p06-01.png

Kielelezo 2: Chati ya Mtiririko ya kisanisi cha kimofolojia cha Ge'ez

## 5.2. Taratibu za Upimaji

Ukadiriaji wa utaratibu wa mfumo huo ni tata kwa kuwa hakuna maneno yaliyokusanywa ya Ge'ez yanayopatikana sasa kwa kusudi hili. Kwa hivyo, ili kupima ufanisi wa mfumo uliotengenezwa, tulitumia vitenzi vya sampuli vilivyokusanywa. Taratibu za upimaji ni kama ifuatavyo:

1. Katika awamu ya awali, tulitathmini mfumo kwa kuingiza shina la majaribio lililotolewa kutoka kwa vitenzi vya sampuli katika leksimu, kuzalisha maneno, na kuyalinganisha na maumbo yao ya neno yanayotarajiwa. Tathmini hii ilifanyika kwa kurudia katika kipindi chote cha uundaji wa kisanisi cha kimofolojia ili kuboresha utendaji wake. Makosa yoyote yaliyotambuliwa wakati wa jaribio hili, hasa yanayohusiana na kanuni zilizokosekana, yalirekebishwa ipasavyo. Marudio yaliyofuata ya jaribio hili yalifanyika hadi matokeo ya kuridhisha yalipopatikana.

2.Kisha, utendaji wa mfumo uliokamilishwa ulijaribiwa kwa kuingiza vitenzi vya mfano (vikiwemo vile vyenye herufi za glotali au irabu-nusu katika nafasi tofauti) vilivyochaguliwa na wanaisimu.

## 5.3. Taratibu za Tathmini

Hatimaye, tulitathmini kwa kuchukua vitenzi vya kawaida na visivyo vya kawaida kutoka kwa vitenzi vya mfano vilivyochaguliwa. Ili kutathmini mfumo, tulitumia chaguzi mbili:

1.Tathmini kwa Mikono Kwa kutumia mbinu ya kuhesabu makosa, wataalamu wa lugha walitathmini kwa mikono maneno yaliyozalishwa ili kupima usahihi na ubora wake. Usahihi wa mfumo kisha hukokotolewa kama idadi ya maneno yaliyozalishwa kwa usahihi ikigawanywa kwa jumla ya idadi ya maneno yaliyozalishwa na mfumo ikizidishwa kwa 100%.

2.Tathmini ya Kiotomatiki Tunatathmini utendaji wa mfumo kwa kutumia vigezo na vipimo vilivyoainishwa awali bila uingiliaji wa binadamu, mbinu inayofanana na ile iliyoelezwa na (González Martínez et al., 2013). Baadaye, usahihi uliopatikana kutoka kwa kila jaribio hukokotolewa kwa kutumia fomula ifuatayo:

p07-01.png

## 6. Matokeo ya Majaribio

Tathmini ya usahihi wa mfumo uliotengenezwa ilihusisha kuingiza seti za data za sampuli. Maneno 7,577 yalizalishwa kutoka kwa vitenzi vya kawaida, na maneno 19,290 yalizalishwa kutoka kwa vitenzi visivyo vya kawaida. Kati ya hayo, makosa 668 yalitambuliwa (8 kutoka kwa vitenzi vya kawaida na 661 kutoka kwa vitenzi visivyo vya kawaida). Viwango vya usahihi vilikuwa: 99.6% kwa vitenzi vya kawaida na 96.6% kwa vitenzi visivyo vya kawaida. Kusababisha usahihi wa wastani wa jumla wa 97.4%. Matokeo haya yanazidi kiwango cha msingi (Abeshu, 2013). Asilimia ya maneno yenye makosa ilikuwa 2.6%. Matokeo haya ya kuahidi yanaunga mkono utafiti zaidi kuhusu lugha hiyo. Matokeo ya majaribio yanapatikana na yamerejelewa katika sehemu ya Kiambatisho.

## 7. Mjadala

Mfumo huu mara kwa mara huzalisha maneno sahihi, ingawa kuna makosa ya mara kwa mara. Kama Kiambatisho I kinavyoeleza kwa kina, vitenzi visivyo vya kawaida hufanya kazi chini ya vitenzi vya kawaida, hasa kutokana na unyumbufu wao wa asili katika michakato ya uundaji wa maneno. Kutawala kwa vitenzi visivyo vya kawaida katika seti ya data ya tathmini kunachangia kupungua kwa usahihi kulikoonekana. Kama sehemu kubwa zaidi ya vitenzi vya kawaida ingejumuishwa katika tathmini, Usahihi ungetarajiwa kuzidi 97.4%, kutokana na kiwango cha juu cha Usahihi cha 99.6% kilichozingatiwa kwa maneno yanayozalishwa kutoka kwa vitenzi vya kawaida.

## 7.1. Mambo Yanayopelekea Utendaji wa Juu.

Licha ya kukumbana na baadhi ya makosa, kisanisi kinaonyesha utendaji wa juu sana. Mafanikio haya yanaweza kuhusishwa na mambo kadhaa:

1.Kuunda mashina sahihi Mashina yanayozalishwa kwa usahihi huzalisha maneno sahihi ya uso ikiwa mabadiliko ya mpaka yanayotokea wakati wa kuunganisha shina na kiambishi yanashughulikiwa kwa usahihi. Kama mashina ya mizizi yameundwa kikamilifu, basi maneno yanayozalishwa kutoka kwa mashina haya ni sahihi. Kwa hiyo, utendaji uliopatikana ni wa juu kwa sababu mashina mengi yaliyosababishwa ni sahihi, na mabadiliko ya mpaka yanashughulikiwa kwa usahihi.

2. Kushughulikia sheria wakati mofimu zinaunganishwa kwa kila mmoja Maneno sahihi huzalishwa wakati mashina na viambishi vinaunganishwa ipasavyo. Kwa sababu hii, uteuzi wa viambishi kwa shina husika ulishughulikiwa ipasavyo. Kwa hiyo, kushughulikia seti ya kanuni za uundaji wa neno ipasavyo kutazalisha maneno sahihi.

3. Kushughulikia kanuni za uundaji wa neno usio wa kawaida Lugha ya Ge'ez ina vitenzi vingi visivyo vya kawaida. Vitenzi visivyo vya kawaida ni vile ambavyo vina mabadiliko kidogo katika muundo wao wa kimofolojia ikilinganishwa na vitenzi vya kawaida. Hii inatokea zaidi kutokana na kuwepo kwa mojawapo ya alfabeti za kooni, yaani ሀ/he/, ሐ/He/, ኀ/H/, አ/a/ na ዐ/A/ ama katika nafasi zao za mwanzo au za kati, au kuwepo kwa alfabeti za nusu-vokali, yaani የ/ye/ na ወ/we/ katika nafasi yoyote ya vitenzi. Vitenzi visivyo vya kawaida vina kanuni mbalimbali za kuzalisha maumbo sahihi ya neno. Kanuni hizi zina tofauti ndogo kutoka kwa kanuni hizi za uundaji wa neno za kawaida. Kushughulikia kanuni hizi za uundaji wa neno kunakupa Usahihi bora. Kwa hiyo, tumejaribu kushughulikia sheria za uundaji wa neno kadiri inavyowezekana.

## 7.2. Uchambuzi wa Makosa

Maneno fulani yanazalishwa kimakosa. Makosa haya yanaweza kuhusishwa na sababu zifuatazo:

1. Makosa yanayosababishwa na herufi za kipekee zilizopo katika kitenzi Baadhi ya vitenzi vina sifa maalum, ingawa vitenzi hivi vinaonekana kuwa na umbo sawa na kitenzi kikuu. Kwa mfano, mfumo uliundwa kushughulikia vitenzi vinavyoishia kwa herufi ቀ/qe/, ከ/ke/, na ገ/ge/ kwa sababu inadhaniwa kuwa vitenzi hivi vina sifa sawa za kimofolojia kama vitenzi vingine. Hata hivyo, hii inaweza isiwe kweli kila wakati ikiwa tutazingatia muundo wa kimofolojia wa vitenzi ሠረቀ/šereqe/, ሐደገ/Hedege/, na ለሐቀ/leHeqe/. Vitenzi hivi vina tofauti kutokana na kuwepo kwa herufi za kooni au nusu-vokali, au vyote kama inavyoonyeshwa katika Jedwali 3.

p07-02.png

Jedwali la 3: Makosa yanayosababishwa na herufi za kipekee

Kama tunavyoona katika jedwali la 3, herufi zilizoandikwa kwa rangi nyekundu katika maneno hufanya tofauti katika kila mchakato wa uundaji wa neno ingawa maneno haya yameainishwa katika kategoria ileile ya vitenzi.

2. Makosa yaliyotokana na muunganisho wa maneno maalum na viambishi

Baadhi ya maneno yanayozalishwa yanaonekana kuwa sahihi kisarufi na kimaana, lakini si maneno sahihi. Kwa mfano, mofimu ከረም/kerem/ na ነ/ne/ zinapounganishwa, hutoa neno ከረምነ/keremne/ ambalo ni neno sahihi. Vivyo hivyo, mofimu አመን/amen/ + ነ/ne/ zinapounganishwa, hutoa አመንነ/ amenne/. Hata hivyo, አመንነ/ amenne/ si neno sahihi. Neno sahihi ni አመነ/amene/. Kwa hivyo, maneno haya yana maumbo tofauti ingawa yanahusishwa na POS na idadi sawa.

3. Makosa yanayosababishwa na utajiri wa kimofolojia na asili ya lugha iliyo tofauti

Aina hii ya hitilafu hutokea wakati wa kujaribu vitenzi ambavyo vinaonekana kuwa na muundo sawa na vitenzi vingine kimaumbile. Lakini matokeo yao halisi yanaonyesha maumbo tofauti ya maneno. Kwa mfano, tunapochukua vitenzi ወለደ/welede/ na ወቀሰ/weqese/, tunadhani kwamba vitenzi hivi vina muundo sawa wakati wa kubuni mfano wa awali. Lakini vitenzi hivi vina tofauti katika muundo wao halisi wa uundaji wa maneno.

4. Hitilafu zinazosababishwa na kukosekana kwa baadhi ya sheria Uundaji wa maumbo tofauti ya maneno una seti ya sheria. Kukosekana kwa yoyote ya sheria hizi huzalisha maumbo batili ya maneno. Maneno yasiyo sahihi katika Jedwali la 4 yanazalishwa kwa sababu baadhi ya sheria na maumbo yao sahihi hayapo.

p08-01.png

Jedwali la 4: Hitilafu zinazosababishwa na kukosekana kwa sheria

## 8. Hitimisho na Kazi za Baadaye

Utafiti ulichagua mbinu ya TLM inayotegemea sheria kwa ajili ya kutengeneza kisanisi kiotomatiki cha kimofolojia kutokana na urahisi wake, ufaafu wake, na ufanisi wake, hasa kwa lugha zenye upatikanaji mdogo wa korasi. Seti ya sheria ilibuniwa kwa umakini mkubwa kwa kuzingatia maarifa ya kitaalamu ya muundo wa kimofolojia wa lugha, ikiunda msingi wa uundaji wa algoriti kutoka mwanzo ili kushughulikia michakato ya uundaji wa maneno. Licha ya ukamilifu wa sheria za usanisi wa kimofolojia, baadhi ya makosa yaliendelea kuwepo katika uzalishaji wa maneno, hasa yakitokana na uundaji wa mashina batili, hasa kwa vitenzi visivyo vya kawaida vyenye herufi za koo na irabu nusu. Hata hivyo, kisanisi cha mfano kilionyesha utendaji wa kuahidi, kwa usahihi wa jumla wa 97.4%, ikionyesha matarajio ya kutia moyo kwa utafiti zaidi katika isimu ya Ge'ez. Maoni kutoka kwa wanaisimu walioshiriki katika tathmini ya mfumo yalisisitiza umuhimu wa kutengeneza toleo kamili la mfumo ili kuimarisha matumizi na uhifadhi wa Ge'ez ndani ya jamii. Mapendekezo yalitolewa kwa watafiti wa baadaye kushughulikia na kurekebisha makosa yanayozuia utendaji wa utafiti na kusonga mbele kuelekea mfumo unaofanya kazi kikamilifu. Changamoto zilizojitokeza wakati wa utafiti zilijumuisha: Ukosefu wa wataalamu wa isimu ya Ge'ez. Kutokuwepo kwa marejeleo sanifu na kamusi. Uhaba wa leksimu za lugha ya Ge'ez zilizokusanywa. Zaidi ya hayo, utata na asili ya mofolojia ya Ge'ez ya kuambatanisha viambishi viliweka vikwazo vya ziada, vikichangia msamiati wake mpana.

p08-02.png

## Maelezo

1 http://downloads.sil.org/legacy/pckimmo/engl20b5.zip

## Marejeo

Yitayal Abate. 2014. Morphological analysis of ge'ez verbs using memory based learning.

A. Abebe. 2010. Automatic morphological synthesizer for afaan oromoo. A thesis Submitted to School of Graduate Studies of addis ababa University in Partial fulfillment for degree masters of Science in Computer Science.

Abebe Abeshu. 2013. Analysis of rule based approach for afan oromo automatic morphological synthesizer. Science, Technology and Arts Research Journal, 2(4):94-97.

Abebe Belay Adege and Yibeltal Chanie Mannie. 2017. Designing a Stemmer for Ge'ez Text Using Rule based Approach. LAP LAMBERT Academic Publishing.

James Allen. 1995. Natural language understanding. Benjamin-Cummings Publishing Co., Inc.

Kenneth R Beesley and Lauri Karttunen. Finite-state morphology: Xerox tools and techniques. CSLI, Stanford, pages 359-375.

Wendy Laura Belcher. 2012. Abyssinia's Samuel Johnson: Ethiopian Thought in the Making of an English Author. OUP USA.

Walter Bisang, Hans Henrich Hock, Werner Winter, Jost Gippert, Nikolaus P Himmelmann, and Ulrike Mosel. 2006. Essentials of language documentation. Mouton de Gruyter.

Berihu Weldegiorgis Desta. 2010. Design and Implementation of Automatic Morphological Analyzer for Ge'ez Verbs. Ph.D. thesis, Addis Ababa University.

August Dillmann and Carl Bezold. 2003. Ethiopic grammar. Wipf and Stock Publishers.

Sasi Raja Sekhar Dokkara, Suresh Varma Penumathsa, and Somayajulu G Sripada. 2017. Verb morphological generator for telugu. Indian Journal of Science and Technology, 10:13.

Roald Eiselen and Tanja Gaustad. 2023. Deep learning and low-resource languages: How much data is enough? a case study of three linguistically distinct south african languages. In Proceedings of the Fourth workshop on Resources for African Indigenous Languages (RAIL 2023), pages 42-53.

Fitsum Gaim, Wonsuk Yang, and Jong C Park. 2022. Geezswitch: Language identification in typologically related low-resourced east african languages. In Proceedings of the Thirteenth Language Resources and Evaluation Conference, pages 6578-6584.

Madhavi Ganapathiraju and Lori Levin. 2006. Telmore: Morphological generator for telugu nouns and verbs. In Proceedings of the Second International Conference on Digital Libraries.

Michael Gasser. 2011. Hornmorpho: a system for morphological processing of amharic, oromo, and tigrinya. In Conference on Human Language Technology for Development, Alexandria, Egypt, pages 94-99.

Michael Gasser. 2012. Hornmorpho 2.5 user's guide. Indiana University, Indiana.

Alicia González Martínez, Susana López Hervás, Doaa Samy, Carlos G Arques, and Antonio Moreno Sandoval. 2013. Jabalín: a comprehensive computational model of modern standard arabic verbal morphology based on traditional arabic prosody. In Systems and Frameworks for Computational Morphology: Third International Workshop, SFCM 2013, Berlin, Germany, September 6, 2013 Proceedings 3, pages 35-52. Springer.

Alicia González Martínez, Susana López Hervás, Doaa Samy, Carlos G. Arques, and Antonio Moreno Sandoval. 2013. Jabalín: A comprehensive computational model of modern standard arabic verbal morphology based on traditional arabic prosody. In Systems and Frameworks for Computational Morphology, pages 35-52, Berlin, Heidelberg. Springer Berlin Heidelberg.

Vishal Goyal and Gurpreet Singh Lehal. 2008. Hindi morphological analyzer and generator. In 2008 First International Conference on Emerging Trends in Engineering and Technology, pages 1156-1159. IEEE.

B. Hailay. 2013. Design and development of tigrigna search engine. A thesis Submitted to School of Graduate Studies of addis ababa University in Partial fulfillment for the Degree of Master of Science in Computer Science.

Levon Haroutunian. 2022. Ethical considerations for low-resourced machine translation. In Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics: Student Research Workshop, pages 44-54.

Dimitar Kazakov and Suresh Manandhar. 2001. Unsupervised learning of word segmentation rules with genetic algorithms and inductive logic programming. Machine Learning, 43:121-162.

Mikhail Korobov. 2015. Morphological analyzer and generator for russian and ukrainian languages. In Analysis of Images, Social Networks and Texts: 4th International Conference, AIST 2015, Yekaterinburg, Russia, April 9-11, 2015, Revised Selected Papers 4, pages 320-332. Springer.

Kimmo Koskenniemi. 1983. Two-level morphology: A general computational model for word-form recognition and production. University of Helsinki. Department of General Linguistics.

Kimmo Koskenniemi. 1984. A general computational model for word-form recognition and production. In 10th International Conference on Computational Linguistics and 22nd Annual Meeting of the Association for Computational Linguistics. The Association for Computational Linguistics.

Thomas O. Lambdin. 1978. Introduction to Classical Ethiopic (Ge'ez). Harvard Semitic Studies - HSS 24.

K Lisanu. 2002. Design and development of automatic morphological synthesizer for Amharic perfective verb forms. Ph.D. thesis, Master's thesis, school of Information Studies for Africa, Addis Ababa.

Stephen G Pulman, Graham J RUSSELL, Graeme D Ritchie, and Alan W Black. 1988. Computational morphology of english.

SK Saranya. 2008. Morphological analyzer for malayalam verbs. Unpublished M. Tech Thesis, Amrita School of Engineering, Coimbatore.

Gabriella F Scelta and Pilar Quezzaire-Belle. 2001. The comparative origin and usage of the ge'ez writing system of ethiopia. Unpublished manuscript, Boston University, Boston. Retrieved July, 25:2009.

Khaled Shaalan, Azza Abdel Monem, and Ahmed Rafea. 2007. Arabic morphological generation from interlingua: A rule-based approach. In Intelligent Information Processing III: IFIP TC12 International Conference on Intelligent Information Processing (IIP 2006), September 20-23, Adelaide, Australia 3, pages 441-451. Springer.

Khaled Shaalan et al. 2010. Rule-based approach in arabic natural language processing. The International Journal on Information and Communication Technologies (IJICT), 3(3):11-19.

Muluken Andualem Siferew. 2013. Comparative classification of Ge'ez verbs in the three traditional schools of the Ethiopian Orthodox Church, volume 17 of Semitica et Semitohamitica Berolinensia. Shaker Verlag, Aachen.

R Sunil, Nimtha Manohar, V Jayan, and KG Sulochana. 2012. Morphological analysis and synthesis of verbs in malayalam. ICTAM-2012.

Shuly Wintner. 2014. Morphological processing of semitic languages. In Natural language processing of Semitic languages, pages 43-66. Springer.

A. Zeradawit. 2017. ልሳናተ ሴም, 1st edition. ትንሳኤ ማተምያ ድርጅት, Addis Ababa, Ethiopia.

## Kiambatisho I

p11-01.png

Matokeo yaliyopatikana kwa majaribio ya mfano wa mfumo

p12-01.png

Baadhi ya Viambishi vya Ge'ez Vilivyotambuliwa

p13-01.png

Picha ya skrini ya sampuli za maneno yaliyozalishwa kutoka kwa kisanisi
