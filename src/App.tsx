import NavBar from "./components/NavBar/NavBar";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Servicios from "./components/Servicios/Servicios";

import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="mainContainer">
        <QuienesSomos />
        <Servicios />
      </div>
    </>
  );
}

export default App;
