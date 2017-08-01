import React from 'react';
import PlayListItem from './PlayListItem';

export default class PlayList extends React.Component{
    constructor(props){
        super(props);
        this.state =   {
            songs: []
         }
    }
    componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting') 
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    });
    }
    fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    });
  }
    
    render(){
        const {songs} = this.state
        return(
           <div className="col-md-4 offset-md-4">
            <button className="btn btn-primary" onClick = {this.fetchData}>Click It! </button>
            {songs.map(song => <PlayListItem song={song} key={song.id}/>)}
        </div>
       );
    }
}

// Your PlayListcomponent should pass down the state in the form of props to your PlayListItem component which will render the actual play list entries. (Hint: PlayListItem should be imported in PlayList)
// The state for your PlayList should just have one key value pair, songs, in order to properly function with the fetch function from the tinylasagna.js file that you will copy into the PlayListComponent (follow the directions in that file).
