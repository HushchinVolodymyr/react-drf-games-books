// Home.js

import React from 'react';
import Feed from "../Feed/Feed";
import './Home.css'

const Home = () => {
  return (
    <div className={'home-container'}>
      <h2>Вітаємо на головній сторінці!</h2>
      <Feed type={0}/>
    </div>
  );
}

export default Home;
