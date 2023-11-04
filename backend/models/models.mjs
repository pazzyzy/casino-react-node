import { CHAR, DataTypes, TEXT } from 'sequelize'
import sequelize from '../db.mjs'

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.TEXT, unique: true },
  password: { type: DataTypes.TEXT },
  balance: { type: DataTypes.INTEGER },
})

export { User }
