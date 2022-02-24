import React from 'react';

class Person extends React.Component {
  state = {
      name: "sunrise",
      age: 23,
      friends: [
          "victoria",
          "daniel",
          "hanna"
      ]
  }
  
  displayInfo = () => {
    const { name, age, friends} = this.state
    alert(`이름:${name} 나이:${age} 친구: ${friends}`)
 }

  render() {    
    return (
    	<>
            <button onClick={this.displayInfo}>신상정보 확인하기</button>
        </>
    )
  }
}

export default Person;


