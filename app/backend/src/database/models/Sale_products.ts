import { Model, INTEGER } from 'sequelize';
import db from '.';

class SaleProduct extends Model {
    saleId!: number;
    productId!: number;
    quantity!: number;
}

SaleProduct.init({
    saleId: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false
    },
    productId: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false
    },
    quantity: {
        type: INTEGER,
        allowNull: false
    }
}, {
sequelize: db,
modelName: 'sales_products',
timestamps: false
});

export default SaleProduct;