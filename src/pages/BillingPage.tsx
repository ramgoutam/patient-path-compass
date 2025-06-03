
import { PageHeader } from "@/components/PageHeader";

export function BillingPage() {
  return (
    <div className="flex flex-col max-w-full flex-1">
      <PageHeader 
        title="Billing" 
        description="Manage invoices and financial records" 
      />
      <div className="px-4 py-3">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <p className="text-slate-600 text-center">Billing management coming soon...</p>
        </div>
      </div>
    </div>
  );
}
