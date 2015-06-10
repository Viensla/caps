/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.cssanimations=function(){return F("animationName")},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

var BD = {
    init: function () {
        var info = this.searchString(this.dataBrowser) || {identity:"unknown"}
        this.browser = info.identity;
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "an unknown version";
        this.platformInfo = this.searchString(this.dataPlatform) || this.dataPlatform["unknown"];
        this.platform = this.platformInfo.identity;
        var browserInfo = this.urls[this.browser];
        if (!browserInfo) {
            browserInfo = this.urls["unknown"];
        } else if (browserInfo.platforms) {
            var info = browserInfo.platforms[this.platform];
            if (info) {
                browserInfo = info;
            }
        }
        this.urls = browserInfo;
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++){
            var info = data[i];
            var dataString = info.string;
            var dataProp = info.prop;
            this.versionSearchString = info.versionSearch || info.identity;
            if (dataString) {
                if (dataString.indexOf(info.subString) != -1) {
                    var shouldExclude = false;
                    if (info.excludeSubstrings) {
                        for (var ii = 0; ii < info.excludeSubstrings.length; ++ii) {
                            if (dataString.indexOf(info.excludeSubstrings[ii]) != -1) {
                                shouldExclude = true;
                                break;
                            }
                        }
                    }
                    if (!shouldExclude)
                        return info;
                }
            } else if (dataProp) {
                return info;
            }
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) {
            return;
        }
        return parseFloat(dataString.substring(
            index + this.versionSearchString.length + 1));
    },
    dataBrowser: [
        { string: navigator.userAgent,
            subString: "Chrome",
            excludeSubstrings: ["OPR/"],
            identity: "Chrome"
        },
        { string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        { string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        { string: navigator.vendor,
            subString: "Opera",
            identity: "Opera"
        },
        { string: navigator.userAgent,
            subString: "Android",
            identity: "Android"
        },
        { string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        { string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        { string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        { string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {// for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        { string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        { // for IE11+
            string: navigator.userAgent,
            subString: "Trident",
            identity: "Explorer",
            versionSearch: "rv"
        },
        { string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        { // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataPlatform: [
        { string: navigator.platform,
            subString: "Win",
            identity: "Windows",
            browsers: [
                {url: "http://www.mozilla.com/en-US/firefox/new/", name: "Mozilla Firefox"},
                {url: "http://www.opera.com/", name: "Opera"},
                {url: "http://www.google.com/chrome/", name: "Google Chrome"},
                {url: "http://www.microsoft.com/ie", name: "Internet Explorer"}
            ]
        },
        { string: navigator.platform,
            subString: "Mac",
            identity: "Mac",
            browsers: [
                {url: "http://www.mozilla.com/en-US/firefox/new/", name: "Mozilla Firefox"},
                {url: "http://www.google.com/chrome/", name: "Google Chrome"},
                {url: "http://www.opera.com/", name: "Opera"},
                {url: "http://www.webkit.org/", name: "WebKit Developer Builds"}
            ]
        },
        { string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod",
            browsers: [
                {url: "http://www.mozilla.com/en-US/firefox/new/", name: "Mozilla Firefox"}
            ]
        },
        { string: navigator.platform,
            subString: "iPad",
            identity: "iPad",
            browsers: [
                {url: "http://www.mozilla.com/en-US/firefox/new/", name: "Mozilla Firefox"}
            ]
        },
        { string: navigator.userAgent,
            subString: "Android",
            identity: "Android",
            browsers: [
                {url: "https://market.android.com/details?id=org.mozilla.firefox", name: "Mozilla Firefox"},
                {url: "https://market.android.com/details?id=com.opera.browser", name: "Opera Mobile"}
            ]
        },
        { string: navigator.platform,
            subString: "Linux",
            identity: "Linux",
            browsers: [
                {url: "http://www.mozilla.com/en-US/firefox/new/", name: "Mozilla Firefox"},
                {url: "http://www.google.com/chrome/", name: "Google Chrome"},
                {url: "http://www.opera.com/", name: "Opera"}
            ]
        },
        { string: "unknown",
            subString: "unknown",
            identity: "unknown",
            browsers: [
                {url: "http://www.mozilla.com/en-US/firefox/new/", name: "Mozilla Firefox"},
                {url: "http://www.google.com/chrome/", name: "Google Chrome"},
                {url: "http://www.opera.com/", name: "Opera"},
                {url: "http://www.webkit.org/", name: "WebKit Developer Builds"}
            ]
        }
    ],
    /*
     upgradeUrl:         Tell the user how to upgrade their browser.
     troubleshootingUrl: Help the user.
     platforms:          Urls by platform. See dataPlatform.identity for valid platform names.
     */
    urls: {
        "Chrome": {
            upgradeUrl: "http://www.google.com/support/chrome/bin/answer.py?answer=95346",
            troubleshootingUrl: "http://www.google.com/support/chrome/bin/answer.py?answer=1220892"
        },
        "Firefox": {
            upgradeUrl: "http://www.mozilla.com/en-US/firefox/new/",
            troubleshootingUrl: "https://support.mozilla.com/en-US/kb/how-do-i-upgrade-my-graphics-drivers"
        },
        "Opera": {
            platforms: {
                "Android": {
                    upgradeUrl: "https://market.android.com/details?id=com.opera.browser",
                    troubleshootingUrl: "http://www.opera.com/support/"
                }
            },
            upgradeUrl: "http://www.opera.com/",
            troubleshootingUrl: "http://www.opera.com/support/"
        },
        "Android": {
            upgradeUrl: null,
            troubleshootingUrl: null
        },
        "Safari": {
            platforms: {
                "iPhone/iPod": {
                    upgradeUrl: "http://www.apple.com/ios/",
                    troubleshootingUrl: "http://www.apple.com/support/iphone/"
                },
                "iPad": {
                    upgradeUrl: "http://www.apple.com/ios/",
                    troubleshootingUrl: "http://www.apple.com/support/ipad/"
                },
                "Mac": {
                    upgradeUrl: "http://www.webkit.org/",
                    troubleshootingUrl: "http://www.webkit.org/blog/919/webgl-draft-specification-now-available/"
                }
            },
            upgradeUrl: "http://www.webkit.org/",
            troubleshootingUrl: "http://www.webkit.org/blog/919/webgl-draft-specification-now-available/"
        },
        "Explorer": {
            upgradeUrl: "http://www.microsoft.com/ie",
            troubleshootingUrl: "http://msdn.microsoft.com/en-us/library/ie/bg182648(v=vs.85).aspx"
        },
        "unknown": {
            upgradeUrl: null,
            troubleshootingUrl: null
        }
    }
};

$(function(){
    var $loader = $('#loader'),
        $tinyLoader = null,
        $wrapper = $('#wrapper'),
        $ajaxC = $('#site-content');
    var parts = ['welcome', 'multi', 'wait', 'pickname', 'pickcaps', 'wait', 'gamearea'];
    var i = 0,
        step = 1,
        loadFinish = false,
        delay = 450;
    var loaderInterval,
        tinyLoadInterval;
    var loadImg = new Image();
    var touch = Modernizr.touch;

    console.log(touch);

    var hash = location.hash ? location.hash.replace('#', '') : null;
    console.log(hash);

    var curUrl = location.href.replace(location.hash,'');

    loadImg.src = "images/sprites/sprite_load.png";



    $(loadImg).load(function(){
        loaderInterval = setInterval(function(){
            $loader.attr('class', 'loadIn'+step);
            step = step < 5 ? step+1 : 1;
            setTimeout(function(){
                if(loadFinish && step == 1){
                    $('#loading').fadeOut();
                    clearInterval(loaderInterval);
                }
            }, 10)

        }, delay);
//        loadPart();
    });

    if(touch){
        $.ajax({
            url:curUrl + 'mobile.html',
            success : function(data){
                $ajaxC.append(data);
                $('#touch-screen').css({height:window.innerHeight, width:window.innerWidth, lineHeight: window.innerHeight+'px'});
                setTimeout(function(){ loadFinish = true;}, 1);
            }
        });
    }else{
        checkWebGL();
    }


    function loadPart(){
        $.ajax({
            url:curUrl + parts[i] +'.html',
            success : function(data){
                $ajaxC.append(data);
                i++;
                if(i == parts.length){
                    Interface.init();

                    if(hash){
                        Interface.initMulti(hash);
                    }
                    setTimeout(function(){
                        loadFinish = true;
                        $tinyLoader = $('.tiny-loader div');
                        tinyLoadInterval = setInterval(function(){
                            $tinyLoader.attr('class', 'loadIn'+step);
                            step = step < 5 ? step+1 : 1;
                        }, delay);
                    }, 1);
                }else{
                    loadPart();
                }
            }
        });
    };


    function checkWebGL() {
        var b = BD;
        b.init();
        var canvas = document.getElementById("iswebgl");
        var gl = false;
        canvas.width = 1;
        canvas.height = 1;

        var experimental = false;

        try { gl = canvas.getContext("webgl"); }
        catch (x) { gl = null; }

        if (gl == null) {
            try { gl = canvas.getContext("experimental-webgl"); experimental = true; }
            catch (x) { gl = null; }
        }

        $('body').addClass(b.browser.toLowerCase());

        $(canvas).remove();

        if (gl) {
            console.log("WebGL presents !");
            loadPart();
        } else{
            // Do we know this browser?
            if (b.browser != "unknown") {
                $.ajax({
                    url:curUrl + 'updatebrowser.html',
                    success : function(data){
                        $ajaxC.append(data);

                        $('#browser-screen').css({height:window.innerHeight, width:window.innerWidth, lineHeight: window.innerHeight+'px'});



                        if(b.browser == 'Safari' && b.version > 6){
                            $('#browser-message').html("WebGL ne semble pas actif sur votre navigateur ! <br/> Pour l'activer sur Safari : " +
                                "Ouvrez le menu « Safari » et sélectionnez « Préférences ».<br/>"+
                                "Cliquez sur l’onglet « Avancés ».<br/>"+
                                "Cochez le champ « Afficher le menu Développement dans la barre des menus ».<br/>"+
                                "Ouvrez le menu « Développement » et cliquez sur « Activer WebGL ».<br/>");
                        }else{
                            $('#browser-message').html("Pour jouer au Caps, il faut mettre à jour ton navigateur !<br/>Ou squatter l'ordi de ton pote !");
                        }

                        setTimeout(function(){
                            loadFinish = true;
                        }, 1000);
                    }
                });
            }
        }
    };

});




