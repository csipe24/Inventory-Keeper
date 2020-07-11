const router = require("express").Router();
const db = require("../models/index");

// Placeholder API routes

router.get("/", (req, res) => {
  console.log("Read Items");
  db.Item.findAll().then(results => {
    console.log(results);
    res.render("index", { items: results });
  });
});

router.post("/api/items", (req, res) => {
  console.log("Create Items");
  console.log(req.body);
  console.log(req.body.item);
  db.Item.create(req.body).then(results => {
    res.json(results);
  });
});

router.delete("/api/items/:id", (req, res) => {
  console.log("Delete Items");
  db.Item.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.end();
  });
});

router.get("/api/categories", (req, res) => {
  console.log("Read categories");
  db.Category.findAll({}).then(results => {
    res.json(results);
  });
});

router.post("/api/categories", (req, res) => {
  console.log("Create categories");
  console.log(req.body);
  console.log(req.body.item);
  db.Category.create({
    category: req.body.category
  }).then(results => {
    res.json(results);
  });
});

router.delete("/api/categories/:id", (req, res) => {
  console.log("Delete categories");
  db.Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.end();
  });
});

module.exports = router;
