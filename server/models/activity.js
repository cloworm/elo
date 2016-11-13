'use strict';
module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define('activity', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Activity;
};
