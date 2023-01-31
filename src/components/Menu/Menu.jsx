import React, { useState } from 'react'
import s from './Menu.module.scss'
import { NavLink } from 'react-router-dom'
import { links } from '../../constants/menuPizzas'
const Menu = ( ) => {
  const [activeLink, setActiveLink] = useState(0)
  const handleActive = (i) => {
    setActiveLink(i)
  }
  return (
    <div className={s.menu}>
      <div className={s.komponent}>
        {links.map((link, i) => (
          <NavLink
            to={link.url}
            key={i} onClick={() => handleActive(i)}
            className={activeLink === i ? s.active : ''}
          >
            {link.name}
          </NavLink>
        ))}
        </div>
      
     
    
    </div>
  )
}

export default Menu