import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
function Header() {
  return (
    <div>
      <header className="p-3 bg-dark text-white mb-5">
        <div className="">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <Link to="/" className="link-danger text-decoration-none text-warning fst-normal d-flex align-items-center px-3">
                <AiTwotoneHome className="mx-3" size="3em" color="rgb(255,193,7)"/> HOME CITY
              </Link>
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Link to="/" className="nav-link ps-5 px-2 text-white">
                Home
              </Link>
              <Link to="/Album" className="nav-link px-2 text-white">
              Album
              </Link>
              <Link to="/Blog" className="nav-link px-2 text-white">
              Blog
              </Link>
              <Link to="/Features" className="nav-link px-2 text-white">
              Fatures
              </Link>
              <Link to="/Pricing" className="nav-link px-2 text-white">
                Pricing
              </Link>
              <Link to="/Product" className="nav-link px-2 text-white">
                Product
              </Link>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
