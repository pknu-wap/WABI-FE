import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import MainQrCheckIn from './pages/QrCheckIn/MainQrCheckIn';
import EventDetail from './pages/EventDetail/EventDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/qrScan" element={<MainQrCheckIn />} />
        <Route path="/" element={<EventDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
