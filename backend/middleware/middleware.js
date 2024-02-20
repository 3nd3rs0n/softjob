const pool = require('../config/db');


const verificarCredenciales = async (email, password) =>{
    const consulta = "select * from usuarios where email = $1 and password = $2"
    const  values = [email, password];
    const {rowCount} = await pool.query(consulta, values);

    if (!rowCount){
        throw ({
            code: 404,
            message: "correo sin credenciales "
        })
    }
}

module.exports = {
    verificarCredenciales
}