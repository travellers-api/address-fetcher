import { fetchRoomCalendar } from './fetchers';

export const getRoomCalendar = async (roomId: number, cookie: string) => {
  return fetchRoomCalendar(roomId, cookie);
};
