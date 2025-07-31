import React from "react";
import { Link } from "react-router-dom";

function Loadingcard() {
  return (
    <div className="card p-0" style={{ width: "400px", minWidth: "400px" }}>
      <img src="https://www.hugozapata.com.ar/wp-content/uploads/2010/08/ewoks.jpg" />
      <div className="card-body">
        <h5 className="card-title">Ewok working...</h5>
        <p
          className="card-text"
          style={{
            whiteSpace: "normal",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          Our Ewoks are working for you, because the API was giving me problems
          when I did all the fetches at the same time :c thanks for your
          patience
        </p>
      </div>
    </div>
  );
}

export default Loadingcard;
