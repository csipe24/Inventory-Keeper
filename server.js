const express = require("express");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 8080;
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
<<<<<<< HEAD
=======
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
>>>>>>> 886cf7597bc646a33924c27de9942faf9b4d2805

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);
<<<<<<< HEAD
=======

// require("routeTBD")(app);
>>>>>>> 886cf7597bc646a33924c27de9942faf9b4d2805

db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
