var C=Object.defineProperty,T=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var k=(l,n,i)=>n in l?C(l,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[n]=i,v=(l,n)=>{for(var i in n||(n={}))L.call(n,i)&&k(l,i,n[i]);if(f)for(var i of f(n))M.call(n,i)&&k(l,i,n[i]);return l},_=(l,n)=>T(l,S(n));import{E as H,P as D,L as I,v as N,j as o,k as s,l as a,y as u,I as w,m as g,H as j,C as A,B as R,F as p,x,M as $,N as O,G as h}from"./index.af958895.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";const B={data(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",starttime:Date.now(),ended:null,inttime:109090,immediate:!0,viewDetails:!1,score:null,status:{Correct:0,Wrong:0,Not_Answered:0}}},beforeRouteEnter(l,n,i){var t;if((t=JSON.parse(localStorage.getItem("physics_b_m23")))==null?void 0:t.roll){if(l.query.type=="free"){i();return}if(l.query.type=="paid"){let c=l.query.cycle;if(localStorage.getItem(`physics_b_m23_${c}`)){i();return}else{i({name:"Access",query:{cycle:c}});return}}}i({path:"/login"})},methods:{endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0;let l=null,n="examlist";fetch(H+"?type="+n+"&id="+this.$route.params.id).then(i=>i.json()).then(i=>{if(new Date(i.exam.start_time).getTime()>Date.now()){this.$router.push("/");return}this.url="https://script.google.com/macros/s/AKfycbz9OmMxzknSGJ96kpT8vuatKAxa2BLJ6qnC-fsCufUkeiSymRniQAs4OFTiHY8lQ3zZ1Q/exec?sheet="+i.exam.exam.substr(39,44),this.ended=new Date(i.exam.end_time).getTime(),this.timelimit=i.exam.timelimit*6e4,this.immediate=!i.exam.special,this.solutionpdf=i.exam.solve_sheet,l=i.exam.time;let b=JSON.parse(localStorage.getItem("physics_b_m23")).roll;fetch(this.url+"&type=check&phone="+b).then(t=>t.json()).then(t=>{t.message=="exists"||this.ended<Date.now()?(this.result=t.result?t.result:["","Time's up"],fetch(this.url+"&type=question").then(c=>c.json()).then(c=>{this.solution=c.map(e=>(e.question.includes("https://drive.google.com/file/d/")&&(e.question=e.question.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.a.includes("https://drive.google.com/file/d/")&&(e.a=e.a.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.b.includes("https://drive.google.com/file/d/")&&(e.b=e.b.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.c.includes("https://drive.google.com/file/d/")&&(e.c=e.c.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.d.includes("https://drive.google.com/file/")&&(e.d=e.d.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),e.correct.includes("https://drive.google.com/file")&&(e.correct=e.correct.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),_(v({},e),{selected:""})));let d=l;this.inttime=d*6e4,this.end=d*6e4}),this.unknown=!1,this.loading=!1):(this.unknown=!0,fetch(this.url+"&type=question").then(c=>c.json()).then(c=>{let d=localStorage.getItem(`attempt${this.$route.params.id}`);d?localStorage.setItem(`attempt${this.$route.params.id}`,Number(d)+1):localStorage.setItem(`attempt${this.$route.params.id}`,1),this.questions=c.map(r=>(r.question.includes("https://drive.google.com/file/d/")&&(r.question=r.question.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=view&id=").substr(0,80)),r.a.includes("https://drive.google.com/file/d/")&&(r.a=r.a.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),r.b.includes("https://drive.google.com/file/d/")&&(r.b=r.b.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),r.c.includes("https://drive.google.com/file/d/")&&(r.c=r.c.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),r.d.includes("https://drive.google.com/file/")&&(r.d=r.d.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),r.correct.includes("https://drive.google.com/file")&&(r.correct=r.correct.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80)),_(v({},r),{selected:""}))),this.questions=this.questions.sort(()=>Math.random()-.5),this.$route.query.q&&(this.questions=this.questions.slice(0,parseInt(this.$route.query.q)));let e=l;this.inttime=e*6e4,this.end=e*6e4,this.loading=!1,this.showRemaining(this.end+Date.now()),this.autoSubmit()}))})})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let l=this.solution.reduce((n,i)=>(i.correct==i.selected?(n+=10,this.status.Correct+=1):i.selected?this.status.Wrong+=1:this.status.Not_Answered+=1,n),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${l}, Correct ${this.status.Correct} Wrong ${this.status.Wrong} Not Answered ${this.status.Not_Answered}`}).then(()=>{this.retake=!1,this.show=!1,this.questions=this.solution,this.viewDetails=!this.viewDetails,this.inttime=this.solution.length,this.score=l,this.solution=this.solution.map(n=>_(v({},n),{selected:""})),window.scroll(0,0)})},submitAns(){let l=Date.now()-this.starttime;this.eload=!0;let n=this.questions.reduce((d,e)=>(e.correct==e.selected?(d+=10,this.status.Correct+=1):e.selected?this.status.Wrong+=1:this.status.Not_Answered+=1,d),0);clearTimeout(this.timing);let{roll:i,name:b,college:t}=JSON.parse(localStorage.getItem("physics_b_m23")),c=this.questions.map((d,e)=>{let m=[d.a,d.b,d.c,d.d].indexOf(d.selected);return{id:e,s:m}}).filter(d=>d.s>-1);fetch(this.url,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({roll:i,name:b,attempt:localStorage.getItem(`attempt${this.$route.params.id}`)||1,score:n,college:t,duration:l,submission:JSON.stringify(c)})}).then(()=>{clearTimeout(this.timing),parseInt(this.$route.query.q||this.questions.length),this.$swal({icon:"success",title:"Successfully Submitted",text:`You Scored ${n}`}).then(()=>{localStorage.removeItem(`attempt${this.$route.params.id}`),this.viewDetails=!0,this.show=!1,this.score=n,window.scroll(0,0),this.gotoLeaderboard()})})},gotoLeaderboard(){this.$router.replace(`/ranking/${this.$route.params.id}`)},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(l){this.show=!0;const n=setInterval(()=>{const i=l-Date.now();if(i<0){clearInterval(n);return}const b=Math.floor(i/this._days),t=Math.floor(i%this._days/this._hours),c=Math.floor(i%this._hours/this._minutes),d=Math.floor(i%this._minutes/this._seconds);this.second=d<10?"0"+d:d,this.minute=c<10?"0"+c:c,this.hours=t<10?"0"+t:t,this.days=b<10?"0"+b:b},1e3)}},created(){this.getQuestionLink(),window.scrollTo(0,0)},computed:_(v({},D(["user"])),{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},currentTime:()=>I.state.currentTime})},y=l=>($("data-v-2a2bb3eb"),l=l(),O(),l),J={key:0,class:"py-5 mx-auto mt-5 rounded bg-gray-50 md:w-2/3"},V={class:"py-3 text-center"},W={key:0,class:"my-4 text-2xl font-bold text-gray-900 ma-auto"},Y={key:0},z={key:1,class:"text-center text-gray-900"},E={class:"py-5"},F=w(" View Solution "),G=["textContent"],K={key:0,class:"my-5 text-center"},P={key:1,class:"text-center"},U=["textContent"],Z={key:2,class:"text-center"},X=y(()=>a("button",{class:"btn loading btn-circle"},null,-1)),q=[X],ee={key:3,class:"my-4 font-semibold text-center text-gray-900"},te={key:1,class:"pb-10"},oe={class:"py-4 text-center"},se={class:"text-2xl font-bold text-gray-900"},re=y(()=>a("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),ie={class:"mx-2 text-gray-900 md:w-2/3 md:mx-auto"},ne=["src"],le=["innerHTML"],ce={class:"btn btn-sm"},de={class:"mt-2"},ae=["src","onClick"],ue=["innerHTML","onClick"],he=["src","onClick"],me=["innerHTML","onClick"],ge=["src","onClick"],be=["innerHTML","onClick"],pe=["src","onClick"],ve=["innerHTML","onClick"],_e={class:"mb-10 text-center"},ye={key:2,class:"pb-10"},fe={class:"py-4 text-center"},ke={class:"text-2xl font-bold text-gray-900"},xe=y(()=>a("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),we={key:0,class:"mx-2 md:w-2/3 md:mx-auto"},Ce=["src"],Te=["innerHTML"],Se={class:"btn btn-sm"},Le={class:"mt-2"},Me=["src","onClick"],He={key:1,class:"mt-3"},De=["innerHTML","onClick"],Ie=["src","onClick"],Ne=["innerHTML","onClick"],je=["src","onClick"],Ae=["innerHTML","onClick"],Re=["src","onClick"],$e=["innerHTML","onClick"],Oe={key:0,class:"my-2 text-center"},Qe={key:1,class:"mb-10 text-center"},Be=["disabled"],Je={key:3,class:"white--text fixed__timer"},Ve={class:"text-white bg-blue-500 border border-white shadow"},We={key:1,class:"flex items-center justify-center w-full h-screen"},Ye=y(()=>a("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[a("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),a("div",{class:"text-lg"},"Loading ...")],-1)),ze=[Ye];function Ee(l,n,i,b,t,c){const d=N("router-link");return t.loading?(o(),s("div",We,ze)):(o(),s("div",{key:0,onContextmenu:e=>!1},[!t.unknown&&!t.loading&&!t.retake?(o(),s("div",J,[a("div",V,[t.result[1]?(o(),s("h2",W,[t.result[1]!=="Time's up"?(o(),s("span",Y,"You Scored:")):u("",!0),w(" "+g(t.result[1]),1)])):u("",!0),t.result[1]=="Time's up"?(o(),s("p",z,"But you can still give the exam. Click 'Test yourself again'.")):u("",!0),a("div",E,[this.ended<c.currentTime||t.immediate?(o(),j(d,{key:0,to:`/solution/${this.$route.params.id}`,class:"my-2 btn btn-primary"},{default:A(()=>[F]),_:1},8,["to"])):(o(),s("button",{key:1,class:"btn btn-primary",onClick:n[0]||(n[0]=(...e)=>c.endalert&&c.endalert(...e)),textContent:g("View Solution")},null,8,G))])]),!t.retake&&t.solution.length>0?(o(),s("div",K,[R(d,{to:`/ranking/${this.$route.params.id}`,class:"mx-auto my-2 btn btn-primary",text:"View Your Rank"},null,8,["to"])])):u("",!0),!t.retake&&t.solution.length>0?(o(),s("div",P,[a("button",{class:"mx-auto btn btn-primary",onClick:n[1]||(n[1]=(...e)=>c.startRetake&&c.startRetake(...e)),textContent:g("Test Yourself Again")},null,8,U)])):(o(),s("div",Z,q)),!t.retake&&t.solution.length>0?(o(),s("div",ee," Retake exam score will not be recorded ")):u("",!0)])):u("",!0),t.retake?(o(),s("div",te,[a("div",oe,[a("h1",se," Retake Exam - "+g(this.$route.params.id),1),re]),a("div",ie,[(o(!0),s(p,null,x(t.solution,(e,r)=>(o(),s("div",{key:r,class:h(["p-5 mx-auto my-3 text-lg text-gray-900 bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.solution[r].selected}])},[e.question.includes("drive.google.com")?(o(),s("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,ne)):(o(),s("div",{key:1,class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,le)),a("span",ce,"Q No. "+g(r+1),1),a("div",de,[e.a.includes("drive.google.com")?(o(),s("img",{key:0,src:e.a,onClick:m=>t.solution[r].selected=e.a,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`]),alt:""},null,10,ae)):(o(),s(p,{key:1},[e.a?(o(),s("div",{key:0,innerHTML:e.a,onClick:m=>t.solution[r].selected=e.a,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`)},null,10,ue)):u("",!0)],64)),e.b.includes("drive.google.com")?(o(),s("img",{key:2,src:e.b,onClick:m=>t.solution[r].selected=e.b,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`]),alt:""},null,10,he)):(o(),s(p,{key:3},[e.b?(o(),s("div",{key:0,innerHTML:e.b,onClick:m=>t.solution[r].selected=e.b,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`)},null,10,me)):u("",!0)],64)),e.c.includes("drive.google.com")?(o(),s("img",{key:4,src:e.c,onClick:m=>t.solution[r].selected=e.c,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`]),alt:""},null,10,ge)):(o(),s(p,{key:5},[e.c?(o(),s("div",{key:0,innerHTML:e.c,onClick:m=>t.solution[r].selected=e.c,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`)},null,10,be)):u("",!0)],64)),e.d.includes("drive.google.com")?(o(),s("img",{key:6,src:e.d,onClick:m=>t.solution[r].selected=e.d,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`]),alt:""},null,10,pe)):(o(),s(p,{key:7},[e.d?(o(),s("div",{key:0,innerHTML:e.d,onClick:m=>t.solution[r].selected=e.d,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`)},null,10,ve)):u("",!0)],64))])],2))),128)),a("div",_e,[a("button",{onClick:n[2]||(n[2]=(...e)=>c.retakeResult&&c.retakeResult(...e)),class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"}," Submit ")])])])):u("",!0),t.questions.length>0?(o(),s("div",ye,[a("div",fe,[a("h1",ke," Exam - "+g(this.$route.params.id),1),xe]),t.viewDetails?u("",!0):(o(),s("div",we,[(o(!0),s(p,null,x(t.questions,(e,r)=>(o(),s("div",{key:r,class:h(["p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.questions[r].selected}])},[e.question.includes("drive.google.com")?(o(),s("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,Ce)):(o(),s("div",{key:1,class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,Te)),a("span",Se,"Q No. "+g(r+1),1),a("div",Le,[e.a.includes("drive.google.com")?(o(),s("img",{key:0,src:e.a,onClick:m=>t.questions[r].selected=e.a,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`]),alt:""},null,10,Me)):(o(),s("div",He,[e.a?(o(),s("div",{key:0,innerHTML:e.a,onClick:m=>t.questions[r].selected=e.a,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`)},null,10,De)):u("",!0),e.b.includes("drive.google.com")?(o(),s("img",{key:1,src:e.b,onClick:m=>t.questions[r].selected=e.b,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`]),alt:""},null,10,Ie)):(o(),s(p,{key:2},[e.b?(o(),s("div",{key:0,innerHTML:e.b,onClick:m=>t.questions[r].selected=e.b,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`)},null,10,Ne)):u("",!0)],64)),e.c.includes("drive.google.com")?(o(),s("img",{key:3,src:e.c,onClick:m=>t.questions[r].selected=e.c,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`]),alt:""},null,10,je)):(o(),s(p,{key:4},[e.c?(o(),s("div",{key:0,innerHTML:e.c,onClick:m=>t.questions[r].selected=e.c,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`)},null,10,Ae)):u("",!0)],64)),e.d.includes("drive.google.com")?(o(),s("img",{key:5,src:e.d,onClick:m=>t.questions[r].selected=e.d,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`]),alt:""},null,10,Re)):(o(),s(p,{key:6},[e.d?(o(),s("div",{key:0,innerHTML:e.d,onClick:m=>t.questions[r].selected=e.d,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500  ":" bg-white border-2 "}`)},null,10,$e)):u("",!0)],64))]))])],2))),128)),t.viewDetails?(o(),s("div",Oe,[a("button",{onClick:n[3]||(n[3]=(...e)=>c.gotoLeaderboard&&c.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):u("",!0),t.viewDetails?u("",!0):(o(),s("div",Qe,[a("button",{onClick:n[4]||(n[4]=(...e)=>c.submitAns&&c.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},g(t.eload?"Loading...":"Submit"),9,Be)]))]))])):u("",!0),t.show?(o(),s("div",Je,[a("div",Ve,g(t.minute)+" : "+g(t.second),1)])):u("",!0)],32))}var Pe=Q(B,[["render",Ee],["__scopeId","data-v-2a2bb3eb"]]);export{Pe as default};
