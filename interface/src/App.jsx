import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './App.css'
import Card from './components/card'


function App() {

  const [dados, setDados] = useState([])

  useEffect(() => {
    axios.get("https://programer-list-requests.onrender.com")
      .then((response) => {
        setDados(response.data.dados)
      }).catch(() => {
        console.log("algo deu errado")
      })
  }, [])

  return (
    <div className='home'>
      <h1 className='titulo'>Venha conhecer nossos programadores!</h1>
      <div className="flex">
        {dados.map((e) => {
          console.log(e)
          return (
            <div className="cardItem">
              <Card nome={e.nome} idade={e.idade} categoria={e.categoria} img={e.foto} id={e.id} />
            </div>
          )
        })}
      </div>
      <p className='btnVerMais'>
        <Link to="/programadores">Ver todos! </Link>
      </p>
      <br />
    </div>
  )
}

export default App
