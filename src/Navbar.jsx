import React from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";
const Navbar = ()=>{
    return(
        <>
            <div className="menu">
        <div className="navbar">
          <p><NavLink to="/Electronic" style={{ textDecoration: 'none', color: 'black' }}> ELECTRONIC</NavLink></p>
          <p><NavLink to="/MOBILE" style={{ textDecoration: 'none', color: 'black' }}> MOBILE</NavLink></p>
          <p><NavLink to="" style={{ textDecoration: 'none', color: 'black' }}>WATCH</NavLink></p>
          <p><NavLink to="" style={{ textDecoration: 'none', color: 'black' }}>CLOTHS</NavLink></p>
          <p><NavLink to="" style={{ textDecoration: 'none', color: 'black' }}>FOOT WARE</NavLink></p>
          <p><NavLink to="" style={{ textDecoration: 'none', color: 'black' }}>BABY TOY</NavLink></p>
          <p><NavLink to="" style={{ textDecoration: 'none', color: 'black' }}>LAPTOP & COMPUTRT</NavLink></p>
          <p><NavLink to="" style={{ textDecoration: 'none', color: 'black' }}>DEAL OF THE DAY</NavLink></p>
        </div>
        
        
      </div>
        </>
    )
};

export default Navbar;