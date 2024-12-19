import{r as m,j as se}from"./jsx-runtime-BfF-YriY.js";import{g as ut,u as dt,k as et,i as pt,c as ct,b as mt,m as ht,L as ft,t as bt}from"./image-DoYySQdS.js";import{S as gt}from"./meta-CJPP75PB.js";import{u as yt}from"./useWindowSize-CCgmKmhO.js";import{R as Et,s as wt,E as _t,l as $,Q as tt,e as ke,O as He,u as nt,V as re,v as Te,T as Pe,w as Rt,H as Se,F as Ue,x as Ye,b as De,y as Tt,z as Pt,B as St,I as At,W as xt,h as rt,o as Mt,S as vt,J as Lt,K as jt,A as kt,D as Dt,r as Ot,c as Ct,a as It,N as Ve,q as Nt,X as Ft,m as zt,Y as Ht,t as Yt,Z as Bt,_ as Ut}from"./three-BzMM05cl.js";import{c as ot}from"./clamp-e7DugykH.js";import{t as Gt}from"./throttle-BgiUmwhn.js";import{u as _e}from"./use-spring-O0f1mO_4.js";import"./components-Da5qlHjh.js";import"./config-CAdQL0d_.js";import"./index-BbOBZ9K4.js";var Vt=Object.defineProperty,Zt=(h,o,y)=>o in h?Vt(h,o,{enumerable:!0,configurable:!0,writable:!0,value:y}):h[o]=y,d=(h,o,y)=>(Zt(h,typeof o!="symbol"?o+"":o,y),y);const Be=new Et,at=new wt,Xt=Math.cos(70*(Math.PI/180)),st=(h,o)=>(h%o+o)%o;class Wt extends _t{constructor(o,y){super(),d(this,"object"),d(this,"domElement"),d(this,"enabled",!0),d(this,"target",new $),d(this,"minDistance",0),d(this,"maxDistance",1/0),d(this,"minZoom",0),d(this,"maxZoom",1/0),d(this,"minPolarAngle",0),d(this,"maxPolarAngle",Math.PI),d(this,"minAzimuthAngle",-1/0),d(this,"maxAzimuthAngle",1/0),d(this,"enableDamping",!1),d(this,"dampingFactor",.05),d(this,"enableZoom",!0),d(this,"zoomSpeed",1),d(this,"enableRotate",!0),d(this,"rotateSpeed",1),d(this,"enablePan",!0),d(this,"panSpeed",1),d(this,"screenSpacePanning",!0),d(this,"keyPanSpeed",7),d(this,"zoomToCursor",!1),d(this,"autoRotate",!1),d(this,"autoRotateSpeed",2),d(this,"reverseOrbit",!1),d(this,"reverseHorizontalOrbit",!1),d(this,"reverseVerticalOrbit",!1),d(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),d(this,"mouseButtons",{LEFT:Te.ROTATE,MIDDLE:Te.DOLLY,RIGHT:Te.PAN}),d(this,"touches",{ONE:Pe.ROTATE,TWO:Pe.DOLLY_PAN}),d(this,"target0"),d(this,"position0"),d(this,"zoom0"),d(this,"_domElementKeyEvents",null),d(this,"getPolarAngle"),d(this,"getAzimuthalAngle"),d(this,"setPolarAngle"),d(this,"setAzimuthalAngle"),d(this,"getDistance"),d(this,"listenToKeyEvents"),d(this,"stopListenToKeyEvents"),d(this,"saveState"),d(this,"reset"),d(this,"update"),d(this,"connect"),d(this,"dispose"),this.object=o,this.domElement=y,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>w.phi,this.getAzimuthalAngle=()=>w.theta,this.setPolarAngle=t=>{let n=st(t,2*Math.PI),p=w.phi;p<0&&(p+=2*Math.PI),n<0&&(n+=2*Math.PI);let S=Math.abs(n-p);2*Math.PI-S<S&&(n<p?n+=2*Math.PI:p+=2*Math.PI),O.phi=n-p,e.update()},this.setAzimuthalAngle=t=>{let n=st(t,2*Math.PI),p=w.theta;p<0&&(p+=2*Math.PI),n<0&&(n+=2*Math.PI);let S=Math.abs(n-p);2*Math.PI-S<S&&(n<p?n+=2*Math.PI:p+=2*Math.PI),O.theta=n-p,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",X),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",X),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(W),e.update(),E=c.NONE},this.update=(()=>{const t=new $,n=new $(0,1,0),p=new tt().setFromUnitVectors(o.up,n),S=p.clone().invert(),Y=new $,le=new tt,ge=2*Math.PI;return function(){const Qe=e.object.position;p.setFromUnitVectors(o.up,n),S.copy(p).invert(),t.copy(Qe).sub(e.target),t.applyQuaternion(p),w.setFromVector3(t),e.autoRotate&&E===c.NONE&&q(J()),e.enableDamping?(w.theta+=O.theta*e.dampingFactor,w.phi+=O.phi*e.dampingFactor):(w.theta+=O.theta,w.phi+=O.phi);let ue=e.minAzimuthAngle,de=e.maxAzimuthAngle;isFinite(ue)&&isFinite(de)&&(ue<-Math.PI?ue+=ge:ue>Math.PI&&(ue-=ge),de<-Math.PI?de+=ge:de>Math.PI&&(de-=ge),ue<=de?w.theta=Math.max(ue,Math.min(de,w.theta)):w.theta=w.theta>(ue+de)/2?Math.max(ue,w.theta):Math.min(de,w.theta)),w.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,w.phi)),w.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(Q,e.dampingFactor):e.target.add(Q),e.zoomToCursor&&u||e.object.isOrthographicCamera?w.radius=ne(w.radius):w.radius=ne(w.radius*z),t.setFromSpherical(w),t.applyQuaternion(S),Qe.copy(e.target).add(t),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(O.theta*=1-e.dampingFactor,O.phi*=1-e.dampingFactor,Q.multiplyScalar(1-e.dampingFactor)):(O.set(0,0,0),Q.set(0,0,0));let ve=!1;if(e.zoomToCursor&&u){let Le=null;if(e.object instanceof ke&&e.object.isPerspectiveCamera){const je=t.length();Le=ne(je*z);const ze=je-Le;e.object.position.addScaledVector(A,ze),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const je=new $(i.x,i.y,0);je.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/z)),e.object.updateProjectionMatrix(),ve=!0;const ze=new $(i.x,i.y,0);ze.unproject(e.object),e.object.position.sub(ze).add(je),e.object.updateMatrixWorld(),Le=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Le!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Le).add(e.object.position):(Be.origin.copy(e.object.position),Be.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Be.direction))<Xt?o.lookAt(e.target):(at.setFromNormalAndCoplanarPoint(e.object.up,e.target),Be.intersectPlane(at,e.target))))}else e.object instanceof He&&e.object.isOrthographicCamera&&(ve=z!==1,ve&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/z)),e.object.updateProjectionMatrix()));return z=1,u=!1,ve||Y.distanceToSquared(e.object.position)>U||8*(1-le.dot(e.object.quaternion))>U?(e.dispatchEvent(W),Y.copy(e.object.position),le.copy(e.object.quaternion),ve=!1,!0):!1}})(),this.connect=t=>{t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Me),e.domElement.addEventListener("pointerdown",F),e.domElement.addEventListener("pointercancel",f),e.domElement.addEventListener("wheel",be)},this.dispose=()=>{var t,n,p,S,Y,le;(t=e.domElement)==null||t.removeEventListener("contextmenu",Me),(n=e.domElement)==null||n.removeEventListener("pointerdown",F),(p=e.domElement)==null||p.removeEventListener("pointercancel",f),(S=e.domElement)==null||S.removeEventListener("wheel",be),(Y=e.domElement)==null||Y.ownerDocument.removeEventListener("pointermove",B),(le=e.domElement)==null||le.ownerDocument.removeEventListener("pointerup",R),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",X)};const e=this,W={type:"change"},T={type:"start"},b={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let E=c.NONE;const U=1e-6,w=new nt,O=new nt;let z=1;const Q=new $,x=new re,k=new re,ee=new re,H=new re,D=new re,r=new re,s=new re,_=new re,g=new re,A=new $,i=new re;let u=!1;const a=[],l={};function J(){return 2*Math.PI/60/60*e.autoRotateSpeed}function oe(){return Math.pow(.95,e.zoomSpeed)}function q(t){e.reverseOrbit||e.reverseHorizontalOrbit?O.theta+=t:O.theta-=t}function L(t){e.reverseOrbit||e.reverseVerticalOrbit?O.phi+=t:O.phi-=t}const me=(()=>{const t=new $;return function(p,S){t.setFromMatrixColumn(S,0),t.multiplyScalar(-p),Q.add(t)}})(),V=(()=>{const t=new $;return function(p,S){e.screenSpacePanning===!0?t.setFromMatrixColumn(S,1):(t.setFromMatrixColumn(S,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(p),Q.add(t)}})(),I=(()=>{const t=new $;return function(p,S){const Y=e.domElement;if(Y&&e.object instanceof ke&&e.object.isPerspectiveCamera){const le=e.object.position;t.copy(le).sub(e.target);let ge=t.length();ge*=Math.tan(e.object.fov/2*Math.PI/180),me(2*p*ge/Y.clientHeight,e.object.matrix),V(2*S*ge/Y.clientHeight,e.object.matrix)}else Y&&e.object instanceof He&&e.object.isOrthographicCamera?(me(p*(e.object.right-e.object.left)/e.object.zoom/Y.clientWidth,e.object.matrix),V(S*(e.object.top-e.object.bottom)/e.object.zoom/Y.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function te(t){e.object instanceof ke&&e.object.isPerspectiveCamera||e.object instanceof He&&e.object.isOrthographicCamera?z/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Re(t){e.object instanceof ke&&e.object.isPerspectiveCamera||e.object instanceof He&&e.object.isOrthographicCamera?z*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function ye(t){if(!e.zoomToCursor||!e.domElement)return;u=!0;const n=e.domElement.getBoundingClientRect(),p=t.clientX-n.left,S=t.clientY-n.top,Y=n.width,le=n.height;i.x=p/Y*2-1,i.y=-(S/le)*2+1,A.set(i.x,i.y,1).unproject(e.object).sub(e.object.position).normalize()}function ne(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function ae(t){x.set(t.clientX,t.clientY)}function ie(t){ye(t),s.set(t.clientX,t.clientY)}function he(t){H.set(t.clientX,t.clientY)}function Ee(t){k.set(t.clientX,t.clientY),ee.subVectors(k,x).multiplyScalar(e.rotateSpeed);const n=e.domElement;n&&(q(2*Math.PI*ee.x/n.clientHeight),L(2*Math.PI*ee.y/n.clientHeight)),x.copy(k),e.update()}function we(t){_.set(t.clientX,t.clientY),g.subVectors(_,s),g.y>0?te(oe()):g.y<0&&Re(oe()),s.copy(_),e.update()}function fe(t){D.set(t.clientX,t.clientY),r.subVectors(D,H).multiplyScalar(e.panSpeed),I(r.x,r.y),H.copy(D),e.update()}function Ae(t){ye(t),t.deltaY<0?Re(oe()):t.deltaY>0&&te(oe()),e.update()}function Oe(t){let n=!1;switch(t.code){case e.keys.UP:I(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:I(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:I(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:I(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function Ce(){if(a.length==1)x.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);x.set(t,n)}}function Ie(){if(a.length==1)H.set(a[0].pageX,a[0].pageY);else{const t=.5*(a[0].pageX+a[1].pageX),n=.5*(a[0].pageY+a[1].pageY);H.set(t,n)}}function P(){const t=a[0].pageX-a[1].pageX,n=a[0].pageY-a[1].pageY,p=Math.sqrt(t*t+n*n);s.set(0,p)}function M(){e.enableZoom&&P(),e.enablePan&&Ie()}function j(){e.enableZoom&&P(),e.enableRotate&&Ce()}function G(t){if(a.length==1)k.set(t.pageX,t.pageY);else{const p=Ge(t),S=.5*(t.pageX+p.x),Y=.5*(t.pageY+p.y);k.set(S,Y)}ee.subVectors(k,x).multiplyScalar(e.rotateSpeed);const n=e.domElement;n&&(q(2*Math.PI*ee.x/n.clientHeight),L(2*Math.PI*ee.y/n.clientHeight)),x.copy(k)}function Z(t){if(a.length==1)D.set(t.pageX,t.pageY);else{const n=Ge(t),p=.5*(t.pageX+n.x),S=.5*(t.pageY+n.y);D.set(p,S)}r.subVectors(D,H).multiplyScalar(e.panSpeed),I(r.x,r.y),H.copy(D)}function N(t){const n=Ge(t),p=t.pageX-n.x,S=t.pageY-n.y,Y=Math.sqrt(p*p+S*S);_.set(0,Y),g.set(0,Math.pow(_.y/s.y,e.zoomSpeed)),te(g.y),s.copy(_)}function v(t){e.enableZoom&&N(t),e.enablePan&&Z(t)}function ce(t){e.enableZoom&&N(t),e.enableRotate&&G(t)}function F(t){var n,p;e.enabled!==!1&&(a.length===0&&((n=e.domElement)==null||n.ownerDocument.addEventListener("pointermove",B),(p=e.domElement)==null||p.ownerDocument.addEventListener("pointerup",R)),Fe(t),t.pointerType==="touch"?xe(t):C(t))}function B(t){e.enabled!==!1&&(t.pointerType==="touch"?Ne(t):K(t))}function R(t){var n,p,S;$e(t),a.length===0&&((n=e.domElement)==null||n.releasePointerCapture(t.pointerId),(p=e.domElement)==null||p.ownerDocument.removeEventListener("pointermove",B),(S=e.domElement)==null||S.ownerDocument.removeEventListener("pointerup",R)),e.dispatchEvent(b),E=c.NONE}function f(t){$e(t)}function C(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case Te.DOLLY:if(e.enableZoom===!1)return;ie(t),E=c.DOLLY;break;case Te.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;he(t),E=c.PAN}else{if(e.enableRotate===!1)return;ae(t),E=c.ROTATE}break;case Te.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;ae(t),E=c.ROTATE}else{if(e.enablePan===!1)return;he(t),E=c.PAN}break;default:E=c.NONE}E!==c.NONE&&e.dispatchEvent(T)}function K(t){if(e.enabled!==!1)switch(E){case c.ROTATE:if(e.enableRotate===!1)return;Ee(t);break;case c.DOLLY:if(e.enableZoom===!1)return;we(t);break;case c.PAN:if(e.enablePan===!1)return;fe(t);break}}function be(t){e.enabled===!1||e.enableZoom===!1||E!==c.NONE&&E!==c.ROTATE||(t.preventDefault(),e.dispatchEvent(T),Ae(t),e.dispatchEvent(b))}function X(t){e.enabled===!1||e.enablePan===!1||Oe(t)}function xe(t){switch(Je(t),a.length){case 1:switch(e.touches.ONE){case Pe.ROTATE:if(e.enableRotate===!1)return;Ce(),E=c.TOUCH_ROTATE;break;case Pe.PAN:if(e.enablePan===!1)return;Ie(),E=c.TOUCH_PAN;break;default:E=c.NONE}break;case 2:switch(e.touches.TWO){case Pe.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;M(),E=c.TOUCH_DOLLY_PAN;break;case Pe.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;j(),E=c.TOUCH_DOLLY_ROTATE;break;default:E=c.NONE}break;default:E=c.NONE}E!==c.NONE&&e.dispatchEvent(T)}function Ne(t){switch(Je(t),E){case c.TOUCH_ROTATE:if(e.enableRotate===!1)return;G(t),e.update();break;case c.TOUCH_PAN:if(e.enablePan===!1)return;Z(t),e.update();break;case c.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;v(t),e.update();break;case c.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ce(t),e.update();break;default:E=c.NONE}}function Me(t){e.enabled!==!1&&t.preventDefault()}function Fe(t){a.push(t)}function $e(t){delete l[t.pointerId];for(let n=0;n<a.length;n++)if(a[n].pointerId==t.pointerId){a.splice(n,1);return}}function Je(t){let n=l[t.pointerId];n===void 0&&(n=new re,l[t.pointerId]=n),n.set(t.pageX,t.pageY)}function Ge(t){const n=t.pointerId===a[0].pointerId?a[1]:a[0];return l[n.pointerId]}y!==void 0&&this.connect(y),this.update()}}class qt extends Rt{constructor(o){super(o),this.type=Se}parse(o){const c=function(r,s){switch(r){case 1:console.error("THREE.RGBELoader Read Error: "+(s||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(s||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(s||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(s||""))}return-1},O=`
`,z=function(r,s,_){s=s||1024;let A=r.pos,i=-1,u=0,a="",l=String.fromCharCode.apply(null,new Uint16Array(r.subarray(A,A+128)));for(;0>(i=l.indexOf(O))&&u<s&&A<r.byteLength;)a+=l,u+=l.length,A+=128,l+=String.fromCharCode.apply(null,new Uint16Array(r.subarray(A,A+128)));return-1<i?(_!==!1&&(r.pos+=u+i+1),a+l.slice(0,i)):!1},Q=function(r){const s=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,g=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*FORMAT=(\S+)\s*$/,i=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,u={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let a,l;if(r.pos>=r.byteLength||!(a=z(r)))return c(1,"no header found");if(!(l=a.match(s)))return c(3,"bad initial token");for(u.valid|=1,u.programtype=l[1],u.string+=a+`
`;a=z(r),a!==!1;){if(u.string+=a+`
`,a.charAt(0)==="#"){u.comments+=a+`
`;continue}if((l=a.match(_))&&(u.gamma=parseFloat(l[1])),(l=a.match(g))&&(u.exposure=parseFloat(l[1])),(l=a.match(A))&&(u.valid|=2,u.format=l[1]),(l=a.match(i))&&(u.valid|=4,u.height=parseInt(l[1],10),u.width=parseInt(l[2],10)),u.valid&2&&u.valid&4)break}return u.valid&2?u.valid&4?u:c(3,"missing image size specifier"):c(3,"missing format specifier")},x=function(r,s,_){const g=s;if(g<8||g>32767||r[0]!==2||r[1]!==2||r[2]&128)return new Uint8Array(r);if(g!==(r[2]<<8|r[3]))return c(3,"wrong scanline width");const A=new Uint8Array(4*s*_);if(!A.length)return c(4,"unable to allocate buffer space");let i=0,u=0;const a=4*g,l=new Uint8Array(4),J=new Uint8Array(a);let oe=_;for(;oe>0&&u<r.byteLength;){if(u+4>r.byteLength)return c(1);if(l[0]=r[u++],l[1]=r[u++],l[2]=r[u++],l[3]=r[u++],l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=g)return c(3,"bad rgbe scanline format");let q=0,L;for(;q<a&&u<r.byteLength;){L=r[u++];const V=L>128;if(V&&(L-=128),L===0||q+L>a)return c(3,"bad scanline data");if(V){const I=r[u++];for(let te=0;te<L;te++)J[q++]=I}else J.set(r.subarray(u,u+L),q),q+=L,u+=L}const me=g;for(let V=0;V<me;V++){let I=0;A[i]=J[V+I],I+=g,A[i+1]=J[V+I],I+=g,A[i+2]=J[V+I],I+=g,A[i+3]=J[V+I],i+=4}oe--}return A},k=function(r,s,_,g){const A=r[s+3],i=Math.pow(2,A-128)/255;_[g+0]=r[s+0]*i,_[g+1]=r[s+1]*i,_[g+2]=r[s+2]*i,_[g+3]=1},ee=function(r,s,_,g){const A=r[s+3],i=Math.pow(2,A-128)/255;_[g+0]=Ye.toHalfFloat(Math.min(r[s+0]*i,65504)),_[g+1]=Ye.toHalfFloat(Math.min(r[s+1]*i,65504)),_[g+2]=Ye.toHalfFloat(Math.min(r[s+2]*i,65504)),_[g+3]=Ye.toHalfFloat(1)},H=new Uint8Array(o);H.pos=0;const D=Q(H);if(D!==-1){const r=D.width,s=D.height,_=x(H.subarray(H.pos),r,s);if(_!==-1){let g,A,i;switch(this.type){case Ue:i=_.length/4;const u=new Float32Array(i*4);for(let l=0;l<i;l++)k(_,l*4,u,l*4);g=u,A=Ue;break;case Se:i=_.length/4;const a=new Uint16Array(i*4);for(let l=0;l<i;l++)ee(_,l*4,a,l*4);g=a,A=Se;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:r,height:s,data:g,header:D.string,gamma:D.gamma,exposure:D.exposure,type:A}}}return null}setDataType(o){return this.type=o,this}load(o,y,e,W){function T(b,c){switch(b.type){case Ue:case Se:"colorSpace"in b?b.colorSpace="srgb-linear":b.encoding=3e3,b.minFilter=De,b.magFilter=De,b.generateMipmaps=!1,b.flipY=!0;break}y&&y(b,c)}return super.load(o,T,e,W)}}class Kt extends Tt{constructor(o){super(o),this.hdrLoader=new qt,this.type=Se}load(o,y,e,W){typeof o=="string"?o=[o]:Array.isArray(o)||(console.warn("THREE.HDRCubeTextureLoader signature has changed. Use .setDataType() instead."),this.setDataType(o),o=y,y=e,e=W,W=arguments[4]);const T=new Pt;switch(T.type=this.type,T.type){case Ue:case Se:"colorSpace"in T?T.colorSpace="srgb-linear":T.encoding=3e3,T.minFilter=De,T.magFilter=De,T.generateMipmaps=!1;break}const b=this;let c=0;function E(U,w,O,z){new St(b.manager).setPath(b.path).setResponseType("arraybuffer").setWithCredentials(b.withCredentials).load(o[U],function(Q){c++;const x=b.hdrLoader.parse(Q);if(x){if(x.data!==void 0){const k=new At(x.data,x.width,x.height);k.type=T.type,"colorSpace"in k?k.colorSpace=T.SRGBColorSpace:k.encoding=T.encoding,k.format=T.format,k.minFilter=T.minFilter,k.magFilter=T.magFilter,k.generateMipmaps=T.generateMipmaps,T.images[U]=k}c===6&&(T.needsUpdate=!0,w&&w(T))}},O,z)}for(let U=0;U<o.length;U++)E(U,y,e,W);return T}setDataType(o){return this.type=o,this.hdrLoader.setDataType(o),this}}const $t="/assets/earth-DvZudj9K.glb",Jt="/assets/milkyway-nx-Ds_hwpSC.hdr",Qt="/assets/milkyway-ny-BqhFvupA.hdr",en="/assets/milkyway-nz-D6l6T-pv.hdr",tn="/assets/milkyway-px-BjIdbMt0.hdr",nn="/assets/milkyway-py-BD6pEbZF.hdr",rn="/assets/milkyway-pz-Bx3WFS88.hdr",on="/assets/milkyway-Vkpv7LbT.jpg",an="_earth_4tqjk_1",sn="_loader_4tqjk_15",cn="_viewport_4tqjk_43",ln="_canvas_4tqjk_65",un="_labels_4tqjk_103",dn="_label_4tqjk_103",pn="_vignette_4tqjk_163",mn="_sections_4tqjk_187",hn="_section_4tqjk_187",pe={earth:an,loader:sn,viewport:cn,canvas:ln,labels:un,label:dn,vignette:pn,sections:mn,section:hn},Ke={x:0,y:0,z:2},Ze=(h,o,y)=>h+y*(o-h),it=h=>Object.keys(h).map(o=>parseFloat(Math.round(h[o]*100)/100).toFixed(2)).join(", "),Xe=h=>!h||!h.camera?Ke:{x:h.camera[0],y:h.camera[1],z:h.camera[2]},fn=(h,o)=>{const y=(e=0)=>Math.round((e+Number.EPSILON)*100)/100;return y(h==null?void 0:h.x)===y(o==null?void 0:o.x)&&y(h==null?void 0:h.y)===y(o==null?void 0:o.y)&&y(h==null?void 0:h.z)===y(o==null?void 0:o.z)},We={stiffness:80,damping:40,mass:2,restSpeed:.001,restDelta:.001},qe={stiffness:40,damping:30,mass:2,restSpeed:.001,restDelta:.001},bn={stiffness:40,damping:30},lt=m.createContext({}),vn=({position:h=[0,0,0],scale:o=1,hideMeshes:y=[],labels:e=[],className:W,children:T})=>{const[b,c]=m.useState(!1),[E,U]=m.useState(!1),[w,O]=m.useState(!1),[z,Q]=m.useState(!1),x=m.useRef([]),k=m.useRef(),ee=m.useRef(),H=m.useRef(),D=m.useRef(),r=m.useRef(),s=m.useRef(),_=m.useRef(),g=m.useRef(),A=m.useRef(),i=m.useRef(),u=m.useRef(),a=m.useRef(),l=ut(H),J=m.useRef(),oe=m.useRef(Xe(x.current[0])),q=m.useRef([]),L=m.useRef(),me=m.useRef(),V=m.useRef(),I=m.useRef(),{width:te,height:Re}=yt(),ye=dt(),ne=_e(0,We),ae=_e(0,We),ie=_e(0,We),he=_e(0,qe),Ee=_e(0,qe),we=_e(0,qe),fe=_e(0,bn),Ae=m.useCallback(()=>{if(!l){cancelAnimationFrame(J.current);return}J.current=requestAnimationFrame(Ae);const P=_.current.getDelta();a.current.update(P),L.current.update(),r.current.render(D.current,s.current),q.current.forEach(M=>{const{element:j,position:G,sprite:Z}=M,N=new $(...G),v=s.current.position.distanceTo(i.current.position),F=s.current.position.distanceTo(Z.position)>v;N.project(s.current),N.x=Math.round((.5+N.x/2)*window.innerWidth),N.y=Math.round((.5-N.y/2)*window.innerHeight),j.style.setProperty("--posX",et(N.x)),j.style.setProperty("--posY",et(N.y)),F?j.dataset.occluded=!0:j.dataset.occluded=!1})},[l]);m.useEffect(()=>{I.current=!0;const{innerWidth:P,innerHeight:M}=window;r.current=new xt({canvas:H.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),r.current.setPixelRatio(1),r.current.outputColorSpace=rt,r.current.toneMapping=Mt,s.current=new ke(54,P/M,.1,100),s.current.position.x=oe.current.x,s.current.position.y=oe.current.y,s.current.position.z=oe.current.z,s.current.lookAt(0,0,0),ne.set(s.current.position.x,!1),ae.set(s.current.position.y,!1),ie.set(s.current.position.z,!1),D.current=new vt,_.current=new Lt,A.current=new jt;const j=new kt(2236962,.05),G=new Dt(16777215,1.5);G.position.set(3,0,1);const Z=[j,G];return Z.forEach(N=>D.current.add(N)),L.current=new Wt(s.current,H.current),L.current.enableZoom=!1,L.current.enablePan=!1,L.current.enableDamping=!1,L.current.rotateSpeed=.5,()=>{I.current=!1,cancelAnimationFrame(J.current),Ot(Z),Ct(D.current),It(r.current)}},[]),m.useEffect(()=>{const P=()=>{U(!0),ne.stop(),ae.stop(),ie.stop()},M=()=>{ne.set(s.current.position.x,!1),ae.set(s.current.position.y,!1),ie.set(s.current.position.z,!1),U(!1)};return L.current.addEventListener("start",P),L.current.addEventListener("end",M),()=>{L.current.removeEventListener("start",P),L.current.removeEventListener("end",M)}},[ne,ae,ie]),m.useEffect(()=>{if(!b)return;const P=Ve("Chunk",i.current),M=Ve("Atmosphere",i.current),j=(f,C)=>{s.current.position[f]=C},G=ne.on("change",f=>j("x",f)),Z=ae.on("change",f=>j("y",f)),N=ie.on("change",f=>j("z",f)),v=(f,C)=>{P.position[f]=C},ce=he.on("change",f=>v("x",f)),F=Ee.on("change",f=>v("y",f)),B=we.on("change",f=>v("z",f)),R=fe.on("change",f=>{M.material.opacity=f});return()=>{G(),Z(),N(),ce(),F(),B(),R()}},[ne,ae,ie,he,Ee,we,b,fe]),m.useEffect(()=>{te<=pt.tablet&&(L.current.enabled=!1)},[te]),m.useEffect(()=>{if(b)return;const P=new Kt,M=new Nt(r.current);M.compileCubemapShader();const j=async()=>{const v=await zt.loadAsync($t);i.current=v.scene,u.current=v.animations,a.current=new Ht(i.current),a.current.timeScale=.1,i.current.traverse(async ce=>{const{material:F,name:B}=ce;B==="Atmosphere"&&(F.alphaMap=F.map),F&&await r.current.initTexture(F)}),i.current.position.x=h[0],i.current.position.y=h[1],i.current.position.z=h[2],i.current.scale.x=o,i.current.scale.y=o,i.current.scale.z=o},G=async()=>{const v=await P.loadAsync([Jt,Qt,en,tn,nn,rn]);v.magFilter=De,me.current=M.fromCubemap(v),M.dispose(),await r.current.initTexture(me.current.texture)},Z=async()=>{const v=await Yt.loadAsync(on);v.mapping=Bt,v.colorSpace=rt,D.current.background=v,await r.current.initTexture(v)},N=async()=>{await Promise.all([Z(),G(),j()]),i.current.traverse(({material:v})=>{v&&(v.envMap=me.current.texture,v.needsUpdate=!0)}),I.current&&c(!0)};m.startTransition(()=>{N(),setTimeout(()=>{Q(!0)},1e3)})},[b,h,o]),m.useEffect(()=>(b&&!V.current&&(D.current.add(i.current),V.current=!0),b&&l&&(O(!0),Ae()),()=>{cancelAnimationFrame(J.current)}),[Ae,l,b]),m.useEffect(()=>{b&&(ee.current.innerHTML="",q.current=e.map(P=>{const M=document.createElement("div");M.classList.add(pe.label),M.dataset.hidden=!0,M.style.setProperty("--delay",`${P.delay||0}ms`),M.textContent=P.text,ee.current.appendChild(M);const j=new Ft;return j.position.set(...P.position),j.scale.set(60,60,1),{element:M,...P,sprite:j}}))},[e,b]),m.useEffect(()=>{r.current.setSize(te,Re),s.current.aspect=te/Re,s.current.updateProjectionMatrix()},[te,Re]),m.useEffect(()=>{const P=H.current,M=j=>{const{innerWidth:G,innerHeight:Z}=window,N=it(s.current.position);console.info({cameraPosition:N}),g.current=new re(j.clientX/G*2-1,-(j.clientY/Z)*2+1),A.current.setFromCamera(g.current,s.current);const v=A.current.intersectObjects(D.current.children,!0);if(v.length>0){const ce=it(v[0].point);console.info({clickPosition:ce})}};return()=>{P.removeEventListener("click",M)}},[]);const Oe=m.useCallback(()=>{if(!k.current)return;const{offsetTop:P}=k.current,{innerHeight:M}=window,j=window.scrollY-P;let G;const Z=F=>{const B=x.current[F].meshes;i.current.traverse(R=>{const{name:f}=R,C=Ve("Chunk",i.current),K=B==null?void 0:B.includes(f),be=y==null?void 0:y.includes(f);if(K)if(f==="Atmosphere")R.visible=!0,fe.set(1);else if(f==="Chunk"){const X=new $(-.4,.4,.4);R.visible=!0,ye?R.position.set(...X.toArray()):(he.set(X.x),Ee.set(X.y),we.set(X.z))}else f==="EarthFull"&&C.visible?R.visible=!1:R.visible=!0;else if(be&&!K)if(f==="Atmosphere")fe.set(0);else if(f==="Chunk"){const X=new $(0,0,0);fn(X,C.position)&&(R.visible=!1),he.set(X.x),Ee.set(X.y),we.set(X.z)}else f==="EarthPartial"&&C.visible?R.visible=!0:R.visible=!1})},N=F=>{const B=x.current[F].animations;ye||(u.current.forEach((R,f)=>{B.find(C=>C.includes(f.toString()))||a.current.clipAction(R).reset().stop()}),u.current.length&&x.current[F].animations&&B.forEach(R=>{const f=R.split(":"),C=u.current[Number(f[0])],K=a.current.clipAction(C);(!f[1]||f[1]!=="loop")&&(K.clampWhenFinished=!0,K.loop=Ut),K.play()}))},v=F=>{q.current.forEach(R=>{R.hidden&&(R.element.dataset.hidden=!0,R.element.setAttribute("aria-hidden",!0))}),x.current[F].labels.forEach(R=>{q.current.filter(C=>C.text===R).forEach(C=>{C.element.dataset.hidden=!1,C.element.setAttribute("aria-hidden",!1)})})};requestAnimationFrame(()=>{const F=x.current.length-1,B=Math.floor(j/M),R=ot(B,0,F),f=x.current[R],C=x.current[R+1],K=Xe(f)||Ke,be=Xe(C)||Ke,X=(j-M*R)/M,xe=ot(X,0,1),Ne=Ze(K.x,be.x,xe),Me=Ze(K.y,be.y,xe),Fe=Ze(K.z,be.z,xe);if(G!==K&&x.current.length&&f&&(Z(R),N(R),v(R)),G=K,!E){if(ye){s.current.position.set(Ne,Me,Fe);return}ne.set(Ne),ae.set(Me),ie.set(Fe)}})},[ne,ae,ie,he,Ee,we,E,y,fe,ye]);m.useEffect(()=>{const P=Gt(Oe,100);return b&&l&&window.addEventListener("scroll",P),()=>{window.removeEventListener("scroll",P)}},[Oe,l,b,fe]);const Ce=m.useCallback(P=>{x.current=[...x.current,P]},[]),Ie=m.useCallback(P=>{x.current=x.current.filter(M=>M!==P)},[]);return se.jsx(lt.Provider,{value:{registerSection:Ce,unregisterSection:Ie},children:se.jsxs("div",{className:ct(pe.earth,W),ref:k,children:[se.jsxs("div",{className:pe.viewport,children:[se.jsx("canvas",{className:pe.canvas,"data-visible":b&&w,"data-grabbing":E,ref:H}),se.jsx("div",{className:pe.labels,"aria-live":"polite",ref:ee}),se.jsx("div",{className:pe.vignette})]}),se.jsx("div",{className:pe.sections,children:T}),se.jsx(mt,{unmount:!0,in:!b&&z,timeout:ht(bt.base.durationL),children:P=>se.jsx(gt,{className:pe.loader,"data-visible":P,children:se.jsx(ft,{})})})]})})},Ln=m.memo(({children:h,scrim:o,scrimReverse:y,className:e,camera:W=[0,0,0],animations:T=[],meshes:b=[],labels:c=[]})=>{const{registerSection:E,unregisterSection:U}=m.useContext(lt),w=m.useRef(),O=JSON.stringify(T)+JSON.stringify(W)+JSON.stringify(c)+JSON.stringify(b);return m.useEffect(()=>{const z={camera:W,animations:T,meshes:b,labels:c,sectionRef:w};return E(z),()=>{U(z)}},[O,E,U]),se.jsx("div",{className:ct(pe.section,e),"data-scrim":o,"data-scrim-reverse":y,ref:w,children:h})});export{vn as Earth,Ln as EarthSection};
