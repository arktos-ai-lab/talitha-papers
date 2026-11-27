> Machine translation (sw) of "Comparing Neural Network Parsers for a Less-resourced and Morphologically-rich Language: Amharic Dependency Parser" by Binyam Ephrem Seyoum, Yusuke Miyao, Baye Yimam Mekonnen, https://aclanthology.org/2020.rail-1.5/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kulinganisha Vichanganuzi vya Mtandao wa Neva kwa Lugha Isiyo na Rasilimali Nyingi na yenye Mofolojia Tajiri: Kichanganuzi Tegemezi cha Kiamhari

Binyam Ephrem Seyoum, Yusuke Miyao, Baye Yimam Mekonnen

**Taasisi**  
Binyam Ephrem Seyoum, Yusuke Miyao, Baye Yimam Mekonnen  
Addis Ababa University, University of Tokyo, Addis Ababa University  
P.O.Box 1176, Addis Ababa, 7-3-1 Hongo, Bunkyo-ku, Tokyo 113-0033, P.O.Box 1176, Addis Ababa  
, 

## Muhtasari

Katika makala haya, tunalinganisha vichanganuzi tegemezi vinne vya kisasa vya mtandao wa neva kwa lugha ya Kisemiti ya Kiamhari. Kwa kuwa Kiamhari ni lugha yenye utajiri wa kimorfolojia na yenye rasilimali chache, tatizo la nje ya kamusi (OOV) litakuwa kubwa zaidi tunapounda mifano inayotegemea data. Ukweli huu unawazuia watafiti kuunda vichanganuzi vya mtandao wa neva kwa sababu mtandao wa neva unahitaji kiasi kikubwa cha data ili kufunza mfano. Tunatathmini kimajaribio vichanganuzi vya mtandao wa neva wakati treebank ndogo ya Kiamhari inapotumika kwa mafunzo. Kulingana na jaribio letu, tunapata alama ya 83.79 ya LAS kwa kutumia mfumo wa UDPipe. Usahihi bora unapatikana wakati mfumo wa uchanganuzi wa neva unapotumia rasilimali za nje kama vile upachikaji wa neno. Kwa kutumia rasilimali hizo, alama ya LAS kwa UDPipe inaboreshwa hadi 85.26. Jaribio letu linaonyesha kuwa mitandao ya neva inaweza kujifunza mahusiano ya utegemezi vizuri zaidi kutoka kwa data chache huku ugawaji na uwekaji alama wa POS vikihitaji data nyingi.

## Maneno Muhimu

Uchambuzi wa Utegemezi, Mtandao wa Neva, Kiamhari

## 1. Utangulizi

Uchambuzi wa utegemezi ni kazi ya kuchambua muundo wa utegemezi wa sentensi iliyotolewa kiotomatiki (Kübler et al., 2009). Inahitaji mfululizo wa maamuzi ili kuunda muundo wa sintaksia kulingana na uhusiano wa utegemezi. Siku hizi, sarufi ya utegemezi inazidi kupata umaarufu kwa sababu ya uwezo wake wa kushughulikia miundo ya kiima-kiambajengo ambayo inahitajika katika matumizi mengine ya NLP (Mcdonald et al., 2005). Kwa kuongezea, sarufi ya utegemezi inapendekezwa kwa lugha ambazo zina mpangilio huru wa maneno (Kübler et al., 2009; Tsarfaty et al., 2010). Hata hivyo, ingawa uchanganuzi wa utegemezi unaweza kubadilishwa kulingana na lugha nyingi, unafanya kazi kwa ufanisi mdogo kwa lugha zenye mofolojia tajiri kama Kiarabu, Kibaski, na Kigiriki (Dehdari et al., 2011). Inathibitishwa katika (Habash, 2010), kwamba lugha kama Kiarabu, Kiebrania, na Kiamhara zinaleta changamoto maalum kwa uundaji wa sarufi ya utegemezi kutokana na mofolojia yao changamano na upatanisho.

Kuanzia katikati ya karne ya 20, utafiti katika NLP umehamia kwenye mitandao ya neva. Katika mkondo huu wa utafiti, lugha inawakilishwa kwa namna ya vipengele visivyo vya mstari. Njia hiyo imechochewa na jinsi hesabu inavyofanya kazi katika ubongo (Goldberg, 2017). Inatumika katika maeneo kama vile tafsiri ya mashine, maono ya kompyuta, na utambuzi wa hotuba. Kuhusiana na uchanganuzi, wimbi la vichanganuzi vya mtandao wa neva lilianzishwa mwaka 2014 na Chen na Manning (Chen and Manning, 2014), ambao waliwasilisha kichanganuzi chenye kasi na usahihi kinachotegemea mpito kwa kutumia mitandao ya neva. Tangu wakati huo, mifano mingine ya uchanganuzi imetumia mbinu mbalimbali kama vile stack LSTM (Dyer et al., 2015; Kiperwasser na Goldberg, 2016), global normalization (Andor et al., 2016), biaffine attention (Dozat na Manning, 2017) au recurrent neural network grammars (Dyer et al., 2016; Kuncoro et al., 2017). Kutokana na kuwepo kwa treebank kwa lugha mbalimbali na kazi ya pamoja ya CoNLL 2017 (Zeman et al., 2017) na 2018 (Zeman et al., 2018), maboresho makubwa katika uchanganuzi wa vitegemezi kwa kutumia mitandao ya neva yameripotiwa. Kwa mfano, kichanganuzi cha neva kinachotegemea grafu cha Dozat et al. (Dozat et al., 2017) kilishinda CoNLL2017 UD Shared Task. Katika Kazi ya Pamoja ya UD ya CoNLL2018, mfumo ulioshinda ulikuwa wa Che et al. (Che et al., 2018). Mifumo hii imeboresha mbinu ya mtandao wa neva kwa uchanganuzi kupitia matumizi ya kazi za uboreshaji na rasilimali za nje kama vile kuingizwa kwa neno. Siku hizi, hali ya kisasa katika uchanganuzi ni mitandao ya neva inayojumuisha upachikaji wa neno.

Katika makala hii, tunawasilisha jaribio letu la kutengeneza kichanganuzi cha utegemezi kwa Kiamhariki kwa kutumia mbinu ya hali ya kisasa. Sehemu zilizobaki zimepangwa kama ifuatavyo. Sehemu ya 2 inatoa usuli mfupi kuhusu mchakato wa kutengeneza treebank ya Kiamhariki na inaeleza treebank tuliyotumia kufunza mifano ya mtandao wa neva. Sehemu ya 3 inaelezea mifumo ya uchanganuzi wa neva tunayotumia kukuza kifaa cha kuchanganua. Sehemu ya 4 inawasilisha ulinganisho wetu na matokeo tuliyopata. Sehemu ya mwisho, Sehemu ya 5, inafupisha na kuonyesha mwelekeo wa baadaye wa utafiti.

## 2. Usuli

Mfumo wa uchanganuzi unaweza kutumia mfano ambao umefunzwa kutoka kwa treebank ili kutabiri muundo wa sarufi kwa sentensi mpya. Mbinu hii ya uundaji wa kichanganuzi inaitwa uchanganuzi unaoongozwa na data. Lengo la uchanganuzi wa vitegemezi unaoongozwa na data ni kujifunza kutabiri kwa usahihi grafu za vitegemezi kutoka kwenye treebank. Kufuatia mwongozo wa utegemezi wa kimataifa (UD), Binyam et al. (Seyoum et al., 2018) walitengeneza benki ya miti kwa lugha ya Amharic. Katika kujenga rasilimali hii, walifuata mchakato wa bomba. Vibandikaji kama vile vihusishi, viambishi, viendeshaji vya ukanushaji, n.k. viligawanywa kwa mikono kutoka kwa mwenyeji wao. Kisha data iliyogawanywa ilifafanuliwa kwa POS, taarifa za kimofolojia na vitegemezi vya kisintaksia kulingana na schema ya ufafanuzi ya UD.

treebank ya Kiamhara (ATT) toleo la 1 lina sentensi 1,074 zilizofafanuliwa kwa mikono (tokeni 5,245 au maneno 10,010). Sentensi zilikusanywa kutoka vitabu vya sarufi, wasifu, habari, na maandishi ya kubuni na ya kidini. Watafiti walifanya juhudi kujumuisha aina tofauti za sentensi. Data imejumuishwa kwenye tovuti ya UD.

## 3. Vichanganuzi vya Mtandao wa Neva

Katika miaka ya hivi karibuni, vichanganuzi vingi vya utegemezi vya haraka na sahihi vimepatikana kwa umma. Kutokana na kazi ya pamoja ya uchanganuzi wa utegemezi na uwepo wa treebank kwa lugha tofauti, kila mwaka mbinu mpya za uchanganuzi zimeanzishwa (Lavelli, 2016; Zeman et al., 2017). Baadhi ya mifumo inahitaji rasilimali nyingi na treebank kubwa huku mingine ikiwa rahisi kuzoeleka kwa lugha mpya zenye rasilimali chache. Kwa msingi huu, tumechagua mifumo minne ya uchanganuzi iliyo tayari kutumika ili kuifanyia majaribio kwa Kiamhariki. Mifumo hiyo ni: UDPipe, JPTDP, UUParser na Turku.

## 3.1. UDPipe

UDPipe ni mfumo wa uchanganuzi wa mnyororo wa mchakato unaoweza kufunzwa na wa chanzo wazi. Hufanya ugawaji wa sentensi, ugawaji wa vipashio, uwekaji tagi za aina za maneno, ulemishaji, uchanganuzi wa kimofolojia, na uchanganuzi wa vitegemezi (Straka et al., 2016). Baada ya mfumo kufunzwa kwa kutumia muundo wa CoNLL-U, inafanya mgawanyiko wa sentensi na kutenganisha alama kwa pamoja kwa kutumia mtandao wa Gated Recurrent Unit (GRU) wa tabaka moja unaotembea pande zote mbili (Straka et al., 2017). Kazi za kuweka alama za aina ya neno (POS tagging), kutafuta msingi wa maneno (lemmatization), na uchambuzi wa umbo la maneno (morphological analysis), zinafanywa kwa kutumia MorphoDiTa ya (Straková et al., 2014).

Mfumo wa uchanganuzi wa UDPipe umejengwa juu ya Parsito, (Straková et al., 2014) mfumo unaotegemea mpito ambao unaweza kuchanganua sentensi zote mbili zisizo za kikadirio na za kikadirio. Kwa sentensi zisizo za kikadirio, hutumia mfumo wa arc-standard wa Nivre (Nivre, 2014). Ili kushughulikia sentensi zisizo na makadirio, ina mpito wa ziada unaoitwa "swap" ambao hupanga upya maneno mawili. Inatumia viainishi vya mtandao wa neva kutabiri mipito sahihi. Kwa lengo la kuboresha usahihi wa uchambuzi, inaongeza oracles zinazotegemea utafutaji. Pia inajumuisha usimbuaji wa hiari wa utafutaji wa boriti, sawa na ule wa Zhang na Nivre (Zhang na Nivre, 2011).

## 3.2. jPTDP

jPTDP ni muundo wa pamoja wa kuweka tagi za aina za maneno (POS) na uchanganuzi wa utegemezi (Nguyen na Verspoor, 2018). Ilitolewa katika matoleo mawili; kwa jaribio letu, tulitumia toleo la hivi karibuni, jPTDP v2.0. Muundo huu unategemea kichanganuzi cha utegemezi cha BIST kinachotegemea grafu cha Kiperwasser na Goldberg (Kiperwasser na Goldberg, 2016). Kwa kuzingatia tokeni za maneno katika sentensi ya pembejeo, sehemu ya kuweka tagi hutumia BiLSTM kujifunza vekta za sifa fiche zinazowakilisha tokeni. Kisha kipengele cha kuweka tagi hulisha vekta hizi za sifa kwenye perceptron ya tabaka nyingi (MLP) yenye tabaka moja iliyofichwa ili kutabiri tagi za POS.

Kipengele cha uchanganuzi kinatumia BiLSTM nyingine kujifunza seti ya uwakilishi fiche wa sifa ambao unategemea tokeni za pembejeo na tagi za POS zilizotabiriwa. Uwakilishi huu hulishwa kwenye MLP moja ili kusimbua tao za utegemezi na MLP nyingine ili kuweka lebo kwenye tao za utegemezi zilizotabiriwa.

## 3.3. UUParser

UUParser (toleo la 2.3) ni mfumo wa bomba la uchanganuzi wa utegemezi ambao unajumuisha vipengele vitatu (de Lhoneux et al., 2017). Kipengele cha kwanza hufanya ugawaji wa pamoja wa neno na sentensi, cha pili hutabiri tagi za POS na sifa za kimofolojia, na cha tatu hutabiri uhusiano wa utegemezi kutoka kwa maneno na tagi za POS (Nivre, 2008). Ugawaji wa neno na sentensi kwa pamoja hutengenezwa kama uwekaji lebo wa mfuatano wa kiwango cha herufi, kwa kutumia mitandao ya neva ya kujirudia ya pande mbili (BiRNN) pamoja na CRF (de Lhoneux et al., 2017).

Utabiri wa tagi za POS na sifa za kimofolojia unakamilishwa kwa kutumia modeli ya Meta-BiLSTM yenye usimbaji wa tokeni unaozingatia muktadha. Mbinu hii imechukuliwa kutoka kwa kazi ya Bohnet et al. (Bohnet et al., 2018). Mbinu hii hutumia BiLSTM kuiga maneno na herufi zote katika kiwango cha sentensi, na hivyo kuipa modeli ufikiaji wa muktadha wa sentensi. Modeli za herufi na neno zinaunganishwa katika Meta-BiLSTM. Katika Meta-BiLSTM, wanachanganya pato, kwa kila neno, (ya uigaji wa herufi na maneno unaozingatia muktadha) na kuituma kwa BiLSTM nyingine ili kuunda uigaji wa ziada unaozingatia muktadha. Hii hufuatiwa na MLP ya mwisho, ambayo matokeo yake hupitishwa kwenye safu ya mstari kwa utabiri wa kitambulisho cha POS.

Sehemu ya tatu ni uchanganuzi wa utegemezi, ambapo kichanganuzi chenye tamaa kinachotegemea mpito (Nivre, 2008) kinatumika, kikifuata mfumo wa Kiperwasser na Goldberg (Kiperwasser and Goldberg, 2016). Mfumo huu hujifunza uwakilishi wa tokeni katika muktadha kwa kutumia BiLSTM. Muktadha wa tokeni na mpito (lebo za tao) zote zinafunzwa pamoja kwa kutumia perceptroni ya tabaka nyingi. Hii inawezesha modeli kutabiri lebo za mpito na tao kulingana na vekta chache za BiLSTM. Waandishi pia wanaanzisha oracle tuli-tendaji, ambayo inaruhusu kichanganuzi kujifunza kutoka kwa usanidi usio bora wakati wa mafunzo.

## 3.4. Turku Parser

Turku ni bomba la uchanganuzi wa neva kwa ajili ya ugawaji, uwekaji tagi wa kimofolojia, uchanganuzi wa utegemezi na ulematizishaji (Kanerva et al., 2018). Kwa ugawaji wa sentensi na utokenishaji, mfumo unategemea matokeo ya UDPipe. Mnyororo huo unaruhusu upachikaji uliofunzwa awali kujumuishwa katika mafunzo.

Uwekaji tagi unafanywa kwa kutumia mfumo wa Dozat et al. (Dozat et al., 2017) ambao unatumia kiainishi cha aina ya 'affine' kinachosambazwa kwa wakati kwa tokeni ndani ya sentensi. Ishara huingizwa kwanza kwa kisimbuzi cha neno. Kisimbuzi kinajumlisha upachikaji wa tokeni uliofunzwa, upachikaji wa tokeni uliofunzwa awali, na upachikaji wa tokeni uliosimbwa kutoka kwa mfuatano wa herufi zake kwa kutumia LSTM ya mwelekeo mmoja. Ifuatayo, LSTM ya pande mbili inasoma mfuatano wa tokeni zilizopachikwa katika sentensi ili kuunda uwakilishi wa tokeni unaozingatia muktadha. Uwakilishi huu kisha hubadilishwa kwa kutumia tabaka za ReLU kivyake kwa kila tabaka la uainishaji wa lebo za affine (yaani UPOS na XPOS). Tabaka hizi mbili za uainishaji hufunzwa pamoja kwa kujumlisha hasara zao za entropi ya msalaba.

Ulemmatizaji ni mnyororo mwingine katika kifaa cha kuchanganua cha Turku ambapo watafiti wanakuza sehemu yao wenyewe ya ulemmatizaji. Mfumo huu huchukulia lemmatization kama tatizo la tafsiri ya mlolongo-kwa-mlolongo. Wanaangalia neno kama ingizo, mfuatano wa herufi zinazounganishwa na mfuatano wa lebo zake za aina ya neno na za kimorfolojia. Patokanalo linategemea lemma inayolingana iliyowakilishwa kama mfuatano wa herufi. Watafiti kimsingi hufunza mfumo wao kutafsiri herufi za umbo la neno na lebo za kimofolojia kuwa herufi za lemma. Wao hutumia mtandao wa kina wa kisimbuzi-dekoda chenye umakini na kisimbuzi cha LSTM chenye mwelekeo-mbili chenye tabaka mbili kwa kusoma mfuatano wa herufi za ingizo na lebo za kimofolojia. Kwa matokeo yake, walipata vekta kwa ajili ya kisimbuzi cha mfuatano. Wakati wa awamu ya usimbuaji, walitumia utafutaji wa boriti kwa ukubwa wa tano.

Kazi ya lebo ya sintaksia katika kifaa cha kuchanganua cha Turku inategemea mfumo uliobuniwa na Dozat et al. (Dozat et al., 2017). Watafiti wanafuata mbinu zinazofanana na zile walizotekeleza kwa moduli ya kuweka lebo za POS, ambapo tokeni zilipachikwa kwa kisimbuzi cha neno. Kisimbuzi cha neno, basi, hujumlisha upachikaji wa tokeni uliojifunza, upachikaji wa tokeni uliofunzwa awali, na upachikaji wa tokeni uliosimbwa kutoka kwa mfuatano wa herufi zake kwa kutumia LSTM ya mwelekeo mmoja. Tokeni zilizopachikwa kisha huunganishwa pamoja na upachikaji husika wa POS. BiLSTM kisha husoma mfuatano wa tokeni zilizopachikwa katika sentensi ili mfumo uwe na uwakilishi wa tokeni unaozingatia muktadha. Uwakilishi wa tokeni kisha hubadilishwa kwa kutumia tabaka nne tofauti za ReLU kando kwa ajili ya viainishi viwili tofauti vya biaffine. Kiainishi hiki hupatia alama mahusiano yanayowezekana (HEAD) na aina zake za utegemezi (DEPREL), na utabiri bora zaidi huchambuliwa baadaye ili kuunda mti. Viainishi hivi vya mahusiano na aina vinafunzwa tena kwa pamoja kwa kujumlisha hasara zao za entropi mtambuka. Angalia (Dozat and Manning, 2017) na (Dozat et al., 2017) kwa mchakato wa kina.

## 4. Kulinganisha Vichanganuzi vya Mtandao wa Neva

Kabla ya kuzungumzia kulinganisha, tunaelezea mpangilio wa majaribio tuliofuata. Amali sanifu ya kutayarisha data ni kugawanya data katika seti ya mafunzo, maendeleo na jaribio, kawaida asilimia 80 kwa mafunzo, na asilimia 10 kila moja kwa maendeleo na jaribio. Hata hivyo, seti ya data tuliyo nayo ni ndogo mno kuweza kugawanywa katika uwiano kama huo. Badala yake, tunafanya uthibitishaji mtambuka wa mara kumi (Zeman et al., 2017), tukichagua na kupanga kwa nasibu idadi sawa ya sentensi katika seti kumi. Data tulizotumia kwa makala hii zinapatikana kwa uhuru katika http://github.com/Binyamephrem/Amharic-treebank. Wakati wa awamu ya mafunzo, data katika seti tisa hutumiwa kama seti ya mafunzo na kupimwa dhidi ya sentensi katika seti iliyobaki.

## 4.1. Matokeo ya majaribio

Katika Jedwali la 1, tunawasilisha matokeo ya kutathmini mifumo ya uchanganuzi tuliyoifunza. Ili kufanya tathmini iwe haki, jaribio la kwanza linafanywa kwa kutojumlisha rasilimali za nje nyingine. Kwa kuwa kichanganuzi cha Turku kinahitaji upachikaji wa neno uliofunzwa awali, tunakitenga kutoka kwa ulinganisho huu. Kwa madhumuni ya tathmini, tunatumia skripti ya tathmini ya conllu18, ambayo inahitaji data iwe katika muundo wa CoNLL-U na kutupa matokeo ya tathmini ya ULA, LAS, MLAS, na BLEX kwa kulinganisha pato la mfumo na data ya dhahabu.

p03-01.png

Jedwali la 1: Ulinganisho wa mifumo ya uchanganuzi

Katika vipimo vyote, UDPipe inafanya kazi vizuri zaidi kuliko jPTDP na UUParser. LAS inahesabu asilimia ya maneno ambayo yamepewa kichwa cha sintaksia sahihi na lebo ya utegemezi sahihi. Mfumo wenye matokeo ya juu ya LAS pia utakuwa na matokeo ya juu katika vipimo vingine pia. Hata hivyo, tofauti kubwa imeonekana katika alama ya MLAS (6.03-6.50). MLAS inangalia hasa tathmini ya pamoja ya UPOS na sifa za kimorfolojia. UDPipe na UUParser zote ni mifumo ya bomba ilhali jPTDP ni muundo shirikishi. Alama ya jPTDP kwenye MLAS ni mbaya zaidi, pengine kwa sababu muundo unalenga tu uwekaji lebo za POS na uwekaji lebo za utegemezi. Hivyo, inaweza kuwa haina uhalali kuzilinganisha kwenye alama hii kwani jPTDP haizingatii vitambulisho vya kimofolojia katika muundo. Mantiki hiyo hiyo inatumika kuhusu alama BLEX. BLEX inazingatia uhusiano kati ya maneno ya maudhui kwa kuzingatia lemma, ambazo hazijawekwa kwenye mfano katika jPTDP. Alama tuliyoipata kwa jPTDP pengine inatokana na mfumo kuona lemma za dhahabu au data ya pembejeo.

## 4.2. Muundo wa Uchambuzi Ulioboreshwa na Rasilimali za Nje

Tulifanya jaribio lingine ambapo mifano inaweza kuimarishwa na rasilimali za nje. Njia moja ya kuboresha mfano ni kutumia upachikaji wa neno uliofunzwa awali. Kwa madhumuni haya, tulitumia mfano mafunzo kwa ajili ya Amharic kutumia fasttext. Takwimu kwa ajili ya mafunzo ya mfano ni kutoka Wikipedia na Common Crawl. Miundo hiyo ilifunzwa kwa kutumia mfuko wa maneno endelevu (CBOW) wenye uzani wa nafasi, katika kipimo cha 300 na kuzingatia herufi za n-gramu za urefu wa 5 kwa dirisha la ukubwa wa 5 na hasi 10 (Grave et al., 2018).

Katika ulinganisho huu, tumejumuisha kichanganuzi cha Turku kwa sababu kinahitaji upachikaji wa neno uliofunzwa awali. Jedwali la 2 linawasilisha matokeo wakati kila muundo unaimarishwa kwa upachikaji wa neno.

p03-02.png

Jedwali la 2: Muundo ulioimarishwa kwa upachikaji wa neno uliofunzwa awali

Tunaweza kuona kwamba upachikaji wa neno uliofunzwa awali huongeza utendaji wa muundo katika kila mfumo. Asilimia ya uboreshaji inatofautiana kulingana na mfumo. jPTPD inapata alama bora katika vipimo vyote, jambo linaloonyesha kwamba mfumo unanufaika na muundo uliofunzwa awali. Kwa mfano, kuna uboreshaji wa 2.32% katika kipimo cha LAS, ambao unaweza kuhusishwa na treebank ndogo iliyotumika katika jaribio. Sababu nyingine ya kuboresha zaidi mfano wa jPTPD inaweza kuhusiana na uwakilishi wa neno "usiojulikana", ambao ni wa kawaida katika lugha zenye utajiri wa mofolojia. jPTPD hutumia uwakilishi unaotegemea herufi unaotokana na LSTM, ambao huzalisha embeddings kutoka kwa mfuatano wa herufi. Hii inathibitisha kwamba modeli ya herufi ni bora kwa lugha zenye mofolojia tajiri zenye uwiano wa juu wa aina-tokeni (Smith et al., 2018). Kwa kuwa UDPipe hupata matokeo bora tangu mwanzo, ongezeko linalotokana na embeddings za maneno kwa kawaida ni dogo. Maboresho kama hayo wakati mwingine hutathminiwa kwa kutumia upunguzaji wa makosa wa uwiano. Kwa UDPipe, upunguzaji wa makosa wa uwiano ni takriban ∼ 9%. Hii inamaanisha kuwa 9% ya makosa ya mfumo usio na upachikaji wa maneno yamepunguzwa kwa kutumia upachikaji wa maneno. Vivyo hivyo, upunguzaji wa makosa wa uwiano kwa jPTDP ni ∼ 11.4%. Hata kwa kipimo hiki, UDPipe haikupata manufaa mengi kama jPTDP.

p04-01.png

Jedwali la 3: Maandishi ya kawaida na maandishi yaliyogawanywa

## 4.3. Athari ya bomba la usindikaji kwenye mfumo wa uchanganuzi

Jaribio lingine tulilolifanya linahusu athari ya kila bomba la usindikaji kwenye utendaji wa vichanganuzi wakati ingizo ni maandishi ya kawaida. Kwa kusudi hili, tunatumia UDPipe na Kichanganuzi cha Turku. Vichanganuzi vilivyobaki vinahitaji modeli tofauti ya ugawaji au ingizo katika umbizo la CoNLL-U. Tunalinganisha alama za ugawaji, uwekaji tagi na uchanganuzi wa vichanganuzi vyote viwili. Jedwali la 3 linawasilisha alama za kila mfumo wakati ingizo ni maandishi ya kawaida na maandishi yaliyogawanywa.

Tunaona kwamba kuna pengo kubwa katika LAS kati ya ugawaji wa dhahabu na uliotabiriwa. Hili linaweza kusababishwa na utabiri duni wa maneno, ambao kwa upande wake hupunguza utabiri wa uwekaji tagi. Alama za ugawaji wa tokeni na sentensi ni za juu kwa vichanganuzi vyote viwili. Hata hivyo, alama za ugawaji wa maneno kwa vichanganuzi vyote viwili zilishuka kwa kiasi kikubwa kutoka 98% hadi 80%. Matokeo ya uwekaji tagi kwa kichanganuzi cha Turku ni bora wakati wa kutumia ugawaji wa dhahabu (93-95%), lakini upungufu mkubwa unaonekana (74-77%) wakati wa kutumia ugawaji uliotabiriwa (au maandishi ya kawaida). Matokeo yake, alama za utegemezi wa kushikamana pia hupungua kwa kiasi kikubwa (42-62%). Hii inathibitisha kwamba makosa yanayoenea katika kila bomba huathiri sana alama za uambatishaji.

Tunaweza pia kuona kutoka Jedwali 3 kwamba kwa UDPipe yenye ingizo lililogawanywa, mfumo unatumia dhahiri POS za dhahabu na vipengele vya kimofolojia (alama ni 100%). Hivyo, idadi hizi haziwezi kulinganishwa na bomba la Turku. Kwa sababu ileile, alama za LAS kwa Turku yenye ingizo lililogawanywa na UDPipe yenye ingizo lililogawanywa haziwezi kulinganishwa. Kuna uboreshaji kila wakati mchanganuzi anapoweza kufikia vitambulisho vya dhahabu na vitambulisho vya kimofolojia. Ikiwa kuna kigawanyaji na kitambulishaji bora, alama bora za LAS zinaweza kupatikana. Ingawa mchanganuzi wa Turku anatumia modeli ya ugawaji kutoka UDPipe, alama za utambulishaji za Turku ni bora kidogo kuliko za UDPipe wakati maandishi wazi yanapotolewa kwa mifumo yote miwili.

## 5. Muhtasari na Maelekezo ya Baadaye

Makala hii imewasilisha ulinganisho wa michanganuzi ya mtandao wa neva. Kulingana na ulinganisho wetu, tulipata alama ya LAS ya 83.79 kwa kutumia mfumo wa UDPipe. Hii inaweza kuimarishwa hadi 85.26 kwa kutumia rasilimali za nje, yaani, upachikaji wa neno. Kutoka kwenye majaribio tunaweza kupendekeza kitakachofanya kazi vizuri zaidi kwa Kiamhari. Kichanganuzi cha Kiamhariki kinahitaji ugawaji wa klitiki kabla ya uwekaji tagi. Kwa kazi hii, twapendekeza UDPipe. Hata hivyo, utendaji wa ugawaji unahitaji kuimarishwa kwani unaathiri Usahihi wa uwekaji tagi na uambatishaji kwa kiasi kikubwa.

Tumelinganisha mifano ya bomba na ya pamoja kwa ajili ya uwekaji tagi na uchanganuzi wa kisintaksia. Kutoka kwa mifumo ya bomba, mfumo wa uchanganuzi wa Turku unapata matokeo bora katika kazi ya uwekaji tagi. Hata hivyo, tumebaini kuwa mifumo ya uchanganuzi inayofuata mkabala wa bomba inahitaji kuwa na moduli bora zaidi ya ugawaji na uwekaji tagi. Kwa kuwa makosa yanaenea kutoka bomba moja hadi nyingine, uchanganuzi au kiambatisho cha utegemezi huathiriwa sana. Iwapo modeli ya pamoja inapendekezwa, mtu anahitaji kuzingatia uwekaji tagi wa kimofolojia pamoja na uwekaji tagi wa POS. Jaribio letu linaonyesha kuwa modeli ya pamoja ni eneo la utafiti lenye matumaini kwa masomo zaidi. jPTDP inazingatia tu taarifa za POS na uunganishaji.

Tunakusudia kuendeleza utafiti wetu kwa njia mbili. Kwa kuwa data ambayo modeli ya ugawaji ilifunzwa ilikuwa ndogo sana, tunapanga kupanua data ili modeli ya ugawaji iweze kuimarishwa. Tunaweza kutumia utabiri wa sasa wa ugawaji kwenye seti ya data kubwa zaidi na kusahihisha kwa mikono ugawaji uliotabiriwa ili kuwa na modeli bora ya ugawaji. Aidha, tutachunguza athari za kujifunza modeli ya pamoja ya uwekaji tagi wa kimofolojia pamoja na uwekaji tagi wa POS na kiambatisho cha utegemezi.

Tunahitimisha kwamba, ingawa tuna treebank ndogo, bado tunaweza kutengeneza kichanganuzi chenye ufanisi wa kiasi kwa Kiamhariki. Yaani, mifumo ya sintaksisi inaweza kujifunzwa kutoka kwa treebank ndogo. Hata hivyo, data katika treebank inahitaji kuchaguliwa kwa makini ili kujumuisha mifumo ya sintaksisi iliyopo katika lugha. Sehemu changamoto katika utafiti wa siku zijazo itakuwa kujifunza alama kwa vitu vya leksi vipya.

## Maelezo

1 https://universaldependencies.org/

2 https://ufal.mff.cuni.cz/udpipe

3 https://github.com/datquocnguyen/jPTDP

4 https://github.com/UppsalaNLP/uuparser

5 https://turkunlp.org/Turku-neural-parser-pipeline

6 http://universaldependencies.org/conll18/conll18_ud_eval.py

7 https://fasttext.cc/docs/en/crawl-vectors.html

8 http://commoncrawl.org

9 Inahesabiwa kama (85.26-83.79) / (100-83.79)

10 Inahesabiwa kama (82.00-79.68) / (100-79.68)

## 6. Marejeo

Andor, D., Alberti, C., Weiss, D., Severyn, A., Presta, A., Ganchev, K., Petrov, S., and Collins, M. (2016). Globally Normalized Transition-Based Neural Networks. Association for Computational Linguistics, arXiv preprint arXiv:1603.06042.

Bohnet, B., McDonald, R., Simoes, G., Andor, D., Pitler, E., and Maynez, J. (2018). Morphosyntactic Tagging with a Meta-BiLSTM Model over Context Sensitive Token Encodings. In Proceedings of the 56 th Annual Meeting of the Association for Computational Linguistics (Long Papers), pages 2642-2652, Melbourne, Australia. Association for Computational Linguistics.

Che, W., Liu, Y., Wang, Y., Zheng, B., and Liu, T. (2018). Towards Better UD Parsing: Deep Contextualized Word Embeddings, Ensemble, and Treebank Concatenation. In Proceedings of the CoNLL 2018 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies, pages 55-64.

Chen, D. and Manning, C. D. (2014). A Fast and Accurate Dependency Parser using Neural Networks. In Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing (EMNLP), pages 740-750, Doha, Qatar.

de Lhoneux, M., Shao, Y., Basirat, A., Kiperwasser, E., Stymne, S., Goldberg, Y., and Nivre, J. (2017). From raw text to universal dependencies-look, no tags! In Proceedings of the CoNLL 2017 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies, pages 207-217.

Dehdari, J., Tounsi, L., and van Genabith, J. (2011). Morphological Features for Parsing Morphologically-rich Languages: A Case of Arabic. In Proceedings of the 2nd Workshop on Statistical Parsing of Morphologically-Rich Languages (SPMRL 2011), pages 12-21, Dublin, Ireland. Association for Computational Linguistics.

Dozat, T. and Manning, C. D. (2017). Deep Biaffine Attention for Neural Dependency Parsing. In ICLR2017.

Dozat, T., Qi, P., and Manning, C. D. (2017). Stanford's Graph-based Neural Dependency Parser at the CoNLL 2017 Shared Task. (2016):20-30.

Dyer, C., Ballesteros, M., Ling, W., Matthews, A., and Smith, N. A. (2015). Transition-Based Dependency Parsing with Stack Long Short-Term Memory. In Proceedings of the 53rd Annual Meeting of the Association for Computational Linguistics and the 7 th International Joint Conference on Natural Language Processing, pages 334-343, Beijing, China. Association for Computational Linguistics.

Dyer, C., Kuncoro, A., Ballesteros, M., and Smith, N. A. (2016). Recurrent Neural Network Grammars. In Proc. of NAACL.

Goldberg, Y. (2017). Neural Network Methods for Natural Language Processing. In Synthesis Lectures on Human Language Technologies, volume 10, pages 1-282. Morgan & Claypool Publishers series.

Grave, E., Bojanowski, P., Gupta, P., Joulin, A., and Mikolov, T. (2018). Learning Word Vectors for 157 Languages. In Proceedings of the International Conference on Language Resources and Evaluation (LREC 2018), pages 1-5.

Habash, N. Y. (2010). Introduction to Arabic Natural Language Processing. Synthesis Lectures on Human Language Technologies, 3(1):1-187.

Kanerva, J., Ginter, F., Miekka, N., Leino, A., and Salakoski, T. (2018). Turku Neural Parser Pipeline : An End-to-End System for the CoNLL 2018 Shared Task. In Proceedings of the CoNLL 2018 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies, pages 133-142.

Kiperwasser, E. and Goldberg, Y. (2016). Simple and Accurate Dependency Parsing Using Bidirectional LSTM Feature Representations. Transactions of the Association for Computational Linguistics, 4:313-327.

Kübler, S., McDonald, R., and Nivre, J. (2009). Dependency Parsing. Synthesis Lectures on Human Language Technologies, 34(1):1-127.

Kuncoro, A., Ballesteros, M., Kong, L., Dyer, C., Neubig, G., and Smith, N. A. (2017). What Do Recurrent Neural Network Grammars Learn About Syntax? arXiv preprint arXiv:1611.05774.

Lavelli, A. (2016). Comparing State-of-the-art Dependency Parsers on the Italian Stanford Dependency Treebank. CLiC it, pages 173-178.

Mcdonald, R., Crammer, K., and Pereira, F. (2005). Online Large-Margin Training of Dependency Parsers. pages 91-98.

Nguyen, D. Q. and Verspoor, K. (2018). An improved neural network model for joint POS tagging and dependency parsing. In Proceedings of the CoNLL 2018 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies, pages 81-91.

Nivre, J. (2008). Algorithms for Deterministic Incremental Dependency Parsing. Computational Linguistics, 34(4):513-553.

Nivre, J. (2014). Universal Dependencies for Swedish. In The Fifth Swedish Language Technology Conference (Sltc), pages 1579-1585.

Seyoum, B. E., Miyao, Y., and Mekonnen, B. Y. (2018). Universal Dependencies for Amharic. In Nicoletta Calzolari, et al., editors, Proceedings of the Eleventh International Conference on Language Resources and Evaluation (LREC 2018), pages 2216-2222, Miyazaki, Japan. European Language Resources Association (ELRA).

Smith, A., de Lhoneux, M., Stymne, S., and Nivre, J. (2018). An Investigation of the Interactions Between Pre-Trained Word Embeddings, Character Models and POS Tags in Dependency Parsing. In Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing, pages 2711-2720, Brussels, Belgium. Association for Computational Linguistics.

Straka, M., Hajič, J., and Straková, J. (2016). UDPipe: Trainable Pipeline for Processing CoNLL-U Files Performing Tokenization, Morphological Analysis, POS Tagging and Parsing. In Proceedings of LREC 2016, pages 4290-4297.

Straka, M., Straková, J., and Hajič, J. (2017). Prague at EPE 2017: The UDPipe System. In Proceedings of the 2017 Shared Task on Extrinsic Parser Evaluation at the Fourth International Conference on Dependency Linguistics and the 15 th International Conference on Parsing Technologies, pages 65-74, Pisa (Italy). Association for Computational Linguistics (ACL).

Straková, J., Straka, M., and Hajič, J. (2014). Open-Source Tools for Morphology, Lemmatization, POS Tagging and Named Entity Recognition. In Proceedings of the 52 nd Annual Meeting of the Association for Computational Linguistics: System Demonstrations, pages 13-18, Baltimore, Maryland USA. Association for Computational Linguistics.

Tsarfaty, R., Seddah, D., Goldberg, Y., Kübler, S., Candito, M., Foster, J., Versley, Y., Rehbein, I., and Tounsi, L. (2010). Statistical parsing of morphologically rich languages (SPMRL): what, how and whither. In Proceedings of the NAACL HLT 2010 First Workshop on Statistical Parsing of Morphologically-Rich Languages, pages 1-12, Los Angeles, California. Association for Computational Linguistics.

Zeman, D., Popel, M., Straka, M., Hajic, J., Nivre, J., Ginter, F., Luotolahti, J., Pyysalo, S., Petrov, S., Potthast, M., Tyers, F., Badmaeva, E., Gokirmak, M., Nedoluzhko, A., Cinkova, S., Hajic jr., J., Hlavacova, J., Kettnerová, V., Uresova, Z., Kanerva, J., Ojala, S., Missilä, A., Manning, C. D., Schuster, S., Reddy, S., Taji, D., Habash, N., Leung, H., de Marneffe, M.-C., Sanguinetti, M., Simi, M., Kanayama, H., DePaiva, V., Droganova, K., Martínez Alonso, H., Çöltekin, Ç., Sulubacak, U., Uszkoreit, H., Macketanz, V., Burchardt, A., Harris, K., Marheinecke, K., Rehm, G., Kayadelen, T., Attia, M., Elkahky, A., Yu, Z., Pitler, E., Lertpradit, S., Mandl, M., Kirchner, J., Alcalde, H. F., Strnadová, J., Banerjee, E., Manurung, R., Stella, A., Shimada, A., Kwak, S., Mendonca, G., Lando, T., Nitisaroj, R., and Li, J. (2017). CoNLL 2017 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies. In Proceedings of the CoNLL 2017 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies, pages 1-19. Association for Computational Linguistics.

Zeman, D., Hajič, J., Popel, M., Potthast, M., Straka, M., Ginter, F., Nivre, J., and Petrov, S. (2018). CoNLL 2018 Shared Task : Multilingual Parsing from Raw Text to Universal Dependencies. In Proceedings of the CoNLL 2018 Shared Task: Multilingual Parsing from Raw Text to Universal Dependencies, pages 1-21, Brussels, Belgium. Association for Computational Linguistics.

Zhang, Y. and Nivre, J. (2011). Transition-based Dependency Parsing with Rich Non-local Features. In Proceedings of the 49 th Annual Meeting of the Association for Computational Linguistics: short papers, pages 188-193. Association for Computational Linguistics.
