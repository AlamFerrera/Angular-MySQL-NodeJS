import mysql from 'mysql';
//import { createPool } from 'promise-mysql';
const {promisify} = require('util');
import keys from './keys';

const pool = mysql.createPool(keys.database);
/*pool.getConnection((connection) => {
    connection.releaseConnection(connection);
})*/

pool.getConnection((err:any, conn) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS MANY CONNECTION');
        }
        if(err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if(conn){
        conn.release();
        console.log("Conexion exitosa");
    }
    return;
});

//para convertir las consultas en promesas
pool.query = promisify(pool.query);

export default pool;