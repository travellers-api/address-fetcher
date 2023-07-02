import { fetchSearchRoom } from './fetchers';

export const getRoomsFromHomeId = async (homeId: number, cookie: string) => {
  return fetchSearchRoom(homeId, cookie);
};
