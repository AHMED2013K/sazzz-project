"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[64604],{481177:(e,t,r)=>{r.d(t,{Z:()=>n});let n={AMP_TRACKING_DOMAIN:"amp.pinterest.com",BoardPrivacy:{SECRET:"secret",PUBLIC:"public",PROTECTED:"protected"},BoardType:{PROTECTED:"protected"},BulkAction:{MOVE:"bulkMove",COPY:"bulkCopy",CREATE_SECTION:"bulkCreateSection",DELETE:"bulkDelete"},MAX_CHARS_FOR_BOARD_PIN_DESCRIPTION:500,MAX_CHARS_FOR_BOARD_TITLE:50,MAX_CHARS_FOR_FIRST_NAME:30,MAX_FETCH_NUM_FOLLOWERS_PER_PAGE:50,MAX_STORED_VISITED_PIN_PAGES:10,VIDEO_IFRAME_ID:"video-iframe"}},901855:(e,t,r)=>{r.d(t,{Hv:()=>s,aX:()=>d,nK:()=>m});var n=r(667294),i=r(616550),a=r(342513),o=r(785893);let{Provider:l,useHook:s}=(0,a.Z)("HistoryStackContext",{previous:[],current:null,forward:[]}),c=e=>e&&e.pathname?e.pathname+(e.search||""):"";function u(e,t){let r={action:t.type,location:t.location,match:t.match};if(t.location===e.current?.location)return e;switch(t.type){case"POP":if(e.forward.length>0&&c(e.forward[0].location)===c(r.location))return{...e,forward:e.forward.slice(1),current:{...e.forward[0],action:t.type},previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};return{...e,forward:e.current?[{action:e.current.action,location:e.current.location,match:e.current.match},...e.forward]:e.forward,current:{...e.previous.slice(-1)[0],action:t.type},previous:e.previous.slice(0,-1)};case"PUSH":return{...e,forward:e.forward.length>0?[]:e.forward,current:r,previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};case"REPLACE":return{...e,current:r};default:return e}}function d(){let{current:e,previous:t}=s();return(0,n.useMemo)(()=>e?t.concat(e):t,[e,t])}function m({children:e}){let t=(0,i.k6)(),r=(0,i.TH)(),a=(0,i.$B)(),s={forward:[],current:{action:t.action,location:r,match:a},previous:[]},[c,d]=(0,n.useReducer)(u,s);return(0,n.useEffect)(()=>{let{action:e}=t;d({type:e,location:r,match:a})},[r]),(0,o.jsx)(l,{value:c,children:e})}},406893:(e,t,r)=>{r.d(t,{Z:()=>a}),r(441143);var n=r(785893);class i{static factory(e){return e instanceof i?e:new i(String(e))}constructor(e){this._private_safe_value=e.trim().replace(">",">").replace("<","<").replace("&","&").replace('"','"').replace("'","'")}toString(){return this._private_safe_value}}function a(e){let{css:t,unsafeCSS:r,...a}=e,o=String(t||"")||r||"";return o?(0,n.jsx)("style",{...a,dangerouslySetInnerHTML:{__html:String(i.factory(o))}}):null}},587703:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(214877);let i=()=>(0,n.v)().logContextEvent},847160:(e,t,r)=>{r.d(t,{Bx:()=>i,N4:()=>o,is:()=>l,lt:()=>n,oM:()=>a});let n=e=>e._('You\'re almost there! Log in to access all of Pinterest', 'loginModal.limitedLogin.subheader', 'Subheader text on personalized login modal/flyout to remind users to log in'),i=e=>e._('Log in to save this Pin', 'limitedLogin.modalHeader.repin', 'Title on mobile web limited login modal to prompt users to login after they clicked save button.'),a=e=>e._('Log in to edit this Pin', 'limitedLogin.modalHeader.editPin', 'Title on mobile web limited login modal to prompt users to login after they clicked edit button.'),o=({i18n:e,toFollow:t})=>t?e._('Log in to follow', 'limitedLogin.modalHeader.follow', 'Title on mobile web limited login modal to prompt users to login to follow a user or board.'):e._('Log in to unfollow', 'limitedLogin.modalHeader.unfollow', 'Title on mobile web limited login modal to prompt users to login to unfollow a user or board.'),l=e=>e._('Log in to create a Pin or board', 'limitedLogin.modalHeader.create', 'Title on mobile web limited login modal to prompt users to login to create a Pin or board.')},515278:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(847160),i=r(140017),a=r(166770);let o=()=>{let{loginForMore:e,viewer:t,limitedLoginModalSubheader:r}=(0,a.H)(),o=(0,i.ZP)();return"AUTH"===t.type?null:t=>{e?.setVisible(!0),r?.setText(t?.loginModalHeader||n.lt(o))}}},103322:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(667294),i=r(701785),a=r(953565);function o(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class l extends n.Component{constructor(...e){super(...e),o(this,"state",{error:null,info:null}),o(this,"resetError",()=>{this.setState({error:null,info:null})})}componentDidCatch(e,t){try{let{name:t}=this.props,r=this.props.type||"secondary";(0,i.T)({extraData:e.extraData??{},errorBoundary:t,errorBoundaryType:r,message:e.message,name:e.name,stack:e.stack}),(0,a.nP)("react.error_boundary",{sampleRate:.1,tags:{component:void 0,name:this.props.name}})}catch(e){(0,a.nP)("react.error_boundary.error",{sampleRate:1,tags:{name:this.props.name}})}this.setState({error:e,info:t})}render(){let{renderErrorState:e}=this.props,{error:t,info:r}=this.state;return t&&r?e?e({error:t,info:r,resetError:this.resetError}):null:this.props.children}}},25919:(e,t,r)=>{let n;r.d(t,{Am:()=>g,Ig:()=>h,N:()=>x,Sd:()=>y,YX:()=>b,be:()=>_,fO:()=>m,kd:()=>v,pz:()=>p});var i=r(667294),a=r(216167),o=r(587703),l=r(703404),s=r(957753),c=r(372085),u=r(953565);let d=(e,t,r={})=>(0,u.nP)(`${e}.${t}`,{sampleRate:1,tags:r}),m=(e,t)=>r=>a.Z.create("UserExperiencePlatformResource",t?{extra_context:e,targeting:t}:{extra_context:e}).callGet().then(e=>e.resource_response?r((0,s.OD)(e.resource_response.data)):void 0),p=(e,t,r,i)=>(o,c)=>{if(t)return Promise.resolve();if(i&&(n=i),1===e.length){let t=e[0],n=c().experiences[t];if(JSON.stringify(n?.extraContext||null)===JSON.stringify(r)||(0,l.E3)(n)&&!(r&&Object.keys(r).length>0))return Promise.resolve()}return a.Z.create("UserExperienceResource",{placement_ids:e,extra_context:r||null,targeting:i}).callGet().then(e=>e.resource_response?o((0,s.cL)(e.resource_response.data)):void 0)},f=(e,t,r,i)=>(o,l,c,u=!1,d,p)=>(f,h)=>{let{experiences:_,experiencesMulti:g}=h(),y=null,v=!0;if(u||(y=(v=_[o]&&_[o].experience_id===l)?_[o]:Array.isArray(g[o])&&g[o]?.find(e=>e.experience_id===l)),y&&y.experience_id===l||u&&o&&l){let u=a.Z.create(e,{placed_experience_id:`${o}%3A${l}`,extra_context:d??{},targeting:p}),h=v?s.Yb:s.xW;switch(t){case"dismissed":return u.callDelete().then(()=>{f(h(o,l,t)),f(m(void 0,n)),r&&i&&r({event_type:i,object_id_str:l.toString()})});case"completed":return u.callUpdate().then(()=>{!c&&(f(h(o,l,t)),f(m(void 0,n)),r&&i&&r({event_type:i,object_id_str:l.toString()}))});case"viewed":return f(h(o,l,t)),u.callUpdate().then(()=>{1000162===o&&f(m()),r&&i&&r({event_type:i,object_id_str:l.toString()})});case"completedWithoutHomefeed":return u.callUpdate().then(()=>{c||f(h(o,l,t)),r&&i&&r({event_type:i,object_id_str:l.toString()})})}}return Promise.resolve()},h=()=>{let e=(0,o.Z)();return(0,i.useCallback)(f("UserExperienceViewedResource","viewed",e,4503),[e])},_=()=>{let e=(0,o.Z)();return(0,i.useCallback)(f("UserExperienceCompletedResource","completed",e,6567),[e])},g=()=>{let e=(0,o.Z)();return(0,i.useCallback)(f("UserExperienceResource","dismissed",e,6568),[e])},y=()=>{let e=(0,o.Z)();return(0,i.useCallback)(f("UserExperienceCompletedResource","completedWithoutHomefeed",e,6567),[e])},v=(e,t)=>(r,n)=>{let{experiences:i}=n(),a=i[e];a&&a.triggerable_placed_exps&&a.triggerable_placed_exps.length&&a.triggerable_placed_exps.forEach(r=>{let[,n]=r.split(":"),i=t;a.metadata&&a.metadata[n]&&(i={...t,...a.metadata[n]}),(0,c.Z)({url:`/v3/experiences/${r.replace(":","%3A")}/trigger/`,method:"PUT",data:i?{extra_context:JSON.stringify(i,null,1)}:{}}).then(()=>{d("experienceservice","experimentTriggerCall.1",{placement_id:e,experience_id:n})})})},b=e=>(t,r)=>{t(v(e));let{experiences:n}=r();return n[e]},x=(e,t,r)=>i=>{r&&(n=r),i(v(e,t)),t&&Object.keys(t).length>0&&i(p([e],!1,t,r))}},703404:(e,t,r)=>{r.d(t,{A0:()=>s,E3:()=>o,MQ:()=>l,fL:()=>c});var n=r(883119),i=r(862249),a=r(785893);function o(e){return!!e&&0!==e.type}let l=(e,t,r)=>{let n=e[r];return t[r]&&o(n)?n:null};function s(e){return e.display_data?.anchor}let c=e=>{let t=new DOMParser().parseFromString(e,"text/html"),r=[...t.body?.childNodes||[]].map(e=>{if("A"!==e.nodeName)return(0,a.jsx)(n.xv,{inline:!0,children:e.textContent});{let t=e.href||"",r=(0,i.Z)({url:t});return(0,a.jsx)(n.rU,{display:"inline",externalLinkIcon:r?"default":"none",href:t,rel:r?"nofollow":"none",target:"blank",children:e.textContent})}});return(0,a.jsx)(n.xv,{inline:!0,children:r})}},26616:(e,t,r)=>{r.d(t,{$S:()=>n,V$:()=>i,_4:()=>o,iY:()=>l,mR:()=>a});let n="REFRESH_ALL_EXPERIENCES_MULTI",i="UPDATE_EXPERIENCE_MULTI",a="FETCH_EXPERIENCES",o="REFRESH_ALL_EXPERIENCES",l="UPDATE_EXPERIENCE"},957753:(e,t,r)=>{r.d(t,{NW:()=>l,OD:()=>c,Yb:()=>s,cL:()=>u,xW:()=>o});var n=r(216167),i=r(26616);let a=e=>({type:i.$S,payload:{experiencesMulti:e}}),o=(e,t,r)=>({type:i.V$,payload:{placementId:e,experienceId:t,status:r}}),l=e=>t=>n.Z.create("UserExperiencePlatformResource",{extra_context:e,multiExperiencePlatform:!0}).callGet().then(e=>e.resource_response?t(a(e.resource_response.data)):void 0),s=(e,t,r)=>({type:i.iY,payload:{placementId:e,experienceId:t,status:r}}),c=e=>({type:i._4,payload:{experiences:e}}),u=e=>({type:i.mR,payload:{experiences:e}})},775089:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(667294),i=r(883119),a=r(214877),o=r(103322);function l(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let s={};function c(e){let t=s[e];return t&&t.screenWidth===window.innerWidth||(s[e]={screenWidth:window.innerWidth}),s[e]}let u=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class d{constructor(){l(this,"idMap",new Map),l(this,"objMap",new WeakMap)}get(e){let t=u(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=u(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let r=u(e);r&&this.idMap.set(r,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}var m=r(547643),p=r(213377),f=r(406893),h=r(340523),_=r(5859),g=r(554786),y=r(953565),v=r(84768),b=r(785893);function x({analyticsData:e,children:t,idx:r,isMeasuring:i,masonryV2ExpName:a,masonryV2ExpGroup:l}){let s=(0,g.ZP)(),{isAuthenticated:c}=(0,_.B)(),u=(0,v.MM)();return(0,n.useEffect)(()=>{if(e.current[r]){let{fetchTimestamp:t,measureTimestamp:n,hasRendered:o,pageCount:d}=e.current[r]??{},m={deviceType:s,experimentName:a,experimentGroup:l,handlerId:u,isAuthenticated:c,pageCount:d};i&&!n&&(e.current[r].measureTimestamp=Date.now(),(0,y.LY)("webapp.masonry.itemMeasureStart",Date.now()-t,{tags:m})),i||o||((0,y.LY)("webapp.masonry.itemRenderStart",Date.now()-n,{tags:m}),e.current[r].hasRendered=!0)}},[i]),(0,b.jsx)(o.Z,{name:"MasonryItem",children:t})}function w(e){let{align:t,cacheKey:r,id:l,isGridCentered:s=!0,items:u,layout:w,loadItems:E,masonryRef:C,renderItem:S,scrollContainerRef:P,virtualize:A=!0,_getColumnSpanConfig:I}=e,L=(0,g.ZP)(),{isAuthenticated:R,isRTL:T}=(0,_.B)(),{logContextEvent:M}=(0,a.v)(),$=(0,h.F)(),D="desktop"===L,j=(0,v.MM)(),O=(0,n.useRef)(u.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),Z=e.columnWidth??p.yF,k=e.gutterWidth??(D?p.oX:1),N=e.minCols??p.yc,H=e.serverRender??!!D,U="flexible"===w||"desktop"!==L,W=H?"serverRenderedFlexible":"flexible",B=(0,n.useRef)(0),F=Z+k,z=function(e){if(null==e)return;let t=c(e);return t.positionCache||(t.positionCache=new d),t.positionCache}(r),V=function(e){if(null==e)return;let t=c(e);return t.measurementCache||(t.measurementCache=new d),t.measurementCache}(r),X=(0,n.useCallback)(()=>P?.current||window,[P]),G=(0,n.useRef)(!0),{anyEnabled:Y}=$.checkExperiment("web_masonry_ssr_container_query"),J=s&&G.current?"gridCentered":"",{className:K,styles:Q}=function(e){let t=`m_${Object.keys(e).reduce((t,r)=>{let n=e[r];return null==n||"object"==typeof n||"function"==typeof n?t:"boolean"==typeof n?t+(n?"t":"f"):t+n},"").replace(/\:/g,"\\:")}`,{flexible:r,gutterWidth:n,isRTL:i,itemWidth:a,maxColumns:o,minColumns:l,items:s,_getColumnSpanConfig:c}=e,u=c?s.map((e,t)=>({index:t,columnSpanConfig:c(e)??1})).filter(e=>1!==e.columnSpanConfig):[],d=a+n,m=Array.from({length:o+1-l},(e,t)=>t+l).map(e=>{let s=e===l?0:e*d,c=e===o?null:(e+1)*d-1,{styles:m,numberOfVisibleItems:p}=u.reduce((i,o)=>{let{columnSpanConfig:l}=o,s=Math.min(function({columnCount:e,columnSpanConfig:t}){return"number"==typeof t?t:t[e<=2?"sm":e<=4?"md":e<=8?"lg":"xl"]??1}({columnCount:e,columnSpanConfig:l}),e),c=null!=o.index&&i.numberOfVisibleItems>=s+o.index,u=r?100/e*s:a*s+n*(s-1),{numberOfVisibleItems:d}=i;return c?d-=s-1:o.index<d&&(d+=1),{styles:i.styles.concat(function({className:e,index:t,columnSpanConfig:r,visible:n,width:i,flexible:a}){let o="number"==typeof r?r:btoa(JSON.stringify(r));return a?`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${n?"visible":"hidden"} !important;
        position: ${n?"inherit":"absolute"} !important;
        width: ${i}% !important;
      }`:`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${n?"visible":"hidden"} !important;
        position: ${n?"inherit":"absolute"} !important;
        width: ${i}px !important;
      }`}({className:t,index:o.index,columnSpanConfig:l,visible:c,width:u,flexible:r})),numberOfVisibleItems:d}},{styles:"",numberOfVisibleItems:e}),f=r?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*d}px;
      }

      .${t} .static {
        width: ${a}px !important;
      }
    `;return{minWidth:s,maxWidth:c,styles:`
      .${t} .static:nth-child(-n+${p}) {
        position: static !important;
        visibility: visible !important;
        float: ${i?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${n/2}px;
      }

      ${f}

      ${m}
    `}}),p=m.map(({minWidth:e,maxWidth:t,styles:r})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${r}
    }
  `),f=m.map(({minWidth:e,maxWidth:t,styles:r})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${r}
    }
  `),h=e.enableContainerQuery?`
    ${p.join("")}
    @supports not (container-type: inline-size) {
      ${f.join("")}
    }
  `:f.join("");return{className:t,styles:`
    .masonryContainer {
      container-type: inline-size;
    }

    .gridCentered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${h}
  `}}({gutterWidth:k,flexible:U,items:u,isRTL:T,itemWidth:Z,maxColumns:e.maxColumns??(u.length||p.g5),minColumns:N,enableContainerQuery:Y,_getColumnSpanConfig:I}),q=`${J} ${K}`.trim(),{anyEnabled:ee,expName:et,group:er,isMeasureAllEnabled:en}=(0,m.Z)(),ei=(0,n.useMemo)(()=>!V||u.every(e=>!V.has(e)),[]),ea=er&&ei,eo=(0,n.useRef)(),el=(0,n.useRef)(u.length),es=(0,n.useRef)(0);(0,n.useEffect)(()=>{ea&&u.forEach((e,t)=>{O.current[t]||(O.current[t]={fetchTimestamp:Date.now(),measureTimestamp:0,hasRendered:!1,pageCount:es.current})}),el.current=u.length,es.current+=1},[u]),(0,n.useEffect)(()=>{G.current&&(G.current=!1)},[]),(0,n.useEffect)(()=>{let e=()=>B.current+=1;return ea&&(eo.current=Date.now(),window.addEventListener("scroll",e)),()=>{if(ea){let t=O.current;window.removeEventListener("scroll",e);let r=t.filter(e=>!!e.measureTimestamp).length,n=t.filter(e=>e.hasRendered).length,i=el.current,a={deviceType:L,experimentName:et,experimentGroup:er,handlerId:j,isAuthenticated:R};(0,y.LY)("webapp.masonry.timeSpent",eo.current?Date.now()-eo.current:0,{tags:a}),(0,y.S0)("webapp.masonry.itemsFetched",i,{tags:a}),(0,y.S0)("webapp.masonry.itemsMeasured",r,{tags:a}),(0,y.S0)("webapp.masonry.itemsMeasuredPercentage",Math.floor(r/i*100),{tags:a}),(0,y.S0)("webapp.masonry.itemsRendered",n,{tags:a}),(0,y.S0)("webapp.masonry.itemsRenderedPercentage",Math.floor(n/i*100),{tags:a}),(0,y.S0)("webapp.masonry.scrollCount",B.current,{tags:a})}}},[]);let ec=(0,n.useCallback)(e=>ea?(0,b.jsx)(x,{analyticsData:O,idx:e.itemIdx,isMeasuring:e.isMeasuring,masonryV2ExpGroup:er,masonryV2ExpName:et,children:(0,b.jsx)(o.Z,{name:"MasonryItem",children:S(e)})}):(0,b.jsx)(o.Z,{name:"MasonryItem",children:S(e)}),[S]);return(0,b.jsx)("div",{className:"masonryContainer","data-test-id":"masonry-container",id:l,children:(0,b.jsxs)("div",{className:q,children:[H&&G.current?(0,b.jsx)(f.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:Q}):null,(0,b.jsx)(i.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?F*e.maxColumns:void 0,children:ee?(0,b.jsx)(i.GX,{ref:e=>{C&&(C.current=e)},_getColumnSpanConfig:I,_logTwoColWhitespace:e=>{(0,y.S0)("webapp.masonry.twoColWhitespace",e,{sampleRate:1,tags:{columnWidth:Z,minCols:N}}),M({event_type:14705,component:14468,aux_data:{whitespace_px:e}})},_measureAll:en,align:t,columnWidth:Z,gutterWidth:k,items:u,layout:U?W:w??"basic",loadItems:E,measurementStore:V,minCols:N,positionStore:z,renderItem:ec,scrollContainer:X,virtualBufferFactor:.3,virtualize:A}):(0,b.jsx)(i.Rk,{ref:e=>{C&&(C.current=e)},_getColumnSpanConfig:I,_logTwoColWhitespace:e=>{(0,y.S0)("webapp.masonry.twoColWhitespace",e,{sampleRate:1,tags:{columnWidth:Z,minCols:N}}),M({event_type:14705,component:14468,aux_data:{whitespace_px:e}})},align:t,columnWidth:Z,gutterWidth:k,items:u,layout:U?W:w??"basic",loadItems:E,measurementStore:V,minCols:N,positionStore:z,renderItem:ec,scrollContainer:X,virtualBufferFactor:.3,virtualize:A})})]})})}},339001:(e,t,r)=>{r.d(t,{Wc:()=>c,XB:()=>s,bF:()=>d,nk:()=>l,r7:()=>m});var n=r(667294),i=r(785893);function a(e,t,r){return e.split(r).map(e=>{if(e.match(r)){let r=e.replace(/[\{\}]/g,"").trim();if(Object.prototype.hasOwnProperty.call(t,r))return t[r]}return e})}let o=/(\{\{\s*\w+\s*\}\})/g;function l(e,t){return a(e,t,o)}function s({text:e,markers:t,jsxReplacements:r}){let n=["strong","a"],i=/(\{\{\s*\w+\s*\}\})/g,o=/<\s*(strong|a)\b[^>]*>.*?<\s*\/\s*\1\s*>/g,l=/<(strong|a)\s+[^>]*id\s*=\s*["']([^"']+)["'][^>]*>/,s=/<(strong|a)\b[^>]*>(.*?)<\/\1>/,c=e.match(o)?.map(e=>{let n=e.match(l),o=(n&&n[2])??0,c=e.match(s),u=(c&&c[2])??"",d=t?a(u,t,i):[u];return o&&r&&r[o]?.({innerHtmlStrings:d})});return e.split(o)?.map(e=>n.some(t=>e===t)?c?.shift():t?a(e,t,i):e)}function c(e,t){return a(e,t,o).join("")}let u=/(\{\s*\w+\s*\})/g;function d(e,t){return a(e,t,u)}let m=({text:e})=>Array.isArray(e)?e.map((e,t)=>(0,i.jsx)(n.Fragment,{children:e},t)):e},493538:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(760890),i=r(667294),a=r(107860),o=r(906623),l=r(438555);function s({children:e,isAtEndOfFeed:t,pinData:r,itemCount:s,includeBackgroundImages:c=!1,includeVideos:u=!1,includeSections:d=!1}){return l.Z()?.isAuthenticated||(d=!0),(0,n.Z)({pinData:r,isAtEndOfFeed:t,includeBackgroundImages:c,includeVideos:u,includeSections:d}),!function(e){let t=(0,o.E)(),r=(0,i.useRef)(null);(0,i.useEffect)(()=>{e!==r.current&&(r.current=e,t&&(0,a.ZP)(a.at))},[!!t,e])}(s),e}},760890:(e,t,r)=>{r.d(t,{Z:()=>y,v:()=>p});var n=r(667294),i=r(685679),a=r(608029),o=r(367180),l=r(297329),s=r(107860),c=r(906623),u=r(279600),d=r(748058);let m=(0,a.XV)("GridProfiler"),p=()=>!!window.addEventListener&&!!window.removeEventListener&&(0,o.VZ)(),f=e=>"LAYOUT"===e.status&&500||"TIMING"===e.status&&100||null,h=(e,t)=>{if(!t){let t=(0,o.LM)();if(t===e)return m("No new items, so skip the viewport-fill check."),{complete:!1,numOfItemsChecked:e};if(!(0,o.F9)())return m("Viewport may not be filled yet."),{complete:!1,numOfItemsChecked:t}}return{complete:!0}},_=(e,t)=>{let r=0,n=0,i=0,a=0,o=0;return e=e.filter(e=>"pin"===e.type),t.forEach((t,l)=>{let s;let c=t.fileName.split(".")[0];s=e[l],c!==s?.image_signature&&(s=e.find(e=>c===e?.image_signature)),void 0===s?o+=1:s.is_promoted||s.recommendation_reason?.reason==="PROMOTED_PIN"||s?.promoter?.length?i+=1:null!==s.story_pin_data_id&&void 0!==s.story_pin_data_id?r+=1:s?.videos?.video_list?n+=1:a+=1}),{storyPinCount:r,videoCount:n,adCount:i,imageCount:a,unknownCount:o}},g=(e,t)=>{let r=()=>{window.removeEventListener(e,r),t()};return window.addEventListener(e,r),()=>window.removeEventListener(e,r)};function y({isAtEndOfFeed:e,pinData:t,includeBackgroundImages:r,includeVideos:p=!1,includeSections:y}){let v=(0,c.E)(),b=v?.getId(),x=v?.setVisuallyCompleteResult,[w,E]=(0,n.useState)({status:"DISABLED"});(0,n.useEffect)(()=>{x?E({status:"LAYOUT",failedCount:0,numOfItemsChecked:0}):E({status:"DISABLED"})},[b,x]),(0,n.useEffect)(()=>{if("DISABLED"!==w.status&&(0,s.ZP)(`GridVisuallyCompleteProfiler_${w.status}`),m("new status",w),"LAYOUT"===w.status){let e=g("scroll",()=>{(0,s.ZP)("scrollDuringLayout")});return()=>{e()}}return()=>{}},[w.status]),(0,d.Z)(()=>{if(!v||!x)return;let{abort:n,getMetricId:s}=v,c=s();switch(w.status){case"LAYOUT":{let t=h(w.numOfItemsChecked,e);t.complete?E({status:"TIMING",failedCount:0,pinElements:(0,o.cQ)(r,p,y)}):500*w.failedCount>6e4?((0,l.A9)(`images.${(0,i.KJ)(c)}.visuallyComplete.maxLayoutAttempt`),n("visuallyComplete_layoutTimeout"),E({status:"DISABLED"})):E({...w,failedCount:w.failedCount+1,numOfItemsChecked:t.numOfItemsChecked});break}case"TIMING":{let e=(0,u.Cg)(),r=w.pinElements.length,o=[],s=0,d=0,p=0;if(w.pinElements.forEach(({element:t,fileName:r})=>{let n=e.find(e=>e.name.endsWith(r));n?n.responseEnd?(o.push(n),(0,a.v5)(t,"green")):(p+=1,(0,a.v5)(t,"blue")):t instanceof HTMLImageElement&&t.complete?(d+=1,(0,a.v5)(t,"red")):(s+=1,(0,a.v5)(t,"greenyellow"))}),s||p)100*w.failedCount>6e4?((0,l.A9)(`images.${(0,i.KJ)(c)}.visuallyComplete.maxAttempt`,{tags:{totalImageCount:r,incompleteCount:s,noTimingCount:d,noTimingResponseEndCount:p}}),n("visuallyComplete_timingTimeout"),E({status:"DISABLED"})):E({...w,failedCount:w.failedCount+1});else{if(m(`All ${o.length} images are fetched`),t&&t.length){let e=_(t,w.pinElements);Object.entries(e).forEach(([e,t])=>{v.addBinaryAnnotation(e,t,"I16")}),(0,l.A9)(`${(0,i.KJ)(c)}.pinTypes`,{tags:e})}x({imageTimings:o}),E({status:"DISABLED"}),(0,l.A9)(`images.${(0,i.KJ)(c)}.visuallyComplete.complete`,{tags:{totalImageCount:r,noTimingCount:d}})}}}},f(w))}},984571:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(958881);let i=/\{\s*(\w+)\s*\}/g,a=(e,t)=>(0,n.Z)(i,e,t);function o({args:e,format:t}){return a(t,(e||[]).reduce((e,t,r)=>({...e,[r]:t.text}),{}))}},325362:(e,t,r)=>{r.d(t,{Z:()=>n});function n(e){return e.replace(/[_.-](\w|$)/g,(e,t)=>t.toUpperCase())}},13848:(e,t,r)=>{r.d(t,{F9:()=>i,Zo:()=>n});let{Provider:n,useHook:i}=(0,r(342513).Z)("toastManagerContext")},862249:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(968946);let i=({url:e})=>!!(e&&e.match(/^https{0,1}:\/\//)&&!(0,n.Z)(e))},748058:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(667294);let i=(e,t)=>{let r=(0,n.useRef)(()=>{});(0,n.useEffect)(()=>{r.current=e},[e]),(0,n.useEffect)(()=>{if(null===t)return()=>{};let e=setInterval(()=>r.current(),t);return()=>clearInterval(e)},[t])}},180338:(e,t,r)=>{r.d(t,{H:()=>n,W:()=>i});let{Provider:n,useMaybeHook:i}=(0,r(342513).Z)("PinCreateDeleteContext")},282008:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(883119),i=r(214877),a=r(213377),o=r(666472),l=r(984571),s=r(575742),c=r(818385),u=r(785893);let d=a.yF;function m({contextLogData:e,bubbles:t,id:r,referringSource:a,slotIndex:m,storyType:p,title:f,titleIcon:h,viewType:_,viewParameter:g}){let{logContextEvent:y}=(0,i.v)(),v=t.map(({type:e,id:t})=>e+":"+t).join("|"),b={story_type:p,...e,content_ids:v};return(0,u.jsx)(o.F,{componentType:200,contextLogData:b,impressionType:"Story",loggingId:r,objectIdStr:r,slotIndex:m,viewParameter:g,viewType:_,children:({impressionTrackerRef:e})=>(0,u.jsxs)(n.xu,{ref:e,children:[f&&(0,u.jsxs)(n.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginBottom:1,children:["number"==typeof h&&h!==s.J&&(0,u.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{paddingTop:1}},marginEnd:2,children:(0,u.jsx)(n.JO,{accessibilityLabel:"",color:"default",icon:(0,s.Z)(h),size:14})}),(0,u.jsx)(n.xv,{weight:"bold",children:(0,l.Z)(f)})]}),t.map((e,t)=>(0,u.jsx)(n.xu,{flex:"none",paddingY:1,children:(0,u.jsx)(c.Z,{bubble:e,contextLogData:b,height:103,onClick:e=>{y({event_type:101,object_id_str:e,view_type:_,view_parameter:g,component:200,aux_data:b})},referringSource:a,slotIndex:t,storyId:r,viewParameter:g,viewType:_,width:d})},`bubble-${e.id}`))]})})}},166770:(e,t,r)=>{r.d(t,{H:()=>i,o:()=>n});let{Provider:n,useHook:i}=(0,r(342513).Z)("LimitedLogin")}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/64604-c62fc4f4c3582797.mjs.map