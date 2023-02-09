import store from '../store'
/* eslint-disable */
let GoogleAuth;
let SCOPE = "https://www.googleapis.com/auth/youtube.upload";

export const handleClientLoad = function () {

  gapi.load("client:auth2", initClient);
};

export const initClient = function () {
  let discoveryUrl = "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest";


  gapi.client
    .init({
      apiKey: "AIzaSyBVT81d3-k_-QQ_-7ARIJpyJV7sd7nhk7I",
      clientId: "442076374255-nueuper3ov95im5oiohrk897274nb9k8.apps.googleusercontent.com",
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
