const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render("shop/product-list", {
        prod: products,
        docTitle: "Product List",
        path: "/products"
      });
    })
    .catch(err => {
      console.log(err);
    });

  //   res.sendFile(path.join(rootDir, "views", "shop.html")); // takes absolute path i.e path from root of OS and path helps us to point to current folder
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render("shop/index", {
        prod: products,
        docTitle: "Shop",
        path: "/"
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then(product => {
      res.render("shop/product-detail", {
        product: product,
        docTitle: "Product Detail",
        path: "/products"
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    // prod: products,
    docTitle: "Your Cart",
    path: "/cart"
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    // prod: products,
    docTitle: "Your Orders",
    path: "/orders"
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    // prod: products,
    docTitle: "Your Cart",
    path: "/cart"
  });
};
