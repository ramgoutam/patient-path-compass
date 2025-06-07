
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Patient {
  id: string;
  name: string;
  date_of_birth: string;
  phone: string | null;
  treatment_type: string | null;
  last_visit: string | null;
  next_appointment: string | null;
  status: string;
}

interface PatientsTableProps {
  searchTerm: string;
  activeTab: string;
  refreshTrigger?: number;
}

export function PatientsTable({ searchTerm, activeTab, refreshTrigger }: PatientsTableProps) {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchPatients();
  }, [refreshTrigger]);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching patients:', error);
        toast({
          title: "Error",
          description: "Failed to fetch patients",
          variant: "destructive",
        });
        return;
      }

      setPatients(data || []);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to fetch patients",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (patient.phone && patient.phone.includes(searchTerm));
    
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

  if (loading) {
    return (
      <div className="px-4 py-3">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="p-8 text-center">
            <p className="text-slate-600">Loading patients...</p>
          </div>
        </div>
      </div>
    );
  }

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
            {filteredPatients.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                  {patients.length === 0 ? "No patients found. Add your first patient!" : "No patients match your search criteria."}
                </td>
              </tr>
            ) : (
              filteredPatients.map((patient) => (
                <tr key={patient.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 text-slate-900 text-sm font-medium">{patient.name}</td>
                  <td className="px-4 py-4 text-slate-600 text-sm">{patient.date_of_birth}</td>
                  <td className="px-4 py-4 text-slate-600 text-sm">{patient.phone || '-'}</td>
                  <td className="px-4 py-4 text-slate-600 text-sm">{patient.treatment_type || '-'}</td>
                  <td className="px-4 py-4 text-slate-600 text-sm">{patient.last_visit || '-'}</td>
                  <td className="px-4 py-4 text-slate-600 text-sm">{patient.next_appointment || '-'}</td>
                  <td className="px-4 py-4">
                    <Button
                      className={`${getStatusButtonColor(patient.status)} rounded-full px-4 h-8 text-sm font-medium w-full`}
                      variant="secondary"
                    >
                      {patient.status}
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
