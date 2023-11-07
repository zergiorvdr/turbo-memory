import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Components/Login';

const Panel = () => {
  return (
    <Router>
      <div>
        <h1>Panel Admin</h1>
        <Route path="/panel" component={Login} />
      </div>
    </Router>
  );
};

export default Panel;