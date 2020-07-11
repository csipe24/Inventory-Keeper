const router = require("express").Router();
const models = require("../models/index");
const dev = {
  status: "In development"
};

// Placeholder API routes

router.get("/api/items", (req, res) => {
  console.log("Read Items");
  models.Item.findAll({}).then(results => {
    res.json(results);
  });
});

router.post("/api/items", (req, res) => {
  console.log("Create Items");
  console.log(req.body);
  console.log(req.body.item);
  models.Item.create({
    item: req.body.item,
    cost: req.body.cost,
    quantity: req.body.quantity,
    CategoryId: req.body.categoryid
  }).then(results => {
    res.json(results);
  });
});

router.delete("/api/items/:id", (req, res) => {
  console.log("Delete Items");
  res.json(dev);
});

router.get("/api/categories", (req, res) => {
  console.log("Read categories");
  models.Category.findAll({}).then(results => {
    res.json(results);
  });
});

router.post("/api/categories", (req, res) => {
  console.log("Create categories");
  res.json(dev);
});

router.delete("/api/categories/:id", (req, res) => {
  console.log("Delete categories");
  res.json(dev);
});

module.exports = router;
