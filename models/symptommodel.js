module.exports = function(sequelize, DataTypes) {
  const Symptom = sequelize.define("Symptom", {
    symptom: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    severity: DataTypes.STRING
  });

  Symptom.associate = models => {
    Symptom.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
    Symptom.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  Symptom.sync();
  return Symptom;
};
