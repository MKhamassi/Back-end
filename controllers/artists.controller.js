const Artists = require('../models/artists.model.js');

// Create and Save a new artists
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nom) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'Le nom ne peut pas etre vide'
    });
  }

  // Create a new artists
  const artist = new Artist({
    Nom: req.body.Nom,
    DateN: req.body.DateN, 
    Follow: req.body.Follow || ''

  });

  // Save artists in the database
  artist
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly artists integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new artists in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the artists.'
      });
    });
};

exports.findAll = (req, res) => {
  Artists.find()
    .then(artist => {
      res.send(artist);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving artistss.'
      });
    });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body.Nom) {
    return res.status(400).send({
      message: 'Erreur Nom'
    });
  };