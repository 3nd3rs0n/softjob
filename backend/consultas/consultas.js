const pool = require('../config/db')

const bcrypt = require('bcryptjs')




const getPosts = async (email) => {
    const {rows} = await pool.query("select * from usuarios where email = $1", [email])
    return rows
}

const sendPosts = async (email,password,rol,lenguage) => {
    // verificar si hay que crear una variable let 
    const passwordEncrypt =  bcrypt.hashSync(password)
    const clave = passwordEncrypt
    const {rows} = await pool.query("insert into usuarios(email,password,rol,lenguage) values ($1,$2,$3,$4)",
    [email,clave,rol,lenguage])
    return rows
}

module.exports = {
    sendPosts,
    getPosts
}