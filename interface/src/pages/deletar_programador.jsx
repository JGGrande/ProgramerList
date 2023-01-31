import "../css/deletar_programador.css"

import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react";

function Deletar_programador() {

    const { id } = useParams();

    useEffect(() => {
        axios.delete(`https://programer-list-requests.onrender.com/deletar_programador/${id}`)
            .then((Response) => {
                console.log(Response)
            })
            .catch(() => {
                console.log("erro ao tentar deletar")
            })
    }, [])


    return (
        <>
            <div className="containerDeletar">
                <div className="textoDeletar">
                    <h1>Programador Deletado</h1>
                </div>
                <div className="imagemTriste">
                    <img src="../img/emoji_triste.jpg" alt="teste" />
                </div>
                <p className="btnHome">
                    <Link to="/">Home</Link>
                </p>
            </div>
            <br />
            <br />
        </>
    )
}
export default Deletar_programador