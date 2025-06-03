
import { PageHeader } from "@/components/PageHeader";

export function SettingsPage() {
  return (
    <div className="flex flex-col max-w-full flex-1">
      <PageHeader 
        title="Settings" 
        description="Configure your clinic and application preferences" 
      />
      <div className="px-4 py-3">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <p className="text-slate-600 text-center">Settings configuration coming soon...</p>
        </div>
      </div>
    </div>
  );
}
