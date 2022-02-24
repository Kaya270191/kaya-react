//버튼을 클릭할때마다 포토 갤러리에 사진을 추가하고,
//화면에 전체 사진 리스트를 보여주는 PhotoGallery 컴포넌트

import React, { Component } from 'react'

class PhotoGallery extends Component{
    state = {
        photos: []
    }

    //구현하기
    addPhoto = () => {
        const photo = prompt("추가하려는 사진의 경로를 입력해주세요 !")
        const photos = this.state
        this.setState({photos:[...this.state.photos, photo]})
        console.log(this.state)
    }

    // 구현하기
    render(){
        const {photos} = this.state
        
        return(
            <>
            <button type ="button" onClick={this.addPhoto}>사진 추가하기</button>
            <h1>포토 갤러리</h1>
            <h1>------------</h1>
            {photos.map((address)=>{
                return <img src={address}></img>
            })}
            </>

        )
    }
}
export default PhotoGallery