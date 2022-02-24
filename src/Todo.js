import React, {Component} from 'react'

function Todo({ user, name, done, description}){
    return (
        <>
        <h2>user:{user}</h2>
        <h3>name:{name}</h3>
        <h4>done:{done? "finished": "ongoing"}</h4>
        <p> description: {description}</p>
        </>

    )
}

export default Todo;

// class Todo extends Component{
//     //state 선언 => 데이터 초기화
//     constructor(props){
//         super(props)
//         this.state={
//              //Todo 데이터 정의   
//             name:'cleaning',
//             done: false,
//             description: "cleaning my room in weekends"
//         }    
//     }


    // //이벤트 핸들러 함수 
    // changeTodoName = ()=>{
    //     console.log(this)
    //     this.setState({name: "learning react"})
    // }


    // render(){
    //     const {name, done, description} = this.state
    //     const { user } = this.props
    //     console.log(this.props)
    

    // //html 템플릿
    //     return(
    //         <>
    //             <h3>{name}</h3>
    //             <h4>{done? "finished":"ongoing"}</h4>
    //             <p>description: {description}</p>
    //             <button type="button" onClick={this.changeTodoName}
    //             >change todo name</button>
    //         </>
    //    )
//     }
// }
// export default Todo;