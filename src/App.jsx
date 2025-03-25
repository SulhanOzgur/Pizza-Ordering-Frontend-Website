import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages//MainPage.jsx';
import PizzaOrderPage from './pages/PizzaOrderPage.jsx';
import SuccessPage from './pages/SuccessPage.jsx';

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route path="/order">
          <PizzaOrderPage setOrderData={setOrderData} />
        </Route>

        <Route path="/success">
          <SuccessPage orderData={orderData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/* import React from 'react';
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

export default App; */
