"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=n(function(g,u){
var i=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-ln/dist'),f=require('@stdlib/constants-float64-pinf/dist');function N(r,e){return i(e)||e<0||e===f||i(r)||r<0||r>1?NaN:-v(1-r)/e}u.exports=N
});var c=n(function(h,a){
var y=require('@stdlib/utils-constant-function/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-ln/dist'),F=require('@stdlib/constants-float64-pinf/dist');function I(r){if(r<0||r===F||q(r))return y(NaN);return e;function e(t){return q(t)||t<0||t>1?NaN:-x(1-t)/r}}a.exports=I
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=s(),O=c();P(o,"factory",O);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
