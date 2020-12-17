import { yf } from '../../util/yahoo-fantasy';

export default (req, res) => {
  yf.league.transactions(
    'nba.l.' + process.env.YAHOO_PUBLIC_LEAGUE_ID,
    function (err, data) {
      if (err) console.log('Error connecting to yahoo fantasy', err);

      res.status(200);
      res.json(data);
    }
  );
};
