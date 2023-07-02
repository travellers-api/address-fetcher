import { notFoundMessage, userAgent } from '../../../constants';
import { Room } from '../types';

type FetchSearchRoomResponse = {
  rooms: Room[];
};

export const fetchSearchRoom = async (homeId: number, cookie: string): Promise<FetchSearchRoomResponse> => {
  const res = await fetch(`https://address.love/api/v1/web/homes/${homeId}/search_room`, {
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

  const json = (await res.json()) as FetchSearchRoomResponse;
  return json;
};
