import path from "path";
import DataBase from "../database/dbConection.js";
export default async function Create(req, res) {


    /*const { foto } = req.file.name

    console.log(foto)*/


    const { nome, idade, categoria } = req.body;

    const foto = req.file.filename

    //console.log(categoria, idade, nome)

    if (!nome)
        return res.status(400).send({ error: "Nome faltando!" })
    if (!foto)
        return res.status(400).send({ error: "Foto faltando!" })
    if (!idade)
        return res.status(400).send({ error: "Idade faltando!" })
    if (!categoria)
        return res.status(400).send({ error: "Categoria faltando!" })

    await DataBase.query(`insert into programadores(nome,foto,idade,id_categoria) values ('${nome}', '${foto}', ${idade}, (select id from categoria where categoria = '${categoria}'));`, (error, result) => {
        //let dados = []
        //result.forEach(e => {
        //dados.push(e)

        //});
        //res.send({ programadores: dados })
        //console.log(result, error)
    })
    res.send({ menssage: "Criado com sucesso!" })
    //res.send({ message: "ok" })
}