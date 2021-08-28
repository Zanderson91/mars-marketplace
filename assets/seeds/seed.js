const sequelize = require('../config/connection');
const { User, Product, Comment } = require('../models');

const userData = require('./userData.json');
const productData = require('./productData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const products of productData) {
    await Product.create({
      ...products,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });

    for (const comments of commentData) {
        await Comment.create({
          ...comments,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
  }
  }
  process.exit(0);
};

seedDatabase();