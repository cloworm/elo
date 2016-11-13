'use strict';
module.exports = function(sequelize, DataTypes) {
  var MatchScore = sequelize.define('match_score', {
    matchId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        MatchScore.belongsTo(models.user);
        MatchScore.belongsTo(models.match);
      }
    }
  });
  return MatchScore;
};
