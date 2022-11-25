require('dotenv').config({ path: __dirname+'/./../../../.env' })


module.exports = {
    development: {
       username: process.env.DATABASE_USER,
       password: process.env.PASSWORD,
       database: process.env.DATABASE,
       host: '127.0.0.1',
       dialect: 'mysql',
       logging: false,
       define: {
        timestamps: true
       },
       timezone: '-03:00'
    }
}