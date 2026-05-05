import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

const SERAFIMA_IMAGES = [
  {
    src: "https://customer-assets.emergentagent.com/job_intent-craft-1/artifacts/9wh368me_image.png",
    alt: "Serafima.ro homepage — Editura Serafima with featured book and product collections.",
    label: "Home · Collections",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_intent-craft-1/artifacts/zl6pwasa_image.png",
    alt: "Serafima.ro product detail page for Culegere pentru Admitere la Facultatea de Psihologie.",
    label: "Product · Detail",
  },
];

const FEATURED = {
  title: "Serafima.ro",
  description:
    "A custom-built website developed from scratch, focused on clean UI, performance, and modern design principles. Every layer — layout, hierarchy, structure — was crafted intentionally rather than assembled from a template.",
  tags: ["Custom Build", "Clean UI", "Performance", "From Scratch"],
  href: "https://serafima.ro",
  cta: "Live Preview",
  accent: "cyan",
  note: "01",
  images: SERAFIMA_IMAGES,
};

const PROJECTS = [
  {
    title: "Session Mean Reversion · Quant",
    description:
      "Python research project exploring a session-based mean-reversion strategy. Backtests, signal logic, and performance metrics — built around data, not vibes.",
    tags: ["Python", "Quant", "Backtesting", "Strategy"],
    href: "https://github.com/AlexDocuz21/SessionMeanReversionStrategyQuant",
    cta: "View on GitHub",
    accent: "violet",
    note: "02",
    available: true,
  },
  {
    title: "UI/UX Design — Figma vs Canva",
    description:
      "Master's dissertation project comparing UI and UX workflows between Figma and Canva. A practical, structured study of how each tool shapes design decisions.",
    tags: ["UI/UX", "Figma", "Canva", "Research"],
    href: "https://github.com/AlexDocuz21/UI-UX-DESIGN-FIGMA-CANVA",
    cta: "View on GitHub",
    accent: "emerald",
    note: "03",
    available: true,
  },
  {
    title: "More — coming soon",
    description:
      "Personal builds in progress: performance experiments, internal tools, and small product ideas. New work is added as it ships.",
    tags: ["In progress", "Performance", "Tooling"],
    href: "#",
    cta: "Stay tuned",
    accent: "amber",
    note: "04",
    available: false,
  },
];

export const Projects = () => {
  return (
    <Section
      id="projects"
      testId="section-projects"
      eyebrow="02 — SELECTED WORK"
      title="A few things I’ve built or am building."
      description="Quality over quantity. The featured project is real and live; the rest are personal builds and research I’m actively shaping."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-[1fr]">
        <ProjectCard project={FEATURED} featured index={0} />
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i + 1} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
