import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  role!: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING(50),
    allowNull: false,
  },
  email: {
    type: STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: STRING(50),
    allowNull: false,
  },
  role: {
    type: STRING(50),
    defaultValue: 'customer',
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false
});

export default User;