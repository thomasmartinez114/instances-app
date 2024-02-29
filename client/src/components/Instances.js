import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';
// import { Link } from 'react-router-dom';

const Instances = () => {
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

  // const handleDelete = async id => {
  //   try {
  //     await axios.delete('http://localhost:8800/api/instances/' + id);
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      {instances.map(instance => (
        <div className='card'>
          <div className='card__title'>{instance.title}</div>
          <div className='card__body'>
            <div className='location'>
              <p>{instance.prodURL}</p>
              <p>{instance.prodAdmin}</p>
              <p>{instance.qaURL}</p>
              <p>{instance.qaAdmin}</p>
            </div>
            <div className='card__image'>
              <img src={instance.image} alt={instance.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instances;
