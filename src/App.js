import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HeroHome from "./components/HeroHome";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="bg_main">
      <Routes>
      <Route path="/" element={<Home/>} />
     </Routes>
      
     </div>
  );
}

export default App;
