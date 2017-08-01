import React from 'react';



export default class PlayListForm extends React.Component {  
  constructor(props) {
    super(props);
    this.state ={
        userName: '',
        songArtist: '', 
        songTitle: '',
        songNotes : ''
    }
  }
addToList = (event) => {
    event.preventDefault();
    this.setState({userName: event.target.value, songTitle: event.target.value, songArtist: event.target.value, songNotes: event.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting" , {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
  ).then(response => {
    console.log(response, "yay");

  }).catch(err => {
    console.log(err, "boo!");
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
}
handleName = e => {
  this.setState({userName: e.target.value});
}
handleBand = e => {
  this.setState({songArtist: e.target.value});
}
handleSong = e => {
  this.setState({songTitle: e.target.value});
}
handleNotes = e => {
  this.setState({songNotes: e.target.value});
}
render(){
    return(
    <form>
      <p>
      <input onChange={this.handleName}
        type="text"
        className="Name"
        id="userName"
        placeholder="Name or User Name"
        value={this.state.Name}/>
        </p>
        <p>
        <input  onChange={this.handleBand}
        type="text"
        className="Band"
        id="Artist"
        placeholder="Artist or Band Name"
        value={this.state.Band}/>
        </p>
        <p>
        <input  onChange={this.handleSong}
        type="text"
        className="Song"
        id="Song"
        placeholder="Song Name"
        value={this.state.Song}/>
        </p>
        <p>
        <input  onChange={this.handleNotes}
        type="textarea"
        className="Text"
        id="Notes"
        placeholder="Song Notes"
        value={this.state.Notes}/>
        </p>
        <button onClick={this.addToList}>submit</button>
    </form>);
}
}

