import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Instances from './pages/Instances';
import Add from './pages/Add';
import Update from './pages/Update';
import './style.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Instances />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
