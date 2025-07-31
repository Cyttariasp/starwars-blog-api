import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Characters from "./views/Characters.jsx";
import Planets from "./views/Planets.jsx";
import Vehicles from "./views/Vehicles.jsx";
import React from "react";

function App() {
  const [favorites, setFavorites] = React.useState([]);

  const addFavorite = (item) => {
    if (!favorites.some((fav) => fav.uid === item.uid)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (uid) => {
    setFavorites(favorites.filter((fav) => fav.uid !== uid));
  };

  console.log(favorites);

  return (
    <>
      <BrowserRouter>
        <Navbar favorites={favorites} removeFavorite={removeFavorite} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home addFavorite={addFavorite} favorites={favorites} />}
          />
          <Route exact path="/" element={<Home />} />
          <Route path="/Characters/:id" element={<Characters />} />
          <Route path="/Planets/:id" element={<Planets />} />
          <Route path="/Vehicles/:id" element={<Vehicles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
