module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                notNull: true,
                isAlphanumeric: true,
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            validate: {
                notNull: true,
                defaultValue: false
            }
        }
    });
    return Burger;
};