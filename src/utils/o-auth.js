import store from '../store'
/* eslint-disable */
let GoogleAuth;
let SCOPE = process.env.VUE_APP_YOUTUBE_OAUTH;

export const handleClientLoad = function () {

  gapi.load("client:auth2", initClient);
};

export const initClient = function () {
  let discoveryUrl = process.env.VUE_APP_YOUTUBE_DISCOVERY_URL;


  gapi.client
    .init({
      apiKey: process.env.VUE_APP_YOUTUBE_API_KEY,
      clientId: process.env.VUE_APP_YOUTUBE_CLIENT_ID,
      discoveryDocs: [discoveryUrl],
      scope: SCOPE,
      plugin_name: "chat",
    })
    .then(function () {

      GoogleAuth = gapi.auth2.getAuthInstance();

      GoogleAuth.isSignedIn.listen(updateSigninStatus);

      store.dispatch('setUserInfo', GoogleAuth.currentUser.get().getBasicProfile())

      setSigninStatus();
    });
};

export const handleAuthClick = function () {
  if (GoogleAuth.isSignedIn.get()) {
    GoogleAuth.signOut();
  } else {
    GoogleAuth.signIn();
  }
  setSigninStatus();
};

export const revokeAccess = function () {
  GoogleAuth.disconnect();
  setSigninStatus();
};

export const setSigninStatus = function () {
  let user = GoogleAuth.currentUser.get();
  let isAuthorized = user.hasGrantedScopes(SCOPE);
  store.dispatch('setAuthorization', isAuthorized)
};

export const updateSigninStatus = function () {
  setSigninStatus();
};
