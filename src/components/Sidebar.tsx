import { House, Calendar, Users, DollarSign, FlaskConical, Factory, Package, Settings, LogOut, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { cn } from "@/lib/utils";
interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}
const navigation = [{
  name: "Dashboard",
  href: "dashboard",
  icon: House
}, {
  name: "Patients",
  href: "patients",
  icon: Users
}, {
  name: "Calendar",
  href: "appointments",
  icon: Calendar
}, {
  name: "Lab",
  href: "lab",
  icon: FlaskConical
}, {
  name: "Manufacturing",
  href: "manufacturing",
  icon: Factory
}, {
  name: "Inventory",
  href: "inventory",
  icon: Package
}, {
  name: "Settings",
  href: "settings",
  icon: Settings
}];
export function Sidebar({
  activeSection,
  onSectionChange,
  collapsed,
  onToggleCollapse
}: SidebarProps) {
  const handleLogout = () => {
    console.log("Logging out...");
    // Add logout logic here
  };
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };
  return <div className={`fixed left-0 top-0 h-screen bg-slate-50 flex flex-col transition-all duration-700 ease-in-out z-10 ${collapsed ? 'w-16' : 'w-80'}`}>
      <div className="flex flex-col gap-4 flex-1 p-4 rounded-xl py-[18px] my-0 mx-0 px-[8px]">
        <button onClick={() => onSectionChange('profile')} className="flex items-center gap-3 overflow-hidden hover:bg-slate-100 rounded-lg p-2 transition-colors duration-200">
          <div className="bg-slate-200 text-slate-700 bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0 flex items-center justify-center font-semibold text-sm">
            {getInitials("Amelia", "Stone")}
          </div>
          <div className={`flex flex-col min-w-0 transition-all duration-700 ease-in-out ${collapsed ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-none delay-100'}`}>
            <h1 className="text-slate-900 text-base font-medium leading-normal truncate">Dr. Amelia Stone</h1>
            <p className="text-slate-600 text-sm font-normal leading-normal truncate">General Dentistry</p>
          </div>
        </button>
        
        
        <nav className="flex flex-col gap-2 flex-1">
          {navigation.map(item => {
          const isActive = activeSection === item.href;
          return <button key={item.href} onClick={() => onSectionChange(item.href)} className={cn("flex items-center text-sm font-medium transition-all duration-300 ease-in-out relative gap-3 px-3 py-2", isActive ? "text-slate-900" : "text-slate-700 hover:text-slate-900")} title={collapsed ? item.name : undefined}>
                {isActive && <div className="absolute inset-0 bg-slate-200 rounded-full transition-all duration-300 ease-in-out" />}
                <item.icon className="h-6 w-6 flex-shrink-0 relative z-10" />
                <span className={`truncate transition-all duration-700 ease-in-out relative z-10 ${collapsed ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-none delay-200'}`}>
                  {item.name}
                </span>
              </button>;
        })}
        </nav>
      </div>
      
      
      <div className="p-4 border-t border-slate-200 space-y-2 px-[8px]">
        {/* Toggle button */}
        <button onClick={onToggleCollapse} className="flex items-center text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-700 transition-all duration-300 ease-in-out rounded-md gap-3 px-3 py-2 w-full" title={collapsed ? "Expand" : "Collapse"}>
          {collapsed ? <PanelLeftOpen className="h-5 w-5 flex-shrink-0" /> : <PanelLeftClose className="h-5 w-5 flex-shrink-0" />}
          <span className={`truncate transition-all duration-700 ease-in-out ${collapsed ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-none delay-200'}`}>
            {collapsed ? "Expand" : "Collapse"}
          </span>
        </button>
        
        {/* Logout button */}
        <button onClick={handleLogout} className="flex items-center text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-300 ease-in-out rounded-md gap-3 px-3 py-2 w-full" title={collapsed ? "Logout" : undefined}>
          <LogOut className="h-5 w-5 flex-shrink-0" />
          <span className={`truncate transition-all duration-700 ease-in-out ${collapsed ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-none delay-200'}`}>
            Logout
          </span>
        </button>
      </div>
    </div>;
}