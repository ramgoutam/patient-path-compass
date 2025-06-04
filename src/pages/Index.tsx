
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardPage } from "./DashboardPage";
import { AppointmentsPage } from "./AppointmentsPage";
import { PatientsPage } from "./PatientsPage";
import { LabPage } from "./LabPage";
import { ManufacturingPage } from "./ManufacturingPage";
import { InventoryPage } from "./InventoryPage";
import { SettingsPage } from "./SettingsPage";
import { ProfilePage } from "./ProfilePage";

const Index = () => {
  const [activeSection, setActiveSection] = useState("patients");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardPage />;
      case "appointments":
        return <AppointmentsPage />;
      case "patients":
        return <PatientsPage />;
      case "lab":
        return <LabPage />;
      case "manufacturing":
        return <ManufacturingPage />;
      case "inventory":
        return <InventoryPage />;
      case "settings":
        return <SettingsPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <PatientsPage />;
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className={`flex-1 bg-white/70 backdrop-blur-sm overflow-auto transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-80'} border-l border-white/50 shadow-inner`}>
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
