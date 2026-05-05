{
  "meta": {
    "app_type": "single-page portfolio",
    "design_personality": [
      "dark-elegant",
      "slightly-futuristic",
      "glassmorphism-layered-depth",
      "minimal-but-impactful",
      "performance-minded motion"
    ],
    "north_star": "Feels like an Awwwards-grade engineer/designer portfolio: intentional asymmetry, premium motion, subtle glow, no template vibes."
  },

  "brand_attributes": {
    "keywords": ["confident", "precise", "premium", "calm", "high-performance"],
    "do": [
      "Use layered depth (glass panels over a textured/mesh background)",
      "Use strong hierarchy: big headline, restrained subcopy, crisp section titles",
      "Use micro-interactions everywhere (hover, focus, scroll reveal)",
      "Keep gradients subtle and mostly decorative (<= 20% viewport)"
    ],
    "dont": [
      "No generic centered hero + 3 cards template",
      "No loud neon everywhere; glow must be controlled",
      "No heavy scroll-jank effects; prefer transform/opacity",
      "No transition: all"
    ]
  },

  "design_tokens": {
    "css_custom_properties": {
      "notes": "Define these in /app/frontend/src/index.css under :root and .dark. Use HSL values for shadcn compatibility. Keep dark mode as default by applying className=\"dark\" on <html> or <body>.",
      "palette": {
        "--background": "220 22% 6%",
        "--foreground": "210 20% 96%",

        "--card": "220 22% 8%",
        "--card-foreground": "210 20% 96%",

        "--popover": "220 22% 8%",
        "--popover-foreground": "210 20% 96%",

        "--primary": "210 20% 96%",
        "--primary-foreground": "220 22% 8%",

        "--secondary": "220 18% 12%",
        "--secondary-foreground": "210 20% 96%",

        "--muted": "220 16% 14%",
        "--muted-foreground": "215 14% 72%",

        "--accent": "186 92% 42%",
        "--accent-foreground": "220 22% 8%",

        "--destructive": "0 72% 52%",
        "--destructive-foreground": "210 20% 96%",

        "--border": "220 16% 18%",
        "--input": "220 16% 18%",
        "--ring": "186 92% 42%",

        "--radius": "0.9rem",

        "--chart-1": "186 92% 42%",
        "--chart-2": "160 70% 42%",
        "--chart-3": "205 85% 55%",
        "--chart-4": "40 90% 60%",
        "--chart-5": "0 72% 52%"
      },
      "extended_tokens": {
        "--bg-0": "#070A0F",
        "--bg-1": "#0A0F18",
        "--bg-2": "#0E1624",

        "--glass-fill": "rgba(255,255,255,0.06)",
        "--glass-fill-strong": "rgba(255,255,255,0.09)",
        "--glass-border": "rgba(255,255,255,0.10)",
        "--glass-border-soft": "rgba(255,255,255,0.07)",

        "--shadow-elev-1": "0 10px 30px rgba(0,0,0,0.35)",
        "--shadow-elev-2": "0 18px 60px rgba(0,0,0,0.45)",
        "--shadow-glow-accent": "0 0 0 1px rgba(34,211,238,0.18), 0 0 40px rgba(34,211,238,0.12)",
        "--shadow-glow-accent-strong": "0 0 0 1px rgba(34,211,238,0.22), 0 0 70px rgba(34,211,238,0.18)",

        "--noise-opacity": "0.06",
        "--grid-opacity": "0.10",

        "--focus-ring": "0 0 0 3px rgba(34,211,238,0.25)",

        "--ease-out-premium": "cubic-bezier(0.16, 1, 0.3, 1)",
        "--ease-in-premium": "cubic-bezier(0.7, 0, 0.84, 0)",
        "--ease-in-out-premium": "cubic-bezier(0.65, 0, 0.35, 1)",

        "--dur-1": "140ms",
        "--dur-2": "220ms",
        "--dur-3": "420ms",
        "--dur-4": "700ms"
      },
      "allowed_gradients": {
        "rule": "Gradients are decorative only, max 20% viewport, never on text-heavy surfaces.",
        "hero_backdrop": "radial-gradient(900px 500px at 20% 10%, rgba(34,211,238,0.14), transparent 60%), radial-gradient(700px 420px at 80% 30%, rgba(59,130,246,0.10), transparent 55%), radial-gradient(600px 380px at 55% 85%, rgba(16,185,129,0.08), transparent 60%)",
        "accent_orb": "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.35), rgba(34,211,238,0.0) 60%)"
      }
    },

    "typography": {
      "font_pairing": {
        "display": {
          "name": "Space Grotesk",
          "usage": "H1, section titles, project titles",
          "weights": [500, 600, 700]
        },
        "body": {
          "name": "Figtree",
          "usage": "body copy, nav, labels, form",
          "weights": [400, 500, 600]
        },
        "mono": {
          "name": "IBM Plex Mono",
          "usage": "small metadata, tags, code-like labels",
          "weights": [400, 500]
        }
      },
      "google_fonts_import": "@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap');",
      "scale": {
        "h1": "text-4xl sm:text-5xl lg:text-6xl",
        "h2": "text-base md:text-lg",
        "section_title": "text-xl sm:text-2xl",
        "body": "text-sm sm:text-base",
        "small": "text-xs"
      },
      "tracking": {
        "display": "tracking-[-0.02em]",
        "section_title": "tracking-[-0.01em]",
        "mono": "tracking-[0.08em] uppercase"
      }
    },

    "spacing_and_layout": {
      "grid": {
        "container": "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        "section_padding": "py-16 sm:py-20 lg:py-28",
        "vertical_rhythm": "Use 2–3x more spacing than default: gaps 16–28, card padding 20–28.",
        "layout_principle": "Intentional asymmetry: left-aligned hero copy with right-side floating preview card; projects use bento-like grid with one featured spanning 2 columns on desktop."
      },
      "radii": {
        "panel": "rounded-2xl",
        "button": "rounded-xl",
        "pill": "rounded-full"
      }
    },

    "shadows_and_depth": {
      "glass_panel": "bg-[var(--glass-fill)] backdrop-blur-xl border border-white/10 shadow-[var(--shadow-elev-1)]",
      "glass_panel_hover": "hover:shadow-[var(--shadow-elev-2)] hover:border-white/15",
      "accent_glow_hover": "hover:shadow-[var(--shadow-glow-accent)]",
      "focus": "focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
    }
  },

  "component_path": {
    "shadcn_primary": {
      "button": "/app/frontend/src/components/ui/button.jsx",
      "card": "/app/frontend/src/components/ui/card.jsx",
      "badge": "/app/frontend/src/components/ui/badge.jsx",
      "input": "/app/frontend/src/components/ui/input.jsx",
      "textarea": "/app/frontend/src/components/ui/textarea.jsx",
      "separator": "/app/frontend/src/components/ui/separator.jsx",
      "tooltip": "/app/frontend/src/components/ui/tooltip.jsx",
      "sheet": "/app/frontend/src/components/ui/sheet.jsx",
      "navigation_menu": "/app/frontend/src/components/ui/navigation-menu.jsx",
      "progress": "/app/frontend/src/components/ui/progress.jsx",
      "sonner": "/app/frontend/src/components/ui/sonner.jsx"
    },
    "recommended_new_components": {
      "BackgroundFX": "Create /app/frontend/src/components/BackgroundFX.js (canvas grid + subtle particles; respects prefers-reduced-motion)",
      "MagneticButton": "Create /app/frontend/src/components/MagneticButton.js (small cursor-follow translate; disabled on touch/reduced motion)",
      "ProjectCard": "Create /app/frontend/src/components/ProjectCard.js",
      "SkillPills": "Create /app/frontend/src/components/SkillPills.js",
      "Timeline": "Create /app/frontend/src/components/Timeline.js",
      "Section": "Create /app/frontend/src/components/Section.js (consistent padding + anchor offset + reveal wrapper)"
    }
  },

  "section_specs": {
    "navbar": {
      "layout": "Sticky top, translucent glass bar with subtle border; left brand mark (monogram), right anchor links; on mobile use Sheet drawer.",
      "classes": [
        "sticky top-3 z-50",
        "mx-auto max-w-6xl px-4",
        "backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl",
        "shadow-[var(--shadow-elev-1)]"
      ],
      "micro_interactions": [
        "Active section indicator: small 6px dot that slides under current link (Framer Motion layoutId)",
        "Hover: link underline grows from left (scaleX) + slight glow",
        "Scroll: navbar compresses (py-3 -> py-2) after 40px"
      ],
      "data_testids": {
        "nav": "site-navbar",
        "brand": "navbar-brand",
        "menu_button": "navbar-mobile-menu-button",
        "link_prefix": "navbar-link-"
      }
    },

    "hero": {
      "structure": "Two-column on lg: left copy, right floating ‘featured project’ glass card + stats chips. On mobile: stacked with card below.",
      "background": "Use BackgroundFX + 2–3 radial gradients (decorative only). Add subtle grid overlay + noise.",
      "headline": "I build fast, clean, and visually refined web experiences.",
      "supporting_line": "Short, calm line about performance + design craft.",
      "cta": {
        "primary": "View Work",
        "secondary": "Contact",
        "button_style": {
          "primary": "Glass + accent rim: bg-white/10 border-white/15 hover:border-cyan-300/30",
          "secondary": "Ghost: bg-transparent border-white/10 hover:bg-white/5"
        }
      },
      "wow_details": [
        "Cursor spotlight: a radial gradient that follows pointer (CSS vars updated on mousemove) — disabled on reduced motion",
        "Floating card: slow y oscillation (Framer Motion) + subtle tilt on hover",
        "Headline reveal: per-line stagger with blur->sharp transition"
      ],
      "data_testids": {
        "section": "section-hero",
        "cta_view_work": "hero-view-work-button",
        "cta_contact": "hero-contact-button"
      }
    },

    "about": {
      "layout": "Asymmetric: left small label + right glass panel with the verbatim paragraph. Add a small ‘principles’ row (3 chips).",
      "content": "Use provided About Me content verbatim.",
      "micro_interactions": [
        "Panel enters with fade+slide (y: 18) and slight blur",
        "Chips hover: subtle glow + translateY(-2)"
      ],
      "data_testids": {
        "section": "section-about"
      }
    },

    "projects": {
      "layout": "Bento grid: featured card spans 2 columns on desktop; remaining 3 are smaller with distinct accent tints.",
      "featured": {
        "title": "Serafima.ro",
        "description": "A custom-built website developed from scratch, focused on clean UI, performance, and modern design principles.",
        "cta": "Live Preview",
        "hover": "Scale 1.01, border brightens, accent glow increases, background sheen sweeps across (pseudo-element translateX)."
      },
      "placeholders": "3 placeholder projects with consistent structure: title, 1-line outcome, tags, CTA.",
      "data_testids": {
        "section": "section-projects",
        "featured_card": "projects-featured-card",
        "featured_live": "projects-featured-live-preview-button",
        "card_prefix": "project-card-"
      }
    },

    "skills": {
      "layout": "Three columns on lg (Frontend/Backend/Tools). Each column is a glass card with animated pills and optional Progress bars.",
      "visual": "Use lucide-react icons per category; pills use IBM Plex Mono uppercase micro-labels.",
      "animation": "On scroll into view: stagger pills (opacity + y). On hover: pill glow + slight scale.",
      "data_testids": {
        "section": "section-skills"
      }
    },

    "journey": {
      "layout": "Minimal timeline: left rail line with nodes; right content blocks. Keep copy short.",
      "copy": "Continuously building, learning, and refining my craft through real-world projects.",
      "micro_interactions": [
        "Nodes pulse once on enter (scale 0.9 -> 1)",
        "Hover on item: border brightens + subtle glow"
      ],
      "data_testids": {
        "section": "section-journey"
      }
    },

    "contact": {
      "layout": "Two-column on lg: left text + social links, right glass form card.",
      "form": {
        "fields": ["name", "email", "message"],
        "submit": "Send",
        "behavior": "Submit silently to backend (MongoDB). Show Sonner toast success/failure."
      },
      "social": [
        { "label": "GitHub", "url": "https://example.com", "icon": "Github" },
        { "label": "LinkedIn", "url": "https://example.com", "icon": "Linkedin" },
        { "label": "Email", "url": "mailto:hello@example.com", "icon": "Mail" }
      ],
      "data_testids": {
        "section": "section-contact",
        "form": "contact-form",
        "name": "contact-form-name-input",
        "email": "contact-form-email-input",
        "message": "contact-form-message-textarea",
        "submit": "contact-form-submit-button",
        "status": "contact-form-status-text"
      }
    },

    "footer": {
      "layout": "Minimal: small mono line + subtle separators. No heavy gradients.",
      "data_testids": {
        "footer": "site-footer"
      }
    }
  },

  "motion_language": {
    "principles": [
      "Use transform/opacity only for performance",
      "No linear easing; use premium cubic-beziers",
      "Stagger reveals to create ‘crafted’ pacing",
      "Respect prefers-reduced-motion: disable parallax, cursor spotlight, floating oscillations"
    ],
    "framer_motion": {
      "recommended": true,
      "variants": {
        "reveal": {
          "hidden": "{ opacity: 0, y: 18, filter: 'blur(6px)' }",
          "show": "{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        },
        "stagger_container": {
          "hidden": "{ opacity: 1 }",
          "show": "{ opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } }"
        }
      },
      "durations": {
        "fast": "0.22",
        "base": "0.42",
        "slow": "0.70"
      },
      "easing": {
        "out": "[0.16, 1, 0.3, 1]",
        "inOut": "[0.65, 0, 0.35, 1]"
      },
      "hover": {
        "card": "whileHover={{ y: -4, scale: 1.01 }}",
        "button": "whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}"
      },
      "scroll_reveal": "Use IntersectionObserver or Framer Motion useInView with once:true and margin:'-10% 0px -10% 0px'."
    },
    "parallax": {
      "usage": "Very subtle: max 12–18px translate across scroll range. Only on decorative layers.",
      "disable_conditions": ["prefers-reduced-motion", "coarse pointer (touch)"]
    }
  },

  "wow_details": {
    "non_template_signals": [
      "Asymmetric hero composition with floating featured card",
      "Active nav indicator with shared layout animation",
      "Sheen sweep on project hover (pseudo-element)",
      "Cursor spotlight + magnetic buttons (desktop only)",
      "Noise + grid overlay for texture (very subtle)"
    ],
    "texture_recipes": {
      "noise_overlay_css": ".noise::before { content:''; position:absolute; inset:0; pointer-events:none; background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"160\" height=\"160\" filter=\"url(%23n)\" opacity=\"0.35\"/></svg>'); opacity: var(--noise-opacity); mix-blend-mode: overlay; }",
      "grid_overlay_css": ".gridlines::after { content:''; position:absolute; inset:-2px; pointer-events:none; background-image: linear-gradient(to right, rgba(255,255,255,var(--grid-opacity)) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,var(--grid-opacity)) 1px, transparent 1px); background-size: 48px 48px; mask-image: radial-gradient(circle at 30% 20%, black 0%, transparent 60%); opacity: 0.35; }"
    }
  },

  "image_urls": {
    "hero_background_options": [
      {
        "category": "hero-bg",
        "description": "Abstract dark teal mesh (use as optional low-opacity background layer behind gradients; keep subtle)",
        "url": "https://images.unsplash.com/photo-1708305729900-906f34a7d49d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWFsJTIwZ3JhZGllbnQlMjBtZXNoJTIwYmFja2dyb3VuZHxlbnwwfHx8dGVhbHwxNzc3OTY1MzM2fDA&ixlib=rb-4.1.0&q=85"
      },
      {
        "category": "hero-bg",
        "description": "Dynamic abstract teal lines (good for subtle masked overlay in hero only)",
        "url": "https://images.pexels.com/photos/14297430/pexels-photo-14297430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
  },

  "libraries": {
    "required": [
      {
        "name": "framer-motion",
        "why": "Premium reveal, hover, shared layout animations",
        "install": "npm i framer-motion",
        "usage_notes": "Use motion components in .js files; keep animations transform/opacity; gate advanced effects behind prefers-reduced-motion."
      }
    ],
    "optional": [
      {
        "name": "lenis",
        "why": "Smooth scrolling (use carefully; ensure accessibility)",
        "install": "npm i @studio-freight/lenis",
        "usage_notes": "Disable when prefers-reduced-motion is enabled. Keep it subtle; avoid scroll hijacking on mobile if it feels heavy."
      }
    ]
  },

  "instructions_to_main_agent": {
    "global_setup": [
      "Set dark mode as default by adding class 'dark' to <html> or <body> in index.html or root layout.",
      "Replace default App.css centered header styles; do not center the entire app container.",
      "Add Google Fonts import to index.css and set font-family via Tailwind base styles (body uses Figtree; headings use Space Grotesk).",
      "Implement BackgroundFX as a lightweight canvas or div-based effect; must respect prefers-reduced-motion.",
      "Every interactive element must include data-testid (buttons, links, inputs, nav items, project CTAs)."
    ],
    "tailwind_class_patterns": {
      "glass_panel": "relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[var(--shadow-elev-1)]",
      "glass_panel_hover": "transition-colors duration-200 hover:border-white/15",
      "interactive": "transition-colors duration-200",
      "no_transition_all": "Never use transition-all; specify transition-colors/opacity/shadow only."
    },
    "accessibility": [
      "Ensure focus-visible rings are obvious on dark backgrounds (use --focus-ring).",
      "Add skip-to-content link (sr-only focus:not-sr-only).",
      "Use prefers-reduced-motion to disable parallax/cursor spotlight/oscillation.",
      "Maintain WCAG AA contrast for body text on glass surfaces (increase glass opacity behind long paragraphs)."
    ]
  },

  "appendix_general_ui_ux_design_guidelines": "<General UI UX Design Guidelines>\n    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.\n</General UI UX Design Guidelines>"
}
