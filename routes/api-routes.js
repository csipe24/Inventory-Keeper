const router = require("express").Router();
const dev = {
  status: "In development"
};

// Placeholder API routes

router.get("/api/items", (req, res) => {
  console.log("Read Items");
  res.json(dev);
});

router.post("/api/items", (req, res) => {
  console.log("Create Items");
  res.json(dev);
});

router.delete("/api/items/:id", (req, res) => {
  console.log("Delete Items");
  res.json(dev);
});

router.get("/api/categories", (req, res) => {
  console.log("Read categories");
  res.json(dev);
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
