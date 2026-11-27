> Machine translation (sw) of "Training Cross-Lingual embeddings for Setswana and Sepedi" by Mack Makgatho, Vukosi Marivate, Tshephisho Sefara, Valencia Wagner, https://upjournals.up.ac.za/index.php/dhasa/article/view/3822, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Mafunzo ya ujumuishaji wa lugha kwa lugha za Setswana na Sepedi

Mack Makgatho, Vukosi Marivate, Tshephisho Sefara, Valencia Wagner

**Taasisi**  
Makgatho, Mack  
Dept. of Computer Science, University of Pretoria  
  
Marivate, Vukosi  
Dept. of Computer Science, University of Pretoria  
  
Sefara, Tshephisho  
Council for Scientific and Industrial Research  
  
Wagner, Valencia  
Sol Plaatje University  


## Muhtasari

Lugha za Afrika bado ziko nyuma katika maendeleo ya mbinu za uchakataji wa lugha asilia, sababu moja ikiwa ni ukosefu wa data wakilishi, kuwa na mbinu inayoweza kuhamisha taarifa kati ya lugha kunaweza kusaidia kupunguza tatizo la ukosefu wa data. Makala hii inafunza vekta za neno za lugha moja za Setswana na Sepedi na kutumia VecMap kuunda upachikaji kati ya lugha kwa Setswana-Sepedi ili kufanya uhamishaji wa kati ya lugha.

Viambatanisho vya neno ni vekta za neno zinazowakilisha maneno kama nambari elezi zinazoendelea ambapo maneno yanayofanana kimaana huwekwa kwenye pointi zilizo karibu katika nafasi ya n-dimensional. Wazo la viambatanisho vya neno linatokana na dhana ya usambazaji inayosema kwamba, maneno yanayofanana kimaana yanasambazwa katika miktadha inayofanana (Harris, 1954).

Viingizaji vya lugha mbalimbali hutumia viingizaji vya lugha moja kwa kujifunza nafasi ya vekta inayoshirikiwa kwa ajili ya vekta mbili za lugha moja zilizofundishwa peke yake ili neno lenye maana inayofanana liwakilishwe na vekta zinazofanana. Katika makala hii, tunachunguza upachikaji kati ya lugha kwa vekta ya neno la Setswana-Sepedi la lugha moja. Tunatumia viambatanisho vya kati ya lugha visivyo na usimamiaji katika VecMap kufunza viambatanisho vya neno vya lugha tofauti vya Setswana-Sepedi. Tunathibitisha ubora wa uwakilishi wa maneno ya kati ya lugha za Setswana-Sepedi kwa kutumia kazi ya tathmini ya maana. Kwa kazi ya kulinganisha maana, tulitafsiri kazi za WordSim na SimLex katika lugha za Setswana na Sepedi. Tunatoa seti hii ya data kama sehemu ya kazi hii kwa watafiti wengine. Tunathibitisha ubora wa ndani wa viingizaji ili kubaini kama kuna uboreshaji katika uwakilishi wa maana wa viingizaji vya maneno.

## Maneno Muhimu

embeddings kati ya lugha, embeddings za neno, tathmini ya ndani

## 1 Utangulizi

Lugha nyingi za Afrika hazina rasilimali za kutosha za lugha (data, zana, watu) (Abbott & Martinus 2019, Martinus & Abbott 2019, Nekoto et al. 2020, Sefara et al. 2021) na kuanguka katika uainishaji wa lugha za rasilimali za chini (Ranathunga et al. 2021) katika uwanja wa Natural Language Processing (NLP). Ukosefu huu wa rasilimali hufanya iwe vigumu kuwekeza katika maendeleo ya hivi karibuni katika kazi nyingi za NLP kama vile Neural Machine Translation (Cho et al. 2014), Large Language Models (Devlin et al. 2018, Howard & Ruder 2018), Q&A systems (Kwiatkowski et al. 2019), nk. Kunaweza kuwa na mbinu zaidi za kushughulikia baadhi ya changamoto hizi kama vile Uhamisho wa Kujifunza (Ruder et al. 2019), Upanuzi wa Takwimu (Marivate & Sefara 2020a), Mifano ya Lugha Nyingi (Hedderich et al. 2020), nk. Zaidi ya hayo, ukosefu wa umakini wa utafiti kwa mbinu zilizopo za NLP husababisha ugumu wa kupata kigezo (Abbott & Martinus 2019). Katika kazi hii, tunalenga katika uwakilishi wa maneno kwa njia ya maneno ya kuingizwa na jinsi tunavyoweza kutumia lugha moja kusaidia katika uwakilishi wa lugha nyingine inayohusiana. Upachikaji huu wa maneno unaweza kisha kutumika kutengeneza zana kwa ajili ya kazi nyingine za mkondo wa chini.

Word Embeddings ni mbinu ya kihisabati ya kujifunza uwakilishi wa jumla wa vekta za lugha kutoka kwa kiasi kikubwa cha maandishi yasiyo na lebo kwa kutumia takwimu za utokeaji-pamoja. Katika miaka ya hivi karibuni, mbinu za uingizaji wa neno la lugha moja zimezidi kuwa rasilimali muhimu katika NLP. Kuingizwa kwa neno hutumiwa sana katika matatizo ya NLP kama vile uchambuzi wa hisia (Socher et al. 2013), kutambuliwa kwa kiumbe kilichotajwa (Guo et al. 2014), sehemu za maneno, na utafutaji wa hati. Word2Vec ni modeli ya mafunzo ya vekta iliyopendekezwa na Mikolov et al. (2013). Word2Vec huzalisha vekta ya thamani halisi ya vipimo vya chini inayowakilisha maana ya neno. Vekta ya neno inawakilisha sifa za kisarufi na kisemantiki, jambo linalosababisha maneno yenye mahusiano ya kisemantiki yanayofanana kuwa karibu. Mbinu ya uwakilishi wa vekta ya neno inajumuisha uhusiano wa kisemantiki kati ya maneno ambao hauwezekani kupitia uwakilishi kama vile BagOf-Words ya TFIDF. Upachikaji wa maneno ni bora kuliko mbinu zote mbili kwa sababu hupanga maneno yote katika lugha ndani ya nafasi ya vekta ya kipimo fulani, maneno hubadilishwa kuwa vekta na kuruhusu operesheni nyingi za mstari na kuwa na sifa ya kuhifadhi mlinganisho (Mikolov et al. 2013, Pennington et al. 2014).

Upachikaji wa maneno kati ya lugha umekuwa ukipokea uangalifu zaidi na zaidi kutoka kwa jumuiya ya NLP, hasa kwa sababu umetoa njia ya kupatanisha kwa ufanisi upachikaji wa lugha moja uliotengana bila kamusi ya lugha mbili kwa mbinu zisizo na usimamizi au si zaidi ya kamusi ndogo ya lugha mbili kwa mbinu zenye usimamizi (Lample et al. 2018, Artetxe et al. 2020). Mbinu za kubadilishana lugha pia huwezesha uhamisho wa maarifa kati ya lugha zenye rasilimali nyingi na zile zenye rasilimali chache. Kwa lugha zinazokosa korasi sambamba ya lugha mbili na lugha nyingine, upachikaji kati ya lugha unaweza kutumika kufunza upachikaji kati ya lugha wa ubora wa juu (Lample et al. 2018). Hili linaweza kusaidia katika kuharakisha maendeleo ya kutumia NLP kwa lugha zenye rasilimali chache. Artetxe et al. (2018) waliunda mbinu ya kuunganisha maneno ya lugha mbalimbali bila usimamizi au usimamizi (VecMap library) kwa ajili ya mafunzo ya mifano ya kuunganisha maneno ya lugha mbalimbali. Mbinu hizo zinaweza kutumika kuunda vekta za maneno kati ya lugha kwa kutumia au bila kutumia kamusi ya lugha mbili.

Lugha nyingi za Afrika Kusini hazina korasi sambamba ya lugha mbili na lugha nyingine. Katika kazi hii, tunalenga kuchunguza jinsi viingizo vya kati ya lugha vinavyoweza kutumika kuboresha hali ya lugha moja au zote mbili. Tulitumia data (korasi) kutoka vikoa tofauti kufunza upachikaji wa lugha moja wa Word2Vec na fastText (Bojanowski et al. 2016). Wakati wa kutumia VecMap, viingizo viwili vinalinganishwa. VecMap inahitaji vekta mbili za maneno za lugha moja kutoka chanzo na lengwa (Artetxe et al. 2018). Ili kutathmini ufanisi wa viingizo vya kati ya lugha kwa Setswana na Sepedi, tunatumia tathmini ya ndani (Bakarov 2018) kupitia toleo la Setswana na Sepedi la WordSim (Finkelstein et al. 2001) na Simlex (Hill et al. 2015). Hii inafuata njia ambayo imetumika kwa Yoruba na Twi (Alabi et al. 2019). Pia tunatoa seti ya data kwa ajili ya kigezo hiki cha kazi ya ulinganifu wa semantiki ya binadamu.

Makala hii imeundwa kama ifuatavyo; sehemu inayofuata ni mapitio ya kazi husika ambayo imefanywa kuhusu vekta za maneno kati ya lugha. Ikifuatiwa na ukusanyaji wa data katika Sehemu ya 3. Sehemu ya 4 inazungumzia mbinu zilizofuatwa katika kufundisha vektor za maneno ya lugha mbalimbali kwa kutumia VecMap. Tathmini ya vekta za maneno inajadiliwa katika Sehemu 5. Sehemu ya 5.1 inaeleza matokeo huku Sehemu ya 6 ikijadili matokeo na hatimaye, hitimisho na kazi za baadaye zinaweza kupatikana katika Sehemu ya 7.

## 2 Usuli na Kazi Zinazohusiana

Uwekaji wa maneno kati ya lugha (CLWEs) unazidi kuwa maarufu katika NLP kwa sababu mbili: Uwekaji wa maneno kati ya lugha unaweza kuhamisha maarifa kutoka lugha zenye rasilimali nyingi hadi zile zenye rasilimali chache; Mbinu hiyo pia inaweza kukisia semantiki ya maneno katika mazingira ya lugha nyingi. Conneau et al. (2018) wanaonyesha kuwa nafasi za uwekaji wa maneno zinaweza kupangiliwa bila usimamizi wowote wa kati ya lugha. Ulinganishaji huo unategemea seti za data zisizolinganishwa za kila lugha pekee. Kwa kutumia mafunzo ya kishindani, waliweza kuanzisha ramani ya mstari kati ya nafasi ya chanzo na nafasi lengwa, ambayo wanaitumia kuunda kamusi sambamba ya sanisi. Kwanza, wanapendekeza kigezo rahisi kinachotumika kama kipimo cha uthibitishaji kisichosimamiwa. Pili, wanapendekeza kipimo cha ufanano cha cross-domain similarity local scaling (CSLS), ambacho kinapunguza tatizo la hubness na kuongeza Usahihi wa tafsiri ya neno. Tatizo la hubness linafafanuliwa na Dinu et al. (2015) kama:

"maeneo ya jirani ya vipengele ramani ni sana uchafuzi na hubs, vectors kwamba huwa karibu na uwiano wa juu wa vitu, kushinikiza yao sahihi lebo chini ya orodha ya jirani."

Katika kazi iliyofanywa na Adams et al. (2017), utafiti uliangalia matumizi ya CLWEs kwa Yongning Na, lugha ya Sino-Tibetan. Utafiti ulilenga kubainisha ikiwa ubora wa CLWEs unategemea kuwa na kiasi kikubwa cha data katika lugha nyingi na ikiwa kuanzisha vigezo vya miundo ya lugha ya mtandao wa neva (NMLM) kunaweza kuboresha uundaji wa lugha katika muktadha wenye rasilimali chache. Utafiti ulipunguza data ya monolingual iliyopatikana ya lugha lengwa hadi takriban sentensi 1000. Ubora wa uingizaji wa ndani ulitathminiwa kwa kuzingatia uhusiano na hukumu ya binadamu kwenye seti ya majaribio ya WordSim353 (Finkelstein et al. 2001). Waliendelea zaidi kufanya majaribio ya uundaji wa lugha kwa kuanzisha vigezo vya kumbukumbu fupi ya muda mrefu (LSTM) (Hochreiter & Schmidhuber 1997) kwa kufunza katika jozi tofauti za lugha. Utafiti ulionyesha kwamba CLWEs ni thabiti hata wakati data ya mafunzo ya lugha lengwa imepunguzwa na kwamba uanzishaji wa vigezo vya NMLM husababisha utendaji mzuri.

Artetxe & Schwenk (2019) walianzisha usanifu ambao unaweza kutumika kujifunza uwakilishi wa sentensi za lugha nyingi kwa zaidi ya lugha 90. Lugha hizo zilikuwa za familia 30 tofauti. Utafiti ulitumia enkodi ya BiLSTM moja yenye msamiati wa Byte Pair Encoding (BPE) ulioshirikiwa pamoja na dekodi ya msaada na kufundishwa kwenye maktaba za parallel. Wanajifunza kiainishaji kwa kutumia data ya Kiingereza iliyofafanuliwa pekee na kukihamishia kwa lugha yoyote bila marekebisho. Utafiti hasa umelenga katika uwakilishi wa vector wa sentensi ambazo ni za jumla kwa ajili ya lugha ya kuingia na kazi ya NLP.

Alabi et al. (2019) walifanya kazi juu ya uingizaji mkubwa dhidi ya uingizaji uliochaguliwa kwa lugha zenye rasilimali ndogo: kesi ya Yorùbá na Twi. Waandishi wanalinganisha aina mbili za upachikaji wa maneno zilizopatikana kutoka kwa korasi zilizochaguliwa na usindikaji unaotegemea lugha. Wanaendelea zaidi kukusanya data za ubora wa juu na zenye kelele kwa lugha hizo mbili. Wanapima uboreshaji ambao unategemea ubora wa data na si kiasi cha data pekee. Katika majaribio yao, wanatumia usanifu tofauti kujifunza uwakilishi wa neno kutoka kwa herufi na maumbo ya uso. Wanatathmini BERT ya lugha nyingi kwenye kazi ya mkondo wa chini, haswa utambuzi wa huluki zilizotajwa na seti ya data ya jozi za maneno ya WordSim-353.

Feng et al. (2018) wanachunguza mbinu ya uhamishaji wa maarifa kati ya lugha ili kuboresha uwakilishi wa semantiki wa lugha zenye rasilimali chache na kuboresha utambuzi wa huluki zilizotajwa kwa rasilimali chache. Katika utafiti wao, mitandao ya neva hutumika kufanya uhamisho wa maarifa kutoka kwa lugha yenye rasilimali nyingi kwa kutumia kamusi za bilugha ili kuboresha uwakilishi wa maneno ya lugha zenye rasilimali chache. Wanajifunza kiotomatiki makadirio ya semantiki kwa kutumia mkakati wa upanuzi wa leksika ambao umeundwa kushughulikia tatizo la nje ya leksika. Hatimaye, wanachukulia vipengele vya usambazaji wa aina ya huluki katika kiwango cha neno kama maarifa ya nje yasiyotegemea lugha na kuyajumuisha katika usanifu wao wa neva. Jaribio linafanywa kwenye lugha mbili zenye rasilimali chache (Kiholanzi na Kihispania) ili kuonyesha ufanisi wa uwakilishi huu wa ziada wa maana.

Banerjee et al. (2021) wanaonyesha kwamba kuanzisha safu ya upachikaji ya miundo ya Tafsiri ya Mashine ya Neva Isiyosimamiwa (UNMT) kwa upachikaji kati ya lugha kunaonyesha maboresho makubwa katika alama ya BLEU. Waandishi wanaonyesha kwamba kugandisha uzani wa safu ya upachikaji kunaleta faida bora ikilinganishwa na kusasisha uzani wa safu ya upachikaji wakati wa mafunzo. Walifanya majaribio kwa kutumia Denoising Autoencoder (DAE) na Masked Sequence to Sequence (MASS) kwa jozi tatu tofauti za lugha zisizohusiana (kwa Kiingereza-Kihindi, Kiingereza-Kibengali, na Kiingereza-Kigujarati). Uchambuzi unaonyesha umuhimu wa kutumia upachikaji kati ya lugha ikilinganishwa na mbinu nyingine.

Fasihi inaonyesha kuwa kuna kiasi kikubwa cha kazi iliyofanywa kuhusu uhamishaji kati ya lugha na uthibitisho wa kijarabati kuwa mbinu hiyo inaboresha utendaji wa modeli. Fasihi haitegemei tathmini ya ndani pekee bali suluhu hizo hutumika kwa baadhi ya kazi za mkondo wa chini. Katika sehemu inayofuata, tunafafanua kwa kina data iliyotumika kufanya majaribio.

## 3 Ukusanyaji wa Data

Data ya mafunzo ni muhimu sana kwa kutekeleza modeli zenye nguvu na sahihi, na data safi ya mafunzo inaweza kuleta tofauti kati ya modeli nzuri na bora. Data inahitaji kuwa muhimu sana kwa sababu ubora wa upatanishi unategemea ubora wa viambatanisho vya lugha moja, yaani data iliyotumika kuunda viambatanisho vya awali vya lugha moja kabla ya uchoraji.

Tunatumia data iliyokusanywa kutoka nyanja tofauti kwa ajili ya kufunza vekta za maneno:

JW300 bible (Agić & Vulić 2019): A biblical-domain data set containing parallel corpus for low-resourced languages.

Wikipedia

National Centre for Human Language Technology (NCHLT) text corpus (Eiselen & Puttkammer 2014): Seti ya data ina maandishi safi ya data kwa lugha ya Sepedi na Setswana. Seti ya data ilijengwa kwa kuvuna data iliyopo kama vile machapisho ya mtandaoni, habari za mtandaoni, utambazaji wa wavuti na umati wa kompyuta.

SABC News Data in Setswana and Sepedi (Marivite et al. 2020, Marivate & Sefana 2020b): Habari zilizowekwa zina vichwa vya habari vilivyokusanywa kutoka kwenye mitandao ya kijamii ya mtandaoni.

Data ya Kituo cha Kitaifa cha Teknolojia ya Lugha ya Kibinadamu (NCHLT) inatumika kufunza vekta za maneno za lugha moja. Kwa ajili ya uchakataji wa awali, tulibadilisha maneno yote kuwa herufi ndogo, tukiondoa mabano, tarakimu, alama za uakifishaji, na nafasi nyeupe.

Jedwali 1: Ukubwa wa korasi kwa Seti za Data za Setswana na Sepedi

p04-01.png

Katika sehemu hii tulishughulikia jinsi tulivyokusanya data iliyotumika kufunza upachikaji wetu wa lugha moja kwa lugha zote mbili na mbinu gani tuliyochukua kuchakata data kabla ya kufunza modeli. Katika sehemu inayofuata tunajadili mbinu iliyochukuliwa kufunza upachikaji wa lugha moja na jinsi VecMap ilivyotumika kufunza upachikaji wa kati ya lugha.

## 4 Kufunza upachikaji wa lugha moja na wa kati ya lugha (VecMap)

Katika sehemu hii, tunawasilisha mbinu (mifumo) inayotumika kufundisha uingizaji wa lugha moja na uingizaji wa lugha mbalimbali. Tunaelezea vigezo vilivyotumika kufunza viingilio vya word2Vec na fastText. Pia tunaangalia VecMap, muundo uliotumika kusawazisha viingilio vya lugha moja.

CLWEs zimethibitika kufanya vizuri sana kwa lugha zenye rasilimali chache. Wazo kuu ni kufanya uhamishaji kati ya lugha kutoka lugha chanzo hadi lengwa, ili tuwe na uwakilishi mmoja kwa jozi ya lugha ambapo maneno yanayofanana kimaana yako karibu zaidi. Ili kutumia VecMap embeddings mbili za lugha moja zinahitajika, tunafunza vekta za fastText na word2Vec. Tunatumia vigezo vifuatavyo kwa fastText na word2Vec katika Jedwali la 2. Ufafanuzi wa vigezo ni kama ifuatavyo: skip-Gram - njia ya mafunzo, dim - ukubwa wa vekta za maneno, minCount - idadi ya chini ya matukio ya maneno, ws - ukubwa wa dirisha la muktadha, na epoch - idadi ya epoch au mizunguko.

## 4.1 Word2Vec

Algoriti ya word2Vec (Mikolov et al. 2013) ni mtandao wa neva wa tabaka mbili ambao hufanya maneno kuwa vekta ili kuchakata maandishi. Algorithmu hii inachukua kama ingizo korasi ya maandishi na kurudisha vekta za sifa zinazowakilisha maneno katika korasi hiyo kama seti ya vekta. Word2Vec hufunza maneno dhidi ya maneno jirani kulingana na muktadha wa ukubwa wa dirisha. Hufunza maneno kwa kutumia mbinu mbili: skip-gram au mfuko wa maneno endelevu (CBOW), skip-gram hutumia neno kutabiri muktadha lengwa na CBOW hutumia muktadha kutabiri neno lengwa. Jaribio linatumia skip-gram kufunza upachikaji wa lugha moja. Tunatumia vekta za maneno ambazo zilifunzwa kwa kutumia Word2Vec. Hizi zinalingana na upachikaji wa lugha moja wa vipimo 300 uliofunzwa kwenye korasi za Sepedi na Setswana.

Jedwali 2: Vigezo vya FastText na Word2Vec

p05-01.png

## 4.2 FastText

FastText (Bojanowski et al. 2016) ni mbinu inayotegemea utabiri iliyosimamiwa inayotegemea familia ya algorithms ya word2Vec (Mikolov et al. 2013). Inatabiri lebo kupitia muktadha na inawakilisha kila neno kama n-gramu ya herufi, badala ya kujifunza vekta za maneno moja kwa moja. Mfano wa fastText una tabaka tatu: tabaka ya ingizo, tabaka iliyofichwa, na tabaka ya pato. Ingizo ni idadi ya maneno na sifa zao za n-gram, sifa hizi hutumika kuwakilisha hati moja. Tabaka lililofichwa ni wastani uliowekwa juu ya vekta nyingi za vipengele. Sehemu ya siri husuluhisha kazi ya uwezekano wa juu, kisha hujenga mti wa Huffman kulingana na uzito na vigezo vya mfano wa kila aina, na hutumia mti wa Huffman kama matokeo.

## 4.3 VecMap

VecMap (Artetxe et al. 2020) ni mfumo wa chanzo wazi wa kujifunza CLWEs iliyoandikwa katika Python.

Kuna mbinu mbili za kufanya upachikaji kati ya lugha kwa VecMap, inayosimamiwa (inapendekezwa ikiwa una kamusi kubwa ya mafunzo) na isiyosimamiwa (inapendekezwa ikiwa huna kamusi ya awali na hutaki kutegemea maneno yanayofanana). Katika kazi hii, tunaangalia uingizaji wa maneno kwa kutumia VecMap[1]. Njia hii ni isiyo na usimamizi kabisa. Hatua tulizofuata ili kujenga mfano wetu wa uingizaji wa maneno katika lugha mbalimbali zimechochewa na waandishi wa VecMap Artetxe et al. (2020). Dhana ni kwamba tuna korasi ya lugha moja kwa lugha za chanzo na lengwa. Uwakilishaji wa neno hujifunzwa kwa kujitegemea kwa kila lugha (upachikaji wa lugha moja kwa kila lugha), na kisha kupangwa kwenye nafasi ya vekta ya pamoja.

Katika sehemu hii, tuliwasilisha word2Vec, fastText na VecMap. Pia tulielezea vigezo vilivyotumika kufunza viingizo vya word2Vec na fastText. Katika sehemu inayofuata, tunawasilisha matokeo ya majaribio na kufanya baadhi ya uchambuzi.

## 5 Tathmini

Tunatathmini ubora wa uwakilishi wa vekta za maneno za Setswana na Sepedi kwenye vigezo viwili tofauti Simlex na WordSim. Seti za data (Simlex na WordSim) zina jozi za maneno ya Setswana na Sepedi ambayo yamepewa viwango vya ufanano na binadamu. Zinatoa alama ya ufanano kati ya jozi ya maneno inayolingana na uhusiano wake. Ufanano wa kosini hutumika kukusanya alama kutoka kwa modeli ili kuangalia jinsi alama hiyo ilivyo karibu na alama ya binadamu, tunatumia Spearman kupima uwiano. Kielezo cha Spearman hupima utegemezi wa vigezo viwili, uwiano wa vigezo viwili vya kitakwimu hutathminiwa kwa kutumia mlinganyo wa monotoni. Tunatafsiri kwa mikono seti ya data ya jozi za maneno ya WordSim na Simlex kutoka Kiingereza hadi Setswana na Sepedi. Tunatoa seti ya data ya WordSim na Simlex iliyotafsiriwa kwa Setswana na Sepedi kama sehemu ya mradi huu katika https://github.com/dsfsi/embedding-eval-data na kuhifadhiwa kwenye Zenodo katika https://zenodo.org/record/5673974.

Jedwali 3: FastText Monolingual Matokeo

p06-01.png

Jedwali la 4: Matokeo ya Word2Vec ya Lugha Moja

p06-02.png

## 5.1 Matokeo

Sehemu hii inawasilisha matokeo ya majaribio yaliyofanywa ili kuonyesha ufanisi wa mbinu iliyopendekezwa kwa majaribio kadhaa. Kwanza tunawasilisha kazi ya tathmini ya lugha moja kwa ajili ya word2Vec na fastText na kisha tunawasilisha kazi ya tathmini ya lugha mbili kwa ajili ya Setswana na Sepedi. Uchambuzi wa kazi ya tathmini ya msalaba-lugha unategemea mbinu mbili za fastText na word2Vec.

Katika Jedwali la 3 na Jedwali la 4, tunaonyesha uwiano wa Spearman kwa vekta za maneno zilizofunzwa kwenye fastText na word2vec. Alama za uhusiano zinahesabu mfanano kati ya vekta za maneno. Alama za Jedwali 5 na Jedwali 6 zimepatikana kutokana na kutumia vekta za lugha moja za Setswana na Sepedi na kutumia VecMap kurekebisha vekta hizo mbili katika nafasi moja ya vekta.

Matokeo kwenye Jedwali 3 na Jedwali 4 yanaonyesha matokeo ya kufunika na Spearman. Ufunikaji unarejelea jumla ya idadi ya maneno yaliyo katika msamiati (maneno ambayo yanapatikana katika modeli na seti ya data ya tathmini). Tunaweza kuona kwamba ufunikaji ni wa chini kwa word2Vec lakini juu kidogo kwa fastText (tulitarajia ufunikaji kwa fastText kuwa asilimia 100). Alama ya ufanano ya Simlex na WordSim kwa upachikaji wa lugha moja wa fastText katika Jedwali 3 ni ya juu, hii inatarajiwa kwa sababu asilimia ya ufunikaji pia ni ya juu sana ikilinganishwa na thamani ya ufunikaji katika Jedwali 4.

Jedwali la 5: Matokeo ya Word2Vec kati ya lugha

p06-03.png

Jedwali la 6: Matokeo ya FastText kati ya lugha

p06-04.png

## 6 Mjadala

Lengo kuu la utafiti huu ni kuonyesha kwamba inawezekana kufanya uhamisho wa lugha kutoka lugha ya chanzo hadi lugha inayolengwa. Kimsingi tulitaka kuangalia ikiwa upatanishi wa kati ya lugha unaweza kuboresha uwakilishaji wa neno kwa lugha lengwa. Matokeo kwenye Jedwali 4 yanaonyesha kwamba thamani ya uwiano wa Spearman kwa lugha lengwa wakati wa kutumia word2Vec ni ya chini, hii pia inatokana na asilimia ya ufunikaji, lakini upachikaji unaotegemea fastText unafanya vizuri zaidi kwenye Jedwali 3 na una asilimia ya juu ya ufunikaji, kama ilivyoelezwa hapo juu tulitarajia ufunikaji wa asilimia 100. Jedwali la 5 linaonyesha kwamba tuliboresha uwakilishi wa maneno baada ya upatanishi kati ya lugha kwa upachikaji unaotegemea word2Vec. Thamani ya Spearman imeongezeka kwa Simlex na Wordsim zote mbili. Tulitarajia kuboresha matokeo ya upachikaji wa fastText lakini katika hali hii word2Vec kwa kweli ilitoa matokeo bora zaidi.

## 7 Hitimisho

Katika makala hii, VecMap ilitumika kupatanisha Setswana-Sepedi kwenye nafasi ya vekta sawa. Kupitia kazi hii, tulitaka kutumia mbinu ya kati ya lugha (VecMap) kuwezesha uhamishaji wa maarifa kati ya lugha zenye rasilimali nyingi na zenye rasilimali chache. Matokeo yanaonyesha kwamba inawezekana kupatanisha upachikaji wa lugha moja mbili ili kupata upachikaji wa kati ya lugha. Tulichora ramani ya Setswana hadi Sepedi na kutumia Spearman's kuchunguza uhusiano. Kwa kuvutia tunapata matokeo tofauti kwenye upachikaji unaotegemea fastText na word2Vec ingawa tulitumia data sawa kufunza upachikaji huo.

Katika kazi za baadaye, itakuwa ya kuvutia kutumia upachikaji kati ya lugha kwenye kazi ya mkondo wa chini kama vile tafsiri au uchambuzi wa hisia hasa kwa lugha zenye rasilimali chache.

## 8 Shukrani

Tunapenda kuwashukuru ABSA kwa kudhamini kiti cha sekta na shughuli zake zinazohusiana na mradi huu.

## Marejeo

Abbott, J. & Martinus, L. (2019), Benchmarking neural machine translation for southern african languages, in 'Proceedings of the 2019 Workshop on Widening NLP', pp. 98-101.

Adams, O., Makarucha, A., Neubig, G., Bird, S. & Cohn, T. (2017), Cross-lingual word embeddings for low-resource language modeling, in 'Proceedings of the 15th Conference of the European Chapter of the Association for Computational Linguistics: Volume 1, Long Papers', pp. 937-947.

Agić, Ž. & Vulić, I. (2019), JW300: A wide-coverage parallel corpus for low-resource languages, in 'Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics', Association for Computational Linguistics, Florence, Italy, pp. 3204-3210. URL: https://aclanthology.org/P19-1310

Alabi, J. O., Amponsah-Kaakyire, K., Adelani, D. I. & España-Bonet, C. (2019), 'Massive vs. curated word embeddings for low-resourced languages. the case of yor\ub\'a and twi', arXiv preprint arXiv:1912.02481.

Artetxe, M., Labaka, G. & Agirre, E. (2018), A robust self-learning method for fully unsupervised cross-lingual mappings of word embeddings, in 'Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)', pp. 789-798.

Artetxe, M., Ruder, S. & Yogatama, D. (2020), On the cross-lingual transferability of monolingual representations, in 'Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics', pp. 4623-4637.

Artetxe, M. & Schwenk, H. (2019), 'Massively multilingual sentence embeddings for zero-shot cross-lingual transfer and beyond', Transactions of the Association for Computational Linguistics 7,597-610.

Bakarov, A. (2018), 'A survey of word embeddings evaluation methods', arXiv preprint arXiv:1801.09536.

Banerjee, T., au2, R. M. V. & Bhattacharyya, P. (2021), 'Cross-lingual embeddings are essential in unmt for distant languages: An english to indoaryan case study'.

Bojanowski, P., Grave, E., Joulin, A. & Mikolov, T. (2016), 'Enriching word vectors with subword information', arXiv preprint arXiv:1607.04606.

Cho, K., Van Merriënboer, B., Gulcehre, C., Bahdanau, D., Bougares, F., Schwenk, H. & Bengio, Y. (2014), 'Learning phrase representations using rnn encoder-decoder for statistical machine translation', arXiv preprint arXiv:1406.1078.

Conneau, A., Lample, G., Ranzato, M., Denoyer, L. & Jégou, H. (2018), 'Word translation without parallel data'.

Devlin, J., Chang, M.-W., Lee, K. & Toutanova, K. (2018), 'Bert: Pre-training of deep bidirectional transformers for language understanding', arXiv preprint arXiv:1810.04805.

Dinu, G., Lazaridou, A. & Baroni, M. (2015), 'Improving zero-shot learning by mitigating the hubness problem'.

Eiselen, R. & Puttkammer, M. J. (2014), Developing text resources for ten south african languages., in 'LREC', pp. 3698-3703.

Feng, X., Feng, X., Qin, B., Feng, Z. & Liu, T. (2018), Improving low resource named entity recognition using cross-lingual knowledge transfer, in 'Proceedings of the Twenty-Seventh International Joint Conference on Artificial Intelligence, IJCAI-18', International Joint Conferences on Artificial Intelligence Organization, pp. 4071-4077. URL: https://doi.org/10.24963/ijcai.2018/566

Finkelstein, L., Gabrilovich, E., Matias, Y., Rivlin, E., Solan, Z., Wolfman, G. & Ruppin, E. (2001), Placing search in context: The concept revisited, in 'Proceedings of the 10th international conference on World Wide Web', pp. 406-414.

Guo, J., Che, W., Wang, H. & Liu, T. (2014), Revisiting embedding features for simple semisupervised learning, in 'Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing (EMNLP)', pp. 110-120.

Hedderich, M. A., Adelani, D., Zhu, D., Alabi, J., Markus, U. & Klakow, D. (2020), Transfer learning and distant supervision for multilingual transformer models: A study on african languages, in 'Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)', pp. 2580-2591.

Hill, F., Reichart, R. & Korhonen, A. (2015), 'Simlex-999: Evaluating semantic models with (genuine) similarity estimation', Computational Linguistics 41(4), 665-695.

Hochreiter, S. & Schmidhuber, J. (1997), 'Long short-term memory', Neural Computation 9, 1735-1780.

Howard, J. & Ruder, S. (2018), Universal language model fine-tuning for text classification, in 'Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)', pp. 328-339.

Kwiatkowski, T., Palomaki, J., Redfield, O., Collins, M., Parikh, A., Alberti, C., Epstein, D., Polosukhin, I., Devlin, J., Lee, K. et al. (2019), 'Natural questions: a benchmark for question answering research', Transactions of the Association for Computational Linguistics 7,453-466.

Lample, G., Conneau, A., Ranzato, M., Denoyer, L. & Jégou, H. (2018), Word translation without parallel data, in 'International Conference on Learning Representations'.

Marivate, V. & Sefara, T. (2020a), Improving short text classification through global augmentation methods, in 'International Cross-Domain Conference for Machine Learning and Knowledge Extraction', Springer, pp. 385-399.

Marivate, V. & Sefara, T. (2020b), 'South african news data'. URL: https://doi.org/10.5281/zenodo.3668495

Marivate, V., Sefara, T., Chabalala, V., Makhaya, K., Mokgonyane, T., Mokoena, R. & Modupe, A. (2020), Investigating an approach for low resource language dataset creation, curation and classification: Setswana and sepedi, in 'Proceedings of the first workshop on Resources for African Indigenous Languages', pp. 15-20.

Martinus, L. & Abbott, J. Z. (2019), 'A focus on neural machine translation for african languages', arXiv preprint arXiv:1906.05685.

Mikolov, T., Sutskever, I., Chen, K., Corrado, G. S. & Dean, J. (2013), Distributed representations of words and phrases and their compositionality, in 'Advances in neural information processing systems', pp. 3111-3119.

Nekoto, W., Marivate, V., Matsila, T., Fasubaa, T., Fagbohungbe, T., Akinola, S. O., Muhammad, S., Kabenamualu, S. K., Osei, S., Sackey, F. et al. (2020), Participatory research for low-resourced machine translation: A case study in african languages, in 'Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing: Findings', pp. 2144-2160.

Pennington, J., Socher, R. & Manning, C. (2014), Glove: Global vectors for word representation, Vol. 14, pp. 1532-1543.

Ranathunga, S., Lee, E.-S. A., Skenduli, M. P., Shekhar, R., Alam, M. & Kaur, R. (2021), 'Neural machine translation for low-resource languages: A survey', arXiv preprint arXiv:2106.15115.

Ruder, S., Peters, M. E., Swayamdipta, S. & Wolf, T. (2019), Transfer learning in natural language processing, in 'Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Tutorials', pp. 15-18.

Sefara, T. J., Zwane, S. G., Gama, N., Sibisi, H., Senoamadi, P. N. & Marivate, V. (2021), Transformer-based machine translation for low-resourced languages embedded with language identification, in '2021 Conference on Information Communications Technology and Society (ICTAS)', IEEE, pp. 127-132.

Socher, R., Perelygin, A., Wu, J., Chuang, J., Manning, C. D., Ng, A. Y. & Potts, C. (2013), Recursive deep models for semantic compositionality over a sentiment treebank, in 'Proceedings of the 2013 conference on empirical methods in natural language processing', pp. 1631-1642.
