var express = require('express');
var router = express.Router();

// we import our artists controller
var artists = require('../controllers/artists.controller');

/*
 GET one artists 
router.get('/:artistsId', artists.findOne);

/* DELETE  one artists 
router.delete('/:artistsId', artists.delete);

/* UPDATE  one artists 
router.post('/:artistsId', artists.update);

/* CREATE  one artists */
router.put('/', artists.create);

router.get('/',artists.findAll);

router.get('/followers', artists.bestfollower);

module.exports = router;