import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { SketchPicker } from 'react-color'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/ ">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" bs-success-border-subtle="true">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">{props.aboutText}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/">Contacts</Link>
            </li>

          </ul>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>
          </div>

          <form className="d-flex" role="search">
            <input className="form-control me-2" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success mx-1" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,  //Restricts title to be a String 
  //isRequired tells that it must be provided. 
  aboutText: PropTypes.string.isRequired  //Restricts aboutText to be String
}

//defaultProps when the user didn't provide the props then these props will be accepted.
Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About text Here"
}