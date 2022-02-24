//버튼을 클릭할때마다 쇼핑카트에 고객이 원하는 상품을 추가하고, 
//화면에 전체 상품목록을 보여주는 Cart 컴포넌트

import React, { Component } from 'react'

class Cart extends Component{
    state = {
        cart: []
    }

    //구현하기- 이벤트 핸들러
    addProduct = () => {
        const product = prompt("원하시는 상품을 추가해주세요 !")
        const cart = this.state
        console.log(`before updating state: ${cart}`)
        this.setState({cart:[...this.state.cart, product]})
        console.log(this.state)
    }

    // 구현하기
    render(){
        const { cart } = this.state 
    
        return(
            <>
            <button type ="button" onClick={this.addProduct}>상품 추가하기</button>
            <h1>상품 목록</h1>
            <h1>--------------</h1>
            {cart.map((item)=>{
                return <h3>{item}</h3>
            })}
            </>
        )
    }

}
export default Cart