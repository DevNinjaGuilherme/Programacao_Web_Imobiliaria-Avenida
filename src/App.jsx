import { useState } from 'react'
import './App.css'

function App() {

  const [tipoImovel, setTipoImovel] = useState(' ')

  function casa() {
    setTipoImovel('Casa')
  }

  function apartamento() {
    setTipoImovel('Apartamento')
  }

  return (
    <div className="centralizado">
      <h1>Imobiliária Avenida</h1>
      <h2>Qual Tipo de Imóvel Você Procura?</h2>
      <hr />
      <div className='imagens'>
        <img  onClick={casa} id='casa__imagem' src="./casa_imagem.jpg" alt="Imagem de Uma Casa" />&nbsp;&nbsp;&nbsp;
        <img onClick={apartamento} id='apartamento__imagem' src="./apartamento_imagem.jpg" alt="Imagem de Um Apartamento" />
      </div>

      <h1>
        Você selecionou: <span className={tipoImovel ? 'destaque' : ''}>{tipoImovel}</span>
      </h1>
    </div>
  )
}

export default App