> Machine translation (sw) of "Complex Setswana Parts of Speech Tagging" by Gabofetswe Malema, Boago Okgetheng, Bopaki Tebalo, Moffat Motlhanka, Goaletsa Rammidi, https://aclanthology.org/2020.rail-1.4/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro, rescue-qwen3.5-397b); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Uainishaji wa Sehemu za Hotuba za Kisetswana Zilizochanganyikana

Gabofetswe Malema, Boago Okgetheng, Bopaki Tebalo, Moffat Motlhanka, Goaletsa Rammidi

**Taasisi**  
Malema, G. Tebalo, B. Okgetheng, B. Motlhanka, M. Rammidi G.  
University of Botswana  
P/Bag 704, Gaborone, Botswana  
, 

## Muhtasari

Lugha ya Setswana ni mojawapo ya Lugha za Kibantu zinazoandikwa kwa mtindo wa kutenganisha maneno. Baadhi ya sehemu zake za usemi kama vile visifa na baadhi ya vielezi hufanywa na maneno mengi. Yaani, sehemu ya usemi imefanyizwa kwa kikundi cha maneno. Mtindo wa uandishi wa kutenganisha maneno unaleta changamoto wakati sentensi inapogawanywa katika vipande au wakati wa kuweka tagi. Tafiti chache zimefanywa kuhusu utambuzi wa aina za maneno zenye maneno mengi. Katika utafiti huu tunaenda mbali zaidi kugawanya aina changamano za maneno ambazo huundwa kwa kupanua maumbo ya msingi ya aina za maneno zenye maneno mengi. Aina za maneno hupanuliwa kwa kuunganisha kwa kurudia aina zaidi za maneno kwenye umbo la msingi la aina za maneno. Tuliunda kanuni za kujenga aina changamano za maneno za uhusiano. Kichanganuzi cha kimofolojia na Python NLTK vinatumika kuweka tagi kwa maneno ya kibinafsi na maumbo ya msingi ya aina za maneno zenye maneno mengi mtawalia. Kanuni zilizotengenezwa baadaye hutumika kutambua sehemu ngumu za usemi. Matokeo kutoka kwa faili za maandishi za sentensi 300 yanatoa utendaji wa 74%. Kuweka tagi kunashindwa wakati kunapokumbana na kanuni za upanuzi ambazo hazijatekelezwa na wakati uwekaji tagi na kichanganuzi cha kimofolojia si sahihi.

## Maneno Muhimu

uwekaji tagi wa aina za maneno, Setswana, visifa

## 1. Utangulizi

Setswana ni lugha ya Kibantu inayozungumzwa na takriban watu milioni 4.4 katika Kusini mwa Afrika ikijumuisha Botswana, ambako ni lugha ya kitaifa na ya wengi, Namibia, Zimbabwe na Afrika Kusini. Wazungumzaji wengi, takriban milioni 3.6, wanaishi Afrika Kusini, ambako lugha hiyo inatambuliwa rasmi. Setswana inahusiana kwa karibu na lugha za Sotho ya Kusini na ya Kaskazini zinazozungumzwa Afrika Kusini. Kumekuwa na majaribio machache katika utengenezaji wa zana za kuchakata lugha ya Setswana kama vile kitambulishi cha aina za maneno, vikagua tahajia, vikagua sarufi na tafsiri ya mashine.

Setswana kama lugha nyinginezo inakabiliwa na matatizo ya utata kuhusu matumizi ya neno na hii ina athari kubwa katika uwekaji tagi wa aina za maneno (POS). Maandishi katika rasilimali inayopatikana ya corpus ya Setswana hayana maelezo na kwa hivyo usindikaji wa maana mdogo unaweza kutekelezwa kwenye data katika fomu yake ya sasa. Setswana kama lugha yenye rasilimali chache inazuia utafiti wa korasi unaohusu kiasi kikubwa kinachohitajika cha taarifa kuhusu neno na majirani zake, muhimu katika utengenezaji zaidi wa matumizi mengine kama vile urejeshaji wa taarifa, ulinganifu wa maneno na uchanganuzi wa marudio, tafsiri ya mashine na usanisi wa usemi, miongoni mwa matumizi mengine ya NLP. Kwa hivyo, kuna hitaji la kukuza zana za msingi za usindikaji wa Setswana ambazo ni sahihi na zinazoweza kutumika na mifumo mingine.

Uwekaji tagi wa aina za maneno hutambua aina za maneno kwa lugha fulani katika sentensi. Matokeo ya kitambulishi cha POS hutumiwa kwa matumizi mengine kama vile ujifunzaji wa mashine, ukaguzi wa sarufi na pia kwa uchanganuzi wa lugha. Utata wa uwekaji tagi wa POS hutofautiana kutoka lugha moja hadi nyingine. Kuna mbinu tofauti za kuweka alama sehemu ya hotuba, zinazojulikana zaidi ni mbinu za takwimu na zinazotegemea sheria (Brants 2000, Brill 1992,1995 na Charniak 1997). Njia za takwimu zinahitaji data ya majaribio kujifunza muundo na mpangilio wa maneno katika lugha. Zinafanya kazi vizuri pale data ya mafunzo ya kutosha inapatikana kwa urahisi. Hatukuweza kupata mkusanyiko wa maandishi uliowekwa tagi unaopatikana kwa urahisi wa kutumia. Kwa hiyo tukaunda mbinu inayotegemea kanuni. Mbinu zinazotegemea kanuni zinahitaji uundaji wa kanuni kulingana na muundo wa lugha.

Setswana kama baadhi ya Lugha za Kibantu huandikwa kwa njia ya kutenganisha. Yaani, maneno ambayo kwa pamoja yanatekeleza kazi fulani katika sentensi huandikwa kwa kutengana. Ili sentensi iweze kuchambuliwa vyema maneno kama hayo yanapaswa kuwekwa pamoja ili kutoa maana iliyokusudiwa. Kuna maneno kadhaa ya kiothografia katika Setswana kama vile viambishi ambavyo pekee havina maana lakini pamoja na maneno mengine hutoa maana iliyokusudiwa ya sentensi. Baadhi ya maneno haya pia hutekeleza majukumu mengi katika sentensi na hutumiwa mara kwa mara. 'Maneno' kama hayo yanajumuisha a, le, ba, se, lo, mo, ga, fa, ka. Bila kuweka maneno pamoja, baadhi ya maneno yanaweza kuainishwa katika kategoria nyingi. Tatizo hili limetazamwa kama tatizo la utokenishaji katika baadhi ya tafiti (Faaß et al 2009, Pretorius et al 2009 na Talajard na Bosch 2006).

Aina za maneno za Setswana zinajumuisha vitenzi, nomino, vifafanuzi, vielezi na viwakilishi. Vitenzi na nomino ni makundi huru na vinaweza kuchukua maumbo kadhaa. Tafiti katika uwekaji tagi wa aina za maneno zimejikita kwenye vitenzi vya unganishi na visaidizi na nomino kwa sababu ya hili (Faaß et al 2009 na Pretorius et al 2009). Vingi vya vitambulishi vya POS vimejikita kwenye kuweka alama kwa maneno binafsi. Hata hivyo, Setswana ina POS hasa visifa na baadhi ya vielezi ambavyo vinaundwa na maneno kadhaa na katika baadhi ya visa takriban dazeni ya maneno (Cole 1955, Mogapi 1998 na Malema et al 2017). Visifa vya Setswana vinajumuisha vimilikishi, vivumishi, virejeshi, vihesabishi na vikadiri. Vielezi ni vya wakati, namna na mahali.

Tafiti chache zimefanywa kuhusu ugawaji wa maneno na uwekaji tagi wa aina za maneno kwa Setswana na Kisotho cha Kaskazini ambacho kinahusiana kwa karibu na Setswana (Faaß et al 2009 na Malema et al 2017). Utafiti huu haukufunika utenganishaji wa alama za sehemu changamano za lugha. Vielezi, vimilikishi na virejeshi vina muundo wa kujirudia ambao unaviruhusu kupanuliwa na kusababisha miundo changamano iliyo na POS kadhaa. Katika kisa hiki, twamaanisha urefu na matumizi ya POS kadhaa ili kujenga sehemu moja ya usemi.

Karatasi hii inachunguza utambuzi wa vivumishi changamano na vielezi vya Setswana kwa kutumia kitambulishi cha aina za maneno. Tunatoa kanuni za msingi za jinsi ya kutambua POS ngumu kama vile vielezi, vimilikishi na virejeshi. Njia inayopendekezwa inaweka alama za maneno moja kisha inajenga alama tata zinazotegemea sheria zilizobuniwa za upanuzi. Kanuni hizo zimejaribiwa kwa virejeshi na matokeo ya awali yanaonyesha kuwa kanuni nyingi ni thabiti na hufanya kazi mara nyingi.

## 2. POS Changamano za Setswana

Kama ilivyoelezwa hapo juu, vielezi, vimilikishi na virejeshi vina muundo wa kujirudia unaoruhusu POS rahisi kupanuliwa kuwa POS changamano. Tumebaini kuwa katika miundo ya sentensi za Setswana, kitenzi kinaweza kufuatiwa na nomino (yambwa) au kielezi kama ilivyoelezwa pia katika muundo wa virai vya nomino na vitenzi vya Setswana (Letsholo na Matlhaku 2014). Pia tumegundua kuwa majina yanaweza kufuatwa na viambishi vya sifa. Hivyo basi sentensi rahisi inaweza kupanuliwa kwa kueleza kitu ambacho kitenzi kinafanya kazi na jinsi, wapi na lini kitendo cha kitenzi kinapofanywa. Kitu kinaweza kuelezewa kwa kutumia viambishi vya sifa na viashiria.

## Mifano:

mosimane o a kgweetsa (mvulana anaendesha) mosimane o kgweetsa koloi (mvulana anaendesha gari) mosimane o kgweetsa koloi ya rraagwe (mvulana anaendesha gari la baba yake) mosimane o kgweetsa koloi ya rraagwe kwa tirong ( mvulana anaendesha gari la baba yake kazini)

Kifungu cha kwanza hakina kitu chochote. Katika sentensi ya pili kitu (koloi/gari) kinatolewa kwa kitenzi kgweetsa(kuendesha). Katika sentensi ya tatu, kitu hicho cha koloi kinatofautishwa au kurekebishwa kwa kutumia "ya rraagwe' (baba yake). Katika sentensi ya nne kielezi cha mahali (kwa tirong/at work) kimeongezwa ili kubainisha wapi tendo (kgweetsa/drive) la kuendesha linafanyika.

Tumeona kwamba vimilikishi, virejeshi na vielezi vina muundo wa kujirudia na kwa hiyo vinaweza kupanuliwa kwa kutumia POS nyingine ili kuunda POS changamano.

## 2.1 Vya Umiliki

Vimilikishi sahili huundwa kwa upatanisho unaofuatwa na nomino, kiwakilishi au kionyeshi.

## Mifano:

kgomo ya kgosi (chief's cow) kgomo ya bone (their cow)

Katika mfano wa kwanza hapo juu "ya kgosi" ndicho kimilikishi, ambapo ya ni upatanisho wa kimilikishi unaolingana na ngeli (ngeli ya 9) ya kgomo(ng'ombe) na kgosi(chifu) ndio mzizi (nomino katika kisa hiki).

Hii ndiyo umbo rahisi zaidi la umiliki. Hata hivyo, mzizi unaweza kupanuliwa kuunda kimilikishi changamano. Mzizi unaweza kuwa POS nyingine changamano kama vile virejeshi, vimilikishi, vivumishi na vielezi. Mizizi hii mipana ingeweza pia kupanuliwa kwa kutumia sheria za upanuzi wa sentensi kama ilivyoelezwa juu. Yaani, ikiwa POS inaishia kwa kitenzi, kitenzi kinaweza kupewa yambwa na au kielezi mbele yake na ikiwa POS inaishia kwa nomino, nomino inaweza kurekebishwa kwa kisifa na au kionyeshi. POS iliyoongezwa inaweza pia kupanuliwa kwa njia ileile kwa kujirudia. Mifano:

koloi ya monna (gari la mtu) koloi ya ntate yo o thudileng ( gari la mtu aliyepata ajali) koloi ya ntate yo o thudileng tonki (gari la mtu aliyepiga punda) koloi ya ntate yo o thudileng tonki ya kgosi (gari la mtu aliyepiga punda wa chifu) koloi ya ntate yo o thudileng tonki ya kgosi kwa morakeng (the car that belongs to the man who hit the chief's donkey at the cattle post)

Katika sentensi ya kwanza ya monna, ni tu upatanisho wa kimiliki na mzizi rahisi (monna/nomino). Sentensi ya pili inapanua kimiliki kwa kutofautisha monna(mwanamume) na kirejeshi, yo o thudileng. Kwa kuwa kirejeshi hicho kinaishia na kitenzi tunaweza kukipa yambwa, tonki (punda) kama ilivyofanywa katika sentensi ya tatu. Sentensi ya nne inatofautisha punda(tonki) kwa kutumia kimiliki kingine, ya kgosi. Sentensi ya tano inaongeza kielezi cha mahali, kwa morakeng (katika post ya mifugo), kwa kitenzi thudileng (kugonga). Upanuzi zaidi wa kimilikishi unaweza kufanywa kwa kutoa yambwa na au vielezi kwa vitenzi vipya na kurekebisha nomino mpya kwa visifa au viashiria. Katika sentensi ya mwisho "ya ntate yo o thudileng tonki ya kgosi kwa morakeng" ni kimiliki kinachoelezea nomino koloi. Kimiliki hiki kinaundwa na kirejeshi (yo o thudileng), nomino (tonki), kimiliki (ya kgosi) na kielezi (kwa morakeng). Lengo kuu la utafiti huu ni kukuza njia za kutambua sehemu hizi ndefu/ngumu za lugha.

## 2.2 Virejeshi

Virejeshi huundwa kwa upatanisho na mzizi. Mfano:

koloi e e thudileng (the car that had an accident)

e e thudileng ni kirejeshi, ambapo e e ni upatanisho wa kirejeshi kwa nomino za ngeli ya 4 na 9 na thudileng ni mzizi. Kwa kutumia mbinu ileile ya upanuzi wa vitenzi na nomino tungeweza kupanua kirejeshi hiki kama ifuatavyo.

koloi e e thudileng tonki (gari lililogonga punda) koloi e e thudielng tonki ya kgosi (gari lililogonga punda wa chifu) koloi e e thudileng tonki ya kgosi kwa morakeng (gari lililogonga gari la chifu kwenye zizi la ng'ombe)

Katika mfano wa tatu "e e thudileng tonki ya kgosi kwa morakeng" ni kirejeshi kinachoundwa na kirejeshi msingi (e e thudileng), nomino (tonki), kimilikishi (ya kgosi) na kielezi (kwa morakeng). Muundo wa mifano iliyo hapo juu unaitwa virejeshi vya moja kwa moja. Aina nyingine ya virejeshi inajulikana kama isiyo ya moja kwa moja. Mifano:

koloi e ba e ratang (gari wanalolipenda) koloi e a tla e rekang (gari atakalolinunua) ngwana yo Modimo a mo segofaditseng ( mtoto ambaye Mungu alimbariki) koloi

Katika utafiti huu tulichunguza tu virejeshi vya moja kwa moja ambavyo vina muundo rahisi ikilinganishwa na virejeshi visivyo vya moja kwa moja. Miundo ya msingi ya visifa na vielezi vya Setswana inaweza kupatikana katika (Cole 1955 na Mogapi 1998).

## 2.3 Vielezi

Vielezi vinaweza pia kupanuliwa vinapotumia vitenzi na nomino. Mifano:

kwa morakeng (kwenye kituo cha ng'ombe) kwa morakeng wa monna (kwenye kituo cha ng'ombe cha mtu) kwa morakeng wa monna yo o berekang (kwenye kituo cha ng'ombe cha mtu anayefanya kazi) kwa morakeng wa monna yo o berekang kwa sepateleng (kwenye kituo cha ng'ombe cha mtu anayefanya kazi hospitalini) kwa morakeng wa monna yo o berekang kwa sepateleng sa Gaborone (kwenye kituo cha ng'ombe cha mtu anayefanya kazi katika hospitali ya Gaborone)

Mfano wa mwisho ni kielezi kinachoundwa na kielezi msingi (kwa morakeng), kimilikishi (wa monna), kirejeshi (yo o berekang), kielezi (kwa sepateleng), kimilikishi (sa Gaborone)

## 3. Utekelezaji

Picha 1 hapa chini inaonyesha mchoro wa bloku wa tagger uliopendekezwa. Maneno binafsi huwekwa alama kwa kutumia vichambuzi vya mofolojia na majina vilivyotengenezwa na Malema et al (2016 na 2018). POS ambatani rahisi kisha hutambulishwa kwa kutumia maktaba ya Python ya usemi wa kawaida (RE) kutoka Python NLTK. Usemi wa kawaida kwa POS za muunganiko rahisi hutumika hapa. Tulitengeneza semi za kawaida kwa vivumishi, vihesabifu na kwa miundo msingi ya vimilikishi, vihusishi na vielezi. Katika Malema (2017) mbinu ya hali ya mwisho ilitumika kuweka lebo za msingi za POS zenye maneno mengi. Katika utafiti huu tulitumia maktaba ya usemi wa kawaida ya Python NLTK kwa sababu ni ya haraka na rahisi zaidi kutumia. Baada ya kutambua POS za muunganiko kwenye sentensi, kanuni za upanuzi hutumika kwa kila POS ya muunganiko kwa upanuzi inayowezekana. Kanuni hizi kwa msingi zinajaribu kama neno/jo linalofuata linaweza kuwa sehemu ya POS ya sasa.

p03-01.png

Kielelezo 1: Mchoro wa bloku wa kiweka lebo cha POS

## 4. Matokeo ya Utendaji

Vipengele vilivyopendekezwa vya tagger ya mazungumzo yalilenga mahusiano magumu ya moja kwa moja yanayomalizika na kitenzi. Viendelezi vya sheria vilivyotengenezwa ni kuongeza nomino, kiwakilishi, kivumishi, kionyeshi au kielezi.

## Mifano:

ngwana yo o ratang (mtoto anayependa ...) ngwana yo o ratang go lela (mtoto anayependa kulia) ngwana yo o ratang dijo (mtoto anayependa chakula) ngwana yo o ratang dijo tse di sukiri (mtoto anayependa chakula kitamu) ngwana yo o ratang dijo tsele (mtoto anayependa chakula hicho)

Na kadhalika.

Kama mifano inavyoonyesha, tulilenga muundo msingi wa virejeshi vya moja kwa moja ambao ni Relative concord + Verb-ng. Muundo huu ungeweza kupanuliwa kwa njia mbalimbali

Upatanisho + Kitenzi-ng + N

Concord + kitenzi-ng + T

Concord + kitenzi-ng + P

Concord + kitenzi-ng + D

Concord + kitenzi-ng + Q

Concord + kitenzi-ng + L

Ambapo N ni nomino, T ni sifa, P ni kiwakilishi, D ni kionyeshi, Q ni kiasi na L ni kielezi. Kitatambulishi cha mfano kilipewa faili ya maandishi ya sentensi 300 kutoka Botswana Daily News (2019) na Mmegi (2019). Faili ya maandishi ina virejeshi 123, 37 kati ya hivyo vina umbo la msingi na vingine ni changamano zaidi. Kitatambulishi kilichopendekezwa kilitambua virejeshi vyote 123 vya msingi na kufanikiwa kupanua 64 vya virejeshi changamano na kusababisha kiwango cha mafanikio cha 74%. Sababu kuu mbili zinazosababisha kushindwa kwa kitatambulishi ni:

## Virejeshi Visivyoshughulikiwa:

Tulibaini kwamba kuna miundo mingine ambayo hatujaijumuisha katika muundo huu. Kwa mfano, tumebaini kwamba kuna aina ambazo kitenzi kinafuatiwa na 'ke' na 'le' ambazo hazipo katika kanuni zetu. Mifano:

yo o salang le ngwana ( the one who is baby sitting) yo o rutwang ke mmaagwe (the one taught by his/her mother)

## Kushindwa kwa uwekaji tagi wa msingi wa neno:

Katika baadhi ya matukio kichanganuzi kimofolojia kilishindwa kuweka tagi za vitenzi, nomino na vielezi (neno moja) ipasavyo jambo ambalo liliathiri kiwekaji tagi cha usemi wa kawaida na utumiaji wa kanuni ya upanuzi. Pia katika baadhi ya matukio majina hayakuwekwa katika madarasa yao sahihi. Upataji/upatanisho wa kisifa kinachorejelea nomino fulani lazima ulingane na ngeli ya nomino hiyo.

## 5. Hitimisho

Katika makala hii tuliwasilisha mbinu inayotegemea kanuni ya kutambua aina changamano za maneno za Setswana. Wazo ni kutekeleza muundo wa kujirudia wa aina changamano za maneno. Muundo wa kujirudia unaonyeshwa kwa namna ya kanuni ambazo zinategemea miundo sahili ya virai vya vitenzi na nomino. Kifaa cha awali cha kuweka tagi kilitengenezwa kwa msaada wa misemo ya kawaida ya Python NLTK. Matokeo ya awali yanaonyesha kuwa mbinu iliyopendekezwa inafanya kazi vizuri. Hata hivyo, ili iwe na ufanisi, sheria na miundo yote ya POS changamano lazima iandikishwe. Katika utafiti huu hatukuchunguza kikamilifu miundo yote ya uhusiano. Tunapanga kuendeleza wazo hilo zaidi kwa kutengeneza sheria zaidi na kujumuisha aina nyingine za maneno.

## 6. Marejeo

Botswana Daily News (online), www.dailynews.gov.bw

Brants T (2000). A statistical part of speech tagger. PANCL'00 Proceedings of the sixth conference on applied natural language processing Association for Computational Linguistics

Brill E (1992). A simple rule based part of speech tagger. In Proceedings of the third conference on Applied Natural Language processing, ACL, Trento, Italy

Brill E (1995). Transformation Based Error-Driven Learning and Natural language Processing: A case study in Part of Speech Tagging. Computational Linguistics

Charniak E (1997).Statistical techniques for Natural Language parsin. AI Magazine, 18(4), pp.33-44

Cole, D.T. (1955). An Introduction to Tswana grammar. Longmans and Green, Cape Town.

Faaß G, Heid U, Taljard E & Prinsloo D (2009). Part-of_Speech tagging of Northern Sotho: Disambiguating polysemous function words",Proceedings of the EACL, 2009 Workshop on Language Technologies for African Languages - Aflat 2009, pages 38-45, Athens Greece, 31 March 2009

Lombard, D.P (1985). Introduction to the Grammar of Northern Sotho. J.L. van Schaik, Pretoria, South Africa, 1985.

Louwrens, L. J.(1991). Aspects of the Northern Sotho Grammar. Via Afrika, Pretoria, South Africa.

Mmegi Publishing News paper (online: www.mmegi.co.bw

Malema, G, Okgetheng, B and Motlhanka, M. (2017) Setswana Part of Speech Tagging, International Journal of Natural Language Computing (IJNLC), Vol.6, No.6, pp. 15 - 20, December 2017

Malema, G. Motlogelwa, N. Okgetheng, B. Mogotlhwane O. (2016). Setswana Verb Analyzer and Generator. International Journal of Computational Linguistics (IJCL), Vol 7, issue 1, 2016.

Malema, G. Motlhanka, M. Okgetheng, O and Motlogelwa, N. (2018). Setswana Noun Analyzer and Generator. International Journal of Computational Linguistics (IJCL), Volume (9), Issue (2) pp 32-40, 2018

Mogapi, K.(1998). Thuto Puo ya Setswana, Longman Botswana, 184, ISBN:0582 61903 3.

Pretorius L, Viljoen B, Pretorius R and Berg A.(2009). A finite state approach to Setswana verb morphology, International Workshop on finite state methods and natural Language Processing FSMNLP 2009: Finite State Methods and Natural language Processing, pp. 131 - 138

Taljard, E. & Bosch, S. E. (2006). A comparison of approaches towards word class tagging: Disjunctively versus conjunctively written Bantu languages. Nordic Journal of African Studies, 15(4), 428-442.
