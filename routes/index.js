var express = require("express");
var router = express.Router();

const checkSignIn = require("../middleware/auth").checkSignIn;
const verifyToken = require("../middleware/verifyToken").verifyToken;

const usergameController = require("../controllers").usergame;
const registerController = require("../controllers").register;
const loginController = require("../controllers").login;
const roomController = require("../controllers").room;
const fightController = require("../controllers").fight;

router.get("/", checkSignIn, usergameController.index);
router.get("/add", checkSignIn, usergameController.add);
router.post("/add", checkSignIn, usergameController.store);
router.get("/:id", checkSignIn, usergameController.edit);
router.post("/edit", checkSignIn, usergameController.saveEdit);
router.post("/delete/:id", checkSignIn, usergameController.deleteUserGame);

router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.post("/create-room", verifyToken, roomController.createRoom);
router.post("/fight/:room_id", verifyToken, fightController.fight);

module.exports = router;
