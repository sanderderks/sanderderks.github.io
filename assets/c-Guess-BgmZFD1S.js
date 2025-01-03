import{a as J,_ as f}from"./c-Bubble.vue_vue_type_script_setup_true_lang-BShtm6_i.js";import{u as Z,H as ee}from"./c-useScoreInfo-BgUl23Kx.js";import{d as se,aN as te,s as V,r as A,c as H,o as ae,aO as O,M as ne,aP as oe,aQ as re,e as ie,h as le,q as c,D as p,f as de,l as t,n as z,p as d,k as e,m as o,G as k,w as D,O as M,H as I,t as y,R as ue,a4 as ce}from"../bundle.js";import{_ as pe}from"./c-GameSettingsDialog.vue_vue_type_script_setup_true_lang-CZ3EjRkQ.js";import"./c-_plugin-vue_export-helper-DlAUqK2U.js";import"./c-SwitchField.vue_vue_type_script_setup_true_lang-C6J-GyL9.js";import"./c-SelectField.vue_vue_type_script_setup_true_lang-BanvuRMQ.js";import"./c-validation-DokkLKHB.js";var i=(r=>(r[r.HAS_NOT_STARTED=0]="HAS_NOT_STARTED",r[r.HAS_STARTED=1]="HAS_STARTED",r[r.HAS_FINISHED=2]="HAS_FINISHED",r))(i||{});const fe=se("guessStore",()=>{const r=te(),{personalBest:N,highscorePosition:C}=V(r),{setPreviousHighscores:E,updateHighscores:G,sortHighscores:L}=r,j=6,b=A(0),a=A("nothing"),u=A([]),$=H(()=>{let n="";for(const R of a.value)u.value.includes(R)?n+=R:n+="_";return n}),_=H(()=>a.value.replace(" ","").split("").every(n=>u.value.includes(n))),g=H(()=>u.value.filter(n=>!a.value.includes(n)).length),S=H(()=>u.value.length-g.value),h=H(()=>_.value||g.value>=j);ae(()=>{r.$init(O.GUESS_THE_WORD)}),ne(h,n=>{n&&B()});const W=()=>{b.value=0,a.value="nothing",u.value=[],E()},F=()=>{a.value=Q[Math.floor(Math.random()*Q.length)],addEventListener("keydown",w),b.value=1},B=()=>{b.value=2,removeEventListener("keydown",w),_.value&&(T(),oe(re))},w=n=>{n.key.length===1&&n.key.match(/[a-z]/i)&&x(n.key.toLowerCase())},x=n=>{u.value.includes(n)||u.value.push(n)},T=()=>{S.value&&G({score:S.value,penalty:g.value})};return{gameStatus:b,word:a,guessedLetters:u,visibleWord:$,hasGuessedWord:_,mistakes:g,score:S,personalBest:N,highscorePosition:C,$reset:W,start:F,chooseLetter:x,setPreviousHighscores:E,updateGuessHighscore:T,sortHighscores:L}},{persist:{enabled:!0}}),Q=["aarde","achterkant","aanduiden","aantrekkelijk","arbeider","arendsogen","badkamers","balanceren","ballonnen","bankzaken","bedienden","begrafenis","belangrijk","bemiddelen","benodigdheid","berichten","bewoners","bezittingen","bijwerkingen","bliksemstraal","boerderij","boekhouding","brandstoffen","brievenbus","broodjeszaak","bungalows","cadeautjes","carnavalsoptocht","charmeurs","combinatie","creativiteit","dagelijkse","diamanten","dierenpark","dingenlijst","doemscenario","dromenjager","duikboot","eendenkooi","eigenaardig","eigenlijk","fantasie","feestdagen","fluitketel","fotograferen","frisdranken","gezelschap","grensgebied","groenten","haardvuur","handdoeken","herfstblaadje","hoogtevrees","huidskleur","ijsbeer","ijspegels","jachtseizoen","kabeljauw","kampeerterrein","kaarslicht","kanotocht","kartonnen","kathedraal","kijkcijfers","kinderfeest","klaprozen","klimaatverandering","knopenlijst","koelkastdeur","koetsiers","lantaarnpaal","leerling","levensstijl","lichtpunt","luchtvaart","maatschappij","muurklok","nachtmerrie","nieuwsgierig","ontbijttafel","openhaard","overstroming","parkeerplaats","parkeerverbod","pastinaak","picknickbank","regenachtig","reisgidsen","rivierdelta","schoenenkast","sneeuwstorm","sommigen","spijkerbroek","stoelpoten","tafelblad","toevallig","verduidelijking","vrijdagavond","watervogels","winterseizoen"],ke={class:"mt-10"},ge={key:0,class:"w-full flex justify-center"},me={key:1},ve={class:"flex justify-center flex-wrap gap-1"},ye={class:"mt-10 flex flex-col gap-3"},be={class:"flex justify-center gap-1 md:gap-3"},Se={class:"flex justify-center"},_e={class:"whitespace-pre-wrap"},he={key:3,class:"text-center text-xl md:text-3xl font-bold"},we={key:0,class:"text-purple-500"},He={class:"flex justify-center"},Ae={class:"whitespace-pre-wrap"},Ee={key:2,class:"text-blue-500 font-bold"},je={key:3,class:"text-blue-500 font-bold"},xe={key:4,class:"text-blue-500 font-bold"},Te={class:"mt-5 flex flex-wrap gap-3 justify-center"},Re={key:4,class:"flex flex-wrap gap-3 mt-3 justify-center"},Fe=ie({__name:"Guess",setup(r){const N="qwertyuiop".split(""),C="asdfghjkl".split(""),E="zxcvbnm".split(""),G=[N,C,E],L=de(),j=fe(),b=le(),{gameStatus:a,word:u,guessedLetters:$,visibleWord:_,hasGuessedWord:g,mistakes:S,score:h,personalBest:W}=V(j),{firebaseUser:F}=V(b),{currentHighscorePosition:B,hasImprovedHighscorePosition:w,hasImprovedPersonalBest:x}=Z(O.GUESS_THE_WORD),{$reset:T,start:n,chooseLetter:R,updateGuessHighscore:K}=j,P=A(!1),m=A(!1),X=()=>{m.value=!1,n()},U=()=>{m.value=!1,T()},q=Y=>[`
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
        `][Y];return(Y,s)=>(t(),c(J,{class:"!bg-cyan-800 !bg-opacity-50 my-5 !rounded-secondary",title:"Guess the Word"},{right:p(()=>[z(f,{class:"border-none h-fit",type:"neutral",icon:"pi pi-cog",onClick:s[0]||(s[0]=l=>P.value=!0)})]),default:p(()=>[d("div",ke,[e(a)===e(i).HAS_NOT_STARTED?(t(),o("div",ge,[z(f,{class:"w-full md:w-1/2",onClick:X},{default:p(()=>s[7]||(s[7]=[k(" Start ")])),_:1})])):e(a)!==e(i).HAS_FINISHED?(t(),o("div",me,[d("div",ve,[(t(!0),o(D,null,M(e(_),(l,v)=>(t(),o("span",{key:v,class:"text-2xl md:text-4xl font-bold"},I(l),1))),128))]),d("div",ye,[(t(),o(D,null,M(G,l=>d("div",be,[(t(!0),o(D,null,M(l,v=>(t(),c(f,{key:v,class:"h-5 !p-3 md:w-10 md:h-10",type:e($).includes(v)?e(u).includes(v)?"neutral":"danger":"primary",label:v.toUpperCase(),disabled:e(g),onClick:De=>e(R)(v)},null,8,["type","label","disabled","onClick"]))),128))])),64))]),d("div",Se,[d("pre",_e,"                        "+I(q(e(S)))+`
                    `,1)])])):y("",!0),m.value?(t(),c(ee,{key:2,"game-id":e(O).GUESS_THE_WORD},null,8,["game-id"])):e(a)===e(i).HAS_FINISHED?(t(),o("div",he,[e(g)?(t(),o("p",we," Your score: "+I(e(h)),1)):(t(),o(D,{key:1},[s[8]||(s[8]=d("p",{class:"text-red-500"},"You are hanging!",-1)),d("div",He,[d("pre",Ae,"                            "+I(q(e(S)))+`
                        `,1)])],64)),e(w)&&e(B)===1?(t(),o("p",Ee," HIGHSCORE! ")):e(w)?(t(),o("p",je," LEADERBOARD IMPROVEMENT! ")):e(x)?(t(),o("p",xe," PERSONAL BEST! ")):y("",!0)])):y("",!0),d("div",Te,[e(a)!==e(i).HAS_NOT_STARTED&&e(a)!==e(i).HAS_FINISHED?(t(),c(f,{key:0,class:"w-full md:w-1/2",type:"neutral",onClick:U},{default:p(()=>s[9]||(s[9]=[k(" Restart ")])),_:1})):e(a)===e(i).HAS_FINISHED?(t(),c(f,{key:1,class:"w-full md:w-1/2",type:"secondary",onClick:U},{default:p(()=>s[10]||(s[10]=[k(" Play Again ")])),_:1})):y("",!0),!m.value&&(e(a)===e(i).HAS_NOT_STARTED||e(a)===e(i).HAS_FINISHED)?(t(),c(f,{key:2,class:"w-full md:w-1/2",type:"neutral",onClick:s[1]||(s[1]=l=>m.value=!0)},{default:p(()=>s[11]||(s[11]=[k(" View Highscores ")])),_:1})):e(a)===e(i).HAS_NOT_STARTED?(t(),c(f,{key:3,class:"w-full md:w-1/2",type:"neutral",onClick:s[2]||(s[2]=l=>m.value=!1)},{default:p(()=>s[12]||(s[12]=[k(" Go Back ")])),_:1})):e(a)===e(i).HAS_FINISHED?(t(),c(f,{key:4,class:"w-full md:w-1/2",type:"neutral",onClick:s[3]||(s[3]=l=>m.value=!1)},{default:p(()=>s[13]||(s[13]=[k(" View Your Score ")])),_:1})):y("",!0)]),e(a)===e(i).HAS_FINISHED?(t(),o("div",Re,[e(F)?e(h)&&e(W)<e(h)?(t(),c(f,{key:1,class:"w-full md:w-1/2",type:"primary",onClick:s[5]||(s[5]=l=>e(K)())},{default:p(()=>s[16]||(s[16]=[k(" Add To Leaderboard ")])),_:1})):y("",!0):(t(),c(J,{key:0,class:"w-full md:w-1/2 bg-primary-500 bg-opacity-50 !rounded-primary"},{default:p(()=>[s[14]||(s[14]=k(" Please ")),d("a",{class:"cursor-pointer",onClick:s[4]||(s[4]=l=>e(L).push({name:e(ue).LOGIN,params:{redirect:JSON.stringify({name:e(ce).GAMES_RAINWORMS})}}))}," Login "),s[15]||(s[15]=k(" to add your score to the leaderboard. "))]),_:1}))])):y("",!0),z(pe,{"game-id":e(O).GUESS_THE_WORD,"is-open":P.value,"onUpdate:isOpen":s[6]||(s[6]=l=>P.value=l)},null,8,["game-id","is-open"])])]),_:1}))}});export{Fe as default};
