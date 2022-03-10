import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function Features() {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <Link to="/" className="link-dark pe-2">
              <FaGithub size="30px" />
            </Link>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <Link to="/" className="link-dark pe-2">
              <FaGithub size="30px" />
            </Link>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <Link to="/" className="link-dark pe-2">
              <FaGithub size="30px" />
            </Link>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <Link to="/" className="link-dark pe-2">
              <FaGithub size="30px" />
            </Link>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <Link to="/" className="link-dark pe-2">
              <FaGithub size="30px" />
            </Link>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <Link to="/" className="link-dark pe-2">
              <FaGithub size="30px" />
            </Link>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <Link to="/" className="link-dark pe-2">
              <FaGithub size="30px" />
            </Link>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <Link to="/" className="link-dark pe-2">
              <FaGithub size="30px" />
            </Link>
            <div>
              <h4 className="fw-bold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
