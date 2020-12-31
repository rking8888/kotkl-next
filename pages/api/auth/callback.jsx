import { yf } from '../../../util/yahoo-fantasy';
import { serialize } from 'cookie';

export default (req, res) => {
  yf.authCallback(req, (err, { access_token, refresh_token }) => {
    if (err) {
      return res.status(400).json({ err });
    }

    res.setHeader('Set-Cookie', [
      serialize('accessToken', access_token, {
        path: '/',
        expires: new Date(Date.now() + 1000 * 60 * 60 * 1),
        httpOnly: true,
      }),
      serialize('refreshToken', refresh_token, {
        path: '/',
        httpOnly: true,
      }),
    ]);

    return res.redirect('/yahoo');
  });
};
