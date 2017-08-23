// Burger Model
// ===============

module.exports = function (sequelize, DataTypes) {
    var burgers = sequelize.define('burgers', {
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            devaultValue: false
        }
      }, {
            classMethods: {
                associate: function (models) {
                    // This does not need to be included, the hasOne() function in the burger model takes care of it
                    // devourers.belongsTo(models.burgers);
                }
            }
        });
    return burgers;
};