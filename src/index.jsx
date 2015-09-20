import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';
import App from './components/App'
import Voting from './components/Voting';

const routes = <Route handler={App}>
  <DefaultRoute handler={Voting} />
</Route>;

Router.run(routes, (Root) => {
  React.render(
    <Root />,
    document.getElementById('app')
  );
});
