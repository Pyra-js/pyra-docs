// Import MDX pages
import Installation from "../../docs/installation.mdx";
import ProjectStructure from "../../docs/project-structure.mdx";
import Configuration from "../../docs/configuration.mdx";
import Plugins from "../../docs/plugins.mdx";
import EnvVariables from "../../docs/env-variables.mdx";
import Building from "../../docs/building.mdx";
import Deployment from "../../docs/deployment.mdx";
import Troubleshooting from "../../docs/troubleshooting.mdx";
import Cli from "../../docs/cli.mdx";
import Monoerepo from "../../docs/monorepo.mdx";
import DocsLayout from "../components/docs/DocsLayout";
import DocsIndex from "../../docs/introduction.mdx";
import TypeScript from "../../docs/typescript.mdx";
import FileBasedRouting from "../../docs/file-based-routing.mdx";
import Middleware from "../../docs/middleware.mdx";
import RequestTracing from "../../docs/request-tracing.mdx";
import SSR from "../../docs/SSR.mdx";
import Adapters from "../../docs/adapters.mdx";
import SampleTodo from "../../docs/sample-todo.mdx";
import ImageOptimization from "../../docs/Image-Optimization.mdx";
import RequestContext from "../../docs/request-context.mdx";
import Cookies from "../../docs/cookies.mdx";
import Dashboard from "../../docs/dashboard.mdx";
import Cors from "../../docs/cors.mdx";
import ApiRoutes from "../../docs/api-routes.mdx";
import { Route, Routes } from "react-router";
import Home from "@/components/home";

function DocRoutes() {
  return (
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
      <Route
        path="/docs/cli"
        element={
          <DocsLayout>
            <Cli />
          </DocsLayout>
        }
      />
      <Route
        path="/docs/monorepo"
        element={
          <DocsLayout>
            <Monoerepo />
          </DocsLayout>
        }
      />
      <Route
        path="/docs/ts"
        element={
          <DocsLayout>
            <TypeScript />
          </DocsLayout>
        }
      />
      <Route
        path="/docs/file-based-routing"
        element={
          <DocsLayout>
            <FileBasedRouting />
          </DocsLayout>
        }
      />
      <Route
        path="/docs/middleware"
        element={
          <DocsLayout>
            <Middleware />
          </DocsLayout>
        }
      />
      <Route
        path="/docs/request-tracing"
        element={
          <DocsLayout>
            <RequestTracing />
          </DocsLayout>
        }
      />
      <Route
        path="/docs/ssr"
        element={
          <DocsLayout>
            <SSR />
          </DocsLayout>
        }
      />
      <Route
        path="/docs/adapters"
        element={
          <DocsLayout>
            <Adapters />
          </DocsLayout>
        }
      />
      <Route
        path="/docs/sample-todo"
        element={
          <DocsLayout>
            <SampleTodo />
          </DocsLayout>
        }
      />
      <Route
        path="/docs/image-optimization"
        element={
          <DocsLayout>
            <ImageOptimization />
          </DocsLayout>
        }
      />
      <Route
        path="/docs/request-context"
        element={
          <DocsLayout>
            <RequestContext />
          </DocsLayout>
        }
      />
      <Route
        path="/docs/cookies"
        element={
          <DocsLayout>
            <Cookies />
          </DocsLayout>
        }
      />
      <Route
        path="/docs/dashboard"
        element={
          <DocsLayout>
            <Dashboard />
          </DocsLayout>
        }
      />
      <Route
        path="/docs/cors"
        element={
          <DocsLayout>
            <Cors />
          </DocsLayout>
        }
      />
    </Routes>
  );
};

export default DocRoutes;