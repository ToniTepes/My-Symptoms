module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
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
    } //,
    // createdAt: Sequelize.DATE,
    // updatedAt: Sequelize.DATE
  });
  return user;
};
