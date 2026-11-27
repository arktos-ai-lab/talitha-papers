> Machine translation (sw) of "Advancing Language Diversity and Inclusion: Towards a Neural Network-based Spell Checker and Correction for Wolof" by Thierno Ibrahima Cissé, Fatiha Sadat, https://aclanthology.org/2024.rail-1.16/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kuendeleza Utofauti wa Lugha na Ushirikishwaji: Kuelekea Kikagua Tahajia na Usahihishaji kwa Wolof Kinachotegemea Mtandao wa Neva

Thierno Ibrahima Cissé, Fatiha Sadat

**Taasisi**  
Thierno Ibrahima Cissé, Fatiha Sadat  
Université du Québec à Montréal  
Montréal, Canada  
, 

## Muhtasari

Makala hii inatanguliza mbinu mpya ya kikagua tahajia na usahihishaji kwa lugha zenye rasilimali chache na zisizowakilishwa vya kutosha, kwa kulenga hasa lugha ya Kiafrika, Wolof. Kwa kutumia uwezo wa miundo ya Transformer na mitandao ya neva, tunapendekeza mfumo bora na wa vitendo unaoweza kusahihisha makosa ya uchapaji na kuboresha ubora wa maandishi. Mbinu yetu iliyopendekezwa inahusisha kufunza mfano wa Transformer kwenye korasi sambamba inayojumuisha sentensi zenye makosa ya tahajia na zile zenye tahajia sahihi, zilizotengenezwa kwa kutumia mbinu ya nusu-otomatiki. Tunapoboresha mfano ili kubadilisha maandishi yenye makosa ya tahajia kuwa sentensi sahihi, tunaonyesha uwezo mkubwa wa mbinu hii kushinda changamoto zinazokabili lugha zenye uhaba wa rasilimali na zisizowakilishwa vya kutosha katika nyanja ya ukaguzi wa tahajia na usahihishaji. Matokeo yetu ya majaribio na tathmini yanaonyesha matokeo ya kuahidi, yakitoa maarifa muhimu yanayochangia juhudi zinazoendelea zenye lengo la kuboresha utofauti wa lugha na ushirikishwaji na hivyo kuboresha ufikiaji wa mawasiliano ya kidijitali kwa lugha zinazokabiliana na uhaba wa rasilimali na uwakilishi mdogo katika mazingira ya kidijitali.

## Maneno Muhimu

Ukaguzi wa tahajia na usahihishaji, lugha yenye rasilimali chache, Wolof, iliyo hatarini, ya Kiasili, korasi sambamba, Transformer

## 1. Utangulizi

Katika miaka ya hivi karibuni, Uchakataji wa Lugha Asilia (NLP) umepiga hatua kubwa katika kuelewa, kuchambua na kuzalisha lugha ya binadamu. Hata hivyo, maendeleo haya mengi yanalenga lugha zenye rasilimali nyingi kama Kiingereza, Kifaransa, na Kihispania, na kuziacha lugha zenye rasilimali chache na zisizowakilishwa vyema zikiwa na zana na rasilimali chache kwa ajili ya matumizi bora ya NLP. Makala hii inalenga kuziba pengo hili kwa kuanzisha mbinu mpya ya kukagua tahajia na kusahihisha katika lugha zenye uhaba wa rasilimali. Hasa, tunazingatia Kiwolofu, lugha ya Kiafrika inayozungumzwa ambayo hivi karibuni imeamsha shauku katika utafiti wa NLP. Pia tunawasilisha seti mpya ya data inayoweza kutumika kwa usahihishaji wa maneno katika Kiwolofu. Utafiti huu unachangia lengo kuu la kuunda zana na rasilimali jumuishi na bora za uchakataji wa lugha asilia (NLP), kwa kuzingatia kauli mbiu ya "hakuna lugha inayoachwa nyuma".

Kiwolofu, lugha ya Kisenegambia inayozungumzwa hasa nchini Senegal, Gambia na Mauritania (Diouf et al., 2017), kinatumika kama mfano wa lugha yenye rasilimali chache ambayo inaweza kufaidika sana na maendeleo ya NLP. Licha ya kuwa na zaidi ya wazungumzaji asilia milioni 10 (Eberhard et al., 2019), kuna upungufu mkubwa wa rasilimali za kidijitali na zana za kikompyuta kwa Lugha nyingi za Afrika (kama si zote), miongoni mwazo lugha ya Kiwolofu. Kadiri dunia inavyozidi kuunganishwa kupitia majukwaa ya kidijitali, ni muhimu kuhakikisha kuwa zana imara za NLP zinapatikana kwa lugha zenye rasilimali chache kama Kiwolofu. Kuwapa wazungumzaji wa lugha mifumo sahihi na yenye ufanisi ya kikagua tahajia na usahihishaji kunaweza kuongeza ufikiaji wa lugha na kukuza mawasiliano ya kidijitali katika jamii mbalimbali za lugha.

Kutengeneza vikagua tahajia na mifumo ya usahihishaji kwa lugha yenye rasilimali chache ni vigumu kutokana na upatikanaji mdogo wa data iliyofafanuliwa, uchangamano wa kimofolojia, na ukosefu wa rasilimali za kikompyuta zilizoimarika. Mbinu za kijadi kama mifumo inayotegemea kanuni au kamusi huenda zisishughulikie changamoto hizi kikamilifu, hivyo kuhitaji mbinu mbadala. Mbinu za Ujifunzajikina, hususan mifano ya Transformer, zimeonyesha uwezo mkubwa katika kazi mbalimbali za NLP hivi karibuni. Mbinu hizi zinaweza kujifunza mifumo changamano ya lugha na kuzalisha uwakilishi unaozingatia muktadha, na kuzifanya kuwa bora kwa kushughulikia changamoto zinazohusiana na kikagua tahajia na usahihishaji wa lugha yenye rasilimali chache.

Makala hii inawasilisha mfano unaotegemea Transformer kwa ajili ya usahihishaji wa neno na tahajia katika Wolof. Mfano wetu umefunzwa kwenye korasi sambamba inayojumuisha sentensi zenye makosa ya tahajia na sentensi zisizo na makosa, ukiboresha mfano ili kutafsiri maandishi yanayokabiliwa na makosa kuwa sentensi sahihi. Zaidi ya hayo, tunachangia katika maendeleo ya NLP kwa lugha ya Wolof kwa kuunda korasi mpya ya sentensi zenye makosa ya tahajia na sentensi zisizo na makosa. Korasi hii inatumika kama kigezo na hali ya kisasa katika usahihishaji wa neno na tahajia kwa Wolof, ikitoa rasilimali muhimu kwa utafiti wa baadaye. Rasilimali hii itawezesha uundaji wa zana na matumizi ya hali ya juu zaidi ya NLP kwa Wolof.

Sehemu iliyobaki ya makala hii imepangwa kama ifuatavyo: Sehemu ya 2 inapitia kazi zinazohusiana kuhusu lugha ya Wolof na inatoa muhtasari wa kikagua tahajia na usahihishaji wa lugha yenye rasilimali chache, pamoja na mitandao ya neva na mifano ya Transformer katika NLP. Sehemu ya 3 inaeleza kwa kina mbinu iliyotumika katika kuunda mfumo wetu wa kikagua tahajia na usahihishaji unaotegemea Transformer. Sehemu ya 4 inawasilisha matokeo yetu ya tathmini, ikijumuisha mjadala wa utendaji wa mfumo. Katika Sehemu ya 5, tunachunguza vikwazo vya mfumo wetu na kujadili maeneo yanayowezekana ya kuboresha. Hatimaye, Sehemu ya 6 inahitimisha makala, inasisitiza athari za matokeo yetu na kupendekeza mielekeo ya utafiti wa baadaye.

## 2. Usuli

## 2.1. Lugha ya Wolof

Wolof ni lugha inayomilikiwa na kundi la Kisenegambia ndani ya tawi la Kaskazini la familia ya lugha ya Kiatlantiki, ambayo ni sehemu ya familia pana ya lugha za Kiniger-Kongo. Inashirikiana kwa uhusiano imara wa kiisimu na lugha za Kipulaar na Kiserer (Sapir, 1971; Doneux, 1978; Wilson, 1989). Familia ya lugha ya Kiatlantiki inajumuisha takriban lugha 40, huku Kipulaar (lahaja ya Kifulani) kikiwa kipekee, na nyingi zinazungumzwa katika maeneo karibu na pwani ya Atlantiki ya Afrika. Ingawa Wolof kimsingi ni lugha ya mazungumzo, tahajia yake ilisanifishwa mwaka 1972 (Robert, 2011).

Tafiti za kiisimu za kifafanuzi kuhusu Wolof zinaweza kufuatiliwa hadi kipindi cha ukoloni (Boilat, 1858), huku tafiti nyingine kuhusu mofolojia na sintaksi ya Wolof zimefanywa na Diagne (1971), Mangold (1977), Church (1981), Dialo (1981), na Ka (1981). Tafiti za kina za kiuchambuzi za sintaksi ya Wolof zinaweza kupatikana hasa katika kazi za Njie (1982) na Dunigan (1994).

Wolof hasa ni lugha ya kiaspekti, inayozingatia kipengele cha kitendo badala ya wakati wake. Sifa hii inaruhusu kialamishi cha hali isiyokamilika kuungana na vialamishi mbalimbali vya wakati. Lugha hiyo ina mfumo tajiri wa vitenzi, unaojumuisha safu pana ya maumbo msingi ya vitenzi na mifano ya unyambulishaji. Hasa, Mangold (1977) na Church (1981) wanatoa mawasilisho ya kimfumo ya mifano ya unyambulishaji wa vitenzi vya Wolof.

Kwa upande wa fasihi na rasilimali, Wolof inaonekana katika aina mbalimbali, kama vile riwaya, mkusanyiko wa hadithi fupi, na mashairi. Hata hivyo, hata nchini Senegal, ni vigumu kupata nyenzo zilizoandikwa kwa Wolof. Juhudi za hivi karibuni zimefanywa ili kuboresha upatikanaji wa rasilimali kwa wazungumzaji wa Wolof. Katika utafiti wa Gauthier et al. (2016), watafiti walikusanya seti ya data ya utambuzi wa usemi wa kiotomatiki (ASR) kwa Lugha nne za Afrika, zikiwemo Wolof. Seti hii ya data ilitumika baadaye kuunda mfumo wa kwanza wa ASR kwa Wolof. Mpango mwingine ulipendekezwa na Nguer et al. (2015), ambao walielezea mchakato wa uundaji wa kamusi ya kwanza shirikishi ya mtandaoni ya Wolof. Mradi huu ulikuwa sehemu ya mradi mkubwa wa Dictionnaires Langues Africaines - Français (DiLAF), ambao umetoa kamusi za Lugha za Afrika saba, ikiwemo Wolof. Hata hivyo, wakati wa kuandika, kamusi zote zinapatikana mtandaoni isipokuwa ile ya Wolof. Hivi karibuni zaidi, Cissé na Sadat (2023) wamewasilisha rasilimali mbalimbali za lugha ya Wolof, ikiwemo zana ya kikagua tahajia inayotegemea hasa kanuni za uandishi za lugha hiyo.

## 2.2. Kikagua Tahajia na Usahihishaji kwa Lugha yenye Rasilimali Chache

Kikagua tahajia na usahihishaji kwa lugha yenye rasilimali chache vimekuwa vya kuvutia sana kwa watafiti wengi. Mbinu za awali mara nyingi zilitegemea mifumo inayotegemea kanuni (Armstrong et al., 1995) au mbinu za kitakwimu, kama vile miundo ya mifereji yenye kelele (Kernighan et al., 1990), miundo ya n-gramu (Stolcke, 2000), na miundo fiche ya Markov (Viterbi, 1967). Hata hivyo, mbinu hizi mara nyingi zinahitaji ujuzi mkubwa wa kiisimu na data iliyofafanuliwa, ambayo inaweza kuwa haba au kutokuwepo kabisa kwa lugha yenye rasilimali chache.

Katika miaka ya hivi karibuni, watafiti wamechunguza mbinu zinazoendeshwa na data kwa lugha yenye rasilimali chache, kama vile ujifunzaji bila usimamizi (Soricut na Och, 2015) na mbinu za kujianzisha (Yarowsky et al., 2001). Baadhi ya tafiti pia zimechunguza matumizi ya Ujifunzaji hamishi kati ya lugha (Täckström et al., 2012) au kutumia korasi linganifu (Madnani et al., 2012) ili kuimarisha utendaji wa kikagua tahajia na usahihishaji katika lugha zenye rasilimali chache. Hata hivyo, mbinu hizi bado zinaweza kuwa na vikwazo kutokana na upatikanaji na ubora wa korasi sambamba na zinazolinganishwa.

## 2.3. Mitandao ya Neva katika Kikagua Tahajia na Usahihishaji

Kuibuka kwa mbinu za Ujifunzajikina, hasa miundo ya Transformer (Vaswani et al., 2017) na mitandao ya neva, kumekuwa na athari kubwa katika uwanja wa NLP. Mbinu hizi zimeonyesha uwezo mkubwa katika kazi mbalimbali, ikiwemo tafsiri ya mashine (Bahdanau et al., 2015), urejeshaji wa taarifa, mawakala wa mazungumzo, uchambuzi wa hisia (Socher et al., 2013), na ufupishaji wa maandishi (See et al., 2017).

Katika muktadha wa kikagua tahajia na usahihishaji, miundo ya mfuatano-hadi-mfuatano (Sutskever et al., 2014) imetumika kwa matokeo ya kuahidi, kwa kutumia usanifu wa kisimbaji-kifumbuzi kuoanisha mifuatano yenye makosa ya tahajia na mifuatano yake sahihi (Hládek et al., 2019). Mbinu za umakini (Bahdanau et al., 2015) pia zimeunganishwa katika miundo hii ili kuimarisha ulinganifu kati ya mifuatano ya pembejeo na matokeo (Garg et al., 2019).

Uendelezaji wa miundo ya Transformer umeendeleza zaidi uwezo wa mitandao ya neva katika kikagua tahajia na usahihishaji. Miundo ya Transformer, ambayo hutegemea mbinu za kujizingatia, imethibitisha ufanisi katika kunasa tegemezi za masafa marefu na kutoa uwakilishi sahihi zaidi unaozingatia muktadha (Devlin et al., 2019). Tafiti za hivi karibuni zimetumia miundo ya Transformer, kama vile BERT na GPT (Radford na Narasimhan, 2018), kwa utambuzi na usahihishaji wa makosa ya tahajia (Sorokin et al., 2016), au kuzirekebisha kwa lugha mahususi zenye rasilimali chache (Al-Ghamdi et al., 2023).

## 3. Mbinu

Mbinu yetu ina hatua tatu kuu, ambazo ni utayarishaji wa data, ujenzi wa usanifu wa muundo, na usanidi wa mafunzo ya muundo.

Awali, tunajadili mchakato wa upatikanaji wa data na ufafanuzi wa korasi, ambao ni muhimu kwa kufunza muundo bora, hasa katika muktadha wa lugha zenye rasilimali chache. Baadaye, tunachunguza kwa kina usanifu wa muundo wa Transformer, tukifafanua vipengele vyake na chaguo za muundo. Hatimaye, tunaelezea usanidi wa mafunzo, ikiwa ni pamoja na vigezo na mipangilio iliyotumika kufunza muundo.

## 3.1. Mchakato wa uteuzi na ufafanuzi wa data

Mchakato wa upatikanaji wa data na ufafanuzi wa korasi unajumuisha awamu mbili kuu. Awali, tulitambua vyanzo vinavyofaa kwa ajili ya data ya korasi, ambavyo vilipatikana katika miundo mbalimbali (k.m., PDF, maandishi, HTML), na baadaye tukafanya uchimbaji wa maudhui. Kufuatia hili, tulitumia mbinu mseto, ikijumuisha mbinu za ufafanuzi za kwa mikono na za kiotomatiki, na tukafanya usahihishaji wa kina ili kuzalisha korasi ya sentensi zilizosahihishwa kwa usahihi.

## 3.1.1. Uchaguzi wa Data

Mchakato wa ukusanyaji wa data kwa ajili ya utafiti wetu wa usahihishaji wa tahajia ya Wolof ulihusisha kukusanya data kutoka vyanzo mbalimbali kama vile tovuti za habari, majukwaa ya mitandao ya kijamii 3 4, tovuti za kidini, faili za PDF za kidini (Diagne, 1997), kamusi za lugha mbili za Wolof-Kifaransa (Diouf and Kenkyūjo, 2001; Cissé, 2004) na korasi za lugha mbili za Wolof-Kifaransa zilizotolewa (Adelani et al., 2022; Costa-jussà et al., 2022).

Kwa jumla, tulikusanya sentensi 78,384 kwa ajili ya korasi yetu. Wakati wa mchakato wa ukusanyaji, tulisisitiza ubora na utofauti wa maudhui, tukihakikisha kwamba korasi yetu ilijumuisha sentensi kutoka nyanja na aina mbalimbali.

## 3.1.2. Ufafanuzi wa korasi

Kwanza, tulitumia hati za Python kuchota data kutoka tovuti za habari, majukwaa ya mitandao ya kijamii, na tovuti za kidini. Mchakato huu ulitoa sentensi 25,860 kutoka tovuti za kidini, sentensi 21,341 kutoka mitandao ya kijamii, na sentensi 13,245 kutoka tovuti za habari. Kisha, tulitoa sentensi 10,087 kutoka faili za PDF za kidini na kamusi za lugha mbili za Kiwolofu-Kifaransa. Zaidi ya hayo, tulitumia data ya Kiwolofu kutoka korasi za lugha mbili za Kiwolofu-Kifaransa zilizotolewa na Masakhane (Adelani et al., 2022) na Facebook (Costa-jussà et al., 2022; Goyal et al., 2022). Takwimu za kina za kila korasi, zikiwemo idadi ya sentensi, zimeainishwa katika Jedwali la 1.

p03-01.png

Jedwali la 1: Takwimu za korasi

Sentensi zote zilizokusanywa zilihifadhiwa katika faili za maandishi wazi kwa kutumia usimbaji wa UTF-8. Tuliona kwamba sentensi nyingi zilizokusanywa zilikuwa na makosa ya kileksika au ya kisarufi. Ili kuunda korasi sambamba ya sentensi zilizoandikwa vibaya na zile zisizo na makosa, tulitumia zana ya kusahihisha tahajia ya Kiwolofu inayotegemea kanuni (Cissé na Sadat, 2023) kutengeneza faili iliyo na maumbo yaliyosahihishwa ya sentensi. Kisha tukasahihisha kwa mikono faili iliyozalishwa ili kurekebisha makosa yoyote yaliyobaki ya kisarufi na kileksika.

Kwa sentensi ambazo awali hazikuwa na makosa, tulianzisha makosa mbalimbali ya uchapaji. Makosa mengi yaliyoanzishwa yanahusisha urudufishaji, utoaji, ubadilishaji wa nafasi, au uingizwaji wa herufi. Jedwali la 2 linatoa muhtasari wa makosa ya uchapaji yaliyoanzishwa.

Mara tu korasi yetu sintetiki sambamba ilipokamilika, tulikabiliwa na uamuzi muhimu kabla ya kuanza awamu ya uchakataji wa awali wa data na mafunzo ya modeli, kwani tulihitaji kuamua kitengo cha msingi cha kiisimu ambacho modeli itafanyia kazi. Idadi kubwa ya modeli za NLP kijadi zimetumia tokeni kama kitengo chao kidogo zaidi. Hata hivyo, mwelekeo unaoibuka umebainika kuelekea matumizi ya vitengo vya maneno madogo (Sennrich et al., 2016b) kama vizuizi vya msingi vya ujenzi.

p04-01.png

Jedwali la 2: Aina za makosa

Dhana ya kutumia maneno kama pembejeo kwa modeli yetu mwanzoni inaonekana kuwa mkakati chaguo-msingi wenye mantiki, ikiakisi mbinu inayozingatiwa katika modeli nyingi za NLP. Hata hivyo, inapotumika kwa usahihishaji wa tahajia, mbinu ya tokeni inaweza kuwa ngumu kupita kiasi, kutokana na makosa yanayoweza kutokea yanayotokana na matumizi ya alama ya uakifishaji. Zaidi ya hayo, umuhimu wa modeli za NLP kufanya kazi kwenye msamiati usiobadilika unamaanisha kwamba msamiati wa zana yetu ya usahihishaji wa tahajia ungehitaji kuwa mpana vya kutosha kujumuisha kila kosa moja linalowezekana la tahajia la kila neno moja linalokutana wakati wa mchakato wa mafunzo. Athari za hitaji hili zingesababisha modeli ya gharama kubwa, kwa upande wa mafunzo na matengenezo.

Kwa kuzingatia mambo haya, tumeamua kutumia herufi kama msingi wa ujenzi wa kikagua tahajia chetu. Mbinu hii imethibitika kuwa na ufanisi mkubwa katika kazi za utafsiri na Lee et al. (2017). Uteuzi wa mgawanyiko wa kiwango cha herufi pia unatuwezesha kudumisha ukubwa wa istilahi unaodhibitiwa.

Kwa madhumuni ya majaribio, seti ya data kwa ujumla imegawanywa katika sehemu ndogo tatu: seti ya mafunzo, seti ya uthibitishaji na seti ya majaribio. Tulichagua kwa nasibu 10% ya korasi iliyozalishwa ili kuunda seti za uthibitishaji na majaribio. Hili lilifanywa ili kuhakikisha kwamba seti hizi zinawakilisha kwa usahihi seti nzima ya data. 90% iliyobaki ya data ilitumika kisha kuunda seti yetu ya mafunzo.

## 3.2. Usanifu wa modeli

Katika utafiti huu, tulitumia usanifu wa modeli ya Transformer uliobinafsishwa (Vaswani et al., 2017) kwa kazi ya kusahihisha tahajia ya Kiwolofu. Modeli ya Transformer imeonyesha mafanikio ya ajabu katika kazi mbalimbali za uchakataji wa lugha asilia kwa kutumia mbinu za kujizingatia, ambazo huiruhusu kuchakata mifuatano ya pembejeo kwa ufanisi bila hitaji la tabaka rejezi au konvolisheni.

Modeli yetu ina vipengele viwili: kisimbuzi na kifumbuzi, kila kimoja kikijumuisha tabaka tano zinazofanana (Biljon et al., 2020). Kazi kuu ya kisimbuzi ni kudhibiti mifuatano ya pembejeo iliyo na makosa ya tahajia, huku kifumbuzi kikilenga kutoa mifuatano ya matokeo bila makosa ya tahajia, kama inavyoonyeshwa katika Kielelezo 1.

p04-02.png

Kielelezo 1: Muundo wa Transformer (Vaswani et al., 2017)

Wakati wa awamu ya usimbaji, kila neno la pembejeo hubadilishwa kuwa uwakilishi wa vekta kwa kutumia safu ya upachikaji. Ili kujumuisha taarifa za nafasi katika upachikaji wa pembejeo, usimbaji wa nafasi unatumika. Katika sehemu zote mbili za kisimbuzi na kifumbuzi cha mfano, kila tabaka linajumuisha utaratibu wa kujitazamia wenye vichwa vingi wenye vichwa viwili vya utazamaji. Hii inafuatwa na mitandao ya kusambaza mbele kwa nafasi (FFNs) yenye saizi ya fiche ya 256 na saizi ya kusambaza mbele ya 1024.

Mchakato wa kujizingatia unahusisha kuzalisha vekta za swali (Q), ufunguo (K), na thamani (V) kutoka kwa pembejeo. Vekta hizi kisha hutumika kuhesabu matriksi ya alama kwa kufanya zidisho la matriksi kati ya vekta ya hoja na vekta ya ufunguo. Matriki inayotokana hupunguzwa kwa kipimo cha mzizi wa mraba wa mwelekeo wa vekta ya ufunguo (d<sub>k</sub>). Ili kupata uzani wa umakini, matriki ya alama hurekebishwa kwa kutumia softmax, ikiwakilisha umuhimu uliogawiwa kwa sehemu tofauti za mfuatano wa pembejeo. Uzani huu wa umakini hutumika kupata vekta ya pato, kama inavyoonyeshwa katika Eq. 1 (Vaswani et al., 2017). Ili kuwezesha mafunzo bora na mielekeo thabiti, miunganisho ya mabaki na urekebishaji wa tabaka hutekelezwa kote katika mtandao.

p05-01.png

Kifumbuzi kinajumuisha vijisehemu viwili vya umakini wa vichwa vingi ndani ya tabaka moja: kimoja kwa ajili ya mfuatano lengwa na kingine kwa ajili ya matokeo ya kisimbuzi. Umakini wa kichwa vingi wa kwanza umefichwa ili kuzuia kukokotoa alama za umakini kwa maneno yanayofuata. Tabaka la umakini wa vichwa vingi la pili linatumia matokeo ya enkoda kama maswali na funguo, huku matokeo ya tabaka la kwanza la umakini wa vichwa vingi yakitumika kama thamani. Utaratibu huu unaiwezesha dekoda kubainisha pembejeo za enkoda ambazo ni muhimu zaidi kwa mchakato wake wa uzalishaji, hivyo kutoa mfuatano wa pato bila makosa yoyote ya tahajia. Pato kutoka tabaka la mwisho la kusambaza mbele kwa nukta moja kisha hupelekwa kwa tabaka la mstari, likitumika kama kiainishi, likifuatiwa na tabaka la softmax ili kuzalisha maandishi yaliyosahihishwa.

Kwa uanzishaji, tunatumia uanzishaji wa Xavier na faida ya 1.0 (Glorot na Bengio, 2010) kwa uzani wote unaoweza kufunzwa, huku vipengele vya upendeleo vikianzishwa na sufuri. Upachikaji hupitia uanzishaji wa Xavier na faida tofauti ya 1.0. Ili kupunguza idadi ya vigezo vinavyoweza kufunzwa, mazoezi ya kawaida ni kufunga upachikaji wa chanzo na lengwa, pamoja na safu ya softmax (Press na Wolf, 2017). Kwa kuwa mfano wetu hufanya kazi katika kiwango cha herufi, saizi ya msamiati chaguomsingi ni ndogo kiasi. Tunaweka mwelekeo wa upachikaji kuwa 256 katika kisimbuzi na kifumbuzi, ambayo inalingana na ukubwa wa siri wa Mtandao wa Kusambaza Mbele (FFN) kwa upatanifu. Zaidi ya hayo, tunapima upachikaji kwa mzizi wa mraba wa saizi yake.

Ili kushughulikia suala la ujifunzaji kupita kiasi, tunatumia mbinu za kufuta (dropout) kwenye vipengele mbalimbali vya Transformer. Awali, tunatumia kiwango cha kuacha upachikaji cha 10<sup>-1</sup> kwa kisimbuzi na kifumbuzi, ambacho kinasaidia katika kuacha maneno kutoka kwa matriki ya upachikaji (Gal na Ghahramani, 2016). Zaidi ya hayo, tunatumia kuacha tu ndani ya tabaka za kifumbuzi kwa kiwango cha 3 × 10<sup>-1</sup> (Srivastava et al., 2014).

## 3.3. Mafunzo ya Mfano

Utaratibu wa mafunzo ya mfano ulibuniwa kwa uangalifu, ukizingatia vigezo mbalimbali ili kuhakikisha matokeo madhubuti na yanayoweza kurudiwa.

Tulitumia mafunzo ya kiamuzi kwa kutumia mbegu thabiti ya nasibu ya 42. Ili kuboresha mfano, tulichagua kiboreshaji cha Adam kinachotumika sana (Kingma na Ba, 2015), ambacho kina viwango vya ujifunzaji vinavyobadilika na masasisho ya vigezo yanayotegemea msukumo. Kwa momenti za mpangilio wa kwanza na wa pili, tuligawa thamani za beta za [9×10<sup>-1</sup>, 999×10<sup>-3</sup>], mtawalia. Kiwango cha ujifunzaji kilianzishwa katika 10^-4, na kizingiti cha chini cha 10^-8 kiliwekwa ili kusitisha mafunzo wakati wa muunganiko au karibu na muunganiko.

Ili kuboresha mchakato wa ujifunzaji, tulipitisha mkakati wa upangaji unaotegemea tambarare (Smith, 2017). Kwa thamani ya subira ya 5, kiwango cha ujifunzaji kilipunguzwa kwa kipengele cha 7 × 10<sup>-1</sup> ikiwa alama ya uthibitishaji haikuboreshwa katika raundi tano mfululizo za uthibitishaji. Marekebisho haya mahiri ya kiwango cha ujifunzaji, kulingana na maoni ya utendaji, yalisababisha muunganiko na uboreshaji ulioimarishwa.

Tuliwezesha ukokotoaji sambamba wenye ufanisi wakati wa mafunzo kwa kutumia ukubwa wa kundi wa tokeni 4096 (Ott et al., 2018). Mbinu ya kupanga makundi kwa kuzingatia tokeni iliboresha rasilimali za kikokotozi kwa kuunda makundi kulingana na jumla ya idadi ya tokeni badala ya idadi ya sentensi.

Katika mchakato mzima wa mafunzo, tuliweka mkazo mkubwa kwenye uwezo wa modeli wa kujumlisha na kufanya vizuri kwa kufanya tathmini za mara kwa mara. Ili kuhakikisha tathmini kamili, tulianzisha vipindi vya uthibitishaji vya masasisho 2000, vikijumuisha epoka 50. Tulichagua kipindi hiki kwa uangalifu, tukizingatia kwamba kuweka marudio ya uthibitishaji ya juu sana kunaweza kutotoa fursa za kutosha kwa modeli kujifunza na kuboresha wakati wa uthibitishaji. Zaidi ya hayo, uthibitishaji wa mara kwa mara kupita kiasi unaweza kusababisha muda mrefu wa mafunzo na uwezekano wa kusitisha mafunzo mapema ikiwa thamani ya subira ya uthibitishaji haijawekwa juu vya kutosha. Kwa hivyo, tuliamua kutumia muda uliotajwa ili kuweka usawa.

Zaidi ya hayo, ili kuimarisha uwezo wetu wa kufuatilia kwa karibu mchakato wa mafunzo na kupata ufahamu wa kina kuhusu maendeleo ya modeli, tulitekeleza marudio ya kuweka kumbukumbu ya masasisho 200.

Tulitekeleza usimamishaji wa mapema kwa kupunguza kazi yetu ya hasara ya entropi mtambuka, ambayo ni mbinu ya kawaida katika mafunzo ya modeli. Kufuatilia kwa kuendelea kazi ya hasara kulituruhusu kusitisha mafunzo wakati alama mpya ya chini ilipofikiwa, jambo lililozuia kwa ufanisi Ujifunzaji kupita kiasi.

Ili kukuza utabiri mbalimbali na kupunguza ujifunzaji kupita kiasi, tulijumuisha mbinu mbili za udhibiti: ulainishaji wa lebo na upunguzaji wa uzani. Hasa, tulitumia ulainishaji wa lebo kwa mgawo wa 10^-1 (Szegedy et al., 2016), na upunguzaji wa uzani kwa kiwango cha 10^-4 (Srivastava et al., 2014). Ulainishaji wa lebo ni mbinu ya udhibiti inayogawa upya uzito wa uwezekano kutoka kwa tokeni za rejeleo hadi kwa tokeni nyingine za msamiati. Kwa kupunguza msisitizo wa kupita kiasi kwenye tokeni maalum za rejeleo, ulainishaji wa lebo unakuza utofauti katika matokeo ya modeli na kusaidia kuzuia kujiamini kupita kiasi katika utabiri. Uozo wa uzani, unaojulikana pia kama urekebishaji wa L2, ni mbinu inayotumika kudhibiti utata wa modeli. Wakati wa mafunzo, inapunguza ukubwa wa uzani wa modeli kwa kuongeza neno la adhabu linalolingana na thamani za uzani kwenye kazi ya hasara. Neno hili la urekebishaji linahimiza thamani ndogo za uzani, kuzuia modeli dhidi ya kuzoea kupita kiasi data ya mafunzo na kuboresha utendaji wa ujumlishaji.

Wakati wa mafunzo, kipimo chetu kikuu cha tathmini kilikuwa alama ya BLEU iliyoimarika (Papineni et al., 2002), ambayo hupima ufanano kati ya mfuatano uliotabiriwa na wa marejeleo. Kwa tathmini bora, tulitumia mkakati wa kupanga makundi kulingana na tokeni, ukiwa na ukubwa wa kundi wa tokeni 1024.

Ili kudhibiti urefu wa mfuatano unaozalishwa wakati wa usimbuaji, tuliweka urefu wa juu wa matokeo wa tokeni 175. Zaidi ya hayo, tulidumisha ufuatiliaji wa maendeleo na uadilifu wa uthibitishaji kwa kuchapisha sentensi tatu za uthibitishaji mara kwa mara wakati wa kila kukimbia kwa uthibitishaji.

## 4. Tathmini

Kutathmini mifumo ya kikagua tahajia na usahihishaji ni kazi muhimu itakayosaidia kuelewa ufanisi wao na utumikaji wa jumla. Ingawa hakuna kiwango kinachokubalika kwa jumla cha kutathmini mifumo ya kukagua na kusahihisha tahajia, mbinu kuu tatu zimeibuka. Mbinu hizi zinahusisha vipimo vya uainishaji, vipimo vya tafsiri ya mashine, na vipimo vya urejeshaji wa taarifa.

Vipimo vya uainishaji, kama vile Ushabaha, Kumbuko tambuzi, na alama ya F, hutumika kutathmini utendaji wa mifumo ya kusahihisha tahajia kiotomatiki (Starlander na Popescu-Belis, 2002). Vipimo vya tafsiri ya mashine, vikiwemo alama ya BLEU (Papineni et al., 2002), CER au WER (Popović na Ney, 2007), na ChrF++ (Popović, 2015, 2017), pia hutumika katika tathmini. Zaidi ya hayo, vipimo vya urejeshaji wa taarifa kama vile MRR (Mangu et al., 2000) vinaweza kutumika.

Kwa kuzingatia kwamba kikagua tahajia chetu hufanya kazi kwa kutafsiri maandishi chanzi yenye makosa kuwa umbo lake sahihi linalowezekana zaidi, vipimo vya tafsiri ya mashine ndivyo vinafaa zaidi kupima utendaji wa mfumo wetu. Kwa mfano, kipimo cha BLEU kimetumika sana kutathmini zana za kukagua tahajia katika tafiti mbalimbali, zikiwemo zile zilizofanywa na watafiti kama vile Gerdjikov et al. (2013); Mitankin et al. (2014); Sariev et al. (2014). Kipimo cha WER pia kilitumika katika utafiti wa Evershed na Fitch (2014).

Baada ya kufunza na kutathmini modeli yetu kwenye seti ya majaribio, kikagua tahajia chetu kilionyesha ustadi wa juu katika vipengele mbalimbali vya usahihishaji wa tahajia, kama inavyoonyeshwa katika Jedwali la 3.

Alama ya BLEU, kipimo cha jinsi maandishi yaliyosahihishwa yanavyolingana na maandishi ya kumbukumbu kwa kuzingatia mwingiliano wa n-gramu, ni 83%. Alama hii ya juu inaonyesha kwamba modeli ina uwezo wa kuzalisha maandishi ambayo yanalingana kwa karibu na maandishi ya kumbukumbu katika uchaguzi wa kileksika na muundo wa kisarufi.

p06-01.png

Jedwali 3: Vipimo vya utendaji wa kifaa cha kusahihisha herufi

WER ya 0.08 inaashiria kwamba, kwa wastani, ni 8% tu ya maneno katika sentensi zilizosahihishwa yanatofautiana na sentensi za kumbukumbu. Vivyo hivyo, CER ya 0.03 inaonyesha kwamba sentensi zilizosahihishwa zina, kwa wastani, tofauti za kiwango cha herufi za 3% tu kutoka kwa sentensi za kumbukumbu. Vipimo hivi vinaangazia ufanisi wa kikagua tahajia katika kutambua kwa usahihi na kusahihisha makosa katika viwango vya neno na herufi.

Zaidi ya hayo, alama ya ChrF++ ya 94% inaonyesha kiwango cha juu cha ufanano kati ya sentensi zilizosahihishwa na sentensi za kumbukumbu, ikizingatia vipengele mbalimbali kama vile Ushabaha, Kumbuko tambuzi, na alama-F ya kiwango cha herufi.

## 4.1. Uchambuzi wa Makosa

Mbali na vipimo vya utendaji vilivyotajwa hapo juu, ni muhimu kufanya uchambuzi wa kina wa makosa ili kupata ufahamu wa ndani zaidi kuhusu tabia ya kikagua tahajia chetu. Tunatoa tathmini ya kimaelezo ya modeli yetu kwenye uteuzi wa sentensi za Kiwolofu zilizo na makosa ya tahajia katika Jedwali la 4. Jedwali hili linawasilisha sentensi zilizosahihishwa pamoja na marejeleo yake yanayolingana.

p06-02.png

Jedwali la 4: Tathmini ya kimaelezo

Uchunguzi wa makosa kwenye kikundi kidogo cha data ya majaribio umefichua makundi matatu ya msingi ya makosa yanayojirudia yanayotolewa na modeli yetu.

Kundi la kwanza la makosa linahusu usahihishaji wa irabu ndefu katika maneno. Katika lugha ya Kiwolofu, kutofautisha kati ya irabu ndefu na fupi kunaathiri kwa kiasi kikubwa maana za maneno. Hata hivyo, modeli yetu inatatizika mara kwa mara kuamua kwa usahihi wakati wa kubadilisha irabu fupi na ndefu, na kusababisha masahihisho yasiyo sahihi.

Kundi la pili la makosa linahusiana na majina ya watu, mahali, na mashirika. Vipengele vya majina ya watu, mahali, na mashirika, ambavyo mara nyingi hutofautiana na kanuni za kawaida za kuandika lugha ya Wolof, husababisha mkanganyiko mkubwa kwa mfano huu. Katika baadhi ya matukio, modeli inadhania kimakosa kuwa haya majina ya watu, mahali na mashirika yana makosa na inajaribu kuyarekebisha. Katika visa vingine, wakati majina maalum ya watu, mahali na mashirika yameandikwa vibaya na si sehemu ya msamiati, modeli inapendekeza marekebisho yasiyo sahihi.

Kundi la tatu la makosa linahusishwa na usimamizi wa lafudhi. Lafudhi zina jukumu muhimu katika kutofautisha na kutamka maneno katika Kiwolofu. Modeli yetu inakabiliwa na changamoto mara kwa mara wakati wa kutambua kwa usahihi na kurejesha lafudhi zilizokosekana katika maneno.

Matokeo haya yanasisitiza haja ya uboreshaji zaidi wa kikagua tahajia chetu, hasa katika kushughulikia utata wa urefu wa vokali, kushughulikia majina ya watu, mahali na mashirika, na kuhifadhi lafudhi ndani ya lugha ya Kiwolofu. Aidha, ni muhimu kuchunguza suluhu zinazowezekana za kupunguza makosa haya yanayojirudia, kama vile kujumuisha ufahamu wa lugha wa kimuktadha na kuimarisha uwezo wa modeli wa kutambua nuances za kiisimu.

## 4.2. Mtihani wa umuhimu

Ili kuthibitisha umuhimu wa kitakwimu wa matokeo yanayotokana na tathmini yetu ya kikagua tahajia, tulifanya jaribio la umuhimu, tukilinganisha modeli yetu dhidi ya kikagua tahajia cha pekee cha Wolof kilichopo mtandaoni. Lengo la jaribio hili ni kubainisha Uthabiti wa vipimo vya utendaji vilivyozingatiwa, kuhakikisha kwamba si matokeo ya nasibu tu.

Hatua yetu ya awali ilihusisha uteuzi wa nasibu wa sentensi 100 za Wolof kutoka kwenye korasi yetu iliyoundwa. Kufuatia hatua hii ya awali, kila sentensi iliyochaguliwa iliingizwa katika mifumo yote miwili ya kusahihisha ili kuangalia na kuchambua masahihisho yaliyopendekezwa.

Baadaye, mapendekezo ya masahihisho yaliyotolewa na mifumo yote miwili yalifanyiwa tathmini na mzungumzaji asilia wa Wolof. Mtathmini aliendelea kutojua chanzo cha kila marekebisho ili kudumisha kutokuwa na upendeleo. Mfumo wa uwekaji alama uliotumika ulikuwa kama ifuatavyo: alama ya "3" ilitolewa kwa sentensi ambazo zilirekebishwa kikamilifu na kuendana na sentensi ya kumbukumbu. Alama ya "2" ilitengwa kwa marekebisho ambayo, licha ya makosa madogo, yalihifadhi maana iliyokusudiwa ya sentensi asilia. Mwishowe, alama ya "1" ilitolewa kwa marekebisho ambayo yalikuwa si sahihi kabisa au yasiyotosheleza.

Ili kufupisha tathmini zilizofanywa kwenye sentensi zote, tumekusanya matokeo katika Jedwali la 5, ambalo linatoa muhtasari wa usambazaji wa alama zilizotolewa kwa kila mfumo.

Kwa kuzingatia asili ya kiwango cha mpangilio wa tathmini, tulichagua jaribio la Wilcoxon signed-rank kama zana sahihi zaidi ya kitakwimu ili kubaini kama kuna tofauti kubwa ya kitakwimu kati ya mifumo hiyo miwili.

p07-01.png

Jedwali la 5: Madaraja ya mifumo

Kwa jaribio hili, tuliunda dhana tupu na dhana mbadala zifuatazo:

H0 : Hakuna tofauti kubwa kati ya mifumo hiyo miwili.

Ha : Muundo wa neva ni bora zaidi kwa kiasi kikubwa.

Jaribio la Wilcoxon, lililoanzishwa awali na Wilcoxon (1945), linawakilisha mbinu isiyo ya kigezo inayotumika sana kwa kulinganisha sampuli mbili zilizooanishwa. Mbinu hii ni muhimu hasa wakati dhana kuhusu usambazaji wa data hazijatimizwa au wakati wa kushughulikia data ya kiwango. Tulipitisha kiwango cha umuhimu cha kawaida (α = 0.05) kwa jaribio hili, tukizingatia tokeo kuwa muhimu kitakwimu ikiwa thamani ya p itakuwa chini ya α. Kwa mujibu wa mbinu hii, matokeo yaliyopatikana kwa takwimu ya W na thamani ya p yameandikwa katika Jedwali la 6.

p07-02.png

Jedwali la 6: Takwimu ya W na Thamani ya p

Takwimu ya W hutumika kama kiashiria cha vyeo vya jumla vilivyopewa tofauti kati ya uchunguzi uliooanishwa, ikipendelea muundo wetu wa neva. Thamani ya takwimu ya W ya 0.0 inaashiria kwamba, katika matukio mengi yaliyolinganishwa, mfumo wetu wa neva uliopendekezwa umeonyesha utendaji bora zaidi unapolinganishwa na mfumo uliopo unaotegemea kanuni.

Thamani ya p inaakisi uwezekano wa kupata tofauti iliyojitokeza kiasi hicho kati ya mifumo miwili kwa bahati tu, ikichukuliwa kuwa dhana tupu ni halali. Katika muktadha wa jaribio letu la cheo chenye alama la Wilcoxon, dhana tupu inadai kwamba hakuna tofauti kubwa katika utendaji wa mifumo hiyo miwili. Thamani ya p iliyo chini mno, kama ile iliyokokotolewa (4.92 × 10^-17 ), inatoa ushahidi thabiti dhidi ya dhana tupu hii (H<sub>0</sub>), hivyo basi kuimarisha uhalali wa dhana mbadala yetu (H<sub>a</sub>).

## 5. Mapungufu

Mfumo wetu wa kikagua tahajia umeonyesha utendaji mzuri, kama inavyoonyeshwa na alama zake za juu za BLEU na ChrF++, pamoja na alama za chini kiasi za WER na CER. Hata hivyo, bado kuna vikwazo vinavyohitaji uchunguzi zaidi na maboresho.

Kwanza, mifano ya kiwango cha herufi, kama ile iliyotumika katika utafiti huu, kwa asili ni changamano na inaweza kuchukua muda mrefu kufunzwa. Hii inatokana na mfuatano mkubwa zaidi wa data wanaohitaji kujifunza kutoka kwake, ikilinganishwa na mifano ya kiwango cha neno. Gharama ya kikokotoo ya kufunza mifano kama hiyo inaweza kuwa juu hasa wakati wa kufanya kazi na seti kubwa za data au lugha zenye seti pana za herufi.

Pili, mfano wetu unaweza kutatizika kunasa tegemezi za masafa marefu ndani ya maandishi. Tegemezi kati ya maneno katika sentensi, ambazo mara nyingi hujitokeza katika herufi kadhaa, zinaweza kuwa ngumu kwa mifano ya kiwango cha herufi kuelewa. Hili linaweza kuathiri utendaji wa mfano katika hali zinazohitaji uelewa wa kina wa semantiki ya kiwango cha sentensi.

Tatu, mfano wetu hauna faida ya kutumia upachikaji wa maneno uliofunzwa awali, ambao hunasa uhusiano wa semantiki na kisintaksia kati ya maneno. Kwa sababu hiyo, uelewa wa semantiki wa mfano unaweza kuwa na upeo mdogo ikilinganishwa na mifano inayofanya kazi katika kiwango cha neno.

Nne, mifano ya kiwango cha herufi inaweza kuwa nyeti zaidi kwa kelele katika data ya pembejeo. Makosa ya tahajia, matumizi yasiyolingana ya alama ya uakifishaji, na aina nyingine za kelele zinaweza kuwa na athari kubwa zaidi kwa mifano hii, jambo ambalo linaweza kusababisha utendaji duni katika hali fulani.

Zaidi ya hayo, ingawa mfano wetu umeundwa kushughulikia lugha yoyote inayotumia alfabeti sawa na ile ya lugha ya Wolof, unaweza kutatizika na lugha zinazotegemea sana mpangilio wa maneno. Hii inatokana na ukosefu wa uelewa wa kiwango cha neno wa modeli, ambao ungeweza kusaidia katika hali hizi.

Mwishowe, modeli yetu inaweza kukumbwa na matatizo ya utatuzi wa utata. Kwa mfano, maneno yanayoandikwa sawa lakini yenye maana tofauti yanaweza kuleta changamoto kwa modeli za kiwango cha herufi, kwa kuwa modeli hizi hazina ufikiaji wa taarifa za semantiki za kiwango cha neno.

Kwa kuzingatia mambo haya, kuna maeneo kadhaa ambayo yanaweza kulengwa kwa ajili ya uboreshaji. Kwanza, modeli inaweza kufunzwa zaidi kwa aina mbalimbali zaidi za data za kimaandishi ili kuboresha uwezo wake wa kushughulikia makosa yasiyo ya kawaida au changamano zaidi. Kwa kuzingatia mwelekeo wetu wa sasa kwenye lugha yenye rasilimali chache zinazopatikana, matumizi ya mbinu ya tafsiri-nyuma yanajitokeza kama mkakati wenye matumaini. Mbinu hii imeonyesha mara kwa mara ufanisi wake katika nyanja mbalimbali, kama vile Tafsiri ya Mashine ya Kitakwimu (SMT) (Bojar and Tamchyna, 2011), Tafsiri ya Mashine ya Neva inayosimamiwa (Sennrich et al., 2016a), na Tafsiri ya Mashine isiyosimamiwa (Lample et al., 2017).

Katika muktadha wa kukagua tahajia na kusahihisha, kutumia mbinu hii kungehusisha kufunza modeli ili kwa makusudi kuanzisha idadi kubwa ya makosa ya tahajia ya kweli ndani ya maandishi safi. Baadaye, korasi inayotokana ya maandishi yaliyoharibika inaweza kutumiwa kuboresha mfano wetu wa kikagua tahajia.

Zaidi ya hayo, tunapendekeza uchunguzi zaidi wa miundo mseto inayochanganya faida za uchakataji wa kiwango cha herufi na kiwango cha neno. Miundo kama hiyo inaweza kutumia undani wa miundo ya kiwango cha herufi huku ikidumisha uelewa wa kiwango cha juu wa semantiki ya neno na sentensi.

Mwishowe, kwa kuzingatia gharama za kikokotozi zinazohusiana na miundo ya kiwango cha herufi, itakuwa na manufaa kufanya utafiti kuhusu mbinu bora zaidi za mafunzo. Kwa kufanya hivyo, tunaweza kupunguza mzigo wa kikokotozi na kuboresha ufanisi wa jumla wa mchakato wa mafunzo.

## 6. Hitimisho

Utafiti huu unawakilisha maendeleo makubwa katika uwanja wa usahihishaji tahajia otomatiki, hasa kwa lugha zinazozungumzwa zenye rasilimali chache na uwakilishi mdogo. Mfano wetu, unaotumia usanifu msingi wa transfoma umetoa matokeo ya kutia moyo katika vipimo kadhaa vya tathmini, vikiwemo BLEU, WER, CER na ChrF++. Matokeo haya yanaangazia uwezo wa mbinu za hali ya juu za Ujifunzajikina kushinda changamoto ya makosa ya tahajia, hata katika lugha zenye data ndogo inayopatikana.

Licha ya matokeo haya ya kuahidi, kazi yetu pia imeangazia maeneo fulani ya kuboresha ambayo yanaweza kuboresha zaidi utendaji wa mfumo uliopendekezwa. Mfano wetu, kwa kuwa ni wa kiwango cha herufi, unaonyesha vikwazo fulani kama vile uchangamano wa kikokotoo, ugumu wa kunasa tegemezi za masafa marefu, na uelekevu kwa kelele katika data ya pembejeo. Zaidi ya hayo, ukosefu wa uelewa wa kiwango cha neno unaweza kusababisha ugumu unaowezekana kwa lugha ambazo hutegemea sana mpangilio wa maneno au zinazokabiliwa na changamoto za utatuzi wa utata. Zaidi ya hayo, uchunguzi wa miundo mseto, unaochanganya manufaa ya uchakataji wa kiwango cha herufi na kiwango cha neno, unaweza kuwa mwelekeo wa kuahidi kwa kazi ya baadaye.

Tunatumaini kwamba matokeo yetu yatahimiza utafiti zaidi katika mwelekeo huu, hatimaye kuchangia lengo pana la kujenga zana jumuishi na zenye ufanisi za uchakataji wa lugha asilia kwa lugha zote.

## Maelezo

1 http://pagesperso.ls2n.fr/~enguehard-c/DiLAF/index.php

2 https://www.wolof-online.com

3 https://twitter.com/SaabalN

4 https://www.facebook.com/wolofakxamle

5 http://biblewolof.com

6 https://github.com/TiDev00/Wolof_SpellChecker

## 7. Marejeo

David Adelani, Jesujoba Alabi, Angela Fan, Julia Kreutzer, Xiaoyu Shen, Machel Reid, Dana Ruiter, Dietrich Klakow, Peter Nabende, Ernie Chang, Tajuddeen Gwadabe, Freshia Sackey, Bonaventure F. P. Dossou, Chris Emezue, Colin Leong, Michael Beukman, Shamsuddeen Muhammad, Guyo Jarso, Oreen Yousuf, Andre Niyongabo Rubungo, Gilles Hacheme, Eric Peter Wairagala, Muhammad Umair Nasir, Benjamin Ajibade, Tunde Ajayi, Yvonne Gitau, Jade Abbott, Mohamed Ahmed, Millicent Ochieng, Anuoluwapo Aremu, Perez Ogayo, Jonathan Mukiibi, Fatoumata Ouoba Kabore, Godson Kalipe, Derguene Mbaye, Allahsera Auguste Tapo, Victoire Memdjokam Koagne, Edwin MunkohBuabeng, Valencia Wagner, Idris Abdulmumin, Ayodele Awokoya, Happy Buzaaba, Blessing Sibanda, Andiswa Bukula, and Sam Manthalu. 2022. A few thousand translations go a long way! Leveraging pre-trained models for African news translation. In Proceedings of the 2022 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pages 3053-3070, Seattle, United States. Association for Computational Linguistics.

Sharefah Al-Ghamdi, Hend Al-Khalifa, and Abdulmalik Al-Salman. 2023. Fine-tuning BERT-Based pre-trained models for arabic dependency parsing. Applied Sciences, 13(7).

Susan Armstrong, Graham Russell, Dominique Petitpierre, and Gilbert Robert. 1995. An open architecture for multilingual text processing. In From Texts to Tags: Issues in Multilingual Language Analysis. Proceedings of the ACL Sigdat Workshop., pages 30-34, Dublin.

Dzmitry Bahdanau, Kyunghyun Cho, and Yoshua Bengio. 2015. Neural machine translation by jointly learning to align and translate. In 3rd International Conference on Learning Representations, ICLR 2015, San Diego, CA, USA, May 7-9, 2015, Conference Track Proceedings.

Elan Van Biljon, Arnu Pretorius, and Julia Kreutzer. 2020. On optimal transformer depth for low-resource language translation. CoRR, abs/2004.04418.

David Boilat. 1858. Grammaire de La Langue Woloffe. Imprimerie impériale, Paris.

Ondřej Bojar and Aleš Tamchyna. 2011. Improving translation model by monolingual data. In Proceedings of the Sixth Workshop on Statistical Machine Translation, pages 330-336, Edinburgh, Scotland. Association for Computational Linguistics.

Eric Church. 1981. Le Système Verbal du Wolof. Technical report, Université de Dakar, Dakar.

Mamadou Cissé. 2004. Dictionnaire FrancaisWolof, 2.éd. révisée et augmentée edition. Dictionnaires des Langues O. Langues et MOndes, L'Asiatheque, Paris.

Thierno Ibrahima Cissé and Fatiha Sadat. 2023. Automatic spell checker and correction for under-represented spoken languages: Case study on Wolof. In Proceedings of the Fourth Workshop on Resources for African Indigenous Languages (RAIL 2023), pages 1-10, Dubrovnik, Croatia. Association for Computational Linguistics.

Marta R. Costa-jussà, James Cross, OnurÇelebi, Maha Elbayad, Kenneth Heafield, Kevin Heffernan, Elahe Kalbassi, Janice Lam, Daniel Licht, Jean Maillard, Anna Sun, Skyler Wang, Guillaume Wenzek, Al Youngblood, Bapi Akula, Loic Barrault, Gabriel Mejia Gonzalez, Prangthip Hansanti, John Hoffman, Semarley Jarrett, Kaushik Ram Sadagopan, Dirk Rowe, Shannon Spruit, Chau Tran, Pierre Andrews, Necip Fazil Ayan, Shruti Bhosale, Sergey Edunov, Angela Fan, Cynthia Gao, Vedanuj Goswami, Francisco Guzmán, Philipp Koehn, Alexandre Mourachko, Christophe Ropers, Safiyyah Saleem, Holger Schwenk, and Jeff Wang. 2022. No Language Left Behind: Scaling Human-Centered Machine Translation.

Jacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. 2019. BERT: Pre-training of deep bidirectional transformers for language understanding. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers), pages 4171-4186, Minneapolis, Minnesota. Association for Computational Linguistics.

Pathé Diagne. 1971. Grammaire de Wolof Moderne. Presence Africaine, Paris.

Pathé Diagne. 1997. Al Xuraan ci Wolof. Harmattan; Sankoré, Paris : [Dakar].

Amadou Dialo. 1981. Structures Verbales Du Wolof Contemporain. Centre de Linguistique Appliquée de Dakar, Dakar.

Ibrahima Diouf, Cheikh Tidiane Ndiaye, and Ndèye Binta Dieme. 2017. Dynamique et transmission linguistique au Sénégal au cours des 25 dernières années. Cahiers québécois de démographie, 46(2):197-217.

Jean Léopold Diouf and Tōkyō Gaikokugo Daigaku. Ajia Afurika Gengo Bunka Kenkyūjo. 2001. Dictionnaire wolof : wolof-français, français-wolof. Institute for the Study of Languages and Cultures of Asia and Africa (ILCAA), Tokyo University of Foreign Studies, Tokyo.

Jean Léonce Doneux. 1978. Les liens historiques entre les langues du Sénégal. Réalités africaines et langues française: Bulletin du Centre de la Linguistique Appliquée de Dakar, 7:6-55.

Melynda B. Dunigan. 1994. On the Clausal Architecture of Wolof. Ph.D. thesis, University of North Carolina, Chapel Hill.

David Eberhard, Gary Simons, and Chuck Fennig. 2019. Ethnologue: Languages of the World, 22nd edition edition. SIL International, Dallas, Texas.

John Evershed and Kent Fitch. 2014. Correcting Noisy OCR: Context Beats Confusion. In Proceedings of the First International Conference on Digital Access to Textual Cultural Heritage, DATeCH '14, pages 45-51, New York, NY, USA. Association for Computing Machinery.

Yarin Gal and Zoubin Ghahramani. 2016. A theoretically grounded application of dropout in recurrent neural networks. In Proceedings of the 30th International Conference on Neural Information Processing Systems, NIPS'16, pages 1027-1035, Red Hook, NY, USA. Curran Associates Inc.

Sarthak Garg, Stephan Peitz, Udhyakumar Nallasamy, and Matthias Paulik. 2019. Jointly learning to align and translate with transformer models. In Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP), pages 4453-4462, Hong Kong, China. Association for Computational Linguistics.

Elodie Gauthier, Laurent Besacier, Sylvie Voisin, Michael Melese, and Uriel Pascal Elingui. 2016. Collecting Resources in Sub-Saharan African Languages for Automatic Speech Recognition: A Case Study of Wolof. International Conference on Language Resources and Evaluation, pages 3863-3867.

Stefan Gerdjikov, Petar Mitankin, and Vladislav Nenchev. 2013. Realization of common statistical methods in computational linguistics with functional automata. In Proceedings of the International Conference Recent Advances in Natural Language Processing RANLP 2013, pages 294-301, Hissar, Bulgaria. INCOMA Ltd. Shoumen, BULGARIA.

Xavier Glorot and Yoshua Bengio. 2010. Understanding the difficulty of training deep feed-forward neural networks. In AISTATS, volume 9 of JMLR Proceedings, pages 249-256. JMLR.org.

Naman Goyal, Cynthia Gao, Vishrav Chaudhary, Peng-Jen Chen, Guillaume Wenzek, Da Ju, Sanjana Krishnan, Marc'Aurelio Ranzato, Francisco Guzmán, and Angela Fan. 2022. The Flores-101 evaluation benchmark for low-resource and multilingual machine translation. Transactions of the Association for Computational Linguistics, 10:522-538.

Daniel Hládek, Matúš Pleva, Ján Staš, and YuanFu Liao. 2019. Sequence to sequence convolutional neural network for automatic spelling correction. In Proceedings of the 31st Conference on Computational Linguistics and Speech Processing (ROCLING 2019), pages 102-111, New Taipei City, Taiwan. The Association for Computational Linguistics and Chinese Language Processing (ACLCLP).

Omar Ka. 1981. La Derivation et La Composition En Wolof, volume 77 of Les Langues Nationales Au Senegal. Centre de Linguistique Appliquée de Dakar, Dakar.

Mark D. Kernighan, Kenneth W. Church, and William A. Gale. 1990. A spelling correction program based on a noisy channel model. In Proceedings of the 13th Conference on Computational Linguistics - Volume 2, COLING '90, pages 205-210, USA. Association for Computational Linguistics.

Diederik P. Kingma and Jimmy Ba. 2015. Adam: A method for stochastic optimization. In 3rd International Conference on Learning Representations (ICLR), San Diego, CA, USA.

Guillaume Lample, Ludovic Denoyer, and Marc'Aurelio Ranzato. 2017. Unsupervised machine translation using monolingual corpora only. CoRR, abs/1711.00043.

Jason Lee, Kyunghyun Cho, and Thomas Hofmann. 2017. Fully Character-Level Neural Machine Translation without Explicit Segmentation. Transactions of the Association for Computational Linguistics, 5:365-378.

Nitin Madnani, Michael Heilman, Joel Tetreault, and Martin Chodorow. 2012. Identifying high-level organizational elements in argumentative discourse. In Proceedings of the 2012 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pages 20-28, Montréal, Canada. Association for Computational Linguistics.

Max Mangold. 1977. Wolof Pronoun Verb Patterns and Paradigms. Number Bd. 3 in Forschungen Zur Anthropologie Und Religionsgeschichte. Homo et Religio, Saarbrücken.

Lidia Mangu, Eric Brill, and Andreas Stolcke. 2000. Finding consensus in speech recognition: Word error minimization and other applications of confusion networks. CoRR, cs.CL/0010012.

Petar Mitankin, Stefan Gerdjikov, and Stoyan Mihov. 2014. An Approach to Unsupervised Historical Text Normalisation. In Proceedings of the First International Conference on Digital Access to Textual Cultural Heritage, DATeCH '14, pages 29-34, New York, NY, USA. Association for Computing Machinery.

El Hadji Mamadou Nguer, Mouhamadou Khoule, Mouhamad Ndiankho Thiam, Mbaye Baba Thiam, Ousmane Thiare, Mame-Thierno Cissé, and Mathieu Mangeot. 2015. Dictionnaires wolof en ligne : état de l'art et perspectives. In Colloque National Sur La Recherche En Informatique et Ses Applications, Thiès, Senegal.

Codu Mbassy Njie. 1982. Description Syntaxique Du Wolof de Gambie. Les Nouvelles Editions Africaines, Dakar.

Myle Ott, Sergey Edunov, David Grangier, and Michael Auli. 2018. Scaling neural machine translation. In Proceedings of the Third Conference on Machine Translation: Research Papers, pages 1-9, Brussels, Belgium. Association for Computational Linguistics.

Kishore Papineni, Salim Roukos, Todd Ward, and Wei-Jing Zhu. 2002. Bleu: A method for automatic evaluation of machine translation. In Proceedings of the 40th Annual Meeting of the Association for Computational Linguistics, pages 311-318, Philadelphia, Pennsylvania, USA. Association for Computational Linguistics.

Maja Popović. 2015. chrF: Character n-gram F-score for automatic MT evaluation. In Proceedings of the Tenth Workshop on Statistical Machine Translation, pages 392-395, Lisbon, Portugal. Association for Computational Linguistics.

Maja Popović. 2017. chrF++: Words helping character n-grams. In Proceedings of the Second Conference on Machine Translation, pages 612-618, Copenhagen, Denmark. Association for Computational Linguistics.

Maja Popović and Hermann Ney. 2007. Word error rates: Decomposition over POS classes and applications for error analysis. In Proceedings of the Second Workshop on Statistical Machine Translation, pages 48-55, Prague, Czech Republic. Association for Computational Linguistics.

Ofir Press and Lior Wolf. 2017. Using the output embedding to improve language models. In Proceedings of the 15th Conference of the European Chapter of the Association for Computational Linguistics: Volume 2, Short Papers, pages 157-163, Valencia, Spain. Association for Computational Linguistics.

Alec Radford and Karthik Narasimhan. 2018. Improving language understanding by generative pre-training.

Stéphane Robert. 2011. Le wolof. Bulletin de la Société de Linguistique de Paris, 81.

J. David Sapir. 1971. West Atlantic: An inventory of the languages, their noun class systems and consonant alternation. In Thomas Albert Sebeok, editor, Current Trends in Linguistics, 7: Linguistics in Sub-Saharan Africa, number 7 in Current Trends in Linguistics 7 (Ed. by T. Sebeok), pages 45-112. Mouton & Co., The Hague & Paris.

Andrey Sariev, Vladislav Nenchev, Stefan Gerdjikov, Petar Mitankin, Hristo Ganchev, Stoyan Mihov, and Tinko Tinchev. 2014. Flexible Noisy Text Correction. In 2014 11th IAPR International Workshop on Document Analysis Systems, pages 31-35, Tours, France. IEEE.

Abigail See, Peter J. Liu, and Christopher D. Manning. 2017. Get to the point: Summarization with pointer-generator networks. CoRR, abs/1704.04368.

Rico Sennrich, Barry Haddow, and Alexandra Birch. 2016a. Improving Neural Machine Translation Models with Monolingual Data. In Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 86-96, Berlin, Germany. Association for Computational Linguistics.

Rico Sennrich, Barry Haddow, and Alexandra Birch. 2016b. Neural machine translation of rare words with subword units. In Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 1715-1725, Berlin, Germany. Association for Computational Linguistics.

Leslie N. Smith. 2017. Cyclical learning rates for training neural networks. In 2017 IEEE Winter Conference on Applications of Computer Vision, WACV 2017, Santa Rosa, CA, USA, March 24-31, 2017, pages 464-472. IEEE Computer Society.

Richard Socher, Alex Perelygin, Jean Wu, Jason Chuang, Christopher D. Manning, Andrew Ng, and Christopher Potts. 2013. Recursive deep models for semantic compositionality over a sentiment treebank. In Proceedings of the 2013 Conference on Empirical Methods in Natural Language Processing, pages 1631-1642, Seattle, Washington, USA. Association for Computational Linguistics.

Radu Soricut and Franz Och. 2015. Unsupervised morphology induction using word embeddings. In Proceedings of the 2015 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pages 1627-1637, Denver, Colorado. Association for Computational Linguistics.

Alexey Sorokin, A. Baytin, I. Galinskaya, E. Rykunova, and T. Shavrina. 2016. SpellRuEval: The first competition on automatic spelling correction for Russian. In Proceedings of the Annual International Conference "Dialogue", volume 15, Moscow, Russia.

Nitish Srivastava, Geoffrey Hinton, Alex Krizhevsky, Ilya Sutskever, and Ruslan Salakhutdinov. 2014. Dropout: A simple way to prevent neural networks from overfitting. Journal of Machine Learning Research, 15(1):1929-1958.

Marianne Starlander and Andrei Popescu-Belis. 2002. Corpus-based evaluation of a French spelling and grammar checker. In Proceedings of the Third International Conference on Language Resources and Evaluation (LREC'02), Las Palmas, Canary Islands - Spain. European Language Resources Association (ELRA).

Andreas Stolcke. 2000. Entropy-based pruning of backoff language models. CoRR, cs.CL/0006025.

Ilya Sutskever, Oriol Vinyals, and Quoc V. Le. 2014. Sequence to sequence learning with neural networks. In Proceedings of the 27th International Conference on Neural Information Processing Systems - Volume 2, NIPS'14, pages 3104-3112, Cambridge, MA, USA. MIT Press.

Christian Szegedy, Vincent Vanhoucke, Sergey Ioffe, Jon Shlens, and Zbigniew Wojna. 2016. Rethinking the Inception Architecture for Computer Vision. In 2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pages 2818-2826, Las Vegas, NV, USA. IEEE.

Oscar Täckström, Ryan McDonald, and Jakob Uszkoreit. 2012. Cross-lingual word clusters for direct transfer of linguistic structure. In Proceedings of the 2012 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pages 477-487, Montréal, Canada. Association for Computational Linguistics.

Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Lukasz Kaiser, and Illia Polosukhin. 2017. Attention is all you need. In Advances in Neural Information Processing Systems, volume 30. Curran Associates, Inc.

A. Viterbi. 1967. Error bounds for convolutional codes and an asymptotically optimum decoding algorithm. IEEE Transactions on Information Theory, 13(2):260-269.

Frank Wilcoxon. 1945. Individual Comparisons by Ranking Methods. Biometrics Bulletin, 1(6):80.

William André Auquier Wilson. 1989. Atlantic. In John Bendor-Samuel, editor, The Niger-Congo Languages: A Classification and Description of Africa's Largest Language Family, pages 81-104. University Press of America, Lanham, MD.

David Yarowsky, Grace Ngai, and Richard Wicentowski. 2001. Inducing multilingual text analysis tools via robust projection across aligned corpora. In Proceedings of the First International Conference on Human Language Technology Research, HLT '01, pages 1-8, USA. Association for Computational Linguistics.
