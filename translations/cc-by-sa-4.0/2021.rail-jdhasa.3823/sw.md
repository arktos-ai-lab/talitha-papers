> Machine translation (sw) of "An Open Source System for Crowd Sourcing an African Language Short Story Corpus" by Benson K. Muite, Kichakato Kizito, https://upjournals.up.ac.za/index.php/dhasa/article/view/3823, licensed Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/). Translation by Ernst van Gassen (Arktos AI Lab), made with open models (fix-deepseek-v4-pro, glossary, madlad-7b, opus-mt, qwen3.6-27b, rescue-deepseek-v4-pro); checked against the original by automated review, and sentences with errors were replaced by another open-model translation; not reviewed by a human; changes were made.

## Mfumo wa Programu Huria kwa ajili ya Umati wa Kompyuta wa Korasi ya Hadithi Fupi za Lugha za Kiafrika

Benson K. Muite, Kichakato Kizito

**Taasisi**  
Muite, Benson K.  
Kichakato Kizito  


## Muhtasari

Lugha nyingi za Afrika zina korasi chache zenye ufikiaji wazi kwa ajili ya kutengeneza programu za kiteknolojia kama vile vikagua sarufi, vikagua tahajia, usemi kwa maandishi, maandishi kwa usemi na zana za tafsiri ya mashine. Hii inaweza kusababisha kupungua kwa sifa zote za kitamaduni zinazohusishwa na watu wanaozungumza lugha hizi. Ili kuwezesha ukusanyaji wa korasi za maandishi, na uhifadhi wa muda mrefu wa sifa chanya za kitamaduni, mazingatio ya kubuni na utekelezaji wa mfumo wa programu huria wa ukusanyaji na tathmini ya shindano la hadithi fupi mtandaoni unaelezwa. Mfumo huu umeandikwa kwa lugha ya PHP, na unaweza kutumika kwa bei nafuu kwenye seva za mwenyeji zinazopatikana kutoka kwa watoa huduma wengi wa mwenyeji wa Afrika. Hii inaruhusu uwezekano wa ukusanyaji wa hadithi uliogatuliwa, pamoja na urekebishaji, na maboresho ya programu kwa aina tofauti za mashindano ya hadithi fupi. Programu imetumika kwa mashindano mawili ya hadithi fupi katika bara la Afrika kwa lengo la kutoa hadithi zinazofaa kwa watoto. Kufanya shindano mtandaoni kumewezesha ushiriki kutoka maeneo mbalimbali, lakini maingizo mengi yametoka katika nchi za Afrika zenye miundombinu nzuri ya teknolojia ya habari. Kujitayarisha kwa ajili ya mashindano ya tatu kunaendelea.

## Maneno Muhimu

Utoaji wa kazi kwa umati wa kompyuta, Fasihi ya Kiafrika, Uundaji wa Korasi

## 1 Utangulizi

Afrika ina aina nyingi sana za lugha na lahaja za lugha. Nyingi kati ya hizi zina mila tajiri za simulizi, na zimeanza kutumika hivi karibuni tu kwa mawasiliano ya kielektroniki ya maandishi, kama vile mitandao ya kijamii, barua pepe na vikao vya mtandao. Nchi nyingi za Afrika zimechagua kutumia lugha ya Kiingereza au Kifaransa kama lugha ya elimu, hata hivyo mtandao umewezesha upatikanaji wa nafasi za kutoa maoni ya umma, na kwa uhuru huu, watu wameanza kujieleza kwa lugha zao wenyewe - mradi wa Indigenous Tweets (Scannell 2021) unarekodi matumizi ya lugha ambazo hazijaenea katika jukwaa moja la mitandao ya kijamii. Kwa kutarajia mwelekeo huu kuongezeka kwa angalau baadhi ya lugha za Afrika, kutakuwa na hamu na haja ya zana za usindikaji wa lugha za kidijitali kwa lugha za Afrika. Ili kuendeleza zana kama hizo, data za lugha zinahitajika. Njia moja ya kukusanya data hii ni kwa utoaji wa kazi kwa umati. Juhudi za ziada za ukusanyaji wa hadithi fupi za lugha nyingi zinajumuisha StoryWeaver nchini India (Story Weaver 2021) na Kitabu cha Hadithi cha Afrika nchini Afrika Kusini (Saide 2021). Hakuna kati ya hizi kwa sasa ina programu iliyo wazi kwa watu wengine kutumia katika ukusanyaji wa hadithi fupi kwa umati, na zinazingatia tu kusoma na kuandika, bila juhudi nyingi za matumizi ya nyenzo zilizokusanywa kuwezesha maendeleo ya zana za uchakataji wa lugha asilia.

## 2 Mazingatio ya Usanifu wa Jukwaa la Ukusanyaji kwa Umati

Ingawa watu wengi katika Afrika, hutumia simu kwa ajili ya mawasiliano badala ya kompyuta, upatikanaji wa mtandao wa intaneti unaongezeka. Tovuti huwezesha mawasiliano rahisi kwa maandishi marefu kama vile hadithi fupi, na kwa hivyo ni chaguo nzuri la kwanza la jukwaa. Mazingatio zaidi kwa jukwaa linalotegemea wavuti ni:

Lugha nyingi za Afrika zinahusishwa kwa karibu na utambulisho wa kikabila. Hii inaweza kuwa chanzo cha mvutano na imesababisha migogoro. Mtandao unapaswa kuruhusu uwasilishaji usiotambulika na/au uwasilishaji kwa njia ya mwakilishi.

Nchi nyingi za Afrika zinalenga sana lugha za Kiingereza na Kifaransa kama lugha za elimu. Tafsiri kutoka lugha za Kiafrika pia kimsingi imelenga kutafsiri kwa Kiingereza au Kifaransa, hata hivyo lugha nyingi za Kiafrika zinahusiana kwa karibu na zinaweza kuwa na dhana ambazo hazijaelezwa vizuri kwa Kiingereza na Kifaransa, kwa hivyo ni muhimu kuendeleza korpus ambazo zitawezesha uundaji wa zana za tafsiri kati ya lugha za Kiafrika.

Waandishi na watafsiri wengi wanaojitiisha huenda wasijue Kiingereza, kwa hiyo jukwaa la ujitiisho lapaswa lipatikane katika lugha kadhaa, kwa kufaa kabisa kila ujitiisho wa lugha waweza kufanywa.

Kwa kuwa lugha nyingi za Afrika hazitumiwi au hazifundishwi shuleni, uwezo wa lugha ya watu wanaowasilisha huenda usiwe mkubwa sana, lakini wanaweza kuwa na shauku ya kuiboresha. Viungo vya rasilimali za kidijitali zilizopo vinapaswa kupatikana na juhudi zifanyike kuruhusu maoni kuhusu uwasilishaji.

Programu inapaswa kuwa rahisi na ya bei nafuu kutumika ndani ya Afrika ili kuruhusu uandaaji huru wa mashindano ya hadithi fupi.

Programu hiyo inapaswa kuwa rahisi kwa wabunifu wa programu wanaotoka Afrika kuchangia.

Programu inapaswa kadiri inavyowezekana kuheshimu faragha ya watu wanaowasilisha hadithi na tafsiri, na kuwawezesha kuweka taarifa za kibinafsi zinazowatambulisha kuwa za faragha iwapo watachagua kufanya hivyo.

## 3 Utekelezaji wa Jukwaa la Umati wa Kompyuta

Jambo la kwanza kuzingatiwa ni lugha ya programu ya kutumia. Python (Python Software Foundation 2021), Ruby (Ruby Community 2021), PHP (PHP Community 2021) na Javascript (ECMA International 2021) zilizingatiwa. Python na Ruby zina matumizi makubwa katika uundaji wa wavuti, hata hivyo zina uhimili duni wa upangishaji wa pamoja barani Afrika na kwa kawaida zinahitaji seva zenye vipimo vya juu kuliko PHP - uhimili wa upangishaji wa pamoja unaweza kuboreshwa, lakini katika muda uliopangwa wa mradi huu, hili halikuwezekana. Javascript hutumiwa pia katika kutengeneza upande wa maombi ya mtandaoni, zaidi ya kumfanya mteja aunge mkono matumizi ya mtandao wa intaneti, hata hivyo, kwa mara nyingine tena haina uungwaji wa kutosha kwa ajili ya wanachama wake wa Afrika. Kwa hiyo, PHP ilichaguliwa kama lugha ya programu itakayotumika kwa programu ya seva, pamoja na kiasi fulani cha Javascript, hasa ili kuunda kibodi za programu. Watoa huduma wengi wa wingu barani Afrika hutumia programu cPanel (cPanel LLC 2021) kwa upangishaji wa pamoja unaosimamiwa wenye hadi GB 10 za hifadhi kwa bei kati ya $1 na $5 kwa mwezi. Hii ina msaada wa mwenyeji wa maombi ya wavuti ya PHP na database.

Programu hiyo inajumuisha:

Hifadhidata ya hadithi asili pamoja na maelezo ya mawasiliano ya mwandishi au wakala wake

Hifadhidata ya hadithi zilizotafsiriwa, pamoja na maelezo ya mawasiliano ya mtafsiri au wakala wake

Database ya waandishi, watafsiri au mawakala wao na lugha ambazo wanaweza kupiga kura

Hifadhidata yenye kura na maoni kwa kila hadithi asili au hadithi iliyotafsiriwa

Programu ya PHP upande wa seva ili kuruhusu hadithi na tafsiri kutumwa

Vipengele vya HTML na Javascript vya upande wa mteja kuwezesha uingizaji wa herufi maalum kwa kutumia kibodi laini na tafsiri ya tovuti, uwasilishaji wa hadithi, uwasilishaji wa tafsiri, utazamaji wa hadithi na upigaji kura

Tovuti inaweza kutazamwa kwa https://tuvutepamoja.africa. Picha 1 na 2 zinaonyesha ukurasa wa mbele wa tovuti kwa lugha ya Kiingereza na Kiswahili. Picha 3 inaonyesha kibodi nyepesi inayofaa kwa kuingia Yorùbá ambayo ina herufi kadhaa zilizo na msisitizo ambazo watu wengi ambao hawajafundishwa kuandika wanahitaji kuona ili waweze kutumia katika kuandika kwao.

Programu ilitengenezwa kwa uwazi kwa kutumia udhibiti wa matoleo kwenye https://notabug.org/tuvutepamoja na inatolewa chini ya leseni ya jumla ya umma ya GNU (Free Software Foundation 2021b). Repository https://notabug.org inasimamia maendeleo ya GnuSocial (GnuSocial Community 2021), tovuti ya mtandao wa kijamii wa chanzo wazi iliyoandikwa pia katika PHP ambayo inaweza kutafsiriwa katika lugha za Kiafrika. Jaribio lilifanywa kutumia GnuSocial kuwezesha mawasiliano kati ya watu wanaopenda kukuza shindano katika Lugha za Afrika wanazozijua, hata hivyo ushiriki kwenye jukwaa hili ulikuwa mdogo. Kwa sasa jukwaa la mtandaoni linalotumia programu huria FluxBB (FluxBB Community 2021), linatumika kuwezesha mawasiliano ya umma na watu wanaopendezwa na mradi. Jukwaa linapatikana kwa https://ingxoxo.tuvutepamoja.africa/.

p03-patch01.png

Kielelezo 1: Ukurasa wa mbele wa Kiingereza.

p03-01.png

Picha 2: Ukurasa wa mbele kwa Kiswahili.

Kwa wengi wanaoweza kuchangia, kutafsiri programu si jambo la kufurahisha kama kuandika hadithi fupi zao wenyewe, hivyo hili bado halijafanikiwa. Kutafsiri vipeperushi vinavyotangaza shindano la hadithi fupi kulikuwa kazi ndogo na watu wengi walichangia juhudi hii, jambo lililowezesha matumizi ya mitandao ya kijamii na watu walio tayari kukuza lugha yao.

p04-01.png

Picha 3: Kibodi laini - Yorùbá inayoonyeshwa.

## 4 Kazi zaidi

Vikomo vya maneno vilitumika kuonyesha urefu wa mawasilisho yanayokubalika. Hata hivyo, neno katika lugha moja linaweza kumaanisha maneno mengine mengi katika lugha nyingine. Kazi zaidi itahusisha kutafuta kipimo cha kuridhisha cha kukadiria maudhui sawia kati ya lugha badala ya kutumia hesabu za maneno.

Kupiga kura juu ya ufaaji wa hadithi za washiriki kwaweza kuwa ugomvi. Kwa baadhi ya lugha za Afrika ni rahisi kutambua kundi la wataalamu. Kwa wengine, makubaliano juu ya namna ya kuandika lugha, na juu ya lahaja mbalimbali bado yanaendelezwa. Mifano ya jamii kwa ajili ya ushiriki inahitajika ili kuimarisha hili zaidi. Katika nchi nyingi ambapo lugha moja inatawala, kama vile Rwanda, usanifishaji wa lugha umekuwa rahisi kutimiza. Nchi nyingi za Afrika zina lugha nyingi, na baadhi ya lugha zinatumika kuvuka mipaka, jambo linalofanya ushirikiano baina ya serikali uwe wa msaada mkubwa katika juhudi za usanifishaji wa lugha. Ushirikiano na taasisi zinazofuatilia kazi ya usanifishaji wa lugha za Afrika, ungekuwa pia wa msaada, ingawa taasisi nyingi kama hizo, zinapokuwepo mara nyingi hufadhiliwa vibaya. Kwa lugha zenye idadi ndogo ya wazungumzaji ambao ni sehemu ya wachache katika idadi ya watu wa nchi, mashirika ya kitamaduni ya kijamii au vikundi vya mitandao ya kijamii ndio rasilimali pekee inayopatikana na kufikiwa kwa urahisi.

Upigaji kura unafanywa kwa kuwapa waandishi wa hadithi na watafsiri kitambulisho ambacho wanaingiza kwenye tovuti ili waweze kupiga kura zao. Kura zao kisha huhifadhiwa katika hifadhidata tofauti na kitambulisho kwa lengo la kuwezesha kutokujulikana wakati kuna wapiga kura zaidi ya wawili kwa hadithi katika lugha fulani. Ingekuwa vizuri kuboresha mfumo ili uwe umesimbwa kwa njia fiche na msimamizi asiweze kubaini kila mshiriki alipigia nini. Hili ni changamoto ya kiufundi kwa kuwa mtu anaweza pia kutumia kumbukumbu za seva na mihuri ya muda ya hifadhidata kuoanisha shughuli. Hata hivyo, upigaji kura wa kielektroniki umefanywa kwa madhumuni mengine yenye mahitaji makubwa zaidi ya usalama na uthibitishaji wa utambulisho, kwa hivyo inapaswa kuwezekana kujumuisha hili katika programu ya sasa.

Programu imetafsiriwa kwa sehemu katika Kiswahili. Kwa sasa hili linafanywa kwa kuunda orodha ya mifuatano kwa kila kipengele kinachowakabili watumiaji kwenye tovuti. Miradi mingi ya programu huria hutumia faili zilizoandaliwa kwa ajili ya Gettext (Free Software Foundation 2021a) kuhifadhi tafsiri. Ingekuwa vizuri kutumia mfumo kama huo.

Kazi zaidi ya kufanya kibodi za programu kuwa rahisi kutumia pia inahitajika, hasa kwa lugha za Kiegeo-Semiti kama vile Kiamhari. Kibodi laini ziliongezwa kwenye programu ili kuwezesha matumizi ya tahajia ambayo huenda haipatikani kwenye kibodi za kawaida za kompyuta za Kiingereza na Kifaransa zinazopatikana kwenye kompyuta katika nchi nyingi za Afrika. Sio lugha zote zina tahajia sanifu, hivyo marekebisho na ushirikiano na wanaisimu unahitajika ili kufanya hili vizuri. Idadi ya wachangiaji walionyesha kutumia kibodi kwenye simu zao za mkononi ambazo zina herufi zote wanazohitaji kwa lugha zao. Kuwezesha uundaji, uwasilishaji na utazamaji wa hadithi kupitia programu ya simu ya mkononi pamoja na tovuti kunaweza pia kuwa jambo la kuzingatia kuongeza.

Maelezo haya yamejikita hasa katika mazingatio ya kiufundi katika kuunda programu ya kuandaa shindano la mtandaoni la hadithi katika Lugha za Afrika ili kukusanya korasi. Makala ya ziada itachambua korpusi zilizokusanywa, na kujumuisha maoni ya wale waliosaidia kupata, kuandika na kutafsiri hadithi fupi.

## 5 Hitimisho

Inatarajiwa kwamba Lugha za Afrika nyingi zitatoweka, au kuunganishwa na kusanifishwa na lugha nyingine zinazofanana zinazotumika katika eneo lilelile, kwa mfano kama ilivyotokea kwa Runyakitara. Kuandika kumbukumbu za urithi tajiri wa kitamaduni ni muhimu kwa ajili ya kuboresha uelewa na masomo yanayoweza kujifunza kutokana na utofauti wa lugha za sasa. Kurekodi tamaduni pia kunasaidia kuwezesha uelewa wa tamaduni mbalimbali. Enzi ya kidijitali inahitaji zana za kidijitali, na ingawa maendeleo mengi ya kiteknolojia yanayowezesha uwekaji kidijitali yametokea katika nchi zinazozungumza Kiingereza, haya yamebadilishwa kulingana na hali za kienyeji katika nchi zenye miktadha tofauti ya kitamaduni. Mifano mashuhuri ya zana za kidijitali za usindikaji wa lugha asilia zimetokea Urusi, Uchina na Japani, baadhi ya zana hizi zimetengenezwa kwa sehemu na kampuni za kibiashara za mitandao ya kijamii zenye uwepo imara wa kieneo. Kwa kutoa Programu huria kuwezesha mashindano ya hadithi fupi kwa Lugha za Afrika, inatumainiwa kuchochea ukusanyaji zaidi wa hadithi fupi kwa gharama ya chini, kuboresha ujuzi wa kusoma na kuandika katika Lugha za Afrika, na kuendeleza zana za uchakataji wa lugha asilia kwa Lugha za Afrika.

## Shukrani

Kazi hii imenufaika kutokana na ruzuku ya $4,000 iliyotolewa na International Research Development Centre inayosimamiwa na Knowledge for All (https://www.k4all.org) kupitia mpango wa 2020 IndabaX-AI4D Innovation Grant. Mwandishi anawashukuru William Agbo, Liané Van Den Bergh, Audrey Mbogho, Cascious Mofokeng, Itaru Ohta, Kevin Scannell, Juan Steyn, Benito Trollip, Lilian Wanzare, na Constantine Yuka kwa majadiliano mengi yenye manufaa na msaada katika kuendesha mashindano. Mwandishi pia anapenda kuwashukuru watu wote walioshiriki katika mashindano, ama kwa kuwasilisha hadithi, kuwasilisha tafsiri, kuomba michango kutoka kwa wengine, kutafsiri kipeperushi au kukagua hadithi asili na zilizotafsiriwa zilizowasilishwa.

## Marejeo

cPanel LLC (2021), 'cpanel website'. URL: https://www.cpanel.net

ECMA International (2021), 'Javascript specification'. https://www.ecma-

URL: international.org/publications-andstandards/standards/ecma-262/

FluxBB Community (2021), 'Fluxbb website'. URL: https://fluxbb.org

Free Software Foundation (2021a), 'Gettext website'. URL: https://www.gnu.org/software/gettext/

Free Software Foundation (2021b), 'Gnu general public license'. URL: https://www.gnu.org/licenses/gpl-3.0.en.html

GnuSocial Community (2021), 'Gnusocial website'. URL: https://www.gnusocial.rocks/

PHP Community (2021), 'Php website'. URL: https://www.php.net/

Python Software Foundation (2021), 'Python website'. URL: https://www.python.org/

Ruby Community (2021), 'Ruby website'. URL: https://www.ruby-lang.org/

Saide (2021), 'African story book website'. URL: https://www.africanstorybook.org/

Scannell, K. (2021), 'Indigenous tweets'. URL: http://indigenoustweets.com/

Story Weaver (2021), 'Story weaver website'. URL: https://storyweaver.org.in/weave_a_story_campaign
