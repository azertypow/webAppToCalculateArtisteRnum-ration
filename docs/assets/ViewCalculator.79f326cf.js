var P=Object.defineProperty;var K=(s,i,a)=>i in s?P(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a;var h=(s,i,a)=>(K(s,typeof i!="symbol"?i+"":i,a),a);import{I as j,A as G}from"./AppNav.b61ebc5a.js";import{d as E,_ as w,o as n,c,e,n as R,f as q,t as b,F as k,g as x,a as t,w as r,T as U,p as V,b as I,h as z,r as f,i as L,v as X,j as J,k as T,l as A}from"./index.4a1e3167.js";const Q=E({name:"AppCheckbox",components:{},data(){return{showInfo:!1}},props:{activated:{required:!0,type:Boolean},textValue:{required:!0,type:String},description:{required:!1,type:String},info:{required:!1,type:String}}});const W=s=>(V("data-v-1948f26f"),s=s(),I(),s),Y={class:"v-app-checkbox"},Z={class:"v-app-checkbox__label"},ee={class:"v-app-checkbox__text"},se=W(()=>e("br",null,null,-1)),te={class:"v-app-checkbox__description"},ie={key:0,class:"v-app-checkbox__info"};function oe(s,i,a,l,u,_){return n(),c("div",Y,[e("label",Z,[e("span",{class:R(["v-app-checkbox__input",{"is-active":s.activated}])},null,2),e("span",ee,[q(b(s.textValue)+" ",1),s.description?(n(),c(k,{key:0},[se,e("span",te,b(s.description),1)],64)):x("",!0),t(U,{name:"v-transition-fade"},{default:r(()=>[s.info&&s.showInfo?(n(),c("span",ie,b(s.info),1)):x("",!0)]),_:1}),s.info?(n(),c("span",{key:1,class:"v-app-checkbox__i",onMouseenter:i[0]||(i[0]=g=>s.showInfo=!0),onMouseleave:i[1]||(i[1]=g=>s.showInfo=!1)},"i",32)):x("",!0)])])])}const D=w(Q,[["render",oe],["__scopeId","data-v-1948f26f"]]),ae=E({name:"AppSection",components:{},props:{index:{required:!0,type:Number},title:{required:!0,type:String}}});const le={class:"v-app-section"},ne=e("div",{class:"v-app-section__required-info"},"Facultatif",-1),ce={class:"app-g"},pe={class:"app-g__coll-2-12"},ue={class:"v-app-section__index"},_e={class:"app-g__coll-8-12"},re={class:"app-g"},de={class:"app-g__coll-12-12"};function ve(s,i,a,l,u,_){return n(),c("div",le,[ne,e("div",ce,[e("div",pe,[e("div",ue,b(s.index),1)]),e("div",_e,[e("div",null,b(s.title),1)])]),e("div",re,[e("div",de,[z(s.$slots,"default")])])])}const he=w(ae,[["render",ve]]);class B{constructor(i,a,l=!1,u){h(this,"type");this.index=i,this.title=a,this.required=l,this.info=u}}class F extends B{constructor(a,l,u=!1,_){super(a,l,u,_);h(this,"_subSections",[]);h(this,"value");h(this,"type","option");this.index=a,this.title=l,this.required=u,this.info=_}addSubSection(...a){return a.forEach(l=>this._subSections.push(l.setParent(this))),this}get subSections(){return this._subSections}}class H extends B{constructor(a,l,u=!1,_){super(a,l,u,_);h(this,"_subSections",[]);h(this,"type","number");this.index=a,this.title=l,this.required=u,this.info=_}addSubSection(a){return this._subSections.push(a),this}get subSections(){return this._subSections}get value(){return this.subSections.reduce((a,l)=>l.status!=="validate"?a:a+l.value,0)}}class y{constructor(i,a=0,l=()=>({testValue:!0,msg:"Any test"})){h(this,"_multiplier");h(this,"parent");this.text=i,this.value=a,this.validateValueCheck=l}get hasMultiplier(){return this._multiplier!==void 0}get multiplier(){return this._multiplier}setAMultiplier(i,a=""){return this._multiplier={text:a,value:i},this}get status(){return this.value===void 0?"empty":this.validateValueCheck(this.value)?"validate":"error"}get result(){return this._multiplier?this._multiplier.value*this.value:this.value}}class m{constructor(i,a,l){h(this,"_parent");this.uniqueID=i,this.titre=a,this.subtitle=l}setParent(i){return this._parent=i,this}get parent(){return this._parent}get isActive(){var i;return this._parent===void 0?!1:((i=this._parent.value)==null?void 0:i.uniqueID)===this.uniqueID}}const me=E({name:"AppNumberValue",components:{IconPen:j},props:{numberSubsection:{type:Object,default:new y},isCHFValue:{required:!1,default:!1,type:Boolean}}});const be={class:"v-app-number-value"},ge={class:"v-app-number-value__icon"},fe={key:0,class:"v-app-number-value__device"},xe={key:1,class:"v-app-number-value__end"};function Se(s,i,a,l,u,_){const g=f("icon-pen");return n(),c("div",be,[e("div",ge,[t(g)]),s.isCHFValue?(n(),c("div",fe,"CHF")):x("",!0),L(e("input",{class:"v-app-number-value__value",type:"number","onUpdate:modelValue":i[0]||(i[0]=S=>s.numberSubsection.value=S)},null,512),[[X,s.numberSubsection.value]]),s.isCHFValue?(n(),c("div",xe,".\u2014")):x("",!0)])}const M=w(me,[["render",Se],["__scopeId","data-v-92e29abd"]]),$e=J("globalStore",{state(){return{calculatorSections:[new F(1,"Taille de la structure",!0).addSubSection(new m("01","Petit","< 50 000 CHF /ann\xE9e"),new m("02","Moyen","50K\u2013250K CHF /ann\xE9e"),new m("03","Grand","250K\u2013500K CHF /ann\xE9e"),new m("04","Tr\xE8s grande","> 500K CHF /ann\xE9e")),new F(2,"Type d\u2019exposition",!0).addSubSection(new m("01","Solo"),new m("02","2 \xE0 6 pers."),new m("03","7 et plus")),new F(3,"Emploi d\u2019une ou plusieurs \u0153uvres existantes",!0).addSubSection(new m("01","Emploi d\u2019une ou plusieurs \u0153uvres existantes"),new m("02","Emploi d\u2019une ou plusieurs \u0153uvres existantes"),new m("03","Emploi d\u2019une ou plusieurs \u0153uvres existantes")),new H(4,"Dur\xE9e de l'exposition (en mois)").addSubSection(new y),new H(5,"Honoraires de r\xE9alisation (si r\xE9alis\xE9 par l\u2019artiste)").addSubSection(new y("nombre d'heures",0).setAMultiplier(50,"Co\xFBt horaire")).addSubSection(new y("Forfait de r\xE9alisation")),new H(6,"Per Diem").addSubSection(new y(`Per Diem
`,0)).addSubSection(new y("Nombre d'heures"))],calculatorData:{"1_taille_structure":{title:"Taille de la structure",type:"checkbox",value:null,options:{"1_taille_structure_petite":{title:"Petit"},"1_taille_structure_moyen":{title:"Moyen"},"1_taille_structure_grand":{title:"Grand"},"1_taille_structure_large":{title:"Tr\xE8s grande"}}},"2_Type_exposition":{title:"Type d\u2019exposition",type:"checkbox",value:null,options:{"2_Type_exposition_solo":{title:"Solo"},"2_Type_exposition_2a6":{title:"2 \xE0 6 pers."},"2_Type_exposition_7etPlus":{title:"7 et plus"}}},"3_Honoraires_participation":{title:"Honoraires de participation et/ou de conception",type:"checkbox",value:null,options:{"3_Emploi d_une ou plusieurs oeuvres existantes 1":{title:"Emploi d\u2019une ou plusieurs \u0153uvres existantes"},"3_Emploi d_une ou plusieurs oeuvres existantes 2":{title:"Emploi d\u2019une ou plusieurs \u0153uvres existantes"},"3_Emploi d_une ou plusieurs oeuvres existantes 3":{title:"Emploi d\u2019une ou plusieurs \u0153uvres existantes"}}},"4_Duree_de_exposition":{type:"number",value:null}}}}}),ye=E({name:"SubsectionOption",components:{AppCheckbox:D},props:{optionSubsection:{required:!0,type:Object}},methods:{activeThisSubsection(){this.optionSubsection.parent!==void 0&&(this.optionSubsection.parent.value=this.optionSubsection)}}});const Ee=s=>(V("data-v-0f319526"),s=s(),I(),s),we={class:"v-subsection-option app-subsection"},Ce={class:"app-g"},ke=Ee(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),Ve={class:"app-g__coll-6-12"},Ie={class:"app-subsection__result"};function Ne(s,i,a,l,u,_){const g=f("app-checkbox");return n(),c("div",we,[e("div",Ce,[ke,e("div",Ve,[t(g,{onClick:s.activeThisSubsection,activated:s.optionSubsection.isActive,textValue:s.optionSubsection.titre,description:s.optionSubsection.subtitle},null,8,["onClick","activated","textValue","description"])])]),e("h6",Ie,"is active: "+b(s.optionSubsection.isActive),1)])}const Te=w(ye,[["render",Ne],["__scopeId","data-v-0f319526"]]),Ae=E({name:"SubsectionNumber",components:{AppNumberValue:M},props:{numberSubsection:{required:!0,type:Object}}});const O=s=>(V("data-v-fcbcd39a"),s=s(),I(),s),Fe={class:"v-subsection-number app-subsection"},He={key:0,class:"app-g"},qe=O(()=>e("div",{class:"app-g__coll-2-12"},null,-1)),De={class:"app-g__coll-4-12"},Be={class:"app-g__coll-6-12"},Me={class:"app-g"},Oe=O(()=>e("div",{class:"app-g__coll-2-12"},null,-1)),Pe={class:"app-g__coll-4-12"},Ke={key:0},je={class:"app-g__coll-6-12"},Ge={class:"app-subsection__result"};function Re(s,i,a,l,u,_){var S,C;const g=f("app-number-value");return n(),c("div",Fe,[s.numberSubsection.hasMultiplier?(n(),c("div",He,[qe,e("div",De,b((S=s.numberSubsection.multiplier)==null?void 0:S.text),1),e("div",Be,b((C=s.numberSubsection.multiplier)==null?void 0:C.value),1)])):x("",!0),e("div",Me,[Oe,e("div",Pe,[s.numberSubsection.hasMultiplier?(n(),c("span",Ke,"\u21B3")):x("",!0),q(b(s.numberSubsection.text),1)]),e("div",je,[t(g,{numberSubsection:s.numberSubsection,"is-c-h-f-value":!1},null,8,["numberSubsection"])])]),e("h6",Ge,"result: "+b(s.numberSubsection.result),1)])}const Ue=w(Ae,[["render",Re],["__scopeId","data-v-fcbcd39a"]]),ze=E({name:"ViewCalculator",components:{SubsectionNumber:Ue,SubsectionOption:Te,AppNumberValue:M,AppSection:he,AppCheckbox:D,AppNav:G},data(){return{globalStore:$e(),proto:!0,checkeds:[]}},computed:{sections(){return this.globalStore.calculatorSections.map(s=>s.type==="number"?{type:"number",value:s}:{type:"option",value:s})}}});const o=s=>(V("data-v-48b4ffaa"),s=s(),I(),s),Le={class:"v-view-calculator"},Xe=o(()=>e("h2",null,"RECOMMANDATIONS DE R\xC9MUN\xC9RATION POUR UNE EXPOSITION",-1)),Je=o(()=>e("h1",null,"new class system",-1)),Qe=o(()=>e("h1",null,"old class system",-1)),We={class:"app-g"},Ye=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),Ze={class:"app-g__coll-6-12"},es={class:"app-g"},ss=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),ts={class:"app-g__coll-6-12"},is={class:"app-g"},os=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),as={class:"app-g__coll-6-12"},ls={class:"app-g"},ns=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),cs={class:"app-g__coll-6-12"},ps={class:"app-g"},us=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),_s={class:"app-g__coll-6-12"},rs={class:"app-g"},ds=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),vs={class:"app-g__coll-6-12"},hs={class:"app-g"},ms=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),bs={class:"app-g__coll-6-12"},gs={class:"app-g"},fs=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),xs={class:"app-g__coll-6-12"},Ss={class:"app-g"},$s=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),ys={class:"app-g__coll-6-12"},Es={class:"app-g"},ws=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),Cs={class:"app-g__coll-6-12"},ks={class:"app-g"},Vs=o(()=>e("div",{class:"app-g__coll-6-12"},null,-1)),Is={class:"app-g__coll-6-12"},Ns={class:"app-g"},Ts=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle app-circle--is-active"})])],-1)),As=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"Co\xFBt horaire"),e("p",null,"\u21B3 nombre d\u2019heures")],-1)),Fs={class:"app-g__coll-6-12"},Hs={class:"app-g"},qs=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle app-circle--is-active"})])],-1)),Ds=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"Forfait de r\xE9alisation")],-1)),Bs={class:"app-g__coll-6-12"},Ms={class:"app-g"},Os=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),Ps=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"Per Diem")],-1)),Ks={class:"app-g__coll-6-12"},js={class:"app-g"},Gs=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),Rs=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"Nombre d'heures")],-1)),Us={class:"app-g__coll-6-12"},zs={class:"app-g"},Ls=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),Xs=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"Honoraires de montage et transport")],-1)),Js={class:"app-g__coll-6-12"},Qs={class:"app-g"},Ws=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),Ys=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"\u21B3 nombre d\u2019heures")],-1)),Zs={class:"app-g__coll-6-12"},et={class:"app-g"},st=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),tt=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"Forfait par performance"),e("p",null,"\u21B3 nombre d\u2019occurences")],-1)),it={class:"app-g__coll-6-12"},ot={class:"app-g"},at=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),lt=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"\xC9v\xE8nement avec pr\xE9paration"),e("p",null,"\u21B3 nombre d\u2019occurences")],-1)),nt={class:"app-g__coll-6-12"},ct={class:"app-g"},pt=o(()=>e("div",{class:"app-g__coll-2-12"},[e("div",{class:"v-view-calculator__circle-state-container"},[e("div",{class:"app-circle"})])],-1)),ut=o(()=>e("div",{class:"app-g__coll-4-12 app-remove-child-margin"},[e("p",null,"\xC9v\xE8nement sans pr\xE9paration"),e("p",null,"\u21B3 nombre d\u2019occurences")],-1)),_t={class:"app-g__coll-6-12"},rt=o(()=>e("div",{class:"app-g"},[e("div",{class:"app-g__coll-6-12"}),e("div",{class:"app-g__coll-6-12"})],-1));function dt(s,i,a,l,u,_){const g=f("app-nav"),S=f("subsection-number"),C=f("subsection-option"),d=f("app-section"),v=f("app-checkbox"),p=f("app-number-value");return n(),c("div",Le,[t(g),Xe,Je,(n(!0),c(k,null,T(s.sections,$=>(n(),A(d,{title:$.value.title,index:$.value.index},{default:r(()=>[$.type==="number"?(n(!0),c(k,{key:0},T($.value.subSections,N=>(n(),A(S,{numberSubsection:N},null,8,["numberSubsection"]))),256)):x("",!0),$.type==="option"?(n(!0),c(k,{key:1},T($.value.subSections,N=>(n(),A(C,{optionSubsection:N},null,8,["optionSubsection"]))),256)):x("",!0)]),_:2},1032,["title","index"]))),256)),Qe,t(d,{index:1,title:"Taille de la structure"},{default:r(()=>[e("div",We,[Ye,e("div",Ze,[t(v,{textValue:"Petite",description:"< 50 000 CHF /ann\xE9e",activated:!0})])]),e("div",es,[ss,e("div",ts,[t(v,{textValue:"Moyenne",description:"50K\u2013250K CHF /ann\xE9e",activated:!0})])]),e("div",is,[os,e("div",as,[t(v,{textValue:"Grande",description:"250K\u2013500K CHF /ann\xE9e",activated:!0})])]),e("div",ls,[ns,e("div",cs,[t(v,{activated:!0,textValue:"Tr\xE8s",description:"> 500K CHF /ann\xE9e"})])])]),_:1}),t(d,{index:2,title:"Type d\u2019exposition"},{default:r(()=>[e("div",ps,[us,e("div",_s,[t(v,{activated:!0,textValue:"Solo"})])]),e("div",rs,[ds,e("div",vs,[t(v,{activated:!0,textValue:"2 \xE0 6 pers."})])]),e("div",hs,[ms,e("div",bs,[t(v,{activated:!0,textValue:"7 et plus"})])])]),_:1}),t(d,{index:3,title:"Honoraires de participation et/ou de conception"},{default:r(()=>[e("div",gs,[fs,e("div",xs,[t(v,{activated:!0,textValue:"Emploi d\u2019une ou plusieurs \u0153uvres existantes",info:"Si la pi\xE8ce a \xE9t\xE9 produite AVANT la proposition de participation \xE0 l\u2019exposition et qu\u2019il n\u2019y a pas de modifications \xE0 effectuer sur la pi\xE8ce pour la pr\xE9senter, cocher cette case."})])]),e("div",Ss,[$s,e("div",ys,[t(v,{activated:!0,textValue:"Emploi d\u2019une ou plusieurs \u0153uvres existantes"})])]),e("div",Es,[ws,e("div",Cs,[t(v,{activated:!0,textValue:"Emploi d\u2019une ou plusieurs \u0153uvres existantes"})])])]),_:1}),t(d,{index:4,title:"Dur\xE9e de l\u2019exposition (en mois)"},{default:r(()=>[e("div",ks,[Vs,e("div",Is,[t(p,{"is-c-h-f-value":!1})])])]),_:1}),t(d,{index:5,title:"Honoraires de r\xE9alisation (si r\xE9alis\xE9 par l\u2019artiste)"},{default:r(()=>[e("div",Ns,[Ts,As,e("div",Fs,[t(p,{"is-c-h-f-value":!1}),t(p,{"is-c-h-f-value":!1})])]),e("div",Hs,[qs,Ds,e("div",Bs,[t(p,{"is-c-h-f-value":!1})])])]),_:1}),t(d,{index:6,title:"Per Diem"},{default:r(()=>[e("div",Ms,[Os,Ps,e("div",Ks,[t(p,{"is-c-h-f-value":!0})])]),e("div",js,[Gs,Rs,e("div",Us,[t(p,{"is-c-h-f-value":!1})])])]),_:1}),t(d,{index:7,title:"Honoraires de montage et transport"},{default:r(()=>[e("div",zs,[Ls,Xs,e("div",Js,[t(p,{"is-c-h-f-value":!1})])]),e("div",Qs,[Ws,Ys,e("div",Zs,[t(p,{"is-c-h-f-value":!1})])])]),_:1}),t(d,{index:8,title:"Forfait par performance"},{default:r(()=>[e("div",et,[st,tt,e("div",it,[t(p,{"is-c-h-f-value":!1}),t(p,{"is-c-h-f-value":!1})])]),e("div",ot,[at,lt,e("div",nt,[t(p,{"is-c-h-f-value":!1}),t(p,{"is-c-h-f-value":!1})])]),e("div",ct,[pt,ut,e("div",_t,[t(p,{"is-c-h-f-value":!1}),t(p,{"is-c-h-f-value":!1})])])]),_:1}),t(d,{index:9,title:"Forfait texte / 1000 frappes"},{default:r(()=>[rt]),_:1})])}const bt=w(ze,[["render",dt],["__scopeId","data-v-48b4ffaa"]]);export{bt as default};
