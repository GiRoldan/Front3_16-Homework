import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../routes'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className='navbar'>
        {/* Aqui deberan agregar los Links */}
        <button onClick={() => navigate(-1)}>↩</button>
        <Link to={routes.home}><h3>Home</h3></Link>
        <Link to={routes.contacto}><h3>Contacto</h3></Link>
        <Link to={routes.beer}><h3>Beer</h3></Link>      
    </nav>
  )
}

export default Navbar