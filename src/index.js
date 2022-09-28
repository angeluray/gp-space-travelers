import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
/* import App from './App'; */
import Navigation from './components/Nav/Nav';
import MyMission from './components/Mission/Mission ';
import MyProfile from './components/Profile';
import MyRockets from './components/Rocket/rockets';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<MyRockets />} />
        <Route path="/mission" element={<MyMission />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
