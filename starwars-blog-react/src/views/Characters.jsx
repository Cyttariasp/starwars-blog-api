import { Link, useParams } from "react-router-dom";
import React from "react";

function Characters() {
  const { id } = useParams();
  const [character, setCharacter] = React.useState({});
  React.useEffect(() => {
    console.log(id);
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data.result.properties))
      .catch((err) => console.error(err));
  }, [id]);

  console.log(id);

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div
            className="bg-secondary"
            style={{ height: "400px", width: "600px" }}
          ></div>
        </div>
        <div className="col-6">
          <h1>{character.name}</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            reprehenderit dolores perspiciatis ipsa quam! Recusandae assumenda
            saepe exercitationem provident temporibus dicta molestiae
            perferendis! Quas qui debitis placeat. Accusamus, inventore
            repellendus!
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-2 text-danger">
          Name <br /> {character.name}
        </div>
        <div className="col-2 text-danger">
          Birth year <br /> {character.birth_year}
        </div>
        <div className="col-2 text-danger">
          Gender <br /> {character.gender}
        </div>
        <div className="col-2 text-danger">
          Height <br /> {character.height}
        </div>
        <div className="col-2 text-danger">
          Skin color <br /> {character.skin_color}
        </div>
        <div className="col-2 text-danger">
          Eye color <br /> {character.eye_color}
        </div>
      </div>
    </div>
  );
}

export default Characters;
