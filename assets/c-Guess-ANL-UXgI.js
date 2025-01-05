import{a as X,_ as k}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BShtm6_i.js";import{u as ee,H as te}from"./c-useScoreInfo-BgUl23Kx.js";import{d as ne,aN as se,s as K,r as S,c as h,o as ae,aO as $,M as oe,aP as ie,aQ as re,e as le,h as de,q as p,D as g,f as ue,l as n,n as W,p as r,k as e,m as i,ad as ce,G as f,w as _,O as G,H as T,t as j,R as pe,a4 as ge}from"../bundle.js";import{_ as ke}from"./c-GameSettingsDialog.vue_vue_type_script_setup_true_lang-CZ3EjRkQ.js";import{_ as fe}from"./c-SelectField.vue_vue_type_script_setup_true_lang-BanvuRMQ.js";import"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-SwitchField.vue_vue_type_script_setup_true_lang-C6J-GyL9.js";import"./c-validation-DokkLKHB.js";var u=(l=>(l[l.HAS_NOT_STARTED=0]="HAS_NOT_STARTED",l[l.HAS_STARTED=1]="HAS_STARTED",l[l.HAS_FINISHED=2]="HAS_FINISHED",l))(u||{});const me=ne("guessStore",()=>{const l=se(),{personalBest:P,highscorePosition:M}=K(l),{setPreviousHighscores:R,updateHighscores:V,sortHighscores:F}=l,b=S(0),H=S("easy"),a=S("nothing"),d=S([]),E=h(()=>H.value==="easy"?ve:he),U=h(()=>{let s="";for(const v of a.value)v===" "?s+=" ":d.value.includes(v)?s+=v:s+="_";return s}),D=h(()=>a.value.replace(/ /g,"").split("").every(s=>d.value.includes(s))),m=h(()=>d.value.filter(s=>!a.value.includes(s)).length),I=100,O=5,z=10,N=6,L=h(()=>m.value*O),A=h(()=>{var t;const s=a.value.length*z,v=((t=d.value.find(o=>a.value.includes(o)))==null?void 0:t.length)??0*z,B=(N-m.value)*z;return s+v+B}),x=h(()=>I+A.value+L.value),Z=h(()=>D.value||m.value>=N);ae(()=>{l.$init($.GUESS_THE_WORD)}),oe(Z,s=>{s&&J()});const q=()=>{b.value=0,a.value="nothing",d.value=[],R()},Y=()=>{a.value=E.value[Math.floor(Math.random()*E.value.length)].toLowerCase(),addEventListener("keydown",y),b.value=1},J=()=>{b.value=2,removeEventListener("keydown",y),D.value&&(C(),ie(re))},y=s=>{s.key.length===1&&s.key.match(/[a-z]/i)&&c(s.key.toLowerCase())},c=s=>{d.value.includes(s)||d.value.push(s)},C=()=>{x.value&&V({score:x.value,bonus:A.value,penalty:L.value,difficulty:H.value})};return{gameStatus:b,difficulty:H,word:a,guessedLetters:d,visibleWord:U,hasGuessedWord:D,mistakes:m,score:x,personalBest:P,highscorePosition:M,$reset:q,start:Y,chooseLetter:c,setPreviousHighscores:R,updateGuessHighscore:C,sortHighscores:F}},{persist:{enabled:!0}}),ve=["aarde","achterkant","aanduiden","aantrekkelijk","arbeider","arendsogen","badkamers","balanceren","ballonnen","bankzaken","bedienden","begrafenis","belangrijk","bemiddelen","benodigdheid","berichten","bewoners","bezittingen","bijwerkingen","bliksemstraal","boerderij","boekhouding","brandstoffen","brievenbus","broodjeszaak","bungalows","cadeautjes","carnavalsoptocht","charmeurs","combinatie","creativiteit","dagelijkse","diamanten","dierenpark","dingenlijst","doemscenario","dromenjager","duikboot","eendenkooi","eigenaardig","eigenlijk","fantasie","feestdagen","fluitketel","fotograferen","frisdranken","gezelschap","grensgebied","groenten","haardvuur","handdoeken","herfstblaadje","hoogtevrees","huidskleur","ijsbeer","ijspegels","jachtseizoen","kabeljauw","kampeerterrein","kaarslicht","kanotocht","kartonnen","kathedraal","kijkcijfers","kinderfeest","klaprozen","klimaatverandering","knopenlijst","koelkastdeur","koetsiers","lantaarnpaal","leerling","levensstijl","lichtpunt","luchtvaart","maatschappij","muurklok","nachtmerrie","nieuwsgierig","ontbijttafel","openhaard","overstroming","parkeerplaats","parkeerverbod","pastinaak","picknickbank","regenachtig","reisgidsen","rivierdelta","schoenenkast","sneeuwstorm","sommigen","spijkerbroek","stoelpoten","tafelblad","toevallig","verduidelijking","vrijdagavond","watervogels","winterseizoen"],he=["De kat zit op het dak","Het regent pijpenstelen","Beter een vogel in de hand","De boom verliest zijn bladeren","Een appel per dag houdt de dokter weg","De hond blafte naar de postbode","Schoonheid zit van binnen","De maan schijnt door de bomen","Wie niet waagt die niet wint","Een speld in een hooiberg zoeken","De koek is op","Een nieuwe dag breekt aan","Hij sloeg de spijker op zijn kop","Liever een half ei dan een lege dop","De tijd vliegt als je plezier hebt","Water stroomt altijd naar het laagste punt","Het gras is altijd groener aan de overkant","Oefening baart kunst","Een vogel in de lucht vang je niet","Je mag een gegeven paard niet in de bek kijken","De klok tikt onvermijdelijk door","Het schip is met man en muis vergaan","Hij maakt van een mug een olifant","De weg naar succes is zelden recht","Zij heeft haar handen vol aan de kinderen","De zon schijnt na de regen","Wie wind zaait zal storm oogsten","Het mes snijdt aan twee kanten","Een dubbeltje op zijn kant","De kat uit de boom kijken","Een roos zonder doornen bestaat niet","Rome is niet in één dag gebouwd","De aap komt uit de mouw","Een oude vos verliest zijn streken niet","De koe bij de horens vatten","Het leven is een kwestie van keuzes maken","Over smaak valt niet te twisten","Stille wateren hebben diepe gronden","De vroege vogel vangt de worm","Blaffende honden bijten niet","Iedereen moet zijn eigen kruis dragen","Zij houdt de touwtjes stevig in handen","Niet geschoten is altijd mis","Het feest was een groot succes","Wie het kleine niet eert is het grote niet weerd","Een schip op het droge trekken","Ze liep op wolkjes van geluk","De soep wordt nooit zo heet gegeten als ze wordt opgediend","Veel handen maken licht werk","De kruik gaat zolang te water tot ze barst","Zij is de spin in het web","Hij loopt met zijn ziel onder de arm","De tijd heelt alle wonden","Hij raapte al zijn moed bij elkaar","Zij spraken klare taal","Een bliksembezoek aan de stad","Hij viel met de deur in huis","Zijn hart klopte in zijn keel","De bal ligt nu bij jou","Het ijs is gebroken","De puzzel viel eindelijk op zijn plaats","Hij heeft het licht gezien","Ze waren door het dolle heen","De stilte was oorverdovend","Een storm in een glas water","Een slag om de arm houden","Zij waagde de sprong in het diepe","Hij zat met de handen in het haar","Het zonnetje in huis zijn","De kogel is door de kerk"],be={class:"mt-10"},we={key:0,class:"w-full flex flex-wrap justify-center"},je={key:1},ye={class:"flex justify-center flex-wrap gap-x-10 gap-y-3"},_e={class:"flex flex-wrap gap-1"},Se={class:"mt-10 flex flex-col gap-3"},He={class:"flex justify-center gap-1 md:gap-3"},Ee={class:"flex justify-center"},De={class:"whitespace-pre-wrap"},ze={key:3,class:"text-center text-xl md:text-3xl font-bold"},Ae={class:"underline"},xe={class:"flex justify-center"},Te={class:"text-left whitespace-pre-wrap"},Re={class:"text-purple-500"},Ie={key:0,class:"text-blue-500 font-bold"},Oe={key:1,class:"text-blue-500 font-bold"},Ne={key:2,class:"text-blue-500 font-bold"},Le={class:"mt-5 flex flex-wrap gap-3 justify-center"},Ce={key:4,class:"flex flex-wrap gap-3 mt-3 justify-center"},Ue=le({__name:"Guess",setup(l){const P="qwertyuiop".split(""),M="asdfghjkl".split(""),R="zxcvbnm".split(""),V=[P,M,R],F=ue(),b=me(),H=de(),{gameStatus:a,difficulty:d,word:E,guessedLetters:U,visibleWord:D,hasGuessedWord:m,mistakes:I,score:O,personalBest:z}=K(b),{firebaseUser:N}=K(H),{currentHighscorePosition:L,hasImprovedHighscorePosition:A,hasImprovedPersonalBest:x}=ee($.GUESS_THE_WORD),{$reset:Z,start:q,chooseLetter:Y,updateGuessHighscore:J}=b,y=S(!1),c=S(!1),C=()=>{c.value=!1,q()},s=()=>{c.value=!1,Z()},v=B=>[`
           -----
           |   |
               |
               |
               |
               |
        =========
        `,`
           -----
           |   |
           O   |
               |
               |
               |
        =========
        `,`
           -----
           |   |
           O   |
           |   |
               |
               |
        =========
        `,`
           -----
           |   |
           O   |
          /|   |
               |
               |
        =========
        `,`
           -----
           |   |
           O   |
          /|\\  |
               |
               |
        =========
        `,`
           -----
           |   |
           O   |
          /|\\  |
          /    |
               |
        =========
        `,`
           -----
           |   |
           O   |
          /|\\  |
          / \\  |
               |
        =========
        `][B];return(B,t)=>(n(),p(X,{class:"!bg-cyan-800 !bg-opacity-50 my-5 !rounded-secondary",title:"Guess the Word",description:"Words and sentences are in Dutch."},{right:g(()=>[W(k,{class:"border-none h-fit",type:"neutral",icon:"pi pi-cog",onClick:t[0]||(t[0]=o=>y.value=!0)})]),default:g(()=>[r("div",be,[e(a)===e(u).HAS_NOT_STARTED?(n(),i("div",we,[W(fe,{class:"w-full md:w-1/2",name:"difficulty",label:"Difficulty",modelValue:e(d),"onUpdate:modelValue":t[1]||(t[1]=o=>ce(d)?d.value=o:null),options:[{label:"Easy",value:"easy"},{label:"Hard",value:"hard"}]},null,8,["modelValue"]),W(k,{class:"w-full md:w-1/2",onClick:C},{default:g(()=>t[8]||(t[8]=[f(" Start ")])),_:1})])):e(a)!==e(u).HAS_FINISHED?(n(),i("div",je,[r("div",ye,[(n(!0),i(_,null,G(e(D).split(" "),o=>(n(),i("div",_e,[(n(!0),i(_,null,G(o,(w,Q)=>(n(),i("span",{key:Q,class:"text-2xl md:text-4xl font-bold"},T(w),1))),128))]))),256))]),r("div",Se,[(n(),i(_,null,G(V,o=>r("div",He,[(n(!0),i(_,null,G(o,w=>(n(),p(k,{key:w,class:"h-5 !p-3 md:w-10 md:h-10",type:e(U).includes(w)?e(E).includes(w)?"neutral":"danger":"primary",label:w.toUpperCase(),disabled:e(m),onClick:Q=>e(Y)(w)},null,8,["type","label","disabled","onClick"]))),128))])),64))]),r("div",Ee,[r("pre",De,"                        "+T(v(e(I)))+`
                    `,1)])])):j("",!0),c.value?(n(),p(te,{key:2,"game-id":e($).GUESS_THE_WORD},null,8,["game-id"])):e(a)===e(u).HAS_FINISHED?(n(),i("div",ze,[r("p",Ae,T(e(E)),1),e(m)?(n(),i(_,{key:1},[r("p",Re,"Your score: "+T(e(O)),1),e(A)&&e(L)===1?(n(),i("p",Ie," HIGHSCORE! ")):e(A)?(n(),i("p",Oe," LEADERBOARD IMPROVEMENT! ")):e(x)?(n(),i("p",Ne," PERSONAL BEST! ")):j("",!0)],64)):(n(),i(_,{key:0},[t[9]||(t[9]=r("p",{class:"text-red-500"},"You are hanging!",-1)),r("div",xe,[r("pre",Te,"                            "+T(v(e(I)))+`
                        `,1)])],64))])):j("",!0),r("div",Le,[e(a)!==e(u).HAS_NOT_STARTED&&e(a)!==e(u).HAS_FINISHED?(n(),p(k,{key:0,class:"w-full md:w-1/2",type:"neutral",onClick:s},{default:g(()=>t[10]||(t[10]=[f(" Restart ")])),_:1})):e(a)===e(u).HAS_FINISHED?(n(),p(k,{key:1,class:"w-full md:w-1/2",type:"secondary",onClick:s},{default:g(()=>t[11]||(t[11]=[f(" Play Again ")])),_:1})):j("",!0),!c.value&&(e(a)===e(u).HAS_NOT_STARTED||e(a)===e(u).HAS_FINISHED)?(n(),p(k,{key:2,class:"w-full md:w-1/2",type:"neutral",onClick:t[2]||(t[2]=o=>c.value=!0)},{default:g(()=>t[12]||(t[12]=[f(" View Highscores ")])),_:1})):e(a)===e(u).HAS_NOT_STARTED?(n(),p(k,{key:3,class:"w-full md:w-1/2",type:"neutral",onClick:t[3]||(t[3]=o=>c.value=!1)},{default:g(()=>t[13]||(t[13]=[f(" Go Back ")])),_:1})):e(a)===e(u).HAS_FINISHED?(n(),p(k,{key:4,class:"w-full md:w-1/2",type:"neutral",onClick:t[4]||(t[4]=o=>c.value=!1)},{default:g(()=>t[14]||(t[14]=[f(" View Your Score ")])),_:1})):j("",!0)]),e(a)===e(u).HAS_FINISHED?(n(),i("div",Ce,[e(N)?e(m)&&e(z)<e(O)?(n(),p(k,{key:1,class:"w-full md:w-1/2",type:"primary",onClick:t[6]||(t[6]=o=>e(J)())},{default:g(()=>t[17]||(t[17]=[f(" Add To Leaderboard ")])),_:1})):j("",!0):(n(),p(X,{key:0,class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:g(()=>[t[15]||(t[15]=f(" Please ")),r("a",{class:"cursor-pointer",onClick:t[5]||(t[5]=o=>e(F).push({name:e(pe).LOGIN,params:{redirect:JSON.stringify({name:e(ge).GAMES_RAINWORMS})}}))}," Login "),t[16]||(t[16]=f(" to add your score to the leaderboard. "))]),_:1}))])):j("",!0),W(ke,{"game-id":e($).GUESS_THE_WORD,"is-open":y.value,"onUpdate:isOpen":t[7]||(t[7]=o=>y.value=o)},null,8,["game-id","is-open"])])]),_:1}))}});export{Ue as default};
