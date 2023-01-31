import DataBase from "../database/dbConection.js";
import fs from "fs";

export default async function Delete(req, res) {

    const { id } = req.params;

    if (!id) {
        return res.status(400).send({ error: "ID faltando!" })
    }

    await DataBase.query(`select foto from programadores where id = ${id}`, (error, result) => {

        //console.log(result[0])

        const { foto } = result[0] || {};

        //console.log(foto)

        try {
            fs.unlink(`./src/app/uploads/${foto}`, (err => {
                if (err) console.log(err)
                else {
                    console.log("Deletado a imagem")
                }
            }));
        } catch (error) {
            console.log(error)
        }

    })

    //fs.unlink("./app/uploads/joao.png").then(console.log).chatch(console.error)

    try {
        await DataBase.query(`delete from programadores  where id = ${id};`, (error, result) => {
            //let dados = []
            //result.forEach(e => {
            //dados.push(e)

            //});
            //res.send({ programadores: dados })
            //console.log(result, error)
        })
    } catch (err) {
        console.log("erro na query de deletar")
    }
    res.send({ menssage: "Deletado com sucesso!" })
}