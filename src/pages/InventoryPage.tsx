
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Package, AlertTriangle, TrendingDown, Plus, Package2 } from "lucide-react";

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
    { title: "Total Items", value: "150", icon: Package, color: "from-blue-500 to-blue-600", bgColor: "from-blue-50 to-blue-100" },
    { title: "Low Stock", value: "5", icon: TrendingDown, color: "from-amber-500 to-orange-500", bgColor: "from-amber-50 to-orange-100" },
    { title: "Critical", value: "2", icon: AlertTriangle, color: "from-red-500 to-rose-600", bgColor: "from-red-50 to-rose-100" },
    { title: "Categories", value: "8", icon: Package2, color: "from-emerald-500 to-green-600", bgColor: "from-emerald-50 to-green-100" },
  ];

  const filteredItems = inventoryItems.filter(item => {
    if (activeTab === "all") return true;
    return item.status === activeTab;
  });

  return (
    <div className="flex flex-col max-w-full flex-1 bg-gradient-to-br from-white/50 to-emerald-50/30">
      <PageHeader 
        title="Inventory" 
        description="Manage supplies and equipment"
        action={{
          label: "Add Item",
          onClick: handleAddItem
        }}
      />

      <div className="px-6 py-4">
        {/* Stats Grid */}
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

        {/* Filter Tabs */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl mb-6">
          <div className="border-b border-gray-100">
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
                  className={`py-4 text-sm font-semibold border-b-3 transition-all duration-300 ${
                    activeTab === tab.key
                      ? "border-emerald-500 text-emerald-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
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
                <div key={item.id} className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-emerald-50/50 rounded-xl hover:from-emerald-50 hover:to-green-50 transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:shadow-md">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                        item.status === 'critical' ? 'bg-gradient-to-r from-red-500 to-rose-600' :
                        item.status === 'low' ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 
                        'bg-gradient-to-r from-emerald-500 to-green-600'
                      }`}>
                        <Package className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-bold text-lg">{item.name}</h4>
                      <p className="text-gray-600 font-medium">{item.category}</p>
                      <p className="text-emerald-600 text-sm font-medium">Min stock: {item.minStock}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-800 font-bold text-lg">Qty: {item.quantity}</p>
                    <p className="text-gray-600 font-semibold">{item.price}</p>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                      item.status === 'critical' ? 'bg-gradient-to-r from-red-100 to-rose-100 text-red-700' :
                      item.status === 'low' ? 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700' :
                      'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700'
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
