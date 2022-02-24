import React, { Component } from 'react';

class NameTag extends Component{
   state = {
    	name: "initial name"
    }
    changeName = () => {
    	this.setState({name: "changed name"})
    }
    render(){//이벤트 핸들러 
    	console.log('NameTag')
    	const {name} = this.state
    	return (
            <>
            	<h1>{name}</h1>
                <button type="button" onClick={this.changeName}>change name</button>
            </>
        )
    }
 }
 export default NameTag;