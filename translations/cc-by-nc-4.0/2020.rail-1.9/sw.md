> Machine translation (sw) of "Building Collaboration-based Resources in Endowed African Languages: Case of NTeALan Dictionaries Platform" by Elvis Mboning, Daniel Baleba, Jean Marc Bassahak, Ornella Wandji, https://aclanthology.org/2020.rail-1.9/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kujenga Rasilimali Zinazotegemea Ushirikiano katika Lugha za Afrika Zilizojaliwa: Mfano wa Jukwaa la Kamusi la NTeALan

Elvis Mboning, Daniel Baleba, Jean Marc Bassahak, Ornella Wandji

**Taasisi**  
Elvis MBONING1 2, Daniel BALEBA1, Jean Marc BASSAHAK1,Ornella WANDJI1  
NTeALan1, ERTIM (INALCO)2  
Tradex Makepe - Douala (Cameroon), 2 rue de Lille - Paris (France)  
  


## Muhtasari

Katika muktadha ambapo rasilimali na zana za NLP za programu huria katika Lugha za Afrika ni chache na zimetawanyika, ni vigumu kwa watafiti kuziweka Lugha za Afrika kikamilifu katika algoriti za sasa za akili bandia. Ilianzishwa mwaka 2017, kwa lengo la kujenga jamii za wachangiaji wa kujitolea kuhusu lugha za asili za Afrika na / au lugha za kitaifa, utamaduni, teknolojia za NLP na akili bandia, shirika la NTeALan limeanzisha mfululizo wa majukwaa ya ushirikiano wa wavuti yaliyokusudiwa kuruhusu jamii zilizotajwa hapo juu kuunda na kusimamia rasilimali zao za leksikografia. Katika makala haya, tunawasilisha kwa upande mmoja matoleo ya kwanza ya majukwaa matatu: API ya REST ya kuhifadhi rasilimali za leksikografia, jukwaa la usimamizi wa kamusi na jukwaa shirikishi la kamusi; kwa upande mwingine, tunaelezea muundo wa data uliochaguliwa na kutumika kufunika rasilimali zetu. Baada ya kufanya majaribio na kamusi chache na baadhi ya maoni ya watumiaji, tunaamini kwamba mbinu na majukwaa ya ushirikiano pekee yanaweza kujibu kwa ufanisi uzalishaji wa rasilimali nzuri katika lugha za asili za Afrika na / au lugha za kitaifa.

## Maneno Muhimu

Lugha za Afrika, NLP, rasilimali, uksimishaji, ushirikiano, kamusi, leksikografia, programu huria

## 1. Utangulizi

Lugha ina jukumu muhimu katika kufafanua utambulisho na ubinadamu wa watu binafsi. Kama Tunde Opeibi (Tunde, 2012) alivyosema "Katika Afrika, ushahidi unaonyesha kuwa lugha imekuwa kigezo chenye nguvu sana cha utambulisho wa kitaifa wa kikabila, na uaminifu wa kikabila ukizidi maslahi ya kitaifa". Hadi sasa, bara la Afrika lina zaidi ya lugha 2000, zaidi ya theluthi mbili kati yazo zikiwa na rasilimali chache. Miongoni mwa sababu zinazotetea maoni hayo, tunaweza kuorodhesha:

Ukosefu wa sera imara ya kiisimu inayopendelea lugha hizi

Kutokuwepo kwa lugha nyingi kati ya hizi katika nafasi ya kidijitali (mitandao ya kijamii, majukwaa ya mtandaoni au ya simu, n.k.) na katika mfumo wa elimu (ulioelezewa hasa na (Tadadjeu, 2004) na (Don, 2010))

Ukosefu wa rasilimali za lugha za Afrika zilizofunguliwa chanzo (za maandishi na za kusema), zana za Usindikaji wa Lugha Asilia (NLP) na/au Uelewa wa Lugha Asilia (NLU) zinazopatikana kwa lugha nyingi hizi

Ukosefu wa wataalamu wa NLP, NLU na Akili Bandia (AI) waliofunzwa barani na ambao ni wabobezi katika lugha hizi

Ukosefu wa rasilimali za lugha za Afrika zilizo wazi (maandishi na mdomo) na zana za NLP na/au NLU zinazopatikana kwa lugha nyingi za Afrika

Kwa miaka kadhaa sasa, teknolojia za akili bandia, zikiwemo zile za NLP, zimechangia pakubwa katika kuibuka kiuchumi na kisayansi kwa lugha zenye rasilimali chache katika nchi za kaskazini, kutokana na upatikanaji wa rasilimali za leksikografia na terminografia kwa wingi wa kutosha. Lugha za Afrika hazinufaiki sana na zana hizi za akili kwa sababu ya uhaba wa data zilizopangwa na majukwaa shirikishi yanayopatikana kwa ajili ya kujenga misingi ya maarifa ya kiisimu na kiutamaduni. Ili kukidhi hitaji hili na kukamilisha mipango ambayo tayari ipo barani ((De Pauw et al., 2009), (Mboning, 2016), (Vydrin, Valentin and Rovenchak, Andrij and Maslinsky, Kirill, 2016), (Abate et al., 2018), (Mboning, Elvis and NTeALan contributors, 2017), (Mangeot and Enguehard, 2011), (De Schryver, 2010), chama cha Afrilex (Ruthven, 2005)), na pia ile kutoka vituo vya utafiti vya Afrika, Ulaya na Amerika, NTeALan (Teknolojia Mpya za Lugha za Afrika), iliyobobea katika utengenezaji wa zana za NLP na NLU kwa ajili ya kufundisha lugha na tamaduni za Afrika, imeanzisha jukwaa shirikishi na la programu huria kwa ajili ya kujenga rasilimali za kileksika kwa lugha za kitaifa za Afrika. Lengo letu kuu ni kushughulikia lugha zinazozungumzwa katika nchi za Afrika zinazosema Kifaransa.

Makala hii inaangazia ukuzaji wa rasilimali za isimu na utamaduni za Kiafrika, ambao ni hatua muhimu ya kuanzia kwa maendeleo ya kiteknolojia ya kila lugha ya Kiafrika. Tunaelezea jukwaa letu shirikishi la rasilimali za lugha linaloangazia data za kileksikografia. Jukwaa hili limegawanywa katika vipengele vitatu: API ya programu huria ya kuhifadhi nakala za kamusi (back-end), jukwaa la usimamizi wa kamusi na jukwaa shirikishi la kamusi (frontsend).

## 2. Muktadha wa kazi

## 2.1. Mradi wa NTeALan

Iliundwa mwaka 2017 na kusimamiwa na wasomi na Jumuiya ya Wasomi wa Afrika, NTeALan ni Chama kinachofanya kazi kwa ajili ya utekelezaji wa zana za kiteknolojia zenye akili, kwa ajili ya maendeleo, uendelezaji na ufundishaji wa lugha asilia na/au za kitaifa za Afrika. Malengo yetu ni kuweka katika mfumo wa kidijitali, kulinda na kuendeleza lugha hizi zisizo na rasilimali za kutosha kupitia zana za kidijitali na Akili Bandia. Kwa kufanya hivyo, tungependa kuwatia moyo na kuwasaidia vijana wa Kiafrika, ambao wako tayari kujifunza na/au kufundisha lugha zao za kwanza, na hivyo kujenga kizazi kipya cha Waafrika wanaofahamu umuhimu na changamoto za kumiliki lugha na tamaduni za bara hili. Lengo lingine la kazi za NTeALan ni kutoa data kwa watafiti wa ndani na kampuni ambayo ingewasaidia kuboresha ubora wa huduma na kazi zao, hivyo kujenga rasilimali za lugha za Afrika za chanzo wazi ni moja ya miradi yetu kuu.

## 2.2. Mbinu ya NTeALan: mfano unaotegemea ushirikiano

Njia yetu inategemea kabisa mfano wa ushirikiano (Holtzblatt na Beyer, 2017). Tungependa kuwaruhusu Waafrika wachangie ukuzi wa lugha zao wenyewe za mama, chini ya usimamizi wa wataalamu na wasomi wa lugha za Kiafrika. Mfano wetu unahusisha kuanzisha jamii kadhaa: jamii ya wazungumzaji wa lugha hizi, jamii ya wataalamu asilia (wadhamini wa maarifa ya kimapokeo, kitamaduni na kiisimu), jamii ya wasomi waliobobea katika teknolojia za kiisimu za Kiafrika na jamii ya washirika wa kijamii, kitaasisi na wa umma. Zikiwa zimepangwa kwa lugha, jumuiya hizi hufanya kazi pamoja kwa lengo moja: kujenga rasilimali za kiisimu na kitamaduni muhimu kwa mahitaji ya utafiti, kiteknolojia na kielimu.

Mbinu hii inatumika kwa miradi yote ya ndani ya NTeALan, hasa kwa majukwaa ya rasilimali za lugha, pamoja na uwakilishi wake.

## 3. Majukwaa ya rasilimali za lugha ya NTeALan

Mifumo yetu ya rasilimali za lugha imegawanywa katika sehemu tatu: muundo mmoja huru na miundo miwili inayotegemea. Usanifu huru hautumikii mbili nyingine tu bali pia miradi yote ya NTeALan kama inavyoonyeshwa kwenye kielelezo 1.

p02-01.png

Kielelezo 1: NTeALan APIs na miundombinu ya huduma

Miundo mitatu ni matokeo ya mchakato mbili wa awali zinazotegemea aina ya ingizo (faili za PDF au picha). Mchakato wa kwanza unahusisha uwekaji kidijitali na wa pili ufuatanishaji:

uwekaji kidijitali: kamusi katika muundo wa karatasi au wa kidijitali kama vile PDF, TIFF, PNG kwa OCR (Utambuzi wa Herufi kwa Macho) huwekwa kidijitali kwa Ujifunzajikina (Breuel, 2008); tunazifanyia ufafanuzi ili kuboresha OCR (tazama kielelezo 2); kila viambajengo vya makala (neno lililoangaziwa, tafsiri, uwekaji muktadha, unyambuaji, lahaja tofauti, n.k.) hugunduliwa kiotomatiki, hutolewa na kugeuzwa kuwa XML katika muundo wa XND (XML NTeALan Dictionary) baadaye.

mfululizo: kamusi katika muundo wa nje (toolbox, XML, TEI, LMF) zinabadilishwa kiotomatiki kuwa muundo wa XND, kwa kutumia zana zetu za NLP za ndani.

Katika visa vyote viwili, tunaanza na kamusi ya karatasi au ya kidijitali na kuishia na kamusi ya XML katika muundo wa XND. Hii ya mwisho ni muundo wa kuingiza data wa kipekee kwa miundo mitatu yetu. Ikumbukwe kwamba michakato miwili iliyoelezwa hapo juu inadhibitiwa na wanaisimu wa NTeALan pekee. Katika kazi ya baadaye zitafunguliwa kwa wachangiaji wasio wanachama.

p02-02.png

Kielelezo 2: Jukwaa la ufafanuzi wa kamusi za NTeALan linalotegemea zana ya Ocropy na linalotumika kufunza modeli ya Ujifunzajikina kwa OCR. Jukwaa hili liko chini ya leseni ya Creative Commons BY-NC-SA 3.0: (http://dico-edit.ntealan.net)

Kielelezo 2 kinaonyesha mfano wa ufafanuzi (kutoka kamusi ya lugha mbili ya Duala-Kifaransa) uliofanywa na wanachama wa NTeALan.

## 3.1. Muundo huru

Jukwaa huru ni jukwaa la REST API linalotegemea wavuti. Inaweza pia kuitwa hifadhidata ya usimamizi wa rasilimali za kileksikografia. Tovuti hii imejengwa ili kuwa rahisi na rahisi kupatikana, programu hii ya mtandao inahifadhi na kusambaza rasilimali zote za leksikografia zinazotokana na kazi ya ushirikiano iliyofanywa na wanachama wa jamii ya NTeALan na wachangishi wa nje.

Muundo huru hutumia zana zetu za ndani za NLP kusimamia muundo wa faili ya XND ili kuwapa watumiaji ufikiaji rahisi wa michango yao (angalia sehemu ya 4.). Shughuli zilizoorodheshwa kwenye jedwali 3.1. zimeidhinishwa kwa ufikiaji wazi kwa kila aina ya mtumiaji.

p03-01.png

Jedwali 1: Haki za watumiaji kwa kila operesheni katika REST API ya NTeALan

Muundo huu unahifadhiwa kwenye https://apis.ntealan.net/ntealan/dictionaries na unapatikana chini ya leseni ya Creative Commons BY-NC-SA 3.0. Haki za ufikiaji, kwa kila aina ya mtumiaji, zinaelezwa katika jedwali 3.1..

## 3.2. Miundombinu inayotegemea

Miundombinu tegemezi ni majukwaa ya wavuti yanayotumia data iliyohifadhiwa katika hifadhidata ya REST API ya pamoja (jukwaa huru), ambayo huimarishwa na washiriki. Wanaweza pia kufanya shughuli zilizoelezwa kwenye jedwali 3.1. kupitia kiolesura chao cha wavuti.

## 3.2.1. Jukwaa la usimamizi wa kamusi

Kama jukwaa la wavuti, jukwaa la usimamizi wa kamusi ni toleo la usimamizi wa kielelezo la jukwaa la REST API. Inawezesha wanachama wa NTeALan (watumiaji) kusimamia kamusi, makala, watumiaji, maoni ya watumiaji, maombi ya upatikanaji na rasilimali za utamaduni.

p03-02.png

Kielelezo 3: Jukwaa la usimamizi wa kamusi kwa ajili ya kusimamia rasilimali za kileksikografia za aina nyingi na lugha nyingi katika Lugha za Afrika. Jukwaa hili liko chini ya leseni ya NTeALan: (https://ntealan.net/dictionaries-platform)

Tofauti na majukwaa mawili yaliyotajwa hapo juu, hili si jukwaa la Programu huria. Inaweza kutumiwa pekee na jamii za NTeALan, katika ushirikiano wa moja kwa moja kati ya wanachama wa timu ya isimu na wanachama wengine wa chama.

## 3.2.2. Jukwaa shirikishi la kamusi

Kamusi shirikishi pia ni jukwaa la wavuti (angalia kielelezo 4) ambalo huboresha rasilimali za kileksikografia kutoka kwa REST API. Inawapa wanachama wa jumuiya za NTeALan (angalia sehemu ya 2.2.), hasa zaidi wazungumzaji asilia na wataalamu wa Lugha za Afrika, fursa ya kujenga, kwa mbinu shirikishi, rasilimali kama vile leksimu, vielelezo vya matukio ya kitamaduni, sauti na video (mchakato wa kurekodi) kulingana na taarifa za semantiki zinazotolewa na makala yaliyoandikwa katika lugha zao za asili. Rasilimali hizi zilizoshirikiwa huhifadhiwa na zinapatikana kwa uhuru kwa wachangiaji wote kupitia REST API yetu.

p03-03.png

Kielelezo 4: Kamusi shirikishi za kushiriki rasilimali za leksikografia za aina nyingi na lugha nyingi katika Lugha za Afrika. Jukwaa hili liko chini ya leseni ya Creative Commons BY-NC-SA 3.0: (https://ntealan.net)

## 4. Rasilimali za lugha za NTeALan na uwakilishi

Rasilimali zetu nyingi za kamusi ni kamusi za lugha mbili za zamani (kutoka kwenye kazi za walinguisti) zinazopatikana kwenye wavuti kama chanzo wazi au chini ya leseni ya Creative Commons BY-NC-SA 3.0. Marejeleo ya vyanzo asilia na ya toleo za NTeALan yanatolewa kwenye majukwani yetu yote ambapo pia yanaweza kuchunguzwa.

## 4.1. Kamusi za rasilimali za lugha za Afrika

Kwa sasa tunapangisha na kushiriki kamusi 7 za lugha mbili kwenye API yetu ya REST. Ingawa idadi ya vifungu hadi sasa bado ni ndogo (kutoka 3 hadi 11,500), jumuiya inayokua inashiriki kila siku katika kujaza. Jedwali 4.1 linaonyesha takwimu za sasa za rasilimali zinazosimamiwa na API yetu.

p04-01.png

Jedwali la 2: Hali ya sasa ya rasilimali za lugha za NTeALan zilizohifadhiwa katika REST API

Hata kama nyenzo za sasa hazitoshi na zinafunika lugha 7 tu, bado tunaridhika na msisimuko unaoanza kutokea katika jamii ya watumiaji nyuma ya majukwaa yetu. Hata hivyo, tungependa kubaini kama miundombinu yetu tofauti inalingana na rasilimali zilizotengenezwa, mzigo wa watumiaji waliounganishwa na mahitaji ya watumiaji. Mara tu tunapokamilisha majaribio kwenye jukwaa, hatua zinazofuata zitakuwa ni kueneza mfano huo kwa lugha nyingine za Afrika zilizojumuishwa katika kamusi zetu.

## 4.2. Maelezo ya muundo wa XML wa NTeALan

Kila jukwaa la usimamizi wa rasilimali za kileksika lina modeli yake ya kuunda na kuwasilisha data (mfano wa (Mangeot, 2006) na (Benoit and Turcan, 2006)). Fomati ya XML (haswa viwango vya TEI na LMF XML) leo ni chaguo la marejeleo kwa muundo wa data za lugha, leksikografia na terminografia. Hata hivyo, inadhihirika kuwa viwango hivi mara nyingi havirekebishwi kuwakilisha na kuelezea Lugha za Afrika. Kwa hakika, matukio kadhaa ya kiisimu kama vile dhana ya ngeli, usimamizi, tafsiri na ujanibishaji wa vibadala vya lahaja, na dhana ya midoko hayashughulikiwi kwa uwazi, licha ya mahitaji yote yaliyoelezwa kuhusiana na suala hilo.

Baada ya kuchambua muundo wa lugha ya Bantu kutoka Cameroon (Yemba, inayozungumzwa katika eneo la Magharibi), tuliamua kufafanua mfano wa muundo wa XML, ambao muundo wake ulitokana na familia kuu 4 za lugha za Afrika, yaani familia ya Afro-Asia, familia ya Niger-Kordofan, familia ya Nilo-Saharan na familia ya Koisan. Kanuni tatu ziliongoza uchaguzi wetu: uwakilishaji, kurahisisha na upanuzi:

uwakilishaji: kanuni hii inalenga kuelezea data ya lugha katika kiwango kidogo zaidi cha kimofosintaksia yaani vijenzi vya neno (kiambishi awali+kiini+kiambishi tamati) na vijenzi vya kirai kama vile upatanisho wa ngeli (1/2, 2/4, 5/7).

urahisishaji: tunajaribu kuchagua majina ya lebo za XML na lugha za kimataifa ambayo ni rahisi kueleweka kwa jamii za utafiti. Pia, tuliamua kutumia uwakilishaji wa XML ulio mstari, wenye wazazi wachache na watoto wengi katika nodi ileile ya mzazi.

upanuzi: tungependa kutoa washirika wa nje uwezekano wa kupanua muundo mkuu wa XML wetu kwa kuongeza nodi mpya (nodu za watoto au nodu za wazazi), kulingana na kipengele kinachowakilishwa.

Tunabuni data yetu ya kimsingi ya leksikografia kwa nodi ya mzizi inayoitwa <ntealan_dictionary>, ambayo imegawanywa katika nodi ndogo mbili: <ntealan_paratexte> na <ntealan_articles>. <ntealan_paratexte> inaelezea metadata kuhusu toleo/ matoleo ya hati (muktadha wa utayarishaji wa kamusi, maelezo ya chanzo ya waandishi asilia na maelezo lengwa ya XML VERSION). <ntealan_articles> inaelezea makala zote za kamusi (<article>).

Kila makala ina nodi zake ndogo: <entry> (toleo la lahaja linalochakatwa kwa sasa), <category> (kategoria/za kisarufi zinazohusishwa na toleo/ matoleo ya lahaja), <translations> (tafsiri zinazohusishwa na lahaja, <examples> (muktadha wa matoleo ya lahaja). Kielelezo 5 kinaonyesha uwakilishi huu wa data.

p04-02.png

Kielelezo 5: Uwakilishi wa XML wa kamusi za NTeALan

Upanuzi wa muundo wa makala na washiriki ni uwezekano tu katika node za chini, kama ilivyooneshwa katika picha 5, 6 na 7, ambayo inamaanisha kwamba mfano wa makala unaweza kurekebishwa kila kiwango cha node (kinarejelewa kwa kutumia kitambulisho).

Muundo wetu wa XND haujakusudiwa kuwekwa viwango ili kutumika kama marejeleo. Kinyume chake, hutumika kama muundo wa kati, unaohitajika na zana zetu za NLP za ndani na na miundo sanifu maarufu. Kwa kweli mara tu muundo wa nje unapofanywa kwa mfululizo katika XND, tuna uwezekano wa kubadili habari kuwa muundo mwingine kama ule wa kamusi za TEI na LMF. Vipengele hivi vitapatikana katika kiwango cha API hivi karibuni.

p05-01.png

Picha 6: Mfano wa Xmlisation ya nomino ya makala mbā iliyochukuliwa kutoka kamusi ya Yemba-Kifaransa

p05-02.png

Kielelezo 7: Sampuli ya Uxmlisation wa makala ya vitenzi lebaka iliyotolewa kutoka kamusi ya Yemba-Kifaransa.

## 5. Matatizo yaliyojitokeza na changamoto za baadaye

Utekelezaji wa majukwaa haya ya kwanza ulituwezesha kutambua changamoto kuu. Katika miaka ijayo, tutakazia fikira masuala hayo, tukiyatajirisha majukwaa yetu na kujaribu kuyaboresha kwa ajili ya siku zijazo.

## 5.1. Matatizo yaliyokutana

Kwa sasa tunakabiliwa na matatizo mawili makuu kwenye majukwaa ya NTeALan:

ya kwanza ni idadi ndogo ya washiriki na rasilimali za IT zisizotosha. Wafanyakazi hawana wataalamu wote wanaohitajika (katika NLP, NLU na Lugha za Afrika) kwa malengo yaliyokusudiwa na matamanio makubwa. Kazi ya sasa inafanywa hasa na washiriki 4 wenye bidii wa shirika hilo. Kuhusu rasilimali za TEHAMA, hatuna miundombinu thabiti ya kutosha ya TEHAMA (seva, zana za uwandani, n.k.) kama inavyohitajika na kazi hiyo ya utafiti kuhusu Lugha za Afrika.

la pili ni ukosefu wa ufadhili wa kufanya shughuli zetu za utafiti kuhusiana na uundaji wa zana za NLP na NLU. Ufadhili wetu unatokana hasa na michango ya wanachama wa chama, ambayo haitoshi kwa kuzingatia matamanio yetu ya sasa.

## 5.2. changamoto zaidi

Tamaa zetu ni kubwa na zitahitaji wafanyakazi wengi zaidi (wataalamu wa lugha) na mali za kifedha. Tungependa:

Zaidi ya yote, watie moyo wataalamu wengi zaidi katika lugha na tamaduni za Kiafrika kutoka nchi mbalimbali za Afrika na katika ulimwengu wote mzima, wajiunge na ushirika wetu kwa sababu sisi pamoja twaweza kukabili magumu kwa urahisi.

Kutafuta ufadhili kutoka kwa taasisi za kibinafsi na za umma, wafanyabiashara, makampuni, ambao wanaweza kusaidia kazi yetu ya utafiti na maendeleo endelevu ya programu zetu za ufundishaji wa Lugha za Afrika zenye rasilimali duni.

Boresha na kuboresha majukwaa yote yaliyopo na kuyafungua zaidi kwa jumuiya ya kisayansi na kwa wasemaji wa lugha zilizotiwa ndani. Kwanza kabisa tutazingatia: jukwaa huru la ufundishaji wa lugha na utamaduni, Wakala Msaidizi wa Mazungumzo kwa Ufundishaji wa Lugha na jumba la makumbusho la kitamaduni la mtandaoni kwa ajili ya kulinda urithi wa kijamii na kitamaduni wa Afrika.

Kuimarisha ushirikiano wetu na taasisi za kijamii na kitamaduni za Afrika, vyuo vikuu, maabara za utafiti na makampuni yaliyobobea katika maeneo yetu ya utafiti. Lengo ni kuunda jamii za wataalamu katika lugha, masuala ya kitekinolojia na kitamaduni kotekote katika bara hilo.

De Schryver (De Schryver, 2010, p.587) tayari alijiuliza kuhusu mambo mahususi ya leksikografia ya kielektroniki katika siku zijazo kwa maneno haya: "Mustakabali wa leksikografia ni wa kidijitali, hilo ni hakika. Lakini jinsi mustakabali huo wa kidijitali utakavyokuwa, ni jambo lisilo na uhakika zaidi.". Kazi hii inaonyesha wazi kwamba mfano unaotegemea ushirikiano, pamoja na majukwaa yenye nguvu ya NLP, inaweza kutoa maana kwa hali ya baadaye ya leksikografia ya elektroniki barani Afrika.

## 6. Hitimisho

Katika makala hii, tumeelezea majukwaa ya NTeALan na uwakilishi wake wa data ya XND, na tumeonyesha jinsi ushirika ulivyo muhimu siku hizi, kwa ajili ya ujenzi wa rasilimali na zana nzuri za lugha na leksikografia kwa lugha za Afrika. Tunaongoza, ndani kwa kushirikiana na washirika wetu wa kitaaluma (idara ya lugha na fasihi ya Afrika ya Chuo Kikuu cha Douala na timu ya ERTIM ya INALCO (Ufaransa)), shughuli nyingi za utafiti katika Akili Bandia, NLP, na NLU, ili kuchangia katika ukuaji wa viwanda wa Lugha za Afrika. Ni dhahiri kwamba mengi yamesalia kufanywa, hata hivyo matokeo ya kwanza ya utafiti wetu yamethibitika kuwa muhimu sana kwa matumizi yetu (wakala wa mazungumzo NTeABot, jukwaa la kujifunzia, jukwaa la tafsiri, n.k.) na yanaweza kutumiwa na watafiti wengine: hii inajumuisha data (katika miundo tofauti ya kawaida kama XML, TEI, LMF, XND) na zana. Tunaamini, kama Tunde Opeibi (Tunde, 2012, uk.289) alivyosema, kwamba "utofauti wa lugha barani Afrika bado unaweza kuwa kichocheo cha kukuza maendeleo ya kiutamaduni, kijamii, kiuchumi, kisiasa na kiteknolojia, pamoja na ukuaji endelevu na utawala bora barani Afrika."

## 7. Shukrani

Majukwaa haya yalitengenezwa na Elvis Mboning (REST API na jukwaa la Usimamizi wa Kamusi), Daniel Baleba (Kamusi shirikishi) na Jean-Marc Bassahak (Ubunifu wa Wavuti na violesura). Miradi ya NTeALan kwa kweli inaungwa mkono na Wizara ya Posta na Mawasiliano ya Kamerun, Idara ya lugha na fasihi ya Afrika ya Chuo Kikuu cha Douala (Kamerun), timu ya utafiti ya ERTIM ya INALCO na mfumo wa Fractals (Ufaransa). Tunaweza pia kuwataja: Profesa Jules Assoumou, Shukrani kwa Christian Bonog Bilap, Marcel Tomi Banou, Ntomb David, Ntomb Nicolas, Théophile Kengne, Yves Bertrand Dissake, Juanita Fopa, Damien Nouvel na kwa wachangiaji wengine.

## Maelezo

1 Yaani na Elvis Mboning (Mhandisi wa Utafiti wa NLP katika INALCO) na Jean Marc Bassahak (Mkandarasi, Mbuni wa wavuti na msanidi programu), ambao baadaye walijiunga na Jules Assoumou, Mkuu wa Idara ya Isimu na Fasihi ya Kiafrika katika Chuo Kikuu cha Douala.

2 Hizi zinajumuisha vichanganuzi vya vipashio (tokenizers), vichanganuzi vya lemu (lemmatizers), vichanganuzi vya maandishi na zana za utatuzi wa utata wa kileksika zinazotumika kuchakata korasi za kileksikografia zenye kelele.

3 Mradi huu ulizaliwa kufuatia kazi ya utafiti ya Elvis Mboning katika Chuo Kikuu cha Douala na Chuo Kikuu cha Lille 3 (shahada ya Master): (Mboning, 2016) na (Mboning, 2017). Tunaweza kunukuu kazi nyingine zinazohusiana na uwanja huu kama (Assoumou, 2010), (Mangeot na Enguehard, 2011), (Vydrin et al., 2016), (Maslinsky, 2014), (Nouvel et al., 2016), nk.

4 Kwa lengo hili, tulijenga jukwaa jingine la kusimamia rasilimali ya kileksikografia: [https://ntealan.net/dictionaries-platform].

5 Ingawa matoleo ya kwanza ni ya lugha mbili, kamusi hizi zinakusudiwa kuwa za lugha nyingi, huku kipaumbele kikiwa kwa tafsiri katika lugha zote za kigeni zinazozungumzwa barani Afrika.

6 Kumbuka kwamba hata hivyo inawezekana katika viwango hivi kuongeza urasimi mpya (lebo na sifa) pamoja na madarasa yaliyopo.

## 8. Marejeo

Abate, S. T., Melese, M., Tachbelie, M. Y., Meshesha, M., Atinafu, S., Mulugeta, W., Assabie, Y., Abera, H., Ephrem, B., Abebe, T., Tsegaye, W., Lemma, A., Andargie, T., and Shifaw, S. (2018). Parallel Corpora for bi-lingual English-Ethiopian Languages Statistical Machine Translation. In Proceedings of the 27th International Conference on Computational Linguistics, pages 3102-3111, Santa Fe, New Mexico, USA, August. Association for Computational Linguistics.

Assoumou, J. (2010). Enseignement oral des langues et cultures africaines à l'école primaire. Éditions Clé, Yaoundé, Cameroun, 1st edition.

Benoit, J.-L. and Turcan, I. (2006). La TEI au service de la transmission documentaire ou de la valorisation des richesses patrimoniales : le cas difficile des dictionnaires anciens.

Breuel, T. M. (2008). The OCRopus open source OCR system. Proc.SPIE, 6815.

De Schryver, G.-M. (2010). State-of-the-Art Software to Support Intelligent Lexicography. ResearchGate, page 16.

Don, O. (2010). African languages in digital space. HSRC Press, page 168.

Holtzblatt, K. and Beyer, H. (2017). 7 - Building Experience Models. pages 147-206, January.

Mangeot, M. and Enguehard, C. (2011). Informatisation de dictionnaires langues africaines-français. In journées LTT 2011, page 11.

Mangeot, M. (2006). Dictionary building with the jibiki platform. In Cristina Onesti Elisa Corino, Carla Marello, editor, Proceedings of the 12th EURALEX International Congress, pages 185-188, Torino, Italy, sep. Edizioni dell'Orso.

Maslinsky, K. (2014). Daba: a model and tools for Manding corpora.

Mboning, E. (2016). De l'analyse du dictionnaire yémbafrançais à la conception de sa DTD et de sa réédition sur support numérique. Mémoire Master 1, Université de Lille 3.

Mboning, E. (2017). Vers une métalexicographie outillée : conception d'un outil pour le métalexicographe et application aux dictionnaires Larousse de 1856 à 1966. Mémoire Master 2, Université de Lille 3.

Nouvel, D., Donandt, K., Auffret, D., Maslinsky, K., Chiarcos, C., and Vydrin, V. (2016). Resources and Experiments for a Bambara POS Tagger. Intra Speech, page 14.

Ruthven, R. (2005). The African Association for Lexicography: After Ten Years. Lexikos journal, page 9.

Tadadjeu, M. (2004). African Language Needs in Information and Communication Technology (ICT). page 9.

Tunde, O. (2012). Investigating the Language Situation in Africa. In Language and Law, Language rights, pages 272-293. Oxford Handbooks in Linguistics, Great Clarendon street.

Vydrin, V., Rovenchak, A., and Maslinsky, K. (2016). Maninka Reference Corpus: A Presentation. In TALAf 2016 : Traitement automatique des langues africaines (écrit et parole). Atelier JEP-TALN-RECITAL 2016 - Paris le, Paris, France, July.

## 9. Marejeo ya Rasilimali za Lugha

De Pauw, Guy and Waiganjo Wagacha, Peter and de Schryver, Gilles-Maurice. (2009). The SAWA corpus: a parallel corpus English - Swahili.

Mboning, Elvis and NTeALan contributors. (2017). NTeALan lexicographic African language resources: an open-source REST API. NTeALan Project, distributed via NTeALan, Bantu resources, 1.0.

Vydrin, Valentin and Rovenchak, Andrij and Maslinsky, Kirill. (2016). Maninka Reference Corpus: A Presentation. Speecon Project, distributed via ELRA, Madingue resources, 1.0, ISLRN 613-489-674-355-0.
