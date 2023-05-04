import React from "react";
import "../css/hero.css";

function Hero() {
  return (
    <>
      <div className="text-center bg-image hero-img">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Let Us Help You Get To Your Destination</h1>
              <a className="btn btn-primary btn-lg p-3" href="/" role="button">
                Discover more...
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
