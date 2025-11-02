import DocsLayout from "./DocsLayout";
import { Section, CodeBlock, InlineCode, FeatureCard } from "./DocsComponents";

export default function DocsPage() {
  return (
    <DocsLayout>
      {/* Introduction */}
      <Section id="introduction" title="Introduction">
        <p className="text-xl text-gray-300 leading-relaxed mb-6">
          Pyra.js is a blazing-fast, TypeScript-first build tool designed to ignite your frontend development workflow. 
          Built on modern web standards, Pyra delivers instant hot module replacement, optimized bundling, and zero-config setup.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Whether you're building a small prototype or a large-scale application, Pyra adapts to your needs with intelligent 
          defaults and powerful customization options. Experience development at the speed of thought.
        </p>
      </Section>

      {/* Getting Started */}
      <Section id="getting-started" title="Getting Started">
        <h3 className="text-2xl font-semibold text-white mb-4">Installation</h3>
        <p className="text-gray-400 mb-4">
          Install Pyra.js using your preferred package manager:
        </p>
        
        <CodeBlock
          title="npm"
          language="bash"
          code="npm install -g pyra"
        />
        
        <CodeBlock
          title="pnpm"
          language="bash"
          code="pnpm add -g pyra"
        />
        
        <CodeBlock
          title="yarn"
          language="bash"
          code="yarn global add pyra"
        />

        <h3 className="text-2xl font-semibold text-white mt-12 mb-4">Create Your First Project</h3>
        <p className="text-gray-400 mb-4">
          Scaffold a new project with a single command:
        </p>
        
        <CodeBlock
          title="Terminal"
          language="bash"
          code={`pyra create my-app
cd my-app
pyra dev`}
        />

        <h3 className="text-2xl font-semibold text-white mt-12 mb-4">Project Structure</h3>
        <p className="text-gray-400 mb-4">
          Pyra generates a clean, organized project structure:
        </p>
        
        <CodeBlock
          language="plaintext"
          code={`my-app/
├── src/
│   ├── main.ts          # Entry point
│   ├── App.tsx          # Root component
│   └── components/      # Your components
├── public/              # Static assets
├── pyra.config.ts       # Configuration
└── package.json`}
        />
      </Section>

      {/* Configuration */}
      <Section id="configuration" title="Configuration">
        <p className="text-gray-400 mb-6">
          Pyra works out of the box with zero configuration, but offers powerful customization through <InlineCode>pyra.config.ts</InlineCode>.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">Basic Configuration</h3>
        
        <CodeBlock
          title="pyra.config.ts"
          language="typescript"
          code={`import { defineConfig } from 'pyra';

export default defineConfig({
  // Entry point
  entry: './src/main.ts',
  
  // Output directory
  outDir: 'dist',
  
  // Development server
  server: {
    port: 3000,
    open: true,
    hmr: true
  },
  
  // Build options
  build: {
    minify: true,
    sourcemap: true,
    target: 'es2020'
  }
});`}
        />

        <h3 className="text-2xl font-semibold text-white mt-12 mb-4">Configuration Options</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-3 px-4 text-amber-400 font-semibold">Option</th>
                <th className="py-3 px-4 text-amber-400 font-semibold">Type</th>
                <th className="py-3 px-4 text-amber-400 font-semibold">Default</th>
                <th className="py-3 px-4 text-amber-400 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-400">
              <tr className="border-b border-gray-800/50">
                <td className="py-3 px-4"><InlineCode>entry</InlineCode></td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">'./src/main.ts'</td>
                <td className="py-3 px-4">Application entry point</td>
              </tr>
              <tr className="border-b border-gray-800/50">
                <td className="py-3 px-4"><InlineCode>outDir</InlineCode></td>
                <td className="py-3 px-4">string</td>
                <td className="py-3 px-4">'dist'</td>
                <td className="py-3 px-4">Build output directory</td>
              </tr>
              <tr className="border-b border-gray-800/50">
                <td className="py-3 px-4"><InlineCode>server.port</InlineCode></td>
                <td className="py-3 px-4">number</td>
                <td className="py-3 px-4">3000</td>
                <td className="py-3 px-4">Dev server port</td>
              </tr>
              <tr className="border-b border-gray-800/50">
                <td className="py-3 px-4"><InlineCode>build.minify</InlineCode></td>
                <td className="py-3 px-4">boolean</td>
                <td className="py-3 px-4">true</td>
                <td className="py-3 px-4">Enable code minification</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Plugins */}
      <Section id="plugins" title="Plugins">
        <p className="text-gray-400 mb-6">
          Extend Pyra's functionality with a powerful plugin system. Plugins can transform code, resolve imports, 
          and hook into the build pipeline at any stage.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">Using Plugins</h3>
        
        <CodeBlock
          title="pyra.config.ts"
          language="typescript"
          code={`import { defineConfig } from 'pyra';
import react from '@pyra/plugin-react';
import tailwind from '@pyra/plugin-tailwind';

export default defineConfig({
  plugins: [
    react(),
    tailwind({
      config: './tailwind.config.js'
    })
  ]
});`}
        />

        <h3 className="text-2xl font-semibold text-white mt-12 mb-4">Creating Custom Plugins</h3>
        
        <CodeBlock
          title="my-plugin.ts"
          language="typescript"
          code={`import { Plugin } from 'pyra';

export function myPlugin(): Plugin {
  return {
    name: 'my-plugin',
    
    // Transform hook
    transform(code, id) {
      if (id.endsWith('.custom')) {
        return {
          code: transformCode(code),
          map: null
        };
      }
    },
    
    // Resolve hook
    resolveId(source) {
      if (source === 'virtual:module') {
        return source;
      }
    },
    
    // Load hook
    load(id) {
      if (id === 'virtual:module') {
        return 'export default "virtual content"';
      }
    }
  };
}`}
        />

        <h3 className="text-2xl font-semibold text-white mt-12 mb-4">Plugin Hooks</h3>
        <div className="grid gap-4 mt-6">
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <h4 className="text-lg font-semibold text-violet-400 mb-2">transform</h4>
            <p className="text-gray-400 text-sm">Transform source code during the build process</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <h4 className="text-lg font-semibold text-violet-400 mb-2">resolveId</h4>
            <p className="text-gray-400 text-sm">Resolve module imports to file paths</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <h4 className="text-lg font-semibold text-violet-400 mb-2">load</h4>
            <p className="text-gray-400 text-sm">Load and return module content</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <h4 className="text-lg font-semibold text-violet-400 mb-2">buildStart</h4>
            <p className="text-gray-400 text-sm">Hook called when the build starts</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <h4 className="text-lg font-semibold text-violet-400 mb-2">buildEnd</h4>
            <p className="text-gray-400 text-sm">Hook called when the build completes</p>
          </div>
        </div>
      </Section>

      {/* CLI Reference */}
      <Section id="cli-reference" title="CLI Reference">
        <p className="text-gray-400 mb-6">
          Pyra provides a simple yet powerful command-line interface for all your development needs.
        </p>

        <div className="grid gap-6 mt-8">
          <FeatureCard
            title="pyra dev"
            description="Start the development server with hot module replacement"
            command="pyra dev --port 3000 --open"
          />
          
          <FeatureCard
            title="pyra build"
            description="Build your application for production with optimizations"
            command="pyra build --minify --sourcemap"
          />
          
          <FeatureCard
            title="pyra preview"
            description="Preview the production build locally"
            command="pyra preview --port 4173"
          />
          
          <FeatureCard
            title="pyra create"
            description="Scaffold a new project with templates"
            command="pyra create my-app --template react-ts"
          />
          
          <FeatureCard
            title="pyra optimize"
            description="Analyze and optimize your bundle size"
            command="pyra optimize --report"
          />
        </div>

        <h3 className="text-2xl font-semibold text-white mt-12 mb-4">Global Flags</h3>
        <CodeBlock
          language="bash"
          code={`--config <file>    # Specify config file
--mode <mode>      # Set mode (development/production)
--debug            # Enable debug logging
--silent           # Suppress all output
--help             # Show help information`}
        />
      </Section>

      {/* Build Process */}
      <Section id="build-process" title="Build Process">
        <p className="text-gray-400 mb-6">
          Pyra's build process is optimized for speed and efficiency, leveraging modern bundling techniques 
          and intelligent code splitting.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">Build Pipeline</h3>
        <div className="space-y-4 my-8">
          {[
            { step: "1", title: "Parse", desc: "Parse source files and build dependency graph" },
            { step: "2", title: "Transform", desc: "Apply plugins and transform code" },
            { step: "3", title: "Optimize", desc: "Tree-shake and optimize bundle" },
            { step: "4", title: "Bundle", desc: "Generate optimized output chunks" },
            { step: "5", title: "Emit", desc: "Write files to output directory" }
          ].map((item) => (
            <div key={item.step} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-violet-600 flex items-center justify-center font-bold">
                {item.step}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-white mt-12 mb-4">Code Splitting</h3>
        <CodeBlock
          title="pyra.config.ts"
          language="typescript"
          code={`export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'date-fns']
        }
      }
    }
  }
});`}
        />
      </Section>

      {/* API */}
      <Section id="api" title="API">
        <p className="text-gray-400 mb-6">
          Pyra exposes a programmatic API for advanced use cases and custom tooling.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">JavaScript API</h3>
        
        <CodeBlock
          title="build.js"
          language="typescript"
          code={`import { build, createServer } from 'pyra';

// Programmatic build
async function buildApp() {
  await build({
    entry: './src/main.ts',
    outDir: 'dist',
    minify: true
  });
}

// Create dev server
async function startDevServer() {
  const server = await createServer({
    server: { port: 3000 }
  });
  
  await server.listen();
  console.log('Server running at http://localhost:3000');
}

buildApp();`}
        />

        <h3 className="text-2xl font-semibold text-white mt-12 mb-4">Core APIs</h3>
        
        <div className="space-y-6 mt-6">
          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <h4 className="text-xl font-semibold text-amber-400 mb-3">build(options)</h4>
            <p className="text-gray-400 mb-4">Build your application programmatically</p>
            <CodeBlock
              language="typescript"
              code={`const result = await build({
  entry: './src/main.ts',
  outDir: 'dist',
  minify: true,
  sourcemap: true
});`}
            />
          </div>

          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <h4 className="text-xl font-semibold text-amber-400 mb-3">createServer(options)</h4>
            <p className="text-gray-400 mb-4">Create a development server instance</p>
            <CodeBlock
              language="typescript"
              code={`const server = await createServer({
  server: { port: 3000, hmr: true },
  plugins: [react()]
});

await server.listen();`}
            />
          </div>

          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <h4 className="text-xl font-semibold text-amber-400 mb-3">defineConfig(config)</h4>
            <p className="text-gray-400 mb-4">Define configuration with TypeScript intellisense</p>
            <CodeBlock
              language="typescript"
              code={`export default defineConfig({
  // Full type safety and autocomplete
  plugins: [],
  build: { minify: true }
});`}
            />
          </div>
        </div>
      </Section>

      {/* Footer CTA */}
      <div className="mt-24 p-12 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 text-center">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 bg-clip-text text-transparent">
          Ready to ignite your frontend?
        </h3>
        <p className="text-gray-400 mb-8 text-lg">
          Start building with Pyra.js today and experience the future of web development.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-lg border border-gray-700 text-white font-semibold hover:bg-gray-800/50 transition-colors">
            View Examples
          </button>
        </div>
      </div>
    </DocsLayout>
  );
}
