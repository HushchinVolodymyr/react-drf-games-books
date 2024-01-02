import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CardItem.css';

const CardItem = ({ id, ...props }) => {
  const { value } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const url = 'http://localhost:8000/api/card/' + value;
        const response = await axios.get(url);
        if (response.status === 200) {
          setItem(response.data[0]);
          console.log(item.title); // Move inside this block
        } else {
          console.log('Not 200 status');
        }
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchItem();
  }, [value]);

  return (
    <div className={'item-container'}>
      {item ? (
        <>
          <h1>{item.title}</h1>
          <div className={'image-container'}>
            <img src={'http://localhost:8000' + item.image} alt={item.title} className={'image'}/>
          </div>
          <h3>{item.content}</h3>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardItem;
