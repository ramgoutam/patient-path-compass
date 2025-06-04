
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Package, AlertTriangle, TrendingDown, Plus } from "lucide-react";

export function InventoryPage() {
  const [activeTab, setActiveTab] = useState("all");

  const handleAddItem = () => {
    console.log("Adding new inventory item...");
  };

  const inventoryItems = [
    { id: "INV-001", name: "Dental Floss", category: "Consumables", quantity: 15, minStock: 50, price: "$2.50", status: "low" },
    { id: "INV-002", name: "Latex Gloves", category: "PPE", quantity: 200, minStock: 100, price: "$0.15", status: "good" },
    { id: "INV-003", name: "Composite Resin", category: "Materials", quantity: 5, minStock: 10, price: "$45.00", status: "critical" },
    { id: "INV-004", name: "Anesthetic Cartridges", category: "Medications", quantity: 80, minStock: 20, price: "$1.25", status: "good" },
    { id: "INV-005", name: "Impression Material", category: "Materials", quantity: 25, minStock: 15, price: "$32.00", status: "good" },
  ];

  const stats = [
    { title: "Total Items", value: "150", icon: Package, color: "bg-blue-50 text-blue-600" },
    { title: "Low Stock", value: "5", icon: TrendingDown, color: "bg-yellow-50 text-yellow-600" },
    { title: "Critical", value: "2", icon: AlertTriangle, color: "bg-red-50 text-red-600" },
    { title: "Categories", value: "8", icon: Package, color: "bg-green-50 text-green-600" },
  ];

  const filteredItems = inventoryItems.filter(item => {
    if (activeTab === "all") return true;
    return item.status === activeTab;
  });

  return (
    <div className="flex flex-col max-w-full flex-1">
      <PageHeader 
        title="Inventory" 
        description="Manage supplies and equipment"
        action={{
          label: "Add Item",
          onClick: handleAddItem
        }}
      />

      <div className="px-4 py-3">
        {/* Stats Grid */}
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

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm mb-6">
          <div className="border-b border-slate-200">
            <div className="flex space-x-8 px-6">
              {[
                { key: "all", label: "All Items" },
                { key: "good", label: "Good Stock" },
                { key: "low", label: "Low Stock" },
                { key: "critical", label: "Critical" }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.key
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Inventory List */}
          <div className="p-6">
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.status === 'critical' ? 'bg-red-100' :
                        item.status === 'low' ? 'bg-yellow-100' : 'bg-green-100'
                      }`}>
                        <Package className={`h-5 w-5 ${
                          item.status === 'critical' ? 'text-red-600' :
                          item.status === 'low' ? 'text-yellow-600' : 'text-green-600'
                        }`} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold">{item.name}</h4>
                      <p className="text-slate-600 text-sm">{item.category}</p>
                      <p className="text-slate-500 text-xs">Min stock: {item.minStock}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-900 font-semibold">Qty: {item.quantity}</p>
                    <p className="text-slate-600 text-sm">{item.price}</p>
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'critical' ? 'bg-red-100 text-red-800' :
                      item.status === 'low' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.status}
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
