import {
  Home,
  Zap,
  FolderTree,
  Settings,
  Puzzle,
  FileText,
  Rocket,
  Upload,
  HelpCircle,
  Keyboard,
  Folder,
  TypeIcon,
  Route
} from "lucide-react";

export const SIDEBAR_ITEMS = [
  {
    category: "Getting Started",
    items: [
      { path: "/docs", label: "Introduction", icon: Home },
      { path: "/docs/installation", label: "Installation", icon: Zap },
      {
        path: "/docs/project-structure",
        label: "Project Structure",
        icon: FolderTree,
      },
      {
        path: "/docs/cli",
        label: "Cli",
        icon: Keyboard,
      },
    ],
  },
  {
    category: "Configuration",
    items: [
      { path: "/docs/configuration", label: "Configuration", icon: Settings },
      { path: "/docs/plugins", label: "Plugins", icon: Puzzle },
      {
        path: "/docs/env-variables",
        label: "Environment Variables",
        icon: FileText,
      },
      {
        path: "/docs/monorepo",
        label: "Monorepos & Workspaces",
        icon: Folder,
      },
      {
        path: "/docs/ts",
        label: "TypeScript",
        icon: TypeIcon,
      },
    ],
  },
  {
    category: "Guides",
    items: [
      {
        path: "/docs/building",
        label: "Building for Production",
        icon: Rocket,
      },
      { path: "/docs/deployment", label: "Deployment", icon: Upload },
      {
        path: "/docs/troubleshooting",
        label: "Troubleshooting",
        icon: HelpCircle,
      },
    ],
  },
];
