export interface OnboardingData {
  lang: string;
  tier: string;
  firstName: string;
  lastName: string;
  bizName: string;
  bizType: string;
  teamSize: string;
  priorities: string[];
  emailProvider: string;
  emailConnected: boolean;
  emailAutonomy: string;
  emailSpam: string;
  emailDigest: string;
  socials: Record<string, boolean>;
  socialTone: string;
  postFreq: string;
  engagement: string;
  soulTone: string;
  emojiLevel: string;
  soulLang: string;
  commsChannels: string[];
  activeHours: string;
  approvalLevel: string;
  neverDo: string;
}

export const defaultData: OnboardingData = {
  lang: "en",
  tier: "daddy",
  firstName: "",
  lastName: "",
  bizName: "",
  bizType: "",
  teamSize: "",
  priorities: [],
  emailProvider: "",
  emailConnected: false,
  emailAutonomy: "draft",
  emailSpam: "archive",
  emailDigest: "morning",
  socials: {},
  socialTone: "balanced",
  postFreq: "daily",
  engagement: "moderate",
  soulTone: "balanced",
  emojiLevel: "some",
  soulLang: "en",
  commsChannels: ["push"],
  activeHours: "business",
  approvalLevel: "ask",
  neverDo: "",
};

export interface StepProps {
  data: OnboardingData;
  setData: (data: OnboardingData) => void;
  next: () => void;
}

export const t = (data: OnboardingData, en: string, es: string) =>
  data.lang === "es" ? es : en;
