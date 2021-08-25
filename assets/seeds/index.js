const sequelize = require('../../config/connection');
const seedGallery = require('./galleryData');
const seedItem = require('./itemData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedItem();

  process.exit(0);
};

seedAll();