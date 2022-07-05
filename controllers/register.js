const UserGame = require("../models").UserGame;
const UserGameBiodata = require("../models").UserGameBiodata;
const Role = require("../models").Role;

async function register(req, res) {
  const usergame = await UserGame.create({
    username: req.body.username,
    password: req.body.password,
  });
  const id = usergame.id;
  const usergamebiodata = await UserGameBiodata.create({
    id_user: id,
    name: req.body.name,
    alamat: req.body.alamat,
  });

  const role = await Role.create({
    id: id,
    name: req.body.role,
  });
  console.log(usergame);
  console.log(usergamebiodata);
  console.log(role);
  console.log(req.body);

  const data = {};
  data["username"] = usergame.username;
  data["name"] = usergamebiodata.name;
  data["alamat"] = usergamebiodata.alamat;
  data["role"] = role.name;

  res.json(data);
}

module.exports = {
  register,
};
