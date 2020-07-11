const express = require("express");
const db = require("./models");
const app = express();
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
const exphbs = require("express-handlebars");
const path = require("path");

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.use(apiRoutes);
app.use(htmlRoutes);

db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
