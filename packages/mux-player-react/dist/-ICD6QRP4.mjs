"use client";

// src/index.tsx
import React2, { useEffect as useEffect3, useState } from "react";
import { MaxResolution, MinResolution, RenditionOrder, generatePlayerInitTime } from "@mux/playback-core";
import { MediaError } from "@mux/mux-player";

// src/common/utils.ts
import React from "react";
var IS_REACT_19_OR_NEWER = parseInt(React.version) >= 19;
var ReactPropToAttrNameMap = {
  className: "class",
  classname: "class",
  htmlFor: "for",
  crossOrigin: "crossorigin",
  viewBox: "viewBox",
  playsInline: "playsinline",
  autoPlay: "autoplay",
  playbackRate: "playbackrate",
  adTagUrl: "adtagurl"
};
var isNil = (x) => x == void 0;
var isKeyOf = (k, o) => {
  if (isNil(o)) return false;
  return k in o;
};
var toKebabCase = (string) => string.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
var toNativeAttrName = (propName, propValue) => {
  if (!IS_REACT_19_OR_NEWER && typeof propValue === "boolean" && !propValue) return void 0;
  if (isKeyOf(propName, ReactPropToAttrNameMap)) return ReactPropToAttrNameMap[propName];
  if (typeof propValue === "undefined") return void 0;
  if (/[A-Z]/.test(propName)) return toKebabCase(propName);
  return propName;
};
var toNativeAttrValue = (propValue, _propName) => {
  if (!IS_REACT_19_OR_NEWER && typeof propValue === "boolean") return "";
  return propValue;
};
var toNativeProps = (props = {}) => {
  return Object.entries(props).reduce((transformedProps, [propName, propValue]) => {
    const attrName = toNativeAttrName(propName, propValue);
    if (!attrName) {
      return transformedProps;
    }
    const attrValue = toNativeAttrValue(propValue, propName);
    transformedProps[attrName] = attrValue;
    return transformedProps;
  }, {});
};

// src/index.tsx
import { useRef as useRef2 } from "react";

// src/useCombinedRefs.ts
import { useEffect, useRef } from "react";
var useCombinedRefs = (...refs) => {
  const targetRef = useRef(null);
  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);
  return targetRef;
};

// src/useObjectPropEffect.ts
import { useEffect as useEffect2 } from "react";
var hasOwnProperty = Object.prototype.hasOwnProperty;
var shallowEqual = (objA, objB) => {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (Array.isArray(objA)) {
    if (!Array.isArray(objB) || objA.length !== objB.length) return false;
    return objA.some((vVal, i) => objB[i] === vVal);
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
};
var defaultHasChanged = (obj, v, k) => {
  return !shallowEqual(v, obj[k]);
};
var defaultUpdateValue = (obj, v, k) => {
  obj[k] = v;
};
var useObjectPropEffect = (propName, propValue, ref, updateValue = defaultUpdateValue, hasChanged = defaultHasChanged) => {
  return useEffect2(() => {
    const obj = ref == null ? void 0 : ref.current;
    if (!obj) return;
    if (!hasChanged(obj, propValue, propName)) return;
    updateValue(obj, propValue, propName);
  }, [ref == null ? void 0 : ref.current, propValue]);
};
var useObjectPropEffect_default = useObjectPropEffect;

// src/env.ts
var getEnvPlayerVersion = () => {
  try {
    return "3.3.1";
  } catch {
  }
  return "UNKNOWN";
};
var player_version = getEnvPlayerVersion();
var getPlayerVersion = () => player_version;

// src/index.tsx
var MuxPlayerInternal = React2.forwardRef(({ children, ...props }, ref) => {
  return React2.createElement("mux-player", toNativeProps({ ...props, ref }), children);
});
var useEventCallbackEffect = (type, ref, callback) => {
  return useEffect3(() => {
    const eventTarget = ref == null ? void 0 : ref.current;
    if (!eventTarget || !callback) return;
    eventTarget.addEventListener(type, callback);
    return () => {
      eventTarget.removeEventListener(type, callback);
    };
  }, [ref == null ? void 0 : ref.current, callback]);
};
var usePlayer = (ref, props) => {
  const {
    onAbort,
    onCanPlay,
    onCanPlayThrough,
    onEmptied,
    onLoadStart,
    onLoadedData,
    onLoadedMetadata,
    onProgress,
    onDurationChange,
    onVolumeChange,
    onRateChange,
    onResize,
    onWaiting,
    onPlay,
    onPlaying,
    onTimeUpdate,
    onPause,
    onSeeking,
    onSeeked,
    onStalled,
    onSuspend,
    onEnded,
    onError,
    onCuePointChange,
    onCuePointsChange,
    onChapterChange,
    metadata,
    tokens,
    paused,
    playbackId,
    playbackRates,
    currentTime,
    themeProps,
    extraSourceParams,
    castCustomData,
    _hlsConfig,
    ...remainingProps
  } = props;
  useObjectPropEffect_default("playbackRates", playbackRates, ref);
  useObjectPropEffect_default("metadata", metadata, ref);
  useObjectPropEffect_default("extraSourceParams", extraSourceParams, ref);
  useObjectPropEffect_default("_hlsConfig", _hlsConfig, ref);
  useObjectPropEffect_default("themeProps", themeProps, ref);
  useObjectPropEffect_default("tokens", tokens, ref);
  useObjectPropEffect_default("playbackId", playbackId, ref);
  useObjectPropEffect_default("castCustomData", castCustomData, ref);
  useObjectPropEffect_default(
    "paused",
    paused,
    ref,
    (playerEl, pausedVal) => {
      if (pausedVal == null) return;
      if (pausedVal) {
        playerEl.pause();
      } else {
        playerEl.play();
      }
    },
    (playerEl, value, propName) => {
      if (playerEl.hasAttribute("autoplay") && !playerEl.hasPlayed) {
        return false;
      }
      return defaultHasChanged(playerEl, value, propName);
    }
  );
  useObjectPropEffect_default("currentTime", currentTime, ref, (playerEl, currentTimeVal) => {
    if (currentTimeVal == null) return;
    playerEl.currentTime = currentTimeVal;
  });
  useEventCallbackEffect("abort", ref, onAbort);
  useEventCallbackEffect("canplay", ref, onCanPlay);
  useEventCallbackEffect("canplaythrough", ref, onCanPlayThrough);
  useEventCallbackEffect("emptied", ref, onEmptied);
  useEventCallbackEffect("loadstart", ref, onLoadStart);
  useEventCallbackEffect("loadeddata", ref, onLoadedData);
  useEventCallbackEffect("loadedmetadata", ref, onLoadedMetadata);
  useEventCallbackEffect("progress", ref, onProgress);
  useEventCallbackEffect("durationchange", ref, onDurationChange);
  useEventCallbackEffect("volumechange", ref, onVolumeChange);
  useEventCallbackEffect("ratechange", ref, onRateChange);
  useEventCallbackEffect("resize", ref, onResize);
  useEventCallbackEffect("waiting", ref, onWaiting);
  useEventCallbackEffect("play", ref, onPlay);
  useEventCallbackEffect("playing", ref, onPlaying);
  useEventCallbackEffect("timeupdate", ref, onTimeUpdate);
  useEventCallbackEffect("pause", ref, onPause);
  useEventCallbackEffect("seeking", ref, onSeeking);
  useEventCallbackEffect("seeked", ref, onSeeked);
  useEventCallbackEffect("stalled", ref, onStalled);
  useEventCallbackEffect("suspend", ref, onSuspend);
  useEventCallbackEffect("ended", ref, onEnded);
  useEventCallbackEffect("error", ref, onError);
  useEventCallbackEffect("cuepointchange", ref, onCuePointChange);
  useEventCallbackEffect("cuepointschange", ref, onCuePointsChange);
  useEventCallbackEffect("chapterchange", ref, onChapterChange);
  return [remainingProps];
};
var playerSoftwareVersion = getPlayerVersion();
var playerSoftwareName = "mux-player-react";
var MuxPlayer = React2.forwardRef((props, ref) => {
  var _a;
  const innerPlayerRef = useRef2(null);
  const playerRef = useCombinedRefs(innerPlayerRef, ref);
  const [remainingProps] = usePlayer(innerPlayerRef, props);
  const [playerInitTime] = useState((_a = props.playerInitTime) != null ? _a : generatePlayerInitTime());
  return /* @__PURE__ */ React2.createElement(
    MuxPlayerInternal,
    {
      ref: playerRef,
      muxVideoElement: props.muxVideoElement,
      playerSoftwareName,
      playerSoftwareVersion,
      playerInitTime,
      ...remainingProps
    }
  );
});
var index_default = MuxPlayer;
export {
  MaxResolution,
  MediaError,
  MinResolution,
  RenditionOrder,
  index_default as default,
  generatePlayerInitTime,
  playerSoftwareName,
  playerSoftwareVersion
};
//# sourceMappingURL=-ICD6QRP4.mjs.map
