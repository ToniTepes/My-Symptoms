
module.exports = function(sequelize, DataTypes) {
    const Drink = sequelize.define("Drink", {
      drink: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
  
    Drink.associate = models => {
      Drink.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
        }
      });
      Drink.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
        }
      });
    };
    Drink.sync();
    return Drink;
  };