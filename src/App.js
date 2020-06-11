import React from "react";
import { Route, Switch } from 'react-router-dom';

import Layout from "./components/layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/' component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
