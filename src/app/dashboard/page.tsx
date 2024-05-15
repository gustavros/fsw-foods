import { DashboardTable } from "./_components/dashboard-table";
import { DashboardUser } from "./_components/dashboard-user";
import Link from "next/link";

export default async function Dashboard() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex w-full items-center justify-between border-b border-border px-5 py-6">
        <Link href="/" className="font-bold">
          nine foods.
        </Link>

        <DashboardUser />
      </div>
      <div className="flex flex-col px-5 py-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-sm text-gray-500">Gerencie seus produtos</p>

        <DashboardTable />
      </div>
    </div>
  );
}
