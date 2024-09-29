import "./css/globals.css";

import { createRoot } from "react-dom/client";

import App from "./components/App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <div>
    <h1>Test</h1>
    <App title="Some Title" />
  </div>
);
