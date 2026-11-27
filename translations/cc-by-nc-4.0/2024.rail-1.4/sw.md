> Machine translation (sw) of "Developing Bilingual English-Setswana Datasets for Space Domain" by Tebatso G. Moape, Sunday Olusegun Ojo, Oludayo O. Olugbara, https://aclanthology.org/2024.rail-1.4/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kutengeneza Seti za Data za Lugha Mbili za Kiingereza na Kisetswana kwa Ajili ya Kikoa cha Anga

Tebatso G. Moape, Sunday Olusegun Ojo, Oludayo O. Olugbara

**Taasisi**  
Tebatso G. Moape1, Sunday O. Ojo2, Oludayo O. Olugbara3  
University of South Africa1, Durban University of Technology2,3  
28 Pioneer Ave, Florida Park, 1704, South Africa1,  
43 M L Sultan Rd, Greyville, Durban, 4001, South Africa2,3  
, , 

## Muhtasari

Katika enzi hii ya kidijitali, lugha zisizo na uwepo wa kidijitali zinakabiliwa na hatari ya karibu ya kutoweka. Aidha, ukosefu wa rasilimali za kidijitali unaleta kikwazo kikubwa kwa maendeleo ya programu za Uchakataji wa Lugha Asilia (NLP) kwa lugha hizo. Kwa hiyo, utengenezaji wa rasilimali za lugha za kidijitali unachangia katika uhifadhi wa lugha hizi na kuwezesha utengenezaji wa programu. Makala haya yanachangia katika juhudi zinazoendelea za kutengeneza rasilimali za lugha kwa Lugha za Afrika Kusini kwa kulenga hasa Kisetswana na yanawasilisha seti mpya ya data ya lugha mbili ya Kiingereza na Kisetswana inayolenga kikoa cha anga. Seti ya data ilijengwa kwa kutumia mbinu ya upanuzi. Kikundi kidogo cha synseti za Kiingereza za kikoa cha anga kutoka Princeton WordNet kilitafsiriwa kitaalamu katika Kisetswana. Uwasilishaji wa awali wa tafsiri ulionyesha kiwango cha Usahihi cha 99% kabla ya uthibitisho. Baada ya uthibitishaji, marekebisho endelevu na majadiliano kati ya watafsiri na wathibitishaji yalisababisha makubaliano ya pamoja, na hatimaye kufikia kiwango cha Usahihi cha 100%. Toleo la mwisho la rasilimali lilibadilishwa kuwa muundo wa XML kutokana na mfumo wake unaosomeka kwa mashine, ukitoa daraja la kimuundo kwa ajili ya mpangilio wa data za kiisimu.

## Maneno Muhimu

Rasilimali za lugha za kidijitali, seti ya data ya lugha mbili ya Setswana, tafsiri ya kikoa cha anga

## 1. Utangulizi

Princeton WordNet (PWN) ni hifadhidata ya kileksika ya Kiingereza iliyotambulishwa rasmi na Miller (1995) na kuendelezwa katika Chuo Kikuu cha Princeton. Imetumika kama rasilimali kuu ya kisemantiki ya kileksika kwa watafiti wengi katika uwanja wa Uchakataji wa Lugha Asilia (NLP) na isimu kompyuta (Batsuren et al., 2019). Uwepo wa rasilimali hii umewezesha uundaji wa programu mbalimbali za NLP kama vile tafsiri ya mashine, urejeshaji wa taarifa, na zana za utatuzi wa utata wa maana ya neno. Zaidi ya hayo, upatikanaji wa PWN umewapa watafiti uwezo wa kutathmini na kulinganisha ufanisi wa miundo na programu mbalimbali za lugha.

Hata hivyo, lugha kama vile Setswana zinakabiliwa na uhaba wa rasilimali (Sebolela, 2009, Marivate et al., 2020), na kusababisha upatikanaji mdogo wa zana na programu za kiisimu. Zaidi ya hayo, zana za sasa mara nyingi huundwa ndani ya miradi iliyojitenga, kila moja ikiwa na data iliyoratibiwa iliyolengwa kwa wigo wake mahususi. Ugawanyiko huu unaleta changamoto kwa watafiti katika kushirikiana kwa ufanisi na kulinganisha kazi zao.

Mbali na korasi zisizo na ufafanuzi zilizolinganishwa sambamba na kamusi za orodha ya maneno zilizotolewa kutoka tovuti za serikali, rasilimali pekee inayopatikana inayolinganishwa na PWN ni African Wordnet (AWN). Mradi wa AWN ulianzishwa kwa lengo la kukuza wingi wa lugha na kuwezesha uundaji wa zana na rasilimali za lugha kwa lugha za Afrika Kusini (SA) (Bosch and Griesel, 2017). Kwa sasa, WordNet zimetengenezwa kwa Setswana, isiXhosa, isiZulu, Sesotho sa Leboa, na Tshivenda. AWN ina umuhimu kutokana na uhaba wa data katika lugha za Afrika Kusini. Hii inafanya AFW kuwa rasilimali muhimu.

Katika juhudi za kuchangia uundaji wa rasilimali kwa lugha za SA kwa ujumla na Setswana hasa, makala haya yanawasilisha leksimu ya Setswana. Leksikoni ilitengenezwa kwa kutafsiri kikundi kidogo cha PWN kupitia mbinu za utafsiri wa kitaalamu, upanuzi, na urekebishaji wa kikoa. Kikoa kilichochaguliwa kwa tafsiri kililenga dhana zinazohusiana na anga. Matokeo ya mradi huu ni leksikoni ya Setswana inayojumuisha synseti 6016, ikiwa na lemma, fafanuzi, na mifano ya matumizi. Matumizi ya utafsiri unaoongozwa na wataalamu yalikuwa kuhakikisha uzalishaji wa tafsiri za ubora wa juu, na uamuzi wa kulenga kikoa maalum ulifanywa ili kuwezesha umuhimu na utumikaji wa leksikoni ya Setswana katika muktadha uliolengwa.

Sehemu iliyobaki ya makala imeundwa kama ifuatavyo: sehemu ya 2 inawasilisha fasihi husika inayohusiana na ukuzaji wa rasilimali za semantiki katika lugha mbalimbali na hali ya kisasa ya rasilimali za lugha zinazopatikana kwa Setswana. Sehemu ya 3 inaeleza mbinu na mbinu zilizotumika kwa ukuzaji wa rasilimali. Tathmini ya rasilimali na matokeo yanawasilishwa katika sehemu ya 4. Sehemu ya 5 inahitimisha makala hii.

## 2. Kazi Zinazohusiana

Sehemu hii imegawanywa katika visehemu viwili. Kisehemu cha kwanza kinaangazia fasihi husika inayohusiana na uundaji wa rasilimali za semantiki katika lugha mbalimbali. Fasihi hii inatoa msingi na muktadha kwa mbinu iliyotumika katika kuunda rasilimali iliyowasilishwa katika makala hii. Kisehemu cha pili kinatoa muhtasari wa kiwango cha juu wa rasilimali zilizopo za Setswana.

## 2.1 Uundaji wa Rasilimali za Lugha

Leksika za lugha moja hujengwa kwa kutumia mbinu mbili, yaani, mbinu ya upanuzi na mbinu ya uunganishaji (Bosch na Griesel, 2018). Katika mbinu ya upanuzi, watengenezaji hutafsiri kikundi kidogo cha seti za visawe vya Kiingereza kutoka PWN. Mbinu ya uunganishaji inahusisha uundaji wa seti za visawe kwa lugha lengwa, ambazo baadaye huunganishwa na seti za visawe za PWN. Tofauti kuu kati ya mbinu hizo mbili ni kwamba mbinu ya upanuzi husababisha lugha lengwa kurithi muundo wa semantiki wa PWN, wakati mbinu ya uunganishaji inahusisha uundaji wa muundo mpya wa semantiki kwa lugha lengwa, ambao baadaye unaunganishwa na mtandao wa semantiki wa PWN. Rasilimali zilizofanywa kwa kutumia mbinu hizi zinajumuisha (Batsuren et al., 2019, Bella et al., 2020).

Kwa kulenga kikoa cha anga, utafiti huu ulitumia mbinu ya upanuzi kwa Setswana. Sababu ya msingi ya uchaguzi huu inatokana na kuwepo kwa dhana za uga zinazofanana ndani ya vikoa vya anga vya Kiingereza na Setswana. Ili kuhakikisha kwamba dhana zote za anga za Setswana zimejumuishwa, dhana zilizopo katika Setswana lakini hazipo katika seti iliyotafsiriwa ziliongezwa kwenye seti ya data na baadaye zikawekwa katika msamiati wa Kiingereza. Hii inahakikisha ufunikaji wa kina wa dhana zinazohusiana na anga katika Setswana.

## 2.2 Hali ya Kisasa ya Rasilimali za Setswana

Umuhimu wa upatikanaji wa rasilimali za lugha hauwezi kusisitizwa kupita kiasi, kwani zina jukumu muhimu katika uhifadhi wa lugha na hutumika kama kiwezeshaji kwa maendeleo na ustawishaji wa zana za NLP. Katika juhudi za kuunda, kuunganisha, na kusambaza rasilimali za lugha kwa lugha mbalimbali za SA, Kituo cha Afrika Kusini cha Rasilimali za Lugha za Dijitali (SADiLaR), kwa ushirikiano na vyuo vikuu mbalimbali kilianzishwa kwa madhumuni haya. Kwa kuungwa mkono na Idara ya Sayansi na Ubunifu (DSI), SADiLaR ina jukumu muhimu katika kuwezesha uwekaji kati wa rasilimali hizi za lugha, ikichangia upatikanaji na matumizi yake. Sehemu hii inaelezea rasilimali za maandishi zinazopatikana kwa Kisetswana kwenye SADiLaR, ikitoa muhtasari wa rasilimali zinazopatikana kwa sasa zinazoweza kufikiwa na watafiti.

Kwa muhtasari, kwa sasa, ikijumuisha AFW (Bosch na Griesel, 2017), kuna jumla ya aina 24 tofauti za korasi za maandishi. Hii inajumuisha tafsiri za maneno na vishazi vya lugha nyingi, korasi yenye ufafanuzi wa vipande vya vishazi, korasi za lugha moja, safu ya majaribio, data treebank, korasi yenye ufafanuzi wa vitu vyenye majina, korasi za maandishi zenye ufafanuzi, na korasi sambamba za Kiingereza-Kisetswana (Lastrucci et al., 2023, McKellar na Puttkammer, 2020). Pia kuna data inayotegemea kikoa ambapo data ya Kiingereza kutoka vikoa maalum ilitafsiriwa katika lugha nyingi za SA, ikijumuisha Kisetswana. Hii inajumuisha data kutoka vikoa kama vile soka, hisabati, teknolojia, afya, sayansi asilia, sanaa na utamaduni, serikali, uchaguzi, na mijadala ya bunge. Seti ya data iliyowasilishwa katika makala hii hasa iko ndani ya kikoa cha anga, ikipanua zaidi wigo wa rasilimali za data zinazopatikana kwa lugha ya Kisetswana.

## 3. Mbinu

Makala haya yalitumia mbinu ya upanuzi inayotokana na wataalamu ili kuunda rasilimali iliyowasilishwa. Kikundi kidogo cha maneno, maelezo mafupi, na mifano kutoka PWN vilitafsiriwa na kuthibitishwa na wataalamu wa lugha ya Setswana. Mbinu hii ina awamu nne, ambazo ni, uzalishaji wa data ya tafsiri, tafsiri, urekebishaji wa muundo, na uthibitisho. Tafsiri zilifanywa kwenye Lahajedwali la Microsoft Excel. Vifungu vidogo vifuatavyo vinafafanua kuhusu muundo wa lahajedwali, uzalishaji wa data, tafsiri, uthibitisho, na awamu za urekebishaji wa muundo.

## 3.1 Tafsiri kupitia Lahajedwali za Microsoft Excel

Lahajedwali la Microsoft Excel lina lemma za chanzo na lengwa, synsets, maelezo mafupi, na mifano. Hivi vinafafanuliwa kama:

## 3.1.1 Lemma

Lemma ni umbo la kimsingi (umbo la kamusi, umbo la kunukuu) la seti ya maneno (maumbo ya maneno). Kwa mfano, tsamaya (nenda) ni lemma ya maneno tsamaya (nenda), wa tsamaya (anaenda), na o tsamaile (alienda).

## 3.1.2 Synsets

Synset ni seti ya visawe vinavyowakilisha dhana au wazo moja katika isimu ambayo inajumuisha lemmas. Kila synset inawakilisha dhana ya kipekee, na maneno ndani ya synset moja yanachukuliwa kuwa na maana sawa. Synsets hutoa njia ya kupanga na kuelewa uhusiano kati ya maneno na maana zake katika muundo uliopangwa.

## 3.1.3 Gloss

Maandishi au sentensi inayoelezea dhana, yaani, lemma.

## 3.1.4 Mfano

Maandishi au sentensi zinazofafanua maana halisi ya dhana iliyoelezwa. Mifano pia hutumiwa kufafanua na kuonyesha jinsi lemma/dhana inavyotumiwa katika sentensi.

## 3.2 Uzalishaji wa Data ya Tafsiri

Kwa awamu ya uzalishaji wa data ya tafsiri, mbinu ya urekebishaji mahususi kwa kikoa ilitumika.

Mbinu hii inalenga uundaji wa rasilimali za lugha kulingana na kikoa au eneo mahususi la somo. Vigezo vifuatavyo vilitumika wakati wa kuchagua kikundi kidogo cha synset za Kiingereza zitakazotafsiriwa.

## 3.2.1 Utambulishaji wa Kikoa

Seti ya data ya kikoa cha anga ilichaguliwa.

## 3.2.2 Uchimbaji wa Data

Lemma, maelezo mafupi, na mifano vilichimbwa na kuhamishiwa kwenye faili ya Excel.

Data za WordNet kwa kawaida hugawanywa katika kategoria nne za aina za maneno, nomino, vitenzi, vivumishi, na vielezi. Ili kupunguza mwelekeo, utafiti huu ulizingatia data katika kategoria hizi nne zilizo katika kikoa cha anga.

## 3.3 Tafsiri

Tafsiri zilifanywa kwenye faili ya Microsoft Excel. Laha ya Excel ina idadi ya synseti katika lugha chanzo zinazopaswa kutafsiriwa katika lugha lengwa. Katika kisa hiki, Kiingereza kilikuwa lugha chanzo, na Setswana ilikuwa lugha lengwa. Faili imepangwa katika muundo wa jozi (safu ya lugha chanzo - safu ya lugha lengwa). Sehemu za mtafsiri zinajumuisha yafuatayo:

## 3.3.1 Safu za lemma za synseti

Safu C: Ina orodha iliyotenganishwa kwa koma ya lemmas za lugha chanzo.

Safu D: Mtafsiri hutoa orodha iliyotenganishwa kwa koma ya lemmas za synset za lugha lengwa.

## 3.3.2 Safu za gloss za synset

Safu F: Ina gloss ya synset katika lugha chanzo.

Safu G: Mtafsiri anatoa ufafanuzi wa synset katika lugha lengwa.

## 3.3.3 Safu za mifano ya synset

Safu I: Ina mifano ya synset katika lugha chanzo.

Safu J: Mtafsiri hutoa mifano ya synset katika lugha lengwa.

## 3.3.4 Safu za maelezo ya mfasiri

Safu L: Mfasiri anaweza kutoa maelezo yanayohusiana na tafsiri ya synset ikiwa kuna yoyote.

## 3.4 Uthibitishaji

Laha ileile ya Excel iliyotumika kwa tafsiri ilitumika kwa uthibitishaji. Sehemu za mthibitishaji zinajumuisha yafuatayo:

## 3.4.1 Uthibitishaji wa lemma za synset

Mthibitishaji hutoa uthibitisho wake kuhusu lemma katika lugha lengwa katika safu E. Mthibitishaji anaweza kuchagua kati ya:

Imekubaliwa: Ikiwa mthibitishaji atagundua kwamba lemma zimekamilika na hazina makosa yoyote kama vile makosa ya tahajia, yeye huandika A (kwa imekubaliwa).

Imekataliwa: Ikiwa mthibitishaji atagundua kwamba lemma si sahihi, au kuna lemma zinazokosekana, au lemma ambazo si za synset, yeye huandika R (kwa imekataliwa) na hutoa uhalalishaji wa uamuzi huo katika safu ya maelezo ya mthibitishaji.

## 3.4.2 Uthibitishaji wa maelezo ya synset

Mthibitishaji hutoa uthibitisho wake kwenye safu wima H ya maelezo ya synset. Mthibitishaji anaweza kuchagua kati ya:

Imekubaliwa: Ikiwa mthibitishaji atagundua kwamba maelezo ya synset yanaelezea synset kwa usahihi na hayana makosa kama vile makosa ya tahajia, yeye huandika A.

Imekataliwa: Ikiwa mthibitishaji atagundua kwamba maelezo ya synset hayaelezei synset au yana makosa, yeye huandika R na hutoa uhalalishaji.

## 3.4.3 Uthibitishaji wa mifano ya synset

Mthibitishaji hutoa uamuzi wake kuhusu mifano ya synset katika Safu wima K. Mthibitishaji anaweza kuchagua kati ya:

Imekubaliwa: Ikiwa mthibitishaji atagundua kwamba mifano ya synset ni sahihi na haina makosa, na ikiwa hakuna mifano ya synset ambayo inaweza kuwa muhimu kuelezea jinsi ya kutumia lemma, yeye huandika hapa A. Inawezekana kukubali synset bila mifano ikiwa mtafsiri hakuzitoa na mthibitishaji anakubali uamuzi wa mtafsiri.

Imekataliwa: Ikiwa mthibitishaji hakutoa mifano na mthibitishaji hakubali uamuzi wa mtafsiri, au ikiwa atagundua makosa katika mifano, yeye huandika hapa R na hutoa uhalalishaji.

## 3.4.4 Uthibitishaji wa maelezo ya mthibitishaji

Mthibitishaji anatoa uhalalishaji wa kukataa kwake tafsiri yoyote ya awali ya synset katika safu hii. Maoni ya mthibitishaji ni ya hiari katika kesi ya kukubaliwa, lakini ni ya lazima katika kesi ya kukataliwa.

Katika hali ambapo tafsiri zilikataliwa na mthibitishaji, laha ya Excel ilirudishwa kwa mtafsiri pamoja na maelezo ya mthibitishaji kwa ajili ya ufafanuzi. Makosa yaliyotambuliwa yalisahihishwa, au watafsiri walitoa sababu za tafsiri zilizochaguliwa. Mchakato huu uliendelea hadi watafsiri na wathibitishaji walipofikia makubaliano, na tafsiri zote zilikubaliwa, na kufanya hii kuwa rasilimali ya ubora wa juu.

## 3.5 Kurekebisha Upya

Rasilimali iliyotengenezwa inaweza kutumika kwa ajili ya utengenezaji wa programu za NLP. Hata hivyo, data katika muundo wa Excel haifai kwa upangaji wa Mazingira Jumuishi ya Utengenezaji (IDEs) na nyanja za isimu kompyuta ambapo programu hizi zinatengenezwa (Suárez et al., 2007). Hii ni kwa sababu ya asili yake inayotumia kumbukumbu nyingi ambayo husababisha ufanisi mdogo. Matumizi ya data kama hiyo katika IDE yanaweza kusababisha ongezeko la matumizi ya kumbukumbu, muda mrefu wa utekelezaji, na utendakazi uliopungua, na kuifanya isiwe bora kwa uundaji wa programu.

Ili kushughulikia vikwazo hivi, rasilimali iliyotengenezwa ilibadilishwa muundo kuwa muundo wa Extensible Markup Language (XML). Muundo wa XML ni kiwango kinachokubalika sana cha kuwakilisha data iliyoundwa (Bourret, 1999). Usanifishaji wake huhakikisha uthabiti na upatanifu katika programu na mifumo tofauti ya uundaji programu. Zaidi ya hayo, XML hutoa mfumo unaosomeka na mashine unaoruhusu uwakilishaji wa data ya kiisimu katika mpangilio wa daraja na ujumuishaji wa metadata na maelezo ya semantiki (Kroeze et al., 2010). Data ilipangwa kulingana na aina za maneno na kubadilishwa kuwa faili za XML.

## 4. Tathmini na Matokeo

Mbinu yetu ya uthibitishaji ilitathmini kwa uwazi na rasmi kila lemma, mifano na tafsiri za fasili, na ubora wake. Tathmini ilifanywa na kikundi cha wazungumzaji asilia wa Setswana ambao wanajua vizuri Kiingereza. Waliamua uhalali wa tafsiri kwa kuziweka alama kama "kubali" ikiwa ni sahihi na "kataa" ikiwa si sahihi au inakosa vilinganishi vya tafsiri. Ili kukokotoa Usahihi wa tafsiri, kipimo kifuatacho kilitumika kupima Usahihi (A). Hii inakokotolewa kwa kugawanya idadi ya tafsiri sahihi yaani "kubali" kwa idadi ya jumla ya tafsiri kwa kutumia mlinganyo ufuatao:

A= (correct translations)/(total number of translations) * 100 A= 5981/6016 A=0.99

Kulikuwa na seti za visawe 5981 zilizotafsiriwa kwa usahihi kati ya jumla ya seti za visawe 6016 zilizotafsiriwa, hivyo basi kuweka thamani hizi kwenye mlinganyo hapo juu. Uwasilishaji wa awali ulifikia kiwango cha Usahihi cha 99% kabla ya kufanyiwa uthibitishaji. Baada ya uthibitishaji, masahihisho endelevu na majadiliano kati ya watafsiri na wathibitishaji yalisababisha makubaliano ya pamoja, hatimaye kufikia kiwango cha Usahihi cha 100%. Rasilimali iliyowasilishwa katika utafiti huu inajumuisha leksimu ifuatayo iliyotafsiriwa katika Jedwali 1.

p04-01.png

Jedwali la 1: Takwimu za leksimu zilizotafsiriwa.

Idadi ya lemma, maelezo ya maana, na mifano ni sawa kwa Setswana na Kiingereza kwa kuwa data yote ya chanzo katika mistari yote ya faili zote ilitafsiriwa.

## 5. Hitimisho

## 5.1 Marejeo

Makala haya yaliwasilisha seti mpya ya data ya lugha mbili ya Kiingereza-Setswana ambayo ilitafsiriwa kitaalamu kwa lengo maalum la kikoa cha anga. Seti ya data ilitengenezwa kwa kutumia mbinu ya upanuzi, ikihusisha tafsiri ya kikundi kidogo cha synsets kutoka PWN hadi Setswana. Mchakato wa tafsiri ulifanywa na watafsiri wa kitaalamu wa Setswana walioajiriwa mahususi kwa kazi hii. Kufuatia mchakato wa tafsiri, wazungumzaji asilia wa Setswana, ambao pia walikuwa na ujuzi wa Kiingereza, walithibitisha maudhui yaliyotafsiriwa.

Kwa uthibitishaji, tathmini za mara kwa mara na majadiliano kati ya watafsiri na wathibitishaji yalithibitisha Usahihi wa tafsiri zote, na kufikia kiwango cha Usahihi cha 100%. Ufadhili wa sasa uligharamia tafsiri ya faili zilizobainishwa zilizowasilishwa katika makala hii ndani ya kikoa hiki, bado kuna faili zinazosubiri kutafsiriwa. Juhudi zetu za baadaye zinahusisha kupata ufadhili zaidi ili kuimarisha kwa kiasi kikubwa seti ya data. Zaidi ya hayo, kwa kuwa mchakato wa sasa wa utafsiri ulikuwa wa mikono, tunalenga kuweka nusu-otomatiki taratibu zote za utafsiri na uthibitishaji kwa kutumia programu ya tafsiri inayosaidiwa na kompyuta. Mara baada ya kukamilika, seti ya data itapatikana kwa uwazi kwa watafiti kwa matumizi katika utafiti wa lugha na NLP.

## 6. Marejeo

Batsuren, K., Ganbold, A., Chagnaa, A. & Giunchiglia, F. Building the mongolian wordnet. Proceedings of the 10th global WordNet conference, 2019. 238-244.

Bella, G., Mcneill, F., Gorman, R., Donnaíle, C. Ó., Macdonald, K., Chandrashekar, Y., Freihat, A. A. & Giunchiglia, F. A major wordnet for a minority language: Scottish gaelic. 12th Language Resources and Evaluation Conference, 2020. European Language Resources Association (ELRA), 2812-2818.

Bosch, S. & Griesel, M. African Wordnet: facilitating language learning in African languages. Proceedings of the 9th Global Wordnet Conference, 2018. 306-313.

Bosch, S. E. & Griesel, M. 2017. Strategies for building wordnets for under-resourced languages: The case of African languages. Literator (Potchefstroom. Online), 38, 1-12.

Bourret, R. 1999. Xml And Databases.

Kroeze, J. H., Bothma, T. J. D. & Matthee, M. C. 2010. Constructing An Xml Database Of Linguistics Data. Td: The Journal For Transdisciplinary Research In Southern Africa, 6,139-174.

Lastrucci, R., Dzingirai, I., Rajab, J., Madodonga, A., Shingange, M., Njini, D. & Marivate, V. 2023. Preparing The Vuk'uzenzele And Za-GovMultilingual South African Multilingual Corpora. Arxiv Preprint Arxiv:2303.03750.

Marivate, V., Sefara, T., Chabalala, V., Makhaya, K., Mokgonyane, T., Mokoena, R. & Modupe, A. 2020. Low Resource Language Dataset Creation, Curation And Classification: Setswana And Sepedi. Arxiv Preprint Arxiv:2004.13842.

Mckellar, C. A. & Puttkammer, M. J. 2020. Dataset For Comparable Evaluation Of Machine Translation Between 11 South African Languages. Data In Brief, 29, 105146.

Miller, G. A. 1995. Wordnet: A Lexical Database For English. Communications Of The Acm, 38, 39-41.

Sebolela, F. 2009. The Compilation Of CorpusBased Setswana Dictionaries. University Of Pretoria.

Suárez, O. S., Riudavets, F. J. C., Figueroa, Z. H. & Cabrera, A. C. G. 2007. Integration Of An Xml Electronic Dictionary With Linguistic Tools For Natural Language Processing. Information Processing & Management, 43,946-957.

Superman, S., Batman, B., Catwoman, C., and Spiderman, S. (2000). Superheroes experiences with books. The Phantom Editors Associates, Gotham City, 20th edition.

## 7. Marejeo ya Rasilimali za Lugha

Bosch, Sonja and Griesel, Marissa. 2017. Strategies for building wordnets for under-resourced languages: the case of African languages
