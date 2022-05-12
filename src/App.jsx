import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic';
import SearchSong from './Components/SearchBar';


function App() {

  const [songs, setSongs] = useState([{ title: 'Thats Life', artist: 'Frank Sinatra', album: 'Thats Life', release_date: '11-25-1966', genry: 'Traditional Pop' }])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/music/');
      setSongs(response.data);
    } catch (ex) {
      console.log('Error in getAllSongs, API call!', ex)
    }

  }
  return (
    <div >
      <DisplayMusic parentMusic={songs} />
      <SearchSong/> 
    </div>
  );
}
export default App;
