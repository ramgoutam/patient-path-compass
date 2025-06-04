
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Phone, MapPin, Calendar, FileText, FlaskConical, Factory, Stethoscope } from "lucide-react";

export function PatientProfilePage() {
  // Mock patient data
  const patient = {
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, San Francisco, CA 94102",
    gender: "Male",
    dateOfBirth: "1985-06-15",
    patientId: "P-2024-001"
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <PageHeader title={`${patient.firstName} ${patient.lastName}`} />
      </div>
      
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Patient Header */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {patient.firstName.charAt(0)}{patient.lastName.charAt(0)}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {patient.firstName} {patient.lastName}
                    </h1>
                    <p className="text-gray-500">Patient ID: {patient.patientId}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-green-700 border-green-300 bg-green-50">
                  Active Patient
                </Badge>
              </div>
            </CardHeader>
          </Card>

          {/* Patient Details Tabs */}
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="basic">Basic Details</TabsTrigger>
              <TabsTrigger value="treatment">Treatment Plan</TabsTrigger>
              <TabsTrigger value="clinical">Clinical Forms</TabsTrigger>
              <TabsTrigger value="lab">Lab Scripts</TabsTrigger>
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Patient's Basic Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <User className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Full Name</p>
                          <p className="font-medium">{patient.firstName} {patient.lastName}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Phone Number</p>
                          <p className="font-medium">{patient.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Address</p>
                          <p className="font-medium">{patient.address}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Gender</p>
                        <p className="font-medium">{patient.gender}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Date of Birth</p>
                        <p className="font-medium">{patient.dateOfBirth}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Patient ID</p>
                        <p className="font-medium">{patient.patientId}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="treatment" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5" />
                    Treatment Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">No treatment plans available. Add a new treatment plan to get started.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="clinical" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Clinical Forms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">No clinical forms available. Upload or create clinical forms to track patient progress.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="lab" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FlaskConical className="h-5 w-5" />
                    Lab Scripts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">No lab scripts available. Add lab orders and results here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="manufacturing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Factory className="h-5 w-5" />
                    Manufacturing Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">No manufacturing orders available. Create orders for dental appliances and prosthetics.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appointments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">No appointments scheduled. Schedule appointments to manage patient visits.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
