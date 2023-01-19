import "../css/deletar_programador.css"

import axios from "axios"
import { useParams } from "react-router-dom"

function Deletar_programador() {

    const { id } = useParams();

    axios.delete(`http://localhost:3000/deletar_programador/${id}`)
        .then((Response) => {
            console.log(Response)
        })
        .catch(() => {
            console.log("erro")
        })

    return (
        <>
            <div className="containerDeletar">
                <div className="textoDeletar">
                    <h1>Programador Deletado</h1>
                </div>
                <div className="imagemTriste">
                    <img src="../public/img/emoji_triste.jpg" alt="teste" />
                </div>
                <p className="btnHome">
                    <a href="/">Home</a>
                </p>
            </div>
            <br />
            <br />
        </>
    )
}
export default Deletar_programador