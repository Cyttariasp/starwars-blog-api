function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark-subtle  w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          STARWARS
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
