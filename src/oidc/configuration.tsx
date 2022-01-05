const configuration = {
  client_id: process.env.REACT_APP_OIDC_ID,
  redirect_uri: "http://localhost:3000/authentication/callback",
  response_type: "code",
  post_logout_redirect_uri: "http://localhost:3000/Dashboard",
  scope: "openid profile",
  authority: process.env.REACT_APP_OIDC_AUTHORITY,
  silent_redirect_uri: "http://localhost:3000/authentication/silent_callback",
  automaticSilentRenew: true,
  loadUserInfo: true,
};

export default configuration;
