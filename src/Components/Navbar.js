import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            EasyRide
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Bookings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Traffic Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Wallet
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form className="container-fluid justify-content-end">
          <button className="btn btn-sm btn-outline-success me-2" type="button">
            Login
          </button>
          <button className="btn btn-sm btn-secondary" type="button">
            Signup
          </button>
        </form>
      </nav>
    </>
  );
}

export default Navbar;
