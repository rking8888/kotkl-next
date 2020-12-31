import { yf } from '../../../util/yahoo-fantasy';
import { parseCookies } from '../../../helpers/index';

export default async (req, res) => {
  const {
    query: { slug },
    body,
  } = req;

  const cookie = parseCookies(req);

  if (cookie) {
    yf.setUserToken(cookie.accessToken);
  }

  if (slug.length < 2) {
    res.status(400);
    return res.json({ error: 'invalid endpoint' });
  }

  const [resource, subresource] = slug;
  const { filters, subresources, ...keys } = body;

  console.log(resource, subresource);
  console.log(filters);
  console.log(subresources);
  if (!yf[resource][subresource]) {
    res.status(400);
    return res.json({ error: 'invalid endpoint' });
  }

  const args = [];

  // since it's just for our app we can hardcode league key in here
  args.push('nba.l.' + process.env.YAHOO_LEAGUE_ID);

  if (keys.length) {
    args.push(Object.values(keys));
  }

  if (filters) {
    args.push(filters);
  }

  if (subresources) {
    args.push(subresources);
  }

  console.log('X:', args);
  // cb - promise - case
  // 5 - 4 - i think this only happens with transactions.adddrop_player
  // 4 - 3 - would be key, filters, subs, callback
  // 3 - 2 - would be key, filters or subs, callback for collection
  // could be key, another key, callback too...
  // 2 - 1 - would be key or filters or subs, callback
  // 1 - 0 - callback only...

  const data = await yf[resource][subresource](...args);

  return res.json(data);
};
