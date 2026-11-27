> Machine translation (sw) of "Towards a Swahili Universal Dependency Treebank: Leveraging the Annotations of the Helsinki Corpus of Swahili" by Kenneth Steimel, Sandra Kübler, https://aclanthology.org/2023.rail-1.10/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kuelekea Treebank ya Utegemezi wa Universal ya Kiswahili: Kutumia Ufafanuzi wa Helsinki Corpus of Swahili

Kenneth Steimel, Sandra Kübler

**Taasisi**  
Kenneth Steimel  
Sandra Kübler  
Indiana University  
Indiana University  
  


## Muhtasari

Ufafanuzi wa utegemezi unaweza kuwa mchakato mgumu kwa lugha zenye rasilimali chache. Hata hivyo, katika baadhi ya matukio, rasilimali nyingine zinapatikana. Tunachunguza ikiwa tunaweza kutumia rasilimali hizo katika kisa cha Kiswahili: Tunatumia ufafanuzi wa Helsinki Corpus of Swahili kuunda treebank ya Utegemezi wa Universal kwa Kiswahili. Helsinki Corpus of Swahili hutoa ufafanuzi wa kiwango cha neno kwa aina za maneno, vipengele vya kimofolojia, na lebo za kisintaksia za kiuamilifu. Tunafunza vitambulishi vya neva kwa aina hizi za ufafanuzi, kisha tunatumia mifano hiyo kufafanua mkusanyiko wetu lengwa, sehemu ya Kiswahili ya Global Voices Corpus. Kulingana na ufafanuzi wa kiwango cha neno, kisha tunaunda kwa mikono sheria za sarufi ya vizuizi ili kufafanua mkusanyiko lengwa kwa Universal Dependencies. Katika makala hii, tunaelezea mchakato, tunajadili maamuzi ya ufafanuzi tuliyopaswa kufanya, na tunatathmini mbinu hiyo.

## 1 Utangulizi

Kiswahili ndiyo lugha ya Kibantu inayozungumzwa na watu wengi zaidi ikiwa na wastani wa wazungumzaji asilia milioni 16 (Simons na Fennig, 2018) na wazungumzaji wa L2 milioni 50-100. Kiswahili hutumika kama lugha ya taifa ya Tanzania, Kenya, Uganda, na DRC, ni lugha ya kazi ya Umoja wa Afrika, na hutumika kama lingua franca kwa Jumuiya ya Afrika Mashariki.

Ingawa si lugha ya kawaida yenye rasilimali chache kwa ujumla, hakuna miti ya sintaksia inayopatikana kwa Kiswahili. Kwa kuwa ufafanuzi wa utegemezi ni jitihada ya gharama kubwa na inahitaji wataalamu katika mfumo wa kisintaksia na pia katika lugha, tunachunguza ikiwa tunaweza kutumia rasilimali zilizopo ili kuendesha kiotomatiki uundaji wa treebank kadri inavyowezekana. Tunachunguza mbinu ambapo tunatumia Helsinki Corpus of Swahili (Hurskainen, 2004a) na ufafanuzi wake kama hatua ya kuanzia. Kisha tunaunda vitambulishi vya kiotomatiki kwa ufafanuzi wa kiwango cha neno kulingana na korasi hii. Baada ya kutumia vitambulishi hivi kwenye korasi yetu lengwa, sehemu ya Kiswahili ya Global Voices Corpus (Tiedemann, 2012), tunatumia mbinu inayotegemea kanuni kubadilisha ufafanuzi wa kiwango cha neno kuwa ufafanuzi wa Universal Dependency (UD) (de Marneffe et al., 2021). Ufafanuzi wa kiwango cha neno unaopatikana katika Helsinki Corpus of Swahili unajumuisha vitambulisho vya aina za maneno (POS), kulingana na seti ya vitambulisho vya POS ambayo ina taarifa zaidi zenye maelezo ya kina kuliko seti ya vitambulisho vya aina za maneno ya Universal Dependency. Zaidi ya hayo, korasi ina vipengele vya kimofolojia na lebo za kisintaksia za kiutendaji, ambazo zinatokana na mfumo wa sarufi ya vizuizi.

Katika mchakato wa kubadilisha taarifa za kimofolojia na kisintaksia kuwa mfumo wa Universal Dependency, tulikumbana na changamoto zilizotokana na ukweli kwamba kazi ndogo imefanywa kuhusu ufafanuzi wa UD kwa Lugha za Kibantu. Tutajadili baadhi ya visa hivi pamoja na maamuzi ya ufafanuzi ambayo tumefanya. treebank, sheria zote na msimbo zinapatikana katika https://git.steimel.info/ksteimel/SWH_UDT. treebank itajumuishwa katika toleo lijalo la UD.

Sehemu iliyobaki ya makala hii imeundwa kama ifuatavyo: sehemu ya 2 inaripoti kazi zinazohusiana, sehemu ya 3 inatoa muhtasari wa mfumo uliotumika kubadilisha ufafanuzi, na sehemu ya 4 inaeleza korasi tunazotumia. Katika sehemu ya 5, tunaeleza ufafanuzi wa kiwango cha neno, na katika sehemu ya 6, tunaeleza sheria za ufafanuzi wa utegemezi. Sehemu ya 7 inachunguza ubora wa ufafanuzi wetu, na sehemu ya 8 inahitimisha.

## 2 Kazi Husika: Mbinu za NLP kwa Kiswahili

Umuhimu wa kisiasa na kiuchumi unakuza utafiti kuhusu Kiswahili na kuifanya kuwa mojawapo ya Lugha za Kibantu zilizofanyiwa utafiti zaidi katika uchakataji wa lugha asilia. Mifumo inayotegemea kanuni, mbinu zinazoongozwa na data, na mbinu zisizosimamiwa zimepitishwa kwa Kiswahili. Hurskainen (1992) anawasilisha utafiti wa kwanza kuhusu uchanganuzi wa kimofolojia wa Kiswahili. Kichanganuzi cha kimofolojia cha SWATWOL kinatumia mofolojia ya ngazi mbili ya hali-kikomo (Koskenniemi, 1983) kutambulisha maneno. Mfumo wa sarufi ya vizuizi unatumika kuondoa utata pale ambapo uchanganuzi mwingi unatolewa na mfumo wa hali-kikomo (Hurskainen, 1996). Vipengele hivi vinaunganishwa pamoja kuwa msimamizi wa lugha ya Kiswahili (SALAMA) (Hurskainen, 2004b). Mfumo wa SALAMA unapanuliwa ili kujumuisha kichanganuzi cha sarufi ya vizuizi fupi na kichanganuzi cha utegemezi kinachotegemea sarufi ya kina zaidi. Ingawa kichanganuzi cha vitegemezi katika SALAMA kingeonekana kuwa cha thamani kubwa kwa kazi hii ya sasa, kichanganuzi hicho hakipatikani kwa uhuru na muundo wa vitegemezi hautolewi kama sehemu ya Helsinki Corpus of Swahili (Hurskainen, 2004a). Littell et al. (2014) wanatengeneza kichanganuzi sawia cha kimofolojia cha hali ya kikomo kwa Kiswahili. Hata hivyo, njia yao inahusisha kutumia kamusi ya mtandaoni inayotolewa na watu wengi (kamusi.org) ili kuhakikisha kufunika kwa msamiati mpana.

Kwa kutumia korasi zilizotengenezwa kwa mbinu za kikanuni, De Pauw et al. (2006) wanachukua mbinu inayoongozwa na data badala yake. Wanafunza vitambulishi vya aina za maneno kwenye Helsinki Corpus of Swahili (Hurskainen, 2004a), ambayo ilijengwa kwa kutumia mfumo wa meneja wa lugha wa SALAMA ulioelezwa hapo juu. Wanatumia aina mbalimbali za vitambulishi vilivyotengenezwa tayari vikiwemo Muundo wa Markov Uliyefichwa (TnT), SVM (SVMtool), vitambulishi vinavyotegemea kumbukumbu (MBT) na kitambulishi cha muundo wa kiwango cha juu cha entropi (MXPOST). Utendaji bora unafikiwa kwa muundo wa kiwango cha juu cha entropi, ingawa miundo yote inafikia Usahihi wa zaidi ya 90%. Muundo wa kiwango cha juu cha entropi unafanya vizuri hasa kwa maneno yaliyo nje ya msamiati.

Kiswahili pia kimekuwa lengo la utafiti kuhusu ugunduzi wa mofimu bila usimamiaji. Hu et al. (2005) wanatumia mbinu ya kiheuristic ya umbali wa kuhariri wa mfuatano (SED) kujifunza mofolojia ya Kiswahili. Mbinu hii ya kiheuristic hupitia jozi zote za maneno katika korasi na kuunda ulinganifu kati ya jozi hizo kwa kutumia umbali wa kuhariri wenye adhabu maalum kwa ubadilishaji, uongezaji na ufutaji. Kisha, otomata za hali-kikomo zinazoelezea jozi za mifuatano inayohusiana huunganishwa pamoja na mifuatano ya herufi iliyolinganishwa ikipangwa kwenye hali ileile. Mchakato huu hujirudia; otomata za hali-kikomo zinazozalishwa hujichanganya na otomata nyingine. Mwishowe, mahali ambapo FSA hutofautiana ni mipaka ya mofimu. Waandishi wanaripoti utendaji wa juu ikilinganishwa na mbinu nyingine za kiheuristic za ugunduzi wa mofimu bila usimamiaji kama vile marudio ya mwandamizi (Harris, 1955).

p02-01.png

Kielelezo 1: Mchoro wa hatua zinazohusika katika kuunda Universal Dependency Treebank kwa Kiswahili.

Hivi karibuni, watafiti wameunda korasi za kujibu maswali na uainishaji wa hisia katika Kiswahili (Martin et al., 2022). Vilevile, mfano wa Transformer kwa Kiswahili umetengenezwa (Martin et al., 2022).

## 3 Muhtasari wa Mfumo

Kwa kuwa hakuna treebank ya utegemezi inayopatikana, tunaunda miti ya utegemezi kiotomatiki, kwa kutumia maelezo katika Helsinki Corpus of Swahili. Korasi hii ina taarifa za kisintaksia katika mfumo wa lebo za sarufi za vizuizi vya kiwango cha neno, ambazo zinahitaji kubadilishwa kuwa ufafanuzi wa Universal Dependency. Kwa ubadilishaji huu, tunatumia idadi ya mifano ya neva ya kuweka tagi, sheria za baada ya usindikaji, na sheria za uundaji wa tao za utegemezi.

Sehemu ndogo ya ubora wa juu, iliyofafanuliwa kwa mikono, ya treebank hupitia mfululizo sawa wa hatua lakini kabla ya sheria za uundaji wa utegemezi kutumika, sehemu ya treebank inachukuliwa kama sampuli. Sampuli hii kisha inafafanuliwa kwa mikono. Kielelezo cha 1 kinaonyesha hatua na rasilimali mbalimbali zinazohusika katika mchakato huo.

p03-01.png

Jedwali la 1: Lebo za sentensi moja katika HCS.

p03-02.png

Jedwali la 2: Uwakilishaji wa CONLL-U wa sentensi katika Jedwali la 1, ukizingatia safu wima husika pekee.

## 4 Korasi

Hali ya korasi kwa Kiswahili ni ngumu kidogo. Tunatumia Helsinki Corpus of Swahili (HCS) (Hurskainen, 2004a) na sehemu ya Kiswahili ya Global Voices corpus (GVC) (Tiedemann, 2012) katika kazi hii. Kwa sababu ya vikwazo vya leseni, hatuwezi kufafanua Helsinki Corpus of Swahili kwa vitegemezi na kuisambaza tena. Kwa sababu hii, tunatumia ufafanuzi wa kiwango cha neno wa korasi hii kuunda kitambulishi cha POS kwa kutumia seti ya lebo za POS ya Helsinki Corpus of Swahili, kitambulishi cha POS kwa lebo za POS za UD, kichanganuzi cha mofolojia, na kitambulishi cha kisintaksia cha sarufi-vikwazo cha kiwango cha neno. Kisha tunatumia vitambulishi hivi kufafanua sehemu ya Kiswahili ya Global Voices corpus katika kiwango cha neno. Katika hatua ya mwisho, tunaunda ufafanuzi wa Universal Dependency kulingana na ufafanuzi huu wote kupitia mbinu inayotegemea sheria.

Maandiko yaliyomo katika Helsinki Corpus ya Kiswahili ni hasa kutoka kwenye mikutano ya bunge, mkusanyiko wa hadithi, na makala za habari. Kwa upande wa ufafanuzi, Helsinki Corpus of Swahili ni korasi ya "silver standard" (ufafanuzi wa kiotomatiki, usiorekebishwa kwa mkono) iliyoundwa na kigeuzi cha hali kikomo cha SALAMA na kifafanuzi (Hurskainen, 1999). Katika korasi, kila neno linawekewa vidokezo vya lemma yake, tagi ya POS, mfululizo wa tagi za kimofolojia, na tagi ya kisintaksia ya kiuamilifu (sarufi ya vizuizi) inayoelezea dhima ya neno katika sentensi. Jedwali la 1 linaonyesha uwekaji vidokezo wa kiwango cha neno kwa sentensi Afisa Elimu alisimama kwa amri ya Mwenyekiti (Eng.: The education officer stood for the Chairman's command) kutoka HCS.

Jedwali la 2 linaonyesha ubadilishaji wa sentensi hii kuwa umbizo la CONLL-U. HCS hutumia njia nyingi kueleza ngeli au upatanisho wa ngeli wa neno. Kwa mfano, nomino (ambazo kwa asili zina ngeli) huonyesha ngeli ya umbo la umoja, ngeli ya umbo la wingi na kama nomino husika ni ya umoja au wingi (yaani 9/10-SG). Viambishi awali vya upatanisho wa ngeli kwenye kitenzi hufuata kanuni tofauti ambapo ngeli, nambari, na nafsi huonyeshwa (k.m., 1-SG3). Vihusishi kama vile ya, wakati huo huo, huonyesha upatanisho wa ngeli kama ngeli ikifuatiwa na nambari (yaani, 9-SG). Zaidi ya hayo, kwa baadhi ya vitambulisho vya POS, vipengele fulani vya kimofolojia huchukuliwa kuwa vya msingi na HCS, na ni vipengele tu vinavyokengeuka kutoka kwa msingi huu ndivyo hujumuishwa. Kwa mfano, sauti tendaji na uelekeo chanya mara nyingi hazifafanuliwi kwa uwazi katika maelezo ya HCS, lakini sauti tendewa na uelekeo hasi hufafanuliwa.

p04-01.png

Jedwali la 3: Mifano ya utenganishaji wa maneno ya majina ya watu wa Kiswahili.

Kinyume chake, Global Voices Corpus ni mkusanyiko mkubwa wa lugha nyingi wenye matini sambamba katika lugha 46. GVC ina makala ya habari kutoka duniani kote. Kwa sababu mkusanyiko huu una makala za waandishi wa habari za kiraia, matini za mitandao ya kijamii zinajumuishwa pia. Tofauti na HCS, GVC ina maandishi matupu bila vidokezo vyovyote vya kiwango cha neno. Kwa treebank yetu, tunatumia sehemu ya GVC yenye maandishi sambamba katika Kiswahili na Kiingereza. Sehemu hii ya korasi ina sentensi 29 698 za Kiswahili, maneno 546 000.

## 5 Kuunda Vidokezo vya Kiwango cha Neno

Lengo letu kuu ni uundaji wa Universal Dependency Treebank kwa Kiswahili. Kama hatua ya kwanza, tunahitaji kuweka vidokezo kwenye Global Voices Corpus (GVC) kwa taarifa za kiwango cha neno, ambazo kwa msingi wake tunaweza kisha kutumia kanuni zitakazounda vidokezo vya utegemezi.

Tulifunza mifano ya neva ya kuweka tagi za kiwango cha neno kwa kutumia sampuli ya maneno 789 691, yanayolingana na sentensi 35 925, kutoka Helsinki Corpus of Swahili (HCS). Usanifu wa kawaida wa neva ulitumika kwa mifano ifuatayo ya kuweka tagi za kiwango cha neno: tagi za UD POS, tagi za POS mahususi za lugha kutoka HCS, vipengele vya kimofolojia, na tagi za kisintaksia za kiutendaji. Usanifu huu unajumuisha GRU-LSTM ya pande mbili yenye tabaka mbili inayotumia upachikaji wa herufi na maneno uliojifunza. Kwa sababu ya idadi kubwa ya lebo za kimofolojia, tulitengeneza usanifu wa pili unaowakilisha vipengele vya kimofolojia binafsi kama lebo moja. Mfano huu unafanana sana katika muundo wake na usanifu mwingine wa kuweka lebo kwa njia ya neva. Hata hivyo, badala ya kutumia argmax kutabiri lebo moja, mfano huu unatabiri lebo zote zinazozidi kizingiti (0.5) baada ya uamilishaji wa sigmoid.

Kisha tuliweka lebo kiotomatiki kwenye Global Voices Corpus (GVC) kwa kutumia mifano hii ya neva. Kutoka kwa data ya GVC iliyowekewa lebo kiotomatiki, sentensi fupi 150 (urefu wa maneno 8-30) na sentensi ndefu 30 (urefu wa maneno 20-50) zilichukuliwa kwa nasibu kwa ajili ya ufafanuzi wa mkono. Kisha, mfumo wa kanuni ulitumika kwenye sehemu iliyobaki ya GVC ili kuunda uainishaji wa UD.

Kuunganisha Kiswahili katika mfumo wa Universal Dependency kulitulazimu kufanya maamuzi ya ufafanuzi kuhusu ugawaji wa maneno, ubadilishaji wa lebo za aina za maneno, na ushughulikiaji wa miundo mahususi katika Kiswahili. Tunaeleza maamuzi haya hapa chini.

Ugawaji wa maneno Wakati wa kugawa maneno, tulizingatia kwa makini ili kuhakikisha kwamba majina ya watu yenye vistari havikutenganishwa, lakini maneno ambatani yalitenganishwa. Majina ya watu kama yale yaliyoonyeshwa katika Jedwali 3 yanapatikana mara kwa mara katika mkusanyiko wa Global Voices. Semi za kawaida zilizotumika kwa ajili ya kutenganisha maneno zilihakikisha kuwa vistari vya kati vilivyofuata viambishi awali vya ngeli havikutengwa na sehemu nyingine ya neno.

Kwa kufuata miongozo ya UD, viambajengo vya viunganishi vya kuratibu na viwakilishi vinatenganishwa kuwa tokeni zao za sehemu. Kwa mfano, naye hutenganishwa kuwa na yeye (Kiing.: na yeye) na nasi hutenganishwa kuwa na sisi (Kiing.: na sisi).

Kubadilisha Lebo za POS kuwa UD Lebo za POS za Helsinki Corpus of Swahili zinakaribiana kwa kiasi na lebo za POS za Universal Dependency. Kwa ujumla, ubadilishaji huu ni ramani ya vingi-kwa-kimoja: lebo za mkusanyiko wa Helsinki zinafafanua idadi ya tofauti ambazo hazionyeshwi katika Universal Dependencies. Zaidi ya hayo, lebo zote za POS zilizotengwa kwa ajili ya alama ya uakifishaji katika seti ya lebo ya Helsinki Corpus of Swahili (yaani, COLON, HYPHEN, n.k.) zinawekwa kwenye PUNCT. Jedwali la 4 linaonyesha ulinganifu kati ya ufafanuzi wa lebo mbili za POS.

Katika baadhi ya matukio, taarifa za ziada zilihitajika ili kubaini lebo sahihi ya Universal Dependency. Kwa mfano, katika HCS, EXCLAM kwa kawaida hutumika kwa viingizi kama vile jamani (Eng.: hey there). Hata hivyo, pia hutumika kwa alama za mshangao. Kwa hali hizo, tunaweka PUNCT.

Viwakilishi vya uhusiano na vitenzi vyenye viashiria vya uhusiano vilipokea lebo za Helsinki POS REL-LI au REL-LI-VYO. Katika matukio kama hayo, tunatumia lebo ya kisintaksia tendaji iliyokabidhiwa kwa neno kwa ajili ya utatuzi wa utata: ikiwa neno lina lebo tendaji ya kitenzi, basi tunakabidhi lebo ya UD V. Katika matukio mengine yote, tunakabidhi PRON.

p05-01.png

Jedwali la 4: Uwiano kati ya Helsinki Corpus of Swahili na lebo za POS za Universal Dependencies.

Sifa za Kimofolojia Tofauti na ubadilishaji wa lebo za POS, ambao ni mchakato wa moja kwa moja kiasi, uchimbaji wa lebo za kimofolojia ni mgumu zaidi kwa kiasi kikubwa.

Sifa za kimofolojia katika Universal Dependency zinajumuisha jozi za sifa-thamani. Hizi zinawakilishwa katika umbizo la CONLL-U huku sifa zikitenganishwa na thamani zake zinazohusiana kwa '=' na kila jozi ikitenganishwa kwa '|'. Mwongozo wa ufafanuzi wa Universal Dependency (Nivre et al., 2017) unatoa sifa za kimofolojia ili kushughulikia ngeli katika Lugha za Kibantu. Sifa hizi zinaonyeshwa kwa kutumia thamani tofauti kwa sifa ya NounClass. Hata hivyo, sifa hizi hazitoshi kwa kuwa vitenzi vinaweza kuwa na viashiria vingi vya ngeli vinavyoonyesha ngeli ya kiima, yambwa, na kichwa cha urejeshi.

Kwa mfano, neno aliyoitumia lina viashiria vinavyoonyesha ngeli, nafsi, na idadi kwa kiima, yambwa, na kichwa cha urejeshi, tazama uchanganuzi katika mfano (1).

p05-02.png

Ili kushughulikia suala hili, tunatumia vipengele vya kimofolojia vilivyo na tabaka. Kwa Person, Number, na NounClass, aina ndogo za ziada kama vile rel, subj, na obj zimeongezwa. Hadi hivi karibuni, hii haikuwa uwezekano ulioandikwa katika Universal Dependencies, hata hivyo treebank nyingine zimeweka vipengele hivi vya tabaka kama kielelezo. Mfano mmoja ni treebank ya Basque Universal Dependency (Aranzabe et al., 2015). Ingawa aina ndogo hazijaelezewa katika nyaraka za mchakato wa ubadilishaji (Aranzabe et al., 2015), treebank hii inajumuisha vitenzi vyenye vipengele vingi vya nambari kwa kutumia aina ndogo kuashiria aina. Tofauti na treebank ya Kibaski ya Universal Dependency, hatutumii aina ndogo huku hali ya kisarufi ya kipengele kinachokubali kikionyeshwa kwa Kiswahili. Badala yake, aina ndogo zinabainisha tu kazi ya kipengele kinachokubali. Kwa mfano, pale ambapo korasi ya Kibaski inatumia Number[nom], korasi ya Kiswahili inatumia Number[subj]. Chaguo la Kibaski halitumiki kwa Kiswahili kwa vile Kiswahili hakina hali ya kisarufi dhahiri, na kupitisha uchanganuzi wa hali ya kisarufi fiche kwa lugha zote kama Kiswahili hakufuati kanuni za Universal Dependency.

## 6 Kuunda Ufafanuzi wa Utegemezi

## 6.1 Miongozo ya Utegemezi

Tunafuata miongozo iliyowekwa na Universal Dependency (Nivre et al., 2017). Sehemu hii inaeleza baadhi ya maelezo mahususi kuhusu jinsi tulivyotumia miongozo hii kwa Kiswahili. Miongozo ya Universal Dependency inasema kuwa "[k]itenzi kishirikishi be hakitendewi kama kichwa cha kishazi, bali badala yake ni kiarifu kisicho cha kitenzi" (de Marneffe et al., 2020). Miongozo pia inashauri kwamba "[u]husiano wa cop unapaswa kutumika tu kwa vitenzi vishirikishi safi vinavyoongeza zaidi kategoria za TAME kwenye maana ya kiarifu".

Katika treebank ya Kiswahili, tunatofautisha kati ya kikopula cha "kitenzi" kuwa na vikopula vingine kama ni, umbo la kukanusha si, maumbo ya msisitizo kama ndiyo na vikopula vya mahali kama uko. Tunachambua kuwa kama kitenzi wakati kopula nyingine zimepewa lebo ya POS COP na hazijachukuliwa kama kichwa cha sentensi zao.

## 6.2 Utumiaji wa kanuni

Ili kuunda kanuni za kurekebisha masuala ya kawaida na vitambulisho vya neva na kuzalisha tao za utegemezi, CG3 ilitumika (Bick na Didriksen, 2015). CG3 ni lahaja iliyopanuliwa ya sarufi ya vizuizi yenye utekelezaji wa kukusanya na kutumia kanuni za sarufi ya vizuizi, ikituruhusu kuunda na kutumia kanuni changamano.

Kushughulikia makosa katika tagi za kiwango cha neno Hapo awali, kanuni ziliandikwa ili kurekebisha makosa na tagi za kiwango cha neno zilizozalishwa na miundo ya POS ya neva. Ili kurekebisha makosa yaliyozalishwa na kitambulishi otomatiki, amri za SUBSTITUTE na ADD zilitumika kubadilisha tagi moja hadi nyingine, kuongeza tagi iliyokosekana, au kuondoa tagi potovu. Kanuni hizi za kurekebisha tagi za kiwango cha neno zilitumika kabla ya kanuni zote zinazounda tao za utegemezi.

Katika visa vingi, sheria za kuandika upya tagi zilitumika kuandika upya tagi ya kiwango cha neno ikiwa tagi tatu au zaidi kati ya tagi nyingine za kiwango cha neno zilionyesha kwamba kosa limetokea. Mfano wa kwanza katika Jedwali la 5 unaonyesha sheria inayobadilisha NOUN na kuwa VERB katika visa ambapo vitambulishi vingine vinaonyesha kwamba neno linalohusika kwa kweli ni kitenzi. Kwa usahihi zaidi, kitambulishi cha POS cha lugha mahususi lazima kikabidhi neno hili tagi ya V, na lazima kiwe na kipengele cha kimofolojia kinachobainisha ukanushi na mojawapo ya idadi ya tagi za kisintaksia za kiutendaji zinazoonyesha kwamba neno hili linatumika kama kitenzi katika sentensi ili sheria itumike.

Uundaji wa tao la utegemezi Ili kuunda tao za utegemezi kutoka kwa sentensi pamoja na maelezo ya kiwango cha neno, tuliunda sheria za usemi wa kawaida zilizopangwa, kiasi kwamba sheria mahususi sana zilifuatwa na matoleo ya jumla zaidi yanayotumia vizuizi vya kulegea zaidi; na mara kwa mara tulitumia sheria za akiba. Baadhi ya matukio yalishughulikiwa kwa kutumia sheria moja ya jumla bila matoleo mahususi zaidi au yaliyolegea. Kwa mfano, kishazi kilichoandikwa kwa herufi nzito katika sentensi katika mfano (2) kinaonyesha mfano wa vishazi vingi vya nomino vilivyounganishwa pamoja katika mnyororo wa vishazi vya nomino vya ushirikisho.

p06-01.png

Biti ni katibu mkuu wa Movement for Democratic Change, inayoongozwa na Waziri Mkuu wa zamani Morgan Tsvangirai.

Bila kuzingatia upatanisho wa ngeli, kirai nomino kilicho katika herufi nzito kina utata, yaani, uchanganuzi wote wa utegemezi katika Kielelezo 2 unawezekana.

Kama uchanganuzi baina ya mistari katika mfano (2) unavyoonyesha, zamani ni nomino ya ngeli ya 9, kihusishi shirikishi wa ni cha ngeli ya 1, na Waziri ni wa ngeli ya 1. Kihusishi shirikishi hupatana katika ngeli na nomino ambayo nomino yake kuu inaifafanua. Hivyo basi uchanganuzi wa kisintaksia katika uchanganuzi wa utegemezi upande wa kulia wa Kielelezo 2 ndio sahihi. Toleo mahususi la kanuni, lililoonyeshwa kama kanuni ya pili katika Jedwali 5, linatumia upatanisho huu.

Kanuni za jumla zaidi hutumika ikiwa hakuna ulinganifu wa kanuni mahususi unaopatikana. Kanuni ya jumla inaweza kutumika kwa sababu ya makosa katika vitambulisho vya kimofolojia vinavyotolewa na modeli ya utambulishaji au kwa sababu ya kukosekana kwa upatanisho kati ya tokeni mbili. Katika kisa hiki mahususi, vihusishi shirikishi katika ngeli tofauti mara nyingi vina maana nyingi. Kwa mfano, wa inaweza kuashiria kwamba nomino inayorekebishwa na nomino yake kuu ni ya ngeli ya 1, kama ilivyo katika mfano hapo juu, au ngeli za 2, 3, au 11. Vitambulishi vya neva vinaweza kutumia muktadha unaozunguka; hata hivyo makosa bado hutokea kwa kiasi fulani cha mara kwa mara. Kwa hiyo kanuni ya jumla hutumika kukabiliana na makosa katika ufafanuzi wa kimofolojia. Kanuni hii, inayoonyeshwa kama kanuni ya tatu katika Jedwali la 5, haina vikwazo vya upatanisho.

Sheria mbadala hutumika katika hali ambapo vigezo vinavyotumia lebo za kimofolojia na za kiuamilifu vyote viwili vinashindwa. Badala yake, mifumo rahisi ya mpangilio wa mstari inayotegemea POS hutumika katika kanuni mbadala.

p07-03.png

Jedwali la 5: Kanuni ya mfano ya kusahihisha makosa katika lebo za kiwango cha neno.

p07-01.png

p07-02.png

Kielelezo cha 2: Uchambuzi mbili zinazowezekana za utegemezi kwa mnyororo wa vishazi nomino kutoka mfano (2).

Jedwali la 6 linaonyesha ni mara ngapi aina za sheria mahususi, za jumla, na za mbadala zinatumiwa kushughulikia kila aina ya jambo. Ingawa sheria mahususi sana zinaweza kutofautisha kati ya tao mbalimbali zinazowezekana kwa ufanisi zaidi, sheria hizi mahususi huanzishwa mara chache zaidi.

## 7 Ubora wa Vidokezo

## 7.1 Matokeo ya Uwekaji Tagi katika Kiwango cha Neno

Kabla ya kufunza mifano ya uwekaji tagi ya neva, tulitenga sentensi 2 000 kutoka Helsinki Corpus of Swahili, sentensi 1 000 kwa uthibitishaji na sentensi 1 000 kwa kupima utendaji wa mfano. Jedwali la 7 linaonyesha matokeo ya tathmini hii. Mifano yote inazidi Usahihi wa 94%, na yote isipokuwa kielekezi cha mofolojia chenye lebo nyingi hufikia Usahihi wa 97% na zaidi; alama-F zinazolingana za uwekaji tagi wa POS, na dhima ya kiutendaji ziko katika masafa sawa. Kama ilivyojadiliwa katika sehemu ya 5, kielekezi chenye lebo nyingi hutoa tagi ikiwa inazidi kizingiti cha 0.5. Ingawa hii inaruhusu kitambulishi kuwa rahisi zaidi na kuzingatia michanganyiko ya vipengele vya kimofolojia ambavyo havikuwepo katika data ya mafunzo, pia haitekelezi vizuizi vya utokeaji pamoja kati ya mofimu. Mfano wa lebo nyingi unaweza kutabiri NounClass=9 na NounClass=7 kwa nomino ileile, ingawa hii haipaswi kuruhusiwa. Vizuizi hivi hufuatwa kiotomatiki wakati wa kutumia kitambulishi cha kimofolojia cha kimonolithiki.

Kumbuka kuwa data ya majaribio imetokana na mkusanyiko wa matini chanzi, Helsinki Corpus of Swahili, na kwa hivyo utendakazi halisi wa mifano kwenye mkusanyiko wa matini lengwa (GVC) hauwezi kubainishwa. Wakati wa mchakato wa uundaji wa mkusanyiko wa matini kwa mikono, tulirekebisha lebo za UD POS na kuongeza tao za utegemezi lakini hatukurekebisha lebo nyingine za kiwango cha neno. Katika siku zijazo, lebo nyingine za kiwango cha neno pia zitarekebishwa.

## 7.2 Nguvu na Mapungufu katika Miti Inayozalishwa

Kati ya sentensi 29 698, sheria za uundaji wa utegemezi huzalisha miti ya kufunika kwa sentensi 4 994. 3 499 kati ya miti hii ni miti ya utegemezi ya mpangilio usiokatiza. Wakati wa kuchunguza misingi maalum ya lugha, kanuni hufanya vizuri kwa baadhi yake na kutoa miti isiyo sahihi au isiyo kamili zinapokutana na nyingine.

p08-01.png

Jedwali la 6: Marudio ya aina ya sheria kwa sheria za uundaji wa utegemezi kwenye Global Voices Corpus.

p08-02.png

Jedwali la 7: Usahihi wa modeli kuhusiana na ukubwa wa seti ya tagi kwa modeli za GRU za pande mbili.

Minyororo ya uhusishi Katika Kiswahili, virai nomino changamano mara nyingi huundwa kwa kutumia minyororo ya viunganishi vya uhusishi. Mfumo wetu wa sheria hufanya vizuri na miundo hii. Kielelezo cha 3 kinaonyesha mti uliozalishwa kwa mnyororo wa uhusishi mwanzoni mwa sentensi katika mfano (3). Wakati mnyororo wa ushirika unashughulikiwa kwa usahihi, kirai nomino cha mahali nchini Cambodia kinapaswa kuwa kikirekebisha Watumiaji (watumiaji), mwanzoni mwa maandishi. Hata hivyo, hakuna vipengele vya kimofolojia vinavyoweza kusaidia kanuni kutenganisha kiambatisho cha kirai hiki cha nomino cha mahali.

p08-03.png

p09-01.png

Kielelezo 3: Msururu wa awali wa kiambatanishi katika mfano 3

p09-02.png

Kielelezo 4: Mti wa kishazi kifupi cha jamaa kisicho na kichwa

Vishazi vya jamaa Vishazi vya jamaa vyote viwili, visivyo na vichwa na vyenye vichwa, mara nyingi hushughulikiwa kwa usahihi na mfumo wa kanuni. Vishazi vya jamaa visivyo na vichwa pekee ndivyo vinavyoonyeshwa hapa kutokana na vikwazo vya nafasi. Mfano (4) unaonyesha kirai chenye kishazi cha jamaa kisicho na kichwa. Nomino dakika (Kisw.: minutes) hubadilishwa na kishazi rejeshi zilizofuata (Kisw.: following). Kivumishi kinachoingilia kati chache hakivurugi kanuni na pia huunganishwa na dakika, kama inavyofaa.

p09-03.png

Ikiwa hili litatokea, yamepita siku ambazo viapo vya ndoa vinapaswa kuchukuliwa kwa uzito "Til death do us part"?

Utambuzi wa mzizi Kutambua mzizi wa kishazi kwa kutumia kanuni ni vigumu. Hii ni kweli hasa katika hali ambapo uwekaji mada wa aina fulani umetokea.

Katika mfano (4), kishazi kielezi kilichotangulizwa Ikiwa itatokea (Kisw.: If this will happen) kinavuruga kanuni za sasa za utambuzi wa mzizi.

Badala ya kupewa cheo cha mzizi, kitenzi katika sentensi ya kiunganishi itatokea kimepewa cheo cha mzizi kwa makosa. Ingawa itatokea ni umbo la kitenzi na hivyo mzizi unaowezekana, ni kichwa cha sentensi ya chini.

## 8 Hitimisho

Kazi yetu inahusu kuunda treebank ya Universal Dependency kwa Kiswahili kwa kutumia vidokezo katika Helsinki Corpus of Swahili. Tunaonyesha kwamba tunaweza kufunza vitambulishi vya neva ili kuweka vidokezo vya lebo za UD POS, lebo za POS mahususi kwa lugha, lebo za kimofolojia, pamoja na lebo za kisintaksia za kikazi, na kwamba tunaweza kutumia vidokezo hivyo kwenye korasi mpya ili kuunda kanuni za semi za kawaida ili kupata ufafanuzi wa utegemezi. Matokeo si kamilifu: kwa takriban 30% ya sentensi, mbinu zetu hazitengenezi miti iliyounganishwa kikamilifu. Lakini vidokezo vyetu vinaweza kuboreshwa baadaye. Ni, bila shaka, inawezekana kuongeza kanuni zaidi kwenye mfumo wetu ili kushughulikia kesi zaidi. Hata hivyo, kanuni yoyote mpya itakuwa mahususi sana na kwa hiyo itaboresha tu idadi ndogo sana ya kesi. Kwa hiyo tunahoji kwamba uboreshaji wa ziada unapaswa kutokana na kufunza kichanganuzi imara na kusahihisha kwa mikono miti ya uchanganuzi. Tunapanga kuchunguza mbinu imara za uchanganuzi ambazo zitatoa uchanganuzi wa kuaminika zinapofunzwa kwa vidokezo vilivyopo.

## 9 Mapungufu

Ni hakika kwamba kuna makosa katika ufafanuzi wa kiotomatiki na wa mikono. Utaratibu wetu wa ubadilishaji una vikwazo kutokana na taarifa inayopatikana katika Helsinki Corpus of Swahili. Na ingawa mwandishi wa kwanza, ambaye alifafanua kwa mikono sehemu ya treebank ya Kiswahili, ana mafunzo ya kina katika sintaksi ya Kibantu, yeye si mzungumzaji asilia wa Kiswahili. Tunatumaini kwamba hatua hii ya awali itachochea upanuzi wa baadaye na/au marekebisho ya korasi.

## 10 Taarifa ya Maadili

Kufanya kazi kwa lugha yenye rasilimali chache daima huambatana na hatari ya kuwanyima haki jumuiya ya lugha. Hata hivyo, ufafanuzi wa vitegemezi unahitaji msingi wa kisintaksia, na mara nyingi hakuna wazungumzaji wa kutosha wa lugha hiyo wenye mafunzo kama hayo. Tunatumaini kwamba jumuiya ya Kiswahili itakubali na kuboresha treebank yetu. Tumechagua kwa uangalifu korasi inayoweza kusambazwa kwa uhuru, badala ya kufanya kazi na Helsinki Corpus of Swahili, ambayo ina mahitaji ya leseni yenye vikwazo.

## Maelezo

1 Kwa maelezo zaidi kuhusu muundo wa CONLL-U, angalia https://universaldependencies.org/format.html

2 Vikopula vya mahali kama uko pengine vinaweza kufafanuliwa kama kielezi. Hata hivyo, hii inaathiri tu lebo. Kiarifu kisicho kitenzi kinachofuata uko bado kitakuwa kichwa cha kishazi.

3 Kwa mfano, baadhi ya vihusishi kama wa vinapatana na ngeli ya nomino iliyotangulia na vinaweza kulingana na umbo maalum la kanuni. Hata hivyo, vihusishi vingine kama katika havionyeshi ngeli ya nomino iliyotangulia kwa namna yoyote.

## Marejeo

Maria Jesus Aranzabe, Aitziber Atutxa, Kepa Bengoetxea, Arantza Diaz de Ilarraza, Iakes Goenaga, Koldo Gojenola, and Larraitz Uria. 2015. Automatic conversion of the Basque Dependency Treebank to Universal Dependencies. In Proceedings of the Fourteenth International Workshop on Treebanks and Linguistic Theories (TLT14), pages 233-241.

Eckhard Bick and Tino Didriksen. 2015. CG-3 - Beyond classical constraint grammar. In Proceedings of the 20th Nordic Conference of Computational Linguistics (NODALIDA 2015), pages 305-308.

Marie-Catherine de Marneffe, Filip Ginter, Yoav Goldberg, Jan Hajič, Christopher Manning, Ryan McDonald, Joakim Nivre, Slav Petrov, Sampo Pyysalo, Sebastian Schuster, Natalia Silveira, Reut Tsarfaty, Francis Tyers, and Dan Zeman. 2020. Universal Dependencies.

Marie-Catherine de Marneffe, Christopher D. Manning, Joakim Nivre, and Daniel Zeman. 2021. Universal Dependencies. Computational Linguistics, 47(2):255-308.

Guy De Pauw, Gilles-Maurice De Schryver, and Peter W Wagacha. 2006. Data-driven part-of-speech tagging of Kiswahili. In International Conference on Text, Speech and Dialogue, pages 197-204. Springer.

Zellig S. Harris. 1955. From phoneme to morpheme. Language, 31(2):190-222.

Yu Hu, Irina Matveeva, John Goldsmith, and Colin Sprague. 2005. Refining the SED heuristic for morpheme discovery: Another look at Swahili. In Proceedings of the Workshop on Psychocomputational Models of Human Language Acquisition, pages 28-35, Ann Arbor, Michigan. Association for Computational Linguistics.

Arvi Hurskainen. 1992. A two-level computer formalism for the analysis of Bantu morphology. an application to Swahili. Nordic Journal of African Studies, 1(1).

Arvi Hurskainen. 1996. Disambiguation of morphological analysis in Bantu languages. In Proceedings of the 16th Conference on Computational Linguistics, pages 568-573.

Arvi Hurskainen. 1999. Salama: Swahili language manager. Nordic Journal of African Studies, 8:139-157.

Arvi Hurskainen. 2004a. Helsinki corpus of Swahili. Compilers: Institute for Asian and African Studies (University of Helsinki) and CSC.

Arvi Hurskainen. 2004b. Swahili language manager: A storehouse for developing multiple computational applications. Nordic Journal of African Studies, 13(3):363-397.

Kimmo Koskenniemi. 1983. Two-level model for morphological analysis. In IJCAI, volume 83, pages 683-685.

Patrick Littell, Kaitlyn Price, and Lori Levin. 2014. Morphological parsing of Swahili using crowd-sourced lexical resources. In Proceedings of the Ninth International Conference on Language Resources and Evaluation (LREC'14), pages 3333-3339, Reykjavik, Iceland. European Language Resources Association (ELRA).

Gati Martin, Medard Edmund Mswahili, Young-Seob Jeong, and Jiyoung Woo. 2022. SwahBERT: Language model of Swahili. In Proceedings of the 2022 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pages 303-313, Seattle, United States. Association for Computational Linguistics.

Joakim Nivre, Željko Agić, Lars Ahrenberg, Maria Jesus Aranzabe, Masayuki Asahara, Aitziber Atutxa, Miguel Ballesteros, John Bauer, Kepa Bengoetxea, Riyaz Ahmad Bhat, Eckhard Bick, Cristina Bosco, Gosse Bouma, Sam Bowman, Marie Candito, Gülşen Cebiroğlu Eryiğit, Giuseppe G. A. Celano, Fabricio Chalub, Jinho Choi, Çağrı Çöltekin, Miriam Connor, Elizabeth Davidson, Marie-Catherine de Marneffe, Valeria de Paiva, Arantza Diaz de Ilarraza, Kaja Dobrovoljc, Timothy Dozat, Kira Droganova, Puneet Dwivedi, Marhaba Eli, Tomaž Erjavec, Richárd Farkas, Jennifer Foster, Cláudia Freitas, Katarína Gajdošová, Daniel Galbraith, Marcos Garcia, Filip Ginter, Iakes Goenaga, Koldo Gojenola, Memduh Gökırmak, Yoav Goldberg, Xavier Gómez Guinovart, Berta Gonzáles Saavedra, Matias Grioni, Normunds Grūzītis, Bruno Guillaume, Nizar Habash, Jan Hajič, Linh Hà Mỹ, Dag Haug, Barbora Hladká, Petter Hohle, Radu Ion, Elena Irimia, Anders Johannsen, Fredrik Jørgensen, Hüner Kaşıkara, Hiroshi Kanayama, Jenna Kanerva, Natalia Kotsyba, Simon Krek, Veronika Laippala, Phng Lê Hồng, Alessandro Lenci, Nikola Ljubešić, Olga Lyashevskaya, Teresa Lynn, Aibek Makazhanov, Christopher Manning, Cătălina Mărănduc, David Mareček, Héctor Martínez Alonso, André Martins, Jan Mašek, Yuji Matsumoto, Ryan McDonald, Anna Missilä, Verginica Mititelu, Yusuke Miyao, Simonetta Montemagni, Amir More, Shunsuke Mori, Bohdan Moskalevskyi, Kadri Muischnek, Nina Mustafina, Kaili Müürisep, Lng Nguyễn Thị, Huyền Nguyễn Thị Minh, Vitaly Nikolaev, Hanna Nurmi, Stina Ojala, Petya Osenova, Lilja Øvrelid, Elena Pascual, Marco Passarotti, Cenel-Augusto Perez, Guy Perrier, Slav Petrov, Jussi Piitulainen, Barbara Plank, Martin Popel, Lauma Pretkalnin, a, Prokopis Prokopidis, Tiina Puolakainen, Sampo Pyysalo, Alexandre Rademaker, Loganathan Ramasamy, Livy Real, Laura Rituma, Rudolf Rosa, Shadi Saleh, Manuela Sanguinetti, Baiba Saulīte, Sebastian Schuster, Djamé Seddah, Wolfgang Seeker, Mojgan Seraji, Lena Shakurova, Mo Shen, Dmitry Sichinava, Natalia Silveira, Maria Simi, Radu Simionescu, Katalin Simkó, Mária Šimková, Kiril Simov, Aaron Smith, Alane Suhr, Umut Sulubacak, Zsolt Szántó, Dima Taji, Takaaki Tanaka, Reut Tsarfaty, Francis Tyers, Sumire Uematsu, Larraitz Uria, Gertjan van Noord, Viktor Varga, Veronika Vincze, Jonathan North Washington, Zdeněk Žabokrtský, Amir Zeldes, Daniel Zeman, and Hanzhi Zhu. 2017. Universal dependencies 2.0. LINDAT/CLARIAH-CZ digital library at the Institute of Formal and Applied Linguistics (ÚFAL), Faculty of Mathematics and Physics, Charles University.

Gary F Simons and Charles D Fennig. 2018. Ethnologue: Languages of the world, twenty. Dallas: SIL International. Retrieved from www. ethnologue. com. Accessed, page 2018.

Jörg Tiedemann. 2012. Parallel data, tools and interfaces in OPUS. In Proceedings of the Eight International Conference on Language Resources and Evaluation (LREC'12), Istanbul, Turkey. European Language Resources Association (ELRA).
