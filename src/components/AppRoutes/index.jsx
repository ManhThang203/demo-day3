import { BrowserRouter, Route, Routes } from "react-router";
import Counter from "@/page/Counter";
import Product from "@/page/Product";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="counter" element={<Counter />}></Route>
        <Route path="product" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
