import{r as i,j as e}from"./jsx-runtime-BfF-YriY.js";import{D as L}from"./divider-aGSgxrrD.js";import{S as T,F as W,L as C,b as w}from"./meta-CJPP75PB.js";import{I as v,b as k,m as H,T as g,H as _,a as S,t as B,n as $,h as q,B as D,j as b}from"./image-DoYySQdS.js";import{u as M}from"./useParallax-DcGcWQco.js";import{u as R}from"./useScrollToHash-D9KvaZZL.js";import{c as z}from"./clamp-e7DugykH.js";import{f as E}from"./date-DvyCAN0s.js";import{L as P,c as O,O as A}from"./components-Da5qlHjh.js";import{L as y,a as F}from"./list-DSaZp2Y_.js";import{M as U}from"./index-DUWVTWgJ.js";import"./config-CAdQL0d_.js";const X="_post_opidu_39",G="_header_opidu_87",J="_headerText_opidu_109",K="_date_opidu_157",Q="_dateText_opidu_181",V="_titleWordWrapper_opidu_235",Y="_titleWord_opidu_235",Z="_postTitleWord_opidu_1",ee="_banner_opidu_275",se="_bannerImage_opidu_379",te="_bannerImageBlur_opidu_381",oe="_details_opidu_403",ae="_arrow_opidu_417",re="_timecode_opidu_465",ne="_wrapper_opidu_507",ce="_content_opidu_531",a={post:X,header:G,headerText:J,date:K,dateText:Q,titleWordWrapper:V,titleWord:Y,postTitleWord:Z,banner:ee,bannerImage:se,bannerImageBlur:te,details:oe,arrow:ae,timecode:re,wrapper:ne,content:ce},ie=({children:s,title:t,date:o,banner:n,timecode:d})=>{const N=R(),m=i.useRef(),[u,x]=i.useState(null);i.useEffect(()=>{x(E(o))},[o,u]),M(.004,c=>{m.current&&m.current.style.setProperty("--blurOpacity",z(c,0,1))});const p=c=>{c.preventDefault(),N(c.currentTarget.href)},l=`${n==null?void 0:n.split(".")[0]}-placeholder.jpg`;return e.jsxs("article",{className:a.post,children:[e.jsxs(T,{children:[n&&e.jsxs("div",{className:a.banner,ref:m,children:[e.jsx("div",{className:a.bannerImage,children:e.jsx(v,{role:"presentation",src:n,placeholder:l,alt:""})}),e.jsx("div",{className:a.bannerImageBlur,children:e.jsx(v,{role:"presentation",src:l,placeholder:l,alt:""})})]}),e.jsx("header",{className:a.header,children:e.jsxs("div",{className:a.headerText,children:[e.jsx(k,{in:!0,timeout:H(B.base.durationM),children:({visible:c,nodeRef:h})=>e.jsxs("div",{className:a.date,ref:h,children:[e.jsx(L,{notchWidth:"64px",notchHeight:"8px",collapsed:!c}),e.jsx(g,{className:a.dateText,"data-visible":c,children:u})]})}),e.jsx(_,{level:2,as:"h1",className:a.title,"aria-label":t,children:t.split(" ").map((c,h)=>e.jsx("span",{className:a.titleWordWrapper,children:e.jsxs("span",{className:a.titleWord,style:S({delay:$(h*100+100)}),children:[c,h!==t.split(" ").length-1?" ":""]})},`${c}-${h}`))}),e.jsxs("div",{className:a.details,children:[e.jsx(P,{to:"#postContent",className:a.arrow,"aria-label":"Scroll to post content",onClick:p,children:e.jsx("svg",{"aria-hidden":!0,stroke:"currentColor",width:"43",height:"15",viewBox:"0 0 43 15",children:e.jsx("path",{d:"M1 1l20.5 12L42 1",strokeWidth:"2",fill:"none"})})}),e.jsx("div",{className:a.timecode,children:d})]})]})})]}),e.jsx(T,{className:a.wrapper,id:"postContent",tabIndex:-1,children:e.jsx(g,{as:"div",size:"l",className:a.content,children:s})}),e.jsx(W,{})]})},le="_code_1t56o_3",de="_actions_1t56o_317",me="_copyIcon_1t56o_351",pe="_lang_1t56o_395",j={code:le,actions:de,copyIcon:me,lang:pe},he=s=>{var x;const[t,o]=i.useState(!1),{theme:n}=q(),d=i.useRef(),N=i.useRef(),m=(x=s.className)==null?void 0:x.split("-")[1],u=()=>{clearTimeout(N),navigator.clipboard.writeText(d.current.textContent),o(!0),setTimeout(()=>{o(!1)},2e3)};return e.jsxs("div",{className:j.code,"data-theme":n,children:[!!m&&e.jsx(g,{secondary:!0,size:"s",className:j.lang,children:m}),e.jsx("pre",{ref:d,...s}),e.jsx("div",{className:j.actions,children:e.jsx(D,{iconOnly:!0,onClick:u,"aria-label":"Copy",children:e.jsxs("span",{className:j.copyIcon,children:[e.jsx(k,{in:!t,children:({visible:p,nodeRef:l})=>e.jsx(b,{ref:l,icon:"copy","data-visible":p})}),e.jsx(k,{in:t,children:({visible:p,nodeRef:l})=>e.jsx(b,{ref:l,icon:"check","data-visible":p})})]})})})]})},_e="_heading_1ckm2_3",ue="_paragraph_1ckm2_27",xe="_list_1ckm2_27",je="_image_1ckm2_27",ge="_headingLink_1ckm2_37",fe="_code_1ckm2_143",Ne="_pre_1ckm2_179",ke="_hr_1ckm2_211",be="_blockquote_1ckm2_239",Te="_strong_1ckm2_277",ve="_embed_1ckm2_285",r={heading:_e,paragraph:ue,list:xe,image:je,headingLink:ge,code:fe,pre:Ne,hr:ke,blockquote:be,strong:Te,embed:ve},f=({id:s})=>e.jsx(P,{className:r.headingLink,to:`#${s}`,"aria-label":"Link to heading",children:e.jsx(b,{icon:"link"})}),Pe=({children:s,id:t,...o})=>e.jsxs(_,{className:r.heading,id:t,level:2,as:"h1",...o,children:[e.jsx(f,{id:t}),s]}),ye=({children:s,id:t,...o})=>e.jsxs(_,{className:r.heading,id:t,level:3,as:"h2",...o,children:[e.jsx(f,{id:t}),s]}),Ie=({children:s,id:t,...o})=>e.jsxs(_,{className:r.heading,id:t,level:4,as:"h3",...o,children:[e.jsx(f,{id:t}),s]}),Le=({children:s,id:t,...o})=>e.jsxs(_,{className:r.heading,id:t,level:5,as:"h4",...o,children:[e.jsx(f,{id:t}),s]}),We=({children:s,...t})=>{const o=i.Children.count(s)===1,n=i.Children.toArray(s)[0];return o&&n.type===I?s:e.jsx(g,{className:r.paragraph,size:"l",as:"p",...t,children:s})},Ce=({...s})=>e.jsx(C,{...s}),we=s=>e.jsx(y,{className:r.list,...s}),He=s=>e.jsx(y,{className:r.list,ordered:!0,...s}),Se=({children:s,...t})=>e.jsx(F,{...t,children:s}),Be=({children:s,...t})=>e.jsx("code",{className:r.code,...t,children:s}),$e=s=>e.jsx("div",{className:r.pre,children:e.jsx(he,{...s})}),qe=s=>e.jsx("blockquote",{className:r.blockquote,...s}),De=s=>e.jsx("hr",{className:r.hr,...s}),Me=s=>e.jsx("strong",{className:r.strong,...s}),I=({src:s,alt:t,width:o,height:n,...d})=>e.jsx("img",{className:r.image,src:s,loading:"lazy",alt:t,width:o,height:n,...d}),Re=({src:s})=>e.jsx("div",{className:r.embed,children:e.jsx("iframe",{src:s,loading:"lazy",title:"Embed"})}),ze={h1:Pe,h2:ye,h3:Ie,h4:Le,p:We,a:Ce,ul:we,ol:He,li:Se,pre:$e,code:Be,blockquote:qe,hr:De,img:I,strong:Me,Embed:Re};function Ze({data:s}){const{title:t,abstract:o}=s.frontmatter;return w({title:t,description:o,prefix:"",ogImage:s.ogImage})}function es(){const{frontmatter:s,timecode:t}=O();return e.jsx(U,{components:ze,children:e.jsx(ie,{...s,timecode:t,children:e.jsx(A,{})})})}export{es as default,Ze as meta};