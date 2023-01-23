import "../css/sobre.css";

function Sobre() {
    return (
        <div className="flexSobre">
            <div className="eu">
                <img src="../joao.png" alt="Foto de João Gabriel Grande" />
            </div>
            <div className="infomacoes">
                <h1>João Gabriel Grande</h1>
                <h2>Web Developer!</h2>
                <div className="cardSobre">
                    <h3>Sobre mim:</h3>
                    <h4>Me chamo João e sou um entusiasta da tecnologia, sempre tive o interesse de saber como as coisas funcionavam e quando conheci a programação tive a oportunidade de entender como os sistemas tecnológicos, como sites e aplicativos, funcionam. O que me gerou o interesse em estudar sobre a área.
                        Tenho conhecimentos em HTML, CSS, JavaScript, React.JS, Node.JS, PHP, Java, MySQL, GIT, GITHUB. tecnologias que estou vendo na faculdade, sendo JavaScript a tecnologia que tenho mais conhecimentos e facilidade para se ultilizar.
                        Até o momento não tenho nenhuma experiência profissional, porém, tenho experiência em alguns projetos próprios que criei aplicando meus conhecimentos teóricos.
                    </h4>
                </div>
                <br />
                <h3>Meus Contatos:</h3>
                <h4>joaogabriel7303@gmail.com</h4>
                <h4>JGGrande</h4>
                <h4>@_joao_grande</h4>

            </div>
            <div className="contato">
                <p><a href="https://www.linkedin.com/in/joao-gabriel-grande/" target="_blank">Linkedin</a></p>
                <p><a href="https://github.com/JGGrande" target="_blank">GitHub</a></p>
                <p><a href="https://github.com/JGGrande/ProgramerList" target="_blank" >Repositório do Projeto</a></p>
            </div>
        </div>
    )
}
export default Sobre