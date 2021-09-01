const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        fullName: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        listingTitle: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        listingCategory: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
        listingDescription: {
          type: DataTypes.STRING,
          allowNull: false,
        },
            user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            }

        },

    },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

