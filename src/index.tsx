import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'

import { App } from './pages'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-mhw5yevn.us.auth0.com"
      clientId="RsQFFWiaCIy3J8eSde6Zru6pdUqFawUo"
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
