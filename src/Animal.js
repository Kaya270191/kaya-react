import { type } from '@testing-library/user-event/dist/type'
import React from 'react'



// class Animal extends React.Component{
//     //데이터 초기화
//     state ={
//         tyle: 'cat',
//         name: 'meyow',
//         size: 'small',
//         sound: 'low',
//         appearence: 'cute'
//     }
function Animal({type, name, size, sound, appearence}){
   
    return(
        <>
            <h1>동물정보</h1>
            <h3>종류 - {type}</h3>
            <h3>이름 - {name}</h3>
            <h3>크기 - {size}</h3>
            <h3>소리 - {sound}</h3>
            <h3>생김새 - {appearence}</h3>
            </>
    )
}

export default Animal