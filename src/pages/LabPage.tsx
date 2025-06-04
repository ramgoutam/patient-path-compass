
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
    { title: "Active Orders", value: "8", icon: FlaskConical, color: "bg-blue-500", bgColor: "bg-blue-50" },
    { title: "Pending", value: "3", icon: Clock, color: "bg-amber-500", bgColor: "bg-amber-50" },
    { title: "Completed", value: "12", icon: CheckCircle, color: "bg-emerald-500", bgColor: "bg-emerald-50" },
    { title: "Overdue", value: "1", icon: AlertCircle, color: "bg-red-500", bgColor: "bg-red-50" },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <PageHeader 
          title="Laboratory" 
          description="Manage laboratory orders and tracking"
          action={{
            label: "New Lab Order",
            onClick: handleNewOrder
          }}
        />
      </div>

      <div className="flex-1 p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} rounded-xl p-6 border border-gray-200`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-gray-900 text-3xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <FlaskConical className="h-6 w-6 text-indigo-600" />
              <h3 className="text-gray-900 text-lg font-semibold">Lab Orders</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {labOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <FlaskConical className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">{order.id}</h4>
                      <p className="text-gray-600 font-medium">{order.patient}</p>
                      <p className="text-indigo-600 text-sm font-medium">{order.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 font-semibold">{order.lab}</p>
                    <p className="text-gray-600 text-sm">Due: {order.dueDate}</p>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                      order.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      order.status === 'delayed' ? 'bg-red-100 text-red-700' :
                      'bg-amber-100 text-amber-700'
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
