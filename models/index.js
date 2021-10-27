// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsToMany } = require('../../../inclass/unit13-ORM/01-Activities/28-Stu_Mini-Project/unit13-mini-project/models/Traveller');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: '',
});
// Categories have many Products
Category.hasMany(Product,{
  foreignKey:'',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag });
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag } );

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
