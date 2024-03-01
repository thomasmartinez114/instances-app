import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Cards = () => {
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
    <div className='container'>
      <div className='row justify-content-center'>
        {instances.map(instance => (
          <div className='card col-xl-3 col-lg-5 col-md-12 col-sm-12 my-3 border-0'>
            <div className='card__banner'>
              <div className='card__image'>
                <img src={instance.image} alt={instance.title} />
              </div>
              <div className='card__state'>
                <span class='badge bg-secondary'>{instance.state}</span>
              </div>
            </div>
            <div className='card__title'>{instance.title}</div>
            <div className='card__type'>{instance.type}</div>
            <div className='card__body'>
              <div className='location'>
                <p>
                  <a href={instance.prodURL}>Production URL</a>
                </p>
                <p>
                  <a href={instance.prodAdmin}>Production Admin</a>
                </p>
                <p>
                  <a href={instance.qaURL}>QA URL</a>
                </p>
                <p>
                  <a href={instance.qaAdmin}>QA Admin</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
