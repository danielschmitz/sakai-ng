import{Da as j,Va as w,wa as c}from"./chunk-N7CYNTFY.js";import{$ as y,Db as t,Eb as s,Fb as l,Nb as D,Ob as x,Oc as F,Tc as I,Ua as i,V as f,W as u,Yc as L,dc as P,fb as a,gb as v,ja as h,jb as k,la as d,mb as b,tb as p,ub as M,vb as S,zb as C}from"./chunk-EIGNSBGS.js";var W=({dt:e})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${e("progressspinner.color.1")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${e("progressspinner.color.1")};
    }
    40% {
        stroke: ${e("progressspinner.color.2")};
    }
    66% {
        stroke: ${e("progressspinner.color.3")};
    }
    80%,
    90% {
        stroke: ${e("progressspinner.color.4")};
    }
}
`,_={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},N=(()=>{class e extends j{name="progressspinner";theme=W;classes=_;static \u0275fac=(()=>{let n;return function(r){return(n||(n=d(e)))(r||e)}})();static \u0275prov=f({token:e,factory:e.\u0275fac})}return e})();var g=(()=>{class e extends w{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=y(N);static \u0275fac=(()=>{let n;return function(r){return(n||(n=d(e)))(r||e)}})();static \u0275cmp=a({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[P([N]),k],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(o,r){o&1&&(t(0,"div",0),h(),t(1,"svg",1),l(2,"circle",2),s()()),o&2&&(M("ngStyle",r.style)("ngClass",r.styleClass),p("aria-label",r.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),i(),S("animation-duration",r.animationDuration),p("data-pc-section","root"),i(),p("fill",r.fill)("stroke-width",r.strokeWidth))},dependencies:[L,F,I,c],encapsulation:2,changeDetection:0})}return e})(),B=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=v({type:e});static \u0275inj=u({imports:[g,c,c]})}return e})();var J=["*"];function O(e,m){e&1&&(t(0,"div",1),l(1,"p-progress-spinner",2),s())}var $=class e{loading=!1;static \u0275fac=function(n){return new(n||e)};static \u0275cmp=a({type:e,selectors:[["app-loading"]],inputs:{loading:"loading"},ngContentSelectors:J,decls:3,vars:1,consts:[[1,"loading-container"],[1,"loading-overlay"],["ariaLabel","loading"]],template:function(n,o){n&1&&(D(),t(0,"div",0),x(1),b(2,O,2,0,"div",1),s()),n&2&&(i(2),C(o.loading?2:-1))},dependencies:[B,g],styles:[".loading-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;gap:.5rem}.loading-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:10;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px)}"]})};export{$ as a};
