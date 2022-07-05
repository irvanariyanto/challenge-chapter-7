const UserGame = require("../models").UserGame;
const UserGameBiodata = require("../models").UserGameBiodata;

async function index(req, res) {
  const usergame = await UserGame.findAll({
    include: [{ model: UserGameBiodata, as: "user_game_biodata" }],
    raw: true,
  });
  res.render("index", { usergame: usergame });
}

async function add(req, res) {
  res.render("add");
}

async function store(req, res) {
  const usergame = await UserGame.create({
    username: req.body.username,
    password: req.body.password,
  });
  const id = usergame.id;
  const usergamebiodata = UserGameBiodata.create({
    id_user: id,
    name: req.body.name,
    alamat: req.body.alamat,
  });

  res.redirect("/");
}

async function edit(req, res) {
  const id = req.params.id;
  const usergame = await UserGame.findOne({
    where: { id: id },
    include: [{ model: UserGameBiodata, as: "user_game_biodata" }],
    raw: true,
  });
  console.log(usergame);
  res.render("edit", { usergame: usergame });
}

async function saveEdit(req, res) {
  console.log(req.body["user_game_biodata.name"]);
  const usergame = await UserGame.update(
    {
      username: req.body.username,
    },
    { where: { id: req.body.id } }
  );
  const usergamebiodata = await UserGameBiodata.update(
    {
      name: req.body.name,
      alamat: req.body.alamat,
    },
    { where: { id_user: req.body.id } }
  );

  res.redirect("/");
}

async function deleteUserGame(req, res) {
  const usergame = await UserGame.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/");
}

module.exports = {
  index,
  add,
  store,
  edit,
  saveEdit,
  deleteUserGame,
};
