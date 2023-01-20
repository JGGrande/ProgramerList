import "../css/adicionar_programador.css"

import { useForm } from "react-hook-form"
import axios from "axios"
import { useEffect, useState } from "react"
import Modal from "react-modal"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationPost = yup.object({
    nome: yup.string().required("Campo usuario não pode estar vazio!").max(200),
    idade: yup.number().transform((value) => (isNaN(value) || value === null || value === undefined) ? 0 : value).required("Campo idade não pode estar vazio!").max(120)
        .test("Numeros negativos", "Não pode inserir numeros negativos!", value => {
            return value && value > 0
        }),
    categoria: yup.string().required("Campo categoria não pode estar vazio!"),
    foto: yup.mixed().test("fileSize", "Precisa selecionar um arquivo com menos de 5 MB! ", value => {
        return value && value[0].size <= 5000000;
    })
        .test("type", "Formato não suportado!", (value) => {
            return value && value[0].type === "image/png" || value[0].type === "image/jpeg" || value[0].type === "image/jpg"
        })
}).required();



function Adiconar_Programador() {



    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    const [imagem, setImagem] = useState('')

    const [modalIsOpen, setIsOpen] = useState(false)

    const [mensagem, setMensagem] = useState("Sucesso")

    /*const convet2base64 = file => {
        const render = new FileReader();

        render.onload = () => {
            setImagem(render.result.toString())
        }

        render.readAsDataURL(file)
    }*/


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
        await axios.post("https://programer-list-requests.onrender.com/adicionar_programador", formData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then((Response) => {
                openModal()
                setMensagem(Response.data.menssage)
            }).catch((Response) => {
                openModal()
                setMensagem(Response.data.menssage)
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

    //console.log(categoria)
    return (
        <div className="adicionar_programador">
            <h1>Adicionar programador</h1>
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
                            <p>{errors.foto?.message}</p>
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
                    <a href="https://programer-list.netlify.app/">Home</a>
                </p>
            </Modal>
        </div>
    )
}



export default Adiconar_Programador