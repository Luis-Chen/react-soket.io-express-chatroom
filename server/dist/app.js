'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

const server = app.listen(5000, function () {
	console.log('server is running ');
});

const io = (0, _socket2.default)(server);

io.on('connection', socket => {
	console.log(socket.id);

	socket.on('SEND_MESSAGE', function (data) {
		io.emit('RECEIVE_MESSAGE', data);
	});
});