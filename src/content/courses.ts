// This file contains the parsed and structured course data for the Academy and Corporate trainings.
// It will be imported and used by the Academy and Creative sections for dynamic rendering.

export const academyCourses = [
  // Example structure, to be filled with parsed data from the txt file
  {
    category: "College Trainings",
    courses: [
      {
        title: "Communication Skills",
        duration: "10 Hours",
        description: "Enhance communication abilities in personal and professional contexts. Covers verbal, nonverbal, and written skills, with interactive activities and real-world application.",
        objectives: [
          "Understand key elements and principles of effective communication.",
          "Develop active listening skills.",
          "Enhance verbal and nonverbal communication.",
          "Improve written communication for professional and interpersonal interactions.",
          "Adapt strategies to diverse audiences.",
          "Manage conflicts with empathy and assertiveness.",
          "Utilize technology tools for communication."
        ],
        outcomes: [
          "Demonstrate improved listening skills.",
          "Express ideas confidently and effectively.",
          "Utilize nonverbal cues to enhance message delivery.",
          "Produce clear, concise, and professional written communications.",
          "Adapt strategies to diverse audiences and cultural contexts.",
          "Manage conflicts with empathy and assertiveness.",
          "Utilize technology tools for efficient communication."
        ]
      },
      // ...more courses
    ]
  },
  // ...more categories (Corporate, School, etc.)
];

export const corporateCourses = [
  // To be filled with parsed data from the txt file
];
