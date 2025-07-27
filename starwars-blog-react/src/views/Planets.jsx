import { Link } from "react-router-dom";

function Planets(props) {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img src={props.img} className="img-fluid" alt="Star Wars Plantet" />
        </div>
        <div className="col-6">
          <h1>{props.name}</h1>
          <p>{props.info}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-2">Name {props.name}</div>
        <div className="col-2">Climate {props.year}</div>
        <div className="col-2">Population {props.gender}</div>
        <div className="col-2">Oribital period {props.height}</div>
        <div className="col-2">Rotation period {props.skin}</div>
        <div className="col-2">Diameter {props.eyes}</div>
      </div>
    </div>
  );
}

export default Planets;
