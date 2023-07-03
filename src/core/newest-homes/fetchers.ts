import fetch from 'node-fetch';
import { notFoundMessage, userAgent } from '../../constants';
import { parseHomeSearchPage } from './parsers';
import { HomeForSearch } from './types';

export const fetchNewestHomes = async (cookie: string): Promise<HomeForSearch[]> => {
  const res = await fetch(`https://address.love/homes/search`, {
    headers: {
      cookie,
      'User-Agent': userAgent,
    },
  });
  if (!res.ok && res.status === 404) {
    throw new Error(notFoundMessage);
  }
  if (!res.ok) {
    throw new Error();
  }

  const html = await res.text();
  const homes = parseHomeSearchPage(html);
  return homes;
};
