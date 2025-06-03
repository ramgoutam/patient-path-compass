
import { useState } from "react";

interface Patient {
  id: number;
  name: string;
  dateOfBirth: string;
  contact: string;
  lastVisit: string;
}

const mockPatients: Patient[] = [
  {
    id: 1,
    name: "Ryan Foster",
    dateOfBirth: "1985-08-15",
    contact: "(555) 123-4567",
    lastVisit: "2023-11-20",
  },
  {
    id: 2,
    name: "Chloe Reynolds", 
    dateOfBirth: "1992-04-22",
    contact: "(555) 987-6543",
    lastVisit: "2023-12-05",
  },
  {
    id: 3,
    name: "Owen Bennett",
    dateOfBirth: "2000-11-10", 
    contact: "(555) 246-8013",
    lastVisit: "2024-01-15",
  },
  {
    id: 4,
    name: "Isabella Hayes",
    dateOfBirth: "1978-02-28",
    contact: "(555) 135-7924", 
    lastVisit: "2023-10-10",
  },
  {
    id: 5,
    name: "Lucas Morgan",
    dateOfBirth: "1965-06-03",
    contact: "(555) 369-1215",
    lastVisit: "2024-02-01",
  },
];

interface PatientsTableProps {
  searchTerm: string;
}

export function PatientsTable({ searchTerm }: PatientsTableProps) {
  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.contact.includes(searchTerm)
  );

  return (
    <div className="px-4 py-3">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-left text-slate-900 text-sm font-medium">Name</th>
              <th className="px-4 py-3 text-left text-slate-900 text-sm font-medium">Date of Birth</th>
              <th className="px-4 py-3 text-left text-slate-900 text-sm font-medium">Contact</th>
              <th className="px-4 py-3 text-left text-slate-900 text-sm font-medium">Last Visit</th>
              <th className="px-4 py-3 text-left text-slate-600 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-4 py-4 text-slate-900 text-sm font-medium">{patient.name}</td>
                <td className="px-4 py-4 text-slate-600 text-sm">{patient.dateOfBirth}</td>
                <td className="px-4 py-4 text-slate-600 text-sm">{patient.contact}</td>
                <td className="px-4 py-4 text-slate-600 text-sm">{patient.lastVisit}</td>
                <td className="px-4 py-4">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
