module.exports = function(sequelize, DataTypes) {

    var food = sequelize.define("food", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });
    return food;
};