
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Factory, Play, Pause, CheckCircle, Package, Cog } from "lucide-react";

export function ManufacturingPage() {
  const handleNewJob = () => {
    console.log("Creating new manufacturing job...");
  };

  const manufacturingJobs = [
    { id: "MFG-001", item: "Ceramic Crown", patient: "Emily Johnson", status: "running", progress: 75, machine: "CAD/CAM Unit 1" },
    { id: "MFG-002", item: "Bridge Framework", patient: "Michael Chen", status: "queued", progress: 0, machine: "3D Printer A" },
    { id: "MFG-003", item: "Surgical Guide", patient: "Sarah Williams", status: "completed", progress: 100, machine: "3D Printer B" },
    { id: "MFG-004", item: "Implant Abutment", patient: "David Brown", status: "paused", progress: 45, machine: "Milling Machine 2" },
  ];

  const machines = [
    { name: "CAD/CAM Unit 1", status: "running", currentJob: "MFG-001" },
    { name: "3D Printer A", status: "idle", currentJob: null },
    { name: "3D Printer B", status: "running", currentJob: "MFG-005" },
    { name: "Milling Machine 2", status: "maintenance", currentJob: null },
  ];

  return (
    <div className="flex flex-col max-w-full flex-1 bg-gradient-to-br from-white/50 to-purple-50/30">
      <PageHeader 
        title="Manufacturing" 
        description="Monitor production and equipment status"
        action={{
          label: "New Job",
          onClick: handleNewJob
        }}
      />

      <div className="px-6 py-4">
        {/* Machine Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {machines.map((machine, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <Factory className="h-8 w-8 text-purple-600" />
                <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                  machine.status === 'running' ? 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700' :
                  machine.status === 'idle' ? 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700' :
                  'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700'
                }`}>
                  {machine.status}
                </span>
              </div>
              <h3 className="text-gray-800 font-bold text-sm mb-2">{machine.name}</h3>
              <p className="text-gray-600 text-xs">
                {machine.currentJob ? `Job: ${machine.currentJob}` : 'No active job'}
              </p>
            </div>
          ))}
        </div>

        {/* Manufacturing Jobs */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Cog className="h-6 w-6 text-purple-600" />
              <h3 className="text-gray-800 text-xl font-bold">Manufacturing Queue</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {manufacturingJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-purple-50/50 rounded-xl hover:from-purple-50 hover:to-indigo-50 transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:shadow-md">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Package className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-800 font-bold text-lg">{job.id}</h4>
                      <p className="text-gray-600 font-medium">{job.item} - {job.patient}</p>
                      <p className="text-purple-600 text-sm font-medium">{job.machine}</p>
                      
                      {/* Progress Bar */}
                      <div className="mt-3 w-full bg-gray-200 rounded-full h-3 shadow-inner">
                        <div
                          className={`h-3 rounded-full transition-all duration-500 ${
                            job.status === 'completed' ? 'bg-gradient-to-r from-emerald-400 to-green-500' :
                            job.status === 'running' ? 'bg-gradient-to-r from-blue-400 to-indigo-500' :
                            job.status === 'paused' ? 'bg-gradient-to-r from-amber-400 to-orange-500' :
                            'bg-gradient-to-r from-gray-300 to-gray-400'
                          } shadow-sm`}
                          style={{ width: `${job.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-bold">{job.progress}%</span>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                      job.status === 'completed' ? 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700' :
                      job.status === 'running' ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700' :
                      job.status === 'paused' ? 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700' :
                      'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700'
                    }`}>
                      {job.status}
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
