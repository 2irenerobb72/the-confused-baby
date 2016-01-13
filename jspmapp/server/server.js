'use strict'
const R = require('ramda')
const server = require('http').createServer
const websocket = require('websocket-stream')
const users = require('../db.json')
const io = require('socket.io')(server)

// const httpServer = server((req, res) => {
//   console.log('request recieved', req.url)
// })
//
// httpServer.listen(8000, () => {
//   console.log('server 1 is listening on port 8000')
// })
//
// io.on('connection', (socket) => {
//   sockets.push(socket)
//   socket.on('newUser', (data) => {
//     users.addUser(data)
//     socket.currentUser = data
//     currentUsers.push(socket.currentUser)
//   })
// })
