// const products = [];
// const fs = require("fs");
// const db = require("../utils/database");
// const path = require("path");

// const getProductsFromFile = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       fileContent && fileContent.length > 0
//         ? cb(JSON.parse(fileContent))
//         : cb([]);
//     }
//   });
// };
// module.exports = class Product {
//   constructor(title, imagerl, description, price) {
//     this.title = title;
//     this.imageUrl = imagerl;
//     this.description = description;
//     this.price = price;
//   }
//   save() {
//     return db.execute(
//       "INSERT INTO products (title,price,description,imageUrl) VALUES (?,?,?,?)",
//       [this.title, this.price, this.description, this.imageUrl]
//     );
//   }
//   static fetchAll() {
//     return db.execute("Select * FROM products");
//   }

//   static findById(id) {
//     return db.execute("Select * FROM products WHERE products.id=?", [id]);
//   }
// };

const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;
