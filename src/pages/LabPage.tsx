
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { FlaskConical, Clock, CheckCircle, AlertCircle, Calendar, Zap } from "lucide-react";

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
    { title: "Active Orders", value: "8", icon: FlaskConical, color: "from-blue-500 to-blue-600", bgColor: "from-blue-50 to-blue-100" },
    { title: "Pending", value: "3", icon: Clock, color: "from-amber-500 to-orange-500", bgColor: "from-amber-50 to-orange-100" },
    { title: "Completed", value: "12", icon: CheckCircle, color: "from-emerald-500 to-green-600", bgColor: "from-emerald-50 to-green-100" },
    { title: "Overdue", value: "1", icon: AlertCircle, color: "from-red-500 to-rose-600", bgColor: "from-red-50 to-rose-100" },
  ];

  return (
    <div className="flex flex-col max-w-full flex-1 bg-gradient-to-br from-white/50 to-blue-50/30">
      <PageHeader 
        title="Laboratory" 
        description="Manage laboratory orders and tracking"
        action={{
          label: "New Lab Order",
          onClick: handleNewOrder
        }}
      />

      {/* Stats Grid */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`bg-gradient-to-br ${stat.bgColor} p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide">{stat.title}</p>
                  <p className="text-gray-800 text-4xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className={`p-4 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Orders */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-blue-600" />
              <h3 className="text-gray-800 text-xl font-bold">Lab Orders</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {labOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-md">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <FlaskConical className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-bold text-lg">{order.id}</h4>
                      <p className="text-gray-600 font-medium">{order.patient}</p>
                      <p className="text-blue-600 text-sm font-medium">{order.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-800 font-bold">{order.lab}</p>
                    <p className="text-gray-600 text-sm font-medium">Due: {order.dueDate}</p>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                      order.status === 'completed' ? 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700' :
                      order.status === 'in-progress' ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700' :
                      order.status === 'delayed' ? 'bg-gradient-to-r from-red-100 to-rose-100 text-red-700' :
                      'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700'
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
