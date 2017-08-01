import React from 'react';
import NavBar from './NavBar'
import PlayList from './PlayList'
import PlayListForm from './PlayListForm'

export default class App extends React.Component{
  render(){
    return(
      <div className="App">
        <div className="Navbar">
        <NavBar/>
        </div>
        <div className="bob">
        <div className="jenny">
        <PlayListForm/>
        </div>
        <div className="tony">
        <PlayList/>
        </div>
        </div>
      </div>
    )
  }
}


// The styling is up to you, but please make this a polished product!