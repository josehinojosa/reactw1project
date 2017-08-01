import React from 'react';

export default class NavBar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <div className="nav" style={{textAlign: "center"}}>
            <h1>Play A Song!</h1>
            </div>
            </div>
        )
    };
}

