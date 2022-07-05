"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserGameBiodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserGameBiodata.belongsTo(models.UserGame, {
        foreignKey: "id_user",
        as: "user_game",
      });
    }
  }
  UserGameBiodata.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      id_user: DataTypes.INTEGER,
      name: DataTypes.STRING,
      alamat: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserGameBiodata",
    }
  );
  return UserGameBiodata;
};
