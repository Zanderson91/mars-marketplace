//const User = require('./User');
const category = require('./category');
const product = require('./product');

Gallery.hasMany(Item, {
  foreignKey: 'gallery_id',
});

Item.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { Gallery, Item };