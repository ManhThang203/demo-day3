import { createRoot } from "react-dom/client";
import App from "@/App.jsx";
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";

createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </ReduxProvider>
);
