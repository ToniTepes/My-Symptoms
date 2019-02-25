// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcrypt-nodejs");

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

    // Creating a custom method for our User model. 
  //This will check if an unhashed password entered by the 
  //user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
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