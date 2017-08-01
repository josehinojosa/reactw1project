import React from 'react';
import PlayList from './PlayList';

export default class PlayListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {song} = this.props;
        return(
            <div className="Songdiv">
            <span><b>User: </b>{song.userName}</span><br/>
            <span><b>Artist: </b>{song.songArtist}</span><br/>
            <span><b>Title: </b>{song.songTitle}</span><br/>
            <span><b>Notes: </b>{song.songNotes}</span><br/>
            </div>
        );
    }
}
