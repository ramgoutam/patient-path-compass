
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { DashboardPage } from "./DashboardPage";
import { AppointmentsPage } from "./AppointmentsPage";
import { PatientsPage } from "./PatientsPage";
import { LabPage } from "./LabPage";
import { ManufacturingPage } from "./ManufacturingPage";
import { InventoryPage } from "./InventoryPage";
import { SettingsPage } from "./SettingsPage";

const Index = () => {
  const [activeSection, setActiveSection] = useState("patients");

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
      default:
        return <PatientsPage />;
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-slate-50">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 bg-white">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
