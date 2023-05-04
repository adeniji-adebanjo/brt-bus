import React from "react";
import "../css/download.css";
import Map from "../images/map.png";

function DownloadApp() {
  return (
    <>
      <div className="container download p-3 rounded-3">
        <div className="row align-items-center">
          <div className="col text-center text-white">
            <h3>Download Our App</h3>
            <h5>Enjoy our services from the comfort of your home.</h5>
            <a href="/">
              <h6>Download now!</h6>{" "}
            </a>
          </div>
          <div className="col justify-content-end">
            <img src={Map} alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadApp;
