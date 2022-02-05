/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"readable-stream";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-accessor@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-write-accessor@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gamma@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-string@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-next-tick@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import v from"debug";var y={objectMode:!1,encoding:null,sep:"\n",copy:!0,siter:1e308},_=l,w=g,x=u.isPrimitive,M=c.isPrimitive,E=j.isPrimitive,O=b.isPrimitive,T=f.isPrimitive;var P=function(e,t){return _(t)?w(t,"sep")&&(e.sep=t.sep,!E(e.sep))?new TypeError("invalid option. `sep` option must be a primitive string. Option: `"+e.sep+"`."):w(t,"objectMode")&&(e.objectMode=t.objectMode,!x(e.objectMode))?new TypeError("invalid option. `objectMode` option must be a primitive boolean. Option: `"+e.objectMode+"`."):w(t,"encoding")&&(e.encoding=t.encoding,!E(e.encoding)&&null!==e.encoding)?new TypeError("invalid option. `encoding` option must be a primitive string or null. Option: `"+e.encoding+"`."):w(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!M(e.highWaterMark))?new TypeError("invalid option. `highWaterMark` option must be a nonnegative number. Option: `"+e.highWaterMark+"`."):w(t,"iter")&&(e.iter=t.iter,!T(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):w(t,"siter")&&(e.siter=t.siter,!O(e.siter))?new TypeError("invalid option. `siter` option must be a positive integer. Option: `"+e.siter+"`."):(w(t,"prng")&&(e.prng=t.prng),w(t,"seed")&&(e.seed=t.seed),w(t,"state")&&(e.state=t.state),w(t,"copy")&&(e.copy=t.copy),null):new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")},k=v("random:streams:gamma"),L=t.Readable,W=i.isPrimitive,S=r,V=s,N=n,G=o,R=e,C=d,F=p,J=m.factory,A=a,I=h,q=y,z=P,B=k;function D(e,t,i){var r,s;if(!(this instanceof D))return arguments.length>2?new D(e,t,i):new D(e,t);if(!W(e))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+e+"`.");if(!W(t))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+t+"`.");if(r=V(q),arguments.length>2&&(s=z(r,i)))throw s;return B("Creating a readable stream configured with the following options: %s.",JSON.stringify(r)),L.call(this,r),G(this,"_destroyed",!1),R(this,"_objectMode",r.objectMode),R(this,"_sep",r.sep),R(this,"_iter",r.iter),R(this,"_siter",r.siter),G(this,"_i",0),R(this,"_prng",J(e,t,r)),R(this,"PRNG",this._prng.PRNG),this}N(D,L),C(D.prototype,"seed",(function(){return this._prng.seed})),C(D.prototype,"seedLength",(function(){return this._prng.seedLength})),F(D.prototype,"state",(function(){return this._prng.state}),(function(e){this._prng.state=e})),C(D.prototype,"stateLength",(function(){return this._prng.stateLength})),C(D.prototype,"byteLength",(function(){return this._prng.byteLength})),R(D.prototype,"_read",(function(){var e,t;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return B("Finished generating pseudorandom numbers."),this.push(null);t=this._prng(),B("Generated a new pseudorandom number. Value: %d. Iter: %d.",t,this._i),!1===this._objectMode&&(t=t.toString(),t=1===this._i?A(t):A(this._sep+t)),e=this.push(t),this._i%this._siter==0&&this.emit("state",this.state)}})),R(D.prototype,"destroy",(function(e){var t;return this._destroyed?(B("Attempted to destroy an already destroyed stream."),this):(t=this,this._destroyed=!0,I((function(){e&&(B("Stream was destroyed due to an error. Error: %s.",S(e)?e.message:JSON.stringify(e)),t.emit("error",e));B("Closing the stream..."),t.emit("close")})),this)}));var H=l,K=s,Q=D;var U=s,X=D;var Y=e,Z=D,$=function(e,t,i){var r,s;return s=1===(r=arguments.length)?U(e,1):r>2?U(i,1):{},r<2?n:o;function n(e,t){return new X(e,t,s)}function o(){return new X(e,t,s)}};Y(Z,"objectMode",(function(e,t,i){var r;if(arguments.length>2){if(!H(r=i))throw new TypeError("invalid argument. Options must be an object. Value: `"+r+"`.");r=K(i,1)}else r={};return r.objectMode=!0,new Q(e,t,r)})),Y(Z,"factory",$);var ee=Z;export{ee as default};
//# sourceMappingURL=index.mjs.map
