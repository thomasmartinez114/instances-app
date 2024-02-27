import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  const [instance, setInstance] = useState({
    title: '',
    prodURL: '',
    prodAdmin: '',
    qaURL: '',
    qaAdmin: '',
    image: '',
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setInstance(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/instances', instance);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  console.log(instance);

  return (
    <div className='form'>
      <h1>Add new instance</h1>
      <input
        type='text'
        placeholder='Instance Name'
        onChange={handleChange}
        name='title'
      />
      <input
        type='text'
        placeholder='Production URL'
        onChange={handleChange}
        name='prodURL'
      />
      <input
        type='text'
        placeholder='Production Admin URL'
        onChange={handleChange}
        name='prodAdmin'
      />
      <input
        type='text'
        placeholder='QA URL'
        onChange={handleChange}
        name='qaURL'
      />
      <input
        type='text'
        placeholder='QA Admin URL'
        onChange={handleChange}
        name='qaAdmin'
      />
      <input
        type='text'
        placeholder='Image'
        onChange={handleChange}
        name='image'
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
