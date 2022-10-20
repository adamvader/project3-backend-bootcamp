const { auth } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "https://stayhere/api",
  issuerBaseURL: "https://dev-l8x5jjx2.us.auth0.com/",
});

module.exports = checkJwt;
