import { Link, useLocation } from 'react-router-dom';
import { Home, Zap, FolderTree, Settings, Puzzle, FileText, Rocket, Upload, HelpCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface DocsLayoutProps {
  children: React.ReactNode;
}

const sidebarItems = [
  {
    category: 'Getting Started',
    items: [
      { path: '/docs', label: 'Introduction', icon: Home },
      { path: '/docs/installation', label: 'Installation', icon: Zap },
      { path: '/docs/project-structure', label: 'Project Structure', icon: FolderTree },
    ],
  },
  {
    category: 'Configuration',
    items: [
      { path: '/docs/configuration', label: 'Configuration', icon: Settings },
      { path: '/docs/plugins', label: 'Plugins', icon: Puzzle },
      { path: '/docs/env-variables', label: 'Environment Variables', icon: FileText },
    ],
  },
  {
    category: 'Guides',
    items: [
      { path: '/docs/building', label: 'Building for Production', icon: Rocket },
      { path: '/docs/deployment', label: 'Deployment', icon: Upload },
      { path: '/docs/troubleshooting', label: 'Troubleshooting', icon: HelpCircle },
    ],
  },
];

export default function DocsLayout({ children }: DocsLayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0E0E12]">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 via-rose-500 to-violet-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 bg-clip-text text-transparent">
              Pyra.js
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 hidden sm:block">v1.0.0-beta</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-400 hover:text-gray-200 p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 flex gap-8">
        {/* Mobile Sidebar Overlay */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/80 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] lg:h-auto
          w-64 flex-shrink-0 bg-[#0E0E12] lg:bg-transparent
          z-40 lg:z-0 transition-transform duration-300
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto lg:overflow-visible
          border-r border-gray-800 lg:border-0
        `}>
          <nav className="sticky top-24 space-y-6 p-4 lg:p-0">
            {sidebarItems.map((section) => (
              <div key={section.category}>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-4">
                  {section.category}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-amber-500/10 to-violet-500/10 text-amber-400 border border-amber-500/20'
                            : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl min-w-0">
          <article className="prose-docs">
            {children}
          </article>
        </main>
      </div>
    </div>
  );
}