# Pyra.js Documentation

Complete MDX documentation site for Pyra.js with Docusaurus-style structure.

## Structure

```
docs/
├── sidebar.json              # Sidebar navigation config
├── index.mdx                 # Documentation home page
├── components/               # Reusable MDX components
│   ├── Callout.tsx          # Callout boxes (tip, note, warn, danger)
│   ├── Step.tsx             # Numbered step component
│   ├── Badge.tsx            # Status badges (beta, mvp, new)
│   ├── GradientCode.tsx     # Code blocks with Pyra gradient glow
│   ├── Terminal.tsx         # Terminal command blocks
│   └── index.ts             # Component exports
├── styles/
│   └── docs-theme.css       # Pyra gradient theme and syntax highlighting
├── introduction/
│   ├── overview.mdx         # What is Pyra.js
│   └── philosophy.mdx       # Design philosophy (Ignite → Create → Flow)
├── getting-started/
│   ├── installation.mdx     # Installation guide
│   ├── quick-start.mdx      # Quick start tutorial
│   └── project-structure.mdx # Project file structure
├── configuration/
│   └── overview.mdx         # Configuration overview
├── plugins/
│   ├── overview.mdx         # Plugin system overview
│   └── plugin-api.mdx       # Plugin API reference
├── cli/
│   ├── dev.mdx              # pyra dev command
│   └── build.mdx            # pyra build command
├── guides/
│   └── environment-variables.mdx # Environment variables guide
└── api/
    └── config-types.mdx     # TypeScript config types
```

## Components

### Callout
```tsx
<Callout type="tip|note|warn|danger">
  Content here
</Callout>
```

### Step
```tsx
<Step number={1} title="Optional Title">
  Step content
</Step>
```

### Badge
```tsx
<Badge variant="beta|mvp|new|deprecated">Label</Badge>
```

### GradientCode
```tsx
<GradientCode language="typescript" title="filename.ts">
  {`code here`}
</GradientCode>
```

### Terminal
```tsx
<Terminal>npm install pyra</Terminal>
```

## Theme

The `docs-theme.css` file includes:
- Pyra gradient colors (amber → rose → violet)
- Syntax highlighting with themed colors
- Gradient utilities
- Scrollbar styling
- Table styling
- Active sidebar item styling

## Features

- ✅ Complete MDX documentation structure
- ✅ Sidebar navigation with categories
- ✅ Frontmatter on all pages (title, description, sidebar_label, slug)
- ✅ Reusable MDX components with Pyra gradient theme
- ✅ Code blocks with syntax highlighting
- ✅ Terminal command blocks
- ✅ Callouts with gradient accents
- ✅ Numbered steps
- ✅ Status badges
- ✅ Responsive design
- ✅ Version-ready URL structure (/docs/<section>/<page>)

## Content Coverage

- **Introduction**: Overview, philosophy
- **Getting Started**: Installation, quick start, project structure
- **Configuration**: Config overview with TypeScript types
- **Plugins**: Plugin system, API, hooks
- **CLI**: dev, build commands with examples
- **Guides**: Environment variables, best practices
- **API**: TypeScript type definitions

## Usage

Import components in MDX files:

```mdx
---
title: Page Title
description: Page description
sidebar_label: Sidebar Label
slug: /docs/section/page
---

import Callout from '../components/Callout';
import GradientCode from '../components/GradientCode';

# Page Title

<Callout type="tip">
  Helpful tip here
</Callout>

<GradientCode language="typescript">
  {`const example = "code";`}
</GradientCode>
```

## Styling

The Pyra gradient theme uses:
- **Amber** (#FFB347) - Keywords, primary accent
- **Rose** (#FF5C38) - Strings, secondary accent
- **Violet** (#9333EA) - Functions, tertiary accent
- **Cyan** (#06B6D4) - Imports, special elements

All components feature gradient glows, borders, and hover effects matching the Pyra brand.
