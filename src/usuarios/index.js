
const allUsers = [{
    id: 1,
    userName: 'Foo'
}, {
    id: 2,
    userName: 'Bar'
}]

async function _getAllUsers() {
    return allUsers
}

async function _getSingleUser(id) {
    const userFound = allUsers.filter( (user) => {
        return user.id == id
    })

    if (userFound && userFound.length) {
        return userFound[0]
    }
    return {}
}

async function _createUser(userObj) {
    if (!userObj.userName) {
        throw new Error('Parametros invalidos')
    }
    const usuarioExiste = allUsers.filter(u => u.userName == userObj.userName)
    if (usuarioExiste.length) {
        throw new Error('Usuario ja existe')
    }

    const newUser = {
        id: allUsers.length + 1,
        userName: userObj.userName
    }

    allUsers.push(newUser)

    return newUser
}

module.exports = {
    getAllUsers: _getAllUsers,
    getSingleUser: _getSingleUser,
    createUser: _createUser
}