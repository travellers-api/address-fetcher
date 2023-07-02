export type RoomCalendar = {
  id: number;
  name: string;
  reserved_dates: string[];
  calendar_start_date: string;
  calendar_end_date: string;
  reserve_until: string;
  available_weeks: number;
  reservable_period: string;
  holydays: (0 | 1 | 2 | 3 | 4 | 5 | 6)[];
  min_days: number;
  consume_ticket_amounts: number;
};
