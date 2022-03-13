//this is the access point for all things database related!

const db = require('./db')
const User = require('./models/User');

// ASSOCIATIONS

module.exports = {
  db,
  models: {
    User,
  },
}
