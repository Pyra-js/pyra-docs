import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import DocsPage from "./components/docs/DocsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/docs/*" element={<DocsPage />} />
    </Routes>
  );
}

export default App;