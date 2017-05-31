module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            notNull: true
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            notNull: true,
            defaultValue: false
        }
    });
    return Burger;
};