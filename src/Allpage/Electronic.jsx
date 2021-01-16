import React from "react";
import './Electronic.css';
import Electronicitem from "./Electronicitem";

const Electronic = () =>{
    return(
        <>
        <div className="electronicdiv">
        <Electronicitem image="Electronicitemimage/Samsungmetro.jpg" name="Samsung Metro" price="2200"/>
        <Electronicitem image="Electronicitemimage/Dryer.jpg"  name="Eluret Best" price="999"/>
        <Electronicitem image="Electronicitemimage/Powerbank.jpg"  name="Power Bank" price="1299"/>
        <Electronicitem image="Electronicitemimage/Bulb.jpg"  name="White Bulb" price="159"/>
        <Electronicitem image="https://electronicsarena.in/wp-content/uploads/2020/07/racold-geyser-6litre-250x300.jpg"  name="Water Heater" price="10999"/>
        <Electronicitem image="https://shoppingwish-images.s3.amazonaws.com/thumb4/aua41hmo25f0b-070915.jpeg"  name="Mixer" price="700"/>
        <Electronicitem image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZy0YG5DUq63aGISBH9gzjC3IqcYTVOVSHA&usqp=CAU"  name="Fan" price="1200"/>
        <Electronicitem image="https://www.lotusemall.com/Uploads/Product/e5bf73_06102020112323AM.jpg"  name="Wall Watch" price="300"/>
        <Electronicitem image="https://images-eu.ssl-images-amazon.com/images/I/41v7ftinwcL._SY300_QL70_ML2_.jpg"  name="Gold Lamp" price="599"/>
        </div>
        </>
    )
}

export default Electronic;