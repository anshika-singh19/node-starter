const Sequelize = require("sequelize");

//create pool of connection

const sequelize = new Sequelize("node_complete", "root", "As828282", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
