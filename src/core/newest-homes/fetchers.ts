import fetch from 'node-fetch';
import { notFoundMessage, userAgent } from '../../constants';
import { parseHomeSearchPage } from './parsers';
import { HomeForSearch } from './types';

export const fetchNewestHomes = async (cookie: string, page?: number): Promise<HomeForSearch[]> => {
  const url = new URL(`https://address.love/homes/search`);
  page !== undefined && url.searchParams.set('page', page.toString());

  const res = await fetch(url, {
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
