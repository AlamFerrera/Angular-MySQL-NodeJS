"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
//import { createPool } from 'promise-mysql';
const { promisify } = require('util');
const keys_1 = __importDefault(require("./keys"));
const pool = mysql_1.default.createPool(keys_1.default.database);
/*pool.getConnection((connection) => {
    connection.releaseConnection(connection);
})*/
pool.getConnection((err, conn) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS MANY CONNECTION');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if (conn) {
        conn.release();
        console.log("Conexion exitosa");
    }
    return;
});
//para convertir las consultas en promesas
pool.query = promisify(pool.query);
exports.default = pool;
