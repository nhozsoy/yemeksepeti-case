import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuestionList from './components/pages/QuestionList';
import QuestionDetail from './components/pages/QuestionDetail';
import CreateQuestion from './components/pages/CreateQuestion';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={QuestionList} />
        <Route path='/questions/:id' exact component={QuestionDetail} />
        <Route path='/create-question' exact component={CreateQuestion} />
      </Switch>
    </Router>
  );
}

export default App;
