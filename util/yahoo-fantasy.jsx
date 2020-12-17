// import the library
const YahooFantasy = require('yahoo-fantasy');
require('dotenv').config();

// you can get an application key/secret by creating a new application on Yahoo!
export const yf = new YahooFantasy(
  process.env.YAHOO_APP_KEY, // Yahoo! Application Key
  process.env.YAHOO_APP_SECRET // Yahoo! Application Secret
  //tokenCallbackFunction, // callback function when user token is refreshed (optional)
  //redirectUri // redirect endpoint when user authenticates (optional)
);

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
//   Y!CLIENT_TOKEN
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
