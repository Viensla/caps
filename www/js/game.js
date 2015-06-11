/*!
 * VERSION: beta 0.2.1
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,r,s,n,a,o,l=e.useRadians===!0?2*Math.PI:360,h=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),r=o[0],s=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof r&&"="===r.charAt(1)?s+parseInt(r.charAt(0)+"1",10)*Number(r.substr(2)):Number(r)||0,a=n-s,o.length&&(r=o.join("_"),-1!==r.indexOf("short")&&(a%=l,a!==a%(l/2)&&(a=0>a?a+l:a-l)),-1!==r.indexOf("_cw")&&0>a?a=(a+9999999999*l)%l-(0|a/l)*l:-1!==r.indexOf("ccw")&&a>0&&(a=(a-9999999999*l)%l-(0|a/l)*l)),(a>h||-h>a)&&(this._addTween(t,i,s,s+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;/*!
 * VERSION: 1.15.1
 * DATE: 2015-01-20
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals,o=a.isSelector,h=a.isArray,l=r.prototype=i.to({},.1,{}),_=[];r.version="1.15.1",l.constructor=r,l.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.lagSmoothing=i.lagSmoothing,r.ticker=i.ticker,r.render=i.render,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},l.updateTo=function(t,e){var s,r=this.ratio,n=this.vars.immediateRender||t.immediateRender;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted||n)if(e)this._initted=!1,n&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var a=this._time;this.render(0,!0,!1),this._initted=!1,this.render(a,!0,!1)}else if(this._time>0||n){this._initted=!1,this._init();for(var o,h=1/(1-r),l=this._firstPT;l;)o=l.s+l.c,l.c*=h,l.s=o-l.c,l=l._next}return this},l.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,o,h,l,u,p,c,f=this._dirty?this.totalDuration():this._totalDuration,m=this._time,d=this._totalTime,g=this._cycle,v=this._duration,y=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=v,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete"),0===v&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>y||y===n)&&y!==t&&(i=!0,y>n&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||y===t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===v&&y>0&&y!==n)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===v&&(this._initted||!this.vars.lazy||i)&&(y>=0&&(i=!0),this._rawPrevTime=c=!e||t||y===t?t:n)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(h=v+this._repeatDelay,this._cycle=this._totalTime/h>>0,0!==this._cycle&&this._cycle===this._totalTime/h&&this._cycle--,this._time=this._totalTime-this._cycle*h,this._yoyo&&0!==(1&this._cycle)&&(this._time=v-this._time),this._time>v?this._time=v:0>this._time&&(this._time=0)),this._easeType?(l=this._time/v,u=this._easeType,p=this._easePower,(1===u||3===u&&l>=.5)&&(l=1-l),3===u&&(l*=2),1===p?l*=l:2===p?l*=l*l:3===p?l*=l*l*l:4===p&&(l*=l*l*l*l),this.ratio=1===u?1-l:2===u?l:.5>this._time/v?l/2:1-l/2):this.ratio=this._ease.getRatio(this._time/v)),m===this._time&&!i&&g===this._cycle)return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=m,this._totalTime=d,this._rawPrevTime=y,this._cycle=g,a.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/v):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==m&&t>=0&&(this._active=!0),0===d&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===v)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_))),o=this._firstPT;o;)o.f?o.t[o.p](o.c*this.ratio+o.s):o.t[o.p]=o.c*this.ratio+o.s,o=o._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==d||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),this._cycle!==g&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||_)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||_),0===v&&this._rawPrevTime===n&&c!==n&&(this._rawPrevTime=0))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,a,l,u,p){a=a||0;var c,f,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),l.apply(p||this,u||_)};for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t))),t=t||[],0>a&&(t=s(t),t.reverse(),a*=-1),c=t.length-1,m=0;c>=m;m++){f={};for(d in n)f[d]=n[d];f.delay=g,m===c&&l&&(f.onComplete=y),v[m]=new r(t[m],e,f),g+=a}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var u=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(u(n,e)),r=s.length),n=n._next;return s},p=r.getAllTweens=function(e){return u(t._rootTimeline,e).concat(u(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=p(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,l,_,u,p,c=a.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)r.killChildTweensOf(t[u],e);else{n=[];for(_ in c)for(l=c[_].target.parentNode;l;)l===t&&(n=n.concat(c[_].tweens)),l=l.parentNode;for(p=n.length,u=0;p>u;u++)e&&n[u].totalTime(n[u].totalDuration()),n[u]._enabled(!1,!1)}}};var c=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=p(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){c(!0,t,e,i)},r.resumeAll=function(t,e,i){c(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},l.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},l.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},l.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,h=n.isArray,l=n.lazyTweens,_=n.lazyRender,u=[],p=_gsScope._gsDefine.globals,c=function(t){var e,i={};for(e in t)i[e]=t[e];return i},f=a.pauseCallback=function(t,e,i,s){var r=t._timeline,n=r._totalTime;!e&&this._forcingPlayhead||r._rawPrevTime===t._startTime||(r.pause(t._startTime),e&&e.apply(s||r,i||u),this._forcingPlayhead&&r.seek(n))},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.15.1",d.constructor=s,d.kill()._gc=d._forcingPlayhead=!1,d.to=function(t,e,s,r){var n=s.repeat&&p.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&p.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&p.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,h,l,_){var u,p=new s({onComplete:h,onCompleteParams:l,onCompleteScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=c(r.startAt)),p.to(t[u],e,c(r),u*n);return this.add(p,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var l,_,u,p,c,f;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(a=a||"normal",o=o||0,l=n,_=r.length,u=0;_>u;u++)h(p=r[u])&&(p=new s({tweens:p})),this.add(p,l),"string"!=typeof p&&"function"!=typeof p&&("sequence"===a?l=p._startTime+p.totalDuration()/p._timeScale:"start"===a&&(p._startTime-=p.delay())),l+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,f=c.rawTime()>r._startTime;c._timeline;)f&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},d.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&h(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,f,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,p=this._dirty?this.totalDuration():this._totalDuration,c=this._time,f=this._startTime,m=this._timeScale,d=this._paused;if(t>=p?(this._totalTime=this._time=p,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=p+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==c||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(h=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==c&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||u)),this._time>=c)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(l.length&&_(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||u))),o&&(this._gc||(f===this._startTime||m!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(n&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||u)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=[],a=e._internals,o=a.lazyTweens,h=a.lazyRender,l=new i(null,null,1,0),_=s.prototype=new t;return _.constructor=s,_.kill()._gc=!1,s.version="1.15.1",_.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},_.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},_.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},_.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},_.tweenTo=function(t,i){i=i||{};var s,r,a,o={ease:l,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)o[r]=i[r];return o.time=this._parseTimeOrLabel(t),s=Math.abs(Number(o.time)-this._time)/this._timeScale||.001,a=new e(this,s,o),o.onStart=function(){a.target.paused(!0),a.vars.time!==a.target.time()&&s===a.duration()&&a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||a,i.onStartParams||n)},a},_.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},_.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,a,l,_,u,p,c=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,m=this._time,d=this._totalTime,g=this._startTime,v=this._timeScale,y=this._rawPrevTime,T=this._paused,w=this._cycle;if(t>=c?(this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(a=!0,_="onComplete",0===this._duration&&(0===t||0>y||y===r)&&y!==t&&this._first&&(u=!0,y>r&&(_="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=f,t=f+1e-4)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==m||0===f&&y!==r&&(y>0||0>t&&y>=0)&&!this._locked)&&(_="onReverseComplete",a=this._reversed),0>t?(this._active=!1,y>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=f||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):(0===f&&0>y&&(u=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(p=f+this._repeatDelay,this._cycle=this._totalTime/p>>0,0!==this._cycle&&this._cycle===this._totalTime/p&&this._cycle--,this._time=this._totalTime-this._cycle*p,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,t=f+1e-4):0>this._time?this._time=t=0:t=this._time))),this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),b=x===(this._yoyo&&0!==(1&this._cycle)),P=this._totalTime,S=this._cycle,k=this._rawPrevTime,R=this._time;if(this._totalTime=w*f,w>this._cycle?x=!x:this._totalTime+=f,this._time=m,this._rawPrevTime=0===f?y-1e-4:y,this._cycle=w,this._locked=!0,m=x?0:f,this.render(m,e,0===f),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||n),b&&(m=x?f+1e-4:-1e-4,this.render(m,!0,!1)),this._locked=!1,this._paused&&!T)return;this._time=R,this._totalTime=P,this._cycle=S,this._rawPrevTime=k}if(!(this._time!==m&&this._first||i||u))return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==d&&t>0&&(this._active=!0),0===d&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),this._time>=m)for(s=this._first;s&&(l=s._next,!this._paused||T);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;else for(s=this._last;s&&(l=s._prev,!this._paused||T);)(s._active||m>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;this._onUpdate&&(e||(o.length&&h(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n))),_&&(this._locked||this._gc||(g===this._startTime||v!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(a&&(o.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[_]&&this.vars[_].apply(this.vars[_+"Scope"]||this,this.vars[_+"Params"]||n)))},_.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},_.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},_.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},_.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},_.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},_.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},_.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},_.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},_.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},_.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},_.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},_.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=_gsScope._gsDefine.globals,a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",h=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,c=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+c,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-c,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},l=function(t,r,n,a,o){var l,_,u,p,c,f,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)c=t[b],_=c.a,u=c.d,p=t[b+1].d,o?(y=e[l],T=i[l],w=.25*(T+y)*r/(a?.5:s[l]||.5),f=u-(u-_)*(a?.5*r:0!==y?w/y:0),m=u+(p-u)*(a?.5*r:0!==T?w/T:0),d=u-(f+((m-f)*(3*y/(y+T)+.5)/4||0))):(f=u-.5*(u-_)*r,m=u+.5*(p-u)*r,d=u-(f+m)/2),f+=d,m+=d,c.c=g=f,c.b=0!==l?P:P=c.a+.6*(c.c-c.a),c.da=u-_,c.ca=g-_,c.ba=P-_,n?(v=h(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;c=t[b],c.b=P,c.c=P+.4*(c.d-P),c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=P-c.a,n&&(v=h(c.a,P,c.c,c.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,s,r,n){var o,h,l,_,u,p,c=[];if(n)for(t=[n].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][s])&&"="===p.charAt(1)&&(t[h][s]=n[s]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return c[0]=new a(t[0][s],0,0,t[-1>o?0:1][s]),c;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],c[h]=new a(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return c[h]=new a(t[h][s],0,0,t[h+1][s]),c},u=function(t,n,a,h,u,p){var c,f,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":o,null==n&&(n=1);for(f in t[0])x.push(f);if(t.length>1){for(T=t[t.length-1],y=!0,c=x.length;--c>-1;)if(f=x[c],Math.abs(b[f]-T[f])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(e.length=i.length=s.length=0,c=x.length;--c>-1;)f=x[c],r[f]=-1!==u.indexOf(","+f+","),w[f]=_(t,f,r[f],p);for(c=e.length;--c>-1;)e[c]=Math.sqrt(e[c]),i[c]=Math.sqrt(i[c]);if(!h){for(c=x.length;--c>-1;)if(r[f])for(m=w[x[c]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(c=s.length;--c>-1;)s[c]=Math.sqrt(s[c])}for(c=x.length,d=a?4:1;--c>-1;)f=x[c],m=w[f],l(m,n,a,h,r[f]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},p=function(t,e,i){e=e||"soft";var s,r,n,o,h,l,_,u,p,c,f,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],c=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(f=t[_][p])&&"="===f.charAt(1)?i[p]+Number(f.charAt(0)+f.substr(2)):Number(f),g&&_>1&&u-1>_&&(h[c++]=(s+h[c-2])/2),h[c++]=s;for(u=c-d+1,c=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],n=h[_+2],o=2===d?0:h[_+3],h[c++]=f=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);h.length=c}return m},c=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,c,f=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=f*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),c=m*i+_-1,e[c]=(e[c]||0)+s*s},f=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],p=[];for(i in t)c(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,p[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=p,o[n]=l,h=0,p=[]);return{length:l,lengths:o,segments:u}},m=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},_=h[0],c=e.autoRotate||i.vars.orientToBezier;this._autoRotate=c?c instanceof Array?c:[["x","y","rotation",c===!0?0:Number(c)||0]]:null;for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):p(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=f(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(c=this._autoRotate)for(this._initialRotations=[],c[0]instanceof Array||(this._autoRotate=c=[c]),n=c.length;--n>-1;){for(a=0;3>a;a++)s=c[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=c[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,c=this._func,f=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]
}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),c[n]?f[n](h):f[n]=h;if(this._autoRotate){var d,g,v,y,T,w,x,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],w=b[r][3]||0,x=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,h=m?Math.atan2(T-v,y-g)*x+w:this._initialRotations[r],c[n]?f[n](h):f[n]=h)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=h,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=n.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new m;var l,_,u,p=e.values,c=p.length-1,f=[],d={};if(0>c)return o;for(l=0;c>=l;l++)u=i(t,p[l],a,o,h,c!==l),f[l]=u.end;for(_ in e)d[_]=e[_];return d.values=f,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,h={},l=a.prototype=new t("css");l.constructor=a,a.version="1.15.1",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var _,u,p,c,f,m,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,T=/(?:\d|\-|\+|=|#|\.)*/g,w=/opacity *= *([^)]*)/i,x=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,S=/([A-Z])/g,k=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,A=function(t,e){return e.toUpperCase()},C=/(?:Left|Right|Width)/i,O=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,D=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,z=Math.PI/180,I=180/Math.PI,F={},E=document,N=function(t){return E.createElementNS?E.createElementNS("http://www.w3.org/1999/xhtml",t):E.createElement(t)},L=N("div"),X=N("img"),U=a._internals={_specialProps:h},Y=navigator.userAgent,B=function(){var t=Y.indexOf("Android"),e=N("a");return p=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===t||Number(Y.substr(t+8,1))>3),f=p&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),c=-1!==Y.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y))&&(m=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),j=function(t){return w.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(t){window.console&&console.log(t)},V="",G="",W=function(t,e){e=e||L;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(G=3===s?"ms":i[s],V="-"+G.toLowerCase()+"-",G+t):null},Z=E.defaultView?E.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return B||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(S,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):j(t)},$=U.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,h,l,_=C.test(i),u=t,p=L.style,c=0>s;if(c&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(p.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==r&&u.appendChild)p[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||E.body,h=u._gsCache,l=e.ticker.frame,h&&_&&h.time===l)return h.width*s/100;p[_?"width":"height"]=s+r}u.appendChild(L),o=parseFloat(L[_?"offsetWidth":"offsetHeight"]),u.removeChild(L),_&&"%"===r&&a.cacheWidths!==!1&&(h=u._gsCache=u._gsCache||{},h.time=l,h.width=100*(o/s)),0!==o||n||(o=$(t,i,s,r,!0))}return c?-o:o},H=U.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(T,""))||0)},K=function(t,e){var i,s,r={};if(e=e||Z(t,null))for(i in e)(-1===i.indexOf("Transform")||xe===i)&&(r[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===r[i]&&(r[i.replace(k,A)]=e[i]);return B||(r.opacity=j(t)),s=Me(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,Se&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},J=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:H(t,a),void 0!==l[a]&&(o=new ce(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=te[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},se=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="center"===s?"50%":"0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(y,"")),e.oy=parseFloat(r.replace(y,""))),s+" "+r+(i.length>2?" "+i[2]:"")},re=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,s){var r,n,a,o,h,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),h="="===t.charAt(1),a=(h?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:I)-(h?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),l>o&&o>-l&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},he=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},le=a.parseColor=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t]?oe[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=he(r+1/3,e,i),t[1]=he(r,e,i),t[2]=he(r-1/3,e,i),t):(t=t.match(d)||oe.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):oe.black},_e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in oe)_e+="|"+l+"\\b";_e=RegExp(_e+")","gi");var ue=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(_e)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(d,""):"";return _?r=e?function(t){var e,p,c,f;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(f=t.replace(M,"|").split("|"),c=0;f.length>c;c++)f[c]=r(f[c]);return f.join(",")}if(e=(t.match(_e)||[n])[0],p=t.split(e).join("").match(v)||[],c=p.length,_>c--)for(;_>++c;)p[c]=i?p[0|(c-1)/2]:a[c];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(v)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},pe=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ce=(U._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),fe=(U._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},c={},f=i._transform,m=F;for(i._transform=null,F=e,s=_=i.parse(t,e,s,r),F=m,n&&(i._transform=f,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,c[o]=s.s+s.c,p[o]=s.s,n||(l=new ce(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,c[o]=s.data[h],p[o]=s[h],n||(l=new ce(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:c,firstMPT:l,pt:_}},U.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof fe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),me=a.parseComplex=function(t,e,i,s,r,n,a,o,h,l){i=i||n||"",a=new fe(t,e,0,0,a,l?2:1,null,!1,o,i,s),s+="";var u,p,c,f,m,v,y,T,w,x,b,S,k=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=k.length,C=_!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(k=k.join(" ").replace(M,", ").split(" "),R=R.join(" ").replace(M,", ").split(" "),A=k.length),A!==R.length&&(k=(n||"").split(" "),A=k.length),a.plugin=h,a.setRatio=l,u=0;A>u;u++)if(f=k[u],m=R[u],T=parseFloat(f),T||0===T)a.appendXtra("",T,re(m,T),m.replace(g,""),C&&-1!==m.indexOf("px"),!0);else if(r&&("#"===f.charAt(0)||oe[f]||P.test(f)))S=","===m.charAt(m.length-1)?"),":")",f=le(f),m=le(m),w=f.length+m.length>6,w&&!B&&0===m[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(B||(w=!1),a.appendXtra(w?"rgba(":"rgb(",f[0],m[0]-f[0],",",!0,!0).appendXtra("",f[1],m[1]-f[1],",",!0).appendXtra("",f[2],m[2]-f[2],w?",":S,!0),w&&(f=4>f.length?1:f[3],a.appendXtra("",f,(4>m.length?1:m[3])-f,S,!1)));else if(v=f.match(d)){if(y=m.match(g),!y||y.length!==v.length)return a;for(c=0,p=0;v.length>p;p++)b=v[p],x=f.indexOf(b,c),a.appendXtra(f.substr(c,x-c),Number(b),re(y[p],b),"",C&&"px"===f.substr(x+b.length,2),0===p),c=x+b.length;a["xs"+a.l]+=f.substr(c)}else a["xs"+a.l]+=a.l?" "+f:f;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,u=1;a.l>u;u++)S+=a["xs"+u]+a.data["xn"+u];a.e=S+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},de=9;for(l=fe.prototype,l.l=l.pr=0;--de>0;)l["xn"+de]=0,l["xs"+de]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new fe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var ge=function(t,e){e=e||{},this.p=e.prefix?W(t)||t:t,h[t]=h[this.p]=this,this.format=e.formatter||ue(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},ve=U._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new ge(n[s],e)},ye=function(t){if(!h[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";ve(t,{parser:function(t,i,s,r,n,a,l){var _=o.com.greensock.plugins[e];return _?(_._cssRegister(),h[s].parse(t,i,s,r,n,a,l)):(q("Error: "+e+" js file not loaded."),n)}})}};l=ge.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),h=i.replace(M,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return me(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){ve(t,{parser:function(t,s,r,n,a,o){var h=new fe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var Te,we="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),xe=W("transform"),be=V+"transform",Pe=W("transformOrigin"),Se=null!==W("perspective"),ke=U.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Se?a.defaultForce3D||"auto":!1},Re=window.SVGElement,Ae=function(t,e,i){var s,r=E.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(s in i)r.setAttributeNS(null,s.replace(n,"$1-$2").toLowerCase(),i[s]);return e.appendChild(r),r},Ce=document.documentElement,Oe=function(){var t,e,i,s=m||/Android/i.test(Y)&&!window.chrome;return E.createElementNS&&!s&&(t=Ae("svg",Ce),e=Ae("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[Pe]="50% 50%",e.style[xe]="scaleX(0.5)",s=i===e.getBoundingClientRect().width&&!(c&&Se),Ce.removeChild(t)),s}(),De=function(t,e,i){var s=t.getBBox();e=se(e).split(" "),i.xOrigin=(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*s.width:parseFloat(e[0]))+s.x,i.yOrigin=(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*s.height:parseFloat(e[1]))+s.y},Me=U.getTransform=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var n,o,h,l,_,u,p,c,f,m,d=i?t._gsTransform||new ke:new ke,g=0>d.scaleX,v=2e-5,y=1e5,T=Se?parseFloat(Q(t,Pe,e,!1,"0 0 0").split(" ")[2])||d.zOrigin||0:0,w=parseFloat(a.defaultTransformPerspective)||0;if(xe?o=Q(t,be,e,!0):t.currentStyle&&(o=t.currentStyle.filter.match(O),o=o&&4===o.length?[o[0].substr(4),Number(o[2].substr(4)),Number(o[1].substr(4)),o[3].substr(4),d.x||0,d.y||0].join(","):""),n=!o||"none"===o||"matrix(1, 0, 0, 1, 0, 0)"===o,d.svg=!!(Re&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM)),d.svg&&(De(t,Q(t,Pe,r,!1,"50% 50%")+"",d),Te=a.useSVGTransformAttr||Oe,h=t.getAttribute("transform"),n&&h&&-1!==h.indexOf("matrix")&&(o=h,n=0)),!n){for(h=(o||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],l=h.length;--l>-1;)_=Number(h[l]),h[l]=(u=_-(_|=0))?(0|u*y+(0>u?-.5:.5))/y+_:_;if(16===h.length){var x,b,P,S,k,R=h[0],A=h[1],C=h[2],D=h[3],M=h[4],z=h[5],F=h[6],E=h[7],N=h[8],L=h[9],X=h[10],U=h[12],Y=h[13],B=h[14],j=h[11],q=Math.atan2(F,X);d.zOrigin&&(B=-d.zOrigin,U=N*B-h[12],Y=L*B-h[13],B=X*B+d.zOrigin-h[14]),d.rotationX=q*I,q&&(S=Math.cos(-q),k=Math.sin(-q),x=M*S+N*k,b=z*S+L*k,P=F*S+X*k,N=M*-k+N*S,L=z*-k+L*S,X=F*-k+X*S,j=E*-k+j*S,M=x,z=b,F=P),q=Math.atan2(N,X),d.rotationY=q*I,q&&(S=Math.cos(-q),k=Math.sin(-q),x=R*S-N*k,b=A*S-L*k,P=C*S-X*k,L=A*k+L*S,X=C*k+X*S,j=D*k+j*S,R=x,A=b,C=P),q=Math.atan2(A,R),d.rotation=q*I,q&&(S=Math.cos(-q),k=Math.sin(-q),R=R*S+M*k,b=A*S+z*k,z=A*-k+z*S,F=C*-k+F*S,A=b),d.rotationX&&Math.abs(d.rotationX)+Math.abs(d.rotation)>359.9&&(d.rotationX=d.rotation=0,d.rotationY+=180),d.scaleX=(0|Math.sqrt(R*R+A*A)*y+.5)/y,d.scaleY=(0|Math.sqrt(z*z+L*L)*y+.5)/y,d.scaleZ=(0|Math.sqrt(F*F+X*X)*y+.5)/y,d.skewX=0,d.perspective=j?1/(0>j?-j:j):0,d.x=U,d.y=Y,d.z=B}else if(!(Se&&!s&&h.length&&d.x===h[4]&&d.y===h[5]&&(d.rotationX||d.rotationY)||void 0!==d.x&&"none"===Q(t,"display",e))){var V=h.length>=6,G=V?h[0]:1,W=h[1]||0,Z=h[2]||0,$=V?h[3]:1;d.x=h[4]||0,d.y=h[5]||0,p=Math.sqrt(G*G+W*W),c=Math.sqrt($*$+Z*Z),f=G||W?Math.atan2(W,G)*I:d.rotation||0,m=Z||$?Math.atan2(Z,$)*I+f:d.skewX||0,Math.abs(m)>90&&270>Math.abs(m)&&(g?(p*=-1,m+=0>=f?180:-180,f+=0>=f?180:-180):(c*=-1,m+=0>=m?180:-180)),d.scaleX=p,d.scaleY=c,d.rotation=f,d.skewX=m,Se&&(d.rotationX=d.rotationY=d.z=0,d.perspective=w,d.scaleZ=1)}d.zOrigin=T;for(l in d)v>d[l]&&d[l]>-v&&(d[l]=0)}return i&&(t._gsTransform=d),d},ze=function(t){var e,i,s=this.data,r=-s.rotation*z,n=r+s.skewX*z,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var c,f,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(c=(s.oxp?.01*d*s.ox:s.ox)-d/2,f=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=c-(c*o+f*h),b+=f-(c*l+f*_)),v?(c=d/2,f=g/2,y+=", Dx="+(c-(c*o+f*h)+x)+", Dy="+(f-(c*l+f*_)+b)+")"):y+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(D,y):y+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===y.indexOf("Dx=0, Dy=0")||w.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,S,k,R=8>m?1:-1;for(c=s.ieOffsetX||0,f=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),de=0;4>de;de++)S=ee[de],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,S,parseFloat(P),P.replace(T,""))||0,k=i!==s[S]?2>de?-s.ieOffsetX:-s.ieOffsetY:2>de?c-s.ieOffsetX:f-s.ieOffsetY,u[S]=(s[S]=Math.round(i-k*(0===de||2===de?1:R)))+"px"}}},Ie=U.set3DTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,p,f,m,d,g,v,y,T,w,x,b=this.data,P=this.t.style,S=b.rotation*z,k=b.scaleX,R=b.scaleY,A=b.scaleZ,C=b.x,O=b.y,D=b.z,M=b.perspective;if(!(1!==t&&0!==t&&b.force3D||b.force3D===!0||b.rotationY||b.rotationX||1!==A||M||D))return Fe.call(this,t),void 0;if(c&&(m=1e-4,m>k&&k>-m&&(k=A=2e-5),m>R&&R>-m&&(R=A=2e-5),!M||b.z||b.rotationX||b.rotationY||(M=0)),S||b.skewX)d=e=Math.cos(S),g=r=Math.sin(S),b.skewX&&(S-=b.skewX*z,d=Math.cos(S),g=Math.sin(S),"simple"===b.skewType&&(v=Math.tan(b.skewX*z),v=Math.sqrt(1+v*v),d*=v,g*=v)),i=-g,n=d;else{if(!(b.rotationY||b.rotationX||1!==A||M||b.svg))return P[xe]=(b.xPercent||b.yPercent?"translate("+b.xPercent+"%,"+b.yPercent+"%) translate3d(":"translate3d(")+C+"px,"+O+"px,"+D+"px)"+(1!==k||1!==R?" scale("+k+","+R+")":""),void 0;e=n=1,i=r=0}l=1,s=a=o=h=_=u=0,p=M?-1/M:0,f=b.zOrigin,m=1e-6,w=",",x="0",S=b.rotationY*z,S&&(d=Math.cos(S),g=Math.sin(S),o=-g,_=p*-g,s=e*g,a=r*g,l=d,p*=d,e*=d,r*=d),S=b.rotationX*z,S&&(d=Math.cos(S),g=Math.sin(S),v=i*d+s*g,y=n*d+a*g,h=l*g,u=p*g,s=i*-g+s*d,a=n*-g+a*d,l*=d,p*=d,i=v,n=y),1!==A&&(s*=A,a*=A,l*=A,p*=A),1!==R&&(i*=R,n*=R,h*=R,u*=R),1!==k&&(e*=k,r*=k,o*=k,_*=k),(f||b.svg)&&(f&&(C+=s*-f,O+=a*-f,D+=l*-f+f),b.svg&&(C+=b.xOrigin-(b.xOrigin*e+b.yOrigin*i),O+=b.yOrigin-(b.xOrigin*r+b.yOrigin*n)),m>C&&C>-m&&(C=x),m>O&&O>-m&&(O=x),m>D&&D>-m&&(D=0)),T=b.xPercent||b.yPercent?"translate("+b.xPercent+"%,"+b.yPercent+"%) matrix3d(":"matrix3d(",T+=(m>e&&e>-m?x:e)+w+(m>r&&r>-m?x:r)+w+(m>o&&o>-m?x:o),T+=w+(m>_&&_>-m?x:_)+w+(m>i&&i>-m?x:i)+w+(m>n&&n>-m?x:n),b.rotationX||b.rotationY?(T+=w+(m>h&&h>-m?x:h)+w+(m>u&&u>-m?x:u)+w+(m>s&&s>-m?x:s),T+=w+(m>a&&a>-m?x:a)+w+(m>l&&l>-m?x:l)+w+(m>p&&p>-m?x:p)+w):T+=",0,0,0,0,1,0,",T+=C+w+O+w+D+w+(M?1+-D/M:1)+")",P[xe]=T},Fe=U.set2DTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,p=this.data,c=this.t,f=c.style,m=p.x,d=p.y;return!(p.rotationX||p.rotationY||p.z||p.force3D===!0||"auto"===p.force3D&&1!==t&&0!==t)||p.svg&&Te||!Se?(r=p.scaleX,n=p.scaleY,p.rotation||p.skewX||p.svg?(e=p.rotation*z,i=e-p.skewX*z,s=1e5,a=Math.cos(e)*r,o=Math.sin(e)*r,h=Math.sin(i)*-n,l=Math.cos(i)*n,p.svg&&(m+=p.xOrigin-(p.xOrigin*a+p.yOrigin*h),d+=p.yOrigin-(p.xOrigin*o+p.yOrigin*l),u=1e-6,u>m&&m>-u&&(m=0),u>d&&d>-u&&(d=0)),_=(0|a*s)/s+","+(0|o*s)/s+","+(0|h*s)/s+","+(0|l*s)/s+","+m+","+d+")",p.svg&&Te?c.setAttribute("transform","matrix("+_):f[xe]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+_):f[xe]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+r+",0,0,"+n+","+m+","+d+")",void 0):(this.setRatio=Ie,Ie.call(this,t),void 0)};l=ke.prototype,l.x=l.y=l.z=l.skewX=l.skewY=l.rotation=l.rotationX=l.rotationY=l.zOrigin=l.xPercent=l.yPercent=0,l.scaleX=l.scaleY=l.scaleZ=1,ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,i,s,n,o,h){if(s._lastParsedTransform===h)return n;s._lastParsedTransform=h;var l,_,u,p,c,f,m,d=s._transform=Me(t,r,!0,h.parseTransform),g=t.style,v=1e-6,y=we.length,T=h,w={};if("string"==typeof T.transform&&xe)u=L.style,u[xe]=T.transform,u.display="block",u.position="absolute",E.body.appendChild(L),l=Me(L,null,!1),E.body.removeChild(L);else if("object"==typeof T){if(l={scaleX:ne(null!=T.scaleX?T.scaleX:T.scale,d.scaleX),scaleY:ne(null!=T.scaleY?T.scaleY:T.scale,d.scaleY),scaleZ:ne(T.scaleZ,d.scaleZ),x:ne(T.x,d.x),y:ne(T.y,d.y),z:ne(T.z,d.z),xPercent:ne(T.xPercent,d.xPercent),yPercent:ne(T.yPercent,d.yPercent),perspective:ne(T.transformPerspective,d.perspective)},m=T.directionalRotation,null!=m)if("object"==typeof m)for(u in m)T[u]=m[u];else T.rotation=m;"string"==typeof T.x&&-1!==T.x.indexOf("%")&&(l.x=0,l.xPercent=ne(T.x,d.xPercent)),"string"==typeof T.y&&-1!==T.y.indexOf("%")&&(l.y=0,l.yPercent=ne(T.y,d.yPercent)),l.rotation=ae("rotation"in T?T.rotation:"shortRotation"in T?T.shortRotation+"_short":"rotationZ"in T?T.rotationZ:d.rotation,d.rotation,"rotation",w),Se&&(l.rotationX=ae("rotationX"in T?T.rotationX:"shortRotationX"in T?T.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",w),l.rotationY=ae("rotationY"in T?T.rotationY:"shortRotationY"in T?T.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",w)),l.skewX=null==T.skewX?d.skewX:ae(T.skewX,d.skewX),l.skewY=null==T.skewY?d.skewY:ae(T.skewY,d.skewY),(_=l.skewY-d.skewY)&&(l.skewX+=_,l.rotation+=_)}for(Se&&null!=T.force3D&&(d.force3D=T.force3D,f=!0),d.skewType=T.skewType||d.skewType||a.defaultSkewType,c=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,c||null==T.scale||(l.scaleZ=1);--y>-1;)i=we[y],p=l[i]-d[i],(p>v||-v>p||null!=T[i]||null!=F[i])&&(f=!0,n=new fe(d,i,d[i],p,n),i in w&&(n.e=w[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return p=T.transformOrigin,p&&d.svg&&(De(t,se(p),l),n=new fe(d,"xOrigin",d.xOrigin,l.xOrigin-d.xOrigin,n,-1,"transformOrigin"),n.b=d.xOrigin,n.e=n.xs0=l.xOrigin,n=new fe(d,"yOrigin",d.yOrigin,l.yOrigin-d.yOrigin,n,-1,"transformOrigin"),n.b=d.yOrigin,n.e=n.xs0=l.yOrigin,p="0px 0px"),(p||Se&&c&&d.zOrigin)&&(xe?(f=!0,i=Pe,p=(p||Q(t,i,r,!1,"50% 50%"))+"",n=new fe(g,i,0,0,n,-1,"transformOrigin"),n.b=g[i],n.plugin=o,Se?(u=d.zOrigin,p=p.split(" "),d.zOrigin=(p.length>2&&(0===u||"0px"!==p[2])?parseFloat(p[2]):u)||0,n.xs0=n.e=p[0]+" "+(p[1]||"50%")+" 0px",n=new fe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=p):se(p+"",d)),f&&(s._transformType=d.svg&&Te||!c&&3!==this._transformType?2:3),n},prefix:!0}),ve("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ve("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,c,f,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=W(b[h])),u=_=Q(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],c=parseFloat(u),v=u.substr((c+"").length),y="="===p.charAt(1),y?(f=parseInt(p.charAt(0)+"1",10),p=p.substr(2),f*=parseFloat(p),g=p.substr((f+"").length-(0>f?1:0))||""):(f=parseFloat(p),g=p.substr((f+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",c,v),w=$(t,"borderTop",c,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=$(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+f+g,l=parseFloat(_)+f+g)),a=me(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:ue("0px 0px 0px 0px",!1,!0)}),ve("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,c="background-position",f=r||Z(t,null),d=this.format((f?m?f.getPropertyValue(c+"-x")+" "+f.getPropertyValue(c+"-y"):f.getPropertyValue(c):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=Q(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),X.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-X.width:t.offsetHeight-X.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:se}),ve("backgroundSize",{defaultValue:"0 0",formatter:se}),ve("perspective",{defaultValue:"0px",prefix:!0}),ve("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ve("transformStyle",{prefix:!0}),ve("backfaceVisibility",{prefix:!0}),ve("userSelect",{prefix:!0}),ve("margin",{parser:pe("marginTop,marginRight,marginBottom,marginLeft")}),ve("padding",{parser:pe("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ve("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>m?(h=t.currentStyle,l=8>m?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),ve("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ve("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),ve("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(_e)||["#000"])[0]}}),ve("borderWidth",{parser:pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ve("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new fe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Ee=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(w,"opacity="+r))};ve("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),B?n=new fe(h,"opacity",o,e-o,n):(n=new fe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ee),l&&(n=new fe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ne=function(t,e){e&&(t.removeProperty?("ms"===e.substr(0,2)&&(e="M"+e.substr(1)),t.removeProperty(e.replace(S,"-$1").toLowerCase())):t.removeAttribute(e))},Le=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ne(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ve("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,c,f=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new fe(t,s,0,0,a,2),a.setRatio=Le,a.pr=-11,i=!0,a.b=f,_=K(t,r),u=t._gsClassPT){for(p={},c=u.data;c;)p[c.p]=1,c=c._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:f.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.setAttribute("class",a.e),l=J(t,_,K(t),h,p),t.setAttribute("class",f),a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var Xe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=h.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],h[i]&&(h[i].parse===a?r=!0:i="transformOrigin"===i?Pe:h[i].p),Ne(n,i);r&&(Ne(n,xe),this.t._gsTransform&&delete this.t._gsTransform)}};for(ve("clearProps",{parser:function(t,e,s,r,n){return n=new fe(t,s,0,0,n,2),n.setRatio=Xe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),de=l.length;de--;)ye(l[de]);l=a.prototype,l._firstPT=l._lastParsedTransform=l._transform=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;
this._target=t,this._tween=o,this._vars=e,_=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var h,l,c,m,d,g,v,y,T,w=t.style;if(u&&""===w.zIndex&&(h=Q(t,"zIndex",r),("auto"===h||""===h)&&this._addLazySet(w,"zIndex",0)),"string"==typeof e&&(m=w.cssText,h=K(t,r),w.cssText=m+";"+e,h=J(t,h,K(t)).difs,!B&&x.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,w.cssText=m),this._firstPT=l=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,xe?p&&(u=!0,""===w.zIndex&&(v=Q(t,"zIndex",r),("auto"===v||""===v)&&this._addLazySet(w,"zIndex",0)),f&&this._addLazySet(w,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):w.zoom=1,c=l;c&&c._next;)c=c._next;y=new fe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&Se?Ie:xe?Fe:ze,y.data=this._transform||Me(t,r,!0),n.pop()}if(i){for(;l;){for(g=l._next,c=m;c&&c.pr>l.pr;)c=c._next;(l._prev=c?c._prev:d)?l._prev._next=l:m=l,(l._next=c)?c._prev=l:d=l,l=g}this._firstPT=m}return!0},l.parse=function(t,e,i,n){var a,o,l,u,p,c,f,m,d,g,v=t.style;for(a in e)c=e[a],o=h[a],o?i=o.parse(t,c,a,this,i,n,e):(p=Q(t,a,r)+"",d="string"==typeof c,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&P.test(c)?(d||(c=le(c),c=(c.length>3?"rgba(":"rgb(")+c.join(",")+")"),i=me(v,a,p,c,!0,"transparent",i,0,n)):!d||-1===c.indexOf(" ")&&-1===c.indexOf(",")?(l=parseFloat(p),f=l||0===l?p.substr((l+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(l=ie(t,a,r),f="px"):"left"===a||"top"===a?(l=H(t,a,r),f="px"):(l="opacity"!==a?0:1,f="")),g=d&&"="===c.charAt(1),g?(u=parseInt(c.charAt(0)+"1",10),c=c.substr(2),u*=parseFloat(c),m=c.replace(T,"")):(u=parseFloat(c),m=d?c.replace(T,""):""),""===m&&(m=a in s?s[a]:f),c=u||0===u?(g?u+l:u)+m:e[a],f!==m&&""!==m&&(u||0===u)&&l&&(l=$(t,a,l,f),"%"===m?(l/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(p=l+"%")):"em"===m?l/=$(t,a,1,"em"):"px"!==m&&(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(c=u+l+m)),g&&(u+=l),!l&&0!==l||!u&&0!==u?void 0!==v[a]&&(c||"NaN"!=c+""&&null!=c)?(i=new fe(v,a,u||l||0,0,i,-1,a,!1,0,p,c),i.xs0="none"!==c||"display"!==a&&-1===a.indexOf("Style")?c:p):q("invalid "+a+" tween value: "+e[a]):(i=new fe(v,a,l,u-l,i,0,a,_!==!1&&("px"===m||"zIndex"===a),0,p,c),i.xs0=m)):i=me(v,a,p,c,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},l._enableTransforms=function(t){this._transform=this._transform||Me(this._target,r,!0),this._transformType=this._transform.svg&&Te||!t&&3!==this._transformType?2:3};var Ue=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};l._addLazySet=function(t,e,i){var s=this._firstPT=new fe(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Ue,s.data=this},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Ye=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)Ye(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Ye(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,Ye(t,l,u),o.render(i,!0),Ye(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=J(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.3.3",init:function(t,e){var i,s,r;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={},this._start={},this._end={};for(i in e)this._start[i]=this._proxy[i]=s=t.getAttribute(i),r=this._addTween(this._proxy,i,parseFloat(s),e[i],i),this._end[i]=r?r.s+r.c:e[i],this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=1===t?this._end:t?this._proxy:this._start;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+"")}}),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},c=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",c("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),c("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),c("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),c=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--c>-1;)i=f?Math.random():1/u*c,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:c%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),c=u;--c>-1;)a=l[c],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,h=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},l=h("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},p=function(){},c=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),f={},m=function(s,r,n,a){this.sc=f[s]?f[s].sc:[],f[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(l){for(var _,u,p,c,d=r.length,g=d;--d>-1;)(_=f[r[d]]||new m(r[d],[])).gsClass?(o[d]=_.gsClass,g--):l&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),p=u.pop(),c=h(u.join("."))[p]=this.gsClass=n.apply(n,o),a&&(i[p]=c,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return c}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=c)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=l._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},x=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?g("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,x(new T(null,null,1,r),n,"easeOut",!0),x(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),x(new T(null,null,3,r),n,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)n=l[h],n.c===e&&n.s===i?l.splice(h,1):0===_&&r>n.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,S=t.cancelAnimationFrame,k=Date.now||function(){return(new Date).getTime()},R=k();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],S=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,h,l=this,u=k(),c=e!==!1&&P,f=500,m=33,d="tick",g=function(t){var e,a,o=k()-R;o>f&&(u+=o-m),R+=o,l.time=(R-u)/1e3,e=l.time-h,(!i||e>0||t===!0)&&(l.frame++,h+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(g)),a&&l.dispatchEvent(d)};b.call(l),l.time=l.frame=0,l.tick=function(){g(!0)},l.lagSmoothing=function(t,e){f=t||1/_,m=Math.min(e,f,0)},l.sleep=function(){null!=r&&(c&&S?S(r):clearTimeout(r),s=p,r=null,l===a&&(o=!1))},l.wake=function(){null!==r?l.sleep():l.frame>10&&(R=k()-f+5),s=0===i?p:c&&P?P:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===a&&(o=!0),g(2)},l.fps=function(t){return arguments.length?(i=t,n=1/(i||60),h=this.time+n,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),c=t,l.fps(i),void 0):c},l.fps(t),setTimeout(function(){c&&(!r||5>l.frame)&&l.useRAF(!1)},1500)}),n=l.Ticker.prototype=new l.events.EventDispatcher,n.constructor=l.Ticker;var A=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,j){o||a.wake();var i=this.vars.useFrames?B:j;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=A.ticker=new l.Ticker,n=A.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var C=function(){o&&k()-R>2e3&&a.wake(),setTimeout(C,2e3)};C(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=c(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),I.length&&q())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var O=g("core.SimpleTimeline",function(t){A.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=O.prototype=new A,n.constructor=O,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(A.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Y[D.defaultOverwrite]:"number"==typeof h?h>>0:Y[h],(o||e instanceof Array||e.push&&c(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=V(n,this,!1),1===h&&this._siblings[r].length>1&&W(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=V(e,this,!1),1===h&&this._siblings.length>1&&W(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)U[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!N[i]||N[i]&&N[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new A,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.15.1",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=!0,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var I=[],F={},E=D._internals={isArray:c,isSelector:M,lazyTweens:I},N=D._plugins={},L=E.tweenLookup={},X=0,U=E.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},Y={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},B=A._rootFramesTimeline=new O,j=A._rootTimeline=new O,q=E.lazyRender=function(){var t,e=I.length;for(F={};--e>-1;)t=I[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);I.length=0};j._startTime=a.time,B._startTime=a.frame,j._active=B._active=!0,setTimeout(q,1),A._updateRoot=D.render=function(){var t,e,i;if(I.length&&q(),j.render((a.time-j._startTime)*j._timeScale,!1,!1),B.render((a.frame-B._startTime)*B._timeScale,!1,!1),I.length&&q(),!(a.frame%120)){for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=j._first,(!i||i._paused)&&D.autoSleep&&!B._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",A._updateRoot);var V=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+X++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},G=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=D.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},W=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||G(o,e)&&o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var l,u=e._startTime+_,p=[],c=0,f=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||Z(e,0,f),0===Z(o,l,f)&&(p[c++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((f||!o._initted)&&2e-10>=u-o._startTime||(p[c++]=o)));for(n=c;--n>-1;)if(o=p[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!G(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},Z=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,h=!!n.immediateRender,l=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(h=!1),i={};for(s in n)U[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&n.lazy!==!1,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=l=l?l instanceof T?l:"function"==typeof l?new T(l,n.easeParams):w[l]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;F[e._gsTweenID]&&q(),this.vars.css||e.style&&e!==t&&e.nodeType&&N.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars){if(_=this.vars[n],U[n])_&&(_ instanceof Array||_.push&&c(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(N[n]&&(h=new N[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&W(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(F[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===_&&"isPause"!==this.data)&&l!==t&&(i=!0,l>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0&&l!==_)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(l!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/h,p=this._easeType,c=this._easePower;(1===p||3===p&&u>=.5)&&(u=1-u),3===p&&(u*=2),1===c?u*=u:2===c?u*=u*u:3===c?u*=u*u*u:4===c&&(u*=u*u*u*u),this.ratio=1===p?1-u:2===p?u:.5>t/h?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,I.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||y))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||y)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||y),0===h&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))
}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,h,l,_,u;if((c(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s])&&(h=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(l=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in l)o[n]&&(u||(u=[]),u.push(n));if(!G(this,i,e,u))return!1}for(n in l)(a=o[n])&&(a.pg&&a.t._kill(l)&&(h=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return h},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],A.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=V(s[i],this,!0);else this._siblings=V(this.target,this,!0)}return A.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((c(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=V(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var Q=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=Q.prototype},!0);if(n=Q.prototype,Q.version="1.10.1",Q.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},Q.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===Q.API&&(N[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){Q.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new Q(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,Q.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in f)f[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*!
 * VERSION: 1.7.5
 * DATE: 2015-02-26
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=document.documentElement,e=window,i=function(i,r){var s="x"===r?"Width":"Height",n="scroll"+s,a="client"+s,o=document.body;return i===e||i===t||i===o?Math.max(t[n],o[n])-(e["inner"+s]||t[a]||o[a]):i[n]-i["offset"+s]},r=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.5",init:function(t,r,s){return this._wdw=t===e,this._target=t,this._tween=s,"object"!=typeof r&&(r={y:r}),this.vars=r,this._autoKill=r.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=r.x?(this._addTween(this,"x",this.x,"max"===r.x?i(t,"x"):r.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=r.y?(this._addTween(this,"y",this.y,"max"===r.y?i(t,"y"):r.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(t){this._super.setRatio.call(this,t);var r=this._wdw||!this.skipX?this.getX():this.xPrev,s=this._wdw||!this.skipY?this.getY():this.yPrev,n=s-this.yPrev,a=r-this.xPrev;this._autoKill&&(!this.skipX&&(a>7||-7>a)&&i(this._target,"x")>r&&(this.skipX=!0),!this.skipY&&(n>7||-7>n)&&i(this._target,"y")>s&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?e.scrollTo(this.skipX?r:this.x,this.skipY?s:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),s=r.prototype;r.max=i,s.getX=function(){return this._wdw?null!=e.pageXOffset?e.pageXOffset:null!=t.scrollLeft?t.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},s.getY=function(){return this._wdw?null!=e.pageYOffset?e.pageYOffset:null!=t.scrollTop?t.scrollTop:document.body.scrollTop:this._target.scrollTop},s._kill=function(t){return t.scrollTo_x&&(this.skipX=!0),t.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;/*global jQuery */
/*!
 * Lettering.JS 0.7.0
 *
 * Copyright 2010, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Thanks to Paul Irish - http://paulirish.com - for the feedback.
 *
 * Date: Mon Sep 20 17:14:00 2010 -0600
 */
(function($){
    function injector(t, splitter, klass, after) {
        var text = t.text()
            , a = text.split(splitter)
            , inject = '';
        if (a.length) {
            $(a).each(function(i, item) {
                inject += '<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
            });
            t.attr('aria-label',text)
                .empty()
                .append(inject)

        }
    }


    var methods = {
        init : function() {

            return this.each(function() {
                injector($(this), '', 'char', '');
            });

        },

        words : function() {

            return this.each(function() {
                injector($(this), ' ', 'word', ' ');
            });

        },

        lines : function() {

            return this.each(function() {
                var r = "eefec303079ad17405c889e092e105b0";
                // Because it's hard to split a <br/> tag consistently across browsers,
                // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
                // (of the word "split").  If you're trying to use this plugin on that
                // md5 hash string, it will fail because you're being ridiculous.
                injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
            });

        }
    };

    $.fn.lettering = function( method ) {
        // Method calling logic
        if ( method && methods[method] ) {
            return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
        } else if ( method === 'letters' || ! method ) {
            return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
        }
        $.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
        return this;
    };

})(jQuery);;/**
 * Micro Cache
 * - a micro library to handle a inmemory cache
 * - works in node and browser.
 *
 * @tags inmemory, keyvalue, cache, node, browser
 */
var MicroCache	= function(){
    var _values	= {};
    return {
        get	: function(key){ return _values[key];	},
        contains: function(key){ return key in _values;	},
        remove	: function(key){ delete _values[key];	},
        set	: function(key, value){	_values[key] = value;},
        values	: function(){ return _values;	},
        getSet	: function(key, value){
            if( !this.contains(key) ){
                this.set(key, typeof value == 'function' ? value() : value )
            }
            return this.get(key);
        }
    }
}


// export in common js
if( typeof module !== "undefined" && ('exports' in module)){
    module.exports	= MicroCache;
};window.Physijs = (function() {
    'use strict';

    var SUPPORT_TRANSFERABLE,
        _is_simulating = false,
        _Physijs = Physijs, // used for noConflict method
        Physijs = {}, // object assigned to window.Physijs
        Eventable, // class to provide simple event methods
        getObjectId, // returns a unique ID for a Physijs mesh object
        getEulerXYZFromQuaternion, getQuatertionFromEuler,
        convertWorldPositionToObject, // Converts a world-space position to object-space
        addObjectChildren,

        _temp1, _temp2,
        _temp_vector3_1 = new THREE.Vector3,
        _temp_vector3_2 = new THREE.Vector3,
        _temp_matrix4_1 = new THREE.Matrix4,
        _quaternion_1 = new THREE.Quaternion,

    // constants
        MESSAGE_TYPES = {
            WORLDREPORT: 0,
            COLLISIONREPORT: 1,
            VEHICLEREPORT: 2,
            CONSTRAINTREPORT: 3
        },
        REPORT_ITEMSIZE = 14,
        COLLISIONREPORT_ITEMSIZE = 5,
        VEHICLEREPORT_ITEMSIZE = 9,
        CONSTRAINTREPORT_ITEMSIZE = 6;

    Physijs.scripts = {};

    Eventable = function() {
        this._eventListeners = {};
    };
    Eventable.prototype.addEventListener = function( event_name, callback ) {
        if ( !this._eventListeners.hasOwnProperty( event_name ) ) {
            this._eventListeners[event_name] = [];
        }
        this._eventListeners[event_name].push( callback );
    };
    Eventable.prototype.removeEventListener = function( event_name, callback ) {
        var index;

        if ( !this._eventListeners.hasOwnProperty( event_name ) ) return false;

        if ( (index = this._eventListeners[event_name].indexOf( callback )) >= 0 ) {
            this._eventListeners[event_name].splice( index, 1 );
            return true;
        }

        return false;
    };
    Eventable.prototype.dispatchEvent = function( event_name ) {
        var i,
            parameters = Array.prototype.splice.call( arguments, 1 );

        if ( this._eventListeners.hasOwnProperty( event_name ) ) {
            for ( i = 0; i < this._eventListeners[event_name].length; i++ ) {
                this._eventListeners[event_name][i].apply( this, parameters );
            }
        }
    };
    Eventable.make = function( obj ) {
        obj.prototype.addEventListener = Eventable.prototype.addEventListener;
        obj.prototype.removeEventListener = Eventable.prototype.removeEventListener;
        obj.prototype.dispatchEvent = Eventable.prototype.dispatchEvent;
    };

    getObjectId = (function() {
        var _id = 1;
        return function() {
            return _id++;
        };
    })();

    getEulerXYZFromQuaternion = function ( x, y, z, w ) {
        return new THREE.Vector3(
            Math.atan2( 2 * ( x * w - y * z ), ( w * w - x * x - y * y + z * z ) ),
            Math.asin( 2 *  ( x * z + y * w ) ),
            Math.atan2( 2 * ( z * w - x * y ), ( w * w + x * x - y * y - z * z ) )
        );
    };

    getQuatertionFromEuler = function( x, y, z ) {
        var c1, s1, c2, s2, c3, s3, c1c2, s1s2;
        c1 = Math.cos( y  );
        s1 = Math.sin( y  );
        c2 = Math.cos( -z );
        s2 = Math.sin( -z );
        c3 = Math.cos( x  );
        s3 = Math.sin( x  );

        c1c2 = c1 * c2;
        s1s2 = s1 * s2;

        return {
            w: c1c2 * c3  - s1s2 * s3,
            x: c1c2 * s3  + s1s2 * c3,
            y: s1 * c2 * c3 + c1 * s2 * s3,
            z: c1 * s2 * c3 - s1 * c2 * s3
        };
    };

    convertWorldPositionToObject = function( position, object ) {
        _temp_matrix4_1.identity(); // reset temp matrix

        // Set the temp matrix's rotation to the object's rotation
        _temp_matrix4_1.identity().makeRotationFromQuaternion( object.quaternion );

        // Invert rotation matrix in order to "unrotate" a point back to object space
        _temp_matrix4_1.getInverse( _temp_matrix4_1 );

        // Yay! Temp vars!
        _temp_vector3_1.copy( position );
        _temp_vector3_2.copy( object.position );

        // Apply the rotation

        return _temp_vector3_1.sub( _temp_vector3_2 ).applyMatrix4( _temp_matrix4_1 );
    };



    // Physijs.noConflict
    Physijs.noConflict = function() {
        window.Physijs = _Physijs;
        return Physijs;
    };


    // Physijs.createMaterial
    Physijs.createMaterial = function( material, friction, restitution ) {
        var physijs_material = function(){};
        physijs_material.prototype = material;
        physijs_material = new physijs_material;

        physijs_material._physijs = {
            id: material.id,
            friction: friction === undefined ? .8 : friction,
            restitution: restitution === undefined ? .2 : restitution
        };

        return physijs_material;
    };


    // Constraints
    Physijs.PointConstraint = function( objecta, objectb, position ) {
        if ( position === undefined ) {
            position = objectb;
            objectb = undefined;
        }

        this.type = 'point';
        this.appliedImpulse = 0;
        this.id = getObjectId();
        this.objecta = objecta._physijs.id;
        this.positiona = convertWorldPositionToObject( position, objecta ).clone();

        if ( objectb ) {
            this.objectb = objectb._physijs.id;
            this.positionb = convertWorldPositionToObject( position, objectb ).clone();
        }
    };
    Physijs.PointConstraint.prototype.getDefinition = function() {
        return {
            type: this.type,
            id: this.id,
            objecta: this.objecta,
            objectb: this.objectb,
            positiona: this.positiona,
            positionb: this.positionb
        };
    };

    Physijs.HingeConstraint = function( objecta, objectb, position, axis ) {
        if ( axis === undefined ) {
            axis = position;
            position = objectb;
            objectb = undefined;
        }

        this.type = 'hinge';
        this.appliedImpulse = 0;
        this.id = getObjectId();
        this.scene = objecta.parent;
        this.objecta = objecta._physijs.id;
        this.positiona = convertWorldPositionToObject( position, objecta ).clone();
        this.position = position.clone();
        this.axis = axis;

        if ( objectb ) {
            this.objectb = objectb._physijs.id;
            this.positionb = convertWorldPositionToObject( position, objectb ).clone();
        }
    };
    Physijs.HingeConstraint.prototype.getDefinition = function() {
        return {
            type: this.type,
            id: this.id,
            objecta: this.objecta,
            objectb: this.objectb,
            positiona: this.positiona,
            positionb: this.positionb,
            axis: this.axis
        };
    };
    /*
     * low = minimum angle in radians
     * high = maximum angle in radians
     * bias_factor = applied as a factor to constraint error
     * relaxation_factor = controls bounce (0.0 == no bounce)
     */
    Physijs.HingeConstraint.prototype.setLimits = function( low, high, bias_factor, relaxation_factor ) {
        this.scene.execute( 'hinge_setLimits', { constraint: this.id, low: low, high: high, bias_factor: bias_factor, relaxation_factor: relaxation_factor } );
    };
    Physijs.HingeConstraint.prototype.enableAngularMotor = function( velocity, acceleration ) {
        this.scene.execute( 'hinge_enableAngularMotor', { constraint: this.id, velocity: velocity, acceleration: acceleration } );
    };
    Physijs.HingeConstraint.prototype.disableMotor = function( velocity, acceleration ) {
        this.scene.execute( 'hinge_disableMotor', { constraint: this.id } );
    };

    Physijs.SliderConstraint = function( objecta, objectb, position, axis ) {
        if ( axis === undefined ) {
            axis = position;
            position = objectb;
            objectb = undefined;
        }

        this.type = 'slider';
        this.appliedImpulse = 0;
        this.id = getObjectId();
        this.scene = objecta.parent;
        this.objecta = objecta._physijs.id;
        this.positiona = convertWorldPositionToObject( position, objecta ).clone();
        this.axis = axis;

        if ( objectb ) {
            this.objectb = objectb._physijs.id;
            this.positionb = convertWorldPositionToObject( position, objectb ).clone();
        }
    };
    Physijs.SliderConstraint.prototype.getDefinition = function() {
        return {
            type: this.type,
            id: this.id,
            objecta: this.objecta,
            objectb: this.objectb,
            positiona: this.positiona,
            positionb: this.positionb,
            axis: this.axis
        };
    };
    Physijs.SliderConstraint.prototype.setLimits = function( lin_lower, lin_upper, ang_lower, ang_upper ) {
        this.scene.execute( 'slider_setLimits', { constraint: this.id, lin_lower: lin_lower, lin_upper: lin_upper, ang_lower: ang_lower, ang_upper: ang_upper } );
    };
    Physijs.SliderConstraint.prototype.setRestitution = function( linear, angular ) {
        this.scene.execute(
            'slider_setRestitution',
            {
                constraint: this.id,
                linear: linear,
                angular: angular
            }
        );
    };
    Physijs.SliderConstraint.prototype.enableLinearMotor = function( velocity, acceleration) {
        this.scene.execute( 'slider_enableLinearMotor', { constraint: this.id, velocity: velocity, acceleration: acceleration } );
    };
    Physijs.SliderConstraint.prototype.disableLinearMotor = function() {
        this.scene.execute( 'slider_disableLinearMotor', { constraint: this.id } );
    };
    Physijs.SliderConstraint.prototype.enableAngularMotor = function( velocity, acceleration ) {
        this.scene.execute( 'slider_enableAngularMotor', { constraint: this.id, velocity: velocity, acceleration: acceleration } );
    };
    Physijs.SliderConstraint.prototype.disableAngularMotor = function() {
        this.scene.execute( 'slider_disableAngularMotor', { constraint: this.id } );
    };

    Physijs.ConeTwistConstraint = function( objecta, objectb, position ) {
        if ( position === undefined ) {
            throw 'Both objects must be defined in a ConeTwistConstraint.';
        }
        this.type = 'conetwist';
        this.appliedImpulse = 0;
        this.id = getObjectId();
        this.scene = objecta.parent;
        this.objecta = objecta._physijs.id;
        this.positiona = convertWorldPositionToObject( position, objecta ).clone();
        this.objectb = objectb._physijs.id;
        this.positionb = convertWorldPositionToObject( position, objectb ).clone();
        this.axisa = { x: objecta.rotation.x, y: objecta.rotation.y, z: objecta.rotation.z };
        this.axisb = { x: objectb.rotation.x, y: objectb.rotation.y, z: objectb.rotation.z };
    };
    Physijs.ConeTwistConstraint.prototype.getDefinition = function() {
        return {
            type: this.type,
            id: this.id,
            objecta: this.objecta,
            objectb: this.objectb,
            positiona: this.positiona,
            positionb: this.positionb,
            axisa: this.axisa,
            axisb: this.axisb
        };
    };
    Physijs.ConeTwistConstraint.prototype.setLimit = function( x, y, z ) {
        this.scene.execute( 'conetwist_setLimit', { constraint: this.id, x: x, y: y, z: z } );
    };
    Physijs.ConeTwistConstraint.prototype.enableMotor = function() {
        this.scene.execute( 'conetwist_enableMotor', { constraint: this.id } );
    };
    Physijs.ConeTwistConstraint.prototype.setMaxMotorImpulse = function( max_impulse ) {
        this.scene.execute( 'conetwist_setMaxMotorImpulse', { constraint: this.id, max_impulse: max_impulse } );
    };
    Physijs.ConeTwistConstraint.prototype.setMotorTarget = function( target ) {
        if ( target instanceof THREE.Vector3 ) {
            target = new THREE.Quaternion().setFromEuler( new THREE.Euler( target.x, target.y, target.z ) );
        } else if ( target instanceof THREE.Euler ) {
            target = new THREE.Quaternion().setFromEuler( target );
        } else if ( target instanceof THREE.Matrix4 ) {
            target = new THREE.Quaternion().setFromRotationMatrix( target );
        }
        this.scene.execute( 'conetwist_setMotorTarget', { constraint: this.id, x: target.x, y: target.y, z: target.z, w: target.w } );
    };
    Physijs.ConeTwistConstraint.prototype.disableMotor = function() {
        this.scene.execute( 'conetwist_disableMotor', { constraint: this.id } );
    };

    Physijs.DOFConstraint = function( objecta, objectb, position ) {
        if ( position === undefined ) {
            position = objectb;
            objectb = undefined;
        }
        this.type = 'dof';
        this.appliedImpulse = 0;
        this.id = getObjectId();
        this.scene = objecta.parent;
        this.objecta = objecta._physijs.id;
        this.positiona = convertWorldPositionToObject( position, objecta ).clone();
        this.axisa = { x: objecta.rotation.x, y: objecta.rotation.y, z: objecta.rotation.z };

        if ( objectb ) {
            this.objectb = objectb._physijs.id;
            this.positionb = convertWorldPositionToObject( position, objectb ).clone();
            this.axisb = { x: objectb.rotation.x, y: objectb.rotation.y, z: objectb.rotation.z };
        }
    };
    Physijs.DOFConstraint.prototype.getDefinition = function() {
        return {
            type: this.type,
            id: this.id,
            objecta: this.objecta,
            objectb: this.objectb,
            positiona: this.positiona,
            positionb: this.positionb,
            axisa: this.axisa,
            axisb: this.axisb
        };
    };
    Physijs.DOFConstraint.prototype.setLinearLowerLimit = function( limit ) {
        this.scene.execute( 'dof_setLinearLowerLimit', { constraint: this.id, x: limit.x, y: limit.y, z: limit.z } );
    };
    Physijs.DOFConstraint.prototype.setLinearUpperLimit = function( limit ) {
        this.scene.execute( 'dof_setLinearUpperLimit', { constraint: this.id, x: limit.x, y: limit.y, z: limit.z } );
    };
    Physijs.DOFConstraint.prototype.setAngularLowerLimit = function( limit ) {
        this.scene.execute( 'dof_setAngularLowerLimit', { constraint: this.id, x: limit.x, y: limit.y, z: limit.z } );
    };
    Physijs.DOFConstraint.prototype.setAngularUpperLimit = function( limit ) {
        this.scene.execute( 'dof_setAngularUpperLimit', { constraint: this.id, x: limit.x, y: limit.y, z: limit.z } );
    };
    Physijs.DOFConstraint.prototype.enableAngularMotor = function( which ) {
        this.scene.execute( 'dof_enableAngularMotor', { constraint: this.id, which: which } );
    };
    Physijs.DOFConstraint.prototype.configureAngularMotor = function( which, low_angle, high_angle, velocity, max_force ) {
        this.scene.execute( 'dof_configureAngularMotor', { constraint: this.id, which: which, low_angle: low_angle, high_angle: high_angle, velocity: velocity, max_force: max_force } );
    };
    Physijs.DOFConstraint.prototype.disableAngularMotor = function( which ) {
        this.scene.execute( 'dof_disableAngularMotor', { constraint: this.id, which: which } );
    };

    // Physijs.Scene
    Physijs.Scene = function( params ) {
        var self = this;

        Eventable.call( this );
        THREE.Scene.call( this );

        this._worker = new Worker( Physijs.scripts.worker || 'physics_wkr.js' );
        this._worker.transferableMessage = this._worker.webkitPostMessage || this._worker.postMessage;
        this._materials_ref_counts = {};
        this._objects = {};
        this._vehicles = {};
        this._constraints = {};

        var ab = new ArrayBuffer( 1 );
        this._worker.transferableMessage( ab, [ab] );
        SUPPORT_TRANSFERABLE = ( ab.byteLength === 0 );

        this._worker.onmessage = function ( event ) {
            var _temp,
                data = event.data;

            if ( data instanceof ArrayBuffer && data.byteLength !== 1 ) { // byteLength === 1 is the worker making a SUPPORT_TRANSFERABLE test
                data = new Float32Array( data );
            }

            if ( data instanceof Float32Array ) {

                // transferable object
                switch ( data[0] ) {
                    case MESSAGE_TYPES.WORLDREPORT:
                        self._updateScene( data );
                        break;

                    case MESSAGE_TYPES.COLLISIONREPORT:
                        self._updateCollisions( data );
                        break;

                    case MESSAGE_TYPES.VEHICLEREPORT:
                        self._updateVehicles( data );
                        break;

                    case MESSAGE_TYPES.CONSTRAINTREPORT:
                        self._updateConstraints( data );
                        break;
                }

            } else {

                if ( data.cmd ) {

                    // non-transferable object
                    switch ( data.cmd ) {
                        case 'objectReady':
                            _temp = data.params;
                            if ( self._objects[ _temp ] ) {
                                self._objects[ _temp ].dispatchEvent( 'ready' );
                            }
                            break;

                        case 'worldReady':
                            self.dispatchEvent( 'ready' );
                            break;

                        case 'vehicle':
                            window.test = data;
                            break;

                        default:
                            // Do nothing, just show the message
                            console.debug('Received: ' + data.cmd);
                            console.dir(data.params);
                            break;
                    }

                } else {

                    switch ( data[0] ) {
                        case MESSAGE_TYPES.WORLDREPORT:
                            self._updateScene( data );
                            break;

                        case MESSAGE_TYPES.COLLISIONREPORT:
                            self._updateCollisions( data );
                            break;

                        case MESSAGE_TYPES.VEHICLEREPORT:
                            self._updateVehicles( data );
                            break;

                        case MESSAGE_TYPES.CONSTRAINTREPORT:
                            self._updateConstraints( data );
                            break;
                    }

                }

            }
        };


        params = params || {};
        params.ammo = Physijs.scripts.ammo || 'ammo.js';
        params.fixedTimeStep = params.fixedTimeStep || 1 / 60;
        params.rateLimit = params.rateLimit || true;
        this.execute( 'init', params );
    };
    Physijs.Scene.prototype = new THREE.Scene;
    Physijs.Scene.prototype.constructor = Physijs.Scene;
    Eventable.make( Physijs.Scene );

    Physijs.Scene.prototype._updateScene = function( data ) {
        var num_objects = data[1],
            object,
            i, offset;

        for ( i = 0; i < num_objects; i++ ) {
            offset = 2 + i * REPORT_ITEMSIZE;
            object = this._objects[ data[ offset ] ];

            if ( object === undefined ) {
                continue;
            }

            if ( object.__dirtyPosition === false ) {
                object.position.set(
                    data[ offset + 1 ],
                    data[ offset + 2 ],
                    data[ offset + 3 ]
                );
            }

            if ( object.__dirtyRotation === false ) {
                object.quaternion.set(
                    data[ offset + 4 ],
                    data[ offset + 5 ],
                    data[ offset + 6 ],
                    data[ offset + 7 ]
                );
            }

            object._physijs.linearVelocity.set(
                data[ offset + 8 ],
                data[ offset + 9 ],
                data[ offset + 10 ]
            );

            object._physijs.angularVelocity.set(
                data[ offset + 11 ],
                data[ offset + 12 ],
                data[ offset + 13 ]
            );

        }

        if ( SUPPORT_TRANSFERABLE ) {
            // Give the typed array back to the worker
            this._worker.transferableMessage( data.buffer, [data.buffer] );
        }

        _is_simulating = false;
        this.dispatchEvent( 'update' );
    };

    Physijs.Scene.prototype._updateVehicles = function( data ) {
        var vehicle, wheel,
            i, offset;

        for ( i = 0; i < ( data.length - 1 ) / VEHICLEREPORT_ITEMSIZE; i++ ) {
            offset = 1 + i * VEHICLEREPORT_ITEMSIZE;
            vehicle = this._vehicles[ data[ offset ] ];

            if ( vehicle === undefined ) {
                continue;
            }

            wheel = vehicle.wheels[ data[ offset + 1 ] ];

            wheel.position.set(
                data[ offset + 2 ],
                data[ offset + 3 ],
                data[ offset + 4 ]
            );

            wheel.quaternion.set(
                data[ offset + 5 ],
                data[ offset + 6 ],
                data[ offset + 7 ],
                data[ offset + 8 ]
            );
        }

        if ( SUPPORT_TRANSFERABLE ) {
            // Give the typed array back to the worker
            this._worker.transferableMessage( data.buffer, [data.buffer] );
        }
    };

    Physijs.Scene.prototype._updateConstraints = function( data ) {
        var constraint, object,
            i, offset;

        for ( i = 0; i < ( data.length - 1 ) / CONSTRAINTREPORT_ITEMSIZE; i++ ) {
            offset = 1 + i * CONSTRAINTREPORT_ITEMSIZE;
            constraint = this._constraints[ data[ offset ] ];
            object = this._objects[ data[ offset + 1 ] ];

            if ( constraint === undefined || object === undefined ) {
                continue;
            }

            _temp_vector3_1.set(
                data[ offset + 2 ],
                data[ offset + 3 ],
                data[ offset + 4 ]
            );
            _temp_matrix4_1.extractRotation( object.matrix );
            _temp_vector3_1.applyMatrix4( _temp_matrix4_1 );

            constraint.positiona.addVectors( object.position, _temp_vector3_1 );
            constraint.appliedImpulse = data[ offset + 5 ] ;
        }

        if ( SUPPORT_TRANSFERABLE ) {
            // Give the typed array back to the worker
            this._worker.transferableMessage( data.buffer, [data.buffer] );
        }
    };

    Physijs.Scene.prototype._updateCollisions = function( data ) {
        /**
         * #TODO
         * This is probably the worst way ever to handle collisions. The inherent evilness is a residual
         * effect from the previous version's evilness which mutated when switching to transferable objects.
         *
         * If you feel inclined to make this better, please do so.
         */

        var i, j, offset, object, object2,
            collisions = {}, collided_with = [], normal_offsets = {};

        // Build collision manifest
        for ( i = 0; i < data[1]; i++ ) {
            offset = 2 + i * COLLISIONREPORT_ITEMSIZE;
            object = data[ offset ];
            object2 = data[ offset + 1 ];

            normal_offsets[ object + '-' + object2 ] = offset + 2;
            normal_offsets[ object2 + '-' + object ] = -1 * ( offset + 2 );

            if ( !collisions[ object ] ) collisions[ object ] = [];
            collisions[ object ].push( object2 );
        }

        // Deal with collisions
        for ( object in this._objects ) {
            if ( !this._objects.hasOwnProperty( object ) ) return;
            object = this._objects[ object ];

            if ( collisions[ object._physijs.id ] ) {

                // this object is touching others
                collided_with.length = 0;

                for ( j = 0; j < collisions[ object._physijs.id ].length; j++ ) {
                    object2 = this._objects[ collisions[ object._physijs.id ][j] ];

                    if ( object2 ) {
                        if ( object._physijs.touches.indexOf( object2._physijs.id ) === -1 ) {
                            object._physijs.touches.push( object2._physijs.id );

                            _temp_vector3_1.subVectors( object.getLinearVelocity(), object2.getLinearVelocity() );
                            _temp1 = _temp_vector3_1.clone();

                            _temp_vector3_1.subVectors( object.getAngularVelocity(), object2.getAngularVelocity() );
                            _temp2 = _temp_vector3_1.clone();

                            var normal_offset = normal_offsets[ object._physijs.id + '-' + object2._physijs.id ];
                            if ( normal_offset > 0 ) {
                                _temp_vector3_1.set(
                                    -data[ normal_offset ],
                                    -data[ normal_offset + 1 ],
                                    -data[ normal_offset + 2 ]
                                );
                            } else {
                                normal_offset *= -1;
                                _temp_vector3_1.set(
                                    data[ normal_offset ],
                                    data[ normal_offset + 1 ],
                                    data[ normal_offset + 2 ]
                                );
                            }

                            object.dispatchEvent( 'collision', object2, _temp1, _temp2, _temp_vector3_1 );
                            object2.dispatchEvent( 'collision', object, _temp1, _temp2, _temp_vector3_1.negate() );
                        }

                        collided_with.push( object2._physijs.id );
                    }
                }
                for ( j = 0; j < object._physijs.touches.length; j++ ) {
                    if ( collided_with.indexOf( object._physijs.touches[j] ) === -1 ) {
                        object._physijs.touches.splice( j--, 1 );
                    }
                }

            } else {

                // not touching other objects
                object._physijs.touches.length = 0;

            }

        }

        // if A is in B's collision list, then B should be in A's collision list
        for (var id in collisions) {
            if ( collisions.hasOwnProperty( id ) && collisions[id] ) {
                for ( j = 0; j < collisions[id].length; j++) {
                    if (collisions[id][j]) {
                        collisions[ collisions[id][j] ] = collisions[ collisions[id][j] ] || [];
                        collisions[ collisions[id][j] ].push(id);
                    }
                }
            }
        }

        this.collisions = collisions;

        if ( SUPPORT_TRANSFERABLE ) {
            // Give the typed array back to the worker
            this._worker.transferableMessage( data.buffer, [data.buffer] );
        }
    };

    Physijs.Scene.prototype.addConstraint = function ( constraint, show_marker ) {
        this._constraints[ constraint.id ] = constraint;
        this.execute( 'addConstraint', constraint.getDefinition() );

        if ( show_marker ) {
            var marker;

            switch ( constraint.type ) {
                case 'point':
                    marker = new THREE.Mesh(
                        new THREE.SphereGeometry( 1.5 ),
                        new THREE.MeshNormalMaterial
                    );
                    marker.position.copy( constraint.positiona );
                    this._objects[ constraint.objecta ].add( marker );
                    break;

                case 'hinge':
                    marker = new THREE.Mesh(
                        new THREE.SphereGeometry( 1.5 ),
                        new THREE.MeshNormalMaterial
                    );
                    marker.position.copy( constraint.positiona );
                    this._objects[ constraint.objecta ].add( marker );
                    break;

                case 'slider':
                    marker = new THREE.Mesh(
                        new THREE.CubeGeometry( 10, 1, 1 ),
                        new THREE.MeshNormalMaterial
                    );
                    marker.position.copy( constraint.positiona );
                    // This rotation isn't right if all three axis are non-0 values
                    // TODO: change marker's rotation order to ZYX
                    marker.rotation.set(
                        constraint.axis.y, // yes, y and
                        constraint.axis.x, // x axis are swapped
                        constraint.axis.z
                    );
                    this._objects[ constraint.objecta ].add( marker );
                    break;

                case 'conetwist':
                    marker = new THREE.Mesh(
                        new THREE.SphereGeometry( 1.5 ),
                        new THREE.MeshNormalMaterial
                    );
                    marker.position.copy( constraint.positiona );
                    this._objects[ constraint.objecta ].add( marker );
                    break;

                case 'dof':
                    marker = new THREE.Mesh(
                        new THREE.SphereGeometry( 1.5 ),
                        new THREE.MeshNormalMaterial
                    );
                    marker.position.copy( constraint.positiona );
                    this._objects[ constraint.objecta ].add( marker );
                    break;
            }
        }

        return constraint;
    };

    Physijs.Scene.prototype.removeConstraint = function( constraint ) {
        if ( this._constraints[constraint.id ] !== undefined ) {
            this.execute( 'removeConstraint', { id: constraint.id } );
            delete this._constraints[ constraint.id ];
        }
    };

    Physijs.Scene.prototype.execute = function( cmd, params ) {
        this._worker.postMessage({ cmd: cmd, params: params });
    };

    addObjectChildren = function( parent, object ) {
        var i;

        for ( i = 0; i < object.children.length; i++ ) {
            if ( object.children[i]._physijs ) {
                object.children[i].updateMatrix();
                object.children[i].updateMatrixWorld();

                _temp_vector3_1.setFromMatrixPosition( object.children[i].matrixWorld );
                _quaternion_1.setFromRotationMatrix( object.children[i].matrixWorld );

                object.children[i]._physijs.position_offset = {
                    x: _temp_vector3_1.x,
                    y: _temp_vector3_1.y,
                    z: _temp_vector3_1.z
                };

                object.children[i]._physijs.rotation = {
                    x: _quaternion_1.x,
                    y: _quaternion_1.y,
                    z: _quaternion_1.z,
                    w: _quaternion_1.w
                };

                parent._physijs.children.push( object.children[i]._physijs );
            }

            addObjectChildren( parent, object.children[i] );
        }
    };

    Physijs.Scene.prototype.add = function( object ) {
        THREE.Mesh.prototype.add.call( this, object );

        if ( object._physijs ) {

            object.world = this;

            if ( object instanceof Physijs.Vehicle ) {

                this.add( object.mesh );
                this._vehicles[ object._physijs.id ] = object;
                this.execute( 'addVehicle', object._physijs );

            } else {

                object.__dirtyPosition = false;
                object.__dirtyRotation = false;
                this._objects[object._physijs.id] = object;

                if ( object.children.length ) {
                    object._physijs.children = [];
                    addObjectChildren( object, object );
                }

                if ( object.material._physijs ) {
                    if ( !this._materials_ref_counts.hasOwnProperty( object.material._physijs.id ) ) {
                        this.execute( 'registerMaterial', object.material._physijs );
                        object._physijs.materialId = object.material._physijs.id;
                        this._materials_ref_counts[object.material._physijs.id] = 1;
                    } else {
                        this._materials_ref_counts[object.material._physijs.id]++;
                    }
                }

                // Object starting position + rotation
                object._physijs.position = { x: object.position.x, y: object.position.y, z: object.position.z };
                object._physijs.rotation = { x: object.quaternion.x, y: object.quaternion.y, z: object.quaternion.z, w: object.quaternion.w };

                // Check for scaling
                var mass_scaling = new THREE.Vector3( 1, 1, 1 );
                if ( object._physijs.width ) {
                    object._physijs.width *= object.scale.x;
                }
                if ( object._physijs.height ) {
                    object._physijs.height *= object.scale.y;
                }
                if ( object._physijs.depth ) {
                    object._physijs.depth *= object.scale.z;
                }

                this.execute( 'addObject', object._physijs );

            }
        }
    };

    Physijs.Scene.prototype.remove = function( object ) {
        if ( object instanceof Physijs.Vehicle ) {
            this.execute( 'removeVehicle', { id: object._physijs.id } );
            while( object.wheels.length ) {
                this.remove( object.wheels.pop() );
            }
            this.remove( object.mesh );
            delete this._vehicles[ object._physijs.id ];
        } else {
            THREE.Mesh.prototype.remove.call( this, object );
            if ( object._physijs ) {
                delete this._objects[object._physijs.id];
                this.execute( 'removeObject', { id: object._physijs.id } );
            }
        }

        if ( object.material._physijs && this._materials_ref_counts.hasOwnProperty( object.material._physijs.id ) ) {
            this._materials_ref_counts[object.material._physijs.id]--;
            if(this._materials_ref_counts[object.material._physijs.id] == 0) {
                this.execute( 'unRegisterMaterial', object.material._physijs );
                delete this._materials_ref_counts[object.material._physijs.id];
            }
        }
    };

    Physijs.Scene.prototype.setFixedTimeStep = function( fixedTimeStep ) {
        if ( fixedTimeStep ) {
            this.execute( 'setFixedTimeStep', fixedTimeStep );
        }
    };

    Physijs.Scene.prototype.setGravity = function( gravity ) {
        if ( gravity ) {
            this.execute( 'setGravity', gravity );
        }
    };

    Physijs.Scene.prototype.simulate = function( timeStep, maxSubSteps ) {
        var object_id, object, update;

        if ( _is_simulating ) {
            return false;
        }

        _is_simulating = true;

        for ( object_id in this._objects ) {
            if ( !this._objects.hasOwnProperty( object_id ) ) continue;

            object = this._objects[object_id];

            if ( object.__dirtyPosition || object.__dirtyRotation ) {
                update = { id: object._physijs.id };

                if ( object.__dirtyPosition ) {
                    update.pos = { x: object.position.x, y: object.position.y, z: object.position.z };
                    object.__dirtyPosition = false;
                }

                if ( object.__dirtyRotation ) {
                    update.quat = { x: object.quaternion.x, y: object.quaternion.y, z: object.quaternion.z, w: object.quaternion.w };
                    object.__dirtyRotation = false;
                }

                this.execute( 'updateTransform', update );
            }
        }

        this.execute( 'simulate', { timeStep: timeStep, maxSubSteps: maxSubSteps } );

        return true;
    };


    // Phsijs.Mesh
    Physijs.Mesh = function ( geometry, material, mass ) {
        var index;

        if ( !geometry ) {
            return;
        }

        Eventable.call( this );
        THREE.Mesh.call( this, geometry, material );

        if ( !geometry.boundingBox ) {
            geometry.computeBoundingBox();
        }

        this._physijs = {
            type: null,
            id: getObjectId(),
            mass: mass || 0,
            touches: [],
            linearVelocity: new THREE.Vector3,
            angularVelocity: new THREE.Vector3
        };
    };
    Physijs.Mesh.prototype = new THREE.Mesh;
    Physijs.Mesh.prototype.constructor = Physijs.Mesh;
    Eventable.make( Physijs.Mesh );

    // Physijs.Mesh.mass
    Physijs.Mesh.prototype.__defineGetter__('mass', function() {
        return this._physijs.mass;
    });
    Physijs.Mesh.prototype.__defineSetter__('mass', function( mass ) {
        this._physijs.mass = mass;
        if ( this.world ) {
            this.world.execute( 'updateMass', { id: this._physijs.id, mass: mass } );
        }
    });

    // Physijs.Mesh.applyCentralImpulse
    Physijs.Mesh.prototype.applyCentralImpulse = function ( force ) {
        if ( this.world ) {
            this.world.execute( 'applyCentralImpulse', { id: this._physijs.id, x: force.x, y: force.y, z: force.z } );
        }
    };

    // Physijs.Mesh.applyImpulse
    Physijs.Mesh.prototype.applyImpulse = function ( force, offset ) {
        if ( this.world ) {
            this.world.execute( 'applyImpulse', { id: this._physijs.id, impulse_x: force.x, impulse_y: force.y, impulse_z: force.z, x: offset.x, y: offset.y, z: offset.z } );
        }
    };

    // Physijs.Mesh.applyCentralForce
    Physijs.Mesh.prototype.applyCentralForce = function ( force ) {
        if ( this.world ) {
            this.world.execute( 'applyCentralForce', { id: this._physijs.id, x: force.x, y: force.y, z: force.z } );
        }
    };

    // Physijs.Mesh.applyForce
    Physijs.Mesh.prototype.applyForce = function ( force, offset ) {
        if ( this.world ) {
            this.world.execute( 'applyForce', { id: this._physijs.id, force_x: force.x, force_y : force.y, force_z : force.z, x: offset.x, y: offset.y, z: offset.z } );
        }
    };

    // Physijs.Mesh.getAngularVelocity
    Physijs.Mesh.prototype.getAngularVelocity = function () {
        return this._physijs.angularVelocity;
    };

    // Physijs.Mesh.setAngularVelocity
    Physijs.Mesh.prototype.setAngularVelocity = function ( velocity ) {
        if ( this.world ) {
            this.world.execute( 'setAngularVelocity', { id: this._physijs.id, x: velocity.x, y: velocity.y, z: velocity.z } );
        }
    };

    // Physijs.Mesh.getLinearVelocity
    Physijs.Mesh.prototype.getLinearVelocity = function () {
        return this._physijs.linearVelocity;
    };

    // Physijs.Mesh.setLinearVelocity
    Physijs.Mesh.prototype.setLinearVelocity = function ( velocity ) {
        if ( this.world ) {
            this.world.execute( 'setLinearVelocity', { id: this._physijs.id, x: velocity.x, y: velocity.y, z: velocity.z } );
        }
    };

    // Physijs.Mesh.setAngularFactor
    Physijs.Mesh.prototype.setAngularFactor = function ( factor ) {
        if ( this.world ) {
            this.world.execute( 'setAngularFactor', { id: this._physijs.id, x: factor.x, y: factor.y, z: factor.z } );
        }
    };

    // Physijs.Mesh.setLinearFactor
    Physijs.Mesh.prototype.setLinearFactor = function ( factor ) {
        if ( this.world ) {
            this.world.execute( 'setLinearFactor', { id: this._physijs.id, x: factor.x, y: factor.y, z: factor.z } );
        }
    };

    // Physijs.Mesh.setDamping
    Physijs.Mesh.prototype.setDamping = function ( linear, angular ) {
        if ( this.world ) {
            this.world.execute( 'setDamping', { id: this._physijs.id, linear: linear, angular: angular } );
        }
    };

    // Physijs.Mesh.setCcdMotionThreshold
    Physijs.Mesh.prototype.setCcdMotionThreshold = function ( threshold ) {
        if ( this.world ) {
            this.world.execute( 'setCcdMotionThreshold', { id: this._physijs.id, threshold: threshold } );
        }
    };

    // Physijs.Mesh.setCcdSweptSphereRadius
    Physijs.Mesh.prototype.setCcdSweptSphereRadius = function ( radius ) {
        if ( this.world ) {
            this.world.execute( 'setCcdSweptSphereRadius', { id: this._physijs.id, radius: radius } );
        }
    };


    // Physijs.PlaneMesh
    Physijs.PlaneMesh = function ( geometry, material, mass ) {
        var width, height;

        Physijs.Mesh.call( this, geometry, material, mass );

        if ( !geometry.boundingBox ) {
            geometry.computeBoundingBox();
        }

        width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;

        this._physijs.type = 'plane';
        this._physijs.normal = geometry.faces[0].normal.clone();
        this._physijs.mass = (typeof mass === 'undefined') ? width * height : mass;
    };
    Physijs.PlaneMesh.prototype = new Physijs.Mesh;
    Physijs.PlaneMesh.prototype.constructor = Physijs.PlaneMesh;

    // Physijs.HeightfieldMesh
    Physijs.HeightfieldMesh = function ( geometry, material, mass, xdiv, ydiv) {
        Physijs.Mesh.call( this, geometry, material, mass );

        this._physijs.type   = 'heightfield';
        this._physijs.xsize  = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        this._physijs.ysize  = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
        this._physijs.xpts = (typeof xdiv === 'undefined') ? Math.sqrt(geometry.vertices.length) : xdiv + 1;
        this._physijs.ypts = (typeof ydiv === 'undefined') ? Math.sqrt(geometry.vertices.length) : ydiv + 1;
        // note - this assumes our plane geometry is square, unless we pass in specific xdiv and ydiv
        this._physijs.absMaxHeight = Math.max(geometry.boundingBox.max.z,Math.abs(geometry.boundingBox.min.z));

        var points = [];

        var a, b;
        for ( var i = 0; i < geometry.vertices.length; i++ ) {

            a = i % this._physijs.xpts;
            b = Math.round( ( i / this._physijs.xpts ) - ( (i % this._physijs.xpts) / this._physijs.xpts ) );
            points[i] = geometry.vertices[ a + ( ( this._physijs.ypts - b - 1 ) * this._physijs.ypts ) ].z;

            //points[i] = geometry.vertices[i];
        }

        this._physijs.points = points;
    };
    Physijs.HeightfieldMesh.prototype = new Physijs.Mesh;
    Physijs.HeightfieldMesh.prototype.constructor = Physijs.HeightfieldMesh;

    // Physijs.BoxMesh
    Physijs.BoxMesh = function( geometry, material, mass ) {
        var width, height, depth;

        Physijs.Mesh.call( this, geometry, material, mass );

        if ( !geometry.boundingBox ) {
            geometry.computeBoundingBox();
        }

        width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
        depth = geometry.boundingBox.max.z - geometry.boundingBox.min.z;

        this._physijs.type = 'box';
        this._physijs.width = width;
        this._physijs.height = height;
        this._physijs.depth = depth;
        this._physijs.mass = (typeof mass === 'undefined') ? width * height * depth : mass;
    };
    Physijs.BoxMesh.prototype = new Physijs.Mesh;
    Physijs.BoxMesh.prototype.constructor = Physijs.BoxMesh;


    // Physijs.SphereMesh
    Physijs.SphereMesh = function( geometry, material, mass ) {
        Physijs.Mesh.call( this, geometry, material, mass );

        if ( !geometry.boundingSphere ) {
            geometry.computeBoundingSphere();
        }

        this._physijs.type = 'sphere';
        this._physijs.radius = geometry.boundingSphere.radius;
        this._physijs.mass = (typeof mass === 'undefined') ? (4/3) * Math.PI * Math.pow(this._physijs.radius, 3) : mass;
    };
    Physijs.SphereMesh.prototype = new Physijs.Mesh;
    Physijs.SphereMesh.prototype.constructor = Physijs.SphereMesh;


    // Physijs.CylinderMesh
    Physijs.CylinderMesh = function( geometry, material, mass ) {
        var width, height, depth;

        Physijs.Mesh.call( this, geometry, material, mass );

        if ( !geometry.boundingBox ) {
            geometry.computeBoundingBox();
        }

        width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
        depth = geometry.boundingBox.max.z - geometry.boundingBox.min.z;

        this._physijs.type = 'cylinder';
        this._physijs.width = width;
        this._physijs.height = height;
        this._physijs.depth = depth;
        this._physijs.mass = (typeof mass === 'undefined') ? width * height * depth : mass;
    };
    Physijs.CylinderMesh.prototype = new Physijs.Mesh;
    Physijs.CylinderMesh.prototype.constructor = Physijs.CylinderMesh;


    // Physijs.CapsuleMesh
    Physijs.CapsuleMesh = function( geometry, material, mass ) {
        var width, height, depth;

        Physijs.Mesh.call( this, geometry, material, mass );

        if ( !geometry.boundingBox ) {
            geometry.computeBoundingBox();
        }

        width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
        depth = geometry.boundingBox.max.z - geometry.boundingBox.min.z;

        this._physijs.type = 'capsule';
        this._physijs.radius = Math.max(width / 2, depth / 2);
        this._physijs.height = height;
        this._physijs.mass = (typeof mass === 'undefined') ? width * height * depth : mass;
    };
    Physijs.CapsuleMesh.prototype = new Physijs.Mesh;
    Physijs.CapsuleMesh.prototype.constructor = Physijs.CapsuleMesh;


    // Physijs.ConeMesh
    Physijs.ConeMesh = function( geometry, material, mass ) {
        var width, height, depth;

        Physijs.Mesh.call( this, geometry, material, mass );

        if ( !geometry.boundingBox ) {
            geometry.computeBoundingBox();
        }

        width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;

        this._physijs.type = 'cone';
        this._physijs.radius = width / 2;
        this._physijs.height = height;
        this._physijs.mass = (typeof mass === 'undefined') ? width * height : mass;
    };
    Physijs.ConeMesh.prototype = new Physijs.Mesh;
    Physijs.ConeMesh.prototype.constructor = Physijs.ConeMesh;


    // Physijs.ConcaveMesh
    Physijs.ConcaveMesh = function( geometry, material, mass ) {
        var i,
            width, height, depth,
            vertices, face, triangles = [];

        Physijs.Mesh.call( this, geometry, material, mass );

        if ( !geometry.boundingBox ) {
            geometry.computeBoundingBox();
        }

        vertices = geometry.vertices;

        for ( i = 0; i < geometry.faces.length; i++ ) {
            face = geometry.faces[i];
            if ( face instanceof THREE.Face3) {

                triangles.push([
                    { x: vertices[face.a].x, y: vertices[face.a].y, z: vertices[face.a].z },
                    { x: vertices[face.b].x, y: vertices[face.b].y, z: vertices[face.b].z },
                    { x: vertices[face.c].x, y: vertices[face.c].y, z: vertices[face.c].z }
                ]);

            } else if ( face instanceof THREE.Face4 ) {

                triangles.push([
                    { x: vertices[face.a].x, y: vertices[face.a].y, z: vertices[face.a].z },
                    { x: vertices[face.b].x, y: vertices[face.b].y, z: vertices[face.b].z },
                    { x: vertices[face.d].x, y: vertices[face.d].y, z: vertices[face.d].z }
                ]);
                triangles.push([
                    { x: vertices[face.b].x, y: vertices[face.b].y, z: vertices[face.b].z },
                    { x: vertices[face.c].x, y: vertices[face.c].y, z: vertices[face.c].z },
                    { x: vertices[face.d].x, y: vertices[face.d].y, z: vertices[face.d].z }
                ]);

            }
        }

        width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
        depth = geometry.boundingBox.max.z - geometry.boundingBox.min.z;

        this._physijs.type = 'concave';
        this._physijs.triangles = triangles;
        this._physijs.mass = (typeof mass === 'undefined') ? width * height * depth : mass;
    };
    Physijs.ConcaveMesh.prototype = new Physijs.Mesh;
    Physijs.ConcaveMesh.prototype.constructor = Physijs.ConcaveMesh;


    // Physijs.ConvexMesh
    Physijs.ConvexMesh = function( geometry, material, mass ) {
        var i,
            width, height, depth,
            points = [];

        Physijs.Mesh.call( this, geometry, material, mass );

        if ( !geometry.boundingBox ) {
            geometry.computeBoundingBox();
        }

        for ( i = 0; i < geometry.vertices.length; i++ ) {
            points.push({
                x: geometry.vertices[i].x,
                y: geometry.vertices[i].y,
                z: geometry.vertices[i].z
            });
        }


        width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
        depth = geometry.boundingBox.max.z - geometry.boundingBox.min.z;

        this._physijs.type = 'convex';
        this._physijs.points = points;
        this._physijs.mass = (typeof mass === 'undefined') ? width * height * depth : mass;
    };
    Physijs.ConvexMesh.prototype = new Physijs.Mesh;
    Physijs.ConvexMesh.prototype.constructor = Physijs.ConvexMesh;


    // Physijs.Vehicle
    Physijs.Vehicle = function( mesh, tuning ) {
        tuning = tuning || new Physijs.VehicleTuning;
        this.mesh = mesh;
        this.wheels = [];
        this._physijs = {
            id: getObjectId(),
            rigidBody: mesh._physijs.id,
            suspension_stiffness: tuning.suspension_stiffness,
            suspension_compression: tuning.suspension_compression,
            suspension_damping: tuning.suspension_damping,
            max_suspension_travel: tuning.max_suspension_travel,
            friction_slip: tuning.friction_slip,
            max_suspension_force: tuning.max_suspension_force
        };
    };
    Physijs.Vehicle.prototype.addWheel = function( wheel_geometry, wheel_material, connection_point, wheel_direction, wheel_axle, suspension_rest_length, wheel_radius, is_front_wheel, tuning ) {
        var wheel = new THREE.Mesh( wheel_geometry, wheel_material );
        wheel.castShadow = wheel.receiveShadow = true;
        wheel.position.copy( wheel_direction ).multiplyScalar( suspension_rest_length / 100 ).add( connection_point );
        this.world.add( wheel );
        this.wheels.push( wheel );

        this.world.execute( 'addWheel', {
            id: this._physijs.id,
            connection_point: { x: connection_point.x, y: connection_point.y, z: connection_point.z },
            wheel_direction: { x: wheel_direction.x, y: wheel_direction.y, z: wheel_direction.z },
            wheel_axle: { x: wheel_axle.x, y: wheel_axle.y, z: wheel_axle.z },
            suspension_rest_length: suspension_rest_length,
            wheel_radius: wheel_radius,
            is_front_wheel: is_front_wheel,
            tuning: tuning
        });
    };
    Physijs.Vehicle.prototype.setSteering = function( amount, wheel ) {
        if ( wheel !== undefined && this.wheels[ wheel ] !== undefined ) {
            this.world.execute( 'setSteering', { id: this._physijs.id, wheel: wheel, steering: amount } );
        } else if ( this.wheels.length > 0 ) {
            for ( var i = 0; i < this.wheels.length; i++ ) {
                this.world.execute( 'setSteering', { id: this._physijs.id, wheel: i, steering: amount } );
            }
        }
    };
    Physijs.Vehicle.prototype.setBrake = function( amount, wheel ) {
        if ( wheel !== undefined && this.wheels[ wheel ] !== undefined ) {
            this.world.execute( 'setBrake', { id: this._physijs.id, wheel: wheel, brake: amount } );
        } else if ( this.wheels.length > 0 ) {
            for ( var i = 0; i < this.wheels.length; i++ ) {
                this.world.execute( 'setBrake', { id: this._physijs.id, wheel: i, brake: amount } );
            }
        }
    };
    Physijs.Vehicle.prototype.applyEngineForce = function( amount, wheel ) {
        if ( wheel !== undefined && this.wheels[ wheel ] !== undefined ) {
            this.world.execute( 'applyEngineForce', { id: this._physijs.id, wheel: wheel, force: amount } );
        } else if ( this.wheels.length > 0 ) {
            for ( var i = 0; i < this.wheels.length; i++ ) {
                this.world.execute( 'applyEngineForce', { id: this._physijs.id, wheel: i, force: amount } );
            }
        }
    };

    // Physijs.VehicleTuning
    Physijs.VehicleTuning = function( suspension_stiffness, suspension_compression, suspension_damping, max_suspension_travel, friction_slip, max_suspension_force ) {
        this.suspension_stiffness = suspension_stiffness !== undefined ? suspension_stiffness : 5.88;
        this.suspension_compression = suspension_compression !== undefined ? suspension_compression : 0.83;
        this.suspension_damping = suspension_damping !== undefined ? suspension_damping : 0.88;
        this.max_suspension_travel = max_suspension_travel !== undefined ? max_suspension_travel : 500;
        this.friction_slip = friction_slip !== undefined ? friction_slip : 10.5;
        this.max_suspension_force = max_suspension_force !== undefined ? max_suspension_force : 6000;
    };

    return Physijs;
})();
;var Interface;

jQuery(function($){

var CAPS = {
    camera : null,
    solo : false,
    quality:'high'
};


var container, scene, renderer, light, ball, plane, bottle, bottlecaps, initEventHandling, initScene;
var WIDTH, HEIGHT, planeWIDTH, planeHEIGHT;
var elements = [], playedCaps = null,_i,lookatobj, mouse,
    mouse3D = new THREE.Vector3;
var DCMP  = new THREE.Vector3(0,0,0);
var clock = new THREE.Clock(), dir, distance;

var holdingDown = false;

var $powerBar, $helpPower, $fbUrlLink;

var $capsTypo,$startTypo, $winTypo, $loseTypo, $perfectTypo;


Physijs.scripts.worker = '/js/physics/physics_wkr.js';
Physijs.scripts.ammo = 'ammo.js';
WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var playerDistance = 100;
var globalDirection = 1;
var capModelscale = 1.6;
var texture;





var DPR = window.devicePixelRatio || 1;


initScene = function() {

    container = document.getElementById('viewport');

    scene = new Physijs.Scene();
    scene.setGravity(new THREE.Vector3( 0, -80, 0 ));

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha : true,
        precision:"lowp",
        devicePixelRatio: DPR
    });
    renderer.setPixelRatio( DPR );

    if(DPR > 1){
        renderer.setViewport( 0, 0, WIDTH/2, HEIGHT/2 );
        renderer.setSize(WIDTH/1.5, HEIGHT/1.5);
        $(renderer.domElement).css({width:WIDTH, height:HEIGHT});
    }else{
        renderer.setSize(WIDTH, HEIGHT);
        renderer.setViewport( 0, 0, WIDTH, HEIGHT);
    }

    renderer.shadowMapEnabled = false;
    renderer.shadowMapSoft = false;
    renderer.shadowMapType = THREE.PCFShadowMap;
    renderer.shadowMapAutoUpdate = false;
    renderer.gammaInput = true;
    renderer.gammaOutput = true;

    container.appendChild(renderer.domElement);
    create_camera();
    create_lights();
    create_table();


    Viensla.initialize();
    Player.initialize();

    lookatobj = Viensla.bottle;
    scene.simulate();
    initEventHandling();

    create_caps_group();

    $plpart.addClass(Game.Player.caps);
    $('#versus-bar .pl').addClass(Game.Player.caps);
    Player.capmat = caps_material[Game.Player.caps].clone();
    Player.stickermat = sticker_materials[Game.Player.caps].clone();
    Player.bottle.material.color = Player.capmat.materials[1].color;
    Player.changeSticker();
    Viensla.changeBottle(Game.Enemy.caps);


    Party.create();
    render();
    setPower();
    onWindowResize();

};

function render() {
    if(Party.isPlaying){
        if( (Viensla.bottlecaps.position.y <= Viensla.bottle.position.y
                || Viensla.bottlecaps.position.y > Viensla.bottle.position.y + 35
                || Viensla.bottlecaps.position.x > Viensla.bottle.position.x + 7
                || Viensla.bottlecaps.position.x < Viensla.bottle.position.x - 7
                || Viensla.bottlecaps.position.z > Viensla.bottle.position.z + 7
                || Viensla.bottlecaps.position.z < Viensla.bottle.position.z - 7)
                && !Viensla.bottlecaps.capsed){
            Viensla.bottlecaps.capsed = true;
            Viensla.bottlecaps.collided = false;
            Party.plcaps();
        }


        if((Player.bottlecaps.position.y <= Player.bottle.position.y
            || Player.bottlecaps.position.y > Player.bottle.position.y + 35
            || Player.bottlecaps.position.x > Player.bottle.position.x + 7
            || Player.bottlecaps.position.x < Player.bottle.position.x - 7
            || Player.bottlecaps.position.z > Player.bottle.position.z + 7
            || Player.bottlecaps.position.z < Player.bottle.position.z - 7)
             && !Player.bottlecaps.capsed){
            Player.bottlecaps.capsed = true;
            Player.bottlecaps.collided = false;

            if(CAPS.solo) Party.vlcaps();
        }
    }


    if(playedCaps){
        if(Player.isPlaying && !Viensla.isPlaying){
            playedCaps.position.copy(DCMP);
        }
    }

    if(Viensla.cursor && Viensla.liveVector){
        Viensla.cursor.__dirtyPosition = false;
        Viensla.cursor.position.copy(Viensla.liveVector);
    }

    scene.simulate(undefined, 2);

    camera.lookAt(lookat);

    var time = Date.now() * 0.0005;

    drunk_effect(time);

    if( Math.sin( time*2 ) > 0.5){
        pointlightbar.animeLight();
    }

    if(phone){
        var phonePos = toScreenPosition(phone, camera);
    }
    TweenLite.set($('#txto-rc'),{y:phonePos.y, x:phonePos.x});

    animateDust(time/10);

    renderer.render(scene, camera);

    requestAnimationFrame(render);


}

function animateDust(time){
    for ( var i = 0; i < dust.length; i ++ ) {
        var object = dust[ i ];
        if ( object instanceof THREE.PointCloud ) {
            object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );
        }
    }
}


function drunk_effect(time){
    camera.initialpos.x += Math.sin( time*2 ) * Player.drunked/70;
    camera.initialpos.y += Math.cos( time*2 ) * Player.drunked/70;
    camera.initialpos.z += Math.sin( time*2 ) * Player.drunked/70;
    camera.position.x += (mouse.x * 20 - camera.position.x) * (0.3*3) + camera.initialpos.x;
    camera.position.y += (mouse.y * 10 - camera.position.y) * (0.5*3) + camera.initialpos.y+80;
}




CAPS.launchGame = function(){
    loadBottleTools();

    window.addEventListener( 'resize', onWindowResize, false );

    $plpart.find('h3 span').text(Game.Player.name);
    $vlpart.find('h3 span').text(Game.Enemy.name);
    $('#reset-party-c h4').find('span').text(Game.Enemy.name);



    $('#quality').click(function(){
        $(this).toggleClass('low');
        if($(this).hasClass('low'))
            CAPS.quality = 'low';
        else
            CAPS.quality = 'high';
        onWindowResize();
    });

    for(var i =0; i < Party.capsPerTurn; i++){
        $('.capsstock').append('<span class="animated zoomIn"></span>');
    }

    $plpart.find('.capsstock span').click(function(){
        if(!Viensla.isPlaying){
            $(this).removeClass().addClass('animated zoomOut');
            Party.plplay();

            if(Player.totalLaunched < 4){
                Interface.capTuto.hide();
                if(Player.totalLaunched < 3){
                    Interface.launchTuto.show();
                }
            }
        }
    });
};


function onWindowResize( event ) {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    if(DPR > 1){
        renderer.setViewport( 0, 0, WIDTH/2, HEIGHT/2 );
        renderer.setSize(WIDTH/1.5, HEIGHT/1.5);
        $(renderer.domElement).css({width:WIDTH, height:HEIGHT});
    }else{
        renderer.setSize(WIDTH, HEIGHT);
        renderer.setViewport( 0, 0, WIDTH, HEIGHT);
    }

    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
    Interface.resize();
}



function toScreenPosition(obj, camera)
{
    var vector = new THREE.Vector3();

    var widthHalf = 0.5*WIDTH;
    var heightHalf = 0.5*HEIGHT;

    obj.updateMatrixWorld();
    vector.setFromMatrixPosition(obj.matrixWorld);
    vector.project(camera);

    vector.x = ( vector.x * widthHalf ) + widthHalf;
    vector.y = - ( vector.y * heightHalf ) + heightHalf;

    return {
        x: Math.round(vector.x),
        y: Math.round(vector.y)
    };

};
;var playerCamera = {}, camera;
var lookat;



var VIEW_ANGLE = 75,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 0.1,
    FAR = 10000;

function create_camera(){


    playerCamera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    playerCamera.initialpos = new THREE.Vector3( 0, 160, 165 );
    playerCamera.position.set(playerCamera.initialpos.x, playerCamera.initialpos.y, playerCamera.initialpos.z);
    playerCamera.lookAt(scene);
    scene.add(playerCamera);


    lookat = new THREE.Vector3(0,50,-100);

    camera = playerCamera;

    mouse = {x : 0, y : 0};

    document.addEventListener('mousemove', function(event){
        mouse.x	= (event.clientX / window.innerWidth ) - 0.5;
        mouse.y	= (event.clientY / window.innerHeight) - 0.5;

        camera.position.x += (mouse.x * 20 - camera.position.x) * (0.3*3) + camera.initialpos.x;
        camera.position.y += (mouse.y * 10 - camera.position.y) * (0.5*3) + camera.initialpos.y+80;
    }, false);
}
;


capCollision = function ( collided, linearVelocity, angularVelocity, other ){

    var capPlayed = this;
    capPlayed.collisions++;

    if(capPlayed.floating) return;

    var collision = collided.name;


    var velocity = Math.abs(linearVelocity.x) + Math.abs(linearVelocity.y) + Math.abs(linearVelocity.z);

    switch(collision){
        case 'level':
            if(capPlayed.name == 'player'){
                if(velocity > 60)
                    Snds.playSd('simpletap3');
            }
            break;
        case 'tapis':
            if(velocity > 60)
                Snds.playSd('simpletap1');
            break;
        case 'floor':
            if(velocity > 60)
                Snds.playSd('simpletap3');
            break;
        case 'vlCap':
            if(capPlayed.name == 'player'){
                collided.collided = true;
                collided.__dirty_postion = true;
                Snds.playSd('capcap');
            }
            break;
        case 'plCap':
            if(capPlayed.name == 'viensla'){
                collided.collided = true;
                collided.__dirty_postion = true;
                Snds.playSd('capcap');
            }
            break;
        case 'vlBottle':
            if(velocity > 60)
                Snds.playSd('clink');
            break;
        case 'plBottle':
            if(velocity > 60)
                Snds.playSd('clink');
            break;
        case '':
            break;
    }
};




function create_caps(who){
    var mass = 2;

    if(typeof who == 'undefined'){
        who = 'pl';
    }


    var cap_mat;
    if(who == 'pl'){
        cap_mat = Player.capmat.clone();
    }else{
        cap_mat = Viensla.capmat.clone();
    }

    cap_mat.side = 2;


    ball = new Physijs.CylinderMesh(geo_caps, cap_mat, mass, {friction : 1, restitution : 0.5});

    ball.stopGravity = function(){
        var cap = this;
        var intv;
        var i=0;
        setTimeout(function(){
            cap.material.materials[0].transparent = true;
            cap.material.materials[1].transparent = true;
            intv = setInterval(function(){
                cap.material.materials[0].opacity = i%2 == 0 ? 0 : 1;
                cap.material.materials[1].opacity = i%2 == 0 ? 0 : 1;
                i++;
                if(i == 10){
                    clearInterval(intv);
                    cap.material.materials[0].opacity = 1;
                    cap.material.materials[1].opacity = 1;
                    scene.remove(cap);
                }
            }, 200-i);
      }, 4000);
    };
    ball.scale.set(capModelscale,capModelscale,capModelscale);


    ball.collisions = 0;
    ball.addEventListener('collision', capCollision);

    var sub = new Physijs.CylinderMesh(
        new THREE.CylinderGeometry(1.5, 1.5, 0, 32, 32 ),
        new THREE.MeshLambertMaterial({
            color: ball.material.materials[1].color,
            transparent : true,
            opacity:1
        })
        ,0);
    sub.position.x = 0;
    sub.position.y = 0.3;
    sub.position.z = 0;

    ball.add(sub);

    ball.position.y = 50;
    ball.position.x = 0;
    ball.position.z = playerDistance * globalDirection;
    ball.castShadow = true;
    ball.receiveShadow = true;

    scene.add(ball);
    elements.push(ball);

    playedCaps = ball;

    playedCaps.floating = true;

    playedCaps.name = who == 'vl' ?  'viensla' : 'player';


    if(elements.length > 4){
        var last = elements[0];
        last.stopGravity();
        elements.splice(0, 1);
    }

}





var power = 0,
    speedbar = 2,
    powerDir = speedbar,
    strengh = 6,
    playerstrengh = 5;


function setPower(){
    var powerInterval;

    powerInterval = setInterval(function(){
        if(holdingDown){

            power += powerDir;

            if(power > 100){
                powerDir = -speedbar;
            }

            if(power < 0){
                powerDir = +speedbar;
            }

            TweenMax.set($powerBar.find('.bar'), {height:power+'%'});
        }
    }, 10 + Viensla.lives/10 );
}






initEventHandling = (function() {
    var  handleMouseDown, handleMouseMove, handleMouseUp,
        launchVector = new THREE.Vector3,
        _vector = new THREE.Vector3,
        _angVector = new THREE.Vector3;


    handleMouseDown = function( evt ) {
        if(!playedCaps) return;
        holdingDown = true;
        power = 0;
        $powerBar.fadeIn();
    };

    handleMouseMove = function( evt ) {
        var mouseX = evt.clientX,
            mouseY = evt.clientY;


        if(playedCaps && Player.isPlaying){
            TweenMax.set($powerBar, {left:mouseX+50, top:mouseY-50});

            if(Player.totalLaunched < 4){
                TweenMax.set($helpPower, {left:mouseX+50, top:mouseY-50});
            }
        };

        mouse3D.set(
            ( mouseX / window.innerWidth ) * 2 - 1,
            - ( mouseY / window.innerHeight ) * 2 + 1.07 ,
            1 );
        mouse3D.unproject(camera);
        dir = mouse3D.sub( camera.position ).normalize();
        distance = - camera.position.z / dir.z;
        realpos = camera.position.clone().add( dir.multiplyScalar(distance/2) );
        realpos.z = playerDistance*globalDirection;

        if(!playedCaps) return;

        DCMP = realpos;


    };

    handleMouseUp = function( evt ) {

        if(!playedCaps) return;


        holdingDown = false;

        playedCaps.__dirtyPosition = true;
        playedCaps.floating = false;

        var rdms = [
            Math.random()*3+4,
            Math.random()*3+4,
            Math.random()*3+4
        ];

        _vector.set( 1, 1, 1 );
        _angVector.set( rdms[0], rdms[1], rdms[2]);

        playedCaps.setAngularFactor( _vector );
        playedCaps.setLinearFactor( _vector );
        launchVector.set(1,1, -power*playerstrengh*globalDirection);
        playedCaps.setLinearVelocity( launchVector );
        playedCaps.setAngularVelocity( _angVector );

        playedCaps.position.copy(DCMP);

        playedCaps = null;

        if(!CAPS.solo){
            Game.Player.playerLaunch({x : DCMP.x, y : DCMP.y, z :-DCMP.z, pwr:power, rdms:rdms});
        }else{
            setTimeout(function(){
                Party.resetStocks();
                Party.vlplay();
            }, 3000);
        }
        power = 0;

        if(Player.totalLaunched < 4){
            Interface.launchTuto.hide();
        }

        $powerBar.fadeOut();

        Player.launched++;
        Player.totalLaunched++;

        Player.isPlaying = false;
        Viensla.isPlaying = true;
        Party.setTurn();

        Party.resetStocks();



    };

    return function() {
        renderer.domElement.addEventListener( 'mousedown', handleMouseDown );
        renderer.domElement.addEventListener( 'mousemove', handleMouseMove );
        renderer.domElement.addEventListener( 'mouseup', handleMouseUp );
    };
})();
;

var darkbrown = 0xbd9442,
    mediumbrown = 0xaf843e,
    lightbrown = 0xf9d37f,
    lightestbrown = 0xffd888,
//    brown = 0xf2b554,
    brown = 0xf3b654,
    tablebrown = 0xf4bd61,
    tablefootbrown = 0xd2ac55,
    tapisbrown = 0xaf843e;

var cblue = 0x67AAC1;
var cyellow = 0xF7D443;
var cgreen = 0x78AD60;
var cred = 0xC1676A;
var corange = 0xFCC025;
var ptpgrey = 0x595556;
var ptpyellow = 0xfde772;


var beerColors = {
        chimey : 0x2e7cff,
        foster : 0x163282,
        lef : 0xfacc14,
        pelle : 0xf24141,
        chouffe : 0x4d9c40,
        ptp : 0xf58b31
    };

var shadowColors = {
    chimey : 0x317ad3,
    foster : 0x142e66,
    lef : 0xedc418,
    pelle : 0xd84848,
    chouffe : 0x5e9147,
    ptp : 0xea843f
};
;var FPS = function(){
    var performance = performance || false;
    var now = ( performance && performance.now ) ? performance.now.bind( performance ) : Date.now;
    var startTime = now(),
        prevTime = startTime;
    var frames = 0;
    var fps= 0;
    var globalFps = 0;
    var med=0;
    var tot = 0;

    return {
        begin : function(){
            startTime = now();
        },
        end : function(){
            var time = now();

            frames++;

            if ( time > prevTime + 1000 ) {

                fps = Math.round( ( frames * 1000 ) / ( time - prevTime ) );
                prevTime = time;
                tot++;
                globalFps = globalFps+fps;
                med = globalFps/tot;
                frames = 0;
            }
            return time;
        },
        update: function(){
            startTime = this.end();
            return {fps:fps, med:med};
        }
    }
};;var Party = {
    isPlaying : false,
    capsPerTurn : 1,
    lives : 60,
    create : function(){
        Viensla.generateCaps();

        Viensla.score = Player.score = Viensla.launched = Player.launched = 0;
        Viensla.lives = Player.lives = Party.lives;

        Party.isPlaying = true;

        this.resetStocks();

        if(!CAPS.solo){
            Viensla.isPlaying = Game.role == 'Player';
            Player.isPlaying = Game.role == 'Host';
        }else{
            Viensla.isPlaying = false;
            Player.isPlaying = true;
        }

        $vlpart.fadeIn(function(){
            Party.setLife();
        });

        $plpart.fadeIn();

        Player.generateCaps();

        if(!Interface.txtoRdy)
            Interface.textoBox.init();

        setTimeout(function(){
            $('#game-loader .tiny-loader').addClass('fade');
            setTimeout(function(){
                $('#game-loader').addClass('fade');
                setTimeout(function(){
                    $('#game-loader').remove();
                    animTypo($startTypo);
                    Party.setTurn();
                    Snds.fadInSd('ambiance');
                    Snds.playSd('open');
                }, 500);
            }, 1000);
        }, 2000);
    },

    resetParty: function(){
        var $resetC = $('#reset-party-c');

        Viensla.score = Player.score = Viensla.launched = Player.launched = 0;
        Viensla.lives = Player.lives = Party.lives;
        Player.drunked = 1;

        Party.isPlaying = true;

        Party.setLife();

        if(!CAPS.solo){
//            Viensla.isPlaying = Game.role == 'Player';
//            Player.isPlaying = Game.role == 'Host';
        }else{
            Viensla.isPlaying = false;
            Player.isPlaying = true;
        }

        Party.setTurn();

        TweenMax.to($resetC, 1, {opacity:0, onComplete:function(){
            TweenMax.set($resetC,{display:'none'});
            animTypo($startTypo);
            Snds.playSd('open');
            TweenMax.set($resetC.find('h4'),{scale:0.5, opacity:0, height:0});
        }});

    },
    setTurn:function(){
        if(Player.isPlaying){
            $('#versus-bar #cursor').removeClass().addClass('lf');
            TweenMax.to($('#you-turn'), 1.5, {x:40, opacity:1, ease:Elastic.easeOut.config(1, 0.4),  delay:1.8});
            TweenMax.to($('#you-turn'), 1, {x:-170, opacity:0, ease:Elastic.easeOut.config(1, 0.4), delay:4.5});

            if(Player.totalLaunched < 3)
                Interface.capTuto.show();

        }else {
            $('#versus-bar #cursor').removeClass().addClass('rg');
        }
    },

    vlplay : function(){

        if(this.isPlaying && CAPS.solo){
            if(Viensla.launched < Party.capsPerTurn && !Player.isPlaying){

                $vlpart.find('.capsstock span').eq(Viensla.launched).removeClass().addClass('animated zoomOut');

                Viensla.isPlaying = true;
                Player.isPlaying = false;
                Viensla.launchCaps();
                Viensla.launched++;
                Viensla.totalLaunched++;

                Player.isPlaying = true;
                Player.launched = 0;
                Viensla.isPlaying = false;


                Party.setTurn();
                this.resetStocks();

            }
        }
    },

    plplay : function(){
        if(this.isPlaying){

            if(Player.launched < Party.capsPerTurn && !Viensla.isPlaying){
                globalDirection = 1;
                create_caps('pl');
                Player.isPlaying = true;
                Viensla.isPlaying = false;
            }
        }
    },

    vlcaps : function(){
        if(this.isPlaying){
            Viensla.isPlaying = false;
            Player.isPlaying = true;
            Viensla.score++;
            Player.drunked += 2;
            Player.lives -= 10;

            if(Player.lives==0 && Viensla.lives==Party.lives){
                animTypo($perfectTypo, 800);
            }else{
                this.animCaps();
            }

            if(Viensla.launched < Party.capsPerTurn-1){

                setTimeout(function(){
                    Party.resetStocks();
                }, 2000);
            }
            setTimeout(function(){
                Player.generateCaps();
            }, 2000);

            Party.setLife();
        }
    },


    plcaps : function(){
        var txtos = [2, 4, 5, 7];

        if(this.isPlaying){
            Player.score++;
            Viensla.lives -= 10;
            Player.isPlaying = false;
            Viensla.isPlaying = true;

            Game.Player.playerCaps();

            if(Viensla.lives==0 && Player.lives==Party.lives){
                animTypo($perfectTypo, 800);
            }else{
                this.animCaps();
            }
            setTimeout(function(){
                Viensla.generateCaps();
            }, 2000);
            Party.setLife(true);

        }

    },

    resetStocks : function(){
        if(this.isPlaying){
            $('.capsstock span.zoomOut').removeClass('zoomOut').addClass('zoomIn');
            Viensla.launched = 0;
            Player.launched = 0;
        }

        if(Player.drunked > 11){
            Player.drunked -= 2;
        }
    },

    setLife : function(perfect){

        if(typeof perfect == 'undefined')
            perfect = false;

        var delay = perfect ? 2600 : 1600;
        if(this.isPlaying){
            var pctPlLife = Math.round(Player.lives / Party.lives * 100);
            var pctVlLife = Math.round(Viensla.lives / Party.lives * 100);

            $plpart.find('.life').height(pctPlLife+"%");
            $vlpart.find('.life').height(pctVlLife+"%");

            if(pctPlLife <= 0 || pctVlLife <= 0){
                $('#share-tw-c iframe').remove();

                Party.isPlaying = false;

                setTimeout(function(){
                    var share_text = "";
                    if(pctPlLife <= 0){
                        animTypo($loseTypo, 800);
                        Snds.playSd('lose');
                        setTimeout(Snds.playSd('clairon'), 3000);
                        $('#reset-party-c').removeClass().addClass('looser').find('h3').text("Une petite revanche ?");
                        if(CAPS.solo){
                            Viensla.imprecision += 2;
                        }
                        share_text = "Je me suis fait éclater par "+Game.Enemy.name+" au caps ! J'en veux encore ! À qui le tour ?";

                    }else if(pctVlLife <= 0){
                        animTypo($winTypo, 800);
                        Snds.playSd('win');
                        $('#reset-party-c').removeClass().addClass('winner').find('h3').text("On prendra bien la ptite soeur ?");
                        setTimeout(Snds.playSd('applause'), 3000);
                        Viensla.imprecision = Math.max(0, Viensla.imprecision - 2);

                        share_text = "J'ai éclaté "+Game.Enemy.name+" au caps ! À qui le tour ?";
                    }

                    $fbUrlLink.on('click', function(){
                        window.open('http://www.facebook.com/sharer.php?s=100&amp;p[title]='+encodeURI('Paye ton Caps')+'&amp;p[summary]='+encodeURI(share_text)+'&amp;p[url]='+window.location.href+'&amp;','sharer','toolbar=0,status=0,width=548,height=325');
                    });
                    twttr.widgets.createShareButton(
                        'http://www.payetoncaps.com',
                        document.getElementById('share-tw-c'),
                        {
                            text: share_text,
                            size:'large',
                            count:'none'
                        }
                    );



                    TweenMax.to($('#reset-party-c'), 1, {opacity:1, display:'block', delay:3});

                }, delay);
            }
        }
    },
    animCaps : function(){
        animTypo($capsTypo);
    }
};






function animTypo($el, pauseDelay){
    if(typeof pauseDelay == 'undefined')
        pauseDelay = 300;

    var delay = 400;
    $el.attr('class', 'capsIn1');
    setTimeout(function(){
        $el.attr('class', 'capsIn2');
        setTimeout(function(){
            $el.attr('class', 'capsIn3');
            setTimeout(function(){
                $el.attr('class', '');
            },delay);
        },delay+pauseDelay);
    },delay);

    if($el == $perfectTypo){
        Snds.playSd('perfect');
        var aleaGif = Math.ceil(Math.random()*10);

        $('#perfect-b').removeClass().addClass('g'+aleaGif);

        $('#perfect-b').addClass('active');

        setTimeout(function(){
            $('#perfect-b').removeClass('active');

            setTimeout(function(){
                $('#perfect-b').removeClass();
            },1000);
        },2500);
    }
}
;var generatedNames = [
    "Sac à bière",
    "Maître Brasseur",
    "Chuck Boris",
    "Vomito",
    "Fredo Mercure",
    "The Undertaker",
    "Capsulator",
    "Golden Capseur",
    "Jean Cirrhose",
    "Jean-Michel Pinte",
    "BURP",
    "Boitsanssoif",
    "Pillier d'comptoir",
    "Bièrelusconi",
    "Edouard Bière",
    "L'incapssable"
];
var autoMessages,poteRelou;

Interface = {
    $currentPart : null,
    curIndex: 0,
    multiRdy : false,
    pickNameRdy : false,
    pickCapsRdy : false,
    gameRdy : false,
    txtoRdy : false,

    capTuto : null,
    launchTuto : {},

    init : function(){

        $plpart = $('.pl-part');
        $vlpart = $('.vl-part');
        $capsTypo = $('#caps-m');
        $startTypo = $('#start-m');
        $winTypo = $('#win-m');
        $loseTypo = $('#lose-m');
        $perfectTypo = $('#perfect-m');
        $powerBar = $('.powerbar');
        $helpPower = $('#launch-tuto');
        $fbUrlLink = $('#reset-party-c').find('#fb_share');

        this.resize();
        this.initWelcome();
        this.initResetParty();
        this.initMenu();
        this.hdr.init();

        window.addEventListener( 'resize', Interface.resize, false );

        Snds.init();

        this.capTuto = $plpart.find('.cap-tuto');
        this.capTuto.show = function(){
            TweenMax.fromTo(Interface.capTuto,0.5,{scale:0, opacity:0}, {scale:1, opacity:1, ease:Elastic.easeOut.config(1, 0.4),  delay:1.8});
        };
        this.capTuto.hide = function(){
            TweenMax.to(Interface.capTuto, 0.5, {scale:0, opacity:0});
        };

        this.launchTuto.show = function(){
            TweenMax.fromTo($helpPower,0.5,{scale:0, opacity:0}, {scale:1, opacity:1, ease:Elastic.easeOut.config(1, 0.4)});
        };
        this.launchTuto.hide = function(){
            TweenMax.to($helpPower, 0.5, {scale:0, opacity:0});
        };
        this.launchTuto.hide();
    },
    resize : function(){
        $('section.sc').css({height: window.innerHeight, lineHeight: window.innerHeight+"px"});
        $('#wrapper').css({width: window.innerWidth, height: window.innerHeight});
        TweenLite.set($('#site-content'),{y : -Interface.curIndex*window.innerHeight});
    },
    navigate : function(to){

        if(to == 3){
            if(!this.pickNameRdy)
                this.initPickName();

            if(!CAPS.solo){
                this.hdr.multiPartyLaunched = true;
            }

        }else if(to == 4){
            if(!this.pickCapsRdy)
                this.initCapsSelect();
        }else if(to == 6){

            if(!this.gameRdy){
                setTimeout(CAPS.launchGame, 400);
            }
        }

        if(to==1 || to==3 || to==4){
            this.hdr.show();

            if(this.hdr.multiPartyLaunched && to==3){
                this.hdr.hideBt();
            }else{
                this.hdr.showBt();
            }
        }else{
            this.hdr.hide();
        }


        TweenLite.to($('#site-content'), 0.3, {y : -to*window.innerHeight});
        this.curIndex = to;
    },
    navigateBack : function(){
        var nextIndex = 0,
            ci = Interface.curIndex;

        if((ci == 3 && CAPS.solo) || ci == 1)
            nextIndex = 0;
        else if(ci == 4)
            nextIndex = 3;

        this.navigate(nextIndex);
    },
    initWelcome : function(){
        var $welcome = $('#welcome'),
            $pelle = $welcome.find('.cp-pelle'),
            $foster = $welcome.find('.cp-foster'),
            $logo = $welcome.find('.logo'),
            $water = $welcome.find('.water'),
            $soloBtn = $welcome.find('#bt-play-solo'),
            $multiBtn = $welcome.find('#bt-play-online'),
            $btBackGlobal = $('#bt-back-global');

        this.$currentPart = $welcome;

        var tms = [
            new TimelineMax({paused:true, repeat:-1, yoyo:true}),
            new TimelineMax({paused:true, repeat:-1, yoyo:true}),
            new TimelineMax({paused:true, repeat:-1, yoyo:true}),
            new TimelineMax({paused:true, repeat:-1, yoyo:true})
        ];

        var time = 8;

        tms[0].add(TweenMax.fromTo( $pelle,time,
            {x:-5, y:0, rotation:0, scale:0.85}, {x:-15, y:-10, rotation:6, scale:1}
        ));

        tms[1].add(TweenMax.fromTo( $foster,time,
            {x:0, y:0, rotation:0, scale:0.85}, {x:8, y:-4, rotation:-6, scale:1}
        ));

        tms[2].add(TweenMax.fromTo($logo ,time,
            {x:0, y:0, rotation:0, scale:0.9}, {x:8, y:3, rotation:4, scale:1}
        ));

        tms[3].add(TweenMax.fromTo( $water,time,
            {x:0, y:0, rotation:0, scale:0.8}, {x:0, y:0, rotation:-4, scale:1}
        ));

        setTimeout(function(){
            tms[0].play();
            tms[1].play();
            tms[2].play();
            tms[3].play();
        },1000);


        initializeParty();

        $soloBtn.click(function(){
            CAPS.solo = true;
            $('#wrapper').addClass('solo');
            Interface.navigate(3);
        });
        $multiBtn.click(function(){
            CAPS.solo = false;
            $('#wrapper').removeClass('solo');

            Interface.navigate(1);
            if(!Interface.multiRdy) Interface.initMulti();
        });
        $btBackGlobal.click(function(){
            Interface.navigateBack();
        });


    },



    initMulti : function(hash){
        this.multiRdy = true;

        if(hash){
            $('#join-code').val(hash);
            Game.Player.onPlayerStartClick();
        }else{
            var $multi = $('#multiplayer'),
                $generateCode = $multi.find('#host-party'),
                $startParty = $multi.find('#start-party'),
                $joinParty = $multi.find('#join-party');

            $('#host-codes .box').click(function(){
                $(this).find('input').select();
            });

            $('section.wait-section .quit-party').click(function(){
                Game.Player.playerQuit();
                window.location = location.href.replace(location.hash,'');
            });

            $generateCode.on('click', Game.Host.onCreateClick);
            $joinParty.on('click', Game.Player.onPlayerStartClick);
            $startParty.on('click', Game.Player.onPlayerStartClick);
        }


    },

    initPickName : function(){
        this.pickNameRdy = true;


        var $pickname = $('#pickname'),
            $generateName = $pickname.find('#bt-generate-name'),
            $sendName = $pickname.find('#bt-send-name'),
            namesCopy = generatedNames.slice(),
            nameItv;

        $sendName.on('click', function(){
            Game.Player.name = $('#input-player-name').val() || generatedNames[Math.round(Math.random()*(generatedNames.length-1))];
            Interface.navigate(4);
        });

        $generateName.on('click', function(){
            clearInterval(nameItv);


            var rd = Math.round(Math.random()*(namesCopy.length-1));
            var name = (namesCopy.splice(rd, 1)).toString();
            var full = '';
            var i = 0;
            var $input =  $('#input-player-name');

            nameItv = setInterval(function(){
                full += name.charAt(i);
                $input.val(full);
                i++;
                if(i == name.length){
                    clearInterval(nameItv);
                }
            }, 30);
            if(namesCopy.length == 0){
                namesCopy = generatedNames.slice();
            }
        });

    },

    initCapsSelect: function(){
        this.pickCapsRdy = true;

        var $slideShow = $('#beer-slide-c'),
            $capSlides = $slideShow.find('.cap-list li'),
            $bgSlides = $('#beer-bg-slider li'),
            $navBtm = $slideShow.find('.nav-bottle li'),
            $arr = $slideShow.find('.arw'),
            curSlide = 0,
            $sendCaps = $('#bt-send-caps'),
            $bgMask = $('#beer-bg-slider .blc-msk'),
            colorName = ['ptp', 'chouffe', 'pelle', 'foster', 'lef', 'chimey'];

        $navBtm.click(function(){
            var i = $(this).index();
            changeSlide(i);
        });

        $arr.click(function(){
            var i = 0;
            if($(this).hasClass('lf-arw')){
                i = curSlide == 0 ? 5 : curSlide-1;
            }else{
                i = curSlide == 5 ? 0 : curSlide+1;
            }
            changeSlide(i);
        });


        function changeSlide(i){
            var lf = i > curSlide;

            $capSlides.eq(curSlide).addClass(lf ? 'lf' : 'rg');
            $capSlides.eq(i).removeClass('lf rg');
            $capSlides.slice(i+1).addClass('na').removeClass('lf').addClass('rg').removeClass('na');
            $capSlides.slice(0,i).addClass('na').removeClass('rg').addClass('lf').removeClass('na');

            if(i==5){
                $capSlides.eq(0).addClass('na').removeClass('lf').addClass('rg').removeClass('na');
            }else if(i==0){
                $capSlides.eq(5).addClass('na').removeClass('rg').addClass('lf').removeClass('na');
            }

            Game.Player.caps = $capSlides.eq(i).attr('id');
            refreshNav(i);
            curSlide = i;
        }

        function refreshNav(i){
            $navBtm.removeClass();
            $navBtm.eq(i).addClass('act');
            $bgSlides.removeClass('act');
            $bgSlides.eq(i).addClass('act');

            $bgMask.removeClass('ptp chouffe pelle foster lef chimey').addClass(colorName[i]);
        }

        if(CAPS.solo)
            $sendCaps.on('click', function(){Interface.navigate(6)});
        else
            $sendCaps.on('click', Game[Game.role].sendPlayerInfo);

    },
    textoBox : {
        $sdBox : null,
        $rdBox :null,
        tm : null,
        init : function(){

            Interface.txtoRdy = true;

            autoMessages = [
                "<p>Maman :</p><p>encore.au.bar?bisou.maman</p>",
                "<p>Chaton <3 :</p><p>"+Game.Player.name+", c'est fini nous deux, je pars avec Clem.</p>",
                "<p>Soeurette :</p><p>Qu'est-ce que tu fous "+Game.Player.name+" ?! Tout le monde t'attend au mariage de Tata Jacqueline !</p>",
                "<p>Boss :</p><p>Bonsoir, j'attends votre présentation demain matin à 6h pétante sur mon bureau.</p>",
                "<p>PizzaPingui :</p><p>Dépêchez vous ! Pour deux pizzas Sushiburger achetées, la troisième offerte !</p>",
                "<p>Banque Populass :</p><p>Alerte automatique - Vous avez dépassé les 5000€ de découvert autorisé.</p>",
                "<p>Tony CAZANASS :</p><p>Crois pas que tu vas t'en tirer comme ça "+Game.Player.name+ ", on tient ta mère !</p>",
                "<p>Ben :</p><p>Yo gro bien ? dsl mai ta pas 100 balles à m'depanne ?</p>",
                "<p>6917 :</p><p>Envoie VIENSLA au 6917 et rencontre les personnes HOT de ton quartier !</p>"
            ];

            poteRelou = [
                "<p>Alex:</p><p>Alors tu viens plus aux soirées ?</p>",
                "<p>Alex:</p><p>Apéro ce soir ?</p>",
                "<p>Alex:</p><p>Alors, ça sort ce soir ?</p>",
                "<p>Alex:</p><p>Allooooooooo</p>",
                "<p>Alex:</p><p>???????</p>"
            ];

            this.$sdBox = $('#sd-messages-box');
            this.$rcBox = $('#rc-messages-box');

            if(CAPS.solo){
                $('#txto-sd').remove();
                var txtoItv = setInterval(function(){
                    if(autoMessages.length > 0 || poteRelou.length > 0){
                        Interface.textoBox.showTexto(0);
                    }else{
                        clearInterval(txtoItv);
                    }
                }, 30000+Math.random()*10000);
//                }, 10000+Math.random()*5000);
            }




            var $rcb = this.$rcBox;

            var sendDelay = 10000;

            this.$sdBox.on('click', 'li', function(){
                var i = $(this).index();
                Game.Player.playerMessage(i);
                $('#txto-sd').addClass('disabled');

                setTimeout(function(){
                    $('#txto-sd').removeClass('disabled');
                }, sendDelay);
            });

            this.tm = new TimelineMax({paused:true});

            this.tm.to($rcb, 0, {width:0, height:0, opacity:0})
                .to($rcb, 0.3, {width:250, height:3, opacity:1, ease: Elastic.easeOut.config(1, 0.4)}, 0.1)
                .to($rcb, 0.3, {height:90, ease: Elastic.easeOut.config(1, 0.4)});
            TweenLite.set($rcb,{width:0, height:0, opacity:0})


        },
        showTexto : function(i){


            var shownTime = 7500;
            var $rcb = this.$rcBox;
            var texto;
            if(CAPS.solo){
                if((Math.random() > 0.3 || poteRelou.length == 0) && autoMessages.length > 0){
                    var rdt = Math.round(Math.random()* (autoMessages.length-1));
                    texto = autoMessages[rdt];
                    autoMessages.splice(rdt, 1);
                }else if(poteRelou.length > 0){
                    texto = poteRelou[0];
                    poteRelou.splice(0, 1);
                }
            }else{
               texto = '<p>'+Game.Enemy.name+' :</p>'+this.$sdBox.find('li div').eq(i).html();
            }

            $rcb.find('.center').empty().append(texto);
            $rcb.find('p').lettering();
            $rcb.find('span').css({opacity:0});

            if(phone) phone.receiveMessage();

            setTimeout(function(){
                Interface.textoBox.tm.play();

                setTimeout(function(){
                    var n = 0;
                    var spanInt = setInterval(function(){
                        TweenLite.set($rcb.find('span').eq(n), {opacity:1});
                        n++;
                        if(n == $rcb.find('span').length){
                            clearInterval(spanInt);
                        }
                    }, 0.4);
                }, 1000);


                setTimeout(function(){
                    var nbSpan = $rcb.find('span').length-1;
                    var n = nbSpan;

                    var spanInt = setInterval(function(){
                        TweenLite.set($rcb.find('span').eq(n), {opacity:0});
                        n--;
                        if(n == -1){
                            clearInterval(spanInt);
                        }
                    }, 0.2);
                    setTimeout(function(){
                        Interface.textoBox.tm.reverse();

                        setTimeout(function(){
                            phone.closeMessage();
                        }, 800);

                    }, (nbSpan-1)*10);

                }, shownTime);
            }, 1000);
        }
    },
    initResetParty : function(){
        var $resetC = $('#reset-party-c'),
            $h3 = $resetC.find('h3'),
            $h4 = $resetC.find('h4');

        TweenMax.set($h4,{scale:0.5, opacity:0, height:0});


        $resetC.find('#bt-reset-party').click(function(){


            if(CAPS.solo){
                Party.resetParty();
            }else{
                Game.Player.playerReset();
                $resetC.addClass('loading');
                TweenMax.to($h3, 0.4, {scale:0.5, opacity:0, onComplete: function(){
                    $h3.text('En attente de ton adversaire...');
                    TweenMax.to($h3, 0.4, {scale:1, opacity:1, delay:0.5,  ease:Elastic.easeOut.config(1, 0.4)});
                }});
            }
        });

        $resetC.find('#bt-quit-reset').click(function(){
            Game.Player.playerQuit();
            window.location = location.href.replace(location.hash,'');
        });
    },
    initMenu : function(){
        var $btMenu = $('#bt-menu'),
            $btClose = $('#bt-close-menu'),
            $btCloseTuto = $('#bt-close-tuto'),
            $btQuit = $('#lk-quit'),
            $menu = $('#pause-menu'),
            $volets = $menu.find('.volet'),
            $quit = $menu.find('#quit-pause'),
            $btsQuit = $quit.find('.bt');


        $btMenu.click(function(){
            TweenMax.to($menu, 0.7, {opacity:1, display:"block"});
            TweenMax.to($btMenu, 0.3, {opacity:0});
            TweenMax.to($('footer'),0.5,{display:'block', opacity:1});

        });


        $menu.find('#lk-about').click(function(){
            $volets.addClass('hidden');
            $volets.filter('#about-pause').removeClass('hidden');
        });

        $menu.find('#lk-tuto').click(function(){
            $volets.addClass('hidden');
            $volets.filter('#tuto-pause').removeClass('hidden');
            TweenMax.to($btClose, 0.5, {opacity:0});
            TweenMax.to($menu.find('.pause-logo'), 0.5, {scale:0, opacity:0, ease:Elastic.easeOut.config(1, 0.4)});
            if(Player.totalLaunched == 0)
                TweenMax.to($plpart.find('.cap-tuto'), 0.5, {scale:0, opacity:0, ease:Elastic.easeOut.config(1, 0.4)});

        });

        $menu.find('.back').click(function(){
            $volets.addClass('hidden');
            TweenMax.to($menu.find('.pause-logo'), 0.5, {scale:1, opacity:1});
            $volets.filter('#home-pause').removeClass('hidden');
        });


        $($btClose).click(closeMenu);
        $($btCloseTuto).click(closeMenu);

        function closeMenu(){
            TweenMax.to($('footer'),0.5,{opacity:0});
            TweenMax.to($menu, 0.7, {opacity:0, onComplete: function(){
                TweenMax.to($btMenu, 0.3, {opacity:1});

                TweenMax.set($menu, {display:"none"});

                $volets.addClass('hidden');

                TweenMax.set($btClose, {scale:1, opacity:1});

                TweenMax.set($menu.find('.pause-logo'), {scale:1, opacity:1});
                $volets.filter('#home-pause').removeClass('hidden');

                $('footer').hide();

            }});
        }

        $btQuit.click(function(){
            $volets.addClass('hidden');
            $quit.removeClass('hidden');
        });
        $btsQuit.click(function(){
          if($(this).hasClass('no')){
              $volets.addClass('hidden');
              TweenMax.to($menu.find('.pause-logo'), 0.5, {scale:1, opacity:1});
              $volets.filter('#home-pause').removeClass('hidden');
          }else{
              window.location = location.href.replace(location.hash,'');
          }
        });

    },
    hdr : {
        $logo : null,
        $bt : null,
        active:true,
        multiPartyLaunched: false,
        init:function(){
            this.$logo = $('header h1');
            this.$bt = $('header .bt');
            $('header').hide();
            this.hide();

//            $('footer').hide();
        },
        show : function(){
            $('header').show();
            TweenMax.to(Interface.hdr.$logo,0.5,{scale:1, opacity:1, ease:Elastic.easeOut.config(1, 0.4)});
            TweenMax.to($('footer'),0.5,{display:'block', opacity:1});
        },
        hide : function(){
            TweenMax.to($('footer'),0.5,{opacity:0});
            TweenMax.to(Interface.hdr.$logo,0.3,{scale:0, opacity:0, onComplete:function(){
                $('header').hide();
                $('footer').hide();
            }});
            this.hideBt();
        },
        hideBt : function(){
            TweenMax.to(Interface.hdr.$bt,0.3,{x:-50, opacity:0, onComplete:function(){
                Interface.hdr.$bt.hide();
            }});
            this.active = false;
        },
        showBt : function(){
            Interface.hdr.$bt.show();
            TweenMax.to(Interface.hdr.$bt,0.5,{x:0, opacity:1, ease:Elastic.easeOut.config(1, 0.4)});
            this.active = false;

        }
    }

};
;
planeWIDTH = 170;
planeHEIGHT = 600;


var tableSurfaceDim = [150, 5, 30];
var tablefootSurfaceDim = [140, 55, 2];
var level, _floor, _tapis, _tablefoot, _table, _wall, _bar, phone;


var dust = [];
function create_table(){

    //Set Level group
    level = new Physijs.BoxMesh(
        new THREE.BoxGeometry( 1, 1, 1 ),
        new THREE.MeshPhongMaterial({
                color: ptpgrey
        }),0
    );
    level.position.x = 0;
    level.position.y = 0;
    level.position.z = 0;
    level.castShadow = false;
    level.receiveShadow = false;
    level.name = 'level';



    //Add floor to level
    _floor = new Physijs.BoxMesh(
        new THREE.CylinderGeometry(800, 800, 30, 16),
        new THREE.MeshPhongMaterial({
            color: brown
        }),0
    );
//    _floor.rotation.x = Math.PI/2;
    _floor.position.x = 0;
    _floor.position.y = -1;
    _floor.position.z = 0;
    _floor.castShadow = false;
    _floor.receiveShadow = true;
    _floor.name = 'floor';

    level.add(_floor);


    var CustomSinCurve = THREE.Curve.create(
        function ( scale ) { //custom curve constructor
            this.scale = (scale === undefined) ? 1 : scale;
        },

        function ( t ) { //getPoint: t is between 0-1
            return new THREE.Vector3(0, t, 0).multiplyScalar(this.scale);
        }
    );

    var path = new CustomSinCurve( 200, 100 );

    var geometry = new THREE.TubeGeometry(
        path,  //path
        100,    //segments
        580,     //radius
        100,     //radiusSegments
        true  //closed
    );


//    for(var i=0; i<32; i++) {
//
//        if(i!=10) {
//            barGeo.faces[i].color.setHex( brown);
//        }
//
//    }


    _bar = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({
            color:brown,
            shininess:100,
            side:THREE.BackSide
        })
    );
    _bar.rotation.y = Math.PI/2;
    _bar.position.x = 0;
    _bar.position.y = -90;
    _bar.position.z = 100;
    _bar.castShadow = true;
    _bar.receiveShadow = true;
    _bar.name = 'bar';
    _bar.rotation.x = -0.06;

    level.add(_bar);


    //Add Wall to level
    var texture = THREE.ImageUtils.loadTexture('images/v2/bar_single.png');
    texture.minFilter = THREE.LinearFilter;

    _wall = new Physijs.BoxMesh(
        new THREE.BoxGeometry(500, 125, 1),
        new THREE.MeshBasicMaterial({
            map:texture,
            transparent:true,
            opacity:1
        }),
        0
    );
    _wall.position.x = 3;
    _wall.position.y = 77;
    _wall.position.z = -435;
    _wall.castShadow = true;
    _wall.receiveShadow = true;
    _wall.rotation.x = -0.06;

    level.add(_wall);

    texture = THREE.ImageUtils.loadTexture('images/v2/bar-neon-orange.png');
    texture.minFilter = THREE.LinearFilter;

    _wall = new Physijs.BoxMesh(
        new THREE.BoxGeometry(119, 68, 1),
        new THREE.MeshPhongMaterial({
            map:texture,
            transparent:true,
            opacity:0.7
        }),
        0
    );
    _wall.position.x = 3;
    _wall.position.y = 180;
    _wall.position.z = -600;
    _wall.castShadow = true;
    _wall.receiveShadow = true;
    level.add(_wall);

    texture = THREE.ImageUtils.loadTexture('images/v2/armoires_back.png');
    texture.minFilter = THREE.LinearFilter;

    _wall = new Physijs.BoxMesh(
//        285
        new THREE.BoxGeometry(1712, 335, 10),
        new THREE.MeshPhongMaterial({
            map:texture,
            transparent:true,
            opacity:0.2
        }),
        0
    );
    _wall.rotation.x = -0.37;
    _wall.position.x = 0;
    _wall.position.y = 130;
    _wall.position.z = -600;
    _wall.castShadow = true;
    _wall.receiveShadow = true;

    level.add(_wall);



    _tapis = new Physijs.BoxMesh(
        new THREE.BoxGeometry(planeWIDTH, planeHEIGHT, 35),
        new THREE.MeshPhongMaterial({
            color: mediumbrown
        }), 0
    );
    _tapis.rotation.x = Math.PI/2;
    _tapis.position.x = 0;
    _tapis.position.y = 0;
    _tapis.position.z = 0;
    _tapis.castShadow = false;
    _tapis.receiveShadow = false;
    _tapis.name = 'tapis';

    var tapiscircle = new Physijs.BoxMesh(
        new THREE.CylinderGeometry(140, 140, 10, 64),
        new THREE.MeshPhongMaterial({
            color: 0xffffff,
            transparent : true,
            opacity:0.1
        }),0
    );
    tapiscircle.rotation.x = Math.PI/2;
    tapiscircle.position.y = -80;
    tapiscircle.position.z = -10;
    _tapis.add(tapiscircle);



    var shadowcircle = new Physijs.BoxMesh(
        new THREE.CylinderGeometry(90, 90, 2, 64),
        new THREE.MeshPhongMaterial({
            color: 0x040404,
            transparent : true,
            opacity:0.05
        }),0
    );
    shadowcircle.scale.set(1,1,0.4);
    shadowcircle.rotation.x = Math.PI/2;
    shadowcircle.position.y = -130;
    shadowcircle.position.z = -17;
    _tapis.add(shadowcircle);

    scene.add(_tapis);




    //Add table foots


    var _tablefoot_geometry = new THREE.BoxGeometry(tablefootSurfaceDim[0], tablefootSurfaceDim[1]+10, tablefootSurfaceDim[2]);

    _tablefoot = new Physijs.BoxMesh(
        _tablefoot_geometry,
        new THREE.MeshPhongMaterial({
            color: tablefootbrown
        })
    , 0);


    var _tablefoot_outlines = new Physijs.BoxMesh(
        _tablefoot_geometry,
        new THREE.MeshPhongMaterial({
            color: 0x000000
        })
    , 0);
    _tablefoot_outlines.position.z = -0.5;
    _tablefoot_outlines.scale.set(1.01,1.05,1.05);
//    _tablefoot.add(_tablefoot_outlines);

    _tablefoot.castShadow = true;
    _tablefoot.receiveShadow = true;


    _tablefoot.rotation.x = 0.3;
    _tablefoot.position.x = 0;
    _tablefoot.position.y = tablefootSurfaceDim[1]-6.3;
    _tablefoot.position.z = -110;

    level.add(_tablefoot);

    //Add table
    var _table_geometry = new THREE.BoxGeometry(tableSurfaceDim[0], tableSurfaceDim[1], tableSurfaceDim[2]);

    _table = new Physijs.BoxMesh(
        _table_geometry,
        new THREE.MeshPhongMaterial({
            color: tablebrown
        }), 0
    );


    var _table_outlines = new Physijs.BoxMesh(
        _table_geometry,
        new THREE.MeshLambertMaterial({
            color: 0x000000
        })
        , 0);
    _table_outlines.position.z = -2;
    _table_outlines.position.y = -0.5;
    _table_outlines.scale.set(1.01,1.05,1.1);

//    _table.add(_table_outlines);

    _table.position.x = 0;
    _table.position.y = tablefootSurfaceDim[1] +tablefootSurfaceDim[1]/2 ;
    _table.position.z = -110;
    _table.castShadow = true;
    _table.receiveShadow = true;

    level.add(_table);

    _table = new Physijs.BoxMesh(
        new THREE.BoxGeometry(tableSurfaceDim[0]+100, tableSurfaceDim[1], tableSurfaceDim[2]),
        new THREE.MeshBasicMaterial({
            color: 0xf6c267
        }),
    0);

    _table_outlines = new Physijs.BoxMesh(
        new THREE.BoxGeometry(tableSurfaceDim[0]+100, tableSurfaceDim[1], tableSurfaceDim[2]),
        new THREE.MeshPhongMaterial({
            color: 0x000000
        }),
    0);

    _table_outlines.position.z = -0.5;
    _table_outlines.position.y = -0.2;
    _table_outlines.scale.set(1.01, 1, 1);

//    _table.add(_table_outlines);

    _table.position.x = 0;
    _table.position.y = tablefootSurfaceDim[1]+tablefootSurfaceDim[1]/2 ;
    _table.position.z =  110;
    _table.castShadow = true;
    _table.receiveShadow = true;

    level.add(_table);

    //Add Wall to level
    texture = THREE.ImageUtils.loadTexture('images/phone/phone_veille.png');
    texture.minFilter = THREE.LinearFilter;

    var phone_t = new THREE.MeshPhongMaterial({
        map: texture
    });
    var transparent_side =  new THREE.MeshPhongMaterial({
        color:0xfcd625
    });
    var phone_materials = [
        transparent_side,
        transparent_side,
        phone_t,
        transparent_side,
        transparent_side,
        transparent_side
    ];
    phone = new Physijs.BoxMesh(
        new THREE.BoxGeometry(10, 1, 14),
        new THREE.MeshFaceMaterial(phone_materials),
        0
    );
    phone.position.x = 50;
    phone.position.y = 3;
    phone.position.z = -5;
    phone.rotation.y = 0.3;
    phone.castShadow = true;
    phone.receiveShadow = true;

//    phoneLight = new THREE.PointLight( 0xffffff, 0, 100 );
//    phoneLight.position.set(0,0.5,0);
//    phoneLight.add(lightScreen);

//    var messageScreen = new THREE.Mesh(new THREE.BoxGeometry(10,0.1,14), new THREE.MeshBasicMaterial({opacity:0, transparent:true}));

    texture = THREE.ImageUtils.loadTexture('images/phone/phone_message.png');
    texture.minFilter = THREE.LinearFilter;

    var pictoScreen = new THREE.Mesh(new THREE.BoxGeometry(10,0.1,14), new THREE.MeshBasicMaterial({opacity:0, transparent:true, map: texture}));

    texture = THREE.ImageUtils.loadTexture('images/phone/phone_white.png');
    texture.minFilter = THREE.LinearFilter;

    var whiteScreen = new THREE.Mesh(new THREE.BoxGeometry(10,0.1,14), new THREE.MeshBasicMaterial({opacity:0, transparent:true, map: texture}));

//    messageScreen.add(pictoScreen);
//    messageScreen.add(whiteScreen);
    pictoScreen.position.set(0,0.5,0);
    whiteScreen.position.set(0,0.5,0);
    phone.add(pictoScreen);
    phone.add(whiteScreen);

    phone.receiveMessage = function(){
        Snds.playSd('vibreur');
        var i = 0;
        pictoScreen.material.opacity = 1;
        phone.interval = setInterval(function(){
            pictoScreen.material.opacity = i%2 == 0 ? 0 : 1;
            whiteScreen.material.opacity = i%2 == 0 ? 1 : 0;
            i++;
            if(i > 5){
                clearInterval(phone.interval);
            }
        }, 250);
    };

    phone.closeMessage = function(){
        clearInterval(phone.interval);
        pictoScreen.material.opacity = 0;
        whiteScreen.material.opacity = 0;
    };

    _table.add(phone);




    scene.add(level);



    // material texture
//    var texture = new THREE.Texture( generateTexture() );
//    texture.needsUpdate = true; // important!

    // material
    var material = new THREE.MeshBasicMaterial( {
        color: 0xffffff,
//        shininess: 100,
        transparent:true,
        opacity:0.02,
//        map: texture,
        side : 2
    } );


    var _spot_fake = new THREE.Mesh(
        new THREE.CylinderGeometry(
            10, 164, 400, 32
        ),
        material
        );
    _spot_fake.scale.set(1,1,1);
    _spot_fake.rotation.y = Math.PI/2;
//    _spot_fake.receiveShadow = false;
//    _spot_fake.position.x = 0;
//    _spot_fake.position.y = 150;
//    _spot_fake.position.z = -100;


    var spotlightbar = new THREE.PointLight( 0xffffff, 0.1, 100 );
    spotlightbar.position.set( 0, 150, -80 );

    spotlightbar.add(_spot_fake);


     _spot_fake = new THREE.Mesh(new THREE.CylinderGeometry(10, 164, 400, 32),material);
    _spot_fake.scale.set(0.9,0.9,0.9);
    spotlightbar.add(_spot_fake);
     _spot_fake = new THREE.Mesh(new THREE.CylinderGeometry(10, 164, 400, 32),material);
    _spot_fake.scale.set(0.8,0.8,0.8);
    spotlightbar.add(_spot_fake);
     _spot_fake = new THREE.Mesh(new THREE.CylinderGeometry(10, 164, 400, 32),material);
    _spot_fake.scale.set(0.7,0.7,0.7);
    spotlightbar.add(_spot_fake);
     _spot_fake = new THREE.Mesh(new THREE.CylinderGeometry(10, 164, 400, 32),material);
    _spot_fake.scale.set(0.6,0.6,0.6);
    spotlightbar.add(_spot_fake);
     _spot_fake = new THREE.Mesh(new THREE.CylinderGeometry(10, 164, 400, 32),material);
    _spot_fake.scale.set(0.5,0.5,0.5);
    spotlightbar.add(_spot_fake);
     _spot_fake = new THREE.Mesh(new THREE.CylinderGeometry(10, 164, 400, 32),material);
    _spot_fake.scale.set(0.4,0.4,0.4);
    spotlightbar.add(_spot_fake);
     _spot_fake = new THREE.Mesh(new THREE.CylinderGeometry(10, 164, 400, 32),material);
    _spot_fake.scale.set(0.3,0.3,0.3);
    spotlightbar.add(_spot_fake);


    scene.add(spotlightbar);



    // SKYDOME
    var hemiLight = new THREE.HemisphereLight( lightbrown, lightbrown, 0.5 );
    hemiLight.color.setHex( lightbrown );
    hemiLight.groundColor.setHSL( 0.5,0.5,0.5 );
    hemiLight.position.set( 0, 600, 0 );


    var vertexShader = document.getElementById( 'vertexShader' ).textContent;
    var fragmentShader = document.getElementById( 'fragmentShader' ).textContent;
    var uniforms = {
        topColor: 	 { type: "c", value: new THREE.Color( darkbrown ) },
        bottomColor: { type: "c", value: new THREE.Color( lightbrown ) },
        offset:		 { type: "f", value: 10 },
        exponent:	 { type: "f", value: 0.7 }
    }
    uniforms.topColor.value.copy( hemiLight.color );

//    scene.fog.color.copy( uniforms.bottomColor.value );

    var skyGeo = new THREE.SphereGeometry( 1600, 4, 5 );
    var skyMat = new THREE.ShaderMaterial( { vertexShader: vertexShader, fragmentShader: fragmentShader, uniforms: uniforms, side: THREE.BackSide } );
//    var skyMat = new THREE.MeshPhongMaterial({color:lightestbrown,side: THREE.BackSide, shininess:500});
    var sky = new THREE.Mesh( skyGeo, skyMat );
    scene.add( sky );



//    var skyGeo = new THREE.SphereGeometry( 1500, 4, 15 );
//    var skyMat = new THREE.MeshPhongMaterial({color:lightestbrown,side: THREE.BackSide, shininess:500});
//    var sky = new THREE.Mesh( skyGeo, skyMat );
//    scene.add( sky );
//    sphere_traj = new THREE.Mesh(
//        new THREE.BoxGeometry(1, 1, 1),
//        new THREE.MeshBasicMaterial({
//            color:0xffffff
//        })
//    );




    var dustTexture = new THREE.ImageUtils.loadTexture('images/dust.png');
    dustTexture.minFilter = THREE.LinearFilter;
    var particle;
    var dustGeometry = new THREE.Geometry();
    var sizes = [5, 4, 3, 2, 1];


    for (var i = 0; i < 200; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = Math.random() * 120 - 60;
        vertex.y = Math.random() * 120 - 60;
        vertex.z = Math.random() * 120 - 60;

        dustGeometry.vertices.push( vertex );
    }
    for(var i = 0; i < sizes.length; i++){
        var mat = new THREE.PointCloudMaterial( {
            size: sizes[i],
            map: dustTexture,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity:0.04
        });
        particle = new THREE.PointCloud( dustGeometry, mat );
        particle.rotation.x = Math.random() * 6;
        particle.rotation.y = Math.random() * 6;
        particle.rotation.z = Math.random() * 6;
        particle.position.y = 120;
        particle.position.z = -50;

        dust.push(particle);
        scene.add(particle);
    }



}
var caps_group = [];

function create_caps_group(){
    var caps_pos = [
        [-40, 85, 110],
        [-35,88, 110],
        [-37, 89, 112],
        [-34, 85, 111],
        [40, 85, -110],
        [35,88, -110],
        [34, 85, -111],
    ];
    for(var i = 0; i < 7; i++){
        caps_group.push(new Physijs.CylinderMesh(geo_caps, caps_material.ptp, 0.4, {friction : 1, restitution : 0.5}));
        caps_group[i].scale.set(capModelscale,capModelscale,capModelscale);
        caps_group[i].position.x = caps_pos[i][0];
        caps_group[i].position.y = caps_pos[i][1];
        caps_group[i].position.z = caps_pos[i][2];
        caps_group[i].rotation.y = Math.PI/(i+1);
        scene.add(caps_group[i]);
    }
}


function generateTexture() {

    var size = 150;
    // create canvas
   var canvas = document.createElement( 'canvas' );
    canvas.width = size;
    canvas.height = size;

    // get context
    var context = canvas.getContext( '2d' );

    // draw gradient

    context.rect( 0, 0, size, size );

    var gradient = context.createLinearGradient( 0, 0, size-50, size );

    gradient.addColorStop(0, '#ffffff'); // light blue
    gradient.addColorStop(1, 'transparent'); // dark blue
    context.fillStyle = gradient;
    context.fill();

    return canvas;

};var pointlightbar;
var hemiLight;
function create_lights(){



    // LIGHTS

    hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.3 );
    hemiLight.color.setHSL( 0.6, 1, 0.6 );
    hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
    hemiLight.position.set( 0, 500, 0 );
    scene.add( hemiLight );

    var dirLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    dirLight.color.setHSL( 0.1, 1, 0.95 );
    dirLight.position.set( 0, 1, 0 );
    dirLight.position.multiplyScalar( 50 );
    scene.add( dirLight );

    dirLight.castShadow = true;

    dirLight.shadowMapWidth = 2048;
    dirLight.shadowMapHeight = 2048;

    var d = 50;

    dirLight.shadowCameraLeft = -d;
    dirLight.shadowCameraRight = d;
    dirLight.shadowCameraTop = d;
    dirLight.shadowCameraBottom = -d;

    dirLight.shadowCameraFar = 3500;
    dirLight.shadowBias = -0.0001;
    dirLight.shadowDarkness = 0.35;

//    scene.add(ambientLight);

    var VlspotLight = new THREE.SpotLight( 0xffffff );
    VlspotLight.position.set( 0, 160, -110 );
    VlspotLight.target.position.set(0,50,-110);
    VlspotLight.target.updateMatrixWorld();
    VlspotLight.intensity = 0.3;

    scene.add( VlspotLight );

    var centralSpot = new THREE.SpotLight( 0xffffff );
    centralSpot.position.set( 0, 300, 0 );
    centralSpot.target.position.set(0,0,0);
    centralSpot.target.updateMatrixWorld();
    centralSpot.intensity = 0.5;

    scene.add( centralSpot );


    var tableSpot = new THREE.SpotLight( 0xffffff );
    tableSpot.position.set( 0, 0, 120 );
    tableSpot.target.position.set(0,20,-110);
    tableSpot.target.updateMatrixWorld();
    tableSpot.intensity = 1;

    scene.add( tableSpot );


    pointlightbar = new THREE.PointLight( brown, 2, 100 );
    pointlightbar.position.set( 3, 180, -580 );
//    pointlightbar.add( new THREE.Mesh( new THREE.SphereGeometry( 5, 16, 8 ), new THREE.MeshBasicMaterial( { color: 0xfcd625 } ) ) );
    pointlightbar.animeLight = function(){
        if(Math.random() > 0.9){
            this.intensity = 0.2;
        }else{
            this.intensity = 2;
        }
    };

    scene.add( pointlightbar );




    var PlspotLight = VlspotLight.clone();
    PlspotLight.position.set( 0, 200, 120 );
    PlspotLight.target.position.set(0,50,120);
    PlspotLight.target.updateMatrixWorld();
    PlspotLight.intensity = 0.7;



    scene.add( PlspotLight );


    var backspotLight = new THREE.SpotLight( 0xffffff );
    backspotLight.position.set( 0, 300, -20 );
    backspotLight.target.position.set(0,20,-200);
    backspotLight.target.updateMatrixWorld();
    backspotLight.intensity = 0.5;
    scene.add( backspotLight );

    backspotLight = new THREE.SpotLight( 0xffffff );
    backspotLight.position.set( 500, 300, -20 );
    backspotLight.target.position.set(200,20,-200);
    backspotLight.target.updateMatrixWorld();
    backspotLight.intensity = 0.5;
    scene.add( backspotLight );

    backspotLight = new THREE.SpotLight( 0xffffff );
    backspotLight.position.set( -500, 300, -20 );
    backspotLight.target.position.set(-200,20,-200);
    backspotLight.target.updateMatrixWorld();
    backspotLight.intensity = 0.5;
    scene.add( backspotLight );


    var whitelight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.4 );
    whitelight.color.setHex( 0xefefef );
    whitelight.groundColor.setHSL( 0.2,0.2,0.2 );
    whitelight.position.set( 0, 300, 0 );
    scene.add( whitelight );

    var back_whitelight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.4 );
    back_whitelight.color.setHex( 0xefefef );
    back_whitelight.position.set( 0, 300, -400 );
    scene.add( back_whitelight );

}
;
var caps_material, sticker_materials;
var mat_caps_foster;
var mat_caps_chimey;
var mat_caps_pelle;
var mat_caps_lef;
var mat_caps_chouffe;
var mat_caps_ptp;

var geo_caps, bottle_geo, bottle_mat;

function loadBottleTools(){
    var loader = new THREE.JSONLoader();

    sticker_materials = {
        'chimey':new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/beers/stickers/small/chimais.png'),side:2, transparent:true,opacity:1}),
        'foster':new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/beers/stickers/small/faustaire.png'),side:2, transparent:true,opacity:1}),
        'lef':new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/beers/stickers/small/lef.png'),side:2, transparent:true,opacity:1}),
        'pelle':new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/beers/stickers/small/pelle.png'),side:2, transparent:true,opacity:1}),
        'chouffe':new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/beers/stickers/small/shouffe.png'),side:2, transparent:true,opacity:1}),
        'ptp':new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/beers/stickers/small/ptp.png'),side:2, transparent:true,opacity:1})
    };
    sticker_materials.chimey.map.minFilter = THREE.LinearFilter;
    sticker_materials.foster.map.minFilter = THREE.LinearFilter;
    sticker_materials.lef.map.minFilter = THREE.LinearFilter;
    sticker_materials.pelle.map.minFilter = THREE.LinearFilter;
    sticker_materials.chouffe.map.minFilter = THREE.LinearFilter;
    sticker_materials.ptp.map.minFilter = THREE.LinearFilter;


    loader.load( 'model/3D/cap_light.json', function ( cap_geometry, cap_materials ) {
        loader.load( 'model/3D/bottle_light.json', function ( bottle_geometry, bottle_materials ) {

            bottle_geo = bottle_geometry;


            var bottle_material = bottle_materials[ 0 ];
            bottle_material.side = 2;
            bottle_material.shininess = 0;
            bottle_material.shading = 0;
            bottle_material.reflectivity = 0;
            bottle_material.color.setHex(0xffffff);

            bottle_mat = new THREE.MeshFaceMaterial( bottle_materials );

            geo_caps = cap_geometry;
//                geo_caps = new THREE.SphereGeometry(2, 32);

            // CHIMEY CAPS ----------------------------------------------
            var copychimey  = [];
            copychimey[0] = cap_materials[0].clone();
            copychimey[1] = cap_materials[0].clone();
            copychimey[0].side = 2;
            copychimey[1].side = 2;
            copychimey[1].map = 0;



            mat_caps_chimey = new THREE.MeshFaceMaterial(copychimey);
            mat_caps_chimey.materials[1].color =  new THREE.Color(beerColors.chimey);

            // FOSTER CAPS ----------------------------------------------
            var copyfoster  =[];
            copyfoster[0] = cap_materials[1].clone();
            copyfoster[1] = cap_materials[0].clone();
            copyfoster[0].side = 2;
            copyfoster[1].side = 2;
            copyfoster[1].map = 0;

            mat_caps_foster = new THREE.MeshFaceMaterial(copyfoster);
            mat_caps_foster.materials[1].color =  new THREE.Color(beerColors.foster);

            // Leff CAPS ----------------------------------------------
            var copylef  =[];
            copylef[0] = cap_materials[2].clone();
            copylef[1] = cap_materials[0].clone();
            copylef[0].side = 2;
            copylef[1].side = 2;
            copylef[1].map = 0;

            mat_caps_lef = new THREE.MeshFaceMaterial(copylef);
            mat_caps_lef.materials[1].color =  new THREE.Color(beerColors.lef);


            // Leff CAPS ----------------------------------------------
            var copypelle  =[];
            copypelle[0] = cap_materials[3].clone();
            copypelle[1] = cap_materials[0].clone();
            copypelle[0].side = 2;
            copypelle[1].side = 2;
            copypelle[1].map = 0;

            mat_caps_pelle = new THREE.MeshFaceMaterial(copypelle);
            mat_caps_pelle.materials[1].color =  new THREE.Color(beerColors.pelle);


            // Leff CAPS ----------------------------------------------
            var copychouffe  =[];
            copychouffe[0] = cap_materials[4].clone();
            copychouffe[1] = cap_materials[0].clone();
            copychouffe[0].side = 2;
            copychouffe[1].side = 2;
            copychouffe[1].map = 0;

            mat_caps_chouffe = new THREE.MeshFaceMaterial(copychouffe);
            mat_caps_chouffe.materials[1].color =  new THREE.Color(beerColors.chouffe);

            // PTP CAPS ----------------------------------------------
            var copyptp  =[];
            copyptp[0] = cap_materials[5].clone();
            copyptp[1] = cap_materials[2].clone();
            copyptp[0].side = 2;
            copyptp[1].side = 2;
            copyptp[1].map = 0;

            mat_caps_ptp = new THREE.MeshFaceMaterial(copyptp);
            mat_caps_ptp.materials[1].color =  new THREE.Color(beerColors.ptp);


            caps_material = {
                'chimey':mat_caps_chimey,
                'foster':mat_caps_foster,
                'lef':mat_caps_lef,
                'pelle':mat_caps_pelle,
                'chouffe':mat_caps_chouffe,
                'ptp':mat_caps_ptp
            };




            initScene();
        });
    });
}
;var socket = io.connect();
var canvas, ctx;
var Game;
var $plpart, $vlpart;
var CreateMutliplayerParty;

initializeParty = function(){

    var IO = {

        init: function() {
            IO.socket = socket;
            IO.bindEvents();
        },

        bindEvents : function() {
            IO.socket.on('connected', IO.onConnection);
            IO.socket.on('newGameCreated', IO.onNewGameCreated );
            IO.socket.on('playerJoinedRoom', IO.playerJoinedRoom );
            IO.socket.on('createNewPlayer', IO.createNewPlayer);
            IO.socket.on('startParty', IO.onStartParty);
            IO.socket.on('hostReady', Game.Player.hostReady);

            IO.socket.on('playerUpdateMove', Game.Host.playerUpdateMove);
            IO.socket.on('playerUpdateLaunch', Game.Host.playerUpdateLaunch);
            IO.socket.on('getEnemyInfo', Game.Host.showEnemy);
            IO.socket.on('enemyChooseBottle', Game.Host.enemyChooseBottle);

            IO.socket.on('enemyCaps', Game.Host.enemyCaps);
            IO.socket.on('enemyMessage', Game.Host.enemyMessage);

            IO.socket.on('playerAskReset', Game.Host.playerAskReset);
            IO.socket.on('playerAskQuit', Game.Host.playerAskQuit);

            IO.socket.on('getHostInfo', Game.Player.getHostInfo);
            //Display errors
            IO.socket.on('error', IO.error );
        },


        onConnection : function(data) {
            Game.socketId = IO.socket.socket.sessionid;
        },

        onNewGameCreated : function(data){
            Game.Host.gameInit(data);
        },

        playerJoinedRoom : function(data) {
            Game[Game.role].updateWaitingScreen(data);
        },

        createNewPlayer : function(data){
//            console.log(data);
        },

        onStartParty: function(data){
            Game[Game.role].showPartyScreen(data);
        },

        error : function(data) {
            alert(data.message);
        }
    };

    Game = {
        gameId : 0,
        role : '',
        socketId : '',
        partyOn: false,
        nbPlayers: 0,
        hostReady: false,
        init : function(){
            Game.cacheScreens();
            Game.bindEvents();
            Game.showIntroTpl();
        },

        bindEvents: function () {
            // Host
//            Game.$doc.on('click', '#btnCreateGame', Game.Host.onCreateClick);
//            Game.$doc.on('click', '#btnStartParty',Game.Host.onStartPartyClick);

            // Player
//            Game.$doc.on('click', '#btnJoinGame', Game.Player.onJoinClick);
//            Game.$doc.on('click', '#btnStart',Game.Player.onPlayerStartClick);

        },

        cacheScreens : function(){
            Game.$doc = $(document);

            // Templates
            Game.$area = $('#game-area');
            Game.$tplIntroScreen = $('#intro-screen-template').html();
            Game.$tplNewGame = $('#new-game-screen-template').html();
            Game.$tplJoinGame = $('#join-game-template').html();
            Game.$tplGamerScreen = $('#gamer-screen-template').html();
            Game.$tplPartyScreen = $('#party-screen-template').html();
        },
        showIntroTpl : function(){
//            Game.$area.html(Game.$tplIntroScreen);
//            console.log('Intro screen displayed');
        },




        // HOST -------------------------------------------------------------------------------------------------------------------

        Host : {
            players : [],
            numPlayersInRoom : 0,
            resetPlayer : 0,
            onCreateClick: function () {
                IO.socket.emit('hostCreateNewGame');
            },

            gameInit: function (data) {
                Game.gameId = data.gameId;
                Game.socketId = data.socketId;
                Game.Player.socketId = data.socketId;

                Game.role = 'Host';
                Game.Host.numPlayersInRoom = 0;
                Game.Host.displayNewGameScreen();
            },

            displayNewGameScreen : function() {
                // Fill the game screen
//                Game.$area.html(Game.$tplNewGame);

                // Show the gameId on screen
                $('#room-code').val(Game.gameId);

                // Display the URL on screen
                $('#room-code-lk').val(window.location.href.replace('www.', '')+'#'+Game.gameId);
                $('.wait-section .wt-party-code').addClass('act').find('span').text(Game.gameId);

                $('#host-part').addClass('rdy');

                $('#multiplayer').addClass('hosting');
//                Game.$area.append(Game.$tplJoinGame);
//                $('#inputGameId').attr('value',Game.gameId).prop('type', 'hidden');
            },

            updateWaitingScreen: function(data) {
                // Update host screen
                $('#playersWaiting').append('<p>Player ' + data.playerName + ' joined the game.</p>');
                // Store the new player's data on the Host.
                Game.Host.players.push(data);

                // Increment the number of players in the room
                Game.Host.numPlayersInRoom += 1;

                Game.hostReady = true;

                if (Game.Host.numPlayersInRoom > 1) {

                    if(Interface.curIndex < 3){
                        Interface.navigate(3);
                    }
                    IO.socket.emit('hostRoomReady', {gameId : Game.gameId, hostReady: Game.hostReady});
//                    IO.socket.emit('playerJoinGame', {gameId : Game.gameId, hostReady: Game.hostReady, socketId:null});

                }
            },

            onStartPartyClick: function(){
                IO.socket.emit('hostStartParty', {gameId : Game.gameId, socketId: Game.Player.socketId,  hostPlayer : Game.Host.players});
            },
            showPartyScreen: function(){
//                var i = 0;

//                Game.partyOn = true;
//                CAPS.launchGame();

//                IO.socket.emit('hostSendInfo', {gameId : Game.gameId, name : Game.Player.name, playerID:Game.socketId});
            },
            sendPlayerInfo : function(){
                Game.Player.name = $('#input-player-name').val() || 'Anonymous';
                var data = {
                    gameId : Game.gameId,
                    name : Game.Player.name,
                    caps : Game.Player.caps,
                    playerID:Game.socketId
                };
                IO.socket.emit('hostSendInfo', data);

                Game.Player.ready = true;

                $('.wait-section .wt-party-code').removeClass('act');

                if(Game.Enemy.ready)
                    Interface.navigate(6);
                else
                    Interface.navigate(5);
            },
            showEnemy:function(data){
                if(Game.role == 'Host' && Game.Player.socketId != data.playerID){
                    Game.Enemy.name = data.name;
                    Game.Enemy.id = data.playerID;
//                    $plpart.find('h3').text(Game.Player.name);
//                    $vlpart.find('h3').text(Game.Enemy.name);

                }
            },

            //GAMING

            playerUpdateMove:function(data){
                if(data.playerID == Game.Enemy.id){
                    Viensla.livePos.x = -data.pos.x;
                    Viensla.livePos.y = data.pos.y;
                    Viensla.livePos.z = data.pos.z;
                    Viensla.liveVector = new THREE.Vector3(Viensla.livePos.x,Viensla.livePos.y, Viensla.livePos.z);
                }
            },

            playerUpdateLaunch:function(data){
                if(data.playerID == Game.Enemy.id){
                    Viensla.livePos.x = -data.shot.x;
                    Viensla.livePos.y = data.shot.y;
                    Viensla.livePos.z = data.shot.z;
                    Viensla.liveVector = new THREE.Vector3(Viensla.livePos.x,Viensla.livePos.y, Viensla.livePos.z);
                    Viensla.shootCaps(data.shot);
                }
            },
            enemyChooseBottle : function(data){
                if(data.playerID == Game.Enemy.id){
                    Viensla.changeBottle(data.bottle);
                }
            },
            enemyCaps : function(data){
                if(data.playerID == Game.Enemy.id){
                    Player.drink();
                }
            },
            enemyMessage : function(data){
                if(data.playerID == Game.Enemy.id){
                    Interface.textoBox.showTexto(data.im);
                }
            },
            playerAskReset: function(data){
                Game.Host.resetPlayer++;


                if(Game.Host.resetPlayer > 1){
                    Game.Host.resetPlayer = 0;
                    Party.resetParty();
                }else{
                    if(data.playerID == Game.Enemy.id)
                        TweenMax.to($('#reset-party-c h4.again'), 0.4, {scale:1, opacity:1, height:30, lineHeight:'30px'});
                }
            },
            playerAskQuit: function(data){
                if(data.playerID == Game.Enemy.id){
                    TweenMax.to($('#reset-party-c h4.quit'), 0.4, {scale:1, opacity:1, height:30, lineHeight:'30px'});
                    TweenMax.to($('#reset-party-c #bt-reset-party'), 0.4, {scale:0, opacity:0});
                    TweenMax.to($('#reset-party-c #bt-quit-reset'), 0.4, {y: -120});
                }

            }
        },
        // PlAYERS -------------------------------------------------------------------------------------------------------------------

        Player : {
            hostSocketId: '',
            name: '',
            socketId : '',
            caps : 'ptp',
            ready:false,
            onJoinClick: function () {
                // Display the Join Game HTML on the player's screen.
                Game.$area.html(Game.$tplJoinGame);
            },
            onPlayerStartClick: function() {
                // collect data to send to the server
                var data = {
                    gameId : Game.role == 'Host' ? Game.gameId : ($('#join-code').val()),
                    playerName : Game.role == 'Host' ? 'Host' : 'Player',
                    x: 0,
                    y: 0
                };

                Interface.hdr.hideBt();
                CAPS.solo = false;

                // Set the appropriate properties for the current player.
                if(Game.role == 'Host'){
                    if(Game.Host.numPlayersInRoom == 1) {
                        Interface.navigate(3);
                    }else{
                        Interface.navigate(2);
                    }
                }else{
                    Game.role = 'Player';
                }

                IO.socket.emit('playerJoinGame', data);

//                Game.Player.name = data.playerName;

            },

            updateWaitingScreen : function(data) {
                if(IO.socket.socket.sessionid === data.socketId){
                    Game.role = 'Player';
                    Game.gameId = data.gameId;
                    Game.Player.socketId = data.socketId;
                    $('#playerWaitingMessage').text('Joined Game ' + data.gameId + '. Please wait for game to begin.');

                    if(data.hostReady && Interface.curIndex < 3){
                        Interface.navigate(3);
                    }else{
                        Interface.navigate(2);
                    }
                }else if(data.hostReady && Interface.curIndex < 3){
                    Interface.navigate(3);
                }
            },
            hostReady : function(data){
                if(IO.socket.socket.sessionid != data.socketId){
                    Game.Player.updateWaitingScreen({hostReady: true, socketId : null});
                }
            },
            showPartyScreen: function(data){

//
//                var i = 0;
//                Game.$area.html(Game.$tplPartyScreen);
//                Game.partyOn = true;
//                Game.Host.players = data.hostPlayer;
//                Game.$area.html($('#caps-game'));
//
//                CAPS.launchGame();

            },
            getHostInfo:function(data){
                if(Game.Player.socketId != data.playerID){
                    Game.Enemy.name = data.name;
                    Game.Enemy.id = data.playerID;
                    Game.Enemy.caps = data.caps;

                    Game.Enemy.ready = true;

                    if(Game.Player.ready)
                        Interface.navigate(6);

                }
            },

            sendPlayerInfo : function(){
                var data = {
                    gameId : Game.gameId,
                    name : Game.Player.name,
                    caps : Game.Player.caps,
                    playerID:Game.Player.socketId
                };

                IO.socket.emit('hostSendInfo', data);

                Game.Player.ready = true;
                
                if(Game.Enemy.ready)
                    Interface.navigate(6);
                else
                    Interface.navigate(5);
            },

            playerMoving : function(data){
                IO.socket.emit('playerMove', {
                    playerName: Game.Player.name,
                    playerID:Game.Player.socketId,
                    gameId: Game.gameId,
                    pos:data
                });
            },
            playerLaunch : function(data){
                IO.socket.emit('playerShoot', {
                    playerName: Game.Player.name,
                    playerID:Game.Player.socketId,
                    gameId: Game.gameId,
                    shot:data
                });
            },
            playerChooseBottle : function(bottle){
                IO.socket.emit('playerChooseBottle', {
                    gameId: Game.gameId,
                    playerID:Game.Player.socketId,
                    bottle: bottle
                });
            },
            playerCaps : function(){
                IO.socket.emit('playerCaps', {
                    gameId: Game.gameId,
                    playerID:Game.Player.socketId
                });
            },
            playerMessage : function(i){
                IO.socket.emit('playerMessage', {
                    gameId: Game.gameId,
                    playerID:Game.Player.socketId,
                    im:i
                });
            },
            playerReset : function(){
                IO.socket.emit('playerReset', {
                    gameId: Game.gameId,
                    playerID:Game.Player.socketId
                });
            },
            playerQuit : function(){
                IO.socket.emit('playerQuit', {
                    gameId: Game.gameId,
                    playerID:Game.Player.socketId
                });
            }
        },
        Enemy : {
            id:null,
            name :'PayeTaPinte',
            caps :'ptp',
            ready : false
        }
    };

    IO.init();
    Game.init();
};
;

var Player = {
    score : 0,
    launched : 0,
    isPlaying : true,
    totalLaunched : 0,
    lives : 0,
    drunked : 1,
    capmat : null,
    stickermat : null,
    outline : '',
    pos : {x:0, y:50, z:112},
    sticker:null,
    initialize : function(){
        if(!this.capmat){
            this.capmat = caps_material.chimey.clone();
        }
        if(!this.stickermat){
            this.stickermat = new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/beers/stickers/chimais.png'),side:2, transparent:true,opacity:1});
        }
        var bottle_material = new THREE.MeshBasicMaterial( {  color:Player.capmat.materials[1].color, side:2 } )
        bottle_geo.buffersNeedUpdate = true;
        bottle_geo.uvsNeedUpdate = true;

        this.bottle = new Physijs.CylinderMesh(
            bottle_geo,
            bottle_material,
            0, {friction : 0.1, restitution : 0.1}
        );
        this.bottle.scale.set(10,12,10);
        this.bottle.castShadow = false;
        this.bottle.receiveShadow = true;
        this.bottle.name = 'plBottle';


        //Add Wall to level
        var transparent_side =  new THREE.MeshBasicMaterial({
            color:Player.capmat.materials[1].color,
            transparent:true,
            opacity:0
        });


        var sticker_materials = [
            transparent_side,
            transparent_side,
            transparent_side,
            transparent_side,
            Player.stickermat,
            transparent_side
        ];
        this.sticker = new Physijs.BoxMesh(
            new THREE.BoxGeometry(0.8, 1, 0.1),
            new THREE.MeshFaceMaterial(sticker_materials),
            0
        );
        this.sticker.position.x = 0;
        this.sticker.position.y = -0.3;
        this.sticker.position.z = 0.50;

        var bot_sh_mat = new THREE.MeshBasicMaterial({ color:shadowColors[Game.Player.caps],  side:2 });
        var sh_bottle = new Physijs.CylinderMesh(
            bottle_geo,
            bot_sh_mat,
            0, {friction : 0.1, restitution : 0.1}
        );
        sh_bottle.position.x = -0.03;
//        sh_bottle.position.y = -0.05;
        sh_bottle.position.z = 0.01;


        var neck = new Physijs.CylinderMesh(
            new THREE.CylinderGeometry(2, 2, 1, 6, 6 ),
            new THREE.MeshLambertMaterial({
                color: 0xffffff,
                transparent : true,
                opacity:0
            })
        ,0);

        neck.position.x = 0;
        neck.position.y = tablefootSurfaceDim[1] +tablefootSurfaceDim[1]/2+45;
        neck.position.z = 110;

        scene.add(neck);

        Player.bottle.add(sh_bottle);
        Player.bottle.add(Player.sticker);

        Player.place({x:0, z:110});
        Player.generateBottle();

    },
    changeSticker:function(){
        var transparent_side =  new THREE.MeshBasicMaterial({
            transparent:true,
            opacity:0
        });
        var sticker_materials = [
            transparent_side,
            transparent_side,
            transparent_side,
            transparent_side,
            Player.stickermat,
            transparent_side
        ];
        this.sticker.material = new THREE.MeshFaceMaterial(sticker_materials);
    },
    place : function(axis){
        this.bottle.position.y = tablefootSurfaceDim[1] +tablefootSurfaceDim[1]/2+23;
        this.bottle.position.x = axis.x;
        this.bottle.position.z = axis.z;
    },
    generateBottle : function(){
        scene.add(Player.bottle);
    },
    generateCaps : function(){
        this.bottlecaps = new Physijs.CylinderMesh(geo_caps, Player.capmat, 0.3,  {friction : 0, restitution : 1});
        this.bottlecaps.castShadow = true;
        this.bottlecaps.receiveShadow = true;

        this.bottlecaps.scale.set(capModelscale,capModelscale,capModelscale);
        this.bottlecaps.rotation.x = Math.PI;

        this.bottlecaps.position.y = Player.bottle.position.y + 23;
        this.bottlecaps.position.x = Player.bottle.position.x;
        this.bottlecaps.position.z = Player.bottle.position.z;




        var sub = new Physijs.CylinderMesh(
            new THREE.CylinderGeometry(1.5, 1.5, 0, 32, 32 ),
            new THREE.MeshLambertMaterial({
                color: Player.capmat.materials[1].color,
                transparent : true,
                opacity:1
            })
        ,0);

        sub.position.x = 0;
        sub.position.y = 0.3;
        sub.position.z = 0;

        var collisionSphere = new Physijs.CylinderMesh(
            new THREE.CylinderGeometry(3, 3, 1, 32, 32 ),
            new THREE.MeshLambertMaterial({
                transparent : true,
                opacity:0
            })
            ,0.1);
        this.bottlecaps.add(collisionSphere);


        this.bottlecaps.add(sub);
//        this.bottlecaps.add(neck);

        this.bottlecaps.name = 'plCap';
        this.bottlecaps.collided = false;

        scene.add(Player.bottlecaps);
    },

    drink : function(){
        Party.vlcaps();
    }

}

var perfectShoot = [
    {
        y : 130,
        x  : -2,
        pwr : 35
    },
    {
        y : 110,
        x  : -1,
        pwr : 75
    },
    {
        y : 130,
        x  : 2,
        pwr : 35
    },
    {
        y : 180,
        x  : -2,
        pwr : 21
    }
];


var Viensla = {
    score : 0,
    launched : 0,
    totalLaunched : 0,
    isPerfect : false,
    imprecision : 16,
    isPlaying : false,
    isShooting : false,
    lives : 0,
    capmat : null,
    livePos : {x:0,y:0,z: -90},
    liveVector : null,
    initialize : function(){

        if(!this.capmat){
            this.capmat = caps_material.ptp.clone();
        }

        var bottle_material = Physijs.createMaterial(
            new THREE.MeshBasicMaterial( {  color: Viensla.capmat.materials[1].color,  shininess: 10,side:2 } )
        );

        this.bottle = new Physijs.CylinderMesh(
            bottle_geo,
            bottle_material,
            0, {friction : 0.1, restitution : 0.1}
        );
        this.bottle.scale.set(10,12,10);
        this.bottle.castShadow = false;
        this.bottle.receiveShadow = true;
        this.bottle.name = 'vlBottle';

        var neck = new Physijs.CylinderMesh(
            new THREE.CylinderGeometry(2, 2, 1, 6, 6 ),
            new THREE.MeshLambertMaterial({
                color: 0xffffff,
                transparent : true,
                opacity:0
            })
            ,0);

        neck.position.x = 0;
        neck.position.y = tablefootSurfaceDim[1] +tablefootSurfaceDim[1]/2+45;
        neck.position.z = -110;

        scene.add(neck);


        Viensla.place({x:0, z:-110});
        Viensla.generateBottle();

//        Viensla.generateCursor();

    },
    place : function(axis){
        this.bottle.position.y = tablefootSurfaceDim[1] +tablefootSurfaceDim[1]/2+23;
        this.bottle.position.x = axis.x;
        this.bottle.position.z = axis.z;
    },
    generateBottle : function(){
        scene.add(Viensla.bottle);
//        Viensla.generateCaps();
    },
    generateCursor : function(){

        this.cursor = new THREE.Mesh(
            new THREE.SphereGeometry( 2, 32, 32 ),
            new THREE.MeshBasicMaterial( {  color: Viensla.capmat.materials[1].color,  shininess: 10,side:2 }));
        this.cursor.position.y = Viensla.livePos.y;
        this.cursor.position.x = Viensla.livePos.x;
        this.cursor.position.z = Viensla.livePos.z;

        scene.add(Viensla.cursor);
    },
    generateCaps : function(){

        this.bottlecaps = new Physijs.CylinderMesh(geo_caps, Viensla.capmat,  0.3, {friction : 0, restitution : 1});
        this.bottlecaps.castShadow = true;
        this.bottlecaps.receiveShadow = true;

        this.bottlecaps.scale.set(capModelscale,capModelscale,capModelscale);
        this.bottlecaps.rotation.x = Math.PI;

        this.bottlecaps.position.y = Viensla.bottle.position.y + 23;
        this.bottlecaps.position.x = Viensla.bottle.position.x;
        this.bottlecaps.position.z = Viensla.bottle.position.z;


        var neck = new Physijs.CylinderMesh(
            new THREE.CylinderGeometry(2, 2, 0.4, 10, 10 ),
            Physijs.createMaterial(
                new THREE.MeshLambertMaterial({
                    color: 0xffffff,
                    transparent : true,
                    opacity:0
                }))
            ,0);
        neck.position.x = 0;
        neck.position.y = 1;
        neck.position.z = 0;

        var sub = new Physijs.CylinderMesh(
            new THREE.CylinderGeometry(1.5, 1.5, 0, 32, 32 ),
            new THREE.MeshLambertMaterial({
                color: Viensla.capmat.materials[1].color,
                transparent : true,
                opacity:1
            })
            ,0);
        sub.position.x = 0;
        sub.position.y = 0.3;
        sub.position.z = 0;

        var collisionSphere = new Physijs.CylinderMesh(
            new THREE.CylinderGeometry(3, 3, 1, 32, 32 ),
            new THREE.MeshLambertMaterial({
                transparent : true,
                opacity:0
            })
            ,0.1);
        this.bottlecaps.add(collisionSphere);


        this.bottlecaps.add(sub);
//        this.bottlecaps.add(neck);

        this.bottlecaps.name = 'vlCap';
        this.bottlecaps.collided = false;

        scene.add(Viensla.bottlecaps);
    },
    shootCaps : function(data){
        Viensla.isPlaying = true;
        Player.isPlaying = false;

        var  launchVector = new THREE.Vector3,
            _vector = new THREE.Vector3,
            _angVector = new THREE.Vector3,
            _posVector = new THREE.Vector3;

        globalDirection = -1;

        _posVector.set(Viensla.livePos.x,Viensla.livePos.y, Viensla.livePos.z);

        create_caps('vl');

        playedCaps.position.copy(_posVector);

        playedCaps.__dirtyPosition = true;
        playedCaps.floating = false;

        _vector.set( 1, 1, 1 );
        _angVector.set( -data.rdms[0], data.rdms[1], data.rdms[2]);
        playedCaps.setAngularFactor( _vector );

        playedCaps.setLinearFactor( _vector );
        launchVector.set(1,1, -data.pwr * playerstrengh * globalDirection);
        playedCaps.setLinearVelocity( launchVector );
        playedCaps.setAngularVelocity( _angVector );

        playedCaps = null;

        Viensla.totalLaunched++;

        setTimeout(function(){
            Viensla.isPlaying = false;
            Player.isPlaying = true;
            Party.setTurn();
        }, 500);


    },
    launchCaps : function(){
        Viensla.isPlaying = true;
        Player.isPlaying = false;

        var  launchVector = new THREE.Vector3,
            _vector = new THREE.Vector3,
            _angVector = new THREE.Vector3,
            _posVector = new THREE.Vector3,
            randomY = Math.random()*20 + 80,
            randomX = Math.random()*10 - 5,
            shot = Math.round(Math.random()*3);


        shot = perfectShoot[shot];

        globalDirection = -1;

        power = Math.round(shot.pwr +  (Math.random()-0.5) * Viensla.imprecision);

        randomY = Math.round(shot.y +  (Math.random()-0.5) * Viensla.imprecision);

        randomX = Math.round(shot.x +  (Math.random()-0.5) * Viensla.imprecision);

        if(Viensla.isPerfect){
            var alea = Math.round(Math.random()*3);
            randomY = perfectShoot[alea].y;
            randomX  = perfectShoot[alea].x;
            power = perfectShoot[alea].pwr;
        }

        randomY += 25;


        _posVector.set(randomX,randomY, playerDistance*globalDirection + 40);

//        _posVector.set(Viensla.livePos.x,Viensla.livePos.y, Viensla.livePos.z);

        create_caps('vl');

        playedCaps.position.copy(_posVector);
        playedCaps.__dirtyPosition = true;

        playedCaps.floating = false;

        _vector.set( 1, 1, 1 );
        _angVector.set( Math.random()*10, Math.random()*10, Math.random()*20);
        playedCaps.setAngularFactor( _vector );

        playedCaps.setLinearFactor( _vector );
        launchVector.set(1,-3, - power * strengh * globalDirection);
        playedCaps.setLinearVelocity( launchVector );
        playedCaps.setAngularVelocity( _angVector );

        playedCaps = null;

    },

    changeBottle:function(bottle){
        $vlpart.removeClass('chimey foster ptp lef pelle chouffe');
        $vlpart.addClass(bottle);
        $('#versus-bar .vl').addClass(bottle);

        Viensla.capmat = caps_material[bottle];
        Viensla.bottle.material.color = Viensla.capmat.materials[1].color;

    }


}




;var extSnd = '.mp3';
var path = 'assets/sounds/';
var Snds = {
    ambiance : new Audio(path+'ambiance'+extSnd),
    simpletap1 : new Audio(path+"choc_simple_1"+extSnd),
    simpletap2 : new Audio(path+"choc_simple_2"+extSnd),
    simpletap3 : new Audio(path+"choc_simple_3"+extSnd),
    clink : new Audio(path+"clink"+extSnd),
    capcap : new Audio(path+"caps"+extSnd),
    open : new Audio(path+"open"+extSnd),
    pschit2 : new Audio(path+"pschit_2"+extSnd),
    win : new Audio(path+"you-win"+extSnd),
    lose: new Audio(path+"you-lose"+extSnd),
    vibreur: new Audio(path+"vibreur"+extSnd),
    clairon: new Audio(path+"fail"+extSnd),
    applause: new Audio(path+"applause"+extSnd),
    perfect: new Audio(path+"perfect"+extSnd),

    mute : false,
    init : function(){
        var $mtbt = $('#mute');

        $mtbt.on('click', function(){
            $(this).toggleClass('off');
            Snds.mute = !Snds.mute;
            Snds.ambiance.muted = Snds.mute;
            Snds.applause.muted = Snds.mute;
            Snds.clairon.muted = Snds.mute;
            Snds.vibreur.muted = Snds.mute;
        });

        Snds.simpletap1.volume=0.4;
        Snds.perfect.volume=0.4;
        Snds.simpletap2.volume=0.4;
        Snds.simpletap3.volume=0.4;
        Snds.clink.volume=0.4;
        Snds.vibreur.volume=0.5;

        Snds.ambiance.addEventListener('ended', function() {
            this.currentTime = 0;
            Snds.ambiance.play();
        }, false);

        Snds.ambiance.load();

        Snds.playSd = function(sd){
            if(!Snds.mute){
                Snds[sd].currentTime = 0;
                Snds[sd].play();
                Snds[sd].isPlaying = true;
            }
        };

        Snds.fadeSd = function(sd, to){
            var interval;

            if(typeof to == 'undefined')
                to = 0;

            if(!Snds[sd].isFading){
                Snds[sd].isFading = true;

                if(!Snds.mute){
                    interval = setInterval(function(){
                        if(Snds[sd].volume > to+0.05){
                            Snds[sd].volume -= 0.05;
                        }else{
                            Snds[sd].volume = to;
                            clearInterval(interval);
                            Snds[sd].isFading = false;
                        }
                    }, 200);
                }
            }
        };

        Snds.fadInSd = function(sd){
            var interval;

            if(!Snds[sd].isFading){
                Snds[sd].isFading = true;
                Snds[sd].volume = 0;
                Snds[sd].play();

                if(!Snds.mute){
                    interval = setInterval(function(){
                        if(Snds[sd].volume < 0.3){
                            Snds[sd].volume += 0.05;
                        }else{
                            clearInterval(interval);
                            Snds[sd].isFading = false;
                        }
                    }, 300);
                }
            }
        };

    }
};

});