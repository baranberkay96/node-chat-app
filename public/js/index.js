var socket = io();

socket.on('connect', function () {
    console.log('Connected to Server');
});

socket.on('disconnect', function () {
    console.log('Disconnect user')
});


socket.on('newMessage', function (message) {
    console.log(message);
});