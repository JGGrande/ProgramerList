import DataBase from "../../database/dbConection.js";
let dados = []
await DataBase.query(`select * from programadores `, (error, result) => {

    result.forEach(e => {

        DataBase.query(`select categoria from categoria where id = ${e.id_categoria}`, (error, result) => {
            const { categoria } = result[0]
            e.categoria = categoria
            //console.log(e)
            dados.push(e)
        });

    });


});
//console.log(dados)
export default dados