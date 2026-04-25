import { EXAM_CONFIG } from "@/lib/act/config";

export interface CrossSellApp {
  slug: string;
  name: string;
  reason: string;
  url?: string;
}

const AWS_CROSS_SELL_APPS: CrossSellApp[] = [
  { slug: "aws-cloud-practitioner", name: "AWS Cloud Practitioner", reason: "Start with the core AWS foundations and pricing basics." },
  { slug: "aws-developer-associate", name: "AWS Developer Associate", reason: "Go deeper on serverless apps, SDKs, and developer workflows." },
  { slug: "aws-devops", name: "AWS DevOps Engineer Professional", reason: "Practice CI/CD, observability, and resilient delivery patterns." },
  { slug: "aws-dva", name: "AWS DVA", reason: "Review the condensed developer-associate track in a focused format." },
  { slug: "aws-ml", name: "AWS Machine Learning Specialty", reason: "Add MLOps, SageMaker, and AI deployment scenarios." },
  { slug: "aws-saa", name: "AWS Solutions Architect Associate", reason: "Strengthen architecture design, security, and cost trade-offs." },
  { slug: "aws-sap", name: "AWS Solutions Architect Professional", reason: "Tackle advanced multi-account and enterprise architecture cases." },
  { slug: "aws-soa", name: "AWS SysOps Administrator Associate", reason: "Sharpen operations, monitoring, and incident-response skills." },
  { slug: "aws-solutions-architect-associate", name: "AWS Solutions Architect Associate", reason: "Cover the full associate architecture blueprint with targeted drills." },
];

export function getCrossSellApps(_category?: string): CrossSellApp[] {
  return AWS_CROSS_SELL_APPS.filter((app) => app.slug !== EXAM_CONFIG.slug).slice(0, 4);
}
