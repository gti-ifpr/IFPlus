import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes';
import { UserProvider } from './context/UserContext.js';

const App = () => {
  return (

    <BrowserRouter>

      <UserProvider>
        <MyRoutes />
      </UserProvider>
      
    </BrowserRouter>

  );
};

export default App;
