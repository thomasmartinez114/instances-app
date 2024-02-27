import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Instances = () => {
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    const fetchAllInstances = async () => {
      try {
        const res = await axios.get('http://localhost:8800/instances');
        setInstances(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllInstances();
  }, []);

  return (
    <div>
      <h1>Site Instances</h1>
      <div className='instances'>
        {instances.map(instance => (
          <div className='instance' key={instance.id}>
            {instance.image && <img src={instance.image} alt='' />}
            <h2>{instance.title}</h2>
            <p>{instance.prodURL}</p>
            <p>{instance.prodAdmin}</p>
          </div>
        ))}
      </div>
      <button>
        <Link to='/add'>Add New Instance</Link>
      </button>
    </div>
  );
};

export default Instances;
