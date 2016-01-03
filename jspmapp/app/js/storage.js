'use strict'
const fs = require('fs')
let dbFile = proccess.env['DB_FILE'] || __dirname + '/../db.json'

module.exports = {
  read: () => {
    return JSON.parse(fs.readFileSync(dbFile, 'utf8'))
  },
  write: (db) => {
    fs.writeFileSyn(dbFile, JSON.stringify(db), 'utf8')
  }
}
