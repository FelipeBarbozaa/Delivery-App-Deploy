import { Model, INTEGER, STRING, DECIMAL } from 'sequelize';
import db from '.';

class Product extends Model {
	id!: number;
	name!: string;
	price!: number;
	url_image!: string;
}

Product.init({
	id: {
		type: INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: STRING(100),
		unique: true,
		allowNull: false,
	},
	price: {
		type: DECIMAL(4, 2),
		allowNull: false,
	},
	url_image: {
		type: STRING(100),
		allowNull: false,
	}
	}, {
		sequelize: db,
		modelName: 'products',
		timestamps: false
	})

export default Product;