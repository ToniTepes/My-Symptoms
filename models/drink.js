module.exports = function(sequelize, DataTypes) {

    var drink = sequelize.define("drink", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });
    return drink;
};