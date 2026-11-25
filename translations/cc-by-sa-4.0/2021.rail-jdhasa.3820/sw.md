> Machine translation (sw) of "Investigating the feasibility of harvesting broadcast speech data to develop resources for South African languages" by Jaco Badenhorst, Febe de Wet, https://upjournals.up.ac.za/index.php/dhasa/article/view/3820, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kuchunguza uwezekano wa kukusanya taarifa za hotuba ili kukuza rasilimali za lugha za Afrika Kusini

Jaco Badenhorst, Febe de Wet

**Taasisi**  
Badenhorst, Jaco  
Voice Computing Research Group, CSIR Next Generation Enterprises and Institutions Cluster, Pretoria, South Africa  
  
de Wet, Febe  
Department of Electrical and Electronic Engineering, Stellenbosch University, South Africa  


## Muhtasari

Data ya kutosha ya lugha ya lengo inabaki kuwa kipaumbele muhimu katika maendeleo ya mifumo ya utambuzi wa sauti wa kiotomatiki (ASR). Kwa mfano, uboreshaji mkubwa katika uundaji wa kielelezo cha akustika ambao usanifu wa kina umefanikiwa kuufikia hivi karibuni kwa lugha zenye rasilimali nyingi unahitaji kiasi kikubwa cha data ya usemi. Zaidi ya hayo, vielelezo vya akustika katika mifumo ya kisasa ya ASR ambavyo vinajumlisha vizuri katika vikoa tofauti kwa kawaida hufunzwa kwa kutumia korasi mbalimbali, si moja au mbili tu. Korasi mbalimbali zenye mamia ya saa za data ya usemi hazipatikani kwa lugha zenye rasilimali chache. Katika karatasi hii, tunachunguza uwezekano wa kuunda rasilimali za ziada za usemi kwa lugha rasmi za Afrika Kusini kwa kutumia utaratibu wa uvunaji wa data nusu-otomatiki. Mitandao ya neuroni ya muda wa kuchelewa ilitumika kuzalisha maandishi ya kiwango cha simu ya data ya mazungumzo yaliyokusanywa kutoka maeneo tofauti.

## Maneno Muhimu

lugha zenye rasilimali chache, uvunaji wa data, utambuzi wa usemi wa kiotomatiki, TDNN-F, urekebishaji wa kikoa

## 1 Utangulizi

Angalau lugha rasmi 10 za Afrika Kusini kwa sasa zinachukuliwa kuwa na uhaba wa rasilimali. Njia mpya za kupanua kwa haraka rasilimali zinazohitajika kwa ajili ya utengenezaji wa ASR zinahitajika ili kufungua uwezo kamili wa kutumia mbinu za kisasa za uundaji modeli kwa lugha hizi. Matangazo ya redio yanawakilisha chanzo kimoja kama hicho cha data ya usemi kisicho na kikomo, ambacho nchini Afrika Kusini bado kwa kiasi kikubwa hakijatumika. Matangazo kwa kawaida huwa na aina mbalimbali za data, ikiwa ni pamoja na hotuba zinazotolewa na wasemaji tofauti katika mitindo mbalimbali ya kuzungumza lakini pia matukio mengi yasiyo ya hotuba. Kwa sababu hii, mradi wa ukusanyaji data ulianzishwa hivi karibuni kwa ushirikiano na Kituo cha Afrika Kusini cha Rasilimali za Lugha za Kidijitali[1] ili kukusanya, kusimamia na kuunda korasi mpya za data ya usemi kutoka kwa data ya matangazo.

Ukusanyaji wa data ya usemi ungeweza kuendeshwa kiotomatiki ikiwa mifumo ya unukuzi wa kiotomatiki ingekuwepo. Hata hivyo, kiwango cha maendeleo ya teknolojia ya ASR nchini Afrika Kusini bado lina njia ndefu ya kwenda kabla ya kuwa chaguo linalowezekana kwa ajili ya uvunaji wa data nchini. Kama hatua ya kwanza kuelekea ufafanuzi wa kiotomatiki, modeli za awali za akustika za kuanzisha kazi ya ukusanyaji zilitokana na korasi iliyopo, ingawa ni ndogo, ya NCHLT Speech corpus (Barnard et al. 2014). Uwezo wa kutumia seti hii ya data kufunza mifano ya sauti inayotegemea mtandao wa neva wa kina ulichunguzwa katika utafiti uliopita ambapo mifumo ya msingi kwa lugha zote 11 rasmi ilitekelezwa kwa kutumia mtandao wa neva wa muda uliogawanywa (TDNN-F) (Badenhorst & de Wet 2019). Makala hii baadaye inaripoti juu ya marekebisho ya mifano hii kwa kutumia data za mazungumzo zilizokusanywa ili kuboresha ubora wa mfumo wa uandishi. Lengo ni kuimarisha uwezo wa mfumo wa kunukuu kiotomatiki usemi kutoka nyanja mbalimbali.

Katika utafiti wa hivi karibuni, Szaszáak & Pierucci (2019) walichunguza njia kadhaa za kurekebisha mifano ya akustiki inayotegemea TDNN ya Kiingereza ili iendane na Kiingereza chenye lahaja ya Uhindi. Walijaribu mikakati tofauti ikiwa ni pamoja na majaribio ya kutumia Ujifunzaji hamishi, kufunza upya kwa urahisi mtandao mzima kwa epoka chache na kutumia urekebishaji wa i-vector katika Kaldi (Povey et al. 2011). Mbali na mtindo wa kuzungumza, tofauti nyingine kati ya data ya mafunzo iliyopo na mifano mipya ya usemi iliyopatikana ni muhimu kuzingatia. Kuhusu urekebishaji wa i-vector, kwa mfano, Vaněk et al. (2019) waligundua kuwa mfano mpya wa simu wa Kicheki uliofunzwa kwa kutumia maneno mafupi yaliyogawanyika ulisababisha utambuzi duni wa maneno marefu zaidi ya simu halisi za kituo cha simu. Uchambuzi zaidi ulifunua makadirio ya takwimu za i-vector na mifano ya TDNN kuwa yasiyo sahihi, na kusababisha kushindwa kwa marekebisho. Kinyume chake, urekebishaji wa i-vector pamoja na mbinu za mabadiliko ya data umethibitishwa kuwa njia yenye ufanisi ya kuboresha mifano ya akustiki inayotegemea TDNN kwa lugha zenye rasilimali ndogo (Kumar & Aggarwal 2020).

Sehemu ya 2 ya karatasi hii inaelezea mchakato wa kukusanya data na changamoto zake zinazohusiana. Sehemu ya 2.1 inaeleza jinsi data mpya zilivyochaguliwa ikifuatiwa na maelezo ya seti za data za majaribio zilizofafanuliwa kwa ajili ya tathmini ya mfumo katika Sehemu ya 3. Lugha mbili kati ya lugha rasmi 11 zilijumuishwa katika uchunguzi wetu: Afrikaans (Afr) na Tshivenda (Ven). Sehemu ya 4 inatoa mipangilio muhimu ya mifumo iliyoboreshwa ya uandishi, wakati Sehemu ya 5 inaelezea taratibu za kutoa sehemu fupi za hotuba kutoka kwa data ya awali. Sehemu ya 6 inatoa matokeo kwa mipangilio tofauti ya mfumo. Majadiliano kuhusu matokeo (Sehemu ya 7) na hitimisho linalofuata (Sehemu ya 8), yanahitimisha makala.

## 2 Ukusanyaji wa Data

Hapo awali, ilitarajiwa kwamba data za utangazaji kutoka vituo mbalimbali vya redio zingetiririshwa kwa seva. Hata hivyo, wakati wa mchakato wa kutambua vyanzo vinavyowezekana vya data, chaguzi nyingine pia ziliibuka. Kwa mfano, baadhi ya vituo vya redio vilijitolea kutoa nakala halisi za maudhui yao huku vingine vikiwa tayari kuhamisha data kupitia kiungo maalum. Uwezekano mwingine uliotambuliwa ulikuwa kuhamisha data kutoka kwa huduma ya mwenyeji wa maudhui. Maelezo mafupi ya hali hizi tatu za kukamata data ni kama ifuatavyo:

1. 1. Kutiririsha data kutoka kwa wingu hadi kwenye hifadhi ya ndani

2. 2. Kuhamisha data kutoka kwa wakandarasi binafsi

3. 3. Kuhamisha data kutoka kwa huduma ya kupangisha.

Kwa kuongezea, seti mbalimbali za data za utangazaji zingeweza kupatikana kutoka kwa kila hali ya kunasa data. Kwa mfano, baadhi ya matangazo huwa na taarifa za habari zilizoandikwa kwa usahihi zenye ubora wa juu wa sauti, lakini kwa idadi ndogo tu ya wasomaji wa habari. Matangazo ya habari yaliyoandikwa yalipatikana tu chini ya hali ya kukamata data 2. Pia kuna kiasi kikubwa zaidi cha data ya sauti isiyoandikwa inayopatikana. Huduma za upangishaji za Afrika Kusini hutoa podikasti nyingi za vipindi vya redio katika lugha zote. Ukusanyaji wa matangazo kutoka kwa wakandarasi binafsi uliathiriwa vikali na janga la Covid-19. Shughuli katika vituo vidogo vya redio zilipungua kwa kuwa vituo hivyo vilikabili magumu mengi mapya. Kituo kimoja chenye makao yake chuo kikuu kililazimika hata kujiondoa kwenye mradi. Kukubaliana juu ya mikataba ya kushiriki data pia kulikuwa mchakato wa polepole sana na unaotumia muda mwingi.

Kwa bahati nzuri, ushirikiano na Iono[2] ulifanikiwa. Makubaliano yaliweza kufikiwa na vituo vichache vya redio vinavyozalisha na kusambaza podikasti kwenye jukwaa la mtandaoni la sauti la Iono. Kwa matokeo hayo, rasilimali zilizokusanywa kwa lugha mbili zilizochunguzwa katika utafiti huu ziliweza kupatikana tu chini ya hali 1 na 3.

## 2.1 Uchaguzi wa maudhui

Kuhusu rasilimali za usemi zinazopatikana kwa lugha za Afrika Kusini, Afr iko katika nafasi nzuri kidogo kuliko baadhi ya lugha nyingine. Ilijumuishwa katika utafiti ili kuendeleza mkakati wa uvunaji na kutoa mtazamo mpana zaidi juu ya uwezekano tofauti, kutokana na aina kubwa ya podikasti. Ven ilichaguliwa kama mfano wa lugha yenye vikwazo vikubwa vya rasilimali. Podikasti zilikuwa chache zaidi na hakukuwa na data za habari za utangazaji zilizokusanywa hapo awali kama ilivyokuwa kwa Afr. Nyenzo ambazo data zilichaguliwa kwa ajili ya uvunaji zilijumuisha mitindo mitatu ya usemaji: usemi wa kusoma (k.m. taarifa za habari), usemi wa mazungumzo (k.m. tamthilia za redio), na hotuba za studio (ujumbe wa mzungumzaji mmoja unaotolewa studio).

Vipengele vilivyozingatiwa kuchagua matangazo kwa ajili ya kuvuna ni pamoja na upatikanaji, mtindo wa kuzungumza na kuwepo au kutokuwepo kwa matukio yasiyo ya hotuba kama vile muziki, matangazo, nk. Pia tulijaribu kupunguza tofauti za kiusikika kati ya data zitakazovunwa na data za NCHLT ambazo modeli za awali za akustika zilitokana nazo. Data za NCHLT zilijumuisha vidokezo vya usemi wa kusoma vilivyo wazi, vyenye kelele ndogo za chinichini. Kwa hiyo, data za usemi wa kusoma kama vile habari au hotuba za studio zilizingatiwa kwanza.

Kwa Afr, data za kutosha zilipatikana kwa hotuba zenye ubora wa studio. Kipindi kimoja cha redio kilikuwa na zaidi ya saa 85 za rekodi zilizo wazi, mzungumzaji mmoja kwa kila kipindi na idadi kubwa ya kutosha ya wazungumzaji katika vipindi vyote. Meta-data ya msemaji pia ilikuwa inapatikana kwa ajili ya vipindi. Muhimu zaidi, podcast za shou hii hazikuwa zikiwa na jingles za kuanza au kumaliza, na muda wa kipindi ulikuwa chini ya dakika tano, jambo ambalo linaupunguza sana hitaji ya usindikaji wa awali na ugawaji. Data iliwakilisha mtindo mpya wa kuzungumza wa hotuba ya wazi, ambayo mtangazaji aliwasilisha kwa njia ya mazungumzo. Data kutoka shoo hii ya redio kwa hiyo iliachwa kuwa inafaa kwa majaribio ya bootstrapping ya NCHLT.

Kwa bahati mbaya, hakunaonyesho la ubora wa sauti uliolingana ulioweza kutambuliwa kwa Ven. Kwa hiyo, seti ya ripoti za habari 1 118 za Ven ambazo zilirekodiwa kutoka redio inayotolewa mtandaoni ilichaguliwa kamaulingano bora zaidi uliopo kwa data ya NCHLT. Kila rekodi ilijumuisha taarifa ya habari ya takriban dakika tano, ambayo inatafsiri karibu masaa 90 ya data. Sauti hiyo pia ilitia ndani viraka vya waandishi wa habari na kengele za habari.

## 3 Data ya majaribio

Takwimu za kiwakilishi za majaribio zilihitajika kutathmini utendaji wa mifumo ya uandishi wa msingi pamoja na athari za kubadilisha mfano wa sauti ili kuboresha uvunaji wa data kwa Afr na Ven. Kwa hiyo seti za mtihani zilichaguliwa kutokana na data zilizopo, kuhakikisha kwamba hali za sauti na mitindo ya kuzungumza ambayo ilitokea katika data iliyochaguliwa kwa ajili ya kuvuna pia iliwakilishwa katika data ya mtihani. Mbali na seti ya majaribio ya Afr News iliyokuwepo, seti nne za majaribio ziliandikwa kwa mikono: Ven News, Afr Messages pamoja na Ven na Afr Drama. Vipindi vya drama vilijumuishwa kwa sababu vinajumuisha hotuba zilizotolewa na wasemaji wengi, hasa kwa mtindo wa mazungumzo na katika hali mbalimbali za akustiki. Muda katika saa na usambazaji wa wasemaji kwa kila seti ya data ya majaribio umetolewa katika Jedwali 1.

Jedwali 1: Muda na taarifa za mzungumzaji za data ya majaribio

p03-01.png

## 4 Uboreshaji wa mfumo

Mifumo ya unukuzi iliyoboreshwa iliundwa ili kuwezesha unukuzi wa kiotomatiki wa maudhui yaliyochaguliwa yaliyotambulishwa katika Sehemu ya 2.1. Katika karatasi hii, sisi ripoti matokeo kwa ajili ya aina zifuatazo tatu za mifumo: 1) Baseline, 2) Text-msingi iliyosafishwa na 3) Mifumo iliyorekebishwa kiakustika. Mifumo ya msingi ilitumia miundo ya awali ya NCHLT TDNN-F (Badenhorst & de Wet 2019) pamoja na muundo wa lugha tambarare wa ARPA unaojumuisha uni-gramu za fonimu zenye uwezekano sawa. Mifumo iliyorekebishwa kulingana na maandishi ilitumia uundaji wa mfumo wa lugha kulingana na korpusi ndogo za maandishi zinazopatikana katika lugha na mifumo iliyobadilishwa kwa sauti ilijengwa kwa kurekebisha mifumo ya sauti ndani ya mipangilio hiyo kwa kutumia data iliyowasilishwa kwa kiotomatiki. Zana ya Kaldi ilitumika kuunda miundo yote ya kiakustika iliyotumika katika utafiti huu. Pia, ilitumiwa kutengeneza pingili na vifaa vya kukuza sauti.

## 4.1 Uboreshaji unaotegemea maandishi

Ili kusanidi mifumo ya unukuzi iliyoboreshwa kwa msingi wa maandishi, modeli za lugha zilijengwa kutoka kwa idadi ya korasi za maandishi zilizozalishwa wakati wa miradi mbalimbali ya awali kwa lugha zote 11. Kutumia maandishi haya katika maendeleo ya mfumo hakikisha kwamba mifumo iliyotengenezwa kwa lugha tofauti ingekuwa inalinganishwa, kwa sababu aina zile zile za maandishi zinapatikana katika kila lugha. Maombi ya TTS yaliyotoka kwenye miradi ya CSIR Lwazi yalionekana kuwa na faida zaidi katika kusanidi mifumo ya msingi ya transkripsheni. Michanganyiko iliyofuata ya vidokezo vya TTS na maandishi kutoka miradi ya CSIR NCHLT Speech[3], CTexT NCHLT Text (Puttkammer et al. 2014a,b), na CTexT Autshumato (McKellar & Puttkammer 2020, Groenewald & du Plooy 2010) pia ilitathminiwa. Jedwali 2 linaonyesha idadi ya alama za maneno yasiyorudiwa (N=1) kwa kila maandishi katika Afr na Ven. Kwa kuongezea, hesabu za 2-gramu za neno (N=2) hutoa mtazamo fulani juu ya mfuatano wa maneno na jumla ya idadi ya tokeni (T) katika kila ripoti ya maandishi juu ya ukubwa wa korasi.

Thamani katika Jedwali la 2 zinaonyesha kwamba korasi ya maandishi ya Afr Lwazi TTS ina maneno zaidi ya kipekee (12 447) kuliko maelezo ya data ya NCHLT Speech. Jedwali pia linaonyesha kwamba ukubwa wa msamiati kwa korasi ya maandishi ya NCHLT Text ni karibu mara nne ya ule wa korasi ya maandishi ya Lwazi TTS. Ingawa sehemu ya Afr ya mkusanyiko wa maandishi sambamba wa Autshumato ina idadi sawa ya maneno na mkusanyiko wa maandishi wa NCHLT, ukubwa wa msamiati wake ni mdogo kwa kiasi kikubwa (maneno 30 440 ya kipekee).

Kinyume chake, mkusanyiko wa maandishi wa Ven Lwazi TTS ulikuwa na maneno 3 488 tu ya kipekee, maneno machache kuliko maelezo ya data ya usemi ya NCHLT. Ingawa mkusanyiko wa maandishi wa NCHLT ulikuwa na msamiati zaidi ya mara saba ya maandishi ya Lwazi TTS, ikilinganishwa na sehemu ya Afr, ukubwa wa msamiati ulikuwa karibu nusu ya idadi ya maneno ya kipekee katika Afr. Jumla ya idadi ya maneno ya mkusanyiko wa maandishi wa Ven NCHLT ilikuwa takriban milioni 1. Hata hivyo, maandishi makubwa zaidi yanaweza kujumuisha maneno zaidi ya nje ya lugha kuliko rasilimali ndogo za maandishi za TTS zilizoratibiwa. Majina sahihi na istilahi za Kiingereza zinazotokea katika maandishi ya NCHLT Ven zinaweza kuchangia ukubwa mkubwa wa msamiati.

Mifumo ya ASR yenye msamiati unaotokana na maandishi machache haiwezi kutabiri maneno ya nje ya msamiati (OOV) katika data ya majaribio. Ili kuelewa vizuri zaidi athari za maneno ya OOV kwenye matokeo ya mfumo uliorahisishwa kulingana na maandishi, Jedwali 3 linafupisha viwango vya OOV kwa TTS, NCHLT Speech, NCHLT Text pamoja na mchanganyiko wa maandishi ya NCHLT Text na TTS (Txt Corp + TTS). Ni wazi kwamba kutabiri data ya habari kwa kutumia maandishi finyu ya TTS (hasa katika kisa cha Ven) kungejumuisha makosa zaidi kutokana na kiwango kikubwa zaidi cha OOV cha seti hizi za data. Thamani zinaonyesha maneno machache sana ya OOV kwa korasi kubwa zaidi ya Maandishi ya NCHLT. Zaidi ya hayo, msamiati wa maandishi haya unazalisha viwango vya chini sawa vya OOV kwa seti zote mbili za data za majaribio za habari na drama.

## 4.2 Uboreshaji wa sauti

Mitindo tofauti ya kuzungumza katika data ya utangazaji inahitaji uboreshaji wa mifano ya akustika. Katika kazi hii, mbinu ya urekebishaji ilitegemea kufunza upya mfano wa awali wa NCHLT, lakini kuweka i-vekta za NCHLT bila kubadilika. Hii ilimaanisha kwamba i-vectors kwa ajili ya data ya marekebisho pia zilizalishwa kwa kutumia NCHLT i-vector extractor.

Njia hiyo ilijumuisha mpango wa kurekebisha mfano wa TDNN-F wenye hatua mbili. Kwa data ya kurekebisha, tulitumia transcriptions za kiotomatiki za mifumo iliyorekebishwa kulingana na maandishi ya 6-gram iliyotengenezwa kwa data mpya. Hatua ya kwanza ya mapishi ya urekebishaji ilizalisha upya mpangilio wa mafunzo wa modeli ya awali, lakini badala ya kukamilisha mchakato iliacha mpangilio wa mafunzo katika hali ambayo hatua ya pili ya mafunzo ingeweza kutumika. Hatua ya pili kwa hiyo ni hatua ya urekebishaji, ikifunza upya modeli ya kawaida (ya epoka nne) kwa epoka ya ziada, sasa kwa kutumia data ya urekebishaji. Ili kuwezesha mafunzo ya modeli na uchimbaji wa sifa wa kawaida, upatanishi wa trifoni na uvurugaji wa data ulitumika kwa data zote za NCHLT na za urekebishaji. Modeli za awali za NCHLT zilitumika kufanya upatanishi wa trifoni.

Kwa kufanya mafunzo tena, ukali wa mafunzo ya kufaa uliudhibitiwa, kwa kurekebisha kiwango cha kujifunza kwa mizunguko ya mafunzo ya epoki ya mwisho na si idadi ya mizunguko (au mafunzo kwa epoki nyingi zaidi). Kimsingi, vizingiti vya kawaida vya kiwango cha ujifunzaji vya mwanzo na mwisho vya mapishi ya TDNN-F katika epoka nne za awali za mafunzo viliachwa kwenye mpangilio uleule, vikiwekea kanuni ya mafunzo mipaka hiyo. Kwa mafunzo ya epoka ya mwisho, vizingiti sawa na kizingiti cha chini cha mafunzo (0.000020 na 0.000015 mtawalia) vilitumika. Hii ilizuia algoriti kutumia kiwango cha ujifunzaji kilicho karibu na mpangilio wa chini kwa marudio yaliyosalia ya mafunzo.

Jedwali la 2: Ulinganisho wa ukubwa wa msamiati kwa vyanzo vya data za maandishi

p05-01.png

Jedwali la 3: Viwango vya maneno nje ya msamiati (kama asilimia) vya maandishi tofauti kutokana na data ya majaribio

p05-02.png

## 5 Uchimbaji wa data

Kama ilivyosemwa katika Sehemu ya 2.1, uvunaji wa data kwa kawaida unahitaji ugawaji wa sauti. Mifumo ya ASR huzoezwa kwa sehemu fupi za usemi, bila kutaja matukio yasiyo ya kawaida kama vile porojo na muziki. Katika utafiti huu, mbinu mbili tofauti za kugawanya zilitumika. Iliyokuwa ya kwanza, mbinu inayotegemea diarisation ya mzungumzaji, iliruhusu ugunduzi wa kiotomatiki wa mwanzo wa habari ndani ya rekodi za Ven za dakika 10. Mbinu ya pili ya utambuzi wa kimya inayotegemea upatanishaji wa Kaldi ilitumika kwa data zote za mavuno za Afr na Ven. Ugawaji wa kutosha uliwezekana kwa lebo za kimya zilizotambuliwa zenye muda wa sekunde 0.1 au zaidi. Vipande vilivyotengenezwa vilikuwa na muda kati ya sekunde 5 na 15.

## 5.1 Ugawaji

Ili kutambua mwanzo wa habari (baada ya sauti ya habari), tulitumia algoriti ya heuristiki. Heuristiki iliyotumika ilitumia utekelezaji usio na usimamizi wa kutambua wasemaji, kama ilivyotekelezwa katika maktaba ya Python ya chanzo wazi kwa uchambuzi wa ishara za sauti (Giannakopoulos 2015). Kutumia utambuzi wa wasemaji kwenye kurekodi kila moja na kuweka idadi iliyobainishwa awali ya makundi kuwa na lebo za wasemaji watatu na wanne, mtawalia, ilisababisha makundi yanayoweza kutengwa. Thamani nyingine za vigezo zilizochaguliwa za heuristic zilifahamishwa na uchambuzi mfupi uliofanywa hapo awali kwenye sehemu za seti ya majaribio ya habari za Ven zilizogawanywa kwa mikono. Kama ilivyotangazwa kwenye Jedwali 1, vipengele vya msomaji wa Habari za Ven vilikuwa na muda wa jumla wa takriban dakika 33 na wastani na wastani wa muda wa vipengele ulikuwa takriban sekunde 38. Hilo lilimaanisha kwamba sehemu ya kawaida ya magazeti ya habari yaweza kuwa karibu sekunde 40 au zaidi. Baadaye, vitambulisho vya makundi ya wasemaji wa kurekodi mpya vilithibitishwa ili kuangalia kama sehemu hizo ndefu ziligunduliwa ndani ya sekunde 120 za kwanza za kila kurekodi. Kwa 44% ya kurekodi, hakukuwa na ugunduzi wowote, kwa hivyo muda wa chini wa kipengele ulipunguzwa hadi sekunde 20 badala yake. Hii ilipunguza zaidi kiwango cha kutokugundua hadi 12% ya kurekodi. Kwa kuzingatia matokeo haya, hatua zifuatazo za heuristiki ziliendeshwa kuchagua kipengele cha kwanza cha habari mwanzoni mwa kurekodi:

1. 1. Chagua tu vipande vinavyoanza angalau sekunde mbili baada ya kuanza kurekodi, kwani ukaguzi ulionyesha kuwa vipande marefu vinavyoanza wakati wa sekunde sifuri kwa kawaida vilikuwa na muziki.

2. 2. Chagua sehemu zenye muda wa chini wa sekunde 25 pekee.

3. 3. Kokotoa mwingiliano wa muda kati ya sehemu zilizoundwa na diarisation ya lebo za wasemaji watatu na wanne kwa sekunde 180 za kwanza za sauti.

4. 4. Kwa vipande vyovyote vinavyogongana vilivyotambuliwa wakati wa Hatua ya 3, weka muda wa kuanza kuwa ule wa kipande cha kwanza chenye mgongano wa 50% au zaidi.

5. 5. Kata faili za sauti ili kila faili ianze kwenye muda uliosasishwa wa kuanza.

Kutumia hatua zilizo hapo juu kulihakikisha kwamba kwa 90% ya rekodi nyakati za kuanza kwa habari zinaweza kutambuliwa. Uchunguzi wa eneo ulithibitisha kuwa habari za kuaminika zinaanza.

## 5.2 Sehemu uteuzi

Rekodi kamili za taarifa za Ven zilijumuisha vipande vya habari, ambavyo baadhi yake vilikuwa na Kiingereza au lugha nyingine. Zaidi ya hayo, baadhi au sehemu ya milio ya habari inaweza kujumuishwa katika sehemu kwa kuwa habari hazikuanza tu, bali pia zilimalizika kwa mlio na muziki. Mbali na mambo hayo, nakala za kwanza za pingili zinatia ndani makosa ya kubandika majina. Kwa hakika, utafiti wa awali uliosababisha uundaji wa modeli ya awali ya kiakustika ya Kiafrikana uliangazia umuhimu wa uteuzi wa kiakustika kwa data ya mafunzo ya usemi isiyo kamili, kwa kutumia alama za programu ya kidinamiki inayotegemea fonimu (PDP). Kwa hiyo, majaribio ya urekebishaji yaliyofanywa katika utafiti huu yalifanywa kwa kujumuisha kwanza sehemu hizo za sauti zilizoonyesha alama bora za PDP kutokana na vikoa vipya vya utangazaji. Ili kufanikisha hili, uteuzi wa sehemu ndogo ya data ya marekebisho ulifanyika. Mbinu ya ufundi wa PDP huhitaji nakala mbili za sehemu ileile ya sauti. Nukuu moja kwa kawaida hutolewa na utambuzi huru wa fonimu (kwa kutumia modeli ya lugha inayotegemea kabisa mfuatano wa lebo za fonimu). Nukuu ya pili inatoka kwa mfumo bora zaidi, ulioboreshwa zaidi wa utambuzi.

Ili kuunda korasi mpya za usemi kutoka kwa data iliyochaguliwa (Sehemu ya 2.1), mifumo bora ya unukuzi kiotomatiki ilitumika kunukuu kila sehemu ya sauti itakayokusanywa. Kwa kila sehemu, kura ya mwisho ya chama cha PDP ilikadiriwa pia. Katika utafiti huu, mifumo iliyoboreshwa ya mwisho wakati mwingine ilitegemea utambuzi wa neno (angalia Kielelezo 2) wakati wowote viwango vya chini vya makosa vingeweza kupatikana kwa njia hii.

Jedwali 4: Viwango vya makosa ya mifumo ya msingi na iliyoboreshwa ya maandishi

p06-01.png

## 6 Matokeo

Ili kujaribu utendaji wa uandishi, kila moja ya seti za data za majaribili ziliandikwa na mifumo ya uandishi iliyoelezwa katika Sehemu 4.1. Viwango vya makosa ya fonimu vilivyofuata (PERs) vilihesabiwa vikijumuisha tu lebo za fonimu za usemi wakati wa ukadiriaji. Jedwali 4 inaonyesha utendaji uliopatikana kwa ajili ya aina mbili za mifumo: 1) unukuzi wa muundo wa lugha wa ARPA unaotegemea fonimu tambarare na 2) mifumo inayotumia modeli za lugha za ARPA za 6-gram zinazotegemea fonimu ikipewa data ya maandishi. Katika mkakati wa kurudia, mifumo tofauti inayotegemea ARPA ilijengwa kwa mchanganyiko wa data ya maandishi. Thamani za PER katika Jedwali 4 zinaakisi mifumo bora ya 6-gram pamoja na modeli za sauti za NCHLT. Mifumo bora tu ya maandishi ya 6-gram iliyorekebishwa katika kila lugha ilichaguliwa. Hii ilimaanisha kwamba mfano wa lugha ya gramu 6 ulitokana na maandishi ya TTS kwa mifumo ya Afr na kutoka kwa mchanganyiko wa TTS na NCHLT Text corpus katika kesi ya Ven.

Kwa kutumia mifano ya lugha ya 6-gram, mifumo ilizalisha PERs chini sana kwa seti zote za data za majaribio za Afr na Ven. Vivyo hivyo, matokeo ya mchanganyiko wa TTS na korasi ya maandishi ya NCHLT yanawasilishwa kwa Ven. Matokeo yanaonyesha PER za juu zaidi (zaidi ya 40%) kwa data ya Drama ikilinganishwa na data ya News. Katika kesi yoyote, mifumo ya ARPA ya 6-gram hutoa uboreshaji ikilinganishwa na kutumia tu mfumo wa transkripsheni wa ARPA usio na mstari.

p07-01.png

Kielelezo 1: PER za Ven kwenye data ya drama kwa maandishi mbalimbali na ukubwa wa muktadha

Ukubwa wa muktadha wa gramu 6 wa modeli za lugha ulichaguliwa kama kiwango ambapo viwango vya chini vya PER vinaweza kufikiwa katika lugha zote mbili kwa TTS na seti kubwa zaidi za data ya maandishi. Kielelezo 1 kinaonyesha mfano wa uchambuzi kama huo. Viwango vya chini vya makosa vilipimwa kadiri ukubwa wa muktadha wa modeli za lugha za n-gramu ulivyoongezeka hadi kufikia kiwango cha takriban miktadha ya fonimu ya gramu 6 au 7. Isipokuwa kwa maandishi ya NCHLT Speech, ugunduzi huu ulijumlishwa vizuri kwa michanganyiko mbalimbali ya maandishi.

p07-02.png

Kielelezo cha 2: Kulinganisha viwango sawia vya PER kwa mifumo ya utambuzi wa fonimu na neno

Kwa kuvutia, PER za chini hata zaidi zinaweza kupatikana kwa seti nyingi za majaribio wakati utambuzi wa neno unapotumika kwanza. Kwa kutumia mifano ya lugha ya 3-gram, transcriptions za kiwango cha maneno zilizotolewa kiotomatiki zilibadilishwa kuwa lebo za phone kwa kutumia kamusi ya matamshi. Kutokana na mpangilio katika Kielelezo 2 inaonekana kwamba maandishi ya simu kwa seti za mtihani zenye viwango bora vya maandishi, kama vile zile za data ya Habari na Ujumbe, zilinufaika zaidi kutokana na kutambuliwa katika kiwango cha neno. Tu kwa data za majaribio za Ven Drama zenye PER ya zaidi ya 40% utambuzi wa neno haukuwa na faida.

Jedwali la 5: Kulinganisha PER kati ya msingi wa NCHLT na mifano iliyofunzwa kwa kubadilika kwenye vipindi vya Afr Messages.

p07-03.png

Baadaye, marudio ya kwanza ya uboreshaji wa akustika yalitumika kutathmini manufaa yanayowezekana ya urekebishaji wa mfano wa akustika. Jedwali la 5 linaonyesha athari ambayo matumizi ya mifano ya akustika iliyorekebishwa pamoja na mifano ya lugha ya fonimu yalikuwa nayo kwenye utambuzi. Katika jaribio hili, karibu seti nzima ya data ya Afr Messages (masaa 71, ukiondoa data ya majaribio) ilitumika kama data ya urekebishaji, ikichukulia kila kipindi cha dakika 3 kama sehemu moja ya sauti. Kwa uwazi, PERs zilipunguzwa zaidi kwa data ya mtihani wa Afr Messages kutoka kwa mtindo huo huo wa kuzungumza. Matokeo haya yalilinganishwa vyema na yale yaliyozalishwa pia kwa kutumia takriban masaa 18 ya data ya urekebishaji, ikiwa alama za PDP zilitumika kuchagua sehemu fupi za data iliyonakiliwa vizuri kutoka seti kubwa kwa mafunzo ya kubadilika kwanza.

## 7 Mjadala

Miundo ya lugha iliyojengwa kutoka msamiati wa korasi kubwa na mchanganyiko wa maandishi ilizalisha viwango vya chini kiasi vya OOV. Maadili katika Jedwali 3 yalionyesha kuwa viwango vya OOV vya chini ya 10% katika seti za data za mtihani zinazowakilisha mitindo tofauti ya kuzungumza kutoka kwa vyanzo tofauti (habari, ujumbe wa studio na vipindi vya tamthilia) vinaweza kupatikana. Ingawa ukweli huu unaweza kuonekana kuwa wa kuahidi kwa upande wa ufunikaji wa msamiati, PER zinazotumia miundo hii ya lugha hazikuonyesha upunguzaji huo muhimu wakati wa kutumia maandishi makubwa zaidi. Badala yake, PERs chache sana zingeweza kupatikana kwa kutumia mifano ya lugha ya simu yenye ufikivu wa simu wa kutosha, kama vile mifano inayotegemea maombi ya TTS yaliyosawazishwa kwa fonetiki pekee. Maboresho madogo tu yalionekana kwa Ven ambapo ukubwa wa maandishi ya maelekezo ya TTS ulikuwa mdogo sana kuliko ule wa Afr. Uchambuzi katika Kielelezo 1, ambapo maandishi ya drama ya Ven yalichambuliwa unatoa mfano. Inarekodi tofauti ya PER ya chini ya 1% kwa kutumia maandishi ya ziada zaidi ya maandishi ya TTS. Kwa hiyo, kutia ndani msamiati zaidi wa maandishi mengine (badala ya yale ambayo tayari yametiwa ndani) huenda yasinufaishe ujenzi wa mifumo ya simu iliyojengwa kwa vifaa vya kukuza sauti kama ilivyofikiriwa kwanza. Kunukuu seti za majaribio za mtindo wa usemaji wa mazungumzo kulizalisha makosa mengi zaidi kuliko data ya majaribio ya kusoma habari. Kwa uvunaji wa data unaoendelea, kosa la juu kiasi linapendekeza kwamba maendeleo zaidi ya akustika yanahitajika ili kupunguza PER, kabla ya kujenga mifano ya lugha ya msamiati mkubwa zaidi. Mtazamo mwingine juu ya makosa ya unukuzi unatokana na uchambuzi wa ukubwa wa muktadha wa mifano ya lugha ya fonimu. Miktadha mikubwa ya fonimu ilichukua jukumu muhimu kupunguza PER.

Ilionyeshwa pia kwamba kwa mifano ya lugha ya fonimu yenye muktadha mkubwa, upunguzaji mkubwa zaidi wa PER ulipatikana kwa seti za majaribio ambapo PER za chini zilikuwa zimepatikana hapo awali. Ugunduzi huu unaunga mkono wazo kwamba mifumo ya msamiati mkubwa inahitaji mifano bora (inayolingana vizuri) ya akustika. Kwa msingi, manufaa ya kutia ndani habari za nyenzo za maandishi kwa kutumia lugha katika mifumo ya kunakili huongezeka kadiri mfumo wa kukuza sauti unavyoboreshwa. Majaribio ya awali ya kutambua maneno yalitoa makosa makubwa ya uandishi kwa data ya majaribio. Kama ilivyo kwa lugha zenye rasilimali nyingi, ambapo mifano ya akustika inaweza kuendelezwa kwa data ya kutosha ya sauti, kujumuisha maandishi makubwa zaidi kunapaswa, katika siku zijazo, kutoa mchango mkubwa kufikia utambuzi sahihi zaidi.

Mkakati wa uanukiaji uliotumika ulizalisha kwa mafanikio kupungua kwa PER kwa kiasi kikubwa, ukiwa na uanukiaji wa eneo la data ya lengo ya ujumbe wa studio mpya ya Afr. Wasemaji katika kipindi cha redio kilichochaguliwa walizungumza kwa namna ya mazungumzo zaidi. Maoni kama hayo yalifanywa kuhusiana na lugha ya Ven, ambapo kujipatanisha na eneo la habari pia kulitokeza maendeleo fulani, lakini kama ilivyotarajiwa, mabadiliko hayo hayakuboresha kweli kweli utambuzi wa drama ya Ven. Matokeo haya yalithibitisha uwezo wa mbinu hiyo ya kubadilika kulingana na hali na kutengeneza miundo ya sauti ya TDN-F kwa ajili ya maeneo mapya ya kukuza sauti.

Kwa kushangaza zaidi, urekebishaji huu pia unaweza kufikiwa kwa kutumia chini ya saa 20 za data, kuchagua sehemu za sauti zilizopata alama bora zaidi za PDP. Ingawa inatarajiwa kwamba mbinu hiyo itazalisha matokeo sawa inapotumika kwa data kutoka lugha nyingine, kazi ya baadaye bado inapaswa kulenga mafunzo ya kurudia kwa kutumia manukuu yaliyosasishwa yanayozalishwa. Kwa kuzingatia uwiano usio na usawa wa data ya mafunzo ya NCHLT iliyonakiliwa kwa usahihi dhidi ya sampuli za data za urekebishaji zilizonakiliwa kiotomatiki, ilikuwa muhimu pia kuendelea kutumia i-vectors za NCHLT zilizoundwa na badiliko mahususi kwa msemaji linalohitajika kwa mafunzo ya TDNN-F. Zaidi ya hayo, mkakati huu una faida ya kuwa huru kwa msemaji na hauhitaji lebo za msemaji kwa data ya urekebishaji. Kama sampuli za data za marekebisho zilizoandikwa kwa usahihi zaidi zinapatikana, zinapaswa kubadilishwa ili kujumuisha marekebisho sahihi ya i-vector.

## 8 Hitimisho

Matokeo ya utafiti huu yanaonyesha kuwa ufanisi wa kujumuisha data ya maandishi kama rasilimali ya lugha wakati wa maendeleo ya mfumo wa uandishi wa kiotomatiki inategemea hali ya mifano ya sauti inayotumika kwa ajili ya kukusanya. Ingawa kujumuisha maandishi yenye uwiano mzuri ndani ya lugha (kama vile seti ya vidokezo vya TTS) ni muhimu, miundo ya akustika inayolingana vizuri na kikoa cha akustika cha data ya usemi itakayovunwa, pia inahitajika. Kujumuisha kiasi kikubwa zaidi cha maandishi kwa ajili ya uundaji wa modeli za lugha basi kunakuwa na ufanisi zaidi. Ingawa mbinu iliyotajwa hapo juu ingezalisha data zaidi, kupunguza makosa ya uandishi ingeongeza mavuno ya data ya mazungumzo iliyoelezwa vizuri. Inapendekezwa kuwa njia mpya za kuboresha maendeleo ya mfano zinapaswa kutafutwa. Urekebishaji bora wa akustika hatimaye unapaswa kuwezekana kwa seti za data za urekebishaji zenye manukuu sahihi ya kutosha.

Matokeo ya utafiti huu yalithibitisha kwamba mbinu ya sasa ya uvunaji wa data ingeweza kutumika kwa lugha zote rasmi za Afrika Kusini. Ujumlishaji mzuri kwa data ya usemi kutoka kikoa kipya, unaojumuisha mtindo mpya wa kuzungumza, ulipatikana kwa Afr. Pili, mbinu hiyo hiyo inaweza kurudiwa kwa mafanikio katika lugha ya Kiven yenye vikwazo vingi zaidi vya rasilimali, ikitoa PER kwenye data ya habari za utangazaji ambazo zilikuwa sawa na PER iliyopatikana kwa data ya Afr kutoka mtindo mpya wa kuzungumza.

## Maelezo

[ 1] https://www.sadilar.org/, SADiLaR imefadhiliwa na Idara ya Sayansi na Innovation (DSI) ya serikali ya Afrika Kusini.

[2] https://https://iono.fm/ Iono inadumisha jukwaa la sauti mtandaoni linalotoa podikasti na huduma za utiririshaji wa moja kwa moja wa sauti kwa vyanzo mbalimbali.

[3] Maandishi ya NCHLT Speech yalijumuisha vidokezo vya mafunzo vya ASR.

## Shukrani

Kazi ya kuvuna data iliwezeshwa na fedha zilizopokelewa kutoka Idara ya Sayansi na Ubunifu kupitia Kituo cha Afrika Kusini cha Rasilimali za Lugha za Kidigitali (SADiLaR).

## Marejeo

Badenhorst, J. & de Wet, F. (2019), 'The usefulness of imperfect speech data for ASR development in low-resource languages', Information 10(9). URL: https://www.mdpi.com/2078-2489/10/9/268

Barnard, E., Davel, M. H., van Heerden, C., de Wet, F. & Badenhorst, J. (2014), The NCHLT speech corpus of the South African languages, in 'in Proc. SLTU', St Petersburg, Russia.

Giannakopoulos, T. (2015), 'pyaudioanalysis: An open-source python library for audio signal analysis', PloS one 10(12).

Groenewald, H. J. & du Plooy, L. (2010), 'Processing parallel text corpora for three South African language pairs in the Autshumato project', AfLaT 2010 p. 27.

Kumar, A. & Aggarwal, R. K. (2020), 'Hindi speech recognition using time delay neural network acoustic modeling with i-vector adaptation', International Journal of Speech Technology pp. 1-12.

McKellar, C. A. & Puttkammer, M. J. (2020), 'Dataset for comparable evaluation of machine translation between 11 south african languages', Data in brief 29, 105146.

Povey, D., Ghoshal, A., Boulianne, G., Burget, L., Glembek, O., Goel, N., Hannemann, M., Motlicek, P., Qian, Y., Schwarz, P. et al. (2011), The Kaldi speech recognition toolkit, in 'IEEE 2011 workshop on Automatic Speech Recognition and Understanding (ASRU)', number EPFL-CONF-192584, Hilton Waikoloa Village, Big Island, Hawaii.

Puttkammer, M., Schlemmer, M., Pienaar, W. & Bekker, R. (2014a), 'NCHLT Afrikaans text corpora'.

Puttkammer, M., Schlemmer, M., Pienaar, W. & Bekker, R. (2014b), 'NCHLT Tshivenda text corpora'.

Szaszáak, G. & Pierucci, P. (2019), A comparative analysis of domain adaptation techniques for recognition of accented speech, in '2019 10th IEEE International Conference on Cognitive Infocommunications (CogInfoCom)', IEEE, pp. 259-264.

Vaněk, J., Michálek, J. & Psutka, J. (2019), Tuning of acoustic modeling and adaptation technique for a real speech recognition task, in 'International Conference on Statistical Language and Speech Processing', Springer, pp. 235-245.
