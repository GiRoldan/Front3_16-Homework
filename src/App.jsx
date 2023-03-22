import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Beer from './pages/Beer'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { routes } from './routes'

function App() {
  return (
   <div>
      <Navbar/>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contacto} element={<Contacto/>}/>
        <Route path={routes.beer} element={<Beer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
   </div>
  )
}

export default App
