var dl=Object.defineProperty;var pl=(r,e,t)=>e in r?dl(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Tn=(r,e,t)=>(pl(r,typeof e!="symbol"?e+"":e,t),t);import{n as fn,s as Rt,q as ml,r as po,v as gl,w as as,x as je,y as Ht,z as os,A as hn,S as Ut,i as Bt,h as Gn,u as Vn,o as Hn,p as Wn,t as be,d as Ee,B as zt,c as Ve,m as He,f as We,e as In,k as Fn,b as Xe,C as _l,D as An,E as sr,F as ar,g as qe,G as mo,H as mr,I as ls,J as cs,a as bt,K as xl,L as vl,M as Ts,N as As,O as Ml,P as go,Q as _o,R as Cs,U as yl,T as bl}from"../Title.c674269d.js";import{H as Sl}from"../header.63472437.js";const Xn=[];function xo(r,e){return{subscribe:lt(r,e).subscribe}}function lt(r,e=fn){let t;const n=new Set;function i(a){if(Rt(r,a)&&(r=a,t)){const l=!Xn.length;for(const c of n)c[1](),Xn.push(c,r);if(l){for(let c=0;c<Xn.length;c+=2)Xn[c][0](Xn[c+1]);Xn.length=0}}}function s(a){i(a(r))}function o(a,l=fn){const c=[a,l];return n.add(c),n.size===1&&(t=e(i)||fn),a(r),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function wl(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return xo(t,o=>{let a=!1;const l=[];let c=0,u=fn;const h=()=>{if(c)return;u();const m=e(n?l[0]:l,o);s?o(m):u=gl(m)?m:fn},f=i.map((m,_)=>ml(m,d=>{l[_]=d,c&=~(1<<_),a&&h()},()=>{c|=1<<_}));return a=!0,h(),function(){po(f),u(),a=!1}})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const us="150",qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},El=0,Ls=1,Tl=2,vo=1,Mo=2,Pi=3,yn=0,Dt=1,xn=2,Mn=0,fi=1,Ps=2,Ds=3,Rs=4,Al=5,li=100,Cl=101,Ll=102,Is=103,Fs=104,Pl=200,Dl=201,Rl=202,Il=203,yo=204,bo=205,Fl=206,Ol=207,Nl=208,zl=209,Ul=210,Bl=0,kl=1,Gl=2,Jr=3,Vl=4,Hl=5,Wl=6,jl=7,So=0,Xl=1,ql=2,$t=0,Yl=1,Zl=2,Kl=3,wo=4,Jl=5,Eo=300,pi=301,mi=302,Qr=303,$r=304,or=306,es=1e3,Wt=1001,ts=1002,ut=1003,Os=1004,gr=1005,Ot=1006,Ql=1007,Ri=1008,Bn=1009,$l=1010,ec=1011,To=1012,tc=1013,Nn=1014,zn=1015,gi=1016,nc=1017,ic=1018,hi=1020,rc=1021,Nt=1023,sc=1024,ac=1025,Un=1026,_i=1027,oc=1028,lc=1029,cc=1030,uc=1031,fc=1033,_r=33776,xr=33777,vr=33778,Mr=33779,Ns=35840,zs=35841,Us=35842,Bs=35843,hc=36196,ks=37492,Gs=37496,Vs=37808,Hs=37809,Ws=37810,js=37811,Xs=37812,qs=37813,Ys=37814,Zs=37815,Ks=37816,Js=37817,Qs=37818,$s=37819,ea=37820,ta=37821,yr=36492,dc=36283,na=36284,ia=36285,ra=36286,bn=3e3,Ue=3001,pc=3200,mc=3201,fs=0,gc=1,Kt="srgb",Ii="srgb-linear",Ao="display-p3",br=7680,_c=519,sa=35044,aa="300 es",ns=1035;class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sr=Math.PI/180,oa=180/Math.PI;function Oi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[r&255]+ft[r>>8&255]+ft[r>>16&255]+ft[r>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function xc(r,e){return(r%e+e)%e}function wr(r,e,t){return(1-t)*r+t*e}function la(r){return(r&r-1)===0&&r!==0}function vc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Bi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function At(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],_=n[8],d=i[0],p=i[3],g=i[6],v=i[1],x=i[4],w=i[7],S=i[2],L=i[5],F=i[8];return s[0]=o*d+a*v+l*S,s[3]=o*p+a*x+l*L,s[6]=o*g+a*w+l*F,s[1]=c*d+u*v+h*S,s[4]=c*p+u*x+h*L,s[7]=c*g+u*w+h*F,s[2]=f*d+m*v+_*S,s[5]=f*p+m*x+_*L,s[8]=f*g+m*w+_*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,_=t*h+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/_;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(a*n-i*o)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*s-a*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Er.makeScale(e,t)),this}rotate(e){return this.premultiply(Er.makeRotation(-e)),this}translate(e,t){return this.premultiply(Er.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new vt;function Co(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Fi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],m=s[o+1],_=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==_){let p=1-a;const g=l*f+c*m+u*_+h*d,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const S=Math.sqrt(x),L=Math.atan2(S,g*v);p=Math.sin(p*L)/S,a=Math.sin(a*L)/S}const w=a*v;if(l=l*p+f*w,c=c*p+m*w,u=u*p+_*w,h=h*p+d*w,p===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-a*m,e[t+2]=c*_+u*m+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),m=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ca.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ca.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tr.copy(this).projectOnVector(e),this.sub(Tr)}reflect(e){return this.sub(Tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new N,ca=new kn;function di(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ar(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Mc=new vt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),yc=new vt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),vn=new N;function bc(r){return r.convertSRGBToLinear(),vn.set(r.r,r.g,r.b).applyMatrix3(yc),r.setRGB(vn.x,vn.y,vn.z)}function Sc(r){return vn.set(r.r,r.g,r.b).applyMatrix3(Mc),r.setRGB(vn.x,vn.y,vn.z).convertLinearToSRGB()}const wc={[Ii]:r=>r,[Kt]:r=>r.convertSRGBToLinear(),[Ao]:bc},Ec={[Ii]:r=>r,[Kt]:r=>r.convertLinearToSRGB(),[Ao]:Sc},_t={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Ii},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=wc[e],i=Ec[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Zn;class Lo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=Fi("canvas")),Zn.width=e.width,Zn.height=e.height;const n=Zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=di(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Po{constructor(e=null){this.isSource=!0,this.uuid=Oi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Cr(i[o].image)):s.push(Cr(i[o]))}else s=Cr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Cr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Lo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tc=0;class St extends jn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Wt,i=Wt,s=Ot,o=Ri,a=Nt,l=Bn,c=St.DEFAULT_ANISOTROPY,u=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Oi(),this.name="",this.source=new Po(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case ts:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case ts:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Eo;St.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,i=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],d=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,w=(m+1)/2,S=(g+1)/2,L=(u+f)/4,F=(h+d)/4,y=(_+p)/4;return x>w&&x>S?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=L/n,s=F/n):w>S?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=L/i,s=y/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=F/s,i=y/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-_)*(p-_)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(h-d)/v,this.z=(f-u)/v,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dn extends jn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ot,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Po(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Do extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ac extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Cn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Cn)}else n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox),Lr.applyMatrix4(e.matrixWorld),this.union(Lr);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),ki.subVectors(this.max,Si),Kn.subVectors(e.a,Si),Jn.subVectors(e.b,Si),Qn.subVectors(e.c,Si),pn.subVectors(Jn,Kn),mn.subVectors(Qn,Jn),Ln.subVectors(Kn,Qn);let t=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Ln.z,Ln.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Ln.z,0,-Ln.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Ln.y,Ln.x,0];return!Pr(t,Kn,Jn,Qn,ki)||(t=[1,0,0,0,1,0,0,0,1],!Pr(t,Kn,Jn,Qn,ki))?!1:(Gi.crossVectors(pn,mn),t=[Gi.x,Gi.y,Gi.z],Pr(t,Kn,Jn,Qn,ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new N,new N,new N,new N,new N,new N,new N,new N],Cn=new N,Lr=new Ni,Kn=new N,Jn=new N,Qn=new N,pn=new N,mn=new N,Ln=new N,Si=new N,ki=new N,Gi=new N,Pn=new N;function Pr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Pn.fromArray(r,s);const a=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),l=e.dot(Pn),c=t.dot(Pn),u=n.dot(Pn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Cc=new Ni,wi=new N,Dr=new N;class hs{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wi.subVectors(e,this.center);const t=wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(wi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wi.copy(e.center).add(Dr)),this.expandByPoint(wi.copy(e.center).sub(Dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new N,Rr=new N,Vi=new N,gn=new N,Ir=new N,Hi=new N,Fr=new N;class Ro{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rr.copy(e).add(t).multiplyScalar(.5),Vi.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(Rr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Vi),a=gn.dot(this.direction),l=-gn.dot(Vi),c=gn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const d=1/u;h*=d,f*=d,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Rr).addScaledVector(Vi,f),m}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,i,s){Ir.subVectors(t,e),Hi.subVectors(n,e),Fr.crossVectors(Ir,Hi);let o=this.direction.dot(Fr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gn.subVectors(this.origin,e);const l=a*this.direction.dot(Hi.crossVectors(gn,Hi));if(l<0)return null;const c=a*this.direction.dot(Ir.cross(gn));if(c<0||l+c>o)return null;const u=-a*gn.dot(Fr);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,h,f,m,_,d,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=m,g[7]=_,g[11]=d,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$n.setFromMatrixColumn(e,0).length(),s=1/$n.setFromMatrixColumn(e,1).length(),o=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,d=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-d*c,t[9]=-a*l,t[2]=d-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,d=c*h;t[0]=f+d*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=d+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,d=c*h;t[0]=f-d*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=d-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,d=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,d=a*c;t[0]=l*u,t[4]=d-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,d=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lc,e,Pc)}lookAt(e,t,n){const i=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),_n.crossVectors(n,Ct),_n.lengthSq()===0&&(Math.abs(n.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),_n.crossVectors(n,Ct)),_n.normalize(),Wi.crossVectors(Ct,_n),i[0]=_n.x,i[4]=Wi.x,i[8]=Ct.x,i[1]=_n.y,i[5]=Wi.y,i[9]=Ct.y,i[2]=_n.z,i[6]=Wi.z,i[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],_=n[2],d=n[6],p=n[10],g=n[14],v=n[3],x=n[7],w=n[11],S=n[15],L=i[0],F=i[4],y=i[8],T=i[12],C=i[1],k=i[5],K=i[9],U=i[13],D=i[2],G=i[6],J=i[10],ee=i[14],W=i[3],Z=i[7],te=i[11],V=i[15];return s[0]=o*L+a*C+l*D+c*W,s[4]=o*F+a*k+l*G+c*Z,s[8]=o*y+a*K+l*J+c*te,s[12]=o*T+a*U+l*ee+c*V,s[1]=u*L+h*C+f*D+m*W,s[5]=u*F+h*k+f*G+m*Z,s[9]=u*y+h*K+f*J+m*te,s[13]=u*T+h*U+f*ee+m*V,s[2]=_*L+d*C+p*D+g*W,s[6]=_*F+d*k+p*G+g*Z,s[10]=_*y+d*K+p*J+g*te,s[14]=_*T+d*U+p*ee+g*V,s[3]=v*L+x*C+w*D+S*W,s[7]=v*F+x*k+w*G+S*Z,s[11]=v*y+x*K+w*J+S*te,s[15]=v*T+x*U+w*ee+S*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],d=e[7],p=e[11],g=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*m-n*l*m)+d*(+t*l*m-t*c*f+s*o*f-i*o*m+i*c*u-s*l*u)+p*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+g*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],d=e[13],p=e[14],g=e[15],v=h*p*c-d*f*c+d*l*m-a*p*m-h*l*g+a*f*g,x=_*f*c-u*p*c-_*l*m+o*p*m+u*l*g-o*f*g,w=u*d*c-_*h*c+_*a*m-o*d*m-u*a*g+o*h*g,S=_*h*l-u*d*l-_*a*f+o*d*f+u*a*p-o*h*p,L=t*v+n*x+i*w+s*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=v*F,e[1]=(d*f*s-h*p*s-d*i*m+n*p*m+h*i*g-n*f*g)*F,e[2]=(a*p*s-d*l*s+d*i*c-n*p*c-a*i*g+n*l*g)*F,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*m-n*l*m)*F,e[4]=x*F,e[5]=(u*p*s-_*f*s+_*i*m-t*p*m-u*i*g+t*f*g)*F,e[6]=(_*l*s-o*p*s-_*i*c+t*p*c+o*i*g-t*l*g)*F,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*m+t*l*m)*F,e[8]=w*F,e[9]=(_*h*s-u*d*s-_*n*m+t*d*m+u*n*g-t*h*g)*F,e[10]=(o*d*s-_*a*s+_*n*c-t*d*c-o*n*g+t*a*g)*F,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*F,e[12]=S*F,e[13]=(u*d*i-_*h*i+_*n*f-t*d*f-u*n*p+t*h*p)*F,e[14]=(_*a*i-o*d*i-_*n*l+t*d*l+o*n*p-t*a*p)*F,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,_=s*h,d=o*u,p=o*h,g=a*h,v=l*c,x=l*u,w=l*h,S=n.x,L=n.y,F=n.z;return i[0]=(1-(d+g))*S,i[1]=(m+w)*S,i[2]=(_-x)*S,i[3]=0,i[4]=(m-w)*L,i[5]=(1-(f+g))*L,i[6]=(p+v)*L,i[7]=0,i[8]=(_+x)*F,i[9]=(p-v)*F,i[10]=(1-(f+d))*F,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=$n.set(i[0],i[1],i[2]).length();const o=$n.set(i[4],i[5],i[6]).length(),a=$n.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],kt.copy(this);const c=1/s,u=1/o,h=1/a;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),h=(t+e)*l,f=(n+i)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new N,kt=new $e,Lc=new N(0,0,0),Pc=new N(1,1,1),_n=new N,Wi=new N,Ct=new N,ua=new $e,fa=new kn;class lr{constructor(e=0,t=0,n=0,i=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ua.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ua,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fa.setFromEuler(this),this.setFromQuaternion(fa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class ds{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dc=0;const ha=new N,ei=new kn,on=new $e,ji=new N,Ei=new N,Rc=new N,Ic=new kn,da=new N(1,0,0),pa=new N(0,1,0),ma=new N(0,0,1),Fc={type:"added"},ga={type:"removed"};class Ze extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const e=new N,t=new lr,n=new kn,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new vt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(da,e)}rotateY(e){return this.rotateOnAxis(pa,e)}rotateZ(e){return this.rotateOnAxis(ma,e)}translateOnAxis(e,t){return ha.copy(e).applyQuaternion(this.quaternion),this.position.add(ha.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(da,e)}translateY(e){return this.translateOnAxis(pa,e)}translateZ(e){return this.translateOnAxis(ma,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ji.copy(e):ji.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ei,ji,this.up):on.lookAt(ji,Ei,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),ei.setFromRotationMatrix(on),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ga)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ga)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,Rc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Ic,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ze.DEFAULT_UP=new N(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new N,ln=new N,Or=new N,cn=new N,ti=new N,ni=new N,_a=new N,Nr=new N,zr=new N,Ur=new N;class un{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gt.subVectors(e,t),i.cross(Gt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Gt.subVectors(i,t),ln.subVectors(n,t),Or.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(ln),l=Gt.dot(Or),c=ln.dot(ln),u=ln.dot(Or),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cn),cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,cn),l.set(0,0),l.addScaledVector(s,cn.x),l.addScaledVector(o,cn.y),l.addScaledVector(a,cn.z),l}static isFrontFacing(e,t,n,i){return Gt.subVectors(n,t),ln.subVectors(e,t),Gt.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Gt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return un.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ti.subVectors(i,n),ni.subVectors(s,n),Nr.subVectors(e,n);const l=ti.dot(Nr),c=ni.dot(Nr);if(l<=0&&c<=0)return t.copy(n);zr.subVectors(e,i);const u=ti.dot(zr),h=ni.dot(zr);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ti,o);Ur.subVectors(e,s);const m=ti.dot(Ur),_=ni.dot(Ur);if(_>=0&&m<=_)return t.copy(s);const d=m*c-l*_;if(d<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(ni,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return _a.subVectors(s,i),a=(h-u)/(h-u+(m-_)),t.copy(i).addScaledVector(_a,a);const g=1/(p+d+f);return o=d*g,a=f*g,t.copy(n).addScaledVector(ti,o).addScaledVector(ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Oc=0;class vi extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=fi,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yo,this.blendDst=bo,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Io={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vt={h:0,s:0,l:0},Xi={h:0,s:0,l:0};function Br(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_t.workingColorSpace){if(e=xc(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Br(o,s,e+1/3),this.g=Br(o,s,e),this.b=Br(o,s,e-1/3)}return _t.toWorkingColorSpace(this,i),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,_t.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,_t.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,_t.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,_t.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=Io[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return _t.fromWorkingColorSpace(ht.copy(this),e),yt(ht.r*255,0,255)<<16^yt(ht.g*255,0,255)<<8^yt(ht.b*255,0,255)<<0}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(ht.copy(this),t);const n=ht.r,i=ht.g,s=ht.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(ht.copy(this),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=Kt){_t.fromWorkingColorSpace(ht.copy(this),e);const t=ht.r,n=ht.g,i=ht.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=n,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(Xi);const n=wr(Vt.h,Xi.h,t),i=wr(Vt.s,Xi.s,t),s=wr(Vt.l,Xi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ht=new Ne;Ne.NAMES=Io;class Fo extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new N,qi=new Me;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qi.fromBufferAttribute(this,t),qi.applyMatrix3(e),this.setXY(t,qi.x,qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Oo extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class No extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mt extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nc=0;const Ft=new $e,kr=new Ze,ii=new N,Lt=new Ni,Ti=new Ni,ot=new N;class nn extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Co(e)?No:Oo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new vt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ti.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(Lt.min,Ti.min),Lt.expandByPoint(ot),ot.addVectors(Lt.max,Ti.max),Lt.expandByPoint(ot)):(Lt.expandByPoint(Ti.min),Lt.expandByPoint(Ti.max))}Lt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ot.fromBufferAttribute(a,c),l&&(ii.fromBufferAttribute(e,c),ot.add(ii)),i=Math.max(i,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<a;C++)c[C]=new N,u[C]=new N;const h=new N,f=new N,m=new N,_=new Me,d=new Me,p=new Me,g=new N,v=new N;function x(C,k,K){h.fromArray(i,C*3),f.fromArray(i,k*3),m.fromArray(i,K*3),_.fromArray(o,C*2),d.fromArray(o,k*2),p.fromArray(o,K*2),f.sub(h),m.sub(h),d.sub(_),p.sub(_);const U=1/(d.x*p.y-p.x*d.y);!isFinite(U)||(g.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(U),v.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(U),c[C].add(g),c[k].add(g),c[K].add(g),u[C].add(v),u[k].add(v),u[K].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let C=0,k=w.length;C<k;++C){const K=w[C],U=K.start,D=K.count;for(let G=U,J=U+D;G<J;G+=3)x(n[G+0],n[G+1],n[G+2])}const S=new N,L=new N,F=new N,y=new N;function T(C){F.fromArray(s,C*3),y.copy(F);const k=c[C];S.copy(k),S.sub(F.multiplyScalar(F.dot(k))).normalize(),L.crossVectors(y,k);const U=L.dot(u[C])<0?-1:1;l[C*4]=S.x,l[C*4+1]=S.y,l[C*4+2]=S.z,l[C*4+3]=U}for(let C=0,k=w.length;C<k;++C){const K=w[C],U=K.start,D=K.count;for(let G=U,J=U+D;G<J;G+=3)T(n[G+0]),T(n[G+1]),T(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*u;for(let g=0;g<u;g++)f[_++]=c[m++]}return new en(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xa=new $e,Zt=new Ro,Yi=new hs,va=new N,Ai=new N,Ci=new N,Li=new N,Gr=new N,Zi=new N,Ki=new Me,Ji=new Me,Qi=new Me,Vr=new N,$i=new N;class jt extends Ze{constructor(e=new nn,t=new Fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Zi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Gr.fromBufferAttribute(h,e),o?Zi.addScaledVector(Gr,u):Zi.addScaledVector(Gr.sub(t),u))}t.add(Zi)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(s),Zt.copy(e.ray).recast(e.near),Yi.containsPoint(Zt.origin)===!1&&(Zt.intersectSphere(Yi,va)===null||Zt.origin.distanceToSquared(va)>(e.far-e.near)**2))||(xa.copy(s).invert(),Zt.copy(e.ray).applyMatrix4(xa),n.boundingBox!==null&&Zt.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const d=h[m],p=i[d.materialIndex],g=Math.max(d.start,f.start),v=Math.min(a.count,Math.min(d.start+d.count,f.start+f.count));for(let x=g,w=v;x<w;x+=3){const S=a.getX(x),L=a.getX(x+1),F=a.getX(x+2);o=er(this,p,e,Zt,c,u,S,L,F),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let d=m,p=_;d<p;d+=3){const g=a.getX(d),v=a.getX(d+1),x=a.getX(d+2);o=er(this,i,e,Zt,c,u,g,v,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,_=h.length;m<_;m++){const d=h[m],p=i[d.materialIndex],g=Math.max(d.start,f.start),v=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let x=g,w=v;x<w;x+=3){const S=x,L=x+1,F=x+2;o=er(this,p,e,Zt,c,u,S,L,F),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let d=m,p=_;d<p;d+=3){const g=d,v=d+1,x=d+2;o=er(this,i,e,Zt,c,u,g,v,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function zc(r,e,t,n,i,s,o,a){let l;if(e.side===Dt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===yn,a),l===null)return null;$i.copy(a),$i.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo($i);return c<t.near||c>t.far?null:{distance:c,point:$i.clone(),object:r}}function er(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Ai),r.getVertexPosition(a,Ci),r.getVertexPosition(l,Li);const c=zc(r,e,t,n,Ai,Ci,Li,Vr);if(c){i&&(Ki.fromBufferAttribute(i,o),Ji.fromBufferAttribute(i,a),Qi.fromBufferAttribute(i,l),c.uv=un.getUV(Vr,Ai,Ci,Li,Ki,Ji,Qi,new Me)),s&&(Ki.fromBufferAttribute(s,o),Ji.fromBufferAttribute(s,a),Qi.fromBufferAttribute(s,l),c.uv2=un.getUV(Vr,Ai,Ci,Li,Ki,Ji,Qi,new Me));const u={a:o,b:a,c:l,normal:new N,materialIndex:0};un.getNormal(Ai,Ci,Li,u.normal),c.face=u}return c}class zi extends nn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(h,2));function _(d,p,g,v,x,w,S,L,F,y,T){const C=w/F,k=S/y,K=w/2,U=S/2,D=L/2,G=F+1,J=y+1;let ee=0,W=0;const Z=new N;for(let te=0;te<J;te++){const V=te*k-U;for(let B=0;B<G;B++){const Q=B*C-K;Z[d]=Q*v,Z[p]=V*x,Z[g]=D,c.push(Z.x,Z.y,Z.z),Z[d]=0,Z[p]=0,Z[g]=L>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(B/F),h.push(1-te/y),ee+=1}}for(let te=0;te<y;te++)for(let V=0;V<F;V++){const B=f+V+G*te,Q=f+V+G*(te+1),se=f+(V+1)+G*(te+1),O=f+(V+1)+G*te;l.push(B,Q,O),l.push(Q,se,O),W+=6}a.addGroup(m,W,T),m+=W,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xt(r){const e={};for(let t=0;t<r.length;t++){const n=xi(r[t]);for(const i in n)e[i]=n[i]}return e}function Uc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function zo(r){return r.getRenderTarget()===null&&r.outputEncoding===Ue?Kt:Ii}const Uo={clone:xi,merge:xt};var Bc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bc,this.fragmentShader=kc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=Uc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ps extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends ps{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ri=-90,si=1;class Gc extends Ze{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Pt(ri,si,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Pt(ri,si,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Pt(ri,si,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Pt(ri,si,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Pt(ri,si,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Pt(ri,si,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=$t,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Bo extends St{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vc extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Bo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zi(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Mn});s.uniforms.tEquirect.value=t;const o=new jt(i,s),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Ot),new Gc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Hr=new N,Hc=new N,Wc=new vt;class Dn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Hr.subVectors(n,t).cross(Hc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wc.getNormalMatrix(e),i=this.coplanarPoint(Hr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new hs,tr=new N;class ms{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,s=new Dn,o=new Dn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],_=n[10],d=n[11],p=n[12],g=n[13],v=n[14],x=n[15];return t[0].setComponents(a-i,h-l,d-f,x-p).normalize(),t[1].setComponents(a+i,h+l,d+f,x+p).normalize(),t[2].setComponents(a+s,h+c,d+m,x+g).normalize(),t[3].setComponents(a-s,h-c,d-m,x-g).normalize(),t[4].setComponents(a-o,h-u,d-_,x-v).normalize(),t[5].setComponents(a+o,h+u,d+_,x+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(tr.x=i.normal.x>0?e.max.x:e.min.x,tr.y=i.normal.y>0?e.max.y:e.min.y,tr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ko(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function jc(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;r.bindBuffer(h,c),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class gs extends nn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,m=[],_=[],d=[],p=[];for(let g=0;g<u;g++){const v=g*f-o;for(let x=0;x<c;x++){const w=x*h-s;_.push(w,-v,0),d.push(0,0,1),p.push(x/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const x=v+c*g,w=v+c*(g+1),S=v+1+c*(g+1),L=v+1+c*g;m.push(x,w,L),m.push(w,S,L)}this.setIndex(m),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,qc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qc="vec3 transformed = vec3( position );",$c=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,tu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,hu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,du=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",vu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ou=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Nu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ku=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Gu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ju=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ku=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,af=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,of=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ff=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_f=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Af=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,If=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Of=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,zf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Uf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Bf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,kf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Gf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Vf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Hf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$f=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ih=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ah=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ch=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ph=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_h=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Sh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,we={alphamap_fragment:Xc,alphamap_pars_fragment:qc,alphatest_fragment:Yc,alphatest_pars_fragment:Zc,aomap_fragment:Kc,aomap_pars_fragment:Jc,begin_vertex:Qc,beginnormal_vertex:$c,bsdfs:eu,iridescence_fragment:tu,bumpmap_pars_fragment:nu,clipping_planes_fragment:iu,clipping_planes_pars_fragment:ru,clipping_planes_pars_vertex:su,clipping_planes_vertex:au,color_fragment:ou,color_pars_fragment:lu,color_pars_vertex:cu,color_vertex:uu,common:fu,cube_uv_reflection_fragment:hu,defaultnormal_vertex:du,displacementmap_pars_vertex:pu,displacementmap_vertex:mu,emissivemap_fragment:gu,emissivemap_pars_fragment:_u,encodings_fragment:xu,encodings_pars_fragment:vu,envmap_fragment:Mu,envmap_common_pars_fragment:yu,envmap_pars_fragment:bu,envmap_pars_vertex:Su,envmap_physical_pars_fragment:Ou,envmap_vertex:wu,fog_vertex:Eu,fog_pars_vertex:Tu,fog_fragment:Au,fog_pars_fragment:Cu,gradientmap_pars_fragment:Lu,lightmap_fragment:Pu,lightmap_pars_fragment:Du,lights_lambert_fragment:Ru,lights_lambert_pars_fragment:Iu,lights_pars_begin:Fu,lights_toon_fragment:Nu,lights_toon_pars_fragment:zu,lights_phong_fragment:Uu,lights_phong_pars_fragment:Bu,lights_physical_fragment:ku,lights_physical_pars_fragment:Gu,lights_fragment_begin:Vu,lights_fragment_maps:Hu,lights_fragment_end:Wu,logdepthbuf_fragment:ju,logdepthbuf_pars_fragment:Xu,logdepthbuf_pars_vertex:qu,logdepthbuf_vertex:Yu,map_fragment:Zu,map_pars_fragment:Ku,map_particle_fragment:Ju,map_particle_pars_fragment:Qu,metalnessmap_fragment:$u,metalnessmap_pars_fragment:ef,morphcolor_vertex:tf,morphnormal_vertex:nf,morphtarget_pars_vertex:rf,morphtarget_vertex:sf,normal_fragment_begin:af,normal_fragment_maps:of,normal_pars_fragment:lf,normal_pars_vertex:cf,normal_vertex:uf,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:hf,clearcoat_normal_fragment_maps:df,clearcoat_pars_fragment:pf,iridescence_pars_fragment:mf,output_fragment:gf,packing:_f,premultiplied_alpha_fragment:xf,project_vertex:vf,dithering_fragment:Mf,dithering_pars_fragment:yf,roughnessmap_fragment:bf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:Ef,shadowmap_vertex:Tf,shadowmask_pars_fragment:Af,skinbase_vertex:Cf,skinning_pars_vertex:Lf,skinning_vertex:Pf,skinnormal_vertex:Df,specularmap_fragment:Rf,specularmap_pars_fragment:If,tonemapping_fragment:Ff,tonemapping_pars_fragment:Of,transmission_fragment:Nf,transmission_pars_fragment:zf,uv_pars_fragment:Uf,uv_pars_vertex:Bf,uv_vertex:kf,uv2_pars_fragment:Gf,uv2_pars_vertex:Vf,uv2_vertex:Hf,worldpos_vertex:Wf,background_vert:jf,background_frag:Xf,backgroundCube_vert:qf,backgroundCube_frag:Yf,cube_vert:Zf,cube_frag:Kf,depth_vert:Jf,depth_frag:Qf,distanceRGBA_vert:$f,distanceRGBA_frag:eh,equirect_vert:th,equirect_frag:nh,linedashed_vert:ih,linedashed_frag:rh,meshbasic_vert:sh,meshbasic_frag:ah,meshlambert_vert:oh,meshlambert_frag:lh,meshmatcap_vert:ch,meshmatcap_frag:uh,meshnormal_vert:fh,meshnormal_frag:hh,meshphong_vert:dh,meshphong_frag:ph,meshphysical_vert:mh,meshphysical_frag:gh,meshtoon_vert:_h,meshtoon_frag:xh,points_vert:vh,points_frag:Mh,shadow_vert:yh,shadow_frag:bh,sprite_vert:Sh,sprite_frag:wh},ae={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new vt},uv2Transform:{value:new vt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vt}}},Jt={basic:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:xt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:xt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:xt([ae.points,ae.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:xt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:xt([ae.common,ae.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:xt([ae.sprite,ae.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:xt([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:xt([ae.lights,ae.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Jt.physical={uniforms:xt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const nr={r:0,b:0,g:0};function Eh(r,e,t,n,i,s,o){const a=new Ne(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function _(p,g){let v=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?t:e).get(x));const w=r.xr,S=w.getSession&&w.getSession();S&&S.environmentBlendMode==="additive"&&(x=null),x===null?d(a,l):x&&x.isColor&&(d(x,1),v=!0),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===or)?(u===void 0&&(u=new jt(new zi(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:xi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,F,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=x.encoding!==Ue,(h!==x||f!==x.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new jt(new gs(2,2),new tn({name:"BackgroundMaterial",uniforms:xi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=x.encoding!==Ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,g){p.getRGB(nr,zo(r)),n.buffers.color.setClear(nr.r,nr.g,nr.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(a,l)},render:_}}function Th(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(D,G,J,ee,W){let Z=!1;if(o){const te=d(ee,J,G);c!==te&&(c=te,m(c.object)),Z=g(D,ee,J,W),Z&&v(D,ee,J,W)}else{const te=G.wireframe===!0;(c.geometry!==ee.id||c.program!==J.id||c.wireframe!==te)&&(c.geometry=ee.id,c.program=J.id,c.wireframe=te,Z=!0)}W!==null&&t.update(W,34963),(Z||u)&&(u=!1,y(D,G,J,ee),W!==null&&r.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function d(D,G,J){const ee=J.wireframe===!0;let W=a[D.id];W===void 0&&(W={},a[D.id]=W);let Z=W[G.id];Z===void 0&&(Z={},W[G.id]=Z);let te=Z[ee];return te===void 0&&(te=p(f()),Z[ee]=te),te}function p(D){const G=[],J=[],ee=[];for(let W=0;W<i;W++)G[W]=0,J[W]=0,ee[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:ee,object:D,attributes:{},index:null}}function g(D,G,J,ee){const W=c.attributes,Z=G.attributes;let te=0;const V=J.getAttributes();for(const B in V)if(V[B].location>=0){const se=W[B];let O=Z[B];if(O===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(O=D.instanceColor)),se===void 0||se.attribute!==O||O&&se.data!==O.data)return!0;te++}return c.attributesNum!==te||c.index!==ee}function v(D,G,J,ee){const W={},Z=G.attributes;let te=0;const V=J.getAttributes();for(const B in V)if(V[B].location>=0){let se=Z[B];se===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(se=D.instanceColor));const O={};O.attribute=se,se&&se.data&&(O.data=se.data),W[B]=O,te++}c.attributes=W,c.attributesNum=te,c.index=ee}function x(){const D=c.newAttributes;for(let G=0,J=D.length;G<J;G++)D[G]=0}function w(D){S(D,0)}function S(D,G){const J=c.newAttributes,ee=c.enabledAttributes,W=c.attributeDivisors;J[D]=1,ee[D]===0&&(r.enableVertexAttribArray(D),ee[D]=1),W[D]!==G&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),W[D]=G)}function L(){const D=c.newAttributes,G=c.enabledAttributes;for(let J=0,ee=G.length;J<ee;J++)G[J]!==D[J]&&(r.disableVertexAttribArray(J),G[J]=0)}function F(D,G,J,ee,W,Z){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(D,G,J,W,Z):r.vertexAttribPointer(D,G,J,ee,W,Z)}function y(D,G,J,ee){if(n.isWebGL2===!1&&(D.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=ee.attributes,Z=J.getAttributes(),te=G.defaultAttributeValues;for(const V in Z){const B=Z[V];if(B.location>=0){let Q=W[V];if(Q===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const se=Q.normalized,O=Q.itemSize,j=t.get(Q);if(j===void 0)continue;const $=j.buffer,he=j.type,fe=j.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ve=Q.data,Se=ve.stride,Te=Q.offset;if(ve.isInstancedInterleavedBuffer){for(let Ie=0;Ie<B.locationSize;Ie++)S(B.location+Ie,ve.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ie=0;Ie<B.locationSize;Ie++)w(B.location+Ie);r.bindBuffer(34962,$);for(let Ie=0;Ie<B.locationSize;Ie++)F(B.location+Ie,O/B.locationSize,he,se,Se*fe,(Te+O/B.locationSize*Ie)*fe)}else{if(Q.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)S(B.location+ve,Q.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ve=0;ve<B.locationSize;ve++)w(B.location+ve);r.bindBuffer(34962,$);for(let ve=0;ve<B.locationSize;ve++)F(B.location+ve,O/B.locationSize,he,se,O*fe,O/B.locationSize*ve*fe)}}else if(te!==void 0){const se=te[V];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(B.location,se);break;case 3:r.vertexAttrib3fv(B.location,se);break;case 4:r.vertexAttrib4fv(B.location,se);break;default:r.vertexAttrib1fv(B.location,se)}}}}L()}function T(){K();for(const D in a){const G=a[D];for(const J in G){const ee=G[J];for(const W in ee)_(ee[W].object),delete ee[W];delete G[J]}delete a[D]}}function C(D){if(a[D.id]===void 0)return;const G=a[D.id];for(const J in G){const ee=G[J];for(const W in ee)_(ee[W].object),delete ee[W];delete G[J]}delete a[D.id]}function k(D){for(const G in a){const J=a[G];if(J[D.id]===void 0)continue;const ee=J[D.id];for(const W in ee)_(ee[W].object),delete ee[W];delete J[D.id]}}function K(){U(),u=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:w,disableUnusedAttributes:L}}function Ah(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Ch(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),d=r.getParameter(34921),p=r.getParameter(36347),g=r.getParameter(36348),v=r.getParameter(36349),x=f>0,w=o||e.has("OES_texture_float"),S=x&&w,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:S,maxSamples:L}}function Lh(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Dn,a=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,g=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const v=s?0:n,x=v*4;let w=g.clippingState||null;l.value=w,w=u(_,f,x,m);for(let S=0;S!==x;++S)w[S]=t[S];g.clippingState=w,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,_){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,_!==!0||p===null){const g=m+d*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,w=m;x!==d;++x,w+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function Ph(r){let e=new WeakMap;function t(o,a){return a===Qr?o.mapping=pi:a===$r&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Qr||a===$r)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class _s extends ps{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ci=4,Ma=[.125,.215,.35,.446,.526,.582],On=20,Wr=new _s,ya=new Ne;let jr=null;const Rn=(1+Math.sqrt(5))/2,oi=1/Rn,ba=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Rn,oi),new N(0,Rn,-oi),new N(oi,0,Rn),new N(-oi,0,Rn),new N(Rn,oi,0),new N(-Rn,oi,0)];class Sa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){jr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jr),e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:gi,format:Nt,encoding:bn,depthBuffer:!1},i=wa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dh(s)),this._blurMaterial=Rh(s,e,t)}return i}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,Wr)}_sceneToCubeUV(e,t,n,i){const a=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ya),u.toneMapping=$t,u.autoClear=!1;const m=new Fo({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),_=new jt(new zi,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(ya),d=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):v===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const x=this._cubeSize;ir(i,v*x,g>2?x:0,x,x),u.setRenderTarget(i),d&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===pi||e.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ea());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ir(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Wr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ba[(i-1)%ba.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new jt(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*On-1),d=s/_,p=isFinite(s)?1+Math.floor(u*d):On;p>On&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${On}`);const g=[];let v=0;for(let F=0;F<On;++F){const y=F/d,T=Math.exp(-y*y/2);g.push(T),F===0?v+=T:F<p&&(v+=2*T)}for(let F=0;F<g.length;F++)g[F]=g[F]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const w=this._sizeLods[i],S=3*w*(i>x-ci?i-x+ci:0),L=4*(this._cubeSize-w);ir(t,S,L,3*w,2*w),l.setRenderTarget(t),l.render(h,Wr)}}function Dh(r){const e=[],t=[],n=[];let i=r;const s=r-ci+1+Ma.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ci?l=Ma[o-r+ci-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,d=3,p=2,g=1,v=new Float32Array(d*_*m),x=new Float32Array(p*_*m),w=new Float32Array(g*_*m);for(let L=0;L<m;L++){const F=L%3*2/3-1,y=L>2?0:-1,T=[F,y,0,F+2/3,y,0,F+2/3,y+1,0,F,y,0,F+2/3,y+1,0,F,y+1,0];v.set(T,d*_*L),x.set(f,p*_*L);const C=[L,L,L,L,L,L];w.set(C,g*_*L)}const S=new nn;S.setAttribute("position",new en(v,d)),S.setAttribute("uv",new en(x,p)),S.setAttribute("faceIndex",new en(w,g)),e.push(S),i>ci&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wa(r,e,t){const n=new dn(r,e,t);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Rh(r,e,t){const n=new Float32Array(On),i=new N(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ea(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ta(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function xs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ih(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qr||l===$r,u=l===pi||l===mi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Sa(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Sa(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Fh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Oh(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const m=h.morphAttributes;for(const _ in m){const d=m[_];for(let p=0,g=d.length;p<g;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let d=0;if(m!==null){const v=m.array;d=m.version;for(let x=0,w=v.length;x<w;x+=3){const S=v[x+0],L=v[x+1],F=v[x+2];f.push(S,L,L,F,F,S)}}else{const v=_.array;d=_.version;for(let x=0,w=v.length/3-1;x<w;x+=3){const S=x+0,L=x+1,F=x+2;f.push(S,L,L,F,F,S)}}const p=new(Co(f)?No:Oo)(f,1);p.version=d;const g=s.get(h);g&&e.remove(g),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Nh(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){r.drawElements(s,m,a,f*l),t.update(m,s,1)}function h(f,m,_){if(_===0)return;let d,p;if(i)d=r,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,a,f*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function zh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Uh(r,e){return r[0]-e[0]}function Bh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function kh(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let d=s.get(u);if(d===void 0||d.count!==_){let D=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),w===!0&&(y=3);let T=u.attributes.position.count*y,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const k=new Float32Array(T*C*4*_),K=new Do(k,T,C,_);K.type=zn,K.needsUpdate=!0;const U=y*4;for(let G=0;G<_;G++){const J=S[G],ee=L[G],W=F[G],Z=T*C*4*G;for(let te=0;te<J.count;te++){const V=te*U;v===!0&&(o.fromBufferAttribute(J,te),k[Z+V+0]=o.x,k[Z+V+1]=o.y,k[Z+V+2]=o.z,k[Z+V+3]=0),x===!0&&(o.fromBufferAttribute(ee,te),k[Z+V+4]=o.x,k[Z+V+5]=o.y,k[Z+V+6]=o.z,k[Z+V+7]=0),w===!0&&(o.fromBufferAttribute(W,te),k[Z+V+8]=o.x,k[Z+V+9]=o.y,k[Z+V+10]=o.z,k[Z+V+11]=W.itemSize===4?o.w:1)}}d={count:_,texture:K,size:new Me(T,C)},s.set(u,d),u.addEventListener("dispose",D)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const g=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",g),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}else{const m=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==m){_=[];for(let x=0;x<m;x++)_[x]=[x,0];n[u.id]=_}for(let x=0;x<m;x++){const w=_[x];w[0]=x,w[1]=f[x]}_.sort(Bh);for(let x=0;x<8;x++)x<m&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Uh);const d=u.morphAttributes.position,p=u.morphAttributes.normal;let g=0;for(let x=0;x<8;x++){const w=a[x],S=w[0],L=w[1];S!==Number.MAX_SAFE_INTEGER&&L?(d&&u.getAttribute("morphTarget"+x)!==d[S]&&u.setAttribute("morphTarget"+x,d[S]),p&&u.getAttribute("morphNormal"+x)!==p[S]&&u.setAttribute("morphNormal"+x,p[S]),i[x]=L,g+=L):(d&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const v=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Gh(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Go=new St,Vo=new Do,Ho=new Ac,Wo=new Bo,Aa=[],Ca=[],La=new Float32Array(16),Pa=new Float32Array(9),Da=new Float32Array(4);function Mi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Aa[i];if(s===void 0&&(s=new Float32Array(i),Aa[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function et(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function cr(r,e){let t=Ca[e];t===void 0&&(t=new Int32Array(e),Ca[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Vh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Hh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;r.uniform2fv(this.addr,e),tt(t,e)}}function Wh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(et(t,e))return;r.uniform3fv(this.addr,e),tt(t,e)}}function jh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;r.uniform4fv(this.addr,e),tt(t,e)}}function Xh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;Da.set(n),r.uniformMatrix2fv(this.addr,!1,Da),tt(t,n)}}function qh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;Pa.set(n),r.uniformMatrix3fv(this.addr,!1,Pa),tt(t,n)}}function Yh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;La.set(n),r.uniformMatrix4fv(this.addr,!1,La),tt(t,n)}}function Zh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Kh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;r.uniform2iv(this.addr,e),tt(t,e)}}function Jh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;r.uniform3iv(this.addr,e),tt(t,e)}}function Qh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;r.uniform4iv(this.addr,e),tt(t,e)}}function $h(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ed(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;r.uniform2uiv(this.addr,e),tt(t,e)}}function td(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;r.uniform3uiv(this.addr,e),tt(t,e)}}function nd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;r.uniform4uiv(this.addr,e),tt(t,e)}}function id(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Go,i)}function rd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ho,i)}function sd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wo,i)}function ad(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vo,i)}function od(r){switch(r){case 5126:return Vh;case 35664:return Hh;case 35665:return Wh;case 35666:return jh;case 35674:return Xh;case 35675:return qh;case 35676:return Yh;case 5124:case 35670:return Zh;case 35667:case 35671:return Kh;case 35668:case 35672:return Jh;case 35669:case 35673:return Qh;case 5125:return $h;case 36294:return ed;case 36295:return td;case 36296:return nd;case 35678:case 36198:case 36298:case 36306:case 35682:return id;case 35679:case 36299:case 36307:return rd;case 35680:case 36300:case 36308:case 36293:return sd;case 36289:case 36303:case 36311:case 36292:return ad}}function ld(r,e){r.uniform1fv(this.addr,e)}function cd(r,e){const t=Mi(e,this.size,2);r.uniform2fv(this.addr,t)}function ud(r,e){const t=Mi(e,this.size,3);r.uniform3fv(this.addr,t)}function fd(r,e){const t=Mi(e,this.size,4);r.uniform4fv(this.addr,t)}function hd(r,e){const t=Mi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function dd(r,e){const t=Mi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pd(r,e){const t=Mi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function md(r,e){r.uniform1iv(this.addr,e)}function gd(r,e){r.uniform2iv(this.addr,e)}function _d(r,e){r.uniform3iv(this.addr,e)}function xd(r,e){r.uniform4iv(this.addr,e)}function vd(r,e){r.uniform1uiv(this.addr,e)}function Md(r,e){r.uniform2uiv(this.addr,e)}function yd(r,e){r.uniform3uiv(this.addr,e)}function bd(r,e){r.uniform4uiv(this.addr,e)}function Sd(r,e,t){const n=this.cache,i=e.length,s=cr(t,i);et(n,s)||(r.uniform1iv(this.addr,s),tt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Go,s[o])}function wd(r,e,t){const n=this.cache,i=e.length,s=cr(t,i);et(n,s)||(r.uniform1iv(this.addr,s),tt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ho,s[o])}function Ed(r,e,t){const n=this.cache,i=e.length,s=cr(t,i);et(n,s)||(r.uniform1iv(this.addr,s),tt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Wo,s[o])}function Td(r,e,t){const n=this.cache,i=e.length,s=cr(t,i);et(n,s)||(r.uniform1iv(this.addr,s),tt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Vo,s[o])}function Ad(r){switch(r){case 5126:return ld;case 35664:return cd;case 35665:return ud;case 35666:return fd;case 35674:return hd;case 35675:return dd;case 35676:return pd;case 5124:case 35670:return md;case 35667:case 35671:return gd;case 35668:case 35672:return _d;case 35669:case 35673:return xd;case 5125:return vd;case 36294:return Md;case 36295:return yd;case 36296:return bd;case 35678:case 36198:case 36298:case 36306:case 35682:return Sd;case 35679:case 36299:case 36307:return wd;case 35680:case 36300:case 36308:case 36293:return Ed;case 36289:case 36303:case 36311:case 36292:return Td}}class Cd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=od(t.type)}}class Ld{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ad(t.type)}}class Pd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Xr=/(\w+)(\])?(\[|\.)?/g;function Ra(r,e){r.seq.push(e),r.map[e.id]=e}function Dd(r,e,t){const n=r.name,i=n.length;for(Xr.lastIndex=0;;){const s=Xr.exec(n),o=Xr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ra(t,c===void 0?new Cd(a,r,e):new Ld(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Pd(a),Ra(t,h)),t=h}}}class rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Dd(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ia(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Rd=0;function Id(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Fd(r){switch(r){case bn:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Fa(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Id(r.getShaderSource(e),o)}else return i}function Od(r,e){const t=Fd(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Nd(r,e){let t;switch(e){case Yl:t="Linear";break;case Zl:t="Reinhard";break;case Kl:t="OptimizedCineon";break;case wo:t="ACESFilmic";break;case Jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zd(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Di).join(`
`)}function Ud(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bd(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Di(r){return r!==""}function Oa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Na(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kd=/^[ \t]*#include +<([\w\d./]+)>/gm;function is(r){return r.replace(kd,Gd)}function Gd(r,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return is(t)}const Vd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function za(r){return r.replace(Vd,Hd)}function Hd(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ua(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wd(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Mo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function jd(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xd(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function qd(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case So:e="ENVMAP_BLENDING_MULTIPLY";break;case Xl:e="ENVMAP_BLENDING_MIX";break;case ql:e="ENVMAP_BLENDING_ADD";break}return e}function Yd(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zd(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Wd(t),c=jd(t),u=Xd(t),h=qd(t),f=Yd(t),m=t.isWebGL2?"":zd(t),_=Ud(s),d=i.createProgram();let p,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(Di).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(Di).join(`
`),g.length>0&&(g+=`
`)):(p=[Ua(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),g=[m,Ua(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$t?"#define TONE_MAPPING":"",t.toneMapping!==$t?we.tonemapping_pars_fragment:"",t.toneMapping!==$t?Nd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,Od("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Di).join(`
`)),o=is(o),o=Oa(o,t),o=Na(o,t),a=is(a),a=Oa(a,t),a=Na(a,t),o=za(o),a=za(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=v+p+o,w=v+g+a,S=Ia(i,35633,x),L=Ia(i,35632,w);if(i.attachShader(d,S),i.attachShader(d,L),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(d).trim(),C=i.getShaderInfoLog(S).trim(),k=i.getShaderInfoLog(L).trim();let K=!0,U=!0;if(i.getProgramParameter(d,35714)===!1){K=!1;const D=Fa(i,S,"vertex"),G=Fa(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+D+`
`+G)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(C===""||k==="")&&(U=!1);U&&(this.diagnostics={runnable:K,programLog:T,vertexShader:{log:C,prefix:p},fragmentShader:{log:k,prefix:g}})}i.deleteShader(S),i.deleteShader(L);let F;this.getUniforms=function(){return F===void 0&&(F=new rr(i,d)),F};let y;return this.getAttributes=function(){return y===void 0&&(y=Bd(i,d)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Rd++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=S,this.fragmentShader=L,this}let Kd=0;class Jd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qd(e),t.set(e,n)),n}}class Qd{constructor(e){this.id=Kd++,this.code=e,this.usedTimes=0}}function $d(r,e,t,n,i,s,o){const a=new ds,l=new Jd,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y,T,C,k,K){const U=k.fog,D=K.geometry,G=y.isMeshStandardMaterial?k.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),ee=!!J&&J.mapping===or?J.image.height:null,W=_[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const Z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,te=Z!==void 0?Z.length:0;let V=0;D.morphAttributes.position!==void 0&&(V=1),D.morphAttributes.normal!==void 0&&(V=2),D.morphAttributes.color!==void 0&&(V=3);let B,Q,se,O;if(W){const Se=Jt[W];B=Se.vertexShader,Q=Se.fragmentShader}else B=y.vertexShader,Q=y.fragmentShader,l.update(y),se=l.getVertexShaderID(y),O=l.getFragmentShaderID(y);const j=r.getRenderTarget(),$=y.alphaTest>0,he=y.clearcoat>0,fe=y.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:y.type,vertexShader:B,fragmentShader:Q,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:O,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:f,outputEncoding:j===null?r.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:bn,map:!!y.map,matcap:!!y.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:ee,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===gc,tangentSpaceNormalMap:y.normalMapType===fs,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ue,clearcoat:he,clearcoatMap:he&&!!y.clearcoatMap,clearcoatRoughnessMap:he&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!y.clearcoatNormalMap,iridescence:fe,iridescenceMap:fe&&!!y.iridescenceMap,iridescenceThicknessMap:fe&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===fi,alphaMap:!!y.alphaMap,alphaTest:$,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!D.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:$t,useLegacyLights:r.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xn,flipSided:y.side===Dt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)T.push(C),T.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(g(T,y),v(T,y),T.push(r.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),y.push(a.mask)}function x(y){const T=_[y.type];let C;if(T){const k=Jt[T];C=Uo.clone(k.uniforms)}else C=y.uniforms;return C}function w(y,T){let C;for(let k=0,K=c.length;k<K;k++){const U=c[k];if(U.cacheKey===T){C=U,++C.usedTimes;break}}return C===void 0&&(C=new Zd(r,T,y,s),c.push(C)),C}function S(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function L(y){l.remove(y)}function F(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:S,releaseShaderCache:L,programs:c,dispose:F}}function ep(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function tp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ba(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ka(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,_,d,p){let g=r[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:d,group:p},r[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=m,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=d,g.group=p),e++,g}function a(h,f,m,_,d,p){const g=o(h,f,m,_,d,p);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(h,f,m,_,d,p){const g=o(h,f,m,_,d,p);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function c(h,f){t.length>1&&t.sort(h||tp),n.length>1&&n.sort(f||Ba),i.length>1&&i.sort(f||Ba)}function u(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function np(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new ka,r.set(n,[o])):i>=s.length?(o=new ka,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ip(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ne};break;case"SpotLight":t={position:new N,direction:new N,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function rp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let sp=0;function ap(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function op(r,e){const t=new ip,n=rp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);const s=new N,o=new $e,a=new $e;function l(u,h){let f=0,m=0,_=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let d=0,p=0,g=0,v=0,x=0,w=0,S=0,L=0,F=0,y=0;u.sort(ap);const T=h===!0?Math.PI:1;for(let k=0,K=u.length;k<K;k++){const U=u[k],D=U.color,G=U.intensity,J=U.distance,ee=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=D.r*G*T,m+=D.g*G*T,_+=D.b*G*T;else if(U.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],G);else if(U.isDirectionalLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const Z=U.shadow,te=n.get(U);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,i.directionalShadow[d]=te,i.directionalShadowMap[d]=ee,i.directionalShadowMatrix[d]=U.shadow.matrix,w++}i.directional[d]=W,d++}else if(U.isSpotLight){const W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(D).multiplyScalar(G*T),W.distance=J,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[g]=W;const Z=U.shadow;if(U.map&&(i.spotLightMap[F]=U.map,F++,Z.updateMatrices(U),U.castShadow&&y++),i.spotLightMatrix[g]=Z.matrix,U.castShadow){const te=n.get(U);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,i.spotShadow[g]=te,i.spotShadowMap[g]=ee,L++}g++}else if(U.isRectAreaLight){const W=t.get(U);W.color.copy(D).multiplyScalar(G),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[v]=W,v++}else if(U.isPointLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*T),W.distance=U.distance,W.decay=U.decay,U.castShadow){const Z=U.shadow,te=n.get(U);te.shadowBias=Z.bias,te.shadowNormalBias=Z.normalBias,te.shadowRadius=Z.radius,te.shadowMapSize=Z.mapSize,te.shadowCameraNear=Z.camera.near,te.shadowCameraFar=Z.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=ee,i.pointShadowMatrix[p]=U.shadow.matrix,S++}i.point[p]=W,p++}else if(U.isHemisphereLight){const W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(G*T),W.groundColor.copy(U.groundColor).multiplyScalar(G*T),i.hemi[x]=W,x++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const C=i.hash;(C.directionalLength!==d||C.pointLength!==p||C.spotLength!==g||C.rectAreaLength!==v||C.hemiLength!==x||C.numDirectionalShadows!==w||C.numPointShadows!==S||C.numSpotShadows!==L||C.numSpotMaps!==F)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=L+F-y,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=y,C.directionalLength=d,C.pointLength=p,C.spotLength=g,C.rectAreaLength=v,C.hemiLength=x,C.numDirectionalShadows=w,C.numPointShadows=S,C.numSpotShadows=L,C.numSpotMaps=F,i.version=sp++)}function c(u,h){let f=0,m=0,_=0,d=0,p=0;const g=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const w=u[v];if(w.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(w.isSpotLight){const S=i.spot[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),_++}else if(w.isRectAreaLight){const S=i.rectArea[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(g),a.identity(),o.copy(w.matrixWorld),o.premultiply(g),a.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),d++}else if(w.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(g),m++}else if(w.isHemisphereLight){const S=i.hemi[p];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:i}}function Ga(r,e){const t=new op(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lp(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ga(r,e),t.set(s,[l])):o>=a.length?(l=new Ga(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class cp extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class up extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dp(r,e,t){let n=new ms;const i=new Me,s=new Me,o=new ct,a=new cp({depthPacking:mc}),l=new up,c={},u=t.maxTextureSize,h={[yn]:Dt,[Dt]:yn,[xn]:xn},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:fp,fragmentShader:hp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new jt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo,this.render=function(w,S,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const F=r.getRenderTarget(),y=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),C=r.state;C.setBlending(Mn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let k=0,K=w.length;k<K;k++){const U=w[k],D=U.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const G=D.getFrameExtents();if(i.multiply(G),s.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/G.x),i.x=s.x*G.x,D.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/G.y),i.y=s.y*G.y,D.mapSize.y=s.y)),D.map===null){const ee=this.type!==Pi?{minFilter:ut,magFilter:ut}:{};D.map=new dn(i.x,i.y,ee),D.map.texture.name=U.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const J=D.getViewportCount();for(let ee=0;ee<J;ee++){const W=D.getViewport(ee);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),C.viewport(o),D.updateMatrices(U,ee),n=D.getFrustum(),x(S,L,D.camera,U,this.type)}D.isPointLightShadow!==!0&&this.type===Pi&&g(D,L),D.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(F,y,T)};function g(w,S){const L=e.update(d);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new dn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(S,null,L,f,d,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(S,null,L,m,d,null)}function v(w,S,L,F,y,T){let C=null;const k=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)C=k;else if(C=L.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const K=C.uuid,U=S.uuid;let D=c[K];D===void 0&&(D={},c[K]=D);let G=D[U];G===void 0&&(G=C.clone(),D[U]=G),C=G}return C.visible=S.visible,C.wireframe=S.wireframe,T===Pi?C.side=S.shadowSide!==null?S.shadowSide:S.side:C.side=S.shadowSide!==null?S.shadowSide:h[S.side],C.alphaMap=S.alphaMap,C.alphaTest=S.alphaTest,C.map=S.map,C.clipShadows=S.clipShadows,C.clippingPlanes=S.clippingPlanes,C.clipIntersection=S.clipIntersection,C.displacementMap=S.displacementMap,C.displacementScale=S.displacementScale,C.displacementBias=S.displacementBias,C.wireframeLinewidth=S.wireframeLinewidth,C.linewidth=S.linewidth,L.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(L.matrixWorld),C.nearDistance=F,C.farDistance=y),C}function x(w,S,L,F,y){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Pi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const k=e.update(w),K=w.material;if(Array.isArray(K)){const U=k.groups;for(let D=0,G=U.length;D<G;D++){const J=U[D],ee=K[J.materialIndex];if(ee&&ee.visible){const W=v(w,ee,F,L.near,L.far,y);r.renderBufferDirect(L,null,k,W,w,J)}}}else if(K.visible){const U=v(w,K,F,L.near,L.far,y);r.renderBufferDirect(L,null,k,U,w,null)}}const C=w.children;for(let k=0,K=C.length;k<K;k++)x(C[k],S,L,F,y)}}function pp(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const q=new ct;let ne=null;const ue=new ct(0,0,0,0);return{setMask:function(de){ne!==de&&!P&&(r.colorMask(de,de,de,de),ne=de)},setLocked:function(de){P=de},setClear:function(de,ke,st,mt,qt){qt===!0&&(de*=mt,ke*=mt,st*=mt),q.set(de,ke,st,mt),ue.equals(q)===!1&&(r.clearColor(de,ke,st,mt),ue.copy(q))},reset:function(){P=!1,ne=null,ue.set(-1,0,0,0)}}}function s(){let P=!1,q=null,ne=null,ue=null;return{setTest:function(de){de?$(2929):he(2929)},setMask:function(de){q!==de&&!P&&(r.depthMask(de),q=de)},setFunc:function(de){if(ne!==de){switch(de){case Bl:r.depthFunc(512);break;case kl:r.depthFunc(519);break;case Gl:r.depthFunc(513);break;case Jr:r.depthFunc(515);break;case Vl:r.depthFunc(514);break;case Hl:r.depthFunc(518);break;case Wl:r.depthFunc(516);break;case jl:r.depthFunc(517);break;default:r.depthFunc(515)}ne=de}},setLocked:function(de){P=de},setClear:function(de){ue!==de&&(r.clearDepth(de),ue=de)},reset:function(){P=!1,q=null,ne=null,ue=null}}}function o(){let P=!1,q=null,ne=null,ue=null,de=null,ke=null,st=null,mt=null,qt=null;return{setTest:function(Ye){P||(Ye?$(2960):he(2960))},setMask:function(Ye){q!==Ye&&!P&&(r.stencilMask(Ye),q=Ye)},setFunc:function(Ye,It,Yt){(ne!==Ye||ue!==It||de!==Yt)&&(r.stencilFunc(Ye,It,Yt),ne=Ye,ue=It,de=Yt)},setOp:function(Ye,It,Yt){(ke!==Ye||st!==It||mt!==Yt)&&(r.stencilOp(Ye,It,Yt),ke=Ye,st=It,mt=Yt)},setLocked:function(Ye){P=Ye},setClear:function(Ye){qt!==Ye&&(r.clearStencil(Ye),qt=Ye)},reset:function(){P=!1,q=null,ne=null,ue=null,de=null,ke=null,st=null,mt=null,qt=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,d=[],p=null,g=!1,v=null,x=null,w=null,S=null,L=null,F=null,y=null,T=!1,C=null,k=null,K=null,U=null,D=null;const G=r.getParameter(35661);let J=!1,ee=0;const W=r.getParameter(7938);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=ee>=2);let Z=null,te={};const V=r.getParameter(3088),B=r.getParameter(2978),Q=new ct().fromArray(V),se=new ct().fromArray(B);function O(P,q,ne){const ue=new Uint8Array(4),de=r.createTexture();r.bindTexture(P,de),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let ke=0;ke<ne;ke++)r.texImage2D(q+ke,0,6408,1,1,0,6408,5121,ue);return de}const j={};j[3553]=O(3553,3553,1),j[34067]=O(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$(2929),l.setFunc(Jr),it(!1),rt(Ls),$(2884),nt(Mn);function $(P){f[P]!==!0&&(r.enable(P),f[P]=!0)}function he(P){f[P]!==!1&&(r.disable(P),f[P]=!1)}function fe(P,q){return m[P]!==q?(r.bindFramebuffer(P,q),m[P]=q,n&&(P===36009&&(m[36160]=q),P===36160&&(m[36009]=q)),!0):!1}function ve(P,q){let ne=d,ue=!1;if(P)if(ne=_.get(q),ne===void 0&&(ne=[],_.set(q,ne)),P.isWebGLMultipleRenderTargets){const de=P.texture;if(ne.length!==de.length||ne[0]!==36064){for(let ke=0,st=de.length;ke<st;ke++)ne[ke]=36064+ke;ne.length=de.length,ue=!0}}else ne[0]!==36064&&(ne[0]=36064,ue=!0);else ne[0]!==1029&&(ne[0]=1029,ue=!0);ue&&(t.isWebGL2?r.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Se(P){return p!==P?(r.useProgram(P),p=P,!0):!1}const Te={[li]:32774,[Cl]:32778,[Ll]:32779};if(n)Te[Is]=32775,Te[Fs]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Te[Is]=P.MIN_EXT,Te[Fs]=P.MAX_EXT)}const Ie={[Pl]:0,[Dl]:1,[Rl]:768,[yo]:770,[Ul]:776,[Nl]:774,[Fl]:772,[Il]:769,[bo]:771,[zl]:775,[Ol]:773};function nt(P,q,ne,ue,de,ke,st,mt){if(P===Mn){g===!0&&(he(3042),g=!1);return}if(g===!1&&($(3042),g=!0),P!==Al){if(P!==v||mt!==T){if((x!==li||L!==li)&&(r.blendEquation(32774),x=li,L=li),mt)switch(P){case fi:r.blendFuncSeparate(1,771,1,771);break;case Ps:r.blendFunc(1,1);break;case Ds:r.blendFuncSeparate(0,769,0,1);break;case Rs:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case fi:r.blendFuncSeparate(770,771,1,771);break;case Ps:r.blendFunc(770,1);break;case Ds:r.blendFuncSeparate(0,769,0,1);break;case Rs:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,S=null,F=null,y=null,v=P,T=mt}return}de=de||q,ke=ke||ne,st=st||ue,(q!==x||de!==L)&&(r.blendEquationSeparate(Te[q],Te[de]),x=q,L=de),(ne!==w||ue!==S||ke!==F||st!==y)&&(r.blendFuncSeparate(Ie[ne],Ie[ue],Ie[ke],Ie[st]),w=ne,S=ue,F=ke,y=st),v=P,T=!1}function dt(P,q){P.side===xn?he(2884):$(2884);let ne=P.side===Dt;q&&(ne=!ne),it(ne),P.blending===fi&&P.transparent===!1?nt(Mn):nt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ue=P.stencilWrite;c.setTest(ue),ue&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Be(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$(32926):he(32926)}function it(P){C!==P&&(P?r.frontFace(2304):r.frontFace(2305),C=P)}function rt(P){P!==El?($(2884),P!==k&&(P===Ls?r.cullFace(1029):P===Tl?r.cullFace(1028):r.cullFace(1032))):he(2884),k=P}function Ge(P){P!==K&&(J&&r.lineWidth(P),K=P)}function Be(P,q,ne){P?($(32823),(U!==q||D!==ne)&&(r.polygonOffset(q,ne),U=q,D=ne)):he(32823)}function wt(P){P?$(3089):he(3089)}function pt(P){P===void 0&&(P=33984+G-1),Z!==P&&(r.activeTexture(P),Z=P)}function E(P,q,ne){ne===void 0&&(Z===null?ne=33984+G-1:ne=Z);let ue=te[ne];ue===void 0&&(ue={type:void 0,texture:void 0},te[ne]=ue),(ue.type!==P||ue.texture!==q)&&(Z!==ne&&(r.activeTexture(ne),Z=ne),r.bindTexture(P,q||j[P]),ue.type=P,ue.texture=q)}function M(){const P=te[Z];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function X(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(P){Q.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function me(P){se.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),se.copy(P))}function Le(P,q){let ne=h.get(q);ne===void 0&&(ne=new WeakMap,h.set(q,ne));let ue=ne.get(P);ue===void 0&&(ue=r.getUniformBlockIndex(q,P.name),ne.set(P,ue))}function Fe(P,q){const ue=h.get(q).get(P);u.get(q)!==ue&&(r.uniformBlockBinding(q,ue,P.__bindingPointIndex),u.set(q,ue))}function ze(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},Z=null,te={},m={},_=new WeakMap,d=[],p=null,g=!1,v=null,x=null,w=null,S=null,L=null,F=null,y=null,T=!1,C=null,k=null,K=null,U=null,D=null,Q.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:$,disable:he,bindFramebuffer:fe,drawBuffers:ve,useProgram:Se,setBlending:nt,setMaterial:dt,setFlipSided:it,setCullFace:rt,setLineWidth:Ge,setPolygonOffset:Be,setScissorTest:wt,activeTexture:pt,bindTexture:E,unbindTexture:M,compressedTexImage2D:X,compressedTexImage3D:ie,texImage2D:oe,texImage3D:pe,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:R,texStorage3D:ce,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:_e,compressedTexSubImage3D:A,scissor:ge,viewport:me,reset:ze}}function mp(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,M){return g?new OffscreenCanvas(E,M):Fi("canvas")}function x(E,M,X,ie){let re=1;if((E.width>ie||E.height>ie)&&(re=ie/Math.max(E.width,E.height)),re<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const le=M?vc:Math.floor,_e=le(re*E.width),A=le(re*E.height);d===void 0&&(d=v(_e,A));const R=X?v(_e,A):d;return R.width=_e,R.height=A,R.getContext("2d").drawImage(E,0,0,_e,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+_e+"x"+A+")."),R}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return la(E.width)&&la(E.height)}function S(E){return a?!1:E.wrapS!==Wt||E.wrapT!==Wt||E.minFilter!==ut&&E.minFilter!==Ot}function L(E,M){return E.generateMipmaps&&M&&E.minFilter!==ut&&E.minFilter!==Ot}function F(E){r.generateMipmap(E)}function y(E,M,X,ie,re=!1){if(a===!1)return M;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=M;return M===6403&&(X===5126&&(le=33326),X===5131&&(le=33325),X===5121&&(le=33321)),M===33319&&(X===5126&&(le=33328),X===5131&&(le=33327),X===5121&&(le=33323)),M===6408&&(X===5126&&(le=34836),X===5131&&(le=34842),X===5121&&(le=ie===Ue&&re===!1?35907:32856),X===32819&&(le=32854),X===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function T(E,M,X){return L(E,X)===!0||E.isFramebufferTexture&&E.minFilter!==ut&&E.minFilter!==Ot?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function C(E){return E===ut||E===Os||E===gr?9728:9729}function k(E){const M=E.target;M.removeEventListener("dispose",k),U(M),M.isVideoTexture&&_.delete(M)}function K(E){const M=E.target;M.removeEventListener("dispose",K),G(M)}function U(E){const M=n.get(E);if(M.__webglInit===void 0)return;const X=E.source,ie=p.get(X);if(ie){const re=ie[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&D(E),Object.keys(ie).length===0&&p.delete(X)}n.remove(E)}function D(E){const M=n.get(E);r.deleteTexture(M.__webglTexture);const X=E.source,ie=p.get(X);delete ie[M.__cacheKey],o.memory.textures--}function G(E){const M=E.texture,X=n.get(E),ie=n.get(M);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)r.deleteFramebuffer(X.__webglFramebuffer[re]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[re]);else{if(r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let re=0;re<X.__webglColorRenderbuffer.length;re++)X.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[re]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let re=0,le=M.length;re<le;re++){const _e=n.get(M[re]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(M[re])}n.remove(M),n.remove(E)}let J=0;function ee(){J=0}function W(){const E=J;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),J+=1,E}function Z(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function te(E,M){const X=n.get(E);if(E.isVideoTexture&&wt(E),E.isRenderTargetTexture===!1&&E.version>0&&X.__version!==E.version){const ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(X,E,M);return}}t.bindTexture(3553,X.__webglTexture,33984+M)}function V(E,M){const X=n.get(E);if(E.version>0&&X.__version!==E.version){he(X,E,M);return}t.bindTexture(35866,X.__webglTexture,33984+M)}function B(E,M){const X=n.get(E);if(E.version>0&&X.__version!==E.version){he(X,E,M);return}t.bindTexture(32879,X.__webglTexture,33984+M)}function Q(E,M){const X=n.get(E);if(E.version>0&&X.__version!==E.version){fe(X,E,M);return}t.bindTexture(34067,X.__webglTexture,33984+M)}const se={[es]:10497,[Wt]:33071,[ts]:33648},O={[ut]:9728,[Os]:9984,[gr]:9986,[Ot]:9729,[Ql]:9985,[Ri]:9987};function j(E,M,X){if(X?(r.texParameteri(E,10242,se[M.wrapS]),r.texParameteri(E,10243,se[M.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,se[M.wrapR]),r.texParameteri(E,10240,O[M.magFilter]),r.texParameteri(E,10241,O[M.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),(M.wrapS!==Wt||M.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,10240,C(M.magFilter)),r.texParameteri(E,10241,C(M.minFilter)),M.minFilter!==ut&&M.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===ut||M.minFilter!==gr&&M.minFilter!==Ri||M.type===zn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===gi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(E,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function $(E,M){let X=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",k));const ie=M.source;let re=p.get(ie);re===void 0&&(re={},p.set(ie,re));const le=Z(M);if(le!==E.__cacheKey){re[le]===void 0&&(re[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[le].usedTimes++;const _e=re[E.__cacheKey];_e!==void 0&&(re[E.__cacheKey].usedTimes--,_e.usedTimes===0&&D(M)),E.__cacheKey=le,E.__webglTexture=re[le].texture}return X}function he(E,M,X){let ie=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=35866),M.isData3DTexture&&(ie=32879);const re=$(E,M),le=M.source;t.bindTexture(ie,E.__webglTexture,33984+X);const _e=n.get(le);if(le.version!==_e.__version||re===!0){t.activeTexture(33984+X),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const A=S(M)&&w(M.image)===!1;let R=x(M.image,A,!1,u);R=pt(M,R);const ce=w(R)||a,oe=s.convert(M.format,M.encoding);let pe=s.convert(M.type),ge=y(M.internalFormat,oe,pe,M.encoding,M.isVideoTexture);j(ie,M,ce);let me;const Le=M.mipmaps,Fe=a&&M.isVideoTexture!==!0,ze=_e.__version===void 0||re===!0,P=T(M,R,ce);if(M.isDepthTexture)ge=6402,a?M.type===zn?ge=36012:M.type===Nn?ge=33190:M.type===hi?ge=35056:ge=33189:M.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Un&&ge===6402&&M.type!==To&&M.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Nn,pe=s.convert(M.type)),M.format===_i&&ge===6402&&(ge=34041,M.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=hi,pe=s.convert(M.type))),ze&&(Fe?t.texStorage2D(3553,1,ge,R.width,R.height):t.texImage2D(3553,0,ge,R.width,R.height,0,oe,pe,null));else if(M.isDataTexture)if(Le.length>0&&ce){Fe&&ze&&t.texStorage2D(3553,P,ge,Le[0].width,Le[0].height);for(let q=0,ne=Le.length;q<ne;q++)me=Le[q],Fe?t.texSubImage2D(3553,q,0,0,me.width,me.height,oe,pe,me.data):t.texImage2D(3553,q,ge,me.width,me.height,0,oe,pe,me.data);M.generateMipmaps=!1}else Fe?(ze&&t.texStorage2D(3553,P,ge,R.width,R.height),t.texSubImage2D(3553,0,0,0,R.width,R.height,oe,pe,R.data)):t.texImage2D(3553,0,ge,R.width,R.height,0,oe,pe,R.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&ze&&t.texStorage3D(35866,P,ge,Le[0].width,Le[0].height,R.depth);for(let q=0,ne=Le.length;q<ne;q++)me=Le[q],M.format!==Nt?oe!==null?Fe?t.compressedTexSubImage3D(35866,q,0,0,0,me.width,me.height,R.depth,oe,me.data,0,0):t.compressedTexImage3D(35866,q,ge,me.width,me.height,R.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(35866,q,0,0,0,me.width,me.height,R.depth,oe,pe,me.data):t.texImage3D(35866,q,ge,me.width,me.height,R.depth,0,oe,pe,me.data)}else{Fe&&ze&&t.texStorage2D(3553,P,ge,Le[0].width,Le[0].height);for(let q=0,ne=Le.length;q<ne;q++)me=Le[q],M.format!==Nt?oe!==null?Fe?t.compressedTexSubImage2D(3553,q,0,0,me.width,me.height,oe,me.data):t.compressedTexImage2D(3553,q,ge,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(3553,q,0,0,me.width,me.height,oe,pe,me.data):t.texImage2D(3553,q,ge,me.width,me.height,0,oe,pe,me.data)}else if(M.isDataArrayTexture)Fe?(ze&&t.texStorage3D(35866,P,ge,R.width,R.height,R.depth),t.texSubImage3D(35866,0,0,0,0,R.width,R.height,R.depth,oe,pe,R.data)):t.texImage3D(35866,0,ge,R.width,R.height,R.depth,0,oe,pe,R.data);else if(M.isData3DTexture)Fe?(ze&&t.texStorage3D(32879,P,ge,R.width,R.height,R.depth),t.texSubImage3D(32879,0,0,0,0,R.width,R.height,R.depth,oe,pe,R.data)):t.texImage3D(32879,0,ge,R.width,R.height,R.depth,0,oe,pe,R.data);else if(M.isFramebufferTexture){if(ze)if(Fe)t.texStorage2D(3553,P,ge,R.width,R.height);else{let q=R.width,ne=R.height;for(let ue=0;ue<P;ue++)t.texImage2D(3553,ue,ge,q,ne,0,oe,pe,null),q>>=1,ne>>=1}}else if(Le.length>0&&ce){Fe&&ze&&t.texStorage2D(3553,P,ge,Le[0].width,Le[0].height);for(let q=0,ne=Le.length;q<ne;q++)me=Le[q],Fe?t.texSubImage2D(3553,q,0,0,oe,pe,me):t.texImage2D(3553,q,ge,oe,pe,me);M.generateMipmaps=!1}else Fe?(ze&&t.texStorage2D(3553,P,ge,R.width,R.height),t.texSubImage2D(3553,0,0,0,oe,pe,R)):t.texImage2D(3553,0,ge,oe,pe,R);L(M,ce)&&F(ie),_e.__version=le.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function fe(E,M,X){if(M.image.length!==6)return;const ie=$(E,M),re=M.source;t.bindTexture(34067,E.__webglTexture,33984+X);const le=n.get(re);if(re.version!==le.__version||ie===!0){t.activeTexture(33984+X),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const _e=M.isCompressedTexture||M.image[0].isCompressedTexture,A=M.image[0]&&M.image[0].isDataTexture,R=[];for(let q=0;q<6;q++)!_e&&!A?R[q]=x(M.image[q],!1,!0,c):R[q]=A?M.image[q].image:M.image[q],R[q]=pt(M,R[q]);const ce=R[0],oe=w(ce)||a,pe=s.convert(M.format,M.encoding),ge=s.convert(M.type),me=y(M.internalFormat,pe,ge,M.encoding),Le=a&&M.isVideoTexture!==!0,Fe=le.__version===void 0||ie===!0;let ze=T(M,ce,oe);j(34067,M,oe);let P;if(_e){Le&&Fe&&t.texStorage2D(34067,ze,me,ce.width,ce.height);for(let q=0;q<6;q++){P=R[q].mipmaps;for(let ne=0;ne<P.length;ne++){const ue=P[ne];M.format!==Nt?pe!==null?Le?t.compressedTexSubImage2D(34069+q,ne,0,0,ue.width,ue.height,pe,ue.data):t.compressedTexImage2D(34069+q,ne,me,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+q,ne,0,0,ue.width,ue.height,pe,ge,ue.data):t.texImage2D(34069+q,ne,me,ue.width,ue.height,0,pe,ge,ue.data)}}}else{P=M.mipmaps,Le&&Fe&&(P.length>0&&ze++,t.texStorage2D(34067,ze,me,R[0].width,R[0].height));for(let q=0;q<6;q++)if(A){Le?t.texSubImage2D(34069+q,0,0,0,R[q].width,R[q].height,pe,ge,R[q].data):t.texImage2D(34069+q,0,me,R[q].width,R[q].height,0,pe,ge,R[q].data);for(let ne=0;ne<P.length;ne++){const de=P[ne].image[q].image;Le?t.texSubImage2D(34069+q,ne+1,0,0,de.width,de.height,pe,ge,de.data):t.texImage2D(34069+q,ne+1,me,de.width,de.height,0,pe,ge,de.data)}}else{Le?t.texSubImage2D(34069+q,0,0,0,pe,ge,R[q]):t.texImage2D(34069+q,0,me,pe,ge,R[q]);for(let ne=0;ne<P.length;ne++){const ue=P[ne];Le?t.texSubImage2D(34069+q,ne+1,0,0,pe,ge,ue.image[q]):t.texImage2D(34069+q,ne+1,me,pe,ge,ue.image[q])}}}L(M,oe)&&F(34067),le.__version=re.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ve(E,M,X,ie,re){const le=s.convert(X.format,X.encoding),_e=s.convert(X.type),A=y(X.internalFormat,le,_e,X.encoding);n.get(M).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,A,M.width,M.height,M.depth,0,le,_e,null):t.texImage2D(re,0,A,M.width,M.height,0,le,_e,null)),t.bindFramebuffer(36160,E),Be(M)?f.framebufferTexture2DMultisampleEXT(36160,ie,re,n.get(X).__webglTexture,0,Ge(M)):(re===3553||re>=34069&&re<=34074)&&r.framebufferTexture2D(36160,ie,re,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(E,M,X){if(r.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let ie=33189;if(X||Be(M)){const re=M.depthTexture;re&&re.isDepthTexture&&(re.type===zn?ie=36012:re.type===Nn&&(ie=33190));const le=Ge(M);Be(M)?f.renderbufferStorageMultisampleEXT(36161,le,ie,M.width,M.height):r.renderbufferStorageMultisample(36161,le,ie,M.width,M.height)}else r.renderbufferStorage(36161,ie,M.width,M.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){const ie=Ge(M);X&&Be(M)===!1?r.renderbufferStorageMultisample(36161,ie,35056,M.width,M.height):Be(M)?f.renderbufferStorageMultisampleEXT(36161,ie,35056,M.width,M.height):r.renderbufferStorage(36161,34041,M.width,M.height),r.framebufferRenderbuffer(36160,33306,36161,E)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let re=0;re<ie.length;re++){const le=ie[re],_e=s.convert(le.format,le.encoding),A=s.convert(le.type),R=y(le.internalFormat,_e,A,le.encoding),ce=Ge(M);X&&Be(M)===!1?r.renderbufferStorageMultisample(36161,ce,R,M.width,M.height):Be(M)?f.renderbufferStorageMultisampleEXT(36161,ce,R,M.width,M.height):r.renderbufferStorage(36161,R,M.width,M.height)}}r.bindRenderbuffer(36161,null)}function Te(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),te(M.depthTexture,0);const ie=n.get(M.depthTexture).__webglTexture,re=Ge(M);if(M.depthTexture.format===Un)Be(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,re):r.framebufferTexture2D(36160,36096,3553,ie,0);else if(M.depthTexture.format===_i)Be(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,re):r.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function Ie(E){const M=n.get(E),X=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Te(M.__webglFramebuffer,E)}else if(X){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=r.createRenderbuffer(),Se(M.__webglDepthbuffer[ie],E,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Se(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function nt(E,M,X){const ie=n.get(E);M!==void 0&&ve(ie.__webglFramebuffer,E,E.texture,36064,3553),X!==void 0&&Ie(E)}function dt(E){const M=E.texture,X=n.get(E),ie=n.get(M);E.addEventListener("dispose",K),E.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=M.version,o.memory.textures++);const re=E.isWebGLCubeRenderTarget===!0,le=E.isWebGLMultipleRenderTargets===!0,_e=w(E)||a;if(re){X.__webglFramebuffer=[];for(let A=0;A<6;A++)X.__webglFramebuffer[A]=r.createFramebuffer()}else{if(X.__webglFramebuffer=r.createFramebuffer(),le)if(i.drawBuffers){const A=E.texture;for(let R=0,ce=A.length;R<ce;R++){const oe=n.get(A[R]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Be(E)===!1){const A=le?M:[M];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let R=0;R<A.length;R++){const ce=A[R];X.__webglColorRenderbuffer[R]=r.createRenderbuffer(),r.bindRenderbuffer(36161,X.__webglColorRenderbuffer[R]);const oe=s.convert(ce.format,ce.encoding),pe=s.convert(ce.type),ge=y(ce.internalFormat,oe,pe,ce.encoding,E.isXRRenderTarget===!0),me=Ge(E);r.renderbufferStorageMultisample(36161,me,ge,E.width,E.height),r.framebufferRenderbuffer(36160,36064+R,36161,X.__webglColorRenderbuffer[R])}r.bindRenderbuffer(36161,null),E.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(X.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ie.__webglTexture),j(34067,M,_e);for(let A=0;A<6;A++)ve(X.__webglFramebuffer[A],E,M,36064,34069+A);L(M,_e)&&F(34067),t.unbindTexture()}else if(le){const A=E.texture;for(let R=0,ce=A.length;R<ce;R++){const oe=A[R],pe=n.get(oe);t.bindTexture(3553,pe.__webglTexture),j(3553,oe,_e),ve(X.__webglFramebuffer,E,oe,36064+R,3553),L(oe,_e)&&F(3553)}t.unbindTexture()}else{let A=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?A=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,ie.__webglTexture),j(A,M,_e),ve(X.__webglFramebuffer,E,M,36064,A),L(M,_e)&&F(A),t.unbindTexture()}E.depthBuffer&&Ie(E)}function it(E){const M=w(E)||a,X=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0,re=X.length;ie<re;ie++){const le=X[ie];if(L(le,M)){const _e=E.isWebGLCubeRenderTarget?34067:3553,A=n.get(le).__webglTexture;t.bindTexture(_e,A),F(_e),t.unbindTexture()}}}function rt(E){if(a&&E.samples>0&&Be(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],X=E.width,ie=E.height;let re=16384;const le=[],_e=E.stencilBuffer?33306:36096,A=n.get(E),R=E.isWebGLMultipleRenderTargets===!0;if(R)for(let ce=0;ce<M.length;ce++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){le.push(36064+ce),E.depthBuffer&&le.push(_e);const oe=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(oe===!1&&(E.depthBuffer&&(re|=256),E.stencilBuffer&&(re|=1024)),R&&r.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[ce]),oe===!0&&(r.invalidateFramebuffer(36008,[_e]),r.invalidateFramebuffer(36009,[_e])),R){const pe=n.get(M[ce]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,pe,0)}r.blitFramebuffer(0,0,X,ie,0,0,X,ie,re,9728),m&&r.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),R)for(let ce=0;ce<M.length;ce++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ce,36161,A.__webglColorRenderbuffer[ce]);const oe=n.get(M[ce]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ce,3553,oe,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function Ge(E){return Math.min(h,E.samples)}function Be(E){const M=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function wt(E){const M=o.render.frame;_.get(E)!==M&&(_.set(E,M),E.update())}function pt(E,M){const X=E.encoding,ie=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ns||X!==bn&&(X===Ue?a===!1?e.has("EXT_sRGB")===!0&&ie===Nt?(E.format=ns,E.minFilter=Ot,E.generateMipmaps=!1):M=Lo.sRGBToLinear(M):(ie!==Nt||re!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),M}this.allocateTextureUnit=W,this.resetTextureUnits=ee,this.setTexture2D=te,this.setTexture2DArray=V,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=nt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Be}function gp(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Bn)return 5121;if(s===nc)return 32819;if(s===ic)return 32820;if(s===$l)return 5120;if(s===ec)return 5122;if(s===To)return 5123;if(s===tc)return 5124;if(s===Nn)return 5125;if(s===zn)return 5126;if(s===gi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rc)return 6406;if(s===Nt)return 6408;if(s===sc)return 6409;if(s===ac)return 6410;if(s===Un)return 6402;if(s===_i)return 34041;if(s===ns)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===oc)return 6403;if(s===lc)return 36244;if(s===cc)return 33319;if(s===uc)return 33320;if(s===fc)return 36249;if(s===_r||s===xr||s===vr||s===Mr)if(o===Ue)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===_r)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===_r)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ns||s===zs||s===Us||s===Bs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ns)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Us)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ks||s===Gs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ks)return o===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vs||s===Hs||s===Ws||s===js||s===Xs||s===qs||s===Ys||s===Zs||s===Ks||s===Js||s===Qs||s===$s||s===ea||s===ta)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Vs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ws)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===js)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ys)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ks)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Js)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$s)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ea)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ta)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===yr)return o===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===dc||s===na||s===ia||s===ra)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===yr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===na)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ia)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ra)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class _p extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ui extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xp={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),g=this._getHandJoint(c,d);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class vp extends St{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Un,u!==Un&&u!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Un&&(n=Nn),n===void 0&&u===_i&&(n=hi),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ut,this.minFilter=l!==void 0?l:ut,this.flipY=!1,this.generateMipmaps=!1}}class Mp extends jn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const d=t.getContextAttributes();let p=null,g=null;const v=[],x=[],w=new Set,S=new Map,L=new Pt;L.layers.enable(1),L.viewport=new ct;const F=new Pt;F.layers.enable(2),F.viewport=new ct;const y=[L,F],T=new _p;T.layers.enable(1),T.layers.enable(2);let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Q=v[B];return Q===void 0&&(Q=new qr,v[B]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(B){let Q=v[B];return Q===void 0&&(Q=new qr,v[B]=Q),Q.getGripSpace()},this.getHand=function(B){let Q=v[B];return Q===void 0&&(Q=new qr,v[B]=Q),Q.getHandSpace()};function K(B){const Q=x.indexOf(B.inputSource);if(Q===-1)return;const se=v[Q];se!==void 0&&se.dispatchEvent({type:B.type,data:B.inputSource})}function U(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",D);for(let B=0;B<v.length;B++){const Q=x[B];Q!==null&&(x[B]=null,v[B].disconnect(Q))}C=null,k=null,e.setRenderTarget(p),m=null,f=null,h=null,i=null,g=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",U),i.addEventListener("inputsourceschange",D),d.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:m}),g=new dn(m.framebufferWidth,m.framebufferHeight,{format:Nt,type:Bn,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let Q=null,se=null,O=null;d.depth&&(O=d.stencil?35056:33190,Q=d.stencil?_i:Un,se=d.stencil?hi:Nn);const j={colorFormat:32856,depthFormat:O,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(j),i.updateRenderState({layers:[f]}),g=new dn(f.textureWidth,f.textureHeight,{format:Nt,type:Bn,depthTexture:new vp(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const $=e.properties.get(g);$.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(B){for(let Q=0;Q<B.removed.length;Q++){const se=B.removed[Q],O=x.indexOf(se);O>=0&&(x[O]=null,v[O].disconnect(se))}for(let Q=0;Q<B.added.length;Q++){const se=B.added[Q];let O=x.indexOf(se);if(O===-1){for(let $=0;$<v.length;$++)if($>=x.length){x.push(se),O=$;break}else if(x[$]===null){x[$]=se,O=$;break}if(O===-1)break}const j=v[O];j&&j.connect(se)}}const G=new N,J=new N;function ee(B,Q,se){G.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(se.matrixWorld);const O=G.distanceTo(J),j=Q.projectionMatrix.elements,$=se.projectionMatrix.elements,he=j[14]/(j[10]-1),fe=j[14]/(j[10]+1),ve=(j[9]+1)/j[5],Se=(j[9]-1)/j[5],Te=(j[8]-1)/j[0],Ie=($[8]+1)/$[0],nt=he*Te,dt=he*Ie,it=O/(-Te+Ie),rt=it*-Te;Q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(rt),B.translateZ(it),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ge=he+it,Be=fe+it,wt=nt-rt,pt=dt+(O-rt),E=ve*fe/Be*Ge,M=Se*fe/Be*Ge;B.projectionMatrix.makePerspective(wt,pt,E,M,Ge,Be)}function W(B,Q){Q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;T.near=F.near=L.near=B.near,T.far=F.far=L.far=B.far,(C!==T.near||k!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,k=T.far);const Q=B.parent,se=T.cameras;W(T,Q);for(let j=0;j<se.length;j++)W(se[j],Q);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),B.matrix.copy(T.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const O=B.children;for(let j=0,$=O.length;j<$;j++)O[j].updateMatrixWorld(!0);se.length===2?ee(T,L,F):T.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return w};let Z=null;function te(B,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const se=u.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let O=!1;se.length!==T.cameras.length&&(T.cameras.length=0,O=!0);for(let j=0;j<se.length;j++){const $=se[j];let he=null;if(m!==null)he=m.getViewport($);else{const ve=h.getViewSubImage(f,$);he=ve.viewport,j===0&&(e.setRenderTargetTextures(g,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(g))}let fe=y[j];fe===void 0&&(fe=new Pt,fe.layers.enable(j),fe.viewport=new ct,y[j]=fe),fe.matrix.fromArray($.transform.matrix),fe.projectionMatrix.fromArray($.projectionMatrix),fe.viewport.set(he.x,he.y,he.width,he.height),j===0&&T.matrix.copy(fe.matrix),O===!0&&T.cameras.push(fe)}}for(let se=0;se<v.length;se++){const O=x[se],j=v[se];O!==null&&j!==void 0&&j.update(O,Q,c||o)}if(Z&&Z(B,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let se=null;for(const O of w)Q.detectedPlanes.has(O)||(se===null&&(se=[]),se.push(O));if(se!==null)for(const O of se)w.delete(O),S.delete(O),n.dispatchEvent({type:"planeremoved",data:O});for(const O of Q.detectedPlanes)if(!w.has(O))w.add(O),S.set(O,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:O});else{const j=S.get(O);O.lastChangedTime>j&&(S.set(O,O.lastChangedTime),n.dispatchEvent({type:"planechanged",data:O}))}}_=null}const V=new ko;V.setAnimationLoop(te),this.setAnimationLoop=function(B){Z=B},this.dispose=function(){}}}function yp(r,e){function t(d,p){p.color.getRGB(d.fogColor.value,zo(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,g,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,x)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),_(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,g,v):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Dt&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Dt&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(d.envMap.value=g,d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const w=r.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*w}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,g,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*g,d.scale.value=v*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,g){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Dt&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=g.texture,d.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function bp(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(v,x){const w=x.program;n.uniformBlockBinding(v,w)}function c(v,x){let w=i[v.id];w===void 0&&(_(v),w=u(v),i[v.id]=w,v.addEventListener("dispose",p));const S=x.program;n.updateUBOMapping(v,S);const L=e.render.frame;s[v.id]!==L&&(f(v),s[v.id]=L)}function u(v){const x=h();v.__bindingPointIndex=x;const w=r.createBuffer(),S=v.__size,L=v.usage;return r.bindBuffer(35345,w),r.bufferData(35345,S,L),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,w),w}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=i[v.id],w=v.uniforms,S=v.__cache;r.bindBuffer(35345,x);for(let L=0,F=w.length;L<F;L++){const y=w[L];if(m(y,L,S)===!0){const T=y.__offset,C=Array.isArray(y.value)?y.value:[y.value];let k=0;for(let K=0;K<C.length;K++){const U=C[K],D=d(U);typeof U=="number"?(y.__data[0]=U,r.bufferSubData(35345,T+k,y.__data)):U.isMatrix3?(y.__data[0]=U.elements[0],y.__data[1]=U.elements[1],y.__data[2]=U.elements[2],y.__data[3]=U.elements[0],y.__data[4]=U.elements[3],y.__data[5]=U.elements[4],y.__data[6]=U.elements[5],y.__data[7]=U.elements[0],y.__data[8]=U.elements[6],y.__data[9]=U.elements[7],y.__data[10]=U.elements[8],y.__data[11]=U.elements[0]):(U.toArray(y.__data,k),k+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,T,y.__data)}}r.bindBuffer(35345,null)}function m(v,x,w){const S=v.value;if(w[x]===void 0){if(typeof S=="number")w[x]=S;else{const L=Array.isArray(S)?S:[S],F=[];for(let y=0;y<L.length;y++)F.push(L[y].clone());w[x]=F}return!0}else if(typeof S=="number"){if(w[x]!==S)return w[x]=S,!0}else{const L=Array.isArray(w[x])?w[x]:[w[x]],F=Array.isArray(S)?S:[S];for(let y=0;y<L.length;y++){const T=L[y];if(T.equals(F[y])===!1)return T.copy(F[y]),!0}}return!1}function _(v){const x=v.uniforms;let w=0;const S=16;let L=0;for(let F=0,y=x.length;F<y;F++){const T=x[F],C={boundary:0,storage:0},k=Array.isArray(T.value)?T.value:[T.value];for(let K=0,U=k.length;K<U;K++){const D=k[K],G=d(D);C.boundary+=G.boundary,C.storage+=G.storage}if(T.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=w,F>0){L=w%S;const K=S-L;L!==0&&K-C.boundary<0&&(w+=S-L,T.__offset=w)}w+=C.storage}return L=w%S,L>0&&(w+=S-L),v.__size=w,v.__cache={},this}function d(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function g(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}function Sp(){const r=Fi("canvas");return r.style.display="block",r}function vs(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Sp(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=bn,this.useLegacyLights=!0,this.toneMapping=$t,this.toneMappingExposure=1;const d=this;let p=!1,g=0,v=0,x=null,w=-1,S=null;const L=new ct,F=new ct;let y=null,T=e.width,C=e.height,k=1,K=null,U=null;const D=new ct(0,0,T,C),G=new ct(0,0,T,C);let J=!1;const ee=new ms;let W=!1,Z=!1,te=null;const V=new $e,B=new N,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return x===null?k:1}let O=t;function j(b,z){for(let H=0;H<b.length;H++){const I=b[H],Y=e.getContext(I,z);if(Y!==null)return Y}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${us}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",me,!1),O===null){const z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&z.shift(),O=j(z,b),O===null)throw j(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let $,he,fe,ve,Se,Te,Ie,nt,dt,it,rt,Ge,Be,wt,pt,E,M,X,ie,re,le,_e,A,R;function ce(){$=new Fh(O),he=new Ch(O,$,r),$.init(he),_e=new gp(O,$,he),fe=new pp(O,$,he),ve=new zh,Se=new ep,Te=new mp(O,$,fe,Se,he,_e,ve),Ie=new Ph(d),nt=new Ih(d),dt=new jc(O,he),A=new Th(O,$,dt,he),it=new Oh(O,dt,ve,A),rt=new Gh(O,it,dt,ve),ie=new kh(O,he,Te),E=new Lh(Se),Ge=new $d(d,Ie,nt,$,he,A,E),Be=new yp(d,Se),wt=new np,pt=new lp($,he),X=new Eh(d,Ie,nt,fe,rt,u,o),M=new dp(d,rt,he),R=new bp(O,ve,he,fe),re=new Ah(O,$,ve,he),le=new Nh(O,$,ve,he),ve.programs=Ge.programs,d.capabilities=he,d.extensions=$,d.properties=Se,d.renderLists=wt,d.shadowMap=M,d.state=fe,d.info=ve}ce();const oe=new Mp(d,O);this.xr=oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=$.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=$.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(T,C,!1))},this.getSize=function(b){return b.set(T,C)},this.setSize=function(b,z,H=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=b,C=z,e.width=Math.floor(b*k),e.height=Math.floor(z*k),H===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(T*k,C*k).floor()},this.setDrawingBufferSize=function(b,z,H){T=b,C=z,k=H,e.width=Math.floor(b*H),e.height=Math.floor(z*H),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,z,H,I){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,z,H,I),fe.viewport(L.copy(D).multiplyScalar(k).floor())},this.getScissor=function(b){return b.copy(G)},this.setScissor=function(b,z,H,I){b.isVector4?G.set(b.x,b.y,b.z,b.w):G.set(b,z,H,I),fe.scissor(F.copy(G).multiplyScalar(k).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(b){fe.setScissorTest(J=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){U=b},this.getClearColor=function(b){return b.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(b=!0,z=!0,H=!0){let I=0;b&&(I|=16384),z&&(I|=256),H&&(I|=1024),O.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",me,!1),wt.dispose(),pt.dispose(),Se.dispose(),Ie.dispose(),nt.dispose(),rt.dispose(),A.dispose(),R.dispose(),Ge.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ne),oe.removeEventListener("sessionend",ue),te&&(te.dispose(),te=null),de.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const b=ve.autoReset,z=M.enabled,H=M.autoUpdate,I=M.needsUpdate,Y=M.type;ce(),ve.autoReset=b,M.enabled=z,M.autoUpdate=H,M.needsUpdate=I,M.type=Y}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Le(b){const z=b.target;z.removeEventListener("dispose",Le),Fe(z)}function Fe(b){ze(b),Se.remove(b)}function ze(b){const z=Se.get(b).programs;z!==void 0&&(z.forEach(function(H){Ge.releaseProgram(H)}),b.isShaderMaterial&&Ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,H,I,Y,xe){z===null&&(z=Q);const ye=Y.isMesh&&Y.matrixWorld.determinant()<0,Ae=cl(b,z,H,I,Y);fe.setMaterial(I,ye);let Ce=H.index,Oe=1;I.wireframe===!0&&(Ce=it.getWireframeAttribute(H),Oe=2);const Pe=H.drawRange,De=H.attributes.position;let Ke=Pe.start*Oe,Et=(Pe.start+Pe.count)*Oe;xe!==null&&(Ke=Math.max(Ke,xe.start*Oe),Et=Math.min(Et,(xe.start+xe.count)*Oe)),Ce!==null?(Ke=Math.max(Ke,0),Et=Math.min(Et,Ce.count)):De!=null&&(Ke=Math.max(Ke,0),Et=Math.min(Et,De.count));const rn=Et-Ke;if(rn<0||rn===1/0)return;A.setup(Y,I,Ae,H,Ce);let Sn,Je=re;if(Ce!==null&&(Sn=dt.get(Ce),Je=le,Je.setIndex(Sn)),Y.isMesh)I.wireframe===!0?(fe.setLineWidth(I.wireframeLinewidth*se()),Je.setMode(1)):Je.setMode(4);else if(Y.isLine){let Re=I.linewidth;Re===void 0&&(Re=1),fe.setLineWidth(Re*se()),Y.isLineSegments?Je.setMode(1):Y.isLineLoop?Je.setMode(2):Je.setMode(3)}else Y.isPoints?Je.setMode(0):Y.isSprite&&Je.setMode(4);if(Y.isInstancedMesh)Je.renderInstances(Ke,rn,Y.count);else if(H.isInstancedBufferGeometry){const Re=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,fr=Math.min(H.instanceCount,Re);Je.renderInstances(Ke,rn,fr)}else Je.render(Ke,rn)},this.compile=function(b,z){function H(I,Y,xe){I.transparent===!0&&I.side===xn&&I.forceSinglePass===!1?(I.side=Dt,I.needsUpdate=!0,It(I,Y,xe),I.side=yn,I.needsUpdate=!0,It(I,Y,xe),I.side=xn):It(I,Y,xe)}f=pt.get(b),f.init(),_.push(f),b.traverseVisible(function(I){I.isLight&&I.layers.test(z.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights(d.useLegacyLights),b.traverse(function(I){const Y=I.material;if(Y)if(Array.isArray(Y))for(let xe=0;xe<Y.length;xe++){const ye=Y[xe];H(ye,b,I)}else H(Y,b,I)}),_.pop(),f=null};let P=null;function q(b){P&&P(b)}function ne(){de.stop()}function ue(){de.start()}const de=new ko;de.setAnimationLoop(q),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(b){P=b,oe.setAnimationLoop(b),b===null?de.stop():de.start()},oe.addEventListener("sessionstart",ne),oe.addEventListener("sessionend",ue),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(z),z=oe.getCamera()),b.isScene===!0&&b.onBeforeRender(d,b,z,x),f=pt.get(b,_.length),f.init(),_.push(f),V.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ee.setFromProjectionMatrix(V),Z=this.localClippingEnabled,W=E.init(this.clippingPlanes,Z),h=wt.get(b,m.length),h.init(),m.push(h),ke(b,z,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(K,U),W===!0&&E.beginShadows();const H=f.state.shadowsArray;if(M.render(H,b,z),W===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(h,b),f.setupLights(d.useLegacyLights),z.isArrayCamera){const I=z.cameras;for(let Y=0,xe=I.length;Y<xe;Y++){const ye=I[Y];st(h,b,ye,ye.viewport)}}else st(h,b,z);x!==null&&(Te.updateMultisampleRenderTarget(x),Te.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(d,b,z),A.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function ke(b,z,H,I){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ee.intersectsSprite(b)){I&&B.setFromMatrixPosition(b.matrixWorld).applyMatrix4(V);const ye=rt.update(b),Ae=b.material;Ae.visible&&h.push(b,ye,Ae,H,B.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==ve.render.frame&&(b.skeleton.update(),b.skeleton.frame=ve.render.frame),!b.frustumCulled||ee.intersectsObject(b))){I&&B.setFromMatrixPosition(b.matrixWorld).applyMatrix4(V);const ye=rt.update(b),Ae=b.material;if(Array.isArray(Ae)){const Ce=ye.groups;for(let Oe=0,Pe=Ce.length;Oe<Pe;Oe++){const De=Ce[Oe],Ke=Ae[De.materialIndex];Ke&&Ke.visible&&h.push(b,ye,Ke,H,B.z,De)}}else Ae.visible&&h.push(b,ye,Ae,H,B.z,null)}}const xe=b.children;for(let ye=0,Ae=xe.length;ye<Ae;ye++)ke(xe[ye],z,H,I)}function st(b,z,H,I){const Y=b.opaque,xe=b.transmissive,ye=b.transparent;f.setupLightsView(H),W===!0&&E.setGlobalState(d.clippingPlanes,H),xe.length>0&&mt(Y,z,H),I&&fe.viewport(L.copy(I)),Y.length>0&&qt(Y,z,H),xe.length>0&&qt(xe,z,H),ye.length>0&&qt(ye,z,H),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function mt(b,z,H){const I=he.isWebGL2;te===null&&(te=new dn(1024,1024,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?gi:Bn,minFilter:Ri,samples:I&&s===!0?4:0}));const Y=d.getRenderTarget();d.setRenderTarget(te),d.clear();const xe=d.toneMapping;d.toneMapping=$t,qt(b,z,H),d.toneMapping=xe,Te.updateMultisampleRenderTarget(te),Te.updateRenderTargetMipmap(te),d.setRenderTarget(Y)}function qt(b,z,H){const I=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,xe=b.length;Y<xe;Y++){const ye=b[Y],Ae=ye.object,Ce=ye.geometry,Oe=I===null?ye.material:I,Pe=ye.group;Ae.layers.test(H.layers)&&Ye(Ae,z,H,Ce,Oe,Pe)}}function Ye(b,z,H,I,Y,xe){b.onBeforeRender(d,z,H,I,Y,xe),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(d,z,H,I,b,xe),Y.transparent===!0&&Y.side===xn&&Y.forceSinglePass===!1?(Y.side=Dt,Y.needsUpdate=!0,d.renderBufferDirect(H,z,I,Y,b,xe),Y.side=yn,Y.needsUpdate=!0,d.renderBufferDirect(H,z,I,Y,b,xe),Y.side=xn):d.renderBufferDirect(H,z,I,Y,b,xe),b.onAfterRender(d,z,H,I,Y,xe)}function It(b,z,H){z.isScene!==!0&&(z=Q);const I=Se.get(b),Y=f.state.lights,xe=f.state.shadowsArray,ye=Y.state.version,Ae=Ge.getParameters(b,Y.state,xe,z,H),Ce=Ge.getProgramCacheKey(Ae);let Oe=I.programs;I.environment=b.isMeshStandardMaterial?z.environment:null,I.fog=z.fog,I.envMap=(b.isMeshStandardMaterial?nt:Ie).get(b.envMap||I.environment),Oe===void 0&&(b.addEventListener("dispose",Le),Oe=new Map,I.programs=Oe);let Pe=Oe.get(Ce);if(Pe!==void 0){if(I.currentProgram===Pe&&I.lightsStateVersion===ye)return Yt(b,Ae),Pe}else Ae.uniforms=Ge.getUniforms(b),b.onBuild(H,Ae,d),b.onBeforeCompile(Ae,d),Pe=Ge.acquireProgram(Ae,Ce),Oe.set(Ce,Pe),I.uniforms=Ae.uniforms;const De=I.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=E.uniform),Yt(b,Ae),I.needsLights=fl(b),I.lightsStateVersion=ye,I.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.directionalShadowMap.value=Y.state.directionalShadowMap,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotShadowMap.value=Y.state.spotShadowMap,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMap.value=Y.state.pointShadowMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Ke=Pe.getUniforms(),Et=rr.seqWithValue(Ke.seq,De);return I.currentProgram=Pe,I.uniformsList=Et,Pe}function Yt(b,z){const H=Se.get(b);H.outputEncoding=z.outputEncoding,H.instancing=z.instancing,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function cl(b,z,H,I,Y){z.isScene!==!0&&(z=Q),Te.resetTextureUnits();const xe=z.fog,ye=I.isMeshStandardMaterial?z.environment:null,Ae=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:bn,Ce=(I.isMeshStandardMaterial?nt:Ie).get(I.envMap||ye),Oe=I.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pe=!!I.normalMap&&!!H.attributes.tangent,De=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,Et=!!H.morphAttributes.color,rn=I.toneMapped?d.toneMapping:$t,Sn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Je=Sn!==void 0?Sn.length:0,Re=Se.get(I),fr=f.state.lights;if(W===!0&&(Z===!0||b!==S)){const Tt=b===S&&I.id===w;E.setState(I,b,Tt)}let at=!1;I.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==fr.state.version||Re.outputEncoding!==Ae||Y.isInstancedMesh&&Re.instancing===!1||!Y.isInstancedMesh&&Re.instancing===!0||Y.isSkinnedMesh&&Re.skinning===!1||!Y.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Ce||I.fog===!0&&Re.fog!==xe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==E.numPlanes||Re.numIntersection!==E.numIntersection)||Re.vertexAlphas!==Oe||Re.vertexTangents!==Pe||Re.morphTargets!==De||Re.morphNormals!==Ke||Re.morphColors!==Et||Re.toneMapping!==rn||he.isWebGL2===!0&&Re.morphTargetsCount!==Je)&&(at=!0):(at=!0,Re.__version=I.version);let wn=Re.currentProgram;at===!0&&(wn=It(I,z,Y));let ws=!1,bi=!1,hr=!1;const gt=wn.getUniforms(),En=Re.uniforms;if(fe.useProgram(wn.program)&&(ws=!0,bi=!0,hr=!0),I.id!==w&&(w=I.id,bi=!0),ws||S!==b){if(gt.setValue(O,"projectionMatrix",b.projectionMatrix),he.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),S!==b&&(S=b,bi=!0,hr=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Tt=gt.map.cameraPosition;Tt!==void 0&&Tt.setValue(O,B.setFromMatrixPosition(b.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&gt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||Y.isSkinnedMesh)&&gt.setValue(O,"viewMatrix",b.matrixWorldInverse)}if(Y.isSkinnedMesh){gt.setOptional(O,Y,"bindMatrix"),gt.setOptional(O,Y,"bindMatrixInverse");const Tt=Y.skeleton;Tt&&(he.floatVertexTextures?(Tt.boneTexture===null&&Tt.computeBoneTexture(),gt.setValue(O,"boneTexture",Tt.boneTexture,Te),gt.setValue(O,"boneTextureSize",Tt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const dr=H.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0&&he.isWebGL2===!0)&&ie.update(Y,H,wn),(bi||Re.receiveShadow!==Y.receiveShadow)&&(Re.receiveShadow=Y.receiveShadow,gt.setValue(O,"receiveShadow",Y.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(En.envMap.value=Ce,En.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),bi&&(gt.setValue(O,"toneMappingExposure",d.toneMappingExposure),Re.needsLights&&ul(En,hr),xe&&I.fog===!0&&Be.refreshFogUniforms(En,xe),Be.refreshMaterialUniforms(En,I,k,C,te),rr.upload(O,Re.uniformsList,En,Te)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(rr.upload(O,Re.uniformsList,En,Te),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&gt.setValue(O,"center",Y.center),gt.setValue(O,"modelViewMatrix",Y.modelViewMatrix),gt.setValue(O,"normalMatrix",Y.normalMatrix),gt.setValue(O,"modelMatrix",Y.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Tt=I.uniformsGroups;for(let pr=0,hl=Tt.length;pr<hl;pr++)if(he.isWebGL2){const Es=Tt[pr];R.update(Es,wn),R.bind(Es,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function ul(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function fl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(b,z,H){Se.get(b.texture).__webglTexture=z,Se.get(b.depthTexture).__webglTexture=H;const I=Se.get(b);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=H===void 0,I.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const H=Se.get(b);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,H=0){x=b,g=z,v=H;let I=!0,Y=null,xe=!1,ye=!1;if(b){const Ce=Se.get(b);Ce.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),I=!1):Ce.__webglFramebuffer===void 0?Te.setupRenderTarget(b):Ce.__hasExternalTextures&&Te.rebindTextures(b,Se.get(b.texture).__webglTexture,Se.get(b.depthTexture).__webglTexture);const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ye=!0);const Pe=Se.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Y=Pe[z],xe=!0):he.isWebGL2&&b.samples>0&&Te.useMultisampledRTT(b)===!1?Y=Se.get(b).__webglMultisampledFramebuffer:Y=Pe,L.copy(b.viewport),F.copy(b.scissor),y=b.scissorTest}else L.copy(D).multiplyScalar(k).floor(),F.copy(G).multiplyScalar(k).floor(),y=J;if(fe.bindFramebuffer(36160,Y)&&he.drawBuffers&&I&&fe.drawBuffers(b,Y),fe.viewport(L),fe.scissor(F),fe.setScissorTest(y),xe){const Ce=Se.get(b.texture);O.framebufferTexture2D(36160,36064,34069+z,Ce.__webglTexture,H)}else if(ye){const Ce=Se.get(b.texture),Oe=z||0;O.framebufferTextureLayer(36160,36064,Ce.__webglTexture,H||0,Oe)}w=-1},this.readRenderTargetPixels=function(b,z,H,I,Y,xe,ye){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){fe.bindFramebuffer(36160,Ae);try{const Ce=b.texture,Oe=Ce.format,Pe=Ce.type;if(Oe!==Nt&&_e.convert(Oe)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===gi&&($.has("EXT_color_buffer_half_float")||he.isWebGL2&&$.has("EXT_color_buffer_float"));if(Pe!==Bn&&_e.convert(Pe)!==O.getParameter(35738)&&!(Pe===zn&&(he.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-I&&H>=0&&H<=b.height-Y&&O.readPixels(z,H,I,Y,_e.convert(Oe),_e.convert(Pe),xe)}finally{const Ce=x!==null?Se.get(x).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(b,z,H=0){const I=Math.pow(2,-H),Y=Math.floor(z.image.width*I),xe=Math.floor(z.image.height*I);Te.setTexture2D(z,0),O.copyTexSubImage2D(3553,H,0,0,b.x,b.y,Y,xe),fe.unbindTexture()},this.copyTextureToTexture=function(b,z,H,I=0){const Y=z.image.width,xe=z.image.height,ye=_e.convert(H.format),Ae=_e.convert(H.type);Te.setTexture2D(H,0),O.pixelStorei(37440,H.flipY),O.pixelStorei(37441,H.premultiplyAlpha),O.pixelStorei(3317,H.unpackAlignment),z.isDataTexture?O.texSubImage2D(3553,I,b.x,b.y,Y,xe,ye,Ae,z.image.data):z.isCompressedTexture?O.compressedTexSubImage2D(3553,I,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,ye,z.mipmaps[0].data):O.texSubImage2D(3553,I,b.x,b.y,ye,Ae,z.image),I===0&&H.generateMipmaps&&O.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(b,z,H,I,Y=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=b.max.x-b.min.x+1,ye=b.max.y-b.min.y+1,Ae=b.max.z-b.min.z+1,Ce=_e.convert(I.format),Oe=_e.convert(I.type);let Pe;if(I.isData3DTexture)Te.setTexture3D(I,0),Pe=32879;else if(I.isDataArrayTexture)Te.setTexture2DArray(I,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,I.flipY),O.pixelStorei(37441,I.premultiplyAlpha),O.pixelStorei(3317,I.unpackAlignment);const De=O.getParameter(3314),Ke=O.getParameter(32878),Et=O.getParameter(3316),rn=O.getParameter(3315),Sn=O.getParameter(32877),Je=H.isCompressedTexture?H.mipmaps[0]:H.image;O.pixelStorei(3314,Je.width),O.pixelStorei(32878,Je.height),O.pixelStorei(3316,b.min.x),O.pixelStorei(3315,b.min.y),O.pixelStorei(32877,b.min.z),H.isDataTexture||H.isData3DTexture?O.texSubImage3D(Pe,Y,z.x,z.y,z.z,xe,ye,Ae,Ce,Oe,Je.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Pe,Y,z.x,z.y,z.z,xe,ye,Ae,Ce,Je.data)):O.texSubImage3D(Pe,Y,z.x,z.y,z.z,xe,ye,Ae,Ce,Oe,Je),O.pixelStorei(3314,De),O.pixelStorei(32878,Ke),O.pixelStorei(3316,Et),O.pixelStorei(3315,rn),O.pixelStorei(32877,Sn),Y===0&&I.generateMipmaps&&O.generateMipmap(Pe),fe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Te.setTextureCube(b,0):b.isData3DTexture?Te.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Te.setTexture2DArray(b,0):Te.setTexture2D(b,0),fe.unbindTexture()},this.resetState=function(){g=0,v=0,x=null,fe.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(vs.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class wp extends vs{}wp.prototype.isWebGL1Renderer=!0;class Ep extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ms extends nn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new N,u=new Me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=n+h/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(a,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ys extends nn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new N,f=new N,m=[],_=[],d=[],p=[];for(let g=0;g<=n;g++){const v=[],x=g/n;let w=0;g==0&&o==0?w=.5/t:g==n&&l==Math.PI&&(w=-.5/t);for(let S=0;S<=t;S++){const L=S/t;h.x=-e*Math.cos(i+L*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+L*s)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),p.push(L+w,1-x),v.push(c++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){const x=u[g][v+1],w=u[g][v],S=u[g+1][v],L=u[g+1][v+1];(g!==0||o>0)&&m.push(x,w,L),(g!==n-1||l<Math.PI)&&m.push(w,S,L)}this.setIndex(m),this.setAttribute("position",new Mt(_,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jo extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tp extends vi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const Va={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ap{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const Xo=new Ap;class qo{constructor(e){this.manager=e!==void 0?e:Xo,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Cp extends qo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Va.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Fi("img");function l(){u(),Va.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ha extends qo{constructor(e){super(e)}load(e,t,n,i){const s=new St,o=new Cp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Yo extends Ze{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Lp extends Yo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Yr=new $e,Wa=new N,ja=new N;class Pp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wa),ja.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ja),t.updateMatrixWorld(),Yr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dp extends Pp{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rp extends Yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Dp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zo{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xa(){return(typeof performance>"u"?Date:performance).now()}class Ip{constructor(e,t,n=0,i=1/0){this.ray=new Ro(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return rs(e,this,n,t),n.sort(qa),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)rs(e[i],this,n,t);return n.sort(qa),n}}function qa(r,e){return r.distance-e.distance}function rs(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)rs(i[s],e,t,!0)}}class Ya{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:us}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=us);const Fp={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Ui{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Op=new _s(-1,1,1,-1,0,1),bs=new nn;bs.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3));bs.setAttribute("uv",new Mt([0,2,0,0,2,0],2));class Ko{constructor(e){this._mesh=new jt(bs,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Op)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Np extends Ui{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Uo.clone(e.uniforms),this.material=new tn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ko(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Za extends Ui{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class zp extends Ui{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Up{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Me);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Np(Fp),this.clock=new Zo}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Za!==void 0&&(o instanceof Za?n=!0:o instanceof zp&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jo extends Ui{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Bp=(r,e,t)=>{r.renderer=new vs({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new Up(r.renderer),r.composer.addPass(new Jo(r.scene,as(r.camera)))},Ka=(r,e,t)=>{!r.renderer||(e?r.renderer.outputEncoding=bn:r.renderer.outputEncoding=Ue,t?r.renderer.toneMapping=$t:r.renderer.toneMapping=wo)},Ja=(r,e,t)=>{var n,i,s,o,a,l,c,u;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(s=r.renderer).setPixelRatio)==null||o.call(s,t),(l=(a=r.composer).setSize)==null||l.call(a,e.width,e.height),(u=(c=r.composer).setPixelRatio)==null||u.call(c,t))},Qa=(r,e,t)=>{!r.renderer||(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},Qt=r=>r.userData,kp=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},Qo=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),Gp=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,Vp=(r,e,t)=>{let n;const i=r.camera.subscribe(c=>n=c);je(i);let s;const o=r.pointer.subscribe(c=>s=c);je(o);let a;const l=c=>{var f,m;c.preventDefault();const u=c.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,kp(r,c);const h=Hp(e,s,n);if(u==="pointerdown"&&(a=h?{object:h.object,instanceId:h.instanceId}:null),u==="click"){if(!Wp(h,a)){a=null;return}a=null}!h||(m=(f=Qt(h.object)).eventDispatcher)==null||m.call(f,u,{...h,event:c})};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function Hp(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=Qo(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function Wp(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const jp=(r,e)=>{let t;const n=r.pointerOverCanvas.subscribe(c=>t=c);je(n);let i;const s=r.camera.subscribe(c=>i=c);je(s);let o;const a=r.pointer.subscribe(c=>o=c);return je(a),{raycast:()=>{var h,f,m,_,d,p,g,v;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Qo(e,o,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&Gp(e.lastIntersection,u)&&((p=(d=Qt(e.lastIntersection.object)).eventDispatcher)==null||p.call(d,"pointerleave",e.lastIntersection),(v=(g=Qt(u.object)).eventDispatcher)==null||v.call(g,"pointerenter",u)):(_=(m=Qt(u.object)).eventDispatcher)==null||_.call(m,"pointerenter",u):e.lastIntersection&&((f=(h=Qt(e.lastIntersection.object)).eventDispatcher)==null||f.call(h,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},ur=typeof window<"u",Xp=r=>{if(!ur)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),je(()=>{!e||cancelAnimationFrame(e)})},qp=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>{var o,a;return((o=i.order)!=null?o:0)>((a=s.order)!=null?a:0)?1:-1}).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},Yp=r=>{!r.debugFrameloop||(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},Zp=(r,e,t,n)=>{let i=as(r.camera);const s=r.camera.subscribe(a=>i=a);je(s);const{raycast:o}=jp(r,e);Xp(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!i||!r.composer||!r.renderer||(qp(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),Yp(t),t.frameInvalidated=!1,t.advance=!1))})},Kp=()=>{const r=new Pt(75,0,.1,1e3);return Qt(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},Jp=r=>{const e=r.size.subscribe(t=>{Qt(as(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});je(e)},Qp=(r,e,t,n,i,s,o)=>{const a={audioListeners:new Map,addAudioListener:(g,v)=>{if(v=v!=null?v:"default",a.audioListeners.has(v)){console.warn(`An AudioListener with the id "${v}" has already been added, aborting.`);return}a.audioListeners.set(v,g)},removeAudioListener:g=>{if(g=g!=null?g:"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}a.audioListeners.delete(g)},getAudioListener:g=>{if(g=g!=null?g:"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}return a.audioListeners.get(g)}},l={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:wl([n,i],([g,v])=>g||v),pointer:lt(new Me),pointerOverCanvas:lt(!1),clock:new Zo,camera:lt(Kp()),scene:new Ep,renderer:void 0,composer:void 0,invalidate:g=>{l.frameInvalidated=!0,l.debugFrameloop&&g&&(l.invalidations[g]=l.invalidations[g]?l.invalidations[g]+1:1)},advance:()=>{l.advance=!0}},u={flat:lt(e),linear:lt(r),dpr:lt(t),setCamera:g=>{c.camera.set(g),c.composer&&(c.composer.passes.forEach(v=>{v instanceof Jo&&(v.camera=g)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Ip,lastIntersection:null,addRaycastableObject:g=>{u.raycastableObjects.add(g)},removeRaycastableObject:g=>{u.raycastableObjects.delete(g)},addInteractiveObject:g=>{u.interactiveObjects.add(g)},removeInteractiveObject:g=>{u.interactiveObjects.delete(g)},addPass:g=>{!c.composer||(c.composer.addPass(g),c.invalidate("Canvas: adding pass"))},removePass:g=>{!c.composer||(c.composer.removePass(g),c.invalidate("Canvas: removing pass"))}},h={dispose:async(g=!1)=>{await os(),!(!h.shouldDispose&&!g)&&(h.disposableObjects.forEach((v,x)=>{var w;(v===0||g)&&((w=x==null?void 0:x.dispose)==null||w.call(x),h.disposableObjects.delete(x))}),h.shouldDispose=!1)},collectDisposableObjects:(g,v)=>{const x=v!=null?v:[];return g&&((g==null?void 0:g.dispose)&&typeof g.dispose=="function"&&g.type!=="Scene"&&x.push(g),Object.entries(g).forEach(([w,S])=>{if(w==="parent"||w==="children"||typeof S!="object")return;const L=S;L!=null&&L.dispose&&h.collectDisposableObjects(L,x)})),x},addDisposableObjects:g=>{g.forEach(v=>{const x=h.disposableObjects.get(v);x?h.disposableObjects.set(v,x+1):h.disposableObjects.set(v,1)})},removeDisposableObjects:g=>{g.length!==0&&(g.forEach(v=>{const x=h.disposableObjects.get(v);x&&x>0&&h.disposableObjects.set(v,x-1)}),h.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return Ht("threlte",c),Ht("threlte-root",u),Ht("threlte-render-context",l),Ht("threlte-audio-context",a),Ht("threlte-disposal-context",h),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,disposalCtx:h,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>h}};function $o(r,e){const t=lt(r);let n=r;const i=t.subscribe(a=>n=a);return je(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(a),e==null||e(a,l)},update:a=>{const l=a(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const yi=()=>hn("threlte");function $p(r){let e;const t=r[8].default,n=Gn(t,r,r[7],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&Vn(n,t,i,i[7],e?Wn(t,i[7],s,null):Hn(i[7]),null)},i(i){e||(be(n,i),e=!0)},o(i){Ee(n,i),e=!1},d(i){n&&n.d(i)}}}const em=()=>({onChildMount:hn("threlte-hierarchical-object-on-mount"),onChildDestroy:hn("threlte-hierarchical-object-on-destroy")}),el=()=>hn("threlte-hierarchical-parent-context");function tm(r,e,t){var g;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const c=v=>{a.push(v),t(1,a),l==null||l(v)};let{onChildDestroy:u=void 0}=e;const h=v=>{const x=a.findIndex(w=>w.uuid===v.uuid);x!==-1&&a.splice(x,1),t(1,a),u==null||u(v)},{invalidate:f}=yi(),m=el();zt(r,m,v=>t(6,n=v));let{parent:_=n}=e;const d=em();o&&((g=d.onChildMount)==null||g.call(d,o),f("HierarchicalObject: object added"));const p=$o(o,(v,x)=>{var w,S;x&&((w=d.onChildDestroy)==null||w.call(d,x),f("HierarchicalObject: object added")),v&&((S=d.onChildMount)==null||S.call(d,v),f("HierarchicalObject: object removed"))});return je(()=>{var v;o&&((v=d.onChildDestroy)==null||v.call(d,o),f("HierarchicalObject: object removed"))}),Ht("threlte-hierarchical-object-on-mount",c),Ht("threlte-hierarchical-object-on-destroy",h),Ht("threlte-hierarchical-parent-context",p),r.$$set=v=>{"object"in v&&t(3,o=v.object),"children"in v&&t(1,a=v.children),"onChildMount"in v&&t(4,l=v.onChildMount),"onChildDestroy"in v&&t(5,u=v.onChildDestroy),"parent"in v&&t(2,_=v.parent),"$$scope"in v&&t(7,s=v.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,_=n),r.$$.dirty&8&&p.set(o)},[m,a,_,o,l,u,n,s,i]}class nm extends Ut{constructor(e){super(),Bt(this,e,tm,$p,Rt,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function im(r){let e;const t=r[1].default,n=Gn(t,r,r[4],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&Vn(n,t,i,i[4],e?Wn(t,i[4],s,null):Hn(i[4]),null)},i(i){e||(be(n,i),e=!0)},o(i){Ee(n,i),e=!1},d(i){n&&n.d(i)}}}function rm(r){let e,t;return e=new nm({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[im]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment)},m(n,i){He(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ee(e.$$.fragment,n),t=!1},d(n){We(e,n)}}}function sm(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=l=>s.add(l),a=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,o,a,i]}class tl extends Ut{constructor(e){super(),Bt(this,e,sm,rm,Rt,{object:0})}}const am=()=>{const r=lt({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(o=>e=o);je(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&r.set({width:a,height:l})},s=o=>{n=o,i(),window.addEventListener("resize",i)};return ur?(je(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function $a(r){let e,t;return e=new tl({props:{object:r[0].scene,$$slots:{default:[om]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment)},m(n,i){He(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ee(e.$$.fragment,n),t=!1},d(n){We(e,n)}}}function om(r){let e;const t=r[29].default,n=Gn(t,r,r[33],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&Vn(n,t,i,i[33],e?Wn(t,i[33],s,null):Hn(i[33]),null)},i(i){e||(be(n,i),e=!0)},o(i){Ee(n,i),e=!1},d(i){n&&n.d(i)}}}function lm(r){let e,t,n,i,s=r[2]&&$a(r);return{c(){e=In("canvas"),s&&s.c(),Fn(e,"class","svelte-o3oskp")},m(o,a){Xe(o,e,a),s&&s.m(e,null),r[30](e),t=!0,n||(i=[_l(r[3].call(null,e)),An(e,"click",r[9]),An(e,"contextmenu",r[10]),An(e,"pointerup",r[13]),An(e,"pointerdown",r[11]),An(e,"pointermove",r[12]),An(e,"pointerenter",r[31]),An(e,"pointerleave",r[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&be(s,1)):(s=$a(o),s.c(),be(s,1),s.m(e,null)):s&&(sr(),Ee(s,1,1,()=>{s=null}),ar())},i(o){t||(be(s),t=!0)},o(o){Ee(s),t=!1},d(o){o&&qe(e),s&&s.d(),r[30](null),n=!1,po(i)}}}const eo=new Set;function cm(r,e,t){let n,i,s,o,{$$slots:a={},$$scope:l}=e,{dpr:c=ur?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:h=!1}=e,{frameloop:f="demand"}=e,{debugFrameloop:m=!1}=e,{shadows:_=!0}=e,{shadowMapType:d=Mo}=e,{size:p=void 0}=e,{rendererParameters:g=void 0}=e,v,x=!1;const w=lt(p),{parentSize:S,parentSizeAction:L}=am(),F=Qp(h,u,c,w,S,m,f),{getCtx:y,renderCtx:T,disposalCtx:C}=F,{ctx:k,rootCtx:K,audioCtx:U}=F;Jp(k),eo.add(k.invalidate),je(()=>{eo.delete(k.invalidate)});const{size:D,scene:G}=k;zt(r,D,$=>t(26,i=$));const{flat:J,linear:ee,dpr:W}=K;zt(r,J,$=>t(27,s=$)),zt(r,ee,$=>t(28,o=$)),zt(r,W,$=>t(25,n=$)),Ht("threlte-parent",lt(G)),mo(()=>{!v||(Bp(k,v,g),Ka(k,o,s),Ja(k,i,n),Qa(k,_,d),t(2,x=!0))}),Zp(k,K,T,C);const{onClick:Z,onContextMenu:te,onPointerDown:V,onPointerMove:B,onPointerUp:Q}=Vp(k,K,T);je(()=>{C.dispose(!0)});function se($){ls[$?"unshift":"push"](()=>{v=$,t(1,v)})}const O=()=>y().pointerOverCanvas.set(!0),j=()=>y().pointerOverCanvas.set(!1);return r.$$set=$=>{"dpr"in $&&t(14,c=$.dpr),"flat"in $&&t(15,u=$.flat),"linear"in $&&t(16,h=$.linear),"frameloop"in $&&t(17,f=$.frameloop),"debugFrameloop"in $&&t(18,m=$.debugFrameloop),"shadows"in $&&t(19,_=$.shadows),"shadowMapType"in $&&t(20,d=$.shadowMapType),"size"in $&&t(21,p=$.size),"rendererParameters"in $&&t(22,g=$.rendererParameters),"$$scope"in $&&t(33,l=$.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&w.set(p),r.$$.dirty[0]&65536&&mr(ee,o=h,o),r.$$.dirty[0]&32768&&mr(J,s=u,s),r.$$.dirty[0]&16384&&mr(W,n=c,n),r.$$.dirty[0]&402653184&&Ka(y(),o,s),r.$$.dirty[0]&100663296&&Ja(y(),i,n),r.$$.dirty[0]&1572864&&Qa(y(),_,d)},[k,v,x,L,y,D,J,ee,W,Z,te,V,B,Q,c,u,h,f,m,_,d,p,g,K,U,n,i,s,o,a,se,O,j,l]}class um extends Ut{constructor(e){super(),Bt(this,e,cm,lm,Rt,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const nl=()=>hn("threlte-root"),fm=()=>hn("threlte-disposal-context");function hm(r){let e;const t=r[9].default,n=Gn(t,r,r[8],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&Vn(n,t,i,i[8],e?Wn(t,i[8],s,null):Hn(i[8]),null)},i(i){e||(be(n,i),e=!0)},o(i){Ee(n,i),e=!1},d(i){n&&n.d(i)}}}const to="threlte-disposable-object-context";function dm(r,e,t){var p;let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:c}=fm();let{object:u=void 0}=e,h=u,{dispose:f=void 0}=e;const m=hn(to);zt(r,m,g=>t(7,i=g));const _=lt((p=f!=null?f:i)!=null?p:!0);zt(r,_,g=>t(6,n=g)),Ht(to,_);let d=n?a(u):[];return l(d),je(()=>{c(d)}),r.$$set=g=>{"object"in g&&t(2,u=g.object),"dispose"in g&&t(3,f=g.dispose),"$$scope"in g&&t(8,o=g.$$scope)},r.$$.update=()=>{var g;r.$$.dirty&136&&_.set((g=f!=null?f:i)!=null?g:!0),r.$$.dirty&116&&u!==h&&(c(d),t(5,d=n?a(u):[]),l(d),t(4,h=u))},[m,_,u,f,h,d,n,i,o,s]}class il extends Ut{constructor(e){super(),Bt(this,e,dm,hm,Rt,{object:2,dispose:3})}}const Ss=(r,e)=>{var a;if(!ur)return{start:()=>{},stop:()=>{},started:xo(!1)};const t=hn("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=lt(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((a=e==null?void 0:e.autostart)==null||a)&&o(),je(()=>{s()}),{start:o,stop:s,started:{subscribe:i.subscribe}}},pm=()=>{const r=lt(!1);return(async()=>{await os(),r.set(!0)})(),r};function mm(r,e,t){let n,i,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new N,h=cs(),{invalidate:f}=yi(),m=pm();zt(r,m,x=>t(8,i=x));const _=async()=>{i||await os(),h("transform")},d=async()=>{f("TransformableObject: transformed"),await _()};Qt(s).onTransform=d;const{start:p,stop:g}=Ss(async()=>{c&&!l&&c instanceof Ze&&(c.getWorldPosition(u),s.lookAt(u),await _())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),v=$o(s);return zt(r,v,x=>t(7,n=x)),r.$$set=x=>{"object"in x&&t(2,s=x.object),"position"in x&&t(3,o=x.position),"scale"in x&&t(4,a=x.scale),"rotation"in x&&t(5,l=x.rotation),"lookAt"in x&&t(6,c=x.lookAt)},r.$$.update=()=>{var x,w,S,L,F,y,T,C,k,K,U,D,G;r.$$.dirty&4&&v.set(s),r.$$.dirty&232&&(o&&(n.position.set((x=o.x)!=null?x:0,(w=o.y)!=null?w:0,(S=o.z)!=null?S:0),d()),c&&!l&&(c instanceof Ze?p():(g(),n.lookAt((L=c.x)!=null?L:0,(F=c.y)!=null?F:0,(y=c.z)!=null?y:0),d())),c||g()),r.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set((T=a.x)!=null?T:1,(C=a.y)!=null?C:1,(k=a.z)!=null?k:1),d()),r.$$.dirty&160&&l&&(n.rotation.set((K=l.x)!=null?K:0,(U=l.y)!=null?U:0,(D=l.z)!=null?D:0,(G=l.order)!=null?G:"XYZ"),d())},[m,v,s,o,a,l,c,n]}class gm extends Ut{constructor(e){super(),Bt(this,e,mm,null,Rt,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}const no=[],_m=(r,e)=>{const t=no.find(i=>i instanceof r);if(t)return t;const n=e();return no.push(n),n},io={type:"change"},Zr={type:"start"},ro={type:"end"};class xm extends jn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qn.ROTATE,MIDDLE:qn.DOLLY,RIGHT:qn.PAN},this.touches={ONE:Yn.ROTATE,TWO:Yn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",pt),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",pt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(io),n.update(),s=i.NONE},this.update=function(){const A=new N,R=new kn().setFromUnitVectors(e.up,new N(0,1,0)),ce=R.clone().invert(),oe=new N,pe=new kn,ge=2*Math.PI;return function(){const Le=n.object.position;A.copy(Le).sub(n.target),A.applyQuaternion(R),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&T(F()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Fe=n.minAzimuthAngle,ze=n.maxAzimuthAngle;return isFinite(Fe)&&isFinite(ze)&&(Fe<-Math.PI?Fe+=ge:Fe>Math.PI&&(Fe-=ge),ze<-Math.PI?ze+=ge:ze>Math.PI&&(ze-=ge),Fe<=ze?a.theta=Math.max(Fe,Math.min(ze,a.theta)):a.theta=a.theta>(Fe+ze)/2?Math.max(Fe,a.theta):Math.min(ze,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(a),A.applyQuaternion(ce),Le.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||oe.distanceToSquared(n.object.position)>o||8*(1-pe.dot(n.object.quaternion))>o?(n.dispatchEvent(io),oe.copy(n.object.position),pe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",X),n.domElement.removeEventListener("pointerdown",nt),n.domElement.removeEventListener("pointercancel",rt),n.domElement.removeEventListener("wheel",wt),n.domElement.removeEventListener("pointermove",dt),n.domElement.removeEventListener("pointerup",it),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",pt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Ya,l=new Ya;let c=1;const u=new N;let h=!1;const f=new Me,m=new Me,_=new Me,d=new Me,p=new Me,g=new Me,v=new Me,x=new Me,w=new Me,S=[],L={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function T(A){l.theta-=A}function C(A){l.phi-=A}const k=function(){const A=new N;return function(ce,oe){A.setFromMatrixColumn(oe,0),A.multiplyScalar(-ce),u.add(A)}}(),K=function(){const A=new N;return function(ce,oe){n.screenSpacePanning===!0?A.setFromMatrixColumn(oe,1):(A.setFromMatrixColumn(oe,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ce),u.add(A)}}(),U=function(){const A=new N;return function(ce,oe){const pe=n.domElement;if(n.object.isPerspectiveCamera){const ge=n.object.position;A.copy(ge).sub(n.target);let me=A.length();me*=Math.tan(n.object.fov/2*Math.PI/180),k(2*ce*me/pe.clientHeight,n.object.matrix),K(2*oe*me/pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(ce*(n.object.right-n.object.left)/n.object.zoom/pe.clientWidth,n.object.matrix),K(oe*(n.object.top-n.object.bottom)/n.object.zoom/pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(A){n.object.isPerspectiveCamera?c/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(A){n.object.isPerspectiveCamera?c*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(A){f.set(A.clientX,A.clientY)}function ee(A){v.set(A.clientX,A.clientY)}function W(A){d.set(A.clientX,A.clientY)}function Z(A){m.set(A.clientX,A.clientY),_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const R=n.domElement;T(2*Math.PI*_.x/R.clientHeight),C(2*Math.PI*_.y/R.clientHeight),f.copy(m),n.update()}function te(A){x.set(A.clientX,A.clientY),w.subVectors(x,v),w.y>0?D(y()):w.y<0&&G(y()),v.copy(x),n.update()}function V(A){p.set(A.clientX,A.clientY),g.subVectors(p,d).multiplyScalar(n.panSpeed),U(g.x,g.y),d.copy(p),n.update()}function B(A){A.deltaY<0?G(y()):A.deltaY>0&&D(y()),n.update()}function Q(A){let R=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),R=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),R=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),R=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),R=!0;break}R&&(A.preventDefault(),n.update())}function se(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const A=.5*(S[0].pageX+S[1].pageX),R=.5*(S[0].pageY+S[1].pageY);f.set(A,R)}}function O(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const A=.5*(S[0].pageX+S[1].pageX),R=.5*(S[0].pageY+S[1].pageY);d.set(A,R)}}function j(){const A=S[0].pageX-S[1].pageX,R=S[0].pageY-S[1].pageY,ce=Math.sqrt(A*A+R*R);v.set(0,ce)}function $(){n.enableZoom&&j(),n.enablePan&&O()}function he(){n.enableZoom&&j(),n.enableRotate&&se()}function fe(A){if(S.length==1)m.set(A.pageX,A.pageY);else{const ce=_e(A),oe=.5*(A.pageX+ce.x),pe=.5*(A.pageY+ce.y);m.set(oe,pe)}_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const R=n.domElement;T(2*Math.PI*_.x/R.clientHeight),C(2*Math.PI*_.y/R.clientHeight),f.copy(m)}function ve(A){if(S.length===1)p.set(A.pageX,A.pageY);else{const R=_e(A),ce=.5*(A.pageX+R.x),oe=.5*(A.pageY+R.y);p.set(ce,oe)}g.subVectors(p,d).multiplyScalar(n.panSpeed),U(g.x,g.y),d.copy(p)}function Se(A){const R=_e(A),ce=A.pageX-R.x,oe=A.pageY-R.y,pe=Math.sqrt(ce*ce+oe*oe);x.set(0,pe),w.set(0,Math.pow(x.y/v.y,n.zoomSpeed)),D(w.y),v.copy(x)}function Te(A){n.enableZoom&&Se(A),n.enablePan&&ve(A)}function Ie(A){n.enableZoom&&Se(A),n.enableRotate&&fe(A)}function nt(A){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",dt),n.domElement.addEventListener("pointerup",it)),ie(A),A.pointerType==="touch"?E(A):Ge(A))}function dt(A){n.enabled!==!1&&(A.pointerType==="touch"?M(A):Be(A))}function it(A){re(A),S.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",dt),n.domElement.removeEventListener("pointerup",it)),n.dispatchEvent(ro),s=i.NONE}function rt(A){re(A)}function Ge(A){let R;switch(A.button){case 0:R=n.mouseButtons.LEFT;break;case 1:R=n.mouseButtons.MIDDLE;break;case 2:R=n.mouseButtons.RIGHT;break;default:R=-1}switch(R){case qn.DOLLY:if(n.enableZoom===!1)return;ee(A),s=i.DOLLY;break;case qn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;W(A),s=i.PAN}else{if(n.enableRotate===!1)return;J(A),s=i.ROTATE}break;case qn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;J(A),s=i.ROTATE}else{if(n.enablePan===!1)return;W(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Zr)}function Be(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Z(A);break;case i.DOLLY:if(n.enableZoom===!1)return;te(A);break;case i.PAN:if(n.enablePan===!1)return;V(A);break}}function wt(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(Zr),B(A),n.dispatchEvent(ro))}function pt(A){n.enabled===!1||n.enablePan===!1||Q(A)}function E(A){switch(le(A),S.length){case 1:switch(n.touches.ONE){case Yn.ROTATE:if(n.enableRotate===!1)return;se(),s=i.TOUCH_ROTATE;break;case Yn.PAN:if(n.enablePan===!1)return;O(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Yn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$(),s=i.TOUCH_DOLLY_PAN;break;case Yn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Zr)}function M(A){switch(le(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;fe(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ve(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ie(A),n.update();break;default:s=i.NONE}}function X(A){n.enabled!==!1&&A.preventDefault()}function ie(A){S.push(A)}function re(A){delete L[A.pointerId];for(let R=0;R<S.length;R++)if(S[R].pointerId==A.pointerId){S.splice(R,1);return}}function le(A){let R=L[A.pointerId];R===void 0&&(R=new Me,L[A.pointerId]=R),R.set(A.pageX,A.pageY)}function _e(A){const R=A.pointerId===S[0].pointerId?S[1]:S[0];return L[R.pointerId]}n.domElement.addEventListener("contextmenu",X),n.domElement.addEventListener("pointerdown",nt),n.domElement.addEventListener("pointercancel",rt),n.domElement.addEventListener("wheel",wt,{passive:!1}),this.update()}}function vm(r){let e,t,n,i;return e=new il({props:{dispose:r[2],object:r[0]}}),n=new gm({props:{object:r[4],position:r[1]}}),n.$on("transform",r[5]),{c(){Ve(e.$$.fragment),t=bt(),Ve(n.$$.fragment)},m(s,o){He(e,s,o),Xe(s,t,o),He(n,s,o),i=!0},p(s,o){const a={};o[0]&4&&(a.dispose=s[2]),o[0]&1&&(a.object=s[0]),e.$set(a);const l={};o[0]&2&&(l.position=s[1]),n.$set(l)},i(s){i||(be(e.$$.fragment,s),be(n.$$.fragment,s),i=!0)},o(s){Ee(e.$$.fragment,s),Ee(n.$$.fragment,s),i=!1},d(s){We(e,s),s&&qe(t),We(n,s)}}}function Mm(r,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:h=void 0}=e,{keyPanSpeed:f=void 0}=e,{keys:m=void 0}=e,{maxAzimuthAngle:_=void 0}=e,{maxDistance:d=void 0}=e,{maxPolarAngle:p=void 0}=e,{maxZoom:g=void 0}=e,{minAzimuthAngle:v=void 0}=e,{minDistance:x=void 0}=e,{minPolarAngle:w=void 0}=e,{minZoom:S=void 0}=e,{mouseButtons:L=void 0}=e,{panSpeed:F=void 0}=e,{rotateSpeed:y=void 0}=e,{screenSpacePanning:T=void 0}=e,{touches:C=void 0}=e,{zoomSpeed:k=void 0}=e,{target:K=void 0}=e,{dispose:U=void 0}=e;const D=el();zt(r,D,j=>t(30,n=j));const{renderer:G,invalidate:J}=yi();if(!G)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof ps))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const ee=cs(),W=()=>{J("Orbitcontrols: change event"),ee("change")},Z=()=>ee("start"),te=()=>ee("end"),V=new xm(n,G.domElement);Qt(n).orbitControls=V,V.addEventListener("change",W),V.addEventListener("start",Z),V.addEventListener("end",te),je(()=>{n&&delete Qt(n).orbitControls,V.removeEventListener("change",W),V.removeEventListener("start",Z),V.removeEventListener("end",te)});const{start:B,stop:Q}=Ss(()=>V.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),se=new Ze,O=()=>{t(0,V.target=se.position,V),V.update(),J("OrbitControls: target changed")};return r.$$set=j=>{"autoRotate"in j&&t(6,i=j.autoRotate),"autoRotateSpeed"in j&&t(7,s=j.autoRotateSpeed),"dampingFactor"in j&&t(8,o=j.dampingFactor),"enableDamping"in j&&t(9,a=j.enableDamping),"enabled"in j&&t(10,l=j.enabled),"enablePan"in j&&t(11,c=j.enablePan),"enableRotate"in j&&t(12,u=j.enableRotate),"enableZoom"in j&&t(13,h=j.enableZoom),"keyPanSpeed"in j&&t(14,f=j.keyPanSpeed),"keys"in j&&t(15,m=j.keys),"maxAzimuthAngle"in j&&t(16,_=j.maxAzimuthAngle),"maxDistance"in j&&t(17,d=j.maxDistance),"maxPolarAngle"in j&&t(18,p=j.maxPolarAngle),"maxZoom"in j&&t(19,g=j.maxZoom),"minAzimuthAngle"in j&&t(20,v=j.minAzimuthAngle),"minDistance"in j&&t(21,x=j.minDistance),"minPolarAngle"in j&&t(22,w=j.minPolarAngle),"minZoom"in j&&t(23,S=j.minZoom),"mouseButtons"in j&&t(24,L=j.mouseButtons),"panSpeed"in j&&t(25,F=j.panSpeed),"rotateSpeed"in j&&t(26,y=j.rotateSpeed),"screenSpacePanning"in j&&t(27,T=j.screenSpacePanning),"touches"in j&&t(28,C=j.touches),"zoomSpeed"in j&&t(29,k=j.zoomSpeed),"target"in j&&t(1,K=j.target),"dispose"in j&&t(2,U=j.dispose)},r.$$.update=()=>{r.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,V.autoRotate=i,V),s!==void 0&&t(0,V.autoRotateSpeed=s,V),o!==void 0&&t(0,V.dampingFactor=o,V),a!==void 0&&t(0,V.enableDamping=a,V),l!==void 0&&t(0,V.enabled=l,V),c!==void 0&&t(0,V.enablePan=c,V),u!==void 0&&t(0,V.enableRotate=u,V),h!==void 0&&t(0,V.enableZoom=h,V),f!==void 0&&t(0,V.keyPanSpeed=f,V),m!==void 0&&t(0,V.keys=m,V),_!==void 0&&t(0,V.maxAzimuthAngle=_,V),d!==void 0&&t(0,V.maxDistance=d,V),p!==void 0&&t(0,V.maxPolarAngle=p,V),g!==void 0&&t(0,V.maxZoom=g,V),v!==void 0&&t(0,V.minAzimuthAngle=v,V),x!==void 0&&t(0,V.minDistance=x,V),w!==void 0&&t(0,V.minPolarAngle=w,V),S!==void 0&&t(0,V.minZoom=S,V),L!==void 0&&t(0,V.mouseButtons=L,V),F!==void 0&&t(0,V.panSpeed=F,V),y!==void 0&&t(0,V.rotateSpeed=y,V),T!==void 0&&t(0,V.screenSpacePanning=T,V),C!==void 0&&t(0,V.touches=C,V),k!==void 0&&t(0,V.zoomSpeed=k,V),V.update(),J("OrbitControls: props changed")),r.$$.dirty[0]&576&&(i||a?B():Q())},[V,K,U,D,se,O,i,s,o,a,l,c,u,h,f,m,_,d,p,g,v,x,w,S,L,F,y,T,C,k]}class ym extends Ut{constructor(e){super(),Bt(this,e,Mm,vm,Rt,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}function bm(r,e,t){let{pass:n}=e;const{addPass:i,removePass:s}=nl();return i(n),Ss(()=>{},{debugFrameloopMessage:"Pass component"}),je(()=>{s(n)}),r.$$set=o=>{"pass"in o&&t(0,n=o.pass)},[n]}class Sm extends Ut{constructor(e){super(),Bt(this,e,bm,null,Rt,{pass:0})}}const rl=new Ze;rl.scale.set(0,0,0);rl.matrix;new $e().fromArray(new Array(16).fill(0));new Ne(16777215);const sl=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},Kr=Symbol("initialValueBeforeAttach"),wm=()=>{const{invalidate:r}=yi();let e=!1,t=Kr,n,i,s;const o=(l,c,u)=>{if(a(),!u){const h=l;((h==null?void 0:h.isMaterial)||!1)&&(u="material"),((h==null?void 0:h.isBufferGeometry)||(h==null?void 0:h.isGeometry)||!1)&&(u="geometry")}if(!!u){if(typeof u=="function")n=u(c,l);else{const{target:h,key:f}=sl(c,u);t=h[f],h[f]=l,i=h,s=f}e=!0,r()}},a=()=>{!e||(n?(n(),n=void 0):i&&s&&t!==Kr&&(i[s]=t,t=Kr,i=void 0,s=void 0),e=!1,r())};return je(()=>{a()}),{update:o}},Em=r=>r&&r.isCamera,al=r=>r&&r.isOrthographicCamera,ol=r=>r&&r.isPerspectiveCamera,Tm=r=>ol(r)||al(r),Am=()=>{const{invalidate:r,size:e}=yi(),{setCamera:t}=nl();let n,i;je(()=>{i==null||i()});const s=l=>{!n||(al(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):ol(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(l,c)=>{if(i==null||i(),c||!Tm(l)){n=void 0;return}n=l,i=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!Em(l)||!c||(t(l),r())}}},so=r=>!!(r!=null&&r.addEventListener),Cm=()=>{const r=cs(),e=xl(),t=f=>{f!=null&&f.type&&r(f.type,f)},n=(f,m)=>{so(f)&&m.forEach(_=>{f.removeEventListener(_,t)})},i=(f,m)=>{so(f)&&m.forEach(_=>{f.addEventListener(_,t)})};let s=[],o;const a=lt([]),l=a.subscribe(f=>{n(o,s),i(o,f),s=f});je(l);const c=lt(),u=c.subscribe(f=>{n(o,s),i(f,s),o=f});return je(u),je(()=>{n(o,s)}),mo(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:f=>{c.set(f)}}},Lm=["$$scope","$$slots","type","args","attach","instance"],Pm=["fov","aspect","near","far","left","right","top","bottom","zoom"],Dm=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,Rm=()=>{const{invalidate:r}=yi(),e=new Map,t=(i,s,o,a)=>{var u,h;if(Dm(o)){const f=e.get(s);if(f&&f.instance===i&&f.value===o)return;e.set(s,{instance:i,value:o})}const{key:l,target:c}=sl(i,s);if(!Array.isArray(o)&&typeof o=="number"&&typeof((u=c[l])==null?void 0:u.setScalar)=="function")c[l].setScalar(o);else if(typeof((h=c[l])==null?void 0:h.set)=="function")Array.isArray(o)?c[l].set(...o):c[l].set(o);else{if(c[l]=o,a.manualCamera)return;Pm.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(i,s,o)=>{for(const a in s)Lm.includes(a)||t(i,a,s[a],o),r()}}},Im=r=>({ref:r&1}),ao=r=>({ref:r[0]}),Fm=r=>({ref:r&1}),oo=r=>({ref:r[0]});function lo(r){let e,t;return e=new il({props:{object:r[0],dispose:r[1]}}),{c(){Ve(e.$$.fragment)},m(n,i){He(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ee(e.$$.fragment,n),t=!1},d(n){We(e,n)}}}function Om(r){let e;const t=r[12].default,n=Gn(t,r,r[13],ao);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Vn(n,t,i,i[13],e?Wn(t,i[13],s,Im):Hn(i[13]),ao)},i(i){e||(be(n,i),e=!0)},o(i){Ee(n,i),e=!1},d(i){n&&n.d(i)}}}function Nm(r){let e,t;return e=new tl({props:{object:r[0],$$slots:{default:[zm]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment)},m(n,i){He(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&8193&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ee(e.$$.fragment,n),t=!1},d(n){We(e,n)}}}function zm(r){let e;const t=r[12].default,n=Gn(t,r,r[13],oo);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Vn(n,t,i,i[13],e?Wn(t,i[13],s,Fm):Hn(i[13]),oo)},i(i){e||(be(n,i),e=!0)},o(i){Ee(n,i),e=!1},d(i){n&&n.d(i)}}}function Um(r){let e=r[4](r[0]),t,n,i,s,o,a,l=e&&lo(r);const c=[Nm,Om],u=[];function h(f,m){return m&1&&(n=null),n==null&&(n=!!f[3](f[0])),n?0:1}return i=h(r,-1),s=u[i]=c[i](r),{c(){l&&l.c(),t=bt(),s.c(),o=vl()},m(f,m){l&&l.m(f,m),Xe(f,t,m),u[i].m(f,m),Xe(f,o,m),a=!0},p(f,[m]){m&1&&(e=f[4](f[0])),e?l?(l.p(f,m),m&1&&be(l,1)):(l=lo(f),l.c(),be(l,1),l.m(t.parentNode,t)):l&&(sr(),Ee(l,1,1,()=>{l=null}),ar());let _=i;i=h(f,m),i===_?u[i].p(f,m):(sr(),Ee(u[_],1,1,()=>{u[_]=null}),ar(),s=u[i],s?s.p(f,m):(s=u[i]=c[i](f),s.c()),be(s,1),s.m(o.parentNode,o))},i(f){a||(be(l),be(s),a=!0)},o(f){Ee(l),Ee(s),a=!1},d(f){l&&l.d(f),f&&qe(t),u[i].d(f),f&&qe(o)}}}function Bm(r,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=Ts(e,n),s,{$$slots:o={},$$scope:a}=e,{type:l}=e,{args:c=void 0}=e,{attach:u=void 0}=e,{manual:h=void 0}=e,{makeDefault:f=void 0}=e,{dispose:m=void 0}=e;const _=hn("threlte-hierarchical-parent-context");zt(r,_,C=>t(11,s=C));const d=C=>typeof C=="function"&&/^\s*class\s+/.test(C.toString()),p=C=>Array.isArray(C);let{ref:g=d(l)&&p(c)?new l(...c):d(l)?new l:l}=e,v=!1;const x=lt(g);Ht("threlte-hierarchical-parent-context",x);const w=Rm(),S=Am(),L=wm(),F=Cm(),y=C=>!!C.isObject3D,T=C=>C.dispose!==void 0;return r.$$set=C=>{e=As(As({},e),Ml(C)),t(21,i=Ts(e,n)),"type"in C&&t(5,l=C.type),"args"in C&&t(6,c=C.args),"attach"in C&&t(7,u=C.attach),"manual"in C&&t(8,h=C.manual),"makeDefault"in C&&t(9,f=C.makeDefault),"dispose"in C&&t(1,m=C.dispose),"ref"in C&&t(0,g=C.ref),"$$scope"in C&&t(13,a=C.$$scope)},r.$$.update=()=>{r.$$.dirty&1120&&(v?t(0,g=d(l)&&p(c)?new l(...c):d(l)?new l:l):t(10,v=!0)),r.$$.dirty&1&&x.set(g),w.updateProps(g,i,{manualCamera:h}),r.$$.dirty&257&&S.update(g,h),r.$$.dirty&513&&S.makeDefaultCamera(g,f),r.$$.dirty&2177&&L.update(g,s,u),r.$$.dirty&1&&F.updateRef(g)},[g,m,_,y,T,l,c,u,h,f,v,s,o,a]}class Xt extends Ut{constructor(e){super(),Bt(this,e,Bm,Um,Rt,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function km(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class co extends Ut{constructor(e){super(),Bt(this,e,km,null,Rt,{})}}new Proxy(co,{get(r,e){return r[e]||co}});_m(Ha,()=>new Ha(Xo));const Gm=Math.PI/180;function ll(r){return r*Gm}const Vm=`uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform sampler2D uNormals;

varying vec2 vUv;

float valueAtPoint(sampler2D image, vec2 coord, vec2 texel, vec2 point) {
    vec3 luma = vec3(0.299, 0.587, 0.114);

    return dot(texture2D(image, coord + texel * point).xyz, luma);
}

float diffuseValue(int x, int y) {
    return valueAtPoint(tDiffuse, vUv, vec2(1.0 / uResolution.x, 1.0 / uResolution.y), vec2(x, y)) * 0.6;
}

float normalValue(int x, int y) {
    return valueAtPoint(uNormals, vUv, vec2(1.0 / uResolution.x, 1.0 / uResolution.y), vec2(x, y)) * 0.3;
}

float getValue(int x, int y) {
    return diffuseValue(x, y) + normalValue(x, y);
}


float combinedSobelValue() {
    // kernel definition (in glsl matrices are filled in column-major order)
    const mat3 Gx = mat3(-1, -2, -1, 0, 0, 0, 1, 2, 1);// x direction kernel
    const mat3 Gy = mat3(-1, 0, 1, -2, 0, 2, -1, 0, 1);// y direction kernel

    // fetch the 3x3 neighbourhood of a fragment

    // first column
    float tx0y0 = getValue(-1, -1);
    float tx0y1 = getValue(-1, 0);
    float tx0y2 = getValue(-1, 1);

    // second column
    float tx1y0 = getValue(0, -1);
    float tx1y1 = getValue(0, 0);
    float tx1y2 = getValue(0, 1);

    // third column
    float tx2y0 = getValue(1, -1);
    float tx2y1 = getValue(1, 0);
    float tx2y2 = getValue(1, 1);

    // gradient value in x direction
    float valueGx = Gx[0][0] * tx0y0 + Gx[1][0] * tx1y0 + Gx[2][0] * tx2y0 +
    Gx[0][1] * tx0y1 + Gx[1][1] * tx1y1 + Gx[2][1] * tx2y1 +
    Gx[0][2] * tx0y2 + Gx[1][2] * tx1y2 + Gx[2][2] * tx2y2;

    // gradient value in y direction
    float valueGy = Gy[0][0] * tx0y0 + Gy[1][0] * tx1y0 + Gy[2][0] * tx2y0 +
    Gy[0][1] * tx0y1 + Gy[1][1] * tx1y1 + Gy[2][1] * tx2y1 +
    Gy[0][2] * tx0y2 + Gy[1][2] * tx1y2 + Gy[2][2] * tx2y2;

    // magnitude of the total gradient
    float G = (valueGx * valueGx) + (valueGy * valueGy);
    return clamp(G, 0.0, 1.0);
}

void main() {
    float sobelValue = combinedSobelValue();
    sobelValue = smoothstep(0.01, 0.03, sobelValue);

    vec4 lineColor = vec4(0, 0, 0, 1.0);

    if (sobelValue > 0.1) {
        gl_FragColor = lineColor;
    } else {
        gl_FragColor = vec4(1.0);
    }
}
`,Hm=`// vertex shader
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;class uo extends Ui{constructor({width:t,height:n,scene:i,camera:s}){super();Tn(this,"fsQuad");Tn(this,"material");Tn(this,"normalMaterial");Tn(this,"normalBuffer");Tn(this,"scene");Tn(this,"camera");this.scene=i,this.camera=s,this.material=new Wm,this.fsQuad=new Ko(this.material),this.material.uniforms.uResolution.value=new Me(t,n);const o=new dn(t,n);o.texture.format=Nt,o.texture.type=gi,o.texture.minFilter=ut,o.texture.magFilter=ut,o.texture.generateMipmaps=!1,o.stencilBuffer=!1,this.normalBuffer=o,this.normalMaterial=new Tp}dispose(){this.material.dispose(),this.fsQuad.dispose()}render(t,n,i){t.setRenderTarget(this.normalBuffer);const s=this.scene.overrideMaterial;this.scene.overrideMaterial=this.normalMaterial,t.render(this.scene,this.camera),this.scene.overrideMaterial=s,this.material.uniforms.uNormals.value=this.normalBuffer.texture,this.material.uniforms.tDiffuse.value=i.texture,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(),this.fsQuad.render(t))}}class Wm extends tn{constructor(){super({uniforms:{tDiffuse:{value:null},uResolution:{value:new Me(1,1)},uNormals:{value:null}},fragmentShader:Vm,vertexShader:Hm})}}function jm(r){let e,t;return e=new ym({props:{maxPolarAngle:ll(80),enableZoom:!1,target:{y:1}}}),{c(){Ve(e.$$.fragment)},m(n,i){He(e,n,i),t=!0},p:fn,i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ee(e.$$.fragment,n),t=!1},d(n){We(e,n)}}}function fo(r){let e,t;return e=new Sm({props:{pass:new uo({width:200,height:200,scene:r[0].scene,camera:r[1]})}}),{c(){Ve(e.$$.fragment)},m(n,i){He(e,n,i),t=!0},p(n,i){const s={};i&3&&(s.pass=new uo({width:200,height:200,scene:n[0].scene,camera:n[1]})),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ee(e.$$.fragment,n),t=!1},d(n){We(e,n)}}}function Xm(r){let e,t,n,i;return e=new Xt({props:{type:Ms,args:[3,32]}}),n=new Xt({props:{type:jo,color:"#ffffff"}}),{c(){Ve(e.$$.fragment),t=bt(),Ve(n.$$.fragment)},m(s,o){He(e,s,o),Xe(s,t,o),He(n,s,o),i=!0},p:fn,i(s){i||(be(e.$$.fragment,s),be(n.$$.fragment,s),i=!0)},o(s){Ee(e.$$.fragment,s),Ee(n.$$.fragment,s),i=!1},d(s){We(e,s),s&&qe(t),We(n,s)}}}function qm(r){let e,t;return e=new Xt({props:{type:jt,receiveShadow:!0,"rotation.x":ll(-90),$$slots:{default:[Xm]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment)},m(n,i){He(e,n,i),t=!0},p(n,i){const s={};i&32&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ee(e.$$.fragment,n),t=!1},d(n){We(e,n)}}}function Ym(r){let e,t,n,i,s,o,a,l,c,u,h;function f(g){r[3](g)}let m={type:Pt,makeDefault:!0,position:[5,5,5],fov:24,$$slots:{default:[jm]},$$scope:{ctx:r}};r[1]!==void 0&&(m.ref=r[1]),e=new Xt({props:m}),ls.push(()=>go(e,"ref",f));let _=r[1]&&fo(r);s=new Xt({props:{type:Rp,castShadow:!0,position:[3,12,10]}}),a=new Xt({props:{type:Lp,intensity:.2}});const d=r[2].default,p=Gn(d,r,r[5],null);return u=new Xt({props:{type:ui,$$slots:{default:[qm]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment),n=bt(),_&&_.c(),i=bt(),Ve(s.$$.fragment),o=bt(),Ve(a.$$.fragment),l=bt(),p&&p.c(),c=bt(),Ve(u.$$.fragment)},m(g,v){He(e,g,v),Xe(g,n,v),_&&_.m(g,v),Xe(g,i,v),He(s,g,v),Xe(g,o,v),He(a,g,v),Xe(g,l,v),p&&p.m(g,v),Xe(g,c,v),He(u,g,v),h=!0},p(g,v){const x={};v&32&&(x.$$scope={dirty:v,ctx:g}),!t&&v&2&&(t=!0,x.ref=g[1],_o(()=>t=!1)),e.$set(x),g[1]?_?(_.p(g,v),v&2&&be(_,1)):(_=fo(g),_.c(),be(_,1),_.m(i.parentNode,i)):_&&(sr(),Ee(_,1,1,()=>{_=null}),ar()),p&&p.p&&(!h||v&32)&&Vn(p,d,g,g[5],h?Wn(d,g[5],v,null):Hn(g[5]),null);const w={};v&32&&(w.$$scope={dirty:v,ctx:g}),u.$set(w)},i(g){h||(be(e.$$.fragment,g),be(_),be(s.$$.fragment,g),be(a.$$.fragment,g),be(p,g),be(u.$$.fragment,g),h=!0)},o(g){Ee(e.$$.fragment,g),Ee(_),Ee(s.$$.fragment,g),Ee(a.$$.fragment,g),Ee(p,g),Ee(u.$$.fragment,g),h=!1},d(g){We(e,g),g&&qe(n),_&&_.d(g),g&&qe(i),We(s,g),g&&qe(o),We(a,g),g&&qe(l),p&&p.d(g),g&&qe(c),We(u,g)}}}function Zm(r){let e,t,n,i;function s(a){r[4](a)}let o={$$slots:{default:[Ym]},$$scope:{ctx:r}};return r[0]!==void 0&&(o.ctx=r[0]),t=new um({props:o}),ls.push(()=>go(t,"ctx",s)),{c(){e=In("div"),Ve(t.$$.fragment),Fn(e,"class","canvas-container svelte-1k75jwu")},m(a,l){Xe(a,e,l),He(t,e,null),i=!0},p(a,[l]){const c={};l&35&&(c.$$scope={dirty:l,ctx:a}),!n&&l&1&&(n=!0,c.ctx=a[0],_o(()=>n=!1)),t.$set(c)},i(a){i||(be(t.$$.fragment,a),i=!0)},o(a){Ee(t.$$.fragment,a),i=!1},d(a){a&&qe(e),We(t)}}}function Km(r,e,t){let{$$slots:n={},$$scope:i}=e,s,o;function a(c){o=c,t(1,o)}function l(c){s=c,t(0,s)}return r.$$set=c=>{"$$scope"in c&&t(5,i=c.$$scope)},[s,o,n,a,l,i]}class Jm extends Ut{constructor(e){super(),Bt(this,e,Km,Zm,Rt,{})}}function ho(r){return Object.prototype.toString.call(r)==="[object Date]"}function ss(r,e,t,n){if(typeof t=="number"||ho(t)){const i=n-t,s=(t-e)/(r.dt||1/60),o=r.opts.stiffness*i,a=r.opts.damping*s,l=(o-a)*r.inv_mass,c=(s+l)*r.dt;return Math.abs(c)<r.opts.precision&&Math.abs(i)<r.opts.precision?n:(r.settled=!1,ho(t)?new Date(t.getTime()+c):t+c)}else{if(Array.isArray(t))return t.map((i,s)=>ss(r,e[s],t[s],n[s]));if(typeof t=="object"){const i={};for(const s in t)i[s]=ss(r,e[s],t[s],n[s]);return i}else throw new Error(`Cannot spring ${typeof t} values`)}}function Qm(r,e={}){const t=lt(r),{stiffness:n=.15,damping:i=.8,precision:s=.01}=e;let o,a,l,c=r,u=r,h=1,f=0,m=!1;function _(p,g={}){u=p;const v=l={};if(r==null||g.hard||d.stiffness>=1&&d.damping>=1)return m=!0,o=Cs(),c=p,t.set(r=u),Promise.resolve();if(g.soft){const x=g.soft===!0?.5:+g.soft;f=1/(x*60),h=0}return a||(o=Cs(),m=!1,a=yl(x=>{if(m)return m=!1,a=null,!1;h=Math.min(h+f,1);const w={inv_mass:h,opts:d,settled:!0,dt:(x-o)*60/1e3},S=ss(w,c,r,u);return o=x,c=r,t.set(r=S),w.settled&&(a=null),!w.settled})),new Promise(x=>{a.promise.then(()=>{v===l&&x()})})}const d={set:_,update:(p,g)=>_(p(u,r),g),subscribe:t.subscribe,stiffness:n,damping:i,precision:s};return d}function $m(r){let e,t,n,i;return e=new Xt({props:{type:ys}}),n=new Xt({props:{type:jo,color:"#333333"}}),{c(){Ve(e.$$.fragment),t=bt(),Ve(n.$$.fragment)},m(s,o){He(e,s,o),Xe(s,t,o),He(n,s,o),i=!0},p:fn,i(s){i||(be(e.$$.fragment,s),be(n.$$.fragment,s),i=!0)},o(s){Ee(e.$$.fragment,s),Ee(n.$$.fragment,s),i=!1},d(s){We(e,s),s&&qe(t),We(n,s)}}}function eg(r){let e,t;return e=new Xt({props:{type:jt,"position.y":1,castShadow:!0,$$slots:{default:[$m]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment)},m(n,i){He(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ee(e.$$.fragment,n),t=!1},d(n){We(e,n)}}}function tg(r){let e,t;return e=new Xt({props:{type:ui,scale:r[0],$$slots:{default:[eg]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment)},m(n,i){He(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.scale=n[0]),i&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ee(e.$$.fragment,n),t=!1},d(n){We(e,n)}}}function ng(r){let e,t,n,i,s,o,a,l,c,u,h,f;return n=new Jm({props:{$$slots:{default:[tg]},$$scope:{ctx:r}}}),{c(){e=In("h2"),e.textContent="A New Programming Language is under development!",t=bt(),Ve(n.$$.fragment),i=bt(),s=In("p"),s.textContent=`Development on the language "Anweisungs Ausf\xFChr Automat" short "AAA"
    (german for Instruction Execution Automaton) has begun. The Language
    aims to be simple to write while having a static type system. Semicolons
    are being omitted in this language and braces are a thing of the past
    while not demanding whitespace like python.`,o=bt(),a=In("h3"),a.textContent="Everything is an Expression",l=bt(),c=In("p"),c.textContent=`Everything is an expression in AAA, which means that everthing returns
    something. Thus everything can be assigned to a variable or passed to
    other functions.`,u=bt(),h=In("h3"),h.textContent="No Semicolons required",Fn(e,"class","svelte-b4p7c"),Fn(s,"class","svelte-b4p7c"),Fn(a,"class","svelte-b4p7c"),Fn(c,"class","svelte-b4p7c"),Fn(h,"class","svelte-b4p7c")},m(m,_){Xe(m,e,_),Xe(m,t,_),He(n,m,_),Xe(m,i,_),Xe(m,s,_),Xe(m,o,_),Xe(m,a,_),Xe(m,l,_),Xe(m,c,_),Xe(m,u,_),Xe(m,h,_),f=!0},p(m,[_]){const d={};_&5&&(d.$$scope={dirty:_,ctx:m}),n.$set(d)},i(m){f||(be(n.$$.fragment,m),f=!0)},o(m){Ee(n.$$.fragment,m),f=!1},d(m){m&&qe(e),m&&qe(t),We(n,m),m&&qe(i),m&&qe(s),m&&qe(o),m&&qe(a),m&&qe(l),m&&qe(c),m&&qe(u),m&&qe(h)}}}function ig(r,e,t){let n;const i=Qm(1);return zt(r,i,s=>t(0,n=s)),[n,i]}class rg extends Ut{constructor(e){super(),Bt(this,e,ig,ng,Rt,{})}}function sg(r){let e,t;return e=new rg({}),{c(){Ve(e.$$.fragment)},m(n,i){He(e,n,i),t=!0},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ee(e.$$.fragment,n),t=!1},d(n){We(e,n)}}}function ag(r){let e,t;return e=new bl({props:{slot:"title"}}),{c(){Ve(e.$$.fragment)},m(n,i){He(e,n,i),t=!0},p:fn,i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ee(e.$$.fragment,n),t=!1},d(n){We(e,n)}}}function og(r){let e,t;return e=new Sl({props:{$$slots:{title:[ag],default:[sg]},$$scope:{ctx:r}}}),{c(){Ve(e.$$.fragment)},m(n,i){He(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ee(e.$$.fragment,n),t=!1},d(n){We(e,n)}}}class lg extends Ut{constructor(e){super(),Bt(this,e,null,og,Rt,{})}}new lg({target:document.getElementById("app")});
