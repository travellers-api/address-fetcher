import { fetchNewestHomes } from './fetchers';

export const getNewestHomes = async (cookie: string) => {
  return fetchNewestHomes(cookie);
};
