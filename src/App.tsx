import { Routes, Route } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import Home from "./components/home";
import DocsLayout from "./components/docs/DocsLayout";
import { Callout, Step, CodeBlock } from "./components/docs/MDXComponents";

// Import MDX pages
import DocsIndex from "../docs/index.mdx";
import Installation from "../docs/installation.mdx";
import ProjectStructure from "../docs/project-structure.mdx";
import Configuration from "../docs/configuration.mdx";
import Plugins from "../docs/plugins.mdx";
import EnvVariables from "../docs/env-variables.mdx";
import Building from "../docs/building.mdx";
import Deployment from "../docs/deployment.mdx";
import Troubleshooting from "../docs/troubleshooting.mdx";

// MDX components available to all MDX files
const mdxComponents = {
  Callout,
  Step,
  pre: CodeBlock,
};

function App() {
  return (
    <MDXProvider components={mdxComponents}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/docs"
          element={
            <DocsLayout>
              <DocsIndex />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/installation"
          element={
            <DocsLayout>
              <Installation />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/project-structure"
          element={
            <DocsLayout>
              <ProjectStructure />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/configuration"
          element={
            <DocsLayout>
              <Configuration />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/plugins"
          element={
            <DocsLayout>
              <Plugins />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/env-variables"
          element={
            <DocsLayout>
              <EnvVariables />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/building"
          element={
            <DocsLayout>
              <Building />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/deployment"
          element={
            <DocsLayout>
              <Deployment />
            </DocsLayout>
          }
        />
        <Route
          path="/docs/troubleshooting"
          element={
            <DocsLayout>
              <Troubleshooting />
            </DocsLayout>
          }
        />
      </Routes>
    </MDXProvider>
  );
}

export default App;
