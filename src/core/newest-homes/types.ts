import { Home } from '../home/types';

export type HomeForSearch = Pick<
  Home,
  'id' | 'url' | 'name' | 'thumbnail' | 'prefecture' | 'homeType' | 'reservationLimit'
>;
