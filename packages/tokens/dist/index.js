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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  lineHeights: () => lineHeights,
  radii: () => radii,
  space: () => space
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
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

// src/fonts.ts
var fonts = {
  default: "Rubik",
  text: "Roboto",
  searchBar: "Helvetica Neue"
};

// src/font-sizes.ts
var fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.438rem"
};

// src/font-weights.ts
var fontWeights = {
  regular: 400,
  medium: 500
};

// src/line-heights.ts
var lineHeights = {
  short: "120%",
  base: "150%",
  xs: "19px",
  sm: "20px",
  lg: "24px",
  xl: "32px"
};

// src/radii.ts
var radii = {
  px: "1px",
  xs: "4px",
  md: "10px",
  lg: "50px",
  full: "9999px"
};

// src/space.ts
var space = {
  xs1: "0.031rem",
  xs2: "0.104rem",
  xs3: "0.156rem",
  1: "0.25rem",
  s1: "0.375rem",
  s2: "0.391rem",
  s3: "0.422rem",
  s4: "0.555rem",
  s5: "0.625rem",
  s6: "0.656rem",
  s7: "0.659rem",
  s8: "0.688rem",
  s9: "0.938rem",
  4: "1rem",
  sm1: "1.042rem",
  sm2: "1.188rem",
  sm3: "1.25rem",
  sm4: "1.313rem",
  6: "1.5rem",
  sm7: "1.688rem",
  sm8: "1.938rem",
  8: "2rem",
  m1: "2.063rem",
  m2: "2.125rem",
  m3: "2.25rem",
  m4: "2.375rem",
  m5: "2.438rem",
  m6: "2.875rem",
  m7: "3.375rem",
  m8: "3.813rem",
  m9: "4.375rem",
  m10: "4.875rem",
  m11: "5.438rem",
  m12: "5.563rem",
  m13: "5.813rem",
  25: "6.25rem",
  l1: "6.375rem",
  l2: "6.438rem",
  l3: "6.563rem",
  l4: "6.938rem",
  28: "7rem",
  xl1: "8.125rem",
  xl2: "8.563rem",
  xl3: "9.563rem",
  xl4: "9.875rem",
  xl5: "10.063rem",
  xl6: "11.875rem",
  xl7: "14.375rem",
  xl8: "14.688rem",
  xl9: "14.75rem",
  61: "15.25rem",
  62: "15.5rem",
  65: "16.25rem",
  71: "17.75rem",
  78: "19.5rem",
  xxl: "20.375rem",
  xxl2: "27.625rem",
  222: "55.5rem",
  b1: "61.375rem",
  360: "90rem",
  378: "94.5rem"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space
});
