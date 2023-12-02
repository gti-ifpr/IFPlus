import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <MyRoutes/>
      </BrowserRouter>
    </>
  );
};

export default App;