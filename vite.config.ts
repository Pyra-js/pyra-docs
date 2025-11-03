import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { 
      enforce: 'pre', 
      ...mdx({
        remarkPlugins: [remarkGfm, remarkFrontmatter],
      }) 
    },
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // @ts-ignore
    allowedHosts: process.env.TEMPO === 'true' ? true : undefined,
  },
});