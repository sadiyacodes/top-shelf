import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import About from "./pages/About";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/privateRoutes/PrivateRoute"
import DashBoard from "./pages/users/DashBoard";
import AdminDashboard from "./pages/adminPage/AdminDashboard";
import PrivateAdminRoute from "./components/privateRoutes/PrivateAdminRoute";
import CreateCategory from "./pages/adminPage/CreateCategory";
import CreateProduct from "./pages/adminPage/CreateProduct";
import ProductPage from "./pages/adminPage/ProductPage";
import UpdateProduct from "./pages/adminPage/UpdateProduct";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/users/CartPage";
import UpdateProfile from "./pages/users/UpdateProfile";
function App() {
  
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />   
                 {/* route for authorized users :- */}
        <Route path="/dashboard" element={<PrivateRoute />}>
               <Route path="user" element={<DashBoard />} />
               <Route path="user/edit-profile" element={<UpdateProfile />} />
        </Route>
               {/* route for authorized ADMINS :- */}
        <Route path ="/dashboard" element={<PrivateAdminRoute />}>
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="admin/create-category" element={<CreateCategory />} />
              <Route path="admin/create-product" element={<CreateProduct />} />
             <Route path="admin/product/:slug" element={<UpdateProduct />} />
             <Route path="admin/products" element={<ProductPage />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/login" element={<Login />} />

       
      </Routes>
      </BrowserRouter>
  )
}

export default App
