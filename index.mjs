// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function r(t,i){return s(i)||i<0||i===e||s(t)||t<0||t>1?NaN:-n(1-t)/i}function d(t){return t<0||t===e||s(t)?i(NaN):function(e){if(s(e)||e<0||e>1)return NaN;return-n(1-e)/t}}t(r,"factory",d);export{r as default,d as factory};
//# sourceMappingURL=index.mjs.map
