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
                        <a href="https://programer-list.netlify.app/"><strong>Home</strong></a>
                    </li>
                    <li>
                        <a href="https://programer-list.netlify.app/programadores"><strong>Programadores</strong></a>
                    </li>
                    <li>
                        <a href="https://programer-list.netlify.app/sobre"><strong>Sobre</strong></a>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
export default Header