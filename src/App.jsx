import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages//MainPage.jsx';
import PizzaOrderPage from './pages/PizzaOrderPage.jsx';
import SuccessPage from './pages/SuccessPage.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/order" component={PizzaOrderPage} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
    </Router>
  );
}

export default App;
