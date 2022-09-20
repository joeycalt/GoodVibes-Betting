import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <h1 className='header'>
        <img className='top-img' src='https://i.im.ge/2022/09/19/1dvbB1.Screen-Shot-2022-09-18-at-8-36-33-PM.png'></img>
        GoodVibes Betting
    <img className='top-img' src='https://i.im.ge/2022/09/19/1dvbB1.Screen-Shot-2022-09-18-at-8-36-33-PM.png'></img>
    </h1>
    <nav className="nav navbar">
   
      <Link to="/home">
      <img className='logo'  src='https://i.im.ge/2022/09/19/1dvbB1.Screen-Shot-2022-09-18-at-8-36-33-PM.png'></img>
      </Link>
      <Link className='nav-league' to='/baseball'>Baseball
      </Link>
      <Link className='nav-league' to='/football'>Football
      </Link>
      <Link className='nav-league' to='/hockey'>Hockey
      </Link>
      <Link className='nav-league' to='/about'>About
      </Link>
    </nav>
</>
  )
}

export default Header