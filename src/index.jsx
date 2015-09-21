import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer'
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

const store = createStore(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch({type: 'SET_STATE', state})
);

const routes = <Route handler={App}>
  <Route path="/results" handler={ResultsContainer} />
  <DefaultRoute handler={VotingContainer} />
</Route>;

Router.run(routes, (Root) => {
  React.render(
    <Provider store={store}>
      {() => <Root />}
    </Provider>,
    document.getElementById('app')
  );
});
