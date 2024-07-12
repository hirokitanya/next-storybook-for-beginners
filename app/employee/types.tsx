export interface EmployeeData {
  data: {
    id: string;
    name: string;
    email: string;
    phone: string;
    initial: string;
    hiredDate: string;
    color: string;
    isCalendarVisible: true;
    role: string;
  }[];
}

export interface PartnerData {
  data: {
    id: string;
    name: string;
    initial: string;
    phone: string;
  }[];
}
