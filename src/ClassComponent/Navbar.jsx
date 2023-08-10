import React, { Component } from "react";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg background sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="#">
              TEJ NEWS
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-light active"
                    aria-current="page"
                    to="/"
                  >
                    All
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-light" to="/politics">
                    Politics
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-light active"
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light active"
                    aria-current="page"
                    to="/covid"
                  >
                    Covid-19{" "}
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-light dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Other
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/education">
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/education">
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/crime">
                        Crime
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/cricket">
                        Cricket
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sport">
                        Sport
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/jokes">
                        Jokes
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-light dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => this.props.changeLanguage("hi")}
                      >
                        Hindi
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => this.props.changeLanguage("en")}
                      >
                        English
                      </button>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-light dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Artical Size
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Artical Size
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        8
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        12
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        16
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        20
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
