// Create Item model
module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define("Item", {
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: DataTypes.INTEGER,
    cost: DataTypes.INTEGER
  });

  // Create Link between Item/Category Models
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
