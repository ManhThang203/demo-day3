import { createRoot } from "react-dom/client";
import App from "@/App.jsx";
import { Provider as RudeuxProvider } from "react-redux";
import store from "./store/store";

createRoot(document.getElementById("root")).render(
  <RudeuxProvider store={store}>
    <App />
  </RudeuxProvider>
);
