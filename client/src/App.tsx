import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import MainQrCheckIn from './pages/QrCheckIn/MainQrCheckIn';
import EventDetail from './pages/EventDetail/EventDetail';
import EventGroupSwitcher from './pages/EventGroupSwitcher/EventGroupSwitcher';
import GrouupDetail from 'pages/GroupDetail/GroupDetail';
import MainEventList from './pages/MainEventList/MainEventList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventGroupSwitcher />} />
        <Route path="/eventDetail" element={<EventDetail />} />
        <Route path="/qrScan" element={<MainQrCheckIn />} />
        <Route path="/groupDetail" element={<GrouupDetail />} />
        <Route path="/mainEventList " element={<MainEventList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
