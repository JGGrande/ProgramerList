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

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/programadores' element={<Programadores />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/adicionar_programador' element={<Adiconar_Programador />} />
        <Route path='/deletar_programador/:id' element={<Deletar_programador />} />
        <Route path='/editar_programador/:id' element={<Editar_programador />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  </React.StrictMode>,
)
