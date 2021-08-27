const User = require('./User');
const Product = require('./Product');
const Comment = require('./Comment');

User.hasMany(Product, {
  foreignKey: 'user_id',
});

Product.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

Comment.belongsTo(Product, {
    foreignKey: 'product_id',
    onDelete: 'cascade',
    hooks: true
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

Product.hasMany(Comment, {
    foreignKey: 'product_id',
    onDelete: 'cascade',
    hooks:true
})

module.exports = { User, Product, Comment };
