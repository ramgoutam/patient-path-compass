
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
    <div className="flex flex-col h-full bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <PageHeader 
          title="Patients" 
          action={{
            label: "Add Patient",
            onClick: handleNewPatient
          }}
        />
      </div>
      <div className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-100">
            <SearchBar 
              placeholder="Search patients by name, ID, or phone number"
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>
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
    </div>
  );
}
