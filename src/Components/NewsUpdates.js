import React from "react";
import BRT from "../images/brt.jpg";
import Bus from "../images/bus.jpg";

function NewsUpdates() {
  return (
    <>
      <div className="container text-center my-4">
        <h3>News &amp; Updates</h3>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={BRT} className="card-img-top p-3" alt="..." />
              <p>BRT fares revert 100 &#37; to former rate</p>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Bus} className="card-img-top p-3" alt="..." />
              <p>BRT fares revert 100 &#37; to former rate</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsUpdates;
