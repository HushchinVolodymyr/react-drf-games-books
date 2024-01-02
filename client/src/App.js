// App.js

import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'

import Header from './components/Header/Header'
import Home from "./components/Home/Home";
import Games from "./components/Games/Games";
import Books from "./components/Books/Books";
import NotFound from "./components/NotFound/NotFound";
import CardItem from "./components/CardItem/CardItem";

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/books" element={<Books />} />
          <Route path='/post/:value' element={<CardItem />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
