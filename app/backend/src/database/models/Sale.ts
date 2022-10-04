import { Model, INTEGER, STRING, DECIMAL, DATE } from 'sequelize';
import db from '.';

class Sale extends Model {
  id!: number;
  user_id!: number;
  seller_id!: number;
  total_price!: number;
  delivery_address!: string;
  delivery_number!: string;
  sale_date!: Date;
  status!: string;
}

Sale.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: INTEGER,
    allowNull: false,
  },
  seller_id: {
    type: INTEGER,
    allowNull: false,
  },
  total_price: {
    type: DECIMAL(9, 2),
    allowNull: false,
  },
  delivery_address: {
    type: STRING(50),
    allowNull: false,
  },
  delivery_number: {
    type: INTEGER,
    allowNull: false,
  },
  sale_date: {
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