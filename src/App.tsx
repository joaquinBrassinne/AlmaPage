import CarouselCard from "./components/CarouselCard/CarouselCard";
import NavBar from "./components/NavBar/NavBar";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Servicios from "./components/Servicios/Servicios";

import "./index.css";
import { bannerImg } from "./utils/const/bannerImg";

function App() {
  return (
    <>
      <NavBar />
      <div className="mainContainer">
        <CarouselCard imgList={bannerImg} range={3000} />
        <QuienesSomos />
        <Servicios />
      </div>
    </>
  );
}

export default App;
