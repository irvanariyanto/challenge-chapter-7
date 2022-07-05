const UserGame = require("../models").UserGame;
const Role = require("../models").Role;
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const usergame = await UserGame.findOne({
    where: { username: req.body.username, password: req.body.password },
  });
  const data = {};
  if (usergame != null) {
    var token =
      "Bearer " +
      jwt.sign(
        {
          id: usergame.id,
        },
        "secret",
        {
          expiresIn: 86400, //24h expired
        }
      );
    data["token"] = token;
  } else {
    data["message"] = "login failed";
  }

  res.json(data);
}

module.exports = {
  login,
};
