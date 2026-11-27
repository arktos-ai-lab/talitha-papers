> Machine translation (sw) of "Evaluating the Sesotho rule-based syllabification system on Sepedi and Setswana words" by Johannes Sibeko, Mmasibidi Setaka, https://aclanthology.org/2023.rail-1.9/, licensed Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Kupima mfumo wa kugawanya misemo wa Sesotho unaotegemea kanuni kwenye maneno ya Sepedi na Setswana

Johannes Sibeko, Mmasibidi Setaka

**Taasisi**  
Johannes Sibeko  
Nelson Mandela University  
Linguistics and Applied Linguistics  
Port Elizabeth, South Africa  
Mmasibidi Setaka  
South African Centre  
for Digital Language Resources  
Potchefstroom, South Africa  
  


## Muhtasari

Lengo la makala hii ni kuonyesha kuwa mfumo wa kisasa wa kiotomatiki wa kanuni za kusambaza silabi uliobuniwa hivi karibuni kwa Sesotho unaweza kutumika kwa upana katika kundi la lugha za Sotho-Tswana zilizotambuliwa rasmi nchini Afrika Kusini, lenye kujumuisha Sepedi, Sesotho na Setswana. Tunatathmini mfumo wa usilabishaji wa kiotomatiki kwa maneno 400 yanayojumuisha maneno 100 yanayotumiwa mara kwa mara na maneno 100 yanayotumiwa mara chache zaidi katika Sepedi na Setswana kama inavyoonekana katika korasi ya Autshumato inayopatikana hadharani mtandaoni. Imepatikana kuwa mfumo wa kutenganisha misemo kwa Sesotho unaweza kutumika kutambua kwa usahihi misemo yenye virefu pekee, misemo ya konsonanti-virefu na misemo yenye konsonanti pekee katika Sepedi na Setswana. Miongoni mwa matokeo mengine, imeonyeshwa kwamba maneno yenye alama za matamshi kama ilivyo kwa Sepedi yanagawanywa kwa usahihi katika silabi. Tunatoa mapendekezo mawili makuu. Kwanza, kanuni za usilabishaji zinapaswa kusasishwa ili alama za matamshi za Sepedi zizingatiwe. Pili, mfumo wa usilabishaji unapaswa kusasishwa ili uakisi kundi pana la lugha la Sotho-Tswana badala ya kuwa mdogo kwa Sesotho pekee. Utafiti zaidi unahitajika ili kubaini iwapo konsonanti tata [ɲ] ina tabia sawa katika lugha zote tatu zinazotambuliwa rasmi za Sotho-Tswana na kutathmini haja ya sheria maalum kwa konsonanti ya pua [ɲ].

## 1 Utangulizi

Makala hii inawasilisha tathmini ya mfumo wa ugawaji wa silabi wa Kisotho unaotegemea kanuni kwa matumizi katika maandishi ya Kipedi na Kitswana. Jamhuri ya Afrika Kusini inatambua lugha rasmi kumi na moja, yaani, Afrikaans, Kiingereza, isiNdebele, isiXhosa, isiZulu, SiSwati, Sepedi, Sesotho, Setswana, Tshivenda, na Xitsonga (Jamhuri ya Afrika Kusini, 1996). Kati ya lugha hizi kumi na moja, Kiafrikaans na Kiingereza mara nyingi hutambuliwa kama lugha za Kigermanik (Zulu et al., 2008). Hata hivyo, wengine wanasema kuwa Afrikaans ni lugha ya Afrika kwa sababu inazungumzwa Afrika ingawa ni toleo la Kiholanzi (Willemse, 2018; Staphorst, 2022). IsiNdebele, isiXhosa, isiZulu na isiSwati zimeainishwa chini ya kundi la lugha za Nguni. Sepedi [pia inajulikana kama Kisotho cha Kaskazini (Rakgogo na Zungu, 2021)], Sesotho [pia inajulikana kama Kisotho cha Kusini (Demuth, 2007)], na Setswana [wakati mwingine inajulikana kama Kisotho cha Magharibi (Mojela, 2016)] zimepangwa chini ya kundi la lugha za Sotho-Tswana. Lugha hizi za Sotho-Tswana zina tofauti nyingi ndani yazo zenyewe. Hata hivyo, zinaeleweka kwa pande zote kwa kuwa wazungumzaji wa lugha hizi wanaweza kuelewana bila ugumu (Makalela, 2009). Mabaraza ya lugha ya kitaifa, chini ya usimamizi wa Pan South African Language Board (PanSALB) yameamuru tahajia tatu tofauti kwa lugha hizi. PanSALB huendeleza sheria na viwango vya kuandika na kutamka kwa ajili ya utendaji kazi wa lugha zote rasmi.

Kulingana na sensa ya 2011, kulikuwa na angalau wasemaji 4 618 577 wa lugha ya kwanza ya Sepedi, wasemaji 3 849 562 wa lugha ya kwanza ya Sesotho na wasemaji 4 067 248 wa lugha ya kwanza ya Setswana nchini Afrika Kusini pekee (Lehohla, 2011). Sesotho pia ni lugha rasmi nchini Lesotho na Zimbabwe. Setswana pia ni mojawapo ya lugha rasmi za Botswana. Tafiti za South African Human Language Technologies zinaonyesha kwamba kuna uhaba wa utafiti katika mifumo ya ugawaji wa silabi kwa lugha za kiasili za Afrika Kusini (Grover et al., 2010, 2011; Barnard et al., 2014; Moors et al., 2018a,b). Kwa kiasi tunachojua, Sesotho kwa sasa ni lugha pekee ya asili ya Afrika Kusini yenye mfumo wa syllabification kulingana na kanuni unaopatikana kwa umma. Hata hivyo, kulingana na Sibeko na Setaka (2022), kuna mifumo miwili ya syllabification katika Sesotho. Mfumo wa uchoraji ruwaza unaotegemea TEX wa ujifunzaji wa mashine unategemea korasi za kiwango cha dhahabu zenye ufafanuzi wa silabi uliotolewa kama mifano. Mfumo wa silabi wa Sesotho TEX ulitumia orodha ya kiwango cha dhahabu ya maneno na silabi zao. Kwa kusikitisha, hatujui orodha kama hizo za Sepedi na Setswana. Kwa hiyo, hatuwezi kutathmini mfumo huu wa kujifunza kwa mashine katika makala hii.

Makala hii inalenga kuonyesha uwezo wa mfumo wa kanuni za Sesotho katika kutambua silabi katika kikundi kikubwa cha lugha za Sotho-Tswana za Afrika Kusini. Tunatoa usuli mfupi sana wa othografia za Lugha za Afrika Kusini na aina za silabi zinazotarajiwa katika Sepedi na Setswana katika sehemu ya 2. Kisha tunaeleza mbinu yetu ya ukusanyaji wa data katika sehemu ya 3. Hatimaye, tunajadili matokeo yetu katika sehemu ya 4 na kumalizia kwa majadiliano katika sehemu ya 5.

## 2 Usuli

## 2.1 Tahajia

Lugha zilizoandikwa zina kanuni za kimfumo za tahajia ya maneno (Matlosa, 2017). Kanuni za uandishi katika Lugha za Afrika zilianzishwa na wamisionari wa kidini. Kwa sababu hiyo, othografia nyingi za Lugha za Afrika zimeundwa kwa kuiga othografia za Ulaya (Mahlangu, 2015). Mifumo miwili mikuu ya uandishi inatumika katika lugha za Afrika Kusini. Kwanza, kundi la lugha za Sotho-Tswana pamoja na Tshivenda na Xitsonga hutumia mifumo ya uandishi yenye kutenganisha, huku kundi la lugha za Nguni linaloundwa na isiZulu, isiXhosa, isiNdebele, na SiSwati, likitumia mfumo wa uandishi unaounganisha (Prinsloo, 2011). Mifumo ya uandishi imeonyeshwa hapa chini:

(a) Bana ba ya matha. - Sesotho

Watoto wao wanakimbia. - Kiingereza

(b) Abantwana bayagijima. - Isizulu

Watoto+hao wao+wanakimbia. - Kiingereza

Kama ilivyoonyeshwa hapo juu, lugha kama zile za Sotho-Tswana zenye mifumo ya uandishi yenye kutenganisha hutenga maneno huku lugha zenye mifumo ya uandishi unaounganisha [kwa mfano, isiZulu] zikiunganisha baadhi ya sehemu za usemi kama vile wakati uliopo na kiashirio cha kiima cha wingi katika neno bayagijima. Hata hivyo, lugha za Sotho-Tswana ni rahisi kulinganisha kwa kuwa zinafuata imla ya fonemiki ileile ambapo uwakilishi saba wa fonemiki ni wa kawaida kwa pamoja [ɑ, e, i, o, u, ɛ, na ɔ] (Dickens, 1978; Matlosa, 2017).

Sesotho ina tahajia mbili zinazotambuliwa, yaani, (i) tahajia ya Sesotho ya Afrika Kusini (SAS) na (ii) tahajia ya Sesotho ya Lesotho (LS). Mojawapo ya tofauti kuu kati ya tahajia za SAS na LS ni matumizi ya alama za kidiakritiki katika tahajia ya LS. Kwa mfano, tazama mifano (c) na (d) hapa chini:

(c) Tshepiso. - SAS orthography

Ahadi. - Kiingereza

(d) Tšepiso. - LS orthography

Ahadi. - Kiingereza

Katika mfano ulio hapo juu, tahajia ya LS inatumia herufi yenye alama ya lafudhi š huku tahajia ya SAS ikitumia digrafu 'sh'. Tofauti kati ya mwandiko wa SAS na mwandiko wa LS zimejadiliwa kwa kina katika tafiti kama vile Demuth (2007) na Matlosa (2017). Utaratibu wa silabi unaotegemea kanuni uliotathminiwa katika makala hii unatumia mwandiko wa SAS (Sibeko na van Zaanen, 2022a).

Kulingana na Suyanto et al. (2021), mifumo inayotegemea kanuni hufanya vizuri zaidi kwa lugha zenye rasilimali chache zilizo na korasi za kiwango cha dhahabu kidogo sana hadi kutokuwepo kabisa. Hili pia lilionyeshwa katika kisa cha Sesotho ambapo mfumo unaotegemea kanuni ulifanya vizuri zaidi kuliko mfumo wa uchoraji ruwaza unaotegemea TEX (Sibeko na van Zaanen, 2022a). Mifumo inayotegemea kanuni inajengwa juu ya seti za kanuni zilizoundwa kwa uangalifu na wataalamu wa lugha. Kulingana na Sibeko (2022), wakati orodha iliyobuniwa ya kanuni inatekelezwa kwa usahihi, mipaka ya silabi inaweza kutambuliwa katika neno lolote la Sesotho.

Mfumo wa Sesotho unaotegemea kanuni kwa usilabishaji unatumia kanuni za silabi zenye vokali pekee (silabi-v), silabi zenye konsonanti pekee (silabi-k), na silabi za konsonanti-vokali (silabi-kv). Kwa mujibu wa Sibeko (2022) na Guma (1982) hizi ndizo aina pekee za silabi katika lugha ya Sesotho. Mfumo wa usilabishaji unaotegemea kanuni wa Sibeko na Van Zaanen (2022b) huchukua neno moja kwa kila mstari kama ingizo na kisha hutoa toleo lililosilabishwa. Mipaka ya silabi inaonyeshwa na nafasi.

Mfumo wa usilabishaji unaotegemea kanuni unatambua herufi 26 pekee za alfabeti [abcdefghijklmnopqrstuvwxyz]. Kanuni za usilabishaji zinabainisha aina kuu tatu za silabi pamoja na aina ndogo kumi na sita. Aina hizi, aina ndogo, na mifano imeonyeshwa katika jedwali 1. Kwa kushangaza, mfumo wa silabi wa lugha ya Sesotho uliotumika katika makala hii ulionyesha usahihi wa hali ya juu kwa kufikia kiwango cha asilimia 99.6 (Sibeko na van Zaanen, 2022a,b).

Sauti w na y huchukuliwa kuwa irabu-nusu zinapotokea mwanzoni mwa silabi. Hata hivyo, baadhi ya tafiti, kama vile uchambuzi wa Nkolola-Wakumelo et al. (2012) wa silabi za Setswana na Sesotho, hutumia istilahi "glides" badala yake.

p03-01.png

Jedwali 1: Kanuni na mifano ya ugawaji wa silabi.

## 2.2 Silabi za Sepedi

Kulingana na Wilsenach (2019), lugha za Sotho-Tswana zina miundo ya silabi inayofanana. Yaani, maneno ya Sepedi pia yanaweza kugawanywa katika v-silabi, cv-silabi na c-silabi. V-silabi huundwa kwa kutumia irabu moja tu mwanzoni, katikati au mwishoni mwa neno, au kwa maneno ya silabi moja yanayoundwa na irabu pekee. Muundo wa silabi ya cv unaweza kuwa na kati ya konsonanti moja na nne za mwanzo. Mianzo minne inaweza kuundwa na konsonanti tatu (ccc) kama katika maneno kama tlhekišo [tlhe-ki-šo], na nusu-irabu (w) ikisababisha mianzo minne na silabi ya irabu (cccwv) kama katika maneno kama tlhwekišo [tlhwe-ki-šo].

C-syllables zinaweza kuundwa na m, n, l, r, ɲ, na ŋ syllabic consonants (Chokoe, 2020). Kwanza, silabi-c huundwa wakati konsonanti mbili za silabi zinazofanana zinatokea mfululizo ndani ya neno moja, kwa mfano katika maneno kama ba-l-li 'waliaji', na wa-r-ra 'kaka' (Chokoe, 2020). Pili, wakati konsonanti za nazali zinapotangulia konsonanti nyingine yoyote, kwa mfano katika maneno kama n-tšha 'chora', na m-phsa 'mpya'. Tatu, silabi-c ya ŋ huundwa wakati nazali changamano ya ŋ inapochukua nafasi ya mwisho wa neno kama vile katika maneno kama n-tlo-ng- (Makaure, 2021; Chokoe, 2020).

## 2.3 Silabi za Setswana

Kuna pia miundo mitatu ya silabi katika Setswana Otlogetswe (2017). Kwanza, Setswana hutumia muundo wazi wa silabi-cv ambapo silabi-cv zinaweza kuwa na konsonanti za mwanzo kati ya moja (cv) na nne (cccwv) (Sebina, 2014). Pili, silabi-v zinaweza kuundwa kwa kutumia irabu moja ama katika nafasi ya mwanzo wa neno, katikati ya neno au mwisho wa neno kama vile katika maneno kama a-lo-la, lo-e-to, bo-e- 'tengeneza, safari, rudi'. Maneno yenye silabi moja ya vokali pekee pia hutumika katika Setswana, kwa mfano katika maneno kama ao 'kwa/kwa'. Tatu, kama Sepedi, silabi-c zinaweza kuundwa na konsonanti za silabi m, n, l, r, na ŋ. Konsonanti rahisi za mizizi zinaweza kuonekana katika nafasi ya mwanzo wa neno kama vile katika maneno kama m-ma 'mama', na katika nafasi za kati ya neno kama vile katika maneno kama bo-r-re 'baba' (Otlogetswe na Ramaeba, 2022). Konsonanti ya nazali ŋ pia inaweza kuonekana katika nafasi ya mwisho wa neno kama vile katika maneno kama fi-sa-ng- 'moto'. Ingawa konsonanti nyingine za silabi zina tabia sawa na zile za Sesotho, mfumo wa sasa wa usilabishaji wa Sesotho hauzingatii uwakilishi wa silabi-c ya r katika kanuni zake.

## 3 Mbinu

Kituo cha Afrika Kusini cha Rasilimali za Lugha za Kidigitali kinahifadhi kumbukumbu ya mtandaoni inayopatikana kwa umma katika repo.sadilar.org. Kwa makala hii, tulikusanya korasi mbili za Autshumato 6, yaani, korasi ya lugha moja ya Sepedi (McKellar, 2022a) na ya Setswana (McKellar, 2022b) ya Autshumato. Korasi ya Sepedi ilikuwa na jumla ya maneno 3 458 067 wakati korasi ya Setswana ilikuwa na jumla ya maneno 5 219 070.

p04-01.png

Jedwali la 2: Orodha za maneno yanayotumiwa mara kwa mara na viambajengo vya silabi katika Sepedi

Tulitumia bash kuchuja orodha nne za masafa. Kwanza, orodha ya maneno mia moja yanayotumiwa mara nyingi zaidi katika Sepedi. Pili, maneno mia moja yanayotumiwa mara nyingi zaidi katika Setswana. Tatu, maneno mia moja yanayotumiwa mara chache zaidi katika Sepedi. Nne, maneno mia moja yanayotumiwa mara chache zaidi katika korasi ya Setswana.

Kisha tukatoa taarifa za silabi kutoka orodha zote nne kwa kutumia mfumo wa silabi unaotegemea kanuni wa Sibeko na Van Zaanen (2022b) ambao pia ulipakuliwa kutoka kwenye maktaba ya SADiLaR.

## 4 Matokeo

Sehemu hii inawasilisha matokeo ya mchakato wa ugawaji wa silabi. Maneno 100 yaliyotumiwa zaidi na maneno 100 yaliyotumiwa kidogo zaidi kutoka korasi za Autshumato za Sepedi na Setswana yanawasilishwa. Maneno ya kusimamisha hayakuzingatiwa kwa yoyote ya orodha nne.

## 4.1 Sepedi

## 4.1.1 Maneno yanayotumiwa mara kwa mara

Maneno ya Sepedi yanayotumika mara nyingi zaidi mia moja yalikuwa kati ya mara 229 028 [kwa neno go] na mara 3 387 [kwa neno šoma]. Orodha ya maneno ya awali na silabi zake huonyeshwa katika meza ya 2. Aina za silabi-v, silabi-cv, na silabi-c zinaweza kuonekana kutoka kwenye orodha. Kumbuka kwamba tunatumia kistari (-) kuashiria mipaka ya silabi wakati mfumo wa usilabishaji unatumia nafasi tu.

Muundo wa v-syllables uligunduliwa kwa maneno ya monosyllabic yenye virefu pekee kama vile a, e, ɛ, ɔ na o. Aidha, tuliona silabi za v katika nafasi ya mwanzo wa neno katika maneno kama ile [i-le-] 'alikwenda', nafasi ya kati ya neno katika maneno kama taolo [ta-o-lo-] 'udhibiti', na nafasi ya mwisho wa neno katika maneno kama tee [te-e-] 'tu'. Hatukuona utambuzi wowote usio sahihi wa v-syllables.

Angalau aina nne za silabi za cv zinapatikana kwenye orodha hiyo. Kwanza, muundo wa konsonanti-moja-irabu-moja ulionekana katika maneno kama vile kudu [ku-du-] 'sana' ambayo yaligawanywa kwa usahihi katika silabi mbili. Pili, muundo wa silabi wa cwv ulikuwa dhahiri katika maneno kama vile bohlokwa [bo-hlo-kwa-] 'muhimu' ambayo yaligawanywa katika silabi tatu. Tatu, muundo wa ccv ulionekana katika maneno kama vile tšeo [tše-o-] 'hayo'. Nne, muundo wa ccwv ulikuwa dhahiri katika maneno kama vile ngwaga [ngwa-ga-] 'mwaka' ambayo yaligawanywa katika silabi mbili. Tano, muundo wa cccv ulionekana katika maneno kama vile setšhaba [se-tšha-ba-] 'taifa' ambayo yaligawanywa katika silabi tatu. Kwa bahati mbaya, hakukuwa na mifano ya miundo ya silabi ya cccwv kwenye orodha hiyo.

p05-01.png

Jedwali 3: Orodha za maneno yaliyotumika kidogo na viambajengo vyake vya silabi katika Sepedi

Zaidi ya hayo, orodha yetu ya maneno yaliyotumika mara kwa mara ilikuwa na kikomo kwa kuwa haikuakisi aina zote zinazowezekana za silabi zenye konsonanti pekee. Hata hivyo, tuliweza kuchunguza tabia ya konsonanti za nazali za silabi m na n. Kwa mfano, tunapata maneno kama mmušo [m-mu-šo-] 'serikali' na nngwe [n-ngwe-] 'moja' ambayo yamegawanywa kwa usahihi katika misemo.

## 4.1.2 Maneno yaliyotumika kidogo

Tulichunguza pia maneno mia moja yaliyotumika kidogo kutoka kwenye korasi ya Sepedi. Kila moja ya maneno haya yalionekana si zaidi ya mara moja katika korasi. Maneno asilia na silabi zilizotokana nazo zimeorodheshwa katika jedwali la 3.

Orodha yetu ya Sepedi ya maneno yanayotumika mara chache zaidi ilikuwa na mifano ya maneno ya Kiingereza yasiyotafsiriwa. Baadhi ya maneno ya Kiingereza yaliachwa kama marejeleo kwa maneno mapya ya Sepedi. Hatukusafisha orodha; badala yake, tulifunga orodha hiyo kwenye mfumo wa kutenganisha misillabi ili kuona jinsi mfumo unavyoshughulika na maneno yote yasiyotarajiwa tofauti.

Kwa bahati nzuri, mifumo ya silabi inayotegemea sheria ni bora kwa maneno yasiyoonekana (Adsett et al., 2009). Uwezo wa kushughulikia maneno ambayo hayajaonekana huwezesha mfumo wa ugawaji silabi kutambua mipaka ya silabi katika maneno yasiyotarajiwa kama vile miunganiko kama abelwagokelenaneoedirwemenyetlayagoyagoile na katika maneno kutoka lugha tofauti kama vile neno la Kiingereza 'Abrahams' [a-bra-ha-ms].

Miundo mitatu ya silabi-v ilionekana. Kwanza, muundo wa silabi-v wa mwanzo wa neno ulionekana katika maneno kama vile abjwe [a-bjwe-] 'ilishirikiwa' ambayo yaligawanywa katika silabi mbili. Pili, muundo wa silabi ya v mwishoni mwa neno ulionekana katika neno aaohegnoboae ambalo liligawanywa katika silabi nane [a-a-o-he-gno-bo-a-e-]. Mwishowe, muundo wa silabi ya v katikati ya neno ulionekana katika maneno kama vile aemiše [a-e-mi-še-] 'anakoma' ambayo yaligawanywa katika silabi nne.

p06-01.png

Jedwali la 4: Orodha za maneno yanayotumika mara kwa mara na viambajengo vyake vilivyogawanywa katika silabi katika Setswana

Miundo mitano ya silabi ya cv ilitambuliwa kutoka kwenye orodha ya maneno. Kwanza, muundo wa konsonanti moja-vokali moja ulionekana katika maneno kama vile abulela 'alifungua' ambayo yaligawanywa katika silabi nne [a-bu-le-la-]. Pili, muundo wa cwv ulikuwa dhahiri katika maneno kama vile adimišwe 'kopesha' ambayo yaligawanywa katika silabi nne [a-di-mi-šwe-]. Tatu, muundo wa ccv ulionekana katika maneno kama vile abagantše 'iliyogawanywa' ambayo yaligawanywa katika silabi tano [a-ba-ga-n-tše-]. Nne, tuliona muundo wa ccwv katika maneno kama adumeletšwego [a-du-me-le-tšwe-go-] 'iliyoidhinishwa' ambayo yaligawanywa katika silabi sita. Hatimaye, tuliona muundo wa cccv katika maneno kama vile abagantšhe [a-ba-ga-n-tšhe-] 'tenganisha' ambao uligawanywa katika silabi tano. Hakukuwa na mifano ya muundo wa cccwv katika orodha ya maneno ya sasa.

Miundo miwili tu ya silabi-c ilionekana kutoka kwenye orodha ya maneno mia moja yaliyotumika mara chache zaidi. Kwanza, muundo wa nazali ya silabi n ulionekana katika maneno kama vile abagantše yaliyojadiliwa hapo juu. Pili, muundo changamano wa nazali ya silabi ŋ ulionekana katika maneno kama vile abaganeng [a-ba-ga-ne-ng-] ambapo iko katika nafasi ya mwisho wa neno.

Ingawa hakukuwa na matukio ya nazali ya silabi m, kuna tabia ya kuvutia ya konsonanti m katika maneno kama vile adminiša [a-dmi-ni-ša-] 'simamia' na admirale [a-dmi-ra-le-] 'admirali' ambayo kwa mtiririko huo yamegawanywa katika silabi nne. Muundo huu wa msemo wa dmi haukutarajiwa katika lugha ya Sepedi na unawezekana tu kwa maneno yaliyoborashwa na kuingizwa kutoka nje. Mtu angetarajia irabu kati ya herufi d na m kama katika adiminiša [a-di-mi-ni-ša-] na adimirale [a-di-mi-ra-le-].

Hata hivyo, lugha za Sotho-Tswana hazina sheria kali za kuandika maneno yaliyokopwa. Kwa matokeo hayo, silabi ya 'dmi' haivunji sheria za uandishi kwani ni silabi ya ccv ambayo inang'ana na muundo wa silabi za cv ambao kwa ujumla unapendelewa katika lugha za Bantu (Ditsele, 2014). Kilicho muhimu hapa ni kwamba mipaka ya silabi inatambuliwa kwa usahihi.

## 4.2 Setswana

## 4.2.1 Maneno yanayotumiwa mara kwa mara

Maneno ya Setswana yaliyotumika mara nyingi zaidi mia moja yalikuwa kati ya mara 334 188 [kwa neno go] na mara 4 688 [kwa neno yona].

Maneno ya silabi moja yenye irabu pekee kama vile a, e, na o yalitumiwa mara kwa mara katika korasi. Zaidi ya hayo, tuliona miundo ya silabi ya v katika nafasi za mwanzo wa neno katika maneno kama vile eno [e-no-] 'huyo', katika nafasi za mwisho wa neno kama vile katika maneno kama puo [pu-o-] 'hotuba', na katika nafasi ya kati ya neno katika maneno kama vile 'jaaka' [ja-a-ka-] 'kama'. Kwa ujumla, hakuna makosa yaliyoshuhudiwa kwa miundo ya v-syllable.

p07-01.png

Jedwali la 5: Orodha ya maneno yaliyotumika kidogo zaidi na viambajengo vyake vya silabi katika Setswana

Angalau miundo sita ya silabi za cv ilionekana. Moja, muundo wa cv ulikuwa dhahiri katika maneno kama vile pele [pe-le-] 'kufuata'. Pili, muundo wa cwv ulionekana katika maneno kama vile kwala [kwa-la-] 'andika'. Tatu, muundo wa silabi wa ccv ulionekana katika maneno kama vile tlase [tla-se-] 'chini'. Nne, muundo wa silabi ccwv ulionekana katika maneno kama vile sengwe [se-ngwe-]'kitu'. Tano, tuliona muundo wa silabi wa cccv katika maneno kama botlhokwa [bo-tlho-kwa-] 'muhimu'. Sita, tuliona muundo wa cccwv katika maneno kama vile tshwanetse [tshwa-ne-tse-] 'lazima'.

Pia tuliona aina tatu za silabi-c. Moja, silabi m ilikuwa dhahiri katika maneno kama vile mmogo 'pamoja' ambapo ilionekana katika nafasi ya mwanzo wa neno [m-mo-go-]. Mbili, silabi n ilionekana katika nafasi ya kati ya neno katika maneno kama dintlha [di-n-tlha-] 'maelezo'. Tatu, silabi ŋ ilionekana katika nafasi ya mwisho wa neno katika maneno kama neng [ne-ng-] 'lini'.

## 4.2.2 Maneno yaliyotumika mara chache zaidi

Maneno adimu zaidi kutoka kwenye korasi ya Setswana yalionekana si zaidi ya mara moja katika korasi. Maneno ya awali pamoja na silabi huonyeshwa katika meza ya 5. Sawa na orodha ya Sepedi, orodha ya Setswana ina baadhi ya matukio ya tahajia isiyo sahihi kama vile adiminsanang [a-di-mi-n-sa-na-ng-]. Hata hivyo, mfumo wa usilabishaji uliweza kuingiza mipaka ya silabi inayoweza kuhalalishwa katika nafasi zilizotarajiwa. Kwa mfano, n ya ziada katika adimi-n-sanang inafuatwa na mpaka sahihi wa silabi. Pia, kama orodha ya Sepedi, kuna mifano mingi ya maneno yasiyo ya Setswana katika orodha hii.

Miundo mitatu ya silabi-v ilionekana. Yaani, katika nafasi ya mwanzo wa neno katika maneno kama adileng [a-di-le-ng-] 'iliyowekwa wazi', nafasi ya katikati ya neno katika maneno kama abiotiki [a-bi-o-ti-ki-] 'abiotic', na eneo la mwisho wa neno katika kifupi cha Kiingereza kisichotafsiriwa cha Autism Centers of Excellence, yaani acae [a-ca-e-].

Miundo mitano ya silabi za cv pia ilishuhudiwa. Yaani, silabi cv katika maneno kama adikarabo [a-di-ka-ra-bo-] 'ya majibu', silabi cwv katika maneno kama abelwaneng [a-be-lwa-ne-ng-] 'iliyoshirikiwa', silabi ccv katika maneno kama adimanwe [a-di-ma-nwe-] 'walikopana', na silabi ccwv katika maneno kama adimetsweng [a-di-me-tswe-ng-] 'iliyokopwa kwa ajili ya'.

Hatimaye, aina tatu za silabi-c zilionekana. Moja, silabi m ilionekana katika maneno kama adimlweng [a-di-m-lwe-ng-]. Ingawa neno hilo halipitishwi kimakosa, mipaka ya silabi imo katika mahali panapotarajiwa. Mbili, silabi l katika nafasi ya katikati ya neno inaonekana katika maneno kama abillweng [a-bi-l-lwe-ng]. Konsonanti ya pembeni ya pili katika neno kwa bahati mbaya ni hitilafu ya uchapaji. Hata hivyo, mfumo huo wa kuainisha herufi uliweza kuweka mipaka halali kwa kufuata mpangilio wa herufi katika neno hilo. Hatimaye, silabi ŋ ilionekana katika nafasi ya mwisho wa neno katika maneno kama adimeng [a-di-me-ng-] na katika nafasi ya katikati ya neno katika maneno kama abengditirelo [a-be-ng-di-ti-re-lo-].

Kama tulivyotarajia, 'r' ya kisilabi ya Setswana haijashughulikiwa na kanuni za Sesotho za ugawaji silabi kama ilivyoelezwa katika Sibeko (2022) na Sibeko na van Zaanen (2022a). Kwa bahati mbaya, neno sahihi la Setswana lenye silabi 'r' halipo katika orodha zote mbili za maneno ya Setswana. Hata hivyo, neno abderrahmane [a-bde-rra-hma-ne-] lina herufi za 'r' zinazofuatana. Katika tukio hili, mpaka wa silabi unaotarajiwa kati ya silabi ya 'rra', yaani [r-ra-] haupo.

## 5 Mjadala

Kama ilivyotajwa mapema katika makala hii, lugha za Sotho-Tswana zinaeleweka kwa kiwango kikubwa. Ingawa baadhi ya chaguo za msamiati zinaweza kuwa na utata, utata huo hauathiri mipaka ya silabi. Makala hii ililenga kuthibitisha mfumo wa kugawanya silabi wa Sesotho unaotegemea kanuni kwa maneno yote ya Sepedi na Setswana. Tulitumia mashine ya Autshumato kutafsiri kwa ajili ya Sepedi na Setswana. Maandishi hayo yalitafsiriwa kutoka kwa maandishi ya Kiingereza kama lugha ya msingi. Kwa sababu hiyo, zina taarifa zinazofanana kwa kiasi fulani.

Miundo ya v-syllable ilionyesha uwiano sahihi wa nafasi ya syllable katika lugha zote mbili za Sepedi na Setswana. Miundo yote ya v-syllable iliyodaiwa na Sibeko (2022) iligunduliwa kwa lugha zote mbili za Sepedi na Setswana. Miundo yote ya silabi-v ya mwanzo wa neno, katikati ya neno, na mwisho wa neno ilitambuliwa kwa usahihi. Uthabiti huu katika Usahihi wa sehemu za silabi unaonyesha kwamba mfumo wa sasa wa ugawaji silabi wa Sesotho ni bora kwa kutambua silabi-v katika Sepedi na Setswana. Kwa bahati mbaya, maneno ya herufi moja hayawezi kugawanywa kuwa silabi. Hata hivyo, hakuna matokeo yasiyotarajiwa yaliyozingatiwa kwa maneno ya herufi moja yenye vokali pekee.

Mfumo wa ugawaji silabi uliweka sehemu sahihi za silabi mara kwa mara katika maneno yenye konsonanti za silabi m na n kwenye maandishi ya Sepedi na Setswana. Kwa bahati mbaya, ŋ ilikuweza kutambuliwa tu katika nafasi ya mwisho wa neno katika Sepedi. Kwa hivyo, hatukuweza kuona tabia yake inapotokea katika nafasi za mwanzo wa neno na katikati ya neno. Hata hivyo, silabi ya ŋ katikati ya neno ilikutambuliwa kwa usahihi katika orodha ya Setswana. Aidha, orodha ya Sepedi haikuwa na mifano yoyote ya silabi ya l. Hata hivyo, ilionekana katika orodha ya Setswana. Kwa sababu hiyo, tunaweza kudhani kwa usalama kwamba mfumo wa sasa wa ugawaji silabi unaweza kuingiza mipaka sahihi ya silabi kwa konsonanti l hata katika Sepedi kwani silabi ya l ina tabia sawa katika lugha zote tatu za Kisotho-Tswana.

Muundo usiotarajiwa wa silabi ya dmi unaangazia hitaji la sheria wazi zinazosimamia tabia ya konsonanti za nazali zinazofuata konsonanti nyingine. Kufikia hatua hii, sheria hizo ni za kuelezea tu wakati konsonanti ya nazali inapokuja kabla ya konsonanti nyingine. Inaweza kuwa ya kuvutia pia kuchunguza hili katika masomo ya baadaye.

Ingawa mfumo huo ulijaribu kutambua mipaka ya silabi kwa maneno yasiyo ya ki-Sotho-Tswana, yaani maneno ya Kiingereza, kutopatana kati ya sheria hizo kama zitumiwavyo katika mfumo wa utakasaji na muundo wa herufi za Kiingereza hakungeweza kupuuzwa.

Mipaka yote iliyotarajiwa ya silabi katika maneno sahihi ya Setswana ilitambuliwa kwa mafanikio na mfumo wa uzuiaji wa syllabi. Hata hivyo, tulipoteza mfano wa silabi ya r inayofuatana katika orodha zote mbili za Sepedi na Setswana. Ingekuwa na kuvutia kuchunguza maneno halisi ya Setswana yenye mifano kama hiyo. Hata hivyo, tuligundua kutokuwepo kwa kugawanyika kwa silabi kati ya herufi za r zinazofuatana katika mifano isiyo ya Setswana. Ufunuo huu unathibitisha dhana yetu ya awali kwamba mfumo wa sasa wa kutenganisha misilabi ya Sesotho haugundui konsonanti za silabi za r.

Pia tuliona kutokupatana katika mwendelezo wa maneno kama vile aaforika na Araferika 'Afrika' katika orodha ya Setswana ya maneno mia moja yaliyotumiwa kwa nadra sana. Maneno yote mawili yalivunjwa kuwa silabi kwa kuhalalishwa kulingana na tahajia isiyo sahihi iliyotolewa, tazama jedwali 5. Ijapokuwa hili si muhimu katika utambuzi wa silabi, linaathiri hesabu za silabi kwani linaweza kutilia chumvi hesabu za silabi na aina zilizotambuliwa kutoka katika maandishi.

Uwezo usio wa mfumo wa kutenganisha misillabu kutambua alama za diacritiki kama zile zinazotumika katika Sepedi haukuwa tatizo kwa maneno tuliyochagua. Yaani, maneno ya Sepedi yenye alama za diacritiki yaligawanywa kwa usahihi kuwa misemo. Hata hivyo, hatufahamu uwekaji wote unaowezekana wa herufi zenye lafudhi katika maneno ya Sepedi yaliyoandikwa. Kama tahadhari, tunapendekeza kuwa sasisho la mfumo wa kutenganisha misemo lijumuishe herufi zenye alama za diacritiki.

Kwa ujumla, tunapendekeza kuwa mfumo wa kugawanya misemo wa Sesotho unaotegemea kanuni ujasishwe ili kufunika lugha zote tatu za Sotho-Tswana zilizobainishwa. Pia tunapendekeza kwamba alama za msamiati zijumuishwe na kushughulikiwa hasa katika mfumo uliopendekezwa wa alama za msamiati wa Sotho-Tswana. Muhimu sawa, tunapendekeza kwamba kanuni zilizosasishwa pia zifunike kanuni mahususi za kushughulikia silabi ya r ya Sepedi na Setswana.

## Mapungufu

Matokeo ya makala haya yana mipaka kutokana na mbinu yetu ya sampuli iliyojumuisha matumizi ya maneno mia moja yaliyotumiwa zaidi na maneno mia moja yaliyotumiwa kidogo zaidi katika kila lugha kama inavyothibitishwa na korasi za Autshumato. Tafiti za baadaye zinaweza kufikiria kuunda korasi zilizo na maelezo ya silabi za kiwango cha dhahabu kwa Sepedi na Setswana. Korasi hizo zinaweza kisha kutumika kwa kutathmini utumiaji wa mfumo wa usilabishaji wa Sesotho unaotegemea TEX kwenye maandishi ya Sepedi na Setswana. Katika makala hii, tulikumbana na vikwazo kutokana na ukosefu wa hifadhidata kama hizo na hivyo tulikwaa tu kwenye tathmini ya mfumo wa kutenganisha misemo kulingana na kanuni. Orodha zilizotumiwa hazikuwa na mifano sahihi ya Sepedi ya maneno yenye konsonanti mfululizo za r. Kwa matokeo hayo, hatuwezi kutoa hitimisho maalum kuhusu utendaji wa mfumo wa kutenganisha misemo kulingana na kanuni kwa maneno kama hayo.

## Taarifa ya Maadili

Makala hii inatumia rasilimali zinazopatikana hadharani. Waandishi wamechukua hatua za kuhakikisha kuwa data iliyotumika imetajwa vizuri na kuhusishwa na vyanzo vya awali na kwamba upendeleo wowote unaowezekana au vikwazo katika data vinatambuliwa.

## Maelezo

1 angalia maagizo kwa bodi za lugha za Afrika Kusini zinazopatikana katika https://static.pmg.org.za/PanSALB_APP_2122_compressed_reviewed_08032021_final.pdf

2 Matokeo ya sensa ya Afrika Kusini ya 2022 hayajatolewa

3 Orodha ya maneno iliyofafanuliwa kwa taarifa za silabi za Kisotho inaweza kufikiwa kwa uhuru katika https://repo.sadilar.org/handle/20.500.12185/556

4 ona https://repo.sadilar.org/handle/20.500.12185/556 kwa ajili ya mifumo ya Sesotho syllabation

5 Ona kwamba huu ni mfano mwingine wa neno lisilo la ki-Sepedi. Iliitumika hapa kutokana na kutokuwepo kwa neno sahihi la Sepedi lenye silabi ya v-mwisho wa neno

## Marejeo

Connie R Adsett, Yannick Marchand, Vlado Kes, et al. 2009. Syllabification rules versus data-driven methods in a language with low syllabic complexity: The case of italian. Computer Speech & Language, 23(4):444-463.

Etienne Barnard, Marelie H Davel, Charl Van Heerden, Febe De Wet, and Jaco Badenhorst. 2014. The NCHLT corpus of the South African languages. In Proceedings of the 4th International Workshop Spoken Language Technologies for Under-resourced Languages, pages 194-200.

Sekgaila Chokoe. 2020. Spell it the way you like: The inconsistencies that prevail in the spelling of Northern Sotho loanwords. South African Journal of African Languages, 40(1):130-138.

Katherine Demuth. 2007. Sesotho speech acquisition. The international guide to speech acquisition, pages 526-538.

Patrick Dickens. 1978. A preliminary report on Kgalagadi vowels. African Studies, 37(1):99-106.

Thabo Ditsele. 2014. Why not use Sepitori to enrich the vocabularies of Setswana and Sepedi? Southern African Linguistics and Applied Language Studies, 32(2):215-228.

Aditi Sharma Grover, Gerhard B van Huyssteen, and Marthinus W Pretorius. 2010. The South African Human Language Technologies audit. In Proceedings of the Seventh International Conference on Language Resources and Evaluation (LREC'10), pages 2847-2850.

Aditi Sharma Grover, Gerhard Beukes. van Huyssteen, and Marthinus W. Pretorius. 2011. The South African Human Language Technology audit. Language resources and evaluation, 45:271-288.

Samson Mbizo Guma. 1982. An outline structure of Southern Sotho, 2nd edition. Shooter and Shuter Publishers, Pietermaritzburg, South Africa.

Pali Lehohla. 2011. Census in brief. Statistics South Africa. government printing works: Pretoria.

Katjie Sponono Mahlangu. 2015. The growth and development of isiNdebele orthography and spelling (1921-2010). Ph.D. thesis, University of Pretoria.

Leketi Makalela. 2009. Harmonizing South African Sotho language varieties: Lessons from reading proficiency assessment. International Multilingual Research Journal, 3(2):120-133.

Zvinaiye Patricia Makaure. 2021. The contribution of phonological processing skills to early literacy development in Northern Sotho-English bilingual children: A longitudinal investigation. Ph.D. thesis, The University of South Africa, Pretoria.

Litsépiso Matlosa. 2017. Sesotho orthography called into question: The case of some Sesotho personal names. Nomina Africana: Journal of African Onomastics, 31(1):51-58.

Cindy McKellar. 2022a. Autshumato Monolingual Sepedi Corpus. ONLINE. South African Centre for Digital Language Resources. Available at: https://repo.sadilar.org/handle/20.500.12185/582 Accessed: 28 Jan 2023.

Cindy McKellar. 2022b. Autshumato Monolingual Setswana Corpus. ONLINE. South African Centre for Digital Language Resources. Available at: https://repo.sadilar.org/handle/20.500.12185/584 Accessed: 28 Jan 2023.

Victor Mojela. 2016. Etymology & figurative: The role of etymology in the lemmatization of Sotho terminology. In The 10th International Conference of the Asian Association for Lexicography (AsiaLex2016) 1-3 June 2016 Manila, The Philippines, page 93.

Carmen Moors, Illana Wilken, Karen Calteaux, and Tebogo Gumede. 2018a. Human Language Technology audit 2018: Analysing the development trends in resource availability in all South African languages. In Proceedings of the Annual Conference of the South African Institute of Computer Scientists and Information Technologists, pages 296-304.

Carmen Moors, Illana Wilken, Tebogo Gumede, and Karen Calteaux. 2018b. Human Language Technology audit 2017/18. Technical report, CSIR Meraka Institute.

Mildred Nkolola-Wakumelol, Liketso Rantsoz, and Keneilwe Matlhaku. 2012. Syllabification of consonants in Sesotho and Setswana. In H S NgingaKoumba-Binza and S Bosch, editors, Language Science and Language technology in Africa: Festschrift for Justus C. Roux, pages 10-13. Sun Express, Stellenbosch, South Africa.

Thapelo J Otlogetswe. 2017. Setswana syllable structure and distribution. Nordic Journal of African Studies, 26(4):28-28.

Thapelo J Otlogetswe and Goabilwe N Ramaeba. 2022. Nickname creation through shortening Setswana personal names. South African Journal of African Languages, 42(2):200-206.

Danie Prinsloo. 2011. Tribute to Professor Louis Jacobus Louwrens: This issue of the south african journal of african languages is dedicated to Professor Louis Jacobus Louwrens. South African Journal of African Languages, 31(1):1-5.

Tebogo Rakgogo and Evangeline Zungu. 2021. The onomastic possibility of renaming the Sepedi and Sesotho sa Leboa (Northern Sotho) language names to restore peace, dignity and solidarity. Literator (Potchefstroom. Online), 42(1):1-14.

Republic of South Africa. 1996. Constitution of the Republic of South Africa. Department of Justice, Pretoria.

Boikanyego Sebina. 2014. First language attrition in the native environment. LANGUAGE, 6:53-60.

Johannes Sibeko. 2022. Tshebediso ya melao kabong ya dinoko tsa Sesotho. Southern African Linguistics and Applied Language Studies, 40(4):494-506.

Johannes Sibeko and Mmasibidi Setaka. 2022. An overview of Sesotho blark content. Journal of the Digital Humanities Association of Southern Africa, 4(01).

Johannes Sibeko and Menno van Zaanen. 2022a. Developing a text readability system for Sesotho based on classical readability metrics. In Responding to Asian diversity, pages 571-572.

Johannes Sibeko and Menno van Zaanen. 2022b. Sesotho syllabification systems. Southern African Centre for Digital Language Resources. Available at: https://repo.sadilar.org/handle/20.500.12185/555 [accessed: 3 jan 2023].

Luan Staphorst. 2022. Ongehoord: Voices unaccented; voices unharmonized. Afrikaans and South Africa's first peoples in discourses of higher education transformation. Unpublished MA dissertation, Nelson Mandela University.

Suyanto Suyanto, Ade Romadhony, Febryanti Sthevanie, and Rezza Nafi Ismail. 2021. Augmented words to improve a deep learning-based indonesian syllabification. Heliyon, 7(10):e08115.

Hein Willemse. 2018. The hidden histories of Afrikaans. Whiteness Afrikaans Afrikaners: Addressing PostApartheid Legacies, Privileges and Burdens, page 115.

Carien Wilsenach. 2019. Phonological awareness and reading in Northern Sotho-understanding the contribution of phonemes and syllables in grade 3 reading attainment. South African Journal of Childhood Education, 9(1):1-10.

Philimon Nhlanhla Zulu, Gerrit Botha, and Etienne Barnard. 2008. Orthographic measures of language distances between the official South African languages. Literator: Journal of literary criticism, comparative linguistics and literary studies, 29(1):185-204.
