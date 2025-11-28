import { HashRouter, Route, Routes } from "react-router";
import Counter from "@/page/Counter";
import Product from "@/page/Product";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
