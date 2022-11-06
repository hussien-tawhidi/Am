import { Routes, Route } from "react-router-dom";
import OurStore from "./components/ourStore/OurStore";
import Hero from "./components/homePage/Hero";
import Header from "./components/homePage/header/Header";
import Footer from "./components/homePage/footer/Footer";
import Mac from "./components/mac/Mac";
import IPhone from "./components/IPhone/IPhone";
import SamsungPhones from "./components/samsungPhones/SamsungPhones";
import Microsoft from "./components/microsoft/Microsoft";
import Huawei from "./components/huawei/Huawei";
export default function MainRoutes() {
  return (
    <div className="routes">
      <Header />
      <main className="mainContant">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/store" element={<OurStore />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<IPhone />} />
          <Route path="/samsung" element={<SamsungPhones />} />
          <Route path="/microsoft" element={<Microsoft />} />
          <Route path="/huawei" element={<Huawei/> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
