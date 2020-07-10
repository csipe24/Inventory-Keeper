const express = require("express");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 8080;
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);

// require("routeTBD")(app);

db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
