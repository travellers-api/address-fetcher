import { fetchNewestHomes } from './fetchers';

export const getNewestHomes = async (cookie: string, page?: number) => {
  return fetchNewestHomes(cookie, page);
};
