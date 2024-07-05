import { ChartData, DepositData, OrderData } from './types';
import Order from './order';
import Deposit from './deposit';
import Chart from './chart';
export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  // propsとして渡す
  console.log(chart, deposit, order);
  return (
    <div className="row-span-2 grid grid-cols-4">
      <span className="col-span-3 mr-3">
        {/* chart  */}
        <Chart data={chart.data} />
      </span>
      <span className="col-span-1 ml-3">
        {/* deposit */}
        <Deposit data={deposit.data} />
      </span>
      <div className="grit-rows-5 col-span-4 my-8">
        <Order data={order.data} />
      </div>
    </div>
  );
}
