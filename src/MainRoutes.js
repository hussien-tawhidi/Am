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
import Airpods from "./components/AirPods/Airpods";
import Watch from "./components/watch/Watch";
import Accessories from "./components/accessories/Accessories";
import Support from "./components/support/Support";
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
          <Route path="/airpods" element={<Airpods/> } />
          <Route path="/watch" element={<Watch/> } />
          <Route path="/accessories" element={<Accessories/> } />
          <Route path="/support" element={<Support/> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}