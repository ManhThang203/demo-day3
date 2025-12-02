import Counter from "@/page/Counter";
import { BrowserRouter, Route, Routes } from "react-router";
import Loading from "../Loading";
import Product from "@/page/Product";
import AssetsIcon from "@/page/AssetsIcon";
import AssetsImg from "@/page/AssetsImg";

function AppRouter() {
  return (
    <BrowserRouter>
      <Loading />
      <Routes>
        <Route path="counter" element={<Counter />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="assetsIcon" element={<AssetsIcon />}></Route>
        <Route path="assetsImg" element={<AssetsImg />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
