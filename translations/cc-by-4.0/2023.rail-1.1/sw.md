> Machine translation (sw) of "Automatic Spell Checker and Correction for Under-represented Spoken Languages: Case Study on Wolof" by Thierno Ibrahima Cissé, Fatiha Sadat, https://aclanthology.org/2023.rail-1.1/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kikagua na Kurekebisha Kosa la Uandishi kwa Lugha Zinazozungumzwa Zisizowakilishwa Vya Kutosha: Utafiti wa Kesi ya Wolof

Thierno Ibrahima Cissé, Fatiha Sadat

**Taasisi**  
Thierno Ibrahima Cissé  
Fatiha Sadat  
Université du Québec à Montréal  
Université du Québec à Montréal  
  


## Muhtasari

Makala hii inawasilisha kikagua tahajia na zana ya usahihishaji iliyoundwa mahsusi kwa Wolof, lugha inayozungumzwa isiyowakilishwa vya kutosha barani Afrika. Kikagua tahajia kinachopendekezwa kinatumia mchanganyiko wa muundo wa data wa trie, upangaji programu shirikishi, na umbali wa Levenshtein uliopimwa ili kutoa mapendekezo kwa maneno yaliyoandikwa vibaya. Tuliunda nyenzo mpya za kiisimu kwa Wolof, kama vile leksimu na korasi ya maneno yaliyoandikwa vibaya, kwa kutumia mbinu ya nusu-otomatiki inayochanganya mbinu za ufafanuzi wa kibinadamu na za kiotomatiki. Licha ya data chache inayopatikana kwa lugha ya Wolof, utendaji wa kikagua tahajia ulionyesha Usahihi wa utabiri wa 98.31% na Usahihi wa pendekezo wa 93.33%.

Lengo letu kuu linasalia kuwa ufufuaji na uhifadhi wa Wolof kama lugha ya Kiasili na inayozungumzwa barani Afrika, ikitoa juhudi zetu za kuunda nyenzo mpya za kiisimu. Kazi hii inawakilisha mchango muhimu kwa ukuaji wa zana na nyenzo za kikompyuta kwa lugha ya Wolof na inatoa msingi imara kwa tafiti za baadaye katika uwanja wa kikagua tahajia na usahihishaji kiotomatiki.

## 1 Utangulizi

Utofauti wa kiisimu katika Uchakataji wa Lugha Asilia (NLP) ni muhimu ili kuwezesha mawasiliano kati ya watumiaji tofauti na hivyo ukuzaji wa zana za kiisimu zitakazohudumia ujumuishaji wa jamii mbalimbali. Tafiti kadhaa za utafiti kwa lugha yenye rasilimali chache zimeibuka; hata hivyo lugha za Asili na Zinazotishiwa Kutoweka barani Afrika zimepuuzwa, ingawa utajiri wa kitamaduni na kilugha unaozihifadhi hauna kifani.

Lugha ya Wolof, lugha maarufu katika Afrika Magharibi inayozungumzwa na karibu watu milioni 10 duniani kote, ni lingua franca maarufu sana katika nchi za bara la Afrika, kama vile Senegal, Gambia na Mauritania. Inatumika kama lahaja kuu ya Senegal (Diouf et al., 2017), ikitokea katika tawi la Senegambia la familia ya lugha pana ya Lugha za Kiniger-Kongo. Zaidi ya hayo, lugha hiyo imetambuliwa rasmi katika Afrika Magharibi (Eberhard et al., 2019). Kwa hiyo haishangazi kwamba matumizi makubwa ya Wolof ndani ya eneo hilo yameifanya itambuliwe kuwa ya umuhimu mkubwa.

Kama lugha kadhaa za Asili na zinazozungumzwa za Afrika, Wolof inatoa changamoto na masuala mengi, miongoni mwake ni ukosefu wa rasilimali na zana za kilugha. Aidha, inatofautishwa na mfumo wake tofauti wa toni unaotumia vokali za puani. Mwandiko wa Wolof unajumuisha jumla ya fonimu konsonanti 45, ambazo zimegawanywa zaidi katika kategoria (Cissé, 2004). Jedwali la 1 linaonyesha konsonanti mbalimbali za Kiwolofu na uainishaji wake husika.

p01-01.png

Jedwali la 1: Konsonanti za Kiwolofu na Uainishaji

Zaidi ya hayo, mfumo wa uandishi wa Kiwolofu unajumuisha seti ya fonimu 17 za irabu (Cissé, 2004) zinazokamilisha fonimu 45 za konsonanti zilizopo tayari. Jedwali 2 hutoa muhtasari wa vokali za Kiwolofu na uainishaji wao.

Kadiri uandishi unavyozidi kuwa muhimu kutokana na enzi yetu ya kidijitali, kikagua tahajia kiotomatiki kina jukumu muhimu katika kuhakikisha mawasiliano ya maandishi ni bora na sahihi. Licha ya ukosefu wa usanifishaji katika tahajia yao, kumekuwa na ongezeko kubwa la hamu ya kutengeneza vikagua tahajia kwa lugha za Kiafrika za Asili kutokana na umuhimu wake unaokua katika elimu, biashara, na diplomasia. Kwa hiyo, maendeleo ya vichunguzi vya herufi kwa lugha hizi yanaongezeka polepole.

p02-01.png

Jedwali la 2: Irabu za Kiwolofu na Uainishaji

Mchango wetu mkuu katika makala haya, ni uundaji wa nyenzo mpya kwa ajili ya lugha ya Wolof. Hasa, tumeunda kikagua tahajia kwa ajili ya usahihishaji otomatiki wa maandishi ya Wolof, pamoja na mkusanyiko wa maneno yaliyoandikwa vibaya ambao utawawezesha watafiti kutathmini utendaji wa mifumo ya usahihishaji otomatiki ya baadaye. Zaidi ya hayo, tumeunda leksimu ya Wolof ambayo inaweza kutumika kwa aina mbalimbali za kazi zaidi ya usahihishaji otomatiki, kama vile tafsiri ya mashine ya neva, utambuzi wa usemi otomatiki, n.k.

Nyenzo ambazo zimeundwa katika kipindi chote cha utafiti huu zinafanywa kupatikana kwa umma kwenye GitHub, hivyo kuwezesha usambazaji mpana na kuwezesha uzalishwaji tena wa matokeo ya utafiti.

Sehemu iliyobaki ya makala yetu imeundwa kama ifuatavyo: katika Sehemu ya 2, tunafanya mapitio mafupi ya fasihi na kujadili baadhi ya tafiti zilizochapishwa. Katika Sehemu 3, tunaelezea mbinu tuliyopendekeza na rasilimali za lugha mpya tulizobuni. Katika Sehemu ya 4, tunawasilisha matokeo na tathmini za utafiti wetu. Katika Sehemu ya 5, tunaonyesha vikwazo vya mfumo wetu kupitia uchambuzi wa makosa. Hatimaye, sehemu ya 6 inahitimisha makala na kuonyesha mitazamo yenye matumaini kwa siku zijazo.

## 2 Usuli

Usahihishaji wa tahajia unahusisha kupendekeza maneno sahihi yaliyo karibu na neno lisilo sahihi. Ili kuunda mfumo wa kusahihisha tahajia kiotomatiki, ni muhimu kuelewa sababu za msingi za makosa ya tahajia (Baba and Suzuki, 2012).

Tafiti kadhaa kuhusu makosa ya tahajia zimefanywa, kukiwa na mchango mashuhuri kutoka kwa (Mitton, 1996) ambaye alichambua kwa kina aina tofauti za makosa ya tahajia kwa Kiingereza na kuelezea mbinu za kuunda mfumo wa kusahihisha tahajia kiotomatiki. (Kukich, 1992), kwa upande mwingine, aliwasilisha uchunguzi juu ya matokeo yaliyothibitishwa kuhusu mifumo ya makosa ya tahajia na kuainisha makosa ya tahajia katika vikundi viwili:

Makosa ya kileksika: Matokeo ya makosa yanayotumika kwa maneno binafsi, bila kujali muktadha wake ndani ya sentensi (Ten Hacken and Tschichold, 2001).

Makosa ya kisarufi: Yanajumuisha makosa ya kimofolojia na kisintaksia. Makosa ya kimofolojia yanahusisha upungufu katika vipengele vya kiisimu kama vile unyambulishaji, uambishaji, vihusishi, vibainishi, viwakilishi vya nafsi, vitenzi visaidizi, na vibainishi. Makosa ya kisintaksia hutokana na matatizo katika vipengele vya kiisimu, vikiwemo sauti tendwa, wakati, vishazi nomino, vitenzi visaidizi, upatanisho wa kiima na kitenzi, na vibainishi (Gayo na Widodo, 2018).

Visababishi vya makosa ya tahajia ni vingi na vinaweza kutokana na vyanzo vya kiakili na vya uchapaji (Peterson, 1980). Makosa ya kiakili hutokea wakati mtu anapokosa uelewa sahihi wa tahajia sahihi ya neno huku makosa ya uchapaji yakitokea wakati vibonyezo visivyo sahihi vinapobonyezwa wakati wa kuandika. Fasihi katika uwanja wa usahihishaji wa tahajia kwa kawaida imeshughulikia aina hizi za makosa kivyake, huku mbinu mbalimbali zikitengenezwa mahususi kushughulikia kila aina (Kukich, 1992). Licha ya umuhimu wa uchakataji wa lugha, kumekuwa na upungufu wa mkazo katika uundaji wa zana za kusahihisha tahajia kiotomatiki kwa lugha zenye rasilimali chache hasa. Ingawa baadhi ya majaribio yamefanywa kutumia mbinu za kawaida za usahihishaji wa tahajia kiotomatiki kwa lugha chache za asili za Kiafrika (Boago Okgetheng et al., 2022; M'eric, 2014; Salifou na Naroua, 2014), hakuna juhudi kama hizo zilizofanywa kwa lugha ya Wolof. Kadiri tujuavyo, utafiti pekee uliojitolea kikamilifu kwa usahihishaji wa Wolof ni (Lo et al., 2016), ambao unatoa muhtasari wa hali ya kisasa na kuelezea suluhu zinazowezekana za kuunda kirekebishaji cha tahajia kilicholengwa mahususi kwa Wolof. Utafiti huu unachukua mbinu zinazotumiwa sana katika uwanja huu na kutathmini utendakazi wa mfumo wetu kwa kutumia vipimo mbalimbali vya tathmini vinavyojulikana.

## 3 Mbinu

Mfumo ulioelezwa katika utafiti huu unalenga kutambua na kurekebisha makosa yasiyo ya neno katika lugha ya Wolof.

Ili kufikia lengo hili, tulibuni na kutekeleza mchoro wa mtiririko katika Kielelezo 1.

p03-01.png

Kielelezo 1: Mchoro wa mtiririko wa kikagua tahajia

Mchoro wa mtiririko katika Kielelezo 1 unatoa uwakilishi wa kuona wa vipengele na michakato mbalimbali inayohusika katika mfumo wa kikagua tahajia unaopendekezwa. Mfumo huo unajumuisha mbinu za kuingiza na kutoa data, algoriti za kugundua na kusahihisha makosa, pamoja na miundo ya data na mifano inayosaidia utendakazi wake. Lengo la mfumo huu ni kutambua kwa usahihi na kurekebisha makosa yasiyo ya maneno katika lugha ya Wolof. Kupitia uwasilishaji wa usanifu wa jumla wa mfumo, msomaji ataweza kuelewa jinsi mfumo unavyofanya kazi na kanuni zake za kubuni zinazolenga kugundua na kusahihisha maneno batili katika lugha ya Wolof.

## 3.1 Uzalishaji wa Leksimu ya Wolof

Njia yetu ya kutengeneza leksimu ya Wolof yenye uaminifu inahusisha mchanganyiko wa mbinu za ufafanuzi wa mkono na utoleaji wa kiotomatiki.

Kwanza, ufafanuzi kwa mkono ulifanywa kwenye korasi ya maandishi ya Kiwolofu (James Cross et al., 2022) ili kutambua maneno ya kipekee na kuyachimbua katika orodha. Mbinu hii inatoa uchunguzi wa kina wa lugha ya Kiwolofu na inahakikisha ushabaha wa leksimu kwa kuwezesha udhibiti wa mkono juu ya ujumuishaji wa maneno.

Pili, uchimbaji wa kiotomatiki ulifanywa kwa kutumia mbinu za Kutambua Herufi za Optiki (OCR) na zilizotekelezwa katika umbo la hati za Python, zikiwa zimetumika kwa kamusi kadhaa za Wolof-Kifaransa (Fal et al., 1990 na Diouf na Kenkyūjo, 2001). Mbinu hii inarahisisha upanuzi wa wigo wa kamusi na kuwezesha utambuzi wa maneno ya ziada ambayo huenda hayakupatikana kupitia ufafanuzi wa mkono pekee.

Hatimaye, ili kuhakikisha usahihi wa leksimu, data yote iliyotokana ilipitiwa upya. Hatua hii ilithibitisha usahihi wa maneno na tahajia zao na kuruhusu marekebisho yoyote muhimu kabla ya leksimu ya mwisho kuzalishwa.

Ni muhimu kutambua kwamba kutokana na upatikanaji mdogo wa rasilimali za Kiwolofu, leksimu iliyotokana ina maneno 1410 tu tofauti. Licha ya kizuizi hiki, mchanganyiko wa mbinu za ufafanuzi wa mikono na uchimbaji wa kiotomatiki uliruhusu uzalishaji wa leksimu ya kuaminika ya Kiwolofu.

## 3.2 Usindikaji wa Awali

Mfumo wetu wa kikagua tahajia unatekeleza hatua ya awali, ambayo inahusisha uondoaji wa pembejeo zenye herufi za nambari, alama za uakifishaji, au maneno yaliyokopwa kutoka lugha za kigeni. Matokeo ya hatua hii hutumika kuwa msingi wa kugundua makosa yasiyo ya maneno katika maandishi.

Awamu ya uchakataji wa awali inajumuisha shughuli tatu za msingi: uondoaji wa alama za uakifishaji, usawazishaji wa pembejeo, na ugawaji wa maandishi katika maneno ya kibinafsi.

## 3.2.1 Uondoaji wa Alama za Uakifishaji

Lengo la uondoaji wa alama za uakifishaji katika hatua yetu ya uchakataji wa awali ni kuondoa alama zozote za uakifishaji zisizo za lazima zilizopo katika maandishi ya pembejeo. Alama hizi zinaweza kuzuia ufanisi wa mchakato wa kikagua tahajia na zinaweza kusababisha mkanganyiko wakati wa uchambuzi wa maandishi (Rahimi na Homayounpour, 2022). Kwa kuondoa alama hizi, tunahakikisha kwamba hatua zinazofuata za mfumo wa kikagua tahajia zinaweza kuchakata maandishi kwa ufanisi zaidi na kwa haraka zaidi. Algoriti inayotumika katika hatua hii huchunguza maandishi ya pembejeo na kuondoa matukio yote ya alama ya uakifishaji, ikiwa ni pamoja na koma, nukta, alama za mshangao, na alama za swali. Matokeo ya hatua hii ni maandishi yaliyosafishwa ambayo hayana vipengele vya nje na yako tayari kwa uchambuzi makini katika hatua zinazofuata za mfumo.

## 3.2.2 Usawazishaji

Awamu ya usawazishaji katika hatua yetu ya uchakataji wa awali hubadilisha maandishi ya pembejeo kuwa umbo sanifu kwa kubadilisha herufi zote za kialfabeti kuwa herufi ndogo na kuondoa maneno yoyote nje ya lugha ya Kiwolofu.

Ubadilishaji wa herufi kubwa kuwa ndogo ni muhimu kwa sababu mbinu nyingi za NLP huchukulia maneno yaliyoandikwa kwa herufi tofauti kama vitu tofauti, na kubadilisha maandishi kuwa na herufi ndogo hufuta athari ya utofauti wa herufi kwenye uchambuzi (HaCohen-Kerner et al., 2020).

Kwa kuondoa maneno kutoka lugha za kigeni, tunalenga kuhakikisha kwamba maandishi yanayochambuliwa yako katika lugha lengwa pekee na kupunguza athari za maneno ambayo huenda yasiwe na umuhimu wa semantiki katika muktadha wa lugha ya Kiwolofu. Hii huongeza Usahihi wa uchambuzi na kupunguza uwezekano wa kuingiza makosa katika matokeo.

## 3.2.3 Ugawaji wa Maneno

Ugawaji wa tokeni ni hatua muhimu katika mchakato wa kikagua tahajia kiotomatiki, kwani hugawanya maandishi ya pembejeo kuwa vipande vidogo vinavyojulikana kama tokeni.

Kuna mbinu mbalimbali zinazotumika kwa ugawaji wa tokeni ambazo hutofautiana kulingana na lugha na kazi husika. Hizi zinaweza kujumuisha kugawanya kwenye nafasi nyeupe na alama ya uakifishaji, kutumia semi za kawaida, au kutumia kamusi na kanuni za kimofolojia (Dalrymple et al., 2006).

Mchakato wa ugawaji wa tokeni husababisha vipashio vinavyoweza kuanzia herufi binafsi au maneno hadi vishazi au hata sentensi kamili. Hata hivyo, ugawaji wa maneno ndio aina inayotumika zaidi ya ugawaji katika mifumo ya kikagua tahajia, kwani hutenganisha maandishi kuwa maneno binafsi na hutoa msingi imara wa utambuzi wa makosa ya tahajia (Mosavi Miangah, 2013; Rahman et al., 2021; Abdulrahman and Hassani, 2022).

Ugawaji wa maneno sio tu unaboresha Usahihi na ufanisi wa mchakato wa kikagua tahajia bali pia unaruhusu uchambuzi wa muktadha ambamo kila neno linatokea. Hii inawezesha mfumo wa kikagua tahajia kutoa mapendekezo yenye taarifa zaidi kwa masahihisho sahihi ya tahajia, hatimaye kuboresha Usahihi wa matokeo.

Katika uchunguzi wa sasa, tunatekeleza mchakato wa ugawaji wa tokeni kwa kuzingatia ugawaji katika kiwango cha neno.

## 3.3 Kugundua makosa

Hatua ya utambuzi wa makosa katika mfumo wetu wa kikagua tahajia imeundwa kutambua makosa ya maneno yasiyo sahihi katika maandishi. Hili linafikiwa kupitia mchakato wa hatua mbili, unaojumuisha uthibitishaji dhidi ya kanuni za uandishi za Wolof na ulinganisho na leksimu iliyoundwa.

## 3.3.1 Kithibitishaji cha Kanuni

Tahajia ya maneno katika lugha ya Wolof hufuata kanuni fulani, kama inavyoelezwa na maumbo ya CVC na CVCV(C) kwa maneno ya silabi moja na mawili, mtawalia (Merrill, 2021). Kanuni hizi zinabainisha kwamba konsonanti ya mwisho na irabu ya silabi haziwezi zote kuwa ndefu, na konsonanti kali haziwezi kutokea baada ya irabu ndefu au mwanzoni mwa neno, isipokuwa kwa konsonanti zilizotangulizwa nazali.

Hatua yetu ya utambuzi wa makosa inajumuisha hatua ya uthibitishaji inayokagua kwa ukali kila neno katika maandishi ya pembejeo dhidi ya kanuni hizi za uandishi. Iwapo neno litapatikana kuwa linafuata kanuni hizi, litaendelea hadi hatua inayofuata ya uthibitishaji. Kinyume chake, iwapo neno litabainika kuwa halifuati, litawekewa alama kama batili na kuhitaji marekebisho.

## 3.3.2 Ukaguzi wa Leksikoni

Katika awamu ya uthibitishaji wa leksikoni, mfumo wa kikagua tahajia hutathmini kila neno katika maandishi ya pembejeo dhidi ya leksikoni ya Wolof ili kubaini uhalali wake. Leksikoni, ikiwa ni hifadhi kubwa ya maneno, inaweza kuleta changamoto kwa utafutaji wa haraka na wenye ufanisi. Ili kukabiliana na hili, mbinu mbalimbali kama vile majedwali ya heshi (Kukich, 1992), utafutaji wa mfuatano wa jozi (Knuth, 1998), muundo wa data wa tries (Bentley and Sedgewick, 1997), na kichujio cha bloom (Bloom, 1970) zimetengenezwa ili kuwezesha upekuzi wa haraka wa kamusi.

Katika kikagua tahajia cha sasa, mfumo hutumia muundo wa data wa trie, ambao hupanga leksikoni katika nodi zinazowakilisha herufi binafsi na nodi ya mzizi inayowakilisha tungo tupu. Katika muundo huu, kutafuta neno katika leksikoni kunahusisha kufuata njia kupitia trie inayolingana na herufi za neno lengwa (Feng et al., 2012). Ikiwa mwisho wa njia ni nodi ya mwisho, neno linachukuliwa kuwa katika leksikoni na kuhesabiwa kuwa halali. Kinyume chake, ikiwa njia inaisha kabla ya kufikia nodi ya mwisho, neno linachukuliwa kuwa si sahihi na masahihisho huanzishwa.

## 3.4 Usahihishaji wa Makosa

Hatua ya mwisho ya utaratibu wa usahihishaji wa tahajia ni kutoa vibadala vinavyowezekana kwa neno lililoandikwa kimakosa. Mbinu zetu za usahihishaji, zilizoelezwa hapa chini, hulenga neno pekee na hazizingatii muktadha ambamo linatumika. Mchakato wa usahihishaji unajumuisha awamu tatu tofauti: Tafsiri ya Sauti Mchanganyiko za Kifaransa, Uzalishaji wa Mapendekezo ya Wagombea, na Upangaji wa Mapendekezo hayo.

## 3.4.1 Tafsiri ya sauti mchanganyiko za Kifaransa

Kabla ya kutekeleza moduli inayohusika na kutafsiri sauti mchanganyiko za Kifaransa katika Kiwolofu, tulikusanya kiasi kidogo cha data ya Kiwolofu kutoka vyanzo mbalimbali. Data hii ilitolewa kutoka tovuti za habari, mitandao ya kijamii na tovuti za kidini. Uchambuzi wa kina wa data hii ulifanywa ili kubaini makosa ya kawaida ya tahajia yanayofanywa na wazungumzaji wa Kiwolofu wanapoandika katika lugha hiyo. Matokeo yetu yalionyesha kuwa idadi kubwa ya makosa haya yalitokana na matumizi ya alfabeti ya Kifaransa badala ya alfabeti ya Kiwolof. Hii mara nyingi ilisababisha uwepo wa sauti ambatani au herufi za Kifaransa ambazo si asili ya lugha ya Kiwolof. Aidha, ilibainika kwamba lafudhi, ambayo ina jukumu muhimu katika kuhakikisha matamshi sahihi na maana ya maneno, mara nyingi hupuuzwa. Ili kuonyesha matokeo haya, Jedwali la 3 linawasilisha baadhi ya makosa ya tahajia yaliyobainika na visawe vyake sahihi vya Kiwolof.

p05-01.png

Jedwali la 3: Makosa ya tahajia na maneno sahihi ya Kiwolof

Kwa kuzingatia makosa ya kawaida yaliyobainika katika uchanganuzi wa data ya lugha ya Kiwolof, mfumo wetu umeundwa kutathmini kila neno kwa uwepo wa sauti ambatani au herufi za Kifaransa ambazo ni za nje ya alfabeti ya Kiwolof. Iwapo sauti hizo zitagunduliwa, moduli itazitafsiri kuwa visawe vyake vya Kiwolof. Herufi zisizo za alfabeti ya Kiwolof zitaondolewa kwa utaratibu. Baada ya kukamilisha mabadiliko haya, matokeo yataelekezwa kwenye awamu inayofuata ya mchakato wa kusahihisha na moduli ya mapendekezo ya wagombea.

## 3.4.2 Uzalishaji wa Mapendekezo ya Wagombea

Katika mfumo wa sasa, ili kuzalisha mbadala zinazowezekana kwa maneno yaliyoandikwa vibaya, tumetekeleza mbinu ya kulinganisha umbali wa kileksikografia. Mchakato huu unahusisha kubainisha idadi ya chini zaidi ya operesheni za kuhariri, kama vile kuingiza, kufuta, kupindua, na kubadilisha, zinazohitajika kubadilisha neno moja kuwa jingine (Vienney, 2004). Kadiri tofauti kati ya maneno mawili zinavyokuwa kubwa zaidi, ndivyo umbali wa kileksikografia kati yao unavyokuwa mkubwa zaidi. Kati ya vipimo mbalimbali vya umbali wa kileksikografia, Umbali wa Levenshtein (Levenshtein, 1965) ndio unaotumiwa sana. Unapima tofauti kati ya mifuatano miwili kwa kuzingatia operesheni tatu za msingi za mfuatano: kubadilisha, kuingiza, na kufuta.

Acha Levα,β iwe umbali wa Levenshtein kati ya mfuatano mdogo unaoundwa na herufi α za kwanza za neno W<sub>1</sub> na mfuatano mdogo unaoundwa na herufi β za kwanza za neno W. Umbali wa Levenshtein kati ya mifuatano midogo miwili W<sub>1</sub> na W<sub>2</sub> (yenye urefu |W<sub>1</sub>| na |W<sub>2</sub>| mtawalia) unaweza kuhesabiwa kwa kujirudia kwa kutumia Fomula 1 (Levenshtein, 1965).

p05-02.png

Umbali wa Levenshtein, unapokokotolewa kwa kutumia mlingano wake wa kurudia, unaweza kuwa ghali kwa hesabu (Gusfield, 1997), hasa kwa umbali mkubwa kwani una utata wa muda wa eksponensiali wa O(3min(|W1|,|W2|) ). Ili kushughulikia suala hili, mbinu yetu inachanganya mbinu mbili: upangaji programu badilifu na muundo wa data wa trie.

Upangaji programu badilifu (Almudevar, 2001), kama mbinu ya kutatua matatizo kwa kuyagawanya katika matatizo madogo yanayoweza kudhibitiwa na kuhifadhi masuluhisho, husaidia kupunguza idadi ya hesabu zisizo za lazima kwa kutoa uhifadhi bora zaidi wa matokeo ya kati. Inapotumika kwa umbali wa Levenshtein, inaruhusu matokeo ya kati ya hesabu za sehemu kuhifadhiwa katika matriki, na hivyo kusababisha ukokotoaji bora zaidi wa matokeo ya mwisho.

Kwa kuchanganya upangaji programu badilifu na muundo wa data wa trie, mbinu yetu inapunguza kwa ufanisi nafasi ya utafutaji na kuepuka hesabu zisizo za lazima. Hii inatoa mchanganyiko wenye nguvu wa kuhesabu umbali wa Levenshtein kwa njia ya haraka na yenye ufanisi, hata kwa ingizo kubwa.

Katika umbali wa kawaida wa Levenshtein, operesheni zote za kuhariri hupewa gharama sawa ya 1. Hata hivyo, kwa kuzingatia matokeo yaliyojadiliwa awali, matriki ya gharama ilianzishwa ili kuruhusu ugawaji wa gharama tofauti kwa operesheni tofauti za kuhariri. Hii inaruhusu uwakilishi wenye utambuzi zaidi wa umuhimu wa kila operesheni. Gharama ya uingizaji na ufutaji inabaki kuwa 1 kwa herufi zote. Operesheni za ubadilishaji kati ya herufi za chanzo na lengwa hupewa gharama ya 1 ikiwa jozi ya herufi imeorodheshwa katika Jedwali 4, vinginevyo, gharama ya 2 hupewa.

p06-01.png

Jedwali 4: Gharama ya ubadilishaji wa jozi mahususi

Moduli yetu ya pendekezo huzalisha maneno yanayowezekana kuwa sahihi kwa neno lililoandikwa vibaya kupitia ukokotoaji wa umbali wa hariri kati ya neno lililoandikwa vibaya na kila neno halali katika leksimu ya Kiwolof. Kwa kila neno linalowezekana kuwa sahihi, gharama ya kubadilisha neno lililoandikwa vibaya kuwa neno linalowezekana kuwa sahihi hutolewa.

## 3.4.3 Upangaji wa mapendekezo yanayowezekana kuwa sahihi

Katika awamu ifuatayo ya mbinu yetu, maneno yanayowezekana kuwa sahihi yaliyozalishwa kutoka hatua ya awali yanafanyiwa tathmini. Upangaji unafanywa kwa kuzingatia ukaribu wa maneno yaliyopendekezwa na neno lililoandikwa vibaya, ambapo neno linalopendekezwa lenye gharama ndogo zaidi ya uhariri linapewa cheo cha juu zaidi. Neno linalopendekezwa lenye gharama ndogo zaidi ya uhariri linabainishwa kuwa linalolingana kwa karibu zaidi na kwa hiyo linachaguliwa kama badala inayowezekana zaidi kwa neno lisilo sahihi.

## 4 Tathmini

Ili kutathmini utendaji wa mfumo wetu wa kikagua tahajia, kwanza tuliunda mkusanyiko wa maneno yaliyoandikwa vibaya, kisha tukachagua vipimo vya tathmini vinavyofaa, na hatimaye, tukatekeleza vipimo vilivyochaguliwa ili kutathmini utendaji wa mfumo.

## 4.1 Uundaji wa Mkusanyiko wa Maneno Yaliyoandikwa Vibaya

Uundaji wa Mkusanyiko wa Maneno Yaliyoandikwa Vibaya ulifuata mbinu sawa na uundaji wa leksimu ya Kiwolofu. Tulitumia mbinu mseto ya ufafanuzi kwa mkono na wa kiotomatiki, ikifuatiwa na usahihishaji. Mbinu hiyo ilihusisha uteuzi wa maneno ya Kiwolofu yanayoandikwa vibaya kwa kawaida yaliyogunduliwa kupitia mitandao ya kijamii, tovuti za kidini, na tovuti za habari. Kwa kila makosa ya kuandika, tuliongeza marekebisho yake kwa mkono. Mchakato huu ulisababisha kuundwa kwa korasi inayojumuisha maneno 3070, ikiwa na maneno sahihi 1075 na maneno batili 1995. Umbali wa uhariri kati ya maneno yaliyoandikwa vibaya na maumbo yake yaliyosahihishwa umewasilishwa katika Jedwali la 5.

p06-02.png

Jedwali la 5: Umbali wa uhariri wa makosa ya tahajia dhidi ya masahihisho yake

## 4.2 Uchaguzi wa Vipimo vya Tathmini

Kuna vigezo mbalimbali vinavyohitaji kuzingatiwa wakati wa kutathmini vyombo vya kusahihisha herufi. Vipimo vya kawaida, vikijumuisha Kumbuko tambuzi na Ushabaha, vimetumika sana kwa muda mrefu kupima ustadi wa kiisimu wa zana hizo. hata hivyo, kwa mtazamo unaozingatia matumizi, vigezo hivi vya tathmini vina mapungufu kutokana na kukosekana kwa vigeu fulani vya kimsingi katika tathmini ya vikagua tahajia ndani ya vipimo hivi.

Ili kubaini uaminifu wa kikagua tahajia chetu, tulitumia vipimo vilivyopendekezwa katika (Starlander and Popescu-Belis, 2002), (Voorhees and Garofolo, 2000), (Paggio and Music, 1998), (Paggio and Underwood, 1998), (King, 1999) pamoja na hatua zifuatazo:

Chanya halisi (TP): neno sahihi ambalo linatambuliwa kama sahihi na kifaa cha kusahihisha herufi.

Chanya uongo (FP): neno lisilo sahihi ambalo linatambuliwa kama sahihi na kifaa cha kusahihisha herufi.

Hasi uwongo (FN): neno sahihi ambalo linatambuliwa kuwa si sahihi na kikagua tahajia.

Hasi halisi (TN): neno lisilo sahihi ambalo linatambuliwa kuwa si sahihi na kikagua tahajia.

Licha ya umri wake, vipimo hivi vinaendelea kutumika sana katika teknolojia ya kisasa kwa ajili ya kutathmini vikagua tahajia, hasa vile vilivyoundwa kwa ajili ya lugha zenye rasilimali chache kama vile (Abdulrahman and Hassani, 2022) na (Boago Okgetheng et al., 2022).

Vipimo vingine vilivyotumika katika tathmini hizi, vinaelezewa kama ifuatavyo:

## 4.2.1 Kumbuko tambuzi la Kileksika au R<sub>c</sub>

Inabainishwa kwa kukokotoa uwiano wa maneno halali yaliyotambuliwa kwa usahihi katika maandishi na kikagua tahajia, kwa jumla ya idadi ya maneno sahihi katika maandishi yale yale, kama inavyoonyeshwa katika Fomula 2 (Starlander and Popescu-Belis, 2002).

p07-01.png

## 4.2.2 Kumbuko la Makosa au R<sub>i</sub>

Inaonyeshwa kama sehemu ya maneno yasiyo sahihi katika maandishi yaliyotambuliwa na kikagua tahajia, ikilinganishwa na jumla ya idadi ya maneno yasiyo sahihi katika maandishi, kama inavyoonyeshwa katika Fomula 3 (Starlander na Popescu-Belis, 2002).

p07-02.png

## 4.2.3 Ushabaha wa Kileksika au P<sub>c</sub>

Inakokotolewa kwa kugawanya jumla ya idadi ya maneno sahihi yaliyotambuliwa kwa usahihi na kikagua tahajia kwa jumla ya maneno sahihi yaliyotambuliwa na kikagua tahajia na idadi ya maneno batili ambayo hayakutambuliwa na kikagua tahajia kuwa si sahihi, kama inavyoonyeshwa katika Fomula 4 (Starlander na Popescu-Belis, 2002).

p07-03.png

## 4.2.4 Ushabaha wa Makosa au P<sub>i</sub>

Inaamuliwa kwa kugawanya idadi ya alama sahihi zilizowekwa na kikagua tahajia kwa jumla ya idadi ya alama zilizotolewa na mfumo, kama inavyoonyeshwa katika Fomula 5 (Starlander na Popescu-Belis, 2002).

p07-04.png

## 4.2.5 Kipimo cha F cha Kileksika au F m<sub>c</sub>

Inawezesha hesabu ya wastani wa harmoniki kati ya kumbuko tambuzi ya kileksika na ushabaha wa kileksika, kama ilivyoonyeshwa katika Fomula 6 (Starlander na Popescu-Belis, 2002).

p07-05.png

## 4.2.6 Kipimo cha F cha Makosa au F m<sub>i</sub>

Kipimo cha F cha makosa huhesabiwa kwa kukokotoa wastani wa harmoniki wa kumbuko tambuzi ya kileksika na ushabaha wa kileksika, kama inavyoonyeshwa katika Fomula 7 (Starlander na Popescu-Belis, 2002).

p07-06.png

## 4.2.7 Usahihi wa Kutabiri au P A

Inakadiria uwezekano wa neno lolote, liwe sahihi au si sahihi, kuchakatwa kwa usahihi na kikagua tahajia. Inahesabiwa kwa kutumia Fomula 8 (Starlander na Popescu-Belis, 2002).

p07-07.png

## 4.2.8 Utoshelevu wa Pendekezo au SA

Inapima uwezo wa kikagua tahajia chetu kupendekeza vibadala sahihi vya tahajia kwa neno lililoandikwa vibaya. Acha S iashirie pendekezo sahihi kwa neno lisilo sahihi na N iwakilishe jumla ya idadi ya maneno yaliyoandikwa vibaya. Utoshelevu wa Pendekezo wa mfumo wetu unakokotolewa kwa kutumia Fomula 9 (Starlander na Popescu-Belis, 2002).

p07-08.png

## 4.2.9 Kiwango cha Wastani cha Uwiano au MRR

Kama ilivyoelezwa hapo awali, kikagua tahajia chetu huchagua kwa utaratibu neno la kwanza katika orodha ya mapendekezo kama kibadala kinachowezekana zaidi kwa neno lililoandikwa vibaya. Hata hivyo, kwa kuwa kuchagua chaguo la awali katika orodha iliyopendekezwa huenda kusiwe chaguo sahihi kila wakati, tutatumia kipimo cha MRR kutathmini mbinu ya upangaji. Acha N iwe jumla ya idadi ya maneno yasiyo sahihi na Rank<sub>i,c</sub> iwe nafasi ya pendekezo sahihi katika orodha ya mapendekezo kwa neno lisiloandikwa kwa usahihi la i katika N. MRR inakokotolewa kwa kutumia Fomula 10 (Voorhees na Garofolo, 2000).

p08-01.png

## 4.3 Majaribio

## 4.3.1 Matokeo

Matokeo ya kikagua tahajia chetu, kama yanavyoonyeshwa katika Jedwali la 6, yanaonyesha kiwango cha ajabu cha ustadi katika vipengele mbalimbali vya usahihishaji wa tahajia.

p08-02.png

Jedwali 6: Vipimo vya utendaji wa kifaa cha kusahihisha herufi

Alama ya kumbuko tambuzi ya 95.16% (R<sub>c</sub>) na 100% (R<sub>i</sub>) inaonyesha asili kamili ya leksimu inayotumiwa na kikagua tahajia, pamoja na hali yake isiyoharibika kwa kiasi.

Kikagua tahajia kinaonyesha kiwango cha kipekee cha Ushabaha, kikiwa na alama ya 100% (P<sub>c</sub>) na 97.46% (P<sub>i</sub>), ikionyesha utegemevu wake katika kutambua kwa usahihi makosa ya tahajia pamoja na maneno halali. Alama za kipimo cha F za 97.52% (F mc) na 98.71% (F mi) zinaonyesha kwamba kikagua tahajia kinaepuka mikakati rahisi, na hivyo kuhakikisha ufanisi wake.

Alama ya Usahihi wa pendekezo (SA) ya kikagua tahajia ya 93.33% inathibitisha ufaafu na ukweli wa mbadala unaowezekana zaidi kwa neno lililoandikwa vibaya linalowasilishwa kwa mtumiaji wa mwisho.

Alama ya wastani wa cheo cha usawa (MRR) ya 96.04% inaangazia ubora wa mpangilio wa mapendekezo yanayowasilishwa na kikagua tahajia.

Hatimaye, utendaji wa jumla wa kiisimu wa kikagua tahajia, kama unavyoonyeshwa na alama yake ya Usahihi wa utabiri (P A) ya 98.31%, uko katika kiwango cha kuridhisha sana.

## 4.3.2 Uchambuzi wa makosa

Ili kuelewa kikamilifu na kutambua vikwazo vya kiisimu vya kikagua tahajia chetu, tulifanya uchunguzi kuhusu umbali wa hariri wa maneno yaliyoandikwa vibaya ambayo mfumo ulitoa pendekezo lisilo sahihi. Matokeo ya utafiti huu yanawasilishwa katika Jedwali la 7.

p08-03.png

Jedwali la 7: Umbali wa uhariri wa makosa ya tahajia yenye mapendekezo yasiyo sahihi

Baada ya uchunguzi wa kina wa matokeo yaliyoonyeshwa, tuligundua kwa mshangao kwamba hakukuwa na uwiano muhimu wa mstari kati ya umbali wa uhariri wa neno lililoandikwa vibaya na uwezekano wa kikagua tahajia kutoa mapendekezo yasiyo sahihi. Matokeo haya yanapatana na yale yaliyoonyeshwa katika Jedwali la 5. Idadi kubwa ya maneno katika mkusanyiko wetu wa maneno yaliyoandikwa vibaya ilikuwa na umbali wa uhariri wa 3, jambo ambalo liliongeza uwezekano wa kikagua tahajia kutoa pendekezo lisilo sahihi kwa maneno yaliyoandikwa vibaya yenye umbali wa uhariri wa 3. Zaidi ya hayo, kwa kuwa maneno yaliyoandikwa vibaya yenye umbali wa uhariri wa 11, 12, na 13 yalikuwa na uwakilishi mdogo katika mkusanyiko wetu, mapendekezo ya kikagua tahajia kwa maneno haya yote yalikuwa sahihi. Hii inaimarisha hitimisho letu kwamba kadiri marudio ya maneno yaliyoandikwa vibaya yenye umbali maalum wa uhariri yanavyokuwa juu, ndivyo uwezekano wa kikagua tahajia kutoa mapendekezo yasiyo sahihi kwa maneno yaliyoandikwa vibaya yenye umbali huo huo wa uhariri unavyoongezeka.

## 5 Mapungufu

Licha ya utendaji wa kuvutia na muda mdogo wa usindikaji wa mkaguzi wetu wa tahajia, ni muhimu kutambua vikwazo vyake.

Kwanza, kikagua tahajia kinahusisha maneno yaliyojumuishwa katika leksimu ya Kiolofu iliyoundwa pekee na hakiwezi kutambua maneno nje yake. Pili, algoriti ya umbali wa Levenshtein yenye uzani inayotumika huenda isiakisi kwa usahihi kila mara uwezekano wa aina tofauti za makosa, na kusababisha uwezekano wa kutokuwa sahihi katika mapendekezo.

Tatu, miundo ya data ya upangaji programu nguvu na trie inayotumika inaweza kusababisha mapendekezo ya chanya ya uwongo kutokana na kutozingatiwa kwa maana ya semantiki ya maneno. Zaidi ya hayo, gharama ya kikokotozi ya mbinu yetu inaweza kuwa kubwa, hasa kwa leksika kubwa au maneno yenye marekebisho mengi yanayowezekana. Mwishowe, ukosefu wa ufahamu wa muktadha unaweza kusababisha makosa yaliyokosekana au mapendekezo yasiyo sahihi.

## 6 Hitimisho

Makala hii iliwasilisha kikagua tahajia kipya kwa lugha ya Wolof, ambacho kimeonyesha uwezo wake, kutokana na mchanganyiko wake mzuri wa muundo wa data wa trie, upangaji programu nguvu, na algoriti za umbali wa Levenshtein zenye uzani. Mbinu mseto ya ufafanuzi kwa mkono na otomatiki iliwezesha ujenzi wa leksika pana na Korasi Imara ya Maneno yenye Makosa ya Tahajia, ikiruhusu tathmini imara ya uwezo wa kikagua tahajia licha ya data chache inayopatikana kwa lugha hiyo. Kupitia juhudi hizi, tunatumai kuendeleza hali ya utafiti wa NLP kwa lugha ya Wolof na kuchangia katika kuhifadhi urithi wa kiisimu wa mataifa ya Kiafrika, kuhakikisha kwamba maonyesho yao tofauti ya kitamaduni yanalindwa kwa vizazi vijavyo.

Matokeo ya utafiti huu yanatoa ushahidi thabiti wa uwezo wa kifaa cha kusahihisha herufi kwa lugha ya Wolof, na kufungua njia za uboreshaji zaidi na uchunguzi.

Kwa utafiti wa baadaye, itakuwa ya manufaa kuchunguza athari za kuongeza leksika na korasi ya maneno yaliyoandikwa vibaya kwenye utendaji wa kikagua tahajia. Zaidi ya hayo, ulinganisho wa utendaji wa kikagua tahajia na mbinu nyingine za kukagua tahajia zinazotumiwa katika lugha zenye rasilimali chache, kama vile Lugha za Afrika za Asili, unaweza kutoa maarifa muhimu kuhusu nguvu na udhaifu wa mkabala wa sasa. Ujumuishaji wa mbinu za kisasa, ukizingatia muktadha, kama zile zinazotegemea ujifunzaji wa mashine na Mitandao ya Neva ya Kina, ndani ya kikagua tahajia unaweza pia kuchunguzwa ili kuongeza zaidi uwezo wake.

## Shukrani

Tunawashukuru wakaguzi wasiojulikana kwa maoni na mrejesho wao wenye manufaa.

Pia tunawashukuru washiriki wa jamii ya Wolof kwa kutoa muda wao, hekima, na utaalamu.

## Maelezo

1 https://github.com/TiDev00/Wolof_SpellChecker

2 https://www.wolof-online.com/

3 https://twitter.com/SaabalN

4 http://biblewolof.com/

## Marejeo

Roshna Omer Abdulrahman and Hossein Hassani. 2022. A language model for spell checking of educational texts in kurdish (sorani). 1st Annual Meeting of the ELRA/ISCA Special Interest Group on Under-Resourced Languages, SIGUL 2022 - Held in Conjunction with the International Conference on Language Resources and Evaluation, LREC 2022 - Proceedings, pages 189-198.

Anthony Almudevar. 2001. A dynamic programming algorithm for the optimal control of piecewise deterministic markov processes. SIAM Journal on Control and Optimization, 40(2):525-539.

Yukino Baba and Hisami Suzuki. 2012. How are spelling errors generated and corrected? A study of corrected and uncorrected spelling errors using keystroke logs. In Proceedings of the 50th Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers), pages 373-377, Jeju Island, Korea. Association for Computational Linguistics.

Jon L. Bentley and Robert Sedgewick. 1997. Fast algorithms for sorting and searching strings. Proceedings of the Annual ACM-SIAM Symposium on Discrete Algorithms, pages 360-369.

Burton H. Bloom. 1970. Space/Time trade-offs in hash coding with allowable errors. Communications of the ACM, 13(7):422-426.

Boago Okgetheng, G. Malema, Ariq Ahmer, Boemo Lenyibi, and Ontiretse Ishmael. 2022. Bantu Spell Checker and Corrector using Modified Edit Distance Algorithm (MEDA). Data Science and Machine Learning.

Mamadou Cissé. 2004. Dictionnaire Francais-Wolof, 2.éd. révisée et augmentée edition. Dictionnaires des Langues O. Langues et MOndes, L'Asiatheque, Paris.

Mary Dalrymple, Maria Liakata, and Lisa Mackie. 2006. Tokenization and morphological analysis for Malagasy. In International Journal of Computational Linguistics & Chinese Language Processing, Volume 11, Number 4, December 2006, pages 315-332.

Ibrahima Diouf, Cheikh Tidiane Ndiaye, and Ndèye Binta Dieme. 2017. Dynamique et transmission linguistique au Sénégal au cours des 25 dernières années. Cahiers québécois de démographie, 46(2):197-217.

Jean Léopold Diouf and Tōkyō Gaikokugo Daigaku. Ajia Afurika Gengo Bunka Kenkyūjo. 2001. Dictionnaire wolof : wolof-français, français-wolof. 39. Institute for the Study of Languages and Cultures of Asia and Africa (ILCAA), Tokyo University of Foreign Studies, Tokyo.

David Eberhard, Gary Simons, and Chuck Fennig. 2019. Ethnologue: Languages of the World, 22nd edition edition. SIL International, Dallas, Texas.

A. Fal, R. Santos, and J.L. Doneux. 1990. Dictionnaire Wolof-Français: Suivi d'un Index Français-Wolof. Karthala, 22-24, boulevard Arago, 75013 Paris.

Jianhua Feng, Jiannan Wang, and Guoliang Li. 2012. Trie-join: A trie-based method for efficient string similarity joins. The VLDB Journal, 21(4):437-461.

Hendri Gayo and Pratomo Widodo. 2018. An Analysis of Morphological and Syntactical Errors on the English Writing of Junior High School Indonesian Students. International Journal of Learning, Teaching and Educational Research, 17(4):58-70.

Dan Gusfield. 1997. Algorithms on strings, trees, and sequences: Computer science and computational biology. SIGACT News, 28(4):41-60.

Yaakov HaCohen-Kerner, Daniel Miller, and Yair Yigal. 2020. The influence of preprocessing on text classification using a bag-of-words representation. PloS one, 15(5):e0232525.

James Cross, Maha Elbayad, and Kenneth Heafield. 2022. No language left behind: Scaling human-centered machine translation.

M King. 1999. Evaluation design: The EAGLES framework. In Proceedings of the Konvens '98: Evaluation of the Linguistic Performance of Machine Translation Systems, Bonn, Germany. Rita Nübel, Uta Seewald-Heeg, Gardezi Verlag, St. Augustin.

Donald Knuth. 1998. Art of computer programming, the: Volume 3: Sorting and searching, 2nd edition. edition. Addison-Wesley Professional.

Karen Kukich. 1992. Techniques for automatically correcting words in text. Acm Computing Surveys, 24(4):377-439.

Vladimir I. Levenshtein. 1965. Binary codes capable of correcting deletions, insertions, and reversals. Soviet physics. Doklady, 10:707-710.

Alla Lo, Cheikh Bamba Dione, Mathieu Mangeot, Mouhamadou Khoule, Sokhna Bao-Diop, Mame-Thierno Cissé, et al. 2016. Correction orthographique pour la langue wolof: état de l'art et perspectives. In JEP-TALN-RECITAL 2016: Traitement Automatique Des Langues Africaines TALAF 2016.

Jean-Jacques M'eric. 2014. A spell-checker and thesaurus for Bambara (Bamanankan) (Un v'erificateur orthographique pour la langue bambara) [in French]. TALAf@TALN, pages 141-146.

John T. M. Merrill. 2021. The evolution of consonant mutation and noun class marking in Wolof. Diachronica, 38(1):64-110.

Roger Mitton. 1996. English Spelling and the Computer. Studies in Language and Linguistics. Longman, London; New York.

Tayebeh Mosavi Miangah. 2013. FarsiSpell: A spell-checking system for Persian using a large monolingual corpus. Literary and Linguistic Computing, 29(1):56-73.

Patrizia Paggio and Bradley Music. 1998. Evaluation in the SCARRIE project. International Conference on Language Resources and Evaluation, Granada, Spain, pages 277-282.

Patrizia Paggio and Nancy L. Underwood. 1998. Validating the TEMAA LE evaluation methodology: A case study on Danish spelling checkers. Natural Language Engineering, 4(3):211-228.

James L. Peterson. 1980. Computer programs for detecting and correcting spelling errors. Communications of The Acm, 23(12):676-687.

Zahra Rahimi and Mohammad Mehdi Homayounpour. 2022. The impact of preprocessing on word embedding quality: A comparative study. Language Resources and Evaluation.

Md. Mijanur Rahman, Hasan Mahmud, Razia Sultana Rupa, and Mahnuma Rahman Rinty. 2021. A robust bangla spell checker for search engine. In 2021 6th International Conference on Communication and Electronics Systems (ICCES), pages 1329-1334.

Lawaly Salifou and Harouna Naroua. 2014. Design and Implementation of a Spell Checker for Hausa Language ('Etude et conception d'un correcteur orthographique pour la langue haoussa) [in French]. TALAf@TALN, pages 147-158.

Marianne Starlander and Andrei Popescu-Belis. 2002. Corpus-based evaluation of a French spelling and grammar checker. Proceedings of the 3rd International Conference on Language Resources and Evaluation, LREC 2002, pages 268-274.

Pius Ten Hacken and Cornelia Tschichold. 2001. Word Manager and CALL: Structured access to the lexicon as a tool for enriching learners' vocabulary. ReCALL, 13(1):121-131.

S. Vienney. 2004. Correction Automatique : Bilan et Perspectives. Presses universitaires de Franche-Comté.

Ellen Voorhees and John Garofolo. 2000. The TREC Spoken Document Retrieval Track. Bulletin of the American Society for Information Science and Technology, 26(5):18-19.
