import './App.css';
import { Component } from 'react';
//import animals from './dummyData'
import cosmetic from './Cosmetic'
//2번
// class App extends Component {
//   state = {
//     randomIndex:0
//   }
//   pickRandomNumber = (min, max) => { //랜덤 번호를 뽑는 함수 
//     return Math.floor( Math.random() * (max-min+1) ) + min
//   }  

//   increaseCount = () => {
//     this.setState({ randomIndex: this.pickRandomNumber(0,animals.length)})
//   }
//   componentDidMount(){
//     this.countID = setInterval(this.increaseCount, 1000)
//   }
  
//   componentWillUnmount(){
//     clearInterval(this.countID)
//   }
//   render(){
//     const {  randomIndex } = this.state
//     const animal = animals[randomIndex%animals.length]
//     //const animal = animals[count%animals.length]
//     console.log(animal)
//     return (
//       <div className="App">
//         <h1>영어 사전</h1>
//         <h3>{animal.word}</h3>
//         <h3>{animal.meaning}</h3>
//       </div>
//     );
//   }
// }


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // clickClick: true,
      cosmetics: []
    }
  }
 
  componentDidMount(){
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then( res => res.json())
    .then( result => {
      console.log(cosmetics)
      this.setState({cosmetics: result})
    })
  }
  
  render(){
    const {cosmetics} = this.state

    return(
      <>
      
      
      
      </>

    )
    
    

    // if(loading){
    //   return (
    //     <div style={loadingStyle}>
    //       <h1>Loading ...</h1>
    //     </div>
    //   )
    // }else{
    //   return (
    //     <div style={style}>
    //       {cosmetics.map(cosmetic => {
    //         return (
    //           <Cosmetic 
    //             key={cosmetic.id}
    //             brand={cosmetic.brand}
    //             name={cosmetic.name}
    //             price={cosmetic.price}
    //             image={cosmetic.image_link}
    //           ></Cosmetic>

    //         )
    //       })}
    //     </div>
    //   )
    // }
  }
}


export default App;