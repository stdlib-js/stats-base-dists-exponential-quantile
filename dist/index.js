"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=n(function(g,u){
var i=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-ln/dist'),f=require('@stdlib/constants-float64-pinf/dist');function N(e,r){return i(r)||r<0||r===f||i(e)||e<0||e>1?NaN:-v(1-e)/r}u.exports=N
});var c=n(function(h,a){
var y=require('@stdlib/utils-constant-function/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-ln/dist'),F=require('@stdlib/constants-float64-pinf/dist');function I(e){if(e<0||e===F||q(e))return y(NaN);return r;function r(t){return q(t)||t<0||t>1?NaN:-x(1-t)/e}}a.exports=I
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=s(),O=c();P(o,"factory",O);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
