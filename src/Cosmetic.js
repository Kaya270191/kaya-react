import React from 'react';

function Cosmetic({id, brand, name, price, image}){
   
    return (
        <>
            <h2>{brand}</h2>
            <h2>{name}</h2>
            <h2>{price}</h2>
            <img src={image}></img>
           
        </>
    )
}
 
export default Cosmetic;