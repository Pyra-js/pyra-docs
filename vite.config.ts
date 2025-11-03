import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode, {
        theme: 'one-dark-pro',
        keepBackground: false,
        defaultLang: 'txt',
      }]],
      providerImportSource: "@mdx-js/react",
    }),
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