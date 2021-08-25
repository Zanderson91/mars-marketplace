const { item } = require('../models');

const itemData = [
  {
    title: 'Space Suit',
    description: 'A Kickstarter project will help you dress like you belong in space, even if you cant afford an actual ticket to suborbit.',
    price: 10000,
    date_posted: 'August 30, 2021',
    gallery_id: 1,
    location: 'Houston',
  },
];
  const seedItem = () => item.bulkCreate(itemData);

module.exports = seedItem;