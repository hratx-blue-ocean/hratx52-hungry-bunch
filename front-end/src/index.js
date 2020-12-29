import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import store from './store/store';
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

// render(<App />, document.getElementById('app'));