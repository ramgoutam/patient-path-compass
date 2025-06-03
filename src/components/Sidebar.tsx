
import { House, Calendar, Users, DollarSign, Presentation, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigation = [
  { name: "Dashboard", href: "dashboard", icon: House },
  { name: "Patients", href: "patients", icon: Users },
  { name: "Calendar", href: "appointments", icon: Calendar },
  { name: "Billing", href: "billing", icon: DollarSign },
  { name: "Reports", href: "reports", icon: Presentation },
  { name: "Settings", href: "settings", icon: Settings },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="w-80 bg-slate-50 min-h-screen p-4 flex flex-col">
      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrGSxRXtO4b-EytuNP0A4LNtrZa0fnukPxY1JRepZLoIOtA5b7EgUNZhv0MEA0EPzq5x6BnfKA2o5b_LtaryFle-MH5Xh9JdM5vq-YA8OQpQp0QnOg0ZFDfJA9c5XkgYCEDn0hNtu_arDZQWlVx_Nr-HgC9PWqy5Zbt7aOBclrO3_6dOwvGw8QirXqaD3vRHpXnm9-VHXjQeQ1ADlJlD5EEWdiparj4dIyPsUvIFJORr6eKf0400EVIgkZbRkmd9InBVAoUO6q53b_")'
            }}
          />
          <div className="flex flex-col">
            <h1 className="text-slate-900 text-base font-medium leading-normal">Dr. Amelia Stone</h1>
            <p className="text-slate-600 text-sm font-normal leading-normal">General Dentistry</p>
          </div>
        </div>
        
        <nav className="flex flex-col gap-2">
          {navigation.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <button
                key={item.href}
                onClick={() => onSectionChange(item.href)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-slate-200 text-slate-900 rounded-full"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <item.icon className="h-6 w-6" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
