"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[50257,51699],{106398:(e,o,t)=>{var l;t.r(o),t.d(o,{default:()=>a});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FollowButton_pin",selections:[{alias:null,args:null,concreteType:"Domain",kind:"LinkedField",name:"linkDomain",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"officialUser",plural:!1,selections:l=[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nativeCreator",plural:!1,selections:l,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"originPinner",plural:!1,selections:l,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:l,storageKey:null}],type:"Pin",abstractKey:null};i.hash="cabaa35ed7d59dee006897bf3ef32e3d";let a=i},297134:(e,o,t)=>{t.d(o,{Z:()=>a});var l=t(883119),i=t(785893);let a=({text:e})=>(0,i.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},"data-test-id":"line-clamp-wrapper",fit:!0,overflow:"hidden",children:e})},877457:(e,o,t)=>{t.d(o,{g:()=>n,t:()=>a});var l=t(667294);let i=(0,l.createContext)(null),a=i.Provider,n=()=>(0,l.useContext)(i)},757017:(e,o,t)=>{t.d(o,{Z:()=>n});var l=t(188349),i=t(140017),a=t(339001);function n(){let e=(0,i.ZP)();return function(o,t){let i=new Date(o).getTime(),n=Date.now()-i,r=Math.floor(n/l.FS),s=Math.floor(n/l.UK),d=Math.floor(n/l.F4),c=Math.floor(n/l.VL),_=Math.floor(n/l.N9),u=Math.floor(n/l.N1),h=e.ngettext('{{ minutes }} minute ago', '{{ minutes }} minutes ago', r, ' - ', ' -- '),m=e.ngettext('{{ hours }} hour ago', '{{ hours }} hours ago', s, ' - ', ' -- '),g=e.ngettext('{{ days }} day ago', '{{ days }} days ago', d, ' - ', ' -- '),x=e.ngettext('{{ weeks }} week ago', '{{ weeks }} weeks ago', c, ' - ', ' -- '),f=e.ngettext('{{ months }} month ago', '{{ months }} months ago', _, 'useGetHumanizedTimeSince.monthsString', 'months since last update'),b=e.ngettext('{{ years }} year ago', '{{ years }} years ago', u, ' - ', ' -- '),p=e.ngettext('{{ minutes }}m', '{{ minutes }}m', r, 'minutes ago abbreviated', 'minutes ago abbreviated'),v=e.ngettext('{{ hours }}h', '{{ hours }}h', s, 'hours ago abbreviated', 'hours ago abbreviated'),y=e.ngettext('{{ days }}d', '{{ days }}d', d, 'days ago abbreviated', 'days ago abbreviated'),w=e.ngettext('{{ weeks }}w', '{{ weeks }}w', c, 'weeks ago abbreviated', 'weeks ago abbreviated'),P=e.ngettext('{{ months }}mo', '{{ months }}mo', _, 'months ago abbreviated', 'months ago abbreviated'),A=e.ngettext('{{ years }}y', '{{ years }}y', u, 'years ago abbreviated', 'years ago abbreviated');return u>0?(0,a.nk)(t?A:b,{years:u}).join(""):_>0?(0,a.nk)(t?P:f,{months:_}).join(""):c>0?(0,a.nk)(t?w:x,{weeks:c}).join(""):d>0?(0,a.nk)(t?y:g,{days:d}).join(""):s>0?(0,a.nk)(t?v:m,{hours:s}).join(""):r>0?(0,a.nk)(t?p:h,{minutes:r}).join(""):e._('Just now', ' - ', ' -- ')}}},72461:(e,o,t)=>{t.d(o,{Z:()=>d});var l=t(140017),i=t(427514);let a=(e,o)=>{let t=o||0,l=10**t,i=+(t?e*l:e).toFixed(8),a=Math.floor(i),n=i-a,r=n>.49999999&&n<.50000001?a%2==0?a:a+1:Math.round(i);return t?r/l:r},n=({maximumFractionDigits:e,minimumFractionDigits:o,style:t,currency:l})=>{let i={maximumFractionDigits:e,minimumFractionDigits:o};return t?{...i,style:t,..."currency"===t?{currency:l,currencyDisplay:"symbol"}:{}}:i},r=e=>{try{0..toLocaleString([e])}catch(e){return!1}return!0},s=(e,o)=>{if(o){let{minimumFractionDigits:t,maximumFractionDigits:l}=new Intl.NumberFormat(e,{style:"currency",currency:o}).resolvedOptions();if(void 0!==t&&void 0!==l)return{minimumFractionDigits:t,maximumFractionDigits:l}}return{minimumFractionDigits:2,maximumFractionDigits:2}};function d(){let e=(0,l.ZP)();return(o,t,l)=>{let d=0,c=0,_=l&&l.style||void 0,u=l&&l.shortform||!1,h=l&&l.uplimit||void 0,m=l&&l.currency||void 0,g=!!h&&t>=h,x=h&&g?h:t;if("currency"===_){let{minimumFractionDigits:e,maximumFractionDigits:t}=s(o,m);d=void 0===l||void 0===l.maximum_fraction_digits?t:l.maximum_fraction_digits,c=void 0===l||void 0===l.minimum_fraction_digits?e:l.minimum_fraction_digits}else d=void 0===l||void 0===l.maximum_fraction_digits?0:l.maximum_fraction_digits,c=void 0===l||void 0===l.minimum_fraction_digits?0:l.minimum_fraction_digits;if(u&&x>999&&(d=void 0===l||void 0===l.shortform_maximum_fraction_digits?2:l.shortform_maximum_fraction_digits,c=0),d<c)return String(x);let f=x,b="",p=[{"100M":{value:1e8,localeKey:e._('億', 'Abbreviation for one hundred millions. This abbreviation is only used in Chinese, Japanese and Korean.', 'Abbreviation for one hundred millions. This abbreviation is only used in Chinese, Japanese and Korean.')}},{"10k":{value:1e4,localeKey:e._('万', 'Abbreviation for ten thousand. This abbreviation is only used in Chinese, Japanese and Korean.', 'Abbreviation for ten thousand. This abbreviation is only used in Chinese, Japanese and Korean.')}}],v=[{b:{value:1e9,localeKey:e._('B', 'Abbreviation for one billion.', 'Abbreviation for one billion.')}},{m:{value:1e6,localeKey:e._('M', 'Abbreviation for one million.', 'Abbreviation for one million.')}},{k:{value:1e3,localeKey:e._('k', 'Abbreviation for one thousand.', 'Abbreviation for one thousand.')}}],y=/^zh|ja|ko/.test(o);if(u&&x>999){let e=y?p:v;for(let o=0;o<e.length;o+=1){let t=Object.keys(e[o])[0],l=e[o][t].value;if(x>=l){f=a(x/l*Math.pow(10,d))/Math.pow(10,d),b=e[o][t].localeKey;break}}}if(null==f)return"";let w=f.toLocaleString([r(o)&&"ar-SA"!==o?o:"en-US"],n({maximumFractionDigits:d,minimumFractionDigits:c,currency:m,style:_}));return b&&b.length>0?(0,i.Z)(e._('{{formattedNumber}}{{numberSuffix}}', 'i18n.usePrettyNumberFormat.prettyNumberFormat', 'String used to concatenate formatted number and localized number suffix'),{formattedNumber:w,numberSuffix:b})+(g?"+":""):w+(g?"+":"")}}},317540:(e,o,t)=>{t.d(o,{Z:()=>l});let l={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},241552:(e,o,t)=>{t.d(o,{l:()=>a,r:()=>n});var l=t(667294);let i=(0,l.createContext)(null),a=()=>(0,l.useContext)(i),n=i.Provider},48481:(e,o,t)=>{t.d(o,{Z:()=>a});var l=t(877457),i=t(241552);let a=()=>{let e=(0,l.g)(),o=(0,i.l)();return t=>{let{mobileOptions:l,desktopOptions:i,reason:a,attributionLabel:n,pinId:r}=t;e?e.showDesktopSignupModal({signupFlow:i?.modalType==="login"?{type:"login"}:{type:"signup"},reason:a,attributionLabel:n,...i?.modalOptions}):o&&o.showMobileSignupModal({reason:a,attributionLabel:n,headingType:l?.headingType??"none",pinId:r})}}},55202:(e,o,t)=>{t.d(o,{U:()=>n,Z:()=>r});var l=t(317540),i=t(785893);let a=()=>{},n=e=>{e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()};function r({allowClickAndDrag:e,allowEsc:o,allowMediaPlay:t,allowScroll:r,children:s}){let d=e=>{o&&e.keyCode===l.Z.ESCAPE||n(e)};return(0,i.jsx)("div",{onAbort:n,onAnimationEnd:n,onAnimationIteration:n,onAnimationStart:n,onBlur:a,onCanPlay:t?a:n,onCanPlayThrough:n,onChange:n,onClick:e?a:n,onCompositionEnd:n,onCompositionStart:n,onCompositionUpdate:n,onContextMenu:n,onCopy:n,onCut:n,onDoubleClick:n,onDurationChange:n,onEmptied:n,onEncrypted:n,onEnded:n,onError:n,onFocus:a,onInput:n,onInvalid:n,onKeyDown:d,onKeyPress:d,onKeyUp:d,onLoad:n,onLoadedData:n,onLoadedMetadata:n,onLoadStart:n,onMouseDown:n,onMouseEnter:n,onMouseLeave:n,onMouseMove:e?a:n,onMouseOut:n,onMouseOver:n,onMouseUp:e?a:n,onPaste:n,onPause:n,onPlay:n,onPlaying:n,onProgress:n,onRateChange:n,onScroll:r?a:n,onSeeked:n,onSeeking:n,onSelect:n,onStalled:n,onSubmit:n,onSuspend:n,onTimeUpdate:n,onTouchCancel:n,onTouchEnd:e?a:n,onTouchMove:e?a:n,onTouchStart:e?a:n,onTransitionEnd:n,onVolumeChange:n,onWaiting:n,onWheel:n,children:s})}},623409:(e,o,t)=>{t.d(o,{Z:()=>s});var l=t(667294),i=t(616550),a=t(96157),n=t(217058);let r=e=>(0,a.L6)(e)?"pin":(0,a.am)(e)?"board":(0,a.Xn)(e)?"login":(0,a.C$)(e)?"home":(0,a.cD)(e)?"profile":(0,a.dr)(e)?"ideas":(0,a.gT)(e)?"ideas-root":(0,a.tZ)(e)?"videos":(0,a.Q0)(e)?"videos-category":(0,a.$Y)(e)?"article":(0,a.E0)(e)?"shopping-spotlight":(0,a.Zz)(e)?"today":(0,a.j8)(e)?"unauth-profile":(0,a.f1)(e)?"shopping-root":(0,a.OX)(e)?"shopping-category":"other";function s(){let e=(0,i.TH)();return(0,l.useCallback)(({action:o,item:t,within:l})=>{let i=r(e);(0,n.My)(`logged_out_product.interaction.${i}.${o}`,{item:t||"none",within:l||"none"})},[e])}},316667:(e,o,t)=>{t.d(o,{U:()=>a,Z:()=>n});var l=t(883119),i=t(785893);let a=", ";function n(){return(0,i.jsx)(l.xu,{display:"visuallyHidden",children:a})}},213503:(e,o,t)=>{t.d(o,{Z:()=>A}),t(167912);var l,i=t(883119),a=t(587703),n=t(207012),r=t(140017),s=t(340523),d=t(48481),c=t(217058),_=t(623409),u=t(13848),h=t(554786),m=t(494125),g=t(149722),x=t(735728),f=t(358589),b=t(386008),p=t(155087),v=t(155117),y=t(785893);let w=({children:e,pulsar:o,testId:t})=>o.show?(0,y.jsx)(i.xu,{"data-test-id":t,position:"relative",children:(0,y.jsxs)(i.iP,{onTap:o.onClick,tapStyle:"none",children:[(0,y.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-75px"}},marginTop:-5,position:"absolute",children:e}),(0,y.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-83px"}},marginTop:-12,position:"absolute",children:(0,y.jsx)(i.o3,{})})]})}):(0,y.jsx)(i.xu,{"data-test-id":t,children:e}),P=void 0!==l?l:l=t(106398);function A({auxData:e,disabled:o,disableLog:t,followEventType:l,id:A,inline:j,invertColors:z,isFollowed:C,isIdeaPin:S,isLegoEnabled:k,isSecondaryButton:Z,isUserFollowButton:T,isUserMe:I,onFollow:E,onUnfollow:F,pinKey:D,shouldUseLegoColors:M,showPulsar:B,size:L,textType:U="FollowFollowing",unfollowEventType:H,viewParameter:N,viewType:O,clientTrackingParams:K}){let G;let R=(0,r.ZP)(),W=(0,h.HG)(),{showToast:$}=(0,u.F9)(),J=(0,_.Z)(),V=(0,a.Z)(),X=(0,d.Z)(),{checkExperiment:q}=(0,s.F)(),Y=(0,f.Z)(),Q=(0,g.Z)(),ee=Q&&Q.isAuth,{unauthFollowUserId:eo,setUnauthFollowUserId:et}=(0,v.f)(),el=(0,b.mN)()(A),ei=el&&{imageMediumUrl:el.image_medium_url,username:el.username},ea=(0,n.Z)(P,D),en=ea?.linkDomain,er=ea?.nativeCreator,es=ea?.originPinner,ed=ea?.pinner;G=er||(en?en.officialUser:es||ed);let ec=ei??G;(0,m.Z)(()=>{!W&&ee&&eo&&A&&eo===A&&E(A)});let e_=Y({fn:()=>{ee?C?(F(A),t||V({event_type:H,view_type:O,view_parameter:N,object_id_str:A,aux_data:e,clientTrackingParams:K})):(E(A),T&&$(({hideToast:e})=>{let o=ec?.username?`/${ec.username}/`:"";return(0,y.jsx)(p.Z,{handleHide:e,href:o,imageUrl:ec?.imageMediumUrl||"",text:(0,y.jsx)(i.xv,{lineClamp:4,children:R._('Following! Their created Pins will show up in your home feed!', 'followButton.follow.informationalToastText', 'Text explaining that a creator\'s Pins will show up in home feed after follow')}),userId:A})}),t||V({event_type:l,view_type:O,view_parameter:N,object_id_str:A,aux_data:e,clientTrackingParams:K})):((0,c.NC)(C?"press_profile_unfollow":"press_profile_follow"),J({action:"click",item:C?"unfollow-button":"follow-button"}),X({reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP",attributionLabel:S?"click_idea_pin_follow":"click_follow",desktopOptions:{modalType:"signup",modalOptions:W&&q("pcons_dweb_contextual_follow_modal").anyEnabled?{source:"followButton",container:"follow"}:void 0},mobileOptions:!W&&q("pcons_mweb_contextual_follow_modal").anyEnabled?{headingType:"follow"}:void 0}),W||et(A??""),(0,c.NC)("clickthrough"))},modalHeader:(0,x.N4)({i18n:R,toFollow:!C})}),eu=!C&&!!B,eh=()=>{if(I)return R._('That\'s you!', 'Follow button is disabled because this is you', 'Follow button is disabled because this is you');if("AddRemove"===U)return C?R._('Remove', 'unfollowButton.removeText', 'Follow button label - followed state, so user can click to "remove" the follow'):R._('Add', 'followButton.addText', 'Follow button label - unfollowed state, so user can click to "add" the follow');let e="FollowUnfollow"===U?R._('Unfollow', 'unfollowButton.unfollowText', 'Follow button label - followed state, so user can click to "unfollow" the follow'):R._('Following', 'Follow button label - followed state', 'Follow button label - followed state');return C?e:R._('Follow', 'Follow button label - unfollowed state', 'Follow button label - unfollowed state')};return(0,y.jsx)(w,{pulsar:eu?{show:!0,onClick:e_}:{show:!1},testId:I||C?"board-unfollow-button":"board-follow-button",children:(0,y.jsx)(i.zx,{accessibilityLabel:eh(),color:M||"AddRemove"===U||!k&&Z||z?"gray":"red",disabled:I||o,fullWidth:j,onClick:eu?void 0:({event:o})=>{o.preventDefault(),o.stopPropagation(),t||V({event_type:101,component:13672,element:11951,object_id_str:A,view_type:O,view_parameter:N,aux_data:e,clientTrackingParams:K}),e_()},selected:C||!1,size:L,text:eh()})})}},761203:(e,o,t)=>{t.d(o,{bn:()=>r,fJ:()=>d,gC:()=>s});var l=t(545007),i=t(342513),a=t(785893);let{Provider:n,useHook:r}=(0,i.Z)("Boards");function s(){let e=r();return o=>e[o]}function d({children:e}){let o=(0,l.v9)(({boards:e})=>e,l.wU);return(0,a.jsx)(n,{value:o,children:e})}},155117:(e,o,t)=>{t.d(o,{f:()=>r,w:()=>s});var l=t(667294),i=t(342513),a=t(785893);let{Provider:n,useHook:r}=(0,i.Z)("Session");function s({children:e}){let[o,t]=(0,l.useState)(void 0),i=(0,l.useCallback)(()=>t(void 0),[]),r=(0,l.useMemo)(()=>({unauthFollowUserId:o,setUnauthFollowUserId:t,removeUnauthFollowUserId:i}),[o,i]);return(0,a.jsx)(n,{value:r,children:e})}},583130:(e,o,t)=>{t.d(o,{Z:()=>j});var l=t(667294),i=t(883119),a=t(587703),n=t(205841),r=t(757017),s=t(140017),d=t(72461),c=t(339001),_=t(5859),u=t(217058),h=t(316667),m=t(274262),g=t(554786),x=t(464593),f=t(724009),b=t(168477),p=t(304431),v=t(572345),y=t(213503),w=t(939809),P=t(785893);let A=({children:e})=>(0,g.HG)()?(0,P.jsx)(i.X6,{accessibilityLevel:2,lineClamp:1,size:"400",children:e}):(0,P.jsx)(i.xv,{lineClamp:1,weight:"bold",children:e});function j({archivedDate:e,boardId:o,boardUrl:t,canEdit:j,containerBackgroundColor:z,coverPhoto:C,followedByMe:S,fullSizeDrawer:k,sensitivityScreen:Z,handleInviteResponse:T,hideMeta:I,id:E,invite:F,imagesLego:D=[],isBoardInviteAccepted:M,isActive:B,isAuthenticated:L,isCollaborative:U,isCollaborator:H,isCuratorAttributionVisible:N,isNoBoardTitleStyle:O=!1,isOwner:K,isProtected:G,isSecret:R,isSectionCountVisible:W=!1,isTemporarilyDisabled:$,lastModifiedDate:J,layout:V,locale:X,name:q,numCols:Y,onEditClick:Q,onFollow:ee,onUnfollow:eo,owner:et,pinCount:el=0,sectionCount:ei,showFollowButton:ea,viewParameter:en,viewType:er,slotIndex:es}){let ed=(0,s.ZP)(),ec=(0,r.Z)(),e_=(0,d.Z)(),eu=(0,a.Z)(),eh=(0,g.HG)(),{isRTL:em}=(0,_.B)(),eg=eh&&L,ex="square"===V?b.M0:b.z9,ef=e=>{L||(0,u.NC)("press_follow_board"),ee&&ee(e)},eb=e=>{L||(0,u.NC)("press_unfollow_board"),eo&&eo(e)},ep=D.map(e=>({url:e.url,name:q})),ev=!!et&&!j&&ea,ey=et?.is_verified_merchant,ew=et?.verified_identity?.verified,eP=ey||ew,eA=N||U,ej=!K&&!H&&!!Z?.show_warning,ez={board_id:E,reason:Z?.reason};return(0,l.useEffect)(()=>{ej&&eu({event_type:13,component:13861,view_type:215,aux_data:ez})},[]),(0,P.jsx)(w.fS,{auxData:{board_id:E,board_pin_count:el??0,board_section_count:ei??0},impressionData:{imageURL:C?.url},loggingId:E,slotIndex:es||0,viewParameter:en,viewType:er,children:({impressionTrackerRef:a})=>(0,P.jsxs)(i.xu,{ref:a,"data-test-id":`boardCard-${q}`,height:ev?"max(calc(25vh + 10px), 210px)":"100%",position:"relative",width:eg?ex:"100%",children:[(0,P.jsx)(p.Z,{canEdit:j,containerBackgroundColor:z,coverPhoto:C,fullSize:k,images:ep,isActive:B,isProtected:G,isSecret:R,isTemporarilyDisabled:$,layout:V,onEditClick:Q,renderAsImage:!0,showSensitivityScreen:ej}),!I&&(0,P.jsx)(l.Fragment,{children:F&&!$?(0,P.jsxs)(l.Fragment,{children:[(0,P.jsxs)(i.xu,{alignItems:"start","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",padding:2,children:[(0,P.jsxs)(i.xu,{width:"100%",children:[(0,P.jsx)(i.rU,{href:t??"",children:(0,P.jsx)(i.xu,{marginBottom:1,marginTop:0,children:(0,P.jsx)(A,{children:q})})}),M?(0,P.jsx)(i.xv,{lineClamp:1,size:"200",children:ed._('You\u2019ve joined', 'boardRep.invite.invitationAcceptedText', 'Text shown after accepting collaborator board invitations')}):(0,P.jsx)(i.xv,{size:"200",children:function(e,o){let{full_name:t,username:l}=e,a=(0,P.jsx)(i.rU,{display:"inlineBlock",href:`/${l}`,underline:"hover",children:t},"linkToUser");return(0,c.nk)(o._('{{ linkToUser }} invited you to join this board', 'boardRep.invite.invitationText', 'Indicating that another user invited the viewer to this board'),{linkToUser:a})}(F.invited_by_user,ed)})]}),(0,P.jsx)(f.Z,{boardId:o})]}),M?(0,P.jsx)(i.xu,{direction:"row",display:"flex",paddingX:2,children:(0,P.jsx)(i.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,P.jsx)(i.ZP,{fullWidth:!0,href:t??"",size:"lg",text:ed._('See board', 'boardRep.invite.seeBoardButton', 'Button text to see board after accepting collaborator invite')})})}):(0,P.jsxs)(i.kC,{direction:"row",flex:"grow",justifyContent:"start",wrap:!0,children:[(0,P.jsx)(i.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,P.jsx)(i.zx,{fullWidth:!0,onClick:()=>{T?.(!1)},size:"lg",text:ed._('Decline', 'boardRep.invite.declineButton', 'Button text to decline board collaborator invite or request')})}),(0,P.jsx)(i.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,P.jsx)(i.zx,{color:"red",fullWidth:!0,onClick:()=>{T?.(!0)},size:"lg",text:ed._('Accept', 'boardRep.invite.acceptButton', 'Button text to accept board collaborator invite or request')})})]})]}):(0,P.jsxs)(i.xu,{height:eg?void 0:b.s0,marginTop:eg?0:1,paddingX:2,paddingY:eg?2:0,children:[O&&(0,P.jsxs)(i.xu,{alignContent:"center",alignItems:"center",display:"flex",justifyContent:"start",marginEnd:2,paddingY:1,children:[(0,P.jsx)(i.xu,{marginEnd:2,marginStart:1,children:(0,P.jsx)(n.qE,{accessibilityLabel:ed._('Avatar', 'User`s Avatar', 'User`s Avatar'),name:et?.full_name??"",size:"xs",src:et?.image_medium_url??""})}),(0,P.jsxs)(i.kC,{direction:"column",children:[(0,P.jsxs)(i.xu,{alignItems:"center","data-test-id":"board-card-title",display:"flex",children:[(0,P.jsxs)(i.xv,{inline:!0,lineClamp:1,size:"100",children:[(0,P.jsx)(i.xv,{inline:!0,size:"100",children:ed._('By', 'boardRep.boardCard.userAttribution', 'User attribution for a board rep')})," ",(0,P.jsx)(i.xv,{inline:!0,size:"100",weight:"bold",children:et?.full_name})]}),eP&&(0,P.jsx)(i.xu,{marginStart:1,children:(0,P.jsx)(v.Z,{isVerifiedIdentity:ew,isVerifiedMerchant:ey,size:"xs"})})]}),(0,P.jsxs)(i.xu,{alignItems:eh?"center":"start",direction:"row",display:"flex",marginTop:1,children:[(0,P.jsxs)(i.xv,{color:"subtle",lineClamp:1,size:"100",children:[(0,P.jsx)(h.Z,{}),(0,c.nk)(ed.ngettext('{{ count }} Pin', '{{ count }} Pins', el, 'profile.ProfilePage.board.BoardCard.pinsCount', 'Show how many Pins there are in the board card. count:number of Pins'),{count:e_(X,el,{shortform:!0,shortform_maximum_fraction_digits:1})})]}),(0,P.jsx)(i.xv,{color:"subtle",size:"100",children:(0,P.jsx)(m.Z,{ariaHidden:!0,size:"100"})}),!e&&(0,P.jsx)(i.xu,{display:"inlineBlock",marginEnd:em?2:0,children:(0,P.jsxs)(i.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,P.jsx)(h.Z,{}),ec(J,!0)]})})]})]})]}),!O&&(0,P.jsxs)(l.Fragment,{children:[(0,P.jsxs)(i.xu,{alignItems:"center","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,P.jsx)(A,{children:q}),eA&&!$&&(0,P.jsx)(f.Z,{boardId:o})]}),N&&(0,P.jsx)(x.Z,{boardId:o}),(0,P.jsxs)(i.xu,{alignItems:eh?"center":"start",direction:"row",display:"flex",marginTop:1,children:[(0,P.jsxs)(i.xv,{lineClamp:1,size:"100",children:[(0,P.jsx)(h.Z,{}),(0,c.nk)(ed.ngettext('{{ count }} Pin', '{{ count }} Pins', el, 'profile.ProfilePage.board.BoardCard.pinsCount', 'Show how many Pins there are in the board card. count:number of Pins'),{count:e_(X,el,{shortform:!0,shortform_maximum_fraction_digits:1})})]}),W&&!!ei&&(0,P.jsxs)(i.xv,{size:"100",children:[(0,P.jsx)(m.Z,{ariaHidden:!0,size:"100"}),(0,P.jsx)(h.Z,{}),(0,c.nk)(ed.ngettext('{{ count }} section', '{{ count }} sections', ei, 'profile.ProfilePage.board.BoardCard.sectionsCount', 'Show how many sections there are in the board card. count:number of sections'),{count:ei})]}),!N&&(0,P.jsx)(i.xu,{display:eg?"flex":"inlineBlock",marginEnd:em?2:0,marginStart:2,children:(0,P.jsxs)(i.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,P.jsx)(h.Z,{}),ec(J,!0)]})})]}),e&&!eh&&(0,P.jsxs)(i.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,P.jsx)(h.Z,{}),ed._('Archived', 'profile.ProfilePage.BoardCard.ArchivedText', 'label for archived boards')]}),ev&&(0,P.jsx)(i.xu,{column:2===Y?12:void 0,flex:"none",marginTop:2===Y?3:void 0,children:(0,P.jsx)(y.Z,{disabled:et?.blocked_by_me,followEventType:26,id:E,isFollowed:S,onFollow:ef,onUnfollow:eb,pinKey:null,shouldUseLegoColors:!0,size:"md",unfollowEventType:27,viewParameter:en,viewType:er})})]})]})})]})})}},677068:(e,o,t)=>{t.d(o,{Z:()=>b});var l=t(545007),i=t(883119),a=t(587703),n=t(5859),r=t(217058),s=t(623409),d=t(554786),c=t(149722),_=t(583130),u=t(680902),h=t(265326),m=t(321083),g=t(761203),x=t(785893);let f=["thumbnail","imageOnly"];function b({board:e,boardId:o,containerBackgroundColor:t,forwardedRef:b,fullSize:p,isCuratorAttributionSearchExp:v=!1,isNoBoardTitleStyle:y=!1,isSectionCountVisible:w=!1,showFollowButton:P=!0,showPinCount:A=!0,slotIndex:j,type:z,viewParameter:C,viewType:S}){let k=(0,c.Z)(),Z=k&&k.isAuth,T=(0,l.I0)(),{locale:I}=(0,n.B)(),E=(0,s.Z)(),F=(0,g.gC)()(o),D=e??F,M=(0,u.Z)(),B=(0,a.Z)(),L=(0,d.HG)(),U=k.isAuth?k.id:"";if(!D)return null;let{owner:H}=D,N=H?.id===U,O=[H,...D.collaborating_users||[]].filter(Boolean).filter(({id:e})=>e===U).length>0;if("secret"===D.privacy&&!O)return null;let K="grid"===z||"thumbnail"===z?2:4,G=M(D,K),R={isCustom:D.has_custom_cover,url:G,position:(0,h.Bw)(D.cover_pin)},W=(0,h.Jx)(D,G).map(({url:e})=>({name:(0,h.po)(e),url:e})),$=[44,49].includes(C),J=()=>49===C?N?3106:3107:C,V=(0,x.jsx)(_.Z,{archivedDate:D.archived_by_me_at??void 0,boardId:o,canEdit:!!D.access&&D.access.includes("write"),containerBackgroundColor:t,coverPhoto:G?R:null,followedByMe:D.followed_by_me,fullSizeDrawer:p,hideMeta:f.includes(z),id:D.id,imagesLego:W,isAuthenticated:Z,isCollaborative:D.is_collaborative,isCollaborator:O,isCuratorAttributionVisible:v,isNoBoardTitleStyle:y,isOwner:N,isProtected:"protected"===D.privacy,isSecret:"secret"===D.privacy,isSectionCountVisible:w,isTemporarilyDisabled:!!D.is_temporarily_disabled,lastModifiedDate:D.board_order_modified_at,layout:L?"square":void 0,locale:I,name:D.name??"",numCols:K,onFollow:e=>T((0,m.Z)(e,B)),onUnfollow:e=>T((0,m.f)(e,B)),owner:H,pinCount:A&&D.pin_count?D.pin_count:void 0,sectionCount:D.section_count??0,sensitivityScreen:D.sensitivity_screen,showFollowButton:P,slotIndex:j,viewerId:U,viewParameter:C,viewType:S});return!f.includes(z)&&D.url?(0,x.jsx)(i.Tg,{href:Z?D.url:D.url.toLowerCase(),onTap:()=>{$&&B({aux_data:{board_id:D.id,board_pin_count:D.pin_count??0,board_section_count:D.section_count??0},component:1,element:36,event_type:102,view_parameter:J()}),Z||((0,r.NC)("click_go_to_board"),E({action:"click",item:"board-card"}))},rounding:2,tapStyle:"compress",children:(0,x.jsx)(i.xu,{ref:b,paddingY:L?2:3,children:V})}):V}},464593:(e,o,t)=>{t.d(o,{Z:()=>u});var l=t(883119),i=t(297134),a=t(140017),n=t(72461),r=t(339001),s=t(5859),d=t(761203),c=t(785893);let _={xs:{icon:12,text:"100",height:15},sm:{icon:16,text:"200",height:17},md:{icon:20,text:"300",height:18},lg:{icon:24,text:"400",height:23}};function u({boardId:e,size:o="xs"}){let t=(0,a.ZP)(),u=(0,d.gC)()(e),{locale:h}=(0,s.B)(),m=(0,n.Z)();if(!u)return null;let{owner:g,collaborating_users:x}=u;if(!g)return null;let{full_name:f,is_verified_merchant:b,verified_identity:p}=g,v=!!p?.verified;return(0,c.jsxs)(l.kC,{alignItems:"center",justifyContent:"start",maxHeight:_[o].height,children:[(0,c.jsx)(l.xv,{lineClamp:1,size:_[o].text,children:(0,c.jsx)(i.Z,{text:f})}),(b||v)&&(0,c.jsx)(l.xu,{flex:"none",marginStart:1,children:b?(0,c.jsx)(l.JO,{accessibilityLabel:t._('Merchant verification badge icon', 'merchantVerification.badge.icon', 'Badge indicating that a merchant is verified'),color:"shopping",icon:"workflow-status-ok",size:_[o].icon}):(0,c.jsx)(l.JO,{accessibilityLabel:t._('Identity verification badge icon', 'identityVerification.badge.icon', 'Badge indicating that user is verified'),color:"error",icon:"check-circle",size:_[o].icon})}),x&&x.length>0&&(0,c.jsx)(l.xu,{flex:"none",marginStart:1,children:(0,c.jsxs)(l.xv,{size:_[o].text,children:["+"," ",(0,r.nk)(t.ngettext('{{collaboratorsCount}} other', '{{collaboratorsCount}} others', x.length, 'legoBoardPageHeader.collaboratorNames.others', 'number of additional collaborators not listed. collaboratorsCount:number of collaborators'),{collaboratorsCount:m(h,x.length,{shortform:!0,shortform_maximum_fraction_digits:0})})]})})]})}},724009:(e,o,t)=>{t.d(o,{Z:()=>_});var l=t(883119),i=t(140017),a=t(316667),n=t(554786),r=t(667294),s=t(149722),d=t(761203),c=t(785893);function _({boardId:e}){let o=(0,i.ZP)(),t=(0,s.Z)(),_=(0,n.HG)(),u=(0,d.gC)()(e),h=function(e){let o=(0,s.Z)(),t=(0,n.HG)()&&o&&o.isAuth,l=(0,d.gC)()(e);return(0,r.useMemo)(()=>{if(!l)return[];let{owner:e,collaborating_users:i}=l,[a,n,r]=[new Set,new Set,new Set];for(let t of[...e?[e]:[],...i||[]])t.id===e?.id?a.add(t):t.id===o.id?n.add(t):r.add(t);return[...a,...n,...r].map(e=>({name:(t?e.full_name:e.username)??"",src:"https://s.pinimg.com/images/user/default_75.png"===e.image_medium_url?"":e.image_medium_url??""}))},[t,l,o])}(e);if(!u)return null;let{collaborator_count:m=0}=u,g=_&&t&&t.isAuth?24:16,x=g/3*((h.length>2?3:h.length)*2+1),f=m>=h.length?m-h.length:0,b=[...h,...Array(f=f>99?100:f).fill({name:"",src:""})];return(0,c.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{marginTop:-1}},height:g,marginStart:2,minWidth:x,width:x,children:(0,c.jsx)(l.HE,{accessibilityLabel:a.U+(o._('Board has collaborators', 'boardCard.avatarGroup.collaborators', 'Board description: title, number of pins, date, and it has collaborators or not.')),collaborators:b})})}},668649:(e,o,t)=>{t.d(o,{Z:()=>r});var l=t(883119),i=t(785893);function a({customCover:e,height:o,imgPos:t,imgUrl:a,width:n}){let r=o/n,s="center center";if(e&&t){let e=1;e=t.height/t.width>r?n/t.width:o/t.height;let l=t.x*e,i=t.y*e;s=`-${l}px -${i}px`}let d={backgroundImage:`url(${a})`,backgroundPosition:s,backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100%",backgroundColor:"#EFEFEF",position:"relative"};return(0,i.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{height:o,width:n}},"data-test-id":"cover-image-box",children:(0,i.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:d},"data-test-id":"cover-image",children:(0,i.jsx)("div",{className:"imageWash",style:{position:"absolute"}})})})}function n({alt:e,color:o,height:t,imgUrl:a,width:n}){return(0,i.jsx)(l.zd,{height:t,width:n,children:(0,i.jsx)(l.Ee,{alt:e||"",color:o,fit:"cover",naturalHeight:t,naturalWidth:n,src:a})})}function r(e){let{renderAsImage:o}=e;return o?(0,i.jsx)(n,{...e}):(0,i.jsx)(a,{...e})}},304431:(e,o,t)=>{t.d(o,{Z:()=>h});var l=t(667294),i=t(883119),a=t(140017),n=t(5859),r=t(554786),s=t(168477),d=t(668649),c=t(910777),_=t(785893);let u="100%";function h(e){let o=(0,a.ZP)(),{canEdit:t,containerBackgroundColor:h="white",coverPhoto:m,fullSize:g,images:x,isActive:f,isProtected:b,isSecret:p,isTemporarilyDisabled:v,layout:y,onEditClick:w,renderAsImage:P,showSensitivityScreen:A}=e,j=(0,r.HG)(),z=(0,r.Wb)(),{isRTL:C,isAuthenticated:S}=(0,n.B)(),k=(0,l.useRef)(null),[Z,T]=(0,l.useState)({width:0,height:0});(0,l.useEffect)(()=>{if(z&&k.current){let{offsetWidth:e,offsetHeight:o}=k.current;T({width:e,height:o})}},[z]);let I=x[0],E=!m&&x[0]?.name||o._('Cover image', 'DrawerImageGroup', 'Alt text for the main image of a board'),F=[,,].fill(),D=new i.Ry(1),M="square"===y?s.M0:s.z9,B="square"===y?s.FP:s.FC,L=I?.url?(0,_.jsx)(i.Ee,{alt:E,color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:I.url}):(0,_.jsx)(i.xu,{color:"secondary",height:"100%",width:"100%"}),U=v||A?{filter:"blur(20px)"}:{};return(0,_.jsx)(i.zd,{height:g?"100%":void 0,rounding:4,wash:f,width:"100%",children:(0,_.jsxs)(i.kC,{alignItems:"stretch",direction:"row",height:j?B:"100%",justifyContent:"start",children:[(0,_.jsx)(i.sg,{span:8,children:(0,_.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:U},height:g?"100%":void 0,position:"relative",children:(0,_.jsx)(i.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:u}},overflow:"hidden",width:"100%",children:(0,_.jsxs)(i.xu,{ref:k,bottom:!0,dangerouslySetInlineStyle:{__style:{borderColor:h,borderStyle:"solid",borderWidth:"1px 0 1px 1px"}},"data-test-id":"drawer-image-group-first-image-container",left:!0,overflow:"hidden",position:"absolute",right:!0,top:!0,children:[(b||p)&&(0,_.jsx)(i.xu,{left:!C,margin:2,position:"absolute",right:C,top:!0,zIndex:D,children:(0,_.jsx)(c.Z,{backgroundColor:"default",iconColor:"default",privacy:p?"secret":"protected",size:j&&S?32:24})}),m?.url?(0,_.jsx)(d.Z,{customCover:m.isCustom,height:z?Z.height:B,imgPos:m.position||{width:0,height:0,x:0,y:0},imgUrl:m.url??"",renderAsImage:P,width:z?Z.width:Math.floor(M/3*2)}):L]})})})}),(0,_.jsx)(i.sg,{span:4,children:(0,_.jsxs)(i.xu,{dangerouslySetInlineStyle:{__style:U},height:"100%",children:[t&&f&&(0,_.jsx)(i.xu,{bottom:!0,left:C,margin:2,position:"absolute",right:!C,zIndex:D,children:(0,_.jsx)(i.hU,{accessibilityLabel:o._('Edit', 'DrawerImageGroup.edit', 'Icon indicating that a board is editable'),bgColor:"white",icon:"edit",iconColor:"darkGray",onClick:({event:e})=>w?.(e),size:"sm"})}),F.map((e,o)=>{let t=m?x[o]:x[o+1];return(0,_.jsx)(i.xu,{height:g?"50%":void 0,position:"relative",children:(0,_.jsx)(i.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:u}},overflow:"hidden",width:"100%",children:(0,_.jsx)(i.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{borderColor:h,borderStyle:"solid",borderWidth:0===o?1:"0 1px 1px 1px"}},left:!0,overflow:"hidden",position:"absolute",right:!0,top:!0,children:t?.url?(0,_.jsx)(i.Ee,{alt:"",color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:t.url}):(0,_.jsx)(i.xu,{color:"secondary",height:"100%",width:"100%"})})})},o)})]})}),(v||A)&&(0,_.jsx)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{background:"rgba(0,0,0,0.5)"}},display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:!0,width:"100%",children:v?(0,_.jsx)(i.xu,{maxWidth:188,children:(0,_.jsx)(i.xv,{align:"center",color:"light",size:"200",weight:"bold",children:o._('This board is currently unavailable', 'drawerImageGroup.unavailableBoard.heading', 'Warning text for a board that is unavailable')})}):(0,_.jsx)(i.X6,{align:"center",color:"light",size:"400",children:o._('This board may contain sensitive content', 'drawerImageGroup.sensitivityScreen.heading', 'Warning text for a board that may have sensitive content')})})]})})}},910777:(e,o,t)=>{t.d(o,{Z:()=>n});var l=t(883119),i=t(140017),a=t(785893);function n({backgroundColor:e="darkGray",iconColor:o="inverse",iconSize:t,privacy:n,size:r=20}){let s=(0,i.ZP)();return(0,a.jsx)(l.xu,{alignItems:"center",color:e,direction:"column",display:"flex",height:r,justifyContent:"center",rounding:"circle",width:r,children:(0,a.jsx)(l.JO,{accessibilityLabel:s._('Secret board icon', 'Icon indicating that a board is secret', 'Icon indicating that a board is secret'),color:o,icon:"secret"===n?"lock":"security",size:t??r/2})})}},680902:(e,o,t)=>{t.d(o,{Z:()=>a});var l=t(554786),i=t(149722);function a(){let e=(0,l.HG)(),o=(0,i.Z)(),t=o&&o.isAuth;return e&&t?e=>{let o=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,t=e.cover_pin?.image_url??o,l=e.images&&e.images["170x"]&&e.images["170x"].length?e.images["170x"][0].url:"";return t||l}:(e,o)=>{let t=e.image_cover_hd_url||e.image_cover_url||"";if(!t)return"";let l=e.cover_images&&e.cover_images["400x300"]?e.cover_images["400x300"].url:void 0,i=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,a=e.cover_images&&e.cover_images["216x146"]?e.cover_images["216x146"].url:void 0,n=l??i??a??"",r=e.image_cover_url||"";return t||(o&&o>2&&n?n:"")||r}}},265326:(e,o,t)=>{t.d(o,{Bw:()=>r,Jx:()=>n,po:()=>l});let l=(e="")=>(e??"").substring((e??"").lastIndexOf("/")+1),i=e=>({dominant_color:"#FFFFFF",height:1,url:e,width:1}),a=e=>{if(!e)return()=>!0;let o=l(e);return e=>"string"==typeof e?l(e)!==o:l(e.url??"")!==o},n=(e,o)=>e.images&&e.images["170x"]?e.images["170x"].filter(a(o)):e.pin_thumbnail_urls?e.pin_thumbnail_urls.filter(a(o)).map(i):[],r=e=>(e&&e.crop&&e.size&&{x:e.crop[0],y:e.crop[1],width:e.size[0],height:e.size[1]})??{x:0,y:0,width:0,height:0}},735728:(e,o,t)=>{t.d(o,{N4:()=>a,Wh:()=>l,hr:()=>i});let l=e=>e._('Log in to continue', 'limitedLogin.modalHeader.default', 'Default title on mobile web limited login modal'),i=e=>e._('You\'re almost there! Log in to access all of Pinterest', 'loginModal.limitedLogin.subheader', 'Subheader text on personalized login modal/flyout to remind users to log in'),a=({i18n:e,toFollow:o})=>o?e._('Log in to follow', 'limitedLogin.modalHeader.follow', 'Title on mobile web limited login modal to prompt users to login to follow a user or board.'):e._('Log in to unfollow', 'limitedLogin.modalHeader.unfollow', 'Title on mobile web limited login modal to prompt users to login to unfollow a user or board.')},358589:(e,o,t)=>{t.d(o,{Z:()=>r});var l=t(140017),i=t(554786),a=t(166770),n=t(735728);let r=()=>{let e=(0,l.ZP)(),o=(0,i.HG)(),{viewer:t,loginForMore:r,limitedLoginModalSubheader:s,limitedLoginModalNextLocation:d}=(0,a.H)();return"LIMITED_LOGIN"===t.type?({modalHeader:t,nextLocation:l})=>i=>{let a=null;i&&(i.nativeEvent&&i.nativeEvent instanceof Event?a=i:i.event&&(a=i.event)),a&&(a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation()),r?.setVisible(!0),s?.setText(t||(o?n.hr(e):n.Wh(e))),l&&d?.setRoute(l)}:({fn:e})=>e}},321083:(e,o,t)=>{t.d(o,{Z:()=>a,f:()=>n});var l=t(372085),i=t(821419);function a(e,o){return async t=>{t((0,i.md)(e,!0));try{await (0,l.Z)({url:`/v3/boards/${e}/follow/`,method:"PUT"}),o({event_type:26,object_id_str:e})}catch(o){t((0,i.md)(e,!1))}}}function n(e,o){return async t=>{t((0,i.md)(e,!1));try{await (0,l.Z)({url:`/v3/boards/${e}/follow/`,method:"DELETE"}),o({event_type:27,object_id_str:e})}catch(o){t((0,i.md)(e,!0))}}}},155087:(e,o,t)=>{t.d(o,{Z:()=>c});var l=t(883119),i=t(454514),a=t(140017),n=t(757640),r=t(554786),s=t(785893);function d({ideaPinImages:e}){let o=e.map((e,o)=>(0,s.jsx)(l.xu,{borderStyle:"sm",color:"default",dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:o}},height:48,overflow:"hidden",rounding:2,width:28,children:(0,s.jsx)(l.Ee,{alt:"",color:"#696969",fit:"cover",naturalHeight:e?.height??1,naturalWidth:e?.width??1,src:e?.url??""})},o));return(0,s.jsx)(l.kC,{justifyContent:"center",children:(0,s.jsx)(l.kC,{justifyContent:"start",width:{1:28,2:40,3:48}[e.length],children:o})})}function c({handleHide:e,text:o,userId:t,href:c,imageUrl:_}){let u=(0,a.ZP)(),h=(0,r.HG)(),m=(0,n.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:t}}),g=Array.isArray(o)?o.join(" "):o;if(0===(m.data||[]).length)return(0,s.jsx)(i.ZP,{duration:5e3,href:c,onHide:e,text:g,thumbnail:_?{image:(0,s.jsx)(l.Ee,{alt:u._('Image of who you followed', 'userFollowingToast.thumbnail.userImage', 'Profile thumbnail of the user you followed'),fit:"cover",naturalHeight:1,naturalWidth:1,src:_})}:void 0});let x=(m.data||[]).slice(0,3).map(e=>e.images?.[h?"236x":"170x"]),f=(0,s.jsx)(d,{ideaPinImages:x});return(0,s.jsx)(i.ZP,{_dangerouslySetThumbnail:f,duration:5e3,href:c,onHide:e,text:g})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/50257-cb5594fdc1d49810.mjs.map