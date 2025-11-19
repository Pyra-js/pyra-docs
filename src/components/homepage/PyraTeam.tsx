import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Globe } from "lucide-react";

export default function CreatorSection() {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/Simpleboi",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      url: "https://twitter.com/yourusername",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nathaniel-paz-182470386/?trk=opento_sprofile_topcard",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Website",
      url: "https://natejsx.dev/",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 via-rose-500 to-violet-600 flex items-center justify-center text-white text-2xl font-bold">
              N
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Created by Nathaniel Paz
              </h3>
              <p className="text-gray-400">
                Full Stack Developer & Open Source Enthusiast
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-amber-400 mb-3">
              Why I Built Pyra.js
            </h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              I built Pyra because I wanted a tool that truly felt like mine,
              fast, and easy to understand. What started as a small experiment
              to explore how build systems work under the hood quickly turned
              into something more. The deeper I went, the more I realized Pyra
              filled a real gap: a tool that brings together speed, clarity, and
              control without unnecessary complexity.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My goal was simple, to create the fastest, most intuitive frontend
              build possible. Something that disappears into the background and
              lets developers focus on what really matters, creating amazing
              experiences. <strong>Pyra.js</strong> is my way of making web
              development faster, simpler, and genuinely more enjoyable for
              everyone.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-amber-500/50 hover:bg-gray-800 transition-all text-gray-300 hover:text-white"
              >
                {link.icon}
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
