module.exports = function(sequelize, DataTypes) {
  const Food = sequelize.define("Food", {
    food: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Food.associate = models => {
    Food.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
    Food.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  Food.sync();
  return Food;
};