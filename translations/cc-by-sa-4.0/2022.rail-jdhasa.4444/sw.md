> Machine translation (sw) of "The Analysis of the Sepedi-English Code-switched Radio News Corpus" by Simon Ramalepe, Thipe I. Modipa, Marelie H. Davel, https://upjournals.up.ac.za/index.php/dhasa/article/view/4444, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (glossary, madlad-7b, qwen3.6-27b, rescue-deepseek-v4-pro); not reviewed by a human; changes were made.

## Uchambuzi wa Kopusu ya Habari za Redio yenye Msimbo Mseto wa Kisepedi-Kiingereza

Simon Ramalepe, Thipe I. Modipa, Marelie H. Davel

**Taasisi**  
Ramalepe, Simon  
Computer  
Science  
Department,  
University  
of  
Limpopo, Sovenga, 0727, South Africa.  
  
Modipa, Thipe I.  
Computer  
Science  
Department,  
University  
of  
Limpopo, Sovenga, 0727, South Africa.  
Centre for Artificial Intelligence Research (CAIR),  
South Africa.  
  
Davel, Marelie H.  
Faculty of Engineering, North-West University,  
Potchefstroom, South Africa  
Centre for Artificial Intelligence Research (CAIR),  
South Africa.

## Muhtasari

Msimbo mseto ni jambo linalotokea hasa katika nchi zenye lugha nyingi ambapo wazungumzaji wa lugha nyingi mara nyingi hubadilisha lugha katika mazungumzo yao. Kutopatikana kwa kopusi kubwa za msimbo mseto kunakwamisha uundaji na mafunzo ya miundo ya lugha kwa ajili ya uzalishaji wa maandishi yenye msimbo mseto. Katika utafiti huu, tunachunguza awamu ya awali ya kukusanya na kuunda kopusi ya msimbo mseto wa Kisepedi-Kiingereza kwa ajili ya kuzalisha habari sintetiki. Habari za redio na marudio ya msimbo mseto kwenye habari zilizosomwa zilizingatiwa na kuchambuliwa. Tuliunda na kufunza muundo wa lugha unaotegemea Transformer kwa kutumia seti ya data ya msimbo mseto iliyokusanywa. Tuliona kwamba marudio ya data ya msimbo mseto katika seti ya data yalikuwa chini sana kwa asilimia 1.1. Tulikamilisha seti yetu ya data kwa seti ya data ya vichwa vya habari ili kuunda seti mpya ya data. Ingawa marudio bado yalikuwa chini, modeli ilipata kiwango bora cha upotevu cha 2,361 kwa Usahihi wa 66%.

## Maneno Muhimu

Kubadili msimbo, uzalishaji wa maandishi, habari za redio, Transformer, Sepedi

## 1 Utangulizi

Kubadili msimbo ni matumizi ya lugha zaidi ya moja ndani ya sentensi katika mazungumzo. Kwa ujumla huenea zaidi katika jamii za lugha nyingi kupitia usemi kuliko maandishi (Gupta et al. 2020). Hata hivyo, mwelekeo wa sasa wa mawasiliano kupitia teknolojia unahusisha maandishi, na unajitokeza zaidi kwenye mitandao ya kijamii. Kama ilivyo katika nchi nyingi zenye lugha nyingi, Waafrika Kusini, hasa wazungumzaji wa Sepedi hutumia kubadili msimbo katika mazungumzo yao. Kubadili msimbo kwa ujumla kunagawanywa katika ubadilishaji baina ya sentensi na ndani ya sentensi. Kubadili msimbo baina ya sentensi hutokea katika kiwango cha sentensi wakati mzungumzaji anapobadilisha lugha kutoka sentensi moja hadi nyingine, huku kubadili ndani ya sentensi hutokea katika kiwango cha neno wakati lugha zaidi ya moja inapotumika katika sentensi (Hamed et al. 2017). Lugha ya msingi katika mazingira ya ubadilishaji msimbo hujulikana kwa kawaida kama lugha matriki huku lugha ya pili ikijulikana kama lugha iliyopachikwa (Hamed et al. 2017).

Aina nyingine ya ubadilishaji msimbo wa ndani ya sentensi hutumia maneno yaliyokopwa au ya mkopo (Chan et al. 2005). Maneno yaliyokopwa au ya mkopo hutokea katika hali ambapo vokali au konsonanti huongezwa au kubadilishwa ili kuzalisha maneno yanayokubalika kifonetiki katika lugha matriki. Tofauti kati ya ubadilishaji msimbo, uchanganyaji msimbo, na ukopaji ni ngumu kwa hiyo, katika utafiti huu tutatumia ubadilishaji msimbo kurejelea ubadilishaji msimbo wa kati ya sentensi na wa ndani ya sentensi.

Tafiti zimeonyesha kwamba kuna uchache au ukosefu wa data ya maandishi yenye ubadilishaji msimbo (Chang et al. 2018, Gao et al. 2019, Gupta et al. 2020). Hii inaweza kuwa matokeo ya asili isiyo rasmi ya data yenye ubadilishaji msimbo. Kwa maneno mengine, ubadilishaji msimbo kwa kawaida hutokea katika mazingira yasiyo rasmi au ya kijamii aidha katika usemi au maandishi. Kwa hiyo, kuna ukosefu wa seti za data zilizoandikwa kuhusu data yenye ubadilishaji msimbo. Uundaji wa mkusanyiko wa maandishi wenye mchanganyiko wa msimbo uliozalishwa kisanisi ambao unaweza kutumika kufunza miundo ya lugha kwa ajili ya uzalishaji wa maandishi umependekezwa. Hata hivyo, maandishi yaliyozalishwa si halisi na yanapaswa kujaribiwa ikiwa yanafanana na hali halisi ya mchanganyiko wa msimbo. Ukosefu wa mikusanyiko mikubwa iliyopo ya maandishi yenye mchanganyiko wa msimbo ni changamoto kwa uundaji wa miundo ya lugha ya uzalishaji wa maandishi yenye mchanganyiko wa msimbo, hasa kwa lugha zenye rasilimali chache kama vile Sepedi.

Sepedi ni mojawapo ya lugha rasmi za Afrika Kusini na imeainishwa kama lugha yenye rasilimali chache. Kwa sasa, mikusanyiko ya maandishi yenye mchanganyiko wa msimbo inayopatikana kwa jozi ya lugha ya Sepedi-Kiingereza haitoshi kwa matumizi ya mbinu za Ujifunzajikina. Katika utafiti huu, tunajadili na kuchambua mchakato wa awali wa kukusanya data ya maandishi yenye mchanganyiko wa msimbo wa Sepedi-Kiingereza kwa ajili ya uundaji wa miundo yenye mchanganyiko wa msimbo kwa jozi hii ya lugha. Mkusanyiko wa maandishi uliokusanywa kisha unatumika kwa muundo wa lugha wa uzalishaji wa maandishi ili kuangalia utendaji wa muundo huo kwa kutumia data ya maandishi yenye mchanganyiko wa msimbo isiyozalishwa kisanisi.

Karatasi imeundwa kama ifuatavyo: Sehemu ya 2 inajadili usuli wa utafiti. Sehemu ya 3 inajadili seti za data zilizotumika kufunza modeli ya uzalishaji wa maandishi. Katika Sehemu ya 4 tunajadili majaribio yaliyofanywa, huku katika Sehemu ya 5 tunazingatia matokeo yaliyopatikana na tathmini ya modeli hiyo. Maelezo ya kuhitimisha na kazi ya baadaye yanawasilishwa katika Sehemu ya 6.

## 2 Usuli

Lugha ya Sepedi inazungumzwa hasa katika jimbo la Limpopo nchini Afrika Kusini ikiwa na idadi ya watu milioni 5.9 (Statistics South Africa 2022). Ni lugha msingi katika mazungumzo mengi ya kawaida katika jimbo hilo huku Kiingereza na Lugha nyingine za Afrika Kusini zikipachikwa katika mazungumzo hayo. Ubadilishaji msimbo si jambo la kawaida katika usemi wa kusomwa au maandishi lakini hutokea mara nyingi katika mazungumzo ya kawaida jambo ambalo hufanya iwe vigumu kukusanya data yenye ubadilishaji msimbo kwa ajili ya kufunza na kupima modeli za lugha. Unapotokea, huwa ni kwa ajili ya kusisitiza katika mazingira ya lugha nyingi. Jaribio la kukusanya korpusi za mazungumzo yaliyobadilishana kodha yamefanywa. Hamed et al. (2018), walikusanya data ya mazungumzo ya Kiarabu-Kiingereza kwa kuendesha na kurekodi mazungumzo ya mahojiano yasiyo rasmi. Uchambuzi wa data yao ulionyesha kuwa kulikuwa na matumizi makubwa ya mchanganyiko msimbo (ndani ya sentensi). Kati ya sentensi 1,234 katika seti yao ya data, sentensi 985 (79.8%) zilikuwa na mchanganyiko msimbo, sentensi 124 (10%) zilikuwa maandishi ya lugha moja ya Kiarabu na sentensi 125 (10.1%) zilikuwa maandishi ya lugha moja ya Kiingereza. Maneno vichochezi yaliyotangulia mara nyingi zaidi kabla ya hatua ya kubadili msimbo pia yalibainishwa pamoja na uni-gramu, bi-gramu, na tri-gramu zilizojitokeza mara nyingi zaidi. Uwekaji tagi wa aina za maneno (POS) ulifanywa kwa sehemu ya data na ilibainika kuwa nomino hutumika zaidi katika lugha iliyopachikwa.

Katika utafiti mwingine, Chan et al. (2005) walitengeneza korasi ya usemi ya mchanganyiko msimbo ya Kikantoni-Kiingereza ili kuchunguza athari ya lafudhi ya Kikantoni katika Kiingereza. Hali ambapo maneno mengi ya Kiingereza yana lafudhi ya Kikantoni. Kwa ukusanyaji wa data, vikundi vya habari na mbinu za shajara za mtandaoni zilitumika. Marudio ya maneno yaliyobadilishwa msimbo, uwekaji tagi wa aina za maneno wa maneno mchanganyiko wa msimbo, na urefu wa maandishi yaliyobadilishwa msimbo yalibainishwa. Kama ilivyo katika Hamed et al. (2017), marudio ya utokeaji wa nomino yalikuwa juu kwa 62.3% na maneno yenye urefu wa 1 yalikuwa 74.96% Lyu et al. (2015) pia, walitengeneza Kopus ya Hotuba ya Kubadilisha Msimbo ya Kimandarini-Kiingereza. Kopus yao ilitawaliwa na ubadilishaji msimbo wa ndani ya sentensi wa lugha msingi. Mbinu ya ukusanyaji wa data pia ilijumuisha mahojiano na mazungumzo yaliyorekodiwa. Maneno yanayotumiwa mara nyingi zaidi pia yalitambuliwa.

Modipa et al. (2013), walitengeneza kopus ya hotuba iliyobadilishwa msimbo ya Kisepedi-Kiingereza ili kuchanganua vipengele vya athari za ubadilishaji msimbo wakati wa kutengeneza mifumo ya Utambuzi longo (ASR) inayoweza kushughulikia hotuba iliyobadilishwa msimbo ya Kisepedi-Kiingereza. Katika mbinu yao ya ukusanyaji wa data, matangazo ya redio yalirekodiwa na idadi ya matukio yaliyobadilishwa msimbo ilihesabiwa na kunakiliwa ili kuunda kopus ya Kisepedi iliyochochewa ya ubadilishaji msimbo (SPCS) (Modipa & Davel 2022).

Jedwali la 1: Idadi ya sentensi, maneno na tokeni za kipekee katika seti za data.

p03-01.png

Jedwali la 2: Maneno 10 ya Kiingereza na yaliyokopwa yanayotokea mara nyingi zaidi katika seti ya data.

p03-02.png

Ingawa SPCS ni ndogo (ina vishazi vifupi vilivyobadilishwa msimbo), inatoa msingi wa kopusu iliyobadilishwa msimbo kwa jozi ya lugha ya Sepedi-Kiingereza. Marivate et al. (2020) waliunda kopusu ya vichwa vya habari vya Sepedi kutoka kwa ukurasa wa Facebook wa habari za redio ya kitaifa. Data ilitumika kutengeneza modeli ya uainishaji wa habari.

Van Der Westhuizen & Niesler (2016) walikusanya kopusu ya usemi iliyobadilishwa msimbo ya Kiingereza-isiZulu ya papo hapo kutoka kwa tamthilia za Afrika Kusini. Data ilichorwa kwa mkono na maandishi ya Kiingereza ya lugha moja yalikuwa na wingi katika korpusi kwa asilimia 75. Data ilifafanuliwa na mipaka ya ubadilishaji msimbo ilitambuliwa. Kopusu ya lugha nyingi iliyobadilishwa msimbo kwa Kiingereza-isiZulu, Kiingereza-isiXhosa, Kiingereza-Setswana, na Kiingereza-Sesotho imetengenezwa (Van Der Westhuizen & Niesler 2018). Ukusanyaji wa data kwa ajili ya korasi hii ya lugha nyingi yenye mchanganyiko wa msimbo ulipatikana kutoka kwa rekodi za video za kidijitali za vipindi 626 vya opera ya sabuni ya Afrika Kusini. Data ilinakiliwa kwa mikono na wazungumzaji wenye ufasaha wa lugha mbili wa jozi za lugha. Maneno ya vichochezi vya mchanganyiko wa msimbo zaidi yalitambuliwa katika kila moja ya jozi za lugha.

Katika utafiti mwingine, Jansen van Vueren & Niesler (2021) walitumia Ujalizaji data kufunza na kutathmini utendaji wa miundo ya lugha yenye mchanganyiko wa msimbo. Kumbukumbu fupi ya muda mrefu (LSTM) ilitumika kama modeli generative kutengeneza kwa njia ya sintetiki data yenye mchanganyiko wa msimbo ili kuongeza seti ndogo za data zenye mchanganyiko wa msimbo. Utafiti unabaini kuwa miundo iliyoboreshwa inaweza kuzalisha maandishi yenye perplexity iliyoboreshwa na kiwango cha makosa ya maneno ikilinganishwa na miundo isiyo na uboreshaji wa data iliyochunguzwa katika (Van Der Westhuizen & Niesler 2016).

## 3 Ukusanyaji wa Data

Seti za data za habari za redio ya Sepedi na vichwa vya habari vinatumika katika utafiti huu kwa ajili ya uundaji wa miundo na uchambuzi. Seti ya data ya habari za redio ya Sepedi ndiyo seti ya data msingi kwa utafiti huu. Data ilikusanywa kutoka kituo cha redio cha jamii kilichopo Limpopo ili kuunda korasi yenye mchanganyiko wa lugha. Vipindi kadhaa vya utangazaji vinawasilishwa kila siku, na ukusanyaji wa data ulilenga habari za redio zilizosomwa wakati mbalimbali wa siku kati ya Juni na Agosti 2022. Usafishaji wa data ulifanyika ili kusawazisha data. Tulitumia seti ya data kufunza modeli ya uzalishaji wa maandishi iliyotengenezwa kwa msingi wa Transformer na tukaangalia Usahihi wake wakati wa kuzalisha habari sintetiki.

Jedwali la 1, linaonyesha ukubwa wa seti za data kwa mgawanyo wa 70% kwa mafunzo, 20% kwa uthibitishaji, na 10% kwa majaribio". Seti ya data ya vichwa vya habari Marivate et al. (2020) ilitumika kwa kulinganisha na seti ya data ya habari za redio ya Sepedi. Seti ya data ni ndogo kiasi ikiwa na sentensi 1 182 zenye mchanganyiko mdogo wa lugha.

Jedwali la 2, linaonyesha maneno 10 ya juu ya Kiingereza na yaliyokopwa katika seti ya data ya habari za redio ya Sepedi. Jumla ya idadi ya tokeni za kipekee za Kiingereza ni 136 ambayo inachangia asilimia 8.8 tu ya jumla ya tokeni za kipekee katika seti ya data. Ni asilimia 9 tu ya tokeni za kipekee za Kiingereza zina marudio ya 10 na zaidi. Wastani wa idadi ya maneno kwa kila sentensi katika seti ya data iliyounganishwa ni 18.2. Tulichukua sampuli nasibu ya sentensi 30 katika seti ya data ya habari za redio na kugundua kwamba nomino za Kiingereza na nomino za kipekee zilitawala aina ya ubadilishaji msimbo katika seti ya data pamoja na matumizi ya maneno ya mkopo kama inavyoonekana katika Jedwali la 2. Idadi ya maneno ya Kiingereza ilikuwa 31 kati ya maneno 929 katika data ya sampuli. Hii inatafsiriwa kuwa marudio ya chini ya ubadilishaji msimbo ya asilimia 3.3 tu na uwiano wa neno 1 tu la Kiingereza kwa kila sentensi. Uchambuzi zaidi wa seti ya data unaonyesha hakuna ubadilishaji msimbo baina ya sentensi.

p04-01.png

Kielelezo cha 1: Marudio ya maneno katika seti ya data ya mafunzo

Uonyeshaji wa data katika seti zote za data unaonyesha kwamba bi-gramu (kiwango cha herufi) zina marudio ya juu. Kielelezo 1 kinaonyesha marudio 10 ya juu ya maneno katika seti ya data ya habari za redio ya Sepedi. Mhimili wa y unaonyesha marudio ya kila neno katika seti ya data huku mhimili wa x unaonyesha maneno katika msamiati yaliyopangwa kutoka yale yenye marudio mengi hadi machache.

## 4 Mpangilio wa Majaribio

Kwa kulinganisha na utafiti wa awali wa Ramalepe et al. (2022) kuhusu data ya lugha moja, tulitumia mbinu ileile waliyotumia kutengeneza modeli inayotegemea Transformer. Modeli iliyotengenezwa ina kitala kimoja cha Transformer chenye ufichaji wa kisababishi kwenye tabaka za umakini, tabaka mbili tofauti za upachikaji kwa tokeni na faharasa ya tokeni yenye tabaka moja mnene lenye vichwa 2 vya umakini. Tulitumia ukubwa wa upachikaji wa 64 kwa uchangamano wa modeli na kiwango chaguo-msingi cha kuacha cha 0.1. Adam alitumika kama kiboreshaji cha modeli na kitengo cha mstari kilichorekebishwa (ReLU) kama kitendakazi cha uamilishaji. Ukubwa wa msamiati uliwekwa 3k (karibu jumla ya idadi ya tokeni za kipekee katika seti ya data iliyounganishwa). Seti zote mbili za data zinaunganishwa ili kuona kama kuna uboreshaji katika utendaji wa modeli kadri ukubwa wa data unavyoongezeka. Modeli ilifunzwa kwa epochs 50 kutokana na kiasi kidogo cha data katika seti ya data.

p05-01.png

Kielelezo 2: Mviringo wa hasara na Usahihi kwa seti ya data ya habari za Redio

p05-02.png

Kielelezo 3: Mviringo wa hasara na Usahihi kwa seti ya data ya vichwa vya Habari

Usahihi wa modeli ulipimwa kwa kukokotoa jumla ya idadi ya utabiri sahihi kama asilimia ya jumla ya idadi ya utabiri wakati wa mafunzo kwa kutumia kipimo cha kazi cha SparseCategoricalAccuracy ambacho hutumiwa zaidi wakati wa kufanya utabiri wa maandishi kwa shabaha chache katika Ujifunzajikina. Kipimo cha SparseCategoricalAccuracy huangalia kama thamani ya juu zaidi ya kweli ni sawa na faharasa ya thamani ya juu zaidi iliyotabiriwa.

## 5 Matokeo na Uchambuzi

Kielelezo 2 kinaonyesha mviringo wa hasara na Usahihi katika kila epoch ya mchakato wa mafunzo kwa seti ya data ya habari za redio ya Sepedi, huku Kielelezo 3 kinaonyesha mviringo wa hasara na Usahihi wa seti ya data ya vichwa vya habari. Mviringo wa hasara na Usahihi kwa seti ya data iliyounganishwa unaonyeshwa katika Kielelezo 4. Kiwango bora cha upotevu wa modeli kilikuwa 2.361 kilichopatikana kwa seti ya data iliyounganishwa kwa Usahihi wa 66%. Tuliona kwamba ingawa Usahihi bora uliopatikana ulikuwa uboreshaji kutoka 50.3% uliopatikana katika Moila & Modipa (2020) kwa kutumia mbinu inayotegemea LSTM kwenye data ya lugha moja, bado ulikuwa mdogo ikilinganishwa na Usahihi wa 75% uliopatikana katika Ramalepe et al. (2022) kwa kutumia mbinu inayotegemea Transformer. Jedwali la 3 linaonyesha muhtasari wa matokeo. Inazingatiwa zaidi kwamba ukubwa wa seti ya data huathiri Usahihi wa modeli. Wakati modeli ilipofunzwa kwa seti ya data ya habari za redio ya Sepedi (seti ndogo zaidi ya data), Usahihi uliopatikana ulikuwa mdogo, uliongezeka kadiri tulivyoongeza data katika seti ya data.

Katika takwimu zote, Kielelezo 2, Kielelezo 3, na Kielelezo 4 seti ya uthibitishaji ilitatizika kujumlisha, ikionyesha dalili ya Ujifunzaji banifu. Hii inatokana kwa kiasi kikubwa na kiasi kidogo cha data tulichokuwa nacho katika seti zote za data. Ili kuzalisha maandishi tunaanza kwa kulisha modeli kwa Kidokezo cha kuanzia, kisha modeli huzalisha usambazaji wa uwezekano wa masharti juu ya maneno ya pembejeo na kuchukua sampuli ya neno linalofuata kutoka kwa uwezekano wa masharti. Seti mpya ya maneno kisha inakuwa ingizo jipya kwa modeli, mchakato unaendelea hadi urefu wa juu wa mfuatano ufikiwe. Ili kuangalia utendaji wa modeli kwenye data yenye mchanganyiko wa lugha, tuliipa modeli maandishi ya ingizo na modeli ikazalisha maandishi katika Jedwali la 4. Kutoka kwa maandishi yaliyozalishwa, inaweza kuonekana kwamba ingawa sentensi ni sahihi kisarufi, baadhi si sahihi kimaana na hazina mpangilio mzuri wa maneno (zimeandikwa kwa italiki katika maandishi yaliyozalishwa). Kwa mfano, kishazi "tsa selegae thekgo hlatlositse " (cha ongezeko la usaidizi wa ndani) kinaweza kusahihishwa kuwa "hlatlositse thekgo ya tsa selegae" (usaidizi wa ndani ulioongezeka). Idadi ya maneno ya Kiingereza katika seti zote za data ilikuwa ndogo sana, hivyo maneno hayo hayakuathiri Usahihi wa modeli na maandishi yaliyozalishwa. Hata hivyo, utendaji wa modeli ni wa chini kwa 12% kutoka kwa 75% iliyopatikana katika Ramalepe et al. (2022)

Jedwali la 3: Kiwango cha hasara ya uthibitishaji na Usahihi kwa kila seti ya data

p06-01.png

Jedwali la 4: Maandishi yaliyozalishwa

p06-patch01.png

p06-02.png

Kielelezo 4: mkondo wa hasara na Usahihi: seti ya data iliyounganishwa.

Ingawa marudio ya maneno yaliyobadilishwa msimbo katika seti za data yalikuwa ya chini sana, modeli iliweza angalau kuzalisha neno moja lililobadilishwa msimbo. Kwa mfano "pharela ya dienywa tsa citrus go hlola dibaka tsa selegae" (Kikwazo cha matunda ya machungwa kuunda fursa za kienyeji). Matokeo yanaashiria hisia chanya ya mafanikio kuelekea uundaji wa seti ya data kubwa iliyobadilishwa msimbo ili kufunza modeli kubwa zaidi. Changamoto moja kuu ambayo bado inapaswa kuangaliwa ni kutafuta njia zinazowezekana za kupata data iliyobadilishwa msimbo ya moja kwa moja ikilinganishwa na maandishi yaliyosomwa. Hata hivyo, data kama hiyo mara nyingi ni ya kuchosha kutokana na unukuzi wa kiasi kikubwa cha maandishi ya usemi.

## 6 Hitimisho

Katika utafiti huu, tulijadili awamu ya awali ya kukusanya, kuendeleza, na kuchambua mkusanyiko uliobadilishwa msimbo kwa kutumia habari za redio ya Sepedi. Mkusanyiko ulioendelezwa wa habari za redio ya Sepedi ulitumiwa kufunza modeli ya uzalishaji wa maandishi yenye msingi wa Transformer ili kuangalia utendaji wake kwenye data iliyobadilishwa msimbo. Mfano ulipata Usahihi bora wa 66% kwa seti ya data iliyounganishwa. Ujalizaji data unaweza kuzingatiwa katika siku zijazo ili kujaliza maandishi na kuunda seti mpya ya data yenye mchanganyiko wa msimbo. Njia nyingine za kukusanya data ya hiari yenye mchanganyiko wa msimbo kupitia rekodi za moja kwa moja na unukuzi zinaweza pia kuzingatiwa katika siku zijazo. Ili kuthibitisha ubora wa maandishi yaliyozalishwa, watathmini binadamu wanaweza pia kuzingatiwa kama sehemu ya kazi ya baadaye.

## Shukrani

Kazi hii inaungwa mkono na Centre for Artificial Intelligence Research na Telkom Centre of Excellence katika University of Limpopo.

## Marejeo

Chan, J. Y. C., Ching, P. C. & Lee, T. (2005), Development of a Cantonese-English Code-mixing Speech Corpus, in 'Ninth European conference on speech communication and technology.'.

Chang, C.-T., Chuang, S.-P. & Lee, H.-Y. (2018), Code-switching Sentence Generation by Generative Adversarial Networks and its Application to Data Augmentation, in 'arXiv preprint arXiv:1811.02356.'.

Gao, Y., Feng, J., Liu, Y., Hou, L., Pan, X. & Ma, Y. (2019), Code-switching sentence generation by BERT and generative adversarial networks, in 'In INTERSPEECH', Vol. 2019-September, International Speech Communication Association, pp. 3525-3529.

Gupta, D., Ekbal, A. & Bhattacharyya, P. (2020), Findings of the Association for Computational Linguistics A Semi-supervised Approach to Generate the Code-Mixed Text using Pre-trained Encoder and Transfer Learning, in 'In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing:', pp. 2267-2280.

Hamed, I., Elmahdy, M. & Abdennadher, S. (2017), Building a First Language Model for Code-switch Arabic-English, in 'Procedia Computer Science', Vol. 117, Elsevier B.V., pp. 208-216.

Hamed, I., Elmahdy, M., Abdennadher, S., Tagamoa, E. & Khames, E. (2018), Collection and Analysis of Code-switch Egyptian Arabic-English Speech Corpus, in 'Proceedings of the Eleventh International Conference on Language Resources and Evaluation (LREC 2018).', pp. 3805-3809.

Jansen van Vueren, J. & Niesler, T. (2021), Optimised Code-Switched Language Model Data Augmentation in Four Under-Resourced South African Languages, in 'Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics)', Vol. 12997 LNAI, Springer Science and Business Media Deutschland GmbH, pp. 303-316.

Lyu, D. C., Tan, T. P., Chng, E. S. & Li, H. (2015), 'Mandarin-English code-switching speech corpus in South-East Asia: SEAME', Language Resources and Evaluation 49(3), 581-600.

Marivate, V., Sefara, T., Chabalala, V., Makhaya, K., Mokgonyane, T., Mokoena, R. & Modupe, A. (2020), 'Investigating an approach for low resource language dataset creation, curation and classification: Setswana and Sepedi'.

Modipa, T. I. & Davel, M. H. (2022), 'Two sepedi-english code-switched speech corpora', Language Resources and Evaluation 56(3), 703-727.

Modipa, T. I., Davel, M. H. & de Wet, F. (2013), Implications of Sepedi/English code switching for ASR systems, in 'In Proceedings of the Twenty-Fourth Annual Symposium of the Pattern Recognition Association of South Africa (PRASA 2013)', Johannesburg, South Africa.

Moila, M. M. & Modipa, T. I. (2020), The development of a sepedi text generation model using long-short term memory, in 'Proceedings of the 2nd International Conference on Intelligent and Innovative Computing Applications', ACM, New York, NY, USA, pp. 1-5.

Ramalepe, P. S., Modipa, T. I. & Davel, H. M. (2022), The Development of a Sepedi Text Generation Model Using Transformers [Paper presentation], in 'SATNAC-2022', George, Western Cape, pp. 51-56. URL: https://www.satnac.org.za/proceedings

Statistics South Africa (2022), Mid-year population estimates 2022, Technical report. URL: www.statssa.gov.za,,Tel+27123108911

Van Der Westhuizen, E. & Niesler, T. (2016), Automatic Speech Recognition of English-isiZulu Code-switched Speech from South African Soap Operas, Technical report.

Van Der Westhuizen, E. & Niesler, T. (2018), A First South African Corpus of Multilingual Code-switched Soap Opera Speech, in 'Proceedings of the Eleventh International Conference on Language Resources and Evaluation (LREC 2018).'.
