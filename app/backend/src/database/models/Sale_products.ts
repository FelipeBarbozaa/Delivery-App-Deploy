import { Model, INTEGER } from 'sequelize';
import db from '.';

class Sale_product extends Model {
    sale_id!: number;
    product_id!: number;
    quantity!: number;
}

Sale_product.init({
    sale_id: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false
    },
    product_id: {
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
})