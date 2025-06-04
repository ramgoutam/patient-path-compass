
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SearchBar } from "@/components/SearchBar";
import { PatientTabs } from "@/components/PatientTabs";
import { PatientsTable } from "@/components/PatientsTable";

export function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const handleNewPatient = () => {
    console.log("Creating new patient...");
  };

  return (
    <div className="flex flex-col max-w-full flex-1 bg-gradient-to-br from-white/50 to-blue-50/30">
      <PageHeader 
        title="Patients" 
        action={{
          label: "New Patient",
          onClick: handleNewPatient
        }}
      />
      <div className="p-6">
        <SearchBar 
          placeholder="Search patients"
          value={searchTerm}
          onChange={setSearchTerm}
        />
        <PatientTabs 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <PatientsTable 
          searchTerm={searchTerm}
          activeTab={activeTab}
        />
      </div>
    </div>
  );
}
