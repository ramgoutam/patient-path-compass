
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SearchBar } from "@/components/SearchBar";
import { PatientsTable } from "@/components/PatientsTable";

export function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col max-w-full flex-1">
      <PageHeader 
        title="Patients" 
        description="Manage your patient records" 
      />
      <SearchBar 
        placeholder="Search patients"
        value={searchTerm}
        onChange={setSearchTerm}
      />
      <PatientsTable searchTerm={searchTerm} />
    </div>
  );
}
