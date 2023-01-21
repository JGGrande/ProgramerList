import "../css/footer.css"
function Footer() {
    return (
        <footer className="footer">
            <h3>Desenvolvido por João Gabriel Grande</h3>
            <div className="icons">
                <ul>
                    <li>
                        <div className="container">
                            <a href="https://www.linkedin.com/in/joao-gabriel-grande/" target="_blank">
                                <img src="../linkedin.svg" alt="Linkedin Icon" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="container">
                            <a href="https://github.com/JGGrande" target="_blank">
                                <img src="../github.svg" alt="GitHub Icon" />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer