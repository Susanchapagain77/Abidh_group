import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MCQTest from "./MCQTest";

const MyCourses = ({ user }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [completedCourses, setCompletedCourses] = useState(user.completedCourses || []);
  const [showMCQ, setShowMCQ] = useState(false);

  const enrolledCourses = [
    // Sample enrolled courses, replace with real data
    { id: "time-management", name: "Time Management & Productivity", materials: ["video1.mp4", "guide.pdf"] },
    { id: "confidence-building", name: "Confidence Building & Public Speaking Basics", materials: ["video2.mp4", "exercises.pdf"] }
  ];

  const handleMarkComplete = (courseId) => {
    setSelectedCourse(courseId);
    setShowMCQ(true);
  };

  const handleMCQComplete = (passed) => {
    if (passed) {
      setCompletedCourses([...completedCourses, selectedCourse]);
      // Update user data
      const updatedUser = { ...user, completedCourses: [...completedCourses, selectedCourse] };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      // Generate certificate logic here
    }
    setShowMCQ(false);
    setSelectedCourse(null);
  };

  if (showMCQ) {
    return <MCQTest courseId={selectedCourse} onComplete={handleMCQComplete} />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Courses</h2>
      <div className="space-y-4">
        {enrolledCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
              <CardDescription>
                {completedCourses.includes(course.id) ? (
                  <Badge variant="secondary">Completed</Badge>
                ) : (
                  <Badge>In Progress</Badge>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {course.materials.map((material, index) => (
                  <div key={index}>
                    <a href={`/materials/${material}`} target="_blank" rel="noopener noreferrer" className="text-primary">
                      {material}
                    </a>
                  </div>
                ))}
              </div>
              {!completedCourses.includes(course.id) && (
                <Button className="mt-4" onClick={() => handleMarkComplete(course.id)}>
                  Mark as Complete
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
