module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define("Item", {
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: DataTypes.INTEGER,
    cost: DataTypes.INTEGER
  });

  Item.associate = function(models) {
    Item.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
        name: "CategoryId"
      }
    });
  };

  return Item;
};
