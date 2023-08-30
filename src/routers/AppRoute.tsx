import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../layouts/Auth/Auth";
import UserLayout from "../layouts/User/UserLayout";
import AdminLayout from "../layouts/Admin/AdminLayout"
import LoginPage from "./../layouts/Auth/Login/LoginPage";
import RegisterPage from "./../layouts/Auth/Register/RegisterPage";
import HomePage from "../layouts/User/pages/Home/HomePage";
import ProductDetailPage from "../layouts/User/pages/ProductDetail/ProductDetailPage";
import CartPage from "../layouts/User/pages/Cart/CartPage";
import DashBoardPage from "../layouts/Admin/page/DashBoard/DashBoardPage";
import ManageProductPage from "../layouts/Admin/page/ManageProduct/ManageProduct";
import NotFound from "../layouts/User/pages/NotFound";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      {/* Layout Login */}
      <Route path="/auth" element={<Auth />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      {/* Layout User */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
      {/* Layout Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashBoardPage />} />
        <Route path="manageProduct" element={<ManageProductPage />} />
      </Route>
      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;
