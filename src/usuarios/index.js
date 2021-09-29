const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('../db')

class User extends Model {}
User.init({
    userName: DataTypes.STRING
}, { sequelize, modelName: 'user' });

User.sync()

async function _getAllUsers() {
    return User.findAll()
}

async function _getSingleUser(id) {
    return User.findByPk(id)
}

async function _createUser(userObj) {
    if (!userObj.userName) {
        throw new Error('Parametros invalidos')
    }

    const newUser = await User.create({userName: userObj.userName})
    console.log(newUser)

    return newUser
}

module.exports = {
    getAllUsers: _getAllUsers,
    getSingleUser: _getSingleUser,
    createUser: _createUser
}