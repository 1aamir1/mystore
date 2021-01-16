import React from "react";
import './Header.css';
const Header = () =>{
    return(
        <>
         <div className="header">
        <img src="Logoimg/Logoimg.jpg" alt="BigCo Inc. logo" width="180px" height="80px" />
        <input type="text" placeholder="Search.." />
        <button className="navbutton" type="submit">Search<i class="fa fa-shopping-cart"></i></button>
        <img src="Logoimg/Sidelogo.jpg" alt="BigCo Inc. logo" width="600px" height="80px" />
      </div>
        </>
        
    )
}

export default Header;