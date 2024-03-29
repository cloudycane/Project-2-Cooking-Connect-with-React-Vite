import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain='dev-bi2ytpp58ir6ivdb.us.auth0.com'
  clientId='6nGKlfdNJOnC0KssKxQR2vR5o5epMWCS'
  authorizationParams={{ redirect_uri: window.location.origin }}>
  <App />
</Auth0Provider>
);