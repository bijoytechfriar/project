import React from 'react'
import styles from '../../styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <div className={styles.container1}>
       <nav id="a" className="navbar navbar-expand-lg" >
        
        <div id="c" className="container">
        
          <a class="navbar-brand me-5" href="#">
            <h2><b style={{color:'white'}}>Admin</b></h2>
          </a>
       

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div  class="collapse navbar-collapse nav" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active me-5 mr-5"
                  aria-current="page"
                  href="#"
                >
                  <h6 id='demo' style={{color:'white'}}>About</h6>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active me-5" href="#">
                  <h6 id='dem'   style={{color:'white'}}>contactus</h6>
                </a>
              </li>
              <li  class="nav-item me-5 mt-2">
                <Link  href="#">
                  <a>
                    <FontAwesomeIcon icon={faBell} />
                  </a>
                </Link>
              </li>
              <li class="nav-item me-5 mt-2">
                <Link href="#">
                  <a>
                    <FontAwesomeIcon id="bell" icon={faEnvelope} />
                  </a>
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button  class="btn btn-outline-secondary text-white" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      
    </div>
  )
}

export default Header