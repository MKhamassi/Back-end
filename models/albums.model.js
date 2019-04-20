const mongoose = require('mongoose');

const Albums = new mongoose.Schema(
  {
      Nom: String, 
      Date: Number, 
      Genre: String, 
  }
);

module.exports = mongoose.model('Albums', Albums);
