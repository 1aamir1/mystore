import React from "react";
import './Electronicitem.css';
const Electronicitem = (props) =>{
    return(
        <>
        <div className="Elcitemdiv">
            <img src={props.image} alt="Image not Found" className="productimage"/>
            <h4>{props.name}</h4>
            <h4>{props.price}</h4>
            <button className="Electronicitembutton">View and Order</button>
        </div>
        </>
    )
}

export default Electronicitem;