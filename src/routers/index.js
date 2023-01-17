import SplashScreen from "components/splashscreen";
import DetailProduct from "pages/detailProduct";
import Home from "pages/home";
import { Route, Routes } from "react-router-dom";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail/:id" element={<DetailProduct />} />
    </Routes>
  );
}

export default MainRoute;
