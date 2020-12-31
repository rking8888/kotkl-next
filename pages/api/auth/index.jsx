import { yf } from '../../../util/yahoo-fantasy';

export default (req, res) => {
  //const redirect = req.headers.referer.split(req.headers.host).pop();
  return yf.auth(res);
};
