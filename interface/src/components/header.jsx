import { Link } from "react-router-dom"
import "../css/header.css"
function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>Programer<span className="logoTxt">List</span> </h1>
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
        </header>
    )
}
export default Header
