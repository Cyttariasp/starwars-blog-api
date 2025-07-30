import { Link, useParams } from "react-router-dom";
import React from "react";

function Vehicles() {
  const { id } = useParams();
  const [vehicle, setVehicles] = React.useState({});
  React.useEffect(() => {
    console.log(id);
    fetch(`https://www.swapi.tech/api/vehicles/${id}`)
      .then((res) => res.json())
      .then((data) => setVehicles(data.result.properties))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <div className="row">
        <div className="col-auto m-2">
          <div
            className="bg-secondary"
            style={{ height: "400px", width: "600px" }}
          ></div>{" "}
        </div>
        <div className="col-auto">
          <h1>{vehicle.name}</h1>
          <p>{vehicle.films}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-2 text-danger">
          Name <br /> {vehicle.name}
        </div>
        <div className="col-2 text-danger">
          Cost in cradits <br /> {vehicle.cost_in_credits}
        </div>
        <div className="col-2 text-danger">
          Lenght <br /> {vehicle.length}
        </div>
        <div className="col-2 text-danger">
          Model <br /> {vehicle.model}
        </div>
        <div className="col-2 text-danger">
          Passengers <br /> {vehicle.passengers}
        </div>
        <div className="col-2 text-danger">
          Vehicle class <br /> {vehicle.vehicle_class}
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
