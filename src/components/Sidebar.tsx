
import { House, Calendar, Users, CurrencyDollar, PresentationChart, Gear } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigation = [
  { name: "Dashboard", href: "dashboard", icon: House },
  { name: "Appointments", href: "appointments", icon: Calendar },
  { name: "Patients", href: "patients", icon: Users },
  { name: "Billing", href: "billing", icon: CurrencyDollar },
  { name: "Reports", href: "reports", icon: PresentationChart },
  { name: "Settings", href: "settings", icon: Gear },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="w-80 bg-slate-50 min-h-screen p-4 flex flex-col">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-slate-900 text-base font-medium leading-normal">Dental Clinic</h1>
          <p className="text-slate-600 text-sm font-normal leading-normal">Dr. Emily White</p>
        </div>
        
        <nav className="flex flex-col gap-2">
          {navigation.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <button
                key={item.href}
                onClick={() => onSectionChange(item.href)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-100 text-slate-900"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
