import { Model, INTEGER } from 'sequelize';
import db from '.';
import Product from './Product';

class SaleProduct extends Model {
    saleId!: number;
    productId!: number;
    quantity!: number;
}

SaleProduct.init({
    saleId: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'sale_id'
    },
    productId: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'product_id'
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

SaleProduct.belongsTo(Product, { foreignKey: 'productId' as 'product'});

export default SaleProduct;