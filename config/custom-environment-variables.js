module.exports = {
  listener: {
    port: 'LISTENER_PORT'
  },
  session: {
    secret: 'SESSION_SECRET'
  },
  oauth: {
    issuer: {
      url: 'OAUTH_ISSUER_URL'
    },
    client: {
      id: 'OAUTH_CLIENT_ID',
      secret: 'OAUTH_CLIENT_SECRET',
      redirectUri: 'OAUTH_REDIRECT_URI',
      userAgentRedirectUri: 'OAUTH_USER_AGENT_REDIRECT_URI'
    },
    clockTolerance: 'OAUTH_CLOCK_TOLERANCE'
  },
  api: {
    // assumes all api's at single location,
    // would need to be revisited if this wasn't the case...
    url: 'API_URL'
  }
}
