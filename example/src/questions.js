export const questions = [
  {
    sectionId: "s1",
    id: "s1q1",
    label: "What treatment are you currently receiving",
    type: "textArea",
    nextQuestion: "s1q2",
  },
  {
    sectionId: "s1",
    id: "s1q2",
    label: "I’m exploring cannabis because it was recommended to me by:",
    options: [
      { label: "Clinician", nextQuestion: "s1q1" },
      { label: "Fellow veteran", nextQuestion: "s1q3" },
      { label: "Friend", nextQuestion: "s1q3" },
    ],
    type: "radio",
    nextQuestion: "s1q3",
    prevQuestion: "s1q1",
  },
  {
    sectionId: "s1",
    id: "s1q3",
    label: "I’m struggling with:",
    options: [
      { label: "Ability to do the things I want to do", nextQuestion: "s1q1" },
      { label: "Alcohol use", nextQuestion: "s1q1" },
      { label: "Anger", nextQuestion: "s1q1" },
      { label: "Anxiety / Fear", nextQuestion: "s1q2" },
      { label: "Thinking clearly", nextQuestion: "s1q2" },
      { label: "Communication", nextQuestion: "s1q2" },
      { label: "Depression / Sadness", nextQuestion: "s1q2" },
      { label: "PTSD", nextQuestion: "s1q2" },
      { label: "Pain", nextQuestion: "s1q2" },
      { label: "Relationship problems", nextQuestion: "s1q1" },
    ],
    nextQuestion: "s2q1",
    prevQuestion: "s1q2",
    type: "checkbox",
  },
  {
    sectionId: "s2",
    id: "s2q1",
    label: "Are you feeling safe?",
    options: [
      { label: "yes", nextQuestion: "s1q1" },
      { label: "no", nextQuestion: "s1q2" },
    ],
    nextQuestion: "s2q2",
    prevQuestion: "s1q3",
    type: "checkbox",
  },
  {
    sectionId: "s2",
    id: "s2q2",
    label: "What prescribed medications are you currently on?",
    type: "text",
    prevQuestion: "s2q1",
  },
];
