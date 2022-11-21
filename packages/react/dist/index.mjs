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
import { jsx } from "react/jsx-runtime";
function app() {
  return /* @__PURE__ */ jsx("h1", {
    style: { color: colors.blue400 },
    children: " HELOU WORD "
  });
}
export {
  app
};
