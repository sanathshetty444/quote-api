import React from 'react';

import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './App.css';

import Categories from './pages/Categories';
import Category from './pages/Category';
import store from './redux/store';


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <Routes>
          <Route path="/categories" element={<Categories/>} />
          <Route path="/categories/:category" element={<Category />}/>
          <Route path="/" element={<Navigate to="/categories" />} />
        </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
