const configuration = {
  client_id: process.env.REACT_APP_OIDC_ID,
  redirect_uri: process.env.REACT_APP_VERCEL_URL + "/authentication/callback",
  response_type: "code",
  post_logout_redirect_uri: process.env.REACT_APP_VERCEL_URL + "/Dashboard",
  scope: "openid profile",
  authority: process.env.REACT_APP_OIDC_AUTHORITY,
  silent_redirect_uri:
    process.env.REACT_APP_VERCEL_URL + "/authentication/silent_callback",
  automaticSilentRenew: true,
  loadUserInfo: true,
};

export default configuration;
