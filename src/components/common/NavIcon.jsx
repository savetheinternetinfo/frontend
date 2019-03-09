import React from 'react'
import { Link } from 'react-router-dom'

function NavIcon({icon, route}) {
    return (
      <Link to={route} className="focus:outline-none text-white hover:text-orange-lighter" style={{
        transition: 'color .25s ease-in-out'
      }}>
          {icon}
      </Link>
    )
  }

export default NavIcon
