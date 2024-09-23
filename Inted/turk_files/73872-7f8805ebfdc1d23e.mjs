"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[73872],{43665:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e){let t=!1;return{promise:new Promise((r,o)=>{e.then(e=>t?o({isCanceled:!0}):r(e),e=>t?o({isCanceled:!0}):o(e))}),cancel(){t=!0}}}},498301:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e,t){if(!t)return e;let r=new RegExp(/http(s?):/);if(!r.test(e)){let o=r.exec(t);o&&o.length&&(e=o[0]+e)}return e}},825765:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(667294),d=r(43665);function i(){let e=(0,o.useRef)([]),t=(0,o.useRef)({});return(0,o.useEffect)(()=>()=>{[...Object.keys(t.current).map(e=>t.current[e]),...e.current].forEach(e=>e())},[]),function(r,o){if(o){let e=t.current[o];e&&(e(),delete t.current[o])}let{cancel:i,promise:n}=(0,d.Z)(r);return o?t.current[o]=i:e.current=[...e.current,i],n}}},692440:(e,t,r)=>{r.d(t,{H:()=>s,N:()=>a});var o=r(667294),d=r(342513),i=r(638747),n=r(785893);let{Provider:c,useHook:a}=(0,d.Z)("LastSavedTo");function s({children:e}){let[t,r]=(0,o.useState)();(0,i.Z8)("BoardPickerBoardsShortlistResource",e=>{if(!t){let{data:t}=e.response.resource_response;r(t)}});let d=(0,o.useCallback)(e=>{let o=t?t.filter(t=>t.id!==e.id):[];r([e,...o])},[t]),a=(0,o.useMemo)(()=>({lastSavedTo:t,saveToBoard:d}),[t,d]);return(0,n.jsx)(c,{value:a,children:e})}},281871:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e,t,r){return{privacy_filter:t?"secret":"public",sort:r||"last_pinned_to",field_set_key:"profile_grid_item",username:e}}},945488:(e,t,r)=>{r.d(t,{Z:()=>o});let o=(e,t)=>`${e}:${t||""}`},885837:(e,t,r)=>{r.d(t,{O:()=>c,Q:()=>a});var o=r(827625),d=r(945488),i=r(64819);let n=["alphabetical","last_pinned_to","oldest","newest","group_boards_at_top","custom"],c={name:"BoardsResource",key:"boardsResource",options:({boardOrder:e,filterStories:t,mixPublicSecret:r,username:o,privacyFilter:d="all",filterAllPins:i=!1,filterShoppingList:n=!1,includeArchived:c=!0},a)=>({privacy_filter:d,sort:e||"last_pinned_to",field_set_key:"profile_grid_item",filter_stories:t,username:o,page_size:25,group_by:r?"mix_public_private":"visibility",include_archived:c,redux_normalize_feed:!0,filter_all_pins:i,filter_shopping_list:n,...a?{orbac_subject_id:a}:Object.freeze({})})},a=e=>n.reduce((t,r)=>{let n=[(0,i.N8)("profileBoards",(0,d.Z)(e,r))];return[!0,!1].forEach(t=>{[!0,!1].forEach(d=>{n.push((0,o.jB)(c.name,c.options({username:e,boardOrder:r,mixPublicSecret:t,filterStories:d})))})}),t.concat(n)},[])},402287:(e,t,r)=>{r.d(t,{$n:()=>B,A4:()=>T,CE:()=>I,ET:()=>C,F$:()=>R,Kw:()=>h,Nv:()=>Z,PA:()=>D,X_:()=>N,d9:()=>O,e1:()=>p,o4:()=>A,vB:()=>E});var o=r(782677),d=r(216167),i=r(107366),n=r(227258),c=r(827625),a=r(821419),s=r(64819),_=r(430408),l=r(539426),u=r(937310);function p(e){return t=>{let{boardId:r,sectionIdBefore:o,sectionIdAfter:d,sourceSectionId:n,targetSectionId:c}=e;t((0,s._f)({feedType:u.Z.BOARD_SECTIONS,feedId:r,itemType:"boardsection",sourceItemId:n,targetItemId:c}));let a=Object.freeze({});return o&&(a={...a,section_before:o}),d&&(a={...a,section_after:d}),(0,i.Z)({url:`/v3/board/sections/${n}/reorder/`,method:"POST",data:a})}}function I(e,t){return r=>r((0,n.U)("BoardSectionResource",{options:{field_set_key:t||"board_page",section_id:e}}))}function b(e,t){return{type:"SECTION_ADDED",payload:{boardId:e,section:t}}}function E({boardId:e,sourceBoardId:t="",sourceSectionId:r="",name:o,nameSource:i,pinImport:n,initialPinIds:l=[]},p,I,E){let f=0;"RECOMMENDATION"===i?f=1:"EDITED_RECOMMENDATION"===i&&(f=2);let R={board_id:e,initial_pins:n&&!n.all?n.pinIds:l,name:o,name_source:f,...I?{orbac_subject_id:I}:Object.freeze({})};return o=>d.Z.create("BoardSectionResource",R).callCreate({showError:!1}).then(({resource_response:{data:d}})=>{E({event_type:7100,object_id_str:d.id}),o(b(e,d)),o((0,s.vX)({feedId:e,feedType:u.Z.BOARD_SECTIONS,itemIds:[d.id],itemType:"boardsection"})),o((0,a.Tq)(e,"pin_count")),o((0,c.jB)("BoardSectionsRepinResource",{board_id:e,orbac_subject_id:I}));let{all:i,pinIds:l}=n||{all:!1,pinIds:[]};return i?new Promise((i,n)=>o((0,_.Z)({inverseSelection:!0,selectedPinIds:l,source:{boardId:t||e,sectionId:r||null},target:{boardId:e,sectionId:d.id}},p)).then(()=>i(d)).catch(n)):(l.length>0&&o((0,s.N8)(u.Z.BOARDFEED,e)),d)})}function f(e,t){return{type:"SECTION_DELETED",payload:{boardId:e,sectionId:t}}}function R(e,t,r){return o=>d.Z.create("BoardSectionEditResource",{section_id:t,...r?{orbac_subject_id:r}:Object.freeze({})}).callDelete({showError:!1}).then(()=>Promise.all([o(f(e,t)),o((0,s.EX)({feedId:e,feedType:u.Z.BOARD_SECTIONS,itemIds:[t],itemType:"boardsection"})),o((0,a.Tq)(e,"pin_count")),o((0,c.jB)("BoardSectionsRepinResource",{board_id:e,orbac_subject_id:r}))]))}function B(e,t,r,o){return i=>d.Z.create("BoardSectionEditResource",{section_id:t,title:r,...o?{orbac_subject_id:o}:Object.freeze({})}).callCreate({showError:!1}).then(t=>{let r=t.resource_response.data;return i(t=>{let o=r.board;o&&o.id!==e?(t(f(e,r.id??"")),t((0,s.EX)({feedId:e,feedType:u.Z.BOARD_SECTIONS,itemIds:[r.id??""],itemType:"boardsection"})),t((0,a.Tq)(e,"pin_count")),t(b(o.id??"",r)),t((0,s.vX)({feedId:o.id??"",feedType:u.Z.BOARD_SECTIONS,itemIds:[r.id??""],itemType:"boardsection"})),t((0,a.Tq)(e,"pin_count"))):t({type:"SECTION_UPDATED",payload:{boardId:e,section:r}})}),i((0,c.jB)("BoardSectionsRepinResource",{board_id:e,orbac_subject_id:o})),r})}function O(e,t,r){return o=>(0,i.Z)({url:`/v3/board/sections/${t}/merge/${r}/`,method:"POST",data:{fields:["boardsection.id","boardsection.board()","board.id","board.blocking_actions"]}}).then(d=>Promise.all([o(f(e,t)),o((0,c.jB)("BoardSectionsRepinResource",{board_id:e})),o(I(r)),o((0,s.N8)(u.Z.BOARD_SECTION_PINS,r))]).then(()=>d))}let y=(e,t)=>({type:"BOARD_SECTION_EDIT",payload:t}),D=(e,t)=>r=>d.Z.create("BoardSectionEditResource",{...t,section_id:e}).callCreate().then(o=>(r(y(e,t)),o.resource_response.data)),T=e=>t=>d.Z.create("BoardSectionResource",{section_id:e}).callGet().then(r=>(t(y(e,r.resource_response.data||{id:"",title:""})),r)),S=(e,t,r,o)=>({type:"BOARD_SECTION_DELETE",payload:{userId:e,boardSectionId:t,boardId:r,pinCount:o}}),A=(e,t,r,o)=>i=>{let n=d.Z.create("BoardSectionEditResource",{section_id:t}).callDelete();return i(S(e,t,r,o)),n},Z=(e,t,r,i)=>n=>{let a={board_id:e,initial_pins:t,name:r},_="BoardSectionResource";return d.Z.create(_,a).callCreate().then(r=>{let d=r.resource_response.data,p=(0,o.Fv)(d,l.Z[_]);return i({event_type:7100,object_id_str:d.id}),n((0,c.XM)(_,a,r,p)),n(b(e,d)),n((0,s.vX)({feedId:e,feedType:u.Z.BOARD_SECTIONS,itemIds:[d.id],itemType:"boardsection"})),t.length&&n({type:"PINS_MOVE",payload:{source:{boardId:e},target:{boardId:e,sectionId:d.id},pinIds:t}}),r})},h=e=>t=>{let{source:r,target:i,pinIds:n}=e;if(t({type:"PINS_MOVE",payload:e}),r.boardlessPins||i.boardId!==r.boardId){let e={board_id:i.boardId,pin_ids:n,section_id:i.sectionId};return d.Z.create("BulkEditResource",e).callUpdate()}if(i.sectionId){let e={section_id:i.sectionId,pins:n},r="BoardSectionEditResource";return d.Z.create(r,e).callUpdate().then(d=>{let i=(0,o.Fv)(d.resource_response.data,l.Z[r]);return t((0,c.XM)(r,e,d,i)),d})}let a={section_id:r.sectionId,pins:n};return d.Z.create("BoardSectionPinsResource",a).callDelete()},N=e=>t=>{t({type:"PINS_MOVE_ALL",payload:e});let{source:r,target:o,excludePinIds:i}=e,n={board_id:r.boardId,new_board_id:o.boardId,pin_ids:i,old_section_id:r.sectionId,new_section_id:o.sectionId};return d.Z.create("BulkEditSelectAllResource",n).callUpdate()},C=(e,t,r,o,d)=>i=>i(Z(e,[],t,d)).then(t=>i(N({source:{boardId:e,sectionId:o},target:{boardId:e,sectionId:t.resource_response.data.id},excludePinIds:r})))},821419:(e,t,r)=>{r.d(t,{Br:()=>p,Cr:()=>Z,K8:()=>B,L1:()=>w,Tq:()=>f,YQ:()=>L,YV:()=>A,ZP:()=>h,aX:()=>N,eo:()=>b,fJ:()=>U,md:()=>I,oG:()=>E,oL:()=>C,of:()=>O,xH:()=>R,xQ:()=>y,xR:()=>j,xk:()=>T,yT:()=>u,zS:()=>g});var o=r(216167),d=r(481177),i=r(107366),n=r(227258),c=r(827625),a=r(281871),s=r(885837),_=r(64819),l=r(937310);function u(e){return{type:"BOARD_UPDATE_COMPLETE",payload:{board:e}}}function p(e){return{type:"BOARD_PIN_COUNT_CHANGED",payload:e}}function I(e,t){return{type:"BOARD_FOLLOW",payload:{boardId:e,value:t}}}function b({viewingUserId:e,viewingUsername:t,boardId:r,boardPinCount:o}){return{type:"BOARD_DELETE",payload:{viewingUserId:e,viewingUsername:t,boardId:r,boardPinCount:o}}}let E=(e,t)=>r=>r((0,n.U)("BoardResource",{options:{board_id:e,field_set_key:t}}));function f(e,t,r){return(0,n.U)("BoardResource",{options:{board_id:e,field_set_key:t,...r?{orbac_subject_id:r}:{}}})}function R(e,t,r){return o=>(0,i.Z)({url:`/v3/boards/${e}/merge/${t}/`,method:"POST",data:r?{orbac_subject_id:r}:{}}).then(()=>Promise.all([o(b({boardId:e})),o(f(t,"pin_count")),o((0,_.N8)(l.Z.BOARD_SECTIONS,t))]))}function B(e){return t=>{e&&(0,s.Q)(e).forEach(e=>{t(e)})}}let O=e=>({type:"BOARD_DISMISS_SENSITIVITY_SCREEN",payload:{boardId:e}}),y=e=>E(e,"pin_count");function D(e,t){return{type:"BOARD_ARCHIVE",payload:{boardId:e,username:t}}}function T(e,t){return r=>(r(D(e)),o.Z.create("BoardArchiveResource",{boardId:e,orbacSubjectId:t}).callUpdate())}function S(e){return{type:"BOARD_UNARCHIVE",payload:{boardId:e}}}function A(e,t){return r=>(r(S(e)),o.Z.create("BoardArchiveResource",{boardId:e,orbacSubjectId:t}).callDelete())}let Z=(e,t)=>({type:"BOARD_COVER_IMAGE_UPDATED",payload:{boardId:e,coverPin:t}}),h=e=>({type:"BOARD_DISABLE_MORE_IDEAS_BADGING",payload:{boardId:e}});function N(e,t,r){let i={name:e,privacy:d.Z.BoardPrivacy.PUBLIC,username:t,...r?{orbac_subject_id:r}:Object.freeze({})};return e=>o.Z.create("BoardResource",i).callCreate().then(r=>{let o=r.resource_response.data;return e(t&&(0,c.jB)("BoardsResource",(0,a.Z)(t,!1))),o})}function C(e={},t,r){return{type:"BOARD_CREATE_COMPLETE",payload:{options:e,board:t},error:r}}let m=(e,t)=>({type:"BOARD_INVITE_DENIED_BY_VIEWER",payload:{boardId:e,userId:t}}),v=(e,t,r)=>({type:"BOARD_COLLABORATOR_DELETE",payload:{boardId:e,userId:t,viewingUser:r}}),P=(e,t,r,o)=>({type:"BOARD_COLLABORATOR_ADD",payload:{boardId:e,viewingUser:t,status:r,collaboratingUsers:o}}),j=(e,t,r)=>async d=>{d(m(e,t));let i=await o.Z.create("BoardInviteResource",{board_id:e,invited_user_id:t}).callDelete();return i.resource_response.error||r({event_type:29,object_id_str:e}),i},L=(e,t,r,d,i,n)=>async c=>{c(v(e,d?.id??"",r));try{(await o.Z.create("accepted"===t?"BoardCollaboratorResource":"BoardInviteResource",{board_id:e,field_set_key:"boardEdit",invited_user_id:d?.id??"",...n?{orbac_subject_id:n}:{}}).callDelete()).resource_response.error||i({event_type:"accepted"===t?25:29,object_id_str:e})}catch(o){c(P(e,r,t,[d]))}},w=(e,t,r,d)=>i=>{let n=o.Z.create("BoardResource",{board_id:r}).callDelete();return i(b({viewingUserId:e,viewingUsername:t,boardId:r,boardPinCount:d})),n},g=(e,t)=>r=>o.Z.create("BoardArchiveResource",{boardId:e}).callUpdate().then(o=>(r((0,_.Qv)("archived-boards",[{id:e,type:"board"}])),r(D(e,t)),o)),U=(e,t)=>r=>o.Z.create("BoardArchiveResource",{boardId:e}).callDelete().then(o=>(r((0,_.Qv)(`profile-boards:${t}`,[{id:e,type:"board"}])),r(S(e)),o))},430408:(e,t,r)=>{r.d(t,{Z:()=>p,S:()=>u});var o=r(216167),d=r(821419),i=r(402287),n=r(64819),c=r(937310),a=r(622888);let s=e=>t=>{a.Z.showError(function(e,t){switch(e.api_error_code){case 2171:case 2172:case 2173:return t._('Please wait until the previous board action finishes.', ' - ', ' -- ');default:return e.message}}(t,e))},_=e=>(0,n.N8)(e.sectionId?c.Z.BOARD_SECTION_PINS:c.Z.BOARDFEED,e.sectionId||e.boardId);function l(e,t){let{source:r,target:o}=e;o.boardId!==r.boardId?(t((0,d.Tq)(r.boardId,"pin_count")),t((0,d.Tq)(o.boardId,"pin_count"))):r.sectionId&&o.sectionId||t((0,d.Tq)(o.boardId,"pin_count")),r.sectionId&&t((0,i.CE)(r.sectionId)),o.sectionId&&t((0,i.CE)(o.sectionId))}function u(e){return t=>{let{selectedPinIds:r,source:o,target:d}=e;t((0,n.EX)({feedId:o.sectionId||o.boardId,feedType:o.sectionId?c.Z.BOARD_SECTION_PINS:c.Z.BOARDFEED,itemIds:r,itemType:"pin"})),t((0,n.vX)({feedId:d.sectionId||d.boardId,feedType:d.sectionId?c.Z.BOARD_SECTION_PINS:c.Z.BOARDFEED,itemIds:r,itemType:"pin"})),l(e,t)}}function p(e,t){return r=>(function(e,t,r){let{inverseSelection:d,selectedPinIds:i,source:a,target:l,orbacSubjectId:u}=e;if(a.boardId===l.boardId&&(a.sectionId||null)===(l.sectionId||null))return Promise.reject();if(d){let e={board_id:a.boardId,new_board_id:l.boardId,old_section_id:a.sectionId||void 0,new_section_id:l.sectionId||void 0,pin_ids:i,orbac_subject_id:u};return o.Z.create("BulkEditSelectAllResource",e).callUpdate({showError:!1}).then(()=>Promise.all([t(_(a)),t(_(l))])).catch(s(r))}{let e=(e,r)=>{t((0,n.EX)({feedId:e.sectionId||e.boardId,feedType:e.sectionId?c.Z.BOARD_SECTION_PINS:c.Z.BOARDFEED,itemIds:i,itemType:"pin"})),t((0,n.vX)({feedId:r.sectionId||r.boardId,feedType:r.sectionId?c.Z.BOARD_SECTION_PINS:c.Z.BOARDFEED,itemIds:i,itemType:"pin"}))};e(a,l);let d=()=>e(l,a);if(l.boardId===a.boardId){if(l.sectionId){let e={section_id:l.sectionId,pins:i,orbac_subject_id:u};return o.Z.create("BoardSectionEditResource",e).callUpdate({showError:!1}).catch(e=>{d(),s(r)(e)})}{let e={section_id:a.sectionId,pins:i,orbac_subject_id:u};return o.Z.create("BoardSectionPinsResource",e).callDelete({showError:!1}).catch(e=>{d(),s(r)(e)})}}{let e={board_id:l.boardId,section_id:l.sectionId||void 0,pin_ids:i,orbac_subject_id:u};return o.Z.create("BulkEditResource",e).callUpdate({showError:!1}).catch(e=>{d(),s(r)(e)})}}})(e,r,t).then(()=>l(e,r))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/73872-7f8805ebfdc1d23e.mjs.map