import { ChartData, DepositData, OrderData } from './types';
import Deposit from './deposit';
import Chart from './chart';
import './dashboard.css';
export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  // propsとして渡す
  console.log(chart, deposit, order);
  return (
    <div>
      <div className="flex">
        <span className="">
          {/* chart  */}
          <Chart data={chart.data} />
        </span>
        <span className="">
          {/* deposit */}
          <Deposit data={deposit.data} />
        </span>
      </div>
      <div>{/* recent orders */}</div>
    </div>
  );
}
