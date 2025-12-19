import { BrowserRouter, Route, Routes } from "react-router";
import Loading from "@/components/Loading";
import Counter from "@/page/Counter";

import AssetsImg from "@/page/AssetsImg";
import AssetsIcon from "@/page/AssetsIcon";
import AddressProvince from "@/page/Address/AddressProvince";
import AddressProvince2 from "@/page/Address/AddressProvince2";
import Product from "@/page/Product";
import AuthProvider from "@/components/AuthProvider";
import Header from "@/components/Header";
import Register from "@/page/auth/Register";
import Login from "@/page/auth/Login";
import PrivateRoute from "@/components/PrivateRoute";
import Profile from "@/page/Profile";
import { useEffect } from "react";
import { httpClient } from "@/utils/http";

function AppRouter() {
  useEffect(() => {
    httpClient.get("/auth/devices");
  }, []);
  return (
    <BrowserRouter>
      <Loading />
      <AuthProvider />
      <Header />
      <Routes>
        <Route path="counter" element={<Counter />}></Route>
        <Route path="assetsImg" element={<AssetsImg />}></Route>
        <Route path="assetsIcon" element={<AssetsIcon />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="province" element={<AddressProvince />}></Route>
        <Route path="province2" element={<AddressProvince2 />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>

        {/* Private Router */}
        <Route element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
