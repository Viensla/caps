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
        var b = BrowserDetect;
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

