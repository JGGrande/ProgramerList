import dados from "../app/models/ReadModel.js"
export default async function ReadNoParams(req, res) {
    console.log(dados)
    res.send({ programadores: dados })
}