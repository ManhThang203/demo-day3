import Counter from "@/page/Counter";
import { HashRouter, Route, Routes } from "react-router";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Counter />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
