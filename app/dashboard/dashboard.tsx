import { ChartData, DepositData, OrderData } from './types';
import Order from './order';

export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  // propsとして渡す
  console.log(chart, deposit, order);
  return (
    <div>
      <div>
        {/* chart  */} {/* deposits */}
      </div>
      <div>
        <Order data={order.data} />
      </div>
    </div>
  );
}
