
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SearchBar } from "@/components/SearchBar";
import { PatientTabs } from "@/components/PatientTabs";
import { PatientsTable } from "@/components/PatientsTable";
import { NewPatientForm } from "@/components/NewPatientForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PatientsPageProps {
  onNavigateToProfile?: () => void;
}

export function PatientsPage({ onNavigateToProfile }: PatientsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [showNewPatientForm, setShowNewPatientForm] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleNewPatient = () => {
    setShowNewPatientForm(true);
  };

  const handleFormSubmit = (patientData: any) => {
    console.log("New patient data:", patientData);
    setShowNewPatientForm(false);
    // Trigger a refresh of the patients table
    setRefreshTrigger(prev => prev + 1);
  };

  const handleFormCancel = () => {
    setShowNewPatientForm(false);
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
            refreshTrigger={refreshTrigger}
          />
        </div>
      </div>

      <Dialog open={showNewPatientForm} onOpenChange={setShowNewPatientForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <NewPatientForm 
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
