import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import "../css/header.css"
function Header() {


    const [modalIsOpen, setIsOpen] = useState(false)

    const [mensagem, setMensagem] = useState("Sucesso")

    function openModal() {
        setIsOpen(true)
        const fade = document.querySelector("#fade")
        fade.style.display = 'block'
    }
    function closeModal() {
        setIsOpen(false)
        const fade = document.querySelector("#fade")
        fade.style.display = 'none'
    }



    return (
        <header className="header">
            <div className="logo">
                <h1>Programer<span className="logoTxt">List</span> </h1>
            </div>
            <div className="btnSlide">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn" onClick={openModal}>
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </label>
            </div>

            <nav className="navbar" >

                <ul>
                    <li>
                        <Link to="/"><strong>Home</strong></Link>
                    </li>
                    <li>
                        <Link to="/programadores"><strong>Programadores</strong></Link>
                    </li>
                    <li>
                        <Link to="/sobre"><strong>Sobre</strong></Link>
                    </li>

                </ul>
            </nav>
            <div className="fade" id="fade"></div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal-content-navbar"
                overlayClassName="modal-overlay"
            >
                <nav className="navbarModal" >
                    <ul>
                        <li>
                            <Link className="linkModal" to="/"><strong>Home</strong></Link>
                        </li>
                        <li>
                            <Link className="linkModal" to="/programadores"><strong>Programadores</strong></Link>
                        </li>
                        <li>
                            <Link className="linkModal" to="/sobre"><strong>Sobre</strong></Link>
                        </li>

                    </ul>
                </nav>

            </Modal>
        </header>
    )
}
export default Header
