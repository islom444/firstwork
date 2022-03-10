import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="p-5">
        <footer className="py-5">
          <div className="row">
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <Link to="/" className="nav-link p-0 text-muted">
                  Home
                </Link>
                <Link to="/Album" className="nav-link p-0 text-muted">
                  Album
                </Link>
                <Link to="/Blog" className="nav-link p-0 text-muted">
                  Blog
                </Link>
                <Link to="/Features" className="nav-link p-0 text-muted">
                  Features
                </Link>
                <Link to="/Pricing" className="nav-link p-0 text-muted">
                  Pricing
                </Link>
                <Link to="/Product" className="nav-link p-0 text-muted">
                  Product
                </Link>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <Link to="/" className="nav-link p-0 text-muted">
                  Home
                </Link>
                <Link to="/Album" className="nav-link p-0 text-muted">
                  Album
                </Link>
                <Link to="/Blog" className="nav-link p-0 text-muted">
                  Blog
                </Link>
                <Link to="/Features" className="nav-link p-0 text-muted">
                  Features
                </Link>
                <Link to="/Pricing" className="nav-link p-0 text-muted">
                  Pricing
                </Link>
                <Link to="/Product" className="nav-link p-0 text-muted">
                  Product
                </Link>
              </ul>
            </div>

            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <Link to="/" className="nav-link p-0 text-muted">
                  Home
                </Link>
                <Link to="/Album" className="nav-link p-0 text-muted">
                  Album
                </Link>
                <Link to="/Blog" className="nav-link p-0 text-muted">
                  Blog
                </Link>
                <Link to="/Features" className="nav-link p-0 text-muted">
                  Features
                </Link>
                <Link to="/Pricing" className="nav-link p-0 text-muted">
                  Pricing
                </Link>
                <Link to="/Product" className="nav-link p-0 text-muted">
                  Product
                </Link>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2021 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <Link to="/" className="link-dark">
                <FaGithub /> Checked
              </Link>
              <Link to="/" className="link-dark">
                <FaGithub /> Checked
              </Link>
              <Link to="/" className="link-dark">
                <FaGithub /> Checked
              </Link>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
