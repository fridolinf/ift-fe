import SplashScreen from "components/splashscreen";
import Auth from "pages/auth";
import DetailProduct from "pages/detailProduct";
import Home from "pages/home";
import Promotions from "pages/promotions";
import Register from "pages/register";
import { Route, Routes } from "react-router-dom";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail/:id" element={<DetailProduct />} />
      <Route path="/promotions" element={<Promotions />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default MainRoute;
