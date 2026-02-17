import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import TerminalBlock from "./TerminalBlock";

interface PrincipleCardProps {
  title: string;
  text: string;
  codeLabel: string;
  code: React.ReactNode;
  delay: number;
}

function PrincipleCard({ title, text, codeLabel, code, delay }: PrincipleCardProps) {
  return (
    <motion.div
      className="p-8 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-[60%]">
          <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{text}</p>
        </div>
        <div className="md:w-[40%]">
          <TerminalBlock label={codeLabel}>{code}</TerminalBlock>
        </div>
      </div>
    </motion.div>
  );
}

const principles = [
  {
    title: "App-first, not content-first",
    text: "Pyra treats every page as a server-rendered React component, not a markdown file with sprinkled interactivity. Your data loading, middleware, and rendering all live in the same request cycle. Build dashboards and tools, not just blogs.",
    codeLabel: "src/routes/dashboard/page.tsx",
    code: (
      <pre className="text-sm whitespace-pre">
        <span className="text-violet-400">export async function</span>{" "}
        <span className="text-amber-300">load</span>
        <span className="text-gray-400">(ctx) {"{"}</span>
        {"\n"}
        {"  "}
        <span className="text-violet-400">const</span> user ={" "}
        <span className="text-violet-400">await</span>{" "}
        <span className="text-amber-300">getSession</span>(ctx);{"\n"}
        {"  "}
        <span className="text-violet-400">return</span> {"{"} user {"}"};{"\n"}
        <span className="text-gray-400">{"}"}</span>
        {"\n\n"}
        <span className="text-violet-400">export default function</span>{" "}
        <span className="text-amber-300">Dashboard</span>
        <span className="text-gray-400">{"({ user }) {"}</span>
        {"\n"}
        {"  "}
        <span className="text-violet-400">return</span>{" "}
        <span className="text-rose-400">{"<h1>"}</span>Welcome, {"{"}user.name
        {"}"}
        <span className="text-rose-400">{"</h1>"}</span>;{"\n"}
        <span className="text-gray-400">{"}"}</span>
      </pre>
    ),
  },
  {
    title: "Zero wrapper syntax",
    text: 'A page.tsx in Pyra IS your React component. No "use client" directives. No framework-specific annotations. Name your file page.tsx, optionally export load() for data, and write standard React.',
    codeLabel: "page.tsx",
    code: (
      <pre className="text-sm whitespace-pre">
        <span className="text-gray-500">
          {"// No directives. No wrappers. Just React."}
        </span>
        {"\n"}
        <span className="text-violet-400">export default function</span>{" "}
        <span className="text-amber-300">Settings</span>
        <span className="text-gray-400">() {"{"}</span>
        {"\n"}
        {"  "}
        <span className="text-violet-400">const</span> [theme, setTheme] ={" "}
        <span className="text-amber-300">useState</span>(
        <span className="text-green-400">"dark"</span>);{"\n"}
        {"  "}
        <span className="text-violet-400">return</span> ({"\n"}
        {"    "}
        <span className="text-rose-400">{"<select"}</span>{" "}
        <span className="text-amber-300">onChange</span>
        {"={e => setTheme(e.target.value)}"}
        <span className="text-rose-400">{">"}</span>
        {"\n"}
        {"      "}
        <span className="text-rose-400">{"<option>"}</span>dark
        <span className="text-rose-400">{"</option>"}</span>
        {"\n"}
        {"      "}
        <span className="text-rose-400">{"<option>"}</span>light
        <span className="text-rose-400">{"</option>"}</span>
        {"\n"}
        {"    "}
        <span className="text-rose-400">{"</select>"}</span>
        {"\n"}
        {"  "});{"\n"}
        <span className="text-gray-400">{"}"}</span>
      </pre>
    ),
  },
  {
    title: "Radical transparency",
    text: "Every dev request writes a timing trace to your terminal. Production responses carry Server-Timing headers. You never wonder why a page was slow, you see it.",
    codeLabel: "dev server",
    code: (
      <pre className="text-sm whitespace-pre">
        <span className="text-green-400">GET</span>{" "}
        <span className="text-white">/dashboard/settings</span>{" "}
        <span className="text-amber-300">200</span>{" "}
        <span className="text-gray-400">56ms</span>
        {"\n"}
        {"  "}
        <span className="text-gray-500">|--</span> route-match{"     "}
        <span className="text-gray-400">0.5ms</span>
        {"\n"}
        {"  "}
        <span className="text-gray-500">|--</span> middleware{"      "}
        <span className="text-gray-400">2.0ms</span>
        {"\n"}
        {"  "}
        <span className="text-gray-500">|--</span> load{"           "}
        <span className="text-amber-400">43.0ms</span>{" "}
        <span className="text-amber-400">⚠</span>
        {"\n"}
        {"  "}
        <span className="text-gray-500">|--</span> render{"         "}
        <span className="text-gray-400">11.0ms</span>
        {"\n"}
        {"  "}
        <span className="text-gray-500">+--</span> inject-assets{"  "}
        <span className="text-gray-400">0.2ms</span>
      </pre>
    ),
  },
];

export default function PrinciplesSection() {
  return (
    <section
      id="principles"
      className="relative py-24 px-6 bg-gradient-to-b from-transparent to-black/30"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title='Three principles.'
          gradientWord="principles"
          subtitle="The design decisions that shape everything."
        />
        <div className="space-y-8">
          {principles.map((p, index) => (
            <PrincipleCard
              key={p.title}
              title={p.title}
              text={p.text}
              codeLabel={p.codeLabel}
              code={p.code}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
