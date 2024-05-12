import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Courses from './courses/Courses';
import Register from './componats/Register';





function App() {
  return (
  <>
  <div className='dark:bg-slate-900 dark:text-white'><Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Course" element={<Courses/>}/>
    <Route path="/signup" element={<Register/>}/>
  </Routes></div>
  </>
   );
}

export default App;
