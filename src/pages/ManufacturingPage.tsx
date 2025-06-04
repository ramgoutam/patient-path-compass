
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Factory, Play, Pause, CheckCircle, Package } from "lucide-react";

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
    <div className="flex flex-col max-w-full flex-1">
      <PageHeader 
        title="Manufacturing" 
        description="Monitor production and equipment status"
        action={{
          label: "New Job",
          onClick: handleNewJob
        }}
      />

      <div className="px-4 py-3">
        {/* Machine Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {machines.map((machine, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <Factory className="h-6 w-6 text-slate-600" />
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  machine.status === 'running' ? 'bg-green-100 text-green-800' :
                  machine.status === 'idle' ? 'bg-gray-100 text-gray-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {machine.status}
                </span>
              </div>
              <h3 className="text-slate-900 font-semibold text-sm">{machine.name}</h3>
              <p className="text-slate-600 text-xs mt-1">
                {machine.currentJob ? `Job: ${machine.currentJob}` : 'No active job'}
              </p>
            </div>
          ))}
        </div>

        {/* Manufacturing Jobs */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-slate-900 text-lg font-semibold">Manufacturing Queue</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {manufacturingJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Package className="h-5 w-5 text-purple-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-slate-900 font-semibold">{job.id}</h4>
                      <p className="text-slate-600 text-sm">{job.item} - {job.patient}</p>
                      <p className="text-slate-500 text-xs">{job.machine}</p>
                      
                      {/* Progress Bar */}
                      <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            job.status === 'completed' ? 'bg-green-500' :
                            job.status === 'running' ? 'bg-blue-500' :
                            job.status === 'paused' ? 'bg-yellow-500' :
                            'bg-gray-400'
                          }`}
                          style={{ width: `${job.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-600 text-sm">{job.progress}%</span>
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      job.status === 'completed' ? 'bg-green-100 text-green-800' :
                      job.status === 'running' ? 'bg-blue-100 text-blue-800' :
                      job.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
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
