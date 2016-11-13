'use strict';
module.exports = function(sequelize, DataTypes) {
  var Membership = sequelize.define('membership', {
    userId: DataTypes.INTEGER,
    leagueId: DataTypes.INTEGER,
    elo: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Membership;
};
