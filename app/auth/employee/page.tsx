import Dashboard from './dashboard';

export default async function Page() {
  const employee = await getEmployeeData();
  return <Dashboard employee={employee} />;
}

/**
 * 売上情報の取得
 */
async function getEmployeeData() {
  return await Promise.resolve({
    data: [
      {
        name: '八尋祐樹',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: 'サンプル',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
      {
        name: '北畠連夜',
        email: 'test@example.com',
        telNumber: '123-456-7890',
      },
    ],
  });
}
