import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import DetailRoom from '../pages/DetailRoom';
import EditRoom from '../pages/EditRoom';
import EditBookings from '../pages/EditBookings';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/detailRoom/:roomNr' element={<DetailRoom />}></Route>
      <Route exact path='/editRoom/:roomNr/:roomType' element={<EditRoom />}></Route>
      <Route exact path='/editBookings/:roomNr' element={<EditBookings />}></Route>
    </Routes>
  );
}

export default Main;