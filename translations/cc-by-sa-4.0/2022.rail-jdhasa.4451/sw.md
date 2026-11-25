> Machine translation (sw) of "GiellaLT: an infrastructure for rule-based language technology tool development" by Flammie A Pirinen, Trond Trosterud, Sjur N. Moshagen, Linda Wiechetek, https://upjournals.up.ac.za/index.php/dhasa/article/view/4451, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## GiellaLT: miundombinu ya ukuzaji wa zana za teknolojia ya lugha inayotegemea kanuni

Flammie A Pirinen, Trond Trosterud, Sjur N. Moshagen, Linda Wiechetek

**Taasisi**  
Pirinen, Flammie A  
UiT Arctic University of Norway  
  
Trosterud, Trond  
UiT Arctic University of Norway  
  
Moshagen, Sjur N.  
UiT Arctic University of Norway  
  
Wiechetek, Linda  
UiT Arctic University of Norway  


## Muhtasari

Kwa sasa, ujifunzaji wa mashine unawasilishwa kama suluhisho kuu la teknolojia ya lugha bila kujali kisa cha matumizi na programu, hata hivyo, unahitaji kama hatua ya kuanzia kiasi kikubwa cha data ya kiisimu iliyoratibiwa katika umbo la kielektroniki ambayo inatarajiwa kuwa ya ubora wa juu na uwakilishi wa aina ya matumizi ya lugha ambayo zana zitafuata. Kwa lugha za wachache na za kiasili, hili linaweza kuwa kazi isiyowezekana, kwani nyenzo za kidijitali za ukubwa unaohitajika hazipo na haziwezi kutayarishwa kwa urahisi. Katika makala haya tunawasilisha mbinu ambayo tumeitumia kwa mafanikio kwa miaka mingi kusaidia lugha za kiasili kuishi na kukua katika mazingira ya kidijitali, na tunaelezea uwezo wa mbinu yetu kwa mazingira ya Kiafrika. Suluhisho letu la kiteknolojia ni miundombinu ya bure na Programu huria inayowawezesha wataalamu wa lugha na watumiaji kushirikiana katika kuunda nyenzo za kiisimu kama vile kamusi na maelezo ya sarufi. Kwa kuongezea, tunatengeneza fremu za lugha-independent ili kutengeneza programu hizo kwa ajili ya matumizi yanayohitajiwa na jamii ya lugha.

## Maneno Muhimu

Teknolojia ya lugha inayotegemea kanuni, kibodi, zana za kusahihisha, miundombinu ya teknolojia ya lugha, Teknolojia ya lugha yenye rasilimali chache sana

## Utangulizi

Mbinu za ujifunzaji wa mashine (ML) zimetawala uchakataji wa lugha asilia (NLP) katika miongo miwili iliyopita. Kwa kawaida huhitaji kiasi kikubwa cha data isiyo na kelele, ambayo haipo kwa asilimia 99 ya lugha 7,000 za dunia, ama kwa sababu ya idadi ndogo ya waandishi au kwa sababu ya kanuni za kisasa za kuandika. Hata kama jumuiya ndogo ya lugha kama ile ya Inari Sámi nchini Finland ina tija ya kipekee katika uandishi wa maandishi (maneno 10,533 kwa kila mzungumzaji ikilinganishwa na maneno 1,440 kwa kila mzungumzaji kwa Kiswidi) kiasi cha maandishi kinachopendekezwa kwa mbinu za kawaida za ujifunzaji wa mashine ("Korasi ya maandishi ya maneno bilioni 3.4 ilitumika kwa BERT-Large ya awali, kwa hivyo inafaa kufunza kwa seti ya data ya ukubwa huu."[1]) hakiwezi kufikiwa. Vile vile hutumika kwa jumuiya za lugha zenye wazungumzaji wengi lakini kiwango cha chini cha ujuzi wa kusoma na kuandika katika lugha hii au kukosa tu nyanja za maandishi za lugha au muktadha wa lugha mbili ambapo lugha ya wengi pekee ndiyo inayotumika kama lugha ya maandishi.

Katika makala hii, tunawasilisha miundombinu yetu - GiellaLT - ambayo kwa sasa inashikilia miundo ya lugha kwa zaidi ya lugha 130 na kujenga idadi ya zana za teknolojia ya lugha ambazo ni muhimu kwa jumuiya yoyote ya lugha. GiellaLT inategemea mbadala wa teknolojia ya lugha inayotegemea korasi - teknolojia ya lugha inayotegemea maarifa, inayojulikana pia kama inayotegemea kanuni. Teknolojia hiyo imechaguliwa kwa uwezo wake wa kusaidia lugha zisizo na uwepo wowote wa awali wa kidijitali. Mradi unapokuwa na ufikiaji wa mzungumzaji asilia na mwanaisimu, labda hata katika mtu mmoja yuleyule, zana muhimu zinaweza kutengenezwa. Rasilimali za kidijitali zinakaribishwa daima na zitasaidia kuharakisha kazi ya maendeleo, lakini si hitaji.

Jumuiya ya lugha isiyo na uwepo wa awali wa kidijitali au iliyo na uwepo mdogo pia inahitaji aina tofauti za zana kuliko lugha zilizo na kumbukumbu za maneno bilioni moja. Kila jumuiya ya lugha ni ya kipekee, lakini kwa zile ambazo zina au zinalenga kuwa na mapokeo ya maandishi yaliyowekwa kidijitali, kwa kawaida zana ya kwanza ya kuunda ni kibodi, ikiwa ni pamoja na kibodi za simu za mkononi siku hizi, ili kuweza kuingiza maandishi kwa usahihi na kwa ufanisi. Hakuna ujifunzaji wa mashine unaoweza kuunda mpangilio wa kibodi au kujadili mahitaji ya jumuiya ya lugha.

Miundombinu ya GiellaLT inatoa vipengele vyote vya msingi vya kuanza kazi ya lugha mara moja, kwa kuzingatia teknolojia na suluhisho za Programu huria. Kuna ujumuishaji uliothibitishwa na mifumo na majukwaa mengi yaliyopo, ukiokoa kiasi kikubwa cha muda, fedha, na rasilimali kwa wageni. Hili ni muhimu hasa kwa jumuiya nyingi za lugha za kiasili, ambazo hazingekuwa na rasilimali za kuunda teknolojia za msingi na suluhisho za ujumuishaji zenyewe. Kwa kutenganisha sehemu zisizotegemea lugha na zile zinazotegemea lugha maalum, gharama ya kuunda sehemu zisizotegemea lugha inaweza kushirikiwa na kila mtu, au kubebwa na jumuiya zilizo na rasilimali za kutosha. Kwa kuwa ni Programu huria, pia tunadumisha mbinu inayowezesha jumuiya za lugha kwa njia inayohifadhi umiliki wao wa lugha na data za kiisimu wanazofanyia kazi. Katika muundo wa programu huria, hakuna hatari kubwa kwamba mtu anayefanyia kazi miundo ya lugha atapata tu data za lugha kutoka kwa jamii bila malipo ili kuziuza kwao tena kwa bei ya juu.

Jambo moja la mwisho la kuzingatia ambalo mbinu yetu inayotegemea kanuni inalo juu ya miundo iliyojifunza kwa mashine ni lile la ufanisi: muundo wa lugha wa neva lazima ufunzwe kwenye mfumo wenye angalau GPU moja kwa muda wa siku au wiki na pengine pia uendeshe kwenye vifaa sawia, au ufikiwe kupitia intaneti ya kasi ya juu. Zana za lugha zinazotegemea kanuni zinaweza kukusanywa kwenye kompyuta ya nyumbani ya kiwango cha chini na kuendeshwa ndani ya nchi kwenye simu za mkononi za kiwango cha chini zaidi, jambo ambalo ni karibu hitaji la lazima kwa zana nyingi za waandishi. Kama nyongeza ya ziada, mbinu hiyo ina ufanisi wa nishati jambo ambalo miundo ya neva kwa sasa bado inapambana nalo, taz. Treviso et al. (n.d.).

## GiellaLT - Miundombinu ya lugha nyingi kwa kila mtu

Msingi wa kazi iliyowasilishwa katika makala haya ni miundombinu ya lugha nyingi ya GiellaLT, ambayo inajumuisha lugha nyingi ambazo zina data chache au hazina kabisa, hali adimu katika ulimwengu wa NLP. Kila kitu kinachozalishwa katika miundombinu ya GiellaLT kiko chini ya leseni huria na wazi na kinapatikana kwa uhuru. Kopora zinapatikana kwa leseni huria pale inapowezekana. Miundombinu imegawanywa kwa mtazamo wa msimbo katika mashirika matatu ya GitHub: GiellaLT yenye data za lugha kwa kila lugha, Divvun yenye msimbo usiotegemea lugha kwa ajili ya miundombinu, na Giellatekno kwa ajili ya miundombinu ya korasi. Zana za mtumiaji wa mwisho zinazotolewa na kikundi cha Divvun ziko divvun.no & divvun.org, na zana zinazotolewa na kikundi cha Giellatekno ziko giellatekno.uit.no, zote zikiwa katika Chuo Kikuu cha Aktiki cha UiT-Norway.

Sharti la msingi la kuunda zana za lugha katika GiellaLT ni tahajia ambayo ama imefafanuliwa mapema au inafafanuliwa wakati wa kutengeneza zana za lugha. Upatikanaji wa kamusi iliyochapishwa ni wa msaada mkubwa, na hata zaidi ikiwa inapatikana kwa njia ya kielektroniki. Maelezo yaliyopo ya kisarufi pia ni ya msaada mkubwa, lakini si sharti.

Tunajenga mifumo inayojumuisha data za kileksika pamoja na kanuni zinazotawala mofofonolojia, sintaksi, na semantiki pamoja na idadi ya taarifa mahususi kwa matumizi, kwa mfano kanuni za kisarufi za kukagua sarufi, kanuni za kifonetiki za Text-To-Speech (TTS), na kadhalika.

Kazi inayotegemea lugha hufanywa ndani ya miundombinu katika hazina mahususi za lugha, vipengele na masasisho yasiyotegemea lugha ambayo yanafaa kwa lugha zote huunganishwa kwa njia ya nusu otomatiki kadri yanavyotengenezwa. Ili kuhakikisha kwamba vipengele na masasisho yasiyotegemea lugha na ya pamoja hayaharibu data zilizopo za lugha au kushusha ubora wa zana za lugha, tunatekeleza utaratibu mkali wa upimaji unaotegemea ujumuishaji endelevu. Mfumo wa sasa wa upimaji ni mchanganyiko wa uwekezaji wetu wa muda mrefu katika upimaji ndani ya miundombinu kwa ndani kwa watengenezaji—ukichanganywa na upimaji wa kisasa wa kiotomatiki unaotolewa kwa sasa na vitendo vya GitHub.

Sehemu nyingine ya falsafa ya GiellaLT ni ile ya rasilimali zinazoweza kutumika tena na zenye malengo mengi, linganisha. Antonsen et al. (2010). Hii ni kweli kwa kazi yetu yote, kuanzia ukusanyaji wa korasi hadi ushirikiano kati ya lugha na ni muhimu kwa uendelevu wa kazi katika lugha za kiasili na zenye rasilimali chache ambapo muda wa kazi wa wataalamu wa lugha ni haba na wa thamani.

Licha ya ukosefu wa data, kuna zana za kiwango cha juu katika GiellaLT kama vile tafsiri ya mashine (MT), TTS ya maandishi-kwa-sauti, vikagua tahajia na sarufi, na zaidi, ambazo zimepokelewa vizuri sana katika jamii za lugha. Hii haingewezekana bila ya kwanza kuendeleza zana za msingi kama vile keyboards, morphological analysers, na spell checkers.

## GiellaLT kwa Lugha za Afrika

Katika sehemu hii, tunapitia zana za NLP ambazo miundombinu ya GiellaLT hutoa kwa watumiaji wa lugha. Tunaorodhesha hapa kikundi kidogo cha programu ambazo tumeona zinafaa zaidi kwa jamii za lugha tunazofanya nazo kazi, katika kazi ya usaidizi wa lugha na uhuishaji: Kibodi na ukaguzi na usahihishaji wa tahajia na sarufi, kamusi na tafsiri ya mashine. Pia tunatoa zana za teknolojia ya usemi, hata hivyo, hili halijajadiliwa kwa kina katika makala hii, kwa mfano, taz. Hiovain-Asikainen & Moshagen (2022). Zaidi ya hayo, rasilimali za kiisimu zinazotumiwa kama msingi wa zana za mtumiaji wa mwisho kama vile vichanganuzi vya mofolojia, ni rasilimali muhimu kwa kazi ya ubinadamu wa kidijitali kuhusu lugha: ugawaji wa maneno, uchanganuzi wa mofosintaksia na ufafanuzi kwa mfano.

Lugha ambazo Microsoft na Google hawatengenezei suluhu za teknolojia ya lugha ziko hatarini kwa mabadiliko ya kiteknolojia. Programu zenye msimbo funge kwa lugha kama hizo zina hatari ya kutotumika tena kadiri vichakataji maneno au mfumo wa uendeshaji unavyobadilika. Makampuni yaliyo nyuma ya programu hizi yanaweza basi ama kufilisika au kubadilisha mwelekeo wao kwenda maeneo mengine. Kwa kuwa ni chanzo kilichofungwa, kazi iliyo nyuma ya suluhisho hizi inapotea kisha. Suluhu ya GiellaTL kwa hili ni kuweka programu ya kiisimu na programu inayohitajika kwa kuiunganisha katika matumizi mbalimbali kama Programu huria. Hii inamaanisha kwamba rasilimali adimu zinaweza kutumika tena, bila hatari ya kupoteza kazi. Ufikiaji wazi wa programu isiyotegemea lugha pia hurahisisha kujenga suluhu kwa lugha zinazotumika kidogo.

## Kibodi

Lugha nyingi za Afrika huandikwa kwa alfabeti ya Kilatini. Nyingi kati yazo zina herufi zilizo nje ya masafa ya A-Z na hata zaidi, zina mifumo mipana ya alama za matamshi. Juu ya hayo kunakuja changamoto ya jinsi sauti za kubofya zinavyoshughulikiwa katika lugha za San, kwa alama za herufi zinazofanana na alama ya uakifishaji.

Kila moja ya lugha hizi inahitaji mpangilio wake wa kibodi. Wakati zana za teknolojia ya lugha kwa kiwango kinachoongezeka zinapounganishwa na mipangilio ya kibodi, lugha zinazotumia herufi A-Z pekee zitahitaji kibodi yao wenyewe ili kuamsha zana za teknolojia ya lugha kwa lugha husika.

Ili kukabiliana na changamoto hii, miundombinu ya GiellaLT inakuja na mkondo wa kutengeneza kibodi na kuzisakinisha pamoja na zana zake za teknolojia ya lugha kwenye majukwaa tofauti. Kiini cha mkondo huo ni zana ya kbdgen, ambayo kwayo mtu anaweza kubainisha kwa urahisi mpangilio wa kibodi katika faili ya YAML, akiiga mpangilio halisi wa kibodi. Orodha ifuatayo inaonyesha ufafanuzi wa mpangilio wa kibodi ya simu ya Android kwa Lule Sámi. Zana hii inachukua ufafanuzi huu na metadata kidogo na kuiunganisha na msimbo wa programu ya kibodi ya Android, inakusanya kila kitu, inatia sahihi kisanii kilichojengwa na kuipakia kwenye Duka la Google Play, tayari kwa majaribio.

kbdgen inasaidia kutengeneza programu za kibodi au vifurushi vya kisakinishi kwa Android, iOS, macOS, Windows, Linux (X11 na m17n) na Chrome OS. Kuna usaidizi wa majaribio wa kutengeneza faili za XML za Hifadhi ya Data ya Lugha ya Pamoja (CLDR), faili za Michoro ya Vekta Inayoweza Kupanuka (SVG) kwa utatuzi wa haraka wa mpangilio, na vipitishio vya hali ya mwisho kwa mifano ya makosa ya kuandika vibaya kwa vitufe vya jirani. Kisakinishi cha Windows kinajumuisha zana ya kusajili lugha zisizojulikana, ili hata lugha ambazo hazijawahi kuonekana kwenye kompyuta ya Windows zitasajiliwa ipasavyo, na hivyo kuifanya iwe tayari kusaidia zana za uhakiki na zana nyingine za usindikaji wa lugha.

p04-01.png

Kielelezo 1: Picha ya skrini ya kibodi ya Kisami cha Lule kwa Android, kama ilivyofafanuliwa katika orodha iliyo hapo juu.

Programu ya kibodi ya simu pia inajumuisha usaidizi wa vikagua tahajia (tazama baadaye), ili kusaidia mchakato wa uandishi.

## Vichanganuzi vya kimofolojia na kamusi

Bila kuhesabu Kiswahili na lugha nyingine chache, Lugha za Afrika zina rasilimali chache sana za korasi. Lugha nyingi za Afrika pia zina miundo changamano ya kimofolojia. Hii inahusu hasa lugha za Khoisan na Lugha za Kibantu (nyingi) kusini na mashariki pamoja na lugha za Kiafrika-Kiasia kaskazini-mashariki. Lugha kama hizo, zikiwa na mofolojia changamano na rasilimali chache au hakuna za maandishi, zitakuwa tatizo kwa teknolojia ya lugha ya kawaida.

Hakuna tekinolojia nyingi ya upotoshaji ambayo imebuniwa kwa ajili ya lugha hizo. Vighairi vikuu ni kazi za Arvi Hurskainen kuhusu Kiswahili (kwa muhtasari na marejeleo, ona Hurskainen (2018)) na kazi za Laurette Pretorius, Sonja Bosch na wengine kwa Kizulu, Kixhosa na Lugha nyingine za Afrika Kusini (k.m. Pretorius & Bosch (2009a), Pretorius & Bosch (2009b)).

Miundombinu ya GiellaLT ilitengenezwa ili kukabiliana na hali hii. Changamoto ya kutengeneza teknolojia ya lugha kwa lugha changamano na zilizotengwa za maeneo ya nchani ya duara ilitatuliwa kwa kuwakilisha muundo wa kimofolojia kama transducers za hali finyu. Vichanganuzi vya kimofolojia ndio kiini cha zana zetu za teknolojia ya lugha, vimeandikwa kwa namna ya Mofolojia ya Hali Finiti Beesley & Karttunen (2003), Lindén et al. (2013). Hii inamaanisha kiutendaji kwamba uundaji wa modeli za lugha unategemea kamusi na sheria zilizoandikwa kwa mkono za mofotaktiki pamoja na uchakataji wa kisintaksia na kisemantiki inapohitajika, k.mf. kwa Sarufi ya Vikwazo Karlsson (1990), Didriksen (2010). Ingawa uandikaji wa modeli zinazotegemea sheria kwa ajili ya uchakataji wa lugha kwa sasa unapuuzwa kuwa wa polepole mno na unaohitaji nguvu kazi kubwa, kwa uzoefu wetu kazi ya muda wote kwenye kamusi na sheria za mofotaktiki kwa miezi mitatu inatosha kuunda modeli za lugha zinazoweza kutumika zenye ufunikaji wa juu. Ikiwa mtu analinganisha hili na kazi inayohitajika kuunda na kusimamia korasi za ujifunzaji wa mashine, miezi mitatu haimfikishi mtu mbali sana katika uundaji wa korasi za gigaword.

Familia kuu za lugha zinazoshughulikiwa katika miundombinu ya GiellaLT ni Uralic, Algonquin, EskimoAleut na lugha mbalimbali za Siberia. Kuhusu Lugha za Afrika, hadi sasa tumejaribu tu na nane kati yazo[2]. Modeli ya lugha ya Kisomali iko mbali zaidi ya kiwango cha alpha, ina karibu mashina 16000 na mofolojia ya msingi. Modeli nyingine za lugha zote ni ndogo kiasi, lakini katika baadhi ya matukio, bado zinatoa taswira ya jinsi changamoto kuu za kimofofonolojia zinavyoweza kutatuliwa.

## Zana za uhakiki

Zana za uhakiki ni kipande muhimu cha programu kusaidia uandishi wa lugha sanifu, yaani, vikagua na visahihishi vya tahajia na sarufi. Vichanganuzi vya kimofolojia vilivyoelezwa hapo juu ni msingi wa karibu kila zana nyingine inayoweza kujengwa kwa kutumia miundombinu ya GiellaLT, ikijumuisha zana za uhakiki.

## Speller

Kikagua tahajia kinajumuisha sehemu mbili kimsingi: kamusi ya kimofolojia iliyo na taarifa kuhusu kama neno fulani ni sehemu ya lugha au la. Inachukuliwa na kikagua tahajia kwamba maneno yasiyomo katika kamusi iliyokusanywa ni makosa ya tahajia ya maneno halisi. Sehemu ya pili ni kielelezo cha makosa kinachochukua neno lisilojulikana lililoingizwa na mtumiaji na kujaribu kutafuta maneno yanayofanana yanayopatikana katika lugha.

Teknolojia zinazofanana na zile zilizowasilishwa hapa zimetumika kwa Lugha za Afrika pia. Mfano mmoja ni Bosch & Eiselen (2012), kwa Kizulu, mwingine ni kikagua tahajia cha Kiswahili kinachosambazwa na kampuni ya Kifini ya Lingsoft.

Katika miundombinu ya GiellaLT, sehemu zote mbili zinaundwa kama transducers za hali ya mwisho (FSTs). Kamusi inayofahamu mofolojia inajengwa moja kwa moja juu ya kichanganuzi cha mofolojia kilichotajwa hapo juu baada ya kuondoa maudhui yasiyotakikana kama vile alama ya uakifishaji na lugha isiyo sanifu. Mfano wa makosa umejengwa kama mfano wa umbali wa uhariri wa Levenshtein Levenshtein (1965) pamoja na sheria za ubadilishaji zenye uzani mahususi kwa lugha Pirinen & Lindén (2010).

Paketi ya speller inasambazwa kupitia mfumo wetu wa kipekee wa usakinishaji na masasisho ya desktop unaoitwa Páhkat, na mteja wa pahkat pia ni sehemu ya programu za kibodi za simu. Hii inamaanisha kwamba vikagua tahajia kwenye mifumo yote inayotumika, ya simu ya mkononi na ya eneokazi, vinasasishwa kiotomatiki.

Kama sehemu ya programu ya kibodi ya simu ya mkononi, vikagua tahajia huwasaidia watu katika mchakato wa uandishi wanapotumia kibodi yao ya asili. Kwa sasa tunajaribu aina mbalimbali za ukamilishaji wa neno na mifano ya utabiri, lakini hakuna kitu ambacho kimetolewa bado.

## Ukaguzi wa sarufi

Miundombinu ya GiellaLT inajumuisha mfumo wa hali ya juu wa kukagua sarufi. Inatumia mchanganyiko wa vichanganuzi vya kimofolojia na vipengele vya Constraint Grammar Didriksen (2010) vya kuondoa utata na kugundua makosa. Zaidi ya hayo, mantiki ya sarufi ya vizuizi inatumiwa kubainisha mahali ambapo makosa ya sarufi yapo; mantiki hiyo inafanana na uchanganuzi wa sintaksi unaotegemea sarufi Wiechetek (2012). Yote inategemea kanuni, jambo ambalo linamaanisha kwamba inawezekana kuendeleza bila kimsingi kuwepo kwa kumbukumbu za kielektroniki za awali. Vipengele vya kikagua sarufi ni vipya kabisa lakini tayari vinatumika kwa lugha nne tofauti.

## Utafsiri wa Mashine

Miundombinu ya GiellaLT inasaidia kuendeleza mifumo ya tafsiri ya mashine kwa ushirikiano na Apertium Khanna et al. (2021). Mifano ya lugha moja iliyoendelezwa katika miundombinu ya GiellaLT kisha inaunganishwa na kanuni za uhamishaji na leksika katika Apertium ili kutoa mfumo wa MT wa mwanzo hadi mwisho. Mfumo wa Apertium katika msingi wake pia ni zana ya tafsiri ya mashine inayotegemea kanuni. Hii ina maana kwamba mtu anaweza kujenga mifumo ya MT kwa lugha zisizo na rasilimali zilizopo katika kumbukumbu za lugha mbili pia, akipanua kazi iliyowekwa katika kamusi za lugha moja. Vipengele vinavyohitajika kwa tafsiri ya mashine inayotegemea kanuni juu ya uchanganuzi wa kimofolojia unaotegemea kanuni katika miundombinu ya GiellaLT ni kamusi ya lugha mbili, yaani kamusi ya kawaida ya tafsiri ya neno kwa neno na seti ya kanuni za kisarufi zinazohusu tafsiri ya tofauti za kiisimu kati ya lugha.

## Hitimisho

Tumewasilisha miundombinu ya GiellaLT na falsafa yake na lengo lake la kusaidia lugha za kiasili kote ulimwenguni, hasa lugha zenye mofolojia changamano au fonolojia changamano - au zote mbili. Tumeonyesha kwamba anuwai pana ya zana muhimu kwa jamii za lugha inaweza kujengwa kwa rasilimali ndogo za kielektroniki zilizopo awali, hivyo kuruhusu uundaji wa zana za teknolojia ya lugha kwa lugha yoyote, na tumesisitiza umuhimu wa Programu huria kama mkakati wa kuepuka kupoteza rasilimali za lugha. Hatimaye, tumetoa muhtasari wa rasilimali zilizopo kwa Lugha za Afrika katika miundombinu ya GiellaLT.

Hali ya sasa ya Lugha za Afrika ndani ya miundombinu yetu ni finyu kwa makampuni kadhaa ya kuanzia na lugha za majaribio, moja ya malengo ya makala hii ni kuchunguza zaidi uwezekano wa ushirikiano wa baadaye na ushiriki katika maendeleo ya NLP ya Afrika ndani ya miundombinu yetu.

## Maelezo

[1] Hajdu Róbert 2021: Fanya mafunzo ya BERT-Large kwa lugha yako mwenyewe. Kuelekea Sayansi ya Data.

[2] Hizi ni Akan, Amharic, Luo, Ndolo, Pedi, Somali, Tigrinya, na Zulu. Msimbo wa chanzo unapatikana katika https://github.com/giellalt/lang-xxx, ambapo xxx inapaswa kubadilishwa na msimbo wa ISO 639-3 wa lugha husika.

## Shukrani

Kazi yote ya kikundi cha maendeleo cha Divvun katika UiT inafadhiliwa na Wizara ya Serikali za Mitaa na Maendeleo ya Mikoa ya Norway. Kazi yote ya kikundi cha utafiti cha Giellatekno inafadhiliwa na UiT Chuo Kikuu cha Aktiki cha Norway.

## Marejeo

Antonsen, L., Trosterud, T. & Wiechetek, L. (2010), Reusing grammatical resources for new languages, in 'Proceedings of the Seventh International Conference on Language Resources and Evaluation (LREC'10)', European Language Resources Association (ELRA), Valletta, Malta. URL: http: // www. lrec-conf. org/ proceedings/ lrec2010/ pdf/ 254_ Paper. pdf

Beesley, K. R. & Karttunen, L. (2003), 'Finite-state morphology: Xerox tools and techniques', CSLI, Stanford.

Bosch, S. & Eiselen, R. (2012), 'The effectiveness of morphological rules for an isiZulu spelling checker', South African Journal of African Languages 25, 25-36.

Didriksen, T. (2010), Constraint Grammar Manual: 3rd version of the CG formalism variant, GrammarSoft ApS, Denmark. URL: http: // visl. sdu. dk/ cg3/ vislcg3. pdf (Accessed 2017-11-29)

Hiovain-Asikainen, K. & Moshagen, S. (2022), Building open-source speech technology for low-resource minority languages with sámi as an example - tools, methods and experiments, in 'Proceedings of the the 1st Annual Meeting of the ELRA/ISCA Special Interest Group on Under-Resourced Languages', European Language Resources Association, Marseille, France, pp. 169-175. URL: https: // aclanthology. org/ 2022. sigul-1. 22

Hurskainen, A. (2018), Sustainable language technology for african languages, in A. Agwuele & A. Bodomo, eds, 'The Routledge Handbook of African Linguistics', Routledge Handbooks, Routledge, Abingdon, pp. 359-375. URL: https: // doi. org/ 10. 4324/ 9781315392981-19

Karlsson, F. (1990), Constraint grammar as a framework for parsing unrestricted text, in H. Karlgren, ed., 'Proceedings of the 13th International Conference of Computational Linguistics', Vol. 3, Helsinki, pp. 168-173.

Khanna, T., Washington, J. N., Tyers, F. M., Bayatlı, S., Swanson, D. G., Pirinen, T. A., Tang, I. & Alòs i Font, H. (2021), 'Recent advances in apertium, a free/open-source rule-based machine translation platform for low-resource languages', Machine Translation pp. 1-28.

Levenshtein, V. I. (1965), 'Двоичные коды с исправлением выпадений, вставок и замещений символов', Доклады Академий Наук СCCP 163(4), 845-848.

Lindén, K., Axelson, E., Drobac, S., Hardwick, S., Kuokkala, J., Niemi, J., Pirinen, T. A. & Silfverberg, M. (2013), Hfst-a system for creating nlp tools, in 'International workshop on systems and frameworks for computational morphology', Springer, pp. 53-71.

Pirinen, T. & Lindén, K. (2010), 'Finite-state spell-checking with weighted language and error models: Building and evaluating spell-checkers with wikipedia as corpus', Proceedings of LREC 2010.

Pretorius, L. & Bosch, S. (2009a), 'Computational aids for Zulu natural language processing', Southern African Linguistics and Applied Language Studies 21,267-282.

Pretorius, L. & Bosch, S. (2009b), Exploiting cross-linguistic similarities in Zulu and Xhosa computational morphology, in 'Proceedings of the EACL 2009 Workshop on Language Technologies for African Languages', Association for Computational Linguistics, p. 96-103.

Treviso, M., Ji, T., Lee, J.-U., van Aken, B., Cao, Q., Ciosici, M. R., Hassid, M., Heafield, K., Hooker, S., Martins, P. H., Martins, A. F. T., Milder, P., Raffel, C., Simpson, E., Slonim, N., Balasubramanian, N., Derczynski, L. & Schwartz, R. (n.d.). URL: https: // arxiv. org/ abs/ 2209. 00099

Wiechetek, L. (2012), Constraint Grammar based correction of grammatical errors for North Sámi, in G. D.

Pauw, G.-M. de Schryver, M. Forcada, K. Sarasola, F. Tyers & P. Wagacha, eds, 'Proceedings of the Workshop on Language Technology for Normalisation of Less-Resourced Languages (SALTMIL 8/AFLAT 2012)', European Language Resources Association (ELRA), Istanbul, Turkey, pp. 35-40.
