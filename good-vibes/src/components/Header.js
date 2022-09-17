import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <h1 className='header'>GoodVibes Betting</h1>
    <nav className="nav navbar">
   
      <Link to="/">GVB
      </Link>
      <Link to='/baseball'>Baseball
      </Link>
      <Link to='/football'>Football
      </Link>
      <Link to='/hockey'>Hockey
      </Link>
    </nav>
</>
  )
}

export default Header