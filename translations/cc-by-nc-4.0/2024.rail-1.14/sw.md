> Machine translation (sw) of "Low Resource Question Answering: An Amharic Benchmarking Dataset" by Tilahun Abedissa Taffa, Yaregal Assabie, Ricardo Usbeck, https://aclanthology.org/2024.rail-1.14/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kujibu Maswali kwa Rasilimali Chache: Seti ya Data ya Kuweka Vigezo ya Kiamhara

Tilahun Abedissa Taffa, Yaregal Assabie, Ricardo Usbeck

**Taasisi**  
Tilahun Abedissa Taffa1,2,3, Yaregal Assabie2, and Ricardo Usbeck3  
1Semantic Systems, Universität Hamburg, Hamburg, Germany  
2Department of Computer Science, Addis Ababa University, Addis Ababa, Ethiopia  
3Leuphana Universität Lüneburg, Lüneburg, Germany  
, , 

## Muhtasari

Mifumo ya Kujibu Maswali (QA) hurejesha majibu mafupi au orodha za majibu kulingana na maandishi ya lugha asilia, ambayo hutumia hati ya muktadha iliyotolewa. Rasilimali nyingi hutumika katika kutunza seti za data za QA ili kuendeleza uundaji wa miundo thabiti ya QA. Kuna ongezeko kubwa la seti za data za QA kwa lugha kama vile Kiingereza; hii ni tofauti kwa lugha zenye rasilimali chache kama Kiamhara. Kwa hakika, hakuna seti ya data ya QA ya Kiamhara iliyochapishwa au inayopatikana kwa umma. Kwa hiyo, ili kukuza utafiti zaidi katika QA ya rasilimali chache, tunawasilisha Seti ya Data ya Kujibu Maswali ya Kiamhara ya kwanza inayopatikana kwa umma ya kuweka vigezo (Amh-QuAD). Tunakusanya kwa umati jozi 2,628 za swali na jibu kutoka zaidi ya makala 378 za Wikipedia ya Kiamhara. Kwa kutumia seti ya mafunzo, tunarekebisha vizuri muundo wa lugha unaotegemea XLM-R na kuanzisha muundo mpya wa msomaji. Kwa kutumia kisomaji chetu kipya kilichorekebishwa vizuri, endesha modeli ya msingi ili kuamsha shauku ya utafiti wa QA ya Kiamhara ya kikoa wazi. QA ya msingi yenye utendaji bora inafikia alama ya F ya 80.3 na 81.34 katika mipangilio ya kirudisha-kisomaji na ufahamu wa kusoma.

## Maneno Muhimu

Kujibu Maswali kwa Rasilimali Chache, Seti ya Data ya Kujibu Maswali ya Kiamhara, Ufahamu wa Kusoma wa Kiamhara, Amh-QuAD

## 1. Utangulizi

Kazi ya Kujibu Maswali (QA) ni kurejesha kwa usahihi jibu kwa swali la lugha asilia kutoka kwa chanzo fulani cha data msingi (Chen na Yih, 2020). Uundaji wa kawaida wa seti ya data ya QA ya mafunzo na majaribio unatumika kutathmini uwezo wa modeli wa usanisi wa maswali na Usahihi wa majibu. Umati wa kompyuta au uzalishaji otomatiki ni mbinu za kawaida katika kukusanya seti za data za QA (Dzendzik et al., 2021). Katika mbinu ya umati wa kompyuta, wafanyakazi wa umati huunda jozi za swali na jibu ndani ya muktadha uliopewa. Umati wa kompyuta unaruhusu uundaji wa jozi za swali na jibu zenye ubora wa juu, lakini ni ghali. Kinyume chake, mbinu za uzalishaji wa kiotomatiki hutumia miundo ya uzalishaji wa lugha, violezo, au tafsiri ya mashine katika kuunda jozi za swali na jibu. Hata hivyo, kupata muundo wa kuaminika unaoweza kuzalisha jozi za swali na jibu sahihi kama zile za binadamu kunaleta changamoto. Kwa hiyo, tafiti huanzisha ushiriki wa binadamu katika mchakato ili kupunguza uzalishaji wa jozi za swali na jibu zisizo na maana, zisizo sahihi kisarufi, na zisizo sahihi (Cambazoglu et al., 2020; Fabbri et al., 2020).

Tofauti kati ya seti za data za QA zilizopo iko katika 1) jibu linalotarajiwa la swali: la ukweli dhidi ya lisilo la ukweli, 2) kikoa cha chanzo cha data: funge dhidi ya wazi, na 3) kazi ndogo ya uundaji wa jibu: ya kutoa dhidi ya ya kuzalisha. Maswali ya ukweli kama "Nani mwanzilishi wa mji mkuu wa Ethiopia Addis Ababa?" (Jibu: "Mfalme Menelik II") yanahitaji huluki iliyotajwa kama nomino sahihi, tarehe, nambari, au kifungu kifupi kama jibu (Abedissa and Libsie, 2019).

p01-01.png

Kielelezo 1: Vitatu vya muktadha, swali na jibu vya Amh-QuAD.

Tofauti na hilo, maswali ya jinsi, kwa nini, maoni, ufafanuzi, na mapendekezo huangukia katika kategoria isiyo ya ukweli. Kwa mfano, swali kama "Kwa nini maji yanaonekana bila rangi na bila ladha?" hulazimisha kukusanya taarifa muhimu, kufikiri, na kuunganisha vipande vingi vya taarifa kutoka vyanzo tofauti (Yang et al., 2019). Hivyo, kulingana na aina za maswali, modeli ya QA na seti yake ya data ya ulinganishaji ni ya ukweli au isiyo ya ukweli (Dzendzik et al., 2021). Zaidi ya hayo, chanzo cha data kinachotumika kujibu swali kina taarifa za jumla kuhusu mambo mengi au taarifa mahususi kwa kikoa fulani, kama vile michezo, jiografia, au tiba. Hivyo, kulingana na kikoa cha chanzo cha data na swali, mifumo ya QA inayotegemea kikoa huitwa funge na ile isiyotegemea kikoa huitwa QA wazi (Chen na Yih, 2020). Zaidi ya hayo, seti za data za QA na modeli hutofautiana katika jinsi jibu linavyopatikana - kwa kutoa au kwa kuzalisha. Seti za data za QA za kutoa kama SQuAD (Rajpurkar et al., 2016) hupima uwezo wa modeli ya QA katika kutabiri tokeni za mwanzo na mwisho za kipindi cha jibu kutoka kwenye muktadha. Tofauti na hilo, seti za data za QA generative zina maswali ambayo jibu lake ni ufahamu wa muktadha, si nakala ya moja kwa moja (Raffel et al., 2020).

Usanifu wa mifumo ya QA kwa kawaida hujumuisha moduli za uchanganuzi wa maswali ili kuelewa maswali, mifumo ya urejeshaji wa taarifa (IR) ili kupata nyaraka au data husika na mbinu za utoaji wa majibu ili kutoa majibu sahihi kutoka kwa taarifa zilizorejeshwa (Abedissa na Libsie, 2019). Ambapo swali la lugha asilia huingia kwenye moduli ya uchanganuzi wa maswali, na jibu hutoka kwenye moduli ya uchakataji wa majibu (Chen na Yih, 2020). Kipengele cha uchanganuzi wa maswali huchanganua swali la pembejeo kwa njia kadhaa. Moja ni uchanganuzi wa kimofosintaksia, unaoweka lebo ya aina za maneno kwa kila neno katika swali, ikionyesha kama neno ni kitenzi, nomino, au kivumishi. Kisha, ainisha maswali ili kutambua aina ya semantiki ya swali (Utomo et al., 2017). Njia rahisi zaidi ya uainishaji wa maswali ni kutumia seti ya kanuni zinazopanga mifumo ya maswali kuwa aina za maswali kwa kuchanganua istilahi za kuuliza za swali (wh-terms). Hata hivyo, kuunda kanuni hizo huchukua muda, na kuzoea kikoa kipya ni changamoto. Njia mbadala ya uainishaji wa maswali ni matumizi ya mbinu za ujifunzaji wa mashine. Njia hii inachukulia utambuzi wa aina ya swali kwa kutumia vifurushi vya uainishaji wa takwimu kama vile mashine ya vekta saidizi (Abedissa na Libsie, 2019). Hatimaye, kipengele cha uchanganuzi wa swali huzalisha hoja kutoka kwa swali lililopewa kwa kuchagua maneno muhimu na kuondoa istilahi za kuuliza. Kwa kuongezea, panua seti ya maneno muhimu kwa kutumia visawe (Utomo et al., 2017).

Kipengele cha urejeshaji wa hati ni mfumo wa kawaida wa urejeshaji wa hati ambao hutambua kikundi kidogo cha hati zenye istilahi za hoja fulani kutoka kwa mkusanyiko mzima wa hati unaoonekana kuwa na uwezekano mkubwa wa kuwa na jibu la swali (Utomo et al., 2017). Wakati wa kujaribu kutambua taarifa muhimu kwa usahihi zaidi, inagawanya hati katika vifungu kadhaa na kuchukulia vifungu hivyo kama hati. Kutumia njia ya urejeshaji wa kifungu badala ya njia ya urejeshaji wa hati nzima kuna faida ya kurudisha vifungu vifupi vya maandishi badala ya hati nzima, ambavyo ni rahisi kuchakatwa na vipengele vya baadaye vya mfumo wa kujibu maswali (Chen et al., 2017).

Kipengele cha uchakataji wa jibu huchukua hati zilizorejeshwa zenye uwezekano wa kuwa na jibu la swali na kubainisha ni aina gani za vishazi zinapaswa kuhesabiwa kama majibu sahihi. Kisha, hutoa majibu kadhaa yanayowezekana, huyapanga kwa uwezekano wa usahihi wake, na kurejesha jibu kutoka kwa vishazi vilivyoorodheshwa juu. Uchimbaji na uteuzi wa majibu huchukuliwa kama tatizo la uainishaji au upangaji na hutatuliwa kwa kutumia mbinu za kiheuristic na ujifunzaji wa mashine. Kwa kuwa mitandao ya kina ya neva hujifunza kuchagua vipengele kwa mafunzo ya mwisho-hadi-mwisho, miundo mingi ya hivi karibuni ya QA hutumia usanifu wa neva kusimba miktadha na maswali katika nafasi ya vekta na kufikiri juu yake (Mozannar et al., 2019).

Katika enzi ya Ujifunzajikina, hasa miundo ya lugha iliyofunzwa awali kama BERT (Kenton na Toutanova, 2019) huwezesha uundaji imara wa miundo ya QA (Laskar et al., 2020). Aidha, kuanzishwa kwa miundo ya lugha ya lugha nyingi kama Cross Language Multilingual-Roberta (XLM-R) (Conneau et al., 2020) na mBERT (Wu na Dredze, 2020) kunachangia maendeleo ya QA ya lugha mtambuka na lugha nyingi. Mifumo iliyopo ya QA inayotegemea Ujifunzajikina huangukia katika mbinu za kirejeshi-kisomaji, kirejeshi kizito na mafunzo ya mwisho-hadi-mwisho, na zisizo na kirejeshi (Chen na Yih, 2020).

Miundo ya QA inayotegemea kirejeshi-kisomaji kwanza hurejesha vifungu vinavyofaa, kisha husoma vifungu vilivyoorodheshwa juu na kutabiri nafasi za mwanzo na mwisho za maandishi ya jibu kutoka kwa muktadha. DrQA (Chen et al., 2017) ni mfano wa kawaida wa mbinu hii. Katika modeli ya DrQA, kirejeshi kinatumia mbinu za jadi za nafasi ya vekta yenye uchache, kikiwakilisha kila swali na hati kama vekta za mfuko wa maneno zilizopimwa kwa TF-IDF (marudio ya neno - marudio kinyume ya hati). Kisha, kirejeshi kinapitisha hati tano zilizoorodheshwa juu kwa kipengele cha msomaji. Msomaji anatumia kumbukumbu ya muda mrefu ya muda mfupi ya pande mbili ya tabaka 3 (LSTM) (), ambayo inasimba swali na aya zilizoorodheshwa juu kama mfuatano wa vekta za vipengele. Kisha, inatabiri uwezekano wa nafasi za mwanzo na mwisho za kipindi cha jibu (Cui et al., 2019).

Modeli za QA katika mkabala wa kirejeshi-jenereta zinafuata mabadiliko makubwa ya dhana kuelekea IR yenye msingi wa neva. Ili kujibu swali, zalisha jibu kwa kutumia muktadha uliorejeshwa badala ya kutabiri nafasi za mwanzo/mwisho (Lewis et al., 2020b).

Tofauti na mikabala ya kirejeshi-msomaji na kirejeshi-jenereta, mkabala wa kizalishaji unazalisha maandishi huru kama jibu la kujibu maswali kwa kutumia maarifa katika vigezo vyake (Roberts et al., 2020). Ili kupima uwezo wa kukariri maarifa ya kweli ya modeli za lugha zilizofunzwa awali, Roberts (Roberts et al., 2020) alirekebisha modeli ya lugha ya T5 (Text-to-Text Transfer Transformer) (Raffel et al., 2020) ili kujibu maswali bila kuipatia taarifa yoyote ya ziada au muktadha.

Kuhusu Kiamhari, kuna mifano michache sana ya QA (Abedissa na Libsie, 2019; Elema, 2022; Yimam na Libsie, 2009); hata hivyo, hakuna inayotoa seti ya data ya umma. Kwa hiyo, makala hii inatanguliza seti ya data ya kwanza ya ukweli, ya uchimbaji, ya kikoa huria ya Kujibu Maswali ya Kiamhari (Amh-QuAD), seti ya data inaweza kupatikana mtandaoni kwenye https://github.com/semantic-systems/amharic-qa.

Kama inavyoonyeshwa kwenye Kielelezo Kielelezo 1, seti ya data ya Amh-QuAD inajumuisha muktadha, swali, na jibu katika vikundi vitatu. Miktadha hiyo inajumuisha makala zilizokusanywa kutoka Wikipedia ya Kiamhari, huku tukikusanya kwa umati jozi 2628 za swali na jibu kutoka miktadha 378. Kwa mfano, kwa swali lililotolewa kwenye Kielelezo Kielelezo 1, "ከላሊበላ አስራ አንድ ውቅር አብያተ ክርስቲያናት የመስቀል ቅርጽ ያለው የትኛው ነው?" (Kati ya makanisa 11 ya mwambani ya Lalibela, ni lipi lenye umbo la msalaba?), jibu "ቤተ ጊዮርጊስ" (betə giorgis 'Nyumba ya Mt. George') ni kipande kutoka kwenye muktadha. Katika kazi yetu, pamoja na jozi za swali na jibu zilizokusanywa kwa umati, tumeweka thamani za msingi za alama ya F1 kwa kutekeleza mfano wa QA wenye vipengele vya kurejesha na kusoma. Tuliboresha mfano wa XLMR kwa kipengele cha kusoma kwa kutumia seti ya mafunzo ya Amh-QuAD na kufikia thamani ya alama ya F ya 81.34.

## 2. Sentensi za Maswali ya Kiamhari

Kiamhara, lugha asilia ya Kiafrika kutoka Ethiopia, ina mfumo wake wa kipekee wa uandishi unaotumia hati ya Kige'ez inayojulikana kama ፊደል (Fidel). Kama inavyoonyeshwa katika Kielelezo Kielelezo 2, sentensi ya Kiamhara ya kuuliza huundwa kwa kutumia viwakilishi vya kutafuta taarifa kama vile "ምን" (nini), "መቼ" (lini), "ማን" (nani), "የት" (wapi), "የትኛው" (kipi) n.k. au vishazi vya kuuliza vya kihusishi kama vile "ለምን" [ለ-ምን] (kwa nini), "በምን" [በ-ምን] (kwa nini), n.k. Pia, vishazi vya vitenzi kama vile ግለጽ (eleza), ዘርዝር|ሪ (orodhesha), አንፃፅር|ሪ|ሩ (linganisha), n.k. hutumika kuuliza maswali (Yimam, 2009; Amare, 2013).

## 3. Kazi Zinazohusiana

Miongoni mwa seti za data za QA za Kiingereza zilizopo, SQuAD (Rajpurkar et al., 2016) ilifungua njia kwa kuunda jozi za swali na jibu kutoka kwa makala za Wikipedia kwa kutumia wafanyakazi wa umati, ambapo kila jibu la swali ni sehemu ya maandishi katika makala hizo. MRC ya Kichina (Cui et al., 2019), QA ya Kivietinamu (Do et al., 2021), na seti nyingine za data zilizoorodheshwa katika (Dzendzik et al., 2021; Rogers et al., 2023) pia hufuata hatua ileile ya ukusanyaji kama SQuAD. Kufuatia umati wa kompyuta, TigQuAD (Gaim et al., 2023) inaleta seti ya data ya QA kwa lugha ya Kisemiti yenye rasilimali chache ya Kitigrinya kutoka kwa magazeti. Kiamhara na Kitigrinya zote ni lugha za Kisemiti. Hata hivyo, tofauti za kilugha katika hati za uandishi za lugha hizo mbili (Feleke, 2017) huzuia TigQuAD kutumika kwa ajili ya kupima na kufunza mifano ya QA ya Kiamhara.

p03-01.png

Kielelezo 2: Maneno ya Kuuliza ya Kiamhariki.

Kwa upande mwingine, kwa kutafsiri SQuAD kiotomatiki katika lugha zao husika, matoleo ya Kijerumani (Möller et al., 2021) na Kifaransa (d'Hoffschmidt et al., 2020) yameundwa. Seti ya data ya QA ya Kiarabu (Mozannar et al., 2019) imeundwa kwa sehemu kwa kutafsiri kutoka SQuAD na kwa sehemu kwa umati wa kompyuta. Kutafsiri seti za data za QA zilizopo katika lugha nyingine ni suluhisho moja la kuunda seti kubwa ya data. Hata hivyo, tunachagua mbinu ya umati wa kompyuta kwa sababu ya kukosekana kwa zana ya tafsiri ya mashine ya Kiingereza kwenda Kiamhariki iliyojaribiwa vizuri na iliyo Programu huria.

Katika Kiamhariki, kuna mifano michache sana ya QA; TETEYEQ (Yimam and Libsie, 2009) hujibu maswali ya aina ya ukweli kwa kutoa majina ya huluki kwa kutumia mbinu ya utoaji wa majibu inayotegemea sheria. Abedissa na Libsie (2019) wanatanguliza mfano wa QA usio wa ukweli unaojibu maswali ya wasifu, maelezo, na ufafanuzi. Utoaji wa majibu ya ufafanuzi-maelezo hutumia heuristics; wakati huo huo, hujibu maswali ya wasifu kwa kutumia kifupisho na kuthibitisha muhtasari kwa kiainishaji. Kazi katika (Elema, 2022) inaainisha maswali kwa kutumia modeli ya mtandao wa neva, inachagua majibu yanayowezekana kwa modeli mseto ya Bi-LSTM na CNN, na inatoa majibu kama huluki zilizotajwa kwa kutumia kitambua huluki zilizotajwa. Tofauti na mifumo iliyopo ya QA ya Kiamhari, utafiti huu unapendekeza QA ya Kiamhari (AmhQA) inayotegemea kirejeshi-kisomaji ambayo inatumia modeli ya lugha ya lugha nyingi (Conneau et al., 2020). Zaidi ya kujaribu kujibu maswali ya Kiamhari, kazi bado haijatoa seti ya data iliyochapishwa inayofaa kwa mafunzo na upimaji wa utendaji wa modeli za QA za Kiamhari. Kwa hiyo, tunawasilisha Amh-QuAD kama kigezo cha mafunzo na upimaji kwa modeli za QA za Kiamhari.

p04-01.png

Kielelezo 3: Muundo wa Amh-QuAD.

## 4. Amh-QuAD

Seti ya data ya Amh-QuAD imeundwa kwa awamu tatu: ukusanyaji wa makala, umati wa kompyuta wa jozi za swali na jibu, na ufafanuzi.

## 4.1. Ukusanyaji na Usafishaji

Tunakusanya makala za Kiamhara zinazotumiwa kama muktadha kutoka kwenye dampu ya Wikipedia ya Kiamhara. Tunaweka tu makala zile zenye ukubwa zaidi ya KB 2 na ambazo kategoria yake si "methali" na "maandalizi ya chakula". Makala za methali zina faida kwa ajili ya kuzalisha maswali ya kimantiki. Zaidi ya hayo, makala za 'maandalizi ya chakula' hujumuisha hasa hatua za kuandaa chakula, na kuzifanya zinafaa kwa kuzalisha maswali kama vile 'Je, hatua ya kupika... ikoje' na 'Orodhesha hatua au viungo vinavyoongezwa wakati wa kupika...'. Pia, katika hali zote mbili, jibu halijafungwa kwenye kipindi cha maandishi kinachoendelea ndani ya makala bali linatawanyika miongoni mwa sentensi zisizofuatana. Tunachakata tena makala zilizobaki baada ya uchujaji kwa kutumia zana ya wiki-dump-reader ili kupata maandishi safi. Baadaye, kwa kuwa makala ndefu hazichochei kikamilifu uundaji wa maswali, kila makala inagawanywa kulingana na mada zake ndogo. Hatimaye, tulichagua kwa nasibu makala 378 zilizosafishwa.

## 4.2. Umati wa Kompyuta wa Jozi za Swali na Jibu

Tunatoa mafunzo ya kuunda maswali yanayoweza kujibiwa na muktadha uliotolewa, kwa kufuata mwongozo wa Haystack. Kwa kuwa tunachagua makala bila mpangilio kutoka Wikipedia, tunawafahamisha wafafanuzi kuashiria makala yoyote yenye maudhui ya kukera. Zaidi ya hayo, tunawahimiza wafafanuzi kuzalisha maswali mengi iwezekanavyo kutoka kwa muktadha uliotolewa.

## 4.3. Uthibitishaji na Ufafanuzi wa Jozi za Swali na Jibu

Uthibitishaji wa jozi za swali na jibu zilizoundwa unahusu usahihi wake. Tunasema swali ni sahihi ikiwa swali lililoulizwa linaweza kujibiwa na muktadha uliotolewa, ni sahihi kisarufi, na linafafanua wazi mada au kitu kinachozingatiwa. Kwa mfano, swali kama 'Nchi yetu (the) ina mbuga ngapi?' lina utata kutokana na kivumishi cha kumiliki 'yetu' au kifungu cha uhakika 'the'; ni vigumu kujua inarejelea nchi gani. Tunafafanua maswali kama hayo kulingana na muktadha, pamoja na kuandika upya maswali ambayo hayataji wazi mada au kitu. Zaidi ya hayo, tunatenga maswali ambayo ni marefu sana na yana majibu ya mfuatano wa herufi usiofuatana kutoka kwenye ufafanuzi. Kisha, fafanua jozi za swali na jibu kwa kutumia zana ya ufafanuzi ya Haystack. Kama inavyoonyeshwa kwenye Kielelezo 3 Zana ya ufafanuzi hutoa jozi za swali na jibu zilizofafanuliwa kama faili za JSON katika muundo wa SQuAD.

p04-02.png

Kielelezo 4: Usambazaji wa maneno ya kuuliza.

## 4.4. Uchambuzi wa Data

Kama inavyoonyeshwa katika Jedwali 1, Amh-QuAD ina makala 378 na jozi 2628 za swali na jibu. Kwa wastani, muktadha una maneno 172. Urefu wa wastani wa neno la maswali mengi ni 9.22, ilhali majibu ni mafupi, na urefu wake wa wastani wa neno ni 2.66. Zaidi ya hayo, tunagawanya seti ya data katika mafunzo, uthibitishaji, na majaribio kwa ukubwa wa 1728, 600, na 300, mtawalia. Mbali na hayo, ili kuona usambazaji wa istilahi za kuuliza kwenye seti ya majaribio, tunatambua istilahi ya kuuliza kwa mikono na kuchunguza tokeni mbili au tatu zilizo karibu. Kielelezo 4 kinaonyesha usambazaji wa istilahi za kuuliza, kikionyesha aina mbalimbali za istilahi za swali ndani ya Amh-QuAD.

p05-01.png

Jedwali 1: Ukubwa na urefu wa wastani wa neno wa makala, maswali, na majibu.

## 4.5. Aina ya Jibu Linalotarajiwa kwa Maswali

Tukichunguza maneno ya kuuliza ya swali na majibu, tunaainisha maswali 300 ya majaribio katika makundi ya mtu, mahali, wakati, shirika, nambari, maelezo, na mengine. Kisha, hesabu asilimia ya ufunikaji wa aina za majibu zinazotarajiwa katika seti ya majaribio. Kama inavyoonyeshwa katika Kielelezo Kielelezo 5, tuligundua kwamba maswali mengi yanahusu Mahali, Nambari, na Wakati, ambapo kila aina ina ufunikaji wa zaidi ya 18%. Maswali ya maelezo yanachukua 13% ya sehemu na maswali ambayo yanatafuta jina la mtu kama jibu ni 14%. 10% ya maswali kama "Ni lugha gani ya kazi ya Ethiopia?" ambayo aina zao za majibu zinazotarajiwa ni huluki ambazo haziwezi kujumuishwa katika kategoria zilizopo na zinaangukia katika kundi la 'NYINGINE'. Orodha (3%) na shirika (3%) ni ndogo zaidi miongoni mwa maswali.

p05-02.png

Kielelezo 5: Usambazaji wa Aina za Maswali kwa %.

## 5. Muundo wa QA wa Kiamhara

Ufafanuzi wa Tatizo: Kwa kuzingatia swali Q na seti ya muktadha C, lengo la modeli ya QA ya Kiamhara (AmhQA) ni kurejesha C<sub>i</sub> k bora zaidi kutoka C na kutabiri kipande cha maandishi kutoka kwa C<sub>i</sub> zilizorejeshwa kinachojibu Q.

1. Rejesha miktadha k ya juu inayohusika kwa kutumia kirejeshaji:

p05-03.png

2. Tabiri kipande cha maandishi kutoka kwa muktadha uliorejeshwa kupitia kisomaji:

p05-04.png

p05-05.png

Kielelezo 6: Modeli ya Amharic QA.

Kama inavyoonyeshwa katika Kielelezo 6, modeli ya AmhQA ina vipengele vitatu: kiashiria nje ya mtandao, kirejeshaji, na kisomaji.

## 5.1. Uorodheshaji wa faharasa

Uashiriaji nje ya mtandao huanza kwa kupata miktadha kutoka kwa seti ya data ya majaribio. Kisha, kichakataji awali chenye msingi wa NLTK hugawanya miktadha katika kiwango cha neno na kuigawanya katika sehemu ndogo kulingana na urefu wa juu wa maneno 200 bila mwingiliano wa maneno. Hatimaye, fanya kazi ya kuorodhesha muktadha uliogawanyika kwa kutumia Elasticsearch Indexer. Mchakato huu wa kuorodhesha huunda faharasa iliyogeuzwa, kuwezesha upatikanaji wa haraka na bora wa taarifa muhimu wakati wa maswali yanayofuata.

## 5.2. Kirejeshi

Sehemu ya kirejeshi ya AmhQA hutumia algoriti ya BM25 (Best Match 25) kurejesha miktadha inayofaa zaidi ya k juu. Algoriti ya BM25 ni TF-IDF (Marudio ya Neno - Marudio Kinyume ya Hati) iliyorekebishwa ambayo hupatia alama na kupanga miktadha kulingana na ufaafu wake kwa swali lililoulizwa (Robertson na Zaragoza, 2009). Kirejeshi hukokotoa alama ya ufaafu kwa kila hati kwa kuzingatia marudio ya neno ndani ya hati, urekebishaji wa urefu wa hati, na uenezaji wa neno. Uenezaji wa neno ni dhana kwamba ufaafu wa neno kwa hati hupungua kadri linavyoonekana mara nyingi zaidi ndani ya hati. Kazi ya uenezaji wa neno hurekebisha marudio ya neno wakati wa ukokotoaji wa alama ya ufaafu.

Kwa swali Q na muktadha C<sub>i</sub>, fomula ya alama ya BM25 ni:

p06-01.png

Ambapo:

n ni idadi ya maneno katika swali na qi ni neno la i-th katika swali.

idf(q<sub>i</sub>) ni kinyume cha marudio ya hati ya neno q<sub>i</sub>.

f(q<sub>i</sub>, Ci) ni marudio ya neno q<sub>i</sub> katika muktadha C<sub>i</sub>.

|C<sub>i</sub>| ni urefu wa muktadha C<sub>i</sub>.

avgcl ni wastani wa urefu wa miktadha katika mkusanyiko; k<sub>1</sub> na b ni vigezo vya kurekebisha.

Vigezo k<sub>1</sub> na b hudhibiti kipengele cha marudio ya neno katika utoaji alama. k<sub>1</sub> ni kigezo chanya cha urekebishaji kinachodhibiti athari ya ujazi wa marudio ya neno. Thamani ya juu ya k<sub>1</sub> huongeza athari ya marudio ya neno kwenye alama, na kufanya algoriti iwe nyeti zaidi kwa marudio ya maneno katika hati. Kinyume chake, thamani ndogo ya k<sub>1</sub> hupunguza athari ya marudio ya neno, na kusababisha athari ndogo kwenye upangaji alama. Kigezo b ni thamani kati ya 0 na 1 kinachodhibiti ushawishi wa urekebishaji wa urefu wa hati. Wakati b iko karibu na 0, urekebishaji wa urefu wa hati una athari dhaifu, na kusababisha upunguzaji mdogo wa kipengele cha marudio ya neno kwa hati ndefu. Kwa upande mwingine, wakati b iko karibu na 1, urekebishaji wa urefu wa hati una athari kubwa zaidi, na kusababisha kipengele cha marudio ya neno kupendelea hati ndefu.

Hati zilizorejeshwa hupangwa kwa kuzingatia thamani ya alama(Q, C<sub>i</sub>).

## 5.3. Msomaji

Kipengele cha msomaji cha AmhQA kinaundwa kwa Uboreshaji modeli wa mfano wa modeli ya lugha iliyofunzwa awali ya XLM-R kutoka Hugging Face kwa kutumia mfumo wa Programu huria wa Haystack kwenye seti yetu ya mafunzo. XLM-R (Cross-lingual Language Model - RoBERTa) (Conneau et al., 2020) ni modeli ya lugha yenye msingi wa transformer iliyofunzwa kwa lugha mbalimbali, ikiwemo Kiamhariki. Wakati wa Uboreshaji modeli, tunatumia mipangilio chaguomsingi ya mfumo wa Haystack. Modeli ya msomaji inajumlisha kwa mifano isiyoonekana licha ya kuboreshwa kwa seti ndogo ya data inayojumuisha sampuli 1728. Wakati wa urejeshaji wa jibu, kisomaji hugawanya swali Q na muktadha Ci katika vipande vya maneno, husimba swali na muktadha vilivyogawanywa, na kutoa usambazaji wa uwezekano wa fahirisi za mwanzo na mwisho wa kipindi cha jibu. Hatimaye, hutambua fahirisi za kipindi cha jibu kuwa maandishi yanayosomeka na binadamu kulingana na kipindi chenye uwezekano mkubwa zaidi.

p06-02.png

Kielelezo 7: Kiolesura cha Mfano wa AmhQA.

## 6. Jaribio

## 6.1. Mfano wa Msingi

Kwa kuwa seti ya data ya Amh-QuAD ina mkusanyiko wa miktadha na jozi za maswali na majibu, kazi yake ya asili ni ufahamu wa kusoma (RC) (Rajpurkar et al., 2016). Yaani, ikipewa swali Q na muktadha C, lengo la mfano ni kutambua neno au kikundi cha maneno mfululizo kutoka C kinachojibu Q. Hivyo, kulingana na dhana hii, tumeweka thamani ya msingi kwa Amh-QuAD kwa kutumia RC yenye msingi wa XLM-R na kwa kutumia mfano wetu wa kisomaji uliorekebishwa vizuri. Kielelezo 7 kinaonyesha mpangilio wa RC wa kiolesura cha mfano wa AmhQA.

Kwa upande mwingine, mfano wetu wa AmhQA wenye msingi wa kirejeshi-kisomaji (RR) kwanza hurejesha vifungu vinavyohusika na kisha husoma vifungu vilivyoorodheshwa juu ili kutabiri nafasi za mwanzo na mwisho za jibu. Sehemu ya kirejeshi inategemea BM25, na kisomaji kinatekelezwa kwa kutumia modeli yetu ya kisomaji iliyorekebishwa vizuri.

p07-01.png

Jedwali la 2: Utendaji wa AhmQA katika mipangilio ya RC na RR.

## 6.2. Tathmini na Majadiliano

Lengo la kutathmini modeli ya QA ni kupima Usahihi wa modeli na vipengele vyake. Kwa seti za data za QA ambapo jibu ni kipande cha maandishi, ulinganifu kamili (EM) na jibu la dhahabu hutumika sana (Rajpurkar et al., 2016). Vipimo vya EM vina dosari ya yote-au-hakuna. Ili kushinda hili, ushabaha, kumbuko tambuzi, na wastani wao wa harmoniki, thamani ya F-Score, pia hutumika (Chen et al., 2017). Kumbuko tambuzi (R) hutoa sehemu ya maneno ambayo mfumo umechagua kutoka jumla ya maneno yanayopatikana katika jibu halisi, na Ushabaha (P) hupima sehemu ya majibu ya mfumo ambayo yamechaguliwa kwa usahihi. Zaidi ya hayo, vipimo vya Wastani wa Kumbuko Tambuzi (MRR) na Wastani wa Ushabaha (MAP) hutathmini utendaji wa kirejeshi.

Kama inavyoonyeshwa katika Jedwali 2, kwenye mpangilio wa RC alama ya F1 ya XLM-RLarge ni 74.35, ilhali alama ya F1 ya XLM-R<sub>Base</sub> ni 64.69. Alama ya F1 ya XLM-R<sub>Large</sub> kwenye seti ya majaribio ya Amh-QuAD ilikuwa sawa na alama yake ya wastani ya F1 (70.7) kwenye seti ya data ya MLQA kwa lugha nyingine saba (Lewis et al., 2020a). Kisomaji chetu kilichorekebishwa vizuri pia kilisababisha maboresho makubwa, kikitoa alama ya EM ya 67.89 na alama ya F1 ya 81.34. Ingawa tofauti katika alama za F1 zilizopatikana na mipangilio ya RC (81.34) na RR (80.3) ni ndogo, sababu moja ni ugawaji wa miktadha bila mwingiliano wakati wa kuorodhesha katika usanidi wa RR. Ugawaji unaweza kugawanya mifuatano ya majibu katika sehemu zisizo na mwingiliano, na kufanya iwe vigumu kwa RR kutoa majibu sahihi. Tofauti na hilo, mfano wa RC hutumia upachikaji wa muktadha mzima kutoa majibu kutoka vifungu, na kuuwezesha kufikia matokeo bora. Zaidi ya hayo, RR inajumuisha vipengele vya urejeshaji na usomaji, ikileta utata katika kuunganisha na kuchakata miktadha iliyorejeshwa inayoathiri utendaji.

## 6.3. Uchunguzi wa Kutoa Sehemu

Kama inavyoonyeshwa katika Jedwali la 3, wakati mpangilio wa idadi ya muktadha wa kurejesha wa kirejeshaji ni wa juu-1, MRR na MAP ni za juu kwa 82.9, ikionyesha ufanisi wake katika kupanga na kurejesha taarifa muhimu kwa usahihi. Zaidi ya hayo, wakati wa kupanua urejeshaji hadi matokeo matatu ya juu, alama zinaongezeka hata zaidi. MRR na MAP hufikia 88.4 na 88.2, mtawalia, jambo linaloashiria kuwa kuzingatia chaguzi nyingi za utafutaji huboresha uwezo wa kirejeshi kukamata masafa mapana ya hati zinazohusika, na kusababisha mpangilio na ushabaha bora. Uboreshaji mkubwa wa utendaji kutoka mipangilio ya juu-1 hadi ya juu-3 unaangazia umuhimu wa kuzingatia chaguo nyingi za urejeshaji ili kuboresha ufanisi wa kirejeshaji katika miundo ya QA.

p07-02.png

Jedwali la 3: Uondoaji wa vipengele vya sehemu ya kirejeshaji cha AhmQA. **(Kwa Kisomaji Kilichorekebishwa Vizuri)

p07-03.png

Jedwali la 4: Uondoaji wa vipengele vya sehemu ya kisomaji cha AhmQA. **(Kwa Kisomaji Kilichorekebishwa Vizuri)

Jedwali la 4 linaonyesha utendaji wa sehemu ya kisomaji katika vipimo mbalimbali na mipangilio ya urejeshaji. Wakati wa kuzingatia tu muktadha uliorejeshwa wa juu-1, alama za Exact Match (EM) na F1 ni 48.0 na 60.7, mtawalia. Kupanua muktadha uliorejeshwa hadi matokeo matatu ya juu huongeza alama za EM na F1 katika juu-1 hadi 53.0 na 66.6, mtawalia. Zaidi ya hayo, wakati wa kutathmini kwa kuzingatia miktadha mitatu ya juu iliyorejeshwa, alama zote za EM na F1 zinapata maboresho makubwa, zikifikia 58.72 na 73.22, mtawalia. Inaangazia umuhimu wa kuzingatia miktadha mingi iliyorejeshwa kwa ajili ya kuboresha utendaji wa msomaji, kwani inaruhusu usanisi wa kina zaidi wa miktadha.

Kipengele cha msomaji kilichorekebishwa vizuri kimeonyesha uboreshaji mkubwa wa utendaji ikilinganishwa na tathmini ya awali. Hasa, alama ya exact match (EM) imeongezeka hadi 67.4, ikionyesha Usahihi wa juu katika kutoa majibu sahihi. Alama ya F1 pia imeboreshwa, ikifikia 80.3, ikionyesha ufanisi ulioimarishwa katika kuzalisha majibu sahihi. Vipimo vya tathmini vya juu-1 pia vinaonyesha maboresho, huku alama za exact match top-1 na F1 top-1 zikiongezeka hadi 50.7 na 60.9, mtawalia. Matokeo haya yanasisitiza utendakazi ulioboreshwa wa kisomaji kilichoboreshwa katika mipangilio tofauti ya tathmini. Kwa ujumla, matokeo yanaonyesha maboresho yaliyopatikana kupitia Uboreshaji modeli, yakionyesha kipengele cha kisomaji kinachotegemeka zaidi kwa QA ya Kiamhara.

## 7. Muhtasari

Seti ya data ya Amh-QuAD ni juhudi kuelekea ujumuishaji na ufikiaji katika uchakataji wa lugha asilia (NLP). Uundaji wa seti hii ya data utashughulikia kwa kiasi kutokuwepo kwa usawa katika rasilimali za lugha, hasa kwa lugha zisizowakilishwa vya kutosha ndani ya jumuiya ya NLP. Amh-QuAD ni seti ya kwanza ya data ya QA ya Kiamhara ya kikoa-wazi yenye ukweli ya kutoa inayopatikana hadharani iliyo na vitatu vya muktadha, swali, na jibu iliyokusanywa kutoka Wikipedia ya Kiamhara, ambayo hutumika katika mipangilio ya RC na ya kisomaji-kirejeshi cha QA. Zaidi ya hayo, tunatanguliza kisomaji kipya cha AmhQA kwa kufanya Uboreshaji modeli wa modeli ya lugha iliyofunzwa awali ya lugha nyingi. Pia, weka thamani za msingi katika ufahamu wa kusoma na mipangilio ya kisomaji-kirejeshi cha QA.

## Maelezo

1 https://am.wikipedia.org/

2 https://dumps.wikimedia.org/amwiki/20210801/ last accessed 18 August 2021

3 https://pypi.org/project/wiki-dump-reader/

4 https://drive.google.com/file/d/1Wv3OIC0Z7ibHIzOm9Xw_r0gjTFmpl-33/view

5 https://docs.haystack.deepset.ai/docs/annotation

6 https://www.elastic.co/blog/what-is-an-elasticsearch-index

7 https://huggingface.co/deepset/xlm-roberta-large-squad2

8 https://github.com/deepset-ai/haystack/

9 https://huggingface.co/deepset/xlm-roberta-large-squad2

## 8. Marejeo

Tilahun Abedissa and Mulugeta Libsie. 2019. Amharic Question Answering for Biography, Definition, and Description Questions. In Fisseha Mekuria, Ethiopia Nigussie, and Tesfa Tegegne, editors, Information and Communication Technology for Development for Africa, volume 1026, pages 301-310. Springer International Publishing, Cham. Series Title: Communications in Computer and Information Science.

Getahun Amare. 2013. Amharic Grammar in Simple Way. Addis Ababa, Addis Ababa University Press.

B Barla Cambazoglu, Mark Sanderson, Falk Scholer, and Bruce Croft. 2020. A Review of Public Datasets in Question Answering Research. ACM SIGIR Forum, 54(2):23.

Danqi Chen, Adam Fisch, Jason Weston, and Antoine Bordes. 2017. Reading Wikipedia to answer open-domain questions. In Proceedings of the 55th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 1870-1879, Vancouver, Canada. Association for Computational Linguistics.

Danqi Chen and Wen-tau Yih. 2020. Open-Domain Question Answering. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics: Tutorial Abstracts, pages 34-37, Online. Association for Computational Linguistics.

Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume Wenzek, Francisco Guzmán, Edouard Grave, Myle Ott, Luke Zettlemoyer, and Veselin Stoyanov. 2020. Unsupervised Cross-lingual Representation Learning at Scale. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 8440-8451, Online. Association for Computational Linguistics.

Yiming Cui, Ting Liu, Wanxiang Che, Li Xiao, Zhipeng Chen, Wentao Ma, Shijin Wang, and Guoping Hu. 2019. "a span-extraction dataset for Chinese machine reading comprehension". In Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP), pages 5883-5889, Hong Kong, China. Association for Computational Linguistics.

Martin d'Hoffschmidt, Wacim Belblidia, Quentin Heinrich, Tom Brendlé, and Maxime Vidal. 2020. FQuAD: French question answering dataset. In Findings of the Association for Computational Linguistics: EMNLP 2020, pages 1193-1208, Online. Association for Computational Linguistics.

Phong Nguyen-Thuan Do, Nhat Duy Nguyen, Tin Van Huynh, Kiet Van Nguyen, Anh Gia-Tuan Nguyen, and Ngan Luu-Thuy Nguyen. 2021. Sentence Extraction-Based Machine Reading Comprehension for Vietnamese. In Knowledge Science, Engineering and Management: 14th International Conference, KSEM 2021, Tokyo, Japan, August 14-16, 2021, Proceedings, Part II, page 511-523, Berlin, Heidelberg. Springer-Verlag.

Daria Dzendzik, Jennifer Foster, and Carl Vogel. 2021. English Machine Reading Comprehension Datasets: A Survey. In Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing, pages 8784-8804, Online and Punta Cana, Dominican Republic. Association for Computational Linguistics.

Abenezer Mengistu Elema. 2022. Developing Amharic Question Answering Model Over Unstructured Data Source Using Deep Learning Approach. In 2022 International Conference on Information and Communication Technology for Development for Africa (ICT4DA), pages 108-113.

Alexander Fabbri, Patrick Ng, Zhiguo Wang, Ramesh Nallapati, and Bing Xiang. 2020. Template-Based Question Generation from Retrieved Sentences for Improved Unsupervised Question Answering. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 4508-4513, Online. Association for Computational Linguistics.

Tekabe Legesse Feleke. 2017. The similarity and mutual intelligibility between Amharic and Tigrigna varieties. In Proceedings of the Fourth Workshop on NLP for Similar Languages, Varieties and Dialects (VarDial), pages 47-54, Valencia, Spain. Association for Computational Linguistics.

Fitsum Gaim, Wonsuk Yang, Hancheol Park, and Jong Park. 2023. Question-answering in a low-resourced language: Benchmark dataset and models for Tigrinya. In Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 11857-11870, Toronto, Canada. Association for Computational Linguistics.

Jacob Devlin Ming-Wei Chang Kenton and Lee Kristina Toutanova. 2019. Bert: Pre-training of deep bidirectional transformers for language understanding. In Proceedings of naacL-HLT, volume 1, page 2.

Md Tahmid Rahman Laskar, Jimmy Xiangji Huang, and Enamul Hoque. 2020. Contextualized embeddings based transformer encoder for sentence similarity modeling in answer selection task. In Proceedings of the Twelfth Language Resources and Evaluation Conference, pages 5505-5514, Marseille, France. European Language Resources Association.

Patrick Lewis, Barlas Oguz, Ruty Rinott, Sebastian Riedel, and Holger Schwenk. 2020a. MLQA: Evaluating Cross-lingual Extractive Question Answering. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 7315-7330, Online. Association for Computational Linguistics.

Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau Yih, Tim Rocktäschel, Sebastian Riedel, and Douwe Kiela. 2020b. Retrieval-augmented generation for knowledge-intensive NLP tasks. In Proceedings of the 34th International Conference on Neural Information Processing Systems, NIPS'20, Red Hook, NY, USA. Curran Associates Inc.

Timo Möller, Julian Risch, and Malte Pietsch. 2021. GermanQuAD and GermanDPR: Improving nonEnglish question answering and passage retrieval. In Proceedings of the 3rd Workshop on Machine Reading for Question Answering, pages 42-50, Punta Cana, Dominican Republic. Association for Computational Linguistics.

Hussein Mozannar, Elie Maamary, Karl El Hajal, and Hazem Hajj. 2019. Neural Arabic question answering. In Proceedings of the Fourth Arabic Natural Language Processing Workshop, pages 108-118, Florence, Italy. Association for Computational Linguistics.

Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang, Michael Matena, Yanqi Zhou, Wei Li, and Peter J. Liu. 2020. Exploring the limits of transfer learning with a unified text-to-text transformer. J. Mach. Learn. Res., 21(1).

Pranav Rajpurkar, Jian Zhang, Konstantin Lopyrev, and Percy Liang. 2016. SQuAD: 100,000+ Questions for Machine Comprehension of Text. arXiv:1606.05250 [cs]. ArXiv: 1606.05250.

Adam Roberts, Colin Raffel, and Noam Shazeer. 2020. How Much Knowledge Can You Pack Into the Parameters of a Language Model? In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), pages 5418-5426, Online. Association for Computational Linguistics.

Stephen Robertson and Hugo Zaragoza. 2009. The probabilistic relevance framework: Bm25 and beyond. Found. Trends Inf. Retr., 3(4):333-389.

Anna Rogers, Matt Gardner, and Isabelle Augenstein. 2023. QA Dataset Explosion: A Taxonomy of NLP Resources for Question Answering and Reading Comprehension. ACM Comput. Surv., 55(10).

Fandy Setyo Utomo, Nanna Suryana, and Mohd Sanusi Aami. 2017. Question Answering System: A Review on Question Analysis, Document Processing, and Answer Extraction Techniques. Journal of Theoretical & Applied Information Technology, 95(14).

Shijie Wu and Mark Dredze. 2020. Are all languages created equal in multilingual BERT? In Proceedings of the 5th Workshop on Representation Learning for NLP, pages 120-130, Online. Association for Computational Linguistics.

Wei Yang, Yuqing Xie, Aileen Lin, Xingyu Li, Luchen Tan, Kun Xiong, Ming Li, and Jimmy Lin. 2019. End-to-end open-domain question answering with BERTserini. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics (Demonstrations), pages 72-77, Minneapolis, Minnesota. Association for Computational Linguistics.

Baye Yimam. 2009. Amharic Grammar. Addis Ababa, Addis Ababa University Press.

Seid Muhie Yimam and Mulugeta Libsie. 2009. TETEYEQ: Amharic question answering for factoid questions. IE-IR-LRL, 3(4):17.
