export type ProjectSlug = "hikma" | "content-factory" | "msda" | "melrose-palace";
export type CaseSection = { title: string; text: string };
export type Project = {
  slug: ProjectSlug;
  index: string;
  title: string;
  category: string;
  description: string;
  summary: string;
  stack: string[];
  status: string;
  visibility: "Private source";
  role: string;
  evidenceDate: string;
  live: string | null;
  challenge: string;
  approach: string;
  architecture: string[];
  features: string[];
  decisions: CaseSection[];
  currentState: string;
  limitations: string[];
};

export const projects: Project[] = [
  {
    slug: "hikma", index: "01", title: "Hikma",
    category: "Learning product",
    description: "Making Quranic vocabulary more approachable, one word at a time.",
    summary: "A learning product that connects Quranic word forms, French meanings, contextual explanations and audio with a structured lesson and review experience.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    status: "Public site", visibility: "Private source",
    role: "Product development", evidenceDate: "2026-10-03", live: "https://hikma.top",
    challenge: "A vocabulary interface is only useful if the data and learning experience agree. Word forms, contextual meanings, audio and review progress need to stay connected without overwhelming the learner.",
    approach: "Separate the linguistic model from the exercise interface. Keep lesson orchestration in the player, persistence in server actions and review scheduling in a dedicated learning module.",
    architecture: ["Word & context data", "Lesson experience", "Saved progress", "Scheduled review"],
    features: ["Lesson exercises and contextual feedback", "Saved lesson sessions and resumption", "Audio references in the learning experience", "Leitner-based review scheduling", "Supabase session handling on the server", "Protected Content Studio video-render route"],
    decisions: [
      { title: "Let the data carry meaning", text: "Word forms and contextual explanations are kept distinct from the interface. The lesson player receives structured learning data rather than making up meanings in the browser." },
      { title: "Make interruptions recoverable", text: "The lesson interface saves session progress and pending answers through server actions. Resuming a lesson is part of the product flow, not an afterthought." },
      { title: "Keep rendering off the request path", text: "Content Studio supports rendering through a worker path for cloud environments, with a protected admin route. Long video work does not belong in an ordinary page request." },
    ],
    currentState: "The public landing page was reachable at audit time. Lesson, session, review and Content Studio implementations were examined in the source; authenticated production flows were not tested as part of this review.",
    limitations: ["No claims about users, learning outcomes or vocabulary coverage are made.", "The public-site check establishes availability, not end-to-end production validation."],
  },
  {
    slug: "content-factory", index: "02", title: "Content Factory",
    category: "AI & automation",
    description: "From a script to a rendered video. One connected production pipeline.",
    summary: "A content-production pipeline connecting n8n orchestration, a typed Fastify API, background jobs, text-to-speech and Remotion rendering.",
    stack: ["TypeScript", "Fastify", "n8n", "Remotion", "Convex"],
    status: "Implementation reviewed", visibility: "Private source",
    role: "Pipeline development", evidenceDate: "2026-10-03", live: null,
    challenge: "Submitting a render request is not the same as producing a video. A reliable pipeline has to connect validation, job execution, narration, rendering, storage and an inspectable result.",
    approach: "Use a typed job contract and explicit states. Let n8n prepare and submit work, a worker execute the pipeline and the storage layer expose the resulting artefact.",
    architecture: ["n8n orchestration", "Fastify · jobs", "TTS · Remotion", "Video artefact"],
    features: ["Script-or-idea input workflow exported for n8n", "Fastify API and background job worker", "Remotion-based video rendering", "Text-to-speech provider integration", "Local and S3-compatible / R2 storage implementations", "Polling and artefact verification in the workflow"],
    decisions: [
      { title: "A job must have an owner", text: "A worker claims and processes queued jobs. The API contract and the execution mechanism are separate, so acceptance of a request is not mistaken for completed work." },
      { title: "Make progress reflect real work", text: "Job progress is tied to pipeline stages rather than a decorative timer. Explicit states make failures and interruptions visible to the orchestrator." },
      { title: "Treat output as a contract", text: "The workflow retrieves and verifies the video artefact after completion. Storage is behind an interface with local and R2 implementations." },
    ],
    currentState: "API, worker, rendering, TTS and storage code, along with two n8n workflow exports, were examined. Deployment evidence exists in repository documents; this portfolio review did not reproduce those deployment runs.",
    limitations: ["No throughput, time-saved or production-volume claims are made.", "Piper engine and voice-model licences need separate consideration.", "Automatic social publishing is not claimed."],
  },
  {
    slug: "msda", index: "03", title: "MSDA Lead Engine",
    category: "Full-stack & automation",
    description: "Connecting property enquiries to structured, qualified leads.",
    summary: "A property-enquiry application that separates lead capture, validated persistence and external orchestration, with deterministic qualification logic.",
    stack: ["Next.js", "TypeScript", "Convex", "Zod"],
    status: "Implementation reviewed", visibility: "Private source",
    role: "Application development", evidenceDate: "2026-10-03", live: null,
    challenge: "An enquiry needs to become a useful, traceable lead without creating duplicate records or silently losing hand-offs to an automation service.",
    approach: "Keep capture in Next.js, storage in Convex and orchestration behind a signed n8n webhook. Use deterministic qualification and explicit action states instead of an opaque scoring model.",
    architecture: ["Validated enquiry", "Convex persistence", "Signed hand-off", "Action state"],
    features: ["Typed and validated lead intake", "Deterministic three-outcome qualification", "Lead persistence and deduplication", "HMAC-signed hand-off to a configured n8n webhook", "Reservation / completion / failure states for actions", "Attribution and WhatsApp-click tracking code"],
    decisions: [
      { title: "Keep qualification explainable", text: "Qualification follows declared form responses and a small, deterministic rule set. It is not an AI scoring model, and its outcome can be explained signal by signal." },
      { title: "Separate responsibilities", text: "The application captures, Convex persists and an external service orchestrates. A storage layer is not presented as a workflow engine." },
      { title: "Design for repeated requests", text: "Lead deduplication and action reservations address different problems: duplicate records and repeated side effects. Keeping those states distinct makes the contract clearer." },
    ],
    currentState: "Capture, qualification, persistence, signed dispatch and action-state implementations were examined. The external n8n workflow was not available in this repository and its live operation was not verified.",
    limitations: ["Telegram, calendar and email automation are not presented as verified features.", "No conversion, revenue or test-pass-count claims are made.", "The architecture includes an external hand-off, not proof of a running external workflow."],
  },
  {
    slug: "melrose-palace", index: "04", title: "Melrose Palace",
    category: "Client website", description: "A conversion-focused property website for a Senegalese land investment project.",
    summary: "A client-facing real-estate website presenting the Sébikhotane development, its 54 plots, location, financing options and contact journey.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"], status: "Public site", visibility: "Private source",
    role: "Client website development", evidenceDate: "2026-10-06", live: "https://melrose-palace-v2.vercel.app/",
    challenge: "A property offer needs to make a complex decision feel clear: explain the location, establish trust, show the project and give a prospective buyer a direct path to a conversation.",
    approach: "Structure the experience as a guided narrative: project overview, trust and documentation, location, financing simulator, progressive packages and direct contact.",
    architecture: ["Project narrative", "Plot visualisation", "Financing simulator", "Contact journey"],
    features: ["Sébikhotane project presentation", "54-plot aerial and boundary visualisation", "Location and proximity information", "Installment financing simulator", "Progressive land-to-construction packages", "Advisor contact and WhatsApp journey"],
    decisions: [
      { title: "Lead with clarity", text: "The page introduces the project, the offer and the key decision points before asking a visitor to make contact." },
      { title: "Make trust visible", text: "Ownership, documentation, boundaries and administrative support are presented as part of the buying experience rather than hidden in a footer." },
      { title: "Connect information to action", text: "Location, payment examples and package options lead naturally toward a conversation with an advisor." },
    ],
    currentState: "The public Melrose Palace V2 site was reviewed on 6 October 2026. The review covered its public narrative, project information, financing simulator, package presentation and contact journey; private CRM or operational workflows were not assessed.",
    limitations: ["No claim is made about sales, conversion rate or customer outcomes.", "The portfolio entry describes the public site experience and does not present private business processes as verified."],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
