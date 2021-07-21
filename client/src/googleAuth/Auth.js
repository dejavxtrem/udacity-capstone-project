import auth0 from 'auth0-js';


  

 const authConfig = {
    // TODO: Create an Auth0 application and copy values from it into this map
    domain: "dev-k9ejoe2z.us.auth0.com",            // Auth0 domain
    clientId: "cGsHGTlPzA0nfJFuNdmWOVf6yDbS2Ehg",          // Auth0 client id
    callbackUrl: "http://localhost:3000/callback",
    responseType: 'token id_token',
    scope: 'openid'    
  }

  export default class Auth {
    accessToken;
    idToken;
    expiresAt;
    authResult;
    
   
  
   
  
    constructor(history) {

      this.auth0 = new auth0.WebAuth({
        domain: authConfig.domain,
        clientID: authConfig.clientId,
        redirectUri: authConfig.callbackUrl,
        responseType: 'token id_token',
        scope: 'openid'
      });

      this.history = history
  
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.handleAuthentication = this.handleAuthentication.bind(this);
      this.isAuthenticated = this.isAuthenticated.bind(this);
      this.getAccessToken = this.getAccessToken.bind(this);
      this.getIdToken = this.getIdToken.bind(this);
      this.renewSession = this.renewSession.bind(this);
    }
  
    login() {
      this.auth0.authorize();
    }
  
    handleAuthentication() {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          console.log('Access token: ', authResult.accessToken)
          console.log('id token: ', authResult.idToken)
          this.setSession(authResult);
        } else if (err) {
          this.history.replace('/');
          console.log(err);
          alert(`Error: ${err.error}. Check the console for further details.`);
        }
      });
    }
  
    getAccessToken() {
      return this.accessToken;
    }
  
    getIdToken() {
      return this.idToken;
    }
  
    setSession(authResult) {
      // Set isLoggedIn flag in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('googleInfo', JSON.stringify(authResult.idToken));
  
      // Set the time that the access token will expire at
      let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
      this.accessToken = authResult.accessToken;
     this.idToken = authResult.idToken;
      this.expiresAt = expiresAt;
  
      // navigate to the home route
      this.history.replace('/infoscreen');
    }
  
    renewSession() {
      this.auth0.checkSession({}, (err, authResult) => {
         if (authResult && authResult.accessToken && authResult.idToken) {
           this.setSession(authResult);
         } else if (err) {
           this.logout();
           console.log(err);
           alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
         }
      });
    }
  
    logout() {
      // Remove tokens and expiry time
      this.accessToken = null;
      this.idToken = null;
      this.expiresAt = 0;
  
      // Remove isLoggedIn flag from localStorage
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('googleInfo');
  
      this.auth0.logout({
        //return_to: window.location.origin
      });
  
      // navigate to the home route
      //this.history.replace('/');
    }
  
    isAuthenticated() {
      // Check whether the current time is past the
      // access token's expiry time
      let expiresAt = this.expiresAt;
      return new Date().getTime() < expiresAt;
    }
  }
  