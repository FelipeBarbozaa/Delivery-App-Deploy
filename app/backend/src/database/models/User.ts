import { Model, INTEGER, STRING, BOOLEAN } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  role!: string;
  active!: boolean;
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
    unique: true,
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
  active: {
    type: BOOLEAN,
    defaultValue: false,
  }
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false
});

export default User;