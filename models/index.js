// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'product_id'
});

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_product'
});

Tag.belongsToMany(Product, {
  through: {
    model: Product,
    unique: false
  },
  as: 'tag_id'
});




module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
