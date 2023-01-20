import DataBase from "../database/dbConection.js";


export default async function Update(req, res) {

    const { id } = req.params

    const { nome, idade, categoria } = req.body;

    const foto = req.file.filename

    if (!id)
        return res.status(400).send({ error: "ID faltando!" })
    if (!nome)
        return res.status(400).send({ error: "Nome faltando!" })
    if (!foto)
        return res.status(400).send({ error: "Foto faltando!" })
    if (!idade)
        return res.status(400).send({ error: "Idade faltando!" })
    if (!categoria)
        return res.status(400).send({ error: "Categoria faltando!" })


    await DataBase.query(`update programadores set nome = '${nome}', idade = ${idade}, foto = '${foto}', id_categoria = (select id from categoria where categoria = '${categoria}') where id = ${id};`, (error, result) => {
        //let dados = []
        //result.forEach(e => {
        //dados.push(e)

        //});
        //res.send({ programadores: dados })
        //console.log(result, error)
    })
    res.send({ menssage: "Editado com sucesso!" })
}