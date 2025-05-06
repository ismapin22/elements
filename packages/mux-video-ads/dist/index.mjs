var Q=l=>{throw TypeError(l)};var B=(l,i,t)=>i.has(l)||Q("Cannot "+t);var e=(l,i,t)=>(B(l,i,"read from private field"),t?t.call(l):i.get(l)),h=(l,i,t)=>i.has(l)?Q("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(l):i.set(l,t),r=(l,i,t,s)=>(B(l,i,"write to private field"),s?s.call(l,t):i.set(l,t),t),E=(l,i,t)=>(B(l,i,"access private method"),t);import J from"@mux/mux-video";import Y from"@mux/mux-data-google-ima";var v,m,a,y,D,b,p,o,w,T,c,C,S,$,L=class{constructor(i){h(this,S);h(this,v);h(this,m);h(this,a);h(this,y);h(this,D);h(this,b,!1);h(this,p);h(this,o);h(this,w);h(this,T,null);h(this,c);h(this,C);r(this,o,i.videoElement),r(this,p,i.contentVideoElement),r(this,w,google.ima.ViewMode.NORMAL),r(this,c,i.originalSize),r(this,C,i.adContainer)}setupAdsManager(){e(this,v)||(r(this,v,new google.ima.AdDisplayContainer(e(this,C),e(this,p))),r(this,m,new google.ima.AdsLoader(e(this,v))),console.log("adsLoader",e(this,m)),e(this,m).addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,i=>{console.log("Ad Manager loaded",i);let t=new google.ima.AdsRenderingSettings;r(this,a,i.getAdsManager(e(this,p),t)),console.log("adsManager",e(this,a)),E(this,S,$).call(this)},!1),e(this,m).addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,i=>{console.log("AD_ERROR Loader",i),e(this,o).dispatchEvent(new Event("onAdsCompleted"))},!1))}static isGoogleImaSDKAvailable(){return"google"in globalThis&&"ima"in globalThis.google?!0:(console.error("Missing google.ima SDK. Make sure you include it via a script tag."),!1)}isReadyForInitialization(){return e(this,v)&&!e(this,a)}isInitialized(){return e(this,v)&&e(this,a)}isReadyForComplete(){return e(this,m)&&e(this,a)}initializeAdDisplayContainer(){var i;(i=e(this,v))==null||i.initialize()}requestAds(i){var s;console.log("requestAds",i);let t=new google.ima.AdsRequest;t.adTagUrl=i,(s=e(this,m))==null||s.requestAds(t)}contentComplete(){var i;(i=e(this,m))==null||i.contentComplete()}isAdPaused(){return e(this,a)&&e(this,b)}resumeAdManager(){var i;(i=e(this,a))==null||i.resume(),r(this,b,!1)}pauseAdManager(){e(this,a)&&e(this,a).pause()}getDuration(){var i,t,s;return(s=(i=e(this,D))==null?void 0:i.duration)!=null?s:(t=e(this,y))==null?void 0:t.getDuration()}getCurrentTime(){var i;return(i=e(this,D))==null?void 0:i.currentTime}getVolume(){var i,t;return(t=(i=e(this,a))==null?void 0:i.getVolume())!=null?t:1}setVolume(i){var t;(t=e(this,a))==null||t.setVolume(i)}isUsingSameVideoElement(){let i=e(this,C).querySelectorAll("video");return console.log("videoElements",i.length,i),i.length===0}updateViewMode(i){r(this,w,i?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL)}updateAdsManagerSize(i,t){var s;r(this,c,{...e(this,c),width:i,height:t}),(s=e(this,a))==null||s.resize(e(this,c).width,e(this,c).height,e(this,w))}get adsLoader(){return e(this,m)}};v=new WeakMap,m=new WeakMap,a=new WeakMap,y=new WeakMap,D=new WeakMap,b=new WeakMap,p=new WeakMap,o=new WeakMap,w=new WeakMap,T=new WeakMap,c=new WeakMap,C=new WeakMap,S=new WeakSet,$=function(){var i,t,s,u,M,A,f,K,I,N,q,G,H;console.log("startAdsManager",e(this,a)),(i=e(this,a))==null||i.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,()=>{var F,j;console.log("CONTENT_PAUSE_REQUESTED");let g=e(this,o).currentTime,U=!e(this,o).paused;(F=e(this,p))!=null&&F.paused||(j=e(this,p))==null||j.pause(),r(this,b,!1),r(this,T,{contentTime:g,wasPlaying:U,originalSrc:e(this,o).src}),this.isUsingSameVideoElement()?(e(this,o).muxDataKeepSession=!0,e(this,o).unload(),e(this,o).muxDataKeepSession=!1):e(this,p).style.display="none"}),(t=e(this,a))==null||t.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,()=>{var g;console.log("CONTENT_RESUME_REQUESTED"),e(this,T)&&this.isUsingSameVideoElement()?(e(this,o).muxDataKeepSession=!0,e(this,o).load(),e(this,o).muxDataKeepSession=!1,(g=e(this,T))!=null&&g.contentTime&&(e(this,o).currentTime=e(this,T).contentTime)):e(this,p).style.display="",r(this,T,null),r(this,D,void 0),r(this,y,void 0),e(this,o).dispatchEvent(new Event("durationchange")),e(this,o).dispatchEvent(new Event("onAdsCompleted"))},!1),(s=e(this,a))==null||s.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,console.log.bind(null,"AD_ERROR Manager"),!1),(u=e(this,a))==null||u.addEventListener(google.ima.AdEvent.Type.CLICK,g=>{this.updateViewMode(!1)},!1),(M=e(this,a))==null||M.addEventListener(google.ima.AdEvent.Type.LOADED,g=>{console.log("loaded",g),r(this,y,g.getAd()),e(this,o).dispatchEvent(new Event("durationchange")),e(this,o).dispatchEvent(new Event("timeupdate")),e(this,o).dispatchEvent(new Event("adbreaktotaladschange"))},!1),(A=e(this,a))==null||A.addEventListener(google.ima.AdEvent.Type.STARTED,g=>{console.log("started",g),r(this,y,g.getAd()),e(this,o).dispatchEvent(new Event("playing")),e(this,o).dispatchEvent(new Event("adbreakadpositionchange"))},!1),(f=e(this,a))==null||f.addEventListener(google.ima.AdEvent.Type.PAUSED,()=>{console.log("Ads paused"),r(this,b,!0),e(this,o).dispatchEvent(new Event("pause"))}),(K=e(this,a))==null||K.addEventListener(google.ima.AdEvent.Type.RESUMED,()=>{console.log("Ads resumed"),r(this,b,!1)}),(I=e(this,a))==null||I.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS,g=>{let U=e(this,o).duration;r(this,D,g.getAdData()),U!==e(this,o).duration&&e(this,o).dispatchEvent(new Event("durationchange")),e(this,o).dispatchEvent(new Event("timeupdate"))},!1),(N=e(this,a))==null||N.addEventListener(google.ima.AdEvent.Type.VOLUME_CHANGED,()=>{console.log("volumeChanged"),e(this,o).dispatchEvent(new Event("volumechange"))},!1),(q=e(this,a))==null||q.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED,()=>{console.log("allAdsCompleted")},!1),(G=e(this,a))==null||G.init(e(this,c).width,e(this,c).height,e(this,w)),(H=e(this,a))==null||H.start()};var Z=(l={})=>" "+Object.entries(l).map(([i,t])=>t===""?`${i}`:`${i}="${t}"`).join(" "),k={AD_TAG_URL:"adtagurl",AD_BREAK:"adbreak"},n,x,d,W,X,P,ee,_,z,V,O,R=class extends J{constructor(){super();h(this,d);h(this,n);h(this,x);new ResizeObserver(s=>{var u;for(let M of s){let{width:A,height:f}=M.contentRect;A>0&&f>0&&((u=e(this,n))==null||u.updateAdsManagerSize(A,f))}}).observe(this)}connectedCallback(){if(console.log("MuxVideoAds connectedCallback"),super.connectedCallback(),!L.isGoogleImaSDKAvailable()){console.error("Missing google.ima SDK. Make sure you include it via a script tag."),E(this,d,W).call(this);return}console.log("AdBreak connectedCallbk",this.adBreak,this.adTagUrl);let t={videoElement:this,contentVideoElement:this.nativeEl,originalSize:this.getBoundingClientRect(),adContainer:e(this,d,P)};r(this,n,new L(t)),e(this,n).setupAdsManager(),E(this,d,X).call(this)}get adTagUrl(){var t;return(t=this.getAttribute(k.AD_TAG_URL))!=null?t:void 0}set adTagUrl(t){if(t!==this.adTagUrl){if(t===void 0){this.removeAttribute(k.AD_TAG_URL);return}this.setAttribute(k.AD_TAG_URL,t)}}get adBreak(){return this.hasAttribute(k.AD_BREAK)}onEnded(){var t;this.adTagUrl&&((t=e(this,n))!=null&&t.isReadyForComplete())&&e(this,n).contentComplete()}handleEvent(t){this.adBreak&&t.type==="ended"||super.handleEvent(t)}play(){var t,s,u,M,A,f;return this.adTagUrl&&this.adBreak?((t=e(this,n))!=null&&t.isAdPaused()&&((s=e(this,n))==null||s.resumeAdManager()),this.dispatchEvent(new Event("playing")),Promise.resolve()):this.adTagUrl?(r(this,x,this.nativeEl.currentTime),r(this,d,!0,_),this.dispatchEvent(new Event("durationchange")),E(this,d,V).call(this,!0),(u=e(this,n))!=null&&u.isReadyForInitialization()&&e(this,n).initializeAdDisplayContainer(),(M=e(this,n))!=null&&M.isReadyForInitialization()||(A=e(this,n))!=null&&A.isInitialized()?e(this,n).requestAds(this.adTagUrl):(f=e(this,n))!=null&&f.isAdPaused()&&e(this,n).resumeAdManager(),Promise.resolve()):(E(this,d,V).call(this,!1),super.play())}pause(){var t;this.adBreak&&((t=e(this,n))==null||t.pauseAdManager()),super.pause()}get paused(){var t,s;return this.adBreak?(s=(t=e(this,n))==null?void 0:t.isAdPaused())!=null?s:!1:super.paused}get duration(){var t,s;return this.adBreak?(s=(t=e(this,n))==null?void 0:t.getDuration())!=null?s:0:super.duration}get currentTime(){var t,s;return this.adBreak?(s=(t=e(this,n))==null?void 0:t.getCurrentTime())!=null?s:0:super.currentTime}set currentTime(t){if(this.adBreak){console.error("CANNOT SEEK DURING AD BREAK");return}super.currentTime=t}get volume(){var t,s;return this.adBreak?(s=(t=e(this,n))==null?void 0:t.getVolume())!=null?s:0:super.volume}set volume(t){var s;this.adBreak&&((s=e(this,n))==null||s.setVolume(t)),super.volume=t}get muted(){var t;return this.adBreak?!((t=e(this,n))!=null&&t.getVolume()):super.muted}set muted(t){var s;this.adBreak&&((s=e(this,n))==null||s.setVolume(t?0:this.volume)),super.muted=t}get readyState(){return this.adBreak?4:super.readyState}async requestPictureInPicture(){if(this.adBreak)throw new Error("Cannot use PiP while ads are playing!");return super.requestPictureInPicture()}get muxDataSDK(){return Y}get muxDataSDKOptions(){var t;return{imaAdsLoader:(t=e(this,n))==null?void 0:t.adsLoader}}set muxDataKeepSession(t){this.toggleAttribute("mux-data-keep-session",!!t)}get muxDataKeepSession(){return this.hasAttribute("mux-data-keep-session")}};n=new WeakMap,x=new WeakMap,d=new WeakSet,W=function(){var s,u;let t=document.createElement("div");t.id="imaUnavailableMessage",t.innerHTML=`
  <strong>Ad experience unavailable.</strong><br />
  <span>This may be due to a missing SDK, network issue, or ad blocker.</span>
`,(u=(s=this.shadowRoot)==null?void 0:s.getElementById("mainContainer"))==null||u.appendChild(t)},X=function(){this.addEventListener("loadedmetadata",()=>{var t,s;if(console.log("loadedmetadata",{adTagUrl:this.adTagUrl,isReady:(t=e(this,n))==null?void 0:t.isReadyForInitialization()}),this.adTagUrl&&((s=e(this,n))!=null&&s.isReadyForInitialization())){e(this,n).initializeAdDisplayContainer();let u=this.nativeEl.paused;this.nativeEl.paused||this.nativeEl.pause(),u||e(this,n).requestAds(this.adTagUrl)}},{once:!0}),this.addEventListener("play",this.play),this.nativeEl.addEventListener("play",t=>{if(this.adBreak&&!e(this,d,O)){console.warn("Video play prevented during ad break"),this.nativeEl.pause();return}}),this.nativeEl.addEventListener("seeking",t=>{var s;this.adBreak&&!e(this,d,O)&&(console.warn("Seek prevented during ad break"),this.nativeEl.currentTime=(s=e(this,x))!=null?s:0,this.nativeEl.dispatchEvent(new Event("timeupdate")))}),this.addEventListener("onAdsCompleted",()=>{r(this,d,!1,_),this.dispatchEvent(new Event("durationchange")),this.adTagUrl=void 0,E(this,d,V).call(this,!1),E(this,d,z).call(this,!1),this.addEventListener("ended",this.onEnded,{once:!0}),setTimeout(()=>{this.play()},100)}),globalThis.addEventListener("mediaenterfullscreenrequest",()=>{var t;(t=e(this,n))==null||t.updateViewMode(!0)}),globalThis.addEventListener("mediaexitfullscreenrequest",()=>{var t;(t=e(this,n))==null||t.updateViewMode(!1)})},P=function(){var t;return(t=this.shadowRoot)==null?void 0:t.getElementById("adContainer")},ee=function(){var t;return(t=this.shadowRoot)==null?void 0:t.getElementById("mainContainer")},_=function(t){t!==this.adBreak&&(this.toggleAttribute(k.AD_BREAK,!!t),E(this,d,z).call(this,t))},z=function(t){this.dispatchEvent(new CustomEvent("adbreakchange",{detail:{isAdBreak:t},composed:!0,bubbles:!0}))},V=function(t){var s;(s=e(this,d,P))==null||s.classList.toggle("ad-playing",t)},O=function(){if(e(this,n))return e(this,n).isUsingSameVideoElement()},R.getTemplateHTML=t=>`
<style>
:host {
  aspect-ratio: var(--media-aspect-ratio, 16 / 9);
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  display: block;
}
video {
  display: block;
  max-width: 100%;
  max-height: 100%;
  min-width: 100%;
  min-height: 100%;
  object-fit: var(--media-object-fit, contain);
  object-position: var(--media-object-position, 50% 50%);
}
video::-webkit-media-text-track-container {
  transform: var(--media-webkit-text-track-transform);
  transition: var(--media-webkit-text-track-transition);
}
#mainContainer {
    position: relative;
    width: 100%;
    height: 100%;
}
#adContainer {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
}
#mainContainer #adContainer.ad-playing {
    z-index: 2;
}
#imaUnavailableMessage {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 1em 1.5em;
  border-radius: 6px;
  font-size: 0.9em;
  text-align: center;
  max-width: 90%;
  line-height: 1.4;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}
</style>
<div id="mainContainer">
    <slot name="media">
      <video id="contentElement" ${Z(t)}></video>
    </slot>
  <div id="adContainer"></div>
</div>
<slot></slot>
  `;globalThis.customElements&&!globalThis.customElements.get("mux-video-ads")&&(globalThis.customElements.define("mux-video-ads",R),globalThis.MuxVideoAds=R);var de=R;export{de as default};
//# sourceMappingURL=index.mjs.map
