import { motion } from "framer-motion";
import { Server, Globe, Monitor, Folder, FileCode } from "lucide-react";
import SectionHeader from "./SectionHeader";

const fileTree = [
  { indent: 0, icon: "folder", name: "src/routes/", route: "" },
  { indent: 1, icon: "file", name: "page.tsx", route: "/" },
  { indent: 1, icon: "file", name: "layout.tsx", route: "root layout" },
  { indent: 1, icon: "folder", name: "about/", route: "" },
  { indent: 2, icon: "file", name: "page.tsx", route: "/about" },
  { indent: 1, icon: "folder", name: "blog/", route: "" },
  { indent: 2, icon: "file", name: "page.tsx", route: "/blog" },
  { indent: 2, icon: "folder", name: "[slug]/", route: "" },
  { indent: 3, icon: "file", name: "page.tsx", route: "/blog/:slug" },
  { indent: 1, icon: "folder", name: "dashboard/", route: "" },
  { indent: 2, icon: "file", name: "middleware.ts", route: "auth guard" },
  { indent: 2, icon: "file", name: "layout.tsx", route: "dashboard layout" },
  { indent: 2, icon: "file", name: "page.tsx", route: "/dashboard" },
  { indent: 1, icon: "folder", name: "api/", route: "" },
  { indent: 2, icon: "folder", name: "health/", route: "" },
  { indent: 3, icon: "file", name: "route.ts", route: "GET /api/health" },
];

const renderModes = [
  {
    icon: <Server className="w-5 h-5 text-amber-400" />,
    title: "SSR (default)",
    description: "Server-renders on every request. Full hydration on the client.",
  },
  {
    icon: <Globe className="w-5 h-5 text-amber-400" />,
    title: "SSG",
    description:
      "Export prerender config. Pre-renders at build time with known params.",
  },
  {
    icon: <Monitor className="w-5 h-5 text-amber-400" />,
    title: "SPA",
    description:
      'Set render mode to "spa". Client-only, zero server rendering.',
  },
];

export default function RoutingRenderingSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Routes are files. Rendering is a choice."
          gradientWord="choice"
          subtitle="File-based routing with three render modes and one simple rule."
        />

        <div className="flex flex-col md:flex-row gap-12">
          {/* File tree */}
          <motion.div
            className="md:w-1/2 bg-black/90 rounded-lg p-6 border border-gray-800 font-mono text-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {fileTree.map((item, i) => (
              <div key={i} className="flex items-center py-1" style={{ paddingLeft: `${item.indent * 20}px` }}>
                {item.icon === "folder" ? (
                  <Folder className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                ) : (
                  <FileCode className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                )}
                <span className={item.icon === "folder" ? "text-amber-300" : "text-gray-300"}>
                  {item.name}
                </span>
                {item.route && (
                  <>
                    <span className="text-gray-600 mx-2">→</span>
                    <span className="text-gray-500">{item.route}</span>
                  </>
                )}
              </div>
            ))}
          </motion.div>

          {/* Render modes */}
          <motion.div
            className="md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {renderModes.map((mode) => (
              <div
                key={mode.title}
                className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  {mode.icon}
                  <h3 className="text-lg font-bold text-white">{mode.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {mode.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.p
          className="text-sm text-gray-500 italic text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          SSR is the default. Override per-route with a single export.
        </motion.p>
      </div>
    </section>
  );
}
