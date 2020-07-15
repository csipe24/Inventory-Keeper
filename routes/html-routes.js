// Create Basic HTML GET Route
const router = require("express").Router();

// Routes user is sent to
router.get("/", (req, res) => {
  res.render("index");
});

router.get("*", (req, res) => {
  res.render("index");
});

module.exports = router;
