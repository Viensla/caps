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
        loadPart();
    });

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
    }
});