"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[95813],{86785:(e,t,a)=>{a.d(t,{G6:()=>s,i7:()=>n,oi:()=>i,u$:()=>r,un:()=>l,vU:()=>o,w1:()=>d});let i=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5,EDGE:6}),r=e=>e?e.includes("Chrome")?i.CHROME:e.includes("Safari")?i.SAFARI:e.includes("Firefox")?i.FIREFOX:e.includes("Opera")?i.OPERA:e.includes("IE")?i.IE:e.includes("Edge")?i.EDGE:i.OTHER:i.OTHER;function s(e){return r(e)===i.SAFARI}function n(e){return r(e)===i.CHROME}function o(e){return r(e)===i.FIREFOX}function l(e){return r(e)===i.EDGE}function d(e){return r(e)===i.IE}},259866:(e,t,a)=>{a.d(t,{Z:()=>i});function i(e){return function e(t,a){let i;if(null==t||"object"!=typeof t&&"function"!=typeof t)return t;let r=a.find(e=>e.value===t);if(r)return r.result;let s=Object.prototype.toString.call(t);switch(s){case"[object Array]":i=Array(t.length);break;case"[object Set]":i=new Set;break;case"[object Object]":case"[object Arguments]":i={};break;case"[object Map]":i=new Map;break;default:return t}let n=[...a,{value:t,result:i}];switch(s){case"[object Array]":t.forEach((t,a)=>{i[a]=e(t,n)});break;case"[object Set]":t.forEach(t=>{i.add(e(t,n))});break;case"[object Object]":case"[object Arguments]":Object.entries(t).forEach(([t,a])=>{i[t]=e(a,n)});break;case"[object Map]":t.forEach((t,a)=>{i.set(a,e(t,n))})}return i}(e,[])}},705895:(e,t,a)=>{function i(e,t,a){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,{Z:()=>n});let r=new class{constructor(){i(this,"onResumeListeners",[]),i(this,"onPauseListeners",[]),i(this,"inExp",!1),i(this,"windowInFocus",!0)}setExperiment(e=!1){this.inExp=e}onSessionResume(e){return this.onResumeListeners.push(e),this}onSessionPause(e){return this.onPauseListeners.push(e),this}removeResumeListener(e){this.onResumeListeners.filter(t=>t!==e)}removePauseListener(e){this.onPauseListeners=this.onPauseListeners.filter(t=>t!==e)}getAppState(){return this.windowInFocus?0:void 0}},s=e=>{if(e.isHidden){let{reason:t}=e;r.windowInFocus=!1,r.onPauseListeners.forEach(e=>e(t))}else r.windowInFocus=!0,r.onResumeListeners.forEach(e=>e())};setTimeout(()=>{window.addEventListener("beforeunload",()=>s({isHidden:!0,reason:"beforeunload"})),window.addEventListener("focus",()=>s({isHidden:!1})),window.addEventListener("blur",()=>s({isHidden:!0,reason:"blur"})),window.addEventListener("pageshow",()=>s({isHidden:!1})),window.addEventListener("pagehide",()=>s({isHidden:!0,reason:"pagehide"})),void 0!==document.hidden?document.addEventListener("visibilitychange",()=>s(document.hidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1):void 0!==document.webkitHidden&&document.addEventListener("webkitvisibilitychange",()=>s(document.webkitHidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1)},0);let n=r},371626:(e,t,a)=>{a.d(t,{Z:()=>i});let i=e=>{switch(e){case"BR":case"MX":case"AR":case"CL":case"CO":return"LatAm";case"US":return"US";case"CA":return"CA";case"GB":return"GB";case"FR":return"FR";case"DE":return"DE";case"AU":return"AU";case"IN":return"IN";default:return"OTHER"}}},214164:(e,t,a)=>{a.d(t,{Wr:()=>h,Hx:()=>p,RC:()=>c});var i=a(667294),r=a(342513),s=a(951050),n=a(587070),o=a(785893);let l=()=>Promise.resolve().then(a.bind(a,951050)),{Provider:d,useHook:u}=(0,r.Z)("IdeaPinVideoPlayer");function h({children:e}){let[t,a]=(0,n.Z)(l,s.initialState),r=(0,i.useMemo)(()=>({dispatch:a,ideaPinVideoPlayerControls:t}),[a,t]);return(0,o.jsx)(d,{value:r,children:e})}function c(){let{dispatch:e}=u();return(0,i.useMemo)(()=>({updateSeekTime:(t,a)=>{e({type:"UPDATE_SEEK_TIME",payload:{seekTime:t,pinId:a||""}})},clearSeekTime:t=>{e({type:"CLEAR_SEEK_TIME",payload:{seekTime:void 0,pinId:t||""}})},updateSeekingIdeaPin:t=>{t?e({type:"UPDATE_SEEKING_IDEA_PIN",payload:{isSeekingIdeaPin:t}}):e({type:"UPDATE_SEEKING_IDEA_PIN",payload:{isSeekingIdeaPin:t,seekTime:void 0}})},updateCurrentTime:t=>{e({type:"UPDATE_CURRENT_TIME",payload:{currentTime:t}})},updateDuration:t=>{e({type:"UPDATE_DURATION",payload:{duration:t}})}}),[e])}function p(){let{ideaPinVideoPlayerControls:e}=u();return e}},951050:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r,initialState:()=>i});let i={seekTime:void 0,seekTimes:{},isSeekingIdeaPin:!1,currentProgressInfo:{currentTime:0,duration:0}};function r(e=i,t){switch(t.type){case"UPDATE_SEEK_TIME":return{...e,seekTimes:{...e.seekTimes,[t.payload.pinId]:t.payload.seekTime},seekTime:t.payload.seekTime};case"CLEAR_SEEK_TIME":return{...e,seekTimes:{},seekTime:void 0};case"UPDATE_SEEKING_IDEA_PIN":return{...e,isSeekingIdeaPin:t.payload.isSeekingIdeaPin};case"UPDATE_CURRENT_TIME":return{...e,currentProgressInfo:{...e.currentProgressInfo,currentTime:t.payload.currentTime}};case"UPDATE_DURATION":return{...e,currentProgressInfo:{...e.currentProgressInfo,duration:t.payload.duration}};default:return e}}},587070:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(667294);function r(e,t){let a=(0,i.useRef)([]),[r,s]=(0,i.useState)(),[n,o]=(0,i.useReducer)(r??(()=>t),t),l=(0,i.useCallback)(t=>{r?o(t):(a.current.length||e().then(e=>{s(()=>e.default)}),a.current=[...a.current,t])},[e,r]);return(0,i.useEffect)(()=>{r&&(a.current.forEach(o),a.current=[])},[r]),[n,l]}},369708:(e,t,a)=>{a.d(t,{Wr:()=>u,rG:()=>d});var i=a(667294),r=a(214877),s=a(342513),n=a(340523),o=a(785893);let{Provider:l,useHook:d}=(0,s.Z)("VideoPlayer");function u({children:e}){let{logContextEvent:t,logImpression:a}=(0,r.v)(),{checkExperiment:s}=(0,n.F)(),[d,u]=(0,i.useState)(!1),[h,c]=(0,i.useState)([]),[p,y]=(0,i.useState)([]),[m,S]=(0,i.useState)({}),P=s("web_ads_mrc_video_impression").anyEnabled,f=e=>{S(t=>({...t,[e]:!0}))},E=(0,i.useCallback)(e=>{if(18===e.event_type&&e.event_data?.pinImpressions?.length){let{isNativeVideoAndWatchable:t}=e.event_data.pinImpressions[0],a=(e.aux_data?.commerce_data||"").includes("story_pin_id");P&&(t||a)&&c(t=>[...t,e].slice(-1e3))}},[P]),b=(0,i.useCallback)(e=>{18===e.eventType&&P&&y(t=>[...t,e].slice(-1e3))},[P]),g=e=>{let{renderDuration:t,time:a}=e.event_data.pinImpressions[0],i=Math.max(t,15e8);return{...e,event_data:{...e.event_data,pinImpressions:[{...e.event_data.pinImpressions[0],isMrcBtr:!0,endTime:a+i,renderDuration:i}]}}},T=e=>{if(e.eventData){let{time:t,endTime:a}=e.eventData,i=Math.max((a??0)-(t??0),15e8);return{...e,eventData:{...e.eventData,isMrcBtr:!0,endTime:(t??0)+i}}}return null};(0,i.useEffect)(()=>{let e=h.filter(e=>{let{pinIdStr:a}=e.event_data.pinImpressions[0];return!m[a]||!P||(t(g(e)),!1)});e.length!==h.length&&c(e)},[h,P,t,m]),(0,i.useEffect)(()=>{let e=p.filter(e=>{let t=e.eventData?.pinIdStr;if(!t)return!1;if(m[t]&&P){let t=T(e);return t&&a(t),!1}return!0});e.length!==p.length&&y(e)},[p,P,a,m]);let v=(0,i.useMemo)(()=>({captionsEnabled:d,logMrcVideoAdImpressionOnPlay:b,logMrcVideoAdEventOnPlay:E,setCaptionsEnabled:u,setVideoPlayed:f,videosPlayed:m}),[d,E,b,m]);return(0,o.jsx)(l,{value:v,children:e})}},115557:(e,t,a)=>{a.d(t,{$f:()=>r,Cy:()=>l,DR:()=>i,Fm:()=>o,bR:()=>n,gJ:()=>s,lG:()=>d});let i=1,r=2,s=1e3,n=1e3,o=1e3,l=Object.freeze({DEFAULT:0,LOAD_START:1,LOADED_METADATA:2,LOADED_DATA:3,PLAYING:4,PAUSED:5,SEEKING:6,STALLING:7,FAILED:8,ENDED:9}),d=Object.freeze({MEDIA_ERR_ABORTED:1,MEDIA_ERR_NETWORK:2,MEDIA_ERR_DECODE:3,MEDIA_ERR_SRC_NOT_SUPPORTED:4})},239821:(e,t,a)=>{a.d(t,{g:()=>c,I:()=>h});var i=a(667294),r=a(342513),s=a(705895),n=a(259866);let o={appInFocus:!0,footerPlusButtonVisible:!0,isAutoplay:!1,showTypeaheadOverlay:!1,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,organicVideosAutoplaying:{},promotedVideosAutoplaying:{}},viewportSize:"lg"},l=(e=o,t)=>{if("TOGGLE_TYPEAHEAD_OVERLAY"===t.type&&e.showTypeaheadOverlay!==t.payload)return{...e,showTypeaheadOverlay:t.payload};if("SET_CURRENT_VIDEO"===t.type){let{payload:a}=t,{pinId:i,isPromoted:r,currentTime:s,allowMultipleOrganicVideos:o}=a,{videosAutoplaying:l}=e,{currentlyPlayingOrganicVideoId:d,promotedVideosAutoplaying:u,organicVideosAutoplaying:h}=l,c=(0,n.Z)(u),p=(0,n.Z)(h);return r||!d||o?(r?c[i]={pinId:i,currentTime:s,paused:!1}:p[i]={pinId:i,currentTime:s,paused:!1},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:r?d:i,promotedVideosAutoplaying:c,organicVideosAutoplaying:p}}):e}if("SET_IS_AUTOPLAY"===t.type&&e.isAutoplay!==t.payload)return{...e,isAutoplay:t.payload};if("PAUSE_CURRENT_VIDEO"===t.type){let{payload:a}=t,{pinId:i,isPromoted:r,currentTime:s}=a,{videosAutoplaying:o}=e,{promotedVideosAutoplaying:l,organicVideosAutoplaying:d}=o,u=(0,n.Z)(l),h=(0,n.Z)(d);return r?u[i]={...u[i],paused:!0,currentTime:s}:h[i]={...h[i],paused:!0,currentTime:s},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,promotedVideosAutoplaying:u,organicVideosAutoplaying:h}}}if("SET_APP_FOCUS_STATE"===t.type&&e.appInFocus!==t.payload)return{...e,appInFocus:t.payload};if("SET_VIEWPORT_SIZE"===t.type&&e.viewportSize!==t.payload)return{...e,viewportSize:t.payload};if("SET_FOOTER_VISIBILITY_STATE"===t.type&&e.footerPlusButtonVisible!==t.payload)return{...e,footerPlusButtonVisible:t.payload};return e};var d=a(785893);let{Provider:u,useHook:h}=(0,r.Z)("AppUI");function c({children:e}){let[t,a]=(0,i.useReducer)(l,o),r=(0,i.useCallback)(e=>a({type:"PAUSE_CURRENT_VIDEO",payload:e}),[]),n=(0,i.useCallback)(e=>a({type:"SET_APP_FOCUS_STATE",payload:e}),[]),h=(0,i.useCallback)(e=>a({type:"SET_CURRENT_VIDEO",payload:e}),[]),c=(0,i.useCallback)(e=>a({type:"SET_FOOTER_VISIBILITY_STATE",payload:e}),[]),p=(0,i.useCallback)(e=>a({type:"SET_IS_AUTOPLAY",payload:e}),[]),y=(0,i.useCallback)(e=>a({type:"SET_VIEWPORT_SIZE",payload:e}),[]),m=(0,i.useCallback)(e=>a({type:"TOGGLE_TYPEAHEAD_OVERLAY",payload:e}),[]),S=(0,i.useMemo)(()=>({pauseAutoplay:r,setCurrentVideo:h,setFooterPlusButtonVisible:c,setIsAutoplay:p,setViewportSize:y,toggleTypeaheadOverlay:m,setAppFocusState:n,appUI:t}),[r,h,c,p,y,m,n,t]);return(0,i.useEffect)(()=>{s.Z.onSessionResume(()=>{n(!0)}).onSessionPause(()=>{n(!1)})},[n]),(0,d.jsx)(u,{value:S,children:e})}},131348:(e,t,a)=>{a.r(t),a.d(t,{VideoWrapper:()=>R,default:()=>A,getPlaylistSourceSrc:()=>D});var i=a(667294),r=a(86785),s=a(5859),n=a(214164),o=a(584452),l=a(369708),d=a(239821),u=a(883119),h=a(214877),c=a(406893),p=a(149722),y=a(294259),m=a(96612),S=a(813779),P=a(115557),f=a(993303),E=a(785893);function b(e,t,a){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e){return e&&void 0!==e?"string"==typeof e?e:Array.isArray(e)&&e[0].src?e[0].src:`unsupported_type_${typeof e}`:"undefined"}class T extends i.Component{constructor(...e){super(...e),b(this,"state",{canPlayVideo:!1,playbackState:P.Cy.DEFAULT,videoStartTime:this.props.seekTime?this.props.seekTime:this.props.videoStartTime||0}),b(this,"errorRetryCount",2),b(this,"hasSegmentStarted",!1),b(this,"hasPlaybackStarted",!1),b(this,"hasVideoSessionStarted",!1),b(this,"hasVideoSessionEnded",!1),b(this,"lastStallTime",null),b(this,"lastPauseTime",null),b(this,"logSessionStartOnNextPlay",!1),b(this,"playerId",""),b(this,"videoSessionId",""),b(this,"videoVisibleTime",null),b(this,"playbackPerformance",{canPlayTime:null,detailedErrors:"",errorCode:0,errorName:"",errorReason:"",hasFatalError:!1,loadStartTime:null,numberOfStalls:0,numberOfSeeks:0,playbackStartTimestamp:null,segments:[],srcString:g(this.props.src),totalStallDurationMs:0,totalPauseDurationMs:0,webBrowser:this.props.webBrowser,webBrowserVersion:this.props.webBrowserVersion}),b(this,"componentDidMount",()=>{let{contextLogData:e={},playing:t}=this.props,{is_closeup_video:a=!1}=e;(0,S.tE)("videoMounted",!1,a),t&&(this.videoVisibleTime=new Date,this.logPlaybackPerformance(P.DR,{initiator:"mount"}));let i=this.videoPlayerRef?.video?.textTracks[0];i&&i.addEventListener("cuechange",()=>{let e=i.activeCues&&i.activeCues.length>0&&i.activeCues[0];e&&e.line&&(e.line=-6,e.size=88)})}),b(this,"componentDidUpdate",e=>{let{playing:t,visible:a,appInFocus:i,seekTime:r,captionsEnabled:s}=this.props;r&&r!==e.seekTime&&this.setState({videoStartTime:r});let n=this.videoPlayerRef?.video?.textTracks[0];n&&(s?n.mode="showing":n.mode="disabled"),e.appInFocus&&!i&&(this.logPlaybackPerformance(P.$f,{initiator:"update"}),this.logSessionStartOnNextPlay=!0),e.visible&&!1===a&&(this.logSessionStartOnNextPlay=!1,this.updatePauseDuration(),this.logPlaybackPerformance(P.$f,{initiator:"update"})),!1===e.visible&&!0===a&&(this.videoVisibleTime=this.videoVisibleTime||new Date,t?(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(P.DR,{initiator:"update"})):this.logSessionStartOnNextPlay=!0),t&&i&&this.logSessionStartOnNextPlay&&(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(P.DR,{initiator:"update"}),this.logSessionStartOnNextPlay=!1)}),b(this,"addSegment",()=>{let{canPlayTime:e,loadStartTime:t,segments:a,srcString:i}=this.playbackPerformance,r=-1;e&&t&&0===a.length&&(r=e>t?e.getTime()-t.getTime():0);let s=this.videoPlayerRef&&this.videoPlayerRef.video,n={indicatedKbps:-1,duration:s&&s.duration*P.gJ||-1,lastStartPlayTime:null,level:-1,numServerAddressChange:-1,observedKbps:-1,playbackStartDate:null,serverAddress:"",sourceWidth:-1,sourceHeight:-1,startupTimeMs:r,switchBitrateKbps:-1,uri:i,viewportWidth:s&&s.clientWidth||-1,viewportHeight:s&&s.clientHeight||-1,watchedDurationMs:0};a.push(n)}),b(this,"getCurrentVideoTime",()=>this.videoPlayerRef&&this.videoPlayerRef.video?this.videoPlayerRef.video.currentTime*P.gJ:0),b(this,"getVideoResourceTiming",()=>{if(window?.performance?.getEntriesByName&&this.playbackPerformance.srcString){let e=window.performance.getEntriesByName(this.playbackPerformance.srcString);return e.length>0&&e[0]||null}return null}),b(this,"handleCanPlayVideo",e=>{let{contextLogData:t={},onReady:a,playing:i}=this.props,{is_closeup_video:r=!1}=t,{canPlayVideo:s}=this.state;(0,S.tE)("handleCanPlayVideo",!1,r,{firstCanPlayEvent:!s,playing:i}),this.playbackPerformance.hasFatalError=!1,s||(this.playbackPerformance.canPlayTime=new Date),this.setState({canPlayVideo:!0}),a&&a(e)}),b(this,"handleEnded",e=>{let{loop:t,onEnded:a}=this.props,{segments:i}=this.playbackPerformance,r=i&&i[i.length-1];t&&this.videoPlayerRef&&this.videoPlayerRef.video?(this.updateWatchDurationForCurrentSegment(),r&&(r.lastStartPlayTime=0),this.hasSegmentStarted=!1):t||this.logPlaybackPerformance(P.$f,{initiator:"videoEnded",loop:t}),this.setState({playbackState:P.Cy.ENDED}),a&&a(e)}),b(this,"handleError",()=>{let{contextLogData:e={}}=this.props,{is_closeup_video:t=!1}=e,a=this.videoPlayerRef&&this.videoPlayerRef.video;a?.error?.code!==P.lG.MEDIA_ERR_ABORTED&&(this.playbackPerformance.hasFatalError=!0),this.playbackPerformance.detailedErrors+=`${this.playbackPerformance.detailedErrors.length>0?", ":""}${a?.error?.message||""}`,this.playbackPerformance.errorCode=a?.error?.code||0,this.playbackPerformance.errorName=a?.error?.message?.slice(0,100)||"unknown",this.playbackPerformance.errorReason=a?.error?.message?.slice(0,100)||"unknown";let i={errorName:this.playbackPerformance.errorCode,errorReason:this.playbackPerformance.errorName,errorRetryCount:this.errorRetryCount,playbackState:this.state.playbackState,networkState:a?.networkState||"unknown"};switch((0,S.tE)("fatalError",!1,t,i),a?.error?.code){case P.lG.MEDIA_ERR_ABORTED:break;case P.lG.MEDIA_ERR_NETWORK:case P.lG.MEDIA_ERR_DECODE:case P.lG.MEDIA_ERR_SRC_NOT_SUPPORTED:default:this.errorRetryCount>0&&(a?.load(),this.errorRetryCount-=1)}this.updateWatchDurationForCurrentSegment(),this.setState({playbackState:P.Cy.FAILED})}),b(this,"handleLoadedMetadata",()=>{this.setState({playbackState:P.Cy.LOADED_METADATA})}),b(this,"handleLoadStart",()=>{this.playbackPerformance.loadStartTime=new Date,this.setState({playbackState:P.Cy.LOAD_START})}),b(this,"handleLoadedData",()=>{this.setState({playbackState:P.Cy.LOADED_DATA})}),b(this,"handlePlaying",e=>{this.playbackPerformance.hasFatalError=!1,this.setPlaybackStartTime(),this.hasSegmentStarted||this.addSegment(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.updateStallDuration(),this.updatePauseDuration(),this.setState({playbackState:P.Cy.PLAYING}),this.props.clearSeekTime&&this.props.clearSeekTime(),this.props.onPlaying&&this.props.onPlaying(e)}),b(this,"handleUserPause",({event:e})=>{let{onControlsPause:t}=this.props;this.lastPauseTime=new Date,t&&t({event:e})}),b(this,"handleVideoPause",()=>{this.state.playbackState===P.Cy.STALLING||this.state.playbackState===P.Cy.SEEKING||(this.updateWatchDurationForCurrentSegment(),this.lastPauseTime||this.updateStallDuration()),this.setState({playbackState:P.Cy.PAUSED})}),b(this,"handleSeeking",()=>{this.playbackPerformance.numberOfSeeks+=1;let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&(t.lastStartPlayTime=null),this.state.playbackState!==P.Cy.ENDED&&this.setState({playbackState:P.Cy.SEEKING})}),b(this,"handleStalled",()=>{null===this.lastStallTime&&this.state.playbackState!==P.Cy.ENDED&&(this.lastStallTime=new Date,this.playbackPerformance.numberOfStalls+=1,this.setState({playbackState:P.Cy.STALLING}))}),b(this,"handleTimeUpdate",e=>{let{onTimeChange:t}=this.props;t&&t(e),this.state.playbackState===P.Cy.PLAYING&&(this.updateWatchDurationForCurrentSegment(),this.setLastSegmentStartPlayTime())}),b(this,"resetPlaybackMetrics",()=>{this.hasSegmentStarted=!0,this.hasPlaybackStarted=!1,this.hasVideoSessionStarted=!1,this.hasVideoSessionEnded=!0,this.lastStallTime=null,this.lastPauseTime=null,this.videoSessionId="",this.videoVisibleTime=null,this.logSessionStartOnNextPlay=!1;let e={...this.playbackPerformance.segments[this.playbackPerformance.segments.length-1],lastStartPlayTime:null,playbackStartDate:null,watchedDurationMs:0};this.playbackPerformance.detailedErrors="",this.playbackPerformance.errorCode=0,this.playbackPerformance.errorName="",this.playbackPerformance.errorReason="",this.playbackPerformance.hasFatalError=!1,this.playbackPerformance.numberOfStalls=0,this.playbackPerformance.numberOfSeeks=0,this.playbackPerformance.playbackStartTimestamp=null,this.playbackPerformance.totalStallDurationMs=0,this.playbackPerformance.segments=[e]}),b(this,"setLastSegmentStartPlayTime",()=>{let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.lastStartPlayTime&&(t.lastStartPlayTime=this.getCurrentVideoTime())}),b(this,"setLastSegmentPlaybackStartDate",()=>{let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.playbackStartDate&&(t.playbackStartDate=Date.now())}),b(this,"setPlaybackStartTime",()=>{this.hasPlaybackStarted||(this.playbackPerformance.playbackStartTimestamp=Date.now(),this.hasPlaybackStarted=!0)}),b(this,"setVideoPlayerRef",e=>{let{setVideoRef:t}=this.props;if(e&&(t&&t(e),this.videoPlayerRef=e,this.videoPlayerRef.video)){let e=this.videoPlayerRef.video;e.addEventListener("loadedmetadata",this.handleLoadedMetadata),e.addEventListener("loadeddata",this.handleLoadedData),e.addEventListener("pause",this.handleVideoPause),e.readyState>=3&&(this.setState({canPlayVideo:!0}),this.playbackPerformance.canPlayTime=new Date)}}),b(this,"updateStallDuration",()=>{if(null!==this.lastStallTime){let{lastStallTime:e}=this;this.playbackPerformance.totalStallDurationMs+=Date.now()-e.getTime(),this.lastStallTime=null}}),b(this,"updatePauseDuration",()=>{if(null!==this.lastPauseTime){let{lastPauseTime:e}=this;this.playbackPerformance.totalPauseDurationMs+=Date.now()-e.getTime(),this.lastPauseTime=null}}),b(this,"updateWatchDurationForCurrentSegment",()=>{let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1],a=t?t.lastStartPlayTime:null,i=this.getCurrentVideoTime();if(t&&null!==a&&"number"==typeof i&&"number"==typeof a){let e=i-a;e>0&&(t.watchedDurationMs+=e,t.lastStartPlayTime=null)}}),b(this,"logPlaybackPerformance",(e,t)=>{let{contextLogData:a={},userId:i,isAutoPlay:r,logContextEvent:s,preload:n,webBrowser:o,webBrowserVersion:l}=this.props,{is_closeup_video:d=!1}=a,{canPlayTime:u,detailedErrors:h,errorCode:c,errorName:p,errorReason:f,hasFatalError:E,loadStartTime:b,totalPauseDurationMs:g,totalStallDurationMs:T,numberOfStalls:v,numberOfSeeks:k,playbackStartTimestamp:D,segments:R,srcString:A}=this.playbackPerformance,_=this.videoPlayerRef&&this.videoPlayerRef.video,I=e===P.DR,C=I&&!this.hasVideoSessionStarted,w=!I&&!this.hasVideoSessionEnded&&this.hasVideoSessionStarted;if(_&&(C||w)){let C=-1;u&&b&&(C=u>b?u.getTime()-b.getTime():0);let w=-1;u&&this.videoVisibleTime&&(w=u>this.videoVisibleTime?u.getTime()-this.videoVisibleTime.getTime():0),I&&(this.videoSessionId=(0,m.Z)(i),this.playerId=this.playerId||(0,y.Z)());let O=this.getVideoResourceTiming(),L={averageVideoKbps:-1,autoplaying:r,detailedErrors:h,downloadedKiloBytes:"number"==typeof O?.decodedBodySize&&O.decodedBodySize/P.Fm||0,errorCode:c,errorName:p,errorReason:f,fatalError:E,isCellular:!1,nativeVideoDurationMs:_.duration*P.gJ||-1,numberOfStalls:v,numberOfSeeks:k,overallPausedDurationMs:g,overallBufferDurationMs:T,overallWatchedDurationMs:-1,rebufferRate:-1,playbackSessionId:this.videoSessionId,playbackStartTimestamp:D||-1,segments:[],sessionMark:e,screenPixelScale:window?.devicePixelRatio?window.devicePixelRatio:-1,startupPlayerWidth:_.clientWidth,startupPlayerHeight:_.clientHeight,startupTimeMs:C,startupLatencyMs:w,startupVariantKbps:-1,startupVariantWatchedDurationMs:-1,startupVariantWidth:_.videoWidth,startupVariantHeight:_.videoHeight,videoUrl:A,wasVideoPreloaded:"auto"===n};if(!I){this.updateWatchDurationForCurrentSegment(),this.updateStallDuration();let e=R.reduce((e,t)=>e+(t.watchedDurationMs||0),0);L.overallWatchedDurationMs=e,L.startupVariantWatchedDurationMs=e,L.segments=this.playbackPerformance.segments,0===e?(L.errorName="invalid_watch_duration",L.rebufferRate=-1):L.rebufferRate=T/e}(0,S.ZP)(L,!1,d,{playbackState:this.state.playbackState,...t});let{view:V,viewParameter:M,component:N,element:F,objectId:U,...j}=a;s({event_type:3606,event_data:{videoPerformanceData:L},view_type:V,view_parameter:M,component:N,element:F,object_id_str:U,aux_data:{...j,is_closeup_video:d,playback_session_id:this.videoSessionId,web_browser:o,web_browser_version:l}}),I?(this.hasVideoSessionStarted=!0,this.hasVideoSessionEnded=!1):this.resetPlaybackMetrics(),(0,S.tE)(I?"sessionStart":"sessionEnd",!1,d,{playbackState:this.state.playbackState,...t})}})}componentWillUnmount(){let{loop:e}=this.props;this.updatePauseDuration(),this.logPlaybackPerformance(P.$f,{initiator:"unmount",loop:e})}render(){let{aspectRatio:e,captions:t,controls:a,loop:r,loopOverride:s,objectFit:n,onDurationChange:o,onFullscreenChange:l,onLoadedChange:d,onControlsPlay:h,onPlayheadDown:p,onPlayheadUp:y,onSeek:m,onVolumeChange:S,playbackRate:P,playing:b,playsInline:T,poster:v,preload:k,src:D,volume:R}=this.props,{canPlayVideo:A,videoStartTime:_}=this.state;return(0,E.jsxs)(i.Fragment,{children:[(0,E.jsx)(c.Z,{unsafeCSS:f.P}),(0,E.jsx)(u.nk,{ref:this.setVideoPlayerRef,aspectRatio:e,autoplay:A&&b,captions:t,controls:a,loop:void 0===s?r:s,objectFit:n,onControlsPause:this.handleUserPause,onControlsPlay:h,onDurationChange:o,onEnded:this.handleEnded,onError:this.handleError,onFullscreenChange:l,onLoadedChange:d,onLoadStart:this.handleLoadStart,onPlay:()=>{},onPlayError:()=>{},onPlayheadDown:p,onPlayheadUp:y,onPlaying:this.handlePlaying,onReady:this.handleCanPlayVideo,onSeek:m,onSeeking:this.handleSeeking,onStalled:this.handleStalled,onTimeChange:this.handleTimeUpdate,onVolumeChange:S,onWaiting:this.handleStalled,playbackRate:P,playing:A&&b,playsInline:T,poster:v,preload:k,src:g(D),startTime:_||void 0,volume:R})]})}}let v=(0,i.memo)(function(e){let{logContextEvent:t}=(0,h.v)(),{country:a,isAuthenticated:i,isBot:r,isSocialBot:o,unauthId:l,userAgent:u}=(0,s.B)(),{browserName:c,browserVersion:y,isMobile:m}=u,{contextLogData:P={}}=e,{is_closeup_video:f=!1,view:b,viewParameter:g}=P,{appUI:{appInFocus:v}}=(0,d.I)(),{clearSeekTime:k}=(0,n.RC)(),D=(0,p.Z)();return(0,S.r$)({browserName:c,browserVersion:y,country:a,isAuthenticated:i,isBot:r,is_closeup_video:f,isMobile:m,isSocialBot:o,view:b,viewParameter:g}),(0,E.jsx)(T,{...e,appInFocus:v,clearSeekTime:k,logContextEvent:t,userId:D.id||l,webBrowser:c,webBrowserVersion:y})});function k(e,t,a){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let D=e=>{if(Array.isArray(e)){let t=e.find(e=>"video/m3u8"===e.type);return t?t.src:void 0}return/m3u8$/.test(e)?e:void 0};class R extends i.PureComponent{constructor(...e){super(...e),k(this,"componentDidUpdate",e=>{e.videoStartTime&&this.props.videoStartTime&&e.videoStartTime<this.props.videoStartTime&&this.videoPlayerRef?.video&&(this.videoPlayerRef.video.currentTime=this.props.videoStartTime)}),k(this,"isHslVideo",()=>{let e=D(this.props.src);return!this.props.preferMp4&&!(0,r.G6)(this.props.requestContext.userAgent.browserName)&&!!e}),k(this,"setVideoPlayerRef",e=>{e&&(this.videoPlayerRef=e)}),k(this,"handleOnEnded",({event:e})=>{let{loop:t,onLoop:a,onEnded:i}=this.props;i&&(i({event:e}),this.videoPlayerRef&&this.videoPlayerRef.video&&t&&(this.videoPlayerRef.video.play(),a&&a()))}),k(this,"handlePlaying",e=>{this.props.onPlaying&&this.props.onPlaying(e)})}render(){let{aspectRatio:e,appInFocus:t,backgroundColor:a,captions:i,toggleCaptions:r,clearSeekTime:s,contextLogData:n,controls:l,hlsConfig:d,isAutoPlay:u,loop:h,objectFit:c,onDurationChange:p,onEnded:y,onFullscreenChange:m,onLoadedChange:S,onControlsPause:P,onControlsPlay:f,onPlayheadDown:b,onPlayheadUp:g,onReady:T,onSeek:k,onTimeChange:R,onVolumeChange:A,playbackRate:_,playing:I,playsInline:C,poster:w,preferMp4:O,preload:L,seekTime:V,src:M,videoStartTime:N,visible:F,volume:U}=this.props,j=D(M),x={...d,startPosition:N||-1},H=!y&&h;return this.isHslVideo()&&j?(0,E.jsx)(o.Z,{appInFocus:t,aspectRatio:e,backgroundColor:a,captions:i,captionsEnabled:r,clearSeekTime:s,contextLogData:n,controls:l,hlsConfig:x,isAutoPlay:u,loop:h,loopOverride:H,objectFit:c,onControlsPause:P,onControlsPlay:f,onDurationChange:p,onEnded:this.handleOnEnded,onFullscreenChange:m,onLoadedChange:S,onPlay:()=>{},onPlayError:()=>{},onPlayheadDown:b,onPlayheadUp:g,onPlaying:this.handlePlaying,onReady:T,onSeek:k,onTimeChange:R,onVolumeChange:A,playbackRate:_,playing:I,playsInline:C,poster:w,preload:L,seekTime:V,setVideoRef:this.setVideoPlayerRef,src:j,visible:F,volume:U}):(0,E.jsx)(v,{aspectRatio:e,captions:i,captionsEnabled:r,clearSeekTime:s,contextLogData:n,controls:l,isAutoPlay:u,loop:h,loopOverride:H,objectFit:c,onControlsPause:P,onControlsPlay:f,onDurationChange:p,onEnded:this.handleOnEnded,onFullscreenChange:m,onLoadedChange:S,onPlay:()=>{},onPlayError:()=>{},onPlayheadDown:b,onPlayheadUp:g,onPlaying:this.handlePlaying,onReady:T,onSeek:k,onTimeChange:R,onVolumeChange:A,playbackRate:_,playing:I,playsInline:C,poster:w,preload:L,seekTime:V,setVideoRef:this.setVideoPlayerRef,src:O?M:j||M,videoStartTime:N,visible:F,volume:U})}}function A(e){let{appUI:{appInFocus:t}}=(0,d.I)(),{seekTime:a}=(0,n.Hx)(),{captionsEnabled:i}=(0,l.rG)(),{clearSeekTime:r}=(0,n.RC)(),o=(0,s.B)();return(0,E.jsx)(R,{...e,appInFocus:t,clearSeekTime:r,requestContext:o,seekTime:a,toggleCaptions:i})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/app-www-video-VideoWrapper-8f564aa9b1b1abb5.mjs.map