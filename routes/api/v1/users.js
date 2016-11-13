var express = require('express');
var router = express.Router();
var models = require('../../../server/models');

router.get('/:id/leagues', function(req, res, next) {
  models.user.findById(req.params.id)
  .then(function(user) {
    return user.getLeagues();
  })
  .then(function(leagues) {
    res.send(leagues);
  })
  .catch(next);
});

module.exports = router;
