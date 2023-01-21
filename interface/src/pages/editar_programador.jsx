import "../css/editar_programador.css"

import axios from "axios"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, useParams } from "react-router-dom";


import Modal from "react-modal";

const validationPost = yup.object({
    nome: yup.string().required("Campo usuario não pode estar vazio!").max(200),
    idade: yup.number().transform((value) => (isNaN(value) || value === null || value === undefined) ? 0 : value).required("Campo idade não pode estar vazio!").max(120)
        .test("Numeros negativos", "Não pode inserir numeros negativos!", value => {
            return value && value > 0
        }),
    categoria: yup.string().required("Campo categoria não pode estar vazio!"),
    foto: yup.mixed().test("fileSize", "Limite de 5 MB! ", value => {
        return value && value[0].size <= 5000000;
    })
        .test("type", "Formato não suportado!", (value) => {
            return value && value[0].type === "image/png" || value[0].type === "image/jpeg" || value[0].type === "image/jpg"
        })
}).required();

function Editar_programador() {


    const { id } = useParams();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    const [imagem, setImagem] = useState('')

    const [modalIsOpen, setIsOpen] = useState(false)

    const [mensagem, setMensagem] = useState("Sucesso")


    const fade = document.querySelector("#fade")

    function openModal() {
        setIsOpen(true)
        fade.style.display = 'block'
    }
    function closeModal() {
        setIsOpen(false)
        const fade = document.querySelector("#fade")
        fade.style.display = 'none'
    }

    const addPost = async data => {
        const select = document.querySelector("#select").value

        const formData = new FormData()

        formData.append('foto', imagem)
        formData.append('nome', data.nome)
        formData.append('idade', data.idade)
        formData.append('categoria', select)

        //console.log(formData)
        await axios.patch(`https://programer-list-requests.onrender.com/atualizar_programador/${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then((Response) => {
                openModal()
                setMensagem(Response.data.menssage)
                //console.log("deu certo")
            }).catch((Response) => {
                openModal()
                setMensagem(Response.data.menssage)
                //console.log("Deu errado")
            })
    }

    const [categoria, setCategoria] = useState([])

    useEffect(() => {
        async function pegarCategorias() {
            await axios.get("https://programer-list-requests.onrender.com/categoria")
                .then((Response) => {
                    setCategoria(Response.data)

                }).catch(() => console.log("ERROR na categoria"))
        }
        pegarCategorias()
    }, [])


    return (
        <div className="adicionar_programador">
            <h1>Editar programador</h1>
            <div className="cardPost">
                <div className="line-post"></div>

                <div className="card-body-post">
                    <form conte className="formulario" onSubmit={handleSubmit(addPost)}>

                        <div className="fields">
                            <label>Nome</label><br />
                            <input type="text" className="texto" name="nome" {...register("nome")} />
                            <p>{errors.nome?.message}</p>
                        </div>
                        <div className="fields">
                            <label>Idade</label><br />
                            <input type="number" className="numero" name="idade" {...register("idade")} />
                            <p>{errors.idade?.message}</p>
                        </div>

                        <div className="fields">
                            <label>Foto</label><br />
                            <input type="file" className="imagem" name="foto"  {...register("foto")} onChange={e => setImagem(e.target.files[0])} />
                            <p className="error">{errors.foto?.message}</p>
                        </div>

                        <div className="fields"><br />
                            <label>Categoria</label>
                            <select className="lista" name="categoria" id="select" {...register("categoria")} >
                                {
                                    categoria.map((e) => {
                                        return (
                                            <option value={e.categoria} >
                                                {e.categoria}
                                            </option>
                                        )
                                    })

                                }
                            </select>
                            <p>{errors.categoria?.message}</p>
                        </div>

                        <div className="">
                            <button className="btn-post">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="fade" id="fade">aaa</div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <br />
                <br />
                <br />
                <h1>{mensagem}</h1>
                <br />
                <br />
                <br />
                <p className="btnHome" >
                    <Link to="https://programer-list.netlify.app/">Home</Link>
                </p>
            </Modal>

        </div >
    )
}
export default Editar_programador