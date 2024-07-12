export interface HolidayData {
  data: {
    id: string;
    date: string;
    name: string;
    isNationalHoliday: boolean;
  }[];
}

export interface HolidayType {
  holiday: string;
  publicholiday: string;
}
