var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src/index.ts
import MuxVideoElement from "@mux/mux-video";
import mux from "@mux/mux-data-google-ima";

// src/ads-manager.ts
var _adDisplayContainer, _adsLoader, _adsManager, _ad, _adProgressData, _adPaused, _videoElement, _customMediaElement, _viewMode, _videoBackup, _originalSize, _adContainer, _MuxAdManager_instances, startAdsManager_fn;
var MuxAdManager = class {
  constructor(config) {
    __privateAdd(this, _MuxAdManager_instances);
    __privateAdd(this, _adDisplayContainer);
    __privateAdd(this, _adsLoader);
    __privateAdd(this, _adsManager);
    __privateAdd(this, _ad);
    __privateAdd(this, _adProgressData);
    __privateAdd(this, _adPaused, false);
    __privateAdd(this, _videoElement);
    __privateAdd(this, _customMediaElement);
    __privateAdd(this, _viewMode);
    __privateAdd(this, _videoBackup, null);
    __privateAdd(this, _originalSize);
    __privateAdd(this, _adContainer);
    __privateSet(this, _customMediaElement, config.videoElement);
    __privateSet(this, _videoElement, config.contentVideoElement);
    __privateSet(this, _viewMode, google.ima.ViewMode.NORMAL);
    __privateSet(this, _originalSize, config.originalSize);
    __privateSet(this, _adContainer, config.adContainer);
  }
  setupAdsManager() {
    if (!__privateGet(this, _adDisplayContainer)) {
      __privateSet(this, _adDisplayContainer, new google.ima.AdDisplayContainer(__privateGet(this, _adContainer), __privateGet(this, _videoElement)));
      __privateSet(this, _adsLoader, new google.ima.AdsLoader(__privateGet(this, _adDisplayContainer)));
      console.log("adsLoader", __privateGet(this, _adsLoader));
      __privateGet(this, _adsLoader).addEventListener(
        google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
        (adsManagerLoadedEvent) => {
          console.log("Ad Manager loaded", adsManagerLoadedEvent);
          const adsRenderingSettings = new google.ima.AdsRenderingSettings();
          __privateSet(this, _adsManager, adsManagerLoadedEvent.getAdsManager(__privateGet(this, _videoElement), adsRenderingSettings));
          console.log("adsManager", __privateGet(this, _adsManager));
          __privateMethod(this, _MuxAdManager_instances, startAdsManager_fn).call(this);
        },
        false
      );
      __privateGet(this, _adsLoader).addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        (adErrorEvent) => {
          console.log("AD_ERROR Loader", adErrorEvent);
          __privateGet(this, _customMediaElement).dispatchEvent(new Event("onAdsCompleted"));
        },
        false
      );
    }
  }
  static isGoogleImaSDKAvailable() {
    if (!("google" in globalThis && "ima" in globalThis["google"])) {
      console.error("Missing google.ima SDK. Make sure you include it via a script tag.");
      return false;
    } else {
      return true;
    }
  }
  isReadyForInitialization() {
    return __privateGet(this, _adDisplayContainer) && !__privateGet(this, _adsManager);
  }
  isInitialized() {
    return __privateGet(this, _adDisplayContainer) && __privateGet(this, _adsManager);
  }
  isReadyForComplete() {
    return __privateGet(this, _adsLoader) && __privateGet(this, _adsManager);
  }
  initializeAdDisplayContainer() {
    var _a;
    (_a = __privateGet(this, _adDisplayContainer)) == null ? void 0 : _a.initialize();
  }
  requestAds(adTagUrl) {
    var _a;
    console.log("requestAds", adTagUrl);
    const adsRequest = new google.ima.AdsRequest();
    adsRequest.adTagUrl = adTagUrl;
    (_a = __privateGet(this, _adsLoader)) == null ? void 0 : _a.requestAds(adsRequest);
  }
  contentComplete() {
    var _a;
    (_a = __privateGet(this, _adsLoader)) == null ? void 0 : _a.contentComplete();
  }
  isAdPaused() {
    return __privateGet(this, _adsManager) && __privateGet(this, _adPaused);
  }
  resumeAdManager() {
    var _a;
    (_a = __privateGet(this, _adsManager)) == null ? void 0 : _a.resume();
    __privateSet(this, _adPaused, false);
  }
  pauseAdManager() {
    if (__privateGet(this, _adsManager)) {
      __privateGet(this, _adsManager).pause();
    }
  }
  getDuration() {
    var _a, _b, _c;
    return (_c = (_a = __privateGet(this, _adProgressData)) == null ? void 0 : _a.duration) != null ? _c : (_b = __privateGet(this, _ad)) == null ? void 0 : _b.getDuration();
  }
  getCurrentTime() {
    var _a;
    return (_a = __privateGet(this, _adProgressData)) == null ? void 0 : _a.currentTime;
  }
  getVolume() {
    var _a, _b;
    return (_b = (_a = __privateGet(this, _adsManager)) == null ? void 0 : _a.getVolume()) != null ? _b : 1;
  }
  setVolume(val) {
    var _a;
    (_a = __privateGet(this, _adsManager)) == null ? void 0 : _a.setVolume(val);
  }
  isUsingSameVideoElement() {
    const videoElements = __privateGet(this, _adContainer).querySelectorAll("video");
    console.log("videoElements", videoElements.length, videoElements);
    return videoElements.length === 0;
  }
  updateViewMode(isFullscreen) {
    __privateSet(this, _viewMode, isFullscreen ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL);
  }
  updateAdsManagerSize(width, height) {
    var _a;
    __privateSet(this, _originalSize, { ...__privateGet(this, _originalSize), width, height });
    (_a = __privateGet(this, _adsManager)) == null ? void 0 : _a.resize(__privateGet(this, _originalSize).width, __privateGet(this, _originalSize).height, __privateGet(this, _viewMode));
  }
  get adsLoader() {
    return __privateGet(this, _adsLoader);
  }
};
_adDisplayContainer = new WeakMap();
_adsLoader = new WeakMap();
_adsManager = new WeakMap();
_ad = new WeakMap();
_adProgressData = new WeakMap();
_adPaused = new WeakMap();
_videoElement = new WeakMap();
_customMediaElement = new WeakMap();
_viewMode = new WeakMap();
_videoBackup = new WeakMap();
_originalSize = new WeakMap();
_adContainer = new WeakMap();
_MuxAdManager_instances = new WeakSet();
startAdsManager_fn = function() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  console.log("startAdsManager", __privateGet(this, _adsManager));
  (_a = __privateGet(this, _adsManager)) == null ? void 0 : _a.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, () => {
    var _a2, _b2;
    console.log("CONTENT_PAUSE_REQUESTED");
    const currentTime = __privateGet(this, _customMediaElement).currentTime;
    const wasPlaying = !__privateGet(this, _customMediaElement).paused;
    if (!((_a2 = __privateGet(this, _videoElement)) == null ? void 0 : _a2.paused)) {
      (_b2 = __privateGet(this, _videoElement)) == null ? void 0 : _b2.pause();
    }
    __privateSet(this, _adPaused, false);
    __privateSet(this, _videoBackup, {
      contentTime: currentTime,
      wasPlaying,
      originalSrc: __privateGet(this, _customMediaElement).src
    });
    if (this.isUsingSameVideoElement()) {
      __privateGet(this, _customMediaElement).muxDataKeepSession = true;
      __privateGet(this, _customMediaElement).unload();
      __privateGet(this, _customMediaElement).muxDataKeepSession = false;
    } else {
      __privateGet(this, _videoElement).style.display = "none";
    }
  });
  (_b = __privateGet(this, _adsManager)) == null ? void 0 : _b.addEventListener(
    google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
    () => {
      var _a2;
      console.log("CONTENT_RESUME_REQUESTED");
      if (__privateGet(this, _videoBackup) && this.isUsingSameVideoElement()) {
        __privateGet(this, _customMediaElement).muxDataKeepSession = true;
        __privateGet(this, _customMediaElement).load();
        __privateGet(this, _customMediaElement).muxDataKeepSession = false;
        if ((_a2 = __privateGet(this, _videoBackup)) == null ? void 0 : _a2.contentTime) {
          __privateGet(this, _customMediaElement).currentTime = __privateGet(this, _videoBackup).contentTime;
        }
      } else {
        __privateGet(this, _videoElement).style.display = "";
      }
      __privateSet(this, _videoBackup, null);
      __privateSet(this, _adProgressData, void 0);
      __privateSet(this, _ad, void 0);
      __privateGet(this, _customMediaElement).dispatchEvent(new Event("durationchange"));
      __privateGet(this, _customMediaElement).dispatchEvent(new Event("onAdsCompleted"));
    },
    false
  );
  (_c = __privateGet(this, _adsManager)) == null ? void 0 : _c.addEventListener(
    google.ima.AdErrorEvent.Type.AD_ERROR,
    console.log.bind(null, "AD_ERROR Manager"),
    false
  );
  (_d = __privateGet(this, _adsManager)) == null ? void 0 : _d.addEventListener(
    google.ima.AdEvent.Type.CLICK,
    (adEvent) => {
      this.updateViewMode(false);
    },
    false
  );
  (_e = __privateGet(this, _adsManager)) == null ? void 0 : _e.addEventListener(
    google.ima.AdEvent.Type.LOADED,
    (adEvent) => {
      console.log("loaded", adEvent);
      __privateSet(this, _ad, adEvent.getAd());
      __privateGet(this, _customMediaElement).dispatchEvent(new Event("durationchange"));
      __privateGet(this, _customMediaElement).dispatchEvent(new Event("timeupdate"));
      __privateGet(this, _customMediaElement).dispatchEvent(new Event("adbreaktotaladschange"));
    },
    false
  );
  (_f = __privateGet(this, _adsManager)) == null ? void 0 : _f.addEventListener(
    google.ima.AdEvent.Type.STARTED,
    (adEvent) => {
      console.log("started", adEvent);
      __privateSet(this, _ad, adEvent.getAd());
      __privateGet(this, _customMediaElement).dispatchEvent(new Event("playing"));
      __privateGet(this, _customMediaElement).dispatchEvent(new Event("adbreakadpositionchange"));
    },
    false
  );
  (_g = __privateGet(this, _adsManager)) == null ? void 0 : _g.addEventListener(google.ima.AdEvent.Type.PAUSED, () => {
    console.log("Ads paused");
    __privateSet(this, _adPaused, true);
    __privateGet(this, _customMediaElement).dispatchEvent(new Event("pause"));
  });
  (_h = __privateGet(this, _adsManager)) == null ? void 0 : _h.addEventListener(google.ima.AdEvent.Type.RESUMED, () => {
    console.log("Ads resumed");
    __privateSet(this, _adPaused, false);
  });
  (_i = __privateGet(this, _adsManager)) == null ? void 0 : _i.addEventListener(
    google.ima.AdEvent.Type.AD_PROGRESS,
    (adProgressEvent) => {
      const prevDuration = __privateGet(this, _customMediaElement).duration;
      __privateSet(this, _adProgressData, adProgressEvent.getAdData());
      if (prevDuration !== __privateGet(this, _customMediaElement).duration) {
        __privateGet(this, _customMediaElement).dispatchEvent(new Event("durationchange"));
      }
      __privateGet(this, _customMediaElement).dispatchEvent(new Event("timeupdate"));
    },
    false
  );
  (_j = __privateGet(this, _adsManager)) == null ? void 0 : _j.addEventListener(
    google.ima.AdEvent.Type.VOLUME_CHANGED,
    () => {
      console.log("volumeChanged");
      __privateGet(this, _customMediaElement).dispatchEvent(new Event("volumechange"));
    },
    false
  );
  (_k = __privateGet(this, _adsManager)) == null ? void 0 : _k.addEventListener(
    google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
    () => {
      console.log("allAdsCompleted");
    },
    false
  );
  (_l = __privateGet(this, _adsManager)) == null ? void 0 : _l.init(__privateGet(this, _originalSize).width, __privateGet(this, _originalSize).height, __privateGet(this, _viewMode));
  (_m = __privateGet(this, _adsManager)) == null ? void 0 : _m.start();
};

// src/index.ts
var serializeAttributes = (attrs = {}) => {
  return " " + Object.entries(attrs).map(([key, value]) => value === "" ? `${key}` : `${key}="${value}"`).join(" ");
};
var Attributes = {
  AD_TAG_URL: "adtagurl",
  AD_BREAK: "adbreak"
};
var _muxAdManager, _lastCurrentime, _MuxVideoAds_instances, showAdBlockedMessage_fn, setupEventListeners_fn, adContainer_get, mainContainer_get, adBreak_set, dispatchAdBreakChange_fn, setAdContainerPlaying_fn, isUsingSameVideoElement_get;
var MuxVideoAds = class extends MuxVideoElement {
  constructor() {
    super();
    __privateAdd(this, _MuxVideoAds_instances);
    __privateAdd(this, _muxAdManager);
    __privateAdd(this, _lastCurrentime);
    const resizeObserver = new ResizeObserver((entries) => {
      var _a;
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          (_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.updateAdsManagerSize(width, height);
        }
      }
    });
    resizeObserver.observe(this);
  }
  connectedCallback() {
    console.log("MuxVideoAds connectedCallback");
    super.connectedCallback();
    if (!MuxAdManager.isGoogleImaSDKAvailable()) {
      console.error("Missing google.ima SDK. Make sure you include it via a script tag.");
      __privateMethod(this, _MuxVideoAds_instances, showAdBlockedMessage_fn).call(this);
      return;
    }
    console.log("AdBreak connectedCallbk", this.adBreak, this.adTagUrl);
    const config = {
      videoElement: this,
      contentVideoElement: this.nativeEl,
      originalSize: this.getBoundingClientRect(),
      adContainer: __privateGet(this, _MuxVideoAds_instances, adContainer_get)
    };
    __privateSet(this, _muxAdManager, new MuxAdManager(config));
    __privateGet(this, _muxAdManager).setupAdsManager();
    __privateMethod(this, _MuxVideoAds_instances, setupEventListeners_fn).call(this);
  }
  get adTagUrl() {
    var _a;
    return (_a = this.getAttribute(Attributes.AD_TAG_URL)) != null ? _a : void 0;
  }
  set adTagUrl(value) {
    if (value === this.adTagUrl) return;
    if (value === void 0) {
      this.removeAttribute(Attributes.AD_TAG_URL);
      return;
    }
    this.setAttribute(Attributes.AD_TAG_URL, value);
  }
  get adBreak() {
    return this.hasAttribute(Attributes.AD_BREAK);
  }
  onEnded() {
    var _a;
    if (this.adTagUrl && ((_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.isReadyForComplete())) {
      __privateGet(this, _muxAdManager).contentComplete();
    }
  }
  handleEvent(event) {
    if (this.adBreak && event.type === "ended") {
      return;
    }
    super.handleEvent(event);
  }
  play() {
    var _a, _b, _c, _d, _e, _f;
    if (this.adTagUrl && this.adBreak) {
      if ((_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.isAdPaused()) {
        (_b = __privateGet(this, _muxAdManager)) == null ? void 0 : _b.resumeAdManager();
      }
      this.dispatchEvent(new Event("playing"));
      return Promise.resolve();
    }
    if (this.adTagUrl) {
      __privateSet(this, _lastCurrentime, this.nativeEl.currentTime);
      __privateSet(this, _MuxVideoAds_instances, true, adBreak_set);
      this.dispatchEvent(new Event("durationchange"));
      __privateMethod(this, _MuxVideoAds_instances, setAdContainerPlaying_fn).call(this, true);
      if ((_c = __privateGet(this, _muxAdManager)) == null ? void 0 : _c.isReadyForInitialization()) {
        __privateGet(this, _muxAdManager).initializeAdDisplayContainer();
      }
      if (((_d = __privateGet(this, _muxAdManager)) == null ? void 0 : _d.isReadyForInitialization()) || ((_e = __privateGet(this, _muxAdManager)) == null ? void 0 : _e.isInitialized())) {
        __privateGet(this, _muxAdManager).requestAds(this.adTagUrl);
      } else if ((_f = __privateGet(this, _muxAdManager)) == null ? void 0 : _f.isAdPaused()) {
        __privateGet(this, _muxAdManager).resumeAdManager();
      }
      return Promise.resolve();
    }
    __privateMethod(this, _MuxVideoAds_instances, setAdContainerPlaying_fn).call(this, false);
    return super.play();
  }
  pause() {
    var _a;
    if (this.adBreak) {
      (_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.pauseAdManager();
    }
    super.pause();
  }
  get paused() {
    var _a, _b;
    if (this.adBreak) {
      return (_b = (_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.isAdPaused()) != null ? _b : false;
    }
    return super.paused;
  }
  get duration() {
    var _a, _b;
    if (this.adBreak) {
      return (_b = (_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.getDuration()) != null ? _b : 0;
    }
    return super.duration;
  }
  get currentTime() {
    var _a, _b;
    if (this.adBreak) {
      return (_b = (_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.getCurrentTime()) != null ? _b : 0;
    }
    return super.currentTime;
  }
  set currentTime(val) {
    if (this.adBreak) {
      console.error("CANNOT SEEK DURING AD BREAK");
      return;
    }
    super.currentTime = val;
  }
  get volume() {
    var _a, _b;
    if (this.adBreak) {
      return (_b = (_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.getVolume()) != null ? _b : 0;
    }
    return super.volume;
  }
  set volume(val) {
    var _a;
    if (this.adBreak) {
      (_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.setVolume(val);
    }
    super.volume = val;
  }
  get muted() {
    var _a;
    if (this.adBreak) {
      return !((_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.getVolume());
    }
    return super.muted;
  }
  set muted(val) {
    var _a;
    if (this.adBreak) {
      (_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.setVolume(val ? 0 : this.volume);
    }
    super.muted = val;
  }
  get readyState() {
    if (this.adBreak) {
      return 4;
    }
    return super.readyState;
  }
  async requestPictureInPicture() {
    if (this.adBreak) {
      throw new Error("Cannot use PiP while ads are playing!");
    }
    return super.requestPictureInPicture();
  }
  get muxDataSDK() {
    return mux;
  }
  get muxDataSDKOptions() {
    var _a;
    return {
      imaAdsLoader: (_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.adsLoader
    };
  }
  set muxDataKeepSession(val) {
    this.toggleAttribute("mux-data-keep-session", Boolean(val));
  }
  get muxDataKeepSession() {
    return this.hasAttribute("mux-data-keep-session");
  }
};
_muxAdManager = new WeakMap();
_lastCurrentime = new WeakMap();
_MuxVideoAds_instances = new WeakSet();
showAdBlockedMessage_fn = function() {
  var _a, _b;
  const fallback = document.createElement("div");
  fallback.id = "imaUnavailableMessage";
  fallback.innerHTML = `
  <strong>Ad experience unavailable.</strong><br />
  <span>This may be due to a missing SDK, network issue, or ad blocker.</span>
`;
  (_b = (_a = this.shadowRoot) == null ? void 0 : _a.getElementById("mainContainer")) == null ? void 0 : _b.appendChild(fallback);
};
setupEventListeners_fn = function() {
  this.addEventListener(
    "loadedmetadata",
    () => {
      var _a, _b;
      console.log("loadedmetadata", {
        adTagUrl: this.adTagUrl,
        isReady: (_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.isReadyForInitialization()
      });
      if (this.adTagUrl && ((_b = __privateGet(this, _muxAdManager)) == null ? void 0 : _b.isReadyForInitialization())) {
        __privateGet(this, _muxAdManager).initializeAdDisplayContainer();
        const prevPaused = this.nativeEl.paused;
        if (!this.nativeEl.paused) {
          this.nativeEl.pause();
        }
        if (!prevPaused) {
          __privateGet(this, _muxAdManager).requestAds(this.adTagUrl);
        }
      }
    },
    { once: true }
  );
  this.addEventListener("play", this.play);
  this.nativeEl.addEventListener("play", (event) => {
    if (this.adBreak && !__privateGet(this, _MuxVideoAds_instances, isUsingSameVideoElement_get)) {
      console.warn("Video play prevented during ad break");
      this.nativeEl.pause();
      return;
    }
  });
  this.nativeEl.addEventListener("seeking", (event) => {
    var _a;
    if (this.adBreak && !__privateGet(this, _MuxVideoAds_instances, isUsingSameVideoElement_get)) {
      console.warn("Seek prevented during ad break");
      this.nativeEl.currentTime = (_a = __privateGet(this, _lastCurrentime)) != null ? _a : 0;
      this.nativeEl.dispatchEvent(new Event("timeupdate"));
    }
  });
  this.addEventListener("onAdsCompleted", () => {
    __privateSet(this, _MuxVideoAds_instances, false, adBreak_set);
    this.dispatchEvent(new Event("durationchange"));
    this.adTagUrl = void 0;
    __privateMethod(this, _MuxVideoAds_instances, setAdContainerPlaying_fn).call(this, false);
    __privateMethod(this, _MuxVideoAds_instances, dispatchAdBreakChange_fn).call(this, false);
    this.addEventListener("ended", this.onEnded, { once: true });
    setTimeout(() => {
      this.play();
    }, 100);
  });
  globalThis.addEventListener("mediaenterfullscreenrequest", () => {
    var _a;
    (_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.updateViewMode(true);
  });
  globalThis.addEventListener("mediaexitfullscreenrequest", () => {
    var _a;
    (_a = __privateGet(this, _muxAdManager)) == null ? void 0 : _a.updateViewMode(false);
  });
};
adContainer_get = function() {
  var _a;
  return (_a = this.shadowRoot) == null ? void 0 : _a.getElementById("adContainer");
};
mainContainer_get = function() {
  var _a;
  return (_a = this.shadowRoot) == null ? void 0 : _a.getElementById("mainContainer");
};
adBreak_set = function(val) {
  if (val === this.adBreak) return;
  this.toggleAttribute(Attributes.AD_BREAK, !!val);
  __privateMethod(this, _MuxVideoAds_instances, dispatchAdBreakChange_fn).call(this, val);
};
dispatchAdBreakChange_fn = function(isAdBreak) {
  this.dispatchEvent(
    new CustomEvent("adbreakchange", {
      detail: { isAdBreak },
      composed: true,
      bubbles: true
    })
  );
};
setAdContainerPlaying_fn = function(isPlaying) {
  var _a;
  (_a = __privateGet(this, _MuxVideoAds_instances, adContainer_get)) == null ? void 0 : _a.classList.toggle("ad-playing", isPlaying);
};
isUsingSameVideoElement_get = function() {
  if (__privateGet(this, _muxAdManager)) {
    return __privateGet(this, _muxAdManager).isUsingSameVideoElement();
  }
  return void 0;
};
MuxVideoAds.getTemplateHTML = (attrs) => {
  return `
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
      <video id="contentElement" ${serializeAttributes(attrs)}></video>
    </slot>
  <div id="adContainer"></div>
</div>
<slot></slot>
  `;
};
if (globalThis.customElements && !globalThis.customElements.get("mux-video-ads")) {
  globalThis.customElements.define("mux-video-ads", MuxVideoAds);
  globalThis.MuxVideoAds = MuxVideoAds;
}
var index_default = MuxVideoAds;
export {
  index_default as default
};
//# sourceMappingURL=index.mjs.map
