import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className='card'>
              <img
                src='https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/calottery-logo.png'
                alt=''
                className='card-img-top'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card Title</h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam tempora similique consequatur autem unde ipsum!
                  Nesciunt modi velit ea repellat explicabo inventore
                  accusantium dolore neque minima, est ullam molestiae minus!
                  Quam explicabo consectetur repellat non unde error quia
                  beatae? Dolores numquam voluptatem neque rerum labore aliquam
                  quo officia inventore! Facere illo assumenda eligendi? Quos,
                  dolorem. Veniam hic dolorum praesentium itaque.
                </p>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='card'>
              <img
                src='https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/calottery-logo.png'
                alt=''
                className='card-img-top'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card Title</h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam tempora similique consequatur autem unde ipsum!
                  Nesciunt modi velit ea repellat explicabo inventore
                  accusantium dolore neque minima, est ullam molestiae minus!
                  Quam explicabo consectetur repellat non unde error quia
                  beatae? Dolores numquam voluptatem neque rerum labore aliquam
                  quo officia inventore! Facere illo assumenda eligendi? Quos,
                  dolorem. Veniam hic dolorum praesentium itaque.
                </p>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='card'>
              <img
                src='https://ccscentralstorage.blob.core.windows.net/staging/images/gnie-tracking/calottery-logo.png'
                alt=''
                className='card-img-top'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card Title</h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam tempora similique consequatur autem unde ipsum!
                  Nesciunt modi velit ea repellat explicabo inventore
                  accusantium dolore neque minima, est ullam molestiae minus!
                  Quam explicabo consectetur repellat non unde error quia
                  beatae? Dolores numquam voluptatem neque rerum labore aliquam
                  quo officia inventore! Facere illo assumenda eligendi? Quos,
                  dolorem. Veniam hic dolorum praesentium itaque.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'></div>
      </div>
    </div>
  );
};

export default Instances;
