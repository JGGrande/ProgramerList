import Express, { response } from "express";
import cors from "cors"
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs"

const app = Express();

import DataBase from "./database/dbConection.js";

import Update from "./routes/update.js";
import Read from "./routes/read.js";
import Create from "./routes/create.js";
import Delete from "./routes/delete.js";
import ReadNoParams from "./routes/ReadNoParams.js";
import Categoria from "./app/models/categoria.js";
import dados from "./app/models/ReadModel.js";
import ReadById from "./routes/ReadByIndex.js";



app.use(bodyParser.json())
app.use(cors())
app.use('/imagem_programadores', Express.static('./src/app/uploads'))

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, path.resolve("./src/app/uploads"));
        },
        filename(req, file, cb) {
            cb(null, `${Date.now().toString()}-${file.originalname}`);
        },
    }),

});
app.get("/", async (req, res) => {
    await DataBase.query("select * from  programadores ORDER BY RAND() limit 5 ", (error, result) => {
        const dados = new Array()
        result.forEach(e => {
            DataBase.query(`select categoria from categoria where id = ${e.id_categoria}`, (error, result) => {
                const { categoria } = result[0]
                e.categoria = categoria
                //console.log(e)
                dados.push(e)
            });

        });
    })

    await exportarDados(res, dados)

})

function exportarDados(res, array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            //verifica se tem o programador 
            if (!array.length)
                return res.status(400).send({ error: "Error ao se conectar ao servidor" })

            res.send({ programadores: array });
            resolve()
        }, 100)
    })
}

app.get("/teste", (req, res) => {
    res.send(app.request)
})

//mostrar
app.get('/programadores', ReadNoParams);
app.get('/programadores/:nome', Read);
app.get('/programador/:id', ReadById);
app.get('/categoria', Categoria)
//cirar 
app.post('/adicionar_programador', upload.single('foto'), Create)
//atualizar
app.patch('/atualizar_programador/:id', upload.single('foto'), Update)
//deletar
app.delete("/deletar_programador/:id", Delete)

app.listen("3000", () => {
    console.log("Server is runing on http://localhost:3000");
});