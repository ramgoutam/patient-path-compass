
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { FlaskConical, Clock, CheckCircle, AlertCircle, Calendar } from "lucide-react";

export function LabPage() {
  const [activeTab, setActiveTab] = useState("orders");

  const handleNewOrder = () => {
    console.log("Creating new lab order...");
  };

  const labOrders = [
    { id: "LAB-001", patient: "Emily Johnson", type: "Crown", status: "in-progress", dueDate: "2024-01-20", lab: "Dental Lab Pro" },
    { id: "LAB-002", patient: "Michael Chen", type: "Bridge", status: "completed", dueDate: "2024-01-18", lab: "Premium Dental" },
    { id: "LAB-003", patient: "Sarah Williams", type: "Dentures", status: "pending", dueDate: "2024-01-25", lab: "Smile Tech Lab" },
    { id: "LAB-004", patient: "David Brown", type: "Implant Crown", status: "delayed", dueDate: "2024-01-22", lab: "Dental Lab Pro" },
  ];

  const stats = [
    { title: "Active Orders", value: "8", icon: FlaskConical, color: "bg-blue-50 text-blue-600" },
    { title: "Pending", value: "3", icon: Clock, color: "bg-yellow-50 text-yellow-600" },
    { title: "Completed", value: "12", icon: CheckCircle, color: "bg-green-50 text-green-600" },
    { title: "Overdue", value: "1", icon: AlertCircle, color: "bg-red-50 text-red-600" },
  ];

  return (
    <div className="flex flex-col max-w-full flex-1">
      <PageHeader 
        title="Lab" 
        description="Manage laboratory orders and tracking"
        action={{
          label: "New Lab Order",
          onClick: handleNewOrder
        }}
      />

      {/* Stats Grid */}
      <div className="px-4 py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-slate-900 text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Orders */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-slate-900 text-lg font-semibold">Lab Orders</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {labOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <FlaskConical className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold">{order.id}</h4>
                      <p className="text-slate-600 text-sm">{order.patient}</p>
                      <p className="text-slate-500 text-xs">{order.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-900 font-semibold">{order.lab}</p>
                    <p className="text-slate-600 text-sm">Due: {order.dueDate}</p>
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === 'completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'delayed' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
