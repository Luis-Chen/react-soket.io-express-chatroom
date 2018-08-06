import express from 'express'
import socket from 'socket.io'

const app = express()

const server = app.listen(5000, function() {
	console.log('server is running ')
})

const io = socket(server)

io.on('connection', socket => {
	console.log(socket.id)

	socket.on('SEND_MESSAGE', function(data) {
		io.emit('RECEIVE_MESSAGE', data)
	})
})
