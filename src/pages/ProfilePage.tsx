
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Save, X, Camera, Sparkles } from "lucide-react";

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Amelia",
    lastName: "Stone",
    email: "amelia.stone@dentistry.com",
    phone: "+1 (555) 123-4567",
    role: "General Dentistry",
    profileImage: ""
  });

  const [editedProfile, setEditedProfile] = useState({ ...profile });

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        if (isEditing) {
          setEditedProfile(prev => ({ ...prev, profileImage: imageUrl }));
        } else {
          setProfile(prev => ({ ...prev, profileImage: imageUrl }));
          setEditedProfile(prev => ({ ...prev, profileImage: imageUrl }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setProfile({ ...editedProfile });
    setIsEditing(false);
    console.log("Profile saved:", editedProfile);
  };

  const handleCancel = () => {
    setEditedProfile({ ...profile });
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditedProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const currentProfile = isEditing ? editedProfile : profile;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="h-6 w-6 text-blue-600" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Profile Settings
          </h1>
        </div>
        <p className="text-gray-600">Manage your personal information and preferences</p>
      </div>

      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-t-lg">
          <div className="flex justify-center mb-6 relative">
            <Avatar className="w-28 h-28 shadow-xl ring-4 ring-white">
              {currentProfile.profileImage ? (
                <AvatarImage 
                  src={currentProfile.profileImage} 
                  alt="Profile" 
                />
              ) : null}
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
                {getInitials(currentProfile.firstName, currentProfile.lastName)}
              </AvatarFallback>
            </Avatar>
            <label 
              htmlFor="profile-upload" 
              className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full p-3 cursor-pointer hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Camera className="w-4 h-4" />
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
          <CardTitle className="text-2xl text-gray-800">
            Dr. {currentProfile.firstName} {currentProfile.lastName}
          </CardTitle>
          <p className="text-blue-600 font-medium">{currentProfile.role}</p>
        </CardHeader>
        
        <CardContent className="space-y-8 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name</Label>
              {isEditing ? (
                <Input
                  id="firstName"
                  value={editedProfile.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                />
              ) : (
                <div className="p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-100 font-medium text-gray-800">
                  {profile.firstName}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name</Label>
              {isEditing ? (
                <Input
                  id="lastName"
                  value={editedProfile.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                />
              ) : (
                <div className="p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-100 font-medium text-gray-800">
                  {profile.lastName}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
            {isEditing ? (
              <Input
                id="email"
                type="email"
                value={editedProfile.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
              />
            ) : (
              <div className="p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-100 font-medium text-gray-800">
                {profile.email}
              </div>
            )}
          </div>

          <div className="space-y-3">
            <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
            {isEditing ? (
              <Input
                id="phone"
                type="tel"
                value={editedProfile.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
              />
            ) : (
              <div className="p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-100 font-medium text-gray-800">
                {profile.phone}
              </div>
            )}
          </div>

          <div className="space-y-3">
            <Label htmlFor="role" className="text-gray-700 font-medium">Role</Label>
            {isEditing ? (
              <Input
                id="role"
                value={editedProfile.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
                className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
              />
            ) : (
              <div className="p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-100 font-medium text-gray-800">
                {profile.role}
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-6">
            {isEditing ? (
              <>
                <Button 
                  onClick={handleSave} 
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleCancel} 
                  className="flex-1 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => setIsEditing(true)} 
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                Edit Profile
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
