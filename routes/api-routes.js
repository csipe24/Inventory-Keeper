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

router.put("/api/items/:id", (req, res) => {
  db.Item.update(
    {
      item: req.body.item,
      quantity: req.body.quantity,
      cost: req.body.cost,
      CategoryId: req.body.CategoryId
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(result => {
    if (result[0] === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      res.status(404).end();
    } else {
      res.status(200).end();
    }
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

router.put("/api/categories/:id", (req, res) => {
  db.Category.update(
    {
      category: req.body.category
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(result => {
    if (result[0] === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
