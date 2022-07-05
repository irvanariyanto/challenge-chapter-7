const Room = require("../models").Room;
const Sequelize = require("sequelize");

async function createRoom(req, res) {
  //   res.json(room);
  const id = await Room.findAll({
    attributes: [Sequelize.fn("max", Sequelize.col("id"))],
    raw: true,
  });
  let room = null;
  console.log(id[0].max);
  if (id[0].max == null) {
    room = await Room.create({
      id: 1,
      name: req.body.name,
    });
  } else {
    room = await Room.create({
      id: id[0].max + 1,
      name: req.body.name,
    });
  }
  res.json({ room_id: room.id });
}

module.exports = {
  createRoom,
};
