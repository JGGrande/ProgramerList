import DataBase from "../database/dbConection.js";

export default async function ReadById(req, res) {

    const programador = req.params

    const dadosBody = new Array()
    await DataBase.query(`select * from programadores where id LIKE '${programador.id}%' `, (error, result) => {

        result.forEach(e => {

            DataBase.query(`select categoria from categoria where id = ${e.id_categoria}`, (error, result) => {
                const { categoria } = result[0]
                e.categoria = categoria
                //console.log(e)
                dadosBody.push(e)

            });
        });


    });

    await exportarDados(res, dadosBody)
}
function exportarDados(res, array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            //verifica se tem o programador 
            if (!array.length)
                return res.status(400).send({ error: "Programador não encontrado!" })
            res.send({ programadores: array });
            resolve()
        }, 100)
    })
}
