export interface DayOfWeekData {
  dayofweek: string;
}

export interface DayOfWeekDatas {
  data: DayOfWeekData[];
}
export interface DefaultAssignData {
  data: {
    weekdayAssign: string;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
    holiday: boolean;
  };
}
