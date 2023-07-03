import * as cheerio from 'cheerio';
import { HomeForSearch } from './types';

export const parseHomeSearchPage = (html: string): HomeForSearch[] => {
  const $ = cheerio.load(html);
  const homes = $('.homes-card')
    .get()
    .map((elm) => {
      const $elm = $(elm);
      const id = Number(
        $elm
          .find('a')
          .attr('href')
          ?.replace(/^\/homes\/(\d+).*$/, '$1') ?? ''
      );

      const home: HomeForSearch = {
        id,
        url: `https://address.home/homes/${id}`,
        name: $elm.find('.homes-card__title').text(),
        thumbnail: $elm.find('img').attr('src') ?? '',
        prefecture: $elm.find('.homes-card__info p:nth-child(1)').text(),
        homeType: $elm.find('.homes-card__info p:nth-child(2)').text(),
        reservationLimit: $elm.find('.homes-card__limited').get().length > 0 ? '予約制限あり' : '予約制限なし',
      };
      return home;
    });
  return homes;
};
