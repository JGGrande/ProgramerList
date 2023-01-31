import { useState, useEffect } from "react"
import axios from "axios";
import Card from "../components/card"
import "../css/programadores.css"
import { Link } from "react-router-dom";


function Programadores() {

    const [busca, setBusaca] = useState("");

    const [dados, setDados] = useState([])


    useEffect(() => {
        axios.get("https://programer-list-requests.onrender.com/programadores")
            .then((response) => {
                console.log(response.data.programadores)
                setDados(response.data.programadores)
            }).catch(() => {
                console.log("algo deu errado")
            })

    }, [])




    return (
        <div className='home'>
            <div className="barraPesquisa">
                <input type="text"
                    value={busca}
                    onChange={(ev) => {
                        setBusaca(ev.target.value)
                        if (!ev.target.value)
                            return console.log("vazio")

                        axios.get(`https://programer-list-requests.onrender.com/programadores/${busca}`,)
                            .then((response) => {
                                console.log(response.data.programadores)
                                setDados(response.data.programadores)
                            }).catch(() => {
                                console.log("algo deu errado")
                            })
                    }}
                    placeholder="Digite o nome do programador"
                    className="pesquisa"
                />
            </div>
            <div className="containerBtn">
                <p>
                    <Link to="/adicionar_programador">Adicionar Programador</Link>
                </p>
            </div>
            <div className="flex">
                {dados.map((e) => {
                    //console.log(e)
                    return (
                        <div className="cardItem">
                            <Card nome={e.nome} idade={e.idade} categoria={e.categoria} img={e.foto} id={e.id} />
                        </div>
                    )
                })}
            </div>
            <br />
        </div>

    )
}
export default Programadores