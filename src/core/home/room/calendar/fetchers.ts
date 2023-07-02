import fetch from 'node-fetch';
import { notFoundMessage, userAgent } from '../../../../constants';
import { RoomCalendar } from './types';

type FetchRoomCalendarResponse = {
  room: RoomCalendar;
};

export const fetchRoomCalendar = async (roomId: number, cookie: string): Promise<FetchRoomCalendarResponse> => {
  const res = await fetch(`https://address.love/api/v1/web/rooms/${encodeURIComponent(roomId)}`, {
    headers: {
      cookie,
      'User-Agent': userAgent,
    },
  });
  if (!res.ok && res.status === 404) {
    throw new Error(notFoundMessage);
  }
  if (!res.ok) {
    const json = await res.json();
    const message = 'error' in json && typeof json.error === 'string' ? json.error : undefined;
    throw new Error(message);
  }

  const json = (await res.json()) as FetchRoomCalendarResponse;
  return json;
};
