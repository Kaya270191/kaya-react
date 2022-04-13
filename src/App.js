import './App.css';
import React, { Component } from 'react'
import { func } from 'prop-types';

function App(){
  const person = {name: 'dd', age:33}
  const getPersonInfo = (person) => console.log(`name: ${person.name} age:${person.age}`)
  const msg = `hello ${person} ${getPersonInfo}`

  console.log(msg)

  function tagged(string, obj, func){
    console.log(string)
    console.log(obj)
    console.log(func)
  }

  tagged`hello ${person} ${getPersonInfo}`

  return(
    <>
    </>
  )
}

export default App;