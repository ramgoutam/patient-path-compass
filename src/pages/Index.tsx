
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardPage } from "./DashboardPage";
import { AppointmentsPage } from "./AppointmentsPage";
import { PatientsPage } from "./PatientsPage";
import { PatientProfilePage } from "./PatientProfilePage";
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
        return <PatientsPage onNavigateToProfile={() => setActiveSection("patient-profile")} />;
      case "patient-profile":
        return <PatientProfilePage />;
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
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className={`flex-1 bg-white overflow-auto transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-72'}`}>
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
