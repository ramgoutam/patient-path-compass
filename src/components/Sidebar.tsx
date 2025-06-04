
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

  return (
    <div className={`fixed left-0 top-0 h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col transition-all duration-700 ease-in-out z-10 border-r border-blue-100 shadow-xl ${collapsed ? 'w-16' : 'w-80'}`}>
      <div className="flex flex-col gap-4 flex-1 p-4 rounded-xl py-6 my-0 mx-0 px-3">
        <button 
          onClick={() => onSectionChange('profile')} 
          className="flex items-center gap-3 overflow-hidden hover:bg-white/60 hover:shadow-lg rounded-xl p-3 transition-all duration-300 group"
        >
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-11 flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            {getInitials("Amelia", "Stone")}
          </div>
          <div className={`flex flex-col min-w-0 transition-all duration-700 ease-in-out ${collapsed ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-none delay-100'}`}>
            <h1 className="text-gray-800 text-base font-semibold leading-normal truncate">Dr. Amelia Stone</h1>
            <p className="text-blue-600 text-sm font-medium leading-normal truncate">General Dentistry</p>
          </div>
        </button>
        
        <nav className="flex flex-col gap-1 flex-1">
          {navigation.map(item => {
            const isActive = activeSection === item.href;
            return (
              <button 
                key={item.href} 
                onClick={() => onSectionChange(item.href)} 
                className={cn(
                  "flex items-center text-sm font-medium transition-all duration-300 ease-in-out relative gap-3 px-3 py-3 rounded-xl group",
                  isActive 
                    ? "text-white shadow-lg" 
                    : "text-gray-600 hover:text-gray-800 hover:bg-white/50 hover:shadow-md"
                )} 
                title={collapsed ? item.name : undefined}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl transition-all duration-300 ease-in-out shadow-lg" />
                )}
                <item.icon className={cn(
                  "h-5 w-5 flex-shrink-0 relative z-10 transition-all duration-300",
                  isActive ? "text-white" : "text-gray-500 group-hover:text-blue-600"
                )} />
                <span className={`truncate transition-all duration-700 ease-in-out relative z-10 ${collapsed ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-none delay-200'}`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-blue-100 space-y-2 px-3 bg-white/30 backdrop-blur-sm">
        {/* Toggle button */}
        <button 
          onClick={onToggleCollapse} 
          className="flex items-center text-sm font-medium text-gray-600 hover:bg-white/60 hover:text-gray-800 hover:shadow-md transition-all duration-300 ease-in-out rounded-xl gap-3 px-3 py-3 w-full group" 
          title={collapsed ? "Expand" : "Collapse"}
        >
          {collapsed ? (
            <PanelLeftOpen className="h-5 w-5 flex-shrink-0 text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
          ) : (
            <PanelLeftClose className="h-5 w-5 flex-shrink-0 text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
          )}
          <span className={`truncate transition-all duration-700 ease-in-out ${collapsed ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-none delay-200'}`}>
            {collapsed ? "Expand" : "Collapse"}
          </span>
        </button>
        
        {/* Logout button */}
        <button 
          onClick={handleLogout} 
          className="flex items-center text-sm font-medium text-red-500 hover:bg-red-50 hover:text-red-600 hover:shadow-md transition-all duration-300 ease-in-out rounded-xl gap-3 px-3 py-3 w-full group" 
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut className="h-5 w-5 flex-shrink-0 group-hover:text-red-600 transition-colors duration-300" />
          <span className={`truncate transition-all duration-700 ease-in-out ${collapsed ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-none delay-200'}`}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}
