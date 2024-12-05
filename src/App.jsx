import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import HomePage from './pages/HomePage'
import SobrePage from './pages/SobrePage'
import ProdutoPage from './pages/ProdutoPage'
import ProdutoDetalhe from './pages/ProdutoDetalhe'
import ProdutoCadastrar from './pages/ProdutoCadastrar'
import ProdutoPageEdit from './pages/ProdutoPageEdit'

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path="/home" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/cadastrar/produto" element={<ProdutoCadastrar />} />
        <Route path="/produto" element={<ProdutoPage/>}/>
        <Route path="/produto/:id" element={<ProdutoDetalhe/>}/>
        <Route path="/produto/edit/:id" element={<ProdutoPageEdit/>} />
        
        <Route path='*' element="Tela de erro" />

      </Routes>

    </BrowserRouter>
  )
}

export default App
