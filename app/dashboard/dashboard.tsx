import Chart from './chart';
import Deposit from './deposit';
import Order from './order';
import { ChartData, DepositData, OrderData } from './types';

export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  return (
    <div className="row-span-2 grid grid-cols-4">
      <div className="col-span-3 mr-3">
        {/* chart  */}
        <Chart data={chart.data} />
      </div>
      <div className="col-span-1 ml-3">
        {/* deposit */}
        <Deposit data={deposit.data} />
      </div>
      <div className="grit-rows-5 col-span-4 my-8">
        <Order data={order.data} />
      </div>
    </div>
  );
}
