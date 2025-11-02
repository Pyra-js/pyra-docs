import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Search, Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";

interface DocsLayoutProps {
  children: React.ReactNode;
}

const navSections = [
  { id: "introduction", label: "Introduction" },
  { id: "getting-started", label: "Getting Started" },
  { id: "configuration", label: "Configuration" },
  { id: "plugins", label: "Plugins" },
  { id: "cli-reference", label: "CLI Reference" },
  { id: "build-process", label: "Build Process" },
  { id: "api", label: "API" },
];

export default function DocsLayout({ children }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = navSections.map(s => document.getElementById(s.id));
      const currentSection = sections.findIndex(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      
      if (currentSection !== -1) {
        setActiveSection(navSections[currentSection].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0E0E12] text-white">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600"
        style={{ scaleX: scrollProgress / 100, transformOrigin: "left" }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0E0E12]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50" />
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFB347" />
                      <stop offset="50%" stopColor="#FF5C38" />
                      <stop offset="100%" stopColor="#9333EA" />
                    </linearGradient>
                  </defs>
                  <path d="M 50 10 L 85 75 L 50 65 L 15 75 Z" fill="url(#logoGradient)" />
                </svg>
              </div>
              <span className="text-2xl font-bold italic lowercase bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 bg-clip-text text-transparent">
                pyra
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-gray-800/50"
            >
              <Search size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-gray-800/50"
            >
              <Github size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-gray-800/50"
            >
              <Sun size={20} />
            </Button>
          </div>
        </div>
      </header>

      <div className="pt-20 flex">
        {/* Sidebar */}
        <motion.aside
          className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-64 bg-[#0E0E12] border-r border-gray-800 overflow-y-auto z-30 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } transition-transform duration-300`}
          initial={false}
        >
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-rose-500 to-violet-600 opacity-50" />
          
          <nav className="p-6 space-y-2">
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 relative group ${
                  activeSection === section.id
                    ? "text-white bg-gradient-to-r from-violet-600/20 to-amber-400/20"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-rose-500 to-violet-600 rounded-r"
                  />
                )}
                <span className="relative z-10">{section.label}</span>
              </button>
            ))}
          </nav>
        </motion.aside>

        {/* Main content */}
        <main className="flex-1 px-6 lg:px-12 py-12 max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  );
}
