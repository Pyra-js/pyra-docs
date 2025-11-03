import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import '../../../docs/styles/docs-theme.css';
import { Badge, GradientCode, Step, Terminal, Callout } from '../../../docs/components/DocsComponents';

// Import all MDX files
const mdxModules = import.meta.glob('../../../docs/**/*.mdx', { eager: false });

// Import sidebar config
import sidebarConfig from '../../../docs/sidebar.json';

interface SidebarItem {
  label: string;
  path?: string;
  items?: SidebarItem[];
}

const mdxComponents = {
  Badge,
  GradientCode,
  Step,
  Terminal,
  Callout,
};

export default function DocsPage() {
  const location = useLocation();
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMDXContent();
  }, [location.pathname]);

  async function loadMDXContent() {
    setLoading(true);
    
    // Default to overview if on /docs
    let mdxPath = location.pathname === '/docs' 
      ? '../../../docs/introduction/overview.mdx'
      : `../../../docs${location.pathname.replace('/docs/', '')}.mdx`;

    // Try to find the MDX file
    const matchingPath = Object.keys(mdxModules).find(path => 
      path.includes(mdxPath.replace('../../../docs/', ''))
    );

    if (matchingPath) {
      try {
        const module = await mdxModules[matchingPath]() as any;
        setContent(module.default);
      } catch (error) {
        console.error('Error loading MDX:', error);
        setContent(null);
      }
    } else {
      setContent(null);
    }
    
    setLoading(false);
  }

  const MDXContent = content;

  return (
    <div className="docs-container min-h-screen">
      {/* Header */}
      <header className="docs-header h-16 flex items-center px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-400 via-rose-500 to-violet-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="text-xl font-bold pyra-gradient-text">Pyra.js</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <span className="text-sm text-gray-400">v1.0.0-beta</span>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="docs-sidebar w-64 flex-shrink-0">
          <nav className="p-4">
            {sidebarConfig.sections.map((section: any) => (
              <div key={section.title}>
                <div className="sidebar-category">{section.title}</div>
                {section.items.map((item: SidebarItem) => (
                  <SidebarLink key={item.path} item={item} currentPath={location.pathname} />
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 docs-content">
          {loading ? (
            <div className="text-gray-400">Loading...</div>
          ) : MDXContent ? (
            <MDXProvider components={mdxComponents}>
              <div className="prose prose-invert max-w-none">
                <MDXContent />
              </div>
            </MDXProvider>
          ) : (
            <div>
              <h1>Page Not Found</h1>
              <p className="text-gray-400">The documentation page you're looking for doesn't exist.</p>
              <Link to="/docs" className="text-amber-400 hover:text-amber-300">
                Return to documentation home
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function SidebarLink({ item, currentPath }: { item: SidebarItem; currentPath: string }) {
  if (item.items) {
    return (
      <div>
        <div className="sidebar-item font-semibold">{item.label}</div>
        {item.items.map((subItem) => (
          <SidebarLink key={subItem.path} item={subItem} currentPath={currentPath} />
        ))}
      </div>
    );
  }

  const isActive = currentPath === item.path || 
    (currentPath === '/docs' && item.path === '/docs/introduction/overview');

  return (
    <Link
      to={item.path || '#'}
      className={`sidebar-item block ${isActive ? 'active' : ''}`}
    >
      {item.label}
    </Link>
  );
}