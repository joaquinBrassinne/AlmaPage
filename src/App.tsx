import NavBar from "./components/NavBar/NavBar";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";

import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="mainContainer">
        <QuienesSomos />
      </div>
    </>
  );
}

export default App;
