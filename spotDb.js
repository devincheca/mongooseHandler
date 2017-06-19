var mongoose = require('mongoose');
var dbHandler = {
  connect: function() {
    mongoose.connect('mongodb://localhost/test');
  },
  log: function(status) {
    console.log(status);
  }
};
module.exports = dbHandler;