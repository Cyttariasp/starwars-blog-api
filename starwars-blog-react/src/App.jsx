import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Characters from "./views/Characters.jsx";
import Planets from "./views/Planets.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Characters/:id" element={<Characters />} />
          <Route path="/Planets/:id" element={<Planets />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
