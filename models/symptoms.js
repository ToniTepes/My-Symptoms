module.exports = function(sequelize, DataTypes) {

    var symptom = sequelize.define("symptom", {
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        severity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE

    });
    return symptom;
};