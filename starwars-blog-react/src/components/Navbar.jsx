import { Link } from "react-router-dom";

function Navbar({ favorites, removeFavorite }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark-subtle w-100 fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          STARWARS
        </Link>
        <div className="dropdown" id="navbarNavDropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            {favorites.length === 0 ? (
              <li>
                <a className="dropdown-item" href="#">
                  Empty
                </a>
              </li>
            ) : (
              favorites.map((fav) => (
                <li key={fav.uid}>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      className="dropdown-item"
                      to={`/${fav.type.toLowerCase()}s/${fav.uid}`}
                    >
                      {fav.name}
                    </Link>
                    <button
                      className="btn btn-outline-danger btn-sm mx-2"
                      onClick={() => removeFavorite(fav.uid)}
                    >
                      x
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
