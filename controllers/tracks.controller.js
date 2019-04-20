const Tracks = require('../models/tracks.model.js');

// Create and Save a new tracks
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nom) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'Le nom ne peut pas etre vide'
    });
  }

  // Create a new tracks
  const track = new Track({
    Nom: req.body.Nom,
    Durée: req.body.Durée, 
    NbEc: req.body.NbEcs,
    likes: req.body.likes || ''

  });

  // Save tracks in the database
  track
    .save()
    .then(track => {
      // we wait for insertion to be complete and we send the newly tracks integrated
      res.send(track);
    })
    .catch(err => {
      // In case of error during insertion of a new tracks in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the tracks.'
      });
    });
};


// Retrieve and return all trackss from the database.
exports.findAll = (req, res) => {
  Tracks.find()
    .then(track => {
      res.send(track);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving trackss.'
      });
    });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body.Nom) {
    return res.status(400).send({
      message: 'Erreur'
    });
  }
