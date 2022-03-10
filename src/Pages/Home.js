import React from "react";
import { DiReact } from "react-icons/di";
function Home() {
  return (
    <div>
      <div className="container">
        <div className="p-5 mb-4 bg-light rounded-3 d-flex">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold mb-5">The is Home page</h1>
            <p className="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
          <div>
            <DiReact size="20em" color="#61DAFB" />
            <p className="text-center" style={{fontSize : "3rem", color: ""}}>React App</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
