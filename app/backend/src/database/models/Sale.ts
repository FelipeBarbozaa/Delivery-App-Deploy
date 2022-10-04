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
  },
  sellerId: {
    type: INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DECIMAL(9, 2),
    allowNull: false,
  },
  deliveryAddress: {
    type: STRING(50),
    allowNull: false,
  },
  deliveryNumber: {
    type: INTEGER,
    allowNull: false,
  },
  saleDate: {
    type: DATE,
    allowNull: false
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