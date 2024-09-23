"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[61881],{161881:(e,t,a)=>{a.d(t,{Z:()=>l});var d=a(545007),r=a(216167),_=a(415199),o=a(413110),i=a(930822),n=a(64819),E=a(232518),g=a(937310);let m={[o.o.aggregatedComment]:"AggregatedCommentReplyResource",[o.o.pin]:"AggregatedCommentResource",[o.o.didIt]:"DidItCommentsResource"};function l(){let e=(0,d.I0)(),{aggregatedCommentCreated:t,updateCommentCount:a}=(0,_.nf)();return async({force:d=!0,fromUnifiedComment:_,objectId:o,objectType:l,orbacSubjectId:s,pinId:T,replyToCommentId:u,tags:p,text:c})=>{let y=m[l],D={force:d,objectId:o,pinId:T,tags:p,text:c,replyToCommentId:u,...s?{orbacSubjectId:s}:{}},A=g.Z.AGGREGATED_COMMENTS;_&&(A="pin"===l?g.Z.UNIFIED_COMMENTS:g.Z.AGGREGATED_COMMENT_REPLIES);let C=await r.Z.create(y,D).callCreate({showError:!1}),G=C.resource_response.data;return t(o,G),e((0,n.vX)({feedType:A,feedId:o,itemIds:[G.id],itemType:G.type,prepend:!0})),"aggregatedComment"===l?a(o,1):"pin"!==l&&e((0,i.L8)(o,1)),T&&e((0,E.R)(T,1)),G.id||C}}},415199:(e,t,a)=>{a.d(t,{pb:()=>D,nf:()=>A,lV:()=>C});var d=a(667294),r=a(545007),_=a(441143),o=a.n(_),i=a(216167),n=a(342513),E=a(107366),g=a(638747),m=a(105737),l=a(996523);let s={feature_map:Object.freeze({})},T=(e,t)=>{let a={...(0,l.Z)(e,t),...t.reaction_counts?{reaction_counts:t.reaction_counts}:Object.freeze({}),...t.tags?{tags:t.tags}:Object.freeze({}),...t.tagged_users?{tagged_users:t.tagged_users}:Object.freeze({})};return(0,m.ZP)(e,a)?e:a},u=(e=s,t)=>{if("FETCH_COMPLETE"===t.type){let{payload:{resource:a}}=t,{data:d}=t.payload.response.resource_response;if("AggregatedCommentFeedResource"===a||"AggregatedCommentReplyFeedResource"===a||"DidItCommentsResource"===a){let t=(d||[]).reduce((t,a)=>(t[a.id]=T(e[a.id],a),t),{});return{...e,...t}}if("UnifiedCommentsResource"===a&&d&&d.length>0){let t=d.filter(e=>"aggregatedcomment"===e.type).reduce((t,a)=>(t[a.id]=T(e[a.id],a),t),{});return{...e,...t}}if("UnifiedCommentsPreviewResource"===a&&d&&d.length>0){let t=d[0].aggregated_comment,a=t?{[t.id]:T(e[t.id],t)}:{},r=d[0].creator_reply,_=r?{[r.id]:T(e[r.id],r)}:{};return{...e,...a,..._}}if("AggregatedCommentFeaturesResource"===a&&d&&Object.keys(d).length>0)return{...e,feature_map:d}}else if("AGGREGATED_COMMENT_CREATED"===t.type){let{payload:{aggregatedComment:a}}=t;return a.id?{...e,[a.id]:a}:e}else if("AGGREGATED_COMMENT_DELETED"===t.type||"AGGREGATED_COMMENT_HIDDEN"===t.type){let{payload:{aggregatedCommentId:a}}=t,d={...e};return delete d[a],d}else if("AGGREGATED_COMMENT_HIDDEN_FOR_USER"===t.type){let{payload:{userId:a}}=t;return Object.fromEntries(Object.entries(e).filter(e=>e[1].user?.id!==a))}else if("AGGREGATED_COMMENT_UPDATED"===t.type){let{payload:{data:a}}=t;return{...e,[a.id]:T(e[a.id],a)}}else if("AGGREGATED_COMMENT_LIKE_TOGGLED"===t.type){let{payload:{data:a}}=t,d=e[a.id],r=d.reaction_counts[1]||0,_={1:a.reaction_by_me?r+1:r-1},o={...d,reaction_by_me:a.reaction_by_me,reaction_counts:_};return{...e,[a.id]:o}}else if("AGGREGATED_COMMENT_HELPFUL_TOGGLED"===t.type){let{payload:{data:a}}=t,d=e[a.id],r=d.helpful_count||0,_=a.marked_helpful_by_me?r+1:r-1,o={...d,marked_helpful_by_me:a.marked_helpful_by_me,helpful_count:_};return{...e,[a.id]:o}}else if("AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED"===t.type){let{payload:{data:a}}=t,d={...e[a.aggregated_comment_id],highlighted_by_pin_owner:a.is_highlighted};return{...e,[a.aggregated_comment_id]:d}}else if("AGGREGATED_COMMENT_FEATURES_UPDATED"===t.type){let{payload:{data:{featureMap:a}}}=t;return{...e,feature_map:{...e.feature_map,...a}}}else if("UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT"===t.type){let{payload:{increment:a,id:d}}=t,r=e[d];if(!r)return e;let _={...r,comment_count:r.comment_count+a};return{...e,[d]:_}}else if("DELETE_COMMENT_MENTION"===t.type){let{payload:{aggregatedCommentId:a,tagged_users:d}}=t,r={...e[a],tagged_users:d};return{...e,[a]:r}}else if("GET_COMMENT_TRANSLATION"===t.type){let{payload:{aggregatedCommentId:a,translatedText:d}}=t,r={...e[a],translatedText:d};return{...e,[a]:r}}return e};var p=a(785893);let{Provider:c,useHook:y}=(0,n.Z)("AggregatedComments");function D({children:e}){let t=(0,r.v9)(({resources:e})=>e.UnifiedCommentsResource),a=s;t&&Object.values(t).forEach(e=>{let t=e.data?.filter(e=>"aggregatedcomment"===e.type),d=t?.reduce((e,t)=>(e[t.id]=T(a[t.id],t),e),{});a={...a,...d}});let[_,o]=(0,d.useReducer)(u,a),i=e=>{o({type:"FETCH_COMPLETE",payload:e})};(0,g.Z8)("AggregatedCommentFeaturesResource",i),(0,g.my)("AggregatedCommentFeaturesResource",i),(0,g.Z8)("AggregatedCommentFeedResource",i),(0,g.my)("AggregatedCommentFeedResource",i),(0,g.Z8)("AggregatedCommentReplyFeedResource",i),(0,g.my)("AggregatedCommentReplyFeedResource",i),(0,g.Z8)("DidItCommentsResource",i),(0,g.my)("DidItCommentsResource",i),(0,g.Z8)("UnifiedCommentsPreviewResource",i),(0,g.my)("UnifiedCommentsPreviewResource",i),(0,g.Z8)("UnifiedCommentsResource",i),(0,g.my)("UnifiedCommentsResource",i);let n=(0,d.useMemo)(()=>({aggregatedComments:_,dispatch:o}),[_,o]);return(0,p.jsx)(c,{value:n,children:e})}function A(){let{dispatch:e}=y();return(0,d.useMemo)(()=>({aggregatedCommentCreated(t,a){e({type:"AGGREGATED_COMMENT_CREATED",payload:{parentId:t,aggregatedComment:a}})},aggregatedCommentDeleted:(t,a)=>{e({type:"AGGREGATED_COMMENT_DELETED",payload:{parentId:t,aggregatedCommentId:a}})},aggregatedCommentHidden:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN",payload:{aggregatedCommentId:t}})},aggregatedCommentsHiddenForUser:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN_FOR_USER",payload:{userId:t}})},flagAggregatedComment:async({commentId:e,reason:t,detailedReasons:a})=>(0,E.Z)({url:`/v3/aggregated_comments/${e}/flag/`,method:"PUT",data:{commentId:e,reason:t,detailedReasons:a}}),deleteCommentMention:async t=>{let{resource_response:a}=await (0,E.Z)({url:`/v3/aggregated_comments/${t}/mentions/`,method:"DELETE",data:{fields:["aggregatedcomment.id","aggregatedcomment.tagged_users"]}}),d=a.data??{};e({type:"DELETE_COMMENT_MENTION",payload:{aggregatedCommentId:d.id,tagged_users:d.tagged_users}})},translateAggregatedComment:async t=>{try{let{resource_response:a}=await (0,E.Z)({url:`/v3/aggregated_comments/${t}/translate/`,method:"GET"}),d=a.data??"";e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:t,translatedText:d}})}catch(a){e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:t,translatedText:""}})}},toggleAggregatedCommentHelpful:({aggregatedCommentId:t,isMarkedHelpfulByMe:a})=>{(0,E.Z)({url:`/v3/helpful/1/${t}/`,method:a?"DELETE":"POST"}),e({type:"AGGREGATED_COMMENT_HELPFUL_TOGGLED",payload:{data:{id:t,marked_helpful_by_me:!a}}})},toggleAggregatedCommentHighlight:async({aggregatedCommentId:t,pinId:a,isHighlighted:d})=>{o()(t,"Could not find comment"),o()(a,"Could not find Pin"),await (0,E.Z)({url:"/v3/aggregated_comments/pin/highlight/",method:"PUT",data:{aggregated_comment:t,pin:a,highlight:!d}}),e({type:"AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED",payload:{data:{aggregated_comment_id:t,pin_id:a,is_highlighted:!d}}})},toggleAggregatedCommentLike:({aggregatedCommentId:t,isLikedByMe:a})=>{(0,E.Z)({url:`/v3/aggregated_comments/${t}/react/`,method:a?"DELETE":"POST",data:{reaction_type:1}}),e({type:"AGGREGATED_COMMENT_LIKE_TOGGLED",payload:{data:{id:t,reaction_by_me:a?0:1}}})},updateAggregatedComment:async({commentId:t,force:a,orbacSubjectId:d,tags:r,text:_})=>{let{resource_response:o}=await i.Z.create("AggregatedCommentResource",{commentId:t,force:a,tags:r,text:_,...d?{orbacSubjectId:d}:{}}).callUpdate({showError:!1}),{tagged_users:n}=o.data??{};e({type:"AGGREGATED_COMMENT_UPDATED",payload:{data:{id:t,tagged_users:n.map(e=>({...e})),tags:JSON.parse(r),text:_}}})},updateAggregatedCommentFeatures:async({userId:t,featureMap:a,passcode:d,userConfirmPasscode:r,isPassCodeExperimentEnabled:_})=>{let o={userId:t,featureMap:a,passcode:d,user_confirm_skip_passcode:r};void 0===r&&_&&(o.user_confirm_skip_passcode=!1);let{resource_response:n}=await i.Z.create("AggregatedCommentFeaturesResource",o).callUpdate({showError:!1});e({type:"AGGREGATED_COMMENT_FEATURES_UPDATED",payload:{data:{featureMap:n.data??Object.freeze({})}}})},updateCommentCount:(t,a)=>{e({type:"UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT",payload:{increment:a,id:t}})}}),[e])}function C(){let{aggregatedComments:e}=y();return e}},413110:(e,t,a)=>{a.d(t,{n:()=>r,o:()=>d});let d={aggregatedComment:"aggregatedComment",didIt:"didIt",pin:"pin"},r={aggregatedComment:"aggregatedcomment",didIt:"userdiditdata",pin:"pin"}},930822:(e,t,a)=>{a.d(t,{DD:()=>m,lg:()=>l,Th:()=>T,YH:()=>n,wH:()=>i,IU:()=>s,L8:()=>g});var d=a(216167),r=a(107366),_=a(64819),o=a(937310);function i({didItDataId:e,isLikedByMe:t}){return a=>((0,r.Z)({url:`/v3/did_it/${e}/like/`,method:t?"DELETE":"POST"}),a({type:"USER_DID_IT_DATA_LIKE_TOGGLED",payload:{id:e,liked_by_me:!t}}))}function n({didItDataId:e,isMarkedHelpfulByMe:t}){return a=>((0,r.Z)({url:`/v3/helpful/2/${e}/`,method:t?"DELETE":"POST"}),a({type:"USER_DID_IT_DATA_HELPFUL_TOGGLED",payload:{id:e,marked_helpful_by_me:!t}}))}function E(e){return{type:"USER_DID_IT_DATA_DELETE",payload:{id:e}}}function g(e,t){return{type:"USER_DID_IT_DATA_UPDATE_COMMENT_COUNT",payload:{id:e,increment:t}}}function m({aggregatedPinDataId:e,details:t,fromUnifiedComment:a,image_signatures:r,pin_id:i,username:n,updateParentDidItCount:E}){let m={aggregatedPinDataId:e,details:t,image_signatures:r,pin_id:i};return t=>d.Z.create("DidItActivityResource",m).callCreate().then(d=>{let r=d.resource_response.data;t({type:"PIN_DID_IT",payload:{id:i,value:!0}}),t({type:"USER_DID_IT_DATA_CREATE",payload:{user_did_it_data:r}}),t((0,_.vX)({feedId:e,feedType:a?o.Z.UNIFIED_COMMENTS:o.Z.TRIED_IT_FEED,itemIds:[r.id],itemType:r.type})),t((0,_.vX)({feedId:n,feedType:o.Z.TRIED_IT_FEED,itemIds:[r.id],itemType:r.type})),E&&t(g(e,1))},()=>{})}function l({aggregatedPinDataId:e,feedType:t,id:a,isOwnedByMe:r,pinId:i,username:n,updateParentDidItCount:m}){return l=>{d.Z.create("DidItActivityResource",{user_did_it_data_id:a,pinId:i}).callDelete().then(()=>{r&&l({type:"PIN_DID_IT",payload:{id:i,value:!1}}),l(E(a)),l((0,_.EX)({feedId:e??"",feedType:t||o.Z.TRIED_IT_FEED,itemIds:[a],itemType:"userdiditdata"})),l((0,_.EX)({feedId:n,feedType:o.Z.TRIED_IT_FEED,itemIds:[a],itemType:"userdiditdata"})),l((0,_.EX)({feedId:n,feedType:o.Z.UNIFIED_COMMENTS,itemIds:e?[e]:[],itemType:"userdiditdata"})),m&&l(g(a,-1))},()=>{})}}function s({id:e,details:t,image_signatures:a,pinId:r}){let _={details:t,image_signatures:a,user_did_it_data_id:e,pin_id:r};return e=>{d.Z.create("DidItActivityResource",_).callUpdate().then(t=>{e({type:"USER_DID_IT_DATA_UPDATE",payload:{user_did_it_data:t.resource_response.data}})},()=>{})}}function T(e,t,a,d,i){return n=>{(0,r.Z)({url:`/v3/did_it/${a}/flag/`,method:"PUT",data:{reason:d,detailed_reasons:t,explanation:void 0}}).then(()=>{n(E(a)),e&&n((0,_.EX)({feedId:e,feedType:o.Z.TRIED_IT_FEED,itemIds:[a],itemType:"userdiditdata"})),n((0,_.EX)({feedId:i,feedType:o.Z.TRIED_IT_FEED,itemIds:[a],itemType:"userdiditdata"}))},()=>{})}}},232518:(e,t,a)=>{a.d(t,{R:()=>d});function d(e,t){return{type:"PIN_UPDATE_COMMENT_COUNT",payload:{id:e,increment:t}}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/61881-b97c38965d845245.mjs.map