"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserGameHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserGameHistory.belongsToMany(models.UserGame, {
        through: "UserGameUserGameHistory",
        foreignKey: "id_user",
        as: "user_game",
      });
    }
  }
  UserGameHistory.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      id_user: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
      time: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserGameHistory",
    }
  );
  return UserGameHistory;
};
