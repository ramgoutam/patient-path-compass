
import { PageHeader } from "@/components/PageHeader";

export function ReportsPage() {
  return (
    <div className="flex flex-col max-w-full flex-1">
      <PageHeader 
        title="Reports" 
        description="Analytics and insights for your practice" 
      />
      <div className="px-4 py-3">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <p className="text-slate-600 text-center">Reports and analytics coming soon...</p>
        </div>
      </div>
    </div>
  );
}
