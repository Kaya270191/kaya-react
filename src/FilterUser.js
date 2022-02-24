import React from 'react'

function FilterUser({name, age, city, email}){
    return(
        <div>
            {(age>0) && (age%1===0) && (email.indexOf("@")!=-1)&& (email.indexOf(".com") !=-1)&&
                <div name={name}>  
                <h3>{name}{age}</h3>
                <h3>{city}</h3>
                <h3>{email}</h3>
                <h3>-------------</h3>
                </div>}
        </div> 
    )
}
export default FilterUser
