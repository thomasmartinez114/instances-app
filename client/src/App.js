import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filter from './components/Filter/Filter';
import Cards from './components/Cards/Cards';

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let api = `http://localhost:8800/api/instances?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className='App'>
      <h1 className='text-center my-4'>
        <span className='text-primary'>GNIE</span> Knowledge Base Instances
      </h1>

      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Filter />
          </div>
          <div className='col-8'>
            <div className='row'>
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
