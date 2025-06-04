
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Save, X } from "lucide-react";

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Amelia",
    lastName: "Stone",
    email: "amelia.stone@dentistry.com",
    phone: "+1 (555) 123-4567",
    role: "General Dentistry"
  });

  const [editedProfile, setEditedProfile] = useState({ ...profile });

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

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="w-24 h-24">
              <AvatarImage 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrGSxRXtO4b-EytuNP0A4LNtrZa0fnukPxY1JRepZLoIOtA5b7EgUNZhv0MEA0EPzq5x6BnfKA2o5b_LtaryFle-MH5Xh9JdM5vq-YA8OQpQp0QnOg0ZFDfJA9c5XkgYCEDn0hNtu_arDZQWlVx_Nr-HgC9PWqy5Zbt7aOBclrO3_6dOwvGw8QirXqaD3vRHpXnm9-VHXjQeQ1ADlJlD5EEWdiparj4dIyPsUvIFJORr6eKf0400EVIgkZbRkmd9InBVAoUO6q53b_" 
                alt="Profile" 
              />
              <AvatarFallback>
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
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
