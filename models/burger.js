module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            notNull: true,
            allowNull: false,
            validate: {
                len: [1],
                notEmpty: true
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            notNull: true,
            defaultValue: false
        }
    });
    return Burger;
};