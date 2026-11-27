> Machine translation (sw) of "The First Universal Dependency Treebank for Tswana: Tswana-Popapolelo" by Tanja Gaustad, Ansu Berg, Rigardt Pretorius, Roald Eiselen, https://aclanthology.org/2024.rail-1.7/, licensed Creative Commons Attribution-NonCommercial 4.0 International (https://creativecommons.org/licenses/by-nc/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Treebank ya Kwanza ya Utegemezi wa Universal kwa Tswana: Tswana-Popapolelo

Tanja Gaustad, Ansu Berg, Rigardt Pretorius, Roald Eiselen

**Taasisi**  
Tanja Gaustad†, Ansu Berg‡, Rigardt Pretorius‡, Roald Eiselen†  
†Centre for Text Technology (CTexT), ‡Setswana  
North-West University, Potchefstroom, South Africa  


## Muhtasari

Makala hii inawasilisha treebank ya kwanza ya UD inayopatikana kwa umma kwa Tswana, Tswana-Popapolelo. Data iliyotumika inajumuisha sentensi 20 za Cairo CICLing zilizotafsiriwa kwa Tswana. Baada ya kuchakata sentensi hizi kwa POS ya kina (XPOS) na kuzibadilisha kuwa POS ya kijumla (UPOS), tuliendelea kufafanua data kwa mahusiano ya utegemezi, tukirekodi maamuzi kwa miundo mahususi ya lugha. Masuala ya kilugha yaliyojitokeza yameelezewa kwa kina kwa kuwa hii ni matumizi ya kwanza ya mfumo wa UD kutoa treebank ya utegemezi kwa familia ya lugha ya Kibantu kwa ujumla na kwa Tswana hasa.

## Maneno Muhimu

Treebank ya utegemezi, ufafanuzi, Lugha za Kibantu, Tswana

## 1. Utangulizi

Pamoja na msukumo wa hivi karibuni wa kupanua utofauti wa kilugha katika utafiti wa Uchakataji wa Lugha Asilia (NLP) (Joshi et al., 2020), kumekuwa na ongezeko la hamu katika ufafanuzi wa kisintaksia kwa lugha zenye rasilimali chache kutoka Afrika Kusini mwa Jangwa la Sahara na kusababisha treebank kwa Kibambara (Aplonova na Tyers, 2017; Dione, 2021), Kibeja (Kahane et al., 2021), Kiwolofu, na Kiyoruba (Dione, 2021). Rasilimali pekee kama hiyo inayopatikana kwa sasa kwa Tswana ni treebank inayotegemea Sarufi ya Kiutendaji ya Kileksika (Berg, 2018) inayojumuisha vishazi na sentensi rahisi (LR Berg, 2018).

Makala haya yanaelezea treebank ya kwanza ya Tswana inayopatikana kwa umma, Tswana-Popapolelo, iliyofafanuliwa katika mfumo wa Universal Dependency (UD) (de Marneffe et al., 2021). Kama uthibitisho wa dhana, tulichagua kufafanua seti ndogo ya data katika UD na pia kuandika masuala na maamuzi ya ufafanuzi wa kiisimu wakati wa kutumia UD kwa Tswana ili kwenda mbele data zaidi iweze kufafanuliwa kwa urahisi zaidi.

Katika makala hii, tutalenga kwenye ujenzi wa treebank ya UD kwa Tswana (angalia sehemu 2 kwa maelezo ya msingi yanayohitajika), tukielezea data (sehemu 3) na usindikaji wa awali (sehemu 4), mchakato wa ufafanuzi (sehemu 5) na, zaidi ya yote, changamoto tulizokutana nazo (sehemu 6) wakati wa kujaribu kutumia mfumo wa UD kwa lugha (familia) mpya.

## 2. Usuli

## 2.1. Historia ya Lugha

Tswana (ISO-639-3 tsn) ni lugha ya Kibantu inayozungumzwa katika sehemu za kaskazini magharibi mwa Afrika Kusini, sehemu za mashariki mwa Namibia zinazopakana na Botswana na nchini Botswana, ambako ni lugha ya taifa na watu wengi ni wazungumzaji wa lugha ya kwanza. Ni mojawapo ya lugha rasmi 12 za Afrika Kusini na inazungumzwa na asilimia 8.3 ya idadi ya watu (Statistics South Africa, 2023), na kuifanya kuwa lugha ya nyumbani ya 6 kwa wingi. Mbali na lugha ya ishara na lugha mbili za Kigermanik (Afrikaans na Kiingereza), lugha rasmi zinajumuisha lugha tisa za Kibantu: lugha nne za Nguni (Ndebele, Xhosa, Zulu na Swati), lugha tatu za Sotho (Sotho ya Kaskazini, Sotho ya Kusini, Tswana), pamoja na Venḓa na Tsonga. Tswana imeainishwa katika Kanda ya Kusini-Mashariki ya Lugha za Kibantu. Lugha hizi za Kibantu zimegawanywa katika vikundi vya lugha na Tswana imejumuishwa katika kikundi cha lugha ya Kisotho (kikundi S31) (Maho, 2003).

Lugha za Kibantu zina idadi ya sifa za kiisimu zinazozifanya ziwe tofauti kwa kiasi kikubwa na lugha nyingi za Kihindi-Kiulaya (van der Velde et al., 2022): zote ni lugha za toni; zinatumia mfumo tata wa ngeli (Katamba, 2003) na mofolojia yao ya nomino na vitenzi ina uambatizi wa hali ya juu na ni yenye tija sana (Katamba, 1993). Hasa sifa mbili za mwisho ni muhimu katika muktadha wa ufafanuzi wa kisintaksia.

Uteuzi wa mtindo wa uandishi wa tahajia uliopitishwa kwa Tswana uliathiriwa na sababu za kihistoria na kifonolojia (Taljard and Bosch, 2006, 433). Kifonolojia, tabia ya nguvu ya homografia ya viambishi awali vya vitenzi vya lugha za Kisotho (ikiwemo Tswana) imesababisha kupitishwa kwa tahajia ya kitenganishi kuhusu viambishi awali vya vitenzi. Lugha za Kinguni, kwa upande mwingine, zimepitisha mfumo wa uandishi wa kiunganishi (Louwrens and Poulos, 2006). Katika muktadha huu, tofauti inafanywa kati ya maneno ya kiisimu na maneno ya kiothografia. Kwa lugha kama Kiingereza au Kiafrikana, neno la kiisimu na neno la kiothografia kwa kiasi kikubwa vinapatana. Kwa lugha zilizoandikwa kwa muungano, neno moja la kiothografia linalingana na neno moja au zaidi ya kiisimu. Kwa lugha zilizoandikwa kwa utengano kama Tswana, hata hivyo, maneno kadhaa ya kiothografia yanaweza kulingana na neno moja la kiisimu. Mfano ufuatao unaonyesha mitindo ya uandishi ya utengano (Tswana) dhidi ya muungano (Zulu):

p02-01.png

Athari za viambishi awali vya vitenzi vilivyoandikwa kwa utengano katika maelezo ya kisintaksia ya Tswana zitajadiliwa kwa undani zaidi katika sehemu ya 6.

## 2.2. Universal Dependencies (UD)

Universal dependencies (UD) ni mradi wa kimataifa, shirikishi wenye malengo makuu mawili: kuunda mfumo wa pamoja unaoelezea muundo wa kisarufi wa lugha za dunia (de Marneffe et al., 2021) na kuunda treebanks kwa lugha mbalimbali kwa kutumia mfumo huu (Nivre et al., 2020). Mradi unajitahidi kuzalisha treebank zinazolingana kati ya lugha (pamoja na viendelezi mahususi vya lugha inapohitajika) zinazoelezea miundo ya kisintaksia pamoja na sifa za kimofolojia. Mfumo huu unaruhusu ulinganisho kati ya lugha (ikiwa ni pamoja na lugha zenye mpangilio huru wa maneno), utafiti kutoka kwa mtazamo wa tipolojia ya lugha pamoja na uundaji wa vichanganuzi vya lugha nyingi. Kama ilivyoelezwa katika utangulizi wa mradi wa UD: "Mpango wa ufafanuzi unategemea mageuzi ya vitegemezi vya (kimataifa) Stanford (de Marneffe et al., 2021), lebo za aina za maneno za kimataifa za Google (Petrov et al., 2012), na lugha ya kati ya Interset kwa seti za lebo za mofosintaksia (Zeman, 2008)." Mahusiano ya kisintaksia katika UD yanawakilishwa kama miti ya vitegemezi badala ya miti ya muundo wa vishazi jambo ambalo hufanya data iliyofafanuliwa iwe rahisi kutumia na kufasiriwa katika kazi zinazofuata. Kwa sasa, kuna zaidi ya treebank 250 katika zaidi ya lugha 140 tofauti zinazopatikana.

Uchaguzi wetu wa kutumia UD unatokana na matumizi yaliyokusudiwa ya treebank za UD ambayo yananufaisha jamii za utafiti wa kikompyuta na wa kiisimu. Kama de Marneffe et al. (2021) wanavyoashiria, UD inahitaji kufuata idadi ya vigezo (vinavyoshindana) ambavyo vinajumuisha a) mahitaji ya lugha, kama vile kufikia kiwango cha kutosha cha ufafanuzi kwa uchambuzi wa lugha wa lugha binafsi na kuwa nzuri kwa kuonyesha utafutaji wa muundo kati ya lugha zinazohusiana, b) mahitaji ya kompyuta, yaani kuwa inafaa kwa uchanganuzi kwa usahihi wa juu na kusaidia kazi za uchakataji wa lugha asilia za baadaye, na, mwisho lakini si chini, c) mahitaji ya kimatumizi, yaani kuwa inafaa kwa ufafanuzi wa haraka na thabiti na mtaalamu wa binadamu na kueleweka kwa urahisi na watumiaji wasio wa lugha.

Faida ya ziada ya kujiunga na juhudi kama UD ni miundombinu inayopatikana katika suala la miongozo ya kuchangia, hati za uthibitishaji, usaidizi kutoka kwa jumuiya ya UD na mwonekano, upatikanaji na utumikaji tena wa data iliyofafanuliwa kupitia matoleo rasmi.

## 3. Takwimu: Cairo CICLing Corpus

Ili treebank ya UD ijumuishwe katika toleo rasmi, ni lazima iwe na angalau sentensi 20 na maneno 100. Hili linaweza kufanikishwa kwa urahisi zaidi kwa kutafsiri sentensi 20 za mfano katika Cairo CICLing Corpus kwa lugha inayotarajiwa, kwa upande wetu Tswana. Kutumia sentensi hizi kuna faida ya ziada kwamba zina miundo tofauti ya kiisimu, na kuzifanya ziwe kisa cha kwanza kizuri cha kujaribu kujadili jinsi ya kufafanua miundo hii katika lugha inayolengwa.

Baada ya kupata sentensi 20 za Cairo CICLing, wazungumzaji asilia watatu wa Tswana walitafsiri data yote bila kushauriana wao kwa wao. Katika hatua ya pili, timu ya Tswana iliamua kutumia tafsiri ya makubaliano ambapo makubaliano juu ya sentensi za mwisho zilizotafsiriwa yalifikiwa baada ya kuzingatia tafsiri huru na za neno kwa neno. Hii ilikuwa basi pembejeo kwa usindikaji wa awali ulioelezwa baadaye.

## 4. Uchakataji wa awali: Ugawaji wa maneno, XPOS na UPOS

Ugawaji wa maneno kwa sentensi 20 zilizotafsiriwa unalingana na maneno ya tahajia kama yanavyotumika katika tahajia rasmi ya Tswana (Cole, 1955; Krüger, 2006). Tutajadili athari na chaguo tofauti zinazowezekana kwa undani zaidi katika sehemu ya 6.

p03-01.png

Jedwali la 1: Muhtasari wa lebo za UPOS zilizopewa katika sentensi 20 za Tswana.

Dhana muhimu wakati wa kuweka lebo za vitegemezi vya jumla ni uwepo wa aina za maneno (POS), haswa POS ya jumla (UPOS) (Petrov et al., 2012). Seti ya lebo za UPOS ina lebo 17: 6 kwa madarasa wazi (majina, vitenzi, n.k.), 8 kwa madarasa funge (k.m. viwakilishi, viunganishi) na 3 kwa vipengee mbalimbali (kama vile alama ya uakifishaji na alama).

Katika kazi ndogo sana iliyofanywa kuhusu Tswana, bado hakuna makubaliano kuhusu jinsi ya kupatanisha POS ya jadi ya Tswana katika UPOS na matumizi ya lebo za UPOS si mara zote ya moja kwa moja (Dione et al., 2023). Hata hivyo, kuna vitambulishi vya aina za maneno vya Tswana vyenye seti pana zaidi za vitambulisho (Eiselen na Puttkammer, 2014; Puttkammer na wenzake, 2018; Malema na wenzake, 2020; Dibitso na wenzake, 2022). Kwa madhumuni ya ufafanuzi wa UD wa Tswana, kigawaji maneno na kipa lebo cha POS cha NCHLT vilitumika kuweka lebo kwenye data kwa POS ya kina (kwa kawaida hujulikana kama XPOS katika UD). Kipa lebo hiki cha POS kinajumuisha lebo kuu 26, na lebo 188 wakati wa kujumuisha taarifa za ngeli. Tagi za POS za kina zilibadilishwa baadaye kuwa tagi za UPOS kwa kuzingatia jedwali la ubadilishaji. Jedwali la 1 linatoa muhtasari wa usambazaji wa tagi za UPOS zilizopewa katika data.

Hata kwa kazi inayoonekana kuwa rahisi ya kupunguza seti ya tagi za XPOS hadi UPOS, kulikuwa na maamuzi machache magumu wakati wa ubadilishaji, hasa kutopakia tagi moja mahususi ya UPOS (hasa PART chembe) kwa kategoria nyingi sana tofauti za XPOS.

Tatizo kuu lilihusu viambishi awali vya vitenzi katika Tswana. Kama ilivyotajwa awali, kutokana na mtindo wa uandishi wa kutenganisha, kategoria kadhaa za mofimu za vitenzi huandikwa kama maneno tofauti. Mofimu hizi pia hupewa tagi tofauti katika schema ya XPOS na zinajumuisha mofimu za upatanisho (mofimu za kiima na yambwa), mofimu za umiliki, mofimu za ukanushi, mofimu za kipengele, na mofimu za wakati. Mofimu za kiima na yambwa zilichukuliwa kama upatanisho wa kiima na yambwa mtawalia katika XPOS. Kwa kuwa hakuna vilinganishi vya moja kwa moja vinavyopatikana katika UPOS, viliwekewa tagi kama PRON (kiwakilishi), huku viambishi vimilikishi vikiwekewa tagi kama PART (chembe). Mofimu za wakati na hali (zilizopewa tagi MORPH katika XPOS) pia zilibadilishwa kuwa PART (chembe) katika UPOS, huku viashiria vya ukanushi vikibadilishwa kuwa ADV.

p03-02.png

Jedwali la 2: Muhtasari wa mahusiano ya utegemezi yaliyowekwa katika sentensi 20 za Tswana.

Zaidi ya hayo, katika seti yetu ya kina ya tagi za XPOS, ideofoni zilipokea tagi yao wenyewe IDEO kwani zinachukuliwa kuwa tabaka tofauti la neno linaloelezea kitendo, namna au sifa kupitia uigaji wa sauti, lakini si mara zote huonyesha kazi sawa ya kisintaksia katika sentensi. Hata hivyo, hakuna tagi kama hiyo katika UPOS na hakuna ulinganifu katika familia nyingine za lugha katika katalogi ya UD uliopatikana. Kwa kuwa hakukuwa na ideofoni katika sentensi za Tswana Cairo CICLing, tagi haikuhitajika, lakini katika ufafanuzi zaidi tungezingatia tagi ya ADV (kielezi) kwa ideofoni katika Tswana.

Faida ya kuwa na tagi zote za XPOS na UPOS katika matumizi yetu wakati wa ufafanuzi wa kisintaksia ni kwamba tokeni zenye utata mkubwa (zenye homofonia na utata wa kimofosintaksia, k.m. ka 'na, juu ya, kupitia', go 'kitenzi cha unganishi katika hali mbalimbali, katika, kwa+kitenzi, kwa+eneo') zinaweza kuunganishwa kwa usahihi kwa urahisi zaidi na kwamba tagi zote za XPOS zilizowekwa kiotomatiki pamoja na tagi za UPOS zilizobadilishwa zinaweza kusahihishwa ikihitajika.

## 5. Mchakato wa Ufafanuzi

Ufafanuzi wa kisintaksia pamoja na masahihisho ya lebo za UPOS ulifanyika katika Arborator Grew (Guibon et al., 2020). Katika hatua ya kwanza, wafafanuzi walikagua lebo za UPOS na XPOS na kuzisahihisha pale ilipobidi. Kisha, muundo wa kisintaksia uliongezwa hatua kwa hatua: anza kwa kutambua mzizi wa kila sentensi, unganisha kiima na yambwa, kisha endelea kuunganisha na kuweka lebo kwenye vitegemezi vilivyobaki. Wakati wa ufafanuzi, chaguzi mbalimbali za miundo fulani ya kisintaksia zilijadiliwa na kuandikwa hadi wafafanuzi walipokubaliana juu ya uunganishaji unaopendelewa na lebo za vitegemezi zinazohusiana. Jedwali la 2 linaonyesha muhtasari wa mahusiano ya vitegemezi yaliyopewa.

p04-01.png

Kielelezo cha 1: Sentensi ya 1 yenye kiima dhahiri.

p04-02.png

Kielelezo cha 2: Sentensi ya 2 yenye kiima fiche.

Treebank ya Tswana-Popapolelo itapatikana katika toleo lijalo la UD, pamoja na nyaraka zote za lugha maalum.

## 6. Masuala Yaliyojitokeza

Baadhi ya ufafanuzi yalikuwa ya moja kwa moja kwa seti ndogo ya data ya sasa, lakini sifa za kipekee za kiisimu za Tswana kama mfano wa lugha ya Kibantu iliyoandikwa kwa njia ya kutenganisha zilihitaji mijadala ya kina zaidi kuhusu jinsi ya kutumia mahusiano yaliyopo ya UD. Haya yamefafanuliwa hapa chini.

## 6.1. Tahajia ya Kutenganisha na Miundo ya Vitenzi katika Tswana

Kama ilivyoelezwa katika sehemu ya 2.1, mtindo wa uandishi wa kutenganisha umepitishwa kwa Tswana. Hasa kwa viambishi awali vya vitenzi, hii inamaanisha kwamba idadi kubwa ya tokeni za tahajia zinazotangulia kitenzi katika isimu ya kimapokeo zingeonekana zaidi kama mofimu badala ya maneno "sahihi". Utambuzi sahihi wa maneno kwa ujumla huchukuliwa kama hatua muhimu ya awali ya uchakataji kwa maelezo ya kisintaksia. Kwa mtazamo huu, viambishi awali vya vitenzi vya Tswana vilivyoandikwa kwa njia ya kutenganisha husababisha tokeni za tahajia ambazo ni sehemu ya maneno ya kiisimu (Taljard and Bosch, 2006) na hivyo kuhatarisha uadilifu wa kileksika wa vitenzi. Viambishi awali vya vitenzi vya Tswana hubeba taarifa za unyambulishaji huku viambishi tamati vikibeba taarifa za unyambulishaji na pia za uundaji wa maneno (Krüger, 2006, 268). Viambishi awali hivi vya vitenzi pia hubeba taarifa za kimofolojia na kisintaksia jambo ambalo hufanya iwe vigumu kuvipangia lebo za UPOS na mahusiano ya kisintaksia.

Suluhisho moja dhahiri la kushughulikia tatizo hili ni kurekebisha ugawaji wa maneno ili kuakisi maneno ya kiisimu, badala ya maneno ya kiothografia. Ingawa hili kwa hakika lingerahisisha na kuoanisha data kwa karibu zaidi na mfumo wa UD, hili pia lingepunguza uzito wa maelezo na taarifa za treebank. Kwa kuzingatia hili, tuliamua kufafanua mahusiano kati ya maneno yote ya kiothografia. Maelezo zaidi kuhusu athari za ugawaji wa maneno yametolewa katika sehemu ya 6.5.

Katika ufafanuzi wa UD wa Tswana, viambishi awali vya vitenzi vilivyoandikwa kwa njia ya kutenganisha vinaunganishwa na mzizi wa kitenzi kupitia matao. Sasa tutaeleza jinsi sehemu mbalimbali za miundo ya vitenzi zilivyoshughulikiwa.

## 6.1.1. Viambishi vya Upatanisho wa Kiima

Katika hali ambapo kiima dhahiri kinatambulika katika sentensi, kiambishi cha upatanisho wa kiima ni alama ya upatanisho inayoashiria uhusiano kati ya kiima dhahiri na kitenzi. Katika hali hizi tulichagua uhusiano wa expl. Uhusiano huu unatumika katika UD kwa matukio kama vile urudiaji wa klitiki (k.m. katika lugha za Kirumi) au urudiaji wa nomino ya kileksika na klitiki ya kiwakilishi (k.m. katika Kigiriki na Kibulgaria). Ingawa viambishi vya upatanisho wa kiima si sawa na klitiki, vina tabia sawa kwa kuwa ni aina ya nakala ya "kiwakilishi" isiyo na dhima yake ya semantiki. Mfano wa Kitswana unaweza kuonekana katika kielelezo cha 1 cha sentensi ya 1.

p04-03.png

Katika matukio ambapo kiima dhahiri hakitambuliki, upatanisho wa kiima (fichu) hupata hadhi ya kiwakilishi (kama ambavyo kingekuwa kiwakilishi katika tafsiri) na kuwa kiima halisi, hivyo basi huwekwa alama kwa uhusiano wa nsubj kama inavyoonyeshwa katika kielelezo cha 2 cha sentensi ya 2.

p05-01.png

Kielelezo cha 3: Sentensi ya 3 inayoonyesha matumizi ya uhusiano wa aux.

p05-02.png

Kielelezo cha 4: Sentensi ya 4 inayoonyesha matumizi ya uhusiano wa compound kwa baadhi ya mofimu za TAME.

p05-03.png

## 6.1.2. Vitenzi Vya Msaada

Kitenzi kisaidizi huboresha maana ya kitenzi kikuu kinachokamilishana nacho, kitenzi cha ushirikishi au kishazi kingine cha kitenzi kisaidizi na kinaweza kuongeza taarifa za kisemantiki kuhusu hali, wakati, kipengele na/au ukanushi wa kitenzi. Pia huongeza taarifa kuhusu kuendelea au kukamilika kwa tendo: Huonyesha aina fulani ya muda wa tendo au huonyesha wakati wa kimantiki ambao tendo hilo linatekelezwa. Kwa mfano, kitenzi kisaidizi ne huonyesha wakati uliopita unaoonyesha kwamba tendo lilikuwa linafanyika au lilikuwa limefanyika wakati fulani katika siku za nyuma. Ikiwa kitenzi kinachokamilishana nacho kiko katika wakati uliopo basi huonyesha tendo ambalo halijakamilika na linaendelea wakati fulani huko nyuma. Ikiwa kitenzi kinachojaza kiko katika kamili huonyesha kuwa kitendo kimekamilika katika hatua ya marejeleo (Pretorius, 1997; Krüger, 2013a).

Katika UD, vitenzi visaidizi ni kundi funge ambalo haliwezi kuwa na vitegemezi vyovyote. Uhusiano wa aux unatumika katika Tswana kuonyesha uhusiano kati ya kitenzi na kitenzi kisaidizi kinachotangulia, kama ilivyo kwa lugha nyingine. Hata hivyo, tulikumbana na suala la visaidizi kuchukua upatanisho wa kiima (uliorudiwa) kama kitegemezi. Katika sentensi ya 3, upatanisho wa kiima hutokea mara mbili: mara moja (ukidhihirika kama o) pamoja na kisaidizi ne na mara moja (ukidhihirika kama a) pamoja na kitenzi dira, lakini vyote vikirejelea kiima 'yeye' na vyote vinahitajika ili sentensi iwe sahihi kisarufi.

p05-04.png

'Alimfanya mumewe kuosha gari. '

Katika hatua hii, tumechagua kufafanua upatanisho wa kiima pamoja na kitenzi kisaidizi kwa uhusiano wa expl, wakati upatanisho wa kiima pamoja na kitenzi kikuu unakuwa nsubj na uhusiano kati ya kisaidizi na kitenzi kikuu umewekwa alama ya aux kama inavyoonekana katika kielelezo cha 3.

## 6.1.3. Mofimu za TAME

Mofimu za wakati-kipengele-hali-ushahidi (TAME) zilizoandikwa kwa njia ya kutenganisha katika muundo wa kimofolojia wa kitenzi daima hutokea katika mpangilio maalum na hazibadiliki kimofosintaksia. Kwa mofimu za TAME zikiwemo mofimu ya wakati uliopo a, mofimu ya kuendelea sa 'bado', mofimu ya uwezekano ka 'weza, huenda' na mofimu ya wakati ujao tla 'ta-, -taka-' uhusiano wa compound unatumika kueleza kwamba huu ni mchanganyiko wa leksimu ambazo kimofosintaksia hufanya kazi kama neno moja. Tazama mfano katika sentensi 4 na kielelezo 4.

p05-05.png

Kwa morphemes ga, sa, se, tumechagua kutumia mchanganyiko wa ADV na advmod, unaofanana na Kiingereza, kama ionyeshwavyo katika sentensi 5 na tarakimu 5.

p06-01.png

Kielelezo 5: Sentensi 5 inayoonyesha matumizi ya uhusiano wa advmod kwa mofimu za TAME za ukanushi.

p06-02.png

Picha 6: Sentensi 6 yenye kitenzi cha kueleza kinachotumika kama kitenzi cha kuunganisha.

p06-03.png

## 6.2. Vitenzi vya Kopula

Kopula ni uhusiano wa neno la kazi linalotumiwa kuunganisha kiima na kiarifu kisicho cha kitenzi. Katika Tswana aina tatu za vitenzi vya kopula vinatofautishwa:

kopula ya kutambulisha: inatambulisha kiima kuhusiana na aina, hadhi au taaluma au kutabiri kuwepo au uwepo wa kitu, k.m. Lekwalo lê ke la gago 'Barua hii ni yako';

kopula ya kuelezea: inathibitisha ubora fulani, sifa au hali ya kiima, au hali yake au eneo lake, k.m. Ditlhako tsa me di dintšha 'Viatu vyangu ni vipya';

kopula ya ushirikisho: inaelezea wazo la Kiingereza have au be with na inaonyesha umiliki au ushirikisho, k.m. Sediba sê se na le metsi 'Kisima hiki kina maji' .

Muundo wa kimofolojia wa vitenzi hivi unaweza kujumuisha taarifa za wakati, kipengele, hali na ukanushi.

Wakati kitenzi katika Tswana ni kitenzi cha kopula cha kutambulisha au kuelezea, mzizi wa kishazi ni kikamilisho cha kitenzi cha kopula. Aina hizi mbili za vitenzi vya kopula zinawekewa tagi ya POS kama AUX, na uhusiano wa cop unatumiwa kati ya mzizi na kitenzi cha kopula kinachotangulia. Tazama sentensi ya 6 na kielelezo cha 6 kwa mfano wa kikopulati kinachoeleza.

p06-patch01.png

'Baba yangu ni mzuri zaidi kuliko baba yako.'

Kwa upande wa kitenzi kikopulati cha ushirikisho, mzizi wa kishazi ni kitenzi kikopulati. Vitenzi vikopulati vya ushirikisho katika Tswana vimewekewa tagi ya POS kama VERB, na uhusiano wa obj unatumika kati ya mzizi na kikamilisho kinachofuata, kama inavyoonyeshwa katika sentensi ya 7 na kielelezo cha 7. Uchanganuzi huu unatofautiana na maelezo ya kimapokeo ya isimu ya Tswana (Cole, 1955; Krüger, 2006, 2013b).

p06-04.png

## 6.3. Matumizi ya Uhusiano wa mark

Viunganishi vinavyoashiria sentensi kuwa chini ya sentensi nyingine hufasiliwa kama mark katika UD. Katika Tswana, alama ni mwanachama wa kuanzisha wa sentensi ambayo inajumuisha kitendo katika hali ya subjunctive au participial. Kwa subjunctive, kiunganishi gore 'that, so that' kinatumika, kama inavyoonyeshwa katika sentensi 8 na kielelezo 8. Kwa participial, kiunganishi kama vile fa 'as, while, when, if' , le fa 'even if, although, while' na ka 'since' vinatumika.

p07-01.png

Kielelezo 7: Sentensi 7 yenye kitenzi cha kopula cha ushirikisho.

p07-02.png

Picha 8: Sentensi 8 inayoonyesha matumizi ya uhusiano wa alama kwa sentensi ya chini.

p07-03.png

Uhusiano wa mark pia unatumika katika Tswana kwa vitenzi vya infinitive, sawa na Kiingereza na Kijerumani, kwa mfano go tlogela 'to stop' ambapo kialamishi ni go 'to' . Angalia sentensi 9 na picha 9 kwa maelezo.

p07-04.png

Zaidi ya hayo, alama hutumika katika kishazi rejeshi ambapo chembe sifishi ndiyo kialama kama inavyoonekana katika sentensi 10 na kielelezo 10: Chembe sifishi sikuzote hupatana na ngeli maalum ya nomino katika Tswana, kwa mfano katika e kgolo '[sehemu] kubwa' kialama ni chembe sifishi e inayoonyesha upatano wa ngeli ya 9.

p07-05.png

## 6.4. Chembe ya Kuuliza a

Katika Tswana kuna chembe ya kuuliza a inayoongezwa mwanzoni mwa sentensi kubadilisha sentensi elezi kuwa ya kuuliza. Baada ya mashauriano na jumuiya ya UD, tumeamua kukabidhi lebo ya UPOS PART (chembe) kwa a na pia kuiunganisha moja kwa moja kwenye mzizi wa sentensi kwa uhusiano wa mazungumzo (kufuata mfano wa Kilatini wa ne). Kwa vile chembe hii hufanya kazi katika kiwango cha kipragmatiki zaidi, uhusiano wa mazungumzo 'unatumika kwa vihisishi na chembe nyingine za mazungumzo na vipengele (ambavyo havijaunganishwa wazi kwenye muundo wa sentensi, isipokuwa kwa njia ya kujieleza)' kama ilivyoelezwa katika muhtasari wa UD wa mahusiano ulionekana kuwa chaguo bora zaidi. Sentensi 11 na kielelezo 11 vinaonyesha mfano wa hili kwa Tswana.

p07-06.png

## 6.5. Ugawaji wa maneno katika Tswana

Suala ambalo kwa hakika bado hatujalitatua na ambalo linahusiana na sehemu iliyotangulia ya 6.1 ni ugawaji wa Tswana katika vipashio. Kijadi, uchanganuzi wa kikompyuta kwa Lugha za Kibantu za Afrika Kusini zinazoandikwa kwa mtengano, yaani Kisotho cha Kaskazini, Kisotho cha Kusini, Tswana, Kivenḓa na Kitsonga, umekuwa ukifanywa kwenye maneno ya kiothografia kwani wakati huo hakuna ubadilishaji unaohitajika kutoka kwa maandishi asilia. Athari za kuchagua kutumia maneno ya kiothografia badala ya maneno ya kiisimu, hata hivyo, zitahisika katika viwango mbalimbali wakati wa kufanyia kazi uchanganuzi wa kisintaksia wa Tswana kwa kutumia vitegemezi vya UD:

Wakati wa kufanya ufafanuzi: Kufanya kazi kwenye neno la kiothografia inamaanisha muda na juhudi zaidi zitatumika katika kupata UPOS na pia mahusiano ya vitegemezi kwa usahihi (vyote vinahusu zaidi kiwango cha kisintaksia). Kwa maneno ya kiisimu, muundo wa kisintaksia unakuwa wa moja kwa moja zaidi (rahisi zaidi?), lakini wakati huo huo uangalifu zaidi unahitajika katika kuongeza taarifa za kimofolojia ili kuhifadhi undani unaohitajika ili kuweza kubainisha.

p08-01.png

Kielelezo 9: Sentensi 9 inayoonyesha matumizi ya uhusiano wa alama katika vitenzi vya infinitive.

p08-02.png

Kielelezo 10: Sentensi 10 inayoonyesha matumizi ya uhusiano wa alama kwa chembe sifishi.

Kutoka kwa mtazamo wa isimu ya kikompyuta: Hasa katika mfumo wa UD, ikiwa maandishi ya Tswana yanachanganuliwa kwa kutumia maneno ya kiothografia, ufafanuzi unaotokana unaifanya ilingane kwa moja kwa moja zaidi na lugha za Ulaya na ufafanuzi wa kisintaksia utakuwa tofauti zaidi na wenye taarifa zaidi. Kwa upande mwingine, kutumia maneno ya lugha kutaweka msisitizo zaidi juu ya kufanana na lugha nyingine, hasa lugha za Kibantu zilizoandikwa kiunganishi, lakini muundo wa kisarufi utakuwa rahisi zaidi kwa sababu habari nyingi zitapatikana tu katika ngazi ya mofolojia (chini ya neno).

Kuhusiana na uchanganuzi wa kiisimu: Katika maelezo ya jadi (ya kimuundo) ya kisarufi, mpaka wa upande wa kushoto wa vitenzi vya Tswana unachukuliwa kuwa kiambishi awali cha kwanza cha kitenzi hicho, hata kama kimeandikwa kwa kutenganisha. Hii ina maana kwamba vitenzi kama vile ke a mo rata katika 2.1 vingegawanywa kama neno moja, yaani kitenzi. Kitenzi hiki kingeunda sentensi yenyewe na kingekuwa kiarifu cha sentensi. Kwa hiyo uchanganuzi wa kisintaksia wa sentensi haungeonyesha thamani ya kiwakilishi ya viambishi upatanishi vya kiima na yambwa ili kuonyesha kwamba sentensi ina kiima na yambwa (Taljard and Bosch, 2006; Louwrens and Poulos, 2006; Krüger, 2006; Cole, 1955; Pretorius et al., 2015). Katika maelezo ya baadaye (Berg, 2018), uadilifu wa kileksika wa kitenzi unadumishwa lakini hadhi ya kihoja ya viambishi upatanishi hivi inaonyeshwa katika kiwango cha kikazi.

Kwa hiyo, ikiwa tungeamua "kuambatisha" viambishi awali vya kitenzi kwenye kitenzi, muundo wa awali katika 12 unaotegemea maneno ya kiothografia ungebadilika kuwa uwakilishi katika 13.

p08-03.png

p08-patch01.png

"Sikuweza kusimama, kwa sababu alikimbia haraka sana. '

Tunahisi kazi zaidi inahitajika kuchunguza wapi pa kuweka mipaka wakati wa "kuambatisha" viambishi awali vya vitenzi na pia kuelewa kikamilifu matokeo ya mkabala kama huo.

## 7. Hitimisho na Kazi za Baadaye

Makala hii ina maelezo ya treebank ya kwanza ya UD inayopatikana kwa umma kwa Tswana, kulingana na sentensi 20 za Cairo CICLing zilizotafsiriwa. Treebank iliyopatikana inaonyesha kwamba hili lilikuwa jaribio la kwanza lenye mafanikio la kutumia UD kwa lugha ya Kibantu na linaunda msingi wa ufafanuzi zaidi wa Tswana kwa seti pana zaidi. Faida kuu ya kuanza na seti ndogo ya data kama hii ni kwamba maelezo mengi yenye matatizo zaidi yanaweza kujadiliwa kwa kina, na matokeo yanayolingana yanaweza kuandikwa bila kuhitaji ufafanuzi mpya mkubwa wa data katika hatua ya baadaye. Kama inavyotarajiwa, si masuala yote yametatuliwa bado na baadhi ya maamuzi yalipaswa kufanywa kuhusu jinsi bora ya kutumia mfumo uliopo kwa lugha mpya yenye sifa za kipekee za kiisimu. Tunatumai ripoti ya kina kuhusu masuala yaliyojitokeza itawasaidia pia wengine wanapofafanua Lugha mpya za Kisotho na Kibantu katika UD.

p09-01.png

Kielelezo 11: Sentensi 11 yenye chembe ya kuuliza.

Kwa kuwa treebank ya Tswana-Popapolelo sasa inapatikana, tunapanga kuandika data ya ziada kwa msaada wa wasaidizi wa wanafunzi. Ufafanuzi wa sasa unategemea uelewa wetu wa fasihi na maoni tuliyopokea kutoka kwa jumuiya ya UD, lakini chaguzi zilizofanywa hadi sasa hakika zitaboreshwa zaidi na data iliyofafanuliwa inayopatikana kwa Tswana itapanuliwa kwa kuiongeza kwenye Tswana-Popapolelo. Hii inajumuisha kufanya majaribio na mikakati tofauti ya ugawaji wa maneno kwa data ileile ili kuchunguza athari kwenye uchanganuzi wa utegemezi.

Mara seti kubwa zaidi ya data ya treebank inapopatikana, tutafunza pia vichanganuzi otomatiki ili kufafanua data mapema kusaidia na kurahisisha mchakato wa ufafanuzi. Hatimaye tunalenga kuwa na data ya kutosha kufunza vichanganuzi kamili vya utegemezi sahihi, vikiwemo XPOS, UPOS, lemma na vitambulishi vya mofolojia, wakati huo huo tukitumia kazi za wengine wanaotumia treebank za UD kufunza zana mbalimbali za NLP.

## 8. Shukrani

Tungependa kuwashukuru Kevin Mavalela na Kaboentle Maibi kwa mchango wao katika tafsiri na majadiliano ya awali na ufafanuzi. Zaidi ya hayo, tunashukuru kwa jumuiya ya UD kwa majibu yao kwa maswali yetu.

## Maelezo

1 Tutakuwa tukitumia Tswana kwani hili ndilo neno linalopendelewa katika mazingira ya kimataifa badala ya Setswana ambalo kwa ujumla hutumika Afrika Kusini (kama ilivyoainishwa katika Katiba ya Afrika Kusini ya 1996 na Sheria ya Matumizi ya Lugha Rasmi ya 12 ya 2012). Uamuzi huohuo wa kutotumia viambishi unahusu majina ya lugha nyingine rasmi za Afrika Kusini katika makala hii.

2 https://universaldependencies.org/introduction.html, retrieved 12-02-2024.

3 Angalia https://universaldependencies.org/ kwa muhtasari.

4 https://github.com/UniversalDependencies/cairo/blob/master/translations.txt

5 Hawa walikuwa wanafunzi wa uzamili waliolipwa kwa muda wao.

6 Kitswana kimejumuishwa katika UDMorph Tagger https://lindat.mff.cuni.cz/services/teitok-live/udmorph/index.php?action=tag, lakini ubadilishaji kutoka kitambulisho cha POS hadi UPOS haujathibitishwa na wataalamu wa lugha (bado).

7 https://arboratorgrew.elizia.net/

8 https://github.com/UniversalDependencies/UD_Tswana-Popapolelo

9 Picha zote zilitengenezwa kwa kutumia http://www.let.rug.nl/kleiweg/conllu/.

10 Maana ya kitenzi cha msaada ne inahitaji umbo la mfululizo la mofimu ya makubaliano ya nomino inayofuata.

11 https://universaldependencies.org/u/dep/all.html#al-u-dep/discourse.

## 9. Marejeo

Ekaterina Aplonova and Francis M. Tyers. 2017. Towards a dependency-annotated treebank for Bambara. In Proceedings of the 16th International Workshop on Treebanks and Linguistic Theories, pages 138-145, Prague, Czech Republic.

Ansu Berg. 2018. A computational syntactic analysis of Setswana. Ph.D. thesis, North-West University, Potchefstroom, South Africa.

Desmond T. Cole. 1955. An introduction to Tswana grammar. Longman, Cape Town.

Marie-Catherine de Marneffe, Christopher D. Manning, Joakim Nivre, and Daniel Zeman. 2021. Universal Dependencies. Computational Linguistics, 47(2):255-308.

Mary Dibitso, Pius A. Owolawi, and Sunday O. Ojo. 2022. An hybrid part of speech tagger for Setswana language using a voting method. In International Conference on Intelligent and Innovative Computing Applications, pages 245-253.

Cheikh M. Bamba Dione. 2021. Multilingual dependency parsing for low-resource African languages: Case studies on Bambara, Wolof, and Yoruba. In Proceedings of the 17th International Conference on Parsing Technologies and the IWPT 2021 Shared Task on Parsing into Enhanced Universal Dependencies (IWPT 2021), pages 84-92, Online. Association for Computational Linguistics.

Cheikh M. Bamba Dione, David Ifeoluwa Adelani, Peter Nabende, Jesujoba O. Alabi, Thapelo Sindane, Happy Buzaaba, Shamsuddeen Hassan Muhammad, Chris Chinenye Emezue, Perez Ogayo, Anuoluwapo Aremu, Catherine Gitau, Derguene Mbaye, Jonathan Mukiibi, Blessing Sibanda, Bonaventure F. P. Dossou, Andiswa Bukula, Rooweither Mabuya, Allahsera Auguste Tapo, Edwin Munkoh-Buabeng, Victoire Memdjokam Koagne, Fatoumata Ouoba Kabore, Amelia Taylor, Godson Kalipe, Tebogo Macucwa, Vukosi Marivate, Tajuddeen Gwadabe, Mboning Tchiaze Elvis, Ikechukwu Onyenwe, Gratien Atindogbe, Tolulope Adelani, Idris Akinade, Olanrewaju Samuel, Marien Nahimana, Théogène Musabeyezu, Emile Niyomutabazi, Ester Chimhenga, Kudzai Gotosa, Patrick Mizha, Apelete Agbolo, Seydou Traore, Chinedu Uchechukwu, Aliyu Yusuf, Muhammad Abdullahi, and Dietrich Klakow. 2023. MasakhaPOS: Part-of-speech tagging for typologically diverse African languages. In Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics Volume 1: Long Papers, pages 10883-10900.

Roald Eiselen and Martin J. Puttkammer. 2014. Developing text resources for ten South African languages. In Proceedings of the Ninth International Conference on Language Resources and Evaluation (LREC 2014), pages 3698-3703.

Gaël Guibon, Marine Courtin, Kim Gerdes, and Bruno Guillaume. 2020. When collaborative treebank curation meets graph grammars. In Proceedings of the 12th Language Resources and Evaluation Conference, pages 5291-5300, Marseille, France. European Language Resources Association.

Pratik Joshi, Sebastin Santy, Amar Budhiraja, Kalika Bali, and Monojit Choudhury. 2020. The state and fate of linguistic diversity and inclusion in the NLP world. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, pages 6282-6293, Online. Association for Computational Linguistics.

Sylvain Kahane, Martine Vanhove, Rayan Ziane, and Bruno Guillaume. 2021. A morph-based and a word-based treebank for Beja. In Proceedings of the 20th International Workshop on Treebanks and Linguistic Theories (TLT, SyntaxFest 2021), pages 48-60, Sofia, Bulgaria. Association for Computational Linguistics.

Francis Katamba. 1993. Morphology. Springer, New York.

Francis Katamba. 2003. Bantu nominal morphology. In Derek Nurse and Gérard Philippson, editors, The Bantu Languages, pages 103-120. Routledge, London & New York.

Caspar J.H. Krüger. 2006. Introduction to the morphology of Setswana. Lincom Europe, München.

Caspar J.H. Krüger. 2013a. Setswana syntax: a survey of word group structures: Volume 1. Lincom Europe, München.

Caspar J.H. Krüger. 2013b. Setswana syntax: a survey of word group structures: Volume 2. Lincom Europe, München.

Louis J. Louwrens and George Poulos. 2006. The status of the word in selected conventional writing systems - the case of disjunctive writing. Southern African Linguistics and Applied Language Studies, 24(3):389-401.

Jouni Maho. 2003. A classification of the Bantu languages: an update of Guthrie's referential system. In Derek Nurse and Gérard Philippson, editors, The Bantu Languages, pages 639-651. Routledge, London & New York.

Gabofetswe Malema, Boago Okgetheng, Bopaki Tebalo, Moffat Motlhanka, and Goaletsa Rammidi. 2020. Complex Setswana parts of speech tagging. In Proceedings of the first workshop on Resources for African Indigenous Languages (RAIL), pages 21-24.

Joakim Nivre, Marie-Catherine de Marneffe, Filip Ginter, Jan Hajič, Christopher D. Manning, Sampo Pyysalo, Sebastian Schuster, Francis Tyers, and Daniel Zeman. 2020. Universal Dependencies v2: An evergrowing multilingual treebank collection. In Proceedings of the 12th Language Resources and Evaluation Conference, pages 4034-4043, Marseille, France. European Language Resources Association.

Slav Petrov, Dipanjan Das, and Ryan McDonald. 2012. A universal part-of-speech tagset. In Proceedings of the Eighth International Conference on Language Resources and Evaluation (LREC'12), pages 2089-2096, Istanbul, Turkey. European Language Resources Association (ELRA).

Laurette Pretorius, Biffie Viljoen, Ansu Berg, and Rigardt Pretorius. 2015. Tswana finite state tokenisation. Language Resources and Evaluation, 49(4):831-856.

Rigardt Pretorius. 1997. Auxiliary Verbs as a Subcategory of the Verb in Tswana. Ph.D. thesis, PU for CHE, Potchefstroom, South Africa.

Martin Puttkammer, Roald Eiselen, Justin Hocking, and Frederik Koen. 2018. NLP web services for resource-scarce languages. In Proceedings of ACL 2018, System Demonstrations, pages 43-49, Melbourne, Australia. Association for Computational Linguistics.

Department of Statistics South Africa. 2023. Census 2022: Statistical release. Technical report, Department of Statistics, Republic of South Africa.

Elsabé Taljard and Sonja E. Bosch. 2006. A comparison of approaches to word classtagging: Disjunctively vs. conjunctively written Bantu languages. Nordic Journal of African Studies, 15(4):428-442.

Mark van der Velde, Koen Bostoen, Derek Nurse, and Gérard Philippson, editors. 2022. The Bantu Languages, 2nd edition. Routledge, London & New York.

Daniel Zeman. 2008. Reusable tagset conversion using tagset drivers. In Proceedings of the Sixth International Conference on Language Resources and Evaluation (LREC'08), Marrakech, Morocco. European Language Resources Association (ELRA).

## 10. Marejeo ya Rasilimali za Lugha

LR Berg, Ansu. 2018. Setswana Test suite and Treebank. South African Centre for Digital Language Resources (SADiLaR). PID https://hdl.handle.net/20.500.12185/478.
