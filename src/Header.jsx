import React, { useState } from 'react'
import { Outlet,Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from 'react-bootstrap';
import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
    <div className='row'>
      <nav className=' container-fluid'>
        <ul className='d-flex justify-content-evenly flex-wrap' style={{listStyleType:"none", marginTop:'20px',marginBottom:0}}>
        <img src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/guvi.svg" style={{position:"absolute",left:0,top:5}}/>  
      <li className={activeIndex === 0 ? 'active' : ''} onClick={() => handleClick(0)}>
          <Link to = "/" className='linkstyle'> All </Link>
        </li>
        <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
        <Link to = "/fsd" className='linkstyle'>Full Stack Development</Link>
        </li>
        <li className={activeIndex === 2 ? 'active' : ''}onClick={() => handleClick(2)}>
        <Link to = "/datascience" className='linkstyle'>Data Science</Link>        
        </li>
        <li className={activeIndex === 3 ? 'active' : ''}onClick={() => handleClick(3)}>
        <Link to = "/cybersecurity" className='linkstyle'>Cyber Security</Link>        
        </li>
        <li className={activeIndex === 4 ? 'active' : ''}onClick={() => handleClick(4)}>
        <Link to = "/career" className='linkstyle'>Career</Link>        
        </li>
      </ul>
      <hr style={{marginTop:0}}/>
      </nav>
    </div>

   
    <Outlet/>
    </>
  );
}



export default Header;
