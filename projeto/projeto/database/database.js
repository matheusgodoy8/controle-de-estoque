const Sequelize = require('sequelize')
const connection = new Sequelize('guia_press', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = connection