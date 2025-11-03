import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MDXProvider } from '@mdx-js/react';
import Badge from '../docs/components/Badge';
import GradientCode from '../docs/components/GradientCode';
import Step from '../docs/components/Step';
import Terminal from '../docs/components/Terminal';
import Callout from '../docs/components/Callout';

const basename = import.meta.env.BASE_URL;

const mdxComponents = {
  Badge,
  GradientCode,
  Step,
  Terminal,
  Callout,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <MDXProvider components={mdxComponents}>
        <App />
      </MDXProvider>
    </BrowserRouter>
  </React.StrictMode>,
);