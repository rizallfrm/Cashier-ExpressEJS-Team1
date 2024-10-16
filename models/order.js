"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Order.init(
        {
            customer_id: DataTypes.INTEGER,
            product_id: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            order_date: DataTypes.DATEONLY,
            total_price: DataTypes.INTEGER,
        },
        {
            timestamps: true,
            sequelize,
            modelName: "Order",
        }
    );
    return Order;
};
