import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
 if(!song){
   return <div><h3>Plz Select the songs..</h3></div>
 }
  return <div>
    <h3>Song Detail</h3>
    <div>
      <h4>Title : {song.title} </h4> 
      <br/>
     <h4>Duration : {song.duration} </h4> 
    </div>
  </div>;
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
