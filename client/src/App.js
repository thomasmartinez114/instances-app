import React from 'react';
import './App.css';
import Instances from './components/Instances';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// import Add from './pages/Add';
// import Update from './pages/Update';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <h1>GNIE Instances</h1>
      <div className='cards-container'>
        <div className='row'>
          <Instances />
        </div>
      </div>
    </div>
  );
}

export default App;
