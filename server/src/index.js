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



app.use(bodyParser.json())
app.use(cors())
app.use('/programadores', Express.static('./src/app/uploads'))

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
        let dados = []
        result.forEach(e => {
            dados.push(e)

        });
        res.send({ dados })
    })

})

app.get("/teste", (req, res) => {
    res.send(app.request)
})

//mostrar
app.get('/programadores', ReadNoParams)
app.get('/programadores/:nome', Read)
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