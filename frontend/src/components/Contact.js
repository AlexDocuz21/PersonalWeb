import { useState } from "react";
import axios from "axios";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Loader2, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import Section from "@/components/Section";
import { fadeUp, staggerContainer, easeOutPremium } from "@/lib/motion";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "";
const API = `${BACKEND_URL}/api`;

const SOCIALS = [
  { label: "GitHub", icon: Github, href: "https://github.com/", testId: "social-github" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/", testId: "social-linkedin" },
  { label: "Email", icon: Mail, href: "mailto:hello@example.com", testId: "social-email" },
];

export const Contact = () => {
  const reduced = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [statusMsg, setStatusMsg] = useState("");

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setStatusMsg("Please fill in name, email and message.");
      toast.error("Please fill in name, email and message.");
      return;
    }

    try {
      setStatus("loading");
      setStatusMsg("");
      const res = await axios.post(`${API}/contact`, form, {
        headers: { "Content-Type": "application/json" },
      });
      if (res.data && res.data.success) {
        setStatus("success");
        setStatusMsg("Message sent. I’ll get back to you soon.");
        toast.success("Message sent — I’ll be in touch.");
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        throw new Error("Unexpected response");
      }
    } catch (err) {
      const detail = err?.response?.data?.detail;
      const msg = typeof detail === "string" ? detail : "Could not send message. Please try again.";
      setStatus("error");
      setStatusMsg(msg);
      toast.error(msg);
    }
  };

  return (
    <Section
      id="contact"
      testId="section-contact"
      eyebrow="05 — CONTACT"
      title="Have an idea or an opportunity? Let’s talk."
      description="I’m open to roles, collaborations, and interesting builds. The fastest way to reach me is right here."
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: text + socials */}
        <motion.div
          initial={reduced ? false : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={staggerContainer(0.08, 0.05)}
          className="lg:col-span-5"
        >
          <motion.p variants={fadeUp} className="text-[15px] text-white/70 leading-relaxed max-w-md">
            Send a message and tell me what you’re building, hiring for, or
            curious about. I read everything that lands here.
          </motion.p>

          <motion.ul variants={staggerContainer(0.06, 0.05)} className="mt-8 flex flex-col gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.li key={s.label} variants={fadeUp}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    data-testid={s.testId}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur px-4 py-3 hover:border-cyan-300/25 hover:bg-white/[0.06] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] text-cyan-200">
                        <Icon size={15} />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-[13.5px] text-white">{s.label}</span>
                        <span className="font-mono-tag text-[10.5px] text-white/45">CONNECT →</span>
                      </span>
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-white/45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/80"
                    />
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 22, filter: "blur(8px)" }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: easeOutPremium }}
          className="lg:col-span-7 relative"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[28px] opacity-60 blur-2xl"
            style={{
              background:
                "radial-gradient(280px 220px at 80% 10%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(220px 180px at 10% 90%, rgba(125,107,255,0.12), transparent 60%)",
            }}
          />
          <form
            onSubmit={onSubmit}
            className="glass glass-strong p-6 sm:p-8 lg:p-9"
            data-testid="contact-form"
            noValidate
          >
            {/* Honeypot field */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={onChange}
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <FieldWrap label="Your name" htmlFor="contact-name">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange}
                  data-testid="contact-form-name-input"
                  placeholder="Jane Doe"
                  className="w-full bg-transparent text-white placeholder:text-white/30 text-[14.5px] outline-none"
                />
              </FieldWrap>
              <FieldWrap label="Email" htmlFor="contact-email">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  data-testid="contact-form-email-input"
                  placeholder="jane@company.com"
                  className="w-full bg-transparent text-white placeholder:text-white/30 text-[14.5px] outline-none"
                />
              </FieldWrap>
            </div>

            <div className="mt-4">
              <FieldWrap label="Message" htmlFor="contact-message" multiline>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  value={form.message}
                  onChange={onChange}
                  data-testid="contact-form-message-textarea"
                  rows={5}
                  placeholder="Tell me what you’re building, hiring for, or curious about…"
                  className="w-full bg-transparent text-white placeholder:text-white/30 text-[14.5px] outline-none resize-none leading-relaxed"
                />
              </FieldWrap>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p
                data-testid="contact-form-status-text"
                className={`text-[12.5px] ${
                  status === "error" ? "text-rose-300" : status === "success" ? "text-emerald-300" : "text-white/45"
                }`}
              >
                {status === "idle" && "Your message will be delivered straight to my inbox queue."}
                {status === "loading" && "Sending…"}
                {(status === "success" || status === "error") && statusMsg}
              </p>
              <button
                type="submit"
                disabled={status === "loading"}
                data-testid="contact-form-submit-button"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-5 py-2.5 text-[13.5px] font-medium text-cyan-50 hover:border-cyan-300/45 hover:bg-cyan-300/15 disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus-ring"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    <Send size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    Send message
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

const FieldWrap = ({ label, htmlFor, children, multiline = false }) => (
  <label
    htmlFor={htmlFor}
    className={`group flex flex-col gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur px-4 ${
      multiline ? "py-3" : "py-2.5"
    } transition-colors duration-200 focus-within:border-cyan-300/40 focus-within:bg-white/[0.05] hover:border-white/20`}
  >
    <span className="font-mono-tag text-[10px] text-white/45 group-focus-within:text-cyan-200/80">
      {label}
    </span>
    {children}
  </label>
);

export default Contact;
