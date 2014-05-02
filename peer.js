var socket = io.connect('http://localhost');
socket.emit('connection');
socket.on('event', function (data) {
  console.log(data);
});
