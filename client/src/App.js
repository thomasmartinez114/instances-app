import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Instances from './components/Instances';
// import Add from './pages/Add';
// import Update from './pages/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

function App() {
  return (
    <div className='App'>
      <h1 className='text-center mb-4'>Instances</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Instances />} />
          {/* <Route path='/add' element={<Add />} />
          <Route path='/update/:id' element={<Update />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
