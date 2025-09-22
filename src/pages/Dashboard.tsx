import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";
import MyCourses from "@/components/dashboard/MyCourses";
import MyProfile from "@/components/dashboard/MyProfile";
import ChangePassword from "@/components/dashboard/ChangePassword";
import MyCertificates from "@/components/dashboard/MyCertificates";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      navigate("/login");
    } else {
      setUser(currentUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("logout")); // Dispatch logout event
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Welcome, {user.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={activeTab === "courses" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("courses")}
                >
                  My Courses
                </Button>
                <Button
                  variant={activeTab === "profile" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("profile")}
                >
                  My Profile
                </Button>
                <Button
                  variant={activeTab === "password" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("password")}
                >
                  Change Password
                </Button>
                <Button
                  variant={activeTab === "certificates" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("certificates")}
                >
                  My Certificates
                </Button>
                <Button
                  variant="destructive"
                  className="w-full justify-start"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3">
            {activeTab === "courses" && <MyCourses user={user} />}
            {activeTab === "profile" && <MyProfile user={user} setUser={setUser} />}
            {activeTab === "password" && <ChangePassword user={user} setUser={setUser} />}
            {activeTab === "certificates" && <MyCertificates user={user} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
