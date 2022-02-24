import React, {Component } from 'react';

class Friends extends Component {
    constructor(props){
        super(props)
        const num = this.props.num
        const friends = [
            {name: 'victoria', age: 13, city: 'seoul'},
            {name: 'sun', age: 34, city: 'busan'},
            {name: 'johseb', age: 25, city: 'busan'},
            {name: 'syleemomo', age: 9, city: 'seoul'},
            {name: 'hannah', age: 41, city: 'daegu'},
            {name: 'shara', age: 37, city: 'seoul'},
            {name: 'martin', age: 28, city: 'daegu'},
            {name: 'gorgia', age: 39, city: 'seoul'},
            {name: 'nana', age: 24, city: 'busan'},
            {name: 'dannel', age: 19, city: 'seoul'},
        ]
        this.state=friends[num]
    }

    //html 템플릿 
    render(){
        //데이터 선언 
        const {name, age, city} = this.state

        //html 템플릿
        return(
            <>
                <h5>{name}</h5>
                <h5>{age}</h5>
                <h5>{city}</h5>
                <h5>-----------------</h5>
 
            </>
        )
    }
}
export default Friends
