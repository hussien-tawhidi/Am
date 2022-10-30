import { Routes, Route } from "react-router-dom";
import OurStore from "./components/ourStore/OurStore";
import Hero from "./components/homePage/Hero";
import Header from "./components/homePage/header/Header";
import Footer from "./components/homePage/footer/Footer";
export default function MainRoutes() {
  return (
    <div className="routes">
      <Header />
      <main className="mainContant">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/store" element={<OurStore />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
