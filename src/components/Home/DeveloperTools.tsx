import React from "react";
import { motion, Variants } from "framer-motion";
import { Terminal, ExternalLink } from "lucide-react";

/* ===================== Types ===================== */

interface NpmPackage {
  name: string;
  description: string;
  link: string;
}

/* ===================== Data ===================== */

const npmPackages: NpmPackage[] = [
  {
    name: "PromptForge — AI Prompt Optimizer",
    description:
      "AI Prompt Optimizer for crafting high-performance prompts for large language models.",
    link: "https://github.com/zakari-ya/PromptForge",
  }
  // {
  //   name: "react-tool-kit-generic",
  //   description:
  //     "Lightweight and efficient component toolkit for building production-grade React apps.",
  //   link: "https://www.npmjs.com/package/react-tool-kit-generic",
  // },
];

/* ===================== Animations ===================== */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

/* ===================== Component ===================== */

const DeveloperTools: React.FC = () => {
  return (
    <section id="developer-tools" className="scroll-mt-14 py-8 lg:py-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="mb-10 lg:mb-15 px-4 sm:px-6">
          <h2 className="text-[clamp(3.2rem,7vw,5.5rem)] font-black leading-[1.1] tracking-tight">
            Developer
            <br />
            <span className="font-light text-muted-foreground">
              Tools & Open Source
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Open-source tools focused on developer experience,
            productivity, and real-world usage.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div variants={stagger} className="px-2 sm:px-6">
          <motion.div
            variants={fadeUp}
            className="bg-foreground rounded-2xl text-background shadow-xl"
          >
            <div
              className="
                grid grid-cols-1 gap-10 px-4 py-8 sm:px-6 sm:py-12
                lg:grid-cols-[1fr_1fr]
              "
            >
              {/* Left */}
              <motion.div variants={fadeUp}>
                <h3 className="text-[clamp(1.6rem,4vw,2.2rem)] font-semibold tracking-tight">
                  Open Source Projects
                </h3>

                <p className="mt-4 leading-relaxed max-w-md text-background/90">
                  Production-ready browser extensions and developer tools built with JavaScript, CSS, 
                  and Web APIs. Designed to be practical, universal, and immediately useful.
                </p>
              </motion.div>

              {/* Right */}
              <motion.div variants={stagger} className="space-y-7">
                {npmPackages.map((pkg) => (
                  <motion.div
                    key={pkg.name}
                    variants={fadeUp}
                    className="
                      flex flex-col md:flex-row
                      md:items-start md:justify-between
                      lg:flex-col
                      gap-5
                    "
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <Terminal size={14} />
                        <span className="font-mono text-sm break-all">
                          {pkg.name}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-background/90">
                        {pkg.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <a
                      href={pkg.link}
                      target="_blank"
                      className="
                        inline-flex items-center gap-2
                        rounded-full
                        border border-border
                        bg-muted/50
                        px-4 py-2
                        text-[11px] font-medium tracking-wide
                        text-background
                        transition-all duration-300
                        hover:bg-foreground
                        hover:text-background
                        hover:shadow-sm
                        hover:scale-[1.03]
                        self-start
                      "
                      aria-label="View on GitHub"
                    >
                      View on GitHub
                      <ExternalLink size={14} />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DeveloperTools;
