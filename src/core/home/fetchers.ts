import fetch from 'node-fetch';
import { userAgent } from '../../constants';
import { parseHomePage } from './parsers';
import { Home } from './types';

export const fetchHome = async (homeId: number, cookie: string): Promise<Home> => {
  const res = await fetch(`https://address.love/homes/${encodeURIComponent(homeId)}`, {
    headers: {
      cookie,
      'User-Agent': userAgent,
    },
  });
  if (!res.ok && res.status === 404) {
    throw new Error('not found');
  }
  if (!res.ok) {
    throw new Error();
  }

  const html = await res.text();
  const home = parseHomePage(html);
  return home;
};
