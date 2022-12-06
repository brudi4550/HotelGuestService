import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import EditRoom from './pages/EditRoom';
import EditBookings from './pages/EditBookings';
import OpenRooms from './pages/OpenRooms';
import NavBar from './components/NavBar';

const Main = () => {
  return (
    <div className='App container'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/editRoom/:roomNr/:roomType' element={<EditRoom />}></Route>
        <Route path='/editBookings/:roomNr' element={<EditBookings />}></Route>
        <Route path='/searchRooms' element={<OpenRooms />}></Route>
      </Routes>
    </div>

  );
}

export default Main;