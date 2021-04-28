import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Sai Baba Bolo', duration: '6:05' },
    { title: 'Phela Nasha', duration: '4:30' },
    { title: 'Chaiyya Chaiyya', duration: '3:15' },
    { title: 'Dekha Hai Pehli Bar', duration: '4:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
