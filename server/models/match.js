'use strict';
module.exports = function(sequelize, DataTypes) {
  var Match = sequelize.define('match', {
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Match;
};
