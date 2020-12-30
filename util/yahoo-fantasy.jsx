// import the library
const YahooFantasy = require('yahoo-fantasy');
require('dotenv').config();

const deploymentURL =
  process.env.VERCEL_ENV === 'preview'
    ? 'kotkl-git-' +
      process.env.VERCEL_GIT_COMMIT_REF.replace(/\//g, '-') +
      '.rking8888.vercel.app'
    : process.env.DEPLOYMENT_URL; /* production or dev */

const redirectUrl =
  (deploymentURL.includes('https') ? '' : 'https://') +
  deploymentURL +
  '/api/auth/callback/';
console.log(redirectUrl);

export const yf = new YahooFantasy(
  process.env.YAHOO_APP_KEY, // Yahoo! Application Key
  process.env.YAHOO_APP_SECRET, // Yahoo! Application Secret
  null, //tokenCallbackFunction, // callback function when user token is refreshed (optional)
  redirectUrl //redirectUri // redirect endpoint when user authenticates (optional)
);

// const tokenCallback = function ({ access_token, refresh_token }) {
//     return new Promise((resolve, reject) => {
//       yf.setUserToken(access_token);
//       yf.setRefreshToken(refresh_token);
//       console.log("PERSIST ACCESS TOKEN", access_token);
//       console.log("PERSIST REFRESH TOKEN", refresh_token);

//   const options = {
//     url: "https://api.login.yahoo.com/openid/v1/userinfo",
//     method: "get",
//     json: true,
//     auth: {
//       bearer: access_token,
//     },
//   };

//   request(options, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       const userObj = {
//         id: body.sub,
//         name: body.nickname,
//         avatar: body.profile_images.image64,
//         accessToken: access_token,
//         refreshToken: refresh_token,
//       };

//       app.user = userObj;

//       return resolve();
//     }
//   });
//     });
//   };

// you can authenticate a user by setting a route to call the auth function
// note: from v4.0 on, public queries are now supported; that is, you can query
// public resources without authenticating a user (ie/ game meta, player meta,
// and information from public leagues)
// yf.auth(
//   response // response object to redirect the user to the Yahoo! login screen
// )

// you also need to set up the callback route (defined as the redirect uri above)
// note: this will automatically set the user and refresh token if the request is
// successful, but you can also call them manually, described below
// yf.authCallback(
//   request, // the request will contain the auth code from Yahoo!
//   callback // callback function that will be called after the token has been retrieved
// )

// if you're not authenticating via the library you'll need to set the Yahoo!
// token for the user
// yf.setUserToken(
//   'pxpj7aw22n42fwjfsnhenhv37zrmvcfp'
// );

// you can do the same for the refresh token...
// if you set this and the token expires (lasts an hour) then the token will automatically
// refresh and call the above "tokenCallbackFunction" that you've specified to persist the
// token elsewhere
// yf.setRefreshToken(
//   Y!CLIENT_REFRESH_TOKEN
// );

// query a resource/subresource
// yf.league.transactions(
//     process.env.YAHOO_PUBLIC_LEAGUE_KEY,
//     function(err, data) {
//         if (err)
//             console.log("Error connecting to yahoo fantasy", err);

//         res.status(200);
//         res.json(data);
//     }
// );
