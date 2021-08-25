const User = require('./User');
const Gallery = require('./Gallery');
const Item = require('./Item');

Gallery.hasMany(Item, {
  foreignKey: 'gallery_id',
});

Item.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Item };