import "./css/main.css";

import { createRoot } from "react-dom/client";

import App from "./components/App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App title="Counter App" />);
