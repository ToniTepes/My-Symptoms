module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: true
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 6
      }
    },
    lastLogin: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  User.associate = models => {
    User.hasMany(models.Symptom, {
      onDelete: "cascade"
    });
    User.hasMany(models.Food, {
      onDelete: "cascade"
    });
    User.hasMany(models.Drink, {
      onDelete: "cascade"
    });
  };

  return User;
};