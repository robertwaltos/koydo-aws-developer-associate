// Auto-generated content manifest for Aws Developer Associate
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  questionTarget: number;
  activityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "aws-developer-associate",
  examName: "Aws Developer Associate",
  totalQuestions: 2900,
  category: "professional",
  topics: [
  {
    id: "core-concepts",
    domain: "core-concepts",
    title: "Core Concepts",
    icon: "💡",
    color: "#7C3AED",
    questionTarget: 700,
    activityTypes: ["multiple_choice", "scenario_based"],
  },
  {
    id: "domain-1",
    domain: "domain-1",
    title: "Domain 1",
    icon: "📋",
    color: "#7C3AED",
    questionTarget: 600,
    activityTypes: ["multiple_choice", "scenario_based"],
  },
  {
    id: "domain-2",
    domain: "domain-2",
    title: "Domain 2",
    icon: "📊",
    color: "#059669",
    questionTarget: 600,
    activityTypes: ["multiple_choice", "scenario_based"],
  },
  {
    id: "domain-3",
    domain: "domain-3",
    title: "Domain 3",
    icon: "⚙️",
    color: "#D97706",
    questionTarget: 500,
    activityTypes: ["multiple_choice", "scenario_based"],
  },
  {
    id: "practice-labs",
    domain: "practice-labs",
    title: "Practice & Labs",
    icon: "🔬",
    color: "#DC2626",
    questionTarget: 500,
    activityTypes: ["multiple_choice", "simulation"],
  }
  ],
};
