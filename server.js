// Require NPM Packages
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

// Port Config & Models for Sync
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Create Express App and Config Middleware for Data Parsing
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.use(apiRoutes);
app.use(htmlRoutes);

// Require Routes
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

// Setting Up Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Syncing Database
db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
