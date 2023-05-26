import PizzasPage from './PizzasPage';
import TelaPrincipal from './TelaPrincipal';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<TelaPrincipal />}/>
      </Routes>
      <Routes>
        <Route path='/pizzas' element={<PizzasPage />}/>
      </Routes>
    </>
  )
}

export default App
