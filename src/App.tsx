import { Routes, Route } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import Home from "./components/home";
import DocsLayout from "./components/docs/DocsLayout";
import DocsIndex from "../../docs/introduction.mdx";
import DocRoutes from "./routes/route";
import { Callout, Step, CodeBlock } from "./components/docs/MDXComponents";

// MDX components available to all MDX files
const mdxComponents = {
  Callout,
  Step,
  pre: CodeBlock,
};

function App() {
  return (
    <MDXProvider components={mdxComponents}>
      <DocRoutes />
    </MDXProvider>
  );
}

export default App;
