const mongoose = require('mongoose');

const Tracks = new mongoose.Schema(
  {
      Nom: String, 
      Durée: Number, 
      NbEc: Number, 
  }
);

module.exports = mongoose.model('Tracks', Tracks);
