import { House, Calendar, Users, DollarSign, FlaskConical, Factory, Package, Settings, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
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
  };
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };
  return <div className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 z-10 shadow-sm ${collapsed ? 'w-16' : 'w-72'}`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-80 px-[6px] py-[7px] mx-0 my-0">
        <button onClick={() => onSectionChange('profile')} className="flex items-center gap-3 w-full text-left hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200 py-0 mx-0">
          <div className="bg-indigo-600 text-white rounded-full size-10 flex-shrink-0 flex items-center justify-center font-semibold text-sm">
            {getInitials("Amelia", "Stone")}
          </div>
          <div className={`transition-all duration-300 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
            <h1 className="text-gray-900 text-sm font-semibold">Dr. Amelia Stone</h1>
            <p className="text-gray-500 text-xs">General Dentistry</p>
          </div>
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 px-[5px]">
        {navigation.map(item => {
        const isActive = activeSection === item.href;
        return <button key={item.href} onClick={() => onSectionChange(item.href)} className={cn("flex items-center w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 relative", isActive ? "bg-indigo-50 text-indigo-700 border border-indigo-200" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900")} title={collapsed ? item.name : undefined}>
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className={`ml-3 font-medium text-sm transition-all duration-300 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                {item.name}
              </span>
              {isActive && <div className="absolute right-2 w-2 h-2 bg-indigo-600 rounded-full" />}
            </button>;
      })}
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t border-gray-100 space-y-1 px-[11px]">
        <button onClick={onToggleCollapse} className="flex items-center w-full text-left px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200" title={collapsed ? "Expand" : "Collapse"}>
          {collapsed ? <ChevronRight className="h-5 w-5 flex-shrink-0" /> : <ChevronLeft className="h-5 w-5 flex-shrink-0" />}
          <span className={`ml-3 font-medium text-sm transition-all duration-300 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
            {collapsed ? "Expand" : "Collapse"}
          </span>
        </button>
        
        <button onClick={handleLogout} className="flex items-center w-full text-left px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors duration-200" title={collapsed ? "Logout" : undefined}>
          <LogOut className="h-5 w-5 flex-shrink-0" />
          <span className={`ml-3 font-medium text-sm transition-all duration-300 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
            Logout
          </span>
        </button>
      </div>
    </div>;
}