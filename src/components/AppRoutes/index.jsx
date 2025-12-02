import Counter from "@/page/Counter";
import Product from "@/page/Product";
import { BrowserRouter, Route, Routes } from "react-router";
import Loading from "../Loading";
import AssetsImg from "@/page/AssetsImg";
import AssetsIcon from "@/page/AssetsIcon";

function AppRouter() {
  return (
    <BrowserRouter>
      <Loading />
      <Routes>
        <Route path="counter" element={<Counter />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="assetsImg" element={<AssetsImg />}></Route>
        <Route path="assetsIcon" element={<AssetsIcon />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
