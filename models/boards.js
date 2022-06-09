const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Boards = sequelize.define(
	'repo',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
		},
		stage: {
			type: DataTypes.INTEGER,
			defaultValue: 1,
		},
	},
	{ timestamps: false }
);

module.exports = Boards;
