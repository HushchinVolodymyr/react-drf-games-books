// Feed.js

import React, {useEffect, useState} from 'react';
import Card from '../Card/Card';
import './Feed.css'
import axios from "axios";

const Feed = ({type, ...props}) => {
  const data = [
    { id: 1, imageSrc: 'path/to/image1.jpg', title: 'Заголовок 1', description: 'Описание 1' },
    { id: 2, imageSrc: 'path/to/image2.jpg', title: 'Заголовок 2', description: 'Описание 2' },
    // ... добавьте дополнительные элементы данных
  ];

  const [ cards, setCards ] = useState();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const url = 'http://localhost:8000/api/posts/' + type
        const response = await axios.get(url);
        if (response.status === 200){
          setCards(response.data);
        } else {
          console.log("Not 200 status")
        }

      } catch (error) {
        console.log("Error", error)
      }
    }

    fetchCards();
  }, []);


  return (
    <div className="feed">
      {cards && cards.map(item => (
        <Card
          id={item.id}
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.content}
        />
      ))}
    </div>
  );
}

export default Feed;
