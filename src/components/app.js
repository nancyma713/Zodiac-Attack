import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './nav/navbar';
import Cart from './cart/cart';
import LandingPage from './landing_page/landing_page';
import ItemShow from './items/item_show';
import Confirmation from './confirmation/confirmation';

const App = () => (
  <div className="main">
    <NavBar />
    <Route exact path="/" component={LandingPage} />
    <Switch>
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/:sku/:item" component={ItemShow} />
      <Route exact path="/confirmation" component={Confirmation} />
    </Switch>
  </div>
);

export default App;