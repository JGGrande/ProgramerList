import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../css/card.css"

function Card(props) {


    const [nome, setNome] = useState("nome")
    const [idade, setIdade] = useState("0")
    const [categoria, setCategoria] = useState("categoria")
    const [img, setImg] = useState("default_img.jpg")

    //verifica se tem os dados se não diver completa com campo default
    useEffect(() => {
        props.nome ? setNome(props.nome) : setNome("nome")
        props.idade ? setIdade(props.idade) : setIdade("0")
        props.categoria ? setCategoria(props.categoria) : setCategoria("categoria")
        props.img ? setImg(props.img) : setImg("default_img.jpg")
    })


    if (!props.id) {
        //alert("algo deu errado")
    }

    //console.log(img)

    return (
        <div className="card">
            <div className="containerImg">
                <img src={"https://programer-list-requests.onrender.com/imagem_programadores/" + `${img}`} alt="imagem do programador" />
            </div>
            <h3>{nome}</h3>
            <h4>{idade} anos</h4>
            <h4>{categoria}</h4>
            <br />
            <div className="botoes">
                <p className="btn-edit">
                    <Link to={"/editar_programador/" + props.id}><strong>Editar</strong></Link>
                    <span className="material-symbols-outlined">
                        edit
                    </span>
                </p>
                <p className="btn-delet" id="delete">
                    <Link to={"/deletar_programador/" + props.id}><strong>Deletar</strong></Link>
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                </p>
            </div>

        </div >
    )
}
export default Card