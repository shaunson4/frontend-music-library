import React, { useState } from 'react';
import DisplayMusic from './Components/DisplayMusic';


function App() {

  const[music, setMusic] = useState([{title: 'Thats Life', artist: 'Frank Sinatra', album: 'Thats Life',  release_date: '11-25-1966', genre: 'Traditional Pop'}])

  return (
    <div >
      <DisplayMusic parentMusic={music} />
    </div>
  );
}

export default App;
