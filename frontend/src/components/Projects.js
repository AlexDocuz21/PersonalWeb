import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

const FEATURED = {
  title: "Serafima.ro",
  description:
    "A custom-built website developed from scratch, focused on clean UI, performance, and modern design principles. Every layer — layout, motion, structure — was crafted intentionally rather than assembled from a template.",
  tags: ["Custom Build", "Performance", "Clean UI", "From Scratch"],
  href: "https://serafima.ro",
  cta: "Live Preview",
  accent: "cyan",
  note: "01",
};

const PROJECTS = [
  {
    title: "Strategy Lab",
    description:
      "A personal sandbox for analyzing trading strategies — backtests, performance metrics, and clean dashboards driven by data, not vibes.",
    tags: ["Data", "Dashboards", "Analytics"],
    href: "#",
    cta: "Read more",
    accent: "violet",
    note: "02",
    available: false,
  },
  {
    title: "Workflow Optimizer",
    description:
      "An internal tool exploring how small UX shifts and automation can compress repetitive workflows into something genuinely fast.",
    tags: ["Tooling", "UX", "Automation"],
    href: "#",
    cta: "Read more",
    accent: "emerald",
    note: "03",
    available: false,
  },
  {
    title: "Performance Notes",
    description:
      "A growing collection of notes and experiments on web performance — measurable wins, not folklore. Bench-tested ideas only.",
    tags: ["Performance", "Web Vitals", "Notes"],
    href: "#",
    cta: "Coming soon",
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
      description="Quality over quantity. The featured project is real and live; the rest are personal builds I’m actively shaping."
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
