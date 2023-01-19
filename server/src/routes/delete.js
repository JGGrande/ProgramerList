import DataBase from "../database/dbConection.js";
export default async function Delete(req, res) {

    const { id } = req.params;

    if (!id) {
        return res.status(400).send({ error: "ID faltando!" })
    }

    await DataBase.query(`delete from programadores  where id = ${id};`, (error, result) => {
        //let dados = []
        //result.forEach(e => {
        //dados.push(e)

        //});
        //res.send({ programadores: dados })
        //console.log(result, error)
    })
    res.send({ menssage: "Deletado com sucesso!" })
}