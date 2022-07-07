import { Link } from "react-router-dom";

let Navbar = (props) => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/blog">
                  Blogs
                </Link>
              </li>
            </ul>

            <div className={props.class}>
              <Link className="btn btn-outline-primary mx-2" type="submit">
                {props.signIn}
              </Link>
              <Link className="btn btn-outline-info" type="submit">
                {props.signUp}
              </Link>
            </div>

            <form className="d-flex" role="search">
              <input
                className="form-control mx-4 me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
