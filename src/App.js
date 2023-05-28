import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
    <div className="bg_main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>
    </div>
  );
}

export default App;
