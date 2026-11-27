> Machine translation (sw) of "Resources for Annotating Hate Speech in Social Media Platforms Used in Ethiopia: A Novel Lexicon and Labelling Scheme" by Nuhu Ibrahim, Felicity Mulford, Matt Lawrence, Riza Batista-Navarro, https://aclanthology.org/2024.rail-1.13/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Rasilimali kwa ajili ya kuandika maneno ya chuki katika majukwaa ya mitandao ya kijamii yanayotumika nchini Ethiopia: msamiati mpya na mpango wa kuweka vitambulisho

Nuhu Ibrahim, Felicity Mulford, Matt Lawrence, Riza Batista-Navarro

**Taasisi**  
Nuhu Ibrahim†, Felicity Mulford†, Matt Lawrence† and Riza Batista-Navarro†,‡  
†Centre for Information Resilience, London, UK  
‡Department of Computer Science, The University of Manchester, UK  
, , 

## Muhtasari

Matamshi ya chuki kwenye mitandao ya kijamii yameenea sana Ethiopia. Ili kusaidia tafiti zinazolenga kuchunguza walengwa na aina za matamshi ya chuki yanayosambaa katika muktadha wa Ethiopia, tulitengeneza mpango mpya wa ufafanuzi wa kina unaonasa vipengele vitatu vya matamshi ya chuki: mlengwa (yaani, makundi yoyote yenye sifa zinazolindwa), aina (yaani, mbinu ya unyanyasaji) na asili (yaani, mtindo wa lugha iliyotumika). Pia tulitengeneza leksimu mpya ya maneno muhimu yanayohusiana na matamshi ya chuki katika lugha nne maarufu zaidi zinazopatikana kwenye mitandao ya kijamii ya Ethiopia: Kiamhara, Kiafaan Oromo, Kiingereza na Kitigrinya. Maneno haya muhimu yalituwezesha kupata machapisho ya mitandao ya kijamii (pia katika lugha hizo hizo nne) kutoka majukwaa matatu (yaani, X, Telegram na Facebook), ambayo yana uwezekano wa kuwa na matamshi ya chuki. Wataalamu katika muktadha wa Ethiopia kisha walifafanua kwa mikono sampuli ya machapisho hayo yaliyopatikana, na kupata makubaliano ya wastani kati ya wafafanuzi. Ufafanuzi uliopatikana uliunda msingi wa uchunguzi kifani wa makundi yanayoelekea kulengwa na aina fulani za matamshi ya chuki au na mitindo fulani ya lugha ya matamshi ya chuki.

## Maneno Muhimu

Matamshi ya chuki, Lugha za Ethiopia, Mitandao ya kijamii, Mpango wa ufafanuzi, Utengenezaji wa leksimu

## 1. Utangulizi

Mitandao ya kijamii imeibuka kama zana madhubuti za mawasiliano, ikiwawezesha watu binafsi kutoa sauti za maoni, kubadilishana taarifa na kushiriki katika mijadala mbalimbali (Poell and Van Dijck, 2015). Hata hivyo, mazingira yasiyo na vikwazo ya majukwaa haya pia yamechochea kuenea kwa matamshi ya chuki, na hivyo kuleta vikwazo mashuhuri kwa mshikamano wa kijamii, hasa katika mazingira yenye utofauti wa kitamaduni kama Ethiopia. Kwa kuongezeka kwa mawasiliano ya kidijitali ambayo yamehimiza kufungamana kwa maisha ya kibinafsi na ya umma mtandaoni, matamshi ya chuki yamegundua njia mpya za kuenezwa, mara nyingi yakilenga jamii zilizotengwa au makundi ya wachache (Kovács et al., 2021) na kuzidisha migawanyiko ya kijamii (Targema and Lucas, 2018).

Ethiopia, nchi inayojulikana kwa utajiri wake wa lugha na utofauti wa kitamaduni, imeshuhudia kuenea kwa kasi kwa matamshi ya chuki kwenye majukwaa ya mitandao ya kijamii kama vile Twitter, Telegram na Facebook (Delelegn, 2021). Matukio ya hivi karibuni, ikiwa ni pamoja na vurugu baina ya makabila na machafuko ya kisiasa, yameangazia athari ya uharibifu ya matamshi ya chuki mtandaoni kwa jamii ya Ethiopia. Kwa mfano, kuongezeka kwa mvutano kati ya makundi ya kikabila katika maeneo mbalimbali kumechochewa, kwa sehemu, na usambazaji wa matamshi ya chuki na matamshi ya uchochezi kwenye majukwaa ya mitandao ya kijamii (Delelegn, 2021).

Lugha za wachache zinaendelea kukabiliwa na uhaba wa rasilimali za kikompyuta kwa ajili ya kukusanya na kuchambua seti kubwa za data za maandishi, na hivyo kusababisha rasilimali chache au kutokuwepo kabisa kwa ajili ya kugundua kiotomatiki matamshi ya chuki kwenye mitandao ya kijamii (El-Haj et al., 2015; Kovács et al., 2021). Utafiti huu unalenga kuunda mpango wa uwekaji lebo wenye undani kwa ajili ya kuandika maelezo ya matamshi ya chuki. Mpango wa kuweka lebo unasaidia katika kutoa seti ya data ya matamshi ya chuki iliyofafanuliwa kwa kina ambayo haitambui tu chuki bali pia makundi yanayolengwa yenye sifa zinazolindwa, na aina na asili ya matamshi ya chuki. Aidha, utafiti huu unalenga kuunda leksimu katika lugha nne (Kiamhariki, Kiafaan Oromo, Kiingereza na Kitigrigna) ambazo zinaashiria matamshi ya chuki katika misingi ya kijinsia, kikabila na kidini, ambayo kwa ufahamu wetu kwa sasa ndiyo leksimu pana zaidi kwa muktadha wa Ethiopia.

Utafiti huu unajengwa juu ya utafiti wa awali uliofanywa na Kituo cha Ustahimilivu wa Habari (CIR) ambao ulizingatia uzoefu binafsi na athari za kudumu za unyanyasaji mtandaoni kupitia mapitio ya maandiko yaliyopo na mahojiano na wanawake 14 wanaoshikilia nyadhifa maarufu katika vyombo vya habari, asasi za kiraia na majukumu mengine ya umma nchini Ethiopia (Centre for Information Resilience, 2023). Matokeo yao yanaangazia sumu ya mazingira ya mtandaoni, na wahojiwa walifichua kwamba unyanyasaji na usumbufu walioupata mtandaoni umekuwa na athari za ulimwengu halisi, ikiwa ni pamoja na madhara ya kisaikolojia, uharibifu wa sifa za kitaaluma, usumbufu wa maisha ya familia na kunyamazishwa kwa wanawake mtandaoni na nje ya mtandao. Kwa kuzingatia uzito wa matamshi ya chuki yanayoenea kwenye mtandao katika lugha za wachache na athari zake kwa matukio nchini Ethiopia, tunahoji kwamba kuna haja ya dharura ya kuunda rasilimali zitakazowezesha uundaji wa mbinu za uchakataji wa lugha asilia (NLP) zinazoweza kusaidia katika kugundua kiotomatiki matamshi hayo ya chuki. Kwa lengo hili, tunawasilisha: (1) mpango wa kina wa ufafanuzi wa kuweka lebo kwa matamshi ya chuki yanayosambaa katika mitandao ya kijamii inayotumika Ethiopia; (2) leksimu mpya ya maneno muhimu yanayohusiana na matamshi ya chuki, inayoshughulikia maneno ya kichochezi yanayotumika katika Kiamhariki, Kiafaan Oromo, Kiingereza na Kitigrigna; na (3) korasi ya machapisho ya mitandao ya kijamii yaliyofafanuliwa kwa kuzingatia mpango wa kina wa ufafanuzi.

## 2. Muktadha wa Ethiopia

Utafiti huu ulitumia ufafanuzi wa Serikali ya Ethiopia wa matamshi ya chuki, kama ulivyowekwa ndani ya Tangazo la Kuzuia na Kukandamiza Matamshi ya Chuki na Taarifa Potofu (Na.1185/2020) (Federal Democratic Republic of Ethiopia, 2020), ambalo linafafanua kama "matamshi ambayo kwa makusudi yanakuza chuki, ubaguzi au mashambulizi dhidi ya mtu au kikundi kinachotambulika cha utambulisho, kwa misingi ya kabila, dini, rangi, jinsia au ulemavu. "

Katika utafiti wetu, tulichunguza matamshi ya chuki katika mitandao ya kijamii inayotumika sana nchini Ethiopia. Tulizingatia kwa uangalifu ufafanuzi wa matamshi ya chuki uliotolewa na Serikali ya Ethiopia, kama ilivyoelezwa hapo juu. Ethiopia ina utofauti mkubwa kwa upande wa lugha zinazotumika, ikiwa na zaidi ya lugha 80 zinazozungumzwa (Leyew, 2020). Kwa sababu za uwezekano na vikwazo vya rasilimali, tuliamua kuzingatia kuchambua maudhui katika lugha nne tu kuu - Kiamhari, Kiafaan Oromo, Kiingereza na Kitigrinya. Uteuzi wa lugha hizi ulitokana na umaarufu wake katika mitandao ya kijamii nchini (Zelalem, 2010).

Wakati huo huo, majukwaa matatu tofauti ya mtandaoni yalichaguliwa kama chanzo cha maudhui kwa uchambuzi, yaani X (zamani Twitter), Telegram na Facebook. Majukwaa haya yalichaguliwa kwa kuzingatia matumizi yake makubwa nchini Ethiopia (Daracho, 2020; Asale, 2020), pamoja na uwezo unaotolewa na sera zake kuhusu ukusanyaji wa data na usindikaji (Sosa na Sharoff, 2022; Giglietto et al., 2012). Zaidi ya hayo, hizi zilikuwa tovuti tatu ambazo ziliripotiwa na wahojiwa (katika utafiti wa awali wa CIR) kama mazingira ambayo walikumbana na unyanyasaji mtandaoni (Centre for Information Resilience, 2023).

## 3. Kazi Zinazohusiana

Uundaji wa mifumo ya kuweka lebo za matamshi ya chuki na leksimu kwa lugha za Ethiopia ndani ya uwanja wa NLP umepata usikivu unaoongezeka katika miaka ya hivi karibuni, ukichochewa na utambuzi unaokua wa utofauti wa lugha na utajiri wa kitamaduni wa Ethiopia. Ingawa kuna uhaba wa machapisho yaliyojitolea hasa kwa mada hii, juhudi kadhaa zinazohusiana zimetoa maarifa muhimu kuhusu changamoto, mbinu na mikabala inayohusiana na mifumo ya kuweka lebo za matamshi ya chuki na uundaji wa leksimu kwa lugha za Ethiopia.

Peace Tech Lab (2023) iliripoti takriban maneno 21 ya uchochezi, tahajia zao zinazohusiana na maneno yanayohusishwa, maana zake na sababu kwa nini maneno haya ni ya uchochezi. Pia walitoa maneno 16 ya ziada ambayo ni ya kukera na yanapaswa kufuatiliwa. Minale (2022) alikusanya maneno muhimu ya chuki katika Kiamhariki na tafsiri yake kwa Kiingereza, na kisha akapanga maneno hayo muhimu katika kategoria, yaani, maneno muhimu ya 'taifa la Ethiopia' , 'jinsia' , 'yanayohusiana na chuki' , 'ya kukera' na 'ya kidini' . Walitumia maneno haya muhimu kukusanya data za Kiamhariki kiotomatiki kutoka mitandao ya kijamii mitatu: Facebook, Twitter na YouTube. Seti hizi za data kisha ziliainishwa na wawekaji lebo binadamu katika kategoria nne: 'matamshi ya kawaida' , 'matamshi ya chuki ya rangi' , 'matamshi ya chuki ya kidini' , 'matamshi ya chuki ya kijinsia' na 'matamshi ya chuki dhidi ya walemavu' .

Wakati huo huo, Jha na Mamidi (2017) walikusanya machapisho ya Kiingereza ya kijinsia kutoka Twitter kwa kulinganisha maneno au lebo za reli ambazo hutumiwa kwa kawaida wakati wa kuonyesha kile wanachokiita "ubaguzi wa kijinsia wenye nia njema" . Baadhi ya maneno haya na lebo za reli walikuwa: "bora kama mwanamume", "kama mwanamume", "kwa msichana", "mwerevu kwa msichana", "upendo wa mwanamke", "#adaywithoutwomen", "#womensday", "#everydaysexism" na "#weareequal". Machapisho yaliyokusanywa yalifafanuliwa kwa mikono na yalitumika kufunza modeli inayotegemea kujifunza kwa mashine ili kuainisha machapisho katika makundi matatu ('Hostile', 'Benevolent', 'Others') kulingana na aina ya ubaguzi wa kijinsia unaoonyeshwa. Sawa na Minale (2022), kazi ya Jha na Mamidi (2017) ilikusanya maneno muhimu ya ubaguzi wa kijinsia ya Kiamhara na kuyatumia kukusanya machapisho kutoka Twitter; pia walijenga modeli mbalimbali za uainishaji.

Baadhi ya kazi za awali zililenga uchanganuzi wa matamshi ya chuki kwa lugha za Ethiopia. Kwa mfano, Getachew (2020) na Ayele et al. (2022) walichunguza matamshi ya chuki ya Kiamhara. Kanessa na Tulu (2021) na Defersha na Tune (2021) walilenga matamshi ya chuki katika Kiafaan Oromo huku Bahre (2022) alichunguza matamshi ya chuki katika Kitigrinya.

Tuligundua kwamba watafiti wengi katika muktadha wa Ethiopia wamejikita katika kukusanya leksimu za matamshi ya chuki kwa Kiamhara, na juhudi chache tu zimejaribu kukusanya leksimu za matamshi ya chuki kwa lugha nyingine za Ethiopia, kwa mfano, Kiafaan Oromo, Kitigrinya na Kiingereza (kama inavyotumika katika muktadha wa Ethiopia). Kinyume chake, kazi yetu ilikusanya leksimu za matamshi ya chuki kwa lugha nyingi za Ethiopia: Kiamhara, Kiafaan Oromo, Kiingereza na Kitigrinya. Lugha hizi ndizo zinazotumika zaidi katika majukwaa ya mitandao ya kijamii nchini (Zelalem, 2010).

Zaidi ya hayo, mifumo mingi ya uwekaji lebo iliyotengenezwa kwa ajili ya lugha za Ethiopia ilitenga tu matamshi ya chuki kuwa ama 'chuki' au 'hakuna chuki'. Baadhi ya tafiti kama ile ya Minale (2022) zilienda mbali zaidi kufafanua kategoria za chuki: 'matamshi ya kawaida', 'matamshi ya chuki ya rangi', 'matamshi ya chuki ya kidini', 'matamshi ya chuki ya kijinsia' na 'matamshi ya chuki dhidi ya ulemavu'. Jha na Mamidi (2017) pia walitenga machapisho ya chuki/ya kijinsia kuwa 'Yenye Uadui', 'Yenye Nia Njema' au 'Mengine', hata hivyo, walijikita tu katika kutambua ubaguzi wa kijinsia. Utafiti wetu unaenda mbali zaidi ya kazi zilizopo kwa kuunda mfumo wa uwekaji lebo wa kina unaotambua vipengele vitatu katika machapisho ya chuki: mlengwa, aina na asili ya matamshi ya chuki.

## 4. Mfumo wa Uwekaji Lebo

Mifumo ya uwekaji lebo kwa kawaida huwa na seti ya miongozo au sheria zinazotumika kuweka lebo au kuweka alama kwenye data kwa taarifa au sifa mahususi (Bird et al., 2009). Sehemu hii inajadili uundaji wa mfumo wa uwekaji lebo wa kina kwa ajili ya kuweka lebo kwenye matamshi ya chuki kwenye majukwaa ya mitandao ya kijamii katika muktadha wa Ethiopia.

Kwa mujibu wa ufafanuzi wa matamshi ya chuki katika muktadha wa Ethiopia, uliowekwa katika Sehemu ya 2, ili chapisho lichukuliwe kuwa lina matamshi ya chuki, ni lazima lielekezwe kwa mtu binafsi au kikundi chenye sifa inayolindwa. Wakati chapisho linapokuwa na matamshi ya chuki, mpango wetu wa kuweka lebo unahitaji wafafanuzi kuweka lebo kwenye vipengele vitatu katika chapisho: mlengwa, aina na asili ya matamshi ya chuki. Tunamwelekeza msomaji kwenye Kielelezo 1) kwa mchoro unaotoa muhtasari wa lebo katika mpango wetu wa ufafanuzi. Katika kazi yetu, aina ya matamshi ya chuki inarejelea mbinu ya unyanyasaji (kama vile vitisho), wakati asili inarejelea mtindo uliotumika katika lugha inayoelezea unyanyasaji (kama vile kejeli au ubaguzi wa kijumla).

Ili kunasa taarifa kuhusu mlengwa wa matamshi ya chuki, maneno yanayowasilisha ni mtu/kikundi gani kinalengwa yanapaswa kupewa mojawapo ya lebo zifuatazo:

Jinsia: Mtu binafsi au kikundi cha watu wa jinsia fulani.

Ukabila: Mtu binafsi au kikundi cha watu wanaotoka sehemu fulani ya asili na utamaduni.

Dini: Mtu binafsi au kikundi cha watu wanaomilikiwa na kikundi fulani cha kidini.

Rangi: Mtu binafsi au kikundi cha watu chenye sifa bainifu za kimwili zinazohusishwa na rangi fulani.

Ulemavu: Mtu binafsi au kikundi cha watu chenye ulemavu fulani.

p03-01.png

Kielelezo 1: Muhtasari wa kategoria katika mpango wetu wa ufafanuzi.

Zaidi ya hayo, ili kunasa taarifa kuhusu aina ya usemi, maneno yanayowasilisha njia ya unyanyasaji yanapaswa kupewa lebo zozote kati ya zifuatazo:

Tusi: Matusi au misemo ya kudhalilisha dhidi ya mtu binafsi/kikundi kutokana na sifa zinazolindwa.

Tishio: Vitisho, matishio au uchochezi wa chuki, vurugu au ukiukaji wa haki za watu binafsi, kutokana na sifa zinazolindwa.

Uhusiano Unaodhaniwa: Uhusiano unaodhaniwa wa sifa zinazolindwa na maana hasi.

Uduni Unaodaiwa: Marejeleo ya uduni unaodaiwa (au ubora) wa mtu binafsi/kikundi chenye sifa inayolindwa.

Mwishowe, asili au mtindo wa matamshi ya chuki mara nyingi hutofautiana kutoka chapisho moja hadi jingine. Ingawa si muhimu kwa uainishaji wa matamshi ya chuki, kukusanya taarifa kuhusu mtindo kunanasa nuances katika lugha inayotumika kueleza chuki. Ili kunasa taarifa hii, lugha yenye matamshi ya chuki inahitaji kuwekewa lebo kama yoyote kati ya:

Mkali: Inajumuisha lugha kali inayolenga kutisha kimwili, kutishia au kuchochea vurugu za kimwili dhidi ya mpokeaji, au inayoomba, kupendekeza au kukuza ukiukaji wa haki za mpokeaji.

Kukera: Aina kadhaa tofauti za usemi, kutoka lugha ya kutukana, kudhalilisha au kudunisha, hadi kuhusisha lengwa (mtu binafsi au kikundi) na sifa binafsi zenye madhara au za uongo, au kupendekeza uduni wa lengwa.

Kejeli: Inajumuisha vicheshi, satire au ujumbe wa kejeli unaolenga sifa inayolindwa ya mpokeaji na unaweza kuwa na madhara. Maudhui ya chuki wakati mwingine huwasilishwa kwa kutumia nuances katika lugha, kama vile kejeli, ucheshi au satire.

Stereotypical: Inalingana na marejeleo ya wazi au yasiyo wazi kwa imani potofu au chuki kuhusu mtu binafsi/kikundi chenye sifa zinazolindwa.

Mpango wa kuweka lebo huhakikisha kwamba timu ya wafafanuzi wa lugha nyingi wana uelewa wa pamoja wa lebo zipi zinazounda matamshi ya chuki. Zaidi ya hayo, inapotumika, mpango wa kuweka lebo huzalisha seti ya data tajiri ya matamshi ya chuki ambayo haitaeleza tu kama chapisho lina chuki bali pia kategoria inayolengwa ya sifa zinazolindwa zinazopokea chuki, na aina na asili ya chuki inayopokewa. Hii itasaidia kujibu maswali muhimu kama:

Ni kwa kiwango gani makundi yenye sifa fulani zinazolindwa, k.m., jinsia, dini, kabila, rangi, n.k., hupokea chuki kwenye mitandao ya kijamii?

Ni aina na asili gani ya matamshi ya chuki yanayoenea?

Je, baadhi ya sifa zinazolindwa hupokea chuki zaidi kwenye mitandao ya kijamii, ikilinganishwa na nyingine?

Je, matamshi ya chuki yanatofautiana vipi katika vikundi vidogo vinavyolengwa, yaani, wanawake, wanaume, mashoga kwa kategoria ya jinsia?

Je, matamshi ya chuki yanatofautiana vipi wakati sifa nyingi zinazolindwa zinalengwa (yaani, matamshi ya chuki yanayolenga watu binafsi/vikundi kwa misingi ya mistari mingi ya utambulisho)?

## 5. Uchunguzi wa kesi

Mpango wetu wa ufafanuzi ulitumika kwa uchunguzi kifani uliolenga kuchunguza ni makundi gani yenye sifa zinazolindwa ambayo mara nyingi yamekuwa yakilengwa na matamshi ya chuki katika muktadha wa Ethiopia, pamoja na aina na asili ya lugha inayoelekezwa kwao. Sehemu hii inaeleza hatua tulizochukua kukusanya na kufafanua data kutoka kwa majukwaa mbalimbali ya mitandao ya kijamii ili kuunga mkono uchunguzi kifani.

## 5.1. Ukusanyaji wa Data

Tulikusanya aina mbili za data: maneno muhimu yanayounda leksimu mpya ya matamshi ya chuki ya Ethiopia, na machapisho ya mitandao ya kijamii yanayounda korasi mpya ya matamshi ya chuki.

## 5.1.1. Uundaji wa Leksimu

Kwa kuzingatia wingi mkubwa wa machapisho ya mitandao ya kijamii yanayochapishwa kila siku, tuliunda leksimu ya maneno muhimu ili kusaidia katika ukusanyaji wa machapisho ambayo yana uwezekano wa kuwa na matamshi ya chuki. Hasa, tulikusanya maneno muhimu katika lugha nne—Kiamhara, Kiafaan Oromo, Kiingereza na Kitigrinya—ambayo yanaashiria matamshi ya chuki katika misingi ya kijinsia, kikabila na kidini.

Leksimu ilitengenezwa kupitia utafiti wa dawati uliotumia utambuzi na uboreshaji wa leksimu zilizopo za matamshi ya chuki (Minale, 2022; Degu, 2022; Getachew, 2020; James, 1998; Jha and Mamidi, 2017; Gashe, 2022; Gao et al., 2017; Peace Tech Lab, 2023; Hatebase.org, 2023; Thalikir, 2016; Centre, 2021; Shariatmadari, 2016; Center for the Advancement of Rights and Democracy, 2023), utambuzi wa maneno muhimu na masimulizi mengine wakati wa mahojiano ya ana kwa ana, yaliyopangwa nusu yaliyofanywa wakati wa utafiti wa awali wa CIR (Centre for Information Resilience, 2023) na mjadala wa meza ya duara uliowaleta pamoja watu 21 kutoka kwa anuwai ya mashirika ya kiraia, mashirika ya Umoja wa Mataifa, na vikundi vya utetezi wa haki za wanawake na wasichana.

Rasimu ya kwanza ya leksikoni ilishirikiwa na washirika, wadau na waliohudhuria mjadala wa meza duara nchini Ethiopia kwa ajili ya maoni. Ilionekana wazi katika hatua hii kwamba kulikuwa na mkanganyiko kuhusu kwa nini baadhi ya maneno yalikuwa yamejumuishwa katika leksikoni, kwani huenda yenyewe pekee yasiwe ni matamshi ya chuki. Ilielezwa kwa wadau kwamba maneno muhimu yatatumika tu kukusanya machapisho mengi iwezekanavyo (mbinu ya kumbuko tambuzi ya juu lakini ushabaha wa chini), na ukaguzi wa kibinadamu bado ni muhimu, kwani tunatambua kwamba—kama ilivyo kwa mbinu yoyote inayotegemea kamusi—maneno mengi muhimu yana utata na hivyo uwepo wake katika chapisho haimaanishi lazima kwamba chapisho hilo lina matamshi ya chuki. Kwa hiyo, wafafanuzi binadamu watachambua ikiwa maudhui kwa hakika yana matamshi ya chuki, kulingana na mpango wa kuweka lebo uliotengenezwa.

Leksikoni iliyopatikana ina maneno muhimu ya uchochezi 2,058 katika lugha nne zilizo katika upeo wa utafiti huu. Tunaamini kwamba, hadi sasa, hii ndiyo leksikoni pana zaidi kwa muktadha wa Ethiopia. Kielelezo 2 na 3 kwa mtiririko huo vinaonyesha idadi na usambazaji wa maneno muhimu yaliyokusanywa kwa kila sifa inayolindwa.

p04-01.png

Kielelezo 2: Idadi ya maneno muhimu yaliyokusanywa kwa kila sifa inayolindwa

p05-01.png

Kielelezo 3: Usambazaji wa maneno muhimu yaliyoratibiwa kwa kila sifa inayolindwa

## 5.1.2. Ukusanyaji wa Data

Machapisho ya mitandao ya kijamii yalikusanywa kutoka kwenye majukwaa yanayolengwa, yaani, X (zamani Twitter), Telegram na Facebook. Ili kukusanya data kutoka X, zana ya uchambuzi wa mitandao ya kijamii ya Meltwater ilitumika. Meltwater inasaidia matumizi ya utafutaji wa maneno muhimu kwa twiti zilizochapishwa si zaidi ya miezi 18 tangu tarehe ya utafutaji. Ili kuhakikisha sampuli husika inapatikana, machapisho ya Kiingereza yalitolewa tu ikiwa yalitoka Ethiopia.

Katika kukusanya data kutoka Telegram, API rasmi za Telegram zilitumika. Kwa vile Telegram inasaidia tu utafutaji ndani ya Vituo vya Telegram ambavyo mtumiaji ni mwanachama, wataalamu wa mitandao ya kijamii kutoka Ethiopia walishirikishwa ili kuratibu kwa umakini orodha ya Vituo vya Telegram vya umma vinavyojulikana sana na vyenye ushawishi nchini Ethiopia. Baadaye, tulijiunga na jumla ya vituo 285 vya Telegram; machapisho ya Telegram katika vituo hivi yaliyo na maneno muhimu katika leksimu yetu yalikusanywa.

Ili kutoa data kutoka Facebook, wataalamu wa mitandao ya kijamii kutoka Ethiopia walishirikishwa tena katika kuchagua orodha ya vikundi na wasifu maarufu na wenye ushawishi wa umma wa Ethiopia kwenye Facebook. Kama matokeo ya ushirikishwaji huu, orodha ya wasifu au vikundi 300 vya Facebook ilitayarishwa, na machapisho kutoka vikundi hivi yaliyo na maneno muhimu katika leksimu yetu yalikusanywa.

## 5.1.3. Uchakataji wa Awali wa Data

Uchakataji wa awali wa data ni hatua muhimu inayohusisha kusafisha, kubadilisha na kupanga data ghafi ya kimaandishi ili kuifanya ifae kwa uchanganuzi (Tabassum and Patil, 2020).

Data ya kimaandishi inayokusanywa kutoka mitandao ya kijamii mara nyingi huwa na taarifa zisizo na umuhimu au zenye makosa zinazotatiza uchanganuzi au ufafanuzi. Ili kupunguza tatizo hili, tulitekeleza kazi zifuatazo kwenye seti za data kutoka X, Telegram na Facebook:

Uondoaji wa lebo za HTML na herufi maalum.

Urekebishaji wa herufi za maandishi (yaani, kufanya herufi zote kuwa ndogo) ili kuhakikisha kutokuwa na tofauti ya ukubwa wa herufi.

Kuondolewa au kubadilishwa kwa alama ya uakifishaji.

Kuondolewa kwa machapisho yaliyorudiwa.

Kazi zifuatazo za kusafisha zilifanywa tu kwenye seti za data katika lugha ya Kiingereza:

Kuondolewa kwa thamani za nambari, tarehe na taarifa nyingine zisizo za kimaandishi.

Kuondolewa kwa maneno ya kusitisha ambayo hayana maana yoyote muhimu (k.m., "na", "the", "katika").

Usawazishaji wa vifupisho na akronimu.

## 5.1.4. Kutokutambulisha Data

Majina yote ya watumiaji katika machapisho yalifanywa kutokutambulika kwa kuzingatia mahitaji ya kimaadili, ili kulinda faragha na usiri wa watu ambao data zao zinatumika kwa utafiti na uchambuzi. Hili lilifanywa kwa kubadilisha majina yote ya watumiaji, yaani, neno lolote linaloonekana baada ya alama ya '@' na neno "USERNAME".

## 5.1.5. Sampuli kwa Uchambuzi Zaidi

Mchakato wa ukusanyaji wa data ulisababisha ukusanyaji wa makumi ya mamilioni ya machapisho, kama inavyoonyeshwa katika Jedwali la 1. Hata baada ya uchakataji wa awali wa data wa kina, uliohusisha kuondoa nakala rudufu na machapisho mafupi kupita kiasi, zaidi ya machapisho milioni 5 yalibaki.

Kutokana na vikwazo vilivyoletwa na rasilimali watu chache zilizopo kwa ufafanuzi wa kibinadamu ili kubaini maudhui ya chuki, tulichagua sampuli nasibu ili kupata seti za data zinazoweza kudhibitiwa zaidi. Jedwali la 1 linaonyesha idadi ya machapisho yaliyotokana na kila hatua ya mchakato wa utayarishaji wa data na idadi ya machapisho yaliyochaguliwa kwa uchambuzi unaofuata.

## 5.2. Kazi ya Ufafanuzi

Kazi ya ufafanuzi inahusisha kuandikisha wafafanuzi binadamu stadi ambao wanafahamu kikoa cha maslahi ili kutumia mpango wa kuweka lebo uliotengenezwa kwa ajili ya kubaini kama machapisho katika seti ya data iliyokusanywa yana matamshi ya chuki. Wafafanuzi walitumia Doccano (Nakayama et al., 2018), zana ya ufafanuzi ya Programu huria ambayo tuliitumia kuweka lebo kwenye machapisho katika seti zetu za data kulingana na mpango wetu wa ufafanuzi, yaani, kufafanua walengwa wa matamshi ya chuki (sifa zinazolindwa), aina na asili ya matamshi ya chuki.

p06-01.png

Jedwali la 1: Idadi ya machapisho yaliyopatikana katika kila hatua ya mchakato wa utayarishaji wa data.

## 6. Matokeo ya Ufafanuzi

Ili kuhakikisha uthabiti katika utumiaji wa mpango wa uwekaji lebo wa kina, ilikuwa muhimu kukokotoa alama za makubaliano baina ya wafafanuzi (IAA).

Wafafanuzi wawili binadamu waliorodheshwa ili kufafanua machapisho ya Kiingereza yaliyochaguliwa kwa nasibu. Mfafanuzi mkuu ambaye alishiriki katika uundaji wa mpango wa uwekaji lebo wa kina na anayefahamu muktadha wa Ethiopia, alikuwa na jukumu la kufafanua uteuzi mzima wa machapisho ya Kiingereza. Ili kuruhusu ukadiriaji wa IAA, mfafanuzi wa pili alipewa jukumu la kufafanua 10% ya seti ya data iliyofafanuliwa na mfafanuzi mkuu.

Kwa Kiamhariki, mfafanuzi mkuu, mzungumzaji asilia wa Kiamhariki mwenye uzoefu katika uchanganuzi wa mitandao ya kijamii, alifanya ufafanuzi wa seti nzima ya data ya Kiamhariki, huku wafafanuzi wengine wawili (waliopewa seti za data za Kitigrinya na Kiafaan Oromo) walipewa jukumu la kufafanua takriban 10% ya seti ya data iliyofafanuliwa na mfafanuzi mkuu. IAA ilikadiriwa baadaye kwa kutumia machapisho yaliyofafanuliwa na wafafanuzi wote watatu ili kutathmini kiwango cha makubaliano na uthabiti.

Kwa Afaan Oromo na Tigrigna, mfafanuzi aliajiriwa kwa kila lugha. IAA ilionekana kuwa si ya lazima kwa wafafanuzi, kwa kuwa wafafanuzi hao hao walikuwa wamefanya kazi hapo awali ya kufafanua seti ya data ya Kiamhara, na matokeo ya makubaliano ya IAA kwenye seti ya data ya Kiamhara yalionyesha umahiri wao katika kutambua matamshi ya chuki, kuweka lebo kwenye mlengwa wake, kuainisha aina za matamshi na kutathmini hisia za chuki.

IAA ilihesabiwa kwa kutumia vipimo vya Cohen's Kappa (k) na Fleiss' Kappa. Alama za IAA, zilizowasilishwa katika Jedwali la 2, zilionyesha makubaliano ya wastani wa chini hadi ya wastani kati ya wafafanuzi (Landis na Koch, 1977).

p06-02.png

Jedwali la 2: Matokeo na tafsiri ya kukadiria makubaliano kati ya wafafanuzi kwa mujibu wa alama za Kappa.

## 7. Mjadala

Leksimu inayotokana inashughulikia asilimia kubwa zaidi ya maneno muhimu yanayohusiana na jinsia (49.4%) ikilinganishwa na yale yanayohusiana na kabila (9.1%) au dini (10.5%); tazama Kielelezo cha 2 na 3. Licha ya ukosefu huu wa usawa, ni muhimu kutambua kwamba korasi ya machapisho ya mitandao ya kijamii iliyoundwa kwa kuzingatia leksimu yetu hata hivyo ilifunua kuenea zaidi kwa matamshi ya chuki yanayolenga makundi mengine ya utambulisho, kama inavyoonyeshwa katika Kielelezo 4. Kwa mfano, kati ya machapisho yote katika seti kamili ya data, matamshi ya chuki ya kikabila yalijumuisha asilimia 44.5, wakati matamshi ya chuki ya kijinsia na matamshi ya chuki ya kidini yaliwakilisha asilimia 30.2 na 17.5, mtawalia. Chuki ya rangi na matamshi ya chuki yanayolenga watu wenye ulemavu yalijumuisha sehemu ndogo ya seti ya data (4.6% na 0.3%, mtawalia).

p06-03.png

Kielelezo 4: Usambazaji wa machapisho yenye chuki kulingana na walengwa wa chuki.

Kama inavyoonekana katika Kielelezo 5, wakati makundi ya utambulisho yenye sifa zinazolindwa yanapogawanywa katika walengwa binafsi wa chuki, mielekeo mingine ya kuvutia inadhihirika. Makundi yanayolengwa zaidi ni wanawake na wasichana (21% ya seti ya data), yakifuatwa kwa karibu na Waoromo (19.1%) na Waamhara (16.7%). Kwa kuwa leksimu ilijumuisha maneno muhimu zaidi yanayohusiana na jinsia, hili halishangazi. Walengwa wengine wa matamshi ya chuki ndani ya seti ya data, ingawa kwa uwiano mdogo, wanajumuisha Wakristo Waorthodoksi (8.7%), wanaume (5.9%) na Watigray (5.5%).

Kategoria ya 'walengwa wa ziada wa chuki' (katika Kielelezo 5) inajumuisha makundi mengine yote ya walengwa nje ya walengwa 7 walioenea zaidi; hii inajumuisha Waprotestanti, watu weupe, watu waliobadili jinsia, wasioamini Mungu, Waarabu, watu wa rangi mchanganyiko na Wayahudi. Kategoria ya 'walengwa wengine' ilichaguliwa katika hali ambapo matamshi ya chuki yanayolenga sifa inayolindwa yalikuwepo, lakini hayakuwa chini ya kategoria zozote zile.

p07-01.png

Kielelezo 5: Usambazaji wa machapisho yenye chuki kulingana na walengwa mahususi wa chuki.

Jedwali 3 linaonyesha kuwa wanawake na wasichana wanapokea kwa uwiano matamshi ya chuki ya matusi zaidi (36.55%) kuliko Waamhara (28.31%), Waislamu (29.51%) na Waoromo (22.51%). Wanapokea matamshi ya chuki ya matusi kidogo ikilinganishwa na watu wa jinsia moja (38.96%) na Watigray (45.21%). Zaidi ya hayo, wanawake na wasichana wanapokea kwa uwiano chuki zaidi yenye madai ya uduni (22.2%), wakifuatiwa na Waislamu (16.39%), Waamhara (11.90%), watu wa jinsia moja na Watigray (12.99% na 13.01, mtawalia), na Waoromo (9.98%). Kinyume chake, wanawake na wasichana hupokea (kwa uwiano) vitisho vidogo (13.51%) ikilinganishwa na Oromo (26.11%), Amhari (22.22%), Tigray (22.6%), watu wa jinsia moja (20.78%) na Waislamu (18.03%). Wanawake na wasichana pia ni miongoni mwa vikundi vidogo vya walengwa wa chuki ambao wanapokea kwa uwiano chuki chache zenye uhusiano unaodhaniwa (27.74%), ikilinganishwa na Waamhara (37.57%), Waislamu na Waoromo (36.07% na 41.4%, mtawalia).

Kwa kuvutia, ilibainika kuwa lugha ya kukera ndiyo asili au mtindo ulioenea zaidi wa matamshi ya chuki katika walengwa wote wa chuki waliochambuliwa (tazama Jedwali 4). Kinyume na muundo ulioonekana katika lugha ya matusi, wanawake na wasichana hupokea uwiano wa juu zaidi wa lugha ya kimtazamo potofu (26.17%), wakifuatwa kwa karibu na mashoga (22.81%), kisha Waislamu (12.5%), Waamhara (9.27%), Waoromo (4.98%) na Watigray (2.65%). Ni Waislamu pekee wanaopokea uwiano wa juu zaidi wa lugha ya kejeli (21.25%) kuliko Wanawake na wasichana (20.37%). Hata hivyo, wanawake na wasichana wanalengwa kwa kiasi kikubwa zaidi na lugha ya kejeli kuliko Watigray (11.5%), mashoga (8.77%), Waamhara (6.85%) na Waoromo (5.32%).

p07-02.png

Jedwali la 3: Idadi ya machapisho yenye chuki kulingana na walengwa (7 bora) na aina ya matamshi ya chuki.

## 8. Hitimisho

Katika utafiti wetu, tulitengeneza mpango wa ufafanuzi wa kina kwa ajili ya kuweka lebo za matamshi ya chuki katika machapisho yaliyochapishwa kwenye majukwaa ya mitandao ya kijamii yanayotumika Ethiopia. Mpango wa ufafanuzi uliunda msingi wa kuzalisha korasi ya matamshi ya chuki iliyofafanuliwa kwa kina ambayo haitambui tu machapisho yenye chuki bali pia sifa zinazolindwa zinazolengwa, aina ya chuki, na asili ya lugha inayotumika katika matamshi ya chuki.

Aidha, utafiti huu ulizalisha leksimu inayoshughulikia lugha nne zinazotumika Ethiopia, yaani, Kiamhara, Kiafaan Oromo, Kiingereza na Kitigrigna, ambayo ina maneno muhimu yanayoashiria matamshi ya chuki katika misingi ya kijinsia, kikabila na kidini. Kwa kadiri ya ufahamu wetu, leksimu hii kwa sasa ndiyo pana zaidi kwa muktadha wa Ethiopia. Kazi yetu ya baadaye italenga kuchunguza jinsi korasi iliyo na maelezo inayotokana na utafiti huu inavyoweza kuwezesha uundaji wa miundo inayotegemea kujifunza kwa mashine ambayo inaweza kutambua kiotomatiki na kuainisha matamshi ya chuki, na pia kutambua kiotomatiki walengwa mahususi wa matamshi ya chuki.

p08-01.png

Jedwali la 4: Idadi ya machapisho yenye chuki kulingana na mlengwa (7 bora) na asili ya matamshi ya chuki.

## Taarifa ya Maadili

Kituo cha Ustahimilivu wa Taarifa (CIR) kinafuata Itifaki ya Berkeley kuhusu Uchunguzi wa Kidijitali wa Programu huria. Kwa utafiti huu, uangalifu ulichukuliwa ili kuficha utambulisho wa data na kuzingatia sheria na masharti ya majukwaa. Ili kupunguza athari za kiwewe cha kusikiliza, wafafanuzi walipewa usaidizi wa moja kwa moja kutoka kwa Mratibu wa Utafiti wa CIR (mwandishi wa pili wa makala hii). Hii ilikuwa ni kuhakikisha kwamba wafafanuzi hawakuathiriwa moja kwa moja na kukabiliwa na matamshi ya chuki. Wafafanuzi pia walifahamishwa kwamba wanaweza kupata rasilimali zinazofaa iwapo msaada wa kitaalamu utahitajika.

## Shukrani

Tungependa kuwashukuru Adyam Solomon Tesfay, Alemu Teshome Baki na Fasika Tadesse kwa kazi yao ngumu kama wafafanuzi wa seti zetu za data.

Nyenzo hii imefadhiliwa na Maendeleo ya Kimataifa ya Uingereza kutoka kwa serikali ya Uingereza; hata hivyo, maoni yaliyotolewa si lazima yaakisi sera rasmi za serikali ya Uingereza.

## Maelezo

1 https://github.com/Centre-for-Information-Resilience/ethiopia-hate-speech-lexicon

2 Ingawa ufafanuzi wa Serikali ya Ethiopia wa matamshi ya chuki (Federal Democratic Republic of Ethiopia, 2020) haurejelei kwa uwazi utambulisho wa kijinsia, tulijumuisha utambulisho wa kijinsia ndani ya kategoria hii ili kunasa chuki inayotokana na mwelekeo wa kimapenzi.

3 https://explore.meltwater.com/meltwater-media-monitoring

4 https://core.telegram.org/

## Marejeo

Moges Ayele Asale. 2020. The Tributes and Perils of Social Media Use Practices in Ethiopian Sociopolitical Landscape. In Proceedings of the 22nd HCI International Conference, volume 12427, page 199, Copenhagen, Denmark. Springer Nature.

Abinew Ali Ayele, Skadi Dinter, Tadesse Destaw Belay, Tesfa Tegegne Asfaw, Seid Muhie Yimam, and Chris Biemann. 2022. The 5Js in Ethiopia: Amharic Hate Speech Data Annotation using Toloka Crowdsourcing Platform. In Proceedings of the 2022 International Conference on Information and Communication Technology for Development for Africa, pages 114-120. IEEE.

Weldemariam Bahre. 2022. Hate speech detection from Facebook social media posts and comments in Tigrigna language. Ph.D. thesis, St. Mary's University.

Steven Bird, Ewan Klein, and Edward Loper. 2009. Natural Language Processing with Python: Analyzing Text with the Natural Language Toolkit. O'Reilly Media, Inc.

Center for the Advancement of Rights and Democracy. 2023. CARD's Bi-weekly Social Media Conversation Sensitivity Report.

The Wilson Centre. 2021. Malign Creativity: How Gender, Sex, and Lies are Weaponized Against Women and girls Online.

Centre for Information Resilience. 2023. Silenced, shamed, and threatened: The online abuse of women who participate in Ethiopian public life.

Lisanu Damene Daracho. 2020. Social Media Impact on Social Life of Public Servant in Mari Mansa District, Dawuro Zone, Southern Region, Ethiopia. New Media and Mass Communication, 93:1-7.

NB Defersha and KK Tune. 2021. Detection of Hate Speech Text in Afan Oromo Social Media Using Machine Learning Approach. Indian J Sci Technol, 14(31):2567-78.

Mekuanent Degu. 2022. Amharic dataset for hate speech detection. Mendeley Data.

Misganaw Delelegn. 2021. Hate Speech Regulation in Ethiopia: Lessons to Be Learned From Other Jurisdictions. Ph.D. thesis, Bahir Dar University.

Mahmoud El-Haj, Udo Kruschwitz, and Chris Fox. 2015. Creating language resources for underresourced languages: methodologies, and experiments with Arabic. Language Resources and Evaluation, 49:549-580.

Federal Democratic Republic of Ethiopia. 2020. Hate Speech and Disinformation Prevention and Suppression Proclamation (No. 1185/2020).

Lei Gao, Alexis Kuppersmith, and Ruihong Huang. 2017. Recognizing Explicit and Implicit Hate Speech Using a Weakly Supervised Two-path Bootstrapping Approach. In Proceedings of the 8th International Joint Conference on Natural Language Processing, pages 774-782, Taipei, Taiwan. Asian Federation of Natural Language Processing.

S. M. Gashe. 2022. Hate Speech Detection and Classification System in Amharic Text with Deep Learning. List of Amharic Hate Speech Keywords (Lexicons).

Surafel Getachew. 2020. Amharic Facebook Dataset for Hate Speech detection. Mendeley Data.

Fabio Giglietto, Luca Rossi, and Davide Bennato. 2012. The Open Laboratory: Limits and Possibilities of Using Facebook, Twitter, and YouTube as a Research Data Source. Journal of Technology in Human Services, 30(3-4):145-159.

Hatebase.org. 2023. Hatebase.org.

Deborah James. 1998. Gender-linked derogatory terms and their use by women and men. American Speech, 73(4):399-420.

Akshita Jha and Radhika Mamidi. 2017. When does a compliment become sexist? Analysis and classification of ambivalent sexism using twitter data. In Proceedings of the 2nd Workshop on NLP and Computational Social Science, pages 7-16.

Lata Guta Kanessa and Solomon Gizaw Tulu. 2021. Automatic Hate and Offensive speech detection framework from social media: the case of Afaan Oromoo language. In Proceedings of the 2021 International Conference on Information and Communication Technology for Development for Africa, pages 42-47. IEEE.

György Kovács, Pedro Alonso, and Rajkumar Saini. 2021. Challenges of hate speech detection in social media: Data scarcity, and leveraging external resources. SN Computer Science, 2:1-15.

J. Richard Landis and Gary G. Koch. 1977. The measurement of observer agreement for categorical data. Biometrics, 33(1):159-174.

Zelealem Leyew. 2020. Language and society in Ethiopia. Bulletin of the Department of Linguistics and Philology 40 years, page 64.

Samuel Minale. 2022. Amharic Social Media Dataset for Hate Speech Detection and Classification in Amharic Text with Deep Learning. Mendeley Data.

Hiroki Nakayama, Takahiro Kubo, Junya Kamura, Yasufumi Taniguchi, and Xu Liang. 2018. doccano: Text Annotation Tool for Human.

Peace Tech Lab. 2023. Hateful Speech and Conflict in the Federal Democratic Republic of Ethiopia: A lexicon of hateful of inflammatory words and Phrases.

Thomas Poell and José Van Dijck. 2015. Social media and activist communication. The Routledge companion to alternative and community media, pages 527-537.

David Shariatmadari. 2016. Eight words that reveal the sexism at the heart of the English language.

Jose Sosa and Serge Sharoff. 2022. Multimodal Pipeline for Collection of Misinformation Data from Telegram. In Proceedings of the 13th Language Resources and Evaluation Conference, pages 1480-1489, Marseille, France. European Language Resources Association.

Ayisha Tabassum and Rajendra R Patil. 2020. A Survey on Text Pre-Processing & Feature Extraction Techniques in Natural Language Processing. International Research Journal of Engineering and Technology, 7(06):4864-4867.

Tordue Simon Targema and Joseph M Lucas. 2018. Hate speech in readers' comments and the challenge of democratic consolidation in Nigeria: A critical analysis. Jurnal Pengajian Media Malaysia, 20(2):23-38.

Thalikir. 2016. Everyday misogyny: 122 subtly sexist words about women and girls (and what to do about them).

Amsale Zelalem. 2010. Design and Implementation of Multilanguage Electronic Dictionary for Smart Phones: A Dictionary of Amharic, Afaan Oromo, English and Tigrigna Languages. Ph.D. thesis, Addis Ababa University.
