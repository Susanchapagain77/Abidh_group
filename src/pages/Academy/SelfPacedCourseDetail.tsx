import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Upload } from "lucide-react";
// Temporarily use a placeholder image until payment-qr.jpg is available
import qrPlaceholder from "@/assets/placeholder.svg";

const courses = {
  "time-management": {
    name: "Time Management & Productivity",
    description: "Learn proven strategies and techniques to organize your time, set priorities, and achieve more with less stress — all at your own pace.",
    longDescription: "This comprehensive course on Time Management & Productivity will equip you with proven strategies to make the most of your time. You'll learn how to set priorities, manage tasks effectively, overcome procrastination, and develop habits that boost productivity. Perfect for students, professionals, and anyone looking to achieve more with less stress.",
    duration: "6 Hours",
    price: "$50",
    outline: [
      "Understanding the value of time and personal productivity",
      "Setting SMART goals and effective prioritization techniques",
      "Practical time management tools and systems",
      "Overcoming procrastination and managing distractions",
      "Creating productive routines and habits",
      "Digital tools for enhanced productivity"
    ],
    outcomes: [
      "Develop a personalized time management system",
      "Prioritize tasks effectively based on importance and urgency",
      "Implement strategies to overcome procrastination",
      "Use productivity tools and techniques in daily life",
      "Create a balanced approach to work and personal time"
    ]
  },
  "confidence-building": {
    name: "Confidence Building & Public Speaking Basics",
    description: "Boost your self-confidence and master the basics of public speaking through practical video lessons and self-practice exercises.",
    longDescription: "This transformative course on Confidence Building & Public Speaking Basics is designed to help you overcome fear and anxiety associated with public speaking. Through step-by-step video lessons and practical exercises, you'll develop the skills to speak with confidence, create engaging presentations, and connect with your audience effectively.",
    duration: "4 Hours",
    price: "$40",
    outline: [
      "Understanding confidence and the psychology of public speaking fear",
      "Body language and voice control techniques",
      "Structuring compelling speeches and presentations",
      "Engaging with your audience effectively",
      "Handling questions and impromptu speaking",
      "Practice exercises for continued improvement"
    ],
    outcomes: [
      "Speak with increased confidence in various settings",
      "Structure clear and engaging presentations",
      "Use effective body language and voice modulation",
      "Connect with audiences and handle questions confidently",
      "Apply techniques to manage nervousness and anxiety"
    ]
  },
  "seo-basics": {
    name: "SEO Basics for Beginners",
    description: "Understand how search engines work and learn the fundamentals of SEO to improve website visibility and ranking step by step.",
    longDescription: "In this practical SEO Basics course, you'll gain a solid understanding of how search engines work and the essential techniques to improve website visibility. Learn keyword research, on-page optimization, content strategies, and basic technical SEO concepts that will help you drive organic traffic to any website.",
    duration: "6 Hours",
    price: "$45",
    outline: [
      "How search engines work and SEO fundamentals",
      "Keyword research and analysis techniques",
      "On-page optimization strategies",
      "Content creation for SEO",
      "Basic technical SEO concepts",
      "SEO measurement and analytics"
    ],
    outcomes: [
      "Conduct effective keyword research for any niche",
      "Optimize web pages for better search engine visibility",
      "Create SEO-friendly content that ranks well",
      "Identify and fix basic technical SEO issues",
      "Measure and track SEO performance"
    ]
  },
  "excel-beginners": {
    name: "Excel for Beginners",
    description: "Start with the basics of Microsoft Excel — formulas, formatting, charts, and simple data management to build a strong foundation.",
    longDescription: "This beginner-friendly Excel course introduces you to the essential features and functions of Microsoft Excel. You'll learn how to navigate the Excel interface, enter and format data, create basic formulas, generate charts, and organize information effectively. By the end of the course, you'll have the confidence to use Excel for personal and professional tasks.",
    duration: "8 Hours",
    price: "$55",
    outline: [
      "Excel interface and navigation",
      "Data entry and formatting techniques",
      "Basic formulas and functions",
      "Working with cells and ranges",
      "Creating and customizing charts",
      "Simple data organization and filtering"
    ],
    outcomes: [
      "Navigate the Excel interface with confidence",
      "Create and format spreadsheets effectively",
      "Use basic formulas and functions to analyze data",
      "Generate visual representations with charts",
      "Organize and manage data efficiently"
    ]
  },
  "creative-thinking": {
    name: "Creative and Critical Thinking",
    description: "Sharpen your ability to think outside the box, solve problems creatively, and make better decisions with structured critical thinking exercises.",
    longDescription: "This dynamic course combines creative and critical thinking approaches to enhance your problem-solving abilities. Through interactive exercises and real-world applications, you'll develop techniques to generate innovative ideas, evaluate options objectively, and implement effective solutions to complex challenges.",
    duration: "6 Hours",
    price: "$50",
    outline: [
      "Understanding creative and critical thinking processes",
      "Techniques for idea generation and brainstorming",
      "Analytical thinking and logical reasoning",
      "Decision-making frameworks and evaluation methods",
      "Overcoming cognitive biases and thinking traps",
      "Applying creative and critical thinking to real-world problems"
    ],
    outcomes: [
      "Generate innovative ideas and solutions to problems",
      "Evaluate information critically and objectively",
      "Make more effective decisions using structured thinking",
      "Overcome common thinking biases and limitations",
      "Apply creative and critical thinking in various situations"
    ]
  },
  "accounting-basics": {
    name: "Basic Accounting Made Easy",
    description: "Simplify the principles of accounting with easy-to-follow lessons, real-life examples, and practical exercises for beginners.",
    longDescription: "This introductory accounting course breaks down complex accounting concepts into easy-to-understand lessons. You'll learn the fundamental principles of accounting, including the accounting equation, double-entry bookkeeping, financial statements, and basic financial analysis. Perfect for beginners with no prior accounting knowledge.",
    duration: "8 Hours",
    price: "$60",
    outline: [
      "Accounting fundamentals and terminology",
      "The accounting equation and double-entry system",
      "Recording transactions and journal entries",
      "Creating and understanding financial statements",
      "Basic financial analysis and interpretation",
      "Practical accounting applications for small businesses"
    ],
    outcomes: [
      "Understand core accounting principles and terminology",
      "Record basic financial transactions accurately",
      "Create and interpret simple financial statements",
      "Perform basic financial analysis",
      "Apply accounting concepts to personal or business situations"
    ]
  }
};

const SelfPacedCourseDetail = () => {
  const { courseId } = useParams();
  const [step, setStep] = useState(1);
  const [paymentFile, setPaymentFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const course = courseId && courses[courseId] ? courses[courseId] : null;

  if (!course) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container py-24 text-center">
          <h1 className="text-4xl font-bold mb-6">Course Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">The course you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/academy">Return to Courses</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setStep(3);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container py-12">
        <Breadcrumb className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/academy">Academy</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>Self-Paced Learning</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>{course.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Step 1: Course Details */}
        {step === 1 && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.longDescription}</p>
              
              <h2 className="text-2xl font-bold mb-3">Course Outline</h2>
              <ul className="list-disc list-inside mb-6 space-y-2">
                {course.outline.map((item, index) => (
                  <li key={index} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold mb-3">Learning Outcomes</h2>
              <ul className="list-disc list-inside mb-8 space-y-2">
                {course.outcomes.map((outcome, index) => (
                  <li key={index} className="text-muted-foreground">{outcome}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <Card className="sticky top-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Course Details</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-bold text-primary">{course.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Format:</span>
                      <span className="font-medium">Self-paced</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Access:</span>
                      <span className="font-medium">Lifetime</span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="w-full" 
                    onClick={() => setStep(2)}
                  >
                    Proceed to Payment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <div>
            <Button 
              variant="outline" 
              className="mb-6"
              onClick={() => setStep(1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Course Details
            </Button>

            <h1 className="text-4xl font-bold mb-6">Payment for {course.name}</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Payment Instructions</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  To complete your enrollment, please follow these steps:
                </p>
                <ol className="list-decimal list-inside space-y-3 mb-6">
                  <li className="text-muted-foreground">Scan the QR code using your mobile banking app</li>
                  <li className="text-muted-foreground">Complete the payment of {course.price}</li>
                  <li className="text-muted-foreground">Take a screenshot of the payment confirmation</li>
                  <li className="text-muted-foreground">Upload the screenshot below</li>
                </ol>
                
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3">Bank Details</h3>
                  <p className="mb-2"><strong>Account Name:</strong> Abhidh Academy</p>
                  <p className="mb-2"><strong>Account Number:</strong> 123456789</p>
                  <p><strong>Bank:</strong> Nepal Bank Ltd.</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Scan QR Code</h2>
                <div className="bg-white p-4 rounded-lg shadow-md inline-block mb-6">
                  <img src={qrPlaceholder} alt="Payment QR Code" className="w-64 h-64" />
                </div>
                
                <h2 className="text-2xl font-bold mb-4">Upload Payment Screenshot</h2>
                <form onSubmit={handleSubmit}>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4 text-center cursor-pointer hover:bg-gray-50 transition">
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      id="payment-screenshot"
                      onChange={handleFileChange}
                      required
                    />
                    <label htmlFor="payment-screenshot" className="cursor-pointer">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <p className="text-lg font-medium mb-1">
                        {paymentFile ? paymentFile.name : "Click to upload payment screenshot"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        PNG, JPG or JPEG (Max 5MB)
                      </p>
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting || !paymentFile}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Payment"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-green-100 p-6 rounded-full inline-block mb-6">
              <Check className="h-16 w-16 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Payment Submitted Successfully!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your payment for {course.name}. Our team will verify your payment and send you access details to your registered email address within 24 hours.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mb-8 text-left">
              <h3 className="text-xl font-bold mb-3">What happens next?</h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="text-muted-foreground">Our team will verify your payment</li>
                <li className="text-muted-foreground">You will receive course access details via email</li>
                <li className="text-muted-foreground">Start learning at your own pace</li>
                <li className="text-muted-foreground">Reach out to support if you need any assistance</li>
              </ol>
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/academy">Back to Academy</Link>
              </Button>
              <Button asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SelfPacedCourseDetail;
