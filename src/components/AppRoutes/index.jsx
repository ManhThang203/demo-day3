import { BrowserRouter, Route, Routes } from "react-router";
import Loading from "@/components/Loading";
import Counter from "@/page/Counter";
import Product from "@/page/Product";
import AssetsImg from "@/page/AssetsImg";
import AssetsIcon from "@/page/AssetsIcon";
import AddressProvince from "@/page/Address/AddressProvince";
import AddressProvince2 from "@/page/Address/AddressProvince2";
import Header from "@/components/Header";
import AuthProvider from "@/components/AuthProvider";
import Register from "@/page/auth/Register";
import Login from "@/page/auth/Login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Loading />
      <Header />
      <AuthProvider />
      <Routes>
        <Route path="counter" element={<Counter />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="assetsImg" element={<AssetsImg />}></Route>
        <Route path="assetsIcon" element={<AssetsIcon />}></Route>
        <Route path="address/provinces" element={<AddressProvince />}></Route>
        <Route path="address/provinces2" element={<AddressProvince2 />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="Login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
