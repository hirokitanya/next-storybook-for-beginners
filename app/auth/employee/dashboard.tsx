import Employee from './employee';
import { EmployeeData } from './types';

export default function Dashboard({ employee }: Readonly<{ employee: EmployeeData }>) {
  return (
    <div className="">
      {/* employee  */}
      <Employee data={employee.data} />
    </div>
  );
}
