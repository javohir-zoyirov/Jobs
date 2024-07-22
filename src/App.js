import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ApiContext } from './components/context';
import HomePage from './components/home-page';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';
import { JobCards } from './components/job-cards';

function App() {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <ApiContext.Provider value={{ value, setValue }}>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/jobs' element={<JobCards/>} />
          </Routes>
        </Router>
      </ApiContext.Provider>
    </div>
  );
}

export default App;
