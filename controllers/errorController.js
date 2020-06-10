exports.get404Error = (req, res, next) => {
  res.status(404).render("404", { docTitle: "404", path: "" });
};
