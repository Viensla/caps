var io,
    socket,
    players;


exports.initGame = function(sio, s){
    io = sio;
    socket = s;
    players = [];
    socket.emit('connected', { message: "Nouvelle connection !" });

    //Host
    socket.on('hostCreateNewGame', hostCreateNewGame);
    socket.on('hostRoomReady', hostPrepareGame);
    socket.on('hostStartParty', hostStartParty);

    //Players
    socket.on('playerJoinGame', playerJoinGame);
    socket.on('hostSendInfo', hostSendInfo);
    socket.on('playerMove', playerMove);
    socket.on('playerShoot', playerShoot);
    socket.on('playerCaps', playerCaps);
    socket.on('playerMessage', playerMessage);

    socket.on('playerChooseBottle', playerChooseBottle);
};

// HOST -------------------------------------------------------------------------------------------------------------------

function hostCreateNewGame() {
    // Create a unique Socket.IO Room
    var thisGameId = ( Math.random() * 100000 ) | 0;

    // Return the Room ID (gameId) and the socket ID (mySocketId) to the browser client
    this.emit('newGameCreated', {gameId: thisGameId, socketId: this.id});

    // Join the Room and wait for the players
    this.join(thisGameId.toString());

    console.log('New Game Created');

};

function hostPrepareGame(data) {
    var sock = this;
    var data = {
        socketId : sock.id,
        gameId : data.gameId,
        hostReady: data.hostReady
    };

    console.log("A Player is Present. Preparing game..." );
    console.log(data);

    io.sockets.in(data.gameId).emit('hostReady', data);
};

function hostStartParty(hostdata) {
    var sock = this;
    var data = {
        socketId : sock.id,
        gameId : hostdata.gameId,
        hostPlayer : hostdata.hostPlayer
    };

    console.log(data);
    io.sockets.in(data.gameId).emit('startParty', data);

};
// PlAYERS -------------------------------------------------------------------------------------------------------------------


function playerJoinGame(data) {
    console.log('Player ' + data.playerName + ' attempting to join game: ' + data.gameId );

    // A reference to the player's Socket.IO socket object
    var sock = this;

    // Look up the room ID in the Socket.IO manager object.
    var room = socket.manager.rooms["/" + data.gameId];

    // If the room exists...
    if( room != undefined ){
        // attach the socket id to the data object.
        data.socketId = sock.id;

        // Join the room
        sock.join(data.gameId);

        console.log('Player ' + data.playerName + ' joining game: ' + data.gameId );

        io.sockets.in(data.gameId).emit('playerJoinedRoom', data);

        var enemy = {
            name: data.playerName,
            playerID:data.socketId
        };

        console.log(enemy);
        io.sockets.in(data.gameId).emit('getEnemyInfo', enemy);


    } else {
        // Otherwise, send an error message back to the player.
        this.emit('error',{message: "This room does not exist."} );
    }
}


function playerMove(data){
    io.sockets.in(data.gameId).emit('playerUpdateMove', data);
}


function playerShoot(data){
    console.log(data);
    io.sockets.in(data.gameId).emit('playerUpdateLaunch', data);
}

function hostSendInfo(data){
    io.sockets.in(data.gameId).emit('getHostInfo', data);
}

function playerChooseBottle(data){
    console.log(data);
    io.sockets.in(data.gameId).emit('enemyChooseBottle', data);
}

function playerCaps(data){
    console.log(data);
    io.sockets.in(data.gameId).emit('enemyCaps', data);
}

function playerMessage(data){
    console.log(data.im);
    io.sockets.in(data.gameId).emit('enemyMessage', data);
}