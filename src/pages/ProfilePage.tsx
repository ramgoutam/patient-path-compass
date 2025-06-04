
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Save, X, Camera } from "lucide-react";

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
    <div className="p-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4 relative">
            <Avatar className="w-24 h-24">
              {currentProfile.profileImage ? (
                <AvatarImage 
                  src={currentProfile.profileImage} 
                  alt="Profile" 
                />
              ) : null}
              <AvatarFallback className="text-2xl font-semibold bg-slate-200 text-slate-700">
                {getInitials(currentProfile.firstName, currentProfile.lastName)}
              </AvatarFallback>
            </Avatar>
            <label 
              htmlFor="profile-upload" 
              className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer hover:bg-primary/90 transition-colors"
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
          <CardTitle className="text-2xl">Profile Settings</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              {isEditing ? (
                <Input
                  id="firstName"
                  value={editedProfile.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              ) : (
                <div className="p-2 bg-gray-50 rounded-md">{profile.firstName}</div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              {isEditing ? (
                <Input
                  id="lastName"
                  value={editedProfile.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              ) : (
                <div className="p-2 bg-gray-50 rounded-md">{profile.lastName}</div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            {isEditing ? (
              <Input
                id="email"
                type="email"
                value={editedProfile.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            ) : (
              <div className="p-2 bg-gray-50 rounded-md">{profile.email}</div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            {isEditing ? (
              <Input
                id="phone"
                type="tel"
                value={editedProfile.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            ) : (
              <div className="p-2 bg-gray-50 rounded-md">{profile.phone}</div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            {isEditing ? (
              <Input
                id="role"
                value={editedProfile.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
              />
            ) : (
              <div className="p-2 bg-gray-50 rounded-md">{profile.role}</div>
            )}
          </div>

          <div className="flex gap-2 pt-4">
            {isEditing ? (
              <>
                <Button onClick={handleSave} className="flex-1">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
                <Button variant="outline" onClick={handleCancel} className="flex-1">
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)} className="w-full">
                Edit Profile
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
