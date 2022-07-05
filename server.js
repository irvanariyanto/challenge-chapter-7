var express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
var session = require("express-session");

var app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: "Your secret key" }));

var indexRouter = require("./routes/index");

var Users = [
  {
    username: "irvan",
    password: "password",
  },
];

// app.get("/login", function (req, res) {
//   res.setHeader("Content-Type", "text/html");
//   res.render("login", {
//     message: "",
//   });
// });

// app.post("/login", function (req, res) {
//   //   console.log(Users);
//   console.log(req.body.username);
//   console.log(req.body.password);
//   if (!req.body.username || !req.body.password) {
//     res.render("login", { message: "Please enter both id and password" });
//   } else {
//     Users.filter(function (user) {
//       if (
//         user.username === req.body.username &&
//         user.password === req.body.password
//       ) {
//         req.session.user = user;
//         res.redirect("/");
//       }
//     });
//     res.render("login", { message: "Invalid credentials!" });
//   }
// });

app.use("/", indexRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ` + PORT);
});
