const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const sequelize = require("./utils/database");
const app = express();

const errorController = require("./controllers/errorController");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); //public folder

app.use("/admin", adminRoutes);

app.use(shopRoutes);

//catch all route
app.use(errorController.get404Error);
sequelize
  .sync()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
app.listen(8000);
