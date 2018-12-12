import React from "react";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";
class Header extends React.Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <nav
        className="navbar"
        aria-label="main navigation"
        style={{ borderBottom: "solid 1px #dddddd" }}
      >
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/" activeClassName="is-active">
            <img
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                borderBottomLeftRadius: "50%",
                borderBottomRightRadius: "50%",
                marginRight: 15
              }}
              src={logo}
              width="30px"
              alt=""
            />
            <span>Home Page</span>
          </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={
            this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              to="/blog"
              activeClassName="is-active"
            >
              <span
                className="icon has-text-primary"
                style={{ marginRight: 5 }}
              >
                <i className="fas fa-code" />
              </span>
              Code Blog
            </NavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Projects</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Overview</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">This Site</a>
                <a className="navbar-item">Northcoders</a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/smile4nicki">
              <span className="icon">
                <i className="fab fa-lg fa-github" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://instagram.com/coffeeandcodes"
            >
              <span className="instagram">
                <i className="fab fa-lg fa-instagram" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://www.linkedin.com/in/nichola-ward-5b955012a/"
            >
              CV
              <span
                className="icon"
                style={{ color: "#0077B5", marginLeft: 5 }}
              >
                <i className="fab fa-lg fa-linkedin" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
