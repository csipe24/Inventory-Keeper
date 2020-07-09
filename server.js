const express = require("express");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 8080;
const apiRoutes = require("./routes/api-routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(apiRoutes);

// require("routeTBD")(app);

db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
