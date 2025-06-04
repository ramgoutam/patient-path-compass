
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Calendar, Clock, Users, Plus, Filter } from "lucide-react";

export function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("day"); // day, week, month

  const handleNewAppointment = () => {
    console.log("Creating new appointment...");
  };

  const appointments = [
    { id: 1, patient: "Emily Johnson", time: "9:00 AM", duration: "60 min", treatment: "Dental Cleaning", dentist: "Dr. Stone", status: "confirmed" },
    { id: 2, patient: "Michael Chen", time: "10:30 AM", duration: "90 min", treatment: "Root Canal", dentist: "Dr. Stone", status: "in-progress" },
    { id: 3, patient: "Sarah Williams", time: "2:00 PM", duration: "30 min", treatment: "Consultation", dentist: "Dr. Stone", status: "pending" },
    { id: 4, patient: "David Brown", time: "3:30 PM", duration: "45 min", treatment: "Dental Filling", dentist: "Dr. Stone", status: "confirmed" },
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
  ];

  return (
    <div className="flex flex-col max-w-full flex-1">
      <PageHeader 
        title="Appointments" 
        description="Manage patient appointments and scheduling"
        action={{
          label: "New Appointment",
          onClick: handleNewAppointment
        }}
      />

      {/* View Controls */}
      <div className="px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("day")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === "day" ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Day
            </button>
            <button
              onClick={() => setViewMode("week")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === "week" ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setViewMode("month")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === "month" ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Month
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Time Slots */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-slate-900 text-lg font-semibold flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Time Slots
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-2">
                {timeSlots.map((time, index) => {
                  const hasAppointment = appointments.some(apt => apt.time === time);
                  return (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                        hasAppointment 
                          ? "bg-blue-50 border-blue-200 text-blue-700"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <span className="font-medium">{time}</span>
                      {hasAppointment && (
                        <span className="block text-xs mt-1">Booked</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Appointments List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="p-6 border-b border-slate-200">
                <h3 className="text-slate-900 text-lg font-semibold flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Today's Schedule
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-semibold">{appointment.patient}</h4>
                          <p className="text-slate-600 text-sm">{appointment.treatment}</p>
                          <p className="text-slate-500 text-xs">{appointment.dentist}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-900 font-semibold">{appointment.time}</p>
                        <p className="text-slate-600 text-sm">{appointment.duration}</p>
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
