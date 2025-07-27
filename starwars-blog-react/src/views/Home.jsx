import { Link } from "react-router-dom";
import React from "react";
import Card from "../components/Card.jsx";

function Home() {
  return (
    <div className="home w-100">
      <button className="btn btn-primary">hola</button>
      <div>
        <h1>Chatacters</h1>
        <div
          className="d-flex gap-5 overflow-auto"
          style={{ whiteSpace: "nowrap" }}
        >
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
