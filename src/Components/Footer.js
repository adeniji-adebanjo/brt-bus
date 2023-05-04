import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaDribbble,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-3 my-sm-3">
            <h3>EasyRide</h3>
            <p>Let's help you get to your destination with ease.</p>
          </div>
          <div className="col my-sm-3">
            <ul className="List">
              <li>
                <p className="label">Product</p>
              </li>
              <li>
                <a href="/">Overview</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Solutions</a>
                <button
                  type="button"
                  className="btn btn-light"
                  style={{
                    backgroundColor: "black",
                    "--bs-btn-padding-y": ".15rem",
                    "--bs-btn-padding-x": ".2rem",
                    "--bs-btn-font-size": ".30rem",
                    "--bs-btn-color": "white",
                    "--bs-btn-border-radius": ".7rem",
                  }}
                >
                  New
                </button>
              </li>
              <li>
                <a href="/">Tutorials</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="#">Releases</a>
              </li>
            </ul>
          </div>
          <div className="col my-sm-3">
            <ul className="List">
              <li>
                <p className="label">Company</p>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Media kit</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col my-sm-3">
            <ul className="List ">
              <li>
                <p className="label">Resources</p>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Newsletter</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/">Help centre</a>
              </li>
              <li>
                <a href="/">Tutorials</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </div>
          <div className="col my-sm-3">
            <ul className="List ">
              <li>
                <p className="label">Social</p>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
              <li>
                <a href="/">Linkedin</a>
              </li>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">GitHub</a>
              </li>
              <li>
                <a href="/">AngelList</a>
              </li>
              <li>
                <a href="/">Dribble</a>
              </li>
            </ul>
          </div>
          <div className="col my-sm-3">
            <ul className="List">
              <li>
                <p className="label">Legal</p>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Cookies</a>
              </li>
              <li>
                <a href="/">Licenses</a>
              </li>
              <li>
                <a href="/">Settings</a>
              </li>
              <li>
                <a href="/">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="justify-content-between">
          <div className="row ">
            <div className="col">
              <p>&copy; 2023, Untitled UI. All Rights Reserved.</p>
            </div>
            <div className="col">
              <FaGithub /> <FaFacebook /> <FaDribbble /> <FaTwitter />
              <FaGoogle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
