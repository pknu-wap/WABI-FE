import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import MainQrCheckIn from './pages/QrCheckIn/MainQrCheckIn';
import EventDetail from './pages/EventDetail/EventDetail';
import MainEventList from './pages/MainEventList/MainEventList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainEventList />} />
        <Route path="/eventDetail" element={<EventDetail />} />
        <Route path="/qrScan" element={<MainQrCheckIn />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
