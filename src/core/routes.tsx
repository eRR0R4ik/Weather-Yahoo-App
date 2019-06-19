import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout, Main, Settings } from '../components';

const Routes: React.FC = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={Main} />
      <Route path="/settings" component={Settings} />
    </Layout>
  </Router>
);

export default Routes;
