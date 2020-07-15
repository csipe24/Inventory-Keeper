//Require Dependencies/Models
const router = require("express").Router();
const db = require("../models/index");

// Routes

// GET route to grab all records of items
router.get("/", (req, res) => {
  console.log("Read Items");
  db.Item.findAll({
    include: [
      {
        model: db.Category
      }
    ]
  }).then(results => {
    res.render("index", { items: JSON.parse(JSON.stringify(results)) });
  });
});

router.get("/api/items", (req, res) => {
  console.log("Read all items");
  db.Item.findAll({
    include: [{ model: db.Category }]
  }).then(results => {
    res.json(results);
  });
});

// Get route for 1 specific item
router.get("/api/items/:id", (req, res) => {
  console.log("Read one item ");
  db.Item.findOne({
    include: [{ model: db.Category }],
    where: {
      id: req.params.id
    }
  }).then(results => {
    res.json(results);
  });
});

// POST route to create new item
router.post("/api/items", (req, res) => {
  console.log("Create Items");
  console.log(req.body);
  console.log(req.body.item);
  db.Item.create(req.body).then(results => {
    res.json(results);
  });
});

// DELETE route to delete item from database
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

// PUT route to edit a specific item
router.put("/api/items/:id", (req, res) => {
  db.Item.update(
    {
      item: req.body.itemName,
      quantity: req.body.itemQuantity,
      cost: req.body.itemCost,
      CategoryId: req.body.itemCategoryId
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

// GET route to get all categories
router.get("/api/categories", (req, res) => {
  console.log("Read categories");
  db.Category.findAll({}).then(results => {
    res.json(results);
  });
});

// POST route to create new category
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

// DELETE route to delete category, currently unused
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

// PUT route to edit categories
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
