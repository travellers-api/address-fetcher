import { fetchHome } from './fetchers';

export const getHome = async (homeId: number, cookie: string) => {
  const home = await fetchHome(homeId, cookie);
  return home;
};
