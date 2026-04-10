// AWS Developer Associate UI Translations

export const TRANSLATIONS = {
  en: {
    hero_title: "Ace AWS Developer Associate with confidence",
    hero_subtitle: "Practice questions · AI tutor · Score prediction",
    start_practice: "Start free practice",
    view_plans: "View plans",
    loading: "Loading...",
    error: "Something went wrong",
    back_home: "Back to Home",
    daily_limit: "Daily limit reached",
    upgrade_premium: "Upgrade to Premium",
    disclaimer: "This app is a study aid based on publicly available syllabus and exam patterns. Not affiliated with any official examination authority.",
  },

} as const;

export type TranslationKey = keyof typeof TRANSLATIONS.en;
export type Locale = keyof typeof TRANSLATIONS;
