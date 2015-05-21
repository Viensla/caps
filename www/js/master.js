var CAPS = {
    camera : null
};

var container, scene, renderer, light, ball, plane, bottle, bottlecaps, axes, initEventHandling, initScene;
var WIDTH, HEIGHT, planeWIDTH, planeHEIGHT;

var elements = [], playedCaps = null, mouse_position = new THREE.Vector3, block_offset = new THREE.Vector3, _i, _v3 = new THREE.Vector3, intersect_plane, lookatobj, pilone, mouse,
    mouse3D = new THREE.Vector3, vlPlayedCaps = null;

var _nullVector = new THREE.Vector3(0,0,0), DCMP  = new THREE.Vector3(0,0,0);
var _natVector = new THREE.Vector3(1,1,1);

var onRenderFcts= [];

var lastTimeMsec= null;

var capsYpos = 110;

var movingCaps = null;

var clock = new THREE.Clock(), dir, distance;

var holdingDown = false;

Physijs.scripts.worker = '/js/physijs/physijs_worker.js';
Physijs.scripts.ammo = 'ammo.js';

container = document.getElementById('viewport');

WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;

var playerDistance = 100;

var globalDirection = 1;

var capModelscale = 1.6;



var texture;

var composer;








initScene = function() {
    scene = new Physijs.Scene();
    scene.setGravity(new THREE.Vector3( 0, -80, 0 ));
    scene.fog = new THREE.Fog( 0x050505, 2000, 3500 );
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
//    renderer.setSize(WIDTH, HEIGHT-100); //16:9
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMapEnabled = false;
    renderer.shadowMapSoft = false;
    renderer.shadowMapType = THREE.PCFShadowMap;
    renderer.shadowMapAutoUpdate = false;
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.setClearColor( scene.fog.color, 1 );
    container.appendChild(renderer.domElement);
    create_camera();
    create_lights();
    create_table();
    Viensla.initialize();
    Player.initialize();
    lookatobj = Viensla.bottle;
    scene.simulate();
    initEventHandling();
    render();
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

    if(holdingDown){
        setPower();
    }

    scene.simulate(undefined, 2);

    camera.lookAt(lookat);

    var time = Date.now() * 0.0005;
    drunk_effect(time);

    renderer.render(scene, camera);


    if(Player.drunked > 10){
//        composer.render();
    }

    if( Math.sin( time*2 ) > 0.5){
        pointlightbar.animeLight();
    }

    animateDust(time/10);

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

    $('.beers-selector .beer').click(function(){
        var $th = $(this);
        var bottleName = 'ptp';

       $('.beer.selected').removeClass('selected');
       $(this).addClass('selected');
        $plpart.removeClass('chimey foster ptp lef pelle chouffe');

        if($th.hasClass('chimey')){
            Player.capmat = caps_material.chimey.clone();
            Player.stickermat = sticker_materials.chimey.clone();
            $plpart.addClass('chimey');
            bottleName = 'chimey';

        }else if($th.hasClass('foster')){
            Player.capmat = caps_material.foster.clone();
            Player.stickermat = sticker_materials.foster.clone();
            bottleName = 'foster';

            $plpart.addClass('foster');

        }else if($th.hasClass('lef')){
            Player.capmat = caps_material.lef.clone();
            Player.stickermat = sticker_materials.lef.clone();
            bottleName = 'lef';

            $plpart.addClass('lef');

        }else if($th.hasClass('pelle')){
            Player.capmat = caps_material.pelle.clone();
            Player.stickermat = sticker_materials.pelle.clone();
            bottleName = 'pelle';

            $plpart.addClass('pelle');

        }else if($th.hasClass('chouffe')){
            Player.capmat = caps_material.chouffe.clone();
            Player.stickermat = sticker_materials.chouffe.clone();
            bottleName = 'chouffe';

            $plpart.addClass('chouffe');

        }else if($th.hasClass('ptp')){
            Player.capmat = caps_material.ptp.clone();
            Player.stickermat = sticker_materials.ptp.clone();
            bottleName = 'ptp';

            $plpart.addClass('ptp');
        }
        Player.bottle.material.color = Player.capmat.materials[1].color;

        Player.changeSticker();

        Game.Player.playerChooseBottle(bottleName);
    });


    $('#party').click(function(){
        Party.create();
    });

    $('#mute').click(function(){
        Sounds.mute = !Sounds.mute;
    });

    for(var i =0; i < Party.capsPerTurn; i++){
        $('.capsstock').append('<span class="animated zoomIn"></span>');
    }

//    $('#aspirine').click(function(){
//       Player.drunked -= 10;
//       camera.initialpos.x = 0;
//    });


    $plpart.find('.capsstock span').click(function(){

        if(!Viensla.isPlaying){
            $(this).removeClass().addClass('animated zoomOut');
            Party.plplay();
        }
    });

};


function onWindowResize( event ) {
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

$(window).load(function(){
//    CAPS.launchGame();
//    $('#game-area').hide();
});;var playerCamera = {}, vlCamera = {}, camera;
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

    vlCamera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    vlCamera.initialpos = new THREE.Vector3( 0, 210, -170 );
    vlCamera.position.set(vlCamera.initialpos.x, vlCamera.initialpos.y, vlCamera.initialpos.z);
    vlCamera.lookAt(scene);
    scene.add(vlCamera);

//    var lookat = new THREE.Vector3(0,50,-100);

    lookat = new THREE.Vector3(0,50,-100);

    camera = playerCamera;


//    camera.initialpos = playerCamPos;

//    camera.focalLength = 25;
//    camera.frameSize = 32;
//    camera.setLens(camera.focalLength, camera.frameSize);

    mouse = {x : 0, y : 0};

    document.addEventListener('mousemove', function(event){
        mouse.x	= (event.clientX / window.innerWidth ) - 0.5;
        mouse.y	= (event.clientY / window.innerHeight) - 0.5;

//        if(Player.drunked < 11){
////            camera.position.x += (mouse.x * 20 - camera.position.x) * (0.5*3) + camera.initialpos.x;
////            camera.position.y += (mouse.y * 10 - camera.position.y) * (0.5*3) + camera.initialpos.y-10;
//        }
//        camera.lookAt(lookatobj);
    }, false);
}

function change_camera(){
    if(camera == playerCamera){
        camera = vlCamera;
        camera.initialpos = vlCamPos;
        lookatobj = Player.bottle;
        globalDirection = -1;

    }else{
        camera = playerCamera;
        camera.initialpos = playerCamPos;
        lookatobj = Viensla.bottle;
        globalDirection = 1;


    }
};


capCollision = function ( collided, linearVelocity, angularVelocity, other ){

    var capPlayed = this;
    capPlayed.collisions++;

    if(capPlayed.floating) return;


    var collision = collided.name;


    switch(collision){
        case 'level':
            if(!Sounds.mute) Sounds.simpletap2.play();
            break;
        case 'tapis':
            if(!Sounds.mute) Sounds.simpletap1.play();
            break;
        case 'floor':
            if(!Sounds.mute) Sounds.simpletap3.play();
            break;
        case 'vlCap':

            if(capPlayed.name == 'player'){
                console.log('You caps it');

                collided.collided = true;
                collided.__dirty_postion = true;
                collided.setAngularFactor(new THREE.Vector3(1,3,-3));
                collided.setAngularVelocity( new THREE.Vector3(1,1,1) );
                collided.setLinearVelocity( new THREE.Vector3(1,1,-3) );

            }
            if(!Sounds.mute) Sounds.capcap.play();
            break;
        case 'plCap':
            if(capPlayed.name == 'viensla'){
                console.log('Viens la caps it');
                collided.collided = true;
                collided.__dirty_postion = true;
                collided.setAngularFactor(new THREE.Vector3(1,-3,3));
                collided.setAngularVelocity( new THREE.Vector3(1,1,1) );
                collided.setLinearVelocity( new THREE.Vector3(1,1,3) );

            }
            if(!Sounds.mute) Sounds.pschit1.play();
            break;
        case 'vlBottle':
            if(!Sounds.mute) Sounds.clink.play();
            break;
        case 'plBottle':
            if(!Sounds.mute) Sounds.pschit1.play();
            break;
        case '':
            console.log('Unamed hit !');
            break;
    }



//    if(collision == 'vlCap'){
//        collided.__dirtyPosition = true;
//    }



};




function create_caps(who){
    var randomCaps = Math.random() > 0.8;
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

    ball.scale.set(capModelscale,capModelscale,capModelscale);


    ball.collisions = 0;
    ball.addEventListener( 'collision', capCollision );

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

    var collisionSphere = new Physijs.CylinderMesh(
        new THREE.SphereGeometry(2, 32),
        new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent : true,
            opacity:0.6
        })
        ,0);


//    ball.add(collisionSphere);
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


    if(elements.length > 10){
        var last = elements[0];
        scene.remove(last);
        elements.splice(0, 1);
    }

    if(!Sounds.mute) Sounds.pschit1.play();
}





var power = 0,
    speedbar = 2,
    powerDir = speedbar,
    strengh = 6,
    playerstrengh = 5;


function setPower(){
    power += powerDir;

    if(power > 100){
        powerDir = -speedbar;
    }

    if(power < 0){
        powerDir = +speedbar;
    }

    $('.powerbar .bar').height(power+'%');
}






initEventHandling = (function() {
    var projector, ray, intersection,
        handleMouseDown, handleMouseMove, handleMouseUp,
        launchVector = new THREE.Vector3,
        _vector = new THREE.Vector3,
        _angVector = new THREE.Vector3;


    handleMouseDown = function( evt ) {

        if(!playedCaps) return;

        holdingDown = true;

//        launchVector.set(1,20, -100);

        power = 0;
        $('.powerbar').fadeIn();

    };

    handleMouseMove = function( evt ) {
        var mouseX = evt.clientX,
            mouseY = evt.clientY,
            realpos = {};


        $('.powerbar').css({left:mouseX+50, top:mouseY-50});

        mouse3D.set(
            ( mouseX / window.innerWidth ) * 2 - 1,
            - ( mouseY / window.innerHeight ) * 2 + 1.07 ,
            1 );
        mouse3D.unproject(camera);
        dir = mouse3D.sub( camera.position ).normalize();
        distance = - camera.position.z / dir.z;
        realpos = camera.position.clone().add( dir.multiplyScalar(distance/2) );
        realpos.z = playerDistance*globalDirection;

//        Game.Player.playerMoving({x : realpos.x, y : realpos.y, z : -playerDistance});

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

        Game.Player.playerLaunch({x : DCMP.x, y : DCMP.y, z :-DCMP.z, pwr:power, rdms:rdms});

        power = 0;

        $('.powerbar').fadeOut();

        Player.launched++;
        Player.totalLaunched++;

        Player.isPlaying = false;
        Viensla.isPlaying = true;

        Party.resetStocks();


//        if(Player.launched == Party.capsPerTurn){



//            setTimeout(function(){
//                console.log('viens la attack');
//                Viensla.launched = 0;
//                Player.isPlaying = false;
//                Party.resetStocks();

//                Party.vlplay();
//                $('#turn-m p').text('Vienslà\'s turn!');
//                turnm();

//            }, 3000);

//        }

    };

    return function() {
        renderer.domElement.addEventListener( 'mousedown', handleMouseDown );
        renderer.domElement.addEventListener( 'mousemove', handleMouseMove );
        renderer.domElement.addEventListener( 'mouseup', handleMouseUp );
    };
})();

//var sphere_traj;
//var middlepos = new THREE.Vector3(0,150,0);
//var endpos = new THREE.Vector3();
//
//function calculate_traj(){
//
//
//
//    var x = DCMP.x;
//    var y = 20;
//    var z = 0;
//
////    console.log(DCMP);
//
//    z = - ( power*(power/100) + DCMP.y/2 );
//
//    sphere_traj.position.set(x, y, z);
//
//    endpos.set(x, y, z);
//
////    trajCap.calculate(DCMP, middlepos ,endpos)
//
////    trajLine.position.set(DCMP);
//
//};

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
        chouffe : 0xffdb77,
        ptp : 0xfde772
    };
;var timeoutRobot;

var Party = {
    isPlaying : false,
    capsPerTurn : 1,
    lives : 60,
    create : function(){
        Viensla.generateCaps();

        Viensla.score = Player.score = Viensla.launched = Player.launched = 0;
        Viensla.lives = Player.lives = Party.lives;

        Party.isPlaying = true;

        this.resetStocks();

        Viensla.isPlaying = false;
        Player.isPlaying = true;

        $vlpart.fadeIn(function(){
            Party.setLife();
        });

        $plpart.fadeIn();

        $('#start-screen').fadeOut();
        $('#black_filter').fadeOut();

        Player.generateCaps();
    },
    vlplay : function(){
//        if(this.isPlaying){
//            if(Viensla.launched < Party.capsPerTurn && !Player.isPlaying){

//                $vlpart.find('.capsstock span').eq(Viensla.launched).removeClass().addClass('animated zoomOut');

//                Viensla.isPlaying = true;
//                Player.isPlaying = false;
//                Viensla.shootCaps(data);
//                Viensla.launched++;
//                Viensla.totalLaunched++;

//                if(Viensla.launched < Party.capsPerTurn){
//                    timeoutRobot = setTimeout(function(){
//                        Party.vlplay();
//                    }, 3000);
//                }else{
//                    Player.isPlaying = true;
//                    Player.launched = 0;
//                    Viensla.isPlaying = false;
//                    console.log('Viens la no more caps !');
//                    this.resetStocks();
//                    $('#turn-m p').text('Your turn!');
//                    turnm();
//                }
//            }else{
//                console.log('Viens la no more caps !');
//            }
//        }




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
        console.log('vlcaps')
        if(this.isPlaying){
            Viensla.isPlaying = false;
            Player.isPlaying = true;
            Viensla.score++;
            Player.drunked += 2;
            Player.lives -= 10;
            capsm();
            console.log('vlcaps')

            if(Viensla.launched < Party.capsPerTurn-1){
                setTimeout(function(){
                    $('#turn-m p').text('Your turn!');
                    turnm();
                },1000);


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
        if(this.isPlaying){
            Player.score++;
            Viensla.lives -= 10;
            Player.isPlaying = false;
            Viensla.isPlaying = true;

            Game.Player.playerCaps();

            capsm();

            if(Player.launched < Party.capsPerTurn){
                setTimeout(function(){
                    $('#turn-m p').text('Vienslà\'s turn!');
                    turnm();
                },1000);

                setTimeout(function(){
                    Party.resetStocks();
//                    Party.vlplay();
                }, 2000)
            }

            setTimeout(function(){
                Viensla.generateCaps();
            }, 2000);

            Party.setLife();
        }

    },

    resetStocks : function(){
        if(this.isPlaying){
            console.log('stock reseted');

            $('.capsstock span.zoomOut').removeClass('zoomOut').addClass('zoomIn');

            Viensla.launched = 0;

            Player.launched = 0;


        }

        if(Player.drunked > 11){
            Player.drunked -= 2;
        }
    },

    setLife : function(){
        if(this.isPlaying){
            var pctPlLife = Math.round(Player.lives / Party.lives * 100);
            var pctVlLife = Math.round(Viensla.lives / Party.lives * 100);

            $plpart.find('.life').height(pctPlLife+"%");
            $vlpart.find('.life').height(pctVlLife+"%");

            if(pctPlLife <= 0 || pctVlLife <= 0){
                Party.isPlaying = false;
                console.log('PARTY OVER');

                if(pctPlLife <= 0){
                    $('#winner-m p').text('Vienslà wins !')
                }else if(pctVlLife <= 0){
                    $('#winner-m p').text('You win !')
                }

                winnerm();

                $('#black_filter').fadeIn();
                $('#start-screen').fadeIn();
            }
        }
    }
}



var animend ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
function capsm(){
    $('#caps-m').show().removeClass().addClass('animated tada').one(animend, function(){
        $(this).removeClass().addClass('animated zoomOut').one(animend, function(){
            $(this).hide()
        });
    });
    if(!Sounds.mute) Sounds.pschit2.play();
}

function turnm(){

//    if($('#turn-m').hasClass('bounceOutRight') || $('#turn-m').hasClass('bounceInLeft') ) return;
//
//    $('#turn-m').removeClass().addClass('animated bounceInLeft').show().one(animend, function(){
//        $(this).removeClass().addClass('animated bounceOutRight').one(animend, function(){
//            $(this).removeClass().hide();
//        });
//    });
//    if(!Sounds.mute) Sounds.pschit2.play();
}


function winnerm(){
    $('#winner-m').removeClass().addClass('animated bounceInLeft').show().one(animend, function(){
        $(this).removeClass().addClass('animated bounceOutRight');
    });
    if(!Sounds.mute) Sounds.pschit2.play();
}


function aspirinerm(){
    if($('#aspirine').hasClass('bounceOutRight') || $('#aspirine').hasClass('bounceInLeft') ) return;

    $('#aspirine').removeClass().addClass('animated bounceInLeft').show().one(animend, function(){
        $(this).removeClass().addClass('animated bounceOutRight').one(animend, function(){
            $(this).removeClass().hide();
        });
    });
    if(!Sounds.mute) Sounds.pschit2.play();
};
planeWIDTH = 170;
planeHEIGHT = 600;


var tableSurfaceDim = [150, 5, 30];
var tablefootSurfaceDim = [140, 55, 2];
var level, _floor, _tapis, _tablefoot, _table, _wall, _bar;


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
    var wall_texture = THREE.ImageUtils.loadTexture('images/v2/bar_single.png');

    _wall = new Physijs.BoxMesh(
        new THREE.BoxGeometry(500, 125, 1),
        new THREE.MeshBasicMaterial({
            map:wall_texture,
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

     wall_texture = THREE.ImageUtils.loadTexture('images/v2/armoires_back.png');
    _wall = new Physijs.BoxMesh(
//        285
        new THREE.BoxGeometry(1212, 335, 10),
        new THREE.MeshPhongMaterial({
            map:wall_texture,
            transparent:true,
            opacity:0.4
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
    var phone_t = new THREE.MeshPhongMaterial({
        map: THREE.ImageUtils.loadTexture('images/phone_face.png')
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
    var _phone = new Physijs.BoxMesh(
        new THREE.BoxGeometry(10, 1, 14),
        new THREE.MeshFaceMaterial(phone_materials),
        0
    );
    _phone.position.x = -50;
    _phone.position.y = 3;
    _phone.position.z = -5;
    _phone.rotation.y = - 0.3;
    _table.add(_phone);


    scene.add(level);



    // material texture
    var texture = new THREE.Texture( generateTexture() );
    texture.needsUpdate = true; // important!

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

    scene.fog.color.copy( uniforms.bottomColor.value );

    var skyGeo = new THREE.SphereGeometry( 1600, 4, 15 );
    var skyMat = new THREE.ShaderMaterial( { vertexShader: vertexShader, fragmentShader: fragmentShader, uniforms: uniforms, side: THREE.BackSide } );
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
            map: THREE.ImageUtils.loadTexture("images/dust.png"),
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

};var frontLight	= new THREE.DirectionalLight(0xffffff, 0.2);

var backLight	= new THREE.DirectionalLight(0xffffff, 0.7);

var ambientLight = new THREE.AmbientLight( 0x664816 );

var rightLight	= new THREE.DirectionalLight(0xfefefe, 0.4);

var leftLight	= new THREE.DirectionalLight(0xfefefe, 0.3);

var pointlightbar;
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
    pointlightbar.position.set( 8, 180, -600 );
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

//    var light = new THREE.DirectionalLight( 0xffffff, 0.7 ); // soft white light

//    scene.add( light );

//
//
//
//    var directionalLight = new THREE.DirectionalLight(/*Math.random() * 0xffffff*/0xeeeeee );
//    directionalLight.position.set( .2, -1, .2 );
//    directionalLight.position.normalize();
//    scene.add( directionalLight );



// LIGHTS

    var whitelight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.4 );
    whitelight.color.setHex( 0xefefef );
    whitelight.groundColor.setHSL( 0.2,0.2,0.2 );
    whitelight.position.set( 0, 300, 0 );
    scene.add( whitelight );

    var back_whitelight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.4 );
    back_whitelight.color.setHex( 0xefefef );
    back_whitelight.position.set( 0, 300, -400 );
    scene.add( back_whitelight );
//
//    var back_room = new THREE.PointLight( 0xffffff, 1, 500 );
//    back_room.position.set( 0, 1000, -1600 );
//    scene.add( back_room );


//    scene.add( hemiLight );





//    var dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
//    dirLight.color.setHSL( 0.1, 1, 0.95 );
//    dirLight.position.set( -1, 90, 1 );
//    dirLight.position.multiplyScalar( 50 );
//    scene.add( dirLight );
//
//    dirLight.castShadow = true;
//
//    dirLight.shadowMapWidth = 2048;
//    dirLight.shadowMapHeight = 2048;
//
//    var d = planeHEIGHT/2;
//
//    dirLight.shadowCameraLeft = -d;
//    dirLight.shadowCameraRight = d;
//    dirLight.shadowCameraTop = d;
//    dirLight.shadowCameraBottom = -d;
//
//    dirLight.shadowCameraFar = 3500;
//    dirLight.shadowCameraNear = 1;
//    dirLight.shadowBias = -0.0001;
//    dirLight.shadowDarkness = 0.35;




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
        'chimey':new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/v2/stickers/chimey.png'),side:2, transparent:true,opacity:1}),
        'foster':new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/v2/stickers/foster.png'),side:2, transparent:true,opacity:1}),
        'lef':new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/v2/stickers/lef.png'),side:2, transparent:true,opacity:1}),
        'pelle':new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/v2/stickers/pelle.png'),side:2, transparent:true,opacity:1}),
        'chouffe':new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/v2/stickers/chouffe.png'),side:2, transparent:true,opacity:1}),
        'ptp':new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/v2/stickers/chimey.png'),side:2, transparent:true,opacity:1})
    };


    loader.load( 'model/3D/cap.json', function ( cap_geometry, cap_materials ) {

        loader.load( 'model/3D/bottle.json', function ( bottle_geometry, bottle_materials ) {

            bottle_geo = bottle_geometry;


            var bottle_material = bottle_materials[ 0 ];
            bottle_material.side = 2;
            bottle_material.map.anisotropy=0;
            bottle_material.shininess = 0;
            bottle_material.shading = 0;
            bottle_material.reflectivity = 0;
            bottle_material.ambient.setHex(0xffffff);
            bottle_material.color.setHex(0xffffff);

            bottle_mat = new THREE.MeshFaceMaterial( bottle_materials );

            geo_caps = cap_geometry;

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

jQuery(function($){
    $plpart = $('.pl-part');
    $vlpart = $('.vl-part');

    CreateMutliplayerParty = function(){

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


                IO.socket.on('playerUpdateMove', Game.Host.playerUpdateMove);
                IO.socket.on('playerUpdateLaunch', Game.Host.playerUpdateLaunch);
                IO.socket.on('getEnemyInfo', Game.Host.showEnemy);
                IO.socket.on('enemyChooseBottle', Game.Host.enemyChooseBottle);

                IO.socket.on('enemyCaps', Game.Host.enemyCaps);

                IO.socket.on('getHostInfo', Game.Player.getHostInfo);
                //Display errors
                IO.socket.on('error', IO.error );
            },


            onConnection : function(data) {
                Game.socketId = IO.socket.socket.sessionid;
                console.log(data.message);
            },

            onNewGameCreated : function(data){
                Game.Host.gameInit(data);
            },

            playerJoinedRoom : function(data) {
                Game[Game.role].updateWaitingScreen(data);
            },

            getEnemyInfo:function(data){
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

            init : function(){
                Game.cacheScreens();
                Game.bindEvents();
                Game.showIntroTpl();
            },

            bindEvents: function () {
                // Host
                Game.$doc.on('click', '#btnCreateGame', Game.Host.onCreateClick);
                Game.$doc.on('click', '#btnStartParty',Game.Host.onStartPartyClick);

                // Player
                Game.$doc.on('click', '#btnJoinGame', Game.Player.onJoinClick);
                Game.$doc.on('click', '#btnStart',Game.Player.onPlayerStartClick);

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
                Game.$area.html(Game.$tplIntroScreen);
                console.log('Intro screen displayed');
            },




            // HOST -------------------------------------------------------------------------------------------------------------------

            Host : {
                players : [],
                numPlayersInRoom : 0,
                onCreateClick: function () {
                    console.log('Clicked "Create A Game"');
                    IO.socket.emit('hostCreateNewGame');
                },

                gameInit: function (data) {
                    Game.gameId = data.gameId;
                    Game.socketId = data.socketId;
                    Game.Player.socketId = data.socketId;

                    Game.role = 'Host';
                    Game.Host.numPlayersInRoom = 0;
                    Game.Host.displayNewGameScreen();
                    console.log("Game started with ID: " + Game.gameId + ' by host: ' + Game.socketId);
                },

                displayNewGameScreen : function() {
                    // Fill the game screen
                    Game.$area.html(Game.$tplNewGame);

                    // Display the URL on screen
                    $('#url-connect').text(window.location.href);

                    // Show the gameId on screen
                    $('#code-connect').text(Game.gameId);

                    Game.$area.append(Game.$tplJoinGame);
                    $('#inputGameId').attr('value',Game.gameId).prop('type', 'hidden');


                },

                updateWaitingScreen: function(data) {
                    // Update host screen
                    $('#playersWaiting').append('<p>Player ' + data.playerName + ' joined the game.</p>');
                    // Store the new player's data on the Host.
                    Game.Host.players.push(data);

                    // Increment the number of players in the room
                    Game.Host.numPlayersInRoom += 1;

                    if (Game.Host.numPlayersInRoom > 1) {
                        IO.socket.emit('hostRoomReady',Game.gameId);
                        $('#cacheStartParty').show();
                    }
                },

                onStartPartyClick: function(){
                    IO.socket.emit('hostStartParty', {gameId : Game.gameId, hostPlayer : Game.Host.players});
                },

                showPartyScreen: function(){
                    var i = 0;

                    Game.partyOn = true;

                    Game.$area.html(Game.$tplPartyScreen);

                    Game.$area.html($('#caps-game'));

                    CAPS.launchGame();

                    IO.socket.emit('hostSendInfo', {gameId : Game.gameId, name : Game.Player.name, playerID:Game.socketId});
                },

                showEnemy:function(data){
                    if(Game.role == 'Host' && Game.Player.socketId != data.playerID){
                        Game.Enemy.name = data.name;
                        Game.Enemy.id = data.playerID;
                        $plpart.find('h3').text(Game.Player.name);
                        $vlpart.find('h3').text(Game.Enemy.name);
                    }
                },


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
                        console.log(data.shot);
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
                        console.log('enemy caps you !')
                        Player.drink();
                    }
                }



            },
            // PlAYERS -------------------------------------------------------------------------------------------------------------------

            Player : {
                hostSocketId: '',
                name: '',
                socketId : '',
                onJoinClick: function () {
                    // Display the Join Game HTML on the player's screen.
                    Game.$area.html(Game.$tplJoinGame);
                },
                onPlayerStartClick: function() {
                    // collect data to send to the server
                    var data = {
                        gameId : +($('#inputGameId').val()),
                        playerName : $('#inputPlayerName').val() || 'Anonymous',
                        x: 0,
                        y: 0
                    };

                    // Send the gameId and playerName to the server
                    IO.socket.emit('playerJoinGame', data);

                    // Set the appropriate properties for the current player.
                    if(Game.role != 'Host')
                        Game.role = 'Player';

                    Game.Player.name = data.playerName;

                },

                updateWaitingScreen : function(data) {
                    if(IO.socket.socket.sessionid === data.socketId){
                        Game.role = 'Player';
                        Game.gameId = data.gameId;
                        Game.Player.socketId = data.socketId;
                        $('#playerWaitingMessage').text('Joined Game ' + data.gameId + '. Please wait for game to begin.');
                    }
                },
                showPartyScreen: function(data){
                    var i = 0;
                    Game.$area.html(Game.$tplPartyScreen);
                    Game.partyOn = true;
                    Game.Host.players = data.hostPlayer;
                    Game.$area.html($('#caps-game'));

                    CAPS.launchGame();

                },
                getHostInfo:function(data){
                    if(Game.role == 'Player' && Game.Player.socketId != data.playerID){
                        Game.Enemy.name = data.name;
                        Game.Enemy.id = data.playerID;
                        $plpart.find('h3').text(Game.Player.name);
                        $vlpart.find('h3').text(Game.Enemy.name);
                    }
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
                }
            },


            Enemy : {
                id:'',
                name :''
            }
        };

        IO.init();
        Game.init();
    };

    CreateMutliplayerParty();
}($));;

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
            this.stickermat = new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/v2/stickers/chimey.png'),side:2, transparent:true,opacity:1});
        }
        var bottle_material = new THREE.MeshBasicMaterial( {  color:Player.capmat.materials[1].color,side:2 } )

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
        this.sticker.position.z = 0.45;
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

        this.bottlecaps.position.y = Player.bottle.position.y + 22;
        this.bottlecaps.position.x = Player.bottle.position.x;
        this.bottlecaps.position.z = Player.bottle.position.z - 2;


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
        y : 140,
        x  : -2,
        pwr : 30
    },
    {
        y : 100,
        x  : -1,
        pwr : 80
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
    imprecision : 10,
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

        this.bottlecaps.position.y = Viensla.bottle.position.y + 22;
        this.bottlecaps.position.x = Viensla.bottle.position.x;
        this.bottlecaps.position.z = Viensla.bottle.position.z +2;


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


//        _posVector.set(randomX,randomY, playerDistance*globalDirection + 25);

        _posVector.set(Viensla.livePos.x,Viensla.livePos.y, Viensla.livePos.z);

        create_caps('vl');

        playedCaps.position.copy(_posVector);
        playedCaps.__dirtyPosition = true;


//        playedCaps.__dirtyPosition = true;
//        playedCaps.floating = false;
//
//        _vector.set( 1, 1, 1 );
//        _angVector.set( Math.random()*10, Math.random()*10, Math.random()*20);
//        playedCaps.setAngularFactor( _vector );
//
//        playedCaps.setLinearFactor( _vector );
//        launchVector.set(1,-3, - power * strengh * globalDirection);
//        playedCaps.setLinearVelocity( launchVector );
//        playedCaps.setAngularVelocity( _angVector );
//
//        playedCaps = null;

    },

    changeBottle:function(bottle){
        console.log('vl : '+bottle);
        $vlpart.removeClass('chimey foster ptp lef pelle chouffe');
        $vlpart.addClass(bottle);
        Viensla.capmat = caps_material[bottle];
        Viensla.bottle.material.color = Viensla.capmat.materials[1].color;

    }


}





//
//
//document.addEventListener(
//    'keydown',
//    function( ev ) {
//        console.log(ev.keyCode);
//        switch( ev.keyCode ) {
//            case 37:
//                // Left
//                camera.initialpos.y +=5;
//                break;
//
//            case 39:
//                // Right
//                camera.initialpos.y -=5;
//
//                break;
//
//            case 38:
//                // Up
//                camera.initialpos.z +=5;
//
//                break;
//
//            case 40:
//                camera.initialpos.z -=5;
//
////                Viensla.launchCaps();
//                break;
//
//            case 32:
//                // space
////                create_caps();
//                break;
//
//            case 67:
////                lookatobj = ball;
//                break;
//
//            case 86:
//                console.log('bottlecaps vl');
//                lookatobj = BottleViensla.bottle;
//                break;
//
//            case 66:
//                lookatobj = scene;
//                break;
//
//            case 65 :
//                if(axes.presence){
//                    axes.traverse( function ( object ) { object.visible = false; } );
//                    axes.presence = false;
//                }else{
//                    axes.traverse( function ( object ) { object.visible = true; } );
//                    axes.presence = true;
//                }
//            break;
//
//            case 13:
//                $('#party').click();
//                break;
//        }
//    }
//);
;var Sounds;

(function ($){
    var path = 'assets/sounds/';
    Sounds = {
        simpletap1 : new Audio(path+"choc_simple_1.mp3"),
        simpletap2 : new Audio(path+"choc_simple_2.mp3"),
        simpletap3 : new Audio(path+"choc_simple_3.mp3"),
        clink : new Audio(path+"clink.mp3"),
        capcap : new Audio(path+"capcap.mp3"),
        pschit1 : new Audio(path+"pschit_1.mp3"),
        pschit2 : new Audio(path+"pschit_2.mp3"),

        mute : true
    }
})(jQuery);