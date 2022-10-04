import { Model, INTEGER, STRING, DECIMAL, DATE } from 'sequelize';
import db from '.';

class Sale extends Model {
  id!: number;
  userId!: number;
  sellerId!: number;
  totalPrice!: number;
  deliveryAddress!: string;
  deliveryNumber!: string;
  saleDate!: Date;
  status!: string;
}

Sale.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    field: 'user_id'
  },
  sellerId: {
    type: INTEGER,
    allowNull: false,
    field: 'seller_id'
  },
  totalPrice: {
    type: DECIMAL(9, 2),
    allowNull: false,
    field: 'total_price'
  },
  deliveryAddress: {
    type: STRING(50),
    allowNull: false,
    field: 'delivery_address'
  },
  deliveryNumber: {
    type: INTEGER,
    allowNull: false,
    field: 'delivery_number'
  },
  saleDate: {
    type: DATE,
    allowNull: false,
    field: 'sale_date'
  },
  status: {
    type: STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'sales',
  timestamps: false
});

export default Sale;