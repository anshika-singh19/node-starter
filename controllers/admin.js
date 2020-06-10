const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    activeProduct: true,
    productCSS: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  Product.create({
    title: title,
    imageUrl: imageUrl,
    description: description,
    price: price
  })
    .then(result => {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
  // const product = new Product(title, imageUrl, description, price);
  // product
  //   .save()
  //   .then(() => {
  //     res.redirect("/");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("admin/products", {
      prod: products,
      docTitle: "Admin Products",
      path: "admin/products"
    });
  });
};
