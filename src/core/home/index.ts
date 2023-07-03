import { fetchHome } from './fetchers';

export const getHome = async (homeId: number, cookie: string) => {
  return fetchHome(homeId, cookie);
};
