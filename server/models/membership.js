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
        Membership.belongsTo(models.user);
        Membership.belongsTo(models.league);
      }
    }
  });
  return Membership;
};
