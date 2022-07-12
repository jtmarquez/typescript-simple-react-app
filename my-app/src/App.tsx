import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import './App.css';

import 'bulma/css/bulma.min.css';

function App() {
  return (
    <Router>
      <div className='hero is-danger is-fullheight py-5'>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
