import React from 'react'
import { Link } from 'gatsby'
import codepen from '../img/social/codepen.svg'
import github from '../img/social/github.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="has-background-black has-text-white-ter">
            <div style={{ margin: '0 auto' }} className="columns justify-between">
                <section className="menu column is-4 half-width ninety-width">
                  <ul style={{ margin: "0" }}>
                    <li>
                        &copy; Eric Phifer LLC {new Date().getFullYear()}
                    </li>
                    <li>
                      <a href="https://ericphifer.com" target="_blank" rel="noreferrer">
                        Designed &amp; Developed by Eric Phifer LLC
                      </a>
                    </li>
                    <li>
                      <span>
                        <a href="https://ericphifer.com/privacypolicy" target="_blank" rel="noreferrer">Privacy Policy</a> |{' '}
                        <a href="https://ericphifer.com/termsconditions" target="_blank" rel="noreferrer">Terms &amp; Conditions</a>
                      </span>
                    </li>
                  </ul>
                </section>
                <div className="columns is-mobile center half-width ninety-width">
                  <section className="column is-half">
                    <ul>
                      <li>
                        <Link to="/blog">
                          Latest Stories
                        </Link>
                      </li>
                    </ul>
                  </section>
                  <section className="column is-half flex">
                    <a className="social" title="codepen" target="_blank" rel="noreferrer" href="https://codepen.io/Eric-Phifer">
                      <img
                        src={codepen}
                        alt="CodePen"
                        style={{ width: '2em', height: '2em' }}
                        />
                    </a>
                    <a className="social" title="github" target="_blank" rel="noreferrer" href="https://github.com/EricPhifer">
                      <img
                        className="fas fa-lg"
                        src={github}
                        alt="GitHub"
                        style={{ width: '2em', height: '2em' }}
                        />
                    </a>
                  </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
