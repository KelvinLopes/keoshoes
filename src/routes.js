import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductInfo from './pages/ProductInfo';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/cart"  component={Cart}/>
      <Route path="/product/:id" component={ProductInfo} />
    </Switch>
  );
}
