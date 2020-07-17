// Create Category model
module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define("Category", {
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Link Category/Item Models
  Category.associate = models => {
    models.Category.hasMany(models.Item, {
      onDelete: "CASCADE"
    });
  };

  return Category;
};
