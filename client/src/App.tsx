import React from 'react';
import './App.css';
//import GroupDetail from './pages/GroupDetail/GroupDetail';
import MainQrCheckIn from "./pages/QrCheckIn/MainQrCheckIn";
import Header from "./components/common/Header/Header";

function App() {


  return (
    <div className="App">
      {/*<GroupDetail />*/}
        <Header/>
        <MainQrCheckIn/>
    </div>
  );

}
export default App;

