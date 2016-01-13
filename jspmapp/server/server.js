'use strict'
const R = require('ramda')
const server = require('http').createServer
const websocket = require('websocket-stream')
const users = require('../db.json')
const io = require('socket.io')(server)

const games = {}
const rooms = ['Lobby']
const socket = io.connect('http://localhost:8000')

io.sockets.on('connection', function(socket) {
  socket.on('addUser', function(username) {
    socket.username = username
    socket.room = 'Lobby'
    usernames[username] = username
    socket.join('Lobby')
    socket.set('opponent', games['Lobby'].player1)
    socket.set('turn', false)
    socket.get('opponent', function(err, opponent) {
      opponent.set('turn', true)
    })
    socket.emit('updaterooms', rooms, 'Lobby')
  })
  socket.on('create', function(room) {
    rooms.push(room)
    socket.emit('updaterooms', rooms, socket.room)
  })
  socket.on('disconnect', function(){
    delete usernames[socket.username]
    io.sockets.emit('updateusers', usernames)
    socket.leave(socket.room)
  })
  socket.on('switchRoom', function(newroom) {
    var oldroom
    oldroom = socket.room
    socket.leave(socket.room)
    socket.join(newroom)
    socket.room = newroom
    socket.emit('updaterooms', rooms, newroom)
  })
})

// const sockets = []
// io.on('connection', (socket) => {
//   sockets.push(socket)
//   socket.on('newuser', (data) => {
//     users.addUser(data)
//     socket.currentUser = data
//     currentUsers.push(socket.currentUser)
//   })
//   socket.on('disconnect', () => {
//     currentUsers = R.remove(currentUsers.indexOf(socket.currentUser), 1, currentUsers)
//   })
// })
