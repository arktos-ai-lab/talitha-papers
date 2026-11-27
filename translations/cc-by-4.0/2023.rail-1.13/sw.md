> Machine translation (sw) of "Investigating Sentiment-Bearing Words- and Emoji-based Distant Supervision Approaches for Sentiment Analysis" by Koena Ronny Mabokela, Mpho Raborife, Turgay Celik, https://aclanthology.org/2023.rail-1.13/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kuchunguza Mbinu za Usimamizi wa Mbali Zinazotegemea Maneno Yenye Hisia na Emoji kwa Uchambuzi wa Hisia

Koena Ronny Mabokela, Mpho Raborife, Turgay Celik

**Taasisi**  
Koena Ronny Mabokela1,3  
Mpho Raborife2  
Turgay Celik3  
1University of Johannesburg, Applied Information Systems  
2University of Johannesburg, Institute for Intelligent Systems  
3University of the Witwatersrand, School of Electrical and Information Engineering  
{}

## Muhtasari

Uchambuzi wa hisia hulenga katika utambuzi wa kiotomatiki na uainishaji wa maoni yanayoonyeshwa katika maandishi. Emoji zinaweza kutumika kubainisha mielekeo ya hisia za maandishi (yaani, chanya, hasi, au isiyoegemea upande wowote). Utafiti kadhaa ulionyesha jinsi uchambuzi wa hisia unavyokuwa sahihi wakati emojis zinapotumika (Kaity na Balakrishnan, 2020). Ingawa wametumia emoji kama vipengele ili kuboresha utendaji wa mifumo ya uchambuzi wa hisia, katika makala hii tunachambua matumizi ya emoji ili kupunguza juhudi za kibinadamu katika kuweka lebo kwenye maandishi kwa ajili ya kufunza mifumo hiyo. Zaidi ya hayo, tunachunguza upunguzaji wa juhudi za kibinadamu katika mchakato wa kuweka lebo za hisia kwa msaada wa maneno yenye hisia pamoja na mchanganyiko wa maneno yenye hisia na emoji. Mbali na Kiingereza, tulitathmini mbinu hizo kwa Lugha za Afrika zenye rasilimali chache Sepedi, Setswana, na Sesotho. Mchanganyiko wa leksimu ya hisia za emoji na maneno unaonyesha utendaji bora ikilinganishwa na leksimu za emoji pekee na leksimu zinazotegemea maneno. Matokeo yetu yanaonyesha kuwa njia yetu ya kamusi ya hisia ya emojis ni yenye ufanisi, ikiwa na usahihi wa 75% zaidi ya njia nyingine za kamusi ya hisia, ambazo zina wastani wa usahihi wa 69.1%. Aidha, mbinu yetu ya usimamizi wa mbali ilipata usahihi wa 77.0%. Tunatarajia kuwa ni 23% tu ya twiti zitakazohitaji kubadilishwa kutokana na mikakati yetu ya ufafanuzi.

## 1 Utangulizi

Idadi ya watu wa Afrika Kusini ni ya aina mbalimbali na inazungumza lugha nyingi sana (yaani, asili, tamaduni, lugha, na dini) ikiwa na makundi maalum ya lugha ikiwemo Kiingereza na Afrikaans (Statista, 2022). Kundi la Nguni ni kundi kubwa zaidi ambalo linajumuisha Seswati, isiNdebele, isiXhosa, na isiZulu. Katika mfano huu, utafiti wetu unazingatia kundi la pili kwa ukubwa - kundi la Sotho-Tswana linalojumuisha Sepedi (Sotho ya Kaskazini) (Mabokela na Manamela, 2013), Sesotho (Sotho ya Kusini), na Setswana (Statista, 2022).

Uchambuzi wa hisia ni tawi la usindikaji wa lugha asilia (NLP) ambalo huchunguza hisia (maoni au mitazamo) ya maandishi. Uga huu umepokea umakini mwingi ambao ulisababisha teknolojia zake nyingi za NLP zenye mafanikio katika maeneo mbalimbali (Aguero-Torales et al., 2021; Mabokela et al., 2022a). Kwa mfano, maombi yake maarufu yamekuwa katika ufuatiliaji wa vyombo vya habari vya kijamii, usimamizi wa msaada, maoni ya wateja (Wankhade et al., 2022) na AI kwa ajili ya mema ya kijamii (Mabokela na Schlippe, 2022a).

Emojis zinazotumiwa pamoja na ujumbe wa maandishi kwenye mitandao ya kijamii zimezidi kuwa maarufu (Jindal and Aron, 2021; Grover, 2021). Katika miaka ya hivi karibuni kumekuwa na kazi zaidi juu ya uchambuzi wa hisia kwa kutumia emojis au emoticons (Grover, 2021; Hakami et al., 2021; Haak, 2021). Emojis hivi karibuni zimekuwa mbadala wa emoticons lakini zinatofautiana na emoticons kwa kuwa emoticons ni uwakilishi wa uso unaotumia herufi za kibodi (Gavilanes et al., 2018). Emojis hutumiwa kueleza hisia, hali, na mihemko katika ujumbe ulioandikwa kwa vipengele visivyo vya maneno (Kralj Novak et al., 2015; Gavilanes et al., 2018).

Matumizi ya emoji-kama mkusanyiko wa kawaida wa piktogramu ndogo za kuona huonyesha kila kitu kutoka kwa tabasamu za furaha hadi bendera kutoka duniani kote (Grover, 2021; Gavilanes et al., 2018). Emoji za kisasa zinaweza kufuatiliwa nyuma hadi kwenye vyumba vya mazungumzo katika miaka ya 1990. Walitumiwa katika mazungumzo kutoa ishara ya tabasamu, hasira au kuonyesha tamko la mzaha au la kejeli (kwan Yoo na Rayz, 2021). Kulingana na Takwimu za Emoji, kulikuwa na jumla ya emoji 3,633 katika Kiwango cha Unicode kufikia Septemba 2021. Hiyo inamaanisha kuwa kamusi ya hisia inahitaji kuimarishwa na emoji mpya ambazo mara nyingi huonekana kwenye mitandao ya kijamii (Kralj Novak et al., 2015). Kwa hiyo, ni muhimu kupanua leksimu zilizopo za emoji kwa ajili ya uwekaji lebo wa hisia.

Mifumo mingi ya NLP inahitaji seti ya data iliyolebelwa ili algoriti za kujifunza kwa mashine zitoe matokeo mazuri. Kwa kusudi hili, mbinu ya ufafanuzi isiyohitaji nguvu kazi nyingi na isiyochukua muda mrefu inahitajika. Emojis zimepata umakini mwingi kwa sababu ya matumizi yake ya kawaida na umaarufu katika usindikaji wa lugha asilia (NLP) (Kejriwal et al., 2021). Leksimu za hisia za emoji kwa lugha nyingine zimechunguzwa kama mbinu mbadala ambayo ilileta uboreshaji mkubwa katika uainishaji wa hisia (Gavilanes et al., 2018; Haak, 2021; Kralj Novak et al., 2015). Hata hivyo, ufafanuzi wa hisia na uchunguzi wa hisia kupitia emoji umepokea uangalifu mdogo kwa lugha zenye rasilimali chache (Hakami et al., 2021).

Kamusi kadhaa za hisia za emoji zilitengenezwa kwa ujenzi wa mkono uliounganisha wahasiri wa binadamu, kwa njia ya kiotomatiki na nusu-otomatiki kwa mchango mdogo wa binadamu (Grover, 2021). Kulingana na maarifa yetu, hakuna kazi iliyochapishwa kuhusu uchambuzi wa hisia za emoji katika lugha za Bantu. Aidha, kwa kuwa emoji zinaonekana kama sehemu muhimu ya mawasiliano ya mitandao ya kijamii, kuzijumuisha kuna uwezekano wa kutoa uainishaji wa hisia wa ubora wa juu (Kejriwal et al., 2021).

Kwa kuvutia, emoji zimeweza kutoa taarifa zaidi kuelekea hisia sahihi ya maandishi (Ayvaz and Shiha, 2017). Kazi zinazohusiana zimeonyesha kwamba emoji husaidia kutambua na kuamua lebo ya hisia ya tweets (Go et al., 2009; Wang na Castanon, 2015; Ayvaz na Shiha, 2017; Singh et al., 2019). Kwa sababu hii, inavutia kwamba tunachukua mkabala otomatiki unaotumia taarifa za emoji ili kupunguza juhudi za mikono.

Lengo kuu ni kuchunguza athari za emojis katika muktadha wa uchambuzi wa hisia. Hii inajumuisha kazi mbili: (i) matumizi ya emoji ili kupunguza juhudi za mikono katika kuunda data ya mafunzo kwa mifumo ya uchambuzi wa hisia na (ii) athari za emoji kwenye Usahihi wa mwisho wa mifumo ya mwisho ya uchambuzi wa hisia. Kwa uwekaji lebo wa awali, tunachunguza hata mbinu mpya ya usimamiaji wa umbali kutumia twiti zenye emoji kujenga leksimu ya hisia kutoka mwanzo kabisa bila kutegemea lugha. Tunatathmini na kulinganisha mikakati yetu ya uwekaji lebo wa awali na leksimu za hisia za emoji zinazotumiwa mara kwa mara zilizotolewa na (Kralj Novak et al., 2015; Haak, 2021; Hakami et al., 2021). Tunachangia yafuatayo kupitia utafiti wetu:

Tulikusanya korasi mpya ya uchambuzi wa hisia kwa Kisotho (yaani, twiti 6,314 na twiti 3,168 za Kisotho-Kiingereza) na kuiongeza kwenye korasi ya SAfriSenti.

Sisi kuchunguza matumizi ya emoji hisia lexicons katika hisia labelling mikakati ya kupunguza mwongozo annotation juhudi.

Tunatumia istilahi za hisia za emoji zilizopo (Kralj Novak et al., 2015; Hakami et al., 2021; Haak, 2021) kuunda istilahi ya hisia inayofaa kwa lugha zetu lengwa na kutoa suluhisho kwa emoji mpya ambazo bado hazipo katika istilahi ya hisia ya emoji.

Kufunika tweets bila emojis, sisi leverage lexicons hisia kwa njia ya kimataifa.

Kwa kuwa mofimu maalum zinaonyesha hali ya hisia katika lugha zetu lengwa, pia tulijenga na kuchambua vitambulishi vya hisia vinavyotegemea mofimu na mahususi kwa lugha.

Muundo wa makala hii ni kama ifuatavyo: Kazi zinazohusiana zitajadiliwa katika Sehemu ya 2. Katika Sehemu ya 3, tutaelezea korasi yetu ya hisia ya SAfriSenti na mikakati ya ukusanyaji wa data, pamoja na uhakikisho wa ubora. Katika Sehemu ya 4, tunaelezea mikakati tofauti ya ufafanuzi wa hisia. Katika Sehemu ya 5, tutawasilisha majaribio na tathmini. Sehemu ya 6, inatoa hitimisho na kazi ya baadaye.

## 2 Tafiti Zinazohusiana

Juhudi za hivi karibuni zimefanywa kushughulikia changamoto za uchambuzi wa hisia kwa lugha zisizo na rasilimali za kutosha (Mabokela et al., 2022a; Abdullah na Rusli, 2021). Kwa mfano, idadi ndogo ya lugha za Afrika, ikiwa ni pamoja na lugha chache za Nigeria (k.mf. NaijaSenti Corpus) (Muhammad et al., 2022; Alabi et al., 2022) Kiswahili (Martin et al., 2021), lahaja za Tunisia (Medhaffar et al., 2017) na Bambara (Diallo et al., 2021) zimechunguzwa kwa uchambuzi wa hisia. Hivi karibuni, korasi ya SAfriSenti (Mabokela na Schlippe, 2022b; Mabokela et al., 2022b) iliundwa - ni korasi ya hisia ya lugha nyingi kwa lugha zenye rasilimali chache za Afrika Kusini. Korasi ya SAfriSenti ndiyo korasi kubwa zaidi ya hisia za Twitter kufikia sasa, ikiwa na lengo la kushughulikia changamoto za Lugha 11 za Afrika Kusini.

Programu nyingi za sasa za NLP hutumika kwa data ya mitandao ya kijamii ambazo hutegemea kabisa seti ya data iliyo na lebo, ikiwezekana ufafanuzi unaofanywa kwa mikono (Chakravarthi et al., 2022). Hata hivyo, hakuna kazi iliyofanywa kwa lugha hizi zenye rasilimali chache katika kipengele cha kutumia emoticons au emoji kwa uwekaji lebo wa hisia. Zaidi ya hayo, lugha zenye rasilimali nyingi kama vile Kiingereza, Kihispania, na Kiarabu zilichunguza uchambuzi wa hisia unaotegemea emoji au emoticon kwa maendeleo ya kuahidi (Gavilanes et al., 2018; Hakami et al., 2021).

Tafiti nyingi zilichunguza emoji na leksimu za hisia zenye msingi wa maneno kwa ajili ya uchambuzi wa hisia (Cortis and Davis, 2020; Grover, 2021). Zaidi ya hayo, baadhi ya watafiti walitumia emoji zenye hisia kukusanya twiti kutoka Twitter (Go et al., 2009; Pak and Paroubek, 2010). Hata hivyo, emoji kwa ajili ya uchambuzi wa hisia wa lugha yenye rasilimali chache zimepokea uangalifu mdogo wa utafiti (kwan Yoo and Rayz, 2021) na mchanganyiko wa emoji na leksimu ya hisia kwa ajili ya kuweka lebo za hisia bado ni eneo la uchunguzi. Zaidi ya hayo, ni tafiti chache tu zilizochunguza leksimu za hisia za emoji kwa uchambuzi wa hisia wa lugha nyingi (Kralj Novak et al., 2015; Gavilanes et al., 2018). Utafiti uliopita wa (Kralj Novak et al., 2015) uliunda leksikoni za hisia kwa kuhusisha wafafanuzi 83 kutathmini kila moja ya emoji 840 kama chanya, ya kati na hasi.

Vivyo hivyo, (Wang na Castanon, 2015) walichambua zaidi athari za emoticons katika kuunda leksimu za hisia na pia kufunza kiainishaji cha hisia. Ingawa ilionekana kuwa utendaji wa modeli ya hisia uliongezeka kwa 15%, matokeo yanaunga mkono madai yao kwamba idadi ndogo ya emoticons ni viashiria vyenye nguvu na sahihi vya mwelekeo wa hisia. Lakini kulingana na (Guibon et al., 2016), matumizi ya emoji yanaweza kupanuliwa kwa njia nyingi za ziada kama vile uimarishaji wa hisia na urekebishaji wa hisia na hayakomei tu kwa usemi wa hisia. Vivyo hivyo, (Ayvaz na Shiha, 2017) walichunguza athari za emoji katika uchambuzi wa hisia lakini walizingatia tu polariti ya hisia chanya na hasi kwa lugha ya Kiingereza. (Kimura na Katsurai, 2017) walichunguza ujenzi wa kiotomatiki wa istilahi ya hisia ya emoji. Mbinu hii inachukua maneno ya hisia kutoka WordNet-Affect na kuamua mara ngapi yanatokea pamoja na kila emoji.

Kwa hivyo, (Gavilanes na wenzake, 2018) waliunda leksimu ya hisia za emoji kwa kutumia mbinu isiyosimamiwa kulingana na maelezo ya emoji. Kulingana na uchambuzi wa hisia za maandishi yasiyo rasmi katika Kiingereza na Kihispania, waliunda kiotomatiki leksimu za hisia zenye emoji 840 kwa kutumia mfumo usiosimamiwa na mbinu ya usambazaji wa hisia katika vitegemezi (USSPAD).

Hivi karibuni, (Haak, 2021) alionyesha mbinu inayotambua kwa usahihi na haraka hisia zinazowasilishwa na emoji bila ufafanuzi wa mikono. Hata hivyo, utafiti wa (kwan Yoo na Rayz, 2021) ulichunguza jinsi emoji zinavyotumiwa katika twiti na jinsi zinavyoweza kuathiri toni na hisia za sentensi katika twiti na kuboresha usahihi wa uchambuzi wa hisia kwa kutumia mbinu za ujifunzaji wa mashine. (Hakami na wenzake, 2021) walichunguza uthabiti wa uchambuzi wa hisia za emoji kimuktadha katika lugha za Kiarabu na Kizungu. Waliunda kamusi ya hisia za emoji za Kiarabu na kisha kulinganisha hisia zilizoonyeshwa katika kila moja ya familia mbili za lugha na utamaduni.

Baadhi ya tafiti zilijaribu kujifunza upachikaji wa emoji ili kukamilisha upachikaji wa maneno ya maandishi kwa kazi za uainishaji wa hisia (Grover, 2021). Kwanza, (Eisner et al., 2016) walitumia mkakati wa upachikaji wa emoji uliofunzwa awali kwa kutumia maelezo chanya na hasi ya emoji za Unicode yaliyochaguliwa kwa nasibu. (Chen et al., 2018) walijifunza upachikaji wa emoji wenye maana mbili na kufunza LSTM inayozingatia umakini kwa uainishaji wa hisia. Kwa kuzingatia tu maelezo chanya na hasi kwa kila emoji ya Unicode, uboreshaji wa upachikaji wa emoji unaweza kuharakishwa. Hata hivyo, (Singh et al., 2019) walipendekeza mbinu ya moja kwa moja ya kuchakata emoji kwa kubadilisha emoji na maelezo yake katika twiti na kutumia mkakati wa upachikaji wa maneno uliofunzwa awali ambao unafanana na ule wa maneno ya kawaida. Zaidi ya hayo (Liu et al., 2021) walichunguza na kutathmini athari za kuongeza emoji kama vipengele vya ziada ili kuboresha utendaji wa uchambuzi wa hisia. Walitengeneza modeli iliyoboreshwa ya upachikaji wa emoji kulingana na Bi-LSTM ambayo nayo ilipata Usahihi bora wa uchambuzi wa hisia kwenye maandishi ya Kichina mtandaoni.

Utafiti wetu unafanana na wa (Gavilanes et al., 2018), na (Hakami et al., 2021) kwa kuwa walitumia leksimu za hisia za emoji kufanya uchambuzi wa hisia kwenye twiti zenye emoji. Katika utafiti huu, tunachukua mbinu yao, lakini tunatoa hatua za ziada ili kuunda leksimu yetu ya hisia za emoji. Tukilinganisha tafiti zilizotajwa hapo juu na utafiti wetu, tulitumia leksimu za hisia za emoji zilizopo za (Kralj Novak et al., 2015; Haak, 2021) kuunda leksimu ya awali ya hisia za emoji. Kwa ufupi, tunatafsiri emoji zinazopatikana kwenye twiti kuwa maelezo yao ya kimaandishi na kutumia leksimu za hisia za emoji zilizopo ili kuunda mbinu mpya ya ufafanuzi bora wa hisia za twiti.

## 3 Lugha na Seti ya Data

Sehemu hii inajumuisha takwimu kuhusu korasi yetu ya SAfriSenti, kuanzia ukusanyaji wa awali wa data ghafi hadi twiti za mwisho kwa kutumia Twitter API for Academic Research. Korasi ya SAfriSenti (Mabokela et al., 2022b; Mabokela and Schlippe, 2022b) ilifafanuliwa kwa mikono na wazungumzaji asilia 3 kwa kila lugha lengwa kwa kufuata miongozo madhubuti ya ufafanuzi. Wafafanuzi waliweka lebo kwenye twiti katika madarasa 3; chanya, hasi, na upande wowote. Korasi hiyo ina zaidi ya twiti 50,000. Takriban 4% ya tweets ziliondolewa kwa sababu mbalimbali nzuri wakati 2% ilibaki baada ya tathmini. Twiti chanya zinatawala twiti hasi kwa kiasi kikubwa zaidi katika twiti za lugha moja za Sepedi, Setswana, na Sesotho. Aidha, tulitathmini korasi yetu ya hisia iliyofafanuliwa kwa kutumia kipimo cha makubaliano baina ya wafafanuzi (yaani, thamani ya wastani ya Krippendorff ya α=0.7695) ambayo inachukuliwa kuwa inakubalika.

Kwa jumla ya takriban 36% ya twiti zinazopishana kati ya Sepedi na Kiingereza na 6% kati ya Setswana na Kiingereza, ubadilishaji msimbo kati ya lugha za asili na Kiingereza ni jambo la kawaida.

Jedwali la 2 linaonyesha dondoo kutoka kwenye seti ya data ikiwa na mifano ya twiti katika Sepedi, Setswana, Sesotho, na Kiingereza zenye emoji. Tunatoa zaidi mfano wa twiti zenye ubadilishaji msimbo wa Sepedi na Kiingereza pamoja na hisia zake husika. Kielelezo cha 1 kinaonyesha mifano ya twiti zenye emoji.

p04-patch01.png

Kielelezo 1: Mifano ya twiti zenye emoji

Sehemu ya 2 inaonyesha muhtasari wa usambazaji wa tweets katika sehemu hii iliyoelezewa ambayo ni ya lugha moja na iliyobadilishwa. Jumla ya twiti za lugha moja hufunika 64.4% (32,261) na 35.6% (18,223) ya twiti zilizobadilishwa msimbo. Kama inavyoonyeshwa katika Jedwali 2, korasi yetu ina idadi kubwa ya twiti zilizobadilishwa msimbo kwa Sepedi-Kiingereza, Setswana-Kiingereza na Sesotho-Kiingereza. Kubadilishana lugha ni kawaida kati ya Kiingereza na lugha za Bantu za Afrika Kusini. 23.6% ya twiti hizo zina ubadilishaji msimbo wa Sepedi na Kiingereza. 5.7% ya twiti hizo zina ubadilishaji msimbo wa Setswana na Kiingereza. 6.3% ya twiti hizo zina ubadilishaji msimbo wa Sesotho na Kiingereza. Sepedi, Setswana na Sesotho zinashiriki baadhi ya maneno ya kawaida kwa kuwa lugha hizo zinahusiana kwa karibu. Katika kesi yetu, twiti inachukuliwa kuwa twiti yenye mchanganyiko wa msimbo ikiwa ina zaidi ya maneno 3 ya Kiingereza katika twiti za Sepedi, Setswana na Sesotho.

p04-01.png

Jedwali 1: Muhtasari wa kitakwimu wa twiti za lugha moja kwa lugha za Sepedi, Setswana, Sesotho na Kiingereza.

p04-02.png

Jedwali 2: Muhtasari wa takwimu wa twiti zinazobadilishana lugha kwa lugha za Sepedi-Kiingereza (Pedi-Eng), Setswana-Kiingereza (Tswa-Eng) na Sesotho-Kiingereza (Sotho-Eng).

## 4 Mbinu

Katika sehemu hii, tutawasilisha mikakati tofauti ya ufafanuzi wa hisia ambayo tutaitumia kwa utafiti huu. Kwa hili, tunaelezea jinsi tunavyotumia leksika zetu za hisia, na vitambulishi vya hisia vya kimofolojia kwa lugha lengwa na kisha pia tunafafanua jinsi tunavyozalisha leksika zetu mpya za hisia za emoji kutoka kwa korasi ya SAfriSenti.

## 4.1 Maneno-Baseed Sentenment Lexicon

Leksika nyingi za hisia zimetolewa kwa njia mbalimbali, zikiwemo; uundaji kwa mikono—ambao unachukuliwa kuwa mchakato unaotumia muda mwingi na wa gharama kubwa, na uundaji wa kiotomatiki na nusu-otomatiki. Leksika za hisia kwa kawaida ni orodha za maneno yenye thamani zilizopewa ambazo zinaonyesha hisia ya neno. Kwa kawaida, hizi ni thamani kamili zinazoelezea upolariti na ukali wa upolariti kama thamani kamili zinazoongezeka au kupungua. Kwa mfano, thamani kwa kawaida hupatikana kutoka -5: (hasi sana) hadi -1: (hasi dhaifu) na +5: (chanya sana) hadi +1: (chanya dhaifu). Leksika za hisia zimetumika katika mifumo mingi ya hisia kusaidia kubainisha mwelekeo wa semantiki wa maandishi (Nielsen, 2011; Hutto na Gilbert, 2015).

Leksika hizi za hisia zimeonyesha kuwa inawezekana kuchanganya thamani za upolariti kutoka sentensi na kukokotoa hisia kwenye kipimo endelevu (Kaity na Balakrishnan, 2020). Ili kuzalisha maingizo ya leksika ya neno huchaguliwa kama kitengo ili kuhusisha maneno ya maoni kwa usahihi zaidi. Tulitumia mbinu ya lugha nyingi kwa kutafsiri kamusi za hisia zilizopo za Kiingereza kama vile NRC (Mohammad na Turney, 2013), VADER (Hutto na Gilbert, 2015) na AFFIN (Nielsen, 2011) katika lugha za Sepedi, Setswana na Sesotho. Kamusi zetu za hisia kwa lugha hizi zilizolengwa zilijengwa na kuthibitishwa na wataalamu wa lugha. Bado tuliweka leksimu ya Kiingereza kwa kuwa twiti zetu zina maneno ya Kiingereza. Zaidi ya hayo, baadhi ya maneno yenye hisia yalibainishwa na wahifadhi wakati wa mchakato wa kufafanua hisia. Jedwali la 3 linaonyesha mgawanyo wa leksimu zetu za hisia pamoja na maneno yaliyowekwa alama za viwango vya mwelekeo wa hisia. Jumla ya idadi ya maneno katika leksimu ya hisia ni 17,715.

p05-01.png

Jedwali la 3: Mgawanyo wa maneno yaliyotafsiriwa katika leksimu ya hisia kwa Sepedi, Setswana, na Sesotho.

Kwa kuongezea, tulitumia hisia za kubadilika kwa hali ili kutangaza jumbe chanya na hasi kwa kutumia minong'ono yenye hisia hasi au chanya. Hii inaongezwa kwenye leksimu yetu ya hisia. Kwa mfano, neno rata, linalomaanisha /kupenda au kupenda/ mara nyingi huishia kwa /-a/ lakini mwisho /-e/ unaweza kuashiria ukanushaji unapotumiwa na mofimu hasi kama /ga se/ na /rate/ zinazomaanisha /ga se rate/. Hata hivyo, maneno yanayomalizika kwa vokali /-e/ yanaweza kuwa sehemu ya mwisho ya namna za misuguano iliyopita na pia moja ya alama za hisia hasi (Prinsloo, 2020). Katika kesi ambapo tweets zina /ha se/ (mfano bona ha se wena fela motho waka /wewe si mtu wangu pekee/) kutoka Sesotho (yaani Sotho Kusini) badala ya /ga se/, vitambulisho vyetu vya hisia vilionyesha vikwazo. Tumeboresha hili kwa kujumuisha kanuni za sarufi za ziada ili kukabiliana na hali hii ya kundi la lugha ya Sotho-Tswana.

## 4.2 Leksika za Hisia Zinazotegemea Emoji

Kielelezo cha 2 kinaonyesha mbinu ya kupata emoji kutoka kwa twiti. Ili kuunda kamusi za hisia za emoji, tunatumia taarifa za kamusi ya hisia ya emoji iliyopo iliyotengenezwa na (Kralj Novak et al., 2015), (Hakami et al., 2021), na (Haak, 2021). Katika hatua hii, mbinu yetu ya emoji inaendesha algoriti kwenye twiti, emoji, na maelezo ili kubaini kiotomatiki ikiwa emoji inaonyesha hisia chanya, hasi, au zisizoegemea upande wowote. Ili kutoa tweets zenye emoji kutoka kwa SAfriSenti corpus, tulichagua tu sehemu ya tweets zenye emoji kwa kutafuta tweets zozote zenye emoji. Ili kuunda kamusi yetu ya hisia ya emoji isiyo na lebo, tunafuata hatua zilizofupishwa hapa chini:

Tunatoa kiotomatiki herufi za emoji kutoka kwa korasi ya SAfriSenti kwa kutumia semi za kawaida na kisha tunabadilisha emoji hizo kuwa uwakilishi wa Unicode. Unicode ni mfumo wa kodishaji wa mnyororo unao badilisha herufi kuwa baiti.

Tunaunda orodha ya emoji za kipekee ili kuepuka kurudiarudia katika leksikoni za hisia za emoji. Hiyo inamaanisha kwamba emoji inayojirudia yenyewe inaonekana mara moja tu katika leksikoni.

Kisha, tunapata maelezo ya emoji kutoka kwa tafsiri ya emoji ya python na jukwaa la Emojipedia—kamusi ya emoji kwa Kiingereza yenye picha za emoji kutoka majukwaa tofauti. Hili linafanywa kwa kutafuta Unicode inayolingana ili kuendana na maelezo yake.

Ili kutabiri kama emoji inaonyesha hisia chanya, hasi, au zisizoegemea upande wowote, tunafuata mbinu ya (Gavilanes et al., 2018) na pia tunafanya upekuzi katika leksikoni iliyopo ya hisia za emoji na kutumia leksikoni za hisia za maneno kupekua polariti za maneno kutoka kwa maelezo yake bila uingiliaji wa binadamu.

p06-01.png

Kielelezo 2: Mchakato wa kupata emoji na maelezo yake

Zaidi ya hayo, tunatumia leksimu za hisia za emoji ambazo zilipatikana kama ifuatavyo:

Mbinu za kwanza zimeelezwa katika (Kralj Novak et al., 2015; Hakami et al., 2021). Leksimu hii ya hisia za emoji ilipatikana kutoka 4% ya twiti milioni 1.6 ambazo zilifafanuliwa (yaani hasi, zisizoegemea upande wowote, chanya) na wafafanuzi asilia 83 tofauti kwa lugha 13 za Ulaya. Ina emojis 751 zinazotumika mara nyingi zaidi kwenye Twitter. Leksimu za hisia za emoji zilipendekezwa kama nyenzo za cheo cha hisia za emoji zisizotegemea lugha kwa ajili ya uchambuzi wa hisia wa kiotomatiki.

Mbinu ya pili iko katika (Haak, 2021). Njia hii inategemea nia ya matumizi ya emojis kwa ajili ya kueleza hisia pamoja na mbinu zinazotumika katika (Kralj Novak et al., 2015). Emoji hizo zinatokana kitakwimu na matukio katika maandishi yenye hisia. Katika hali hii, hisia za emoji zinatokana na maandishi yanayozihusisha na hisia hizo huamuliwa kwa kutumia leksimu ya Kiingereza ya VADER.

## 4.3 Usimamizi wa mbali

Kando na uchunguzi wetu, tuliangalia mchakato rahisi na wa gharama nafuu wa kuunda leksimu ya emoji na hisia isiyotegemea lugha. Kama ilivyoonyeshwa katika Kielelezo 3, 4, 5 na 6, tunapendekeza algorithm zifuatazo kwa ajili ya hisia labeling kwamba leverages taarifa kutoka emoji hisia ranking na hisia-bearing emojis na maneno (Kranjc et al., 2015):

Hatua ya 1<sub>emojitweets</sub>: Tumia Unicode ya emoji kutambua na kutoa kikundi kidogo cha twiti zenye emoji (tazama Kielelezo 3).

Hatua ya 2<sub>emojis</sub>: ainisha twiti zenye emoji zenye hisia katika madaraja ya hasi, upande wowote na chanya (Kielelezo 3).

Hatua ya 3<sub>lists</sub>: unda orodha zenye maneno yenye hisia na weka alama kutoka kwa leksimu ya maneno iliyotafsiriwa (Kielelezo 4):

1. kusanya maneno yote kutoka kwa twiti hasi, zisizoegemea upande wowote na chanya.

2. Kisha ondoa maneno yanayotokea katika orodha moja au zote mbili nyingine (Kielelezo 5).

Hatua ya 4<sub>words</sub>: ainisha tweet zilizobaki ambazo hazina emoji zinazobeba hisia (k.m., tweet ambazo hazina emoji zinazobeba hisia) katika makundi ya hasi, ya kati na chanya kulingana na ufunikaji wa juu zaidi wa maneno kwa orodha za maneno yanayobeba hisia.

Hatua ya 5<sub>words+emojis</sub>: ainisha twiti zote zenye na zisizo na emoji zenye hisia katika madaraja hasi, zisizoegemea upande wowote na chanya kulingana na ufunikaji wa juu zaidi wa maneno na orodha za maneno yenye hisia na kutumia alama za leksimu ya hisia za emoji (yaani alama ya hisia [-1...+1]) kutoka leksimu ya hisia za emoji (Kralj Novak et al., 2015; Hakami et al., 2021).

## 5 Majaribio na Tathmini

Katika sehemu hii, tutaelezea mpangilio wetu wa majaribio, vipimo vya tathmini, na matokeo. Pia tunaonyesha kwamba kwa kupata leksimu ya hisia za emoji kutoka kwa maelezo yake, kisha tunatathmini mfumo uliopendekezwa wa kuweka lebo za hisia katika sehemu hii.

p07-01.png

Kielelezo 3: Tumia Unicode kuzalisha kikundi kidogo cha twiti za emoji (step1<sub>emojisttweets</sub>).

p07-02.png

Kielelezo 4: Ainisha twiti zenye emoji zenye hisia katika madarasa 3 (step2<sub>emojis</sub>).

p07-03.png

Kielelezo 5: unda orodha za maneno yenye hisia (step3<sub>words</sub>).

Lengo letu ni kupunguza juhudi za ufafanuzi wa mikono katika kuunda seti za data za mafunzo kwa ajili ya kufunza mifumo ya NLP. Zaidi ya hayo, tulichunguza jinsi ya kuunda kiotomatiki leksimu ya hisia kwa kutumia alama za emoji kutoka kwa leksimu iliyopo ya hisia za emoji.

p07-04.png

Kielelezo 6: Maneno yenye hisia kama viashiria vya madarasa ya hisia ya twiti zilizobaki (step3<sub>lists</sub>).

## 5.1 Mpangilio wa Majaribio na Vipimo

Tulitoa twiti zenye emoji zenye hisia kwa ajili ya majaribio kama ilivyo katika Kielelezo cha 3. Kwa uhakikisho wa ubora, tweet zote zimepitia hatua kali ya uchakataji wa awali ili kuondoa kelele, alama za uakifishaji, na herufi zisizo na umuhimu bila taarifa yoyote muhimu (Mabokela and Schlippe, 2022b). Kwa jumla, twiti zenye emoji ni 34,269 ambazo hufanya 72% ya twiti katika korasi ya SAfriSenti. Seti ndogo tu ya takriban 2.9% na 5.43% ilipatikana katika twiti zilizobadilisha msimbo za Setswana-Kiingereza na Sesotho-Kiingereza huku twiti nyingine za lugha moja zikiwa na takriban 10%-24% ya twiti zenye emoji. Jedwali la 4 linaonyesha mgawanyo wa twiti zenye emoji. Jumla ya emoji 686 za kipekee zimetambuliwa kutoka Korasi ya SAfriSenti katika lugha lengwa zote. Pia tulichimbua emoji kutoka kwa twiti zilizobadilisha msimbo pia. Tulitathmini twiti zetu za emoji kwa mbinu za ufafanuzi wa hisia zilizofafanuliwa katika Sehemu ya 4. Zaidi ya hayo, tunatumia leksimu ya hisia pamoja na vitambulishi vya hisia vinavyotegemea mofimu ili kuweka lebo kwa usahihi hali chanya na hasi.

p07-05.png

Jedwali la 4: Mgawanyo wa emoji za kipekee na twiti zenye emoji kwa kila lugha.

p08-01.png

Jedwali la 5: Usahihi, Kumbuko tambuzi, Ushabaha, na alama ya macro-F<sub>1</sub> ya mbinu za ufafanuzi wa hisia.

Tunashikilia vipimo vilivyotumika katika kazi za awali (Gavilanes et al., 2018). Tulitathmini mbinu yetu ya kuweka lebo za hisia kwa Usahihi, Ushabaha, Kumbuko tambuzi, na macro-F<sub>1</sub>. Tunatathmini mikakati yetu ya kuweka lebo za hisia dhidi ya ufafanuzi wa kibinadamu. Tulitathmini mbinu zetu kwa kutumia Usahihi, Ushabaha, Kumbuko tambuzi, na alama ya macro-F<sub>1</sub> kwa kutumia lebo zote kama kazi ya tabaka nyingi yaani chanya, upande wowote, na hasi.

Ili kupata alama ya hisia ya twiti inayohusishwa na lebo ya hisia (yaani hasi, upande wowote, au chanya), tulitumia fomula ya usambazaji wa emoji diskreti iliyotumika katika (Kralj Novak et al., 2015; Hakami et al., 2021). n emoji inaweza kuonekana katika twiti nyingi, kila moja ikiwa imewekewa lebo ya hisia. Hii inaunda usambazaji diskreti:

Vipengele vya usambazaji (k.m., P-, P0, P +) huonyesha darasa la hisia (hasi, neutral, au chanya) ya emoji inayotambuliwa. Kisha, tulikadiria uwezekano kutoka kwa masafa linganifu:

∑N(c) = N, c ∈ {-1, 0, +1} ambayo inarekodi usambazaji wa hisia kwa ajili ya seti husika ya tweets. N inaashiria idadi ya matukio yote ya emoji katika twiti, na N(c) ni matukio katika twiti zenye lebo ya hisia c. Tulichukua kama mfano matukio mengi ya emoji moja katika tweet moja. Kutoka hapo juu, tuliunda usambazaji wa uwezekano diskreti: (P-, P0, P+), ∑P(c) = 1.

p08-02.png

Kisha, alama ya hisia S ya emoji ilihesabiwa kama wastani wa usambazaji:

p08-03.png

Zaidi ya hayo, lebo za emoji pia zinatambuliwa kutoka kwa kamusi za emoji zinazopo, na kisha makubaliano yake yanajaribiwa.

## 5.2 Matokeo

Jedwali la 5 linaonyesha asilimia za vipimo vya usahihi, Kumbuko tambuzi, Ushabaha, na alama ya F<sub>1</sub> kwa mbinu 4. Matokeo yetu yanaashiria kuwa kamusi ya emoji iliyotolewa na (Hakami et al., 2021) inafanya kazi kidogo bora ikilinganishwa na kamusi ya emoji iliyotengenezwa na (Kralj Novak et al., 2015). Pia, hii ni kwa sababu kamusi ya hisia za emoji ya (Kralj Novak et al., 2015) ina emoji chache kuliko ile iliyowasilishwa na (Hakami et al., 2021). Usahihi wa 68.7% na alama ya F<sub>1</sub> ya 66.2% inachukuliwa kuwa inalinganishwa kulingana na kazi ya awali (Gavilanes et al., 2018). Tulitumia leksimu ya hisia (SentiLexicon<sub>words+morph</sub>) kuainisha hisia zilizomo kwenye twiti kulingana na maneno. Mbinu yetu ya SentiLexicon<sub>words+morph</sub> ilipata Usahihi wa 69.1% ikiwa na alama ya macro-F<sub>1</sub> ya 68.4%. Hivyo, SentiLexicon<sub>words+morph</sub> inafanya vizuri kidogo kwa kiwango kilichoongezeka cha (+0.4%) ikilinganishwa na leksimu ya emoji iliyotolewa na (Kralj Novak et al., 2015).

Kulingana na kazi iliyotangulia (Hakami et al., 2021), emoji zimeainishwa kulingana na makundi yaani; uso, lugha ya mwili, shughuli za binadamu, moyo, asili, chakula, vitu na alama, na bendera. Asilimia 50 ya emoji zetu ziko ndani ya kategoria ya sura za uso zenye viashiria vikali vya hisia. Kama inavyoonyeshwa katika Jedwali la 5, mbinu za Usimamiaji wa mbali (DistSuper<sub>emojis+words</sub>) zinafanya vizuri zaidi kwa kiasi kikubwa kuliko leksimu mbili zilizopo za emoji na leksimu ya hisia inayotegemea neno. Tukilinganisha leksimu yetu ya hisia za emoji (SentiEmojiLex<sub>emojis</sub>) na leksimu mbili zilizopo za emoji (Kralj Novak et al., 2015; Hakami et al., 2021), SentiEmojiLex<sub>emojis</sub> inafanya vizuri zaidi kwa Usahihi wa 75%. Hii inamaanisha kwamba mbinu yetu ya SentiEmojiLex<sub>emojis</sub> ni bora zaidi katika kubainisha hisia za twiti. Zaidi ya hayo, tulijaribu kwa mbinu ya DistSuper<sub>emojis+words</sub>—mchanganyiko wa hisia zinazobebwa na emoji na maneno yanayobeba hisia. Mbinu hii ya DistSuper<sub>emojis+words</sub> ilipata Usahihi wa 77.4% pamoja na alama ya F ya 76.3%. Matokeo yetu yanaonyesha zaidi kwamba SentiEmojiLex<sub>emojis</sub> yetu pamoja na mbinu ya DistSuper<sub>emojis+words</sub> inaweza kutumika kufanya uwekaji lebo wa hisia usiotegemea lugha wa twiti zenye na zisizo na emoji. Tukilinganisha DistSuper<sub>emojis+words</sub> na DistSuper<sub>emojis+words</sub>, tulipata ukingo ulioongezeka wa zaidi ya (+1.4%).

Zaidi ya hayo, mchanganyiko wa leksikoni ya hisia inayotegemea maneno na kitambulishi cha kimofolojia cha hisia (SentiLexicon<sub>words+morph</sub>) ulileta ongezeko la Usahihi. Mbinu yetu ya DistSuper<sub>emojis+words</sub> inashinda mbinu zote za leksikoni ya hisia zilizotumika katika majaribio. Matokeo yetu yanaonyesha kwamba kupata lebo za hisia kwa kutumia fasili za emoji kulifanya vizuri zaidi. Hata hivyo, kutumia mbinu ya SentiEmojiLex<sub>emojis</sub> kulipata alama nzuri ya F<sub>1</sub> ya 73.9%. Inafaa kutajwa kwamba kuchanganya emoji na maneno (yaani CombSentiLex<sub>emojis+words</sub>) pia kunaboresha Usahihi kwa 1.3% ikilinganishwa na SentiEmojiLex<sub>emojis</sub>. Zaidi ya hayo, tuliweza kupata matokeo bora zaidi kwa kutumia CombSentiLex<sub>emojis+words</sub> ikilinganishwa na kutumia mbinu ya SentiLexicon<sub>words+morph</sub>. Vilevile, hakuna tofauti kubwa katika matokeo yaliyopatikana kwa alama ya F<sub>1</sub>, Ushabaha, na Kumbuko tambuzi katika korasi hii. Hii inathibitisha ubora wa korasi ya SAfriSenti.

## 6 Hitimisho

Katika makala haya, tunaeleza mikakati tofauti ya kuweka lebo za hisia ambayo inahusisha matumizi ya emoji na maneno ili kuweka lebo awali kiotomatiki kwenye twiti kwa lugha zenye rasilimali chache. Zaidi ya hayo, tulitumia SentiLexicon<sub>words+morph</sub> pamoja na vitambulishi vya hisia kufanya uwekaji wa lebo za hisia. Tunaunda SentiEmojiLex<sub>emojis</sub> yetu kutoka kwenye twiti zilizopo zilizofafanuliwa kwa mikono katika korasi ya SAfriSenti—korasi ya hisia za Twitter ya lugha nyingi kwa Lugha za Afrika Kusini (yaani Sepedi, Setswana, Sesotho na Kiingereza) ambayo baadaye itapanuliwa kwa Lugha nyingine za Afrika Kusini. Tuliunda SentiEmojiLex<sub>emojis</sub> yetu kwa kutoa tu twiti zilizo na emoji na kubadilisha emoji hizo kuwa maelezo yake ya kimaandishi yanayolingana. Zaidi ya hayo, tunatumia mbinu ya (Gavilanes et al., 2018) kuendeleza kamusi yetu ya hisia za emoji. Tulipata Usahihi bora na alama ya F<sub>1</sub> kwa DistSuper<sub>emojis+words</sub> yetu. Tukilinganisha SentiLexicon<sub>words+morph</sub> yetu na leksikoni ya maneno yenye hisia, matokeo yetu yanaonyesha kuwa mkakati wa SentiEmojiLex<sub>emojis</sub> ni bora zaidi na wa kuaminika. Zaidi ya hayo, kwa kulinganisha mikakati yetu ya kuweka lebo na leksikoni zilizopo za hisia za emoji, tulipata matokeo yanayolingana kwa Usahihi wa 75% kwa SentiEmojiLex<sub>emojis</sub> na Usahihi wa 77% kwa mkabala wa DistSuper<sub>emojis+words</sub>. Zaidi ya hayo, tulitumia mbinu za CombSentiLex<sub>emojis+words</sub> na DistSuper<sub>emojis+words</sub> kuweka lebo kwenye twiti zilizobaki katika korasi ya SAfriSenti (yaani 32% (16,215 twiti)). Kwa hiyo, kuunda mkakati wa kiotomatiki wa uwekaji lebo wa hisia kwa twiti zenye emoji kuna uwezekano mkubwa wa kupunguza juhudi za binadamu za uwekaji lebo. Aidha, mbinu hizi zinaweza kutumika kwa urahisi kwa lugha zingine za Afrika ambazo hazina rasilimali za kutosha, ikizingatiwa kuwa data iliyokusanywa ina emoji. Juhudi zetu za baadaye zinajumuisha kutumia upachikaji wa emoji kuunda mbinu za uwekaji lebo wa hisia zinazozingatia muktadha kwa mifumo maalumu. Zaidi ya hayo, tunalenga kuboresha uainishaji wa hisia kwa kujumuisha mbinu mbalimbali za ujifunzaji tendaji zinazojumuisha emoji.

## 7 Shukrani

Kazi hii ya utafiti inasaidiwa na Msingi wa Taifa wa Utafiti (NRF). Kwanza, tunatambua tuzo ya NRF ya Black Academics Advancement Programme (BAAP) (No: BAAP200225506825). Pia tunataka kutoa shukrani zetu za dhati kwa wawekaji lebo waliojitolea muda na juhudi zao, wataalamu wa lugha, na wawezeshaji wa vipindi. Hatimaye, tunashukuru maoni muhimu yaliyotolewa na wakaguzi.

## Maelezo

1 https://emojipedia.org/stats/

2 http://emojipedia.org/

3 Dataset yetu itapatikana hapa: https://github.com/Mabokela/SAfriSenti-Corpus

4 https://saifmohammad.com/WebPages/lexicons.html

5 https://github.com/cjhutto/vaderSentiment.git

6 https://github.com/fnielsen/afinn.git

7 https://kt.ijs.si/data/Emoji_sentiment_ranking/

## Marejeo

Nur Atiqah Sia Abdullah and Nur Ida Aniza Rusli. 2021. Multilingual sentiment analysis: A systematic literature review. pertanika journal of science and technology, 29.

Marvin M. Aguero-Torales, Jose I. Abreu Salas, and Antonio G. Lopez-Herrera. 2021. Deep learning and multilingual sentiment analysis on social media data: An overview. Applied Soft Computing, 107:107373.

Jesujoba O. Alabi, David Ifeoluwa Adelani, Marius Mosbach, and Dietrich Klakow. 2022. Multilingual Language Model Adaptive Fine-Tuning: A Study on African Languages. arXiv e-prints, page arXiv:2204.06487.

Serkan Ayvaz and Mohammed Shiha. 2017. The effects of emoji in sentiment analysis. International Journal of Computer and Electrical Engineering, 9:360-369.

Bharathi Raja Chakravarthi, Ruba Priyadharshini, Vigneshwaran Muralidaran, Navya Jose, Shardul Suryawanshi, Elizabeth Sherly, and John P. McCrae. 2022. Dravidiancodemix: sentiment analysis and offensive language identification dataset for dravidian languages in code-mixed text. Language Resources and Evaluation, 56:765 - 806.

Yuxiao Chen, Jianbo Yuan, Quanzeng You, and Jiebo Luo. 2018. Twitter sentiment analysis via bi-sense emoji embedding and attention-based lstm. Proceedings of the 26th ACM international conference on Multimedia.

Keith Cortis and Brian Davis. 2020. Over a decade of social opinion mining. Artificial Intelligence Review, abs/2012.03091:4873-4965.

Mountaga Diallo, Chayma Fourati, and Hatem Haddad. 2021. Bambara language dataset for sentiment analysis. In Practical ML for Developing Countries Workshop. ICLR 2021, Virtual Event.

Ben Eisner, Tim Rocktäschel, Isabelle Augenstein, Matko Bosnjak, and Sebastian Riedel. 2016. emoji2vec: Learning emoji representations from their description. In SocialNLP@EMNLP.

Milagros Fernández Gavilanes, Jonathan Juncal-Martínez, Silvia García-Méndez, Enrique Costa-Montenegro, and Francisco Javier González-Castaño. 2018. Creating emoji lexica from unsupervised sentiment analysis of their descriptions. Expert Syst. Appl., 103:74-91.

Alec Go, Richa Bhayani, and Lei Huang. 2009. Twitter sentiment classification using distant supervision. Processing, 150.

Vandita Grover. 2021. Exploiting emojis in sentiment analysis: A survey. Journal of The Institution of Engineers : Series B, pages 1-14.

Gaël Guibon, Magalie Ochs, and Patrice Bellot. 2016. From Emojis to Sentiment Analysis. In WACAI 2016, Brest, France. Lab-STICC and ENIB and LITIS.

Fabian Haak. 2021. Emojis in lexicon-based sentiment analysis: Creating emoji sentiment lexicons from unlabeled corpora. In Proceedings of the LWDA 2021 Workshops: FGWM, KDML, FGWI-BIA, and FGIR, pages 279-286. CEUR-WS.

Shatha Ali A. Hakami, Robert Hendley, and Phillip Smith. 2021. Arabic emoji sentiment lexicon (ArabESL): A comparison between Arabic and European emoji sentiment lexicons. In Proceedings of the Sixth Arabic Natural Language Processing Workshop, pages 60-71, Kyiv, Ukraine (Virtual). Association for Computational Linguistics.

C.J. Hutto and Eric Gilbert. 2015. Vader: A parsimonious rule-based model for sentiment analysis of social media text. In Proceedings of the 8th International Conference on Weblogs and Social Media, ICWSM 2014, pages 218-225.

Kanika Jindal and Rajni Aron. 2021. A systematic study of sentiment analysis for social media data. Materials Today: Proceedings.

Mohammed Kaity and Vimala Balakrishnan. 2020. Sentiment lexicons and non-English languages: A survey. Knowledge and Information Systems, 62:4445-4480.

Mayank Kejriwal, Qile Wang, Hongyu Li, and Lu Wang. 2021. An empirical study of emoji usage on twitter in linguistic and national contexts. Online Social Networks and Media, 24:100149.

Mayu Kimura and Marie Katsurai. 2017. Automatic construction of an emoji sentiment lexicon. Proceedings of the 2017 IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining 2017, page 1033-1036.

Petra Kralj Novak, Jasmina Smailovic, Borut Sluban, and Igor Mozetic. 2015. Sentiment of emojis. PloS one, 10.

Janez Kranjc, Jasmina Smailovic, Vid Podpecan, Miha Grcar, Martin Znidari, and Nada Lavrac. 2015. Active learning for sentiment analysis on data streams: Methodology and workflow implementation in the clowdflows platform. Inf. Process. Manag., 51:187-203.

Byung kwan Yoo and Julia Taylor Rayz. 2021. Understanding emojis for sentiment analysis. In FLAIRS Conference.

Chuchu Liu, Fan Fang, Xu Lin, Tie Cai, Xu Tan, Jianguo Liu, and Xin Lu. 2021. Improving sentiment analysis accuracy with emoji embedding. Journal of Safety Science and Resilience, 2:246-252.

Koena Ronny Mabokela, Turgay Celik, and Mpho Raborife. 2022a. Multilingual Sentiment Analysis for Under-Resourced Languages: A Systematic Review of the Landscape. IEEE Access, 11:15996 - 16020.

Koena Ronny Mabokela and Madimetja Jonas Manamela. 2013. An integrated language identification for code-switched speech using decoded-phonemes and support vector machine. In 2013 7th Conference on Speech Technology and Human - Computer Dialogue (SpeD), pages 1-6.

Koena Ronny Mabokela, Mpho Raborife, and Turgay Celik. 2022b. Safrisenti: Towards a creation of multilingual sentiment corpus for south african under-resourced languages. ACM Trans. Asian Low-Resour. Lang. Inf. Process.

Koena Ronny Mabokela and Tim Schlippe. 2022a. AI for Social Good: Sentiment Analysis to Detect Social Challenges in South Africa. In The South African Conference for Artificial Intelligence Research (SACAIR 2022).

Koena Ronny Mabokela and Tim Schlippe. 2022b. A Sentiment Corpus for South African Under-Resourced Languages in a Multilingual Context. In The 1st Annual Meeting of the ELRA/ISCA Special Interest Group on Under-Resourced Languages (SIGUL 2022), page 70-77.

Gati Lother Martin, Medard Edmund Mswahili, and Young-Seob Jeong. 2021. Sentiment Classification in Swahili Language Using Multilingual BERT. African NLP Workshop, EACL 2021, abs/2104.09006.

Salima Medhaffar, Fethi Bougares, Y. Estève, and Lamia Hadrich Belguith. 2017. Sentiment analysis of tunisian dialects: Linguistic ressources and experiments. In WANLP@EACL.

Saif M. Mohammad and Peter D. Turney. 2013. Crowdsourcing a word-emotion association lexicon. Computational Intelligence, 29(3):436-465.

Shamsuddeen Hassan Muhammad, David Ifeoluwa Adelani, Sebastian Ruder, Ibrahim Said Ahmad, Idris Abdulmumin, Bello Shehu Bello, Monojit Choudhury, Chris Chinenye Emezue, Saheed Salahudeen Abdullahi, Anuoluwapo Aremu, Alipio Jeorge, and Pavel Brazdil. 2022. NaijaSenti: A Nigerian Sentiment Corpus for Multilingual Sentiment Analysis.

Finn Årup Nielsen. 2011. A new ANEW: evaluation of a word list for sentiment analysis in microblogs. CoRR, abs/1103.2903.

Alexander Pak and Patrick Paroubek. 2010. Twitter as a corpus for sentiment analysis and opinion mining. In LREc, pages 1320-1326.

D.J. Prinsloo. 2020. Lexicographic treatment of negation in sepedi paper dictionaries. Lexikos, 30:1-25.

Abhishek Singh, Eduardo Blanco, and Wei Jin. 2019. Incorporating emoji descriptions improves tweet classification. In Proceedings of NAACL-HLT, page 2096-2101.

Statista. 2022. African countries with the largest population as of 2020.

Hao Wang and Jorge A. Castanon. 2015. Sentiment expression via emoticons on social media. In 2015 IEEE International Conference on Big Data (Big Data), pages 2404-2408.

Mayur Wankhade, Annavarapu Rao, and Chaitanya Kulkarni. 2022. A Survey on Sentiment Analysis Methods, Applications, and Challenges. Artificial Intelligence Review, pages 1-50.

## A Kiambatisho: Taarifa za Lugha

Kisotho cha Kaskazini, kinachojulikana pia kama Sesotho sa Leboa, ni lugha ya Kisotho-Tswana inayozungumzwa hasa katika maeneo ya kaskazini-mashariki mwa Afrika Kusini. Pia inaitwa kwa kawaida Sepedi au Pedi. Sensa ya Taifa ya Afrika Kusini ya mwaka 2011 inaripoti kuwa ni lugha ya kwanza ya watu zaidi ya milioni 4.6, ikihesabika kuwa 9.1% ya idadi ya watu, hivyo ikiipanga kama lugha ya 5 inayozungumzwa zaidi katika Afrika Kusini. Lugha ya Sepedi hutumiwa sana katika mikoa ya Mpumalanga, Gauteng, na Limpopopo.

Tswana, inayojulikana kwa jina lake la asili Setswana, ni lugha ya Kibantu inayozungumzwa Afrika Kusini na takriban watu milioni 8.2. Lugha hii ni sehemu ya familia ya lugha za Kibantu ndani ya tawi la Sotho-Tswana la eneo S, na ina uhusiano wa karibu na lugha za Sotho ya Kaskazini, Sotho ya Kusini, Kgalagadi, na lugha za Lozi. Setswana ni lugha rasmi nchini Botswana na Afrika Kusini na hutumika kama lingua franca nchini Botswana na sehemu fulani za Afrika Kusini, hasa katika Mkoa wa North West. Vikundi vya kikabila vinavyozungumza Kitswana vyaweza kupatikana katika zaidi ya mikoa miwili katika Afrika Kusini, hasa katika Magharibi ya Kaskazini, ambako watu wapatao milioni nne huzungumza lugha hiyo.

Sesotho, ambayo pia inajulikana kama Southern Sotho, ni lugha ya Bantu ya Kusini inayotoka kwenye kikundi cha Sotho-Tswana ("S.30"). Lugha hii huzungumzwa hasa nchini Lesotho, ambako ni lugha ya taifa na lugha rasmi, na pia nchini Afrika Kusini (hasa katika jimbo la Vaal na Jimbo Huru), ambako ni moja kati ya lugha rasmi 11. Pia inatambuliwa kama mojawapo ya lugha rasmi 16 za Zimbabwe. Kama lugha zote za Bantu, Sesotho ni lugha ya agglutinative inayotumia viambishi vingi, na sheria za utolezi na ubadilishaji ili kujenga maneno kamili.
