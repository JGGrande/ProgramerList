import mysql from "mysql";
const DataBase = mysql.createConnection({
    host: 'byqgmyp2imcsq97830gp-mysql.services.clever-cloud.com',
    user: 'unn9gfh8lh0gfgx7',
    password: 'cW06x3kpl765otfnu31k',
    database: 'byqgmyp2imcsq97830gp',
})
/*const DataBase = mysql.createConnection({
    host: '',
    user: 'root',
    password: '1234',
    database: 'teste_gazin',
})*/

export default DataBase;