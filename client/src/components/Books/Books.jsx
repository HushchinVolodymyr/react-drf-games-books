// Books.js

import React from 'react';
import Feed from "../Feed/Feed";
import './Books.css'

const Books = () => {
  return (
    <div className={'books-container'}>
      <h2>Книги</h2>
      {/* Добавьте контент для страницы с книгами */}
      <Feed type={1}/>
    </div>
  );
}

export default Books;
