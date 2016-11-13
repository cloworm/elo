'use strict';
module.exports = function(sequelize, DataTypes) {
  var League = sequelize.define('league', {
    name: DataTypes.STRING,
    activityId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        League.belongsTo(models.activity);
        League.hasMany(models.membership);
      }
    }
  });
  return League;
};
