"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  MediaError: () => import_mux_video2.MediaError,
  default: () => index_default,
  generatePlayerInitTime: () => import_playback_core5.generatePlayerInitTime,
  getVideoAttribute: () => getVideoAttribute2,
  playerSoftwareName: () => playerSoftwareName,
  playerSoftwareVersion: () => playerSoftwareVersion
});
module.exports = __toCommonJS(index_exports);

// src/polyfills/index.ts
var EventTarget = class {
  addEventListener() {
  }
  removeEventListener() {
  }
  dispatchEvent(_event) {
    return true;
  }
};
if (typeof DocumentFragment === "undefined") {
  class DocumentFragment3 extends EventTarget {
  }
  globalThis.DocumentFragment = DocumentFragment3;
}
var HTMLElement = class extends EventTarget {
};
var HTMLVideoElement = class extends EventTarget {
};
var customElements2 = {
  get(_name) {
    return void 0;
  },
  define(_name, _constructor, _options) {
  },
  getName(_constructor) {
    return null;
  },
  upgrade(_root) {
  },
  whenDefined(_name) {
    return Promise.resolve(HTMLElement);
  }
};
var _detail;
var CustomEvent2 = class {
  constructor(_typeArg, eventInitDict = {}) {
    __privateAdd(this, _detail);
    __privateSet(this, _detail, eventInitDict == null ? void 0 : eventInitDict.detail);
  }
  get detail() {
    return __privateGet(this, _detail);
  }
  initCustomEvent() {
  }
};
_detail = new WeakMap();
function createElement(_tagName, _options) {
  return new HTMLElement();
}
var globalThisShim = {
  document: {
    createElement
  },
  DocumentFragment,
  customElements: customElements2,
  CustomEvent: CustomEvent2,
  EventTarget,
  HTMLElement,
  HTMLVideoElement
};
var isServer = typeof window === "undefined" || typeof globalThis.customElements === "undefined";
var internalGlobalThis = isServer ? globalThisShim : globalThis;
var internalDocument = isServer ? globalThisShim.document : globalThis.document;

// ../../node_modules/media-chrome/dist/constants.js
var MediaUIEvents = {
  MEDIA_PLAY_REQUEST: "mediaplayrequest",
  MEDIA_PAUSE_REQUEST: "mediapauserequest",
  MEDIA_MUTE_REQUEST: "mediamuterequest",
  MEDIA_UNMUTE_REQUEST: "mediaunmuterequest",
  MEDIA_VOLUME_REQUEST: "mediavolumerequest",
  MEDIA_SEEK_REQUEST: "mediaseekrequest",
  MEDIA_AIRPLAY_REQUEST: "mediaairplayrequest",
  MEDIA_ENTER_FULLSCREEN_REQUEST: "mediaenterfullscreenrequest",
  MEDIA_EXIT_FULLSCREEN_REQUEST: "mediaexitfullscreenrequest",
  MEDIA_PREVIEW_REQUEST: "mediapreviewrequest",
  MEDIA_ENTER_PIP_REQUEST: "mediaenterpiprequest",
  MEDIA_EXIT_PIP_REQUEST: "mediaexitpiprequest",
  MEDIA_ENTER_CAST_REQUEST: "mediaentercastrequest",
  MEDIA_EXIT_CAST_REQUEST: "mediaexitcastrequest",
  MEDIA_SHOW_TEXT_TRACKS_REQUEST: "mediashowtexttracksrequest",
  MEDIA_HIDE_TEXT_TRACKS_REQUEST: "mediahidetexttracksrequest",
  MEDIA_SHOW_SUBTITLES_REQUEST: "mediashowsubtitlesrequest",
  MEDIA_DISABLE_SUBTITLES_REQUEST: "mediadisablesubtitlesrequest",
  MEDIA_TOGGLE_SUBTITLES_REQUEST: "mediatogglesubtitlesrequest",
  MEDIA_PLAYBACK_RATE_REQUEST: "mediaplaybackraterequest",
  MEDIA_RENDITION_REQUEST: "mediarenditionrequest",
  MEDIA_AUDIO_TRACK_REQUEST: "mediaaudiotrackrequest",
  MEDIA_SEEK_TO_LIVE_REQUEST: "mediaseektoliverequest",
  REGISTER_MEDIA_STATE_RECEIVER: "registermediastatereceiver",
  UNREGISTER_MEDIA_STATE_RECEIVER: "unregistermediastatereceiver"
};
var MediaStateReceiverAttributes = {
  MEDIA_CHROME_ATTRIBUTES: "mediachromeattributes",
  MEDIA_CONTROLLER: "mediacontroller"
};
var MediaUIProps = {
  MEDIA_AIRPLAY_UNAVAILABLE: "mediaAirplayUnavailable",
  MEDIA_AUDIO_TRACK_ENABLED: "mediaAudioTrackEnabled",
  MEDIA_AUDIO_TRACK_LIST: "mediaAudioTrackList",
  MEDIA_AUDIO_TRACK_UNAVAILABLE: "mediaAudioTrackUnavailable",
  MEDIA_BUFFERED: "mediaBuffered",
  MEDIA_CAST_UNAVAILABLE: "mediaCastUnavailable",
  MEDIA_CHAPTERS_CUES: "mediaChaptersCues",
  MEDIA_CURRENT_TIME: "mediaCurrentTime",
  MEDIA_DURATION: "mediaDuration",
  MEDIA_ENDED: "mediaEnded",
  MEDIA_ERROR: "mediaError",
  MEDIA_ERROR_CODE: "mediaErrorCode",
  MEDIA_ERROR_MESSAGE: "mediaErrorMessage",
  MEDIA_FULLSCREEN_UNAVAILABLE: "mediaFullscreenUnavailable",
  MEDIA_HAS_PLAYED: "mediaHasPlayed",
  MEDIA_HEIGHT: "mediaHeight",
  MEDIA_IS_AIRPLAYING: "mediaIsAirplaying",
  MEDIA_IS_CASTING: "mediaIsCasting",
  MEDIA_IS_FULLSCREEN: "mediaIsFullscreen",
  MEDIA_IS_PIP: "mediaIsPip",
  MEDIA_LOADING: "mediaLoading",
  MEDIA_MUTED: "mediaMuted",
  MEDIA_PAUSED: "mediaPaused",
  MEDIA_PIP_UNAVAILABLE: "mediaPipUnavailable",
  MEDIA_PLAYBACK_RATE: "mediaPlaybackRate",
  MEDIA_PREVIEW_CHAPTER: "mediaPreviewChapter",
  MEDIA_PREVIEW_COORDS: "mediaPreviewCoords",
  MEDIA_PREVIEW_IMAGE: "mediaPreviewImage",
  MEDIA_PREVIEW_TIME: "mediaPreviewTime",
  MEDIA_RENDITION_LIST: "mediaRenditionList",
  MEDIA_RENDITION_SELECTED: "mediaRenditionSelected",
  MEDIA_RENDITION_UNAVAILABLE: "mediaRenditionUnavailable",
  MEDIA_SEEKABLE: "mediaSeekable",
  MEDIA_STREAM_TYPE: "mediaStreamType",
  MEDIA_SUBTITLES_LIST: "mediaSubtitlesList",
  MEDIA_SUBTITLES_SHOWING: "mediaSubtitlesShowing",
  MEDIA_TARGET_LIVE_WINDOW: "mediaTargetLiveWindow",
  MEDIA_TIME_IS_LIVE: "mediaTimeIsLive",
  MEDIA_VOLUME: "mediaVolume",
  MEDIA_VOLUME_LEVEL: "mediaVolumeLevel",
  MEDIA_VOLUME_UNAVAILABLE: "mediaVolumeUnavailable",
  MEDIA_WIDTH: "mediaWidth"
};
var MediaUIPropsEntries = Object.entries(
  MediaUIProps
);
var MediaUIAttributes = MediaUIPropsEntries.reduce(
  (dictObj, [key, propName]) => {
    dictObj[key] = propName.toLowerCase();
    return dictObj;
  },
  {}
);
var AdditionalStateChangeEvents = {
  USER_INACTIVE: "userinactivechange",
  BREAKPOINTS_CHANGE: "breakpointchange",
  BREAKPOINTS_COMPUTED: "breakpointscomputed"
};
var MediaStateChangeEvents = MediaUIPropsEntries.reduce(
  (dictObj, [key, propName]) => {
    dictObj[key] = propName.toLowerCase();
    return dictObj;
  },
  { ...AdditionalStateChangeEvents }
);
var StateChangeEventToAttributeMap = Object.entries(
  MediaStateChangeEvents
).reduce(
  (mapObj, [key, eventType]) => {
    const attrName = MediaUIAttributes[key];
    if (attrName) {
      mapObj[eventType] = attrName;
    }
    return mapObj;
  },
  { userinactivechange: "userinactive" }
);
var AttributeToStateChangeEventMap = Object.entries(
  MediaUIAttributes
).reduce(
  (mapObj, [key, attrName]) => {
    const evtType = MediaStateChangeEvents[key];
    if (evtType) {
      mapObj[attrName] = evtType;
    }
    return mapObj;
  },
  { userinactive: "userinactivechange" }
);
var TextTrackKinds = {
  SUBTITLES: "subtitles",
  CAPTIONS: "captions",
  DESCRIPTIONS: "descriptions",
  CHAPTERS: "chapters",
  METADATA: "metadata"
};
var TextTrackModes = {
  DISABLED: "disabled",
  HIDDEN: "hidden",
  SHOWING: "showing"
};
var PointerTypes = {
  MOUSE: "mouse",
  PEN: "pen",
  TOUCH: "touch"
};
var AvailabilityStates = {
  UNAVAILABLE: "unavailable",
  UNSUPPORTED: "unsupported"
};
var StreamTypes = {
  LIVE: "live",
  ON_DEMAND: "on-demand",
  UNKNOWN: "unknown"
};
var WebkitPresentationModes = {
  INLINE: "inline",
  FULLSCREEN: "fullscreen",
  PICTURE_IN_PICTURE: "picture-in-picture"
};

// ../../node_modules/media-chrome/dist/utils/utils.js
function stringifyRenditionList(renditions) {
  return renditions == null ? void 0 : renditions.map(stringifyRendition).join(" ");
}
function parseRenditionList(renditions) {
  return renditions == null ? void 0 : renditions.split(/\s+/).map(parseRendition);
}
function stringifyRendition(rendition) {
  if (rendition) {
    const { id, width, height } = rendition;
    return [id, width, height].filter((a) => a != null).join(":");
  }
}
function parseRendition(rendition) {
  if (rendition) {
    const [id, width, height] = rendition.split(":");
    return { id, width: +width, height: +height };
  }
}
function stringifyAudioTrackList(audioTracks) {
  return audioTracks == null ? void 0 : audioTracks.map(stringifyAudioTrack).join(" ");
}
function parseAudioTrackList(audioTracks) {
  return audioTracks == null ? void 0 : audioTracks.split(/\s+/).map(parseAudioTrack);
}
function stringifyAudioTrack(audioTrack) {
  if (audioTrack) {
    const { id, kind, language, label } = audioTrack;
    return [id, kind, language, label].filter((a) => a != null).join(":");
  }
}
function parseAudioTrack(audioTrack) {
  if (audioTrack) {
    const [id, kind, language, label] = audioTrack.split(":");
    return {
      id,
      kind,
      language,
      label
    };
  }
}
function camelCase(name) {
  return name.replace(/[-_]([a-z])/g, ($0, $1) => $1.toUpperCase());
}
function isValidNumber(x) {
  return typeof x === "number" && !Number.isNaN(x) && Number.isFinite(x);
}
function isNumericString(str) {
  if (typeof str != "string")
    return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}
var delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ../../node_modules/media-chrome/dist/utils/time.js
var UnitLabels = [
  {
    singular: "hour",
    plural: "hours"
  },
  {
    singular: "minute",
    plural: "minutes"
  },
  {
    singular: "second",
    plural: "seconds"
  }
];
var toTimeUnitPhrase = (timeUnitValue, unitIndex) => {
  const unitLabel = timeUnitValue === 1 ? UnitLabels[unitIndex].singular : UnitLabels[unitIndex].plural;
  return `${timeUnitValue} ${unitLabel}`;
};
var formatAsTimePhrase = (seconds) => {
  if (!isValidNumber(seconds))
    return "";
  const positiveSeconds = Math.abs(seconds);
  const negative = positiveSeconds !== seconds;
  const secondsDateTime = new Date(0, 0, 0, 0, 0, positiveSeconds, 0);
  const timeParts = [
    secondsDateTime.getHours(),
    secondsDateTime.getMinutes(),
    secondsDateTime.getSeconds()
  ];
  const timeString = timeParts.map(
    (timeUnitValue, index) => timeUnitValue && toTimeUnitPhrase(timeUnitValue, index)
  ).filter((x) => x).join(", ");
  const negativeSuffix = negative ? " remaining" : "";
  return `${timeString}${negativeSuffix}`;
};
function formatTime(seconds, guide) {
  let negative = false;
  if (seconds < 0) {
    negative = true;
    seconds = 0 - seconds;
  }
  seconds = seconds < 0 ? 0 : seconds;
  let s = Math.floor(seconds % 60);
  let m = Math.floor(seconds / 60 % 60);
  let h = Math.floor(seconds / 3600);
  const gm = Math.floor(guide / 60 % 60);
  const gh = Math.floor(guide / 3600);
  if (isNaN(seconds) || seconds === Infinity) {
    h = m = s = "0";
  }
  h = h > 0 || gh > 0 ? h + ":" : "";
  m = ((h || gm >= 10) && m < 10 ? "0" + m : m) + ":";
  s = s < 10 ? "0" + s : s;
  return (negative ? "-" : "") + h + m + s;
}
var emptyTimeRanges = Object.freeze({
  length: 0,
  start(index) {
    const unsignedIdx = index >>> 0;
    if (unsignedIdx >= this.length) {
      throw new DOMException(
        `Failed to execute 'start' on 'TimeRanges': The index provided (${unsignedIdx}) is greater than or equal to the maximum bound (${this.length}).`
      );
    }
    return 0;
  },
  end(index) {
    const unsignedIdx = index >>> 0;
    if (unsignedIdx >= this.length) {
      throw new DOMException(
        `Failed to execute 'end' on 'TimeRanges': The index provided (${unsignedIdx}) is greater than or equal to the maximum bound (${this.length}).`
      );
    }
    return 0;
  }
});

// ../../node_modules/media-chrome/dist/lang/en.js
var En = {
  "Start airplay": "Start airplay",
  "Stop airplay": "Stop airplay",
  Audio: "Audio",
  Captions: "Captions",
  "Enable captions": "Enable captions",
  "Disable captions": "Disable captions",
  "Start casting": "Start casting",
  "Stop casting": "Stop casting",
  "Enter fullscreen mode": "Enter fullscreen mode",
  "Exit fullscreen mode": "Exit fullscreen mode",
  Mute: "Mute",
  Unmute: "Unmute",
  "Enter picture in picture mode": "Enter picture in picture mode",
  "Exit picture in picture mode": "Exit picture in picture mode",
  Play: "Play",
  Pause: "Pause",
  "Playback rate": "Playback rate",
  "Playback rate {playbackRate}": "Playback rate {playbackRate}",
  Quality: "Quality",
  "Seek backward": "Seek backward",
  "Seek forward": "Seek forward",
  Settings: "Settings",
  "audio player": "audio player",
  "video player": "video player",
  volume: "volume",
  seek: "seek",
  "closed captions": "closed captions",
  "current playback rate": "current playback rate",
  "playback time": "playback time",
  "media loading": "media loading",
  settings: "settings",
  "audio tracks": "audio tracks",
  quality: "quality",
  play: "play",
  pause: "pause",
  mute: "mute",
  unmute: "unmute",
  live: "live",
  "start airplay": "start airplay",
  "stop airplay": "stop airplay",
  "start casting": "start casting",
  "stop casting": "stop casting",
  "enter fullscreen mode": "enter fullscreen mode",
  "exit fullscreen mode": "exit fullscreen mode",
  "enter picture in picture mode": "enter picture in picture mode",
  "exit picture in picture mode": "exit picture in picture mode",
  "seek to live": "seek to live",
  "playing live": "playing live",
  "seek back {seekOffset} seconds": "seek back {seekOffset} seconds",
  "seek forward {seekOffset} seconds": "seek forward {seekOffset} seconds",
  "Network Error": "Network Error",
  "Decode Error": "Decode Error",
  "Source Not Supported": "Source Not Supported",
  "Encryption Error": "Encryption Error",
  "A network error caused the media download to fail.": "A network error caused the media download to fail.",
  "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.": "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",
  "An unsupported error occurred. The server or network failed, or your browser does not support this format.": "An unsupported error occurred. The server or network failed, or your browser does not support this format.",
  "The media is encrypted and there are no keys to decrypt it.": "The media is encrypted and there are no keys to decrypt it."
};

// ../../node_modules/media-chrome/dist/utils/i18n.js
var translationsLanguages = {
  en: En
};
var getBrowserLanguage = () => {
  var _a3;
  return ((_a3 = globalThis.navigator) == null ? void 0 : _a3.language.split("-")[0]) || "en";
};
var t = (key, variables = {}) => {
  var _a3;
  const result = ((_a3 = translationsLanguages[getBrowserLanguage()]) == null ? void 0 : _a3[key]) || En[key];
  return result.replace(
    /\{(\w+)\}/g,
    (_, varName) => variables[varName] !== void 0 ? String(variables[varName]) : `{${varName}}`
  );
};

// ../../node_modules/media-chrome/dist/utils/server-safe-globals.js
var EventTarget2 = class {
  addEventListener() {
  }
  removeEventListener() {
  }
  dispatchEvent() {
    return true;
  }
};
var Node = class extends EventTarget2 {
};
var Element2 = class extends Node {
  constructor() {
    super(...arguments);
    this.role = null;
  }
};
var ResizeObserver = class {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
};
var documentShim = {
  createElement: function() {
    return new globalThisShim2.HTMLElement();
  },
  createElementNS: function() {
    return new globalThisShim2.HTMLElement();
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  dispatchEvent(_event) {
    return false;
  }
};
var globalThisShim2 = {
  ResizeObserver,
  document: documentShim,
  Node,
  Element: Element2,
  HTMLElement: class HTMLElement2 extends Element2 {
    constructor() {
      super(...arguments);
      this.innerHTML = "";
    }
    get content() {
      return new globalThisShim2.DocumentFragment();
    }
  },
  DocumentFragment: class DocumentFragment2 extends EventTarget2 {
  },
  customElements: {
    get: function() {
    },
    define: function() {
    },
    whenDefined: function() {
    }
  },
  localStorage: {
    getItem(_key) {
      return null;
    },
    setItem(_key, _value2) {
    },
    removeItem(_key) {
    }
  },
  CustomEvent: function CustomEvent3() {
  },
  getComputedStyle: function() {
  },
  navigator: {
    languages: [],
    get userAgent() {
      return "";
    }
  },
  matchMedia(media) {
    return {
      matches: false,
      media
    };
  }
};
var isServer2 = typeof window === "undefined" || typeof window.customElements === "undefined";
var isShimmed = Object.keys(globalThisShim2).every((key) => key in globalThis);
var GlobalThis = isServer2 && !isShimmed ? globalThisShim2 : globalThis;
var Document2 = isServer2 && !isShimmed ? documentShim : globalThis.document;

// ../../node_modules/media-chrome/dist/utils/resize-observer.js
var callbacksMap = /* @__PURE__ */ new WeakMap();
var getCallbacks = (element) => {
  let callbacks = callbacksMap.get(element);
  if (!callbacks)
    callbacksMap.set(element, callbacks = /* @__PURE__ */ new Set());
  return callbacks;
};
var observer = new GlobalThis.ResizeObserver(
  (entries) => {
    for (const entry of entries) {
      for (const callback of getCallbacks(entry.target)) {
        callback(entry);
      }
    }
  }
);
function observeResize(element, callback) {
  getCallbacks(element).add(callback);
  observer.observe(element);
}
function unobserveResize(element, callback) {
  const callbacks = getCallbacks(element);
  callbacks.delete(callback);
  if (!callbacks.size) {
    observer.unobserve(element);
  }
}

// ../../node_modules/media-chrome/dist/utils/element-utils.js
function namedNodeMapToObject(namedNodeMap) {
  const obj = {};
  for (const attr of namedNodeMap) {
    obj[attr.name] = attr.value;
  }
  return obj;
}
function getMediaController(host) {
  var _a3;
  return (_a3 = getAttributeMediaController(host)) != null ? _a3 : closestComposedNode(host, "media-controller");
}
function getAttributeMediaController(host) {
  var _a3;
  const { MEDIA_CONTROLLER } = MediaStateReceiverAttributes;
  const mediaControllerId = host.getAttribute(MEDIA_CONTROLLER);
  if (mediaControllerId) {
    return (_a3 = getDocumentOrShadowRoot(host)) == null ? void 0 : _a3.getElementById(
      mediaControllerId
    );
  }
}
var updateIconText = (svg, value, selector = ".value") => {
  const node = svg.querySelector(selector);
  if (!node)
    return;
  node.textContent = value;
};
var getAllSlotted = (el, name) => {
  const slotSelector = `slot[name="${name}"]`;
  const slot = el.shadowRoot.querySelector(slotSelector);
  if (!slot)
    return [];
  return slot.children;
};
var getSlotted = (el, name) => getAllSlotted(el, name)[0];
var containsComposedNode = (rootNode, childNode) => {
  if (!rootNode || !childNode)
    return false;
  if (rootNode == null ? void 0 : rootNode.contains(childNode))
    return true;
  return containsComposedNode(
    rootNode,
    childNode.getRootNode().host
  );
};
var closestComposedNode = (childNode, selector) => {
  if (!childNode)
    return null;
  const closest = childNode.closest(selector);
  if (closest)
    return closest;
  return closestComposedNode(
    childNode.getRootNode().host,
    selector
  );
};
function getActiveElement(root = document) {
  var _a3;
  const activeEl = root == null ? void 0 : root.activeElement;
  if (!activeEl)
    return null;
  return (_a3 = getActiveElement(activeEl.shadowRoot)) != null ? _a3 : activeEl;
}
function getDocumentOrShadowRoot(node) {
  var _a3;
  const rootNode = (_a3 = node == null ? void 0 : node.getRootNode) == null ? void 0 : _a3.call(node);
  if (rootNode instanceof ShadowRoot || rootNode instanceof Document) {
    return rootNode;
  }
  return null;
}
function isElementVisible(element, { depth = 3, checkOpacity = true, checkVisibilityCSS = true } = {}) {
  if (element.checkVisibility) {
    return element.checkVisibility({
      checkOpacity,
      checkVisibilityCSS
    });
  }
  let el = element;
  while (el && depth > 0) {
    const style = getComputedStyle(el);
    if (checkOpacity && style.opacity === "0" || checkVisibilityCSS && style.visibility === "hidden" || style.display === "none") {
      return false;
    }
    el = el.parentElement;
    depth--;
  }
  return true;
}
function getPointProgressOnLine(x, y, p1, p2) {
  const segment = distance(p1, p2);
  const toStart = distance(p1, { x, y });
  const toEnd = distance(p2, { x, y });
  if (toStart > segment || toEnd > segment) {
    return toStart > toEnd ? 1 : 0;
  }
  return toStart / segment;
}
function distance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function getOrInsertCSSRule(styleParent, selectorText) {
  const cssRule = getCSSRule(styleParent, (st) => st === selectorText);
  if (cssRule)
    return cssRule;
  return insertCSSRule(styleParent, selectorText);
}
function getCSSRule(styleParent, predicate) {
  var _a3, _b2;
  let style;
  for (style of (_a3 = styleParent.querySelectorAll("style:not([media])")) != null ? _a3 : []) {
    let cssRules;
    try {
      cssRules = (_b2 = style.sheet) == null ? void 0 : _b2.cssRules;
    } catch {
      continue;
    }
    for (const rule of cssRules != null ? cssRules : []) {
      if (predicate(rule.selectorText))
        return rule;
    }
  }
}
function insertCSSRule(styleParent, selectorText) {
  var _a3, _b2;
  const styles = (_a3 = styleParent.querySelectorAll("style:not([media])")) != null ? _a3 : [];
  const style = styles == null ? void 0 : styles[styles.length - 1];
  if (!(style == null ? void 0 : style.sheet)) {
    console.warn(
      "Media Chrome: No style sheet found on style tag of",
      styleParent
    );
    return {
      // @ts-ignore
      style: {
        setProperty: () => {
        },
        removeProperty: () => "",
        getPropertyValue: () => ""
      }
    };
  }
  style == null ? void 0 : style.sheet.insertRule(`${selectorText}{}`, style.sheet.cssRules.length);
  return (
    /** @type {CSSStyleRule} */
    (_b2 = style.sheet.cssRules) == null ? void 0 : _b2[style.sheet.cssRules.length - 1]
  );
}
function getNumericAttr(el, attrName, defaultValue = Number.NaN) {
  const attrVal = el.getAttribute(attrName);
  return attrVal != null ? +attrVal : defaultValue;
}
function setNumericAttr(el, attrName, value) {
  const nextNumericValue = +value;
  if (value == null || Number.isNaN(nextNumericValue)) {
    if (el.hasAttribute(attrName)) {
      el.removeAttribute(attrName);
    }
    return;
  }
  if (getNumericAttr(el, attrName, void 0) === nextNumericValue)
    return;
  el.setAttribute(attrName, `${nextNumericValue}`);
}
function getBooleanAttr(el, attrName) {
  return el.hasAttribute(attrName);
}
function setBooleanAttr(el, attrName, value) {
  if (value == null) {
    if (el.hasAttribute(attrName)) {
      el.removeAttribute(attrName);
    }
    return;
  }
  if (getBooleanAttr(el, attrName) == value)
    return;
  el.toggleAttribute(attrName, value);
}
function getStringAttr(el, attrName, defaultValue = null) {
  var _a3;
  return (_a3 = el.getAttribute(attrName)) != null ? _a3 : defaultValue;
}
function setStringAttr(el, attrName, value) {
  if (value == null) {
    if (el.hasAttribute(attrName)) {
      el.removeAttribute(attrName);
    }
    return;
  }
  const nextValue = `${value}`;
  if (getStringAttr(el, attrName, void 0) === nextValue)
    return;
  el.setAttribute(attrName, nextValue);
}

// ../../node_modules/media-chrome/dist/media-gesture-receiver.js
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _mediaController;
var template = Document2.createElement("template");
template.innerHTML = /*html*/
`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;
var MediaGestureReceiver = class extends GlobalThis.HTMLElement {
  constructor(options = {}) {
    super();
    __privateAdd2(this, _mediaController, void 0);
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      const buttonHTML = template.content.cloneNode(true);
      this.nativeEl = buttonHTML;
      let slotTemplate17 = options.slotTemplate;
      if (!slotTemplate17) {
        slotTemplate17 = Document2.createElement("template");
        slotTemplate17.innerHTML = `<slot>${options.defaultContent || ""}</slot>`;
      }
      this.nativeEl.appendChild(slotTemplate17.content.cloneNode(true));
      shadow.appendChild(buttonHTML);
    }
  }
  // NOTE: Currently "baking in" actions + attrs until we come up with
  // a more robust architecture (CJP)
  static get observedAttributes() {
    return [
      MediaStateReceiverAttributes.MEDIA_CONTROLLER,
      MediaUIAttributes.MEDIA_PAUSED
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a3, _b2, _c, _d, _e;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b2 = (_a3 = __privateGet2(this, _mediaController)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
        __privateSet2(this, _mediaController, null);
      }
      if (newValue && this.isConnected) {
        __privateSet2(this, _mediaController, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet2(this, _mediaController)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    }
  }
  connectedCallback() {
    var _a3, _b2, _c, _d;
    this.tabIndex = -1;
    this.setAttribute("aria-hidden", "true");
    __privateSet2(this, _mediaController, getMediaControllerEl(this));
    if (this.getAttribute(MediaStateReceiverAttributes.MEDIA_CONTROLLER)) {
      (_b2 = (_a3 = __privateGet2(this, _mediaController)) == null ? void 0 : _a3.associateElement) == null ? void 0 : _b2.call(_a3, this);
    }
    (_c = __privateGet2(this, _mediaController)) == null ? void 0 : _c.addEventListener("pointerdown", this);
    (_d = __privateGet2(this, _mediaController)) == null ? void 0 : _d.addEventListener("click", this);
  }
  disconnectedCallback() {
    var _a3, _b2, _c, _d;
    if (this.getAttribute(MediaStateReceiverAttributes.MEDIA_CONTROLLER)) {
      (_b2 = (_a3 = __privateGet2(this, _mediaController)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
    }
    (_c = __privateGet2(this, _mediaController)) == null ? void 0 : _c.removeEventListener("pointerdown", this);
    (_d = __privateGet2(this, _mediaController)) == null ? void 0 : _d.removeEventListener("click", this);
    __privateSet2(this, _mediaController, null);
  }
  handleEvent(event) {
    var _a3;
    const composedTarget = (_a3 = event.composedPath()) == null ? void 0 : _a3[0];
    const allowList = ["video", "media-controller"];
    if (!allowList.includes(composedTarget == null ? void 0 : composedTarget.localName))
      return;
    if (event.type === "pointerdown") {
      this._pointerType = event.pointerType;
    } else if (event.type === "click") {
      const { clientX, clientY } = event;
      const { left, top, width, height } = this.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      if (x < 0 || y < 0 || x > width || y > height || // In case this element has no dimensions (or display: none) return.
      width === 0 && height === 0) {
        return;
      }
      const { pointerType = this._pointerType } = event;
      this._pointerType = void 0;
      if (pointerType === PointerTypes.TOUCH) {
        this.handleTap(event);
        return;
      } else if (pointerType === PointerTypes.MOUSE) {
        this.handleMouseClick(event);
        return;
      }
    }
  }
  /**
   * @type {boolean} Is the media paused
   */
  get mediaPaused() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED);
  }
  set mediaPaused(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED, value);
  }
  // NOTE: Currently "baking in" actions + attrs until we come up with
  // a more robust architecture (CJP)
  /**
   * @abstract
   * @argument {Event} e
   */
  handleTap(e) {
  }
  // eslint-disable-line
  // eslint-disable-next-line
  handleMouseClick(e) {
    const eventName = this.mediaPaused ? MediaUIEvents.MEDIA_PLAY_REQUEST : MediaUIEvents.MEDIA_PAUSE_REQUEST;
    this.dispatchEvent(
      new GlobalThis.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
};
_mediaController = /* @__PURE__ */ new WeakMap();
function getMediaControllerEl(controlEl) {
  var _a3;
  const mediaControllerId = controlEl.getAttribute(
    MediaStateReceiverAttributes.MEDIA_CONTROLLER
  );
  if (mediaControllerId) {
    return (_a3 = controlEl.getRootNode()) == null ? void 0 : _a3.getElementById(mediaControllerId);
  }
  return closestComposedNode(controlEl, "media-controller");
}
if (!GlobalThis.customElements.get("media-gesture-receiver")) {
  GlobalThis.customElements.define(
    "media-gesture-receiver",
    MediaGestureReceiver
  );
}

// ../../node_modules/media-chrome/dist/media-container.js
var __accessCheck3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet3 = (obj, member, getter) => {
  __accessCheck3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet3 = (obj, member, value, setter) => {
  __accessCheck3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod2 = (obj, member, method) => {
  __accessCheck3(obj, member, "access private method");
  return method;
};
var _pointerDownTimeStamp;
var _currentMedia;
var _inactiveTimeout;
var _autohide;
var _mutationObserver;
var _handleMutation;
var handleMutation_fn;
var _isResizePending;
var _handleResize;
var _handlePointerMove;
var handlePointerMove_fn;
var _handlePointerUp;
var handlePointerUp_fn;
var _setInactive;
var setInactive_fn;
var _setActive;
var setActive_fn;
var _scheduleInactive;
var scheduleInactive_fn;
var Attributes = {
  AUDIO: "audio",
  AUTOHIDE: "autohide",
  BREAKPOINTS: "breakpoints",
  GESTURES_DISABLED: "gesturesdisabled",
  KEYBOARD_CONTROL: "keyboardcontrol",
  NO_AUTOHIDE: "noautohide",
  USER_INACTIVE: "userinactive"
};
var template2 = Document2.createElement("template");
template2.innerHTML = /*html*/
`
  <style>
    ${/*
* outline on media is turned off because it is allowed to get focus to faciliate hotkeys.
* However, on keyboard interactions, the focus outline is shown,
* which is particularly noticeable when going fullscreen via hotkeys.
*/
""}
    :host([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${Attributes.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    ${/*
* when in audio mode, hide the slotted media element by default
*/
""}
    :host([${Attributes.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    ${/*
* when in audio mode, hide the gesture-layer which causes media-controller to be taller than the control bar
*/
""}
    :host([${Attributes.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    ${/*
* if gestures are disabled, don't accept pointer-events
*/
""}
    :host(:not([${Attributes.AUDIO}])[${Attributes.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${Attributes.AUDIO}])[${Attributes.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    ${/*
* any slotted element that isn't a poster or media slot should be pointer-events auto
* we'll want to add here any slotted elements that shouldn't get pointer-events by default when slotted
*/
""}
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${Attributes.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${Attributes.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${Attributes.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    ${/* Position the media and poster elements to fill the container */
""}
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    ${/* Video specific styles */
""}
    :host(:not([${Attributes.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    ${/* Safari needs this to actually make the element fill the window */
""}
    :host(:-webkit-full-screen) {
      ${/* Needs to use !important otherwise easy to break */
""}
      width: 100% !important;
      height: 100% !important;
    }

    ${/* Only add these if auto hide is not disabled */
""}
    ::slotted(:not([slot=media]):not([slot=poster]):not([${Attributes.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
      opacity: 1;
      transition: var(--media-control-transition-in, opacity 0.25s);
    }

    ${/* Hide controls when inactive, not paused, not audio and auto hide not disabled */
""}
    :host([${Attributes.USER_INACTIVE}]:not([${MediaUIAttributes.MEDIA_PAUSED}]):not([${MediaUIAttributes.MEDIA_IS_AIRPLAYING}]):not([${MediaUIAttributes.MEDIA_IS_CASTING}]):not([${Attributes.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${Attributes.NO_AUTOHIDE}]):not([role=dialog])) {
      opacity: 0;
      transition: var(--media-control-transition-out, opacity 1s);
    }

    :host([${Attributes.USER_INACTIVE}]:not([${MediaUIAttributes.MEDIA_PAUSED}]):not([${MediaUIAttributes.MEDIA_IS_CASTING}]):not([${Attributes.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    ${/* ::slotted([slot=poster]) doesn't work for slot fallback content so hide parent slot instead */
""}
    :host(:not([${Attributes.AUDIO}])[${MediaUIAttributes.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role=dialog]) {
      width: 100%;
      height: 100%;
      align-self: center;
    }

    ::slotted([role=menu]) {
      align-self: end;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    ${/* default, effectively "bottom-chrome" */
""}
    <slot part="bottom chrome"></slot>
  </span>
  <slot name="dialog" part="layer dialog-layer"></slot>
`;
var MEDIA_UI_ATTRIBUTE_NAMES = Object.values(MediaUIAttributes);
var defaultBreakpoints = "sm:384 md:576 lg:768 xl:960";
function resizeCallback(entry) {
  setBreakpoints(entry.target, entry.contentRect.width);
}
function setBreakpoints(container, width) {
  var _a3;
  if (!container.isConnected)
    return;
  const breakpoints = (_a3 = container.getAttribute(Attributes.BREAKPOINTS)) != null ? _a3 : defaultBreakpoints;
  const ranges = createBreakpointMap(breakpoints);
  const activeBreakpoints = getBreakpoints(ranges, width);
  let changed = false;
  Object.keys(ranges).forEach((name) => {
    if (activeBreakpoints.includes(name)) {
      if (!container.hasAttribute(`breakpoint${name}`)) {
        container.setAttribute(`breakpoint${name}`, "");
        changed = true;
      }
      return;
    }
    if (container.hasAttribute(`breakpoint${name}`)) {
      container.removeAttribute(`breakpoint${name}`);
      changed = true;
    }
  });
  if (changed) {
    const evt = new CustomEvent(MediaStateChangeEvents.BREAKPOINTS_CHANGE, {
      detail: activeBreakpoints
    });
    container.dispatchEvent(evt);
  }
  if (!container.breakpointsComputed) {
    container.breakpointsComputed = true;
    container.dispatchEvent(
      new CustomEvent(MediaStateChangeEvents.BREAKPOINTS_COMPUTED, {
        bubbles: true,
        composed: true
      })
    );
  }
}
function createBreakpointMap(breakpoints) {
  const pairs = breakpoints.split(/\s+/);
  return Object.fromEntries(pairs.map((pair) => pair.split(":")));
}
function getBreakpoints(breakpoints, width) {
  return Object.keys(breakpoints).filter((name) => {
    return width >= parseInt(breakpoints[name]);
  });
}
var MediaContainer = class extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd3(this, _handleMutation);
    __privateAdd3(this, _handlePointerMove);
    __privateAdd3(this, _handlePointerUp);
    __privateAdd3(this, _setInactive);
    __privateAdd3(this, _setActive);
    __privateAdd3(this, _scheduleInactive);
    __privateAdd3(this, _pointerDownTimeStamp, 0);
    __privateAdd3(this, _currentMedia, null);
    __privateAdd3(this, _inactiveTimeout, null);
    __privateAdd3(this, _autohide, void 0);
    this.breakpointsComputed = false;
    __privateAdd3(this, _mutationObserver, new MutationObserver(__privateMethod2(this, _handleMutation, handleMutation_fn).bind(this)));
    __privateAdd3(this, _isResizePending, false);
    __privateAdd3(this, _handleResize, (entry) => {
      if (__privateGet3(this, _isResizePending))
        return;
      setTimeout(() => {
        resizeCallback(entry);
        __privateSet3(this, _isResizePending, false);
      }, 0);
      __privateSet3(this, _isResizePending, true);
    });
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template2.content.cloneNode(true));
    }
    const chainedSlot = this.querySelector(
      ":scope > slot[slot=media]"
    );
    if (chainedSlot) {
      chainedSlot.addEventListener("slotchange", () => {
        const slotEls = chainedSlot.assignedElements({ flatten: true });
        if (!slotEls.length) {
          if (__privateGet3(this, _currentMedia)) {
            this.mediaUnsetCallback(__privateGet3(this, _currentMedia));
          }
          return;
        }
        this.handleMediaUpdated(this.media);
      });
    }
  }
  static get observedAttributes() {
    return [Attributes.AUTOHIDE, Attributes.GESTURES_DISABLED].concat(MEDIA_UI_ATTRIBUTE_NAMES).filter(
      (name) => ![
        MediaUIAttributes.MEDIA_RENDITION_LIST,
        MediaUIAttributes.MEDIA_AUDIO_TRACK_LIST,
        MediaUIAttributes.MEDIA_CHAPTERS_CUES,
        MediaUIAttributes.MEDIA_WIDTH,
        MediaUIAttributes.MEDIA_HEIGHT,
        MediaUIAttributes.MEDIA_ERROR,
        MediaUIAttributes.MEDIA_ERROR_MESSAGE
      ].includes(name)
    );
  }
  // Could share this code with media-chrome-html-element instead
  attributeChangedCallback(attrName, _oldValue, newValue) {
    if (attrName.toLowerCase() == Attributes.AUTOHIDE) {
      this.autohide = newValue;
    }
  }
  // First direct child with slot=media, or null
  get media() {
    let media = this.querySelector(":scope > [slot=media]");
    if ((media == null ? void 0 : media.nodeName) == "SLOT")
      media = media.assignedElements({ flatten: true })[0];
    return media;
  }
  async handleMediaUpdated(media) {
    if (!media)
      return;
    __privateSet3(this, _currentMedia, media);
    if (media.localName.includes("-")) {
      await GlobalThis.customElements.whenDefined(media.localName);
    }
    this.mediaSetCallback(media);
  }
  connectedCallback() {
    var _a3;
    __privateGet3(this, _mutationObserver).observe(this, { childList: true, subtree: true });
    observeResize(this, __privateGet3(this, _handleResize));
    const isAudioChrome = this.getAttribute(Attributes.AUDIO) != null;
    const label = isAudioChrome ? t("audio player") : t("video player");
    this.setAttribute("role", "region");
    this.setAttribute("aria-label", label);
    this.handleMediaUpdated(this.media);
    this.setAttribute(Attributes.USER_INACTIVE, "");
    setBreakpoints(this, this.getBoundingClientRect().width);
    this.addEventListener("pointerdown", this);
    this.addEventListener("pointermove", this);
    this.addEventListener("pointerup", this);
    this.addEventListener("mouseleave", this);
    this.addEventListener("keyup", this);
    (_a3 = GlobalThis.window) == null ? void 0 : _a3.addEventListener("mouseup", this);
  }
  disconnectedCallback() {
    var _a3;
    __privateGet3(this, _mutationObserver).disconnect();
    unobserveResize(this, __privateGet3(this, _handleResize));
    if (this.media) {
      this.mediaUnsetCallback(this.media);
    }
    (_a3 = GlobalThis.window) == null ? void 0 : _a3.removeEventListener("mouseup", this);
  }
  /**
   * @abstract
   */
  mediaSetCallback(_media) {
  }
  mediaUnsetCallback(_media) {
    __privateSet3(this, _currentMedia, null);
  }
  handleEvent(event) {
    switch (event.type) {
      case "pointerdown":
        __privateSet3(this, _pointerDownTimeStamp, event.timeStamp);
        break;
      case "pointermove":
        __privateMethod2(this, _handlePointerMove, handlePointerMove_fn).call(this, event);
        break;
      case "pointerup":
        __privateMethod2(this, _handlePointerUp, handlePointerUp_fn).call(this, event);
        break;
      case "mouseleave":
        __privateMethod2(this, _setInactive, setInactive_fn).call(this);
        break;
      case "mouseup":
        this.removeAttribute(Attributes.KEYBOARD_CONTROL);
        break;
      case "keyup":
        __privateMethod2(this, _scheduleInactive, scheduleInactive_fn).call(this);
        this.setAttribute(Attributes.KEYBOARD_CONTROL, "");
        break;
    }
  }
  set autohide(seconds) {
    const parsedSeconds = Number(seconds);
    __privateSet3(this, _autohide, isNaN(parsedSeconds) ? 0 : parsedSeconds);
  }
  get autohide() {
    return (__privateGet3(this, _autohide) === void 0 ? 2 : __privateGet3(this, _autohide)).toString();
  }
  get breakpoints() {
    return getStringAttr(this, Attributes.BREAKPOINTS);
  }
  set breakpoints(value) {
    setStringAttr(this, Attributes.BREAKPOINTS, value);
  }
  get audio() {
    return getBooleanAttr(this, Attributes.AUDIO);
  }
  set audio(value) {
    setBooleanAttr(this, Attributes.AUDIO, value);
  }
  get gesturesDisabled() {
    return getBooleanAttr(this, Attributes.GESTURES_DISABLED);
  }
  set gesturesDisabled(value) {
    setBooleanAttr(this, Attributes.GESTURES_DISABLED, value);
  }
  get keyboardControl() {
    return getBooleanAttr(this, Attributes.KEYBOARD_CONTROL);
  }
  set keyboardControl(value) {
    setBooleanAttr(this, Attributes.KEYBOARD_CONTROL, value);
  }
  get noAutohide() {
    return getBooleanAttr(this, Attributes.NO_AUTOHIDE);
  }
  set noAutohide(value) {
    setBooleanAttr(this, Attributes.NO_AUTOHIDE, value);
  }
  get userInteractive() {
    return getBooleanAttr(this, Attributes.USER_INACTIVE);
  }
  set userInteractive(value) {
    setBooleanAttr(this, Attributes.USER_INACTIVE, value);
  }
};
_pointerDownTimeStamp = /* @__PURE__ */ new WeakMap();
_currentMedia = /* @__PURE__ */ new WeakMap();
_inactiveTimeout = /* @__PURE__ */ new WeakMap();
_autohide = /* @__PURE__ */ new WeakMap();
_mutationObserver = /* @__PURE__ */ new WeakMap();
_handleMutation = /* @__PURE__ */ new WeakSet();
handleMutation_fn = function(mutationsList) {
  const media = this.media;
  for (const mutation of mutationsList) {
    if (mutation.type !== "childList")
      continue;
    const removedNodes = mutation.removedNodes;
    for (const node of removedNodes) {
      if (node.slot != "media" || mutation.target != this)
        continue;
      let previousSibling = mutation.previousSibling && mutation.previousSibling.previousElementSibling;
      if (!previousSibling || !media) {
        this.mediaUnsetCallback(node);
      } else {
        let wasFirst = previousSibling.slot !== "media";
        while ((previousSibling = previousSibling.previousSibling) !== null) {
          if (previousSibling.slot == "media")
            wasFirst = false;
        }
        if (wasFirst)
          this.mediaUnsetCallback(node);
      }
    }
    if (media) {
      for (const node of mutation.addedNodes) {
        if (node === media)
          this.handleMediaUpdated(media);
      }
    }
  }
};
_isResizePending = /* @__PURE__ */ new WeakMap();
_handleResize = /* @__PURE__ */ new WeakMap();
_handlePointerMove = /* @__PURE__ */ new WeakSet();
handlePointerMove_fn = function(event) {
  if (event.pointerType !== "mouse") {
    const MAX_TAP_DURATION = 250;
    if (event.timeStamp - __privateGet3(this, _pointerDownTimeStamp) < MAX_TAP_DURATION)
      return;
  }
  __privateMethod2(this, _setActive, setActive_fn).call(this);
  clearTimeout(__privateGet3(this, _inactiveTimeout));
  if ([this, this.media].includes(event.target)) {
    __privateMethod2(this, _scheduleInactive, scheduleInactive_fn).call(this);
  }
};
_handlePointerUp = /* @__PURE__ */ new WeakSet();
handlePointerUp_fn = function(event) {
  if (event.pointerType === "touch") {
    const controlsVisible = !this.hasAttribute(Attributes.USER_INACTIVE);
    if ([this, this.media].includes(event.target) && controlsVisible) {
      __privateMethod2(this, _setInactive, setInactive_fn).call(this);
    } else {
      __privateMethod2(this, _scheduleInactive, scheduleInactive_fn).call(this);
    }
  } else if (event.composedPath().some(
    (el) => ["media-play-button", "media-fullscreen-button"].includes(
      el == null ? void 0 : el.localName
    )
  )) {
    __privateMethod2(this, _scheduleInactive, scheduleInactive_fn).call(this);
  }
};
_setInactive = /* @__PURE__ */ new WeakSet();
setInactive_fn = function() {
  if (__privateGet3(this, _autohide) < 0)
    return;
  if (this.hasAttribute(Attributes.USER_INACTIVE))
    return;
  this.setAttribute(Attributes.USER_INACTIVE, "");
  const evt = new GlobalThis.CustomEvent(
    MediaStateChangeEvents.USER_INACTIVE,
    { composed: true, bubbles: true, detail: true }
  );
  this.dispatchEvent(evt);
};
_setActive = /* @__PURE__ */ new WeakSet();
setActive_fn = function() {
  if (!this.hasAttribute(Attributes.USER_INACTIVE))
    return;
  this.removeAttribute(Attributes.USER_INACTIVE);
  const evt = new GlobalThis.CustomEvent(
    MediaStateChangeEvents.USER_INACTIVE,
    { composed: true, bubbles: true, detail: false }
  );
  this.dispatchEvent(evt);
};
_scheduleInactive = /* @__PURE__ */ new WeakSet();
scheduleInactive_fn = function() {
  __privateMethod2(this, _setActive, setActive_fn).call(this);
  clearTimeout(__privateGet3(this, _inactiveTimeout));
  const autohide = parseInt(this.autohide);
  if (autohide < 0)
    return;
  __privateSet3(this, _inactiveTimeout, setTimeout(() => {
    __privateMethod2(this, _setInactive, setInactive_fn).call(this);
  }, autohide * 1e3));
};
if (!GlobalThis.customElements.get("media-container")) {
  GlobalThis.customElements.define("media-container", MediaContainer);
}

// ../../node_modules/media-chrome/dist/utils/attribute-token-list.js
var __accessCheck4 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet4 = (obj, member, getter) => {
  __accessCheck4(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd4 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet4 = (obj, member, value, setter) => {
  __accessCheck4(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _el;
var _attr;
var _defaultSet;
var _tokenSet;
var _tokens;
var tokens_get;
var AttributeTokenList = class {
  constructor(el, attr, { defaultValue } = { defaultValue: void 0 }) {
    __privateAdd4(this, _tokens);
    __privateAdd4(this, _el, void 0);
    __privateAdd4(this, _attr, void 0);
    __privateAdd4(this, _defaultSet, void 0);
    __privateAdd4(this, _tokenSet, /* @__PURE__ */ new Set());
    __privateSet4(this, _el, el);
    __privateSet4(this, _attr, attr);
    __privateSet4(this, _defaultSet, new Set(defaultValue));
  }
  [Symbol.iterator]() {
    return __privateGet4(this, _tokens, tokens_get).values();
  }
  get length() {
    return __privateGet4(this, _tokens, tokens_get).size;
  }
  get value() {
    var _a3;
    return (_a3 = [...__privateGet4(this, _tokens, tokens_get)].join(" ")) != null ? _a3 : "";
  }
  set value(val) {
    var _a3;
    if (val === this.value)
      return;
    __privateSet4(this, _tokenSet, /* @__PURE__ */ new Set());
    this.add(...(_a3 = val == null ? void 0 : val.split(" ")) != null ? _a3 : []);
  }
  toString() {
    return this.value;
  }
  item(index) {
    return [...__privateGet4(this, _tokens, tokens_get)][index];
  }
  values() {
    return __privateGet4(this, _tokens, tokens_get).values();
  }
  forEach(callback, thisArg) {
    __privateGet4(this, _tokens, tokens_get).forEach(callback, thisArg);
  }
  add(...tokens) {
    var _a3, _b2;
    tokens.forEach((t2) => __privateGet4(this, _tokenSet).add(t2));
    if (this.value === "" && !((_a3 = __privateGet4(this, _el)) == null ? void 0 : _a3.hasAttribute(`${__privateGet4(this, _attr)}`))) {
      return;
    }
    (_b2 = __privateGet4(this, _el)) == null ? void 0 : _b2.setAttribute(`${__privateGet4(this, _attr)}`, `${this.value}`);
  }
  remove(...tokens) {
    var _a3;
    tokens.forEach((t2) => __privateGet4(this, _tokenSet).delete(t2));
    (_a3 = __privateGet4(this, _el)) == null ? void 0 : _a3.setAttribute(`${__privateGet4(this, _attr)}`, `${this.value}`);
  }
  contains(token) {
    return __privateGet4(this, _tokens, tokens_get).has(token);
  }
  toggle(token, force) {
    if (typeof force !== "undefined") {
      if (force) {
        this.add(token);
        return true;
      } else {
        this.remove(token);
        return false;
      }
    }
    if (this.contains(token)) {
      this.remove(token);
      return false;
    }
    this.add(token);
    return true;
  }
  replace(oldToken, newToken) {
    this.remove(oldToken);
    this.add(newToken);
    return oldToken === newToken;
  }
};
_el = /* @__PURE__ */ new WeakMap();
_attr = /* @__PURE__ */ new WeakMap();
_defaultSet = /* @__PURE__ */ new WeakMap();
_tokenSet = /* @__PURE__ */ new WeakMap();
_tokens = /* @__PURE__ */ new WeakSet();
tokens_get = function() {
  return __privateGet4(this, _tokenSet).size ? __privateGet4(this, _tokenSet) : __privateGet4(this, _defaultSet);
};

// ../../node_modules/media-chrome/dist/utils/captions.js
var splitTextTracksStr = (textTracksStr = "") => textTracksStr.split(/\s+/);
var parseTextTrackStr = (textTrackStr = "") => {
  const [kind, language, encodedLabel] = textTrackStr.split(":");
  const label = encodedLabel ? decodeURIComponent(encodedLabel) : void 0;
  return {
    kind: kind === "cc" ? TextTrackKinds.CAPTIONS : TextTrackKinds.SUBTITLES,
    language,
    label
  };
};
var parseTextTracksStr = (textTracksStr = "", textTrackLikeObj = {}) => {
  return splitTextTracksStr(textTracksStr).map((textTrackStr) => {
    const textTrackObj = parseTextTrackStr(textTrackStr);
    return {
      ...textTrackLikeObj,
      ...textTrackObj
    };
  });
};
var parseTracks = (trackOrTracks) => {
  if (!trackOrTracks)
    return [];
  if (Array.isArray(trackOrTracks)) {
    return trackOrTracks.map((trackObjOrStr) => {
      if (typeof trackObjOrStr === "string") {
        return parseTextTrackStr(trackObjOrStr);
      }
      return trackObjOrStr;
    });
  }
  if (typeof trackOrTracks === "string") {
    return parseTextTracksStr(trackOrTracks);
  }
  return [trackOrTracks];
};
var formatTextTrackObj = ({ kind, label, language } = { kind: "subtitles" }) => {
  if (!label)
    return language;
  return `${kind === "captions" ? "cc" : "sb"}:${language}:${encodeURIComponent(
    label
  )}`;
};
var stringifyTextTrackList = (textTracks = []) => {
  return Array.prototype.map.call(textTracks, formatTextTrackObj).join(" ");
};
var isMatchingPropOf = (key, value) => (obj) => obj[key] === value;
var textTrackObjAsPred = (filterObj) => {
  const preds = Object.entries(filterObj).map(([key, value]) => {
    return isMatchingPropOf(key, value);
  });
  return (textTrack) => preds.every((pred) => pred(textTrack));
};
var updateTracksModeTo = (mode, tracks = [], tracksToUpdate = []) => {
  const preds = parseTracks(tracksToUpdate).map(textTrackObjAsPred);
  const isTrackToUpdate = (textTrack) => {
    return preds.some((pred) => pred(textTrack));
  };
  Array.from(tracks).filter(isTrackToUpdate).forEach((textTrack) => {
    textTrack.mode = mode;
  });
};
var getTextTracksList = (media, filterPredOrObj = () => true) => {
  if (!(media == null ? void 0 : media.textTracks))
    return [];
  const filterPred = typeof filterPredOrObj === "function" ? filterPredOrObj : textTrackObjAsPred(filterPredOrObj);
  return Array.from(media.textTracks).filter(filterPred);
};
var areSubsOn = (el) => {
  var _a3;
  const showingSubtitles = !!((_a3 = el.mediaSubtitlesShowing) == null ? void 0 : _a3.length) || el.hasAttribute(MediaUIAttributes.MEDIA_SUBTITLES_SHOWING);
  return showingSubtitles;
};

// ../../node_modules/media-chrome/dist/utils/fullscreen-api.js
var enterFullscreen = (stateOwners) => {
  var _a3;
  const { media, fullscreenElement } = stateOwners;
  const enterFullscreenKey = fullscreenElement && "requestFullscreen" in fullscreenElement ? "requestFullscreen" : fullscreenElement && "webkitRequestFullScreen" in fullscreenElement ? "webkitRequestFullScreen" : void 0;
  if (enterFullscreenKey) {
    const maybePromise = (_a3 = fullscreenElement[enterFullscreenKey]) == null ? void 0 : _a3.call(fullscreenElement);
    if (maybePromise instanceof Promise) {
      return maybePromise.catch(() => {
      });
    }
  } else if (media == null ? void 0 : media.webkitEnterFullscreen) {
    media.webkitEnterFullscreen();
  } else if (media == null ? void 0 : media.requestFullscreen) {
    media.requestFullscreen();
  }
};
var exitFullscreenKey = "exitFullscreen" in Document2 ? "exitFullscreen" : "webkitExitFullscreen" in Document2 ? "webkitExitFullscreen" : "webkitCancelFullScreen" in Document2 ? "webkitCancelFullScreen" : void 0;
var exitFullscreen = (stateOwners) => {
  var _a3;
  const { documentElement } = stateOwners;
  if (exitFullscreenKey) {
    const maybePromise = (_a3 = documentElement == null ? void 0 : documentElement[exitFullscreenKey]) == null ? void 0 : _a3.call(documentElement);
    if (maybePromise instanceof Promise) {
      return maybePromise.catch(() => {
      });
    }
  }
};
var fullscreenElementKey = "fullscreenElement" in Document2 ? "fullscreenElement" : "webkitFullscreenElement" in Document2 ? "webkitFullscreenElement" : void 0;
var getFullscreenElement = (stateOwners) => {
  const { documentElement, media } = stateOwners;
  const docFullscreenElement = documentElement == null ? void 0 : documentElement[fullscreenElementKey];
  if (!docFullscreenElement && "webkitDisplayingFullscreen" in media && "webkitPresentationMode" in media && media.webkitDisplayingFullscreen && media.webkitPresentationMode === WebkitPresentationModes.FULLSCREEN) {
    return media;
  }
  return docFullscreenElement;
};
var isFullscreen = (stateOwners) => {
  var _a3;
  const { media, documentElement, fullscreenElement = media } = stateOwners;
  if (!media || !documentElement)
    return false;
  const currentFullscreenElement = getFullscreenElement(stateOwners);
  if (!currentFullscreenElement)
    return false;
  if (currentFullscreenElement === fullscreenElement || currentFullscreenElement === media) {
    return true;
  }
  if (currentFullscreenElement.localName.includes("-")) {
    let currentRoot = currentFullscreenElement.shadowRoot;
    if (!(fullscreenElementKey in currentRoot)) {
      return containsComposedNode(
        currentFullscreenElement,
        /** @TODO clean up type assumptions (e.g. Node) (CJP) */
        // @ts-ignore
        fullscreenElement
      );
    }
    while (currentRoot == null ? void 0 : currentRoot[fullscreenElementKey]) {
      if (currentRoot[fullscreenElementKey] === fullscreenElement)
        return true;
      currentRoot = (_a3 = currentRoot[fullscreenElementKey]) == null ? void 0 : _a3.shadowRoot;
    }
  }
  return false;
};
var fullscreenEnabledKey = "fullscreenEnabled" in Document2 ? "fullscreenEnabled" : "webkitFullscreenEnabled" in Document2 ? "webkitFullscreenEnabled" : void 0;
var isFullscreenEnabled = (stateOwners) => {
  const { documentElement, media } = stateOwners;
  return !!(documentElement == null ? void 0 : documentElement[fullscreenEnabledKey]) || media && "webkitSupportsFullscreen" in media;
};

// ../../node_modules/media-chrome/dist/utils/platform-tests.js
var testMediaEl;
var getTestMediaEl = () => {
  var _a3, _b2;
  if (testMediaEl)
    return testMediaEl;
  testMediaEl = (_b2 = (_a3 = Document2) == null ? void 0 : _a3.createElement) == null ? void 0 : _b2.call(_a3, "video");
  return testMediaEl;
};
var hasVolumeSupportAsync = async (mediaEl = getTestMediaEl()) => {
  if (!mediaEl)
    return false;
  const prevVolume = mediaEl.volume;
  mediaEl.volume = prevVolume / 2 + 0.1;
  const abortController = new AbortController();
  const volumeSupported2 = await Promise.race([
    dispatchedVolumeChange(mediaEl, abortController.signal),
    volumeChanged(mediaEl, prevVolume)
  ]);
  abortController.abort();
  return volumeSupported2;
};
var dispatchedVolumeChange = (mediaEl, signal) => {
  return new Promise((resolve) => {
    mediaEl.addEventListener("volumechange", () => resolve(true), { signal });
  });
};
var volumeChanged = async (mediaEl, prevVolume) => {
  for (let i = 0; i < 10; i++) {
    if (mediaEl.volume === prevVolume)
      return false;
    await delay(10);
  }
  return mediaEl.volume !== prevVolume;
};
var isSafari = /.*Version\/.*Safari\/.*/.test(
  GlobalThis.navigator.userAgent
);
var hasPipSupport = (mediaEl = getTestMediaEl()) => {
  if (GlobalThis.matchMedia("(display-mode: standalone)").matches && isSafari)
    return false;
  return typeof (mediaEl == null ? void 0 : mediaEl.requestPictureInPicture) === "function";
};
var hasFullscreenSupport = (mediaEl = getTestMediaEl()) => {
  return isFullscreenEnabled({ documentElement: Document2, media: mediaEl });
};
var fullscreenSupported = hasFullscreenSupport();
var pipSupported = hasPipSupport();
var airplaySupported = !!GlobalThis.WebKitPlaybackTargetAvailabilityEvent;
var castSupported = !!GlobalThis.chrome;

// ../../node_modules/media-chrome/dist/media-store/util.js
var getSubtitleTracks = (stateOwners) => {
  return getTextTracksList(stateOwners.media, (textTrack) => {
    return [TextTrackKinds.SUBTITLES, TextTrackKinds.CAPTIONS].includes(
      textTrack.kind
    );
  }).sort((a, b) => a.kind >= b.kind ? 1 : -1);
};
var getShowingSubtitleTracks = (stateOwners) => {
  return getTextTracksList(stateOwners.media, (textTrack) => {
    return textTrack.mode === TextTrackModes.SHOWING && [TextTrackKinds.SUBTITLES, TextTrackKinds.CAPTIONS].includes(
      textTrack.kind
    );
  });
};
var toggleSubtitleTracks = (stateOwners, force) => {
  const tracks = getSubtitleTracks(stateOwners);
  const showingSubitleTracks = getShowingSubtitleTracks(stateOwners);
  const subtitlesShowing = !!showingSubitleTracks.length;
  if (!tracks.length)
    return;
  if (force === false || subtitlesShowing && force !== true) {
    updateTracksModeTo(TextTrackModes.DISABLED, tracks, showingSubitleTracks);
  } else if (force === true || !subtitlesShowing && force !== false) {
    let subTrack = tracks[0];
    const { options } = stateOwners;
    if (!(options == null ? void 0 : options.noSubtitlesLangPref)) {
      const subtitlesPref = globalThis.localStorage.getItem(
        "media-chrome-pref-subtitles-lang"
      );
      const userLangPrefs = subtitlesPref ? [subtitlesPref, ...globalThis.navigator.languages] : globalThis.navigator.languages;
      const preferredAvailableSubs = tracks.filter((textTrack) => {
        return userLangPrefs.some(
          (lang) => textTrack.language.toLowerCase().startsWith(lang.split("-")[0])
        );
      }).sort((textTrackA, textTrackB) => {
        const idxA = userLangPrefs.findIndex(
          (lang) => textTrackA.language.toLowerCase().startsWith(lang.split("-")[0])
        );
        const idxB = userLangPrefs.findIndex(
          (lang) => textTrackB.language.toLowerCase().startsWith(lang.split("-")[0])
        );
        return idxA - idxB;
      });
      if (preferredAvailableSubs[0]) {
        subTrack = preferredAvailableSubs[0];
      }
    }
    const { language, label, kind } = subTrack;
    updateTracksModeTo(TextTrackModes.DISABLED, tracks, showingSubitleTracks);
    updateTracksModeTo(TextTrackModes.SHOWING, tracks, [
      { language, label, kind }
    ]);
  }
};
var areValuesEq = (x, y) => {
  if (x === y)
    return true;
  if (x == null || y == null)
    return false;
  if (typeof x !== typeof y)
    return false;
  if (typeof x === "number" && Number.isNaN(x) && Number.isNaN(y))
    return true;
  if (typeof x !== "object")
    return false;
  if (Array.isArray(x))
    return areArraysEq(x, y);
  return Object.entries(x).every(
    // NOTE: Checking key in y to disambiguate between between missing keys and keys whose value are undefined (CJP)
    ([key, value]) => key in y && areValuesEq(value, y[key])
  );
};
var areArraysEq = (xs, ys) => {
  const xIsArray = Array.isArray(xs);
  const yIsArray = Array.isArray(ys);
  if (xIsArray !== yIsArray)
    return false;
  if (!(xIsArray || yIsArray))
    return true;
  if (xs.length !== ys.length)
    return false;
  return xs.every((x, i) => areValuesEq(x, ys[i]));
};

// ../../node_modules/media-chrome/dist/media-store/state-mediator.js
var StreamTypeValues = Object.values(StreamTypes);
var volumeSupported;
var volumeSupportPromise = hasVolumeSupportAsync().then((supported) => {
  volumeSupported = supported;
  return volumeSupported;
});
var prepareStateOwners = async (...stateOwners) => {
  await Promise.all(
    stateOwners.filter((x) => x).map(async (stateOwner) => {
      if (!("localName" in stateOwner && stateOwner instanceof GlobalThis.HTMLElement)) {
        return;
      }
      const name = stateOwner.localName;
      if (!name.includes("-"))
        return;
      const classDef = GlobalThis.customElements.get(name);
      if (classDef && stateOwner instanceof classDef)
        return;
      await GlobalThis.customElements.whenDefined(name);
      GlobalThis.customElements.upgrade(stateOwner);
    })
  );
};
var stateMediator = {
  mediaError: {
    get(stateOwners, event) {
      const { media } = stateOwners;
      if ((event == null ? void 0 : event.type) === "playing")
        return;
      return media == null ? void 0 : media.error;
    },
    mediaEvents: ["emptied", "error", "playing"]
  },
  mediaErrorCode: {
    get(stateOwners, event) {
      var _a3;
      const { media } = stateOwners;
      if ((event == null ? void 0 : event.type) === "playing")
        return;
      return (_a3 = media == null ? void 0 : media.error) == null ? void 0 : _a3.code;
    },
    mediaEvents: ["emptied", "error", "playing"]
  },
  mediaErrorMessage: {
    get(stateOwners, event) {
      var _a3, _b2;
      const { media } = stateOwners;
      if ((event == null ? void 0 : event.type) === "playing")
        return;
      return (_b2 = (_a3 = media == null ? void 0 : media.error) == null ? void 0 : _a3.message) != null ? _b2 : "";
    },
    mediaEvents: ["emptied", "error", "playing"]
  },
  mediaWidth: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      return (_a3 = media == null ? void 0 : media.videoWidth) != null ? _a3 : 0;
    },
    mediaEvents: ["resize"]
  },
  mediaHeight: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      return (_a3 = media == null ? void 0 : media.videoHeight) != null ? _a3 : 0;
    },
    mediaEvents: ["resize"]
  },
  mediaPaused: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      return (_a3 = media == null ? void 0 : media.paused) != null ? _a3 : true;
    },
    set(value, stateOwners) {
      var _a3;
      const { media } = stateOwners;
      if (!media)
        return;
      if (value) {
        media.pause();
      } else {
        (_a3 = media.play()) == null ? void 0 : _a3.catch(() => {
        });
      }
    },
    mediaEvents: ["play", "playing", "pause", "emptied"]
  },
  mediaHasPlayed: {
    // We want to let the user know that the media started playing at any point (`media-has-played`).
    // Since these propagators are all called when boostrapping state, let's verify this is
    // a real playing event by checking that 1) there's media and 2) it isn't currently paused.
    get(stateOwners, event) {
      const { media } = stateOwners;
      if (!media)
        return false;
      if (!event)
        return !media.paused;
      return event.type === "playing";
    },
    mediaEvents: ["playing", "emptied"]
  },
  mediaEnded: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      return (_a3 = media == null ? void 0 : media.ended) != null ? _a3 : false;
    },
    mediaEvents: ["seeked", "ended", "emptied"]
  },
  mediaPlaybackRate: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      return (_a3 = media == null ? void 0 : media.playbackRate) != null ? _a3 : 1;
    },
    set(value, stateOwners) {
      const { media } = stateOwners;
      if (!media)
        return;
      if (!Number.isFinite(+value))
        return;
      media.playbackRate = +value;
    },
    mediaEvents: ["ratechange", "loadstart"]
  },
  mediaMuted: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      return (_a3 = media == null ? void 0 : media.muted) != null ? _a3 : false;
    },
    set(value, stateOwners) {
      const { media } = stateOwners;
      if (!media)
        return;
      try {
        GlobalThis.localStorage.setItem(
          "media-chrome-pref-muted",
          value ? "true" : "false"
        );
      } catch (e) {
        console.debug("Error setting muted pref", e);
      }
      media.muted = value;
    },
    mediaEvents: ["volumechange"],
    stateOwnersUpdateHandlers: [
      (handler, stateOwners) => {
        const {
          options: { noMutedPref }
        } = stateOwners;
        const { media } = stateOwners;
        if (!media || media.muted || noMutedPref)
          return;
        try {
          const mutedPref = GlobalThis.localStorage.getItem("media-chrome-pref-muted") === "true";
          stateMediator.mediaMuted.set(mutedPref, stateOwners);
          handler(mutedPref);
        } catch (e) {
          console.debug("Error getting muted pref", e);
        }
      }
    ]
  },
  mediaVolume: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      return (_a3 = media == null ? void 0 : media.volume) != null ? _a3 : 1;
    },
    set(value, stateOwners) {
      const { media } = stateOwners;
      if (!media)
        return;
      try {
        if (value == null) {
          GlobalThis.localStorage.removeItem("media-chrome-pref-volume");
        } else {
          GlobalThis.localStorage.setItem(
            "media-chrome-pref-volume",
            value.toString()
          );
        }
      } catch (e) {
        console.debug("Error setting volume pref", e);
      }
      if (!Number.isFinite(+value))
        return;
      media.volume = +value;
    },
    mediaEvents: ["volumechange"],
    stateOwnersUpdateHandlers: [
      (handler, stateOwners) => {
        const {
          options: { noVolumePref }
        } = stateOwners;
        if (noVolumePref)
          return;
        try {
          const { media } = stateOwners;
          if (!media)
            return;
          const volumePref = GlobalThis.localStorage.getItem(
            "media-chrome-pref-volume"
          );
          if (volumePref == null)
            return;
          stateMediator.mediaVolume.set(+volumePref, stateOwners);
          handler(+volumePref);
        } catch (e) {
          console.debug("Error getting volume pref", e);
        }
      }
    ]
  },
  // NOTE: Keeping this roughly equivalent to prior impl to reduce number of changes,
  // however we may want to model "derived" state differently from "primary" state
  // (in this case, derived === mediaVolumeLevel, primary === mediaMuted, mediaVolume) (CJP)
  mediaVolumeLevel: {
    get(stateOwners) {
      const { media } = stateOwners;
      if (typeof (media == null ? void 0 : media.volume) == "undefined")
        return "high";
      if (media.muted || media.volume === 0)
        return "off";
      if (media.volume < 0.5)
        return "low";
      if (media.volume < 0.75)
        return "medium";
      return "high";
    },
    mediaEvents: ["volumechange"]
  },
  mediaCurrentTime: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      return (_a3 = media == null ? void 0 : media.currentTime) != null ? _a3 : 0;
    },
    set(value, stateOwners) {
      const { media } = stateOwners;
      if (!media || !isValidNumber(value))
        return;
      media.currentTime = value;
    },
    mediaEvents: ["timeupdate", "loadedmetadata"]
  },
  mediaDuration: {
    get(stateOwners) {
      const { media, options: { defaultDuration } = {} } = stateOwners;
      if (defaultDuration && (!media || !media.duration || Number.isNaN(media.duration) || !Number.isFinite(media.duration))) {
        return defaultDuration;
      }
      return Number.isFinite(media == null ? void 0 : media.duration) ? media.duration : Number.NaN;
    },
    mediaEvents: ["durationchange", "loadedmetadata", "emptied"]
  },
  mediaLoading: {
    get(stateOwners) {
      const { media } = stateOwners;
      return (media == null ? void 0 : media.readyState) < 3;
    },
    mediaEvents: ["waiting", "playing", "emptied"]
  },
  mediaSeekable: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      if (!((_a3 = media == null ? void 0 : media.seekable) == null ? void 0 : _a3.length))
        return void 0;
      const start = media.seekable.start(0);
      const end = media.seekable.end(media.seekable.length - 1);
      if (!start && !end)
        return void 0;
      return [Number(start.toFixed(3)), Number(end.toFixed(3))];
    },
    mediaEvents: ["loadedmetadata", "emptied", "progress", "seekablechange"]
  },
  mediaBuffered: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      const timeRanges = (_a3 = media == null ? void 0 : media.buffered) != null ? _a3 : [];
      return Array.from(timeRanges).map((_, i) => [
        Number(timeRanges.start(i).toFixed(3)),
        Number(timeRanges.end(i).toFixed(3))
      ]);
    },
    mediaEvents: ["progress", "emptied"]
  },
  mediaStreamType: {
    get(stateOwners) {
      const { media, options: { defaultStreamType } = {} } = stateOwners;
      const usedDefaultStreamType = [
        StreamTypes.LIVE,
        StreamTypes.ON_DEMAND
      ].includes(defaultStreamType) ? defaultStreamType : void 0;
      if (!media)
        return usedDefaultStreamType;
      const { streamType } = media;
      if (StreamTypeValues.includes(streamType)) {
        if (streamType === StreamTypes.UNKNOWN) {
          return usedDefaultStreamType;
        }
        return streamType;
      }
      const duration = media.duration;
      if (duration === Infinity) {
        return StreamTypes.LIVE;
      } else if (Number.isFinite(duration)) {
        return StreamTypes.ON_DEMAND;
      }
      return usedDefaultStreamType;
    },
    mediaEvents: [
      "emptied",
      "durationchange",
      "loadedmetadata",
      "streamtypechange"
    ]
  },
  mediaTargetLiveWindow: {
    get(stateOwners) {
      const { media } = stateOwners;
      if (!media)
        return Number.NaN;
      const { targetLiveWindow } = media;
      const streamType = stateMediator.mediaStreamType.get(stateOwners);
      if ((targetLiveWindow == null || Number.isNaN(targetLiveWindow)) && streamType === StreamTypes.LIVE) {
        return 0;
      }
      return targetLiveWindow;
    },
    mediaEvents: [
      "emptied",
      "durationchange",
      "loadedmetadata",
      "streamtypechange",
      "targetlivewindowchange"
    ]
  },
  mediaTimeIsLive: {
    get(stateOwners) {
      const {
        media,
        // Default to 10 seconds
        options: { liveEdgeOffset = 10 } = {}
      } = stateOwners;
      if (!media)
        return false;
      if (typeof media.liveEdgeStart === "number") {
        if (Number.isNaN(media.liveEdgeStart))
          return false;
        return media.currentTime >= media.liveEdgeStart;
      }
      const live = stateMediator.mediaStreamType.get(stateOwners) === StreamTypes.LIVE;
      if (!live)
        return false;
      const seekable = media.seekable;
      if (!seekable)
        return true;
      if (!seekable.length)
        return false;
      const liveEdgeStart = seekable.end(seekable.length - 1) - liveEdgeOffset;
      return media.currentTime >= liveEdgeStart;
    },
    mediaEvents: ["playing", "timeupdate", "progress", "waiting", "emptied"]
  },
  // Text Tracks modeling
  mediaSubtitlesList: {
    get(stateOwners) {
      return getSubtitleTracks(stateOwners).map(
        ({ kind, label, language }) => ({ kind, label, language })
      );
    },
    mediaEvents: ["loadstart"],
    textTracksEvents: ["addtrack", "removetrack"]
  },
  mediaSubtitlesShowing: {
    get(stateOwners) {
      return getShowingSubtitleTracks(stateOwners).map(
        ({ kind, label, language }) => ({ kind, label, language })
      );
    },
    mediaEvents: ["loadstart"],
    textTracksEvents: ["addtrack", "removetrack", "change"],
    stateOwnersUpdateHandlers: [
      (_handler, stateOwners) => {
        var _a3, _b2;
        const { media, options } = stateOwners;
        if (!media)
          return;
        const updateDefaultSubtitlesCallback = (event) => {
          var _a22;
          if (!options.defaultSubtitles)
            return;
          const nonSubsEvent = event && ![TextTrackKinds.CAPTIONS, TextTrackKinds.SUBTITLES].includes(
            // @ts-ignore
            (_a22 = event == null ? void 0 : event.track) == null ? void 0 : _a22.kind
          );
          if (nonSubsEvent)
            return;
          toggleSubtitleTracks(stateOwners, true);
        };
        (_a3 = media.textTracks) == null ? void 0 : _a3.addEventListener(
          "addtrack",
          updateDefaultSubtitlesCallback
        );
        (_b2 = media.textTracks) == null ? void 0 : _b2.addEventListener(
          "removetrack",
          updateDefaultSubtitlesCallback
        );
        updateDefaultSubtitlesCallback();
        return () => {
          var _a22, _b22;
          (_a22 = media.textTracks) == null ? void 0 : _a22.removeEventListener(
            "addtrack",
            updateDefaultSubtitlesCallback
          );
          (_b22 = media.textTracks) == null ? void 0 : _b22.removeEventListener(
            "removetrack",
            updateDefaultSubtitlesCallback
          );
        };
      }
    ]
  },
  mediaChaptersCues: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      if (!media)
        return [];
      const [chaptersTrack] = getTextTracksList(media, {
        kind: TextTrackKinds.CHAPTERS
      });
      return Array.from((_a3 = chaptersTrack == null ? void 0 : chaptersTrack.cues) != null ? _a3 : []).map(
        ({ text, startTime, endTime }) => ({
          text,
          startTime,
          endTime
        })
      );
    },
    mediaEvents: ["loadstart", "loadedmetadata"],
    textTracksEvents: ["addtrack", "removetrack", "change"],
    stateOwnersUpdateHandlers: [
      (handler, stateOwners) => {
        var _a3;
        const { media } = stateOwners;
        if (!media)
          return;
        const chaptersTrack = media.querySelector(
          'track[kind="chapters"][default][src]'
        );
        const shadowChaptersTrack = (_a3 = media.shadowRoot) == null ? void 0 : _a3.querySelector(
          ':is(video,audio) > track[kind="chapters"][default][src]'
        );
        chaptersTrack == null ? void 0 : chaptersTrack.addEventListener("load", handler);
        shadowChaptersTrack == null ? void 0 : shadowChaptersTrack.addEventListener("load", handler);
        return () => {
          chaptersTrack == null ? void 0 : chaptersTrack.removeEventListener("load", handler);
          shadowChaptersTrack == null ? void 0 : shadowChaptersTrack.removeEventListener("load", handler);
        };
      }
    ]
  },
  // Modeling state tied to root node
  mediaIsPip: {
    get(stateOwners) {
      var _a3, _b2;
      const { media, documentElement } = stateOwners;
      if (!media || !documentElement)
        return false;
      if (!documentElement.pictureInPictureElement)
        return false;
      if (documentElement.pictureInPictureElement === media)
        return true;
      if (documentElement.pictureInPictureElement instanceof HTMLMediaElement) {
        if (!((_a3 = media.localName) == null ? void 0 : _a3.includes("-")))
          return false;
        return containsComposedNode(
          media,
          documentElement.pictureInPictureElement
        );
      }
      if (documentElement.pictureInPictureElement.localName.includes("-")) {
        let currentRoot = documentElement.pictureInPictureElement.shadowRoot;
        while (currentRoot == null ? void 0 : currentRoot.pictureInPictureElement) {
          if (currentRoot.pictureInPictureElement === media)
            return true;
          currentRoot = (_b2 = currentRoot.pictureInPictureElement) == null ? void 0 : _b2.shadowRoot;
        }
      }
      return false;
    },
    set(value, stateOwners) {
      const { media } = stateOwners;
      if (!media)
        return;
      if (value) {
        if (!Document2.pictureInPictureEnabled) {
          console.warn("MediaChrome: Picture-in-picture is not enabled");
          return;
        }
        if (!media.requestPictureInPicture) {
          console.warn(
            "MediaChrome: The current media does not support picture-in-picture"
          );
          return;
        }
        const warnNotReady = () => {
          console.warn(
            "MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0."
          );
        };
        media.requestPictureInPicture().catch((err) => {
          if (err.code === 11) {
            if (!media.src) {
              console.warn(
                "MediaChrome: The media is not ready for picture-in-picture. It must have a src set."
              );
              return;
            }
            if (media.readyState === 0 && media.preload === "none") {
              const cleanup = () => {
                media.removeEventListener("loadedmetadata", tryPip);
                media.preload = "none";
              };
              const tryPip = () => {
                media.requestPictureInPicture().catch(warnNotReady);
                cleanup();
              };
              media.addEventListener("loadedmetadata", tryPip);
              media.preload = "metadata";
              setTimeout(() => {
                if (media.readyState === 0)
                  warnNotReady();
                cleanup();
              }, 1e3);
            } else {
              throw err;
            }
          } else {
            throw err;
          }
        });
      } else if (Document2.pictureInPictureElement) {
        Document2.exitPictureInPicture();
      }
    },
    mediaEvents: ["enterpictureinpicture", "leavepictureinpicture"]
  },
  mediaRenditionList: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      return [...(_a3 = media == null ? void 0 : media.videoRenditions) != null ? _a3 : []].map((videoRendition) => ({
        ...videoRendition
      }));
    },
    mediaEvents: ["emptied", "loadstart"],
    videoRenditionsEvents: ["addrendition", "removerendition"]
  },
  /** @TODO Model this as a derived value? (CJP) */
  mediaRenditionSelected: {
    get(stateOwners) {
      var _a3, _b2, _c;
      const { media } = stateOwners;
      return (_c = (_b2 = media == null ? void 0 : media.videoRenditions) == null ? void 0 : _b2[(_a3 = media.videoRenditions) == null ? void 0 : _a3.selectedIndex]) == null ? void 0 : _c.id;
    },
    set(value, stateOwners) {
      const { media } = stateOwners;
      if (!(media == null ? void 0 : media.videoRenditions)) {
        console.warn(
          "MediaController: Rendition selection not supported by this media."
        );
        return;
      }
      const renditionId = value;
      const index = Array.prototype.findIndex.call(
        media.videoRenditions,
        (r) => r.id == renditionId
      );
      if (media.videoRenditions.selectedIndex != index) {
        media.videoRenditions.selectedIndex = index;
      }
    },
    mediaEvents: ["emptied"],
    videoRenditionsEvents: ["addrendition", "removerendition", "change"]
  },
  mediaAudioTrackList: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      return [...(_a3 = media == null ? void 0 : media.audioTracks) != null ? _a3 : []];
    },
    mediaEvents: ["emptied", "loadstart"],
    audioTracksEvents: ["addtrack", "removetrack"]
  },
  mediaAudioTrackEnabled: {
    get(stateOwners) {
      var _a3, _b2;
      const { media } = stateOwners;
      return (_b2 = [...(_a3 = media == null ? void 0 : media.audioTracks) != null ? _a3 : []].find(
        (audioTrack) => audioTrack.enabled
      )) == null ? void 0 : _b2.id;
    },
    set(value, stateOwners) {
      const { media } = stateOwners;
      if (!(media == null ? void 0 : media.audioTracks)) {
        console.warn(
          "MediaChrome: Audio track selection not supported by this media."
        );
        return;
      }
      const audioTrackId = value;
      for (const track of media.audioTracks) {
        track.enabled = audioTrackId == track.id;
      }
    },
    mediaEvents: ["emptied"],
    audioTracksEvents: ["addtrack", "removetrack", "change"]
  },
  mediaIsFullscreen: {
    get(stateOwners) {
      return isFullscreen(stateOwners);
    },
    set(value, stateOwners) {
      if (!value) {
        exitFullscreen(stateOwners);
      } else {
        enterFullscreen(stateOwners);
      }
    },
    // older Safari version may require webkit-specific events
    rootEvents: ["fullscreenchange", "webkitfullscreenchange"],
    // iOS requires webkit-specific events on the video.
    mediaEvents: ["webkitbeginfullscreen", "webkitendfullscreen", "webkitpresentationmodechanged"]
  },
  mediaIsCasting: {
    // Note this relies on a customized castable-video element.
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      if (!(media == null ? void 0 : media.remote) || ((_a3 = media.remote) == null ? void 0 : _a3.state) === "disconnected")
        return false;
      return !!media.remote.state;
    },
    set(value, stateOwners) {
      var _a3, _b2;
      const { media } = stateOwners;
      if (!media)
        return;
      if (value && ((_a3 = media.remote) == null ? void 0 : _a3.state) !== "disconnected")
        return;
      if (!value && ((_b2 = media.remote) == null ? void 0 : _b2.state) !== "connected")
        return;
      if (typeof media.remote.prompt !== "function") {
        console.warn(
          "MediaChrome: Casting is not supported in this environment"
        );
        return;
      }
      media.remote.prompt().catch(() => {
      });
    },
    remoteEvents: ["connect", "connecting", "disconnect"]
  },
  // NOTE: Newly added state for tracking airplaying
  mediaIsAirplaying: {
    // NOTE: Cannot know if airplaying since Safari doesn't fully support HTMLMediaElement::remote yet (e.g. remote::state) (CJP)
    get() {
      return false;
    },
    set(_value2, stateOwners) {
      const { media } = stateOwners;
      if (!media)
        return;
      if (!(media.webkitShowPlaybackTargetPicker && GlobalThis.WebKitPlaybackTargetAvailabilityEvent)) {
        console.warn(
          "MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment"
        );
        return;
      }
      media.webkitShowPlaybackTargetPicker();
    },
    mediaEvents: ["webkitcurrentplaybacktargetiswirelesschanged"]
  },
  mediaFullscreenUnavailable: {
    get(stateOwners) {
      const { media } = stateOwners;
      if (!fullscreenSupported || !hasFullscreenSupport(media))
        return AvailabilityStates.UNSUPPORTED;
      return void 0;
    }
  },
  mediaPipUnavailable: {
    get(stateOwners) {
      const { media } = stateOwners;
      if (!pipSupported || !hasPipSupport(media))
        return AvailabilityStates.UNSUPPORTED;
    }
  },
  mediaVolumeUnavailable: {
    get(stateOwners) {
      const { media } = stateOwners;
      if (volumeSupported === false || (media == null ? void 0 : media.volume) == void 0) {
        return AvailabilityStates.UNSUPPORTED;
      }
      return void 0;
    },
    // NOTE: Slightly different impl here. Added generic support for
    // "stateOwnersUpdateHandlers" since the original impl had to hack around
    // race conditions. (CJP)
    stateOwnersUpdateHandlers: [
      (handler) => {
        if (volumeSupported == null) {
          volumeSupportPromise.then(
            (supported) => handler(supported ? void 0 : AvailabilityStates.UNSUPPORTED)
          );
        }
      }
    ]
  },
  mediaCastUnavailable: {
    // @ts-ignore
    get(stateOwners, { availability = "not-available" } = {}) {
      var _a3;
      const { media } = stateOwners;
      if (!castSupported || !((_a3 = media == null ? void 0 : media.remote) == null ? void 0 : _a3.state)) {
        return AvailabilityStates.UNSUPPORTED;
      }
      if (availability == null || availability === "available")
        return void 0;
      return AvailabilityStates.UNAVAILABLE;
    },
    stateOwnersUpdateHandlers: [
      (handler, stateOwners) => {
        var _a3;
        const { media } = stateOwners;
        if (!media)
          return;
        const remotePlaybackDisabled = media.disableRemotePlayback || media.hasAttribute("disableremoteplayback");
        if (!remotePlaybackDisabled) {
          (_a3 = media == null ? void 0 : media.remote) == null ? void 0 : _a3.watchAvailability((availabilityBool) => {
            const availability = availabilityBool ? "available" : "not-available";
            handler({ availability });
          }).catch((error2) => {
            if (error2.name === "NotSupportedError") {
              handler({ availability: null });
            } else {
              handler({ availability: "not-available" });
            }
          });
        }
        return () => {
          var _a22;
          (_a22 = media == null ? void 0 : media.remote) == null ? void 0 : _a22.cancelWatchAvailability().catch(() => {
          });
        };
      }
    ]
  },
  mediaAirplayUnavailable: {
    get(_stateOwners, event) {
      if (!airplaySupported)
        return AvailabilityStates.UNSUPPORTED;
      if ((event == null ? void 0 : event.availability) === "not-available") {
        return AvailabilityStates.UNAVAILABLE;
      }
      return void 0;
    },
    // NOTE: Keeping this event, as it's still the documented way of monitoring
    // for AirPlay availability from Apple.
    // See: https://developer.apple.com/documentation/webkitjs/adding_an_airplay_button_to_your_safari_media_controls#2940021 (CJP)
    mediaEvents: ["webkitplaybacktargetavailabilitychanged"],
    stateOwnersUpdateHandlers: [
      (handler, stateOwners) => {
        var _a3;
        const { media } = stateOwners;
        if (!media)
          return;
        const remotePlaybackDisabled = media.disableRemotePlayback || media.hasAttribute("disableremoteplayback");
        if (!remotePlaybackDisabled) {
          (_a3 = media == null ? void 0 : media.remote) == null ? void 0 : _a3.watchAvailability((availabilityBool) => {
            const availability = availabilityBool ? "available" : "not-available";
            handler({ availability });
          }).catch((error2) => {
            if (error2.name === "NotSupportedError") {
              handler({ availability: null });
            } else {
              handler({ availability: "not-available" });
            }
          });
        }
        return () => {
          var _a22;
          (_a22 = media == null ? void 0 : media.remote) == null ? void 0 : _a22.cancelWatchAvailability().catch(() => {
          });
        };
      }
    ]
  },
  mediaRenditionUnavailable: {
    get(stateOwners) {
      var _a3;
      const { media } = stateOwners;
      if (!(media == null ? void 0 : media.videoRenditions)) {
        return AvailabilityStates.UNSUPPORTED;
      }
      if (!((_a3 = media.videoRenditions) == null ? void 0 : _a3.length)) {
        return AvailabilityStates.UNAVAILABLE;
      }
      return void 0;
    },
    mediaEvents: ["emptied", "loadstart"],
    videoRenditionsEvents: ["addrendition", "removerendition"]
  },
  mediaAudioTrackUnavailable: {
    get(stateOwners) {
      var _a3, _b2;
      const { media } = stateOwners;
      if (!(media == null ? void 0 : media.audioTracks)) {
        return AvailabilityStates.UNSUPPORTED;
      }
      if (((_b2 = (_a3 = media.audioTracks) == null ? void 0 : _a3.length) != null ? _b2 : 0) <= 1) {
        return AvailabilityStates.UNAVAILABLE;
      }
      return void 0;
    },
    mediaEvents: ["emptied", "loadstart"],
    audioTracksEvents: ["addtrack", "removetrack"]
  }
};

// ../../node_modules/media-chrome/dist/media-store/request-map.js
var requestMap = {
  /**
   * @TODO Consider adding state to `StateMediator` for e.g. `mediaThumbnailCues` and use that for derived state here (CJP)
   */
  [MediaUIEvents.MEDIA_PREVIEW_REQUEST](stateMediator2, stateOwners, { detail }) {
    var _a3, _b2, _c;
    const { media } = stateOwners;
    const mediaPreviewTime = detail != null ? detail : void 0;
    let mediaPreviewImage = void 0;
    let mediaPreviewCoords = void 0;
    if (media && mediaPreviewTime != null) {
      const [track] = getTextTracksList(media, {
        kind: TextTrackKinds.METADATA,
        label: "thumbnails"
      });
      const cue = Array.prototype.find.call((_a3 = track == null ? void 0 : track.cues) != null ? _a3 : [], (c, i, cs) => {
        if (i === 0)
          return c.endTime > mediaPreviewTime;
        if (i === cs.length - 1)
          return c.startTime <= mediaPreviewTime;
        return c.startTime <= mediaPreviewTime && c.endTime > mediaPreviewTime;
      });
      if (cue) {
        const base = !/'^(?:[a-z]+:)?\/\//i.test(cue.text) ? (_b2 = media == null ? void 0 : media.querySelector(
          'track[label="thumbnails"]'
        )) == null ? void 0 : _b2.src : void 0;
        const url = new URL(cue.text, base);
        const previewCoordsStr = new URLSearchParams(url.hash).get("#xywh");
        mediaPreviewCoords = previewCoordsStr.split(",").map((numStr) => +numStr);
        mediaPreviewImage = url.href;
      }
    }
    const mediaDuration = stateMediator2.mediaDuration.get(stateOwners);
    const mediaChaptersCues = stateMediator2.mediaChaptersCues.get(stateOwners);
    let mediaPreviewChapter = (_c = mediaChaptersCues.find((c, i, cs) => {
      if (i === cs.length - 1 && mediaDuration === c.endTime) {
        return c.startTime <= mediaPreviewTime && c.endTime >= mediaPreviewTime;
      }
      return c.startTime <= mediaPreviewTime && c.endTime > mediaPreviewTime;
    })) == null ? void 0 : _c.text;
    if (detail != null && mediaPreviewChapter == null) {
      mediaPreviewChapter = "";
    }
    return {
      mediaPreviewTime,
      mediaPreviewImage,
      mediaPreviewCoords,
      mediaPreviewChapter
    };
  },
  [MediaUIEvents.MEDIA_PAUSE_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaPaused";
    const value = true;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_PLAY_REQUEST](stateMediator2, stateOwners) {
    var _a3;
    const key = "mediaPaused";
    const value = false;
    const live = stateMediator2.mediaStreamType.get(stateOwners) === StreamTypes.LIVE;
    if (live) {
      const notDvr = !(stateMediator2.mediaTargetLiveWindow.get(stateOwners) > 0);
      const liveEdgeTime = (_a3 = stateMediator2.mediaSeekable.get(stateOwners)) == null ? void 0 : _a3[1];
      if (notDvr && liveEdgeTime) {
        stateMediator2.mediaCurrentTime.set(liveEdgeTime, stateOwners);
      }
    }
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_PLAYBACK_RATE_REQUEST](stateMediator2, stateOwners, { detail }) {
    const key = "mediaPlaybackRate";
    const value = detail;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_MUTE_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaMuted";
    const value = true;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_UNMUTE_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaMuted";
    const value = false;
    if (!stateMediator2.mediaVolume.get(stateOwners)) {
      stateMediator2.mediaVolume.set(0.25, stateOwners);
    }
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_VOLUME_REQUEST](stateMediator2, stateOwners, { detail }) {
    const key = "mediaVolume";
    const value = detail;
    if (value && stateMediator2.mediaMuted.get(stateOwners)) {
      stateMediator2.mediaMuted.set(false, stateOwners);
    }
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_SEEK_REQUEST](stateMediator2, stateOwners, { detail }) {
    const key = "mediaCurrentTime";
    const value = detail;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_SEEK_TO_LIVE_REQUEST](stateMediator2, stateOwners) {
    var _a3;
    const key = "mediaCurrentTime";
    const value = (_a3 = stateMediator2.mediaSeekable.get(stateOwners)) == null ? void 0 : _a3[1];
    if (Number.isNaN(Number(value)))
      return;
    stateMediator2[key].set(value, stateOwners);
  },
  // Text Tracks state change requests
  [MediaUIEvents.MEDIA_SHOW_SUBTITLES_REQUEST](_stateMediator, stateOwners, { detail }) {
    var _a3;
    const { options } = stateOwners;
    const tracks = getSubtitleTracks(stateOwners);
    const tracksToUpdate = parseTracks(detail);
    const preferredLanguage = (_a3 = tracksToUpdate[0]) == null ? void 0 : _a3.language;
    if (preferredLanguage && !options.noSubtitlesLangPref) {
      GlobalThis.localStorage.setItem(
        "media-chrome-pref-subtitles-lang",
        preferredLanguage
      );
    }
    updateTracksModeTo(TextTrackModes.SHOWING, tracks, tracksToUpdate);
  },
  [MediaUIEvents.MEDIA_DISABLE_SUBTITLES_REQUEST](_stateMediator, stateOwners, { detail }) {
    const tracks = getSubtitleTracks(stateOwners);
    const tracksToUpdate = detail != null ? detail : [];
    updateTracksModeTo(TextTrackModes.DISABLED, tracks, tracksToUpdate);
  },
  [MediaUIEvents.MEDIA_TOGGLE_SUBTITLES_REQUEST](_stateMediator, stateOwners, { detail }) {
    toggleSubtitleTracks(stateOwners, detail);
  },
  // Renditions/Tracks state change requests
  [MediaUIEvents.MEDIA_RENDITION_REQUEST](stateMediator2, stateOwners, { detail }) {
    const key = "mediaRenditionSelected";
    const value = detail;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_AUDIO_TRACK_REQUEST](stateMediator2, stateOwners, { detail }) {
    const key = "mediaAudioTrackEnabled";
    const value = detail;
    stateMediator2[key].set(value, stateOwners);
  },
  // State change requests dependent on root node
  [MediaUIEvents.MEDIA_ENTER_PIP_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaIsPip";
    const value = true;
    if (stateMediator2.mediaIsFullscreen.get(stateOwners)) {
      stateMediator2.mediaIsFullscreen.set(false, stateOwners);
    }
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_EXIT_PIP_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaIsPip";
    const value = false;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_ENTER_FULLSCREEN_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaIsFullscreen";
    const value = true;
    if (stateMediator2.mediaIsPip.get(stateOwners)) {
      stateMediator2.mediaIsPip.set(false, stateOwners);
    }
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_EXIT_FULLSCREEN_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaIsFullscreen";
    const value = false;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_ENTER_CAST_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaIsCasting";
    const value = true;
    if (stateMediator2.mediaIsFullscreen.get(stateOwners)) {
      stateMediator2.mediaIsFullscreen.set(false, stateOwners);
    }
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_EXIT_CAST_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaIsCasting";
    const value = false;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_AIRPLAY_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaIsAirplaying";
    const value = true;
    stateMediator2[key].set(value, stateOwners);
  }
};

// ../../node_modules/media-chrome/dist/media-store/media-store.js
var createMediaStore = ({
  media,
  fullscreenElement,
  documentElement,
  stateMediator: stateMediator2 = stateMediator,
  requestMap: requestMap2 = requestMap,
  options = {},
  monitorStateOwnersOnlyWithSubscriptions = true
}) => {
  const callbacks = [];
  const stateOwners = {
    // Spreading options here since folks should not rely on holding onto references
    // for any app-level logic wrt options.
    options: { ...options }
  };
  let state = Object.freeze({
    mediaPreviewTime: void 0,
    mediaPreviewImage: void 0,
    mediaPreviewCoords: void 0,
    mediaPreviewChapter: void 0
  });
  const updateState = (nextStateDelta) => {
    if (nextStateDelta == void 0)
      return;
    if (areValuesEq(nextStateDelta, state)) {
      return;
    }
    state = Object.freeze({
      ...state,
      ...nextStateDelta
    });
    callbacks.forEach((cb) => cb(state));
  };
  const updateStateFromFacade = () => {
    const nextState = Object.entries(stateMediator2).reduce(
      (nextState2, [stateName, { get }]) => {
        nextState2[stateName] = get(stateOwners);
        return nextState2;
      },
      {}
    );
    updateState(nextState);
  };
  const stateUpdateHandlers = {};
  let nextStateOwners = void 0;
  const updateStateOwners = async (nextStateOwnersDelta, nextSubscriberCount) => {
    var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
    const pendingUpdate = !!nextStateOwners;
    nextStateOwners = {
      ...stateOwners,
      ...nextStateOwners != null ? nextStateOwners : {},
      ...nextStateOwnersDelta
    };
    if (pendingUpdate)
      return;
    await prepareStateOwners(...Object.values(nextStateOwnersDelta));
    const shouldTeardownFromSubscriberCount = callbacks.length > 0 && nextSubscriberCount === 0 && monitorStateOwnersOnlyWithSubscriptions;
    const mediaChanged = stateOwners.media !== nextStateOwners.media;
    const textTracksChanged = ((_a3 = stateOwners.media) == null ? void 0 : _a3.textTracks) !== ((_b2 = nextStateOwners.media) == null ? void 0 : _b2.textTracks);
    const videoRenditionsChanged = ((_c = stateOwners.media) == null ? void 0 : _c.videoRenditions) !== ((_d = nextStateOwners.media) == null ? void 0 : _d.videoRenditions);
    const audioTracksChanged = ((_e = stateOwners.media) == null ? void 0 : _e.audioTracks) !== ((_f = nextStateOwners.media) == null ? void 0 : _f.audioTracks);
    const remoteChanged = ((_g = stateOwners.media) == null ? void 0 : _g.remote) !== ((_h = nextStateOwners.media) == null ? void 0 : _h.remote);
    const rootNodeChanged = stateOwners.documentElement !== nextStateOwners.documentElement;
    const teardownMedia = !!stateOwners.media && (mediaChanged || shouldTeardownFromSubscriberCount);
    const teardownTextTracks = !!((_i = stateOwners.media) == null ? void 0 : _i.textTracks) && (textTracksChanged || shouldTeardownFromSubscriberCount);
    const teardownVideoRenditions = !!((_j = stateOwners.media) == null ? void 0 : _j.videoRenditions) && (videoRenditionsChanged || shouldTeardownFromSubscriberCount);
    const teardownAudioTracks = !!((_k = stateOwners.media) == null ? void 0 : _k.audioTracks) && (audioTracksChanged || shouldTeardownFromSubscriberCount);
    const teardownRemote = !!((_l = stateOwners.media) == null ? void 0 : _l.remote) && (remoteChanged || shouldTeardownFromSubscriberCount);
    const teardownRootNode = !!stateOwners.documentElement && (rootNodeChanged || shouldTeardownFromSubscriberCount);
    const teardownSomething = teardownMedia || teardownTextTracks || teardownVideoRenditions || teardownAudioTracks || teardownRemote || teardownRootNode;
    const shouldSetupFromSubscriberCount = callbacks.length === 0 && nextSubscriberCount === 1 && monitorStateOwnersOnlyWithSubscriptions;
    const setupMedia = !!nextStateOwners.media && (mediaChanged || shouldSetupFromSubscriberCount);
    const setupTextTracks = !!((_m = nextStateOwners.media) == null ? void 0 : _m.textTracks) && (textTracksChanged || shouldSetupFromSubscriberCount);
    const setupVideoRenditions = !!((_n = nextStateOwners.media) == null ? void 0 : _n.videoRenditions) && (videoRenditionsChanged || shouldSetupFromSubscriberCount);
    const setupAudioTracks = !!((_o = nextStateOwners.media) == null ? void 0 : _o.audioTracks) && (audioTracksChanged || shouldSetupFromSubscriberCount);
    const setupRemote = !!((_p = nextStateOwners.media) == null ? void 0 : _p.remote) && (remoteChanged || shouldSetupFromSubscriberCount);
    const setupRootNode = !!nextStateOwners.documentElement && (rootNodeChanged || shouldSetupFromSubscriberCount);
    const setupSomething = setupMedia || setupTextTracks || setupVideoRenditions || setupAudioTracks || setupRemote || setupRootNode;
    const somethingToDo = teardownSomething || setupSomething;
    if (!somethingToDo) {
      Object.entries(nextStateOwners).forEach(
        ([stateOwnerName, stateOwner]) => {
          stateOwners[stateOwnerName] = stateOwner;
        }
      );
      updateStateFromFacade();
      nextStateOwners = void 0;
      return;
    }
    Object.entries(stateMediator2).forEach(
      ([
        stateName,
        {
          get,
          mediaEvents = [],
          textTracksEvents = [],
          videoRenditionsEvents = [],
          audioTracksEvents = [],
          remoteEvents = [],
          rootEvents = [],
          stateOwnersUpdateHandlers = []
        }
      ]) => {
        if (!stateUpdateHandlers[stateName]) {
          stateUpdateHandlers[stateName] = {};
        }
        const handler = (event) => {
          const nextValue = get(stateOwners, event);
          updateState({ [stateName]: nextValue });
        };
        let prevHandler;
        prevHandler = stateUpdateHandlers[stateName].mediaEvents;
        mediaEvents.forEach((eventType) => {
          if (prevHandler && teardownMedia) {
            stateOwners.media.removeEventListener(eventType, prevHandler);
            stateUpdateHandlers[stateName].mediaEvents = void 0;
          }
          if (setupMedia) {
            nextStateOwners.media.addEventListener(eventType, handler);
            stateUpdateHandlers[stateName].mediaEvents = handler;
          }
        });
        prevHandler = stateUpdateHandlers[stateName].textTracksEvents;
        textTracksEvents.forEach((eventType) => {
          var _a22, _b22;
          if (prevHandler && teardownTextTracks) {
            (_a22 = stateOwners.media.textTracks) == null ? void 0 : _a22.removeEventListener(
              eventType,
              prevHandler
            );
            stateUpdateHandlers[stateName].textTracksEvents = void 0;
          }
          if (setupTextTracks) {
            (_b22 = nextStateOwners.media.textTracks) == null ? void 0 : _b22.addEventListener(
              eventType,
              handler
            );
            stateUpdateHandlers[stateName].textTracksEvents = handler;
          }
        });
        prevHandler = stateUpdateHandlers[stateName].videoRenditionsEvents;
        videoRenditionsEvents.forEach((eventType) => {
          var _a22, _b22;
          if (prevHandler && teardownVideoRenditions) {
            (_a22 = stateOwners.media.videoRenditions) == null ? void 0 : _a22.removeEventListener(
              eventType,
              prevHandler
            );
            stateUpdateHandlers[stateName].videoRenditionsEvents = void 0;
          }
          if (setupVideoRenditions) {
            (_b22 = nextStateOwners.media.videoRenditions) == null ? void 0 : _b22.addEventListener(
              eventType,
              handler
            );
            stateUpdateHandlers[stateName].videoRenditionsEvents = handler;
          }
        });
        prevHandler = stateUpdateHandlers[stateName].audioTracksEvents;
        audioTracksEvents.forEach((eventType) => {
          var _a22, _b22;
          if (prevHandler && teardownAudioTracks) {
            (_a22 = stateOwners.media.audioTracks) == null ? void 0 : _a22.removeEventListener(
              eventType,
              prevHandler
            );
            stateUpdateHandlers[stateName].audioTracksEvents = void 0;
          }
          if (setupAudioTracks) {
            (_b22 = nextStateOwners.media.audioTracks) == null ? void 0 : _b22.addEventListener(
              eventType,
              handler
            );
            stateUpdateHandlers[stateName].audioTracksEvents = handler;
          }
        });
        prevHandler = stateUpdateHandlers[stateName].remoteEvents;
        remoteEvents.forEach((eventType) => {
          var _a22, _b22;
          if (prevHandler && teardownRemote) {
            (_a22 = stateOwners.media.remote) == null ? void 0 : _a22.removeEventListener(
              eventType,
              prevHandler
            );
            stateUpdateHandlers[stateName].remoteEvents = void 0;
          }
          if (setupRemote) {
            (_b22 = nextStateOwners.media.remote) == null ? void 0 : _b22.addEventListener(eventType, handler);
            stateUpdateHandlers[stateName].remoteEvents = handler;
          }
        });
        prevHandler = stateUpdateHandlers[stateName].rootEvents;
        rootEvents.forEach((eventType) => {
          if (prevHandler && teardownRootNode) {
            stateOwners.documentElement.removeEventListener(
              eventType,
              prevHandler
            );
            stateUpdateHandlers[stateName].rootEvents = void 0;
          }
          if (setupRootNode) {
            nextStateOwners.documentElement.addEventListener(
              eventType,
              handler
            );
            stateUpdateHandlers[stateName].rootEvents = handler;
          }
        });
        const prevHandlerTeardown = stateUpdateHandlers[stateName].stateOwnersUpdateHandlers;
        stateOwnersUpdateHandlers.forEach((fn) => {
          if (prevHandlerTeardown && teardownSomething) {
            prevHandlerTeardown();
          }
          if (setupSomething) {
            stateUpdateHandlers[stateName].stateOwnersUpdateHandlers = fn(
              handler,
              nextStateOwners
            );
          }
        });
      }
    );
    Object.entries(nextStateOwners).forEach(([stateOwnerName, stateOwner]) => {
      stateOwners[stateOwnerName] = stateOwner;
    });
    updateStateFromFacade();
    nextStateOwners = void 0;
  };
  updateStateOwners({ media, fullscreenElement, documentElement, options });
  return {
    // note that none of these cases directly interact with the media element, root node, full screen element, etc.
    // note these "actions" could just be the events if we wanted, especially if we normalize on "detail" for
    // any payload-relevant values
    // This is roughly equivalent to our used to be in our state requests dictionary object, though much of the
    // "heavy lifting" is now moved into the facade `set()`
    dispatch(action) {
      const { type, detail } = action;
      if (requestMap2[type] && state.mediaErrorCode == null) {
        updateState(requestMap2[type](stateMediator2, stateOwners, action));
        return;
      }
      if (type === "mediaelementchangerequest") {
        updateStateOwners({ media: detail });
      } else if (type === "fullscreenelementchangerequest") {
        updateStateOwners({ fullscreenElement: detail });
      } else if (type === "documentelementchangerequest") {
        updateStateOwners({ documentElement: detail });
      } else if (type === "optionschangerequest") {
        Object.entries(detail != null ? detail : {}).forEach(([optionName, optionValue]) => {
          stateOwners.options[optionName] = optionValue;
        });
      }
    },
    getState() {
      return state;
    },
    subscribe(callback) {
      updateStateOwners({}, callbacks.length + 1);
      callbacks.push(callback);
      callback(state);
      return () => {
        const idx = callbacks.indexOf(callback);
        if (idx >= 0) {
          updateStateOwners({}, callbacks.length - 1);
          callbacks.splice(idx, 1);
        }
      };
    }
  };
};

// ../../node_modules/media-chrome/dist/media-controller.js
var __accessCheck5 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet5 = (obj, member, getter) => {
  __accessCheck5(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd5 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet5 = (obj, member, value, setter) => {
  __accessCheck5(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod3 = (obj, member, method) => {
  __accessCheck5(obj, member, "access private method");
  return method;
};
var _hotKeys;
var _fullscreenElement;
var _mediaStore;
var _mediaStateCallback;
var _mediaStoreUnsubscribe;
var _mediaStateEventHandler;
var _setupDefaultStore;
var setupDefaultStore_fn;
var _keyUpHandler;
var keyUpHandler_fn;
var _keyDownHandler;
var keyDownHandler_fn;
var ButtonPressedKeys = [
  "ArrowLeft",
  "ArrowRight",
  "Enter",
  " ",
  "f",
  "m",
  "k",
  "c"
];
var DEFAULT_SEEK_OFFSET = 10;
var Attributes2 = {
  DEFAULT_SUBTITLES: "defaultsubtitles",
  DEFAULT_STREAM_TYPE: "defaultstreamtype",
  DEFAULT_DURATION: "defaultduration",
  FULLSCREEN_ELEMENT: "fullscreenelement",
  HOTKEYS: "hotkeys",
  KEYS_USED: "keysused",
  LIVE_EDGE_OFFSET: "liveedgeoffset",
  NO_AUTO_SEEK_TO_LIVE: "noautoseektolive",
  NO_HOTKEYS: "nohotkeys",
  NO_VOLUME_PREF: "novolumepref",
  NO_SUBTITLES_LANG_PREF: "nosubtitleslangpref",
  NO_DEFAULT_STORE: "nodefaultstore",
  KEYBOARD_FORWARD_SEEK_OFFSET: "keyboardforwardseekoffset",
  KEYBOARD_BACKWARD_SEEK_OFFSET: "keyboardbackwardseekoffset"
};
var MediaController = class extends MediaContainer {
  constructor() {
    super();
    __privateAdd5(this, _setupDefaultStore);
    __privateAdd5(this, _keyUpHandler);
    __privateAdd5(this, _keyDownHandler);
    this.mediaStateReceivers = [];
    this.associatedElementSubscriptions = /* @__PURE__ */ new Map();
    __privateAdd5(this, _hotKeys, new AttributeTokenList(this, Attributes2.HOTKEYS));
    __privateAdd5(this, _fullscreenElement, void 0);
    __privateAdd5(this, _mediaStore, void 0);
    __privateAdd5(this, _mediaStateCallback, void 0);
    __privateAdd5(this, _mediaStoreUnsubscribe, void 0);
    __privateAdd5(this, _mediaStateEventHandler, (event) => {
      var _a3;
      (_a3 = __privateGet5(this, _mediaStore)) == null ? void 0 : _a3.dispatch(event);
    });
    this.associateElement(this);
    let prevState = {};
    __privateSet5(this, _mediaStateCallback, (nextState) => {
      Object.entries(nextState).forEach(([stateName, stateValue]) => {
        if (stateName in prevState && prevState[stateName] === stateValue)
          return;
        this.propagateMediaState(stateName, stateValue);
        const attrName = stateName.toLowerCase();
        const evt = new GlobalThis.CustomEvent(
          AttributeToStateChangeEventMap[attrName],
          { composed: true, detail: stateValue }
        );
        this.dispatchEvent(evt);
      });
      prevState = nextState;
    });
    this.enableHotkeys();
  }
  static get observedAttributes() {
    return super.observedAttributes.concat(
      Attributes2.NO_HOTKEYS,
      Attributes2.HOTKEYS,
      Attributes2.DEFAULT_STREAM_TYPE,
      Attributes2.DEFAULT_SUBTITLES,
      Attributes2.DEFAULT_DURATION
    );
  }
  get mediaStore() {
    return __privateGet5(this, _mediaStore);
  }
  set mediaStore(value) {
    var _a3, _b2;
    if (__privateGet5(this, _mediaStore)) {
      (_a3 = __privateGet5(this, _mediaStoreUnsubscribe)) == null ? void 0 : _a3.call(this);
      __privateSet5(this, _mediaStoreUnsubscribe, void 0);
    }
    __privateSet5(this, _mediaStore, value);
    if (!__privateGet5(this, _mediaStore) && !this.hasAttribute(Attributes2.NO_DEFAULT_STORE)) {
      __privateMethod3(this, _setupDefaultStore, setupDefaultStore_fn).call(this);
      return;
    }
    __privateSet5(this, _mediaStoreUnsubscribe, (_b2 = __privateGet5(this, _mediaStore)) == null ? void 0 : _b2.subscribe(
      __privateGet5(this, _mediaStateCallback)
    ));
  }
  get fullscreenElement() {
    var _a3;
    return (_a3 = __privateGet5(this, _fullscreenElement)) != null ? _a3 : this;
  }
  set fullscreenElement(element) {
    var _a3;
    if (this.hasAttribute(Attributes2.FULLSCREEN_ELEMENT)) {
      this.removeAttribute(Attributes2.FULLSCREEN_ELEMENT);
    }
    __privateSet5(this, _fullscreenElement, element);
    (_a3 = __privateGet5(this, _mediaStore)) == null ? void 0 : _a3.dispatch({
      type: "fullscreenelementchangerequest",
      detail: this.fullscreenElement
    });
  }
  get defaultSubtitles() {
    return getBooleanAttr(this, Attributes2.DEFAULT_SUBTITLES);
  }
  set defaultSubtitles(value) {
    setBooleanAttr(this, Attributes2.DEFAULT_SUBTITLES, value);
  }
  get defaultStreamType() {
    return getStringAttr(this, Attributes2.DEFAULT_STREAM_TYPE);
  }
  set defaultStreamType(value) {
    setStringAttr(this, Attributes2.DEFAULT_STREAM_TYPE, value);
  }
  get defaultDuration() {
    return getNumericAttr(this, Attributes2.DEFAULT_DURATION);
  }
  set defaultDuration(value) {
    setNumericAttr(this, Attributes2.DEFAULT_DURATION, value);
  }
  get noHotkeys() {
    return getBooleanAttr(this, Attributes2.NO_HOTKEYS);
  }
  set noHotkeys(value) {
    setBooleanAttr(this, Attributes2.NO_HOTKEYS, value);
  }
  get keysUsed() {
    return getStringAttr(this, Attributes2.KEYS_USED);
  }
  set keysUsed(value) {
    setStringAttr(this, Attributes2.KEYS_USED, value);
  }
  get liveEdgeOffset() {
    return getNumericAttr(this, Attributes2.LIVE_EDGE_OFFSET);
  }
  set liveEdgeOffset(value) {
    setNumericAttr(this, Attributes2.LIVE_EDGE_OFFSET, value);
  }
  get noAutoSeekToLive() {
    return getBooleanAttr(this, Attributes2.NO_AUTO_SEEK_TO_LIVE);
  }
  set noAutoSeekToLive(value) {
    setBooleanAttr(this, Attributes2.NO_AUTO_SEEK_TO_LIVE, value);
  }
  get noVolumePref() {
    return getBooleanAttr(this, Attributes2.NO_VOLUME_PREF);
  }
  set noVolumePref(value) {
    setBooleanAttr(this, Attributes2.NO_VOLUME_PREF, value);
  }
  get noSubtitlesLangPref() {
    return getBooleanAttr(this, Attributes2.NO_SUBTITLES_LANG_PREF);
  }
  set noSubtitlesLangPref(value) {
    setBooleanAttr(this, Attributes2.NO_SUBTITLES_LANG_PREF, value);
  }
  get noDefaultStore() {
    return getBooleanAttr(this, Attributes2.NO_DEFAULT_STORE);
  }
  set noDefaultStore(value) {
    setBooleanAttr(this, Attributes2.NO_DEFAULT_STORE, value);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a3, _b2, _c, _d, _e, _f;
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === Attributes2.NO_HOTKEYS) {
      if (newValue !== oldValue && newValue === "") {
        if (this.hasAttribute(Attributes2.HOTKEYS)) {
          console.warn(
            "Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."
          );
        }
        this.disableHotkeys();
      } else if (newValue !== oldValue && newValue === null) {
        this.enableHotkeys();
      }
    } else if (attrName === Attributes2.HOTKEYS) {
      __privateGet5(this, _hotKeys).value = newValue;
    } else if (attrName === Attributes2.DEFAULT_SUBTITLES && newValue !== oldValue) {
      (_a3 = __privateGet5(this, _mediaStore)) == null ? void 0 : _a3.dispatch({
        type: "optionschangerequest",
        detail: {
          defaultSubtitles: this.hasAttribute(Attributes2.DEFAULT_SUBTITLES)
        }
      });
    } else if (attrName === Attributes2.DEFAULT_STREAM_TYPE) {
      (_c = __privateGet5(this, _mediaStore)) == null ? void 0 : _c.dispatch({
        type: "optionschangerequest",
        detail: {
          defaultStreamType: (_b2 = this.getAttribute(Attributes2.DEFAULT_STREAM_TYPE)) != null ? _b2 : void 0
        }
      });
    } else if (attrName === Attributes2.LIVE_EDGE_OFFSET) {
      (_d = __privateGet5(this, _mediaStore)) == null ? void 0 : _d.dispatch({
        type: "optionschangerequest",
        detail: {
          liveEdgeOffset: this.hasAttribute(Attributes2.LIVE_EDGE_OFFSET) ? +this.getAttribute(Attributes2.LIVE_EDGE_OFFSET) : void 0
        }
      });
    } else if (attrName === Attributes2.FULLSCREEN_ELEMENT) {
      const el = newValue ? (_e = this.getRootNode()) == null ? void 0 : _e.getElementById(newValue) : void 0;
      __privateSet5(this, _fullscreenElement, el);
      (_f = __privateGet5(this, _mediaStore)) == null ? void 0 : _f.dispatch({
        type: "fullscreenelementchangerequest",
        detail: this.fullscreenElement
      });
    }
  }
  connectedCallback() {
    var _a3, _b2;
    if (!__privateGet5(this, _mediaStore) && !this.hasAttribute(Attributes2.NO_DEFAULT_STORE)) {
      __privateMethod3(this, _setupDefaultStore, setupDefaultStore_fn).call(this);
    }
    (_a3 = __privateGet5(this, _mediaStore)) == null ? void 0 : _a3.dispatch({
      type: "documentelementchangerequest",
      detail: Document2
    });
    super.connectedCallback();
    if (__privateGet5(this, _mediaStore) && !__privateGet5(this, _mediaStoreUnsubscribe)) {
      __privateSet5(this, _mediaStoreUnsubscribe, (_b2 = __privateGet5(this, _mediaStore)) == null ? void 0 : _b2.subscribe(
        __privateGet5(this, _mediaStateCallback)
      ));
    }
    this.enableHotkeys();
  }
  disconnectedCallback() {
    var _a3, _b2, _c, _d;
    (_a3 = super.disconnectedCallback) == null ? void 0 : _a3.call(this);
    if (__privateGet5(this, _mediaStore)) {
      (_b2 = __privateGet5(this, _mediaStore)) == null ? void 0 : _b2.dispatch({
        type: "documentelementchangerequest",
        detail: void 0
      });
      (_c = __privateGet5(this, _mediaStore)) == null ? void 0 : _c.dispatch({
        type: MediaUIEvents.MEDIA_TOGGLE_SUBTITLES_REQUEST,
        detail: false
      });
    }
    if (__privateGet5(this, _mediaStoreUnsubscribe)) {
      (_d = __privateGet5(this, _mediaStoreUnsubscribe)) == null ? void 0 : _d.call(this);
      __privateSet5(this, _mediaStoreUnsubscribe, void 0);
    }
  }
  /**
   * @override
   * @param {HTMLMediaElement} media
   */
  mediaSetCallback(media) {
    var _a3;
    super.mediaSetCallback(media);
    (_a3 = __privateGet5(this, _mediaStore)) == null ? void 0 : _a3.dispatch({
      type: "mediaelementchangerequest",
      detail: media
    });
    if (!media.hasAttribute("tabindex")) {
      media.tabIndex = -1;
    }
  }
  /**
   * @override
   * @param {HTMLMediaElement} media
   */
  mediaUnsetCallback(media) {
    var _a3;
    super.mediaUnsetCallback(media);
    (_a3 = __privateGet5(this, _mediaStore)) == null ? void 0 : _a3.dispatch({
      type: "mediaelementchangerequest",
      detail: void 0
    });
  }
  propagateMediaState(stateName, state) {
    propagateMediaState(this.mediaStateReceivers, stateName, state);
  }
  associateElement(element) {
    if (!element)
      return;
    const { associatedElementSubscriptions } = this;
    if (associatedElementSubscriptions.has(element))
      return;
    const registerMediaStateReceiver = this.registerMediaStateReceiver.bind(this);
    const unregisterMediaStateReceiver = this.unregisterMediaStateReceiver.bind(this);
    const unsubscribe = monitorForMediaStateReceivers(
      element,
      registerMediaStateReceiver,
      unregisterMediaStateReceiver
    );
    Object.values(MediaUIEvents).forEach((eventName) => {
      element.addEventListener(eventName, __privateGet5(this, _mediaStateEventHandler));
    });
    associatedElementSubscriptions.set(element, unsubscribe);
  }
  unassociateElement(element) {
    if (!element)
      return;
    const { associatedElementSubscriptions } = this;
    if (!associatedElementSubscriptions.has(element))
      return;
    const unsubscribe = associatedElementSubscriptions.get(element);
    unsubscribe();
    associatedElementSubscriptions.delete(element);
    Object.values(MediaUIEvents).forEach((eventName) => {
      element.removeEventListener(eventName, __privateGet5(this, _mediaStateEventHandler));
    });
  }
  registerMediaStateReceiver(el) {
    if (!el)
      return;
    const els = this.mediaStateReceivers;
    const index = els.indexOf(el);
    if (index > -1)
      return;
    els.push(el);
    if (__privateGet5(this, _mediaStore)) {
      Object.entries(__privateGet5(this, _mediaStore).getState()).forEach(
        ([stateName, stateValue]) => {
          propagateMediaState([el], stateName, stateValue);
        }
      );
    }
  }
  unregisterMediaStateReceiver(el) {
    const els = this.mediaStateReceivers;
    const index = els.indexOf(el);
    if (index < 0)
      return;
    els.splice(index, 1);
  }
  enableHotkeys() {
    this.addEventListener("keydown", __privateMethod3(this, _keyDownHandler, keyDownHandler_fn));
  }
  disableHotkeys() {
    this.removeEventListener("keydown", __privateMethod3(this, _keyDownHandler, keyDownHandler_fn));
    this.removeEventListener("keyup", __privateMethod3(this, _keyUpHandler, keyUpHandler_fn));
  }
  get hotkeys() {
    return getStringAttr(this, Attributes2.HOTKEYS);
  }
  set hotkeys(value) {
    setStringAttr(this, Attributes2.HOTKEYS, value);
  }
  keyboardShortcutHandler(e) {
    var _a3, _b2, _c, _d, _e;
    const target = e.target;
    const keysUsed = ((_c = (_b2 = (_a3 = target.getAttribute(Attributes2.KEYS_USED)) == null ? void 0 : _a3.split(" ")) != null ? _b2 : target == null ? void 0 : target.keysUsed) != null ? _c : []).map((key) => key === "Space" ? " " : key).filter(Boolean);
    if (keysUsed.includes(e.key)) {
      return;
    }
    let eventName, detail, evt;
    if (__privateGet5(this, _hotKeys).contains(`no${e.key.toLowerCase()}`))
      return;
    if (e.key === " " && __privateGet5(this, _hotKeys).contains(`nospace`))
      return;
    switch (e.key) {
      case " ":
      case "k":
        eventName = __privateGet5(this, _mediaStore).getState().mediaPaused ? MediaUIEvents.MEDIA_PLAY_REQUEST : MediaUIEvents.MEDIA_PAUSE_REQUEST;
        this.dispatchEvent(
          new GlobalThis.CustomEvent(eventName, {
            composed: true,
            bubbles: true
          })
        );
        break;
      case "m":
        eventName = this.mediaStore.getState().mediaVolumeLevel === "off" ? MediaUIEvents.MEDIA_UNMUTE_REQUEST : MediaUIEvents.MEDIA_MUTE_REQUEST;
        this.dispatchEvent(
          new GlobalThis.CustomEvent(eventName, {
            composed: true,
            bubbles: true
          })
        );
        break;
      case "f":
        eventName = this.mediaStore.getState().mediaIsFullscreen ? MediaUIEvents.MEDIA_EXIT_FULLSCREEN_REQUEST : MediaUIEvents.MEDIA_ENTER_FULLSCREEN_REQUEST;
        this.dispatchEvent(
          new GlobalThis.CustomEvent(eventName, {
            composed: true,
            bubbles: true
          })
        );
        break;
      case "c":
        this.dispatchEvent(
          new GlobalThis.CustomEvent(
            MediaUIEvents.MEDIA_TOGGLE_SUBTITLES_REQUEST,
            { composed: true, bubbles: true }
          )
        );
        break;
      case "ArrowLeft": {
        const offsetValue = this.hasAttribute(
          Attributes2.KEYBOARD_BACKWARD_SEEK_OFFSET
        ) ? +this.getAttribute(Attributes2.KEYBOARD_BACKWARD_SEEK_OFFSET) : DEFAULT_SEEK_OFFSET;
        detail = Math.max(
          ((_d = this.mediaStore.getState().mediaCurrentTime) != null ? _d : 0) - offsetValue,
          0
        );
        evt = new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
          composed: true,
          bubbles: true,
          detail
        });
        this.dispatchEvent(evt);
        break;
      }
      case "ArrowRight": {
        const offsetValue = this.hasAttribute(
          Attributes2.KEYBOARD_FORWARD_SEEK_OFFSET
        ) ? +this.getAttribute(Attributes2.KEYBOARD_FORWARD_SEEK_OFFSET) : DEFAULT_SEEK_OFFSET;
        detail = Math.max(
          ((_e = this.mediaStore.getState().mediaCurrentTime) != null ? _e : 0) + offsetValue,
          0
        );
        evt = new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
          composed: true,
          bubbles: true,
          detail
        });
        this.dispatchEvent(evt);
        break;
      }
      default:
        break;
    }
  }
};
_hotKeys = /* @__PURE__ */ new WeakMap();
_fullscreenElement = /* @__PURE__ */ new WeakMap();
_mediaStore = /* @__PURE__ */ new WeakMap();
_mediaStateCallback = /* @__PURE__ */ new WeakMap();
_mediaStoreUnsubscribe = /* @__PURE__ */ new WeakMap();
_mediaStateEventHandler = /* @__PURE__ */ new WeakMap();
_setupDefaultStore = /* @__PURE__ */ new WeakSet();
setupDefaultStore_fn = function() {
  var _a3;
  this.mediaStore = createMediaStore({
    media: this.media,
    fullscreenElement: this.fullscreenElement,
    options: {
      defaultSubtitles: this.hasAttribute(Attributes2.DEFAULT_SUBTITLES),
      defaultDuration: this.hasAttribute(Attributes2.DEFAULT_DURATION) ? +this.getAttribute(Attributes2.DEFAULT_DURATION) : void 0,
      defaultStreamType: (
        /** @type {import('./media-store/state-mediator.js').StreamTypeValue} */
        (_a3 = this.getAttribute(
          Attributes2.DEFAULT_STREAM_TYPE
        )) != null ? _a3 : void 0
      ),
      liveEdgeOffset: this.hasAttribute(Attributes2.LIVE_EDGE_OFFSET) ? +this.getAttribute(Attributes2.LIVE_EDGE_OFFSET) : void 0,
      // NOTE: This wasn't updated if it was changed later. Should it be? (CJP)
      noVolumePref: this.hasAttribute(Attributes2.NO_VOLUME_PREF),
      noSubtitlesLangPref: this.hasAttribute(
        Attributes2.NO_SUBTITLES_LANG_PREF
      )
    }
  });
};
_keyUpHandler = /* @__PURE__ */ new WeakSet();
keyUpHandler_fn = function(e) {
  const { key } = e;
  if (!ButtonPressedKeys.includes(key)) {
    this.removeEventListener("keyup", __privateMethod3(this, _keyUpHandler, keyUpHandler_fn));
    return;
  }
  this.keyboardShortcutHandler(e);
};
_keyDownHandler = /* @__PURE__ */ new WeakSet();
keyDownHandler_fn = function(e) {
  const { metaKey, altKey, key } = e;
  if (metaKey || altKey || !ButtonPressedKeys.includes(key)) {
    this.removeEventListener("keyup", __privateMethod3(this, _keyUpHandler, keyUpHandler_fn));
    return;
  }
  if ([" ", "ArrowLeft", "ArrowRight"].includes(key) && !(__privateGet5(this, _hotKeys).contains(`no${key.toLowerCase()}`) || key === " " && __privateGet5(this, _hotKeys).contains("nospace"))) {
    e.preventDefault();
  }
  this.addEventListener("keyup", __privateMethod3(this, _keyUpHandler, keyUpHandler_fn), { once: true });
};
var MEDIA_UI_ATTRIBUTE_NAMES2 = Object.values(MediaUIAttributes);
var MEDIA_UI_PROP_NAMES = Object.values(MediaUIProps);
var getMediaUIAttributesFrom = (child) => {
  var _a3, _b2, _c, _d;
  let { observedAttributes: observedAttributes2 } = child.constructor;
  if (!observedAttributes2 && ((_a3 = child.nodeName) == null ? void 0 : _a3.includes("-"))) {
    GlobalThis.customElements.upgrade(child);
    ({ observedAttributes: observedAttributes2 } = child.constructor);
  }
  const mediaChromeAttributesList = (_d = (_c = (_b2 = child == null ? void 0 : child.getAttribute) == null ? void 0 : _b2.call(child, MediaStateReceiverAttributes.MEDIA_CHROME_ATTRIBUTES)) == null ? void 0 : _c.split) == null ? void 0 : _d.call(_c, /\s+/);
  if (!Array.isArray(observedAttributes2 || mediaChromeAttributesList))
    return [];
  return (observedAttributes2 || mediaChromeAttributesList).filter(
    (attrName) => MEDIA_UI_ATTRIBUTE_NAMES2.includes(attrName)
  );
};
var hasMediaUIProps = (mediaStateReceiverCandidate) => {
  var _a3, _b2;
  if (((_a3 = mediaStateReceiverCandidate.nodeName) == null ? void 0 : _a3.includes("-")) && !!GlobalThis.customElements.get(
    (_b2 = mediaStateReceiverCandidate.nodeName) == null ? void 0 : _b2.toLowerCase()
  ) && !(mediaStateReceiverCandidate instanceof GlobalThis.customElements.get(
    mediaStateReceiverCandidate.nodeName.toLowerCase()
  ))) {
    GlobalThis.customElements.upgrade(mediaStateReceiverCandidate);
  }
  return MEDIA_UI_PROP_NAMES.some(
    (propName) => propName in mediaStateReceiverCandidate
  );
};
var isMediaStateReceiver = (child) => {
  return hasMediaUIProps(child) || !!getMediaUIAttributesFrom(child).length;
};
var serializeTuple = (tuple) => {
  var _a3;
  return (_a3 = tuple == null ? void 0 : tuple.join) == null ? void 0 : _a3.call(tuple, ":");
};
var CustomAttrSerializer = {
  [MediaUIAttributes.MEDIA_SUBTITLES_LIST]: stringifyTextTrackList,
  [MediaUIAttributes.MEDIA_SUBTITLES_SHOWING]: stringifyTextTrackList,
  [MediaUIAttributes.MEDIA_SEEKABLE]: serializeTuple,
  [MediaUIAttributes.MEDIA_BUFFERED]: (tuples) => tuples == null ? void 0 : tuples.map(serializeTuple).join(" "),
  [MediaUIAttributes.MEDIA_PREVIEW_COORDS]: (coords) => coords == null ? void 0 : coords.join(" "),
  [MediaUIAttributes.MEDIA_RENDITION_LIST]: stringifyRenditionList,
  [MediaUIAttributes.MEDIA_AUDIO_TRACK_LIST]: stringifyAudioTrackList
};
var setAttr = async (child, attrName, attrValue) => {
  var _a3, _b2;
  if (!child.isConnected) {
    await delay(0);
  }
  if (typeof attrValue === "boolean" || attrValue == null) {
    return setBooleanAttr(child, attrName, attrValue);
  }
  if (typeof attrValue === "number") {
    return setNumericAttr(child, attrName, attrValue);
  }
  if (typeof attrValue === "string") {
    return setStringAttr(child, attrName, attrValue);
  }
  if (Array.isArray(attrValue) && !attrValue.length) {
    return child.removeAttribute(attrName);
  }
  const val = (_b2 = (_a3 = CustomAttrSerializer[attrName]) == null ? void 0 : _a3.call(CustomAttrSerializer, attrValue)) != null ? _b2 : attrValue;
  return child.setAttribute(attrName, val);
};
var isMediaSlotElementDescendant = (el) => {
  var _a3;
  return !!((_a3 = el.closest) == null ? void 0 : _a3.call(el, '*[slot="media"]'));
};
var traverseForMediaStateReceivers = (rootNode, mediaStateReceiverCallback) => {
  if (isMediaSlotElementDescendant(rootNode)) {
    return;
  }
  const traverseForMediaStateReceiversSync = (rootNode2, mediaStateReceiverCallback2) => {
    var _a3, _b2;
    if (isMediaStateReceiver(rootNode2)) {
      mediaStateReceiverCallback2(rootNode2);
    }
    const { children = [] } = rootNode2 != null ? rootNode2 : {};
    const shadowChildren = (_b2 = (_a3 = rootNode2 == null ? void 0 : rootNode2.shadowRoot) == null ? void 0 : _a3.children) != null ? _b2 : [];
    const allChildren = [...children, ...shadowChildren];
    allChildren.forEach(
      (child) => traverseForMediaStateReceivers(
        child,
        mediaStateReceiverCallback2
      )
    );
  };
  const name = rootNode == null ? void 0 : rootNode.nodeName.toLowerCase();
  if (name.includes("-") && !isMediaStateReceiver(rootNode)) {
    GlobalThis.customElements.whenDefined(name).then(() => {
      traverseForMediaStateReceiversSync(rootNode, mediaStateReceiverCallback);
    });
    return;
  }
  traverseForMediaStateReceiversSync(rootNode, mediaStateReceiverCallback);
};
var propagateMediaState = (els, stateName, val) => {
  els.forEach((el) => {
    if (stateName in el) {
      el[stateName] = val;
      return;
    }
    const relevantAttrs = getMediaUIAttributesFrom(el);
    const attrName = stateName.toLowerCase();
    if (!relevantAttrs.includes(attrName))
      return;
    setAttr(el, attrName, val);
  });
};
var monitorForMediaStateReceivers = (rootNode, registerMediaStateReceiver, unregisterMediaStateReceiver) => {
  traverseForMediaStateReceivers(rootNode, registerMediaStateReceiver);
  const registerMediaStateReceiverHandler = (evt) => {
    var _a3;
    const el = (_a3 = evt == null ? void 0 : evt.composedPath()[0]) != null ? _a3 : evt.target;
    registerMediaStateReceiver(el);
  };
  const unregisterMediaStateReceiverHandler = (evt) => {
    var _a3;
    const el = (_a3 = evt == null ? void 0 : evt.composedPath()[0]) != null ? _a3 : evt.target;
    unregisterMediaStateReceiver(el);
  };
  rootNode.addEventListener(
    MediaUIEvents.REGISTER_MEDIA_STATE_RECEIVER,
    registerMediaStateReceiverHandler
  );
  rootNode.addEventListener(
    MediaUIEvents.UNREGISTER_MEDIA_STATE_RECEIVER,
    unregisterMediaStateReceiverHandler
  );
  const mutationCallback = (mutationsList) => {
    mutationsList.forEach((mutationRecord) => {
      const {
        addedNodes = [],
        removedNodes = [],
        type,
        target,
        attributeName
      } = mutationRecord;
      if (type === "childList") {
        Array.prototype.forEach.call(
          addedNodes,
          (node) => traverseForMediaStateReceivers(
            node,
            registerMediaStateReceiver
          )
        );
        Array.prototype.forEach.call(
          removedNodes,
          (node) => traverseForMediaStateReceivers(
            node,
            unregisterMediaStateReceiver
          )
        );
      } else if (type === "attributes" && attributeName === MediaStateReceiverAttributes.MEDIA_CHROME_ATTRIBUTES) {
        if (isMediaStateReceiver(target)) {
          registerMediaStateReceiver(target);
        } else {
          unregisterMediaStateReceiver(target);
        }
      }
    });
  };
  let prevSlotted = [];
  const slotChangeHandler = (event) => {
    const slotEl = event.target;
    if (slotEl.name === "media")
      return;
    prevSlotted.forEach(
      (node) => traverseForMediaStateReceivers(node, unregisterMediaStateReceiver)
    );
    prevSlotted = [
      ...slotEl.assignedElements({ flatten: true })
    ];
    prevSlotted.forEach(
      (node) => traverseForMediaStateReceivers(node, registerMediaStateReceiver)
    );
  };
  rootNode.addEventListener("slotchange", slotChangeHandler);
  const observer2 = new MutationObserver(mutationCallback);
  observer2.observe(rootNode, {
    childList: true,
    attributes: true,
    subtree: true
  });
  const unsubscribe = () => {
    traverseForMediaStateReceivers(rootNode, unregisterMediaStateReceiver);
    rootNode.removeEventListener("slotchange", slotChangeHandler);
    observer2.disconnect();
    rootNode.removeEventListener(
      MediaUIEvents.REGISTER_MEDIA_STATE_RECEIVER,
      registerMediaStateReceiverHandler
    );
    rootNode.removeEventListener(
      MediaUIEvents.UNREGISTER_MEDIA_STATE_RECEIVER,
      unregisterMediaStateReceiverHandler
    );
  };
  return unsubscribe;
};
if (!GlobalThis.customElements.get("media-controller")) {
  GlobalThis.customElements.define("media-controller", MediaController);
}
var media_controller_default = MediaController;

// ../../node_modules/media-chrome/dist/media-chrome-button.js
var __accessCheck6 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet6 = (obj, member, getter) => {
  __accessCheck6(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd6 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet6 = (obj, member, value, setter) => {
  __accessCheck6(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod4 = (obj, member, method) => {
  __accessCheck6(obj, member, "access private method");
  return method;
};
var _mediaController2;
var _clickListener;
var _positionTooltip;
var _keyupListener;
var _keydownListener;
var _setupTooltip;
var setupTooltip_fn;
var Attributes3 = {
  TOOLTIP_PLACEMENT: "tooltipplacement",
  DISABLED: "disabled",
  NO_TOOLTIP: "notooltip"
};
var template3 = Document2.createElement("template");
template3.innerHTML = /*html*/
`
<style>
  :host {
    position: relative;
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  ${/*
  Only show outline when keyboard focusing.
  https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo
*/
""}
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  ${/*
* hide default focus ring, particularly when using mouse
*/
""}
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  media-tooltip {
    ${/** Make sure unpositioned tooltip doesn't cause page overflow (scroll). */
""}
    max-width: 0;
    overflow-x: clip;
    opacity: 0;
    transition: opacity .3s, max-width 0s 9s;
  }

  :host(:hover) media-tooltip,
  :host(:focus-visible) media-tooltip {
    max-width: 100vw;
    opacity: 1;
    transition: opacity .3s;
  }

  :host([notooltip]) slot[name="tooltip"] {
    display: none;
  }
</style>

<slot name="tooltip">
  <media-tooltip part="tooltip" aria-hidden="true">
    <slot name="tooltip-content"></slot>
  </media-tooltip>
</slot>
`;
var MediaChromeButton = class extends GlobalThis.HTMLElement {
  constructor(options = {}) {
    var _a3;
    super();
    __privateAdd6(this, _setupTooltip);
    __privateAdd6(this, _mediaController2, void 0);
    this.preventClick = false;
    this.tooltipEl = null;
    this.tooltipContent = "";
    __privateAdd6(this, _clickListener, (e) => {
      if (!this.preventClick) {
        this.handleClick(e);
      }
      setTimeout(__privateGet6(this, _positionTooltip), 0);
    });
    __privateAdd6(this, _positionTooltip, () => {
      var _a4, _b2;
      (_b2 = (_a4 = this.tooltipEl) == null ? void 0 : _a4.updateXOffset) == null ? void 0 : _b2.call(_a4);
    });
    __privateAdd6(this, _keyupListener, (e) => {
      const { key } = e;
      if (!this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet6(this, _keyupListener));
        return;
      }
      if (!this.preventClick) {
        this.handleClick(e);
      }
    });
    __privateAdd6(this, _keydownListener, (e) => {
      const { metaKey, altKey, key } = e;
      if (metaKey || altKey || !this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet6(this, _keyupListener));
        return;
      }
      this.addEventListener("keyup", __privateGet6(this, _keyupListener), { once: true });
    });
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      const buttonHTML = template3.content.cloneNode(true);
      this.nativeEl = buttonHTML;
      let slotTemplate17 = options.slotTemplate;
      if (!slotTemplate17) {
        slotTemplate17 = Document2.createElement("template");
        slotTemplate17.innerHTML = `<slot>${options.defaultContent || ""}</slot>`;
      }
      if (options.tooltipContent) {
        buttonHTML.querySelector('slot[name="tooltip-content"]').innerHTML = (_a3 = options.tooltipContent) != null ? _a3 : "";
        this.tooltipContent = options.tooltipContent;
      }
      this.nativeEl.appendChild(slotTemplate17.content.cloneNode(true));
      this.shadowRoot.appendChild(buttonHTML);
    }
    this.tooltipEl = this.shadowRoot.querySelector("media-tooltip");
  }
  static get observedAttributes() {
    return [
      "disabled",
      Attributes3.TOOLTIP_PLACEMENT,
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    ];
  }
  enable() {
    this.addEventListener("click", __privateGet6(this, _clickListener));
    this.addEventListener("keydown", __privateGet6(this, _keydownListener));
    this.tabIndex = 0;
  }
  disable() {
    this.removeEventListener("click", __privateGet6(this, _clickListener));
    this.removeEventListener("keydown", __privateGet6(this, _keydownListener));
    this.removeEventListener("keyup", __privateGet6(this, _keyupListener));
    this.tabIndex = -1;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a3, _b2, _c, _d, _e;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b2 = (_a3 = __privateGet6(this, _mediaController2)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
        __privateSet6(this, _mediaController2, null);
      }
      if (newValue && this.isConnected) {
        __privateSet6(this, _mediaController2, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet6(this, _mediaController2)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    } else if (attrName === "disabled" && newValue !== oldValue) {
      if (newValue == null) {
        this.enable();
      } else {
        this.disable();
      }
    } else if (attrName === Attributes3.TOOLTIP_PLACEMENT && this.tooltipEl && newValue !== oldValue) {
      this.tooltipEl.placement = newValue;
    }
    __privateGet6(this, _positionTooltip).call(this);
  }
  connectedCallback() {
    var _a3, _b2, _c;
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty(
      "display",
      `var(--media-control-display, var(--${this.localName}-display, inline-flex))`
    );
    if (!this.hasAttribute("disabled")) {
      this.enable();
    } else {
      this.disable();
    }
    this.setAttribute("role", "button");
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet6(
        this,
        _mediaController2,
        // @ts-ignore
        (_a3 = this.getRootNode()) == null ? void 0 : _a3.getElementById(mediaControllerId)
      );
      (_c = (_b2 = __privateGet6(this, _mediaController2)) == null ? void 0 : _b2.associateElement) == null ? void 0 : _c.call(_b2, this);
    }
    GlobalThis.customElements.whenDefined("media-tooltip").then(() => __privateMethod4(this, _setupTooltip, setupTooltip_fn).call(this));
  }
  disconnectedCallback() {
    var _a3, _b2;
    this.disable();
    (_b2 = (_a3 = __privateGet6(this, _mediaController2)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
    __privateSet6(this, _mediaController2, null);
    this.removeEventListener("mouseenter", __privateGet6(this, _positionTooltip));
    this.removeEventListener("focus", __privateGet6(this, _positionTooltip));
    this.removeEventListener("click", __privateGet6(this, _clickListener));
  }
  get keysUsed() {
    return ["Enter", " "];
  }
  /**
   * Get or set tooltip placement
   */
  get tooltipPlacement() {
    return getStringAttr(this, Attributes3.TOOLTIP_PLACEMENT);
  }
  set tooltipPlacement(value) {
    setStringAttr(this, Attributes3.TOOLTIP_PLACEMENT, value);
  }
  get mediaController() {
    return getStringAttr(this, MediaStateReceiverAttributes.MEDIA_CONTROLLER);
  }
  set mediaController(value) {
    setStringAttr(this, MediaStateReceiverAttributes.MEDIA_CONTROLLER, value);
  }
  get disabled() {
    return getBooleanAttr(this, Attributes3.DISABLED);
  }
  set disabled(value) {
    setBooleanAttr(this, Attributes3.DISABLED, value);
  }
  get noTooltip() {
    return getBooleanAttr(this, Attributes3.NO_TOOLTIP);
  }
  set noTooltip(value) {
    setBooleanAttr(this, Attributes3.NO_TOOLTIP, value);
  }
  /**
   * @abstract
   * @argument {Event} e
   */
  handleClick(e) {
  }
  // eslint-disable-line
};
_mediaController2 = /* @__PURE__ */ new WeakMap();
_clickListener = /* @__PURE__ */ new WeakMap();
_positionTooltip = /* @__PURE__ */ new WeakMap();
_keyupListener = /* @__PURE__ */ new WeakMap();
_keydownListener = /* @__PURE__ */ new WeakMap();
_setupTooltip = /* @__PURE__ */ new WeakSet();
setupTooltip_fn = function() {
  this.addEventListener("mouseenter", __privateGet6(this, _positionTooltip));
  this.addEventListener("focus", __privateGet6(this, _positionTooltip));
  this.addEventListener("click", __privateGet6(this, _clickListener));
  const initialPlacement = this.tooltipPlacement;
  if (initialPlacement && this.tooltipEl) {
    this.tooltipEl.placement = initialPlacement;
  }
};
if (!GlobalThis.customElements.get("media-chrome-button")) {
  GlobalThis.customElements.define("media-chrome-button", MediaChromeButton);
}

// ../../node_modules/media-chrome/dist/media-airplay-button.js
var airplayIcon = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;
var slotTemplate = Document2.createElement("template");
slotTemplate.innerHTML = /*html*/
`
  <style>
    :host([${MediaUIAttributes.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    ${/* Double negative, but safer if display doesn't equal 'block' */
""}
    :host(:not([${MediaUIAttributes.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${MediaUIAttributes.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
    :host(:not([${MediaUIAttributes.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${airplayIcon}</slot>
    <slot name="exit">${airplayIcon}</slot>
  </slot>
`;
var tooltipContent = (
  /*html*/
  `
  <slot name="tooltip-enter">${t("start airplay")}</slot>
  <slot name="tooltip-exit">${t("stop airplay")}</slot>
`
);
var updateAriaLabel = (el) => {
  const label = el.mediaIsAirplaying ? t("stop airplay") : t("start airplay");
  el.setAttribute("aria-label", label);
};
var MediaAirplayButton = class extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_IS_AIRPLAYING,
      MediaUIAttributes.MEDIA_AIRPLAY_UNAVAILABLE
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate, tooltipContent, ...options });
  }
  connectedCallback() {
    super.connectedCallback();
    updateAriaLabel(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_IS_AIRPLAYING) {
      updateAriaLabel(this);
    }
  }
  /**
   * Are we currently airplaying
   */
  get mediaIsAirplaying() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_IS_AIRPLAYING);
  }
  set mediaIsAirplaying(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_IS_AIRPLAYING, value);
  }
  /**
   * Airplay unavailability state
   */
  get mediaAirplayUnavailable() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_AIRPLAY_UNAVAILABLE);
  }
  set mediaAirplayUnavailable(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_AIRPLAY_UNAVAILABLE, value);
  }
  handleClick() {
    const evt = new GlobalThis.CustomEvent(
      MediaUIEvents.MEDIA_AIRPLAY_REQUEST,
      {
        composed: true,
        bubbles: true
      }
    );
    this.dispatchEvent(evt);
  }
};
if (!GlobalThis.customElements.get("media-airplay-button")) {
  GlobalThis.customElements.define("media-airplay-button", MediaAirplayButton);
}

// ../../node_modules/media-chrome/dist/media-captions-button.js
var ccIconOn = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`;
var ccIconOff = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;
var slotTemplate2 = Document2.createElement("template");
slotTemplate2.innerHTML = /*html*/
`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    ${/* Double negative, but safer if display doesn't equal 'block' */
""}
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-checked="true"]) slot[name=tooltip-enable],
    :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${ccIconOn}</slot>
    <slot name="off">${ccIconOff}</slot>
  </slot>
`;
var tooltipContent2 = (
  /*html*/
  `
  <slot name="tooltip-enable">${t("Enable captions")}</slot>
  <slot name="tooltip-disable">${t("Disable captions")}</slot>
`
);
var updateAriaChecked = (el) => {
  el.setAttribute("aria-checked", areSubsOn(el).toString());
};
var MediaCaptionsButton = class extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_SUBTITLES_LIST,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate2, tooltipContent: tooltipContent2, ...options });
    this._captionsReady = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "switch");
    this.setAttribute("aria-label", t("closed captions"));
    updateAriaChecked(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_SUBTITLES_SHOWING) {
      updateAriaChecked(this);
    }
  }
  /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */
  get mediaSubtitlesList() {
    return getSubtitlesListAttr(this, MediaUIAttributes.MEDIA_SUBTITLES_LIST);
  }
  set mediaSubtitlesList(list) {
    setSubtitlesListAttr(this, MediaUIAttributes.MEDIA_SUBTITLES_LIST, list);
  }
  /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */
  get mediaSubtitlesShowing() {
    return getSubtitlesListAttr(
      this,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    );
  }
  set mediaSubtitlesShowing(list) {
    setSubtitlesListAttr(this, MediaUIAttributes.MEDIA_SUBTITLES_SHOWING, list);
  }
  handleClick() {
    this.dispatchEvent(
      new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_TOGGLE_SUBTITLES_REQUEST, {
        composed: true,
        bubbles: true
      })
    );
  }
};
var getSubtitlesListAttr = (el, attrName) => {
  const attrVal = el.getAttribute(attrName);
  return attrVal ? parseTextTracksStr(attrVal) : [];
};
var setSubtitlesListAttr = (el, attrName, list) => {
  if (!(list == null ? void 0 : list.length)) {
    el.removeAttribute(attrName);
    return;
  }
  const newValStr = stringifyTextTrackList(list);
  const oldVal = el.getAttribute(attrName);
  if (oldVal === newValStr)
    return;
  el.setAttribute(attrName, newValStr);
};
if (!GlobalThis.customElements.get("media-captions-button")) {
  GlobalThis.customElements.define(
    "media-captions-button",
    MediaCaptionsButton
  );
}

// ../../node_modules/media-chrome/dist/media-cast-button.js
var enterIcon = `<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>`;
var exitIcon = `<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>`;
var slotTemplate3 = Document2.createElement("template");
slotTemplate3.innerHTML = /*html*/
`
  <style>
  :host([${MediaUIAttributes.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  ${/* Double negative, but safer if display doesn't equal 'block' */
""}
  :host(:not([${MediaUIAttributes.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${MediaUIAttributes.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
    :host(:not([${MediaUIAttributes.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${enterIcon}</slot>
    <slot name="exit">${exitIcon}</slot>
  </slot>
`;
var tooltipContent3 = (
  /*html*/
  `
  <slot name="tooltip-enter">${t("Start casting")}</slot>
  <slot name="tooltip-exit">${t("Stop casting")}</slot>
`
);
var updateAriaLabel2 = (el) => {
  const label = el.mediaIsCasting ? t("stop casting") : t("start casting");
  el.setAttribute("aria-label", label);
};
var MediaCastButton = class extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_IS_CASTING,
      MediaUIAttributes.MEDIA_CAST_UNAVAILABLE
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate3, tooltipContent: tooltipContent3, ...options });
  }
  connectedCallback() {
    super.connectedCallback();
    updateAriaLabel2(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_IS_CASTING) {
      updateAriaLabel2(this);
    }
  }
  /**
   * @type {boolean} Are we currently casting
   */
  get mediaIsCasting() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_IS_CASTING);
  }
  set mediaIsCasting(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_IS_CASTING, value);
  }
  /**
   * @type {string | undefined} Cast unavailability state
   */
  get mediaCastUnavailable() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_CAST_UNAVAILABLE);
  }
  set mediaCastUnavailable(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_CAST_UNAVAILABLE, value);
  }
  handleClick() {
    const eventName = this.mediaIsCasting ? MediaUIEvents.MEDIA_EXIT_CAST_REQUEST : MediaUIEvents.MEDIA_ENTER_CAST_REQUEST;
    this.dispatchEvent(
      new GlobalThis.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
};
if (!GlobalThis.customElements.get("media-cast-button")) {
  GlobalThis.customElements.define("media-cast-button", MediaCastButton);
}

// ../../node_modules/media-chrome/dist/media-chrome-dialog.js
var __accessCheck7 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet7 = (obj, member, getter) => {
  __accessCheck7(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd7 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet7 = (obj, member, value, setter) => {
  __accessCheck7(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod5 = (obj, member, method) => {
  __accessCheck7(obj, member, "access private method");
  return method;
};
var _isInit;
var _previouslyFocused;
var _invokerElement;
var _init;
var init_fn;
var _handleOpen;
var handleOpen_fn;
var _handleClosed;
var handleClosed_fn;
var _handleInvoke;
var handleInvoke_fn;
var _handleFocusOut;
var handleFocusOut_fn;
var _handleKeyDown;
var handleKeyDown_fn;
function getTemplateHTML(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        ${/** The hide transition is defined below after a short delay. */
    ""}
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(_attrs)}
  `
  );
}
function getSlotTemplateHTML(_attrs) {
  return (
    /*html*/
    `
    <slot id="content"></slot>
  `
  );
}
var Attributes4 = {
  OPEN: "open",
  ANCHOR: "anchor"
};
var MediaChromeDialog = class extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd7(this, _init);
    __privateAdd7(this, _handleOpen);
    __privateAdd7(this, _handleClosed);
    __privateAdd7(this, _handleInvoke);
    __privateAdd7(this, _handleFocusOut);
    __privateAdd7(this, _handleKeyDown);
    __privateAdd7(this, _isInit, false);
    __privateAdd7(this, _previouslyFocused, null);
    __privateAdd7(this, _invokerElement, null);
    this.addEventListener("invoke", this);
    this.addEventListener("focusout", this);
    this.addEventListener("keydown", this);
  }
  static get observedAttributes() {
    return [Attributes4.OPEN, Attributes4.ANCHOR];
  }
  get open() {
    return getBooleanAttr(this, Attributes4.OPEN);
  }
  set open(value) {
    setBooleanAttr(this, Attributes4.OPEN, value);
  }
  handleEvent(event) {
    switch (event.type) {
      case "invoke":
        __privateMethod5(this, _handleInvoke, handleInvoke_fn).call(this, event);
        break;
      case "focusout":
        __privateMethod5(this, _handleFocusOut, handleFocusOut_fn).call(this, event);
        break;
      case "keydown":
        __privateMethod5(this, _handleKeyDown, handleKeyDown_fn).call(this, event);
        break;
    }
  }
  connectedCallback() {
    __privateMethod5(this, _init, init_fn).call(this);
    if (!this.role) {
      this.role = "dialog";
    }
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    __privateMethod5(this, _init, init_fn).call(this);
    if (attrName === Attributes4.OPEN && newValue !== oldValue) {
      if (this.open) {
        __privateMethod5(this, _handleOpen, handleOpen_fn).call(this);
      } else {
        __privateMethod5(this, _handleClosed, handleClosed_fn).call(this);
      }
    }
  }
  focus() {
    __privateSet7(this, _previouslyFocused, getActiveElement());
    const focusCancelled = !this.dispatchEvent(new Event("focus", { composed: true, cancelable: true }));
    const focusInCancelled = !this.dispatchEvent(new Event("focusin", { composed: true, bubbles: true, cancelable: true }));
    if (focusCancelled || focusInCancelled)
      return;
    const focusable = this.querySelector(
      '[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]'
    );
    focusable == null ? void 0 : focusable.focus();
  }
  get keysUsed() {
    return ["Escape", "Tab"];
  }
};
_isInit = /* @__PURE__ */ new WeakMap();
_previouslyFocused = /* @__PURE__ */ new WeakMap();
_invokerElement = /* @__PURE__ */ new WeakMap();
_init = /* @__PURE__ */ new WeakSet();
init_fn = function() {
  if (__privateGet7(this, _isInit))
    return;
  __privateSet7(this, _isInit, true);
  if (!this.shadowRoot) {
    this.attachShadow({ mode: "open" });
    const attrs = namedNodeMapToObject(this.attributes);
    this.shadowRoot.innerHTML = /*html*/
    `
        ${this.constructor.getTemplateHTML(attrs)}
      `;
    queueMicrotask(() => {
      const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
      style.setProperty(
        "transition",
        `display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in`
      );
    });
  }
};
_handleOpen = /* @__PURE__ */ new WeakSet();
handleOpen_fn = function() {
  var _a3;
  (_a3 = __privateGet7(this, _invokerElement)) == null ? void 0 : _a3.setAttribute("aria-expanded", "true");
  this.dispatchEvent(new Event("open", { composed: true, bubbles: true }));
  this.addEventListener("transitionend", () => this.focus(), { once: true });
};
_handleClosed = /* @__PURE__ */ new WeakSet();
handleClosed_fn = function() {
  var _a3;
  (_a3 = __privateGet7(this, _invokerElement)) == null ? void 0 : _a3.setAttribute("aria-expanded", "false");
  this.dispatchEvent(new Event("close", { composed: true, bubbles: true }));
};
_handleInvoke = /* @__PURE__ */ new WeakSet();
handleInvoke_fn = function(event) {
  __privateSet7(this, _invokerElement, event.relatedTarget);
  if (!containsComposedNode(this, event.relatedTarget)) {
    this.open = !this.open;
  }
};
_handleFocusOut = /* @__PURE__ */ new WeakSet();
handleFocusOut_fn = function(event) {
  var _a3;
  if (!containsComposedNode(this, event.relatedTarget)) {
    (_a3 = __privateGet7(this, _previouslyFocused)) == null ? void 0 : _a3.focus();
    if (__privateGet7(this, _invokerElement) && __privateGet7(this, _invokerElement) !== event.relatedTarget && this.open) {
      this.open = false;
    }
  }
};
_handleKeyDown = /* @__PURE__ */ new WeakSet();
handleKeyDown_fn = function(event) {
  var _a3, _b2, _c, _d, _e;
  const { key, ctrlKey, altKey, metaKey } = event;
  if (ctrlKey || altKey || metaKey) {
    return;
  }
  if (!this.keysUsed.includes(key)) {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  if (key === "Tab") {
    if (event.shiftKey) {
      (_b2 = (_a3 = this.previousElementSibling) == null ? void 0 : _a3.focus) == null ? void 0 : _b2.call(_a3);
    } else {
      (_d = (_c = this.nextElementSibling) == null ? void 0 : _c.focus) == null ? void 0 : _d.call(_c);
    }
    this.blur();
  } else if (key === "Escape") {
    (_e = __privateGet7(this, _previouslyFocused)) == null ? void 0 : _e.focus();
    this.open = false;
  }
};
MediaChromeDialog.getTemplateHTML = getTemplateHTML;
MediaChromeDialog.getSlotTemplateHTML = getSlotTemplateHTML;
if (!GlobalThis.customElements.get("media-chrome-dialog")) {
  GlobalThis.customElements.define("media-chrome-dialog", MediaChromeDialog);
}

// ../../node_modules/media-chrome/dist/media-chrome-range.js
var __accessCheck8 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet8 = (obj, member, getter) => {
  __accessCheck8(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd8 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet8 = (obj, member, value, setter) => {
  __accessCheck8(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod6 = (obj, member, method) => {
  __accessCheck8(obj, member, "access private method");
  return method;
};
var _mediaController3;
var _isInputTarget;
var _startpoint;
var _endpoint;
var _cssRules;
var _segments;
var _onFocusIn;
var _onFocusOut;
var _updateComputedStyles;
var _updateActiveSegment;
var updateActiveSegment_fn;
var _enableUserEvents;
var enableUserEvents_fn;
var _disableUserEvents;
var disableUserEvents_fn;
var _handlePointerDown;
var handlePointerDown_fn;
var _handlePointerEnter;
var handlePointerEnter_fn;
var _handlePointerUp2;
var handlePointerUp_fn2;
var _handlePointerLeave;
var handlePointerLeave_fn;
var _handlePointerMove2;
var handlePointerMove_fn2;
var template4 = Document2.createElement("template");
template4.innerHTML = /*html*/
`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      ${/* Don't horizontal align w/ justify-content! #container can go negative on the x-axis w/ small width. */
""}
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; ${/* Prevent scrolling when dragging on mobile. */
""}
    }

    ${/* Reset before `outline` on track could be set by a CSS var */
""}
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      ${/* Not using the CSS `padding` prop makes it easier for slide open volume ranges so the width can be zero. */
""}
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      ${/* The input range acts as a hover and hit zone for input events. */
""}
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; ${/* Hides the slider so that custom slider can be made */
""}
      -webkit-tap-highlight-color: transparent;
      background: transparent; ${/* Otherwise white in Chrome */
""}
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    ${/* Special styling for WebKit/Blink */
""}
    ${/* Make thumb width/height small so it has no effect on range click position. */
""}
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    ${/* The thumb is not positioned relative to the track in Firefox */
""}
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      ${/* Required for Safari to stop glitching track height on hover */
""}
      will-change: transform;
    }

    #track {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      border-radius: var(--media-range-track-border-radius, 1px);
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #progress,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb,
    ::slotted([slot=thumb]) {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      translate: -50%;
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    #thumb {
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      border: var(--media-range-thumb-border, none);
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance">
      <div id="track" part="track">
        <div id="pointer"></div>
        <div id="progress" part="progress"></div>
      </div>
      <slot name="thumb">
        <div id="thumb" part="thumb"></div>
      </slot>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;
var MediaChromeRange = class extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd8(this, _updateActiveSegment);
    __privateAdd8(this, _enableUserEvents);
    __privateAdd8(this, _disableUserEvents);
    __privateAdd8(this, _handlePointerDown);
    __privateAdd8(this, _handlePointerEnter);
    __privateAdd8(this, _handlePointerUp2);
    __privateAdd8(this, _handlePointerLeave);
    __privateAdd8(this, _handlePointerMove2);
    __privateAdd8(this, _mediaController3, void 0);
    __privateAdd8(this, _isInputTarget, void 0);
    __privateAdd8(this, _startpoint, void 0);
    __privateAdd8(this, _endpoint, void 0);
    __privateAdd8(this, _cssRules, {});
    __privateAdd8(this, _segments, []);
    __privateAdd8(this, _onFocusIn, () => {
      if (this.range.matches(":focus-visible")) {
        const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
        style.setProperty(
          "--_focus-visible-box-shadow",
          "var(--_focus-box-shadow)"
        );
      }
    });
    __privateAdd8(this, _onFocusOut, () => {
      const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
      style.removeProperty("--_focus-visible-box-shadow");
    });
    __privateAdd8(this, _updateComputedStyles, () => {
      const clipping = this.shadowRoot.querySelector("#segments-clipping");
      if (clipping)
        clipping.parentNode.append(clipping);
    });
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template4.content.cloneNode(true));
    }
    this.container = this.shadowRoot.querySelector("#container");
    __privateSet8(this, _startpoint, this.shadowRoot.querySelector("#startpoint"));
    __privateSet8(this, _endpoint, this.shadowRoot.querySelector("#endpoint"));
    this.range = this.shadowRoot.querySelector("#range");
    this.appearance = this.shadowRoot.querySelector("#appearance");
  }
  static get observedAttributes() {
    return [
      "disabled",
      "aria-disabled",
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a3, _b2, _c, _d, _e;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b2 = (_a3 = __privateGet8(this, _mediaController3)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
        __privateSet8(this, _mediaController3, null);
      }
      if (newValue && this.isConnected) {
        __privateSet8(this, _mediaController3, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet8(this, _mediaController3)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    } else if (attrName === "disabled" || attrName === "aria-disabled" && oldValue !== newValue) {
      if (newValue == null) {
        this.range.removeAttribute(attrName);
        __privateMethod6(this, _enableUserEvents, enableUserEvents_fn).call(this);
      } else {
        this.range.setAttribute(attrName, newValue);
        __privateMethod6(this, _disableUserEvents, disableUserEvents_fn).call(this);
      }
    }
  }
  connectedCallback() {
    var _a3, _b2, _c;
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty(
      "display",
      `var(--media-control-display, var(--${this.localName}-display, inline-flex))`
    );
    __privateGet8(this, _cssRules).pointer = getOrInsertCSSRule(this.shadowRoot, "#pointer");
    __privateGet8(this, _cssRules).progress = getOrInsertCSSRule(this.shadowRoot, "#progress");
    __privateGet8(this, _cssRules).thumb = getOrInsertCSSRule(this.shadowRoot, '#thumb, ::slotted([slot="thumb"])');
    __privateGet8(this, _cssRules).activeSegment = getOrInsertCSSRule(
      this.shadowRoot,
      "#segments-clipping rect:nth-child(0)"
    );
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet8(this, _mediaController3, (_a3 = this.getRootNode()) == null ? void 0 : _a3.getElementById(
        mediaControllerId
      ));
      (_c = (_b2 = __privateGet8(this, _mediaController3)) == null ? void 0 : _b2.associateElement) == null ? void 0 : _c.call(_b2, this);
    }
    this.updateBar();
    this.shadowRoot.addEventListener("focusin", __privateGet8(this, _onFocusIn));
    this.shadowRoot.addEventListener("focusout", __privateGet8(this, _onFocusOut));
    __privateMethod6(this, _enableUserEvents, enableUserEvents_fn).call(this);
    observeResize(this.container, __privateGet8(this, _updateComputedStyles));
  }
  disconnectedCallback() {
    var _a3, _b2;
    __privateMethod6(this, _disableUserEvents, disableUserEvents_fn).call(this);
    (_b2 = (_a3 = __privateGet8(this, _mediaController3)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
    __privateSet8(this, _mediaController3, null);
    this.shadowRoot.removeEventListener("focusin", __privateGet8(this, _onFocusIn));
    this.shadowRoot.removeEventListener("focusout", __privateGet8(this, _onFocusOut));
    unobserveResize(this.container, __privateGet8(this, _updateComputedStyles));
  }
  updatePointerBar(evt) {
    var _a3;
    (_a3 = __privateGet8(this, _cssRules).pointer) == null ? void 0 : _a3.style.setProperty(
      "width",
      `${this.getPointerRatio(evt) * 100}%`
    );
  }
  updateBar() {
    var _a3, _b2;
    const rangePercent = this.range.valueAsNumber * 100;
    (_a3 = __privateGet8(this, _cssRules).progress) == null ? void 0 : _a3.style.setProperty("width", `${rangePercent}%`);
    (_b2 = __privateGet8(this, _cssRules).thumb) == null ? void 0 : _b2.style.setProperty("left", `${rangePercent}%`);
  }
  updateSegments(segments) {
    const clipping = this.shadowRoot.querySelector("#segments-clipping");
    clipping.textContent = "";
    this.container.classList.toggle("segments", !!(segments == null ? void 0 : segments.length));
    if (!(segments == null ? void 0 : segments.length))
      return;
    const normalized = [
      .../* @__PURE__ */ new Set([
        +this.range.min,
        ...segments.flatMap((s) => [s.start, s.end]),
        +this.range.max
      ])
    ];
    __privateSet8(this, _segments, [...normalized]);
    const lastMarker = normalized.pop();
    for (const [i, marker] of normalized.entries()) {
      const [isFirst, isLast] = [i === 0, i === normalized.length - 1];
      const x = isFirst ? "calc(var(--segments-gap) / -1)" : `${marker * 100}%`;
      const x2 = isLast ? lastMarker : normalized[i + 1];
      const width = `calc(${(x2 - marker) * 100}%${isFirst || isLast ? "" : ` - var(--segments-gap)`})`;
      const segmentEl = Document2.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      const cssRule = getOrInsertCSSRule(
        this.shadowRoot,
        `#segments-clipping rect:nth-child(${i + 1})`
      );
      cssRule.style.setProperty("x", x);
      cssRule.style.setProperty("width", width);
      clipping.append(segmentEl);
    }
  }
  getPointerRatio(evt) {
    const pointerRatio = getPointProgressOnLine(
      evt.clientX,
      evt.clientY,
      __privateGet8(this, _startpoint).getBoundingClientRect(),
      __privateGet8(this, _endpoint).getBoundingClientRect()
    );
    return Math.max(0, Math.min(1, pointerRatio));
  }
  get dragging() {
    return this.hasAttribute("dragging");
  }
  handleEvent(evt) {
    switch (evt.type) {
      case "pointermove":
        __privateMethod6(this, _handlePointerMove2, handlePointerMove_fn2).call(this, evt);
        break;
      case "input":
        this.updateBar();
        break;
      case "pointerenter":
        __privateMethod6(this, _handlePointerEnter, handlePointerEnter_fn).call(this, evt);
        break;
      case "pointerdown":
        __privateMethod6(this, _handlePointerDown, handlePointerDown_fn).call(this, evt);
        break;
      case "pointerup":
        __privateMethod6(this, _handlePointerUp2, handlePointerUp_fn2).call(this);
        break;
      case "pointerleave":
        __privateMethod6(this, _handlePointerLeave, handlePointerLeave_fn).call(this);
        break;
    }
  }
  get keysUsed() {
    return ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
  }
};
_mediaController3 = /* @__PURE__ */ new WeakMap();
_isInputTarget = /* @__PURE__ */ new WeakMap();
_startpoint = /* @__PURE__ */ new WeakMap();
_endpoint = /* @__PURE__ */ new WeakMap();
_cssRules = /* @__PURE__ */ new WeakMap();
_segments = /* @__PURE__ */ new WeakMap();
_onFocusIn = /* @__PURE__ */ new WeakMap();
_onFocusOut = /* @__PURE__ */ new WeakMap();
_updateComputedStyles = /* @__PURE__ */ new WeakMap();
_updateActiveSegment = /* @__PURE__ */ new WeakSet();
updateActiveSegment_fn = function(evt) {
  const rule = __privateGet8(this, _cssRules).activeSegment;
  if (!rule)
    return;
  const pointerRatio = this.getPointerRatio(evt);
  const segmentIndex = __privateGet8(this, _segments).findIndex((start, i, arr) => {
    const end = arr[i + 1];
    return end != null && pointerRatio >= start && pointerRatio <= end;
  });
  const selectorText = `#segments-clipping rect:nth-child(${segmentIndex + 1})`;
  if (rule.selectorText != selectorText || !rule.style.transform) {
    rule.selectorText = selectorText;
    rule.style.setProperty(
      "transform",
      "var(--media-range-segment-hover-transform, scaleY(2))"
    );
  }
};
_enableUserEvents = /* @__PURE__ */ new WeakSet();
enableUserEvents_fn = function() {
  if (this.hasAttribute("disabled"))
    return;
  this.addEventListener("input", this);
  this.addEventListener("pointerdown", this);
  this.addEventListener("pointerenter", this);
};
_disableUserEvents = /* @__PURE__ */ new WeakSet();
disableUserEvents_fn = function() {
  var _a3, _b2;
  this.removeEventListener("input", this);
  this.removeEventListener("pointerdown", this);
  this.removeEventListener("pointerenter", this);
  (_a3 = GlobalThis.window) == null ? void 0 : _a3.removeEventListener("pointerup", this);
  (_b2 = GlobalThis.window) == null ? void 0 : _b2.removeEventListener("pointermove", this);
};
_handlePointerDown = /* @__PURE__ */ new WeakSet();
handlePointerDown_fn = function(evt) {
  var _a3;
  __privateSet8(this, _isInputTarget, evt.composedPath().includes(this.range));
  (_a3 = GlobalThis.window) == null ? void 0 : _a3.addEventListener("pointerup", this);
};
_handlePointerEnter = /* @__PURE__ */ new WeakSet();
handlePointerEnter_fn = function(evt) {
  var _a3;
  if (evt.pointerType !== "mouse")
    __privateMethod6(this, _handlePointerDown, handlePointerDown_fn).call(this, evt);
  this.addEventListener("pointerleave", this);
  (_a3 = GlobalThis.window) == null ? void 0 : _a3.addEventListener("pointermove", this);
};
_handlePointerUp2 = /* @__PURE__ */ new WeakSet();
handlePointerUp_fn2 = function() {
  var _a3;
  (_a3 = GlobalThis.window) == null ? void 0 : _a3.removeEventListener("pointerup", this);
  this.toggleAttribute("dragging", false);
  this.range.disabled = this.hasAttribute("disabled");
};
_handlePointerLeave = /* @__PURE__ */ new WeakSet();
handlePointerLeave_fn = function() {
  var _a3, _b2;
  this.removeEventListener("pointerleave", this);
  (_a3 = GlobalThis.window) == null ? void 0 : _a3.removeEventListener("pointermove", this);
  this.toggleAttribute("dragging", false);
  this.range.disabled = this.hasAttribute("disabled");
  (_b2 = __privateGet8(this, _cssRules).activeSegment) == null ? void 0 : _b2.style.removeProperty("transform");
};
_handlePointerMove2 = /* @__PURE__ */ new WeakSet();
handlePointerMove_fn2 = function(evt) {
  this.toggleAttribute(
    "dragging",
    evt.buttons === 1 || evt.pointerType !== "mouse"
  );
  this.updatePointerBar(evt);
  __privateMethod6(this, _updateActiveSegment, updateActiveSegment_fn).call(this, evt);
  if (this.dragging && (evt.pointerType !== "mouse" || !__privateGet8(this, _isInputTarget))) {
    this.range.disabled = true;
    this.range.valueAsNumber = this.getPointerRatio(evt);
    this.range.dispatchEvent(
      new Event("input", { bubbles: true, composed: true })
    );
  }
};
if (!GlobalThis.customElements.get("media-chrome-range")) {
  GlobalThis.customElements.define("media-chrome-range", MediaChromeRange);
}

// ../../node_modules/media-chrome/dist/media-control-bar.js
var __accessCheck9 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet9 = (obj, member, getter) => {
  __accessCheck9(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd9 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet9 = (obj, member, value, setter) => {
  __accessCheck9(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _mediaController4;
var template5 = Document2.createElement("template");
template5.innerHTML = /*html*/
`
  <style>
    :host {
      ${/* Need position to display above video for some reason */
""}
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    ::slotted([role="menu"]) {
      position: absolute;
    }
  </style>

  <slot></slot>
`;
var MediaControlBar = class extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd9(this, _mediaController4, void 0);
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template5.content.cloneNode(true));
    }
  }
  static get observedAttributes() {
    return [MediaStateReceiverAttributes.MEDIA_CONTROLLER];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a3, _b2, _c, _d, _e;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b2 = (_a3 = __privateGet9(this, _mediaController4)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
        __privateSet9(this, _mediaController4, null);
      }
      if (newValue && this.isConnected) {
        __privateSet9(this, _mediaController4, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet9(this, _mediaController4)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    }
  }
  connectedCallback() {
    var _a3, _b2, _c;
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet9(this, _mediaController4, (_a3 = this.getRootNode()) == null ? void 0 : _a3.getElementById(
        mediaControllerId
      ));
      (_c = (_b2 = __privateGet9(this, _mediaController4)) == null ? void 0 : _b2.associateElement) == null ? void 0 : _c.call(_b2, this);
    }
  }
  disconnectedCallback() {
    var _a3, _b2;
    (_b2 = (_a3 = __privateGet9(this, _mediaController4)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
    __privateSet9(this, _mediaController4, null);
  }
};
_mediaController4 = /* @__PURE__ */ new WeakMap();
if (!GlobalThis.customElements.get("media-control-bar")) {
  GlobalThis.customElements.define("media-control-bar", MediaControlBar);
}

// ../../node_modules/media-chrome/dist/media-text-display.js
var __accessCheck10 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet10 = (obj, member, getter) => {
  __accessCheck10(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd10 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet10 = (obj, member, value, setter) => {
  __accessCheck10(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _mediaController5;
var template6 = Document2.createElement("template");
template6.innerHTML = /*html*/
`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    ${/*
  Only show outline when keyboard focusing.
  https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo
*/
""}
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    ${/*
* hide default focus ring, particularly when using mouse
*/
""}
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;
var MediaTextDisplay = class extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd10(this, _mediaController5, void 0);
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template6.content.cloneNode(true));
    }
  }
  static get observedAttributes() {
    return [MediaStateReceiverAttributes.MEDIA_CONTROLLER];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a3, _b2, _c, _d, _e;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b2 = (_a3 = __privateGet10(this, _mediaController5)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
        __privateSet10(this, _mediaController5, null);
      }
      if (newValue && this.isConnected) {
        __privateSet10(this, _mediaController5, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet10(this, _mediaController5)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    }
  }
  connectedCallback() {
    var _a3, _b2, _c;
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty(
      "display",
      `var(--media-control-display, var(--${this.localName}-display, inline-flex))`
    );
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet10(this, _mediaController5, (_a3 = this.getRootNode()) == null ? void 0 : _a3.getElementById(
        mediaControllerId
      ));
      (_c = (_b2 = __privateGet10(this, _mediaController5)) == null ? void 0 : _b2.associateElement) == null ? void 0 : _c.call(_b2, this);
    }
  }
  disconnectedCallback() {
    var _a3, _b2;
    (_b2 = (_a3 = __privateGet10(this, _mediaController5)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
    __privateSet10(this, _mediaController5, null);
  }
};
_mediaController5 = /* @__PURE__ */ new WeakMap();
if (!GlobalThis.customElements.get("media-text-display")) {
  GlobalThis.customElements.define("media-text-display", MediaTextDisplay);
}

// ../../node_modules/media-chrome/dist/media-duration-display.js
var __accessCheck11 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet11 = (obj, member, getter) => {
  __accessCheck11(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd11 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet11 = (obj, member, value, setter) => {
  __accessCheck11(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _slot;
var MediaDurationDisplay = class extends MediaTextDisplay {
  constructor() {
    super();
    __privateAdd11(this, _slot, void 0);
    __privateSet11(this, _slot, this.shadowRoot.querySelector("slot"));
    __privateGet11(this, _slot).textContent = formatTime(0);
  }
  static get observedAttributes() {
    return [...super.observedAttributes, MediaUIAttributes.MEDIA_DURATION];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_DURATION) {
      __privateGet11(this, _slot).textContent = formatTime(+newValue);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  /**
   * @type {number | undefined} In seconds
   */
  get mediaDuration() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_DURATION);
  }
  set mediaDuration(time) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_DURATION, time);
  }
};
_slot = /* @__PURE__ */ new WeakMap();
if (!GlobalThis.customElements.get("media-duration-display")) {
  GlobalThis.customElements.define(
    "media-duration-display",
    MediaDurationDisplay
  );
}

// ../../node_modules/media-chrome/dist/labels/labels.js
var defaultErrorTitles = {
  2: t("Network Error"),
  3: t("Decode Error"),
  4: t("Source Not Supported"),
  5: t("Encryption Error")
};
var defaultErrorMessages = {
  2: t("A network error caused the media download to fail."),
  3: t(
    "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."
  ),
  4: t(
    "An unsupported error occurred. The server or network failed, or your browser does not support this format."
  ),
  5: t("The media is encrypted and there are no keys to decrypt it.")
};
var formatError = (error2) => {
  var _a3, _b2;
  if (error2.code === 1)
    return null;
  return {
    title: (_a3 = defaultErrorTitles[error2.code]) != null ? _a3 : `Error ${error2.code}`,
    message: (_b2 = defaultErrorMessages[error2.code]) != null ? _b2 : error2.message
  };
};

// ../../node_modules/media-chrome/dist/media-error-dialog.js
var __accessCheck12 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet12 = (obj, member, getter) => {
  __accessCheck12(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd12 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet12 = (obj, member, value, setter) => {
  __accessCheck12(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _mediaError;
function getSlotTemplateHTML2(attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${attrs.mediaerrorcode}" id="content">
      ${formatErrorMessage({ code: +attrs.mediaerrorcode, message: attrs.mediaerrormessage })}
    </slot>
  `
  );
}
function shouldOpenErrorDialog(error2) {
  return error2.code && formatError(error2) !== null;
}
function formatErrorMessage(error2) {
  var _a3;
  const { title, message } = (_a3 = formatError(error2)) != null ? _a3 : {};
  let html2 = "";
  if (title)
    html2 += `<slot name="error-${error2.code}-title"><h3>${title}</h3></slot>`;
  if (message)
    html2 += `<slot name="error-${error2.code}-message"><p>${message}</p></slot>`;
  return html2;
}
var observedAttributes = [
  MediaUIAttributes.MEDIA_ERROR_CODE,
  MediaUIAttributes.MEDIA_ERROR_MESSAGE
];
var MediaErrorDialog = class extends MediaChromeDialog {
  constructor() {
    super(...arguments);
    __privateAdd12(this, _mediaError, null);
  }
  static get observedAttributes() {
    return [...super.observedAttributes, ...observedAttributes];
  }
  formatErrorMessage(error2) {
    return this.constructor.formatErrorMessage(error2);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a3;
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (!observedAttributes.includes(attrName))
      return;
    const mediaError = (_a3 = this.mediaError) != null ? _a3 : {
      code: this.mediaErrorCode,
      message: this.mediaErrorMessage
    };
    this.open = shouldOpenErrorDialog(mediaError);
    if (this.open) {
      this.shadowRoot.querySelector("slot").name = `error-${this.mediaErrorCode}`;
      this.shadowRoot.querySelector("#content").innerHTML = this.formatErrorMessage(mediaError);
    }
  }
  get mediaError() {
    return __privateGet12(this, _mediaError);
  }
  set mediaError(value) {
    __privateSet12(this, _mediaError, value);
  }
  get mediaErrorCode() {
    return getNumericAttr(this, "mediaerrorcode");
  }
  set mediaErrorCode(value) {
    setNumericAttr(this, "mediaerrorcode", value);
  }
  get mediaErrorMessage() {
    return getStringAttr(this, "mediaerrormessage");
  }
  set mediaErrorMessage(value) {
    setStringAttr(this, "mediaerrormessage", value);
  }
};
_mediaError = /* @__PURE__ */ new WeakMap();
MediaErrorDialog.getSlotTemplateHTML = getSlotTemplateHTML2;
MediaErrorDialog.formatErrorMessage = formatErrorMessage;
if (!GlobalThis.customElements.get("media-error-dialog")) {
  GlobalThis.customElements.define("media-error-dialog", MediaErrorDialog);
}
var media_error_dialog_default = MediaErrorDialog;

// ../../node_modules/media-chrome/dist/media-fullscreen-button.js
var enterFullscreenIcon = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`;
var exitFullscreenIcon = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;
var slotTemplate4 = Document2.createElement("template");
slotTemplate4.innerHTML = /*html*/
`
  <style>
    :host([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    ${/* Double negative, but safer if display doesn't equal 'block' */
""}
    :host(:not([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
    :host(:not([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${enterFullscreenIcon}</slot>
    <slot name="exit">${exitFullscreenIcon}</slot>
  </slot>
`;
var tooltipContent4 = (
  /*html*/
  `
  <slot name="tooltip-enter">${t("Enter fullscreen mode")}</slot>
  <slot name="tooltip-exit">${t("Exit fullscreen mode")}</slot>
`
);
var updateAriaLabel3 = (el) => {
  const label = el.mediaIsFullscreen ? t("exit fullscreen mode") : t("enter fullscreen mode");
  el.setAttribute("aria-label", label);
};
var MediaFullscreenButton = class extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_IS_FULLSCREEN,
      MediaUIAttributes.MEDIA_FULLSCREEN_UNAVAILABLE
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate4, tooltipContent: tooltipContent4, ...options });
  }
  connectedCallback() {
    super.connectedCallback();
    updateAriaLabel3(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_IS_FULLSCREEN) {
      updateAriaLabel3(this);
    }
  }
  /**
   * @type {string | undefined} Fullscreen unavailability state
   */
  get mediaFullscreenUnavailable() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_FULLSCREEN_UNAVAILABLE);
  }
  set mediaFullscreenUnavailable(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_FULLSCREEN_UNAVAILABLE, value);
  }
  /**
   * @type {boolean} Whether fullscreen is available
   */
  get mediaIsFullscreen() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_IS_FULLSCREEN);
  }
  set mediaIsFullscreen(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_IS_FULLSCREEN, value);
  }
  handleClick() {
    const eventName = this.mediaIsFullscreen ? MediaUIEvents.MEDIA_EXIT_FULLSCREEN_REQUEST : MediaUIEvents.MEDIA_ENTER_FULLSCREEN_REQUEST;
    this.dispatchEvent(
      new GlobalThis.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
};
if (!GlobalThis.customElements.get("media-fullscreen-button")) {
  GlobalThis.customElements.define(
    "media-fullscreen-button",
    MediaFullscreenButton
  );
}

// ../../node_modules/media-chrome/dist/media-live-button.js
var { MEDIA_TIME_IS_LIVE, MEDIA_PAUSED } = MediaUIAttributes;
var { MEDIA_SEEK_TO_LIVE_REQUEST, MEDIA_PLAY_REQUEST } = MediaUIEvents;
var indicatorSVG = '<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';
var slotTemplate5 = Document2.createElement("template");
slotTemplate5.innerHTML = /*html*/
`
  <style>
  :host { --media-tooltip-display: none; }
  
  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    ${/* Override styles for icon-only buttons */
""}
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${MEDIA_TIME_IS_LIVE}]:not([${MEDIA_PAUSED}])) slot[name=indicator] > *,
  :host([${MEDIA_TIME_IS_LIVE}]:not([${MEDIA_PAUSED}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${MEDIA_TIME_IS_LIVE}]:not([${MEDIA_PAUSED}])) {
    cursor: not-allowed;
  }

  slot[name=text]{
    text-transform: uppercase;
  }

  </style>

  <slot name="indicator">${indicatorSVG}</slot>
  ${/*
  A new line between spacer and text creates inconsistent spacing
  between slotted items and default slots.
*/
""}
  <slot name="spacer">&nbsp;</slot><slot name="text">${t("live")}</slot>
`;
var updateAriaAttributes = (el) => {
  const isPausedOrNotLive = el.mediaPaused || !el.mediaTimeIsLive;
  const label = isPausedOrNotLive ? t("seek to live") : t("playing live");
  el.setAttribute("aria-label", label);
  isPausedOrNotLive ? el.removeAttribute("aria-disabled") : el.setAttribute("aria-disabled", "true");
};
var MediaLiveButton = class extends MediaChromeButton {
  static get observedAttributes() {
    return [...super.observedAttributes, MEDIA_PAUSED, MEDIA_TIME_IS_LIVE];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate5, ...options });
  }
  connectedCallback() {
    updateAriaAttributes(this);
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    updateAriaAttributes(this);
  }
  /**
   * @type {boolean} Is the media paused
   */
  get mediaPaused() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED);
  }
  set mediaPaused(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED, value);
  }
  /**
   * @type {boolean} Is the media playback currently live
   */
  get mediaTimeIsLive() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_TIME_IS_LIVE);
  }
  set mediaTimeIsLive(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_TIME_IS_LIVE, value);
  }
  handleClick() {
    if (!this.mediaPaused && this.mediaTimeIsLive)
      return;
    this.dispatchEvent(
      new GlobalThis.CustomEvent(MEDIA_SEEK_TO_LIVE_REQUEST, {
        composed: true,
        bubbles: true
      })
    );
    if (this.hasAttribute(MEDIA_PAUSED)) {
      this.dispatchEvent(
        new GlobalThis.CustomEvent(MEDIA_PLAY_REQUEST, {
          composed: true,
          bubbles: true
        })
      );
    }
  }
};
if (!GlobalThis.customElements.get("media-live-button")) {
  GlobalThis.customElements.define("media-live-button", MediaLiveButton);
}

// ../../node_modules/media-chrome/dist/media-loading-indicator.js
var __accessCheck13 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet13 = (obj, member, getter) => {
  __accessCheck13(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd13 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet13 = (obj, member, value, setter) => {
  __accessCheck13(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _mediaController6;
var _delay;
var Attributes5 = {
  LOADING_DELAY: "loadingdelay",
  NO_AUTOHIDE: "noautohide"
};
var DEFAULT_LOADING_DELAY = 500;
var template7 = Document2.createElement("template");
var loadingIndicatorIcon = `
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;
template7.innerHTML = /*html*/
`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${DEFAULT_LOADING_DELAY}ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${MediaUIAttributes.MEDIA_LOADING}]:not([${MediaUIAttributes.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${MediaUIAttributes.MEDIA_LOADING}]:not([${MediaUIAttributes.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${MediaUIAttributes.MEDIA_LOADING}]:not([${MediaUIAttributes.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${loadingIndicatorIcon}</slot>
<div id="status" role="status" aria-live="polite">${t("media loading")}</div>
`;
var MediaLoadingIndicator = class extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd13(this, _mediaController6, void 0);
    __privateAdd13(this, _delay, DEFAULT_LOADING_DELAY);
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      const indicatorHTML = template7.content.cloneNode(true);
      shadow.appendChild(indicatorHTML);
    }
  }
  static get observedAttributes() {
    return [
      MediaStateReceiverAttributes.MEDIA_CONTROLLER,
      MediaUIAttributes.MEDIA_PAUSED,
      MediaUIAttributes.MEDIA_LOADING,
      Attributes5.LOADING_DELAY
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a3, _b2, _c, _d, _e;
    if (attrName === Attributes5.LOADING_DELAY && oldValue !== newValue) {
      this.loadingDelay = Number(newValue);
    } else if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b2 = (_a3 = __privateGet13(this, _mediaController6)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
        __privateSet13(this, _mediaController6, null);
      }
      if (newValue && this.isConnected) {
        __privateSet13(this, _mediaController6, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet13(this, _mediaController6)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    }
  }
  connectedCallback() {
    var _a3, _b2, _c;
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet13(this, _mediaController6, (_a3 = this.getRootNode()) == null ? void 0 : _a3.getElementById(
        mediaControllerId
      ));
      (_c = (_b2 = __privateGet13(this, _mediaController6)) == null ? void 0 : _b2.associateElement) == null ? void 0 : _c.call(_b2, this);
    }
  }
  disconnectedCallback() {
    var _a3, _b2;
    (_b2 = (_a3 = __privateGet13(this, _mediaController6)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
    __privateSet13(this, _mediaController6, null);
  }
  /**
   * Delay in ms
   */
  get loadingDelay() {
    return __privateGet13(this, _delay);
  }
  set loadingDelay(delay2) {
    __privateSet13(this, _delay, delay2);
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty(
      "--_loading-indicator-delay",
      `var(--media-loading-indicator-transition-delay, ${delay2}ms)`
    );
  }
  /**
   * Is the media paused
   */
  get mediaPaused() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED);
  }
  set mediaPaused(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED, value);
  }
  /**
   * Is the media loading
   */
  get mediaLoading() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_LOADING);
  }
  set mediaLoading(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_LOADING, value);
  }
  get mediaController() {
    return getStringAttr(this, MediaStateReceiverAttributes.MEDIA_CONTROLLER);
  }
  set mediaController(value) {
    setStringAttr(this, MediaStateReceiverAttributes.MEDIA_CONTROLLER, value);
  }
  get noAutohide() {
    return getBooleanAttr(this, Attributes5.NO_AUTOHIDE);
  }
  set noAutohide(value) {
    setBooleanAttr(this, Attributes5.NO_AUTOHIDE, value);
  }
};
_mediaController6 = /* @__PURE__ */ new WeakMap();
_delay = /* @__PURE__ */ new WeakMap();
if (!GlobalThis.customElements.get("media-loading-indicator")) {
  GlobalThis.customElements.define(
    "media-loading-indicator",
    MediaLoadingIndicator
  );
}

// ../../node_modules/media-chrome/dist/media-mute-button.js
var { MEDIA_VOLUME_LEVEL } = MediaUIAttributes;
var offIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`;
var lowIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`;
var highIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;
var slotTemplate6 = Document2.createElement("template");
slotTemplate6.innerHTML = /*html*/
`
  <style>
  ${/* Default to High slot/icon. */
""}
  :host(:not([${MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]), 
  :host([${MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
    display: none !important;
  }

  :host([${MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
    display: none !important;
  }

  :host([${MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
    display: none !important;
  }

  :host([${MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
    display: none !important;
  }

  :host(:not([${MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
  :host([${MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="off">${offIcon}</slot>
    <slot name="low">${lowIcon}</slot>
    <slot name="medium">${lowIcon}</slot>
    <slot name="high">${highIcon}</slot>
  </slot>
`;
var tooltipContent5 = (
  /*html*/
  `
  <slot name="tooltip-mute">${t("Mute")}</slot>
  <slot name="tooltip-unmute">${t("Unmute")}</slot>
`
);
var updateAriaLabel4 = (el) => {
  const muted = el.mediaVolumeLevel === "off";
  const label = muted ? t("unmute") : t("mute");
  el.setAttribute("aria-label", label);
};
var MediaMuteButton = class extends MediaChromeButton {
  static get observedAttributes() {
    return [...super.observedAttributes, MediaUIAttributes.MEDIA_VOLUME_LEVEL];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate6, tooltipContent: tooltipContent5, ...options });
  }
  connectedCallback() {
    updateAriaLabel4(this);
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_VOLUME_LEVEL) {
      updateAriaLabel4(this);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  /**
   * @type {string | undefined}
   */
  get mediaVolumeLevel() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_VOLUME_LEVEL);
  }
  set mediaVolumeLevel(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_VOLUME_LEVEL, value);
  }
  handleClick() {
    const eventName = this.mediaVolumeLevel === "off" ? MediaUIEvents.MEDIA_UNMUTE_REQUEST : MediaUIEvents.MEDIA_MUTE_REQUEST;
    this.dispatchEvent(
      new GlobalThis.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
};
if (!GlobalThis.customElements.get("media-mute-button")) {
  GlobalThis.customElements.define("media-mute-button", MediaMuteButton);
}

// ../../node_modules/media-chrome/dist/media-pip-button.js
var pipIcon = `<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;
var slotTemplate7 = Document2.createElement("template");
slotTemplate7.innerHTML = /*html*/
`
  <style>
  :host([${MediaUIAttributes.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  ${/* Double negative, but safer if display doesn't equal 'block' */
""}
  :host(:not([${MediaUIAttributes.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${MediaUIAttributes.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
  :host(:not([${MediaUIAttributes.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${pipIcon}</slot>
    <slot name="exit">${pipIcon}</slot>
  </slot>
`;
var tooltipContent6 = (
  /*html*/
  `
  <slot name="tooltip-enter">${t("Enter picture in picture mode")}</slot>
  <slot name="tooltip-exit">${t("Exit picture in picture mode")}</slot>
`
);
var updateAriaLabel5 = (el) => {
  const label = el.mediaIsPip ? t("exit picture in picture mode") : t("enter picture in picture mode");
  el.setAttribute("aria-label", label);
};
var MediaPipButton = class extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_IS_PIP,
      MediaUIAttributes.MEDIA_PIP_UNAVAILABLE
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate7, tooltipContent: tooltipContent6, ...options });
  }
  connectedCallback() {
    updateAriaLabel5(this);
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_IS_PIP) {
      updateAriaLabel5(this);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  /**
   * @type {string | undefined} Pip unavailability state
   */
  get mediaPipUnavailable() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_PIP_UNAVAILABLE);
  }
  set mediaPipUnavailable(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_PIP_UNAVAILABLE, value);
  }
  /**
   * @type {boolean} Is the media currently playing picture-in-picture
   */
  get mediaIsPip() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_IS_PIP);
  }
  set mediaIsPip(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_IS_PIP, value);
  }
  handleClick() {
    const eventName = this.mediaIsPip ? MediaUIEvents.MEDIA_EXIT_PIP_REQUEST : MediaUIEvents.MEDIA_ENTER_PIP_REQUEST;
    this.dispatchEvent(
      new GlobalThis.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
};
if (!GlobalThis.customElements.get("media-pip-button")) {
  GlobalThis.customElements.define("media-pip-button", MediaPipButton);
}

// ../../node_modules/media-chrome/dist/media-playback-rate-button.js
var __accessCheck14 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet14 = (obj, member, getter) => {
  __accessCheck14(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd14 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var _rates;
var Attributes6 = {
  RATES: "rates"
};
var DEFAULT_RATES = [1, 1.2, 1.5, 1.7, 2];
var DEFAULT_RATE = 1;
var slotTemplate8 = Document2.createElement("template");
slotTemplate8.innerHTML = /*html*/
`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;
var MediaPlaybackRateButton = class extends MediaChromeButton {
  constructor(options = {}) {
    super({
      slotTemplate: slotTemplate8,
      tooltipContent: t("Playback rate"),
      ...options
    });
    __privateAdd14(this, _rates, new AttributeTokenList(this, Attributes6.RATES, {
      defaultValue: DEFAULT_RATES
    }));
    this.container = this.shadowRoot.querySelector('slot[name="icon"]');
    this.container.innerHTML = `${DEFAULT_RATE}x`;
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      Attributes6.RATES
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === Attributes6.RATES) {
      __privateGet14(this, _rates).value = newValue;
    }
    if (attrName === MediaUIAttributes.MEDIA_PLAYBACK_RATE) {
      const newPlaybackRate = newValue ? +newValue : Number.NaN;
      const playbackRate = !Number.isNaN(newPlaybackRate) ? newPlaybackRate : DEFAULT_RATE;
      this.container.innerHTML = `${playbackRate}x`;
      this.setAttribute(
        "aria-label",
        t("Playback rate {playbackRate}", { playbackRate })
      );
    }
  }
  /**
   * @type { AttributeTokenList | Array<number> | undefined} Will return a DOMTokenList.
   * Setting a value will accept an array of numbers.
   */
  get rates() {
    return __privateGet14(this, _rates);
  }
  set rates(value) {
    if (!value) {
      __privateGet14(this, _rates).value = "";
    } else if (Array.isArray(value)) {
      __privateGet14(this, _rates).value = value.join(" ");
    }
  }
  /**
   * @type {number} The current playback rate
   */
  get mediaPlaybackRate() {
    return getNumericAttr(
      this,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      DEFAULT_RATE
    );
  }
  set mediaPlaybackRate(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, value);
  }
  handleClick() {
    var _a3, _b2;
    const availableRates = Array.from(this.rates.values(), (str) => +str).sort(
      (a, b) => a - b
    );
    const detail = (_b2 = (_a3 = availableRates.find((r) => r > this.mediaPlaybackRate)) != null ? _a3 : availableRates[0]) != null ? _b2 : DEFAULT_RATE;
    const evt = new GlobalThis.CustomEvent(
      MediaUIEvents.MEDIA_PLAYBACK_RATE_REQUEST,
      { composed: true, bubbles: true, detail }
    );
    this.dispatchEvent(evt);
  }
};
_rates = /* @__PURE__ */ new WeakMap();
if (!GlobalThis.customElements.get("media-playback-rate-button")) {
  GlobalThis.customElements.define(
    "media-playback-rate-button",
    MediaPlaybackRateButton
  );
}

// ../../node_modules/media-chrome/dist/media-play-button.js
var playIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`;
var pauseIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;
var slotTemplate9 = Document2.createElement("template");
slotTemplate9.innerHTML = /*html*/
`
  <style>
    :host([${MediaUIAttributes.MEDIA_PAUSED}]) slot[name=pause],
    :host(:not([${MediaUIAttributes.MEDIA_PAUSED}])) slot[name=play] {
      display: none !important;
    }

    :host([${MediaUIAttributes.MEDIA_PAUSED}]) slot[name=tooltip-pause],
    :host(:not([${MediaUIAttributes.MEDIA_PAUSED}])) slot[name=tooltip-play] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="play">${playIcon}</slot>
    <slot name="pause">${pauseIcon}</slot>
  </slot>
`;
var tooltipContent7 = (
  /*html*/
  `
  <slot name="tooltip-play">${t("Play")}</slot>
  <slot name="tooltip-pause">${t("Pause")}</slot>
`
);
var updateAriaLabel6 = (el) => {
  const label = el.mediaPaused ? t("play") : t("pause");
  el.setAttribute("aria-label", label);
};
var MediaPlayButton = class extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PAUSED,
      MediaUIAttributes.MEDIA_ENDED
    ];
  }
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate9, tooltipContent: tooltipContent7, ...options });
  }
  connectedCallback() {
    updateAriaLabel6(this);
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_PAUSED) {
      updateAriaLabel6(this);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  /**
   * Is the media paused
   */
  get mediaPaused() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED);
  }
  set mediaPaused(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED, value);
  }
  handleClick() {
    const eventName = this.mediaPaused ? MediaUIEvents.MEDIA_PLAY_REQUEST : MediaUIEvents.MEDIA_PAUSE_REQUEST;
    this.dispatchEvent(
      new GlobalThis.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
};
if (!GlobalThis.customElements.get("media-play-button")) {
  GlobalThis.customElements.define("media-play-button", MediaPlayButton);
}

// ../../node_modules/media-chrome/dist/media-poster-image.js
var Attributes7 = {
  PLACEHOLDER_SRC: "placeholdersrc",
  SRC: "src"
};
var template8 = Document2.createElement("template");
template8.innerHTML = /*html*/
`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;
var unsetBackgroundImage = (el) => {
  el.style.removeProperty("background-image");
};
var setBackgroundImage = (el, image) => {
  el.style["background-image"] = `url('${image}')`;
};
var MediaPosterImage = class extends GlobalThis.HTMLElement {
  static get observedAttributes() {
    return [Attributes7.PLACEHOLDER_SRC, Attributes7.SRC];
  }
  constructor() {
    super();
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template8.content.cloneNode(true));
    }
    this.image = this.shadowRoot.querySelector("#image");
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === Attributes7.SRC) {
      if (newValue == null) {
        this.image.removeAttribute(Attributes7.SRC);
      } else {
        this.image.setAttribute(Attributes7.SRC, newValue);
      }
    }
    if (attrName === Attributes7.PLACEHOLDER_SRC) {
      if (newValue == null) {
        unsetBackgroundImage(this.image);
      } else {
        setBackgroundImage(this.image, newValue);
      }
    }
  }
  /**
   *
   */
  get placeholderSrc() {
    return getStringAttr(this, Attributes7.PLACEHOLDER_SRC);
  }
  set placeholderSrc(value) {
    setStringAttr(this, Attributes7.SRC, value);
  }
  /**
   *
   */
  get src() {
    return getStringAttr(this, Attributes7.SRC);
  }
  set src(value) {
    setStringAttr(this, Attributes7.SRC, value);
  }
};
if (!GlobalThis.customElements.get("media-poster-image")) {
  GlobalThis.customElements.define("media-poster-image", MediaPosterImage);
}

// ../../node_modules/media-chrome/dist/media-preview-chapter-display.js
var __accessCheck15 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet15 = (obj, member, getter) => {
  __accessCheck15(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd15 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet14 = (obj, member, value, setter) => {
  __accessCheck15(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _slot2;
var MediaPreviewChapterDisplay = class extends MediaTextDisplay {
  constructor() {
    super();
    __privateAdd15(this, _slot2, void 0);
    __privateSet14(this, _slot2, this.shadowRoot.querySelector("slot"));
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PREVIEW_CHAPTER
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_PREVIEW_CHAPTER) {
      if (newValue !== oldValue && newValue != null) {
        __privateGet15(this, _slot2).textContent = newValue;
        if (newValue !== "") {
          this.setAttribute("aria-valuetext", `chapter: ${newValue}`);
        } else {
          this.removeAttribute("aria-valuetext");
        }
      }
    }
  }
  /**
   * @type {string | undefined} Timeline preview chapter
   */
  get mediaPreviewChapter() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_CHAPTER);
  }
  set mediaPreviewChapter(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_CHAPTER, value);
  }
};
_slot2 = /* @__PURE__ */ new WeakMap();
if (!GlobalThis.customElements.get("media-preview-chapter-display")) {
  GlobalThis.customElements.define(
    "media-preview-chapter-display",
    MediaPreviewChapterDisplay
  );
}

// ../../node_modules/media-chrome/dist/media-preview-thumbnail.js
var __accessCheck16 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet16 = (obj, member, getter) => {
  __accessCheck16(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd16 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet15 = (obj, member, value, setter) => {
  __accessCheck16(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _mediaController7;
var template9 = Document2.createElement("template");
template9.innerHTML = /*html*/
`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;
var MediaPreviewThumbnail = class extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd16(this, _mediaController7, void 0);
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template9.content.cloneNode(true));
    }
  }
  static get observedAttributes() {
    return [
      MediaStateReceiverAttributes.MEDIA_CONTROLLER,
      MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
      MediaUIAttributes.MEDIA_PREVIEW_COORDS
    ];
  }
  connectedCallback() {
    var _a3, _b2, _c;
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet15(
        this,
        _mediaController7,
        // @ts-ignore
        (_a3 = this.getRootNode()) == null ? void 0 : _a3.getElementById(mediaControllerId)
      );
      (_c = (_b2 = __privateGet16(this, _mediaController7)) == null ? void 0 : _b2.associateElement) == null ? void 0 : _c.call(_b2, this);
    }
  }
  disconnectedCallback() {
    var _a3, _b2;
    (_b2 = (_a3 = __privateGet16(this, _mediaController7)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
    __privateSet15(this, _mediaController7, null);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a3, _b2, _c, _d, _e;
    if ([
      MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
      MediaUIAttributes.MEDIA_PREVIEW_COORDS
    ].includes(attrName)) {
      this.update();
    }
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b2 = (_a3 = __privateGet16(this, _mediaController7)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
        __privateSet15(this, _mediaController7, null);
      }
      if (newValue && this.isConnected) {
        __privateSet15(this, _mediaController7, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e = (_d = __privateGet16(this, _mediaController7)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e.call(_d, this);
      }
    }
  }
  /**
   * @type {string | undefined} The url of the preview image
   */
  get mediaPreviewImage() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_IMAGE);
  }
  set mediaPreviewImage(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_IMAGE, value);
  }
  /**
   * @type {Array<number> | undefined} Fixed length array [x, y, width, height] or undefined
   */
  get mediaPreviewCoords() {
    const attrVal = this.getAttribute(MediaUIAttributes.MEDIA_PREVIEW_COORDS);
    if (!attrVal)
      return void 0;
    return attrVal.split(/\s+/).map((coord) => +coord);
  }
  set mediaPreviewCoords(value) {
    if (!value) {
      this.removeAttribute(MediaUIAttributes.MEDIA_PREVIEW_COORDS);
      return;
    }
    this.setAttribute(MediaUIAttributes.MEDIA_PREVIEW_COORDS, value.join(" "));
  }
  update() {
    const coords = this.mediaPreviewCoords;
    const previewImage = this.mediaPreviewImage;
    if (!(coords && previewImage))
      return;
    const [x, y, w, h] = coords;
    const src = previewImage.split("#")[0];
    const computedStyle = getComputedStyle(this);
    const { maxWidth, maxHeight, minWidth, minHeight } = computedStyle;
    const maxRatio = Math.min(parseInt(maxWidth) / w, parseInt(maxHeight) / h);
    const minRatio = Math.max(parseInt(minWidth) / w, parseInt(minHeight) / h);
    const isScalingDown = maxRatio < 1;
    const scale = isScalingDown ? maxRatio : minRatio > 1 ? minRatio : 1;
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    const imgStyle = getOrInsertCSSRule(this.shadowRoot, "img").style;
    const img = this.shadowRoot.querySelector("img");
    const extremum = isScalingDown ? "min" : "max";
    style.setProperty(`${extremum}-width`, "initial", "important");
    style.setProperty(`${extremum}-height`, "initial", "important");
    style.width = `${w * scale}px`;
    style.height = `${h * scale}px`;
    const resize = () => {
      imgStyle.width = `${this.imgWidth * scale}px`;
      imgStyle.height = `${this.imgHeight * scale}px`;
      imgStyle.display = "block";
    };
    if (img.src !== src) {
      img.onload = () => {
        this.imgWidth = img.naturalWidth;
        this.imgHeight = img.naturalHeight;
        resize();
      };
      img.src = src;
      resize();
    }
    resize();
    imgStyle.transform = `translate(-${x * scale}px, -${y * scale}px)`;
  }
};
_mediaController7 = /* @__PURE__ */ new WeakMap();
if (!GlobalThis.customElements.get("media-preview-thumbnail")) {
  GlobalThis.customElements.define(
    "media-preview-thumbnail",
    MediaPreviewThumbnail
  );
}

// ../../node_modules/media-chrome/dist/media-preview-time-display.js
var __accessCheck17 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet17 = (obj, member, getter) => {
  __accessCheck17(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd17 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet16 = (obj, member, value, setter) => {
  __accessCheck17(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _slot3;
var MediaPreviewTimeDisplay = class extends MediaTextDisplay {
  constructor() {
    super();
    __privateAdd17(this, _slot3, void 0);
    __privateSet16(this, _slot3, this.shadowRoot.querySelector("slot"));
    __privateGet17(this, _slot3).textContent = formatTime(0);
  }
  static get observedAttributes() {
    return [...super.observedAttributes, MediaUIAttributes.MEDIA_PREVIEW_TIME];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_PREVIEW_TIME && newValue != null) {
      __privateGet17(this, _slot3).textContent = formatTime(parseFloat(newValue));
    }
  }
  /**
   * Timeline preview time
   */
  get mediaPreviewTime() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_PREVIEW_TIME);
  }
  set mediaPreviewTime(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PREVIEW_TIME, value);
  }
};
_slot3 = /* @__PURE__ */ new WeakMap();
if (!GlobalThis.customElements.get("media-preview-time-display")) {
  GlobalThis.customElements.define(
    "media-preview-time-display",
    MediaPreviewTimeDisplay
  );
}

// ../../node_modules/media-chrome/dist/media-seek-backward-button.js
var Attributes8 = {
  SEEK_OFFSET: "seekoffset"
};
var DEFAULT_SEEK_OFFSET2 = 30;
var backwardIcon = `<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">${DEFAULT_SEEK_OFFSET2}</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg>`;
var slotTemplate10 = Document2.createElement("template");
slotTemplate10.innerHTML = `
  <slot name="icon">${backwardIcon}</slot>
`;
var DEFAULT_TIME = 0;
var MediaSeekBackwardButton = class extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      Attributes8.SEEK_OFFSET
    ];
  }
  constructor(options = {}) {
    super({
      slotTemplate: slotTemplate10,
      tooltipContent: t("Seek backward"),
      ...options
    });
  }
  connectedCallback() {
    this.seekOffset = getNumericAttr(
      this,
      Attributes8.SEEK_OFFSET,
      DEFAULT_SEEK_OFFSET2
    );
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, _oldValue, newValue) {
    if (attrName === Attributes8.SEEK_OFFSET) {
      this.seekOffset = getNumericAttr(
        this,
        Attributes8.SEEK_OFFSET,
        DEFAULT_SEEK_OFFSET2
      );
    }
    super.attributeChangedCallback(attrName, _oldValue, newValue);
  }
  // Own props
  /**
   * Seek amount in seconds
   */
  get seekOffset() {
    return getNumericAttr(this, Attributes8.SEEK_OFFSET, DEFAULT_SEEK_OFFSET2);
  }
  set seekOffset(value) {
    setNumericAttr(this, Attributes8.SEEK_OFFSET, value);
    this.setAttribute(
      "aria-label",
      t("seek back {seekOffset} seconds", { seekOffset: this.seekOffset })
    );
    updateIconText(getSlotted(this, "icon"), this.seekOffset);
  }
  // Props derived from Media UI Attributes
  /**
   * The current time in seconds
   */
  get mediaCurrentTime() {
    return getNumericAttr(
      this,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      DEFAULT_TIME
    );
  }
  set mediaCurrentTime(time) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME, time);
  }
  handleClick() {
    const detail = Math.max(this.mediaCurrentTime - this.seekOffset, 0);
    const evt = new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
      composed: true,
      bubbles: true,
      detail
    });
    this.dispatchEvent(evt);
  }
};
if (!GlobalThis.customElements.get("media-seek-backward-button")) {
  GlobalThis.customElements.define(
    "media-seek-backward-button",
    MediaSeekBackwardButton
  );
}

// ../../node_modules/media-chrome/dist/media-seek-forward-button.js
var Attributes9 = {
  SEEK_OFFSET: "seekoffset"
};
var DEFAULT_SEEK_OFFSET3 = 30;
var forwardIcon = `<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">${DEFAULT_SEEK_OFFSET3}</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg>`;
var slotTemplate11 = Document2.createElement("template");
slotTemplate11.innerHTML = `
  <slot name="icon">${forwardIcon}</slot>
`;
var DEFAULT_TIME2 = 0;
var MediaSeekForwardButton = class extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      Attributes9.SEEK_OFFSET
    ];
  }
  constructor(options = {}) {
    super({
      slotTemplate: slotTemplate11,
      tooltipContent: t("Seek forward"),
      ...options
    });
  }
  connectedCallback() {
    this.seekOffset = getNumericAttr(
      this,
      Attributes9.SEEK_OFFSET,
      DEFAULT_SEEK_OFFSET3
    );
    super.connectedCallback();
  }
  attributeChangedCallback(attrName, _oldValue, newValue) {
    if (attrName === Attributes9.SEEK_OFFSET) {
      this.seekOffset = getNumericAttr(
        this,
        Attributes9.SEEK_OFFSET,
        DEFAULT_SEEK_OFFSET3
      );
    }
    super.attributeChangedCallback(attrName, _oldValue, newValue);
  }
  // Own props
  /**
   * Seek amount in seconds
   */
  get seekOffset() {
    return getNumericAttr(this, Attributes9.SEEK_OFFSET, DEFAULT_SEEK_OFFSET3);
  }
  set seekOffset(value) {
    setNumericAttr(this, Attributes9.SEEK_OFFSET, value);
    this.setAttribute(
      "aria-label",
      t("seek forward {seekOffset} seconds", { seekOffset: this.seekOffset })
    );
    updateIconText(getSlotted(this, "icon"), this.seekOffset);
  }
  // Props derived from Media UI Attributes
  /**
   * The current time in seconds
   */
  get mediaCurrentTime() {
    return getNumericAttr(
      this,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      DEFAULT_TIME2
    );
  }
  set mediaCurrentTime(time) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME, time);
  }
  handleClick() {
    const detail = this.mediaCurrentTime + this.seekOffset;
    const evt = new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
      composed: true,
      bubbles: true,
      detail
    });
    this.dispatchEvent(evt);
  }
};
if (!GlobalThis.customElements.get("media-seek-forward-button")) {
  GlobalThis.customElements.define(
    "media-seek-forward-button",
    MediaSeekForwardButton
  );
}

// ../../node_modules/media-chrome/dist/media-time-display.js
var __accessCheck18 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet18 = (obj, member, getter) => {
  __accessCheck18(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd18 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet17 = (obj, member, value, setter) => {
  __accessCheck18(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _slot4;
var Attributes10 = {
  REMAINING: "remaining",
  SHOW_DURATION: "showduration",
  NO_TOGGLE: "notoggle"
};
var CombinedAttributes = [
  ...Object.values(Attributes10),
  MediaUIAttributes.MEDIA_CURRENT_TIME,
  MediaUIAttributes.MEDIA_DURATION,
  MediaUIAttributes.MEDIA_SEEKABLE
];
var ButtonPressedKeys2 = ["Enter", " "];
var DEFAULT_TIMES_SEP = "&nbsp;/&nbsp;";
var formatTimesLabel = (el, { timesSep = DEFAULT_TIMES_SEP } = {}) => {
  var _a3, _b2;
  const showRemaining = el.hasAttribute(Attributes10.REMAINING);
  const showDuration = el.hasAttribute(Attributes10.SHOW_DURATION);
  const currentTime = (_a3 = el.mediaCurrentTime) != null ? _a3 : 0;
  const [, seekableEnd] = (_b2 = el.mediaSeekable) != null ? _b2 : [];
  let endTime = 0;
  if (Number.isFinite(el.mediaDuration)) {
    endTime = el.mediaDuration;
  } else if (Number.isFinite(seekableEnd)) {
    endTime = seekableEnd;
  }
  const timeLabel = showRemaining ? formatTime(0 - (endTime - currentTime)) : formatTime(currentTime);
  if (!showDuration)
    return timeLabel;
  return `${timeLabel}${timesSep}${formatTime(endTime)}`;
};
var DEFAULT_MISSING_TIME_PHRASE = "video not loaded, unknown time.";
var updateAriaValueText = (el) => {
  var _a3;
  const currentTime = el.mediaCurrentTime;
  const [, seekableEnd] = (_a3 = el.mediaSeekable) != null ? _a3 : [];
  let endTime = null;
  if (Number.isFinite(el.mediaDuration)) {
    endTime = el.mediaDuration;
  } else if (Number.isFinite(seekableEnd)) {
    endTime = seekableEnd;
  }
  if (currentTime == null || endTime === null) {
    el.setAttribute("aria-valuetext", DEFAULT_MISSING_TIME_PHRASE);
    return;
  }
  const showRemaining = el.hasAttribute(Attributes10.REMAINING);
  const showDuration = el.hasAttribute(Attributes10.SHOW_DURATION);
  const currentTimePhrase = showRemaining ? formatAsTimePhrase(0 - (endTime - currentTime)) : formatAsTimePhrase(currentTime);
  if (!showDuration) {
    el.setAttribute("aria-valuetext", currentTimePhrase);
    return;
  }
  const totalTimePhrase = formatAsTimePhrase(endTime);
  const fullPhrase = `${currentTimePhrase} of ${totalTimePhrase}`;
  el.setAttribute("aria-valuetext", fullPhrase);
};
var MediaTimeDisplay = class extends MediaTextDisplay {
  constructor() {
    super();
    __privateAdd18(this, _slot4, void 0);
    __privateSet17(this, _slot4, this.shadowRoot.querySelector("slot"));
    __privateGet18(this, _slot4).innerHTML = `${formatTimesLabel(this)}`;
  }
  static get observedAttributes() {
    return [...super.observedAttributes, ...CombinedAttributes, "disabled"];
  }
  connectedCallback() {
    const { style } = getOrInsertCSSRule(
      this.shadowRoot,
      ":host(:hover:not([notoggle]))"
    );
    style.setProperty("cursor", "pointer");
    style.setProperty(
      "background",
      "var(--media-control-hover-background, rgba(50 50 70 / .7))"
    );
    if (!this.hasAttribute("disabled")) {
      this.enable();
    }
    this.setAttribute("role", "progressbar");
    this.setAttribute("aria-label", t("playback time"));
    const keyUpHandler = (evt) => {
      const { key } = evt;
      if (!ButtonPressedKeys2.includes(key)) {
        this.removeEventListener("keyup", keyUpHandler);
        return;
      }
      this.toggleTimeDisplay();
    };
    this.addEventListener("keydown", (evt) => {
      const { metaKey, altKey, key } = evt;
      if (metaKey || altKey || !ButtonPressedKeys2.includes(key)) {
        this.removeEventListener("keyup", keyUpHandler);
        return;
      }
      this.addEventListener("keyup", keyUpHandler);
    });
    this.addEventListener("click", this.toggleTimeDisplay);
    super.connectedCallback();
  }
  toggleTimeDisplay() {
    if (this.noToggle) {
      return;
    }
    if (this.hasAttribute("remaining")) {
      this.removeAttribute("remaining");
    } else {
      this.setAttribute("remaining", "");
    }
  }
  disconnectedCallback() {
    this.disable();
    super.disconnectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (CombinedAttributes.includes(attrName)) {
      this.update();
    } else if (attrName === "disabled" && newValue !== oldValue) {
      if (newValue == null) {
        this.enable();
      } else {
        this.disable();
      }
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  enable() {
    this.tabIndex = 0;
  }
  disable() {
    this.tabIndex = -1;
  }
  // Own props
  /**
   * Whether to show the remaining time
   */
  get remaining() {
    return getBooleanAttr(this, Attributes10.REMAINING);
  }
  set remaining(show) {
    setBooleanAttr(this, Attributes10.REMAINING, show);
  }
  /**
   * Whether to show the duration
   */
  get showDuration() {
    return getBooleanAttr(this, Attributes10.SHOW_DURATION);
  }
  set showDuration(show) {
    setBooleanAttr(this, Attributes10.SHOW_DURATION, show);
  }
  /**
   * Disable the default behavior that toggles between current and remaining time
   */
  get noToggle() {
    return getBooleanAttr(this, Attributes10.NO_TOGGLE);
  }
  set noToggle(noToggle) {
    setBooleanAttr(this, Attributes10.NO_TOGGLE, noToggle);
  }
  // Props derived from media UI attributes
  /**
   * Get the duration
   */
  get mediaDuration() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_DURATION);
  }
  set mediaDuration(time) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_DURATION, time);
  }
  /**
   * The current time in seconds
   */
  get mediaCurrentTime() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME);
  }
  set mediaCurrentTime(time) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME, time);
  }
  /**
   * Range of values that can be seeked to.
   * An array of two numbers [start, end]
   */
  get mediaSeekable() {
    const seekable = this.getAttribute(MediaUIAttributes.MEDIA_SEEKABLE);
    if (!seekable)
      return void 0;
    return seekable.split(":").map((time) => +time);
  }
  set mediaSeekable(range) {
    if (range == null) {
      this.removeAttribute(MediaUIAttributes.MEDIA_SEEKABLE);
      return;
    }
    this.setAttribute(MediaUIAttributes.MEDIA_SEEKABLE, range.join(":"));
  }
  update() {
    const timesLabel = formatTimesLabel(this);
    updateAriaValueText(this);
    if (timesLabel !== __privateGet18(this, _slot4).innerHTML) {
      __privateGet18(this, _slot4).innerHTML = timesLabel;
    }
  }
};
_slot4 = /* @__PURE__ */ new WeakMap();
if (!GlobalThis.customElements.get("media-time-display")) {
  GlobalThis.customElements.define("media-time-display", MediaTimeDisplay);
}

// ../../node_modules/media-chrome/dist/utils/range-animation.js
var __accessCheck19 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet19 = (obj, member, getter) => {
  __accessCheck19(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd19 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet18 = (obj, member, value, setter) => {
  __accessCheck19(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet18(obj, member, value, setter);
  },
  get _() {
    return __privateGet19(obj, member, getter);
  }
});
var _range;
var _startTime;
var _previousTime;
var _deltaTime;
var _frameCount;
var _updateTimestamp;
var _updateStartValue;
var _lastRangeIncrease;
var _id;
var _animate;
var RangeAnimation = class {
  constructor(range, callback, fps) {
    __privateAdd19(this, _range, void 0);
    __privateAdd19(this, _startTime, void 0);
    __privateAdd19(this, _previousTime, void 0);
    __privateAdd19(this, _deltaTime, void 0);
    __privateAdd19(this, _frameCount, void 0);
    __privateAdd19(this, _updateTimestamp, void 0);
    __privateAdd19(this, _updateStartValue, void 0);
    __privateAdd19(this, _lastRangeIncrease, void 0);
    __privateAdd19(this, _id, 0);
    __privateAdd19(this, _animate, (now = performance.now()) => {
      __privateSet18(this, _id, requestAnimationFrame(__privateGet19(this, _animate)));
      __privateSet18(this, _deltaTime, performance.now() - __privateGet19(this, _previousTime));
      const fpsInterval = 1e3 / this.fps;
      if (__privateGet19(this, _deltaTime) > fpsInterval) {
        __privateSet18(this, _previousTime, now - __privateGet19(this, _deltaTime) % fpsInterval);
        const fps2 = 1e3 / ((now - __privateGet19(this, _startTime)) / ++__privateWrapper(this, _frameCount)._);
        const delta = (now - __privateGet19(this, _updateTimestamp)) / 1e3 / this.duration;
        let value = __privateGet19(this, _updateStartValue) + delta * this.playbackRate;
        const increase = value - __privateGet19(this, _range).valueAsNumber;
        if (increase > 0) {
          __privateSet18(this, _lastRangeIncrease, this.playbackRate / this.duration / fps2);
        } else {
          __privateSet18(this, _lastRangeIncrease, 0.995 * __privateGet19(this, _lastRangeIncrease));
          value = __privateGet19(this, _range).valueAsNumber + __privateGet19(this, _lastRangeIncrease);
        }
        this.callback(value);
      }
    });
    __privateSet18(this, _range, range);
    this.callback = callback;
    this.fps = fps;
  }
  start() {
    if (__privateGet19(this, _id) !== 0)
      return;
    __privateSet18(this, _previousTime, performance.now());
    __privateSet18(this, _startTime, __privateGet19(this, _previousTime));
    __privateSet18(this, _frameCount, 0);
    __privateGet19(this, _animate).call(this);
  }
  stop() {
    if (__privateGet19(this, _id) === 0)
      return;
    cancelAnimationFrame(__privateGet19(this, _id));
    __privateSet18(this, _id, 0);
  }
  update({ start, duration, playbackRate }) {
    const increase = start - __privateGet19(this, _range).valueAsNumber;
    const durationDelta = Math.abs(duration - this.duration);
    if (increase > 0 || increase < -0.03 || durationDelta >= 0.5) {
      this.callback(start);
    }
    __privateSet18(this, _updateStartValue, start);
    __privateSet18(this, _updateTimestamp, performance.now());
    this.duration = duration;
    this.playbackRate = playbackRate;
  }
};
_range = /* @__PURE__ */ new WeakMap();
_startTime = /* @__PURE__ */ new WeakMap();
_previousTime = /* @__PURE__ */ new WeakMap();
_deltaTime = /* @__PURE__ */ new WeakMap();
_frameCount = /* @__PURE__ */ new WeakMap();
_updateTimestamp = /* @__PURE__ */ new WeakMap();
_updateStartValue = /* @__PURE__ */ new WeakMap();
_lastRangeIncrease = /* @__PURE__ */ new WeakMap();
_id = /* @__PURE__ */ new WeakMap();
_animate = /* @__PURE__ */ new WeakMap();

// ../../node_modules/media-chrome/dist/media-time-range.js
var __accessCheck20 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet20 = (obj, member, getter) => {
  __accessCheck20(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd20 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet19 = (obj, member, value, setter) => {
  __accessCheck20(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod7 = (obj, member, method) => {
  __accessCheck20(obj, member, "access private method");
  return method;
};
var _rootNode;
var _animation;
var _boxes;
var _previewTime;
var _previewBox;
var _currentBox;
var _boxPaddingLeft;
var _boxPaddingRight;
var _mediaChaptersCues;
var _toggleRangeAnimation;
var toggleRangeAnimation_fn;
var _shouldRangeAnimate;
var shouldRangeAnimate_fn;
var _updateRange;
var _getElementRects;
var getElementRects_fn;
var _getBoxPosition;
var getBoxPosition_fn;
var _getBoxShiftPosition;
var getBoxShiftPosition_fn;
var _handlePointerMove3;
var handlePointerMove_fn3;
var _previewRequest;
var previewRequest_fn;
var _seekRequest;
var seekRequest_fn;
var DEFAULT_MISSING_TIME_PHRASE2 = "video not loaded, unknown time.";
var updateAriaValueText2 = (el) => {
  const range = el.range;
  const currentTimePhrase = formatAsTimePhrase(+calcTimeFromRangeValue(el));
  const totalTimePhrase = formatAsTimePhrase(+el.mediaSeekableEnd);
  const fullPhrase = !(currentTimePhrase && totalTimePhrase) ? DEFAULT_MISSING_TIME_PHRASE2 : `${currentTimePhrase} of ${totalTimePhrase}`;
  range.setAttribute("aria-valuetext", fullPhrase);
};
var template10 = Document2.createElement("template");
template10.innerHTML = /*html*/
`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      ${/* 1% rail width trick was off in Safari, contain: layout seems to
prevent the horizontal overflow as well. */
""}
      contain: layout;
    }

    #buffered {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      ${/* absolute position is needed here so the box doesn't overflow the bounds */
""}
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}], [${MediaUIAttributes.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}], [${MediaUIAttributes.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      ${/* delay changing these CSS props until the preview box transition is ended */
""}
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${MediaUIAttributes.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      ${/* delay changing these CSS props until the preview box transition is ended */
""}
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${MediaUIAttributes.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${MediaUIAttributes.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      ${/* delay changing these CSS props until the preview box transition is ended */
""}
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
    }

    :host([${MediaUIAttributes.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      ${/* border-color has to come before border-top-color! */
""}
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      ${/* Example: add the current time w/ arrow to the playhead
<media-time-display slot="current"></media-time-display>
<div part="arrow" slot="current"></div> */
""}
    </slot>
  </div>
`;
var calcRangeValueFromTime = (el, time = el.mediaCurrentTime) => {
  const startTime = Number.isFinite(el.mediaSeekableStart) ? el.mediaSeekableStart : 0;
  const endTime = Number.isFinite(el.mediaDuration) ? el.mediaDuration : el.mediaSeekableEnd;
  if (Number.isNaN(endTime))
    return 0;
  const value = (time - startTime) / (endTime - startTime);
  return Math.max(0, Math.min(value, 1));
};
var calcTimeFromRangeValue = (el, value = el.range.valueAsNumber) => {
  const startTime = Number.isFinite(el.mediaSeekableStart) ? el.mediaSeekableStart : 0;
  const endTime = Number.isFinite(el.mediaDuration) ? el.mediaDuration : el.mediaSeekableEnd;
  if (Number.isNaN(endTime))
    return 0;
  return value * (endTime - startTime) + startTime;
};
var MediaTimeRange = class extends MediaChromeRange {
  constructor() {
    super();
    __privateAdd20(this, _toggleRangeAnimation);
    __privateAdd20(this, _shouldRangeAnimate);
    __privateAdd20(this, _getElementRects);
    __privateAdd20(this, _getBoxPosition);
    __privateAdd20(this, _getBoxShiftPosition);
    __privateAdd20(this, _handlePointerMove3);
    __privateAdd20(this, _previewRequest);
    __privateAdd20(this, _seekRequest);
    __privateAdd20(this, _rootNode, void 0);
    __privateAdd20(this, _animation, void 0);
    __privateAdd20(this, _boxes, void 0);
    __privateAdd20(this, _previewTime, void 0);
    __privateAdd20(this, _previewBox, void 0);
    __privateAdd20(this, _currentBox, void 0);
    __privateAdd20(this, _boxPaddingLeft, void 0);
    __privateAdd20(this, _boxPaddingRight, void 0);
    __privateAdd20(this, _mediaChaptersCues, void 0);
    __privateAdd20(this, _updateRange, (value) => {
      if (this.dragging)
        return;
      if (isValidNumber(value)) {
        this.range.valueAsNumber = value;
      }
      this.updateBar();
    });
    this.container.appendChild(template10.content.cloneNode(true));
    const track = this.shadowRoot.querySelector("#track");
    track.insertAdjacentHTML(
      "afterbegin",
      '<div id="buffered" part="buffered"></div>'
    );
    __privateSet19(this, _boxes, this.shadowRoot.querySelectorAll('[part~="box"]'));
    __privateSet19(this, _previewBox, this.shadowRoot.querySelector('[part~="preview-box"]'));
    __privateSet19(this, _currentBox, this.shadowRoot.querySelector('[part~="current-box"]'));
    const computedStyle = getComputedStyle(this);
    __privateSet19(this, _boxPaddingLeft, parseInt(
      computedStyle.getPropertyValue("--media-box-padding-left")
    ));
    __privateSet19(this, _boxPaddingRight, parseInt(
      computedStyle.getPropertyValue("--media-box-padding-right")
    ));
    __privateSet19(this, _animation, new RangeAnimation(this.range, __privateGet20(this, _updateRange), 60));
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PAUSED,
      MediaUIAttributes.MEDIA_DURATION,
      MediaUIAttributes.MEDIA_SEEKABLE,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
      MediaUIAttributes.MEDIA_PREVIEW_TIME,
      MediaUIAttributes.MEDIA_PREVIEW_CHAPTER,
      MediaUIAttributes.MEDIA_BUFFERED,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      MediaUIAttributes.MEDIA_LOADING,
      MediaUIAttributes.MEDIA_ENDED
    ];
  }
  connectedCallback() {
    var _a3;
    super.connectedCallback();
    this.range.setAttribute("aria-label", t("seek"));
    __privateMethod7(this, _toggleRangeAnimation, toggleRangeAnimation_fn).call(this);
    __privateSet19(this, _rootNode, this.getRootNode());
    (_a3 = __privateGet20(this, _rootNode)) == null ? void 0 : _a3.addEventListener("transitionstart", this);
  }
  disconnectedCallback() {
    var _a3;
    super.disconnectedCallback();
    __privateMethod7(this, _toggleRangeAnimation, toggleRangeAnimation_fn).call(this);
    (_a3 = __privateGet20(this, _rootNode)) == null ? void 0 : _a3.removeEventListener("transitionstart", this);
    __privateSet19(this, _rootNode, null);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (oldValue == newValue)
      return;
    if (attrName === MediaUIAttributes.MEDIA_CURRENT_TIME || attrName === MediaUIAttributes.MEDIA_PAUSED || attrName === MediaUIAttributes.MEDIA_ENDED || attrName === MediaUIAttributes.MEDIA_LOADING || attrName === MediaUIAttributes.MEDIA_DURATION || attrName === MediaUIAttributes.MEDIA_SEEKABLE) {
      __privateGet20(this, _animation).update({
        start: calcRangeValueFromTime(this),
        duration: this.mediaSeekableEnd - this.mediaSeekableStart,
        playbackRate: this.mediaPlaybackRate
      });
      __privateMethod7(this, _toggleRangeAnimation, toggleRangeAnimation_fn).call(this);
      updateAriaValueText2(this);
    } else if (attrName === MediaUIAttributes.MEDIA_BUFFERED) {
      this.updateBufferedBar();
    }
    if (attrName === MediaUIAttributes.MEDIA_DURATION || attrName === MediaUIAttributes.MEDIA_SEEKABLE) {
      this.mediaChaptersCues = __privateGet20(this, _mediaChaptersCues);
      this.updateBar();
    }
  }
  get mediaChaptersCues() {
    return __privateGet20(this, _mediaChaptersCues);
  }
  set mediaChaptersCues(value) {
    var _a3;
    __privateSet19(this, _mediaChaptersCues, value);
    this.updateSegments(
      (_a3 = __privateGet20(this, _mediaChaptersCues)) == null ? void 0 : _a3.map((c) => ({
        start: calcRangeValueFromTime(this, c.startTime),
        end: calcRangeValueFromTime(this, c.endTime)
      }))
    );
  }
  /**
   * Is the media paused
   */
  get mediaPaused() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED);
  }
  set mediaPaused(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED, value);
  }
  /**
   * Is the media loading
   */
  get mediaLoading() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_LOADING);
  }
  set mediaLoading(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_LOADING, value);
  }
  /**
   *
   */
  get mediaDuration() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_DURATION);
  }
  set mediaDuration(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_DURATION, value);
  }
  /**
   *
   */
  get mediaCurrentTime() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME);
  }
  set mediaCurrentTime(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME, value);
  }
  /**
   *
   */
  get mediaPlaybackRate() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, 1);
  }
  set mediaPlaybackRate(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, value);
  }
  /**
   * An array of ranges, each range being an array of two numbers.
   * e.g. [[1, 2], [3, 4]]
   */
  get mediaBuffered() {
    const buffered = this.getAttribute(MediaUIAttributes.MEDIA_BUFFERED);
    if (!buffered)
      return [];
    return buffered.split(" ").map((timePair) => timePair.split(":").map((timeStr) => +timeStr));
  }
  set mediaBuffered(list) {
    if (!list) {
      this.removeAttribute(MediaUIAttributes.MEDIA_BUFFERED);
      return;
    }
    const strVal = list.map((tuple) => tuple.join(":")).join(" ");
    this.setAttribute(MediaUIAttributes.MEDIA_BUFFERED, strVal);
  }
  /**
   * Range of values that can be seeked to
   * An array of two numbers [start, end]
   */
  get mediaSeekable() {
    const seekable = this.getAttribute(MediaUIAttributes.MEDIA_SEEKABLE);
    if (!seekable)
      return void 0;
    return seekable.split(":").map((time) => +time);
  }
  set mediaSeekable(range) {
    if (range == null) {
      this.removeAttribute(MediaUIAttributes.MEDIA_SEEKABLE);
      return;
    }
    this.setAttribute(MediaUIAttributes.MEDIA_SEEKABLE, range.join(":"));
  }
  /**
   *
   */
  get mediaSeekableEnd() {
    var _a3;
    const [, end = this.mediaDuration] = (_a3 = this.mediaSeekable) != null ? _a3 : [];
    return end;
  }
  get mediaSeekableStart() {
    var _a3;
    const [start = 0] = (_a3 = this.mediaSeekable) != null ? _a3 : [];
    return start;
  }
  /**
   * The url of the preview image
   */
  get mediaPreviewImage() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_IMAGE);
  }
  set mediaPreviewImage(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_IMAGE, value);
  }
  /**
   *
   */
  get mediaPreviewTime() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_PREVIEW_TIME);
  }
  set mediaPreviewTime(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PREVIEW_TIME, value);
  }
  /**
   *
   */
  get mediaEnded() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_ENDED);
  }
  set mediaEnded(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_ENDED, value);
  }
  /* Add a buffered progress bar */
  updateBar() {
    super.updateBar();
    this.updateBufferedBar();
    this.updateCurrentBox();
  }
  updateBufferedBar() {
    var _a3;
    const buffered = this.mediaBuffered;
    if (!buffered.length) {
      return;
    }
    let relativeBufferedEnd;
    if (!this.mediaEnded) {
      const currentTime = this.mediaCurrentTime;
      const [, bufferedEnd = this.mediaSeekableStart] = (_a3 = buffered.find(
        ([start, end]) => start <= currentTime && currentTime <= end
      )) != null ? _a3 : [];
      relativeBufferedEnd = calcRangeValueFromTime(this, bufferedEnd);
    } else {
      relativeBufferedEnd = 1;
    }
    const { style } = getOrInsertCSSRule(this.shadowRoot, "#buffered");
    style.setProperty("width", `${relativeBufferedEnd * 100}%`);
  }
  updateCurrentBox() {
    const currentSlot = this.shadowRoot.querySelector(
      'slot[name="current"]'
    );
    if (!currentSlot.assignedElements().length)
      return;
    const currentRailRule = getOrInsertCSSRule(
      this.shadowRoot,
      "#current-rail"
    );
    const currentBoxRule = getOrInsertCSSRule(
      this.shadowRoot,
      '[part~="current-box"]'
    );
    const rects = __privateMethod7(this, _getElementRects, getElementRects_fn).call(this, __privateGet20(this, _currentBox));
    const boxPos = __privateMethod7(this, _getBoxPosition, getBoxPosition_fn).call(this, rects, this.range.valueAsNumber);
    const boxShift = __privateMethod7(this, _getBoxShiftPosition, getBoxShiftPosition_fn).call(this, rects, this.range.valueAsNumber);
    currentRailRule.style.transform = `translateX(${boxPos})`;
    currentRailRule.style.setProperty("--_range-width", `${rects.range.width}`);
    currentBoxRule.style.setProperty("--_box-shift", `${boxShift}`);
    currentBoxRule.style.setProperty("--_box-width", `${rects.box.width}px`);
    currentBoxRule.style.setProperty("visibility", "initial");
  }
  handleEvent(evt) {
    super.handleEvent(evt);
    switch (evt.type) {
      case "input":
        __privateMethod7(this, _seekRequest, seekRequest_fn).call(this);
        break;
      case "pointermove":
        __privateMethod7(this, _handlePointerMove3, handlePointerMove_fn3).call(this, evt);
        break;
      case "pointerup":
      case "pointerleave":
        __privateMethod7(this, _previewRequest, previewRequest_fn).call(this, null);
        break;
      case "transitionstart":
        if (containsComposedNode(evt.target, this)) {
          setTimeout(() => __privateMethod7(this, _toggleRangeAnimation, toggleRangeAnimation_fn).call(this), 0);
        }
        break;
    }
  }
};
_rootNode = /* @__PURE__ */ new WeakMap();
_animation = /* @__PURE__ */ new WeakMap();
_boxes = /* @__PURE__ */ new WeakMap();
_previewTime = /* @__PURE__ */ new WeakMap();
_previewBox = /* @__PURE__ */ new WeakMap();
_currentBox = /* @__PURE__ */ new WeakMap();
_boxPaddingLeft = /* @__PURE__ */ new WeakMap();
_boxPaddingRight = /* @__PURE__ */ new WeakMap();
_mediaChaptersCues = /* @__PURE__ */ new WeakMap();
_toggleRangeAnimation = /* @__PURE__ */ new WeakSet();
toggleRangeAnimation_fn = function() {
  if (__privateMethod7(this, _shouldRangeAnimate, shouldRangeAnimate_fn).call(this)) {
    __privateGet20(this, _animation).start();
  } else {
    __privateGet20(this, _animation).stop();
  }
};
_shouldRangeAnimate = /* @__PURE__ */ new WeakSet();
shouldRangeAnimate_fn = function() {
  return this.isConnected && !this.mediaPaused && !this.mediaLoading && !this.mediaEnded && this.mediaSeekableEnd > 0 && isElementVisible(this);
};
_updateRange = /* @__PURE__ */ new WeakMap();
_getElementRects = /* @__PURE__ */ new WeakSet();
getElementRects_fn = function(box) {
  var _a3;
  const bounds = (_a3 = this.getAttribute("bounds") ? closestComposedNode(this, `#${this.getAttribute("bounds")}`) : this.parentElement) != null ? _a3 : this;
  const boundsRect = bounds.getBoundingClientRect();
  const rangeRect = this.range.getBoundingClientRect();
  const width = box.offsetWidth;
  const min = -(rangeRect.left - boundsRect.left - width / 2);
  const max = boundsRect.right - rangeRect.left - width / 2;
  return {
    box: { width, min, max },
    bounds: boundsRect,
    range: rangeRect
  };
};
_getBoxPosition = /* @__PURE__ */ new WeakSet();
getBoxPosition_fn = function(rects, ratio) {
  let position = `${ratio * 100}%`;
  const { width, min, max } = rects.box;
  if (!width)
    return position;
  if (!Number.isNaN(min)) {
    const pad = `var(--media-box-padding-left)`;
    const minPos = `calc(1 / var(--_range-width) * 100 * ${min}% + ${pad})`;
    position = `max(${minPos}, ${position})`;
  }
  if (!Number.isNaN(max)) {
    const pad = `var(--media-box-padding-right)`;
    const maxPos = `calc(1 / var(--_range-width) * 100 * ${max}% - ${pad})`;
    position = `min(${position}, ${maxPos})`;
  }
  return position;
};
_getBoxShiftPosition = /* @__PURE__ */ new WeakSet();
getBoxShiftPosition_fn = function(rects, ratio) {
  const { width, min, max } = rects.box;
  const pointerX = ratio * rects.range.width;
  if (pointerX < min + __privateGet20(this, _boxPaddingLeft)) {
    const offset = rects.range.left - rects.bounds.left - __privateGet20(this, _boxPaddingLeft);
    return `${pointerX - width / 2 + offset}px`;
  }
  if (pointerX > max - __privateGet20(this, _boxPaddingRight)) {
    const offset = rects.bounds.right - rects.range.right - __privateGet20(this, _boxPaddingRight);
    return `${pointerX + width / 2 - offset - rects.range.width}px`;
  }
  return 0;
};
_handlePointerMove3 = /* @__PURE__ */ new WeakSet();
handlePointerMove_fn3 = function(evt) {
  const isOverBoxes = [...__privateGet20(this, _boxes)].some(
    (b) => evt.composedPath().includes(b)
  );
  if (!this.dragging && (isOverBoxes || !evt.composedPath().includes(this))) {
    __privateMethod7(this, _previewRequest, previewRequest_fn).call(this, null);
    return;
  }
  const duration = this.mediaSeekableEnd;
  if (!duration)
    return;
  const previewRailRule = getOrInsertCSSRule(
    this.shadowRoot,
    "#preview-rail"
  );
  const previewBoxRule = getOrInsertCSSRule(
    this.shadowRoot,
    '[part~="preview-box"]'
  );
  const rects = __privateMethod7(this, _getElementRects, getElementRects_fn).call(this, __privateGet20(this, _previewBox));
  let pointerRatio = (evt.clientX - rects.range.left) / rects.range.width;
  pointerRatio = Math.max(0, Math.min(1, pointerRatio));
  const boxPos = __privateMethod7(this, _getBoxPosition, getBoxPosition_fn).call(this, rects, pointerRatio);
  const boxShift = __privateMethod7(this, _getBoxShiftPosition, getBoxShiftPosition_fn).call(this, rects, pointerRatio);
  previewRailRule.style.transform = `translateX(${boxPos})`;
  previewRailRule.style.setProperty("--_range-width", `${rects.range.width}`);
  previewBoxRule.style.setProperty("--_box-shift", `${boxShift}`);
  previewBoxRule.style.setProperty("--_box-width", `${rects.box.width}px`);
  const diff = Math.round(__privateGet20(this, _previewTime)) - Math.round(pointerRatio * duration);
  if (Math.abs(diff) < 1 && pointerRatio > 0.01 && pointerRatio < 0.99)
    return;
  __privateSet19(this, _previewTime, pointerRatio * duration);
  __privateMethod7(this, _previewRequest, previewRequest_fn).call(this, __privateGet20(this, _previewTime));
};
_previewRequest = /* @__PURE__ */ new WeakSet();
previewRequest_fn = function(detail) {
  this.dispatchEvent(
    new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_PREVIEW_REQUEST, {
      composed: true,
      bubbles: true,
      detail
    })
  );
};
_seekRequest = /* @__PURE__ */ new WeakSet();
seekRequest_fn = function() {
  __privateGet20(this, _animation).stop();
  const detail = calcTimeFromRangeValue(this);
  this.dispatchEvent(
    new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
      composed: true,
      bubbles: true,
      detail
    })
  );
};
if (!GlobalThis.customElements.get("media-time-range")) {
  GlobalThis.customElements.define("media-time-range", MediaTimeRange);
}

// ../../node_modules/media-chrome/dist/media-tooltip.js
var Attributes11 = {
  PLACEMENT: "placement",
  BOUNDS: "bounds"
};
var template11 = Document2.createElement("template");
template11.innerHTML = /*html*/
`
  <style>
    :host {
      --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
      --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
      --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
      --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
      --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
      position: relative;
      pointer-events: none;
      display: var(--media-tooltip-display, inline-flex);
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      z-index: var(--media-tooltip-z-index, 1);
      background: var(--_tooltip-background);
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      font: var(--media-font,
        var(--media-font-weight, 400)
        var(--media-font-size, 13px) /
        var(--media-text-content-height, var(--media-control-height, 18px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      padding: var(--media-tooltip-padding, .35em .7em);
      border: var(--media-tooltip-border, none);
      border-radius: var(--media-tooltip-border-radius, 5px);
      filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
      white-space: var(--media-tooltip-white-space, nowrap);
    }

    :host([hidden]) {
      display: none;
    }

    img, svg {
      display: inline-block;
    }

    #arrow {
      position: absolute;
      width: 0px;
      height: 0px;
      border-style: solid;
      display: var(--media-tooltip-arrow-display, block);
    }

    :host(:not([placement])),
    :host([placement="top"]) {
      position: absolute;
      bottom: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host(:not([placement])) #arrow,
    :host([placement="top"]) #arrow {
      top: 100%;
      left: 50%;
      border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
      border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="right"]) {
      position: absolute;
      left: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="right"]) #arrow {
      top: 50%;
      right: 100%;
      border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
      border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
      transform: translate(0, -50%);
    }

    :host([placement="bottom"]) {
      position: absolute;
      top: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host([placement="bottom"]) #arrow {
      bottom: 100%;
      left: 50%;
      border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
      border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="left"]) {
      position: absolute;
      right: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="left"]) #arrow {
      top: 50%;
      left: 100%;
      border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
      border-color: transparent transparent transparent var(--_tooltip-arrow-background);
      transform: translate(0, -50%);
    }
    
    :host([placement="none"]) #arrow {
      display: none;
    }

  </style>
  <slot></slot>
  <div id="arrow"></div>
`;
var MediaTooltip = class extends GlobalThis.HTMLElement {
  constructor() {
    super();
    this.updateXOffset = () => {
      var _a3;
      if (!isElementVisible(this, { checkOpacity: false, checkVisibilityCSS: false }))
        return;
      const placement = this.placement;
      if (placement === "left" || placement === "right") {
        this.style.removeProperty("--media-tooltip-offset-x");
        return;
      }
      const tooltipStyle = getComputedStyle(this);
      const containingEl = (_a3 = closestComposedNode(this, "#" + this.bounds)) != null ? _a3 : getMediaController(this);
      if (!containingEl)
        return;
      const { x: containerX, width: containerWidth } = containingEl.getBoundingClientRect();
      const { x: tooltipX, width: tooltipWidth } = this.getBoundingClientRect();
      const tooltipRight = tooltipX + tooltipWidth;
      const containerRight = containerX + containerWidth;
      const offsetXVal = tooltipStyle.getPropertyValue(
        "--media-tooltip-offset-x"
      );
      const currOffsetX = offsetXVal ? parseFloat(offsetXVal.replace("px", "")) : 0;
      const marginVal = tooltipStyle.getPropertyValue(
        "--media-tooltip-container-margin"
      );
      const currMargin = marginVal ? parseFloat(marginVal.replace("px", "")) : 0;
      const leftDiff = tooltipX - containerX + currOffsetX - currMargin;
      const rightDiff = tooltipRight - containerRight + currOffsetX + currMargin;
      if (leftDiff < 0) {
        this.style.setProperty("--media-tooltip-offset-x", `${leftDiff}px`);
        return;
      }
      if (rightDiff > 0) {
        this.style.setProperty("--media-tooltip-offset-x", `${rightDiff}px`);
        return;
      }
      this.style.removeProperty("--media-tooltip-offset-x");
    };
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template11.content.cloneNode(true));
    }
    this.arrowEl = this.shadowRoot.querySelector("#arrow");
    if (Object.prototype.hasOwnProperty.call(this, "placement")) {
      const placement = this.placement;
      delete this.placement;
      this.placement = placement;
    }
  }
  static get observedAttributes() {
    return [Attributes11.PLACEMENT, Attributes11.BOUNDS];
  }
  /**
   * Get or set tooltip placement
   */
  get placement() {
    return getStringAttr(this, Attributes11.PLACEMENT);
  }
  set placement(value) {
    setStringAttr(this, Attributes11.PLACEMENT, value);
  }
  /**
   * Get or set tooltip container ID selector that will constrain the tooltips
   * horizontal position.
   */
  get bounds() {
    return getStringAttr(this, Attributes11.BOUNDS);
  }
  set bounds(value) {
    setStringAttr(this, Attributes11.BOUNDS, value);
  }
};
if (!GlobalThis.customElements.get("media-tooltip")) {
  GlobalThis.customElements.define("media-tooltip", MediaTooltip);
}

// ../../node_modules/media-chrome/dist/media-volume-range.js
var DEFAULT_VOLUME = 1;
var toVolume = (el) => {
  if (el.mediaMuted)
    return 0;
  return el.mediaVolume;
};
var formatAsPercentString = (value) => `${Math.round(value * 100)}%`;
var MediaVolumeRange = class extends MediaChromeRange {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_VOLUME,
      MediaUIAttributes.MEDIA_MUTED,
      MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE
    ];
  }
  constructor() {
    super();
    this.range.addEventListener("input", () => {
      const detail = this.range.value;
      const evt = new GlobalThis.CustomEvent(
        MediaUIEvents.MEDIA_VOLUME_REQUEST,
        {
          composed: true,
          bubbles: true,
          detail
        }
      );
      this.dispatchEvent(evt);
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.range.setAttribute("aria-label", t("volume"));
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_VOLUME || attrName === MediaUIAttributes.MEDIA_MUTED) {
      this.range.valueAsNumber = toVolume(this);
      this.range.setAttribute(
        "aria-valuetext",
        formatAsPercentString(this.range.valueAsNumber)
      );
      this.updateBar();
    }
  }
  /**
   *
   */
  get mediaVolume() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_VOLUME, DEFAULT_VOLUME);
  }
  set mediaVolume(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_VOLUME, value);
  }
  /**
   * Is the media currently muted
   */
  get mediaMuted() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_MUTED);
  }
  set mediaMuted(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_MUTED, value);
  }
  /**
   * The volume unavailability state
   */
  get mediaVolumeUnavailable() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE);
  }
  set mediaVolumeUnavailable(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE, value);
  }
};
if (!GlobalThis.customElements.get("media-volume-range")) {
  GlobalThis.customElements.define("media-volume-range", MediaVolumeRange);
}

// src/index.ts
var import_mux_video2 = require("@mux/mux-video");
var import_playback_core5 = require("@mux/playback-core");

// src/video-api.ts
var import_mux_video = require("@mux/mux-video");

// src/logger.ts
var import_playback_core2 = require("@mux/playback-core");

// src/helpers.ts
var import_playback_core = require("@mux/playback-core");

// src/utils.ts
function stylePropsToString(props) {
  let style = "";
  Object.entries(props).forEach(([key, value]) => {
    if (value == null) return;
    style += `${kebabCase(key)}: ${value}; `;
  });
  return style ? style.trim() : void 0;
}
function kebabCase(name) {
  return name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function camelCase2(name) {
  return name.replace(/[-_]([a-z])/g, (_$0, $1) => $1.toUpperCase());
}
function toNumberOrUndefined(val) {
  if (val == null) return void 0;
  const num = +val;
  return !Number.isNaN(num) ? num : void 0;
}
function toQuery(obj) {
  const params = toParams(obj).toString();
  return params ? "?" + params : "";
}
function toParams(obj) {
  const params = {};
  for (const key in obj) {
    if (obj[key] != null) params[key] = obj[key];
  }
  return new URLSearchParams(params);
}
var containsComposedNode2 = (rootNode, childNode) => {
  if (!rootNode || !childNode) return false;
  if (rootNode.contains(childNode)) return true;
  return containsComposedNode2(rootNode, childNode.getRootNode().host);
};

// src/helpers.ts
var MUX_VIDEO_DOMAIN = "mux.com";
var getEnvPlayerVersion = () => {
  try {
    return "3.3.1";
  } catch {
  }
  return "UNKNOWN";
};
var player_version = getEnvPlayerVersion();
var getPlayerVersion = () => player_version;
var getPosterURLFromPlaybackId = (playbackId, {
  token,
  customDomain: domain = MUX_VIDEO_DOMAIN,
  thumbnailTime,
  programTime: program_time
} = {}) => {
  var _a3;
  const time = token == null ? thumbnailTime : void 0;
  const { aud } = (_a3 = (0, import_playback_core.parseJwt)(token)) != null ? _a3 : {};
  if (token && aud !== "t") {
    return;
  }
  return `https://image.${domain}/${playbackId}/thumbnail.webp${toQuery({
    token,
    time,
    program_time
  })}`;
};
var getStoryboardURLFromPlaybackId = (playbackId, {
  token,
  customDomain: domain = MUX_VIDEO_DOMAIN,
  programStartTime: program_start_time,
  programEndTime: program_end_time
} = {}) => {
  var _a3;
  const { aud } = (_a3 = (0, import_playback_core.parseJwt)(token)) != null ? _a3 : {};
  if (token && aud !== "s") {
    return;
  }
  return `https://image.${domain}/${playbackId}/storyboard.vtt${toQuery({
    token,
    format: "webp",
    program_start_time,
    program_end_time
  })}`;
};
var getStreamTypeFromAttr = (streamTypeAttr) => {
  if (!streamTypeAttr) return void 0;
  if ([import_playback_core.StreamTypes.LIVE, import_playback_core.StreamTypes.ON_DEMAND].includes(streamTypeAttr))
    return streamTypeAttr;
  if (streamTypeAttr == null ? void 0 : streamTypeAttr.includes("live")) return import_playback_core.StreamTypes.LIVE;
  return void 0;
};
var attrToPropNameMap = {
  crossorigin: "crossOrigin",
  playsinline: "playsInline"
};
function toPropName(attrName) {
  var _a3;
  return (_a3 = attrToPropNameMap[attrName]) != null ? _a3 : camelCase2(attrName);
}
var _el2, _attr2, _tokens2;
var AttributeTokenList2 = class {
  constructor(el, attr) {
    __privateAdd(this, _el2);
    __privateAdd(this, _attr2);
    __privateAdd(this, _tokens2, []);
    __privateSet(this, _el2, el);
    __privateSet(this, _attr2, attr);
  }
  [Symbol.iterator]() {
    return __privateGet(this, _tokens2).values();
  }
  get length() {
    return __privateGet(this, _tokens2).length;
  }
  get value() {
    var _a3;
    return (_a3 = __privateGet(this, _tokens2).join(" ")) != null ? _a3 : "";
  }
  set value(val) {
    var _a3;
    if (val === this.value) return;
    __privateSet(this, _tokens2, []);
    this.add(...(_a3 = val == null ? void 0 : val.split(" ")) != null ? _a3 : []);
  }
  toString() {
    return this.value;
  }
  item(index) {
    return __privateGet(this, _tokens2)[index];
  }
  values() {
    return __privateGet(this, _tokens2).values();
  }
  keys() {
    return __privateGet(this, _tokens2).keys();
  }
  forEach(callback) {
    __privateGet(this, _tokens2).forEach(callback);
  }
  add(...tokens) {
    var _a3, _b2;
    tokens.forEach((t2) => {
      if (!this.contains(t2)) __privateGet(this, _tokens2).push(t2);
    });
    if (this.value === "" && !((_a3 = __privateGet(this, _el2)) == null ? void 0 : _a3.hasAttribute(`${__privateGet(this, _attr2)}`))) {
      return;
    }
    (_b2 = __privateGet(this, _el2)) == null ? void 0 : _b2.setAttribute(`${__privateGet(this, _attr2)}`, `${this.value}`);
  }
  remove(...tokens) {
    var _a3;
    tokens.forEach((t2) => {
      __privateGet(this, _tokens2).splice(__privateGet(this, _tokens2).indexOf(t2), 1);
    });
    (_a3 = __privateGet(this, _el2)) == null ? void 0 : _a3.setAttribute(`${__privateGet(this, _attr2)}`, `${this.value}`);
  }
  contains(token) {
    return __privateGet(this, _tokens2).includes(token);
  }
  toggle(token, force) {
    if (typeof force !== "undefined") {
      if (force) {
        this.add(token);
        return true;
      } else {
        this.remove(token);
        return false;
      }
    }
    if (this.contains(token)) {
      this.remove(token);
      return false;
    }
    this.add(token);
    return true;
  }
  replace(oldToken, newToken) {
    this.remove(oldToken);
    this.add(newToken);
  }
};
_el2 = new WeakMap();
_attr2 = new WeakMap();
_tokens2 = new WeakMap();

// src/logger.ts
var prefix = `[mux-player ${getPlayerVersion()}]`;
function warn(...args) {
  console.warn(prefix, ...args);
}
function error(...args) {
  console.error(prefix, ...args);
}
function devlog(opts) {
  var _a3;
  let message = (_a3 = opts.message) != null ? _a3 : "";
  if (opts.context) {
    message += ` ${opts.context}`;
  }
  if (opts.file) {
    const githubErrorsBase = "https://github.com/muxinc/elements/blob/main/errors/";
    message += ` ${(0, import_playback_core2.i18n)(`Read more: `)}
${githubErrorsBase}${opts.file}`;
  }
  warn(message);
}

// src/video-api.ts
var AllowedVideoAttributes = {
  AUTOPLAY: "autoplay",
  CROSSORIGIN: "crossorigin",
  LOOP: "loop",
  MUTED: "muted",
  PLAYSINLINE: "playsinline",
  PRELOAD: "preload"
};
var CustomVideoAttributes = {
  VOLUME: "volume",
  PLAYBACKRATE: "playbackrate",
  // This muted attribute also reflects to the muted property while the muted
  // attribute on a native video element reflects only to video.defaultMuted.
  MUTED: "muted",
  /** @TODO Consider renaming to a more generic identifier e.g. media-element-name (CJP) */
  MUX_VIDEO_ELEMENT: "mux-video-element"
};
var Attributes12 = {
  ...AllowedVideoAttributes,
  ...CustomVideoAttributes
};
var emptyTimeRanges2 = Object.freeze({
  length: 0,
  start(index) {
    const unsignedIdx = index >>> 0;
    if (unsignedIdx >= this.length) {
      throw new DOMException(
        `Failed to execute 'start' on 'TimeRanges': The index provided (${unsignedIdx}) is greater than or equal to the maximum bound (${this.length}).`
      );
    }
    return 0;
  },
  end(index) {
    const unsignedIdx = index >>> 0;
    if (unsignedIdx >= this.length) {
      throw new DOMException(
        `Failed to execute 'end' on 'TimeRanges': The index provided (${unsignedIdx}) is greater than or equal to the maximum bound (${this.length}).`
      );
    }
    return 0;
  }
});
var AllowedVideoEvents = import_mux_video.VideoEvents.filter((type) => type !== "error");
var AllowedVideoAttributeNames = Object.values(AllowedVideoAttributes).filter(
  (name) => AllowedVideoAttributes.PLAYSINLINE !== name
);
var CustomVideoAttributesNames = Object.values(CustomVideoAttributes);
var AttributeNames = [...AllowedVideoAttributeNames, ...CustomVideoAttributesNames];
var VideoApiElement = class extends internalGlobalThis.HTMLElement {
  static get observedAttributes() {
    return AttributeNames;
  }
  /**
   * Create a HTMLVideoElement like API with opt-in methods to expose publicly.
   * This class is intentionally not extending MuxVideoElement but composing it
   * to opt in methods and not expose too much. More flexibility in the future.
   */
  constructor() {
    super();
  }
  /**
   * Gets called from mux-player when mux-video is rendered and upgraded.
   * We might just merge VideoApiElement in MuxPlayerElement and remove this?
   */
  init() {
    AllowedVideoEvents.forEach((type) => {
      var _a3;
      (_a3 = this.media) == null ? void 0 : _a3.addEventListener(type, (evt) => {
        this.dispatchEvent(new Event(evt.type));
      });
    });
  }
  attributeChangedCallback(attrName, _oldValue, newValue) {
    var _a3, _b2;
    switch (attrName) {
      case CustomVideoAttributes.MUTED: {
        if (this.media) {
          this.media.muted = newValue != null;
          this.media.defaultMuted = newValue != null;
        }
        return;
      }
      case CustomVideoAttributes.VOLUME: {
        const val = (_a3 = toNumberOrUndefined(newValue)) != null ? _a3 : 1;
        if (this.media) {
          this.media.volume = val;
        }
        return;
      }
      case CustomVideoAttributes.PLAYBACKRATE: {
        const val = (_b2 = toNumberOrUndefined(newValue)) != null ? _b2 : 1;
        if (this.media) {
          this.media.playbackRate = val;
          this.media.defaultPlaybackRate = val;
        }
        return;
      }
    }
  }
  play() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.play()) != null ? _b2 : Promise.reject();
  }
  pause() {
    var _a3;
    (_a3 = this.media) == null ? void 0 : _a3.pause();
  }
  load() {
    var _a3;
    (_a3 = this.media) == null ? void 0 : _a3.load();
  }
  requestCast(options) {
    var _a3;
    return (_a3 = this.media) == null ? void 0 : _a3.requestCast(options);
  }
  get muxVideoElement() {
    var _a3;
    return (_a3 = this.getAttribute(Attributes12.MUX_VIDEO_ELEMENT)) != null ? _a3 : "mux-video";
  }
  get media() {
    var _a3;
    return (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector(this.muxVideoElement);
  }
  get audioTracks() {
    return this.media.audioTracks;
  }
  get videoTracks() {
    return this.media.videoTracks;
  }
  get audioRenditions() {
    return this.media.audioRenditions;
  }
  get videoRenditions() {
    return this.media.videoRenditions;
  }
  get paused() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.paused) != null ? _b2 : true;
  }
  get duration() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.duration) != null ? _b2 : NaN;
  }
  get ended() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.ended) != null ? _b2 : false;
  }
  get buffered() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.buffered) != null ? _b2 : emptyTimeRanges2;
  }
  get seekable() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.seekable) != null ? _b2 : emptyTimeRanges2;
  }
  get readyState() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.readyState) != null ? _b2 : 0;
  }
  get videoWidth() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.videoWidth) != null ? _b2 : 0;
  }
  get videoHeight() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.videoHeight) != null ? _b2 : 0;
  }
  get currentSrc() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.currentSrc) != null ? _b2 : "";
  }
  get currentTime() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.currentTime) != null ? _b2 : 0;
  }
  set currentTime(val) {
    if (this.media) {
      this.media.currentTime = Number(val);
    }
  }
  get volume() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.volume) != null ? _b2 : 1;
  }
  set volume(val) {
    if (this.media) {
      this.media.volume = Number(val);
    }
  }
  get playbackRate() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.playbackRate) != null ? _b2 : 1;
  }
  set playbackRate(val) {
    if (this.media) {
      this.media.playbackRate = Number(val);
    }
  }
  get defaultPlaybackRate() {
    var _a3;
    return (_a3 = toNumberOrUndefined(this.getAttribute(CustomVideoAttributes.PLAYBACKRATE))) != null ? _a3 : 1;
  }
  set defaultPlaybackRate(val) {
    if (val != null) {
      this.setAttribute(CustomVideoAttributes.PLAYBACKRATE, `${val}`);
    } else {
      this.removeAttribute(CustomVideoAttributes.PLAYBACKRATE);
    }
  }
  get crossOrigin() {
    return getVideoAttribute(this, AllowedVideoAttributes.CROSSORIGIN);
  }
  set crossOrigin(val) {
    this.setAttribute(AllowedVideoAttributes.CROSSORIGIN, `${val}`);
  }
  get autoplay() {
    return getVideoAttribute(this, AllowedVideoAttributes.AUTOPLAY) != null;
  }
  set autoplay(val) {
    if (val) {
      this.setAttribute(AllowedVideoAttributes.AUTOPLAY, typeof val === "string" ? val : "");
    } else {
      this.removeAttribute(AllowedVideoAttributes.AUTOPLAY);
    }
  }
  get loop() {
    return getVideoAttribute(this, AllowedVideoAttributes.LOOP) != null;
  }
  set loop(val) {
    if (val) {
      this.setAttribute(AllowedVideoAttributes.LOOP, "");
    } else {
      this.removeAttribute(AllowedVideoAttributes.LOOP);
    }
  }
  get muted() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.muted) != null ? _b2 : false;
  }
  set muted(val) {
    if (this.media) {
      this.media.muted = Boolean(val);
    }
  }
  get defaultMuted() {
    return getVideoAttribute(this, AllowedVideoAttributes.MUTED) != null;
  }
  set defaultMuted(val) {
    if (val) {
      this.setAttribute(AllowedVideoAttributes.MUTED, "");
    } else {
      this.removeAttribute(AllowedVideoAttributes.MUTED);
    }
  }
  get playsInline() {
    return getVideoAttribute(this, AllowedVideoAttributes.PLAYSINLINE) != null;
  }
  set playsInline(val) {
    error("playsInline is set to true by default and is not currently supported as a setter.");
  }
  get preload() {
    return this.media ? this.media.preload : this.getAttribute("preload");
  }
  set preload(val) {
    if (["", "none", "metadata", "auto"].includes(val)) {
      this.setAttribute(AllowedVideoAttributes.PRELOAD, val);
    } else {
      this.removeAttribute(AllowedVideoAttributes.PRELOAD);
    }
  }
};
function getVideoAttribute(el, name) {
  return el.media ? el.media.getAttribute(name) : el.getAttribute(name);
}
var video_api_default = VideoApiElement;

// ../../node_modules/media-chrome/dist/utils/template-parts.js
var __accessCheck21 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet21 = (obj, member, getter) => {
  __accessCheck21(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd21 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet20 = (obj, member, value, setter) => {
  __accessCheck21(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _parts;
var _processor;
var _items;
var _value;
var _element;
var _attributeName;
var _namespaceURI;
var _list;
var list_get;
var _parentNode;
var _nodes;
var ELEMENT = 1;
var STRING = 0;
var PART = 1;
var defaultProcessor = {
  processCallback(instance, parts, state) {
    if (!state)
      return;
    for (const [expression, part] of parts) {
      if (expression in state) {
        const value = state[expression];
        if (typeof value === "boolean" && part instanceof AttrPart && typeof part.element[part.attributeName] === "boolean") {
          part.booleanValue = value;
        } else if (typeof value === "function" && part instanceof AttrPart) {
          part.element[part.attributeName] = value;
        } else {
          part.value = value;
        }
      }
    }
  }
};
var TemplateInstance = class extends GlobalThis.DocumentFragment {
  constructor(template19, state, processor2 = defaultProcessor) {
    var _a3;
    super();
    __privateAdd21(this, _parts, void 0);
    __privateAdd21(this, _processor, void 0);
    this.append(template19.content.cloneNode(true));
    __privateSet20(this, _parts, parse(this));
    __privateSet20(this, _processor, processor2);
    (_a3 = processor2.createCallback) == null ? void 0 : _a3.call(processor2, this, __privateGet21(this, _parts), state);
    processor2.processCallback(this, __privateGet21(this, _parts), state);
  }
  update(state) {
    __privateGet21(this, _processor).processCallback(this, __privateGet21(this, _parts), state);
  }
};
_parts = /* @__PURE__ */ new WeakMap();
_processor = /* @__PURE__ */ new WeakMap();
var parse = (element, parts = []) => {
  let type, value;
  for (const attr of element.attributes || []) {
    if (attr.value.includes("{{")) {
      const list = new AttrPartList();
      for ([type, value] of tokenize(attr.value)) {
        if (!type)
          list.append(value);
        else {
          const part = new AttrPart(element, attr.name, attr.namespaceURI);
          list.append(part);
          parts.push([value, part]);
        }
      }
      attr.value = list.toString();
    }
  }
  for (const node of element.childNodes) {
    if (node.nodeType === ELEMENT && !(node instanceof HTMLTemplateElement)) {
      parse(node, parts);
    } else {
      const data = node.data;
      if (node.nodeType === ELEMENT || data.includes("{{")) {
        const items = [];
        if (data) {
          for ([type, value] of tokenize(data))
            if (!type)
              items.push(new Text(value));
            else {
              const part = new ChildNodePart(element);
              items.push(part);
              parts.push([value, part]);
            }
        } else if (node instanceof HTMLTemplateElement) {
          const part = new InnerTemplatePart(element, node);
          items.push(part);
          parts.push([part.expression, part]);
        }
        node.replaceWith(
          ...items.flatMap((part) => part.replacementNodes || [part])
        );
      }
    }
  }
  return parts;
};
var mem = {};
var tokenize = (text) => {
  let value = "", open = 0, tokens = mem[text], i = 0, c;
  if (tokens)
    return tokens;
  else
    tokens = [];
  for (; c = text[i]; i++) {
    if (c === "{" && text[i + 1] === "{" && text[i - 1] !== "\\" && text[i + 2] && ++open == 1) {
      if (value)
        tokens.push([STRING, value]);
      value = "";
      i++;
    } else if (c === "}" && text[i + 1] === "}" && text[i - 1] !== "\\" && !--open) {
      tokens.push([PART, value.trim()]);
      value = "";
      i++;
    } else
      value += c || "";
  }
  if (value)
    tokens.push([STRING, (open > 0 ? "{{" : "") + value]);
  return mem[text] = tokens;
};
var FRAGMENT = 11;
var Part = class {
  get value() {
    return "";
  }
  set value(val) {
  }
  toString() {
    return this.value;
  }
};
var attrPartToList = /* @__PURE__ */ new WeakMap();
var AttrPartList = class {
  constructor() {
    __privateAdd21(this, _items, []);
  }
  [Symbol.iterator]() {
    return __privateGet21(this, _items).values();
  }
  get length() {
    return __privateGet21(this, _items).length;
  }
  item(index) {
    return __privateGet21(this, _items)[index];
  }
  append(...items) {
    for (const item of items) {
      if (item instanceof AttrPart) {
        attrPartToList.set(item, this);
      }
      __privateGet21(this, _items).push(item);
    }
  }
  toString() {
    return __privateGet21(this, _items).join("");
  }
};
_items = /* @__PURE__ */ new WeakMap();
var AttrPart = class extends Part {
  constructor(element, attributeName, namespaceURI) {
    super();
    __privateAdd21(this, _list);
    __privateAdd21(this, _value, "");
    __privateAdd21(this, _element, void 0);
    __privateAdd21(this, _attributeName, void 0);
    __privateAdd21(this, _namespaceURI, void 0);
    __privateSet20(this, _element, element);
    __privateSet20(this, _attributeName, attributeName);
    __privateSet20(this, _namespaceURI, namespaceURI);
  }
  get attributeName() {
    return __privateGet21(this, _attributeName);
  }
  get attributeNamespace() {
    return __privateGet21(this, _namespaceURI);
  }
  get element() {
    return __privateGet21(this, _element);
  }
  get value() {
    return __privateGet21(this, _value);
  }
  set value(newValue) {
    if (__privateGet21(this, _value) === newValue)
      return;
    __privateSet20(this, _value, newValue);
    if (!__privateGet21(this, _list, list_get) || __privateGet21(this, _list, list_get).length === 1) {
      if (newValue == null) {
        __privateGet21(this, _element).removeAttributeNS(
          __privateGet21(this, _namespaceURI),
          __privateGet21(this, _attributeName)
        );
      } else {
        __privateGet21(this, _element).setAttributeNS(
          __privateGet21(this, _namespaceURI),
          __privateGet21(this, _attributeName),
          newValue
        );
      }
    } else {
      __privateGet21(this, _element).setAttributeNS(
        __privateGet21(this, _namespaceURI),
        __privateGet21(this, _attributeName),
        __privateGet21(this, _list, list_get).toString()
      );
    }
  }
  get booleanValue() {
    return __privateGet21(this, _element).hasAttributeNS(
      __privateGet21(this, _namespaceURI),
      __privateGet21(this, _attributeName)
    );
  }
  set booleanValue(value) {
    if (!__privateGet21(this, _list, list_get) || __privateGet21(this, _list, list_get).length === 1)
      this.value = value ? "" : null;
    else
      throw new DOMException("Value is not fully templatized");
  }
};
_value = /* @__PURE__ */ new WeakMap();
_element = /* @__PURE__ */ new WeakMap();
_attributeName = /* @__PURE__ */ new WeakMap();
_namespaceURI = /* @__PURE__ */ new WeakMap();
_list = /* @__PURE__ */ new WeakSet();
list_get = function() {
  return attrPartToList.get(this);
};
var ChildNodePart = class extends Part {
  constructor(parentNode, nodes) {
    super();
    __privateAdd21(this, _parentNode, void 0);
    __privateAdd21(this, _nodes, void 0);
    __privateSet20(this, _parentNode, parentNode);
    __privateSet20(this, _nodes, nodes ? [...nodes] : [new Text()]);
  }
  get replacementNodes() {
    return __privateGet21(this, _nodes);
  }
  get parentNode() {
    return __privateGet21(this, _parentNode);
  }
  get nextSibling() {
    return __privateGet21(this, _nodes)[__privateGet21(this, _nodes).length - 1].nextSibling;
  }
  get previousSibling() {
    return __privateGet21(this, _nodes)[0].previousSibling;
  }
  // FIXME: not sure why do we need string serialization here? Just because parent class has type DOMString?
  get value() {
    return __privateGet21(this, _nodes).map((node) => node.textContent).join("");
  }
  set value(newValue) {
    this.replace(newValue);
  }
  replace(...nodes) {
    const normalisedNodes = nodes.flat().flatMap(
      (node) => node == null ? [new Text()] : node.forEach ? [...node] : node.nodeType === FRAGMENT ? [...node.childNodes] : node.nodeType ? [node] : [new Text(node)]
    );
    if (!normalisedNodes.length)
      normalisedNodes.push(new Text());
    __privateSet20(this, _nodes, swapdom(
      __privateGet21(this, _nodes)[0].parentNode,
      __privateGet21(this, _nodes),
      normalisedNodes,
      this.nextSibling
    ));
  }
};
_parentNode = /* @__PURE__ */ new WeakMap();
_nodes = /* @__PURE__ */ new WeakMap();
var InnerTemplatePart = class extends ChildNodePart {
  constructor(parentNode, template19) {
    const directive = template19.getAttribute("directive") || template19.getAttribute("type");
    let expression = template19.getAttribute("expression") || template19.getAttribute(directive) || "";
    if (expression.startsWith("{{"))
      expression = expression.trim().slice(2, -2).trim();
    super(parentNode);
    this.expression = expression;
    this.template = template19;
    this.directive = directive;
  }
};
function swapdom(parent, a, b, end = null) {
  let i = 0, cur, next, bi, n = b.length, m = a.length;
  while (i < n && i < m && a[i] == b[i])
    i++;
  while (i < n && i < m && b[n - 1] == a[m - 1])
    end = b[--m, --n];
  if (i == m)
    while (i < n)
      parent.insertBefore(b[i++], end);
  if (i == n)
    while (i < m)
      parent.removeChild(a[i++]);
  else {
    cur = a[i];
    while (i < n) {
      bi = b[i++], next = cur ? cur.nextSibling : end;
      if (cur == bi)
        cur = next;
      else if (i < n && b[i] == next)
        parent.replaceChild(bi, cur), cur = next;
      else
        parent.insertBefore(bi, cur);
    }
    while (cur != end)
      next = cur.nextSibling, parent.removeChild(cur), cur = next;
  }
  return b;
}

// ../../node_modules/media-chrome/dist/utils/template-processor.js
var pipeModifiers = {
  string: (value) => String(value)
};
var PartialTemplate = class {
  constructor(template19) {
    this.template = template19;
    this.state = void 0;
  }
};
var templates = /* @__PURE__ */ new WeakMap();
var templateInstances = /* @__PURE__ */ new WeakMap();
var Directives = {
  partial: (part, state) => {
    state[part.expression] = new PartialTemplate(part.template);
  },
  if: (part, state) => {
    var _a3;
    if (evaluateExpression(part.expression, state)) {
      if (templates.get(part) !== part.template) {
        templates.set(part, part.template);
        const tpl = new TemplateInstance(part.template, state, processor);
        part.replace(tpl);
        templateInstances.set(part, tpl);
      } else {
        (_a3 = templateInstances.get(part)) == null ? void 0 : _a3.update(state);
      }
    } else {
      part.replace("");
      templates.delete(part);
      templateInstances.delete(part);
    }
  }
};
var DirectiveNames = Object.keys(Directives);
var processor = {
  processCallback(instance, parts, state) {
    var _a3, _b2;
    if (!state)
      return;
    for (const [expression, part] of parts) {
      if (part instanceof InnerTemplatePart) {
        if (!part.directive) {
          const directive = DirectiveNames.find(
            (n) => part.template.hasAttribute(n)
          );
          if (directive) {
            part.directive = directive;
            part.expression = part.template.getAttribute(directive);
          }
        }
        (_a3 = Directives[part.directive]) == null ? void 0 : _a3.call(Directives, part, state);
        continue;
      }
      let value = evaluateExpression(expression, state);
      if (value instanceof PartialTemplate) {
        if (templates.get(part) !== value.template) {
          templates.set(part, value.template);
          value = new TemplateInstance(value.template, value.state, processor);
          part.value = value;
          templateInstances.set(part, value);
        } else {
          (_b2 = templateInstances.get(part)) == null ? void 0 : _b2.update(value.state);
        }
        continue;
      }
      if (value) {
        if (part instanceof AttrPart) {
          if (part.attributeName.startsWith("aria-")) {
            value = String(value);
          }
        }
        if (part instanceof AttrPart) {
          if (typeof value === "boolean") {
            part.booleanValue = value;
          } else if (typeof value === "function") {
            part.element[part.attributeName] = value;
          } else {
            part.value = value;
          }
        } else {
          part.value = value;
          templates.delete(part);
          templateInstances.delete(part);
        }
      } else {
        if (part instanceof AttrPart) {
          part.value = void 0;
        } else {
          part.value = void 0;
          templates.delete(part);
          templateInstances.delete(part);
        }
      }
    }
  }
};
var operators = {
  "!": (a) => !a,
  "!!": (a) => !!a,
  "==": (a, b) => a == b,
  "!=": (a, b) => a != b,
  ">": (a, b) => a > b,
  ">=": (a, b) => a >= b,
  "<": (a, b) => a < b,
  "<=": (a, b) => a <= b,
  "??": (a, b) => a != null ? a : b,
  "|": (a, b) => {
    var _a3;
    return (_a3 = pipeModifiers[b]) == null ? void 0 : _a3.call(pipeModifiers, a);
  }
};
function tokenizeExpression(expr) {
  return tokenize2(expr, {
    boolean: /true|false/,
    number: /-?\d+\.?\d*/,
    string: /(["'])((?:\\.|[^\\])*?)\1/,
    operator: /[!=><][=!]?|\?\?|\|/,
    ws: /\s+/,
    param: /[$a-z_][$\w]*/i
  }).filter(({ type }) => type !== "ws");
}
function evaluateExpression(expr, state = {}) {
  var _a3, _b2, _c, _d, _e, _f, _g;
  const tokens = tokenizeExpression(expr);
  if (tokens.length === 0 || tokens.some(({ type }) => !type)) {
    return invalidExpression(expr);
  }
  if (((_a3 = tokens[0]) == null ? void 0 : _a3.token) === ">") {
    const partial = state[(_b2 = tokens[1]) == null ? void 0 : _b2.token];
    if (!partial) {
      return invalidExpression(expr);
    }
    const partialState = { ...state };
    partial.state = partialState;
    const args = tokens.slice(2);
    for (let i = 0; i < args.length; i += 3) {
      const name = (_c = args[i]) == null ? void 0 : _c.token;
      const operator = (_d = args[i + 1]) == null ? void 0 : _d.token;
      const value = (_e = args[i + 2]) == null ? void 0 : _e.token;
      if (name && operator === "=") {
        partialState[name] = getParamValue(value, state);
      }
    }
    return partial;
  }
  if (tokens.length === 1) {
    if (!isValidParam(tokens[0])) {
      return invalidExpression(expr);
    }
    return getParamValue(tokens[0].token, state);
  }
  if (tokens.length === 2) {
    const operator = (_f = tokens[0]) == null ? void 0 : _f.token;
    const run = operators[operator];
    if (!run || !isValidParam(tokens[1])) {
      return invalidExpression(expr);
    }
    const a = getParamValue(tokens[1].token, state);
    return run(a);
  }
  if (tokens.length === 3) {
    const operator = (_g = tokens[1]) == null ? void 0 : _g.token;
    const run = operators[operator];
    if (!run || !isValidParam(tokens[0]) || !isValidParam(tokens[2])) {
      return invalidExpression(expr);
    }
    const a = getParamValue(tokens[0].token, state);
    if (operator === "|") {
      return run(a, tokens[2].token);
    }
    const b = getParamValue(tokens[2].token, state);
    return run(a, b);
  }
}
function invalidExpression(expr) {
  console.warn(`Warning: invalid expression \`${expr}\``);
  return false;
}
function isValidParam({ type }) {
  return ["number", "boolean", "string", "param"].includes(type);
}
function getParamValue(raw, state) {
  const firstChar = raw[0];
  const lastChar = raw.slice(-1);
  if (raw === "true" || raw === "false") {
    return raw === "true";
  }
  if (firstChar === lastChar && [`'`, `"`].includes(firstChar)) {
    return raw.slice(1, -1);
  }
  if (isNumericString(raw)) {
    return parseFloat(raw);
  }
  return state[raw];
}
function tokenize2(str, parsers) {
  let len, match, token;
  const tokens = [];
  while (str) {
    token = null;
    len = str.length;
    for (const key in parsers) {
      match = parsers[key].exec(str);
      if (match && match.index < len) {
        token = {
          token: match[0],
          type: key,
          matches: match.slice(1)
        };
        len = match.index;
      }
    }
    if (len) {
      tokens.push({
        token: str.substr(0, len),
        type: void 0
      });
    }
    if (token) {
      tokens.push(token);
    }
    str = str.substr(len + (token ? token.token.length : 0));
  }
  return tokens;
}

// ../../node_modules/media-chrome/dist/media-theme-element.js
var __accessCheck22 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet22 = (obj, member, getter) => {
  __accessCheck22(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd22 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet21 = (obj, member, value, setter) => {
  __accessCheck22(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod8 = (obj, member, method) => {
  __accessCheck22(obj, member, "access private method");
  return method;
};
var _template;
var _prevTemplate;
var _prevTemplateId;
var _upgradeProperty;
var upgradeProperty_fn;
var _updateTemplate;
var updateTemplate_fn;
var observedMediaAttributes = {
  mediatargetlivewindow: "targetlivewindow",
  mediastreamtype: "streamtype"
};
var prependTemplate = Document2.createElement("template");
prependTemplate.innerHTML = /*html*/
`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;
var MediaThemeElement = class extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd22(this, _upgradeProperty);
    __privateAdd22(this, _updateTemplate);
    __privateAdd22(this, _template, void 0);
    __privateAdd22(this, _prevTemplate, void 0);
    __privateAdd22(this, _prevTemplateId, void 0);
    if (this.shadowRoot) {
      this.renderRoot = this.shadowRoot;
    } else {
      this.renderRoot = this.attachShadow({ mode: "open" });
      this.createRenderer();
    }
    const observer2 = new MutationObserver((mutationList) => {
      var _a3;
      if (this.mediaController && !((_a3 = this.mediaController) == null ? void 0 : _a3.breakpointsComputed))
        return;
      if (mutationList.some((mutation) => {
        const target = mutation.target;
        if (target === this)
          return true;
        if (target.localName !== "media-controller")
          return false;
        if (observedMediaAttributes[mutation.attributeName])
          return true;
        if (mutation.attributeName.startsWith("breakpoint"))
          return true;
        return false;
      })) {
        this.render();
      }
    });
    observer2.observe(this, { attributes: true });
    observer2.observe(this.renderRoot, {
      attributes: true,
      subtree: true
    });
    this.addEventListener(
      MediaStateChangeEvents.BREAKPOINTS_COMPUTED,
      this.render
    );
    __privateMethod8(this, _upgradeProperty, upgradeProperty_fn).call(this, "template");
  }
  /** @type {HTMLElement & { breakpointsComputed?: boolean }} */
  get mediaController() {
    return this.renderRoot.querySelector("media-controller");
  }
  get template() {
    var _a3;
    return (_a3 = __privateGet22(this, _template)) != null ? _a3 : this.constructor.template;
  }
  set template(element) {
    __privateSet21(this, _prevTemplateId, null);
    __privateSet21(this, _template, element);
    this.createRenderer();
  }
  get props() {
    var _a3, _b2, _c;
    const observedAttributes2 = [
      ...Array.from((_b2 = (_a3 = this.mediaController) == null ? void 0 : _a3.attributes) != null ? _b2 : []).filter(
        ({ name }) => {
          return observedMediaAttributes[name] || name.startsWith("breakpoint");
        }
      ),
      ...Array.from(this.attributes)
    ];
    const props = {};
    for (const attr of observedAttributes2) {
      const name = (_c = observedMediaAttributes[attr.name]) != null ? _c : camelCase(attr.name);
      let { value } = attr;
      if (value != null) {
        if (isNumericString(value)) {
          value = parseFloat(value);
        }
        props[name] = value === "" ? true : value;
      } else {
        props[name] = false;
      }
    }
    return props;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "template" && oldValue != newValue) {
      __privateMethod8(this, _updateTemplate, updateTemplate_fn).call(this);
    }
  }
  connectedCallback() {
    __privateMethod8(this, _updateTemplate, updateTemplate_fn).call(this);
  }
  createRenderer() {
    if (this.template && this.template !== __privateGet22(this, _prevTemplate)) {
      __privateSet21(this, _prevTemplate, this.template);
      this.renderer = new TemplateInstance(
        this.template,
        this.props,
        // @ts-ignore
        this.constructor.processor
      );
      this.renderRoot.textContent = "";
      this.renderRoot.append(
        prependTemplate.content.cloneNode(true),
        this.renderer
      );
    }
  }
  render() {
    var _a3;
    (_a3 = this.renderer) == null ? void 0 : _a3.update(this.props);
  }
};
_template = /* @__PURE__ */ new WeakMap();
_prevTemplate = /* @__PURE__ */ new WeakMap();
_prevTemplateId = /* @__PURE__ */ new WeakMap();
_upgradeProperty = /* @__PURE__ */ new WeakSet();
upgradeProperty_fn = function(prop) {
  if (Object.prototype.hasOwnProperty.call(this, prop)) {
    const value = this[prop];
    delete this[prop];
    this[prop] = value;
  }
};
_updateTemplate = /* @__PURE__ */ new WeakSet();
updateTemplate_fn = function() {
  var _a3;
  const templateId = this.getAttribute("template");
  if (!templateId || templateId === __privateGet22(this, _prevTemplateId))
    return;
  const rootNode = this.getRootNode();
  const template19 = (_a3 = rootNode == null ? void 0 : rootNode.getElementById) == null ? void 0 : _a3.call(rootNode, templateId);
  if (template19) {
    __privateSet21(this, _prevTemplateId, templateId);
    __privateSet21(this, _template, template19);
    this.createRenderer();
    return;
  }
  if (isValidUrl(templateId)) {
    __privateSet21(this, _prevTemplateId, templateId);
    request(templateId).then((data) => {
      const template22 = Document2.createElement("template");
      template22.innerHTML = data;
      __privateSet21(this, _template, template22);
      this.createRenderer();
    }).catch(console.error);
  }
};
MediaThemeElement.observedAttributes = ["template"];
MediaThemeElement.processor = processor;
function isValidUrl(url) {
  if (!/^(\/|\.\/|https?:\/\/)/.test(url))
    return false;
  const base = /^https?:\/\//.test(url) ? void 0 : location.origin;
  try {
    new URL(url, base);
  } catch (e) {
    return false;
  }
  return true;
}
async function request(resource) {
  const response = await fetch(resource);
  if (response.status !== 200) {
    throw new Error(
      `Failed to load resource: the server responded with a status of ${response.status}`
    );
  }
  return response.text();
}
if (!GlobalThis.customElements.get("media-theme")) {
  GlobalThis.customElements.define("media-theme", MediaThemeElement);
}

// src/styles.css
var styles_default = ":host {\n  --media-control-display: var(--controls);\n  --media-loading-indicator-display: var(--loading-indicator);\n  --media-dialog-display: var(--dialog);\n  --media-play-button-display: var(--play-button);\n  --media-live-button-display: var(--live-button);\n  --media-seek-backward-button-display: var(--seek-backward-button);\n  --media-seek-forward-button-display: var(--seek-forward-button);\n  --media-mute-button-display: var(--mute-button);\n  --media-captions-button-display: var(--captions-button);\n  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));\n  --media-rendition-menu-button-display: var(--rendition-menu-button);\n  --media-audio-track-menu-button-display: var(--audio-track-menu-button);\n  --media-airplay-button-display: var(--airplay-button);\n  --media-pip-button-display: var(--pip-button);\n  --media-fullscreen-button-display: var(--fullscreen-button);\n  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));\n  --media-playback-rate-button-display: var(--playback-rate-button);\n  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);\n  --media-volume-range-display: var(--volume-range);\n  --media-time-range-display: var(--time-range);\n  --media-time-display-display: var(--time-display);\n  --media-duration-display-display: var(--duration-display);\n  --media-title-display-display: var(--title-display);\n\n  display: inline-block;\n  line-height: 0;\n  width: 100%;\n}\n\na {\n  color: #fff;\n  font-size: 0.9em;\n  text-decoration: underline;\n}\n\nmedia-theme {\n  display: inline-block;\n  line-height: 0;\n  width: 100%;\n  height: 100%;\n  direction: ltr;\n}\n\nmedia-poster-image {\n  display: inline-block;\n  line-height: 0;\n  width: 100%;\n  height: 100%;\n}\n\nmedia-poster-image:not([src]):not([placeholdersrc]) {\n  display: none;\n}\n\n::part(top),\n[part~='top'] {\n  --media-control-display: var(--controls, var(--top-controls));\n  --media-play-button-display: var(--play-button, var(--top-play-button));\n  --media-live-button-display: var(--live-button, var(--top-live-button));\n  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));\n  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));\n  --media-mute-button-display: var(--mute-button, var(--top-mute-button));\n  --media-captions-button-display: var(--captions-button, var(--top-captions-button));\n  --media-captions-menu-button-display: var(\n    --captions-menu-button,\n    var(--media-captions-button-display, var(--top-captions-menu-button))\n  );\n  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));\n  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));\n  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));\n  --media-pip-button-display: var(--pip-button, var(--top-pip-button));\n  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));\n  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));\n  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));\n  --media-playback-rate-menu-button-display: var(\n    --captions-menu-button,\n    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))\n  );\n  --media-volume-range-display: var(--volume-range, var(--top-volume-range));\n  --media-time-range-display: var(--time-range, var(--top-time-range));\n  --media-time-display-display: var(--time-display, var(--top-time-display));\n  --media-duration-display-display: var(--duration-display, var(--top-duration-display));\n  --media-title-display-display: var(--title-display, var(--top-title-display));\n}\n\n::part(center),\n[part~='center'] {\n  --media-control-display: var(--controls, var(--center-controls));\n  --media-play-button-display: var(--play-button, var(--center-play-button));\n  --media-live-button-display: var(--live-button, var(--center-live-button));\n  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));\n  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));\n  --media-mute-button-display: var(--mute-button, var(--center-mute-button));\n  --media-captions-button-display: var(--captions-button, var(--center-captions-button));\n  --media-captions-menu-button-display: var(\n    --captions-menu-button,\n    var(--media-captions-button-display, var(--center-captions-menu-button))\n  );\n  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));\n  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));\n  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));\n  --media-pip-button-display: var(--pip-button, var(--center-pip-button));\n  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));\n  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));\n  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));\n  --media-playback-rate-menu-button-display: var(\n    --playback-rate-menu-button,\n    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))\n  );\n  --media-volume-range-display: var(--volume-range, var(--center-volume-range));\n  --media-time-range-display: var(--time-range, var(--center-time-range));\n  --media-time-display-display: var(--time-display, var(--center-time-display));\n  --media-duration-display-display: var(--duration-display, var(--center-duration-display));\n}\n\n::part(bottom),\n[part~='bottom'] {\n  --media-control-display: var(--controls, var(--bottom-controls));\n  --media-play-button-display: var(--play-button, var(--bottom-play-button));\n  --media-live-button-display: var(--live-button, var(--bottom-live-button));\n  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));\n  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));\n  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));\n  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));\n  --media-captions-menu-button-display: var(\n    --captions-menu-button,\n    var(--media-captions-button-display, var(--bottom-captions-menu-button))\n  );\n  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));\n  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));\n  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));\n  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));\n  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));\n  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));\n  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));\n  --media-playback-rate-menu-button-display: var(\n    --playback-rate-menu-button,\n    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))\n  );\n  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));\n  --media-time-range-display: var(--time-range, var(--bottom-time-range));\n  --media-time-display-display: var(--time-display, var(--bottom-time-display));\n  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));\n  --media-title-display-display: var(--title-display, var(--bottom-title-display));\n}\n\n:host([no-tooltips]) {\n  --media-tooltip-display: none;\n}\n";

// src/html.ts
var eventListeners = /* @__PURE__ */ new WeakMap();
var EventHandler = class _EventHandler {
  constructor(element, type) {
    this.element = element;
    this.type = type;
    this.element.addEventListener(this.type, this);
    const elementMap = eventListeners.get(this.element);
    if (elementMap) {
      elementMap.set(this.type, this);
    }
  }
  set(listener) {
    if (typeof listener == "function") {
      this.handleEvent = listener.bind(this.element);
    } else if (typeof listener === "object" && typeof listener.handleEvent === "function") {
      this.handleEvent = listener.handleEvent.bind(listener);
    } else {
      this.element.removeEventListener(this.type, this);
      const elementMap = eventListeners.get(this.element);
      if (elementMap) {
        elementMap.delete(this.type);
      }
    }
  }
  static for(part) {
    if (!eventListeners.has(part.element)) eventListeners.set(part.element, /* @__PURE__ */ new Map());
    const type = part.attributeName.slice(2);
    const elementListeners = eventListeners.get(part.element);
    if (elementListeners && elementListeners.has(type)) return elementListeners.get(type);
    return new _EventHandler(part.element, type);
  }
};
function processEvent(part, value) {
  if (part instanceof AttrPart && part.attributeName.startsWith("on")) {
    EventHandler.for(part).set(value);
    part.element.removeAttributeNS(part.attributeNamespace, part.attributeName);
    return true;
  }
  return false;
}
function processSubTemplate(part, value) {
  if (value instanceof TemplateResult && part instanceof ChildNodePart) {
    value.renderInto(part);
    return true;
  }
  return false;
}
function processDocumentFragment(part, value) {
  if (value instanceof DocumentFragment && part instanceof ChildNodePart) {
    if (value.childNodes.length) part.replace(...value.childNodes);
    return true;
  }
  return false;
}
function processPropertyIdentity(part, value) {
  if (part instanceof AttrPart) {
    const ns = part.attributeNamespace;
    const oldValue = part.element.getAttributeNS(ns, part.attributeName);
    if (String(value) !== oldValue) {
      part.value = String(value);
    }
    return true;
  }
  part.value = String(value);
  return true;
}
function processElementAttribute(part, value) {
  if (part instanceof AttrPart && value instanceof Element) {
    const element = part.element;
    if (element[part.attributeName] !== value) {
      part.element.removeAttributeNS(part.attributeNamespace, part.attributeName);
      element[part.attributeName] = value;
    }
    return true;
  }
  return false;
}
function processBooleanAttribute(part, value) {
  if (typeof value === "boolean" && part instanceof AttrPart) {
    const ns = part.attributeNamespace;
    const oldValue = part.element.hasAttributeNS(ns, part.attributeName);
    if (value !== oldValue) {
      part.booleanValue = value;
    }
    return true;
  }
  return false;
}
function processBooleanNode(part, value) {
  if (value === false && part instanceof ChildNodePart) {
    part.replace("");
    return true;
  }
  return false;
}
function processPart(part, value) {
  processElementAttribute(part, value) || processBooleanAttribute(part, value) || processEvent(part, value) || processBooleanNode(part, value) || processSubTemplate(part, value) || processDocumentFragment(part, value) || processPropertyIdentity(part, value);
}
var templates2 = /* @__PURE__ */ new Map();
var renderedTemplates = /* @__PURE__ */ new WeakMap();
var renderedTemplateInstances = /* @__PURE__ */ new WeakMap();
var TemplateResult = class {
  constructor(strings, values, processor2) {
    this.strings = strings;
    this.values = values;
    this.processor = processor2;
    this.stringsKey = this.strings.join("");
  }
  get template() {
    if (templates2.has(this.stringsKey)) {
      return templates2.get(this.stringsKey);
    } else {
      const template19 = internalDocument.createElement("template");
      const end = this.strings.length - 1;
      template19.innerHTML = this.strings.reduce((str, cur, i) => str + cur + (i < end ? `{{ ${i} }}` : ""), "");
      templates2.set(this.stringsKey, template19);
      return template19;
    }
  }
  renderInto(element) {
    var _a3;
    const template19 = this.template;
    if (renderedTemplates.get(element) !== template19) {
      renderedTemplates.set(element, template19);
      const instance = new TemplateInstance(template19, this.values, this.processor);
      renderedTemplateInstances.set(element, instance);
      if (element instanceof ChildNodePart) {
        element.replace(...instance.children);
      } else {
        element.appendChild(instance);
      }
      return;
    }
    const templateInstance = renderedTemplateInstances.get(element);
    (_a3 = templateInstance == null ? void 0 : templateInstance.update) == null ? void 0 : _a3.call(templateInstance, this.values);
  }
};
var defaultProcessor2 = {
  processCallback(_instance, parts, state) {
    var _a3;
    if (!state) return;
    for (const [expression, part] of parts) {
      if (expression in state) {
        const value = (_a3 = state[expression]) != null ? _a3 : "";
        processPart(part, value);
      }
    }
  }
};
function html(strings, ...values) {
  return new TemplateResult(strings, values, defaultProcessor2);
}
function render(result, element) {
  result.renderInto(element);
}

// src/template.ts
var import_playback_core3 = require("@mux/playback-core");
var getPropsCSS = (props) => {
  const { tokens } = props;
  if (!tokens.drm) return "";
  return ":host { --_cast-button-drm-display: none; }";
};
var template12 = (props) => html`
  <style>
    ${getPropsCSS(props)}
    ${styles_default}
  </style>
  ${content(props)}
`;
var getHotKeys = (props) => {
  let hotKeys = props.hotKeys ? `${props.hotKeys}` : "";
  if (getStreamTypeFromAttr(props.streamType) === "live") {
    hotKeys += " noarrowleft noarrowright";
  }
  return hotKeys;
};
var Parts = {
  // media container regions
  TOP: "top",
  CENTER: "center",
  BOTTOM: "bottom",
  // media container layers
  LAYER: "layer",
  // Generic
  MEDIA_LAYER: "media-layer",
  POSTER_LAYER: "poster-layer",
  VERTICAL_LAYER: "vertical-layer",
  CENTERED_LAYER: "centered-layer",
  GESTURE_LAYER: "gesture-layer",
  CONTROLLER_LAYER: "controller",
  // component/subcomponent types
  BUTTON: "button",
  RANGE: "range",
  DISPLAY: "display",
  CONTROL_BAR: "control-bar",
  MENU_BUTTON: "menu-button",
  MENU: "menu",
  OPTION: "option",
  // component/subcomponent purposes
  POSTER: "poster",
  LIVE: "live",
  PLAY: "play",
  PRE_PLAY: "pre-play",
  SEEK_BACKWARD: "seek-backward",
  SEEK_FORWARD: "seek-forward",
  MUTE: "mute",
  CAPTIONS: "captions",
  AIRPLAY: "airplay",
  PIP: "pip",
  FULLSCREEN: "fullscreen",
  CAST: "cast",
  PLAYBACK_RATE: "playback-rate",
  VOLUME: "volume",
  TIME: "time",
  TITLE: "title",
  AUDIO_TRACK: "audio-track",
  RENDITION: "rendition"
};
var partsListStr = Object.values(Parts).join(", ");
var getTagSpecificProps = (tag, props) => {
  var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
  const baseProps = {
    "target-live-window": (_a3 = props.targetLiveWindow) != null ? _a3 : false,
    "stream-type": (_b2 = getStreamTypeFromAttr(props.streamType)) != null ? _b2 : false,
    crossorigin: (_c = props.crossOrigin) != null ? _c : "",
    playsinline: "",
    autoplay: (_d = props.autoplay) != null ? _d : false,
    muted: (_e = props.muted) != null ? _e : false,
    loop: (_f = props.loop) != null ? _f : false,
    preload: (_g = props.preload) != null ? _g : false,
    debug: (_h = props.debug) != null ? _h : false,
    "prefer-cmcd": (_i = props.preferCmcd) != null ? _i : false,
    "disable-tracking": (_j = props.disableTracking) != null ? _j : false,
    "disable-cookies": (_k = props.disableCookies) != null ? _k : false,
    "prefer-playback": (_l = props.preferPlayback) != null ? _l : false,
    "start-time": props.startTime != null ? props.startTime : false,
    "beacon-collection-domain": (_m = props.beaconCollectionDomain) != null ? _m : false,
    "player-init-time": (_n = props.playerInitTime) != null ? _n : false,
    "player-software-name": (_o = props.playerSoftwareName) != null ? _o : false,
    "player-software-version": (_p = props.playerSoftwareVersion) != null ? _p : false,
    "env-key": (_q = props.envKey) != null ? _q : false,
    "custom-domain": (_r = props.customDomain) != null ? _r : false,
    src: !!props.src ? props.src : props.playbackId ? (0, import_playback_core3.toMuxVideoURL)(props) : false,
    "cast-src": !!props.src ? props.src : props.playbackId ? (0, import_playback_core3.toMuxVideoURL)(props) : false,
    "cast-receiver": (_s = props.castReceiver) != null ? _s : false,
    "drm-token": (_u = (_t = props.tokens) == null ? void 0 : _t.drm) != null ? _u : false,
    exportparts: "video"
  };
  switch (tag) {
    case "mux-video-ads":
      return {
        ...baseProps,
        adTagUrl: (_v = props.adTagUrl) != null ? _v : false
      };
    default:
      return baseProps;
  }
};
var content = (props) => {
  var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const tag = props.muxVideoElement || "mux-video";
  const videoSlots = html`
    ${props.storyboard ? html`<track label="thumbnails" default kind="metadata" src="${props.storyboard}" />` : html``}
    <slot></slot>
  `;
  const tagProps = getTagSpecificProps(tag, props);
  const templateStrings = [`<${tag} slot='media' `];
  const values = [];
  Object.entries(tagProps).forEach(([key, value], index) => {
    if (index == 0) {
      templateStrings[0] += ` ${key}="`;
    } else {
      templateStrings.push(`" ${key}="`);
    }
    values.push(value);
  });
  templateStrings.push('">');
  templateStrings.push("</" + tag + ">");
  values.push(videoSlots);
  const templateArray = Object.assign([], templateStrings, { raw: templateStrings });
  const videoElement = html(templateArray, ...values);
  return html`
    <media-theme
      template="${props.themeTemplate || false}"
      mediaadbreak="${(_a3 = props.adBreak) != null ? _a3 : false}"
      defaultstreamtype="${(_b2 = props.defaultStreamType) != null ? _b2 : false}"
      hotkeys="${getHotKeys(props) || false}"
      nohotkeys="${props.noHotKeys || !props.hasSrc || false}"
      noautoseektolive="${!!((_c = props.streamType) == null ? void 0 : _c.includes(import_playback_core3.StreamTypes.LIVE)) && props.targetLiveWindow !== 0}"
      novolumepref="${props.novolumepref || false}"
      disabled="${!props.hasSrc || props.isDialogOpen}"
      audio="${(_d = props.audio) != null ? _d : false}"
      style="${(_e = stylePropsToString({
    "--media-primary-color": props.primaryColor,
    "--media-secondary-color": props.secondaryColor,
    "--media-accent-color": props.accentColor
  })) != null ? _e : false}"
      defaultsubtitles="${!props.defaultHiddenCaptions}"
      forwardseekoffset="${(_f = props.forwardSeekOffset) != null ? _f : false}"
      backwardseekoffset="${(_g = props.backwardSeekOffset) != null ? _g : false}"
      playbackrates="${(_h = props.playbackRates) != null ? _h : false}"
      defaultshowremainingtime="${(_i = props.defaultShowRemainingTime) != null ? _i : false}"
      defaultduration="${(_j = props.defaultDuration) != null ? _j : false}"
      hideduration="${(_k = props.hideDuration) != null ? _k : false}"
      title="${(_l = props.title) != null ? _l : false}"
      proudlydisplaymuxbadge="${(_m = props.proudlyDisplayMuxBadge) != null ? _m : false}"
      exportparts="${partsListStr}"
      onclose="${props.onCloseErrorDialog}"
      onfocusin="${props.onFocusInErrorDialog}"
    >
      ${videoElement}
      <slot name="poster" slot="poster">
        <media-poster-image
          part="poster"
          exportparts="poster, img"
          src="${!!props.poster ? props.poster : false}"
          placeholdersrc="${(_n = props.placeholder) != null ? _n : false}"
        ></media-poster-image>
      </slot>
    </media-theme>
  `;
};

// src/errors.ts
var import_playback_core4 = require("@mux/playback-core");
var capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
var muxMediaErrorToDialogTitle = (mediaError, translate = false) => {
  var _a3, _b2;
  if (mediaError.muxCode) {
    const category = capitalizeFirstLetter((_a3 = mediaError.errorCategory) != null ? _a3 : "video");
    const categoryName = (0, import_playback_core4.errorCategoryToTokenNameOrPrefix)((_b2 = mediaError.errorCategory) != null ? _b2 : import_playback_core4.MuxErrorCategory.VIDEO);
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_OFFLINE) {
      return (0, import_playback_core4.i18n)(`Your device appears to be offline`, translate);
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_TOKEN_EXPIRED) {
      return (0, import_playback_core4.i18n)(`{category} URL has expired`, translate).format({
        category
      });
    }
    if ([
      import_playback_core4.MuxErrorCode.NETWORK_TOKEN_SUB_MISMATCH,
      import_playback_core4.MuxErrorCode.NETWORK_TOKEN_AUD_MISMATCH,
      import_playback_core4.MuxErrorCode.NETWORK_TOKEN_AUD_MISSING,
      import_playback_core4.MuxErrorCode.NETWORK_TOKEN_MALFORMED
      // @ts-ignore
    ].includes(mediaError.muxCode)) {
      return (0, import_playback_core4.i18n)(`{category} URL is formatted incorrectly`, translate).format({ category });
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_TOKEN_MISSING) {
      return (0, import_playback_core4.i18n)(`Invalid {categoryName} URL`, translate).format({ categoryName });
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_NOT_FOUND) {
      return (0, import_playback_core4.i18n)(`{category} does not exist`, translate).format({ category });
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_NOT_READY) {
      return (0, import_playback_core4.i18n)(`{category} is not currently available`, translate).format({ category });
    }
  }
  if (mediaError.code) {
    if (mediaError.code === import_playback_core4.MediaError.MEDIA_ERR_NETWORK) return (0, import_playback_core4.i18n)(`Network Error`, translate);
    if (mediaError.code === import_playback_core4.MediaError.MEDIA_ERR_DECODE) return (0, import_playback_core4.i18n)(`Media Error`, translate);
    if (mediaError.code === import_playback_core4.MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) return (0, import_playback_core4.i18n)(`Source Not Supported`, translate);
  }
  return (0, import_playback_core4.i18n)(`Error`, translate);
};
var muxMediaErrorToDialogMessage = (mediaError, translate = false) => {
  var _a3, _b2;
  if (mediaError.muxCode) {
    const category = capitalizeFirstLetter((_a3 = mediaError.errorCategory) != null ? _a3 : "video");
    const tokenNamePrefix = (0, import_playback_core4.errorCategoryToTokenNameOrPrefix)((_b2 = mediaError.errorCategory) != null ? _b2 : import_playback_core4.MuxErrorCategory.VIDEO);
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_OFFLINE) {
      return (0, import_playback_core4.i18n)(`Check your internet connection and try reloading this video.`, translate);
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_TOKEN_EXPIRED) {
      return (0, import_playback_core4.i18n)(`The video\u2019s secured {tokenNamePrefix}-token has expired.`, translate).format({
        tokenNamePrefix
      });
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_TOKEN_SUB_MISMATCH) {
      return (0, import_playback_core4.i18n)(
        `The video\u2019s playback ID does not match the one encoded in the {tokenNamePrefix}-token.`,
        translate
      ).format({
        tokenNamePrefix
      });
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_TOKEN_MALFORMED) {
      return (0, import_playback_core4.i18n)(`{category} URL is formatted incorrectly`, translate).format({ category });
    }
    if ([
      import_playback_core4.MuxErrorCode.NETWORK_TOKEN_AUD_MISMATCH,
      import_playback_core4.MuxErrorCode.NETWORK_TOKEN_AUD_MISSING
      // @ts-ignore
    ].includes(mediaError.muxCode)) {
      return (0, import_playback_core4.i18n)(`The {tokenNamePrefix}-token is formatted with incorrect information.`, translate).format({
        tokenNamePrefix
      });
    }
    if ([
      import_playback_core4.MuxErrorCode.NETWORK_TOKEN_MISSING,
      import_playback_core4.MuxErrorCode.NETWORK_INVALID_URL
      // @ts-ignore
    ].includes(mediaError.muxCode)) {
      return (0, import_playback_core4.i18n)(
        `The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.`,
        translate
      ).format({
        tokenNamePrefix
      });
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_NOT_FOUND) {
      return "";
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_NOT_READY) {
      return (0, import_playback_core4.i18n)(`The live stream or video file are not yet ready.`, translate);
    }
    return mediaError.message;
  }
  if (mediaError.code) {
    if (mediaError.code === import_playback_core4.MediaError.MEDIA_ERR_NETWORK) return mediaError.message;
    if (mediaError.code === import_playback_core4.MediaError.MEDIA_ERR_DECODE) return mediaError.message;
    if (mediaError.code === import_playback_core4.MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) return mediaError.message;
  }
  return mediaError.message;
};
var muxMediaErrorToDialog = (mediaError, translate = false) => {
  const title = muxMediaErrorToDialogTitle(mediaError, translate);
  const message = muxMediaErrorToDialogMessage(mediaError, translate);
  return {
    title,
    message
  };
};
var muxMediaErrorToDevlogFile = (mediaError) => {
  if (mediaError.muxCode) {
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_TOKEN_EXPIRED) {
      return "403-expired-token.md";
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_TOKEN_MALFORMED) {
      return "403-malformatted-token.md";
    }
    if ([
      import_playback_core4.MuxErrorCode.NETWORK_TOKEN_AUD_MISMATCH,
      import_playback_core4.MuxErrorCode.NETWORK_TOKEN_AUD_MISSING
      // @ts-ignore
    ].includes(mediaError.muxCode)) {
      return "403-incorrect-aud-value.md";
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_TOKEN_SUB_MISMATCH) {
      return "403-playback-id-mismatch.md";
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_TOKEN_MISSING) {
      return "missing-signed-tokens.md";
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_NOT_FOUND) {
      return "404-not-found.md";
    }
    if (mediaError.muxCode === import_playback_core4.MuxErrorCode.NETWORK_NOT_READY) {
      return "412-not-playable.md";
    }
  }
  if (mediaError.code) {
    if (mediaError.code === import_playback_core4.MediaError.MEDIA_ERR_NETWORK) return "";
    if (mediaError.code === import_playback_core4.MediaError.MEDIA_ERR_DECODE) return "media-decode-error.md";
    if (mediaError.code === import_playback_core4.MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) return "media-src-not-supported.md";
  }
  return "";
};
var muxMediaErrorToDevlog = (mediaError, _translate) => {
  const file = muxMediaErrorToDevlogFile(mediaError);
  return {
    message: mediaError.message,
    context: mediaError.context,
    file
  };
};

// src/themes/gerwig/gerwig.html
var gerwig_default = `<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
        hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
        hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
        hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
        hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
    <media-error-dialog slot="dialog" noautohide></media-error-dialog>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`;

// ../../node_modules/media-chrome/dist/utils/anchor-utils.js
function computePosition({
  anchor,
  floating,
  placement
}) {
  const rects = getElementRects({ anchor, floating });
  const { x, y } = computeCoordsFromPlacement(rects, placement);
  return { x, y };
}
function getElementRects({
  anchor,
  floating
}) {
  return {
    anchor: getRectRelativeToOffsetParent(anchor, floating.offsetParent),
    floating: {
      x: 0,
      y: 0,
      width: floating.offsetWidth,
      height: floating.offsetHeight
    }
  };
}
function getRectRelativeToOffsetParent(element, offsetParent) {
  var _a3;
  const rect = element.getBoundingClientRect();
  const offsetRect = (_a3 = offsetParent == null ? void 0 : offsetParent.getBoundingClientRect()) != null ? _a3 : { x: 0, y: 0 };
  return {
    x: rect.x - offsetRect.x,
    y: rect.y - offsetRect.y,
    width: rect.width,
    height: rect.height
  };
}
function computeCoordsFromPlacement({ anchor, floating }, placement) {
  const alignmentAxis = getSideAxis(placement) === "x" ? "y" : "x";
  const alignLength = alignmentAxis === "y" ? "height" : "width";
  const side = getSide(placement);
  const commonX = anchor.x + anchor.width / 2 - floating.width / 2;
  const commonY = anchor.y + anchor.height / 2 - floating.height / 2;
  const commonAlign = anchor[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = { x: commonX, y: anchor.y - floating.height };
      break;
    case "bottom":
      coords = { x: commonX, y: anchor.y + anchor.height };
      break;
    case "right":
      coords = { x: anchor.x + anchor.width, y: commonY };
      break;
    case "left":
      coords = { x: anchor.x - floating.width, y: commonY };
      break;
    default:
      coords = { x: anchor.x, y: anchor.y };
  }
  switch (placement.split("-")[1]) {
    case "start":
      coords[alignmentAxis] -= commonAlign;
      break;
    case "end":
      coords[alignmentAxis] += commonAlign;
      break;
  }
  return coords;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}

// ../../node_modules/media-chrome/dist/utils/events.js
var InvokeEvent = class extends Event {
  /**
   * @param init - The event options.
   */
  constructor({ action = "auto", relatedTarget, ...options }) {
    super("invoke", options);
    this.action = action;
    this.relatedTarget = relatedTarget;
  }
};
var ToggleEvent = class extends Event {
  /**
   * @param init - The event options.
   */
  constructor({ newState, oldState, ...options }) {
    super("toggle", options);
    this.newState = newState;
    this.oldState = oldState;
  }
};

// ../../node_modules/media-chrome/dist/menu/media-chrome-menu.js
var __accessCheck23 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet23 = (obj, member, getter) => {
  __accessCheck23(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd23 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet22 = (obj, member, value, setter) => {
  __accessCheck23(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod9 = (obj, member, method) => {
  __accessCheck23(obj, member, "access private method");
  return method;
};
var _mediaController8;
var _previouslyFocused2;
var _invokerElement2;
var _previousItems;
var _mutationObserver2;
var _isPopover;
var _cssRule;
var _handleSlotChange;
var handleSlotChange_fn;
var _handleMenuItems;
var _updateLayoutStyle;
var updateLayoutStyle_fn;
var _handleInvoke2;
var handleInvoke_fn2;
var _handleOpen2;
var handleOpen_fn2;
var _handleClosed2;
var handleClosed_fn2;
var _handleBoundsResize;
var _handleMenuResize;
var _positionMenu;
var positionMenu_fn;
var _resizeMenu;
var resizeMenu_fn;
var _handleClick;
var handleClick_fn;
var _backButtonElement;
var backButtonElement_get;
var _handleToggle;
var handleToggle_fn;
var _checkSubmenuHasExpanded;
var checkSubmenuHasExpanded_fn;
var _handleFocusOut2;
var handleFocusOut_fn2;
var _handleKeyDown2;
var handleKeyDown_fn2;
var _getItem;
var getItem_fn;
var _getTabItem;
var getTabItem_fn;
var _setTabItem;
var setTabItem_fn;
var _selectItem;
var selectItem_fn;
function createMenuItem({
  type,
  text,
  value,
  checked
}) {
  const item = Document2.createElement(
    "media-chrome-menu-item"
  );
  item.type = type != null ? type : "";
  item.part.add("menu-item");
  if (type)
    item.part.add(type);
  item.value = value;
  item.checked = checked;
  const label = Document2.createElement("span");
  label.textContent = text;
  item.append(label);
  return item;
}
function createIndicator(el, name) {
  let customIndicator = el.querySelector(`:scope > [slot="${name}"]`);
  if ((customIndicator == null ? void 0 : customIndicator.nodeName) == "SLOT")
    customIndicator = customIndicator.assignedElements({ flatten: true })[0];
  if (customIndicator) {
    customIndicator = customIndicator.cloneNode(true);
    return customIndicator;
  }
  const fallbackIndicator = el.shadowRoot.querySelector(
    `[name="${name}"] > svg`
  );
  if (fallbackIndicator) {
    return fallbackIndicator.cloneNode(true);
  }
  return "";
}
var template13 = Document2.createElement("template");
template13.innerHTML = /*html*/
`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --_menu-bg: rgb(20 20 30 / .8);
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      ${/* ^^Prevent transition override by media-container */
""}
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      ${/* Prevent overflowing a flex container */
""}
      min-height: 0;
      position: relative;
      bottom: var(--_menu-bottom);
      box-sizing: border-box;
    } 

    @-moz-document url-prefix() {
      :host{
        --_menu-bg: rgb(20 20 30);
      }
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      outline: inherit;
      display: inline-flex;
      align-items: center;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: default;
    }

    slot[name="header"] > button[part~="back"],
    slot[name="header"]::slotted(button[part~="back"]) {
      cursor: pointer;
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    ${/* In row layout hide the checked indicator completely. */
""}
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;
var Attributes13 = {
  STYLE: "style",
  HIDDEN: "hidden",
  DISABLED: "disabled",
  ANCHOR: "anchor"
};
var MediaChromeMenu = class extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd23(this, _handleSlotChange);
    __privateAdd23(this, _updateLayoutStyle);
    __privateAdd23(this, _handleInvoke2);
    __privateAdd23(this, _handleOpen2);
    __privateAdd23(this, _handleClosed2);
    __privateAdd23(this, _positionMenu);
    __privateAdd23(this, _resizeMenu);
    __privateAdd23(this, _handleClick);
    __privateAdd23(this, _backButtonElement);
    __privateAdd23(this, _handleToggle);
    __privateAdd23(this, _checkSubmenuHasExpanded);
    __privateAdd23(this, _handleFocusOut2);
    __privateAdd23(this, _handleKeyDown2);
    __privateAdd23(this, _getItem);
    __privateAdd23(this, _getTabItem);
    __privateAdd23(this, _setTabItem);
    __privateAdd23(this, _selectItem);
    __privateAdd23(this, _mediaController8, null);
    __privateAdd23(this, _previouslyFocused2, null);
    __privateAdd23(this, _invokerElement2, null);
    __privateAdd23(this, _previousItems, /* @__PURE__ */ new Set());
    __privateAdd23(this, _mutationObserver2, void 0);
    __privateAdd23(this, _isPopover, false);
    __privateAdd23(this, _cssRule, null);
    __privateAdd23(this, _handleMenuItems, () => {
      const previousItems = __privateGet23(this, _previousItems);
      const currentItems = new Set(this.items);
      for (const item of previousItems) {
        if (!currentItems.has(item)) {
          this.dispatchEvent(new CustomEvent("removemenuitem", { detail: item }));
        }
      }
      for (const item of currentItems) {
        if (!previousItems.has(item)) {
          this.dispatchEvent(new CustomEvent("addmenuitem", { detail: item }));
        }
      }
      __privateSet22(this, _previousItems, currentItems);
    });
    __privateAdd23(this, _handleBoundsResize, () => {
      __privateMethod9(this, _positionMenu, positionMenu_fn).call(this);
      __privateMethod9(this, _resizeMenu, resizeMenu_fn).call(this, false);
    });
    __privateAdd23(this, _handleMenuResize, () => {
      __privateMethod9(this, _positionMenu, positionMenu_fn).call(this);
    });
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.nativeEl = this.constructor.template.content.cloneNode(true);
      this.shadowRoot.append(this.nativeEl);
    }
    this.container = this.shadowRoot.querySelector("#container");
    this.defaultSlot = this.shadowRoot.querySelector(
      "slot:not([name])"
    );
    this.shadowRoot.addEventListener("slotchange", this);
    __privateSet22(this, _mutationObserver2, new MutationObserver(__privateGet23(this, _handleMenuItems)));
    __privateGet23(this, _mutationObserver2).observe(this.defaultSlot, { childList: true });
  }
  static get observedAttributes() {
    return [
      Attributes13.DISABLED,
      Attributes13.HIDDEN,
      Attributes13.STYLE,
      Attributes13.ANCHOR,
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    ];
  }
  static formatMenuItemText(text, _data) {
    return text;
  }
  enable() {
    this.addEventListener("click", this);
    this.addEventListener("focusout", this);
    this.addEventListener("keydown", this);
    this.addEventListener("invoke", this);
    this.addEventListener("toggle", this);
  }
  disable() {
    this.removeEventListener("click", this);
    this.removeEventListener("focusout", this);
    this.removeEventListener("keyup", this);
    this.removeEventListener("invoke", this);
    this.removeEventListener("toggle", this);
  }
  handleEvent(event) {
    switch (event.type) {
      case "slotchange":
        __privateMethod9(this, _handleSlotChange, handleSlotChange_fn).call(this, event);
        break;
      case "invoke":
        __privateMethod9(this, _handleInvoke2, handleInvoke_fn2).call(this, event);
        break;
      case "click":
        __privateMethod9(this, _handleClick, handleClick_fn).call(this, event);
        break;
      case "toggle":
        __privateMethod9(this, _handleToggle, handleToggle_fn).call(this, event);
        break;
      case "focusout":
        __privateMethod9(this, _handleFocusOut2, handleFocusOut_fn2).call(this, event);
        break;
      case "keydown":
        __privateMethod9(this, _handleKeyDown2, handleKeyDown_fn2).call(this, event);
        break;
    }
  }
  connectedCallback() {
    var _a3, _b2;
    __privateSet22(this, _cssRule, insertCSSRule(this.shadowRoot, ":host"));
    __privateMethod9(this, _updateLayoutStyle, updateLayoutStyle_fn).call(this);
    if (!this.hasAttribute("disabled")) {
      this.enable();
    }
    if (!this.role) {
      this.role = "menu";
    }
    __privateSet22(this, _mediaController8, getAttributeMediaController(this));
    (_b2 = (_a3 = __privateGet23(this, _mediaController8)) == null ? void 0 : _a3.associateElement) == null ? void 0 : _b2.call(_a3, this);
    if (!this.hidden) {
      observeResize(getBoundsElement(this), __privateGet23(this, _handleBoundsResize));
      observeResize(this, __privateGet23(this, _handleMenuResize));
    }
  }
  disconnectedCallback() {
    var _a3, _b2;
    unobserveResize(getBoundsElement(this), __privateGet23(this, _handleBoundsResize));
    unobserveResize(this, __privateGet23(this, _handleMenuResize));
    this.disable();
    (_b2 = (_a3 = __privateGet23(this, _mediaController8)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
    __privateSet22(this, _mediaController8, null);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a3, _b2, _c, _d;
    if (attrName === Attributes13.HIDDEN && newValue !== oldValue) {
      if (!__privateGet23(this, _isPopover))
        __privateSet22(this, _isPopover, true);
      if (this.hidden) {
        __privateMethod9(this, _handleClosed2, handleClosed_fn2).call(this);
      } else {
        __privateMethod9(this, _handleOpen2, handleOpen_fn2).call(this);
      }
      this.dispatchEvent(
        new ToggleEvent({
          oldState: this.hidden ? "open" : "closed",
          newState: this.hidden ? "closed" : "open",
          bubbles: true
        })
      );
    } else if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b2 = (_a3 = __privateGet23(this, _mediaController8)) == null ? void 0 : _a3.unassociateElement) == null ? void 0 : _b2.call(_a3, this);
        __privateSet22(this, _mediaController8, null);
      }
      if (newValue && this.isConnected) {
        __privateSet22(this, _mediaController8, getAttributeMediaController(this));
        (_d = (_c = __privateGet23(this, _mediaController8)) == null ? void 0 : _c.associateElement) == null ? void 0 : _d.call(_c, this);
      }
    } else if (attrName === Attributes13.DISABLED && newValue !== oldValue) {
      if (newValue == null) {
        this.enable();
      } else {
        this.disable();
      }
    } else if (attrName === Attributes13.STYLE && newValue !== oldValue) {
      __privateMethod9(this, _updateLayoutStyle, updateLayoutStyle_fn).call(this);
    }
  }
  formatMenuItemText(text, data) {
    return this.constructor.formatMenuItemText(
      text,
      data
    );
  }
  get anchor() {
    return this.getAttribute("anchor");
  }
  set anchor(value) {
    this.setAttribute("anchor", `${value}`);
  }
  /**
   * Returns the anchor element when it is a floating menu.
   */
  get anchorElement() {
    var _a3;
    if (this.anchor) {
      return (_a3 = getDocumentOrShadowRoot(this)) == null ? void 0 : _a3.querySelector(
        `#${this.anchor}`
      );
    }
    return null;
  }
  /**
   * Returns the menu items.
   */
  get items() {
    return this.defaultSlot.assignedElements({ flatten: true }).filter(isMenuItem);
  }
  get radioGroupItems() {
    return this.items.filter((item) => item.role === "menuitemradio");
  }
  get checkedItems() {
    return this.items.filter((item) => item.checked);
  }
  get value() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.checkedItems[0]) == null ? void 0 : _a3.value) != null ? _b2 : "";
  }
  set value(newValue) {
    const item = this.items.find((item2) => item2.value === newValue);
    if (!item)
      return;
    __privateMethod9(this, _selectItem, selectItem_fn).call(this, item);
  }
  focus() {
    __privateSet22(this, _previouslyFocused2, getActiveElement());
    if (this.items.length) {
      __privateMethod9(this, _setTabItem, setTabItem_fn).call(this, this.items[0]);
      this.items[0].focus();
      return;
    }
    const focusable = this.querySelector(
      '[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]'
    );
    focusable == null ? void 0 : focusable.focus();
  }
  handleSelect(event) {
    var _a3;
    const item = __privateMethod9(this, _getItem, getItem_fn).call(this, event);
    if (!item)
      return;
    __privateMethod9(this, _selectItem, selectItem_fn).call(this, item, item.type === "checkbox");
    if (__privateGet23(this, _invokerElement2) && !this.hidden) {
      (_a3 = __privateGet23(this, _previouslyFocused2)) == null ? void 0 : _a3.focus();
      this.hidden = true;
    }
  }
  get keysUsed() {
    return [
      "Enter",
      "Escape",
      "Tab",
      " ",
      "ArrowDown",
      "ArrowUp",
      "Home",
      "End"
    ];
  }
  handleMove(event) {
    var _a3, _b2;
    const { key } = event;
    const items = this.items;
    const currentItem = (_b2 = (_a3 = __privateMethod9(this, _getItem, getItem_fn).call(this, event)) != null ? _a3 : __privateMethod9(this, _getTabItem, getTabItem_fn).call(this)) != null ? _b2 : items[0];
    const currentIndex = items.indexOf(currentItem);
    let index = Math.max(0, currentIndex);
    if (key === "ArrowDown") {
      index++;
    } else if (key === "ArrowUp") {
      index--;
    } else if (event.key === "Home") {
      index = 0;
    } else if (event.key === "End") {
      index = items.length - 1;
    }
    if (index < 0) {
      index = items.length - 1;
    }
    if (index > items.length - 1) {
      index = 0;
    }
    __privateMethod9(this, _setTabItem, setTabItem_fn).call(this, items[index]);
    items[index].focus();
  }
};
_mediaController8 = /* @__PURE__ */ new WeakMap();
_previouslyFocused2 = /* @__PURE__ */ new WeakMap();
_invokerElement2 = /* @__PURE__ */ new WeakMap();
_previousItems = /* @__PURE__ */ new WeakMap();
_mutationObserver2 = /* @__PURE__ */ new WeakMap();
_isPopover = /* @__PURE__ */ new WeakMap();
_cssRule = /* @__PURE__ */ new WeakMap();
_handleSlotChange = /* @__PURE__ */ new WeakSet();
handleSlotChange_fn = function(event) {
  const slot = event.target;
  for (const node of slot.assignedNodes({ flatten: true })) {
    if (node.nodeType === 3 && node.textContent.trim() === "") {
      node.remove();
    }
  }
  if (["header", "title"].includes(slot.name)) {
    const header = this.shadowRoot.querySelector(
      'slot[name="header"]'
    );
    header.hidden = slot.assignedNodes().length === 0;
  }
  if (!slot.name) {
    __privateGet23(this, _handleMenuItems).call(this);
  }
};
_handleMenuItems = /* @__PURE__ */ new WeakMap();
_updateLayoutStyle = /* @__PURE__ */ new WeakSet();
updateLayoutStyle_fn = function() {
  var _a3;
  const layoutRowStyle = this.shadowRoot.querySelector("#layout-row");
  const menuLayout = (_a3 = getComputedStyle(this).getPropertyValue("--media-menu-layout")) == null ? void 0 : _a3.trim();
  layoutRowStyle.setAttribute("media", menuLayout === "row" ? "" : "width:0");
};
_handleInvoke2 = /* @__PURE__ */ new WeakSet();
handleInvoke_fn2 = function(event) {
  __privateSet22(this, _invokerElement2, event.relatedTarget);
  if (!containsComposedNode(this, event.relatedTarget)) {
    this.hidden = !this.hidden;
  }
};
_handleOpen2 = /* @__PURE__ */ new WeakSet();
handleOpen_fn2 = function() {
  var _a3;
  (_a3 = __privateGet23(this, _invokerElement2)) == null ? void 0 : _a3.setAttribute("aria-expanded", "true");
  this.addEventListener("transitionend", () => this.focus(), { once: true });
  observeResize(getBoundsElement(this), __privateGet23(this, _handleBoundsResize));
  observeResize(this, __privateGet23(this, _handleMenuResize));
};
_handleClosed2 = /* @__PURE__ */ new WeakSet();
handleClosed_fn2 = function() {
  var _a3;
  (_a3 = __privateGet23(this, _invokerElement2)) == null ? void 0 : _a3.setAttribute("aria-expanded", "false");
  unobserveResize(getBoundsElement(this), __privateGet23(this, _handleBoundsResize));
  unobserveResize(this, __privateGet23(this, _handleMenuResize));
};
_handleBoundsResize = /* @__PURE__ */ new WeakMap();
_handleMenuResize = /* @__PURE__ */ new WeakMap();
_positionMenu = /* @__PURE__ */ new WeakSet();
positionMenu_fn = function(menuWidth) {
  if (this.hasAttribute("mediacontroller") && !this.anchor)
    return;
  if (this.hidden || !this.anchorElement)
    return;
  const { x, y } = computePosition({
    anchor: this.anchorElement,
    floating: this,
    placement: "top-start"
  });
  menuWidth != null ? menuWidth : menuWidth = this.offsetWidth;
  const bounds = getBoundsElement(this);
  const boundsRect = bounds.getBoundingClientRect();
  const right = boundsRect.width - x - menuWidth;
  const bottom = boundsRect.height - y - this.offsetHeight;
  const { style } = __privateGet23(this, _cssRule);
  style.setProperty("position", "absolute");
  style.setProperty("right", `${Math.max(0, right)}px`);
  style.setProperty("--_menu-bottom", `${bottom}px`);
  const computedStyle = getComputedStyle(this);
  const isBottomCalc = style.getPropertyValue("--_menu-bottom") === computedStyle.bottom;
  const realBottom = isBottomCalc ? bottom : parseFloat(computedStyle.bottom);
  const maxHeight = boundsRect.height - realBottom - parseFloat(computedStyle.marginBottom);
  this.style.setProperty("--_menu-max-height", `${maxHeight}px`);
};
_resizeMenu = /* @__PURE__ */ new WeakSet();
resizeMenu_fn = function(animate) {
  const expandedMenuItem = this.querySelector(
    '[role="menuitem"][aria-haspopup][aria-expanded="true"]'
  );
  const expandedSubmenu = expandedMenuItem == null ? void 0 : expandedMenuItem.querySelector(
    '[role="menu"]'
  );
  const { style } = __privateGet23(this, _cssRule);
  if (!animate) {
    style.setProperty("--media-menu-transition-in", "none");
  }
  if (expandedSubmenu) {
    const height = expandedSubmenu.offsetHeight;
    const width = Math.max(
      expandedSubmenu.offsetWidth,
      expandedMenuItem.offsetWidth
    );
    this.style.setProperty("min-width", `${width}px`);
    this.style.setProperty("min-height", `${height}px`);
    __privateMethod9(this, _positionMenu, positionMenu_fn).call(this, width);
  } else {
    this.style.removeProperty("min-width");
    this.style.removeProperty("min-height");
    __privateMethod9(this, _positionMenu, positionMenu_fn).call(this);
  }
  style.removeProperty("--media-menu-transition-in");
};
_handleClick = /* @__PURE__ */ new WeakSet();
handleClick_fn = function(event) {
  var _a3;
  event.stopPropagation();
  if (event.composedPath().includes(__privateGet23(this, _backButtonElement, backButtonElement_get))) {
    (_a3 = __privateGet23(this, _previouslyFocused2)) == null ? void 0 : _a3.focus();
    this.hidden = true;
    return;
  }
  const item = __privateMethod9(this, _getItem, getItem_fn).call(this, event);
  if (!item || item.hasAttribute("disabled"))
    return;
  __privateMethod9(this, _setTabItem, setTabItem_fn).call(this, item);
  this.handleSelect(event);
};
_backButtonElement = /* @__PURE__ */ new WeakSet();
backButtonElement_get = function() {
  var _a3;
  const headerSlot = this.shadowRoot.querySelector(
    'slot[name="header"]'
  );
  return (_a3 = headerSlot.assignedElements({ flatten: true })) == null ? void 0 : _a3.find((el) => el.matches('button[part~="back"]'));
};
_handleToggle = /* @__PURE__ */ new WeakSet();
handleToggle_fn = function(event) {
  if (event.target === this)
    return;
  __privateMethod9(this, _checkSubmenuHasExpanded, checkSubmenuHasExpanded_fn).call(this);
  const menuItemsWithSubmenu = Array.from(
    this.querySelectorAll('[role="menuitem"][aria-haspopup]')
  );
  for (const item of menuItemsWithSubmenu) {
    if (item.invokeTargetElement == event.target)
      continue;
    if (event.newState == "open" && item.getAttribute("aria-expanded") == "true" && !item.invokeTargetElement.hidden) {
      item.invokeTargetElement.dispatchEvent(
        new InvokeEvent({ relatedTarget: item })
      );
    }
  }
  for (const item of menuItemsWithSubmenu) {
    item.setAttribute("aria-expanded", `${!item.submenuElement.hidden}`);
  }
  __privateMethod9(this, _resizeMenu, resizeMenu_fn).call(this, true);
};
_checkSubmenuHasExpanded = /* @__PURE__ */ new WeakSet();
checkSubmenuHasExpanded_fn = function() {
  const selector = '[role="menuitem"] > [role="menu"]:not([hidden])';
  const expandedMenuItem = this.querySelector(selector);
  this.container.classList.toggle("has-expanded", !!expandedMenuItem);
};
_handleFocusOut2 = /* @__PURE__ */ new WeakSet();
handleFocusOut_fn2 = function(event) {
  var _a3;
  if (!containsComposedNode(this, event.relatedTarget)) {
    if (__privateGet23(this, _isPopover)) {
      (_a3 = __privateGet23(this, _previouslyFocused2)) == null ? void 0 : _a3.focus();
    }
    if (__privateGet23(this, _invokerElement2) && __privateGet23(this, _invokerElement2) !== event.relatedTarget && !this.hidden) {
      this.hidden = true;
    }
  }
};
_handleKeyDown2 = /* @__PURE__ */ new WeakSet();
handleKeyDown_fn2 = function(event) {
  var _a3, _b2, _c, _d, _e;
  const { key, ctrlKey, altKey, metaKey } = event;
  if (ctrlKey || altKey || metaKey) {
    return;
  }
  if (!this.keysUsed.includes(key)) {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  if (key === "Tab") {
    if (__privateGet23(this, _isPopover)) {
      this.hidden = true;
      return;
    }
    if (event.shiftKey) {
      (_b2 = (_a3 = this.previousElementSibling) == null ? void 0 : _a3.focus) == null ? void 0 : _b2.call(_a3);
    } else {
      (_d = (_c = this.nextElementSibling) == null ? void 0 : _c.focus) == null ? void 0 : _d.call(_c);
    }
    this.blur();
  } else if (key === "Escape") {
    (_e = __privateGet23(this, _previouslyFocused2)) == null ? void 0 : _e.focus();
    if (__privateGet23(this, _isPopover)) {
      this.hidden = true;
    }
  } else if (key === "Enter" || key === " ") {
    this.handleSelect(event);
  } else {
    this.handleMove(event);
  }
};
_getItem = /* @__PURE__ */ new WeakSet();
getItem_fn = function(event) {
  return event.composedPath().find((el) => {
    return ["menuitemradio", "menuitemcheckbox"].includes(
      el.role
    );
  });
};
_getTabItem = /* @__PURE__ */ new WeakSet();
getTabItem_fn = function() {
  return this.items.find((item) => item.tabIndex === 0);
};
_setTabItem = /* @__PURE__ */ new WeakSet();
setTabItem_fn = function(tabItem) {
  for (const item of this.items) {
    item.tabIndex = item === tabItem ? 0 : -1;
  }
};
_selectItem = /* @__PURE__ */ new WeakSet();
selectItem_fn = function(item, toggle) {
  const oldCheckedItems = [...this.checkedItems];
  if (item.type === "radio") {
    this.radioGroupItems.forEach((el) => el.checked = false);
  }
  if (toggle) {
    item.checked = !item.checked;
  } else {
    item.checked = true;
  }
  if (this.checkedItems.some((opt, i) => opt != oldCheckedItems[i])) {
    this.dispatchEvent(
      new Event("change", { bubbles: true, composed: true })
    );
  }
};
MediaChromeMenu.template = template13;
function isMenuItem(element) {
  return ["menuitem", "menuitemradio", "menuitemcheckbox"].includes(
    element == null ? void 0 : element.role
  );
}
function getBoundsElement(host) {
  var _a3;
  return (_a3 = host.getAttribute("bounds") ? closestComposedNode(host, `#${host.getAttribute("bounds")}`) : getMediaController(host) || host.parentElement) != null ? _a3 : host;
}
if (!GlobalThis.customElements.get("media-chrome-menu")) {
  GlobalThis.customElements.define("media-chrome-menu", MediaChromeMenu);
}

// ../../node_modules/media-chrome/dist/menu/media-chrome-menu-item.js
var __accessCheck24 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet24 = (obj, member, getter) => {
  __accessCheck24(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd24 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet23 = (obj, member, value, setter) => {
  __accessCheck24(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod10 = (obj, member, method) => {
  __accessCheck24(obj, member, "access private method");
  return method;
};
var _dirty;
var _ownerElement;
var _handleSlotChange2;
var handleSlotChange_fn2;
var _submenuConnected;
var submenuConnected_fn;
var _submenuDisconnected;
var submenuDisconnected_fn;
var _handleMenuItem;
var _handleKeyUp;
var handleKeyUp_fn;
var _handleKeyDown3;
var handleKeyDown_fn3;
var _reset;
var reset_fn;
var template14 = Document2.createElement("template");
template14.innerHTML = /*html*/
`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: pointer;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: pointer;
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    ${/* For all slotted icons in prefix and suffix. */
""}
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    ${/* Only for indicator icons like checked-indicator or captions-indicator. */
""}
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;
var Attributes14 = {
  TYPE: "type",
  VALUE: "value",
  CHECKED: "checked",
  DISABLED: "disabled"
};
var MediaChromeMenuItem = class extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd24(this, _handleSlotChange2);
    __privateAdd24(this, _submenuConnected);
    __privateAdd24(this, _submenuDisconnected);
    __privateAdd24(this, _handleKeyUp);
    __privateAdd24(this, _handleKeyDown3);
    __privateAdd24(this, _reset);
    __privateAdd24(this, _dirty, false);
    __privateAdd24(this, _ownerElement, void 0);
    __privateAdd24(this, _handleMenuItem, () => {
      var _a3, _b2;
      this.setAttribute("submenusize", `${this.submenuElement.items.length}`);
      const descriptionSlot = this.shadowRoot.querySelector(
        'slot[name="description"]'
      );
      const checkedItem = (_a3 = this.submenuElement.checkedItems) == null ? void 0 : _a3[0];
      const description = (_b2 = checkedItem == null ? void 0 : checkedItem.dataset.description) != null ? _b2 : checkedItem == null ? void 0 : checkedItem.text;
      const span = Document2.createElement("span");
      span.textContent = description != null ? description : "";
      descriptionSlot.replaceChildren(span);
    });
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.append(this.constructor.template.content.cloneNode(true));
    }
    this.shadowRoot.addEventListener("slotchange", this);
  }
  static get observedAttributes() {
    return [
      Attributes14.TYPE,
      Attributes14.DISABLED,
      Attributes14.CHECKED,
      Attributes14.VALUE
    ];
  }
  enable() {
    if (!this.hasAttribute("tabindex")) {
      this.setAttribute("tabindex", "-1");
    }
    if (isCheckable(this) && !this.hasAttribute("aria-checked")) {
      this.setAttribute("aria-checked", "false");
    }
    this.addEventListener("click", this);
    this.addEventListener("keydown", this);
  }
  disable() {
    this.removeAttribute("tabindex");
    this.removeEventListener("click", this);
    this.removeEventListener("keydown", this);
    this.removeEventListener("keyup", this);
  }
  handleEvent(event) {
    switch (event.type) {
      case "slotchange":
        __privateMethod10(this, _handleSlotChange2, handleSlotChange_fn2).call(this, event);
        break;
      case "click":
        this.handleClick(event);
        break;
      case "keydown":
        __privateMethod10(this, _handleKeyDown3, handleKeyDown_fn3).call(this, event);
        break;
      case "keyup":
        __privateMethod10(this, _handleKeyUp, handleKeyUp_fn).call(this, event);
        break;
    }
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === Attributes14.CHECKED && isCheckable(this) && !__privateGet24(this, _dirty)) {
      this.setAttribute("aria-checked", newValue != null ? "true" : "false");
    } else if (attrName === Attributes14.TYPE && newValue !== oldValue) {
      this.role = "menuitem" + newValue;
    } else if (attrName === Attributes14.DISABLED && newValue !== oldValue) {
      if (newValue == null) {
        this.enable();
      } else {
        this.disable();
      }
    }
  }
  connectedCallback() {
    if (!this.hasAttribute(Attributes14.DISABLED)) {
      this.enable();
    }
    this.role = "menuitem" + this.type;
    __privateSet23(this, _ownerElement, closestMenuItemsContainer(this, this.parentNode));
    __privateMethod10(this, _reset, reset_fn).call(this);
  }
  disconnectedCallback() {
    this.disable();
    __privateMethod10(this, _reset, reset_fn).call(this);
    __privateSet23(this, _ownerElement, null);
  }
  get invokeTarget() {
    return this.getAttribute("invoketarget");
  }
  set invokeTarget(value) {
    this.setAttribute("invoketarget", `${value}`);
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute
   * or the slotted submenu element.
   */
  get invokeTargetElement() {
    var _a3;
    if (this.invokeTarget) {
      return (_a3 = getDocumentOrShadowRoot(this)) == null ? void 0 : _a3.querySelector(
        `#${this.invokeTarget}`
      );
    }
    return this.submenuElement;
  }
  /**
   * Returns the slotted submenu element.
   */
  get submenuElement() {
    const submenuSlot = this.shadowRoot.querySelector(
      'slot[name="submenu"]'
    );
    return submenuSlot.assignedElements({
      flatten: true
    })[0];
  }
  get type() {
    var _a3;
    return (_a3 = this.getAttribute(Attributes14.TYPE)) != null ? _a3 : "";
  }
  set type(val) {
    this.setAttribute(Attributes14.TYPE, `${val}`);
  }
  get value() {
    var _a3;
    return (_a3 = this.getAttribute(Attributes14.VALUE)) != null ? _a3 : this.text;
  }
  set value(val) {
    this.setAttribute(Attributes14.VALUE, val);
  }
  get text() {
    var _a3;
    return ((_a3 = this.textContent) != null ? _a3 : "").trim();
  }
  get checked() {
    if (!isCheckable(this))
      return void 0;
    return this.getAttribute("aria-checked") === "true";
  }
  set checked(value) {
    if (!isCheckable(this))
      return;
    __privateSet23(this, _dirty, true);
    this.setAttribute("aria-checked", value ? "true" : "false");
    if (value) {
      this.part.add("checked");
    } else {
      this.part.remove("checked");
    }
  }
  handleClick(event) {
    if (isCheckable(this))
      return;
    if (this.invokeTargetElement && containsComposedNode(this, event.target)) {
      this.invokeTargetElement.dispatchEvent(
        new InvokeEvent({ relatedTarget: this })
      );
    }
  }
  get keysUsed() {
    return ["Enter", " "];
  }
};
_dirty = /* @__PURE__ */ new WeakMap();
_ownerElement = /* @__PURE__ */ new WeakMap();
_handleSlotChange2 = /* @__PURE__ */ new WeakSet();
handleSlotChange_fn2 = function(event) {
  const slot = event.target;
  const isDefaultSlot = !(slot == null ? void 0 : slot.name);
  if (isDefaultSlot) {
    for (const node of slot.assignedNodes({ flatten: true })) {
      if (node instanceof Text && node.textContent.trim() === "") {
        node.remove();
      }
    }
  }
  if (slot.name === "submenu") {
    if (this.submenuElement) {
      __privateMethod10(this, _submenuConnected, submenuConnected_fn).call(this);
    } else {
      __privateMethod10(this, _submenuDisconnected, submenuDisconnected_fn).call(this);
    }
  }
};
_submenuConnected = /* @__PURE__ */ new WeakSet();
submenuConnected_fn = async function() {
  this.setAttribute("aria-haspopup", "menu");
  this.setAttribute("aria-expanded", `${!this.submenuElement.hidden}`);
  this.submenuElement.addEventListener("change", __privateGet24(this, _handleMenuItem));
  this.submenuElement.addEventListener("addmenuitem", __privateGet24(this, _handleMenuItem));
  this.submenuElement.addEventListener(
    "removemenuitem",
    __privateGet24(this, _handleMenuItem)
  );
  __privateGet24(this, _handleMenuItem).call(this);
};
_submenuDisconnected = /* @__PURE__ */ new WeakSet();
submenuDisconnected_fn = function() {
  this.removeAttribute("aria-haspopup");
  this.removeAttribute("aria-expanded");
  this.submenuElement.removeEventListener("change", __privateGet24(this, _handleMenuItem));
  this.submenuElement.removeEventListener(
    "addmenuitem",
    __privateGet24(this, _handleMenuItem)
  );
  this.submenuElement.removeEventListener(
    "removemenuitem",
    __privateGet24(this, _handleMenuItem)
  );
  __privateGet24(this, _handleMenuItem).call(this);
};
_handleMenuItem = /* @__PURE__ */ new WeakMap();
_handleKeyUp = /* @__PURE__ */ new WeakSet();
handleKeyUp_fn = function(event) {
  const { key } = event;
  if (!this.keysUsed.includes(key)) {
    this.removeEventListener("keyup", __privateMethod10(this, _handleKeyUp, handleKeyUp_fn));
    return;
  }
  this.handleClick(event);
};
_handleKeyDown3 = /* @__PURE__ */ new WeakSet();
handleKeyDown_fn3 = function(event) {
  const { metaKey, altKey, key } = event;
  if (metaKey || altKey || !this.keysUsed.includes(key)) {
    this.removeEventListener("keyup", __privateMethod10(this, _handleKeyUp, handleKeyUp_fn));
    return;
  }
  this.addEventListener("keyup", __privateMethod10(this, _handleKeyUp, handleKeyUp_fn), { once: true });
};
_reset = /* @__PURE__ */ new WeakSet();
reset_fn = function() {
  var _a3;
  const items = (_a3 = __privateGet24(this, _ownerElement)) == null ? void 0 : _a3.radioGroupItems;
  if (!items)
    return;
  let checkedItem = items.filter((item) => item.getAttribute("aria-checked") === "true").pop();
  if (!checkedItem)
    checkedItem = items[0];
  for (const item of items) {
    item.setAttribute("aria-checked", "false");
  }
  checkedItem == null ? void 0 : checkedItem.setAttribute("aria-checked", "true");
};
MediaChromeMenuItem.template = template14;
function isCheckable(item) {
  return item.type === "radio" || item.type === "checkbox";
}
function closestMenuItemsContainer(childNode, parentNode) {
  if (!childNode)
    return null;
  const { host } = childNode.getRootNode();
  if (!parentNode && host)
    return closestMenuItemsContainer(childNode, host);
  if (parentNode == null ? void 0 : parentNode.items)
    return parentNode;
  return closestMenuItemsContainer(parentNode, parentNode == null ? void 0 : parentNode.parentNode);
}
if (!GlobalThis.customElements.get("media-chrome-menu-item")) {
  GlobalThis.customElements.define(
    "media-chrome-menu-item",
    MediaChromeMenuItem
  );
}

// ../../node_modules/media-chrome/dist/menu/media-settings-menu.js
var template15 = Document2.createElement("template");
template15.innerHTML = MediaChromeMenu.template.innerHTML + /*html*/
`
  <style>
    :host {
      --_menu-bg: rgb(20 20 30 / .8);
      background: var(--media-settings-menu-background,
          var(--media-menu-background,
            var(--media-control-background,
              var(--media-secondary-color, var(--_menu-bg)))));
      min-width: var(--media-settings-menu-min-width, 170px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    @-moz-document url-prefix() {
      :host{
        --_menu-bg: rgb(20 20 30);
      }
    }

    :host([role="menu"]) {
      ${/* Bottom fix setting menu items for animation when the height expands. */
""}
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;
var MediaSettingsMenu = class extends MediaChromeMenu {
  /**
   * Returns the anchor element when it is a floating menu.
   */
  get anchorElement() {
    if (this.anchor !== "auto")
      return super.anchorElement;
    return getMediaController(this).querySelector(
      "media-settings-menu-button"
    );
  }
};
MediaSettingsMenu.template = template15;
if (!GlobalThis.customElements.get("media-settings-menu")) {
  GlobalThis.customElements.define("media-settings-menu", MediaSettingsMenu);
}

// ../../node_modules/media-chrome/dist/menu/media-settings-menu-item.js
var _a;
var template16 = Document2.createElement("template");
template16.innerHTML = MediaChromeMenuItem.template.innerHTML + /*html*/
`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`;
if ((_a = template16.content) == null ? void 0 : _a.querySelector) {
  template16.content.querySelector('slot[name="suffix"]').innerHTML = /*html*/
  `
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `;
}
var MediaSettingsMenuItem = class extends MediaChromeMenuItem {
};
MediaSettingsMenuItem.template = template16;
if (!GlobalThis.customElements.get("media-settings-menu-item")) {
  GlobalThis.customElements.define(
    "media-settings-menu-item",
    MediaSettingsMenuItem
  );
}

// ../../node_modules/media-chrome/dist/menu/media-chrome-menu-button.js
var MediaChromeMenuButton = class extends MediaChromeButton {
  connectedCallback() {
    super.connectedCallback();
    if (this.invokeTargetElement) {
      this.setAttribute("aria-haspopup", "menu");
    }
  }
  get invokeTarget() {
    return this.getAttribute("invoketarget");
  }
  set invokeTarget(value) {
    this.setAttribute("invoketarget", `${value}`);
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   * @return {HTMLElement | null}
   */
  get invokeTargetElement() {
    var _a3;
    if (this.invokeTarget) {
      return (_a3 = getDocumentOrShadowRoot(this)) == null ? void 0 : _a3.querySelector(
        `#${this.invokeTarget}`
      );
    }
    return null;
  }
  handleClick() {
    var _a3;
    (_a3 = this.invokeTargetElement) == null ? void 0 : _a3.dispatchEvent(
      new InvokeEvent({ relatedTarget: this })
    );
  }
};
if (!GlobalThis.customElements.get("media-chrome-menu-button")) {
  GlobalThis.customElements.define(
    "media-chrome-menu-button",
    MediaChromeMenuButton
  );
}

// ../../node_modules/media-chrome/dist/menu/media-settings-menu-button.js
var slotTemplate12 = Document2.createElement("template");
slotTemplate12.innerHTML = /*html*/
`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;
var MediaSettingsMenuButton = class extends MediaChromeMenuButton {
  static get observedAttributes() {
    return [...super.observedAttributes, "target"];
  }
  constructor() {
    super({ slotTemplate: slotTemplate12, tooltipContent: t("Settings") });
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("aria-label", t("settings"));
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   * @return {HTMLElement | null}
   */
  get invokeTargetElement() {
    if (this.invokeTarget != void 0)
      return super.invokeTargetElement;
    return getMediaController(this).querySelector("media-settings-menu");
  }
};
if (!GlobalThis.customElements.get("media-settings-menu-button")) {
  GlobalThis.customElements.define(
    "media-settings-menu-button",
    MediaSettingsMenuButton
  );
}

// ../../node_modules/media-chrome/dist/menu/media-audio-track-menu.js
var __accessCheck25 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet25 = (obj, member, getter) => {
  __accessCheck25(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd25 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet24 = (obj, member, value, setter) => {
  __accessCheck25(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod11 = (obj, member, method) => {
  __accessCheck25(obj, member, "access private method");
  return method;
};
var _audioTrackList;
var _prevState;
var _render;
var render_fn;
var _onChange;
var onChange_fn;
var MediaAudioTrackMenu = class extends MediaChromeMenu {
  constructor() {
    super(...arguments);
    __privateAdd25(this, _render);
    __privateAdd25(this, _onChange);
    __privateAdd25(this, _audioTrackList, []);
    __privateAdd25(this, _prevState, void 0);
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_AUDIO_TRACK_LIST,
      MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED,
      MediaUIAttributes.MEDIA_AUDIO_TRACK_UNAVAILABLE
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED && oldValue !== newValue) {
      this.value = newValue;
    } else if (attrName === MediaUIAttributes.MEDIA_AUDIO_TRACK_LIST && oldValue !== newValue) {
      __privateSet24(this, _audioTrackList, parseAudioTrackList(newValue != null ? newValue : ""));
      __privateMethod11(this, _render, render_fn).call(this);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", __privateMethod11(this, _onChange, onChange_fn));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("change", __privateMethod11(this, _onChange, onChange_fn));
  }
  /**
   * Returns the anchor element when it is a floating menu.
   */
  get anchorElement() {
    var _a3;
    if (this.anchor !== "auto")
      return super.anchorElement;
    return (_a3 = getMediaController(this)) == null ? void 0 : _a3.querySelector(
      "media-audio-track-menu-button"
    );
  }
  get mediaAudioTrackList() {
    return __privateGet25(this, _audioTrackList);
  }
  set mediaAudioTrackList(list) {
    __privateSet24(this, _audioTrackList, list);
    __privateMethod11(this, _render, render_fn).call(this);
  }
  /**
   * Get enabled audio track id.
   */
  get mediaAudioTrackEnabled() {
    var _a3;
    return (_a3 = getStringAttr(this, MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED)) != null ? _a3 : "";
  }
  set mediaAudioTrackEnabled(id) {
    setStringAttr(this, MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED, id);
  }
};
_audioTrackList = /* @__PURE__ */ new WeakMap();
_prevState = /* @__PURE__ */ new WeakMap();
_render = /* @__PURE__ */ new WeakSet();
render_fn = function() {
  if (__privateGet25(this, _prevState) === JSON.stringify(this.mediaAudioTrackList))
    return;
  __privateSet24(this, _prevState, JSON.stringify(this.mediaAudioTrackList));
  const audioTrackList = this.mediaAudioTrackList;
  this.defaultSlot.textContent = "";
  for (const audioTrack of audioTrackList) {
    const text = this.formatMenuItemText(audioTrack.label, audioTrack);
    const item = createMenuItem({
      type: "radio",
      text,
      value: `${audioTrack.id}`,
      checked: audioTrack.enabled
    });
    item.prepend(createIndicator(this, "checked-indicator"));
    this.defaultSlot.append(item);
  }
};
_onChange = /* @__PURE__ */ new WeakSet();
onChange_fn = function() {
  if (this.value == null)
    return;
  const event = new GlobalThis.CustomEvent(
    MediaUIEvents.MEDIA_AUDIO_TRACK_REQUEST,
    {
      composed: true,
      bubbles: true,
      detail: this.value
    }
  );
  this.dispatchEvent(event);
};
if (!GlobalThis.customElements.get("media-audio-track-menu")) {
  GlobalThis.customElements.define(
    "media-audio-track-menu",
    MediaAudioTrackMenu
  );
}

// ../../node_modules/media-chrome/dist/menu/media-audio-track-menu-button.js
var audioTrackIcon = (
  /*html*/
  `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`
);
var slotTemplate13 = Document2.createElement("template");
slotTemplate13.innerHTML = /*html*/
`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${audioTrackIcon}</slot>
`;
var MediaAudioTrackMenuButton = class extends MediaChromeMenuButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED,
      MediaUIAttributes.MEDIA_AUDIO_TRACK_UNAVAILABLE
    ];
  }
  constructor() {
    super({ slotTemplate: slotTemplate13, tooltipContent: t("Audio") });
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("aria-label", t("Audio"));
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   * @return {HTMLElement | null}
   */
  get invokeTargetElement() {
    var _a3;
    if (this.invokeTarget != void 0)
      return super.invokeTargetElement;
    return (_a3 = getMediaController(this)) == null ? void 0 : _a3.querySelector("media-audio-track-menu");
  }
  /**
   * Get enabled audio track id.
   * @return {string}
   */
  get mediaAudioTrackEnabled() {
    var _a3;
    return (_a3 = getStringAttr(this, MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED)) != null ? _a3 : "";
  }
  set mediaAudioTrackEnabled(id) {
    setStringAttr(this, MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED, id);
  }
};
if (!GlobalThis.customElements.get("media-audio-track-menu-button")) {
  GlobalThis.customElements.define(
    "media-audio-track-menu-button",
    MediaAudioTrackMenuButton
  );
}

// ../../node_modules/media-chrome/dist/menu/media-captions-menu.js
var __accessCheck26 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet26 = (obj, member, getter) => {
  __accessCheck26(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd26 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet25 = (obj, member, value, setter) => {
  __accessCheck26(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod12 = (obj, member, method) => {
  __accessCheck26(obj, member, "access private method");
  return method;
};
var _prevState2;
var _render2;
var render_fn2;
var _onChange2;
var onChange_fn2;
var ccIcon = (
  /*html*/
  `
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`
);
var template17 = Document2.createElement("template");
template17.innerHTML = MediaChromeMenu.template.innerHTML + /*html*/
`
  <slot name="captions-indicator" hidden>${ccIcon}</slot>`;
var MediaCaptionsMenu = class extends MediaChromeMenu {
  constructor() {
    super(...arguments);
    __privateAdd26(this, _render2);
    __privateAdd26(this, _onChange2);
    __privateAdd26(this, _prevState2, void 0);
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_SUBTITLES_LIST,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_SUBTITLES_LIST && oldValue !== newValue) {
      __privateMethod12(this, _render2, render_fn2).call(this);
    } else if (attrName === MediaUIAttributes.MEDIA_SUBTITLES_SHOWING && oldValue !== newValue) {
      this.value = newValue;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", __privateMethod12(this, _onChange2, onChange_fn2));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("change", __privateMethod12(this, _onChange2, onChange_fn2));
  }
  /**
   * Returns the anchor element when it is a floating menu.
   */
  get anchorElement() {
    if (this.anchor !== "auto")
      return super.anchorElement;
    return getMediaController(this).querySelector("media-captions-menu-button");
  }
  /**
   * @type {Array<object>} An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */
  get mediaSubtitlesList() {
    return getSubtitlesListAttr2(this, MediaUIAttributes.MEDIA_SUBTITLES_LIST);
  }
  set mediaSubtitlesList(list) {
    setSubtitlesListAttr2(this, MediaUIAttributes.MEDIA_SUBTITLES_LIST, list);
  }
  /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */
  get mediaSubtitlesShowing() {
    return getSubtitlesListAttr2(
      this,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    );
  }
  set mediaSubtitlesShowing(list) {
    setSubtitlesListAttr2(this, MediaUIAttributes.MEDIA_SUBTITLES_SHOWING, list);
  }
};
_prevState2 = /* @__PURE__ */ new WeakMap();
_render2 = /* @__PURE__ */ new WeakSet();
render_fn2 = function() {
  var _a3;
  if (__privateGet26(this, _prevState2) === JSON.stringify(this.mediaSubtitlesList))
    return;
  __privateSet25(this, _prevState2, JSON.stringify(this.mediaSubtitlesList));
  this.defaultSlot.textContent = "";
  const isOff = !this.value;
  const item = createMenuItem({
    type: "radio",
    text: this.formatMenuItemText("Off"),
    value: "off",
    checked: isOff
  });
  item.prepend(createIndicator(this, "checked-indicator"));
  this.defaultSlot.append(item);
  const subtitlesList = this.mediaSubtitlesList;
  for (const subs of subtitlesList) {
    const item2 = createMenuItem({
      type: "radio",
      text: this.formatMenuItemText(subs.label, subs),
      value: formatTextTrackObj(subs),
      checked: this.value == formatTextTrackObj(subs)
    });
    item2.prepend(createIndicator(this, "checked-indicator"));
    const type = (_a3 = subs.kind) != null ? _a3 : "subs";
    if (type === "captions") {
      item2.append(createIndicator(this, "captions-indicator"));
    }
    this.defaultSlot.append(item2);
  }
};
_onChange2 = /* @__PURE__ */ new WeakSet();
onChange_fn2 = function() {
  const showingSubs = this.mediaSubtitlesShowing;
  const showingSubsStr = this.getAttribute(
    MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
  );
  const localStateChange = this.value !== showingSubsStr;
  if ((showingSubs == null ? void 0 : showingSubs.length) && localStateChange) {
    this.dispatchEvent(
      new GlobalThis.CustomEvent(
        MediaUIEvents.MEDIA_DISABLE_SUBTITLES_REQUEST,
        {
          composed: true,
          bubbles: true,
          detail: showingSubs
        }
      )
    );
  }
  if (!this.value || !localStateChange)
    return;
  const event = new GlobalThis.CustomEvent(
    MediaUIEvents.MEDIA_SHOW_SUBTITLES_REQUEST,
    {
      composed: true,
      bubbles: true,
      detail: this.value
    }
  );
  this.dispatchEvent(event);
};
MediaCaptionsMenu.template = template17;
var getSubtitlesListAttr2 = (el, attrName) => {
  const attrVal = el.getAttribute(attrName);
  return attrVal ? parseTextTracksStr(attrVal) : [];
};
var setSubtitlesListAttr2 = (el, attrName, list) => {
  if (!(list == null ? void 0 : list.length)) {
    el.removeAttribute(attrName);
    return;
  }
  const newValStr = stringifyTextTrackList(list);
  const oldVal = el.getAttribute(attrName);
  if (oldVal === newValStr)
    return;
  el.setAttribute(attrName, newValStr);
};
if (!GlobalThis.customElements.get("media-captions-menu")) {
  GlobalThis.customElements.define("media-captions-menu", MediaCaptionsMenu);
}

// ../../node_modules/media-chrome/dist/menu/media-captions-menu-button.js
var __accessCheck27 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateAdd27 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet26 = (obj, member, value, setter) => {
  __accessCheck27(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _captionsReady;
var ccIconOn2 = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`;
var ccIconOff2 = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;
var slotTemplate14 = Document2.createElement("template");
slotTemplate14.innerHTML = /*html*/
`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    ${/* Double negative, but safer if display doesn't equal 'block' */
""}
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${ccIconOn2}</slot>
    <slot name="off">${ccIconOff2}</slot>
  </slot>
`;
var updateAriaChecked2 = (el) => {
  el.setAttribute("aria-checked", areSubsOn(el).toString());
};
var MediaCaptionsMenuButton = class extends MediaChromeMenuButton {
  constructor(options = {}) {
    super({ slotTemplate: slotTemplate14, tooltipContent: t("Captions"), ...options });
    __privateAdd27(this, _captionsReady, void 0);
    __privateSet26(this, _captionsReady, false);
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_SUBTITLES_LIST,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("aria-label", t("closed captions"));
    updateAriaChecked2(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_SUBTITLES_SHOWING) {
      updateAriaChecked2(this);
    }
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   * @return {HTMLElement | null}
   */
  get invokeTargetElement() {
    var _a3;
    if (this.invokeTarget != void 0)
      return super.invokeTargetElement;
    return (_a3 = getMediaController(this)) == null ? void 0 : _a3.querySelector("media-captions-menu");
  }
  /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */
  get mediaSubtitlesList() {
    return getSubtitlesListAttr3(this, MediaUIAttributes.MEDIA_SUBTITLES_LIST);
  }
  set mediaSubtitlesList(list) {
    setSubtitlesListAttr3(this, MediaUIAttributes.MEDIA_SUBTITLES_LIST, list);
  }
  /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */
  get mediaSubtitlesShowing() {
    return getSubtitlesListAttr3(
      this,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    );
  }
  set mediaSubtitlesShowing(list) {
    setSubtitlesListAttr3(this, MediaUIAttributes.MEDIA_SUBTITLES_SHOWING, list);
  }
};
_captionsReady = /* @__PURE__ */ new WeakMap();
var getSubtitlesListAttr3 = (el, attrName) => {
  const attrVal = el.getAttribute(attrName);
  return attrVal ? parseTextTracksStr(attrVal) : [];
};
var setSubtitlesListAttr3 = (el, attrName, list) => {
  if (!(list == null ? void 0 : list.length)) {
    el.removeAttribute(attrName);
    return;
  }
  const newValStr = stringifyTextTrackList(list);
  const oldVal = el.getAttribute(attrName);
  if (oldVal === newValStr)
    return;
  el.setAttribute(attrName, newValStr);
};
if (!GlobalThis.customElements.get("media-captions-menu-button")) {
  GlobalThis.customElements.define(
    "media-captions-menu-button",
    MediaCaptionsMenuButton
  );
}

// ../../node_modules/media-chrome/dist/menu/media-playback-rate-menu.js
var __accessCheck28 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet27 = (obj, member, getter) => {
  __accessCheck28(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd28 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod13 = (obj, member, method) => {
  __accessCheck28(obj, member, "access private method");
  return method;
};
var _rates2;
var _render3;
var render_fn3;
var _onChange3;
var onChange_fn3;
var Attributes15 = {
  RATES: "rates"
};
var MediaPlaybackRateMenu = class extends MediaChromeMenu {
  constructor() {
    super();
    __privateAdd28(this, _render3);
    __privateAdd28(this, _onChange3);
    __privateAdd28(this, _rates2, new AttributeTokenList(this, Attributes15.RATES, {
      defaultValue: DEFAULT_RATES
    }));
    __privateMethod13(this, _render3, render_fn3).call(this);
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      Attributes15.RATES
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_PLAYBACK_RATE && oldValue != newValue) {
      this.value = newValue;
    } else if (attrName === Attributes15.RATES && oldValue != newValue) {
      __privateGet27(this, _rates2).value = newValue;
      __privateMethod13(this, _render3, render_fn3).call(this);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", __privateMethod13(this, _onChange3, onChange_fn3));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("change", __privateMethod13(this, _onChange3, onChange_fn3));
  }
  /**
   * Returns the anchor element when it is a floating menu.
   */
  get anchorElement() {
    if (this.anchor !== "auto")
      return super.anchorElement;
    return getMediaController(this).querySelector(
      "media-playback-rate-menu-button"
    );
  }
  /**
   * Will return a DOMTokenList.
   * Setting a value will accept an array of numbers.
   */
  get rates() {
    return __privateGet27(this, _rates2);
  }
  set rates(value) {
    if (!value) {
      __privateGet27(this, _rates2).value = "";
    } else if (Array.isArray(value)) {
      __privateGet27(this, _rates2).value = value.join(" ");
    }
    __privateMethod13(this, _render3, render_fn3).call(this);
  }
  /**
   * The current playback rate
   */
  get mediaPlaybackRate() {
    return getNumericAttr(
      this,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      DEFAULT_RATE
    );
  }
  set mediaPlaybackRate(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, value);
  }
};
_rates2 = /* @__PURE__ */ new WeakMap();
_render3 = /* @__PURE__ */ new WeakSet();
render_fn3 = function() {
  this.defaultSlot.textContent = "";
  for (const rate of this.rates) {
    const item = createMenuItem({
      type: "radio",
      text: this.formatMenuItemText(`${rate}x`, rate),
      value: rate,
      checked: this.mediaPlaybackRate == rate
    });
    item.prepend(createIndicator(this, "checked-indicator"));
    this.defaultSlot.append(item);
  }
};
_onChange3 = /* @__PURE__ */ new WeakSet();
onChange_fn3 = function() {
  if (!this.value)
    return;
  const event = new GlobalThis.CustomEvent(
    MediaUIEvents.MEDIA_PLAYBACK_RATE_REQUEST,
    {
      composed: true,
      bubbles: true,
      detail: this.value
    }
  );
  this.dispatchEvent(event);
};
if (!GlobalThis.customElements.get("media-playback-rate-menu")) {
  GlobalThis.customElements.define(
    "media-playback-rate-menu",
    MediaPlaybackRateMenu
  );
}

// ../../node_modules/media-chrome/dist/menu/media-playback-rate-menu-button.js
var __accessCheck29 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet28 = (obj, member, getter) => {
  __accessCheck29(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd29 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var _rates3;
var Attributes16 = {
  RATES: "rates"
};
var DEFAULT_RATES2 = [1, 1.2, 1.5, 1.7, 2];
var DEFAULT_RATE2 = 1;
var slotTemplate15 = Document2.createElement("template");
slotTemplate15.innerHTML = /*html*/
`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
    
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon"></slot>
`;
var MediaPlaybackRateMenuButton = class extends MediaChromeMenuButton {
  constructor(options = {}) {
    super({
      slotTemplate: slotTemplate15,
      tooltipContent: t("Playback rate"),
      ...options
    });
    __privateAdd29(this, _rates3, new AttributeTokenList(this, Attributes16.RATES, {
      defaultValue: DEFAULT_RATES2
    }));
    this.container = this.shadowRoot.querySelector('slot[name="icon"]');
    this.container.innerHTML = `${DEFAULT_RATE2}x`;
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      Attributes16.RATES
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === Attributes16.RATES) {
      __privateGet28(this, _rates3).value = newValue;
    }
    if (attrName === MediaUIAttributes.MEDIA_PLAYBACK_RATE) {
      const newPlaybackRate = newValue ? +newValue : Number.NaN;
      const playbackRate = !Number.isNaN(newPlaybackRate) ? newPlaybackRate : DEFAULT_RATE2;
      this.container.innerHTML = `${playbackRate}x`;
      this.setAttribute(
        "aria-label",
        t("Playback rate {playbackRate}", { playbackRate })
      );
    }
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   */
  get invokeTargetElement() {
    if (this.invokeTarget != void 0)
      return super.invokeTargetElement;
    return getMediaController(this).querySelector("media-playback-rate-menu");
  }
  /**
   * Will return a DOMTokenList.
   * Setting a value will accept an array of numbers.
   */
  get rates() {
    return __privateGet28(this, _rates3);
  }
  set rates(value) {
    if (!value) {
      __privateGet28(this, _rates3).value = "";
    } else if (Array.isArray(value)) {
      __privateGet28(this, _rates3).value = value.join(" ");
    }
  }
  /**
   * The current playback rate
   */
  get mediaPlaybackRate() {
    return getNumericAttr(
      this,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      DEFAULT_RATE2
    );
  }
  set mediaPlaybackRate(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, value);
  }
};
_rates3 = /* @__PURE__ */ new WeakMap();
if (!GlobalThis.customElements.get("media-playback-rate-menu-button")) {
  GlobalThis.customElements.define(
    "media-playback-rate-menu-button",
    MediaPlaybackRateMenuButton
  );
}

// ../../node_modules/media-chrome/dist/menu/media-rendition-menu.js
var __accessCheck30 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet29 = (obj, member, getter) => {
  __accessCheck30(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd30 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet27 = (obj, member, value, setter) => {
  __accessCheck30(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod14 = (obj, member, method) => {
  __accessCheck30(obj, member, "access private method");
  return method;
};
var _renditionList;
var _prevState3;
var _render4;
var render_fn4;
var _onChange4;
var onChange_fn4;
var MediaRenditionMenu = class extends MediaChromeMenu {
  constructor() {
    super(...arguments);
    __privateAdd30(this, _render4);
    __privateAdd30(this, _onChange4);
    __privateAdd30(this, _renditionList, []);
    __privateAdd30(this, _prevState3, {});
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_RENDITION_LIST,
      MediaUIAttributes.MEDIA_RENDITION_SELECTED,
      MediaUIAttributes.MEDIA_RENDITION_UNAVAILABLE,
      MediaUIAttributes.MEDIA_HEIGHT
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_RENDITION_SELECTED && oldValue !== newValue) {
      this.value = newValue != null ? newValue : "auto";
      __privateMethod14(this, _render4, render_fn4).call(this);
    } else if (attrName === MediaUIAttributes.MEDIA_RENDITION_LIST && oldValue !== newValue) {
      __privateSet27(this, _renditionList, parseRenditionList(newValue));
      __privateMethod14(this, _render4, render_fn4).call(this);
    } else if (attrName === MediaUIAttributes.MEDIA_HEIGHT && oldValue !== newValue) {
      __privateMethod14(this, _render4, render_fn4).call(this);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", __privateMethod14(this, _onChange4, onChange_fn4));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("change", __privateMethod14(this, _onChange4, onChange_fn4));
  }
  /**
   * Returns the anchor element when it is a floating menu.
   */
  get anchorElement() {
    if (this.anchor !== "auto")
      return super.anchorElement;
    return getMediaController(this).querySelector(
      "media-rendition-menu-button"
    );
  }
  get mediaRenditionList() {
    return __privateGet29(this, _renditionList);
  }
  set mediaRenditionList(list) {
    __privateSet27(this, _renditionList, list);
    __privateMethod14(this, _render4, render_fn4).call(this);
  }
  /**
   * Get selected rendition id.
   */
  get mediaRenditionSelected() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_RENDITION_SELECTED);
  }
  set mediaRenditionSelected(id) {
    setStringAttr(this, MediaUIAttributes.MEDIA_RENDITION_SELECTED, id);
  }
  get mediaHeight() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_HEIGHT);
  }
  set mediaHeight(height) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_HEIGHT, height);
  }
};
_renditionList = /* @__PURE__ */ new WeakMap();
_prevState3 = /* @__PURE__ */ new WeakMap();
_render4 = /* @__PURE__ */ new WeakSet();
render_fn4 = function() {
  if (__privateGet29(this, _prevState3).mediaRenditionList === JSON.stringify(this.mediaRenditionList) && __privateGet29(this, _prevState3).mediaHeight === this.mediaHeight)
    return;
  __privateGet29(this, _prevState3).mediaRenditionList = JSON.stringify(this.mediaRenditionList);
  __privateGet29(this, _prevState3).mediaHeight = this.mediaHeight;
  const renditionList = this.mediaRenditionList.sort(
    (a, b) => b.height - a.height
  );
  for (const rendition of renditionList) {
    rendition.selected = rendition.id === this.mediaRenditionSelected;
  }
  this.defaultSlot.textContent = "";
  const isAuto = !this.mediaRenditionSelected;
  for (const rendition of renditionList) {
    const text2 = this.formatMenuItemText(
      `${Math.min(rendition.width, rendition.height)}p`,
      rendition
    );
    const item2 = createMenuItem({
      type: "radio",
      text: text2,
      value: `${rendition.id}`,
      checked: rendition.selected && !isAuto
    });
    item2.prepend(createIndicator(this, "checked-indicator"));
    this.defaultSlot.append(item2);
  }
  const text = isAuto ? this.formatMenuItemText(`Auto (${this.mediaHeight}p)`) : this.formatMenuItemText("Auto");
  const item = createMenuItem({
    type: "radio",
    text,
    value: "auto",
    checked: isAuto
  });
  const autoDescription = this.mediaHeight > 0 ? `Auto (${this.mediaHeight}p)` : "Auto";
  item.dataset.description = autoDescription;
  item.prepend(createIndicator(this, "checked-indicator"));
  this.defaultSlot.append(item);
};
_onChange4 = /* @__PURE__ */ new WeakSet();
onChange_fn4 = function() {
  if (this.value == null)
    return;
  const event = new GlobalThis.CustomEvent(
    MediaUIEvents.MEDIA_RENDITION_REQUEST,
    {
      composed: true,
      bubbles: true,
      detail: this.value
    }
  );
  this.dispatchEvent(event);
};
if (!GlobalThis.customElements.get("media-rendition-menu")) {
  GlobalThis.customElements.define("media-rendition-menu", MediaRenditionMenu);
}

// ../../node_modules/media-chrome/dist/menu/media-rendition-menu-button.js
var renditionIcon = (
  /*html*/
  `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`
);
var slotTemplate16 = Document2.createElement("template");
slotTemplate16.innerHTML = /*html*/
`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${renditionIcon}</slot>
`;
var MediaRenditionMenuButton = class extends MediaChromeMenuButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_RENDITION_SELECTED,
      MediaUIAttributes.MEDIA_RENDITION_UNAVAILABLE,
      MediaUIAttributes.MEDIA_HEIGHT
    ];
  }
  constructor() {
    super({ slotTemplate: slotTemplate16, tooltipContent: t("Quality") });
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("aria-label", t("quality"));
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   */
  get invokeTargetElement() {
    if (this.invokeTarget != void 0)
      return super.invokeTargetElement;
    return getMediaController(this).querySelector("media-rendition-menu");
  }
  /**
   * Get selected rendition id.
   */
  get mediaRenditionSelected() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_RENDITION_SELECTED);
  }
  set mediaRenditionSelected(id) {
    setStringAttr(this, MediaUIAttributes.MEDIA_RENDITION_SELECTED, id);
  }
  get mediaHeight() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_HEIGHT);
  }
  set mediaHeight(height) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_HEIGHT, height);
  }
};
if (!GlobalThis.customElements.get("media-rendition-menu-button")) {
  GlobalThis.customElements.define(
    "media-rendition-menu-button",
    MediaRenditionMenuButton
  );
}

// src/themes/gerwig/index.ts
var template18 = internalDocument.createElement("template");
if ("innerHTML" in template18) template18.innerHTML = gerwig_default;
var _a2, _b;
var MediaThemeGerwig = class extends MediaThemeElement {
};
MediaThemeGerwig.template = (_b = (_a2 = template18.content) == null ? void 0 : _a2.children) == null ? void 0 : _b[0];
if (!internalGlobalThis.customElements.get("media-theme-gerwig")) {
  internalGlobalThis.customElements.define("media-theme-gerwig", MediaThemeGerwig);
}

// src/index.ts
var DefaultThemeName = "gerwig";
var VideoAttributes = {
  SRC: "src",
  POSTER: "poster"
};
var PlayerAttributes = {
  STYLE: "style",
  DEFAULT_HIDDEN_CAPTIONS: "default-hidden-captions",
  PRIMARY_COLOR: "primary-color",
  SECONDARY_COLOR: "secondary-color",
  ACCENT_COLOR: "accent-color",
  FORWARD_SEEK_OFFSET: "forward-seek-offset",
  BACKWARD_SEEK_OFFSET: "backward-seek-offset",
  PLAYBACK_TOKEN: "playback-token",
  THUMBNAIL_TOKEN: "thumbnail-token",
  STORYBOARD_TOKEN: "storyboard-token",
  DRM_TOKEN: "drm-token",
  STORYBOARD_SRC: "storyboard-src",
  THUMBNAIL_TIME: "thumbnail-time",
  AUDIO: "audio",
  NOHOTKEYS: "nohotkeys",
  HOTKEYS: "hotkeys",
  PLAYBACK_RATES: "playbackrates",
  DEFAULT_SHOW_REMAINING_TIME: "default-show-remaining-time",
  DEFAULT_DURATION: "default-duration",
  TITLE: "title",
  PLACEHOLDER: "placeholder",
  THEME: "theme",
  DEFAULT_STREAM_TYPE: "default-stream-type",
  TARGET_LIVE_WINDOW: "target-live-window",
  EXTRA_SOURCE_PARAMS: "extra-source-params",
  NO_VOLUME_PREF: "no-volume-pref",
  CAST_RECEIVER: "cast-receiver",
  NO_TOOLTIPS: "no-tooltips",
  PROUDLY_DISPLAY_MUX_BADGE: "proudly-display-mux-badge",
  AD_TAG_URL: "adtagurl"
};
var ThemeAttributeNames = [
  "audio",
  "backwardseekoffset",
  "defaultduration",
  "defaultshowremainingtime",
  "defaultsubtitles",
  "noautoseektolive",
  "disabled",
  "exportparts",
  "forwardseekoffset",
  "hideduration",
  "hotkeys",
  "nohotkeys",
  "playbackrates",
  "defaultstreamtype",
  "streamtype",
  "style",
  "targetlivewindow",
  "template",
  "title",
  "novolumepref",
  "proudlydisplaymuxbadge",
  "mediaadbreak"
];
function getProps(el, state) {
  var _a3, _b2;
  const props = {
    // Give priority to playbackId derrived asset URL's if playbackId is set.
    src: !el.playbackId && el.src,
    playbackId: el.playbackId,
    hasSrc: !!el.playbackId || !!el.src || !!el.currentSrc,
    poster: el.poster,
    storyboard: el.storyboard,
    storyboardSrc: el.getAttribute(PlayerAttributes.STORYBOARD_SRC),
    placeholder: el.getAttribute("placeholder"),
    themeTemplate: getThemeTemplate(el),
    thumbnailTime: !el.tokens.thumbnail && el.thumbnailTime,
    autoplay: el.autoplay,
    crossOrigin: el.crossOrigin,
    loop: el.loop,
    // NOTE: Renaming internal prop due to state (sometimes derived from attributeChangedCallback attr values)
    // overwriting prop value (type mismatch: string vs. boolean) (CJP)
    noHotKeys: el.hasAttribute(PlayerAttributes.NOHOTKEYS),
    hotKeys: el.getAttribute(PlayerAttributes.HOTKEYS),
    muted: el.muted,
    paused: el.paused,
    // NOTE: Currently unsupported due to "default true attribute" problem
    // playsInline: el.playsInline,
    preload: el.preload,
    envKey: el.envKey,
    preferCmcd: el.preferCmcd,
    debug: el.debug,
    disableTracking: el.disableTracking,
    disableCookies: el.disableCookies,
    tokens: el.tokens,
    beaconCollectionDomain: el.beaconCollectionDomain,
    maxResolution: el.maxResolution,
    minResolution: el.minResolution,
    programStartTime: el.programStartTime,
    programEndTime: el.programEndTime,
    assetStartTime: el.assetStartTime,
    assetEndTime: el.assetEndTime,
    renditionOrder: el.renditionOrder,
    metadata: el.metadata,
    playerInitTime: el.playerInitTime,
    playerSoftwareName: el.playerSoftwareName,
    playerSoftwareVersion: el.playerSoftwareVersion,
    startTime: el.startTime,
    preferPlayback: el.preferPlayback,
    audio: el.audio,
    defaultStreamType: el.defaultStreamType,
    targetLiveWindow: el.getAttribute(import_mux_video2.Attributes.TARGET_LIVE_WINDOW),
    streamType: getStreamTypeFromAttr(el.getAttribute(import_mux_video2.Attributes.STREAM_TYPE)),
    primaryColor: el.getAttribute(PlayerAttributes.PRIMARY_COLOR),
    secondaryColor: el.getAttribute(PlayerAttributes.SECONDARY_COLOR),
    accentColor: el.getAttribute(PlayerAttributes.ACCENT_COLOR),
    forwardSeekOffset: el.forwardSeekOffset,
    backwardSeekOffset: el.backwardSeekOffset,
    defaultHiddenCaptions: el.defaultHiddenCaptions,
    defaultDuration: el.defaultDuration,
    defaultShowRemainingTime: el.defaultShowRemainingTime,
    hideDuration: getHideDuration(el),
    playbackRates: el.getAttribute(PlayerAttributes.PLAYBACK_RATES),
    customDomain: (_a3 = el.getAttribute(import_mux_video2.Attributes.CUSTOM_DOMAIN)) != null ? _a3 : void 0,
    title: el.getAttribute(PlayerAttributes.TITLE),
    novolumepref: el.hasAttribute(PlayerAttributes.NO_VOLUME_PREF),
    castReceiver: el.castReceiver,
    muxVideoElement: el.muxVideoElement,
    adTagUrl: (_b2 = el.getAttribute(PlayerAttributes.AD_TAG_URL)) != null ? _b2 : void 0,
    adBreak: el.adBreak,
    proudlyDisplayMuxBadge: el.hasAttribute(PlayerAttributes.PROUDLY_DISPLAY_MUX_BADGE),
    ...state,
    // NOTE: since the attribute value is used as the "source of truth" for the property getter,
    // moving this below the `...state` spread so it resolves to the default value when unset (CJP)
    extraSourceParams: el.extraSourceParams
  };
  return props;
}
var baseFormatErrorMessage = media_error_dialog_default.formatErrorMessage;
media_error_dialog_default.formatErrorMessage = (error2) => {
  var _a3, _b2;
  if (error2 instanceof import_mux_video2.MediaError) {
    const dialog = muxMediaErrorToDialog(error2, false);
    return `
      ${(dialog == null ? void 0 : dialog.title) ? `<h3>${dialog.title}</h3>` : ""}
      ${(dialog == null ? void 0 : dialog.message) || (dialog == null ? void 0 : dialog.linkUrl) ? `<p>
        ${dialog == null ? void 0 : dialog.message}
        ${(dialog == null ? void 0 : dialog.linkUrl) ? `<a
              href="${dialog.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(_a3 = dialog.linkText) != null ? _a3 : ""} ${(0, import_playback_core5.i18n)(`(opens in a new window)`)}"
              >${(_b2 = dialog.linkText) != null ? _b2 : dialog.linkUrl}</a
            >` : ""}
      </p>` : ""}
    `;
  }
  return baseFormatErrorMessage(error2);
};
function getThemeTemplate(el) {
  var _a3, _b2;
  let themeName = el.theme;
  if (themeName) {
    const templateElement = (_b2 = (_a3 = el.getRootNode()) == null ? void 0 : _a3.getElementById) == null ? void 0 : _b2.call(_a3, themeName);
    if (templateElement && templateElement instanceof HTMLTemplateElement) return templateElement;
    if (!themeName.startsWith("media-theme-")) {
      themeName = `media-theme-${themeName}`;
    }
    const ThemeElement = internalGlobalThis.customElements.get(themeName);
    if (ThemeElement == null ? void 0 : ThemeElement.template) return ThemeElement.template;
  }
}
function getHideDuration(el) {
  var _a3;
  const timeDisplay = (_a3 = el.mediaController) == null ? void 0 : _a3.querySelector("media-time-display");
  return timeDisplay && getComputedStyle(timeDisplay).getPropertyValue("--media-duration-display-display").trim() === "none";
}
function getMetadataFromAttrs(el) {
  const seedValue = el.hasAttribute(PlayerAttributes.TITLE) ? { video_title: el.getAttribute(PlayerAttributes.TITLE) } : {};
  return el.getAttributeNames().filter((attrName) => attrName.startsWith("metadata-")).reduce((currAttrs, attrName) => {
    const value = el.getAttribute(attrName);
    if (value !== null) {
      currAttrs[attrName.replace(/^metadata-/, "").replace(/-/g, "_")] = value;
    }
    return currAttrs;
  }, seedValue);
}
var MuxVideoAttributeNames = Object.values(import_mux_video2.Attributes);
var VideoAttributeNames = Object.values(VideoAttributes);
var PlayerAttributeNames = Object.values(PlayerAttributes);
var playerSoftwareVersion = getPlayerVersion();
var playerSoftwareName = "mux-player";
var initialState = {
  isDialogOpen: false
};
var DEFAULT_EXTRA_PLAYLIST_PARAMS = { redundant_streams: true };
var _defaultPlayerInitTime, _isInit2, _tokens3, _userInactive, _hotkeys, _state, _MuxPlayerElement_instances, init_fn2, setupCSSProperties_fn, setState_fn, render_fn5, setUpThemeAttributes_fn, setUpErrors_fn, setUpCaptionsButton_fn, setUpCaptionsMovement_fn;
var MuxPlayerElement = class extends video_api_default {
  constructor() {
    super();
    __privateAdd(this, _MuxPlayerElement_instances);
    __privateAdd(this, _defaultPlayerInitTime);
    __privateAdd(this, _isInit2, false);
    __privateAdd(this, _tokens3, {});
    __privateAdd(this, _userInactive, true);
    __privateAdd(this, _hotkeys, new AttributeTokenList2(this, "hotkeys"));
    __privateAdd(this, _state, {
      ...initialState,
      onCloseErrorDialog: (event) => {
        var _a3;
        const localName = (_a3 = event.composedPath()[0]) == null ? void 0 : _a3.localName;
        if (localName !== "media-error-dialog") return;
        __privateMethod(this, _MuxPlayerElement_instances, setState_fn).call(this, { isDialogOpen: false });
      },
      onFocusInErrorDialog: (event) => {
        var _a3;
        const localName = (_a3 = event.composedPath()[0]) == null ? void 0 : _a3.localName;
        if (localName !== "media-error-dialog") return;
        const isFocusedElementInPlayer = containsComposedNode2(this, internalDocument.activeElement);
        if (!isFocusedElementInPlayer) event.preventDefault();
      }
    });
    __privateSet(this, _defaultPlayerInitTime, (0, import_playback_core5.generatePlayerInitTime)());
    this.attachShadow({ mode: "open" });
    __privateMethod(this, _MuxPlayerElement_instances, setupCSSProperties_fn).call(this);
    if (this.isConnected) {
      __privateMethod(this, _MuxPlayerElement_instances, init_fn2).call(this);
    }
  }
  static get NAME() {
    return playerSoftwareName;
  }
  static get VERSION() {
    return playerSoftwareVersion;
  }
  static get observedAttributes() {
    var _a3;
    return [
      ...(_a3 = video_api_default.observedAttributes) != null ? _a3 : [],
      ...VideoAttributeNames,
      ...MuxVideoAttributeNames,
      ...PlayerAttributeNames
    ];
  }
  get mediaTheme() {
    var _a3;
    return (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("media-theme");
  }
  get mediaController() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.mediaTheme) == null ? void 0 : _a3.shadowRoot) == null ? void 0 : _b2.querySelector("media-controller");
  }
  connectedCallback() {
    var _a3;
    const muxVideo = this.media;
    if (muxVideo) {
      (_a3 = this.media) == null ? void 0 : _a3.addEventListener("adbreakchange", () => {
        __privateMethod(this, _MuxPlayerElement_instances, render_fn5).call(this);
      });
      muxVideo.metadata = getMetadataFromAttrs(this);
    }
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    __privateMethod(this, _MuxPlayerElement_instances, init_fn2).call(this);
    super.attributeChangedCallback(attrName, oldValue, newValue);
    switch (attrName) {
      case PlayerAttributes.HOTKEYS:
        __privateGet(this, _hotkeys).value = newValue;
        break;
      case PlayerAttributes.THUMBNAIL_TIME: {
        if (newValue != null && this.tokens.thumbnail) {
          warn(
            (0, import_playback_core5.i18n)(`Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.`)
          );
        }
        break;
      }
      case PlayerAttributes.THUMBNAIL_TOKEN: {
        if (newValue) {
          const jwtObj = (0, import_playback_core5.parseJwt)(newValue);
          if (jwtObj) {
            const { aud } = jwtObj;
            const expectedAud = import_playback_core5.MuxJWTAud.THUMBNAIL;
            const tokenNamePrefix = "thumbnail";
            if (aud !== expectedAud) {
              warn(
                (0, import_playback_core5.i18n)(
                  `The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.`
                ).format({ aud, expectedAud, tokenNamePrefix })
              );
            }
          }
        }
        break;
      }
      case PlayerAttributes.STORYBOARD_TOKEN: {
        if (newValue) {
          const jwtObj = (0, import_playback_core5.parseJwt)(newValue);
          if (jwtObj) {
            const { aud } = jwtObj;
            const expectedAud = import_playback_core5.MuxJWTAud.STORYBOARD;
            const tokenNamePrefix = "storyboard";
            if (aud !== expectedAud) {
              warn(
                (0, import_playback_core5.i18n)(
                  `The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.`
                ).format({ aud, expectedAud, tokenNamePrefix })
              );
            }
          }
        }
        break;
      }
      case PlayerAttributes.DRM_TOKEN: {
        if (newValue) {
          const jwtObj = (0, import_playback_core5.parseJwt)(newValue);
          if (jwtObj) {
            const { aud } = jwtObj;
            const expectedAud = import_playback_core5.MuxJWTAud.DRM;
            const tokenNamePrefix = "drm";
            if (aud !== expectedAud) {
              warn(
                (0, import_playback_core5.i18n)(
                  `The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.`
                ).format({ aud, expectedAud, tokenNamePrefix })
              );
            }
          }
        }
        break;
      }
      case import_mux_video2.Attributes.PLAYBACK_ID: {
        if (newValue == null ? void 0 : newValue.includes("?token")) {
          error(
            (0, import_playback_core5.i18n)(
              "The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute."
            ).format({
              playbackId: newValue
            })
          );
        }
        break;
      }
      case import_mux_video2.Attributes.STREAM_TYPE: {
        if (newValue && ![import_playback_core5.StreamTypes.LIVE, import_playback_core5.StreamTypes.ON_DEMAND, import_playback_core5.StreamTypes.UNKNOWN].includes(newValue)) {
          if (["ll-live", "live:dvr", "ll-live:dvr"].includes(this.streamType)) {
            this.targetLiveWindow = newValue.includes("dvr") ? Number.POSITIVE_INFINITY : 0;
          } else {
            devlog({
              file: "invalid-stream-type.md",
              message: (0, import_playback_core5.i18n)(
                "Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`"
              ).format({ streamType: this.streamType })
            });
          }
        } else {
          if (newValue === import_playback_core5.StreamTypes.LIVE) {
            if (this.getAttribute(PlayerAttributes.TARGET_LIVE_WINDOW) == null) {
              this.targetLiveWindow = 0;
            }
          } else {
            this.targetLiveWindow = Number.NaN;
          }
        }
      }
    }
    const shouldClearState = [
      import_mux_video2.Attributes.PLAYBACK_ID,
      VideoAttributes.SRC,
      PlayerAttributes.PLAYBACK_TOKEN
      // @ts-ignore
    ].includes(attrName);
    if (shouldClearState && oldValue !== newValue) {
      __privateSet(this, _state, { ...__privateGet(this, _state), ...initialState });
    }
    __privateMethod(this, _MuxPlayerElement_instances, render_fn5).call(this, { [toPropName(attrName)]: newValue });
  }
  get preferCmcd() {
    var _a3;
    return (_a3 = this.getAttribute(import_mux_video2.Attributes.PREFER_CMCD)) != null ? _a3 : void 0;
  }
  set preferCmcd(value) {
    if (value === this.preferCmcd) return;
    if (!value) {
      this.removeAttribute(import_mux_video2.Attributes.PREFER_CMCD);
    } else if (import_playback_core5.CmcdTypeValues.includes(value)) {
      this.setAttribute(import_mux_video2.Attributes.PREFER_CMCD, value);
    } else {
      warn(`Invalid value for preferCmcd. Must be one of ${import_playback_core5.CmcdTypeValues.join()}`);
    }
  }
  get hasPlayed() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.mediaController) == null ? void 0 : _a3.hasAttribute(MediaUIAttributes.MEDIA_HAS_PLAYED)) != null ? _b2 : false;
  }
  get inLiveWindow() {
    var _a3;
    return (_a3 = this.mediaController) == null ? void 0 : _a3.hasAttribute(MediaUIAttributes.MEDIA_TIME_IS_LIVE);
  }
  get _hls() {
    var _a3;
    return (_a3 = this.media) == null ? void 0 : _a3._hls;
  }
  get mux() {
    var _a3;
    return (_a3 = this.media) == null ? void 0 : _a3.mux;
  }
  /**
   * Gets the theme.
   */
  get theme() {
    var _a3;
    return (_a3 = this.getAttribute(PlayerAttributes.THEME)) != null ? _a3 : DefaultThemeName;
  }
  /**
   * Sets the theme.
   */
  set theme(val) {
    this.setAttribute(PlayerAttributes.THEME, `${val}`);
  }
  /**
   * Get the theme attributes in a plain object (camelCase keys).
   * This doesn't include already defined attributes. e.g. streamType, disabled, etc.
   */
  get themeProps() {
    const theme = this.mediaTheme;
    if (!theme) return;
    const props = {};
    for (const name of theme.getAttributeNames()) {
      if (ThemeAttributeNames.includes(name)) continue;
      const value = theme.getAttribute(name);
      props[camelCase2(name)] = value === "" ? true : value;
    }
    return props;
  }
  /**
   * Set the theme attributes via a plain object.
   */
  set themeProps(props) {
    var _a3, _b2;
    __privateMethod(this, _MuxPlayerElement_instances, init_fn2).call(this);
    const themeProps = { ...this.themeProps, ...props };
    for (const name in themeProps) {
      if (ThemeAttributeNames.includes(name)) continue;
      const value = props == null ? void 0 : props[name];
      if (typeof value === "boolean" || value == null) {
        (_a3 = this.mediaTheme) == null ? void 0 : _a3.toggleAttribute(kebabCase(name), Boolean(value));
      } else {
        (_b2 = this.mediaTheme) == null ? void 0 : _b2.setAttribute(kebabCase(name), value);
      }
    }
  }
  /**
   * Get Mux asset playback id.
   */
  get playbackId() {
    var _a3;
    return (_a3 = this.getAttribute(import_mux_video2.Attributes.PLAYBACK_ID)) != null ? _a3 : void 0;
  }
  /**
   * Set Mux asset playback id.
   */
  set playbackId(val) {
    if (val) {
      this.setAttribute(import_mux_video2.Attributes.PLAYBACK_ID, val);
    } else {
      this.removeAttribute(import_mux_video2.Attributes.PLAYBACK_ID);
    }
  }
  /**
   * Get the string that reflects the src HTML attribute, which contains the URL of a media resource to use.
   */
  get src() {
    var _a3, _b2;
    if (this.playbackId) {
      return (_a3 = getVideoAttribute2(this, VideoAttributes.SRC)) != null ? _a3 : void 0;
    }
    return (_b2 = this.getAttribute(VideoAttributes.SRC)) != null ? _b2 : void 0;
  }
  /**
   * Set the string that reflects the src HTML attribute, which contains the URL of a media resource to use.
   */
  set src(val) {
    if (val) {
      this.setAttribute(VideoAttributes.SRC, val);
    } else {
      this.removeAttribute(VideoAttributes.SRC);
    }
  }
  /**
   * Gets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.
   */
  get poster() {
    var _a3;
    const val = this.getAttribute(VideoAttributes.POSTER);
    if (val != null) return val;
    const { tokens } = this;
    if (tokens.playback && !tokens.thumbnail) {
      warn("Missing expected thumbnail token. No poster image will be shown");
      return void 0;
    }
    if (this.playbackId && !this.audio) {
      return getPosterURLFromPlaybackId(this.playbackId, {
        customDomain: this.customDomain,
        thumbnailTime: (_a3 = this.thumbnailTime) != null ? _a3 : this.startTime,
        programTime: this.programStartTime,
        token: tokens.thumbnail
      });
    }
    return void 0;
  }
  /**
   * Sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.
   */
  set poster(val) {
    if (val || val === "") {
      this.setAttribute(VideoAttributes.POSTER, val);
    } else {
      this.removeAttribute(VideoAttributes.POSTER);
    }
  }
  /**
   * Return the storyboard-src attribute URL
   */
  get storyboardSrc() {
    var _a3;
    return (_a3 = this.getAttribute(PlayerAttributes.STORYBOARD_SRC)) != null ? _a3 : void 0;
  }
  /**
   * Set the storyboard-src attribute URL
   */
  set storyboardSrc(src) {
    if (!src) {
      this.removeAttribute(PlayerAttributes.STORYBOARD_SRC);
    } else {
      this.setAttribute(PlayerAttributes.STORYBOARD_SRC, src);
    }
  }
  /**
   * Return the storyboard URL when a playback ID or storyboard-src is provided,
   * we aren't an audio player and the stream-type isn't live.
   */
  get storyboard() {
    const { tokens } = this;
    if (this.storyboardSrc && !tokens.storyboard) return this.storyboardSrc;
    if (
      // NOTE: Some audio use cases may have a storyboard (e.g. it's an audio+video stream being played *as* audio)
      // Consider supporting cases (CJP)
      this.audio || !this.playbackId || !this.streamType || [import_playback_core5.StreamTypes.LIVE, import_playback_core5.StreamTypes.UNKNOWN].includes(this.streamType) || // If a playback token but no storyboard token is provided,
      // assume a token is required for the storyboard URL URL and
      // simply avoid requesting it in this case.
      tokens.playback && !tokens.storyboard
    ) {
      return void 0;
    }
    return getStoryboardURLFromPlaybackId(this.playbackId, {
      customDomain: this.customDomain,
      token: tokens.storyboard,
      programStartTime: this.programStartTime,
      programEndTime: this.programEndTime
    });
  }
  /**
   * Gets the boolean indicator this is an audio player.
   */
  get audio() {
    return this.hasAttribute(PlayerAttributes.AUDIO);
  }
  /**
   * Sets the boolean indicator this is an audio player.
   */
  set audio(val) {
    if (!val) {
      this.removeAttribute(PlayerAttributes.AUDIO);
      return;
    }
    this.setAttribute(PlayerAttributes.AUDIO, "");
  }
  get hotkeys() {
    return __privateGet(this, _hotkeys);
  }
  get nohotkeys() {
    return this.hasAttribute(PlayerAttributes.NOHOTKEYS);
  }
  set nohotkeys(val) {
    if (!val) {
      this.removeAttribute(PlayerAttributes.NOHOTKEYS);
      return;
    }
    this.setAttribute(PlayerAttributes.NOHOTKEYS, "");
  }
  /**
   * Get the thumbnailTime offset used for the poster image.
   */
  get thumbnailTime() {
    return toNumberOrUndefined(this.getAttribute(PlayerAttributes.THUMBNAIL_TIME));
  }
  /**
   * Set the thumbnailTime offset used for the poster image.
   */
  set thumbnailTime(val) {
    this.setAttribute(PlayerAttributes.THUMBNAIL_TIME, `${val}`);
  }
  /**
   * Get the title shown in the player.
   */
  get title() {
    var _a3;
    return (_a3 = this.getAttribute(PlayerAttributes.TITLE)) != null ? _a3 : "";
  }
  /**
   * Set the title shown in the player.
   */
  set title(val) {
    if (val === this.title) return;
    if (!!val) {
      this.setAttribute(PlayerAttributes.TITLE, val);
    } else {
      this.removeAttribute("title");
    }
    super.title = val;
  }
  /**
   * Gets the data URL of a placeholder image shown before the thumbnail is loaded.
   */
  get placeholder() {
    var _a3;
    return (_a3 = getVideoAttribute2(this, PlayerAttributes.PLACEHOLDER)) != null ? _a3 : "";
  }
  /**
   * Sets the data URL of a placeholder image shown before the thumbnail is loaded.
   */
  set placeholder(val) {
    this.setAttribute(PlayerAttributes.PLACEHOLDER, `${val}`);
  }
  /**
   * Get the primary color used by the player.
   */
  get primaryColor() {
    var _a3, _b2;
    let color = this.getAttribute(PlayerAttributes.PRIMARY_COLOR);
    if (color != null) return color;
    if (this.mediaTheme) {
      color = (_b2 = (_a3 = internalGlobalThis.getComputedStyle(this.mediaTheme)) == null ? void 0 : _a3.getPropertyValue("--_primary-color")) == null ? void 0 : _b2.trim();
      if (color) return color;
    }
  }
  /**
   * Set the primary color used by the player.
   */
  set primaryColor(val) {
    this.setAttribute(PlayerAttributes.PRIMARY_COLOR, `${val}`);
  }
  /**
   * Get the secondary color used by the player.
   */
  get secondaryColor() {
    var _a3, _b2;
    let color = this.getAttribute(PlayerAttributes.SECONDARY_COLOR);
    if (color != null) return color;
    if (this.mediaTheme) {
      color = (_b2 = (_a3 = internalGlobalThis.getComputedStyle(this.mediaTheme)) == null ? void 0 : _a3.getPropertyValue("--_secondary-color")) == null ? void 0 : _b2.trim();
      if (color) return color;
    }
  }
  /**
   * Set the secondary color used by the player.
   */
  set secondaryColor(val) {
    this.setAttribute(PlayerAttributes.SECONDARY_COLOR, `${val}`);
  }
  /**
   * Get the accent color used by the player.
   */
  get accentColor() {
    var _a3, _b2;
    let color = this.getAttribute(PlayerAttributes.ACCENT_COLOR);
    if (color != null) return color;
    if (this.mediaTheme) {
      color = (_b2 = (_a3 = internalGlobalThis.getComputedStyle(this.mediaTheme)) == null ? void 0 : _a3.getPropertyValue("--_accent-color")) == null ? void 0 : _b2.trim();
      if (color) return color;
    }
  }
  /**
   * Set the accent color used by the player.
   */
  set accentColor(val) {
    this.setAttribute(PlayerAttributes.ACCENT_COLOR, `${val}`);
  }
  get defaultShowRemainingTime() {
    return this.hasAttribute(PlayerAttributes.DEFAULT_SHOW_REMAINING_TIME);
  }
  set defaultShowRemainingTime(val) {
    if (!val) {
      this.removeAttribute(PlayerAttributes.DEFAULT_SHOW_REMAINING_TIME);
    } else {
      this.setAttribute(PlayerAttributes.DEFAULT_SHOW_REMAINING_TIME, "");
    }
  }
  /**
   * Get the playback rates applied to the playback rate control.
   */
  get playbackRates() {
    if (!this.hasAttribute(PlayerAttributes.PLAYBACK_RATES)) return void 0;
    return this.getAttribute(PlayerAttributes.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map((str) => Number(str)).filter((num) => !Number.isNaN(num)).sort((a, b) => a - b);
  }
  /**
   * Set the playback rates applied to the playback rate control.
   */
  set playbackRates(val) {
    if (!val) {
      this.removeAttribute(PlayerAttributes.PLAYBACK_RATES);
      return;
    }
    this.setAttribute(PlayerAttributes.PLAYBACK_RATES, val.join(" "));
  }
  /**
   * Get the offset applied to the forward seek button.
   */
  get forwardSeekOffset() {
    var _a3;
    return (_a3 = toNumberOrUndefined(this.getAttribute(PlayerAttributes.FORWARD_SEEK_OFFSET))) != null ? _a3 : 10;
  }
  /**
   * Set the offset applied to the forward seek button.
   */
  set forwardSeekOffset(val) {
    this.setAttribute(PlayerAttributes.FORWARD_SEEK_OFFSET, `${val}`);
  }
  /**
   * Get the offset applied to the backward seek button.
   */
  get backwardSeekOffset() {
    var _a3;
    return (_a3 = toNumberOrUndefined(this.getAttribute(PlayerAttributes.BACKWARD_SEEK_OFFSET))) != null ? _a3 : 10;
  }
  /**
   * Set the offset applied to the forward seek button.
   */
  set backwardSeekOffset(val) {
    this.setAttribute(PlayerAttributes.BACKWARD_SEEK_OFFSET, `${val}`);
  }
  /**
   * Get the boolean value of default hidden captions.
   * By default returns false so captions are enabled on initial load.
   */
  get defaultHiddenCaptions() {
    return this.hasAttribute(PlayerAttributes.DEFAULT_HIDDEN_CAPTIONS);
  }
  /**
   * Set the default hidden captions flag.
   */
  set defaultHiddenCaptions(val) {
    if (!val) {
      this.removeAttribute(PlayerAttributes.DEFAULT_HIDDEN_CAPTIONS);
    } else {
      this.setAttribute(PlayerAttributes.DEFAULT_HIDDEN_CAPTIONS, "");
    }
  }
  /**
   * Get the boolean value of default hidden captions.
   * By default returns false so captions are enabled on initial load.
   */
  get defaultDuration() {
    return toNumberOrUndefined(this.getAttribute(PlayerAttributes.DEFAULT_DURATION));
  }
  /**
   * Set the default hidden captions flag.
   */
  set defaultDuration(val) {
    if (val == void 0) {
      this.removeAttribute(PlayerAttributes.DEFAULT_DURATION);
    } else {
      this.setAttribute(PlayerAttributes.DEFAULT_DURATION, `${val}`);
    }
  }
  get playerInitTime() {
    if (!this.hasAttribute(import_mux_video2.Attributes.PLAYER_INIT_TIME)) return __privateGet(this, _defaultPlayerInitTime);
    return toNumberOrUndefined(this.getAttribute(import_mux_video2.Attributes.PLAYER_INIT_TIME));
  }
  set playerInitTime(val) {
    if (val == this.playerInitTime) return;
    if (val == null) {
      this.removeAttribute(import_mux_video2.Attributes.PLAYER_INIT_TIME);
    } else {
      this.setAttribute(import_mux_video2.Attributes.PLAYER_INIT_TIME, `${+val}`);
    }
  }
  /**
   * Get the player software name. Used by Mux Data.
   */
  get playerSoftwareName() {
    var _a3;
    return (_a3 = this.getAttribute(import_mux_video2.Attributes.PLAYER_SOFTWARE_NAME)) != null ? _a3 : playerSoftwareName;
  }
  /**
   * Get the player software version. Used by Mux Data.
   */
  get playerSoftwareVersion() {
    var _a3;
    return (_a3 = this.getAttribute(import_mux_video2.Attributes.PLAYER_SOFTWARE_VERSION)) != null ? _a3 : playerSoftwareVersion;
  }
  /**
   * Get the beacon collection domain. Used by Mux Data.
   */
  get beaconCollectionDomain() {
    var _a3;
    return (_a3 = this.getAttribute(import_mux_video2.Attributes.BEACON_COLLECTION_DOMAIN)) != null ? _a3 : void 0;
  }
  /**
   * Set the beacon collection domain. Used by Mux Data.
   */
  set beaconCollectionDomain(val) {
    if (val === this.beaconCollectionDomain) return;
    if (val) {
      this.setAttribute(import_mux_video2.Attributes.BEACON_COLLECTION_DOMAIN, val);
    } else {
      this.removeAttribute(import_mux_video2.Attributes.BEACON_COLLECTION_DOMAIN);
    }
  }
  get adBreak() {
    var _a3;
    const muxVideoAds = this.media;
    if (muxVideoAds) {
      return (_a3 = muxVideoAds.getAttribute("adBreak")) != null ? _a3 : false;
    } else {
      return false;
    }
  }
  get maxResolution() {
    var _a3;
    return (_a3 = this.getAttribute(import_mux_video2.Attributes.MAX_RESOLUTION)) != null ? _a3 : void 0;
  }
  set maxResolution(val) {
    if (val === this.maxResolution) return;
    if (val) {
      this.setAttribute(import_mux_video2.Attributes.MAX_RESOLUTION, val);
    } else {
      this.removeAttribute(import_mux_video2.Attributes.MAX_RESOLUTION);
    }
  }
  get minResolution() {
    var _a3;
    return (_a3 = this.getAttribute(import_mux_video2.Attributes.MIN_RESOLUTION)) != null ? _a3 : void 0;
  }
  set minResolution(val) {
    if (val === this.minResolution) return;
    if (val) {
      this.setAttribute(import_mux_video2.Attributes.MIN_RESOLUTION, val);
    } else {
      this.removeAttribute(import_mux_video2.Attributes.MIN_RESOLUTION);
    }
  }
  get renditionOrder() {
    var _a3;
    return (_a3 = this.getAttribute(import_mux_video2.Attributes.RENDITION_ORDER)) != null ? _a3 : void 0;
  }
  set renditionOrder(val) {
    if (val === this.renditionOrder) return;
    if (val) {
      this.setAttribute(import_mux_video2.Attributes.RENDITION_ORDER, val);
    } else {
      this.removeAttribute(import_mux_video2.Attributes.RENDITION_ORDER);
    }
  }
  get programStartTime() {
    return toNumberOrUndefined(this.getAttribute(import_mux_video2.Attributes.PROGRAM_START_TIME));
  }
  set programStartTime(val) {
    if (val == void 0) {
      this.removeAttribute(import_mux_video2.Attributes.PROGRAM_START_TIME);
    } else {
      this.setAttribute(import_mux_video2.Attributes.PROGRAM_START_TIME, `${val}`);
    }
  }
  get programEndTime() {
    return toNumberOrUndefined(this.getAttribute(import_mux_video2.Attributes.PROGRAM_END_TIME));
  }
  set programEndTime(val) {
    if (val == void 0) {
      this.removeAttribute(import_mux_video2.Attributes.PROGRAM_END_TIME);
    } else {
      this.setAttribute(import_mux_video2.Attributes.PROGRAM_END_TIME, `${val}`);
    }
  }
  get assetStartTime() {
    return toNumberOrUndefined(this.getAttribute(import_mux_video2.Attributes.ASSET_START_TIME));
  }
  set assetStartTime(val) {
    if (val == void 0) {
      this.removeAttribute(import_mux_video2.Attributes.ASSET_START_TIME);
    } else {
      this.setAttribute(import_mux_video2.Attributes.ASSET_START_TIME, `${val}`);
    }
  }
  get assetEndTime() {
    return toNumberOrUndefined(this.getAttribute(import_mux_video2.Attributes.ASSET_END_TIME));
  }
  set assetEndTime(val) {
    if (val == void 0) {
      this.removeAttribute(import_mux_video2.Attributes.ASSET_END_TIME);
    } else {
      this.setAttribute(import_mux_video2.Attributes.ASSET_END_TIME, `${val}`);
    }
  }
  get extraSourceParams() {
    if (!this.hasAttribute(PlayerAttributes.EXTRA_SOURCE_PARAMS)) {
      return DEFAULT_EXTRA_PLAYLIST_PARAMS;
    }
    return [...new URLSearchParams(this.getAttribute(PlayerAttributes.EXTRA_SOURCE_PARAMS)).entries()].reduce(
      (paramsObj, [k, v]) => {
        paramsObj[k] = v;
        return paramsObj;
      },
      {}
    );
  }
  set extraSourceParams(value) {
    if (value == null) {
      this.removeAttribute(PlayerAttributes.EXTRA_SOURCE_PARAMS);
    } else {
      this.setAttribute(PlayerAttributes.EXTRA_SOURCE_PARAMS, new URLSearchParams(value).toString());
    }
  }
  /**
   * Get Mux asset custom domain.
   */
  get customDomain() {
    var _a3;
    return (_a3 = this.getAttribute(import_mux_video2.Attributes.CUSTOM_DOMAIN)) != null ? _a3 : void 0;
  }
  /**
   * Set Mux asset custom domain.
   */
  set customDomain(val) {
    if (val === this.customDomain) return;
    if (val) {
      this.setAttribute(import_mux_video2.Attributes.CUSTOM_DOMAIN, val);
    } else {
      this.removeAttribute(import_mux_video2.Attributes.CUSTOM_DOMAIN);
    }
  }
  /**
   * Get Mux Data env key.
   */
  get envKey() {
    var _a3;
    return (_a3 = getVideoAttribute2(this, import_mux_video2.Attributes.ENV_KEY)) != null ? _a3 : void 0;
  }
  /**
   * Set Mux Data env key.
   */
  set envKey(val) {
    this.setAttribute(import_mux_video2.Attributes.ENV_KEY, `${val}`);
  }
  /**
   * Get no-volume-pref flag.
   */
  get noVolumePref() {
    return this.hasAttribute(PlayerAttributes.NO_VOLUME_PREF);
  }
  /**
   * Set video engine debug flag.
   */
  set noVolumePref(val) {
    if (val) {
      this.setAttribute(PlayerAttributes.NO_VOLUME_PREF, "");
    } else {
      this.removeAttribute(PlayerAttributes.NO_VOLUME_PREF);
    }
  }
  /**
   * Get video engine debug flag.
   */
  get debug() {
    return getVideoAttribute2(this, import_mux_video2.Attributes.DEBUG) != null;
  }
  /**
   * Set video engine debug flag.
   */
  set debug(val) {
    if (val) {
      this.setAttribute(import_mux_video2.Attributes.DEBUG, "");
    } else {
      this.removeAttribute(import_mux_video2.Attributes.DEBUG);
    }
  }
  /**
   * Get video engine disable tracking flag.
   */
  get disableTracking() {
    return getVideoAttribute2(this, import_mux_video2.Attributes.DISABLE_TRACKING) != null;
  }
  /**
   * Set video engine disable tracking flag.
   */
  set disableTracking(val) {
    this.toggleAttribute(import_mux_video2.Attributes.DISABLE_TRACKING, !!val);
  }
  /**
   * Get video engine disable cookies flag.
   */
  get disableCookies() {
    return getVideoAttribute2(this, import_mux_video2.Attributes.DISABLE_COOKIES) != null;
  }
  /**
   * Set video engine disable cookies flag.
   */
  set disableCookies(val) {
    if (val) {
      this.setAttribute(import_mux_video2.Attributes.DISABLE_COOKIES, "");
    } else {
      this.removeAttribute(import_mux_video2.Attributes.DISABLE_COOKIES);
    }
  }
  /**
   * Get stream type.
   */
  get streamType() {
    var _a3, _b2, _c;
    return (_c = (_b2 = this.getAttribute(import_mux_video2.Attributes.STREAM_TYPE)) != null ? _b2 : (_a3 = this.media) == null ? void 0 : _a3.streamType) != null ? _c : import_playback_core5.StreamTypes.UNKNOWN;
  }
  /**
   * Set stream type.
   */
  set streamType(val) {
    this.setAttribute(import_mux_video2.Attributes.STREAM_TYPE, `${val}`);
  }
  get defaultStreamType() {
    var _a3, _b2, _c;
    return (_c = (_b2 = this.getAttribute(PlayerAttributes.DEFAULT_STREAM_TYPE)) != null ? _b2 : (_a3 = this.mediaController) == null ? void 0 : _a3.getAttribute(PlayerAttributes.DEFAULT_STREAM_TYPE)) != null ? _c : import_playback_core5.StreamTypes.ON_DEMAND;
  }
  set defaultStreamType(val) {
    if (val) {
      this.setAttribute(PlayerAttributes.DEFAULT_STREAM_TYPE, val);
    } else {
      this.removeAttribute(PlayerAttributes.DEFAULT_STREAM_TYPE);
    }
  }
  get targetLiveWindow() {
    var _a3, _b2;
    if (this.hasAttribute(PlayerAttributes.TARGET_LIVE_WINDOW)) {
      return +this.getAttribute(PlayerAttributes.TARGET_LIVE_WINDOW);
    }
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.targetLiveWindow) != null ? _b2 : Number.NaN;
  }
  set targetLiveWindow(val) {
    if (val == this.targetLiveWindow || Number.isNaN(val) && Number.isNaN(this.targetLiveWindow)) return;
    if (val == null) {
      this.removeAttribute(PlayerAttributes.TARGET_LIVE_WINDOW);
    } else {
      this.setAttribute(PlayerAttributes.TARGET_LIVE_WINDOW, `${+val}`);
    }
  }
  get liveEdgeStart() {
    var _a3;
    return (_a3 = this.media) == null ? void 0 : _a3.liveEdgeStart;
  }
  /**
   * Get the start time.
   */
  get startTime() {
    return toNumberOrUndefined(getVideoAttribute2(this, import_mux_video2.Attributes.START_TIME));
  }
  /**
   * Set the start time.
   */
  set startTime(val) {
    this.setAttribute(import_mux_video2.Attributes.START_TIME, `${val}`);
  }
  get preferPlayback() {
    const val = this.getAttribute(import_mux_video2.Attributes.PREFER_PLAYBACK);
    if (val === import_playback_core5.PlaybackTypes.MSE || val === import_playback_core5.PlaybackTypes.NATIVE) return val;
    return void 0;
  }
  set preferPlayback(val) {
    if (val === this.preferPlayback) return;
    if (val === import_playback_core5.PlaybackTypes.MSE || val === import_playback_core5.PlaybackTypes.NATIVE) {
      this.setAttribute(import_mux_video2.Attributes.PREFER_PLAYBACK, val);
    } else {
      this.removeAttribute(import_mux_video2.Attributes.PREFER_PLAYBACK);
    }
  }
  /**
   * Get the metadata object for Mux Data.
   */
  get metadata() {
    var _a3;
    return (_a3 = this.media) == null ? void 0 : _a3.metadata;
  }
  /**
   * Set the metadata object for Mux Data.
   */
  set metadata(val) {
    __privateMethod(this, _MuxPlayerElement_instances, init_fn2).call(this);
    if (!this.media) {
      error("underlying media element missing when trying to set metadata. metadata will not be set.");
      return;
    }
    this.media.metadata = { ...getMetadataFromAttrs(this), ...val };
  }
  /**
   * Get the metadata object for Mux Data.
   */
  get _hlsConfig() {
    var _a3;
    return (_a3 = this.media) == null ? void 0 : _a3._hlsConfig;
  }
  /**
   * Set the metadata object for Mux Data.
   */
  set _hlsConfig(val) {
    __privateMethod(this, _MuxPlayerElement_instances, init_fn2).call(this);
    if (!this.media) {
      error("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");
      return;
    }
    this.media._hlsConfig = val;
  }
  async addCuePoints(cuePoints) {
    var _a3;
    __privateMethod(this, _MuxPlayerElement_instances, init_fn2).call(this);
    if (!this.media) {
      error("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");
      return;
    }
    return (_a3 = this.media) == null ? void 0 : _a3.addCuePoints(cuePoints);
  }
  get activeCuePoint() {
    var _a3;
    return (_a3 = this.media) == null ? void 0 : _a3.activeCuePoint;
  }
  get cuePoints() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.cuePoints) != null ? _b2 : [];
  }
  addChapters(chapters) {
    var _a3;
    __privateMethod(this, _MuxPlayerElement_instances, init_fn2).call(this);
    if (!this.media) {
      error("underlying media element missing when trying to addChapters. chapters will not be added.");
      return;
    }
    return (_a3 = this.media) == null ? void 0 : _a3.addChapters(chapters);
  }
  get activeChapter() {
    var _a3;
    return (_a3 = this.media) == null ? void 0 : _a3.activeChapter;
  }
  get chapters() {
    var _a3, _b2;
    return (_b2 = (_a3 = this.media) == null ? void 0 : _a3.chapters) != null ? _b2 : [];
  }
  getStartDate() {
    var _a3;
    return (_a3 = this.media) == null ? void 0 : _a3.getStartDate();
  }
  get currentPdt() {
    var _a3;
    return (_a3 = this.media) == null ? void 0 : _a3.currentPdt;
  }
  /**
   * Get the signing tokens for the Mux asset URL's.
   */
  get tokens() {
    const playback = this.getAttribute(PlayerAttributes.PLAYBACK_TOKEN);
    const drm = this.getAttribute(PlayerAttributes.DRM_TOKEN);
    const thumbnail = this.getAttribute(PlayerAttributes.THUMBNAIL_TOKEN);
    const storyboard = this.getAttribute(PlayerAttributes.STORYBOARD_TOKEN);
    return {
      ...__privateGet(this, _tokens3),
      ...playback != null ? { playback } : {},
      ...drm != null ? { drm } : {},
      ...thumbnail != null ? { thumbnail } : {},
      ...storyboard != null ? { storyboard } : {}
    };
  }
  /**
   * Set the signing tokens for the Mux asset URL's.
   */
  set tokens(val) {
    __privateSet(this, _tokens3, val != null ? val : {});
  }
  /**
   * Get the playback token for signing the src URL.
   */
  get playbackToken() {
    var _a3;
    return (_a3 = this.getAttribute(PlayerAttributes.PLAYBACK_TOKEN)) != null ? _a3 : void 0;
  }
  /**
   * Set the playback token for signing the src URL.
   */
  set playbackToken(val) {
    this.setAttribute(PlayerAttributes.PLAYBACK_TOKEN, `${val}`);
  }
  /**
   * Get the playback token for signing the src URL.
   */
  get drmToken() {
    var _a3;
    return (_a3 = this.getAttribute(PlayerAttributes.DRM_TOKEN)) != null ? _a3 : void 0;
  }
  /**
   * Set the playback token for signing the src URL.
   */
  set drmToken(val) {
    this.setAttribute(PlayerAttributes.DRM_TOKEN, `${val}`);
  }
  /**
   * Get the thumbnail token for signing the poster URL.
   */
  get thumbnailToken() {
    var _a3;
    return (_a3 = this.getAttribute(PlayerAttributes.THUMBNAIL_TOKEN)) != null ? _a3 : void 0;
  }
  /**
   * Set the thumbnail token for signing the poster URL.
   */
  set thumbnailToken(val) {
    this.setAttribute(PlayerAttributes.THUMBNAIL_TOKEN, `${val}`);
  }
  /**
   * Get the storyboard token for signing the storyboard URL.
   */
  get storyboardToken() {
    var _a3;
    return (_a3 = this.getAttribute(PlayerAttributes.STORYBOARD_TOKEN)) != null ? _a3 : void 0;
  }
  /**
   * Set the storyboard token for signing the storyboard URL.
   */
  set storyboardToken(val) {
    this.setAttribute(PlayerAttributes.STORYBOARD_TOKEN, `${val}`);
  }
  addTextTrack(kind, label, lang, id) {
    var _a3;
    const mediaEl = (_a3 = this.media) == null ? void 0 : _a3.nativeEl;
    if (!mediaEl) return;
    return (0, import_playback_core5.addTextTrack)(mediaEl, kind, label, lang, id);
  }
  removeTextTrack(track) {
    var _a3;
    const mediaEl = (_a3 = this.media) == null ? void 0 : _a3.nativeEl;
    if (!mediaEl) return;
    return (0, import_playback_core5.removeTextTrack)(mediaEl, track);
  }
  get textTracks() {
    var _a3;
    return (_a3 = this.media) == null ? void 0 : _a3.textTracks;
  }
  get castReceiver() {
    var _a3;
    return (_a3 = this.getAttribute(PlayerAttributes.CAST_RECEIVER)) != null ? _a3 : void 0;
  }
  set castReceiver(val) {
    if (val === this.castReceiver) return;
    if (val) {
      this.setAttribute(PlayerAttributes.CAST_RECEIVER, val);
    } else {
      this.removeAttribute(PlayerAttributes.CAST_RECEIVER);
    }
  }
  get castCustomData() {
    var _a3;
    return (_a3 = this.media) == null ? void 0 : _a3.castCustomData;
  }
  set castCustomData(val) {
    if (!this.media) {
      error(
        "underlying media element missing when trying to set castCustomData. castCustomData will not be set."
      );
      return;
    }
    this.media.castCustomData = val;
  }
  get noTooltips() {
    return this.hasAttribute(PlayerAttributes.NO_TOOLTIPS);
  }
  set noTooltips(val) {
    if (!val) {
      this.removeAttribute(PlayerAttributes.NO_TOOLTIPS);
      return;
    }
    this.setAttribute(PlayerAttributes.NO_TOOLTIPS, "");
  }
  get proudlyDisplayMuxBadge() {
    return this.hasAttribute(PlayerAttributes.PROUDLY_DISPLAY_MUX_BADGE);
  }
  set proudlyDisplayMuxBadge(val) {
    if (!val) {
      this.removeAttribute(PlayerAttributes.PROUDLY_DISPLAY_MUX_BADGE);
    } else {
      this.setAttribute(PlayerAttributes.PROUDLY_DISPLAY_MUX_BADGE, "");
    }
  }
};
_defaultPlayerInitTime = new WeakMap();
_isInit2 = new WeakMap();
_tokens3 = new WeakMap();
_userInactive = new WeakMap();
_hotkeys = new WeakMap();
_state = new WeakMap();
_MuxPlayerElement_instances = new WeakSet();
init_fn2 = function() {
  var _a3, _b2, _c, _d;
  if (__privateGet(this, _isInit2)) return;
  __privateSet(this, _isInit2, true);
  __privateMethod(this, _MuxPlayerElement_instances, render_fn5).call(this);
  try {
    customElements.upgrade(this.mediaTheme);
    if (!(this.mediaTheme instanceof internalGlobalThis.HTMLElement)) throw "";
  } catch (_error) {
    error(`<media-theme> failed to upgrade!`);
  }
  try {
    customElements.upgrade(this.media);
    if (this.muxVideoElement.includes("-")) {
      customElements.upgrade(this.media);
      const mediaClass = customElements.get(this.muxVideoElement);
      if (!(mediaClass && this.media instanceof mediaClass)) {
        throw "";
      }
    }
  } catch (_error) {
    error("underlying media element failed to upgrade!");
  }
  try {
    customElements.upgrade(this.mediaController);
    if (!(this.mediaController instanceof media_controller_default)) throw "";
  } catch (_error) {
    error(`<media-controller> failed to upgrade!`);
  }
  this.init();
  __privateMethod(this, _MuxPlayerElement_instances, setUpThemeAttributes_fn).call(this);
  __privateMethod(this, _MuxPlayerElement_instances, setUpErrors_fn).call(this);
  __privateMethod(this, _MuxPlayerElement_instances, setUpCaptionsButton_fn).call(this);
  __privateSet(this, _userInactive, (_b2 = (_a3 = this.mediaController) == null ? void 0 : _a3.hasAttribute(Attributes.USER_INACTIVE)) != null ? _b2 : true);
  __privateMethod(this, _MuxPlayerElement_instances, setUpCaptionsMovement_fn).call(this);
  (_c = this.media) == null ? void 0 : _c.addEventListener("streamtypechange", () => __privateMethod(this, _MuxPlayerElement_instances, render_fn5).call(this));
  (_d = this.media) == null ? void 0 : _d.addEventListener("loadstart", () => __privateMethod(this, _MuxPlayerElement_instances, render_fn5).call(this));
};
setupCSSProperties_fn = function() {
  var _a3, _b2;
  try {
    (_a3 = window == null ? void 0 : window.CSS) == null ? void 0 : _a3.registerProperty({
      name: "--media-primary-color",
      syntax: "<color>",
      inherits: true
    });
    (_b2 = window == null ? void 0 : window.CSS) == null ? void 0 : _b2.registerProperty({
      name: "--media-secondary-color",
      syntax: "<color>",
      inherits: true
    });
  } catch (_error) {
  }
};
setState_fn = function(newState) {
  Object.assign(__privateGet(this, _state), newState);
  __privateMethod(this, _MuxPlayerElement_instances, render_fn5).call(this);
};
render_fn5 = function(props = {}) {
  render(template12(getProps(this, { ...__privateGet(this, _state), ...props })), this.shadowRoot);
};
setUpThemeAttributes_fn = function() {
  const setThemeAttribute = (attributeName) => {
    var _a3, _b2;
    if (!(attributeName == null ? void 0 : attributeName.startsWith("theme-"))) return;
    const themeAttrName = attributeName.replace(/^theme-/, "");
    if (ThemeAttributeNames.includes(themeAttrName)) return;
    const value = this.getAttribute(attributeName);
    if (value != null) {
      (_a3 = this.mediaTheme) == null ? void 0 : _a3.setAttribute(themeAttrName, value);
    } else {
      (_b2 = this.mediaTheme) == null ? void 0 : _b2.removeAttribute(themeAttrName);
    }
  };
  const observer2 = new MutationObserver((mutationList) => {
    for (const { attributeName } of mutationList) {
      setThemeAttribute(attributeName);
    }
  });
  observer2.observe(this, { attributes: true });
  this.getAttributeNames().forEach(setThemeAttribute);
};
setUpErrors_fn = function() {
  var _a3;
  const onError = (event) => {
    let { detail: error2 } = event;
    if (!(error2 instanceof import_mux_video2.MediaError)) {
      error2 = new import_mux_video2.MediaError(error2.message, error2.code, error2.fatal);
    }
    if (!(error2 == null ? void 0 : error2.fatal)) {
      warn(error2);
      if (error2.data) {
        warn(`${error2.name} data:`, error2.data);
      }
      return;
    }
    const devlog2 = muxMediaErrorToDevlog(error2, false);
    if (devlog2.message) {
      devlog(devlog2);
    }
    error(error2);
    if (error2.data) {
      error(`${error2.name} data:`, error2.data);
    }
    __privateMethod(this, _MuxPlayerElement_instances, setState_fn).call(this, { isDialogOpen: true });
  };
  this.addEventListener("error", onError);
  if (this.media) {
    this.media.errorTranslator = (errorEvent = {}) => {
      var _a4, _b2, _c;
      if (!(((_a4 = this.media) == null ? void 0 : _a4.error) instanceof import_mux_video2.MediaError)) return errorEvent;
      const devlog2 = muxMediaErrorToDevlog((_b2 = this.media) == null ? void 0 : _b2.error, false);
      return {
        player_error_code: (_c = this.media) == null ? void 0 : _c.error.code,
        player_error_message: devlog2.message ? String(devlog2.message) : errorEvent.player_error_message,
        player_error_context: devlog2.context ? String(devlog2.context) : errorEvent.player_error_context
      };
    };
  }
  (_a3 = this.media) == null ? void 0 : _a3.addEventListener("error", (event) => {
    var _a4, _b2;
    let { detail: error2 } = event;
    if (!error2) {
      const { message, code } = (_b2 = (_a4 = this.media) == null ? void 0 : _a4.error) != null ? _b2 : {};
      error2 = new import_mux_video2.MediaError(message, code);
    }
    if (!(error2 == null ? void 0 : error2.fatal)) return;
    this.dispatchEvent(
      new CustomEvent("error", {
        detail: error2
      })
    );
  });
};
setUpCaptionsButton_fn = function() {
  var _a3, _b2, _c, _d;
  const onTrackCountChange = () => __privateMethod(this, _MuxPlayerElement_instances, render_fn5).call(this);
  (_b2 = (_a3 = this.media) == null ? void 0 : _a3.textTracks) == null ? void 0 : _b2.addEventListener("addtrack", onTrackCountChange);
  (_d = (_c = this.media) == null ? void 0 : _c.textTracks) == null ? void 0 : _d.addEventListener("removetrack", onTrackCountChange);
};
setUpCaptionsMovement_fn = function() {
  var _a3, _b2;
  const isFirefox = /Firefox/i.test(navigator.userAgent);
  if (!isFirefox) return;
  let selectedTrack;
  const cuesmap = /* @__PURE__ */ new WeakMap();
  const shouldSkipLineToggle = () => {
    return this.streamType === import_playback_core5.StreamTypes.LIVE && !this.secondaryColor && this.offsetWidth >= 800;
  };
  const toggleLines = (track, userInactive, force = false) => {
    if (shouldSkipLineToggle()) {
      return;
    }
    const cues = Array.from(track && track.activeCues || []);
    cues.forEach((cue) => {
      if (!cue.snapToLines || cue.line < -5 || cue.line >= 0 && cue.line < 10) {
        return;
      }
      if (!userInactive || this.paused) {
        const lines = cue.text.split("\n").length;
        let offset = -3;
        if (this.streamType === import_playback_core5.StreamTypes.LIVE) {
          offset = -2;
        }
        const setTo = offset - lines;
        if (cue.line === setTo && !force) {
          return;
        }
        if (!cuesmap.has(cue)) {
          cuesmap.set(cue, cue.line);
        }
        cue.line = setTo;
      } else {
        setTimeout(() => {
          cue.line = cuesmap.get(cue) || "auto";
        }, 500);
      }
    });
  };
  const cuechangeHandler = () => {
    var _a4, _b3;
    toggleLines(selectedTrack, (_b3 = (_a4 = this.mediaController) == null ? void 0 : _a4.hasAttribute(Attributes.USER_INACTIVE)) != null ? _b3 : false);
  };
  const selectTrack = () => {
    var _a4, _b3;
    const tracks = Array.from(((_b3 = (_a4 = this.mediaController) == null ? void 0 : _a4.media) == null ? void 0 : _b3.textTracks) || []);
    const newSelectedTrack = tracks.filter(
      (t2) => ["subtitles", "captions"].includes(t2.kind) && t2.mode === "showing"
    )[0];
    if (newSelectedTrack !== selectedTrack) {
      selectedTrack == null ? void 0 : selectedTrack.removeEventListener("cuechange", cuechangeHandler);
    }
    selectedTrack = newSelectedTrack;
    selectedTrack == null ? void 0 : selectedTrack.addEventListener("cuechange", cuechangeHandler);
    toggleLines(selectedTrack, __privateGet(this, _userInactive));
  };
  selectTrack();
  (_a3 = this.textTracks) == null ? void 0 : _a3.addEventListener("change", selectTrack);
  (_b2 = this.textTracks) == null ? void 0 : _b2.addEventListener("addtrack", selectTrack);
  this.addEventListener("userinactivechange", () => {
    var _a4, _b3;
    const newUserInactive = (_b3 = (_a4 = this.mediaController) == null ? void 0 : _a4.hasAttribute(Attributes.USER_INACTIVE)) != null ? _b3 : true;
    if (__privateGet(this, _userInactive) === newUserInactive) {
      return;
    }
    __privateSet(this, _userInactive, newUserInactive);
    toggleLines(selectedTrack, __privateGet(this, _userInactive));
  });
};
function getVideoAttribute2(el, name) {
  return el.media ? el.media.getAttribute(name) : el.getAttribute(name);
}
if (!internalGlobalThis.customElements.get("mux-player")) {
  internalGlobalThis.customElements.define("mux-player", MuxPlayerElement);
  internalGlobalThis.MuxPlayerElement = MuxPlayerElement;
}
var index_default = MuxPlayerElement;
