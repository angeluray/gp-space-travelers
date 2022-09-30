import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './index.css';

// App components
import Navigation from './components/Nav/Nav';
import MyMission from './components/Mission/Mission ';
import MyProfile from './components/Profile';
import MyRockets from './components/Rocket/rockets';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<MyRockets />} />
          <Route path="/mission" element={<MyMission />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
