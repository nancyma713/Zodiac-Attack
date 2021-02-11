import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './nav/navbar';
import CartContainer from './cart/cart';
import LandingPageContainer from './landing_page/landing_page_container';

const App = () => (
  <div>
    <NavBar />
    {/* <Route exact path="/" component={LandingPageContainer} />
    <Route exact path="/cart" component={CartContainer} /> */}
  </div>
);

export default App;