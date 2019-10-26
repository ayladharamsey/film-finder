import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './Containers/App/App';
import { rootReducer } from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router} from 'react-router-dom'

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


