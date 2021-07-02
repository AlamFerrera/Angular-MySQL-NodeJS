import mysql from 'mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);


pool.getConnection((err:any, conn:any) => {
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

export default pool;