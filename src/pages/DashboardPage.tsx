
import { PageHeader } from "@/components/PageHeader";

export function DashboardPage() {
  return (
    <div className="flex flex-col max-w-full flex-1">
      <PageHeader 
        title="Dashboard" 
        description="Overview of your clinic's daily operations" 
      />
      <div className="px-4 py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-slate-600 text-sm font-medium">Today's Appointments</h3>
            <p className="text-slate-900 text-2xl font-bold mt-1">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-slate-600 text-sm font-medium">Total Patients</h3>
            <p className="text-slate-900 text-2xl font-bold mt-1">486</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-slate-600 text-sm font-medium">Pending Appointments</h3>
            <p className="text-slate-900 text-2xl font-bold mt-1">8</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-slate-600 text-sm font-medium">Monthly Revenue</h3>
            <p className="text-slate-900 text-2xl font-bold mt-1">$24,580</p>
          </div>
        </div>
      </div>
    </div>
  );
}
