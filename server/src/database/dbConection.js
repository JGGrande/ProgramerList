import mysql from "mysql";
const DataBase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'teste_gazin',
})

export default DataBase;