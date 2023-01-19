import dados from "../app/models/ReadModel.js"
export default async function ReadNoParams(req, res) {
    res.send({ programadores: dados })
}