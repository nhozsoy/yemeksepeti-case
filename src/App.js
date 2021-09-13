import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuestionList from './components/pages/QuestionList';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={QuestionList} />
      </Switch>
    </Router>
  );
}

export default App;
