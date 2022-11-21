"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  app: () => app
});
module.exports = __toCommonJS(src_exports);

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFFFFF",
  black: "#00000",
  gray50: "#CED4DA",
  gray100: "#909E9D",
  gray200: "#BDBDBD",
  gray500: "#6C757D",
  grayDarken1: "#757575",
  grayDarken3: "#424242",
  blue300: "#3D8BFD",
  blue350: "#2196F3",
  blue400: "#2F88FC",
  blue500: "#0D6EFD",
  blue800: "#22375E",
  orange500: "#e15a00",
  orange750: "#DD2C00"
};

// src/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function app() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
    style: { color: colors.blue400 },
    children: " HELOU WORD "
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
