const pool = require('../config/db');
const bcrypt = require('bcrypt');


const verificarCredenciales = async (email, password) =>{
    const consulta = "select * from usuarios where email = $1 and password = $2"
    const values = [email, password];
    const {rows:[ usuarios], rowCount} = await pool.query(consulta, values);
    const { password: passwordEncrypt} = usuarios
    const passwordCorrecta =  bcrypt.compareSync(password, passwordEncrypt)


    if (!passwordCorrecta || !rowCount) {
        throw ({
            code: 401,
            message: "contraseña invalida"
        })
    }
}

module.exports = {
    verificarCredenciales
}