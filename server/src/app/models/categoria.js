import DataBase from "../../database/dbConection.js";
export default function Categoria(req, res) {
    DataBase.query("select categoria from categoria", (error, result) => {
        res.send(result)
    });
}   