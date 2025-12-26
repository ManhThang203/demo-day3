// Đây là import động
import { BrowserRouter, Route, Routes } from "react-router";

import { lazy, useEffect } from "react";
// Đây là import bất đồng bộ
const Counter = lazy(() => import("@/page/Counter"));

// Page
const AssetsImg = lazy(() => import("@/page/AssetsImg"));
const AssetsIcon = lazy(() => import("@/page/AssetsIcon"));
const AddressProvince = lazy(() => import("@/page/Address/AddressProvince"));
const AddressProvince2 = lazy(() => import("@/page/Address/AddressProvince2"));
const Product = lazy(() => import("@/page/Product"));
const Register = lazy(() => import("@/page/auth/Register"));
const Login = lazy(() => import("@/page/auth/Login"));
const Profile = lazy(() => import("@/page/Profile"));

// Components
import Header from "@/components/Header";
import AuthProvider from "@/components/AuthProvider";
import PrivateRoute from "@/components/PrivateRoute";
import Loading from "@/components/Loading";
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
        <Route path="assetsImg" element={<AssetsImg />}></Route>
        <Route path="assetsIcon" element={<AssetsIcon />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="province" element={<AddressProvince />}></Route>
        <Route path="province2" element={<AddressProvince2 />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>

        {/* Private Router */}
        <Route element={<PrivateRoute />}>
          <Route path="counter" element={<Counter />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
