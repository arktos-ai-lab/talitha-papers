> Machine translation (sw) of "A Computational Grammar of Ga" by Lars Hellan, https://aclanthology.org/2020.rail-1.7/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Sarufi komputa ya Ga

Lars Hellan

**Taasisi**  
Lars Hellan  
Norwegian University of Science and Technology, Norway  


## Muhtasari

Makala hii inaeleza vipengele vya sarufi komputa ya mtindo wa HPSG ya lugha ya Kiafrika Magharibi ya Ga (lugha ya Kikwa inayozungumzwa katika eneo la Accra nchini Ghana). Kama lugha ya Kikwa ya Bonde la Volta, Ga ina aina nyingi za misemo ya vitenzi vingi na mifumo mingine mahususi ya kiujenzi katika kikoa cha vitenzi na nomino. Makala hii inaangazia vipengele vya kinadharia na rasmi vya sarufi vinavyochochewa na matukio haya, baadhi yake ikiwezekana ni ya kibunifu kwa mfumo rasmi. Kama inavyojulikana kuwa sarufi ya kina ya lugha, ina muundo tajiri wa kileksika, na tunaeleza njia ambazo sarufi hujengwa juu ya rasilimali za kileksika zilizokuwepo awali. Twaonyesha mazingira ya rasilimali za sasa ambamo sarufi ni sehemu, na namna mbalimbali za utafiti na maendeleo ambamo hiyo na mazingira yayo yaweza kutumiwa.

## Maneno Muhimu

Ga, Kwa, sarufi komputa, miundo ya vipengele yenye aina, uchanganuzi wa utungaji katika ngazi ya ujenzi, miundo ya nomino, ujenzi wa vitenzi vingi

## 1. Utangulizi

Ga ni lugha ya Kikwa inayozungumzwa katika eneo la Accra nchini Ghana ikiwa na wasemaji takriban 745,000. Maelezo ya lugha yanarudi nyuma hadi mwanzoni mwa miaka ya 1800 (cf. Rask (1828)), na ingawa rasilimali za maandishi ya kidijitali ni chache, imechunguzwa vizuri kisarufi, na ina baadhi ya rasilimali za hali ya juu kama vile kamusi ya Kiga-Kiingereza (Dakubu 2009). Makala haya yanaelezea rasilimali za kidijitali ambazo kwa namna muhimu zinatokana na kamusi hii na leksimu yake msingi ya Toolbox. Tunalenga hasa sarufi ya kikompyuta ya Kiga, ambayo uundaji wake ulianza mwaka 2005, na pia leksimu ya valensi, ambayo uundaji wake ulianza mwaka 2008. Maendeleo hayo yaliratibiwa, ingawa kila moja kwa kasi yake, na kufanywa kwa pamoja na Profesa Mary Esther Kropp Dakubu na mwandishi hadi kifo cha Prof. Dakubu mwaka 2016.

Sarufi za kikompyuta ni programu ambazo hupeana kiotomatiki aina mbalimbali za uchanganuzi kwa sentensi za lugha - zinaanzia kwa vichanganuzi vya kimofolojia, ambavyo hutambua aina za maneno (POS) na muundo wa kimofolojia, kupitia vichanganuzi vya utegemezi ambavyo hutambua vishazi vya kisintaksia na mahusiano ya utegemezi kati ya maneno ndani ya kishazi na kati ya vishazi, hadi kwa wale wanaoitwa vichanganuzi 'vya kina' ambavyo pia hutambua miundo ya kileksika na sifa za semantiki za maneno na michanganyiko yake. Vipashio vya kina huonyesha miundo ya sarufi rasmi kama vile sarufi ya kazi ya kileksika (kifupi "LFG", cf. Bresnan (2001)) na sarufi ya muundo wa sentensi inayoongozwa na kichwa (kwa kifupi "HPSG", taz. Pollard na Sag (1994), Copestake (2002)); sarufi itakayowasilishwa inafuata hasa HPSG lakini ikiwa na baadhi ya vipengele vya LFG; kitaalamu inatengenezwa kwenye jukwaa la LKB lililoelezwa katika Copestake (2002).

Leksika za valence za kitenzi ni leksika zinazotoa uorodheshaji mfupi wa fremu za valence za kila kitenzi, yaani, uorodheshaji wa mazingira yanayowezekana ya kitenzi yakielezewa kwa kuzingatia vitu vinavyoitwa vinavyofungamana na valence katika mazingira hayo (kwa kufuata istilahi ya Tesnière (1959)). Mahali pa kukutana kwa kanuni kati ya leksika za valence na sarufi za kina ni kwamba leksika ya kitenzi ya sarufi ya kina itakuwa na taarifa dhahiri za valence. Kutoka upande wowote mtu anaweza hivyo kupata mwingine (na hata kwa zamu kufanya maboresho ya mzunguko, kwa kutumia manufaa ya ufafanuzi kwenye upande uliopatikana unaoonekana kuwa muhimu pia kwenye upande mwingine, na kinyume chake). Katika kisa hiki, mara tu leksika ya valence ilipoanzishwa, iliingizwa ndani ya sarufi.

Aina zote mbili za rasilimali zina msingi imara katika lugha za Kihindi-Kiulaya, na mtu anaweza kutaja aina mbalimbali za matumizi ya kivitendo ambazo zinahudumia. Hata hivyo, kinachovutia sawa ni kile ambacho rasilimali hizi za Ga zinaweza kutuambia kuhusu ni zipi miundo ya msingi na ya lazima ya sarufi na valence. Kwa mfano, katika sarufi yenye msingi wa HPSG, tofauti kati ya hoja (yaani, iliyofungamana na valence) na kijalizo (yaani, kisichofungamana na valence) ni ya msingi kama ilivyo katika mila za kiisimu katika lugha za Kihindi-Kiulaya, na swali ni kama inaweza kudumishwa katika sarufi ya lugha ya Kwa. Vivyo hivyo, utamkaji wa kisarufi wa baadhi ya miundo ya semantiki ni tofauti kabisa katika Kiga kuliko inavyotarajiwa katika lugha za Kihindi-Kiulaya.

Ili kuwa thabiti zaidi, lugha za Kikwa kama Ga na Akan zinajulikana kutumia kidogo vihusishi na vivumishi, hivyo miundo inayohusisha nomino na vitenzi inaweza kuonekana ikifanya jukumu kubwa kuliko, kwa mfano, katika lugha za Kihindi-Kiulaya. Hivyo, misemo ya vitenzi vingi inajulikana kuchukua nafasi kubwa katika lugha, ikijumuisha Miundo ya Vitenzi Mfululizo (SVCs), Miundo ya Vitenzi Iliyopanuka (EVCs) ambayo ni mfuatano wa vitenzi vya awali vinavyotangulia kitenzi kikuu, na Miundo ya Vitenzi-Nomino (ViD), ambapo virai vya vitenzi huchukua nafasi sawa na ile inayochukuliwa na vielezi katika lugha za Kihindi-Kiulaya (angalia Dakubu 2004a, 2008, Dakubu et al. 2007, Dakubu 2013 kwa uchambuzi wa aina nyingi za miundo). Miundo kama hiyo inaleta swali kama kunaweza kuwa na zaidi ya kichwa kimoja cha kitenzi kwa kila sentensi; na kama sivyo, kama tofauti kati ya hoja na kielezi ina umuhimu wowote katika kuelezea uhusiano kati ya vitenzi. Onyesho lingine la ukosefu wa vihusishi ni kwamba ubainishaji wa anga mara nyingi huchukua umbo la miundo ya transitivu. Zaidi ya hayo, vibainishi vya kabla ya nomino vinaonyesha utata unaozidi kwa mbali ule unaopatikana katika lugha za Kihindi-Kiulaya. Aina za miundo hiyo ya mwisho zitapewa mifano na kuchambuliwa katika sehemu ya 2. Katika sehemu ya 3 tunatoa mifano na kuonyesha uchambuzi wa miundo ya vitenzi vingi. Sehemu ya 4 inaelezea maendeleo ya kamusi ya valensi kutoka chanzo cha Toolbox, na rasilimali zinazoambatana nayo. Sehemu ya 5 yazungumzia uwezekano wa maendeleo zaidi ya rasilimali zinazoelezwa. Mifano kote inatoka katika kazi za Dakubu zilizotajwa hapo juu, kutoka "Ga Appendix" ya Hellan na Dakubu 2010, na kutoka Dakubu (Haijachapishwa a). Huu wa mwisho ni uwasilishaji wa leksimu ya valensi ambao tutakuwa tukirejelea, ukiwa na viingizo vipatavyo 2000, ambapo kila kiingizo kinawakilisha fremu moja ya kitenzi fulani. Hivyo, wakati kitenzi kina fremu n, kitawakilishwa katika viingizo n. Kwa kila kiingizo hutolewa mfano mfupi, ambapo hii pia ni korasi ya sentensi fupi.

## 2. Kompleksi nomino zenye nomino za uhusiano na miundo ya umiliki

## 2.1 Mifano

Kompleksi nomino zenye nomino za uhusiano na miundo ya umiliki zinatolewa mfano katika (1):

p02-patch01.png

Katika kila sentensi, NP kamili inaongozwa na nomino ya uhusiano ambayo ina kibainishi cha umiliki, na kibainishi hiki kina kirejeleo cha pamoja na kiwakilishi (kama kiambishi awali au kinachojitegemea). Kati ya sentensi 2000 katika mkusanyiko uliotajwa, si chini ya 690 zina yambwa inayoongozwa na nomino ya uhusiano, na 100 zina kiima kinachoongozwa na nomino ya uhusiano, mara nyingi zikiwa na usomaji wa sehemu ya mwili au utambulisho. Hii inathibitisha umuhimu wa kuwakilisha kwa uchanganuzi vikundi vya nomino vyenye nomino za uhusiano na miundo ya umiliki.

## 2.2 Uchambuzi

Sehemu ya kwanza ya sarufi hufuata HPSG Matrix (Bender et al. 2010), iliyoonyeshwa katika Dakubu et al. 2007, wakati katika toleo la hivi karibuni zaidi sarufi imeundwa kulingana na usanifu ulioonyeshwa katika Hellan 2019; wote wawili hutumia jukwaa la LKB, ambalo mfumo wake ni mfumo wa Typed Feature Structure (TFS). Taarifa katika mfumo kama huu kwa ujumla huonyeshwa kupitia Attribute Value Matrices (AVMs), ambapo kila AVM ni ya aina fulani, na sifa huletwa (kutangazwa) kulingana na mikataba ifuatayo:

[A] Aina fulani huleta sifa ileile bila kujali inatumika katika mazingira yapi.

[B] Sifa fulani inatangazwa na aina moja tu (lakini hutokea na aina zake zote ndogo).

Katika TFS inayowakilisha sarufi, kuna hierarkia nyingi za aina, zinazowakilisha POS, nyakati, majukumu ya semantiki, n.k. ; baadhi ya hierarkia hizi hazina sifa, ilhali zifuatazo zina. Aina za kazi za sarufi (maadili ya sifa "GF") na actants (washiriki katika muundo wa hoja ya semantiki, inayowakilishwa kama maadili ya sifa "ACTNT") ni pamoja na wale walioonyeshwa hapa chini: aina ndogo za gramfct hutangaza sifa za GF ("SUBJ" na "OBJ") na aina ndogo za actnt hutangaza sifa za muundo wa hoja ya semantiki ("ACT1" na "ACT2"):

p02-03.png

Jinsi sifa hizi zinavyoungana katika AVM ya muundo mpitishi, kama katika sentensi kama John alikula keki, inaonyeshwa katika (3); uhesabuji-pamoja "1" na "2" unaonyesha kwamba faharasa rejeleo ya kiima ni ACT(ant)1 na faharasa rejeleo ya yambwa ni ACT(ant)2:

p02-04.png

Ingawa muundo kama (3) utaakisi vipengele vya kiujenzi vya sentensi kama John alikula keki, uwakilishi wa maana yake pia utaakisi maudhui ya maneno mbalimbali. Mkakati wa "semantiki ya jiwe la kwanza la kukanyagia" ni kuweka tu uwakilishi wa neno lenyewe katika nafasi iliyotengwa kwa ajili ya muundo wa hoja za semantiki, ambayo kwa sentensi inayohusika itamaanisha kupanua (3) kama (4) (modulo uwekaji alama wa uhakika wa yambwa):

p03-01.png

Ili kupata hili, kila neno lazima libainishwe kimsamiati kwa mchango wake wa semantiki, pamoja na mapishi ya jinsi linavyolingana kuhusiana na muundo wa jumla (4). Matumizi ya orodha za valensi katika HPSG hutimiza kusudi hilo; kwa kisa kinachohusika, eat kwa hivyo kitakuwa na kama ubainisho wake wa kimsamiati muundo kama (5), ambapo sifa za orodha ya valensi SPR na COMPS huorodhesha vipashio ambavyo neno linapaswa kuungana navyo (ambapo kushindwa kwa vipashio vinavyofaa kupatikana katika mfuatano wa maneno unaochanganuliwa kunamaanisha kwamba muundo huu wa kimsamiati haufai kwa mchakato wa uchanganuzi):

p03-02.png

Kanuni ya uchanganuzi kimsingi ni muhimu ikiwa mtu anataka kufasiri sarufi kama yenye utungaji, kwa kuwa utungaji unakaa katika mahusiano ya kiunganishi kati ya viambajengo, ikimaanisha kwamba sarufi kwa ujumla wake ina utungaji ikiwa matukio yote yanayopaswa kufunikwa nayo yanaweza kufasiriwa kwa kutumia tu shughuli za kiunganishi zinazohusisha sehemu zote za sentensi zilizochanganuliwa.

Inaweza kubainishwa kwamba HPSG sanifu katika suala hili ni mkabala wa uchanganuzi pekee, kwa kuwa haujumuishi dhana za GF, hivyo kwamba uwakilishi wa uchanganuzi utakuwa bila GF na huku orodha zote mbili za valence zikiwa tupu, hivyo kuwa na taarifa chache kuliko (4). Kuongeza dhana kama hizo kwenye urasimi wa uchanganuzi kunaimarisha urasimi huo, jambo ambalo linaweza kuwa lisilohitajika kwa misingi mingine, na kusababisha hali ambapo mtu huchagua kati ya miundo kwa misingi mingine isiyo ya kijarabati tu. Hata hivyo, tunapogeukia maeneo yaliyochaguliwa ya sarufi ya Kiga yatakayozingatiwa, tutaona kwamba hata kutoka mitazamo ya uchanganuzi, kunaweza kuwa na sababu za kutumia GF katika urasimi. Katika (1d), kurudia:

p03-03.png

tunataka kuwakilisha kiima kama kishazi cha kimilikishi, ambapo kirejelewa cha kishazi kizima ni sehemu (ya mwili) ya kibainishi "mi", na kibainishi hiki pia kinafanana na yambwa; kwa mujibu wa semantiki. Ya kwanza kati ya mipangilio hii tunaweza kuiwakilisha kama katika (6), ikiwa na lebo "kiima ni Sehemu ya Mwili ya kibainishi cha kiima" (bila shaka tukizungumzia virejelewa vyake), na ya pili kama (7), kwa mtindo sawa ikiwa na lebo "kibainishi cha kiima kinafanana na yambwa":

p03-04.png

p03-05.png

Katika uwakilishi kamili wa sentensi, (6) na (7) zinapaswa kuungana na uwakilishi wa kitenzi kama (8):

p03-06.png

Hata hivyo, ingawa gba "pasua" ni kitenzi elekezi, kukifafanua kwa urahisi kwa kigezo cha (5) kutashindwa kushawishi mahusiano kati ya kibainishi cha kiima na kiima na yambwa. Kinachohitajika ni uwakilishi wa kileksika unaoweza "kutazama ndani" ya kiima, hivyo "kuona" kipengele ambacho kuhusiana na orodha ya valence ya nomino kikuu kingeweza kuwakilishwa kama orodha "<[SPR]>". Hii inawakilisha muundo wa "kutokuwa karibu" ambao nukuu ya orodha ya valence haijafafanuliwa (yaani, kumaanisha kubainisha orodha ndani ya kipengele ndani ya orodha ya "SPR"). Njia ambayo kwayo tunaepuka kukiuka kizuizi hiki ni kwa, badala ya orodha ya ziada iliyopachikwa, kutumia sifa za GF zinazoakisi jinsi zinavyotumika katika (8), ili kwamba ubainishaji wa kileksika wa gba kuhusiana na aina ya fremu inayohusika ni (9):

(9) Ingizo la kileksika la gba katika (1d):

p04-01.png

Kwa hoja sawa kwa visa vingine katika (1) na miundo inayohusiana, hii inaonyesha matumizi ya kujumuisha GF kama muundo pia katika algoriti ya uchanganuzi. Visa sawa havijawa maarufu katika mjadala wa muundo wa toleo sanifu la HPSG, na hivyo jambo la viambajengo vya Nomino vyenye nomino za uhusiano na miundo ya umiliki linaweza kuwakilisha motisha kwa kipengele hiki cha marekebisho ya muundo rasmi wa jumla, na hivyo motisha inayotoka kwa Kiga. Imekubaliwa katika sarufi ya sasa.

## 3. Misemo ya vitenzi vingi

Aina za misemo ya vitenzi vingi zimeelezwa vizuri katika fasihi, kwa hivyo hapa tunaelekeza tu kwenye aina mbili na kujadili baadhi ya masuala ya uchambuzi wake.

## 3.1 Ujenzi wa Kitenzi Mfuatano (SVC)

SVC inatokea kama mpangilio wa idadi yoyote ya VP, na usawa mkubwa kati ya vitenzi, zote katika umbo lao na kuhusu hoja zao. Ufafanuzi unatoka kwenye mfululizo wa wakati wa matukio yanayoakisi mpangilio wa VP hadi mchanganyiko maalum zaidi wa jozi. (10) ni mfano wa aina ya pili (kutoka Dakubu (haijachapishwa a)):

p04-02.png

SVC hii ina vitenzi viwili, na kama ilivyo kawaida katika SVCs za Kiga, vyote vikiwa na kiima kinachoonyeshwa na klishiki; viima vinafanana, na vivyo hivyo na nyakati za vitenzi.

Katika muundo wa AVM, hili linaweza kufichuliwa kwa njia ya wazi kama ifuatavyo, ambapo dhana "V1', "V2' ni vibandiko vya kawaida vya VPs katika mfululizo wa SVC:

p04-03.png

Sasa tunakabili swali kama SVC inapaswa kuhesabiwa kuwa yenye vichwa vingi, au kama kuna sababu za kiisimu za kuhesabu VP moja kama kichwa na nyingine kama kitu kingine. VPs katika SVCs kwa ujumla zimeunganishwa kwa nguvu sana kiasi cha kutokuhesabiwa kama miundo ya ushirikiano - angalia. Hellan et al. (2003) kwa majadiliano yanayohusiana na VPs zilizopangwa kwa mfululizo wa wakati katika SVCs katika Akan (mara nyingi hujulikana kama 'SVCs za mnyororo'), hoja ambayo inaweza pia kutumika kwa Ga, na hasa kwa kesi kama hii ambapo tafsiri si ya mpangilio wa wakati. Ikiwa si muundo wa uratibu, uwezekano mwingine unaweza kuwa muundo wa ukamilishaji: ingawa gbele ('fungua') haina maana ambayo ingechochea kuhesabu VP inayofuata kama kikamilisho, mtu anaweza pengine kuhesabu muundo mzima kama kitengo cha kifrazi na kitaalamu kuhesabu kitenzi cha kwanza kama kinachofunga VP ya pili kwacho kama sehemu isiyobadilika. Chaguo la tatu ni uchanganuzi wa mfuatano wa VP kama kiambatisho kati ya VP; hili kwa ujumla linawezekana kwa visa vya VP vilivyopangwa kwa mfuatano wa muda ambapo idadi yoyote ya VP inaweza kutokea kwa uhuru; miundo kama (10) inaweza basi kutibiwa kama kisa chenye mipaka cha miundo kama hiyo.

Ukizingatia hii kuwa ya uwezekano zaidi kwa mfuatano wa VP 'wa bure', jinsi gani hii inaweza kutumika kwa umbo rasmi, na jinsi sifa V1 na V2 katika kesi ingetangazwa? Kuambatanisha au kurekebisha VP kwa kawaida hufasiriwa kuwa kiambatisho ni kiarifu cha tukio linaloonyeshwa na VP kuu. Hii itakuwa si kweli kwa mfuatano wa VP, kwa sababu VP iliyoambatishwa inaarifiwa kuhusu kitu kile kile ambacho VP kuu inaarifiwa. Ili kueleza hili, sarufi lazima iwe na, pamoja na kanuni ya 'urekebishaji wa tukio', kanuni ya urekebishaji inayoweka ulazima wa urejeleaji pamoja kati ya viima. (12) ni kanuni kama hiyo, inayolinganisha ACT1 ya kijalizo ('NON-HEAD-DTR') si kwa faharasa ya tukio ya kichwa, bali kwa faharasa ya kiima chake; hapa pia tunaonyesha kuanzishwa kwa 'V1' na 'V2'.

(12) Head-Modifier rule II (partial formlation)

p05-01.png

Kiwango hiki cha kanuni kitatumika kwa kujirudia wakati kuna zaidi ya VPs mbili.

Hadhi yenye msingi wa kanuni kama hiyo ya urekebishaji ni tena kipengele ambacho Ga na lugha zinazofanana zinaweza kuonekana kama zinaongeza uwezekano rasmi kwenye orodha rasmi zilizodumishwa hadi sasa.

Mchoro wa kawaida kabisa wa 'kushiriki hoja' katika SVCs ni ule wa viima vinavyofanana. Katika fasihi pia utambulisho kati ya vitu umetambuliwa - kama 'kushirikisha vitu' - na hata utambulisho kati ya kitu cha VP moja na somo la VP inayofuata, inayoitwa 'kubadilisha kushirikisha'. Hizi ni nadra katika Ga, lakini zinaonyeshwa katika Akan kwa mifano kama (13):

(13)

'kubadilisha kushiriki' kati ya kitu cha kitenzi moja na somo la kitenzi baadae (Akan)

p05-02.png

Tofauti na kisa kilicho hapo juu, ambapo orodha zote mbili za COMPS ni tupu wakati VP mbili zinapoungana, hapa mtu anahitaji kuweza kusema kwamba yambwa la VP ya kwanza linafanana na ACT1 ya VP ya pili. Utambulisho kama huo ni mgumu kueleza ikiwa yote ambayo mtu anaweza kurejelea katika VP ya kwanza ni orodha tupu ya COMPS. Mara tu kitu kinapowakilishwa pia katika vipimo vya GF vya VP ya kwanza, hata hivyo, mtu anakuwa na kigezo cha kurejelea. Mfano wa kugawana vitu katika lugha ya Ga umetolewa katika (16) hapa chini. Ingawa hadhi ya mifumo yote miwili inayohusisha vitu ina utata kidogo, aina zote mbili za miundo zinashughulikiwa katika sarufi, na zinaweza kutoa motisha zaidi ya kujumuisha dhana za GF katika urasimi wa sarufi.

## 3.2 Kitenzi Changamano Kilichopanuliwa (EVC) na zaidi

Kwa maelezo ya ujenzi huu katika lugha ya Ga, angalia Dakubu (2008), Dakubu et al. (2007), Dakubu (2004a), na katika Dangme, angalia Dakubu (1987). Aina ya muundo ina maslahi maalum kwa kuwa EVCs hutenda kama vitenzi vya pekee kuhusiana na mazingira, lakini zinaweza kugawanywa katika vipashio vinavyofanana na maneno, yaani idadi ndogo ya vitenzi-tangulizi (hadi vitatu mfululizo) pamoja na kitenzi kikuu. Mfano rahisi ni sentensi ya Ga (14), ambapo kɛ ni kitenzi-tangulizi:

p05-04.png

Valensi ya kitenzi kikuu huamua valensi ya kizima kuhusiana na kishazi kinachokizunguka, kiima chake lazima kiwe kiima cha vitenzi-tangulizi vyote vyenye dhima ileile, na uwekaji alama wake wa Aspekti, Modaliti na Ukanushi huamuliwa kabisa kutoka kushoto kwenda kulia. Vitenzi vingi vya awali havina yambwa, ni kɛ pekee ndiyo yenye yambwa.

EVC, ambazo huenda zenyewe ni SVC zilizoganda, zinaweza kutumika katika dhima ya vitenzi pia katika SVC, jambo ambalo linatoa muundo tata wa upachikaji wa vitenzi. Tofauti na SVC, katika EVC uchanganuzi wa kikamilisho ni wenye mantiki, kwa kuwa kitenzi-tangulizi kinahitaji kufuatwa na kitenzi - kitenzi-tangulizi kingine, au kitenzi kikuu. Uchambuzi huu umeelezwa katika Dakubu et al. (2007) na Hellan na Dakubu (2010), na umejumuishwa katika mfumo wa gramati.

Pia jambo la kutajwa ni ujenzi katika (15):

p05-05.png

Kishazi tsu mli katika rasilimali zetu kinahesabiwa kama kishazi nomino, na kinafanya kazi kama yambwa ya ba ("come", ambacho kwa kuongezea kina matumizi yasiyohusisha yambwa na mengineyo).

## 4. Kuendeleza rasilimali

Uti wa mgongo wa sarufi komputa ya kina ni leksimu yake. Mwanzo wa kamusi hii katika sarufi ya Kiga ni mradi wa Toolbox unaohifadhi data za kamusi iliyochapishwa kwa madhumuni ya jumla (Dakubu 2009). Faili ya leksimu katika mradi huu ina mistari 80,000 ya msimbo, ikiwa na viingizo 7080, ambapo 5014 ni vya nomino, na 935 ni vya vitenzi, ambapo 722 viliwekewa vidokezo vya valensi. Kutoka hazina hii ya Toolbox leksikoni ya valence iliundwa. Katika hatua ya kwanza, leksimu ya Toolbox iliongezewa taarifa za valensi hivi kwamba kila ingizo linaakisi fremu ya kipekee ya valensi au mazingira ya vitenzi vingi. Kwa mfano, kwa kitenzi su kama kinavyotumika katika sentensi (16), muundo wa ingizo la kileksika katika toleo lililorekebishwa la Toolbox ni kama unavyoonyeshwa katika Kielelezo 1; misimbo ya valence imeandikwa katika ingizo la kileksika kwa kufuata mtindo wa jumla wa "uwanja" wa Toolbox, ambapo nyuga zilizowekwa alama \pdl-\pdv zinawakilisha taarifa za kimofolojia za leksimu, na nyuga \xe, \xg, \xv kwa pamoja zinaunda glossing ya kawaida ya kiisimu huku \xv ikiwa ni mgawanyo wa neno-na-mofu, \xg ikiwa gloss ya kimofolojia na ya Kiingereza, na \xe ikiwa tafsiri huru ya Kiingereza; valence (au, kama ilivyo hapa, mazingira ya SVC) imesimbwa kama nyuga zinazoanza na \sl…;.

p06-01.png

p06-02.png

Kielelezo 1 Mfano wa ingizo la Ga la Toolbox lililoboreshwa kwa ufafanuzi wa valence/muundo wa CL

Kitenzi chenye fremu za valensi zaidi ya moja kikiwa na ingizo moja lililobainishwa kwa kila fremu, kitenzi ba, kwa mfano, kinawakilishwa na maingizo 15 tofauti katika toleo hili la faili ya Toolbox. Vileksimu 547 za vitenzi hapa zilipokea jumla ya viingizo 2006 vilivyofafanuliwa kwa namna hii. Katika Kielelezo 1, ubainishaji "\hm 3" unaonyesha kwamba hii ni ingizo la tatu lenye umbo su.

Ubainishaji wa msimbo katika sehemu za \sl huunganishwa pamoja katika mfuatano mmoja kama katika (17) (ukiacha \sl15 na \sl16), unaosomwa kama "SVC ambapo kiima na aspekti vinafanana katika VPs zote, dhima ya kiima ni mtenda, kichwa cha VP ya pili ni badilifu, yambwa ya VP ya kwanza inafanana na yambwa ya VP ya pili, na yambwa katika VP ya pili ni dhamira": 12

(17) svSuAspIDALL_suAg-v2tr-v1obIDv2ob-v2obTh

Lebo za mtindo huu ziliendelezwa kwa kujitegemea kama mfumo wa Construction Labeling formalism (CL) (angalia Hellan na Dakubu 2010, Dakubu na Hellan 2016), na moja ya lugha ambazo zilitumika ni Ga, katika orodha ya aina za ujenzi iliyotolewa katika Hellan na Dakubu 2010.

Sehemu ya kitenzi ya rasilimali ya kileksika iligeuzwa kuwa muundo wa data wa kileksika wa aina inayotumika katika sarufi za HPSG, ikijumuisha maingizo 1980 yaliyopewa namba kwa mfuatano, huku ubainishaji wa CL ukionyesha aina ya kileksika/muundo ambayo ingizo hilo linahusika. Kielelezo 2 ni mwenza wa moja kwa moja wa ingizo la Toolbox katika Kielelezo 1, likiwa na su_1448 kama kitambulisho cha ingizo, na sehemu ya fomula

':= …' ikimaanisha "kinahusika na aina ya muundo '…'; taarifa hii inaelezwa kuhusiana na kitenzi cha kwanza, ambacho kwa hivyo, kirasmi, kinahesabiwa kama kichwa:

p06-03.png

Picha 2 Mfano wa mtindo wa sarufi unaoendana na kuingizwa katika Picha 1

Ingawa huu ni uwakilishi wa kimuundo, uwakilishi wa valence unaweza kutolewa kwa namna sawa kutoka kwa ingizo la Toolbox, kwa hivyo, ingizo katika Kielelezo 3 litaingia moja kwa moja kwenye leksimu ya sarufi kama ingizo la valence la aina "badilifu lenye kiima mtenda na yambwa dhamira":

p07-01.png

Kielelezo 3 Ingizo la valensi la mtindo wa Sarufi ya Ga

Sentensi katika (16) pia huchanganuliwa na sarufi (ikichukulia rasmi VP cha pili kama kiambatisho, kama ilivyoainishwa hapo juu), lakini tu kuhusiana na fremu ya kitenzi elekezi ya su inayolingana na maana ya "kuroga".

Kwa lugha yenye aina nyingi za miundo ya vitenzi vingi, inaweza kujaribiwa kuingiza vielezi kamili kama (5) kwenye fremu ya kitenzi cha kwanza, na kufasiri pia kiambatanisho rasmi kama "kilichotabiriwa" na kitenzi kikuu, na hivyo kutenganisha fremu ya kiufundi ya mchanganyiko na kile ambacho kwa hisia ni fremu ya valensi. Hii, hata hivyo, si uwezekano ambao sarufi hii ya sasa inajitosa kuuchunguza.

Ili kupata taswira ya jinsi msemo wa vitenzi vingi unavyoweza kuhusishwa na kitenzi fulani, jedwali lifuatalo linaonyesha mara ngapi aina za SVC (kama "sv"), EVC (kama "ev") na muundo wa Verbid (kama "trVid" au "intrVid") zipo miongoni mwa mazingira ambayo kitenzi kinaweza kutokea (kwa mfano, leksimu 14 za kitenzi zinaweza kutokea katika mazingira ya kisichopitisha, kinachopitisha na SVC), kulingana na rasilimali iliyojengwa kwenye Dakubu (isichapishwa a):

Jedwali 1 Usambazaji wa vitenzi katika fremu za valensi na aina za miundo katika Ga

p07-02.png

Kusawazisha aina hizi za mazingira ya vitenzi vingi katika leksimu au nyenzo ya sarufi vinginevyo itakuwa miongoni mwa hatua zinazofuata za kuvutia katika kushughulikia nyenzo za kidijitali kwa lugha za Kwa za Bonde la Volta.

## 5. Sarufi na mazingira yake

Kama ilivyosemwa hapo juu, toleo la kwanza la sarufi ya Ga linafuata usanifu rasmi wa Pollard na Sag (1994), kama unavyotumika katika sarufi nyingi zinazotumia Grammar Matrix kama hifadhi ya pamoja ya miundo ya vipengele (Bender et al. (2010)). Toleo la baadaye, kama linavyoonyeshwa hapa, lina muundo rahisi zaidi wa vipengele, ambao unalenga kukidhi kwa njia ya moja kwa moja zaidi tofauti kati ya lugha. Mwongozo wa muundo wake wa vipengele unatolewa katika pdf 'Building Global Grammar', ambao huchukua kama hatua ya kuanzia sarufi rahisi ya utangulizi ya Kiingereza inayotumika kama kielelezo katika Copestake (2002), na hatua kwa hatua hujenga kile kinachoitwa hapo muundo wa vipengele wa 'kimataifa', pamoja na utekelezaji na maelezo. Maelezo yanaweza kupatikana katika https://typecraft.org/tc2wiki/TypeGram, kwa kiungo kutoka kwenye Utangulizi, wakati utekelezaji umeunganishwa kutoka http://regdili.hf.ntnu.no:8081/typegramusers/menu, kwa maelekezo katika tovuti ya TypeGram. Vipimo vinavyohusu Ga vinakaa katika hifadhi ya pamoja ya vipengele inayofunika pia Kijerumaniki (Kinorwe), Kibantu (Kiganda) na Kiethio-kisemiti (Kistaninya), kama inavyoonyeshwa katika Kielelezo 5, hapa kwa msisitizo kwenye sarufi ya Ga ("GaGram"):

p07-03.png

Picha 5 Muundo wa rasilimali

Miongoni mwa matumizi yanayozunguka mfumo wa sarufi kuna utaratibu wa uundaji wa sarufi kutoka kwa maandishi yenye Glosi za Mistari (IGT), ulioelezwa katika Hellan na Beermann (2011, 2014) na Bruland 2011, ukionyeshwa kwa mpangilio kwa kipande cha IGT katika (18):

p07-04.png

p08-01.png

Zaidi ya hayo, pia inawezekana kuchunguza maagizo ya mstari wa GLOSS ili kupata toleo la "meta-string" la sentensi za lugha, katika hali inayohusika na

verb-Perf_irule := %prefix (* PERF) word & [ TAM.T perf, Stem < v-lxm > ].

p08-02.png

kama taarifa ya kileksika iliyochochewa. Masomo yote mawili yanaelezwa kwenye https://typecraft.org/tc2wiki/TypeGram. Somo la pili hufanya mchakato ambapo moduli za uchanganuzi wa sintaksia na maana zinaweza kufanywa tofauti na morfologia. Hivyo, kuhusiana na sentensi kama (19),

p08-patch01.png

mbinu kama hiyo ya "meta" itashughulikia muundo katika umbo (20a) badala ya (20b):

p08-04.png

b. Amɛ-wo tsɔne lɛ mli yɛlɛ

Mbinu hii inadumisha matumizi ya sentensi 145 katika muundo wa (20a) zikifanya kazi kama seti ya majaribio ya kati kwa seti kamili ya aina za valensi na miundo zilizoelezwa katika Hellan na Dakubu (2010).

## 6. Kamusi ya valensi ya Kiga na miundo ya vitenzi

Rasilimali za kamusi ya valensi ya Kiga zinawakilishwa kama Dakubu (haijachapishwa a) kama ubadilishaji kutoka kwenye toleo lililoongezwa la Toolbox linaloelezwa katika sehemu 4, na katika Dakubu (haichapishwi b) kama monografia kubwa zaidi. Nyenzo katika Dakubu (haijachapishwa a) pia inapatikana mtandaoni kama sehemu ya MultiVal, rasilimali ya ulinganifu inayotegemea kamusi kutoka kwenye sarufi za LKB kwa lugha nne.

Mahali ambapo rasilimali hii inalingana na mtazamo wa Kielelezo 5 ni, kupitia matumizi yake ya uwekaji lebo wa CL, ikiashiria nafasi yake ndani ya ulinganisho fupi wa lugha mbalimbali wa wasifu wa valensi za lugha, ambao ni hesabu za mifumo ya valensi na miundo inayotekelezwa katika lugha. Ulinganisho wa awali wa wasifu wa valensi kwa Kiga na Kiingereza unapendekeza kuwa zina chini ya 20% ya mifumo yao ya valensi inayofanana (tazama, k.m., Dakubu na Hellan (2016, 2017)).

Uchunguzi wa aina za valensi katika lugha ya Ga unaweza kuhusishwa na utafiti wa makundi ya valensi ulioanza na Levin 1993, na kuendelea, kati ya mambo mengine, katika VerbNet na katika Mradi wa Aina za Valensi za Leipzig (LVC), ambazo ni jaribio la kuunganisha sifa zinazofanana katika muundo wa morfosintaksia na sababu za maana, zikiwa ndani ya lugha (kama Levin na VerbNet) na kati ya lugha (LVC). Kuanzisha makundi ya valensi kwa Kiga kuna uhusiano na VerbNet kwa kulenga ufunikaji mkubwa kiasi wa vitenzi vya lugha, na kwa LVC kwa kuanzisha nukta moja zaidi ya kuratibu katika jaribio la kupata msingi mpana wa kitipolojia kwa ujumlishaji ndani ya kikoa hiki.

Kwa kuzingatia tofauti kubwa za fremu za valensi kati ya Ga na Kiingereza, mkakati mzuri unaweza kuwa ni kwanza kuchunguza ufanano kati ya Ga na lugha nyingine za Afrika Magharibi. Katika mazingira haya, hatua ya asili itakuwa kwa mfano kujenga ramani kati ya taarifa za kileksika za Kiga na Kiakan, ikichukuliwa kuwa lebo za valensi zinazotumika kwa Kiga zinafaa pia kwa Kiakan.

## 7. Hitimisho

Mtazamo uliochukuliwa juu ya uundaji wa sarufi 'kina' ya kikompyuta ni kwamba inamruhusu mtu

(i) kupitia utekelezaji, kuunda uwakilishi unaoweza kufuatiliwa kirasmi wa miundo ya lugha, ambapo utekelezaji unamfunga mtu kwenye uthabiti:

(ii) Tafakari kuhusu miundo muhimu ya sarufi iliyochunguzwa, na uhusiano wao na miundo ya lugha nyingine ambazo uchunguzi kama huo umefanywa rasmi;

(iii) kuhamisha kwa ufanisi matokeo yako hadi, au katika uundaji wa, rasilimali nyingine.

Si haba katika mazingira ya Lugha za Afrika, jambo la ziada ni kutambua njia bora za kutumia nyenzo zilizopo za kiisimu kwa lugha husika, zikiunganishwa na mfumo rasmi unaoruhusu uwakilishi sahihi wa ukweli.

Kwa lugha zenye vifaa vichache vya dijitali, lengo ni kuwa na uwezo wa kuendeleza rasilimali kadhaa na programu katika mwingiliano lakini kwa kasi ambayo inaruhusu mtu kumeng'enya na kuchunguza viungo vilivyopo na vipya. Hii ndiyo lengo la rasilimali zilizoelezwa hapa, na tumebainisha jukumu la rasilimali za maneno za Profesa Dakubu, namna mpangilio wa taarifa za maneno katika sarufi unavyoweza kupelekea rasilimali zaidi, na tumejadili athari ambazo miundo ya lugha ya Ga, na labda Volta Basin Kwa kwa ujumla, inazo juu ya miundo rasmi ya muundo wa sarufi.

## Maelezo

1 Ninawashukuru wakaguzi watatu kwa maoni yenye msaada.

2 ISO-639-3 «gaa». Idadi ya wazungumzaji mwaka 2013. https://www.ethnologue.com/country/GH/languages

3 Tazama Hellan (2019a) kwa maelezo kuhusu kuanzishwa kwa aina za maneno.

4 Kwa muhtasari wa hivi karibuni kuhusu Akan na Ga, tazama Beermann na Hellan (2018).

5 Kwa makubaliano, katika mpangilio (i), njia "V2.V2" inaweza kusomwa kama "V3", na vivyo hivyo kwa idadi kubwa zaidi za VPs. (i)

p05-03.png

6 Mfumo huo pia utakuwa muhimu katika lugha za Kihindi na lugha nyingine zenye muundo wa kitenzi pamoja (co(n)-verb), ambapo sintaksia yenyewe inatambuliwa kama marekebisho—na hivyo tofauti na muundo wa SVC wa Bonde la Volta—huku utambulisho wa hoja zinazoweza kupatikana ukilingana na kesi ya sasa.

7 Imetolewa na Clement Appah katika semina iliyofanyika Legon, Ghana.

8 Ona Hellan 2019 kwa maelezo zaidi.

9 Cf. Beermann na Hellan (kuonekana). Katika rasilimali ya kileksika iliyoshughulikiwa katika sehemu ya 4, matumizi haya ya ba yana msimbo "ba_3 : v-trobPostp-suAg_obLoc-MOTIONDIRECTED".

10 Kwa IGTs kama hizo zinazotoa vielelezo vya vitenzi na vifungu vidogo vya maneno vinavyotoa vielelezo vya nomino na POS nyingine, vipimo hivi katika faili ya Toolbox hufanyiza korasi kubwa ambayo hata hivyo bado haijatekelezwa katika muundo sanifu wa korasi; hali hii inaweza kutumika kwa faili za Toolbox za lugha nyingine pia.

11 Hii ni lebo ya aina ya hali, kipengele cha uchambuzi ambacho hadi sasa hakijajumuishwa kikamilifu katika sarufi; kama rasilimali ya maelezo, taz. Hellan (2020). Ni uchunguzi wa kawaida kwamba SVC nyingi zinaeleza "hali ya kipekee", hivyo kwamba maana za kitenzi hazijumuishi matukio tofauti bali zimeunganishwa kuwa tukio moja. Hellan (2019b) ni jaribio la kutoa usemi rasmi kwa dhana hii, kwa mujibu wa tabaka la uwakilishi wa semantiki linaloitwa Situation Structure, ambalo mwingiliano wake na Semantic Argument Structure umeelezwa katika Hellan (2019a), na ambalo usimbaji wake katika lebo za Aina ya Hali umeelezwa katika Hellan (2020).

12 Utambulisho wa yambwa hapa haujajumuishwa katika sehemu ya "IDALL", na kuacha wazi kama ni suala la kugawana hoja badala ya urejeleaji wa kiwakilishi. Kwa kuwa Ga mara nyingi hutambua ushiriki wa kiima kupitia viambishi-tangulizi vya kiwakilishi, mwenza wa mkakati huu kwa vitu unaweza kuwaziwa.

13 Walioongozwa na Tore Bruland; pia cf. Hirzel 2006.

14 tawi la Kinorwei la mfumo huu ni tofauti na sarufi kubwa ya Matrix-msingi ya Norsource, (cf. Hellan na Bruland 2015), ambayo imekuwa ikisimamiwa tangu mwaka 2001. Faili za msimbo zinaweza kupakuliwa kutoka GitHub: https://github.com/Regdili-NTNU/NorSource/tree/master, na ina onyesho la wavuti katika http://regdili.hf.ntnu.no:8081/linguisticAce/parse. Sarufi hii pia hutumia vipengele vya GF, na aina zake za kileksika ni za mfumo uleule kama unavyoelezwa kwa sasa.

15 Tazama Dakubu (2002) kuhusu mfumo wa toni, ambao athari yake ya kileksika na kisintaksia bado haijaakisiwa katika sarufi.

16 Cf. Hellan et al (2014). Tovuti ya mtandaoni: http://regdili.hf.ntnu.no:8081/multilanguage_valence_demo/multivalence

17 Cf. kwa LVC, Malchukov na Comrie (eds) 2015 na http://valpal.info/; kwa VerbNet http://verbs.colorado.edu/~mpalmer/projects/verbnet.html.

18 Inafaa kubainisha kwamba ingawa rasilimali ya VerbNet kimsingi ni msingi wa maarifa tu, mfumo huu wa sasa pia unatumika kama sehemu muhimu ya kichanganuzi cha kisintaksia.

19 Mitazamo inatolewa katika Atoyebi (2015), Schaefer na Egbokhare. (2015), Creissels (2015), katika mfumo wa LVC.

20 Cf. Beermann na Hellan (2018) na (kuonekana.

## 8. Marejeo

Atoyebi, Joseph Dele Valency classes in Yorùbá. In: Malchukov, A., and B. Comrie (eds), pages 299-326.

Beermann, Dorothee, and Lars Hellan. 2018. West African Serial verb constructions: the case of Akan and Ga. In: Agwuele, Augustine, and Adams Bodomo (eds) The Routledge Handbook of African Linguistics. London and New York: Routledge. Pg. 207-221.

Beermann, D. and L. Hellan. To appear. Enhancing grammar and valence resources for Akan and Ga

Bender, Emily.M., Drellishak, S., Fokkens, A., Poulson, L. and Saleem, S. 2010. Grammar Customization. In Research on Language & Computation, Volume 8, Number 1, 23-72.

Bruland, T. (2011). Creating TypeGram data from TypeCraft. Presentation at India 2011, NTNU.

Copestake, Ann. 2002. Implementing Typed Feature Structure Grammars. CSLI Publications.

Creissels, Denis. 2015. Valency properties of Mandinka verbs. In: Malchukov, A., and B. Comrie (eds) Pages 221-260

Dakubu, M.E. Kropp, 2002. Ga Phonology. Institute of African Studies, Legon, Ghana.

Dakubu, M.E. Kropp, 2004a. The Ga preverb kɛ revisited. In Dakubu and Osam, eds., Studies in the Languages of the Volta Basin 2: 113-134. Legon: Linguistics Dept.

Dakubu, M.E. Kropp, 2004b. Ga clauses without syntactic subjects. Journal of African Languages and Linguistics 25.1: 1-40.

Dakubu, M.E. Kropp, 2008 Ga verb features. In Ameka and Dakubu eds., Aspect and Modality in Kwa Languages. Amsterdam & Philadelphia: John Benjamins Publishing Co. p. 91-134.

Dakubu, M. E. Kropp, 2009. Ga-English Dictionary with English-Ga Index. Accra: Black Mask Publishers

Dakubu, Mary Esther Kropp. Unpublished a. "Ga_verb_dictionary_for_digital_processing". Accessed for download at: https://typecraft.org/tc2wiki/Ga_Valence_Profile

Dakubu, Mary Esther Kropp. Unpublished b. Ga Verbs and their constructions. Monograph ms, Univ. of Ghana.

Dakubu, M.E.K., L. Hellan and D. Beermann. 2007. Verb Sequencing Constraints in Ga: Serial Verb Constructions and the Extended Verb Complex. In St. Müller (ed) Proceedings of the 14 th International Conference on Head-Driven Phrase Structure Grammar. Stanford: CSLI Publications. (/http://cslipublications.stanford.edu/)

Dakubu, M.E. Kropp and Lars Hellan. 2016. Verb Classes and Valency classes in Ga. Paper read at Symposium on West African Languages (SyWAL) II, Vienna.

Dakubu, M.E. Kropp and Lars Hellan. 2017. A labeling system for valency: linguistic coverage and applications. In Hellan, L., Malchukov, A., and Cennamo, M (eds) Contrastive studies in Valency. Amsterdam & Philadelphia: John Benjamins Publ. Co.

Hellan, Lars. 2019a. Construction-Based Compositional Grammar. March 2019. Journal of Logic Language and Information. DOI: 10.1007/s10849-019-09284-5

Hellan, Lars and M.E. Kropp Dakubu. 2010. Identifying verb constructions cross-linguistically. In Studies in the Languages of the Volta Basin 6.3. Legon: Linguistics Department, University of Ghana.

Hellan, Lars, and Dorothee Beermann. 2014. Inducing grammars from IGT. In Z. Vetulani and J. Mariani (eds.) Human Language Technologies as a Challenge for Computer Science and Linguistics. Springer.

Hellan, L., D. Beermann, T. Bruland, M.E.K. Dakubu, and M. Marimon. 2014. MultiVal: Towards a multilingual valence lexicon. In Calzolari, Nicoletta et al. (eds.) Proceedings of the 9th International Conference on Language Resources and Evaluation (LREC 2014), pages 2785-2792, Reykjavík, Iceland. ELRA.

Hellan, Lars and Tore Bruland. 2015. A cluster of applications around a Deep Grammar. In: Vetulani et al. (eds) Proceedings from The Language & Technology Conference (LTC) 2015, Poznan.

Hirzel, Hannes. 2006. "Porting lexicon files from Toolbox into LKB-grammars: A case study for a grammar of Ga." https://typecraft.org/tc2wiki/File:Toolbox-LKB-Link-slides_-_version_4.pdf.

Levin, B. 1993. English Verb Classes and Alternations. Chicago IL: University of Chicago Press.

Malchukov, Andrej L. & Comrie, Bernard (eds.) (2015). Valency classes in the world's languages. Berlin: De Gruyter Mouton. 2015.

Pollard, Carl and Ivan Sag (1994) Head-driven Phrase Structure Grammar. Chicago Univ. Press.

Rask, R. 1828. Vejledning til Akra-Sproget på Kysten Ginea ("Introduction to the Accra language on the Guinea Coast").

Schaefer, R.B, and Francis O. Egbokhare. 2015. Emai valency classes and their alternations. In Malchukov, A. and B. Comrie (eds) 2015. Pp. 261-298.

## 9. Marejeo ya Rasilimali za Lugha

https://typecraft.org/tc2wiki/TypeGramhttps://typecraft.org/tc2wiki/Ga_Valence_Profile
