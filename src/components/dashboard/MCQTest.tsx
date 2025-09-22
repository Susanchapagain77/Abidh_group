import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const MCQTest = ({ courseId, onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Sample MCQs, replace with real data
  const mcqs = [
    { question: "What is time management?", options: ["A", "B", "C", "D"], correct: "A" },
    // Add more questions
  ];

  const handleSubmit = () => {
    const score = mcqs.filter((mcq, index) => answers[index] === mcq.correct).length;
    const passed = score >= mcqs.length * 0.7; // 70% pass mark
    setSubmitted(true);
    setTimeout(() => onComplete(passed), 2000);
  };

  if (submitted) {
    return (
      <Alert>
        <AlertDescription>Test submitted! Results will be processed.</AlertDescription>
      </Alert>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>MCQ Test for {courseId}</CardTitle>
        <CardDescription>Answer all questions to complete the course.</CardDescription>
      </CardHeader>
      <CardContent>
        {mcqs.map((mcq, index) => (
          <div key={index} className="mb-4">
            <p className="font-medium">{mcq.question}</p>
            {mcq.options.map((option, optIndex) => (
              <label key={optIndex} className="block">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={(e) => setAnswers({ ...answers, [index]: e.target.value })}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <Button onClick={handleSubmit}>Submit Test</Button>
      </CardContent>
    </Card>
  );
};

export default MCQTest;
