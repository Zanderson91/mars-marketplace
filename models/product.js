const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedPaintings = require('./itemData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedPaintings();
  await itemData();

  process.exit(0);
};

seedAll();
