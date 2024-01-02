// Header.js

import React from 'react';
import './Header.css'; // Подключаем файл стилей

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Портал ігор та книг</h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item"><a href="/" className="header__link">Головна</a></li>
          <li className="header__item"><a href="/games" className="header__link">Ігри</a></li>
          <li className="header__item"><a href="/books" className="header__link">Книги</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
