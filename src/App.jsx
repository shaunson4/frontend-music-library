import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic';


function App() {

  const[songs, setSongs] = useState([{title: 'Thats Life', artist: 'Frank Sinatra', album: 'Thats Life',  release_date: '11-25-1966', genre: 'Traditional Pop'}])

    useEffect(() => {
      getAllSongs();
    }, [])

    async function getAllSongs(){
      try{
        let response = await axios.get('http:127.0.0.1:8000/api/music/');
        console.log(response.data);
    }   catch () {
        console.log ('Error in getAllSongs API call!')
    }

  return (
    <div >
      <DisplayMusic parentMusic={songs} />
    </div>
  );
}

export default App;
