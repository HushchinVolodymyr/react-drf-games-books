// Games.js

import React from 'react';
import Feed from "../Feed/Feed";
import './Games.css'

const Games = () => {
  return (
    <div className={'games-container'}>
      <h2>Ігри</h2>
      <Feed type={2}/>
    </div>
  );
}

export default Games;
