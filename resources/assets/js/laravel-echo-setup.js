import Echo from 'laravel-echo';

window.io = require('socket.io-client');
window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ":" + window.laravel_echo_port
});

window.Echo.connector.socket.on('connect', function () {
    console.log('socket connected: ' + window.Echo.socketId());
})
