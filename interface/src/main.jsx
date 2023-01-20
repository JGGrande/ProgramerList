import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Programadores from "../src/pages/programadores"
import Sobre from "../src/pages/sobre"
import App from './App'

import Footer from './components/footer'
import Header from './components/header'
import './index.css'
import Adiconar_Programador from './pages/adicionar_programador'
import Deletar_programador from './pages/deletar_programador'
import Editar_programador from './pages/editar_programador'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='https://programer-list.netlify.app/' element={<App />} />
        <Route path='https://programer-list.netlify.app/programadores' element={<Programadores />} />
        <Route path='https://programer-list.netlify.app/sobre' element={<Sobre />} />
        <Route path='https://programer-list.netlify.app/adicionar_programador' element={<Adiconar_Programador />} />
        <Route path='https://programer-list.netlify.app/deletar_programador/:id' element={<Deletar_programador />} />
        <Route path='https://programer-list.netlify.app//editar_programador/:id' element={<Editar_programador />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
)
