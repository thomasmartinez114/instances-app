import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import axios from 'axios';

function App() {
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    const fetchAllInstances = async () => {
      try {
        const res = await axios.get('http://localhost:8800/api/instances');
        setInstances(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllInstances();
  }, []);

  return (
    <div className='App'>
      <div className='cards-container'>
        {instances.map(instance => (
          <div className='card'>
            <div className='card__title'>{instance.title}</div>
            <div className='card__body'>
              <div className='location'>
                <p>{instance.prodURL}</p>
                <p>prodAdmin</p>
                <p>qaURL</p>
                <p>qaAdmin</p>
              </div>
              <div className='card__image'>
                <img src={instance.image} alt={instance.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
