import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import mobilelogo from '../img/favicon.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  // toggleHamburger = () => {
  //   // toggle the active boolean in the state
  //   this.setState(
  //     {
  //       active: !this.state.active,
  //     },
  //     // after state has been updated,
  //     () => {
  //       // set the class in state for the navbar accordingly
  //       this.state.active
  //         ? this.setState({
  //             navBarActiveClass: 'is-active',
  //           })
  //         : this.setState({
  //             navBarActiveClass: '',
  //           })
  //     }
  //   )
  // }

  render() {
    return (
      <div>
        <nav className="navStyles">
          <ul>
            <li className="navLink">
              <a href="https://ericphifer.com/about" rel="noreferrer" >About</a>
            </li>
            <li className="navLink">
              <Link to="/" rel="noreferrer">
                Blog
              </Link>
            </li>
            <li className="logo" className="navLink">
              <a href="https://ericphifer.com" rel="noreferrer">
                <img src={logo} alt="Logo" style={{ width: '9rem', height: '7rem' }} />
              </a>
            </li>
            <li className="navLink">
              <a href="https://services.ericphifer.com"  rel="noreferrer">
                Services
              </a>
            </li>
            <li className="navLink">
              <a href="https://ericphifer.com/contact" rel="noreferrer">Contact</a>
            </li>
          </ul>
        </nav>
        <nav className="mobileNavStyles">
          <div id="menuToggle">
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id="menu">
              <li className="mobileLink">
                <Link to="/about">About</Link>
              </li>
              <li className="mobileLink">
                <a href="https://blog.ericphifer.com" rel="noreferrer">
                  Blog
                </a>
              </li>
              <li className="mobileLink">
                <a href="https://services.ericphifer.com" rel="noreferrer">
                  Services
                </a>
              </li>
              <li className="mobileLink">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="mobileLink">
                <a href="https://ericphifer.com" rel="noreferrer">
                  <img src={mobilelogo} alt="Mobile Logo" style={{ width: '9rem', height: '7rem' }} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
