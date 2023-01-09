const { Category } = require('../models');

const categoryData = [
  {
    category_data: 'Shirts',
  },
  {
    category_data: 'Shorts',
  },
  {
    category_data: 'Music',
  },
  {
    category_data: 'Hats',
  },
  {
    category_data: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

// seedCategories();
module.exports = seedCategories;
