import { createRoot } from "react-dom/client";
import App from "@/App.jsx";
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import ErrorBoundary from "./components/ErrorBoundary";
import { Suspense } from "react";
import Loading from "@/components/Loading";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </PersistGate>
    </ReduxProvider>
  </ErrorBoundary>
);
