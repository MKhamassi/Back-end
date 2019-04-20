const mongoose = require('mongoose');

const Artists = new mongoose.Schema(
  {
      Nom: String, 
      DateN: String, 
      Follow: Number
  }
);

module.exports = mongoose.model('Artists', Artists);
