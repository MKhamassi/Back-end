const Albums = require('../models/albums.model.js');

// Create and Save a new albums
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nom) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'Erreur nom vide'
    });
  }


  const album = new Albums({
    Nom: req.body.Nom,
    Date: req.body.Date, 
    Genre: req.body.Genre,
 });


  album
    .save()
    .then(albums => {
      // we wait for insertion to be complete and we send the newly albums integrated
      res.send(album);
    })
    .catch(err => {
      // In case of error during insertion of a new albums in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Impossible de créer albums'
      });
    });
};

exports.findAll = (req, res) => {
  Albums.find()
    .then(album => {
      res.send(album);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'récupération album Impossible'
      });
    });
};

exports.update = (req, res) => {
  if (!req.body.Nom) {
    return res.status(400).send({
      message: 'Erreur'
    });
  }

  exports.NbAlb = (req,res)=>{

    var nbr = 0;
    Albums.find()
    .then(album =>{
    album.forEach(element => {
      nb=nb+1;
    });
    })
    .then(function(){
      res.json({nb:nb});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Erreur'
      });
    });

    };
