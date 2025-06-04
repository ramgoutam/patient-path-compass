
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
    // Add logout logic here
  };

  return (
    <div className={`fixed left-0 top-0 h-screen bg-slate-50 flex flex-col transition-all duration-500 ease-in-out z-10 ${collapsed ? 'w-16' : 'w-80'}`}>
      <div className="flex flex-col gap-4 flex-1 p-4 rounded-xl px-[12px] py-[21px] my-0 mx-0">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className={`bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0 transition-all duration-500 ease-in-out ${collapsed ? 'mx-auto' : ''}`} style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrGSxRXtO4b-EytuNP0A4LNtrZa0fnukPxY1JRepZLoIOtA5b7EgUNZhv0MEA0EPzq5x6BnfKA2o5b_LtaryFle-MH5Xh9JdM5vq-YA8OQpQp0QnOg0ZFDfJA9c5XkgYCEDn0hNtu_arDZQWlVx_Nr-HgC9PWqy5Zbt7aOBclrO3_6dOwvGw8QirXqaD3vRHpXnm9-VHXjQeQ1ADlJlD5EEWdiparj4dIyPsUvIFJORr6eKf0400EVIgkZbRkmd9InBVAoUO6q53b_")'
          }} />
          <div className={`flex flex-col min-w-0 transition-all duration-500 ease-in-out ${collapsed ? 'opacity-0 w-0 overflow-hidden translate-x-4' : 'opacity-100 w-auto translate-x-0'}`}>
            <h1 className="text-slate-900 text-base font-medium leading-normal truncate">Dr. Amelia Stone</h1>
            <p className="text-slate-600 text-sm font-normal leading-normal truncate">General Dentistry</p>
          </div>
        </div>
        
        <nav className="flex flex-col gap-2 flex-1">
          {navigation.map(item => {
            const isActive = activeSection === item.href;
            return (
              <button 
                key={item.href} 
                onClick={() => onSectionChange(item.href)} 
                className={cn(
                  "flex items-center text-sm font-medium transition-all duration-500 ease-in-out relative",
                  collapsed ? "justify-center p-3 w-10 h-10 mx-auto" : "gap-3 px-3 py-2",
                  isActive ? "text-slate-900" : "text-slate-700 hover:text-slate-900"
                )} 
                title={collapsed ? item.name : undefined}
              >
                {isActive && (
                  <div className={cn(
                    "absolute bg-slate-200 transition-all duration-500 ease-in-out",
                    collapsed ? "inset-0 rounded-full" : "inset-0 rounded-full"
                  )} />
                )}
                <item.icon className="h-6 w-6 flex-shrink-0 relative z-10" />
                <span className={`truncate transition-all duration-500 ease-in-out relative z-10 ${collapsed ? 'opacity-0 w-0 overflow-hidden translate-x-4' : 'opacity-100 w-auto translate-x-0'}`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
      
      {/* Toggle and Logout buttons at bottom */}
      <div className="p-4 border-t border-slate-200 space-y-2">
        {/* Toggle button */}
        <button 
          onClick={onToggleCollapse} 
          className={cn(
            "flex items-center text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-700 transition-all duration-500 ease-in-out rounded-md",
            collapsed ? "justify-center p-3 w-10 h-10 mx-auto" : "gap-3 px-3 py-2 w-full"
          )} 
          title={collapsed ? (collapsed ? "Expand" : "Collapse") : undefined}
        >
          {collapsed ? <ChevronRight className="h-5 w-5 flex-shrink-0" /> : <ChevronLeft className="h-5 w-5 flex-shrink-0" />}
          <span className={`truncate transition-all duration-500 ease-in-out ${collapsed ? 'opacity-0 w-0 overflow-hidden translate-x-4' : 'opacity-100 w-auto translate-x-0'}`}>
            {collapsed ? "Expand" : "Collapse"}
          </span>
        </button>
        
        {/* Logout button */}
        <button 
          onClick={handleLogout} 
          className={cn(
            "flex items-center text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-500 ease-in-out rounded-md",
            collapsed ? "justify-center p-3 w-10 h-10 mx-auto" : "gap-3 px-3 py-2 w-full"
          )} 
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          <span className={`truncate transition-all duration-500 ease-in-out ${collapsed ? 'opacity-0 w-0 overflow-hidden translate-x-4' : 'opacity-100 w-auto translate-x-0'}`}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}
