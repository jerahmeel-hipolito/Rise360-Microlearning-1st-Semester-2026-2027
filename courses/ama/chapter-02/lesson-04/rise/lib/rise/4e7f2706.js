(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_33_0__articulate_design-system-to-b8c5f3"],{57267(ru){var ec="Expected a function",ca=NaN,Fa="[object Symbol]",ac=/^\s+|\s+$/g,Xi=/^[-+]0x[0-9a-f]+$/i,Mo=/^0b[01]+$/i,Vt=/^0o[0-7]+$/i,Xr=parseInt,Ut=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,ia=typeof self=="object"&&self&&self.Object===Object&&self,tc=Ut||ia||Function("return this")(),oc=Object.prototype,ie=oc.toString,Ha=Math.max,nc=Math.min,Do=function(){return tc.Date.now()};function Oo(Lr,ke,sa){var Va,tt,gr,Gr,Ae,Ua,la=0,sc=!1,mt=!1,Aa=!0;if(typeof Lr!="function")throw new TypeError(ec);ke=ic(ke)||0,at(sa)&&(sc=!!sa.leading,mt="maxWait"in sa,gr=mt?Ha(ic(sa.maxWait)||0,ke):gr,Aa="trailing"in sa?!!sa.trailing:Aa);function ra(s){var Ca=Va,nt=tt;return Va=tt=void 0,la=s,Gr=Lr.apply(nt,Ca),Gr}function i(s){return la=s,Ae=setTimeout(ot,ke),sc?ra(s):Gr}function l(s){var Ca=s-Ua,nt=s-la,uc=ke-Ca;return mt?nc(uc,gr-nt):uc}function bt(s){var Ca=s-Ua,nt=s-la;return Ua===void 0||Ca>=ke||Ca<0||mt&&nt>=gr}function ot(){var s=Do();if(bt(s))return Gt(s);Ae=setTimeout(ot,l(s))}function Gt(s){return Ae=void 0,Aa&&Va?ra(s):(Va=tt=void 0,Gr)}function lc(){Ae!==void 0&&clearTimeout(Ae),la=0,Va=Ua=tt=Ae=void 0}function dc(){return Ae===void 0?Gr:Gt(Do())}function Bo(){var s=Do(),Ca=bt(s);if(Va=arguments,tt=this,Ua=s,Ca){if(Ae===void 0)return i(Ua);if(mt)return Ae=setTimeout(ot,ke),ra(Ua)}return Ae===void 0&&(Ae=setTimeout(ot,ke)),Gr}return Bo.cancel=lc,Bo.flush=dc,Bo}function at(Lr){var ke=typeof Lr;return!!Lr&&(ke=="object"||ke=="function")}function No(Lr){return!!Lr&&typeof Lr=="object"}function cc(Lr){return typeof Lr=="symbol"||No(Lr)&&ie.call(Lr)==Fa}function ic(Lr){if(typeof Lr=="number")return Lr;if(cc(Lr))return ca;if(at(Lr)){var ke=typeof Lr.valueOf=="function"?Lr.valueOf():Lr;Lr=at(ke)?ke+"":ke}if(typeof Lr!="string")return Lr===0?Lr:+Lr;Lr=Lr.replace(ac,"");var sa=Mo.test(Lr);return sa||Vt.test(Lr)?Xr(Lr.slice(2),sa?2:8):Xi.test(Lr)?ca:+Lr}ru.exports=Oo},49138(ru,ec,ca){"use strict";ca.r(ec),ca.d(ec,{ARC_DROPDOWN_SUBMENU_OMIT_KEYS:()=>Ah,ARC_MENU_DELAY_MS:()=>200,Arc:()=>t2,ArcAbstractFlexLayouts:()=>sa,ArcAbstractGapSizes:()=>cc,ArcAbstractIconSizes:()=>No,ArcAbstractOrientations:()=>Va,ArcAbstractPopoverActions:()=>at,ArcAbstractPopoverModes:()=>Oo,ArcAbstractTextLayouts:()=>ke,ArcAbstractTextOverflows:()=>Lr,ArcAbstractTextSizes:()=>ic,ArcAvatar:()=>Uc,ArcAvatarBaseSizes:()=>ln,ArcAvatarColors:()=>ih,ArcAvatarColorsReserved:()=>Lm,ArcAvatarOverflow:()=>Xm,ArcAvatarOverflowSizes:()=>Um,ArcAvatarPile:()=>Zm,ArcAvatarPileSizes:()=>Ym,ArcAvatarSizes:()=>Mm,ArcAvatarText:()=>Gc,ArcAvatarTextGapSizes:()=>Qm,ArcAvatarTextOverflows:()=>rb,ArcAvatarTextSizes:()=>eb,ArcBadge:()=>fb,ArcBadgeColors:()=>lb,ArcBadgeContrasts:()=>pb,ArcBadgeCount:()=>Sb,ArcBadgeCountColors:()=>db,ArcBadgeCountContrasts:()=>kb,ArcBadgeCountShapes:()=>Ab,ArcBadgeCountSizes:()=>xb,ArcBadgeCountVariants:()=>wb,ArcBadgeLayouts:()=>hb,ArcBadgeSizes:()=>ub,ArcBadgeVariants:()=>gb,ArcBanner:()=>Vb,ArcBannerActionPlacements:()=>Db,ArcBannerAlignments:()=>Ob,ArcBannerDefaults:()=>dt,ArcBannerDensities:()=>Lb,ArcBannerLayouts:()=>Mb,ArcBannerSchemes:()=>Nb,ArcBannerVariants:()=>Fb,ArcButton:()=>Mr,ArcButtonHierarchies:()=>Nu,ArcButtonLayouts:()=>bf,ArcButtonPopoverActions:()=>yf,ArcButtonSchemes:()=>zs,ArcButtonShadows:()=>$f,ArcButtonShapes:()=>ff,ArcButtonSizes:()=>mf,ArcButtonVariants:()=>Ou,ArcCard:()=>i1,ArcCardActionArea:()=>mn,ArcCardBody:()=>hl,ArcCardFooter:()=>pl,ArcCardHeader:()=>ul,ArcCardLayout:()=>g1,ArcCardLayoutGaps:()=>n1,ArcCardLayoutModes:()=>o1,ArcCardMedia:()=>ll,ArcCardMediaElement:()=>dl,ArcCardMenu:()=>gl,ArcCardSelectionContext:()=>fn,ArcCardSelectionToggle:()=>Jc,ArcCardSizes:()=>t1,ArcCardTitle:()=>Zc,ArcCardValueContext:()=>sl,ArcCardVariants:()=>a1,ArcCheckbox:()=>ol,ArcCheckboxBar:()=>$1,ArcCheckboxBarLayouts:()=>f1,ArcCheckboxBarOption:()=>ep,ArcCheckboxBarSizes:()=>m1,ArcCheckboxBarVariants:()=>b1,ArcCheckboxLayouts:()=>P$,ArcCheckboxSizes:()=>R$,ArcCheckboxVariants:()=>j$,ArcChip:()=>j1,ArcChipDefaults:()=>wl,ArcChipSizes:()=>I1,ArcChipVariants:()=>T1,ArcColorAllTools:()=>B1,ArcColorGradientTools:()=>si,ArcColorPalette:()=>Rn,ArcColorPaletteAddFlows:()=>O1,ArcColorPicker:()=>ja,ArcColorPickerDefaults:()=>Ze,ArcColorPickerModes:()=>L1,ArcColorPickerPanels:()=>M1,ArcColorSimpleTools:()=>ap,ArcColorSolidTools:()=>kl,ArcColorSwatch:()=>Pn,ArcColorSwatchKinds:()=>D1,ArcColorUnsetTogglePlacements:()=>N1,ArcColorValueFormats:()=>p2,ArcDropdownMenu:()=>lo,ArcIcon:()=>zr,ArcIconAvatar:()=>ag,ArcIconAvatarColors:()=>Aw,ArcIconAvatarSizes:()=>Cw,ArcIconAvatarText:()=>zw,ArcIconAvatarVariants:()=>kw,ArcIconText:()=>le,ArcIconTextVariants:()=>gm,ArcInputAction:()=>tg,ArcLabel:()=>St,ArcLabelContent:()=>zt,ArcLabelLayouts:()=>z$,ArcLink:()=>Iw,ArcLinkVariants:()=>Tw,ArcModal:()=>Jw,ArcModalAlert:()=>rk,ArcModalAlertDefaults:()=>Ja,ArcModalAlertVariants:()=>Lw,ArcModalBackdropColors:()=>Mw,ArcModalBodyPaddings:()=>Dw,ArcModalCloseReasons:()=>Nw,ArcModalCommonDefaults:()=>Fe,ArcModalCommonVariants:()=>Rw,ArcModalConfirm:()=>dg,ArcModalConfirmDefaults:()=>ft,ArcModalConfirmVariants:()=>jw,ArcModalSchemes:()=>Pw,ArcModalSizes:()=>Ow,ArcNavList:()=>sk,ArcNavListDensities:()=>ik,ArcNavListHierarchies:()=>nk,ArcNavListOrientations:()=>ck,ArcPopover:()=>ha,ArcPopoverActions:()=>Bv,ArcPopoverAnchors:()=>mc,ArcPopoverBoundaries:()=>fs,ArcPopoverButton:()=>Qo,ArcPopoverDefaults:()=>Me,ArcPopoverDensities:()=>Au,ArcPopoverModes:()=>gs,ArcPopoverSchemes:()=>vs,ArcPopoverVariants:()=>ku,ArcPopoverVariantsWithOutline:()=>Fv,ArcRadio:()=>N0,ArcRadioBar:()=>G0,ArcRadioBarLayouts:()=>Ux,ArcRadioBarOption:()=>yd,ArcRadioBarSizes:()=>Gx,ArcRadioBarVariants:()=>Kx,ArcRadioLayouts:()=>Fx,ArcRadioSizes:()=>Hx,ArcSVGGradientDef:()=>mu,ArcSearch:()=>$g,ArcSearchLayouts:()=>Ak,ArcSearchSizes:()=>Ck,ArcSearchVariants:()=>Sk,ArcSelect:()=>Ok,ArcSelectLayouts:()=>Tk,ArcSelectSizes:()=>Ik,ArcSelectVariants:()=>Pk,ArcSlider:()=>sd,ArcSliderLabelPlacements:()=>Px,ArcSliderLayouts:()=>_x,ArcSliderSizes:()=>Tx,ArcSliderVariants:()=>Ix,ArcSpinner:()=>wc,ArcSpinnerColors:()=>lf,ArcSpinnerSizes:()=>sf,ArcSwitch:()=>Hk,ArcSwitchLabelPositions:()=>Po,ArcSwitchSizes:()=>Nk,ArcSwitchStates:()=>xe,ArcSystemAIGradients:()=>nc,ArcSystemAlignments:()=>tc,ArcSystemColors:()=>Ha,ArcSystemDensities:()=>Vt,ArcSystemGradients:()=>Do,ArcSystemHierarchies:()=>Ut,ArcSystemLayouts:()=>ia,ArcSystemLineHeights:()=>oc,ArcSystemSchemes:()=>Fa,ArcSystemShadows:()=>ac,ArcSystemShapes:()=>Mo,ArcSystemSizes:()=>ie,ArcSystemSurfaces:()=>Xi,ArcSystemVariants:()=>Xr,ArcTextAlignments:()=>Zk,ArcTextBodyElements:()=>Eg,ArcTextBodySizes:()=>qk,ArcTextBodyVariants:()=>Yk,ArcTextElements:()=>_g,ArcTextHeadingElements:()=>zg,ArcTextHeadingSizes:()=>Kk,ArcTextHeadingVariants:()=>Xk,ArcTextInput:()=>Co,ArcTextInputLayouts:()=>Ax,ArcTextInputSizes:()=>Cx,ArcTextInputTypes:()=>zx,ArcTextInputVariants:()=>Sx,ArcTextKinds:()=>Vk,ArcTextLineHeights:()=>Jk,ArcTextSchemes:()=>Uk,ArcTextSubheadingSizes:()=>Wk,ArcTextTitleSizes:()=>Gk,ArcToast:()=>Kg,ArcToastDefaults:()=>Bg,ArcToastPlacements:()=>Ng,ArcToastPopoverActions:()=>n2,ArcToastPopoverModes:()=>Og,ArcToastProgressBarVariants:()=>c2,ArcToastSchemes:()=>jg,ArcToastSeverities:()=>Lg,ArcToastSizes:()=>Mg,ArcToastVariants:()=>Dg,ArcTooltip:()=>oo,ArcTooltipDefaults:()=>ga,COLOR_DEFAULTS:()=>Ke,DEFAULT_COLOR_PICKER_LABELS:()=>pe,DEFAULT_ICON_AVATAR_DESCRIPTIONS:()=>zd,DEFAULT_ICON_AVATAR_LABELS:()=>Sd,DeprecatedButtonVariants:()=>Es,EPS_LOOSE:()=>1e-4,EPS_MID:()=>di,EPS_STRICT:()=>1e-10,GRADIENT_DEFAULTS:()=>nr,IS_FLOATING:()=>Cu,SLIDER_TOKENS:()=>C0,SLIDER_TOKENS_REGEX:()=>S0,SVGLogoArticulate:()=>as,SVGLogoProductAI:()=>ts,SVGLogoProductPeek:()=>os,SVGLogoProductReach:()=>ns,SVGLogoProductReview:()=>cs,SVGLogoProductRise:()=>is,SVGLogoProductStoryline:()=>ss,SVGLogoProductStudio:()=>ls,StorageType:()=>Qn,adoptStyles:()=>Cr,adoptThemeTokens:()=>vv,anchorNameRegistry:()=>Xo,appendGradientStop:()=>Lp,appendUniqueColorValue:()=>ay,arcGradientsEqual:()=>mi,arcGradientsSemanticEqual:()=>ut,arcGradientsVisuallyEqual:()=>cy,assignRef:()=>Ae,averageGradientColor:()=>mp,bindDelegatedEvents:()=>th,buildDefaultGradientStops:()=>_p,buildStopFieldBackground:()=>Op,canonicalizeToHsv:()=>fi,clamp:()=>Ua,clampIt:()=>ar,colorValueEquals:()=>$o,compositeRgbaOver:()=>hi,computeEvenlyDistributedStopAt:()=>Ip,computeNextStopAt:()=>Ol,computeStopAtBetween:()=>En,createArcCardSelectionStore:()=>Lh,createEmptyRect:()=>g2,css:()=>s,cssFeatures:()=>bc,decodeDeprecatedButtonVariant:()=>Af,didElementRectChange:()=>mt,distributeGradientStopPositions:()=>Pp,encodeDeprecatedButtonVariant:()=>Cf,expandHex3To6:()=>_l,expandShortHex:()=>El,extractTextFromReactNode:()=>qt,formatAlphaCss:()=>gi,formatAlphaPercent:()=>Sl,formatAnchorName:()=>bs,getArcColorAs:()=>Ap,getArcColorData:()=>Pa,getArcColorParts:()=>kp,getArcColorValue:()=>Sn,getArcContrastColor:()=>yo,getArcGradientData:()=>xo,getArcGradientMeridianColor:()=>bi,getColorName:()=>mo,getCssColor:()=>Br,getElementByIdScoped:()=>ra,getGradientName:()=>Mp,getGradientStopKeyboardDelta:()=>Hp,getPlainLabel:()=>Ag,getPreferredAnchorForTooltipId:()=>Ns,getRenderedContrastBasis:()=>zp,getResolvedHierarchy:()=>Vu,getResolvedScheme:()=>Uu,getResolvedShape:()=>Bu,getResolvedVariant:()=>Hu,getSelectedColorMeta:()=>Ml,getShadowRootOrDocument:()=>Aa,getSortedStopEntries:()=>ba,getSvgGradientCoords:()=>fu,handlePopover:()=>Tu,handleToast:()=>Fg,hasBaseSelectSupport:()=>yg,hasEmptyValueOption:()=>kg,hasMatchingColorValue:()=>Ll,hasNativeAnchorPositioning:()=>ms,hexAfterChannelNudge:()=>xp,hslToRgbaData:()=>lp,hsvDeltaOK:()=>W1,hsvToRgbaData:()=>Ue,iconAvatarDefaults:()=>_o,iconAvatarVariantMap:()=>Mi,interpolateGradientStopColor:()=>Rp,isArcColorGradient:()=>te,isArcColorPickerGradientChange:()=>F1,isArcColorPickerSolidChange:()=>op,isArcColorPickerUnsetChange:()=>H1,isArcColorSwatchGradientDetails:()=>tp,isDeprecatedButtonVariant:()=>_s,isDifferent:()=>la,isGroupLegendItem:()=>xg,isHexLike:()=>$p,isHsvLike:()=>vi,isNumber:()=>fc,isObject:()=>vu,isRgbaLike:()=>yp,isSame:()=>sc,isSelectGroup:()=>Gi,isSelectedColorMatch:()=>Ep,isString:()=>wt,joinArray:()=>Wo,logError:()=>Nv,logMessage:()=>Ov,logSkippedTopLevelItem:()=>wg,logWarning:()=>wu,makeHtmlId:()=>fv,makeRandomColor:()=>zn,mapDeprecated:()=>tt,mergeRgbaFromHexDraft:()=>bp,noTailAnchors:()=>Su,noop:()=>po,normalizeAnchorName:()=>qo,normalizeByte:()=>be,normalizeColorValue:()=>bo,normalizeHexInput:()=>Tt,normalizeHue:()=>Al,normalizeUnit:()=>sp,oklchToRgbaData:()=>hp,parseAlphaInput:()=>vp,parseByte:()=>An,parseCssColorToRgba:()=>Zr,parseHexStringToRgba:()=>fp,percentsFromValue:()=>ip,pickFromList:()=>gr,pickFromListByKeys:()=>Gr,positionTryNameFor:()=>Eu,relativeLuminance:()=>pp,renderableOption:()=>Io,resolveColorPickerLabels:()=>li,resolveFallbackAnchors:()=>zu,resolveGradientAngleFromPointerDrag:()=>Bp,resolveGradientData:()=>Dp,resolveGradientStopAtFromPointer:()=>Np,resolveIconAvatarDescriptions:()=>$w,resolveIconAvatarLabels:()=>Ed,resolveInsertedGradientStop:()=>jp,resolvePointerAngleDeg:()=>Nl,resolveTailMetrics:()=>_u,rgbaBytesEqual:()=>gp,rgbaDeltaOK:()=>pi,rgbaEchoDeltaOK:()=>K1,rgbaToHslData:()=>dp,rgbaToHsvData:()=>ui,rgbaToOklchData:()=>up,roundGradientStopsForCommit:()=>It,roundIt:()=>ma,shareAdoptedStyles:()=>gv,shouldSortStopAtAdjacent:()=>ny,shouldSortStopAtNeighborPositions:()=>Dl,snapGradientAngle:()=>Fp,snapIt:()=>cp,snapToStep:()=>T0,sortGradientStops:()=>Tp,splitString:()=>Du,stepGradientAngleBySnap:()=>sy,stepToNextSnap:()=>I0,syncAnchorName:()=>Iu,toHEX:()=>Ge,toHSL:()=>Rl,toLinearChannel:()=>_t,toLinearGradientCss:()=>Ya,toOKLCH:()=>jl,toOpaqueRgbHexNoHash:()=>fo,toPx:()=>Yo,toRGB:()=>Ia,unbindDelegatedEvents:()=>_m,useArcCardIsActive:()=>Dh,useArcCardIsSelected:()=>il,useArcCardSelection:()=>cl,useArcCardValue:()=>Oh,useIsoLayoutEffect:()=>da,useShiftSnap:()=>P0,useStableId:()=>Nr,useStorage:()=>h2});const Fa=["auto","light","dark","inverse"],ac=["none","sm","md","lg","xl"],Xi=["primary","secondary","inset","raised","floating"],Mo=["circle","round","pill","square","narrow"],Vt=["compact","comfortable"],Xr=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],Ut=["primary","secondary","tertiary","plain","link-style"],ia=["hug","fill","icon","gutter","inline"],tc=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],oc=["inherit","tight","standard","loose"],ie=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],Ha=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],nc=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],Do=[...nc],Oo=["","auto","manual"],at=["toggle","show","hide"],No=["inherit","xl","lg","md","sm","xs"],cc=["inherit","lg","md","sm"],ic=["inherit","md","sm"],Lr=["inherit","wrap","truncate"],ke=["gutter","inline"],sa=["hug","fill"],Va=["horizontal","vertical"],tt=(r,e)=>e[r]||r,gr=(r,e)=>r.filter(a=>e.includes(a)),Gr=(r,e)=>e.filter(a=>r.includes(a)),Ae=(r,e)=>{r&&(typeof r=="function"?r(e):r.current=e)},Ua=(r,e=0,a=100)=>Math.min(Math.max(r,e),a),la=(r,e)=>r!==e,sc=(r,e)=>r===e,mt=({a:r,b:e})=>la(r?.top,e?.top)||la(r?.left,e?.left)||la(r?.width,e?.width)||la(r?.height,e?.height);function Aa(r){if(!(r instanceof Node))return null;const e=r.getRootNode();return e instanceof ShadowRoot||e instanceof Document?e:null}function ra(r,e){if(typeof document>"u")return null;const a=e==null?document:Aa(e)??document,t=a.getElementById(r);return t||(a!==document?document.getElementById(r):null)}var i=ca(34158),l=ca(82920);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=globalThis,ot=bt.ShadowRoot&&(bt.ShadyCSS===void 0||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gt=Symbol(),lc=new WeakMap;class dc{constructor(e,a,t){if(this._$cssResult$=!0,t!==Gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=a}get styleSheet(){let e=this.o;const a=this.t;if(ot&&e===void 0){const t=a!==void 0&&a.length===1;t&&(e=lc.get(a)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&lc.set(a,e))}return e}toString(){return this.cssText}}const Bo=r=>new dc(typeof r=="string"?r:r+"",void 0,Gt),s=(r,...e)=>{const a=r.length===1?r[0]:e.reduce(((t,o,n)=>t+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[n+1]),r[0]);return new dc(a,r,Gt)},Ca=(r,e)=>{if(ot)r.adoptedStyleSheets=e.map((a=>a instanceof CSSStyleSheet?a:a.styleSheet));else for(const a of e){const t=document.createElement("style"),o=bt.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=a.cssText,r.appendChild(t)}},nt=ot?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let a="";for(const t of e.cssRules)a+=t.cssText;return Bo(a)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:uc,defineProperty:qg,getOwnPropertyDescriptor:Yg,getOwnPropertyNames:Zg,getOwnPropertySymbols:Jg,getPrototypeOf:Qg}=Object,hc=globalThis,eu=hc.trustedTypes,rv=eu?eu.emptyScript:"",ev=hc.reactiveElementPolyfillSupport,Fo=(r,e)=>r,qi={toAttribute(r,e){switch(e){case Boolean:r=r?rv:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let a=r;switch(e){case Boolean:a=r!==null;break;case Number:a=r===null?null:Number(r);break;case Object:case Array:try{a=JSON.parse(r)}catch{a=null}}return a}},au=(r,e)=>!uc(r,e),tu={attribute:!0,type:String,converter:qi,reflect:!1,useDefault:!1,hasChanged:au};Symbol.metadata??=Symbol("metadata"),hc.litPropertyMetadata??=new WeakMap;class Kt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,a=tu){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(e,a),!a.noAccessor){const t=Symbol(),o=this.getPropertyDescriptor(e,t,a);o!==void 0&&qg(this.prototype,e,o)}}static getPropertyDescriptor(e,a,t){const{get:o,set:n}=Yg(this.prototype,e)??{get(){return this[a]},set(c){this[a]=c}};return{get:o,set(c){const d=o?.call(this);n?.call(this,c),this.requestUpdate(e,d,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tu}static _$Ei(){if(this.hasOwnProperty(Fo("elementProperties")))return;const e=Qg(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Fo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fo("properties"))){const a=this.properties,t=[...Zg(a),...Jg(a)];for(const o of t)this.createProperty(o,a[o])}const e=this[Symbol.metadata];if(e!==null){const a=litPropertyMetadata.get(e);if(a!==void 0)for(const[t,o]of a)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[a,t]of this.elementProperties){const o=this._$Eu(a,t);o!==void 0&&this._$Eh.set(o,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const o of t)a.unshift(nt(o))}else e!==void 0&&a.push(nt(e));return a}static _$Eu(e,a){const t=a.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,a=this.constructor.elementProperties;for(const t of a.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ca(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,a,t){this._$AK(e,t)}_$ET(e,a){const t=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,t);if(o!==void 0&&t.reflect===!0){const n=(t.converter?.toAttribute!==void 0?t.converter:qi).toAttribute(a,t.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,a){const t=this.constructor,o=t._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const n=t.getPropertyOptions(o),c=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:qi;this._$Em=o;const d=c.fromAttribute(a,n.type);this[o]=d??this._$Ej?.get(o)??d,this._$Em=null}}requestUpdate(e,a,t){if(e!==void 0){const o=this.constructor,n=this[e];if(t??=o.getPropertyOptions(e),!((t.hasChanged??au)(n,a)||t.useDefault&&t.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,t))))return;this.C(e,a,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,a,{useDefault:t,reflect:o,wrapped:n},c){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,c??a??this[e]),n!==!0||c!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(a=void 0),this._$AL.set(e,a)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[o,n]of t){const{wrapped:c}=n,d=this[o];c!==!0||this._$AL.has(o)||d===void 0||this.C(o,void 0,n,d)}}let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(a)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(a)}willUpdate(e){}_$AE(e){this._$EO?.forEach((a=>a.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((a=>this._$ET(a,this[a]))),this._$EM()}updated(e){}firstUpdated(e){}}Kt.elementStyles=[],Kt.shadowRootOptions={mode:"open"},Kt[Fo("elementProperties")]=new Map,Kt[Fo("finalized")]=new Map,ev?.({ReactiveElement:Kt}),(hc.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yi=globalThis,pc=Yi.trustedTypes,ou=pc?pc.createPolicy("lit-html",{createHTML:r=>r}):void 0,nu="$lit$",ct=`lit$${Math.random().toFixed(9).slice(2)}$`,cu="?"+ct,av=`<${cu}>`,$t=document,Ho=()=>$t.createComment(""),Vo=r=>r===null||typeof r!="object"&&typeof r!="function",Zi=Array.isArray,tv=r=>Zi(r)||typeof r?.[Symbol.iterator]=="function",Ji=`[ 	
\f\r]`,Uo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,iu=/-->/g,su=/>/g,yt=RegExp(`>|${Ji}(?:([^\\s"'>=/]+)(${Ji}*=${Ji}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lu=/'/g,du=/"/g,uu=/^(?:script|style|textarea|title)$/i,Qi=r=>(e,...a)=>({_$litType$:r,strings:e,values:a}),f2=Qi(1),m2=Qi(2),b2=Qi(3),Wt=Symbol.for("lit-noChange"),ve=Symbol.for("lit-nothing"),hu=new WeakMap,xt=$t.createTreeWalker($t,129);function pu(r,e){if(!Zi(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ou!==void 0?ou.createHTML(e):e}const ov=(r,e)=>{const a=r.length-1,t=[];let o,n=e===2?"<svg>":e===3?"<math>":"",c=Uo;for(let d=0;d<a;d++){const u=r[d];let h,p,v=-1,g=0;for(;g<u.length&&(c.lastIndex=g,p=c.exec(u),p!==null);)g=c.lastIndex,c===Uo?p[1]==="!--"?c=iu:p[1]!==void 0?c=su:p[2]!==void 0?(uu.test(p[2])&&(o=RegExp("</"+p[2],"g")),c=yt):p[3]!==void 0&&(c=yt):c===yt?p[0]===">"?(c=o??Uo,v=-1):p[1]===void 0?v=-2:(v=c.lastIndex-p[2].length,h=p[1],c=p[3]===void 0?yt:p[3]==='"'?du:lu):c===du||c===lu?c=yt:c===iu||c===su?c=Uo:(c=yt,o=void 0);const f=c===yt&&r[d+1].startsWith("/>")?" ":"";n+=c===Uo?u+av:v>=0?(t.push(h),u.slice(0,v)+nu+u.slice(v)+ct+f):u+ct+(v===-2?d:f)}return[pu(r,n+(r[a]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]};class Go{constructor({strings:e,_$litType$:a},t){let o;this.parts=[];let n=0,c=0;const d=e.length-1,u=this.parts,[h,p]=ov(e,a);if(this.el=Go.createElement(h,t),xt.currentNode=this.el.content,a===2||a===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(o=xt.nextNode())!==null&&u.length<d;){if(o.nodeType===1){if(o.hasAttributes())for(const v of o.getAttributeNames())if(v.endsWith(nu)){const g=p[c++],f=o.getAttribute(v).split(ct),b=/([.?@])?(.*)/.exec(g);u.push({type:1,index:n,name:b[2],strings:f,ctor:b[1]==="."?cv:b[1]==="?"?iv:b[1]==="@"?sv:gc}),o.removeAttribute(v)}else v.startsWith(ct)&&(u.push({type:6,index:n}),o.removeAttribute(v));if(uu.test(o.tagName)){const v=o.textContent.split(ct),g=v.length-1;if(g>0){o.textContent=pc?pc.emptyScript:"";for(let f=0;f<g;f++)o.append(v[f],Ho()),xt.nextNode(),u.push({type:2,index:++n});o.append(v[g],Ho())}}}else if(o.nodeType===8)if(o.data===cu)u.push({type:2,index:n});else{let v=-1;for(;(v=o.data.indexOf(ct,v+1))!==-1;)u.push({type:7,index:n}),v+=ct.length-1}n++}}static createElement(e,a){const t=$t.createElement("template");return t.innerHTML=e,t}}function Xt(r,e,a=r,t){if(e===Wt)return e;let o=t!==void 0?a._$Co?.[t]:a._$Cl;const n=Vo(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(r),o._$AT(r,a,t)),t!==void 0?(a._$Co??=[])[t]=o:a._$Cl=o),o!==void 0&&(e=Xt(r,o._$AS(r,e.values),o,t)),e}class nv{constructor(e,a){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:a},parts:t}=this._$AD,o=(e?.creationScope??$t).importNode(a,!0);xt.currentNode=o;let n=xt.nextNode(),c=0,d=0,u=t[0];for(;u!==void 0;){if(c===u.index){let h;u.type===2?h=new Ko(n,n.nextSibling,this,e):u.type===1?h=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(h=new lv(n,this,e)),this._$AV.push(h),u=t[++d]}c!==u?.index&&(n=xt.nextNode(),c++)}return xt.currentNode=$t,o}p(e){let a=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,a),a+=t.strings.length-2):t._$AI(e[a])),a++}}class Ko{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,a,t,o){this.type=2,this._$AH=ve,this._$AN=void 0,this._$AA=e,this._$AB=a,this._$AM=t,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&e?.nodeType===11&&(e=a.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,a=this){e=Xt(this,e,a),Vo(e)?e===ve||e==null||e===""?(this._$AH!==ve&&this._$AR(),this._$AH=ve):e!==this._$AH&&e!==Wt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):tv(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ve&&Vo(this._$AH)?this._$AA.nextSibling.data=e:this.T($t.createTextNode(e)),this._$AH=e}$(e){const{values:a,_$litType$:t}=e,o=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=Go.createElement(pu(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===o)this._$AH.p(a);else{const n=new nv(o,this),c=n.u(this.options);n.p(a),this.T(c),this._$AH=n}}_$AC(e){let a=hu.get(e.strings);return a===void 0&&hu.set(e.strings,a=new Go(e)),a}k(e){Zi(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let t,o=0;for(const n of e)o===a.length?a.push(t=new Ko(this.O(Ho()),this.O(Ho()),this,this.options)):t=a[o],t._$AI(n),o++;o<a.length&&(this._$AR(t&&t._$AB.nextSibling,o),a.length=o)}_$AR(e=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class gc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,a,t,o,n){this.type=1,this._$AH=ve,this._$AN=void 0,this.element=e,this.name=a,this._$AM=o,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=ve}_$AI(e,a=this,t,o){const n=this.strings;let c=!1;if(n===void 0)e=Xt(this,e,a,0),c=!Vo(e)||e!==this._$AH&&e!==Wt,c&&(this._$AH=e);else{const d=e;let u,h;for(e=n[0],u=0;u<n.length-1;u++)h=Xt(this,d[t+u],a,u),h===Wt&&(h=this._$AH[u]),c||=!Vo(h)||h!==this._$AH[u],h===ve?e=ve:e!==ve&&(e+=(h??"")+n[u+1]),this._$AH[u]=h}c&&!o&&this.j(e)}j(e){e===ve?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class cv extends gc{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ve?void 0:e}}class iv extends gc{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ve)}}class sv extends gc{constructor(e,a,t,o,n){super(e,a,t,o,n),this.type=5}_$AI(e,a=this){if((e=Xt(this,e,a,0)??ve)===Wt)return;const t=this._$AH,o=e===ve&&t!==ve||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,n=e!==ve&&(t===ve||o);o&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class lv{constructor(e,a,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=a,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){Xt(this,e)}}const $2=null,dv=Yi.litHtmlPolyfillSupport;dv?.(Go,Ko),(Yi.litHtmlVersions??=[]).push("3.3.1");const uv=(r,e,a)=>{const t=a?.renderBefore??e;let o=t._$litPart$;if(o===void 0){const n=a?.renderBefore??null;t._$litPart$=o=new Ko(e.insertBefore(Ho(),n),n,void 0,a??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rs=globalThis;class vc extends Kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=uv(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Wt}}vc._$litElement$=!0,vc.finalized=!0,rs.litElementHydrateSupport?.({LitElement:vc});const hv=rs.litElementPolyfillSupport;hv?.({LitElement:vc});const y2=null;(rs.litElementVersions??=[]).push("4.2.1");const pv=`@charset "UTF-8";
@layer arc-theme, arc-components, arc-utils;
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-color-mono-black: #000000;
    --arc-color-mono-white: #ffffff;
    --arc-color-light-neutral-0: #ffffff;
    --arc-color-light-neutral-50: #f7f7f7;
    --arc-color-light-neutral-100: #ededed;
    --arc-color-light-neutral-200: #e6e6e6;
    --arc-color-light-neutral-300: #c6c6c6;
    --arc-color-light-neutral-400: #b0b0b0;
    --arc-color-light-neutral-500: #9b9b9b;
    --arc-color-light-neutral-600: #737373;
    --arc-color-light-neutral-700: #636363;
    --arc-color-light-neutral-800: #4b4b4b;
    --arc-color-light-neutral-900: #212121;
    --arc-color-light-neutral-1000: #000000;
    --arc-color-light-blue-50: #f0fbff;
    --arc-color-light-blue-100: #ddf4fd;
    --arc-color-light-blue-200: #99e4ff;
    --arc-color-light-blue-300: #53d1ff;
    --arc-color-light-blue-400: #00aff0;
    --arc-color-light-blue-500: #0098eb;
    --arc-color-light-blue-600: #0075cf;
    --arc-color-light-blue-700: #0065b2;
    --arc-color-light-blue-800: #005394;
    --arc-color-light-blue-900: #00335b;
    --arc-color-light-purple-50: #f1f0ff;
    --arc-color-light-purple-100: #e9e7fe;
    --arc-color-light-purple-200: #b2a8ff;
    --arc-color-light-purple-300: #9789fa;
    --arc-color-light-purple-400: #8676ff;
    --arc-color-light-purple-500: #7565f1;
    --arc-color-light-purple-600: #4e3bd5;
    --arc-color-light-purple-700: #3120b4;
    --arc-color-light-purple-800: #16068e;
    --arc-color-light-purple-900: #0c0064;
    --arc-color-light-mint-50: #f0fff9;
    --arc-color-light-mint-100: #d9fdef;
    --arc-color-light-mint-200: #9df1d1;
    --arc-color-light-mint-300: #6de3b6;
    --arc-color-light-mint-400: #44bf90;
    --arc-color-light-mint-500: #0f9f68;
    --arc-color-light-mint-600: #008451;
    --arc-color-light-mint-700: #006e44;
    --arc-color-light-mint-800: #005937;
    --arc-color-light-mint-900: #00442a;
    --arc-color-light-orange-50: #fff6f0;
    --arc-color-light-orange-100: #fdeadd;
    --arc-color-light-orange-200: #fac39e;
    --arc-color-light-orange-300: #fd9e5e;
    --arc-color-light-orange-400: #ff6602;
    --arc-color-light-orange-500: #e95d00;
    --arc-color-light-orange-600: #c24e00;
    --arc-color-light-orange-700: #a84300;
    --arc-color-light-orange-800: #933b00;
    --arc-color-light-orange-900: #662900;
    --arc-color-light-maroon-50: #ffeff3;
    --arc-color-light-maroon-100: #fedde5;
    --arc-color-light-maroon-200: #ffa8be;
    --arc-color-light-maroon-300: #fe8fab;
    --arc-color-light-maroon-400: #f27195;
    --arc-color-light-maroon-500: #e05580;
    --arc-color-light-maroon-600: #c73868;
    --arc-color-light-maroon-700: #aa1a53;
    --arc-color-light-maroon-800: #841a42;
    --arc-color-light-maroon-900: #5d132d;
    --arc-color-light-green-50: #f6fff0;
    --arc-color-light-green-100: #e7fdd9;
    --arc-color-light-green-200: #bfeea0;
    --arc-color-light-green-300: #8dd65c;
    --arc-color-light-green-400: #74bb44;
    --arc-color-light-green-500: #57a225;
    --arc-color-light-green-600: #358201;
    --arc-color-light-green-700: #2c6d00;
    --arc-color-light-green-800: #235800;
    --arc-color-light-green-900: #1b4300;
    --arc-color-light-yellow-50: #fffaf0;
    --arc-color-light-yellow-100: #fdf2dd;
    --arc-color-light-yellow-200: #ffdb94;
    --arc-color-light-yellow-300: #ffc960;
    --arc-color-light-yellow-400: #ffb629;
    --arc-color-light-yellow-500: #eb9b00;
    --arc-color-light-yellow-600: #9e6900;
    --arc-color-light-yellow-700: #805400;
    --arc-color-light-yellow-800: #604000;
    --arc-color-light-yellow-900: #3e2900;
    --arc-color-light-red-50: #fff0f0;
    --arc-color-light-red-100: #fde2e2;
    --arc-color-light-red-200: #ff9999;
    --arc-color-light-red-300: #ff6161;
    --arc-color-light-red-400: #ff0000;
    --arc-color-light-red-500: #eb0000;
    --arc-color-light-red-600: #b80000;
    --arc-color-light-red-700: #990000;
    --arc-color-light-red-800: #7a0000;
    --arc-color-light-red-900: #520000;
    --arc-color-dark-neutral-0: #000000;
    --arc-color-dark-neutral-50: #1c1c1c;
    --arc-color-dark-neutral-100: #2a2a2a;
    --arc-color-dark-neutral-200: #3d3d3d;
    --arc-color-dark-neutral-300: #515151;
    --arc-color-dark-neutral-400: #666666;
    --arc-color-dark-neutral-500: #7b7b7b;
    --arc-color-dark-neutral-600: #939393;
    --arc-color-dark-neutral-700: #aeaeae;
    --arc-color-dark-neutral-800: #d0d0d0;
    --arc-color-dark-neutral-900: #ededed;
    --arc-color-dark-neutral-1000: #ffffff;
    --arc-color-dark-blue-50: #002542;
    --arc-color-dark-blue-100: #093a63;
    --arc-color-dark-blue-200: #0f4d7a;
    --arc-color-dark-blue-300: #146192;
    --arc-color-dark-blue-400: #1974aa;
    --arc-color-dark-blue-500: #1e88c7;
    --arc-color-dark-blue-600: #0ca1f7;
    --arc-color-dark-blue-700: #3ab1f5;
    --arc-color-dark-blue-800: #70cbfa;
    --arc-color-dark-blue-900: #b9e6fd;
    --arc-color-dark-purple-50: #161041;
    --arc-color-dark-purple-100: #221c5a;
    --arc-color-dark-purple-200: #2d2773;
    --arc-color-dark-purple-300: #39328c;
    --arc-color-dark-purple-400: #463da6;
    --arc-color-dark-purple-500: #5449c0;
    --arc-color-dark-purple-600: #6556da;
    --arc-color-dark-purple-700: #7a6ef0;
    --arc-color-dark-purple-800: #a193f9;
    --arc-color-dark-purple-900: #d3c9ff;
    --arc-color-dark-mint-50: #04291b;
    --arc-color-dark-mint-100: #0b3425;
    --arc-color-dark-mint-200: #134434;
    --arc-color-dark-mint-300: #1b5444;
    --arc-color-dark-mint-400: #246554;
    --arc-color-dark-mint-500: #2f7766;
    --arc-color-dark-mint-600: #14b290;
    --arc-color-dark-mint-700: #52a895;
    --arc-color-dark-mint-800: #84d0bd;
    --arc-color-dark-mint-900: #d6fff2;
    --arc-color-dark-orange-50: #251104;
    --arc-color-dark-orange-100: #3a1a08;
    --arc-color-dark-orange-200: #50240d;
    --arc-color-dark-orange-300: #672f14;
    --arc-color-dark-orange-400: #7f3c1d;
    --arc-color-dark-orange-500: #984b27;
    --arc-color-dark-orange-600: #d55913;
    --arc-color-dark-orange-700: #d1764d;
    --arc-color-dark-orange-800: #eba883;
    --arc-color-dark-orange-900: #ffdcc9;
    --arc-color-dark-maroon-50: #2a0914;
    --arc-color-dark-maroon-100: #40101f;
    --arc-color-dark-maroon-200: #56162b;
    --arc-color-dark-maroon-300: #6c1e39;
    --arc-color-dark-maroon-400: #822647;
    --arc-color-dark-maroon-500: #993057;
    --arc-color-dark-maroon-600: #b13d69;
    --arc-color-dark-maroon-700: #d05886;
    --arc-color-dark-maroon-800: #e891b5;
    --arc-color-dark-maroon-900: #ffd6e7;
    --arc-color-dark-green-50: #132904;
    --arc-color-dark-green-100: #1b340a;
    --arc-color-dark-green-200: #264411;
    --arc-color-dark-green-300: #31551a;
    --arc-color-dark-green-400: #3e6625;
    --arc-color-dark-green-500: #4c7831;
    --arc-color-dark-green-600: #55a722;
    --arc-color-dark-green-700: #72a65b;
    --arc-color-dark-green-800: #a0d092;
    --arc-color-dark-green-900: #e2fcd9;
    --arc-color-dark-yellow-50: #2e2005;
    --arc-color-dark-yellow-100: #3a2907;
    --arc-color-dark-yellow-200: #51390d;
    --arc-color-dark-yellow-300: #684a14;
    --arc-color-dark-yellow-400: #7f5c1c;
    --arc-color-dark-yellow-500: #976f25;
    --arc-color-dark-yellow-600: #d99d0f;
    --arc-color-dark-yellow-700: #d1a049;
    --arc-color-dark-yellow-800: #eccc86;
    --arc-color-dark-yellow-900: #fff7d9;
    --arc-color-dark-red-50: #250404;
    --arc-color-dark-red-100: #3a0809;
    --arc-color-dark-red-200: #500d0e;
    --arc-color-dark-red-300: #671416;
    --arc-color-dark-red-400: #7e1d1f;
    --arc-color-dark-red-500: #97292b;
    --arc-color-dark-red-600: #d4423f;
    --arc-color-dark-red-700: #d86466;
    --arc-color-dark-red-800: #e88987;
    --arc-color-dark-red-900: #ffd6d6;
    --arc-color-alpha-black-0: rgb(0 0 0 / 0%);
    --arc-color-alpha-black-3: rgb(0 0 0 / 3%);
    --arc-color-alpha-black-5: rgb(0 0 0 / 5%);
    --arc-color-alpha-black-7: rgb(0 0 0 / 7%);
    --arc-color-alpha-black-10: rgb(0 0 0 / 10%);
    --arc-color-alpha-black-15: rgb(0 0 0 / 15%);
    --arc-color-alpha-black-20: rgb(0 0 0 / 20%);
    --arc-color-alpha-black-25: rgb(0 0 0 / 25%);
    --arc-color-alpha-black-30: rgb(0 0 0 / 30%);
    --arc-color-alpha-black-40: rgb(0 0 0 / 40%);
    --arc-color-alpha-black-50: rgb(0 0 0 / 50%);
    --arc-color-alpha-black-60: rgb(0 0 0 / 60%);
    --arc-color-alpha-black-70: rgb(0 0 0 / 70%);
    --arc-color-alpha-black-80: rgb(0 0 0 / 80%);
    --arc-color-alpha-black-90: rgb(0 0 0 / 90%);
    --arc-color-alpha-black-95: rgb(0 0 0 / 95%);
    --arc-color-alpha-black-100: rgb(0 0 0 / 100%);
    --arc-color-alpha-white-0: rgb(255 255 255 / 0%);
    --arc-color-alpha-white-3: rgb(255 255 255 / 3%);
    --arc-color-alpha-white-5: rgb(255 255 255 / 5%);
    --arc-color-alpha-white-7: rgb(255 255 255 / 7%);
    --arc-color-alpha-white-10: rgb(255 255 255 / 10%);
    --arc-color-alpha-white-15: rgb(255 255 255 / 15%);
    --arc-color-alpha-white-20: rgb(255 255 255 / 20%);
    --arc-color-alpha-white-25: rgb(255 255 255 / 25%);
    --arc-color-alpha-white-30: rgb(255 255 255 / 30%);
    --arc-color-alpha-white-40: rgb(255 255 255 / 40%);
    --arc-color-alpha-white-50: rgb(255 255 255 / 50%);
    --arc-color-alpha-white-60: rgb(255 255 255 / 60%);
    --arc-color-alpha-white-70: rgb(255 255 255 / 70%);
    --arc-color-alpha-white-80: rgb(255 255 255 / 80%);
    --arc-color-alpha-white-90: rgb(255 255 255 / 90%);
    --arc-color-alpha-white-95: rgb(255 255 255 / 95%);
    --arc-color-alpha-white-100: rgb(255 255 255 / 100%);
    --arc-gradient-ai-50: linear-gradient(60deg, light-dark(#fbf2ff, #210125), light-dark(#f4fbff, #00223b));
    --arc-gradient-ai-100: linear-gradient(60deg, light-dark(#efccff, #540160), light-dark(#d2f1fe, #02497d));
    --arc-gradient-ai-200: linear-gradient(60deg, light-dark(#9c15ff, #ad44cb), light-dark(#1eb4fb, #169cfe));
    --arc-gradient-ai-300: linear-gradient(60deg, light-dark(#680278, #ad44cb), light-dark(#0179d0, #71bdfe));
    --arc-gradient-ai-400: linear-gradient(60deg, light-dark(#5d3668, #c778de), light-dark(#36648c, #84daff));
    --arc-gradient-ai-500: linear-gradient(60deg, light-dark(#37003f, #e3a7ff), light-dark(#004273, #b7eaff));
    --arc-gradient-ai-600: linear-gradient(60deg, light-dark(#27002c, #f9ebff), light-dark(#012a48, #c2edff));
    --arc-color-overlay-subtle: light-dark(var(--arc-color-alpha-white-70), var(--arc-color-alpha-black-70));
    --arc-color-overlay-stark: light-dark(var(--arc-color-alpha-black-50), var(--arc-color-alpha-black-50));
    --arc-color-shadow-sm: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-black-60));
    --arc-color-shadow-md: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-50));
    --arc-color-shadow-lg: light-dark(rgb(0 0 0 / 12%), var(--arc-color-alpha-black-40));
    --arc-color-shadow-xl: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-bg-primary: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-100));
    --arc-color-bg-secondary-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-bg-secondary: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-bg-tertiary: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-300));
    --arc-color-bg-mono-inverse: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-mono: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-bg-disabled: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-bg-hover-default: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-stark: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-bg-selected-subtle: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-selected-default: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-200));
    --arc-color-bg-selected-stark: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-400));
    --arc-color-bg-theme-muted: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-5));
    --arc-color-bg-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-bg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-bg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-bg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-success-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-success-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-success-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-warning-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-warning-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-warning-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-critical-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-critical-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-critical-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-bg-info-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-info-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-info-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-brand-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-brand-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-brand-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-neutral-muted: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-neutral-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-25));
    --arc-color-bg-neutral-mid: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-bg-neutral-stark: light-dark(var(--arc-color-light-neutral-600), var(--arc-color-dark-neutral-600));
    --arc-color-bg-neutral-heavy: light-dark(var(--arc-color-light-neutral-800), var(--arc-color-dark-neutral-800));
    --arc-color-bg-orange-muted: light-dark(var(--arc-color-light-orange-50), var(--arc-color-dark-orange-50));
    --arc-color-bg-orange-subtle: light-dark(var(--arc-color-light-orange-100), var(--arc-color-dark-orange-100));
    --arc-color-bg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-bg-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-bg-orange-heavy: light-dark(var(--arc-color-light-orange-800), var(--arc-color-dark-orange-800));
    --arc-color-bg-mint-muted: light-dark(var(--arc-color-light-mint-50), var(--arc-color-dark-mint-50));
    --arc-color-bg-mint-subtle: light-dark(var(--arc-color-light-mint-100), var(--arc-color-dark-mint-100));
    --arc-color-bg-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-bg-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-bg-mint-heavy: light-dark(var(--arc-color-light-mint-800), var(--arc-color-dark-mint-800));
    --arc-color-bg-maroon-muted: light-dark(var(--arc-color-light-maroon-50), var(--arc-color-dark-maroon-50));
    --arc-color-bg-maroon-subtle: light-dark(var(--arc-color-light-maroon-100), var(--arc-color-dark-maroon-100));
    --arc-color-bg-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-bg-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-700));
    --arc-color-bg-maroon-heavy: light-dark(var(--arc-color-light-maroon-800), var(--arc-color-dark-maroon-800));
    --arc-color-bg-blue-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-blue-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-blue-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-purple-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-purple-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-purple-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-green-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-green-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-green-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-yellow-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-yellow-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-yellow-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-red-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-red-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-red-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-fg-primary: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-secondary: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-700));
    --arc-color-fg-on-hover-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-disabled: light-dark(var(--arc-color-alpha-black-40), var(--arc-color-alpha-white-40));
    --arc-color-fg-on-selected-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-mid: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-800));
    --arc-color-fg-on-theme-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-theme-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-mid: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono-inverse: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-success-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-warning-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-warning-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-critical-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-info-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-brand-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-orange-subtle: light-dark(var(--arc-color-light-orange-300), var(--arc-color-dark-orange-400));
    --arc-color-fg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-600));
    --arc-color-fg-orange-stark: light-dark(var(--arc-color-light-orange-700), var(--arc-color-dark-orange-800));
    --arc-color-fg-mint-subtle: light-dark(var(--arc-color-light-mint-300), var(--arc-color-dark-mint-400));
    --arc-color-fg-mint-mid: light-dark(var(--arc-color-light-mint-500), var(--arc-color-dark-mint-600));
    --arc-color-fg-mint-stark: light-dark(var(--arc-color-light-mint-700), var(--arc-color-dark-mint-800));
    --arc-color-fg-maroon-subtle: light-dark(var(--arc-color-light-maroon-300), var(--arc-color-dark-maroon-400));
    --arc-color-fg-maroon-mid: light-dark(var(--arc-color-light-maroon-500), var(--arc-color-dark-maroon-600));
    --arc-color-fg-maroon-stark: light-dark(var(--arc-color-light-maroon-700), var(--arc-color-dark-maroon-800));
    --arc-color-fg-neutral-subtle: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-fg-neutral-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-fg-neutral-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-800));
    --arc-color-fg-blue-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-purple-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-green-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-yellow-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-yellow-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-red-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-theme-muted: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-10));
    --arc-color-fg-theme-subtle: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-white-25));
    --arc-color-fg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-fg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-fg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-brand-heavy: light-dark(var(--arc-color-light-blue-700), var(--arc-color-dark-blue-900));
    --arc-color-border-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-5));
    --arc-color-border-subtle: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-border-mid: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-border-on-stark: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-border-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-selected: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-focus: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-success-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-warning-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-critical-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-info-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-brand-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-border-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-orange-subtle: light-dark(var(--arc-color-light-orange-200), var(--arc-color-dark-orange-200));
    --arc-color-border-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-border-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-border-mint-subtle: light-dark(var(--arc-color-light-mint-200), var(--arc-color-dark-mint-200));
    --arc-color-border-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-border-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-border-maroon-subtle: light-dark(var(--arc-color-light-maroon-200), var(--arc-color-dark-maroon-200));
    --arc-color-border-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-border-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-600));
    --arc-color-border-blue-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-border-purple-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-green-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-yellow-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-red-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-disabled: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-25));
    --arc-color-border-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-border-hover: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-20));
    --arc-color-alpha-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-alpha-subtle: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-alpha-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-alpha-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-60));
    --arc-color-alpha-heavy: light-dark(var(--arc-color-alpha-black-60), var(--arc-color-alpha-white-70));
  }
}
/*
  A NOTE ON USING ARC TOKENS (CSS VARIABLES) --------------------------\u2022

  Tokens with \`--arc-internal-\` prefixes are internal only
    - NOT FOR CONSUMER USE
    - These are System/Internal things and are not intended to be
      access or modified by consumers of the design system.
    - Please reach out to #design-system in Slack for guidance or help,
      or to request something new.


  OVERRIDES, BE CAUTIOUS \u2022 These are available for acute adjustments,
                           but not needed in most cases.
  ---------------------------------------------------------------------\u2022
  --arc-font-size-base          \u2022 Override if your app's \`rem\` size
                                  isn't effectively 16px. For instance,
                                  set to 1 if your \`rem\` is 10px.

  --arc-font-variation-settings \u2022 Research \`font-variation-settings\`
                                  before using this token.

  --arc-font-size-mono          \u2022 Controls size of monospace fonts.
  --arc-line-height-title       \u2022 Various text adjustment overrides...
  --arc-line-height-heading
  --arc-line-height-subheading
  --arc-line-height-body
  --arc-line-height-mono
  --arc-letter-spacing-title
  --arc-letter-spacing-heading
  ---------------------------------------------------------------------\u2022
*/
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-font-size: var(--arc-font-size-base, 0.625);
    --arc-internal-font-body: Inter, system-ui, sans-serif;
    --arc-internal-font-expressive: "GT Walsheim", system-ui, sans-serif;
    --arc-internal-font-mono: "Roboto Mono", monospace;
    --arc-internal-font-size-mono: 0.875em;
    --arc-internal-letter-spacing: -0.015em;
    --arc-internal-font-vs: "opsz" 24;
    --arc-font-family-expressive: var(--arc-internal-font-expressive);
    --arc-font-family-title: var(--arc-internal-font-expressive);
    --arc-font-family-heading: var(--arc-internal-font-expressive);
    --arc-font-family-subheading: var(--arc-internal-font-body);
    --arc-font-family-body: var(--arc-internal-font-body);
    --arc-font-family-mono: var(--arc-internal-font-mono);
    --arc-line-height-tight: 1.2;
    --arc-line-height-standard: 1.4;
    --arc-line-height-loose: 1.6;
    --arc-line-height-title: var(--arc-line-height-tight);
    --arc-line-height-heading: var(--arc-line-height-tight);
    --arc-line-height-subheading: var(--arc-line-height-tight);
    --arc-line-height-body: var(--arc-line-height-standard);
    --arc-line-height-mono: var(--arc-line-height-standard);
    --arc-letter-spacing-heading: var(--arc-internal-letter-spacing);
    --arc-letter-spacing-title: var(--arc-internal-letter-spacing);
    --arc-font-weight-400: 400;
    --arc-font-weight-500: 500;
    --arc-font-weight-600: 600;
    --arc-font-weight-title: var(--arc-font-weight-600);
    --arc-font-weight-heading: var(--arc-font-weight-600);
    --arc-font-weight-subheading: var(--arc-font-weight-600);
    --arc-font-weight-bold: var(--arc-font-weight-600);
    --arc-font-weight-body: var(--arc-font-weight-400);
    --arc-font-weight-normal: var(--arc-font-weight-400);
    --arc-font-size-08: calc(0.8rem * var(--arc-internal-font-size));
    --arc-font-size-10: calc(1rem * var(--arc-internal-font-size));
    --arc-font-size-12: calc(1.2rem * var(--arc-internal-font-size));
    --arc-font-size-14: calc(1.4rem * var(--arc-internal-font-size));
    --arc-font-size-16: calc(1.6rem * var(--arc-internal-font-size));
    --arc-font-size-18: calc(1.8rem * var(--arc-internal-font-size));
    --arc-font-size-20: calc(2rem * var(--arc-internal-font-size));
    --arc-font-size-24: calc(2.4rem * var(--arc-internal-font-size));
    --arc-font-size-28: calc(2.8rem * var(--arc-internal-font-size));
    --arc-font-size-32: calc(3.2rem * var(--arc-internal-font-size));
    --arc-font-size-40: calc(4rem * var(--arc-internal-font-size));
    --arc-font-size-title-lg: var(--arc-font-size-40);
    --arc-font-size-title-md: var(--arc-font-size-32);
    --arc-font-size-title-sm: var(--arc-font-size-28);
    --arc-font-size-heading-lg: var(--arc-font-size-24);
    --arc-font-size-heading-md: var(--arc-font-size-20);
    --arc-font-size-heading-sm: var(--arc-font-size-18);
    --arc-font-size-subheading-lg: var(--arc-font-size-16);
    --arc-font-size-subheading-md: var(--arc-font-size-14);
    --arc-font-size-subheading-sm: var(--arc-font-size-12);
    --arc-font-size-body-lg: var(--arc-font-size-16);
    --arc-font-size-body-md: var(--arc-font-size-14);
    --arc-font-size-body-sm: var(--arc-font-size-12);
    --arc-font-size-body-xs: var(--arc-font-size-10);
    --arc-font-size-mono-lg: var(--arc-font-size-14);
    --arc-font-size-mono-md: var(--arc-font-size-12);
    --arc-font-size-mono-sm: var(--arc-font-size-10);
  }
  [data-arc-theme~=font-family] {
    font-family: var(--arc-font-family-body);
    font-size: var(--arc-font-size-16);
    font-weight: var(--arc-font-weight-body);
    line-height: var(--arc-line-height-body, var(--arc-line-height-standard));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1, h2, h3) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  [data-arc-theme~=font-family] :where(h4, h5, h6) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1) {
    font-size: var(--arc-font-size-24);
  }
  [data-arc-theme~=font-family] :where(h2) {
    font-size: var(--arc-font-size-20);
  }
  [data-arc-theme~=font-family] :where(h3) {
    font-size: var(--arc-font-size-18);
  }
  [data-arc-theme~=font-family] :where(h4) {
    font-size: var(--arc-font-size-16);
  }
  [data-arc-theme~=font-family] :where(h5) {
    font-size: var(--arc-font-size-14);
  }
  [data-arc-theme~=font-family] :where(h6) {
    font-size: var(--arc-font-size-12);
  }
  [data-arc-theme~=font-family] :where(b, strong) {
    font-weight: var(--arc-font-weight-600);
  }
  [data-arc-theme~=font-family] :where(i, em) {
    font-style: italic;
  }
  [data-arc-theme~=font-family] :where(u) {
    text-decoration: underline;
  }
  [data-arc-theme~=font-family] :where(pre, code) {
    font-family: var(--arc-font-family-mono);
    font-size: var(--arc-font-size-mono, var(--arc-internal-font-size-mono));
  }
}
@layer arc-utils {
  .arc-font-title-lg {
    font-size: var(--arc-font-size-40);
  }
  .arc-font-title-md {
    font-size: var(--arc-font-size-32);
  }
  .arc-font-title-sm {
    font-size: var(--arc-font-size-28);
  }
  :is(.arc-font-title, .arc-font-title-lg, .arc-font-title-md, .arc-font-title-sm) {
    font-family: var(--arc-font-family-title);
    font-weight: var(--arc-font-weight-title);
    letter-spacing: var(--arc-letter-spacing-title);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-title));
  }
  .arc-font-heading-lg {
    font-size: var(--arc-font-size-24);
  }
  .arc-font-heading-md {
    font-size: var(--arc-font-size-20);
  }
  .arc-font-heading-sm {
    font-size: var(--arc-font-size-18);
  }
  :is(.arc-font-heading, .arc-font-heading-lg, .arc-font-heading-md, .arc-font-heading-sm) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  .arc-font-subheading-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-subheading-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-subheading-sm {
    font-size: var(--arc-font-size-12);
  }
  :is(.arc-font-subheading, .arc-font-subheading-lg, .arc-font-subheading-md, .arc-font-subheading-sm) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-body-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-body-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-body-sm {
    font-size: var(--arc-font-size-12);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body-xs) {
    font-size: var(--arc-font-size-10);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body, .arc-font-body-lg, .arc-font-body-md, .arc-font-body-sm) {
    font-family: var(--arc-font-family-body);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-body));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-mono-lg {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-mono-md {
    font-size: var(--arc-font-size-12);
  }
  .arc-font-mono-sm {
    font-size: var(--arc-font-size-10);
  }
  :is(.arc-font-mono, .arc-font-mono-lg, .arc-font-mono-md, .arc-font-mono-sm) {
    font-family: var(--arc-font-family-mono);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-mono));
  }
  .arc-line-height-loose {
    --arc-internal-line-height: var(--arc-line-height-loose);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-standard {
    --arc-internal-line-height: var(--arc-line-height-standard);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-tight {
    --arc-internal-line-height: var(--arc-line-height-tight);
    line-height: var(--arc-internal-line-height);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-space: 0.8rem * var(--arc-internal-font-size);
    --arc-internal-size: 0.8rem * var(--arc-internal-font-size);
    --arc-space-0: 0;
    --arc-space-0-25: calc(0.25 * var(--arc-internal-space));
    --arc-space-0-5: calc(0.5 * var(--arc-internal-space));
    --arc-space-0-75: calc(0.75 * var(--arc-internal-space));
    --arc-space-1: calc(var(--arc-internal-space));
    --arc-space-1-25: calc(1.25 * var(--arc-internal-space));
    --arc-space-1-5: calc(1.5 * var(--arc-internal-space));
    --arc-space-1-75: calc(1.75 * var(--arc-internal-space));
    --arc-space-2: calc(2 * var(--arc-internal-space));
    --arc-space-2-5: calc(2.5 * var(--arc-internal-space));
    --arc-space-3: calc(3 * var(--arc-internal-space));
    --arc-space-4: calc(4 * var(--arc-internal-space));
    --arc-space-5: calc(5 * var(--arc-internal-space));
    --arc-space-6: calc(6 * var(--arc-internal-space));
    --arc-space-7: calc(7 * var(--arc-internal-space));
    --arc-space-8: calc(8 * var(--arc-internal-space));
    --arc-space-9: calc(9 * var(--arc-internal-space));
    --arc-space-10: calc(10 * var(--arc-internal-space));
    --arc-space-11: calc(11 * var(--arc-internal-space));
    --arc-space-12: calc(12 * var(--arc-internal-space));
    --arc-size-0: 0;
    --arc-size-0-25: calc(0.25 * var(--arc-internal-size));
    --arc-size-0-5: calc(0.5 * var(--arc-internal-size));
    --arc-size-0-75: calc(0.75 * var(--arc-internal-size));
    --arc-size-1: calc(var(--arc-internal-size));
    --arc-size-1-25: calc(1.25 * var(--arc-internal-size));
    --arc-size-1-5: calc(1.5 * var(--arc-internal-size));
    --arc-size-1-75: calc(1.75 * var(--arc-internal-size));
    --arc-size-2: calc(2 * var(--arc-internal-size));
    --arc-size-2-25: calc(2.25 * var(--arc-internal-size));
    --arc-size-2-5: calc(2.5 * var(--arc-internal-size));
    --arc-size-2-75: calc(2.75 * var(--arc-internal-size));
    --arc-size-3: calc(3 * var(--arc-internal-size));
    --arc-size-3-25: calc(3.25 * var(--arc-internal-size));
    --arc-size-3-5: calc(3.5 * var(--arc-internal-size));
    --arc-size-3-75: calc(3.75 * var(--arc-internal-size));
    --arc-size-4: calc(4 * var(--arc-internal-size));
    --arc-size-4-25: calc(4.25 * var(--arc-internal-size));
    --arc-size-4-5: calc(4.5 * var(--arc-internal-size));
    --arc-size-4-75: calc(4.75 * var(--arc-internal-size));
    --arc-size-5: calc(5 * var(--arc-internal-size));
    --arc-size-6: calc(6 * var(--arc-internal-size));
    --arc-size-7: calc(7 * var(--arc-internal-size));
    --arc-size-8: calc(8 * var(--arc-internal-size));
    --arc-size-9: calc(9 * var(--arc-internal-size));
    --arc-size-10: calc(10 * var(--arc-internal-size));
    --arc-size-11: calc(11 * var(--arc-internal-size));
    --arc-size-12: calc(12 * var(--arc-internal-size));
    --arc-size-13: calc(13 * var(--arc-internal-size));
    --arc-size-14: calc(14 * var(--arc-internal-size));
    --arc-size-15: calc(15 * var(--arc-internal-size));
    --arc-size-16: calc(16 * var(--arc-internal-size));
    --arc-size-17: calc(17 * var(--arc-internal-size));
    --arc-size-18: calc(18 * var(--arc-internal-size));
    --arc-size-19: calc(19 * var(--arc-internal-size));
    --arc-size-20: calc(20 * var(--arc-internal-size));
    --arc\u2022space\u202216m: min(-16px, -1rem);
    --arc\u2022space\u202214m: min(-14px, -0.875rem);
    --arc\u2022space\u202212m: min(-12px, -0.75rem);
    --arc\u2022space\u202210m: min(-10px, -0.625rem);
    --arc\u2022space\u20228m: min(-8px, -0.5rem);
    --arc\u2022space\u20226m: min(-6px, -0.375rem);
    --arc\u2022space\u20225m: min(-5px, -0.3125rem);
    --arc\u2022space\u20224m: min(-4px, -0.25rem);
    --arc\u2022space\u20223m: min(-3px, -0.1875rem);
    --arc\u2022space\u20222m: min(-2px, -0.125rem);
    --arc\u2022space\u20221m: min(-1px, -0.0625rem);
    --arc\u2022space\u20220: 0px;
    --arc\u2022space\u20221: max(1px, 0.0625rem);
    --arc\u2022space\u20222: max(2px, 0.125rem);
    --arc\u2022space\u20223: max(3px, 0.1875rem);
    --arc\u2022space\u20224: max(4px, 0.25rem);
    --arc\u2022space\u20225: max(5px, 0.3125rem);
    --arc\u2022space\u20226: max(6px, 0.375rem);
    --arc\u2022space\u20228: max(8px, 0.5rem);
    --arc\u2022space\u202210: max(10px, 0.625rem);
    --arc\u2022space\u202212: max(12px, 0.75rem);
    --arc\u2022space\u202214: max(14px, 0.875rem);
    --arc\u2022space\u202216: max(16px, 1rem);
    --arc\u2022space\u202218: max(18px, 1.125rem);
    --arc\u2022space\u202220: max(20px, 1.25rem);
    --arc\u2022space\u202224: max(24px, 1.5rem);
    --arc\u2022space\u202232: max(32px, 2rem);
    --arc\u2022space\u202240: max(40px, 2.5rem);
    --arc\u2022space\u202248: max(48px, 3rem);
    --arc\u2022space\u202256: max(56px, 3.5rem);
    --arc\u2022space\u202264: max(64px, 4rem);
    --arc\u2022space\u202272: max(72px, 4.5rem);
    --arc\u2022space\u202280: max(80px, 5rem);
    --arc\u2022space\u202288: max(88px, 5.5rem);
    --arc\u2022space\u202296: max(96px, 6rem);
    --arc\u2022size\u202216m: min(-16px, -1rem);
    --arc\u2022size\u202212m: min(-12px, -0.75rem);
    --arc\u2022size\u202210m: min(-10px, -0.625rem);
    --arc\u2022size\u20228m: min(-8px, -0.5rem);
    --arc\u2022size\u20226m: min(-6px, -0.375rem);
    --arc\u2022size\u20224m: min(-4px, -0.25rem);
    --arc\u2022size\u20223m: min(-3px, -0.1875rem);
    --arc\u2022size\u20222m: min(-2px, -0.125rem);
    --arc\u2022size\u20221m: min(-1px, -0.0625rem);
    --arc\u2022size\u20220: 0px;
    --arc\u2022size\u20221: max(1px, 0.0625rem);
    --arc\u2022size\u20222: max(2px, 0.125rem);
    --arc\u2022size\u20223: max(3px, 0.1875rem);
    --arc\u2022size\u20224: max(4px, 0.25rem);
    --arc\u2022size\u20225: max(5px, 0.3125rem);
    --arc\u2022size\u20226: max(6px, 0.375rem);
    --arc\u2022size\u20228: max(8px, 0.5rem);
    --arc\u2022size\u202210: max(10px, 0.625rem);
    --arc\u2022size\u202212: max(12px, 0.75rem);
    --arc\u2022size\u202214: max(14px, 0.875rem);
    --arc\u2022size\u202215: max(15px, 0.9375rem);
    --arc\u2022size\u202216: max(16px, 1rem);
    --arc\u2022size\u202218: max(18px, 1.125rem);
    --arc\u2022size\u202220: max(20px, 1.25rem);
    --arc\u2022size\u202222: max(22px, 1.375rem);
    --arc\u2022size\u202224: max(24px, 1.5rem);
    --arc\u2022size\u202225: max(25px, 1.5625rem);
    --arc\u2022size\u202226: max(26px, 1.625rem);
    --arc\u2022size\u202228: max(28px, 1.75rem);
    --arc\u2022size\u202230: max(30px, 1.875rem);
    --arc\u2022size\u202232: max(32px, 2rem);
    --arc\u2022size\u202234: max(34px, 2.125rem);
    --arc\u2022size\u202236: max(36px, 2.25rem);
    --arc\u2022size\u202238: max(38px, 2.375rem);
    --arc\u2022size\u202240: max(40px, 2.5rem);
    --arc\u2022size\u202242: max(42px, 2.625rem);
    --arc\u2022size\u202244: max(44px, 2.75rem);
    --arc\u2022size\u202246: max(46px, 2.875rem);
    --arc\u2022size\u202248: max(48px, 3rem);
    --arc\u2022size\u202250: max(50px, 3.125rem);
    --arc\u2022size\u202252: max(52px, 3.25rem);
    --arc\u2022size\u202254: max(54px, 3.375rem);
    --arc\u2022size\u202256: max(56px, 3.5rem);
    --arc\u2022size\u202258: max(58px, 3.625rem);
    --arc\u2022size\u202260: max(60px, 3.75rem);
    --arc\u2022size\u202264: max(64px, 4rem);
    --arc\u2022size\u202268: max(68px, 4.25rem);
    --arc\u2022size\u202272: max(72px, 4.5rem);
    --arc\u2022size\u202276: max(76px, 4.75rem);
    --arc\u2022size\u202280: max(80px, 5rem);
    --arc\u2022size\u202288: max(88px, 5.5rem);
    --arc\u2022size\u202296: max(96px, 6rem);
    --arc\u2022size\u2022104: max(104px, 6.5rem);
    --arc\u2022size\u2022112: max(112px, 7rem);
    --arc\u2022size\u2022120: max(120px, 7.5rem);
    --arc\u2022size\u2022128: max(128px, 8rem);
    --arc\u2022size\u2022136: max(136px, 8.5rem);
    --arc\u2022size\u2022144: max(144px, 9rem);
    --arc\u2022size\u2022152: max(152px, 9.5rem);
    --arc\u2022size\u2022160: max(160px, 10rem);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-alpha-0: 0%;
    --arc-alpha-3: 3%;
    --arc-alpha-5: 5%;
    --arc-alpha-10: 10%;
    --arc-alpha-20: 20%;
    --arc-alpha-25: 25%;
    --arc-alpha-30: 30%;
    --arc-alpha-40: 40%;
    --arc-alpha-50: 50%;
    --arc-alpha-60: 60%;
    --arc-alpha-70: 70%;
    --arc-alpha-80: 80%;
    --arc-alpha-90: 90%;
    --arc-alpha-95: 95%;
    --arc-alpha-100: 100%;
    --arc-border-radius-none: 0px;
    --arc-border-radius-sm: max(2px, 0.125em);
    --arc-border-radius-md: max(4px, 0.25em);
    --arc-border-radius-lg: max(8px, 0.5em);
    --arc-border-radius-xl: max(16px, 1em);
    --arc-border-radius-circle: 50%;
    --arc-border-radius-pill: 100vh;
    --arc-border-width-none: 0px;
    --arc-border-width-sm: max(1px, 0.0625em);
    --arc-border-width-md: max(2px, 0.125em);
    --arc-border-width-lg: max(3px, 0.1875em);
    --arc-border-width-xl: max(4px, 0.25em);
    /* dynamic shadow tokens */
    --arc-shadow-none: none;
    --arc-shadow-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-shadow-sm);
    --arc-shadow-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-shadow-md);
    --arc-shadow-lg: 0 max(6px, 0.375em) max(18px, 1.125em) 0 var(--arc-color-shadow-lg);
    --arc-shadow-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-shadow-xl);
    /* static light shadow tokens (primitive alpha colors) */
    --arc-shadow-light-none: none;
    --arc-shadow-light-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-25);
    --arc-shadow-light-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-lg: 0 max(6px, 0.375em) max(18px, 1.125em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-15);
    /* static dark shadow tokens (primitive alpha colors) */
    --arc-shadow-dark-none: none;
    --arc-shadow-dark-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-60);
    --arc-shadow-dark-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-50);
    --arc-shadow-dark-lg: 0 max(6px, 0.375em) max(18px, 1.125em) 0 var(--arc-color-alpha-black-40);
    --arc-shadow-dark-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-40);
    /* surface shadow tokens */
    --arc-surface-raised-shadow: var(--arc-shadow-md);
    --arc-surface-floating-shadow: var(--arc-shadow-lg);
  }
}
@layer arc-utils {
  /* Gradients -----------------------------------------------------\u2022 */
  [arc-gradient] {
    background-clip: text;
    color: transparent;
    /** @note: line-height mitigation strategy for gradient icons
     * stops icon geometry clipping issues
     */
  }
  [arc-gradient][arc-icon] {
    --arc-icon-height: 1.5lh;
    --arc-icon-max-height: none;
    --arc-icon-margin-block: -0.5lh;
  }
  :is([arc-gradient], [arc-gradient=ai], [arc-gradient=ai-200]) {
    background-image: var(--arc-gradient-ai-200);
  }
  [arc-gradient=ai-50] {
    background-image: var(--arc-gradient-ai-50);
  }
  [arc-gradient=ai-100] {
    background-image: var(--arc-gradient-ai-100);
  }
  [arc-gradient=ai-300] {
    background-image: var(--arc-gradient-ai-300);
  }
  [arc-gradient=ai-400] {
    background-image: var(--arc-gradient-ai-400);
  }
  [arc-gradient=ai-500] {
    background-image: var(--arc-gradient-ai-500);
  }
  [arc-gradient=ai-600] {
    background-image: var(--arc-gradient-ai-600);
  }
  /* Shadows -------------------------------------------------------\u2022 */
  [arc-shadow=sm] {
    box-shadow: var(--arc-shadow-sm);
  }
  [arc-shadow=md] {
    box-shadow: var(--arc-shadow-md);
  }
  [arc-shadow=lg] {
    box-shadow: var(--arc-shadow-lg);
  }
  [arc-shadow=xl] {
    box-shadow: var(--arc-shadow-xl);
  }
  /* Light Shadows -------------------------------------------------\u2022 */
  [arc-shadow=light-sm] {
    box-shadow: var(--arc-shadow-light-sm);
  }
  [arc-shadow=light-md] {
    box-shadow: var(--arc-shadow-light-md);
  }
  [arc-shadow=light-lg] {
    box-shadow: var(--arc-shadow-light-lg);
  }
  [arc-shadow=light-xl] {
    box-shadow: var(--arc-shadow-light-xl);
  }
  /* Dark Shadows --------------------------------------------------\u2022 */
  [arc-shadow=dark-sm] {
    box-shadow: var(--arc-shadow-dark-sm);
  }
  [arc-shadow=dark-md] {
    box-shadow: var(--arc-shadow-dark-md);
  }
  [arc-shadow=dark-lg] {
    box-shadow: var(--arc-shadow-dark-lg);
  }
  [arc-shadow=dark-xl] {
    box-shadow: var(--arc-shadow-dark-xl);
  }
  /* Surfaces ------------------------------------------------------\u2022 */
  [arc-surface=primary] {
    color: var(--arc-surface-primary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-primary-background, var(--arc-color-bg-primary));
  }
  [arc-surface=secondary] {
    color: var(--arc-surface-secondary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-secondary-background, var(--arc-color-bg-secondary));
  }
  [arc-surface=inset] {
    color: var(--arc-surface-inset-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-inset-background, var(--arc-color-bg-tertiary));
  }
  [arc-surface=raised] {
    color: var(--arc-surface-raised-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-raised-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-raised-box-shadow, var(--arc-surface-raised-shadow));
    z-index: var(--arc-surface-raised-z-index, 1);
  }
  [arc-surface=floating] {
    color: var(--arc-surface-floating-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-floating-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-floating-box-shadow, var(--arc-surface-floating-shadow));
    z-index: var(--arc-surface-floating-z-index, 2);
  }
  /* Scheme (proximity via inheritance) ----------------------------\u2022 */
  :root:not([arc-scheme]) {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=light] {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
    --arc\u2022color\u2022scheme\u2022inverse\u2022nested: light;
  }
  [arc-scheme=dark] {
    --arc\u2022color\u2022scheme: dark;
    --arc\u2022color\u2022scheme\u2022inverse: light;
    --arc\u2022color\u2022scheme\u2022inverse\u2022nested: dark;
  }
  [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse);
  }
  [arc-scheme=inverse] [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse\u2022nested);
  }
  :root:not([arc-scheme]),
  [arc-scheme] {
    color-scheme: var(--arc\u2022color\u2022scheme, light);
  }
}
:root,
::backdrop {
  /* @deprecated background variables - please update all instances */
  --arc-color-alpha-white-03: var(--arc-color-alpha-white-3);
  --arc-color-alpha-white-05: var(--arc-color-alpha-white-5);
  --arc-color-alpha-black-03: var(--arc-color-alpha-black-3);
  --arc-color-alpha-black-05: var(--arc-color-alpha-black-5);
  --arc-color-neutral-000: var(--arc-color-light-neutral-0);
  --arc-color-neutral-050: var(--arc-color-light-neutral-50);
  --arc-color-neutral-100: var(--arc-color-light-neutral-100);
  --arc-color-neutral-200: var(--arc-color-light-neutral-200);
  --arc-color-neutral-300: var(--arc-color-light-neutral-300);
  --arc-color-neutral-400: var(--arc-color-light-neutral-400);
  --arc-color-neutral-500: var(--arc-color-light-neutral-500);
  --arc-color-neutral-600: var(--arc-color-light-neutral-600);
  --arc-color-neutral-700: var(--arc-color-light-neutral-700);
  --arc-color-neutral-800: var(--arc-color-light-neutral-800);
  --arc-color-neutral-900: var(--arc-color-light-neutral-900);
  --arc-color-blue-050: var(--arc-color-light-blue-50);
  --arc-color-blue-100: var(--arc-color-light-blue-100);
  --arc-color-blue-200: var(--arc-color-light-blue-200);
  --arc-color-blue-300: var(--arc-color-light-blue-300);
  --arc-color-blue-400: var(--arc-color-light-blue-400);
  --arc-color-blue-500: var(--arc-color-light-blue-500);
  --arc-color-blue-600: var(--arc-color-light-blue-600);
  --arc-color-blue-700: var(--arc-color-light-blue-700);
  --arc-color-blue-800: var(--arc-color-light-blue-800);
  --arc-color-blue-900: var(--arc-color-light-blue-900);
  --arc-color-purple-050: var(--arc-color-light-purple-50);
  --arc-color-purple-100: var(--arc-color-light-purple-100);
  --arc-color-purple-200: var(--arc-color-light-purple-200);
  --arc-color-purple-300: var(--arc-color-light-purple-300);
  --arc-color-purple-400: var(--arc-color-light-purple-400);
  --arc-color-purple-500: var(--arc-color-light-purple-500);
  --arc-color-purple-600: var(--arc-color-light-purple-600);
  --arc-color-purple-700: var(--arc-color-light-purple-700);
  --arc-color-purple-800: var(--arc-color-light-purple-800);
  --arc-color-purple-900: var(--arc-color-light-purple-900);
  --arc-color-maroon-050: var(--arc-color-light-maroon-50);
  --arc-color-maroon-100: var(--arc-color-light-maroon-100);
  --arc-color-maroon-200: var(--arc-color-light-maroon-200);
  --arc-color-maroon-300: var(--arc-color-light-maroon-300);
  --arc-color-maroon-400: var(--arc-color-light-maroon-400);
  --arc-color-maroon-500: var(--arc-color-light-maroon-500);
  --arc-color-maroon-600: var(--arc-color-light-maroon-600);
  --arc-color-maroon-700: var(--arc-color-light-maroon-700);
  --arc-color-maroon-800: var(--arc-color-light-maroon-800);
  --arc-color-maroon-900: var(--arc-color-light-maroon-900);
  --arc-color-red-050: var(--arc-color-light-red-50);
  --arc-color-red-100: var(--arc-color-light-red-100);
  --arc-color-red-200: var(--arc-color-light-red-200);
  --arc-color-red-300: var(--arc-color-light-red-300);
  --arc-color-red-400: var(--arc-color-light-red-400);
  --arc-color-red-500: var(--arc-color-light-red-500);
  --arc-color-red-600: var(--arc-color-light-red-600);
  --arc-color-red-700: var(--arc-color-light-red-700);
  --arc-color-red-800: var(--arc-color-light-red-800);
  --arc-color-red-900: var(--arc-color-light-red-900);
  --arc-color-orange-050: var(--arc-color-light-orange-50);
  --arc-color-orange-100: var(--arc-color-light-orange-100);
  --arc-color-orange-200: var(--arc-color-light-orange-200);
  --arc-color-orange-300: var(--arc-color-light-orange-300);
  --arc-color-orange-400: var(--arc-color-light-orange-400);
  --arc-color-orange-500: var(--arc-color-light-orange-500);
  --arc-color-orange-600: var(--arc-color-light-orange-600);
  --arc-color-orange-700: var(--arc-color-light-orange-700);
  --arc-color-orange-800: var(--arc-color-light-orange-800);
  --arc-color-orange-900: var(--arc-color-light-orange-900);
  --arc-color-yellow-050: var(--arc-color-light-yellow-50);
  --arc-color-yellow-100: var(--arc-color-light-yellow-100);
  --arc-color-yellow-200: var(--arc-color-light-yellow-200);
  --arc-color-yellow-300: var(--arc-color-light-yellow-300);
  --arc-color-yellow-400: var(--arc-color-light-yellow-400);
  --arc-color-yellow-500: var(--arc-color-light-yellow-500);
  --arc-color-yellow-600: var(--arc-color-light-yellow-600);
  --arc-color-yellow-700: var(--arc-color-light-yellow-700);
  --arc-color-yellow-800: var(--arc-color-light-yellow-800);
  --arc-color-yellow-900: var(--arc-color-light-yellow-900);
  --arc-color-green-050: var(--arc-color-light-green-50);
  --arc-color-green-100: var(--arc-color-light-green-100);
  --arc-color-green-200: var(--arc-color-light-green-200);
  --arc-color-green-300: var(--arc-color-light-green-300);
  --arc-color-green-400: var(--arc-color-light-green-400);
  --arc-color-green-500: var(--arc-color-light-green-500);
  --arc-color-green-600: var(--arc-color-light-green-600);
  --arc-color-green-700: var(--arc-color-light-green-700);
  --arc-color-green-800: var(--arc-color-light-green-800);
  --arc-color-green-900: var(--arc-color-light-green-900);
  --arc-color-mint-050: var(--arc-color-light-mint-50);
  --arc-color-mint-100: var(--arc-color-light-mint-100);
  --arc-color-mint-200: var(--arc-color-light-mint-200);
  --arc-color-mint-300: var(--arc-color-light-mint-300);
  --arc-color-mint-400: var(--arc-color-light-mint-400);
  --arc-color-mint-500: var(--arc-color-light-mint-500);
  --arc-color-mint-600: var(--arc-color-light-mint-600);
  --arc-color-mint-700: var(--arc-color-light-mint-700);
  --arc-color-mint-800: var(--arc-color-light-mint-800);
  --arc-color-mint-900: var(--arc-color-light-mint-900);
  --arc-gradient-ai-050: var(--arc-gradient-ai-50);
  --arc-color-ai-purple-050: #fbf2ff;
  --arc-color-ai-purple-100: #efccff;
  --arc-color-ai-purple-200: #9c15ff;
  --arc-color-ai-purple-300: #680278;
  --arc-color-ai-purple-400: #5d3668;
  --arc-color-ai-purple-500: #37003f;
  --arc-color-ai-purple-600: #27002c;
  --arc-color-ai-blue-050: #f4fbff;
  --arc-color-ai-blue-100: #d2f1fe;
  --arc-color-ai-blue-200: #1eb4fb;
  --arc-color-ai-blue-300: #0179d0;
  --arc-color-ai-blue-400: #36648c;
  --arc-color-ai-blue-500: #004273;
  --arc-color-ai-blue-600: #012a48;
  /* @deprecated background variables - please update all instances */
  --arc-color-background-primary: var(--arc-color-bg-primary);
  --arc-color-background-primary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-primary-selected-subtle: var(--arc-color-bg-selected-subtle);
  --arc-color-background-primary-selected: var(--arc-color-bg-selected-default);
  --arc-color-background-primary-selected-stark: var(--arc-color-bg-selected-stark);
  --arc-color-background-secondary: var(--arc-color-bg-secondary);
  --arc-color-background-secondary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-tertiary: var(--arc-color-bg-tertiary);
  --arc-color-background-inverse: var(--arc-color-light-neutral-1000);
  --arc-color-overlay-dark: var(--arc-color-overlay-stark);
  --arc-color-overlay-light: var(--arc-color-overlay-subtle);
  /* @deprecated foreground variables - please update all instances */
  --arc-color-text-primary: var(--arc-color-fg-primary);
  --arc-color-icon-primary: var(--arc-color-fg-primary);
  --arc-color-text-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-icon-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-text-disabled: var(--arc-color-fg-disabled);
  --arc-color-icon-disabled: var(--arc-color-fg-disabled);
  --arc-color-text-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-icon-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-text-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-icon-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-text-info: var(--arc-color-fg-info-stark);
  --arc-color-icon-info: var(--arc-color-fg-info-stark);
  --arc-color-text-brand: var(--arc-color-fg-brand-stark);
  --arc-color-icon-brand: var(--arc-color-fg-brand-mid);
  --arc-color-text-success: var(--arc-color-fg-success-stark);
  --arc-color-icon-success: var(--arc-color-fg-success-stark);
  --arc-color-text-warning: var(--arc-color-fg-warning-stark);
  --arc-color-icon-warning: var(--arc-color-fg-warning-stark);
  --arc-color-text-critical: var(--arc-color-fg-critical-mid);
  --arc-color-icon-critical: var(--arc-color-fg-critical-mid);
  /* @deprecated border variable - please update all instances */
  --arc-color-border-orange: var(--arc-color-border-orange-mid);
  --arc-color-border-mint: var(--arc-color-border-mint-mid);
  --arc-color-border-maroon: var(--arc-color-border-maroon-mid);
  --arc-color-border-standard: var(--arc-color-border-mid);
  --arc-color-border-full: var(--arc-color-border-heavy);
  --arc-color-border-focus-inverse: var(--arc-color-light-blue-300);
  --arc-border-width-standard: var(--arc-border-width-sm);
  /* @deprecated color variables - please update all instances */
  --arc-color-info-light: var(--arc-color-bg-info-muted);
  --arc-color-info-medium: var(--arc-color-bg-info-subtle);
  --arc-color-info-root: var(--arc-color-bg-info-mid);
  --arc-color-info-dark: var(--arc-color-bg-info-stark);
  --arc-color-info-heavy: var(--arc-color-bg-info-heavy);
  --arc-color-border-info: var(--arc-color-border-info-mid);
  --arc-color-brand-light: var(--arc-color-bg-brand-muted);
  --arc-color-brand-medium: var(--arc-color-bg-brand-subtle);
  --arc-color-brand-root: var(--arc-color-bg-brand-mid);
  --arc-color-brand-dark: var(--arc-color-bg-brand-stark);
  --arc-color-brand-heavy: var(--arc-color-bg-brand-heavy);
  --arc-color-border-brand: var(--arc-color-border-brand-mid);
  --arc-color-success-light: var(--arc-color-bg-success-muted);
  --arc-color-success-medium: var(--arc-color-bg-success-subtle);
  --arc-color-success-root: var(--arc-color-bg-success-mid);
  --arc-color-success-dark: var(--arc-color-bg-success-stark);
  --arc-color-success-heavy: var(--arc-color-bg-success-heavy);
  --arc-color-border-success: var(--arc-color-border-success-mid);
  --arc-color-warning-light: var(--arc-color-bg-warning-muted);
  --arc-color-warning-medium: var(--arc-color-bg-warning-subtle);
  --arc-color-warning-root: var(--arc-color-bg-warning-mid);
  --arc-color-warning-dark: var(--arc-color-bg-warning-stark);
  --arc-color-warning-heavy: var(--arc-color-bg-warning-heavy);
  --arc-color-border-warning: var(--arc-color-border-warning-mid);
  --arc-color-critical-light: var(--arc-color-bg-critical-muted);
  --arc-color-critical-medium: var(--arc-color-bg-critical-subtle);
  --arc-color-critical-root: var(--arc-color-bg-critical-mid);
  --arc-color-critical-dark: var(--arc-color-bg-critical-stark);
  --arc-color-critical-heavy: var(--arc-color-bg-critical-heavy);
  --arc-color-border-critical: var(--arc-color-border-critical-mid);
  /** @deprecated - old alpha leading zeros */
  --arc-alpha-03: var(--arc-alpha-3);
  --arc-alpha-05: var(--arc-alpha-5);
}

/*# sourceMappingURL=theme.css.map */
`,es={};function Cr(r,e){if(typeof document<"u"&&e?.styleSheet){const a=es[r];es[r]=e.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(t=>t!==a),e.styleSheet]}}function gv(r){const e=Object.values(es),a=document.adoptedStyleSheets.filter(t=>e.includes(t));if(r.adoptedStyleSheets){const t=a.filter(o=>!r.adoptedStyleSheets.includes(o));r.adoptedStyleSheets=[...r.adoptedStyleSheets,...t]}}function vv(r){if(typeof CSSStyleSheet<"u"){const e=new CSSStyleSheet;e.replaceSync(pv),r.adoptedStyleSheets&&(r.adoptedStyleSheets.includes(e)||(r.adoptedStyleSheets=[...r.adoptedStyleSheets,e]))}}const qt=r=>typeof r=="string"?r:typeof r=="number"?r.toString():Array.isArray(r)?r.map(qt).join(""):(0,l.isValidElement)(r)?qt(r.props.children):"",gu={},fv=(r="id")=>{const e=(gu[r]??0)+1;return gu[r]=e,`${r}-${e}`},Nr=(r,e="id")=>{const a=(0,l.useId)();return r??`${e}-${a}`},wt=r=>typeof r=="string",fc=r=>typeof r=="number",vu=r=>r!==null&&typeof r=="object",mv=["#9c15ff","#1eb4fb"],fu=({angle:r=60,width:e,height:a})=>{const t=(r-90)*Math.PI/180,o=e/2,n=a/2,c=Math.sqrt(e*e+a*a)/2,d=Math.cos(t)*c,u=Math.sin(t)*c;return{x1:o-d,y1:n-u,x2:o+d,y2:n+u}},bv=(r,e)=>{const a=wt(r)?r:r.color,t=wt(r)?e.toString():r.offset?.toString()??e.toString();return(0,i.jsx)("stop",{offset:t,stopColor:a},`${a}-${e}`)},mu=({id:r,angle:e=60,width:a,height:t,stops:o=mv})=>{const{x1:n,y1:c,x2:d,y2:u}=fu({angle:e,width:a,height:t});return(0,i.jsx)("defs",{children:(0,i.jsx)("linearGradient",{gradientUnits:"userSpaceOnUse",id:r,x1:n,x2:d,y1:c,y2:u,children:o.map(bv)})})},as=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),ts=r=>{const e=Nr(void 0,"arc-ai-gradient");return(0,i.jsxs)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:`url(#${e})`}),mu({id:e,width:640,height:640,stops:["var(--arc-color-logo-ai-purple, #9c15ff)","var(--arc-color-logo-ai-blue, #1eb4fb)"]})]})},os=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),ns=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),cs=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),is=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),ss=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),ls=r=>(0,i.jsx)("svg",{...r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var $v;const bu="fa-width-auto",ds="fa-fw",us="arc-fw",hs="arc-aw",yv=new RegExp(`(${bu}|${ds}|${us}|${hs})`,"gi"),xv=r=>typeof r=="number"?`calc(${r/10}rem * var(--arc-internal-font-size))`:r,wv={"arc-svg logo-articulate":(0,i.jsx)(as,{}),"arc-svg product-ai":(0,i.jsx)(ts,{}),"arc-svg product-peek":(0,i.jsx)(os,{}),"arc-svg product-reach":(0,i.jsx)(ns,{}),"arc-svg product-review":(0,i.jsx)(cs,{}),"arc-svg product-rise":(0,i.jsx)(is,{}),"arc-svg product-storyline":(0,i.jsx)(ss,{}),"arc-svg product-studio":(0,i.jsx)(ls,{})},x2=r=>r&&r.length>0&&r?.includes("arc-svg")?wv[r]:$v("span",{className:r}),$u=r=>{const e=r.includes(bu),a=r.includes(ds),t=r.includes(us),o=r.includes(hs);return{hasFaAutoWidth:e,hasFaFixedWidth:a,hasArcFixedWidth:t,hasArcAutoWidth:o}},kv=r=>((0,l.isValidElement)(r)&&r.type===zr?r.props.icon:r)??void 0,Av=r=>r.replace(yv,"").trim(),Cv=r=>{const{hasFaFixedWidth:e,hasArcFixedWidth:a,hasArcAutoWidth:t}=$u(r);return!e&&!a&&!t?`${r} ${hs}`:r},Sv=r=>r&&`${Av(r)} ${us}`,yu=(r,e)=>{if(typeof r=="string")return e(r);if((0,l.isValidElement)(r)&&r.type===zr){const a=r.props.icon;return typeof a=="string"?(0,l.cloneElement)(r,{icon:e(a)}):r}return r},ps=r=>yu(r,Cv),xu=r=>yu(r,Sv),zv=r=>{const e=kv(r);if(typeof e!="string")return e;const{hasArcFixedWidth:a,hasFaFixedWidth:t}=$u(e);return a&&!t?`${e} ${ds}`:e},Ev=s`--arc•icon`,Ga=s`${Ev}•fg`,_v=s`
@layer arc-components {

[arc-icon] {
  ${Ga}: currentcolor;

  color: var(--arc-icon-color, var(${Ga}));
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    /* hand-off to actual interior FontAwesome icon node */
    --fa-display: var(--arc-icon-display, inline-flex);
    --fa-line-height: var(--arc-icon-fa-line-height, 1);

    flex: none;
    align-self: var(--arc-icon-align-self, unset);
    display: var(--fa-display);
    align-items: center;
    justify-content: center;
    height: var(--arc-icon-height, auto);
    max-height: var(--arc-icon-max-height, none);
    margin-block: var(--arc-icon-margin-block, unset);
  }

  &:has(svg) {
    align-self: var(--arc-icon-svg-align-self, center);

    svg {
      font-size: var(--arc-icon-size, 1em);
      width: 1em;
      height: 1em;
      fill: var(--arc-icon-color, var(${Ga}));
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;

    &[class*='fa-stack-'] {
      font-size: var(--arc-icon-stack-size, inherit);
    }
  }

  /* Explicit opt-in via Arc’s helper class */
  .arc-aw {
    --fa-width: var(--arc-icon-fa-width, auto);
  }
}

/* utility icon colorization */
[arc-icon] {
  &[arc-icon-status=brand],
  &[arc-icon-status=announcement] {
    ${Ga}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${Ga}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${Ga}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${Ga}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error],
  &[arc-icon-status=critical] {
    ${Ga}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${Ga}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,Tv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-articulate arc-aw",color:r?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":r?.["aria-label"]||"Articulate Logo"}),Iv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":r?.["aria-label"]||"Articulate AI Logo",gradient:r?.gradient||"ai"}),Pv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-peek arc-aw",color:r?.color||"var(--arc-color-logo-peek, #497add)","aria-label":r?.["aria-label"]||"Articulate Peek Logo"}),Rv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-reach arc-aw",color:r?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":r?.["aria-label"]||"Articulate Reach Logo"}),jv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-review arc-aw",color:r?.color||"var(--arc-color-logo-review, #35b062)","aria-label":r?.["aria-label"]||"Articulate Review Logo"}),Lv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-rise arc-aw",color:r?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":r?.["aria-label"]||"Articulate Rise Logo"}),Mv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-storyline arc-aw",color:r?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":r?.["aria-label"]||"Articulate Storyline Logo"}),Dv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-studio arc-aw",color:r?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":r?.["aria-label"]||"Articulate Studio Logo"}),zr=({children:r,icon:e="fa-regular fa-circle-dashed",color:a,size:t,style:o,gradient:n,...c})=>{const d={...o,"--arc-icon-size":xv(t),"--arc-icon-color":a},u=!!(c["aria-label"]||c["aria-labelledby"]),h=zv(e),p=typeof h=="string"&&h.length>0?(0,i.jsx)("span",{className:h}):h;return(0,i.jsx)("span",{"aria-hidden":!u||void 0,...c,"arc-icon":"",style:d,"arc-gradient":n,children:r||p})};Cr("ArcIcon",_v),zr.Articulate=Tv,zr.AI=Iv,zr.Peek=Pv,zr.Reach=Rv,zr.Review=jv,zr.Rise=Lv,zr.Storyline=Mv,zr.Studio=Dv,zr.SVGArticulate=as,zr.SVGAI=ts,zr.SVGPeek=os,zr.SVGReach=ns,zr.SVGReview=cs,zr.SVGRise=is,zr.SVGStoryline=ss,zr.SVGStudio=ls;const Ov=(...r)=>console.log(...r),wu=(...r)=>console.warn(...r),Nv=(...r)=>console.error(...r),da=typeof window>"u"?l.useEffect:l.useLayoutEffect,Wo=(r,e=1/0,a=" ")=>[...r].flat(e)?.filter(Boolean)?.join(a),gs=[...Oo],vs=[...Fa],Bv=[...at],ku=gr(Xr,["common"]),Fv=gr(Xr,["ai","brand"]),Au=Gr(Vt,["compact","comfortable"]),mc=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],fs=["ignore","flip"],Me={popover:gs[0],anchorAt:mc[13],boundary:fs[0],tryFallbacks:!1,fallbackAnchors:[],variant:ku[0],scheme:vs[0],density:Au[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},ms=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name")&&CSS.supports("container-type","anchored"),Hv=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),bc={canAnchor:ms(),canAnchoredContainers:Hv()},Cu=!bc.canAnchor,Su=["center","nw-corner","ne-corner","se-corner","sw-corner"],zu=r=>{if(!Array.isArray(r)||r.length===0)return[];const e=new Set;return r.filter(a=>!mc.includes(a)||e.has(a)?!1:(e.add(a),!0))},Eu=r=>`--js\u2022try-${r}`,_u=({canHaveTail:r,tailSize:e})=>{if(!r)return{cssTailVar:"",floatingTailPx:0};const a=Math.abs(Number(e||Me.tailSize)),t=a>0?a:Me.tailSize;return{cssTailVar:t===Me.tailSize?"":`${t}px`,floatingTailPx:t}},Tu=(r,e="toggle",a=document)=>{const t=a.getElementById(r);({toggle:()=>t?.togglePopover(),show:()=>t?.showPopover(),hide:()=>t?.hidePopover()})[e]()},Xo=new WeakMap,bs=r=>{const e=String(r??"").trim();if(e==="none")return"none";let a=e.replace(/[^\w-]/g,"-");for(;a.startsWith("-");)a=a.slice(1);for(;a.endsWith("-");)a=a.slice(0,-1);return a?`--${a}`:"--"},qo=r=>{const e=bs(r);return e==="none"?null:e},Iu=(r,e)=>{const a=qo(e);if(!a)return()=>{};let t=Xo.get(r);return t||(t=new Set,Xo.set(r,t)),t.has(a)?()=>{}:(t.add(a),r.style.setProperty("anchor-name",Wo([...t],1/0,", ")),()=>{const o=Xo.get(r);if(o){if(o.delete(a),o.size===0){Xo.delete(r),r.style.removeProperty("anchor-name");return}r.style.setProperty("anchor-name",Wo([...o],1/0,", "))}})},Yo=r=>`${Math.round(r*100)/100}px`,Vv=[{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("top"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("bottom"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("bottom")&&a.includes("top"),value:1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("left"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("right"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("right")&&a.includes("left"),value:1}],$s=(r,e,a)=>Vv.find(t=>t.test(r,e,a))?.value||0;let ys;const Uv=()=>typeof window<"u"&&typeof CSS<"u"&&typeof CSS.supports=="function"&&!(CSS.supports("position-anchor","--anchor-name")&&CSS.supports("container-type","anchored")),xs=()=>(ys||(ys=ca.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_6_node_modules_floating-ui_dom_dist_floa-2134bb").then(ca.bind(ca,22251))),ys);Uv()&&xs().catch(()=>{});const Pu=r=>r==="start"||r==="end"?r:"center",Gv=r=>{const e=r.split("-")[0];return e==="top"||e==="right"||e==="bottom"||e==="left"?e:null},Ru=r=>{const e=Gv(r),a=Pu(r.split("-")[1]);switch(e){case"top":return{block:"start",inline:a};case"bottom":return{block:"end",inline:a};case"left":return{block:a,inline:"start"};case"right":return{block:a,inline:"end"};default:return{block:"center",inline:"center"}}},ju=(r,e)=>r!=="center"&&e!=="center"&&r!==e,Lu=(r,e)=>{const a=Ru(r),t=Ru(e),o=ju(a.block,t.block),n=ju(a.inline,t.inline);return o&&n?"flip-block-inline":o?"flip-block":n?"flip-inline":""},ws={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},ks=r=>r.split("-")[0],Kv=r=>r.split("-")[1],Wv=r=>r==="x"?"y":"x",Xv=r=>r==="y"?"height":"width",As=r=>["top","bottom"].includes(ks(r))?"y":"x",qv=r=>Wv(As(r)),Yv=(r,e,a,t)=>{const o=As(a),n=qv(a),c=Xv(n),d=ks(a),u=o==="y",h=r.x+r.width/2-e.width/2,p=r.y+r.height/2-e.height/2,v=r[c]/2-e[c]/2;let g;switch(d){case"top":g={x:h,y:r.y-e.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-e.width,y:p};break;default:g={x:r.x,y:r.y}}switch(Kv(a)){case"start":g[n]-=v*(t&&u?-1:1);break;case"end":g[n]+=v*(t&&u?-1:1);break;default:break}return g},Zv=(r,e,a,t)=>{const o=ks(r),n=As(r)==="y",c=o==="left"||o==="top"?-1:1,d=a&&n?-1:1,u=e,h=0;return n?{x:t.x+h*d,y:t.y+u*c}:{x:t.x+u*c,y:t.y+h*d}},Mu=r=>({x:r.x,y:r.y,width:r.width,height:r.height}),Jv=({anchorEl:r,popoverEl:e,placement:a,offsetPx:t,tailOffset:o,getTailModifier:n})=>{const c=getComputedStyle(e).direction==="rtl",d=Mu(r.getBoundingClientRect()),u=Mu(e.getBoundingClientRect());let h=Yv(d,u,a,c);h=Zv(a,t,c,h);const p=h.x+o*n("x",a,a),v=h.y+o*n("y",a,a);e.style.setProperty("left",Yo(p)),e.style.setProperty("top",Yo(v))},Qv=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,fallbackAnchors:o,offsetPx:n,tailSizePx:c,hasTail:d,isOpen:u})=>{const h=o.join("|");da(()=>{if(!(u&&!ms()&&!!r&&!!e))return;const v=r,g=e,f=ws[a];let b=!0,y;const x=d?Math.max(0,c)*Math.SQRT1_2:0;return Jv({anchorEl:v,popoverEl:g,placement:f,offsetPx:n,tailOffset:x,getTailModifier:$s}),(async()=>{try{const{autoUpdate:k,computePosition:w,flip:E,offset:_,shift:T,limitShift:C}=await xs();if(!b)return;const S=[_(n)];t&&(o.length?S.push(E({fallbackPlacements:o.map(D=>ws[D]),fallbackStrategy:"initialPlacement"})):S.push(E({fallbackStrategy:"bestFit"}))),S.push(T({crossAxis:!t,limiter:C()}));const I=async()=>{try{const D=await w(v,g,{placement:f,strategy:"fixed",middleware:S});if(!b||!v.isConnected||!g.isConnected)return;const N=D.x+x*$s("x",D.placement,f),H=D.y+x*$s("y",D.placement,f);if(g.style.setProperty("left",Yo(N)),g.style.setProperty("top",Yo(H)),!d||!t){delete g.dataset.fallbacks,delete g.dataset.resolvedAt;return}if(o.length){const L=[a,...o].find(M=>ws[M]===D.placement);delete g.dataset.fallbacks,L&&L!==a?g.dataset.resolvedAt=L:delete g.dataset.resolvedAt;return}delete g.dataset.resolvedAt;const Z=Lu(f,D.placement);Z?g.dataset.fallbacks=Z:delete g.dataset.fallbacks}catch{}};await I(),y=k(v,g,I)}catch{}})(),()=>{b=!1,y?.()}},[a,r,h,d,u,n,e,c,t])},$c=1,Yt=2,rf=[{test:(r,e)=>e.top>=r.bottom+$c,value:"bottom"},{test:(r,e)=>e.bottom<=r.top-$c,value:"top"},{test:(r,e)=>e.left>=r.right+$c,value:"right"},{test:(r,e)=>e.right<=r.left-$c,value:"left"}],Zo=r=>{delete r.dataset.fallbacks,delete r.dataset.resolvedAt},yc=r=>({x:r.left+r.width/2,y:r.top+r.height/2}),ef=(r,e,a,t)=>{const o=yc(e),n=yc(a);if(r==="top"||r==="bottom"){const h=Math.abs(t==="rtl"?a.right-e.right:a.left-e.left),p=Math.abs(t==="rtl"?a.left-e.left:a.right-e.right),v=Math.abs(n.x-o.x);return Math.abs(h-p)<=Yt&&v<=Yt||v+Yt<Math.min(h,p)?"center":h<=p?"start":"end"}const c=Math.abs(a.top-e.top),d=Math.abs(a.bottom-e.bottom),u=Math.abs(n.y-o.y);return Math.abs(c-d)<=Yt&&u<=Yt||u+Yt<Math.min(c,d)?"center":c<=d?"start":"end"},af=(r,e,a,t)=>{const o=rf.find(u=>u.test(e,a));let n;if(o)n=o.value;else{const u=yc(e),h=yc(a),p=h.y-u.y,v=h.x-u.x,g=Math.min(e.height,a.height)*.1;Math.abs(p)>g?n=p>=0?"bottom":"top":n=v>=0?"right":"left"}if(Pu(r.split("-")[1])==="center")return n;const d=ef(n,e,a,t);return`${n}-${d}`},tf=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,fallbackAnchors:o,isOpen:n,hasTail:c})=>{const d=o.join("|");da(()=>{if(!e||!bc.canAnchor)return;if(!c||!t||!n||bc.canAnchoredContainers||!r){Zo(e);return}const u=a;if(u==="center"||u.includes("corner")){Zo(e);return}const h=r,p=e;let v=!0,g;const f=()=>{const y=h.getBoundingClientRect(),x=p.getBoundingClientRect(),A=getComputedStyle(h).direction==="rtl"?"rtl":"ltr",$=af(u,y,x,A);if(o.length){const E=$.split("-")[0],_=[u,...o],T=_.find(C=>C===$)??_.find(C=>C.split("-")[0]===E);delete p.dataset.fallbacks,T&&T!==u?p.dataset.resolvedAt=T:delete p.dataset.resolvedAt;return}delete p.dataset.resolvedAt;const k=Lu(u,$);u===$?Zo(p):k?p.dataset.fallbacks=k:Zo(p)};return(async()=>{try{const{autoUpdate:x}=await xs();if(!v)return;g=x(h,p,f),f()}catch{}})(),()=>{v=!1,g?.(),Zo(p)}},[a,r,d,c,n,e,t])},Du=(r,e=" ")=>r.split(e).map(a=>a.trim()).filter(Boolean),J=s`--arc•input•mask`,m=s`--arc•size`,R=s`--arc•space`,jr=r=>s`max(${r}px, ${r/16}em)`,se=s`--arc•spinner`,Zt=s`${se}•w`,xc=s`${se}•fg`,Cs=s`${se}•fs`,Ss=s`${se}•bg`,of=s`
  &[data-size=inherit] {
    ${Zt}: 1.25em;
    ${Cs}: 1em;
    ${se}•thickness: clamp(0.0625em, 4px, 0.125em);
  }

  &:not([data-size=inherit]) {
    ${Cs}: initial;
  }

  &[data-size=xs] {
    ${Zt}: ${jr(14)};
    ${se}•thickness: ${jr(2)};
  }

  &[data-size=sm] {
    ${Zt}: ${jr(20)};
    ${se}•thickness: ${jr(2)};
  }

  &[data-size=md] {
    ${Zt}: ${jr(32)};
    ${se}•thickness: ${jr(3)};
  }

  &[data-size=lg] {
    ${Zt}: ${jr(48)};
    ${se}•thickness: ${jr(4)};
  }
`,nf=s`
  &[data-color=brand] {
    ${xc}: var(--arc-color-fg-brand-mid);
  }

  &[data-color=ai] {
    ${Ss}: var(--arc-spinner-color, var(--arc-gradient-ai-200));
  }

  &[data-color=neutral] {
    ${xc}: var(--arc-color-fg-neutral-mid);
  }

  &[data-color=white] {
    ${xc}: var(--arc-color-alpha-white-90);
  }
`,cf=s`
@layer arc-components {

  [arc-spinner] {
    ${of}
    ${nf}

    /** The half-pixel offsets (0.5px) are an affordance for low-resolution displays; they keep the mask sharp. */
    ${se}•ring: radial-gradient(
      farthest-side,
      transparent calc(100% - var(${se}•thickness) - 0.5px),
      black calc(100% - var(${se}•thickness) + 0.5px)
    ) border-box;

    font-size: var(${Cs});
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;

    position: var(--arc-spinner-position, relative);
    inset: var(--arc-spinner-inset, 0);
    translate: var(--arc-spinner-translate, 0);
    width: var(--arc-spinner-size, var(${Zt}));

    aspect-ratio: 1 / 1;
    pointer-events: none;

    color: var(--arc-spinner-color, var(${xc}));
    border-radius: var(--arc-border-radius-circle);

    [arc-spinner-circle] {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: var(--arc-border-radius-circle);
      opacity: var(--arc-spinner-opacity, 1);
      transform-origin: 50% 50%;

      -webkit-mask: var(${se}•ring);
      mask: var(${se}•ring);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    [arc-spinner] [arc-spinner-circle] {
      background: conic-gradient(transparent 0deg, currentcolor);
      animation: var(--arc-spinner-rotate-duration, 743ms) arc-spinner-rotate linear infinite;

      &::after {
        content: '';
        position: absolute;
        width: var(${se}•thickness);
        height: var(${se}•thickness);
        top: var(${se}•thickness);
        left: 50%;
        transform: translate(-50%, -100%);
        border-radius: var(--arc-border-radius-circle);
        background: var(--arc-spinner-color, currentcolor);
      }
    }

    [arc-spinner][data-color=ai] [arc-spinner-circle] {
      background: transparent;

      /** The comet and its cap are mask layers over one full-size gradient, so their colors stay continuous. */
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(${Ss});
        mask:
          conic-gradient(transparent 0deg, black 360deg),
          radial-gradient(
            circle at 50% calc(var(${se}•thickness) / 2),
            black calc(var(${se}•thickness) / 2 - 0.5px),
            transparent calc(var(${se}•thickness) / 2 + 0.5px)
          );
      }

      &::after {
        display: none;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [arc-spinner] [arc-spinner-circle] {
      /* collapse the comet into a uniform ring — no spin, no travel */
      background: currentcolor;
      animation: var(--arc-spinner-pulse-duration, 1400ms) arc-spinner-pulse ease-in-out infinite;

      &::after {
        display: none;
      }
    }

    [arc-spinner][data-color=ai] [arc-spinner-circle] {
      background: var(${Ss});

      &::before {
        display: none;
      }
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }

  @keyframes arc-spinner-pulse {
    0%,
    100% {
      opacity: var(--arc-spinner-pulse-opacity-start, 1);
    }
    50% {
      opacity: var(--arc-spinner-pulse-opacity-end, 0.2);
    }
  }
}
`,sf=[...gr(ie,["inherit","xs","sm","md","lg"])],lf=["inherit",...Gr(Ha,["neutral","white","brand","ai"])],wc=(0,l.forwardRef)(({size:r="inherit",color:e="inherit",...a},t)=>(0,i.jsx)("span",{...a,ref:t,"arc-spinner":"","data-size":r,"data-color":e,children:(0,i.jsx)("span",{"arc-spinner-circle":""})}));wc.displayName="ArcSpinner",Cr("ArcSpinner",cf);const df=({isFloating:r,isOnMedia:e,shadow:a})=>[{condition:!r&&e,value:"light-md"},{condition:r&&!e,value:"lg"},{condition:r&&e,value:"light-lg"},{condition:r||a===!0,value:"lg"}],uf=({isFloating:r,isOnMedia:e,shadow:a})=>df({isFloating:r,isOnMedia:e,shadow:a}).find(t=>t.condition)?.value??a,hf=({layout:r,isFloating:e})=>[{condition:r==="icon",value:"icon"},{condition:e||r==="hug",value:"hug"},{condition:!e&&r==="fill",value:"fill"}],pf=({layout:r,isFloating:e})=>hf({layout:r,isFloating:e}).find(a=>a.condition)?.value??r,gf=({scheme:r,isInverse:e})=>[{condition:e,value:"inverse"},{condition:r==="auto",value:void 0},{condition:!0,value:r}],vf=({scheme:r,isInverse:e})=>{const a=gf({scheme:r,isInverse:e}).find(t=>t.condition)?.value??r;return a==="auto"?void 0:a},ff=gr(Mo,["round","square","narrow"]),mf=gr(ie,["xxl","xl","lg","md","sm"]),bf=gr(ia,["hug","fill","icon"]),Ou=gr(Xr,["common","neutral","ai","critical","alpha"]),zs=[...Fa],$f=[...ac],Nu=gr(Ut,["primary","secondary","tertiary","plain","link-style"]),yf=[...at],xf={circle:"round"},Bu=({shape:r})=>tt(r,xf),Es=gr(Xr,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),Fu={primary:{variant:"common",hierarchy:"primary"},secondary:{variant:"common",hierarchy:"secondary"},tertiary:{variant:"common",hierarchy:"tertiary"},"critical-primary":{variant:"critical",hierarchy:"primary"},"critical-secondary":{variant:"critical",hierarchy:"secondary"},"ai-primary":{variant:"ai",hierarchy:"primary"},"ai-secondary":{variant:"ai",hierarchy:"secondary"},"primary-inverse":{variant:"common",hierarchy:"primary",scheme:"inverse"},"secondary-inverse":{variant:"common",hierarchy:"secondary",scheme:"inverse"},"tertiary-inverse":{variant:"common",hierarchy:"tertiary",scheme:"inverse"}},wf=(()=>{const r=new Map;return Es.forEach(e=>{const a=Fu[e],t=a.scheme==="inverse"?"inverse":"";r.set(`${a.variant}|${a.hierarchy}|${t}`,e)}),r})(),_s=r=>!!(r&&Es.includes(r)),kc=r=>r!==void 0&&_s(r)?Fu[r]:void 0,Hu=({variant:r})=>kc(r)?.variant??r,Vu=({variant:r,hierarchy:e})=>kc(r)?.hierarchy??e,Uu=({variant:r,isInverse:e,scheme:a})=>kc(r)?.scheme??vf({scheme:a,isInverse:e}),kf={variant:Ou[0],hierarchy:Nu[0],scheme:zs[0]},Af=({variant:r})=>{const e=kc(r);return e?{variant:e.variant,hierarchy:e.hierarchy,scheme:e.scheme??zs[0]}:kf},Cf=({variant:r,hierarchy:e,scheme:a})=>wf.get(`${r}|${e}|${a==="inverse"?"inverse":""}`),Xe=s`60deg`,qr={purple:{50:s`light-dark(#fbf2ff, #210125)`,100:s`light-dark(#efccff, #540160)`,200:s`light-dark(#9c15ff, #ad44cb)`,300:s`light-dark(#680278, #ad44cb)`,400:s`light-dark(#5d3668, #c778de)`,500:s`light-dark(#37003f, #e3a7ff)`,600:s`light-dark(#27002c, #f9ebff)`},blue:{50:s`light-dark(#f4fbff, #00223b)`,100:s`light-dark(#d2f1fe, #02497d)`,200:s`light-dark(#1eb4fb, #169cfe)`,300:s`light-dark(#0179d0, #71bdfe)`,400:s`light-dark(#36648c, #84daff)`,500:s`light-dark(#004273, #b7eaff)`,600:s`light-dark(#012a48, #c2edff)`}},Jo=s`var(--arc-color-overlay-subtle)`,Sf=s`
:root {
  --arc-button-critical-bg-hover: light-dark(
    color-mix(in srgb, var(--arc-color-light-red-600), transparent 90%),
    color-mix(in srgb, var(--arc-color-dark-red-700), transparent 75%)
  );

  /* * + secondary floating button */
  --arc-button-floating-bg: ${Jo};
  --arc-button-floating-bg-processing: ${Jo};
  --arc-button-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-floating-bg-focus: ${Jo};
  --arc-button-floating-bg-hover: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-100));
  --arc-button-floating-bg-active: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-200));

  /* critical + floating button */
  --arc-button-critical-floating-bg-hover: var(--arc-color-bg-critical-subtle);
  --arc-button-critical-floating-bg-active: var(--arc-color-bg-critical-muted);

  /* ai + secondary floating button */
  --arc-button-ai-floating-bg: ${Jo} linear-gradient(${Xe}, transparent, ${Jo});

  /*
  ai variant gradients that can be slightly transitioned: 'bg-color + gradient(transparent -> color)'
  bg-color can be transitioned, gradient not so much. Result: subtle transition of the bg-color through the transparent parts of the gradient.
  */
  --arc-button-gradient-ai-transparent: transparent linear-gradient(${Xe}, transparent, transparent);
  --arc-button-gradient-ai-50: ${qr.purple[50]} linear-gradient(${Xe}, transparent, ${qr.blue[50]});
  --arc-button-gradient-ai-100: ${qr.purple[100]} linear-gradient(${Xe}, transparent, ${qr.blue[100]});
  --arc-button-gradient-ai-200: ${qr.purple[200]} linear-gradient(${Xe}, transparent, ${qr.blue[200]});
  --arc-button-gradient-ai-300: ${qr.purple[300]} linear-gradient(${Xe}, transparent, ${qr.blue[300]});
  --arc-button-gradient-ai-400: ${qr.purple[400]} linear-gradient(${Xe}, transparent, ${qr.blue[400]});
  --arc-button-gradient-ai-500: ${qr.purple[500]} linear-gradient(${Xe}, transparent, ${qr.blue[500]});
  --arc-button-gradient-ai-600: ${qr.purple[600]} linear-gradient(${Xe}, transparent, ${qr.blue[600]});
}
`,zf=s`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-light-blue-600));
}
`,Ef=s`
:root {
  /* Tail edge colors for 'variant=ai' popovers */
  --arc-popover-ai-purple-50: ${qr.purple[50]};
  --arc-popover-ai-purple-200: ${qr.purple[200]};
  --arc-popover-ai-blue-50: ${qr.blue[50]};
  --arc-popover-ai-blue-200: ${qr.blue[200]};
}
`,_f=s`
:root {
  --arc-progress-bar-gradient-ai-200: linear-gradient(${Xe}, ${qr.purple[200]} -0.5em, ${qr.blue[200]});
}
`,Tf=s`
:root {
  --arc-banner-gradient-ai-50: linear-gradient(${Xe}, ${qr.purple[50]}, ${qr.blue[50]});
  --arc-banner-gradient-ai-100: linear-gradient(${Xe}, ${qr.purple[100]}, ${qr.blue[100]});
  --arc-banner-gradient-ai-300: linear-gradient(${Xe}, ${qr.purple[300]}, ${qr.blue[300]});
}
`,B=s`--arc•button`,G=s`${B}•fg`,z=s`${B}•bg`,fr=s`${B}•edge`,Or=s`${B}•border`,Jt=s`${B}•outline`,Ve=s`${B}•label`,Pe=s`${B}•mask`,Ce=s`${B}•spinner`,ce=s`${B}•icon`,Se=s`${ce}•svg`,If=s`
  &[data-size=xxl] {
    ${B}•font•size: var(${m}•16);
    ${B}•height: var(${m}•56);
    ${Ce}•size: var(${m}•32);
    ${ce}•size: var(${m}•20);
    ${ce}•size•large: var(${m}•24);
    ${Se}•size: var(${m}•25);
    ${Se}•size•large: var(${m}•24);
    ${Ve}•spacing: var(${m}•12);
    ${B}•spacing: var(${m}•16);
    ${B}•spacing•square: var(${m}•16);
    ${Or}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=xl] {
    ${B}•font•size: var(${m}•14);
    ${B}•height: var(${m}•48);
    ${Ce}•size: var(${m}•16);
    ${ce}•size: var(${m}•16);
    ${ce}•size•large: var(${m}•20);
    ${Se}•size: var(${m}•20);
    ${Se}•size•large: var(${m}•25);
    ${Ve}•spacing: var(${m}•10);
    ${B}•spacing: var(${m}•14);
    ${B}•spacing•square: var(${m}•14);
    ${Or}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=lg] { /** @default */
    ${B}•font•size: var(${m}•14);
    ${B}•height: var(${m}•40);
    ${Ce}•size: var(${m}•16);
    ${ce}•size: var(${m}•16);
    ${ce}•size•large: var(${m}•20);
    ${Se}•size: var(${m}•20);
    ${Se}•size•large: var(${m}•25);
    ${Ve}•spacing: var(${m}•8);
    ${B}•spacing: var(${m}•12);
    ${B}•spacing•square: var(${m}•10);
    ${Or}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=inherit] { /* scalable • mimics default size */
    ${B}•font•size: 1em;
    ${B}•height: 2.5em;
    ${Ve}•font•size: 0.875em;
    ${Ce}•size: 1.125em;
    ${ce}•size: 1.125em;
    ${ce}•size•large: 1.25em;
    ${Se}•size: 1.25em;
    ${Se}•size•large: 1.375em;
    ${Ve}•spacing: max(8px, 0.5em);
    ${B}•spacing: 0.75em;
    ${B}•spacing•square: 0.625em;
    ${Or}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=md] {
    ${B}•font•size: var(${m}•14);
    ${B}•height: var(${m}•32);
    ${Ce}•size: var(${m}•16);
    ${ce}•size: var(${m}•14);
    ${ce}•size•large: var(${m}•20);
    ${Se}•size: var(${m}•18);
    ${Se}•size•large: var(${m}•25);
    ${Ve}•spacing: var(${m}•6);
    ${B}•spacing: var(${m}•10);
    ${B}•spacing•square: var(${m}•8);
    ${Or}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=sm] {
    ${B}•font•size: var(${m}•12);
    ${B}•height: var(${m}•24);
    ${Ce}•size: var(${m}•14);
    ${ce}•size: var(${m}•12);
    ${ce}•size•large: var(${m}•14);
    ${Se}•size: var(${m}•15);
    ${Se}•size•large: var(${m}•18);
    ${Ve}•spacing: var(${m}•4);
    ${B}•spacing: var(${m}•8);
    ${B}•spacing•square: var(${m}•6);
    ${Or}•radius•square: var(--arc-border-radius-lg);
  }

  /* Custom button overrides • metrics based on size: 'inherit' */
  &[arc-button=custom] {
    ${B}•font•weight: normal;
    ${Or}•radius: 0.25em;
    ${B}•height: auto;
  }
`,Pf=s`
  &[data-layout=hug] {
    ${B}•width: auto;
    ${B}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${B}•display: flex;
    ${B}•width: 100%;
    ${B}•content•width: 0;
  }

  &:not([data-layout=icon]) {
    ${ce}•width: auto;
  }

  &[data-layout=icon] {
    ${B}•aspect•ratio: 1 / 1;
    ${B}•min•width: min-content;
    ${B}•max•width: none;
    ${B}•spacing: var(${m}•0);

    ${ce}•width: 1.25em;

    &[data-shape=narrow] {
      ${B}•aspect•ratio: auto;
      ${B}•spacing: var(${m}•2);
      ${ce}•width: auto;
    }
  }

  &[data-shape=square] {
    ${B}•spacing: var(${B}•spacing•square);
  }

  &:is(
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${Or}•radius: var(${Or}•radius•square);
  }

`,Rf=s`
  /** @mitigation • when no variant is set (i.e.: 'custom' buttons) */
  &:not([data-variant]) {
    ${G}: inherit;
    ${z}: transparent;
    ${fr}: transparent;
    ${G}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &[data-variant=common] {
    ${Or}•width: var(${m}•1);

    /** @default */
    &:where([data-hierarchy=primary]) {
      ${G}: var(--arc-color-fg-on-theme-heavy);
      ${z}: var(--arc-color-bg-theme-heavy);
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-on-theme-mid);
      ${G}•processing: var(--arc-color-fg-on-theme-stark);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-color-bg-theme-stark);
      ${z}•active: var(--arc-color-bg-theme-mid);
      ${z}•processing: var(--arc-color-bg-theme-stark);
      ${z}•disabled: var(--arc-color-bg-disabled);
    }

    &:where([data-hierarchy=secondary]) {
      ${G}: var(--arc-color-fg-primary);
      ${z}: transparent;
      ${fr}: var(--arc-color-border-theme-heavy);

      ${G}•active: var(--arc-color-fg-secondary);
      ${G}•processing: var(--arc-color-fg-secondary);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${fr}•active: var(--arc-color-border-theme-mid);
      ${fr}•processing: var(--arc-color-border-theme-subtle);
      ${fr}•disabled: var(--arc-color-border-disabled);

      ${z}•hover: var(--arc-color-bg-neutral-muted);
      ${z}•active: var(--arc-color-bg-neutral-subtle);
      ${z}•processing: transparent;
      ${z}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${fr}: var(--arc-color-border-mid);
        ${fr}•hover: var(--arc-color-border-stark);
        ${fr}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${z}: var(--arc-button-floating-bg);
        ${z}•processing: var(--arc-button-floating-bg-processing);
        ${z}•disabled: var(--arc-button-floating-bg-disabled);
        ${z}•focus: var(--arc-button-floating-bg-focus);
        ${z}•hover: var(--arc-button-floating-bg-hover);
        ${z}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${G}: var(--arc-color-fg-primary);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-secondary);
      ${G}•processing: var(--arc-color-fg-secondary);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-color-bg-neutral-muted);
      ${z}•active: var(--arc-color-bg-neutral-muted);
      ${z}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${G}: var(--arc-color-fg-primary);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•hover: var(--arc-color-alpha-heavy);
      ${G}•active: var(--arc-color-alpha-heavy);
      ${G}•processing: var(--arc-color-alpha-heavy);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: transparent;
      ${z}•active: transparent;
      ${z}•processing: transparent;
    }
  }

`,jf=s`
  &[data-variant=neutral] {
    ${Or}•width: var(${m}•1);

    &:where([data-hierarchy=primary]) {
      ${G}: var(--arc-color-fg-primary);
      ${z}: var(--arc-color-bg-primary);
      ${fr}: var(--arc-color-border-mid);

      ${G}•active: var(--arc-color-fg-secondary);
      ${G}•processing: var(--arc-color-fg-secondary);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-color-bg-neutral-muted);
      ${z}•active: var(--arc-color-bg-neutral-subtle);
      ${z}•processing: var(--arc-color-bg-primary);
      ${z}•disabled: transparent;

      &:where([is-floating]) {
        ${z}: var(--arc-button-floating-bg);
        ${z}•processing: var(--arc-button-floating-bg-processing);
        ${z}•disabled: var(--arc-button-floating-bg-disabled);
        ${z}•focus: var(--arc-button-floating-bg-focus);
        ${z}•hover: var(--arc-button-floating-bg-hover);
        ${z}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=secondary]) {
      ${G}: var(--arc-color-fg-neutral-stark);
      ${z}: var(--arc-color-bg-primary);
      ${fr}: var(--arc-color-border-mid);

      ${G}•hover: var(--arc-color-fg-primary);
      ${G}•active: var(--arc-color-fg-secondary);
      ${G}•processing: var(--arc-color-fg-secondary);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${fr}•disabled: var(--arc-color-border-disabled);

      ${z}•hover: var(--arc-color-bg-neutral-muted);
      ${z}•active: var(--arc-color-bg-neutral-subtle);
      ${z}•processing: var(--arc-color-bg-primary);
      ${z}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${fr}: var(--arc-color-border-mid);
        ${fr}•hover: var(--arc-color-border-stark);
        ${fr}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${z}: var(--arc-button-floating-bg);
        ${z}•processing: var(--arc-button-floating-bg-processing);
        ${z}•disabled: var(--arc-button-floating-bg-disabled);
        ${z}•focus: var(--arc-button-floating-bg-focus);
        ${z}•hover: var(--arc-button-floating-bg-hover);
        ${z}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${G}: var(--arc-color-fg-neutral-stark);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-secondary);
      ${G}•processing: var(--arc-color-fg-secondary);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-color-bg-neutral-muted);
      ${z}•active: var(--arc-color-bg-neutral-subtle);
      ${z}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${G}: var(--arc-color-fg-neutral-stark);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•hover: var(--arc-color-fg-primary);
      ${G}•active: var(--arc-color-fg-neutral-mid);
      ${G}•processing: var(--arc-color-fg-secondary);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: transparent;
      ${z}•active: transparent;
      ${z}•processing: transparent;
    }
  }

`,Lf=s`
  &[data-variant=ai] {
    ${G}•disabled: var(--arc-color-fg-disabled);
    ${fr}•disabled: var(--arc-color-border-disabled);
    ${Or}•width: var(${m}•2);

    ${Pe}•bg: var(--arc-gradient-ai-200);
    ${Pe}•disabled: var(--arc-color-border-disabled);
    ${Pe}•processing: var(--arc-gradient-ai-100);

    &:where([data-hierarchy=primary]) {
      ${G}: var(--arc-color-fg-on-theme-stark);
      ${z}: var(--arc-button-gradient-ai-500) padding-box;
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-neutral-mid);
      ${G}•processing: var(--arc-color-fg-on-theme-heavy);
      ${G}•hover: var(--arc-color-fg-on-theme-heavy);

      ${z}•hover: var(--arc-button-gradient-ai-400) padding-box;
      ${z}•active: var(--arc-button-gradient-ai-600) padding-box;
      ${z}•processing: var(--arc-button-gradient-ai-400) padding-box;
      ${z}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${Pe}•hover: var(--arc-gradient-ai-200);
      ${Pe}•active: var(--arc-gradient-ai-200);
    }

    &:where([data-hierarchy=secondary]) {
      ${G}: var(--arc-color-fg-primary);
      ${z}: var(--arc-button-gradient-ai-transparent) padding-box; /* allows subtle transition of bg-color through the transparent parts of the gradient */
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-neutral-stark);
      ${G}•processing: var(--arc-color-fg-primary);

      ${z}•hover: var(--arc-button-gradient-ai-50) padding-box;
      ${z}•focus: var(--arc-button-gradient-ai-50) padding-box;
      ${z}•active: var(--arc-button-gradient-ai-50) padding-box;
      ${z}•processing: var(--arc-button-gradient-ai-50) padding-box;
      ${z}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${Pe}•hover: var(--arc-gradient-ai-300);
      ${Pe}•active: var(--arc-gradient-ai-100);

      &:where([is-floating]) {
        ${z}: var(--arc-button-ai-floating-bg) padding-box;
      }
    }
  }

`,Mf=s`
  &[data-variant=alpha] {
    ${Or}•width: var(${m}•1);

    &:where([data-hierarchy=primary]) {
      ${G}: var(--arc-color-mono-black);
      ${z}: var(--arc-color-mono-white);
      ${fr}: transparent;

      ${G}•focus: var(--arc-color-mono-black);
      ${G}•active: var(--arc-color-alpha-black-60);
      ${G}•processing: var(--arc-color-mono-black);
      ${G}•disabled: var(--arc-color-alpha-black-60);

      ${z}•hover: var(--arc-color-alpha-white-70);
      ${z}•active: var(--arc-color-alpha-white-40);
      ${z}•processing: var(--arc-color-alpha-white-40);
      ${z}•disabled: var(--arc-color-alpha-white-15);
    }

    &:where([data-hierarchy=secondary]) {
      ${G}: var(--arc-color-alpha-white-95);
      ${z}: transparent;
      ${fr}: var(--arc-color-alpha-white-80);

      ${G}•active: var(--arc-color-alpha-white-80);
      ${G}•processing: var(--arc-color-alpha-white-95);
      ${G}•disabled: var(--arc-color-alpha-white-50);

      ${z}•hover: var(--arc-color-alpha-white-20);
      ${z}•active: var(--arc-color-alpha-white-40);
      ${z}•processing: var(--arc-color-alpha-white-25);
      ${z}•disabled: transparent;

      ${fr}•hover: var(--arc-color-alpha-white-100);
      ${fr}•focus: var(--arc-color-alpha-white-80);
      ${fr}•active: var(--arc-color-alpha-white-50);
      ${fr}•processing: transparent;
      ${fr}•disabled: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=tertiary]) {
      ${G}: var(--arc-color-alpha-white-95);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•active: var(--arc-color-alpha-black-60);
      ${G}•processing: var(--arc-color-alpha-white-95);
      ${G}•disabled: var(--arc-color-alpha-white-50);

      ${z}•hover: var(--arc-color-alpha-white-20);
      ${z}•active: var(--arc-color-alpha-white-40);
      ${z}•processing: var(--arc-color-alpha-white-20);
      ${z}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${G}: var(--arc-color-alpha-white-95);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•hover: var(--arc-color-alpha-white-60);
      ${G}•active: var(--arc-color-alpha-white-40);
      ${G}•processing: var(--arc-color-alpha-white-95);
      ${G}•disabled: var(--arc-color-alpha-white-30);
    }
  }
`,Df=s`
  &[data-variant=critical] {
    ${Or}•width: var(${m}•1);

    &:where([data-hierarchy=primary]) {
      ${G}: var(--arc-color-fg-on-stark);
      ${z}: var(--arc-color-bg-critical-stark);
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-critical-subtle);
      ${G}•processing: var(--arc-color-fg-on-heavy);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-color-bg-critical-heavy);
      ${z}•active: var(--arc-color-bg-critical-heavy);
      ${z}•processing: var(--arc-color-bg-critical-heavy);
      ${z}•disabled: var(--arc-color-bg-disabled);
    }

    &:where([data-hierarchy=secondary]) {
      ${G}: var(--arc-color-fg-critical-stark);
      ${z}: transparent;
      ${fr}: var(--arc-color-border-critical-stark);

      ${G}•active: var(--arc-color-fg-critical-subtle);
      ${G}•processing: var(--arc-color-fg-critical-stark);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-button-critical-bg-hover);
      ${z}•active: var(--arc-color-bg-critical-muted);
      ${z}•disabled: transparent;

      ${fr}•active: var(--arc-color-border-critical-subtle);
      ${fr}•processing: var(--arc-color-border-critical-stark);
      ${fr}•disabled: var(--arc-color-border-disabled);

      /* "floating" button mitigation */
      &:where([is-floating]) {
        ${z}: var(--arc-button-floating-bg);
        ${z}•processing: var(--arc-button-floating-bg-processing);
        ${z}•disabled: var(--arc-button-floating-bg-disabled);
        ${z}•focus: var(--arc-button-floating-bg-focus);

        ${z}•hover: var(--arc-button-critical-floating-bg-hover);
        ${z}•active: var(--arc-button-critical-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${G}: var(--arc-color-fg-critical-stark);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-critical-subtle);
      ${G}•processing: var(--arc-color-fg-critical-stark);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-button-critical-bg-hover);
      ${z}•active: var(--arc-color-bg-critical-subtle);
      ${z}•processing: var(--arc-color-bg-critical-muted);
      ${z}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${G}: var(--arc-color-fg-critical-stark);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•hover: var(--arc-color-fg-critical-mid);
      ${G}•active: var(--arc-color-fg-critical-subtle);
      ${G}•processing: var(--arc-color-fg-critical-stark);
      ${G}•disabled: var(--arc-color-fg-disabled);
    }
  }
`,Of=s`
  /**
   * @deprecated • restores solid bg for legacy \`variant="secondary"\` / \`variant="secondary-inverse"\` usage,
   * which now map to \`data-variant=common data-hierarchy=secondary\` (transparent by default).
   */
  &[is-deprecated=secondary]:not([is-floating]) {
    ${z}: var(--arc-color-mono-white);
    ${z}•hover: var(--arc-color-bg-neutral-muted);
    ${z}•active: var(--arc-color-bg-neutral-subtle);
    ${z}•processing: var(--arc-color-mono-white);
    ${z}•disabled: var(--arc-color-mono-white);
    ${z}•focus: var(--arc-color-alpha-white-3);
  }

  &[is-deprecated=secondary-inverse]:not([is-floating]) {
    ${z}: transparent;
    ${z}•hover: var(--arc-color-bg-neutral-muted);
    ${z}•active: var(--arc-color-bg-neutral-subtle);
    ${z}•processing: transparent;
    ${z}•disabled: transparent;
    ${z}•focus: var(--arc-color-alpha-white-3);
  }
`,Nf=s`
  /** @overrides all variants when is onMedia (allows 'ai' gradient border) */
  &[is-on-media] {
    ${G}: var(--arc-color-mono-black);
    ${z}: var(--arc-color-alpha-white-70);
    ${fr}: var(--arc-color-alpha-black-15);

    ${G}•active: var(--arc-color-alpha-black-50);
    ${G}•processing: var(--arc-color-alpha-black-50);
    ${G}•disabled: var(--arc-color-alpha-black-40);

    ${z}•hover: var(--arc-color-alpha-white-90);
    ${z}•focus: var(--arc-color-alpha-white-70);
    ${z}•active: var(--arc-color-alpha-white-70);
    ${z}•disabled: var(--arc-color-alpha-white-60);
    ${z}•processing: var(--arc-color-alpha-white-60);

    ${fr}•active: var(--arc-color-alpha-black-10);
    ${fr}•disabled: var(--arc-color-alpha-black-10);
  }
`,Bf=s`
  ${B}•color: var(${G});
  ${B}•background: var(${z});
  ${B}•font•weight: var(--arc-font-weight-600);
  ${B}•cursor: var(--arc-button-cursor, pointer);
  ${B}•padding: 0 var(${B}•spacing);
  ${B}•content•opacity: 1;

  /**
   * @note: new spacing between label and icon
   * '--arc-button-gap' is @deprecated • this was the 'gap' at the [arc-button-content] level
   * '--arc-button-inline-spacing' is @preferred over '--arc-button-gap'
   */
  ${Ve}•padding: var(--arc-button-inline-spacing, var(--arc-button-gap, var(${Ve}•spacing)));

  /**
   * @note: default is 'inherit' so it can inherit from button's size.
   * The 'size="inherit"' sets the button's font-size to 1em,
   * and sets the label font-size to 0.875em (or 14px at 100%) to
   * match the default button's text size. This allows the label
   * to still remain scalable by the parent container's font-size.
   */
  ${Ve}•font•size: inherit;

  /**
   * @note: Transforms variant-dependent '${Or}•width' into '${Or}•size'
   * which is also used for inset/padding on the AI Button's [arc-button-mask] sizing.
   */
  ${Or}•size: var(--arc-button-border-width, var(${Or}•width));

  ${Or}•color: var(${fr});
  ${Or}: var(${Or}•size) solid var(${Or}•color, transparent);
  ${Or}•radius: var(--arc-border-radius-pill);

  ${Jt}: var(--arc-border-width-md) solid var(${Jt}•color, transparent);
  ${Jt}•offset: var(--arc-border-width-md);

  ${B}•transition:
    background 0.2s ease-out,
    color 0.2s ease-out,
    height 0.2s ease-out,
    border-color 0.2s ease-out,
    outline-color 0.2s ease-out,
    opacity 0.2s ease-out,
    box-shadow 0.2s ease-out;

  &[data-hierarchy=link-style] {
    [arc-button-label] {
      text-decoration: var(--arc-link-text-decoration, underline);
      text-decoration-color: currentcolor;
    }

    [arc-button-icon] {
      text-decoration: none;
    }
  }

  /* Inter-Component Communication • ArcIcon -----------------------• */

  --arc-icon-size: var(${ce}•size);

  ${Se}•width: var(${Se}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${ce}•size•large);

    [arc-button-icon]:has(svg) {
      ${Se}•width: var(${Se}•size•large);
    }
  }

  /* Inter-Component Communication • ArcSpinner --------------------• */

  --arc-spinner-size: var(${Ce}•size);
  --arc-spinner-position: var(${Ce}•position, absolute);
  --arc-spinner-inset: var(${Ce}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${Ce}•translate, -50% -50%);
  --arc-spinner-color: var(--arc-button-progress-color, unset);

`,Ff=s`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has([arc-button-mask]),
    :has(input),
  ) {
    ${B}•position: relative;
  }

  &[is-disabled] {
    ${B}•color: var(${G}•disabled, var(${G}));
    ${B}•background: var(${z}•disabled, var(${z}));
    ${Or}•color: var(${fr}•disabled, var(${fr}));
    ${B}•opacity: var(--arc-button-disabled-opacity, unset);
    ${B}•cursor: var(--arc-button-disabled-cursor, not-allowed);
    ${Pe}•bg: var(${Pe}•disabled);
  }

  &:not(
    [is-disabled],
    [is-processing],
    [is-processing-with-text]
  ) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${B}•color: var(${G}•hover, var(${G}));
      ${B}•background: var(${z}•hover, var(${z}));
      ${Or}•color: var(${fr}•hover, var(${fr}));
      ${Pe}•bg: var(${Pe}•hover);
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${B}•color: var(${G}•active, var(${G}));
      ${B}•background: var(${z}•active, var(${z}));
      ${Or}•color: var(${fr}•active, var(${fr}));
      ${Pe}•bg: var(${Pe}•active);
    }
  }

  &[is-processing] {
    ${B}•content•visibility: hidden;
    ${B}•content•opacity: 0;

    /* spinner svg position controls */
    ${Ce}•position: absolute;
    ${Ce}•inset: 50% auto auto 50%;
    ${Ce}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${B}•content•visibility: visible;

    /* spinner svg position controls */
    ${Ce}•position: relative;
    ${Ce}•inset: 0;
    ${Ce}•translate: 0;
    ${Ce}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${B}•opacity: var(--arc-button-processing-opacity, unset);
    ${B}•cursor: var(--arc-button-processing-cursor, default);
    ${Pe}•bg: var(${Pe}•processing);

    ${B}•color: var(${G}•processing, var(${G}));
    ${B}•background: var(${z}•processing, var(${z}));
    ${Or}•color: var(${fr}•processing, var(${fr}));
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${B}•color: var(${G}•focus, var(${G}));
    ${B}•background: var(${z}•focus, var(${z}));
    ${Or}•color: var(${fr}•focus, var(${fr}));
    ${Jt}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,Hf=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${Sf}

  :where([arc-button]) {
    /* SETUP -------------------------------------------------------• */
    ${If}
    ${Pf}
    ${Rf}
    ${Of}
    ${jf}
    ${Lf}
    ${Mf}
    ${Df}
    ${Nf}

    /* CORE VARIABLES ----------------------------------------------• */
    ${Bf}
    ${Ff}

    /* CONTEXT OVERRIDES -------------------------------------------• */
    &[is-floating] {
      ${B}•position: fixed;
      ${B}•margin: 0;
      ${B}•z-index: 1000;
    }

    /* "floating" button mitigation */
    &:where([arc-shadow], [is-floating]) {
      backdrop-filter: var(--arc-button-backdrop-filter, blur(0.375em));
    }

    /* Plain & Link-style button structural overrides */
    &:is(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${Ve}•padding: unset;
      ${B}•padding: unset;
      ${B}•height: unset;
      ${Or}•radius: var(--arc-border-radius-md);

      [arc-button-content] {
        gap: var(--arc-button-inline-spacing, var(${Ve}•spacing));
      }
    }

    &:where([data-hierarchy=link-style]) {
      ${B}•font•weight: inherit;
      ${B}•text•decoration: none;
    }

    /* Custom button structural overrides */
    &[arc-button=custom] {
      ${B}•padding: unset;

      [arc-button-content] {
        gap: 0.5em;
      }

      [arc-button-label] {
        display: contents;
      }
    }

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${B}•cursor));
    position: var(--arc-button-position, var(${B}•position, unset));
    transition: var(--arc-button-transition, var(${B}•transition));
    z-index: var(--arc-button-z-index, var(${B}•z-index, unset));
    inset: var(--arc-button-inset, var(--js•inset, unset));

    /* FOOTPRINT */
    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${B}•font•weight));
    font-size: var(--arc-button-font-size, var(${B}•font•size, inherit));
    padding: var(--arc-button-padding, var(${B}•padding));
    margin: var(--arc-button-margin, var(${B}•margin, unset));

    width: var(--arc-button-width, var(${B}•width, auto));
    min-width: var(--arc-button-min-width, var(${B}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${B}•max•width, 100%));

    height: var(--arc-button-height, var(${B}•height, auto));
    min-height: var(--arc-button-min-height, var(${B}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${B}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${B}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${B}•color));
    background: var(--arc-button-background, var(${B}•background));
    border: var(--arc-button-border, var(${Or}));
    border-radius: var(--arc-button-border-radius, var(${Or}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${Jt}));
    outline-offset: var(--arc-button-outline-offset, var(${Jt}•offset));
    overflow: var(--arc-button-overflow, unset);

    /* shadow concession for buttons not already using 'arc-shadow' util */
    &:not([arc-shadow]) {
      box-shadow: var(--arc-button-box-shadow, unset);
    }

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS ----------------------------------------------• */
    [arc-button-content] {
      flex: 1;

      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);
      gap: var(--arc-button-content-gap, unset);

      opacity: var(--arc-button-content-opacity, var(${B}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${B}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${B}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, inherit);

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      display: var(--arc-button-label-display, unset);
      font-size: var(--arc-button-label-font-size, var(${Ve}•font•size));
      overflow: var(--arc-button-label-overflow, clip);
      text-overflow: var(--arc-button-label-text-overflow, ellipsis);
      white-space: var(--arc-button-label-white-space, nowrap);
      max-width: var(--arc-button-label-max-width, 100%);
      opacity: var(--arc-button-label-opacity, var(${B}•opacity));
      transition: var(--arc-button-label-transition, inherit);
      padding-inline: var(${Ve}•padding);
    }

    [arc-button-icon] {
      /** @note: override to ensure auto-width is applied to button icons This protects the
       * intended "gap" (now 'padding-inline' on the label) between icon and label */
      --fa-width: var(${ce}•width);

      flex: none;

      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--arc-button-icon-width, var(${ce}•width));
      min-width: 1em;

      opacity: var(--arc-button-icon-opacity, var(${B}•opacity));
      transition: var(--arc-button-icon-transition, inherit);

      &:has(svg) {
        ${ce}•width: var(--arc-button-svg-width, var(${Se}•width));
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    [arc-button-mask] {
      pointer-events: none;
      position: absolute;
      inset: calc(var(${Or}•size) * -1);
      padding: var(${Or}•size);
      background: var(${Pe}•bg);
      mask: linear-gradient(black, black) content-box exclude, linear-gradient(black, black);
      border-radius: var(--arc-button-border-radius, var(${Or}•radius));
      transition: var(--arc-button-transition, inherit);
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${B}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,Vf=({variant:r,hierarchy:e,isOnMedia:a})=>[{test:e==="primary"&&r!=="neutral"||r==="alpha"||a,value:"white"},{test:!0,value:"brand"}],Uf=({variant:r,hierarchy:e,isOnMedia:a})=>Vf({variant:r,hierarchy:e,isOnMedia:a}).find(t=>t.test)?.value??"brand",Gf=(0,i.jsx)("span",{"arc-button-mask":""}),Kf=!!l.version.startsWith("18"),Wf=r=>r===void 0||r===!1?{isFloating:!1}:r===!0?{isFloating:!0}:{isFloating:!0,inset:r.inset},Xf=({popoverTarget:r,popoverTargetAction:e})=>Kf?{popovertarget:r??void 0,popovertargetaction:e??void 0}:{popoverTarget:r??void 0,popoverTargetAction:e??void 0},Mr=(0,l.forwardRef)(({children:r,disabled:e,...a},t)=>{const o=(0,l.useRef)(null),{_isCustom:n,iconEnd:c,iconStart:d,icon:u,text:h,isActive:p,isDisabled:v,isProcessing:g,isProcessingWithText:f,hasLargeIcon:b,tag:y,href:x,type:A,title:$,layout:k,shape:w,size:E="lg",variant:_="common",hierarchy:T="primary",scheme:C="auto",shadow:S,onMedia:I,isOnMedia:D,floating:N,isInverse:H=!1,...Z}=a,{isFloating:L,inset:M}=Wf(N),P=D??I,F=y??(x?"a":"button"),or=F==="button"?A||"button":void 0,vr=k==="icon",j=f||g||v||e,X=Z?.["aria-disabled"]||j||void 0,sr=n?void 0:Hu({variant:_}),mr=n?void 0:Vu({variant:_,hierarchy:T}),rr=!n&&_s(_)?_:void 0,ur=n?void 0:Bu({shape:w}),yr=n?"inherit":E,lr=pf({layout:k,isFloating:L}),wr=uf({isFloating:L,isOnMedia:P,shadow:S}),V=Uu({variant:_,isInverse:H,scheme:C}),K=!vr&&(r||h),er=(0,i.jsx)(wc,{color:_&&T?Uf({variant:_,hierarchy:T,isOnMedia:P}):"brand"}),O=f&&er||d||u,cr=!vr&&(f&&!(d||u)?void 0:c),br=(g||f&&vr)&&er,$r=sr==="ai"?Gf:void 0,{tooltip:U,...W}=Z,Y=wt(U)?U:void 0,ir=a.tooltip??Y,dr=!!ir,q=wt(ir)?{text:ir}:ir,pr=Z["aria-describedby"],Rr=Nr(void 0,"arc-tooltip"),Ir=a.id?`${a.id}-tooltip`:Rr,Sr=dr?Ir:void 0,Ur=dr?Wo([pr,Sr]):pr,{anchorName:Fr,style:Hr,popoverTarget:He,popoverTargetAction:ee,...we}=W,Je=He?qo(String(Fr||a?.id)):void 0,et=dr?qo(String(Sr)):void 0,Qe=vu(Hr)?Hr:void 0,Lo=Qe&&"anchorName"in Qe&&Qe.anchorName,Wg=[...(wt(Lo)?Du(Lo,", "):[]).map(qo),...Je?[Je]:[],...et?[et]:[]],Xd=Wo(Wg,1/0,", "),qd=Qe!=null&&"inset"in Qe&&Qe.inset!==void 0&&Qe.inset!==null&&Qe.inset!=="",Yd={...Qe??{},...Xd?{anchorName:Xd}:{},...M!==void 0&&!qd?{"--js\u2022inset":M}:{}},Zd=Xf({popoverTarget:He||void 0,popoverTargetAction:ee||void 0}),Jd=(0,l.useCallback)(Qd=>{o.current=Qd,Ae(t,Qd)},[t]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(F,{...we,...Zd,ref:Jd,"arc-button":n?"custom":"","arc-scheme":V,"arc-shadow":wr||void 0,disabled:!x&&j||void 0,href:x||void 0,title:dr?void 0:$||void 0,type:or,"data-layout":lr,"data-shape":ur,"data-size":yr,"data-variant":sr,"data-hierarchy":mr,"has-large-icon":b?"":void 0,"is-deprecated":rr,"is-floating":L?"":void 0,"is-on-media":P?"":void 0,"is-active":p?"":void 0,"is-processing":g||f&&vr?"":void 0,"is-processing-with-text":f&&!vr?"":void 0,"is-disabled":j||X?"":void 0,"aria-disabled":X,"aria-describedby":Ur||void 0,style:Yd,children:[(0,i.jsxs)("span",{"arc-button-content":"",children:[!!O&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof O=="string"?(0,i.jsx)(zr,{icon:O}):O}),!!K&&(0,i.jsx)("span",{"arc-button-label":"",children:K}),!!cr&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof cr=="string"?(0,i.jsx)(zr,{icon:cr}):cr})]}),br,$r]}),dr&&(0,i.jsx)(oo,{...q,id:Sr,alternateAnchor:q?.alternateAnchor??(()=>o.current),anchorName:et})]})});Mr.displayName="ArcButton",Cr("ArcButton",Hf);const Qo=(0,l.forwardRef)((r,e)=>(0,i.jsx)(Mr,{...r,ref:e,"arc-popover-button":""})),Gu=({isInverse:r=!1,isOpen:e,...a})=>(0,i.jsx)(Mr,{icon:"fa-regular fa-xmark",text:"Dismiss",...a,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-dismiss":""}),qf=({isInverse:r=!1,...e})=>(0,i.jsx)(Mr,{icon:"fa-regular fa-arrow-left",text:"Go Back",...e,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-go-back":""}),Yf=({children:r,isSticky:e,showDivider:a,showDismiss:t,dismissProps:o,showGoBack:n,goBackProps:c,headerSlotEnd:d,tag:u="header",...h})=>(0,i.jsx)(u,{...h,"arc-popover-header":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsxs)("div",{"arc-popover-display":"",children:[(0,i.jsxs)("div",{"arc-popover-header-slot":"start",children:[n&&(0,i.jsx)(qf,{...c}),r]}),(0,i.jsxs)("div",{"arc-popover-header-slot":"end",children:[d,t&&(0,i.jsx)(Gu,{...o})]})]})}),Zf=({children:r,tag:e="article",...a})=>(0,i.jsx)(e,{...a,"arc-popover-body":"",children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})}),Jf=({children:r,isSticky:e,showDivider:a,tag:t="footer",...o})=>(0,i.jsx)(t,{...o,"arc-popover-footer":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})});Qo.displayName="ArcPopoverButton";const Q=s`--arc-popover`,ze=s`--arc•popover`,hr=s`--arc•trail•mix`,Ts=s`${ze}•radius`,Qf=s`${ze}•content`,Ac=s`${ze}•outline`,Er=s`${ze}•offset`,Sa=s`${ze}•header`,rm=s`${ze}•body`,Is=s`${ze}•divider`,Cc=s`${ze}•footer`,ua=s`${ze}•tail`,_r=s`${ua}•top`,Tr=s`${ua}•left`,rn=s`${ua}•size`,Ee=s`${ua}•x`,_e=s`${ua}•y`,Ps=s`${ze}•font•size`,Sc=s`${ze}•padding`,Kr=s`${ze}•margin`,Qt=s`${Sa}•padding`,ea=s`${rm}•padding`,za=s`${Cc}•padding`,Ku=s`${ze}•fg`,zc=s`${ze}•bg`,Ec=s`${Qf}•bg`,_c=s`${ua}•fill•a`,Tc=s`${ua}•fill•b`,Ic=s`${ua}•edge•a`,Pc=s`${ua}•edge•b`,em=s`

  ${ze}•fallback: none;
  ${Ac}: var(${Q}-outline-size, var(--arc-border-width-md));
  ${Ts}: var(${Q}-border-radius, var(--arc-border-radius-lg));
  ${Er}: var(${Q}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${Sc}: 0.875em;

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${hr}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${Ee}: var(${Q}-tail-x, 1.75em);
  ${_e}: var(${Q}-tail-y, 1.125em);
  ${rn}: 0px;

  &:where([has-tail]) {
    ${rn}: var(${Q}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${Er}: calc(var(${Q}-offset, var(--js•offset, 0px)) + var(${rn}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${Sc}: 0;
    &:has([arc-popover-header]:not([has-divider])) { ${ea}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${ea}•block•end: 0; }
  }

`,am=s`

  /* default variant: common */
  &[variant] {
    ${Ku}: var(--arc-color-fg-primary);
    ${zc}: var(${Q}-background, var(--arc-color-bg-mono)) border-box;
    ${Ec}: var(${Q}-background, var(--arc-color-bg-mono)) padding-box;
    ${_c}: var(${Q}-background, var(--arc-color-bg-mono));
    ${Tc}: var(${Q}-background, var(--arc-color-bg-mono));
    ${Ic}: var(${Q}-background, var(--arc-color-bg-mono));
    ${Pc}: var(${Q}-background, var(--arc-color-bg-mono));
    ${ze}•shadow: var(--arc-shadow-lg);
    ${Is}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${zc}: var(--arc-color-border-brand-mid) border-box;
    ${Ec}: var(--arc-color-bg-brand-muted) padding-box;
    ${_c}: var(--arc-color-bg-brand-muted);
    ${Tc}: var(--arc-color-bg-brand-muted);
    ${Ic}: var(--arc-color-border-brand-mid);
    ${Pc}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${zc}: var(--arc-gradient-ai-200) border-box;
    ${Ec}: var(--arc-gradient-ai-50) padding-box;
    ${_c}: var(${Q}-ai-purple-50);
    ${Tc}: var(${Q}-ai-blue-50);
    ${Ic}: var(${Q}-ai-purple-200);
    ${Pc}: var(${Q}-ai-blue-200);
  }

`,tm=s`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${Ps}: 0.75em;
    ${Sa}•gap: 0.75em;
    ${Qt}•block: 0.75em;
    ${Qt}•inline: 0.75em;

    ${ea}•block: 0.75em;
    ${ea}•inline: 0.75em;

    ${Cc}•gap: 0.75em;
    ${za}•inline: 0.75em;
    ${za}•block•start: 0.75em;
    ${za}•block•end: 0.75em;
  }

  &[density=comfortable] {
    ${Ps}: 0.875em;
    ${Sa}•gap: 1.125em;
    ${Qt}•block: 1em;
    ${Qt}•inline: 1.25em;

    ${ea}•block: 1.25em;
    ${ea}•inline: 1.25em;

    ${Cc}•gap: 1.125em;
    ${za}•inline: 1.25em;
    ${za}•block•start: 1em;
    ${za}•block•end: 1.25em;

    &:not(:has([arc-popover-body])) {
      ${Sc}: 1.25em;
    }
  }

`,en={TOP:s`
    &[anchor-at*='top-'] {
      ${Kr}: 0 0 var(${Er}) 0;
      ${_r}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${hr}: 95%;
      ${Tr}: calc(0% + var(${Ee}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${hr}: 75%;
      ${Tr}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${hr}: 53.5%;
      ${Tr}: calc(100% - var(${Ee}));
    }
  `,RIGHT:s`
    &[anchor-at*='right-'] {
      ${Kr}: 0 0 0 var(${Er});
      ${Tr}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${hr}: 53.5%;
      ${_r}: calc(0% + var(${_e}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${hr}: 75%;
      ${_r}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${hr}: 95%;
      ${_r}: calc(100% - var(${_e}));
    }
  `,BOTTOM:s`
    &[anchor-at*='bottom-'] {
      ${Kr}: var(${Er}) 0 0 0;
      ${_r}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${hr}: 5%;
      ${Tr}: calc(100% - var(${Ee}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${hr}: 25%;
      ${Tr}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${hr}: 47.5%;
      ${Tr}: calc(0% + var(${Ee}));
    }
  `,LEFT:s`
    &[anchor-at*='left-'] {
      ${Kr}: 0 var(${Er}) 0 0;
      ${Tr}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${hr}: 47.5%;
      ${_r}: calc(100% - var(${_e}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${hr}: 25%;
      ${_r}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${hr}: 5%;
      ${_r}: calc(0% + var(${_e}));
    }
  `,CENTER_AND_CORNERS:s`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${ua}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${Kr}: 0; }
    &[anchor-at*='corner'] { ${Kr}: var(${Er}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},ro={FLIP_BLOCK:s`
    &[anchor-at*='top-'] { ${Kr}: 0 0 var(${Er}) 0; }
    &[anchor-at='top-start']::before { ${hr}: 47.5%; ${_r}: 0%; }
    &[anchor-at='top-center']::before { ${hr}: 25%; ${_r}: 0%; }
    &[anchor-at='top-end']::before { ${hr}: 5%; ${_r}: 0%; }

    &[anchor-at='right-start']::before { ${hr}: 95%; ${_r}: calc(100% - var(${_e})); }
    &[anchor-at='right-end']::before { ${hr}: 53.5%; ${_r}: calc(0% + var(${_e})); }

    &[anchor-at*='bottom-'] { ${Kr}: var(${Er}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${hr}: 53.5%; ${_r}: 100%; }
    &[anchor-at='bottom-center']::before { ${hr}: 75%; ${_r}: 100%; }
    &[anchor-at='bottom-start']::before { ${hr}: 95%; ${_r}: 100%; }

    &[anchor-at='left-end']::before { ${hr}: 5%; ${_r}: calc(0% + var(${_e})); }
    &[anchor-at='left-start']::before { ${hr}: 47.5%; ${_r}: calc(100% - var(${_e})); }
  `,FLIP_INLINE:s`
    &[anchor-at='top-start']::before { ${hr}: 53.5%; ${Tr}: calc(100% - var(${Ee})); }
    &[anchor-at='top-end']::before { ${hr}: 95%; ${Tr}: calc(0% + var(${Ee})); }

    &[anchor-at*='right-'] { ${Kr}: 0 var(${Er}) 0 0; }
    &[anchor-at='right-start']::before { ${hr}: 5%; ${Tr}: 100%; }
    &[anchor-at='right-center']::before { ${hr}: 25%; ${Tr}: 100%; }
    &[anchor-at='right-end']::before { ${hr}: 47.5%; ${Tr}: 100%; }

    &[anchor-at='bottom-end']::before { ${hr}: 47.5%; ${Tr}: calc(0% + var(${Ee})); }
    &[anchor-at='bottom-start']::before { ${hr}: 5%; ${Tr}: calc(100% - var(${Ee})); }

    &[anchor-at*='left-'] { ${Kr}: 0 0 0 var(${Er}); }
    &[anchor-at='left-end']::before { ${hr}: 95%; ${Tr}: 0%; }
    &[anchor-at='left-center']::before { ${hr}: 75%; ${Tr}: 0%; }
    &[anchor-at='left-start']::before { ${hr}: 53.5%; ${Tr}: 0%; }
  `,FLIP_BLOCK_INLINE:s`
    &[anchor-at*='top-'] { ${Kr}: 0 0 var(${Er}) 0; }
    &[anchor-at='top-start']::before { ${hr}: 5%; ${_r}: 0%; ${Tr}: calc(100% - var(${Ee})); }
    &[anchor-at='top-end']::before { ${hr}: 47.5%; ${_r}: 0%; ${Tr}: calc(0% + var(${Ee})); }

    &[anchor-at*='right-'] { ${Kr}: 0 var(${Er}) 0 0; }
    &[anchor-at='right-start']::before { ${hr}: 47.5%; ${_r}: calc(100% - var(${_e})); ${Tr}: 100%; }
    &[anchor-at='right-end']::before { ${hr}: 5%; ${_r}: calc(0% + var(${_e})); ${Tr}: 100%; }

    &[anchor-at*='bottom-'] { ${Kr}: var(${Er}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${hr}: 95%; ${_r}: 100%; ${Tr}: calc(0% + var(${Ee})); }
    &[anchor-at='bottom-start']::before { ${hr}: 53.5%; ${_r}: 100%; ${Tr}: calc(100% - var(${Ee})); }

    &[anchor-at*='left-'] { ${Kr}: 0 0 0 var(${Er}); }
    &[anchor-at='left-end']::before { ${hr}: 53.5%; ${_r}: calc(0% + var(${_e})); ${Tr}: 0%; }
    &[anchor-at='left-start']::before { ${hr}: 95%; ${_r}: calc(100% - var(${_e})); ${Tr}: 0%; }
  `},om=s`
  @position-try --js•try-top-start { position-area: block-start span-inline-end; margin: 0 0 var(${Er}) 0; }
  @position-try --js•try-top-center { position-area: block-start; margin: 0 0 var(${Er}) 0; }
  @position-try --js•try-top-end { position-area: block-start span-inline-start; margin: 0 0 var(${Er}) 0; }
  @position-try --js•try-right-start { position-area: inline-end span-block-end; margin: 0 0 0 var(${Er}); }
  @position-try --js•try-right-center { position-area: inline-end; margin: 0 0 0 var(${Er}); }
  @position-try --js•try-right-end { position-area: inline-end span-block-start; margin: 0 0 0 var(${Er}); }
  @position-try --js•try-bottom-start { position-area: block-end span-inline-end; margin: var(${Er}) 0 0 0; }
  @position-try --js•try-bottom-center { position-area: block-end; margin: var(${Er}) 0 0 0; }
  @position-try --js•try-bottom-end { position-area: block-end span-inline-start; margin: var(${Er}) 0 0 0; }
  @position-try --js•try-left-start { position-area: inline-start span-block-end; margin: 0 var(${Er}) 0 0; }
  @position-try --js•try-left-center { position-area: inline-start; margin: 0 var(${Er}) 0 0; }
  @position-try --js•try-left-end { position-area: inline-start span-block-start; margin: 0 var(${Er}) 0 0; }
  @position-try --js•try-center { position-area: center center; margin: 0; }
  @position-try --js•try-nw-corner { position-area: top left; margin: var(${Er}); }
  @position-try --js•try-ne-corner { position-area: top right; margin: var(${Er}); }
  @position-try --js•try-se-corner { position-area: bottom right; margin: var(${Er}); }
  @position-try --js•try-sw-corner { position-area: bottom left; margin: var(${Er}); }
`,ae={"top-start":s`
    ${Kr}: 0 0 var(${Er}) 0;
    &::before { ${hr}: 95%; ${_r}: 100%; ${Tr}: calc(0% + var(${Ee})); }
  `,"top-center":s`
    ${Kr}: 0 0 var(${Er}) 0;
    &::before { ${hr}: 75%; ${_r}: 100%; ${Tr}: 50%; }
  `,"top-end":s`
    ${Kr}: 0 0 var(${Er}) 0;
    &::before { ${hr}: 53.5%; ${_r}: 100%; ${Tr}: calc(100% - var(${Ee})); }
  `,"right-start":s`
    ${Kr}: 0 0 0 var(${Er});
    &::before { ${hr}: 53.5%; ${Tr}: 0%; ${_r}: calc(0% + var(${_e})); }
  `,"right-center":s`
    ${Kr}: 0 0 0 var(${Er});
    &::before { ${hr}: 75%; ${Tr}: 0%; ${_r}: 50%; }
  `,"right-end":s`
    ${Kr}: 0 0 0 var(${Er});
    &::before { ${hr}: 95%; ${Tr}: 0%; ${_r}: calc(100% - var(${_e})); }
  `,"bottom-start":s`
    ${Kr}: var(${Er}) 0 0 0;
    &::before { ${hr}: 47.5%; ${_r}: 0%; ${Tr}: calc(0% + var(${Ee})); }
  `,"bottom-center":s`
    ${Kr}: var(${Er}) 0 0 0;
    &::before { ${hr}: 25%; ${_r}: 0%; ${Tr}: 50%; }
  `,"bottom-end":s`
    ${Kr}: var(${Er}) 0 0 0;
    &::before { ${hr}: 5%; ${_r}: 0%; ${Tr}: calc(100% - var(${Ee})); }
  `,"left-start":s`
    ${Kr}: 0 var(${Er}) 0 0;
    &::before { ${hr}: 5%; ${Tr}: 100%; ${_r}: calc(0% + var(${_e})); }
  `,"left-center":s`
    ${Kr}: 0 var(${Er}) 0 0;
    &::before { ${hr}: 25%; ${Tr}: 100%; ${_r}: 50%; }
  `,"left-end":s`
    ${Kr}: 0 var(${Er}) 0 0;
    &::before { ${hr}: 47.5%; ${Tr}: 100%; ${_r}: calc(100% - var(${_e})); }
  `},nm=s`
  @supports (container-type: anchored) {
    @container anchored(fallback: --js•try-top-start) { [arc-popover][try-fallbacks][has-tail] { ${ae["top-start"]} } }
    @container anchored(fallback: --js•try-top-center) { [arc-popover][try-fallbacks][has-tail] { ${ae["top-center"]} } }
    @container anchored(fallback: --js•try-top-end) { [arc-popover][try-fallbacks][has-tail] { ${ae["top-end"]} } }
    @container anchored(fallback: --js•try-right-start) { [arc-popover][try-fallbacks][has-tail] { ${ae["right-start"]} } }
    @container anchored(fallback: --js•try-right-center) { [arc-popover][try-fallbacks][has-tail] { ${ae["right-center"]} } }
    @container anchored(fallback: --js•try-right-end) { [arc-popover][try-fallbacks][has-tail] { ${ae["right-end"]} } }
    @container anchored(fallback: --js•try-bottom-start) { [arc-popover][try-fallbacks][has-tail] { ${ae["bottom-start"]} } }
    @container anchored(fallback: --js•try-bottom-center) { [arc-popover][try-fallbacks][has-tail] { ${ae["bottom-center"]} } }
    @container anchored(fallback: --js•try-bottom-end) { [arc-popover][try-fallbacks][has-tail] { ${ae["bottom-end"]} } }
    @container anchored(fallback: --js•try-left-start) { [arc-popover][try-fallbacks][has-tail] { ${ae["left-start"]} } }
    @container anchored(fallback: --js•try-left-center) { [arc-popover][try-fallbacks][has-tail] { ${ae["left-center"]} } }
    @container anchored(fallback: --js•try-left-end) { [arc-popover][try-fallbacks][has-tail] { ${ae["left-end"]} } }
  }
`,cm=s`
  &[data-resolved-at='top-start'] { ${ae["top-start"]} }
  &[data-resolved-at='top-center'] { ${ae["top-center"]} }
  &[data-resolved-at='top-end'] { ${ae["top-end"]} }
  &[data-resolved-at='right-start'] { ${ae["right-start"]} }
  &[data-resolved-at='right-center'] { ${ae["right-center"]} }
  &[data-resolved-at='right-end'] { ${ae["right-end"]} }
  &[data-resolved-at='bottom-start'] { ${ae["bottom-start"]} }
  &[data-resolved-at='bottom-center'] { ${ae["bottom-center"]} }
  &[data-resolved-at='bottom-end'] { ${ae["bottom-end"]} }
  &[data-resolved-at='left-start'] { ${ae["left-start"]} }
  &[data-resolved-at='left-center'] { ${ae["left-center"]} }
  &[data-resolved-at='left-end'] { ${ae["left-end"]} }
`,im=s`
  ${om}

  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${Kr});

    container-type: anchored;
    position-anchor: var(${Q}-anchor-name, var(--js•anchor));

    ${en.TOP}
    ${en.RIGHT}
    ${en.BOTTOM}
    ${en.LEFT}
    ${en.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      /* '--js•fallbacks' is set by the component: automatic flip keywords by default,
         or an ordered list of managed '@position-try' idents when 'fallbackAnchors' is used. */
      position-try-fallbacks: var(--js•fallbacks, flip-block, flip-inline, flip-block flip-inline);
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${ro.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${ro.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${ro.FLIP_BLOCK_INLINE}
      }
    }
  }

  /* Managed fallback placements ('fallbackAnchors') — native '@position-try' tail re-pointing. */
  ${nm}

  /* @note – tail fallback mitigation */
  @supports not (container-type: anchored) {
    /* @note – inline center anchor placement mitigation for Firefox */
    [arc-popover] {
      &[anchor-at='right-center'] {
        position-area: inline-end center;
      }
      &[anchor-at='left-center'] {
        position-area: inline-start center;
      }
    }

    [arc-popover][try-fallbacks][has-tail] {
      &[data-fallbacks='flip-block'] {
        ${ro.FLIP_BLOCK}
      }
      &[data-fallbacks='flip-inline'] {
        ${ro.FLIP_INLINE}
      }
      &[data-fallbacks='flip-block-inline'] {
        ${ro.FLIP_BLOCK_INLINE}
      }

      /* Managed fallback placements ('fallbackAnchors') — resolved-anchor tail re-pointing. */
      ${cm}
    }
  }
`,eo={BACKDROP:s`
    [arc-popover]::backdrop {
      background: var(${Q}-backdrop, transparent);
    }
  `,CONTENT:s`
    [arc-popover-content] {
      flex: var(${Q}-flex, 1);
      position: relative;
      display: var(${Q}-content-display, flex);
      flex-direction: var(${Q}-content-flex-direction, column);
      gap: var(${Q}-content-gap, 0);

      overflow: var(${Q}-overflow, auto);
      overscroll-behavior: var(${Q}-overscroll-behavior, contain);

      color: var(${Q}-color, var(${Ku}));
      padding: var(${Q}-padding, var(${Sc}));
      margin: var(${Q}-margin, unset);
      background: var(${Q}-content-background, var(${Ec}));
      border-radius: calc(var(${Ts}) - var(${Ac}));
      border: var(${Q}-border, none);

      height: var(${Q}-height, auto);
      min-height: var(${Q}-min-height, auto);
      max-height: var(${Q}-max-height, 65vh);
      resize: var(${Q}-resize, none);
    }
  `,HEADER:s`
    [arc-popover-header] {
      flex: var(${Q}-header-flex, none);
      display: var(${Q}-header-display, flex);
      justify-content: var(${Q}-header-justify-content, space-between);
      align-items: var(${Q}-header-align-items, baseline);
      gap: var(${Q}-header-gap, var(${Sa}•gap));

      padding: var(${Q}-header-padding,
        var(${Qt}•block)
        var(${Qt}•inline)
      );

      color: var(${Q}-header-color, inherit);
      background: var(${Q}-header-background, none);

      &[is-sticky] {
        position: sticky;
        z-index: var(${Q}-header-z-index, 2);
        top: var(${Q}-header-top, 0);
      }

      &:has([arc-popover-go-back]) {
        padding-inline-start: 0.875em;
      }

      &:has([arc-popover-dismiss]) {
        padding-inline-end: 0.875em;
      }

      &:where([has-divider]) {
        border-bottom: var(${Q}-header-border-bottom, var(${Is}));
      }

      :where([arc-button]) {
        margin: var(${Q}-header-button-margin, -0.5em);
      }
    }

    [arc-popover-header-slot='start'] {
      ${Sa}•slot•flex: 1;
      ${Sa}•slot•gap: 1em;
    }

    [arc-popover-header-slot='end'] {
      ${Sa}•slot•flex: none;
      ${Sa}•slot•gap: 1.5em;
    }

    [arc-popover-header-slot] {
      min-width: 0%;
      flex: var(${Sa}•slot•flex);
      display: var(${Q}-header-display, flex);
      justify-content: var(${Q}-header-justify-content, unset);
      align-items: var(${Q}-header-align-items, baseline);
      gap: var(${Q}-header-slot-gap, var(${Sa}•slot•gap));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    [arc-popover]:not([arc-popover-header]) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      --arc-button-z-index: var(${Q}-dismiss-z-index, 2);
      inset: var(${Q}-dismiss-inset, 0.5em 0.5em auto auto);
      margin: var(${Q}-dismiss-margin, 0);
    }
  `,BODY:s`
    [arc-popover-body] {
      flex: var(${Q}-body-flex, 1);
      display: var(${Q}-body-display, block);
      flex-direction: var(${Q}-body-flex-direction, unset);

      padding: var(${Q}-body-padding,
        var(${ea}•block•start, var(${ea}•block))
        var(${ea}•inline)
        var(${ea}•block•end, var(${ea}•block))
        var(${ea}•inline)
      );
    }
  `,FOOTER:s`
    [arc-popover-footer] {
      flex: var(${Q}-footer-flex, none);
      display: var(${Q}-footer-display, flex);
      flex-direction: var(${Q}-footer-flex-direction, row-reverse);
      justify-content: var(${Q}-footer-justify-content, space-between);
      align-items: var(${Q}-footer-align-items, center);
      gap: var(${Q}-footer-gap, var(${Cc}•gap));

      padding: var(${Q}-footer-padding,
        var(${za}•block•start)
        var(${za}•inline)
        var(${za}•block•end)
        var(${za}•inline)
      );

      background: var(${Q}-footer-background, none);
      color: var(${Q}-footer-color, inherit);

      &[is-sticky] {
        position: sticky;
        z-index: var(${Q}-footer-z-index, 2);
        bottom: var(${Q}-footer-bottom, 0);
      }

      &:where([has-divider]) {
        border-top: var(${Q}-footer-border-top, var(${Is}));
      }
    }
  `,TAIL:s`
    [arc-popover][has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${ua}•display, block);

      inset: auto;
      top: var(${_r}, auto);
      left: var(${Tr}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${rn});
      height: var(${rn});
      border-radius: 0.125em;

      background: color-mix(in srgb,
        var(${_c}) var(${hr}),
        var(${Tc}) clamp(0%, 100% - var(${hr}), 100%)
      );

      border: var(${Ac}) solid color-mix(in srgb,
        var(${Ic}) var(${hr}),
        var(${Pc}) clamp(0%, 100% - var(${hr}), 100%)
      );
    }
  `},sm=s`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    /* @note – this line-height magic number fixes asymmetrical outline/border issues with certain placements
    on low DPI displays. It's based on the default (--arc-line-height-standard) of 1.4 */
    line-height: var(${Q}-line-height, 1.395);

    /* @note – this font-size is intended NOT to be altered; it is locked in as a reset (browser baseline)
    for various popover calculations. The effective popover font size is set on '[arc-popover-display]'. */
    font-size: initial;

    background: var(${Q}-background, var(${zc}));
    border: var(${Ac}) solid transparent;
    border-radius: var(${Ts});
    box-shadow: var(${Q}-shadow, var(${ze}•shadow));
    width: var(${Q}-width, auto);
    height: var(${Q}-height, auto);
    min-width: var(${Q}-min-width, auto);
    min-height: var(${Q}-min-height, auto);
    max-width: var(${Q}-max-width, 100vw);
    max-height: var(${Q}-max-height, 65vh);
  }

  /* @note – font-size control for header|footer|body padding calculations */
  [arc-popover-display] {
    display: contents;
    font-size: var(${Q}-font-size, var(${Ps}));
  }

  ${eo.CONTENT}
  ${eo.HEADER}
  ${eo.BODY}
  ${eo.FOOTER}
  ${eo.TAIL}
  ${eo.BACKDROP}
`,an={SETUP:em,ANCHORS:im,VARIANTS:am,DENSITIES:tm,ELEMENT:sm},lm=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${Ef}

  [arc-popover] {
    ${an.SETUP}
    ${an.VARIANTS}
    ${an.DENSITIES}
  }

  ${an.ANCHORS}
  ${an.ELEMENT}

  /* POPOVER anchoring mitigation ----------------------------------• */

  [arc-popover][is-floating] {
    position-area: none;
    position-try-fallbacks: none;
    margin: 0; /* zero out the gap on the Floating UI path to prevent doubled offsets */
  }

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    z-index: var(--arc-popover-z-index, 10000); /* default for floating-ui fallback */
    transition-timing-function: ease-out;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-behavior: allow-discrete;
    transition-property: display, opacity;

    @supports (overlay: auto) {
      transition-property: display, overlay, opacity;
    }

    opacity: 0;
    &:popover-open { opacity: 1; }

    &::backdrop { transition: inherit; opacity: 0; }
    &:popover-open::backdrop { opacity: 1; }
  }

  @starting-style {
    [arc-popover]:popover-open { opacity: 0; }
    [arc-popover]:popover-open::backdrop { opacity: 0; }
  }
}

`,Wu=(0,l.forwardRef)(({children:r,popover:e=Me.popover,anchorAt:a=Me.anchorAt,anchorName:t,anchorProps:o,alternateAnchorId:n,alternateAnchor:c,boundary:d=Me.boundary,tryFallbacks:u=Me.tryFallbacks,fallbackAnchors:h=Me.fallbackAnchors,density:p=Me.density,variant:v=Me.variant,scheme:g=Me.scheme,isInverse:f,hasTail:b,tailSize:y=Me.tailSize,offset:x=Me.offset,hidePopoverButton:A,headerSlot:$,showHeaderDivider:k,isHeaderSticky:w,showDismiss:E,dismissProps:_,showGoBack:T,goBackProps:C,headerSlotEnd:S,footerSlot:I,isFooterSticky:D,showFooterDivider:N,tag:H="div",contentTag:Z="div",onToggle:L,...M},P)=>{const F=(0,l.useRef)(null),or=(0,l.useRef)(null),vr=(0,l.useRef)(null),j=(0,l.useRef)(L);(0,l.useImperativeHandle)(P,()=>or.current);const[X,sr]=(0,l.useState)(!1),mr=(0,l.useMemo)(()=>g==="auto"?void 0:f?"inverse":g,[f,g]),rr=(0,l.useCallback)(()=>{if(typeof document>"u")return F.current??null;const W=Aa(F.current??or.current)??document;return n?W.getElementById(n):typeof c=="string"?W.getElementById(c):c instanceof HTMLElement?c:typeof c=="function"?c():c&&typeof c=="object"&&"current"in c?c.current:F.current??null},[c,n]),ur=u||d==="flip",yr=ur?zu(h):[],lr=yr.length?yr.map(Eu).join(", "):"flip-block, flip-inline, flip-block flip-inline",wr=!!b&&!Su.includes(a),V=_u({canHaveTail:wr,tailSize:y}),K=(0,l.useMemo)(()=>{const W=t||n||(typeof c=="string"?c:void 0)||o?.id||M.id||void 0;return bs(String(W))},[t,o?.id,M.id,c,n]),er=(0,l.useMemo)(()=>({popoverTarget:M.id,"aria-haspopup":!0,"aria-controls":M.id,"aria-expanded":X}),[M.id,X]),O=(0,l.useMemo)(()=>({isOpen:X,"aria-label":"Dismiss",...er,..._}),[_,X,er]),cr=(0,l.useMemo)(()=>({ref:F,...er,...o,tooltip:X?void 0:o?.tooltip,anchorName:K||""}),[o,er,K,X]),br=(0,l.useMemo)(()=>({"--js\u2022anchor":cr?.anchorName||"","--js\u2022offset":Number(x)===0?"":`${x}px`,"--js\u2022tail":V.cssTailVar,"--js\u2022fallbacks":lr}),[cr?.anchorName,x,V.cssTailVar,lr]);da(()=>{const W=rr();if(vr.current=W,!!W)return Iu(W,cr.anchorName)},[rr,cr.anchorName,X]),(0,l.useEffect)(()=>{j.current=L},[L]),(0,l.useEffect)(()=>{const W=or.current;if(!W)return;const Y=kr=>{const{newState:ir}=kr,dr=ir==="open";sr(dr),dr&&(vr.current=rr()),j.current?.(kr)};return W.addEventListener("toggle",Y),()=>W.removeEventListener("toggle",Y)},[rr]),Qv({anchorEl:vr.current,popoverEl:or.current,anchorAt:a,tryFallbacks:ur,fallbackAnchors:yr,offsetPx:Number(x)||0,tailSizePx:V.floatingTailPx,hasTail:wr,isOpen:X}),tf({anchorEl:vr.current,popoverEl:or.current,anchorAt:a,tryFallbacks:ur,fallbackAnchors:yr,hasTail:wr,isOpen:X});const $r=!!($||T||S),U=!!I;return(0,i.jsxs)(i.Fragment,{children:[!((n||c)&&A)&&(0,i.jsx)(Qo,{...cr}),(0,i.jsxs)(H,{...M,ref:or,"arc-popover":"","arc-scheme":mr,"anchor-at":a,"is-floating":Cu?"":void 0,"try-fallbacks":ur?"":void 0,popover:e,variant:v,density:p,"has-tail":wr?"":void 0,role:M.role??"dialog",style:{...M.style,...br},children:[(0,i.jsxs)(Z,{"arc-popover-content":"",children:[$r&&(0,i.jsx)(Yf,{showDivider:k,showGoBack:T,goBackProps:C,headerSlotEnd:S,showDismiss:E,dismissProps:O,isSticky:w,children:$}),$r||U?(0,i.jsx)(Zf,{children:r}):(0,i.jsx)(Z,{"arc-popover-display":"",children:r}),U&&(0,i.jsx)(Jf,{showDivider:N,isSticky:D,children:I})]}),E&&!$r&&(0,i.jsx)(Gu,{...O})]})]})});Wu.displayName="ArcPopover";const Rs=Wu;Rs.handlePopover=Tu,Rs.Button=Qo;const ha=Rs;Cr("ArcPopover",lm);const ao=s`--arc•icon•text`,tn=s`${ao}•font•size`,Xu=s`${ao}•icon`,js=s`${ao}•text`,qu=s`${ao}•subtext`,pa=s`${ao}•fg`,Ka=s`${ao}•gap`,it=s`${Xu}•size`,Yu=s`${Xu}•vertical•align`,on=s`${js}•overflow`,Rc=s`${js}•text•overflow`,jc=s`${js}•white•space`,Lc=s`${qu}•font•size`,Zu=s`${qu}•fg`,dm=s`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${pa}: currentcolor;
  }

  &[data-variant=primary] {
    ${pa}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${pa}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${pa}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${pa}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${pa}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${pa}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${pa}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${pa}: var(--arc-color-fg-critical-mid);
  }

`,um=s`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${tn}: 1em;
    ${Lc}: 0.75em;
    ${it}: 1em;
    ${Ka}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${tn}: var(--arc-font-size-14);
    ${Lc}: var(--arc-font-size-12);
    ${Ka}: var(${R}•3);
  }

  &[data-size=sm] {
    ${tn}: var(--arc-font-size-12);
    ${Lc}: var(--arc-font-size-12);
    ${Ka}: var(${R}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${Ka}: var(${R}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${Ka}: var(${R}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${Ka}: var(${R}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${it}: var(${m}•24); }
  &[icon-size=lg] { ${it}: var(${m}•20); }
  &[icon-size=md] { ${it}: var(${m}•16); }
  &[icon-size=sm] { ${it}: var(${m}•14); }
  &[icon-size=xs] { ${it}: var(${m}•12); }
`,hm=s`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${Zu}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${pa}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${it}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: baseline;

  &[data-layout=inline] {
    ${on}: unset;
    ${Rc}: unset;
    ${jc}: unset;

    ${Yu}: calc((var(${it}) - var(${tn})) / -2);

    &:has(svg) { ${Yu}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${on}: visible;
    ${Rc}: unset;
    ${jc}: normal;

    &[data-overflow=truncate] {
      ${on}: hidden;
      ${Rc}: ellipsis;
      ${jc}: nowrap;
    }
  }

`,pm=s`
@layer arc-components {

  [arc-icon-text] {
    ${dm}
    ${um}
    ${hm}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${tn}));
    color: var(--arc-icon-text-text-color, var(${pa}));
    line-height: var(--arc-icon-text-line-height, inherit);

    [data-element=icon] {
      display: contents;
    }

    [data-element] {
      /* @note: SVG alignment mitigation strategy; presents in multiple components
       * Badges, CheckboxBars, RadioBars, supporting IconText cases like Links, etc. when using SVG icons.
       */
      :where(svg) {
        flex: none;
        align-self: var(--arc-icon-text-svg-align-self, normal);
        display: var(--arc-icon-text-svg-display, inline-block) !important;
        width: var(--arc-icon-text-svg-width, 1.25em) !important;
        height: var(--arc-icon-text-svg-height, auto) !important;
        max-height: var(--arc-icon-text-svg-max-height, 1lh);
        fill: var(--arc-icon-text-svg-fill, currentColor);
        vertical-align: var(--arc-icon-text-svg-vertical-align, text-bottom) !important;
        overflow: var(--arc-icon-text-svg-overflow, visible) !important;
      }
    }

    [data-element=text],
    [data-element=subtext] {
      position: relative;
      hyphens: var(--arc-icon-text-hyphens, auto);
    }

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-icon-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-icon-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    /* @default • gutter layout */
    &[data-layout=gutter] {
      display: inline-flex;
      align-items: var(--arc-icon-text-align-items, first baseline);
      gap: var(--arc-icon-text-gap, var(${Ka}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${on}));

      &[is-flipped] { flex-direction: row-reverse; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${Lc}));
        color: var(--arc-icon-text-subtext-color, var(${Zu}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${on}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${Rc}));
        white-space: var(--arc-icon-text-white-space, var(${jc}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${Ka})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${Ka})); }
      [data-element=subtext] { display: contents; }
    }
  }

  [arc-icon-text] {
    &[arc-icon-status=brand],
    &[arc-icon-status=announcement] {
      --arc-icon-color: var(--arc-color-fg-brand-mid);
    }

    &[arc-icon-status=info] {
      --arc-icon-color: var(--arc-color-fg-info-mid);
    }

    &[arc-icon-status=success] {
      --arc-icon-color: var(--arc-color-fg-success-mid);
    }

    &[arc-icon-status=warning] {
      --arc-icon-color: var(--arc-color-fg-warning-mid);
    }

    &[arc-icon-status=error],
    &[arc-icon-status=critical] {
      --arc-icon-color: var(--arc-color-fg-critical-mid);
    }

    &[arc-icon-status=processing] {
      --arc-icon-color: var(--arc-color-fg-brand-mid);
    }
  }
}

`,gm=gr(Xr,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),le=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="span",icon:n,iconTooltip:c,text:d,subtext:u,gradient:h,overflow:p,iconSize:v,gapSize:g,isFlipped:f=!1,isStrong:b=!1,...y})=>{const x=r||d,A=!!n,$=!!x,k=e==="gutter",w=e==="inline",E=A&&(!f||k),_=A&&$&&f&&w,T=!!v&&v!=="inherit",C=T&&No.includes(v)?v:void 0,S=T&&!No.includes(v)?v:void 0,I=g!=="inherit"?g:void 0,D=p!=="inherit"?p:void 0,N=ps(n),H=typeof N=="string"?(0,i.jsx)(zr,{icon:N,size:S,gradient:h}):N,Z=c?(0,i.jsx)(oo,{text:c,children:H}):H;return(0,i.jsxs)(o,{...y,"arc-icon-text":"","data-variant":t,"data-layout":e,"data-overflow":D,"data-size":a,"data-gap":I,"icon-size":C,"is-flipped":f?"":void 0,"is-strong":b?"":void 0,children:[E&&(0,i.jsx)("span",{"data-element":"icon",children:Z}),$&&(0,i.jsxs)("span",{"data-element":"text",children:[x,!!u&&(k?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:u})]}):(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("span",{"data-element":"subtext",children:u})]}))]}),_&&(0,i.jsx)("span",{"data-element":"icon",children:Z})]})};Cr("ArcIconText",pm);const ga={...Me,popover:gs[2],anchorAt:mc[2],boundary:fs[1],tryFallbacks:!0,scheme:vs[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0},Mc=new WeakSet,vm=100,fm=100;let Ls=!0,Ms=null;const mm=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),bm=r=>r instanceof Element?mm?r.matches(":focus-visible")===!0:Ls:!1,Ds=new WeakMap,Os=new WeakMap,nn=new Set,Dc=(r,e)=>{const a=r.get(e);a!=null&&(clearTimeout(a),r.delete(e))},Ju=(r,e,a,t)=>{const o=window.setTimeout(()=>{t(),r.delete(e)},a);r.set(e,o)},Qu="[aria-describedby]",$m=r=>typeof r=="object"&&r!==null&&r.hasAttribute?.("popover")===!0,rh=r=>r instanceof HTMLElement&&r.getAttribute("role")==="tooltip"&&$m(r),ym=r=>!!r&&(r.tagName==="LABEL"||r.hasAttribute("arc-label")),xm=r=>r?.match(/\S+/g)??[],Ns=(r,e)=>{const a=Aa(e??document.documentElement);if(!a)return null;const t=a.querySelector(`[aria-describedby~="${r}"]`);return t?t.closest("label,[arc-label]")??t:null},wm=r=>{if(!(r instanceof Element))return null;const e=r.closest?.(Qu);if(e){const t=e.getAttribute("aria-describedby")??"";if(t)return{anchor:e.closest?.("label,[arc-label]")??e,tooltipId:t}}let a=r;for(;a;){if(ym(a)){const t=a.querySelector?.(Qu),o=t?.getAttribute?.("aria-describedby")??"";if(t&&o)return{anchor:a,tooltipId:o}}a=a.parentElement}return null},km=r=>{if(!(r instanceof Element))return null;const e=r.closest?.('[role="tooltip"][popover]')??null;return e instanceof HTMLElement?e:null},Am=r=>r?.id?Ns(r.id,r):null,Cm=r=>{const e=km(r),a=wm(r);if(!a&&e){const u=Am(e);return!u||!e.id?null:{anchor:u,tooltip:e}}if(!a)return null;const{anchor:t,tooltipId:o}=a;if(!o)return null;const n=Aa(r);if(!n)return null;const c=xm(o),d=e??c.map(u=>n.getElementById(u)).find(u=>rh(u))??null;return rh(d)?{anchor:t,tooltip:d}:null},Sm=(r,e,a)=>{const t=a instanceof Element?a:null;if(!t)return!1;const o=r===t||r.contains(t),n=e===t||e.contains(t);return o||n},eh=r=>{r.isConnected&&(r.showPopover?.(),nn.add(r))},ah=r=>{r.isConnected&&(r.hidePopover?.(),nn.delete(r))},zm=(r,e)=>{if(Dc(Os,r),Dc(Ds,r),!e){eh(r);return}Ju(Ds,r,vm,()=>eh(r))},Bs=(r,e)=>{if(Dc(Ds,r),Dc(Os,r),!e){ah(r);return}Ju(Os,r,fm,()=>ah(r))},Em=()=>{nn.forEach(r=>{Bs(r,!1)})},cn=(r,e,a,t)=>{const o=Cm(e);if(!o)return;const{anchor:n,tooltip:c}=o;if(r){zm(c,t);return}Sm(n,c,a)||Bs(c,t)};let Oc=null,Nc=null,Bc=null,Fc=null,Hc=null,Vc=null,to=null,sn=null;const th=r=>{if(!r&&typeof document>"u")return;const e=r?Aa(r):document;if(!e||Mc.has(e))return;Vc=t=>{Ls=!1,Ms=t.target},to=()=>{Ms=null},Oc=t=>cn(!0,t.target,void 0,!0),Bc=t=>cn(!1,t.target,t.relatedTarget,!0),Nc=t=>{bm(t.target)&&cn(!0,t.target,void 0,!1)},Fc=t=>{const o=t.relatedTarget??Ms;cn(!1,t.target,o,!1)},Hc=t=>{t.key==="Tab"&&(Ls=!0),t.key==="Escape"&&(nn.size>0&&t.preventDefault(),cn(!1,t.target,void 0,!1),nn.forEach(o=>Bs(o,!1)))},sn=t=>{if(t.newState!=="open")return;const{target:o}=t;if(o instanceof HTMLElement&&o.getAttribute("role")!=="tooltip"&&o.getAttribute("popover")!=="manual"){try{if(!o.matches("[popover]:popover-open"))return}catch{return}Em()}},[["pointerdown",Vc],["pointerup",to],["pointercancel",to],["pointerover",Oc],["focusin",Nc],["pointerout",Bc],["focusout",Fc],["keydown",Hc]].forEach(([t,o])=>{e.addEventListener(t,o)}),e.addEventListener("toggle",sn,!0),Mc.add(e)},_m=()=>{if(!Mc.has(document)||typeof document>"u")return;[["pointerdown",Vc],["pointerup",to],["pointercancel",to],["pointerover",Oc],["focusin",Nc],["pointerout",Bc],["focusout",Fc],["keydown",Hc]].forEach(([e,a])=>{a&&document.removeEventListener(e,a)}),sn&&document.removeEventListener("toggle",sn,!0),Oc=null,Nc=null,Bc=null,Fc=null,Hc=null,Vc=null,to=null,sn=null,Mc.delete(document)},va=s`--arc•tooltip`,oh=s`${va}•subtext`,nh=s`${va}•slot`,Tm=s`
@layer arc-components {
  [arc-tooltip] {
    ${va}•width: max-content;
    ${va}•max•width: 20em;
    ${va}•font•size: var(${m}•12);
    ${va}•padding: var(${R}•10);
    ${oh}•spacing: var(${R}•6);
    ${nh}•margin•top: var(${R}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-overflow: var(--arc-tooltip-overflow, clip);
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: var(--arc-tooltip-min-width, auto); /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${va}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${va}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${va}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${va}•padding));
    --arc-popover-tail-x: var(--arc-tooltip-tail-x, 1.125em);
    --arc-popover-tail-y: var(--arc-tooltip-tail-y, 1.125em);
    --arc-popover-line-height: var(--arc-line-height-tight);

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${va}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${oh}•spacing));

    [arc-tooltip-content] {
      text-align: var(--arc-tooltip-text-align, unset);
    }

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${nh}•margin•top));
    }
  }
}
`,oo=(0,l.forwardRef)(({id:r,children:e,slot:a,isEnabled:t=ga.isEnabled,popover:o=ga.popover,variant:n=ga.variant,anchorAt:c=ga.anchorAt,alternateAnchor:d,boundary:u=ga.boundary,tryFallbacks:h=ga.tryFallbacks,hasTail:p=ga.hasTail,offset:v=ga.offset,scheme:g=ga.scheme,isStrong:f=ga.isStrong,text:b,subtext:y,icon:x,isFlipped:A,...$},k)=>{const w=Nr(r,"arc-tooltip"),E=(0,l.useRef)(null);(0,l.useImperativeHandle)(k,()=>E.current);const _=N=>typeof N=="object"&&N!==null&&"tabIndex"in N,T=e,C=!!d;let S=null;(0,l.isValidElement)(T)?S=t?(0,l.cloneElement)(T,{"aria-describedby":w,..._(T.props)&&T.props.tabIndex!=null?{}:{tabIndex:0}}):T:!C&&typeof console<"u"&&wu("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const I=(0,l.useMemo)(()=>()=>Ns(w,E.current),[w]),D=g==="auto"?void 0:g;return(0,l.useEffect)(()=>{if(t)try{th(E.current)}catch{}},[t]),(0,i.jsxs)(i.Fragment,{children:[S,t&&(0,i.jsxs)(ha,{...$,"arc-tooltip":"",scheme:$?.isInverse?"inverse":D,role:"tooltip",id:w,ref:E,popover:o,anchorAt:c,tryFallbacks:h??u==="flip",variant:n,hasTail:p,offset:v,hidePopoverButton:!0,alternateAnchor:d??I,tag:$?.tag??"span",contentTag:$?.contentTag??"span",children:[b&&(0,i.jsx)(le,{"arc-tooltip-content":"",text:b,subtext:y,icon:x,isFlipped:A,isStrong:f,size:"inherit",variant:"inherit"}),a&&(0,i.jsx)("span",{"arc-tooltip-slot-content":"",children:a})]})]})});Cr("ArcTooltip",Tm);const Im="Anonymous",ch=(r={})=>r.isAnonymous||!(r.name||r.email||r.src),Fs=(r={})=>ch(r)?r.anonymousName||Im:r.name||r.email,Pm=r=>r?.trim().charAt(0)??void 0,Rm=(r,e)=>{let a=0;const t=Math.min(r.length,50);for(let o=0;o<t;o+=1)a=(a+r.charCodeAt(o))%(e??33);return a},jm=(r,e,a)=>e?.length?r?.trim()===""?a||e[0]:e[Rm(r,e.length)]||a||e[0]:a,ih=gr(Ha,["blue","orange","mint","red","yellow","green","maroon","purple"]),Lm=gr(Ha,["neutral","white","black"]),ln=gr(ie,["lg","md","sm","xs"]),Mm=[...ln,"profile-sm","profile-md","profile-lg"],Vr=s`--arc•avatar`,fe=s`${Vr}•chars`,Hs=s`

  &[data-size=lg] {
    ${Vr}•font•size: var(${m}•16);
    ${Vr}•size: 2.5em; /* target: 40px @ 100% */
    ${fe}•1: var(${m}•16);
    ${fe}•2: var(${m}•14);
    ${fe}•3: var(${m}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${Vr}•font•size: var(${m}•14);
    ${Vr}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${fe}•1: var(${m}•14);
    ${fe}•2: var(${m}•12);
    ${fe}•3: var(${m}•10);
  }

  &[data-size=sm] {
    ${Vr}•font•size: var(${m}•12);
    ${Vr}•size: 2em; /* target: 24px @ 100% */
    ${fe}•1: var(${m}•12);
    ${fe}•2: var(${m}•10);
    ${fe}•3: var(${m}•8);
  }

  &[data-size=xs] {
    ${Vr}•font•size: var(${m}•10);
    ${Vr}•size: 2em; /* target: 20px @ 100% */
    ${fe}•1: var(${m}•10);
    ${fe}•2: var(${m}•8);
    ${fe}•3: var(${m}•6);
  }

`,Dm=s`

  &[data-size=profile-lg] {
    ${Vr}•font•size: var(${m}•40);
    ${Vr}•size: 4em;
  }

  &[data-size=profile-md] {
    ${Vr}•font•size: var(${m}•32);
    ${Vr}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${Vr}•font•size: var(${m}•28);
    ${Vr}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,sh=s`

  [arc-avatar] {
    ${Vr}•font•size: inherit;
    ${Vr}•size: inherit;
    ${fe}•1: inherit;
    ${fe}•2: inherit;
    ${fe}•3: inherit;
  }

`,st=s`${Vr}•fg`,De=s`${Vr}•bg`,Om=s`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${st}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${De}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${De}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${De}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${De}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${De}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${De}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${De}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${De}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${st}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${De}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    /* @default anonymous */
    &:has([data-color=neutral]) {
      ${st}: var(--arc-color-fg-secondary);
      ${De}: var(--arc-color-alpha-subtle);
    }

    /* anonymous on-media */
    &[is-on-media]:has([data-color=neutral]) {
      ${st}: var(--arc-color-fg-on-stark);
      ${De}: var(--arc-color-alpha-stark);
    }

    &:has([data-color=white]) {
      ${st}: var(--arc-color-mono-black);
      ${De}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${Hs}
    ${Dm}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${Vr}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${Vr}•size));
    aspect-ratio: 1 / 1;
    line-height: normal;

    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: var(--arc-border-radius-circle);

    opacity: var(--arc-alpha-100);
    transition: opacity 200ms ease-out;

    &[data-is-inactive] {
      opacity: var(--arc-alpha-50);
    }

    &[is-on-media] {
      box-shadow: var(--arc-avatar-box-shadow, 0 0 0 var(${m}•2) var(--arc-color-mono-white));
    }

    [data-num-length] {
      --arc-button-font-size: var(${fe}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${fe}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${fe}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${Vr}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${De}));
      --arc-button-color: var(--arc-avatar-color, var(${st}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${Vr}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${st}: transparent;
        ${De}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${De});
      color: var(${st});
    }

    :is([data-element=initial]) {
      font-size: var(--arc-avatar-initial-font-size, inherit);
      text-transform: var(--arc-avatar-text-transform, capitalize);
    }

    [data-element] {
      flex: none;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      border-radius: inherit;
      font-weight: var(--arc-font-weight-600);
      visibility: var(${Vr}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${Vr}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,lh="blue",dh="neutral",Nm="fa-solid fa-user arc-aw",Bm=({children:r,icon:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"anonymous","data-color":"neutral",children:r||(0,i.jsx)(zr,{icon:e})}),Fm=({isLoaded:r,hasError:e,onLoad:a,onError:t,...o})=>{const n=!r&&""||void 0,c=e&&""||void 0,d=!r||e||void 0;return(0,i.jsx)("img",{...o,hidden:d,"data-element":"image","data-not-loaded":n,"data-has-error":c,onLoad:a,onError:t})},Hm=({children:r,initial:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"initial","data-color":a,children:r||e}),Uc=(0,l.forwardRef)(({children:r,size:e,color:a,isActive:t=!0,isAnonymous:o,anonymousName:n,alt:c,src:d,name:u,email:h,isOnMedia:p,showTooltip:v,tooltipProps:g,title:f,...b},y)=>{const[x,A]=(0,l.useState)(!1),[$,k]=(0,l.useState)(!1),w=F=>{A(!0),k(!1),b.onLoad?.(F)},E=F=>{A(!1),k(!0),b.onError?.(F)},_=Pm(u||h),T=!!_,C=o||(!x||$)&&!T,S=!C&&!!d&&!$||void 0,I=(C&&dh||void 0)??(a||void 0)??jm(String(h||u||void 0),ih,lh)??lh,D={src:d,alt:c,isLoaded:x,hasError:$,onLoad:w,onError:E};(0,l.useEffect)(()=>{C&&A(!1)},[C]);const{text:N,isEnabled:H,...Z}=g??{},L=N??Fs({isAnonymous:o,anonymousName:n,name:u,email:h,src:d})??c,M=(H??v)&&!!L,P=(0,i.jsx)("span",{...b,ref:y,"arc-avatar":"","data-is-inactive":!t||void 0,"data-size":e,"aria-label":(f??u??h)||void 0,title:M?void 0:f,"is-on-media":p?"":void 0,children:r||(C?(0,i.jsx)(Bm,{icon:Nm,color:dh}):(0,i.jsxs)(i.Fragment,{children:[S&&(0,i.jsx)(Fm,{...D}),T&&(0,i.jsx)(Hm,{initial:_,color:I})]}))});return M?(0,i.jsx)(oo,{...Z,text:L,children:P}):P});Cr("ArcAvatar",Om);const Vm=s`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;

    /* For Neutral/Anonymous avatars -------------------------------• */
    [data-element=list] {
      margin: 0;
      padding: var(${m}•4) var(${m}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${m}•6);
      padding: var(${m}•4) var(${m}•8);
    }

    ${Hs}
    ${sh}
  }

}
`,Um=ln,Gm=r=>(0,i.jsx)("ul",{...r,"data-element":"list"}),Km=r=>(0,i.jsx)("li",{...r,"data-element":"list-item"}),Wm=({count:r,anchorId:e,overflowId:a,shouldShowOverflow:t,...o})=>(0,i.jsx)(Uc,{title:`+${r}`,children:(0,i.jsx)(ha.Button,{...o,id:e,popoverTarget:a,text:`+${r}`,variant:"common",hierarchy:"primary",disabled:!t,"data-element":"counter","data-color":"black","data-num-length":r?.toString().length})}),Xm=({children:r,id:e,size:a="sm",overflowCount:t=0,shouldShowOverflow:o=!1,anchorAt:n="bottom-end",tryFallbacks:c=!0,...d})=>{const u=Math.min(t,999),h=Nr(e,"arc-avatar-overflow"),p=(0,l.useMemo)(()=>`${h}-anchor`,[h]),v=(0,l.useMemo)(()=>l.Children.toArray(r),[r]);return(0,i.jsxs)(i.Fragment,{children:[u>0&&(0,i.jsx)(Wm,{count:u,anchorId:p,overflowId:h,shouldShowOverflow:o}),o&&u>0&&(0,i.jsx)(ha,{...d,scheme:"inverse","arc-avatar-overflow":"",id:h,anchorAt:n,tryFallbacks:c,alternateAnchorId:p,hidePopoverButton:!0,variant:"common","data-size":a,children:(0,i.jsx)(Gm,{children:v.map((g,f)=>(0,i.jsx)(Km,{children:g},f))})})]})};Cr("ArcAvatarOverflow",Vm);const qm=s`
@layer arc-components {

  [arc-avatar-pile] {
    --arc-button-inline-spacing: 0;

    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${Hs}
    ${sh}

    /* Cutout (mask) a portion of subsequent avatars ---------------• */
    [arc-avatar]+[arc-avatar] {
      margin-left: -0.125em;

      /* magic! */
      mask: radial-gradient(
        50% 50% at -43% 50%,
        transparent 110%,
        black 110%
      ) padding-box;
    }

  }

}
`,Ym=ln,Zm=({size:r="md",...e})=>(0,i.jsx)("div",{...e,"arc-avatar-pile":"","data-size":r});Cr("ArcAvatarPile",qm);const Re=s`${Vr}•text`,kt=s`${Vr}•subtext`,no=s`${Vr}•gap`,Jm=s`
@layer arc-components {

  [arc-avatar-text] {
    ${Re}•font•size: var(${m}•14);
    ${kt}•font•size: var(${m}•12);
    ${no}: var(${m}•8);

    ${Re}•overflow: unset;
    ${Re}•text•overflow: unset;
    ${Re}•white•space: unset;

    &[data-overflow=truncate] {
      ${Re}•overflow: hidden;
      ${Re}•text•overflow: ellipsis;
      ${Re}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${Re}•font•size: 1em;
      ${kt}•font•size: 0.875em;
      ${no}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${Re}•font•size: var(--arc-font-size-14);
      ${kt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${Re}•font•size: var(--arc-font-size-14);
      ${kt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${Re}•font•size: var(--arc-font-size-14);
      ${kt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${Re}•font•size: var(--arc-font-size-12);
      ${kt}•font•size: var(--arc-font-size-12);
      ${no}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${no}: var(${m}•12); }
    &[data-gap=sm] { ${no}: var(${m}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${Re}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(--arc-avatar-text-gap, var(${no}));
    line-height: normal;
    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-avatar-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-avatar-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    [data-element=text] {
      flex: 1;
      text-align: start;
    }

    [data-element=subtext] {
      display: var(--arc-avatar-subtext-display, block);
      font-size: var(--arc-avatar-subtext-font-size, var(${kt}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${Re}•overflow);
      text-overflow: var(${Re}•text•overflow);
      white-space: var(${Re}•white•space);
    }
  }

}
`,Qm=cc,rb=Lr,eb=ln,Gc=({children:r,avatar:e={},subtext:a,size:t,gapSize:o,overflow:n,isStrong:c,...d})=>{const u=ch(e),h=r||Fs(e),p=o!=="inherit"?o:void 0,v=n!=="inherit"?n:void 0;return(0,i.jsxs)("span",{...d,"arc-avatar-text":"","data-gap":p,"data-overflow":v,"is-strong":c?"":void 0,children:[(0,i.jsx)(Uc,{...e,isAnonymous:u,size:t}),(0,i.jsxs)("span",{"data-element":"text",children:[h,a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:a})]})]})]})};Cr("ArcAvatarText",Jm);const uh=({fg:r,bg:e})=>s`
  &:has(>[data-color=mono-inverse]) {
    ${r}•high: var(--arc-color-fg-on-mono-inverse);
    ${e}•high: var(--arc-color-bg-mono-inverse);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${e}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=brand]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-brand-stark);
    ${r}•low: var(--arc-color-fg-brand-stark);
    ${e}•low: var(--arc-color-bg-brand-subtle);
  }

  &:has(>[data-color=mono]) {
    ${r}•high: var(--arc-color-fg-on-mono);
    ${e}•high: var(--arc-color-bg-mono);
    ${r}•low: var(--arc-color-fg-on-mono);
    ${e}•low: var(--arc-color-bg-mono);
  }

  &:has(>[data-color=blue]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-blue-stark);
    ${r}•low: var(--arc-color-fg-blue-stark);
    ${e}•low: var(--arc-color-bg-blue-subtle);
  }

  &:has(>[data-color=neutral]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${e}•high: var(--arc-color-bg-neutral-heavy);
    ${r}•low: var(--arc-color-fg-neutral-stark);
    ${e}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=purple]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-purple-stark);
    ${r}•low: var(--arc-color-fg-purple-stark);
    ${e}•low: var(--arc-color-bg-purple-subtle);
  }

  &:has(>[data-color=green]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-green-stark);
    ${r}•low: var(--arc-color-fg-green-stark);
    ${e}•low: var(--arc-color-bg-green-subtle);
  }

  &:has(>[data-color=yellow]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-yellow-stark);
    ${r}•low: var(--arc-color-fg-yellow-stark);
    ${e}•low: var(--arc-color-bg-yellow-subtle);
  }

  &:has(>[data-color=red]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-red-stark);
    ${r}•low: var(--arc-color-fg-red-stark);
    ${e}•low: var(--arc-color-bg-red-subtle);
  }

  &:has(>[data-color=maroon]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-maroon-stark);
    ${r}•low: var(--arc-color-fg-maroon-stark);
    ${e}•low: var(--arc-color-bg-maroon-subtle);
  }

  &:has(>[data-color=mint]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-mint-stark);
    ${r}•low: var(--arc-color-fg-mint-stark);
    ${e}•low: var(--arc-color-bg-mint-subtle);
  }

  &:has(>[data-color=orange]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-orange-stark);
    ${r}•low: var(--arc-color-fg-orange-stark);
    ${e}•low: var(--arc-color-bg-orange-subtle);
  }

  &:has(>[data-color=ai]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${e}•high: var(--arc-gradient-ai-300);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${e}•low: var(--arc-gradient-ai-100);
  }

  &:has(>[data-color=overlay-light]) {
    ${r}•high: var(--arc-color-mono-black);
    ${e}•high: var(--arc-color-alpha-white-80);
    ${r}•low: var(--arc-color-alpha-heavy);
    ${e}•low: var(--arc-color-alpha-white-20);
  }

  &:has(>[data-color=overlay-dark]) {
    ${r}•high: var(--arc-color-mono-white);
    ${e}•high: var(--arc-color-alpha-black-70);
    ${r}•low: var(--arc-color-mono-white);
    ${e}•low: var(--arc-color-alpha-black-40);
  }
`,hh=({fg:r,bg:e})=>s`
  &:has(>[data-contrast=high]) {
    ${r}: var(${r}•high);
    ${e}: var(${e}•high);
  }

  &:has(>[data-contrast=low]) {
    ${r}: var(${r}•low);
    ${e}: var(${e}•low);
  }
`,Ar=s`--arc•badge`,Vs=s`${Ar}•fg`,Us=s`${Ar}•bg`,ab=uh({fg:Vs,bg:Us}),tb=hh({fg:Vs,bg:Us}),ob=s`
  &:has(>[data-size=lg]) {
    ${Ar}•font•size: var(${m}•14);
    ${Ar}•font•size•caps: var(${m}•12);
    ${Ar}•size: var(${m}•24);
    ${Ar}•min•size: var(${m}•30);
    ${Ar}•padding•inline: var(${m}•8);
    ${Ar}•gap: var(${m}•4);
  }

  &:has(>[data-size=md]) {
    ${Ar}•font•size: var(${m}•12);
    ${Ar}•font•size•caps: var(${m}•10);
    ${Ar}•size: var(${m}•20);
    ${Ar}•min•size: var(${m}•24);
    ${Ar}•padding•inline: var(${m}•6);
    ${Ar}•gap: var(${m}•4);
  }

  &:has(>[data-size=sm]) {
    ${Ar}•font•size: var(${m}•10);
    ${Ar}•font•size•caps: var(${m}•8);
    ${Ar}•size: var(${m}•16);
    ${Ar}•min•size: var(${m}•18);
    ${Ar}•padding•inline: var(${m}•6);
    ${Ar}•gap: var(${m}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${Ar}•font•size: 1em;
    ${Ar}•font•size•text: 0.75em;
    ${Ar}•font•size•caps: 0.625em;
    ${Ar}•size: 1.25em;
    ${Ar}•min•size: 1.5em;
    ${Ar}•padding•inline: 0.5em;
    ${Ar}•gap: 0.25em;
  }
`,nb=s`
  &:has(>[data-layout=fill]) {
    ${Ar}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${Ar}•display: flex;
    ${Ar}•min•width: var(${Ar}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${Ar}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${Ar}•display: inline-flex;
    ${Ar}•min•width: min-content;
  }
`,cb=s`
@layer arc-components {

  [arc-badge-wrapper] {
    ${ab}
    ${tb}
    ${ob}
    ${nb}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-height: 1lh;
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${Ar}•gap);
    --arc-icon-text-svg-width: var(--arc-badge-svg-width, 1em);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${Ar}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${Ar}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${Ar}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${Ar}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${Ar}•flex);
    display: var(${Ar}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${Ar}•size);
    padding-inline: var(${Ar}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: normal;

    color: var(--arc-badge-color, var(${Vs}));
    background: var(--arc-badge-background, var(${Us}));
    border-radius: var(--arc-border-radius-pill);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${Ar}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${Ar}•font•size•caps);
    }
  }

}
`,ph=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],ib=["brand",...ph.filter(r=>r!=="brand")],sb=["neutral",...ph.filter(r=>r!=="neutral")],lb=Gr(Ha,ib),db=Gr(Ha,sb),ub=Gr(ie,["inherit","lg","md","sm"]),hb=Gr(ia,["hug","fill"]),pb=["low","high"],gb=Gr(Xr,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),vb={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},fb=({children:r,icon:e,text:a,isFlipped:t,isFlexible:o,isUppercase:n,color:c,variant:d,size:u="inherit",layout:h="hug",contrast:p="high",...v})=>{const g=c??vb[d??"brand-blue"],f=r||(0,i.jsx)(le,{icon:e,text:a,isFlipped:t,layout:"gutter"}),b=h==="fill"&&o;return(0,i.jsx)("span",{...v,"arc-badge-wrapper":"",children:(0,i.jsx)("span",{"arc-badge":"","data-contrast":p,"data-color":g,"data-layout":h,"data-size":u,"data-is-flexible":b?"":void 0,"data-is-uppercase":n?"":void 0,children:f})})};Cr("ArcBadge",cb);const de=s`--arc•badge•count`,Gs=s`${de}•fg`,Ks=s`${de}•bg`,mb=uh({fg:Gs,bg:Ks}),bb=hh({fg:Gs,bg:Ks}),$b=s`
  &:has(>[data-size=lg]) {
    ${de}•font•size: var(${m}•14);
    ${de}•size: var(${m}•24);
    ${de}•padding•inline: var(${m}•6);
  }

  &:has(>[data-size=md]) {
    ${de}•font•size: var(${m}•12);
    ${de}•size: var(${m}•20);
    ${de}•padding•inline: var(${m}•6);
  }

  &:has(>[data-size=sm]) {
    ${de}•font•size: var(${m}•10);
    ${de}•size: var(${m}•16);
    ${de}•padding•inline: var(${m}•6);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${de}•font•size: 1em;
    ${de}•font•size•text: 0.75em;
    ${de}•size: 1.25em;
    ${de}•padding•inline: 0.375em;
  }
`,yb=s`
@layer arc-components {

  [arc-badge-count-wrapper] {
    ${mb}
    ${bb}
    ${$b}
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-count-wrapper]:not([hidden]) {
    flex: none;
    align-self: var(--arc-badge-count-align-self, flex-start);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;
  }

  [arc-badge-count] {
    font-size: var(--arc-badge-count-font-size, var(${de}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: var(${de}•size);
    min-width: var(${de}•size);
    padding-inline: var(${de}•padding•inline);

    white-space: nowrap;
    line-height: normal;

    color: var(--arc-badge-count-color, var(${Gs}));
    background: var(--arc-badge-count-background, var(${Ks}));
    border-radius: var(--arc-border-radius-pill);
    mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

    [data-element=text] {
      font-size: var(${de}•font•size•text, 1em);
    }
  }

}
`,xb=Gr(ie,["inherit","lg","md","sm"]),wb=Gr(Xr,["neutral","brand","critical","warning","success","inverse"]),kb=["low","high"],Ab=Gr(Mo,["square","circle"]),Cb={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},Sb=({children:r,text:e,color:a,variant:t,contrast:o,size:n="inherit",shape:c,...d})=>{const u=r||(0,i.jsx)("span",{"data-element":"text",children:e}),h=a??Cb[t??"neutral"],p=t==="critical"?"high":o??"low";return(0,i.jsx)("span",{...d,"arc-badge-count-wrapper":"",children:(0,i.jsx)("span",{"arc-badge-count":"","data-color":h,"data-contrast":p,"data-size":n,children:u})})};Cr("ArcBadgeCount",yb);const aa=s`--arc•banner`,Oe=s`${aa}•bg`,je=s`${aa}•fg`,qe=s`${aa}•columns`,Wa=s`${aa}•border`,Ws=s`${aa}•border•radius`,dn=s`${aa}•padding`,At=s`${aa}•min•height`,Kc=s`${aa}•body`,co=s`${Kc}•font•size`,Wc=s`${Kc}•gap`,gh=s`${Kc}•flex•direction`,vh=s`${Kc}•min•width`,Xs=s`${aa}•icon`,io=s`${Xs}•font•size`,qs=s`${Xs}•padding`,lt=s`${Xs}•color`,fh=s`${aa}•action`,Ys=s`${fh}•justify`,Zs=s`${fh}•gap`,un=s`${aa}•column•gap`,Js=s`${aa}•row•gap`,zb=s`
  &:where([variant=ai]) {
    ${je}: var(--arc-color-fg-primary);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${Oe}: var(--arc-banner-gradient-ai-50) padding-box, var(--arc-banner-gradient-ai-100) border-box;
    ${Wa}: var(--arc-border-width-sm) solid transparent;
  }

  &:where([variant=announcement]) {
    ${je}: var(--arc-color-fg-primary);
    ${lt}: var(--arc-color-fg-brand-mid);
    ${Oe}: var(--arc-color-bg-blue-muted);
    ${Wa}: var(--arc-border-width-sm) solid var(--arc-color-border-blue-subtle);
  }

  &:where([variant=critical]) {
    ${je}: var(--arc-color-fg-primary);
    ${lt}: var(--arc-color-fg-critical-mid);
    ${Oe}: var(--arc-color-bg-critical-muted);
    ${Wa}: var(--arc-border-width-sm) solid var(--arc-color-border-critical-subtle);
  }

  &:where([variant=info]) {
    ${je}: var(--arc-color-fg-primary);
    ${lt}: var(--arc-color-fg-info-mid);
    ${Oe}: var(--arc-color-bg-info-muted);
    ${Wa}: var(--arc-border-width-sm) solid var(--arc-color-border-info-subtle);
  }

  &:where([variant=neutral]) {
    ${je}: var(--arc-color-fg-secondary);
    ${lt}: var(--arc-color-fg-secondary);
    ${Oe}: var(--arc-color-alpha-muted);
    ${Wa}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &:where([variant=success]) {
    ${je}: var(--arc-color-fg-primary);
    ${lt}: var(--arc-color-fg-success-mid);
    ${Oe}: var(--arc-color-bg-success-muted);
    ${Wa}: var(--arc-border-width-sm) solid var(--arc-color-border-success-subtle);
  }

  &:where([variant=warning]) {
    ${je}: var(--arc-color-fg-primary);
    ${lt}: var(--arc-color-fg-warning-mid);
    ${Oe}: var(--arc-color-bg-warning-muted);
    ${Wa}: var(--arc-border-width-sm) solid var(--arc-color-border-warning-subtle);
  }
`,Eb=s`
  &:where([variant=ai]) {
    ${je}: var(--arc-color-fg-on-stark);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${Oe}: var(--arc-banner-gradient-ai-300);
  }

  &:where([variant=announcement]) {
    ${je}: var(--arc-color-fg-on-stark);
    ${Oe}: var(--arc-color-bg-blue-stark);
  }

  &:where([variant=critical]) {
    ${je}: var(--arc-color-fg-on-stark);
    ${Oe}: var(--arc-color-bg-critical-mid);
  }

  &:where([variant=info]) {
    ${je}: var(--arc-color-fg-on-stark);
    ${Oe}: var(--arc-color-bg-info-stark);
  }

  &:where([variant=neutral]) {
    ${je}: var(--arc-color-fg-on-stark);
    ${Oe}: var(--arc-color-bg-neutral-stark);
  }

  &:where([variant=success]) {
    ${je}: var(--arc-color-fg-on-stark);
    ${Oe}: var(--arc-color-bg-success-stark);
  }

  &:where([variant=warning]) {
    ${je}: var(--arc-color-fg-on-mid);
    ${Oe}: var(--arc-color-bg-warning-mid);
  }
`,_b=s`
  ${Wc}: 0.375em;
  ${gh}: column;
  ${vh}: 7em;
  ${Zs}: 0.75em;
  ${un}: 0.75em;
  ${Js}: 0.75em;

  /* INSET SETUP ---------------------------------------------------• */

  &[layout=inset] {
    ${zb}

    ${dn}: 0 0.75em 0 1em;
    ${Ws}: var(--arc-border-radius-lg);
    ${Wc}: 0.125em;
    ${qs}: 0.0625em;
    ${un}: 0.625em;

    ${At}: 5em;

    &:where([density=comfortable]) {
      &:not(:has([arc-banner-actions], [arc-banner-dismiss]))) {
        ${At}: 4.75em;
      }
      &:has([arc-banner-heading]):not(:has([arc-banner-message])),
      &:has([arc-banner-message]):not(:has([arc-banner-heading])),
      &:not(:has([arc-banner-message], [arc-banner-heading])) {
        ${At}: 3.5em;
        ${Js}: 0.25em;

        &:has([arc-banner-actions]) {
          ${At}: 3.75em;
        }
      }
    }

    &[action-placement=bottom] {
      ${Ys}: flex-start;

      &[density=compact] {
        ${dn}: 0 0.25em 0 0.5em;
      }
    }

    &[density=compact]:where([action-placement=inline]) {
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${co});
      }
    }
  }

  /* BLEED SETUP ---------------------------------------------------• */

  &[layout=bleed] {
    ${Eb}

    ${At}: 4em;
    ${dn}: 0 0.75em 0 1em;
    ${Wa}: none;
    ${Ws}: 0;
    ${Wc}: 0.125em;
    ${un}: 1em;
    ${Ys}: flex-end;
    ${qs}: 0.125em;

    &[density=compact],
    &[alignment=center] {
      ${io}: 1.125em;
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${co});
      }
    }
  }

  /* DENSITIES -----------------------------------------------------• */

  &[density=comfortable] {
    ${io}: 1em;
    ${co}: 0.875em;
  }

  &[density=compact] {
    ${At}: 2em;
    ${dn}: 0 0.25em 0 0.5em;
    ${co}: 0.75em;
    ${Zs}: 0.5em;
    ${un}: 0.5em;

    &[action-placement=inline] {
      ${io}: 1em;
    }

    &[action-placement=bottom] {
      ${io}: 0.875em;
    }

    [arc-banner-grid] {
      align-self: center;
    }
  }

  /* Inter-component communication • ArcIcon/ArcIconText/ArcLink ---• */

  &[layout=inset] {
    &[density=compact]:where([action-placement=inline]) {
      --arc-icon-text-icon-color: var(--arc-banner-icon-color, var(${lt}));
      --arc-icon-text-gap: 0.375em;
    }

    [arc-banner-icon] {
      --arc-icon-color: var(--arc-banner-icon-color, var(${lt}));
    }
  }

  &[layout=bleed] {
    &:where([density=compact], [alignment=center]) {
      --arc-icon-text-gap: 0.375em;
    }

    &[alignment=center] [arc-banner-grid] {
      --arc-icon-height: 100%;
      --arc-icon-max-height: 100%;
      --arc-icon-text-icon-size: var(${io});
    }
  }

  &[density=compact] [arc-banner-body] {
    --arc-icon-height: 100%;
    --arc-icon-max-height: 100%;
    --arc-icon-text-icon-size: 1.125em;
  }

`,Tb=s`
  &[layout=inset] {
    [arc-banner-grid] {
      margin-block: 0.75em;
    }

    &[density=compact] {
      &[action-placement=bottom] {
        [arc-banner-grid] {
          margin-block: 0.25em 0.625em;
        }
      }

      &:not([action-placement=bottom]) {
        [arc-banner-grid] {
          margin-block: 0.25em;
          line-height: normal;
        }

        [arc-banner-icon],
        [arc-banner-body] {
          align-self: center;
        }
      }
    }

    &[action-placement=bottom] {
      [arc-banner-actions] { grid-row: 2; }
      &:has([arc-banner-icon]) [arc-banner-actions] { grid-column: 2 / -1; }
      &:not(:has([arc-banner-icon])) [arc-banner-actions] { grid-column: 1 / -1; }
    }
  }
`,Ib=s`
  &[layout=bleed] {
    &[density=compact] {
      [arc-banner-grid] {
        margin-block: 0.25em;
      }
    }

    [arc-banner-grid] {
      margin-block: 0.5em;
      align-self: center;
      align-items: center;
    }

    &[alignment=center] {
      [arc-banner-grid] {
        font-size: var(${co});
        place-items: center;
        line-height: normal;
      }
    }
  }
`,Pb=s`
  &:where([action-placement=inline]) {
    align-items: flex-start;

    &[density=compact] {
      ${qe}: 1fr auto auto;

      &:not(:has([arc-banner-actions])):has([arc-banner-dismiss]),
      &:not(:has([arc-banner-dismiss])):has([arc-banner-actions]) {
        ${qe}: 1fr auto;
      }
    }

    &[density=comfortable] {
      ${qe}: auto 1fr auto auto;

      &:has([arc-banner-icon]):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:has([arc-banner-icon]):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${qe}: auto 1fr auto;
      }

      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):has([arc-banner-dismiss]) {
        ${qe}: 1fr auto auto;
      }

      &:has([arc-banner-icon]):not(:has([arc-banner-actions])):not(:has([arc-banner-dismiss])) {
        ${qe}: auto 1fr;
      }
      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:not(:has([arc-banner-icon])):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${qe}: 1fr auto;
      }
    }

    &:not(:has([arc-banner-icon], [arc-banner-dismiss], [arc-banner-actions])) {
      ${qe}: 1fr;
    }
  }

  &:where([action-placement=bottom]) {
    ${qe}: auto 1fr auto;

    &:not(:has([arc-banner-icon])) {
      ${qe}: 1fr auto;
    }

    &:not(:has([arc-banner-dismiss])) {
      ${qe}: auto 1fr;
    }

    &:not(:has([arc-banner-icon])):not(:has([arc-banner-dismiss])) {
      ${qe}: 1fr;
    }
  }
`,Rb=s`
  width: var(--arc-banner-width, 100%);
  max-width: 100%;
  border: var(--arc-banner-border, var(${Wa}));
  background: var(--arc-banner-background, var(${Oe}));
  border-radius: var(--arc-banner-border-radius, var(${Ws}));
  padding: var(--arc-banner-padding, var(${dn}));
  min-height: var(--arc-banner-min-height, var(${At}, auto));
  font-size: var(--arc-banner-font-size, initial);
  line-height: var(--arc-line-height-loose);
  overflow: var(--arc-banner-overflow, unset);

  &:not([hidden]) {
    display: flex;
    align-items: center;
  }

  ${Pb}

  [arc-banner-grid] {
    color: var(--arc-banner-color, var(${je}));
    flex: 1;

    display: grid;
    align-items: baseline;
    grid-template-columns: var(${qe});
    column-gap: var(${un});
    row-gap: var(${Js});
  }

  [arc-banner-body] {
    color: var(--arc-banner-color, var(${je}));
    flex: 1;
    min-width: var(--arc-banner-body-min-width, var(${vh}));

    display: flex;
    flex-direction: var(${gh});
    gap: var(${Wc});
  }

  [arc-banner-icon] {
    font-size: var(${io});
    padding-inline: var(${qs});
  }

  [arc-banner-heading],
  [arc-banner-message] {
    flex: none;
  }

  [arc-banner-heading],
  [arc-banner-message],
  [arc-banner-actions] {
    font-size: var(${co});
    margin: 0;
  }

  [arc-banner-actions] {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: var(--arc-banner-action-justify, var(${Ys}));
    gap: var(--arc-banner-action-gap, var(${Zs}));
  }

`,jb=s`
@layer arc-components {
  ${Tf}

  [arc-banner] {
    /* CORE VARIABLES -----------------------------------------------• */
    ${_b}

    /* CORE STYLES --------------------------------------------------• */
    ${Rb}

    /* INSET LAYOUT -------------------------------------------------• */
    ${Tb}

    /* BLEED LAYOUT -------------------------------------------------• */
    ${Ib}
  }

}
`,Lb=Gr(Vt,["comfortable","compact"]),Mb=["inset","bleed"],Db=["inline","bottom"],Ob=["left","center"],Nb=[...Fa],Bb=[...Xr,"announcement"],Fb=Gr(Bb,["ai","announcement","critical","info","neutral","success","warning"]),dt={layout:"inset",variant:"neutral",density:"comfortable",actionPlacement:"inline",alignment:"left",showDismiss:!0},Hb=r=>r==="critical"||r==="warning"?"alert":"status",Vb=({children:r,id:e,icon:a,dismissProps:t,heading:o,density:n=dt.density,layout:c=dt.layout,actionPlacement:d=dt.actionPlacement,alignment:u=dt.alignment,actionSlot:h,showDismiss:p=dt.showDismiss,message:v,variant:g=dt.variant,onClose:f,...b})=>{const y=Nr(e,"arc-banner"),x=ps(a),A=u==="center",$=c==="bleed",k=c==="inset",w=n==="compact",E=d==="inline",_=!!x,C=k&&g==="ai"?"ai-200":void 0,S={variant:g,layout:c,density:n,alignment:u,"action-placement":d},I=()=>(0,i.jsx)(zr,{icon:x,gradient:C}),D=()=>(0,i.jsx)(i.Fragment,{children:!!h&&(0,i.jsx)("span",{"arc-banner-actions":"",children:h})}),N=()=>(0,i.jsx)("div",{"arc-banner-dismiss":"",children:(0,i.jsx)(Mr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:k||$&&g==="warning"?"common":"alpha",hierarchy:"tertiary",shape:"square","aria-label":"Dismiss",size:w?"sm":"md",...t,onClick:L=>{t?.onClick?.(L),f?.()}})}),H=({showActions:L=!0})=>(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(le,{icon:(0,i.jsx)(I,{}),children:[!!o&&(0,i.jsx)("strong",{children:o})," ",v," ",L&&h]})}),Z=()=>(0,i.jsxs)(i.Fragment,{children:[_&&(0,i.jsx)("span",{"arc-banner-icon":"",children:(0,i.jsx)(I,{})}),(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("strong",{"arc-banner-heading":"",children:o}),v&&(0,i.jsx)("span",{"arc-banner-message":"",children:v})]})})]});return(0,i.jsx)("div",{role:Hb(g??dt.variant),...b,...S,"arc-banner":"",id:y,children:(0,i.jsxs)("div",{"arc-banner-grid":"",children:[A?(0,i.jsx)(H,{}):(0,i.jsxs)(i.Fragment,{children:[w&&E?(0,i.jsx)(H,{showActions:!1}):(0,i.jsx)(Z,{}),(0,i.jsx)(D,{})]}),p&&(0,i.jsx)(N,{})]})})};Cr("ArcBanner",jb);const A2=null,Ub=["divider","section-label"];var Gb;const Ct={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},Kb=r=>[{test:()=>!!r.variant,value:r.variant},{test:()=>!!r.icon&&typeof r.subtext<"u",value:"icon-text-detail"},{test:()=>!!r.icon,value:"icon-text"},{test:()=>!!r.avatar&&typeof r.subtext<"u",value:"user-detail"},{test:()=>!!r.avatar,value:"user"},{test:()=>typeof r.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],Wb=({icon:r,onClick:e,items:a,renderSubmenu:t,submenuProps:o,...n})=>({icon:xu(r),itemProps:n}),mh=(r,e)=>{const{icon:a,itemProps:t}=Wb(e);switch(r){case"divider":return(0,i.jsx)("hr",{});case"section-label":return(0,i.jsx)(le,{...t,...Ct,icon:a,size:"sm",isStrong:!0});case"icon-text":return(0,i.jsx)(le,{...t,...Ct,icon:a});case"icon-text-detail":return(0,i.jsx)(le,{...t,...Ct,icon:a,isStrong:!0});case"text":return(0,i.jsx)(le,{...t,...Ct});case"text-detail":return(0,i.jsx)(le,{...t,...Ct,subtext:t.subtext??"sub",isStrong:!0});case"user":return(0,i.jsx)(Gc,{...t,...Ct,size:"sm"});case"user-detail":return(0,i.jsx)(Gc,{...t,...Ct,size:"md",isStrong:!0});default:return r}},C2=r=>Object.fromEntries(Gb.map(e=>[e,mh(e,r)])),Xb=200,qb=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps.id:void 0;return typeof e=="string"&&e.length>0?e:void 0},Yb=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps:{},{menuProps:a,renderItem:t,...o}=e;return{menuProps:a,popoverPassthrough:o}},Zb=r=>({ownMenuId:r.menu,parentTriggerId:r.trigger}),Jb=r=>{const e=r.submenuProps;if(!e||typeof e!="object")return;const a=e.renderItem;return typeof a=="function"?a:void 0},Qs=r=>typeof r.renderSubmenu=="function"||Array.isArray(r.items)&&r.items.length>0,Xc=(r,e,a)=>{if(!Qs(r))return{hasSubmenu:!1};const t=el(r,e),o=`${a}-subtrigger-${t}`;let c=qb(r)??`${a}-submenu-${t}`;return c===o&&(c=`${c}-menu`),{hasSubmenu:!0,menuId:c,triggerId:o}},Qb=(r,e)=>{if(!e||!r)return-1;let t=e.nodeType===Node.ELEMENT_NODE?e:e.parentNode;for(;t;){if(t===r)return-1;if(t instanceof HTMLLIElement&&t.parentElement===r)return Array.prototype.indexOf.call(r.children,t);t=t.parentNode}return-1},r$=(r,e)=>{if(typeof document>"u")return!1;const a=ra(r,e);try{return!!a?.matches?.(":popover-open")}catch{return!1}},rl=r=>r===!0||typeof r=="number"&&r>=0&&Number.isFinite(r),e$=r=>r===!0?0:r,a$=r=>r===!0?Xb:r,t$={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},el=(r,e)=>r.itemId!=null&&String(r.itemId)!==""?String(r.itemId):`auto-${e}`,bh=r=>{let e=null;for(let a=r;a;a=a.parentElement)a.hasAttribute("arc-popover")&&(e=a);return e},$h=(r,e,a,t)=>{if(t||a==="divider"||Qs(e))return;if(r.target instanceof Element){const c=r.target.closest("[arc-popover]");if(c&&r.currentTarget.contains(c))return}if(!!!(e.href||e.onClick))return;bh(r.currentTarget)?.hidePopover?.()},o$=r=>r?.role??t$[so(r)]??"menuitem",so=r=>Kb(r)?.find(({test:e})=>e())?.value??"text",yh=r=>Ub.some(e=>e===r),xh=r=>e=>mh(r,e),al=(r,e,a,t)=>{const o=t??Xc(r,e,a);if(o.hasSubmenu)return o.triggerId;const n=el(r,e);return`${a}-mi-${n}`},n$=(r,e,a)=>so(r)==="divider"||r.isDisabled===!0||r["aria-disabled"]===!0?!1:r.checked!==void 0||Xc(r,e,a).hasSubmenu?!0:!!(r.href||r.onClick),qc=(r,e)=>{const a=[];for(let t=0;t<r.length;t+=1)n$(r[t],t,e)&&a.push(t);return a},wh=(r,e,a)=>{if(typeof document>"u")return;const t=r.children[e];if(!(t instanceof HTMLElement))return;const o=ra(a,r);if(o instanceof HTMLElement&&t.contains(o)){o.focus();return}const n=t.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])');Array.from(n).find(d=>d.getAttribute("aria-disabled")!=="true")?.focus()},kh=(r,e,a,t)=>{const o=qc(r,e);if(o.length===0)return-1;if(t==="actual")return a>=0&&o.includes(a)?a:o[0];let n=o.indexOf(a);return n<0?t==="next"?o[0]:t==="previous"?o[o.length-1]:o[0]:t==="next"?(n=(n+1)%o.length,o[n]):(n=(n-1+o.length)%o.length,o[n])};function c$(r,e,a){return{ArrowUp:t=>{const o=kh(r,e,t,"previous");o>=0&&a(o)},ArrowDown:t=>{const o=kh(r,e,t,"next");o>=0&&a(o)},Home:()=>{const t=qc(r,e);t.length>0&&a(t[0])},End:()=>{const t=qc(r,e);t.length>0&&a(t[t.length-1])}}}function i$(r,e){const{isVisible:a,menuListRef:t,activeItemIndex:o,filteredItems:n,menuDomId:c,isMenuRtlRef:d,submenuBackNavigation:u,listNavByKey:h,hideSubmenu:p,focusTriggerById:v,focusRowAtItemIndex:g,setActiveItemIndex:f,openSubmenuForKeyboard:b}=e;if(!a||!t.current||!(r.target instanceof Node)||!t.current.contains(r.target))return;const y=t.current,x=r.target.closest?.("ul[arc-menu]");if(x&&x!==y)return;let A=Qb(y,r.target);if(A<0&&o>=0&&(A=o),A<0)return;const $=n[A],k=Xc($,A,c),w=d.current,E=w?"ArrowLeft":"ArrowRight",_=w?"ArrowRight":"ArrowLeft";if(k.hasSubmenu&&r.key===_&&r$(k.menuId,y)){r.preventDefault(),r.stopPropagation(),g(A),p(k.menuId);return}if(u&&(r.key==="Escape"||r.key===_)){r.preventDefault(),r.stopPropagation(),v(u.parentTriggerId),p(u.ownMenuId);return}if(k.hasSubmenu&&(r.key===E||r.key==="Enter")){r.preventDefault(),r.stopPropagation(),f(A),b(k.menuId);return}const T=h[r.key];T&&(r.preventDefault(),r.stopPropagation(),T(A))}function s$(r,e){if(typeof document>"u")return;ra(r,e)?.hidePopover?.()}function l$(r,e){if(typeof document>"u")return;ra(r,e)?.showPopover?.()}function d$(r){r.querySelectorAll("[popover]").forEach(e=>{try{e.matches(":popover-open")&&e.hidePopover?.()}catch{}})}function u$(r,e){typeof document>"u"||requestAnimationFrame(()=>{ra(r,e)?.querySelector("[arc-menu]")?.focus()})}function h$(r,e){if(typeof document>"u")return;ra(r,e)?.focus()}function p$({menuListRef:r,passiveMode:e}){const a=(0,l.useRef)(null),t=(0,l.useRef)(null),o=(0,l.useRef)(null),n=(0,l.useCallback)(()=>{t.current!=null&&(clearTimeout(t.current),t.current=null)},[]),c=(0,l.useCallback)(()=>{o.current!=null&&(clearTimeout(o.current),o.current=null)},[]),d=(0,l.useCallback)(()=>{const b=r.current;b&&d$(b)},[r]),u=(0,l.useCallback)(b=>{s$(b,r.current),a.current===b&&(a.current=null)},[r]),h=(0,l.useCallback)(b=>{typeof document>"u"||(a.current&&a.current!==b&&u(a.current),l$(b,r.current),a.current=b)},[u,r]),p=(0,l.useCallback)(b=>{if(!rl(e))return;c(),n();const y=e$(e);if(y<=0){h(b);return}t.current=setTimeout(()=>{t.current=null,h(b)},y)},[e,n,c,h]),v=(0,l.useCallback)(b=>{if(!rl(e))return;n(),c();const y=a$(e);if(y<=0){u(b);return}o.current=setTimeout(()=>{o.current=null,u(b)},y)},[e,n,c,u]),g=(0,l.useCallback)(b=>{n(),c(),h(b),u$(b,r.current)},[n,c,h,r]),f=(0,l.useCallback)(b=>{h$(b,r.current)},[r]);return{activeSubmenuIdRef:a,cancelPendingSubmenuOpen:n,cancelPendingSubmenuClose:c,closeOpenDescendantPopovers:d,hideSubmenu:u,runShowSubmenu:h,showSubmenuFromPointer:p,requestSubmenuCloseFromPointer:v,openSubmenuForKeyboard:g,focusTriggerById:f}}const g$=s`--arc•menu`,fa=s`${g$}•item`,v$=s`
@layer arc-components {

  [arc-menu] {
    ${fa}•gap: var(${R}•8);
    ${fa}•fg: inherit;
    ${fa}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${m}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${R}•2));
    padding: var(--arc-menu-padding, var(${R}•4));
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  /* Submenus sit under the same <li> as the row button, so the parent row stays :hover while
     pointing at submenu items. Reset the item bg token on submenu lists so inherited hover from
     the parent <li> does not paint every submenu row; each submenu row only picks up hover from its own <li>. */
  [arc-menu-item] > [arc-popover] [arc-menu] {
    ${fa}•bg: transparent;
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(${fa}•gap));

    background: var(--arc-menu-item-background, var(${fa}•bg));
    color: var(--arc-menu-item-color, var(${fa}•fg));
    padding: var(--arc-menu-item-padding, 0);
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:not([arc-menu-selection-row]):has(> [arc-button=custom]:not([is-disabled])) {
      &:is(:hover, :has(> [arc-button=custom]:not([is-disabled]):focus-visible)) {
        ${fa}•bg: var(--arc-color-bg-hover-default);
      }
    }

    /* Inter-Component Communication • ArcButton -------------------• */

    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-transition: none;
      --arc-button-position: var(--arc-menu-item-position, relative);
      --arc-button-gap: var(--arc-menu-item-gap, var(${fa}•gap));
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);
      --arc-button-overflow: var(--arc-menu-item-overflow, clip);
      --arc-button-outline-offset: var(--arc-menu-item-outline-offset, var(${m}•2m));

      [arc-button-content] {
        display: contents;
      }
    }
  }

  [arc-menu-item][arc-menu-selection-row] {
    &:is(:hover, :has(:focus-visible)) {
      ${fa}•bg: var(--arc-color-bg-hover-default);
    }

    &[is-selected] {
      ${fa}•bg: var(--arc-color-bg-selected-default);
    }
  }

  [arc-menu-item=divider] {
    margin: 0 var(${R}•4m);

    hr {
      flex: 1;
      border: none;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      height: 0;
      margin: 0;
    }
  }

`,f$=({items:r,filterText:e,renderItem:a,isVisible:t,keepMenuOpen:o,renderSubmenu:n,passiveMode:c,submenuBackNavigation:d,...u})=>{const h=c??200,p=(0,l.useId)(),v=(0,l.useRef)(null),{activeSubmenuIdRef:g,cancelPendingSubmenuOpen:f,cancelPendingSubmenuClose:b,closeOpenDescendantPopovers:y,hideSubmenu:x,showSubmenuFromPointer:A,requestSubmenuCloseFromPointer:$,openSubmenuForKeyboard:k,focusTriggerById:w}=p$({menuListRef:v,passiveMode:h}),E=(0,l.useRef)(!1),[_,T]=(0,l.useState)(!1),[C,S]=(0,l.useState)(-1);da(()=>{const M=v.current;if(M&&typeof getComputedStyle<"u"){const P=getComputedStyle(M).direction==="rtl";E.current=P,T(P)}},[t,r]);const I=(0,l.useMemo)(()=>e?r.filter(M=>Object.values(M).some(P=>P===e)):r,[r,e]),D=(0,l.useRef)(I);D.current=I;const N=(0,l.useCallback)(M=>{if(M<0){S(-1);return}S(M);const P=v.current;if(!P)return;const F=al(I[M],M,p);wh(P,M,F)},[I,p]),H=(0,l.useMemo)(()=>c$(I,p,N),[I,p,N]),Z=M=>i$(M,{isVisible:!!t,menuListRef:v,activeItemIndex:C,filteredItems:I,menuDomId:p,isMenuRtlRef:E,submenuBackNavigation:d,listNavByKey:H,hideSubmenu:x,focusTriggerById:w,focusRowAtItemIndex:N,setActiveItemIndex:S,openSubmenuForKeyboard:k}),L=(0,l.useMemo)(()=>I.map((M,P)=>{const F=el(M,P),{itemId:or,role:vr,keepMenuOpen:j,items:X,renderSubmenu:sr,submenuProps:mr,"arc-menu-selection-row":rr,"is-selected":ur,...yr}=M,lr=Xc(M,P,p),{hasSubmenu:wr}=lr,V=wr?lr.menuId:"",K=wr?{menu:lr.menuId,trigger:lr.triggerId}:void 0,er=so(M)||"",O=vr||o$(M)||"menuitem",cr=P===C,br=al(M,P,p,lr),$r={filterText:e,isCurrent:cr,menuControlId:br,itemId:F,role:vr,keepMenuOpen:j??o,isRtl:_,...wr?{hasSubmenu:!0,ids:K}:{hasSubmenu:!1}},U=a?.(yr,P,$r);return wr?(0,i.jsxs)("li",{"arc-menu-item":er,role:"presentation",onFocusCapture:()=>S(P),onMouseEnter:()=>{A(V)},onMouseLeave:rl(h)?()=>$(V):void 0,onClick:W=>$h(W,M,er,j??o),children:[U,n?.({ids:K,items:X??[],item:M,filterText:e,passiveMode:h,isRtl:_})]},F):(0,i.jsx)("li",{"arc-menu-item":er,"arc-menu-selection-row":rr,"is-selected":ur,role:O,onFocusCapture:()=>S(P),onClick:W=>$h(W,M,er,j??o),children:U},F)}),[C,e,I,o,a,p,_,h,n,A,$]);return(0,l.useEffect)(()=>{if(!t){f(),b(),y(),g.current=null,S(-1);return}const M=D.current,P=qc(M,p);if(P.length>0){const F=P[0],or=v.current;if(S(F),or){const vr=al(M[F],F,p);wh(or,F,vr)}}},[t,p,f,b,y,g]),(0,l.useEffect)(()=>()=>{f(),b(),y(),g.current=null},[f,b,y,g]),(0,i.jsx)("ul",{...u,ref:v,"arc-menu":"",role:"menu",onKeyDown:Z,onMouseLeave:()=>S(-1),tabIndex:t?0:-1,children:L})};Cr("ArcMenu",v$);const Ah=["items","renderItem","renderSubmenu","keepMenuOpen","onToggle","id","menuProps","passiveMode","submenuBackNavigation","offset","ref","selectionProps"],m$=(r,e)=>{const a=!r.includes(e);return{value:a?[...r,e]:r.filter(t=>t!==e),changedValue:e,selected:a,reason:"item"}},Ch=(r,e)=>{const a=new Set(r),t=e.filter(o=>a.has(o)).length;return t===0?"none":t===e.length?"all":"mixed"},b$=(r,e,a)=>{const t=e.length>0&&Ch(r,e)!=="all";return{value:t?[...e]:[],changedValue:a,selected:t,reason:"selectAll"}},Sh=r=>yh(so(r)),zh=Qs,Eh=r=>!Sh(r)&&!zh(r),$$=r=>r.filter(e=>Eh(e)?e.itemId!=null&&String(e.itemId)!=="":!0),_h=r=>!!(r["aria-disabled"]??r.isDisabled),tl=r=>{const{onClick:e,href:a,target:t,...o}=r;return o},Th=r=>zh(r)?r:Sh(r)?tl(r):null,y$=(r,e)=>r.filter(a=>Eh(a)&&!_h(a)&&String(a.itemId)!==e).map(a=>String(a.itemId)),x$={none:!1,mixed:"mixed",all:!0},Ih=(r,e,a)=>_h(r)?{}:{"arc-menu-selection-row":"","is-selected":e?"":void 0,...a},w$=(r,e)=>{const a=Th(r);if(a)return a;const{checked:t,onChange:o,...n}=tl(r),c=String(r.itemId),d=e.selectAllItemId!==void 0&&c===e.selectAllItemId,u=d?x$[e.selectAllState]:e.selectedIds.has(c),h=u===!0&&(d||e.selectAllState!=="all");return{role:"presentation",...n,checked:u,keepMenuOpen:!0,...d?{containerProps:{...n.containerProps,"arc-menu-select-all-row":""}}:{},...Ih(r,h,{onChange:(p,v)=>e.onToggle(r,v)})}},k$=(r,e)=>{const a=Th(r);if(a)return a;const t=tl(r),o=e.value!==null&&String(r.itemId)===e.value;return{role:"presentation",...t,"aria-checked":o,keepMenuOpen:!0,...Ih(r,o,{onClick:n=>{const c=n;e.onActivate(r,c?.nativeEvent??n??new MouseEvent("click"))}})}},A$=(r,e)=>{if(e.mode==="single"){const o={value:typeof e.value=="string"?e.value:null,onActivate:e.onActivate};return r.map(n=>k$(n,o))}const a=Array.isArray(e.value)?e.value:[],t={selectedIds:new Set(a),onToggle:e.onToggle,selectAllItemId:e.selectAllItemId,selectAllState:Ch(a,e.enabledSelectableIds)};return r.map(o=>w$(o,t))},Ph="fa-regular fa-angle-down",C$=(r,e,a)=>{const t=e==null?void 0:(r??[]).find(h=>h.itemId===e),o=t?t.text??(t.avatar?Fs(t.avatar):void 0):a?.placeholder,n=t?.endSlot==null?void 0:(0,i.jsx)("span",{"arc-dropdown-selected-end":"",children:t.endSlot}),c=t?.icon??(t?.avatar?(0,i.jsx)(Uc,{size:"sm",...t.avatar}):void 0),d=t?.startSlot==null?void 0:(0,i.jsxs)("span",{"arc-dropdown-selected-start":"",children:[t.startSlot,typeof c=="string"?(0,i.jsx)(zr,{icon:c}):c]});let u=o;return d!==void 0?u=(0,i.jsxs)(i.Fragment,{children:[d,o,n]}):n!==void 0&&(u=(0,i.jsxs)(i.Fragment,{children:[o,n]})),{variant:"neutral",hierarchy:"primary",size:"lg",...a?.showCaret??!0?{iconEnd:Ph}:{},...t&&d===void 0?{iconStart:c}:{},text:u}},Xa=s`--arc•label`,hn=s`${Xa}•cursor`,pn=s`${Xa}•opacity`,S$=s`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${pn}: var(--arc-label-opacity, unset);
    ${pn}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${Xa}•display: var(--arc-label-display, inline-flex);
    ${Xa}•gap: var(--arc-label-gap, var(${m}•8));
    ${Xa}•align•items: var(--arc-label-align-items, baseline);

    ${hn}: var(--arc-label-cursor, pointer);
    ${hn}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${hn}: var(${hn}•disabled);
      ${pn}: var(${pn}•disabled);
    }

    &[data-layout=fill] {
      ${Xa}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${Xa}•display);
    align-items: var(${Xa}•align•items);
    gap: var(${Xa}•gap);
    cursor: var(${hn});
  }

}
`,z$=gr(ia,["hug","fill"]),St=({layout:r,...e})=>(0,i.jsx)("label",{...e,"arc-label":"","data-layout":r});Cr("ArcLabel",S$);const E$=s`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${pn}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,zt=r=>(0,i.jsx)("span",{...r,"arc-label-content":""});Cr("LabelContent",E$);const _$={checkbox:"checkbox",radio:"radio",switch:"radio"},gn=({id:r,indeterminate:e,type:a,onChange:t,...o})=>{const n=a==="checkbox"&&!!e,c=(0,l.useRef)(null),d=Nr(r,`arc-${a}`),u=h=>p=>{if(!(p?.target instanceof HTMLInputElement))return;const v={checked:p?.target.checked,indeterminate:p?.target?.indeterminate,name:p?.target?.name,value:o?.value};h?.(v,p)};return(0,l.useEffect)(()=>{c.current?.type==="checkbox"&&(c.current.indeterminate=!!e)},[e]),(0,i.jsx)("input",{...o,id:d,ref:c,type:_$[a],"arc-input-type":a,"aria-disabled":o?.disabled||void 0,"data-is-disabled":o?.disabled||void 0,"data-is-checked":o?.checked||void 0,"data-is-indeterminate":n||void 0,onChange:u(t)})},T$=s`
@layer arc-components {

  [arc-input-mask] {
    ${J}•border•width: var(--arc-border-width-sm);
    ${J}•border: var(${J}•border•width) solid var(${J}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${J}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${J}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${J}•outline: var(${J}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES -----------------------------------------------------• */

  [arc-input-mask-wrapper] {
    align-self: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 1lh;
  }

  [arc-input-mask] {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(${J}•width);
    height: var(${J}•height);
    opacity: var(${J}•opacity, var(--arc-alpha-100));

    color: var(${J}•color, transparent);
    background: var(${J}•background);
    border: var(${J}•border);
    border-radius: var(${J}•border•radius);
    translate: var(${J}•translate, unset);

    outline: var(${J}•outline, none);
    outline-offset: var(${J}•border•width);

    transition-duration: 100ms;
    transition-behavior: allow-discrete;
    transition-timing-function: ease-in-out;
    transition-property:
      opacity,
      background,
      color,
      border-color,
      outline;

    [arc-input-type] {
      flex: none;
      outline: none;
      appearance: none;
      position: absolute;
      inset: calc(var(${J}•border•width) * -1);
      cursor: var(${J}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${J}•z•index, unset);
    }
  }

}
`,Yc=({type:r,...e})=>(0,i.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,i.jsx)("span",{...e,"arc-input-mask":r})});Cr("ArcBooleanInputMask",T$);const me=s`--arc•checkbox`,I$=s`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${me}•font•size: 1em;
      ${me}•icon•size: 0.625em;
      ${me}•size: 1.125em;
      ${me}•gap: 0.5em;
    }

    &[data-size=md] {
      ${me}•font•size: var(${m}•14);
      ${me}•icon•size: var(${m}•10);
      ${me}•size: var(${m}•18);
      ${me}•gap: var(${m}•8);
    }

    &[data-size=sm] {
      ${me}•font•size: var(${m}•12);
      ${me}•icon•size: var(${m}•10);
      ${me}•size: var(${m}•16);
      ${me}•gap: var(${m}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${J}•border•radius: var(${m}•4);
    ${J}•size: var(${me}•size);
    ${J}•icon•size: var(${me}•icon•size);
    ${J}•width: var(${me}•size);
    ${J}•height: var(${me}•size);
    ${J}•translate: 0 var(${m}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${me}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${me}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${J}•color: transparent;
      ${J}•border•color: var(--arc-color-border-stark);
      ${J}•background: transparent;

      &:hover {
        ${J}•border•color: var(--arc-color-border-theme-heavy);
        ${J}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${J}•border•color: var(--arc-color-border-disabled);
        ${J}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${J}•color: var(--arc-color-fg-on-theme-heavy);
        ${J}•border•color: transparent;
        ${J}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${J}•color: var(--arc-color-fg-on-theme-stark);
          ${J}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${J}•color: var(--arc-color-fg-on-theme-mid);
          ${J}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${J}•color: var(--arc-color-fg-theme-heavy);
        ${J}•border•color: var(--arc-color-border-theme-heavy);
        ${J}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${J}•color: var(--arc-color-fg-theme-stark);
          ${J}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${J}•color: var(--arc-color-fg-theme-subtle);
          ${J}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,P$=gr(ia,["hug","fill"]),R$=gr(ie,["inherit","md","sm"]),j$=gr(Xr,["primary","secondary"]),ol=({children:r,label:e,layout:a,size:t="md",variant:o="primary",useMask:n=!0,...c})=>{const{className:d,title:u,...h}=c,p={className:d,title:u},v=r??e,g=(0,i.jsx)(gn,{...h,type:"checkbox"}),f=n&&(0,i.jsxs)(Yc,{type:"checkbox",children:[g,(0,i.jsx)(zr,{icon:h?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),b=!!v&&(0,i.jsxs)(St,{layout:a,children:[f||g,(0,i.jsx)(zt,{children:v})]});return(0,i.jsx)("span",{...p,"arc-checkbox":"","data-size":t,"data-variant":o,children:b||f||g})};Cr("ArcCheckbox",I$);const L$="fa-regular fa-check",M$=r=>{r.key!=="Enter"||r.currentTarget.disabled||(r.preventDefault(),r.currentTarget.click())},Rh=r=>{const{selectionMode:e,startSlot:a,endSlot:t,onClick:o,href:n,target:c,containerProps:d,isDisabled:u,"aria-disabled":h,tooltip:p,id:v,popoverTarget:g,popoverTargetAction:f,"aria-haspopup":b,"aria-controls":y,"aria-expanded":x,...A}=r,$=so(A),k=(0,l.useMemo)(()=>xh($),[$]),w=h??u,E=$==="divider",_=yh($)?void 0:e,T=!!(n||o||g),C=!E,S=C&&a?"":void 0,I=C&&t?"":void 0,D=(0,l.useMemo)(()=>({...d,onClick:o,tooltip:p,href:n,target:c,id:v,popoverTarget:g,popoverTargetAction:f,"aria-haspopup":b,"aria-controls":y,"aria-expanded":x}),[d,o,p,n,c,v,g,f,b,y,x]),N=(0,l.useMemo)(()=>({...d}),[d]);if(_==="multiple"){const{checked:H,onChange:Z,...L}=A;return(0,i.jsxs)("label",{...N,"arc-dropdown-item":"multi-select","has-start-slot":S,"has-end-slot":I,children:[(0,i.jsx)(ol,{id:v,role:"menuitemcheckbox",checked:H===!0,indeterminate:H==="mixed",disabled:!!w,onClick:o?M=>o(M.nativeEvent):void 0,onChange:Z,onKeyDown:M$}),a,(0,i.jsx)(k,{...L,"is-item-content":"interactive"}),t]})}if(_==="single"){const{"aria-checked":H,...Z}=A,L=H===!0,M=(0,i.jsxs)(i.Fragment,{children:[t,L?(0,i.jsx)(zr,{"arc-dropdown-single-select-check":"",icon:L$}):(0,i.jsx)("span",{"arc-dropdown-single-select-spacer":""})]});return(0,i.jsxs)(Mr,{...D,role:"menuitemradio","aria-checked":L,"aria-disabled":w?"true":void 0,isDisabled:!!w,_isCustom:!0,"arc-dropdown-item":"single-select","has-start-slot":S,"has-end-slot":L||t?"":void 0,children:[C&&a,(0,i.jsx)(k,{...Z,"is-item-content":"interactive"}),C&&M]})}return T?(0,i.jsxs)(Mr,{...D,role:g?"menuitem":d?.role,"aria-disabled":w?"true":void 0,isDisabled:!!w,_isCustom:!0,"arc-dropdown-item":$??"","has-start-slot":S,"has-end-slot":I,children:[C&&a,(0,i.jsx)(k,{...A,"is-item-content":"interactive"}),C&&t]}):(0,i.jsxs)("div",{...N,"arc-dropdown-item":$??"","has-start-slot":S,"has-end-slot":I,children:[C&&a,(0,i.jsx)(k,{...A,"is-item-content":"inert"}),C&&t]})},D$=s`--arc•dropdown`,O$=s`${D$}•menu`,Le=s`${O$}•item`,N$=s`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${Le}•padding: var(${R}•8) var(${R}•12);
    ${Le}•min•height: var(${m}•36);
    ${Le}•gap: var(${R}•8);

    &[arc-dropdown-item=text-detail] {
      ${Le}•min•height: var(${m}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${Le}•min•height: var(${m}•32);
    }

    &[arc-dropdown-item=user] {
      ${Le}•min•height: var(${m}•40);

      &:not([has-start-slot]) {
        ${Le}•padding: var(${R}•8) var(${R}•12) var(${R}•8) var(${R}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${Le}•min•height: var(${m}•48);

      &:not([has-start-slot]) {
        ${Le}•padding: var(${R}•8) var(${R}•12) var(${R}•8) var(${R}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${Le}•min•height: var(${m}•8);
      ${Le}•padding: 0;
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-font-size: initial;
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0em);
    --arc-popover-body-padding: var(--arc-dropdown-body-padding, 0em);
    --arc-popover-outline-size: 0em;
    --arc-popover-overflow: var(--arc-dropdown-overflow, auto);

    --arc-menu-item-gap: var(${Le}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-submenu] {
    &:where([anchor-at="left-start"], [anchor-at="right-start"]) {
      margin-top: var(--arc-dropdown-submenu-offset, var(${R}•4m));
    }

    &:where([anchor-at="left-end"], [anchor-at="right-end"]) {
      margin-top: var(--arc-dropdown-submenu-offset, var(${R}•4));
    }
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${Le}•gap);
    text-align: start;
    min-height: var(${Le}•min•height);

    &:not([arc-button]) {
      padding: var(${Le}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${Le}•padding);
      --arc-button-min-height: var(${m}•40);
    }

    &[arc-dropdown-item=section-label] {
      color: var(--arc-dropdown-section-label-color, var(--arc-color-fg-secondary));
    }

    [is-item-content] {
      flex: 1;
    }

    [arc-dropdown-submenu-icon] {
      --arc-icon-color: var(--arc-dropdown-submenu-icon-color, var(--arc-color-fg-secondary));
    }

    [arc-dropdown-single-select-check] {
      --arc-icon-color: var(--arc-dropdown-single-select-check-color, var(--arc-color-fg-accent));
    }

    [arc-dropdown-single-select-spacer] {
      width: 1.375em;
    }
  }

  /* A selected row's start/end slots reflected into the trigger's label (see selectionAnchor). Both
     ride in the button's auto-width label area — the start group ahead of the label, the end after it —
     so the icon/avatar sizes itself and there's no reach into the button's icon slot. Each is spaced
     from the label by the lg button's icon/label gap token. */
  [arc-dropdown-selected-start],
  [arc-dropdown-selected-end] {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    --arc-badge-align-self: center;
  }

  [arc-dropdown-selected-start] {
    gap: var(${m}•8);
    margin-inline-end: var(${m}•8);
  }

  [arc-dropdown-selected-end] {
    margin-inline-start: var(${m}•8);
  }

}
`,vn={OFFSET:void 0,ANCHOR_AT_LTR:"left-start",ANCHOR_AT_RTL:"right-start",ICON_LTR:"fa-regular fa-angle-right",ICON_RTL:"fa-regular fa-angle-left"},B$=(r,e)=>({anchorAt:r?vn.ANCHOR_AT_LTR:vn.ANCHOR_AT_RTL,offset:e??vn.OFFSET,role:"none","aria-label":void 0}),jh=(0,l.forwardRef)((r,e)=>(0,i.jsx)(Qo,{...r,ref:e,"arc-dropdown-menu-button":""})),F$=r=>{const e={...r};return Ah.forEach(a=>{Reflect.deleteProperty(e,a)}),e},H$=r=>r?vn.ICON_RTL:vn.ICON_LTR,nl=r=>{try{r.hidePopover?.()}catch{}},V$=(r,e)=>r===void 0?H$(e):typeof r=="function"?r(e):r,U$=(r,e)=>{(0,l.useEffect)(()=>{const a=r.current;if(!e||!a)return;const t=o=>{const n=o.relatedTarget;n!==null&&(n instanceof Node&&a.contains(n)||n instanceof Element&&n.closest("[popovertarget]")?.getAttribute("popovertarget")===a.id||nl(a))};return a.addEventListener("focusout",t),()=>a.removeEventListener("focusout",t)},[r,e])},lo=r=>{const{items:e,renderItem:a,keepMenuOpen:t,menuProps:o,passiveMode:n,submenuBackNavigation:c,renderSubmenu:d,submenuIcon:u,submenuOffset:h,selectionProps:p,anchorProps:v,ref:g,...f}=r,[b,y]=(0,l.useState)(!1),x=p?.mode,A=p?.value,$=p?.selectAllItemId,k=p?.mode==="single"&&!!p.showsSelection,w=p?.mode==="single"?p.value:null,E=p?.mode==="single"?p.placeholder:void 0,_=p?.showCaret,T=(0,l.useRef)(r);T.current=r;const C=(0,l.useRef)(null),S=(0,l.useMemo)(()=>x?$$(e??[]):null,[x,e]),I=(0,l.useMemo)(()=>x==="multiple"&&S?y$(S,$):[],[x,S,$]),D=(0,l.useRef)(I);D.current=I;const N=(0,l.useCallback)((j,X)=>{const sr=T.current.selectionProps;if(sr?.mode!=="multiple")return;const{selectAllItemId:mr}=sr,rr=Array.isArray(sr.value)?sr.value:[],ur=mr!==void 0&&String(j.itemId)===mr?b$(rr,D.current,mr):m$(rr,String(j.itemId));sr.onSelectionChange?.(ur,X.nativeEvent),j.onClick?.(X.nativeEvent instanceof MouseEvent?X.nativeEvent:void 0)},[]),H=(0,l.useCallback)((j,X)=>{const sr=T.current.selectionProps;if(sr?.mode!=="single")return;const mr=C.current;mr&&nl(bh(mr)??mr);const rr=String(j.itemId);rr!==sr.value&&sr.onSelectionChange?.({value:rr,changedValue:rr,selected:!0,reason:"item"},X),j.onClick?.(X instanceof MouseEvent?X:void 0)},[]);U$(C,!!x&&b);const Z=(0,l.useMemo)(()=>!S||!x?e??[]:A$(S,{mode:x,value:A,selectAllItemId:$,enabledSelectableIds:I,onToggle:N,onActivate:H}),[S,x,e,A,N,H,$,I]),L=(0,l.useMemo)(()=>k?{...C$(e,w,{placeholder:E,showCaret:_}),...v}:x==="multiple"&&(_??!0)?{iconEnd:Ph,...v}:v,[k,x,e,w,E,_,v]),M=(0,l.useCallback)(j=>{if(typeof document>"u")return;const X=ra(j,C.current);X&&nl(X)},[]),P=(0,l.useCallback)(j=>{C.current=j,Ae(g,j)},[g]),F=(0,l.useCallback)(j=>{const X=T.current,sr=F$(X),mr=j.item.submenuProps?.selectionProps!==void 0,rr=Jb(j.item)??(mr?void 0:X.renderItem),{ids:ur}=j,yr=X.keepMenuOpen;if(j.item.renderSubmenu)return j.item.renderSubmenu({items:j.items,renderItem:rr,keepMenuOpen:yr,filterText:j.filterText,passiveMode:j.passiveMode,ids:ur,closeSubmenu:()=>{M(ur.menu)},inheritedFromParent:sr});const{menuProps:lr,popoverPassthrough:wr}=Yb(j.item);return(0,i.jsx)(lo,{...sr,...B$(j.isRtl,X.submenuOffset),...wr,id:ur.menu,"arc-dropdown-submenu":"",submenuBackNavigation:Zb(ur),alternateAnchorId:ur.trigger,hidePopoverButton:!0,passiveMode:j.passiveMode,items:j.items,renderItem:rr,keepMenuOpen:yr,menuProps:lr})},[M]),or=(0,l.useCallback)((...j)=>{const[X,,sr]=j;if(a)return a(...j);const{ids:mr,isRtl:rr,menuControlId:ur}=sr,{endSlot:yr,...lr}=X,wr=!!mr,V=V$(T.current.submenuIcon,!!rr),K=yr||wr?(0,i.jsxs)(i.Fragment,{children:[yr,wr?(0,i.jsx)(zr,{"arc-dropdown-submenu-icon":"",icon:V}):null]}):void 0;return(0,i.jsx)(Rh,{...lr,selectionMode:wr?void 0:T.current.selectionProps?.mode,id:ur,endSlot:K,...mr?{popoverTarget:mr.menu,popoverTargetAction:"toggle","aria-haspopup":"menu","aria-controls":mr.menu}:{}})},[a]),vr=j=>{y(j.newState==="open"),r?.onToggle?.(j)};return(0,i.jsx)(ha,{...f,anchorProps:L,ref:P,"arc-dropdown":"",variant:"common",onToggle:vr,children:(0,i.jsx)(f$,{...o,"arc-dropdown-menu":"",passiveMode:n,submenuBackNavigation:c,items:Z,renderItem:or,isVisible:b,keepMenuOpen:t,renderSubmenu:F})})};jh.displayName="ArcDropdownButton",lo.Button=jh,lo.Item=Rh,Cr("ArcDropdownMenu",N$);const Lh=r=>{let e=[];const a=new Set,t=o=>{e=o,a.forEach(n=>n()),r().onSelectionChange?.(o)};return{get mode(){return r().mode},subscribe(o){return a.add(o),()=>{a.delete(o)}},isActive(){return r().activateOnFirstSelect?e.length>0:!0},isSelected(o){return e.includes(o)},toggle(o){const n=e.includes(o),c=r().mode==="single"?n?[]:[o]:n?e.filter(d=>d!==o):[...e,o];t(c)}}},fn=(0,l.createContext)(null),cl=()=>(0,l.useContext)(fn),G$=()=>()=>{},Mh=(r,e)=>(0,l.useSyncExternalStore)(r?.subscribe??G$,()=>r?e(r):!1,()=>!1),il=r=>Mh((0,l.useContext)(fn),e=>r!=null?e.isSelected(r):!1),Dh=()=>Mh((0,l.useContext)(fn),r=>r.isActive()),sl=(0,l.createContext)(void 0),Oh=()=>(0,l.useContext)(sl),ll=(0,l.forwardRef)(({children:r,...e},a)=>(0,i.jsx)("div",{...e,ref:a,"arc-card-media":"",children:r}));ll.displayName="ArcCard.Media";const dl=(0,l.forwardRef)(({position:r,direction:e="column",children:a,...t},o)=>(0,i.jsx)("div",{...t,ref:o,"arc-card-media-element":r,"is-row":e==="row"?"":void 0,"is-column":e==="column"?"":void 0,children:a}));dl.displayName="ArcCard.MediaElement";const ul=(0,l.forwardRef)(({children:r,actionSlot:e,showDivider:a,...t},o)=>(0,i.jsxs)("header",{...t,ref:o,"arc-card-header":"","has-divider":a?"":void 0,children:[(0,i.jsx)("div",{"arc-card-header-content":"",children:r}),!!e&&(0,i.jsx)("div",{"arc-card-header-actions":"",children:e})]}));ul.displayName="ArcCard.Header";const hl=(0,l.forwardRef)(({tag:r="div",...e},a)=>(0,l.createElement)(r,{...e,ref:a,"arc-card-body":""}));hl.displayName="ArcCard.Body";const pl=(0,l.forwardRef)(({showDivider:r,...e},a)=>(0,i.jsx)("footer",{...e,ref:a,"arc-card-footer":"","has-divider":r?"":void 0}));pl.displayName="ArcCard.Footer";const mn=(0,l.forwardRef)(({tag:r="a",...e},a)=>(0,l.createElement)(r,{...r==="button"?{type:"button"}:null,...e,ref:a,"arc-card-action-area":""}));mn.displayName="ArcCard.ActionArea";const Zc=(0,l.forwardRef)(({tag:r,level:e=4,href:a,target:t,rel:o,onClick:n,children:c,...d},u)=>{const h=r??`h${e}`,p=a!=null||n!=null;return(0,l.createElement)(h,{...d,ref:u,"arc-card-title":""},p?(0,i.jsx)(mn,{...a!=null?{href:a,target:t,rel:o}:{tag:"button"},onClick:n,children:c}):c)});Zc.displayName="ArcCard.Title";const Jc=(0,l.forwardRef)(({value:r,icon:e="fa-regular fa-check",onClick:a,"aria-label":t="Select",style:o,...n},c)=>{const d=Oh(),u=r??d,h=cl(),p=il(u);return(0,i.jsx)(Mr,{ref:c,layout:"icon",variant:"common",hierarchy:"secondary",shape:"square",size:"sm",...n,icon:e,"arc-card-select-toggle":"","aria-label":t,"aria-pressed":p,style:{"--arc-icon-color":p?void 0:"transparent",...o},onClick:v=>{v.stopPropagation(),a?.(v),!v.defaultPrevented&&u!=null&&h?.toggle(u)}})});Jc.displayName="ArcCard.SelectionToggle";const gl=({id:r,anchorProps:e,...a})=>{const t=Nr(r,"arc-card-menu");return(0,i.jsx)(lo,{...a,id:t,"arc-card-menu":"",anchorProps:{icon:"fa-regular fa-ellipsis",layout:"icon",variant:"common",hierarchy:"secondary",shape:"square",size:"sm","aria-label":"More options",...e}})};gl.displayName="ArcCard.Menu";const K$=new Set(["article","section"]),W$=["a[href]","button","input","select","textarea","label",'[role="button"]','[role="link"]','[role="checkbox"]','[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]','[role="tab"]','[contenteditable]:not([contenteditable="false"])'].join(", "),X$=r=>{let e,a=!1,t=!1;const o=()=>e!=null&&a&&t,n=d=>{l.Children.forEach(d,u=>{o()||!(0,l.isValidElement)(u)||(u.type===Zc?e??=u:u.type===Jc?a=!0:u.type===mn&&(t=!0),n(u.props.children))})};n(r);const c=e!=null&&(e.props.href!=null||e.props.onClick!=null);return{title:e,hasClickableTitle:c,hasSelectionToggle:a,hasActionArea:t}},qa=s`--arc•card`,Nh=s`${qa}•fg`,Bh=s`${qa}•bg`,Fh=s`${qa}•bc`,bn=s`${qa}•br`,$n=s`${qa}•fs`,uo=s`${qa}•pad`,ho=s`${qa}•gap`,vl=s`${qa}•divider`,fl=s`${qa}•lift`,q$=s`
  ${Nh}: var(--arc-color-fg-primary);
  ${Bh}: var(--arc-color-bg-primary);
  ${Fh}: var(--arc-color-border-mid);
  ${vl}: var(${m}•1) solid var(--arc-color-border-mid);

  /* size = master scaling axis: font → radius → padding → gap */
  &[data-size=inherit] {
    ${$n}: inherit;
    ${bn}: var(--arc-border-radius-md);
    ${uo}: var(${R}•16);
    ${ho}: var(${R}•12);
  }

  &[data-size=lg] {
    ${$n}: var(${m}•16);
    ${bn}: var(${m}•16);
    ${uo}: var(${R}•20);
    ${ho}: var(${R}•16);
  }

  &[data-size=md] {
    ${$n}: var(${m}•14);
    ${bn}: var(${m}•14);
    ${uo}: var(${R}•16);
    ${ho}: var(${R}•12);
  }

  &[data-size=sm] {
    ${$n}: var(${m}•12);
    ${bn}: var(${m}•10);
    ${uo}: var(${R}•14);
    ${ho}: var(${R}•8);
  }
`,Y$=s`
  [arc-card]:has([arc-card-media]) {
    anchor-scope: --card-media;
  }

  [arc-card-media] {
    anchor-name: --card-media;
    aspect-ratio: 16 / 9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;

    > img,
    > video,
    > picture,
    > svg {
      display: block;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      line-height: 0;
    }
  }

  [arc-card-media-element] {
    position: absolute;
    position-anchor: --card-media;
    z-index: 1;

    display: flex;
    gap: var(${m}•8);
    margin: 0.75em;

    &[is-row] {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    &[is-column] {
      flex-direction: column;
    }

    &[arc-card-media-element*=top] {
      top: anchor(top);
    }
    &[arc-card-media-element*=bottom] {
      bottom: anchor(bottom);
    }
    &[arc-card-media-element*=left] {
      left: anchor(left);
    }
    &[arc-card-media-element*=right] {
      right: anchor(right);
    }
  }

  [arc-card-header],
  [arc-card-body],
  [arc-card-footer] {
    padding: var(--arc-card-padding, var(${uo}));
  }

  /* Bare content with no structural region: pad the root so ad-hoc children aren't flush to the edge.
     When any region is present it owns the padding and the root stays unpadded (keeps dividers
     full-bleed). Media is excluded on purpose — a media-only card bleeds to the radius. */
  &:not(:has(:is([arc-card-media], [arc-card-header], [arc-card-body], [arc-card-footer]))) {
    padding: var(--arc-card-padding, var(${uo}));
  }

  [arc-card-header] {
    flex: none;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--arc-card-gap, var(${ho}));

    &[has-divider] {
      border-bottom: var(${vl});
    }

    /* shed the gap-facing padding only when a body follows to set the rhythm; a header with no body
       after it (or a divider) keeps full padding so it never collides with the next region */
    &:not([has-divider]):has(+ [arc-card-body]) {
      padding-block-end: 0;
    }
  }

  [arc-card-header-content] {
    flex: 1;
    min-width: 0;
  }

  [arc-card-body] {
    flex: 1;
  }

  [arc-card-footer] {
    flex: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--arc-card-gap, var(${ho}));
    margin-block-start: auto;

    &[has-divider] {
      border-top: var(${vl});
    }
  }

  /* a footer directly after a body sheds its top padding — the body's own padding sets the gap;
     standalone (no body before it, or a divider) it keeps full padding so regions never collide */
  [arc-card-body] + [arc-card-footer]:not([has-divider]) {
    padding-block-start: 0;
  }

  [arc-card-title] {
    flex: none;
    margin: 0;
  }
`,Z$=s`
  /* whole-card control, a card holding an ActionArea, or a card in a selectable set —
     selectable is either the card's own attr or inherited from a selectable ArcCardLayout */
  &:is(a, button),
  &:has([arc-card-action-area]),
  &[is-selectable],
  [arc-card-layout][is-selectable] & {
    cursor: pointer;
  }

  /* hover affordance — also shown on focus; never overrides the selected border */
  &:is(a, button):hover,
  &:is(a, button):focus-visible,
  &:has([arc-card-action-area]):hover,
  &:has([arc-card-action-area]:focus-visible),
  &[is-selectable]:hover,
  [arc-card-layout][is-selectable] &:hover {
    &:not([is-selected]) {
      border-color: var(--arc-color-border-hover);
    }
  }

  /* hover lift + optional background tint (tint yields to the selected tint) */
  &:is(a, button):hover,
  &:has([arc-card-action-area]):hover,
  &[is-selectable]:hover,
  [arc-card-layout][is-selectable] &:hover {
    ${fl}: 0 var(${m}•6) var(${m}•18) rgb(0 0 0 / 0.12);

    &[has-hover-tint]:not([is-selected]) {
      background: var(--arc-color-bg-hover-subtle);
    }
  }

  /* focus ring on the card itself */
  &:has([arc-card-action-area]:focus-visible) {
    outline: var(${m}•2) solid var(--arc-color-border-focus);
    outline-offset: var(${m}•2);
  }

  [arc-card-action-area] {
    color: inherit;
    text-decoration: none;
    outline: none;

    /* neutralize native <button> chrome so a button ActionArea reads as the title text (harmless
       on an <a>, which has none of it) */
    appearance: none;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    text-align: inherit;
    cursor: pointer;

    /* stretched hit-area overlay across the card */
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 0;
    }
  }

  /* Keep the suite-owned interactive regions clickable above the overlay. Scoped to the two
     structural slots we control (header actions + footer) and gated on an actual ActionArea, so
     we never impose position/stacking on arbitrary team content. Body content intentionally sits
     *under* the overlay — the documented whole-card hit-target tradeoff (blocks text selection).
     A team needing another control above the overlay lifts it themselves. */
  &:has([arc-card-action-area]) {
    :is([arc-card-header-actions], [arc-card-footer] :is(a, button)) {
      position: relative;
      z-index: 1;
    }
  }
`,J$=s`
  /* Visual selected state only — the accessible state lives on the composed control. */
  &[is-selected] {
    border-color: var(--arc-color-border-selected);

    &::after {
      content: '';
      position: absolute;
      inset: var(${m}•1m);
      z-index: 1;
      pointer-events: none;
      border-radius: inherit;
      outline: var(${m}•2) solid var(--arc-color-border-selected);
      outline-offset: var(${m}•2m);
    }

    &[has-selected-tint] {
      background: var(--arc-color-bg-selected-subtle);
      color: var(--arc-color-fg-on-selected-subtle);
    }
  }

  [arc-card-select-toggle] {
    opacity: 0;
  }

  &[is-selectable] [arc-card-select-toggle],
  &:hover [arc-card-select-toggle],
  &:focus-within [arc-card-select-toggle] {
    opacity: 1;
  }
`,Q$=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-card] {
    ${q$}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-card] {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    text-align: start;
    font-size: initial;
    overflow: hidden;

    /* two independent, composable shadow layers: the selected ring + the hover lift */
    ${fl}: 0 0 transparent;

    color: var(--arc-card-color, var(${Nh}));
    background: var(--arc-card-background, var(${Bh}));
    border: var(--arc-card-border, var(${m}•1) solid var(${Fh}));
    border-radius: var(--arc-card-border-radius, var(${bn}));
    box-shadow: var(${fl});
    transition: background-color 120ms ease, border-color 120ms ease, box-shadow 120ms ease;

    min-width: var(--arc-card-min-width, var(--js•miw, unset));

    > * {
      font-size: var(--arc-card-font-size, var(${$n}));
    }

    ${Y$}
    ${Z$}
    ${J$}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-card] {
      transition: none;
    }
  }

}
`,r1=["grid","list","row"],e1=["none",...gr(ie,["xs","sm","md","lg","xl"])],a1=gr(Xr,["common"]),t1=gr(ie,["inherit","sm","md","lg"]),o1=r1,n1=e1,c1=({children:r,tag:e,variant:a="common",size:t="md",hasHoverTint:o=!0,hasSelectedTint:n=!0,isSelectable:c,isSelected:d,value:u,onClick:h,onKeyDown:p,role:v,tabIndex:g,"aria-label":f,"aria-labelledby":b,"aria-checked":y,...x},A)=>{const $=e??"div",k=cl(),w=k!=null&&u!=null,E=il(u),_=Dh(),T=w&&_,C=d??(T?E:!1),S=c??T,I=h,D=p,N=T?X=>{if(I?.(X),X.defaultPrevented)return;const sr=X.target?.closest(W$);sr&&sr!==X.currentTarget||k.toggle(u)}:I,H=T?X=>{D?.(X),!(X.defaultPrevented||X.target!==X.currentTarget)&&(X.key===" "||X.key==="Enter")&&(X.preventDefault(),k.toggle(u))}:D,Z=$==="a"||$==="button",L=typeof $=="string"&&K$.has($),M=!f&&!b,P=T&&!Z,F=P||L&&M?X$(r):void 0,or=P&&!F?.hasSelectionToggle&&!F?.hasActionArea&&!F?.hasClickableTitle,j=(L||or)&&M&&F?.title&&qt(F.title.props.children)||void 0;return(0,l.createElement)($,{...x,ref:A,onClick:N,onKeyDown:H,"arc-card":"","data-variant":a,"data-size":t,"aria-label":f??j,"aria-labelledby":b,role:v??(or?"checkbox":void 0),tabIndex:g??(or?0:void 0),"aria-checked":y??(or?C:void 0),"has-hover-tint":o?"":void 0,"has-selected-tint":n?"":void 0,"is-selectable":S?"":void 0,"is-selected":C?"":void 0},(0,l.createElement)(sl.Provider,{value:u},r))},Hh=(0,l.forwardRef)(c1);Hh.displayName="ArcCard";const i1=Object.assign(Hh,{Media:ll,MediaElement:dl,Header:ul,Body:hl,Footer:pl,Title:Zc,ActionArea:mn,SelectionToggle:Jc,Menu:gl});Cr("ArcCard",Q$);const s1=s`--arc•layout`,Ea=s`${s1}•gap`,l1=s`
@layer arc-components {

  /* SETUP -----------------------------------------------------------• */

  [arc-layout] {
    padding: var(--arc-layout-padding, 0em);
    font-size: initial;

    /* Box-alignment, override-first with the component's system var; unset → CSS default (the
       var() resolves to the property's initial value). Harmless in whichever mode ignores them. */
    align-items: var(--arc-layout-align-items, var(--js•align));
    justify-content: var(--arc-layout-justify•content, var(--js•justify));
    justify-items: var(--arc-layout-justify•items, var(--js•justify•items));
    align-content: var(--arc-layout-align•content, var(--js•align•content));

    &[data-gap=none] { ${Ea}: 0em; }
    &[data-gap=xs] { ${Ea}: 0.125em; }
    &[data-gap=sm] { ${Ea}: 0.5em; }
    &[data-gap=md] { ${Ea}: 0.875em; }
    &[data-gap=lg] { ${Ea}: 1.5em; }
    &[data-gap=xl] { ${Ea}: 2em; }
    &[data-gap=number] { ${Ea}: var(--js•gap, 0em); }
  }

  [arc-layout=row] {
    display: flex;
    flex-direction: var(--arc-layout-direction, row);
    gap: var(--arc-layout-gap, var(${Ea}));

    &[can-wrap] {
      flex-wrap: wrap;
    }
  }

  [arc-layout=list] {
    display: flex;
    flex-direction: var(--arc-layout-direction, column);
    gap: var(--arc-layout-gap, var(${Ea}));
  }

  [arc-layout=grid] {
    display: grid;
    grid-template-columns: var(--arc-layout-columns, var(--js•cols, 1fr));
    gap: var(--arc-layout-gap, var(${Ea}));
  }

}
`,d1=(r,e)=>[{test:()=>e&&!r,value:`repeat(auto-fill, minmax(${e}, 1fr))`},{test:()=>e&&fc(r)&&r>0,value:`repeat(${r}, minmax(${e}, min-content))`},{test:()=>fc(r)&&r>0&&!e,value:`repeat(${r}, minmax(0, 1fr))`},{test:()=>wt(r)&&(!e||e==="0em"),value:r},{test:()=>!0,value:void 0}],u1=(r,e)=>d1(r,e).find(a=>a.test())?.value,Vh=r=>{if(!r)return[void 0,void 0];const[e,a]=r.trim().split(/\s+/);return[e,a??e]},h1=({mode:r,gap:e,minItemWidth:a,columns:t,canWrap:o,alignItems:n,justifyItems:c,alignContent:d,justifyContent:u,placeItems:h,placeContent:p,tag:v="div",style:g,...f})=>{const b=r==="grid"?u1(t,a):void 0,y=r==="row"&&!!a,x=fc(e)&&e>0,[A,$]=Vh(h),[k,w]=Vh(p),E={"--js\u2022align":n??A,"--js\u2022justify":u??w,"--js\u2022justify\u2022items":c??$,"--js\u2022align\u2022content":d??k},_={...g,...b?{"--js\u2022cols":b}:{},...x?{"--js\u2022gap":`max(${e}px, ${e} / 16 * 1em)`}:{},...y?{"--js\u2022miw":a}:{},...Object.fromEntries(Object.entries(E).filter(([,T])=>T!=null))};return(0,i.jsx)(v,{...f,"arc-layout":r,"data-gap":x?"number":e??void 0,"can-wrap":o?"":void 0,style:_})};Cr("ArcLayout",l1);const p1=r=>r===!0?"multiple":r==="single"||r==="multiple"?r:void 0,g1=({mode:r="grid",gap:e="md",role:a,isSelectable:t,onSelectionChange:o,activateOnFirstSelect:n=!1,...c})=>{const d=p1(t),u=(0,l.useRef)({mode:"multiple",activateOnFirstSelect:n,onSelectionChange:o});u.current={mode:d??"multiple",activateOnFirstSelect:n,onSelectionChange:o};const h=(0,l.useRef)(null);d&&!h.current?h.current=Lh(()=>u.current):!d&&h.current&&(h.current=null);const p=h.current,v=(0,l.useSyncExternalStore)(p?.subscribe??(()=>()=>{}),()=>p?.isActive()??!1,()=>!1),g=(0,i.jsx)(h1,{...c,"arc-card-layout":"",...v?{"is-selectable":""}:{},mode:r,gap:e,role:a??(r==="row"?"group":void 0)});return p?(0,i.jsx)(fn.Provider,{value:p,children:g}):g},po=()=>{},Et=s`--arc•cb`,Te=s`${Et}•o`,ml=s`${Te}•icon`,bl=s`${Te}•text`,Uh=s`${Et}•fs`,Gh=s`${Et}•br`,$l=s`${Et}•di`,Kh=s`${Et}•pd`,Wh=s`${Et}•gp`,Xh=s`${Et}•bg`,yn=s`${Te}•fg`,Qc=s`${Te}•bg`,qh=s`${Te}•bc`,yl=s`${Te}•bw`,ri=s`${Te}•br`,Yh=s`${Te}•fw`,Zh=s`${Te}•ol`,Jh=s`${Te}•ow`,Qh=s`${Te}•oo`,rp=s`${Te}•lh`,ei={BAR:s`
    ${Uh}: var(${m}•14);
    ${Gh}: var(${m}•8);

    &:is([data-layout=hug], :not([data-layout])) { /** @default */
      ${$l}: inline-flex;
    }

    &[data-layout=fill] {
      ${$l}: flex;
    }
  `,OPTIONS:s`
    ${yn}: var(--arc-color-fg-secondary);
    ${Qc}: transparent;
    ${qh}: transparent;
    ${yl}: var(${m}•1);
    ${rp}: calc(var(${Te}•sz) - var(${yl}) * 2);
    ${Jh}: var(${m}•2);
    ${Qh}: 0;
  `,SOLID:s`
    ${Xh}: transparent;
    ${Kh}: 0;
    ${Wh}: var(${m}•2);

    ${ri}: var(${m}•8);

    /* Solid sizes */
    &:is([data-size=lg], :not([data-size])) {
      ${Te}•sz: var(${m}•40);
      ${ml}•pd: var(${m}•8);
      ${bl}•pd: var(${m}•12);
    }

    &[data-size=md] {
      ${Te}•sz: var(${m}•32);
      ${ml}•pd: var(${m}•6);
      ${bl}•pd: var(${m}•8);
    }
  `,SOLID_OPTION_STATES:s`
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${yn}: var(--arc-color-fg-on-hover-default);
        ${Qc}: var(--arc-color-bg-hover-default);
      }
    }

    &:has(:checked) {
      ${yn}: var(--arc-color-fg-primary);
      ${Qc}: var(--arc-color-bg-secondary);
      ${Yh}: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${yn}: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${Zh}: var(${Jh}) solid var(--arc-color-border-focus);
    }
  `},v1=s`
@layer arc-components {

  [arc-checkbox-bar] {
    ${ei.BAR}
    ${ei.OPTIONS}

    /* Inter-Component Communication -------------------------------• */
    --arc-label-opacity-disabled: 1; /* intrinsic disabled opacity not needed here; letting tokens handle it */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    ${ei.SOLID}

    [arc-checkbox-bar-option] {
      ${ei.SOLID_OPTION_STATES}
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    border-radius: var(${ri});
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${Uh}));
    display: var(${$l});
    gap: var(${Wh});
    background: var(${Xh});
    border-radius: var(${Gh});
    padding: var(${Kh});
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${ri});
      outline: var(${Zh}, none);
      outline-offset: var(${Qh});
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=checkbox] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${rp});
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${Te}•sz);
      min-width: var(${Te}•sz);

      border-radius: var(${ri});
      border: var(${yl}) solid var(${qh});
      background: var(${Qc});
      color: var(${yn});
      font-weight: var(${Yh}, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${bl}•pd);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${ml}•pd);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,f1=gr(ia,["hug","fill"]),m1=gr(ie,["lg","md"]),b1=gr(Xr,["solid"]),ep=({children:r,label:e,icon:a,...t})=>{const o=r||(0,i.jsx)(le,{icon:a,text:e});return(0,i.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":t?.checked||void 0,children:(0,i.jsx)(ol,{...t,layout:"fill",useMask:!1,label:o,onChange:t.onChange??po})})},$1=({children:r,size:e="lg",layout:a="hug",variant:t="solid",name:o,options:n,values:c,isDisabled:d,onChange:u,...h})=>{const p=Nr(o,"arc-checkbox-bar");return(0,i.jsx)("ul",{...h,"arc-checkbox-bar":"","data-size":e,"data-layout":a,"data-variant":t,"is-disabled":d?"":void 0,role:"group",children:n?n.map(({hidden:v,onChange:g,value:f,...b})=>v||f==null||f===""?null:(0,l.createElement)(ep,{...b,key:String(f),name:p,value:f,checked:c?.includes(f)??!1,disabled:d||b.disabled,onChange:g??u??po})):r})};Cr("ArcCheckboxBar",v1);const _a=s`--arc•chip`,xn=s`${_a}•fg`,wn=s`${_a}•bg`,kn=s`${_a}•border`,ai=s`${_a}•height`,ti=s`${_a}•padding`,oi=s`${_a}•leading•edge`,ni=s`${_a}•dismiss•edge`,xl=s`${_a}•avatar•gap`,ci=s`${_a}•icon•gap`,ii=s`${_a}•dismiss•gap`,y1=s`:where(:hover, [data-simulate=hover], :has([data-simulate=hover]))`,x1=s`:not([is-selected], [is-disabled])`,w1=s`
  ${xn}: var(--arc-chip-color, var(--arc-color-fg-primary));
  ${wn}: var(--arc-chip-background, var(--arc-color-bg-primary));
  ${kn}: var(--arc-chip-border-color, var(--arc-color-border-mid));
  ${xl}: ${jr(6)};
`,k1=s`
  &[data-size=sm] {
    ${ai}: ${jr(24)};
    ${ti}: ${jr(8)};
    ${oi}: ${jr(1)};
    ${ni}: 0;
    ${ci}: ${jr(4)};
    ${ii}: 0;
  }

  &[data-size=md] {
    ${ai}: ${jr(32)};
    ${ti}: ${jr(12)};
    ${oi}: ${jr(3)};
    ${ni}: ${jr(3)};
    ${ci}: ${jr(8)};
    ${ii}: ${jr(2)};
  }

  &[data-size=lg] {
    ${ai}: ${jr(40)};
    ${ti}: ${jr(16)};
    ${oi}: ${jr(3)};
    ${ni}: ${jr(7)};
    ${ci}: ${jr(8)};
    ${ii}: ${jr(4)};

    &[has-dismiss] {
      ${xl}: ${jr(8)};
    }
  }
`,A1=s`
  /* WRAPPER — visible pill ----------------------------------------• */
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  gap: var(${ii});
  height: var(${ai});
  border-radius: var(--arc-border-radius-pill);
  border: var(--arc-border-width-sm) solid var(${kn});
  background: var(${wn});
  color: var(${xn});
  font-family: var(--arc-font-family-body);
  font-size: var(--arc-chip-font-size, initial);
  transition:
    background-color 200ms ease-out,
    border-color 200ms ease-out,
    color 200ms ease-out;

  &:has([arc-chip-body]:focus-visible) {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: var(--arc-border-width-md);

    [arc-chip-body]:focus-visible { outline: none; }
  }
`,C1=s`
  /* BODY — content surface + inner slots --------------------------• */
  [arc-chip-body] {
    flex: 1;
    appearance: none;
    display: inline-flex;
    align-items: center;
    height: 100%;
    padding: 0 var(${ti});
    margin: 0;
    background: transparent;
    border: none;

    /* Asymmetric left padding when an avatar is present — matches the avatar's vertical inset. */
    &:has([arc-avatar-text]) {
      padding-inline-start: var(${oi});
    }

    /* Inter-Component Communication • ArcAvatarText ------------• */
    --arc-avatar-text-gap: var(${xl});

    /* Inter-Component Communication • ArcIconText --------------• */
    --arc-icon-text-gap: var(${ci});
    --arc-icon-text-line-height: var(--arc-line-height-tight);
  }

  /* When a dismiss sibling is present, pull body flush right and reserve outer space for it. */
  &[has-dismiss] {
    padding-inline-end: var(${ni});
    [arc-chip-body] { padding-inline-end: 0; }
  }
`,S1=s`
  /* DISMISS — sibling of body -------------------------------------• */
  [data-slot=dismiss]:where(:hover, [data-simulate=hover]) {
    background: var(--arc-color-alpha-subtle);
  }
`,z1=s`
  /* INTERACTIVE — only set on interactive wrappers ----------------• */
  &[is-interactive] {
    cursor: pointer;
    user-select: none;

    [arc-chip-body] {
      color: inherit;
      cursor: inherit;
    }

    &${y1}${x1} {
      ${wn}: var(--arc-color-bg-hover-default);
      ${kn}: var(--arc-color-border-hover);
    }
  }

  /* SELECTED ------------------------------------------------------• */
  &[is-selected] {
    ${wn}: var(--arc-color-bg-blue-muted);
    ${kn}: var(--arc-color-border-selected);
    ${xn}: var(--arc-color-fg-brand-heavy);
  }

  /* DISABLED ------------------------------------------------------• */
  &[is-disabled] {
    ${wn}: transparent;
    ${kn}: var(--arc-color-border-disabled);
    ${xn}: var(--arc-color-fg-disabled);
    cursor: not-allowed;
  }
`,E1=s`
  &:where([data-variant=ai]) {
    background: var(--arc-gradient-ai-50);

    &[is-selected] {
      background: var(--arc-gradient-ai-100) padding-box, var(--arc-gradient-ai-200) border-box;
      border-color: transparent;
      ${xn}: var(--arc-color-fg-primary);
    }
  }
`,_1=s`
@layer arc-components {

  [arc-chip]:not([hidden]) {
    /* SETUP --------------------------------------------------------• */
    ${w1}

    /* SIZES --------------------------------------------------------• */
    ${k1}

    /* CORE STYLES --------------------------------------------------• */
    ${A1}

    /* BODY ---------------------------------------------------------• */
    ${C1}

    /* DISMISS ------------------------------------------------------• */
    ${S1}

    /* STATES -------------------------------------------------------• */
    ${z1}

    /* VARIANTS -----------------------------------------------------• */
    ${E1}
  }

}
`,T1=gr(Xr,["common","ai"]),I1=Gr(ie,["sm","md","lg"]),P1={sm:"xs",md:"sm",lg:"md"},R1={sm:"sm",md:"md",lg:"md"},wl={variant:"common",size:"md"},j1=({children:r,text:e,variant:a=wl.variant,size:t=wl.size,isSelected:o,isDisabled:n,isStrong:c,icon:d,isFlipped:u,avatar:h,onClick:p,onDismiss:v,dismissProps:g,...f})=>{const b=p!==void 0||o!==void 0,y=b?"button":"span",x=r||e,A=!!h,$=!!d;return(0,i.jsxs)("span",{...f,"arc-chip":"","data-size":t,"data-variant":a,"is-selected":o?"":void 0,"is-disabled":n?"":void 0,"is-interactive":b?"":void 0,"has-dismiss":v?"":void 0,children:[(0,i.jsx)(y,{"arc-chip-body":"",...b&&{type:"button",disabled:n,"aria-pressed":o,"aria-disabled":n||void 0,onClick:n?void 0:p},children:A?(0,i.jsx)(Gc,{avatar:{...h,isActive:!n},isStrong:c,size:P1[t],overflow:"truncate",children:x}):($||x)&&(0,i.jsx)(le,{icon:d,isFlipped:u,isStrong:c,size:R1[t],overflow:"truncate",children:x})}),v&&(0,i.jsx)(Mr,{"aria-label":typeof e=="string"?`Remove ${e}`:"Dismiss",icon:"fa-regular fa-xmark",...g,layout:"icon",hierarchy:"tertiary",shape:"round",size:"sm","data-slot":"dismiss",disabled:n,onClick:k=>{g?.onClick?.(k),v()}})]})};Cr("ArcChip",_1);const L1=["normal","simple","add","edit"],M1=["solid","gradient"],D1=["swatch","gradient-stop","gradient"],O1=["standalone","embedded"],N1=["none","header","tools"],si=["gradient-field","gradient-stops","angle-slider","angle-presets"],kl=["color-field","eye-dropper","hue-slider","alpha-slider","alpha-input","hex-input","palettes"],ap=["eye-dropper","alpha-slider","hex-input","palettes"],B1=[...kl,...si],tp=r=>r.kind==="gradient",op=r=>r.activePanel==="solid",F1=r=>r.activePanel==="gradient",H1=r=>r.activePanel==="none",pe={colorPicker:"Color Picker",heading:"Color",panelSolid:"Solid",panelGradient:"Gradient",colorField:"Color Saturation and Value",saturation:"Saturation",value:"Value",colorFieldReadout:(r,e)=>`Saturation ${r}%. Value ${e}%.`,hue:"Hue",hueValue:r=>`Hue ${r}\xB0`,opacity:"Opacity",opacityValue:r=>`Opacity ${r}%`,hex:"Hex",unsetColor:"Unset color",unsetColorPlaceholder:"...",hexInvalid:"Please enter six hex digits \u2192 A1B2C3",hexRgbOnly:"Use six hex digits (RGB only). Opacity is not available.",hexExpandHint:r=>`Please enter six hex digits \u2192 ${r}.`,hexApplyAlphaHint:(r,e)=>`Change to \u2192 #${r} at ${e}% opacity?`,applyExpandedHex:"Apply expanded six-digit hex",applyExpandedHexValue:r=>`Apply expanded hex ${r}`,applyHexWithAlpha:(r,e)=>`Apply #${r} and ${e}% opacity`,eyeDropper:"Dropper",eyeDropperTooltip:"Pick a color",colorPalette:"Color palette",addSwatch:"Add Swatch",addCurrentColor:"Add Current Color",saveColor:"Save Color",save:"Save",cancel:"Cancel",done:"Done",removeColor:"Remove color",removeGradient:"Remove gradient",gradient:"Gradient",gradientStops:"Stops",addGradient:"Add Gradient",stopPosition:r=>`Stop ${r} position`,addColorStop:"Add Color Stop",editColorStop:"Edit Color Stop",insertColorStop:"Insert Color Stop",removeColorStop:"Remove Color Stop",distributeColorStops:"Distribute Color Stops",angle:"Angle",gradientAngle:"Gradient angle",gradientAngleOption:r=>`${r}\xB0`},li=r=>r?{...pe,...r}:pe,V1=1e-10,di=1e-6,S2=1e-4,np=2,ar=(r,e,a)=>Math.min(a,Math.max(e,r)),ma=(r,e)=>{const a=10**e;return Math.round(r*a)/a},cp=(r,e=di)=>Math.abs(r)<e?0:Math.abs(1-r)<e?1:r,U1=r=>{if(!Number.isFinite(r)||r<=0)return np;let e=r,a=0;for(;a<12;){const t=Math.round(e);if(Math.abs(e-t)<V1)return a;e*=10,a+=1}return np},G1=(r,e,a,t)=>[{test:e<0&&a>=0,value:(r<0?Math.abs(e):a)>0?ma(r/(r<0?Math.abs(e):a)*100,t):0},{test:a<0,value:e<0?ma(r/Math.abs(e)*100,t):0},{test:e>=0,value:a>0?ma(r/a*100,t):0}].find(({test:o})=>o)?.value??0,ip=({value:r,min:e=0,max:a=100,step:t=1,precision:o})=>{const n=Number(e),c=Number(a),d=Math.min(n,c),u=Math.max(n,c),h=Number(t),p=Number(r),v=u-d,g=Number.isFinite(h)&&h>0&&v>0?h/v*100:0,f=o??U1(g),b=ar(p,d,u),y=v===0?0:(b-d)/v,x=ma(y*100,f),A=ma(100-x,f),$=G1(b,d,u,f);return{toValue:x,fromValue:A,pctSigned:$}},An=r=>parseInt(r,16),be=r=>ar(ma(r,0),0,255),Al=r=>ma((r%360+360)%360,2),sp=(r,e)=>cp(ma(ar(r,0,1),e)),Ue=r=>{const e=(r.h%360+360)%360,a=ar(r.s,0,1),t=ar(r.v,0,1),o=ar(r.a,0,1),n=t*a,c=n*(1-Math.abs(e/60%2-1)),d=t-n;let u=0,h=0,p=0;return e<60?[u,h,p]=[n,c,0]:e<120?[u,h,p]=[c,n,0]:e<180?[u,h,p]=[0,n,c]:e<240?[u,h,p]=[0,c,n]:e<300?[u,h,p]=[c,0,n]:[u,h,p]=[n,0,c],{r:(u+d)*255,g:(h+d)*255,b:(p+d)*255,a:o}},ui=(r,e)=>{const a=ar(r.r,0,255)/255,t=ar(r.g,0,255)/255,o=ar(r.b,0,255)/255,n=Math.max(a,t,o),c=Math.min(a,t,o),d=n-c,u=n===0?0:d/n,h=n;let p=e??0;return d>1e-10?(n===a?p=60*((t-o)/d%6):n===t?p=60*((o-a)/d+2):p=60*((a-t)/d+4),p<0&&(p+=360)):p=(p%360+360)%360,{h:p,s:u,v:h,a:ar(r.a,0,1)}},lp=r=>{const e=(r.h%360+360)%360,{s:a}=r,{l:t}=r,o=(1-Math.abs(2*t-1))*a,n=o*(1-Math.abs(e/60%2-1)),c=t-o/2;let d=0,u=0,h=0;return e<60?[d,u,h]=[o,n,0]:e<120?[d,u,h]=[n,o,0]:e<180?[d,u,h]=[0,o,n]:e<240?[d,u,h]=[0,n,o]:e<300?[d,u,h]=[n,0,o]:[d,u,h]=[o,0,n],{r:(d+c)*255,g:(u+c)*255,b:(h+c)*255,a:r.a}},dp=r=>{const e=r.r/255,a=r.g/255,t=r.b/255,o=Math.max(e,a,t),n=Math.min(e,a,t),c=o-n;let d=0;c!==0&&(o===e?d=60*((a-t)/c%6):o===a?d=60*((t-e)/c+2):d=60*((e-a)/c+4)),d<0&&(d+=360);const u=(o+n)/2,h=c===0?0:c/(1-Math.abs(2*u-1));return{h:d,s:h,l:u,a:r.a}},up=r=>{const e=_t(r.r),a=_t(r.g),t=_t(r.b),o=.4122214708*e+.5363325363*a+.0514459929*t,n=.2119034982*e+.6806995451*a+.1073969566*t,c=.0883024619*e+.2817188376*a+.6299787005*t,d=Math.cbrt(o),u=Math.cbrt(n),h=Math.cbrt(c),p=.2104542553*d+.793617785*u-.0040720468*h,v=1.9779984951*d-2.428592205*u+.4505937099*h,g=.0259040371*d+.7827717662*u-.808675766*h,f=Math.sqrt(v*v+g*g);let b=Math.atan2(g,v)*180/Math.PI;return b<0&&(b+=360),{L:ar(p,0,1),C:f,h:b,a:ar(r.a,0,1)}},hp=r=>{const e=ar(r.L,0,1),a=r.h*Math.PI/180,t=r.C*Math.cos(a),o=r.C*Math.sin(a),n=e+.3963377774*t+.2158037573*o,c=e-.1055613458*t-.0638541728*o,d=e-.0894841775*t-1.291485548*o,u=n*n*n,h=c*c*c,p=d*d*d,v=4.0767416621*u-3.3077115913*h+.2309699292*p,g=-1.2684380046*u+2.6097574011*h-.3413193965*p,f=-.0041960863*u-.7034186147*h+1.707614701*p,b=y=>{const x=y<=.0031308?y*12.92:1.055*y**.4166666666666667-.055;return Math.round(ar(x,0,1)*255)};return{r:b(v),g:b(g),b:b(f),a:ar(r.a,0,1)}},_t=r=>{const e=be(r)/255;return e<=.04045?e/12.92:((e+.055)/1.055)**2.4},pp=r=>{const e=_t(r.r),a=_t(r.g),t=_t(r.b);return .2126*e+.7152*a+.0722*t},hi=(r,e)=>{const a=r.a+e.a*(1-r.a);if(a<=0)return{r:0,g:0,b:0,a:0};const t=r.a/a,o=e.a*(1-r.a)/a;return{r:be(r.r*t+e.r*o),g:be(r.g*t+e.g*o),b:be(r.b*t+e.b*o),a:sp(a,2)}},Cn=(r,e,a,t)=>{const o=t?t(r):r,n=t?t(e):e;return Math.abs(o-n)<=a},go=(r,e,a)=>Cn(r,e,a,Math.round),Cl=(r,e,a)=>Cn(r,e,a),pi=(r,e)=>!e||!r?!1:go(r.r,e.r,1)&&go(r.g,e.g,1)&&go(r.b,e.b,1)&&Cl(r.a,e.a,1/255+di),gp=(r,e)=>!r||!e?!1:be(r.r)===be(e.r)&&be(r.g)===be(e.g)&&be(r.b)===be(e.b)&&Math.abs(r.a-e.a)<di,K1=(r,e)=>!e||!r?!1:go(r.r,e.r,3)&&go(r.g,e.g,3)&&go(r.b,e.b,3)&&Cl(r.a,e.a,.02),W1=(r,e)=>Cn(r.h,e.h,1e-4)&&Cn(r.s,e.s,1e-4)&&Cn(r.v,e.v,1e-4)&&Cl(r.a,e.a,1e-4),Sl=r=>String(Math.round(ar(r,0,1)*100)),vp=r=>{const e=r.trim();if(!e)return null;if(e.endsWith("%")){const t=Number(e.slice(0,-1).trim());return Number.isFinite(t)?ar(t/100,0,1):null}if(e.startsWith(".")||e.includes(".")){const t=Number(e);return Number.isFinite(t)?ar(t,0,1):null}const a=Number(e);return Number.isFinite(a)?ar(a/100,0,1):null},gi=r=>ar(Number(r.toFixed(2)),0,1).toString(),X1=/^[0-9a-f]+$/i,q1=500,vo=new Map,zl=r=>({...r}),Y1=(r,e)=>{if(vo.size>=q1){const a=vo.keys().next().value;a&&vo.delete(a)}vo.set(r,e?zl(e):null)},El=r=>r.split("").map(e=>e+e).join(""),_l=r=>r.length===3?El(r):r,Tt=r=>r.replace(/#/g,"").trim(),fp=r=>{const e=r.trim().toLowerCase().replace(/^#/,"");if(![3,4,6,8].includes(e.length))return null;const a=e.length<=4?El(e):e;if(!X1.test(a))return null;const t=An(a.slice(0,2)),o=An(a.slice(2,4)),n=An(a.slice(4,6)),c=a.length===8?An(a.slice(6,8))/255:1;return[t,o,n,c].some(d=>Number.isNaN(d))?null:{r:t,g:o,b:n,a:ar(c,0,1)}},Ta=r=>{const e=Number(r.trim());return Number.isFinite(e)?e:null},Tl=r=>{const e=r.trim();if(e.endsWith("%")){const t=Ta(e.slice(0,-1));return t==null?null:ar(t/100*255,0,255)}const a=Ta(e);return a==null?null:ar(a,0,255)},Il=r=>{const e=r.trim();if(e.endsWith("%")){const t=Ta(e.slice(0,-1));return t==null?null:ar(t/100,0,1)}const a=Ta(e);return a==null?null:ar(a,0,1)},Pl=(r,e)=>{const t=r.trim().toLowerCase().match(e);if(!t)return null;const o=t[1].trim(),[n,c]=o.split("/").map(h=>h.trim()),d=n.includes(",")?n.split(",").map(h=>h.trim()):n.split(/\s+/).filter(Boolean),u=c&&c.length?c:null;return{channels:d,alphaPart:u}},Z1=r=>{const e=Pl(r,/^rgba?\((.*)\)$/);if(!e)return null;let{channels:a,alphaPart:t}=e;if(a.length===4&&t===null&&(t=a[3]??null,a=a.slice(0,3)),a.length!==3)return null;const o=Tl(a[0]),n=Tl(a[1]),c=Tl(a[2]);if(o==null||n==null||c==null)return null;let d=1;if(t){const u=Il(t);if(u==null)return null;d=u}return{r:o,g:n,b:c,a:d}},J1=r=>{const e=Pl(r,/^hsla?\((.*)\)$/);if(!e)return null;let{channels:a,alphaPart:t}=e;if(a.length===4&&t===null&&(t=a[3]??null,a=a.slice(0,3)),a.length!==3)return null;const o=p=>Number(p.replace("deg","").trim()),n=p=>{if(!p.endsWith("%"))return null;const v=Ta(p.slice(0,-1));return v==null?null:v/100},c=o(a[0]),d=n(a[1]),u=n(a[2]);if(!Number.isFinite(c)||d==null||u==null)return null;let h=1;if(t){const p=Il(t);if(p==null)return null;h=p}return lp({h:c,s:d,l:u,a:h})},Q1=r=>{const e=Pl(r,/^oklch\((.*)\)$/);if(!e)return null;const{channels:a,alphaPart:t}=e;if(a.length!==3)return null;const o=p=>{const v=p.trim();if(v.endsWith("%")){const f=Ta(v.slice(0,-1));return f!=null?ar(f/100,0,1):null}const g=Ta(v);return g!=null?ar(g,0,1):null},n=p=>{const v=p.trim();if(v.endsWith("%")){const f=Ta(v.slice(0,-1));return f!=null&&f>=0?f/100*.4:null}const g=Ta(v);return g!=null&&g>=0?g:null},c=o(a[0]),d=n(a[1]),u=Ta(a[2].trim());if(c==null||d==null||u==null||!Number.isFinite(u))return null;let h=1;if(t){const p=Il(t);if(p==null)return null;h=p}return hp({L:c,C:d,h:u,a:h})},Zr=r=>{if(!r||typeof r!="string")return null;const e=r.toLowerCase().trim();if(vo.has(e)){const t=vo.get(e);return t?zl(t):null}let a=null;return e.startsWith("#")?a=fp(e):e.startsWith("rgb")?a=Z1(e):e.startsWith("hsl")?a=J1(e):e.startsWith("oklch")&&(a=Q1(e)),Y1(e,a),a?zl(a):null},ry=/#[0-9a-f]{3,8}|(?:rgba?|hsla?|oklch)\([^()]*\)/gi,mp=r=>{const e=(r.match(ry)??[]).map(u=>Zr(u)).filter(u=>u!=null);if(e.length===0)return null;const a=e.reduce((u,h)=>({r:u.r+h.r,g:u.g+h.g,b:u.b+h.b,a:u.a+h.a}),{r:0,g:0,b:0,a:0}),t=e.length,o=Math.round(a.r/t),n=Math.round(a.g/t),c=Math.round(a.b/t),d=a.a/t;return d<1?`rgba(${o}, ${n}, ${c}, ${d})`:`rgb(${o}, ${n}, ${c})`},bp=(r,e,a)=>{const t=Zr(`#${r}`);return t?a?.shouldApplyParsedAlpha===!0&&(r.length===4||r.length===8)?t:{...t,a:e.a}:null},$p=r=>{if(!r||typeof r!="string")return!1;const e=r.trim().toLowerCase();return/^#?[0-9A-F-a-f]{3,4}$/.test(e)||/^#?[0-9A-F-a-f]{6}([0-9A-F-a-f]{2})?$/.test(e)},yp=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.r=="number"&&typeof e.g=="number"&&typeof e.b=="number"&&typeof e.a=="number"},vi=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.h=="number"&&typeof e.s=="number"&&typeof e.v=="number"&&typeof e.a=="number"},Ge=(r,e=!1)=>{const a=d=>ar(Math.round(d),0,255).toString(16).padStart(2,"0"),t=a(r.r),o=a(r.g),n=a(r.b),c=a(ar(r.a,0,1)*255);return e?`#${t}${o}${n}${c}`:`#${t}${o}${n}`},fo=r=>Ge({...r,a:1},!1).slice(1),xp=(r,e,a,t,o)=>{const n=Zr(`#${r}`)??e,c={...n,[a]:be(n[a]+t*o)};return fo(c)},Rl=r=>{const e=dp(r),a=Math.round(e.h),t=Math.round(e.s*100),o=Math.round(e.l*100);return`hsl(${a} ${t}% ${o}% / ${gi(ar(e.a,0,1))})`},Ia=r=>{const e=ar(Math.round(r.r),0,255),a=ar(Math.round(r.g),0,255),t=ar(Math.round(r.b),0,255),o=ar(r.a,0,1);return o<1?`rgb(${e} ${a} ${t} / ${gi(o)})`:`rgb(${e} ${a} ${t})`},jl=r=>{const e=up(r),a=Math.round(e.L*1e3)/10,t=Math.round(e.C/.4*1e3)/10,o=Math.round(e.h),n=ar(e.a,0,1);return n<1?`oklch(${a}% ${t}% ${o} / ${gi(n)})`:`oklch(${a}% ${t}% ${o})`},Ke={ALPHA_MIN:0,ALPHA_MAX:100,ALPHA_SNAP_STEP:10,HUE_MIN:0,HUE_MAX:360,HUE_SNAP_STEP:15,SATURATION_MIN:0,SATURATION_MAX:100,SATURATION_SNAP_STEP:10,VALUE_MIN:0,VALUE_MAX:100,VALUE_SNAP_STEP:10},wp={auto:r=>r.a<1?Ia(r):Ge({...r,a:1},!1),hex:r=>Ge({...r,a:1},!1),hexa:r=>Ge(r,!0),rgb:r=>Ia(r),hsl:r=>Rl(r),oklch:r=>jl(r)},ey=(r,e)=>(wp[r]??wp.hex)(e),Br=r=>typeof r=="string"?r:r.color,mo=(r,e)=>typeof r!="string"&&r.name?r.name:e??void 0,kp=r=>{const e=Br(r),a=Zr(e),t=!!a&&a.a<1&&a.a>.01,o=!!a&&a.a===0;return{cssColor:e,rgba:a,isTranslucent:t,isTransparent:o,opaqueHex:a?Ge({...a,a:1},!1):null}},fi=(r,e)=>{if(vi(r))return r;const a=(yp(r)?r:null)??Zr(r)??Zr(e)??{r:0,g:0,b:0,a:1};return ui(a)},Pa=(r,e)=>{const a=e?.fallbackHex??"#000000",t=e?.format??"hex",o=fi(r,a),n={h:(o.h%360+360)%360,s:ar(o.s,0,1),v:ar(o.v,0,1),a:ar(o.a,0,1)},c=Ue(n),d={r:be(c.r),g:be(c.g),b:be(c.b),a:n.a},u=ey(t,d);let h,p,v,g,f;const b=d.a<1?"rgb":"hex",y=d.a<1?Ia(d):Ge({...d,a:1},!1),x=yo(u,{contrastBias:e?.contrastBias,bgColor:e?.contrastBgColor});return{format:t,value:u,alpha:d.a,autoFormat:b,autoValue:y,contrastColor:x,hsv:n,rgba:d,get hex(){return h??=Ge({...d,a:1},!1)},get hexa(){return p??=Ge(d,!0)},get rgb(){return v??=Ia(d)},get hsl(){return g??=Rl(d)},get oklch(){return f??=jl(d)}}},Ap=(r,e)=>({...Pa(r.hsv,{format:e}),name:r.name}),Sn=(r,e)=>({color:Br(r),name:mo(r,e)}),zn=r=>({color:`#${`00${Math.floor(Math.random()*16777216).toString(16)}`.slice(-6)}`,name:r}),bo=r=>Br(r).trim().toLowerCase(),$o=(r,e)=>{if(bo(r)===bo(e))return!0;const a=Zr(Br(r)),t=Zr(Br(e));return!!a&&!!t&&pi(a,t)},Ll=(r,e,a)=>{const t=a?.skipIndex;return r.some((o,n)=>n!==t?$o(o,e):!1)},ay=(r,e)=>Ll(r,e)?r:[...r,e],te=r=>typeof r=="object"&&r!==null&&"stops"in r&&Array.isArray(r.stops),Cp={r:255,g:255,b:255,a:1},Sp={r:42,g:42,b:42,a:1},ty=r=>{let e=r,a=0;for(;e;){const t=e.getAttribute("arc-scheme");if(t==="light")return a%2===0?Cp:Sp;if(t==="dark")return a%2===0?Sp:Cp;t==="inverse"&&(a+=1),e=e.parentElement}return null},oy=r=>{let e=null;try{e=r?document.documentElement?.querySelector?.(r):document.documentElement}catch{return null}if(e==null)return null;let a=null,t=e,o=0;for(;t&&o<12;){const n=Zr(window.getComputedStyle(t).backgroundColor);if(n&&n.a>0){if(a=a?hi(a,n):n,n.a===1)break}else{const c=ty(t);if(c){a=a?hi(a,c):c;break}}t=t.parentElement,o+=1}return a},zp=r=>{const e=window.getComputedStyle(r),a=Zr(e.backgroundColor);if(a&&a.a>0)return e.backgroundColor;const t=e.backgroundImage;return t&&t!=="none"?mp(t):null},yo=(r,e)=>{const a=Zr(Br(r));if(!a||a.a===0)return e?.useScheme?"auto":"inherit";const{darkColor:t,lightColor:o,contrastBias:n,bgColor:c,bgElement:d}=e??{},u=e?.useScheme?"light":t??"#000000",h=e?.useScheme?"dark":o??"#ffffff",p=ar(n??-4,-7,7);let v=a;if(a.a<1){const y=Zr(c??""),x=y&&y.a>0?y:null,A=x?null:oy(d);v=hi(a,x??A??{r:255,g:255,b:255,a:1})}const g=pp(v),f=(g+.05)/.05,b=1.05/(g+.05);return f+p>=b?u:h},Ml=r=>r==null?null:{comparisonKey:bo(r),selectedRgba:Zr(Br(r))},Ep=(r,e)=>{if(!e)return!1;if(bo(r)===e.comparisonKey)return!0;if(!e.selectedRgba)return!1;const a=Zr(Br(r));return!!a&&pi(a,e.selectedRgba)},nr={ANGLE:90,ANGLE_MIN:0,ANGLE_MAX:360,ANGLE_SNAP_STEP:15,ANGLE_PRESETS:[0,180,135,225,90,270,45,315],STOPS:[],STOP_MIN:0,STOP_MAX:100},_p=r=>{const e=r!=null&&Br(r)!==""?r:zn();return[{color:Br(e),at:nr.STOP_MIN},{color:Br(zn()),at:nr.STOP_MAX}]},ba=r=>r.map((e,a)=>({stop:e,index:a})).sort((e,a)=>e.stop.at-a.stop.at||e.index-a.index),Tp=r=>ba(r).map(e=>e.stop),It=(r,e=nr.STOP_MIN,a=nr.STOP_MAX)=>r.map(t=>({...t,at:ar(Math.round(t.at),e,a)})),Dl=(r,e,a)=>r!=null&&a<=r+1||e!=null&&a>=e-1,ny=(r,e,a)=>Dl(r[e-1]?.stop.at,r[e+1]?.stop.at,a),mi=(r,e)=>{if((r.angle??nr.ANGLE)!==(e.angle??nr.ANGLE))return!1;const a=r.stops??[],t=e.stops??[];return a.length!==t.length?!1:a.every((o,n)=>o.at===t[n].at&&o.color===t[n].color)},cy=(r,e)=>mi({stops:It(r.stops??[]),angle:r.angle??nr.ANGLE},{stops:It(e.stops??[]),angle:e.angle??nr.ANGLE}),ut=(r,e)=>r.name===e.name&&Ya(r)===Ya(e),En=(r,e)=>ar(Math.round((r+e)/2),nr.STOP_MIN,nr.STOP_MAX),Ip=(r,e,a=nr.STOP_MIN,t=nr.STOP_MAX)=>e<=1?a:a+r/(e-1)*(t-a),Pp=r=>{const e=ba(r);if(e.length<=1)return r;const a=[...r];return e.forEach((t,o)=>{a[t.index]={...t.stop,at:ar(Math.round(Ip(o,e.length)),nr.STOP_MIN,nr.STOP_MAX)}}),a},Rp=(r,e,a)=>{const t=Zr(Br(r.color)),o=Zr(Br(e.color));if(!t||!o)return Br(r.color);const n=e.at-r.at,c=n===0?0:ar((a-r.at)/n,0,1),d={r:t.r+(o.r-t.r)*c,g:t.g+(o.g-t.g)*c,b:t.b+(o.b-t.b)*c,a:t.a+(o.a-t.a)*c};return Ge(d,d.a<1)},iy=r=>{const e=ba(r).map(o=>o.stop);if(e.length<2)return null;let a=0,t=0;for(let o=0;o<e.length-1;o+=1){const n=e[o+1].at-e[o].at;n>a&&(a=n,t=o)}return[e[t],e[t+1]]},jp=(r,e,a="#000000")=>{const t=ba(r);if(e.kind==="between"){const o=t[e.sortedIndex-1],n=t[e.sortedIndex];if(!o||!n)return{color:Br(a),at:Ol(r)};const c=En(o.stop.at,n.stop.at),d=Rp(o.stop,n.stop,c);return{color:Br(d),at:c}}return{color:Br(a),at:Ol(r)}},Lp=(r,e)=>{if(r.length===0)return[{color:e??Br(zn()),at:En(nr.STOP_MIN,nr.STOP_MAX)}];const a=ba(r),t=a[a.length-1],o=a[a.length-2],n=nr.STOP_MAX,c=o?.stop.at??nr.STOP_MIN,d=En(c,n),u={color:e??Br(t.stop.color),at:n};return r.map((h,p)=>p===t.index?{...h,at:d}:h).concat(u)},Ol=r=>{const e=(nr.STOP_MIN+nr.STOP_MAX)/2;if(r.length===0)return e;if(r.length===1)return ar(r[0].at>=e?nr.STOP_MIN:nr.STOP_MAX,nr.STOP_MIN,nr.STOP_MAX);const a=iy(r);return a?En(a[0].at,a[1].at):e},Ya=r=>{const{stops:e=[],angle:a=nr.ANGLE}=r,t=ba(e);if(t.length===0)return"transparent";if(t.length===1)return Br(t[0].stop.color);const o=t.map(({stop:n})=>`${Br(n.color)} ${n.at}%`);return`linear-gradient(${a}deg, ${o.join(", ")})`},Mp=(r,e)=>r?.name??e??void 0,bi=(r,e="")=>{const a=r.stops??[];if(a.length===0)return Br(e);const t=ba(a);if(t.length===1)return Br(t[0].stop.color);let o=0,n=0,c=0,d=0,u=0;for(let p=0;p<t.length;p+=1){const v=t[p-1]?.stop.at??t[p].stop.at,g=t[p].stop.at,f=t[p+1]?.stop.at??g,b=(g-v)/2+(f-g)/2,y=Zr(Br(t[p].stop.color));y&&(o+=y.r*b,n+=y.g*b,c+=y.b*b,d+=y.a*b,u+=b)}if(u===0)return Br(e);const h={r:Math.round(o/u),g:Math.round(n/u),b:Math.round(c/u),a:d/u};return Ge(h,h.a<1)},xo=(r,e)=>{const a={stops:r.stops??[],angle:r.angle??nr.ANGLE,...r.name!=null?{name:r.name}:{}},t=bi(a,e?.fallbackColor),o=yo(t,{contrastBias:e?.contrastBias,bgColor:e?.contrastBgColor});return{...a,value:Ya(a),baseColor:t,contrastColor:o}},Dp=(r,e)=>{const a=r.stops?.length?r.stops:_p(e),t=r.angle??nr.ANGLE,o={stops:a,angle:t,...r.name!=null?{name:r.name}:{}},n=e?Br(e):void 0,c=bi(o,n),d=yo(c);return{...o,value:Ya(o),baseColor:c,contrastColor:d}},Op=r=>{const{stops:e=[],angle:a=nr.ANGLE}=r;return e?.length?e.length===1?String(e[0].color):Ya({stops:e,angle:a}):"transparent"},Np=(r,e,a,t,o,n,c,d,u=!0)=>{if(n<=0)return ar(c,c,d);const h=o*Math.PI/180,p=Math.cos(h),v=Math.sin(h),f=(((r-a)*p+(e-t)*v)/n+1)/2*100,b=u?Math.round(f):f;return ar(b,c,d)},Nl=(r,e,a,t)=>Math.atan2(e-t,r-a)*180/Math.PI,Bp=(r,e,a,t=nr.ANGLE_MIN,o=nr.ANGLE_MAX)=>{let n=a-e;for(;n>180;)n-=360;for(;n<-180;)n+=360;const c=((r+n)%360+360)%360;return ar(c,t,o)},Fp=(r,e=nr.ANGLE_SNAP_STEP,a=nr.ANGLE_MIN,t=nr.ANGLE_MAX)=>ar(Math.round(r/e)*e,a,t),sy=(r,e,a=nr.ANGLE_SNAP_STEP,t=nr.ANGLE_MIN,o=nr.ANGLE_MAX)=>{const n=r%a===0;return e>0?ar(n?r+a:Math.ceil(r/a)*a,t,o):ar(n?r-a:Math.floor(r/a)*a,t,o)},ly=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]),Hp=(r,e,a=1)=>{if(!ly.has(r))return null;const o=(e-90)*Math.PI/180,n=Math.cos(o),c=Math.sin(o),d={ArrowRight:[1,0],ArrowLeft:[-1,0],ArrowDown:[0,1],ArrowUp:[0,-1]},[u,h]=d[r],p=u*n+h*c;return p>0?a:p<0||r==="ArrowLeft"||r==="ArrowUp"?-a:a},Vp=(r,e)=>{const a=r.colors??[];return te(e)?a.some(n=>te(n)&&ut(n,e))?r:{...r,colors:[...a,e]}:a.some(o=>!te(o)&&$o(o,e))?r:{...r,colors:[...a,e]}},Up=(r,e)=>{const a=r.colors??[],t=te(e)?a.filter(o=>!(te(o)&&ut(o,e))):a.filter(o=>te(o)||!$o(o,e));return t.length===a.length?r:{...r,colors:t}},Gp=(r,e,a)=>r.map(t=>t.id===e.id?Vp(t,a):t),Kp=(r,e,a)=>r.map(t=>t.id===e.id?Up(t,a):t),dy=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.addColor: pass (palettes, palette, color) when the first argument is an array.");return Gp(r,e,a)}return Vp(r,e)},uy=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.removeColor: pass (palettes, palette, color) when the first argument is an array.");return Kp(r,e,a)}return Up(r,e)},hy=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?Gp(r,t,a):r},py=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?Kp(r,t,a):r},z2=!1,gy="fa-regular fa-ellipsis-h",vy="fa-regular fa-angle-down fa-sm",Wp="data-rollup-item",Xp="data-rollup-trigger",fy="fa-solid fa-triangle-exclamation",my=28,qp=(r,e,a,t,o,n)=>{let c=t+o,d=0;for(let u=0;u<n;u+=1){const h=c+a+e[u];if(h>r)break;c=h,d+=1}return d},by=(r,e,a,t)=>{const{items:o,triggerMore:n,chevron:c,gap:d,padX:u}=e,h=o.length,p=t==null?h:Math.min(t,h);if(p===h&&u+o.reduce((b,y)=>b+y,0)+d*Math.max(0,h-1)<=r)return h;const v=qp(r,o,d,u,n,p);if(a>=0&&a<h&&a>=v){const f=o[a]+c;return qp(r,o,d,u,Math.max(n,f),p)}return v},$y=({enabled:r,itemCount:e,signature:a,selectedIndex:t=-1,maxVisible:o})=>{const n=(0,l.useRef)(null),c=(0,l.useRef)(null),d=(0,l.useRef)(null),u=(0,l.useRef)(t);u.current=t;const[h,p]=(0,l.useState)(0),v=(0,l.useRef)(null);r&&v.current!==a&&(v.current=a,c.current=null);const g=r&&c.current==null,[f,b]=(0,l.useState)(e),y=(0,l.useCallback)(()=>{const k=c.current,w=n.current;if(!k||!w)return;const E=w.parentElement,_=E?E.clientWidth:w.clientWidth,T=by(_,k,u.current,o);b(C=>C===T?C:T)},[o]);da(()=>{if(!r){b(e);return}if(c.current!=null)return;const k=n.current;if(!k)return;const w=getComputedStyle(k),E=parseFloat(w.columnGap)||0,_=(parseFloat(w.paddingLeft)||0)+(parseFloat(w.paddingRight)||0),T=Array.from(k.querySelectorAll(`:scope > [${Wp}]`)).map(D=>D.getBoundingClientRect().width),C=k.querySelector(`:scope > [${Xp}]`),S=C?C.getBoundingClientRect().width:0;let I=my;if(C){const D=C.querySelectorAll("[arc-button-icon]"),N=D[D.length-1],H=C.querySelector("[arc-button-content]"),Z=H&&parseFloat(getComputedStyle(H).columnGap)||0;N&&(I=N.getBoundingClientRect().width+Z)}c.current={items:T,triggerMore:S,chevron:I,gap:E,padX:_},y(),p(D=>D+1)},[r,e,a,h,y]),da(()=>{if(!r)return;const w=n.current?.parentElement;if(!w||typeof ResizeObserver>"u")return;const E=new ResizeObserver(()=>y());return E.observe(w),d.current=E,()=>{E.disconnect(),d.current=null}},[r,a,y]);const x=(0,l.useCallback)(k=>{n.current=k},[]),A=r?Math.min(f,e):e,$=r&&A<e;return{barRef:x,visibleCount:g?e:A,hasOverflow:g?!0:$,isMeasuring:g}},Yp=(r,e)=>e??(r==="aria-selected"?"true":"page"),yy={[Wp]:""},xy={[Xp]:""},wy=r=>{r?.preventDefault?.(),r?.stopPropagation?.()},Zp=(r,e,a,{showIcons:t,showLabels:o,missingIcon:n,isVertical:c})=>{const d=typeof a=="string"?void 0:a,u=c?o?"top-start":"right-center":"top-center",h=d?.anchorAt??u,p=typeof a=="string"?{text:a,anchorAt:h}:{...a,anchorAt:h},v=a==null?void 0:p,g=!r;if(o)return{icon:t?r:void 0,text:e,tooltip:v};if(!t)return{icon:void 0,text:void 0,tooltip:v};const f=e==null?"":String(e);return{icon:r??n,iconStatus:g?"warning":void 0,text:void 0,tooltip:v??{text:`${r?"":"(Missing icon!) "}${f}`,anchorAt:h},ariaLabel:f||void 0}},ky=(r,e)=>r.href??`${r.text}-${e}`,Bl=({firstSlot:r,lastSlot:e,isVertical:a})=>r||e?(0,i.jsxs)("span",{"arc-button-bar-item":"slot",children:[r,!r&&!!e&&a&&(0,i.jsx)("span",{"arc-slot-spacer":""}),e]}):null,Ay=(r,{selectedAttr:e,selectedValue:a,isVertical:t,isBarDisabled:o,showIcons:n=!0})=>{const c={...r.tag?{tag:r.tag}:{},...r.isSelected?{[e]:Yp(e,a),"is-selected":""}:{}},d=n?r.icon:void 0;return{variant:d?"icon-text":"text",text:r.text,icon:d,href:r.href,target:r.target,isDisabled:r.isDisabled||o,onClick:r.onClick,...r.firstSlot||r.lastSlot?{endSlot:(0,i.jsx)(Bl,{firstSlot:r.firstSlot,lastSlot:r.lastSlot,isVertical:t})}:{},...Object.keys(c).length?{containerProps:c}:{}}},$i=s`--arc•button•bar`,_n=s`${$i}•axis`,wo=s`${$i}•gap`,Fl=s`${$i}•width`,Hl=s`${$i}•justify`,Cy=s`
  &[arc-button-bar=horizontal] {
    ${_n}: row;

    &[is-flipped] {
      ${_n}: row-reverse;
    }

    &[data-density=comfortable] {
      --arc-button-height: var(${m}•40);
      --arc-button-padding: 0 var(${R}•12);
      ${wo}: var(${R}•6);
    }

    &[data-density=compact] {
      --arc-button-height: var(${m}•32);
      --arc-button-padding: 0 var(${R}•10);
      ${wo}: var(${R}•4);
    }
  }
`,Sy=s`
  &[arc-button-bar=vertical] {
    --arc-button-flex: 1;
    --arc-button-display: flex;
    --arc-button-bar-align-items: stretch;
    --arc-button-bar-justify-content: stretch;

    &:not([is-minimized]) {
      --arc-button-justify-content: stretch;
    }

    ${_n}: column;

    &[is-flipped] {
      ${_n}: column-reverse;
    }

    &[data-density=comfortable] {
      --arc-button-height: var(${m}•36);
      --arc-button-padding: 0 var(${R}•12);
      ${wo}: var(${R}•2);

      &[is-minimized] {
        ${Fl}: var(${m}•48);
      }
    }

    &[data-density=compact] {
      --arc-button-height: var(${m}•28);
      --arc-button-padding: 0 var(${R}•8);
      --arc-button-border-radius: var(--arc-border-radius-md);
      ${wo}: var(${R}•2);

      &[is-minimized] {
        ${Fl}: var(${m}•36);
      }
    }
  }
`,zy=s`
@layer arc-components {

  [arc-button-bar] {
    ${Cy}
    ${Sy}

    ${Hl}: flex-end;
    &[is-managed] { ${Hl}: flex-start; }

    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(${_n});
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, var(${Hl}));
    gap: var(${wo}, var(${R}•8));
    width: var(${Fl}, unset);
    padding: 0;
    margin: 0;
    list-style: none;

    &[data-rollup] {
      contain: inline-size;
      min-width: 0;
    }

    *[data-measuring] {
      contain: none;
      width: max-content;
      max-width: none;

      > * {
        flex: 0 0 auto;
      }
    }

    &:not([data-measuring]) [arc-button-bar-item] {
      max-width: 100%;
    }
  }

  [arc-button-bar-item] {
    display: flex;
    margin: 0;
    padding: 0;
  }

  [arc-button-bar-item="slot"] {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(${wo});
    padding: 0;
    margin: 0;
  }
}
`,Ey=({orientation:r,isFlipped:e,isDisabled:a,density:t,hierarchy:o,showIcons:n,showLabels:c,missingIcon:d,items:u,canRollUp:h,maxVisible:p,rollUpLabel:v,listRole:g,selectedAttr:f,selectedValue:b,elementProps:y})=>{const x=Nr(void 0,"arc-button-bar-trigger"),A=`${x}-menu`,$=r==="vertical",k=h&&!$,w=t??($?"comfortable":"compact"),E=u.findIndex(j=>j.isSelected),_={showIcons:n,showLabels:c,missingIcon:d,isVertical:$},T=(0,l.useMemo)(()=>`${u.map(X=>{const sr=typeof X.icon=="string"?X.icon:X.icon?"":"";return`${X.text}${X.href??""}${sr}${X.isDisabled?1:0}`}).join("")}|${w}|${o??""}|${E}|${n?1:0}|${c?1:0}`,[u,w,o,E,n,c]),{barRef:C,visibleCount:S,hasOverflow:I,isMeasuring:D}=$y({enabled:k,itemCount:u.length,signature:T,selectedIndex:E,maxVisible:p}),N=D?u:u.slice(0,S),H=D?[]:u.slice(S),Z=k&&(D||I),L=E>=0?u[E]:void 0,M=!D&&L!=null&&H.includes(L),P=Zp(M?L.icon:gy,M?L.text:v,M?L.tooltip:void 0,_),F=M?L.firstSlot:void 0,or=M?L.lastSlot:void 0,vr=Yp(f,b);return(0,i.jsxs)("ul",{...y,ref:C,"arc-button-bar":r,role:g,"data-density":w,"data-measuring":D?"":void 0,"data-rollup":k?"":void 0,"is-flipped":e?"":void 0,"is-managed":"",children:[N.map((j,X)=>{const{isSelected:sr,isDisabled:mr,tag:rr,icon:ur,text:yr,tooltip:lr,firstSlot:wr,lastSlot:V,isHidden:K,onClick:er,...O}=j,cr=Zp(ur,yr,lr,_),br=a||mr;return(0,l.createElement)("li",{...yy,key:ky(j,X),"arc-button-bar-item":sr?"selected":""},(0,i.jsxs)(Mr,{...O,tag:rr,layout:$?"fill":"hug",size:"inherit",variant:"neutral",hierarchy:"tertiary",shape:"square",tooltip:cr.tooltip,"aria-label":cr.ariaLabel,"is-selected":sr?"":void 0,isDisabled:br||void 0,onClick:br?wy:er,...sr?{[f]:vr}:{},children:[(0,i.jsx)(le,{icon:$?xu(cr.icon):cr.icon,"arc-icon-status":cr.iconStatus,text:cr.text,overflow:"truncate",gapSize:"md",iconSize:w==="comfortable"?"md":void 0}),c&&(0,i.jsx)(Bl,{firstSlot:wr,lastSlot:V,isVertical:$})]}))}),Z?(0,i.jsxs)("li",{...xy,"arc-button-bar-item":M?"selected":"",children:[(0,i.jsxs)(Mr,{id:x,"arc-button-bar-rollup":"trigger","is-selected":M?"":void 0,layout:$?"fill":"hug",shape:"square",size:"inherit",variant:"neutral",hierarchy:"tertiary",isDisabled:a||void 0,tooltip:P.tooltip,"aria-label":P.ariaLabel,iconEnd:vy,popoverTarget:A,popoverTargetAction:"toggle","aria-haspopup":"menu","aria-controls":A,children:[(0,i.jsx)(le,{icon:P.icon,text:P.text,"arc-icon-status":P.iconStatus,overflow:"truncate",gapSize:"md"}),c&&(0,i.jsx)(Bl,{firstSlot:F,lastSlot:or,isVertical:$})]}),H.length>0&&(0,i.jsx)(lo,{id:A,alternateAnchorId:x,"arc-button-bar-rollup":"menu",anchorAt:"bottom-end",hidePopoverButton:!0,items:H.map(j=>Ay(j,{selectedAttr:f,selectedValue:b,isVertical:$,isBarDisabled:a,showIcons:n}))})]}):null]})},Pt=({children:r,...e})=>{const{tag:a,orientation:t="horizontal",isFlipped:o=!1,isDisabled:n=!1,items:c,canRollUp:d=!1,maxVisible:u,rollUpLabel:h="More",density:p,hierarchy:v,showIcons:g=!0,showLabels:f=!0,missingIcon:b=fy,listRole:y="list",selectedAttr:x="aria-current",selectedValue:A,...$}=e;if(c){const w=c.filter(E=>!E.isHidden);return(0,i.jsx)(Ey,{orientation:t,isFlipped:o,isDisabled:n,density:p,hierarchy:v,showIcons:g,showLabels:f,missingIcon:b,items:w,canRollUp:d,maxVisible:u,rollUpLabel:h,listRole:y,selectedAttr:x,selectedValue:A,elementProps:$})}const k=a??"menu";return(0,i.jsx)(k,{...$,"arc-button-bar":t,"is-flipped":o?"":void 0,role:$.role??"group",children:r})};Cr("ArcButtonBar",zy);function Tn(r){const e=(0,l.useRef)(r);e.current=r;const a=(0,l.useCallback)((...t)=>e.current?.(...t),[]);return r?a:void 0}const _y=({activeColor:r})=>{const[e,a]=(0,l.useState)(r),t=r!=null,o=t?r:e;(0,l.useEffect)(()=>{a(r)},[r]);const n=(0,l.useCallback)(c=>{t||a(c)},[t]);return{isSelectionControlled:t,activeSelectedColor:o,setUncontrolledSelectedColor:a,selectColor:n}},Ty=({palette:r,isSelectionControlled:e,onAddColor:a,emitColorChange:t,setLocalColors:o,setUncontrolledSelectedColor:n,initialColorValue:c,shouldOpenPopover:d=!0,notifyAddColorToggle:u,showPopover:h,hidePopover:p})=>{const v=(0,l.useCallback)(()=>c??zn(),[c]),[g,f]=(0,l.useState)(null),[b,y]=(0,l.useState)(v),x=(0,l.useCallback)(()=>{f(null),y(v())},[v]),A=(0,l.useCallback)(S=>{o(I=>te(S)?I.some(H=>te(H)&&ut(H,S))?I:[...I,S]:I.some(N=>!te(N)&&$o(N,S))?I:[...I,S])},[o]),$=(0,l.useCallback)((S,I)=>{a?.(r,S,I),te(S)||(t(S),e||n(S))},[t,e,a,r,n]),k=(0,l.useCallback)((S,I)=>{A(S),$(S,I??void 0)},[A,$]),w=(0,l.useCallback)(()=>{if(g!=null)return;const S=v();let I=-1;o(D=>(I=D.length,[...D,S])),f(I),y(S),u?.(!0),d&&h()},[g,v,u,o,d,h]),E=(0,l.useCallback)(S=>{g!=null&&y(S)},[g]),_=(0,l.useCallback)(S=>{S?.preventDefault(),S?.stopPropagation(),g!=null&&o(I=>I.filter((D,N)=>N!==g)),x(),u?.(!1),d&&p()},[g,p,u,x,o,d]),T=(0,l.useCallback)((S,I)=>{const N=(L=>typeof L?.preventDefault=="function")(S)?S:I;if(N?.preventDefault(),N?.stopPropagation(),g==null||b==null){u?.(!1),d&&p();return}const Z=(r.colors??[]).map((L,M)=>M===g?b:L);o(Z),$(b,N??void 0),x(),u?.(!1),d&&p()},[g,b,$,p,u,r.colors,x,o,d]),C=(0,l.useCallback)((S,I)=>{I?.preventDefault(),I?.stopPropagation(),k(S,I??void 0)},[k]);return{draftColorIndex:g,draftColorValue:b,startAddDraft:w,updateDraftColor:E,cancelDraftColor:_,saveDraftColor:T,saveCurrentColor:C}};let Jp=!1;const In=new Set,Vl=r=>{Jp=r,In.forEach(e=>{e.setState(r),r||e.onRelease?.()})},Qp=r=>{(r.metaKey||r.key==="Meta")&&Vl(!0)},r0=r=>{Vl(!!r.metaKey)},e0=()=>{Vl(!1)},Iy=r=>{const[e,a]=(0,l.useState)(Jp),t=(0,l.useRef)(r);return t.current=r,(0,l.useEffect)(()=>{const o={setState:a,onRelease:()=>t.current?.()};return In.add(o),In.size===1&&(window.addEventListener("keydown",Qp),window.addEventListener("keyup",r0),window.addEventListener("blur",e0)),a(e),()=>{In.delete(o),In.size===0&&(window.removeEventListener("keydown",Qp),window.removeEventListener("keyup",r0),window.removeEventListener("blur",e0))}},[]),e},Ne=s`--arc-popover`,ko=s`--arc•color•picker`,oe=s`${ko}•thumb`,Rt=s`${ko}•tools`,Ra=s`${ko}•dropper`,a0=s`--js•hex`,Ul=s`
  background-image:
    linear-gradient(
      to right,
      transparent,
      var(${a0}, transparent)
    ),
    conic-gradient(
      var(--arc-color-alpha-subtle) 0 25%,
      var(--arc-color-alpha-muted) 0 50%,
      var(--arc-color-alpha-subtle) 0 75%,
      var(--arc-color-alpha-muted) 0 100%
    );

  background-size: 100% 100%, 1em 1em;
  background-position: 50% 50%, 50% 50%;
`,Py=s`
  background-image:
    linear-gradient(
      to right,
      #f00 0%,
      #ff0 16.66%,
      #0f0 33.33%,
      #0ff 50%,
      #00f 66.66%,
      #f0f 83.33%,
      #f00 100%
    );
`,Gl=s`3.75em`,t0={POPOVER:s`
    /* Inter-Component Communication: ArcPopover */
    ${Ne}-width: 14em; /* 224px */
    ${Ne}-min-width: 10.5em; /* 140px */
    ${Ne}-max-width: 15.75em; /* 252px */
    ${Ne}-line-height: normal; /* @note – allows elements to resolve to design-spec heights */
    ${Ne}-outline-size: 0px; /* @note – default outline-size causes divider lines to not extend to the edges of the popover shell. */
    ${Ne}-padding: 0;
    ${Ne}-overflow: hidden auto;

    ${Ne}-header-padding: 0.75em 1em;
    ${Ne}-header-background: var(--arc-color-bg-mono);
    ${Ne}-header-align-items: center;

    ${Ne}-body-padding: 0;

    ${Ne}-footer-padding: 1em;
    ${Ne}-footer-background: var(--arc-color-bg-mono);

    /* Inter-Component Communication: inner ArcTooltips • UX enhancement: transition speed-up */
    [arc-popover-content] {
      ${Ne}-transition-duration: 30ms;
    }

    &:has([arc-color-picker=simple]) {
      ${Ne}-width: 12.25em; /* 196px */
    }

    /* Inter-Component Communication: ArcButtonBar via ArcPopoverFooter */
    [arc-popover-footer]:has([arc-button-bar]) {
      --arc-button-bar-justify-content: stretch;
      --arc-button-flex: 1;
    }
  `,PICKER:s`
    ${oe}•shadow: 0 0 0 max(4px, 0.25em) var(--arc-color-alpha-white-95), 0 0 max(6px, 0.375em) max(3px, 0.1875em) var(--arc-color-alpha-black-30);
    ${oe}•size: max(10px, 0.625em);
    ${oe}•transition: 200ms ease-out;

    ${ko}•padding: 1em;
    &[is-inline] { ${ko}•padding: 0; }

    &[arc-color-picker=simple] {
      ${Ra}•align•self: end;
      ${Rt}•gap: 1em 0.5em;

      [arc-color-slider] {
        grid-column: 1 / -1;
      }
    }

    [arc-color-input=hex] {
      --arc-input-prefix-opacity: var(--arc-alpha-40);
      --arc-input-suffix-opacity: var(--arc-alpha-100);
    }

    /* This font-size is intended for various scaling calculations. */
    font-size: initial;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;

    -webkit-user-select: none;
    user-select: none;

    /* Inter-Component Communication: ArcInput & ArcLabel • font-size reset for input labels */
    --arc-input-padding-inline: max(6px, 0.375em);
  `},Ry=s`

  [arc-color-field] {
    display: grid;
    gap: 0.5em;
  }

  [arc-color-surface=field] {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;

    -webkit-user-select: none;
    user-select: none;
    touch-action: none;
    cursor: pointer;

    border-radius: var(--arc-border-radius-md);
    background: var(--arc-color-bg-mono);

    &:focus:focus-visible {
      outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 2;
    }
  }

  [arc-color-field-canvas] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: inherit;
    pointer-events: none;
  }

  [arc-color-field-slice] {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    border-radius: var(--arc-border-radius-pill);
    transition: left var(${oe}•transition), top var(${oe}•transition);
  }

  [arc-color-field][sr-focus] [has-focus] {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: 0.25em;
  }

  /* Saturation axis at current Value */
  [arc-color-field-slice=saturation] {
    inset: calc(var(--js•v) * 100%) 0 auto 0;
    height: var(--arc-border-width-md);
  }

  /* Value axis at current Saturation */
  [arc-color-field-slice=value] {
    inset: 0 auto 0 calc(var(--js•s) * 100%);
    width: var(--arc-border-width-md);
  }

  [arc-color-field-thumb] {
    position: absolute;
    left: calc(var(--js•s) * 100%);
    top: calc(var(--js•v) * 100%);
    transform: translate(-50%, -50%);
    width: var(${oe}•size);
    height: var(${oe}•size);
    border: 0;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${oe}•shadow);
    background: var(--js•rgb);
    z-index: 4;
    transition:
      left var(${oe}•transition),
      top var(${oe}•transition);
  }

  @media (prefers-reduced-motion: reduce) {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  [arc-color-field][is-interacting] {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  /* Visually hidden but usable (so SR users can access them) */
  [arc-color-field-sr] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  [arc-color-field-sr-slider] {
    display: block;
  }

`,jy=s`

  [arc-color-slider] {
    &:has([arc-slider-surface=hue]) { ${oe}•bg: var(--js•hue); }
    &:has([arc-slider-surface=alpha]) { ${oe}•bg: transparent; }

    /* Inter-Component Communication: ArcSlider --------------------• */
    --arc-slider-input-height: auto;
    --arc-slider-progress-display: none;
    --arc-slider-track-background: transparent;
    --arc-slider-progress-background: transparent;
    --arc-slider-track-height: 0.875em;
    --arc-slider-thumb-size: var(${oe}•size);
    --arc-slider-thumb-size-hover: var(${oe}•size);
    --arc-slider-thumb-shadow: var(${oe}•shadow);
    --arc-slider-thumb-background: var(${oe}•bg);
    --arc-slider-thumb-outline-offset: 0.3125em;

    display: grid;
    gap: 0.375em;

    [arc-slider-surface=hue] { ${Py} }
    [arc-slider-surface=alpha] { ${Ul} }
  }

`,Ly=s`

  [arc-color-inputs] {
    display: grid;
    gap: 0.5em;
    grid-template-columns: 1fr ${Gl};
    align-items: end;

    &:not(:has([arc-color-input=hex])) {
      grid-template-columns: ${Gl} 1fr;
    }

    &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha])) {
      grid-template-columns: 1fr;
    }
  }

  [arc-color-input=hex] {
    --arc-icon-color: var(--arc-color-fg-critical-mid);
    --arc-input-action-display: contents;
    --arc-button-min-width: none;
    --arc-button-max-width: 2.25em;
  }

  :is([arc-color-input=stop], [arc-color-input=alpha]) {
    --arc-input-text-align: end;
  }

`,My=s`
  [arc-gradient-stops] {
    display: grid;
    gap: 0.125em;
  }

  [arc-gradient-stop-list] {
    display: grid;
    gap: 0.125em;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  [arc-gradient-field-wrapper] {
    position: relative;
    &:has([is-rotating]) {
      --angle-output-opacity: 1;
    }
  }

  [arc-gradient-field-angle-output] {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: var(--angle-output-opacity, 0.4);
    transition: opacity 200ms ease-out;
  }

  [arc-gradient-field] {
    position: relative;
    width: 100%;
    min-height: 2.5em;
    aspect-ratio: 1 / 1;
    border-radius: var(--arc-border-radius-circle);
    touch-action: none;
    user-select: none;
    cursor: grab;

    &[is-rotating] {
      cursor: grabbing;
    }

    /* Unset: empty placeholder field — dashed ring, no grab affordance (no stops to drag/rotate). */
    &[is-unset] {
      cursor: default;

      &::before {
        ${a0}: transparent;
        ${Ul}

        border-style: dashed;
      }
    }

    &::before {
      box-sizing: border-box;
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--arc-border-radius-circle);
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 1;
    }
  }

  /* "Add Gradient" affordance shown in place of the stops list while unset. */
  [arc-gradient-add] {
    margin-block: 1em 0;
  }

  [arc-gradient-stop-thumb] {
    position: absolute;
    left: 0;
    top: 50%;
    margin-block-start: calc(var(${oe}•size) / -2);
    margin-inline-start: calc(var(${oe}•size) / -2);
    width: var(${oe}•size);
    height: var(${oe}•size);
    border-radius: var(--arc-border-radius-circle);
    background: var(${oe}•bg);
    box-shadow: var(${oe}•shadow);
    cursor: pointer;
    z-index: 1;
    touch-action: none;

    &:focus-visible {
      outline: 0.125em solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      content: '';
      position: absolute;
      inset: -0.375em;
      border-radius: var(--arc-border-radius-circle);
    }
  }

  [arc-gradient-stop-row] {
    position: relative;
    display: grid;
    grid-template-columns: auto ${Gl} 1fr auto;
    gap: 0.5em;
    align-items: center;
    padding: 0.25em;
    margin-inline: -0.25em;
    border-radius: var(--arc-border-radius-md);

    &[is-editing-color] {
      background: var(--arc-color-bg-selected-default);
    }
  }

  [arc-gradient-stop-insert] {
    --arc-button-color: var(--arc-color-alpha-stark);
    --arc-button-width: 100%;
    --arc-button-z-index: 1;

    position: absolute;
    inset: -0.375em 0em auto 0em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--arc-border-radius-pill);
    height: 0.625em;
    opacity: var(--arc-alpha-0);
    background: transparent;
    transition: opacity 200ms ease-out, background 200ms ease-out;

    [arc-icon] {
      background: var(--arc-color-bg-mono);
      padding-inline: 0.25em;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 50% 0 auto 0;
      translate: 0 -50%;
      height: 0.0625em;
      background: transparent;
      pointer-events: none;
    }

    &:where(:has(:hover), :focus-within) {
      opacity: var(--arc-alpha-80);

      &::before {
        background: var(--arc-color-bg-neutral-subtle);
      }
    }
  }

  *:not([arc-gradient-angle-slider]) + [arc-gradient-presets] {
    margin-block-start: 0.75em;
  }

  [arc-gradient-presets] [arc-color-palette-set] {
    --arc-swatch-width: 100%;
    --arc-swatch-border-radius: var(--arc-border-radius-md);

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5em;
    min-inline-size: 0;
    max-inline-size: none;
    padding: 0;
    margin: 0;
    border: 0;
  }
`,Dy=s`

  &[arc-color-picker=simple]:has([arc-color-palettes]) [arc-color-tools] {
    padding-top: 0;
  }

  :is([arc-color-tools=simple], [arc-color-tools=solid]) {
    display: grid;
    gap: var(${Rt}•gap, 0.5em);
    grid-template-columns: var(${Rt}•columns, auto 1fr);
  }

  [arc-color-tools=gradient] {
    display: grid;
    gap: 0;
    grid-template-columns: var(${Rt}•columns, 1fr);
  }

  [arc-color-tools=simple] {
    &:has([arc-color-input=hex]):not(:has([arc-color-eye-dropper])) {
      ${Rt}•columns: 1fr 2em;
    }
  }

  :is([arc-color-field], [arc-color-inputs]) {
    grid-column: 1 / -1;
  }

  [arc-color-eye-dropper] {
    align-self: var(${Ra}•align•self, center);
    justify-self: var(${Ra}•justify•self, center);
  }

  [arc-color-sliders] {
    grid-column: 1 / -1;

    display: grid;
    gap: 0.25em;
    grid-template-columns: auto;
    align-self: center;
  }

  [arc-color-eye-dropper] + [arc-color-sliders] {
    grid-column: 2;
  }

  /* Body placement of the "No color" toggle (unsetColorPlacement="tools"): a 3rd column to the right
     of the sliders, mirroring the eye dropper on the left. Header placement is unaffected (the
     toggle lives outside [arc-color-tools] there). */
  [arc-color-tools=solid]:has([arc-color-unset]) {
    ${Rt}•columns: auto 1fr auto;
  }

  [arc-color-tools=solid] [arc-color-unset] {
    grid-column: 3;
    align-self: center;
    justify-self: center;
  }

  /* Finding a good place for the eye dropper in some cases */
  &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha], [arc-color-sliders])),
  &:has([arc-color-input=alpha]):not(:has([arc-color-input=hex], [arc-color-sliders])) {
    ${Ra}•align•self: end;
    ${Ra}•justify•self: end;

    &:has([arc-color-eye-dropper]) [arc-color-inputs] { display: contents; }

    &:not(:has([arc-color-field])) { ${Ra}•row: 1; }

    &:not(:has([arc-color-input=hex])) {
      ${Ra}•justify•self: start;
      ${Rt}•columns: 1fr auto;
      ${Ra}•column: 1;
    }

    [arc-color-eye-dropper] {
      grid-column:  var(${Ra}•column, 2);
      grid-row: var(${Ra}•row, 2);
    }

    [arc-color-sliders] { grid-column: 1 / -1; }
  }

  ${Ry}
  ${jy}
  ${Ly}
  ${My}

`,Oy=s`
@layer arc-components {

  [arc-color-picker-wrapper] {
    ${t0.POPOVER}
  }

  [arc-color-picker] {
    ${t0.PICKER}

    /* Empty / "no color": the field + sliders stay rendered and interactive (touching them is the
       exit path), but their thumbs are hidden so nothing reads as a committed selection. The
       visible slider thumb is the native range pseudo-element (the [arc-slider-thumb] overlay is
       only a focus-ring anchor, so it stays — keeping keyboard focus visible). */
    &[is-unset] {
      [arc-color-field-thumb],
      [arc-color-field-slice] {
        opacity: 0;
      }

      [arc-color-slider] [arc-slider-input] {
        &::-webkit-slider-thumb { opacity: 0; }
        &::-moz-range-thumb { opacity: 0; }
      }
    }

    [arc-color-picker-section=control] {
      padding: 1em 1em 0 1em;
    }

    &[is-inline] [arc-color-picker-section=control] {
      padding: 0 0 1em 0;
    }

    [arc-color-picker-section]:not([arc-color-picker-section=control]) {
      padding: var(${ko}•padding);

      &:has(+[arc-color-picker-section]) { padding-bottom: 1em; }
      +[arc-color-picker-section] { padding-top: 1em; }

      &[has-divider=top] { border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
      &[has-divider=bottom] { border-bottom: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
    }

    ${Dy}

    [arc-color-palettes] {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    [arc-color-section-header] {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5em;
      padding: 0;
      height: 2.5em;
    }

    [arc-gradient-angle-slider] {
      position: sticky;
      bottom: 0;
      background: var(--arc-color-bg-mono);
      border-block-start: 0.0625em solid var(--arc-color-border-mid);
      padding-inline: 1em;
      margin-inline: -1em;
      margin-block-start: 0.75em;
      padding-block-end: 0.75em;
    }


    [arc-color-picker-section=footer] {
      position: sticky;
      bottom: 0;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      background: var(--arc-color-bg-mono);
      z-index: 2;
    }

    [arc-color-picker-button-bar] * {
      flex: 1;
    }
  }

  :where([arc-color-picker], [arc-color-picker-wrapper]) {
    [arc-color-unset][is-active] {
      --arc-button-background: var(--arc-color-bg-selected-subtle);
      --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-selected);
      --arc-button-color: var(--arc-color-fg-brand-heavy);
    }
  }

}
`,Ie=s`--arc•color•chip`,Ny=s`
@layer arc-components {

  [arc-color-chip=swatch] {
    ${Ie}•radius: var(--arc-border-radius-circle);
    ${Ie}•width: var(${m}•24);
    ${Ie}•height: var(${m}•24);
    ${Ie}•border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  [arc-color-chip=gradient-stop] {
    ${Ie}•radius: var(--arc-border-radius-md);
    ${Ie}•width: var(${m}•24);
    ${Ie}•height: var(${m}•24);
    ${Ie}•border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  [arc-color-chip=gradient] {
    ${Ie}•radius: var(--arc-border-radius-circle);
    ${Ie}•width: var(${m}•24);
    ${Ie}•height: var(${m}•24);
    ${Ie}•border: none;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--arc-swatch-border-radius, var(${Ie}•radius));
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      opacity: 1;
      pointer-events: none;
      z-index: 1;
    }

    &[is-selected]::before {
      opacity: 0;
    }
  }

  [arc-color-chip] {
    --arc-button-position: relative;
    --arc-button-background: var(--js•gradient, var(--js•color));
    --arc-button-color: var(--js•fg, transparent);
    --arc-button-width: var(--arc-swatch-width, var(${Ie}•width));
    --arc-button-height: var(--arc-swatch-height, var(${Ie}•height));
    --arc-button-border-radius: var(--arc-swatch-border-radius, var(${Ie}•radius));
    --arc-button-border: var(${Ie}•border);
    --arc-button-outline-offset: var(--arc-border-width-sm);
    --arc-icon-size: var(${m}•10);

    &[is-transparent] {
      --arc-button-background: unset;
      ${Ul}
    }

    &[is-translucent] {
      --arc-button-background:
        var(--js•color)
        linear-gradient(
          to right,
          var(--js•hex),
          var(--js•hex) 50%,
          transparent 50%,
          transparent
        ) border-box;

      &::after {
        content: '';
        position: absolute;
        inset: 0 auto 0 50%;
        translate: -100% 0;
        width: var(--arc-border-width-sm);
        background: var(--arc-color-border-mid);
        pointer-events: none;
        z-index: 1;
      }
    }

    &:is(:hover, [is-selected]) {
      --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-heavy);
      --arc-button-box-shadow: 0 0 0 var(--arc-border-width-md) var(--arc-color-fg-on-mono-inverse) inset;
    }

    &[is-draft] {
      --arc-button-outline: var(--arc-border-width-md) dotted color-mix(in srgb, transparent 35%, var(--arc-color-border-focus) 65%);
    }

    &[is-control] {
      --arc-button-background: var(--arc-color-alpha-muted);
      --arc-button-color: inherit;
    }
  }

}
`,o0=(0,l.memo)(({color:r,gradient:e,name:a,kind:t,isDraft:o,isSelected:n,contrastBias:c,contrastBgColor:d,canRemoveColor:u,icon:h,text:p,tooltip:v,labels:g,onClick:f,style:b,popoverTargetAction:y,...x})=>{const A=(0,l.useMemo)(()=>li(g),[g]),{cssColor:$,isTranslucent:k,isTransparent:w,opaqueHex:E}=(0,l.useMemo)(()=>kp(r??""),[r]),_=e?Mp(e,a):mo(r??"",a),T=p??_??(e?A.gradient:$),C=$p($)?$.toUpperCase():$,S=v??_??(e?A.gradient:C),I=(0,l.useMemo)(()=>e?bi(e,$):$,[e,$]),D=(0,l.useRef)(null),[N,H]=(0,l.useState)(null),Z=!e&&!w&&$!==""&&$!=="transparent"&&!Zr($),L=(0,l.useCallback)(()=>{const Y=D.current;H(Z&&Y&&typeof window<"u"?zp(Y):null)},[Z]);(0,l.useEffect)(()=>{L()},[L]);const M=e?I:N??$,P=(0,l.useMemo)(()=>yo(M,{contrastBias:c,bgColor:d}),[M,c,d]),[F,or]=(0,l.useState)(!1),[vr,j]=(0,l.useState)(!1),[X,sr]=(0,l.useState)(!1),[mr,rr]=(0,l.useState)(!1),ur=Iy(()=>j(!1)),lr=(t==="swatch"||t==="gradient")&&!!u&&(X&&ur||(ur||vr)&&F),wr=lr||mr,V=wr?"fa-regular fa-xmark":h??"fa-solid fa-check",K=t==="gradient"?A.removeGradient:A.removeColor,er=wr?K:S;(0,l.useEffect)(()=>{lr&&rr(!0)},[lr]),(0,l.useEffect)(()=>{!lr&&n&&!o&&rr(!1)},[o,lr,n]);const O=(0,l.useCallback)(Y=>{const kr=lr||Y.metaKey?"remove":"select",ir={...Pa($,{format:"auto",fallbackHex:$,contrastBias:c,contrastBgColor:d}),contrastColor:P,name:_};if(t==="gradient"&&e!=null){f?.({kind:t,colorData:ir,gradientData:xo(e,{contrastBias:c,contrastBgColor:d}),action:kr,shouldClosePicker:!1},Y);return}f?.({kind:t,colorData:ir,action:kr,shouldClosePicker:!1},Y)},[lr,f,$,_,t,e,c,d,P]),cr=(0,l.useCallback)(Y=>{y||Y.preventDefault(),Y.stopPropagation(),O(Y)},[O,y]),br=(0,l.useCallback)(Y=>{Y.metaKey&&(Y.preventDefault(),Y.stopPropagation(),O(Y))},[O]),$r=(0,l.useCallback)(Y=>{const kr=Y.propertyName??"";(kr==="color"||kr.includes("color"))&&(L(),!lr&&rr(!1))},[lr,L]),U=(0,l.useCallback)(Y=>{Y.key!=="Enter"||!lr||(Y.preventDefault(),Y.stopPropagation(),Y.currentTarget.click())},[lr]),W=(0,l.useMemo)(()=>({...b??{},"--js\u2022hex":w?"transparent":k&&(E??$??I)||"","--js\u2022color":$??I,"--js\u2022gradient":e?Ya(e):"","--js\u2022fg":n&&!o||lr?P:""}),[b,w,k,E,$,I,n,o,lr,P,e]);return(0,i.jsx)(Mr,{...x,popoverTargetAction:y,ref:D,_isCustom:!0,"arc-color-chip":t,layout:"icon",tooltip:er,text:T,icon:V,"is-draft":o?"":void 0,"is-selected":!o&&n?"":void 0,"is-translucent":k?"":void 0,"is-transparent":w?"":void 0,style:W,onClick:cr,onContextMenu:br,onMouseEnter:Y=>{or(!0),j(Y.metaKey)},onMouseMove:Y=>{j(Y.metaKey)},onMouseLeave:()=>{or(!1),j(!1),rr(!1)},onFocus:()=>sr(!0),onBlur:()=>{sr(!1),rr(!1)},onKeyDown:U,onTransitionEnd:$r})});o0.displayName="ArcColorSwatch";const Pn=o0;Pn.getColorData=Pa,Cr("ArcColorSwatch",Ny);const By=s`
@layer arc-components {

  [arc-color-palette] {
    display: flex;
    flex-direction: column;
    gap: var(${R}•8);

    [arc-color-palette-header] {
      display: flex;
      flex-direction: column;
      gap: var(${R}•4);
      font-size: var(${m}•12);

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      small { opacity: 0.612; }
    }

    [arc-color-palette-set] {
      display: flex;
      flex-wrap: wrap;
      gap: var(${R}•4);
      max-width: calc((var(${m}•24) + var(${R}•4)) * 7 + var(${R}•24));
      min-inline-size: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }

    [arc-color-palette-picker] {
      display: grid;
      gap: var(${R}•8);
      padding-top: var(${R}•8);
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    }

    [arc-color-palette-inputs] {
      display: grid;
      gap: var(${R}•8);
      grid-template-columns: auto auto;
      align-items: end;
    }

    [arc-color-palette-actions] {
      display: flex;
      justify-content: flex-end;
      gap: var(${R}•8);
    }

    [arc-add-color] {
      --arc-icon-size: var(${m}•10);
    }
  }

}
`,Rn=({children:r,id:e,heading:a,showHeading:t=!0,setAriaLabel:o,colors:n=[],activeColor:c,activeGradient:d,matchByName:u=!1,format:h=Ze.format,canAddColor:p=!1,canAddGradient:v=!1,canRemoveColor:g=!1,contrastBgColor:f,addColorFlow:b="standalone",sharedSwatchProps:y,onSwatchClick:x,onAddColor:A,onRemoveColor:$,onColorChange:k,onAddColorToggle:w,labels:E,..._})=>{const T=(0,l.useMemo)(()=>li(E),[E]),C=b==="embedded",S=Nr(void 0,"add-color-anchor"),I=Nr(void 0,"add-color-popover"),D=Nr(void 0,"palette-heading"),N=t&&!!a,H=Tn(x),Z=Tn(A),L=Tn($),M=Tn(k),P=Tn(w),[F,or]=(0,l.useState)(n),[vr,j]=(0,l.useState)(!1),[X,sr]=(0,l.useState)(!1),{isSelectionControlled:mr,activeSelectedColor:rr,setUncontrolledSelectedColor:ur,selectColor:yr}=_y({activeColor:c}),lr=(0,l.useMemo)(()=>Ml(rr),[rr]),wr=(0,l.useMemo)(()=>rr!=null?mo(rr)?.trim().toLowerCase():void 0,[rr]),V=(0,l.useMemo)(()=>F.map(tr=>te(tr)?{normalized:Ya(tr),rgba:null,name:void 0}:{normalized:bo(tr),rgba:Zr(Br(tr)),name:mo(tr)?.trim().toLowerCase()}),[F]),K=(0,l.useMemo)(()=>V.map(tr=>!lr||!(tr.normalized===lr.comparisonKey||!!lr.selectedRgba&&!!tr.rgba&&pi(tr.rgba,lr.selectedRgba))?!1:u&&wr!=null&&tr.name!=null?tr.name===wr:!0),[V,lr,u,wr]),er=(0,l.useMemo)(()=>K.some(Boolean),[K]),O=(0,l.useMemo)(()=>!!d&&F.some(tr=>te(tr)&&ut(tr,d)),[d,F]),cr=!C&&er?void 0:rr;(0,l.useEffect)(()=>{or(n)},[n]);const br=(0,l.useCallback)(tr=>{if(typeof tr=="object"&&tr!==null&&"hsv"in tr){M?.(tr);return}const Yr=Br(tr),Ht=mo(tr),Ba=Pa(Yr,{format:h,contrastBgColor:f});M?.({...Ba,name:Ht})},[M,h,f]),$r=(0,l.useRef)(!1),U=(0,l.useCallback)(tr=>{tr&&($r.current=!0,sr(!0)),j(tr),P?.(e,tr)},[e,P]),W=(0,l.useCallback)(()=>ha?.handlePopover?.(I,"show"),[I]),Y=(0,l.useCallback)(()=>ha?.handlePopover?.(I,"hide"),[I]);(0,l.useEffect)(()=>{vr&&$r.current&&($r.current=!1,W())},[vr,W]);const kr=(0,l.useMemo)(()=>({id:e,heading:a,showHeading:t,colors:F,activeColor:c,activeGradient:d,format:h,canAddColor:p,canAddGradient:v,canRemoveColor:g,contrastBgColor:f,addColorFlow:b,sharedSwatchProps:y,onSwatchClick:H,onAddColor:Z,onRemoveColor:L,onColorChange:M,onAddColorToggle:P}),[e,a,t,F,c,d,h,p,v,g,f,b,y,H,Z,L,M,P]),{draftColorIndex:ir,draftColorValue:dr,startAddDraft:q,updateDraftColor:pr,cancelDraftColor:Rr,saveDraftColor:Ir,saveCurrentColor:Sr}=Ty({palette:kr,isSelectionControlled:mr,onAddColor:Z,emitColorChange:br,setLocalColors:or,setUncontrolledSelectedColor:ur,initialColorValue:cr,shouldOpenPopover:!C,notifyAddColorToggle:U,showPopover:W,hidePopover:Y}),Ur=(0,l.useMemo)(()=>F.map((tr,Yr)=>ir===Yr&&dr!=null?dr:tr),[ir,dr,F]),Fr=(0,l.useMemo)(()=>{if(ir==null||dr==null||lr==null||ir<0||ir>=K.length||te(dr))return K;const tr=[...K];return tr[ir]=Ep(dr,lr),tr},[K,ir,dr,lr]),Hr=(0,l.useMemo)(()=>te(dr)?null:Ml(dr),[dr]),He=(0,l.useMemo)(()=>ir==null||Hr==null?!1:Ll(F.filter(tr=>!te(tr)),dr,{skipIndex:ir}),[ir,Hr,dr,F]),ee=(0,l.useCallback)((tr,Yr)=>{if(!tr?.colorData)return;if(tr.kind==="gradient"){const Ba=tr.gradientData;if(tr.action==="remove"&&g){or(Wi=>Wi.filter(rc=>!(te(rc)&&ut(rc,Ba)))),L?.(kr,Ba,Yr);return}H?.({...tr,shouldClosePicker:!1},Yr);return}const Ht={color:tr.colorData.value,name:tr.colorData.name};if(tr.action==="remove"&&g){or(Ba=>{const Wi=Ba.filter(rc=>te(rc)||!$o(rc,Ht));return Wi.length===Ba.length?Ba:Wi}),L?.(kr,Ht,Yr);return}yr(Ht),H?.({...tr,shouldClosePicker:!1},Yr),br(tr.colorData)},[g,br,L,H,kr,yr]),we=(0,l.useCallback)(tr=>ir===tr&&dr!=null,[ir,dr]);(0,l.useEffect)(()=>{if(!C||ir==null)return;const tr=(v?d:void 0)??(p?rr:void 0);tr!=null&&pr(tr)},[d,rr,p,v,ir,C,pr]);const Je=(0,l.useCallback)(tr=>{const Yr=tr?.newState==="open";j(Yr),P?.(e,Yr)},[e,P]),et=(0,l.useCallback)(tr=>{const Yr=(v?d:void 0)??(p?rr??Ze.color:Ze.color);Sr(Yr,tr)},[p,v,d,rr,Sr]),Qe=(0,l.useCallback)(tr=>{tr.key!=="Escape"||!vr||Rr(tr)},[Rr,vr]),Lo=(0,l.useMemo)(()=>ir==null||!te(dr)?!1:F.some((tr,Yr)=>Yr!==ir&&te(tr)&&ut(tr,dr)),[ir,dr,F]),Wd=p||v,qd=C&&(!((v?d:void 0)??(p?rr:void 0))||!vr&&(v&&d?O:er)),Yd=C?T.addCurrentColor:T.addSwatch,Zd=C&&vr?T.cancel:Yd,Jd=C||!vr,v2=p&&v?void 0:[v?"gradient":"solid"];let Xg=et;return C||(Xg=vr?Rr:q),(0,i.jsxs)("div",{..._,"arc-color-palette":e,"is-adding-color":vr?"":void 0,children:[N&&(0,i.jsx)("header",{"arc-color-palette-header":"",id:D,children:typeof a=="string"?(0,i.jsx)("strong",{children:a}):(0,i.jsx)(le,{...a,layout:"inline",isStrong:!0})}),(0,i.jsxs)("fieldset",{"arc-color-palette-set":"",id:S,"aria-labelledby":N?D:void 0,"aria-label":N?void 0:o??T.colorPalette,children:[Ur?.map((tr,Yr)=>{if(te(tr)){const Ht=`${Ya(tr)}-${Yr}`,Ba=!!d&&ut(d,tr);return(0,l.createElement)(Pn,{...y,key:Ht,kind:"gradient",gradient:tr,name:tr.name,isDraft:we(Yr),isSelected:Ba,canRemoveColor:g&&!we(Yr),contrastBgColor:f,labels:E,onClick:ee})}return(0,l.createElement)(Pn,{...y,key:`${Br(tr)}-${Yr}`,color:tr,kind:"swatch",isDraft:we(Yr),isSelected:Fr[Yr],canRemoveColor:g&&!(C&&we(Yr)),contrastBgColor:f,tooltip:C&&we(Yr)?T.saveColor:void 0,labels:E,onClick:C&&we(Yr)?Ir:ee})}),Wd&&Jd&&(0,i.jsx)(Mr,{"arc-add-color":"",popoverTarget:I,icon:"fa-regular fa-plus",layout:"icon",shape:"round",size:"sm",hierarchy:"secondary",tooltip:Zd,onClick:Xg,isDisabled:qd})]}),Wd&&!C&&X&&(0,i.jsx)(ja,{mode:"add",heading:"",panels:v2,canTogglePanels:p&&v,color:te(dr)?Ze.color:dr??Ze.color,gradient:te(dr)?dr:void 0,format:h,labels:E,onChange:tr=>{tr.activePanel==="solid"?pr(tr.color.value):tr.activePanel==="gradient"&&pr(tr.gradient)},onPreviewColor:tr=>pr(tr.value),onPreviewGradient:tr=>pr(tr),popoverProps:{id:I,popover:"manual",anchorAt:"right-center",alternateAnchorId:S,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,onToggle:Je,onKeyDown:Qe,footerSlot:(0,i.jsxs)(Pt,{"arc-color-picker-button-bar":"",children:[(0,i.jsx)(Mr,{"arc-color-picker-button":"cancel",text:T.cancel,hierarchy:"secondary",size:"sm",onClick:Rr}),(0,i.jsx)(Mr,{"arc-color-picker-button":"save",text:T.save,size:"sm",onClick:Ir,isDisabled:He||Lo})]})}}),r&&(0,i.jsx)("footer",{"arc-color-palette-footer":"",children:r})]})};Rn.addColor=dy,Rn.removeColor=uy,Cr("ArcColorPalette",By);const Fy=(0,l.memo)(function({palette:e,canAddColor:a,canAddGradient:t,canRemoveColor:o,activePaletteColor:n,activePaletteGradient:c,contrastBgColor:d,labels:u,onSwatchClick:h,onAddColor:p,onRemoveColor:v}){const g=(0,l.useCallback)((f,b)=>{h(f,b,e.id)},[e.id,h]);return(0,i.jsx)(Rn,{...e,canAddColor:a??e.canAddColor,canAddGradient:t??e.canAddGradient,canRemoveColor:o,addColorFlow:"embedded",activeColor:n,activeGradient:c,contrastBgColor:d,labels:u,onAddColor:p,onRemoveColor:v,onSwatchClick:g})}),n0=({palettes:r=[],canAddColor:e,canAddGradient:a,canRemoveColor:t,activePaletteColor:o,activePaletteGradient:n,contrastBgColor:c,selectedNameRef:d,hsvRef:u,popoverId:h,labels:p,onAddColor:v,onRemoveColor:g,commitLocalHsv:f,...b})=>{const y=(0,l.useRef)(r);y.current=r;const x=(0,l.useCallback)((A,$,k)=>{const w=y.current.find(_=>_.id===k);if(!w)return;if($?.preventDefault(),$?.stopPropagation(),A?.action==="remove"&&(t??w.canRemoveColor)){w.onSwatchClick?.(A,$);return}A?.kind!=="gradient"&&A?.colorData&&(d.current=A.colorData.name,f(A.colorData.hsv));try{w.onSwatchClick?.(A,$)}catch{}if((A?.shouldClosePicker??!0)&&h)try{ha.handlePopover(h,"hide")}catch{}},[t,f,h,d]);return r.length?(0,i.jsx)("div",{...b,"arc-color-palettes":"","arc-color-picker-section":"palettes",children:r.map(A=>(0,i.jsx)(Fy,{palette:A,canAddColor:e,canAddGradient:a,canRemoveColor:!!(t??A.canRemoveColor),activePaletteColor:o,activePaletteGradient:n,contrastBgColor:c,labels:p,onSwatchClick:x,onAddColor:v,onRemoveColor:g},A.id))}):null},c0=({onCommit:r})=>{const e=(0,l.useRef)(!1),a=(0,l.useCallback)((t,o)=>{const n=()=>{e.current=!1,o(),r()};return{onChange:({value:c})=>{e.current=!0,t(Number(c))},onPointerUp:n,onPointerCancel:n,onBlur:()=>{e.current&&n()}}},[r]);return{isPreviewingRef:e,createInputProps:a}},yi={status:"idle"},i0=(r,e)=>r.kind!==e.kind?!1:r.kind==="stop-at"&&e.kind==="stop-at"?r.stopId===e.stopId:!0,Hy=(r,e)=>{switch(e.type){case"PREVIEW_START":return{status:"previewing",source:e.source};case"PREVIEW_END":return r.status==="previewing"?yi:r;case"EDIT_FOCUS":return{status:"editingText",field:e.field,draft:e.draft};case"EDIT_INPUT":return r.status==="editingText"?{...r,draft:e.draft}:r;case"EDIT_BLUR":return r.status==="editingText"?yi:r;case"EXTERNAL_ADOPT":return r.status==="idle"?r:yi;default:return r}},Vy=(r,e)=>r.status==="editingText"&&i0(r.field,e),Kl=(r,e,a)=>a.status==="editingText"&&i0(a.field,r)?a.draft:e,E2=1,Uy=/^[0-9A-Fa-f]{3}$/,Gy=/^[0-9A-Fa-f]{4}$/,Ky="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8}",Wy="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}",s0=r=>{if(Uy.test(r))return{kind:"three",expanded:_l(r)};if(Gy.test(r)){const e=Zr(`#${r}`);if(e)return{kind:"four",shorthand:r,expanded:fo(e),alphaPercent:Math.round(e.a*100)}}return null},Xy=(r,e,a)=>r?.kind==="three"?a.hexExpandHint(r.expanded.toUpperCase()):r?.kind==="four"?e?a.hexApplyAlphaHint(r.expanded.toUpperCase(),r.alphaPercent):a.hexExpandHint(r.expanded.toUpperCase()):a.hexInvalid,qy=(r,e,a,t=pe)=>{const o=Tt(r),n=s0(o),c=o.length>0&&(!a&&o.length===8||!e&&o.length!==6&&o.length!==8||Zr(`#${o}`)===null),u=!e&&o.length>0&&o.length!==6&&o.length!==8||!a&&o.length===8?Xy(n,a,t):t.hexInvalid,h=!a&&o.length===8?t.hexRgbOnly:u;let p=t.applyExpandedHex;return n?.kind==="four"?p=a?t.applyHexWithAlpha(n.expanded.toUpperCase(),n.alphaPercent):t.applyExpandedHexValue(n.expanded.toUpperCase()):n?.kind==="three"&&(p=t.applyExpandedHexValue(n.expanded.toUpperCase())),{isInvalid:c,errorAid:{tooltip:h,ariaLabel:p,fix:n}}},l0=(r,e,a,t)=>{const o=Zr(`#${r}`);o&&(e(r,{applyHexAlpha:!0,...t}),a(fo(o)))},Yy=(r,e,a,t)=>{if(e){l0(r,a,t);return}const o=Zr(`#${r}`);if(o){const n=fo(o);t(n),a(n)}},Zy=(r,e,a,t)=>{if(e)l0(r,a,t);else{const o=r.slice(0,6);t(o),a(o)}},Jy=(r,e,a,t)=>{r.kind==="three"?(a(r.expanded),e(r.expanded)):t?(e(r.shorthand,{applyHexAlpha:!0}),a(r.expanded)):(a(r.expanded),e(r.expanded))},Qy=(r,e=!1)=>{const a=Tt(r);return!e&&a.length>6?a.slice(0,6):a},rx=(r,e,a,t)=>{if(!a&&(r.length===8||t?.applyHexAlpha===!0))return!1;if(!e&&r.length>0){const o=r.length===6||r.length===8,n=t?.applyHexAlpha===!0&&r.length===4;if(!o&&!n)return!1}return!0},d0=()=>typeof window<"u"&&"EyeDropper"in window&&typeof window.EyeDropper=="function",Wl=d0(),u0=Wl?window.EyeDropper:void 0,h0=u0?new u0:void 0,ex=({onColorPicked:r,labels:e,...a})=>{const t=e??pe,[o,n]=(0,l.useState)(!1),c=async()=>{if(!(!Wl||!h0||o)){n(!0);try{const{sRGBHex:d}=await h0.open();if(typeof r=="function"){const u=Ue(fi(d,"#000000"));r(Ge({...u,a:1},!1))}else console.warn("EyeDropper: onColorPicked prop was not provided")}catch(d){d instanceof DOMException&&d.name==="AbortError"||console.error("EyeDropper failed:",d)}finally{n(!1)}}};return Wl?(0,i.jsx)("div",{"arc-color-eye-dropper":"",children:(0,i.jsx)(Mr,{...a,onClick:c,layout:"icon",shape:"square",size:"md",variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-eye-dropper",text:t.eyeDropper,tooltip:t.eyeDropperTooltip})}):null},Ao=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),ax=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),Xl=({children:r,...e})=>(0,i.jsx)(i.Fragment,{children:!!r&&(0,i.jsx)(St,{...e,children:(0,i.jsx)(zt,{children:r})})}),tx=({children:r,layout:e,size:a,variant:t,tag:o="span",...n})=>(0,i.jsx)(o,{...n,"data-layout":e,"data-size":a,"data-variant":t,children:r}),ox=()=>(0,i.jsx)("span",{"input-element":"spacer"}),nx=r=>(0,i.jsx)(Ao,{...r,"input-element":"header"}),cx=r=>(0,i.jsx)(Xl,{...r,"input-element":"header-label"}),ix=r=>(0,i.jsx)(Ao,{...r,"input-element":"header-slot"}),sx=r=>(0,i.jsx)(Ao,{...r,"input-element":"body"}),lx=r=>(0,i.jsx)(Xl,{...r,"input-element":"input-prefix"}),dx=r=>(0,i.jsx)(Xl,{...r,"input-element":"input-suffix"}),ux=r=>(0,i.jsx)(ax,{...r,"input-element":"input-action"}),hx=r=>(0,i.jsx)(Ao,{...r,"input-element":"footer"}),px=r=>(0,i.jsx)(Ao,{...r,"input-element":"footer-caption"}),gx=r=>(0,i.jsx)(Ao,{...r,"input-element":"footer-slot"}),vx=r=>e=>{if(!(e?.target instanceof HTMLInputElement))return;const a={name:e?.target?.name,value:e?.target?.value};r?.(a,e)},Jr=s`--arc•input`,Za=s`${Jr}•fg`,xi=s`${Za}•disabled`,wi=s`${Za}•readonly`,ki=s`${Za}•invalid`,ta=s`${Jr}•bg`,Ai=s`${ta}•hover`,Ci=s`${ta}•disabled`,Si=s`${ta}•readonly`,zi=s`${ta}•invalid`,fx=s`${Jr}•align`,p0=s`${fx}•items`,g0=s`${Jr}•header`,Ei=s`${g0}•label•color`,v0=s`${g0}•slot•color`,f0=s`${Jr}•footer`,ql=s`${f0}•caption•color`,m0=s`${f0}•slot•color`,Yl=s`${Jr}•border`,Zl=s`${Yl}•radius`,mx=s`${Yl}•width`,oa=s`${Yl}•color`,Jl=s`${Jr}•outline`,b0=s`${Jl}•size`,$0=s`${Jl}•offset`,y0=s`${Jl}•color`,jn=s`${Jr}•height`,bx=s`${Jr}•padding`,_i=s`${bx}•inline`,Ql=s`${_i}•end`,x0=s`${Jr}•slot`,rd=s`${x0}•gap`,ed=s`${x0}•font•size`,Ti=s`${oa}•hover`,Ii=s`${oa}•disabled`,ad=s`${oa}•readonly`,Ln=s`${oa}•invalid`,td=s`${Jr}•action•height`,w0=s`${Jr}•gap`,od=s`${Jr}•font•size`,$x=s`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${jn}: var(${m}•48);
    ${Ql}: var(${R}•8);
    ${td}: var(${m}•48);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${jn}: var(${m}•40);
    ${td}: var(${m}•40);
  }

  &[data-size=md] {
    ${jn}: var(${m}•32);
    ${Zl}: var(${m}•4);
    ${td}: var(${m}•32);
  }

  &:has(select) {
    ${_i}: 0;
    ${p0}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${od}: var(${m}•14);
    ${ed}: var(${m}•12);

    ${jn}: var(${m}•40); /* default size */
    ${w0}: var(${R}•6);
    ${rd}: var(${R}•4);
    ${_i}: var(${R}•12);
    ${Ql}: var(${R}•3);
    ${Zl}: var(${m}•8);
    ${mx}: var(${m}•1);
    ${b0}: var(${m}•2);
    ${$0}: var(${m}•2);

    &[data-size=inherit] {
      ${od}: 0.875em; /* 14px at 100% */
      ${ed}: 0.75em; /* 12px at 100% */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    ${Za}: var(--arc-color-fg-primary);
    ${Ei}: inherit;
    ${v0}: var(--arc-color-fg-secondary);
    ${ql}: var(--arc-color-fg-secondary);
    ${m0}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${ta}: var(--arc-color-bg-primary);
      ${Ai}: var(--arc-color-bg-primary);
      ${oa}: var(--arc-color-border-mid);
      ${Ti}: var(--arc-color-border-heavy);

      ${xi}: var(--arc-color-fg-disabled);
      ${Ci}: var(--arc-color-bg-secondary);
      ${Ii}: var(--arc-color-border-mid);

      ${wi}: var(--arc-color-fg-primary);
      ${Si}: var(--arc-color-bg-disabled);
      ${ad}: var(--arc-color-border-mid);

      ${ki}: var(--arc-color-fg-critical-mid);
      ${zi}: var(--arc-color-bg-primary);
      ${Ln}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${ta}: var(--arc-color-bg-secondary);
      ${Ai}: var(--arc-color-bg-hover-default);
      ${oa}: transparent;
      ${Ti}: var(--arc-color-border-stark);

      ${ki}: var(--arc-color-fg-critical-mid);
      ${zi}: var(--arc-color-bg-critical-muted);
      ${Ln}: transparent;

      ${xi}: var(--arc-color-fg-disabled);
      ${Ci}: var(--arc-color-bg-disabled);
      ${Ii}: transparent;

      ${wi}: var(--arc-color-fg-primary);
      ${Si}: var(--arc-color-bg-disabled);
      ${Ln}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${ta}: transparent;
      ${Ai}: var(--arc-color-bg-hover-default);
      ${oa}: transparent;
      ${Ti}: transparent;

      ${ki}: var(--arc-color-fg-critical-mid);
      ${zi}: transparent;
      ${Ln}: var(--arc-color-fg-critical-mid);

      ${xi}: var(--arc-color-fg-disabled);
      ${Ci}: transparent;
      ${Ii}: transparent;

      ${wi}: var(--arc-color-fg-primary);
      ${Si}: var(--arc-color-bg-disabled);
      ${ad}: transparent;
    }
  }

  /* STATES --------------------------------------------------------• */

  &:where(:not(:has(
    input:where(:disabled, :read-only),
    select:where(:disabled, [data-readonly])
  ))) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${oa}: var(--arc-input-border-color-hover, var(${Ti}));
      ${ta}: var(--arc-input-background-hover, var(${Ai}));
    }

    &:has([input-element=body]) {
      &:where(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible)
      ) {
        ${y0}: var(--arc-color-border-focus);
      }
    }
  }

  &:where(:has(
    input[type=range]:not(:disabled),
    select:not(:disabled, [data-readonly])
  )) {
    ${Jr}•cursor: pointer;
  }

  &:where(:has(
    input:not([type=range]):read-only,
    select[data-readonly]
  )) {
    ${Jr}•cursor: default;
    ${Za}: var(${wi});
    ${ta}: var(${Si});
    ${oa}: var(${ad});
  }

  &:has(input:disabled, select:disabled) {
    ${Jr}•cursor: not-allowed;
    ${Za}: var(${xi});
    ${ta}: var(${Ci});
    ${oa}: var(${Ii});
    ${Ei}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${ta}: var(${zi});
    ${Ei}: var(${Za});
    ${oa}: var(${Ln});
    ${ql}: var(${ki});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    flex: var(--arc-input-flex, 1);
    ${Jr}•display: flex;
  }

  &[data-layout=hug] {
    flex: var(--arc-input-flex, none);
    ${Jr}•display: inline-flex;
  }

  & {
    ${Jr}•border: var(--arc-border-width-sm) solid var(${oa});
    ${Jr}•outline: var(${b0}) solid var(${y0}, transparent);
  }
}

/* Inter-Component Communications ----------------------------------• */

[arc-input] {
  --arc-icon-text-line-height: normal;
  --arc-label-cursor: var(${Jr}•cursor, inherit); /* ArcLabel • cursor syncing */

  &[arc-text-input][data-size=md] {
    --arc-button-border-radius: var(--arc-border-radius-sm);
    --arc-button-outline-offset: 0;
    --arc-button-height: 80%; /* ArcButton • the input size 'md' needs
                                      a slightly smaller "input-action" button
                                      footprint; there's no direct access to
                                      ArcButton['size'] prop in this context */
  }
}

[arc-input]:not([hidden]) {
  display: var(${Jr}•display, flex);
  flex-direction: column;
  gap: var(${rd});
  color: var(--arc-input-color, var(${Za}));

  :is([input-element=header], [input-element=footer]) {
    flex: none;
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${ed}));
    gap: var(${rd});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${Ei}));
    opacity: var(--arc-input-header-label-opacity, unset);
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${v0}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${ql}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${m0}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    position: relative;
    display: flex;
    align-items: var(${p0}, center);
    gap: var(--arc-input-gap, var(${w0}));
    height: var(--arc-input-height, var(${jn}));
    font-size: var(${od});

    color: var(--arc-input-color, var(${Za}));
    background-color: var(--arc-input-background, var(${ta}));
    border: var(--arc-input-border, var(${Jr}•border));
    border-radius: var(--arc-input-border-radius, var(${Zl}));
    outline: var(${Jr}•outline, none);
    outline-offset: var(--arc-input-outline-offset, var(${$0}));

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${Jr}•cursor, unset);

    padding-inline: var(--arc-input-padding-inline, var(${_i}));

    &:has([input-element=input-action]) {
      padding-inline-end: var(${Ql});
    }

    input {
      cursor: inherit;
      appearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      color: inherit;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      width: var(--arc-input-width, 100%);
      min-width: var(--arc-input-min-width, 1em);
      max-width: var(--arc-input-max-width, 100%);
      text-align: var(--arc-input-text-align, unset);

      &:not([type=range]) {
        border: var(--arc-border-width-sm) solid transparent;
        background: transparent;
      }

      /* @note - textfield appearance suppresses native spinners for number inputs */
      &[arc-input-type=number][is-appearance=textfield] {
        appearance: textfield;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          appearance: none;
        }
      }

      &[arc-input-type=search]::-webkit-search-cancel-button {
        appearance: none;
        display: none;
      }
    }

    /* @note - reset font-size for nested input elements */
    [input-element] { font-size: var(--arc-input-element-font-size, 1em); }
  }

  [input-element=input-prefix] {
    flex: none;
    opacity: var(--arc-input-prefix-opacity, unset);
    font-weight: var(--arc-input-prefix-font-weight, unset);
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: var(--arc-input-action-display, flex);
    align-items: center;
    justify-content: center;
  }
}

}
`,yx={onChangeHandler:vx,Wrapper:tx,Spacer:ox,Header:nx,HeaderLabel:cx,HeaderSlot:ix,InputBody:sx,InputPrefix:lx,InputSuffix:dx,InputAction:ux,Footer:hx,FooterCaption:px,FooterSlot:gx};Cr("ArcInput",$x);const Pr=yx,xx="[input-element=body]",wx=24;function kx({inputRef:r,onChange:e,enabled:a,deltaPerStep:t=wx}){const o=(0,l.useRef)(e);o.current=e,(0,l.useEffect)(()=>{if(!a||t<=0)return;let n=0;const c=()=>r.current,d=()=>{const f=c();if(!(f instanceof Element))return null;const b=f.closest(xx);return b instanceof HTMLElement?b:null},u=(f,b)=>{const y=o.current;if(!y)return;const x={name:f.name,value:b};y(x,{target:f,currentTarget:f})},h=()=>{n=0},p=f=>{const b=c();if(!b||document.activeElement!==b||b.type!=="number"||b.disabled||b.readOnly)return;f.preventDefault(),f.stopPropagation();const y=Number(b.step)||1,x=Number(b.min),A=Number(b.max),$=Number.isFinite(x)?x:void 0,k=Number.isFinite(A)?A:void 0;let w=Number(b.value);if(!Number.isFinite(w))return;n+=f.deltaY;const E=t,_=()=>{const S=Math.max($??-1/0,w-y);return S===w?!1:(w=S,u(b,String(S)),!0)},T=()=>{const S=Math.min(k??1/0,w+y);return S===w?!1:(w=S,u(b,String(S)),!0)};for(;n>=E;){if(!_()){n=0;break}n-=E}for(;n<=-E;){if(!T()){n=0;break}n+=E}},v=d(),g=c();if(!(!v||!g||g.type!=="number"))return g.addEventListener("blur",h),v.addEventListener("wheel",p,{passive:!1}),()=>{g.removeEventListener("blur",h),v.removeEventListener("wheel",p)}},[a,t,r])}const Pi=gr(ia,["fill","hug"]),Ri=gr(ie,["inherit","xl","lg","md"]),nd=gr(Xr,["outline","solid","plain"]),Ax=Pi,Cx=Ri,Sx=gr(nd,["outline","solid"]),zx=["text","number","password","email","url"],Co=(0,l.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",inputProps:t,headerLabel:o,headerSlot:n,inputPrefix:c,inputAction:d,inputSuffix:u,footerCaption:h,footerSlot:p,...v},g)=>{const{id:f,wheelControl:b,appearance:y,onChange:x,...A}=t,$="arc-search"in v,k=$?"search":A?.type||"text",w=A?.disabled||void 0,E=A?.readOnly||void 0,_=A?.required||void 0,T=!!(o||n),C=!!(h||p),S=(0,l.useRef)(null),I=(0,l.useCallback)(H=>{S.current=H,Ae(g,H)},[g]),D=typeof b=="object"?b.deltaPerStep:void 0;kx({enabled:k==="number"&&b!==!1,deltaPerStep:D,inputRef:S,onChange:x});const N=d&&(0,l.isValidElement)(d)?(0,l.cloneElement)(d,{size:"md"}):d;return(0,i.jsxs)(Pr.Wrapper,{...v,"arc-text-input":"","arc-input":k,layout:r,size:e,variant:a,children:[T&&(0,i.jsxs)(Pr.Header,{children:[(0,i.jsx)(Pr.HeaderLabel,{htmlFor:f,children:o}),!!n&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.HeaderSlot,{children:n})]}),(0,i.jsxs)(Pr.InputBody,{children:[(0,i.jsx)(Pr.InputPrefix,{htmlFor:f,children:c}),(0,i.jsx)("input",{...A,...$?{type:k}:{},ref:I,id:f,"arc-input-type":k,onChange:Pr.onChangeHandler(x),"aria-disabled":w,"aria-readonly":E,"aria-required":_,"is-appearance":y??void 0}),(0,i.jsx)(Pr.InputSuffix,{htmlFor:f,children:u}),(0,i.jsx)(Pr.InputAction,{children:N})]}),C&&(0,i.jsxs)(Pr.Footer,{children:[(0,i.jsx)(Pr.FooterCaption,{children:h}),!!p&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.FooterSlot,{children:p})]})]})}),k0=({commitDraft:r,setIsEditing:e,onRevert:a})=>{const t=(0,l.useCallback)(()=>{e(!0)},[e]),o=(0,l.useCallback)(()=>{e(!1),r()},[e,r]),n=(0,l.useCallback)(c=>{if(c.key==="Enter"){c.preventDefault(),e(!1),r(),c.currentTarget.blur();return}c.key==="Escape"&&(c.preventDefault(),e(!1),a(),c.currentTarget.blur())},[e,r,a]);return{onFocus:t,onBlur:o,onKeyDown:n}},Ex=({hsv:r,draftValue:e,label:a,showLabel:t=!0,setIsEditing:o,commitDraft:n,setDraftValue:c,expandHexShorthand:d=!1,hasAlphaTools:u=!0,isUnset:h=!1,labels:p,headerSlot:v})=>{const g=p??pe,f=a??g.hex,b=Nr(void 0,"hex-input"),y=(0,l.useRef)(null),x=fo(Ue(r)),[A,$]=(0,l.useState)(!1),{isInvalid:k,errorAid:w}=(0,l.useMemo)(()=>qy(e,d,u,g),[e,d,u,g]),{onFocus:E,onBlur:_,onKeyDown:T}=k0({commitDraft:n,setIsEditing:o,onRevert:()=>c(x)}),C=(0,l.useCallback)(()=>{$(!0);const L=Tt(e);if(L.length===8){Zy(L,u,n,c),_();return}if(d&&L.length===3){const M=_l(L);c(M),n(M),o(!1),_();return}d&&L.length===4&&Yy(L,u,n,c),_()},[e,d,u,c,n,o,_]),S=(0,l.useCallback)(L=>{if(L.key!=="ArrowUp"&&L.key!=="ArrowDown")return;const M=L.key==="ArrowUp"?1:-1,P=L.altKey?"r":L.metaKey?"g":"b",F=L.shiftKey?16:1,or=xp(Tt(e),Ue(r),P,M,F);c(or),n(or,{phase:"preview"}),L.preventDefault()},[e,r,c,n]),I=(0,l.useCallback)(L=>{if(S(L),!L.defaultPrevented){if(L.key==="Enter"){L.preventDefault(),o(!1),L.currentTarget.blur();return}L.key==="Escape"&&T(L)}},[S,o,T]),D=({value:L})=>{const M=Qy(L??"",u);c(M),M.length===6&&n(M,{phase:"preview"})},N=k&&A,H=N?w.tooltip:void 0,Z=(0,l.useCallback)(()=>{const L=s0(Tt(e));L&&Jy(L,n,c,u),queueMicrotask(()=>{y.current?.focus()})},[e,n,c,u]);return(0,i.jsx)(Co,{ref:y,"arc-color-input":"hex",size:"md",variant:"solid",headerLabel:t?f:void 0,headerSlot:v,inputPrefix:"#",inputAction:N?(0,i.jsx)(Mr,{layout:"icon",icon:"fa-solid fa-exclamation-circle",variant:"tertiary",tooltip:w.tooltip,"aria-label":w.ariaLabel,onClick:Z}):void 0,inputProps:{id:b,"aria-label":f,placeholder:h?g.unsetColorPlaceholder:"...",value:e,pattern:u?Ky:Wy,maxLength:u?9:6,title:H,"aria-invalid":N?!0:void 0,style:{textTransform:"uppercase",letterSpacing:"0.0625ch"},onFocus:E,onBlur:C,onKeyDown:I,onChange:D}})},A0=({isUnset:r,onSelect:e,labels:a})=>{const t=a??pe;return(0,i.jsx)(Mr,{"arc-color-unset":"",icon:"fa-regular fa-eraser",layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",text:t.unsetColor,tooltip:t.unsetColor,"aria-label":t.unsetColor,isActive:r,onClick:e})},C0=["value","pct","pctSigned","min","max"],S0=new RegExp(`\\{#(${C0.join("|")})\\}`,"g"),_x=Pi,Tx=Ri,Ix=nd,Px=["top","inline"],z0=({text:r,value:e,toValue:a,pctSigned:t,min:o,max:n})=>{const c={value:String(e??""),pct:String(a??""),pctSigned:String(t??""),min:String(o??""),max:String(n??"")};return typeof r=="string"?r.replace(S0,(d,u)=>c[u]):typeof r=="function"?r({...c,toValue:a,pctSigned:t}):r},Rx=10,cd=r=>r==="ArrowUp"||r==="ArrowDown"||r==="ArrowLeft"||r==="ArrowRight",id=(r,{shiftKey:e},{step:a=1,stepLarge:t=Rx}={})=>{if(!cd(r))return null;const o=e?t:a;return r==="ArrowDown"||r==="ArrowLeft"?-o:o},E0=(r,e,{min:a=-1/0,max:t=1/0}={})=>ar(r+e,a,t),jx=(r,{getValue:e,onStep:a,min:t,max:o,step:n,stepLarge:c})=>{const d=id(r.key,r,{step:n,stepLarge:c});if(d==null)return!1;r.preventDefault();const u=E0(e(),d,{min:t,max:o});return a(u,r),!0},_0=(...r)=>e=>{r.some(a=>(a(e),e.defaultPrevented))},T0=(r,e,a,t)=>ar(Math.round(r/e)*e,a,t),I0=(r,e,a,t,o)=>{const n=r%a===0;return e>0?ar(n?r+a:Math.ceil(r/a)*a,t,o):ar(n?r-a:Math.floor(r/a)*a,t,o)},P0=({snapStep:r,min:e,max:a,step:t=1,value:o,onChange:n,onKeyDown:c,onPointerDown:d,onPointerMove:u,onPointerUp:h,onPointerCancel:p})=>{const v=(0,l.useRef)(!1),g=(0,l.useRef)(null),f=(0,l.useCallback)(()=>{g.current?.(),g.current=null},[]),b=(0,l.useCallback)(()=>{if(g.current||typeof window>"u")return;const w=E=>{v.current=E.shiftKey};window.addEventListener("keydown",w,!0),window.addEventListener("keyup",w,!0),g.current=()=>{window.removeEventListener("keydown",w,!0),window.removeEventListener("keyup",w,!0)}},[]);(0,l.useEffect)(()=>f,[f]);const y=(0,l.useCallback)(w=>{v.current=w.shiftKey,b(),d?.(w)},[d,b]),x=(0,l.useCallback)(w=>{v.current=!1,f(),h?.(w)},[h,f]),A=(0,l.useCallback)(w=>{v.current=!1,f(),p?.(w)},[p,f]),$=(0,l.useCallback)((w,E)=>{if(!r||!v.current){n?.(w,E);return}const _=T0(Number(w.value),r,e,a);n?.({...w,value:String(_)},E)},[r,e,a,n]),k=(0,l.useCallback)(w=>{if(!r||!w.shiftKey||!cd(w.key)){c?.(w);return}const E=id(w.key,w,{step:t,stepLarge:r});if(E==null){c?.(w);return}w.preventDefault();const _=I0(o,E>0?1:-1,r,e,a),T={value:String(_)};n?.(T,w)},[r,t,e,a,o,n,c]);return r?{onChange:$,onKeyDown:k,onPointerDown:y,onPointerMove:u,onPointerUp:x,onPointerCancel:A}:{onChange:n,onKeyDown:c,onPointerDown:d,onPointerMove:u,onPointerUp:h,onPointerCancel:p}},Be=s`--arc•slider`,Ye=s`${Be}•track`,Dr=s`${Be}•thumb`,So={BASE:s`
    ${Ye}•bg: var(--arc-slider-track-background, var(--arc-color-border-mid));
    ${Ye}•progress•bg: var(--arc-slider-progress-background, var(--arc-color-bg-theme-heavy));
    ${Ye}•height: var(--arc-slider-track-height, max(4px, 0.25em));

    ${Dr}•size: var(--arc-slider-thumb-size, max(16px, 1em));
    ${Dr}•size•hover: var(--arc-slider-thumb-size-hover, max(16px, 1em));
    ${Dr}•size•anchor: var(--arc-slider-thumb-size-hover, var(--arc-slider-thumb-size, max(16px, 1em)));
    ${Dr}•size•rest: var(${Dr}•size•anchor);

    ${Dr}•bg: var(--arc-slider-thumb-background, var(--arc-color-bg-theme-heavy));
    ${Dr}•shadow: var(--arc-slider-thumb-shadow, var(--arc-shadow-md));

    &:has([has-small-thumb]) {
      ${Dr}•size: var(--arc-slider-thumb-size, max(8px, 0.5em));
      ${Dr}•size•rest: var(--arc-slider-thumb-size, max(8px, 0.5em));
    }

    &:has(
      [arc-slider-surface]:hover,
      [arc-slider-surface]:active,
      [arc-slider-surface]:focus-within
    ):not(:has([arc-slider-input]:disabled)) {
      ${Dr}•size: var(${Dr}•size•hover);
    }

    &:has([arc-slider-input]:disabled) {
      ${Dr}•bg: var(--arc-slider-thumb-background-disabled, var(--arc-color-bg-neutral-mid));
      ${Ye}•progress•bg: var(--arc-slider-progress-background-disabled, var(--arc-color-bg-neutral-mid));
      ${Ye}•bg: var(--arc-slider-track-background-disabled, var(--arc-color-bg-disabled));
      ${Dr}•shadow: var(--arc-slider-thumb-shadow-disabled, none);
    }

    ${Dr}•shift: calc((var(${Ye}•height) - var(${Dr}•size)) / 2);
    ${Dr}•shift•anchor: calc((var(${Ye}•height) - var(${Dr}•size•anchor)) / 2);

    ${Be}•radius: var(--arc-border-radius-pill);
    ${Be}•vx: calc((100% - var(${Dr}•size)) * (var(--js•v, 0) / 100));
    ${Be}•vx•anchor: calc((100% - var(${Dr}•size•anchor)) * (var(--js•v, 0) / 100));

    ${Dr}•cx•nudge: calc(
      (var(--js•v, 0) / 100 - 0.5) * (var(${Dr}•size•anchor) - var(${Dr}•size•rest))
    );

    ${Be}•tx: calc(var(${Be}•vx•anchor) + var(${Dr}•cx•nudge));
    ${Be}•ty: var(${Dr}•shift•anchor);
  `,THUMB:s`
    appearance: none;
    width: var(${Dr}•size);
    height: var(${Dr}•size);
    border: none;
    background: var(${Dr}•bg);
    translate: 0 0;
    box-sizing: border-box;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${Dr}•shadow);
    transition-property: translate, width, height, background;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
  `,THUMB_FOCUS:s`
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: var(--arc-slider-thumb-outline-offset, 0.125em);
  `,TRACK:s`
    display: flex;
    align-items: center;
    height: var(${Ye}•height);
    border-radius: var(${Be}•radius);
    background: var(${Ye}•bg);
  `},Lx=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-slider] {
    ${So.BASE}
    font-size: initial;

    --arc-input-header-label-font-weight: var(--arc-slider-label-font-weight, unset);
    --arc-input-prefix-font-weight: var(--arc-slider-label-font-weight, var(--arc-font-weight-600));

    --arc-input-header-label-opacity: var(--arc-slider-label-opacity, unset);
    --arc-input-prefix-opacity: var(--arc-slider-label-opacity, unset);

    ::-webkit-inner-spin-button {
      appearance: none;
    }

    ::-webkit-list-button {
      appearance: none;
    }

    ::-moz-number-spin-box {
      display: none;
    }

    [arc-label-content] {
      display: contents;
    }

    > [input-element=body] {
      --arc-input-gap: var(${m}•16);
      --arc-input-padding-inline: 0;
      --arc-input-height: var(--arc-slider-input-height, unset);
      --arc-label-align-items: center;
    }

    [input-element=input-prefix] {
      --arc-input-element-font-size: max(12px, 0.75em);
    }

    [arc-slider-surface] {
      --arc-input-min-width: 3em;
      --arc-tooltip-text-align: center;
      --arc-tooltip-min-width: 2.5em;
    }

    [arc-slider-output] {
      --arc-input-text-align: center;
      --arc-input-width: var(--arc-slider-number-input-width, max(38px, 4ch));
      --arc-input-action-height: 100%;
      --arc-input-outline-offset: var(${m}•2); /* matches the Button component's outline-offset */
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-slider] {
    max-width: var(--js•max•width, var(--arc-slider-max-width, 100%));

    [arc-slider-surface] {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      min-width: 0;
      height: var(${Ye}•height);
      border-radius: var(${Be}•radius);

      -webkit-user-select: none;
      user-select: none;

      /* track progress (fill to thumb center); logical inset follows dir so RTL mirrors like native range */
      &::before {
        content: '';
        position: absolute;
        display: var(--arc-slider-progress-display, block);
        inset-block: calc(50% - var(${Ye}•height) / 2);
        inset-inline-start: 0;
        inset-inline-end: auto;
        width: calc(var(${Dr}•size) / 2 + var(${Be}•vx));
        height: var(${Ye}•height);
        border-radius: var(${Be}•radius);
        background: var(${Ye}•progress•bg);
        pointer-events: none;
        transition: background 200ms ease-out;
      }

      &:has(:focus:focus-visible) {
        [arc-slider-thumb] { ${So.THUMB_FOCUS} }
      }
    }

    [arc-slider-input] {
      ${So.TRACK}

      &::-moz-range-track { ${So.TRACK} }
      &::-moz-focus-outer { border: 0; }

      &::-moz-range-thumb { ${So.THUMB} }
      &::-webkit-slider-thumb { ${So.THUMB} }
    }

    &:has(
      [arc-slider-surface]:hover,
      [arc-slider-surface]:active,
      [arc-slider-surface]:focus-within
    ):not(:has([arc-slider-input]:disabled)) {
      [arc-slider-input]::-webkit-slider-thumb { translate: var(${Dr}•cx•nudge) 0; }
      [arc-slider-input]::-moz-range-thumb { translate: var(${Dr}•cx•nudge) 0; }

      &:dir(rtl) {
        [arc-slider-input]::-webkit-slider-thumb { translate: calc(-1 * var(${Dr}•cx•nudge)) 0; }
        [arc-slider-input]::-moz-range-thumb { translate: calc(-1 * var(${Dr}•cx•nudge)) 0; }
      }
    }

    [arc-slider-thumb] {
      position: absolute;
      width: var(${Dr}•size•anchor);
      height: var(${Dr}•size•anchor);
      inset-block-start: var(${Be}•ty);
      inset-inline-start: var(${Be}•tx);
      border-radius: var(${Be}•radius);
      pointer-events: none;
    }
  }

  [arc-slider-captions] {
    position: absolute;
    inset: 0.5em 0 auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25em;
    color: var(--arc-color-fg-secondary);
  }

  [arc-slider-caption] {
    font-size: max(10px, 0.625em);
  }

  [arc-slider-output] {
    --arc-input-action-display: contents;
    --arc-button-height:  var(--arc-slider-output-button-height, 100%);

    /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
    --arc-input-suffix-opacity: var(--arc-slider-output-opacity, 61.2%);

    flex: none;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: max(6px, 0.375em);
  }
}

`,R0=(0,l.forwardRef)(({id:r,layout:e="hug",size:a="inherit",variant:t="solid",headerLabel:o,labelPlacement:n="top",displayPrecision:c=0,headerSlot:d,inputIdPrefix:u="arc-slider",inputProps:h,inputAction:p,inputSuffix:v,footerCaption:g,footerSlot:f,valueInputProps:b={},tooltipProps:y={},renderOutput:x,snapStep:A,style:$,...k},w)=>{const E=(0,l.useRef)(null),_=Nr(r,u),{minLabel:T,maxLabel:C,surfaceName:S,smallThumbAtRest:I=!1,onChange:D,value:N,min:H=0,max:Z=100,step:L=1,disabled:M,onKeyDown:P,onPointerDown:F,onPointerMove:or,onPointerUp:vr,onPointerCancel:j,...X}=h,sr=Number(H),mr=Number(Z),rr=Math.min(sr,mr),ur=Math.max(sr,mr),yr=(0,l.useRef)(!1),lr=(0,l.useRef)(Number(N));yr.current||(lr.current=Number(N));const wr=(0,l.useCallback)((ee,we)=>{if(yr.current){const Je=Number(ee.value);Number.isFinite(Je)&&(lr.current=Je)}D?.(ee,we)},[D]),V=(0,l.useCallback)(ee=>{yr.current=!0,lr.current=Number(N),F?.(ee)},[F,N]),K=(0,l.useCallback)(ee=>{yr.current=!1,vr?.(ee)},[vr]),er=(0,l.useCallback)(ee=>{yr.current=!1,j?.(ee)},[j]),O=P0({snapStep:A,min:rr,max:ur,step:Number(L),value:Number(N),onChange:wr,onKeyDown:P,onPointerDown:V,onPointerMove:or,onPointerUp:K,onPointerCancel:er}),cr=yr.current?lr.current:N,br=(0,l.useMemo)(()=>({...X,id:_,value:cr,min:rr,max:ur,step:L,disabled:M}),[X,_,cr,rr,ur,L,M]),{showTooltip:$r=!1,text:U,...W}=y,{toValue:Y,pctSigned:kr=0}=ip({value:Number(cr),min:Number(rr),max:Number(ur),step:Number(L)}),ir=(0,l.useMemo)(()=>({value:cr,toValue:ma(Y,Number(c)),pctSigned:ma(kr,Number(c)),min:rr,max:ur}),[c,ur,rr,kr,Y,cr]),dr=(0,l.useMemo)(()=>$r?z0({text:U,...ir}):void 0,[$r,U,ir]),q=(0,l.useMemo)(()=>Pr.onChangeHandler(O.onChange),[O.onChange]),pr=(0,l.useCallback)((ee,we)=>{const Je=String(ee.value??N??rr);D?.({...ee,value:Je},we)},[D,N,rr]),Rr=(0,l.useMemo)(()=>{const{deltaPerStep:ee,showValueInput:we=!1,...Je}=b;return x&&typeof x=="function"?x(ir):(v||we||p)&&(0,i.jsxs)(i.Fragment,{children:[v&&(0,i.jsx)(Pr.InputSuffix,{htmlFor:_,children:z0({text:v,...ir})}),we&&(0,i.jsx)(Co,{"arc-slider-number-input":"",layout:"hug",size:a,variant:t,inputProps:{onKeyDown:O.onKeyDown,onPointerDown:O.onPointerDown,onPointerMove:O.onPointerMove,onPointerUp:O.onPointerUp,onPointerCancel:O.onPointerCancel,...Je,...br,id:`${_}-text`,type:"number",appearance:"textfield",wheelControl:ee?{deltaPerStep:ee}:void 0,onChange:pr}}),p&&(0,i.jsx)(Pr.InputAction,{children:p})]})},[b,v,p,x,ir,_,a,t,br,O.onKeyDown,O.onPointerDown,O.onPointerMove,O.onPointerUp,O.onPointerCancel,pr]),Ir=(0,l.useMemo)(()=>!!o,[o]),Sr=(0,l.useMemo)(()=>Ir&&n==="top",[Ir,n]),Ur=(0,l.useMemo)(()=>Ir&&n==="inline",[Ir,n]),Fr=(0,l.useMemo)(()=>!!(Sr||d),[Sr,d]),Hr=(0,l.useMemo)(()=>!!(g||f),[g,f]),He=(0,l.useMemo)(()=>({...$,"--js\u2022v":String(Y)}),[$,Y]);return(0,i.jsxs)(Pr.Wrapper,{...k,"arc-slider":"","arc-input":"range",layout:e,size:a,style:He,children:[Fr&&(0,i.jsxs)(Pr.Header,{children:[Sr&&(0,i.jsx)(Pr.HeaderLabel,{htmlFor:_,children:o}),!!d&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.HeaderSlot,{children:d})]}),(0,i.jsxs)(Pr.InputBody,{children:[Ur&&(0,i.jsx)(Pr.InputPrefix,{htmlFor:_,children:o}),(0,i.jsxs)("span",{"arc-slider-surface":S??"","has-small-thumb":I?"":void 0,children:[(0,i.jsx)("label",{"arc-slider-thumb":"",ref:E,htmlFor:_,"aria-hidden":!0}),(0,i.jsx)(oo,{...W,isEnabled:$r&&!M,text:dr||String(cr),alternateAnchor:E,children:(0,i.jsx)("input",{...X,onKeyDown:O.onKeyDown,onPointerDown:O.onPointerDown,onPointerMove:O.onPointerMove,onPointerUp:O.onPointerUp,onPointerCancel:O.onPointerCancel,ref:w,id:_,"arc-slider-input":"","arc-input-type":"range",type:"range",value:cr,min:rr,max:ur,step:L,disabled:M,"aria-disabled":M,onChange:q})}),(T||C)&&(0,i.jsxs)("span",{"arc-slider-captions":"",children:[T&&(0,i.jsx)("label",{"arc-slider-caption":"min",htmlFor:_,children:T}),!!C&&(0,i.jsx)(Pr.Spacer,{}),C&&(0,i.jsx)("label",{"arc-slider-caption":"max",htmlFor:_,children:C})]})]}),Rr&&(0,i.jsx)("span",{"arc-slider-output":"",children:Rr})]}),Hr&&(0,i.jsxs)(Pr.Footer,{children:[(0,i.jsx)(Pr.FooterCaption,{children:g}),!!f&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.FooterSlot,{children:f})]})]})});R0.displayName="ArcSlider";const sd=R0;Cr("ArcSlider",Lx);const ld=({inputProps:r,snapStep:e,...a})=>{const{id:t,...o}=r;return(0,i.jsx)(sd,{"arc-color-slider":r.surfaceName,...a,snapStep:e,inputIdPrefix:t,inputProps:o})},Mx=196.6,j0="arc-color-solid-preview",dd=new WeakMap,ud=(r,e)=>{const a=r.getContext("2d",{alpha:!1});if(!a)return;const{width:t,height:o}=r;if(!t||!o)return;const n=`${t}:${o}:${e}`;if(dd.get(r)===n)return;const c=a.createImageData(t,o),d=c.data;let u=0;for(let h=0;h<o;h+=1){const p=1-(o<=1?0:h/(o-1)),v=Ue({h:e,s:0,v:p,a:1}),g=Ue({h:e,s:1,v:p,a:1}),{r:f,g:b,b:y}=v,{r:x,g:A,b:$}=g;for(let k=0;k<t;k+=1){const w=t<=1?0:k/(t-1);d[u++]=be(f+(x-f)*w),d[u++]=be(b+(A-b)*w),d[u++]=be(y+($-y)*w),d[u++]=255}}a.putImageData(c,0,0),dd.set(r,n)},Dx=(0,l.memo)(function({value:e,label:a,step:t=.01,stepLarge:o=.1,isDisabled:n=!1,showLabel:c=!1,labels:d,onChange:u}){const h=d??pe,p=a??h.colorField,v=Nr(void 0,"color-field"),g=(0,l.useRef)(null),f=(0,l.useRef)(null),b=(0,l.useRef)(!1),y=(0,l.useRef)(null),x=(0,l.useRef)(null),A=(0,l.useRef)(null),$=(0,l.useRef)(null),k=(0,l.useRef)(null),w=(0,l.useRef)(null),[E,_]=(0,l.useState)(!1),[T,C]=(0,l.useState)(null),[S,I]=(0,l.useState)(null),D=ar(T?.saturation??e.saturation,0,1),N=ar(T?.value??e.value,0,1);da(()=>{A.current==null&&C(null)},[e.hue,e.saturation,e.value]);const H=Math.round(D*100),Z=Math.round(N*100),L=(0,l.useMemo)(()=>{const V=e.hue;return typeof V=="number"&&Number.isFinite(V)?V:Mx},[e.hue]),M=(0,l.useMemo)(()=>Al(L),[L]),P=(0,l.useCallback)((V,K,er="commit")=>{u({hue:L,saturation:ar(V,0,1),value:ar(K,0,1)},er)},[L,u]),F=(0,l.useCallback)(()=>{b.current&&(b.current=!1,C(null),P(D,N,"commit"))},[P,D,N]),or=(0,l.useCallback)((V,K)=>{const er=ar(V,0,1),O=ar(K,0,1);b.current=!0,C({saturation:er,value:O}),P(er,O,"preview")},[P]),vr=(0,l.useCallback)(V=>{const K=f.current;if(!K||!b.current)return;const er=V.relatedTarget;er instanceof Node&&K.contains(er)||F()},[F]),j=(0,l.useCallback)((V,K,er,O="preview")=>{const cr=ar((V-er.left)/er.width,0,1),br=ar((K-er.top)/er.height,0,1),$r=cr,U=1-br;O==="preview"&&C({saturation:$r,value:U}),P($r,U,O)},[P]),X=(0,l.useCallback)(V=>{if(n)return;V.preventDefault(),V.stopPropagation(),b.current=!1;const{clientX:K,clientY:er,pointerId:O,currentTarget:cr}=V,br=cr.getBoundingClientRect();A.current=O,x.current=br,$.current={clientX:K,clientY:er},k.current=null,w.current=null,cr.focus(),cr.setPointerCapture(O),_(!0),j(K,er,br)},[n,j]),sr=(0,l.useCallback)(V=>{if(n)return;const{clientX:K,clientY:er,currentTarget:O,pointerId:cr}=V;if(A.current!==cr)return;const br=x.current??O.getBoundingClientRect();if(V.shiftKey){const $r=$.current;if($r){if(k.current===null){const kr=Math.abs(K-$r.clientX),ir=Math.abs(er-$r.clientY);k.current=kr>=ir?"s":"v",w.current={clientX:K,clientY:er}}const U=w.current??$r,W=k.current==="s"?K:U.clientX,Y=k.current==="v"?er:U.clientY;j(W,Y,br);return}}else k.current=null,w.current=null;j(K,er,br)},[n,j]),mr=(0,l.useCallback)(()=>{const V=A.current!=null;A.current=null,x.current=null,$.current=null,k.current=null,w.current=null,_(!1),C(null),b.current=!1,V&&P(D,N,"commit")},[P,D,N]),rr=(0,l.useCallback)(V=>{if(n)return;const K=V.shiftKey?o:t;let er=D,O=N;switch(V.key){case"ArrowLeft":er=D-K;break;case"ArrowRight":er=D+K;break;case"ArrowUp":O=N+K;break;case"ArrowDown":O=N-K;break;case"Home":er=0,O=1;break;case"End":er=1,O=0;break;default:return}V.preventDefault(),or(er,O)},[n,t,o,or,D,N]),ur=(0,l.useCallback)(V=>{if(n||!V.key.startsWith("Arrow"))return;const K=V.shiftKey?o:t,er=V.key==="ArrowLeft"||V.key==="ArrowDown"?-K:K;V.preventDefault(),or(D+er,N)},[n,t,o,or,D,N]),yr=(0,l.useCallback)(V=>{if(n||!V.key.startsWith("Arrow"))return;const K=V.shiftKey?o:t,er=V.key==="ArrowLeft"||V.key==="ArrowDown"?-K:K;V.preventDefault(),or(D,N+er)},[n,t,o,or,D,N]),lr=(0,l.useMemo)(()=>({"--js\u2022s":String(D),"--js\u2022v":String(1-N)}),[D,N]),wr=(0,l.useRef)(M);return wr.current=M,da(()=>{const V=g.current,K=y.current;if(!V||!K)return;const er=()=>{const U=V.getBoundingClientRect(),W=Math.max(1,Math.round(U.width)),Y=Math.max(1,Math.round(U.height)),kr=typeof window>"u"?1:Math.max(window.devicePixelRatio||1,1),ir=Math.max(1,Math.round(W*kr)),dr=Math.max(1,Math.round(Y*kr));K.width!==ir&&(K.width=ir),K.height!==dr&&(K.height=dr),ud(K,wr.current)};er();const O=new ResizeObserver(()=>{er()});O.observe(V);const cr=()=>{dd.delete(K),er()};K.addEventListener("contextrestored",cr);const br=V.closest("[arc-color-picker]"),$r=U=>{const{detail:W}=U,Y=W?.h;typeof Y!="number"||!Number.isFinite(Y)||ud(K,Al(Y))};return br?.addEventListener(j0,$r),()=>{O.disconnect(),K.removeEventListener("contextrestored",cr),br?.removeEventListener(j0,$r)}},[]),da(()=>{const V=y.current;V&&ud(V,M)},[M]),(0,i.jsxs)("div",{ref:f,"arc-color-field":"","is-disabled":n?"":void 0,"is-interacting":E?"":void 0,"sr-focus":S??void 0,onBlurCapture:vr,children:[c&&!!p&&(0,i.jsx)("label",{htmlFor:v,children:p}),(0,i.jsxs)("div",{id:v,ref:g,"arc-color-surface":"field",style:lr,tabIndex:n?-1:0,role:"application","aria-label":p,"aria-describedby":`${v}-readout`,onPointerDown:X,onPointerMove:sr,onPointerUp:mr,onPointerCancel:mr,onKeyDown:rr,children:[(0,i.jsx)("canvas",{ref:y,"arc-color-field-canvas":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-thumb":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"saturation","has-focus":S==="saturation"?"":void 0,"aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"value","has-focus":S==="value"?"":void 0,"aria-hidden":"true"})]}),(0,i.jsxs)("div",{"arc-color-field-sr":"","aria-hidden":!1,children:[(0,i.jsx)("div",{"arc-color-field-sr-slider":"saturation",role:"slider",tabIndex:n?-1:0,"aria-label":h.saturation,"aria-orientation":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":H,onKeyDown:ur,onFocus:()=>I("saturation"),onBlur:()=>I(null)}),(0,i.jsx)("div",{"arc-color-field-sr-slider":"value",role:"slider",tabIndex:n?-1:0,"aria-label":h.value,"aria-orientation":"vertical","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Z,onKeyDown:yr,onFocus:()=>I("value"),onBlur:()=>I(null)})]}),(0,i.jsx)("div",{id:`${v}-readout`,"arc-color-field-readout":"","arc-color-field-sr":"",children:h.colorFieldReadout(H,Z)})]})}),L0=({getValue:r,onStep:e,min:a,max:t,step:o,stepLarge:n})=>(0,l.useCallback)(c=>{jx(c,{getValue:r??(()=>Number(c.currentTarget.value)),onStep:e,min:a,max:t,step:o,stepLarge:n})},[r,e,a,t,o,n]),Ox=({hsv:r,draftValue:e,label:a,showLabel:t=!1,setIsEditing:o,commitDraft:n,setDraftValue:c,labels:d})=>{const h=a??(d??pe).opacity,p=Nr(void 0,"alpha-input"),{onFocus:v,onBlur:g,onKeyDown:f}=k0({commitDraft:n,setIsEditing:o,onRevert:()=>c(Sl(r.a))}),b=L0({min:0,max:100,getValue:()=>Number(e),onStep:A=>{const $=String(A);c($),n($)}}),y=_0(b,f),x=({value:A})=>{const $=String(A??1);c($),n($,{phase:"preview"})};return(0,i.jsx)(Co,{"arc-color-input":"alpha",size:"md",variant:"solid",inputSuffix:"%",headerLabel:t?h:void 0,inputProps:{id:p,"aria-label":h,placeholder:"...",value:e,type:"number",appearance:"textfield",min:0,max:100,step:1,onFocus:v,onBlur:g,onKeyDown:y,onChange:x}})},Nx=r=>Ge({...r,a:1},!1).replace(/^#/,""),M0={kind:"hex"},D0={kind:"alpha"},O0=(0,l.memo)(function({state:e,tools:a,isSimpleMode:t,expandHexShorthand:o,isUnsetColorInTools:n=!1,labels:c}){const d=c??pe,{interaction:u,isUnset:h,commitColor:p,commitUnset:v,previewColor:g,startPreview:f,endPreview:b,editFocus:y,editInput:x,editBlur:A}=e,$=e.displayHsv,k=e.model.hsv,w=(0,l.useRef)(k),E=(0,l.useMemo)(()=>Ue($),[$]),_=(0,l.useMemo)(()=>Nx(E),[E]),T=(0,l.useMemo)(()=>Sl($.a),[$.a]),C=Kl(M0,h?"":_,u),S=Kl(D0,h?"":T,u),I=(0,l.useMemo)(()=>!a||a.length===0?null:{colorField:a.includes("color-field"),hueSlider:a.includes("hue-slider"),alphaSlider:a.includes("alpha-slider"),sliderTools:a.includes("hue-slider")||a.includes("alpha-slider"),hexInput:a.includes("hex-input"),alphaInput:a.includes("alpha-input"),inputTools:a.includes("hex-input")||a.includes("alpha-input"),alphaTools:a.includes("alpha-slider")||a.includes("alpha-input"),eyeDropper:d0()&&a.includes("eye-dropper")},[a]),D=I?.alphaTools??!1,N=(0,l.useCallback)(V=>V?y(M0,h?"":_):A(),[y,A,_,h]),H=(0,l.useCallback)(V=>V?y(D0,h?"":T):A(),[y,A,T,h]),Z=(0,l.useCallback)((V,K)=>{const er=Tt(V??C);if(!rx(er,o??!1,D,K))return;const O=Ue(k),cr=bp(er,O,{shouldApplyParsedAlpha:K?.applyHexAlpha===!0}),br=K?.phase??"commit";if(!cr)return;if(gp(cr,O)&&br==="preview"){g(k);return}const $r=ui(cr,k.h);br==="preview"?g($r):p($r)},[C,o,D,k,g,p]),L=(0,l.useCallback)((V,K)=>{const er=vp(V??S);if(er==null)return;const O={...k,a:er};(K?.phase??"commit")==="preview"?g(O):p(O)},[S,k,g,p]),M=(0,l.useCallback)(()=>{b(),p(w.current)},[b,p]),{createInputProps:P}=c0({onCommit:M}),F=(0,l.useCallback)((V,K)=>{const er={...k,...V};w.current=er,u.status!=="previewing"&&f(K),g(er)},[k,u.status,f,g]),or=(0,l.useCallback)((V,K="commit")=>{const er={...k,s:V.saturation,v:V.value};K==="preview"?(w.current=er,u.status!=="previewing"&&f({kind:"color-field"}),g(er)):p(er)},[k,u.status,f,g,p]),vr=(0,l.useMemo)(()=>P(V=>F({h:ar(V,Ke.HUE_MIN,Ke.HUE_MAX)},{kind:"hue-slider"}),()=>{}),[P,F]),j=(0,l.useMemo)(()=>P(V=>F({a:ar(V/100,0,1)},{kind:"alpha-slider"}),()=>{}),[P,F]),X=(0,l.useCallback)(V=>p(fi(V,"#000000")),[p]),sr=ar(Math.round($.a*100),Ke.ALPHA_MIN,Ke.ALPHA_MAX),mr=(0,l.useMemo)(()=>({hue:$.h,saturation:$.s,value:$.v}),[$]),rr=(0,l.useMemo)(()=>({text:d.hueValue(Math.round($.h)),showTooltip:!0}),[$.h,d]),ur=(0,l.useMemo)(()=>({text:d.opacityValue(sr),showTooltip:!0}),[sr,d]);if(!I)return null;const yr=I.hexInput&&(0,i.jsx)(Ex,{hsv:$,draftValue:C,isUnset:h,setIsEditing:N,commitDraft:Z,setDraftValue:x,expandHexShorthand:o,hasAlphaTools:D,labels:c}),lr=n&&!t&&(0,i.jsx)(A0,{isUnset:h,onSelect:v,labels:d}),wr=I.eyeDropper&&(0,i.jsx)(ex,{onColorPicked:X,labels:c});return(0,i.jsx)("div",{"arc-color-tools":t?"simple":"solid","arc-color-picker-section":"tools",children:t?(0,i.jsxs)(i.Fragment,{children:[yr,wr,I.alphaSlider&&(0,i.jsx)(ld,{headerLabel:d.opacity,tooltipProps:ur,snapStep:Ke.ALPHA_SNAP_STEP,inputProps:{id:"alpha-slider",surfaceName:"alpha",min:Ke.ALPHA_MIN,value:sr,max:Ke.ALPHA_MAX,step:1,"aria-label":d.opacity,...j}})]}):(0,i.jsxs)(i.Fragment,{children:[I.colorField&&(0,i.jsx)(Dx,{value:mr,onChange:or,labels:c}),wr,I.sliderTools&&(0,i.jsxs)("div",{"arc-color-sliders":"",children:[I.hueSlider&&(0,i.jsx)(ld,{tooltipProps:rr,snapStep:Ke.HUE_SNAP_STEP,inputProps:{id:"hue-slider",surfaceName:"hue",min:Ke.HUE_MIN,value:$.h,max:Ke.HUE_MAX,step:1,"aria-label":d.hue,...vr}}),I.alphaSlider&&(0,i.jsx)(ld,{tooltipProps:ur,snapStep:Ke.ALPHA_SNAP_STEP,inputProps:{id:"alpha-slider",surfaceName:"alpha",min:Ke.ALPHA_MIN,value:sr,max:Ke.ALPHA_MAX,step:1,"aria-label":d.opacity,...j}})]}),lr,I.inputTools&&(0,i.jsxs)("div",{"arc-color-inputs":"",children:[yr,I.alphaInput&&(0,i.jsx)(Ox,{hsv:$,showLabel:!I.hexInput,draftValue:S,setIsEditing:H,commitDraft:L,setDraftValue:x,isUnset:h,labels:c})]})]})})}),$e=s`--arc•radio`,Bx=s`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${$e}•font•size: 1em;
      ${$e}•icon•size: 0.625em;
      ${$e}•size: 1.125em;
      ${$e}•gap: 0.5em;
    }

    &[data-size=md] {
      ${$e}•font•size: var(${m}•14);
      ${$e}•icon•size: var(${m}•10);
      ${$e}•size: var(${m}•18);
      ${$e}•gap: var(${m}•8);
    }

    &[data-size=sm] {
      ${$e}•font•size: var(${m}•12);
      ${$e}•icon•size: var(${m}•10);
      ${$e}•size: var(${m}•16);
      ${$e}•gap: var(${m}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${J}•border•radius: var(--arc-border-radius-circle);
    ${J}•size: var(${$e}•size);
    ${J}•icon•size: var(${$e}•icon•size);
    ${J}•width: var(${$e}•size);
    ${J}•height: var(${$e}•size);
    ${J}•translate: 0 var(${m}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${$e}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${$e}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${J}•color: transparent;
      ${J}•background: transparent;
      ${J}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${J}•background: var(--arc-color-bg-theme-subtle);
        ${J}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${J}•background: var(--arc-color-bg-disabled);
        ${J}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${J}•color: var(--arc-color-fg-on-theme-heavy);
      ${J}•background: var(--arc-color-bg-theme-heavy);
      ${J}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${J}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${J}•color: var(--arc-color-fg-on-theme-mid);
        ${J}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,Fx=gr(ia,["hug","fill"]),Hx=gr(ie,["inherit","md","sm"]),N0=({children:r,label:e,layout:a,size:t="md",useMask:o=!0,...n})=>{const{className:c,title:d,...u}=n,h={className:c,title:d},p=r??e,v=(0,i.jsx)(gn,{...u,type:"radio"}),g=o&&(0,i.jsxs)(Yc,{type:"radio",children:[v,(0,i.jsx)(zr,{icon:"fa-solid fa-circle-small arc-fw"})]}),f=!!p&&(0,i.jsxs)(St,{layout:a,children:[g||v,(0,i.jsx)(zt,{children:p})]});return(0,i.jsx)("span",{...h,"arc-radio":"","data-size":t,children:f||g||v})};Cr("ArcRadio",Bx);const jt=s`--arc•rb`,ue=s`${jt}•o`,Mn=s`${ue}•icon`,Dn=s`${ue}•text`,B0=s`${jt}•fs`,F0=s`${jt}•br`,hd=s`${jt}•di`,pd=s`${jt}•pd`,gd=s`${jt}•gp`,vd=s`${jt}•bg`,ht=s`${ue}•fg`,pt=s`${ue}•bg`,ji=s`${ue}•bc`,fd=s`${ue}•bw`,H0=s`${ue}•bs`,On=s`${ue}•br`,md=s`${ue}•fw`,bd=s`${ue}•ol`,$d=s`${ue}•ow`,V0=s`${ue}•oo`,U0=s`${ue}•lh`,zo={BAR:s`
    ${B0}: var(${m}•14); /* font size */
    ${F0}: var(${m}•8); /* border radius */

    &:is([data-layout=hug], :not([data-layout])) { /** @default */
      ${hd}: inline-flex;
    }

    &[data-layout=fill] {
      ${hd}: flex;
    }
  `,OPTIONS:s`
    ${ht}: var(--arc-color-fg-secondary);
    ${pt}: transparent;
    ${ji}: transparent;
    ${fd}: var(${m}•1);
    ${U0}: calc(var(${ue}•sz) - var(${fd}) * 2);
    ${$d}: var(${m}•2);
    ${V0}: 0;
  `,COMMON:s`
    ${vd}: var(--arc-color-bg-secondary);
    ${pd}: var(${m}•4);
    ${gd}: var(${m}•2);

    ${On}: var(${m}•6);

    /* Common sizes */
    &:is([data-size=lg], :not([data-size])) { /* @default */
      ${ue}•sz: var(${m}•32);
      ${Mn}•pd: var(${m}•8);
      ${Dn}•pd: var(${m}•12);
    }

    &[data-size=md] {
      ${ue}•sz: var(${m}•24);
      ${Mn}•pd: var(${m}•6);
      ${Dn}•pd: var(${m}•8);
    }
  `,COMMON_OPTION_STATES:s`
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${ht}: var(--arc-color-fg-on-hover-default);
        ${pt}: var(--arc-color-bg-hover-default);
      }
    }

    &:has(:checked) {
      ${ht}: var(--arc-color-mono-black);
      ${pt}: var(--arc-color-mono-white);
      ${md}: var(--arc-font-weight-500);

      &:not(:has(:disabled)) {
        ${H0}: var(--arc-shadow-sm);
      }
    }

    &:has(:disabled) {
      ${ht}: var(--arc-color-fg-disabled);

      &:has(:checked) {
        ${pt}: var(--arc-color-bg-disabled);
        ${ji}: var(--arc-color-border-disabled);
      }
    }

    &:has(:focus-within:focus-visible) {
      ${bd}: var(${$d}) solid var(--arc-color-border-focus);
    }
  `,SOLID:s`
    ${vd}: transparent;
    ${pd}: 0;
    ${gd}: var(${m}•4);

    ${On}: var(${m}•8);

    /* Solid sizes */
    &:is([data-size=lg], :not([data-size])) {
      ${ue}•sz: var(${m}•40);
      ${Mn}•pd: var(${m}•8);
      ${Dn}•pd: var(${m}•12);
    }

    &[data-size=md] {
      ${ue}•sz: var(${m}•32);
      ${Mn}•pd: var(${m}•6);
      ${Dn}•pd: var(${m}•10);
    }
  `,SOLID_OPTION_STATES:s`
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${ht}: var(--arc-color-fg-on-hover-default);
        ${pt}: var(--arc-color-bg-hover-subtle);
      }
    }

    &:has(:checked) {
      ${ht}: var(--arc-color-fg-primary);
      ${pt}: var(--arc-color-bg-secondary);
      ${md}: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${ht}: var(--arc-color-fg-disabled);

      &:has(:checked) {
        ${pt}: var(--arc-color-bg-disabled);
        ${ji}: var(--arc-color-border-disabled);
      }
    }

    &:has(:focus-within:focus-visible) {
      ${bd}: var(${$d}) solid var(--arc-color-border-focus);
    }
  `},Vx=s`
@layer arc-components {

  [arc-radio-bar] {
    ${zo.BAR}
    ${zo.OPTIONS}

    /* Inter-Component Communication -------------------------------• */
    --arc-label-opacity-disabled: 1; /* intrinsic disabled opacity not needed here; letting tokens handle it */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* VARIANTS ----------------------------------------------------• */
    &:is([data-variant=common], :not([data-variant])) { /* @default */
      ${zo.COMMON}

      [arc-radio-bar-option] {
        ${zo.COMMON_OPTION_STATES}
      }
    }

    &[data-variant=solid] {
      ${zo.SOLID}

      [arc-radio-bar-option] {
        ${zo.SOLID_OPTION_STATES}
      }
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    box-shadow: var(${H0}, none);
    border-radius: var(${On});
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${B0}));
    display: var(${hd});
    gap: var(${gd});
    border-radius: var(${F0});
    background: var(${vd});
    padding: var(${pd});
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${On});
      outline: var(${bd}, none);
      outline-offset: var(${V0});
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=radio] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${U0});
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${ue}•sz);
      min-width: var(${ue}•sz);

      border-radius: var(${On});
      border: var(${fd}) solid var(${ji});
      background: var(${pt});
      color: var(${ht});
      font-weight: var(${md}, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${Dn}•pd);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${Mn}•pd);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,Ux=gr(ia,["hug","fill"]),Gx=gr(ie,["lg","md"]),Kx=gr(Xr,["common","solid"]),yd=({children:r,label:e,icon:a,name:t,value:o,...n})=>{const c=r||(0,i.jsx)(le,{icon:a,text:e});return(0,i.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":n?.checked||void 0,children:(0,i.jsx)(N0,{...n,name:t,value:o,label:c,layout:"fill",useMask:!1,onChange:n.onChange??po})})},G0=({children:r,size:e="lg",layout:a="hug",variant:t="common",name:o,options:n,value:c,isDisabled:d,onChange:u,...h})=>{const p=Nr(o,"arc-radio-bar");return(0,i.jsx)("ul",{...h,"arc-radio-bar":"","data-size":e,"data-layout":a,"data-variant":t,"is-disabled":d?"":void 0,role:"radiogroup",children:n?n.map(({hidden:v,onChange:g,value:f,...b})=>v||f==null||f===""?null:(0,l.createElement)(yd,{...b,key:String(f),name:p,value:f,checked:c===f,disabled:d||b.disabled,onChange:g??u??po})):r})};Cr("ArcRadioBar",Vx);const Wx=(r,e)=>r==="gradient"?e.panelGradient:e.panelSolid,Xx=({canTogglePanels:r,panels:e,activePanel:a,setActivePanel:t,labels:o=pe})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)("div",{"arc-color-picker-section":"control",children:(0,i.jsx)(G0,{layout:"fill",size:"md",children:e.map(n=>(0,i.jsx)(yd,{name:"color-picker-panel",value:n,label:Wx(n,o),checked:n===a,onChange:()=>t(n)},n))})})}),{STOP_MIN:xd,STOP_MAX:wd}=nr,qx=(0,l.memo)(function({stop:e,stopIndex:a,sortedIndex:t,value:o,isEditing:n,isEditingColor:c,isAnyColorEditing:d,labels:u,onFocus:h,onInput:p,onCommit:v,onRevert:g,onOpenColorEdit:f,onRegisterAnchor:b,onInsertStopAt:y,onDelete:x}){const A=u??pe,$=t+1,k=Nr(void 0,"gradient-stop-row-anchor"),w=Nr(void 0,"gradient-stop-input"),E=(0,l.useRef)(null),_=(0,l.useRef)(t),T=L0({min:xd,max:wd,getValue:()=>Number(o),onStep:H=>{const Z=String(H);p(Z),v(Z,!1)}}),C=(0,l.useCallback)(H=>{if(H.key==="Enter"){H.preventDefault(),v(void 0,!0),H.currentTarget.blur();return}H.key==="Escape"&&(H.preventDefault(),g(),H.currentTarget.blur())},[v,g]),S=_0(T,C),I=(0,l.useCallback)(()=>v(void 0,!0),[v]),D=(0,l.useCallback)(({value:H})=>p(String(H??o)),[p,o]);(0,l.useLayoutEffect)(()=>{if(!n){_.current=t;return}if(_.current===t)return;_.current=t;const H=E.current;if(!H)return;const{selectionStart:Z,selectionEnd:L}=H;H.focus({preventScroll:!0}),Z!=null&&L!=null&&H.setSelectionRange(Z,L)},[n,t]),(0,l.useLayoutEffect)(()=>{b?.(a,k)},[b,k,a]);const N=n?o:String(ar(e.at,xd,wd));return(0,i.jsxs)("li",{"arc-gradient-stop-row":"",id:k,"is-editing-color":c?"":void 0,children:[t>0&&(0,i.jsx)("span",{"arc-gradient-stop-insert":"",children:(0,i.jsx)(Mr,{_isCustom:!0,icon:"fa-solid fa-plus fa-2xs",onClick:()=>y(t),tooltip:A.insertColorStop,isDisabled:d})}),(0,i.jsx)(Pn,{kind:"gradient-stop",color:e.color,onClick:()=>f(a,k)}),(0,i.jsx)(Co,{ref:E,"arc-color-input":"stop",inputProps:{type:"number",appearance:"textfield",id:w,"aria-label":A.stopPosition($),value:N,min:xd,max:wd,step:1,onFocus:h,onBlur:I,onKeyDown:S,onChange:D,wheelControl:{deltaPerStep:24}},size:"md",variant:"solid",inputSuffix:"%"}),(0,i.jsx)("span",{"row-spacer":""}),(0,i.jsx)(Mr,{layout:"icon",size:"sm",icon:"fa-regular fa-trash",variant:"tertiary",tooltip:A.removeColorStop,onClick:()=>x(a),isDisabled:d})]})}),K0=({children:r,sectionName:e,content:a,...t})=>(0,i.jsxs)("header",{"arc-color-section-header":e??"",...t,children:[(0,i.jsx)(le,{...typeof a=="object"?a:{text:a},size:"sm",isStrong:!0}),r]}),{STOP_MIN:kd,STOP_MAX:Ad}=nr,Yx=r=>({kind:"stop-at",stopId:r}),Zx=({state:r,isEmpty:e=!1,onAddGradient:a,editFallbackColor:t="#000000",format:o=Ze.format,labels:n})=>{const c=n??pe,{interaction:d,commitGradient:u,commitUnset:h,previewGradient:p,editFocus:v,editInput:g,editBlur:f}=r,b=r.displayGradient,y=(0,l.useMemo)(()=>b.stops??[],[b.stops]),x=(0,l.useMemo)(()=>ba(y),[y]),[A,$]=(0,l.useState)([]),k=(0,l.useRef)(0),w=(0,l.useCallback)(()=>(k.current+=1,`gradient-stop-${k.current}`),[]),E=Nr(void 0,"gradient-stop-edit-popover"),[_,T]=(0,l.useState)(null),C=(0,l.useRef)(null),[S,I]=(0,l.useState)(),[D,N]=(0,l.useState)(t),[H,Z]=(0,l.useState)(!1),[L,M]=(0,l.useState)(!1),[P,F]=(0,l.useState)(),[or,vr]=(0,l.useState)(0),j=(0,l.useRef)(!1),X=(0,l.useRef)(null),sr=(0,l.useCallback)(()=>ha.handlePopover?.(E,"show"),[E]),mr=(0,l.useCallback)(()=>ha.handlePopover?.(E,"hide"),[E]);(0,l.useEffect)(()=>{$(q=>q.length===y.length?q:q.length<y.length?[...q,...Array.from({length:y.length-q.length},()=>w())]:q.slice(0,y.length))},[w,y.length]);const rr=(0,l.useCallback)(q=>u({...b,stops:q}),[u,b]),ur=(0,l.useCallback)(q=>{const pr=ba(q);$(Rr=>pr.map(Ir=>Rr[Ir.index]??w())),rr(pr.map(Rr=>Rr.stop))},[w,rr]),yr=(0,l.useCallback)(q=>d.status==="editingText"&&d.field.kind==="stop-at"&&d.field.stopId===q?d.draft:void 0,[d]),lr=(0,l.useCallback)((q,pr,Rr,Ir,Sr,Ur)=>{const Fr=y[q];if(!Fr){f();return}const Hr=Rr??yr(pr)??String(Fr.at),He=Number(Hr);if(Number.isNaN(He)){f();return}const ee=ar(He,kd,Ad),we=Ir||Dl(Sr,Ur,ee),Je={...Fr,at:ee},et=y.map((Qe,Lo)=>Lo===q?Je:Qe);ee!==Fr.at?we?ur(et):rr(et):we&&ur(y),f()},[y,yr,f,ur,rr]),wr=(0,l.useCallback)((q,pr)=>{const Rr=y[q],Ir=Number(pr);if(!Rr||Number.isNaN(Ir))return;const Sr=ar(Ir,kd,Ad),Ur=y.map((Fr,Hr)=>Hr===q?{...Fr,at:Sr}:Fr);p({...b,stops:Ur})},[y,b,p]),V=(0,l.useCallback)((q={kind:"append"})=>{const pr=y.length,Rr=q.kind==="append"?Lp(y):[...y,jp(y,q)];X.current=pr,$(Ir=>[...Ir,w()]),rr(Rr)},[w,y,rr]),K=(0,l.useCallback)(q=>{C.current===q&&(mr(),C.current=null,T(null),Z(!1));const pr=y.filter((Rr,Ir)=>Ir!==q);if($(Rr=>Rr.filter((Ir,Sr)=>Sr!==q)),pr.length===0){h();return}rr(pr)},[h,y,mr,rr]),er=(0,l.useCallback)(()=>{y.length<2||ur(Pp(y))},[ur,y]),O=(0,l.useCallback)(q=>V({kind:"between",sortedIndex:q}),[V]),cr=(0,l.useCallback)((q,pr,Rr)=>{if(!y[q])return;const Sr=y.map((Ur,Fr)=>Fr===q?{...Ur,color:pr}:Ur);Rr==="preview"?p({...b,stops:Sr}):rr(Sr)},[y,b,p,rr]),br=(0,l.useCallback)(()=>{mr(),C.current=null,T(null),Z(!1)},[mr]),$r=(0,l.useCallback)((q,pr)=>{const Rr=y[q];if(!Rr)return;const Ir=C.current!=null;C.current=q,M(!0),T(q),I(pr),N(Rr.color),Ir?vr(Sr=>Sr+1):(j.current=!0,F(pr))},[y]),U=(0,l.useCallback)((q,pr)=>{if(C.current===q){br();return}$r(q,pr)},[br,$r]),W=(0,l.useCallback)((q,pr)=>{X.current!==q||!y[q]||(X.current=null,$r(q,pr))},[y,$r]);(0,l.useEffect)(()=>{!j.current||_==null||!S||(j.current=!1,sr())},[S,_,sr]);const Y=(0,l.useCallback)(q=>{const pr=q?.newState==="open";Z(pr),pr||(C.current=null,T(null))},[]),kr=(0,l.useCallback)(q=>{q.key!=="Escape"||!H||br()},[br,H]),ir=(0,l.useCallback)(q=>{N(q);const pr=C.current;pr!=null&&cr(pr,q,"commit")},[cr]),dr=(0,l.useCallback)(q=>{op(q)&&ir(q.color.value)},[ir]);return e||y.length===0?(0,i.jsx)("div",{"arc-gradient-stops":"",children:(0,i.jsx)(Mr,{"arc-gradient-add":"",icon:"fa-regular fa-plus",text:c.addGradient,variant:"neutral",hierarchy:"tertiary",size:"sm",onClick:a})}):(0,i.jsxs)("div",{"arc-gradient-stops":"",children:[(0,i.jsx)(K0,{content:c.gradientStops,sectionName:"stops",children:(0,i.jsxs)(Pt,{children:[(0,i.jsx)(Mr,{"arc-gradient-stop-distribute":"",layout:"icon",size:"sm",icon:"fa-regular fa-arrows-left-right-to-line",variant:"tertiary",onClick:er,tooltip:c.distributeColorStops,isDisabled:y.length<2}),(0,i.jsx)(Mr,{"arc-gradient-stop-add":"",layout:"icon",size:"sm",icon:"fa-regular fa-plus",variant:"tertiary",onClick:()=>V({kind:"append"}),tooltip:c.addColorStop,isDisabled:_!=null})]})}),(0,i.jsx)("ul",{"arc-gradient-stop-list":"",children:x.map((q,pr)=>{const Rr=A[q.index]??`gradient-stop-row-${q.index}`,Ir=Yx(Rr),Sr=String(ar(q.stop.at,kd,Ad)),Ur=x[pr-1]?.stop.at,Fr=x[pr+1]?.stop.at;return(0,i.jsx)(qx,{stop:q.stop,stopIndex:q.index,sortedIndex:pr,value:Kl(Ir,Sr,d),isEditing:Vy(d,Ir),isEditingColor:_===q.index,isAnyColorEditing:_!=null,onFocus:()=>v(Ir,Sr),onInput:Hr=>{g(Hr),wr(q.index,Hr)},onCommit:(Hr,He=!1)=>lr(q.index,Rr,Hr,He,Ur,Fr),onRevert:f,onOpenColorEdit:U,onRegisterAnchor:W,onInsertStopAt:O,onDelete:K,labels:n},Rr)})}),L&&(0,i.jsx)(ja,{mode:"edit",heading:"",panels:["solid"],color:D,syncKey:or,format:o,labels:n,onPreviewColor:q=>{const pr=C.current;pr!=null&&cr(pr,q.value,"preview")},onChange:dr,popoverProps:{id:E,popover:"manual",anchorAt:"left-center",alternateAnchorId:S,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,offset:12,onToggle:Y,onKeyDown:kr,footerSlot:(0,i.jsxs)(Pt,{"arc-color-picker-button-bar":"",children:[(0,i.jsx)("span",{"arc-button-bar-spacer":""}),(0,i.jsx)(Mr,{"arc-color-picker-button":"save",text:c.done,size:"sm",onClick:br})]})}},P)]})},W0=r=>{const e=(0,l.useRef)(null),a=(0,l.useRef)(null),t=(0,l.useRef)(r);t.current=r;const o=(0,l.useCallback)(()=>{e.current=null;const h=a.current;a.current=null,h&&t.current(h.value)},[]),n=(0,l.useCallback)(h=>{a.current={value:h},e.current==null&&(e.current=requestAnimationFrame(o))},[o]),c=(0,l.useCallback)(()=>{e.current!=null&&(cancelAnimationFrame(e.current),e.current=null),a.current=null},[]),d=(0,l.useCallback)(()=>{e.current!=null&&(cancelAnimationFrame(e.current),o())},[o]),u=(0,l.useCallback)(()=>e.current!=null,[]);return(0,l.useEffect)(()=>c,[c]),{schedule:n,cancel:c,flush:d,hasPending:u}},X0=.05,q0=.5,Jx=4,Qx=(0,l.memo)(function({entry:e,sortedIndex:a,angle:t,isDragging:o,stopPositionLabel:n,onAtChange:c,onDragStart:d}){const{stop:u,index:h}=e,p=ar(u.at,nr.STOP_MIN,nr.STOP_MAX),v=(0,l.useCallback)(f=>{const b=Hp(f.key,t);if(b==null)return;f.preventDefault();const y=ar(p+b,nr.STOP_MIN,nr.STOP_MAX);c(h,y,!0)},[t,p,c,h]),g=(0,l.useCallback)(f=>{f.preventDefault(),f.stopPropagation(),d(h,f.pointerId)},[d,h]);return(0,i.jsx)("div",{"arc-gradient-stop-thumb":"",role:"slider",tabIndex:0,"aria-valuemin":nr.STOP_MIN,"aria-valuemax":nr.STOP_MAX,"aria-valuenow":Math.round(p),"aria-label":n(a+1),"is-dragging":o?"":void 0,style:{left:`${p}%`,background:String(u.color),zIndex:a+1},onPointerDown:g,onKeyDown:v})}),Y0=(r,e)=>{const a=r.getBoundingClientRect(),t=r.offsetWidth/2;return{centerX:a.left+a.width/2,centerY:a.top+a.height/2,axisHalfLength:t,axisAngleDeg:e-90}},rw=({stops:r,angle:e=nr.ANGLE,isUnset:a=!1,onUpdateStops:t,onUpdateAngle:o,labels:n})=>{const c=n??pe,d=(0,l.useRef)(null),u=(0,l.useRef)(null),h=(0,l.useRef)(null),p=(0,l.useRef)(null),v=(0,l.useRef)(null),g=(0,l.useRef)(null),f=(0,l.useRef)(null),b=(0,l.useRef)(null),[y,x]=(0,l.useState)(null),[A,$]=(0,l.useState)(null),[k,w]=(0,l.useState)(null),[E,_]=(0,l.useState)(!1),T=A??e,C=(0,l.useMemo)(()=>y??r??[],[y,r]),S=(0,l.useMemo)(()=>ba(C),[C]),I=(0,l.useMemo)(()=>{const U=C.length>0?C:nr.STOPS;return y?It(U,nr.STOP_MIN,nr.STOP_MAX):U},[y,C]),D=(0,l.useMemo)(()=>({background:a?"var(--arc-color-bg-mono)":Op({stops:I,angle:nr.ANGLE}),rotate:`${T-90}deg`}),[I,T,a]),N=(0,l.useCallback)(U=>{t?.(U,"preview")},[t]),H=(0,l.useCallback)((U,W=!1)=>{const Y=It(U,nr.STOP_MIN,nr.STOP_MAX);t?.(W?Tp(Y):Y,"commit")},[t]),Z=(0,l.useCallback)(U=>{o?.(U,"preview")},[o]),L=(0,l.useCallback)(U=>{o?.(U,"commit")},[o]),M=(0,l.useCallback)((U,W,Y=!1)=>{const kr=r??[],ir=kr[U];if(!ir||Math.abs(ir.at-W)<X0)return;const dr=kr.map((q,pr)=>pr===U?{...q,at:W}:q);H(dr,Y)},[H,r]),P=(0,l.useCallback)((U,W,Y)=>{const kr=h.current,ir=d.current;if(!ir)return null;const dr=kr??Y0(ir,T);return Np(U,W,dr.centerX,dr.centerY,dr.axisAngleDeg,dr.axisHalfLength,nr.STOP_MIN,nr.STOP_MAX,Y)},[T]),F=(0,l.useCallback)(U=>{if(!Number.isFinite(U))return;const W=Math.round(U),Y=g.current??e;Math.abs(Y-W)<q0||(g.current=W,$(W),(b.current==null||Math.abs(b.current-W)>=q0)&&(b.current=W,Z(W)))},[e,Z]),or=(0,l.useCallback)((U,W)=>{const Y=v.current??r??[],kr=Y[U];if(!kr||Math.abs(kr.at-W)<X0)return;const ir=Y.map((Rr,Ir)=>Ir===U?{...Rr,at:W}:Rr);v.current=ir,x(ir);const dr=It(ir,nr.STOP_MIN,nr.STOP_MAX),q=f.current,pr=T;(!q||!mi({stops:q,angle:pr},{stops:dr,angle:pr}))&&(f.current=dr,N(dr))},[N,T,r]),vr=(0,l.useCallback)(U=>{const W=u.current;if(W==null)return;const Y=P(U.clientX,U.clientY,!1);Y!=null&&or(W,Y)},[or,P]),{schedule:j,cancel:X,flush:sr}=W0(vr),mr=(0,l.useCallback)(U=>{const W=p.current;if(!W||!W.hasExceededThreshold)return;const Y=Nl(U.clientX,U.clientY,W.centerX,W.centerY),kr=Bp(W.startAngle,W.startPointerAngleDeg,Y,nr.ANGLE_MIN,nr.ANGLE_MAX);F(U.shiftKey?Fp(kr):kr)},[F]),{schedule:rr,cancel:ur,flush:yr}=W0(mr),lr=(0,l.useCallback)((U,W)=>{const Y=d.current;Y&&(Y.setPointerCapture(W),u.current=U,h.current=Y0(Y,T),v.current=[...r??[]],f.current=It(v.current,nr.STOP_MIN,nr.STOP_MAX),x(v.current),w(U))},[T,r]),wr=(0,l.useCallback)((U,W)=>{if(S.length===0)return;const Y=P(U,W,!0);if(Y==null)return;const kr=S.reduce((ir,dr)=>{const q=Math.abs(dr.stop.at-Y);return!ir||q<ir.distance?{stopIndex:dr.index,distance:q}:ir},null);kr&&M(kr.stopIndex,Y,!0)},[M,P,S]),V=(0,l.useCallback)(()=>{const U=p.current;if(U?.hasExceededThreshold&&yr(),ur(),p.current=null,!!U){if(U.hasExceededThreshold){const W=g.current;W!=null&&L(W)}else wr(U.startClientX,U.startClientY);g.current=null,b.current=null,$(null),_(!1)}},[ur,L,wr,yr]),K=(0,l.useCallback)(()=>{sr(),X();const U=v.current;U&&H(U,!0),u.current=null,h.current=null,v.current=null,f.current=null,x(null),w(null)},[X,H,sr]),er=(0,l.useCallback)(U=>{if(!o){wr(U.clientX,U.clientY);return}const W=d.current;if(!W)return;const Y=W.getBoundingClientRect(),kr=Y.left+Y.width/2,ir=Y.top+Y.height/2;W.setPointerCapture(U.pointerId);const dr=Number.isFinite(U.clientX)?U.clientX:0,q=Number.isFinite(U.clientY)?U.clientY:0;p.current={pointerId:U.pointerId,startClientX:dr,startClientY:q,lastClientX:dr,lastClientY:q,startPointerAngleDeg:Nl(dr,q,kr,ir),startAngle:e,centerX:kr,centerY:ir,hasExceededThreshold:!1}},[e,wr,o]),O=(0,l.useCallback)(U=>{if(u.current!=null){j({clientX:U.clientX,clientY:U.clientY});return}const W=p.current;if(!W)return;Number.isFinite(U.clientX)&&Number.isFinite(U.clientY)?(W.lastClientX=U.clientX,W.lastClientY=U.clientY):(W.lastClientX+=U.movementX??0,W.lastClientY+=U.movementY??0);const{lastClientX:Y,lastClientY:kr}=W,ir=Math.hypot(Y-W.startClientX,kr-W.startClientY);if(!W.hasExceededThreshold){if(ir<Jx)return;W.hasExceededThreshold=!0,_(!0)}rr({clientX:Y,clientY:kr,shiftKey:U.shiftKey})},[j,rr]),cr=(0,l.useCallback)(()=>{if(u.current!=null){K();return}V()},[K,V]),br=(0,l.useCallback)(()=>{if(u.current!=null){K();return}V()},[K,V]),$r=(0,l.useCallback)(()=>{u.current!=null&&K()},[K]);return(0,i.jsxs)("div",{"arc-gradient-field-wrapper":"",role:"group","aria-label":c.gradientStops,children:[(0,i.jsxs)("small",{"arc-gradient-field-angle-output":"","aria-hidden":"true",children:[T,"\xB0"]}),(0,i.jsx)("div",{ref:d,"arc-gradient-field":"","is-unset":a?"":void 0,"is-dragging":k!=null||E?"":void 0,"is-rotating":E?"":void 0,style:D,onPointerDown:er,onPointerMove:O,onPointerUp:cr,onPointerCancel:br,onLostPointerCapture:$r,children:S.map((U,W)=>(0,i.jsx)(Qx,{entry:U,sortedIndex:W,angle:T,isDragging:k===U.index,stopPositionLabel:c.stopPosition,onAtChange:M,onDragStart:lr},`gradient-stop-thumb-${U.index}`))})]})},{ANGLE_MIN:ew,ANGLE_MAX:aw,ANGLE_SNAP_STEP:tw}=nr,ow=({inputProps:r,labels:e,...a})=>{const{id:t="angle-slider",min:o=ew,max:n=aw,step:c=1,value:d,onChange:u,...h}=r,p=e??pe,v=Nr(void 0,`${t}-label`),g=(0,l.useCallback)(f=>{if(f.shiftKey||!cd(f.key))return;const b=id(f.key,f,{step:Number(c)});if(b==null)return;f.preventDefault();const y=E0(Number(d),b,{min:Number(o),max:Number(n)}),x={value:String(y)};u?.(x,f)},[o,n,c,d,u]);return(0,i.jsxs)("div",{"arc-gradient-angle-slider":"",children:[(0,i.jsx)(K0,{sectionName:"angle",content:p.angle,id:v}),(0,i.jsx)(sd,{"arc-angle-slider":"",...a,layout:"fill",size:"md",snapStep:tw,inputIdPrefix:t,inputProps:{...h,min:o,max:n,step:c,value:d,onChange:u,onKeyDown:g,"aria-labelledby":v},valueInputProps:{showValueInput:!0},tooltipProps:{showTooltip:!0,text:"{#value}\xB0"}})]})},nw="gradient-angle-presets",cw=(r,e)=>nr.ANGLE_PRESETS.map(a=>({stops:r,angle:a,name:e(a)})),iw=({gradient:r,onSelectAngle:e,labels:a})=>{const t=a??pe,o=r?.angle??nr.ANGLE,n=(0,l.useMemo)(()=>cw(r?.stops??nr.STOPS,t.gradientAngleOption),[r?.stops,t.gradientAngleOption]),c=(0,l.useMemo)(()=>n.find(u=>u.angle===o),[n,o]),d=u=>{tp(u)&&e?.(u.gradientData.angle)};return(0,i.jsx)(Rn,{"arc-gradient-presets":"",id:nw,colors:n,activeGradient:c,showHeading:!1,setAriaLabel:t.gradientAngle,onSwatchClick:d,labels:a})},{ANGLE_MIN:Z0,ANGLE_MAX:J0,ANGLE:sw}=nr,lw=({state:r,tools:e,isUnset:a=!1,onAddGradient:t,editFallbackColor:o,format:n,labels:c})=>{const{commitGradient:d,previewGradient:u,startPreview:h,endPreview:p}=r,v=r.displayGradient,g=v.angle??sw,f=(0,l.useRef)(g),[b,y]=(0,l.useState)(null),x=(0,l.useCallback)((C,S="commit")=>{const I={...v,...C};S==="preview"?u(I):d(I)},[v,u,d]),A=(0,l.useCallback)(()=>{p(),x({angle:f.current},"commit")},[p,x]),{createInputProps:$}=c0({onCommit:A}),k=(0,l.useMemo)(()=>$(C=>{const S=ar(C,Z0,J0);f.current=S,y(S),h({kind:"angle-slider"}),x({angle:S},"preview")},()=>y(null)),[$,x,h]),w=(0,l.useMemo)(()=>!e||e.length===0?[...si]:[...e],[e]),E=(0,l.useMemo)(()=>{const C={gradientField:w.includes("gradient-field"),gradientStops:w.includes("gradient-stops"),angleSlider:w.includes("angle-slider"),anglePresets:w.includes("angle-presets")};return C.gradientField||C.gradientStops||C.angleSlider||C.anglePresets?C:null},[w]);if(!E)return null;const _=a||(v.stops?.length??0)===0,T=_?[]:v.stops??[];return(0,i.jsxs)("div",{"arc-color-tools":"gradient","arc-color-picker-section":"tools",children:[E.gradientField&&(0,i.jsx)(rw,{stops:T,angle:g,isUnset:_,onUpdateStops:(C,S)=>x({stops:C},S??"commit"),onUpdateAngle:(C,S)=>x({angle:C},S??"commit"),labels:c}),E.gradientStops&&(0,i.jsx)(Zx,{state:r,isEmpty:_,onAddGradient:t,editFallbackColor:o,format:n,labels:c}),E.angleSlider&&(0,i.jsx)(ow,{labels:c,inputProps:{surfaceName:"angle",min:Z0,max:J0,value:b??g,...k}}),E.anglePresets&&(0,i.jsx)(iw,{gradient:{stops:T,angle:g},onSelectAngle:C=>x({angle:C}),labels:c??pe})]})},Q0=({heading:r,showGoBack:e,goBackProps:a,...t})=>(0,i.jsx)(ha,{...t,variant:"common","arc-color-picker-wrapper":"",showGoBack:e,goBackProps:a,headerSlot:!!r&&(0,i.jsx)(le,{...typeof r=="string"?{text:r}:r,"arc-color-picker-heading":"",overflow:"truncate",isStrong:!0})});Q0.displayName="ArcColorPickerWrapper";const dw=(r,e)=>{switch(e.type){case"SET_COLOR":return{...r,hsv:e.hsv,selectedName:e.name,isUnset:!1};case"SET_UNSET":return r.isUnset?r:{...r,isUnset:!0,selectedName:void 0};case"SET_GRADIENT":return e.exitUnset&&r.isUnset?{...r,gradient:e.gradient,isUnset:!1}:{...r,gradient:e.gradient};case"SET_PANEL":return r.panel===e.panel?r:{...r,panel:e.panel};case"SET_NAME":return r.selectedName===e.name?r:{...r,selectedName:e.name};default:return r}},Nn=({color:r,name:e,gradient:a,isUnset:t=!1,format:o="auto",activePanel:n="solid"})=>{const c=vi(r)?r:Sn(r).color,d=e??(vi(r)||typeof r=="string"?void 0:r.name),u=Pa(c,{format:o}),h=d?{...u,name:d}:u,p=xo(a,{fallbackColor:h.value}),v=n==="gradient"?p.value:h.value;return{activePanel:n,value:t?"":v,isUnset:t?!0:void 0,color:h,gradient:p}},uw={h:0,s:0,v:0,a:1},hw={stops:[],angle:nr.ANGLE},rg=r=>r??hw,Li=r=>r==null?"":Sn(r).color,eg=(r,e)=>{const a=Zr(Li(r));return a?ui(a,e):null},pw=({color:r,gradient:e,panel:a,format:t,syncKey:o,onChange:n,onSnapshotChange:c,onPreviewColor:d,onPreviewGradient:u})=>{const[h,p]=(0,l.useReducer)(dw,void 0,()=>({hsv:eg(r)??uw,isUnset:a==="gradient"?e==null:Li(r)==="",gradient:rg(e),panel:a})),[v,g]=(0,l.useReducer)(Hy,yi),[f,b]=(0,l.useState)(null),[y,x]=(0,l.useState)(null),A=(0,l.useRef)(v);A.current=v;const $=(0,l.useRef)(h);$.current=h;const k=(0,l.useRef)(o),w=(0,l.useRef)(Li(r)),E=(0,l.useRef)(rg(e));da(()=>{const P=Li(r),F=a==="gradient"?e==null:P==="",or=o!==k.current;k.current=o;const vr=P!==w.current;w.current=P;const j=e!=null&&!mi(e,E.current);if(e!=null&&(E.current=e),!or&&!vr&&!j)return;const X=or||A.current.status==="idle";if(or&&(g({type:"EXTERNAL_ADOPT"}),b(null),x(null)),!!X){if(F&&p({type:"SET_UNSET"}),(or||vr)&&!F){const sr=eg(r,$.current.hsv.h);sr&&p({type:"SET_COLOR",hsv:sr})}(or||j)&&e!=null&&p({type:"SET_GRADIENT",gradient:e,exitUnset:j})}},[r,e,o,a]);const _=(0,l.useCallback)((P,F)=>{if(!(!n&&!c))try{const or={...Pa(P,{format:t}),name:F};c&&c(Nn({color:P,name:F,gradient:$.current.gradient,format:t,activePanel:"solid"})),n?.({activePanel:"solid",color:or})}catch{}},[t,n,c]),T=(0,l.useCallback)((P,F)=>{p({type:"SET_COLOR",hsv:P,name:F}),b(null),$.current={...$.current,hsv:P,selectedName:F,isUnset:!1};try{w.current=Pa(P,{format:t}).value}catch{}_(P,F)},[_,t]),C=(0,l.useCallback)(()=>{if(p({type:"SET_UNSET"}),b(null),$.current={...$.current,isUnset:!0,selectedName:void 0},w.current="",!(!n&&!c))try{c&&c(Nn({color:$.current.hsv,gradient:$.current.gradient,isUnset:!0,format:t,activePanel:"solid"})),n?.({activePanel:"none",color:null,gradient:null})}catch{}},[t,n,c]),S=(0,l.useCallback)(P=>{if(b(P),!!d)try{d(Pa(P,{format:t}))}catch{}},[t,d]),I=(0,l.useCallback)(P=>{if(p({type:"SET_GRADIENT",gradient:P,exitUnset:!0}),x(null),$.current={...$.current,gradient:P,isUnset:!1},E.current=P,!(!n&&!c))try{const F=Ia(Ue($.current.hsv)),or=xo(P,{fallbackColor:F});c&&c(Nn({color:$.current.hsv,gradient:P,format:t,activePanel:"gradient"})),n?.({activePanel:"gradient",gradient:or})}catch{}},[t,n,c]),D=(0,l.useCallback)(P=>{if(x(P),!!u)try{const F=Ia(Ue($.current.hsv));u(xo(P,{fallbackColor:F}))}catch{}},[u]),N=(0,l.useCallback)(P=>g({type:"PREVIEW_START",source:P}),[]),H=(0,l.useCallback)(()=>{g({type:"PREVIEW_END"}),b(null),x(null)},[]),Z=(0,l.useCallback)((P,F)=>g({type:"EDIT_FOCUS",field:P,draft:F}),[]),L=(0,l.useCallback)(P=>g({type:"EDIT_INPUT",draft:P}),[]),M=(0,l.useCallback)(()=>g({type:"EDIT_BLUR"}),[]);return{model:h,interaction:v,displayHsv:f??h.hsv,displayGradient:y??h.gradient,isUnset:h.isUnset&&f===null&&y===null,commitColor:T,commitUnset:C,commitGradient:I,previewColor:S,previewGradient:D,startPreview:N,endPreview:H,editFocus:Z,editInput:L,editBlur:M}},Ze={mode:"normal",color:"#05aff0",format:"auto",heading:pe.heading,palettes:[]},gw={stops:nr.STOPS,angle:nr.ANGLE},vw=["solid","gradient"],fw={icon:"fa-regular fa-paint-brush",text:pe.colorPicker,layout:"icon",shape:"round",size:"md"},Cd=(r,e)=>r.length===0||r.includes(e)?e:r[0],mw=r=>{const e=Ue(r);return{"--js\u2022hue":`hsl(${r.h} 100% 50%)`,"--js\u2022hex":Ge({...e,a:1},!1),"--js\u2022rgb":Ia(e)}},ja=({children:r,color:e,defaultColor:a,unsetColorPlacement:t="none",gradient:o,format:n=Ze.format,mode:c=Ze.mode,heading:d=Ze.heading,tools:u,omitTools:h,isInline:p=!1,showGoBack:v=!1,goBackProps:g,canTogglePanels:f=!1,panels:b=vw,activePanel:y="solid",onUpdatePanel:x,palettes:A,popoverProps:$,expandHexShorthand:k,syncKey:w,labels:E,onChange:_,onSnapshotChange:T,onPreviewColor:C,onPreviewGradient:S,onAddColor:I,onRemoveColor:D,...N})=>{const H=(0,l.useMemo)(()=>li(E),[E]),Z=c==="simple",L=Nr($?.id??void 0,"color-picker"),M=(0,l.useRef)(null),[P,F]=(0,l.useState)(()=>Cd(b,y)),or=e===void 0?a??null:e,j=pw({color:or,gradient:o??null,panel:P,format:n,syncKey:w,onChange:_,onSnapshotChange:T,onPreviewColor:C,onPreviewGradient:S}),X=(0,l.useRef)(void 0),sr=(0,l.useRef)(j.model.hsv);sr.current=j.model.hsv;const mr=(0,l.useCallback)(Sr=>j.commitColor(Sr,X.current),[j]),rr=(0,l.useMemo)(()=>Ia(Ue(j.model.hsv)),[j.model.hsv]),ur=(0,l.useMemo)(()=>A?.map(Sr=>({...Sr,canAddColor:!1,canRemoveColor:!1}))??[],[A]),yr=(0,l.useCallback)(Sr=>{F(Ur=>{const Fr=typeof Sr=="function"?Sr(Ur):Sr,Hr=Cd(b,Fr);return Hr!==Ur&&x?.(Hr),Hr})},[b,x]),lr=(0,l.useRef)(null),wr=(0,l.useCallback)(Sr=>{if(T)try{T(Nn({color:j.model.hsv,gradient:j.model.gradient,isUnset:j.isUnset,format:n,activePanel:Sr}))}catch{}},[T,j.model.hsv,j.model.gradient,j.isUnset,n]),V=(0,l.useRef)(y);(0,l.useEffect)(()=>{V.current!==y&&(V.current=y,F(Cd(b,y)))},[y,b]),(0,l.useEffect)(()=>{const Ur=!(lr.current===null)&&lr.current!==P;lr.current=P,Ur&&wr(P)},[P,wr]);const K=(0,l.useMemo)(()=>{const Ur=P==="gradient"?si:Z?ap:kl,Fr=!u||u.length===0?[...Ur]:[...u];if(!h?.length)return Fr;const Hr=new Set(h);return Fr.filter(He=>!Hr.has(He))},[u,h,P,Z]),er=K.includes("palettes"),O=t!=="none"&&!Z,cr=O&&t==="tools"&&P==="solid",br=O&&t==="header",$r=(0,l.useMemo)(()=>mw(j.displayHsv),[j.displayHsv]),W=P==="gradient"?"gradient":Z?"simple":"solid",Y=er?A:void 0,kr=(0,l.useCallback)(()=>{const Sr=Ia(Ue(j.model.hsv)),Ur=(or!=null?Sn(or).color:"")||Sr||Ze.color,Fr=Dp({...j.model.gradient,stops:[]},Ur);Fr.stops.length>0&&j.commitGradient(Fr)},[or,j]),ir=(0,i.jsxs)("div",{...N,ref:M,"arc-color-picker":W,"is-inline":p?"":void 0,"is-unset":j.isUnset?"":void 0,style:$r,children:[Z?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n0,{palettes:ur.length?ur:void 0,activePaletteColor:rr,commitLocalHsv:mr,selectedNameRef:X,hsvRef:sr,popoverId:L,labels:H}),(0,i.jsx)(O0,{state:j,tools:K,isSimpleMode:!0,expandHexShorthand:k,labels:H})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Xx,{canTogglePanels:f,panels:b,activePanel:P,setActivePanel:yr,labels:H}),P==="gradient"?(0,i.jsx)(lw,{state:j,tools:K,isUnset:j.isUnset,onAddGradient:kr,editFallbackColor:Sn(e??"").color,format:n,labels:H}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(O0,{state:j,tools:K,isUnsetColorInTools:cr,expandHexShorthand:k,labels:H}),(0,i.jsx)(n0,{palettes:Y,activePaletteColor:rr,commitLocalHsv:mr,selectedNameRef:X,hsvRef:sr,popoverId:L,onAddColor:I??po,onRemoveColor:D,labels:H,"has-divider":"top"})]})]}),r&&(0,i.jsx)("div",{"arc-color-picker-section":"footer",children:r})]});if(p)return ir;const dr=br?(0,i.jsx)(A0,{isUnset:j.isUnset,onSelect:j.commitUnset,labels:H}):null,q=dr||$?.headerSlotEnd?(0,i.jsxs)(i.Fragment,{children:[$?.headerSlotEnd,dr]}):void 0,pr=$?.anchorProps??fw,Rr=$?.popover??(Z?"":"manual"),Ir=Z?{...$,anchorAt:$?.anchorAt??"bottom-center",showDismiss:!1,hasTail:!0}:{...$,heading:d??void 0,showGoBack:v??void 0,goBackProps:g??void 0,headerSlotEnd:q??void 0,showHeaderDivider:!0,showFooterDivider:!0,isHeaderSticky:!0,isFooterSticky:!0};return(0,i.jsx)(Q0,{...Ir,popover:Rr,anchorProps:pr,id:L,children:ir})},bw=({color:r,gradient:e=gw,isUnset:a,format:t=Ze.format,activePanel:o="solid"}={})=>{const n=r==null||r==="";return Nn({color:n?Ze.color:r,gradient:e,isUnset:a??n,format:t,activePanel:o})};ja.getColorAs=Ap,ja.getColorData=Pa,ja.getGradientData=xo,ja.getSnapshot=bw,ja.getContrastColor=yo,ja.addColor=hy,ja.removeColor=py,Cr("ArcColorPicker",Oy);const Sd={course:"Course",scenario:"Branching Scenario",presentation:"Presentation",microlearning:"Microlearning",video:"Interactive Video",guide:"Guide",package:"Package",custom:"Icon"},zd={course:"Self-paced learning paths",microlearning:"Bite-sized training moments",presentation:"Presentations for live training",guide:"Step-by-step instructions",video:"Add chapters to context and videos",scenario:"Interactive practice simulations",package:"Learning packages",custom:"Custom learning content"},Ed=r=>r?{...Sd,...r}:Sd,$w=r=>r?{...zd,...r}:zd,$a=s`--arc•icon•avatar`,ya=s`${$a}•fg`,xa=s`${$a}•bg`,Lt=s`${$a}•width`,Eo=s`${$a}•size`,yw=s`
  &[data-color=brand],
  &[data-color=blue] {
    ${ya}: var(--arc-color-fg-blue-mid);
    ${xa}: var(--arc-color-bg-blue-subtle);
  }
  &[data-color=purple] {
    ${ya}: var(--arc-color-fg-purple-mid);
    ${xa}: var(--arc-color-bg-purple-subtle);
  }
  &[data-color=yellow] {
    ${ya}: var(--arc-color-fg-yellow-mid);
    ${xa}: var(--arc-color-bg-yellow-subtle);
  }
  &[data-color=orange] {
    ${ya}: var(--arc-color-fg-orange-mid);
    ${xa}: var(--arc-color-bg-orange-subtle);
  }
  &[data-color=red] {
    ${ya}: var(--arc-color-fg-red-mid);
    ${xa}: var(--arc-color-bg-red-subtle);
  }
  &[data-color=green] {
    ${ya}: var(--arc-color-fg-green-mid);
    ${xa}: var(--arc-color-bg-green-subtle);
  }
  &[data-color=mint] {
    ${ya}: var(--arc-color-fg-mint-mid);
    ${xa}: var(--arc-color-bg-mint-subtle);
  }
  &[data-color=maroon] {
    ${ya}: var(--arc-color-fg-maroon-mid);
    ${xa}: var(--arc-color-bg-maroon-subtle);
  }
  &[data-color=neutral] {
    ${ya}: var(--arc-color-fg-neutral-stark);
    ${xa}: var(--arc-color-bg-neutral-subtle);
  }
  &[data-color=ai] {
    ${ya}: var(--arc-color-fg-purple-stark);
    ${xa}: var(--arc-gradient-ai-100);
  }
`,xw=s`
  &[data-size=inherit] {
    ${Lt}: 2em;
    ${$a}•border•radius: 0.5em;
  }
  &[data-size=xs] {
    ${Lt}: var(${m}•20);
    ${Eo}: var(${m}•10);
    ${$a}•border•radius: var(${m}•6);
  }
  &[data-size=sm] {
    ${Lt}: var(${m}•24);
    ${Eo}: var(${m}•12);
    ${$a}•border•radius: var(${m}•6);
  }
  &[data-size=md] {
    ${Lt}: var(${m}•32);
    ${Eo}: var(${m}•14);
    ${$a}•border•radius: var(${m}•8);
  }
  &[data-size=lg] {
    ${Lt}: var(${m}•40);
    ${Eo}: var(${m}•16);
    ${$a}•border•radius: var(${m}•8);
  }
  &[data-size=xl] {
    ${Lt}: var(${m}•56);
    ${Eo}: var(${m}•20);
    ${$a}•border•radius: var(${m}•12);
  }
`,ww=s`
@layer arc-components {

  /* SETUP -----------------------------------------------------------• */

  [arc-icon-avatar] {
    ${yw}
    ${xw}
  }

  /* CORE ------------------------------------------------------------• */

  [arc-icon-avatar] {
    flex: none;
    font-size: initial;
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(${Lt});
    aspect-ratio: 1 / 1;

    color: var(${ya});
    background: var(${xa});
    border-radius: var(${$a}•border•radius);

    [arc-icon] {
      font-size: var(${Eo});
      pointer-events: none;
    }
  }

}
`,kw=["course","scenario","presentation","microlearning","video","guide","package","custom"],Aw=Gr(Ha,["brand","blue","purple","yellow","orange","red","green","mint","maroon","neutral","ai"]),Cw=gr(ie,["inherit","xs","sm","md","lg","xl"]),_o={variant:"custom",color:"blue",size:"inherit",icon:"fa-regular fa-circle-dashed"},Mi={course:{icon:"fa-solid fa-book-open",color:"blue"},scenario:{icon:"fa-solid fa-sitemap",color:"purple"},presentation:{icon:"fa-solid fa-presentation-screen",color:"yellow"},microlearning:{icon:"fa-solid fa-bolt",color:"orange"},video:{icon:"fa-solid fa-video",color:"red"},guide:{icon:"fa-solid fa-memo",color:"mint"},package:{icon:"fa-solid fa-cube",color:"maroon"},custom:{icon:_o.icon,color:_o.color}},ag=({variant:r=_o.variant,size:e=_o.size,color:a=Mi.custom.color,icon:t=Mi.custom.icon,hasAutoLabel:o,labels:n,role:c,title:d,showTooltip:u,tooltipProps:h,"aria-label":p,"aria-labelledby":v,...g})=>{const f=Ed(n)[r],b=p||(o?f:void 0),y=!!(b||v),x=r==="custom",A=Mi[r],$=x?t??A.icon:A.icon,k=x?a:A.color,w=x?"":r,E=c??(y?"img":void 0),{text:_,isEnabled:T,...C}=h??{},S=_??b??f,I=(T??u)&&!!S,D=(0,i.jsx)("span",{...g,role:E,"aria-label":b,"aria-labelledby":v,title:I?void 0:d,"arc-icon-avatar":w,"data-color":k,"data-size":e,children:(0,i.jsx)(zr,{icon:$})});return I?(0,i.jsx)(oo,{...C,text:S,children:D}):D};Cr("ArcIconAvatar",ww);const Di=s`--arc•icon•avatar•text`,Mt=s`${Di}•text`,Dt=s`${Di}•subtext`,Ot=s`${Di}•gap`,Nt=s`${Di}•text•gap`,Sw=s`
@layer arc-components {

  [arc-icon-avatar-text] {
    /* Gaps and font sizes are static per @link ArcIconAvatar size — keyed off the
       avatar's data-size so they track the avatar with no separate prop. */

    &:has([data-size=inherit]) { /* @default — IconAvatar's default size is inherit */
      ${Mt}•font•size: 1em;
      ${Dt}•font•size: 0.875em;
      ${Ot}: 0.5em;
      ${Nt}: 0.25em;
    }

    &:has([data-size=xl]) {
      ${Mt}•font•size: var(--arc-font-size-14);
      ${Dt}•font•size: var(--arc-font-size-12);
      ${Ot}: ${jr(14)};
      ${Nt}: ${jr(6)};
    }

    &:has([data-size=lg]) {
      ${Mt}•font•size: var(--arc-font-size-14);
      ${Dt}•font•size: var(--arc-font-size-12);
      ${Ot}: ${jr(12)};
      ${Nt}: ${jr(4)};
    }

    &:has([data-size=md]) {
      ${Mt}•font•size: var(--arc-font-size-14);
      ${Dt}•font•size: var(--arc-font-size-12);
      ${Ot}: ${jr(12)};
      ${Nt}: ${jr(4)};
    }

    &:has([data-size=sm]) { /* @note text size matches xs */
      ${Mt}•font•size: var(--arc-font-size-12);
      ${Dt}•font•size: var(--arc-font-size-12);
      ${Ot}: ${jr(8)};
      ${Nt}: ${jr(2)};
    }

    &:has([data-size=xs]) {
      ${Mt}•font•size: var(--arc-font-size-12);
      ${Dt}•font•size: var(--arc-font-size-12);
      ${Ot}: ${jr(6)};
      ${Nt}: ${jr(2)};
    }
  }

  [arc-icon-avatar-text] {
    font-size: var(${Mt}•font•size);
    display: inline-flex;
    align-items: center;
    gap: var(${Ot});
    line-height: normal;
    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-font-weight-bold);

      [data-element=subtext] {
        font-weight: var(--arc-font-weight-normal);
      }
    }

    [data-element=text] {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: var(${Nt});
      text-align: start;
    }

    [data-element=subtext] {
      font-size: var(${Dt}•font•size);

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: color-mix(in srgb, currentcolor 61.2%, transparent);
    }

    /* Single-line truncation. line-height:1 keeps the flex gap (--text-gap) exact.
       Clip only the inline axis for the ellipsis; leave the block axis visible so
       descenders paint past the short line box in every browser (Safari ignores
       overflow-clip-margin, so relying on it would trim descenders there). */
    :where([data-element=title], [data-element=subtext]) {
      line-height: 1;
      overflow-x: clip;
      overflow-y: visible;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

}
`,zw=({children:r,text:e,iconAvatar:a={},subtext:t,size:o,isStrong:n,...c})=>{const d=a.variant??_o.variant,u=d==="custom"?void 0:Ed(a.labels)[d],h=r??e??u;return(0,i.jsxs)("span",{...c,"arc-icon-avatar-text":"","is-strong":n?"":void 0,children:[(0,i.jsx)(ag,{...a,size:o}),(0,i.jsxs)("span",{"data-element":"text",children:[(0,i.jsx)("span",{"data-element":"title",children:h}),t!=null&&(0,i.jsx)("small",{"data-element":"subtext",children:t})]})]})};Cr("ArcIconAvatarText",Sw);const tg=({size:r="md",layout:e="icon",variant:a="common",hierarchy:t="tertiary",...o})=>(0,i.jsx)(Mr,{...o,"arc-input-action":"",size:r,layout:e,variant:a,hierarchy:t}),Oi=s`--arc•link`,La=s`${Oi}•fg`,Bn=s`${La}•hover`,Fn=s`${La}•disabled`,_d=s`${Oi}•outline`,og=s`${_d}•size`,Td=s`${_d}•offset`,Ew=s`${Oi}•cursor`,Hn=s`${Oi}•focus•color`,_w=s`
@layer arc-components {
${zf}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${La}: currentcolor;
    ${Bn}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${Fn}: color-mix(in srgb, currentcolor, transparent 70%);

    ${Hn}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${La}: var(--arc-color-fg-primary);
    ${Bn}: var(--arc-color-fg-secondary);
    ${Fn}: var(--arc-color-fg-disabled);
    ${Hn}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${La}: var(--arc-color-fg-secondary);
    ${Bn}: var(--arc-color-fg-primary);
    ${Fn}: var(--arc-color-fg-disabled);
    ${Hn}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${La}: var(--arc-color-fg-on-mono-inverse);
    ${Bn}: var(--arc-link-fg-hover-inverse);
    ${Fn}: var(--arc-link-fg-disabled-inverse);
    ${Hn}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${og}: 0.125em; /* 2px */
    ${Td}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${La}: var(--arc-link-color-hover, var(${Bn}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${_d}: var(${og}) solid var(--arc-link-color-focus, var(${Hn}));
    ${Td}: var(${Td});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${La}: var(--arc-link-color-disabled, var(${Fn}));
    ${Ew}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${La}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${La}));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,Tw=gr(Xr,["inherit","primary","secondary","inverse"]),Iw=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="a",href:n,icon:c,text:d,overflow:u,iconSize:h,gapSize:p,isFlipped:v,isDisabled:g,...f})=>(0,i.jsx)(o,{...f,href:g?void 0:n,"arc-link":"","data-variant":t,"aria-disabled":g,"data-is-disabled":g?"":void 0,children:r||(0,i.jsx)(le,{icon:c,text:d,overflow:u,iconSize:h,gapSize:p,size:a,layout:e,isFlipped:v})});Cr("ArcLink",_w);const Pw=[...Fa],Rw=gr(Xr,["common"]),jw=gr(Xr,["common","critical"]),Lw=gr(Xr,["common","brand","info","success","warning","error","processing"]),Mw=["auto","dark","light","none"],Dw=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],Ow=gr(ie,["xl","lg","md","sm","custom","fullscreen"]),Nw=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],Id=r=>r?.matches(":modal"),Pd=(r,e)=>e.target===r,Bw=(r,e)=>e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom,Vn=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onCloseOverride:t=void 0})=>(o,n)=>c=>{if(c?.preventDefault?.(),c?.stopPropagation?.(),!r?.current){n?.(c);return}if(t){t(o,c,r.current),n?.(c);return}if(e&&o!=="confirm:discard"){a?.(!0);return}r.current?.close(o),a?.(!1),n?.(c)},Rd=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onClose:t,onToggle:o})=>{(0,l.useEffect)(()=>{const n=r.current;if(!n)return;const c=u=>{Id(n)&&Pd(n,u)&&(e?(u.preventDefault(),u.stopPropagation(),a?.(!0)):t?.("outside",u))},d=u=>{Pd(n,u)&&(a?.(!1),t?.(n.returnValue,u),o?.(!1,u))};return n.addEventListener("close",d),n.addEventListener("cancel",c),()=>{n.removeEventListener("close",d),n.removeEventListener("cancel",c)}},[r,e,a,t,o])},jd=({modalRef:r,isOpen:e,isTopLayer:a})=>{(0,l.useEffect)(()=>{const t=r.current;t&&(e&&!t.open&&(a?t.showModal():t.show()),!e&&t.open&&t.close())},[e,a])},Ld=({modalRef:r,isOpen:e,autoFocusId:a})=>{(0,l.useEffect)(()=>{const t=r.current;if(!t||!a||!e)return;const o=t.querySelector(`#${a}`);if(!o||!(o instanceof HTMLElement))return;const n=setTimeout(()=>{o.focus()},0);return()=>clearTimeout(n)},[r,a,e])},ng=(r,e)=>(typeof r.composedPath=="function"?r.composedPath():[]).includes(e)||r.target instanceof Node&&e.contains(r.target),cg=({modalRef:r,isOpen:e=!1,closeOnBackdrop:a=!1,attemptCloseModal:t})=>{(0,l.useEffect)(()=>{const o=r.current;if(!o||!e||!a||!Id(o))return;let n=!1;const c=u=>{n=ng(u,o)},d=u=>{if(n||ng(u,o))return;const h=o.getBoundingClientRect();Bw(h,u)&&t("outside")(u)};return document.documentElement?.addEventListener("pointerdown",c,{capture:!0}),document.documentElement?.addEventListener("click",d,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",c,{capture:!0}),document.documentElement?.removeEventListener("click",d,{capture:!0})}},[r,t,e,a])},ig=({modalRef:r,isOpen:e=!1,closeOnEsc:a=!1,closedBy:t="closerequest",attemptCloseModal:o})=>{(0,l.useEffect)(()=>{const n=r.current;if(!n||!e||!a||!Id(n))return;const c=d=>{if(d.key==="Escape"&&Pd(n,d)){if(t==="none"){d.stopPropagation(),d.preventDefault();return}o("escape")(d)}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[r,o,e,a,t])},Md=r=>(0,i.jsx)(Mr,{"aria-label":"Dismiss",text:"Dismiss",...r,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large",layout:"icon",shape:"square",size:"md"}),Fw=r=>(0,i.jsx)(Mr,{"arc-modal-go-back":"","aria-label":"Go Back",text:"Go Back",...r,variant:"common",hierarchy:"secondary",icon:"fa-regular fa-arrow-left",layout:"icon",shape:"square",size:"md"}),Ni=(0,l.forwardRef)(({inert:r,...e},a)=>(0,i.jsx)("div",{...e,ref:a,"arc-modal-content":"",inert:r}));Ni.displayName="ModalContent";const sg=({showDivider:r,...e})=>(0,i.jsx)("header",{...e,"arc-modal-header":"","has-divider":r?"":void 0}),Hw=({glyph:r,variant:e="common"})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)(zr,{icon:r,"arc-modal-glyph":"","arc-icon-status":e})}),Dd=r=>{const{titleContent:e,TitleElement:a="h2",...t}=r;return(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsx)(a,{...t,"arc-modal-title":"",children:typeof e=="string"?e:(0,i.jsx)(le,{...e})})})},Vw=({message:r,...e})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)("p",{...e,"arc-modal-message":"",children:r})}),Od=({tag:r="section",padding:e,...a})=>(0,i.jsx)(r,{...a,"arc-modal-body":"","data-padding":e==="auto"?void 0:e}),Nd=({showDivider:r,...e})=>(0,i.jsx)("footer",{...e,"arc-modal-footer":"","has-divider":r?"":void 0}),Uw=r=>e=>{if(e.key==="Escape"){if(r==="none"){e.stopPropagation(),e.preventDefault();return}return"escape"}},xr=s`--arc•modal`,Un=s`${xr}•layout`,Gw=s`${xr}•header`,Bi=s`${xr}•body`,Gn=s`${xr}•footer`,lg=s`${xr}•fg`,Fi=s`${xr}•bg`,Ma=s`${xr}•backdrop`,gt=s`${xr}•scale`,To=s`${Gw}•padding`,Qr=s`${Bi}•padding`,vt=s`${Gn}•padding`,Kw=s`
  ${xr}•font•size: var(${m}•14);
  ${xr}•gap: var(${R}•16);

  ${Un}•rows: auto 1fr auto;
  ${Un}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${Un}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${Un}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${Un}•rows: auto;
  }

  ${lg}: var(--arc-color-fg-primary);
  ${Fi}: var(--arc-color-bg-primary);
  ${xr}•border: none;
  ${xr}•border•radius: var(--arc-border-radius-lg);
  ${xr}•divider: var(${m}•1) solid var(--arc-color-border-mid);

  ${xr}•max•width: calc(100vw - var(${R}•32));
  ${xr}•min•width: unset;
  ${xr}•width: auto;

  ${xr}•max•height: calc(100vh - var(${R}•32));
  ${xr}•min•height: unset;
  ${xr}•height: max-content;

  ${gt}: 1;
  ${gt}•start: 0.95;

  ${Bi}•text•align: unset;
  ${Gn}•justify•content: flex-end;

  ${Ma}•bg: var(--arc-color-overlay-stark);
  ${Ma}•pointer•events: none;
  ${Ma}•cursor: default;

  &:where([is-backdrop=light]) {
    ${Ma}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${Ma}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${Ma}•bg: transparent;
  }
`,Ww=s`
  &[data-size=sm] {
    ${xr}•width: 28em;
  }

  &[data-size=md] {
    ${xr}•width: 40em;
  }

  &[data-size=lg] {
    ${xr}•width: 50em;
  }

  &[data-size=xl] {
    ${xr}•width: 64em;
  }

  &[data-size=custom] {
    ${xr}•width: auto;
    ${xr}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${xr}•width: 100vw;
    ${xr}•height: 100vh;
    ${xr}•min•width: 100vw;
    ${xr}•min•height: 100vh;
    ${xr}•max•width: 100vw;
    ${xr}•max•height: 100vh;
    ${xr}•border•radius: var(--arc-border-radius-none);

    ${gt}: 1;
    ${gt}•start: 1.125;
  }
`,Xw=s`
  &[is-confirm] {
    ${Gn}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${Bi}•text•align: center;
    ${Gn}•justify•content: center;

    ${Qr}•block•start: var(${R}•40);
    ${Qr}•block•end: var(${R}•20);

    ${vt}•block•start: var(${R}•12);
    ${vt}•block•end: var(${R}•40);

    ${xr}•glyph•size: var(${m}•48);

    [arc-modal-spinner] {
      --arc-spinner-size: var(${xr}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${xr}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${R}•12);
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,qw=s`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${Qr}•block•start: var(${R}•10);
    }

    &:has([arc-modal-footer]) {
      ${Qr}•block•end: var(${R}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${To}•block•end: var(${R}•20);
      ${Qr}•block•start: var(${R}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${Qr}•block•end: var(${R}•20);
      ${vt}•block•start: var(${R}•12);
      ${vt}•block•end: var(${R}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${Qr}•inline•start: 0;
      ${Qr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${Qr}•block•start: 0;
      ${Qr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${Qr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${Qr}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${Qr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${Qr}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${Qr}•block•start: var(${R}•20);
      ${Qr}•inline•end: var(${R}•24);
      ${Qr}•block•end: var(${R}•20);
      ${Qr}•inline•start: var(${R}•24);
    }

    &:has([arc-modal-go-back]) {
      ${To}•inline•start: var(${R}•20);
    }

    ${To}:
      var(${R}•20)
      var(${R}•24)
      var(${To}•block•end, var(${R}•10))
      var(${To}•inline•start, var(${R}•24));

    ${Qr}:
      var(${Qr}•block•start, var(${R}•20))
      var(${Qr}•inline•end, var(${R}•24))
      var(${Qr}•block•end, var(${R}•20))
      var(${Qr}•inline•start, var(${R}•24));

    ${vt}:
      var(${vt}•block•start, var(${R}•10))
      var(${R}•24)
      var(${vt}•block•end, var(${R}•20))
      var(${R}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${Qr}: 0;
    }
  }
`,Yw=s`
  [arc-modal] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-modal-transition-duration, 240ms);
    transition-property: display, opacity, scale;
    transition-timing-function: ease-out;

    &::after {
      transition: inherit;
    }

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-modal] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity, scale;
    }
  }
`,Zw=s`
  [arc-modal] {
    opacity: 0;
    scale: var(--arc-modal-scale, var(${gt}));

    &::after {
      opacity: 0;
    }

    &::backdrop {
      opacity: 0;
    }

    &[open] {
      display: flex;
      flex-direction: column;
      opacity: 1;
    }

    &[open]::after {
      opacity: 1;
    }

    &[open]::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-modal][open] {
      opacity: 0;
      scale: var(--arc-modal-scale-start, var(${gt}•start));
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,Bd=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${Kw}
    ${Ww}
    ${Xw}
    ${qw}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${gt}: 1;
      ${gt}•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, scale;
    contain: layout style paint;

    inset: var(--arc-modal-inset, 0);
    translate: var(--arc-modal-translate, none);
    margin: var(--arc-modal-margin, auto);

    padding: 0;
    color: var(--arc-modal-color, var(${lg}));
    background: var(--arc-modal-background, var(${Fi}));
    border: var(--arc-modal-border, var(${xr}•border));
    border-radius: var(--arc-modal-border-radius, var(${xr}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${xr}•width));
    height: var(--arc-modal-height, var(${xr}•height));
    min-width: var(--arc-modal-min-width, var(${xr}•min•width));
    min-height: var(--arc-modal-min-height, var(${xr}•min•height));
    max-width: var(--arc-modal-max-width, var(${xr}•max•width));
    max-height: var(--arc-modal-max-height, var(${xr}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${Ma}•bg));
      pointer-events: var(${Ma}•pointer•events, none);
      cursor: var(${Ma}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${xr}•font•size));
      flex: 1 1 min-content;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      z-index: 1;

      /* Force remove margin from controlled title and message elements */
      :is([arc-modal-title], [arc-modal-message]) { margin: 0 !important; }
    }

    [arc-modal-header] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      align-items: var(--arc-modal-header-align-items, unset);
      justify-content: space-between;
      gap: var(--arc-modal-header-gap, var(${xr}•gap));

      padding: var(${To});
      background: var(--arc-modal-header-background, var(${Fi}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${xr}•divider));
      }

      :where([header-slot]) {
        display: flex;
        align-items: inherit;
        gap: inherit;
      }

      :where([header-slot=content]) {
        flex: 1;
        align-self: flex-start;
      }

      :where([header-slot=dismiss]) {
        margin: var(${R}•4m) var(${R}•8m) var(${R}•4m) var(${R}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${R}•4m) 0 var(${R}•4m) var(${R}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${R}•8);

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${R}•4);
      }
    }

    [arc-modal-body] {
      flex: 1;
      padding: var(${Qr});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${Bi}•text•align));
    }

    [arc-modal-footer] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${Gn}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${xr}•gap));

      background: var(--arc-modal-footer-background, var(${Fi}));
      padding: var(--arc-modal-footer-padding, var(${vt}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${xr}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${R}•16) var(${R}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${Ma}•bg));
      z-index: var(--arc-modal-confirm-z-index, 2);
    }

    /* Nested modals */
    [arc-modal] {
      --arc-modal-min-width: var(--arc-modal-nested-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-min-height, none);
    }

    [arc-modal][is-alert] {
      --arc-modal-min-width: var(--arc-modal-nested-alert-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-alert-min-height, none);
    }

    [arc-modal][is-confirm] {
      --arc-modal-width: var(--arc-modal-confirm-width, 25em);
      --arc-modal-height: var(--arc-modal-confirm-height, max-content);
      --arc-modal-min-width: var(--arc-modal-confirm-min-width, none);
      --arc-modal-min-height: var(--arc-modal-confirm-min-height, none);
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${R}•32)));
      --arc-button-bar-flex: none;

      z-index: var(--arc-modal-confirm-z-index, 3);

      inset: var(--arc-modal-confirm-inset, 0);
      translate: var(--arc-modal-confirm-translate, none);
      margin: var(--arc-modal-confirm-margin, auto);
    }
  }

  ${Yw}
  ${Zw}
`,ft={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},dg=({children:r,headerProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,l.useRef)(null),{isOpen:c,autoFocusId:d,isTopLayer:u=ft.isTopLayer,isInverse:h=ft.isInverse,scheme:p=ft.scheme,backdropColor:v=ft.backdropColor,variant:g=ft.variant,message:f=ft.message,onCloseOverride:b=ft.onCloseOverride,onConfirmDiscard:y,onConfirmCancel:x,contentRef:A,...$}=o,{slotStart:k,TitleElement:w,titleContent:E,slotEnd:_,...T}=e||{},{primaryButton:C,secondaryButton:S,...I}=t||{},D=!!(E||k||_),N=p==="auto"?void 0:p,H=!!b,Z=F=>H?b?.("confirm:discard",F,n.current??void 0):y?.("confirm:discard",F),L=F=>H?b?.("confirm:cancel",F,n.current??void 0):x?.("confirm:cancel",F);Rd({modalRef:n,onClose:b}),jd({modalRef:n,isOpen:c,isTopLayer:u}),Ld({modalRef:n,isOpen:c,autoFocusId:d});const M=F=>{L(F),S?.onClick?.(F)},P=F=>{Z(F),C?.onClick?.(F)};return(0,i.jsx)("dialog",{...$,ref:n,"arc-modal":"","arc-scheme":h?"inverse":N,"is-confirm":g||"","is-inverse":h?"":void 0,"is-top-layer":u?"":void 0,"is-backdrop":v==="auto"?void 0:v,"data-size":"sm",closedby:"none",onKeyDown:Uw("none"),children:(0,i.jsxs)(Ni,{ref:A,children:[D&&(0,i.jsxs)(sg,{...T,children:[k&&(0,i.jsx)("div",{"header-slot":"start",children:k}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(Dd,{TitleElement:w,titleContent:E})}),_&&(0,i.jsx)("div",{"header-slot":"end",children:_})]}),(0,i.jsx)(Od,{...a,children:r||f&&(0,i.jsx)("p",{style:{margin:0},children:f})}),(0,i.jsx)(Nd,{...I,children:(0,i.jsxs)(Pt,{children:[(0,i.jsx)(Mr,{...S,text:S?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:h,onClick:M}),(0,i.jsx)(Mr,{...C,text:C?.text||"Discard",variant:g??"common",hierarchy:"primary",isInverse:h,onClick:P})]})})]})})};Cr("ArcModalConfirm",Bd);const Fe={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},Jw=({children:r,confirmProps:e,headerProps:a,bodyProps:t,dismissProps:o,footerProps:n,...c})=>{const d=(0,l.useRef)(null),[u,h]=(0,l.useState)(!1),{isOpen:p,autoFocusId:v,isTopLayer:g=Fe.isTopLayer,isInverse:f=Fe.isInverse,scheme:b=Fe.scheme,backdropColor:y=Fe.backdropColor,hasConfirmFlow:x=Fe.hasConfirmFlow,hasUnsavedChanges:A=Fe.hasUnsavedChanges,onCloseOverride:$=Fe.onCloseOverride,bypassConfirmWhen:k=Fe.bypassConfirmWhen??{},size:w=Fe.size,closeOnBackdrop:E=Fe.closeOnBackdrop,closeOnEsc:_=Fe.closeOnEsc,showDismiss:T=Fe.showDismiss,onActionError:C,onClose:S,onToggle:I,width:D,height:N,style:H,contentRef:Z,...L}=c,{showGoBack:M,goBackProps:P,slotStart:F,TitleElement:or,titleContent:vr,slotEnd:j,showDivider:X=Fe.headerProps?.showDivider,...sr}=a??{},{slotStart:mr,primaryButton:rr,secondaryButton:ur,tertiaryButton:yr,showDivider:lr=Fe.footerProps?.showDivider,...wr}=n??{},V=!!(M||vr||F||j),K=!!(rr||ur||yr),er=!!(K||mr),O=!!(x&&A),cr=_?"closerequest":"none",br=b==="auto"?void 0:b,{didPressEscapeKey:$r,didClickBackdrop:U,didClickGoBackButton:W,didClickDismissButton:Y,didClickPrimaryButton:kr,didClickSecondaryButton:ir,didClickTertiaryButton:dr}=k,q=Vn({modalRef:d,shouldConfirm:O,setIsConfirming:h,onCloseOverride:$});Rd({modalRef:d,shouldConfirm:O,setIsConfirming:h,onClose:S,onToggle:I}),jd({modalRef:d,isOpen:p,isTopLayer:g}),Ld({modalRef:d,isOpen:p,autoFocusId:v}),cg({modalRef:d,isOpen:p,closeOnBackdrop:E,attemptCloseModal:U?Vn({modalRef:d,shouldConfirm:O&&!U,setIsConfirming:h}):q}),ig({modalRef:d,isOpen:p,closeOnEsc:_,closedBy:cr,attemptCloseModal:$r?Vn({modalRef:d,shouldConfirm:O&&!$r,setIsConfirming:h}):q});const pr=()=>h(!1),Rr=(Sr,Ur)=>q(Sr)(Ur),Ir=(Sr,Ur,Fr)=>async Hr=>{Hr?.preventDefault?.(),Hr?.stopPropagation?.();const He=()=>Ur?Vn({modalRef:d,shouldConfirm:O&&!Ur,setIsConfirming:h})(Sr,Fr?.onCloseCallback)(Hr):q(Sr,Fr?.onCloseCallback)(Hr);try{await Fr?.onClick?.(Hr),He()}catch(ee){C?.(ee,{reason:Sr,event:Hr})}};return(0,i.jsxs)("dialog",{...L,ref:d,"arc-modal":"","arc-scheme":f?"inverse":br,"is-inverse":f?"":void 0,"is-top-layer":g?"":void 0,"is-backdrop":y==="auto"?void 0:y,"data-size":w,closedby:cr,style:{"--arc-modal-width":D??"","--arc-modal-height":N??"",...H},children:[!V&&T&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(Md,{...o,isInverse:f,onClick:Ir("button:dismiss",Y,o)})}),(0,i.jsxs)(Ni,{ref:Z,inert:u?"":void 0,children:[V&&(0,i.jsxs)(sg,{...sr,showDivider:X,children:[M&&(0,i.jsx)("div",{"header-slot":"go-back",children:(0,i.jsx)(Fw,{...P,isInverse:f,onClick:Ir("button:back",W,P)})}),F&&(0,i.jsx)("div",{"header-slot":"start",children:F}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(Dd,{TitleElement:or,titleContent:vr})}),j&&(0,i.jsx)("div",{"header-slot":"end",children:j}),T&&(0,i.jsx)("div",{"header-slot":"dismiss",children:(0,i.jsx)(Md,{...o,isInverse:f,onClick:Ir("button:dismiss",Y,o)})})]}),(0,i.jsx)(Od,{...t,children:r}),er&&(0,i.jsxs)(Nd,{...wr,showDivider:lr,children:[mr&&(0,i.jsx)("div",{"footer-slot":"content",children:mr}),K&&(0,i.jsxs)(Pt,{children:[yr&&(0,i.jsx)(Mr,{...yr,text:yr?.text||"Button",isInverse:f,variant:"common",hierarchy:"tertiary",onClick:Ir("button:tertiary",dr,yr)}),ur&&(0,i.jsx)(Mr,{...ur,text:ur?.text||"Cancel",isInverse:f,variant:"common",hierarchy:"secondary",onClick:Ir("button:secondary",ir,ur)}),rr&&(0,i.jsx)(Mr,{...rr,text:rr?.text||"Action",isInverse:f,variant:"common",hierarchy:"primary",onClick:Ir("button:primary",kr,rr)})]})]})]}),x&&(0,i.jsx)(dg,{isOpen:u,isInverse:f,isTopLayer:g,backdropColor:y,...e,onConfirmDiscard:Rr,onConfirmCancel:pr})]})};Cr("ArcModal",Bd);const Ja={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},Qw={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-solid fa-do-not-enter",info:"fa-solid fa-circle-info",processing:(0,i.jsx)(wc,{"arc-modal-spinner":""})},rk=({children:r,dismissProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,l.useRef)(null),{isOpen:c,autoFocusId:d,isTopLayer:u=Ja.isTopLayer,isInverse:h=Ja.isInverse,scheme:p=Ja.scheme,backdropColor:v=Ja.backdropColor,closeOnBackdrop:g=Ja.closeOnBackdrop,closeOnEsc:f=Ja.closeOnEsc,variant:b=Ja.variant,icon:y,TitleElement:x,titleContent:A,message:$,showDismiss:k,onCloseOverride:w=Ja.onCloseOverride,onClose:E,onToggle:_,contentRef:T,...C}=o,{primaryButton:S,...I}=t??{},D=y||Qw[b],N=f?"closerequest":"none",H=p==="auto"?void 0:p,Z=Vn({modalRef:n,onCloseOverride:w});return Rd({modalRef:n,onClose:E,onToggle:_}),jd({modalRef:n,isOpen:c,isTopLayer:u}),Ld({modalRef:n,isOpen:c,autoFocusId:d}),cg({modalRef:n,isOpen:c,closeOnBackdrop:g,attemptCloseModal:Z}),ig({modalRef:n,isOpen:c,closeOnEsc:f,closedBy:N,attemptCloseModal:Z}),(0,i.jsxs)("dialog",{...C,ref:n,"arc-modal":"","arc-scheme":h?"inverse":H,"is-alert":b||"","is-inverse":h?"":void 0,"is-top-layer":u?"":void 0,"is-backdrop":v==="auto"?void 0:v,"data-size":"sm",closedby:N,children:[k&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(Md,{...e,isInverse:h,onClick:Z("button:dismiss",e?.onClick)})}),(0,i.jsxs)(Ni,{ref:T,children:[(0,i.jsx)(Od,{...a,children:r||(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Hw,{glyph:D,variant:b}),(0,i.jsx)(Dd,{TitleElement:x,titleContent:A}),(0,i.jsx)(Vw,{message:$})]})}),(0,i.jsx)(Nd,{...I,children:(0,i.jsx)(Pt,{orientation:"vertical",children:(0,i.jsx)(Mr,{...S,text:S?.text||"Close",variant:"common",hierarchy:"primary",isInverse:h,onClick:Z("button:primary",S?.onClick)})})})]})]})};Cr("ArcModalAlert",Bd);const ek=s`--arc•nav`,re=s`${ek}•item`,ak=s`
@layer arc-components {

  [arc-nav-list] {
    &[data-hierarchy=primary] {
      ${re}•fg: var(--arc-color-fg-primary);
      ${re}•fg•active: var(--arc-color-fg-brand-heavy);
      ${re}•bg•active: var(--arc-color-bg-selected-default);
      ${re}•bg•hover: var(--arc-color-bg-hover-subtle);
      ${re}•fg•disabled: var(--arc-color-fg-disabled);
      ${re}•bg•disabled: var(--arc-color-bg-disabled);
      ${re}•edge•disabled: transparent;
    }

    &[data-hierarchy=secondary] {
      ${re}•fg: var(--arc-color-fg-secondary);
      ${re}•fg•active: var(--arc-color-fg-primary);
      ${re}•bg•active: var(--arc-color-bg-secondary);
      ${re}•bg•hover: var(--arc-color-bg-hover-subtle);
      ${re}•fg•disabled: var(--arc-color-fg-disabled);
      ${re}•bg•disabled: var(--arc-color-bg-disabled);
      ${re}•edge•disabled: var(--arc-color-border-disabled);
    }

    /* Inter-Component Communication • ArcButton/ArcIconText -------• */
    &[data-hierarchy=primary] [arc-button-bar-item]:not(:has([is-selected], [is-disabled])) {
      --arc-icon-text-icon-color: var(--arc-color-fg-secondary);
    }

    &:not([data-hierarchy=primary]) [arc-button-bar-item]:not([data-rollup-trigger]) {
      [arc-icon-text] {
        --arc-icon-text-overflow: visible;
      }
    }

    [arc-button-bar-item] {
      /* Inter-Component Communication • ArcMenu -------------------• */
      --arc-menu-item-background: transparent;

      /* Inter-Component Communication • ArcIcon -------------------• */
      [arc-icon-text] {
        --arc-icon-align-self: center;
      }

      /* Inter-Component Communication • ArcButton -----------------• */
      --arc-button-font-weight: var(--arc-font-weight-500);
      --arc-button-label-display: contents;
      --arc-button-content-gap: var(${R}•8);
      --arc-button-inline-spacing: 0;
      --arc-button-overflow: hidden;

      &:not(:has([is-selected], [is-disabled])) {
        --arc-button-color: var(${re}•fg);

        [arc-button]:hover {
          --arc-button-background: var(${re}•bg•hover);
        }
      }

      [is-selected] {
        --arc-button-font-weight: var(--arc-font-weight-600);
        --arc-button-color: var(${re}•fg•active);
        --arc-button-background: var(${re}•bg•active);

        &[is-disabled] {
          --arc-button-color: var(${re}•fg•disabled);
          --arc-button-background: var(${re}•bg•disabled);
          --arc-button-border: var(${m}•1) solid var(${re}•edge•disabled);
        }
      }
    }

    /* Roll-up synchronization -------------------------------------• */
    [arc-button-bar-rollup=menu] [arc-menu-item] {
      &:not(:has([is-disabled])) {
        --arc-button-color: var(${re}•fg);
      }

      &:not(:has([is-selected], [is-disabled])):hover {
        --arc-button-background: var(${re}•bg•hover);
      }

      &:has([is-selected]) {
        --arc-button-color: var(${re}•fg•active);
        --arc-button-background: var(${re}•bg•active);
      }
    }
  }
}
`,tk=Gr(Va,["horizontal","vertical"]),ok=["auto",...Gr(Vt,["compact","comfortable"])],_2=["auto",...Gr(Ut,["primary","secondary"])],nk=["auto",...Gr(Ut,["primary","secondary"])],ck=tk,ik=ok,sk=({items:r,canRollUp:e,maxVisible:a,rollUpLabel:t,density:o,hierarchy:n="auto",orientation:c="horizontal",isFlipped:d,isDisabled:u,isMinimized:h=!1,showIcons:p,missingIcon:v,...g})=>{const f=c==="vertical",y=n==="auto"?f?"primary":"secondary":n,x=h?!0:p,A=h?!1:void 0;return(0,i.jsx)("nav",{...g,"arc-nav-list":"","data-hierarchy":y,children:(0,i.jsx)(Pt,{items:r,listRole:"list",selectedAttr:"aria-current",showIcons:x,showLabels:A,"is-minimized":h?"":void 0,missingIcon:v,canRollUp:f?!1:e,maxVisible:a,rollUpLabel:t,density:o,orientation:c,isFlipped:d,isDisabled:u})})};Cr("ArcNavList",ak);var ug=ca(57267),ye,ne,wa,Qa;function lk(r=!1){if(typeof r!="boolean")throw new Error("defaultValue must be `true` or `false`");const[e,a]=ye(r),t=ne(()=>{a(!0)},[]),o=ne(()=>{a(!1)},[]),n=ne(()=>{a(c=>!c)},[]);return{value:e,setValue:a,setTrue:t,setFalse:o,toggle:n}}var ka=typeof window<"u"?l.useLayoutEffect:l.useEffect;function na(r,e,a,t){const o=(0,l.useRef)(e);ka(()=>{o.current=e},[e]),(0,l.useEffect)(()=>{const n=a?.current??window;if(!(n&&n.addEventListener))return;const c=d=>{o.current(d)};return n.addEventListener(r,c,t),()=>{n.removeEventListener(r,c,t)}},[r,a,t])}function T2(r){na("click",e=>{r(e)})}function I2(){const[r,e]=ye(null),a=ne(async t=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(t),e(t),!0}catch(o){return console.warn("Copy failed",o),e(null),!1}},[]);return[r,a]}function dk(r){const[e,a]=ye(r??0),t=ne(()=>{a(c=>c+1)},[]),o=ne(()=>{a(c=>c-1)},[]),n=ne(()=>{a(r??0)},[r]);return{count:e,increment:t,decrement:o,reset:n,setCount:a}}function uk(r,e){const a=wa(r);ka(()=>{a.current=r},[r]),Qa(()=>{if(e===null)return;const t=setInterval(()=>{a.current()},e);return()=>{clearInterval(t)}},[e])}function P2({countStart:r,countStop:e=0,intervalMs:a=1e3,isIncrement:t=!1}){const{count:o,increment:n,decrement:c,reset:d}=dk(r),{value:u,setTrue:h,setFalse:p}=lk(!1),v=ne(()=>{p(),d()},[p,d]),g=ne(()=>{if(o===e){p();return}t?n():c()},[o,e,c,n,t,p]);return uk(g,u?a:null),[o,{startCountdown:h,stopCountdown:p,resetCountdown:v}]}function Hi(r){const e=(0,l.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return ka(()=>{e.current=r},[r]),(0,l.useCallback)((...a)=>{var t;return(t=e.current)==null?void 0:t.call(e,...a)},[e])}var Fd=typeof window>"u";function Hd(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,l.useCallback)(g=>a.serializer?a.serializer(g):JSON.stringify(g),[a]),n=(0,l.useCallback)(g=>{if(a.deserializer)return a.deserializer(g);if(g==="undefined")return;const f=e instanceof Function?e():e;let b;try{b=JSON.parse(g)}catch(y){return console.error("Error parsing JSON:",y),f}return b},[a,e]),c=(0,l.useCallback)(()=>{const g=e instanceof Function?e():e;if(Fd)return g;try{const f=window.localStorage.getItem(r);return f?n(f):g}catch(f){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,f),g}},[e,r,n]),[d,u]=(0,l.useState)(()=>t?c():e instanceof Function?e():e),h=Hi(g=>{Fd&&console.warn(`Tried setting localStorage key \u201C${r}\u201D even though environment is not a client`);try{const f=g instanceof Function?g(c()):g;window.localStorage.setItem(r,o(f)),u(f),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))}catch(f){console.warn(`Error setting localStorage key \u201C${r}\u201D:`,f)}}),p=Hi(()=>{Fd&&console.warn(`Tried removing localStorage key \u201C${r}\u201D even though environment is not a client`);const g=e instanceof Function?e():e;window.localStorage.removeItem(r),u(g),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))});(0,l.useEffect)(()=>{u(c())},[r]);const v=(0,l.useCallback)(g=>{g.key&&g.key!==r||u(c())},[r,c]);return na("storage",v),na("local-storage",v),[d,h,p]}var hk=null;function hg(r,{defaultValue:e=!1,initializeWithValue:a=!0}={}){const t=d=>hk?e:window.matchMedia(d).matches,[o,n]=ye(()=>a?t(r):e);function c(){n(t(r))}return ka(()=>{const d=window.matchMedia(r);return c(),d.addListener?d.addListener(c):d.addEventListener("change",c),()=>{d.removeListener?d.removeListener(c):d.removeEventListener("change",c)}},[r]),o}var pk="(prefers-color-scheme: dark)",gk="usehooks-ts-dark-mode";function R2(r={}){const{defaultValue:e,localStorageKey:a=gk,initializeWithValue:t=!0}=r,o=hg(pk,{initializeWithValue:t,defaultValue:e}),[n,c]=Hd(a,e??o??!1,{initializeWithValue:t});return ka(()=>{o!==n&&c(o)},[o]),{isDarkMode:n,toggle:()=>{c(d=>!d)},enable:()=>{c(!0)},disable:()=>{c(!1)},set:d=>{c(d)}}}function pg(r){const e=(0,l.useRef)(r);e.current=r,(0,l.useEffect)(()=>()=>{e.current()},[])}function Vi(r,e=500,a){const t=(0,l.useRef)();pg(()=>{t.current&&t.current.cancel()});const o=(0,l.useMemo)(()=>{const n=ug(r,e,a),c=(...d)=>n(...d);return c.cancel=()=>{n.cancel()},c.isPending=()=>!!t.current,c.flush=()=>n.flush(),c},[r,e,a]);return(0,l.useEffect)(()=>{t.current=ug(r,e,a)},[r,e,a]),o}function j2(r,e,a){const t=a?.equalityFn??((h,p)=>h===p),o=r instanceof Function?r():r,[n,c]=ye(o),d=wa(o),u=Vi(c,e,a);return t(d.current,o)||(u(o),d.current=o),[n,u]}function L2(r,e={}){const{preserveTitleOnUnmount:a=!0}=e,t=wa(null);ka(()=>{t.current=window.document.title},[]),ka(()=>{window.document.title=r},[r]),pg(()=>{!a&&t.current&&(window.document.title=t.current)})}function M2(r){const[e,a]=ye(!1),t=()=>{a(!0)},o=()=>{a(!1)};return na("mouseenter",t,r),na("mouseleave",o,r),e}function D2({threshold:r=0,root:e=null,rootMargin:a="0%",freezeOnceVisible:t=!1,initialIsIntersecting:o=!1,onChange:n}={}){var c;const[d,u]=ye(null),[h,p]=ye(()=>({isIntersecting:o,entry:void 0})),v=wa();v.current=n;const g=((c=h.entry)==null?void 0:c.isIntersecting)&&t;Qa(()=>{if(!d||!("IntersectionObserver"in window)||g)return;let y;const x=new IntersectionObserver(A=>{const $=Array.isArray(x.thresholds)?x.thresholds:[x.thresholds];A.forEach(k=>{const w=k.isIntersecting&&$.some(E=>k.intersectionRatio>=E);p({isIntersecting:w,entry:k}),v.current&&v.current(w,k),w&&t&&y&&(y(),y=void 0)})},{threshold:r,root:e,rootMargin:a});return x.observe(d),()=>{x.disconnect()}},[d,JSON.stringify(r),e,a,g,t]);const f=wa(null);Qa(()=>{var y;!d&&((y=h.entry)!=null&&y.target)&&!t&&!g&&f.current!==h.entry.target&&(f.current=h.entry.target,p({isIntersecting:o,entry:void 0}))},[d,h.entry,t,g,o]);const b=[u,!!h.isIntersecting,h.entry];return b.ref=b[0],b.isIntersecting=b[1],b.entry=b[2],b}function O2(){const[r,e]=ye(!1);return Qa(()=>{e(!0)},[]),r}function vk(){const r=wa(!1);return Qa(()=>(r.current=!0,()=>{r.current=!1}),[]),ne(()=>r.current,[])}function N2(r=new Map){const[e,a]=ye(new Map(r)),t={set:ne((o,n)=>{a(c=>{const d=new Map(c);return d.set(o,n),d})},[]),setAll:ne(o=>{a(()=>new Map(o))},[]),remove:ne(o=>{a(n=>{const c=new Map(n);return c.delete(o),c})},[]),reset:ne(()=>{a(()=>new Map)},[])};return[e,t]}function B2(r,e,a="mousedown",t={}){na(a,o=>{const n=o.target;if(!n||!n.isConnected)return;(Array.isArray(r)?r.filter(d=>!!d.current).every(d=>d.current&&!d.current.contains(n)):r.current&&!r.current.contains(n))&&e(o)},void 0,t)}var gg=null;function F2(r,e={}){let{initializeWithValue:a=!0}=e;gg&&(a=!1);const t=ne(u=>{if(e.deserializer)return e.deserializer(u);if(u==="undefined")return;let h;try{h=JSON.parse(u)}catch(p){return console.error("Error parsing JSON:",p),null}return h},[e]),o=ne(()=>{if(gg)return null;try{const u=window.localStorage.getItem(r);return u?t(u):null}catch(u){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,u),null}},[r,t]),[n,c]=ye(()=>{if(a)return o()});Qa(()=>{c(o())},[r]);const d=ne(u=>{u.key&&u.key!==r||c(o())},[r,o]);return na("storage",d),na("local-storage",d),n}var vg=null;function H2(r){const{ref:e,box:a="content-box"}=r,[{width:t,height:o},n]=ye(vg),c=vk(),d=wa({...vg}),u=wa(void 0);return u.current=r.onResize,Qa(()=>{if(!e.current||typeof window>"u"||!("ResizeObserver"in window))return;const h=new ResizeObserver(([p])=>{const v=a==="border-box"?"borderBoxSize":a==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",g=fg(p,v,"inlineSize"),f=fg(p,v,"blockSize");if(d.current.width!==g||d.current.height!==f){const y={width:g,height:f};d.current.width=g,d.current.height=f,u.current?u.current(y):c()&&n(y)}});return h.observe(e.current,{box:a}),()=>{h.disconnect()}},[a,e,c]),{width:t,height:o}}function fg(r,e,a){return r[e]?Array.isArray(r[e])?r[e][0][a]:r[e][a]:e==="contentBoxSize"?r.contentRect[a==="inlineSize"?"width":"height"]:void 0}var mg=null;function V2(r={}){let{initializeWithValue:e=!0}=r;mg&&(e=!1);const a=()=>{if(!mg)return window.screen},[t,o]=ye(()=>{if(e)return a()}),n=Vi(o,r.debounceDelay);function c(){const d=a(),u=r.debounceDelay?n:o;if(d){const{width:h,height:p,availHeight:v,availWidth:g,colorDepth:f,orientation:b,pixelDepth:y}=d;u({width:h,height:p,availHeight:v,availWidth:g,colorDepth:f,orientation:b,pixelDepth:y})}}return na("resize",c),ka(()=>{c()},[]),t}var Ui=null;function fk(r){const e=document.querySelector(`script[src="${r}"]`),a=e?.getAttribute("data-status");return{node:e,status:a}}function U2(r,e){const[a,t]=ye(()=>!r||e?.shouldPreventLoad?"idle":typeof window>"u"?"loading":Ui.get(r)??"loading");return Qa(()=>{if(!r||e?.shouldPreventLoad)return;const o=Ui.get(r);if(o==="ready"||o==="error"){t(o);return}const n=fk(r);let c=n.node;if(c)t(n.status??o??"loading");else{c=document.createElement("script"),c.src=r,c.async=!0,e?.id&&(c.id=e.id),c.setAttribute("data-status","loading"),document.body.appendChild(c);const u=h=>{const p=h.type==="load"?"ready":"error";c?.setAttribute("data-status",p)};c.addEventListener("load",u),c.addEventListener("error",u)}const d=u=>{const h=u.type==="load"?"ready":"error";t(h),Ui.set(r,h)};return c.addEventListener("load",d),c.addEventListener("error",d),()=>{c&&(c.removeEventListener("load",d),c.removeEventListener("error",d)),c&&e?.removeOnUnmount&&(c.remove(),Ui.delete(r))}},[r,e?.shouldPreventLoad,e?.removeOnUnmount,e?.id]),a}var mk=null;function G2(r={}){const{autoLock:e=!0,lockTarget:a,widthReflow:t=!0}=r,[o,n]=ye(!1),c=wa(null),d=wa(null),u=()=>{if(c.current){const{overflow:p,paddingRight:v}=c.current.style;if(d.current={overflow:p,paddingRight:v},t){const g=c.current===document.body?window.innerWidth:c.current.offsetWidth,f=parseInt(window.getComputedStyle(c.current).paddingRight,10)||0,b=g-c.current.scrollWidth;c.current.style.paddingRight=`${b+f}px`}c.current.style.overflow="hidden",n(!0)}},h=()=>{c.current&&d.current&&(c.current.style.overflow=d.current.overflow,t&&(c.current.style.paddingRight=d.current.paddingRight)),n(!1)};return ka(()=>{if(!mk)return a&&(c.current=typeof a=="string"?document.querySelector(a):a),c.current||(c.current=document.body),e&&u(),()=>{h()}},[e,a,t]),{isLocked:o,lock:u,unlock:h}}var Vd=typeof window>"u";function bk(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,l.useCallback)(g=>a.serializer?a.serializer(g):JSON.stringify(g),[a]),n=(0,l.useCallback)(g=>{if(a.deserializer)return a.deserializer(g);if(g==="undefined")return;const f=e instanceof Function?e():e;let b;try{b=JSON.parse(g)}catch(y){return console.error("Error parsing JSON:",y),f}return b},[a,e]),c=(0,l.useCallback)(()=>{const g=e instanceof Function?e():e;if(Vd)return g;try{const f=window.sessionStorage.getItem(r);return f?n(f):g}catch(f){return console.warn(`Error reading sessionStorage key \u201C${r}\u201D:`,f),g}},[e,r,n]),[d,u]=(0,l.useState)(()=>t?c():e instanceof Function?e():e),h=Hi(g=>{Vd&&console.warn(`Tried setting sessionStorage key \u201C${r}\u201D even though environment is not a client`);try{const f=g instanceof Function?g(c()):g;window.sessionStorage.setItem(r,o(f)),u(f),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))}catch(f){console.warn(`Error setting sessionStorage key \u201C${r}\u201D:`,f)}}),p=Hi(()=>{Vd&&console.warn(`Tried removing sessionStorage key \u201C${r}\u201D even though environment is not a client`);const g=e instanceof Function?e():e;window.sessionStorage.removeItem(r),u(g),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))});(0,l.useEffect)(()=>{u(c())},[r]);const v=(0,l.useCallback)(g=>{g.key&&g.key!==r||u(c())},[r,c]);return na("storage",v),na("session-storage",v),[d,h,p]}function K2(r){const[e,a]=ye(1),t=e+1<=r,o=e-1>0,n=ne(h=>{const p=h instanceof Function?h(e):h;if(p>=1&&p<=r){a(p);return}throw new Error("Step not valid")},[r,e]),c=ne(()=>{t&&a(h=>h+1)},[t]),d=ne(()=>{o&&a(h=>h-1)},[o]),u=ne(()=>{a(1)},[]);return[e,{goToNextStep:c,goToPrevStep:d,canGoToNextStep:t,canGoToPrevStep:o,setStep:n,reset:u}]}var $k="(prefers-color-scheme: dark)",yk="usehooks-ts-ternary-dark-mode";function W2({defaultValue:r="system",localStorageKey:e=yk,initializeWithValue:a=!0}={}){const t=hg($k,{initializeWithValue:a}),[o,n]=Hd(e,r,{initializeWithValue:a});return{isDarkMode:o==="dark"||o==="system"&&t,ternaryDarkMode:o,setTernaryDarkMode:n,toggleTernaryDarkMode:()=>{const u=["light","system","dark"];n(h=>{const p=(u.indexOf(h)+1)%u.length;return u[p]})}}}function X2(r,e){const a=wa(r);ka(()=>{a.current=r},[r]),Qa(()=>{if(!e&&e!==0)return;const t=setTimeout(()=>{a.current()},e);return()=>{clearTimeout(t)}},[e])}function q2(r){const[e,a]=ye(!!r),t=ne(()=>{a(o=>!o)},[]);return[e,t,a]}var xk=null;function Y2(r={}){let{initializeWithValue:e=!0}=r;xk&&(e=!1);const[a,t]=ye(()=>e?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),o=Vi(t,r.debounceDelay);function n(){(r.debounceDelay?o:t)({width:window.innerWidth,height:window.innerHeight})}return na("resize",n),ka(()=>{n()},[]),a}const wk=(r,e)=>{const a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;a?a.call(r,e):r.value=e,r.dispatchEvent(new Event("input",{bubbles:!0}))},kk=({defaultValue:r="",value:e,debounceMs:a,inputElementRef:t,onClear:o,onKeyDown:n,onSearch:c})=>{const d=e!==void 0,u=c!==void 0&&a!==void 0,[h,p]=(0,l.useState)(r),v=d?e??"":h,g=(0,l.useRef)(!1),f=Vi($=>{c?.($)},a??0),b=(0,l.useCallback)(()=>{f.cancel()},[f]),y=(0,l.useCallback)($=>{d||p($)},[d]);(0,l.useEffect)(()=>b,[b]),(0,l.useEffect)(()=>{if(u){if(!g.current){g.current=!0;return}b(),f(v)}},[b,f,v,u]);const x=(0,l.useCallback)(()=>{b();const $=t.current;if($){wk($,""),o?.(),$.focus();return}d||p(""),o?.()},[b,t,d,o]),A=(0,l.useCallback)($=>{n?.($),!($.defaultPrevented||$.key!=="Enter"||!c)&&(b(),c(v))},[b,n,c,v]);return{resolvedValue:v,handleValueChange:y,handleClear:x,handleKeyDown:A}},Ak=Pi,Ck=Ri,Sk=gr(nd,["outline","solid"]),bg="Search",zk="Clear search",Ud={layout:"hug",size:"inherit",variant:"outline"},Ek=({canClear:r,isDisabled:e,onClear:a})=>{if(r)return(0,i.jsx)(tg,{"aria-label":zk,disabled:e,icon:"fa-regular fa-xmark",onClick:a})},_k=({ariaLabel:r,ariaLabelledBy:e,headerLabel:a})=>r??(!a&&!e?bg:void 0),$g=(0,l.forwardRef)(({debounceMs:r,inputProps:e,layout:a=Ud.layout,onClear:t,onSearch:o,size:n=Ud.size,variant:c=Ud.variant,headerLabel:d,headerSlot:u,footerCaption:h,footerSlot:p,onChange:v,...g},f)=>{const{id:b,value:y,defaultValue:x="",onChange:A,onKeyDown:$,placeholder:k=bg,disabled:w,readOnly:E,required:_,"aria-label":T,"aria-labelledby":C,...S}=e,I=Nr(b,"arc-search"),D=(0,l.useRef)(null),{resolvedValue:N,handleValueChange:H,handleClear:Z,handleKeyDown:L}=kk({defaultValue:x,value:y,debounceMs:r,inputElementRef:D,onClear:t,onKeyDown:$,onSearch:o}),M=!w&&!E&&N.length>0,P=_k({ariaLabel:T,ariaLabelledBy:C,headerLabel:d}),F=Ek({canClear:M,isDisabled:w,onClear:Z}),or=j=>{D.current=j,Ae(f,j)},vr=(j,X)=>{H(X.target.value),A?.(j,X)};return(0,i.jsx)(Co,{...g,"arc-search":"",layout:a,size:n,variant:c,ref:or,onChange:v,headerLabel:d,headerSlot:u,inputPrefix:(0,i.jsx)(zr,{icon:"fa-regular fa-search"}),inputAction:F,footerCaption:h,footerSlot:p,inputProps:{...S,id:I,value:N,disabled:w,placeholder:k,readOnly:E,required:_,onChange:vr,onKeyDown:L,"aria-disabled":w||void 0,"aria-label":P,"aria-labelledby":C,"aria-readonly":E||void 0,"aria-required":_||void 0}})});$g.displayName="ArcSearch";const Tk=Pi,Ik=Ri,Pk=gr(Xr,["outline","solid","plain"]),yg=()=>typeof globalThis?.CSS?.supports=="function"&&globalThis.CSS.supports("appearance","base-select"),Gi=r=>Array.isArray(r.options),Io=r=>{const e=r?.variant;return e!=="divider"&&e!=="section-label"},xg=r=>r?.variant==="section-label"&&!!(r.text||r.icon),wg=r=>{},kg=(r=[])=>r.flatMap(e=>Gi(e)?e.options:[e]).some(e=>Io(e)&&e.value===""),Ag=r=>{const e=o=>typeof o=="string"&&o.trim().length>0,a=o=>{if(typeof o!="object"||o===null)return;const{name:n}=o;return e(n)?n:void 0};return[r?.text,a(r?.avatar),r?.["aria-label"]].find(e)??"Anonymous"},Kn=s`--arc•select`,We=s`${Kn}•picker`,Cg=s`${We}•fg`,Sg=s`${We}•bg`,Gd=s`${Kn}•option`,Wn=s`${Gd}•fg`,Xn=s`${Gd}•bg`,Bt=s`${Gd}•icon`,Rk=s`
  ${Cg}: currentcolor;
  ${Sg}: var(--arc-color-bg-mono);
  ${Kn}•placeholder•fg: var(--arc-select-placeholder-color, var(--arc-color-fg-secondary));

  ${We}•width: auto;
  ${We}•min•width: 3em;
  ${We}•border•radius: var(--arc-border-radius-lg);
  ${We}•shadow: var(--arc-shadow-lg);

  ${Wn}: currentcolor;
  ${Xn}: transparent;

  ${Bt}•display: none;
  ${Bt}•color: var(${Wn});
`,jk=s`
  &[data-layout=fill] {
    ${We}•width: 100%; /* fallback */
    ${We}•width: anchor-size(inline);
  }
`,Lk=s`
  [arc-select] ::picker(select) {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-select-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;
  }

  @supports (overlay: auto) {
    [arc-select] ::picker(select) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }
`,Mk=s`
  [arc-select] {
    ::picker(select) {
      opacity: 0;
    }

    ::picker(select):popover-open {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-select] ::picker(select):popover-open {
      opacity: 0;
    }
  }
`,Dk=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${Rk}
    ${jk}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${We}•display, none);
      flex-direction: column;
      gap: var(${R}•4);
      border: none;
      color: var(${Cg});
      width: var(--arc-select-picker-width, var(${We}•width));
      min-width: var(--arc-select-picker-min-width, var(${We}•min•width));
      margin: var(--arc-select-picker-margin, var(${R}•4) 0);
      padding: var(--arc-select-picker-padding, var(${R}•4));
      background: var(--arc-select-picker-background, var(${Sg}));
      border-radius: var(--arc-select-picker-border-radius, var(${We}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${We}•shadow));
    }

    ::picker(select):popover-open {
      ${We}•display: flex;
    }

    /* Hide default picker icon */
    ::picker-icon {
      display: none;
    }

    select {
      cursor: inherit;
      flex: 1;
      align-items: center;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      outline: none;
      padding-inline: var(${m}•12);
      max-width: var(--arc-select-max-width, var(--js•max•width, none));
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${R}•8);
      width: 100%;
    }

    [arc-select-placeholder] {
      flex: 1;
      color: var(${Kn}•placeholder•fg);
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${m}•24);
      --arc-avatar-initial-font-size: var(${m}•12);

      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 0;

      [arc-select-icon=selected] {
        display: none;
      }
    }

    /* Hide the cloned <selectedcontent> when the placeholder span drives the trigger. */
    select[data-placeholder] selectedcontent {
      display: none;
    }

    [arc-select-option-group-legend] {
      font-size: var(${m}•12);
      font-weight: var(--arc-font-weight-600);
      color: var(--arc-select-legend-color, var(--arc-color-fg-secondary));
      padding: var(--arc-select-legend-padding, var(${R}•8));
      cursor: default;
    }

    /* Separator above each legend after the first optgroup. */
    optgroup ~ optgroup [arc-select-option-group-legend] {
      border-top: var(${m}•1) solid var(--arc-color-border-mid);
      margin-top: var(${R}•4);
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${R}•8);
      width: 100%;
      min-width: 0;
      color: var(${Wn});
      background: var(--arc-select-option-background, var(${Xn}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${R}•8));

      &::checkmark {
        display: none;
      }

      &:disabled {
        ${Wn}: var(--arc-color-fg-disabled);
        ${Xn}: transparent;
        ${Bt}•display: none;
        cursor: var(--arc-select-disabled-cursor, not-allowed);
      }

      &:not(:disabled):hover {
        ${Xn}: var(--arc-color-bg-hover-default);
      }

      &:not(:disabled):checked {
        ${Xn}: var(--arc-color-bg-selected-default);
        ${Bt}•display: flex;
        ${Bt}•color: var(--arc-select-option-selected-icon-color, var(${Wn}));
      }

      [arc-select-icon=selected] {
        display: var(${Bt}•display, none);
        color: var(${Bt}•color, currentcolor);
      }
    }

    @supports not (appearance: base-select) {
      select {
        appearance: none;
        background: transparent;
        outline: none;

        /* caret */
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 11'><polyline points='1 1 10 10 19 1' fill='none' stroke='%23000000' stroke-width='2.5' stroke-linecap='round' /></svg>");
        background-repeat: no-repeat;
        background-size: 0.75em;
        background-origin: padding-box;
        background-position: calc(100% - 1em) center;
        padding-inline-end: 3em;
      }

      select[data-placeholder] {
        color: var(${Kn}•placeholder•fg);
      }
    }
  }

  ${Lk}
  ${Mk}

}
`,Ok=(0,l.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",tag:t="span",items:o,placeholder:n,renderItem:c,headerLabel:d,headerSlot:u,footerCaption:h,footerSlot:p,id:v,value:g,defaultValue:f,required:b,disabled:y,readOnly:x,maxWidth:A,inputProps:$,...k},w)=>{const{name:E,onBlur:_,onChange:T,onFocus:C,onInput:S,"aria-describedby":I,"aria-label":D,"aria-labelledby":N,...H}=k,Z=Nr(v,"arc-select"),L=a==="plain"&&r==="fill"?"hug":r,M=y||void 0,P=x||void 0,F=b||void 0,or=yg(),vr=a!=="plain"&&!!(d||u),j=a!=="plain"&&!!(h||p),X=typeof n=="string"&&n.length>0&&!kg(o),sr=f??(X?"":void 0),mr=g??sr,rr=X&&mr==="",ur=or&&X&&mr==="",yr=P&&mr!=null?String(mr):void 0,lr=o.flatMap(O=>Gi(O)?O.options.filter(Io):Io(O)?[O]:(wg(O),[])),wr=new Map(lr.map((O,cr)=>[O,cr])),V=O=>{const{itemId:cr,...br}=O,$r=xh(so(O));return(0,i.jsx)($r,{...br})},K=O=>{const cr=wr.get(O)??0,br=O["aria-disabled"]===!0||O.disabled===!0,$r=typeof O.itemId=="string"&&O.itemId.length>0?O.itemId:cr,U=String(O?.value??O?.itemId??cr);return(0,i.jsx)("option",{value:U,disabled:br||yr!==void 0&&U!==yr||void 0,"arc-select-option":"",children:or?(0,i.jsxs)(i.Fragment,{children:[c?c(O,cr):V(O),(0,i.jsx)("span",{"arc-select-icon":"selected","aria-hidden":!0,children:(0,i.jsx)(zr,{icon:"fa-regular fa-check arc-fw"})})]}):Ag(O)},$r)},er=(O,cr)=>{const br=O.options.filter(Io);if(br.length===0)return null;const $r=O.options.find(xg);return(0,i.jsxs)("optgroup",{label:O.label,disabled:O.disabled||void 0,children:[or&&$r&&(0,i.jsx)("legend",{"arc-select-option-group-legend":"",children:V($r)}),br.map(K)]},O.itemId??`${O.label}-${cr}`)};return(0,i.jsxs)(t,{...H,"arc-select":"","arc-input":"select","data-layout":L,"data-size":e,"data-variant":a,children:[vr&&(0,i.jsxs)(Pr.Header,{children:[(0,i.jsx)(Pr.HeaderLabel,{htmlFor:Z,children:d}),!!u&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.HeaderSlot,{children:u})]}),(0,i.jsx)(Pr.InputBody,{children:(0,i.jsxs)("select",{...$,name:$?.name??E,onBlur:$?.onBlur??_,onChange:$?.onChange??T,onFocus:$?.onFocus??C,onInput:$?.onInput??S,"aria-describedby":$?.["aria-describedby"]??I,"aria-label":$?.["aria-label"]??D,"aria-labelledby":$?.["aria-labelledby"]??N,value:g,defaultValue:g==null?sr:void 0,required:b,disabled:y,ref:w,id:Z,"aria-disabled":M,"aria-required":F,"data-readonly":P,"data-placeholder":rr||void 0,style:{...A?{"--js\u2022max\u2022width":A}:{},...$?.style},children:[(0,i.jsxs)("button",{"arc-select-button":"",children:[ur&&(0,i.jsx)(le,{"arc-select-placeholder":"",text:n,overflow:"truncate"}),(0,i.jsx)("selectedcontent",{}),(0,i.jsx)("span",{"aria-hidden":!0,children:(0,i.jsx)(zr,{icon:"fa-regular fa-angle-down arc-fw"})})]}),X&&(0,i.jsx)("option",{value:"",disabled:!0,hidden:!0,children:n}),o.map((O,cr)=>Gi(O)?er(O,cr):Io(O)?K(O):null)]})}),j&&(0,i.jsxs)(Pr.Footer,{children:[(0,i.jsx)(Pr.FooterCaption,{children:h}),!!p&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.FooterSlot,{children:p})]})]})});Cr("ArcSelect",Dk);const Nk=gr(ie,["inherit","md","sm"]),xe={On:"on",Off:"off"},Po={Before:"before",After:"after"},Bk=({disabled:r,id:e,name:a,size:t="md",value:o,labelOff:n,labelOn:c,onChange:d,...u})=>{const h=Nr(a,"arc-switch-name"),p=Nr(e?`${e}-off`:void 0,"arc-switch-off"),v=Nr(e?`${e}-on`:void 0,"arc-switch-on"),g=$=>{if($.code==="Space"){$.preventDefault(),$.stopPropagation();const k=o===xe.On?xe.Off:xe.On;d?.({value:k},$)}},f=$=>{const k={on:qt(c),off:qt(n)};return k?.on&&k?.off?k[$]:!k?.on&&k?.off?`${k?.off}: ${$}`:k?.on&&!k?.off?`${k?.on}: ${$}`:k[$]},b=(0,i.jsxs)(Yc,{type:"switch",onKeyDown:g,children:[(0,i.jsx)(gn,{type:"switch",name:h,id:p,value:xe.Off,checked:o===xe.Off,disabled:r,"aria-label":f(xe.Off)?.trim(),onChange:d}),(0,i.jsx)(gn,{type:"switch",name:h,id:v,value:xe.On,checked:o===xe.On,disabled:r,"aria-label":f(xe.On)?.trim(),onChange:d}),(0,i.jsx)("span",{"data-element":"mask"})]}),y=!c&&o===xe.Off?v:p,x=!n&&o===xe.On?p:v,A=!!(c||n)&&(0,i.jsxs)(i.Fragment,{children:[!!n&&(0,i.jsx)(St,{htmlFor:y,"arc-switch-label":c?xe.Off:"",children:(0,i.jsx)(zt,{children:n})}),b,!!c&&(0,i.jsx)(St,{htmlFor:x,"arc-switch-label":n?xe.On:"",children:(0,i.jsx)(zt,{children:c})})]});return(0,i.jsx)("span",{...u,"arc-switch":"","data-state":o,"data-size":t,role:"radiogroup",children:A||b})},ge=s`--arc•switch`,Wr=s`${ge}•knob`,Fk=s`
@layer arc-components {

  [arc-switch] {
    ${ge}•background: var(--arc-color-alpha-white-100);
    ${Wr}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${ge}•background: var(--arc-color-alpha-white-70);
      ${Wr}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${J}•background: var(--arc-color-bg-neutral-subtle);
      ${J}•border•color: var(--arc-color-border-stark);
      ${Wr}•border•color: var(--arc-color-border-on-stark);
      ${Wr}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${J}•border•color: var(--arc-color-border-heavy);
        ${Wr}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${J}•background: var(--arc-color-bg-disabled);
        ${J}•border•color: var(--arc-color-border-disabled);
        ${Wr}•border•color: var(--arc-color-border-on-stark);
        ${Wr}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${J}•background: var(--arc-color-bg-theme-heavy);
      ${J}•border•color: var(--arc-color-border-theme-heavy);
      ${Wr}•border•color: var(--arc-color-border-theme-heavy);
      ${Wr}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${J}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${J}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${ge}•font•size: 1em;
      ${ge}•width: 2.5em;
      ${ge}•height: 1.5em;
      ${ge}•gap: 0.5em;
      ${Wr}•size: 1.5em;
      ${Wr}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${ge}•font•size: var(${m}•14);
      ${ge}•width: var(${m}•40);
      ${ge}•height: var(${m}•24);
      ${ge}•gap: var(${m}•8);
      ${Wr}•x•shift: var(${m}•4);
      ${Wr}•size: var(${m}•24);
    }

    &[data-size=sm] {
      ${ge}•font•size: var(${m}•12);
      ${ge}•width: var(${m}•30);
      ${ge}•height: var(${m}•14);
      ${ge}•gap: var(${m}•8);
      ${Wr}•x•shift: var(${m}•1);
      ${Wr}•size: var(${m}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${J}•border•radius: var(--arc-border-radius-pill);
    ${J}•width: var(${ge}•width);
    ${J}•height: var(${ge}•height);
    ${J}•x•shift: var(${Wr}•x•shift);
    ${J}•size: var(${Wr}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${Wr}•translate: calc(-100% + var(${Wr}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${Wr}•translate: calc(0% - var(${Wr}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${ge}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${ge}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${J}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${Wr}•translate);

      display: inline-flex;
      width: var(${Wr}•size);
      height: var(${Wr}•size);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property:
        opacity,
        background,
        color,
        border-color,
        outline,
        translate;

      background: var(${Wr}•color);
      box-shadow: var(${Wr}•shadow);
      border: var(${J}•border•width) solid var(${Wr}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,Hk=({disabled:r,id:e,name:a,size:t="md",value:o,label:n,labelPosition:c=Po.After,onChange:d,labelOff:u,labelOn:h,...p})=>{const v=Nr(a,"arc-switch-name"),g=Nr(e,"arc-switch"),f=(x,A)=>{const $=x.checked?xe.On:xe.Off;d?.({...x,value:$},A)};!n&&(h||u)&&(n=h||u,c=h?Po.After:Po.Before);const b=(0,i.jsxs)(Yc,{type:"checkbox",children:[(0,i.jsx)(gn,{type:"checkbox",name:v,id:g,checked:o===xe.On,disabled:r,role:"switch","aria-checked":o===xe.On,"aria-label":n?void 0:"Toggle switch",tabIndex:0,onChange:f}),(0,i.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),y=(0,i.jsx)(St,{htmlFor:g,"arc-switch-label":c,children:(0,i.jsx)(zt,{children:n})});return u&&h?(0,i.jsx)(Bk,{...p,disabled:r,id:e,name:a,labelOff:u,labelOn:h,size:t,value:o,onChange:d}):(0,i.jsxs)("span",{...p,"arc-switch":"","data-state":o,"data-size":t,"data-label-position":c,role:"presentation","aria-live":"off",children:[n&&c===Po.Before&&y,b,n&&c===Po.After&&y]})};Cr("ArcSwitch",Fk);const Vk=["title","heading","subheading","body"],zg=["h1","h2","h3","h4","h5","h6"],Eg=["code","div","li","p","pre","span"],_g=[...zg,...Eg],Uk=[...Fa],Gk=["title-inherit","title-lg","title-md","title-sm"],Kk=["heading-inherit","heading-lg","heading-md","heading-sm"],Wk=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],Xk=gr(Xr,["inherit","primary","primary-inverse"]),qk=["body-inherit","body-lg","body-md","body-sm","body-xs"],Yk=Gr(Xr,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),Zk=gr(tc,["inherit","start","center","justify","end"]),Jk=gr(oc,["inherit","loose","standard","tight"]),Qk={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},r2=r=>{const{align:e,lineHeight:a,size:t,variant:o,scheme:n="auto",isMonospace:c,tag:d,...u}=r,h=Qk?.[d]??"body",p=t?.includes("inherit")?t?.split("-")?.[0]:t,v=o?.endsWith("-inverse");let g;return n!=="auto"?g=n:v&&(g=void 0),{...u,"arc-text":p||h,"arc-scheme":g,"data-is-monospace":c?"":void 0,"data-align":e?.includes("inherit")?void 0:e,"data-variant":o?.includes("inherit")?void 0:o,"data-line-height":a?.includes("inherit")?void 0:a}},rt=s`--arc•text`,Kd=s`${rt}•font`,Ro=s`${rt}•align`,Da=s`${rt}fg`,Tg=s`${rt}•flex`,Ig=s`${rt}•hyphens`,qn=s`${rt}•letterspacing`,Oa=s`${rt}•lineheight`,Pg=s`${rt}•opacity`,Rg=s`${rt}•whitespace`,Ft=s`${Kd}•family`,he=s`${Kd}•size`,jo=s`${Kd}•weight`,e2=s`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${Ro}: unset;
  ${Da}: unset;
  ${Tg}: unset;
  ${Ig}: auto;
  ${qn}: unset;
  ${Oa}: unset;
  ${Pg}: unset;
  ${Rg}: unset;

  ${Ft}: unset;
  ${he}: unset;
  ${jo}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${Oa}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${Oa}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${Oa}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${Ro}: start;
  }

  &[data-align=center] {
    ${Ro}: center;
  }

  &[data-align=justify] {
    ${Ro}: justify;
  }

  &[data-align=end] {
    ${Ro}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${Da}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${Da}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${Da}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${Da}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${Da}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${Da}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${Da}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${Da}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${Ft}: var(--arc-font-family-title);
  ${jo}: var(--arc-font-weight-title);
  ${qn}: var(--arc-letter-spacing-title);
  ${Oa}: var(--arc-line-height-title);

  ${he}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${he}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${he}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${he}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${Ft}: var(--arc-font-family-heading);
  ${jo}: var(--arc-font-weight-heading);
  ${qn}: var(--arc-letter-spacing-heading);
  ${Oa}: var(--arc-line-height-heading);

  ${he}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${he}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${he}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${he}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${Ft}: var(--arc-font-family-subheading);
  ${jo}: var(--arc-font-weight-subheading);
  ${qn}: unset;
  ${Oa}: var(--arc-line-height-subheading);

  ${he}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${he}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${he}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${he}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${Ft}: var(--arc-font-family-body);
  ${jo}: var(--arc-font-weight-body);
  ${Oa}: var(--arc-line-height-body);
  ${he}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${he}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${he}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${he}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${he}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${he}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${Ft}: var(--arc-font-family-mono);
  ${Oa}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${Tg}));
  hyphens: var(--arc-text-hyphens, var(${Ig})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${Pg}));
  text-align: var(--arc-text-align, var(${Ro}));
  white-space: var(--arc-text-white-space, var(${Rg}));

  color: var(--arc-text-color, var(${Da}));

  font-size: var(--arc-text-font-size, var(${he}));
  font-family: var(--arc-text-font-family, var(${Ft}));
  font-weight: var(--arc-text-font-weight, var(${jo}));
  line-height: var(--arc-text-line-height, var(${Oa}));
  letter-spacing: var(--arc-text-letter-spacing, var(${qn}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,a2=r=>(0,l.forwardRef)((e,a)=>(0,l.createElement)(r,{...r2({...e,tag:r}),ref:a})),t2=[..._g].reduce((r,e)=>({...r,[e]:a2(e)}),{});Cr("Arc",e2);const o2=gr(Xr,["common","ai","critical"]),jg=[...Fa],Lg=["default","success","warning","error"],Mg=gr(ie,["inherit","md"]),Dg=gr(Xr,["common"]),Og=[...Oo],n2=[...at],Ng=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],c2=o2.filter(r=>r!=="critical"),Bg={size:Mg[1],variant:Dg[0],scheme:jg[2],popover:Og[2],placement:Ng[4],severity:Lg[0],showDismiss:!0},Fg=(r,e="toggle")=>{const a=document.getElementById(r);({toggle:()=>a?.togglePopover(),show:()=>a?.showPopover(),hide:()=>a?.hidePopover()})[e]()},Hg=s`--arc•progress`,i2=s`${Hg}•bar`,s2=s`${Hg}•value`,Vg=s`${i2}•bg`,Yn=s`${s2}•bg`,l2=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${_f}

  [arc-progress-bar] {
    ${Vg}: var(--arc-color-alpha-subtle);
    ${Yn}: var(--arc-color-bg-brand-stark);

    &[data-variant=ai] {
      ${Yn}: var(--arc-progress-bar-gradient-ai-200);
    }

    &[data-variant=critical] {
      ${Yn}: var(--arc-color-bg-critical-mid);
    }
  }

  [arc-progress-bar] {
    appearance: none;
    width: 100%;
    height: var(${m}•8);

    /* firefox needs these at this level, other browsers can use these too */
    background: var(--arc-progress-bar-background, var(${Vg}));
    border-radius: var(--arc-border-radius-pill);
    border: none;

    /* turn off the default bar background for other browsers */
    &::-webkit-progress-bar { background: none; }

    /* firefox's progress-value bar */
    &::-moz-progress-bar {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${Yn}));
    }

    /* all the others' progress-value bar */
    &::-webkit-progress-value {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${Yn}));
    }
  }

}
`,d2=({progress:r=0,variant:e="common",...a})=>(0,i.jsxs)("progress",{...a,"arc-progress-bar":"","data-variant":e,value:r,max:a.max||100,"aria-valuenow":r,"aria-valuemax":a.max||100,children:[r,"% "]});Cr("ArcProgressBar",l2);const Na=s`--arc•toast`,Ki=s`${Na}•content`,Ug=s`${Na}•color`,Gg=s`${Na}•background`,Zn=s`${Na}•icon•color`,Jn=s`${Na}•transition`,u2=s`
@layer arc-components {

  [arc-toast] {
    ${Ki}•gap: var(${R}•2);
    ${Jn}•duration: 300ms;
    ${Zn}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${Na}•font•size: var(${m}•16);
      ${Ki}•font•size: var(${m}•14);
    }

    &[data-size=inherit] {
      ${Na}•font•size: 1em;
      ${Ki}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${Zn}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${Zn}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${Zn}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${Gg}: var(--arc-color-bg-mono);
      ${Ug}: var(--arc-color-fg-primary);
    }

    /* PLACEMENTS --------------------------------------------------• */
    &[data-placement*=top-] { inset-block-start: var(--arc-toast-inset-block-start, 0); }
    &[data-placement*=bottom-] { inset-block-end: var(--arc-toast-inset-block-end, 0); }
    &[data-placement*=-left] { inset-inline-start: var(--arc-toast-inset-inline-start, 0); }
    &[data-placement*=-right] { inset-inline-end: var(--arc-toast-inset-inline-end, 0); }
    &[data-placement*=-center] { inset-inline-start: var(--arc-toast-inset-inline-start, 50%); translate: -50% 0; }
    &[data-placement=center] { inset: var(--arc-toast-inset, 0); margin: var(--arc-toast-offset, auto); }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-toast] {
    inset: var(--arc-toast-inset, auto);
    margin: var(--arc-toast-offset, var(${R}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${Na}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${Ug}));
    background-color: var(--arc-toast-background, var(${Gg}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${R}•12) var(${R}•12) var(${R}•12) var(${R}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${Na}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${Na}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${R}•8) var(${R}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${R}•8);
      padding: var(${R}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${Zn}));

      height: 1lh;
      padding: 0 var(${R}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${Ki}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${R}•2);
      }
    }

    [arc-toast-actions] {
      align-self: baseline;

      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    [arc-toast-progress-bar] {
      grid-column: 1 / -1;
    }
  }

  /* POPOVER + state -----------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    content-visibility: hidden;
    transition:
      display var(${Jn}•duration) allow-discrete,
      overlay var(${Jn}•duration) allow-discrete,
      content-visibility var(${Jn}•duration) allow-discrete,
      opacity var(${Jn}•duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
      content-visibility: hidden;
    }
  }
}
`,Kg=({id:r,children:e,icon:a,heading:t,subtext:o,dismissProps:n,showDismiss:c=!0,onClose:d,actionSlot:u,size:h="md",variant:p="common",scheme:v=Bg.scheme,placement:g="bottom-left",getToastId:f,progressBarProps:b,severity:y,...x})=>{const A=()=>{d?.()},$=v==="auto"?void 0:v,k=!!u||c,w=Nr(r,"arc-toast"),{variant:E,hierarchy:_,...T}=n||{};(0,l.useEffect)(()=>{f?.(w)},[f,w]);const C=ps(a);return(0,i.jsx)("div",{...x,"arc-toast":"","arc-scheme":$,"data-size":h,"data-variant":p,"data-placement":g,"data-severity":y||void 0,id:w,children:(0,i.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,i.jsxs)("div",{"arc-toast-body":"",children:[a&&(0,i.jsx)(zr,{icon:C,"arc-toast-icon":""}),(0,i.jsx)("div",{"arc-toast-content":"",children:e||(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)("header",{"arc-toast-heading":"",children:(0,i.jsx)("strong",{children:t})}),o&&(0,i.jsx)("p",{"arc-toast-subtext":"",children:o})]})})]}),k&&(0,i.jsxs)("div",{"arc-toast-actions":"",children:[u,c&&(0,i.jsx)(Mr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...T,popoverTarget:w,onClick:A})]}),b&&(0,i.jsx)(d2,{...b,variant:y==="error"?"critical":b.variant,"arc-toast-progress-bar":""})]})})};Kg.handleToast=Fg,Cr("ArcToast",u2);var Qn;(function(r){r.None="none",r.Persistent="localStorage",r.Temporary="sessionStorage"})(Qn||(Qn={}));const h2=(r,e,a)=>{const[t,o]=(0,l.useState)(e),[n,c]=bk(r,e),[d,u]=Hd(r,e);return a===Qn.Temporary?[n,c]:a===Qn.Persistent?[d,u]:[t,o]},p2=["auto","hex","hexa","rgb","hsl","oklch"],g2=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);
