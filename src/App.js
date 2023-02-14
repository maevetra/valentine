import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './landing.js';
import Letter from './letter.js';
import Loading from './loading.js';

function App() {
  return (
    <div className="App">
      <body className='App-body'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='loading' element={<Loading />} />
        <Route path='letter' element={<Letter />} />
      </Routes>
      </body>
    </div>
  )
}

export default App;
