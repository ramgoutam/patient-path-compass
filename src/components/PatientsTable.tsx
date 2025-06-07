
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Patient {
  id: number;
  name: string;
  dateOfBirth: string;
  phone: string;
  treatmentType: string;
  lastVisit: string;
  nextAppointment: string;
  status: string;
}

const mockPatients: Patient[] = [
  {
    id: 1,
    name: "Owen Turner",
    dateOfBirth: "1985-03-15",
    phone: "(555) 123-4567",
    treatmentType: "Orthodontics",
    lastVisit: "2023-11-20",
    nextAppointment: "2024-05-10",
    status: "Treatment in progress",
  },
  {
    id: 2,
    name: "Chloe Bennett",
    dateOfBirth: "1992-07-22",
    phone: "(555) 987-6543",
    treatmentType: "Dental Cleaning",
    lastVisit: "2023-12-05",
    nextAppointment: "2024-06-15",
    status: "Treatment not started",
  },
  {
    id: 3,
    name: "Lucas Carter",
    dateOfBirth: "1978-11-10",
    phone: "(555) 246-8013",
    treatmentType: "Root Canal",
    lastVisit: "2024-01-12",
    nextAppointment: "2024-07-20",
    status: "Treatment in progress",
  },
  {
    id: 4,
    name: "Emily Morgan",
    dateOfBirth: "1989-05-03",
    phone: "(555) 369-1470",
    treatmentType: "Dental Implant",
    lastVisit: "2023-10-15",
    nextAppointment: "2024-04-25",
    status: "Treatment completed",
  },
  {
    id: 5,
    name: "Caleb Hayes",
    dateOfBirth: "1995-09-18",
    phone: "(555) 753-9512",
    treatmentType: "Teeth Whitening",
    lastVisit: "2023-11-01",
    nextAppointment: "2024-05-05",
    status: "Treatment not started",
  },
  {
    id: 6,
    name: "Sophia Reed",
    dateOfBirth: "1982-02-28",
    phone: "(555) 468-2581",
    treatmentType: "Periodontal Treatment",
    lastVisit: "2023-12-20",
    nextAppointment: "2024-06-01",
    status: "Treatment in progress",
  },
  {
    id: 7,
    name: "Henry Cole",
    dateOfBirth: "1975-06-07",
    phone: "(555) 864-1234",
    treatmentType: "Crown Replacement",
    lastVisit: "2024-01-05",
    nextAppointment: "2024-07-10",
    status: "Treatment completed",
  },
  {
    id: 8,
    name: "Isabella Price",
    dateOfBirth: "1998-10-25",
    phone: "(555) 579-3692",
    treatmentType: "Wisdom Tooth Extraction",
    lastVisit: "2023-10-20",
    nextAppointment: "2024-04-30",
    status: "Treatment not started",
  },
  {
    id: 9,
    name: "Ryan Foster",
    dateOfBirth: "1980-04-12",
    phone: "(555) 975-2468",
    treatmentType: "Dental Bridge",
    lastVisit: "2023-11-15",
    nextAppointment: "2024-05-15",
    status: "Treatment in progress",
  },
  {
    id: 10,
    name: "Lily Brooks",
    dateOfBirth: "1990-08-05",
    phone: "(555) 682-1597",
    treatmentType: "Cavity Filling",
    lastVisit: "2023-12-10",
    nextAppointment: "2024-06-10",
    status: "Patient deceased",
  },
];

interface PatientsTableProps {
  searchTerm: string;
  activeTab: string;
}

export function PatientsTable({ searchTerm, activeTab }: PatientsTableProps) {
  const filteredPatients = mockPatients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.phone.includes(searchTerm);
    
    if (activeTab === "all") return matchesSearch;
    
    // Map tab IDs to status values
    const statusMap: { [key: string]: string } = {
      "not-started": "Treatment not started",
      "in-progress": "Treatment in progress", 
      "completed": "Treatment completed",
      "deceased": "Patient deceased"
    };
    
    return matchesSearch && patient.status === statusMap[activeTab];
  });

  const getStatusButtonColor = (status: string) => {
    switch (status) {
      case "Treatment not started":
        return "bg-yellow-200 text-yellow-900 hover:bg-yellow-300";
      case "Treatment in progress":
        return "bg-blue-200 text-blue-900 hover:bg-blue-300";
      case "Treatment completed":
        return "bg-green-200 text-green-900 hover:bg-green-300";
      case "Patient deceased":
        return "bg-gray-200 text-gray-900 hover:bg-gray-300";
      default:
        return "bg-slate-200 text-slate-900 hover:bg-slate-300";
    }
  };

  return (
    <div className="px-4 py-3">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-left text-slate-900 text-sm font-medium">Patient Name</th>
              <th className="px-4 py-3 text-left text-slate-900 text-sm font-medium">Date of Birth</th>
              <th className="px-4 py-3 text-left text-slate-900 text-sm font-medium">Phone</th>
              <th className="px-4 py-3 text-left text-slate-900 text-sm font-medium">Treatment Type</th>
              <th className="px-4 py-3 text-left text-slate-900 text-sm font-medium">Last Visit</th>
              <th className="px-4 py-3 text-left text-slate-900 text-sm font-medium">Next Appointment</th>
              <th className="px-4 py-3 text-left text-slate-900 text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-4 py-4 text-slate-900 text-sm font-medium">{patient.name}</td>
                <td className="px-4 py-4 text-slate-600 text-sm">{patient.dateOfBirth}</td>
                <td className="px-4 py-4 text-slate-600 text-sm">{patient.phone}</td>
                <td className="px-4 py-4 text-slate-600 text-sm">{patient.treatmentType}</td>
                <td className="px-4 py-4 text-slate-600 text-sm">{patient.lastVisit}</td>
                <td className="px-4 py-4 text-slate-600 text-sm">{patient.nextAppointment}</td>
                <td className="px-4 py-4">
                  <Button
                    className={`${getStatusButtonColor(patient.status)} rounded-full px-4 h-8 text-sm font-medium w-full`}
                    variant="secondary"
                  >
                    {patient.status}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
