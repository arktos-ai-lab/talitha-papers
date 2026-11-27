> Machine translation (sw) of "Canonical Segmentation and Syntactic Morpheme Tagging of Four Resource- scarce Nguni Languages" by Jakobus S. Du Toit, Martin J. Puttkammer, https://upjournals.up.ac.za/index.php/dhasa/article/view/3818, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Ugawaji wa Kanuni na Ulezi wa Mifano ya Kimatamshi ya Lugha Nne za Nguni Zisizo na Rasilimali Nyingi

Jakobus S. Du Toit, Martin J. Puttkammer

**Taasisi**  
Du Toit, Jakobus S.  
Puttkammer, Martin J.  
CTexT®, North-West University  
  


## Muhtasari

Uchambuzi wa umbo unahusisha kuchunguza darasa la sintaksia la neno lakini pia unaweza kufikia uchambuzi wa sintaksia na uainishaji wa muundo wake wa msingi wa morfimu. Hii ni muhimu hasa kwa lugha zenye mfumo wa uandishi wa agglutinative ambapo maneno mengi ya lugha yanaonyeshwa kama neno moja la kisarufi. Katika makala hii, tunapendekeza mbinu inayotegemea kumbukumbu kwa ugawaji wa kikanuni kwa kutumia mbinu ya dirisha ili kurejesha mofimu zisizofupishwa ambazo zinatofautiana na umbo la uso la neno. Zaidi ya hayo, tunapendekeza kuchukulia uwekaji lebo wa kisintaksia wa mofimu kama kazi ya uwekaji lebo wa mfuatano, sawa na uwekaji lebo wa aina za maneno. Utaratibu huu hutumia muundo wa ndani wa mofimu ya neno kama muktadha wa ndani kwa njia ile ile ambayo sentensi inayozunguka neno hutumika katika kutofautisha sehemu yake ya usemi. Kazi zote mbili zinaundwa kwa namna tofauti lakini zinatekelezwa kwa mfuatano kwa kuingiza mofimu zilizotenganishwa za neno kwenye kazi ya uwekaji lebo wa kisintaksia. Wakati wa kutathminiwa kwa lugha nne za Nguni zilizo na rasilimali chache, mbinu iliyopendekezwa inapata usahihi wa jumla wa kati ya asilimia 82 na 92 ambayo inazidi vichambuzi vilivyotengenezwa hapo awali kwa lugha hizo.

## Maneno Muhimu

uchambuzi mofolojia, canonical kugawanyika, syntactic morpheme tagging

## 1 Utangulizi

Upatikanaji wa rasilimali za lugha za ubora ni muhimu kwa utafiti wowote na juhudi za maendeleo katika uwanja wa Natural Language Processing (NLP). Kukusanya na kuunganisha rasilimali kama hizo kwa ujumla ni ghali na kunachukua muda, hasa katika kesi ya lugha zenye uhaba wa rasilimali kama ilivyo kwa lugha kumi kati ya lugha kumi na moja rasmi za Afrika Kusini. Ili kushughulikia uhaba huu na kuendeleza jitihada za utafiti na maendeleo katika eneo la teknolojia ya lugha za kibinadamu, serikali ya Afrika Kusini imeanzisha miundo kadhaa ya kisheria inayoendeleza matumizi na maendeleo ya lugha hizi na imedhamini miradi mbalimbali ya maendeleo kwa miongo miwili iliyopita. Mradi mmoja kama huo ulikuwa mradi wa Text wa Kituo cha Kitaifa cha Teknolojia ya Lugha ya Binadamu (Eiselen na Puttkammer 2014), ambao ulikusanya takriban tokeni 50,000, zilizoandikwa kwa maelezo ya aina za maneno (POS), lemma na uchanganuzi wa kimofolojia kwa lugha kumi kati ya lugha rasmi za Afrika Kusini. Vitambulishi vya POS, vitoa lemma na vitenganishi vya kimofolojia vinavyotegemea kanuni pia vilitengenezwa. Mradi wa ufuatiliaji ulipanua kazi hii kwa kutengeneza tokeni 50,000 za ziada zilizoandikwa na teknolojia zilizoboreshwa kwa lugha nne kati ya hizi, yaani isiNdebele (NR), Siswati (SS), isiXhosa (XH) na isiZulu (ZU). Katika makala hii, tunazingatia vichanganuzi vya kimofolojia ambavyo vilitengenezwa katika mradi wa ufuatiliaji.

Katika sehemu inayofuata tunatoa muhtasari mfupi wa mradi, ikifuatiwa na maelezo ya mgawanyiko wa kimorfolojia dhidi ya uchambuzi. Kisha (sehemu ya 4) tunawasilisha mbinu yetu ya ngazi mbili ya uchanganuzi wa kimofolojia na matokeo (sehemu ya 6). Hitimisho na kazi ya baadaye zinajadiliwa katika sehemu ya 7.

## 2 Usuli

Lengo la mradi huu lilikuwa kuunda korasi zilizo na maelezo ya POS, lemma na taarifa za uchanganuzi wa kimofolojia kwa lugha nne za Nguni za Afrika Kusini zenye uhaba wa rasilimali na kuendeleza teknolojia msingi zinazohusiana kwa kutumia seti hizi za data. Katika makala hii lengo ni uendelezaji wa wachanganuzi wa kimofolojia. Kwa maelezo ya kina ya mchakato wa uendelezaji uliofuatwa wakati wa ufafanuzi wa data, angalia Gaustad & Puttkammer, 2021. Maelezo ya teknolojia nyingine za msingi yanapatikana katika Du Toit & Puttkammer, 2021.

Afrika Kusini ni nchi yenye utofauti wa lugha na lugha rasmi kumi na moja, tisa ambazo ni lugha za Bantu ya Kusini zinazofuata mfumo wa kuandika unaounganisha au unaotenganisha. Utafiti huu unazingatia tu lugha za Kinguni zilizoandikwa kwa namna ya kuunganisha maneno ambazo ni, isiNdebele, Siswati, isiXhosa, isiZulu. Ili kuonyesha tofauti ya kisarufi kati ya mifumo hii ya kuandika, Prinsloo & De Schryver (2002) hutumia mfano wa sentensi "I love him/her". Asili ya kiambatanishi ya isiZulu inazalisha kirai kama neno moja, ngiyamthanda, ilhali kingeandikwa kwa namna ya kutenganisha maneno katika Sepedi kama maneno manne tofauti, ke a mo rata. Ingawa utafiti huu unahusu lugha nne za Afrika Kusini za Nguni, maarifa yaliyopatikana wakati wa maendeleo yanaweza pia kutumika kwa lugha ambazo zina mofolojia sawa.

## 3 Mofolojia

Vipengele vya mofolojia ni vipengele muhimu katika kuendeleza teknolojia ya uhandisi wa lugha na maombi kama vile tafsiri ya mashine na marekebisho ya makosa ya kuandika. Vipengele vya kimofolojia kwa kawaida hurejelea vipengele vilivyoleksika (k.m. lemma) na visivyoleksika (k.m. jinsia, kesi, nambari). Mbinu nyingi zinazofanya kazi katika kiwango cha neno hufafanua tokeni kwa vipengele vilivyoleksika kwa kutumia seti za vipengele vilivyounganishwa au kwa kuiga vipengele binafsi kama kazi tofauti za kuweka tagi.

Seti ya sifa iliyochanganyika inaelezea vipengele vingi kama muundo mmoja wa tagi zisizo za leksika (k.mf. Noun+A3sg+Pnon+Nom). Hii inaruhusu uhusiano wa kimsingi kati ya vipengele tofauti kuigwa kwa uwazi lakini inasababisha nafasi kubwa ya lengo ambayo inaongeza zaidi uchache kwa lugha zenye mofolojia tajiri. Kwa upande mwingine, kuiga vipengele hivi kivyake kunatoa nafasi ndogo ya lengo lakini kunabana uwezo wa modeli kujifunza tegemezi zozote baina ya vipengele jambo ambalo ni muhimu kwa kazi yetu iliyokusudiwa. Wakati wa kufanya kazi katika kiwango cha morfimu, jukumu la utendaji la morfimu katika lugha za Nguni linathiriwa na kuzuiwa na muktadha wake wa ndani. Mbinu mbili zinazotumia vipengele vya mofolojia ni vile vinavyoitwa kuvunjika kwa mofolojia ambako mofimu hutambuliwa, na uchambuzi wa mofolojia, ambapo lebo huwekwa kwa kila mofimu kulingana na kazi yake ya kisarufi.

Ugawaji wa umbo wa neno unahusisha kugawanya neno katika sehemu zake za msingi zinazoitwa morfemi, ambazo ni vitengo vidogo vidogo vinavyobeba maana ya neno (Ruokolainen et al. 2013). Hata hivyo, mofimu hizi huenda zisilingane kiothografia na sehemu inayolingana ya neno katika umbo lililoandikwa wakati mabadiliko ya tahajia yanapojitokeza wakati wa unyambulishaji. Kwa hiyo, tunatofautisha kati ya aina mbili za ugawaji, ugawaji wa uso na ugawaji wa kanuni. Utaratibu wa kwanza hutoa seti ya substrings ambayo huunganishwa na neno la awali kutoka, wakati wa mwisho hutoa mlolongo wa mofimu za kanuni ambazo ni kweli kwa aina za msingi za mofimu lakini zina uwezekano wa kutofautiana katika uwakilishi wao wa kisarufi ndani ya umbo la awali la neno. Utenganishaji wa kimofolojia una manufaa katika kusaidia kuchangia uchanganuzi zaidi kwa kazi za NLP, hasa katika lugha zenye rasilimali chache ambapo ufinyu wa data unaweza kudhoofisha ubora wa kazi.

Seti ya vitenganishi vya lugha unganishi zilizotengenezwa awali kama sehemu ya mradi wa NCHLT zilikuwa utekelezaji unaotegemea kanuni unaofuata kazi ya Bosch et al. (2006). Utekelezaji huu ulihusisha kutambua kwa kujirudia viambishi vyote katika tokeni ambapo baadaye kiungo kilichobaki kingethibitishwa dhidi ya leksimu ya mizizi na mashina. Ni katika hali ambapo shina au mzizi halali na mchanganyiko halali wa viambishi vilithibitishwa tu ndipo utenganishaji ungechukuliwa kuwa umefaulu. Sheria hizi zilizotolewa zilitegemea mkusanyiko wa tokeni 50,000 zilizo na maelezo zilizotengenezwa kama sehemu ya mradi huo. Vitenganishi hivi na vipya vilivyotengenezwa vinagawanya tokeni katika mofimu zao za kiungo, ikijumuisha kila kiambishi cha kiungo, mizizi kwa upande wa vitenzi, na mashina katika sehemu nyingine za usemi. Kwa mfano, neno la isiZulu ukusebenzisa ("kutumia") linagawanywa katika morfemi zake za msingi kama u-ku-sebenz-is-a, ambapo kila mpaka wa kiambishi unatajwa pamoja na mzizi wa kitenzi.

Uchambuzi wa mofolojia ni muhimu hasa unapotumika kwa lugha za Nguni kwa sababu maneno yake kwa kawaida hujumuisha mofimu ambazo zinaweza kubadilika baada ya kuunganishwa. Lugha hizi hufuata mfumo wa uandishi unganishi ambao husababisha tahajia ambatanishi ambapo mofimu huandikwa bila kutenganishwa. Hata hivyo, maana ya neno ni utendakazi wa morfemi zake, na kwa hiyo ni lazima kutenga morfemi hizi binafsi kwa uchambuzi zaidi wa sintaksia. Uchanganuzi kamili wa kimofolojia unahusisha ugawaji wa mofimu na uchanganuzi wa mwingiliano kati ya mofimu msingi za neno kwa kuamua tabaka zao za kisintaksia (Van den Bosch na Daelemans 1999). Kwa mfano, neno lilelele isiZulu lililotumika katika mfano uliopita, ukusebenzisa ("kutumia"), linatenganishwa na kuchambuliwa kimorfolojia kama u[NPrePre]-ku[BPre]-sebenz[VRoot]-is [CausExt]-a[VerbTerm], ambapo daraja la kimahusiano (syntactic class) la kila morfimu linatolewa. Kwa mfano huu, tabaka za kisintaksia zinajumuisha kiambishi awali cha pili cha nomino (NPrePre), kiambishi awali cha kwanza cha nomino (BPre), mzizi wa kitenzi (VRoot), kiambishi tamati cha kitenzi kisababishi (CausExt), na kimalizio cha kitenzi (VerbTerm).

## 4 Muundo wa Kichanganuzi cha Kimofolojia

Sehemu hii inaeleza kazi ya kuunda kielelezo cha uchanganuzi wa kimofolojia na kiwango cha undani katika uchanganuzi ambacho suluhu zilizopo zinaunga mkono. Uchunguzi wetu wa awali kuhusu mbinu mwafaka ya uchanganuzi wa kimofolojia ulijumuisha mabomba ya NLP ambayo kwa kawaida hushughulikia kazi nyingi za kuweka tagi na za kimofolojia, kama ilivyo kwa UDPipe (Straka 2018) na MarMoT (Müller et al. 2013). MarMoT ni mfumo wa jumla wa CRF unaoweza kufanya uwekaji tagi wa POS na uchanganuzi wa kimofolojia, vivyo hivyo UDPipe ni bomba linaloweza kufunzwa kwa ajili ya utokenizaji, uwekaji tagi wa POS, uchanganuzi wa utegemezi, na uchanganuzi wa kimofolojia unaotumia viwakilishi vya BERT vilivyozingatia muktadha. Hata hivyo, uwezo wa uchambuzi wa mofolojia katika suluhisho hizi hujumuisha tu vipengele visivyo vya kileksikali ambavyo hutofautisha sifa za kileksikali na kisarufi za maneno. Majaribio ya kutumia mfumo huu kuelezea alama za lugha ya Nguni kwa kutumia makundi ya mofimu za kisarufi yalitarajiwa kufeli, kwa sababu uwezo wake wa uchambuzi wa mofimu umepunguzwa kwa kiwango cha neno tu na muktadha unatokana na sentensi inayojumlisha badala ya muundo wa ndani wa mofimu.

Kuzingatia kina kinachohitajika cha uchambuzi wa mofolojia na kwa sababu mgawanyiko wa kanuni na annotasheni ya darasa katika ngazi ya mofimu kwa kawaida hazishughulikiwi kama kazi moja, tulikaribia uchambuzi wa mofolojia kama matatizo mawili tofauti. Ugawaji wa mofimu na uchanganuzi wa kimofolojia vyote vinashughulikiwa kama kazi ya kuweka tagi kwa mfuatano, kama ilivyokuwa mkabala uliofuatwa na Sorokin & Kravtsova (2018) kwa Kirusi, lugha inayofanana kwa kuambatanisha viambishi.

Katika mkabala wao, ugawaji wa mofimu uliwakilishwa kwa kutumia mpango wa kuweka lebo wa BMES ambapo madarasa yanahusika na mwanzo (B), kati (M), na mwisho (E) pamoja na mofimu za herufi moja (S). Zaidi ya hayo, morfeme ziliwekewa lebo kulingana na aina zao yaani, mzizi, kiambishi awali, kiambishi mwisho, mwisho, kiambishi baada, kiunganishi, na kizigeu. Hivyo, kazi ya mfumo wao ilikuwa kutabiri lebo za mgawanyiko na aina kwa mfuatano wa herufi. Hata hivyo, uainishaji wa morfeme unawakilisha nafasi ndogo ya lengo lenye lebo 7 tu, hivyo kuhakikisha usahihi bora wa utabiri. Kutumia njia iliyochukuliwa na Sorokin & Kravtsova (2018) kwa kazi yetu ilisababisha usahihi wa chini wa kuweka lebo kutokana na nafasi kubwa ya lengo na msongamano ulioongezeka baadaye kwani mfumo wetu wa lebo una lebo 71 kwa ZU, 70 kwa NR, 68 kwa SS na lebo 62 kwa XH.

Mifumo ya NLP iliyotajwa hapo awali na mbinu zingine za uchambuzi wa mofolojia kwa kawaida huonyesha vipengele vya mofolojia katika ngazi ya neno na uwakilishi wa muktadha unaenea katika sentensi nzima. Kinyume chake, ugawaji wa mofimu unawakilishwa katika kiwango cha herufi na hivyo tofauti katika kiwango cha undani inaeleza kwa nini mbinu nyingi hushughulikia kila kazi kivyake isipokuwa kama nafasi ya lengo inaweza kuwekwa ndogo kiasi kama ilivyo katika kisa cha Sorokin & Kravtsova (2018). Kinyume chake, Van den Bosch & Daelemans (1999) hata hivyo walifanikiwa katika kuunda kwa pamoja mipaka ya kimofolojia, madarasa ya kisintaksia, na mabadiliko ya tahajia katika kiwango cha herufi kama kazi moja ambayo ilisababisha nafasi kubwa ya lengo lakini iliungwa mkono na seti kubwa ya data. Njia hii inafaa na kazi tuliyolenga, lakini kutumia mbinu inayofanana kwenye seti zetu za data zilizopungua ingeingiza upungufu na kupunguza tu ubora wa utabiri. Hata hivyo, msukumo ulichukuliwa kutoka kwa Van den Bosch & Daelemans (1999) katika kupunguza kazi ya ugawaji kuwa mfuatano wa kazi za uainishaji kwa kutumia mbinu ya dirisha kwenye herufi za neno. Ili kukamilisha kuweka lebo kwa kila mofimu na darasa lake la kimofolojia la kisintaksia tuliamua kushughulikia kazi hiyo sawa na ile ya kuweka lebo za POS na kuwakilisha mofimu binafsi kama maneno ili kupata muktadha wa ndani kutoka katika muundo wa ndani wa mofimu wa neno. Mbinu hii inajadiliwa kwa undani zaidi katika sehemu inayofuata.

Mbinu iliyopendekezwa inafuata muundo wa ngazi mbili kwa ajili ya mgawanyiko na uchambuzi wa mfululizo. Kutenga majukumu mawili kuliruhusu usahihi zaidi katika kugawanya, ambayo yalipata shida zaidi katika majaribio ya awali kutokana na utata wa lugha. Njia ya mnyororo inaweza kusababisha makosa yanayozidisha, lakini usahihi mkubwa wa kigawanyiko cha kimorfolojia kama sehemu ya kwanza katika mnyororo hauna athari kubwa kwenye usahihi wa jumla.

## 4.1 Ngazi ya 1: Utenganishaji wa kimofolojia

Ngazi ya kwanza ya mbinu hiyo ni mfumo wa ujifunzaji unaotegemea kumbukumbu ambao unaiga utenganishaji wa kimofolojia na mabadiliko ya tahajia kama mfululizo wa kazi za uainishaji zilizochochewa na kazi ya Van den Bosch na Daelemans (1999). Ujifunzaji unaotegemea kumbukumbu ni aina ya algoriti za ujifunzaji wa mashine zinazosimamiwa, za kiinduktivu ambazo hujifunza kulingana na mifano ya kazi iliyohifadhiwa kwenye kumbukumbu. Tilburg Memory-Based Learner (TiMBL) inawezesha kazi hii kama kifurushi cha programu huria kinachosaidia uteuzi wa algoriti za uainishaji wa jirani wa karibu wa k na upimaji vipengele (Daelemans et al. 2004). Wakati vielelezo vipya vya kazi iliyojifunza vinapowasilishwa kwa modeli ya TiMBL, juhudi za kikokotozi huwekwa katika kutafuta vielelezo vinavyolingana vyema kutoka kwenye kumbukumbu kama inavyoamuliwa na kipimo cha ufanano. Mara tu jirani wa karibu zaidi (au kielelezo) anapotambuliwa katika kumbukumbu, darasa linalohusishwa huhamishiwa kwenye kielelezo kipya. Mbinu zinazotegemea kumbukumbu zimetumika kwa ufanisi kwa kazi zingine za usindikaji wa lugha asili kama vile kugawa maneno na uchambuzi wa mchanganyiko (Pilon et al. 2008).

Utenganishaji wa kimofolojia unaweza kuchukuliwa kama tatizo la uchoraji ramani linalozingatia muktadha, sawa na matatizo mengi ya kilugha (k.m. tafsiri ya lugha chanzi kwenda lugha lengwa, usanisi wa maandishi kwenda usemi n.k.). Kama sehemu ya mbinu hii, TiMBL imepewa jukumu la kujifunza ramani hii maalum kwa njia ya njia ya kufungua kutoka kwa sura ya uso wa neno hadi sehemu yake ya kanuni. Kudirisha kwa namna hii kunabadilisha neno kuwa vielelezo vingi ambapo kila kielelezo hulenga mpaka kati ya herufi, au mpaka wa mwanzo na mwisho wa neno. Mbinu hiyo inaonyeshwa katika jedwali la 1, ambapo dirisha la muktadha linaloteleza la herufi 6 linapita urefu wote wa neno huku sehemu ya kulenga ikiwa imewekwa herufi 3 kushoto na kulia mwa mpaka husika. Darasa la kielelezo linaeleza kama mpaka husika unachorwa kwenye sehemu ya ugawaji katika umbo lake lililotenganishwa na kama herufi zozote ndani ya dirisha lake la kulia la herufi 3 zinapaswa kupitia mabadiliko ya tahajia katika kupata ugawaji wake wa kikanuni. Ukubwa wa dirisha wa herufi 6 ulionekana kutosha kwa kazi hiyo kwa kuwa sheria nyingi za mabadiliko ya aina ya ubadilishaji zinaanzia kati ya herufi 1 na 3. Mwishoni, ugawaji kikanuni hupatikana kwa kuunda umbo la uso la neno kulingana na sheria za mabadiliko zilizotabiriwa.

Jedwali la 1: Sheria za ugawaji kwa neno ngokuphathelene

p04-01.png

Kwa mfano wa njia hiyo, Jedwali 1 lina mifano 16 ambayo ilizalishwa kutoka neno la isiZulu ngokuphathelene ("in relation to") pamoja na tabaka zake za mabadiliko ya kimorfolojia na ugawaji zinazozalisha ugawaji wake wa kawaida. Tabaka zilizozalishwa zinaweza kueleza aina tano tofauti za mabadiliko, ya kwanza inawakilishwa katika mfano 1 kwa tabaka ya "=". Hii inaonyesha kwamba hakuna mabadiliko au mgawanyiko unafanyika katika hatua ya sasa ya mkazo katika fomu ya awali ya uso. Madarasa haya yanaashiria kutokuwa na tofauti kati ya umbo la uso na ugawaji kikanuni kwa muktadha wa kulia katika sehemu ya mkazo. Aina ya pili ya darasa inawakilishwa katika kielelezo cha 4 (o>a*u*) ambacho ni kielelezo cha mabadiliko ya ubadilishaji. Madarasa haya yamepewa herufi iliyo upande wa kushoto wa sehemu ya kulenga lakini yanaweza kujumuisha herufi kutoka muktadha wa kulia wakati mageuzi yanaathiri herufi nyingi kama katika kisa cha 15 (ne>0). Nyota zozote zilizomo ndani ya darasa zinawakilisha sehemu za ugawaji katika umbo la kikanuni. Kisa cha 6 (*) kinaonyesha nyota kama darasa huru linaloashiria sehemu ya ugawaji katika umbo la kikanuni la neno katika sehemu ya sasa ya kulenga. Aina ya nne ya uainishaji inaonyesha kuingizwa kwa herufi katika mpaka uliotolewa kama katika mfano 13 (0>an*il*) ambapo herufi na alama za kugawanya "an*il*" zinatakiwa kuingizwa kati ya herufi l na e. Darasa la tano na la mwisho linaashiria uondoaji wa herufi kama katika kisa cha 15 (ne>0) ambapo herufi za mwisho "ne" zinapaswa kuachwa katika umbo la neno lililogawanywa kikanuni.

Madarasa yalitolewa kwa kutumia ulinganishaji wa mfuatano mrefu zaidi unaopungua kati ya maumbo ya uso na ya kikanuni ili kutenga tofauti katika kiwango cha herufi. Hii ilitoa msingi wa mfano uliopo kati ya 447,605 (SS) na 481,153 (NR) ambao unajumuisha darasa 98 (NR), 122 (SS), 96 (XH), na 124 (ZU) tofauti, lakini ukiondoa darasa zisizo za kawaida zenye masafa ya tukio ya chini ya 3. Katika lugha zote nne, darasa zinazotokea mara nyingi zaidi ni (=) na (*), zikiwa na zaidi ya asilimia 50 ya matukio yote ya darasa katika kila lugha.

Ili kubaini ni algoriti gani ya kujifunza iliyofaa zaidi kazi ya ugawaji wa kikanuni, TiMBL ilifunzwa kwenye vielelezo vilivyozalishwa kwa kutumia kila moja ya algoriti tano za jirani wa karibu zaidi za k-NN ambazo inaziunga mkono. Utafutaji wa parameta ulitumika kama sehemu ya jaribio hili ili kubaini ni marekebisho yapi ya parameta juu yanaweza kutoa usahihi mkubwa zaidi wa utabiri. Kwa kuwa mbinu ya ngazi mbili inategemea ugawaji uliotabiriwa, ilikuwa muhimu kupata utenganishaji wa kimofolojia unaotegemeka ili kuhakikisha makosa machache iwezekanavyo ambayo yanaweza kuzuia uwezo wa ngazi ya pili wa kufafanua kwa uhakika kila mofimu na uchanganuzi wa kimofolojia unaohusiana. Mwishowe, IB2 iligundulika kuwa inatoa usahihi mkubwa zaidi. IB2 inafanya kazi sawa na algoriti nyingine za kujifunza kwa msingi wa kumbukumbu kwa kuweka vielelezo kwenye kumbukumbu vinavyochangia uainishaji unaowezekana wa vielelezo visivyoonekana wakati wa kujifunza na hutumia kipimo cha umbali kubaini uhusiano wa darasa. Hata hivyo, IB2 inatumia mkakati wa kuhariri wa kuongeza ambapo msingi wake wa matukio unawekwa kwa idadi fulani (kawaida ndogo) ya matukio na kuongeza matukio kwenye kumbukumbu tu pale inapokosewa uainishaji na kigawanyaji cha k-NN. Dhamira ya nyuma ya mbinu hii ni kujenga msingi wa vielelezo ambao kwa kawaida huanzisha mipaka au vielelezo muhimu ndani ya kumbukumbu na vielelezo vinavyokengeuka au visivyo vya kawaida ili kuruhusu ujumlishaji mkubwa zaidi. Ili kuboresha zaidi ujumlishaji, kila kielelezo chenye dirisha kilihusishwa pia na kipengele cha saba ambacho ni, lebo halisi ya POS ya tokeni. Hii iliboresha usahihi wa makundi yaliyotabiriwa kwa takriban asilimia 1 hadi 2.

## 4.2 Daraja la 2: Uwekaji Tagi wa Kimofolojia

Daraja la pili la mkabala huu linahusisha kupitisha kipanga tagi cha POS ili kuiga madarasa ya mofimu za kisintaksia za tokeni zilizogawanywa kikanuni. Mgombea aliyechaguliwa kwa mkabala huu ni MarMoT, (Müller et al. 2013) kutokana na bomba lake la NLP linaloweza kufunzwa na matumizi yake yenye mafanikio kama kipanga tagi cha POS kwenye lugha za Kinguni zilizozingatiwa katika Du Toit & Puttkammer, 2021. Kwa sababu madarasa ya kimofolojia yanategemea muktadha, kuchukulia kazi ya uwekaji tagi wa kimofolojia wa kisintaksia wa mofimu sawa na ule wa uwekaji tagi wa POS kunasaidia kuchukua fursa ya uwezo wake wa kujifunza utabiri ndani ya muktadha wa sentensi. Hili linafikiwa kwa kuchukulia kila mofimu iliyogawanywa kama neno na kuzipanga kwa mfuatano ili kufanana na sentensi, hivyo kutambua muundo wa ndani wa mofimu wa neno kama muktadha wa karibu katika utabiri wao wa tagi.

Mofimu zilizogawanywa hutolewa kwa kipanga tagi kama maneno pamoja na tagi halisi ya POS ya neno kama kipengele cha ziada. Hii iliboresha ubora wa utabiri wake wa darasa la kimofolojia ya kisintaksia kwa kuongeza usahihi wa uwekaji tagi kwa takriban pointi za asilimia 1 hadi 3.

## 5 Matokeo

Data iliyochorwa iliyotengenezwa kama sehemu ya mradi huu imegawanywa kulingana na mgawanyiko wa takriban 90% ya mafunzo na 10% ya majaribio. Bila kujumuisha alama yoyote ya uakifishaji, hesabu zifuatazo za tokeni zinaunda kila mgawanyo wa seti ya data.

Jedwali la 2: Hesabu za tokeni kwa kila seti ya data ya lugha

p06-01.png

Ili kutathmini uwezo wa kugawanya wa TiMBL, seti za majaribio zilizotajwa hapo awali zilibadilishwa kwanza kuwa mifano ya dirisha ya herufi 6 na sheria za kugawanya zilizalishwa. Kila tukio kisha lilihusishwa na ubadilishaji na kanuni ya mgawanyiko kama uainishaji uliokusudiwa. Vielelezo pia vilijumuisha lebo ya POS ya tokeni kama kipengele cha saba, cha ziada pamoja na herufi zake 6 zenye madirisha. Hatimaye, mifano minne iliyofundishwa ya TiMBL ilitathminiwa kwa kuwasilisha mifano ya dirisha kwa ajili ya uainishaji. Kwa kulinganisha utabiri wa darasa na sheria za kugawanya zilizokusudiwa, usahihi wa utabiri kati ya 96% na 98% ulipatikana kwa kila moja ya mifano maalum ya lugha. Matokeo haya yameorodheshwa kwenye Jedwali 3.

Jedwali 3: Usahihi wa utabiri wa sheria za ugawaji na ubadilishaji wa daraja

p06-02.png

Vivyo hivyo, ili kutathmini uwezo wa MarMoT wa kuweka alama za kimorfolojia na kisintaksia, seti ya majaribio ya vitengo viligawanywa katika morfemi zao zilizokusudiwa na alama zao zinazohusiana za kimorfolojia.

Seti za majaribio ziliwasilishwa kwa MarMoT kwa ajili ya utambulishaji pamoja na kitambulisho cha POS cha tokeni kama kipengele cha ziada. Kwa kulinganisha alama za kimaumbo zilizotabiriwa na zile zilizokusudiwa, usahihi wa utabiri kati ya asilimia 91 na 96 ulipatikana kwa kila moja ya mifano ya lugha maalum. Matokeo haya yameorodheshwa kwenye Jedwali 4.

Jedwali la 4: Usahihi wa utabiri wa utambulishaji wa mofimu za kisintaksia

p06-03.png

Hatimaye, Usahihi wa pamoja wa ngazi zote mbili ulitathminiwa kwa kusambaza ugawaji wa kikanuni uliotokea ndani ya MarMoT kwa ajili ya utambulishaji wa kimofolojia wa kisintaksia. Hii ilifanywa kwa kutumia sheria za mabadiliko na uainishaji zilizotabiriwa katika ngazi ya kwanza kwa vitengo vya seti ya majaribio ili kuzalisha morfemi zilizogawanywa kwa kanuni. Mofimu hizi kisha zilitambulishwa na MarMoT ili kupata daraja lao la kimofolojia ya kisintaksia. Matokeo ya daraja la kwanza yalitathminiwa kwa kulinganisha idadi ya mofimu zinazolingana kati ya seti ya majaribio iliyokusudiwa ya ugawaji wa kikanuni na mabadiliko yaliyotabiriwa yenye msingi wa sheria ya tokeni. Vivyo hivyo, uhusiano wa tagi ya kimofolojia na mofimu ulitathminiwa kwa kulinganisha jozi za mofimu na tagi zilizotabiriwa na jozi za seti ya majaribio iliyokusudiwa kwa kila tokeni. Matokeo haya yameorodheshwa kwenye Jedwali 5.

Jedwali la 5: Usahihi wa utabiri wa ugawaji wa kikanuni na utambulishaji wa kimofolojia

p06-04.png

## 6 Hitimisho

Ili kuhakikisha maendeleo endelevu ya teknolojia za lugha za binadamu, ni muhimu kwamba rasilimali zitengenezwe na kusambazwa. Tumeelezea jitihada moja kama hiyo iliyofadhiliwa na serikali ya Afrika Kusini kwa lugha nne za Nguni zenye uhaba wa rasilimali. Rasilimali hizi zinapatikana kama moduli za Programu huria kutoka katalogi ya rasilimali ya SADiLaR na zinaweza kuwasaidia watafiti na watengenezaji katika kuboresha na kupanua ufikiaji wa teknolojia ya lugha. Zaidi ya hayo, mbinu zilizochukuliwa kuelekea uchanganuzi wa kimofolojia katika kiwango cha mofimu cha lugha ambatishi zinaweza pia kutoa ushahidi wa uwezekano wake na utumikaji wake kwa lugha zinazofanana. Rasilimali za maneno zilizotolewa kama sehemu ya mradi huu zitawezesha uboreshaji zaidi na mbinu mbadala katika kuendeleza teknolojia zinazohusiana na lugha.

## Shukrani

Utafiti huu uliwezekana kwa msaada wa Kituo cha Afrika Kusini cha Rasilimali za Lugha za Kidigitali (SADiLaR). SADiLaR ni miundombinu ya utafiti iliyoanzishwa na Idara ya Sayansi na Ubunifu (DSI) ya serikali ya Afrika Kusini kama sehemu ya Ramani ya Miundombinu ya Utafiti ya Afrika Kusini (SARIR).

## Maelezo

1 https://ufal.mff.cuni.cz/udpipe/2

2 http://cistern.cis.lmu.de/marmot/

3 https://repo.sadilar.org/handle/20.500.12185/7

## Marejeo

Bosch, S, Jones, J, Pretorius, L & Anderson, W 2006, 'Resource development for South African Bantu languages: computational morphological analysers and machine-readable lexicons' In Proceedings on the Workshop on Networking the Development of Language Resources for African Languages at the 5th International Conference on Language Resources and Evaluation, pp. 38-43.

Daelemans, W, Zavrel, J, Van Der Sloot, K & Van den Bosch, A 2004, TiMBL: Tilburg memory-based learner, version 6.4: reference guide, Tilburg, Tilburg University.

Du Toit, JS & Puttkammer, MJ 2021, Developing Core Technologies for Resource-scarce Nguni Languages. Manuscript submitted for publication.

Eiselen, R & Puttkammer, MJ 2014, 'Developing Text Resources for Ten South African Languages', In Proceedings of the 9th International Conference on Language Resources and Evaluation (LREC 2014), pp. 3698-3703.

Gaustad, T & Puttkammer, MJ 2021, Linguistically annotated dataset for four official South African languages with a conjunctive orthography: isiNdebele, isiXhosa, isiZulu, and Siswati. Manuscript submitted for publication.

Müller, T, Schmid, H & Schütze, H 2013, 'Efficient higher-order CRFs for morphological tagging.' In Proceedings of the 2013 Conference on Empirical Methods in Natural Language Processing, pp. 322-332.

Pilon, S, Puttkammer, MJ & Van Huyssteen, GB, 2008. 'Die ontwikkeling van 'n woordafbreker en kompositumanaliseerder vir Afrikaans', Journal of Literary Criticism, Comparative Linguistics and Literary Studies, vol. 29 no. 1, pp. 21-41.

Prinsloo, DJ & De Schryver, GM 2002, 'Towards an 11 x 11 array for the degree of conjunctivism/disjunctivism of the South African languages', Nordic Journal of African Studies, vol. 11 no. 2, pp. 249-265.

Ruokolainen, T, Kohonen, O, Virpioja, S & Kurimo, M 2013, 'Supervised morphological segmentation in a low-resource learning setting using conditional random fields' In Proceedings of the Seventeenth Conference on Computational Natural Language Learning, pp. 29-37.

Sorokin, A & Kravtsova, A 2018, 'Deep convolutional networks for supervised morpheme segmentation of Russian language' In Conference on Artificial Intelligence and Natural Language, pp. 3-10

Straka, M 2018, 'UDPipe 2.0 prototype at CoNLL 2018 UD shared task' In Proceedings of the CoNLL 2018 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies, pp. 197-207.

Van den Bosch, A & Daelemans, A 1999, 'Memory-based morphological analysis' In Proceedings of the 37th annual meeting of the association for computational Linguistics, pp. 285-292.

Zalmout, N & Habash, N 2017, 'Don't throw those morphological analyzers away just yet: Neural morphological disambiguation for Arabic' In Proceedings of the 2017 Conference on Empirical Methods in Natural Language Processing, pp. 704-713.
