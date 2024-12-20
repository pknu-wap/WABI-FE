import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import MainQrCheckIn from 'pages/QrCheckIn/MainQrCheckIn';
import EventDetail from 'pages/EventDetail/EventDetail';
import EventAndGroupList from 'pages/EventAndGroupList/EventAndGroupList';
import GrouupDetail from 'pages/GroupDetail/GroupDetail';
import MainEventList from 'pages/MainEventList/MainEventList';
import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventAndGroupList />} />
        <Route path="/eventDetail" element={<EventDetail />} />
        <Route path="/qrScan" element={<MainQrCheckIn />} />
        <Route path="/groupDetail" element={<GrouupDetail />} />
        <Route path="/mainEventList " element={<MainEventList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
